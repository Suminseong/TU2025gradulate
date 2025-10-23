(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(o){if(o.ep)return;o.ep=!0;const u=i(o);fetch(o.href,u)}})();function X_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var fp={exports:{}},Ml={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d1;function vT(){if(d1)return Ml;d1=1;var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(a,o,u){var d=null;if(u!==void 0&&(d=""+u),o.key!==void 0&&(d=""+o.key),"key"in o){u={};for(var p in o)p!=="key"&&(u[p]=o[p])}else u=o;return o=u.ref,{$$typeof:n,type:a,key:d,ref:o!==void 0?o:null,props:u}}return Ml.Fragment=t,Ml.jsx=i,Ml.jsxs=i,Ml}var f1;function _T(){return f1||(f1=1,fp.exports=vT()),fp.exports}var y=_T(),pp={exports:{}},Dt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p1;function wT(){if(p1)return Dt;p1=1;var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),E=Symbol.iterator;function T(P){return P===null||typeof P!="object"?null:(P=E&&P[E]||P["@@iterator"],typeof P=="function"?P:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,k={};function V(P,at,ct){this.props=P,this.context=at,this.refs=k,this.updater=ct||A}V.prototype.isReactComponent={},V.prototype.setState=function(P,at){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,at,"setState")},V.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function B(){}B.prototype=V.prototype;function q(P,at,ct){this.props=P,this.context=at,this.refs=k,this.updater=ct||A}var Z=q.prototype=new B;Z.constructor=q,M(Z,V.prototype),Z.isPureReactComponent=!0;var lt=Array.isArray,K={H:null,A:null,T:null,S:null,V:null},ot=Object.prototype.hasOwnProperty;function I(P,at,ct,ht,gt,jt){return ct=jt.ref,{$$typeof:n,type:P,key:at,ref:ct!==void 0?ct:null,props:jt}}function C(P,at){return I(P.type,at,void 0,void 0,void 0,P.props)}function j(P){return typeof P=="object"&&P!==null&&P.$$typeof===n}function O(P){var at={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(ct){return at[ct]})}var U=/\/+/g;function $(P,at){return typeof P=="object"&&P!==null&&P.key!=null?O(""+P.key):at.toString(36)}function D(){}function se(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(D,D):(P.status="pending",P.then(function(at){P.status==="pending"&&(P.status="fulfilled",P.value=at)},function(at){P.status==="pending"&&(P.status="rejected",P.reason=at)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function Kt(P,at,ct,ht,gt){var jt=typeof P;(jt==="undefined"||jt==="boolean")&&(P=null);var _t=!1;if(P===null)_t=!0;else switch(jt){case"bigint":case"string":case"number":_t=!0;break;case"object":switch(P.$$typeof){case n:case t:_t=!0;break;case v:return _t=P._init,Kt(_t(P._payload),at,ct,ht,gt)}}if(_t)return gt=gt(P),_t=ht===""?"."+$(P,0):ht,lt(gt)?(ct="",_t!=null&&(ct=_t.replace(U,"$&/")+"/"),Kt(gt,at,ct,"",function(Me){return Me})):gt!=null&&(j(gt)&&(gt=C(gt,ct+(gt.key==null||P&&P.key===gt.key?"":(""+gt.key).replace(U,"$&/")+"/")+_t)),at.push(gt)),1;_t=0;var ge=ht===""?".":ht+":";if(lt(P))for(var zt=0;zt<P.length;zt++)ht=P[zt],jt=ge+$(ht,zt),_t+=Kt(ht,at,ct,jt,gt);else if(zt=T(P),typeof zt=="function")for(P=zt.call(P),zt=0;!(ht=P.next()).done;)ht=ht.value,jt=ge+$(ht,zt++),_t+=Kt(ht,at,ct,jt,gt);else if(jt==="object"){if(typeof P.then=="function")return Kt(se(P),at,ct,ht,gt);throw at=String(P),Error("Objects are not valid as a React child (found: "+(at==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":at)+"). If you meant to render a collection of children, use an array instead.")}return _t}function tt(P,at,ct){if(P==null)return P;var ht=[],gt=0;return Kt(P,ht,"","",function(jt){return at.call(ct,jt,gt++)}),ht}function dt(P){if(P._status===-1){var at=P._result;at=at(),at.then(function(ct){(P._status===0||P._status===-1)&&(P._status=1,P._result=ct)},function(ct){(P._status===0||P._status===-1)&&(P._status=2,P._result=ct)}),P._status===-1&&(P._status=0,P._result=at)}if(P._status===1)return P._result.default;throw P._result}var yt=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var at=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(at))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)};function Ct(){}return Dt.Children={map:tt,forEach:function(P,at,ct){tt(P,function(){at.apply(this,arguments)},ct)},count:function(P){var at=0;return tt(P,function(){at++}),at},toArray:function(P){return tt(P,function(at){return at})||[]},only:function(P){if(!j(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},Dt.Component=V,Dt.Fragment=i,Dt.Profiler=o,Dt.PureComponent=q,Dt.StrictMode=a,Dt.Suspense=m,Dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,Dt.__COMPILER_RUNTIME={__proto__:null,c:function(P){return K.H.useMemoCache(P)}},Dt.cache=function(P){return function(){return P.apply(null,arguments)}},Dt.cloneElement=function(P,at,ct){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var ht=M({},P.props),gt=P.key,jt=void 0;if(at!=null)for(_t in at.ref!==void 0&&(jt=void 0),at.key!==void 0&&(gt=""+at.key),at)!ot.call(at,_t)||_t==="key"||_t==="__self"||_t==="__source"||_t==="ref"&&at.ref===void 0||(ht[_t]=at[_t]);var _t=arguments.length-2;if(_t===1)ht.children=ct;else if(1<_t){for(var ge=Array(_t),zt=0;zt<_t;zt++)ge[zt]=arguments[zt+2];ht.children=ge}return I(P.type,gt,void 0,void 0,jt,ht)},Dt.createContext=function(P){return P={$$typeof:d,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:u,_context:P},P},Dt.createElement=function(P,at,ct){var ht,gt={},jt=null;if(at!=null)for(ht in at.key!==void 0&&(jt=""+at.key),at)ot.call(at,ht)&&ht!=="key"&&ht!=="__self"&&ht!=="__source"&&(gt[ht]=at[ht]);var _t=arguments.length-2;if(_t===1)gt.children=ct;else if(1<_t){for(var ge=Array(_t),zt=0;zt<_t;zt++)ge[zt]=arguments[zt+2];gt.children=ge}if(P&&P.defaultProps)for(ht in _t=P.defaultProps,_t)gt[ht]===void 0&&(gt[ht]=_t[ht]);return I(P,jt,void 0,void 0,null,gt)},Dt.createRef=function(){return{current:null}},Dt.forwardRef=function(P){return{$$typeof:p,render:P}},Dt.isValidElement=j,Dt.lazy=function(P){return{$$typeof:v,_payload:{_status:-1,_result:P},_init:dt}},Dt.memo=function(P,at){return{$$typeof:g,type:P,compare:at===void 0?null:at}},Dt.startTransition=function(P){var at=K.T,ct={};K.T=ct;try{var ht=P(),gt=K.S;gt!==null&&gt(ct,ht),typeof ht=="object"&&ht!==null&&typeof ht.then=="function"&&ht.then(Ct,yt)}catch(jt){yt(jt)}finally{K.T=at}},Dt.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},Dt.use=function(P){return K.H.use(P)},Dt.useActionState=function(P,at,ct){return K.H.useActionState(P,at,ct)},Dt.useCallback=function(P,at){return K.H.useCallback(P,at)},Dt.useContext=function(P){return K.H.useContext(P)},Dt.useDebugValue=function(){},Dt.useDeferredValue=function(P,at){return K.H.useDeferredValue(P,at)},Dt.useEffect=function(P,at,ct){var ht=K.H;if(typeof ct=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ht.useEffect(P,at)},Dt.useId=function(){return K.H.useId()},Dt.useImperativeHandle=function(P,at,ct){return K.H.useImperativeHandle(P,at,ct)},Dt.useInsertionEffect=function(P,at){return K.H.useInsertionEffect(P,at)},Dt.useLayoutEffect=function(P,at){return K.H.useLayoutEffect(P,at)},Dt.useMemo=function(P,at){return K.H.useMemo(P,at)},Dt.useOptimistic=function(P,at){return K.H.useOptimistic(P,at)},Dt.useReducer=function(P,at,ct){return K.H.useReducer(P,at,ct)},Dt.useRef=function(P){return K.H.useRef(P)},Dt.useState=function(P){return K.H.useState(P)},Dt.useSyncExternalStore=function(P,at,ct){return K.H.useSyncExternalStore(P,at,ct)},Dt.useTransition=function(){return K.H.useTransition()},Dt.version="19.1.1",Dt}var m1;function Bm(){return m1||(m1=1,pp.exports=wT()),pp.exports}var L=Bm();const bt=X_(L);/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var g1="popstate";function ET(n={}){function t(a,o){let{pathname:u,search:d,hash:p}=a.location;return nm("",{pathname:u,search:d,hash:p},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function i(a,o){return typeof o=="string"?o:Zl(o)}return TT(t,i,null,n)}function de(n,t){if(n===!1||n===null||typeof n>"u")throw new Error(t)}function ri(n,t){if(!n){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function bT(){return Math.random().toString(36).substring(2,10)}function y1(n,t){return{usr:n.state,key:n.key,idx:t}}function nm(n,t,i=null,a){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof t=="string"?xo(t):t,state:i,key:t&&t.key||a||bT()}}function Zl({pathname:n="/",search:t="",hash:i=""}){return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(n+=i.charAt(0)==="#"?i:"#"+i),n}function xo(n){let t={};if(n){let i=n.indexOf("#");i>=0&&(t.hash=n.substring(i),n=n.substring(0,i));let a=n.indexOf("?");a>=0&&(t.search=n.substring(a),n=n.substring(0,a)),n&&(t.pathname=n)}return t}function TT(n,t,i,a={}){let{window:o=document.defaultView,v5Compat:u=!1}=a,d=o.history,p="POP",m=null,g=v();g==null&&(g=0,d.replaceState({...d.state,idx:g},""));function v(){return(d.state||{idx:null}).idx}function E(){p="POP";let V=v(),B=V==null?null:V-g;g=V,m&&m({action:p,location:k.location,delta:B})}function T(V,B){p="PUSH";let q=nm(k.location,V,B);g=v()+1;let Z=y1(q,g),lt=k.createHref(q);try{d.pushState(Z,"",lt)}catch(K){if(K instanceof DOMException&&K.name==="DataCloneError")throw K;o.location.assign(lt)}u&&m&&m({action:p,location:k.location,delta:1})}function A(V,B){p="REPLACE";let q=nm(k.location,V,B);g=v();let Z=y1(q,g),lt=k.createHref(q);d.replaceState(Z,"",lt),u&&m&&m({action:p,location:k.location,delta:0})}function M(V){return ST(V)}let k={get action(){return p},get location(){return n(o,d)},listen(V){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(g1,E),m=V,()=>{o.removeEventListener(g1,E),m=null}},createHref(V){return t(o,V)},createURL:M,encodeLocation(V){let B=M(V);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:T,replace:A,go(V){return d.go(V)}};return k}function ST(n,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),de(i,"No window.location.(origin|href) available to create URL");let a=typeof n=="string"?n:Zl(n);return a=a.replace(/ $/,"%20"),!t&&a.startsWith("//")&&(a=i+a),new URL(a,i)}function W_(n,t,i="/"){return AT(n,t,i,!1)}function AT(n,t,i,a){let o=typeof t=="string"?xo(t):t,u=rr(o.pathname||"/",i);if(u==null)return null;let d=Z_(n);RT(d);let p=null;for(let m=0;p==null&&m<d.length;++m){let g=UT(u);p=VT(d[m],g,a)}return p}function Z_(n,t=[],i=[],a="",o=!1){let u=(d,p,m=o,g)=>{let v={relativePath:g===void 0?d.path||"":g,caseSensitive:d.caseSensitive===!0,childrenIndex:p,route:d};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(a)&&m)return;de(v.relativePath.startsWith(a),`Absolute route path "${v.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(a.length)}let E=nr([a,v.relativePath]),T=i.concat(v);d.children&&d.children.length>0&&(de(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${E}".`),Z_(d.children,t,T,E,m)),!(d.path==null&&!d.index)&&t.push({path:E,score:OT(E,d.index),routesMeta:T})};return n.forEach((d,p)=>{if(d.path===""||!d.path?.includes("?"))u(d,p);else for(let m of J_(d.path))u(d,p,!0,m)}),t}function J_(n){let t=n.split("/");if(t.length===0)return[];let[i,...a]=t,o=i.endsWith("?"),u=i.replace(/\?$/,"");if(a.length===0)return o?[u,""]:[u];let d=J_(a.join("/")),p=[];return p.push(...d.map(m=>m===""?u:[u,m].join("/"))),o&&p.push(...d),p.map(m=>n.startsWith("/")&&m===""?"/":m)}function RT(n){n.sort((t,i)=>t.score!==i.score?i.score-t.score:kT(t.routesMeta.map(a=>a.childrenIndex),i.routesMeta.map(a=>a.childrenIndex)))}var IT=/^:[\w-]+$/,CT=3,jT=2,DT=1,NT=10,MT=-2,x1=n=>n==="*";function OT(n,t){let i=n.split("/"),a=i.length;return i.some(x1)&&(a+=MT),t&&(a+=jT),i.filter(o=>!x1(o)).reduce((o,u)=>o+(IT.test(u)?CT:u===""?DT:NT),a)}function kT(n,t){return n.length===t.length&&n.slice(0,-1).every((a,o)=>a===t[o])?n[n.length-1]-t[t.length-1]:0}function VT(n,t,i=!1){let{routesMeta:a}=n,o={},u="/",d=[];for(let p=0;p<a.length;++p){let m=a[p],g=p===a.length-1,v=u==="/"?t:t.slice(u.length)||"/",E=Eh({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},v),T=m.route;if(!E&&g&&i&&!a[a.length-1].route.index&&(E=Eh({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},v)),!E)return null;Object.assign(o,E.params),d.push({params:o,pathname:nr([u,E.pathname]),pathnameBase:BT(nr([u,E.pathnameBase])),route:T}),E.pathnameBase!=="/"&&(u=nr([u,E.pathnameBase]))}return d}function Eh(n,t){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[i,a]=PT(n.path,n.caseSensitive,n.end),o=t.match(i);if(!o)return null;let u=o[0],d=u.replace(/(.)\/+$/,"$1"),p=o.slice(1);return{params:a.reduce((g,{paramName:v,isOptional:E},T)=>{if(v==="*"){let M=p[T]||"";d=u.slice(0,u.length-M.length).replace(/(.)\/+$/,"$1")}const A=p[T];return E&&!A?g[v]=void 0:g[v]=(A||"").replace(/%2F/g,"/"),g},{}),pathname:u,pathnameBase:d,pattern:n}}function PT(n,t=!1,i=!0){ri(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let a=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,p,m)=>(a.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(a.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),a]}function UT(n){try{return n.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ri(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),n}}function rr(n,t){if(t==="/")return n;if(!n.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,a=n.charAt(i);return a&&a!=="/"?null:n.slice(i)||"/"}function zT(n,t="/"){let{pathname:i,search:a="",hash:o=""}=typeof n=="string"?xo(n):n;return{pathname:i?i.startsWith("/")?i:LT(i,t):t,search:FT(a),hash:KT(o)}}function LT(n,t){let i=t.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?i.length>1&&i.pop():o!=="."&&i.push(o)}),i.length>1?i.join("/"):"/"}function mp(n,t,i,a){return`Cannot include a '${n}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function $T(n){return n.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function Fm(n){let t=$T(n);return t.map((i,a)=>a===t.length-1?i.pathname:i.pathnameBase)}function Km(n,t,i,a=!1){let o;typeof n=="string"?o=xo(n):(o={...n},de(!o.pathname||!o.pathname.includes("?"),mp("?","pathname","search",o)),de(!o.pathname||!o.pathname.includes("#"),mp("#","pathname","hash",o)),de(!o.search||!o.search.includes("#"),mp("#","search","hash",o)));let u=n===""||o.pathname==="",d=u?"/":o.pathname,p;if(d==null)p=i;else{let E=t.length-1;if(!a&&d.startsWith("..")){let T=d.split("/");for(;T[0]==="..";)T.shift(),E-=1;o.pathname=T.join("/")}p=E>=0?t[E]:"/"}let m=zT(o,p),g=d&&d!=="/"&&d.endsWith("/"),v=(u||d===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(g||v)&&(m.pathname+="/"),m}var nr=n=>n.join("/").replace(/\/\/+/g,"/"),BT=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),FT=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,KT=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function HT(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var t2=["POST","PUT","PATCH","DELETE"];new Set(t2);var qT=["GET",...t2];new Set(qT);var vo=L.createContext(null);vo.displayName="DataRouter";var Bh=L.createContext(null);Bh.displayName="DataRouterState";L.createContext(!1);var e2=L.createContext({isTransitioning:!1});e2.displayName="ViewTransition";var GT=L.createContext(new Map);GT.displayName="Fetchers";var YT=L.createContext(null);YT.displayName="Await";var si=L.createContext(null);si.displayName="Navigation";var fu=L.createContext(null);fu.displayName="Location";var Hn=L.createContext({outlet:null,matches:[],isDataRoute:!1});Hn.displayName="Route";var Hm=L.createContext(null);Hm.displayName="RouteError";function QT(n,{relative:t}={}){de(_o(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:a}=L.useContext(si),{hash:o,pathname:u,search:d}=pu(n,{relative:t}),p=u;return i!=="/"&&(p=u==="/"?i:nr([i,u])),a.createHref({pathname:p,search:d,hash:o})}function _o(){return L.useContext(fu)!=null}function ji(){return de(_o(),"useLocation() may be used only in the context of a <Router> component."),L.useContext(fu).location}var n2="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function i2(n){L.useContext(si).static||L.useLayoutEffect(n)}function Fh(){let{isDataRoute:n}=L.useContext(Hn);return n?hS():XT()}function XT(){de(_o(),"useNavigate() may be used only in the context of a <Router> component.");let n=L.useContext(vo),{basename:t,navigator:i}=L.useContext(si),{matches:a}=L.useContext(Hn),{pathname:o}=ji(),u=JSON.stringify(Fm(a)),d=L.useRef(!1);return i2(()=>{d.current=!0}),L.useCallback((m,g={})=>{if(ri(d.current,n2),!d.current)return;if(typeof m=="number"){i.go(m);return}let v=Km(m,JSON.parse(u),o,g.relative==="path");n==null&&t!=="/"&&(v.pathname=v.pathname==="/"?t:nr([t,v.pathname])),(g.replace?i.replace:i.push)(v,g.state,g)},[t,i,u,o,n])}var WT=L.createContext(null);function ZT(n){let t=L.useContext(Hn).outlet;return t&&L.createElement(WT.Provider,{value:n},t)}function JT(){let{matches:n}=L.useContext(Hn),t=n[n.length-1];return t?t.params:{}}function pu(n,{relative:t}={}){let{matches:i}=L.useContext(Hn),{pathname:a}=ji(),o=JSON.stringify(Fm(i));return L.useMemo(()=>Km(n,JSON.parse(o),a,t==="path"),[n,o,a,t])}function tS(n,t){return r2(n,t)}function r2(n,t,i,a,o){de(_o(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=L.useContext(si),{matches:d}=L.useContext(Hn),p=d[d.length-1],m=p?p.params:{},g=p?p.pathname:"/",v=p?p.pathnameBase:"/",E=p&&p.route;{let q=E&&E.path||"";a2(g,!E||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let T=ji(),A;if(t){let q=typeof t=="string"?xo(t):t;de(v==="/"||q.pathname?.startsWith(v),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${q.pathname}" was given in the \`location\` prop.`),A=q}else A=T;let M=A.pathname||"/",k=M;if(v!=="/"){let q=v.replace(/^\//,"").split("/");k="/"+M.replace(/^\//,"").split("/").slice(q.length).join("/")}let V=W_(n,{pathname:k});ri(E||V!=null,`No routes matched location "${A.pathname}${A.search}${A.hash}" `),ri(V==null||V[V.length-1].route.element!==void 0||V[V.length-1].route.Component!==void 0||V[V.length-1].route.lazy!==void 0,`Matched leaf route at location "${A.pathname}${A.search}${A.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let B=aS(V&&V.map(q=>Object.assign({},q,{params:Object.assign({},m,q.params),pathname:nr([v,u.encodeLocation?u.encodeLocation(q.pathname).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?v:nr([v,u.encodeLocation?u.encodeLocation(q.pathnameBase).pathname:q.pathnameBase])})),d,i,a,o);return t&&B?L.createElement(fu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...A},navigationType:"POP"}},B):B}function eS(){let n=cS(),t=HT(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),i=n instanceof Error?n.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},u={padding:"2px 4px",backgroundColor:a},d=null;return console.error("Error handled by React Router default ErrorBoundary:",n),d=L.createElement(L.Fragment,null,L.createElement("p",null,"💿 Hey developer 👋"),L.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",L.createElement("code",{style:u},"ErrorBoundary")," or"," ",L.createElement("code",{style:u},"errorElement")," prop on your route.")),L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},t),i?L.createElement("pre",{style:o},i):null,d)}var nS=L.createElement(eS,null),iS=class extends L.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){this.props.unstable_onError?this.props.unstable_onError(n,t):console.error("React Router caught the following error during render",n)}render(){return this.state.error!==void 0?L.createElement(Hn.Provider,{value:this.props.routeContext},L.createElement(Hm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function rS({routeContext:n,match:t,children:i}){let a=L.useContext(vo);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),L.createElement(Hn.Provider,{value:n},i)}function aS(n,t=[],i=null,a=null,o=null){if(n==null){if(!i)return null;if(i.errors)n=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)n=i.matches;else return null}let u=n,d=i?.errors;if(d!=null){let g=u.findIndex(v=>v.route.id&&d?.[v.route.id]!==void 0);de(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),u=u.slice(0,Math.min(u.length,g+1))}let p=!1,m=-1;if(i)for(let g=0;g<u.length;g++){let v=u[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(m=g),v.route.id){let{loaderData:E,errors:T}=i,A=v.route.loader&&!E.hasOwnProperty(v.route.id)&&(!T||T[v.route.id]===void 0);if(v.route.lazy||A){p=!0,m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}return u.reduceRight((g,v,E)=>{let T,A=!1,M=null,k=null;i&&(T=d&&v.route.id?d[v.route.id]:void 0,M=v.route.errorElement||nS,p&&(m<0&&E===0?(a2("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),A=!0,k=null):m===E&&(A=!0,k=v.route.hydrateFallbackElement||null)));let V=t.concat(u.slice(0,E+1)),B=()=>{let q;return T?q=M:A?q=k:v.route.Component?q=L.createElement(v.route.Component,null):v.route.element?q=v.route.element:q=g,L.createElement(rS,{match:v,routeContext:{outlet:g,matches:V,isDataRoute:i!=null},children:q})};return i&&(v.route.ErrorBoundary||v.route.errorElement||E===0)?L.createElement(iS,{location:i.location,revalidation:i.revalidation,component:M,error:T,children:B(),routeContext:{outlet:null,matches:V,isDataRoute:!0},unstable_onError:a}):B()},null)}function qm(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function sS(n){let t=L.useContext(vo);return de(t,qm(n)),t}function oS(n){let t=L.useContext(Bh);return de(t,qm(n)),t}function lS(n){let t=L.useContext(Hn);return de(t,qm(n)),t}function Gm(n){let t=lS(n),i=t.matches[t.matches.length-1];return de(i.route.id,`${n} can only be used on routes that contain a unique "id"`),i.route.id}function uS(){return Gm("useRouteId")}function cS(){let n=L.useContext(Hm),t=oS("useRouteError"),i=Gm("useRouteError");return n!==void 0?n:t.errors?.[i]}function hS(){let{router:n}=sS("useNavigate"),t=Gm("useNavigate"),i=L.useRef(!1);return i2(()=>{i.current=!0}),L.useCallback(async(o,u={})=>{ri(i.current,n2),i.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:t,...u}))},[n,t])}var v1={};function a2(n,t,i){!t&&!v1[n]&&(v1[n]=!0,ri(!1,i))}L.memo(dS);function dS({routes:n,future:t,state:i,unstable_onError:a}){return r2(n,void 0,i,a,t)}function fS({to:n,replace:t,state:i,relative:a}){de(_o(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=L.useContext(si);ri(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=L.useContext(Hn),{pathname:d}=ji(),p=Fh(),m=Km(n,Fm(u),d,a==="path"),g=JSON.stringify(m);return L.useEffect(()=>{p(JSON.parse(g),{replace:t,state:i,relative:a})},[p,g,a,t,i]),null}function pS(n){return ZT(n.context)}function wi(n){de(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function mS({basename:n="/",children:t=null,location:i,navigationType:a="POP",navigator:o,static:u=!1}){de(!_o(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=n.replace(/^\/*/,"/"),p=L.useMemo(()=>({basename:d,navigator:o,static:u,future:{}}),[d,o,u]);typeof i=="string"&&(i=xo(i));let{pathname:m="/",search:g="",hash:v="",state:E=null,key:T="default"}=i,A=L.useMemo(()=>{let M=rr(m,d);return M==null?null:{location:{pathname:M,search:g,hash:v,state:E,key:T},navigationType:a}},[d,m,g,v,E,T,a]);return ri(A!=null,`<Router basename="${d}"> is not able to match the URL "${m}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),A==null?null:L.createElement(si.Provider,{value:p},L.createElement(fu.Provider,{children:t,value:A}))}function gS({children:n,location:t}){return tS(im(n),t)}function im(n,t=[]){let i=[];return L.Children.forEach(n,(a,o)=>{if(!L.isValidElement(a))return;let u=[...t,o];if(a.type===L.Fragment){i.push.apply(i,im(a.props.children,u));return}de(a.type===wi,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),de(!a.props.index||!a.props.children,"An index route cannot have child routes.");let d={id:a.props.id||u.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(d.children=im(a.props.children,u)),i.push(d)}),i}var rh="get",ah="application/x-www-form-urlencoded";function Kh(n){return n!=null&&typeof n.tagName=="string"}function yS(n){return Kh(n)&&n.tagName.toLowerCase()==="button"}function xS(n){return Kh(n)&&n.tagName.toLowerCase()==="form"}function vS(n){return Kh(n)&&n.tagName.toLowerCase()==="input"}function _S(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function wS(n,t){return n.button===0&&(!t||t==="_self")&&!_S(n)}var Kc=null;function ES(){if(Kc===null)try{new FormData(document.createElement("form"),0),Kc=!1}catch{Kc=!0}return Kc}var bS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function gp(n){return n!=null&&!bS.has(n)?(ri(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ah}"`),null):n}function TS(n,t){let i,a,o,u,d;if(xS(n)){let p=n.getAttribute("action");a=p?rr(p,t):null,i=n.getAttribute("method")||rh,o=gp(n.getAttribute("enctype"))||ah,u=new FormData(n)}else if(yS(n)||vS(n)&&(n.type==="submit"||n.type==="image")){let p=n.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=n.getAttribute("formaction")||p.getAttribute("action");if(a=m?rr(m,t):null,i=n.getAttribute("formmethod")||p.getAttribute("method")||rh,o=gp(n.getAttribute("formenctype"))||gp(p.getAttribute("enctype"))||ah,u=new FormData(p,n),!ES()){let{name:g,type:v,value:E}=n;if(v==="image"){let T=g?`${g}.`:"";u.append(`${T}x`,"0"),u.append(`${T}y`,"0")}else g&&u.append(g,E)}}else{if(Kh(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=rh,a=null,o=ah,d=n}return u&&o==="text/plain"&&(d=u,u=void 0),{action:a,method:i.toLowerCase(),encType:o,formData:u,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ym(n,t){if(n===!1||n===null||typeof n>"u")throw new Error(t)}function SS(n,t,i){let a=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return a.pathname==="/"?a.pathname=`_root.${i}`:t&&rr(a.pathname,t)==="/"?a.pathname=`${t.replace(/\/$/,"")}/_root.${i}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${i}`,a}async function AS(n,t){if(n.id in t)return t[n.id];try{let i=await import(n.module);return t[n.id]=i,i}catch(i){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function RS(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function IS(n,t,i){let a=await Promise.all(n.map(async o=>{let u=t.routes[o.route.id];if(u){let d=await AS(u,i);return d.links?d.links():[]}return[]}));return NS(a.flat(1).filter(RS).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function _1(n,t,i,a,o,u){let d=(m,g)=>i[g]?m.route.id!==i[g].route.id:!0,p=(m,g)=>i[g].pathname!==m.pathname||i[g].route.path?.endsWith("*")&&i[g].params["*"]!==m.params["*"];return u==="assets"?t.filter((m,g)=>d(m,g)||p(m,g)):u==="data"?t.filter((m,g)=>{let v=a.routes[m.route.id];if(!v||!v.hasLoader)return!1;if(d(m,g)||p(m,g))return!0;if(m.route.shouldRevalidate){let E=m.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof E=="boolean")return E}return!0}):[]}function CS(n,t,{includeHydrateFallback:i}={}){return jS(n.map(a=>{let o=t.routes[a.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),i&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function jS(n){return[...new Set(n)]}function DS(n){let t={},i=Object.keys(n).sort();for(let a of i)t[a]=n[a];return t}function NS(n,t){let i=new Set;return new Set(t),n.reduce((a,o)=>{let u=JSON.stringify(DS(o));return i.has(u)||(i.add(u),a.push({key:u,link:o})),a},[])}function s2(){let n=L.useContext(vo);return Ym(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function MS(){let n=L.useContext(Bh);return Ym(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Qm=L.createContext(void 0);Qm.displayName="FrameworkContext";function o2(){let n=L.useContext(Qm);return Ym(n,"You must render this element inside a <HydratedRouter> element"),n}function OS(n,t){let i=L.useContext(Qm),[a,o]=L.useState(!1),[u,d]=L.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:g,onMouseLeave:v,onTouchStart:E}=t,T=L.useRef(null);L.useEffect(()=>{if(n==="render"&&d(!0),n==="viewport"){let k=B=>{B.forEach(q=>{d(q.isIntersecting)})},V=new IntersectionObserver(k,{threshold:.5});return T.current&&V.observe(T.current),()=>{V.disconnect()}}},[n]),L.useEffect(()=>{if(a){let k=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(k)}}},[a]);let A=()=>{o(!0)},M=()=>{o(!1),d(!1)};return i?n!=="intent"?[u,T,{}]:[u,T,{onFocus:Ol(p,A),onBlur:Ol(m,M),onMouseEnter:Ol(g,A),onMouseLeave:Ol(v,M),onTouchStart:Ol(E,A)}]:[!1,T,{}]}function Ol(n,t){return i=>{n&&n(i),i.defaultPrevented||t(i)}}function kS({page:n,...t}){let{router:i}=s2(),a=L.useMemo(()=>W_(i.routes,n,i.basename),[i.routes,n,i.basename]);return a?L.createElement(PS,{page:n,matches:a,...t}):null}function VS(n){let{manifest:t,routeModules:i}=o2(),[a,o]=L.useState([]);return L.useEffect(()=>{let u=!1;return IS(n,t,i).then(d=>{u||o(d)}),()=>{u=!0}},[n,t,i]),a}function PS({page:n,matches:t,...i}){let a=ji(),{manifest:o,routeModules:u}=o2(),{basename:d}=s2(),{loaderData:p,matches:m}=MS(),g=L.useMemo(()=>_1(n,t,m,o,a,"data"),[n,t,m,o,a]),v=L.useMemo(()=>_1(n,t,m,o,a,"assets"),[n,t,m,o,a]),E=L.useMemo(()=>{if(n===a.pathname+a.search+a.hash)return[];let M=new Set,k=!1;if(t.forEach(B=>{let q=o.routes[B.route.id];!q||!q.hasLoader||(!g.some(Z=>Z.route.id===B.route.id)&&B.route.id in p&&u[B.route.id]?.shouldRevalidate||q.hasClientLoader?k=!0:M.add(B.route.id))}),M.size===0)return[];let V=SS(n,d,"data");return k&&M.size>0&&V.searchParams.set("_routes",t.filter(B=>M.has(B.route.id)).map(B=>B.route.id).join(",")),[V.pathname+V.search]},[d,p,a,o,g,t,n,u]),T=L.useMemo(()=>CS(v,o),[v,o]),A=VS(v);return L.createElement(L.Fragment,null,E.map(M=>L.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...i})),T.map(M=>L.createElement("link",{key:M,rel:"modulepreload",href:M,...i})),A.map(({key:M,link:k})=>L.createElement("link",{key:M,nonce:i.nonce,...k})))}function US(...n){return t=>{n.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var l2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{l2&&(window.__reactRouterVersion="7.9.1")}catch{}function zS({basename:n,children:t,window:i}){let a=L.useRef();a.current==null&&(a.current=ET({window:i,v5Compat:!0}));let o=a.current,[u,d]=L.useState({action:o.action,location:o.location}),p=L.useCallback(m=>{L.startTransition(()=>d(m))},[d]);return L.useLayoutEffect(()=>o.listen(p),[o,p]),L.createElement(mS,{basename:n,children:t,location:u.location,navigationType:u.action,navigator:o})}var u2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ts=L.forwardRef(function({onClick:t,discover:i="render",prefetch:a="none",relative:o,reloadDocument:u,replace:d,state:p,target:m,to:g,preventScrollReset:v,viewTransition:E,...T},A){let{basename:M}=L.useContext(si),k=typeof g=="string"&&u2.test(g),V,B=!1;if(typeof g=="string"&&k&&(V=g,l2))try{let j=new URL(window.location.href),O=g.startsWith("//")?new URL(j.protocol+g):new URL(g),U=rr(O.pathname,M);O.origin===j.origin&&U!=null?g=U+O.search+O.hash:B=!0}catch{ri(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let q=QT(g,{relative:o}),[Z,lt,K]=OS(a,T),ot=FS(g,{replace:d,state:p,target:m,preventScrollReset:v,relative:o,viewTransition:E});function I(j){t&&t(j),j.defaultPrevented||ot(j)}let C=L.createElement("a",{...T,...K,href:V||q,onClick:B||u?t:I,ref:US(A,lt),target:m,"data-discover":!k&&i==="render"?"true":void 0});return Z&&!k?L.createElement(L.Fragment,null,C,L.createElement(kS,{page:q})):C});ts.displayName="Link";var LS=L.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:a="",end:o=!1,style:u,to:d,viewTransition:p,children:m,...g},v){let E=pu(d,{relative:g.relative}),T=ji(),A=L.useContext(Bh),{navigator:M,basename:k}=L.useContext(si),V=A!=null&&YS(E)&&p===!0,B=M.encodeLocation?M.encodeLocation(E).pathname:E.pathname,q=T.pathname,Z=A&&A.navigation&&A.navigation.location?A.navigation.location.pathname:null;i||(q=q.toLowerCase(),Z=Z?Z.toLowerCase():null,B=B.toLowerCase()),Z&&k&&(Z=rr(Z,k)||Z);const lt=B!=="/"&&B.endsWith("/")?B.length-1:B.length;let K=q===B||!o&&q.startsWith(B)&&q.charAt(lt)==="/",ot=Z!=null&&(Z===B||!o&&Z.startsWith(B)&&Z.charAt(B.length)==="/"),I={isActive:K,isPending:ot,isTransitioning:V},C=K?t:void 0,j;typeof a=="function"?j=a(I):j=[a,K?"active":null,ot?"pending":null,V?"transitioning":null].filter(Boolean).join(" ");let O=typeof u=="function"?u(I):u;return L.createElement(ts,{...g,"aria-current":C,className:j,ref:v,style:O,to:d,viewTransition:p},typeof m=="function"?m(I):m)});LS.displayName="NavLink";var $S=L.forwardRef(({discover:n="render",fetcherKey:t,navigate:i,reloadDocument:a,replace:o,state:u,method:d=rh,action:p,onSubmit:m,relative:g,preventScrollReset:v,viewTransition:E,...T},A)=>{let M=qS(),k=GS(p,{relative:g}),V=d.toLowerCase()==="get"?"get":"post",B=typeof p=="string"&&u2.test(p),q=Z=>{if(m&&m(Z),Z.defaultPrevented)return;Z.preventDefault();let lt=Z.nativeEvent.submitter,K=lt?.getAttribute("formmethod")||d;M(lt||Z.currentTarget,{fetcherKey:t,method:K,navigate:i,replace:o,state:u,relative:g,preventScrollReset:v,viewTransition:E})};return L.createElement("form",{ref:A,method:V,action:k,onSubmit:a?m:q,...T,"data-discover":!B&&n==="render"?"true":void 0})});$S.displayName="Form";function BS(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function c2(n){let t=L.useContext(vo);return de(t,BS(n)),t}function FS(n,{target:t,replace:i,state:a,preventScrollReset:o,relative:u,viewTransition:d}={}){let p=Fh(),m=ji(),g=pu(n,{relative:u});return L.useCallback(v=>{if(wS(v,t)){v.preventDefault();let E=i!==void 0?i:Zl(m)===Zl(g);p(n,{replace:E,state:a,preventScrollReset:o,relative:u,viewTransition:d})}},[m,p,g,i,a,t,n,o,u,d])}var KS=0,HS=()=>`__${String(++KS)}__`;function qS(){let{router:n}=c2("useSubmit"),{basename:t}=L.useContext(si),i=uS();return L.useCallback(async(a,o={})=>{let{action:u,method:d,encType:p,formData:m,body:g}=TS(a,t);if(o.navigate===!1){let v=o.fetcherKey||HS();await n.fetch(v,i,o.action||u,{preventScrollReset:o.preventScrollReset,formData:m,body:g,formMethod:o.method||d,formEncType:o.encType||p,flushSync:o.flushSync})}else await n.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:m,body:g,formMethod:o.method||d,formEncType:o.encType||p,replace:o.replace,state:o.state,fromRouteId:i,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,t,i])}function GS(n,{relative:t}={}){let{basename:i}=L.useContext(si),a=L.useContext(Hn);de(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),u={...pu(n||".",{relative:t})},d=ji();if(n==null){u.search=d.search;let p=new URLSearchParams(u.search),m=p.getAll("index");if(m.some(v=>v==="")){p.delete("index"),m.filter(E=>E).forEach(E=>p.append("index",E));let v=p.toString();u.search=v?`?${v}`:""}}return(!n||n===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:nr([i,u.pathname])),Zl(u)}function YS(n,{relative:t}={}){let i=L.useContext(e2);de(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=c2("useViewTransitionState"),o=pu(n,{relative:t});if(!i.isTransitioning)return!1;let u=rr(i.currentLocation.pathname,a)||i.currentLocation.pathname,d=rr(i.nextLocation.pathname,a)||i.nextLocation.pathname;return Eh(o.pathname,d)!=null||Eh(o.pathname,u)!=null}var yp={exports:{}},rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w1;function QS(){if(w1)return rn;w1=1;var n=Bm();function t(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(m,g,v){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:E==null?null:""+E,children:m,containerInfo:g,implementation:v}}var d=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,rn.createPortal=function(m,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return u(m,g,null,v)},rn.flushSync=function(m){var g=d.T,v=a.p;try{if(d.T=null,a.p=2,m)return m()}finally{d.T=g,a.p=v,a.d.f()}},rn.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,a.d.C(m,g))},rn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},rn.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var v=g.as,E=p(v,g.crossOrigin),T=typeof g.integrity=="string"?g.integrity:void 0,A=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?a.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:E,integrity:T,fetchPriority:A}):v==="script"&&a.d.X(m,{crossOrigin:E,integrity:T,fetchPriority:A,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},rn.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=p(g.as,g.crossOrigin);a.d.M(m,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&a.d.M(m)},rn.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,E=p(v,g.crossOrigin);a.d.L(m,v,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},rn.preloadModule=function(m,g){if(typeof m=="string")if(g){var v=p(g.as,g.crossOrigin);a.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else a.d.m(m)},rn.requestFormReset=function(m){a.d.r(m)},rn.unstable_batchedUpdates=function(m,g){return m(g)},rn.useFormState=function(m,g,v){return d.H.useFormState(m,g,v)},rn.useFormStatus=function(){return d.H.useHostTransitionStatus()},rn.version="19.1.1",rn}var E1;function XS(){if(E1)return yp.exports;E1=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}return n(),yp.exports=QS(),yp.exports}var xp={exports:{}},vp,b1;function WS(){if(b1)return vp;b1=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return vp=n,vp}var _p,T1;function ZS(){if(T1)return _p;T1=1;var n=WS();function t(){}function i(){}return i.resetWarningCache=t,_p=function(){function a(d,p,m,g,v,E){if(E!==n){var T=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw T.name="Invariant Violation",T}}a.isRequired=a;function o(){return a}var u={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:o,element:a,elementType:a,instanceOf:o,node:a,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:i,resetWarningCache:t};return u.PropTypes=u,u},_p}var S1;function JS(){return S1||(S1=1,xp.exports=ZS()()),xp.exports}var t4=JS();const J=X_(t4);var _n=function(){return _n=Object.assign||function(t){for(var i,a=1,o=arguments.length;a<o;a++){i=arguments[a];for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&(t[u]=i[u])}return t},_n.apply(this,arguments)};function Jl(n,t,i){if(i||arguments.length===2)for(var a=0,o=t.length,u;a<o;a++)(u||!(a in t))&&(u||(u=Array.prototype.slice.call(t,0,a)),u[a]=t[a]);return n.concat(u||Array.prototype.slice.call(t))}var le="-ms-",Fl="-moz-",Gt="-webkit-",h2="comm",Hh="rule",Xm="decl",e4="@import",d2="@keyframes",n4="@layer",f2=Math.abs,Wm=String.fromCharCode,rm=Object.assign;function i4(n,t){return qe(n,0)^45?(((t<<2^qe(n,0))<<2^qe(n,1))<<2^qe(n,2))<<2^qe(n,3):0}function p2(n){return n.trim()}function er(n,t){return(n=t.exec(n))?n[0]:n}function Nt(n,t,i){return n.replace(t,i)}function sh(n,t,i){return n.indexOf(t,i)}function qe(n,t){return n.charCodeAt(t)|0}function ao(n,t,i){return n.slice(t,i)}function bi(n){return n.length}function m2(n){return n.length}function Ul(n,t){return t.push(n),n}function r4(n,t){return n.map(t).join("")}function A1(n,t){return n.filter(function(i){return!er(i,t)})}var qh=1,so=1,g2=0,Kn=0,je=0,wo="";function Gh(n,t,i,a,o,u,d,p){return{value:n,root:t,parent:i,type:a,props:o,children:u,line:qh,column:so,length:d,return:"",siblings:p}}function Yr(n,t){return rm(Gh("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},t)}function Gs(n){for(;n.root;)n=Yr(n.root,{children:[n]});Ul(n,n.siblings)}function a4(){return je}function s4(){return je=Kn>0?qe(wo,--Kn):0,so--,je===10&&(so=1,qh--),je}function ii(){return je=Kn<g2?qe(wo,Kn++):0,so++,je===10&&(so=1,qh++),je}function Ya(){return qe(wo,Kn)}function oh(){return Kn}function Yh(n,t){return ao(wo,n,t)}function am(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function o4(n){return qh=so=1,g2=bi(wo=n),Kn=0,[]}function l4(n){return wo="",n}function wp(n){return p2(Yh(Kn-1,sm(n===91?n+2:n===40?n+1:n)))}function u4(n){for(;(je=Ya())&&je<33;)ii();return am(n)>2||am(je)>3?"":" "}function c4(n,t){for(;--t&&ii()&&!(je<48||je>102||je>57&&je<65||je>70&&je<97););return Yh(n,oh()+(t<6&&Ya()==32&&ii()==32))}function sm(n){for(;ii();)switch(je){case n:return Kn;case 34:case 39:n!==34&&n!==39&&sm(je);break;case 40:n===41&&sm(n);break;case 92:ii();break}return Kn}function h4(n,t){for(;ii()&&n+je!==57;)if(n+je===84&&Ya()===47)break;return"/*"+Yh(t,Kn-1)+"*"+Wm(n===47?n:ii())}function d4(n){for(;!am(Ya());)ii();return Yh(n,Kn)}function f4(n){return l4(lh("",null,null,null,[""],n=o4(n),0,[0],n))}function lh(n,t,i,a,o,u,d,p,m){for(var g=0,v=0,E=d,T=0,A=0,M=0,k=1,V=1,B=1,q=0,Z="",lt=o,K=u,ot=a,I=Z;V;)switch(M=q,q=ii()){case 40:if(M!=108&&qe(I,E-1)==58){sh(I+=Nt(wp(q),"&","&\f"),"&\f",f2(g?p[g-1]:0))!=-1&&(B=-1);break}case 34:case 39:case 91:I+=wp(q);break;case 9:case 10:case 13:case 32:I+=u4(M);break;case 92:I+=c4(oh()-1,7);continue;case 47:switch(Ya()){case 42:case 47:Ul(p4(h4(ii(),oh()),t,i,m),m);break;default:I+="/"}break;case 123*k:p[g++]=bi(I)*B;case 125*k:case 59:case 0:switch(q){case 0:case 125:V=0;case 59+v:B==-1&&(I=Nt(I,/\f/g,"")),A>0&&bi(I)-E&&Ul(A>32?I1(I+";",a,i,E-1,m):I1(Nt(I," ","")+";",a,i,E-2,m),m);break;case 59:I+=";";default:if(Ul(ot=R1(I,t,i,g,v,o,p,Z,lt=[],K=[],E,u),u),q===123)if(v===0)lh(I,t,ot,ot,lt,u,E,p,K);else switch(T===99&&qe(I,3)===110?100:T){case 100:case 108:case 109:case 115:lh(n,ot,ot,a&&Ul(R1(n,ot,ot,0,0,o,p,Z,o,lt=[],E,K),K),o,K,E,p,a?lt:K);break;default:lh(I,ot,ot,ot,[""],K,0,p,K)}}g=v=A=0,k=B=1,Z=I="",E=d;break;case 58:E=1+bi(I),A=M;default:if(k<1){if(q==123)--k;else if(q==125&&k++==0&&s4()==125)continue}switch(I+=Wm(q),q*k){case 38:B=v>0?1:(I+="\f",-1);break;case 44:p[g++]=(bi(I)-1)*B,B=1;break;case 64:Ya()===45&&(I+=wp(ii())),T=Ya(),v=E=bi(Z=I+=d4(oh())),q++;break;case 45:M===45&&bi(I)==2&&(k=0)}}return u}function R1(n,t,i,a,o,u,d,p,m,g,v,E){for(var T=o-1,A=o===0?u:[""],M=m2(A),k=0,V=0,B=0;k<a;++k)for(var q=0,Z=ao(n,T+1,T=f2(V=d[k])),lt=n;q<M;++q)(lt=p2(V>0?A[q]+" "+Z:Nt(Z,/&\f/g,A[q])))&&(m[B++]=lt);return Gh(n,t,i,o===0?Hh:p,m,g,v,E)}function p4(n,t,i,a){return Gh(n,t,i,h2,Wm(a4()),ao(n,2,-2),0,a)}function I1(n,t,i,a,o){return Gh(n,t,i,Xm,ao(n,0,a),ao(n,a+1,-1),a,o)}function y2(n,t,i){switch(i4(n,t)){case 5103:return Gt+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Gt+n+n;case 4789:return Fl+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Gt+n+Fl+n+le+n+n;case 5936:switch(qe(n,t+11)){case 114:return Gt+n+le+Nt(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Gt+n+le+Nt(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Gt+n+le+Nt(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Gt+n+le+n+n;case 6165:return Gt+n+le+"flex-"+n+n;case 5187:return Gt+n+Nt(n,/(\w+).+(:[^]+)/,Gt+"box-$1$2"+le+"flex-$1$2")+n;case 5443:return Gt+n+le+"flex-item-"+Nt(n,/flex-|-self/g,"")+(er(n,/flex-|baseline/)?"":le+"grid-row-"+Nt(n,/flex-|-self/g,""))+n;case 4675:return Gt+n+le+"flex-line-pack"+Nt(n,/align-content|flex-|-self/g,"")+n;case 5548:return Gt+n+le+Nt(n,"shrink","negative")+n;case 5292:return Gt+n+le+Nt(n,"basis","preferred-size")+n;case 6060:return Gt+"box-"+Nt(n,"-grow","")+Gt+n+le+Nt(n,"grow","positive")+n;case 4554:return Gt+Nt(n,/([^-])(transform)/g,"$1"+Gt+"$2")+n;case 6187:return Nt(Nt(Nt(n,/(zoom-|grab)/,Gt+"$1"),/(image-set)/,Gt+"$1"),n,"")+n;case 5495:case 3959:return Nt(n,/(image-set\([^]*)/,Gt+"$1$`$1");case 4968:return Nt(Nt(n,/(.+:)(flex-)?(.*)/,Gt+"box-pack:$3"+le+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Gt+n+n;case 4200:if(!er(n,/flex-|baseline/))return le+"grid-column-align"+ao(n,t)+n;break;case 2592:case 3360:return le+Nt(n,"template-","")+n;case 4384:case 3616:return i&&i.some(function(a,o){return t=o,er(a.props,/grid-\w+-end/)})?~sh(n+(i=i[t].value),"span",0)?n:le+Nt(n,"-start","")+n+le+"grid-row-span:"+(~sh(i,"span",0)?er(i,/\d+/):+er(i,/\d+/)-+er(n,/\d+/))+";":le+Nt(n,"-start","")+n;case 4896:case 4128:return i&&i.some(function(a){return er(a.props,/grid-\w+-start/)})?n:le+Nt(Nt(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Nt(n,/(.+)-inline(.+)/,Gt+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(bi(n)-1-t>6)switch(qe(n,t+1)){case 109:if(qe(n,t+4)!==45)break;case 102:return Nt(n,/(.+:)(.+)-([^]+)/,"$1"+Gt+"$2-$3$1"+Fl+(qe(n,t+3)==108?"$3":"$2-$3"))+n;case 115:return~sh(n,"stretch",0)?y2(Nt(n,"stretch","fill-available"),t,i)+n:n}break;case 5152:case 5920:return Nt(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,o,u,d,p,m,g){return le+o+":"+u+g+(d?le+o+"-span:"+(p?m:+m-+u)+g:"")+n});case 4949:if(qe(n,t+6)===121)return Nt(n,":",":"+Gt)+n;break;case 6444:switch(qe(n,qe(n,14)===45?18:11)){case 120:return Nt(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Gt+(qe(n,14)===45?"inline-":"")+"box$3$1"+Gt+"$2$3$1"+le+"$2box$3")+n;case 100:return Nt(n,":",":"+le)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Nt(n,"scroll-","scroll-snap-")+n}return n}function bh(n,t){for(var i="",a=0;a<n.length;a++)i+=t(n[a],a,n,t)||"";return i}function m4(n,t,i,a){switch(n.type){case n4:if(n.children.length)break;case e4:case Xm:return n.return=n.return||n.value;case h2:return"";case d2:return n.return=n.value+"{"+bh(n.children,a)+"}";case Hh:if(!bi(n.value=n.props.join(",")))return""}return bi(i=bh(n.children,a))?n.return=n.value+"{"+i+"}":""}function g4(n){var t=m2(n);return function(i,a,o,u){for(var d="",p=0;p<t;p++)d+=n[p](i,a,o,u)||"";return d}}function y4(n){return function(t){t.root||(t=t.return)&&n(t)}}function x4(n,t,i,a){if(n.length>-1&&!n.return)switch(n.type){case Xm:n.return=y2(n.value,n.length,i);return;case d2:return bh([Yr(n,{value:Nt(n.value,"@","@"+Gt)})],a);case Hh:if(n.length)return r4(i=n.props,function(o){switch(er(o,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Gs(Yr(n,{props:[Nt(o,/:(read-\w+)/,":"+Fl+"$1")]})),Gs(Yr(n,{props:[o]})),rm(n,{props:A1(i,a)});break;case"::placeholder":Gs(Yr(n,{props:[Nt(o,/:(plac\w+)/,":"+Gt+"input-$1")]})),Gs(Yr(n,{props:[Nt(o,/:(plac\w+)/,":"+Fl+"$1")]})),Gs(Yr(n,{props:[Nt(o,/:(plac\w+)/,le+"input-$1")]})),Gs(Yr(n,{props:[o]})),rm(n,{props:A1(i,a)});break}return""})}}var v4={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Cn={},oo=typeof process<"u"&&Cn!==void 0&&(Cn.REACT_APP_SC_ATTR||Cn.SC_ATTR)||"data-styled",x2="active",v2="data-styled-version",Qh="6.1.19",Zm=`/*!sc*/
`,Th=typeof window<"u"&&typeof document<"u",_4=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Cn!==void 0&&Cn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Cn.REACT_APP_SC_DISABLE_SPEEDY!==""?Cn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Cn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Cn!==void 0&&Cn.SC_DISABLE_SPEEDY!==void 0&&Cn.SC_DISABLE_SPEEDY!==""&&Cn.SC_DISABLE_SPEEDY!=="false"&&Cn.SC_DISABLE_SPEEDY),Xh=Object.freeze([]),lo=Object.freeze({});function w4(n,t,i){return i===void 0&&(i=lo),n.theme!==i.theme&&n.theme||t||i.theme}var _2=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),E4=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,b4=/(^-|-$)/g;function C1(n){return n.replace(E4,"-").replace(b4,"")}var T4=/(a)(d)/gi,Hc=52,j1=function(n){return String.fromCharCode(n+(n>25?39:97))};function om(n){var t,i="";for(t=Math.abs(n);t>Hc;t=t/Hc|0)i=j1(t%Hc)+i;return(j1(t%Hc)+i).replace(T4,"$1-$2")}var Ep,w2=5381,to=function(n,t){for(var i=t.length;i;)n=33*n^t.charCodeAt(--i);return n},E2=function(n){return to(w2,n)};function b2(n){return om(E2(n)>>>0)}function S4(n){return n.displayName||n.name||"Component"}function bp(n){return typeof n=="string"&&!0}var T2=typeof Symbol=="function"&&Symbol.for,S2=T2?Symbol.for("react.memo"):60115,A4=T2?Symbol.for("react.forward_ref"):60112,R4={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},I4={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},A2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},C4=((Ep={})[A4]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ep[S2]=A2,Ep);function D1(n){return("type"in(t=n)&&t.type.$$typeof)===S2?A2:"$$typeof"in n?C4[n.$$typeof]:R4;var t}var j4=Object.defineProperty,D4=Object.getOwnPropertyNames,N1=Object.getOwnPropertySymbols,N4=Object.getOwnPropertyDescriptor,M4=Object.getPrototypeOf,M1=Object.prototype;function R2(n,t,i){if(typeof t!="string"){if(M1){var a=M4(t);a&&a!==M1&&R2(n,a,i)}var o=D4(t);N1&&(o=o.concat(N1(t)));for(var u=D1(n),d=D1(t),p=0;p<o.length;++p){var m=o[p];if(!(m in I4||i&&i[m]||d&&m in d||u&&m in u)){var g=N4(t,m);try{j4(n,m,g)}catch{}}}}return n}function uo(n){return typeof n=="function"}function Jm(n){return typeof n=="object"&&"styledComponentId"in n}function qa(n,t){return n&&t?"".concat(n," ").concat(t):n||t||""}function lm(n,t){if(n.length===0)return"";for(var i=n[0],a=1;a<n.length;a++)i+=n[a];return i}function tu(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function um(n,t,i){if(i===void 0&&(i=!1),!i&&!tu(n)&&!Array.isArray(n))return t;if(Array.isArray(t))for(var a=0;a<t.length;a++)n[a]=um(n[a],t[a]);else if(tu(t))for(var a in t)n[a]=um(n[a],t[a]);return n}function tg(n,t){Object.defineProperty(n,"toString",{value:t})}function mu(n){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var O4=(function(){function n(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return n.prototype.indexOfGroup=function(t){for(var i=0,a=0;a<t;a++)i+=this.groupSizes[a];return i},n.prototype.insertRules=function(t,i){if(t>=this.groupSizes.length){for(var a=this.groupSizes,o=a.length,u=o;t>=u;)if((u<<=1)<0)throw mu(16,"".concat(t));this.groupSizes=new Uint32Array(u),this.groupSizes.set(a),this.length=u;for(var d=o;d<u;d++)this.groupSizes[d]=0}for(var p=this.indexOfGroup(t+1),m=(d=0,i.length);d<m;d++)this.tag.insertRule(p,i[d])&&(this.groupSizes[t]++,p++)},n.prototype.clearGroup=function(t){if(t<this.length){var i=this.groupSizes[t],a=this.indexOfGroup(t),o=a+i;this.groupSizes[t]=0;for(var u=a;u<o;u++)this.tag.deleteRule(a)}},n.prototype.getGroup=function(t){var i="";if(t>=this.length||this.groupSizes[t]===0)return i;for(var a=this.groupSizes[t],o=this.indexOfGroup(t),u=o+a,d=o;d<u;d++)i+="".concat(this.tag.getRule(d)).concat(Zm);return i},n})(),uh=new Map,Sh=new Map,ch=1,qc=function(n){if(uh.has(n))return uh.get(n);for(;Sh.has(ch);)ch++;var t=ch++;return uh.set(n,t),Sh.set(t,n),t},k4=function(n,t){ch=t+1,uh.set(n,t),Sh.set(t,n)},V4="style[".concat(oo,"][").concat(v2,'="').concat(Qh,'"]'),P4=new RegExp("^".concat(oo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),U4=function(n,t,i){for(var a,o=i.split(","),u=0,d=o.length;u<d;u++)(a=o[u])&&n.registerName(t,a)},z4=function(n,t){for(var i,a=((i=t.textContent)!==null&&i!==void 0?i:"").split(Zm),o=[],u=0,d=a.length;u<d;u++){var p=a[u].trim();if(p){var m=p.match(P4);if(m){var g=0|parseInt(m[1],10),v=m[2];g!==0&&(k4(v,g),U4(n,v,m[3]),n.getTag().insertRules(g,o)),o.length=0}else o.push(p)}}},O1=function(n){for(var t=document.querySelectorAll(V4),i=0,a=t.length;i<a;i++){var o=t[i];o&&o.getAttribute(oo)!==x2&&(z4(n,o),o.parentNode&&o.parentNode.removeChild(o))}};function L4(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var I2=function(n){var t=document.head,i=n||t,a=document.createElement("style"),o=(function(p){var m=Array.from(p.querySelectorAll("style[".concat(oo,"]")));return m[m.length-1]})(i),u=o!==void 0?o.nextSibling:null;a.setAttribute(oo,x2),a.setAttribute(v2,Qh);var d=L4();return d&&a.setAttribute("nonce",d),i.insertBefore(a,u),a},$4=(function(){function n(t){this.element=I2(t),this.element.appendChild(document.createTextNode("")),this.sheet=(function(i){if(i.sheet)return i.sheet;for(var a=document.styleSheets,o=0,u=a.length;o<u;o++){var d=a[o];if(d.ownerNode===i)return d}throw mu(17)})(this.element),this.length=0}return n.prototype.insertRule=function(t,i){try{return this.sheet.insertRule(i,t),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},n.prototype.getRule=function(t){var i=this.sheet.cssRules[t];return i&&i.cssText?i.cssText:""},n})(),B4=(function(){function n(t){this.element=I2(t),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(t,i){if(t<=this.length&&t>=0){var a=document.createTextNode(i);return this.element.insertBefore(a,this.nodes[t]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},n.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},n})(),F4=(function(){function n(t){this.rules=[],this.length=0}return n.prototype.insertRule=function(t,i){return t<=this.length&&(this.rules.splice(t,0,i),this.length++,!0)},n.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},n.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},n})(),k1=Th,K4={isServer:!Th,useCSSOMInjection:!_4},C2=(function(){function n(t,i,a){t===void 0&&(t=lo),i===void 0&&(i={});var o=this;this.options=_n(_n({},K4),t),this.gs=i,this.names=new Map(a),this.server=!!t.isServer,!this.server&&Th&&k1&&(k1=!1,O1(this)),tg(this,function(){return(function(u){for(var d=u.getTag(),p=d.length,m="",g=function(E){var T=(function(B){return Sh.get(B)})(E);if(T===void 0)return"continue";var A=u.names.get(T),M=d.getGroup(E);if(A===void 0||!A.size||M.length===0)return"continue";var k="".concat(oo,".g").concat(E,'[id="').concat(T,'"]'),V="";A!==void 0&&A.forEach(function(B){B.length>0&&(V+="".concat(B,","))}),m+="".concat(M).concat(k,'{content:"').concat(V,'"}').concat(Zm)},v=0;v<p;v++)g(v);return m})(o)})}return n.registerId=function(t){return qc(t)},n.prototype.rehydrate=function(){!this.server&&Th&&O1(this)},n.prototype.reconstructWithOptions=function(t,i){return i===void 0&&(i=!0),new n(_n(_n({},this.options),t),this.gs,i&&this.names||void 0)},n.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(t=(function(i){var a=i.useCSSOMInjection,o=i.target;return i.isServer?new F4(o):a?new $4(o):new B4(o)})(this.options),new O4(t)));var t},n.prototype.hasNameForId=function(t,i){return this.names.has(t)&&this.names.get(t).has(i)},n.prototype.registerName=function(t,i){if(qc(t),this.names.has(t))this.names.get(t).add(i);else{var a=new Set;a.add(i),this.names.set(t,a)}},n.prototype.insertRules=function(t,i,a){this.registerName(t,i),this.getTag().insertRules(qc(t),a)},n.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},n.prototype.clearRules=function(t){this.getTag().clearGroup(qc(t)),this.clearNames(t)},n.prototype.clearTag=function(){this.tag=void 0},n})(),H4=/&/g,q4=/^\s*\/\/.*$/gm;function j2(n,t){return n.map(function(i){return i.type==="rule"&&(i.value="".concat(t," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(t," ")),i.props=i.props.map(function(a){return"".concat(t," ").concat(a)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=j2(i.children,t)),i})}function G4(n){var t,i,a,o=lo,u=o.options,d=u===void 0?lo:u,p=o.plugins,m=p===void 0?Xh:p,g=function(T,A,M){return M.startsWith(i)&&M.endsWith(i)&&M.replaceAll(i,"").length>0?".".concat(t):T},v=m.slice();v.push(function(T){T.type===Hh&&T.value.includes("&")&&(T.props[0]=T.props[0].replace(H4,i).replace(a,g))}),d.prefix&&v.push(x4),v.push(m4);var E=function(T,A,M,k){A===void 0&&(A=""),M===void 0&&(M=""),k===void 0&&(k="&"),t=k,i=A,a=new RegExp("\\".concat(i,"\\b"),"g");var V=T.replace(q4,""),B=f4(M||A?"".concat(M," ").concat(A," { ").concat(V," }"):V);d.namespace&&(B=j2(B,d.namespace));var q=[];return bh(B,g4(v.concat(y4(function(Z){return q.push(Z)})))),q};return E.hash=m.length?m.reduce(function(T,A){return A.name||mu(15),to(T,A.name)},w2).toString():"",E}var Y4=new C2,cm=G4(),D2=bt.createContext({shouldForwardProp:void 0,styleSheet:Y4,stylis:cm});D2.Consumer;bt.createContext(void 0);function V1(){return L.useContext(D2)}var N2=(function(){function n(t,i){var a=this;this.inject=function(o,u){u===void 0&&(u=cm);var d=a.name+u.hash;o.hasNameForId(a.id,d)||o.insertRules(a.id,d,u(a.rules,d,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=i,tg(this,function(){throw mu(12,String(a.name))})}return n.prototype.getName=function(t){return t===void 0&&(t=cm),this.name+t.hash},n})(),Q4=function(n){return n>="A"&&n<="Z"};function P1(n){for(var t="",i=0;i<n.length;i++){var a=n[i];if(i===1&&a==="-"&&n[0]==="-")return n;Q4(a)?t+="-"+a.toLowerCase():t+=a}return t.startsWith("ms-")?"-"+t:t}var M2=function(n){return n==null||n===!1||n===""},O2=function(n){var t,i,a=[];for(var o in n){var u=n[o];n.hasOwnProperty(o)&&!M2(u)&&(Array.isArray(u)&&u.isCss||uo(u)?a.push("".concat(P1(o),":"),u,";"):tu(u)?a.push.apply(a,Jl(Jl(["".concat(o," {")],O2(u),!1),["}"],!1)):a.push("".concat(P1(o),": ").concat((t=o,(i=u)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||t in v4||t.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return a};function Qa(n,t,i,a){if(M2(n))return[];if(Jm(n))return[".".concat(n.styledComponentId)];if(uo(n)){if(!uo(u=n)||u.prototype&&u.prototype.isReactComponent||!t)return[n];var o=n(t);return Qa(o,t,i,a)}var u;return n instanceof N2?i?(n.inject(i,a),[n.getName(a)]):[n]:tu(n)?O2(n):Array.isArray(n)?Array.prototype.concat.apply(Xh,n.map(function(d){return Qa(d,t,i,a)})):[n.toString()]}function X4(n){for(var t=0;t<n.length;t+=1){var i=n[t];if(uo(i)&&!Jm(i))return!1}return!0}var W4=E2(Qh),Z4=(function(){function n(t,i,a){this.rules=t,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&X4(t),this.componentId=i,this.baseHash=to(W4,i),this.baseStyle=a,C2.registerId(i)}return n.prototype.generateAndInjectStyles=function(t,i,a){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,i,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))o=qa(o,this.staticRulesId);else{var u=lm(Qa(this.rules,t,i,a)),d=om(to(this.baseHash,u)>>>0);if(!i.hasNameForId(this.componentId,d)){var p=a(u,".".concat(d),void 0,this.componentId);i.insertRules(this.componentId,d,p)}o=qa(o,d),this.staticRulesId=d}else{for(var m=to(this.baseHash,a.hash),g="",v=0;v<this.rules.length;v++){var E=this.rules[v];if(typeof E=="string")g+=E;else if(E){var T=lm(Qa(E,t,i,a));m=to(m,T+v),g+=T}}if(g){var A=om(m>>>0);i.hasNameForId(this.componentId,A)||i.insertRules(this.componentId,A,a(g,".".concat(A),void 0,this.componentId)),o=qa(o,A)}}return o},n})(),k2=bt.createContext(void 0);k2.Consumer;var Tp={};function J4(n,t,i){var a=Jm(n),o=n,u=!bp(n),d=t.attrs,p=d===void 0?Xh:d,m=t.componentId,g=m===void 0?(function(lt,K){var ot=typeof lt!="string"?"sc":C1(lt);Tp[ot]=(Tp[ot]||0)+1;var I="".concat(ot,"-").concat(b2(Qh+ot+Tp[ot]));return K?"".concat(K,"-").concat(I):I})(t.displayName,t.parentComponentId):m,v=t.displayName,E=v===void 0?(function(lt){return bp(lt)?"styled.".concat(lt):"Styled(".concat(S4(lt),")")})(n):v,T=t.displayName&&t.componentId?"".concat(C1(t.displayName),"-").concat(t.componentId):t.componentId||g,A=a&&o.attrs?o.attrs.concat(p).filter(Boolean):p,M=t.shouldForwardProp;if(a&&o.shouldForwardProp){var k=o.shouldForwardProp;if(t.shouldForwardProp){var V=t.shouldForwardProp;M=function(lt,K){return k(lt,K)&&V(lt,K)}}else M=k}var B=new Z4(i,T,a?o.componentStyle:void 0);function q(lt,K){return(function(ot,I,C){var j=ot.attrs,O=ot.componentStyle,U=ot.defaultProps,$=ot.foldedComponentIds,D=ot.styledComponentId,se=ot.target,Kt=bt.useContext(k2),tt=V1(),dt=ot.shouldForwardProp||tt.shouldForwardProp,yt=w4(I,Kt,U)||lo,Ct=(function(jt,_t,ge){for(var zt,Me=_n(_n({},_t),{className:void 0,theme:ge}),Ni=0;Ni<jt.length;Ni+=1){var qn=uo(zt=jt[Ni])?zt(Me):zt;for(var ln in qn)Me[ln]=ln==="className"?qa(Me[ln],qn[ln]):ln==="style"?_n(_n({},Me[ln]),qn[ln]):qn[ln]}return _t.className&&(Me.className=qa(Me.className,_t.className)),Me})(j,I,yt),P=Ct.as||se,at={};for(var ct in Ct)Ct[ct]===void 0||ct[0]==="$"||ct==="as"||ct==="theme"&&Ct.theme===yt||(ct==="forwardedAs"?at.as=Ct.forwardedAs:dt&&!dt(ct,P)||(at[ct]=Ct[ct]));var ht=(function(jt,_t){var ge=V1(),zt=jt.generateAndInjectStyles(_t,ge.styleSheet,ge.stylis);return zt})(O,Ct),gt=qa($,D);return ht&&(gt+=" "+ht),Ct.className&&(gt+=" "+Ct.className),at[bp(P)&&!_2.has(P)?"class":"className"]=gt,C&&(at.ref=C),L.createElement(P,at)})(Z,lt,K)}q.displayName=E;var Z=bt.forwardRef(q);return Z.attrs=A,Z.componentStyle=B,Z.displayName=E,Z.shouldForwardProp=M,Z.foldedComponentIds=a?qa(o.foldedComponentIds,o.styledComponentId):"",Z.styledComponentId=T,Z.target=a?o.target:n,Object.defineProperty(Z,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(lt){this._foldedDefaultProps=a?(function(K){for(var ot=[],I=1;I<arguments.length;I++)ot[I-1]=arguments[I];for(var C=0,j=ot;C<j.length;C++)um(K,j[C],!0);return K})({},o.defaultProps,lt):lt}}),tg(Z,function(){return".".concat(Z.styledComponentId)}),u&&R2(Z,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Z}function U1(n,t){for(var i=[n[0]],a=0,o=t.length;a<o;a+=1)i.push(t[a],n[a+1]);return i}var z1=function(n){return Object.assign(n,{isCss:!0})};function Ah(n){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];if(uo(n)||tu(n))return z1(Qa(U1(Xh,Jl([n],t,!0))));var a=n;return t.length===0&&a.length===1&&typeof a[0]=="string"?Qa(a):z1(Qa(U1(a,t)))}function hm(n,t,i){if(i===void 0&&(i=lo),!t)throw mu(1,t);var a=function(o){for(var u=[],d=1;d<arguments.length;d++)u[d-1]=arguments[d];return n(t,i,Ah.apply(void 0,Jl([o],u,!1)))};return a.attrs=function(o){return hm(n,t,_n(_n({},i),{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},a.withConfig=function(o){return hm(n,t,_n(_n({},i),o))},a}var V2=function(n){return hm(J4,n)},S=V2;_2.forEach(function(n){S[n]=V2(n)});function eg(n){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];var a=lm(Ah.apply(void 0,Jl([n],t,!1))),o=b2(a);return new N2(o,a)}const Sp=S.a`
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
`;function ng({label:n,href:t="#",active:i=!1,onClick:a,style:o,target:u,rel:d}){const m=/^https?:\/\//i.test(t)||t?.startsWith("mailto:")||t?.startsWith("tel:");let g,v=!1;!m&&t&&(t.startsWith("/")&&(g=t,v=!0),t==="/"&&(g="/",v=!0));const T={"aria-current":i?"page":void 0,"data-active":i?"true":"false","data-label":n,onKeyDown:A=>{a&&(A.key==="Enter"||A.key===" ")&&(A.preventDefault(),a(A))},onClick:a,style:o,$active:i};return v?y.jsx(Sp,{as:ts,to:g,...T,children:y.jsx("span",{className:"navbtn-text",children:n})}):t?y.jsx(Sp,{href:t,target:u,rel:d,...T,children:y.jsx("span",{className:"navbtn-text",children:n})}):y.jsx(Sp,{as:"button",type:"button",...T,style:{background:"none",border:0,...o},children:y.jsx("span",{className:"navbtn-text",children:n})})}ng.propTypes={label:J.string.isRequired,href:J.string,active:J.bool,onClick:J.func,style:J.object,target:J.string,rel:J.string};const tA=({isOpen:n=!1,size:t=28,color:i="#fff",...a})=>{const o=Math.max(2,Math.round(t/14)),u=t/2,d=Math.round(t*.28);if(n)return y.jsxs("svg",{width:t,height:t,viewBox:`0 0 ${t} ${t}`,fill:"none",...a,children:[y.jsx("line",{x1:u-d,y1:u-d,x2:u+d,y2:u+d,stroke:i,strokeWidth:o,strokeLinecap:"round"}),y.jsx("line",{x1:u-d,y1:u+d,x2:u+d,y2:u-d,stroke:i,strokeWidth:o,strokeLinecap:"round"})]});const p=o,m=o/2;return y.jsxs("svg",{width:t,height:t,viewBox:`0 0 ${t} ${t}`,fill:"none",...a,children:[y.jsx("rect",{x:0,y:u-d-p/2,width:t,height:p,rx:m,fill:i}),y.jsx("rect",{x:0,y:u-p/2,width:t,height:p,rx:m,fill:i}),y.jsx("rect",{x:0,y:u+d-p/2,width:t,height:p,rx:m,fill:i})]})},he=Object.freeze({GRADIENT:"gradient",LIGHT:"light",DARK:"dark",GRADIENT_DARK:"gradient_dark"}),eA=S.header`
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
`,nA=S.div`
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
`,iA=S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  @media (max-width: 640px) {
    gap: 8px;
  }
`,rA=S.div`
  display: flex;
  align-items: center;
  gap: 24px;
`,aA=S.nav`
  display: flex;
  align-items: center;
  gap: 24px;
  @media (max-width: 1450px) {
    display: none;
  }
`,sA=S.button`
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
`,oA=S.div`
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
`,lA=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  margin-top: 12px;
`,uA=S(ng)`
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  letter-spacing: 0.26px;
`,cA=S.div`
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
`,hA=S.div`
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
`;function P2({items:n=[],activeKey:t,mode:i,onModeChange:a,autoOnScroll:o=!1,scrollThreshold:u=8,sticky:d=!0,maxWidth:p,overlay:m=!1}){const[g,v]=L.useState(!1),[E,T]=L.useState(he.GRADIENT),A=typeof i=="string",M=A?i:E,k=L.useRef(A?i:E);L.useEffect(()=>{if(!A)return;(window.scrollY||document.documentElement.scrollTop||0)<=u&&(k.current=i)},[i,A,u]),L.useEffect(()=>{if(!o)return;const O=()=>{const U=window.scrollY||document.documentElement.scrollTop||0,$=k.current||he.GRADIENT_DARK,D=U>u?he.DARK:$;A||T(D),a&&a(D)};return O(),window.addEventListener("scroll",O,{passive:!0}),()=>window.removeEventListener("scroll",O)},[o,A,a,u]);const{baseColor:V,gradient:B,textColor:q,boxShadow:Z,showGradient:lt}=L.useMemo(()=>{switch(M){case he.LIGHT:return{baseColor:"linear-gradient(180deg, rgba(255,255,255,0.8) 60%, rgba(255,255,255,0) 100%)",gradient:"rgba(255,255,255,1)",textColor:"#000",showGradient:!0};case he.DARK:return{baseColor:"linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,0) 100%)",gradient:"linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,1) 100%)",textColor:"#fff",showGradient:!0};case he.GRADIENT_DARK:return{baseColor:"linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,0) 100%)",gradient:"linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,1) 100%)",textColor:"#fff",showGradient:!1};default:return{baseColor:"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",gradient:"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",textColor:"#000",showGradient:!1}}},[M]),I=M===he.DARK||M===he.GRADIENT_DARK||g,C=I?"/icons/logoLight.svg":"/icons/logoDark.svg",j=n.filter(O=>O.label!=="SHOWROOM");return L.useEffect(()=>(g?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[g]),y.jsxs(eA,{role:"banner",$sticky:d,$overlay:m,$baseColor:V,$gradient:B,$showGradient:lt,$textColor:q,$boxShadow:Z,children:[y.jsx(nA,{$maxWidth:p,children:y.jsxs(iA,{children:[y.jsxs(rA,{children:[y.jsx(ts,{to:"/","aria-label":"홈으로",style:{color:"inherit",textDecoration:"none"},children:y.jsx(cA,{"aria-hidden":!0,children:y.jsx(hA,{children:y.jsx("div",{style:{backgroundImage:`url(${C})`,width:"100%",height:"100%",backgroundSize:"contain",backgroundRepeat:"no-repeat"}})})})}),y.jsx(aA,{"aria-label":"주 메뉴",children:n.map(O=>y.jsx(ng,{label:O.label,href:O.href,active:O.key===t},O.key))})]}),y.jsx(sA,{"aria-label":g?"메뉴 닫기":"메뉴 열기",onClick:()=>v(O=>!O),children:y.jsx(tA,{isOpen:g,size:24,color:I?"#fff":"#000"})})]})}),y.jsx(oA,{$open:g,onClick:()=>v(!1),children:y.jsx(lA,{onClick:O=>O.stopPropagation(),children:j.map(O=>y.jsx(uA,{label:O.label,href:O.href,active:O.key===t,style:{fontSize:18,fontWeight:500,color:"#fff",textAlign:"center"},onClick:()=>v(!1)},O.key))})})]})}P2.propTypes={items:J.arrayOf(J.shape({key:J.string.isRequired,label:J.string.isRequired,href:J.string})),activeKey:J.string,mode:J.oneOf([he.GRADIENT,he.LIGHT,he.DARK,he.GRADIENT_DARK]),onModeChange:J.func,autoOnScroll:J.bool,scrollThreshold:J.number,sticky:J.bool,overlay:J.bool,maxWidth:J.oneOfType([J.string,J.number])};const ig="Pretendard, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR', Arial, sans-serif",dA=S.footer`
  width: 100vw;
  background: #0E0E0E;
  border-top: 1px #A1A1A1 solid;
  @media (max-width: 640px) {
    min-width: 0;
    left: 0;
    right: 0;
  }
`,fA=S.div`
  margin: 0 auto;
  padding-left: ${n=>n.$sidePadding}px;
  padding-right: ${n=>n.$sidePadding}px;
  padding-top: 52px;
  padding-bottom: 52px;
  max-width: ${n=>`calc(${n.$maxWidth}px + ${n.$sidePadding*2}px)`};
  position: relative;
  box-sizing: border-box;
  @media (max-width: 1000px) {
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
`,pA=S.div`
  font-family: ${ig};
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
`,mA=S.nav`
  display: flex;
  gap: 60px;
  flex-wrap: wrap;
  align-items: center;
  color: #F0F0F0;
  font-family: ${ig};
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 36px;
  @media (max-width: 1000px) {
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
`,L1=S.a`
  color: inherit;
  text-decoration: none;
  opacity: 0.95;
`,gA=S.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #909090;
  font-family: ${ig};
  font-size: 14px;
  font-weight: 300;
  max-width: 475px;
  @media (max-width: 1000px) {
    font-size: 10px;
    max-width: 100vw;
    gap: 4px;
    align-items: center;
  }
  @media (max-width: 393px) {
    font-size: 8px;
  }
`,yA=S.div`
  position: absolute;
  right: ${n=>n.$sidePadding}px;
  top: 164px; /* 52 + 112 */
  display: flex;
  gap: 20px;
  @media (max-width: 1000px) {
    position: static;
    right: 0;
    top: auto;
    gap: 10px;
    margin-top: 12px;
  }
`,$1=S.a`
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
`;function U2({title:n="잔향 : 기억의 향기",nav:t=[{label:"PROJECTS",href:"/projects"},{label:"PEOPLES",href:"/peoples"},{label:"SHOWROOM",href:"/showroom"},{label:"GUESTBOOK",href:"/guestbook"},{label:"CREDITS",href:"/credits"}],copyright:i=["ⓒ 2025 TECH UNIV KOREA. ALL RIGHTS RESERVED.","TUKOREA DESIGN ENGINEERING 20TH GRADUATION EXHIBITION"],social:a={youtube:{href:"https://youtube.com",label:"YouTube"},instagram:{href:"https://instagram.com",label:"Instagram"}},maxWidth:o=1220,sidePadding:u=350}){const[d,p]=bt.useState(typeof window<"u"?window.innerWidth<640:!1);return bt.useEffect(()=>{function m(){p(window.innerWidth<640)}return m(),window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[]),y.jsx(dA,{role:"contentinfo",children:y.jsxs(fA,{$sidePadding:u,$maxWidth:o,children:[y.jsx(pA,{children:n}),y.jsx(mA,{"aria-label":"푸터 메뉴",children:t.filter(m=>!(d&&m.label==="SHOWROOM")).map(m=>{const g=m.href||"#",v=/^https?:\/\//i.test(g),E="/";let T=g;return v||g===E&&(T="/"),v?y.jsx(L1,{href:g,children:m.label},m.label):y.jsx(L1,{as:ts,to:T,children:m.label},m.label)})}),y.jsx(gA,{children:i.map((m,g)=>y.jsx("div",{children:m},g))}),y.jsxs(yA,{$sidePadding:u,children:[a?.youtube?.href&&y.jsx($1,{href:a.youtube.href,"aria-label":a.youtube.label||"YouTube",target:"_blank",rel:"noreferrer noopener",children:y.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#FFFFFF","aria-hidden":!0,children:y.jsx("path",{d:"M23.5 7.2a4 4 0 0 0-2.8-2.8C18.8 4 12 4 12 4s-6.8 0-8.7.4A4 4 0 0 0 .5 7.2 41 41 0 0 0 0 12a41 41 0 0 0 .5 4.8 4 4 0 0 0 2.8 2.8C5.2 20 12 20 12 20s6.8 0 8.7-.4a4 4 0 0 0 2.8-2.8A41 41 0 0 0 24 12a41 41 0 0 0-.5-4.8zM9.6 15.2V8.8L15.8 12l-6.2 3.2z"})})}),a?.instagram?.href&&y.jsx($1,{href:a.instagram.href,"aria-label":a.instagram.label||"Instagram",target:"_blank",rel:"noreferrer noopener",children:y.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#FFFFFF","aria-hidden":!0,children:[y.jsx("path",{d:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2A3.2 3.2 0 1 1 12 8a3.2 3.2 0 0 1 0 6.4z"}),y.jsx("circle",{cx:"17.5",cy:"6.5",r:"1.2"}),y.jsx("path",{d:"M17.8 2H6.2A4.2 4.2 0 0 0 2 6.2v11.6A4.2 4.2 0 0 0 6.2 22h11.6A4.2 4.2 0 0 0 22 17.8V6.2A4.2 4.2 0 0 0 17.8 2zm2.6 15.8a2.6 2.6 0 0 1-2.6 2.6H6.2a2.6 2.6 0 0 1-2.6-2.6V6.2A2.6 2.6 0 0 1 6.2 3.6h11.6a2.6 2.6 0 0 1 2.6 2.6v11.6z"})]})})]})]})})}U2.propTypes={title:J.string,nav:J.arrayOf(J.shape({label:J.string.isRequired,href:J.string.isRequired})),copyright:J.arrayOf(J.string),social:J.shape({youtube:J.shape({href:J.string,label:J.string}),instagram:J.shape({href:J.string,label:J.string})}),maxWidth:J.number,sidePadding:J.number};const xA=1200,vA=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 10px;
  height: 80%;
  background-color: rgba(0,0,0,0.05);
  border-radius: 6px;
  z-index: 9999;
  opacity: 0;
  transition: opacity 0.18s ease-in-out, transform 0.12s ease;
  pointer-events: auto;
  backdrop-filter: blur(2px);
`,_A=S.div`
  position: absolute;
  left: 0;
  width: 100%;
  border-radius: 6px;
  cursor: pointer;
  touch-action: none;
  transition: background-color 0.12s ease, transform 0.08s ease;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  border: 1px solid rgba(255,255,255,0.06);
  min-height: 30px;
`;function wA(){const n=L.useRef(null),t=L.useRef(null),i=L.useRef(null),a=L.useRef(!1),o=L.useRef(0),u=L.useRef(0),[d,p]=L.useState(!1),m=(T,A,M)=>Math.max(A,Math.min(M,T));function g(){try{const A=(window.getComputedStyle(document.body).backgroundColor||"").match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([0-9.]+))?\)/);if(A){const M=Number(A[1]),k=Number(A[2]),V=Number(A[3]);.2126*M+.7152*k+.0722*V<140?(t.current.style.backgroundColor="rgba(255,255,255,0.92)",t.current.style.border="1px solid rgba(0,0,0,0.12)",t.current.style.boxShadow="0 2px 6px rgba(0,0,0,0.45)"):(t.current.style.backgroundColor="rgba(0,0,0,0.78)",t.current.style.border="1px solid rgba(255,255,255,0.06)",t.current.style.boxShadow="0 2px 6px rgba(0,0,0,0.25)")}else t.current.style.backgroundColor="rgba(0,0,0,0.78)"}catch{t.current&&(t.current.style.backgroundColor="rgba(0,0,0,0.78)")}}function v(){i.current&&clearTimeout(i.current),i.current=setTimeout(()=>p(!1),xA)}function E(){const T=n.current,A=t.current;if(!T||!A)return;const M=document.documentElement,k=M.scrollHeight-window.innerHeight,V=T.clientHeight||window.innerHeight*.8;if(k<=0){p(!1);return}const B=Math.max(20,window.innerHeight/M.scrollHeight*V),q=window.scrollY/k*(V-B);A.style.height=B+"px",A.style.top=q+"px",p(!0),g(),v()}return L.useEffect(()=>{const T=k=>{k.ctrlKey||k.metaKey||k.altKey||(p(!0),v())},A=()=>E(),M=()=>E();return document.addEventListener("wheel",T,{passive:!0}),window.addEventListener("scroll",M,{passive:!0}),window.addEventListener("resize",A),typeof window<"u"&&(window.__CustomScrollbar={update:E}),E(),p(!0),v(),()=>{document.removeEventListener("wheel",T),window.removeEventListener("scroll",M),window.removeEventListener("resize",A),i.current&&clearTimeout(i.current);try{typeof window<"u"&&delete window.__CustomScrollbar}catch{}}},[]),L.useEffect(()=>{const T=n.current,A=t.current;if(!T||!A)return;function M(B){if(B.target===A)a.current=!0,o.current=B.clientY,u.current=window.scrollY,A.setPointerCapture(B.pointerId),A.classList&&A.classList.add("dragging");else{const q=T.getBoundingClientRect(),Z=B.clientY-q.top,lt=q.height,ot=document.documentElement.scrollHeight-window.innerHeight,I=A.offsetHeight,j=m(Z-I/2,0,lt-I)/(lt-I)*ot;window.scrollTo({top:j,behavior:"smooth"}),E()}}function k(B){if(!a.current)return;const Z=document.documentElement.scrollHeight-window.innerHeight,lt=T.clientHeight,K=A.offsetHeight,ot=B.clientY-o.current,I=lt-K,C=ot/(I||1)*Z;window.scrollTo({top:m(u.current+C,0,Z)})}function V(B){if(a.current){a.current=!1;try{A.releasePointerCapture(B.pointerId)}catch{}A.classList&&A.classList.remove("dragging"),v()}}return T.addEventListener("pointerdown",M),window.addEventListener("pointermove",k),window.addEventListener("pointerup",V),()=>{T.removeEventListener("pointerdown",M),window.removeEventListener("pointermove",k),window.removeEventListener("pointerup",V)}},[]),y.jsx(vA,{ref:n,style:{opacity:d?1:0,pointerEvents:d?"auto":"none"},"aria-hidden":!1,children:y.jsx(_A,{ref:t})})}const Di="'Pretendard', system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif",EA=S.div`
  position: relative; background: #fff;
`,bA=S.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;function B1({children:n}){return y.jsx(EA,{children:y.jsx(bA,{children:n})})}const TA=S.div`
  position: relative; height: 52px; display: flex; align-items: flex-end; justify-content: center; line-height: 52px;
  font-family: ${Di}; font-size: 40px; font-weight: 700; color: #101010; line-height: 64px; margin-top: 88px;
  @media (max-width: 640px) {
    height: 21px;
    line-height: 21px;
    margin-top: 4px;
    font-size: 18px;
  }
`,SA=S.div`
  font-family: ${Di}; font-size: 32px; font-weight: 600; line-height: 56px; color: #000; margin-top: 72px;
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
`;function AA(){return y.jsxs(y.Fragment,{children:[y.jsx(TA,{children:"CREDITS"}),y.jsx(SA,{children:"잔향 : 기억의 향기"})]})}const RA=S.p`
  max-width: 374px;
  font-family: ${Di};
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
`,IA=S.div`
  display: flex;
  position: relative;
  align-items: flex-start;
  overflow: visible;
  padding-top: 20px;
    @media (max-width: 640px) {
    padding-top: 0px;
  }
`,CA=S.div`
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
`,jA=S.div`
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
`,DA=S.div`
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
`,z2=S.div`
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
`;function NA({text:n}){return y.jsxs(IA,{children:[y.jsx(z2,{}),y.jsx(CA,{}),y.jsx(RA,{dangerouslySetInnerHTML:{__html:n}})]})}const MA=S.div`
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
`,OA=S.div`
  width: 800px; height: 450px; background: url('interviewThumb.png'); background-size:cover; position: relative; z-index: 30;
  @media (max-width: 640px) {
    width: 100vw;
    height: calc(100vw * 0.5625); /* 16:9 비율 유지 */
  }
`,kA=S.div`
  position: absolute;
  left: 136px;
  top: 50%;
  transform: translateY(-50%);
  font-family: ${Di};
  font-size: 82.64px;
  font-weight: 400;
  line-height: 92.55px;
  color: #000;
  @media (max-width: 640px) {
    font-size: 36px;
  }
`;function VA({children:n}){return y.jsx(OA,{children:y.jsx(kA,{children:n})})}const PA=S.div`
  display: flex; gap: 40px; margin-top: 44px; width: 1220px; position: relative;
  @media (max-width: 640px) {
    // flex 위쪽에 2개, 아래에 1개 배치되게 해주고, 아래 배치된거는 위쪽 2개의 길이만큼 맞춰주게 해주세요
    width: 100%;
    flex-wrap: wrap;
    gap: 32px;
    margin-top: 24px;
  }
`,UA=S.div`
  width: 374px; display: flex; flex-direction: column; gap: 40px;
    @media (max-width: 640px) {
      width: 100%;
      gap: 16px;
      padding: 0px 16px;
  }
`,zA=S.div`
  font-family: ${Di}; font-size: 28px; font-weight: 600; line-height: 20px; color: #000; margin: 0;
  @media (max-width: 640px) {
    font-size: 14px;
    line-height: 10px;
  }
`,LA=S.p`
  font-family: ${Di}; font-size: 16px; font-weight: 400; line-height: 150%; color: #404040; text-align: justify; margin: 0;
  @media (max-width: 640px) {
    font-size: 10px;
  }
`;function $A({blocks:n}){return y.jsxs(PA,{children:[y.jsx(z2,{}),n.map(t=>y.jsxs(UA,{children:[y.jsx(zA,{children:t.title}),y.jsx(LA,{dangerouslySetInnerHTML:{__html:t.body}})]},t.title))]})}const BA=S.div`
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
`,FA=S.div`
  width: 289px;
  height: 45px;
  display: flex;
  align-items: flex-end;
  @media (max-width: 640px) {
    height: auto;
    width: 88px;
    margin-top: 12px;
  }
`,KA=S.div`
  font-family: ${Di}; font-size: 20px;
  font-weight: 500;
  line-height: 22.4px;
  color: #202020;
  @media (max-width: 640px) {
    font-size: 14px;
    line-height: 14px;
  }
`,HA=S.div`
  width: 900px;
  display: flex;
  flex-direction: column;
  @media (max-width: 640px) {
    width: 100%;
  }
`;function qA({title:n,rows:t,last:i=!1}){return y.jsxs(BA,{$last:i,children:[y.jsx(FA,{children:y.jsx(KA,{children:n})}),y.jsx(HA,{children:t.map((a,o)=>y.jsx(ZA,{ko:a.ko,en:a.en,divider:t.length>1&&o!==t.length-1},a.ko+a.en+o))})]})}const GA=S.div`
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
`,YA=S.div`
  width: 135px;
  @media (max-width: 640px) {
    width: 66px;
  }
`,QA=S.div`
  font-family: ${Di};
  font-size: 16px;
  font-weight: 300;
  line-height: 22.4px; 
  color: #202020;
  @media (max-width: 640px) {
    font-size: 12px;
    line-height: 14px;
  }
`,XA=S.div`
  display: flex; align-items: center;
`,WA=S.div`
  font-family: ${Di};
  font-size: 16px;
  font-weight: 300;
  line-height: 22.4px;
  color: #404040;
  @media (max-width: 640px) {
    font-size: 12px;
    line-height: 14px;
  }
`;function ZA({ko:n,en:t,divider:i=!1}){return y.jsxs(GA,{$divider:i,children:[y.jsx(YA,{children:y.jsx(QA,{children:n})}),y.jsx(XA,{children:y.jsx(WA,{children:t})})]})}const JA=S.div`
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
`,tR=S.div`
  display: flex;
  position: relative;
  font-family: ${Di};
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
`;function eR(){const n='안녕하세요, 제20회 졸업전시준비위원회입니다. <br/><br/>한국공학대학교 디자인공학부 제20회 졸업전시 <잔향>은 지난 시간 동안의 도전과 성장을 작품으로 담아내는 자리입니다. 이번 전시는 단순히 결과물을 나열하는 데 그치지 않고, 각자의 창작 과정 속에서 남겨진 고민과 흔적을 함께 나누고자 기획되었습니다. <br/><br/><잔향>이라는 주제는 작품이 지닌 감각과 정서가 관람자의 마음에 은은히 스며들어, 시간이 지나도 다시 떠오르는 기억으로 남기를 바라는 마음을 담고 있습니다. 학생들이 걸어온 수많은 순간과 열정이 응축된 이번 전시가, 누군가의 영감으로 다시 피어나길 희망합니다. 100명의 학생들이 모여 만들어 낸 이 전시는 그 어느 때보다 크고 도전적인 시도였습니다. 서로의 열정이 모여 이루어진 결과물이기에, 그 의미 또한 더욱 특별합니다.<br/><br/> 이번 전시가 졸업생들에게는 새로운 출발을 알리는 이정표로, 관람객에게는 오래도록 마음속에 머무는 "기억의 향기"로 남기를 바랍니다.',t=[{title:"학부장의 말씀",body:"스무 번째를 맞이하는 디자인공학부 졸업작품전시회를 진심으로 축하드립니다.<br/>이번 전시회에는 총 100명의 학생들이 개인 혹은 팀을 이루어, 산업디자인공학전공 47개 작품과 미디어디자인공학전공 30개 작품을 선보입니다. 이번 전시회는 단순히 결과물을 보여주는 자리를 넘어, 지난 4년간의 땀과 열정, 수많은 고민과 성장이 맺은 값진 결실이자, 새로운 출발을 알리는 뜻깊은 순간입니다.<br/>오늘날 우리는 인공지능, 스마트 기술, 친환경 소재 등 급속히 변화하는 기술 환경 속에서 전례 없는 전환의 시대를 맞이하고 있습니다.<br/>이러한 가운데에 디자이너는 우리의 생활에서 여러 불편한 요소를 찾아내고 이를 창의적이며 책임감 있게 해결할 수 있는 융합형 인재로서 그 역할이 더욱 중요해지고 있습니다.<br/>우리 디자인공학부 학생들은 이러한 변화에 능동적으로 대응하며, 사용자 중심의 사고, 미적 감각, 기술적 이해를 균형 있게 갖춘 디자이너로 성장해 왔습니다. 이번 전시의 모든 작품에는 치열한 탐구와 관찰, 반복된 시도와 실패, 그리고 그 너머의 성장이 고스란히 담겨 있습니다. 그 귀중한 과정을 진심으로 응원하며, 우리 학생들이 디자인을 통해 사회에 공헌하고 세상에 긍정적인 변화를 이끄는 창의적이고 따뜻한 디자이너로 거듭나기를 바랍니다.<br/>앞으로 변화와 도전의 흐름 속에서도 흔들림 없이 자신이 옳다고 믿는 방향으로 꿋꿋하게 나아가며, 사회 곳곳에서 중심적인 역할을 수행하는 당당한 디자이너로 성장하길 기대합니다. 그리고 언제 어디서든 한국공학대학교 디자인공학부의 이름을 빛내는 자랑스러운 동문으로 기억되길 바랍니다.<br/>마지막으로, 소중한 인재들의 성장을 위해 아낌없는 지도와 격려를 보내주신 교수님들께 깊은 감사의 말씀을 전합니다. 또한, 묵묵히 곁에서 자녀를 응원해주신 학부모님들께도 진심 어린 감사의 인사를 드립니다. 감사합니다."},{title:"학과 소개",body:"한국공학대학교 디자인공학부는 창의적인 디자인 발상법과 공학적 마인드의 통합적 접근법을 추구하는 시대로 바뀜에 따라 단순히 심미적 역할에만 머물렀던 디자인 개념에서 확장하여 4차 산업혁명 기술 분야를 선도하고자 하는 비전을 담고 있는 실무 중심의 융합형 학부입니다.<br/>디자인공학부는 디자인 기반의 창의적 아이디어와 HW/SW 융합 기술 개발 능력을 통해 기업을 혁신할 수 있는 인재 양성을 목표로 하고 있습니다."},{title:"웹사이트팀 제작 후기",body:"2025년 졸업전시 잔향의 웹사이트 기획부터 디자인, 그리고 구현까지 담당한 웹사이트 팀 성수민, 김예준 입니다. 25년 5월부터 컨셉이 정해진 이래 150일에 걸쳐 개발한 사이트가 이렇게 완성되어 무척 감격스럽습니다."}],i=[{title:"위원장",rows:[{ko:"홍승재",en:"Hong Seungjae"}]},{title:"부위원장",rows:[{ko:"김예린",en:"Kim Yerin"}]},{title:"총무",rows:[{ko:"진효민",en:"Jin Hyomin"},{ko:"정민호",en:"Jung Minho"}]},{title:"기획",rows:[{ko:"문나라",en:"Moon Nara"},{ko:"차소이",en:"Cha Soyi"},{ko:"한채원",en:"Han Chaewon"}]},{title:"홍보",rows:[{ko:"이채원",en:"Lee Chaewon"},{ko:"남가림",en:"Nam Garim"}]},{title:"디자인",rows:[{ko:"구인회",en:"Koo Inhoe"},{ko:"김기윤",en:"Kim Giyun"},{ko:"박혜성",en:"Park Hyeseong"},{ko:"석동현",en:"Suk Donghyun"}]},{title:"웹사이트",rows:[{ko:"성수민",en:"Seong Sumin"},{ko:"김예준",en:"Kim Yejun"}]},{title:"Special Thanks",rows:[{ko:"김한종 교수",en:"Prof. Kim Hanjong"}],last:!0}];return y.jsxs("div",{style:{position:"relative"},children:[y.jsxs(B1,{children:[y.jsx(AA,{}),y.jsxs(MA,{children:[y.jsx(NA,{text:n}),y.jsx(VA,{})]})]}),y.jsxs(B1,{children:[y.jsx($A,{blocks:t}),y.jsxs(JA,{children:[y.jsx(DA,{}),y.jsxs(tR,{children:[y.jsx(jA,{}),"2025 잔향",y.jsx("br",{}),"제 20대 졸업전시위원회"]}),i.map(a=>y.jsx(qA,{title:a.title,rows:a.rows,last:!!a.last},a.title))]})]})]})}const nR=S.div`
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
`,iR=S.div`
  position: relative;
  width: 55%;
  height: 100%;
  flex: 0 0 auto;
`,rR=S.img`
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
`,aR=S.div`
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #f6f6f6 100%);
  z-index: 2;
  width: 20%;
`,sR=S.div`
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
`,F1=S.div`
  margin: 0;
  padding: 0;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`,oR=S.h1`
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
`,hh=S.p`
    margin: 0;
@media (max-width: 640px) {
    font-size: 6px;
 }
   @media (max-width: 393px) {
    font-size: 5px;
  }
`,lR=S(hh)`
 @media (max-width: 640px) {
    display: none;
 }`;function rg({nameKor:n,nameEng:t,role:i,sns:a,eMail:o,imgSrc:u,imgAlt:d}){return y.jsxs(nR,{children:[y.jsxs(iR,{children:[y.jsx(rR,{src:u,alt:d}),y.jsx(aR,{})]}),y.jsxs(sR,{children:[y.jsxs(F1,{style:{top:"50px"},children:[y.jsx(oR,{children:n}),y.jsx(hh,{children:t})]}),y.jsxs(F1,{children:[y.jsx(hh,{children:i}),typeof a=="string"&&a.trim()&&a!=="-"?y.jsx(hh,{children:a}):Array.isArray(a)&&a.length>0?y.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",margin:"4px 0 0 0"},children:a.map((p,m)=>y.jsx("span",{style:{wordBreak:"break-all"},children:p.handle||p.url},`${p.platform}-${m}`))}):"-",y.jsx(lR,{children:o?y.jsx("a",{style:{textDecoration:"none",color:"inherit"},href:`mailto:${o}`,children:o}):null})]})]})]})}rg.defaultProps={sns:[]};rg.propTypes={nameKor:J.string.isRequired,nameEng:J.string,role:J.string,sns:J.arrayOf(J.shape({platform:J.string.isRequired,url:J.string.isRequired})),eMail:J.string,imgSrc:J.string.isRequired,imgAlt:J.string.isRequired};const uR=S.div`
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
`,cR=S.div`
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
`,L2=S.p`
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
`,hR=S(L2)`
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
`;function dm({path:n="student",isActive:t=!1,onClick:i}){return y.jsxs(uR,{onClick:i,children:[y.jsx(L2,{$active:t,children:"교수"}),y.jsx(hR,{$active:t,children:"학생"}),y.jsx(cR,{$active:t})]})}dm.propTypes={path:J.oneOf(["student","professor"]),isActive:J.bool,onClick:J.func};const K1=S.a`
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
`,H1=S.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;function dh({label:n,href:t=null,active:i=!1,onClick:a,style:o,target:u,rel:d}){const m={"aria-current":i?"page":void 0,"data-active":i?"true":"false",onKeyDown:g=>{a&&(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),a(g))},"data-label":n,onClick:a,style:o,$active:i};return t?y.jsx(K1,{href:t,target:u,rel:d,...m,children:y.jsx(H1,{className:"navbtn-text",children:n})}):y.jsx(K1,{as:"button",type:"button",...m,style:{background:"none",border:0,...o},children:y.jsx(H1,{className:"navbtn-text",children:n})})}dh.propTypes={label:J.string.isRequired,href:J.string,active:J.bool,onClick:J.func,style:J.object,target:J.string,rel:J.string};const $2=S.div`
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
`,dR=S($2)`
  justify-content: flex-start;
`,q1=S.div`
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
`,B2=S.p`
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
`,fR=S(B2)`
  font-size: 16px;
  font-weight: 600;
  @media (max-width: 640px) {
   font-size: 13px;  
  }
  @media (max-width: 375px) {
    font-size: 12px;
  }
`;function ag({label:n,style:t,mode:i}){const u=window.matchMedia("(max-width: 640px)").matches?"/icons/dropDownMobileIcon.svg":"/icons/arrowDropdownIcon.svg";return i==="category"?y.jsxs(dR,{style:t,children:[y.jsx(fR,{children:n}),y.jsx(q1,{children:y.jsx("img",{src:"/icons/arrowDropdownIcon.svg",alt:"dropdownIcon"})})]}):y.jsxs($2,{style:t,children:[y.jsx(B2,{children:n}),y.jsx(q1,{children:y.jsx("img",{src:u,alt:"dropdownIcon"})})]})}ag.propTypes={label:J.string.isRequired,style:J.object};const pR=S.div`
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
`,mR=S.div`
  display: flex;
  width: 90px;
  height: 20px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  @media (max-width: 640px) {
    width: 52px;  
 }
`,gR=S.p`
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
`;function F2({options:n,onSelect:t,style:i,isOpen:a,position:o,selected:u}){return y.jsx(pR,{style:i,$open:a,children:n.map((d,p)=>y.jsx(mR,{onClick:()=>t(d),children:y.jsx(gR,{$selected:d===u,children:d})},p))})}F2.propTypes={options:J.arrayOf(J.string).isRequired,onSelect:J.func.isRequired,style:J.object,isOpen:J.bool,position:J.any,selected:J.string};const yR=S.div`
  position: relative;
`;function sg({label:n,options:t,onSelect:i,style:a,filter:o,mode:u}){const[d,p]=bt.useState(!1),[m,g]=bt.useState({top:0,left:0}),v=bt.useRef(null),E=()=>{if(v.current){const A=v.current.getBoundingClientRect();g({top:A.bottom+window.scrollY,left:A.left+window.scrollX})}p(A=>!A)},T=A=>{i&&i(A),p(!1)};return y.jsxs(yR,{ref:v,style:a,children:[y.jsx("div",{onClick:E,children:y.jsx(ag,{label:n,options:t,onSelect:i,style:{},filter:o,mode:u})}),y.jsx(F2,{options:t,onSelect:T,style:{},isOpen:d,position:m,selected:n})]})}sg.propTypes={label:J.string.isRequired,options:J.arrayOf(J.string).isRequired,onSelect:J.func.isRequired,style:J.object,filter:J.string};sg.defaultProps={style:{},filter:""};const xR=S.div`
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
`,vR=S.div`
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
`,_R=S.div`
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
`;function K2({options:n,isOpen:t,onSelect:i,selected:a}){return y.jsx(xR,{$open:t,children:y.jsx(vR,{$open:t,children:n.map((o,u)=>y.jsx(_R,{$selected:a===o,onClick:()=>i(o),children:o},u))})})}K2.propTypes={options:J.arrayOf(J.string).isRequired,isOpen:J.bool.isRequired,onSelect:J.func.isRequired,selected:J.oneOfType([J.string,J.number])};const wR=S.div`
    position: relative;
    // 안에 들어가는 요소들 왼쪽 정렬
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;function Kl({label:n,options:t,onSelect:i,style:a,mode:o}){const[u,d]=bt.useState(!1),p=bt.useRef(null),m=()=>{d(v=>!v)},g=v=>{i&&i(v),d(!1)};return y.jsxs(wR,{ref:p,style:a,children:[y.jsx("div",{onClick:m,children:y.jsx(ag,{label:n,mode:o})}),y.jsx(K2,{options:t,onSelect:g,isOpen:u,selected:n})]})}Kl.propTypes={label:J.string.isRequired,options:J.arrayOf(J.string).isRequired,onSelect:J.func.isRequired,style:J.object,mode:J.string};Kl.defaultProps={style:{},mode:"category"};const Ap=S.div`
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
`,Rp=S.div`
  width: 120px;
  height: 100%;
  @media (max-width: 1450px) {
    display: none;
  }
`,Ip=S.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  @media (max-width: 1450px) {
    display: none;
  }
`,Cp=S.div`
  display: none;
  @media (max-width: 1450px) {
    display: flex;
    justify-content: center;
    width: auto;
  }
`;function H2({onCategoryChange:n,onToggleChange:t,type:i,onSortChange:a,sortLabel:o}){const u={type:i},[d,p]=bt.useState(!1),m=()=>p(K=>{const ot=!K;return t&&t(ot),ot}),[g,v]=bt.useState("전체"),[E,T]=bt.useState("All Projects"),A=["전체","산업디자인공학","미디어디자인공학"],M=["장영주","권오재","김 억","김한종","조남주","한민섭","홍성수","김태균"],k=["All Projects","AI & Robot","Edu & Kids","Health Care","IT & Tech","Living","Mobility"],V=["이름순","좋아요순","조회수순","팀작우선","개인작우선"],[B,q]=bt.useState("이름순"),Z=o||B,lt=K=>{q(K),a&&a(K)};return L.useEffect(()=>{v(d?M[0]:A[0])},[d]),u.type==="project"?y.jsxs(Ap,{children:[y.jsx(Rp,{}),y.jsx(Ip,{children:k.map(K=>y.jsx(dh,{label:K,active:E===K,onClick:()=>{T(K),n&&n(K)}},K))}),y.jsx(Cp,{children:y.jsx(Kl,{mode:"category",label:E,options:k,onSelect:K=>{T(K),n&&n(K)}})}),y.jsx(sg,{label:Z,options:V,onSelect:lt})]}):d?y.jsxs(Ap,{children:[y.jsx(Rp,{}),y.jsx(Ip,{children:M.map(K=>y.jsx(dh,{label:K,active:g===K,onClick:()=>{v(K),n&&n(K)}},K))}),y.jsx(Cp,{children:y.jsx(Kl,{mode:"category",label:g,options:M,onSelect:K=>{v(K),n&&n(K)}})}),y.jsx(dm,{path:d?"professor":"student",isActive:d,onClick:m})]}):y.jsxs(Ap,{children:[y.jsx(Rp,{}),y.jsx(Ip,{children:A.map(K=>y.jsx(dh,{label:K,active:g===K,onClick:()=>{v(K),n&&n(K)}},K))}),y.jsx(Cp,{children:y.jsx(Kl,{mode:"category",label:g,options:A,onSelect:K=>{v(K),n&&n(K)}})}),y.jsx(dm,{path:d?"professor":"student",isActive:d,onClick:m})]})}const ER=S.div`
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
`,bR=S.div`
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
`,TR=S.img`
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
`,SR=S.div`
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
`,AR=S.p`
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
`,Gc=S.div`
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
`,Yc=S.p`
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
`,G1=S.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
`,Qc=S.p`
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
`;function og({nameKor:n,rank:t,eMail:i,education:a,field:o,imgSrc:u,imgAlt:d}){const p=m=>Array.isArray(m)?y.jsx(G1,{children:m.map((g,v)=>y.jsx(Qc,{children:g},v))}):typeof m=="string"&&m?y.jsx(G1,{children:y.jsx(Qc,{children:m})}):null;return y.jsx(ER,{children:y.jsxs(bR,{children:[y.jsx(TR,{src:u,alt:d}),y.jsxs(SR,{children:[y.jsx(AR,{children:n}),y.jsxs(Gc,{children:[y.jsx(Yc,{children:"직위(직급)"}),y.jsx(Qc,{children:t})]}),y.jsxs(Gc,{children:[y.jsx(Yc,{children:"이메일"}),y.jsx(Qc,{children:i})]}),y.jsxs(Gc,{children:[y.jsx(Yc,{children:"약력"}),p(a)]}),y.jsxs(Gc,{children:[y.jsx(Yc,{children:"전문 분야"}),p(o)]})]})]})})}og.propTypes={nameKor:J.string.isRequired,rank:J.string.isRequired,eMail:J.string.isRequired,education:J.oneOfType([J.string,J.arrayOf(J.string)]),field:J.oneOfType([J.string,J.arrayOf(J.string)]),imgSrc:J.string.isRequired,imgAlt:J.string.isRequired};og.defaultProps={nameKor:"홍길동",rank:"교수",eMail:"honggildong@example.com",education:[],field:[],imgSrc:"/thumbnailExample.png",imgAlt:"홍길동 교수의 프로필 이미지"};const lg=JSON.parse('[{"num":0,"nameKor":"강유진","nameEng":"Kang Yujin","role":"3D Modeler","department":1,"professorId":"p04","studentId":2021194003,"eMail":"rkddbwls0404@gmail.com","sns":"-","imgUrl":"../image/0/portrait.jpg","category":"c4","projectNum":45,"team":1,"leader":0},{"num":1,"nameKor":"고명현","nameEng":"Go Myeonghyeon","role":"Product Designer","department":1,"professorId":"p03","studentId":2019190002,"eMail":"harczail.76@gmail.com","sns":"@_archive.hynn","imgUrl":"../image/1/portrait.jpg","category":"c0","projectNum":0,"team":0,"leader":""},{"num":2,"nameKor":"고서영","nameEng":"Go Seoyeong","role":"3d Product Designer","department":0,"professorId":"p02","studentId":2022190001,"eMail":"rhtjdud2003@naver.com","sns":"@se_o.o_","imgUrl":"../image/2/portrait.jpg","category":"c2","projectNum":26,"team":1,"leader":0},{"num":3,"nameKor":"고은솔","nameEng":"Ko Eunsol","role":"UX/UI Designer","department":1,"professorId":"p01","studentId":2021194005,"eMail":"soolu202@naver.com","sns":"@sol20_27","imgUrl":"../image/3/portrait.jpg","category":"c1","projectNum":24,"team":0,"leader":""},{"num":4,"nameKor":"구예진","nameEng":"Koo Yejin","role":"UX/UI Designer","department":1,"professorId":"p03","studentId":2022194002,"eMail":"yejk63@gmail.com","sns":"@yeahz_n","imgUrl":"../image/4/portrait.jpg","category":"c2","projectNum":27,"team":1,"leader":1},{"num":5,"nameKor":"구인회","nameEng":"Koo Inhoe","role":"Industrial Designer","department":0,"professorId":"p02","studentId":2020190001,"eMail":"eric2261@naver.com","sns":"@dlsghl01_","imgUrl":"../image/5/portrait.jpg","category":"c5","projectNum":66,"team":1,"leader":1},{"num":6,"nameKor":"권유빈","nameEng":"Kwon Yoobeen","role":"UX/UI Designer","department":1,"professorId":"p02","studentId":2020194002,"eMail":"yoobeenkwon@gmail.com","sns":"@yoovebeen","imgUrl":"../image/6/portrait.jpg","category":"c2","projectNum":26,"team":1,"leader":1},{"num":7,"nameKor":"권지민","nameEng":"Kwon Jimin","role":"UX/UI Designer","department":1,"professorId":"p03","studentId":2022194038,"eMail":"jmnee0115@naver.com","sns":"@j_minee_e","imgUrl":"../image/7/portrait.jpg","category":"c4","projectNum":46,"team":0,"leader":""},{"num":8,"nameKor":"김강민","nameEng":"Kim Gangmin","role":"Mobility Designer","department":0,"professorId":"p04","studentId":2020192003,"eMail":"min7053@naver.com","sns":"@krkdals.m","imgUrl":"../image/8/portrait.jpg","category":"c5","projectNum":67,"team":1,"leader":1},{"num":9,"nameKor":"김기윤","nameEng":"Kim Giyun","role":"Industrial Designer","department":0,"professorId":"p02","studentId":2020190002,"eMail":"tkenrnen112@tukorea.ac.kr","sns":"@gi_yunk","imgUrl":"../image/9/portrait.jpg","category":"c5","projectNum":68,"team":1,"leader":0},{"num":10,"nameKor":"김동주","nameEng":"Kim Dongju","role":"Product Designer","department":0,"professorId":"p00","studentId":2020190005,"eMail":"dongdongju3144@naver.com","sns":"@doongjuu_","imgUrl":"../image/10/portrait.jpg","category":"c3","projectNum":34,"team":0,"leader":""},{"num":11,"nameKor":"김민석","nameEng":"Kim Minseok","role":"Product Designer","department":0,"professorId":"p02","studentId":2020190006,"eMail":"@eneu201@gmail.com","sns":"@mskk.01","imgUrl":"../image/11/portrait.jpg","category":"c4","projectNum":47,"team":0,"leader":""},{"num":12,"nameKor":"김세린","nameEng":"Kim Serin","role":"Product Designer","department":0,"professorId":"p04","studentId":2021192006,"eMail":"kara7094@naver.com","sns":"@ssal._.bap","imgUrl":"../image/12/portrait.jpg","category":"c4","projectNum":48,"team":0,"leader":""},{"num":13,"nameKor":"김소리","nameEng":"Kim Sori","role":"UXUI Designer","department":1,"professorId":"p03","studentId":2021194037,"eMail":"mulsik11@gmail.com","sns":"@sorisorry_","imgUrl":"../image/13/portrait.jpg","category":"c4","projectNum":49,"team":0,"leader":""},{"num":14,"nameKor":"김예린","nameEng":"Kim Yerin","role":"Industrial Designer","department":0,"professorId":"p02","studentId":2021190007,"eMail":"kkye.0204@gmail.com","sns":"@_y.rin_","imgUrl":"../image/14/portrait.jpg","category":"c5","projectNum":69,"team":0,"leader":""},{"num":15,"nameKor":"김예준","nameEng":"Kim Yejun","role":"UX/UI, Front-End","department":1,"professorId":"p01","studentId":2020194006,"eMail":"optimusjun15@naver.com","sns":"@yeah_jun_0228","imgUrl":"../image/15/portrait.jpg","category":"c4","projectNum":50,"team":0,"leader":""},{"num":16,"nameKor":"김윤곤","nameEng":"Kim Yungon","role":"Front Designer","department":1,"professorId":"p03","studentId":2020194008,"eMail":"yunkon0722@gmail.com","sns":"@0123456789on","imgUrl":"../image/16/portrait.jpg","category":"c0","projectNum":1,"team":0,"leader":""},{"num":17,"nameKor":"김윤서","nameEng":"Kim Yunseo","role":"UX/UI Designer","department":1,"professorId":"p02","studentId":2021192007,"eMail":"thtpwl39@tukorea.ac.kr","sns":"@kyuunsoo","imgUrl":"../image/17/portrait.jpg","category":"c4","projectNum":51,"team":0,"leader":""},{"num":18,"nameKor":"김윤성","nameEng":"Kim Yunseong","role":"3D Modeling","department":0,"professorId":"p00","studentId":2020192038,"eMail":"dbstjd9063@gmail.com","sns":"@kimyyuun","imgUrl":"../image/18/portrait.jpg","category":"c0","projectNum":2,"team":0,"leader":""},{"num":19,"nameKor":"김주은","nameEng":"Kim Jueun","role":"UX/UI, HTML Coder","department":1,"professorId":"p02","studentId":2022194007,"eMail":"kimjueun58@gmail.com","sns":"-","imgUrl":"../image/19/portrait.jpg","category":"c2","projectNum":28,"team":1,"leader":0},{"num":20,"nameKor":"김지민","nameEng":"Kim Jimin","role":"Art Director & 2D","department":0,"professorId":"p02","studentId":2020190011,"eMail":"a01039029588@gmail.com","sns":"@oui_parfum_tuk23","imgUrl":"../image/20/portrait.jpg","category":"c3","projectNum":35,"team":1,"leader":0},{"num":21,"nameKor":"김지혜","nameEng":"Kim Jihye","role":"Concept, Rendering","department":0,"professorId":"p05","studentId":2021190012,"eMail":"kjj0209077@naver.com","sns":"@istriioi","imgUrl":"../image/21/portrait.jpg","category":"c5","projectNum":70,"team":1,"leader":1},{"num":22,"nameKor":"김한슬","nameEng":"Kim Hanseul","role":"Product Designer","department":0,"professorId":"p04","studentId":2021192008,"eMail":"mns816@turkorea.ac.kr","sns":"@mnsul_2","imgUrl":"../image/22/portrait.jpg","category":"c3","projectNum":36,"team":0,"leader":""},{"num":23,"nameKor":"남가림","nameEng":"Nam Garim","role":"Product Designer","department":0,"professorId":"p00","studentId":2021190014,"eMail":"garim0402@naver.com","sns":"@ga_rim__","imgUrl":"../image/23/portrait.jpg","category":"c5","projectNum":71,"team":1,"leader":1},{"num":24,"nameKor":"남궁두경","nameEng":"Namgoong Doogyung","role":"Prototype","department":0,"professorId":"p05","studentId":2020192012,"eMail":"dkyung1919@naver.com","sns":"@munamunyeojung.9","imgUrl":"../image/24/portrait.jpg","category":"c0","projectNum":3,"team":1,"leader":1},{"num":25,"nameKor":"노희재","nameEng":"Roe Heejae","role":"Interaction Designer","department":0,"professorId":"p02","studentId":2019192013,"eMail":"wjdrl1144@gmail.com","sns":"@heejae_po","imgUrl":"../image/25/portrait.jpg","category":"c3","projectNum":37,"team":0,"leader":""},{"num":26,"nameKor":"마은성","nameEng":"Ma Eunseong","role":"3D Modeling","department":0,"professorId":"p05","studentId":2021190016,"eMail":"mes3788@naver.com","sns":"@iam._.es","imgUrl":"../image/26/portrait.jpg","category":"c5","projectNum":70,"team":1,"leader":0},{"num":27,"nameKor":"문나라","nameEng":"Moon Nara","role":"Product Designer","department":0,"professorId":"p02","studentId":2021192009,"eMail":"skfk020529@naver.com","sns":"@nnoom_r","imgUrl":"../image/27/portrait.jpg","category":"c3","projectNum":38,"team":0,"leader":""},{"num":28,"nameKor":"문지형","nameEng":"Moon Jihyeong","role":"Art Director","department":0,"professorId":"p05","studentId":2020192014,"eMail":"dogtable4099@naver.com","sns":"@puer.deisgn","imgUrl":"../image/28/portrait.jpg","category":"c0","projectNum":3,"team":1,"leader":0},{"num":29,"nameKor":"민혜연","nameEng":"Min Hyeyeon","role":"Art Director","department":0,"professorId":"p00","studentId":2022192010,"eMail":"hime4ma.y@gmail.com","sns":"@kid.mugi","imgUrl":"../image/29/portrait.jpg","category":"c2","projectNum":29,"team":0,"leader":""},{"num":30,"nameKor":"박민규","nameEng":"Park Mingyu","role":"Application Designer","department":1,"professorId":"p03","studentId":2019194041,"eMail":"mingyu6393@naver.com","sns":"@min.gyu7791","imgUrl":"../image/30/portrait.jpg","category":"c0","projectNum":4,"team":0,"leader":""},{"num":31,"nameKor":"박서영","nameEng":"Park Seoyoung","role":"Product Designer","department":1,"professorId":"p03","studentId":2021192011,"eMail":"pszer0@naver.com","sns":"@ps.zer0","imgUrl":"../image/31/portrait.jpg","category":"c4","projectNum":52,"team":0,"leader":""},{"num":32,"nameKor":"박예인","nameEng":"Park Yein","role":"Prototype","department":1,"professorId":"p01","studentId":2021194013,"eMail":"pyi0413@naver.com","sns":"@p5_baguette","imgUrl":"../image/32/portrait.jpg","category":"c4","projectNum":45,"team":1,"leader":1},{"num":33,"nameKor":"박예진","nameEng":"Park Yejin","role":"Product Designer","department":0,"professorId":"p00","studentId":2021190018,"eMail":"yejin6607@naver.com","sns":"@yejin6607","imgUrl":"../image/33/portrait.jpg","category":"c5","projectNum":71,"team":1,"leader":0},{"num":34,"nameKor":"박재민","nameEng":"Park Jaemin","role":"Web 3D/XR Designer","department":1,"professorId":"p03","studentId":2020192016,"eMail":"shiibadog@tukorea.ac.kr","sns":"@jaemino_ob","imgUrl":"../image/34/portrait.jpg","category":"c2","projectNum":27,"team":1,"leader":0},{"num":35,"nameKor":"박정훈","nameEng":"Park Jeonghun","role":"Industrial Designer","department":0,"professorId":"p05","studentId":2022192012,"eMail":"2022192012@tukorea.ac.kr","sns":"-","imgUrl":"../image/35/portrait.jpg","category":"c2","projectNum":30,"team":0,"leader":""},{"num":36,"nameKor":"박지수","nameEng":"Park Jisoo","role":"UX/UI Designer","department":1,"professorId":"p03","studentId":2021194014,"eMail":"popopo020128@gmail.com","sns":"@dujs_b","imgUrl":"../image/36/portrait.jpg","category":"c0","projectNum":5,"team":0,"leader":""},{"num":37,"nameKor":"박해인","nameEng":"Park Haein","role":"Front Designer","department":0,"professorId":"p06","studentId":2022192014,"eMail":"2022192014@tukorea.ac.kr","sns":"-","imgUrl":"../image/37/portrait.jpg","category":"c5","projectNum":72,"team":0,"leader":""},{"num":38,"nameKor":"박현","nameEng":"Park Hyun","role":"Designer Director","department":0,"professorId":"p04","studentId":2022190039,"eMail":"parkhyun920@naver.com","sns":"-","imgUrl":"../image/38/portrait.jpg","category":"c4","projectNum":53,"team":1,"leader":1},{"num":39,"nameKor":"박혜성","nameEng":"Park Hyeseong","role":"Furniture Designer","department":0,"professorId":"p00","studentId":2021190020,"eMail":"hyesungpark1128@gmail.com","sns":"@comet_design02","imgUrl":"../image/39/portrait.jpg","category":"c5","projectNum":73,"team":0,"leader":""},{"num":40,"nameKor":"박효정","nameEng":"Park Hyojung","role":"UX/UI Designer","department":0,"professorId":"p02","studentId":2021190021,"eMail":"2021190021@tukorea.ac.kr","sns":"-","imgUrl":"../image/40/portrait.jpg","category":"c4","projectNum":54,"team":0,"leader":""},{"num":41,"nameKor":"배아영","nameEng":"Bae Ayeong","role":"UX/UI Designer","department":1,"professorId":"p01","studentId":2022194014,"eMail":"your3ami@tukorea.ac.kr","sns":"-","imgUrl":"../image/41/portrait.jpg","category":"c0","projectNum":6,"team":0,"leader":""},{"num":42,"nameKor":"배혜림","nameEng":"Bae Hyelim","role":"Industrial Designer","department":0,"professorId":"p05","studentId":2021192013,"eMail":"mil2021@tukorea.ac.kr","sns":"-","imgUrl":"../image/42/portrait.jpg","category":"c0","projectNum":7,"team":1,"leader":0},{"num":43,"nameKor":"백대한","nameEng":"Baek Daehan","role":"Product Designer","department":0,"professorId":"p05","studentId":2020192039,"eMail":"eifasfkifk@gmail.com","sns":"-","imgUrl":"../image/43/portrait.jpg","category":"c0","projectNum":8,"team":0,"leader":""},{"num":44,"nameKor":"백미나","nameEng":"Baek Mina","role":"Graphic designer","department":0,"professorId":"p06","studentId":2021190023,"eMail":"wbwyhr@naver.com","sns":"@oeuvreb","imgUrl":"../image/44/portrait.jpg","category":"c4","projectNum":55,"team":0,"leader":""},{"num":45,"nameKor":"서연주","nameEng":"Seo Yeonju","role":"UI/UX,HTML Coder","department":1,"professorId":"p02","studentId":2022194015,"eMail":"syj0305290529@gmail.com","sns":"@yeonju._0","imgUrl":"../image/45/portrait.jpg","category":"c2","projectNum":28,"team":1,"leader":1},{"num":46,"nameKor":"서원진","nameEng":"Seo Wonjin","role":"Living Product Designer","department":0,"professorId":"p05","studentId":2019152026,"eMail":"swj000324@gmail.com","sns":"@wonjin0324","imgUrl":"../image/46/portrait.jpg","category":"c4","projectNum":56,"team":0,"leader":""},{"num":47,"nameKor":"석동현","nameEng":"Suk Donghyun","role":"Visual Director","department":0,"professorId":"p06","studentId":2020190015,"eMail":"andysuk0108@naver.com","sns":"@hyun_108","imgUrl":"../image/47/portrait.jpg","category":"c5","projectNum":66,"team":1,"leader":0},{"num":48,"nameKor":"성수민","nameEng":"Seong Sumin","role":"JS, Flask Prototype","department":1,"professorId":"p02","studentId":2020194016,"eMail":"epwyqqu309@gmail.com","sns":"-","imgUrl":"../image/48/portrait.jpg","category":"c3","projectNum":39,"team":1,"leader":1},{"num":49,"nameKor":"성유승","nameEng":"Sung Yuseung","role":"UX/UI, Prototype","department":1,"professorId":"p02","studentId":2019122021,"eMail":"usngsung0830@naver.com","sns":"@u_seung0830","imgUrl":"../image/49/portrait.jpg","category":"c1","projectNum":25,"team":1,"leader":0},{"num":50,"nameKor":"송지원","nameEng":"Song Jiwon","role":"Creative Designer","department":0,"professorId":"p04","studentId":2021190024,"eMail":"wldnjs0762@naver.com","sns":"@7.27_v","imgUrl":"../image/50/portrait.jpg","category":"c0","projectNum":9,"team":1,"leader":1},{"num":51,"nameKor":"신산하","nameEng":"Shin Sanha","role":"UX/UI Designer","department":1,"professorId":"p02","studentId":2021192014,"eMail":"sanha@tukorea.ac.kr","sns":"@sanamonii","imgUrl":"../image/51/portrait.jpg","category":"c3","projectNum":39,"team":1,"leader":0},{"num":52,"nameKor":"신주혜","nameEng":"Shin Juhye","role":"Product Designer","department":0,"professorId":"p05","studentId":2022190019,"eMail":"grace04god@tukorea.ac.kr","sns":"-","imgUrl":"../image/52/portrait.jpg","category":"c0","projectNum":10,"team":1,"leader":0},{"num":53,"nameKor":"신주희","nameEng":"Shin Juhui","role":"PM · UX/UI · Dev","department":1,"professorId":"p07","studentId":2022194016,"eMail":"lucytomato@naver.com","sns":"@krhee_o","imgUrl":"../image/53/portrait.jpg","category":"c3","projectNum":40,"team":0,"leader":""},{"num":54,"nameKor":"심태섭","nameEng":"Sim Taeseob","role":"UX/UI, Prototype","department":1,"professorId":"p01","studentId":2020194017,"eMail":"1212sts@naver.com","sns":"@tlaxotjq","imgUrl":"../image/54/portrait.jpg","category":"c0","projectNum":11,"team":0,"leader":""},{"num":55,"nameKor":"안상은","nameEng":"An Sangeun","role":"Product Designer","department":1,"professorId":"p03","studentId":2022194018,"eMail":"iltkddms@tukorea.ac.kr","sns":"@in_saengeun","imgUrl":"../image/55/portrait.jpg","category":"c4","projectNum":57,"team":1,"leader":1},{"num":56,"nameKor":"염수민","nameEng":"Yeom Sumin","role":"UX/UI, Prototype","department":1,"professorId":"p01","studentId":2022194021,"eMail":"yeommin2528@gmail.com","sns":"-","imgUrl":"../image/56/portrait.jpg","category":"c4","projectNum":58,"team":0,"leader":""},{"num":57,"nameKor":"유수현","nameEng":"Ryu Soohyun","role":"Modeling, UX/UI","department":0,"professorId":"p06","studentId":2022192019,"eMail":"suhyeon9145@naver.com","sns":"@dbtn_246","imgUrl":"../image/57/portrait.jpg","category":"c2","projectNum":31,"team":1,"leader":1},{"num":58,"nameKor":"윤모란","nameEng":"Yoon Moran","role":"Modeling, Rendering","department":0,"professorId":"p06","studentId":2022190024,"eMail":"moran_a_486@naver.com","sns":"-","imgUrl":"../image/58/portrait.jpg","category":"c2","projectNum":31,"team":1,"leader":0},{"num":59,"nameKor":"윤서희","nameEng":"Yoon Seohee","role":"Product Designer","department":0,"professorId":"p00","studentId":2020192021,"eMail":"dbstjgml000@naver.com","sns":"@hi_seoheeeee","imgUrl":"../image/59/portrait.jpg","category":"c0","projectNum":12,"team":0,"leader":""},{"num":60,"nameKor":"윤재익","nameEng":"Yun Jaeik","role":"Art Director","department":1,"professorId":"p01","studentId":2020194018,"eMail":"jwodlr10014@naver.com","sns":"@bpink._.j","imgUrl":"../image/60/portrait.jpg","category":"c0","projectNum":13,"team":0,"leader":""},{"num":61,"nameKor":"이교연","nameEng":"Lee Gyoyeon","role":"Product,Graphic","department":0,"professorId":"p01","studentId":2022192038,"eMail":"inacutewaytoday@gmail.com","sns":"-","imgUrl":"../image/61/portrait.jpg","category":"c2","projectNum":32,"team":0,"leader":""},{"num":62,"nameKor":"이도훈","nameEng":"Lee Dohun","role":"Mobility Designer","department":0,"professorId":"p02","studentId":2020190025,"eMail":"bestson0137@tukorea.ac.kr","sns":"@dl_doh","imgUrl":"../image/62/portrait.jpg","category":"c5","projectNum":74,"team":0,"leader":""},{"num":63,"nameKor":"이민욱","nameEng":"Lee Minuk","role":"Product Designer","department":1,"professorId":"p01","studentId":2020194021,"eMail":"lmu0306@naver.com","sns":"-","imgUrl":"../image/63/portrait.jpg","category":"c4","projectNum":59,"team":0,"leader":""},{"num":64,"nameKor":"이상","nameEng":"Lee Sang","role":"Industrial Designer","department":0,"professorId":"p02","studentId":2020190027,"eMail":"23isgood@naver.com","sns":"@leesang2001","imgUrl":"../image/64/portrait.jpg","category":"c3","projectNum":35,"team":1,"leader":1},{"num":65,"nameKor":"이영","nameEng":"Lee Young","role":"Product Designer","department":1,"professorId":"p03","studentId":2022194025,"eMail":"young2003@tukorea.ac.kr","sns":"-","imgUrl":"../image/65/portrait.jpg","category":"c4","projectNum":57,"team":1,"leader":0},{"num":66,"nameKor":"이영재","nameEng":"Lee Youngjae","role":"Product Designer","department":1,"professorId":"p03","studentId":2020194023,"eMail":"roiray0320@gmail.com","sns":"@6amtol","imgUrl":"../image/66/portrait.jpg","category":"c0","projectNum":14,"team":1,"leader":0},{"num":67,"nameKor":"이웅찬","nameEng":"Lee Woongchan","role":"Product Designer","department":0,"professorId":"p02","studentId":2020192028,"eMail":"dldndcks01@naver.com","sns":"@eedndcks","imgUrl":"../image/67/portrait.jpg","category":"c3","projectNum":41,"team":0,"leader":""},{"num":68,"nameKor":"이준오","nameEng":"Lee Juno","role":"Graphic, 3D, UI/UX","department":0,"professorId":"p00","studentId":2020190030,"eMail":"ljuno421@naver.com","sns":"@jun_duck0421","imgUrl":"../image/68/portrait.jpg","category":"c0","projectNum":15,"team":1,"leader":1},{"num":69,"nameKor":"이지민","nameEng":"Lee Jimin","role":"UX/UI, Prototype","department":1,"professorId":"p02","studentId":2020194026,"eMail":"ibs7533@naver.com","sns":"@minigmin_1004","imgUrl":"../image/69/portrait.jpg","category":"c1","projectNum":25,"team":1,"leader":1},{"num":70,"nameKor":"이지현","nameEng":"Lee Jihyeon","role":"Drone Designer","department":0,"professorId":"p04","studentId":2022192023,"eMail":"lanius4257@tukorea.ac.kr","sns":"@__jiwawa__","imgUrl":"../image/70/portrait.jpg","category":"c5","projectNum":67,"team":1,"leader":0},{"num":71,"nameKor":"이채연","nameEng":"Lee Chaeyeon","role":"UX/UI, Front-End","department":1,"professorId":"p07","studentId":2021194022,"eMail":"cvgh6835@naver.com","sns":"@cvgh._.ly","imgUrl":"../image/71/portrait.jpg","category":"c0","projectNum":16,"team":0,"leader":""},{"num":72,"nameKor":"이채원","nameEng":"Lee Chaewon","role":"Product Designer","department":0,"professorId":"p06","studentId":2022192024,"eMail":"chaerry3907@naver.com","sns":"@chae_rr","imgUrl":"../image/72/portrait.jpg","category":"c0","projectNum":7,"team":1,"leader":1},{"num":73,"nameKor":"이채원","nameEng":"Lee Chaewon","role":"Product Designer","department":1,"professorId":"p03","studentId":2021194023,"eMail":"mondyu1024@gmail.com","sns":"@di_ed_ie","imgUrl":"../image/73/portrait.jpg","category":"c0","projectNum":14,"team":1,"leader":1},{"num":74,"nameKor":"임세준","nameEng":"Im Sejun","role":"Product Designer","department":0,"professorId":"p04","studentId":2019190043,"eMail":"helicat123@naver.com","sns":"-","imgUrl":"../image/74/portrait.jpg","category":"c5","projectNum":75,"team":1,"leader":1},{"num":75,"nameKor":"임소이","nameEng":"Yim Soie","role":"3d Designer","department":0,"professorId":"p05","studentId":2022190030,"eMail":"soie0410@tukorea.ac.kr","sns":"@idiox_1","imgUrl":"../image/75/portrait.jpg","category":"c0","projectNum":17,"team":1,"leader":1},{"num":76,"nameKor":"임종석","nameEng":"Lim Jongseok","role":"Product Designer","department":0,"professorId":"p06","studentId":2020192032,"eMail":"rimjs01@tukorea.ac.kr","sns":"@im_seok01","imgUrl":"../image/76/portrait.jpg","category":"c0","projectNum":18,"team":0,"leader":""},{"num":77,"nameKor":"전준범","nameEng":"Jeon Junbeom","role":"UX, 3D Graphics","department":1,"professorId":"p01","studentId":2021194028,"eMail":"@jb_jeon@naver.com","sns":"@imdiverstandinoncliff","imgUrl":"../image/77/portrait.jpg","category":"c4","projectNum":60,"team":0,"leader":""},{"num":78,"nameKor":"정문선","nameEng":"Jung Moonsun","role":"UX/UI Designer","department":0,"professorId":"p02","studentId":2020190033,"eMail":"munseon9822@naver.com","sns":"@moooon_suuuuuun","imgUrl":"../image/78/portrait.jpg","category":"c3","projectNum":42,"team":0,"leader":""},{"num":79,"nameKor":"정민호","nameEng":"Jung Minho","role":"Industrial Designer","department":0,"professorId":"p04","studentId":2020190034,"eMail":"jmh011014@naver.com","sns":"@j_m2nh5","imgUrl":"../image/79/portrait.jpg","category":"c5","projectNum":68,"team":1,"leader":1},{"num":80,"nameKor":"정유진","nameEng":"Jung Yuzin","role":"Product Designer","department":0,"professorId":"p05","studentId":2022190033,"eMail":"akf0301@naver.com","sns":"@jhin0112__","imgUrl":"../image/80/portrait.jpg","category":"c5","projectNum":76,"team":0,"leader":""},{"num":81,"nameKor":"정지원","nameEng":"Jung Jiwon","role":"3D Designer","department":0,"professorId":"p06","studentId":2022192025,"eMail":"marcellar1071@gmail.com","sns":"@stopmongkki","imgUrl":"../image/81/portrait.jpg","category":"c0","projectNum":17,"team":1,"leader":0},{"num":82,"nameKor":"정혜원","nameEng":"Jeong Hyewon","role":"Visual Designer","department":0,"professorId":"p06","studentId":2021190034,"eMail":"jhw275@naver.com","sns":"-","imgUrl":"../image/82/portrait.jpg","category":"c0","projectNum":10,"team":1,"leader":1},{"num":83,"nameKor":"정혜조","nameEng":"Jeong Hyejo","role":"3D Designer","department":0,"professorId":"p00","studentId":2022192028,"eMail":"hyejo5614@naver.com","sns":"@11.7OK","imgUrl":"../image/83/portrait.jpg","category":"c4","projectNum":61,"team":0,"leader":""},{"num":84,"nameKor":"정호균","nameEng":"Jeong Hokyun","role":"UX/UI","department":1,"professorId":"p01","studentId":2020194031,"eMail":"hohokyun@naver.com","sns":"-","imgUrl":"../image/84/portrait.jpg","category":"c4","projectNum":62,"team":0,"leader":""},{"num":85,"nameKor":"조선화","nameEng":"Jo Sunhwa","role":"Visual Designer","department":0,"professorId":"p04","studentId":2022192039,"eMail":"jo5629@naver.com","sns":"@_sh_1114_","imgUrl":"../image/85/portrait.jpg","category":"c4","projectNum":53,"team":1,"leader":0},{"num":86,"nameKor":"조채빈","nameEng":"Cho Chaebin","role":"Robot Designer","department":0,"professorId":"p00","studentId":2021192029,"eMail":"chea0000@tukorea.ac.kr","sns":"-","imgUrl":"../image/86/portrait.jpg","category":"c0","projectNum":19,"team":0,"leader":""},{"num":87,"nameKor":"주예지","nameEng":"Ju Yeji","role":"UX/UI","department":1,"professorId":"p03","studentId":2022194040,"eMail":"jooyeiji@naver.com","sns":"@yej1__","imgUrl":"../image/87/portrait.jpg","category":"c0","projectNum":20,"team":0,"leader":""},{"num":88,"nameKor":"진세원","nameEng":"Jin Sewon","role":"Product & Visual","department":0,"professorId":"p00","studentId":2022192030,"eMail":"sewoneee@naver.com","sns":"@jinsewon99","imgUrl":"../image/88/portrait.jpg","category":"c0","projectNum":15,"team":1,"leader":0},{"num":89,"nameKor":"진효민","nameEng":"Jin Hyomin","role":"Living Designer","department":0,"professorId":"p07","studentId":2022190040,"eMail":"jhm8912@naver.com","sns":"@hyomin_eao","imgUrl":"../image/89/portrait.jpg","category":"c4","projectNum":63,"team":0,"leader":""},{"num":90,"nameKor":"차소이","nameEng":"Cha Soyi","role":"Industrial Designer","department":0,"professorId":"p06","studentId":2022192040,"eMail":"osjj2202@naver.com","sns":"@cow__tooth","imgUrl":"../image/90/portrait.jpg","category":"c0","projectNum":21,"team":0,"leader":""},{"num":91,"nameKor":"차한비","nameEng":"Cha Hanbi","role":"Product Designer","department":0,"professorId":"p02","studentId":2022192031,"eMail":"cha4786@naver.com","sns":"@raincar__","imgUrl":"../image/91/portrait.jpg","category":"c2","projectNum":33,"team":0,"leader":""},{"num":92,"nameKor":"최가현","nameEng":"Choi Gahyun","role":"XR Controller","department":1,"professorId":"p07","studentId":2022194034,"eMail":"poiulkjhmnb098@naver.com","sns":"@_.ga._.xx","imgUrl":"../image/92/portrait.jpg","category":"c3","projectNum":43,"team":0,"leader":""},{"num":93,"nameKor":"한채원","nameEng":"Han Chaewon","role":"Product Design","department":0,"professorId":"p04","studentId":2021190036,"eMail":"2chaetwo@gmail.com","sns":"@1chaeone","imgUrl":"../image/93/portrait.jpg","category":"c4","projectNum":64,"team":0,"leader":""},{"num":94,"nameKor":"함은서","nameEng":"Ham Eunseo","role":"UX/UI Designer","department":1,"professorId":"p03","studentId":2021192034,"eMail":"hamunseo0894@naver.com","sns":"@hama_pit_a_pat","imgUrl":"../image/94/portrait.jpg","category":"c0","projectNum":22,"team":0,"leader":""},{"num":95,"nameKor":"허도윤","nameEng":"Heo Doyun","role":"UX/UI","department":1,"professorId":"p03","studentId":2022194041,"eMail":"saver2075@icloud.com","sns":"-","imgUrl":"../image/95/portrait.jpg","category":"c3","projectNum":44,"team":0,"leader":""},{"num":96,"nameKor":"허지유","nameEng":"Heo Jiyu","role":"Art Director","department":0,"professorId":"p04","studentId":2021192035,"eMail":"jjoojjoo0314@naver.com","sns":"@ji._.iu","imgUrl":"../image/96/portrait.jpg","category":"c0","projectNum":9,"team":1,"leader":0},{"num":97,"nameKor":"홍승재","nameEng":"Hong Seungjae","role":"Product Designer","department":0,"professorId":"p02","studentId":2020192036,"eMail":"h010505@naver.com","sns":"@dent__de","imgUrl":"../image/97/portrait.jpg","category":"c4","projectNum":65,"team":0,"leader":""},{"num":98,"nameKor":"홍지우","nameEng":"Hong Jiwoo","role":"Art Director","department":0,"professorId":"p04","studentId":2021192036,"eMail":"hongjiwoo222@gmail.com","sns":"@ghdwldnnn","imgUrl":"../image/98/portrait.jpg","category":"c5","projectNum":75,"team":1,"leader":0},{"num":99,"nameKor":"황수정","nameEng":"Hwang Sujeong","role":"3D Designer","department":0,"professorId":"p05","studentId":2022190036,"eMail":"bvnm1234@tukorea.ac.kr","sns":"@suj2ong","imgUrl":"../image/99/portrait.jpg","category":"c0","projectNum":23,"team":0,"leader":""}]'),RR=[{id:"p00",nameKor:"장영주",nameEng:"Jang Youngjoo",rank:"학부장, 교수",email:"jyj@tukorea.ac.kr",education:["㈜LG 전자 디자인 연구소","㈜인터디자인 디자인 기획실장","한국디지털디자인학회 이사","경기도 시흥시 정책기획단 정책위원","제품디자인·브랜드 개발센터 [EH]책임교수","디자인비지니스혁신 센터장"],field:["제품디자인·브랜드 개발","디자인 조직과 협동적 Process","제품디자인과 산업기술의 통합적 시스템 구축"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524695988100.jpg"},{id:"p01",nameKor:"권오재",nameEng:"Kwon Ojae",rank:"교수",email:"kwsokw@tukorea.ac.kr",education:["㈜키메이커스 대표이사","㈜삼성전자 디자인경영센터 UX연구소 그룹장","㈜LG전자 디자인종합연구소 가전제품팀 연구원","서울 성북구청, 용인시 디자인위원","ESK / KOSES / KADI 이사, 서비스디자인학회 사업부회장","2016 대한민국 ICT INNOVATION 대상 미래부장관 유공자 표창"],field:["UX 기반 제품/서비스 디자인 기획 및 양산화 개발","제품 인터페이스 UI 분석 및 UI 설계","제품디자인, 설계 및 양산용 제품 개발","사용자의 감성을 자극하는 밸류 체인(Value Chain) 요인 연구"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524642556100.jpg"},{id:"p02",nameKor:"김 억",nameEng:"Kim Eok",rank:"교수, 학생처장",email:"kimeok@tukorea.ac.kr",education:["㈜LG전자 디자인경영센터 선임연구원","KAIST 총동문회 이사","한국산업디자이너협회 이사 / 한국서비스디자인학회 이사","한국디자인기초조형학회 / 한국디자인학회 이사","디자인융합전문대학원 사업단장"],field:["디자인 전략 및 기획","서비스디자인 및 PSS(Product-Service System) 개발","도시 공공 디자인"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524658322100.jpg"},{id:"p03",nameKor:"김한종",nameEng:"Kim Hanjong",rank:"조교수, PD교수",email:"hanjongkim@tukorea.ac.kr",education:["AR 기반의 인터랙티브 제품 프로토타이핑 도구 개발","이동형음압병동의 디자인 요구사항 수립 연구","이동형음압병동 설계를 위한 디자인 도구 개발","한국기계연구원 산업용 SW UX/UI 가이드라인 개발"],field:["Web 기반 3D 그래픽스","SW 시스템 디자인 / 프론트엔드 개발","디자인 지원 도구 개발"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524669896100.jpg"},{id:"p04",nameKor:"조남주",nameEng:"Jo Namjoo",rank:"교수,특별보좌역",email:"njjoh@tukorea.ac.kr",education:["서울특별시 서울디자인위원회 심의위원","국립공원관리공단 디자인 분야 자문위원","'디자인코리아 2003'국제회의 패널리스트","㈜현대 리바트 가구 디자인아웃소싱 프로젝트"],field:["가구 디자인 엔지니어링","지속가능한 공공디자인","제품디자인 엔지니어링"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524711232100.jpg"},{id:"p05",nameKor:"한민섭",nameEng:"Han Minseop",rank:"부교수",email:"mshan@tukorea.ac.kr",education:["CISD정보저장기기 연구센터 전문연구원","㈜코닝 정밀소재 책임연구원","㈜삼성전자 생산기술연구소 책임연구원"],field:["나노/마이크로 초정밀 미세 가공 공정","Equipment H/W 설계 및 시뮬레이션","융복합 가공 시스템 설계"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524614469100.jpg"},{id:"p06",nameKor:"홍성수",nameEng:"Hong Seongsu",rank:"교수, 국제처장",email:"hss@tukorea.ac.kr",education:["3차원 의료영상시스템(MRI) 제품설계 및 디자인","다족형견마로봇 / 헬스케어로봇 / 재활보조로봇","식사보조로봇/ 수중로봇/ 청소로봇 / 웨어러블 로봇","협동로봇/ 자율주행로봇/ 순찰로봇/ 공항안내로봇 등 90여종 로봇 개발"],field:["로봇 시스템 개발/ 로봇디자인/ HRI 디자인","로봇 문화콘텐츠 기술개발","신기술 전시기획/ 전시시스템개발"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524724386100.jpg"},{id:"p07",nameKor:"김태균",nameEng:"Kim Taekyun",rank:"조교수, 진로취업지도교수",email:"tgkim1design@tukorea.ac.kr",education:["영국, 영국 국제디자인박람회전시 ‘London 100% Design‘ 초청 출품","중국, SUPER DESIGNERS: Exploration of Creative Forms, The Boundaries of Design Forms 초청 출품","INNOCHINA 대상","나는글로벌벤처다 동상","Spark Awards-Silver"],field:["AI 기반 제품·공공시설물 디자인 실무·방법론","UX 중심 디자인 전략·개발","지식 주도 디자인 아이디에이션 기반 실무 디자인 설계 및 교수법"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1724738930608100.jpg"}],eu=JSON.parse(`[{"members":[1],"category":"c0","projectNum":0,"titleKor":"체계적인 아이디어 발전을 위한 AI기반 디자인 실험 워크스페이스","titleEng":"IDEA UNION LAB","description":"IDEA UNION LAB은 아이디어 발전 과정에서 어려움을 겪는 디자이너를 위한 AI 기반 디자인 실험실 서비스입니다. 단순히 AI에게 디자인 결과물을 요청하는 방식이 아니라 디자인 프로세스처럼 방법론의 프로세스에 따라 인사이트를 도출하며, 발전된 아이디어 및 생성 과정을 제공합니다. 이를 통해 보다 체계적으로 아이디어를 발전시킬 수 있으며 방법론을 학습할 수 있습니다.","videoId":1128192125},{"members":[16],"category":"c0","projectNum":1,"titleKor":"맵시","titleEng":"MAPSEE","description":"MAPSEE는 사용자의 취향을 분석해 생성한 퍼소나와 실제 착장을 비교함으로써, 두 스타일 간의 차이를 시각적으로 보여주는 서비스입니다. 색상·핏·무드의 유사도와 차이를 ‘패션 지도’처럼 표현하여, 사용자가 자신의 옷맵시가 어떤 방향으로 나아가고 있는지 한눈에 확인할 수 있도록 돕습니다.","videoId":1127543207},{"members":[18],"category":"c0","projectNum":2,"titleKor":"건물화재내부정찰로봇","titleEng":"RESQ","description":"화재 발생 후 골든타임을 지키기 위해서 현재 소방관인력으로만 힘든  경우가 많습니다. 고온·연기·어두운 환경에서도 자유롭게 이동하며 \\n내부를 탐색할 수 있으며, 실시간 영상 데이터를 제공해 소방관의 안전한 구조 활동을 지원합니다. ResQ는 화재 현장에서 인명 피해를 \\n최소화할 수 있습니다.   \\n있는 든든한 파트너입니다.","videoId":1128457679},{"members":[24,28],"category":"c0","projectNum":3,"titleKor":"스카이 가드 듀오","titleEng":"SKY GUARD DUO","description":"매년 증가하는 버드스트라이크 위협에 맞서는 'SKY GUARD DUO'. 이 시스템은 지상을 담당하는 자율주행 로봇과 상공을 책임지는 드론 편대로 구성된 이중 방어 솔루션입니다. AI가 위협을 탐지하면 에어캐논이 먼저 대응하고, 필요시 드론 편대가 출격하여 입체 작전을 펼칩니다. 공항 안전의 새로운 기준을 제시합니다.","videoId":1126407280},{"members":[30],"category":"c0","projectNum":4,"titleKor":"마이다꾸","titleEng":"MYDAKU","description":"MYDAKU 는 작성한 일기의 내용과 키워드를 통해 그날의 기분과 일상을 표현한 AI 스티커 제작 서비스입니다. 업로드 한 일기 사진을 바탕으로 키워드를 선택하여 감정이나 주제를 시각적으로 표현할 수 있는 AI 스티커를 제공받습니다. 또한 자동 생성된 AI 스티커를 저장하며 제작한 스티커와 키워드를 바탕으로 타 사용자와 스티커를 공유할 수 있습니다.","videoId":1126865139},{"members":[36],"category":"c0","projectNum":5,"titleKor":"레디큐","titleEng":"READYQ","description":"READYQ는 필기 자료를 인식하여 퀴즈를 생성하는 AI 기반 학습 관리 서비스입니다. 암기 학습에 어려움을 겪는 사용자를 위해 맞춤형 퀴즈를 제공하고 체계적인 기억 인출 연습을 돕습니다. 나아가 생성된 퀴즈를 통해 자연스러운 복습 기회와 효율적인 학습 관리를 지원합니다.","videoId":1127539556},{"members":[41],"category":"c0","projectNum":6,"titleKor":"조각조각","titleEng":"JOGAKJOGAK","description":"조각조각은 사용자가 키워드를 바탕으로 스토리를 작성하고, 해당 스토리에 맞춰 사진을 촬영하면 AI가 일러스트를 완성시켜 주는 게임형 서비스입니다. 캐릭터 애니메이션 요소를 통해 사용자에게 흥미를 제공하여 사진 속에 담긴 순간의 이야기와 감정을 풍부하게 표현하도록 돕습니다.","videoId":1126740651},{"members":[72,42],"category":"c0","projectNum":7,"titleKor":"팔로잉 충전 스테이션 드론","titleEng":"FOLLOWING CHARGING STATION DRONE","description":"Following Charging Station Drone은 공중급유기 기술에서 착안한 제품으로 드론을 충전해주는 이동식 충전소 역할을 수행한다.  이 충전 드론은 배터리 한계로 비행 시간이 짧았던 드론들을 충전하므로써 효율성을 극대화하고 편한 충전 방식을 제공한다.","videoId":1127151890},{"members":[43],"category":"c0","projectNum":8,"titleKor":"에이아이스마트모니터암","titleEng":"AI SMART MONITORARM","description":"AI 스마트 모니터암은 사용자의 자세를 인식해 올바르게 교정해주는 스마트 디바이스입니다. 내장된 카메라와 인공지능이 목과 어깨의 움직임을 실시간으로 감지하여 피로를 줄이고 건강한 자세 습관을 형성하도록 돕습니다.","videoId":1127217010},{"members":[50,96],"category":"c0","projectNum":9,"titleKor":"문화유산 복원 시스템 로봇","titleEng":"BIND","description":"국내 문화유산 복원 현장은 인력난과 수작업 한계로 복원율이 1%에 불과합니다. BIND는 유물 복원 작업의 효율성과 정확성을 높여 이 문제를 해결하기 위해 개발되었습니다. 레이저 세척, 3D 스캐닝, AI 모델링, 세라믹 프린팅, CNC 가공을 통합해 원본의 질감까지 재현하며, 이를 통해 소중한 문화유산을 안전하게 보존하여 미래 세대에 온전히 전달합니다.","videoId":1127032149},{"members":[82,52],"category":"c0","projectNum":10,"titleKor":"자기주도학습 강화를 위한 학습 독려 로봇","titleEng":"ENDY","description":"공부 도중 휴대전화 사용, 졸음 상황 등 사용자의 학습 상태를 고려하여 바른 학습 태도를 유지하도록 로봇이 재촉하고 시간에 따른 공부 진도를 확인하며 학습 텐션을 유지할 수 있도록 피드백을 한다. 로봇을 통한 사용자의 학습 관찰과 실시간 피드백을 가능케 하여 AI 학습 컴페니언 로봇 개발을 도모하고자 하였다.","videoId":1126889031},{"members":[54],"category":"c0","projectNum":11,"titleKor":"툰챗","titleEng":"TOONCHAT","description":"툰-챗'은 인간관계가 지속될수록 표현이 단조로워지고 단어가 생략되어 가는 온라인 채팅 환경을 만화 같은 그래픽으로 표현하여 풍부하고 즐거운 소통 경험으로 유도하는 서비스입니다. 사용자가 입력한 채팅은 각자 선택한 화풍의 그래픽으로 출력되고, 출력된 서로의 그래픽을 공유하며 새로운 소통 경험을 만듭니다.","videoId":1126711648},{"members":[59],"category":"c0","projectNum":12,"titleKor":"미래형 방범 솔루션 귀갓길 동행 드론","titleEng":"RING GUARDIAN","description":"RING GUARDIAN은 야간 귀가 중 사용자의 머리 위를 따라 이동하며 길을 비추고 주변을 기록하는 방범 드론입니다. 어둠 속에서도 안전한 동행을 제공하며, 엔젤링 형태의 조명으로 심리적 안정감을, 경찰 시스템과 연동되어 신속한 대응과 실질적 보호를 지원합니다.","videoId":1127418304},{"members":[60],"category":"c0","projectNum":13,"titleKor":"마스크 이모지","titleEng":"MASK EMOJI","description":"MASK - EMOJI는 청소년과 20~30대가 SNS 소통 속에서 ‘가면’을 쓰고 진짜 감정을 숨기는 현상에서 착안한 프로젝트입니다. 사용자는 자신만의 ‘가면’을 직접 꾸미며, AI 로봇과 친구처럼 대화하면서 감정을 자연스럽게 표현할 수 있습니다. 또한 방대한 수집 요소를 결합해 감정 표현의 새로운 방식을 제시하는 차별화된 경험을 선사합니다.","videoId":1127190833},{"members":[73,66],"category":"c0","projectNum":14,"titleKor":"위플","titleEng":"WEEPLE","description":"Weeple은 가족, 친구, 동호회 등 우리 그룹이 함께 찍은 사진과 짧은 설명을 입력하면,\\nAI가 그룹의  분위기와 특성을 분석하여 우리만의 보드게임 테마를 만들어주는 서비스입니다.\\n같이 찍은 사진이 게임으로 바뀌고, 우리만의 추억과 개성이 담긴 미션에 도전해볼 수 있습니다.\\n함께 웃고 도전하면서, 우리 그룹만의 스토리를 즐길 수 있는 보드게임 테마를 만들어보세요!","videoId":1127052600},{"members":[68,88],"category":"c0","projectNum":15,"titleKor":"수중 속 골프공 수거로봇","titleEng":"AQUATRIEVE","description":"매년 전 세계 골프장에서 유실되는 1억 개 이상의 골프공은 해양 오염과 미세플라스틱 문제를 야기합니다. 현재는 다이버가 직접 수중에 들어가 회수하지만, 어두운 환경과 공에 맞을 위험이 있습니다. 본 로봇은 자율주행으로 공을 수거하고 스테이션으로 운반해 로스트볼로 재활용하고, 이니셜·특징이 있는 공은 앱을 통해 주인에게 반환합니다.","videoId":1127036871},{"members":[71],"category":"c0","projectNum":16,"titleKor":"뮤즈","titleEng":"MUSE","description":"MUSE는 디자이너가 논문을 이해하고 실무에 바로 활용하도록 돕는 AI 기반 웹서비스입니다. AI가 논문을 분석하여 디자인 브리프, 퍼소나 스토리, 디자인 가이드라인, 관련 자료 추천, 아이디어 생성 도우미의 5가지 실무에 특화된 형태(텍스트 및 시각 자료 결합)로 재구성해 제공합니다. 도출된 인사이트는 프로젝트 폴더에 체계적으로 저장 및 관리할 수 있으며, 직관적인 UI로 효율적인 디자인 작업을 지원합니다.","videoId":1127403683},{"members":[75,81],"category":"c0","projectNum":17,"titleKor":"공항 위험물질 및 마약 탐지 로봇","titleEng":"CO-BOT","description":"마약, 폭발물, 바이러스 등 눈에 보이지 않는 위험을 빠르고 정확하게 탐지해 사고를 예방합니다.다중 센서와 AI 전자코를 이용해 공기 중 분자 변화를 분석하고, 자율주행으로 넓은 공간을 순찰합니다.탐지 정보는 실시간으로 전달되며, 검역, 마약 탐지, 폭발물 탐지 모드를 상황에 맞게 전환할 수 있습니다.이 로봇은 공항 같은 시설을 안전하게 지키는 스마트한 감시 파트너입니다.","videoId":1127049607},{"members":[76],"category":"c0","projectNum":18,"titleKor":"전기차 화재 진압 로봇","titleEng":"E-FIBOT","description":"최근 전기차 시장의 확대와 함께 전기차 화재 또한 사회적 문제로 떠오르고 있다.\\n전기차 화재 진압에서 가장 중요한 것은 신속한 소화이다.\\n\\n하지만 기존 간접 소화 방식은 완전 소화까지 약 3~4시간이 소요되어 피해 확산을 \\n막기 어렵다. 또다른 방식인 직접 소화 방식은 속도는 빠르지만 \\n폭발, 감전과 같은 위험성 때문에 쉽게 쓰기 어렵다.\\n\\n이러한 전기차 화재를 신속하고 안전하게 진압하기 위해 E-FIBOT을 개발하였다.","videoId":1127469972},{"members":[86],"category":"c0","projectNum":19,"titleKor":"해저 미세플라스틱 수거 로봇","titleEng":"Aqua Breeze","description":"Aqua Breeze는 마찰대전 발전소자를 활용한 자가발전 로봇으로 외부 전력 없이도 자율적으로 작동하며 정전기 흡착 원리를 통해 해저에 침적된 미세플라스틱을 친환경적으로 수거하여 기존의 방식으로는 처리하기 어려웠던 문제를 해결하고 이를 통해 해양 생태계와 퇴적 환경을 보호하는 지속가능한 솔루션을 제공합니다.","videoId":"-"},{"members":[87],"category":"c0","projectNum":20,"titleKor":"노블","titleEng":"NOBLE","description":"Noble은 웹소설 집필을 원하는 사용자를 위한 메모 기반 스토리 생성 서비스입니다. 아이디어 메모를 관리하고 선택한 메모를 토대로 다양한 플롯 생성을 제공합니다. 또한 AI 편집 기능을 통해 문장을 다듬고 완성도 있는 웹소설로 발전시킬 수 있습니다. 사용자는 창작 과정의 부담을 줄이고 보다 쉽고 즐겁게 글쓰기를 이어갈 수 있습니다.","videoId":1126680452},{"members":[90],"category":"c0","projectNum":21,"titleKor":"스노모","titleEng":"SNOMO","description":"SNOMO는 겨울철 빈번히 발생하는 비닐하우스 피해를 예방하기 위해서 적설량을 자동 감지해 눈을 제거하는 비닐하우스 전용 제설 로봇입니다. 이를 통해 고령화된 농촌의 인력 소모를 줄이고, 농작물 피해와 복구 비용을 줄일 수 있습니다. 더 나아가 현재뿐만 아니라 미래에 이상 기후로 인하여 더욱 잦고 심각해질 피해에 대응하기 위해서도 필요한 제품입니다.","videoId":1127827337},{"members":[94],"category":"c0","projectNum":22,"titleKor":"초보디자이너들을 위한 실전형 학습 UX/UI 챌린지","titleEng":"RE:CHAL","description":"AI를 활용해 실제 사용자 리뷰를 분석하고, 초보 UX/UI 디자이너가 실무 감각을 기를 수 있는 과제를 자동 생성하는 학습 도구입니다. 데이터 기반의 UX 과제를 통해 사용자는 문제 해결 중심의 사고를 훈련하고, 사용자 경험을 분석하는 능력을 자연스럽게 향상시킬 수 있습니다.","videoId":1127540743},{"members":[99],"category":"c0","projectNum":23,"titleKor":"파미","titleEng":"FARMIE","description":"FARMIE는 농업 인구 감소와 고령화에 대응하여 개발된 스마트 작물보호제 살포 로봇입니다. FARMIE 실시간으로 작물 상태와 병해충을 모니터링하여 최적의 작업 경로를 자동으로 계획/실행합니다. 수집된 데이터 분석을 통해 효과적인 방제 전략을 수립하여 농작업의 효율성, 정밀도 및 효과를 크게 향상시키고 작업자의 부담을 줄이는 것을 목표로 합니다","videoId":1127428419},{"members":[3],"category":"c1","projectNum":24,"titleKor":"심부름 탐험","titleEng":"ERRAND ADVENTURE","description":"어린이의 건강한 성장과정을 위해서는 책임감과 자립심을 기르는 것이 매우 중요합니다. 이때, 심부름이 좋은 효과를 가져다주지만 아이들은 심부름 과정을 귀찮고 지루하게 여기는 경향이 있습니다. 이러한 문제를 해결하기 위해 아이들이 캐릭터와 함께 상호작용하며 놀이처럼 즐길 수 있는 탐험 컨셉의 어린이용 심부름 서비스 제작하였습니다.","videoId":1127852716},{"members":[69,49],"category":"c1","projectNum":25,"titleKor":"모티","titleEng":"MOTI","description":"MOTI는 앞날의 불확실성에 불안을 느끼는 청소년들을 위해 버킷리스트라는 목표를 세우며 보다 현실적으로 꿈에 다가갈 수 있도록 유도하는 청소년 자아실현 가이드 플랫폼입니다. 우리는 사용자의 흥미와 관심사를 바탕으로 새로운 도전과제를 제시하고, 그에 어울리는 리워드를 제시함으로써 청소년들의 끊임없는 탐구심을 이끌어냅니다.","videoId":1127523874},{"members":[6,2],"category":"c2","projectNum":26,"titleKor":"해빗","titleEng":"HAVIT","description":"HAVIT은 건강과 만족 사이에서 자신만의 균형을 찾고자 하는 이들을 위한 스마트 도시락 및 식단 관리 서비스입니다. 급격한 생활 양식의 변화와 기술 발전으로 젊은 세대의 가속 노화가 두드러진 현시점, HAVIT은 즐거움을 더한 지속 가능한 건강 관리, 즉 헬시 플레저를 추구하는 이들에게 개인화된 루틴을 통한 새로운 경험을 제안합니다.","videoId":"1127431236?h=239d5ba621"},{"members":[4,34],"category":"c2","projectNum":27,"titleKor":"3D 필드 성장형 러닝서비스","titleEng":"COAK","description":"COAK은 러닝 기록을 특별한 경험으로 바꾸어 동기부여하는 서비스입니다. \\n사용자가 달린 러닝 루트를 시각화 하고 3D 필드로 생성합니다.\\n같은 루트를 반복해 달릴수록 필드의 자연 요소가 점차 성장합니다. \\n크루와 함께한 기록은 모여 하나의 숲을 이루며, 새로운 방식의 러닝 경험을 통해 지속적인 동기를 제공합니다.","videoId":1127539956},{"members":[45,19],"category":"c2","projectNum":28,"titleKor":"감정을 머물러 바라볼 수 있는 감정 기록 앱","titleEng":"Feeltr","description":"Feeltr는 감각 자극(온도, 밝기, 촉각, 청각)을 기반으로 감정을 비유하고 세부 감정을 선택해 모호한 감정을 인식하도록 돕습니다. 이후 감정이 발생한 상황과 반응을 일기로 정리하고, 개인 맞춤형 케어를 제안합니다. 감정 기록은 감정 카드로 생성되어 달력에 저장되며,  감정 변화 흐름을 직관적으로 확인하고 자기 이해와 정서 회복력을 높일 수 있습니다.","videoId":1127177184},{"members":[29],"category":"c2","projectNum":29,"titleKor":"애니키트","titleEng":"ANIKIT","description":"ANIKIT은 ‘animal’의 ‘ani’와 ‘kit’의 합성어로, 동물처럼 친근하면서 언제 어디서나 사용할 수 있는 의료 키트입니다. 차가운 의료기기의 이미지를 벗어나 아이들에게 따뜻함과 안정감을 전하며, 동물을 모티브로 한 디자인으로 자연스럽게 다가갑니다. 학교나 집 등 어디서든 아이가 스스로 건강을 관리할 수 있도록 돕는 동반자 같은 키트입니다.","videoId":1126266309},{"members":[35],"category":"c2","projectNum":30,"titleKor":"액토","titleEng":"ACTO","description":"ACTO는 식단 제안형 냉장고와 이동형 모듈 냉장고, 두 본체로 구성됩니다.\\n이동형 모듈 냉장고는 부재 중 신선식품을 대신 수령·보관하며,\\n식단 제안형 냉장고는 스마트 워치 태그 기반으로 맞춤형 식단을 제공합니다.\\n두 냉장고의 연동을 통해 ACTO는 사용자의 식습관을 분석하고,\\n건강한 생활 패턴을 관리하는 냉장고입니다.","videoId":1126763958},{"members":[57,58],"category":"c2","projectNum":31,"titleKor":"스마트 비대면 외래진료 의료기","titleEng":"VITALL^NK","description":"VitalL^nk는 의료 사각지대에 놓인 노인 환자들을 대상으로, 병원 방문 없이도 주요 건강 검진을 스스로 수행할 수 있도록 돕는 의료기기입니다. 단순한 검사 기능과 원격 진료 연결을 제공합니다. 기본적인 체온 검사는 물론, 혈당과 혈압, 심전도 측정, 손목 골밀도 검사, 초음파 검사를 통해 노인성 질환의 주요 지표도 빠르게 확인할 수 있습니다.","videoId":1126436227},{"members":[61],"category":"c2","projectNum":32,"titleKor":"소형 반려견 전용 AED 내장 산책 리드줄","titleEng":"DOG AED LEASH","description":"반려견과 함께 걷는 시간은 언제나 즐겁지만 갑작스러운 위험이 찾아올\\n수도 있습니다. 특히 소형견은 심정지 시 몇 분 안에 대응하지 못하면 큰\\n위험에 놓일 수 있습니다. 이 리드줄은 그런 순간을 대비하여 반려견 전\\n용 AED 기능을 함께 담았습니다. 평소에는 가볍게 사용할 수 있는 리드\\n줄이지만, 필요할 때는 구조 도구가 됩니다.","videoId":1127407103},{"members":[91],"category":"c2","projectNum":33,"titleKor":"메디메이트","titleEng":"MEDIMATE","description":"고령화와 의학 발전으로 현대인들은 의약품을 손쉽게 접하게 되었지만, 그만큼 방치되거나 잘못 폐기되는 의약품 또한 증가하고 있으며, 이들은 수질 오염 및 생태계 교란을 유발하게 됩니다. 따라서 사용자가 약을 안전하게 관리하고 폐기까지 책임질 수 있도록 돕는 서비스, 메디메이트를 제작했습니다. 이는 건강한 생활 습관과 지속 가능한 환경 보호에 기여할 것입니다.","videoId":1127528036},{"members":[10],"category":"c3","projectNum":34,"titleKor":"마리스","titleEng":"MARIS","description":"Maris는 선박 하부에 부착되는 따개비를 효과적으로 제거하기 위해 설계된 자율 주행 수중 로봇입니다. 라틴어로 ‘바다의, 바다를’이라는 뜻을 담은 이름처럼, 해양 환경에서 최적의 성능을 발휘하도록 제작되었습니다. 8개의 고성능 프로펠러가 탑재되어 수중에서도 안정적이고 자유로운 기동이 가능하며, 정밀한 제어를 통해 선박 하부 구역을 빈틈없이 관리할 수 있습니다. 또한 따개비 제거 장치에는 스크래퍼와 브러시가 각각 모듈화되어 있어, 스크래퍼의 날이 무뎌지거나 브러시가 손상될 경우 손쉽게 교체할 수 있습니다. 이를 통해 유지보수가 간단하고, 장기간 안정적인 성능을 보장하며, 효율적인 선체 관리로 연료 절감과 친환경 운항을 돕는 혁신적인 솔루션입니다.","videoId":1127467906},{"members":[64,20],"category":"c3","projectNum":35,"titleKor":"ESG 부산 - 스테이션","titleEng":"ESG BUSAN - STATION","description":"ESG 부산'은 부산 주요 관광지에 설치된 ESG 체험 플랫폼으로, 투명 OLED 패널, 업사이클링 키링 자판기, 플로깅 도구 대여 부스로 구성됩니다. 관광객들은 도시를 탐험하는 동안 쓰레기를 줍기 위한 집게를 대여하고, 상징적인 업사이클링 키링을 받을 수 있습니다. 이는 관광과 지속가능성의 접점을 제시하는 새로운 유형의 체험형 공공시설물입니다.","videoId":1127729155},{"members":[22],"category":"c3","projectNum":36,"titleKor":"씬킷","titleEng":"SYN:KET","description":"SYN:KET은 신디사이저, 샘플러, 비트메이커를 하나로 담은 휴대용 그루브 박스입니다.\\n사용자는 8개의 터치패드와 원형 인터페이스를 통해 리듬을 손끝으로 느끼고 조형하며,\\n음악을 ‘만드는 행위’ 에서 ‘소리를 다루는 경험’ 으로 확장된 새로운 창작의 감각을 얻게 됩니다.","videoId":1127471421},{"members":[25],"category":"c3","projectNum":37,"titleKor":"페이스:디","titleEng":"FACE:D","description":"FACE:D는 iPhone의 Face ID와 ARKit52 기술을 활용하여 사용자의 표정을 실시간으로 인식하고, 52개의 BlendShape 데이터를 기반으로 감정을 분석한다. 분석된 감정은 Unity로 제작된 상담 시뮬레이션 콘텐츠에 반영되어, 사용자의 표정에 따라 내담자의 감정 수치가 변화한다. 감정 데이터 기반의 새로운 인터랙티브 경험을 제공한다.","videoId":1127322837},{"members":[27],"category":"c3","projectNum":38,"titleKor":"모온","titleEng":"MO-ON","description":"‘모으다’와 ‘ON’의 MO-ON(모온)은 멀티모달 AI의 강력한 생성 능력을 하나의 웨어러블에 담아 현실과 가상을 넘나들며 자유롭고 직관적인 창작 경험을 제공합니다. 이로써 개개인의 창의성과 개성을 존중하는 창작자 중심의 궁극적인 AI 글래스로 완성됩니다.","videoId":1127476055},{"members":[48,51],"category":"c3","projectNum":39,"titleKor":"AI 기반 모의 인터뷰 서비스","titleEng":"PRETALK","description":"PRETALK은 인터뷰 진행자가 더 나은 사용자 경험(UX)과 깊이 있는 인사이트를 도출할 수 있도록 돕는 인터뷰 연습 서비스입니다.\\n가상의 퍼소나와 실전처럼 인터뷰를 연습하면서 질문 설계, 흐름 관리, 응답 분석까지 체계적으로 준비할 수 있으며, 실제 상황에 가까운 시뮬레이션을 통해 인터뷰 역량을 강화할 수 있습니다.","videoId":1126830637},{"members":[53],"category":"c3","projectNum":40,"titleKor":"투미","titleEng":"TO.ME","description":"to.me는 사용자의 감정과 목소리를 기반으로 스스로에게 피드백을 제공하는 일정 관리 서비스입니다.\\nAI가 사용자의 음성과 대화 스타일을 학습해, 일정 전 나의 목소리로 맞춤형 알림을 전달함으로써\\n정서적 몰입과 자기동기화를 돕는 새로운 자기조절 경험을 제공합니다.","videoId":1127548024},{"members":[67],"category":"c3","projectNum":41,"titleKor":"스트릭스","titleEng":"STRIX","description":"야간에 발생하는 조난사고는 제한된 장비와 시야 때문에 구조 시간이 지연되고, 구조대원과 조난당한 등산객 모두에게 큰 위험으로 이어집니다. 이러한 문제를 해결하기 위해 개발된 스마트 AR 헬멧 STRIX는 실시간 정보를 제공함으로써 구조대원의 판단을 지원하고, 구조 효율성과 안정성을 동시에 향상시켜 야간 구조 활동의 새로운 가능성을 제시합니다.","videoId":1127434135},{"members":[78],"category":"c3","projectNum":42,"titleKor":"ESG 부산 - 앱","titleEng":"ESG BUSAN - APP","description":"ESG 앱은 관광객이 부산 명소를 즐기며 자연스럽게 환경 활동에 참여할 수 있는 서비스입니다. ESG 스테이션에서 플로깅 도구를 대여해 미션을 수행하고, 완료 시 관광지 키링을 리워드로 받을 수 있습니다. 전 과정은 앱과 연동되어 관광, 환경 활동, 보상까지 간편하게 체험할 수 있으며, 부산의 지속가능한 가치를 전합니다.","videoId":1127754084},{"members":[92],"category":"c3","projectNum":43,"titleKor":"소프티 엔 하디","titleEng":"SOFTY & HARDY","description":"현재 존재하는 VR  콘서트는 시각과 청각에만 의존하여, 관객은 무대와 깊이 교류하지 못하고 단순한 관람에 머무르게 됩니다. 이 문제를 해결하기 위해 촉각을 더한 새로운 인터랙션을 제안합니다. 본 제품인 HARDY & SOFTY 는 무대와 관객을 이어주는 감각적인 다리 역할을 하며, 이를 통해 관객은 단순한 관람자가 아닌 참여자가 됩니다.","videoId":1127445758},{"members":[95],"category":"c3","projectNum":44,"titleKor":"포잉!","titleEng":"POING!","description":"POING!은 반려동물의 생체 신호와 행동 데이터를 기반으로, 홈캠 공간 속에서 살아 있는 듯한 디지털 반려동물을 구현합니다. 반려동물의 실제 데이터를 바탕으로 특정 상황의 행동을 재현합니다. 사용자는 반려동물의 고유한 특성과 행동 데이터를 '디지털 유산'으로 보존하여, 고유한 행동들을 생생하게 다시 경험할 수 있습니다.","videoId":1127520805},{"members":[32,0],"category":"c4","projectNum":45,"titleKor":"소-다방","titleEng":"SO-DABANG","description":"내 손 안의 작은 다방, 소-다방. 어플리케이션 속 DJ와 소통하며 음악을 감상해보세요. 그 시절 다방처럼 DJ에게 원하는 노래를 신청할 수 있습니다. 블루투스 스피커와 함께 사용하여 더 특별한 경험을 만끽하세요.","videoId":1127750387},{"members":[7],"category":"c4","projectNum":46,"titleKor":"집쿡타임","titleEng":"JipCook Time","description":"‘집쿡타임’은 집에 있는 식재료를 기반으로 맞춤형 레시피를 추천하는 서비스입니다. 사용자는 카메라 인식이나 직접 입력으로 식재료를 등록하고, 유통기한 관리도 가능합니다. 이후 조리 시간·맛·요리 종류 등 필터를 통해 원하는 조건의 레시피를 탐색할 수 있으며, GPT API를 활용한 AI가 재료에 맞춘 레시피를 자동 추천합니다. 추천된 레시피는 수정·공유가 가능해 사용자만의 커스텀 레시피로 확장됩니다.","videoId":1127762035},{"members":[11],"category":"c4","projectNum":47,"titleKor":"아쿠아링크","titleEng":"AQUALINK","description":"기존의 제습기는 실내 습도를 조절해 쾌적한 환경을 조성하지만, 이 과정에서 수집된 물은 대부분 활용하지 못한 채 버려집니다. Aqualink는 물을 버리지 않고, 재사용 가능한 자원으로 전환하여 식물 재배에 활용하는 순환형 시스템을 제안합니다. 이를 통해 자원의 활용도를 높이며 환경적 가치와 실용성을 동시에 구현합니다.","videoId":1126379564},{"members":[12],"category":"c4","projectNum":48,"titleKor":"센소","titleEng":"SENSO","description":"SEnSO는 확장현실(XR) 콘텐츠를 체험할 수 있도록 설계된 몰입형 다감각 스피커입니다. XR 환경 속 공연 콘텐츠와 연동되어 단순한 사운드 출력이 아닌, 자동 리프트, 조명 연출, 실제 바람 분사 등 다양한 감각 자극을 통합 제공합니다. 사용자는 콘텐츠 속 위치와 관계없이, 조명과 바람을 통해 몰입의 중심에 있는 듯한 경험을 할 수 있습니다.","videoId":1127519416},{"members":[13],"category":"c4","projectNum":49,"titleKor":"재료 교체로 레시피를 바꾸는 요리 플랫폼","titleEng":"REMIK","description":"레믹은 레시피를 바꿀 수 있는 요리 동영상 플랫폼입니다. 알레르기• 종교• 채식주의 • 개인 선호 등 다양한 이유로 특정 식재료를 먹지 못하는 인구가 증가하고 있습니다. 이를 바탕으로, 레믹은 재료를 변경하여 레시피를 새롭게 재생성합니다. 이 과정에서 사용자는 요리를 더욱 다양하고 창의적으로 접근 할 수 있습니다.","videoId":1127828070},{"members":[15],"category":"c4","projectNum":50,"titleKor":"감성 기반 소비 기록 서비스","titleEng":"LEAF NOTE","description":"Leaf Note는 소비를 단순한 수치가 아닌 나뭇잎과 캐릭터라는 감성적 요소로 표현하는 새로운 형태의 가계부입니다. 매일의 소비가 입력될 때마다 하나의 나뭇잎으로 시각화되어 차곡차곡 쌓이고, 항목별 소비는 개성 있는 캐릭터로 나타나 사용자가 친근하게 자신의 소비 패턴을 이해하도록 돕습니다. 숫자 중심의 기록이 아닌 시각적 변화를 통해, 소비에 담긴 감정과 태도를 자연스럽게 인식하게 합니다.","videoId":"1128686899"},{"members":[17],"category":"c4","projectNum":51,"titleKor":"테트링","titleEng":"TETLINK","description":"테트링은 쌓지 않는 정보 아카이브 서비스입니다. 기존 서비스가 정보를 보관하는 데 목적을 두었다면, 테트링은 이후 정보를 소비하는 것에 초점을 맞춥니다. 사용자가 저장한 정보를 블록형 게임의 블록처럼 시각화해 효과적인 소비를 유도하고, 그 과정에서 사용자는 아카이브를 비워내는 새로운 경험을 즐길 수 있습니다.","videoId":1126373064},{"members":[31],"category":"c4","projectNum":52,"titleKor":"클러버스","titleEng":"CLUB EARTH","description":"클러버스는 패션 업사이클링 스타터를 위해 소장 중인 의류로 새활용을 할 수 있도록 돕는 Up It Yourself! KIT와 온라인 서비스를 제공합니다. 실패에 대한 부담 없이 초보자도 쉽게 제작할 수 있는 도구와 도안, 튜토리얼 영상, 온라인 매뉴얼 등 다양한 가이드를 통해 업사이클링의 장벽을 낮추고, 지속 가능한 패션 문화를 함께 만들어가고자 합니다.","videoId":1127302808},{"members":[38,85],"category":"c4","projectNum":53,"titleKor":"공동체 생활에서의 물 절약 시스템","titleEng":"AQUA-SAVE","description":"AQUA-SAVE'는 일상 속 과도한 물 소비 문제를 해결하기 위해 개발된 스마트 절수 시스템입니다. 수전 디스플레이를 통해 실시간 물 사용량, 온도, 사용시간을 확인할 수 있으며, 애플리케이션을 통해 개인 및 공동체별 데이터를 분석하고 절수 미션을 제공합니다. 미션 달성 시 리워드가 제공되며, 이는 공동체의 효율적인 물 사용 습관 형성에 기여합니다.","videoId":1127099717},{"members":[40],"category":"c4","projectNum":54,"titleKor":"한번쯤 망해봐도 괜찮은 인생 게임","titleEng":"내가 뭘 잘못했는데요?","description":"사람은 자신이 하고 싶은 것을 할 때 가장 빛난다.\\n그러나 현실은 빠른 속도와 정해진 답을 끊임없이 요구합니다. 많은 사람들이 중요한 진로와 직업의 갈림길 앞에서 깊은 혼란을 겪습니다. 본 프로젝트는 그러한 상황에서 다양한 선택을 시뮬레이션할 수 있게 하여 각자의 리듬과 가능성을 온전히 존중하고자 하는 의도에서 만들어졌습니다.","videoId":"-"},{"members":[44],"category":"c4","projectNum":55,"titleKor":"사용자 경험 기반 디지털 아카이브","titleEng":"Ever Archive","description":"현대인의 디지털 라이프 속에서 기억은 쉽게 저장되지만, 그 안에 담긴 감정은 점차 흐려집니다. \\nEver Archive는 이런 감정의 흔적을 몰입감 있는 경험으로 보존할 수 있도록 설계되었습니다. \\n기억은 사라지는 것이 아니라, 형태를 바꿔 마음에 남는 것, 디자인을 통해 그 형태를 만들어주고 싶었습니다.\\n사람의 마음과 감정을 다루는 디자인을 지향합니다.","videoId":1127045458},{"members":[46],"category":"c4","projectNum":56,"titleKor":"모듈형 침구 UV 살균 로봇 청소기","titleEng":"NOVIX","description":"NOVIX는 침구 UV 살균 로봇 청소기로 모듈형 로봇기기와 본체 로봇청소기 2개로 이루어져있습니다. 본체는 가정집의 먼지청소를 먼저 이행하고 사용자가 침구위에서 모듈형 로봇을 작동시키면 상단의 360°센서 기반으로 자율 주행하며 침구 위를 이동하면서 보이지 않는 진드기와 유해 입자를 효과적으로 제거하는 UV 살균이 가능합니다.","videoId":1126569569},{"members":[55,65],"category":"c4","projectNum":57,"titleKor":"모담이","titleEng":"MODAMI","description":"시니어를 위한 AI 자서전 서비스 '모담이'는 AI 아바타 '담이'와의 대화를 통해 당신의 삶을 기록합니다. \\n키보드 없이 터치와 음성으로 세상에 단 하나뿐인 나만의 특별한 자서전이 완성됩니다.","videoId":1127565627},{"members":[56],"category":"c4","projectNum":58,"titleKor":"소설 창작을 위한 협업 커뮤니티 플랫폼","titleEng":"CREWE","description":"Crewe는 하나의 아이디어에서 여러 사람이 의견을 더해 이야기를 완성하는 협업형 창작 플랫폼입니다. 하나의 소재에서 다양한 전개가 만들어지며, 함께 이야기를 확장해가는 집단 창작의 즐거움을 제공합니다.","videoId":1127471110},{"members":[63],"category":"c4","projectNum":59,"titleKor":"유아 정서 발달 자연 친화 자동화 화분","titleEng":"REONA","description":"REONA는 자연의 흐름을 형상화한 클라우드 형태의 스마트 화분으로 디지털 디스플레이와 직관적인 형태 변화를 통해 날씨와 급수 필요성을 전달합니다. 하단부의 물을 워터펌프를 통해 끌어올려 상단 구름 부분에서 빗방울처럼 떨어뜨림으로써 식물이 자라는 자연의 환경을 실내에서 경험할 수 있도록 재현한 제품입니다.","videoId":"-"},{"members":[77],"category":"c4","projectNum":60,"titleKor":"노트모","titleEng":"NOTEMO","description":"notemo'는 사용자가 겪고 있는 정신적인 어려움을 완화할 수 있는 감정 습관 어플입니다. 하루에 한 번 짧고 직관적인 질문에 대답하며 감정에 솔직해지는 법을 배우고, '마음 기록장'과 '마음 정원' 을 통해 이를 쉽고 재미있게 확인할 수 있습니다. 또한, '마음 살펴보기' 를 통해 특정 심리 영역을 탐색할 수 있습니다.","videoId":1127447000},{"members":[83],"category":"c4","projectNum":61,"titleKor":"리:미스트","titleEng":"RE:MIST","description":"RE:MIST는 사용자가 향을 원하는 대로 조합해 사용하는 모듈형 충전식 스프레이다. 재사용 가능한 구조와 진공 시스템으로 플라스틱과 유해 가스 사용을 줄이며, 분사량·향·기능을 세밀하게 조절할 수 있어 개인 맞춤형 경험을 제공한다. 환경 보호, 경제성, 창의적 사용성을 모두 갖춘 지속 가능한 라이프스타일 제품이다.","videoId":1127188689},{"members":[84],"category":"c4","projectNum":62,"titleKor":"경험소비 기반 햄버거 커스터마이징 어플","titleEng":"BURGIT","description":"Z세대는 전세계 인구의 25%를 차지하며 역대 최대 규모의 소비력을 갖춘 세대가 될 것으로 예측됩니다. 이들에게 중요한 것은 직접 개입한 생산형 경험과 자기표현을 할 수 있는 콘텐츠입니다. 해당 어플은 사용자가 인터랙티브 요소를 통해 햄버거 재료를 직접 선택하고 제조할 수 있도록 하는 경험 소비 기반 햄버거 커스터마이징 어플리케이션입니다.","videoId":1126413536},{"members":[89],"category":"c4","projectNum":63,"titleKor":"엔코","titleEng":"ENCO","description":"밀키트의 복잡한 조리 과정을 디제잉의 감각적인 퍼포먼스로 재해석합니다. DJ 컨트롤러에서 영감을 받은 다이얼과 레버, 행동을 유도하는 LED 인디케이터는 요리의 순서와 흐름을 직관적으로 안내합니다. 이를 통해 요리 과정을 하나의 퍼포먼스처럼 완성하는 새로운 경험을 제공하며 라이프스타일을 제안합니다.","videoId":1128232388},{"members":[93],"category":"c4","projectNum":64,"titleKor":"씨너리","titleEng":"SEENERY","description":"SEENERY는 '나(seen)'와 '여행의 풍경(scenery)'을 연결해 1인 여행자에게 새로운 기록 방식을 제안하는 휴대용 자동 촬영 드론입니다. 사용자는 제품을 비틀어 Boomerang, Sky, Surround, Follow 중 원하는 4가지 모드를 선택 후 공중에 띄웁니다. 제품은 피사체 및 환경 인식, 구도, 색감, 플래시 자동 조절로 최적의 촬영을 제공합니다. 듀얼 프로펠러와 고효율 배터리로 안정적이며, 작고 가벼워 휴대가 용이합니다. 단순한 '띄우는 동작'만으로 나와 풍경을 함께 담아 특별한 순간을 완성합니다.","videoId":"1127472732"},{"members":[97],"category":"c4","projectNum":65,"titleKor":"감정 시각화 표현 치료 장치","titleEng":"VI-MO","description":"‘VI-mo’는 사용자로 하여금 자신의 감정을 외부 시점에서 시각적으로 인식하게 하여 감정의 정리와 자기 이해를 돕는 제품입니다. 감정을 말로 꺼내고 물리적 형태로 마주하는 경험은 심리적 위안과 정서적 회복을 유도하며, 감정을 억누르기보다 자연스럽게 흐르게 하는 감정 순환의 장치를 제공합니다.","videoId":"1128446266"},{"members":[5,47],"category":"c5","projectNum":66,"titleKor":"폴라리스","titleEng":"POLARIS","description":"극한 환경에서도 자유롭게 이동하며 탐사 목적에 따라 모듈을 교체할 수 있는 극지 탐사 모빌리티로, 드론과 연동해 지형과 위험 요소를 실시간으로 스캔하고 다양한 임무를 효율적이고 안전하게 수행하며, 기후 변화 분석, 자원 탐사, 생태 조사, 야간 관측과 긴급 구조까지 동시에 수행하며 극한 환경 탐사의 새로운 기준과 가능성을 보여준다.","videoId":1128433794},{"members":[8,70],"category":"c5","projectNum":67,"titleKor":"파빅스","titleEng":"PAVIX","description":"드론이 포트홀을 스캔하면 무인 모빌리티가 자동으로 이동해 보수를 수행하는 시스템입니다. TBM 공법을 적용해 절삭·청소·접착을 일체화했으며, 프리캐스트 임플란트 공법을 통해 경화 시간을 단축해 신속한 도로 개방이 가능합니다. 다관절 다리로 정밀한 작업이 가능하며, 드론이 프리캐스트를 카트리지 형태로 전달합니다.","videoId":1127509590},{"members":[79,9],"category":"c5","projectNum":68,"titleKor":"감정기반 맞춤형 활동 추천 모빌리티 서비스","titleEng":"FLOV","description":"FLOV는 인공지능이 개인의 성향과 상황을 분석해 맞춤형 정보를 제공하는 시대에 주목합니다. 기술의 고도화로 사회적 유대가 약화되고 감정적 교류가 줄어든 미래 환경에서 해소되지 못한 감정을 지닌 개인에게 감정에 적합한 활동과 장소를 추천하고, 그 목적에 최적화된 모듈형 모빌리티를 통해 새로운 감정 해소 경험을 제공합니다.","videoId":1127816861},{"members":[14],"category":"c5","projectNum":69,"titleKor":"지구와 우주를 연결하는 차세대 모빌리티 시스템","titleEng":"KAIROS","description":"KAIROS'는 지구와 우주 간 연속된 이동 경험을 제공하는 차세대 모빌리티 시스템입니다. 출발지부터 목적지까지 단일 공간에서 이동하며 새로운 라이프스타일을 누릴 수 있습니다. 직선과 평면 중심의 클래식카 감성과 미래지향적 조형성의 조화를 이루며 기능성과 감성을 동시에 아우르는 차세대 모빌리티입니다.","videoId":1128367659},{"members":[21,26],"category":"c5","projectNum":70,"titleKor":"리프텐","titleEng":"RIFETEN","description":"도로 지면의 손상을 사전에 탐지하고, 발생될 포트홀을 예방하기 위해 개발된 자율주행 모빌리티입니다. 지면의 하부 약화를 감지하면 정지하여 드릴을 이용해 지면을 천공하고, 우레탄 폼과 레진을 주입하여 내부를 메우고 표면을 마감합니다. 드릴, 우레탄 및 레진 노즐은 하부에 배치되어 x축 트랙을 따라 정밀하게 이동하여 보수 대상 지점을 정교하게 작업합니다.","videoId":1127475114},{"members":[23,33],"category":"c5","projectNum":71,"titleKor":"레이온","titleEng":"RAYON","description":"RAYON은 복잡한 지하철 역사 환경에서 역무원이 신속하게 이동해 응급 상황에 1차적인 처치를 수행할 수 있도록 설계된 1인용 응급 구조 모빌리티입니다. 구급대가 도착하기 전까지의 결정적인 시간을 단축하기 위해 좁은 통로와 다층 구조에서도 안정적인 주행이 가능하며, 응급 장비 수납 모듈과 직관적인 조작 시스템을 갖추고 있습니다.","videoId":1127232925},{"members":[37],"category":"c5","projectNum":72,"titleKor":"휠로콥터","titleEng":"WHEELOCPCOTER","description":"WHEELCOPTER는 육상 주행과 비행이 모두 가능한 하이브리드 모빌리티로, 접근이 어려운 지역에서도 구조와 탐색을 수행할 수 있습니다. 바퀴를 프로펠러로 전환하는 구조로 효율성과 경제성을 높였으며, 재난 대응·군사 작전·보급 등 다양한 임무에 활용 가능합니다.","videoId":1127451104},{"members":[39],"category":"c5","projectNum":73,"titleKor":"포레스트","titleEng":"FOR:EST","description":"PBV 플랫폼을 기반으로 시니어의 이동과 휴식을 고려한 맞춤형 인테리어 솔루션을 제안한다. 라운지 체어형 무중력 카시트와 모듈 교체 구조를 통해 반려견용·테이블용 옵션을 제공하며, 회전 플레이트로 이동·정차·산책 시나리오에 맞춰 공간을 전환해 액티브 시니어의 안전하고 편안한 아웃도어 라이프를 지원한다.","videoId":1126626799},{"members":[62],"category":"c5","projectNum":74,"titleKor":"하우릭스","titleEng":"HAULIX","description":"HAULIX는 도시와 농촌 모두를 아우르는 차세대 모듈형 전동 바이크입니다. 이동성과 적재 능력을 동시에 갖춘 이 제품은, 후방에 다양한 모듈을 탈부착하여 사용자 맞춤형 구성이 가능합니다. 또한 GPS 기록, 직관적인 디스플레이, 접이식 안장 등 고령자를 배려한 세심한 기능도 탑재되어 있어 일상 이동의 부담을 줄여줍니다.","videoId":1127497630},{"members":[74,98],"category":"c5","projectNum":75,"titleKor":"퀀타엑스","titleEng":"QUANTA-X","description":"연기 감지 센서가 화재를 탐지하면 드론이 자동으로 출동해 화재 지점에 소화볼을 투하하고 초기 진화를 수행합니다. 조기 감지와 신속한 대응을 통해 산불 확산을 방지하며 산림 자원과 생태계를 보호하고, 공공기관과 민간 분야로의 활용 가능성이 높습니다.","videoId":1127242698},{"members":[80],"category":"c5","projectNum":76,"titleKor":"투위","titleEng":"TOWEE","description":"TOWEE는 트랜스윙 시스템을 탑재한 eVTOL 차량 견인 모빌리티입니다.","videoId":1127231053}]`),Y1=40;function q2(n){if(!n)return n;const t="/";if(/^https?:\/\//i.test(n))return n;const i=n.replace(/^\.\.\//,"").replace(/^\//,"");return t+i}const IR={c0:"A",c1:"E",c2:"H",c3:"I",c4:"L",c5:"M"},Q1=["전체","산업디자인공학","미디어디자인공학"],CR={산업디자인공학:0,미디어디자인공학:1},X1=n=>n==="IND"||n===0||n==="0"?0:n==="MED"||n===1||n==="1"?1:n,jp=lg,kl=RR,jR=S.div`
  position: relative; background: #fff;
`,DR=S.div`
  padding-left: ${Y1}px; padding-right: ${Y1}px; display: flex; flex-direction: column;
  @media (max-width: 640px) {
    padding-left: 16px;
    padding-right: 16px;  
 }
`;function NR({children:n}){return y.jsx(jR,{children:y.jsx(DR,{children:n})})}const MR=S.div`
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
`,OR=S.div`
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
`,kR=S.div`
  text-decoration: none; cursor: pointer;
`,VR=S.div`position: relative;`;function PR({people:n}){const t=Fh();return y.jsx(MR,{children:n.map((i,a)=>{const o=i.id??i.studentId??`${i.nameKor}-${a}`,u=typeof i.projectNum=="number"&&i.category,d=u?i.projectNum+1:null,p=u?`${IR[i.category]||"A"}${String(d).padStart(3,"0")}`:null,m=y.jsx(rg,{nameKor:i.nameKor,nameEng:i.nameEng,role:i.role,sns:i.sns||"-",eMail:i.eMail,imgSrc:q2(i.imgUrl),imgAlt:`${i.nameKor} profile`},o);return u?y.jsx(kR,{role:"link",tabIndex:0,onClick:()=>t(`/work/${p}`),onKeyDown:g=>{(g.key==="Enter"||g.key===" ")&&t(`/work/${p}`)},"aria-label":`${i.nameKor} 작품 보기 (${p})`,children:m},`link-${o}`):m})})}function UR(){const[n,t]=bt.useState(!1),[i,a]=bt.useState(Q1[0]),o=bt.useMemo(()=>{const p=new Map;return(eu||[]).forEach(m=>{(m.members||[]).forEach(g=>{p.has(g)||p.set(g,m)})}),p},[]);bt.useEffect(()=>{a(n?kl[0]?.id||"":Q1[0])},[n]);const u=bt.useMemo(()=>{if(!n){if(i==="전체")return jp;let m=CR[i];return m===void 0&&(m=X1(i)),jp.filter(g=>X1(g.department)===m)}const p=kl.some(m=>m.id===i)?i:kl.find(m=>m.nameKor===i)?.id||"";return jp.filter(m=>m.professorId===p).map(m=>{let g=o.get(m.num);g||(g=(eu||[]).find(E=>E.category===m.category&&E.projectNum===m.projectNum)||null);const v=g?`/projects/${g.projectNum}/thumb.jpg`:"/thumbnailExample.png";return{...m,imgUrl:v}})},[i,n,o]),d=bt.useMemo(()=>n&&(kl.find(m=>m.id===i)||kl.find(m=>m.nameKor===i))||null,[n,i]);return y.jsxs(VR,{children:[y.jsx(OR,{children:"Peoples"}),y.jsx(H2,{type:"people",onCategoryChange:a,onToggleChange:t}),y.jsxs(NR,{children:[n&&d&&y.jsx(og,{nameKor:d.nameKor,rank:d.rank||"교수",eMail:d.email,education:d.education,field:d.field,imgSrc:q2(d.imgUrl),imgAlt:`${d.nameKor} profile`}),y.jsx(PR,{people:u})]})]})}const W1=S.div`
  @media (max-width: 393px) {
    --s: clamp(0.82, calc(100vw / 393), 1);

    transform: scale(var(--s));
    transform-origin: top left;

    width: calc(173px * var(--s));
    height: calc(151px * var(--s));
  }
`,zR=S.div`
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
`,Z1=S.div`
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
`,LR=S.div`
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
`,$R=S.img`
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
`,BR=S.div`
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
`,FR=S.div`
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
`,KR=S.p`
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
`,HR=S.p`
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
`,qR=S.div`
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
`,GR=S.div`
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
`,YR=S.p`
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
`,QR=S.div`
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
`,XR=S.img`
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
`,WR=S.div`
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
`,J1=S.div`
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
`,tv=S.div`
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
`,ev=S.p`
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
`;function nv(n){return typeof n=="number"&&n>999?"999+":n}function ug({titleKor:n,titleEng:t,nameKor:i,view:a,like:o,href:u,src:d,profileImgs:p,docId:m}){const g=typeof o=="number"?o:0,v=typeof a=="number"?a:0,E=V=>{const B=V.currentTarget.querySelector(".card-hover");B&&(B.style.opacity=1)},T=V=>{const B=V.currentTarget.querySelector(".card-hover");B&&(B.style.opacity=0)},A="/",M=/^https?:\/\//i.test(u),k=y.jsxs(y.Fragment,{children:[y.jsx(zR,{children:y.jsxs(LR,{onMouseEnter:E,onMouseLeave:T,children:[y.jsx(BR,{className:"card-hover",children:y.jsxs(FR,{children:[y.jsx(HR,{children:n}),y.jsx(KR,{children:t})]})}),y.jsx($R,{src:d,alt:"Project"})]})}),y.jsxs(qR,{children:[y.jsxs(GR,{children:[y.jsx(QR,{children:p.map((V,B)=>y.jsx(XR,{src:V,alt:`Profile${B+1}`,$z:3-B,$ml:B>0},B))}),y.jsx(YR,{children:i})]}),y.jsxs(WR,{children:[y.jsxs(J1,{children:[y.jsx(tv,{src:`${A}icons/likeIcon.svg`}),y.jsx(ev,{children:nv(g)||0})]}),y.jsxs(J1,{children:[y.jsx(tv,{src:`${A}icons/viewIcon.svg`}),y.jsx(ev,{children:nv(v)||0})]})]})]})]});return M?y.jsx(W1,{children:y.jsx(Z1,{as:"a",href:u,style:{textDecoration:"none"},children:k})}):y.jsx(W1,{children:y.jsx(Z1,{as:ts,to:u.startsWith("/")?u:`/${u}`,style:{textDecoration:"none"},children:k})})}ug.propTypes={titleKor:J.string.isRequired,titleEng:J.string.isRequired,nameKor:J.string.isRequired,view:J.number,like:J.number,src:J.string.isRequired,href:J.string.isRequired,profileImgs:J.arrayOf(J.string).isRequired,docId:J.oneOfType([J.string,J.number]),collection:J.string};ug.defaultProps={titleKor:"프로젝트 제목",titleEng:"Project Title",nameKor:"Author Name",view:0,like:0,collection:"works"};const ZR=()=>{};var iv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G2=function(n){const t=[];let i=0;for(let a=0;a<n.length;a++){let o=n.charCodeAt(a);o<128?t[i++]=o:o<2048?(t[i++]=o>>6|192,t[i++]=o&63|128):(o&64512)===55296&&a+1<n.length&&(n.charCodeAt(a+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++a)&1023),t[i++]=o>>18|240,t[i++]=o>>12&63|128,t[i++]=o>>6&63|128,t[i++]=o&63|128):(t[i++]=o>>12|224,t[i++]=o>>6&63|128,t[i++]=o&63|128)}return t},JR=function(n){const t=[];let i=0,a=0;for(;i<n.length;){const o=n[i++];if(o<128)t[a++]=String.fromCharCode(o);else if(o>191&&o<224){const u=n[i++];t[a++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=n[i++],d=n[i++],p=n[i++],m=((o&7)<<18|(u&63)<<12|(d&63)<<6|p&63)-65536;t[a++]=String.fromCharCode(55296+(m>>10)),t[a++]=String.fromCharCode(56320+(m&1023))}else{const u=n[i++],d=n[i++];t[a++]=String.fromCharCode((o&15)<<12|(u&63)<<6|d&63)}}return t.join("")},Y2={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let o=0;o<n.length;o+=3){const u=n[o],d=o+1<n.length,p=d?n[o+1]:0,m=o+2<n.length,g=m?n[o+2]:0,v=u>>2,E=(u&3)<<4|p>>4;let T=(p&15)<<2|g>>6,A=g&63;m||(A=64,d||(T=64)),a.push(i[v],i[E],i[T],i[A])}return a.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(G2(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):JR(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let o=0;o<n.length;){const u=i[n.charAt(o++)],p=o<n.length?i[n.charAt(o)]:0;++o;const g=o<n.length?i[n.charAt(o)]:64;++o;const E=o<n.length?i[n.charAt(o)]:64;if(++o,u==null||p==null||g==null||E==null)throw new t6;const T=u<<2|p>>4;if(a.push(T),g!==64){const A=p<<4&240|g>>2;if(a.push(A),E!==64){const M=g<<6&192|E;a.push(M)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class t6 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const e6=function(n){const t=G2(n);return Y2.encodeByteArray(t,!0)},Rh=function(n){return e6(n).replace(/\./g,"")},n6=function(n){try{return Y2.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function i6(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const r6=()=>i6().__FIREBASE_DEFAULTS__,a6=()=>{if(typeof process>"u"||typeof iv>"u")return;const n=iv.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},s6=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&n6(n[1]);return t&&JSON.parse(t)},cg=()=>{try{return ZR()||r6()||a6()||s6()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},o6=n=>cg()?.emulatorHosts?.[n],l6=n=>{const t=o6(n);if(!t)return;const i=t.lastIndexOf(":");if(i<=0||i+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const a=parseInt(t.substring(i+1),10);return t[0]==="["?[t.substring(1,i-1),a]:[t.substring(0,i),a]},Q2=()=>cg()?.config;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u6{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}wrapCallback(t){return(i,a)=>{i?this.reject(i):this.resolve(a),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(i):t(i,a))}}}/**
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
 */function hg(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function c6(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function h6(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},a=t||"demo-project",o=n.iat||0,u=n.sub||n.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d={iss:`https://securetoken.google.com/${a}`,aud:a,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Rh(JSON.stringify(i)),Rh(JSON.stringify(d)),""].join(".")}const Hl={};function d6(){const n={prod:[],emulator:[]};for(const t of Object.keys(Hl))Hl[t]?n.emulator.push(t):n.prod.push(t);return n}function f6(n){let t=document.getElementById(n),i=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),i=!0),{created:i,element:t}}let rv=!1;function p6(n,t){if(typeof window>"u"||typeof document>"u"||!hg(window.location.host)||Hl[n]===t||Hl[n]||rv)return;Hl[n]=t;function i(T){return`__firebase__banner__${T}`}const a="__firebase__banner",u=d6().prod.length>0;function d(){const T=document.getElementById(a);T&&T.remove()}function p(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function m(T,A){T.setAttribute("width","24"),T.setAttribute("id",A),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function g(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{rv=!0,d()},T}function v(T,A){T.setAttribute("id",A),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function E(){const T=f6(a),A=i("text"),M=document.getElementById(A)||document.createElement("span"),k=i("learnmore"),V=document.getElementById(k)||document.createElement("a"),B=i("preprendIcon"),q=document.getElementById(B)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const Z=T.element;p(Z),v(V,k);const lt=g();m(q,B),Z.append(q,M,V,lt),document.body.appendChild(Z)}u?(M.innerText="Preview backend disconnected.",q.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(q.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,M.innerText="Preview backend running in this workspace."),M.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m6(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function g6(){const n=cg()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function y6(){return!g6()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function x6(){try{return typeof indexedDB=="object"}catch{return!1}}function v6(){return new Promise((n,t)=>{try{let i=!0;const a="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(a);o.onsuccess=()=>{o.result.close(),i||self.indexedDB.deleteDatabase(a),n(!0)},o.onupgradeneeded=()=>{i=!1},o.onerror=()=>{t(o.error?.message||"")}}catch(i){t(i)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _6="FirebaseError";class Eo extends Error{constructor(t,i,a){super(i),this.code=t,this.customData=a,this.name=_6,Object.setPrototypeOf(this,Eo.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,X2.prototype.create)}}class X2{constructor(t,i,a){this.service=t,this.serviceName=i,this.errors=a}create(t,...i){const a=i[0]||{},o=`${this.service}/${t}`,u=this.errors[t],d=u?w6(u,a):"Error",p=`${this.serviceName}: ${d} (${o}).`;return new Eo(o,p,a)}}function w6(n,t){return n.replace(E6,(i,a)=>{const o=t[a];return o!=null?String(o):`<${a}?>`})}const E6=/\{\$([^}]+)}/g;function Ih(n,t){if(n===t)return!0;const i=Object.keys(n),a=Object.keys(t);for(const o of i){if(!a.includes(o))return!1;const u=n[o],d=t[o];if(av(u)&&av(d)){if(!Ih(u,d))return!1}else if(u!==d)return!1}for(const o of a)if(!i.includes(o))return!1;return!0}function av(n){return n!==null&&typeof n=="object"}/**
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
 */function ar(n){return n&&n._delegate?n._delegate:n}class nu{constructor(t,i,a){this.name=t,this.instanceFactory=i,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class b6{constructor(t,i){this.name=t,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const i=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(i)){const a=new u6;if(this.instancesDeferred.set(i,a),this.isInitialized(i)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:i});o&&a.resolve(o)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(t){const i=this.normalizeInstanceIdentifier(t?.identifier),a=t?.optional??!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(a)return null;throw o}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(S6(t))try{this.getOrInitializeService({instanceIdentifier:Ha})}catch{}for(const[i,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);try{const u=this.getOrInitializeService({instanceIdentifier:o});a.resolve(u)}catch{}}}}clearInstance(t=Ha){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...t.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ha){return this.instances.has(t)}getOptions(t=Ha){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:i={}}=t,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:a,options:i});for(const[u,d]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(u);a===p&&d.resolve(o)}return o}onInit(t,i){const a=this.normalizeInstanceIdentifier(i),o=this.onInitCallbacks.get(a)??new Set;o.add(t),this.onInitCallbacks.set(a,o);const u=this.instances.get(a);return u&&t(u,a),()=>{o.delete(t)}}invokeOnInitCallbacks(t,i){const a=this.onInitCallbacks.get(i);if(a)for(const o of a)try{o(t,i)}catch{}}getOrInitializeService({instanceIdentifier:t,options:i={}}){let a=this.instances.get(t);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:T6(t),options:i}),this.instances.set(t,a),this.instancesOptions.set(t,i),this.invokeOnInitCallbacks(a,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,a)}catch{}return a||null}normalizeInstanceIdentifier(t=Ha){return this.component?this.component.multipleInstances?t:Ha:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function T6(n){return n===Ha?void 0:n}function S6(n){return n.instantiationMode==="EAGER"}/**
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
 */class A6{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const i=this.getProvider(t.name);if(i.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);i.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const i=new b6(t,this);return this.providers.set(t,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bt;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Bt||(Bt={}));const R6={debug:Bt.DEBUG,verbose:Bt.VERBOSE,info:Bt.INFO,warn:Bt.WARN,error:Bt.ERROR,silent:Bt.SILENT},I6=Bt.INFO,C6={[Bt.DEBUG]:"log",[Bt.VERBOSE]:"log",[Bt.INFO]:"info",[Bt.WARN]:"warn",[Bt.ERROR]:"error"},j6=(n,t,...i)=>{if(t<n.logLevel)return;const a=new Date().toISOString(),o=C6[t];if(o)console[o](`[${a}]  ${n.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class W2{constructor(t){this.name=t,this._logLevel=I6,this._logHandler=j6,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Bt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?R6[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Bt.DEBUG,...t),this._logHandler(this,Bt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Bt.VERBOSE,...t),this._logHandler(this,Bt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Bt.INFO,...t),this._logHandler(this,Bt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Bt.WARN,...t),this._logHandler(this,Bt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Bt.ERROR,...t),this._logHandler(this,Bt.ERROR,...t)}}const D6=(n,t)=>t.some(i=>n instanceof i);let sv,ov;function N6(){return sv||(sv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function M6(){return ov||(ov=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Z2=new WeakMap,fm=new WeakMap,J2=new WeakMap,Dp=new WeakMap,dg=new WeakMap;function O6(n){const t=new Promise((i,a)=>{const o=()=>{n.removeEventListener("success",u),n.removeEventListener("error",d)},u=()=>{i(Xr(n.result)),o()},d=()=>{a(n.error),o()};n.addEventListener("success",u),n.addEventListener("error",d)});return t.then(i=>{i instanceof IDBCursor&&Z2.set(i,n)}).catch(()=>{}),dg.set(t,n),t}function k6(n){if(fm.has(n))return;const t=new Promise((i,a)=>{const o=()=>{n.removeEventListener("complete",u),n.removeEventListener("error",d),n.removeEventListener("abort",d)},u=()=>{i(),o()},d=()=>{a(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",u),n.addEventListener("error",d),n.addEventListener("abort",d)});fm.set(n,t)}let pm={get(n,t,i){if(n instanceof IDBTransaction){if(t==="done")return fm.get(n);if(t==="objectStoreNames")return n.objectStoreNames||J2.get(n);if(t==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return Xr(n[t])},set(n,t,i){return n[t]=i,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function V6(n){pm=n(pm)}function P6(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...i){const a=n.call(Np(this),t,...i);return J2.set(a,t.sort?t.sort():[t]),Xr(a)}:M6().includes(n)?function(...t){return n.apply(Np(this),t),Xr(Z2.get(this))}:function(...t){return Xr(n.apply(Np(this),t))}}function U6(n){return typeof n=="function"?P6(n):(n instanceof IDBTransaction&&k6(n),D6(n,N6())?new Proxy(n,pm):n)}function Xr(n){if(n instanceof IDBRequest)return O6(n);if(Dp.has(n))return Dp.get(n);const t=U6(n);return t!==n&&(Dp.set(n,t),dg.set(t,n)),t}const Np=n=>dg.get(n);function z6(n,t,{blocked:i,upgrade:a,blocking:o,terminated:u}={}){const d=indexedDB.open(n,t),p=Xr(d);return a&&d.addEventListener("upgradeneeded",m=>{a(Xr(d.result),m.oldVersion,m.newVersion,Xr(d.transaction),m)}),i&&d.addEventListener("blocked",m=>i(m.oldVersion,m.newVersion,m)),p.then(m=>{u&&m.addEventListener("close",()=>u()),o&&m.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),p}const L6=["get","getKey","getAll","getAllKeys","count"],$6=["put","add","delete","clear"],Mp=new Map;function lv(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Mp.get(t))return Mp.get(t);const i=t.replace(/FromIndex$/,""),a=t!==i,o=$6.includes(i);if(!(i in(a?IDBIndex:IDBObjectStore).prototype)||!(o||L6.includes(i)))return;const u=async function(d,...p){const m=this.transaction(d,o?"readwrite":"readonly");let g=m.store;return a&&(g=g.index(p.shift())),(await Promise.all([g[i](...p),o&&m.done]))[0]};return Mp.set(t,u),u}V6(n=>({...n,get:(t,i,a)=>lv(t,i)||n.get(t,i,a),has:(t,i)=>!!lv(t,i)||n.has(t,i)}));/**
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
 */class B6{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(F6(i)){const a=i.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(i=>i).join(" ")}}function F6(n){return n.getComponent()?.type==="VERSION"}const mm="@firebase/app",uv="0.14.4";/**
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
 */const sr=new W2("@firebase/app"),K6="@firebase/app-compat",H6="@firebase/analytics-compat",q6="@firebase/analytics",G6="@firebase/app-check-compat",Y6="@firebase/app-check",Q6="@firebase/auth",X6="@firebase/auth-compat",W6="@firebase/database",Z6="@firebase/data-connect",J6="@firebase/database-compat",tI="@firebase/functions",eI="@firebase/functions-compat",nI="@firebase/installations",iI="@firebase/installations-compat",rI="@firebase/messaging",aI="@firebase/messaging-compat",sI="@firebase/performance",oI="@firebase/performance-compat",lI="@firebase/remote-config",uI="@firebase/remote-config-compat",cI="@firebase/storage",hI="@firebase/storage-compat",dI="@firebase/firestore",fI="@firebase/ai",pI="@firebase/firestore-compat",mI="firebase",gI="12.4.0";/**
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
 */const gm="[DEFAULT]",yI={[mm]:"fire-core",[K6]:"fire-core-compat",[q6]:"fire-analytics",[H6]:"fire-analytics-compat",[Y6]:"fire-app-check",[G6]:"fire-app-check-compat",[Q6]:"fire-auth",[X6]:"fire-auth-compat",[W6]:"fire-rtdb",[Z6]:"fire-data-connect",[J6]:"fire-rtdb-compat",[tI]:"fire-fn",[eI]:"fire-fn-compat",[nI]:"fire-iid",[iI]:"fire-iid-compat",[rI]:"fire-fcm",[aI]:"fire-fcm-compat",[sI]:"fire-perf",[oI]:"fire-perf-compat",[lI]:"fire-rc",[uI]:"fire-rc-compat",[cI]:"fire-gcs",[hI]:"fire-gcs-compat",[dI]:"fire-fst",[pI]:"fire-fst-compat",[fI]:"fire-vertex","fire-js":"fire-js",[mI]:"fire-js-all"};/**
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
 */const iu=new Map,xI=new Map,ym=new Map;function cv(n,t){try{n.container.addComponent(t)}catch(i){sr.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,i)}}function Ch(n){const t=n.name;if(ym.has(t))return sr.debug(`There were multiple attempts to register component ${t}.`),!1;ym.set(t,n);for(const i of iu.values())cv(i,n);for(const i of xI.values())cv(i,n);return!0}function vI(n,t){const i=n.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),n.container.getProvider(t)}function _I(n){return n==null?!1:n.settings!==void 0}/**
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
 */const wI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wr=new X2("app","Firebase",wI);/**
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
 */class EI{constructor(t,i,a){this._isDeleted=!1,this._options={...t},this._config={...i},this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new nu("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Wr.create("app-deleted",{appName:this._name})}}/**
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
 */const bI=gI;function fg(n,t={}){let i=n;typeof t!="object"&&(t={name:t});const a={name:gm,automaticDataCollectionEnabled:!0,...t},o=a.name;if(typeof o!="string"||!o)throw Wr.create("bad-app-name",{appName:String(o)});if(i||(i=Q2()),!i)throw Wr.create("no-options");const u=iu.get(o);if(u){if(Ih(i,u.options)&&Ih(a,u.config))return u;throw Wr.create("duplicate-app",{appName:o})}const d=new A6(o);for(const m of ym.values())d.addComponent(m);const p=new EI(i,a,d);return iu.set(o,p),p}function TI(n=gm){const t=iu.get(n);if(!t&&n===gm&&Q2())return fg();if(!t)throw Wr.create("no-app",{appName:n});return t}function hv(){return Array.from(iu.values())}function eo(n,t,i){let a=yI[n]??n;i&&(a+=`-${i}`);const o=a.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const d=[`Unable to register library "${a}" with version "${t}":`];o&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),o&&u&&d.push("and"),u&&d.push(`version name "${t}" contains illegal characters (whitespace or "/")`),sr.warn(d.join(" "));return}Ch(new nu(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}/**
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
 */const SI="firebase-heartbeat-database",AI=1,ru="firebase-heartbeat-store";let Op=null;function tw(){return Op||(Op=z6(SI,AI,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(ru)}catch(i){console.warn(i)}}}}).catch(n=>{throw Wr.create("idb-open",{originalErrorMessage:n.message})})),Op}async function RI(n){try{const i=(await tw()).transaction(ru),a=await i.objectStore(ru).get(ew(n));return await i.done,a}catch(t){if(t instanceof Eo)sr.warn(t.message);else{const i=Wr.create("idb-get",{originalErrorMessage:t?.message});sr.warn(i.message)}}}async function dv(n,t){try{const a=(await tw()).transaction(ru,"readwrite");await a.objectStore(ru).put(t,ew(n)),await a.done}catch(i){if(i instanceof Eo)sr.warn(i.message);else{const a=Wr.create("idb-set",{originalErrorMessage:i?.message});sr.warn(a.message)}}}function ew(n){return`${n.name}!${n.options.appId}`}/**
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
 */const II=1024,CI=30;class jI{constructor(t){this.container=t,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new NI(i),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=fv();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(o=>o.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:i}),this._heartbeatsCache.heartbeats.length>CI){const o=MI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){sr.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=fv(),{heartbeatsToSend:i,unsentEntries:a}=DI(this._heartbeatsCache.heartbeats),o=Rh(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return sr.warn(t),""}}}function fv(){return new Date().toISOString().substring(0,10)}function DI(n,t=II){const i=[];let a=n.slice();for(const o of n){const u=i.find(d=>d.agent===o.agent);if(u){if(u.dates.push(o.date),pv(i)>t){u.dates.pop();break}}else if(i.push({agent:o.agent,dates:[o.date]}),pv(i)>t){i.pop();break}a=a.slice(1)}return{heartbeatsToSend:i,unsentEntries:a}}class NI{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return x6()?v6().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await RI(this.app);return i?.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const a=await this.read();return dv(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const a=await this.read();return dv(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...t.heartbeats]})}else return}}function pv(n){return Rh(JSON.stringify({version:2,heartbeats:n})).length}function MI(n){if(n.length===0)return-1;let t=0,i=n[0].date;for(let a=1;a<n.length;a++)n[a].date<i&&(i=n[a].date,t=a);return t}/**
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
 */function OI(n){Ch(new nu("platform-logger",t=>new B6(t),"PRIVATE")),Ch(new nu("heartbeat",t=>new jI(t),"PRIVATE")),eo(mm,uv,n),eo(mm,uv,"esm2020"),eo("fire-js","")}OI("");var kI="firebase",VI="12.4.0";/**
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
 */eo(kI,VI,"app");var mv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zr,nw;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,C){function j(){}j.prototype=C.prototype,I.F=C.prototype,I.prototype=new j,I.prototype.constructor=I,I.D=function(O,U,$){for(var D=Array(arguments.length-2),se=2;se<arguments.length;se++)D[se-2]=arguments[se];return C.prototype[U].apply(O,D)}}function i(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(a,i),a.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(I,C,j){j||(j=0);const O=Array(16);if(typeof C=="string")for(var U=0;U<16;++U)O[U]=C.charCodeAt(j++)|C.charCodeAt(j++)<<8|C.charCodeAt(j++)<<16|C.charCodeAt(j++)<<24;else for(U=0;U<16;++U)O[U]=C[j++]|C[j++]<<8|C[j++]<<16|C[j++]<<24;C=I.g[0],j=I.g[1],U=I.g[2];let $=I.g[3],D;D=C+($^j&(U^$))+O[0]+3614090360&4294967295,C=j+(D<<7&4294967295|D>>>25),D=$+(U^C&(j^U))+O[1]+3905402710&4294967295,$=C+(D<<12&4294967295|D>>>20),D=U+(j^$&(C^j))+O[2]+606105819&4294967295,U=$+(D<<17&4294967295|D>>>15),D=j+(C^U&($^C))+O[3]+3250441966&4294967295,j=U+(D<<22&4294967295|D>>>10),D=C+($^j&(U^$))+O[4]+4118548399&4294967295,C=j+(D<<7&4294967295|D>>>25),D=$+(U^C&(j^U))+O[5]+1200080426&4294967295,$=C+(D<<12&4294967295|D>>>20),D=U+(j^$&(C^j))+O[6]+2821735955&4294967295,U=$+(D<<17&4294967295|D>>>15),D=j+(C^U&($^C))+O[7]+4249261313&4294967295,j=U+(D<<22&4294967295|D>>>10),D=C+($^j&(U^$))+O[8]+1770035416&4294967295,C=j+(D<<7&4294967295|D>>>25),D=$+(U^C&(j^U))+O[9]+2336552879&4294967295,$=C+(D<<12&4294967295|D>>>20),D=U+(j^$&(C^j))+O[10]+4294925233&4294967295,U=$+(D<<17&4294967295|D>>>15),D=j+(C^U&($^C))+O[11]+2304563134&4294967295,j=U+(D<<22&4294967295|D>>>10),D=C+($^j&(U^$))+O[12]+1804603682&4294967295,C=j+(D<<7&4294967295|D>>>25),D=$+(U^C&(j^U))+O[13]+4254626195&4294967295,$=C+(D<<12&4294967295|D>>>20),D=U+(j^$&(C^j))+O[14]+2792965006&4294967295,U=$+(D<<17&4294967295|D>>>15),D=j+(C^U&($^C))+O[15]+1236535329&4294967295,j=U+(D<<22&4294967295|D>>>10),D=C+(U^$&(j^U))+O[1]+4129170786&4294967295,C=j+(D<<5&4294967295|D>>>27),D=$+(j^U&(C^j))+O[6]+3225465664&4294967295,$=C+(D<<9&4294967295|D>>>23),D=U+(C^j&($^C))+O[11]+643717713&4294967295,U=$+(D<<14&4294967295|D>>>18),D=j+($^C&(U^$))+O[0]+3921069994&4294967295,j=U+(D<<20&4294967295|D>>>12),D=C+(U^$&(j^U))+O[5]+3593408605&4294967295,C=j+(D<<5&4294967295|D>>>27),D=$+(j^U&(C^j))+O[10]+38016083&4294967295,$=C+(D<<9&4294967295|D>>>23),D=U+(C^j&($^C))+O[15]+3634488961&4294967295,U=$+(D<<14&4294967295|D>>>18),D=j+($^C&(U^$))+O[4]+3889429448&4294967295,j=U+(D<<20&4294967295|D>>>12),D=C+(U^$&(j^U))+O[9]+568446438&4294967295,C=j+(D<<5&4294967295|D>>>27),D=$+(j^U&(C^j))+O[14]+3275163606&4294967295,$=C+(D<<9&4294967295|D>>>23),D=U+(C^j&($^C))+O[3]+4107603335&4294967295,U=$+(D<<14&4294967295|D>>>18),D=j+($^C&(U^$))+O[8]+1163531501&4294967295,j=U+(D<<20&4294967295|D>>>12),D=C+(U^$&(j^U))+O[13]+2850285829&4294967295,C=j+(D<<5&4294967295|D>>>27),D=$+(j^U&(C^j))+O[2]+4243563512&4294967295,$=C+(D<<9&4294967295|D>>>23),D=U+(C^j&($^C))+O[7]+1735328473&4294967295,U=$+(D<<14&4294967295|D>>>18),D=j+($^C&(U^$))+O[12]+2368359562&4294967295,j=U+(D<<20&4294967295|D>>>12),D=C+(j^U^$)+O[5]+4294588738&4294967295,C=j+(D<<4&4294967295|D>>>28),D=$+(C^j^U)+O[8]+2272392833&4294967295,$=C+(D<<11&4294967295|D>>>21),D=U+($^C^j)+O[11]+1839030562&4294967295,U=$+(D<<16&4294967295|D>>>16),D=j+(U^$^C)+O[14]+4259657740&4294967295,j=U+(D<<23&4294967295|D>>>9),D=C+(j^U^$)+O[1]+2763975236&4294967295,C=j+(D<<4&4294967295|D>>>28),D=$+(C^j^U)+O[4]+1272893353&4294967295,$=C+(D<<11&4294967295|D>>>21),D=U+($^C^j)+O[7]+4139469664&4294967295,U=$+(D<<16&4294967295|D>>>16),D=j+(U^$^C)+O[10]+3200236656&4294967295,j=U+(D<<23&4294967295|D>>>9),D=C+(j^U^$)+O[13]+681279174&4294967295,C=j+(D<<4&4294967295|D>>>28),D=$+(C^j^U)+O[0]+3936430074&4294967295,$=C+(D<<11&4294967295|D>>>21),D=U+($^C^j)+O[3]+3572445317&4294967295,U=$+(D<<16&4294967295|D>>>16),D=j+(U^$^C)+O[6]+76029189&4294967295,j=U+(D<<23&4294967295|D>>>9),D=C+(j^U^$)+O[9]+3654602809&4294967295,C=j+(D<<4&4294967295|D>>>28),D=$+(C^j^U)+O[12]+3873151461&4294967295,$=C+(D<<11&4294967295|D>>>21),D=U+($^C^j)+O[15]+530742520&4294967295,U=$+(D<<16&4294967295|D>>>16),D=j+(U^$^C)+O[2]+3299628645&4294967295,j=U+(D<<23&4294967295|D>>>9),D=C+(U^(j|~$))+O[0]+4096336452&4294967295,C=j+(D<<6&4294967295|D>>>26),D=$+(j^(C|~U))+O[7]+1126891415&4294967295,$=C+(D<<10&4294967295|D>>>22),D=U+(C^($|~j))+O[14]+2878612391&4294967295,U=$+(D<<15&4294967295|D>>>17),D=j+($^(U|~C))+O[5]+4237533241&4294967295,j=U+(D<<21&4294967295|D>>>11),D=C+(U^(j|~$))+O[12]+1700485571&4294967295,C=j+(D<<6&4294967295|D>>>26),D=$+(j^(C|~U))+O[3]+2399980690&4294967295,$=C+(D<<10&4294967295|D>>>22),D=U+(C^($|~j))+O[10]+4293915773&4294967295,U=$+(D<<15&4294967295|D>>>17),D=j+($^(U|~C))+O[1]+2240044497&4294967295,j=U+(D<<21&4294967295|D>>>11),D=C+(U^(j|~$))+O[8]+1873313359&4294967295,C=j+(D<<6&4294967295|D>>>26),D=$+(j^(C|~U))+O[15]+4264355552&4294967295,$=C+(D<<10&4294967295|D>>>22),D=U+(C^($|~j))+O[6]+2734768916&4294967295,U=$+(D<<15&4294967295|D>>>17),D=j+($^(U|~C))+O[13]+1309151649&4294967295,j=U+(D<<21&4294967295|D>>>11),D=C+(U^(j|~$))+O[4]+4149444226&4294967295,C=j+(D<<6&4294967295|D>>>26),D=$+(j^(C|~U))+O[11]+3174756917&4294967295,$=C+(D<<10&4294967295|D>>>22),D=U+(C^($|~j))+O[2]+718787259&4294967295,U=$+(D<<15&4294967295|D>>>17),D=j+($^(U|~C))+O[9]+3951481745&4294967295,I.g[0]=I.g[0]+C&4294967295,I.g[1]=I.g[1]+(U+(D<<21&4294967295|D>>>11))&4294967295,I.g[2]=I.g[2]+U&4294967295,I.g[3]=I.g[3]+$&4294967295}a.prototype.v=function(I,C){C===void 0&&(C=I.length);const j=C-this.blockSize,O=this.C;let U=this.h,$=0;for(;$<C;){if(U==0)for(;$<=j;)o(this,I,$),$+=this.blockSize;if(typeof I=="string"){for(;$<C;)if(O[U++]=I.charCodeAt($++),U==this.blockSize){o(this,O),U=0;break}}else for(;$<C;)if(O[U++]=I[$++],U==this.blockSize){o(this,O),U=0;break}}this.h=U,this.o+=C},a.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var C=1;C<I.length-8;++C)I[C]=0;C=this.o*8;for(var j=I.length-8;j<I.length;++j)I[j]=C&255,C/=256;for(this.v(I),I=Array(16),C=0,j=0;j<4;++j)for(let O=0;O<32;O+=8)I[C++]=this.g[j]>>>O&255;return I};function u(I,C){var j=p;return Object.prototype.hasOwnProperty.call(j,I)?j[I]:j[I]=C(I)}function d(I,C){this.h=C;const j=[];let O=!0;for(let U=I.length-1;U>=0;U--){const $=I[U]|0;O&&$==C||(j[U]=$,O=!1)}this.g=j}var p={};function m(I){return-128<=I&&I<128?u(I,function(C){return new d([C|0],C<0?-1:0)}):new d([I|0],I<0?-1:0)}function g(I){if(isNaN(I)||!isFinite(I))return E;if(I<0)return V(g(-I));const C=[];let j=1;for(let O=0;I>=j;O++)C[O]=I/j|0,j*=4294967296;return new d(C,0)}function v(I,C){if(I.length==0)throw Error("number format error: empty string");if(C=C||10,C<2||36<C)throw Error("radix out of range: "+C);if(I.charAt(0)=="-")return V(v(I.substring(1),C));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const j=g(Math.pow(C,8));let O=E;for(let $=0;$<I.length;$+=8){var U=Math.min(8,I.length-$);const D=parseInt(I.substring($,$+U),C);U<8?(U=g(Math.pow(C,U)),O=O.j(U).add(g(D))):(O=O.j(j),O=O.add(g(D)))}return O}var E=m(0),T=m(1),A=m(16777216);n=d.prototype,n.m=function(){if(k(this))return-V(this).m();let I=0,C=1;for(let j=0;j<this.g.length;j++){const O=this.i(j);I+=(O>=0?O:4294967296+O)*C,C*=4294967296}return I},n.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(M(this))return"0";if(k(this))return"-"+V(this).toString(I);const C=g(Math.pow(I,6));var j=this;let O="";for(;;){const U=lt(j,C).g;j=B(j,U.j(C));let $=((j.g.length>0?j.g[0]:j.h)>>>0).toString(I);if(j=U,M(j))return $+O;for(;$.length<6;)$="0"+$;O=$+O}},n.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function M(I){if(I.h!=0)return!1;for(let C=0;C<I.g.length;C++)if(I.g[C]!=0)return!1;return!0}function k(I){return I.h==-1}n.l=function(I){return I=B(this,I),k(I)?-1:M(I)?0:1};function V(I){const C=I.g.length,j=[];for(let O=0;O<C;O++)j[O]=~I.g[O];return new d(j,~I.h).add(T)}n.abs=function(){return k(this)?V(this):this},n.add=function(I){const C=Math.max(this.g.length,I.g.length),j=[];let O=0;for(let U=0;U<=C;U++){let $=O+(this.i(U)&65535)+(I.i(U)&65535),D=($>>>16)+(this.i(U)>>>16)+(I.i(U)>>>16);O=D>>>16,$&=65535,D&=65535,j[U]=D<<16|$}return new d(j,j[j.length-1]&-2147483648?-1:0)};function B(I,C){return I.add(V(C))}n.j=function(I){if(M(this)||M(I))return E;if(k(this))return k(I)?V(this).j(V(I)):V(V(this).j(I));if(k(I))return V(this.j(V(I)));if(this.l(A)<0&&I.l(A)<0)return g(this.m()*I.m());const C=this.g.length+I.g.length,j=[];for(var O=0;O<2*C;O++)j[O]=0;for(O=0;O<this.g.length;O++)for(let U=0;U<I.g.length;U++){const $=this.i(O)>>>16,D=this.i(O)&65535,se=I.i(U)>>>16,Kt=I.i(U)&65535;j[2*O+2*U]+=D*Kt,q(j,2*O+2*U),j[2*O+2*U+1]+=$*Kt,q(j,2*O+2*U+1),j[2*O+2*U+1]+=D*se,q(j,2*O+2*U+1),j[2*O+2*U+2]+=$*se,q(j,2*O+2*U+2)}for(I=0;I<C;I++)j[I]=j[2*I+1]<<16|j[2*I];for(I=C;I<2*C;I++)j[I]=0;return new d(j,0)};function q(I,C){for(;(I[C]&65535)!=I[C];)I[C+1]+=I[C]>>>16,I[C]&=65535,C++}function Z(I,C){this.g=I,this.h=C}function lt(I,C){if(M(C))throw Error("division by zero");if(M(I))return new Z(E,E);if(k(I))return C=lt(V(I),C),new Z(V(C.g),V(C.h));if(k(C))return C=lt(I,V(C)),new Z(V(C.g),C.h);if(I.g.length>30){if(k(I)||k(C))throw Error("slowDivide_ only works with positive integers.");for(var j=T,O=C;O.l(I)<=0;)j=K(j),O=K(O);var U=ot(j,1),$=ot(O,1);for(O=ot(O,2),j=ot(j,2);!M(O);){var D=$.add(O);D.l(I)<=0&&(U=U.add(j),$=D),O=ot(O,1),j=ot(j,1)}return C=B(I,U.j(C)),new Z(U,C)}for(U=E;I.l(C)>=0;){for(j=Math.max(1,Math.floor(I.m()/C.m())),O=Math.ceil(Math.log(j)/Math.LN2),O=O<=48?1:Math.pow(2,O-48),$=g(j),D=$.j(C);k(D)||D.l(I)>0;)j-=O,$=g(j),D=$.j(C);M($)&&($=T),U=U.add($),I=B(I,D)}return new Z(U,I)}n.B=function(I){return lt(this,I).h},n.and=function(I){const C=Math.max(this.g.length,I.g.length),j=[];for(let O=0;O<C;O++)j[O]=this.i(O)&I.i(O);return new d(j,this.h&I.h)},n.or=function(I){const C=Math.max(this.g.length,I.g.length),j=[];for(let O=0;O<C;O++)j[O]=this.i(O)|I.i(O);return new d(j,this.h|I.h)},n.xor=function(I){const C=Math.max(this.g.length,I.g.length),j=[];for(let O=0;O<C;O++)j[O]=this.i(O)^I.i(O);return new d(j,this.h^I.h)};function K(I){const C=I.g.length+1,j=[];for(let O=0;O<C;O++)j[O]=I.i(O)<<1|I.i(O-1)>>>31;return new d(j,I.h)}function ot(I,C){const j=C>>5;C%=32;const O=I.g.length-j,U=[];for(let $=0;$<O;$++)U[$]=C>0?I.i($+j)>>>C|I.i($+j+1)<<32-C:I.i($+j);return new d(U,I.h)}a.prototype.digest=a.prototype.A,a.prototype.reset=a.prototype.u,a.prototype.update=a.prototype.v,nw=a,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.B,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=g,d.fromString=v,Zr=d}).apply(typeof mv<"u"?mv:typeof self<"u"?self:typeof window<"u"?window:{});var Xc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var iw,zl,rw,fh,xm,aw,sw,ow;(function(){var n,t=Object.defineProperty;function i(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xc=="object"&&Xc];for(var x=0;x<c.length;++x){var _=c[x];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var a=i(this);function o(c,x){if(x)t:{var _=a;c=c.split(".");for(var R=0;R<c.length-1;R++){var G=c[R];if(!(G in _))break t;_=_[G]}c=c[c.length-1],R=_[c],x=x(R),x!=R&&x!=null&&t(_,c,{configurable:!0,writable:!0,value:x})}}o("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(c){return c||function(x){var _=[],R;for(R in x)Object.prototype.hasOwnProperty.call(x,R)&&_.push([R,x[R]]);return _}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function p(c){var x=typeof c;return x=="object"&&c!=null||x=="function"}function m(c,x,_){return c.call.apply(c.bind,arguments)}function g(c,x,_){return g=m,g.apply(null,arguments)}function v(c,x){var _=Array.prototype.slice.call(arguments,1);return function(){var R=_.slice();return R.push.apply(R,arguments),c.apply(this,R)}}function E(c,x){function _(){}_.prototype=x.prototype,c.Z=x.prototype,c.prototype=new _,c.prototype.constructor=c,c.Ob=function(R,G,W){for(var ut=Array(arguments.length-2),Rt=2;Rt<arguments.length;Rt++)ut[Rt-2]=arguments[Rt];return x.prototype[G].apply(R,ut)}}var T=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function A(c){const x=c.length;if(x>0){const _=Array(x);for(let R=0;R<x;R++)_[R]=c[R];return _}return[]}function M(c,x){for(let R=1;R<arguments.length;R++){const G=arguments[R];var _=typeof G;if(_=_!="object"?_:G?Array.isArray(G)?"array":_:"null",_=="array"||_=="object"&&typeof G.length=="number"){_=c.length||0;const W=G.length||0;c.length=_+W;for(let ut=0;ut<W;ut++)c[_+ut]=G[ut]}else c.push(G)}}class k{constructor(x,_){this.i=x,this.j=_,this.h=0,this.g=null}get(){let x;return this.h>0?(this.h--,x=this.g,this.g=x.next,x.next=null):x=this.i(),x}}function V(c){d.setTimeout(()=>{throw c},0)}function B(){var c=I;let x=null;return c.g&&(x=c.g,c.g=c.g.next,c.g||(c.h=null),x.next=null),x}class q{constructor(){this.h=this.g=null}add(x,_){const R=Z.get();R.set(x,_),this.h?this.h.next=R:this.g=R,this.h=R}}var Z=new k(()=>new lt,c=>c.reset());class lt{constructor(){this.next=this.g=this.h=null}set(x,_){this.h=x,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let K,ot=!1,I=new q,C=()=>{const c=Promise.resolve(void 0);K=()=>{c.then(j)}};function j(){for(var c;c=B();){try{c.h.call(c.g)}catch(_){V(_)}var x=Z;x.j(c),x.h<100&&(x.h++,c.next=x.g,x.g=c)}ot=!1}function O(){this.u=this.u,this.C=this.C}O.prototype.u=!1,O.prototype.dispose=function(){this.u||(this.u=!0,this.N())},O.prototype[Symbol.dispose]=function(){this.dispose()},O.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function U(c,x){this.type=c,this.g=this.target=x,this.defaultPrevented=!1}U.prototype.h=function(){this.defaultPrevented=!0};var $=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,x=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};d.addEventListener("test",_,x),d.removeEventListener("test",_,x)}catch{}return c})();function D(c){return/^[\s\xa0]*$/.test(c)}function se(c,x){U.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,x)}E(se,U),se.prototype.init=function(c,x){const _=this.type=c.type,R=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=x,x=c.relatedTarget,x||(_=="mouseover"?x=c.fromElement:_=="mouseout"&&(x=c.toElement)),this.relatedTarget=x,R?(this.clientX=R.clientX!==void 0?R.clientX:R.pageX,this.clientY=R.clientY!==void 0?R.clientY:R.pageY,this.screenX=R.screenX||0,this.screenY=R.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&se.Z.h.call(this)},se.prototype.h=function(){se.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Kt="closure_listenable_"+(Math.random()*1e6|0),tt=0;function dt(c,x,_,R,G){this.listener=c,this.proxy=null,this.src=x,this.type=_,this.capture=!!R,this.ha=G,this.key=++tt,this.da=this.fa=!1}function yt(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Ct(c,x,_){for(const R in c)x.call(_,c[R],R,c)}function P(c,x){for(const _ in c)x.call(void 0,c[_],_,c)}function at(c){const x={};for(const _ in c)x[_]=c[_];return x}const ct="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ht(c,x){let _,R;for(let G=1;G<arguments.length;G++){R=arguments[G];for(_ in R)c[_]=R[_];for(let W=0;W<ct.length;W++)_=ct[W],Object.prototype.hasOwnProperty.call(R,_)&&(c[_]=R[_])}}function gt(c){this.src=c,this.g={},this.h=0}gt.prototype.add=function(c,x,_,R,G){const W=c.toString();c=this.g[W],c||(c=this.g[W]=[],this.h++);const ut=_t(c,x,R,G);return ut>-1?(x=c[ut],_||(x.fa=!1)):(x=new dt(x,this.src,W,!!R,G),x.fa=_,c.push(x)),x};function jt(c,x){const _=x.type;if(_ in c.g){var R=c.g[_],G=Array.prototype.indexOf.call(R,x,void 0),W;(W=G>=0)&&Array.prototype.splice.call(R,G,1),W&&(yt(x),c.g[_].length==0&&(delete c.g[_],c.h--))}}function _t(c,x,_,R){for(let G=0;G<c.length;++G){const W=c[G];if(!W.da&&W.listener==x&&W.capture==!!_&&W.ha==R)return G}return-1}var ge="closure_lm_"+(Math.random()*1e6|0),zt={};function Me(c,x,_,R,G){if(Array.isArray(x)){for(let W=0;W<x.length;W++)Me(c,x[W],_,R,G);return null}return _=Su(_),c&&c[Kt]?c.J(x,_,p(R)?!!R.capture:!1,G):Ni(c,x,_,!1,R,G)}function Ni(c,x,_,R,G,W){if(!x)throw Error("Invalid event type");const ut=p(G)?!!G.capture:!!G;let Rt=Io(c);if(Rt||(c[ge]=Rt=new gt(c)),_=Rt.add(x,_,R,ut,W),_.proxy)return _;if(R=qn(),_.proxy=R,R.src=c,R.listener=_,c.addEventListener)$||(G=ut),G===void 0&&(G=!1),c.addEventListener(x.toString(),R,G);else if(c.attachEvent)c.attachEvent(rs(x.toString()),R);else if(c.addListener&&c.removeListener)c.addListener(R);else throw Error("addEventListener and attachEvent are unavailable.");return _}function qn(){function c(_){return x.call(c.src,c.listener,_)}const x=fd;return c}function ln(c,x,_,R,G){if(Array.isArray(x))for(var W=0;W<x.length;W++)ln(c,x[W],_,R,G);else R=p(R)?!!R.capture:!!R,_=Su(_),c&&c[Kt]?(c=c.i,W=String(x).toString(),W in c.g&&(x=c.g[W],_=_t(x,_,R,G),_>-1&&(yt(x[_]),Array.prototype.splice.call(x,_,1),x.length==0&&(delete c.g[W],c.h--)))):c&&(c=Io(c))&&(x=c.g[x.toString()],c=-1,x&&(c=_t(x,_,R,G)),(_=c>-1?x[c]:null)&&la(_))}function la(c){if(typeof c!="number"&&c&&!c.da){var x=c.src;if(x&&x[Kt])jt(x.i,c);else{var _=c.type,R=c.proxy;x.removeEventListener?x.removeEventListener(_,R,c.capture):x.detachEvent?x.detachEvent(rs(_),R):x.addListener&&x.removeListener&&x.removeListener(R),(_=Io(x))?(jt(_,c),_.h==0&&(_.src=null,x[ge]=null)):yt(c)}}}function rs(c){return c in zt?zt[c]:zt[c]="on"+c}function fd(c,x){if(c.da)c=!0;else{x=new se(x,this);const _=c.listener,R=c.ha||c.src;c.fa&&la(c),c=_.call(R,x)}return c}function Io(c){return c=c[ge],c instanceof gt?c:null}var pn="__closure_events_fn_"+(Math.random()*1e9>>>0);function Su(c){return typeof c=="function"?c:(c[pn]||(c[pn]=function(x){return c.handleEvent(x)}),c[pn])}function Oe(){O.call(this),this.i=new gt(this),this.M=this,this.G=null}E(Oe,O),Oe.prototype[Kt]=!0,Oe.prototype.removeEventListener=function(c,x,_,R){ln(this,c,x,_,R)};function Le(c,x){var _,R=c.G;if(R)for(_=[];R;R=R.G)_.push(R);if(c=c.M,R=x.type||x,typeof x=="string")x=new U(x,c);else if(x instanceof U)x.target=x.target||c;else{var G=x;x=new U(R,c),ht(x,G)}G=!0;let W,ut;if(_)for(ut=_.length-1;ut>=0;ut--)W=x.g=_[ut],G=Mi(W,R,!0,x)&&G;if(W=x.g=c,G=Mi(W,R,!0,x)&&G,G=Mi(W,R,!1,x)&&G,_)for(ut=0;ut<_.length;ut++)W=x.g=_[ut],G=Mi(W,R,!1,x)&&G}Oe.prototype.N=function(){if(Oe.Z.N.call(this),this.i){var c=this.i;for(const x in c.g){const _=c.g[x];for(let R=0;R<_.length;R++)yt(_[R]);delete c.g[x],c.h--}}this.G=null},Oe.prototype.J=function(c,x,_,R){return this.i.add(String(c),x,!1,_,R)},Oe.prototype.K=function(c,x,_,R){return this.i.add(String(c),x,!0,_,R)};function Mi(c,x,_,R){if(x=c.i.g[String(x)],!x)return!0;x=x.concat();let G=!0;for(let W=0;W<x.length;++W){const ut=x[W];if(ut&&!ut.da&&ut.capture==_){const Rt=ut.listener,oe=ut.ha||ut.src;ut.fa&&jt(c.i,ut),G=Rt.call(oe,R)!==!1&&G}}return G&&!R.defaultPrevented}function pd(c,x){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=g(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(x)>2147483647?-1:d.setTimeout(c,x||0)}function Co(c){c.g=pd(()=>{c.g=null,c.i&&(c.i=!1,Co(c))},c.l);const x=c.h;c.h=null,c.m.apply(null,x)}class md extends O{constructor(x,_){super(),this.m=x,this.l=_,this.h=null,this.i=!1,this.g=null}j(x){this.h=arguments,this.g?this.i=!0:Co(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ua(c){O.call(this),this.h=c,this.g={}}E(ua,O);var cr=[];function tn(c){Ct(c.g,function(x,_){this.g.hasOwnProperty(_)&&la(x)},c),c.g={}}ua.prototype.N=function(){ua.Z.N.call(this),tn(this)},ua.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Dn=d.JSON.stringify,un=d.JSON.parse,gd=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function Au(){}function Ru(){}var oi={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function hr(){U.call(this,"d")}E(hr,U);function Gn(){U.call(this,"c")}E(Gn,U);var Nn={},dr=null;function as(){return dr=dr||new Oe}Nn.Ia="serverreachability";function jo(c){U.call(this,Nn.Ia,c)}E(jo,U);function fr(c){const x=as();Le(x,new jo(x))}Nn.STAT_EVENT="statevent";function ss(c,x){U.call(this,Nn.STAT_EVENT,c),this.stat=x}E(ss,U);function ve(c){const x=as();Le(x,new ss(x,c))}Nn.Ja="timingevent";function Iu(c,x){U.call(this,Nn.Ja,c),this.size=x}E(Iu,U);function pr(c,x){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},x)}function mr(){this.g=!0}mr.prototype.ua=function(){this.g=!1};function Do(c,x,_,R,G,W){c.info(function(){if(c.g)if(W){var ut="",Rt=W.split("&");for(let Qt=0;Qt<Rt.length;Qt++){var oe=Rt[Qt].split("=");if(oe.length>1){const Ee=oe[0];oe=oe[1];const wn=Ee.split("_");ut=wn.length>=2&&wn[1]=="type"?ut+(Ee+"="+oe+"&"):ut+(Ee+"=redacted&")}}}else ut=null;else ut=W;return"XMLHTTP REQ ("+R+") [attempt "+G+"]: "+x+`
`+_+`
`+ut})}function No(c,x,_,R,G,W,ut){c.info(function(){return"XMLHTTP RESP ("+R+") [ attempt "+G+"]: "+x+`
`+_+`
`+W+" "+ut})}function Oi(c,x,_,R){c.info(function(){return"XMLHTTP TEXT ("+x+"): "+li(c,_)+(R?" "+R:"")})}function yd(c,x){c.info(function(){return"TIMEOUT: "+x})}mr.prototype.info=function(){};function li(c,x){if(!c.g)return x;if(!x)return null;try{const W=JSON.parse(x);if(W){for(c=0;c<W.length;c++)if(Array.isArray(W[c])){var _=W[c];if(!(_.length<2)){var R=_[1];if(Array.isArray(R)&&!(R.length<1)){var G=R[0];if(G!="noop"&&G!="stop"&&G!="close")for(let ut=1;ut<R.length;ut++)R[ut]=""}}}}return Dn(W)}catch{return x}}var _e={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ge={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ki;function ca(){}E(ca,Au),ca.prototype.g=function(){return new XMLHttpRequest},ki=new ca;function ha(c){return encodeURIComponent(String(c))}function xd(c){var x=1;c=c.split(":");const _=[];for(;x>0&&c.length;)_.push(c.shift()),x--;return c.length&&_.push(c.join(":")),_}function Yn(c,x,_,R){this.j=c,this.i=x,this.l=_,this.S=R||1,this.V=new ua(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new gr}function gr(){this.i=null,this.g="",this.h=!1}var os={},ui={};function ci(c,x,_){c.M=1,c.A=Pi(fe(x)),c.u=_,c.R=!0,yr(c,null)}function yr(c,x){c.F=Date.now(),da(c),c.B=fe(c.A);var _=c.B,R=c.S;Array.isArray(R)||(R=[String(R)]),Nu(_.i,"t",R),c.C=0,_=c.j.L,c.h=new gr,c.g=ys(c.j,_?x:null,!c.u),c.P>0&&(c.O=new md(g(c.Y,c,c.g),c.P)),x=c.V,_=c.g,R=c.ba;var G="readystatechange";Array.isArray(G)||(G&&(cr[0]=G.toString()),G=cr);for(let W=0;W<G.length;W++){const ut=Me(_,G[W],R||x.handleEvent,!1,x.h||x);if(!ut)break;x.g[ut.key]=ut}x=c.J?at(c.J):{},c.u?(c.v||(c.v="POST"),x["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,x)):(c.v="GET",c.g.ea(c.B,c.v,null,x)),fr(),Do(c.i,c.v,c.B,c.l,c.S,c.u)}Yn.prototype.ba=function(c){c=c.target;const x=this.O;x&&en(c)==3?x.j():this.Y(c)},Yn.prototype.Y=function(c){try{if(c==this.g)t:{const Rt=en(this.g),oe=this.g.ya(),Qt=this.g.ca();if(!(Rt<3)&&(Rt!=3||this.g&&(this.h.h||this.g.la()||ba(this.g)))){this.K||Rt!=4||oe==7||(oe==8||Qt<=0?fr(3):fr(2)),di(this);var x=this.g.ca();this.X=x;var _=xr(this);if(this.o=x==200,No(this.i,this.v,this.B,this.l,this.S,Rt,x),this.o){if(this.U&&!this.L){e:{if(this.g){var R,G=this.g;if((R=G.g?G.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(R)){var W=R;break e}}W=null}if(c=W)Oi(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ls(this,c);else{this.o=!1,this.m=3,ve(12),fi(this),fa(this);break t}}if(this.R){c=!0;let Ee;for(;!this.K&&this.C<_.length;)if(Ee=Cu(this,_),Ee==ui){Rt==4&&(this.m=4,ve(14),c=!1),Oi(this.i,this.l,null,"[Incomplete Response]");break}else if(Ee==os){this.m=4,ve(15),Oi(this.i,this.l,_,"[Invalid Chunk]"),c=!1;break}else Oi(this.i,this.l,Ee,null),ls(this,Ee);if(we(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Rt!=4||_.length!=0||this.h.h||(this.m=1,ve(16),c=!1),this.o=this.o&&c,!c)Oi(this.i,this.l,_,"[Invalid Chunked Response]"),fi(this),fa(this);else if(_.length>0&&!this.W){this.W=!0;var ut=this.j;ut.g==this&&ut.aa&&!ut.P&&(ut.j.info("Great, no buffering proxy detected. Bytes received: "+_.length),Bo(ut),ut.P=!0,ve(11))}}else Oi(this.i,this.l,_,null),ls(this,_);Rt==4&&fi(this),this.o&&!this.K&&(Rt==4?Fo(this.j,this):(this.o=!1,da(this)))}else Ta(this.g),x==400&&_.indexOf("Unknown SID")>0?(this.m=3,ve(12)):(this.m=0,ve(13)),fi(this),fa(this)}}}catch{}finally{}};function xr(c){if(!we(c))return c.g.la();const x=ba(c.g);if(x==="")return"";let _="";const R=x.length,G=en(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return fi(c),fa(c),"";c.h.i=new d.TextDecoder}for(let W=0;W<R;W++)c.h.h=!0,_+=c.h.i.decode(x[W],{stream:!(G&&W==R-1)});return x.length=0,c.h.g+=_,c.C=0,c.h.g}function we(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function Cu(c,x){var _=c.C,R=x.indexOf(`
`,_);return R==-1?ui:(_=Number(x.substring(_,R)),isNaN(_)?os:(R+=1,R+_>x.length?ui:(x=x.slice(R,R+_),c.C=R+_,x)))}Yn.prototype.cancel=function(){this.K=!0,fi(this)};function da(c){c.T=Date.now()+c.H,hi(c,c.H)}function hi(c,x){if(c.D!=null)throw Error("WatchDog timer not null");c.D=pr(g(c.aa,c),x)}function di(c){c.D&&(d.clearTimeout(c.D),c.D=null)}Yn.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(yd(this.i,this.B),this.M!=2&&(fr(),ve(17)),fi(this),this.m=2,fa(this)):hi(this,this.T-c)};function fa(c){c.j.I==0||c.K||Fo(c.j,c)}function fi(c){di(c);var x=c.O;x&&typeof x.dispose=="function"&&x.dispose(),c.O=null,tn(c.V),c.g&&(x=c.g,c.g=null,x.abort(),x.dispose())}function ls(c,x){try{var _=c.j;if(_.I!=0&&(_.g==c||ga(_.h,c))){if(!c.L&&ga(_.h,c)&&_.I==3){try{var R=_.Ba.g.parse(x)}catch{R=null}if(Array.isArray(R)&&R.length==3){var G=R;if(G[0]==0){t:if(!_.v){if(_.g)if(_.g.F+3e3<c.F)gs(_),pi(_);else break t;$o(_),ve(18)}}else _.xa=G[1],0<_.xa-_.K&&G[2]<37500&&_.F&&_.A==0&&!_.C&&(_.C=pr(g(_.Va,_),6e3));Mn(_.h)<=1&&_.ta&&(_.ta=void 0)}else Li(_,11)}else if((c.L||_.g==c)&&gs(_),!D(x))for(G=_.Ba.g.parse(x),x=0;x<G.length;x++){let Qt=G[x];const Ee=Qt[0];if(!(Ee<=_.K))if(_.K=Ee,Qt=Qt[1],_.I==2)if(Qt[0]=="c"){_.M=Qt[1],_.ba=Qt[2];const wn=Qt[3];wn!=null&&(_.ka=wn,_.j.info("VER="+_.ka));const mi=Qt[4];mi!=null&&(_.za=mi,_.j.info("SVER="+_.za));const Wn=Qt[5];Wn!=null&&typeof Wn=="number"&&Wn>0&&(R=1.5*Wn,_.O=R,_.j.info("backChannelRequestTimeoutMs_="+R)),R=_;const Zn=c.g;if(Zn){const Jn=Zn.g?Zn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Jn){var W=R.h;W.g||Jn.indexOf("spdy")==-1&&Jn.indexOf("quic")==-1&&Jn.indexOf("h2")==-1||(W.j=W.l,W.g=new Set,W.h&&(us(W,W.h),W.h=null))}if(R.G){const Ho=Zn.g?Zn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ho&&(R.wa=Ho,Zt(R.J,R.G,Ho))}}_.I=3,_.l&&_.l.ra(),_.aa&&(_.T=Date.now()-c.F,_.j.info("Handshake RTT: "+_.T+"ms")),R=_;var ut=c;if(R.na=$u(R,R.L?R.ba:null,R.W),ut.L){Vi(R.h,ut);var Rt=ut,oe=R.O;oe&&(Rt.H=oe),Rt.D&&(di(Rt),da(Rt)),R.g=ut}else Pu(R);_.i.length>0&&Ia(_)}else Qt[0]!="stop"&&Qt[0]!="close"||Li(_,7);else _.I==3&&(Qt[0]=="stop"||Qt[0]=="close"?Qt[0]=="stop"?Li(_,7):Aa(_):Qt[0]!="noop"&&_.l&&_.l.qa(Qt),_.A=0)}}fr(4)}catch{}}var vd=class{constructor(c,x){this.g=c,this.map=x}};function pa(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ma(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Mn(c){return c.h?1:c.g?c.g.size:0}function ga(c,x){return c.h?c.h==x:c.g?c.g.has(x):!1}function us(c,x){c.g?c.g.add(x):c.h=x}function Vi(c,x){c.h&&c.h==x?c.h=null:c.g&&c.g.has(x)&&c.g.delete(x)}pa.prototype.cancel=function(){if(this.i=cs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function cs(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let x=c.i;for(const _ of c.g.values())x=x.concat(_.G);return x}return A(c.i)}var hs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _d(c,x){if(c){c=c.split("&");for(let _=0;_<c.length;_++){const R=c[_].indexOf("=");let G,W=null;R>=0?(G=c[_].substring(0,R),W=c[_].substring(R+1)):G=c[_],x(G,W?decodeURIComponent(W.replace(/\+/g," ")):"")}}}function Qn(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let x;c instanceof Qn?(this.l=c.l,vr(this,c.j),this.o=c.o,this.g=c.g,ya(this,c.u),this.h=c.h,_r(this,Mu(c.i)),this.m=c.m):c&&(x=String(c).match(hs))?(this.l=!1,vr(this,x[1]||"",!0),this.o=xa(x[2]||""),this.g=xa(x[3]||"",!0),ya(this,x[4]),this.h=xa(x[5]||"",!0),_r(this,x[6]||"",!0),this.m=xa(x[7]||"")):(this.l=!1,this.i=new On(null,this.l))}Qn.prototype.toString=function(){const c=[];var x=this.j;x&&c.push($e(x,Oo,!0),":");var _=this.g;return(_||x=="file")&&(c.push("//"),(x=this.o)&&c.push($e(x,Oo,!0),"@"),c.push(ha(_).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.u,_!=null&&c.push(":",String(_))),(_=this.h)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push($e(_,_.charAt(0)=="/"?wr:ko,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",$e(_,Du)),c.join("")},Qn.prototype.resolve=function(c){const x=fe(this);let _=!!c.j;_?vr(x,c.j):_=!!c.o,_?x.o=c.o:_=!!c.g,_?x.g=c.g:_=c.u!=null;var R=c.h;if(_)ya(x,c.u);else if(_=!!c.h){if(R.charAt(0)!="/")if(this.g&&!this.h)R="/"+R;else{var G=x.h.lastIndexOf("/");G!=-1&&(R=x.h.slice(0,G+1)+R)}if(G=R,G==".."||G==".")R="";else if(G.indexOf("./")!=-1||G.indexOf("/.")!=-1){R=G.lastIndexOf("/",0)==0,G=G.split("/");const W=[];for(let ut=0;ut<G.length;){const Rt=G[ut++];Rt=="."?R&&ut==G.length&&W.push(""):Rt==".."?((W.length>1||W.length==1&&W[0]!="")&&W.pop(),R&&ut==G.length&&W.push("")):(W.push(Rt),R=!0)}R=W.join("/")}else R=G}return _?x.h=R:_=c.i.toString()!=="",_?_r(x,Mu(c.i)):_=!!c.m,_&&(x.m=c.m),x};function fe(c){return new Qn(c)}function vr(c,x,_){c.j=_?xa(x,!0):x,c.j&&(c.j=c.j.replace(/:$/,""))}function ya(c,x){if(x){if(x=Number(x),isNaN(x)||x<0)throw Error("Bad port number "+x);c.u=x}else c.u=null}function _r(c,x,_){x instanceof On?(c.i=x,Uo(c.i,c.l)):(_||(x=$e(x,ju)),c.i=new On(x,c.l))}function Zt(c,x,_){c.i.set(x,_)}function Pi(c){return Zt(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function xa(c,x){return c?x?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function $e(c,x,_){return typeof c=="string"?(c=encodeURI(c).replace(x,Mo),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Mo(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Oo=/[#\/\?@]/g,ko=/[#\?:]/g,wr=/[#\?]/g,ju=/[#\?@]/g,Du=/#/g;function On(c,x){this.h=this.g=null,this.i=c||null,this.j=!!x}function Ui(c){c.g||(c.g=new Map,c.h=0,c.i&&_d(c.i,function(x,_){c.add(decodeURIComponent(x.replace(/\+/g," ")),_)}))}n=On.prototype,n.add=function(c,x){Ui(this),this.i=null,c=Xn(this,c);let _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(x),this.h+=1,this};function Vo(c,x){Ui(c),x=Xn(c,x),c.g.has(x)&&(c.i=null,c.h-=c.g.get(x).length,c.g.delete(x))}function Po(c,x){return Ui(c),x=Xn(c,x),c.g.has(x)}n.forEach=function(c,x){Ui(this),this.g.forEach(function(_,R){_.forEach(function(G){c.call(x,G,R,this)},this)},this)};function ds(c,x){Ui(c);let _=[];if(typeof x=="string")Po(c,x)&&(_=_.concat(c.g.get(Xn(c,x))));else for(c=Array.from(c.g.values()),x=0;x<c.length;x++)_=_.concat(c[x]);return _}n.set=function(c,x){return Ui(this),this.i=null,c=Xn(this,c),Po(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[x]),this.h+=1,this},n.get=function(c,x){return c?(c=ds(this,c),c.length>0?String(c[0]):x):x};function Nu(c,x,_){Vo(c,x),_.length>0&&(c.i=null,c.g.set(Xn(c,x),A(_)),c.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],x=Array.from(this.g.keys());for(let R=0;R<x.length;R++){var _=x[R];const G=ha(_);_=ds(this,_);for(let W=0;W<_.length;W++){let ut=G;_[W]!==""&&(ut+="="+ha(_[W])),c.push(ut)}}return this.i=c.join("&")};function Mu(c){const x=new On;return x.i=c.i,c.g&&(x.g=new Map(c.g),x.h=c.h),x}function Xn(c,x){return x=String(x),c.j&&(x=x.toLowerCase()),x}function Uo(c,x){x&&!c.j&&(Ui(c),c.i=null,c.g.forEach(function(_,R){const G=R.toLowerCase();R!=G&&(Vo(this,R),Nu(this,G,_))},c)),c.j=x}function zo(c,x){const _=new mr;if(d.Image){const R=new Image;R.onload=v(cn,_,"TestLoadImage: loaded",!0,x,R),R.onerror=v(cn,_,"TestLoadImage: error",!1,x,R),R.onabort=v(cn,_,"TestLoadImage: abort",!1,x,R),R.ontimeout=v(cn,_,"TestLoadImage: timeout",!1,x,R),d.setTimeout(function(){R.ontimeout&&R.ontimeout()},1e4),R.src=c}else x(!1)}function Er(c,x){const _=new mr,R=new AbortController,G=setTimeout(()=>{R.abort(),cn(_,"TestPingServer: timeout",!1,x)},1e4);fetch(c,{signal:R.signal}).then(W=>{clearTimeout(G),W.ok?cn(_,"TestPingServer: ok",!0,x):cn(_,"TestPingServer: server error",!1,x)}).catch(()=>{clearTimeout(G),cn(_,"TestPingServer: error",!1,x)})}function cn(c,x,_,R,G){try{G&&(G.onload=null,G.onerror=null,G.onabort=null,G.ontimeout=null),R(_)}catch{}}function Ou(){this.g=new gd}function va(c){this.i=c.Sb||null,this.h=c.ab||!1}E(va,Au),va.prototype.g=function(){return new _a(this.i,this.h)};function _a(c,x){Oe.call(this),this.H=c,this.o=x,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}E(_a,Oe),n=_a.prototype,n.open=function(c,x){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=x,this.readyState=1,zi(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const x={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(x.body=c),(this.H||d).fetch(new Request(this.D,x)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,hn(this)),this.readyState=0},n.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,zi(this)),this.g&&(this.readyState=3,zi(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;br(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function br(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}n.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var x=c.value?c.value:new Uint8Array(0);(x=this.B.decode(x,{stream:!c.done}))&&(this.response=this.responseText+=x)}c.done?hn(this):zi(this),this.readyState==3&&br(this)}},n.Oa=function(c){this.g&&(this.response=this.responseText=c,hn(this))},n.Na=function(c){this.g&&(this.response=c,hn(this))},n.ga=function(){this.g&&hn(this)};function hn(c){c.readyState=4,c.l=null,c.j=null,c.B=null,zi(c)}n.setRequestHeader=function(c,x){this.A.append(c,x)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],x=this.h.entries();for(var _=x.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=x.next();return c.join(`\r
`)};function zi(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(_a.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Tr(c){let x="";return Ct(c,function(_,R){x+=R,x+=":",x+=_,x+=`\r
`}),x}function kn(c,x,_){t:{for(R in _){var R=!1;break t}R=!0}R||(_=Tr(_),typeof c=="string"?_!=null&&ha(_):Zt(c,x,_))}function ie(c){Oe.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}E(ie,Oe);var fs=/^https?$/i,ku=["POST","PUT"];n=ie.prototype,n.Fa=function(c){this.H=c},n.ea=function(c,x,_,R){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);x=x?x.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ki.g(),this.g.onreadystatechange=T(g(this.Ca,this));try{this.B=!0,this.g.open(x,String(c),!0),this.B=!1}catch(W){wa(this,W);return}if(c=_||"",_=new Map(this.headers),R)if(Object.getPrototypeOf(R)===Object.prototype)for(var G in R)_.set(G,R[G]);else if(typeof R.keys=="function"&&typeof R.get=="function")for(const W of R.keys())_.set(W,R.get(W));else throw Error("Unknown input type for opt_headers: "+String(R));R=Array.from(_.keys()).find(W=>W.toLowerCase()=="content-type"),G=d.FormData&&c instanceof d.FormData,!(Array.prototype.indexOf.call(ku,x,void 0)>=0)||R||G||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[W,ut]of _)this.g.setRequestHeader(W,ut);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(W){wa(this,W)}};function wa(c,x){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=x,c.o=5,Ea(c),ke(c)}function Ea(c){c.A||(c.A=!0,Le(c,"complete"),Le(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,Le(this,"complete"),Le(this,"abort"),ke(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ke(this,!0)),ie.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Lo(this):this.Xa())},n.Xa=function(){Lo(this)};function Lo(c){if(c.h&&typeof u<"u"){if(c.v&&en(c)==4)setTimeout(c.Ca.bind(c),0);else if(Le(c,"readystatechange"),en(c)==4){c.h=!1;try{const W=c.ca();t:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var x=!0;break t;default:x=!1}var _;if(!(_=x)){var R;if(R=W===0){let ut=String(c.D).match(hs)[1]||null;!ut&&d.self&&d.self.location&&(ut=d.self.location.protocol.slice(0,-1)),R=!fs.test(ut?ut.toLowerCase():"")}_=R}if(_)Le(c,"complete"),Le(c,"success");else{c.o=6;try{var G=en(c)>2?c.g.statusText:""}catch{G=""}c.l=G+" ["+c.ca()+"]",Ea(c)}}finally{ke(c)}}}}function ke(c,x){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const _=c.g;c.g=null,x||Le(c,"ready");try{_.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function en(c){return c.g?c.g.readyState:0}n.ca=function(){try{return en(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(c){if(this.g){var x=this.g.responseText;return c&&x.indexOf(c)==0&&(x=x.substring(c.length)),un(x)}};function ba(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Ta(c){const x={};c=(c.g&&en(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let R=0;R<c.length;R++){if(D(c[R]))continue;var _=xd(c[R]);const G=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const W=x[G]||[];x[G]=W,W.push(_)}P(x,function(R){return R.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Sa(c,x,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||x}function ps(c){this.za=0,this.i=[],this.j=new mr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Sa("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Sa("baseRetryDelayMs",5e3,c),this.Za=Sa("retryDelaySeedMs",1e4,c),this.Ta=Sa("forwardChannelMaxRetries",2,c),this.va=Sa("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new pa(c&&c.concurrentRequestLimit),this.Ba=new Ou,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=ps.prototype,n.ka=8,n.I=1,n.connect=function(c,x,_,R){ve(0),this.W=c,this.H=x||{},_&&R!==void 0&&(this.H.OSID=_,this.H.OAID=R),this.F=this.X,this.J=$u(this,null,this.W),Ia(this)};function Aa(c){if(Ra(c),c.I==3){var x=c.V++,_=fe(c.J);if(Zt(_,"SID",c.M),Zt(_,"RID",x),Zt(_,"TYPE","terminate"),Ca(c,_),x=new Yn(c,c.j,x),x.M=2,x.A=Pi(fe(_)),_=!1,d.navigator&&d.navigator.sendBeacon)try{_=d.navigator.sendBeacon(x.A.toString(),"")}catch{}!_&&d.Image&&(new Image().src=x.A,_=!0),_||(x.g=ys(x.j,null),x.g.ea(x.A)),x.F=Date.now(),da(x)}Lu(c)}function pi(c){c.g&&(Bo(c),c.g.cancel(),c.g=null)}function Ra(c){pi(c),c.v&&(d.clearTimeout(c.v),c.v=null),gs(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&d.clearTimeout(c.m),c.m=null)}function Ia(c){if(!ma(c.h)&&!c.m){c.m=!0;var x=c.Ea;K||C(),ot||(K(),ot=!0),I.add(x,c),c.D=0}}function wd(c,x){return Mn(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=x.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=pr(g(c.Ea,c,x),zu(c,c.D)),c.D++,!0)}n.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const G=new Yn(this,this.j,c);let W=this.o;if(this.U&&(W?(W=at(W),ht(W,this.U)):W=this.U),this.u!==null||this.R||(G.J=W,W=null),this.S)t:{for(var x=0,_=0;_<this.i.length;_++){e:{var R=this.i[_];if("__data__"in R.map&&(R=R.map.__data__,typeof R=="string")){R=R.length;break e}R=void 0}if(R===void 0)break;if(x+=R,x>4096){x=_;break t}if(x===4096||_===this.i.length-1){x=_+1;break t}}x=1e3}else x=1e3;x=ms(this,G,x),_=fe(this.J),Zt(_,"RID",c),Zt(_,"CVER",22),this.G&&Zt(_,"X-HTTP-Session-Id",this.G),Ca(this,_),W&&(this.R?x="headers="+ha(Tr(W))+"&"+x:this.u&&kn(_,this.u,W)),us(this.h,G),this.Ra&&Zt(_,"TYPE","init"),this.S?(Zt(_,"$req",x),Zt(_,"SID","null"),G.U=!0,ci(G,_,null)):ci(G,_,x),this.I=2}}else this.I==3&&(c?Vu(this,c):this.i.length==0||ma(this.h)||Vu(this))};function Vu(c,x){var _;x?_=x.l:_=c.V++;const R=fe(c.J);Zt(R,"SID",c.M),Zt(R,"RID",_),Zt(R,"AID",c.K),Ca(c,R),c.u&&c.o&&kn(R,c.u,c.o),_=new Yn(c,c.j,_,c.D+1),c.u===null&&(_.J=c.o),x&&(c.i=x.G.concat(c.i)),x=ms(c,_,1e3),_.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),us(c.h,_),ci(_,R,x)}function Ca(c,x){c.H&&Ct(c.H,function(_,R){Zt(x,R,_)}),c.l&&Ct({},function(_,R){Zt(x,R,_)})}function ms(c,x,_){_=Math.min(c.i.length,_);const R=c.l?g(c.l.Ka,c.l,c):null;t:{var G=c.i;let Rt=-1;for(;;){const oe=["count="+_];Rt==-1?_>0?(Rt=G[0].g,oe.push("ofs="+Rt)):Rt=0:oe.push("ofs="+Rt);let Qt=!0;for(let Ee=0;Ee<_;Ee++){var W=G[Ee].g;const wn=G[Ee].map;if(W-=Rt,W<0)Rt=Math.max(0,G[Ee].g-100),Qt=!1;else try{W="req"+W+"_"||"";try{var ut=wn instanceof Map?wn:Object.entries(wn);for(const[mi,Wn]of ut){let Zn=Wn;p(Wn)&&(Zn=Dn(Wn)),oe.push(W+mi+"="+encodeURIComponent(Zn))}}catch(mi){throw oe.push(W+"type="+encodeURIComponent("_badmap")),mi}}catch{R&&R(wn)}}if(Qt){ut=oe.join("&");break t}}ut=void 0}return c=c.i.splice(0,_),x.G=c,ut}function Pu(c){if(!c.g&&!c.v){c.Y=1;var x=c.Da;K||C(),ot||(K(),ot=!0),I.add(x,c),c.A=0}}function $o(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=pr(g(c.Da,c),zu(c,c.A)),c.A++,!0)}n.Da=function(){if(this.v=null,Uu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=pr(g(this.Wa,this),c)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ve(10),pi(this),Uu(this))};function Bo(c){c.B!=null&&(d.clearTimeout(c.B),c.B=null)}function Uu(c){c.g=new Yn(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var x=fe(c.na);Zt(x,"RID","rpc"),Zt(x,"SID",c.M),Zt(x,"AID",c.K),Zt(x,"CI",c.F?"0":"1"),!c.F&&c.ia&&Zt(x,"TO",c.ia),Zt(x,"TYPE","xmlhttp"),Ca(c,x),c.u&&c.o&&kn(x,c.u,c.o),c.O&&(c.g.H=c.O);var _=c.g;c=c.ba,_.M=1,_.A=Pi(fe(x)),_.u=null,_.R=!0,yr(_,c)}n.Va=function(){this.C!=null&&(this.C=null,pi(this),$o(this),ve(19))};function gs(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function Fo(c,x){var _=null;if(c.g==x){gs(c),Bo(c),c.g=null;var R=2}else if(ga(c.h,x))_=x.G,Vi(c.h,x),R=1;else return;if(c.I!=0){if(x.o)if(R==1){_=x.u?x.u.length:0,x=Date.now()-x.F;var G=c.D;R=as(),Le(R,new Iu(R,_)),Ia(c)}else Pu(c);else if(G=x.m,G==3||G==0&&x.X>0||!(R==1&&wd(c,x)||R==2&&$o(c)))switch(_&&_.length>0&&(x=c.h,x.i=x.i.concat(_)),G){case 1:Li(c,5);break;case 4:Li(c,10);break;case 3:Li(c,6);break;default:Li(c,2)}}}function zu(c,x){let _=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(_*=2),_*x}function Li(c,x){if(c.j.info("Error code "+x),x==2){var _=g(c.bb,c),R=c.Ua;const G=!R;R=new Qn(R||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||vr(R,"https"),Pi(R),G?zo(R.toString(),_):Er(R.toString(),_)}else ve(2);c.I=0,c.l&&c.l.pa(x),Lu(c),Ra(c)}n.bb=function(c){c?(this.j.info("Successfully pinged google.com"),ve(2)):(this.j.info("Failed to ping google.com"),ve(1))};function Lu(c){if(c.I=0,c.ja=[],c.l){const x=cs(c.h);(x.length!=0||c.i.length!=0)&&(M(c.ja,x),M(c.ja,c.i),c.h.i.length=0,A(c.i),c.i.length=0),c.l.oa()}}function $u(c,x,_){var R=_ instanceof Qn?fe(_):new Qn(_);if(R.g!="")x&&(R.g=x+"."+R.g),ya(R,R.u);else{var G=d.location;R=G.protocol,x=x?x+"."+G.hostname:G.hostname,G=+G.port;const W=new Qn(null);R&&vr(W,R),x&&(W.g=x),G&&ya(W,G),_&&(W.h=_),R=W}return _=c.G,x=c.wa,_&&x&&Zt(R,_,x),Zt(R,"VER",c.ka),Ca(c,R),R}function ys(c,x,_){if(x&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return x=c.Aa&&!c.ma?new ie(new va({ab:_})):new ie(c.ma),x.Fa(c.L),x}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Bu(){}n=Bu.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function xs(){}xs.prototype.g=function(c,x){return new dn(c,x)};function dn(c,x){Oe.call(this),this.g=new ps(x),this.l=c,this.h=x&&x.messageUrlParams||null,c=x&&x.messageHeaders||null,x&&x.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=x&&x.initMessageHeaders||null,x&&x.messageContentType&&(c?c["X-WebChannel-Content-Type"]=x.messageContentType:c={"X-WebChannel-Content-Type":x.messageContentType}),x&&x.sa&&(c?c["X-WebChannel-Client-Profile"]=x.sa:c={"X-WebChannel-Client-Profile":x.sa}),this.g.U=c,(c=x&&x.Qb)&&!D(c)&&(this.g.u=c),this.A=x&&x.supportsCrossDomainXhr||!1,this.v=x&&x.sendRawJson||!1,(x=x&&x.httpSessionIdParam)&&!D(x)&&(this.g.G=x,c=this.h,c!==null&&x in c&&(c=this.h,x in c&&delete c[x])),this.j=new Sr(this)}E(dn,Oe),dn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},dn.prototype.close=function(){Aa(this.g)},dn.prototype.o=function(c){var x=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.v&&(_={},_.__data__=Dn(c),c=_);x.i.push(new vd(x.Ya++,c)),x.I==3&&Ia(x)},dn.prototype.N=function(){this.g.l=null,delete this.j,Aa(this.g),delete this.g,dn.Z.N.call(this)};function Ko(c){hr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var x=c.__sm__;if(x){t:{for(const _ in x){c=_;break t}c=void 0}(this.i=c)&&(c=this.i,x=x!==null&&c in x?x[c]:void 0),this.data=x}else this.data=c}E(Ko,hr);function Fu(){Gn.call(this),this.status=1}E(Fu,Gn);function Sr(c){this.g=c}E(Sr,Bu),Sr.prototype.ra=function(){Le(this.g,"a")},Sr.prototype.qa=function(c){Le(this.g,new Ko(c))},Sr.prototype.pa=function(c){Le(this.g,new Fu)},Sr.prototype.oa=function(){Le(this.g,"b")},xs.prototype.createWebChannel=xs.prototype.g,dn.prototype.send=dn.prototype.o,dn.prototype.open=dn.prototype.m,dn.prototype.close=dn.prototype.close,ow=function(){return new xs},sw=function(){return as()},aw=Nn,xm={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},_e.NO_ERROR=0,_e.TIMEOUT=8,_e.HTTP_ERROR=6,fh=_e,Ge.COMPLETE="complete",rw=Ge,Ru.EventType=oi,oi.OPEN="a",oi.CLOSE="b",oi.ERROR="c",oi.MESSAGE="d",Oe.prototype.listen=Oe.prototype.J,zl=Ru,ie.prototype.listenOnce=ie.prototype.K,ie.prototype.getLastError=ie.prototype.Ha,ie.prototype.getLastErrorCode=ie.prototype.ya,ie.prototype.getStatus=ie.prototype.ca,ie.prototype.getResponseJson=ie.prototype.La,ie.prototype.getResponseText=ie.prototype.la,ie.prototype.send=ie.prototype.ea,ie.prototype.setWithCredentials=ie.prototype.Fa,iw=ie}).apply(typeof Xc<"u"?Xc:typeof self<"u"?self:typeof window<"u"?window:{});const gv="@firebase/firestore",yv="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}sn.UNAUTHENTICATED=new sn(null),sn.GOOGLE_CREDENTIALS=new sn("google-credentials-uid"),sn.FIRST_PARTY=new sn("first-party-uid"),sn.MOCK_USER=new sn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bo="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa=new W2("@firebase/firestore");function Xs(){return Wa.logLevel}function pt(n,...t){if(Wa.logLevel<=Bt.DEBUG){const i=t.map(pg);Wa.debug(`Firestore (${bo}): ${n}`,...i)}}function or(n,...t){if(Wa.logLevel<=Bt.ERROR){const i=t.map(pg);Wa.error(`Firestore (${bo}): ${n}`,...i)}}function co(n,...t){if(Wa.logLevel<=Bt.WARN){const i=t.map(pg);Wa.warn(`Firestore (${bo}): ${n}`,...i)}}function pg(n){if(typeof n=="string")return n;try{/**
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
 */function Tt(n,t,i){let a="Unexpected state";typeof t=="string"?a=t:i=t,lw(n,a,i)}function lw(n,t,i){let a=`FIRESTORE (${bo}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(i!==void 0)try{a+=" CONTEXT: "+JSON.stringify(i)}catch{a+=" CONTEXT: "+i}throw or(a),new Error(a)}function Yt(n,t,i,a){let o="Unexpected state";typeof i=="string"?o=i:a=i,n||lw(t,o,a)}function It(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ft extends Eo{constructor(t,i){super(t,i),this.code=t,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class uw{constructor(t,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class PI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,i){t.enqueueRetryable((()=>i(sn.UNAUTHENTICATED)))}shutdown(){}}class UI{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,i){this.changeListener=i,t.enqueueRetryable((()=>i(this.token.user)))}shutdown(){this.changeListener=null}}class zI{constructor(t){this.t=t,this.currentUser=sn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,i){Yt(this.o===void 0,42304);let a=this.i;const o=m=>this.i!==a?(a=this.i,i(m)):Promise.resolve();let u=new ir;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new ir,t.enqueueRetryable((()=>o(this.currentUser)))};const d=()=>{const m=u;t.enqueueRetryable((async()=>{await m.promise,await o(this.currentUser)}))},p=m=>{pt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit((m=>p(m))),setTimeout((()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?p(m):(pt("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new ir)}}),0),d()}getToken(){const t=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then((a=>this.i!==t?(pt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(Yt(typeof a.accessToken=="string",31837,{l:a}),new uw(a.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Yt(t===null||typeof t=="string",2055,{h:t}),new sn(t)}}class LI{constructor(t,i,a){this.P=t,this.T=i,this.I=a,this.type="FirstParty",this.user=sn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class $I{constructor(t,i,a){this.P=t,this.T=i,this.I=a}getToken(){return Promise.resolve(new LI(this.P,this.T,this.I))}start(t,i){t.enqueueRetryable((()=>i(sn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class xv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class BI{constructor(t,i){this.V=i,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,_I(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,i){Yt(this.o===void 0,3512);const a=u=>{u.error!=null&&pt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const d=u.token!==this.m;return this.m=u.token,pt("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?i(u.token):Promise.resolve()};this.o=u=>{t.enqueueRetryable((()=>a(u)))};const o=u=>{pt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):pt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new xv(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((i=>i?(Yt(typeof i.token=="string",44558,{tokenResult:i}),this.m=i.token,new xv(i.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function FI(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),i=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(i);else for(let a=0;a<n;a++)i[a]=Math.floor(256*Math.random());return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=62*Math.floor(4.129032258064516);let a="";for(;a.length<20;){const o=FI(40);for(let u=0;u<o.length;++u)a.length<20&&o[u]<i&&(a+=t.charAt(o[u]%62))}return a}}function Pt(n,t){return n<t?-1:n>t?1:0}function vm(n,t){const i=Math.min(n.length,t.length);for(let a=0;a<i;a++){const o=n.charAt(a),u=t.charAt(a);if(o!==u)return kp(o)===kp(u)?Pt(o,u):kp(o)?1:-1}return Pt(n.length,t.length)}const KI=55296,HI=57343;function kp(n){const t=n.charCodeAt(0);return t>=KI&&t<=HI}function ho(n,t,i){return n.length===t.length&&n.every(((a,o)=>i(a,t[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv="__name__";class Ei{constructor(t,i,a){i===void 0?i=0:i>t.length&&Tt(637,{offset:i,range:t.length}),a===void 0?a=t.length-i:a>t.length-i&&Tt(1746,{length:a,range:t.length-i}),this.segments=t,this.offset=i,this.len=a}get length(){return this.len}isEqual(t){return Ei.comparator(this,t)===0}child(t){const i=this.segments.slice(this.offset,this.limit());return t instanceof Ei?t.forEach((a=>{i.push(a)})):i.push(t),this.construct(i)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}forEach(t){for(let i=this.offset,a=this.limit();i<a;i++)t(this.segments[i])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,i){const a=Math.min(t.length,i.length);for(let o=0;o<a;o++){const u=Ei.compareSegments(t.get(o),i.get(o));if(u!==0)return u}return Pt(t.length,i.length)}static compareSegments(t,i){const a=Ei.isNumericId(t),o=Ei.isNumericId(i);return a&&!o?-1:!a&&o?1:a&&o?Ei.extractNumericId(t).compare(Ei.extractNumericId(i)):vm(t,i)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Zr.fromString(t.substring(4,t.length-2))}}class ae extends Ei{construct(t,i,a){return new ae(t,i,a)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const i=[];for(const a of t){if(a.indexOf("//")>=0)throw new ft(it.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);i.push(...a.split("/").filter((o=>o.length>0)))}return new ae(i)}static emptyPath(){return new ae([])}}const qI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends Ei{construct(t,i,a){return new Ze(t,i,a)}static isValidIdentifier(t){return qI.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===vv}static keyField(){return new Ze([vv])}static fromServerFormat(t){const i=[];let a="",o=0;const u=()=>{if(a.length===0)throw new ft(it.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);i.push(a),a=""};let d=!1;for(;o<t.length;){const p=t[o];if(p==="\\"){if(o+1===t.length)throw new ft(it.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const m=t[o+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new ft(it.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);a+=m,o+=2}else p==="`"?(d=!d,o++):p!=="."||d?(a+=p,o++):(u(),o++)}if(u(),d)throw new ft(it.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ze(i)}static emptyPath(){return new Ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function cw(n,t,i){if(!i)throw new ft(it.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function GI(n,t,i,a){if(t===!0&&a===!0)throw new ft(it.INVALID_ARGUMENT,`${n} and ${i} cannot be used together.`)}function _v(n){if(!vt.isDocumentKey(n))throw new ft(it.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function wv(n){if(vt.isDocumentKey(n))throw new ft(it.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function hw(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Wh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(a){return a.constructor?a.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":Tt(12329,{type:typeof n})}function lr(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new ft(it.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=Wh(n);throw new ft(it.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${i}`)}}return n}/**
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
 */function Ne(n,t){const i={typeString:n};return t&&(i.value=t),i}function gu(n,t){if(!hw(n))throw new ft(it.INVALID_ARGUMENT,"JSON must be an object");let i;for(const a in t)if(t[a]){const o=t[a].typeString,u="value"in t[a]?{value:t[a].value}:void 0;if(!(a in n)){i=`JSON missing required field: '${a}'`;break}const d=n[a];if(o&&typeof d!==o){i=`JSON field '${a}' must be a ${o}.`;break}if(u!==void 0&&d!==u.value){i=`Expected '${a}' field to equal '${u.value}'`;break}}if(i)throw new ft(it.INVALID_ARGUMENT,i);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev=-62135596800,bv=1e6;class ue{static now(){return ue.fromMillis(Date.now())}static fromDate(t){return ue.fromMillis(t.getTime())}static fromMillis(t){const i=Math.floor(t/1e3),a=Math.floor((t-1e3*i)*bv);return new ue(i,a)}constructor(t,i){if(this.seconds=t,this.nanoseconds=i,i<0)throw new ft(it.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(i>=1e9)throw new ft(it.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(t<Ev)throw new ft(it.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ft(it.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/bv}_compareTo(t){return this.seconds===t.seconds?Pt(this.nanoseconds,t.nanoseconds):Pt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ue._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(gu(t,ue._jsonSchema))return new ue(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Ev;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ue._jsonSchemaVersion="firestore/timestamp/1.0",ue._jsonSchema={type:Ne("string",ue._jsonSchemaVersion),seconds:Ne("number"),nanoseconds:Ne("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{static fromTimestamp(t){return new At(t)}static min(){return new At(new ue(0,0))}static max(){return new At(new ue(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const au=-1;function YI(n,t){const i=n.toTimestamp().seconds,a=n.toTimestamp().nanoseconds+1,o=At.fromTimestamp(a===1e9?new ue(i+1,0):new ue(i,a));return new ta(o,vt.empty(),t)}function QI(n){return new ta(n.readTime,n.key,au)}class ta{constructor(t,i,a){this.readTime=t,this.documentKey=i,this.largestBatchId=a}static min(){return new ta(At.min(),vt.empty(),au)}static max(){return new ta(At.max(),vt.empty(),au)}}function XI(n,t){let i=n.readTime.compareTo(t.readTime);return i!==0?i:(i=vt.comparator(n.documentKey,t.documentKey),i!==0?i:Pt(n.largestBatchId,t.largestBatchId))}/**
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
 */const WI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ZI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function To(n){if(n.code!==it.FAILED_PRECONDITION||n.message!==WI)throw n;pt("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((i=>{this.isDone=!0,this.result=i,this.nextCallback&&this.nextCallback(i)}),(i=>{this.isDone=!0,this.error=i,this.catchCallback&&this.catchCallback(i)}))}catch(t){return this.next(void 0,t)}next(t,i){return this.callbackAttached&&Tt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(i,this.error):this.wrapSuccess(t,this.result):new st(((a,o)=>{this.nextCallback=u=>{this.wrapSuccess(t,u).next(a,o)},this.catchCallback=u=>{this.wrapFailure(i,u).next(a,o)}}))}toPromise(){return new Promise(((t,i)=>{this.next(t,i)}))}wrapUserFunction(t){try{const i=t();return i instanceof st?i:st.resolve(i)}catch(i){return st.reject(i)}}wrapSuccess(t,i){return t?this.wrapUserFunction((()=>t(i))):st.resolve(i)}wrapFailure(t,i){return t?this.wrapUserFunction((()=>t(i))):st.reject(i)}static resolve(t){return new st(((i,a)=>{i(t)}))}static reject(t){return new st(((i,a)=>{a(t)}))}static waitFor(t){return new st(((i,a)=>{let o=0,u=0,d=!1;t.forEach((p=>{++o,p.next((()=>{++u,d&&u===o&&i()}),(m=>a(m)))})),d=!0,u===o&&i()}))}static or(t){let i=st.resolve(!1);for(const a of t)i=i.next((o=>o?st.resolve(o):a()));return i}static forEach(t,i){const a=[];return t.forEach(((o,u)=>{a.push(i.call(this,o,u))})),this.waitFor(a)}static mapArray(t,i){return new st(((a,o)=>{const u=t.length,d=new Array(u);let p=0;for(let m=0;m<u;m++){const g=m;i(t[g]).next((v=>{d[g]=v,++p,p===u&&a(d)}),(v=>o(v)))}}))}static doWhile(t,i){return new st(((a,o)=>{const u=()=>{t()===!0?i().next((()=>{u()}),o):a()};u()}))}}function JI(n){const t=n.match(/Android ([\d.]+)/i),i=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(i)}function So(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Zh{constructor(t,i){this.previousValue=t,i&&(i.sequenceNumberHandler=a=>this.ae(a),this.ue=a=>i.writeSequenceNumber(a))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Zh.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg=-1;function Jh(n){return n==null}function jh(n){return n===0&&1/n==-1/0}function t3(n){return typeof n=="number"&&Number.isInteger(n)&&!jh(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw="";function e3(n){let t="";for(let i=0;i<n.length;i++)t.length>0&&(t=Tv(t)),t=n3(n.get(i),t);return Tv(t)}function n3(n,t){let i=t;const a=n.length;for(let o=0;o<a;o++){const u=n.charAt(o);switch(u){case"\0":i+="";break;case dw:i+="";break;default:i+=u}}return i}function Tv(n){return n+dw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv(n){let t=0;for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&t++;return t}function sa(n,t){for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&t(i,n[i])}function fw(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t,i){this.comparator=t,this.root=i||We.EMPTY}insert(t,i){return new me(this.comparator,this.root.insert(t,i,this.comparator).copy(null,null,We.BLACK,null,null))}remove(t){return new me(this.comparator,this.root.remove(t,this.comparator).copy(null,null,We.BLACK,null,null))}get(t){let i=this.root;for(;!i.isEmpty();){const a=this.comparator(t,i.key);if(a===0)return i.value;a<0?i=i.left:a>0&&(i=i.right)}return null}indexOf(t){let i=0,a=this.root;for(;!a.isEmpty();){const o=this.comparator(t,a.key);if(o===0)return i+a.left.size;o<0?a=a.left:(i+=a.left.size+1,a=a.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((i,a)=>(t(i,a),!1)))}toString(){const t=[];return this.inorderTraversal(((i,a)=>(t.push(`${i}:${a}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Wc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Wc(this.root,t,this.comparator,!1)}getReverseIterator(){return new Wc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Wc(this.root,t,this.comparator,!0)}}class Wc{constructor(t,i,a,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!t.isEmpty();)if(u=i?a(t.key,i):1,i&&o&&(u*=-1),u<0)t=this.isReverse?t.left:t.right;else{if(u===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const i={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return i}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class We{constructor(t,i,a,o,u){this.key=t,this.value=i,this.color=a??We.RED,this.left=o??We.EMPTY,this.right=u??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,i,a,o,u){return new We(t??this.key,i??this.value,a??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,i,a){let o=this;const u=a(t,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(t,i,a),null):u===0?o.copy(null,i,null,null,null):o.copy(null,null,null,null,o.right.insert(t,i,a)),o.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,i){let a,o=this;if(i(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,i),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),i(t,o.key)===0){if(o.right.isEmpty())return We.EMPTY;a=o.right.min(),o=o.copy(a.key,a.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,i))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,i)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Tt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Tt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw Tt(27949);return t+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw Tt(57766)}get value(){throw Tt(16141)}get color(){throw Tt(16727)}get left(){throw Tt(29726)}get right(){throw Tt(36894)}copy(t,i,a,o,u){return this}insert(t,i,a){return new We(t,i)}remove(t,i){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(t){this.comparator=t,this.data=new me(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((i,a)=>(t(i),!1)))}forEachInRange(t,i){const a=this.data.getIteratorFrom(t[0]);for(;a.hasNext();){const o=a.getNext();if(this.comparator(o.key,t[1])>=0)return;i(o.key)}}forEachWhile(t,i){let a;for(a=i!==void 0?this.data.getIteratorFrom(i):this.data.getIterator();a.hasNext();)if(!t(a.getNext().key))return}firstAfterOrEqual(t){const i=this.data.getIteratorFrom(t);return i.hasNext()?i.getNext().key:null}getIterator(){return new Av(this.data.getIterator())}getIteratorFrom(t){return new Av(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let i=this;return i.size<t.size&&(i=t,t=this),t.forEach((a=>{i=i.add(a)})),i}isEqual(t){if(!(t instanceof ze)||this.size!==t.size)return!1;const i=this.data.getIterator(),a=t.data.getIterator();for(;i.hasNext();){const o=i.getNext().key,u=a.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((i=>{t.push(i)})),t}toString(){const t=[];return this.forEach((i=>t.push(i))),"SortedSet("+t.toString()+")"}copy(t){const i=new ze(this.comparator);return i.data=t,i}}class Av{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class jn{constructor(t){this.fields=t,t.sort(Ze.comparator)}static empty(){return new jn([])}unionWith(t){let i=new ze(Ze.comparator);for(const a of this.fields)i=i.add(a);for(const a of t)i=i.add(a);return new jn(i.toArray())}covers(t){for(const i of this.fields)if(i.isPrefixOf(t))return!0;return!1}isEqual(t){return ho(this.fields,t.fields,((i,a)=>i.isEqual(a)))}}/**
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
 */class pw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Je{constructor(t){this.binaryString=t}static fromBase64String(t){const i=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new pw("Invalid base64 string: "+u):u}})(t);return new Je(i)}static fromUint8Array(t){const i=(function(o){let u="";for(let d=0;d<o.length;++d)u+=String.fromCharCode(o[d]);return u})(t);return new Je(i)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(i){return btoa(i)})(this.binaryString)}toUint8Array(){return(function(i){const a=new Uint8Array(i.length);for(let o=0;o<i.length;o++)a[o]=i.charCodeAt(o);return a})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Pt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Je.EMPTY_BYTE_STRING=new Je("");const i3=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ea(n){if(Yt(!!n,39018),typeof n=="string"){let t=0;const i=i3.exec(n);if(Yt(!!i,46558,{timestamp:n}),i[1]){let o=i[1];o=(o+"000000000").substr(0,9),t=Number(o)}const a=new Date(n);return{seconds:Math.floor(a.getTime()/1e3),nanos:t}}return{seconds:Se(n.seconds),nanos:Se(n.nanos)}}function Se(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function na(n){return typeof n=="string"?Je.fromBase64String(n):Je.fromUint8Array(n)}/**
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
 */const mw="server_timestamp",gw="__type__",yw="__previous_value__",xw="__local_write_time__";function yg(n){return(n?.mapValue?.fields||{})[gw]?.stringValue===mw}function td(n){const t=n.mapValue.fields[yw];return yg(t)?td(t):t}function su(n){const t=ea(n.mapValue.fields[xw].timestampValue);return new ue(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r3{constructor(t,i,a,o,u,d,p,m,g,v){this.databaseId=t,this.appId=i,this.persistenceKey=a,this.host=o,this.ssl=u,this.forceLongPolling=d,this.autoDetectLongPolling=p,this.longPollingOptions=m,this.useFetchStreams=g,this.isUsingEmulator=v}}const Dh="(default)";class ou{constructor(t,i){this.projectId=t,this.database=i||Dh}static empty(){return new ou("","")}get isDefaultDatabase(){return this.database===Dh}isEqual(t){return t instanceof ou&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const vw="__type__",a3="__max__",Zc={mapValue:{}},_w="__vector__",Nh="value";function ia(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?yg(n)?4:o3(n)?9007199254740991:s3(n)?10:11:Tt(28295,{value:n})}function Ci(n,t){if(n===t)return!0;const i=ia(n);if(i!==ia(t))return!1;switch(i){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return su(n).isEqual(su(t));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const d=ea(o.timestampValue),p=ea(u.timestampValue);return d.seconds===p.seconds&&d.nanos===p.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(o,u){return na(o.bytesValue).isEqual(na(u.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(o,u){return Se(o.geoPointValue.latitude)===Se(u.geoPointValue.latitude)&&Se(o.geoPointValue.longitude)===Se(u.geoPointValue.longitude)})(n,t);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return Se(o.integerValue)===Se(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const d=Se(o.doubleValue),p=Se(u.doubleValue);return d===p?jh(d)===jh(p):isNaN(d)&&isNaN(p)}return!1})(n,t);case 9:return ho(n.arrayValue.values||[],t.arrayValue.values||[],Ci);case 10:case 11:return(function(o,u){const d=o.mapValue.fields||{},p=u.mapValue.fields||{};if(Sv(d)!==Sv(p))return!1;for(const m in d)if(d.hasOwnProperty(m)&&(p[m]===void 0||!Ci(d[m],p[m])))return!1;return!0})(n,t);default:return Tt(52216,{left:n})}}function lu(n,t){return(n.values||[]).find((i=>Ci(i,t)))!==void 0}function fo(n,t){if(n===t)return 0;const i=ia(n),a=ia(t);if(i!==a)return Pt(i,a);switch(i){case 0:case 9007199254740991:return 0;case 1:return Pt(n.booleanValue,t.booleanValue);case 2:return(function(u,d){const p=Se(u.integerValue||u.doubleValue),m=Se(d.integerValue||d.doubleValue);return p<m?-1:p>m?1:p===m?0:isNaN(p)?isNaN(m)?0:-1:1})(n,t);case 3:return Rv(n.timestampValue,t.timestampValue);case 4:return Rv(su(n),su(t));case 5:return vm(n.stringValue,t.stringValue);case 6:return(function(u,d){const p=na(u),m=na(d);return p.compareTo(m)})(n.bytesValue,t.bytesValue);case 7:return(function(u,d){const p=u.split("/"),m=d.split("/");for(let g=0;g<p.length&&g<m.length;g++){const v=Pt(p[g],m[g]);if(v!==0)return v}return Pt(p.length,m.length)})(n.referenceValue,t.referenceValue);case 8:return(function(u,d){const p=Pt(Se(u.latitude),Se(d.latitude));return p!==0?p:Pt(Se(u.longitude),Se(d.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return Iv(n.arrayValue,t.arrayValue);case 10:return(function(u,d){const p=u.fields||{},m=d.fields||{},g=p[Nh]?.arrayValue,v=m[Nh]?.arrayValue,E=Pt(g?.values?.length||0,v?.values?.length||0);return E!==0?E:Iv(g,v)})(n.mapValue,t.mapValue);case 11:return(function(u,d){if(u===Zc.mapValue&&d===Zc.mapValue)return 0;if(u===Zc.mapValue)return 1;if(d===Zc.mapValue)return-1;const p=u.fields||{},m=Object.keys(p),g=d.fields||{},v=Object.keys(g);m.sort(),v.sort();for(let E=0;E<m.length&&E<v.length;++E){const T=vm(m[E],v[E]);if(T!==0)return T;const A=fo(p[m[E]],g[v[E]]);if(A!==0)return A}return Pt(m.length,v.length)})(n.mapValue,t.mapValue);default:throw Tt(23264,{he:i})}}function Rv(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return Pt(n,t);const i=ea(n),a=ea(t),o=Pt(i.seconds,a.seconds);return o!==0?o:Pt(i.nanos,a.nanos)}function Iv(n,t){const i=n.values||[],a=t.values||[];for(let o=0;o<i.length&&o<a.length;++o){const u=fo(i[o],a[o]);if(u)return u}return Pt(i.length,a.length)}function po(n){return _m(n)}function _m(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(i){const a=ea(i);return`time(${a.seconds},${a.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(i){return na(i).toBase64()})(n.bytesValue):"referenceValue"in n?(function(i){return vt.fromName(i).toString()})(n.referenceValue):"geoPointValue"in n?(function(i){return`geo(${i.latitude},${i.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(i){let a="[",o=!0;for(const u of i.values||[])o?o=!1:a+=",",a+=_m(u);return a+"]"})(n.arrayValue):"mapValue"in n?(function(i){const a=Object.keys(i.fields||{}).sort();let o="{",u=!0;for(const d of a)u?u=!1:o+=",",o+=`${d}:${_m(i.fields[d])}`;return o+"}"})(n.mapValue):Tt(61005,{value:n})}function ph(n){switch(ia(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=td(n);return t?16+ph(t):16;case 5:return 2*n.stringValue.length;case 6:return na(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(a){return(a.values||[]).reduce(((o,u)=>o+ph(u)),0)})(n.arrayValue);case 10:case 11:return(function(a){let o=0;return sa(a.fields,((u,d)=>{o+=u.length+ph(d)})),o})(n.mapValue);default:throw Tt(13486,{value:n})}}function Cv(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function wm(n){return!!n&&"integerValue"in n}function xg(n){return!!n&&"arrayValue"in n}function jv(n){return!!n&&"nullValue"in n}function Dv(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function mh(n){return!!n&&"mapValue"in n}function s3(n){return(n?.mapValue?.fields||{})[vw]?.stringValue===_w}function ql(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return sa(n.mapValue.fields,((i,a)=>t.mapValue.fields[i]=ql(a))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let i=0;i<(n.arrayValue.values||[]).length;++i)t.arrayValue.values[i]=ql(n.arrayValue.values[i]);return t}return{...n}}function o3(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===a3}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(t){this.value=t}static empty(){return new vn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let i=this.value;for(let a=0;a<t.length-1;++a)if(i=(i.mapValue.fields||{})[t.get(a)],!mh(i))return null;return i=(i.mapValue.fields||{})[t.lastSegment()],i||null}}set(t,i){this.getFieldsMap(t.popLast())[t.lastSegment()]=ql(i)}setAll(t){let i=Ze.emptyPath(),a={},o=[];t.forEach(((d,p)=>{if(!i.isImmediateParentOf(p)){const m=this.getFieldsMap(i);this.applyChanges(m,a,o),a={},o=[],i=p.popLast()}d?a[p.lastSegment()]=ql(d):o.push(p.lastSegment())}));const u=this.getFieldsMap(i);this.applyChanges(u,a,o)}delete(t){const i=this.field(t.popLast());mh(i)&&i.mapValue.fields&&delete i.mapValue.fields[t.lastSegment()]}isEqual(t){return Ci(this.value,t.value)}getFieldsMap(t){let i=this.value;i.mapValue.fields||(i.mapValue={fields:{}});for(let a=0;a<t.length;++a){let o=i.mapValue.fields[t.get(a)];mh(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},i.mapValue.fields[t.get(a)]=o),i=o}return i.mapValue.fields}applyChanges(t,i,a){sa(i,((o,u)=>t[o]=u));for(const o of a)delete t[o]}clone(){return new vn(ql(this.value))}}function ww(n){const t=[];return sa(n.fields,((i,a)=>{const o=new Ze([i]);if(mh(a)){const u=ww(a.mapValue).fields;if(u.length===0)t.push(o);else for(const d of u)t.push(o.child(d))}else t.push(o)})),new jn(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(t,i,a,o,u,d,p){this.key=t,this.documentType=i,this.version=a,this.readTime=o,this.createTime=u,this.data=d,this.documentState=p}static newInvalidDocument(t){return new on(t,0,At.min(),At.min(),At.min(),vn.empty(),0)}static newFoundDocument(t,i,a,o){return new on(t,1,i,At.min(),a,o,0)}static newNoDocument(t,i){return new on(t,2,i,At.min(),At.min(),vn.empty(),0)}static newUnknownDocument(t,i){return new on(t,3,i,At.min(),At.min(),vn.empty(),2)}convertToFoundDocument(t,i){return!this.createTime.isEqual(At.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=i,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=vn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=vn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=At.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof on&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new on(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Mh{constructor(t,i){this.position=t,this.inclusive=i}}function Nv(n,t,i){let a=0;for(let o=0;o<n.position.length;o++){const u=t[o],d=n.position[o];if(u.field.isKeyField()?a=vt.comparator(vt.fromName(d.referenceValue),i.key):a=fo(d,i.data.field(u.field)),u.dir==="desc"&&(a*=-1),a!==0)break}return a}function Mv(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let i=0;i<n.position.length;i++)if(!Ci(n.position[i],t.position[i]))return!1;return!0}/**
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
 */class uu{constructor(t,i="asc"){this.field=t,this.dir=i}}function l3(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Ew{}class De extends Ew{constructor(t,i,a){super(),this.field=t,this.op=i,this.value=a}static create(t,i,a){return t.isKeyField()?i==="in"||i==="not-in"?this.createKeyFieldInFilter(t,i,a):new c3(t,i,a):i==="array-contains"?new f3(t,a):i==="in"?new p3(t,a):i==="not-in"?new m3(t,a):i==="array-contains-any"?new g3(t,a):new De(t,i,a)}static createKeyFieldInFilter(t,i,a){return i==="in"?new h3(t,a):new d3(t,a)}matches(t){const i=t.data.field(this.field);return this.op==="!="?i!==null&&i.nullValue===void 0&&this.matchesComparison(fo(i,this.value)):i!==null&&ia(this.value)===ia(i)&&this.matchesComparison(fo(i,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Tt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ai extends Ew{constructor(t,i){super(),this.filters=t,this.op=i,this.Pe=null}static create(t,i){return new ai(t,i)}matches(t){return bw(this)?this.filters.find((i=>!i.matches(t)))===void 0:this.filters.find((i=>i.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,i)=>t.concat(i.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function bw(n){return n.op==="and"}function Tw(n){return u3(n)&&bw(n)}function u3(n){for(const t of n.filters)if(t instanceof ai)return!1;return!0}function Em(n){if(n instanceof De)return n.field.canonicalString()+n.op.toString()+po(n.value);if(Tw(n))return n.filters.map((t=>Em(t))).join(",");{const t=n.filters.map((i=>Em(i))).join(",");return`${n.op}(${t})`}}function Sw(n,t){return n instanceof De?(function(a,o){return o instanceof De&&a.op===o.op&&a.field.isEqual(o.field)&&Ci(a.value,o.value)})(n,t):n instanceof ai?(function(a,o){return o instanceof ai&&a.op===o.op&&a.filters.length===o.filters.length?a.filters.reduce(((u,d,p)=>u&&Sw(d,o.filters[p])),!0):!1})(n,t):void Tt(19439)}function Aw(n){return n instanceof De?(function(i){return`${i.field.canonicalString()} ${i.op} ${po(i.value)}`})(n):n instanceof ai?(function(i){return i.op.toString()+" {"+i.getFilters().map(Aw).join(" ,")+"}"})(n):"Filter"}class c3 extends De{constructor(t,i,a){super(t,i,a),this.key=vt.fromName(a.referenceValue)}matches(t){const i=vt.comparator(t.key,this.key);return this.matchesComparison(i)}}class h3 extends De{constructor(t,i){super(t,"in",i),this.keys=Rw("in",i)}matches(t){return this.keys.some((i=>i.isEqual(t.key)))}}class d3 extends De{constructor(t,i){super(t,"not-in",i),this.keys=Rw("not-in",i)}matches(t){return!this.keys.some((i=>i.isEqual(t.key)))}}function Rw(n,t){return(t.arrayValue?.values||[]).map((i=>vt.fromName(i.referenceValue)))}class f3 extends De{constructor(t,i){super(t,"array-contains",i)}matches(t){const i=t.data.field(this.field);return xg(i)&&lu(i.arrayValue,this.value)}}class p3 extends De{constructor(t,i){super(t,"in",i)}matches(t){const i=t.data.field(this.field);return i!==null&&lu(this.value.arrayValue,i)}}class m3 extends De{constructor(t,i){super(t,"not-in",i)}matches(t){if(lu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const i=t.data.field(this.field);return i!==null&&i.nullValue===void 0&&!lu(this.value.arrayValue,i)}}class g3 extends De{constructor(t,i){super(t,"array-contains-any",i)}matches(t){const i=t.data.field(this.field);return!(!xg(i)||!i.arrayValue.values)&&i.arrayValue.values.some((a=>lu(this.value.arrayValue,a)))}}/**
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
 */class y3{constructor(t,i=null,a=[],o=[],u=null,d=null,p=null){this.path=t,this.collectionGroup=i,this.orderBy=a,this.filters=o,this.limit=u,this.startAt=d,this.endAt=p,this.Te=null}}function Ov(n,t=null,i=[],a=[],o=null,u=null,d=null){return new y3(n,t,i,a,o,u,d)}function vg(n){const t=It(n);if(t.Te===null){let i=t.path.canonicalString();t.collectionGroup!==null&&(i+="|cg:"+t.collectionGroup),i+="|f:",i+=t.filters.map((a=>Em(a))).join(","),i+="|ob:",i+=t.orderBy.map((a=>(function(u){return u.field.canonicalString()+u.dir})(a))).join(","),Jh(t.limit)||(i+="|l:",i+=t.limit),t.startAt&&(i+="|lb:",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((a=>po(a))).join(",")),t.endAt&&(i+="|ub:",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((a=>po(a))).join(",")),t.Te=i}return t.Te}function _g(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<n.orderBy.length;i++)if(!l3(n.orderBy[i],t.orderBy[i]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let i=0;i<n.filters.length;i++)if(!Sw(n.filters[i],t.filters[i]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Mv(n.startAt,t.startAt)&&Mv(n.endAt,t.endAt)}function bm(n){return vt.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(t,i=null,a=[],o=[],u=null,d="F",p=null,m=null){this.path=t,this.collectionGroup=i,this.explicitOrderBy=a,this.filters=o,this.limit=u,this.limitType=d,this.startAt=p,this.endAt=m,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function x3(n,t,i,a,o,u,d,p){return new Ao(n,t,i,a,o,u,d,p)}function wg(n){return new Ao(n)}function kv(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Iw(n){return n.collectionGroup!==null}function Gl(n){const t=It(n);if(t.Ie===null){t.Ie=[];const i=new Set;for(const u of t.explicitOrderBy)t.Ie.push(u),i.add(u.field.canonicalString());const a=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(d){let p=new ze(Ze.comparator);return d.filters.forEach((m=>{m.getFlattenedFilters().forEach((g=>{g.isInequality()&&(p=p.add(g.field))}))})),p})(t).forEach((u=>{i.has(u.canonicalString())||u.isKeyField()||t.Ie.push(new uu(u,a))})),i.has(Ze.keyField().canonicalString())||t.Ie.push(new uu(Ze.keyField(),a))}return t.Ie}function Ti(n){const t=It(n);return t.Ee||(t.Ee=v3(t,Gl(n))),t.Ee}function v3(n,t){if(n.limitType==="F")return Ov(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new uu(o.field,u)}));const i=n.endAt?new Mh(n.endAt.position,n.endAt.inclusive):null,a=n.startAt?new Mh(n.startAt.position,n.startAt.inclusive):null;return Ov(n.path,n.collectionGroup,t,n.filters,n.limit,i,a)}}function Tm(n,t){const i=n.filters.concat([t]);return new Ao(n.path,n.collectionGroup,n.explicitOrderBy.slice(),i,n.limit,n.limitType,n.startAt,n.endAt)}function Sm(n,t,i){return new Ao(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,i,n.startAt,n.endAt)}function ed(n,t){return _g(Ti(n),Ti(t))&&n.limitType===t.limitType}function Cw(n){return`${vg(Ti(n))}|lt:${n.limitType}`}function Ws(n){return`Query(target=${(function(i){let a=i.path.canonicalString();return i.collectionGroup!==null&&(a+=" collectionGroup="+i.collectionGroup),i.filters.length>0&&(a+=`, filters: [${i.filters.map((o=>Aw(o))).join(", ")}]`),Jh(i.limit)||(a+=", limit: "+i.limit),i.orderBy.length>0&&(a+=`, orderBy: [${i.orderBy.map((o=>(function(d){return`${d.field.canonicalString()} (${d.dir})`})(o))).join(", ")}]`),i.startAt&&(a+=", startAt: ",a+=i.startAt.inclusive?"b:":"a:",a+=i.startAt.position.map((o=>po(o))).join(",")),i.endAt&&(a+=", endAt: ",a+=i.endAt.inclusive?"a:":"b:",a+=i.endAt.position.map((o=>po(o))).join(",")),`Target(${a})`})(Ti(n))}; limitType=${n.limitType})`}function nd(n,t){return t.isFoundDocument()&&(function(a,o){const u=o.key.path;return a.collectionGroup!==null?o.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(u):vt.isDocumentKey(a.path)?a.path.isEqual(u):a.path.isImmediateParentOf(u)})(n,t)&&(function(a,o){for(const u of Gl(a))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(n,t)&&(function(a,o){for(const u of a.filters)if(!u.matches(o))return!1;return!0})(n,t)&&(function(a,o){return!(a.startAt&&!(function(d,p,m){const g=Nv(d,p,m);return d.inclusive?g<=0:g<0})(a.startAt,Gl(a),o)||a.endAt&&!(function(d,p,m){const g=Nv(d,p,m);return d.inclusive?g>=0:g>0})(a.endAt,Gl(a),o))})(n,t)}function _3(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function jw(n){return(t,i)=>{let a=!1;for(const o of Gl(n)){const u=w3(o,t,i);if(u!==0)return u;a=a||o.field.isKeyField()}return 0}}function w3(n,t,i){const a=n.field.isKeyField()?vt.comparator(t.key,i.key):(function(u,d,p){const m=d.data.field(u),g=p.data.field(u);return m!==null&&g!==null?fo(m,g):Tt(42886)})(n.field,t,i);switch(n.dir){case"asc":return a;case"desc":return-1*a;default:return Tt(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(t,i){this.mapKeyFn=t,this.equalsFn=i,this.inner={},this.innerSize=0}get(t){const i=this.mapKeyFn(t),a=this.inner[i];if(a!==void 0){for(const[o,u]of a)if(this.equalsFn(o,t))return u}}has(t){return this.get(t)!==void 0}set(t,i){const a=this.mapKeyFn(t),o=this.inner[a];if(o===void 0)return this.inner[a]=[[t,i]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],t))return void(o[u]=[t,i]);o.push([t,i]),this.innerSize++}delete(t){const i=this.mapKeyFn(t),a=this.inner[i];if(a===void 0)return!1;for(let o=0;o<a.length;o++)if(this.equalsFn(a[o][0],t))return a.length===1?delete this.inner[i]:a.splice(o,1),this.innerSize--,!0;return!1}forEach(t){sa(this.inner,((i,a)=>{for(const[o,u]of a)t(o,u)}))}isEmpty(){return fw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E3=new me(vt.comparator);function ur(){return E3}const Dw=new me(vt.comparator);function Ll(...n){let t=Dw;for(const i of n)t=t.insert(i.key,i);return t}function Nw(n){let t=Dw;return n.forEach(((i,a)=>t=t.insert(i,a.overlayedDocument))),t}function Ga(){return Yl()}function Mw(){return Yl()}function Yl(){return new es((n=>n.toString()),((n,t)=>n.isEqual(t)))}const b3=new me(vt.comparator),T3=new ze(vt.comparator);function Ut(...n){let t=T3;for(const i of n)t=t.add(i);return t}const S3=new ze(Pt);function A3(){return S3}/**
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
 */function Eg(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jh(t)?"-0":t}}function Ow(n){return{integerValue:""+n}}function kw(n,t){return t3(t)?Ow(t):Eg(n,t)}/**
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
 */class id{constructor(){this._=void 0}}function R3(n,t,i){return n instanceof Oh?(function(o,u){const d={fields:{[gw]:{stringValue:mw},[xw]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&yg(u)&&(u=td(u)),u&&(d.fields[yw]=u),{mapValue:d}})(i,t):n instanceof cu?Pw(n,t):n instanceof hu?Uw(n,t):(function(o,u){const d=Vw(o,u),p=Vv(d)+Vv(o.Ae);return wm(d)&&wm(o.Ae)?Ow(p):Eg(o.serializer,p)})(n,t)}function I3(n,t,i){return n instanceof cu?Pw(n,t):n instanceof hu?Uw(n,t):i}function Vw(n,t){return n instanceof du?(function(a){return wm(a)||(function(u){return!!u&&"doubleValue"in u})(a)})(t)?t:{integerValue:0}:null}class Oh extends id{}class cu extends id{constructor(t){super(),this.elements=t}}function Pw(n,t){const i=zw(t);for(const a of n.elements)i.some((o=>Ci(o,a)))||i.push(a);return{arrayValue:{values:i}}}class hu extends id{constructor(t){super(),this.elements=t}}function Uw(n,t){let i=zw(t);for(const a of n.elements)i=i.filter((o=>!Ci(o,a)));return{arrayValue:{values:i}}}class du extends id{constructor(t,i){super(),this.serializer=t,this.Ae=i}}function Vv(n){return Se(n.integerValue||n.doubleValue)}function zw(n){return xg(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C3{constructor(t,i){this.field=t,this.transform=i}}function j3(n,t){return n.field.isEqual(t.field)&&(function(a,o){return a instanceof cu&&o instanceof cu||a instanceof hu&&o instanceof hu?ho(a.elements,o.elements,Ci):a instanceof du&&o instanceof du?Ci(a.Ae,o.Ae):a instanceof Oh&&o instanceof Oh})(n.transform,t.transform)}class D3{constructor(t,i){this.version=t,this.transformResults=i}}class Si{constructor(t,i){this.updateTime=t,this.exists=i}static none(){return new Si}static exists(t){return new Si(void 0,t)}static updateTime(t){return new Si(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function gh(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class rd{}function Lw(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Bw(n.key,Si.none()):new yu(n.key,n.data,Si.none());{const i=n.data,a=vn.empty();let o=new ze(Ze.comparator);for(let u of t.fields)if(!o.has(u)){let d=i.field(u);d===null&&u.length>1&&(u=u.popLast(),d=i.field(u)),d===null?a.delete(u):a.set(u,d),o=o.add(u)}return new oa(n.key,a,new jn(o.toArray()),Si.none())}}function N3(n,t,i){n instanceof yu?(function(o,u,d){const p=o.value.clone(),m=Uv(o.fieldTransforms,u,d.transformResults);p.setAll(m),u.convertToFoundDocument(d.version,p).setHasCommittedMutations()})(n,t,i):n instanceof oa?(function(o,u,d){if(!gh(o.precondition,u))return void u.convertToUnknownDocument(d.version);const p=Uv(o.fieldTransforms,u,d.transformResults),m=u.data;m.setAll($w(o)),m.setAll(p),u.convertToFoundDocument(d.version,m).setHasCommittedMutations()})(n,t,i):(function(o,u,d){u.convertToNoDocument(d.version).setHasCommittedMutations()})(0,t,i)}function Ql(n,t,i,a){return n instanceof yu?(function(u,d,p,m){if(!gh(u.precondition,d))return p;const g=u.value.clone(),v=zv(u.fieldTransforms,m,d);return g.setAll(v),d.convertToFoundDocument(d.version,g).setHasLocalMutations(),null})(n,t,i,a):n instanceof oa?(function(u,d,p,m){if(!gh(u.precondition,d))return p;const g=zv(u.fieldTransforms,m,d),v=d.data;return v.setAll($w(u)),v.setAll(g),d.convertToFoundDocument(d.version,v).setHasLocalMutations(),p===null?null:p.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((E=>E.field)))})(n,t,i,a):(function(u,d,p){return gh(u.precondition,d)?(d.convertToNoDocument(d.version).setHasLocalMutations(),null):p})(n,t,i)}function M3(n,t){let i=null;for(const a of n.fieldTransforms){const o=t.data.field(a.field),u=Vw(a.transform,o||null);u!=null&&(i===null&&(i=vn.empty()),i.set(a.field,u))}return i||null}function Pv(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(a,o){return a===void 0&&o===void 0||!(!a||!o)&&ho(a,o,((u,d)=>j3(u,d)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class yu extends rd{constructor(t,i,a,o=[]){super(),this.key=t,this.value=i,this.precondition=a,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class oa extends rd{constructor(t,i,a,o,u=[]){super(),this.key=t,this.data=i,this.fieldMask=a,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function $w(n){const t=new Map;return n.fieldMask.fields.forEach((i=>{if(!i.isEmpty()){const a=n.data.field(i);t.set(i,a)}})),t}function Uv(n,t,i){const a=new Map;Yt(n.length===i.length,32656,{Re:i.length,Ve:n.length});for(let o=0;o<i.length;o++){const u=n[o],d=u.transform,p=t.data.field(u.field);a.set(u.field,I3(d,p,i[o]))}return a}function zv(n,t,i){const a=new Map;for(const o of n){const u=o.transform,d=i.data.field(o.field);a.set(o.field,R3(u,d,t))}return a}class Bw extends rd{constructor(t,i){super(),this.key=t,this.precondition=i,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class O3 extends rd{constructor(t,i){super(),this.key=t,this.precondition=i,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k3{constructor(t,i,a,o){this.batchId=t,this.localWriteTime=i,this.baseMutations=a,this.mutations=o}applyToRemoteDocument(t,i){const a=i.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(t.key)&&N3(u,t,a[o])}}applyToLocalView(t,i){for(const a of this.baseMutations)a.key.isEqual(t.key)&&(i=Ql(a,t,i,this.localWriteTime));for(const a of this.mutations)a.key.isEqual(t.key)&&(i=Ql(a,t,i,this.localWriteTime));return i}applyToLocalDocumentSet(t,i){const a=Mw();return this.mutations.forEach((o=>{const u=t.get(o.key),d=u.overlayedDocument;let p=this.applyToLocalView(d,u.mutatedFields);p=i.has(o.key)?null:p;const m=Lw(d,p);m!==null&&a.set(o.key,m),d.isValidDocument()||d.convertToNoDocument(At.min())})),a}keys(){return this.mutations.reduce(((t,i)=>t.add(i.key)),Ut())}isEqual(t){return this.batchId===t.batchId&&ho(this.mutations,t.mutations,((i,a)=>Pv(i,a)))&&ho(this.baseMutations,t.baseMutations,((i,a)=>Pv(i,a)))}}class bg{constructor(t,i,a,o){this.batch=t,this.commitVersion=i,this.mutationResults=a,this.docVersions=o}static from(t,i,a){Yt(t.mutations.length===a.length,58842,{me:t.mutations.length,fe:a.length});let o=(function(){return b3})();const u=t.mutations;for(let d=0;d<u.length;d++)o=o.insert(u[d].key,a[d].version);return new bg(t,i,a,o)}}/**
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
 */let V3=class{constructor(t,i){this.largestBatchId=t,this.mutation=i}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class P3{constructor(t,i){this.count=t,this.unchangedNames=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce,$t;function U3(n){switch(n){case it.OK:return Tt(64938);case it.CANCELLED:case it.UNKNOWN:case it.DEADLINE_EXCEEDED:case it.RESOURCE_EXHAUSTED:case it.INTERNAL:case it.UNAVAILABLE:case it.UNAUTHENTICATED:return!1;case it.INVALID_ARGUMENT:case it.NOT_FOUND:case it.ALREADY_EXISTS:case it.PERMISSION_DENIED:case it.FAILED_PRECONDITION:case it.ABORTED:case it.OUT_OF_RANGE:case it.UNIMPLEMENTED:case it.DATA_LOSS:return!0;default:return Tt(15467,{code:n})}}function Fw(n){if(n===void 0)return or("GRPC error has no .code"),it.UNKNOWN;switch(n){case Ce.OK:return it.OK;case Ce.CANCELLED:return it.CANCELLED;case Ce.UNKNOWN:return it.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return it.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return it.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return it.INTERNAL;case Ce.UNAVAILABLE:return it.UNAVAILABLE;case Ce.UNAUTHENTICATED:return it.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return it.INVALID_ARGUMENT;case Ce.NOT_FOUND:return it.NOT_FOUND;case Ce.ALREADY_EXISTS:return it.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return it.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return it.FAILED_PRECONDITION;case Ce.ABORTED:return it.ABORTED;case Ce.OUT_OF_RANGE:return it.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return it.UNIMPLEMENTED;case Ce.DATA_LOSS:return it.DATA_LOSS;default:return Tt(39323,{code:n})}}($t=Ce||(Ce={}))[$t.OK=0]="OK",$t[$t.CANCELLED=1]="CANCELLED",$t[$t.UNKNOWN=2]="UNKNOWN",$t[$t.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$t[$t.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$t[$t.NOT_FOUND=5]="NOT_FOUND",$t[$t.ALREADY_EXISTS=6]="ALREADY_EXISTS",$t[$t.PERMISSION_DENIED=7]="PERMISSION_DENIED",$t[$t.UNAUTHENTICATED=16]="UNAUTHENTICATED",$t[$t.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$t[$t.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$t[$t.ABORTED=10]="ABORTED",$t[$t.OUT_OF_RANGE=11]="OUT_OF_RANGE",$t[$t.UNIMPLEMENTED=12]="UNIMPLEMENTED",$t[$t.INTERNAL=13]="INTERNAL",$t[$t.UNAVAILABLE=14]="UNAVAILABLE",$t[$t.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function z3(){return new TextEncoder}/**
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
 */const L3=new Zr([4294967295,4294967295],0);function Lv(n){const t=z3().encode(n),i=new nw;return i.update(t),new Uint8Array(i.digest())}function $v(n){const t=new DataView(n.buffer),i=t.getUint32(0,!0),a=t.getUint32(4,!0),o=t.getUint32(8,!0),u=t.getUint32(12,!0);return[new Zr([i,a],0),new Zr([o,u],0)]}class Tg{constructor(t,i,a){if(this.bitmap=t,this.padding=i,this.hashCount=a,i<0||i>=8)throw new $l(`Invalid padding: ${i}`);if(a<0)throw new $l(`Invalid hash count: ${a}`);if(t.length>0&&this.hashCount===0)throw new $l(`Invalid hash count: ${a}`);if(t.length===0&&i!==0)throw new $l(`Invalid padding when bitmap length is 0: ${i}`);this.ge=8*t.length-i,this.pe=Zr.fromNumber(this.ge)}ye(t,i,a){let o=t.add(i.multiply(Zr.fromNumber(a)));return o.compare(L3)===1&&(o=new Zr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const i=Lv(t),[a,o]=$v(i);for(let u=0;u<this.hashCount;u++){const d=this.ye(a,o,u);if(!this.we(d))return!1}return!0}static create(t,i,a){const o=t%8==0?0:8-t%8,u=new Uint8Array(Math.ceil(t/8)),d=new Tg(u,o,i);return a.forEach((p=>d.insert(p))),d}insert(t){if(this.ge===0)return;const i=Lv(t),[a,o]=$v(i);for(let u=0;u<this.hashCount;u++){const d=this.ye(a,o,u);this.Se(d)}}Se(t){const i=Math.floor(t/8),a=t%8;this.bitmap[i]|=1<<a}}class $l extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(t,i,a,o,u){this.snapshotVersion=t,this.targetChanges=i,this.targetMismatches=a,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(t,i,a){const o=new Map;return o.set(t,xu.createSynthesizedTargetChangeForCurrentChange(t,i,a)),new ad(At.min(),o,new me(Pt),ur(),Ut())}}class xu{constructor(t,i,a,o,u){this.resumeToken=t,this.current=i,this.addedDocuments=a,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(t,i,a){return new xu(a,i,Ut(),Ut(),Ut())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(t,i,a,o){this.be=t,this.removedTargetIds=i,this.key=a,this.De=o}}class Kw{constructor(t,i){this.targetId=t,this.Ce=i}}class Hw{constructor(t,i,a=Je.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=i,this.resumeToken=a,this.cause=o}}class Bv{constructor(){this.ve=0,this.Fe=Fv(),this.Me=Je.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=Ut(),i=Ut(),a=Ut();return this.Fe.forEach(((o,u)=>{switch(u){case 0:t=t.add(o);break;case 2:i=i.add(o);break;case 1:a=a.add(o);break;default:Tt(38017,{changeType:u})}})),new xu(this.Me,this.xe,t,i,a)}qe(){this.Oe=!1,this.Fe=Fv()}Qe(t,i){this.Oe=!0,this.Fe=this.Fe.insert(t,i)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,Yt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class $3{constructor(t){this.Ge=t,this.ze=new Map,this.je=ur(),this.Je=Jc(),this.He=Jc(),this.Ye=new me(Pt)}Ze(t){for(const i of t.be)t.De&&t.De.isFoundDocument()?this.Xe(i,t.De):this.et(i,t.key,t.De);for(const i of t.removedTargetIds)this.et(i,t.key,t.De)}tt(t){this.forEachTarget(t,(i=>{const a=this.nt(i);switch(t.state){case 0:this.rt(i)&&a.Le(t.resumeToken);break;case 1:a.Ke(),a.Ne||a.qe(),a.Le(t.resumeToken);break;case 2:a.Ke(),a.Ne||this.removeTarget(i);break;case 3:this.rt(i)&&(a.We(),a.Le(t.resumeToken));break;case 4:this.rt(i)&&(this.it(i),a.Le(t.resumeToken));break;default:Tt(56790,{state:t.state})}}))}forEachTarget(t,i){t.targetIds.length>0?t.targetIds.forEach(i):this.ze.forEach(((a,o)=>{this.rt(o)&&i(o)}))}st(t){const i=t.targetId,a=t.Ce.count,o=this.ot(i);if(o){const u=o.target;if(bm(u))if(a===0){const d=new vt(u.path);this.et(i,d,on.newNoDocument(d,At.min()))}else Yt(a===1,20013,{expectedCount:a});else{const d=this._t(i);if(d!==a){const p=this.ut(t),m=p?this.ct(p,t,d):1;if(m!==0){this.it(i);const g=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(i,g)}}}}}ut(t){const i=t.Ce.unchangedNames;if(!i||!i.bits)return null;const{bits:{bitmap:a="",padding:o=0},hashCount:u=0}=i;let d,p;try{d=na(a).toUint8Array()}catch(m){if(m instanceof pw)return co("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{p=new Tg(d,o,u)}catch(m){return co(m instanceof $l?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return p.ge===0?null:p}ct(t,i,a){return i.Ce.count===a-this.Pt(t,i.targetId)?0:2}Pt(t,i){const a=this.Ge.getRemoteKeysForTarget(i);let o=0;return a.forEach((u=>{const d=this.Ge.ht(),p=`projects/${d.projectId}/databases/${d.database}/documents/${u.path.canonicalString()}`;t.mightContain(p)||(this.et(i,u,null),o++)})),o}Tt(t){const i=new Map;this.ze.forEach(((u,d)=>{const p=this.ot(d);if(p){if(u.current&&bm(p.target)){const m=new vt(p.target.path);this.It(m).has(d)||this.Et(d,m)||this.et(d,m,on.newNoDocument(m,t))}u.Be&&(i.set(d,u.ke()),u.qe())}}));let a=Ut();this.He.forEach(((u,d)=>{let p=!0;d.forEachWhile((m=>{const g=this.ot(m);return!g||g.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)})),p&&(a=a.add(u))})),this.je.forEach(((u,d)=>d.setReadTime(t)));const o=new ad(t,i,this.Ye,this.je,a);return this.je=ur(),this.Je=Jc(),this.He=Jc(),this.Ye=new me(Pt),o}Xe(t,i){if(!this.rt(t))return;const a=this.Et(t,i.key)?2:0;this.nt(t).Qe(i.key,a),this.je=this.je.insert(i.key,i),this.Je=this.Je.insert(i.key,this.It(i.key).add(t)),this.He=this.He.insert(i.key,this.dt(i.key).add(t))}et(t,i,a){if(!this.rt(t))return;const o=this.nt(t);this.Et(t,i)?o.Qe(i,1):o.$e(i),this.He=this.He.insert(i,this.dt(i).delete(t)),this.He=this.He.insert(i,this.dt(i).add(t)),a&&(this.je=this.je.insert(i,a))}removeTarget(t){this.ze.delete(t)}_t(t){const i=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+i.addedDocuments.size-i.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let i=this.ze.get(t);return i||(i=new Bv,this.ze.set(t,i)),i}dt(t){let i=this.He.get(t);return i||(i=new ze(Pt),this.He=this.He.insert(t,i)),i}It(t){let i=this.Je.get(t);return i||(i=new ze(Pt),this.Je=this.Je.insert(t,i)),i}rt(t){const i=this.ot(t)!==null;return i||pt("WatchChangeAggregator","Detected inactive target",t),i}ot(t){const i=this.ze.get(t);return i&&i.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Bv),this.Ge.getRemoteKeysForTarget(t).forEach((i=>{this.et(t,i,null)}))}Et(t,i){return this.Ge.getRemoteKeysForTarget(t).has(i)}}function Jc(){return new me(vt.comparator)}function Fv(){return new me(vt.comparator)}const B3={asc:"ASCENDING",desc:"DESCENDING"},F3={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},K3={and:"AND",or:"OR"};class H3{constructor(t,i){this.databaseId=t,this.useProto3Json=i}}function Am(n,t){return n.useProto3Json||Jh(t)?t:{value:t}}function kh(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function qw(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function q3(n,t){return kh(n,t.toTimestamp())}function Ai(n){return Yt(!!n,49232),At.fromTimestamp((function(i){const a=ea(i);return new ue(a.seconds,a.nanos)})(n))}function Sg(n,t){return Rm(n,t).canonicalString()}function Rm(n,t){const i=(function(o){return new ae(["projects",o.projectId,"databases",o.database])})(n).child("documents");return t===void 0?i:i.child(t)}function Gw(n){const t=ae.fromString(n);return Yt(Zw(t),10190,{key:t.toString()}),t}function Im(n,t){return Sg(n.databaseId,t.path)}function Vp(n,t){const i=Gw(t);if(i.get(1)!==n.databaseId.projectId)throw new ft(it.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+i.get(1)+" vs "+n.databaseId.projectId);if(i.get(3)!==n.databaseId.database)throw new ft(it.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+i.get(3)+" vs "+n.databaseId.database);return new vt(Qw(i))}function Yw(n,t){return Sg(n.databaseId,t)}function G3(n){const t=Gw(n);return t.length===4?ae.emptyPath():Qw(t)}function Cm(n){return new ae(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Qw(n){return Yt(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Kv(n,t,i){return{name:Im(n,t),fields:i.value.mapValue.fields}}function Y3(n,t){let i;if("targetChange"in t){t.targetChange;const a=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Tt(39313,{state:g})})(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],u=(function(g,v){return g.useProto3Json?(Yt(v===void 0||typeof v=="string",58123),Je.fromBase64String(v||"")):(Yt(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),Je.fromUint8Array(v||new Uint8Array))})(n,t.targetChange.resumeToken),d=t.targetChange.cause,p=d&&(function(g){const v=g.code===void 0?it.UNKNOWN:Fw(g.code);return new ft(v,g.message||"")})(d);i=new Hw(a,o,u,p||null)}else if("documentChange"in t){t.documentChange;const a=t.documentChange;a.document,a.document.name,a.document.updateTime;const o=Vp(n,a.document.name),u=Ai(a.document.updateTime),d=a.document.createTime?Ai(a.document.createTime):At.min(),p=new vn({mapValue:{fields:a.document.fields}}),m=on.newFoundDocument(o,u,d,p),g=a.targetIds||[],v=a.removedTargetIds||[];i=new yh(g,v,m.key,m)}else if("documentDelete"in t){t.documentDelete;const a=t.documentDelete;a.document;const o=Vp(n,a.document),u=a.readTime?Ai(a.readTime):At.min(),d=on.newNoDocument(o,u),p=a.removedTargetIds||[];i=new yh([],p,d.key,d)}else if("documentRemove"in t){t.documentRemove;const a=t.documentRemove;a.document;const o=Vp(n,a.document),u=a.removedTargetIds||[];i=new yh([],u,o,null)}else{if(!("filter"in t))return Tt(11601,{Rt:t});{t.filter;const a=t.filter;a.targetId;const{count:o=0,unchangedNames:u}=a,d=new P3(o,u),p=a.targetId;i=new Kw(p,d)}}return i}function Q3(n,t){let i;if(t instanceof yu)i={update:Kv(n,t.key,t.value)};else if(t instanceof Bw)i={delete:Im(n,t.key)};else if(t instanceof oa)i={update:Kv(n,t.key,t.data),updateMask:rC(t.fieldMask)};else{if(!(t instanceof O3))return Tt(16599,{Vt:t.type});i={verify:Im(n,t.key)}}return t.fieldTransforms.length>0&&(i.updateTransforms=t.fieldTransforms.map((a=>(function(u,d){const p=d.transform;if(p instanceof Oh)return{fieldPath:d.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof cu)return{fieldPath:d.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof hu)return{fieldPath:d.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof du)return{fieldPath:d.field.canonicalString(),increment:p.Ae};throw Tt(20930,{transform:d.transform})})(0,a)))),t.precondition.isNone||(i.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:q3(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:Tt(27497)})(n,t.precondition)),i}function X3(n,t){return n&&n.length>0?(Yt(t!==void 0,14353),n.map((i=>(function(o,u){let d=o.updateTime?Ai(o.updateTime):Ai(u);return d.isEqual(At.min())&&(d=Ai(u)),new D3(d,o.transformResults||[])})(i,t)))):[]}function W3(n,t){return{documents:[Yw(n,t.path)]}}function Z3(n,t){const i={structuredQuery:{}},a=t.path;let o;t.collectionGroup!==null?(o=a,i.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=a.popLast(),i.structuredQuery.from=[{collectionId:a.lastSegment()}]),i.parent=Yw(n,o);const u=(function(g){if(g.length!==0)return Ww(ai.create(g,"and"))})(t.filters);u&&(i.structuredQuery.where=u);const d=(function(g){if(g.length!==0)return g.map((v=>(function(T){return{field:Zs(T.field),direction:eC(T.dir)}})(v)))})(t.orderBy);d&&(i.structuredQuery.orderBy=d);const p=Am(n,t.limit);return p!==null&&(i.structuredQuery.limit=p),t.startAt&&(i.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(t.startAt)),t.endAt&&(i.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(t.endAt)),{ft:i,parent:o}}function J3(n){let t=G3(n.parent);const i=n.structuredQuery,a=i.from?i.from.length:0;let o=null;if(a>0){Yt(a===1,65062);const v=i.from[0];v.allDescendants?o=v.collectionId:t=t.child(v.collectionId)}let u=[];i.where&&(u=(function(E){const T=Xw(E);return T instanceof ai&&Tw(T)?T.getFilters():[T]})(i.where));let d=[];i.orderBy&&(d=(function(E){return E.map((T=>(function(M){return new uu(Js(M.field),(function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(M.direction))})(T)))})(i.orderBy));let p=null;i.limit&&(p=(function(E){let T;return T=typeof E=="object"?E.value:E,Jh(T)?null:T})(i.limit));let m=null;i.startAt&&(m=(function(E){const T=!!E.before,A=E.values||[];return new Mh(A,T)})(i.startAt));let g=null;return i.endAt&&(g=(function(E){const T=!E.before,A=E.values||[];return new Mh(A,T)})(i.endAt)),x3(t,o,d,u,p,"F",m,g)}function tC(n,t){const i=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Tt(28987,{purpose:o})}})(t.purpose);return i==null?null:{"goog-listen-tags":i}}function Xw(n){return n.unaryFilter!==void 0?(function(i){switch(i.unaryFilter.op){case"IS_NAN":const a=Js(i.unaryFilter.field);return De.create(a,"==",{doubleValue:NaN});case"IS_NULL":const o=Js(i.unaryFilter.field);return De.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Js(i.unaryFilter.field);return De.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const d=Js(i.unaryFilter.field);return De.create(d,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Tt(61313);default:return Tt(60726)}})(n):n.fieldFilter!==void 0?(function(i){return De.create(Js(i.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Tt(58110);default:return Tt(50506)}})(i.fieldFilter.op),i.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(i){return ai.create(i.compositeFilter.filters.map((a=>Xw(a))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Tt(1026)}})(i.compositeFilter.op))})(n):Tt(30097,{filter:n})}function eC(n){return B3[n]}function nC(n){return F3[n]}function iC(n){return K3[n]}function Zs(n){return{fieldPath:n.canonicalString()}}function Js(n){return Ze.fromServerFormat(n.fieldPath)}function Ww(n){return n instanceof De?(function(i){if(i.op==="=="){if(Dv(i.value))return{unaryFilter:{field:Zs(i.field),op:"IS_NAN"}};if(jv(i.value))return{unaryFilter:{field:Zs(i.field),op:"IS_NULL"}}}else if(i.op==="!="){if(Dv(i.value))return{unaryFilter:{field:Zs(i.field),op:"IS_NOT_NAN"}};if(jv(i.value))return{unaryFilter:{field:Zs(i.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zs(i.field),op:nC(i.op),value:i.value}}})(n):n instanceof ai?(function(i){const a=i.getFilters().map((o=>Ww(o)));return a.length===1?a[0]:{compositeFilter:{op:iC(i.op),filters:a}}})(n):Tt(54877,{filter:n})}function rC(n){const t=[];return n.fields.forEach((i=>t.push(i.canonicalString()))),{fieldPaths:t}}function Zw(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(t,i,a,o,u=At.min(),d=At.min(),p=Je.EMPTY_BYTE_STRING,m=null){this.target=t,this.targetId=i,this.purpose=a,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=d,this.resumeToken=p,this.expectedCount=m}withSequenceNumber(t){return new Qr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,i){return new Qr(this.target,this.targetId,this.purpose,this.sequenceNumber,i,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(t){this.yt=t}}function sC(n){const t=J3({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Sm(t,t.limit,"L"):t}/**
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
 */class oC{constructor(){this.Cn=new lC}addToCollectionParentIndex(t,i){return this.Cn.add(i),st.resolve()}getCollectionParents(t,i){return st.resolve(this.Cn.getEntries(i))}addFieldIndex(t,i){return st.resolve()}deleteFieldIndex(t,i){return st.resolve()}deleteAllFieldIndexes(t){return st.resolve()}createTargetIndexes(t,i){return st.resolve()}getDocumentsMatchingTarget(t,i){return st.resolve(null)}getIndexType(t,i){return st.resolve(0)}getFieldIndexes(t,i){return st.resolve([])}getNextCollectionGroupToUpdate(t){return st.resolve(null)}getMinOffset(t,i){return st.resolve(ta.min())}getMinOffsetFromCollectionGroup(t,i){return st.resolve(ta.min())}updateCollectionGroup(t,i,a){return st.resolve()}updateIndexEntries(t,i){return st.resolve()}}class lC{constructor(){this.index={}}add(t){const i=t.lastSegment(),a=t.popLast(),o=this.index[i]||new ze(ae.comparator),u=!o.has(a);return this.index[i]=o.add(a),u}has(t){const i=t.lastSegment(),a=t.popLast(),o=this.index[i];return o&&o.has(a)}getEntries(t){return(this.index[t]||new ze(ae.comparator)).toArray()}}/**
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
 */const Hv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Jw=41943040;class xn{static withCacheSize(t){return new xn(t,xn.DEFAULT_COLLECTION_PERCENTILE,xn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,i,a){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=i,this.maximumSequenceNumbersToCollect=a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xn.DEFAULT_COLLECTION_PERCENTILE=10,xn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,xn.DEFAULT=new xn(Jw,xn.DEFAULT_COLLECTION_PERCENTILE,xn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),xn.DISABLED=new xn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const qv="LruGarbageCollector",uC=1048576;function Gv([n,t],[i,a]){const o=Pt(n,i);return o===0?Pt(t,a):o}class cC{constructor(t){this.Ir=t,this.buffer=new ze(Gv),this.Er=0}dr(){return++this.Er}Ar(t){const i=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(i);else{const a=this.buffer.last();Gv(i,a)<0&&(this.buffer=this.buffer.delete(a).add(i))}}get maxValue(){return this.buffer.last()[0]}}class hC{constructor(t,i,a){this.garbageCollector=t,this.asyncQueue=i,this.localStore=a,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){pt(qv,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(i){So(i)?pt(qv,"Ignoring IndexedDB error during garbage collection: ",i):await To(i)}await this.Vr(3e5)}))}}class dC{constructor(t,i){this.mr=t,this.params=i}calculateTargetCount(t,i){return this.mr.gr(t).next((a=>Math.floor(i/100*a)))}nthSequenceNumber(t,i){if(i===0)return st.resolve(Zh.ce);const a=new cC(i);return this.mr.forEachTarget(t,(o=>a.Ar(o.sequenceNumber))).next((()=>this.mr.pr(t,(o=>a.Ar(o))))).next((()=>a.maxValue))}removeTargets(t,i,a){return this.mr.removeTargets(t,i,a)}removeOrphanedDocuments(t,i){return this.mr.removeOrphanedDocuments(t,i)}collect(t,i){return this.params.cacheSizeCollectionThreshold===-1?(pt("LruGarbageCollector","Garbage collection skipped; disabled"),st.resolve(Hv)):this.getCacheSize(t).next((a=>a<this.params.cacheSizeCollectionThreshold?(pt("LruGarbageCollector",`Garbage collection skipped; Cache size ${a} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Hv):this.yr(t,i)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,i){let a,o,u,d,p,m,g;const v=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((E=>(E>this.params.maximumSequenceNumbersToCollect?(pt("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),o=this.params.maximumSequenceNumbersToCollect):o=E,d=Date.now(),this.nthSequenceNumber(t,o)))).next((E=>(a=E,p=Date.now(),this.removeTargets(t,a,i)))).next((E=>(u=E,m=Date.now(),this.removeOrphanedDocuments(t,a)))).next((E=>(g=Date.now(),Xs()<=Bt.DEBUG&&pt("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${d-v}ms
	Determined least recently used ${o} in `+(p-d)+`ms
	Removed ${u} targets in `+(m-p)+`ms
	Removed ${E} documents in `+(g-m)+`ms
Total Duration: ${g-v}ms`),st.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:E}))))}}function fC(n,t){return new dC(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(){this.changes=new es((t=>t.toString()),((t,i)=>t.isEqual(i))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,i){this.assertNotApplied(),this.changes.set(t,on.newInvalidDocument(t).setReadTime(i))}getEntry(t,i){this.assertNotApplied();const a=this.changes.get(i);return a!==void 0?st.resolve(a):this.getFromCache(t,i)}getEntries(t,i){return this.getAllFromCache(t,i)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class mC{constructor(t,i){this.overlayedDocument=t,this.mutatedFields=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(t,i,a,o){this.remoteDocumentCache=t,this.mutationQueue=i,this.documentOverlayCache=a,this.indexManager=o}getDocument(t,i){let a=null;return this.documentOverlayCache.getOverlay(t,i).next((o=>(a=o,this.remoteDocumentCache.getEntry(t,i)))).next((o=>(a!==null&&Ql(a.mutation,o,jn.empty(),ue.now()),o)))}getDocuments(t,i){return this.remoteDocumentCache.getEntries(t,i).next((a=>this.getLocalViewOfDocuments(t,a,Ut()).next((()=>a))))}getLocalViewOfDocuments(t,i,a=Ut()){const o=Ga();return this.populateOverlays(t,o,i).next((()=>this.computeViews(t,i,o,a).next((u=>{let d=Ll();return u.forEach(((p,m)=>{d=d.insert(p,m.overlayedDocument)})),d}))))}getOverlayedDocuments(t,i){const a=Ga();return this.populateOverlays(t,a,i).next((()=>this.computeViews(t,i,a,Ut())))}populateOverlays(t,i,a){const o=[];return a.forEach((u=>{i.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(t,o).next((u=>{u.forEach(((d,p)=>{i.set(d,p)}))}))}computeViews(t,i,a,o){let u=ur();const d=Yl(),p=(function(){return Yl()})();return i.forEach(((m,g)=>{const v=a.get(g.key);o.has(g.key)&&(v===void 0||v.mutation instanceof oa)?u=u.insert(g.key,g):v!==void 0?(d.set(g.key,v.mutation.getFieldMask()),Ql(v.mutation,g,v.mutation.getFieldMask(),ue.now())):d.set(g.key,jn.empty())})),this.recalculateAndSaveOverlays(t,u).next((m=>(m.forEach(((g,v)=>d.set(g,v))),i.forEach(((g,v)=>p.set(g,new mC(v,d.get(g)??null)))),p)))}recalculateAndSaveOverlays(t,i){const a=Yl();let o=new me(((d,p)=>d-p)),u=Ut();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,i).next((d=>{for(const p of d)p.keys().forEach((m=>{const g=i.get(m);if(g===null)return;let v=a.get(m)||jn.empty();v=p.applyToLocalView(g,v),a.set(m,v);const E=(o.get(p.batchId)||Ut()).add(m);o=o.insert(p.batchId,E)}))})).next((()=>{const d=[],p=o.getReverseIterator();for(;p.hasNext();){const m=p.getNext(),g=m.key,v=m.value,E=Mw();v.forEach((T=>{if(!u.has(T)){const A=Lw(i.get(T),a.get(T));A!==null&&E.set(T,A),u=u.add(T)}})),d.push(this.documentOverlayCache.saveOverlays(t,g,E))}return st.waitFor(d)})).next((()=>a))}recalculateAndSaveOverlaysForDocumentKeys(t,i){return this.remoteDocumentCache.getEntries(t,i).next((a=>this.recalculateAndSaveOverlays(t,a)))}getDocumentsMatchingQuery(t,i,a,o){return(function(d){return vt.isDocumentKey(d.path)&&d.collectionGroup===null&&d.filters.length===0})(i)?this.getDocumentsMatchingDocumentQuery(t,i.path):Iw(i)?this.getDocumentsMatchingCollectionGroupQuery(t,i,a,o):this.getDocumentsMatchingCollectionQuery(t,i,a,o)}getNextDocuments(t,i,a,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,i,a,o).next((u=>{const d=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,i,a.largestBatchId,o-u.size):st.resolve(Ga());let p=au,m=u;return d.next((g=>st.forEach(g,((v,E)=>(p<E.largestBatchId&&(p=E.largestBatchId),u.get(v)?st.resolve():this.remoteDocumentCache.getEntry(t,v).next((T=>{m=m.insert(v,T)}))))).next((()=>this.populateOverlays(t,g,u))).next((()=>this.computeViews(t,m,g,Ut()))).next((v=>({batchId:p,changes:Nw(v)})))))}))}getDocumentsMatchingDocumentQuery(t,i){return this.getDocument(t,new vt(i)).next((a=>{let o=Ll();return a.isFoundDocument()&&(o=o.insert(a.key,a)),o}))}getDocumentsMatchingCollectionGroupQuery(t,i,a,o){const u=i.collectionGroup;let d=Ll();return this.indexManager.getCollectionParents(t,u).next((p=>st.forEach(p,(m=>{const g=(function(E,T){return new Ao(T,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)})(i,m.child(u));return this.getDocumentsMatchingCollectionQuery(t,g,a,o).next((v=>{v.forEach(((E,T)=>{d=d.insert(E,T)}))}))})).next((()=>d))))}getDocumentsMatchingCollectionQuery(t,i,a,o){let u;return this.documentOverlayCache.getOverlaysForCollection(t,i.path,a.largestBatchId).next((d=>(u=d,this.remoteDocumentCache.getDocumentsMatchingQuery(t,i,a,u,o)))).next((d=>{u.forEach(((m,g)=>{const v=g.getKey();d.get(v)===null&&(d=d.insert(v,on.newInvalidDocument(v)))}));let p=Ll();return d.forEach(((m,g)=>{const v=u.get(m);v!==void 0&&Ql(v.mutation,g,jn.empty(),ue.now()),nd(i,g)&&(p=p.insert(m,g))})),p}))}}/**
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
 */class yC{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,i){return st.resolve(this.Lr.get(i))}saveBundleMetadata(t,i){return this.Lr.set(i.id,(function(o){return{id:o.id,version:o.version,createTime:Ai(o.createTime)}})(i)),st.resolve()}getNamedQuery(t,i){return st.resolve(this.kr.get(i))}saveNamedQuery(t,i){return this.kr.set(i.name,(function(o){return{name:o.name,query:sC(o.bundledQuery),readTime:Ai(o.readTime)}})(i)),st.resolve()}}/**
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
 */class xC{constructor(){this.overlays=new me(vt.comparator),this.qr=new Map}getOverlay(t,i){return st.resolve(this.overlays.get(i))}getOverlays(t,i){const a=Ga();return st.forEach(i,(o=>this.getOverlay(t,o).next((u=>{u!==null&&a.set(o,u)})))).next((()=>a))}saveOverlays(t,i,a){return a.forEach(((o,u)=>{this.St(t,i,u)})),st.resolve()}removeOverlaysForBatchId(t,i,a){const o=this.qr.get(a);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.qr.delete(a)),st.resolve()}getOverlaysForCollection(t,i,a){const o=Ga(),u=i.length+1,d=new vt(i.child("")),p=this.overlays.getIteratorFrom(d);for(;p.hasNext();){const m=p.getNext().value,g=m.getKey();if(!i.isPrefixOf(g.path))break;g.path.length===u&&m.largestBatchId>a&&o.set(m.getKey(),m)}return st.resolve(o)}getOverlaysForCollectionGroup(t,i,a,o){let u=new me(((g,v)=>g-v));const d=this.overlays.getIterator();for(;d.hasNext();){const g=d.getNext().value;if(g.getKey().getCollectionGroup()===i&&g.largestBatchId>a){let v=u.get(g.largestBatchId);v===null&&(v=Ga(),u=u.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const p=Ga(),m=u.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach(((g,v)=>p.set(g,v))),!(p.size()>=o)););return st.resolve(p)}St(t,i,a){const o=this.overlays.get(a.key);if(o!==null){const d=this.qr.get(o.largestBatchId).delete(a.key);this.qr.set(o.largestBatchId,d)}this.overlays=this.overlays.insert(a.key,new V3(i,a));let u=this.qr.get(i);u===void 0&&(u=Ut(),this.qr.set(i,u)),this.qr.set(i,u.add(a.key))}}/**
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
 */class vC{constructor(){this.sessionToken=Je.EMPTY_BYTE_STRING}getSessionToken(t){return st.resolve(this.sessionToken)}setSessionToken(t,i){return this.sessionToken=i,st.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(){this.Qr=new ze(He.$r),this.Ur=new ze(He.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,i){const a=new He(t,i);this.Qr=this.Qr.add(a),this.Ur=this.Ur.add(a)}Wr(t,i){t.forEach((a=>this.addReference(a,i)))}removeReference(t,i){this.Gr(new He(t,i))}zr(t,i){t.forEach((a=>this.removeReference(a,i)))}jr(t){const i=new vt(new ae([])),a=new He(i,t),o=new He(i,t+1),u=[];return this.Ur.forEachInRange([a,o],(d=>{this.Gr(d),u.push(d.key)})),u}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const i=new vt(new ae([])),a=new He(i,t),o=new He(i,t+1);let u=Ut();return this.Ur.forEachInRange([a,o],(d=>{u=u.add(d.key)})),u}containsKey(t){const i=new He(t,0),a=this.Qr.firstAfterOrEqual(i);return a!==null&&t.isEqual(a.key)}}class He{constructor(t,i){this.key=t,this.Yr=i}static $r(t,i){return vt.comparator(t.key,i.key)||Pt(t.Yr,i.Yr)}static Kr(t,i){return Pt(t.Yr,i.Yr)||vt.comparator(t.key,i.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(t,i){this.indexManager=t,this.referenceDelegate=i,this.mutationQueue=[],this.tr=1,this.Zr=new ze(He.$r)}checkEmpty(t){return st.resolve(this.mutationQueue.length===0)}addMutationBatch(t,i,a,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const d=new k3(u,i,a,o);this.mutationQueue.push(d);for(const p of o)this.Zr=this.Zr.add(new He(p.key,u)),this.indexManager.addToCollectionParentIndex(t,p.key.path.popLast());return st.resolve(d)}lookupMutationBatch(t,i){return st.resolve(this.Xr(i))}getNextMutationBatchAfterBatchId(t,i){const a=i+1,o=this.ei(a),u=o<0?0:o;return st.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return st.resolve(this.mutationQueue.length===0?gg:this.tr-1)}getAllMutationBatches(t){return st.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,i){const a=new He(i,0),o=new He(i,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([a,o],(d=>{const p=this.Xr(d.Yr);u.push(p)})),st.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(t,i){let a=new ze(Pt);return i.forEach((o=>{const u=new He(o,0),d=new He(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,d],(p=>{a=a.add(p.Yr)}))})),st.resolve(this.ti(a))}getAllMutationBatchesAffectingQuery(t,i){const a=i.path,o=a.length+1;let u=a;vt.isDocumentKey(u)||(u=u.child(""));const d=new He(new vt(u),0);let p=new ze(Pt);return this.Zr.forEachWhile((m=>{const g=m.key.path;return!!a.isPrefixOf(g)&&(g.length===o&&(p=p.add(m.Yr)),!0)}),d),st.resolve(this.ti(p))}ti(t){const i=[];return t.forEach((a=>{const o=this.Xr(a);o!==null&&i.push(o)})),i}removeMutationBatch(t,i){Yt(this.ni(i.batchId,"removed")===0,55003),this.mutationQueue.shift();let a=this.Zr;return st.forEach(i.mutations,(o=>{const u=new He(o.key,i.batchId);return a=a.delete(u),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)})).next((()=>{this.Zr=a}))}ir(t){}containsKey(t,i){const a=new He(i,0),o=this.Zr.firstAfterOrEqual(a);return st.resolve(i.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,st.resolve()}ni(t,i){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const i=this.ei(t);return i<0||i>=this.mutationQueue.length?null:this.mutationQueue[i]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(t){this.ri=t,this.docs=(function(){return new me(vt.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,i){const a=i.key,o=this.docs.get(a),u=o?o.size:0,d=this.ri(i);return this.docs=this.docs.insert(a,{document:i.mutableCopy(),size:d}),this.size+=d-u,this.indexManager.addToCollectionParentIndex(t,a.path.popLast())}removeEntry(t){const i=this.docs.get(t);i&&(this.docs=this.docs.remove(t),this.size-=i.size)}getEntry(t,i){const a=this.docs.get(i);return st.resolve(a?a.document.mutableCopy():on.newInvalidDocument(i))}getEntries(t,i){let a=ur();return i.forEach((o=>{const u=this.docs.get(o);a=a.insert(o,u?u.document.mutableCopy():on.newInvalidDocument(o))})),st.resolve(a)}getDocumentsMatchingQuery(t,i,a,o){let u=ur();const d=i.path,p=new vt(d.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(p);for(;m.hasNext();){const{key:g,value:{document:v}}=m.getNext();if(!d.isPrefixOf(g.path))break;g.path.length>d.length+1||XI(QI(v),a)<=0||(o.has(v.key)||nd(i,v))&&(u=u.insert(v.key,v.mutableCopy()))}return st.resolve(u)}getAllFromCollectionGroup(t,i,a,o){Tt(9500)}ii(t,i){return st.forEach(this.docs,(a=>i(a)))}newChangeBuffer(t){return new EC(this)}getSize(t){return st.resolve(this.size)}}class EC extends pC{constructor(t){super(),this.Nr=t}applyChanges(t){const i=[];return this.changes.forEach(((a,o)=>{o.isValidDocument()?i.push(this.Nr.addEntry(t,o)):this.Nr.removeEntry(a)})),st.waitFor(i)}getFromCache(t,i){return this.Nr.getEntry(t,i)}getAllFromCache(t,i){return this.Nr.getEntries(t,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(t){this.persistence=t,this.si=new es((i=>vg(i)),_g),this.lastRemoteSnapshotVersion=At.min(),this.highestTargetId=0,this.oi=0,this._i=new Ag,this.targetCount=0,this.ai=mo.ur()}forEachTarget(t,i){return this.si.forEach(((a,o)=>i(o))),st.resolve()}getLastRemoteSnapshotVersion(t){return st.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return st.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),st.resolve(this.highestTargetId)}setTargetsMetadata(t,i,a){return a&&(this.lastRemoteSnapshotVersion=a),i>this.oi&&(this.oi=i),st.resolve()}Pr(t){this.si.set(t.target,t);const i=t.targetId;i>this.highestTargetId&&(this.ai=new mo(i),this.highestTargetId=i),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,i){return this.Pr(i),this.targetCount+=1,st.resolve()}updateTargetData(t,i){return this.Pr(i),st.resolve()}removeTargetData(t,i){return this.si.delete(i.target),this._i.jr(i.targetId),this.targetCount-=1,st.resolve()}removeTargets(t,i,a){let o=0;const u=[];return this.si.forEach(((d,p)=>{p.sequenceNumber<=i&&a.get(p.targetId)===null&&(this.si.delete(d),u.push(this.removeMatchingKeysForTargetId(t,p.targetId)),o++)})),st.waitFor(u).next((()=>o))}getTargetCount(t){return st.resolve(this.targetCount)}getTargetData(t,i){const a=this.si.get(i)||null;return st.resolve(a)}addMatchingKeys(t,i,a){return this._i.Wr(i,a),st.resolve()}removeMatchingKeys(t,i,a){this._i.zr(i,a);const o=this.persistence.referenceDelegate,u=[];return o&&i.forEach((d=>{u.push(o.markPotentiallyOrphaned(t,d))})),st.waitFor(u)}removeMatchingKeysForTargetId(t,i){return this._i.jr(i),st.resolve()}getMatchingKeysForTargetId(t,i){const a=this._i.Hr(i);return st.resolve(a)}containsKey(t,i){return st.resolve(this._i.containsKey(i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(t,i){this.ui={},this.overlays={},this.ci=new Zh(0),this.li=!1,this.li=!0,this.hi=new vC,this.referenceDelegate=t(this),this.Pi=new bC(this),this.indexManager=new oC,this.remoteDocumentCache=(function(o){return new wC(o)})((a=>this.referenceDelegate.Ti(a))),this.serializer=new aC(i),this.Ii=new yC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let i=this.overlays[t.toKey()];return i||(i=new xC,this.overlays[t.toKey()]=i),i}getMutationQueue(t,i){let a=this.ui[t.toKey()];return a||(a=new _C(i,this.referenceDelegate),this.ui[t.toKey()]=a),a}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,i,a){pt("MemoryPersistence","Starting transaction:",t);const o=new TC(this.ci.next());return this.referenceDelegate.Ei(),a(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ai(t,i){return st.or(Object.values(this.ui).map((a=>()=>a.containsKey(t,i))))}}class TC extends ZI{constructor(t){super(),this.currentSequenceNumber=t}}class Rg{constructor(t){this.persistence=t,this.Ri=new Ag,this.Vi=null}static mi(t){return new Rg(t)}get fi(){if(this.Vi)return this.Vi;throw Tt(60996)}addReference(t,i,a){return this.Ri.addReference(a,i),this.fi.delete(a.toString()),st.resolve()}removeReference(t,i,a){return this.Ri.removeReference(a,i),this.fi.add(a.toString()),st.resolve()}markPotentiallyOrphaned(t,i){return this.fi.add(i.toString()),st.resolve()}removeTarget(t,i){this.Ri.jr(i.targetId).forEach((o=>this.fi.add(o.toString())));const a=this.persistence.getTargetCache();return a.getMatchingKeysForTargetId(t,i.targetId).next((o=>{o.forEach((u=>this.fi.add(u.toString())))})).next((()=>a.removeTargetData(t,i)))}Ei(){this.Vi=new Set}di(t){const i=this.persistence.getRemoteDocumentCache().newChangeBuffer();return st.forEach(this.fi,(a=>{const o=vt.fromPath(a);return this.gi(t,o).next((u=>{u||i.removeEntry(o,At.min())}))})).next((()=>(this.Vi=null,i.apply(t))))}updateLimboDocument(t,i){return this.gi(t,i).next((a=>{a?this.fi.delete(i.toString()):this.fi.add(i.toString())}))}Ti(t){return 0}gi(t,i){return st.or([()=>st.resolve(this.Ri.containsKey(i)),()=>this.persistence.getTargetCache().containsKey(t,i),()=>this.persistence.Ai(t,i)])}}class Vh{constructor(t,i){this.persistence=t,this.pi=new es((a=>e3(a.path)),((a,o)=>a.isEqual(o))),this.garbageCollector=fC(this,i)}static mi(t,i){return new Vh(t,i)}Ei(){}di(t){return st.resolve()}forEachTarget(t,i){return this.persistence.getTargetCache().forEachTarget(t,i)}gr(t){const i=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((a=>i.next((o=>a+o))))}wr(t){let i=0;return this.pr(t,(a=>{i++})).next((()=>i))}pr(t,i){return st.forEach(this.pi,((a,o)=>this.br(t,a,o).next((u=>u?st.resolve():i(o)))))}removeTargets(t,i,a){return this.persistence.getTargetCache().removeTargets(t,i,a)}removeOrphanedDocuments(t,i){let a=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(t,(d=>this.br(t,d,i).next((p=>{p||(a++,u.removeEntry(d,At.min()))})))).next((()=>u.apply(t))).next((()=>a))}markPotentiallyOrphaned(t,i){return this.pi.set(i,t.currentSequenceNumber),st.resolve()}removeTarget(t,i){const a=i.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,a)}addReference(t,i,a){return this.pi.set(a,t.currentSequenceNumber),st.resolve()}removeReference(t,i,a){return this.pi.set(a,t.currentSequenceNumber),st.resolve()}updateLimboDocument(t,i){return this.pi.set(i,t.currentSequenceNumber),st.resolve()}Ti(t){let i=t.key.toString().length;return t.isFoundDocument()&&(i+=ph(t.data.value)),i}br(t,i,a){return st.or([()=>this.persistence.Ai(t,i),()=>this.persistence.getTargetCache().containsKey(t,i),()=>{const o=this.pi.get(i);return st.resolve(o!==void 0&&o>a)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(t,i,a,o){this.targetId=t,this.fromCache=i,this.Es=a,this.ds=o}static As(t,i){let a=Ut(),o=Ut();for(const u of i.docChanges)switch(u.type){case 0:a=a.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Ig(t,i.fromCache,a,o)}}/**
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
 */class SC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class AC{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return y6()?8:JI(m6())>0?6:4})()}initialize(t,i){this.ps=t,this.indexManager=i,this.Rs=!0}getDocumentsMatchingQuery(t,i,a,o){const u={result:null};return this.ys(t,i).next((d=>{u.result=d})).next((()=>{if(!u.result)return this.ws(t,i,o,a).next((d=>{u.result=d}))})).next((()=>{if(u.result)return;const d=new SC;return this.Ss(t,i,d).next((p=>{if(u.result=p,this.Vs)return this.bs(t,i,d,p.size)}))})).next((()=>u.result))}bs(t,i,a,o){return a.documentReadCount<this.fs?(Xs()<=Bt.DEBUG&&pt("QueryEngine","SDK will not create cache indexes for query:",Ws(i),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),st.resolve()):(Xs()<=Bt.DEBUG&&pt("QueryEngine","Query:",Ws(i),"scans",a.documentReadCount,"local documents and returns",o,"documents as results."),a.documentReadCount>this.gs*o?(Xs()<=Bt.DEBUG&&pt("QueryEngine","The SDK decides to create cache indexes for query:",Ws(i),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ti(i))):st.resolve())}ys(t,i){if(kv(i))return st.resolve(null);let a=Ti(i);return this.indexManager.getIndexType(t,a).next((o=>o===0?null:(i.limit!==null&&o===1&&(i=Sm(i,null,"F"),a=Ti(i)),this.indexManager.getDocumentsMatchingTarget(t,a).next((u=>{const d=Ut(...u);return this.ps.getDocuments(t,d).next((p=>this.indexManager.getMinOffset(t,a).next((m=>{const g=this.Ds(i,p);return this.Cs(i,g,d,m.readTime)?this.ys(t,Sm(i,null,"F")):this.vs(t,g,i,m)}))))})))))}ws(t,i,a,o){return kv(i)||o.isEqual(At.min())?st.resolve(null):this.ps.getDocuments(t,a).next((u=>{const d=this.Ds(i,u);return this.Cs(i,d,a,o)?st.resolve(null):(Xs()<=Bt.DEBUG&&pt("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ws(i)),this.vs(t,d,i,YI(o,au)).next((p=>p)))}))}Ds(t,i){let a=new ze(jw(t));return i.forEach(((o,u)=>{nd(t,u)&&(a=a.add(u))})),a}Cs(t,i,a,o){if(t.limit===null)return!1;if(a.size!==i.size)return!0;const u=t.limitType==="F"?i.last():i.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(t,i,a){return Xs()<=Bt.DEBUG&&pt("QueryEngine","Using full collection scan to execute query:",Ws(i)),this.ps.getDocumentsMatchingQuery(t,i,ta.min(),a)}vs(t,i,a,o){return this.ps.getDocumentsMatchingQuery(t,a,o).next((u=>(i.forEach((d=>{u=u.insert(d.key,d)})),u)))}}/**
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
 */const Cg="LocalStore",RC=3e8;class IC{constructor(t,i,a,o){this.persistence=t,this.Fs=i,this.serializer=o,this.Ms=new me(Pt),this.xs=new es((u=>vg(u)),_g),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(a)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new gC(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(i=>t.collect(i,this.Ms)))}}function CC(n,t,i,a){return new IC(n,t,i,a)}async function eE(n,t){const i=It(n);return await i.persistence.runTransaction("Handle user change","readonly",(a=>{let o;return i.mutationQueue.getAllMutationBatches(a).next((u=>(o=u,i.Bs(t),i.mutationQueue.getAllMutationBatches(a)))).next((u=>{const d=[],p=[];let m=Ut();for(const g of o){d.push(g.batchId);for(const v of g.mutations)m=m.add(v.key)}for(const g of u){p.push(g.batchId);for(const v of g.mutations)m=m.add(v.key)}return i.localDocuments.getDocuments(a,m).next((g=>({Ls:g,removedBatchIds:d,addedBatchIds:p})))}))}))}function jC(n,t){const i=It(n);return i.persistence.runTransaction("Acknowledge batch","readwrite-primary",(a=>{const o=t.batch.keys(),u=i.Ns.newChangeBuffer({trackRemovals:!0});return(function(p,m,g,v){const E=g.batch,T=E.keys();let A=st.resolve();return T.forEach((M=>{A=A.next((()=>v.getEntry(m,M))).next((k=>{const V=g.docVersions.get(M);Yt(V!==null,48541),k.version.compareTo(V)<0&&(E.applyToRemoteDocument(k,g),k.isValidDocument()&&(k.setReadTime(g.commitVersion),v.addEntry(k)))}))})),A.next((()=>p.mutationQueue.removeMutationBatch(m,E)))})(i,a,t,u).next((()=>u.apply(a))).next((()=>i.mutationQueue.performConsistencyCheck(a))).next((()=>i.documentOverlayCache.removeOverlaysForBatchId(a,o,t.batch.batchId))).next((()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,(function(p){let m=Ut();for(let g=0;g<p.mutationResults.length;++g)p.mutationResults[g].transformResults.length>0&&(m=m.add(p.batch.mutations[g].key));return m})(t)))).next((()=>i.localDocuments.getDocuments(a,o)))}))}function nE(n){const t=It(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(i=>t.Pi.getLastRemoteSnapshotVersion(i)))}function DC(n,t){const i=It(n),a=t.snapshotVersion;let o=i.Ms;return i.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const d=i.Ns.newChangeBuffer({trackRemovals:!0});o=i.Ms;const p=[];t.targetChanges.forEach(((v,E)=>{const T=o.get(E);if(!T)return;p.push(i.Pi.removeMatchingKeys(u,v.removedDocuments,E).next((()=>i.Pi.addMatchingKeys(u,v.addedDocuments,E))));let A=T.withSequenceNumber(u.currentSequenceNumber);t.targetMismatches.get(E)!==null?A=A.withResumeToken(Je.EMPTY_BYTE_STRING,At.min()).withLastLimboFreeSnapshotVersion(At.min()):v.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(v.resumeToken,a)),o=o.insert(E,A),(function(k,V,B){return k.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=RC?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0})(T,A,v)&&p.push(i.Pi.updateTargetData(u,A))}));let m=ur(),g=Ut();if(t.documentUpdates.forEach((v=>{t.resolvedLimboDocuments.has(v)&&p.push(i.persistence.referenceDelegate.updateLimboDocument(u,v))})),p.push(NC(u,d,t.documentUpdates).next((v=>{m=v.ks,g=v.qs}))),!a.isEqual(At.min())){const v=i.Pi.getLastRemoteSnapshotVersion(u).next((E=>i.Pi.setTargetsMetadata(u,u.currentSequenceNumber,a)));p.push(v)}return st.waitFor(p).next((()=>d.apply(u))).next((()=>i.localDocuments.getLocalViewOfDocuments(u,m,g))).next((()=>m))})).then((u=>(i.Ms=o,u)))}function NC(n,t,i){let a=Ut(),o=Ut();return i.forEach((u=>a=a.add(u))),t.getEntries(n,a).next((u=>{let d=ur();return i.forEach(((p,m)=>{const g=u.get(p);m.isFoundDocument()!==g.isFoundDocument()&&(o=o.add(p)),m.isNoDocument()&&m.version.isEqual(At.min())?(t.removeEntry(p,m.readTime),d=d.insert(p,m)):!g.isValidDocument()||m.version.compareTo(g.version)>0||m.version.compareTo(g.version)===0&&g.hasPendingWrites?(t.addEntry(m),d=d.insert(p,m)):pt(Cg,"Ignoring outdated watch update for ",p,". Current version:",g.version," Watch version:",m.version)})),{ks:d,qs:o}}))}function MC(n,t){const i=It(n);return i.persistence.runTransaction("Get next mutation batch","readonly",(a=>(t===void 0&&(t=gg),i.mutationQueue.getNextMutationBatchAfterBatchId(a,t))))}function OC(n,t){const i=It(n);return i.persistence.runTransaction("Allocate target","readwrite",(a=>{let o;return i.Pi.getTargetData(a,t).next((u=>u?(o=u,st.resolve(o)):i.Pi.allocateTargetId(a).next((d=>(o=new Qr(t,d,"TargetPurposeListen",a.currentSequenceNumber),i.Pi.addTargetData(a,o).next((()=>o)))))))})).then((a=>{const o=i.Ms.get(a.targetId);return(o===null||a.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(i.Ms=i.Ms.insert(a.targetId,a),i.xs.set(t,a.targetId)),a}))}async function jm(n,t,i){const a=It(n),o=a.Ms.get(t),u=i?"readwrite":"readwrite-primary";try{i||await a.persistence.runTransaction("Release target",u,(d=>a.persistence.referenceDelegate.removeTarget(d,o)))}catch(d){if(!So(d))throw d;pt(Cg,`Failed to update sequence numbers for target ${t}: ${d}`)}a.Ms=a.Ms.remove(t),a.xs.delete(o.target)}function Yv(n,t,i){const a=It(n);let o=At.min(),u=Ut();return a.persistence.runTransaction("Execute query","readwrite",(d=>(function(m,g,v){const E=It(m),T=E.xs.get(v);return T!==void 0?st.resolve(E.Ms.get(T)):E.Pi.getTargetData(g,v)})(a,d,Ti(t)).next((p=>{if(p)return o=p.lastLimboFreeSnapshotVersion,a.Pi.getMatchingKeysForTargetId(d,p.targetId).next((m=>{u=m}))})).next((()=>a.Fs.getDocumentsMatchingQuery(d,t,i?o:At.min(),i?u:Ut()))).next((p=>(kC(a,_3(t),p),{documents:p,Qs:u})))))}function kC(n,t,i){let a=n.Os.get(t)||At.min();i.forEach(((o,u)=>{u.readTime.compareTo(a)>0&&(a=u.readTime)})),n.Os.set(t,a)}class Qv{constructor(){this.activeTargetIds=A3()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class VC{constructor(){this.Mo=new Qv,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,i,a){}addLocalQueryTarget(t,i=!0){return i&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,i,a){this.xo[t]=i}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new Qv,Promise.resolve()}handleUserChange(t,i,a){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class PC{Oo(t){}shutdown(){}}/**
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
 */const Xv="ConnectivityMonitor";class Wv{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){pt(Xv,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){pt(Xv,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let th=null;function Dm(){return th===null?th=(function(){return 268435456+Math.round(2147483648*Math.random())})():th++,"0x"+th.toString(16)}/**
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
 */const Pp="RestConnection",UC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class zC{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=i+"://"+t.host,this.Ko=`projects/${a}/databases/${o}`,this.Wo=this.databaseId.database===Dh?`project_id=${a}`:`project_id=${a}&database_id=${o}`}Go(t,i,a,o,u){const d=Dm(),p=this.zo(t,i.toUriEncodedString());pt(Pp,`Sending RPC '${t}' ${d}:`,p,a);const m={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(m,o,u);const{host:g}=new URL(p),v=hg(g);return this.Jo(t,p,m,a,v).then((E=>(pt(Pp,`Received RPC '${t}' ${d}: `,E),E)),(E=>{throw co(Pp,`RPC '${t}' ${d} failed with error: `,E,"url: ",p,"request:",a),E}))}Ho(t,i,a,o,u,d){return this.Go(t,i,a,o,u)}jo(t,i,a){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+bo})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach(((o,u)=>t[u]=o)),a&&a.headers.forEach(((o,u)=>t[u]=o))}zo(t,i){const a=UC[t];return`${this.Uo}/v1/${i}:${a}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an="WebChannelConnection";class $C extends zC{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,i,a,o,u){const d=Dm();return new Promise(((p,m)=>{const g=new iw;g.setWithCredentials(!0),g.listenOnce(rw.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case fh.NO_ERROR:const E=g.getResponseJson();pt(an,`XHR for RPC '${t}' ${d} received:`,JSON.stringify(E)),p(E);break;case fh.TIMEOUT:pt(an,`RPC '${t}' ${d} timed out`),m(new ft(it.DEADLINE_EXCEEDED,"Request time out"));break;case fh.HTTP_ERROR:const T=g.getStatus();if(pt(an,`RPC '${t}' ${d} failed with status:`,T,"response text:",g.getResponseText()),T>0){let A=g.getResponseJson();Array.isArray(A)&&(A=A[0]);const M=A?.error;if(M&&M.status&&M.message){const k=(function(B){const q=B.toLowerCase().replace(/_/g,"-");return Object.values(it).indexOf(q)>=0?q:it.UNKNOWN})(M.status);m(new ft(k,M.message))}else m(new ft(it.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new ft(it.UNAVAILABLE,"Connection failed."));break;default:Tt(9055,{l_:t,streamId:d,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{pt(an,`RPC '${t}' ${d} completed.`)}}));const v=JSON.stringify(o);pt(an,`RPC '${t}' ${d} sending request:`,o),g.send(i,"POST",v,a,15)}))}T_(t,i,a){const o=Dm(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],d=ow(),p=sw(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.jo(m.initMessageHeaders,i,a),m.encodeInitMessageHeaders=!0;const v=u.join("");pt(an,`Creating RPC '${t}' stream ${o}: ${v}`,m);const E=d.createWebChannel(v,m);this.I_(E);let T=!1,A=!1;const M=new LC({Yo:V=>{A?pt(an,`Not sending because RPC '${t}' stream ${o} is closed:`,V):(T||(pt(an,`Opening RPC '${t}' stream ${o} transport.`),E.open(),T=!0),pt(an,`RPC '${t}' stream ${o} sending:`,V),E.send(V))},Zo:()=>E.close()}),k=(V,B,q)=>{V.listen(B,(Z=>{try{q(Z)}catch(lt){setTimeout((()=>{throw lt}),0)}}))};return k(E,zl.EventType.OPEN,(()=>{A||(pt(an,`RPC '${t}' stream ${o} transport opened.`),M.o_())})),k(E,zl.EventType.CLOSE,(()=>{A||(A=!0,pt(an,`RPC '${t}' stream ${o} transport closed`),M.a_(),this.E_(E))})),k(E,zl.EventType.ERROR,(V=>{A||(A=!0,co(an,`RPC '${t}' stream ${o} transport errored. Name:`,V.name,"Message:",V.message),M.a_(new ft(it.UNAVAILABLE,"The operation could not be completed")))})),k(E,zl.EventType.MESSAGE,(V=>{if(!A){const B=V.data[0];Yt(!!B,16349);const q=B,Z=q?.error||q[0]?.error;if(Z){pt(an,`RPC '${t}' stream ${o} received error:`,Z);const lt=Z.status;let K=(function(C){const j=Ce[C];if(j!==void 0)return Fw(j)})(lt),ot=Z.message;K===void 0&&(K=it.INTERNAL,ot="Unknown error status: "+lt+" with message "+Z.message),A=!0,M.a_(new ft(K,ot)),E.close()}else pt(an,`RPC '${t}' stream ${o} received:`,B),M.u_(B)}})),k(p,aw.STAT_EVENT,(V=>{V.stat===xm.PROXY?pt(an,`RPC '${t}' stream ${o} detected buffering proxy`):V.stat===xm.NOPROXY&&pt(an,`RPC '${t}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{M.__()}),0),M}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((i=>i===t))}}function Up(){return typeof document<"u"?document:null}/**
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
 */function sd(n){return new H3(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(t,i,a=1e3,o=1.5,u=6e4){this.Mi=t,this.timerId=i,this.d_=a,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const i=Math.floor(this.V_+this.y_()),a=Math.max(0,Date.now()-this.f_),o=Math.max(0,i-a);o>0&&pt("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${i} ms, last attempt: ${a} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv="PersistentStream";class rE{constructor(t,i,a,o,u,d,p,m){this.Mi=t,this.S_=a,this.b_=o,this.connection=u,this.authCredentialsProvider=d,this.appCheckCredentialsProvider=p,this.listener=m,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new iE(t,i)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,i){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():i&&i.code===it.RESOURCE_EXHAUSTED?(or(i.toString()),or("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):i&&i.code===it.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(i)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),i=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([a,o])=>{this.D_===i&&this.G_(a,o)}),(a=>{t((()=>{const o=new ft(it.UNKNOWN,"Fetching auth token failed: "+a.message);return this.z_(o)}))}))}G_(t,i){const a=this.W_(this.D_);this.stream=this.j_(t,i),this.stream.Xo((()=>{a((()=>this.listener.Xo()))})),this.stream.t_((()=>{a((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{a((()=>this.z_(o)))})),this.stream.onMessage((o=>{a((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return pt(Zv,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return i=>{this.Mi.enqueueAndForget((()=>this.D_===t?i():(pt(Zv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class BC extends rE{constructor(t,i,a,o,u,d){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",i,a,o,d),this.serializer=u}j_(t,i){return this.connection.T_("Listen",t,i)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const i=Y3(this.serializer,t),a=(function(u){if(!("targetChange"in u))return At.min();const d=u.targetChange;return d.targetIds&&d.targetIds.length?At.min():d.readTime?Ai(d.readTime):At.min()})(t);return this.listener.H_(i,a)}Y_(t){const i={};i.database=Cm(this.serializer),i.addTarget=(function(u,d){let p;const m=d.target;if(p=bm(m)?{documents:W3(u,m)}:{query:Z3(u,m).ft},p.targetId=d.targetId,d.resumeToken.approximateByteSize()>0){p.resumeToken=qw(u,d.resumeToken);const g=Am(u,d.expectedCount);g!==null&&(p.expectedCount=g)}else if(d.snapshotVersion.compareTo(At.min())>0){p.readTime=kh(u,d.snapshotVersion.toTimestamp());const g=Am(u,d.expectedCount);g!==null&&(p.expectedCount=g)}return p})(this.serializer,t);const a=tC(this.serializer,t);a&&(i.labels=a),this.q_(i)}Z_(t){const i={};i.database=Cm(this.serializer),i.removeTarget=t,this.q_(i)}}class FC extends rE{constructor(t,i,a,o,u,d){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",i,a,o,d),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,i){return this.connection.T_("Write",t,i)}J_(t){return Yt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Yt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){Yt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const i=X3(t.writeResults,t.commitTime),a=Ai(t.commitTime);return this.listener.na(a,i)}ra(){const t={};t.database=Cm(this.serializer),this.q_(t)}ea(t){const i={streamToken:this.lastStreamToken,writes:t.map((a=>Q3(this.serializer,a)))};this.q_(i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{}class HC extends KC{constructor(t,i,a,o){super(),this.authCredentials=t,this.appCheckCredentials=i,this.connection=a,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ft(it.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,i,a,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,d])=>this.connection.Go(t,Rm(i,a),o,u,d))).catch((u=>{throw u.name==="FirebaseError"?(u.code===it.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ft(it.UNKNOWN,u.toString())}))}Ho(t,i,a,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([d,p])=>this.connection.Ho(t,Rm(i,a),o,d,p,u))).catch((d=>{throw d.name==="FirebaseError"?(d.code===it.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),d):new ft(it.UNKNOWN,d.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class qC{constructor(t,i){this.asyncQueue=t,this.onlineStateHandler=i,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const i=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(or(i),this.aa=!1):pt("OnlineStateTracker",i)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za="RemoteStore";class GC{constructor(t,i,a,o,u){this.localStore=t,this.datastore=i,this.asyncQueue=a,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo((d=>{a.enqueueAndForget((async()=>{ns(this)&&(pt(Za,"Restarting streams for network reachability change."),await(async function(m){const g=It(m);g.Ea.add(4),await vu(g),g.Ra.set("Unknown"),g.Ea.delete(4),await od(g)})(this))}))})),this.Ra=new qC(a,o)}}async function od(n){if(ns(n))for(const t of n.da)await t(!0)}async function vu(n){for(const t of n.da)await t(!1)}function aE(n,t){const i=It(n);i.Ia.has(t.targetId)||(i.Ia.set(t.targetId,t),Mg(i)?Ng(i):Ro(i).O_()&&Dg(i,t))}function jg(n,t){const i=It(n),a=Ro(i);i.Ia.delete(t),a.O_()&&sE(i,t),i.Ia.size===0&&(a.O_()?a.L_():ns(i)&&i.Ra.set("Unknown"))}function Dg(n,t){if(n.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(At.min())>0){const i=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(i)}Ro(n).Y_(t)}function sE(n,t){n.Va.Ue(t),Ro(n).Z_(t)}function Ng(n){n.Va=new $3({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),Ro(n).start(),n.Ra.ua()}function Mg(n){return ns(n)&&!Ro(n).x_()&&n.Ia.size>0}function ns(n){return It(n).Ea.size===0}function oE(n){n.Va=void 0}async function YC(n){n.Ra.set("Online")}async function QC(n){n.Ia.forEach(((t,i)=>{Dg(n,t)}))}async function XC(n,t){oE(n),Mg(n)?(n.Ra.ha(t),Ng(n)):n.Ra.set("Unknown")}async function WC(n,t,i){if(n.Ra.set("Online"),t instanceof Hw&&t.state===2&&t.cause)try{await(async function(o,u){const d=u.cause;for(const p of u.targetIds)o.Ia.has(p)&&(await o.remoteSyncer.rejectListen(p,d),o.Ia.delete(p),o.Va.removeTarget(p))})(n,t)}catch(a){pt(Za,"Failed to remove targets %s: %s ",t.targetIds.join(","),a),await Ph(n,a)}else if(t instanceof yh?n.Va.Ze(t):t instanceof Kw?n.Va.st(t):n.Va.tt(t),!i.isEqual(At.min()))try{const a=await nE(n.localStore);i.compareTo(a)>=0&&await(function(u,d){const p=u.Va.Tt(d);return p.targetChanges.forEach(((m,g)=>{if(m.resumeToken.approximateByteSize()>0){const v=u.Ia.get(g);v&&u.Ia.set(g,v.withResumeToken(m.resumeToken,d))}})),p.targetMismatches.forEach(((m,g)=>{const v=u.Ia.get(m);if(!v)return;u.Ia.set(m,v.withResumeToken(Je.EMPTY_BYTE_STRING,v.snapshotVersion)),sE(u,m);const E=new Qr(v.target,m,g,v.sequenceNumber);Dg(u,E)})),u.remoteSyncer.applyRemoteEvent(p)})(n,i)}catch(a){pt(Za,"Failed to raise snapshot:",a),await Ph(n,a)}}async function Ph(n,t,i){if(!So(t))throw t;n.Ea.add(1),await vu(n),n.Ra.set("Offline"),i||(i=()=>nE(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{pt(Za,"Retrying IndexedDB access"),await i(),n.Ea.delete(1),await od(n)}))}function lE(n,t){return t().catch((i=>Ph(n,i,t)))}async function ld(n){const t=It(n),i=ra(t);let a=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:gg;for(;ZC(t);)try{const o=await MC(t.localStore,a);if(o===null){t.Ta.length===0&&i.L_();break}a=o.batchId,JC(t,o)}catch(o){await Ph(t,o)}uE(t)&&cE(t)}function ZC(n){return ns(n)&&n.Ta.length<10}function JC(n,t){n.Ta.push(t);const i=ra(n);i.O_()&&i.X_&&i.ea(t.mutations)}function uE(n){return ns(n)&&!ra(n).x_()&&n.Ta.length>0}function cE(n){ra(n).start()}async function tj(n){ra(n).ra()}async function ej(n){const t=ra(n);for(const i of n.Ta)t.ea(i.mutations)}async function nj(n,t,i){const a=n.Ta.shift(),o=bg.from(a,t,i);await lE(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await ld(n)}async function ij(n,t){t&&ra(n).X_&&await(async function(a,o){if((function(d){return U3(d)&&d!==it.ABORTED})(o.code)){const u=a.Ta.shift();ra(a).B_(),await lE(a,(()=>a.remoteSyncer.rejectFailedWrite(u.batchId,o))),await ld(a)}})(n,t),uE(n)&&cE(n)}async function Jv(n,t){const i=It(n);i.asyncQueue.verifyOperationInProgress(),pt(Za,"RemoteStore received new credentials");const a=ns(i);i.Ea.add(3),await vu(i),a&&i.Ra.set("Unknown"),await i.remoteSyncer.handleCredentialChange(t),i.Ea.delete(3),await od(i)}async function rj(n,t){const i=It(n);t?(i.Ea.delete(2),await od(i)):t||(i.Ea.add(2),await vu(i),i.Ra.set("Unknown"))}function Ro(n){return n.ma||(n.ma=(function(i,a,o){const u=It(i);return u.sa(),new BC(a,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(n.datastore,n.asyncQueue,{Xo:YC.bind(null,n),t_:QC.bind(null,n),r_:XC.bind(null,n),H_:WC.bind(null,n)}),n.da.push((async t=>{t?(n.ma.B_(),Mg(n)?Ng(n):n.Ra.set("Unknown")):(await n.ma.stop(),oE(n))}))),n.ma}function ra(n){return n.fa||(n.fa=(function(i,a,o){const u=It(i);return u.sa(),new FC(a,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:tj.bind(null,n),r_:ij.bind(null,n),ta:ej.bind(null,n),na:nj.bind(null,n)}),n.da.push((async t=>{t?(n.fa.B_(),await ld(n)):(await n.fa.stop(),n.Ta.length>0&&(pt(Za,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(t,i,a,o,u){this.asyncQueue=t,this.timerId=i,this.targetTimeMs=a,this.op=o,this.removalCallback=u,this.deferred=new ir,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((d=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,i,a,o,u){const d=Date.now()+a,p=new Og(t,i,d,o,u);return p.start(a),p}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ft(it.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kg(n,t){if(or("AsyncQueue",`${t}: ${n}`),So(n))return new ft(it.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{static emptySet(t){return new no(t.comparator)}constructor(t){this.comparator=t?(i,a)=>t(i,a)||vt.comparator(i.key,a.key):(i,a)=>vt.comparator(i.key,a.key),this.keyedMap=Ll(),this.sortedSet=new me(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const i=this.keyedMap.get(t);return i?this.sortedSet.indexOf(i):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((i,a)=>(t(i),!1)))}add(t){const i=this.delete(t.key);return i.copy(i.keyedMap.insert(t.key,t),i.sortedSet.insert(t,null))}delete(t){const i=this.get(t);return i?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(i)):this}isEqual(t){if(!(t instanceof no)||this.size!==t.size)return!1;const i=this.sortedSet.getIterator(),a=t.sortedSet.getIterator();for(;i.hasNext();){const o=i.getNext().key,u=a.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const t=[];return this.forEach((i=>{t.push(i.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,i){const a=new no;return a.comparator=this.comparator,a.keyedMap=t,a.sortedSet=i,a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(){this.ga=new me(vt.comparator)}track(t){const i=t.doc.key,a=this.ga.get(i);a?t.type!==0&&a.type===3?this.ga=this.ga.insert(i,t):t.type===3&&a.type!==1?this.ga=this.ga.insert(i,{type:a.type,doc:t.doc}):t.type===2&&a.type===2?this.ga=this.ga.insert(i,{type:2,doc:t.doc}):t.type===2&&a.type===0?this.ga=this.ga.insert(i,{type:0,doc:t.doc}):t.type===1&&a.type===0?this.ga=this.ga.remove(i):t.type===1&&a.type===2?this.ga=this.ga.insert(i,{type:1,doc:a.doc}):t.type===0&&a.type===1?this.ga=this.ga.insert(i,{type:2,doc:t.doc}):Tt(63341,{Rt:t,pa:a}):this.ga=this.ga.insert(i,t)}ya(){const t=[];return this.ga.inorderTraversal(((i,a)=>{t.push(a)})),t}}class go{constructor(t,i,a,o,u,d,p,m,g){this.query=t,this.docs=i,this.oldDocs=a,this.docChanges=o,this.mutatedKeys=u,this.fromCache=d,this.syncStateChanged=p,this.excludesMetadataChanges=m,this.hasCachedResults=g}static fromInitialDocuments(t,i,a,o,u){const d=[];return i.forEach((p=>{d.push({type:0,doc:p})})),new go(t,i,no.emptySet(i),d,a,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ed(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const i=this.docChanges,a=t.docChanges;if(i.length!==a.length)return!1;for(let o=0;o<i.length;o++)if(i[o].type!==a[o].type||!i[o].doc.isEqual(a[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aj{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class sj{constructor(){this.queries=e_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(i,a){const o=It(i),u=o.queries;o.queries=e_(),u.forEach(((d,p)=>{for(const m of p.Sa)m.onError(a)}))})(this,new ft(it.ABORTED,"Firestore shutting down"))}}function e_(){return new es((n=>Cw(n)),ed)}async function hE(n,t){const i=It(n);let a=3;const o=t.query;let u=i.queries.get(o);u?!u.ba()&&t.Da()&&(a=2):(u=new aj,a=t.Da()?0:1);try{switch(a){case 0:u.wa=await i.onListen(o,!0);break;case 1:u.wa=await i.onListen(o,!1);break;case 2:await i.onFirstRemoteStoreListen(o)}}catch(d){const p=kg(d,`Initialization of query '${Ws(t.query)}' failed`);return void t.onError(p)}i.queries.set(o,u),u.Sa.push(t),t.va(i.onlineState),u.wa&&t.Fa(u.wa)&&Vg(i)}async function dE(n,t){const i=It(n),a=t.query;let o=3;const u=i.queries.get(a);if(u){const d=u.Sa.indexOf(t);d>=0&&(u.Sa.splice(d,1),u.Sa.length===0?o=t.Da()?0:1:!u.ba()&&t.Da()&&(o=2))}switch(o){case 0:return i.queries.delete(a),i.onUnlisten(a,!0);case 1:return i.queries.delete(a),i.onUnlisten(a,!1);case 2:return i.onLastRemoteStoreUnlisten(a);default:return}}function oj(n,t){const i=It(n);let a=!1;for(const o of t){const u=o.query,d=i.queries.get(u);if(d){for(const p of d.Sa)p.Fa(o)&&(a=!0);d.wa=o}}a&&Vg(i)}function lj(n,t,i){const a=It(n),o=a.queries.get(t);if(o)for(const u of o.Sa)u.onError(i);a.queries.delete(t)}function Vg(n){n.Ca.forEach((t=>{t.next()}))}var Nm,n_;(n_=Nm||(Nm={})).Ma="default",n_.Cache="cache";class fE{constructor(t,i,a){this.query=t,this.xa=i,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=a||{}}Fa(t){if(!this.options.includeMetadataChanges){const a=[];for(const o of t.docChanges)o.type!==3&&a.push(o);t=new go(t.query,t.docs,t.oldDocs,a,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let i=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),i=!0):this.La(t,this.onlineState)&&(this.ka(t),i=!0),this.Na=t,i}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let i=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),i=!0),i}La(t,i){if(!t.fromCache||!this.Da())return!0;const a=i!=="Offline";return(!this.options.qa||!a)&&(!t.docs.isEmpty()||t.hasCachedResults||i==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const i=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!i)&&this.options.includeMetadataChanges===!0}ka(t){t=go.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Nm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(t){this.key=t}}class mE{constructor(t){this.key=t}}class uj{constructor(t,i){this.query=t,this.Ya=i,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ut(),this.mutatedKeys=Ut(),this.eu=jw(t),this.tu=new no(this.eu)}get nu(){return this.Ya}ru(t,i){const a=i?i.iu:new t_,o=i?i.tu:this.tu;let u=i?i.mutatedKeys:this.mutatedKeys,d=o,p=!1;const m=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,g=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal(((v,E)=>{const T=o.get(v),A=nd(this.query,E)?E:null,M=!!T&&this.mutatedKeys.has(T.key),k=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let V=!1;T&&A?T.data.isEqual(A.data)?M!==k&&(a.track({type:3,doc:A}),V=!0):this.su(T,A)||(a.track({type:2,doc:A}),V=!0,(m&&this.eu(A,m)>0||g&&this.eu(A,g)<0)&&(p=!0)):!T&&A?(a.track({type:0,doc:A}),V=!0):T&&!A&&(a.track({type:1,doc:T}),V=!0,(m||g)&&(p=!0)),V&&(A?(d=d.add(A),u=k?u.add(v):u.delete(v)):(d=d.delete(v),u=u.delete(v)))})),this.query.limit!==null)for(;d.size>this.query.limit;){const v=this.query.limitType==="F"?d.last():d.first();d=d.delete(v.key),u=u.delete(v.key),a.track({type:1,doc:v})}return{tu:d,iu:a,Cs:p,mutatedKeys:u}}su(t,i){return t.hasLocalMutations&&i.hasCommittedMutations&&!i.hasLocalMutations}applyChanges(t,i,a,o){const u=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const d=t.iu.ya();d.sort(((v,E)=>(function(A,M){const k=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Tt(20277,{Rt:V})}};return k(A)-k(M)})(v.type,E.type)||this.eu(v.doc,E.doc))),this.ou(a),o=o??!1;const p=i&&!o?this._u():[],m=this.Xa.size===0&&this.current&&!o?1:0,g=m!==this.Za;return this.Za=m,d.length!==0||g?{snapshot:new go(this.query,t.tu,u,d,t.mutatedKeys,m===0,g,!1,!!a&&a.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new t_,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((i=>this.Ya=this.Ya.add(i))),t.modifiedDocuments.forEach((i=>{})),t.removedDocuments.forEach((i=>this.Ya=this.Ya.delete(i))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=Ut(),this.tu.forEach((a=>{this.uu(a.key)&&(this.Xa=this.Xa.add(a.key))}));const i=[];return t.forEach((a=>{this.Xa.has(a)||i.push(new mE(a))})),this.Xa.forEach((a=>{t.has(a)||i.push(new pE(a))})),i}cu(t){this.Ya=t.Qs,this.Xa=Ut();const i=this.ru(t.documents);return this.applyChanges(i,!0)}lu(){return go.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Pg="SyncEngine";class cj{constructor(t,i,a){this.query=t,this.targetId=i,this.view=a}}class hj{constructor(t){this.key=t,this.hu=!1}}class dj{constructor(t,i,a,o,u,d){this.localStore=t,this.remoteStore=i,this.eventManager=a,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=d,this.Pu={},this.Tu=new es((p=>Cw(p)),ed),this.Iu=new Map,this.Eu=new Set,this.du=new me(vt.comparator),this.Au=new Map,this.Ru=new Ag,this.Vu={},this.mu=new Map,this.fu=mo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function fj(n,t,i=!0){const a=wE(n);let o;const u=a.Tu.get(t);return u?(a.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await gE(a,t,i,!0),o}async function pj(n,t){const i=wE(n);await gE(i,t,!0,!1)}async function gE(n,t,i,a){const o=await OC(n.localStore,Ti(t)),u=o.targetId,d=n.sharedClientState.addLocalQueryTarget(u,i);let p;return a&&(p=await mj(n,t,u,d==="current",o.resumeToken)),n.isPrimaryClient&&i&&aE(n.remoteStore,o),p}async function mj(n,t,i,a,o){n.pu=(E,T,A)=>(async function(k,V,B,q){let Z=V.view.ru(B);Z.Cs&&(Z=await Yv(k.localStore,V.query,!1).then((({documents:I})=>V.view.ru(I,Z))));const lt=q&&q.targetChanges.get(V.targetId),K=q&&q.targetMismatches.get(V.targetId)!=null,ot=V.view.applyChanges(Z,k.isPrimaryClient,lt,K);return r_(k,V.targetId,ot.au),ot.snapshot})(n,E,T,A);const u=await Yv(n.localStore,t,!0),d=new uj(t,u.Qs),p=d.ru(u.documents),m=xu.createSynthesizedTargetChangeForCurrentChange(i,a&&n.onlineState!=="Offline",o),g=d.applyChanges(p,n.isPrimaryClient,m);r_(n,i,g.au);const v=new cj(t,i,d);return n.Tu.set(t,v),n.Iu.has(i)?n.Iu.get(i).push(t):n.Iu.set(i,[t]),g.snapshot}async function gj(n,t,i){const a=It(n),o=a.Tu.get(t),u=a.Iu.get(o.targetId);if(u.length>1)return a.Iu.set(o.targetId,u.filter((d=>!ed(d,t)))),void a.Tu.delete(t);a.isPrimaryClient?(a.sharedClientState.removeLocalQueryTarget(o.targetId),a.sharedClientState.isActiveQueryTarget(o.targetId)||await jm(a.localStore,o.targetId,!1).then((()=>{a.sharedClientState.clearQueryState(o.targetId),i&&jg(a.remoteStore,o.targetId),Mm(a,o.targetId)})).catch(To)):(Mm(a,o.targetId),await jm(a.localStore,o.targetId,!0))}async function yj(n,t){const i=It(n),a=i.Tu.get(t),o=i.Iu.get(a.targetId);i.isPrimaryClient&&o.length===1&&(i.sharedClientState.removeLocalQueryTarget(a.targetId),jg(i.remoteStore,a.targetId))}async function xj(n,t,i){const a=Sj(n);try{const o=await(function(d,p){const m=It(d),g=ue.now(),v=p.reduce(((A,M)=>A.add(M.key)),Ut());let E,T;return m.persistence.runTransaction("Locally write mutations","readwrite",(A=>{let M=ur(),k=Ut();return m.Ns.getEntries(A,v).next((V=>{M=V,M.forEach(((B,q)=>{q.isValidDocument()||(k=k.add(B))}))})).next((()=>m.localDocuments.getOverlayedDocuments(A,M))).next((V=>{E=V;const B=[];for(const q of p){const Z=M3(q,E.get(q.key).overlayedDocument);Z!=null&&B.push(new oa(q.key,Z,ww(Z.value.mapValue),Si.exists(!0)))}return m.mutationQueue.addMutationBatch(A,g,B,p)})).next((V=>{T=V;const B=V.applyToLocalDocumentSet(E,k);return m.documentOverlayCache.saveOverlays(A,V.batchId,B)}))})).then((()=>({batchId:T.batchId,changes:Nw(E)})))})(a.localStore,t);a.sharedClientState.addPendingMutation(o.batchId),(function(d,p,m){let g=d.Vu[d.currentUser.toKey()];g||(g=new me(Pt)),g=g.insert(p,m),d.Vu[d.currentUser.toKey()]=g})(a,o.batchId,i),await _u(a,o.changes),await ld(a.remoteStore)}catch(o){const u=kg(o,"Failed to persist write");i.reject(u)}}async function yE(n,t){const i=It(n);try{const a=await DC(i.localStore,t);t.targetChanges.forEach(((o,u)=>{const d=i.Au.get(u);d&&(Yt(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?d.hu=!0:o.modifiedDocuments.size>0?Yt(d.hu,14607):o.removedDocuments.size>0&&(Yt(d.hu,42227),d.hu=!1))})),await _u(i,a,t)}catch(a){await To(a)}}function i_(n,t,i){const a=It(n);if(a.isPrimaryClient&&i===0||!a.isPrimaryClient&&i===1){const o=[];a.Tu.forEach(((u,d)=>{const p=d.view.va(t);p.snapshot&&o.push(p.snapshot)})),(function(d,p){const m=It(d);m.onlineState=p;let g=!1;m.queries.forEach(((v,E)=>{for(const T of E.Sa)T.va(p)&&(g=!0)})),g&&Vg(m)})(a.eventManager,t),o.length&&a.Pu.H_(o),a.onlineState=t,a.isPrimaryClient&&a.sharedClientState.setOnlineState(t)}}async function vj(n,t,i){const a=It(n);a.sharedClientState.updateQueryState(t,"rejected",i);const o=a.Au.get(t),u=o&&o.key;if(u){let d=new me(vt.comparator);d=d.insert(u,on.newNoDocument(u,At.min()));const p=Ut().add(u),m=new ad(At.min(),new Map,new me(Pt),d,p);await yE(a,m),a.du=a.du.remove(u),a.Au.delete(t),Ug(a)}else await jm(a.localStore,t,!1).then((()=>Mm(a,t,i))).catch(To)}async function _j(n,t){const i=It(n),a=t.batch.batchId;try{const o=await jC(i.localStore,t);vE(i,a,null),xE(i,a),i.sharedClientState.updateMutationState(a,"acknowledged"),await _u(i,o)}catch(o){await To(o)}}async function wj(n,t,i){const a=It(n);try{const o=await(function(d,p){const m=It(d);return m.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let v;return m.mutationQueue.lookupMutationBatch(g,p).next((E=>(Yt(E!==null,37113),v=E.keys(),m.mutationQueue.removeMutationBatch(g,E)))).next((()=>m.mutationQueue.performConsistencyCheck(g))).next((()=>m.documentOverlayCache.removeOverlaysForBatchId(g,v,p))).next((()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v))).next((()=>m.localDocuments.getDocuments(g,v)))}))})(a.localStore,t);vE(a,t,i),xE(a,t),a.sharedClientState.updateMutationState(t,"rejected",i),await _u(a,o)}catch(o){await To(o)}}function xE(n,t){(n.mu.get(t)||[]).forEach((i=>{i.resolve()})),n.mu.delete(t)}function vE(n,t,i){const a=It(n);let o=a.Vu[a.currentUser.toKey()];if(o){const u=o.get(t);u&&(i?u.reject(i):u.resolve(),o=o.remove(t)),a.Vu[a.currentUser.toKey()]=o}}function Mm(n,t,i=null){n.sharedClientState.removeLocalQueryTarget(t);for(const a of n.Iu.get(t))n.Tu.delete(a),i&&n.Pu.yu(a,i);n.Iu.delete(t),n.isPrimaryClient&&n.Ru.jr(t).forEach((a=>{n.Ru.containsKey(a)||_E(n,a)}))}function _E(n,t){n.Eu.delete(t.path.canonicalString());const i=n.du.get(t);i!==null&&(jg(n.remoteStore,i),n.du=n.du.remove(t),n.Au.delete(i),Ug(n))}function r_(n,t,i){for(const a of i)a instanceof pE?(n.Ru.addReference(a.key,t),Ej(n,a)):a instanceof mE?(pt(Pg,"Document no longer in limbo: "+a.key),n.Ru.removeReference(a.key,t),n.Ru.containsKey(a.key)||_E(n,a.key)):Tt(19791,{wu:a})}function Ej(n,t){const i=t.key,a=i.path.canonicalString();n.du.get(i)||n.Eu.has(a)||(pt(Pg,"New document in limbo: "+i),n.Eu.add(a),Ug(n))}function Ug(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const i=new vt(ae.fromString(t)),a=n.fu.next();n.Au.set(a,new hj(i)),n.du=n.du.insert(i,a),aE(n.remoteStore,new Qr(Ti(wg(i.path)),a,"TargetPurposeLimboResolution",Zh.ce))}}async function _u(n,t,i){const a=It(n),o=[],u=[],d=[];a.Tu.isEmpty()||(a.Tu.forEach(((p,m)=>{d.push(a.pu(m,t,i).then((g=>{if((g||i)&&a.isPrimaryClient){const v=g?!g.fromCache:i?.targetChanges.get(m.targetId)?.current;a.sharedClientState.updateQueryState(m.targetId,v?"current":"not-current")}if(g){o.push(g);const v=Ig.As(m.targetId,g);u.push(v)}})))})),await Promise.all(d),a.Pu.H_(o),await(async function(m,g){const v=It(m);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(E=>st.forEach(g,(T=>st.forEach(T.Es,(A=>v.persistence.referenceDelegate.addReference(E,T.targetId,A))).next((()=>st.forEach(T.ds,(A=>v.persistence.referenceDelegate.removeReference(E,T.targetId,A)))))))))}catch(E){if(!So(E))throw E;pt(Cg,"Failed to update sequence numbers: "+E)}for(const E of g){const T=E.targetId;if(!E.fromCache){const A=v.Ms.get(T),M=A.snapshotVersion,k=A.withLastLimboFreeSnapshotVersion(M);v.Ms=v.Ms.insert(T,k)}}})(a.localStore,u))}async function bj(n,t){const i=It(n);if(!i.currentUser.isEqual(t)){pt(Pg,"User change. New user:",t.toKey());const a=await eE(i.localStore,t);i.currentUser=t,(function(u,d){u.mu.forEach((p=>{p.forEach((m=>{m.reject(new ft(it.CANCELLED,d))}))})),u.mu.clear()})(i,"'waitForPendingWrites' promise is rejected due to a user change."),i.sharedClientState.handleUserChange(t,a.removedBatchIds,a.addedBatchIds),await _u(i,a.Ls)}}function Tj(n,t){const i=It(n),a=i.Au.get(t);if(a&&a.hu)return Ut().add(a.key);{let o=Ut();const u=i.Iu.get(t);if(!u)return o;for(const d of u){const p=i.Tu.get(d);o=o.unionWith(p.view.nu)}return o}}function wE(n){const t=It(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=yE.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Tj.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=vj.bind(null,t),t.Pu.H_=oj.bind(null,t.eventManager),t.Pu.yu=lj.bind(null,t.eventManager),t}function Sj(n){const t=It(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=_j.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=wj.bind(null,t),t}class Uh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=sd(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,i){return null}Mu(t,i){return null}vu(t){return CC(this.persistence,new AC,t.initialUser,this.serializer)}Cu(t){return new tE(Rg.mi,this.serializer)}Du(t){return new VC}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Uh.provider={build:()=>new Uh};class Aj extends Uh{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,i){Yt(this.persistence.referenceDelegate instanceof Vh,46915);const a=this.persistence.referenceDelegate.garbageCollector;return new hC(a,t.asyncQueue,i)}Cu(t){const i=this.cacheSizeBytes!==void 0?xn.withCacheSize(this.cacheSizeBytes):xn.DEFAULT;return new tE((a=>Vh.mi(a,i)),this.serializer)}}class Om{async initialize(t,i){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(i),this.remoteStore=this.createRemoteStore(i),this.eventManager=this.createEventManager(i),this.syncEngine=this.createSyncEngine(i,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>i_(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=bj.bind(null,this.syncEngine),await rj(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new sj})()}createDatastore(t){const i=sd(t.databaseInfo.databaseId),a=(function(u){return new $C(u)})(t.databaseInfo);return(function(u,d,p,m){return new HC(u,d,p,m)})(t.authCredentials,t.appCheckCredentials,a,i)}createRemoteStore(t){return(function(a,o,u,d,p){return new GC(a,o,u,d,p)})(this.localStore,this.datastore,t.asyncQueue,(i=>i_(this.syncEngine,i,0)),(function(){return Wv.v()?new Wv:new PC})())}createSyncEngine(t,i){return(function(o,u,d,p,m,g,v){const E=new dj(o,u,d,p,m,g);return v&&(E.gu=!0),E})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,i)}async terminate(){await(async function(i){const a=It(i);pt(Za,"RemoteStore shutting down."),a.Ea.add(5),await vu(a),a.Aa.shutdown(),a.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Om.provider={build:()=>new Om};/**
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
 */class EE{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):or("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,i){setTimeout((()=>{this.muted||t(i)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa="FirestoreClient";class Rj{constructor(t,i,a,o,u){this.authCredentials=t,this.appCheckCredentials=i,this.asyncQueue=a,this.databaseInfo=o,this.user=sn.UNAUTHENTICATED,this.clientId=mg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(a,(async d=>{pt(aa,"Received user=",d.uid),await this.authCredentialListener(d),this.user=d})),this.appCheckCredentials.start(a,(d=>(pt(aa,"Received new app check token=",d),this.appCheckCredentialListener(d,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ir;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(i){const a=kg(i,"Failed to shutdown persistence");t.reject(a)}})),t.promise}}async function zp(n,t){n.asyncQueue.verifyOperationInProgress(),pt(aa,"Initializing OfflineComponentProvider");const i=n.configuration;await t.initialize(i);let a=i.initialUser;n.setCredentialChangeListener((async o=>{a.isEqual(o)||(await eE(t.localStore,o),a=o)})),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t}async function a_(n,t){n.asyncQueue.verifyOperationInProgress();const i=await Ij(n);pt(aa,"Initializing OnlineComponentProvider"),await t.initialize(i,n.configuration),n.setCredentialChangeListener((a=>Jv(t.remoteStore,a))),n.setAppCheckTokenChangeListener(((a,o)=>Jv(t.remoteStore,o))),n._onlineComponents=t}async function Ij(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){pt(aa,"Using user provided OfflineComponentProvider");try{await zp(n,n._uninitializedComponentsProvider._offline)}catch(t){const i=t;if(!(function(o){return o.name==="FirebaseError"?o.code===it.FAILED_PRECONDITION||o.code===it.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(i))throw i;co("Error using user provided cache. Falling back to memory cache: "+i),await zp(n,new Uh)}}else pt(aa,"Using default OfflineComponentProvider"),await zp(n,new Aj(void 0));return n._offlineComponents}async function bE(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(pt(aa,"Using user provided OnlineComponentProvider"),await a_(n,n._uninitializedComponentsProvider._online)):(pt(aa,"Using default OnlineComponentProvider"),await a_(n,new Om))),n._onlineComponents}function Cj(n){return bE(n).then((t=>t.syncEngine))}async function TE(n){const t=await bE(n),i=t.eventManager;return i.onListen=fj.bind(null,t.syncEngine),i.onUnlisten=gj.bind(null,t.syncEngine),i.onFirstRemoteStoreListen=pj.bind(null,t.syncEngine),i.onLastRemoteStoreUnlisten=yj.bind(null,t.syncEngine),i}function jj(n,t,i={}){const a=new ir;return n.asyncQueue.enqueueAndForget((async()=>(function(u,d,p,m,g){const v=new EE({next:T=>{v.Nu(),d.enqueueAndForget((()=>dE(u,E)));const A=T.docs.has(p);!A&&T.fromCache?g.reject(new ft(it.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&T.fromCache&&m&&m.source==="server"?g.reject(new ft(it.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(T)},error:T=>g.reject(T)}),E=new fE(wg(p.path),v,{includeMetadataChanges:!0,qa:!0});return hE(u,E)})(await TE(n),n.asyncQueue,t,i,a))),a.promise}function Dj(n,t,i={}){const a=new ir;return n.asyncQueue.enqueueAndForget((async()=>(function(u,d,p,m,g){const v=new EE({next:T=>{v.Nu(),d.enqueueAndForget((()=>dE(u,E))),T.fromCache&&m.source==="server"?g.reject(new ft(it.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(T)},error:T=>g.reject(T)}),E=new fE(p,v,{includeMetadataChanges:!0,qa:!0});return hE(u,E)})(await TE(n),n.asyncQueue,t,i,a))),a.promise}/**
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
 */function SE(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const s_=new Map;/**
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
 */const AE="firestore.googleapis.com",o_=!0;class l_{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new ft(it.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=AE,this.ssl=o_}else this.host=t.host,this.ssl=t.ssl??o_;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Jw;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<uC)throw new ft(it.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}GI("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=SE(t.experimentalLongPollingOptions??{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new ft(it.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new ft(it.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new ft(it.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(a,o){return a.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ud{constructor(t,i,a,o){this._authCredentials=t,this._appCheckCredentials=i,this._databaseId=a,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new l_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ft(it.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new ft(it.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new l_(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(a){if(!a)return new PI;switch(a.type){case"firstParty":return new $I(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new ft(it.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(i){const a=s_.get(i);a&&(pt("ComponentProvider","Removing Datastore"),s_.delete(i),a.terminate())})(this),Promise.resolve()}}function Nj(n,t,i,a={}){n=lr(n,ud);const o=hg(t),u=n._getSettings(),d={...u,emulatorOptions:n._getEmulatorOptions()},p=`${t}:${i}`;o&&(c6(`https://${p}`),p6("Firestore",!0)),u.host!==AE&&u.host!==p&&co("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m={...u,host:p,ssl:o,emulatorOptions:a};if(!Ih(m,d)&&(n._setSettings(m),a.mockUserToken)){let g,v;if(typeof a.mockUserToken=="string")g=a.mockUserToken,v=sn.MOCK_USER;else{g=h6(a.mockUserToken,n._app?.options.projectId);const E=a.mockUserToken.sub||a.mockUserToken.user_id;if(!E)throw new ft(it.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new sn(E)}n._authCredentials=new UI(new uw(g,v))}}/**
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
 */class is{constructor(t,i,a){this.converter=i,this._query=a,this.type="query",this.firestore=t}withConverter(t){return new is(this.firestore,t,this._query)}}class Ae{constructor(t,i,a){this.converter=i,this._key=a,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ae(this.firestore,t,this._key)}toJSON(){return{type:Ae._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,i,a){if(gu(i,Ae._jsonSchema))return new Ae(t,a||null,new vt(ae.fromString(i.referencePath)))}}Ae._jsonSchemaVersion="firestore/documentReference/1.0",Ae._jsonSchema={type:Ne("string",Ae._jsonSchemaVersion),referencePath:Ne("string")};class Jr extends is{constructor(t,i,a){super(t,i,wg(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ae(this.firestore,null,new vt(t))}withConverter(t){return new Jr(this.firestore,t,this._path)}}function xh(n,t,...i){if(n=ar(n),cw("collection","path",t),n instanceof ud){const a=ae.fromString(t,...i);return wv(a),new Jr(n,null,a)}{if(!(n instanceof Ae||n instanceof Jr))throw new ft(it.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=n._path.child(ae.fromString(t,...i));return wv(a),new Jr(n.firestore,null,a)}}function Xl(n,t,...i){if(n=ar(n),arguments.length===1&&(t=mg.newId()),cw("doc","path",t),n instanceof ud){const a=ae.fromString(t,...i);return _v(a),new Ae(n,null,new vt(a))}{if(!(n instanceof Ae||n instanceof Jr))throw new ft(it.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=n._path.child(ae.fromString(t,...i));return _v(a),new Ae(n.firestore,n instanceof Jr?n.converter:null,new vt(a))}}/**
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
 */const u_="AsyncQueue";class c_{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new iE(this,"async_queue_retry"),this._c=()=>{const a=Up();a&&pt(u_,"Visibility state changed to "+a.visibilityState),this.M_.w_()},this.ac=t;const i=Up();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const i=Up();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const i=new ir;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(i.resolve,i.reject),i.promise))).then((()=>i.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!So(t))throw t;pt(u_,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const i=this.ac.then((()=>(this.rc=!0,t().catch((a=>{throw this.nc=a,this.rc=!1,or("INTERNAL UNHANDLED ERROR: ",h_(a)),a})).then((a=>(this.rc=!1,a))))));return this.ac=i,i}enqueueAfterDelay(t,i,a){this.uc(),this.oc.indexOf(t)>-1&&(i=0);const o=Og.createAndSchedule(this,t,i,a,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&Tt(47125,{Pc:h_(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const i of this.tc)if(i.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((i,a)=>i.targetTimeMs-a.targetTimeMs));for(const i of this.tc)if(i.skipDelay(),t!=="all"&&i.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const i=this.tc.indexOf(t);this.tc.splice(i,1)}}function h_(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class wu extends ud{constructor(t,i,a,o){super(t,i,a,o),this.type="firestore",this._queue=new c_,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new c_(t),this._firestoreClient=void 0,await t}}}function RE(n,t){const i=typeof n=="object"?n:TI(),a=typeof n=="string"?n:Dh,o=vI(i,"firestore").getImmediate({identifier:a});if(!o._initialized){const u=l6("firestore");u&&Nj(o,...u)}return o}function zg(n){if(n._terminated)throw new ft(it.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Mj(n),n._firestoreClient}function Mj(n){const t=n._freezeSettings(),i=(function(o,u,d,p){return new r3(o,u,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,SE(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,t);n._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new Rj(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&(function(o){const u=o?._online.build();return{_offline:o?._offline.build(u),_online:u}})(n._componentsProvider))}/**
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
 */class Fn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Fn(Je.fromBase64String(t))}catch(i){throw new ft(it.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(t){return new Fn(Je.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Fn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(gu(t,Fn._jsonSchema))return Fn.fromBase64String(t.bytes)}}Fn._jsonSchemaVersion="firestore/bytes/1.0",Fn._jsonSchema={type:Ne("string",Fn._jsonSchemaVersion),bytes:Ne("string")};/**
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
 */class cd{constructor(...t){for(let i=0;i<t.length;++i)if(t[i].length===0)throw new ft(it.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class hd{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(t,i){if(!isFinite(t)||t<-90||t>90)throw new ft(it.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(i)||i<-180||i>180)throw new ft(it.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+i);this._lat=t,this._long=i}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Pt(this._lat,t._lat)||Pt(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ri._jsonSchemaVersion}}static fromJSON(t){if(gu(t,Ri._jsonSchema))return new Ri(t.latitude,t.longitude)}}Ri._jsonSchemaVersion="firestore/geoPoint/1.0",Ri._jsonSchema={type:Ne("string",Ri._jsonSchemaVersion),latitude:Ne("number"),longitude:Ne("number")};/**
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
 */class Ii{constructor(t){this._values=(t||[]).map((i=>i))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(a,o){if(a.length!==o.length)return!1;for(let u=0;u<a.length;++u)if(a[u]!==o[u])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Ii._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(gu(t,Ii._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((i=>typeof i=="number")))return new Ii(t.vectorValues);throw new ft(it.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ii._jsonSchemaVersion="firestore/vectorValue/1.0",Ii._jsonSchema={type:Ne("string",Ii._jsonSchemaVersion),vectorValues:Ne("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oj=/^__.*__$/;class kj{constructor(t,i,a){this.data=t,this.fieldMask=i,this.fieldTransforms=a}toMutation(t,i){return this.fieldMask!==null?new oa(t,this.data,this.fieldMask,i,this.fieldTransforms):new yu(t,this.data,i,this.fieldTransforms)}}class IE{constructor(t,i,a){this.data=t,this.fieldMask=i,this.fieldTransforms=a}toMutation(t,i){return new oa(t,this.data,this.fieldMask,i,this.fieldTransforms)}}function CE(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Tt(40011,{Ac:n})}}class Lg{constructor(t,i,a,o,u,d){this.settings=t,this.databaseId=i,this.serializer=a,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=d||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new Lg({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const i=this.path?.child(t),a=this.Vc({path:i,fc:!1});return a.gc(t),a}yc(t){const i=this.path?.child(t),a=this.Vc({path:i,fc:!1});return a.Rc(),a}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return zh(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((i=>t.isPrefixOf(i)))!==void 0||this.fieldTransforms.find((i=>t.isPrefixOf(i.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(CE(this.Ac)&&Oj.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class Vj{constructor(t,i,a){this.databaseId=t,this.ignoreUndefinedProperties=i,this.serializer=a||sd(t)}Cc(t,i,a,o=!1){return new Lg({Ac:t,methodName:i,Dc:a,path:Ze.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $g(n){const t=n._freezeSettings(),i=sd(n._databaseId);return new Vj(n._databaseId,!!t.ignoreUndefinedProperties,i)}function Pj(n,t,i,a,o,u={}){const d=n.Cc(u.merge||u.mergeFields?2:0,t,i,o);Fg("Data must be an object, but it was:",d,a);const p=jE(a,d);let m,g;if(u.merge)m=new jn(d.fieldMask),g=d.fieldTransforms;else if(u.mergeFields){const v=[];for(const E of u.mergeFields){const T=km(t,E,i);if(!d.contains(T))throw new ft(it.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);NE(v,T)||v.push(T)}m=new jn(v),g=d.fieldTransforms.filter((E=>m.covers(E.field)))}else m=null,g=d.fieldTransforms;return new kj(new vn(p),m,g)}class dd extends hd{_toFieldTransform(t){if(t.Ac!==2)throw t.Ac===1?t.Sc(`${this._methodName}() can only appear at the top level of your update data`):t.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof dd}}class Bg extends hd{constructor(t,i){super(t),this.Fc=i}_toFieldTransform(t){const i=new du(t.serializer,kw(t.serializer,this.Fc));return new C3(t.path,i)}isEqual(t){return t instanceof Bg&&this.Fc===t.Fc}}function Uj(n,t,i,a){const o=n.Cc(1,t,i);Fg("Data must be an object, but it was:",o,a);const u=[],d=vn.empty();sa(a,((m,g)=>{const v=Kg(t,m,i);g=ar(g);const E=o.yc(v);if(g instanceof dd)u.push(v);else{const T=Eu(g,E);T!=null&&(u.push(v),d.set(v,T))}}));const p=new jn(u);return new IE(d,p,o.fieldTransforms)}function zj(n,t,i,a,o,u){const d=n.Cc(1,t,i),p=[km(t,a,i)],m=[o];if(u.length%2!=0)throw new ft(it.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<u.length;T+=2)p.push(km(t,u[T])),m.push(u[T+1]);const g=[],v=vn.empty();for(let T=p.length-1;T>=0;--T)if(!NE(g,p[T])){const A=p[T];let M=m[T];M=ar(M);const k=d.yc(A);if(M instanceof dd)g.push(A);else{const V=Eu(M,k);V!=null&&(g.push(A),v.set(A,V))}}const E=new jn(g);return new IE(v,E,d.fieldTransforms)}function Lj(n,t,i,a=!1){return Eu(i,n.Cc(a?4:3,t))}function Eu(n,t){if(DE(n=ar(n)))return Fg("Unsupported field value:",t,n),jE(n,t);if(n instanceof hd)return(function(a,o){if(!CE(o.Ac))throw o.Sc(`${a._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${a._methodName}() is not currently supported inside arrays`);const u=a._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(a,o){const u=[];let d=0;for(const p of a){let m=Eu(p,o.wc(d));m==null&&(m={nullValue:"NULL_VALUE"}),u.push(m),d++}return{arrayValue:{values:u}}})(n,t)}return(function(a,o){if((a=ar(a))===null)return{nullValue:"NULL_VALUE"};if(typeof a=="number")return kw(o.serializer,a);if(typeof a=="boolean")return{booleanValue:a};if(typeof a=="string")return{stringValue:a};if(a instanceof Date){const u=ue.fromDate(a);return{timestampValue:kh(o.serializer,u)}}if(a instanceof ue){const u=new ue(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:kh(o.serializer,u)}}if(a instanceof Ri)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof Fn)return{bytesValue:qw(o.serializer,a._byteString)};if(a instanceof Ae){const u=o.databaseId,d=a.firestore._databaseId;if(!d.isEqual(u))throw o.Sc(`Document reference is for database ${d.projectId}/${d.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Sg(a.firestore._databaseId||o.databaseId,a._key.path)}}if(a instanceof Ii)return(function(d,p){return{mapValue:{fields:{[vw]:{stringValue:_w},[Nh]:{arrayValue:{values:d.toArray().map((g=>{if(typeof g!="number")throw p.Sc("VectorValues must only contain numeric values.");return Eg(p.serializer,g)}))}}}}}})(a,o);throw o.Sc(`Unsupported field value: ${Wh(a)}`)})(n,t)}function jE(n,t){const i={};return fw(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):sa(n,((a,o)=>{const u=Eu(o,t.mc(a));u!=null&&(i[a]=u)})),{mapValue:{fields:i}}}function DE(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ue||n instanceof Ri||n instanceof Fn||n instanceof Ae||n instanceof hd||n instanceof Ii)}function Fg(n,t,i){if(!DE(i)||!hw(i)){const a=Wh(i);throw a==="an object"?t.Sc(n+" a custom object"):t.Sc(n+" "+a)}}function km(n,t,i){if((t=ar(t))instanceof cd)return t._internalPath;if(typeof t=="string")return Kg(n,t);throw zh("Field path arguments must be of type string or ",n,!1,void 0,i)}const $j=new RegExp("[~\\*/\\[\\]]");function Kg(n,t,i){if(t.search($j)>=0)throw zh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,i);try{return new cd(...t.split("."))._internalPath}catch{throw zh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,i)}}function zh(n,t,i,a,o){const u=a&&!a.isEmpty(),d=o!==void 0;let p=`Function ${t}() called with invalid data`;i&&(p+=" (via `toFirestore()`)"),p+=". ";let m="";return(u||d)&&(m+=" (found",u&&(m+=` in field ${a}`),d&&(m+=` in document ${o}`),m+=")"),new ft(it.INVALID_ARGUMENT,p+n+m)}function NE(n,t){return n.some((i=>i.isEqual(t)))}/**
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
 */class ME{constructor(t,i,a,o,u){this._firestore=t,this._userDataWriter=i,this._key=a,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new Ae(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Bj(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const i=this._document.data.field(Hg("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i)}}}class Bj extends ME{data(){return super.data()}}function Hg(n,t){return typeof t=="string"?Kg(n,t):t instanceof cd?t._internalPath:t._delegate._internalPath}/**
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
 */function Fj(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ft(it.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class qg{}class OE extends qg{}function d_(n,t,...i){let a=[];t instanceof qg&&a.push(t),a=a.concat(i),(function(u){const d=u.filter((m=>m instanceof Yg)).length,p=u.filter((m=>m instanceof Gg)).length;if(d>1||d>0&&p>0)throw new ft(it.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(a);for(const o of a)n=o._apply(n);return n}class Gg extends OE{constructor(t,i,a){super(),this._field=t,this._op=i,this._value=a,this.type="where"}static _create(t,i,a){return new Gg(t,i,a)}_apply(t){const i=this._parse(t);return kE(t._query,i),new is(t.firestore,t.converter,Tm(t._query,i))}_parse(t){const i=$g(t.firestore);return(function(u,d,p,m,g,v,E){let T;if(g.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new ft(it.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){m_(E,v);const M=[];for(const k of E)M.push(p_(m,u,k));T={arrayValue:{values:M}}}else T=p_(m,u,E)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||m_(E,v),T=Lj(p,d,E,v==="in"||v==="not-in");return De.create(g,v,T)})(t._query,"where",i,t.firestore._databaseId,this._field,this._op,this._value)}}class Yg extends qg{constructor(t,i){super(),this.type=t,this._queryConstraints=i}static _create(t,i){return new Yg(t,i)}_parse(t){const i=this._queryConstraints.map((a=>a._parse(t))).filter((a=>a.getFilters().length>0));return i.length===1?i[0]:ai.create(i,this._getOperator())}_apply(t){const i=this._parse(t);return i.getFilters().length===0?t:((function(o,u){let d=o;const p=u.getFlattenedFilters();for(const m of p)kE(d,m),d=Tm(d,m)})(t._query,i),new is(t.firestore,t.converter,Tm(t._query,i)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Qg extends OE{constructor(t,i){super(),this._field=t,this._direction=i,this.type="orderBy"}static _create(t,i){return new Qg(t,i)}_apply(t){const i=(function(o,u,d){if(o.startAt!==null)throw new ft(it.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ft(it.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new uu(u,d)})(t._query,this._field,this._direction);return new is(t.firestore,t.converter,(function(o,u){const d=o.explicitOrderBy.concat([u]);return new Ao(o.path,o.collectionGroup,d,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(t._query,i))}}function f_(n,t="asc"){const i=t,a=Hg("orderBy",n);return Qg._create(a,i)}function p_(n,t,i){if(typeof(i=ar(i))=="string"){if(i==="")throw new ft(it.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Iw(t)&&i.indexOf("/")!==-1)throw new ft(it.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${i}' contains a '/' character.`);const a=t.path.child(ae.fromString(i));if(!vt.isDocumentKey(a))throw new ft(it.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${a}' is not because it has an odd number of segments (${a.length}).`);return Cv(n,new vt(a))}if(i instanceof Ae)return Cv(n,i._key);throw new ft(it.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Wh(i)}.`)}function m_(n,t){if(!Array.isArray(n)||n.length===0)throw new ft(it.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function kE(n,t){const i=(function(o,u){for(const d of o)for(const p of d.getFlattenedFilters())if(u.indexOf(p.op)>=0)return p.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(i!==null)throw i===t.op?new ft(it.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new ft(it.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${i.toString()}' filters.`)}class Kj{convertValue(t,i="none"){switch(ia(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Se(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,i);case 5:return t.stringValue;case 6:return this.convertBytes(na(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,i);case 11:return this.convertObject(t.mapValue,i);case 10:return this.convertVectorValue(t.mapValue);default:throw Tt(62114,{value:t})}}convertObject(t,i){return this.convertObjectMap(t.fields,i)}convertObjectMap(t,i="none"){const a={};return sa(t,((o,u)=>{a[o]=this.convertValue(u,i)})),a}convertVectorValue(t){const i=t.fields?.[Nh].arrayValue?.values?.map((a=>Se(a.doubleValue)));return new Ii(i)}convertGeoPoint(t){return new Ri(Se(t.latitude),Se(t.longitude))}convertArray(t,i){return(t.values||[]).map((a=>this.convertValue(a,i)))}convertServerTimestamp(t,i){switch(i){case"previous":const a=td(t);return a==null?null:this.convertValue(a,i);case"estimate":return this.convertTimestamp(su(t));default:return null}}convertTimestamp(t){const i=ea(t);return new ue(i.seconds,i.nanos)}convertDocumentKey(t,i){const a=ae.fromString(t);Yt(Zw(a),9688,{name:t});const o=new ou(a.get(1),a.get(3)),u=new vt(a.popFirst(5));return o.isEqual(i)||or(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${i.projectId}/${i.database}) instead.`),u}}/**
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
 */function Hj(n,t,i){let a;return a=n?i&&(i.merge||i.mergeFields)?n.toFirestore(t,i):n.toFirestore(t):t,a}class Bl{constructor(t,i){this.hasPendingWrites=t,this.fromCache=i}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Xa extends ME{constructor(t,i,a,o,u,d){super(t,i,a,o,d),this._firestore=t,this._firestoreImpl=t,this.metadata=u}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const i=new vh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(i,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,i={}){if(this._document){const a=this._document.data.field(Hg("DocumentSnapshot.get",t));if(a!==null)return this._userDataWriter.convertValue(a,i.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ft(it.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,i={};return i.type=Xa._jsonSchemaVersion,i.bundle="",i.bundleSource="DocumentSnapshot",i.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?i:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),i.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),i)}}Xa._jsonSchemaVersion="firestore/documentSnapshot/1.0",Xa._jsonSchema={type:Ne("string",Xa._jsonSchemaVersion),bundleSource:Ne("string","DocumentSnapshot"),bundleName:Ne("string"),bundle:Ne("string")};class vh extends Xa{data(t={}){return super.data(t)}}class io{constructor(t,i,a,o){this._firestore=t,this._userDataWriter=i,this._snapshot=o,this.metadata=new Bl(o.hasPendingWrites,o.fromCache),this.query=a}get docs(){const t=[];return this.forEach((i=>t.push(i))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,i){this._snapshot.docs.forEach((a=>{t.call(i,new vh(this._firestore,this._userDataWriter,a.key,a,new Bl(this._snapshot.mutatedKeys.has(a.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const i=!!t.includeMetadataChanges;if(i&&this._snapshot.excludesMetadataChanges)throw new ft(it.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===i||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let d=0;return o._snapshot.docChanges.map((p=>{const m=new vh(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Bl(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:m,oldIndex:-1,newIndex:d++}}))}{let d=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((p=>u||p.type!==3)).map((p=>{const m=new vh(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Bl(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let g=-1,v=-1;return p.type!==0&&(g=d.indexOf(p.doc.key),d=d.delete(p.doc.key)),p.type!==1&&(d=d.add(p.doc),v=d.indexOf(p.doc.key)),{type:qj(p.type),doc:m,oldIndex:g,newIndex:v}}))}})(this,i),this._cachedChangesIncludeMetadataChanges=i),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ft(it.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=io._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=mg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const i=[],a=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(i.push(u._document),a.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function qj(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Tt(61501,{type:n})}}/**
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
 */function _h(n){n=lr(n,Ae);const t=lr(n.firestore,wu);return jj(zg(t),n._key).then((i=>Gj(t,n,i)))}io._jsonSchemaVersion="firestore/querySnapshot/1.0",io._jsonSchema={type:Ne("string",io._jsonSchemaVersion),bundleSource:Ne("string","QuerySnapshot"),bundleName:Ne("string"),bundle:Ne("string")};class VE extends Kj{constructor(t){super(),this.firestore=t}convertBytes(t){return new Fn(t)}convertReference(t){const i=this.convertDocumentKey(t,this.firestore._databaseId);return new Ae(this.firestore,null,i)}}function Vm(n){n=lr(n,is);const t=lr(n.firestore,wu),i=zg(t),a=new VE(t);return Fj(n._query),Dj(i,n._query).then((o=>new io(t,a,n,o)))}function Xg(n,t,i){n=lr(n,Ae);const a=lr(n.firestore,wu),o=Hj(n.converter,t,i);return PE(a,[Pj($g(a),"setDoc",n._key,o,n.converter!==null,i).toMutation(n._key,Si.none())])}function Lh(n,t,i,...a){n=lr(n,Ae);const o=lr(n.firestore,wu),u=$g(o);let d;return d=typeof(t=ar(t))=="string"||t instanceof cd?zj(u,"updateDoc",n._key,t,i,a):Uj(u,"updateDoc",n._key,t),PE(o,[d.toMutation(n._key,Si.exists(!0))])}function PE(n,t){return(function(a,o){const u=new ir;return a.asyncQueue.enqueueAndForget((async()=>xj(await Cj(a),o,u))),u.promise})(zg(n),t)}function Gj(n,t,i){const a=i.docs.get(t._key),o=new VE(n);return new Xa(n,o,t._key,a,new Bl(i.hasPendingWrites,i.fromCache),t.converter)}function $h(n){return new Bg("increment",n)}(function(t,i=!0){(function(o){bo=o})(bI),Ch(new nu("firestore",((a,{instanceIdentifier:o,options:u})=>{const d=a.getProvider("app").getImmediate(),p=new wu(new zI(a.getProvider("auth-internal")),new BI(d,a.getProvider("app-check-internal")),(function(g,v){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ft(it.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ou(g.options.projectId,v)})(d,o),d);return u={useFetchStreams:i,...u},p._setSettings(u),p}),"PUBLIC").setMultipleInstances(!0)),eo(gv,yv,t),eo(gv,yv,"esm2020")})();const Yj={apiKey:"AIzaSyAEFzPwTADLzuxWuyk889Jz1cHPsEgLOkQ",authDomain:"tu2025grad.firebaseapp.com",projectId:"tu2025grad",storageBucket:"tu2025grad.firebasestorage.app",messagingSenderId:"553768466639",appId:"1:553768466639:web:7c16f5d6432da7ebc05fba"},Qj=hv().length?hv()[0]:fg(Yj),Wl=RE(Qj),g_=40;function UE(n){if(!n)return n;const t="/";if(/^https?:\/\//i.test(n))return n;const i=n.replace(/^\.\.\//,"").replace(/^\//,"");return t+i}const Xj=S.div`
  position: relative; background: #fff;
`,Wj=S.div`
  padding-left: ${g_}px; padding-right: ${g_}px; display: flex; flex-direction: column;
  @media (max-width: 640px) {
    padding-left: 16px;
    padding-right: 16px;  
 }
`;function Zj({children:n}){return y.jsx(Xj,{children:y.jsx(Wj,{children:n})})}const Jj=S.div`
  position: relative;
  min-height: calc(100vh - 200px);
`,t5=S.div`
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
`,e5=S.div`
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
`,y_=eu,zE=lg,n5={"All Projects":null,"AI & Robot":"c0","Edu & Kids":"c1","Health Care":"c2","IT & Tech":"c3",Living:"c4",Mobility:"c5"};function Pm(n){return n.members.map(t=>{const i=zE.find(a=>a.num===t);return i?i.nameKor:""}).filter(Boolean).join(", ")}function i5(n){return n.members.map(t=>{const i=zE.find(a=>a.num===t);return i?UE(i.imgUrl):""}).filter(Boolean)}function r5({list:n,statsById:t}){const i={c0:"A",c1:"E",c2:"H",c3:"I",c4:"L",c5:"M"};return y.jsx(t5,{children:n.map((a,o)=>{const u=Pm(a),d=i5(a),p=String(a.projectNum+1).padStart(3,"0"),g=`${i[a.category]||"A"}${p}`,v=a.projectNum??a.num;return y.jsx(ug,{titleKor:a.titleKor,titleEng:a.titleEng,src:UE(`/projects/${a.projectNum}/thumb.jpg`||`/projects/${a.projectNum}/thumb.png`),nameKor:u,profileImgs:d,docId:v,href:`/work/${g}`,like:t[String(v)]?.like??0,view:t[String(v)]?.view??0},o)})})}function a5(){const[n,t]=bt.useState("All Projects"),[i,a]=bt.useState("이름순"),[o,u]=bt.useState({});bt.useEffect(()=>{let m=!0;return(async()=>{try{const g=await Vm(xh(Wl,"works"));if(!m)return;const v={};g.forEach(E=>{const T=E.data()||{};v[String(E.id)]={like:typeof T.like=="number"?T.like:0,view:typeof T.view=="number"?T.view:0}}),u(v)}catch(g){console.error("Failed to load works stats:",g)}})(),()=>{m=!1}},[]);const d=bt.useMemo(()=>{const m=n5[n]||null;return m?y_.filter(g=>g.category===m):y_},[n]),p=bt.useMemo(()=>{const m=[...d];switch(i){case"이름순":m.sort((g,v)=>Pm(g).localeCompare(Pm(v),"ko"));break;case"좋아요순":m.sort((g,v)=>{const E=String(g.projectNum??g.num),T=String(v.projectNum??v.num),A=o[E]?.like??0;return(o[T]?.like??0)-A});break;case"조회수순":m.sort((g,v)=>{const E=String(g.projectNum??g.num),T=String(v.projectNum??v.num),A=o[E]?.view??0;return(o[T]?.view??0)-A});break;case"팀작우선":m.sort((g,v)=>(v.members.length>1)-(g.members.length>1));break;case"개인작우선":m.sort((g,v)=>(g.members.length>1)-(v.members.length>1));break}return m},[d,i,o]);return y.jsxs(Jj,{children:[y.jsx(e5,{children:"Projects"}),y.jsx(H2,{type:"project",onCategoryChange:t,onSortChange:a,sortLabel:i}),y.jsx(Zj,{children:y.jsx(r5,{list:p,statsById:o})})]})}const s5=S.div(({height:n,from:t,to:i,position:a,z:o})=>({position:"absolute",left:0,right:0,[a]:-1,height:n,pointerEvents:"none",zIndex:o??0,background:`linear-gradient(180deg, ${t} 0%, ${i} 100%)`}));function LE({position:n="bottom",from:t,to:i,height:a=240,z:o=0,style:u}){return y.jsx(s5,{position:n,from:t,to:i,height:a,z:o,style:u})}const ro={heroToWhite:{from:"rgba(18,18,18,0)",to:"#FFFFFF",h:80},whiteToBlack:{from:"rgba(255,255,255,0)",to:"#121212",h:160}},o5=S.section`
  position: relative; height: 100vh; min-height: 620px; overflow: hidden; background: #121212; z-index: 1;
  @media (max-width: 640px) {
    height: 100vh;
    min-height: 220px;
  }
`,l5=S.div`
  position: absolute; inset: 0;
  /* Video container sits here */
`,u5=S.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
`,c5=S.video`
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
`,h5=S.div`
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
`,d5=S.video`
  width: 100%;
  height: 100%;
  display: block;
`,f5=S.div`
  position: absolute;
  inset: 0;
  background-color: rgba(18, 18, 18, 0.2);
`,p5=S.div`
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
`,x_=S.p`
  margin: 0; color: #FFFFFF; font-family: Pretendard, system-ui; font-size: 16px; line-height: 19.2px;
  @media (max-width: 640px) {
    font-size: 13px;
    line-height: 1.4;
  }
`,m5=S.p`
  margin: 0; color: #FFFFFF; font-family: Pretendard, system-ui; font-weight: 600; font-size: 24px; line-height: 27.6px;
  @media (max-width: 640px) {
    font-size: 17px;
    line-height: 1.3;
  }
`,g5=S.button`
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

  .desktop { display: inline; }
  .mobile { display: none; }

  @media (max-width: 640px) {
    width: 140px;
    height: 36px;
    font-size: 14px;
    bottom: 165px;
    left: 16px;
    transform: none;
    .desktop { display: none; }
    .mobile { display: inline; }
  }
`;function y5(){const[n,t]=bt.useState(!1),i=bt.useRef(null),a="/",o=Fh();bt.useEffect(()=>()=>{i.current&&clearTimeout(i.current)},[]);const u=()=>{const p=`${typeof window<"u"&&window.innerWidth<640?"projects":"showroom"}`;o(p)};return y.jsxs(o5,{"aria-label":"Hero",children:[y.jsxs(l5,{children:[y.jsx(u5,{"aria-hidden":!0,children:y.jsx(c5,{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata",children:y.jsx("source",{src:`${a}video/hero11.mp4`,type:"video/mp4"})})}),y.jsx(h5,{"aria-label":"Hero background video",children:y.jsxs(d5,{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata",onLoadedData:()=>{i.current&&clearTimeout(i.current),i.current=setTimeout(()=>t(!0),13900)},children:[y.jsx("source",{src:`${a}video/hero11.mp4`,type:"video/mp4"}),"Your browser does not support the video tag."]})}),y.jsx(f5,{})]}),y.jsxs(p5,{$visible:n,children:[y.jsxs(x_,{children:["25. 10. 24. FRI~26. SUN",y.jsx("br",{}),"Hongdae Art Center B2"]}),y.jsx(x_,{children:"Department of Design Engineering"}),y.jsxs(m5,{children:["Tech University of Korea",y.jsx("br",{}),"20th Grad Exhibition"]})]}),y.jsxs(g5,{type:"button",onClick:u,"aria-label":"View More",children:[y.jsx("span",{className:"desktop",children:"View More"}),y.jsx("span",{className:"mobile",children:"View Work"})]}),y.jsx(LE,{position:"bottom",from:ro.heroToWhite.from,to:ro.heroToWhite.to,height:ro.heroToWhite.h,z:0})]})}S.section`
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  padding-top: 120px;
  padding-bottom: 160px;
  @media (max-width: 640px) {
    padding-top: 32px;
    padding-bottom: 48px;
  }
`;S.div`
  width: 100%;
  max-width: calc(100vw - 80px);
  margin: 0 auto;
  @media (max-width: 640px) {
    max-width: 100%;
    padding: 0 12px;
    box-sizing: border-box;
  }
`;S.div`
  display: flex;
  gap: 94px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 640px) {
    gap: 32px;
  }
`;S.div`
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
`;S.h2`
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
`;S.div`
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
`;S.div`
  display: flex;
  width: 285px;
  height: 285px;
  position: relative;
  overflow: hidden;
  background: #FFFFFF;
  @media (max-width: 640px) {
    display: none;
  }
`;S.div`
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
`;const x5='Pretendard, system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial, sans-serif',v5=S.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${n=>n.$size==="sm"?40:52}px;
  padding: 0 ${n=>n.$size==="sm"?16:24}px;
  border: 1px solid #FFFFFF;
  color: #FFFFFF;
  background: transparent;
  font-family: ${x5};
  font-weight: 700;
  font-size: ${n=>n.$size==="sm"?13:14}px;
  letter-spacing: 0.2px;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  width: ${n=>n.$full?"100%":"auto"};
  transition: background .15s ease, color .15s ease, border-color .15s ease;
`,_5=S.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-left: 8px;
  border-top: 1px solid #FFFFFF;
  border-right: 1px solid #FFFFFF;
  transform: rotate(45deg);
`;function Wg({as:n="button",href:t,label:i="View More",size:a="md",fullWidth:o=!1,showArrow:u,defaultShowArrow:d=!0,onArrowChange:p,onClick:m,style:g}){const v=typeof u=="boolean",[E,T]=bt.useState(d),A=v?u:E;bt.useCallback(()=>{if(v){p&&p(!u);return}T(k=>{const V=!k;return p&&p(V),V})},[v,p,u]);const M={onClick:m,style:g,"data-arrow-visible":A,"data-toggle-arrow-fn":void 0,$size:a,$full:o,as:n,href:t,type:n==="button"?"button":void 0};return y.jsxs(v5,{...M,target:"_blank",rel:"noopener noreferrer",children:[i,A?y.jsx(_5,{"aria-hidden":!0}):null]})}const Ue="/",w5=S.section`
  position: relative;
  padding: 120px 40px;
  background: #121212;
  z-index: 1;
`,E5=S.div`
  width: 100%;
  /* max-width: 1840px; */
  margin: 0 auto;
`,b5=S.div`
  position: relative;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  background: #171717;
`,Ys=S.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,Vl=S.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;S.div`
  position: absolute;
  left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  width: 70px; height: 70px;
  border-radius: 35px;
  background: rgba(255,255,255,0.6);
  backdrop-filter: blur(5px);
`;S.div`
  position: absolute; left: 27px; top: 23px;
  width: 0; height: 0;
  border-left: 16px solid #000;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
`;const T5=S.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  @media (max-width: 640px) {
    gap: 10px;
    margin-top: 12px;
    display: none; /* hide desktop grid on small screens */
  }
`,Lp=S.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  @media (max-width: 640px) {
    gap: 8px;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`,tr=S.div`
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  background: #151515;
  width: ${n=>n.$w};
  height: ${n=>n.$h};
  @media (max-width: 640px) {
    width: 46vw;
    height: 46vw;
    min-width: 140px;
    min-height: 140px;
    max-width: 100vw;
    max-height: 100vw;
  }
`,$p=S.div`
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
`,S5=S.div`
  display: none;
  @media (max-width: 640px) {
    display: block;
    padding: 20px; /* edge-to-edge on mobile */
    box-sizing: border-box;
  }
`,A5=S.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,R5=S.div`
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  background: #151515;
  aspect-ratio: 2 / 1;
  max-height: 300px;
`,I5=S.div`
  display: flex;
  gap: 8px;
`,v_=S.div`
  flex: 1; /* share available width evenly */
  border-radius: 4px;
  overflow: hidden;
  background: #151515;
  aspect-ratio: 1 / 1;
  max-height: 200px;
`;function C5(){const n=[{src:`${Ue}video/sub1.mp4`,cap:""},{src:`${Ue}sq5.png`,cap:""},{src:`${Ue}sq2.png`,cap:""},{src:`${Ue}video/category.mp4`,cap:""},{src:`${Ue}sq6.png`,cap:""},{src:`${Ue}sq4.png`,cap:""},{src:`${Ue}video/vid22.mp4`,cap:""},{src:`${Ue}sq3.png`,cap:""},{src:`${Ue}sq1.png`,cap:""}],t="calc((100vw - 140px) / 4)",i="calc((100vw - 100px) / 2)";return y.jsx(w5,{"aria-label":"Gallery",children:y.jsxs(E5,{children:[y.jsx(b5,{children:y.jsx(Vl,{src:`${Ue}video/main.mp4`,alt:"featured",muted:!0,autoPlay:!0,playsInline:!0,loop:!0})}),y.jsxs(T5,{className:"gallery-desktop",children:[y.jsxs(Lp,{children:[y.jsx(tr,{$w:i,$h:t,children:y.jsx(Vl,{src:`${Ue}video/sub1.mp4`,alt:"",muted:!0,autoPlay:!0,playsInline:!0,loop:!0})}),y.jsx(tr,{$w:t,$h:t,children:y.jsx(Ys,{src:`${Ue}sq5.png`,alt:""})}),y.jsx(tr,{$w:t,$h:t,children:y.jsx(Ys,{src:`${Ue}sq6.png`,alt:""})})]}),y.jsxs(Lp,{children:[y.jsx(tr,{$w:t,$h:t,children:y.jsx(Ys,{src:`${Ue}sq4.png`,alt:""})}),y.jsx(tr,{$w:t,$h:t,children:y.jsx(Ys,{src:`${Ue}sq2.png`,alt:""})}),y.jsx(tr,{$w:i,$h:t,children:y.jsx(Vl,{src:`${Ue}video/category.mp4`,alt:"",muted:!0,autoPlay:!0,playsInline:!0,loop:!0})})]}),y.jsxs(Lp,{children:[y.jsx(tr,{$w:i,$h:t,children:y.jsx(Vl,{src:`${Ue}video/vid22.mp4`,alt:"",muted:!0,autoPlay:!0,playsInline:!0,loop:!0})}),y.jsx(tr,{$w:t,$h:t,children:y.jsx(Ys,{src:`${Ue}sq3.png`,alt:""})}),y.jsx(tr,{$w:t,$h:t,children:y.jsx(Ys,{src:`${Ue}sq1.png`,alt:""})})]})]}),y.jsx(S5,{children:y.jsx("div",{style:{marginTop:12,display:"flex",flexDirection:"column",gap:12},children:Array.from({length:3}).map((a,o)=>{const u=o*3,d=n[u],p=n[u+1],m=n[u+2];return y.jsxs(A5,{children:[d&&y.jsxs(R5,{children:[y.jsx(Vl,{src:d.src,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),d.cap&&y.jsx($p,{style:{opacity:1},children:d.cap})]}),y.jsxs(I5,{children:[p&&y.jsxs(v_,{children:[y.jsx("img",{src:p.src,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),p.cap&&y.jsx($p,{style:{opacity:1},children:p.cap})]}),m&&y.jsxs(v_,{children:[y.jsx("img",{src:m.src,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),m.cap&&y.jsx($p,{style:{opacity:1},children:m.cap})]})]})]},o)})})}),y.jsx("div",{style:{paddingTop:40,display:"flex",justifyContent:"center"},children:y.jsx(Wg,{label:"View More"})})]})})}const j5=S.section`
  position: relative;
  height: ${n=>`${n.$durationVh}vh`};
`,D5=S.div`
  position: sticky; top: 0; height: 100vh; overflow: hidden;
  display: ${n=>n.$center?"flex":"block"};
  align-items: ${n=>n.$center?"center":"stretch"};
  justify-content: ${n=>n.$center?"center":"unset"};
`,N5=S.div`
  width: 100%;
  ${n=>n.$offset?`transform: translateY(${n.$offset}px);`:""}
`;function M5({durationVh:n=300,center:t=!0,centerOffsetPx:i=0,children:a,style:o}){const u=bt.useRef(null),[d,p]=bt.useState(0);return bt.useEffect(()=>{const m=u.current;if(!m)return;let g=0,v=!0;const E=()=>{if(!v)return;const T=m.getBoundingClientRect(),A=window.innerHeight,M=n/100*A-A,k=Math.min(Math.max(-T.top,0),M);p(M>0?k/M:0),g=requestAnimationFrame(E)};return g=requestAnimationFrame(E),()=>{v=!1,cancelAnimationFrame(g)}},[n]),y.jsx(j5,{ref:u,style:o,$durationVh:n,children:y.jsx(D5,{$center:t,children:y.jsx(N5,{$offset:i,children:typeof a=="function"?a(d):a})})})}const __=[{id:"w1",index:"A010",artistKr:"송지원, 허지유",dept:"Industrial Design Engineering",titleSmall:"한국산업기술진흥원장상 수상",titleStrong:"BIND",rightMeta1:"Precision and efficency beyond human limits.",rightMeta2:"BIND, 흩어진 시간을 하나로 잇다.",image:"1127032149"},{id:"w2",index:"A017",artistKr:"이채연",dept:"Media Design Engineering",titleSmall:"총동문회장상 수상",titleStrong:"MUSE",rightMeta1:"디자인 논문을 쉽게 활용할 수 있도록 돕는",rightMeta2:"AI 인사이트 제공 서비스",image:"1127403683"},{id:"w3",index:"A011",artistKr:"정혜원, 신주혜",dept:"Industrial Design Engineering",titleSmall:"한국공학대학교총장상 수상",titleStrong:"ENDY",rightMeta1:"감정을 이해하고 반응하는 학습 파트너,",rightMeta2:"자기주도학습의 새로운 동반자 ENDY",image:"1126889031"}],O5=S.div`
  position: relative;
  background: #121212;
  @media (max-width: 640px) {
    background: #121212;
    padding: 0 0 24px 0;
  }
`,k5=S.div`
  display: none;
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100vw;
    padding: 0 0 24px 0;
    box-sizing: border-box;
  }
`,V5=S(ts)`
  background: #222;
  border-radius: 10px;
  overflow: hidden;
  width: 92vw;
  margin: 12px auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;S.img`
  width: 100%;
  height: auto;
  display: block;
`;const P5=S.div`
  padding: 12px 14px 16px 14px;
  color: #fff;
  font-family: Pretendard, system-ui;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,U5=S.div`
  position: relative;
  height: auto;
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
`;const z5=S.div`
  /* margin-top: 140px; */
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
`,bu=`
  -webkit-mask-image: rgba(0,0,0,0);
          mask-image: rgba(0,0,0,0);
`,L5=S.div`
  position: absolute; left: 10%; 
  /* top: 240px; */
  top: 20%;
  color: #FAFAFA;
  font-family: Pretendard, system-ui;
  font-size: 82px; font-weight: 600;
  /* transform and opacity are applied inline for performance */
  ${bu}
  @media (max-width: 1800px) {
    font-size: 64px;
  }
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
  position: absolute; left: 10%; 
  /* top: 374px; */
  top: calc(20% + 98px);
  color: #D9D9D9;
  font-family: Pretendard, system-ui;
  font-size: 24px; font-weight: 400;
  /* transform and opacity are applied inline for performance */
  ${bu}
    @media (max-width: 1800px) {
    top: calc(20% + 76px);
  }
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
  position: absolute; right: 10%; 
  /* top: 509px; */
  top: 40%;
  width: 690.67px; color: #D9D9D9;
  font-family: Pretendard, system-ui; font-size: 24px; font-weight: 300;
  text-align: right;
  /* transform and opacity are applied inline for performance */
  ${bu}
  @media (max-width: 1800px) {
    font-size: 18px;
  }
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
  position: absolute; right: 10%; 
  /* top: 547px; */
  top: calc(40% + 38px);
  width: 690.67px; color: #FAFAFA;
  font-family: Pretendard, system-ui; font-weight: 500; font-size: 32px;
  text-align: right;
  /* transform and opacity are applied inline for performance */
  ${bu}
  @media (max-width: 1800px) {
    font-size: 28px;
    top: calc(40% + 24px);
  }
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
  position: absolute; left: 10%; width: 690.67px;
  /* top: 679px;  */
  top: 70%;
  /* transform and opacity are applied inline for performance */
  ${bu}
  @media (max-width: 640px) {
    position: static;
    width: 100%;
    margin: 4px 0 0 0;
    transform: none;
    opacity: 1;
    mask-image: none;
    -webkit-mask-image: none;
  }
`,H5=S.small`
  display: block; color: #D9D9D9;
  font-family: Pretendard, system-ui; font-size: 24px; font-weight: 400;
  @media (max-width: 1800px) {
    font-size: 18px;
  }
  @media (max-width: 640px) {
    font-size: 12px;
  }
`,q5=S.strong`
  display: block; color: #FAFAFA;
  font-family: Pretendard, system-ui; font-size: 42px; font-weight: 700;
  @media (max-width: 1800px) {
    font-size: 32px;
  }
  @media (max-width: 640px) {
    font-size: 18px;
  }
`,G5=S.iframe`
  width: 1600px;
  height: 900px;
  /* width: calc(100vw - 700px);
  height: calc((100vw - 700px) * 0.5625); */
  border: none;
  display: block;
  margin: 0 auto;
  opacity: 0.75;

  @media (max-width: 2200px) {
    width: 1280px;
    height: 720px;
  }

  @media (max-width: 1500px) {
    width: 960px;
    height: 540px;
  }

  @media (max-width: 1000px) {
    width: 680px;
    height: 382.5px;
  }
`,Y5=S.iframe`
  width: 100%;
  height: auto;
  min-height: 200px;
  border: none;
  display: block;
  margin-top: 16px;
`,Q5=(n,t=0,i=1)=>Math.max(t,Math.min(i,n)),Qs=(n,t,i)=>n+(t-n)*i,X5=n=>n<.5?2*n*n:1-Math.pow(-2*n+2,2)/2;function W5({work:n,progress:t,videoId:i}){String(i||"").trim();const a=`https://player.vimeo.com/video/${n.image}?muted=1&autoplay=1&loop=1&badge=0&controls=0&autopause=0&title=0&byline=0&portrait=0&app_id=58479`,o=X5(Q5(t,0,1)),u=Qs(0,-120,o),d=Qs(0,-360,o),p=Qs(0,-280,o),m=Qs(0,-220,o),g=Qs(0,-260,o),v=Qs(0,-180,o),E=.55,A=o<E?1:1-Math.max(0,Math.min(1,(o-E)/(.9-E))),M={transform:`translate3d(0, ${u}px, 0)`,willChange:"transform"},k=B=>({transform:`translate3d(0, ${B}px, 0)`,opacity:A,willChange:"transform, opacity"}),V={transform:`translate3d(0, ${v}px, 0)`,opacity:A,willChange:"transform, opacity"};return y.jsx(y.Fragment,{children:y.jsx(O5,{children:y.jsxs(U5,{children:[y.jsx(z5,{style:M,children:y.jsx(G5,{src:a,frameBorder:"0"})}),y.jsx(L5,{style:k(d),children:n.artistKr}),y.jsx($5,{style:k(p),children:n.dept}),y.jsx(B5,{style:k(m),children:n.rightMeta1}),y.jsx(F5,{style:k(g),children:n.rightMeta2}),y.jsxs(K5,{style:V,children:[y.jsx(H5,{children:n.titleSmall}),y.jsx(q5,{children:n.titleStrong})]})]})})})}function Z5(){return y.jsxs(y.Fragment,{children:[y.jsx("style",{children:`
        @media (max-width: 640px) {
          .expo-works-desktop { display: none !important; }
        }
        @media (min-width: 641px) {
          .expo-works-mobile { display: none !important; }
        }
      `}),y.jsx("div",{className:"expo-works-desktop",children:__.slice(0,3).map(n=>y.jsx(M5,{durationVh:320,center:!0,centerOffsetPx:-40,children:t=>y.jsx(W5,{work:n,progress:t})},n.id))}),y.jsx(k5,{className:"expo-works-mobile",children:__.map(n=>y.jsxs(V5,{to:`work/${n.index}`,children:[y.jsx(Y5,{src:`https://player.vimeo.com/video/${n.image}?badge=0&controls=0&autopause=0&title=0&byline=0&portrait=0&app_id=58479`}),y.jsxs(P5,{children:[y.jsx("div",{style:{fontWeight:700,fontSize:16},children:n.titleStrong}),y.jsxs("div",{style:{fontSize:13,color:"#D9D9D9"},children:[n.artistKr," | ",n.dept]}),y.jsx("div",{style:{fontSize:12,color:"#A1A1A1",marginTop:2},children:n.rightMeta1}),y.jsx("div",{style:{fontSize:12,color:"#A1A1A1"},children:n.rightMeta2})]})]},n.id))})]})}const J5="/",tD=S.div`
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
`;function oD(){return y.jsx(tD,{"aria-labelledby":"insta-title",children:y.jsx(eD,{children:y.jsxs(nD,{children:[y.jsx(iD,{children:y.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#FFFFFF",children:[y.jsx("path",{d:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2A3.2 3.2 0 1 1 12 8a3.2 3.2 0 0 1 0 6.4z"}),y.jsx("circle",{cx:"17.5",cy:"6.5",r:"1.2"}),y.jsx("path",{d:"M17.8 2H6.2A4.2 4.2 0 0 0 2 6.2v11.6A4.2 4.2 0 0 0 6.2 22h11.6A4.2 4.2 0 0 0 22 17.8V6.2A4.2 4.2 0 0 0 17.8 2zm2.6 15.8a2.6 2.6 0 0 1-2.6 2.6H6.2a2.6 2.6 0 0 1-2.6-2.6V6.2A2.6 2.6 0 0 1 6.2 3.6h11.6a2.6 2.6 0 0 1 2.6 2.6v11.6z"})]})}),y.jsx(rD,{id:"insta-title",children:"@tukd_grad"}),y.jsxs(aD,{children:[y.jsx(sD,{children:y.jsx("img",{src:`${J5}insta-qr.png`,alt:"Instagram preview"})}),y.jsx(Wg,{as:"a",href:"https://www.instagram.com/tukd_grad?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",label:"View Instagram",size:"sm"})]})]})})})}const Tu=`'Pretendard', system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial, sans-serif`,w_=350,lD=S.section`
  padding: 120px 0 0 0; background: #121212;
`,uD=S.div`
  position: relative; background: #121212;
`,cD=S.div`
  /* padding-left: ${w_}px; padding-right: ${w_}px; */
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
    @media (max-width: 1250px) {
        width: 200px;
    }
`,fD=S.div`
  font-family: ${Tu}; font-size: 20px; font-weight: 700; line-height: 22.4px; color: #FFFFFF;

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
  font-family: ${Tu}; font-size: 16px; font-weight: 700; line-height: 22.4px; color: #FFFFFF;
  @media (max-width: 640px) {
    font-size: 14px;
}
`,vD=S.div`
  width: 700px; display: flex; flex-direction: column; gap: 10px;
  @media (max-width: 640px) {
    width: 100%;
    gap: 6px;
  }
`;function Gr({k:n,children:t,divider:i=!0}){return y.jsxs(gD,{$divider:i,children:[y.jsx(yD,{children:y.jsx(xD,{children:n})}),y.jsx(vD,{children:t})]})}const _D=S.div`
  width: 900px; display: flex; flex-direction: column;
    @media (max-width: 1250px) {
        width: 600px;
    }
    @media (max-width: 1000px) {
        width: 400px;
    }
  @media (max-width: 640px) {
    width: 100%;
    padding: 0;
    box-sizing: border-box;
  }
`;function E_({title:n,children:t,last:i=!1}){return y.jsxs(mD,{$last:i,children:[y.jsx(pD,{title:n}),y.jsx(_D,{children:t})]})}const wD=S.div`
  width: 900px; padding-top: 22px; padding-bottom: 40px; border-bottom: 1px rgba(255,255,255,0.12) solid;
    @media (max-width: 1250px) {
        width: 100%;
    }
  @media (max-width: 640px) {
    width: 100%;
    padding: 12px 0px 20px 0px;
    box-sizing: border-box;
  }
`,ED=S.div`
  font-family: ${Tu}; font-size: 16px; font-weight: 700; color: #FFFFFF;
  @media (max-width: 640px) {
    font-size: 14px;
}
`,qt=S.div`
  font-family: ${Tu}; font-size: 16px; font-weight: 300; color: #CCCCCC; letter-spacing: 0px;
  @media (max-width: 640px) {
    font-size: 13px;
}
`,eh=S(qt)`
  font-weight: 500;
`,bD=S(qt)`
  font-size: 13px;
`;S(qt)`
  margin-top: 24px;
`;const TD=S.a`
  font-family: ${Tu}; font-size: 16px; font-weight: 300; color: #CCCCCC; text-decoration: underline;
  @media (max-width: 640px) {
    font-size: 13px;
}
`;function SD(){return y.jsx(lD,{"aria-label":"Venue & Access",children:y.jsxs(hD,{children:[y.jsxs(E_,{title:"Venew Details",children:[y.jsx(wD,{children:y.jsx(ED,{children:"잔향 : 기억의 향기"})}),y.jsx(Gr,{k:"Term",children:y.jsx(qt,{children:"2025. 10. 24. FRI - 10. 26. SUN"})}),y.jsxs(Gr,{k:"Hours",children:[y.jsx(qt,{children:"10.24.FRI   13:00 ~ 17:30 (OPENING 16:00~)"}),y.jsx(qt,{children:"10.25.SAT ~ 10.26.SUN    10:00 ~ 17:30"})]}),y.jsxs(Gr,{k:"Schedule",children:[y.jsx(eh,{children:"10.24.FRI"}),y.jsx(qt,{children:"13:00    자유관람"}),y.jsx(qt,{children:"15:00    졸업생 홈커밍 행사"}),y.jsx(qt,{children:"16:00    개회식"}),y.jsx(qt,{children:"16:20    졸업작품 우수작 시상"}),y.jsx(qt,{children:"16:30    자유관람"}),y.jsxs(eh,{children:[y.jsx("br",{}),"10.25.SAT"]}),y.jsx(qt,{children:"10:00    자유관람"}),y.jsx(qt,{children:"13:00    취·창업 커리어 캠프"}),y.jsxs(eh,{children:[y.jsx("br",{}),"10.26.SUN"]}),y.jsx(qt,{children:"10:00    자유관람"})]}),y.jsxs(Gr,{k:"Website",divider:!1,children:[y.jsx(qt,{children:"Hongik Art Center"}),y.jsx(TD,{href:"https://artscenter.hongik.ac.kr/artcenter/index.do",target:"_blank",rel:"noreferrer",children:"https://artscenter.hongik.ac.kr/artcenter/index.do"})]})]}),y.jsxs(E_,{title:"Access",children:[y.jsxs(Gr,{k:"Address",children:[y.jsxs(qt,{children:["홍대 아트센터 지하 2층 전시관 3",y.jsx("br",{}),"서울시 종로구 대학로 57"]}),y.jsxs(qt,{children:["Hongik Art Center B2 Gallery 3",y.jsx("br",{}),"57, Daehak-ro, Jongno-gu, Seoul"]}),y.jsx("div",{style:{marginTop:24},children:y.jsx(Wg,{as:"a",href:"https://maps.app.goo.gl/qc99M9bDqyBTcmx79",label:"Map",size:"sm",showArrow:!0})})]}),y.jsxs(Gr,{k:"Parking",children:[y.jsx(qt,{children:"B3F ~ B6F"}),y.jsxs(qt,{children:[y.jsx("br",{}),"기본 30분 3,000원 / 이후 20분당 2,000원"]}),y.jsx(qt,{children:"이용객 주차권 지참 시 50% 할인 및 1시간 무료이용권 제공"}),y.jsx(eh,{children:"(주차권으로만 정산 가능, 티켓정산 불가)"}),y.jsx(bD,{children:"주차권 배부 장소: B2 갤러리 3, 전시장 입구 인포데스크"})]}),y.jsxs(Gr,{k:"By Subway",children:[y.jsx(qt,{children:"[1호선 종로5가역]"}),y.jsx(qt,{children:"2번 출구 방면으로 이동 → 이화사거리 방면으로 약 800m 직진 (도보7분)"}),y.jsxs(qt,{children:[y.jsx("br",{}),"[4호선 혜화역]"]}),y.jsx(qt,{children:"3번 출구 방면으로 이동 → 이화사거리 방면으로 약 800m 직진 (도보7분)"}),y.jsx(qt,{children:"또는 08번 마을버스 탑승 후 이화사거리 앞 하차"})]}),y.jsxs(Gr,{k:"By Bus",divider:!1,children:[y.jsx(qt,{children:"[이화사거리(01-572) 하차]"}),y.jsx(qt,{children:"마을버스 종로 08번"}),y.jsxs(qt,{children:[y.jsx("br",{}),"[현대그룹빌딩(01-218) 하차]"]}),y.jsx(qt,{children:"102, 107, 108, 109, 162, 301, 7025"}),y.jsxs(qt,{children:[y.jsx("br",{}),"[이화장(01-223) 하차]"]}),y.jsx(qt,{children:"109, 273, 601, 2112, 7025"})]})]})]})})}const wh="/",AD=S.div`
    position: relative;
    width: 100vw;
    height: ${n=>n.$height}px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 0;
    background-color: #FFF;
    padding: 200px 0;
    overflow: hidden;
    transition: height 400ms ease;
    @media (max-width: 1400px) {
        padding: 100px 0;
    }
    @media (max-width: 1000px) {
        padding: 50px 0;   
    }
    @media (max-width: 640px) {
        padding: 20px 0;   
    }
    @media (max-width: 393px) {
        padding: 16px 0;
    }
`,RD=S.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1440px;
    gap: 100px;
    @media (max-width: 1400px) {
        max-width: 1000px;
        gap: 80px;
    }
    @media (max-width: 1000px) {
        max-width: 600px;
        gap: 70px;    
    }
    @media (max-width: 640px) {
        max-width: 350px;
        gap: 60px;    
    }
    @media (max-width: 393px) {
        max-width: 300px;
        gap: 50px;
    }
`,Bp=S.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 36px;
    width: 1150px;
    margin: 0 145px;
    @media (max-width: 1400px) {
        width: 800px;
        margin: 0 80px;
        gap: 32px;
    }
    @media (max-width: 1000px) {
        width: 600px;
        margin: 0 40px;        
        gap: 24px;
    }
    @media (max-width: 640px) {
        width: 350px;
        margin: 0 20px;
        gap: 12px;
    }
    @media (max-width: 393px) {
        width: 300px;
        margin: 0 10px;
        gap: 10px;
    }
`,Fp=S.div`
    display: flex;
    font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
    font-size: 32px;
    font-weight: 600;
    color: #000;
    @media (max-width: 1400px) {
        font-size: 24px;
    }
    @media (max-width: 1000px) {
        font-size: 20px;
    }
    @media (max-width: 640px) {
        font-size: 18px;    
    }
    @media (max-width: 393px) {
        font-size: 16px;    
    }
`,b_=S.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
`,Um=S.div`
    display: flex;
    font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 150%;
    width: 597px;
    color: #202020;
    @media (max-width: 1400px) {
        font-size: 16px;
        width: 400px; // 변경 가능성 있음
    }
    @media (max-width: 1000px) {
        font-size: 14px;
        width: 350px;
    }
    @media (max-width: 640px) {
        font-size: 12px;
        width: 100%;
    }
    @media (max-width: 393px) {
        font-size: 10px;    
    }
`,ID=S(Um)`
    flex-direction: column;
    width: 1150px;
    @media (max-width: 1400px) {
        width: 800px;
    }
    @media (max-width: 1000px) {
        width: 600px;
    }
    @media (max-width: 640px) {
        width: 350px;    
    }
    @media (max-width: 393px) {
        width: 300px;    
    }
`,CD=S.img`
    width: auto;
    height: auto;
    @media (max-width: 1400px) {
        width: 250px;
        height: 250px;
    }
    @media (max-width: 1000px) {
        width: 200px;
        height: 200px;
    }
    @media (max-width: 640px) {
        width: 100px;
        height: 100px;    
    }
`,jD=S.img`
    width: auto;
    height: auto;
    @media (max-width: 1400px) {
        width: 350px;
        height: auto;
    }
    @media (max-width: 1000px) {
        width: 200px;
        height: auto;
    }
    @media (max-width: 640px) {
        width: 100%;
        height: auto;    
    }
`,DD=S.img`
    width: auto;
    height: auto;
    @media (max-width: 1400px) {
        width: 600px;
        height: auto;
    }
    @media (max-width: 1000px) {
        width: 400px;
        height: auto;    
    }
    @media (max-width: 640px) {
        width: 300px;
        height: auto;
    }
`,T_=S.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    @media (max-width: 640px) {
        flex-direction: column;
        align-items: center;
        gap: 16px;   
    }
`,ND=S.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 36px;
    width: 100%;
    @media (max-width: 1400px) {
        gap: 24px;
    }
    @media (max-width: 1000px) {
        gap: 20px;    
    }
    @media (max-width: 640px) {
        gap: 16px;    
    }
`,MD=eg`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`,OD=S.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    cursor: pointer;
    animation: ${MD} 1.8s ease-in-out infinite;
    @media (max-width: 640px) {
        width: 40px;
        height: 40px;
    }
`,kD=S.div`
    width: 100%;
    height: 100%;
    background-image: url('${wh}icons/showIndicatorDown.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    transform: ${n=>n.$flipped?"scaleY(-1)":"none"};
    transition: transform 400ms ease;
`,VD=S.div`
    font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: #FFF;
    @media (max-width: 640px) {
        font-size: 16px;
    }
`,PD=S.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 140px;
    position: absolute;
    bottom: 0;
    z-index: 10;
    @media (max-width: 1400px) {
        height: 100px;
    }
`;function UD({}){const[n,t]=L.useState(!1),i=L.useRef(null),[a,o]=L.useState(0);L.useEffect(()=>{if(!i.current)return;const d=i.current.querySelectorAll("div")[0].scrollHeight/2.7;if(n){const p=d*3.5;o(p)}else o(d)},[n]);const u=[{title:"잔향 : 기억의 향기",context:`우리는 살아가며 수많은 순간들을 스쳐 지나간다.
                        그 순간들은 이내 사라지는 듯하지만, 마음속 깊이 은은히 스며들어 기억이 되고, 결국엔 우리 존재의 한 조각이 된다.

                        <잔향> 전시는 작품이 남긴 향이 관람객에게 스며들어 시간이 지나도 떠오를
                        수 있는 ‘기억의 향기’를 남기고자 한다. 단순한 결과물의 나열이 아닌, 창작의 과정과 고민이 축적된 흔적들이 이 공간에 머무는 이들의 감각과 감정 속에 잔잔히 머물기를 바란다.

                        전시를 마주한 순간이 훗날, 불현듯 떠오르는 영감으로 다시 피어나기를.
                        우리의 잔향이 누군가의 기억 속에서 오래도록 머물 수 있기를 바랍니다.`},{title:"기억을 통한 향 추출",context:`기억은 손에 잡히지 않지만 우리 안에 깊이 스며들어 감각의 결로 남습니다. 이 기억은 사라지지 않고 다시 응축되어, 마치 맡을 수 있는 '향’ 으로 추출되듯 되살아납니다.

                하나의 향이 탑·미들·베이스 노트로 이루어지듯, 기억 또한 여러 겹의 경험과 감정으로 구성됩니다. 작품을 마주한 첫 순간의 인상과 그 당시에 겪은 감정, 그리고 시간이 흐른 뒤 불현듯 되살아나는 여운이 서로 다른 노트를 이루어 층위를 만듭니다. <잔향> 전시는 이러한 기억의 향을 여섯 개의 주제로 응축하여 감각적으로 제시합니다.

                학생들이 쌓아온 고민과 탐구의 시간, 하나의 작품을 완성하기 위한 노력한 과정은 AI&ROBOT, EDUCATION&KIDS, HEALTH CARE, IT& TECH, LIVING, MOBILITY라는 여섯 가지 향으로 드러납니다. 각각 독립된 향은 노트처럼 뚜렷한 개성을 지니면서도 함께 어우러져 전체적인 조화를 완성합니다.`},{title:"잔향의 형",context:"세 갈래로 뻗어 나가는 유기적인 곡선은 꽃잎의 형상을 닮아, 작품 속에서 향이 피어오르고 퍼져나가는 순간을 담았습니다. 곡선들이 서로 교차하며 만들어내는 흐름은 창작의 과정에서 이어지는 영감과 감정을 나타내고, 그 중심에 놓인 물방울은 남겨진 향과 기억의 매개체를 의미합니다. 이는 전시를 통해 스며든 감각과 감정이 시간이 지나도 서서히 피어오르는 잔향으로 남기를 바라는 의지를 담고 있습니다."}];return y.jsxs(AD,{ref:i,$height:a,children:[y.jsxs(RD,{children:[y.jsxs(Bp,{children:[y.jsx(b_,{children:y.jsx(Fp,{children:y.jsx("span",{children:u[0].title})})}),y.jsxs(T_,{children:[y.jsx(Um,{children:u[0].context}),y.jsx(CD,{src:`${wh}brand-concept-logo.png`})]})]}),y.jsxs(Bp,{children:[y.jsx(b_,{children:y.jsx(Fp,{children:u[1].title})}),y.jsxs(T_,{children:[y.jsx(Um,{children:u[1].context}),y.jsx(jD,{src:`${wh}brand-category.png`})]})]}),y.jsxs(Bp,{children:[y.jsxs(ND,{children:[y.jsx(Fp,{children:u[2].title}),y.jsx(ID,{children:u[2].context})]}),y.jsx(DD,{src:`${wh}brand-variation.png`})]})]}),y.jsx(LE,{position:"bottom",from:ro.whiteToBlack.from,to:ro.whiteToBlack.to,height:ro.whiteToBlack.h,z:0}),y.jsxs(PD,{children:[y.jsx(OD,{onClick:()=>t(d=>!d),children:y.jsx(kD,{$flipped:n})}),y.jsx(VD,{children:n?"접기":"더보기"})]})]})}S.div`
  @media (max-width: 640px) {
    display: none !important;
  }
`;const zD=S.div`
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
`;function LD(){const n=[y.jsx(y5,{},"hero"),y.jsx(UD,{},"new-brand"),y.jsx(C5,{},"gallery"),y.jsx(zD,{children:"TU-EXPO Works"},"works-title"),y.jsx(Z5,{},"works"),y.jsx(oD,{},"insta"),y.jsx(SD,{},"venue")];return y.jsx("div",{style:{background:"#121212",minHeight:"100vh"},children:n})}const $D="/",Zg="Pretendard, system-ui",BD=S.div`
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
`,FD=`${$D}guestbook-card.svg`,KD=S.div`
  width: 181px;
  height: 147px;
  position: absolute;
  left: 6px;
  top: 190px;
  background-image: url(${FD});
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
`,HD=S.div` 
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
`,qD=S.div`
  /* position: absolute; */
  font-family: ${Zg};
  font-weight: 600;
  font-size: 20px;
  color: #555;
  @media (max-width: 640px) {
    font-size: 16px;
  }
`,GD=S.div`
  /* position: absolute; */
  top: 63px;
  width: 229px;
  height: 190px;
  font-family: ${Zg};
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
`,YD=S.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
  font-family: ${Zg};
  font-weight: 600;
  font-size: 14px;
  color: #555;
  @media (max-width: 640px) {
    right: 0px;
    bottom: 0px;
    font-size: 12px;
  }
`;function QD({to:n,from:t,message:i}){return y.jsxs(BD,{$w:yo,$h:Ja,children:[y.jsx(KD,{}),y.jsxs(HD,{$w:yo,$h:Ja,children:[y.jsx(qD,{children:`To. ${n}`}),y.jsx(GD,{children:i}),y.jsx(YD,{children:`From. ${t}`})]})]})}const XD=S.div`
  width: ${n=>n.$w}px;
  height: ${n=>n.$h}px;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  @media (max-width: 640px) {
    width: 100%;
    height: 216px;
    border-radius: 4px;
  }
`,WD=S.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;function ZD({src:n}){return y.jsx(XD,{$w:yo,$h:Ja,children:y.jsx(WD,{src:n,alt:"포토 카드"})})}const JD=S.button`
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
    border-radius: 4px;
  }
`,tN=S.div`
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
    border-radius: 4px;
  }
`,eN=S.div`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  display: grid;
  place-items: center;
  @media (max-width: 640px) {
    width: 26px;
    height: 26px;
  }
`,nN=S.div`
  width: 32px;
  height: 32px;
  position: relative;
  @media (max-width: 640px) {
    width: 26px;
    height: 26px;
  }
`,iN=S.span`
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
`,rN=S.span`
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
`;function aN({onClick:n}){return y.jsxs(JD,{onClick:n,"aria-label":"방명록 작성",$w:yo,$h:Ja,children:[y.jsx(tN,{$w:yo,$h:Ja}),y.jsx(eN,{children:y.jsxs(nN,{children:[y.jsx(iN,{}),y.jsx(rN,{})]})})]})}const yo=270,Ja=337,sN=30,$E=20,oN=210,lN=60,BE=173,FE=216,uN=16,cN=16,zm=16,hN=S.div`
  padding: 0 0 12px 0;
  @media (max-width: 640px) {
    display: none;
  }
`,dN=S.div`
  position: relative;
  width: 100%;
  height: 3px;
  background: #171717;
  border-radius: 2px;
  overflow: hidden;
`,fN=S.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 3px;
  width: ${n=>n.$w}px;
  min-width: 25px;
  background: #7a7a7a;
  border-radius: 2px;
  transition: width 350ms ease-in;
`,pN=S.div`
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-y;
  cursor: grab;
  padding: 0 ${lN}px 0 ${oN}px;
  scrollbar-width: none; 
  -ms-overflow-style: none;
  &::-webkit-scrollbar { display: none; }

  @media (max-width: 640px) {
    overflow: visible;
    padding: 0px;
    cursor: default;
  }
`,mN=S.div`
  display: flex;
  gap: ${sN}px;
  align-items: flex-start;
  min-height: ${Ja*2+$E}px;

  @media (max-width: 640px) {
    gap: ${uN}px;
    min-height: initial;
  }
`,gN=S.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: ${zm}px;
  padding: 0 16px; /* 좌우 16px 고정 마진 */
`,yN=S.div`
  width: calc((100% - ${zm}px) / 2);
  height: ${FE}px;
  flex: 0 0 calc((100% - ${zm}px) / 2);
`,xN=S.div`
  @media (max-width: 640px) { display: none; }
`,vN=S.div`
  display: none;
  @media (max-width: 640px) { display: block; }
`,_N=S.div`
  display: flex;
  flex-direction: column;
  gap: ${$E}px;
  @media (max-width: 640px) {
    width: ${BE}px;
    gap: ${cN}px;
  }
`,KE=S.div`
  width: ${yo}px;
  height: ${Ja}px;
  @media (max-width: 640px) {
    width: ${BE}px;
    height: ${FE}px;
  }
`,wN=S.div`
  display: block;
  cursor: pointer;
`,S_=n=>{const t=[{type:"add",id:"add"},...n],i=[{min:6,max:10},{min:16,max:20},{min:26,max:30}];let a=0;const o="/";return i.forEach((u,d)=>{if(t.length>u.min+a){const p=Math.min(Math.floor(Math.random()*(u.max-u.min+1))+u.min,t.length)+a;let m;do m=Math.floor(Math.random()*7)+1;while(t[t.length-1]?.id===`ph-${Date.now()}-${t.length-1}`&&m===t[t.length-1]?.id);t.splice(p,0,{type:"photo",id:`ph-${Date.now()}-${d}`,src:`${o}sq${m}.png`}),a++}}),t},EN=n=>{const t=[];for(let i=0;i<n.length;i+=2)t.push([n[i],n[i+1]||null]);return t};function bN({onOpenModal:n,items:t}){const i=L.useRef(null),[a,o]=L.useState({width:0,trackW:0}),[u,d]=L.useState(()=>S_(t)),[p,m]=L.useState(()=>window.matchMedia&&window.matchMedia("(max-width: 640px)").matches);L.useEffect(()=>{d(S_(t))},[t]);const g=EN(u);L.useEffect(()=>{if(!window.matchMedia)return;const A=window.matchMedia("(max-width: 640px)"),M=k=>m(k.matches);return A.addEventListener?A.addEventListener("change",M):A.addListener(M),()=>{A.removeEventListener?A.removeEventListener("change",M):A.removeListener(M)}},[]),L.useEffect(()=>{if(p)return;const A=i.current;if(!A)return;const M=k=>{Math.abs(k.deltaY)>Math.abs(k.deltaX)&&(A.scrollLeft+=k.deltaY,k.preventDefault())};return A.addEventListener("wheel",M,{passive:!1}),()=>A.removeEventListener("wheel",M)},[p]);const v=L.useRef({on:!1,moved:!1,startX:0,startScroll:0}),E=A=>!!A?.closest?.('button, a, input, textarea, select, label, [role="button"], [data-nodrag]');L.useEffect(()=>{if(p)return;const A=i.current;if(!A)return;const M=B=>{B.button===0&&(E(B.target)||(v.current.on=!0,v.current.moved=!1,v.current.startX=B.clientX,v.current.startScroll=A.scrollLeft,A.setPointerCapture?.(B.pointerId),document.body.style.userSelect="none",A.style.cursor="grabbing"))},k=B=>{if(!v.current.on)return;const q=B.clientX-v.current.startX;Math.abs(q)>2&&(v.current.moved=!0),A.scrollLeft=v.current.startScroll-q},V=B=>{v.current.on&&(A.releasePointerCapture?.(B.pointerId),document.body.style.userSelect="",A.style.cursor="grab",v.current.moved&&(B.preventDefault(),B.stopPropagation()),v.current.on=!1)};return A.addEventListener("pointerdown",M),window.addEventListener("pointermove",k),window.addEventListener("pointerup",V),A.addEventListener("pointercancel",V),()=>{A.removeEventListener("pointerdown",M),window.removeEventListener("pointermove",k),window.removeEventListener("pointerup",V),A.removeEventListener("pointercancel",V)}},[p]);const T=L.useCallback(()=>{const A=i.current;if(!A)return;const M=A.clientWidth,k=A.scrollWidth,V=A.scrollLeft,q=A.parentElement?.clientWidth||M,Z=Math.max(1,k-M),lt=Math.min(1,Math.max(0,V/Z)),K=Math.round(q*lt);o({width:K,trackW:q})},[]);return L.useEffect(()=>{if(p)return;T();const A=i.current;if(!A)return;const M=()=>requestAnimationFrame(T),k=()=>requestAnimationFrame(T);return A.addEventListener("scroll",M,{passive:!0}),window.addEventListener("resize",k),()=>{A.removeEventListener("scroll",M),window.removeEventListener("resize",k)}},[T,p]),y.jsxs(y.Fragment,{children:[y.jsxs(xN,{children:[y.jsx(hN,{children:y.jsx(dN,{children:y.jsx(fN,{$w:a.width})})}),y.jsx(pN,{ref:i,children:y.jsx(mN,{children:g.map((A,M)=>y.jsxs(_N,{children:[y.jsx(Kp,{data:A[0],onOpenModal:n}),A[1]?y.jsx(Kp,{data:A[1],onOpenModal:n}):y.jsx(KE,{})]},`col-${M}`))})})]}),y.jsx(vN,{children:y.jsx(gN,{children:u.map(A=>y.jsx(yN,{children:y.jsx(Kp,{data:A,onOpenModal:n})},A.id))})})]})}function Kp({data:n,onOpenModal:t}){return n?n.type==="add"?y.jsx(aN,{onClick:()=>t?.({type:"add"}),style:{pointerEvents:"auto"}}):n.type==="photo"?y.jsx(ZD,{src:n.src}):y.jsx(wN,{role:"button",tabIndex:0,"aria-label":`open guestbook card ${n.from?`from ${n.from}`:""}`,onClick:()=>t?.({type:"guestbook",item:n}),onKeyDown:i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),t?.({type:"guestbook",item:n}))},"data-nodrag":!0,children:y.jsx(QD,{to:n.to,from:n.from,message:n.message})}):y.jsx(KE,{})}const HE="/",TN=eg`
  from { opacity: 0; }
  to { opacity: 1; }
`,SN=eg`
  from { opacity: 1; }
  to { opacity: 0; }
`,A_=S.div`
  position: fixed; inset: 0; z-index: 1000;
  display: grid; place-items: center;
  background: rgba(0,0,0,.45);
  opacity: 0;
  animation: ${n=>n.$closing?SN:TN} 220ms ease-out forwards;
  @media (max-width: 640px) {
    align-items: end;
    padding: 0 16px 84px 16px;
  }
`,R_=S.div`
  position: relative; display: inline-flex; align-items: flex-end; gap: 17px;
  @media (max-width: 640px) {
    gap: 0;
  }
`,I_=S.div`
  padding: 40px; border-radius: 16px;
  background: rgba(160,160,160,.80);
  backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
  display: inline-flex; gap: 20px; align-items: center;
  @media (max-width: 640px) {
    padding: 18px;
    border-radius: 12px;
  }
`,AN=S.div`
  width: 520px; display: inline-flex; gap: 20px; align-items: center;
  @media (max-width: 640px) {
    width: 300px;
    gap: 12px;
  }
`,C_=S.div`
  width: 450px; height: 560px; position: relative; overflow: hidden;
  border-radius: 16px;
  background: linear-gradient(246deg, #F2F0FF -0.07%, #FFF 99.93%);
  box-shadow: 0 20px 60px rgba(0,0,0,.25);
  @media (max-width: 640px) {
    width: 260px;
    height: 340px;
    border-radius: 12px;
  }
`,j_=S.div`
  position: absolute;
  left: 12px;
  top: 314.67px;
  width: 302px;
  height: 246px;
  background-image: url(${HE}guestbook-card.svg);
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 640px) {
    left: 4px;
    top: 210px;
    width: 158px;
    height: 130px;
  }
`,D_=S.div`
  position: absolute; left: 32px; top: 50px; display: inline-flex; align-items: center; gap: 8px;
  @media (max-width: 640px) {
    left: 18px; top: 22px; gap: 6px;
  }
`,N_=S.div`
  font-family: Pretendard, system-ui; font-weight: 600; font-size: 32px; color: #555;
  @media (max-width: 640px) {
    font-size: 22px;
  }
`,RN=S.input`
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
`,IN=S.div`
  border: none; outline: none;
  background: transparent;
  font-family: Pretendard, system-ui;
  font-size: 28px; color: #555;
  font-weight: 600;
  padding: 2px 4px 4px;
  min-width: 120px; max-width: 240px;
  @media (max-width: 640px) {
    font-size: 18px;
    min-width: 90px; max-width: 150px;
  }
`,M_=S.div`
  position: absolute; left: 32px; top: 104px; width: 381px;
  @media (max-width: 640px) {
    left: 18px; top: 78px; width: 206px;
  }
`,CN=S.textarea`
  width: 353px; min-height: 220px; resize: none;
  border: none; outline: none;
  border-radius: 12px; padding: 14px 16px;
  font-family: Pretendard, system-ui; font-size: 18px; line-height: 27px; color: #303030;
  background: rgba(255,255,255,.6);
  box-shadow: inset 0 0 0 1px rgba(255,255,255,.5);
  @media (max-width: 640px) {
    min-height: 120px; border-radius: 10px; padding: 10px 12px;
    font-size: 14px; line-height: 21px;
  }
`,jN=S.div`
  width: 353px; min-height: 220px; resize: none;
  border: none; outline: none;
  border-radius: 12px; padding: 14px 0px;
  font-family: Pretendard, system-ui; font-size: 24px; line-height: 150%; color: #303030;
  font-weight: 400;
  @media (max-width: 640px) {
    min-height: 120px; border-radius: 10px; padding: 10px 12px;
    font-size: 14px; line-height: 21px;
  }
`,O_=S.div`
  position: absolute; right: 32px; top: 472px; display: inline-flex; align-items: center; gap: 8px;
  @media (max-width: 640px) {
    left: 110px; top: 270px; gap: 6px;
  }
  @media (max-width: 640px) {
    left: auto; top: auto; right: 18px; bottom: 16px; gap: 6px;
  }
`,k_=S.div`
  font-family: Pretendard, system-ui; font-weight: 600; font-size: 32px; color: #555;
  @media (max-width: 640px) {
    font-size: 22px;
  }
`,DN=S.input`
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
`,NN=S.div`
border: none; outline: none;
  /* border-bottom: 1px solid rgba(0,0,0,.18); */
  background: transparent;
  font-family: Pretendard, system-ui; font-size: 32px; color: #555;
  font-weight: 600;
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
`,MN=S.div`
  width: 50px; height: 560px; display: inline-flex; flex-direction: column; justify-content: flex-end;
  @media (max-width: 640px) {
    height: 340px;
  }
`,ON=S.button`
  width: 50px; height: 50px; border-radius: 25px;
  background: #202020; cursor: pointer;
  display: grid; place-items: center; border: none;
  @media (max-width: 640px) {
    width: 40px; height: 40px; border-radius: 20px;
  }
  &:hover {
    background: #404040;
  }
`,kN=S.div`
  width: auto; height: auto;
  /* background: #fff;  */
  /* clip-path: polygon(0 0,100% 50%,0 100%); */
  background-image: url(${HE}icons/guestbook-send.svg);
  background-repeat: no-repeat;
  background-size: contain;
  width: 34px; height: 34px;
  margin-left: 4px;
  @media (max-width: 640px) {
    width: 26px; height: 26px;
  }
`,V_=S.div`
  width: 60px; height: 640px; position: relative;
  @media (max-width: 640px) {
    width: 100%; height: auto;
  }
`,P_=S.button`
  width: 60px; height: 60px; position: absolute; left: 0; top: 0;
  display: grid; place-items: center; cursor: pointer;
  background: transparent; border: none;
  border-radius: 30px; background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(2px);
  @media (max-width: 640px) {
    position: fixed; left: 50%; bottom: 20px; top: auto; transform: translateX(-50%);
    width: 56px; height: 56px; border-radius: 28px; background: #fff1;
    backdrop-filter: blur(2px);
  }
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`,U_=S.div`
  width: 32px; height: 32px; position: relative;
`,nh=S.span`
  position: absolute; left: 15px; top: 4px; width: 2px; height: 24px;
  background: #FFFFFF; transform: rotate(${n=>n.$deg}deg);
  @media (max-width: 640px) {
    left: 15px; top: 4px; height: 24px;
  }
`;function VN({open:n,onClose:t,onSubmit:i,defaultTo:a="",defaultFrom:o="",defaultMessage:u="",type:d}){const[p,m]=L.useState(n),[g,v]=L.useState(!1),[E,T]=L.useState(a),[A,M]=L.useState(o),[k,V]=L.useState(""),B=L.useRef(null),q=L.useCallback(()=>{v(!0),T(""),M(""),V(""),t?.()},[t]);if(L.useEffect(()=>{const K=ot=>{ot.key==="Escape"&&q()};return n&&document.addEventListener("keydown",K),()=>document.removeEventListener("keydown",K)},[n,q]),L.useEffect(()=>{n&&(m(!0),v(!1),T((a??"").toString()),M((o??"").toString()),V((u??"").toString()))},[n,a,o,u]),L.useEffect(()=>{if(!n&&p){v(!0);const K=setTimeout(()=>{v(!1),m(!1)},220);return()=>clearTimeout(K)}},[n,p]),!p)return null;const Z=K=>{K.target===B.current&&q()},lt=()=>{const K={to:(E||"").trim(),from:(A||"").trim(),message:(k||"").trim()};K.message&&i?.(K)};if(console.log(d),d==="add")return y.jsx(A_,{ref:B,onMouseDown:Z,$closing:g,children:y.jsxs(R_,{onMouseDown:K=>K.stopPropagation(),children:[y.jsx(I_,{children:y.jsxs(AN,{children:[y.jsxs(C_,{children:[y.jsx(j_,{}),y.jsxs(D_,{children:[y.jsx(N_,{children:"To."}),y.jsx(RN,{value:E,onChange:K=>T(K.target.value),placeholder:"받는 사람"})]}),y.jsx(M_,{children:y.jsx(CN,{placeholder:"내용을 입력해 주세요.",value:k,onChange:K=>V(K.target.value)})}),y.jsxs(O_,{children:[y.jsx(k_,{children:"From."}),y.jsx(DN,{value:A,onChange:K=>M(K.target.value),placeholder:"보내는 사람"})]})]}),y.jsx(MN,{children:y.jsx(ON,{type:"button",onClick:lt,"aria-label":"send",children:y.jsx(kN,{})})})]})}),y.jsx(V_,{children:y.jsx(P_,{type:"button",onClick:q,"aria-label":"close",children:y.jsxs(U_,{children:[y.jsx(nh,{$deg:45}),y.jsx(nh,{$deg:-45})]})})})]})});if(d==="guestbook")return y.jsx(A_,{ref:B,onMouseDown:Z,$closing:g,children:y.jsxs(R_,{onMouseDown:K=>K.stopPropagation(),children:[y.jsx(I_,{children:y.jsxs(C_,{children:[y.jsx(j_,{}),y.jsxs(D_,{children:[y.jsx(N_,{children:"To."}),y.jsx(IN,{children:a})]}),y.jsx(M_,{children:y.jsx(jN,{children:u})}),y.jsxs(O_,{children:[y.jsx(k_,{children:"From."}),y.jsx(NN,{children:o})]})]})}),y.jsx(V_,{children:y.jsx(P_,{type:"button",onClick:q,"aria-label":"close",children:y.jsxs(U_,{children:[y.jsx(nh,{$deg:45}),y.jsx(nh,{$deg:-45})]})})})]})})}const PN={apiKey:"AIzaSyAEFzPwTADLzuxWuyk889Jz1cHPsEgLOkQ",authDomain:"tu2025grad.firebaseapp.com",projectId:"tu2025grad",storageBucket:"tu2025grad.firebasestorage.app",messagingSenderId:"553768466639",appId:"1:553768466639:web:7c16f5d6432da7ebc05fba"},UN=fg(PN),Hp=RE(UN),zN='Pretendard, system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial, sans-serif',LN=S.div`
  background: #121212; min-height: 100vh;
`,$N=S.main`
  padding: 80px 40px 120px 40px;
  @media (max-width: 640px) {
    padding: 52px 0 80px 0;
  }
`,BN=S.h1`
  font-family: ${zN}; font-weight: 700; font-size: 32px; color: #FFFFFF; text-align: center; margin: 20px 0 40px;
  @media (max-width: 640px) {
    font-size: 20px; margin: 4px 0 24px ;
  }
`,FN=S.section`
  display: flex; justify-content: center;
  @media (max-width: 640px) {
    justify-content: stretch;
  }
`,KN=S.div`
  width: 100%;
  @media (max-width: 640px) {
    width: 100%;
  }
`;function HN(){const[n,t]=bt.useState(!1),[i,a]=bt.useState("add"),[o,u]=bt.useState({to:"",from:"",message:""}),[d,p]=bt.useState([]);bt.useEffect(()=>{let E=!0;return(async()=>{try{const T=d_(xh(Hp,"guest"),f_("time","desc")),A=await Vm(T);if(!E)return;const M=[];A.forEach(k=>{const V=k.data();M.push({id:k.id,to:V.to||"",from:V.from||"",message:V.message||"",type:"text"})}),p(M)}catch(T){console.error("Failed to load guestbook items:",T)}})(),()=>{E=!1}},[]);const m=async({to:E,from:T,message:A})=>{try{const M=String(Date.now());await Xg(Xl(xh(Hp,"guest"),M),{to:E||"",from:T||"",message:A||"",time:M});try{const k=d_(xh(Hp,"guest"),f_("time","desc")),V=await Vm(k),B=[];V.forEach(q=>{const Z=q.data();B.push({id:q.id,to:Z.to||"",from:Z.from||"",message:Z.message||"",type:"text"})}),p(B)}catch(k){console.error("Failed to reload guestbook items after submit:",k)}t(!1)}catch(M){console.error("Failed to submit guest message:",M)}},g=`
    .gb-wrap *::-webkit-scrollbar { display: none; }
    .gb-wrap * { scrollbar-width: none; -ms-overflow-style: none; }
    .gb-wrap article img { width: 100% !important; height: 100% !important; object-fit: cover !important; display: block !important; }
  `,v=bt.useCallback(E=>{E&&typeof E=="object"&&E.type?(a(E.type),E.type==="guestbook"&&E.item?u({to:E.item.to||"",from:E.item.from||"",message:E.item.message||""}):u({to:"",from:"",message:""})):(a("add"),u({to:"",from:"",message:""})),t(!0)},[]);return y.jsxs(LN,{children:[y.jsxs($N,{children:[y.jsx(BN,{children:"Guest Book"}),y.jsx(FN,{children:y.jsxs(KN,{className:"gb-wrap",children:[y.jsx("style",{children:g}),y.jsx(bN,{onOpenModal:v,items:d})]})})]}),y.jsx(VN,{open:n,type:i,defaultTo:o.to,defaultFrom:o.from,defaultMessage:o.message,onClose:()=>t(!1),onSubmit:m})]})}const Lm="/",qN=S.div`
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
`,GN=S.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: auto;
  @media (max-width: 640px) {
    gap: 40px;
    /* width: calc(100% - 32px); */
}
`,YN=S.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  height: auto;
  gap: 40px;
  @media (max-width: 640px) {
    /* flex-direction: row; */
    width: 100%;
    align-items: flex-start;
    justify-content: space-between;
}
`,QN=S.div`
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 640px) {
    display: none;
}
`,XN=S.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  /* align-items: center; */
  gap: 20px;
  @media (max-width: 640px) {
    width: 100%;
}
`,WN=S.h1`
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
`,ZN=S.h2`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 130%;
  color: #fff;
  margin: 0;
  padding: 0;
  max-width: 260px;
    @media (max-width: 640px) {
    font-size: 12px;
    max-width: none;
}
   @media (max-width: 393px) {
    font-size: 10px;
  }
`,JN=S.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,t9=S.p`
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
`,e9=S.div`
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
`,n9=S.div`
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
`,i9=S.div`
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
`,r9=S.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
`,a9=S.div`
  width: 24px;
  height: 24px;
  background-image: ${({$src:n})=>`url("${n}")`};
  background-size: contain;
  background-repeat: no-repeat;
  @media (max-width: 640px) {
    width: 16px;
    height: 16px;
}
`,s9=S.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #e0e0e0;
  margin: 0;
  padding: 0;
  @media (max-width: 640px) {
    font-size: 16px;
}
`,o9=S.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 12px;
  cursor: pointer;
`,l9=S.p`
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
`,u9=S.div`
  display: flex;
  width: 20px;
  height: 75px;
  align-items: center;
  justify-content: center;
  background-image: url('${Lm}icons/pageDownIcon.svg');
  background-size: contain;
  background-repeat: no-repeat;
  @media (max-width: 640px) {
    width: 10px;
    height: 38px;
}
`;function $m({titleKor:n,titleEng:t,context:i,isOpen:a=!0,onClose:o,src:u,docId:d,collection:p="works"}){const[m,g]=L.useState(0),[v,E]=L.useState(!1);L.useEffect(()=>{let M=!0;return(async()=>{if(d!=null)try{const k=Xl(Wl,p,String(d)),V=await _h(k);if(!M)return;if(V.exists()){const B=V.data();g(typeof B.like=="number"?B.like:0)}else g(0)}catch(k){console.error("Firestore getDoc error:",k),M&&g(0)}})(),()=>{M=!1}},[d,p]);const T=async()=>{try{const M=Xl(Wl,p,String(d)),k=await _h(M);if(k.exists()){const V=k.data();g(typeof V.like=="number"?V.like:0)}}catch(M){console.error("Firestore refresh error:",M)}},A=async()=>{if(v)return;if(d==null){console.warn("handleLike called without a valid docId");return}E(!0);const M=Xl(Wl,p,String(d));try{await Lh(M,{like:$h(1)}),g(k=>k+1),await T()}catch(k){if(k.code==="not-found"||/No document/i.test(String(k)))try{(await _h(M)).exists()?await Lh(M,{like:$h(1)}):await Xg(M,{like:1},{merge:!0}),await T()}catch(V){console.error("Firestore like fallback error:",V)}else console.error("Firestore like error:",k)}finally{E(!1)}};return y.jsx(qN,{$open:!!a,children:y.jsxs(GN,{children:[y.jsxs(YN,{children:[y.jsx(QN,{onClick:()=>{typeof o=="function"&&o()},children:y.jsx("img",{src:`${Lm}icons/closeIcon.svg`,alt:"Close Icon"})}),y.jsxs(XN,{children:[y.jsx(e9,{$src:u}),y.jsxs(JN,{children:[y.jsx(ZN,{children:n}),y.jsx(WN,{children:t})]}),y.jsx(t9,{children:i})]})]}),y.jsxs(n9,{children:[y.jsx(i9,{onClick:A,"aria-disabled":v,title:v?"처리 중":"좋아요",children:y.jsxs(r9,{children:[y.jsx(a9,{$src:`${Lm}icons/likeIcon(white).svg`,"aria-label":"Like icon"}),y.jsx(s9,{children:m||0})]})}),y.jsxs(o9,{onClick:()=>{const k=Math.max(document.documentElement?.scrollHeight||0,document.body?.scrollHeight||0)-window.innerHeight,B=Math.max(0,k-269);window.scrollTo({top:B,behavior:"smooth"})},children:[y.jsx(l9,{children:"Designer Info"}),y.jsx(u9,{})]})]})]})})}$m.propTypes={titleKor:J.string.isRequired,titleEng:J.string.isRequired,context:J.string.isRequired,isOpen:J.bool,onClose:J.func,docId:J.oneOfType([J.string,J.number]).isRequired,collection:J.string};const c9=S.div`
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
`,h9=S.div`
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
`,d9=S.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  display: block;
`,f9=S.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 8px);
  width: auto;
  @media (max-width: 640px) {
    height: 100%;
}
`,p9=S.div`
  display: flex;
  height: auto;
  padding: 0;
  margin: 0;
  flex-direction: column;
  gap: 0px;
`,m9=S.h1`
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
`,g9=S.h2`
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
`,y9=S.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 84px;
  @media (max-width: 640px) {
    height: 38px;
}
`,x9=S.div`
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
`,qp=S.h3`
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
`,v9=S.div`
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
`,Gp=S.p`
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
`;function Jg({nameKor:n,nameEng:t,part:i,sns:a,eMail:o,imgUrl:u,imgAlt:d}){return y.jsxs(c9,{children:[y.jsx(h9,{children:y.jsx(d9,{src:u,alt:d})}),y.jsxs(f9,{children:[y.jsxs(p9,{children:[y.jsx(m9,{children:n}),y.jsx(g9,{children:t})]}),y.jsxs(y9,{children:[y.jsxs(x9,{children:[y.jsx(qp,{children:"Part"}),y.jsx(qp,{children:"SNS"}),y.jsx(qp,{children:"E-mail"})]}),y.jsxs(v9,{children:[y.jsx(Gp,{children:i}),y.jsx(Gp,{children:a}),y.jsx(Gp,{children:o})]})]})]})]})}Jg.propTypes={nameKor:J.string.isRequired,nameEng:J.string.isRequired,part:J.string,sns:J.string,eMail:J.string,imgUrl:J.string.isRequired,imgAlt:J.string.isRequired};Jg.defaultProps={sns:"N/A",eMail:"N/A"};const _9=S.div`
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
`,w9=S.div`
  display: flex;
  flex-direction: column;
  width: 810px;
  height: auto;
  gap: 76px;
  @media (max-width: 640px) {
    width: 100%;
    gap: 21px;
}
`,E9=S.h1`
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
`;function z_({designers:n}){return y.jsxs(_9,{children:[y.jsx(E9,{children:"Designer"}),y.jsx(w9,{children:n.map((t,i)=>y.jsx(Jg,{nameKor:t.nameKor,nameEng:t.nameEng,part:t.role,sns:t.sns,eMail:t.eMail,imgUrl:t.imgUrl},i))})]})}const b9=S.div`
    width: 100%; // 임시값
    margin-top: 50px;
    max-width: ${n=>n.$isInfoOpen?"100%":"1800px"};
@media (max-width: 640px) {
    margin-top: 20px;
}
`,T9=S.div`
    position: relative;
    width: 100%;
    max-width: 100vw;
    padding-top: 56.25%; // 16:9 비율
`,S9=S.iframe`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
`;function A9({videoId:n,isInfoOpen:t}){const a=`https://player.vimeo.com/video/${String(n||"").trim()}?badge=0&autopause=0&title=0&byline=0&portrait=0&app_id=58479`;return y.jsx(b9,{$isInfoOpen:t,children:y.jsx(T9,{children:y.jsx(S9,{src:a,frameBorder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,title:"Embedded Vimeo"})})})}const R9="/",I9=S.div`
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
`,C9=S.div`
    display: flex;
    width: 40px;
    height: 40px;
`;function j9({isOpen:n=!1,onClick:t}){const[i,a]=L.useState(!1);return L.useEffect(()=>{let o;return n?a(!1):(a(!1),o=setTimeout(()=>{a(!0)},500)),()=>clearTimeout(o)},[n]),y.jsx(I9,{$visible:!n,$active:i,onClick:()=>{typeof t=="function"&&t()},children:y.jsx(C9,{children:y.jsx("img",{src:`${R9}icons/infoOpenIcon.svg`,alt:"작품 정보 열기"})})})}function ih(n){if(!n)return n;const t="/";if(/^https?:\/\//i.test(n))return n;const i=String(n).replace(/^\.\.\//,"").replace(/^\//,"");return t+i}const D9=S.img`
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
`,Yp=n=>y.jsx(D9,{loading:"lazy",...n}),N9=S.div`
  display: flex;
  position: relative;
  background: #fff;
  width: 100%;
  @media (max-width: 640px) {
    flex-direction: column;
}
`,M9=S.div`
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
`,O9=S.div`
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
`,L_=S.div`
  display: flex;
  position: relative;
  width: 100%;
`,k9=S.div`
  position: relative;
  width: 100%;
  height: auto;
  /* max-width: 1800px; */
`,V9={A:"c0",E:"c1",H:"c2",I:"c3",L:"c4",M:"c5"};function P9(){const{pid:n}=JT(),t=(n||"").toUpperCase().match(/^([A-Z])(\d{3})$/),[i,a]=L.useState(!0),[o,u]=L.useState(!0),d=()=>{a(!1),setTimeout(()=>{u(!1)},500)},p=()=>{u(!0),setTimeout(()=>{a(!0)},0)};let m=null;if(t){const[,B,q]=t,Z=V9[B]||null,lt=Math.max(0,parseInt(q,10)-1);m=eu.find(K=>K.projectNum===lt&&(!Z||K.category===Z)),m||(m=eu.find(K=>K.projectNum==lt))}if(!m)return y.jsx(L_,{children:y.jsxs(PageContainer,{children:[y.jsx($m,{titleKor:"작품 제목(한글)",titleEng:"Work Title (English)",context:"이곳은 작품 설명이 들어가는 영역입니다. 작품에 대한 상세한 설명이나 배경, 제작 과정 등을 기술할 수 있습니다. 이 텍스트는 예시로 작성된 내용이며, 실제 작품 설명으로 대체되어야 합니다.",isOpen:i,onClose:()=>a(!1),docId:0}),y.jsx(Yp,{src:"https://placehold.co/1530x4000",alt:"featured"}),y.jsx(z_,{children:"  "})]})});const g=(m.members||[]).map(B=>{const q=lg.find(Z=>Z.num===B);return q?{nameKor:q.nameKor,nameEng:q.nameEng,role:q.role||"Designer",sns:q.sns||"-",eMail:q.eMail||"",imgUrl:ih(q.imgUrl||"/김예준.jpg")}:null}).filter(Boolean),E={c0:"A",c1:"E",c2:"H",c3:"I",c4:"L",c5:"M"}[m.category]||"A",T=m.projectNum??m.num,A=String(T).padStart(3,"0"),M=`/projects/${T}`,[k,V]=L.useState([]);return L.useEffect(()=>{let B=!1;const q=["jpg"],Z=30,lt=2,K=I=>!I||!I.ok?!1:(I.headers.get("content-type")||"").startsWith("image/"),ot=async I=>{try{const C=await fetch(I,{method:"GET",cache:"no-store"});return K(C)}catch{return!1}};return(async()=>{const I=[];let C=0;for(let j=0;j<Z;j++){let O=!1;for(const U of q){const $=ih(`${M}/gallery/${j}.${U}`);if(await ot($)){I.push($),O=!0,C=0;break}}if(!O&&(I.length===0||(C+=1,C>=lt)))break}B||V(I)})(),()=>{B=!0}},[M]),L.useEffect(()=>{const B=m?.projectNum??m?.num;if(B==null)return;const Z=Xl(Wl,"works",String(B));(async()=>{try{await Lh(Z,{view:$h(1)})}catch(lt){if(lt.code==="not-found"||/No document/i.test(String(lt)))try{(await _h(Z)).exists()?await Lh(Z,{view:$h(1)}):await Xg(Z,{view:1},{merge:!0})}catch(K){console.error("Firestore view fallback error:",K)}else console.error("Firestore view error:",lt)}})()},[m?.projectNum,m?.num]),y.jsx(L_,{children:y.jsxs(N9,{children:[y.jsx(j9,{isOpen:i,onClick:p}),y.jsx(O9,{$visible:o,children:y.jsx($m,{titleKor:m.titleKor,titleEng:m.titleEng,context:m.description||"null",isOpen:i,onClose:d,src:ih(`/projects/${T}/thumb.jpg`),docId:T})}),y.jsxs(M9,{$isInfoOpen:i,children:[k.length>0?k.map((B,q)=>y.jsx(Yp,{src:B,alt:`project-${E}${A}-img-${q+1}`},q)):y.jsx(Yp,{src:ih("/thumbnailExample.gif"),alt:`project-${E}${A}-placeholder`}),y.jsx(A9,{videoId:m.videoId,isInfoOpen:i}),y.jsx(k9,{children:y.jsx(z_,{designers:g})})]})]})})}const U9=S.div`
    position: fixed;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 6px;
    z-index: 60;
    pointer-events: none;
    opacity: ${({$visible:n})=>n?1:0};
    transition: opacity ${({$fadeMs:n})=>n??400}ms ease;
`,z9=S.div`
    border-radius: 50%;
    transition: all 160ms ease;
    ${n=>n.$active?Ah`
        width: 10px;
        height: 10px;
        background: rgba(48,48,48,1);
    `:Ah`
        width: 6px;
        height: 6px;
        background: rgba(0,0,0,0.3);
    `}
`;function L9({visible:n=!0,fadeMs:t=400,activeIndex:i=0,total:a=5}={}){const o=new Array(a).fill(0);return y.jsx(U9,{$visible:n,$fadeMs:t,"aria-hidden":!n,children:o.map((u,d)=>y.jsx(z9,{$active:d===(i??0)},d))})}const Qp=S.div`
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
`,$_=S.div`
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
`,B_=S.div`
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
`,F_=S.div`
    display: flex;
    width: 72px;
    height: 1px;

    height: 1px; background:#333;
    width: ${({$shown:n,$lineWidth:t})=>n?t||"72px":"0px"};
    transition:
    width ${({$lDur:n})=>n}ms ${({$ease:n})=>n} ${({$lDelay:n})=>n}ms;
`,K_=S.div`
    display: flex;
    align-items: center;
    gap: 12px;
    mix-blend-mode: difference;
`,$9=S.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: auto;
    background-color: rgba(255, 255, 255, 0.5);
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
`,B9=S.p`
    font-size: 16px;
    font-weight: 300;
    color: #222;
    line-height: 150%;
    text-align: justify;
    margin: 0;
`;function Xp({children:n,textWidth:t,textHeight:i,shown:a,tDur:o,tDelay:u,ease:d}){return y.jsx($9,{$textWidth:t,$textHeight:i,$shown:a,$tDur:o,$tDelay:u,$ease:d,children:y.jsx(B9,{children:n})})}function F9({top:n,left:t,right:i="auto",bottom:a,lineWidth:o,textWidth:u,textHeight:d,children:p,position:m="left",isActive:g,section:v,currentSection:E,anim:T}){const[A,M]=L.useState(!1),k=T?.circle?.easing||T?.line?.easing||T?.text?.easing||"cubic-bezier(0.22,1,0.36,1)",V=T?.circle?.duration??250,B=T?.circle?.delay??120,q=T?.line?.duration??500,Z=B+V+(T?.line?.delay??120),lt=T?.text?.duration??280,K=Z+q+(T?.text?.delay??80),I=g||A&&E===v;if(L.useEffect(()=>{g&&!A&&M(!0)},[g,A]),m==="right")return y.jsxs(Qp,{$top:n,$left:t,$right:i,$bottom:a,children:[y.jsx(Xp,{textWidth:u,textHeight:d,shown:I,tDur:lt,tDelay:K,ease:k,children:p}),y.jsxs(K_,{children:[y.jsx(F_,{$lineWidth:o,$shown:I,$lDur:q,$lDelay:Z,$ease:k}),y.jsx($_,{$shown:I,$cDur:V,$cDelay:B,$ease:k,children:y.jsx(B_,{$shown:I,$cDur:V,$cDelay:B,$ease:k})})]})]});if(m==="left")return y.jsxs(Qp,{$top:n,$left:t,$right:i,$bottom:a,children:[y.jsxs(K_,{children:[y.jsx($_,{$shown:I,$cDur:V,$cDelay:B,$ease:k,children:y.jsx(B_,{$shown:I,$cDur:V,$cDelay:B,$ease:k})}),y.jsx(F_,{$lineWidth:o,$shown:I,$lDur:q,$lDelay:Z,$ease:k})]}),y.jsx(Xp,{textWidth:u,textHeight:d,shown:I,tDur:lt,tDelay:K,ease:k,children:p})]});if(m==="no-line")return y.jsx(Qp,{$top:n,$left:t,$right:i,$bottom:a,children:y.jsx(Xp,{textWidth:u,textHeight:d,shown:I,tDur:lt,tDelay:K,ease:k,children:p})})}const Wp="/",K9=S.div`
    display: flex;
    position: relative;
    margin-top: 80px;
    width: 100vw;
    flex-direction: column;
`,H9=S.div`
    display: flex;
    position: relative;
    width: 100vw;
    height: 500vh;
    background-color: #FFF;
    background-color: transparent;
    isolation: isolate;
`,Zp=S.img`
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
`,q9=S.div`
    display: flex;
    position: fixed;
    width: 100vw;
    height: 40px;
    bottom: 0;
    left: 0;
    background-color: #202020;
    z-index: 6;
`;function G9(){const n=L.useRef(null),[t,i]=L.useState(0),a=L.useRef(0),o=L.useRef(!1),u=L.useRef(null),d=L.useRef(0),p=1200,m=1500,[g,v]=L.useState(0),[E,T]=L.useState(!1),[A,M]=L.useState(!0),k=L.useRef(!1),V=L.useRef(null),B=[{top:"130vh",left:"15vw",textWidth:"300px",textHeight:"auto",position:"left",section:1,info:"모든 꽃이 피어날 수 있는 근원적인 기반이다. 거칠고 단단한 돌은 졸업전시를 향한 수많은 준비와 실험, 실패와 성장의 흔적을 품고 있다. 돌 위에 스며든 이끼와 작은 생명들은 그 과정 속에서 서서히 쌓인 노력의 결실을 상징한다. 이는 향이 머무는 토양처럼, 모든 창작의 향이 퍼져나가기 전의 저장된 시간을 의미한다."},{top:"220vh",right:"53vw",textWidth:"300px",textHeight:"auto",position:"right",section:2,info:"시간 위에 피어난 졸업생들의 존재이자 향의 발화점이다. 꽃은 자신만의 빛깔과 감정, 그리고 이야기를 담은 향을 내뿜는다. 이 향은 단순한 냄새가 아닌, 졸업생들의 기억과 감정이 응축된 예술의 잔향이다. 전시장을 거닐던 관람객들은 그 향을 맡으며 각자의 기억과 감정 속에서 새로운 장면을 떠올리고, 그 순간 작품은 관람객의 내면으로 스며든다."},{top:"355vh",right:"15vw",textWidth:"300px",textHeight:"auto",position:"right",section:3,info:"향의 흐름이 새로운 생명으로 이어지는 장면을 형상화한다. 돌에서 피어난 꽃들이 줄기와 풀로 연결되며, 이는 졸업전시를 통해 이어지는 졸업생과 관람객의 감정적 교류를 상징한다. 꽃에서 나온 향을 맡은 관람객들은 단순히 감상자가 아닌, 그 향의 영향을 받아 자신만의 ‘꽃’을 피우는 존재로 변화한다. 그리고 다시 그들이 만들어내는 향은 또 다른 사람에게 스며들어, 기억과 감정의 연쇄를 만들어낸다."},{top:"420vh",left:"25vw",textWidth:"300px",textHeight:"auto",position:"no-line",section:4,info:"결국 이 세 오브제는 한 사람의 향이 또 다른 향으로 이어지는 순환을 이야기한다. 돌은 그 순환의 뿌리이며, 꽃은 향의 시작점이고, 메인오브제는 그 향이 세상으로 확산되어 기억과 창작이 끊임없이 이어지는 ‘잔향의 생태계’를 완성하는 상징이다."}],q=t===1||t===4?1:.3,Z=t===2||t===4?1:.3,lt=t===3||t===4?1:.3;return L.useEffect(()=>{const K=()=>{if(!n.current)return;const ot=n.current.getBoundingClientRect().top+window.scrollY,C=Math.max(0,Math.min(window.scrollY-ot,4*window.innerHeight))/window.innerHeight*100;let j=0;C>=350?j=4:C>=270?j=3:C>=170?j=2:C>=70?j=1:j=0,i(O=>O===j?O:j)};return window.addEventListener("scroll",K,{passive:!0}),K(),()=>window.removeEventListener("scroll",K)},[]),L.useEffect(()=>{const K=ot=>{if(M(!1),k.current=!0,clearTimeout(V.current),T(!1),!n.current)return;const I=n.current.getBoundingClientRect().top+window.scrollY,C=I,j=I+4*window.innerHeight,O=window.scrollY;if(O<C-20||O>j+20)return;if(o.current){ot.preventDefault();return}if(Date.now()-d.current<p+m){ot.preventDefault();return}const $=ot.deltaY,D=Math.sign($);if(D===0)return;const Kt=Math.max(0,Math.min(4,a.current+D));if(Kt===a.current){ot.preventDefault();return}o.current=!0,d.current=Date.now(),a.current=Kt;const tt=I+Kt*window.innerHeight;window.scrollTo({top:tt,behavior:"smooth"}),clearTimeout(u.current),u.current=setTimeout(()=>{o.current=!1,T(!0),v(Kt)},1e3),ot.preventDefault()};return window.addEventListener("wheel",K,{passive:!1}),()=>{window.removeEventListener("wheel",K),clearTimeout(u.current)}},[]),L.useEffect(()=>{const K=ot=>{const I=[" ","PageDown","ArrowDown"],C=["PageUp","ArrowUp"];M(!1),k.current=!0,clearTimeout(V.current),I.includes(ot.key)?(ot.preventDefault(),window.dispatchEvent(new WheelEvent("wheel",{deltaY:100}))):C.includes(ot.key)&&(ot.preventDefault(),window.dispatchEvent(new WheelEvent("wheel",{deltaY:-100})))};return window.addEventListener("keydown",K),()=>window.removeEventListener("keydown",K)},[]),L.useEffect(()=>(k.current||(M(!0),clearTimeout(V.current),V.current=setTimeout(()=>{M(!1),k.current=!0},1e4)),()=>clearTimeout(V.current)),[]),L.useEffect(()=>{},[E,g]),y.jsxs(K9,{children:[y.jsx(L9,{visible:A,fadeMs:700,activeIndex:g,total:5}),y.jsxs(H9,{ref:n,children:[B.map((K,ot)=>y.jsx(F9,{top:K.top,left:K.left,right:K.right,textWidth:K.textWidth,textHeight:K.textHeight,position:K.position,isActive:E&&g===K.section,anim:{circle:{duration:250,delay:120,easing:"cubic-bezier(0.22,1,0.36,1)"},line:{duration:500,delay:120,easing:"cubic-bezier(0.22,1,0.36,1)"},text:{duration:280,delay:80,easing:"cubic-bezier(0.22,1,0.36,1)"}},section:K.section,currentSection:g,children:K.info},ot)),y.jsx(Zp,{src:`${Wp}showroom/showRight.png`,alt:"Showroom Right",$opacity:lt}),y.jsx(Zp,{src:`${Wp}showroom/showCenter.png`,alt:"Showroom Center",$opacity:Z}),y.jsx(Zp,{src:`${Wp}showroom/showLeft.png`,alt:"Showroom Left",$opacity:q})]}),y.jsx(q9,{})]})}var Jp={exports:{}},Pl={},tm={exports:{}},em={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H_;function Y9(){return H_||(H_=1,(function(n){function t(tt,dt){var yt=tt.length;tt.push(dt);t:for(;0<yt;){var Ct=yt-1>>>1,P=tt[Ct];if(0<o(P,dt))tt[Ct]=dt,tt[yt]=P,yt=Ct;else break t}}function i(tt){return tt.length===0?null:tt[0]}function a(tt){if(tt.length===0)return null;var dt=tt[0],yt=tt.pop();if(yt!==dt){tt[0]=yt;t:for(var Ct=0,P=tt.length,at=P>>>1;Ct<at;){var ct=2*(Ct+1)-1,ht=tt[ct],gt=ct+1,jt=tt[gt];if(0>o(ht,yt))gt<P&&0>o(jt,ht)?(tt[Ct]=jt,tt[gt]=yt,Ct=gt):(tt[Ct]=ht,tt[ct]=yt,Ct=ct);else if(gt<P&&0>o(jt,yt))tt[Ct]=jt,tt[gt]=yt,Ct=gt;else break t}}return dt}function o(tt,dt){var yt=tt.sortIndex-dt.sortIndex;return yt!==0?yt:tt.id-dt.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;n.unstable_now=function(){return u.now()}}else{var d=Date,p=d.now();n.unstable_now=function(){return d.now()-p}}var m=[],g=[],v=1,E=null,T=3,A=!1,M=!1,k=!1,V=!1,B=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;function lt(tt){for(var dt=i(g);dt!==null;){if(dt.callback===null)a(g);else if(dt.startTime<=tt)a(g),dt.sortIndex=dt.expirationTime,t(m,dt);else break;dt=i(g)}}function K(tt){if(k=!1,lt(tt),!M)if(i(m)!==null)M=!0,ot||(ot=!0,$());else{var dt=i(g);dt!==null&&Kt(K,dt.startTime-tt)}}var ot=!1,I=-1,C=5,j=-1;function O(){return V?!0:!(n.unstable_now()-j<C)}function U(){if(V=!1,ot){var tt=n.unstable_now();j=tt;var dt=!0;try{t:{M=!1,k&&(k=!1,q(I),I=-1),A=!0;var yt=T;try{e:{for(lt(tt),E=i(m);E!==null&&!(E.expirationTime>tt&&O());){var Ct=E.callback;if(typeof Ct=="function"){E.callback=null,T=E.priorityLevel;var P=Ct(E.expirationTime<=tt);if(tt=n.unstable_now(),typeof P=="function"){E.callback=P,lt(tt),dt=!0;break e}E===i(m)&&a(m),lt(tt)}else a(m);E=i(m)}if(E!==null)dt=!0;else{var at=i(g);at!==null&&Kt(K,at.startTime-tt),dt=!1}}break t}finally{E=null,T=yt,A=!1}dt=void 0}}finally{dt?$():ot=!1}}}var $;if(typeof Z=="function")$=function(){Z(U)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,se=D.port2;D.port1.onmessage=U,$=function(){se.postMessage(null)}}else $=function(){B(U,0)};function Kt(tt,dt){I=B(function(){tt(n.unstable_now())},dt)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(tt){tt.callback=null},n.unstable_forceFrameRate=function(tt){0>tt||125<tt?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<tt?Math.floor(1e3/tt):5},n.unstable_getCurrentPriorityLevel=function(){return T},n.unstable_next=function(tt){switch(T){case 1:case 2:case 3:var dt=3;break;default:dt=T}var yt=T;T=dt;try{return tt()}finally{T=yt}},n.unstable_requestPaint=function(){V=!0},n.unstable_runWithPriority=function(tt,dt){switch(tt){case 1:case 2:case 3:case 4:case 5:break;default:tt=3}var yt=T;T=tt;try{return dt()}finally{T=yt}},n.unstable_scheduleCallback=function(tt,dt,yt){var Ct=n.unstable_now();switch(typeof yt=="object"&&yt!==null?(yt=yt.delay,yt=typeof yt=="number"&&0<yt?Ct+yt:Ct):yt=Ct,tt){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=yt+P,tt={id:v++,callback:dt,priorityLevel:tt,startTime:yt,expirationTime:P,sortIndex:-1},yt>Ct?(tt.sortIndex=yt,t(g,tt),i(m)===null&&tt===i(g)&&(k?(q(I),I=-1):k=!0,Kt(K,yt-Ct))):(tt.sortIndex=P,t(m,tt),M||A||(M=!0,ot||(ot=!0,$()))),tt},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(tt){var dt=T;return function(){var yt=T;T=dt;try{return tt.apply(this,arguments)}finally{T=yt}}}})(em)),em}var q_;function Q9(){return q_||(q_=1,tm.exports=Y9()),tm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G_;function X9(){if(G_)return Pl;G_=1;var n=Q9(),t=Bm(),i=XS();function a(e){var r="https://react.dev/errors/"+e;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)r+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var r=e,s=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(s=r.return),e=r.return;while(e)}return r.tag===3?s:null}function d(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(a(188))}function m(e){var r=e.alternate;if(!r){if(r=u(e),r===null)throw Error(a(188));return r!==e?null:e}for(var s=e,l=r;;){var h=s.return;if(h===null)break;var f=h.alternate;if(f===null){if(l=h.return,l!==null){s=l;continue}break}if(h.child===f.child){for(f=h.child;f;){if(f===s)return p(h),e;if(f===l)return p(h),r;f=f.sibling}throw Error(a(188))}if(s.return!==l.return)s=h,l=f;else{for(var w=!1,b=h.child;b;){if(b===s){w=!0,s=h,l=f;break}if(b===l){w=!0,l=h,s=f;break}b=b.sibling}if(!w){for(b=f.child;b;){if(b===s){w=!0,s=f,l=h;break}if(b===l){w=!0,l=f,s=h;break}b=b.sibling}if(!w)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:r}function g(e){var r=e.tag;if(r===5||r===26||r===27||r===6)return e;for(e=e.child;e!==null;){if(r=g(e),r!==null)return r;e=e.sibling}return null}var v=Object.assign,E=Symbol.for("react.element"),T=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),q=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),lt=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),ot=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),j=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),U=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=U&&e[U]||e["@@iterator"],typeof e=="function"?e:null)}var D=Symbol.for("react.client.reference");function se(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===D?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M:return"Fragment";case V:return"Profiler";case k:return"StrictMode";case K:return"Suspense";case ot:return"SuspenseList";case j:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case Z:return(e.displayName||"Context")+".Provider";case q:return(e._context.displayName||"Context")+".Consumer";case lt:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return r=e.displayName||null,r!==null?r:se(e.type)||"Memo";case C:r=e._payload,e=e._init;try{return se(e(r))}catch{}}return null}var Kt=Array.isArray,tt=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,dt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,yt={pending:!1,data:null,method:null,action:null},Ct=[],P=-1;function at(e){return{current:e}}function ct(e){0>P||(e.current=Ct[P],Ct[P]=null,P--)}function ht(e,r){P++,Ct[P]=e.current,e.current=r}var gt=at(null),jt=at(null),_t=at(null),ge=at(null);function zt(e,r){switch(ht(_t,r),ht(jt,e),ht(gt,null),r.nodeType){case 9:case 11:e=(e=r.documentElement)&&(e=e.namespaceURI)?Lx(e):0;break;default:if(e=r.tagName,r=r.namespaceURI)r=Lx(r),e=$x(r,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ct(gt),ht(gt,e)}function Me(){ct(gt),ct(jt),ct(_t)}function Ni(e){e.memoizedState!==null&&ht(ge,e);var r=gt.current,s=$x(r,e.type);r!==s&&(ht(jt,e),ht(gt,s))}function qn(e){jt.current===e&&(ct(gt),ct(jt)),ge.current===e&&(ct(ge),Il._currentValue=yt)}var ln=Object.prototype.hasOwnProperty,la=n.unstable_scheduleCallback,rs=n.unstable_cancelCallback,fd=n.unstable_shouldYield,Io=n.unstable_requestPaint,pn=n.unstable_now,Su=n.unstable_getCurrentPriorityLevel,Oe=n.unstable_ImmediatePriority,Le=n.unstable_UserBlockingPriority,Mi=n.unstable_NormalPriority,pd=n.unstable_LowPriority,Co=n.unstable_IdlePriority,md=n.log,ua=n.unstable_setDisableYieldValue,cr=null,tn=null;function Dn(e){if(typeof md=="function"&&ua(e),tn&&typeof tn.setStrictMode=="function")try{tn.setStrictMode(cr,e)}catch{}}var un=Math.clz32?Math.clz32:Ru,gd=Math.log,Au=Math.LN2;function Ru(e){return e>>>=0,e===0?32:31-(gd(e)/Au|0)|0}var oi=256,hr=4194304;function Gn(e){var r=e&42;if(r!==0)return r;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Nn(e,r,s){var l=e.pendingLanes;if(l===0)return 0;var h=0,f=e.suspendedLanes,w=e.pingedLanes;e=e.warmLanes;var b=l&134217727;return b!==0?(l=b&~f,l!==0?h=Gn(l):(w&=b,w!==0?h=Gn(w):s||(s=b&~e,s!==0&&(h=Gn(s))))):(b=l&~f,b!==0?h=Gn(b):w!==0?h=Gn(w):s||(s=l&~e,s!==0&&(h=Gn(s)))),h===0?0:r!==0&&r!==h&&(r&f)===0&&(f=h&-h,s=r&-r,f>=s||f===32&&(s&4194048)!==0)?r:h}function dr(e,r){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&r)===0}function as(e,r){switch(e){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jo(){var e=oi;return oi<<=1,(oi&4194048)===0&&(oi=256),e}function fr(){var e=hr;return hr<<=1,(hr&62914560)===0&&(hr=4194304),e}function ss(e){for(var r=[],s=0;31>s;s++)r.push(e);return r}function ve(e,r){e.pendingLanes|=r,r!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Iu(e,r,s,l,h,f){var w=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var b=e.entanglements,N=e.expirationTimes,Y=e.hiddenUpdates;for(s=w&~s;0<s;){var et=31-un(s),rt=1<<et;b[et]=0,N[et]=-1;var Q=Y[et];if(Q!==null)for(Y[et]=null,et=0;et<Q.length;et++){var X=Q[et];X!==null&&(X.lane&=-536870913)}s&=~rt}l!==0&&pr(e,l,0),f!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=f&~(w&~r))}function pr(e,r,s){e.pendingLanes|=r,e.suspendedLanes&=~r;var l=31-un(r);e.entangledLanes|=r,e.entanglements[l]=e.entanglements[l]|1073741824|s&4194090}function mr(e,r){var s=e.entangledLanes|=r;for(e=e.entanglements;s;){var l=31-un(s),h=1<<l;h&r|e[l]&r&&(e[l]|=r),s&=~h}}function Do(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function No(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Oi(){var e=dt.p;return e!==0?e:(e=window.event,e===void 0?32:s1(e.type))}function yd(e,r){var s=dt.p;try{return dt.p=e,r()}finally{dt.p=s}}var li=Math.random().toString(36).slice(2),_e="__reactFiber$"+li,Ge="__reactProps$"+li,ki="__reactContainer$"+li,ca="__reactEvents$"+li,ha="__reactListeners$"+li,xd="__reactHandles$"+li,Yn="__reactResources$"+li,gr="__reactMarker$"+li;function os(e){delete e[_e],delete e[Ge],delete e[ca],delete e[ha],delete e[xd]}function ui(e){var r=e[_e];if(r)return r;for(var s=e.parentNode;s;){if(r=s[ki]||s[_e]){if(s=r.alternate,r.child!==null||s!==null&&s.child!==null)for(e=Hx(e);e!==null;){if(s=e[_e])return s;e=Hx(e)}return r}e=s,s=e.parentNode}return null}function ci(e){if(e=e[_e]||e[ki]){var r=e.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return e}return null}function yr(e){var r=e.tag;if(r===5||r===26||r===27||r===6)return e.stateNode;throw Error(a(33))}function xr(e){var r=e[Yn];return r||(r=e[Yn]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function we(e){e[gr]=!0}var Cu=new Set,da={};function hi(e,r){di(e,r),di(e+"Capture",r)}function di(e,r){for(da[e]=r,e=0;e<r.length;e++)Cu.add(r[e])}var fa=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),fi={},ls={};function vd(e){return ln.call(ls,e)?!0:ln.call(fi,e)?!1:fa.test(e)?ls[e]=!0:(fi[e]=!0,!1)}function pa(e,r,s){if(vd(r))if(s===null)e.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(r);return;case"boolean":var l=r.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(r);return}}e.setAttribute(r,""+s)}}function ma(e,r,s){if(s===null)e.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttribute(r,""+s)}}function Mn(e,r,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(r,s,""+l)}}var ga,us;function Vi(e){if(ga===void 0)try{throw Error()}catch(s){var r=s.stack.trim().match(/\n( *(at )?)/);ga=r&&r[1]||"",us=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ga+e+us}var cs=!1;function hs(e,r){if(!e||cs)return"";cs=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(r){var rt=function(){throw Error()};if(Object.defineProperty(rt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(rt,[])}catch(X){var Q=X}Reflect.construct(e,[],rt)}else{try{rt.call()}catch(X){Q=X}e.call(rt.prototype)}}else{try{throw Error()}catch(X){Q=X}(rt=e())&&typeof rt.catch=="function"&&rt.catch(function(){})}}catch(X){if(X&&Q&&typeof X.stack=="string")return[X.stack,Q.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=l.DetermineComponentFrameRoot(),w=f[0],b=f[1];if(w&&b){var N=w.split(`
`),Y=b.split(`
`);for(h=l=0;l<N.length&&!N[l].includes("DetermineComponentFrameRoot");)l++;for(;h<Y.length&&!Y[h].includes("DetermineComponentFrameRoot");)h++;if(l===N.length||h===Y.length)for(l=N.length-1,h=Y.length-1;1<=l&&0<=h&&N[l]!==Y[h];)h--;for(;1<=l&&0<=h;l--,h--)if(N[l]!==Y[h]){if(l!==1||h!==1)do if(l--,h--,0>h||N[l]!==Y[h]){var et=`
`+N[l].replace(" at new "," at ");return e.displayName&&et.includes("<anonymous>")&&(et=et.replace("<anonymous>",e.displayName)),et}while(1<=l&&0<=h);break}}}finally{cs=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?Vi(s):""}function _d(e){switch(e.tag){case 26:case 27:case 5:return Vi(e.type);case 16:return Vi("Lazy");case 13:return Vi("Suspense");case 19:return Vi("SuspenseList");case 0:case 15:return hs(e.type,!1);case 11:return hs(e.type.render,!1);case 1:return hs(e.type,!0);case 31:return Vi("Activity");default:return""}}function Qn(e){try{var r="";do r+=_d(e),e=e.return;while(e);return r}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function fe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vr(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function ya(e){var r=vr(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),l=""+e[r];if(!e.hasOwnProperty(r)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var h=s.get,f=s.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return h.call(this)},set:function(w){l=""+w,f.call(this,w)}}),Object.defineProperty(e,r,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(w){l=""+w},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function _r(e){e._valueTracker||(e._valueTracker=ya(e))}function Zt(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var s=r.getValue(),l="";return e&&(l=vr(e)?e.checked?"true":"false":e.value),e=l,e!==s?(r.setValue(e),!0):!1}function Pi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var xa=/[\n"\\]/g;function $e(e){return e.replace(xa,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Mo(e,r,s,l,h,f,w,b){e.name="",w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.type=w:e.removeAttribute("type"),r!=null?w==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+fe(r)):e.value!==""+fe(r)&&(e.value=""+fe(r)):w!=="submit"&&w!=="reset"||e.removeAttribute("value"),r!=null?ko(e,w,fe(r)):s!=null?ko(e,w,fe(s)):l!=null&&e.removeAttribute("value"),h==null&&f!=null&&(e.defaultChecked=!!f),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+fe(b):e.removeAttribute("name")}function Oo(e,r,s,l,h,f,w,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),r!=null||s!=null){if(!(f!=="submit"&&f!=="reset"||r!=null))return;s=s!=null?""+fe(s):"",r=r!=null?""+fe(r):s,b||r===e.value||(e.value=r),e.defaultValue=r}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=b?e.checked:!!l,e.defaultChecked=!!l,w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"&&(e.name=w)}function ko(e,r,s){r==="number"&&Pi(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function wr(e,r,s,l){if(e=e.options,r){r={};for(var h=0;h<s.length;h++)r["$"+s[h]]=!0;for(s=0;s<e.length;s++)h=r.hasOwnProperty("$"+e[s].value),e[s].selected!==h&&(e[s].selected=h),h&&l&&(e[s].defaultSelected=!0)}else{for(s=""+fe(s),r=null,h=0;h<e.length;h++){if(e[h].value===s){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}r!==null||e[h].disabled||(r=e[h])}r!==null&&(r.selected=!0)}}function ju(e,r,s){if(r!=null&&(r=""+fe(r),r!==e.value&&(e.value=r),s==null)){e.defaultValue!==r&&(e.defaultValue=r);return}e.defaultValue=s!=null?""+fe(s):""}function Du(e,r,s,l){if(r==null){if(l!=null){if(s!=null)throw Error(a(92));if(Kt(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),r=s}s=fe(r),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l)}function On(e,r){if(r){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=r;return}}e.textContent=r}var Ui=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Vo(e,r,s){var l=r.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="":l?e.setProperty(r,s):typeof s!="number"||s===0||Ui.has(r)?r==="float"?e.cssFloat=s:e[r]=(""+s).trim():e[r]=s+"px"}function Po(e,r,s){if(r!=null&&typeof r!="object")throw Error(a(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||r!=null&&r.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in r)l=r[h],r.hasOwnProperty(h)&&s[h]!==l&&Vo(e,h,l)}else for(var f in r)r.hasOwnProperty(f)&&Vo(e,f,r[f])}function ds(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nu=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Mu=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xn(e){return Mu.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Uo=null;function zo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Er=null,cn=null;function Ou(e){var r=ci(e);if(r&&(e=r.stateNode)){var s=e[Ge]||null;t:switch(e=r.stateNode,r.type){case"input":if(Mo(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),r=s.name,s.type==="radio"&&r!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+$e(""+r)+'"][type="radio"]'),r=0;r<s.length;r++){var l=s[r];if(l!==e&&l.form===e.form){var h=l[Ge]||null;if(!h)throw Error(a(90));Mo(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(r=0;r<s.length;r++)l=s[r],l.form===e.form&&Zt(l)}break t;case"textarea":ju(e,s.value,s.defaultValue);break t;case"select":r=s.value,r!=null&&wr(e,!!s.multiple,r,!1)}}}var va=!1;function _a(e,r,s){if(va)return e(r,s);va=!0;try{var l=e(r);return l}finally{if(va=!1,(Er!==null||cn!==null)&&(bc(),Er&&(r=Er,e=cn,cn=Er=null,Ou(r),e)))for(r=0;r<e.length;r++)Ou(e[r])}}function br(e,r){var s=e.stateNode;if(s===null)return null;var l=s[Ge]||null;if(l===null)return null;s=l[r];t:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,r,typeof s));return s}var hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zi=!1;if(hn)try{var Tr={};Object.defineProperty(Tr,"passive",{get:function(){zi=!0}}),window.addEventListener("test",Tr,Tr),window.removeEventListener("test",Tr,Tr)}catch{zi=!1}var kn=null,ie=null,fs=null;function ku(){if(fs)return fs;var e,r=ie,s=r.length,l,h="value"in kn?kn.value:kn.textContent,f=h.length;for(e=0;e<s&&r[e]===h[e];e++);var w=s-e;for(l=1;l<=w&&r[s-l]===h[f-l];l++);return fs=h.slice(e,1<l?1-l:void 0)}function wa(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function Ea(){return!0}function Lo(){return!1}function ke(e){function r(s,l,h,f,w){this._reactName=s,this._targetInst=h,this.type=l,this.nativeEvent=f,this.target=w,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(s=e[b],this[b]=s?s(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ea:Lo,this.isPropagationStopped=Lo,this}return v(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Ea)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Ea)},persist:function(){},isPersistent:Ea}),r}var en={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ba=ke(en),Ta=v({},en,{view:0,detail:0}),Sa=ke(Ta),ps,Aa,pi,Ra=v({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ys,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pi&&(pi&&e.type==="mousemove"?(ps=e.screenX-pi.screenX,Aa=e.screenY-pi.screenY):Aa=ps=0,pi=e),ps)},movementY:function(e){return"movementY"in e?e.movementY:Aa}}),Ia=ke(Ra),wd=v({},Ra,{dataTransfer:0}),Vu=ke(wd),Ca=v({},Ta,{relatedTarget:0}),ms=ke(Ca),Pu=v({},en,{animationName:0,elapsedTime:0,pseudoElement:0}),$o=ke(Pu),Bo=v({},en,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Uu=ke(Bo),gs=v({},en,{data:0}),Fo=ke(gs),zu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Li={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $u(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=Lu[e])?!!r[e]:!1}function ys(){return $u}var Bu=v({},Ta,{key:function(e){if(e.key){var r=zu[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=wa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Li[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ys,charCode:function(e){return e.type==="keypress"?wa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xs=ke(Bu),dn=v({},Ra,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ko=ke(dn),Fu=v({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ys}),Sr=ke(Fu),c=v({},en,{propertyName:0,elapsedTime:0,pseudoElement:0}),x=ke(c),_=v({},Ra,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),R=ke(_),G=v({},en,{newState:0,oldState:0}),W=ke(G),ut=[9,13,27,32],Rt=hn&&"CompositionEvent"in window,oe=null;hn&&"documentMode"in document&&(oe=document.documentMode);var Qt=hn&&"TextEvent"in window&&!oe,Ee=hn&&(!Rt||oe&&8<oe&&11>=oe),wn=" ",mi=!1;function Wn(e,r){switch(e){case"keyup":return ut.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zn(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jn=!1;function Ho(e,r){switch(e){case"compositionend":return Zn(r);case"keypress":return r.which!==32?null:(mi=!0,wn);case"textInput":return e=r.data,e===wn&&mi?null:e;default:return null}}function qE(e,r){if(Jn)return e==="compositionend"||!Rt&&Wn(e,r)?(e=ku(),fs=ie=kn=null,Jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Ee&&r.locale!=="ko"?null:r.data;default:return null}}var GE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function t0(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!GE[e.type]:r==="textarea"}function e0(e,r,s,l){Er?cn?cn.push(l):cn=[l]:Er=l,r=Cc(r,"onChange"),0<r.length&&(s=new ba("onChange","change",null,s,l),e.push({event:s,listeners:r}))}var qo=null,Go=null;function YE(e){kx(e,0)}function Ku(e){var r=yr(e);if(Zt(r))return e}function n0(e,r){if(e==="change")return r}var i0=!1;if(hn){var Ed;if(hn){var bd="oninput"in document;if(!bd){var r0=document.createElement("div");r0.setAttribute("oninput","return;"),bd=typeof r0.oninput=="function"}Ed=bd}else Ed=!1;i0=Ed&&(!document.documentMode||9<document.documentMode)}function a0(){qo&&(qo.detachEvent("onpropertychange",s0),Go=qo=null)}function s0(e){if(e.propertyName==="value"&&Ku(Go)){var r=[];e0(r,Go,e,zo(e)),_a(YE,r)}}function QE(e,r,s){e==="focusin"?(a0(),qo=r,Go=s,qo.attachEvent("onpropertychange",s0)):e==="focusout"&&a0()}function XE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ku(Go)}function WE(e,r){if(e==="click")return Ku(r)}function ZE(e,r){if(e==="input"||e==="change")return Ku(r)}function JE(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var En=typeof Object.is=="function"?Object.is:JE;function Yo(e,r){if(En(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var s=Object.keys(e),l=Object.keys(r);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var h=s[l];if(!ln.call(r,h)||!En(e[h],r[h]))return!1}return!0}function o0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function l0(e,r){var s=o0(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=r&&l>=r)return{node:s,offset:r-e};e=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=o0(s)}}function u0(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?u0(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function c0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var r=Pi(e.document);r instanceof e.HTMLIFrameElement;){try{var s=typeof r.contentWindow.location.href=="string"}catch{s=!1}if(s)e=r.contentWindow;else break;r=Pi(e.document)}return r}function Td(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}var tb=hn&&"documentMode"in document&&11>=document.documentMode,vs=null,Sd=null,Qo=null,Ad=!1;function h0(e,r,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Ad||vs==null||vs!==Pi(l)||(l=vs,"selectionStart"in l&&Td(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Qo&&Yo(Qo,l)||(Qo=l,l=Cc(Sd,"onSelect"),0<l.length&&(r=new ba("onSelect","select",null,r,s),e.push({event:r,listeners:l}),r.target=vs)))}function ja(e,r){var s={};return s[e.toLowerCase()]=r.toLowerCase(),s["Webkit"+e]="webkit"+r,s["Moz"+e]="moz"+r,s}var _s={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionrun:ja("Transition","TransitionRun"),transitionstart:ja("Transition","TransitionStart"),transitioncancel:ja("Transition","TransitionCancel"),transitionend:ja("Transition","TransitionEnd")},Rd={},d0={};hn&&(d0=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function Da(e){if(Rd[e])return Rd[e];if(!_s[e])return e;var r=_s[e],s;for(s in r)if(r.hasOwnProperty(s)&&s in d0)return Rd[e]=r[s];return e}var f0=Da("animationend"),p0=Da("animationiteration"),m0=Da("animationstart"),eb=Da("transitionrun"),nb=Da("transitionstart"),ib=Da("transitioncancel"),g0=Da("transitionend"),y0=new Map,Id="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Id.push("scrollEnd");function ti(e,r){y0.set(e,r),hi(r,[e])}var x0=new WeakMap;function Vn(e,r){if(typeof e=="object"&&e!==null){var s=x0.get(e);return s!==void 0?s:(r={value:e,source:r,stack:Qn(r)},x0.set(e,r),r)}return{value:e,source:r,stack:Qn(r)}}var Pn=[],ws=0,Cd=0;function Hu(){for(var e=ws,r=Cd=ws=0;r<e;){var s=Pn[r];Pn[r++]=null;var l=Pn[r];Pn[r++]=null;var h=Pn[r];Pn[r++]=null;var f=Pn[r];if(Pn[r++]=null,l!==null&&h!==null){var w=l.pending;w===null?h.next=h:(h.next=w.next,w.next=h),l.pending=h}f!==0&&v0(s,h,f)}}function qu(e,r,s,l){Pn[ws++]=e,Pn[ws++]=r,Pn[ws++]=s,Pn[ws++]=l,Cd|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function jd(e,r,s,l){return qu(e,r,s,l),Gu(e)}function Es(e,r){return qu(e,null,null,r),Gu(e)}function v0(e,r,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var h=!1,f=e.return;f!==null;)f.childLanes|=s,l=f.alternate,l!==null&&(l.childLanes|=s),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(h=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,h&&r!==null&&(h=31-un(s),e=f.hiddenUpdates,l=e[h],l===null?e[h]=[r]:l.push(r),r.lane=s|536870912),f):null}function Gu(e){if(50<_l)throw _l=0,Pf=null,Error(a(185));for(var r=e.return;r!==null;)e=r,r=e.return;return e.tag===3?e.stateNode:null}var bs={};function rb(e,r,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(e,r,s,l){return new rb(e,r,s,l)}function Dd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $i(e,r){var s=e.alternate;return s===null?(s=bn(e.tag,r,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=r,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,r=e.dependencies,s.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function _0(e,r){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=r,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,r=s.dependencies,e.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),e}function Yu(e,r,s,l,h,f){var w=0;if(l=e,typeof e=="function")Dd(e)&&(w=1);else if(typeof e=="string")w=sT(e,s,gt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case j:return e=bn(31,s,r,h),e.elementType=j,e.lanes=f,e;case M:return Na(s.children,h,f,r);case k:w=8,h|=24;break;case V:return e=bn(12,s,r,h|2),e.elementType=V,e.lanes=f,e;case K:return e=bn(13,s,r,h),e.elementType=K,e.lanes=f,e;case ot:return e=bn(19,s,r,h),e.elementType=ot,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case B:case Z:w=10;break t;case q:w=9;break t;case lt:w=11;break t;case I:w=14;break t;case C:w=16,l=null;break t}w=29,s=Error(a(130,e===null?"null":typeof e,"")),l=null}return r=bn(w,s,r,h),r.elementType=e,r.type=l,r.lanes=f,r}function Na(e,r,s,l){return e=bn(7,e,l,r),e.lanes=s,e}function Nd(e,r,s){return e=bn(6,e,null,r),e.lanes=s,e}function Md(e,r,s){return r=bn(4,e.children!==null?e.children:[],e.key,r),r.lanes=s,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}var Ts=[],Ss=0,Qu=null,Xu=0,Un=[],zn=0,Ma=null,Bi=1,Fi="";function Oa(e,r){Ts[Ss++]=Xu,Ts[Ss++]=Qu,Qu=e,Xu=r}function w0(e,r,s){Un[zn++]=Bi,Un[zn++]=Fi,Un[zn++]=Ma,Ma=e;var l=Bi;e=Fi;var h=32-un(l)-1;l&=~(1<<h),s+=1;var f=32-un(r)+h;if(30<f){var w=h-h%5;f=(l&(1<<w)-1).toString(32),l>>=w,h-=w,Bi=1<<32-un(r)+h|s<<h|l,Fi=f+e}else Bi=1<<f|s<<h|l,Fi=e}function Od(e){e.return!==null&&(Oa(e,1),w0(e,1,0))}function kd(e){for(;e===Qu;)Qu=Ts[--Ss],Ts[Ss]=null,Xu=Ts[--Ss],Ts[Ss]=null;for(;e===Ma;)Ma=Un[--zn],Un[zn]=null,Fi=Un[--zn],Un[zn]=null,Bi=Un[--zn],Un[zn]=null}var fn=null,ye=null,Ht=!1,ka=null,gi=!1,Vd=Error(a(519));function Va(e){var r=Error(a(418,""));throw Zo(Vn(r,e)),Vd}function E0(e){var r=e.stateNode,s=e.type,l=e.memoizedProps;switch(r[_e]=e,r[Ge]=l,s){case"dialog":Vt("cancel",r),Vt("close",r);break;case"iframe":case"object":case"embed":Vt("load",r);break;case"video":case"audio":for(s=0;s<El.length;s++)Vt(El[s],r);break;case"source":Vt("error",r);break;case"img":case"image":case"link":Vt("error",r),Vt("load",r);break;case"details":Vt("toggle",r);break;case"input":Vt("invalid",r),Oo(r,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),_r(r);break;case"select":Vt("invalid",r);break;case"textarea":Vt("invalid",r),Du(r,l.value,l.defaultValue,l.children),_r(r)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||r.textContent===""+s||l.suppressHydrationWarning===!0||zx(r.textContent,s)?(l.popover!=null&&(Vt("beforetoggle",r),Vt("toggle",r)),l.onScroll!=null&&Vt("scroll",r),l.onScrollEnd!=null&&Vt("scrollend",r),l.onClick!=null&&(r.onclick=jc),r=!0):r=!1,r||Va(e)}function b0(e){for(fn=e.return;fn;)switch(fn.tag){case 5:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:fn=fn.return}}function Xo(e){if(e!==fn)return!1;if(!Ht)return b0(e),Ht=!0,!1;var r=e.tag,s;if((s=r!==3&&r!==27)&&((s=r===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||Jf(e.type,e.memoizedProps)),s=!s),s&&ye&&Va(e),b0(e),r===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(r===0){ye=ni(e.nextSibling);break t}r--}else s!=="$"&&s!=="$!"&&s!=="$?"||r++;e=e.nextSibling}ye=null}}else r===27?(r=ye,$r(e.type)?(e=ip,ip=null,ye=e):ye=r):ye=fn?ni(e.stateNode.nextSibling):null;return!0}function Wo(){ye=fn=null,Ht=!1}function T0(){var e=ka;return e!==null&&(yn===null?yn=e:yn.push.apply(yn,e),ka=null),e}function Zo(e){ka===null?ka=[e]:ka.push(e)}var Pd=at(null),Pa=null,Ki=null;function Ar(e,r,s){ht(Pd,r._currentValue),r._currentValue=s}function Hi(e){e._currentValue=Pd.current,ct(Pd)}function Ud(e,r,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),e===s)break;e=e.return}}function zd(e,r,s,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var f=h.dependencies;if(f!==null){var w=h.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=h;for(var N=0;N<r.length;N++)if(b.context===r[N]){f.lanes|=s,b=f.alternate,b!==null&&(b.lanes|=s),Ud(f.return,s,e),l||(w=null);break t}f=b.next}}else if(h.tag===18){if(w=h.return,w===null)throw Error(a(341));w.lanes|=s,f=w.alternate,f!==null&&(f.lanes|=s),Ud(w,s,e),w=null}else w=h.child;if(w!==null)w.return=h;else for(w=h;w!==null;){if(w===e){w=null;break}if(h=w.sibling,h!==null){h.return=w.return,w=h;break}w=w.return}h=w}}function Jo(e,r,s,l){e=null;for(var h=r,f=!1;h!==null;){if(!f){if((h.flags&524288)!==0)f=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var w=h.alternate;if(w===null)throw Error(a(387));if(w=w.memoizedProps,w!==null){var b=h.type;En(h.pendingProps.value,w.value)||(e!==null?e.push(b):e=[b])}}else if(h===ge.current){if(w=h.alternate,w===null)throw Error(a(387));w.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(Il):e=[Il])}h=h.return}e!==null&&zd(r,e,s,l),r.flags|=262144}function Wu(e){for(e=e.firstContext;e!==null;){if(!En(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ua(e){Pa=e,Ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function nn(e){return S0(Pa,e)}function Zu(e,r){return Pa===null&&Ua(e),S0(e,r)}function S0(e,r){var s=r._currentValue;if(r={context:r,memoizedValue:s,next:null},Ki===null){if(e===null)throw Error(a(308));Ki=r,e.dependencies={lanes:0,firstContext:r},e.flags|=524288}else Ki=Ki.next=r;return s}var ab=typeof AbortController<"u"?AbortController:function(){var e=[],r=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){r.aborted=!0,e.forEach(function(s){return s()})}},sb=n.unstable_scheduleCallback,ob=n.unstable_NormalPriority,Ve={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ld(){return{controller:new ab,data:new Map,refCount:0}}function tl(e){e.refCount--,e.refCount===0&&sb(ob,function(){e.controller.abort()})}var el=null,$d=0,As=0,Rs=null;function lb(e,r){if(el===null){var s=el=[];$d=0,As=Kf(),Rs={status:"pending",value:void 0,then:function(l){s.push(l)}}}return $d++,r.then(A0,A0),r}function A0(){if(--$d===0&&el!==null){Rs!==null&&(Rs.status="fulfilled");var e=el;el=null,As=0,Rs=null;for(var r=0;r<e.length;r++)(0,e[r])()}}function ub(e,r){var s=[],l={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return e.then(function(){l.status="fulfilled",l.value=r;for(var h=0;h<s.length;h++)(0,s[h])(r)},function(h){for(l.status="rejected",l.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),l}var R0=tt.S;tt.S=function(e,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&lb(e,r),R0!==null&&R0(e,r)};var za=at(null);function Bd(){var e=za.current;return e!==null?e:re.pooledCache}function Ju(e,r){r===null?ht(za,za.current):ht(za,r.pool)}function I0(){var e=Bd();return e===null?null:{parent:Ve._currentValue,pool:e}}var nl=Error(a(460)),C0=Error(a(474)),tc=Error(a(542)),Fd={then:function(){}};function j0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ec(){}function D0(e,r,s){switch(s=e[s],s===void 0?e.push(r):s!==r&&(r.then(ec,ec),r=s),r.status){case"fulfilled":return r.value;case"rejected":throw e=r.reason,M0(e),e;default:if(typeof r.status=="string")r.then(ec,ec);else{if(e=re,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=r,e.status="pending",e.then(function(l){if(r.status==="pending"){var h=r;h.status="fulfilled",h.value=l}},function(l){if(r.status==="pending"){var h=r;h.status="rejected",h.reason=l}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw e=r.reason,M0(e),e}throw il=r,nl}}var il=null;function N0(){if(il===null)throw Error(a(459));var e=il;return il=null,e}function M0(e){if(e===nl||e===tc)throw Error(a(483))}var Rr=!1;function Kd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hd(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ir(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Cr(e,r,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Xt&2)!==0){var h=l.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),l.pending=r,r=Gu(e),v0(e,null,s),r}return qu(e,l,r,s),Gu(e)}function rl(e,r,s){if(r=r.updateQueue,r!==null&&(r=r.shared,(s&4194048)!==0)){var l=r.lanes;l&=e.pendingLanes,s|=l,r.lanes=s,mr(e,s)}}function qd(e,r){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var h=null,f=null;if(s=s.firstBaseUpdate,s!==null){do{var w={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};f===null?h=f=w:f=f.next=w,s=s.next}while(s!==null);f===null?h=f=r:f=f.next=r}else h=f=r;s={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:f,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=r:e.next=r,s.lastBaseUpdate=r}var Gd=!1;function al(){if(Gd){var e=Rs;if(e!==null)throw e}}function sl(e,r,s,l){Gd=!1;var h=e.updateQueue;Rr=!1;var f=h.firstBaseUpdate,w=h.lastBaseUpdate,b=h.shared.pending;if(b!==null){h.shared.pending=null;var N=b,Y=N.next;N.next=null,w===null?f=Y:w.next=Y,w=N;var et=e.alternate;et!==null&&(et=et.updateQueue,b=et.lastBaseUpdate,b!==w&&(b===null?et.firstBaseUpdate=Y:b.next=Y,et.lastBaseUpdate=N))}if(f!==null){var rt=h.baseState;w=0,et=Y=N=null,b=f;do{var Q=b.lane&-536870913,X=Q!==b.lane;if(X?(Lt&Q)===Q:(l&Q)===Q){Q!==0&&Q===As&&(Gd=!0),et!==null&&(et=et.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var St=e,wt=b;Q=r;var ee=s;switch(wt.tag){case 1:if(St=wt.payload,typeof St=="function"){rt=St.call(ee,rt,Q);break t}rt=St;break t;case 3:St.flags=St.flags&-65537|128;case 0:if(St=wt.payload,Q=typeof St=="function"?St.call(ee,rt,Q):St,Q==null)break t;rt=v({},rt,Q);break t;case 2:Rr=!0}}Q=b.callback,Q!==null&&(e.flags|=64,X&&(e.flags|=8192),X=h.callbacks,X===null?h.callbacks=[Q]:X.push(Q))}else X={lane:Q,tag:b.tag,payload:b.payload,callback:b.callback,next:null},et===null?(Y=et=X,N=rt):et=et.next=X,w|=Q;if(b=b.next,b===null){if(b=h.shared.pending,b===null)break;X=b,b=X.next,X.next=null,h.lastBaseUpdate=X,h.shared.pending=null}}while(!0);et===null&&(N=rt),h.baseState=N,h.firstBaseUpdate=Y,h.lastBaseUpdate=et,f===null&&(h.shared.lanes=0),Pr|=w,e.lanes=w,e.memoizedState=rt}}function O0(e,r){if(typeof e!="function")throw Error(a(191,e));e.call(r)}function k0(e,r){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)O0(s[e],r)}var Is=at(null),nc=at(0);function V0(e,r){e=Zi,ht(nc,e),ht(Is,r),Zi=e|r.baseLanes}function Yd(){ht(nc,Zi),ht(Is,Is.current)}function Qd(){Zi=nc.current,ct(Is),ct(nc)}var jr=0,Mt=null,Jt=null,Re=null,ic=!1,Cs=!1,La=!1,rc=0,ol=0,js=null,cb=0;function be(){throw Error(a(321))}function Xd(e,r){if(r===null)return!1;for(var s=0;s<r.length&&s<e.length;s++)if(!En(e[s],r[s]))return!1;return!0}function Wd(e,r,s,l,h,f){return jr=f,Mt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,tt.H=e===null||e.memoizedState===null?vy:_y,La=!1,f=s(l,h),La=!1,Cs&&(f=U0(r,s,l,h)),P0(e),f}function P0(e){tt.H=cc;var r=Jt!==null&&Jt.next!==null;if(jr=0,Re=Jt=Mt=null,ic=!1,ol=0,js=null,r)throw Error(a(300));e===null||Be||(e=e.dependencies,e!==null&&Wu(e)&&(Be=!0))}function U0(e,r,s,l){Mt=e;var h=0;do{if(Cs&&(js=null),ol=0,Cs=!1,25<=h)throw Error(a(301));if(h+=1,Re=Jt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}tt.H=yb,f=r(s,l)}while(Cs);return f}function hb(){var e=tt.H,r=e.useState()[0];return r=typeof r.then=="function"?ll(r):r,e=e.useState()[0],(Jt!==null?Jt.memoizedState:null)!==e&&(Mt.flags|=1024),r}function Zd(){var e=rc!==0;return rc=0,e}function Jd(e,r,s){r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~s}function tf(e){if(ic){for(e=e.memoizedState;e!==null;){var r=e.queue;r!==null&&(r.pending=null),e=e.next}ic=!1}jr=0,Re=Jt=Mt=null,Cs=!1,ol=rc=0,js=null}function mn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?Mt.memoizedState=Re=e:Re=Re.next=e,Re}function Ie(){if(Jt===null){var e=Mt.alternate;e=e!==null?e.memoizedState:null}else e=Jt.next;var r=Re===null?Mt.memoizedState:Re.next;if(r!==null)Re=r,Jt=e;else{if(e===null)throw Mt.alternate===null?Error(a(467)):Error(a(310));Jt=e,e={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},Re===null?Mt.memoizedState=Re=e:Re=Re.next=e}return Re}function ef(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ll(e){var r=ol;return ol+=1,js===null&&(js=[]),e=D0(js,e,r),r=Mt,(Re===null?r.memoizedState:Re.next)===null&&(r=r.alternate,tt.H=r===null||r.memoizedState===null?vy:_y),e}function ac(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ll(e);if(e.$$typeof===Z)return nn(e)}throw Error(a(438,String(e)))}function nf(e){var r=null,s=Mt.updateQueue;if(s!==null&&(r=s.memoCache),r==null){var l=Mt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(r={data:l.data.map(function(h){return h.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),s===null&&(s=ef(),Mt.updateQueue=s),s.memoCache=r,s=r.data[r.index],s===void 0)for(s=r.data[r.index]=Array(e),l=0;l<e;l++)s[l]=O;return r.index++,s}function qi(e,r){return typeof r=="function"?r(e):r}function sc(e){var r=Ie();return rf(r,Jt,e)}function rf(e,r,s){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var h=e.baseQueue,f=l.pending;if(f!==null){if(h!==null){var w=h.next;h.next=f.next,f.next=w}r.baseQueue=h=f,l.pending=null}if(f=e.baseState,h===null)e.memoizedState=f;else{r=h.next;var b=w=null,N=null,Y=r,et=!1;do{var rt=Y.lane&-536870913;if(rt!==Y.lane?(Lt&rt)===rt:(jr&rt)===rt){var Q=Y.revertLane;if(Q===0)N!==null&&(N=N.next={lane:0,revertLane:0,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null}),rt===As&&(et=!0);else if((jr&Q)===Q){Y=Y.next,Q===As&&(et=!0);continue}else rt={lane:0,revertLane:Y.revertLane,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},N===null?(b=N=rt,w=f):N=N.next=rt,Mt.lanes|=Q,Pr|=Q;rt=Y.action,La&&s(f,rt),f=Y.hasEagerState?Y.eagerState:s(f,rt)}else Q={lane:rt,revertLane:Y.revertLane,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},N===null?(b=N=Q,w=f):N=N.next=Q,Mt.lanes|=rt,Pr|=rt;Y=Y.next}while(Y!==null&&Y!==r);if(N===null?w=f:N.next=b,!En(f,e.memoizedState)&&(Be=!0,et&&(s=Rs,s!==null)))throw s;e.memoizedState=f,e.baseState=w,e.baseQueue=N,l.lastRenderedState=f}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function af(e){var r=Ie(),s=r.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var l=s.dispatch,h=s.pending,f=r.memoizedState;if(h!==null){s.pending=null;var w=h=h.next;do f=e(f,w.action),w=w.next;while(w!==h);En(f,r.memoizedState)||(Be=!0),r.memoizedState=f,r.baseQueue===null&&(r.baseState=f),s.lastRenderedState=f}return[f,l]}function z0(e,r,s){var l=Mt,h=Ie(),f=Ht;if(f){if(s===void 0)throw Error(a(407));s=s()}else s=r();var w=!En((Jt||h).memoizedState,s);w&&(h.memoizedState=s,Be=!0),h=h.queue;var b=B0.bind(null,l,h,e);if(ul(2048,8,b,[e]),h.getSnapshot!==r||w||Re!==null&&Re.memoizedState.tag&1){if(l.flags|=2048,Ds(9,oc(),$0.bind(null,l,h,s,r),null),re===null)throw Error(a(349));f||(jr&124)!==0||L0(l,r,s)}return s}function L0(e,r,s){e.flags|=16384,e={getSnapshot:r,value:s},r=Mt.updateQueue,r===null?(r=ef(),Mt.updateQueue=r,r.stores=[e]):(s=r.stores,s===null?r.stores=[e]:s.push(e))}function $0(e,r,s,l){r.value=s,r.getSnapshot=l,F0(r)&&K0(e)}function B0(e,r,s){return s(function(){F0(r)&&K0(e)})}function F0(e){var r=e.getSnapshot;e=e.value;try{var s=r();return!En(e,s)}catch{return!0}}function K0(e){var r=Es(e,2);r!==null&&In(r,e,2)}function sf(e){var r=mn();if(typeof e=="function"){var s=e;if(e=s(),La){Dn(!0);try{s()}finally{Dn(!1)}}}return r.memoizedState=r.baseState=e,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:e},r}function H0(e,r,s,l){return e.baseState=s,rf(e,Jt,typeof l=="function"?l:qi)}function db(e,r,s,l,h){if(uc(e))throw Error(a(485));if(e=r.action,e!==null){var f={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(w){f.listeners.push(w)}};tt.T!==null?s(!0):f.isTransition=!1,l(f),s=r.pending,s===null?(f.next=r.pending=f,q0(r,f)):(f.next=s.next,r.pending=s.next=f)}}function q0(e,r){var s=r.action,l=r.payload,h=e.state;if(r.isTransition){var f=tt.T,w={};tt.T=w;try{var b=s(h,l),N=tt.S;N!==null&&N(w,b),G0(e,r,b)}catch(Y){of(e,r,Y)}finally{tt.T=f}}else try{f=s(h,l),G0(e,r,f)}catch(Y){of(e,r,Y)}}function G0(e,r,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Y0(e,r,l)},function(l){return of(e,r,l)}):Y0(e,r,s)}function Y0(e,r,s){r.status="fulfilled",r.value=s,Q0(r),e.state=s,r=e.pending,r!==null&&(s=r.next,s===r?e.pending=null:(s=s.next,r.next=s,q0(e,s)))}function of(e,r,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do r.status="rejected",r.reason=s,Q0(r),r=r.next;while(r!==l)}e.action=null}function Q0(e){e=e.listeners;for(var r=0;r<e.length;r++)(0,e[r])()}function X0(e,r){return r}function W0(e,r){if(Ht){var s=re.formState;if(s!==null){t:{var l=Mt;if(Ht){if(ye){e:{for(var h=ye,f=gi;h.nodeType!==8;){if(!f){h=null;break e}if(h=ni(h.nextSibling),h===null){h=null;break e}}f=h.data,h=f==="F!"||f==="F"?h:null}if(h){ye=ni(h.nextSibling),l=h.data==="F!";break t}}Va(l)}l=!1}l&&(r=s[0])}}return s=mn(),s.memoizedState=s.baseState=r,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:X0,lastRenderedState:r},s.queue=l,s=gy.bind(null,Mt,l),l.dispatch=s,l=sf(!1),f=df.bind(null,Mt,!1,l.queue),l=mn(),h={state:r,dispatch:null,action:e,pending:null},l.queue=h,s=db.bind(null,Mt,h,f,s),h.dispatch=s,l.memoizedState=e,[r,s,!1]}function Z0(e){var r=Ie();return J0(r,Jt,e)}function J0(e,r,s){if(r=rf(e,r,X0)[0],e=sc(qi)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var l=ll(r)}catch(w){throw w===nl?tc:w}else l=r;r=Ie();var h=r.queue,f=h.dispatch;return s!==r.memoizedState&&(Mt.flags|=2048,Ds(9,oc(),fb.bind(null,h,s),null)),[l,f,e]}function fb(e,r){e.action=r}function ty(e){var r=Ie(),s=Jt;if(s!==null)return J0(r,s,e);Ie(),r=r.memoizedState,s=Ie();var l=s.queue.dispatch;return s.memoizedState=e,[r,l,!1]}function Ds(e,r,s,l){return e={tag:e,create:s,deps:l,inst:r,next:null},r=Mt.updateQueue,r===null&&(r=ef(),Mt.updateQueue=r),s=r.lastEffect,s===null?r.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,r.lastEffect=e),e}function oc(){return{destroy:void 0,resource:void 0}}function ey(){return Ie().memoizedState}function lc(e,r,s,l){var h=mn();l=l===void 0?null:l,Mt.flags|=e,h.memoizedState=Ds(1|r,oc(),s,l)}function ul(e,r,s,l){var h=Ie();l=l===void 0?null:l;var f=h.memoizedState.inst;Jt!==null&&l!==null&&Xd(l,Jt.memoizedState.deps)?h.memoizedState=Ds(r,f,s,l):(Mt.flags|=e,h.memoizedState=Ds(1|r,f,s,l))}function ny(e,r){lc(8390656,8,e,r)}function iy(e,r){ul(2048,8,e,r)}function ry(e,r){return ul(4,2,e,r)}function ay(e,r){return ul(4,4,e,r)}function sy(e,r){if(typeof r=="function"){e=e();var s=r(e);return function(){typeof s=="function"?s():r(null)}}if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function oy(e,r,s){s=s!=null?s.concat([e]):null,ul(4,4,sy.bind(null,r,e),s)}function lf(){}function ly(e,r){var s=Ie();r=r===void 0?null:r;var l=s.memoizedState;return r!==null&&Xd(r,l[1])?l[0]:(s.memoizedState=[e,r],e)}function uy(e,r){var s=Ie();r=r===void 0?null:r;var l=s.memoizedState;if(r!==null&&Xd(r,l[1]))return l[0];if(l=e(),La){Dn(!0);try{e()}finally{Dn(!1)}}return s.memoizedState=[l,r],l}function uf(e,r,s){return s===void 0||(jr&1073741824)!==0?e.memoizedState=r:(e.memoizedState=s,e=dx(),Mt.lanes|=e,Pr|=e,s)}function cy(e,r,s,l){return En(s,r)?s:Is.current!==null?(e=uf(e,s,l),En(e,r)||(Be=!0),e):(jr&42)===0?(Be=!0,e.memoizedState=s):(e=dx(),Mt.lanes|=e,Pr|=e,r)}function hy(e,r,s,l,h){var f=dt.p;dt.p=f!==0&&8>f?f:8;var w=tt.T,b={};tt.T=b,df(e,!1,r,s);try{var N=h(),Y=tt.S;if(Y!==null&&Y(b,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var et=ub(N,l);cl(e,r,et,Rn(e))}else cl(e,r,l,Rn(e))}catch(rt){cl(e,r,{then:function(){},status:"rejected",reason:rt},Rn())}finally{dt.p=f,tt.T=w}}function pb(){}function cf(e,r,s,l){if(e.tag!==5)throw Error(a(476));var h=dy(e).queue;hy(e,h,r,yt,s===null?pb:function(){return fy(e),s(l)})}function dy(e){var r=e.memoizedState;if(r!==null)return r;r={memoizedState:yt,baseState:yt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:yt},next:null};var s={};return r.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:s},next:null},e.memoizedState=r,e=e.alternate,e!==null&&(e.memoizedState=r),r}function fy(e){var r=dy(e).next.queue;cl(e,r,{},Rn())}function hf(){return nn(Il)}function py(){return Ie().memoizedState}function my(){return Ie().memoizedState}function mb(e){for(var r=e.return;r!==null;){switch(r.tag){case 24:case 3:var s=Rn();e=Ir(s);var l=Cr(r,e,s);l!==null&&(In(l,r,s),rl(l,r,s)),r={cache:Ld()},e.payload=r;return}r=r.return}}function gb(e,r,s){var l=Rn();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},uc(e)?yy(r,s):(s=jd(e,r,s,l),s!==null&&(In(s,e,l),xy(s,r,l)))}function gy(e,r,s){var l=Rn();cl(e,r,s,l)}function cl(e,r,s,l){var h={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(uc(e))yy(r,h);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=r.lastRenderedReducer,f!==null))try{var w=r.lastRenderedState,b=f(w,s);if(h.hasEagerState=!0,h.eagerState=b,En(b,w))return qu(e,r,h,0),re===null&&Hu(),!1}catch{}finally{}if(s=jd(e,r,h,l),s!==null)return In(s,e,l),xy(s,r,l),!0}return!1}function df(e,r,s,l){if(l={lane:2,revertLane:Kf(),action:l,hasEagerState:!1,eagerState:null,next:null},uc(e)){if(r)throw Error(a(479))}else r=jd(e,s,l,2),r!==null&&In(r,e,2)}function uc(e){var r=e.alternate;return e===Mt||r!==null&&r===Mt}function yy(e,r){Cs=ic=!0;var s=e.pending;s===null?r.next=r:(r.next=s.next,s.next=r),e.pending=r}function xy(e,r,s){if((s&4194048)!==0){var l=r.lanes;l&=e.pendingLanes,s|=l,r.lanes=s,mr(e,s)}}var cc={readContext:nn,use:ac,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useLayoutEffect:be,useInsertionEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useSyncExternalStore:be,useId:be,useHostTransitionStatus:be,useFormState:be,useActionState:be,useOptimistic:be,useMemoCache:be,useCacheRefresh:be},vy={readContext:nn,use:ac,useCallback:function(e,r){return mn().memoizedState=[e,r===void 0?null:r],e},useContext:nn,useEffect:ny,useImperativeHandle:function(e,r,s){s=s!=null?s.concat([e]):null,lc(4194308,4,sy.bind(null,r,e),s)},useLayoutEffect:function(e,r){return lc(4194308,4,e,r)},useInsertionEffect:function(e,r){lc(4,2,e,r)},useMemo:function(e,r){var s=mn();r=r===void 0?null:r;var l=e();if(La){Dn(!0);try{e()}finally{Dn(!1)}}return s.memoizedState=[l,r],l},useReducer:function(e,r,s){var l=mn();if(s!==void 0){var h=s(r);if(La){Dn(!0);try{s(r)}finally{Dn(!1)}}}else h=r;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=gb.bind(null,Mt,e),[l.memoizedState,e]},useRef:function(e){var r=mn();return e={current:e},r.memoizedState=e},useState:function(e){e=sf(e);var r=e.queue,s=gy.bind(null,Mt,r);return r.dispatch=s,[e.memoizedState,s]},useDebugValue:lf,useDeferredValue:function(e,r){var s=mn();return uf(s,e,r)},useTransition:function(){var e=sf(!1);return e=hy.bind(null,Mt,e.queue,!0,!1),mn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,r,s){var l=Mt,h=mn();if(Ht){if(s===void 0)throw Error(a(407));s=s()}else{if(s=r(),re===null)throw Error(a(349));(Lt&124)!==0||L0(l,r,s)}h.memoizedState=s;var f={value:s,getSnapshot:r};return h.queue=f,ny(B0.bind(null,l,f,e),[e]),l.flags|=2048,Ds(9,oc(),$0.bind(null,l,f,s,r),null),s},useId:function(){var e=mn(),r=re.identifierPrefix;if(Ht){var s=Fi,l=Bi;s=(l&~(1<<32-un(l)-1)).toString(32)+s,r="«"+r+"R"+s,s=rc++,0<s&&(r+="H"+s.toString(32)),r+="»"}else s=cb++,r="«"+r+"r"+s.toString(32)+"»";return e.memoizedState=r},useHostTransitionStatus:hf,useFormState:W0,useActionState:W0,useOptimistic:function(e){var r=mn();r.memoizedState=r.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=s,r=df.bind(null,Mt,!0,s),s.dispatch=r,[e,r]},useMemoCache:nf,useCacheRefresh:function(){return mn().memoizedState=mb.bind(null,Mt)}},_y={readContext:nn,use:ac,useCallback:ly,useContext:nn,useEffect:iy,useImperativeHandle:oy,useInsertionEffect:ry,useLayoutEffect:ay,useMemo:uy,useReducer:sc,useRef:ey,useState:function(){return sc(qi)},useDebugValue:lf,useDeferredValue:function(e,r){var s=Ie();return cy(s,Jt.memoizedState,e,r)},useTransition:function(){var e=sc(qi)[0],r=Ie().memoizedState;return[typeof e=="boolean"?e:ll(e),r]},useSyncExternalStore:z0,useId:py,useHostTransitionStatus:hf,useFormState:Z0,useActionState:Z0,useOptimistic:function(e,r){var s=Ie();return H0(s,Jt,e,r)},useMemoCache:nf,useCacheRefresh:my},yb={readContext:nn,use:ac,useCallback:ly,useContext:nn,useEffect:iy,useImperativeHandle:oy,useInsertionEffect:ry,useLayoutEffect:ay,useMemo:uy,useReducer:af,useRef:ey,useState:function(){return af(qi)},useDebugValue:lf,useDeferredValue:function(e,r){var s=Ie();return Jt===null?uf(s,e,r):cy(s,Jt.memoizedState,e,r)},useTransition:function(){var e=af(qi)[0],r=Ie().memoizedState;return[typeof e=="boolean"?e:ll(e),r]},useSyncExternalStore:z0,useId:py,useHostTransitionStatus:hf,useFormState:ty,useActionState:ty,useOptimistic:function(e,r){var s=Ie();return Jt!==null?H0(s,Jt,e,r):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:nf,useCacheRefresh:my},Ns=null,hl=0;function hc(e){var r=hl;return hl+=1,Ns===null&&(Ns=[]),D0(Ns,e,r)}function dl(e,r){r=r.props.ref,e.ref=r!==void 0?r:null}function dc(e,r){throw r.$$typeof===E?Error(a(525)):(e=Object.prototype.toString.call(r),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e)))}function wy(e){var r=e._init;return r(e._payload)}function Ey(e){function r(F,z){if(e){var H=F.deletions;H===null?(F.deletions=[z],F.flags|=16):H.push(z)}}function s(F,z){if(!e)return null;for(;z!==null;)r(F,z),z=z.sibling;return null}function l(F){for(var z=new Map;F!==null;)F.key!==null?z.set(F.key,F):z.set(F.index,F),F=F.sibling;return z}function h(F,z){return F=$i(F,z),F.index=0,F.sibling=null,F}function f(F,z,H){return F.index=H,e?(H=F.alternate,H!==null?(H=H.index,H<z?(F.flags|=67108866,z):H):(F.flags|=67108866,z)):(F.flags|=1048576,z)}function w(F){return e&&F.alternate===null&&(F.flags|=67108866),F}function b(F,z,H,nt){return z===null||z.tag!==6?(z=Nd(H,F.mode,nt),z.return=F,z):(z=h(z,H),z.return=F,z)}function N(F,z,H,nt){var mt=H.type;return mt===M?et(F,z,H.props.children,nt,H.key):z!==null&&(z.elementType===mt||typeof mt=="object"&&mt!==null&&mt.$$typeof===C&&wy(mt)===z.type)?(z=h(z,H.props),dl(z,H),z.return=F,z):(z=Yu(H.type,H.key,H.props,null,F.mode,nt),dl(z,H),z.return=F,z)}function Y(F,z,H,nt){return z===null||z.tag!==4||z.stateNode.containerInfo!==H.containerInfo||z.stateNode.implementation!==H.implementation?(z=Md(H,F.mode,nt),z.return=F,z):(z=h(z,H.children||[]),z.return=F,z)}function et(F,z,H,nt,mt){return z===null||z.tag!==7?(z=Na(H,F.mode,nt,mt),z.return=F,z):(z=h(z,H),z.return=F,z)}function rt(F,z,H){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=Nd(""+z,F.mode,H),z.return=F,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case T:return H=Yu(z.type,z.key,z.props,null,F.mode,H),dl(H,z),H.return=F,H;case A:return z=Md(z,F.mode,H),z.return=F,z;case C:var nt=z._init;return z=nt(z._payload),rt(F,z,H)}if(Kt(z)||$(z))return z=Na(z,F.mode,H,null),z.return=F,z;if(typeof z.then=="function")return rt(F,hc(z),H);if(z.$$typeof===Z)return rt(F,Zu(F,z),H);dc(F,z)}return null}function Q(F,z,H,nt){var mt=z!==null?z.key:null;if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return mt!==null?null:b(F,z,""+H,nt);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case T:return H.key===mt?N(F,z,H,nt):null;case A:return H.key===mt?Y(F,z,H,nt):null;case C:return mt=H._init,H=mt(H._payload),Q(F,z,H,nt)}if(Kt(H)||$(H))return mt!==null?null:et(F,z,H,nt,null);if(typeof H.then=="function")return Q(F,z,hc(H),nt);if(H.$$typeof===Z)return Q(F,z,Zu(F,H),nt);dc(F,H)}return null}function X(F,z,H,nt,mt){if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return F=F.get(H)||null,b(z,F,""+nt,mt);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case T:return F=F.get(nt.key===null?H:nt.key)||null,N(z,F,nt,mt);case A:return F=F.get(nt.key===null?H:nt.key)||null,Y(z,F,nt,mt);case C:var Ot=nt._init;return nt=Ot(nt._payload),X(F,z,H,nt,mt)}if(Kt(nt)||$(nt))return F=F.get(H)||null,et(z,F,nt,mt,null);if(typeof nt.then=="function")return X(F,z,H,hc(nt),mt);if(nt.$$typeof===Z)return X(F,z,H,Zu(z,nt),mt);dc(z,nt)}return null}function St(F,z,H,nt){for(var mt=null,Ot=null,xt=z,Et=z=0,Ke=null;xt!==null&&Et<H.length;Et++){xt.index>Et?(Ke=xt,xt=null):Ke=xt.sibling;var Ft=Q(F,xt,H[Et],nt);if(Ft===null){xt===null&&(xt=Ke);break}e&&xt&&Ft.alternate===null&&r(F,xt),z=f(Ft,z,Et),Ot===null?mt=Ft:Ot.sibling=Ft,Ot=Ft,xt=Ke}if(Et===H.length)return s(F,xt),Ht&&Oa(F,Et),mt;if(xt===null){for(;Et<H.length;Et++)xt=rt(F,H[Et],nt),xt!==null&&(z=f(xt,z,Et),Ot===null?mt=xt:Ot.sibling=xt,Ot=xt);return Ht&&Oa(F,Et),mt}for(xt=l(xt);Et<H.length;Et++)Ke=X(xt,F,Et,H[Et],nt),Ke!==null&&(e&&Ke.alternate!==null&&xt.delete(Ke.key===null?Et:Ke.key),z=f(Ke,z,Et),Ot===null?mt=Ke:Ot.sibling=Ke,Ot=Ke);return e&&xt.forEach(function(qr){return r(F,qr)}),Ht&&Oa(F,Et),mt}function wt(F,z,H,nt){if(H==null)throw Error(a(151));for(var mt=null,Ot=null,xt=z,Et=z=0,Ke=null,Ft=H.next();xt!==null&&!Ft.done;Et++,Ft=H.next()){xt.index>Et?(Ke=xt,xt=null):Ke=xt.sibling;var qr=Q(F,xt,Ft.value,nt);if(qr===null){xt===null&&(xt=Ke);break}e&&xt&&qr.alternate===null&&r(F,xt),z=f(qr,z,Et),Ot===null?mt=qr:Ot.sibling=qr,Ot=qr,xt=Ke}if(Ft.done)return s(F,xt),Ht&&Oa(F,Et),mt;if(xt===null){for(;!Ft.done;Et++,Ft=H.next())Ft=rt(F,Ft.value,nt),Ft!==null&&(z=f(Ft,z,Et),Ot===null?mt=Ft:Ot.sibling=Ft,Ot=Ft);return Ht&&Oa(F,Et),mt}for(xt=l(xt);!Ft.done;Et++,Ft=H.next())Ft=X(xt,F,Et,Ft.value,nt),Ft!==null&&(e&&Ft.alternate!==null&&xt.delete(Ft.key===null?Et:Ft.key),z=f(Ft,z,Et),Ot===null?mt=Ft:Ot.sibling=Ft,Ot=Ft);return e&&xt.forEach(function(xT){return r(F,xT)}),Ht&&Oa(F,Et),mt}function ee(F,z,H,nt){if(typeof H=="object"&&H!==null&&H.type===M&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case T:t:{for(var mt=H.key;z!==null;){if(z.key===mt){if(mt=H.type,mt===M){if(z.tag===7){s(F,z.sibling),nt=h(z,H.props.children),nt.return=F,F=nt;break t}}else if(z.elementType===mt||typeof mt=="object"&&mt!==null&&mt.$$typeof===C&&wy(mt)===z.type){s(F,z.sibling),nt=h(z,H.props),dl(nt,H),nt.return=F,F=nt;break t}s(F,z);break}else r(F,z);z=z.sibling}H.type===M?(nt=Na(H.props.children,F.mode,nt,H.key),nt.return=F,F=nt):(nt=Yu(H.type,H.key,H.props,null,F.mode,nt),dl(nt,H),nt.return=F,F=nt)}return w(F);case A:t:{for(mt=H.key;z!==null;){if(z.key===mt)if(z.tag===4&&z.stateNode.containerInfo===H.containerInfo&&z.stateNode.implementation===H.implementation){s(F,z.sibling),nt=h(z,H.children||[]),nt.return=F,F=nt;break t}else{s(F,z);break}else r(F,z);z=z.sibling}nt=Md(H,F.mode,nt),nt.return=F,F=nt}return w(F);case C:return mt=H._init,H=mt(H._payload),ee(F,z,H,nt)}if(Kt(H))return St(F,z,H,nt);if($(H)){if(mt=$(H),typeof mt!="function")throw Error(a(150));return H=mt.call(H),wt(F,z,H,nt)}if(typeof H.then=="function")return ee(F,z,hc(H),nt);if(H.$$typeof===Z)return ee(F,z,Zu(F,H),nt);dc(F,H)}return typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint"?(H=""+H,z!==null&&z.tag===6?(s(F,z.sibling),nt=h(z,H),nt.return=F,F=nt):(s(F,z),nt=Nd(H,F.mode,nt),nt.return=F,F=nt),w(F)):s(F,z)}return function(F,z,H,nt){try{hl=0;var mt=ee(F,z,H,nt);return Ns=null,mt}catch(xt){if(xt===nl||xt===tc)throw xt;var Ot=bn(29,xt,null,F.mode);return Ot.lanes=nt,Ot.return=F,Ot}finally{}}}var Ms=Ey(!0),by=Ey(!1),Ln=at(null),yi=null;function Dr(e){var r=e.alternate;ht(Pe,Pe.current&1),ht(Ln,e),yi===null&&(r===null||Is.current!==null||r.memoizedState!==null)&&(yi=e)}function Ty(e){if(e.tag===22){if(ht(Pe,Pe.current),ht(Ln,e),yi===null){var r=e.alternate;r!==null&&r.memoizedState!==null&&(yi=e)}}else Nr()}function Nr(){ht(Pe,Pe.current),ht(Ln,Ln.current)}function Gi(e){ct(Ln),yi===e&&(yi=null),ct(Pe)}var Pe=at(0);function fc(e){for(var r=e;r!==null;){if(r.tag===13){var s=r.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||np(s)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function ff(e,r,s,l){r=e.memoizedState,s=s(l,r),s=s==null?r:v({},r,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var pf={enqueueSetState:function(e,r,s){e=e._reactInternals;var l=Rn(),h=Ir(l);h.payload=r,s!=null&&(h.callback=s),r=Cr(e,h,l),r!==null&&(In(r,e,l),rl(r,e,l))},enqueueReplaceState:function(e,r,s){e=e._reactInternals;var l=Rn(),h=Ir(l);h.tag=1,h.payload=r,s!=null&&(h.callback=s),r=Cr(e,h,l),r!==null&&(In(r,e,l),rl(r,e,l))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var s=Rn(),l=Ir(s);l.tag=2,r!=null&&(l.callback=r),r=Cr(e,l,s),r!==null&&(In(r,e,s),rl(r,e,s))}};function Sy(e,r,s,l,h,f,w){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,f,w):r.prototype&&r.prototype.isPureReactComponent?!Yo(s,l)||!Yo(h,f):!0}function Ay(e,r,s,l){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(s,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(s,l),r.state!==e&&pf.enqueueReplaceState(r,r.state,null)}function $a(e,r){var s=r;if("ref"in r){s={};for(var l in r)l!=="ref"&&(s[l]=r[l])}if(e=e.defaultProps){s===r&&(s=v({},s));for(var h in e)s[h]===void 0&&(s[h]=e[h])}return s}var pc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Ry(e){pc(e)}function Iy(e){console.error(e)}function Cy(e){pc(e)}function mc(e,r){try{var s=e.onUncaughtError;s(r.value,{componentStack:r.stack})}catch(l){setTimeout(function(){throw l})}}function jy(e,r,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function mf(e,r,s){return s=Ir(s),s.tag=3,s.payload={element:null},s.callback=function(){mc(e,r)},s}function Dy(e){return e=Ir(e),e.tag=3,e}function Ny(e,r,s,l){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var f=l.value;e.payload=function(){return h(f)},e.callback=function(){jy(r,s,l)}}var w=s.stateNode;w!==null&&typeof w.componentDidCatch=="function"&&(e.callback=function(){jy(r,s,l),typeof h!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var b=l.stack;this.componentDidCatch(l.value,{componentStack:b!==null?b:""})})}function xb(e,r,s,l,h){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(r=s.alternate,r!==null&&Jo(r,s,h,!0),s=Ln.current,s!==null){switch(s.tag){case 13:return yi===null?zf():s.alternate===null&&xe===0&&(xe=3),s.flags&=-257,s.flags|=65536,s.lanes=h,l===Fd?s.flags|=16384:(r=s.updateQueue,r===null?s.updateQueue=new Set([l]):r.add(l),$f(e,l,h)),!1;case 22:return s.flags|=65536,l===Fd?s.flags|=16384:(r=s.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=r):(s=r.retryQueue,s===null?r.retryQueue=new Set([l]):s.add(l)),$f(e,l,h)),!1}throw Error(a(435,s.tag))}return $f(e,l,h),zf(),!1}if(Ht)return r=Ln.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=h,l!==Vd&&(e=Error(a(422),{cause:l}),Zo(Vn(e,s)))):(l!==Vd&&(r=Error(a(423),{cause:l}),Zo(Vn(r,s))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=Vn(l,s),h=mf(e.stateNode,l,h),qd(e,h),xe!==4&&(xe=2)),!1;var f=Error(a(520),{cause:l});if(f=Vn(f,s),vl===null?vl=[f]:vl.push(f),xe!==4&&(xe=2),r===null)return!0;l=Vn(l,s),s=r;do{switch(s.tag){case 3:return s.flags|=65536,e=h&-h,s.lanes|=e,e=mf(s.stateNode,l,e),qd(s,e),!1;case 1:if(r=s.type,f=s.stateNode,(s.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ur===null||!Ur.has(f))))return s.flags|=65536,h&=-h,s.lanes|=h,h=Dy(h),Ny(h,e,s,l),qd(s,h),!1}s=s.return}while(s!==null);return!1}var My=Error(a(461)),Be=!1;function Ye(e,r,s,l){r.child=e===null?by(r,null,s,l):Ms(r,e.child,s,l)}function Oy(e,r,s,l,h){s=s.render;var f=r.ref;if("ref"in l){var w={};for(var b in l)b!=="ref"&&(w[b]=l[b])}else w=l;return Ua(r),l=Wd(e,r,s,w,f,h),b=Zd(),e!==null&&!Be?(Jd(e,r,h),Yi(e,r,h)):(Ht&&b&&Od(r),r.flags|=1,Ye(e,r,l,h),r.child)}function ky(e,r,s,l,h){if(e===null){var f=s.type;return typeof f=="function"&&!Dd(f)&&f.defaultProps===void 0&&s.compare===null?(r.tag=15,r.type=f,Vy(e,r,f,l,h)):(e=Yu(s.type,null,l,r,r.mode,h),e.ref=r.ref,e.return=r,r.child=e)}if(f=e.child,!bf(e,h)){var w=f.memoizedProps;if(s=s.compare,s=s!==null?s:Yo,s(w,l)&&e.ref===r.ref)return Yi(e,r,h)}return r.flags|=1,e=$i(f,l),e.ref=r.ref,e.return=r,r.child=e}function Vy(e,r,s,l,h){if(e!==null){var f=e.memoizedProps;if(Yo(f,l)&&e.ref===r.ref)if(Be=!1,r.pendingProps=l=f,bf(e,h))(e.flags&131072)!==0&&(Be=!0);else return r.lanes=e.lanes,Yi(e,r,h)}return gf(e,r,s,l,h)}function Py(e,r,s){var l=r.pendingProps,h=l.children,f=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((r.flags&128)!==0){if(l=f!==null?f.baseLanes|s:s,e!==null){for(h=r.child=e.child,f=0;h!==null;)f=f|h.lanes|h.childLanes,h=h.sibling;r.childLanes=f&~l}else r.childLanes=0,r.child=null;return Uy(e,r,l,s)}if((s&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ju(r,f!==null?f.cachePool:null),f!==null?V0(r,f):Yd(),Ty(r);else return r.lanes=r.childLanes=536870912,Uy(e,r,f!==null?f.baseLanes|s:s,s)}else f!==null?(Ju(r,f.cachePool),V0(r,f),Nr(),r.memoizedState=null):(e!==null&&Ju(r,null),Yd(),Nr());return Ye(e,r,h,s),r.child}function Uy(e,r,s,l){var h=Bd();return h=h===null?null:{parent:Ve._currentValue,pool:h},r.memoizedState={baseLanes:s,cachePool:h},e!==null&&Ju(r,null),Yd(),Ty(r),e!==null&&Jo(e,r,l,!0),null}function gc(e,r){var s=r.ref;if(s===null)e!==null&&e.ref!==null&&(r.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(r.flags|=4194816)}}function gf(e,r,s,l,h){return Ua(r),s=Wd(e,r,s,l,void 0,h),l=Zd(),e!==null&&!Be?(Jd(e,r,h),Yi(e,r,h)):(Ht&&l&&Od(r),r.flags|=1,Ye(e,r,s,h),r.child)}function zy(e,r,s,l,h,f){return Ua(r),r.updateQueue=null,s=U0(r,l,s,h),P0(e),l=Zd(),e!==null&&!Be?(Jd(e,r,f),Yi(e,r,f)):(Ht&&l&&Od(r),r.flags|=1,Ye(e,r,s,f),r.child)}function Ly(e,r,s,l,h){if(Ua(r),r.stateNode===null){var f=bs,w=s.contextType;typeof w=="object"&&w!==null&&(f=nn(w)),f=new s(l,f),r.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=pf,r.stateNode=f,f._reactInternals=r,f=r.stateNode,f.props=l,f.state=r.memoizedState,f.refs={},Kd(r),w=s.contextType,f.context=typeof w=="object"&&w!==null?nn(w):bs,f.state=r.memoizedState,w=s.getDerivedStateFromProps,typeof w=="function"&&(ff(r,s,w,l),f.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(w=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),w!==f.state&&pf.enqueueReplaceState(f,f.state,null),sl(r,l,f,h),al(),f.state=r.memoizedState),typeof f.componentDidMount=="function"&&(r.flags|=4194308),l=!0}else if(e===null){f=r.stateNode;var b=r.memoizedProps,N=$a(s,b);f.props=N;var Y=f.context,et=s.contextType;w=bs,typeof et=="object"&&et!==null&&(w=nn(et));var rt=s.getDerivedStateFromProps;et=typeof rt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=r.pendingProps!==b,et||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||Y!==w)&&Ay(r,f,l,w),Rr=!1;var Q=r.memoizedState;f.state=Q,sl(r,l,f,h),al(),Y=r.memoizedState,b||Q!==Y||Rr?(typeof rt=="function"&&(ff(r,s,rt,l),Y=r.memoizedState),(N=Rr||Sy(r,s,N,l,Q,Y,w))?(et||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(r.flags|=4194308)):(typeof f.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=Y),f.props=l,f.state=Y,f.context=w,l=N):(typeof f.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{f=r.stateNode,Hd(e,r),w=r.memoizedProps,et=$a(s,w),f.props=et,rt=r.pendingProps,Q=f.context,Y=s.contextType,N=bs,typeof Y=="object"&&Y!==null&&(N=nn(Y)),b=s.getDerivedStateFromProps,(Y=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(w!==rt||Q!==N)&&Ay(r,f,l,N),Rr=!1,Q=r.memoizedState,f.state=Q,sl(r,l,f,h),al();var X=r.memoizedState;w!==rt||Q!==X||Rr||e!==null&&e.dependencies!==null&&Wu(e.dependencies)?(typeof b=="function"&&(ff(r,s,b,l),X=r.memoizedState),(et=Rr||Sy(r,s,et,l,Q,X,N)||e!==null&&e.dependencies!==null&&Wu(e.dependencies))?(Y||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(l,X,N),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(l,X,N)),typeof f.componentDidUpdate=="function"&&(r.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof f.componentDidUpdate!="function"||w===e.memoizedProps&&Q===e.memoizedState||(r.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&Q===e.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=X),f.props=l,f.state=X,f.context=N,l=et):(typeof f.componentDidUpdate!="function"||w===e.memoizedProps&&Q===e.memoizedState||(r.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&Q===e.memoizedState||(r.flags|=1024),l=!1)}return f=l,gc(e,r),l=(r.flags&128)!==0,f||l?(f=r.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:f.render(),r.flags|=1,e!==null&&l?(r.child=Ms(r,e.child,null,h),r.child=Ms(r,null,s,h)):Ye(e,r,s,h),r.memoizedState=f.state,e=r.child):e=Yi(e,r,h),e}function $y(e,r,s,l){return Wo(),r.flags|=256,Ye(e,r,s,l),r.child}var yf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xf(e){return{baseLanes:e,cachePool:I0()}}function vf(e,r,s){return e=e!==null?e.childLanes&~s:0,r&&(e|=$n),e}function By(e,r,s){var l=r.pendingProps,h=!1,f=(r.flags&128)!==0,w;if((w=f)||(w=e!==null&&e.memoizedState===null?!1:(Pe.current&2)!==0),w&&(h=!0,r.flags&=-129),w=(r.flags&32)!==0,r.flags&=-33,e===null){if(Ht){if(h?Dr(r):Nr(),Ht){var b=ye,N;if(N=b){t:{for(N=b,b=gi;N.nodeType!==8;){if(!b){b=null;break t}if(N=ni(N.nextSibling),N===null){b=null;break t}}b=N}b!==null?(r.memoizedState={dehydrated:b,treeContext:Ma!==null?{id:Bi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},N=bn(18,null,null,0),N.stateNode=b,N.return=r,r.child=N,fn=r,ye=null,N=!0):N=!1}N||Va(r)}if(b=r.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return np(b)?r.lanes=32:r.lanes=536870912,null;Gi(r)}return b=l.children,l=l.fallback,h?(Nr(),h=r.mode,b=yc({mode:"hidden",children:b},h),l=Na(l,h,s,null),b.return=r,l.return=r,b.sibling=l,r.child=b,h=r.child,h.memoizedState=xf(s),h.childLanes=vf(e,w,s),r.memoizedState=yf,l):(Dr(r),_f(r,b))}if(N=e.memoizedState,N!==null&&(b=N.dehydrated,b!==null)){if(f)r.flags&256?(Dr(r),r.flags&=-257,r=wf(e,r,s)):r.memoizedState!==null?(Nr(),r.child=e.child,r.flags|=128,r=null):(Nr(),h=l.fallback,b=r.mode,l=yc({mode:"visible",children:l.children},b),h=Na(h,b,s,null),h.flags|=2,l.return=r,h.return=r,l.sibling=h,r.child=l,Ms(r,e.child,null,s),l=r.child,l.memoizedState=xf(s),l.childLanes=vf(e,w,s),r.memoizedState=yf,r=h);else if(Dr(r),np(b)){if(w=b.nextSibling&&b.nextSibling.dataset,w)var Y=w.dgst;w=Y,l=Error(a(419)),l.stack="",l.digest=w,Zo({value:l,source:null,stack:null}),r=wf(e,r,s)}else if(Be||Jo(e,r,s,!1),w=(s&e.childLanes)!==0,Be||w){if(w=re,w!==null&&(l=s&-s,l=(l&42)!==0?1:Do(l),l=(l&(w.suspendedLanes|s))!==0?0:l,l!==0&&l!==N.retryLane))throw N.retryLane=l,Es(e,l),In(w,e,l),My;b.data==="$?"||zf(),r=wf(e,r,s)}else b.data==="$?"?(r.flags|=192,r.child=e.child,r=null):(e=N.treeContext,ye=ni(b.nextSibling),fn=r,Ht=!0,ka=null,gi=!1,e!==null&&(Un[zn++]=Bi,Un[zn++]=Fi,Un[zn++]=Ma,Bi=e.id,Fi=e.overflow,Ma=r),r=_f(r,l.children),r.flags|=4096);return r}return h?(Nr(),h=l.fallback,b=r.mode,N=e.child,Y=N.sibling,l=$i(N,{mode:"hidden",children:l.children}),l.subtreeFlags=N.subtreeFlags&65011712,Y!==null?h=$i(Y,h):(h=Na(h,b,s,null),h.flags|=2),h.return=r,l.return=r,l.sibling=h,r.child=l,l=h,h=r.child,b=e.child.memoizedState,b===null?b=xf(s):(N=b.cachePool,N!==null?(Y=Ve._currentValue,N=N.parent!==Y?{parent:Y,pool:Y}:N):N=I0(),b={baseLanes:b.baseLanes|s,cachePool:N}),h.memoizedState=b,h.childLanes=vf(e,w,s),r.memoizedState=yf,l):(Dr(r),s=e.child,e=s.sibling,s=$i(s,{mode:"visible",children:l.children}),s.return=r,s.sibling=null,e!==null&&(w=r.deletions,w===null?(r.deletions=[e],r.flags|=16):w.push(e)),r.child=s,r.memoizedState=null,s)}function _f(e,r){return r=yc({mode:"visible",children:r},e.mode),r.return=e,e.child=r}function yc(e,r){return e=bn(22,e,null,r),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function wf(e,r,s){return Ms(r,e.child,null,s),e=_f(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function Fy(e,r,s){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r),Ud(e.return,r,s)}function Ef(e,r,s,l,h){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:h}:(f.isBackwards=r,f.rendering=null,f.renderingStartTime=0,f.last=l,f.tail=s,f.tailMode=h)}function Ky(e,r,s){var l=r.pendingProps,h=l.revealOrder,f=l.tail;if(Ye(e,r,l.children,s),l=Pe.current,(l&2)!==0)l=l&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fy(e,s,r);else if(e.tag===19)Fy(e,s,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break t;for(;e.sibling===null;){if(e.return===null||e.return===r)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(ht(Pe,l),h){case"forwards":for(s=r.child,h=null;s!==null;)e=s.alternate,e!==null&&fc(e)===null&&(h=s),s=s.sibling;s=h,s===null?(h=r.child,r.child=null):(h=s.sibling,s.sibling=null),Ef(r,!1,h,s,f);break;case"backwards":for(s=null,h=r.child,r.child=null;h!==null;){if(e=h.alternate,e!==null&&fc(e)===null){r.child=h;break}e=h.sibling,h.sibling=s,s=h,h=e}Ef(r,!0,s,null,f);break;case"together":Ef(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Yi(e,r,s){if(e!==null&&(r.dependencies=e.dependencies),Pr|=r.lanes,(s&r.childLanes)===0)if(e!==null){if(Jo(e,r,s,!1),(s&r.childLanes)===0)return null}else return null;if(e!==null&&r.child!==e.child)throw Error(a(153));if(r.child!==null){for(e=r.child,s=$i(e,e.pendingProps),r.child=s,s.return=r;e.sibling!==null;)e=e.sibling,s=s.sibling=$i(e,e.pendingProps),s.return=r;s.sibling=null}return r.child}function bf(e,r){return(e.lanes&r)!==0?!0:(e=e.dependencies,!!(e!==null&&Wu(e)))}function vb(e,r,s){switch(r.tag){case 3:zt(r,r.stateNode.containerInfo),Ar(r,Ve,e.memoizedState.cache),Wo();break;case 27:case 5:Ni(r);break;case 4:zt(r,r.stateNode.containerInfo);break;case 10:Ar(r,r.type,r.memoizedProps.value);break;case 13:var l=r.memoizedState;if(l!==null)return l.dehydrated!==null?(Dr(r),r.flags|=128,null):(s&r.child.childLanes)!==0?By(e,r,s):(Dr(r),e=Yi(e,r,s),e!==null?e.sibling:null);Dr(r);break;case 19:var h=(e.flags&128)!==0;if(l=(s&r.childLanes)!==0,l||(Jo(e,r,s,!1),l=(s&r.childLanes)!==0),h){if(l)return Ky(e,r,s);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),ht(Pe,Pe.current),l)break;return null;case 22:case 23:return r.lanes=0,Py(e,r,s);case 24:Ar(r,Ve,e.memoizedState.cache)}return Yi(e,r,s)}function Hy(e,r,s){if(e!==null)if(e.memoizedProps!==r.pendingProps)Be=!0;else{if(!bf(e,s)&&(r.flags&128)===0)return Be=!1,vb(e,r,s);Be=(e.flags&131072)!==0}else Be=!1,Ht&&(r.flags&1048576)!==0&&w0(r,Xu,r.index);switch(r.lanes=0,r.tag){case 16:t:{e=r.pendingProps;var l=r.elementType,h=l._init;if(l=h(l._payload),r.type=l,typeof l=="function")Dd(l)?(e=$a(l,e),r.tag=1,r=Ly(null,r,l,e,s)):(r.tag=0,r=gf(null,r,l,e,s));else{if(l!=null){if(h=l.$$typeof,h===lt){r.tag=11,r=Oy(null,r,l,e,s);break t}else if(h===I){r.tag=14,r=ky(null,r,l,e,s);break t}}throw r=se(l)||l,Error(a(306,r,""))}}return r;case 0:return gf(e,r,r.type,r.pendingProps,s);case 1:return l=r.type,h=$a(l,r.pendingProps),Ly(e,r,l,h,s);case 3:t:{if(zt(r,r.stateNode.containerInfo),e===null)throw Error(a(387));l=r.pendingProps;var f=r.memoizedState;h=f.element,Hd(e,r),sl(r,l,null,s);var w=r.memoizedState;if(l=w.cache,Ar(r,Ve,l),l!==f.cache&&zd(r,[Ve],s,!0),al(),l=w.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:w.cache},r.updateQueue.baseState=f,r.memoizedState=f,r.flags&256){r=$y(e,r,l,s);break t}else if(l!==h){h=Vn(Error(a(424)),r),Zo(h),r=$y(e,r,l,s);break t}else{switch(e=r.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ye=ni(e.firstChild),fn=r,Ht=!0,ka=null,gi=!0,s=by(r,null,l,s),r.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Wo(),l===h){r=Yi(e,r,s);break t}Ye(e,r,l,s)}r=r.child}return r;case 26:return gc(e,r),e===null?(s=Qx(r.type,null,r.pendingProps,null))?r.memoizedState=s:Ht||(s=r.type,e=r.pendingProps,l=Dc(_t.current).createElement(s),l[_e]=r,l[Ge]=e,Xe(l,s,e),we(l),r.stateNode=l):r.memoizedState=Qx(r.type,e.memoizedProps,r.pendingProps,e.memoizedState),null;case 27:return Ni(r),e===null&&Ht&&(l=r.stateNode=qx(r.type,r.pendingProps,_t.current),fn=r,gi=!0,h=ye,$r(r.type)?(ip=h,ye=ni(l.firstChild)):ye=h),Ye(e,r,r.pendingProps.children,s),gc(e,r),e===null&&(r.flags|=4194304),r.child;case 5:return e===null&&Ht&&((h=l=ye)&&(l=Gb(l,r.type,r.pendingProps,gi),l!==null?(r.stateNode=l,fn=r,ye=ni(l.firstChild),gi=!1,h=!0):h=!1),h||Va(r)),Ni(r),h=r.type,f=r.pendingProps,w=e!==null?e.memoizedProps:null,l=f.children,Jf(h,f)?l=null:w!==null&&Jf(h,w)&&(r.flags|=32),r.memoizedState!==null&&(h=Wd(e,r,hb,null,null,s),Il._currentValue=h),gc(e,r),Ye(e,r,l,s),r.child;case 6:return e===null&&Ht&&((e=s=ye)&&(s=Yb(s,r.pendingProps,gi),s!==null?(r.stateNode=s,fn=r,ye=null,e=!0):e=!1),e||Va(r)),null;case 13:return By(e,r,s);case 4:return zt(r,r.stateNode.containerInfo),l=r.pendingProps,e===null?r.child=Ms(r,null,l,s):Ye(e,r,l,s),r.child;case 11:return Oy(e,r,r.type,r.pendingProps,s);case 7:return Ye(e,r,r.pendingProps,s),r.child;case 8:return Ye(e,r,r.pendingProps.children,s),r.child;case 12:return Ye(e,r,r.pendingProps.children,s),r.child;case 10:return l=r.pendingProps,Ar(r,r.type,l.value),Ye(e,r,l.children,s),r.child;case 9:return h=r.type._context,l=r.pendingProps.children,Ua(r),h=nn(h),l=l(h),r.flags|=1,Ye(e,r,l,s),r.child;case 14:return ky(e,r,r.type,r.pendingProps,s);case 15:return Vy(e,r,r.type,r.pendingProps,s);case 19:return Ky(e,r,s);case 31:return l=r.pendingProps,s=r.mode,l={mode:l.mode,children:l.children},e===null?(s=yc(l,s),s.ref=r.ref,r.child=s,s.return=r,r=s):(s=$i(e.child,l),s.ref=r.ref,r.child=s,s.return=r,r=s),r;case 22:return Py(e,r,s);case 24:return Ua(r),l=nn(Ve),e===null?(h=Bd(),h===null&&(h=re,f=Ld(),h.pooledCache=f,f.refCount++,f!==null&&(h.pooledCacheLanes|=s),h=f),r.memoizedState={parent:l,cache:h},Kd(r),Ar(r,Ve,h)):((e.lanes&s)!==0&&(Hd(e,r),sl(r,null,null,s),al()),h=e.memoizedState,f=r.memoizedState,h.parent!==l?(h={parent:l,cache:l},r.memoizedState=h,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=h),Ar(r,Ve,l)):(l=f.cache,Ar(r,Ve,l),l!==h.cache&&zd(r,[Ve],s,!0))),Ye(e,r,r.pendingProps.children,s),r.child;case 29:throw r.pendingProps}throw Error(a(156,r.tag))}function Qi(e){e.flags|=4}function qy(e,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!t1(r)){if(r=Ln.current,r!==null&&((Lt&4194048)===Lt?yi!==null:(Lt&62914560)!==Lt&&(Lt&536870912)===0||r!==yi))throw il=Fd,C0;e.flags|=8192}}function xc(e,r){r!==null&&(e.flags|=4),e.flags&16384&&(r=e.tag!==22?fr():536870912,e.lanes|=r,Ps|=r)}function fl(e,r){if(!Ht)switch(e.tailMode){case"hidden":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function pe(e){var r=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(r)for(var h=e.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=s,r}function _b(e,r,s){var l=r.pendingProps;switch(kd(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(r),null;case 1:return pe(r),null;case 3:return s=r.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),r.memoizedState.cache!==l&&(r.flags|=2048),Hi(Ve),Me(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Xo(r)?Qi(r):e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,T0())),pe(r),null;case 26:return s=r.memoizedState,e===null?(Qi(r),s!==null?(pe(r),qy(r,s)):(pe(r),r.flags&=-16777217)):s?s!==e.memoizedState?(Qi(r),pe(r),qy(r,s)):(pe(r),r.flags&=-16777217):(e.memoizedProps!==l&&Qi(r),pe(r),r.flags&=-16777217),null;case 27:qn(r),s=_t.current;var h=r.type;if(e!==null&&r.stateNode!=null)e.memoizedProps!==l&&Qi(r);else{if(!l){if(r.stateNode===null)throw Error(a(166));return pe(r),null}e=gt.current,Xo(r)?E0(r):(e=qx(h,l,s),r.stateNode=e,Qi(r))}return pe(r),null;case 5:if(qn(r),s=r.type,e!==null&&r.stateNode!=null)e.memoizedProps!==l&&Qi(r);else{if(!l){if(r.stateNode===null)throw Error(a(166));return pe(r),null}if(e=gt.current,Xo(r))E0(r);else{switch(h=Dc(_t.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?h.createElement(s,{is:l.is}):h.createElement(s)}}e[_e]=r,e[Ge]=l;t:for(h=r.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===r)break t;for(;h.sibling===null;){if(h.return===null||h.return===r)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}r.stateNode=e;t:switch(Xe(e,s,l),s){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Qi(r)}}return pe(r),r.flags&=-16777217,null;case 6:if(e&&r.stateNode!=null)e.memoizedProps!==l&&Qi(r);else{if(typeof l!="string"&&r.stateNode===null)throw Error(a(166));if(e=_t.current,Xo(r)){if(e=r.stateNode,s=r.memoizedProps,l=null,h=fn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[_e]=r,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||zx(e.nodeValue,s)),e||Va(r)}else e=Dc(e).createTextNode(l),e[_e]=r,r.stateNode=e}return pe(r),null;case 13:if(l=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Xo(r),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[_e]=r}else Wo(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;pe(r),h=!1}else h=T0(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return r.flags&256?(Gi(r),r):(Gi(r),null)}if(Gi(r),(r.flags&128)!==0)return r.lanes=s,r;if(s=l!==null,e=e!==null&&e.memoizedState!==null,s){l=r.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var f=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(f=l.memoizedState.cachePool.pool),f!==h&&(l.flags|=2048)}return s!==e&&s&&(r.child.flags|=8192),xc(r,r.updateQueue),pe(r),null;case 4:return Me(),e===null&&Yf(r.stateNode.containerInfo),pe(r),null;case 10:return Hi(r.type),pe(r),null;case 19:if(ct(Pe),h=r.memoizedState,h===null)return pe(r),null;if(l=(r.flags&128)!==0,f=h.rendering,f===null)if(l)fl(h,!1);else{if(xe!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(f=fc(e),f!==null){for(r.flags|=128,fl(h,!1),e=f.updateQueue,r.updateQueue=e,xc(r,e),r.subtreeFlags=0,e=s,s=r.child;s!==null;)_0(s,e),s=s.sibling;return ht(Pe,Pe.current&1|2),r.child}e=e.sibling}h.tail!==null&&pn()>wc&&(r.flags|=128,l=!0,fl(h,!1),r.lanes=4194304)}else{if(!l)if(e=fc(f),e!==null){if(r.flags|=128,l=!0,e=e.updateQueue,r.updateQueue=e,xc(r,e),fl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!f.alternate&&!Ht)return pe(r),null}else 2*pn()-h.renderingStartTime>wc&&s!==536870912&&(r.flags|=128,l=!0,fl(h,!1),r.lanes=4194304);h.isBackwards?(f.sibling=r.child,r.child=f):(e=h.last,e!==null?e.sibling=f:r.child=f,h.last=f)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=pn(),r.sibling=null,e=Pe.current,ht(Pe,l?e&1|2:e&1),r):(pe(r),null);case 22:case 23:return Gi(r),Qd(),l=r.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(r.flags|=8192):l&&(r.flags|=8192),l?(s&536870912)!==0&&(r.flags&128)===0&&(pe(r),r.subtreeFlags&6&&(r.flags|=8192)):pe(r),s=r.updateQueue,s!==null&&xc(r,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),l!==s&&(r.flags|=2048),e!==null&&ct(za),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),r.memoizedState.cache!==s&&(r.flags|=2048),Hi(Ve),pe(r),null;case 25:return null;case 30:return null}throw Error(a(156,r.tag))}function wb(e,r){switch(kd(r),r.tag){case 1:return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return Hi(Ve),Me(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 26:case 27:case 5:return qn(r),null;case 13:if(Gi(r),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(a(340));Wo()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return ct(Pe),null;case 4:return Me(),null;case 10:return Hi(r.type),null;case 22:case 23:return Gi(r),Qd(),e!==null&&ct(za),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 24:return Hi(Ve),null;case 25:return null;default:return null}}function Gy(e,r){switch(kd(r),r.tag){case 3:Hi(Ve),Me();break;case 26:case 27:case 5:qn(r);break;case 4:Me();break;case 13:Gi(r);break;case 19:ct(Pe);break;case 10:Hi(r.type);break;case 22:case 23:Gi(r),Qd(),e!==null&&ct(za);break;case 24:Hi(Ve)}}function pl(e,r){try{var s=r.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var h=l.next;s=h;do{if((s.tag&e)===e){l=void 0;var f=s.create,w=s.inst;l=f(),w.destroy=l}s=s.next}while(s!==h)}}catch(b){ne(r,r.return,b)}}function Mr(e,r,s){try{var l=r.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var f=h.next;l=f;do{if((l.tag&e)===e){var w=l.inst,b=w.destroy;if(b!==void 0){w.destroy=void 0,h=r;var N=s,Y=b;try{Y()}catch(et){ne(h,N,et)}}}l=l.next}while(l!==f)}}catch(et){ne(r,r.return,et)}}function Yy(e){var r=e.updateQueue;if(r!==null){var s=e.stateNode;try{k0(r,s)}catch(l){ne(e,e.return,l)}}}function Qy(e,r,s){s.props=$a(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){ne(e,r,l)}}function ml(e,r){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(h){ne(e,r,h)}}function xi(e,r){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(h){ne(e,r,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){ne(e,r,h)}else s.current=null}function Xy(e){var r=e.type,s=e.memoizedProps,l=e.stateNode;try{t:switch(r){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(h){ne(e,e.return,h)}}function Tf(e,r,s){try{var l=e.stateNode;Bb(l,e.type,s,r),l[Ge]=r}catch(h){ne(e,e.return,h)}}function Wy(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&$r(e.type)||e.tag===4}function Sf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Wy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&$r(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Af(e,r,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,r?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,r):(r=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,r.appendChild(e),s=s._reactRootContainer,s!=null||r.onclick!==null||(r.onclick=jc));else if(l!==4&&(l===27&&$r(e.type)&&(s=e.stateNode,r=null),e=e.child,e!==null))for(Af(e,r,s),e=e.sibling;e!==null;)Af(e,r,s),e=e.sibling}function vc(e,r,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,r?s.insertBefore(e,r):s.appendChild(e);else if(l!==4&&(l===27&&$r(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(vc(e,r,s),e=e.sibling;e!==null;)vc(e,r,s),e=e.sibling}function Zy(e){var r=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,h=r.attributes;h.length;)r.removeAttributeNode(h[0]);Xe(r,l,s),r[_e]=e,r[Ge]=s}catch(f){ne(e,e.return,f)}}var Xi=!1,Te=!1,Rf=!1,Jy=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function Eb(e,r){if(e=e.containerInfo,Wf=Pc,e=c0(e),Td(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var h=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{s.nodeType,f.nodeType}catch{s=null;break t}var w=0,b=-1,N=-1,Y=0,et=0,rt=e,Q=null;e:for(;;){for(var X;rt!==s||h!==0&&rt.nodeType!==3||(b=w+h),rt!==f||l!==0&&rt.nodeType!==3||(N=w+l),rt.nodeType===3&&(w+=rt.nodeValue.length),(X=rt.firstChild)!==null;)Q=rt,rt=X;for(;;){if(rt===e)break e;if(Q===s&&++Y===h&&(b=w),Q===f&&++et===l&&(N=w),(X=rt.nextSibling)!==null)break;rt=Q,Q=rt.parentNode}rt=X}s=b===-1||N===-1?null:{start:b,end:N}}else s=null}s=s||{start:0,end:0}}else s=null;for(Zf={focusedElem:e,selectionRange:s},Pc=!1,Fe=r;Fe!==null;)if(r=Fe,e=r.child,(r.subtreeFlags&1024)!==0&&e!==null)e.return=r,Fe=e;else for(;Fe!==null;){switch(r=Fe,f=r.alternate,e=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,s=r,h=f.memoizedProps,f=f.memoizedState,l=s.stateNode;try{var St=$a(s.type,h,s.elementType===s.type);e=l.getSnapshotBeforeUpdate(St,f),l.__reactInternalSnapshotBeforeUpdate=e}catch(wt){ne(s,s.return,wt)}}break;case 3:if((e&1024)!==0){if(e=r.stateNode.containerInfo,s=e.nodeType,s===9)ep(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ep(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=r.sibling,e!==null){e.return=r.return,Fe=e;break}Fe=r.return}}function tx(e,r,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Or(e,s),l&4&&pl(5,s);break;case 1:if(Or(e,s),l&4)if(e=s.stateNode,r===null)try{e.componentDidMount()}catch(w){ne(s,s.return,w)}else{var h=$a(s.type,r.memoizedProps);r=r.memoizedState;try{e.componentDidUpdate(h,r,e.__reactInternalSnapshotBeforeUpdate)}catch(w){ne(s,s.return,w)}}l&64&&Yy(s),l&512&&ml(s,s.return);break;case 3:if(Or(e,s),l&64&&(e=s.updateQueue,e!==null)){if(r=null,s.child!==null)switch(s.child.tag){case 27:case 5:r=s.child.stateNode;break;case 1:r=s.child.stateNode}try{k0(e,r)}catch(w){ne(s,s.return,w)}}break;case 27:r===null&&l&4&&Zy(s);case 26:case 5:Or(e,s),r===null&&l&4&&Xy(s),l&512&&ml(s,s.return);break;case 12:Or(e,s);break;case 13:Or(e,s),l&4&&ix(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=Db.bind(null,s),Qb(e,s))));break;case 22:if(l=s.memoizedState!==null||Xi,!l){r=r!==null&&r.memoizedState!==null||Te,h=Xi;var f=Te;Xi=l,(Te=r)&&!f?kr(e,s,(s.subtreeFlags&8772)!==0):Or(e,s),Xi=h,Te=f}break;case 30:break;default:Or(e,s)}}function ex(e){var r=e.alternate;r!==null&&(e.alternate=null,ex(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&os(r)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ce=null,gn=!1;function Wi(e,r,s){for(s=s.child;s!==null;)nx(e,r,s),s=s.sibling}function nx(e,r,s){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(cr,s)}catch{}switch(s.tag){case 26:Te||xi(s,r),Wi(e,r,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Te||xi(s,r);var l=ce,h=gn;$r(s.type)&&(ce=s.stateNode,gn=!1),Wi(e,r,s),Tl(s.stateNode),ce=l,gn=h;break;case 5:Te||xi(s,r);case 6:if(l=ce,h=gn,ce=null,Wi(e,r,s),ce=l,gn=h,ce!==null)if(gn)try{(ce.nodeType===9?ce.body:ce.nodeName==="HTML"?ce.ownerDocument.body:ce).removeChild(s.stateNode)}catch(f){ne(s,r,f)}else try{ce.removeChild(s.stateNode)}catch(f){ne(s,r,f)}break;case 18:ce!==null&&(gn?(e=ce,Kx(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Nl(e)):Kx(ce,s.stateNode));break;case 4:l=ce,h=gn,ce=s.stateNode.containerInfo,gn=!0,Wi(e,r,s),ce=l,gn=h;break;case 0:case 11:case 14:case 15:Te||Mr(2,s,r),Te||Mr(4,s,r),Wi(e,r,s);break;case 1:Te||(xi(s,r),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Qy(s,r,l)),Wi(e,r,s);break;case 21:Wi(e,r,s);break;case 22:Te=(l=Te)||s.memoizedState!==null,Wi(e,r,s),Te=l;break;default:Wi(e,r,s)}}function ix(e,r){if(r.memoizedState===null&&(e=r.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Nl(e)}catch(s){ne(r,r.return,s)}}function bb(e){switch(e.tag){case 13:case 19:var r=e.stateNode;return r===null&&(r=e.stateNode=new Jy),r;case 22:return e=e.stateNode,r=e._retryCache,r===null&&(r=e._retryCache=new Jy),r;default:throw Error(a(435,e.tag))}}function If(e,r){var s=bb(e);r.forEach(function(l){var h=Nb.bind(null,e,l);s.has(l)||(s.add(l),l.then(h,h))})}function Tn(e,r){var s=r.deletions;if(s!==null)for(var l=0;l<s.length;l++){var h=s[l],f=e,w=r,b=w;t:for(;b!==null;){switch(b.tag){case 27:if($r(b.type)){ce=b.stateNode,gn=!1;break t}break;case 5:ce=b.stateNode,gn=!1;break t;case 3:case 4:ce=b.stateNode.containerInfo,gn=!0;break t}b=b.return}if(ce===null)throw Error(a(160));nx(f,w,h),ce=null,gn=!1,f=h.alternate,f!==null&&(f.return=null),h.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)rx(r,e),r=r.sibling}var ei=null;function rx(e,r){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Tn(r,e),Sn(e),l&4&&(Mr(3,e,e.return),pl(3,e),Mr(5,e,e.return));break;case 1:Tn(r,e),Sn(e),l&512&&(Te||s===null||xi(s,s.return)),l&64&&Xi&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var h=ei;if(Tn(r,e),Sn(e),l&512&&(Te||s===null||xi(s,s.return)),l&4){var f=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){t:{l=e.type,s=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":f=h.getElementsByTagName("title")[0],(!f||f[gr]||f[_e]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=h.createElement(l),h.head.insertBefore(f,h.querySelector("head > title"))),Xe(f,l,s),f[_e]=e,we(f),l=f;break t;case"link":var w=Zx("link","href",h).get(l+(s.href||""));if(w){for(var b=0;b<w.length;b++)if(f=w[b],f.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&f.getAttribute("rel")===(s.rel==null?null:s.rel)&&f.getAttribute("title")===(s.title==null?null:s.title)&&f.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){w.splice(b,1);break e}}f=h.createElement(l),Xe(f,l,s),h.head.appendChild(f);break;case"meta":if(w=Zx("meta","content",h).get(l+(s.content||""))){for(b=0;b<w.length;b++)if(f=w[b],f.getAttribute("content")===(s.content==null?null:""+s.content)&&f.getAttribute("name")===(s.name==null?null:s.name)&&f.getAttribute("property")===(s.property==null?null:s.property)&&f.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&f.getAttribute("charset")===(s.charSet==null?null:s.charSet)){w.splice(b,1);break e}}f=h.createElement(l),Xe(f,l,s),h.head.appendChild(f);break;default:throw Error(a(468,l))}f[_e]=e,we(f),l=f}e.stateNode=l}else Jx(h,e.type,e.stateNode);else e.stateNode=Wx(h,l,e.memoizedProps);else f!==l?(f===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):f.count--,l===null?Jx(h,e.type,e.stateNode):Wx(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Tf(e,e.memoizedProps,s.memoizedProps)}break;case 27:Tn(r,e),Sn(e),l&512&&(Te||s===null||xi(s,s.return)),s!==null&&l&4&&Tf(e,e.memoizedProps,s.memoizedProps);break;case 5:if(Tn(r,e),Sn(e),l&512&&(Te||s===null||xi(s,s.return)),e.flags&32){h=e.stateNode;try{On(h,"")}catch(X){ne(e,e.return,X)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,Tf(e,h,s!==null?s.memoizedProps:h)),l&1024&&(Rf=!0);break;case 6:if(Tn(r,e),Sn(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(X){ne(e,e.return,X)}}break;case 3:if(Oc=null,h=ei,ei=Nc(r.containerInfo),Tn(r,e),ei=h,Sn(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Nl(r.containerInfo)}catch(X){ne(e,e.return,X)}Rf&&(Rf=!1,ax(e));break;case 4:l=ei,ei=Nc(e.stateNode.containerInfo),Tn(r,e),Sn(e),ei=l;break;case 12:Tn(r,e),Sn(e);break;case 13:Tn(r,e),Sn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Of=pn()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,If(e,l)));break;case 22:h=e.memoizedState!==null;var N=s!==null&&s.memoizedState!==null,Y=Xi,et=Te;if(Xi=Y||h,Te=et||N,Tn(r,e),Te=et,Xi=Y,Sn(e),l&8192)t:for(r=e.stateNode,r._visibility=h?r._visibility&-2:r._visibility|1,h&&(s===null||N||Xi||Te||Ba(e)),s=null,r=e;;){if(r.tag===5||r.tag===26){if(s===null){N=s=r;try{if(f=N.stateNode,h)w=f.style,typeof w.setProperty=="function"?w.setProperty("display","none","important"):w.display="none";else{b=N.stateNode;var rt=N.memoizedProps.style,Q=rt!=null&&rt.hasOwnProperty("display")?rt.display:null;b.style.display=Q==null||typeof Q=="boolean"?"":(""+Q).trim()}}catch(X){ne(N,N.return,X)}}}else if(r.tag===6){if(s===null){N=r;try{N.stateNode.nodeValue=h?"":N.memoizedProps}catch(X){ne(N,N.return,X)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===e)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break t;for(;r.sibling===null;){if(r.return===null||r.return===e)break t;s===r&&(s=null),r=r.return}s===r&&(s=null),r.sibling.return=r.return,r=r.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,If(e,s))));break;case 19:Tn(r,e),Sn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,If(e,l)));break;case 30:break;case 21:break;default:Tn(r,e),Sn(e)}}function Sn(e){var r=e.flags;if(r&2){try{for(var s,l=e.return;l!==null;){if(Wy(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var h=s.stateNode,f=Sf(e);vc(e,f,h);break;case 5:var w=s.stateNode;s.flags&32&&(On(w,""),s.flags&=-33);var b=Sf(e);vc(e,b,w);break;case 3:case 4:var N=s.stateNode.containerInfo,Y=Sf(e);Af(e,Y,N);break;default:throw Error(a(161))}}catch(et){ne(e,e.return,et)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function ax(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var r=e;ax(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),e=e.sibling}}function Or(e,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)tx(e,r.alternate,r),r=r.sibling}function Ba(e){for(e=e.child;e!==null;){var r=e;switch(r.tag){case 0:case 11:case 14:case 15:Mr(4,r,r.return),Ba(r);break;case 1:xi(r,r.return);var s=r.stateNode;typeof s.componentWillUnmount=="function"&&Qy(r,r.return,s),Ba(r);break;case 27:Tl(r.stateNode);case 26:case 5:xi(r,r.return),Ba(r);break;case 22:r.memoizedState===null&&Ba(r);break;case 30:Ba(r);break;default:Ba(r)}e=e.sibling}}function kr(e,r,s){for(s=s&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var l=r.alternate,h=e,f=r,w=f.flags;switch(f.tag){case 0:case 11:case 15:kr(h,f,s),pl(4,f);break;case 1:if(kr(h,f,s),l=f,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(Y){ne(l,l.return,Y)}if(l=f,h=l.updateQueue,h!==null){var b=l.stateNode;try{var N=h.shared.hiddenCallbacks;if(N!==null)for(h.shared.hiddenCallbacks=null,h=0;h<N.length;h++)O0(N[h],b)}catch(Y){ne(l,l.return,Y)}}s&&w&64&&Yy(f),ml(f,f.return);break;case 27:Zy(f);case 26:case 5:kr(h,f,s),s&&l===null&&w&4&&Xy(f),ml(f,f.return);break;case 12:kr(h,f,s);break;case 13:kr(h,f,s),s&&w&4&&ix(h,f);break;case 22:f.memoizedState===null&&kr(h,f,s),ml(f,f.return);break;case 30:break;default:kr(h,f,s)}r=r.sibling}}function Cf(e,r){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(e=r.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&tl(s))}function jf(e,r){e=null,r.alternate!==null&&(e=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==e&&(r.refCount++,e!=null&&tl(e))}function vi(e,r,s,l){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)sx(e,r,s,l),r=r.sibling}function sx(e,r,s,l){var h=r.flags;switch(r.tag){case 0:case 11:case 15:vi(e,r,s,l),h&2048&&pl(9,r);break;case 1:vi(e,r,s,l);break;case 3:vi(e,r,s,l),h&2048&&(e=null,r.alternate!==null&&(e=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==e&&(r.refCount++,e!=null&&tl(e)));break;case 12:if(h&2048){vi(e,r,s,l),e=r.stateNode;try{var f=r.memoizedProps,w=f.id,b=f.onPostCommit;typeof b=="function"&&b(w,r.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(N){ne(r,r.return,N)}}else vi(e,r,s,l);break;case 13:vi(e,r,s,l);break;case 23:break;case 22:f=r.stateNode,w=r.alternate,r.memoizedState!==null?f._visibility&2?vi(e,r,s,l):gl(e,r):f._visibility&2?vi(e,r,s,l):(f._visibility|=2,Os(e,r,s,l,(r.subtreeFlags&10256)!==0)),h&2048&&Cf(w,r);break;case 24:vi(e,r,s,l),h&2048&&jf(r.alternate,r);break;default:vi(e,r,s,l)}}function Os(e,r,s,l,h){for(h=h&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var f=e,w=r,b=s,N=l,Y=w.flags;switch(w.tag){case 0:case 11:case 15:Os(f,w,b,N,h),pl(8,w);break;case 23:break;case 22:var et=w.stateNode;w.memoizedState!==null?et._visibility&2?Os(f,w,b,N,h):gl(f,w):(et._visibility|=2,Os(f,w,b,N,h)),h&&Y&2048&&Cf(w.alternate,w);break;case 24:Os(f,w,b,N,h),h&&Y&2048&&jf(w.alternate,w);break;default:Os(f,w,b,N,h)}r=r.sibling}}function gl(e,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var s=e,l=r,h=l.flags;switch(l.tag){case 22:gl(s,l),h&2048&&Cf(l.alternate,l);break;case 24:gl(s,l),h&2048&&jf(l.alternate,l);break;default:gl(s,l)}r=r.sibling}}var yl=8192;function ks(e){if(e.subtreeFlags&yl)for(e=e.child;e!==null;)ox(e),e=e.sibling}function ox(e){switch(e.tag){case 26:ks(e),e.flags&yl&&e.memoizedState!==null&&lT(ei,e.memoizedState,e.memoizedProps);break;case 5:ks(e);break;case 3:case 4:var r=ei;ei=Nc(e.stateNode.containerInfo),ks(e),ei=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=yl,yl=16777216,ks(e),yl=r):ks(e));break;default:ks(e)}}function lx(e){var r=e.alternate;if(r!==null&&(e=r.child,e!==null)){r.child=null;do r=e.sibling,e.sibling=null,e=r;while(e!==null)}}function xl(e){var r=e.deletions;if((e.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var l=r[s];Fe=l,cx(l,e)}lx(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ux(e),e=e.sibling}function ux(e){switch(e.tag){case 0:case 11:case 15:xl(e),e.flags&2048&&Mr(9,e,e.return);break;case 3:xl(e);break;case 12:xl(e);break;case 22:var r=e.stateNode;e.memoizedState!==null&&r._visibility&2&&(e.return===null||e.return.tag!==13)?(r._visibility&=-3,_c(e)):xl(e);break;default:xl(e)}}function _c(e){var r=e.deletions;if((e.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var l=r[s];Fe=l,cx(l,e)}lx(e)}for(e=e.child;e!==null;){switch(r=e,r.tag){case 0:case 11:case 15:Mr(8,r,r.return),_c(r);break;case 22:s=r.stateNode,s._visibility&2&&(s._visibility&=-3,_c(r));break;default:_c(r)}e=e.sibling}}function cx(e,r){for(;Fe!==null;){var s=Fe;switch(s.tag){case 0:case 11:case 15:Mr(8,s,r);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:tl(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Fe=l;else t:for(s=e;Fe!==null;){l=Fe;var h=l.sibling,f=l.return;if(ex(l),l===s){Fe=null;break t}if(h!==null){h.return=f,Fe=h;break t}Fe=f}}}var Tb={getCacheForType:function(e){var r=nn(Ve),s=r.data.get(e);return s===void 0&&(s=e(),r.data.set(e,s)),s}},Sb=typeof WeakMap=="function"?WeakMap:Map,Xt=0,re=null,kt=null,Lt=0,Wt=0,An=null,Vr=!1,Vs=!1,Df=!1,Zi=0,xe=0,Pr=0,Fa=0,Nf=0,$n=0,Ps=0,vl=null,yn=null,Mf=!1,Of=0,wc=1/0,Ec=null,Ur=null,Qe=0,zr=null,Us=null,zs=0,kf=0,Vf=null,hx=null,_l=0,Pf=null;function Rn(){if((Xt&2)!==0&&Lt!==0)return Lt&-Lt;if(tt.T!==null){var e=As;return e!==0?e:Kf()}return Oi()}function dx(){$n===0&&($n=(Lt&536870912)===0||Ht?jo():536870912);var e=Ln.current;return e!==null&&(e.flags|=32),$n}function In(e,r,s){(e===re&&(Wt===2||Wt===9)||e.cancelPendingCommit!==null)&&(Ls(e,0),Lr(e,Lt,$n,!1)),ve(e,s),((Xt&2)===0||e!==re)&&(e===re&&((Xt&2)===0&&(Fa|=s),xe===4&&Lr(e,Lt,$n,!1)),_i(e))}function fx(e,r,s){if((Xt&6)!==0)throw Error(a(327));var l=!s&&(r&124)===0&&(r&e.expiredLanes)===0||dr(e,r),h=l?Ib(e,r):Lf(e,r,!0),f=l;do{if(h===0){Vs&&!l&&Lr(e,r,0,!1);break}else{if(s=e.current.alternate,f&&!Ab(s)){h=Lf(e,r,!1),f=!1;continue}if(h===2){if(f=r,e.errorRecoveryDisabledLanes&f)var w=0;else w=e.pendingLanes&-536870913,w=w!==0?w:w&536870912?536870912:0;if(w!==0){r=w;t:{var b=e;h=vl;var N=b.current.memoizedState.isDehydrated;if(N&&(Ls(b,w).flags|=256),w=Lf(b,w,!1),w!==2){if(Df&&!N){b.errorRecoveryDisabledLanes|=f,Fa|=f,h=4;break t}f=yn,yn=h,f!==null&&(yn===null?yn=f:yn.push.apply(yn,f))}h=w}if(f=!1,h!==2)continue}}if(h===1){Ls(e,0),Lr(e,r,0,!0);break}t:{switch(l=e,f=h,f){case 0:case 1:throw Error(a(345));case 4:if((r&4194048)!==r)break;case 6:Lr(l,r,$n,!Vr);break t;case 2:yn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((r&62914560)===r&&(h=Of+300-pn(),10<h)){if(Lr(l,r,$n,!Vr),Nn(l,0,!0)!==0)break t;l.timeoutHandle=Bx(px.bind(null,l,s,yn,Ec,Mf,r,$n,Fa,Ps,Vr,f,2,-0,0),h);break t}px(l,s,yn,Ec,Mf,r,$n,Fa,Ps,Vr,f,0,-0,0)}}break}while(!0);_i(e)}function px(e,r,s,l,h,f,w,b,N,Y,et,rt,Q,X){if(e.timeoutHandle=-1,rt=r.subtreeFlags,(rt&8192||(rt&16785408)===16785408)&&(Rl={stylesheets:null,count:0,unsuspend:oT},ox(r),rt=uT(),rt!==null)){e.cancelPendingCommit=rt(wx.bind(null,e,r,f,s,l,h,w,b,N,et,1,Q,X)),Lr(e,f,w,!Y);return}wx(e,r,f,s,l,h,w,b,N)}function Ab(e){for(var r=e;;){var s=r.tag;if((s===0||s===11||s===15)&&r.flags&16384&&(s=r.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var h=s[l],f=h.getSnapshot;h=h.value;try{if(!En(f(),h))return!1}catch{return!1}}if(s=r.child,r.subtreeFlags&16384&&s!==null)s.return=r,r=s;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Lr(e,r,s,l){r&=~Nf,r&=~Fa,e.suspendedLanes|=r,e.pingedLanes&=~r,l&&(e.warmLanes|=r),l=e.expirationTimes;for(var h=r;0<h;){var f=31-un(h),w=1<<f;l[f]=-1,h&=~w}s!==0&&pr(e,s,r)}function bc(){return(Xt&6)===0?(wl(0),!1):!0}function Uf(){if(kt!==null){if(Wt===0)var e=kt.return;else e=kt,Ki=Pa=null,tf(e),Ns=null,hl=0,e=kt;for(;e!==null;)Gy(e.alternate,e),e=e.return;kt=null}}function Ls(e,r){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,Kb(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Uf(),re=e,kt=s=$i(e.current,null),Lt=r,Wt=0,An=null,Vr=!1,Vs=dr(e,r),Df=!1,Ps=$n=Nf=Fa=Pr=xe=0,yn=vl=null,Mf=!1,(r&8)!==0&&(r|=r&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=r;0<l;){var h=31-un(l),f=1<<h;r|=e[h],l&=~f}return Zi=r,Hu(),s}function mx(e,r){Mt=null,tt.H=cc,r===nl||r===tc?(r=N0(),Wt=3):r===C0?(r=N0(),Wt=4):Wt=r===My?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,An=r,kt===null&&(xe=1,mc(e,Vn(r,e.current)))}function gx(){var e=tt.H;return tt.H=cc,e===null?cc:e}function yx(){var e=tt.A;return tt.A=Tb,e}function zf(){xe=4,Vr||(Lt&4194048)!==Lt&&Ln.current!==null||(Vs=!0),(Pr&134217727)===0&&(Fa&134217727)===0||re===null||Lr(re,Lt,$n,!1)}function Lf(e,r,s){var l=Xt;Xt|=2;var h=gx(),f=yx();(re!==e||Lt!==r)&&(Ec=null,Ls(e,r)),r=!1;var w=xe;t:do try{if(Wt!==0&&kt!==null){var b=kt,N=An;switch(Wt){case 8:Uf(),w=6;break t;case 3:case 2:case 9:case 6:Ln.current===null&&(r=!0);var Y=Wt;if(Wt=0,An=null,$s(e,b,N,Y),s&&Vs){w=0;break t}break;default:Y=Wt,Wt=0,An=null,$s(e,b,N,Y)}}Rb(),w=xe;break}catch(et){mx(e,et)}while(!0);return r&&e.shellSuspendCounter++,Ki=Pa=null,Xt=l,tt.H=h,tt.A=f,kt===null&&(re=null,Lt=0,Hu()),w}function Rb(){for(;kt!==null;)xx(kt)}function Ib(e,r){var s=Xt;Xt|=2;var l=gx(),h=yx();re!==e||Lt!==r?(Ec=null,wc=pn()+500,Ls(e,r)):Vs=dr(e,r);t:do try{if(Wt!==0&&kt!==null){r=kt;var f=An;e:switch(Wt){case 1:Wt=0,An=null,$s(e,r,f,1);break;case 2:case 9:if(j0(f)){Wt=0,An=null,vx(r);break}r=function(){Wt!==2&&Wt!==9||re!==e||(Wt=7),_i(e)},f.then(r,r);break t;case 3:Wt=7;break t;case 4:Wt=5;break t;case 7:j0(f)?(Wt=0,An=null,vx(r)):(Wt=0,An=null,$s(e,r,f,7));break;case 5:var w=null;switch(kt.tag){case 26:w=kt.memoizedState;case 5:case 27:var b=kt;if(!w||t1(w)){Wt=0,An=null;var N=b.sibling;if(N!==null)kt=N;else{var Y=b.return;Y!==null?(kt=Y,Tc(Y)):kt=null}break e}}Wt=0,An=null,$s(e,r,f,5);break;case 6:Wt=0,An=null,$s(e,r,f,6);break;case 8:Uf(),xe=6;break t;default:throw Error(a(462))}}Cb();break}catch(et){mx(e,et)}while(!0);return Ki=Pa=null,tt.H=l,tt.A=h,Xt=s,kt!==null?0:(re=null,Lt=0,Hu(),xe)}function Cb(){for(;kt!==null&&!fd();)xx(kt)}function xx(e){var r=Hy(e.alternate,e,Zi);e.memoizedProps=e.pendingProps,r===null?Tc(e):kt=r}function vx(e){var r=e,s=r.alternate;switch(r.tag){case 15:case 0:r=zy(s,r,r.pendingProps,r.type,void 0,Lt);break;case 11:r=zy(s,r,r.pendingProps,r.type.render,r.ref,Lt);break;case 5:tf(r);default:Gy(s,r),r=kt=_0(r,Zi),r=Hy(s,r,Zi)}e.memoizedProps=e.pendingProps,r===null?Tc(e):kt=r}function $s(e,r,s,l){Ki=Pa=null,tf(r),Ns=null,hl=0;var h=r.return;try{if(xb(e,h,r,s,Lt)){xe=1,mc(e,Vn(s,e.current)),kt=null;return}}catch(f){if(h!==null)throw kt=h,f;xe=1,mc(e,Vn(s,e.current)),kt=null;return}r.flags&32768?(Ht||l===1?e=!0:Vs||(Lt&536870912)!==0?e=!1:(Vr=e=!0,(l===2||l===9||l===3||l===6)&&(l=Ln.current,l!==null&&l.tag===13&&(l.flags|=16384))),_x(r,e)):Tc(r)}function Tc(e){var r=e;do{if((r.flags&32768)!==0){_x(r,Vr);return}e=r.return;var s=_b(r.alternate,r,Zi);if(s!==null){kt=s;return}if(r=r.sibling,r!==null){kt=r;return}kt=r=e}while(r!==null);xe===0&&(xe=5)}function _x(e,r){do{var s=wb(e.alternate,e);if(s!==null){s.flags&=32767,kt=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!r&&(e=e.sibling,e!==null)){kt=e;return}kt=e=s}while(e!==null);xe=6,kt=null}function wx(e,r,s,l,h,f,w,b,N){e.cancelPendingCommit=null;do Sc();while(Qe!==0);if((Xt&6)!==0)throw Error(a(327));if(r!==null){if(r===e.current)throw Error(a(177));if(f=r.lanes|r.childLanes,f|=Cd,Iu(e,s,f,w,b,N),e===re&&(kt=re=null,Lt=0),Us=r,zr=e,zs=s,kf=f,Vf=h,hx=l,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Mb(Mi,function(){return Ax(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||l){l=tt.T,tt.T=null,h=dt.p,dt.p=2,w=Xt,Xt|=4;try{Eb(e,r,s)}finally{Xt=w,dt.p=h,tt.T=l}}Qe=1,Ex(),bx(),Tx()}}function Ex(){if(Qe===1){Qe=0;var e=zr,r=Us,s=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||s){s=tt.T,tt.T=null;var l=dt.p;dt.p=2;var h=Xt;Xt|=4;try{rx(r,e);var f=Zf,w=c0(e.containerInfo),b=f.focusedElem,N=f.selectionRange;if(w!==b&&b&&b.ownerDocument&&u0(b.ownerDocument.documentElement,b)){if(N!==null&&Td(b)){var Y=N.start,et=N.end;if(et===void 0&&(et=Y),"selectionStart"in b)b.selectionStart=Y,b.selectionEnd=Math.min(et,b.value.length);else{var rt=b.ownerDocument||document,Q=rt&&rt.defaultView||window;if(Q.getSelection){var X=Q.getSelection(),St=b.textContent.length,wt=Math.min(N.start,St),ee=N.end===void 0?wt:Math.min(N.end,St);!X.extend&&wt>ee&&(w=ee,ee=wt,wt=w);var F=l0(b,wt),z=l0(b,ee);if(F&&z&&(X.rangeCount!==1||X.anchorNode!==F.node||X.anchorOffset!==F.offset||X.focusNode!==z.node||X.focusOffset!==z.offset)){var H=rt.createRange();H.setStart(F.node,F.offset),X.removeAllRanges(),wt>ee?(X.addRange(H),X.extend(z.node,z.offset)):(H.setEnd(z.node,z.offset),X.addRange(H))}}}}for(rt=[],X=b;X=X.parentNode;)X.nodeType===1&&rt.push({element:X,left:X.scrollLeft,top:X.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<rt.length;b++){var nt=rt[b];nt.element.scrollLeft=nt.left,nt.element.scrollTop=nt.top}}Pc=!!Wf,Zf=Wf=null}finally{Xt=h,dt.p=l,tt.T=s}}e.current=r,Qe=2}}function bx(){if(Qe===2){Qe=0;var e=zr,r=Us,s=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||s){s=tt.T,tt.T=null;var l=dt.p;dt.p=2;var h=Xt;Xt|=4;try{tx(e,r.alternate,r)}finally{Xt=h,dt.p=l,tt.T=s}}Qe=3}}function Tx(){if(Qe===4||Qe===3){Qe=0,Io();var e=zr,r=Us,s=zs,l=hx;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Qe=5:(Qe=0,Us=zr=null,Sx(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(Ur=null),No(s),r=r.stateNode,tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(cr,r,void 0,(r.current.flags&128)===128)}catch{}if(l!==null){r=tt.T,h=dt.p,dt.p=2,tt.T=null;try{for(var f=e.onRecoverableError,w=0;w<l.length;w++){var b=l[w];f(b.value,{componentStack:b.stack})}}finally{tt.T=r,dt.p=h}}(zs&3)!==0&&Sc(),_i(e),h=e.pendingLanes,(s&4194090)!==0&&(h&42)!==0?e===Pf?_l++:(_l=0,Pf=e):_l=0,wl(0)}}function Sx(e,r){(e.pooledCacheLanes&=r)===0&&(r=e.pooledCache,r!=null&&(e.pooledCache=null,tl(r)))}function Sc(e){return Ex(),bx(),Tx(),Ax()}function Ax(){if(Qe!==5)return!1;var e=zr,r=kf;kf=0;var s=No(zs),l=tt.T,h=dt.p;try{dt.p=32>s?32:s,tt.T=null,s=Vf,Vf=null;var f=zr,w=zs;if(Qe=0,Us=zr=null,zs=0,(Xt&6)!==0)throw Error(a(331));var b=Xt;if(Xt|=4,ux(f.current),sx(f,f.current,w,s),Xt=b,wl(0,!1),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(cr,f)}catch{}return!0}finally{dt.p=h,tt.T=l,Sx(e,r)}}function Rx(e,r,s){r=Vn(s,r),r=mf(e.stateNode,r,2),e=Cr(e,r,2),e!==null&&(ve(e,2),_i(e))}function ne(e,r,s){if(e.tag===3)Rx(e,e,s);else for(;r!==null;){if(r.tag===3){Rx(r,e,s);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ur===null||!Ur.has(l))){e=Vn(s,e),s=Dy(2),l=Cr(r,s,2),l!==null&&(Ny(s,l,r,e),ve(l,2),_i(l));break}}r=r.return}}function $f(e,r,s){var l=e.pingCache;if(l===null){l=e.pingCache=new Sb;var h=new Set;l.set(r,h)}else h=l.get(r),h===void 0&&(h=new Set,l.set(r,h));h.has(s)||(Df=!0,h.add(s),e=jb.bind(null,e,r,s),r.then(e,e))}function jb(e,r,s){var l=e.pingCache;l!==null&&l.delete(r),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,re===e&&(Lt&s)===s&&(xe===4||xe===3&&(Lt&62914560)===Lt&&300>pn()-Of?(Xt&2)===0&&Ls(e,0):Nf|=s,Ps===Lt&&(Ps=0)),_i(e)}function Ix(e,r){r===0&&(r=fr()),e=Es(e,r),e!==null&&(ve(e,r),_i(e))}function Db(e){var r=e.memoizedState,s=0;r!==null&&(s=r.retryLane),Ix(e,s)}function Nb(e,r){var s=0;switch(e.tag){case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(s=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(r),Ix(e,s)}function Mb(e,r){return la(e,r)}var Ac=null,Bs=null,Bf=!1,Rc=!1,Ff=!1,Ka=0;function _i(e){e!==Bs&&e.next===null&&(Bs===null?Ac=Bs=e:Bs=Bs.next=e),Rc=!0,Bf||(Bf=!0,kb())}function wl(e,r){if(!Ff&&Rc){Ff=!0;do for(var s=!1,l=Ac;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var f=0;else{var w=l.suspendedLanes,b=l.pingedLanes;f=(1<<31-un(42|e)+1)-1,f&=h&~(w&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(s=!0,Nx(l,f))}else f=Lt,f=Nn(l,l===re?f:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(f&3)===0||dr(l,f)||(s=!0,Nx(l,f));l=l.next}while(s);Ff=!1}}function Ob(){Cx()}function Cx(){Rc=Bf=!1;var e=0;Ka!==0&&(Fb()&&(e=Ka),Ka=0);for(var r=pn(),s=null,l=Ac;l!==null;){var h=l.next,f=jx(l,r);f===0?(l.next=null,s===null?Ac=h:s.next=h,h===null&&(Bs=s)):(s=l,(e!==0||(f&3)!==0)&&(Rc=!0)),l=h}wl(e)}function jx(e,r){for(var s=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var w=31-un(f),b=1<<w,N=h[w];N===-1?((b&s)===0||(b&l)!==0)&&(h[w]=as(b,r)):N<=r&&(e.expiredLanes|=b),f&=~b}if(r=re,s=Lt,s=Nn(e,e===r?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===r&&(Wt===2||Wt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&rs(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||dr(e,s)){if(r=s&-s,r===e.callbackPriority)return r;switch(l!==null&&rs(l),No(s)){case 2:case 8:s=Le;break;case 32:s=Mi;break;case 268435456:s=Co;break;default:s=Mi}return l=Dx.bind(null,e),s=la(s,l),e.callbackPriority=r,e.callbackNode=s,r}return l!==null&&l!==null&&rs(l),e.callbackPriority=2,e.callbackNode=null,2}function Dx(e,r){if(Qe!==0&&Qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(Sc()&&e.callbackNode!==s)return null;var l=Lt;return l=Nn(e,e===re?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(fx(e,l,r),jx(e,pn()),e.callbackNode!=null&&e.callbackNode===s?Dx.bind(null,e):null)}function Nx(e,r){if(Sc())return null;fx(e,r,!0)}function kb(){Hb(function(){(Xt&6)!==0?la(Oe,Ob):Cx()})}function Kf(){return Ka===0&&(Ka=jo()),Ka}function Mx(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Xn(""+e)}function Ox(e,r){var s=r.ownerDocument.createElement("input");return s.name=r.name,s.value=r.value,e.id&&s.setAttribute("form",e.id),r.parentNode.insertBefore(s,r),e=new FormData(e),s.parentNode.removeChild(s),e}function Vb(e,r,s,l,h){if(r==="submit"&&s&&s.stateNode===h){var f=Mx((h[Ge]||null).action),w=l.submitter;w&&(r=(r=w[Ge]||null)?Mx(r.formAction):w.getAttribute("formAction"),r!==null&&(f=r,w=null));var b=new ba("action","action",null,l,h);e.push({event:b,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ka!==0){var N=w?Ox(h,w):new FormData(h);cf(s,{pending:!0,data:N,method:h.method,action:f},null,N)}}else typeof f=="function"&&(b.preventDefault(),N=w?Ox(h,w):new FormData(h),cf(s,{pending:!0,data:N,method:h.method,action:f},f,N))},currentTarget:h}]})}}for(var Hf=0;Hf<Id.length;Hf++){var qf=Id[Hf],Pb=qf.toLowerCase(),Ub=qf[0].toUpperCase()+qf.slice(1);ti(Pb,"on"+Ub)}ti(f0,"onAnimationEnd"),ti(p0,"onAnimationIteration"),ti(m0,"onAnimationStart"),ti("dblclick","onDoubleClick"),ti("focusin","onFocus"),ti("focusout","onBlur"),ti(eb,"onTransitionRun"),ti(nb,"onTransitionStart"),ti(ib,"onTransitionCancel"),ti(g0,"onTransitionEnd"),di("onMouseEnter",["mouseout","mouseover"]),di("onMouseLeave",["mouseout","mouseover"]),di("onPointerEnter",["pointerout","pointerover"]),di("onPointerLeave",["pointerout","pointerover"]),hi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),hi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),hi("onBeforeInput",["compositionend","keypress","textInput","paste"]),hi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),hi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),hi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var El="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(El));function kx(e,r){r=(r&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],h=l.event;l=l.listeners;t:{var f=void 0;if(r)for(var w=l.length-1;0<=w;w--){var b=l[w],N=b.instance,Y=b.currentTarget;if(b=b.listener,N!==f&&h.isPropagationStopped())break t;f=b,h.currentTarget=Y;try{f(h)}catch(et){pc(et)}h.currentTarget=null,f=N}else for(w=0;w<l.length;w++){if(b=l[w],N=b.instance,Y=b.currentTarget,b=b.listener,N!==f&&h.isPropagationStopped())break t;f=b,h.currentTarget=Y;try{f(h)}catch(et){pc(et)}h.currentTarget=null,f=N}}}}function Vt(e,r){var s=r[ca];s===void 0&&(s=r[ca]=new Set);var l=e+"__bubble";s.has(l)||(Vx(r,e,2,!1),s.add(l))}function Gf(e,r,s){var l=0;r&&(l|=4),Vx(s,e,l,r)}var Ic="_reactListening"+Math.random().toString(36).slice(2);function Yf(e){if(!e[Ic]){e[Ic]=!0,Cu.forEach(function(s){s!=="selectionchange"&&(zb.has(s)||Gf(s,!1,e),Gf(s,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Ic]||(r[Ic]=!0,Gf("selectionchange",!1,r))}}function Vx(e,r,s,l){switch(s1(r)){case 2:var h=dT;break;case 8:h=fT;break;default:h=lp}s=h.bind(null,r,s,e),h=void 0,!zi||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(r,s,{capture:!0,passive:h}):e.addEventListener(r,s,!0):h!==void 0?e.addEventListener(r,s,{passive:h}):e.addEventListener(r,s,!1)}function Qf(e,r,s,l,h){var f=l;if((r&1)===0&&(r&2)===0&&l!==null)t:for(;;){if(l===null)return;var w=l.tag;if(w===3||w===4){var b=l.stateNode.containerInfo;if(b===h)break;if(w===4)for(w=l.return;w!==null;){var N=w.tag;if((N===3||N===4)&&w.stateNode.containerInfo===h)return;w=w.return}for(;b!==null;){if(w=ui(b),w===null)return;if(N=w.tag,N===5||N===6||N===26||N===27){l=f=w;continue t}b=b.parentNode}}l=l.return}_a(function(){var Y=f,et=zo(s),rt=[];t:{var Q=y0.get(e);if(Q!==void 0){var X=ba,St=e;switch(e){case"keypress":if(wa(s)===0)break t;case"keydown":case"keyup":X=xs;break;case"focusin":St="focus",X=ms;break;case"focusout":St="blur",X=ms;break;case"beforeblur":case"afterblur":X=ms;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":X=Ia;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":X=Vu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":X=Sr;break;case f0:case p0:case m0:X=$o;break;case g0:X=x;break;case"scroll":case"scrollend":X=Sa;break;case"wheel":X=R;break;case"copy":case"cut":case"paste":X=Uu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":X=Ko;break;case"toggle":case"beforetoggle":X=W}var wt=(r&4)!==0,ee=!wt&&(e==="scroll"||e==="scrollend"),F=wt?Q!==null?Q+"Capture":null:Q;wt=[];for(var z=Y,H;z!==null;){var nt=z;if(H=nt.stateNode,nt=nt.tag,nt!==5&&nt!==26&&nt!==27||H===null||F===null||(nt=br(z,F),nt!=null&&wt.push(bl(z,nt,H))),ee)break;z=z.return}0<wt.length&&(Q=new X(Q,St,null,s,et),rt.push({event:Q,listeners:wt}))}}if((r&7)===0){t:{if(Q=e==="mouseover"||e==="pointerover",X=e==="mouseout"||e==="pointerout",Q&&s!==Uo&&(St=s.relatedTarget||s.fromElement)&&(ui(St)||St[ki]))break t;if((X||Q)&&(Q=et.window===et?et:(Q=et.ownerDocument)?Q.defaultView||Q.parentWindow:window,X?(St=s.relatedTarget||s.toElement,X=Y,St=St?ui(St):null,St!==null&&(ee=u(St),wt=St.tag,St!==ee||wt!==5&&wt!==27&&wt!==6)&&(St=null)):(X=null,St=Y),X!==St)){if(wt=Ia,nt="onMouseLeave",F="onMouseEnter",z="mouse",(e==="pointerout"||e==="pointerover")&&(wt=Ko,nt="onPointerLeave",F="onPointerEnter",z="pointer"),ee=X==null?Q:yr(X),H=St==null?Q:yr(St),Q=new wt(nt,z+"leave",X,s,et),Q.target=ee,Q.relatedTarget=H,nt=null,ui(et)===Y&&(wt=new wt(F,z+"enter",St,s,et),wt.target=H,wt.relatedTarget=ee,nt=wt),ee=nt,X&&St)e:{for(wt=X,F=St,z=0,H=wt;H;H=Fs(H))z++;for(H=0,nt=F;nt;nt=Fs(nt))H++;for(;0<z-H;)wt=Fs(wt),z--;for(;0<H-z;)F=Fs(F),H--;for(;z--;){if(wt===F||F!==null&&wt===F.alternate)break e;wt=Fs(wt),F=Fs(F)}wt=null}else wt=null;X!==null&&Px(rt,Q,X,wt,!1),St!==null&&ee!==null&&Px(rt,ee,St,wt,!0)}}t:{if(Q=Y?yr(Y):window,X=Q.nodeName&&Q.nodeName.toLowerCase(),X==="select"||X==="input"&&Q.type==="file")var mt=n0;else if(t0(Q))if(i0)mt=ZE;else{mt=XE;var Ot=QE}else X=Q.nodeName,!X||X.toLowerCase()!=="input"||Q.type!=="checkbox"&&Q.type!=="radio"?Y&&ds(Y.elementType)&&(mt=n0):mt=WE;if(mt&&(mt=mt(e,Y))){e0(rt,mt,s,et);break t}Ot&&Ot(e,Q,Y),e==="focusout"&&Y&&Q.type==="number"&&Y.memoizedProps.value!=null&&ko(Q,"number",Q.value)}switch(Ot=Y?yr(Y):window,e){case"focusin":(t0(Ot)||Ot.contentEditable==="true")&&(vs=Ot,Sd=Y,Qo=null);break;case"focusout":Qo=Sd=vs=null;break;case"mousedown":Ad=!0;break;case"contextmenu":case"mouseup":case"dragend":Ad=!1,h0(rt,s,et);break;case"selectionchange":if(tb)break;case"keydown":case"keyup":h0(rt,s,et)}var xt;if(Rt)t:{switch(e){case"compositionstart":var Et="onCompositionStart";break t;case"compositionend":Et="onCompositionEnd";break t;case"compositionupdate":Et="onCompositionUpdate";break t}Et=void 0}else Jn?Wn(e,s)&&(Et="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(Et="onCompositionStart");Et&&(Ee&&s.locale!=="ko"&&(Jn||Et!=="onCompositionStart"?Et==="onCompositionEnd"&&Jn&&(xt=ku()):(kn=et,ie="value"in kn?kn.value:kn.textContent,Jn=!0)),Ot=Cc(Y,Et),0<Ot.length&&(Et=new Fo(Et,e,null,s,et),rt.push({event:Et,listeners:Ot}),xt?Et.data=xt:(xt=Zn(s),xt!==null&&(Et.data=xt)))),(xt=Qt?Ho(e,s):qE(e,s))&&(Et=Cc(Y,"onBeforeInput"),0<Et.length&&(Ot=new Fo("onBeforeInput","beforeinput",null,s,et),rt.push({event:Ot,listeners:Et}),Ot.data=xt)),Vb(rt,e,Y,s,et)}kx(rt,r)})}function bl(e,r,s){return{instance:e,listener:r,currentTarget:s}}function Cc(e,r){for(var s=r+"Capture",l=[];e!==null;){var h=e,f=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||f===null||(h=br(e,s),h!=null&&l.unshift(bl(e,h,f)),h=br(e,r),h!=null&&l.push(bl(e,h,f))),e.tag===3)return l;e=e.return}return[]}function Fs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Px(e,r,s,l,h){for(var f=r._reactName,w=[];s!==null&&s!==l;){var b=s,N=b.alternate,Y=b.stateNode;if(b=b.tag,N!==null&&N===l)break;b!==5&&b!==26&&b!==27||Y===null||(N=Y,h?(Y=br(s,f),Y!=null&&w.unshift(bl(s,Y,N))):h||(Y=br(s,f),Y!=null&&w.push(bl(s,Y,N)))),s=s.return}w.length!==0&&e.push({event:r,listeners:w})}var Lb=/\r\n?/g,$b=/\u0000|\uFFFD/g;function Ux(e){return(typeof e=="string"?e:""+e).replace(Lb,`
`).replace($b,"")}function zx(e,r){return r=Ux(r),Ux(e)===r}function jc(){}function te(e,r,s,l,h,f){switch(s){case"children":typeof l=="string"?r==="body"||r==="textarea"&&l===""||On(e,l):(typeof l=="number"||typeof l=="bigint")&&r!=="body"&&On(e,""+l);break;case"className":ma(e,"class",l);break;case"tabIndex":ma(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ma(e,s,l);break;case"style":Po(e,l,f);break;case"data":if(r!=="object"){ma(e,"data",l);break}case"src":case"href":if(l===""&&(r!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Xn(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(s==="formAction"?(r!=="input"&&te(e,r,"name",h.name,h,null),te(e,r,"formEncType",h.formEncType,h,null),te(e,r,"formMethod",h.formMethod,h,null),te(e,r,"formTarget",h.formTarget,h,null)):(te(e,r,"encType",h.encType,h,null),te(e,r,"method",h.method,h,null),te(e,r,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Xn(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=jc);break;case"onScroll":l!=null&&Vt("scroll",e);break;case"onScrollEnd":l!=null&&Vt("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=Xn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":Vt("beforetoggle",e),Vt("toggle",e),pa(e,"popover",l);break;case"xlinkActuate":Mn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Mn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Mn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Mn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Mn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Mn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Mn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Mn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Mn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":pa(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Nu.get(s)||s,pa(e,s,l))}}function Xf(e,r,s,l,h,f){switch(s){case"style":Po(e,l,f);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof l=="string"?On(e,l):(typeof l=="number"||typeof l=="bigint")&&On(e,""+l);break;case"onScroll":l!=null&&Vt("scroll",e);break;case"onScrollEnd":l!=null&&Vt("scrollend",e);break;case"onClick":l!=null&&(e.onclick=jc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!da.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),r=s.slice(2,h?s.length-7:void 0),f=e[Ge]||null,f=f!=null?f[s]:null,typeof f=="function"&&e.removeEventListener(r,f,h),typeof l=="function")){typeof f!="function"&&f!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(r,l,h);break t}s in e?e[s]=l:l===!0?e.setAttribute(s,""):pa(e,s,l)}}}function Xe(e,r,s){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Vt("error",e),Vt("load",e);var l=!1,h=!1,f;for(f in s)if(s.hasOwnProperty(f)){var w=s[f];if(w!=null)switch(f){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:te(e,r,f,w,s,null)}}h&&te(e,r,"srcSet",s.srcSet,s,null),l&&te(e,r,"src",s.src,s,null);return;case"input":Vt("invalid",e);var b=f=w=h=null,N=null,Y=null;for(l in s)if(s.hasOwnProperty(l)){var et=s[l];if(et!=null)switch(l){case"name":h=et;break;case"type":w=et;break;case"checked":N=et;break;case"defaultChecked":Y=et;break;case"value":f=et;break;case"defaultValue":b=et;break;case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(a(137,r));break;default:te(e,r,l,et,s,null)}}Oo(e,f,b,N,Y,w,h,!1),_r(e);return;case"select":Vt("invalid",e),l=w=f=null;for(h in s)if(s.hasOwnProperty(h)&&(b=s[h],b!=null))switch(h){case"value":f=b;break;case"defaultValue":w=b;break;case"multiple":l=b;default:te(e,r,h,b,s,null)}r=f,s=w,e.multiple=!!l,r!=null?wr(e,!!l,r,!1):s!=null&&wr(e,!!l,s,!0);return;case"textarea":Vt("invalid",e),f=h=l=null;for(w in s)if(s.hasOwnProperty(w)&&(b=s[w],b!=null))switch(w){case"value":l=b;break;case"defaultValue":h=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(a(91));break;default:te(e,r,w,b,s,null)}Du(e,l,h,f),_r(e);return;case"option":for(N in s)if(s.hasOwnProperty(N)&&(l=s[N],l!=null))switch(N){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:te(e,r,N,l,s,null)}return;case"dialog":Vt("beforetoggle",e),Vt("toggle",e),Vt("cancel",e),Vt("close",e);break;case"iframe":case"object":Vt("load",e);break;case"video":case"audio":for(l=0;l<El.length;l++)Vt(El[l],e);break;case"image":Vt("error",e),Vt("load",e);break;case"details":Vt("toggle",e);break;case"embed":case"source":case"link":Vt("error",e),Vt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Y in s)if(s.hasOwnProperty(Y)&&(l=s[Y],l!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:te(e,r,Y,l,s,null)}return;default:if(ds(r)){for(et in s)s.hasOwnProperty(et)&&(l=s[et],l!==void 0&&Xf(e,r,et,l,s,void 0));return}}for(b in s)s.hasOwnProperty(b)&&(l=s[b],l!=null&&te(e,r,b,l,s,null))}function Bb(e,r,s,l){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,f=null,w=null,b=null,N=null,Y=null,et=null;for(X in s){var rt=s[X];if(s.hasOwnProperty(X)&&rt!=null)switch(X){case"checked":break;case"value":break;case"defaultValue":N=rt;default:l.hasOwnProperty(X)||te(e,r,X,null,l,rt)}}for(var Q in l){var X=l[Q];if(rt=s[Q],l.hasOwnProperty(Q)&&(X!=null||rt!=null))switch(Q){case"type":f=X;break;case"name":h=X;break;case"checked":Y=X;break;case"defaultChecked":et=X;break;case"value":w=X;break;case"defaultValue":b=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(a(137,r));break;default:X!==rt&&te(e,r,Q,X,l,rt)}}Mo(e,w,b,N,Y,et,f,h);return;case"select":X=w=b=Q=null;for(f in s)if(N=s[f],s.hasOwnProperty(f)&&N!=null)switch(f){case"value":break;case"multiple":X=N;default:l.hasOwnProperty(f)||te(e,r,f,null,l,N)}for(h in l)if(f=l[h],N=s[h],l.hasOwnProperty(h)&&(f!=null||N!=null))switch(h){case"value":Q=f;break;case"defaultValue":b=f;break;case"multiple":w=f;default:f!==N&&te(e,r,h,f,l,N)}r=b,s=w,l=X,Q!=null?wr(e,!!s,Q,!1):!!l!=!!s&&(r!=null?wr(e,!!s,r,!0):wr(e,!!s,s?[]:"",!1));return;case"textarea":X=Q=null;for(b in s)if(h=s[b],s.hasOwnProperty(b)&&h!=null&&!l.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:te(e,r,b,null,l,h)}for(w in l)if(h=l[w],f=s[w],l.hasOwnProperty(w)&&(h!=null||f!=null))switch(w){case"value":Q=h;break;case"defaultValue":X=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==f&&te(e,r,w,h,l,f)}ju(e,Q,X);return;case"option":for(var St in s)if(Q=s[St],s.hasOwnProperty(St)&&Q!=null&&!l.hasOwnProperty(St))switch(St){case"selected":e.selected=!1;break;default:te(e,r,St,null,l,Q)}for(N in l)if(Q=l[N],X=s[N],l.hasOwnProperty(N)&&Q!==X&&(Q!=null||X!=null))switch(N){case"selected":e.selected=Q&&typeof Q!="function"&&typeof Q!="symbol";break;default:te(e,r,N,Q,l,X)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var wt in s)Q=s[wt],s.hasOwnProperty(wt)&&Q!=null&&!l.hasOwnProperty(wt)&&te(e,r,wt,null,l,Q);for(Y in l)if(Q=l[Y],X=s[Y],l.hasOwnProperty(Y)&&Q!==X&&(Q!=null||X!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(a(137,r));break;default:te(e,r,Y,Q,l,X)}return;default:if(ds(r)){for(var ee in s)Q=s[ee],s.hasOwnProperty(ee)&&Q!==void 0&&!l.hasOwnProperty(ee)&&Xf(e,r,ee,void 0,l,Q);for(et in l)Q=l[et],X=s[et],!l.hasOwnProperty(et)||Q===X||Q===void 0&&X===void 0||Xf(e,r,et,Q,l,X);return}}for(var F in s)Q=s[F],s.hasOwnProperty(F)&&Q!=null&&!l.hasOwnProperty(F)&&te(e,r,F,null,l,Q);for(rt in l)Q=l[rt],X=s[rt],!l.hasOwnProperty(rt)||Q===X||Q==null&&X==null||te(e,r,rt,Q,l,X)}var Wf=null,Zf=null;function Dc(e){return e.nodeType===9?e:e.ownerDocument}function Lx(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $x(e,r){if(e===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&r==="foreignObject"?0:e}function Jf(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var tp=null;function Fb(){var e=window.event;return e&&e.type==="popstate"?e===tp?!1:(tp=e,!0):(tp=null,!1)}var Bx=typeof setTimeout=="function"?setTimeout:void 0,Kb=typeof clearTimeout=="function"?clearTimeout:void 0,Fx=typeof Promise=="function"?Promise:void 0,Hb=typeof queueMicrotask=="function"?queueMicrotask:typeof Fx<"u"?function(e){return Fx.resolve(null).then(e).catch(qb)}:Bx;function qb(e){setTimeout(function(){throw e})}function $r(e){return e==="head"}function Kx(e,r){var s=r,l=0,h=0;do{var f=s.nextSibling;if(e.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"){if(0<l&&8>l){s=l;var w=e.ownerDocument;if(s&1&&Tl(w.documentElement),s&2&&Tl(w.body),s&4)for(s=w.head,Tl(s),w=s.firstChild;w;){var b=w.nextSibling,N=w.nodeName;w[gr]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&w.rel.toLowerCase()==="stylesheet"||s.removeChild(w),w=b}}if(h===0){e.removeChild(f),Nl(r);return}h--}else s==="$"||s==="$?"||s==="$!"?h++:l=s.charCodeAt(0)-48;else l=0;s=f}while(s);Nl(r)}function ep(e){var r=e.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var s=r;switch(r=r.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":ep(s),os(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function Gb(e,r,s,l){for(;e.nodeType===1;){var h=s;if(e.nodeName.toLowerCase()!==r.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[gr])switch(r){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(r==="input"&&e.type==="hidden"){var f=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ni(e.nextSibling),e===null)break}return null}function Yb(e,r,s){if(r==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=ni(e.nextSibling),e===null))return null;return e}function np(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Qb(e,r){var s=e.ownerDocument;if(e.data!=="$?"||s.readyState==="complete")r();else{var l=function(){r(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function ni(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return e}var ip=null;function Hx(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(r===0)return e;r--}else s==="/$"&&r++}e=e.previousSibling}return null}function qx(e,r,s){switch(r=Dc(s),e){case"html":if(e=r.documentElement,!e)throw Error(a(452));return e;case"head":if(e=r.head,!e)throw Error(a(453));return e;case"body":if(e=r.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Tl(e){for(var r=e.attributes;r.length;)e.removeAttributeNode(r[0]);os(e)}var Bn=new Map,Gx=new Set;function Nc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ji=dt.d;dt.d={f:Xb,r:Wb,D:Zb,C:Jb,L:tT,m:eT,X:iT,S:nT,M:rT};function Xb(){var e=Ji.f(),r=bc();return e||r}function Wb(e){var r=ci(e);r!==null&&r.tag===5&&r.type==="form"?fy(r):Ji.r(e)}var Ks=typeof document>"u"?null:document;function Yx(e,r,s){var l=Ks;if(l&&typeof r=="string"&&r){var h=$e(r);h='link[rel="'+e+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),Gx.has(h)||(Gx.add(h),e={rel:e,crossOrigin:s,href:r},l.querySelector(h)===null&&(r=l.createElement("link"),Xe(r,"link",e),we(r),l.head.appendChild(r)))}}function Zb(e){Ji.D(e),Yx("dns-prefetch",e,null)}function Jb(e,r){Ji.C(e,r),Yx("preconnect",e,r)}function tT(e,r,s){Ji.L(e,r,s);var l=Ks;if(l&&e&&r){var h='link[rel="preload"][as="'+$e(r)+'"]';r==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+$e(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+$e(s.imageSizes)+'"]')):h+='[href="'+$e(e)+'"]';var f=h;switch(r){case"style":f=Hs(e);break;case"script":f=qs(e)}Bn.has(f)||(e=v({rel:"preload",href:r==="image"&&s&&s.imageSrcSet?void 0:e,as:r},s),Bn.set(f,e),l.querySelector(h)!==null||r==="style"&&l.querySelector(Sl(f))||r==="script"&&l.querySelector(Al(f))||(r=l.createElement("link"),Xe(r,"link",e),we(r),l.head.appendChild(r)))}}function eT(e,r){Ji.m(e,r);var s=Ks;if(s&&e){var l=r&&typeof r.as=="string"?r.as:"script",h='link[rel="modulepreload"][as="'+$e(l)+'"][href="'+$e(e)+'"]',f=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=qs(e)}if(!Bn.has(f)&&(e=v({rel:"modulepreload",href:e},r),Bn.set(f,e),s.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Al(f)))return}l=s.createElement("link"),Xe(l,"link",e),we(l),s.head.appendChild(l)}}}function nT(e,r,s){Ji.S(e,r,s);var l=Ks;if(l&&e){var h=xr(l).hoistableStyles,f=Hs(e);r=r||"default";var w=h.get(f);if(!w){var b={loading:0,preload:null};if(w=l.querySelector(Sl(f)))b.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":r},s),(s=Bn.get(f))&&rp(e,s);var N=w=l.createElement("link");we(N),Xe(N,"link",e),N._p=new Promise(function(Y,et){N.onload=Y,N.onerror=et}),N.addEventListener("load",function(){b.loading|=1}),N.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Mc(w,r,l)}w={type:"stylesheet",instance:w,count:1,state:b},h.set(f,w)}}}function iT(e,r){Ji.X(e,r);var s=Ks;if(s&&e){var l=xr(s).hoistableScripts,h=qs(e),f=l.get(h);f||(f=s.querySelector(Al(h)),f||(e=v({src:e,async:!0},r),(r=Bn.get(h))&&ap(e,r),f=s.createElement("script"),we(f),Xe(f,"link",e),s.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(h,f))}}function rT(e,r){Ji.M(e,r);var s=Ks;if(s&&e){var l=xr(s).hoistableScripts,h=qs(e),f=l.get(h);f||(f=s.querySelector(Al(h)),f||(e=v({src:e,async:!0,type:"module"},r),(r=Bn.get(h))&&ap(e,r),f=s.createElement("script"),we(f),Xe(f,"link",e),s.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(h,f))}}function Qx(e,r,s,l){var h=(h=_t.current)?Nc(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(r=Hs(s.href),s=xr(h).hoistableStyles,l=s.get(r),l||(l={type:"style",instance:null,count:0,state:null},s.set(r,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Hs(s.href);var f=xr(h).hoistableStyles,w=f.get(e);if(w||(h=h.ownerDocument||h,w={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,w),(f=h.querySelector(Sl(e)))&&!f._p&&(w.instance=f,w.state.loading=5),Bn.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Bn.set(e,s),f||aT(h,e,s,w.state))),r&&l===null)throw Error(a(528,""));return w}if(r&&l!==null)throw Error(a(529,""));return null;case"script":return r=s.async,s=s.src,typeof s=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=qs(s),s=xr(h).hoistableScripts,l=s.get(r),l||(l={type:"script",instance:null,count:0,state:null},s.set(r,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Hs(e){return'href="'+$e(e)+'"'}function Sl(e){return'link[rel="stylesheet"]['+e+"]"}function Xx(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function aT(e,r,s,l){e.querySelector('link[rel="preload"][as="style"]['+r+"]")?l.loading=1:(r=e.createElement("link"),l.preload=r,r.addEventListener("load",function(){return l.loading|=1}),r.addEventListener("error",function(){return l.loading|=2}),Xe(r,"link",s),we(r),e.head.appendChild(r))}function qs(e){return'[src="'+$e(e)+'"]'}function Al(e){return"script[async]"+e}function Wx(e,r,s){if(r.count++,r.instance===null)switch(r.type){case"style":var l=e.querySelector('style[data-href~="'+$e(s.href)+'"]');if(l)return r.instance=l,we(l),l;var h=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),we(l),Xe(l,"style",h),Mc(l,s.precedence,e),r.instance=l;case"stylesheet":h=Hs(s.href);var f=e.querySelector(Sl(h));if(f)return r.state.loading|=4,r.instance=f,we(f),f;l=Xx(s),(h=Bn.get(h))&&rp(l,h),f=(e.ownerDocument||e).createElement("link"),we(f);var w=f;return w._p=new Promise(function(b,N){w.onload=b,w.onerror=N}),Xe(f,"link",l),r.state.loading|=4,Mc(f,s.precedence,e),r.instance=f;case"script":return f=qs(s.src),(h=e.querySelector(Al(f)))?(r.instance=h,we(h),h):(l=s,(h=Bn.get(f))&&(l=v({},s),ap(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),we(h),Xe(h,"link",l),e.head.appendChild(h),r.instance=h);case"void":return null;default:throw Error(a(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(l=r.instance,r.state.loading|=4,Mc(l,s.precedence,e));return r.instance}function Mc(e,r,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,f=h,w=0;w<l.length;w++){var b=l[w];if(b.dataset.precedence===r)f=b;else if(f!==h)break}f?f.parentNode.insertBefore(e,f.nextSibling):(r=s.nodeType===9?s.head:s,r.insertBefore(e,r.firstChild))}function rp(e,r){e.crossOrigin==null&&(e.crossOrigin=r.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=r.referrerPolicy),e.title==null&&(e.title=r.title)}function ap(e,r){e.crossOrigin==null&&(e.crossOrigin=r.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=r.referrerPolicy),e.integrity==null&&(e.integrity=r.integrity)}var Oc=null;function Zx(e,r,s){if(Oc===null){var l=new Map,h=Oc=new Map;h.set(s,l)}else h=Oc,l=h.get(s),l||(l=new Map,h.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),h=0;h<s.length;h++){var f=s[h];if(!(f[gr]||f[_e]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var w=f.getAttribute(r)||"";w=e+w;var b=l.get(w);b?b.push(f):l.set(w,[f])}}return l}function Jx(e,r,s){e=e.ownerDocument||e,e.head.insertBefore(s,r==="title"?e.querySelector("head > title"):null)}function sT(e,r,s){if(s===1||r.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return e=r.disabled,typeof r.precedence=="string"&&e==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function t1(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Rl=null;function oT(){}function lT(e,r,s){if(Rl===null)throw Error(a(475));var l=Rl;if(r.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=Hs(s.href),f=e.querySelector(Sl(h));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=kc.bind(l),e.then(l,l)),r.state.loading|=4,r.instance=f,we(f);return}f=e.ownerDocument||e,s=Xx(s),(h=Bn.get(h))&&rp(s,h),f=f.createElement("link"),we(f);var w=f;w._p=new Promise(function(b,N){w.onload=b,w.onerror=N}),Xe(f,"link",s),r.instance=f}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(r,e),(e=r.state.preload)&&(r.state.loading&3)===0&&(l.count++,r=kc.bind(l),e.addEventListener("load",r),e.addEventListener("error",r))}}function uT(){if(Rl===null)throw Error(a(475));var e=Rl;return e.stylesheets&&e.count===0&&sp(e,e.stylesheets),0<e.count?function(r){var s=setTimeout(function(){if(e.stylesheets&&sp(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(s)}}:null}function kc(){if(this.count--,this.count===0){if(this.stylesheets)sp(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Vc=null;function sp(e,r){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Vc=new Map,r.forEach(cT,e),Vc=null,kc.call(e))}function cT(e,r){if(!(r.state.loading&4)){var s=Vc.get(e);if(s)var l=s.get(null);else{s=new Map,Vc.set(e,s);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<h.length;f++){var w=h[f];(w.nodeName==="LINK"||w.getAttribute("media")!=="not all")&&(s.set(w.dataset.precedence,w),l=w)}l&&s.set(null,l)}h=r.instance,w=h.getAttribute("data-precedence"),f=s.get(w)||l,f===l&&s.set(null,h),s.set(w,h),this.count++,l=kc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),f?f.parentNode.insertBefore(h,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),r.state.loading|=4}}var Il={$$typeof:Z,Provider:null,Consumer:null,_currentValue:yt,_currentValue2:yt,_threadCount:0};function hT(e,r,s,l,h,f,w,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ss(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ss(0),this.hiddenUpdates=ss(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=f,this.onRecoverableError=w,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function e1(e,r,s,l,h,f,w,b,N,Y,et,rt){return e=new hT(e,r,s,w,b,N,Y,rt),r=1,f===!0&&(r|=24),f=bn(3,null,null,r),e.current=f,f.stateNode=e,r=Ld(),r.refCount++,e.pooledCache=r,r.refCount++,f.memoizedState={element:l,isDehydrated:s,cache:r},Kd(f),e}function n1(e){return e?(e=bs,e):bs}function i1(e,r,s,l,h,f){h=n1(h),l.context===null?l.context=h:l.pendingContext=h,l=Ir(r),l.payload={element:s},f=f===void 0?null:f,f!==null&&(l.callback=f),s=Cr(e,l,r),s!==null&&(In(s,e,r),rl(s,e,r))}function r1(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<r?s:r}}function op(e,r){r1(e,r),(e=e.alternate)&&r1(e,r)}function a1(e){if(e.tag===13){var r=Es(e,67108864);r!==null&&In(r,e,67108864),op(e,67108864)}}var Pc=!0;function dT(e,r,s,l){var h=tt.T;tt.T=null;var f=dt.p;try{dt.p=2,lp(e,r,s,l)}finally{dt.p=f,tt.T=h}}function fT(e,r,s,l){var h=tt.T;tt.T=null;var f=dt.p;try{dt.p=8,lp(e,r,s,l)}finally{dt.p=f,tt.T=h}}function lp(e,r,s,l){if(Pc){var h=up(l);if(h===null)Qf(e,r,l,Uc,s),o1(e,l);else if(mT(h,e,r,s,l))l.stopPropagation();else if(o1(e,l),r&4&&-1<pT.indexOf(e)){for(;h!==null;){var f=ci(h);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var w=Gn(f.pendingLanes);if(w!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;w;){var N=1<<31-un(w);b.entanglements[1]|=N,w&=~N}_i(f),(Xt&6)===0&&(wc=pn()+500,wl(0))}}break;case 13:b=Es(f,2),b!==null&&In(b,f,2),bc(),op(f,2)}if(f=up(l),f===null&&Qf(e,r,l,Uc,s),f===h)break;h=f}h!==null&&l.stopPropagation()}else Qf(e,r,l,null,s)}}function up(e){return e=zo(e),cp(e)}var Uc=null;function cp(e){if(Uc=null,e=ui(e),e!==null){var r=u(e);if(r===null)e=null;else{var s=r.tag;if(s===13){if(e=d(r),e!==null)return e;e=null}else if(s===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null)}}return Uc=e,null}function s1(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Su()){case Oe:return 2;case Le:return 8;case Mi:case pd:return 32;case Co:return 268435456;default:return 32}default:return 32}}var hp=!1,Br=null,Fr=null,Kr=null,Cl=new Map,jl=new Map,Hr=[],pT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function o1(e,r){switch(e){case"focusin":case"focusout":Br=null;break;case"dragenter":case"dragleave":Fr=null;break;case"mouseover":case"mouseout":Kr=null;break;case"pointerover":case"pointerout":Cl.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":jl.delete(r.pointerId)}}function Dl(e,r,s,l,h,f){return e===null||e.nativeEvent!==f?(e={blockedOn:r,domEventName:s,eventSystemFlags:l,nativeEvent:f,targetContainers:[h]},r!==null&&(r=ci(r),r!==null&&a1(r)),e):(e.eventSystemFlags|=l,r=e.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),e)}function mT(e,r,s,l,h){switch(r){case"focusin":return Br=Dl(Br,e,r,s,l,h),!0;case"dragenter":return Fr=Dl(Fr,e,r,s,l,h),!0;case"mouseover":return Kr=Dl(Kr,e,r,s,l,h),!0;case"pointerover":var f=h.pointerId;return Cl.set(f,Dl(Cl.get(f)||null,e,r,s,l,h)),!0;case"gotpointercapture":return f=h.pointerId,jl.set(f,Dl(jl.get(f)||null,e,r,s,l,h)),!0}return!1}function l1(e){var r=ui(e.target);if(r!==null){var s=u(r);if(s!==null){if(r=s.tag,r===13){if(r=d(s),r!==null){e.blockedOn=r,yd(e.priority,function(){if(s.tag===13){var l=Rn();l=Do(l);var h=Es(s,l);h!==null&&In(h,s,l),op(s,l)}});return}}else if(r===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zc(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var s=up(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);Uo=l,s.target.dispatchEvent(l),Uo=null}else return r=ci(s),r!==null&&a1(r),e.blockedOn=s,!1;r.shift()}return!0}function u1(e,r,s){zc(e)&&s.delete(r)}function gT(){hp=!1,Br!==null&&zc(Br)&&(Br=null),Fr!==null&&zc(Fr)&&(Fr=null),Kr!==null&&zc(Kr)&&(Kr=null),Cl.forEach(u1),jl.forEach(u1)}function Lc(e,r){e.blockedOn===r&&(e.blockedOn=null,hp||(hp=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,gT)))}var $c=null;function c1(e){$c!==e&&($c=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){$c===e&&($c=null);for(var r=0;r<e.length;r+=3){var s=e[r],l=e[r+1],h=e[r+2];if(typeof l!="function"){if(cp(l||s)===null)continue;break}var f=ci(s);f!==null&&(e.splice(r,3),r-=3,cf(f,{pending:!0,data:h,method:s.method,action:l},l,h))}}))}function Nl(e){function r(N){return Lc(N,e)}Br!==null&&Lc(Br,e),Fr!==null&&Lc(Fr,e),Kr!==null&&Lc(Kr,e),Cl.forEach(r),jl.forEach(r);for(var s=0;s<Hr.length;s++){var l=Hr[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Hr.length&&(s=Hr[0],s.blockedOn===null);)l1(s),s.blockedOn===null&&Hr.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var h=s[l],f=s[l+1],w=h[Ge]||null;if(typeof f=="function")w||c1(s);else if(w){var b=null;if(f&&f.hasAttribute("formAction")){if(h=f,w=f[Ge]||null)b=w.formAction;else if(cp(h)!==null)continue}else b=w.action;typeof b=="function"?s[l+1]=b:(s.splice(l,3),l-=3),c1(s)}}}function dp(e){this._internalRoot=e}Bc.prototype.render=dp.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(a(409));var s=r.current,l=Rn();i1(s,l,e,r,null,null)},Bc.prototype.unmount=dp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;i1(e.current,2,null,e,null,null),bc(),r[ki]=null}};function Bc(e){this._internalRoot=e}Bc.prototype.unstable_scheduleHydration=function(e){if(e){var r=Oi();e={blockedOn:null,target:e,priority:r};for(var s=0;s<Hr.length&&r!==0&&r<Hr[s].priority;s++);Hr.splice(s,0,e),s===0&&l1(e)}};var h1=t.version;if(h1!=="19.1.1")throw Error(a(527,h1,"19.1.1"));dt.findDOMNode=function(e){var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=m(r),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var yT={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:tt,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fc.isDisabled&&Fc.supportsFiber)try{cr=Fc.inject(yT),tn=Fc}catch{}}return Pl.createRoot=function(e,r){if(!o(e))throw Error(a(299));var s=!1,l="",h=Ry,f=Iy,w=Cy,b=null;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(f=r.onCaughtError),r.onRecoverableError!==void 0&&(w=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(b=r.unstable_transitionCallbacks)),r=e1(e,1,!1,null,null,s,l,h,f,w,b,null),e[ki]=r.current,Yf(e),new dp(r)},Pl.hydrateRoot=function(e,r,s){if(!o(e))throw Error(a(299));var l=!1,h="",f=Ry,w=Iy,b=Cy,N=null,Y=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(w=s.onCaughtError),s.onRecoverableError!==void 0&&(b=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(N=s.unstable_transitionCallbacks),s.formState!==void 0&&(Y=s.formState)),r=e1(e,1,!0,r,s??null,l,h,f,w,b,N,Y),r.context=n1(null),s=r.current,l=Rn(),l=Do(l),h=Ir(l),h.callback=null,Cr(s,h,l),s=l,r.current.lanes=s,ve(r,s),_i(r),e[ki]=r.current,Yf(e),new Bc(r)},Pl.version="19.1.1",Pl}var Y_;function W9(){if(Y_)return Jp.exports;Y_=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}return n(),Jp.exports=X9(),Jp.exports}var Z9=W9();function J9(){const n=ji();return bt.useLayoutEffect(()=>{window.scrollTo({top:0,behavior:"instant"});const t=document.getElementById("main");t&&t.focus({preventScroll:!0})},[n]),null}function tM({headerMode:n,setHeaderMode:t}){const i=L.useMemo(()=>[{key:"projects",label:"PROJECTS",href:"/projects/"},{key:"peoples",label:"PEOPLES",href:"/peoples/"},{key:"showroom",label:"SHOWROOM",href:"/showroom/"},{key:"guestbook",label:"GUESTBOOK",href:"/guestbook/"},{key:"credits",label:"CREDITS",href:"/credits/"}],[]),a=ji(),o=L.useMemo(()=>{const d=a.pathname.replace(/^\/+/,"");if(!d)return;const p=d.split("/")[0];return["projects","peoples","showroom","guestbook","credits"].includes(p)?p:void 0},[a.pathname]),u=o==="showroom";return y.jsxs(y.Fragment,{children:[y.jsx(P2,{items:i,activeKey:o,mode:n,autoOnScroll:n===he.GRADIENT_DARK||n===he.DARK,scrollThreshold:8,sticky:!0,overlay:n===he.GRADIENT_DARK||n===he.DARK,maxWidth:1280,onModeChange:t}),y.jsx("main",{id:"main",tabIndex:-1,style:{outline:"none",width:"100vw",boxSizing:"border-box",padding:0},children:y.jsx(pS,{})}),!u&&y.jsx(U2,{title:"잔향 : 기억의 향기",nav:[{label:"PROJECTS",href:"/projects/"},{label:"PEOPLES",href:"/peoples/"},{label:"SHOWROOM",href:"/showroom/"},{label:"GUESTBOOK",href:"/guestbook/"},{label:"CREDITS",href:"/credits/"}],copyright:["ⓒ 2025 TECH UNIV KOREA. ALL RIGHTS RESERVED.","TUKOREA DESIGN ENGINEERING 20TH GRADUATION EXHIBITION"],social:{youtube:{href:"https://youtube.com/",label:"YouTube"},instagram:{href:"https://www.instagram.com/tukd_grad?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",label:"Instagram"}},sidePadding:350,maxWidth:1220}),o!=="showroom"&&y.jsx(wA,{})]})}function eM({setHeaderMode:n}){return bt.useLayoutEffect(()=>{n(he.GRADIENT)},[n]),y.jsx(eR,{})}function nM({setHeaderMode:n}){return bt.useLayoutEffect(()=>{n(he.GRADIENT)},[n]),y.jsx(UR,{})}function iM({setHeaderMode:n}){return bt.useLayoutEffect(()=>{n(he.GRADIENT)},[n]),y.jsx(a5,{})}function rM({setHeaderMode:n}){return bt.useLayoutEffect(()=>{n(he.GRADIENT_DARK)},[n]),y.jsx(LD,{})}function aM({setHeaderMode:n}){return bt.useLayoutEffect(()=>{n(he.DARK)},[n]),y.jsx(HN,{})}function sM({setHeaderMode:n}){return bt.useLayoutEffect(()=>{n(he.LIGHT)},[n]),y.jsx(P9,{})}function oM({setHeaderMode:n}){return bt.useLayoutEffect(()=>{n(he.DARK)},[n]),y.jsx(G9,{})}function lM(){const[n,t]=L.useState(he.GRADIENT);return y.jsxs(zS,{basename:"/",children:[y.jsx(J9,{}),y.jsx(gS,{children:y.jsxs(wi,{element:y.jsx(tM,{headerMode:n,setHeaderMode:t}),children:[y.jsx(wi,{index:!0,element:y.jsx(rM,{setHeaderMode:t})}),y.jsx(wi,{path:"projects/",element:y.jsx(iM,{setHeaderMode:t})}),y.jsx(wi,{path:"peoples/",element:y.jsx(nM,{setHeaderMode:t})}),y.jsx(wi,{path:"guestbook/",element:y.jsx(aM,{setHeaderMode:t})}),y.jsx(wi,{path:"work/:pid",element:y.jsx(sM,{setHeaderMode:t})}),y.jsx(wi,{path:"credits/",element:y.jsx(eM,{setHeaderMode:t})}),y.jsx(wi,{path:"showroom/",element:y.jsx(oM,{setHeaderMode:t})}),y.jsx(wi,{path:"*",element:y.jsx(fS,{to:"/",replace:!0})})]})})]})}const Q_=typeof document<"u"?document.getElementById("root"):null;Q_&&Z9.createRoot(Q_).render(y.jsx(lM,{}));
