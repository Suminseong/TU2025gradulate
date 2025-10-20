(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(o){if(o.ep)return;o.ep=!0;const u=i(o);fetch(o.href,u)}})();function O_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var cp={exports:{}},Ol={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ox;function eT(){if(ox)return Ol;ox=1;var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(a,o,u){var d=null;if(u!==void 0&&(d=""+u),o.key!==void 0&&(d=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:n,type:a,key:d,ref:o!==void 0?o:null,props:u}}return Ol.Fragment=t,Ol.jsx=i,Ol.jsxs=i,Ol}var lx;function nT(){return lx||(lx=1,cp.exports=eT()),cp.exports}var y=nT(),hp={exports:{}},Dt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ux;function iT(){if(ux)return Dt;ux=1;var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),w=Symbol.iterator;function T(V){return V===null||typeof V!="object"?null:(V=w&&V[w]||V["@@iterator"],typeof V=="function"?V:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,L={};function U(V,at,ct){this.props=V,this.context=at,this.refs=L,this.updater=ct||R}U.prototype.isReactComponent={},U.prototype.setState=function(V,at){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,at,"setState")},U.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function K(){}K.prototype=U.prototype;function X(V,at,ct){this.props=V,this.context=at,this.refs=L,this.updater=ct||R}var tt=X.prototype=new K;tt.constructor=X,M(tt,U.prototype),tt.isPureReactComponent=!0;var lt=Array.isArray,Y={H:null,A:null,T:null,S:null,V:null},ot=Object.prototype.hasOwnProperty;function j(V,at,ct,ht,gt,Ct){return ct=Ct.ref,{$$typeof:n,type:V,key:at,ref:ct!==void 0?ct:null,props:Ct}}function I(V,at){return j(V.type,at,void 0,void 0,void 0,V.props)}function C(V){return typeof V=="object"&&V!==null&&V.$$typeof===n}function O(V){var at={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(ct){return at[ct]})}var k=/\/+/g;function z(V,at){return typeof V=="object"&&V!==null&&V.key!=null?O(""+V.key):at.toString(36)}function D(){}function se(V){switch(V.status){case"fulfilled":return V.value;case"rejected":throw V.reason;default:switch(typeof V.status=="string"?V.then(D,D):(V.status="pending",V.then(function(at){V.status==="pending"&&(V.status="fulfilled",V.value=at)},function(at){V.status==="pending"&&(V.status="rejected",V.reason=at)})),V.status){case"fulfilled":return V.value;case"rejected":throw V.reason}}throw V}function qt(V,at,ct,ht,gt){var Ct=typeof V;(Ct==="undefined"||Ct==="boolean")&&(V=null);var _t=!1;if(V===null)_t=!0;else switch(Ct){case"bigint":case"string":case"number":_t=!0;break;case"object":switch(V.$$typeof){case n:case t:_t=!0;break;case v:return _t=V._init,qt(_t(V._payload),at,ct,ht,gt)}}if(_t)return gt=gt(V),_t=ht===""?"."+z(V,0):ht,lt(gt)?(ct="",_t!=null&&(ct=_t.replace(k,"$&/")+"/"),qt(gt,at,ct,"",function(Me){return Me})):gt!=null&&(C(gt)&&(gt=I(gt,ct+(gt.key==null||V&&V.key===gt.key?"":(""+gt.key).replace(k,"$&/")+"/")+_t)),at.push(gt)),1;_t=0;var ge=ht===""?".":ht+":";if(lt(V))for(var Lt=0;Lt<V.length;Lt++)ht=V[Lt],Ct=ge+z(ht,Lt),_t+=qt(ht,at,ct,Ct,gt);else if(Lt=T(V),typeof Lt=="function")for(V=Lt.call(V),Lt=0;!(ht=V.next()).done;)ht=ht.value,Ct=ge+z(ht,Lt++),_t+=qt(ht,at,ct,Ct,gt);else if(Ct==="object"){if(typeof V.then=="function")return qt(se(V),at,ct,ht,gt);throw at=String(V),Error("Objects are not valid as a React child (found: "+(at==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":at)+"). If you meant to render a collection of children, use an array instead.")}return _t}function J(V,at,ct){if(V==null)return V;var ht=[],gt=0;return qt(V,ht,"","",function(Ct){return at.call(ct,Ct,gt++)}),ht}function dt(V){if(V._status===-1){var at=V._result;at=at(),at.then(function(ct){(V._status===0||V._status===-1)&&(V._status=1,V._result=ct)},function(ct){(V._status===0||V._status===-1)&&(V._status=2,V._result=ct)}),V._status===-1&&(V._status=0,V._result=at)}if(V._status===1)return V._result.default;throw V._result}var yt=typeof reportError=="function"?reportError:function(V){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var at=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof V=="object"&&V!==null&&typeof V.message=="string"?String(V.message):String(V),error:V});if(!window.dispatchEvent(at))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",V);return}console.error(V)};function jt(){}return Dt.Children={map:J,forEach:function(V,at,ct){J(V,function(){at.apply(this,arguments)},ct)},count:function(V){var at=0;return J(V,function(){at++}),at},toArray:function(V){return J(V,function(at){return at})||[]},only:function(V){if(!C(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Dt.Component=U,Dt.Fragment=i,Dt.Profiler=o,Dt.PureComponent=X,Dt.StrictMode=a,Dt.Suspense=p,Dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Y,Dt.__COMPILER_RUNTIME={__proto__:null,c:function(V){return Y.H.useMemoCache(V)}},Dt.cache=function(V){return function(){return V.apply(null,arguments)}},Dt.cloneElement=function(V,at,ct){if(V==null)throw Error("The argument must be a React element, but you passed "+V+".");var ht=M({},V.props),gt=V.key,Ct=void 0;if(at!=null)for(_t in at.ref!==void 0&&(Ct=void 0),at.key!==void 0&&(gt=""+at.key),at)!ot.call(at,_t)||_t==="key"||_t==="__self"||_t==="__source"||_t==="ref"&&at.ref===void 0||(ht[_t]=at[_t]);var _t=arguments.length-2;if(_t===1)ht.children=ct;else if(1<_t){for(var ge=Array(_t),Lt=0;Lt<_t;Lt++)ge[Lt]=arguments[Lt+2];ht.children=ge}return j(V.type,gt,void 0,void 0,Ct,ht)},Dt.createContext=function(V){return V={$$typeof:d,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null},V.Provider=V,V.Consumer={$$typeof:u,_context:V},V},Dt.createElement=function(V,at,ct){var ht,gt={},Ct=null;if(at!=null)for(ht in at.key!==void 0&&(Ct=""+at.key),at)ot.call(at,ht)&&ht!=="key"&&ht!=="__self"&&ht!=="__source"&&(gt[ht]=at[ht]);var _t=arguments.length-2;if(_t===1)gt.children=ct;else if(1<_t){for(var ge=Array(_t),Lt=0;Lt<_t;Lt++)ge[Lt]=arguments[Lt+2];gt.children=ge}if(V&&V.defaultProps)for(ht in _t=V.defaultProps,_t)gt[ht]===void 0&&(gt[ht]=_t[ht]);return j(V,Ct,void 0,void 0,null,gt)},Dt.createRef=function(){return{current:null}},Dt.forwardRef=function(V){return{$$typeof:m,render:V}},Dt.isValidElement=C,Dt.lazy=function(V){return{$$typeof:v,_payload:{_status:-1,_result:V},_init:dt}},Dt.memo=function(V,at){return{$$typeof:g,type:V,compare:at===void 0?null:at}},Dt.startTransition=function(V){var at=Y.T,ct={};Y.T=ct;try{var ht=V(),gt=Y.S;gt!==null&&gt(ct,ht),typeof ht=="object"&&ht!==null&&typeof ht.then=="function"&&ht.then(jt,yt)}catch(Ct){yt(Ct)}finally{Y.T=at}},Dt.unstable_useCacheRefresh=function(){return Y.H.useCacheRefresh()},Dt.use=function(V){return Y.H.use(V)},Dt.useActionState=function(V,at,ct){return Y.H.useActionState(V,at,ct)},Dt.useCallback=function(V,at){return Y.H.useCallback(V,at)},Dt.useContext=function(V){return Y.H.useContext(V)},Dt.useDebugValue=function(){},Dt.useDeferredValue=function(V,at){return Y.H.useDeferredValue(V,at)},Dt.useEffect=function(V,at,ct){var ht=Y.H;if(typeof ct=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ht.useEffect(V,at)},Dt.useId=function(){return Y.H.useId()},Dt.useImperativeHandle=function(V,at,ct){return Y.H.useImperativeHandle(V,at,ct)},Dt.useInsertionEffect=function(V,at){return Y.H.useInsertionEffect(V,at)},Dt.useLayoutEffect=function(V,at){return Y.H.useLayoutEffect(V,at)},Dt.useMemo=function(V,at){return Y.H.useMemo(V,at)},Dt.useOptimistic=function(V,at){return Y.H.useOptimistic(V,at)},Dt.useReducer=function(V,at,ct){return Y.H.useReducer(V,at,ct)},Dt.useRef=function(V){return Y.H.useRef(V)},Dt.useState=function(V){return Y.H.useState(V)},Dt.useSyncExternalStore=function(V,at,ct){return Y.H.useSyncExternalStore(V,at,ct)},Dt.useTransition=function(){return Y.H.useTransition()},Dt.version="19.1.1",Dt}var cx;function km(){return cx||(cx=1,hp.exports=iT()),hp.exports}var B=km();const St=O_(B);/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var hx="popstate";function rT(n={}){function t(a,o){let{pathname:u,search:d,hash:m}=a.location;return Wp("",{pathname:u,search:d,hash:m},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function i(a,o){return typeof o=="string"?o:Zl(o)}return sT(t,i,null,n)}function de(n,t){if(n===!1||n===null||typeof n>"u")throw new Error(t)}function ri(n,t){if(!n){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function aT(){return Math.random().toString(36).substring(2,10)}function dx(n,t){return{usr:n.state,key:n.key,idx:t}}function Wp(n,t,i=null,a){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof t=="string"?xo(t):t,state:i,key:t&&t.key||a||aT()}}function Zl({pathname:n="/",search:t="",hash:i=""}){return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(n+=i.charAt(0)==="#"?i:"#"+i),n}function xo(n){let t={};if(n){let i=n.indexOf("#");i>=0&&(t.hash=n.substring(i),n=n.substring(0,i));let a=n.indexOf("?");a>=0&&(t.search=n.substring(a),n=n.substring(0,a)),n&&(t.pathname=n)}return t}function sT(n,t,i,a={}){let{window:o=document.defaultView,v5Compat:u=!1}=a,d=o.history,m="POP",p=null,g=v();g==null&&(g=0,d.replaceState({...d.state,idx:g},""));function v(){return(d.state||{idx:null}).idx}function w(){m="POP";let U=v(),K=U==null?null:U-g;g=U,p&&p({action:m,location:L.location,delta:K})}function T(U,K){m="PUSH";let X=Wp(L.location,U,K);g=v()+1;let tt=dx(X,g),lt=L.createHref(X);try{d.pushState(tt,"",lt)}catch(Y){if(Y instanceof DOMException&&Y.name==="DataCloneError")throw Y;o.location.assign(lt)}u&&p&&p({action:m,location:L.location,delta:1})}function R(U,K){m="REPLACE";let X=Wp(L.location,U,K);g=v();let tt=dx(X,g),lt=L.createHref(X);d.replaceState(tt,"",lt),u&&p&&p({action:m,location:L.location,delta:0})}function M(U){return oT(U)}let L={get action(){return m},get location(){return n(o,d)},listen(U){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(hx,w),p=U,()=>{o.removeEventListener(hx,w),p=null}},createHref(U){return t(o,U)},createURL:M,encodeLocation(U){let K=M(U);return{pathname:K.pathname,search:K.search,hash:K.hash}},push:T,replace:R,go(U){return d.go(U)}};return L}function oT(n,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),de(i,"No window.location.(origin|href) available to create URL");let a=typeof n=="string"?n:Zl(n);return a=a.replace(/ $/,"%20"),!t&&a.startsWith("//")&&(a=i+a),new URL(a,i)}function V_(n,t,i="/"){return lT(n,t,i,!1)}function lT(n,t,i,a){let o=typeof t=="string"?xo(t):t,u=ar(o.pathname||"/",i);if(u==null)return null;let d=k_(n);uT(d);let m=null;for(let p=0;m==null&&p<d.length;++p){let g=_T(u);m=xT(d[p],g,a)}return m}function k_(n,t=[],i=[],a="",o=!1){let u=(d,m,p=o,g)=>{let v={relativePath:g===void 0?d.path||"":g,caseSensitive:d.caseSensitive===!0,childrenIndex:m,route:d};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(a)&&p)return;de(v.relativePath.startsWith(a),`Absolute route path "${v.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(a.length)}let w=nr([a,v.relativePath]),T=i.concat(v);d.children&&d.children.length>0&&(de(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),k_(d.children,t,T,w,p)),!(d.path==null&&!d.index)&&t.push({path:w,score:gT(w,d.index),routesMeta:T})};return n.forEach((d,m)=>{if(d.path===""||!d.path?.includes("?"))u(d,m);else for(let p of P_(d.path))u(d,m,!0,p)}),t}function P_(n){let t=n.split("/");if(t.length===0)return[];let[i,...a]=t,o=i.endsWith("?"),u=i.replace(/\?$/,"");if(a.length===0)return o?[u,""]:[u];let d=P_(a.join("/")),m=[];return m.push(...d.map(p=>p===""?u:[u,p].join("/"))),o&&m.push(...d),m.map(p=>n.startsWith("/")&&p===""?"/":p)}function uT(n){n.sort((t,i)=>t.score!==i.score?i.score-t.score:yT(t.routesMeta.map(a=>a.childrenIndex),i.routesMeta.map(a=>a.childrenIndex)))}var cT=/^:[\w-]+$/,hT=3,dT=2,fT=1,pT=10,mT=-2,fx=n=>n==="*";function gT(n,t){let i=n.split("/"),a=i.length;return i.some(fx)&&(a+=mT),t&&(a+=dT),i.filter(o=>!fx(o)).reduce((o,u)=>o+(cT.test(u)?hT:u===""?fT:pT),a)}function yT(n,t){return n.length===t.length&&n.slice(0,-1).every((a,o)=>a===t[o])?n[n.length-1]-t[t.length-1]:0}function xT(n,t,i=!1){let{routesMeta:a}=n,o={},u="/",d=[];for(let m=0;m<a.length;++m){let p=a[m],g=m===a.length-1,v=u==="/"?t:t.slice(u.length)||"/",w=_h({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},v),T=p.route;if(!w&&g&&i&&!a[a.length-1].route.index&&(w=_h({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},v)),!w)return null;Object.assign(o,w.params),d.push({params:o,pathname:nr([u,w.pathname]),pathnameBase:TT(nr([u,w.pathnameBase])),route:T}),w.pathnameBase!=="/"&&(u=nr([u,w.pathnameBase]))}return d}function _h(n,t){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[i,a]=vT(n.path,n.caseSensitive,n.end),o=t.match(i);if(!o)return null;let u=o[0],d=u.replace(/(.)\/+$/,"$1"),m=o.slice(1);return{params:a.reduce((g,{paramName:v,isOptional:w},T)=>{if(v==="*"){let M=m[T]||"";d=u.slice(0,u.length-M.length).replace(/(.)\/+$/,"$1")}const R=m[T];return w&&!R?g[v]=void 0:g[v]=(R||"").replace(/%2F/g,"/"),g},{}),pathname:u,pathnameBase:d,pattern:n}}function vT(n,t=!1,i=!0){ri(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let a=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,m,p)=>(a.push({paramName:m,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(a.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),a]}function _T(n){try{return n.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ri(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),n}}function ar(n,t){if(t==="/")return n;if(!n.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,a=n.charAt(i);return a&&a!=="/"?null:n.slice(i)||"/"}function ET(n,t="/"){let{pathname:i,search:a="",hash:o=""}=typeof n=="string"?xo(n):n;return{pathname:i?i.startsWith("/")?i:wT(i,t):t,search:ST(a),hash:AT(o)}}function wT(n,t){let i=t.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?i.length>1&&i.pop():o!=="."&&i.push(o)}),i.length>1?i.join("/"):"/"}function dp(n,t,i,a){return`Cannot include a '${n}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function bT(n){return n.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function Pm(n){let t=bT(n);return t.map((i,a)=>a===t.length-1?i.pathname:i.pathnameBase)}function Um(n,t,i,a=!1){let o;typeof n=="string"?o=xo(n):(o={...n},de(!o.pathname||!o.pathname.includes("?"),dp("?","pathname","search",o)),de(!o.pathname||!o.pathname.includes("#"),dp("#","pathname","hash",o)),de(!o.search||!o.search.includes("#"),dp("#","search","hash",o)));let u=n===""||o.pathname==="",d=u?"/":o.pathname,m;if(d==null)m=i;else{let w=t.length-1;if(!a&&d.startsWith("..")){let T=d.split("/");for(;T[0]==="..";)T.shift(),w-=1;o.pathname=T.join("/")}m=w>=0?t[w]:"/"}let p=ET(o,m),g=d&&d!=="/"&&d.endsWith("/"),v=(u||d===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(g||v)&&(p.pathname+="/"),p}var nr=n=>n.join("/").replace(/\/\/+/g,"/"),TT=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),ST=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,AT=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function RT(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var U_=["POST","PUT","PATCH","DELETE"];new Set(U_);var IT=["GET",...U_];new Set(IT);var vo=B.createContext(null);vo.displayName="DataRouter";var Lh=B.createContext(null);Lh.displayName="DataRouterState";B.createContext(!1);var L_=B.createContext({isTransitioning:!1});L_.displayName="ViewTransition";var jT=B.createContext(new Map);jT.displayName="Fetchers";var CT=B.createContext(null);CT.displayName="Await";var si=B.createContext(null);si.displayName="Navigation";var _o=B.createContext(null);_o.displayName="Location";var Kn=B.createContext({outlet:null,matches:[],isDataRoute:!1});Kn.displayName="Route";var Lm=B.createContext(null);Lm.displayName="RouteError";function DT(n,{relative:t}={}){de(Eo(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:a}=B.useContext(si),{hash:o,pathname:u,search:d}=fu(n,{relative:t}),m=u;return i!=="/"&&(m=u==="/"?i:nr([i,u])),a.createHref({pathname:m,search:d,hash:o})}function Eo(){return B.useContext(_o)!=null}function Ci(){return de(Eo(),"useLocation() may be used only in the context of a <Router> component."),B.useContext(_o).location}function NT(){return B.useContext(_o).navigationType}var z_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function $_(n){B.useContext(si).static||B.useLayoutEffect(n)}function zh(){let{isDataRoute:n}=B.useContext(Kn);return n?YT():MT()}function MT(){de(Eo(),"useNavigate() may be used only in the context of a <Router> component.");let n=B.useContext(vo),{basename:t,navigator:i}=B.useContext(si),{matches:a}=B.useContext(Kn),{pathname:o}=Ci(),u=JSON.stringify(Pm(a)),d=B.useRef(!1);return $_(()=>{d.current=!0}),B.useCallback((p,g={})=>{if(ri(d.current,z_),!d.current)return;if(typeof p=="number"){i.go(p);return}let v=Um(p,JSON.parse(u),o,g.relative==="path");n==null&&t!=="/"&&(v.pathname=v.pathname==="/"?t:nr([t,v.pathname])),(g.replace?i.replace:i.push)(v,g.state,g)},[t,i,u,o,n])}var OT=B.createContext(null);function VT(n){let t=B.useContext(Kn).outlet;return t&&B.createElement(OT.Provider,{value:n},t)}function kT(){let{matches:n}=B.useContext(Kn),t=n[n.length-1];return t?t.params:{}}function fu(n,{relative:t}={}){let{matches:i}=B.useContext(Kn),{pathname:a}=Ci(),o=JSON.stringify(Pm(i));return B.useMemo(()=>Um(n,JSON.parse(o),a,t==="path"),[n,o,a,t])}function PT(n,t){return B_(n,t)}function B_(n,t,i,a,o){de(Eo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=B.useContext(si),{matches:d}=B.useContext(Kn),m=d[d.length-1],p=m?m.params:{},g=m?m.pathname:"/",v=m?m.pathnameBase:"/",w=m&&m.route;{let X=w&&w.path||"";F_(g,!w||X.endsWith("*")||X.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${X}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${X}"> to <Route path="${X==="/"?"*":`${X}/*`}">.`)}let T=Ci(),R;if(t){let X=typeof t=="string"?xo(t):t;de(v==="/"||X.pathname?.startsWith(v),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${X.pathname}" was given in the \`location\` prop.`),R=X}else R=T;let M=R.pathname||"/",L=M;if(v!=="/"){let X=v.replace(/^\//,"").split("/");L="/"+M.replace(/^\//,"").split("/").slice(X.length).join("/")}let U=V_(n,{pathname:L});ri(w||U!=null,`No routes matched location "${R.pathname}${R.search}${R.hash}" `),ri(U==null||U[U.length-1].route.element!==void 0||U[U.length-1].route.Component!==void 0||U[U.length-1].route.lazy!==void 0,`Matched leaf route at location "${R.pathname}${R.search}${R.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let K=BT(U&&U.map(X=>Object.assign({},X,{params:Object.assign({},p,X.params),pathname:nr([v,u.encodeLocation?u.encodeLocation(X.pathname).pathname:X.pathname]),pathnameBase:X.pathnameBase==="/"?v:nr([v,u.encodeLocation?u.encodeLocation(X.pathnameBase).pathname:X.pathnameBase])})),d,i,a,o);return t&&K?B.createElement(_o.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...R},navigationType:"POP"}},K):K}function UT(){let n=GT(),t=RT(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),i=n instanceof Error?n.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},u={padding:"2px 4px",backgroundColor:a},d=null;return console.error("Error handled by React Router default ErrorBoundary:",n),d=B.createElement(B.Fragment,null,B.createElement("p",null,"💿 Hey developer 👋"),B.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",B.createElement("code",{style:u},"ErrorBoundary")," or"," ",B.createElement("code",{style:u},"errorElement")," prop on your route.")),B.createElement(B.Fragment,null,B.createElement("h2",null,"Unexpected Application Error!"),B.createElement("h3",{style:{fontStyle:"italic"}},t),i?B.createElement("pre",{style:o},i):null,d)}var LT=B.createElement(UT,null),zT=class extends B.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){this.props.unstable_onError?this.props.unstable_onError(n,t):console.error("React Router caught the following error during render",n)}render(){return this.state.error!==void 0?B.createElement(Kn.Provider,{value:this.props.routeContext},B.createElement(Lm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function $T({routeContext:n,match:t,children:i}){let a=B.useContext(vo);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),B.createElement(Kn.Provider,{value:n},i)}function BT(n,t=[],i=null,a=null,o=null){if(n==null){if(!i)return null;if(i.errors)n=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)n=i.matches;else return null}let u=n,d=i?.errors;if(d!=null){let g=u.findIndex(v=>v.route.id&&d?.[v.route.id]!==void 0);de(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),u=u.slice(0,Math.min(u.length,g+1))}let m=!1,p=-1;if(i)for(let g=0;g<u.length;g++){let v=u[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(p=g),v.route.id){let{loaderData:w,errors:T}=i,R=v.route.loader&&!w.hasOwnProperty(v.route.id)&&(!T||T[v.route.id]===void 0);if(v.route.lazy||R){m=!0,p>=0?u=u.slice(0,p+1):u=[u[0]];break}}}return u.reduceRight((g,v,w)=>{let T,R=!1,M=null,L=null;i&&(T=d&&v.route.id?d[v.route.id]:void 0,M=v.route.errorElement||LT,m&&(p<0&&w===0?(F_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),R=!0,L=null):p===w&&(R=!0,L=v.route.hydrateFallbackElement||null)));let U=t.concat(u.slice(0,w+1)),K=()=>{let X;return T?X=M:R?X=L:v.route.Component?X=B.createElement(v.route.Component,null):v.route.element?X=v.route.element:X=g,B.createElement($T,{match:v,routeContext:{outlet:g,matches:U,isDataRoute:i!=null},children:X})};return i&&(v.route.ErrorBoundary||v.route.errorElement||w===0)?B.createElement(zT,{location:i.location,revalidation:i.revalidation,component:M,error:T,children:K(),routeContext:{outlet:null,matches:U,isDataRoute:!0},unstable_onError:a}):K()},null)}function zm(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function FT(n){let t=B.useContext(vo);return de(t,zm(n)),t}function qT(n){let t=B.useContext(Lh);return de(t,zm(n)),t}function KT(n){let t=B.useContext(Kn);return de(t,zm(n)),t}function $m(n){let t=KT(n),i=t.matches[t.matches.length-1];return de(i.route.id,`${n} can only be used on routes that contain a unique "id"`),i.route.id}function HT(){return $m("useRouteId")}function GT(){let n=B.useContext(Lm),t=qT("useRouteError"),i=$m("useRouteError");return n!==void 0?n:t.errors?.[i]}function YT(){let{router:n}=FT("useNavigate"),t=$m("useNavigate"),i=B.useRef(!1);return $_(()=>{i.current=!0}),B.useCallback(async(o,u={})=>{ri(i.current,z_),i.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:t,...u}))},[n,t])}var px={};function F_(n,t,i){!t&&!px[n]&&(px[n]=!0,ri(!1,i))}B.memo(QT);function QT({routes:n,future:t,state:i,unstable_onError:a}){return B_(n,void 0,i,a,t)}function XT({to:n,replace:t,state:i,relative:a}){de(Eo(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=B.useContext(si);ri(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=B.useContext(Kn),{pathname:d}=Ci(),m=zh(),p=Um(n,Pm(u),d,a==="path"),g=JSON.stringify(p);return B.useEffect(()=>{m(JSON.parse(g),{replace:t,state:i,relative:a})},[m,g,a,t,i]),null}function WT(n){return VT(n.context)}function Ei(n){de(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ZT({basename:n="/",children:t=null,location:i,navigationType:a="POP",navigator:o,static:u=!1}){de(!Eo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=n.replace(/^\/*/,"/"),m=B.useMemo(()=>({basename:d,navigator:o,static:u,future:{}}),[d,o,u]);typeof i=="string"&&(i=xo(i));let{pathname:p="/",search:g="",hash:v="",state:w=null,key:T="default"}=i,R=B.useMemo(()=>{let M=ar(p,d);return M==null?null:{location:{pathname:M,search:g,hash:v,state:w,key:T},navigationType:a}},[d,p,g,v,w,T,a]);return ri(R!=null,`<Router basename="${d}"> is not able to match the URL "${p}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),R==null?null:B.createElement(si.Provider,{value:m},B.createElement(_o.Provider,{children:t,value:R}))}function JT({children:n,location:t}){return PT(Zp(n),t)}function Zp(n,t=[]){let i=[];return B.Children.forEach(n,(a,o)=>{if(!B.isValidElement(a))return;let u=[...t,o];if(a.type===B.Fragment){i.push.apply(i,Zp(a.props.children,u));return}de(a.type===Ei,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),de(!a.props.index||!a.props.children,"An index route cannot have child routes.");let d={id:a.props.id||u.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(d.children=Zp(a.props.children,u)),i.push(d)}),i}var ih="get",rh="application/x-www-form-urlencoded";function $h(n){return n!=null&&typeof n.tagName=="string"}function tS(n){return $h(n)&&n.tagName.toLowerCase()==="button"}function eS(n){return $h(n)&&n.tagName.toLowerCase()==="form"}function nS(n){return $h(n)&&n.tagName.toLowerCase()==="input"}function iS(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function rS(n,t){return n.button===0&&(!t||t==="_self")&&!iS(n)}var Fc=null;function aS(){if(Fc===null)try{new FormData(document.createElement("form"),0),Fc=!1}catch{Fc=!0}return Fc}var sS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function fp(n){return n!=null&&!sS.has(n)?(ri(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${rh}"`),null):n}function oS(n,t){let i,a,o,u,d;if(eS(n)){let m=n.getAttribute("action");a=m?ar(m,t):null,i=n.getAttribute("method")||ih,o=fp(n.getAttribute("enctype"))||rh,u=new FormData(n)}else if(tS(n)||nS(n)&&(n.type==="submit"||n.type==="image")){let m=n.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||m.getAttribute("action");if(a=p?ar(p,t):null,i=n.getAttribute("formmethod")||m.getAttribute("method")||ih,o=fp(n.getAttribute("formenctype"))||fp(m.getAttribute("enctype"))||rh,u=new FormData(m,n),!aS()){let{name:g,type:v,value:w}=n;if(v==="image"){let T=g?`${g}.`:"";u.append(`${T}x`,"0"),u.append(`${T}y`,"0")}else g&&u.append(g,w)}}else{if($h(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=ih,a=null,o=rh,d=n}return u&&o==="text/plain"&&(d=u,u=void 0),{action:a,method:i.toLowerCase(),encType:o,formData:u,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Bm(n,t){if(n===!1||n===null||typeof n>"u")throw new Error(t)}function lS(n,t,i){let a=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return a.pathname==="/"?a.pathname=`_root.${i}`:t&&ar(a.pathname,t)==="/"?a.pathname=`${t.replace(/\/$/,"")}/_root.${i}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${i}`,a}async function uS(n,t){if(n.id in t)return t[n.id];try{let i=await import(n.module);return t[n.id]=i,i}catch(i){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function cS(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function hS(n,t,i){let a=await Promise.all(n.map(async o=>{let u=t.routes[o.route.id];if(u){let d=await uS(u,i);return d.links?d.links():[]}return[]}));return mS(a.flat(1).filter(cS).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function mx(n,t,i,a,o,u){let d=(p,g)=>i[g]?p.route.id!==i[g].route.id:!0,m=(p,g)=>i[g].pathname!==p.pathname||i[g].route.path?.endsWith("*")&&i[g].params["*"]!==p.params["*"];return u==="assets"?t.filter((p,g)=>d(p,g)||m(p,g)):u==="data"?t.filter((p,g)=>{let v=a.routes[p.route.id];if(!v||!v.hasLoader)return!1;if(d(p,g)||m(p,g))return!0;if(p.route.shouldRevalidate){let w=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function dS(n,t,{includeHydrateFallback:i}={}){return fS(n.map(a=>{let o=t.routes[a.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),i&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function fS(n){return[...new Set(n)]}function pS(n){let t={},i=Object.keys(n).sort();for(let a of i)t[a]=n[a];return t}function mS(n,t){let i=new Set;return new Set(t),n.reduce((a,o)=>{let u=JSON.stringify(pS(o));return i.has(u)||(i.add(u),a.push({key:u,link:o})),a},[])}function q_(){let n=B.useContext(vo);return Bm(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function gS(){let n=B.useContext(Lh);return Bm(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Fm=B.createContext(void 0);Fm.displayName="FrameworkContext";function K_(){let n=B.useContext(Fm);return Bm(n,"You must render this element inside a <HydratedRouter> element"),n}function yS(n,t){let i=B.useContext(Fm),[a,o]=B.useState(!1),[u,d]=B.useState(!1),{onFocus:m,onBlur:p,onMouseEnter:g,onMouseLeave:v,onTouchStart:w}=t,T=B.useRef(null);B.useEffect(()=>{if(n==="render"&&d(!0),n==="viewport"){let L=K=>{K.forEach(X=>{d(X.isIntersecting)})},U=new IntersectionObserver(L,{threshold:.5});return T.current&&U.observe(T.current),()=>{U.disconnect()}}},[n]),B.useEffect(()=>{if(a){let L=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(L)}}},[a]);let R=()=>{o(!0)},M=()=>{o(!1),d(!1)};return i?n!=="intent"?[u,T,{}]:[u,T,{onFocus:Vl(m,R),onBlur:Vl(p,M),onMouseEnter:Vl(g,R),onMouseLeave:Vl(v,M),onTouchStart:Vl(w,R)}]:[!1,T,{}]}function Vl(n,t){return i=>{n&&n(i),i.defaultPrevented||t(i)}}function xS({page:n,...t}){let{router:i}=q_(),a=B.useMemo(()=>V_(i.routes,n,i.basename),[i.routes,n,i.basename]);return a?B.createElement(_S,{page:n,matches:a,...t}):null}function vS(n){let{manifest:t,routeModules:i}=K_(),[a,o]=B.useState([]);return B.useEffect(()=>{let u=!1;return hS(n,t,i).then(d=>{u||o(d)}),()=>{u=!0}},[n,t,i]),a}function _S({page:n,matches:t,...i}){let a=Ci(),{manifest:o,routeModules:u}=K_(),{basename:d}=q_(),{loaderData:m,matches:p}=gS(),g=B.useMemo(()=>mx(n,t,p,o,a,"data"),[n,t,p,o,a]),v=B.useMemo(()=>mx(n,t,p,o,a,"assets"),[n,t,p,o,a]),w=B.useMemo(()=>{if(n===a.pathname+a.search+a.hash)return[];let M=new Set,L=!1;if(t.forEach(K=>{let X=o.routes[K.route.id];!X||!X.hasLoader||(!g.some(tt=>tt.route.id===K.route.id)&&K.route.id in m&&u[K.route.id]?.shouldRevalidate||X.hasClientLoader?L=!0:M.add(K.route.id))}),M.size===0)return[];let U=lS(n,d,"data");return L&&M.size>0&&U.searchParams.set("_routes",t.filter(K=>M.has(K.route.id)).map(K=>K.route.id).join(",")),[U.pathname+U.search]},[d,m,a,o,g,t,n,u]),T=B.useMemo(()=>dS(v,o),[v,o]),R=vS(v);return B.createElement(B.Fragment,null,w.map(M=>B.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...i})),T.map(M=>B.createElement("link",{key:M,rel:"modulepreload",href:M,...i})),R.map(({key:M,link:L})=>B.createElement("link",{key:M,nonce:i.nonce,...L})))}function ES(...n){return t=>{n.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var H_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{H_&&(window.__reactRouterVersion="7.9.1")}catch{}function wS({basename:n,children:t,window:i}){let a=B.useRef();a.current==null&&(a.current=rT({window:i,v5Compat:!0}));let o=a.current,[u,d]=B.useState({action:o.action,location:o.location}),m=B.useCallback(p=>{B.startTransition(()=>d(p))},[d]);return B.useLayoutEffect(()=>o.listen(m),[o,m]),B.createElement(ZT,{basename:n,children:t,location:u.location,navigationType:u.action,navigator:o})}var G_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,es=B.forwardRef(function({onClick:t,discover:i="render",prefetch:a="none",relative:o,reloadDocument:u,replace:d,state:m,target:p,to:g,preventScrollReset:v,viewTransition:w,...T},R){let{basename:M}=B.useContext(si),L=typeof g=="string"&&G_.test(g),U,K=!1;if(typeof g=="string"&&L&&(U=g,H_))try{let C=new URL(window.location.href),O=g.startsWith("//")?new URL(C.protocol+g):new URL(g),k=ar(O.pathname,M);O.origin===C.origin&&k!=null?g=k+O.search+O.hash:K=!0}catch{ri(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let X=DT(g,{relative:o}),[tt,lt,Y]=yS(a,T),ot=AS(g,{replace:d,state:m,target:p,preventScrollReset:v,relative:o,viewTransition:w});function j(C){t&&t(C),C.defaultPrevented||ot(C)}let I=B.createElement("a",{...T,...Y,href:U||X,onClick:K||u?t:j,ref:ES(R,lt),target:p,"data-discover":!L&&i==="render"?"true":void 0});return tt&&!L?B.createElement(B.Fragment,null,I,B.createElement(xS,{page:X})):I});es.displayName="Link";var bS=B.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:a="",end:o=!1,style:u,to:d,viewTransition:m,children:p,...g},v){let w=fu(d,{relative:g.relative}),T=Ci(),R=B.useContext(Lh),{navigator:M,basename:L}=B.useContext(si),U=R!=null&&DS(w)&&m===!0,K=M.encodeLocation?M.encodeLocation(w).pathname:w.pathname,X=T.pathname,tt=R&&R.navigation&&R.navigation.location?R.navigation.location.pathname:null;i||(X=X.toLowerCase(),tt=tt?tt.toLowerCase():null,K=K.toLowerCase()),tt&&L&&(tt=ar(tt,L)||tt);const lt=K!=="/"&&K.endsWith("/")?K.length-1:K.length;let Y=X===K||!o&&X.startsWith(K)&&X.charAt(lt)==="/",ot=tt!=null&&(tt===K||!o&&tt.startsWith(K)&&tt.charAt(K.length)==="/"),j={isActive:Y,isPending:ot,isTransitioning:U},I=Y?t:void 0,C;typeof a=="function"?C=a(j):C=[a,Y?"active":null,ot?"pending":null,U?"transitioning":null].filter(Boolean).join(" ");let O=typeof u=="function"?u(j):u;return B.createElement(es,{...g,"aria-current":I,className:C,ref:v,style:O,to:d,viewTransition:m},typeof p=="function"?p(j):p)});bS.displayName="NavLink";var TS=B.forwardRef(({discover:n="render",fetcherKey:t,navigate:i,reloadDocument:a,replace:o,state:u,method:d=ih,action:m,onSubmit:p,relative:g,preventScrollReset:v,viewTransition:w,...T},R)=>{let M=jS(),L=CS(m,{relative:g}),U=d.toLowerCase()==="get"?"get":"post",K=typeof m=="string"&&G_.test(m),X=tt=>{if(p&&p(tt),tt.defaultPrevented)return;tt.preventDefault();let lt=tt.nativeEvent.submitter,Y=lt?.getAttribute("formmethod")||d;M(lt||tt.currentTarget,{fetcherKey:t,method:Y,navigate:i,replace:o,state:u,relative:g,preventScrollReset:v,viewTransition:w})};return B.createElement("form",{ref:R,method:U,action:L,onSubmit:a?p:X,...T,"data-discover":!K&&n==="render"?"true":void 0})});TS.displayName="Form";function SS(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Y_(n){let t=B.useContext(vo);return de(t,SS(n)),t}function AS(n,{target:t,replace:i,state:a,preventScrollReset:o,relative:u,viewTransition:d}={}){let m=zh(),p=Ci(),g=fu(n,{relative:u});return B.useCallback(v=>{if(rS(v,t)){v.preventDefault();let w=i!==void 0?i:Zl(p)===Zl(g);m(n,{replace:w,state:a,preventScrollReset:o,relative:u,viewTransition:d})}},[p,m,g,i,a,t,n,o,u,d])}var RS=0,IS=()=>`__${String(++RS)}__`;function jS(){let{router:n}=Y_("useSubmit"),{basename:t}=B.useContext(si),i=HT();return B.useCallback(async(a,o={})=>{let{action:u,method:d,encType:m,formData:p,body:g}=oS(a,t);if(o.navigate===!1){let v=o.fetcherKey||IS();await n.fetch(v,i,o.action||u,{preventScrollReset:o.preventScrollReset,formData:p,body:g,formMethod:o.method||d,formEncType:o.encType||m,flushSync:o.flushSync})}else await n.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:p,body:g,formMethod:o.method||d,formEncType:o.encType||m,replace:o.replace,state:o.state,fromRouteId:i,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,t,i])}function CS(n,{relative:t}={}){let{basename:i}=B.useContext(si),a=B.useContext(Kn);de(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),u={...fu(n||".",{relative:t})},d=Ci();if(n==null){u.search=d.search;let m=new URLSearchParams(u.search),p=m.getAll("index");if(p.some(v=>v==="")){m.delete("index"),p.filter(w=>w).forEach(w=>m.append("index",w));let v=m.toString();u.search=v?`?${v}`:""}}return(!n||n===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:nr([i,u.pathname])),Zl(u)}function DS(n,{relative:t}={}){let i=B.useContext(L_);de(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=Y_("useViewTransitionState"),o=fu(n,{relative:t});if(!i.isTransitioning)return!1;let u=ar(i.currentLocation.pathname,a)||i.currentLocation.pathname,d=ar(i.nextLocation.pathname,a)||i.nextLocation.pathname;return _h(o.pathname,d)!=null||_h(o.pathname,u)!=null}var pp={exports:{}},rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gx;function NS(){if(gx)return rn;gx=1;var n=km();function t(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,g,v){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:w==null?null:""+w,children:p,containerInfo:g,implementation:v}}var d=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,rn.createPortal=function(p,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return u(p,g,null,v)},rn.flushSync=function(p){var g=d.T,v=a.p;try{if(d.T=null,a.p=2,p)return p()}finally{d.T=g,a.p=v,a.d.f()}},rn.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,a.d.C(p,g))},rn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},rn.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var v=g.as,w=m(v,g.crossOrigin),T=typeof g.integrity=="string"?g.integrity:void 0,R=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?a.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:w,integrity:T,fetchPriority:R}):v==="script"&&a.d.X(p,{crossOrigin:w,integrity:T,fetchPriority:R,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},rn.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=m(g.as,g.crossOrigin);a.d.M(p,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&a.d.M(p)},rn.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,w=m(v,g.crossOrigin);a.d.L(p,v,{crossOrigin:w,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},rn.preloadModule=function(p,g){if(typeof p=="string")if(g){var v=m(g.as,g.crossOrigin);a.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else a.d.m(p)},rn.requestFormReset=function(p){a.d.r(p)},rn.unstable_batchedUpdates=function(p,g){return p(g)},rn.useFormState=function(p,g,v){return d.H.useFormState(p,g,v)},rn.useFormStatus=function(){return d.H.useHostTransitionStatus()},rn.version="19.1.1",rn}var yx;function MS(){if(yx)return pp.exports;yx=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}return n(),pp.exports=NS(),pp.exports}var mp={exports:{}},gp,xx;function OS(){if(xx)return gp;xx=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return gp=n,gp}var yp,vx;function VS(){if(vx)return yp;vx=1;var n=OS();function t(){}function i(){}return i.resetWarningCache=t,yp=function(){function a(d,m,p,g,v,w){if(w!==n){var T=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw T.name="Invariant Violation",T}}a.isRequired=a;function o(){return a}var u={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:o,element:a,elementType:a,instanceOf:o,node:a,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:i,resetWarningCache:t};return u.PropTypes=u,u},yp}var _x;function kS(){return _x||(_x=1,mp.exports=VS()()),mp.exports}var PS=kS();const Z=O_(PS);var _n=function(){return _n=Object.assign||function(t){for(var i,a=1,o=arguments.length;a<o;a++){i=arguments[a];for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&(t[u]=i[u])}return t},_n.apply(this,arguments)};function Jl(n,t,i){if(i||arguments.length===2)for(var a=0,o=t.length,u;a<o;a++)(u||!(a in t))&&(u||(u=Array.prototype.slice.call(t,0,a)),u[a]=t[a]);return n.concat(u||Array.prototype.slice.call(t))}var le="-ms-",Fl="-moz-",Gt="-webkit-",Q_="comm",Bh="rule",qm="decl",US="@import",X_="@keyframes",LS="@layer",W_=Math.abs,Km=String.fromCharCode,Jp=Object.assign;function zS(n,t){return He(n,0)^45?(((t<<2^He(n,0))<<2^He(n,1))<<2^He(n,2))<<2^He(n,3):0}function Z_(n){return n.trim()}function er(n,t){return(n=t.exec(n))?n[0]:n}function Nt(n,t,i){return n.replace(t,i)}function ah(n,t,i){return n.indexOf(t,i)}function He(n,t){return n.charCodeAt(t)|0}function ao(n,t,i){return n.slice(t,i)}function bi(n){return n.length}function J_(n){return n.length}function Ul(n,t){return t.push(n),n}function $S(n,t){return n.map(t).join("")}function Ex(n,t){return n.filter(function(i){return!er(i,t)})}var Fh=1,so=1,t2=0,qn=0,Ce=0,wo="";function qh(n,t,i,a,o,u,d,m){return{value:n,root:t,parent:i,type:a,props:o,children:u,line:Fh,column:so,length:d,return:"",siblings:m}}function Qr(n,t){return Jp(qh("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},t)}function Ys(n){for(;n.root;)n=Qr(n.root,{children:[n]});Ul(n,n.siblings)}function BS(){return Ce}function FS(){return Ce=qn>0?He(wo,--qn):0,so--,Ce===10&&(so=1,Fh--),Ce}function ii(){return Ce=qn<t2?He(wo,qn++):0,so++,Ce===10&&(so=1,Fh++),Ce}function Qa(){return He(wo,qn)}function sh(){return qn}function Kh(n,t){return ao(wo,n,t)}function tm(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function qS(n){return Fh=so=1,t2=bi(wo=n),qn=0,[]}function KS(n){return wo="",n}function xp(n){return Z_(Kh(qn-1,em(n===91?n+2:n===40?n+1:n)))}function HS(n){for(;(Ce=Qa())&&Ce<33;)ii();return tm(n)>2||tm(Ce)>3?"":" "}function GS(n,t){for(;--t&&ii()&&!(Ce<48||Ce>102||Ce>57&&Ce<65||Ce>70&&Ce<97););return Kh(n,sh()+(t<6&&Qa()==32&&ii()==32))}function em(n){for(;ii();)switch(Ce){case n:return qn;case 34:case 39:n!==34&&n!==39&&em(Ce);break;case 40:n===41&&em(n);break;case 92:ii();break}return qn}function YS(n,t){for(;ii()&&n+Ce!==57;)if(n+Ce===84&&Qa()===47)break;return"/*"+Kh(t,qn-1)+"*"+Km(n===47?n:ii())}function QS(n){for(;!tm(Qa());)ii();return Kh(n,qn)}function XS(n){return KS(oh("",null,null,null,[""],n=qS(n),0,[0],n))}function oh(n,t,i,a,o,u,d,m,p){for(var g=0,v=0,w=d,T=0,R=0,M=0,L=1,U=1,K=1,X=0,tt="",lt=o,Y=u,ot=a,j=tt;U;)switch(M=X,X=ii()){case 40:if(M!=108&&He(j,w-1)==58){ah(j+=Nt(xp(X),"&","&\f"),"&\f",W_(g?m[g-1]:0))!=-1&&(K=-1);break}case 34:case 39:case 91:j+=xp(X);break;case 9:case 10:case 13:case 32:j+=HS(M);break;case 92:j+=GS(sh()-1,7);continue;case 47:switch(Qa()){case 42:case 47:Ul(WS(YS(ii(),sh()),t,i,p),p);break;default:j+="/"}break;case 123*L:m[g++]=bi(j)*K;case 125*L:case 59:case 0:switch(X){case 0:case 125:U=0;case 59+v:K==-1&&(j=Nt(j,/\f/g,"")),R>0&&bi(j)-w&&Ul(R>32?bx(j+";",a,i,w-1,p):bx(Nt(j," ","")+";",a,i,w-2,p),p);break;case 59:j+=";";default:if(Ul(ot=wx(j,t,i,g,v,o,m,tt,lt=[],Y=[],w,u),u),X===123)if(v===0)oh(j,t,ot,ot,lt,u,w,m,Y);else switch(T===99&&He(j,3)===110?100:T){case 100:case 108:case 109:case 115:oh(n,ot,ot,a&&Ul(wx(n,ot,ot,0,0,o,m,tt,o,lt=[],w,Y),Y),o,Y,w,m,a?lt:Y);break;default:oh(j,ot,ot,ot,[""],Y,0,m,Y)}}g=v=R=0,L=K=1,tt=j="",w=d;break;case 58:w=1+bi(j),R=M;default:if(L<1){if(X==123)--L;else if(X==125&&L++==0&&FS()==125)continue}switch(j+=Km(X),X*L){case 38:K=v>0?1:(j+="\f",-1);break;case 44:m[g++]=(bi(j)-1)*K,K=1;break;case 64:Qa()===45&&(j+=xp(ii())),T=Qa(),v=w=bi(tt=j+=QS(sh())),X++;break;case 45:M===45&&bi(j)==2&&(L=0)}}return u}function wx(n,t,i,a,o,u,d,m,p,g,v,w){for(var T=o-1,R=o===0?u:[""],M=J_(R),L=0,U=0,K=0;L<a;++L)for(var X=0,tt=ao(n,T+1,T=W_(U=d[L])),lt=n;X<M;++X)(lt=Z_(U>0?R[X]+" "+tt:Nt(tt,/&\f/g,R[X])))&&(p[K++]=lt);return qh(n,t,i,o===0?Bh:m,p,g,v,w)}function WS(n,t,i,a){return qh(n,t,i,Q_,Km(BS()),ao(n,2,-2),0,a)}function bx(n,t,i,a,o){return qh(n,t,i,qm,ao(n,0,a),ao(n,a+1,-1),a,o)}function e2(n,t,i){switch(zS(n,t)){case 5103:return Gt+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Gt+n+n;case 4789:return Fl+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Gt+n+Fl+n+le+n+n;case 5936:switch(He(n,t+11)){case 114:return Gt+n+le+Nt(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Gt+n+le+Nt(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Gt+n+le+Nt(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Gt+n+le+n+n;case 6165:return Gt+n+le+"flex-"+n+n;case 5187:return Gt+n+Nt(n,/(\w+).+(:[^]+)/,Gt+"box-$1$2"+le+"flex-$1$2")+n;case 5443:return Gt+n+le+"flex-item-"+Nt(n,/flex-|-self/g,"")+(er(n,/flex-|baseline/)?"":le+"grid-row-"+Nt(n,/flex-|-self/g,""))+n;case 4675:return Gt+n+le+"flex-line-pack"+Nt(n,/align-content|flex-|-self/g,"")+n;case 5548:return Gt+n+le+Nt(n,"shrink","negative")+n;case 5292:return Gt+n+le+Nt(n,"basis","preferred-size")+n;case 6060:return Gt+"box-"+Nt(n,"-grow","")+Gt+n+le+Nt(n,"grow","positive")+n;case 4554:return Gt+Nt(n,/([^-])(transform)/g,"$1"+Gt+"$2")+n;case 6187:return Nt(Nt(Nt(n,/(zoom-|grab)/,Gt+"$1"),/(image-set)/,Gt+"$1"),n,"")+n;case 5495:case 3959:return Nt(n,/(image-set\([^]*)/,Gt+"$1$`$1");case 4968:return Nt(Nt(n,/(.+:)(flex-)?(.*)/,Gt+"box-pack:$3"+le+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Gt+n+n;case 4200:if(!er(n,/flex-|baseline/))return le+"grid-column-align"+ao(n,t)+n;break;case 2592:case 3360:return le+Nt(n,"template-","")+n;case 4384:case 3616:return i&&i.some(function(a,o){return t=o,er(a.props,/grid-\w+-end/)})?~ah(n+(i=i[t].value),"span",0)?n:le+Nt(n,"-start","")+n+le+"grid-row-span:"+(~ah(i,"span",0)?er(i,/\d+/):+er(i,/\d+/)-+er(n,/\d+/))+";":le+Nt(n,"-start","")+n;case 4896:case 4128:return i&&i.some(function(a){return er(a.props,/grid-\w+-start/)})?n:le+Nt(Nt(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Nt(n,/(.+)-inline(.+)/,Gt+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(bi(n)-1-t>6)switch(He(n,t+1)){case 109:if(He(n,t+4)!==45)break;case 102:return Nt(n,/(.+:)(.+)-([^]+)/,"$1"+Gt+"$2-$3$1"+Fl+(He(n,t+3)==108?"$3":"$2-$3"))+n;case 115:return~ah(n,"stretch",0)?e2(Nt(n,"stretch","fill-available"),t,i)+n:n}break;case 5152:case 5920:return Nt(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,o,u,d,m,p,g){return le+o+":"+u+g+(d?le+o+"-span:"+(m?p:+p-+u)+g:"")+n});case 4949:if(He(n,t+6)===121)return Nt(n,":",":"+Gt)+n;break;case 6444:switch(He(n,He(n,14)===45?18:11)){case 120:return Nt(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Gt+(He(n,14)===45?"inline-":"")+"box$3$1"+Gt+"$2$3$1"+le+"$2box$3")+n;case 100:return Nt(n,":",":"+le)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Nt(n,"scroll-","scroll-snap-")+n}return n}function Eh(n,t){for(var i="",a=0;a<n.length;a++)i+=t(n[a],a,n,t)||"";return i}function ZS(n,t,i,a){switch(n.type){case LS:if(n.children.length)break;case US:case qm:return n.return=n.return||n.value;case Q_:return"";case X_:return n.return=n.value+"{"+Eh(n.children,a)+"}";case Bh:if(!bi(n.value=n.props.join(",")))return""}return bi(i=Eh(n.children,a))?n.return=n.value+"{"+i+"}":""}function JS(n){var t=J_(n);return function(i,a,o,u){for(var d="",m=0;m<t;m++)d+=n[m](i,a,o,u)||"";return d}}function t4(n){return function(t){t.root||(t=t.return)&&n(t)}}function e4(n,t,i,a){if(n.length>-1&&!n.return)switch(n.type){case qm:n.return=e2(n.value,n.length,i);return;case X_:return Eh([Qr(n,{value:Nt(n.value,"@","@"+Gt)})],a);case Bh:if(n.length)return $S(i=n.props,function(o){switch(er(o,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ys(Qr(n,{props:[Nt(o,/:(read-\w+)/,":"+Fl+"$1")]})),Ys(Qr(n,{props:[o]})),Jp(n,{props:Ex(i,a)});break;case"::placeholder":Ys(Qr(n,{props:[Nt(o,/:(plac\w+)/,":"+Gt+"input-$1")]})),Ys(Qr(n,{props:[Nt(o,/:(plac\w+)/,":"+Fl+"$1")]})),Ys(Qr(n,{props:[Nt(o,/:(plac\w+)/,le+"input-$1")]})),Ys(Qr(n,{props:[o]})),Jp(n,{props:Ex(i,a)});break}return""})}}var n4={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},jn={},oo=typeof process<"u"&&jn!==void 0&&(jn.REACT_APP_SC_ATTR||jn.SC_ATTR)||"data-styled",n2="active",i2="data-styled-version",Hh="6.1.19",Hm=`/*!sc*/
`,wh=typeof window<"u"&&typeof document<"u",i4=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&jn!==void 0&&jn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&jn.REACT_APP_SC_DISABLE_SPEEDY!==""?jn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&jn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&jn!==void 0&&jn.SC_DISABLE_SPEEDY!==void 0&&jn.SC_DISABLE_SPEEDY!==""&&jn.SC_DISABLE_SPEEDY!=="false"&&jn.SC_DISABLE_SPEEDY),Gh=Object.freeze([]),lo=Object.freeze({});function r4(n,t,i){return i===void 0&&(i=lo),n.theme!==i.theme&&n.theme||t||i.theme}var r2=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),a4=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,s4=/(^-|-$)/g;function Tx(n){return n.replace(a4,"-").replace(s4,"")}var o4=/(a)(d)/gi,qc=52,Sx=function(n){return String.fromCharCode(n+(n>25?39:97))};function nm(n){var t,i="";for(t=Math.abs(n);t>qc;t=t/qc|0)i=Sx(t%qc)+i;return(Sx(t%qc)+i).replace(o4,"$1-$2")}var vp,a2=5381,eo=function(n,t){for(var i=t.length;i;)n=33*n^t.charCodeAt(--i);return n},s2=function(n){return eo(a2,n)};function o2(n){return nm(s2(n)>>>0)}function l4(n){return n.displayName||n.name||"Component"}function _p(n){return typeof n=="string"&&!0}var l2=typeof Symbol=="function"&&Symbol.for,u2=l2?Symbol.for("react.memo"):60115,u4=l2?Symbol.for("react.forward_ref"):60112,c4={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},h4={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},d4=((vp={})[u4]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},vp[u2]=c2,vp);function Ax(n){return("type"in(t=n)&&t.type.$$typeof)===u2?c2:"$$typeof"in n?d4[n.$$typeof]:c4;var t}var f4=Object.defineProperty,p4=Object.getOwnPropertyNames,Rx=Object.getOwnPropertySymbols,m4=Object.getOwnPropertyDescriptor,g4=Object.getPrototypeOf,Ix=Object.prototype;function h2(n,t,i){if(typeof t!="string"){if(Ix){var a=g4(t);a&&a!==Ix&&h2(n,a,i)}var o=p4(t);Rx&&(o=o.concat(Rx(t)));for(var u=Ax(n),d=Ax(t),m=0;m<o.length;++m){var p=o[m];if(!(p in h4||i&&i[p]||d&&p in d||u&&p in u)){var g=m4(t,p);try{f4(n,p,g)}catch{}}}}return n}function uo(n){return typeof n=="function"}function Gm(n){return typeof n=="object"&&"styledComponentId"in n}function Ga(n,t){return n&&t?"".concat(n," ").concat(t):n||t||""}function im(n,t){if(n.length===0)return"";for(var i=n[0],a=1;a<n.length;a++)i+=n[a];return i}function tu(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function rm(n,t,i){if(i===void 0&&(i=!1),!i&&!tu(n)&&!Array.isArray(n))return t;if(Array.isArray(t))for(var a=0;a<t.length;a++)n[a]=rm(n[a],t[a]);else if(tu(t))for(var a in t)n[a]=rm(n[a],t[a]);return n}function Ym(n,t){Object.defineProperty(n,"toString",{value:t})}function pu(n){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var y4=(function(){function n(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return n.prototype.indexOfGroup=function(t){for(var i=0,a=0;a<t;a++)i+=this.groupSizes[a];return i},n.prototype.insertRules=function(t,i){if(t>=this.groupSizes.length){for(var a=this.groupSizes,o=a.length,u=o;t>=u;)if((u<<=1)<0)throw pu(16,"".concat(t));this.groupSizes=new Uint32Array(u),this.groupSizes.set(a),this.length=u;for(var d=o;d<u;d++)this.groupSizes[d]=0}for(var m=this.indexOfGroup(t+1),p=(d=0,i.length);d<p;d++)this.tag.insertRule(m,i[d])&&(this.groupSizes[t]++,m++)},n.prototype.clearGroup=function(t){if(t<this.length){var i=this.groupSizes[t],a=this.indexOfGroup(t),o=a+i;this.groupSizes[t]=0;for(var u=a;u<o;u++)this.tag.deleteRule(a)}},n.prototype.getGroup=function(t){var i="";if(t>=this.length||this.groupSizes[t]===0)return i;for(var a=this.groupSizes[t],o=this.indexOfGroup(t),u=o+a,d=o;d<u;d++)i+="".concat(this.tag.getRule(d)).concat(Hm);return i},n})(),lh=new Map,bh=new Map,uh=1,Kc=function(n){if(lh.has(n))return lh.get(n);for(;bh.has(uh);)uh++;var t=uh++;return lh.set(n,t),bh.set(t,n),t},x4=function(n,t){uh=t+1,lh.set(n,t),bh.set(t,n)},v4="style[".concat(oo,"][").concat(i2,'="').concat(Hh,'"]'),_4=new RegExp("^".concat(oo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),E4=function(n,t,i){for(var a,o=i.split(","),u=0,d=o.length;u<d;u++)(a=o[u])&&n.registerName(t,a)},w4=function(n,t){for(var i,a=((i=t.textContent)!==null&&i!==void 0?i:"").split(Hm),o=[],u=0,d=a.length;u<d;u++){var m=a[u].trim();if(m){var p=m.match(_4);if(p){var g=0|parseInt(p[1],10),v=p[2];g!==0&&(x4(v,g),E4(n,v,p[3]),n.getTag().insertRules(g,o)),o.length=0}else o.push(m)}}},jx=function(n){for(var t=document.querySelectorAll(v4),i=0,a=t.length;i<a;i++){var o=t[i];o&&o.getAttribute(oo)!==n2&&(w4(n,o),o.parentNode&&o.parentNode.removeChild(o))}};function b4(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var d2=function(n){var t=document.head,i=n||t,a=document.createElement("style"),o=(function(m){var p=Array.from(m.querySelectorAll("style[".concat(oo,"]")));return p[p.length-1]})(i),u=o!==void 0?o.nextSibling:null;a.setAttribute(oo,n2),a.setAttribute(i2,Hh);var d=b4();return d&&a.setAttribute("nonce",d),i.insertBefore(a,u),a},T4=(function(){function n(t){this.element=d2(t),this.element.appendChild(document.createTextNode("")),this.sheet=(function(i){if(i.sheet)return i.sheet;for(var a=document.styleSheets,o=0,u=a.length;o<u;o++){var d=a[o];if(d.ownerNode===i)return d}throw pu(17)})(this.element),this.length=0}return n.prototype.insertRule=function(t,i){try{return this.sheet.insertRule(i,t),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},n.prototype.getRule=function(t){var i=this.sheet.cssRules[t];return i&&i.cssText?i.cssText:""},n})(),S4=(function(){function n(t){this.element=d2(t),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(t,i){if(t<=this.length&&t>=0){var a=document.createTextNode(i);return this.element.insertBefore(a,this.nodes[t]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},n.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},n})(),A4=(function(){function n(t){this.rules=[],this.length=0}return n.prototype.insertRule=function(t,i){return t<=this.length&&(this.rules.splice(t,0,i),this.length++,!0)},n.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},n.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},n})(),Cx=wh,R4={isServer:!wh,useCSSOMInjection:!i4},f2=(function(){function n(t,i,a){t===void 0&&(t=lo),i===void 0&&(i={});var o=this;this.options=_n(_n({},R4),t),this.gs=i,this.names=new Map(a),this.server=!!t.isServer,!this.server&&wh&&Cx&&(Cx=!1,jx(this)),Ym(this,function(){return(function(u){for(var d=u.getTag(),m=d.length,p="",g=function(w){var T=(function(K){return bh.get(K)})(w);if(T===void 0)return"continue";var R=u.names.get(T),M=d.getGroup(w);if(R===void 0||!R.size||M.length===0)return"continue";var L="".concat(oo,".g").concat(w,'[id="').concat(T,'"]'),U="";R!==void 0&&R.forEach(function(K){K.length>0&&(U+="".concat(K,","))}),p+="".concat(M).concat(L,'{content:"').concat(U,'"}').concat(Hm)},v=0;v<m;v++)g(v);return p})(o)})}return n.registerId=function(t){return Kc(t)},n.prototype.rehydrate=function(){!this.server&&wh&&jx(this)},n.prototype.reconstructWithOptions=function(t,i){return i===void 0&&(i=!0),new n(_n(_n({},this.options),t),this.gs,i&&this.names||void 0)},n.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(t=(function(i){var a=i.useCSSOMInjection,o=i.target;return i.isServer?new A4(o):a?new T4(o):new S4(o)})(this.options),new y4(t)));var t},n.prototype.hasNameForId=function(t,i){return this.names.has(t)&&this.names.get(t).has(i)},n.prototype.registerName=function(t,i){if(Kc(t),this.names.has(t))this.names.get(t).add(i);else{var a=new Set;a.add(i),this.names.set(t,a)}},n.prototype.insertRules=function(t,i,a){this.registerName(t,i),this.getTag().insertRules(Kc(t),a)},n.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},n.prototype.clearRules=function(t){this.getTag().clearGroup(Kc(t)),this.clearNames(t)},n.prototype.clearTag=function(){this.tag=void 0},n})(),I4=/&/g,j4=/^\s*\/\/.*$/gm;function p2(n,t){return n.map(function(i){return i.type==="rule"&&(i.value="".concat(t," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(t," ")),i.props=i.props.map(function(a){return"".concat(t," ").concat(a)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=p2(i.children,t)),i})}function C4(n){var t,i,a,o=lo,u=o.options,d=u===void 0?lo:u,m=o.plugins,p=m===void 0?Gh:m,g=function(T,R,M){return M.startsWith(i)&&M.endsWith(i)&&M.replaceAll(i,"").length>0?".".concat(t):T},v=p.slice();v.push(function(T){T.type===Bh&&T.value.includes("&")&&(T.props[0]=T.props[0].replace(I4,i).replace(a,g))}),d.prefix&&v.push(e4),v.push(ZS);var w=function(T,R,M,L){R===void 0&&(R=""),M===void 0&&(M=""),L===void 0&&(L="&"),t=L,i=R,a=new RegExp("\\".concat(i,"\\b"),"g");var U=T.replace(j4,""),K=XS(M||R?"".concat(M," ").concat(R," { ").concat(U," }"):U);d.namespace&&(K=p2(K,d.namespace));var X=[];return Eh(K,JS(v.concat(t4(function(tt){return X.push(tt)})))),X};return w.hash=p.length?p.reduce(function(T,R){return R.name||pu(15),eo(T,R.name)},a2).toString():"",w}var D4=new f2,am=C4(),m2=St.createContext({shouldForwardProp:void 0,styleSheet:D4,stylis:am});m2.Consumer;St.createContext(void 0);function Dx(){return B.useContext(m2)}var g2=(function(){function n(t,i){var a=this;this.inject=function(o,u){u===void 0&&(u=am);var d=a.name+u.hash;o.hasNameForId(a.id,d)||o.insertRules(a.id,d,u(a.rules,d,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=i,Ym(this,function(){throw pu(12,String(a.name))})}return n.prototype.getName=function(t){return t===void 0&&(t=am),this.name+t.hash},n})(),N4=function(n){return n>="A"&&n<="Z"};function Nx(n){for(var t="",i=0;i<n.length;i++){var a=n[i];if(i===1&&a==="-"&&n[0]==="-")return n;N4(a)?t+="-"+a.toLowerCase():t+=a}return t.startsWith("ms-")?"-"+t:t}var y2=function(n){return n==null||n===!1||n===""},x2=function(n){var t,i,a=[];for(var o in n){var u=n[o];n.hasOwnProperty(o)&&!y2(u)&&(Array.isArray(u)&&u.isCss||uo(u)?a.push("".concat(Nx(o),":"),u,";"):tu(u)?a.push.apply(a,Jl(Jl(["".concat(o," {")],x2(u),!1),["}"],!1)):a.push("".concat(Nx(o),": ").concat((t=o,(i=u)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||t in n4||t.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return a};function Xa(n,t,i,a){if(y2(n))return[];if(Gm(n))return[".".concat(n.styledComponentId)];if(uo(n)){if(!uo(u=n)||u.prototype&&u.prototype.isReactComponent||!t)return[n];var o=n(t);return Xa(o,t,i,a)}var u;return n instanceof g2?i?(n.inject(i,a),[n.getName(a)]):[n]:tu(n)?x2(n):Array.isArray(n)?Array.prototype.concat.apply(Gh,n.map(function(d){return Xa(d,t,i,a)})):[n.toString()]}function M4(n){for(var t=0;t<n.length;t+=1){var i=n[t];if(uo(i)&&!Gm(i))return!1}return!0}var O4=s2(Hh),V4=(function(){function n(t,i,a){this.rules=t,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&M4(t),this.componentId=i,this.baseHash=eo(O4,i),this.baseStyle=a,f2.registerId(i)}return n.prototype.generateAndInjectStyles=function(t,i,a){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,i,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))o=Ga(o,this.staticRulesId);else{var u=im(Xa(this.rules,t,i,a)),d=nm(eo(this.baseHash,u)>>>0);if(!i.hasNameForId(this.componentId,d)){var m=a(u,".".concat(d),void 0,this.componentId);i.insertRules(this.componentId,d,m)}o=Ga(o,d),this.staticRulesId=d}else{for(var p=eo(this.baseHash,a.hash),g="",v=0;v<this.rules.length;v++){var w=this.rules[v];if(typeof w=="string")g+=w;else if(w){var T=im(Xa(w,t,i,a));p=eo(p,T+v),g+=T}}if(g){var R=nm(p>>>0);i.hasNameForId(this.componentId,R)||i.insertRules(this.componentId,R,a(g,".".concat(R),void 0,this.componentId)),o=Ga(o,R)}}return o},n})(),v2=St.createContext(void 0);v2.Consumer;var Ep={};function k4(n,t,i){var a=Gm(n),o=n,u=!_p(n),d=t.attrs,m=d===void 0?Gh:d,p=t.componentId,g=p===void 0?(function(lt,Y){var ot=typeof lt!="string"?"sc":Tx(lt);Ep[ot]=(Ep[ot]||0)+1;var j="".concat(ot,"-").concat(o2(Hh+ot+Ep[ot]));return Y?"".concat(Y,"-").concat(j):j})(t.displayName,t.parentComponentId):p,v=t.displayName,w=v===void 0?(function(lt){return _p(lt)?"styled.".concat(lt):"Styled(".concat(l4(lt),")")})(n):v,T=t.displayName&&t.componentId?"".concat(Tx(t.displayName),"-").concat(t.componentId):t.componentId||g,R=a&&o.attrs?o.attrs.concat(m).filter(Boolean):m,M=t.shouldForwardProp;if(a&&o.shouldForwardProp){var L=o.shouldForwardProp;if(t.shouldForwardProp){var U=t.shouldForwardProp;M=function(lt,Y){return L(lt,Y)&&U(lt,Y)}}else M=L}var K=new V4(i,T,a?o.componentStyle:void 0);function X(lt,Y){return(function(ot,j,I){var C=ot.attrs,O=ot.componentStyle,k=ot.defaultProps,z=ot.foldedComponentIds,D=ot.styledComponentId,se=ot.target,qt=St.useContext(v2),J=Dx(),dt=ot.shouldForwardProp||J.shouldForwardProp,yt=r4(j,qt,k)||lo,jt=(function(Ct,_t,ge){for(var Lt,Me=_n(_n({},_t),{className:void 0,theme:ge}),Ni=0;Ni<Ct.length;Ni+=1){var Hn=uo(Lt=Ct[Ni])?Lt(Me):Lt;for(var ln in Hn)Me[ln]=ln==="className"?Ga(Me[ln],Hn[ln]):ln==="style"?_n(_n({},Me[ln]),Hn[ln]):Hn[ln]}return _t.className&&(Me.className=Ga(Me.className,_t.className)),Me})(C,j,yt),V=jt.as||se,at={};for(var ct in jt)jt[ct]===void 0||ct[0]==="$"||ct==="as"||ct==="theme"&&jt.theme===yt||(ct==="forwardedAs"?at.as=jt.forwardedAs:dt&&!dt(ct,V)||(at[ct]=jt[ct]));var ht=(function(Ct,_t){var ge=Dx(),Lt=Ct.generateAndInjectStyles(_t,ge.styleSheet,ge.stylis);return Lt})(O,jt),gt=Ga(z,D);return ht&&(gt+=" "+ht),jt.className&&(gt+=" "+jt.className),at[_p(V)&&!r2.has(V)?"class":"className"]=gt,I&&(at.ref=I),B.createElement(V,at)})(tt,lt,Y)}X.displayName=w;var tt=St.forwardRef(X);return tt.attrs=R,tt.componentStyle=K,tt.displayName=w,tt.shouldForwardProp=M,tt.foldedComponentIds=a?Ga(o.foldedComponentIds,o.styledComponentId):"",tt.styledComponentId=T,tt.target=a?o.target:n,Object.defineProperty(tt,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(lt){this._foldedDefaultProps=a?(function(Y){for(var ot=[],j=1;j<arguments.length;j++)ot[j-1]=arguments[j];for(var I=0,C=ot;I<C.length;I++)rm(Y,C[I],!0);return Y})({},o.defaultProps,lt):lt}}),Ym(tt,function(){return".".concat(tt.styledComponentId)}),u&&h2(tt,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),tt}function Mx(n,t){for(var i=[n[0]],a=0,o=t.length;a<o;a+=1)i.push(t[a],n[a+1]);return i}var Ox=function(n){return Object.assign(n,{isCss:!0})};function Qm(n){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];if(uo(n)||tu(n))return Ox(Xa(Mx(Gh,Jl([n],t,!0))));var a=n;return t.length===0&&a.length===1&&typeof a[0]=="string"?Xa(a):Ox(Xa(Mx(a,t)))}function sm(n,t,i){if(i===void 0&&(i=lo),!t)throw pu(1,t);var a=function(o){for(var u=[],d=1;d<arguments.length;d++)u[d-1]=arguments[d];return n(t,i,Qm.apply(void 0,Jl([o],u,!1)))};return a.attrs=function(o){return sm(n,t,_n(_n({},i),{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},a.withConfig=function(o){return sm(n,t,_n(_n({},i),o))},a}var _2=function(n){return sm(k4,n)},S=_2;r2.forEach(function(n){S[n]=_2(n)});function P4(n){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];var a=im(Qm.apply(void 0,Jl([n],t,!1))),o=o2(a);return new g2(o,a)}const wp=S.a`
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
`;function Xm({label:n,href:t="#",active:i=!1,onClick:a,style:o,target:u,rel:d}){const p=/^https?:\/\//i.test(t)||t?.startsWith("mailto:")||t?.startsWith("tel:");let g,v=!1;!p&&t&&(t.startsWith("/")&&(g=t,v=!0),t==="/"&&(g="/",v=!0));const T={"aria-current":i?"page":void 0,"data-active":i?"true":"false","data-label":n,onKeyDown:R=>{a&&(R.key==="Enter"||R.key===" ")&&(R.preventDefault(),a(R))},onClick:a,style:o,$active:i};return v?y.jsx(wp,{as:es,to:g,...T,children:y.jsx("span",{className:"navbtn-text",children:n})}):t?y.jsx(wp,{href:t,target:u,rel:d,...T,children:y.jsx("span",{className:"navbtn-text",children:n})}):y.jsx(wp,{as:"button",type:"button",...T,style:{background:"none",border:0,...o},children:y.jsx("span",{className:"navbtn-text",children:n})})}Xm.propTypes={label:Z.string.isRequired,href:Z.string,active:Z.bool,onClick:Z.func,style:Z.object,target:Z.string,rel:Z.string};const U4=({isOpen:n=!1,size:t=28,color:i="#fff",...a})=>{const o=Math.max(2,Math.round(t/14)),u=t/2,d=Math.round(t*.28);if(n)return y.jsxs("svg",{width:t,height:t,viewBox:`0 0 ${t} ${t}`,fill:"none",...a,children:[y.jsx("line",{x1:u-d,y1:u-d,x2:u+d,y2:u+d,stroke:i,strokeWidth:o,strokeLinecap:"round"}),y.jsx("line",{x1:u-d,y1:u+d,x2:u+d,y2:u-d,stroke:i,strokeWidth:o,strokeLinecap:"round"})]});const m=o,p=o/2;return y.jsxs("svg",{width:t,height:t,viewBox:`0 0 ${t} ${t}`,fill:"none",...a,children:[y.jsx("rect",{x:0,y:u-d-m/2,width:t,height:m,rx:p,fill:i}),y.jsx("rect",{x:0,y:u-m/2,width:t,height:m,rx:p,fill:i}),y.jsx("rect",{x:0,y:u+d-m/2,width:t,height:m,rx:p,fill:i})]})},he=Object.freeze({GRADIENT:"gradient",LIGHT:"light",DARK:"dark",GRADIENT_DARK:"gradient_dark"}),L4=S.header`
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
`,$4=S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  @media (max-width: 640px) {
    gap: 8px;
  }
`,B4=S.div`
  display: flex;
  align-items: center;
  gap: 24px;
`,F4=S.nav`
  display: flex;
  align-items: center;
  gap: 24px;
  @media (max-width: 1450px) {
    display: none;
  }
`,q4=S.button`
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
`,H4=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  margin-top: 12px;
`,G4=S(Xm)`
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  letter-spacing: 0.26px;
`,Y4=S.div`
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
`,Q4=S.div`
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
`;function E2({items:n=[],activeKey:t,mode:i,onModeChange:a,autoOnScroll:o=!1,scrollThreshold:u=8,sticky:d=!0,maxWidth:m,overlay:p=!1}){const[g,v]=B.useState(!1),[w,T]=B.useState(he.GRADIENT),R=typeof i=="string",M=R?i:w,L=B.useRef(R?i:w);B.useEffect(()=>{if(!R)return;(window.scrollY||document.documentElement.scrollTop||0)<=u&&(L.current=i)},[i,R,u]),B.useEffect(()=>{if(!o)return;const O=()=>{const k=window.scrollY||document.documentElement.scrollTop||0,z=L.current||he.GRADIENT_DARK,D=k>u?he.DARK:z;R||T(D),a&&a(D)};return O(),window.addEventListener("scroll",O,{passive:!0}),()=>window.removeEventListener("scroll",O)},[o,R,a,u]);const{baseColor:U,gradient:K,textColor:X,boxShadow:tt,showGradient:lt}=B.useMemo(()=>{switch(M){case he.LIGHT:return{baseColor:"linear-gradient(180deg, rgba(255,255,255,0.8) 60%, rgba(255,255,255,0) 100%)",gradient:"rgba(255,255,255,1)",textColor:"#000",showGradient:!0};case he.DARK:return{baseColor:"linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,0) 100%)",gradient:"linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,1) 100%)",textColor:"#fff",showGradient:!0};case he.GRADIENT_DARK:return{baseColor:"linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,0) 100%)",gradient:"linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,1) 100%)",textColor:"#fff",showGradient:!1};default:return{baseColor:"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",gradient:"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",textColor:"#000",showGradient:!1}}},[M]),j=M===he.DARK||M===he.GRADIENT_DARK||g,I=j?"/icons/logoLight.svg":"/icons/logoDark.svg",C=n.filter(O=>O.label!=="SHOWROOM");return B.useEffect(()=>(g?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[g]),y.jsxs(L4,{role:"banner",$sticky:d,$overlay:p,$baseColor:U,$gradient:K,$showGradient:lt,$textColor:X,$boxShadow:tt,children:[y.jsx(z4,{$maxWidth:m,children:y.jsxs($4,{children:[y.jsxs(B4,{children:[y.jsx(es,{to:"/","aria-label":"홈으로",style:{color:"inherit",textDecoration:"none"},children:y.jsx(Y4,{"aria-hidden":!0,children:y.jsx(Q4,{children:y.jsx("div",{style:{backgroundImage:`url(${I})`,width:"100%",height:"100%",backgroundSize:"contain",backgroundRepeat:"no-repeat"}})})})}),y.jsx(F4,{"aria-label":"주 메뉴",children:n.map(O=>y.jsx(Xm,{label:O.label,href:O.href,active:O.key===t},O.key))})]}),y.jsx(q4,{"aria-label":g?"메뉴 닫기":"메뉴 열기",onClick:()=>v(O=>!O),children:y.jsx(U4,{isOpen:g,size:24,color:j?"#fff":"#000"})})]})}),y.jsx(K4,{$open:g,onClick:()=>v(!1),children:y.jsx(H4,{onClick:O=>O.stopPropagation(),children:C.map(O=>y.jsx(G4,{label:O.label,href:O.href,active:O.key===t,style:{fontSize:18,fontWeight:500,color:"#fff",textAlign:"center"},onClick:()=>v(!1)},O.key))})})]})}E2.propTypes={items:Z.arrayOf(Z.shape({key:Z.string.isRequired,label:Z.string.isRequired,href:Z.string})),activeKey:Z.string,mode:Z.oneOf([he.GRADIENT,he.LIGHT,he.DARK,he.GRADIENT_DARK]),onModeChange:Z.func,autoOnScroll:Z.bool,scrollThreshold:Z.number,sticky:Z.bool,overlay:Z.bool,maxWidth:Z.oneOfType([Z.string,Z.number])};const Wm="Pretendard, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR', Arial, sans-serif",X4=S.footer`
  width: 100vw;
  background: #0E0E0E;
  border-top: 1px #A1A1A1 solid;
  @media (max-width: 640px) {
    min-width: 0;
    left: 0;
    right: 0;
  }
`,W4=S.div`
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
`,Z4=S.div`
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
`,J4=S.nav`
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
`,Vx=S.a`
  color: inherit;
  text-decoration: none;
  opacity: 0.95;
`,tA=S.div`
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
`,eA=S.div`
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
`,kx=S.a`
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
`;function w2({title:n="잔향 : 기억의 향기",nav:t=[{label:"PROJECTS",href:"/projects"},{label:"PEOPLES",href:"/peoples"},{label:"SHOWROOM",href:"/showroom"},{label:"GUESTBOOK",href:"/guestbook"},{label:"CREDITS",href:"/credits"}],copyright:i=["ⓒ 2025 TECH UNIV KOREA. ALL RIGHTS RESERVED.","TUKOREA DESIGN ENGINEERING 20TH GRADUATION EXHIBITION"],social:a={youtube:{href:"https://youtube.com",label:"YouTube"},instagram:{href:"https://instagram.com",label:"Instagram"}},maxWidth:o=1220,sidePadding:u=350}){const[d,m]=St.useState(typeof window<"u"?window.innerWidth<640:!1);return St.useEffect(()=>{function p(){m(window.innerWidth<640)}return p(),window.addEventListener("resize",p),()=>window.removeEventListener("resize",p)},[]),y.jsx(X4,{role:"contentinfo",children:y.jsxs(W4,{$sidePadding:u,$maxWidth:o,children:[y.jsx(Z4,{children:n}),y.jsx(J4,{"aria-label":"푸터 메뉴",children:t.filter(p=>!(d&&p.label==="SHOWROOM")).map(p=>{const g=p.href||"#",v=/^https?:\/\//i.test(g),w="/";let T=g;return v||g===w&&(T="/"),v?y.jsx(Vx,{href:g,children:p.label},p.label):y.jsx(Vx,{as:es,to:T,children:p.label},p.label)})}),y.jsx(tA,{children:i.map((p,g)=>y.jsx("div",{children:p},g))}),y.jsxs(eA,{$sidePadding:u,children:[a?.youtube?.href&&y.jsx(kx,{href:a.youtube.href,"aria-label":a.youtube.label||"YouTube",target:"_blank",rel:"noreferrer noopener",children:y.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#FFFFFF","aria-hidden":!0,children:y.jsx("path",{d:"M23.5 7.2a4 4 0 0 0-2.8-2.8C18.8 4 12 4 12 4s-6.8 0-8.7.4A4 4 0 0 0 .5 7.2 41 41 0 0 0 0 12a41 41 0 0 0 .5 4.8 4 4 0 0 0 2.8 2.8C5.2 20 12 20 12 20s6.8 0 8.7-.4a4 4 0 0 0 2.8-2.8A41 41 0 0 0 24 12a41 41 0 0 0-.5-4.8zM9.6 15.2V8.8L15.8 12l-6.2 3.2z"})})}),a?.instagram?.href&&y.jsx(kx,{href:a.instagram.href,"aria-label":a.instagram.label||"Instagram",target:"_blank",rel:"noreferrer noopener",children:y.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#FFFFFF","aria-hidden":!0,children:[y.jsx("path",{d:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2A3.2 3.2 0 1 1 12 8a3.2 3.2 0 0 1 0 6.4z"}),y.jsx("circle",{cx:"17.5",cy:"6.5",r:"1.2"}),y.jsx("path",{d:"M17.8 2H6.2A4.2 4.2 0 0 0 2 6.2v11.6A4.2 4.2 0 0 0 6.2 22h11.6A4.2 4.2 0 0 0 22 17.8V6.2A4.2 4.2 0 0 0 17.8 2zm2.6 15.8a2.6 2.6 0 0 1-2.6 2.6H6.2a2.6 2.6 0 0 1-2.6-2.6V6.2A2.6 2.6 0 0 1 6.2 3.6h11.6a2.6 2.6 0 0 1 2.6 2.6v11.6z"})]})})]})]})})}w2.propTypes={title:Z.string,nav:Z.arrayOf(Z.shape({label:Z.string.isRequired,href:Z.string.isRequired})),copyright:Z.arrayOf(Z.string),social:Z.shape({youtube:Z.shape({href:Z.string,label:Z.string}),instagram:Z.shape({href:Z.string,label:Z.string})}),maxWidth:Z.number,sidePadding:Z.number};const Di="'Pretendard', system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif",nA=S.div`
  position: relative; background: #fff;
`,iA=S.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;function Px({children:n}){return y.jsx(nA,{children:y.jsx(iA,{children:n})})}const rA=S.div`
  position: relative; height: 120px; display: flex; align-items: flex-end; justify-content: center;
  font-family: ${Di}; font-size: 40px; font-weight: 700; color: #101010; line-height: 64px; margin-top: 98px;
  @media (max-width: 640px) {
    height: 21px;
    line-height: 21px;
    margin-top: 4px;
    font-size: 18px;
  }
`,aA=S.div`
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
`;function sA(){return y.jsxs(y.Fragment,{children:[y.jsx(rA,{children:"CREDITS"}),y.jsx(aA,{children:"잔향 : 기억의 향기"})]})}const oA=S.p`
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
`,lA=S.div`
  display: flex;
  position: relative;
  align-items: flex-start;
  overflow: visible;
  padding-top: 20px;
    @media (max-width: 640px) {
    padding-top: 0px;
  }
`,uA=S.div`
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
`,cA=S.div`
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
`,hA=S.div`
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
`,b2=S.div`
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
`;function dA({text:n}){return y.jsxs(lA,{children:[y.jsx(b2,{}),y.jsx(uA,{}),y.jsx(oA,{dangerouslySetInnerHTML:{__html:n}})]})}const fA=S.div`
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
`,pA=S.div`
  width: 800px; height: 450px; background: url('interviewThumb.png'); background-size:cover; position: relative; z-index: 30;
  @media (max-width: 640px) {
    width: 100vw;
    height: calc(100vw * 0.5625); /* 16:9 비율 유지 */
  }
`,mA=S.div`
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
`;function gA({children:n}){return y.jsx(pA,{children:y.jsx(mA,{children:n})})}const yA=S.div`
  display: flex; gap: 40px; margin-top: 44px; width: 1220px; position: relative;
  @media (max-width: 640px) {
    // flex 위쪽에 2개, 아래에 1개 배치되게 해주고, 아래 배치된거는 위쪽 2개의 길이만큼 맞춰주게 해주세요
    width: 100%;
    flex-wrap: wrap;
    gap: 32px;
    margin-top: 24px;
  }
`,xA=S.div`
  width: 374px; display: flex; flex-direction: column; gap: 40px;
    @media (max-width: 640px) {
      width: 100%;
      gap: 16px;
      padding: 0px 16px;
  }
`,vA=S.div`
  font-family: ${Di}; font-size: 28px; font-weight: 600; line-height: 20px; color: #000; margin: 0;
  @media (max-width: 640px) {
    font-size: 14px;
    line-height: 10px;
  }
`,_A=S.p`
  font-family: ${Di}; font-size: 16px; font-weight: 400; line-height: 150%; color: #404040; text-align: justify; margin: 0;
  @media (max-width: 640px) {
    font-size: 10px;
  }
`;function EA({blocks:n}){return y.jsxs(yA,{children:[y.jsx(b2,{}),n.map(t=>y.jsxs(xA,{children:[y.jsx(vA,{children:t.title}),y.jsx(_A,{dangerouslySetInnerHTML:{__html:t.body}})]},t.title))]})}const wA=S.div`
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
`,bA=S.div`
  width: 289px;
  height: 45px;
  display: flex;
  align-items: flex-end;
  @media (max-width: 640px) {
    height: auto;
    width: 88px;
    margin-top: 12px;
  }
`,TA=S.div`
  font-family: ${Di}; font-size: 20px;
  font-weight: 500;
  line-height: 22.4px;
  color: #202020;
  @media (max-width: 640px) {
    font-size: 14px;
    line-height: 14px;
  }
`,SA=S.div`
  width: 900px;
  display: flex;
  flex-direction: column;
  @media (max-width: 640px) {
    width: 100%;
  }
`;function AA({title:n,rows:t,last:i=!1}){return y.jsxs(wA,{$last:i,children:[y.jsx(bA,{children:y.jsx(TA,{children:n})}),y.jsx(SA,{children:t.map((a,o)=>y.jsx(NA,{ko:a.ko,en:a.en,divider:t.length>1&&o!==t.length-1},a.ko+a.en+o))})]})}const RA=S.div`
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
`,IA=S.div`
  width: 135px;
  @media (max-width: 640px) {
    width: 66px;
  }
`,jA=S.div`
  font-family: ${Di};
  font-size: 16px;
  font-weight: 300;
  line-height: 22.4px; 
  color: #202020;
  @media (max-width: 640px) {
    font-size: 12px;
    line-height: 14px;
  }
`,CA=S.div`
  display: flex; align-items: center;
`,DA=S.div`
  font-family: ${Di};
  font-size: 16px;
  font-weight: 300;
  line-height: 22.4px;
  color: #404040;
  @media (max-width: 640px) {
    font-size: 12px;
    line-height: 14px;
  }
`;function NA({ko:n,en:t,divider:i=!1}){return y.jsxs(RA,{$divider:i,children:[y.jsx(IA,{children:y.jsx(jA,{children:n})}),y.jsx(CA,{children:y.jsx(DA,{children:t})})]})}const MA=S.div`
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
`,OA=S.div`
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
`;function VA(){const n='안녕하세요, 제20회 졸업전시준비위원회입니다. <br/><br/>한국공학대학교 디자인공학부 제20회 졸업전시 <잔향>은 지난 시간 동안의 도전과 성장을 작품으로 담아내는 자리입니다. 이번 전시는 단순히 결과물을 나열하는 데 그치지 않고, 각자의 창작 과정 속에서 남겨진 고민과 흔적을 함께 나누고자 기획되었습니다. <br/><br/><잔향>이라는 주제는 작품이 지닌 감각과 정서가 관람자의 마음에 은은히 스며들어, 시간이 지나도 다시 떠오르는 기억으로 남기를 바라는 마음을 담고 있습니다. 학생들이 걸어온 수많은 순간과 열정이 응축된 이번 전시가, 누군가의 영감으로 다시 피어나길 희망합니다. 100명의 학생들이 모여 만들어 낸 이 전시는 그 어느 때보다 크고 도전적인 시도였습니다. 서로의 열정이 모여 이루어진 결과물이기에, 그 의미 또한 더욱 특별합니다.<br/><br/> 이번 전시가 졸업생들에게는 새로운 출발을 알리는 이정표로, 관람객에게는 오래도록 마음속에 머무는 "기억의 향기"로 남기를 바랍니다.',t=[{title:"학부장의 말씀",body:"스무 번째를 맞이하는 디자인공학부 졸업작품전시회를 진심으로 축하드립니다.<br/>이번 전시회에는 총 100명의 학생들이 개인 혹은 팀을 이루어, 산업디자인공학전공 47개 작품과 미디어디자인공학전공 30개 작품을 선보입니다. 이번 전시회는 단순히 결과물을 보여주는 자리를 넘어, 지난 4년간의 땀과 열정, 수많은 고민과 성장이 맺은 값진 결실이자, 새로운 출발을 알리는 뜻깊은 순간입니다.<br/>오늘날 우리는 인공지능, 스마트 기술, 친환경 소재 등 급속히 변화하는 기술 환경 속에서 전례 없는 전환의 시대를 맞이하고 있습니다.<br/>이러한 가운데에 디자이너는 우리의 생활에서 여러 불편한 요소를 찾아내고 이를 창의적이며 책임감 있게 해결할 수 있는 융합형 인재로서 그 역할이 더욱 중요해지고 있습니다.<br/>우리 디자인공학부 학생들은 이러한 변화에 능동적으로 대응하며, 사용자 중심의 사고, 미적 감각, 기술적 이해를 균형 있게 갖춘 디자이너로 성장해 왔습니다. 이번 전시의 모든 작품에는 치열한 탐구와 관찰, 반복된 시도와 실패, 그리고 그 너머의 성장이 고스란히 담겨 있습니다. 그 귀중한 과정을 진심으로 응원하며, 우리 학생들이 디자인을 통해 사회에 공헌하고 세상에 긍정적인 변화를 이끄는 창의적이고 따뜻한 디자이너로 거듭나기를 바랍니다.<br/>앞으로 변화와 도전의 흐름 속에서도 흔들림 없이 자신이 옳다고 믿는 방향으로 꿋꿋하게 나아가며, 사회 곳곳에서 중심적인 역할을 수행하는 당당한 디자이너로 성장하길 기대합니다. 그리고 언제 어디서든 한국공학대학교 디자인공학부의 이름을 빛내는 자랑스러운 동문으로 기억되길 바랍니다.<br/>마지막으로, 소중한 인재들의 성장을 위해 아낌없는 지도와 격려를 보내주신 교수님들께 깊은 감사의 말씀을 전합니다. 또한, 묵묵히 곁에서 자녀를 응원해주신 학부모님들께도 진심 어린 감사의 인사를 드립니다. 감사합니다."},{title:"학과 소개",body:"한국공학대학교 디자인공학부는 창의적인 디자인 발상법과 공학적 마인드의 통합적 접근법을 추구하는 시대로 바뀜에 따라 단순히 심미적 역할에만 머물렀던 디자인 개념에서 확장하여 4차 산업혁명 기술 분야를 선도하고자 하는 비전을 담고 있는 실무 중심의 융합형 학부입니다.<br/>디자인공학부는 디자인 기반의 창의적 아이디어와 HW/SW 융합 기술 개발 능력을 통해 기업을 혁신할 수 있는 인재 양성을 목표로 하고 있습니다."},{title:"웹사이트팀 제작 후기",body:"2025년 졸업전시 잔향의 웹사이트 기획부터 디자인, 그리고 구현까지 담당한 웹사이트 팀 성수민, 김예준 입니다. 25년 5월부터 컨셉이 정해진 이래 150일에 걸쳐 개발한 사이트가 이렇게 완성되어 무척 감격스럽습니다."}],i=[{title:"위원장",rows:[{ko:"홍승재",en:"Hong Seungjae"}]},{title:"부위원장",rows:[{ko:"김예린",en:"Kim Yerin"}]},{title:"총무",rows:[{ko:"진효민",en:"Jin Hyomin"},{ko:"정민호",en:"Jung Minho"}]},{title:"기획",rows:[{ko:"문나라",en:"Moon Nara"},{ko:"차소이",en:"Cha Soyi"},{ko:"한채원",en:"Han Chaewon"}]},{title:"홍보",rows:[{ko:"이채원",en:"Lee Chaewon"},{ko:"남가림",en:"Nam Garim"}]},{title:"디자인",rows:[{ko:"구인회",en:"Koo Inhoe"},{ko:"김기윤",en:"Kim Giyun"},{ko:"박혜성",en:"Park Hyeseong"},{ko:"석동현",en:"Suk Donghyun"}]},{title:"웹사이트",rows:[{ko:"성수민",en:"Seong Sumin"},{ko:"김예준",en:"Kim Yejun"}]},{title:"Special Thanks",rows:[{ko:"김한종 교수",en:"Prof. Kim Hanjong"}],last:!0}];return y.jsxs("div",{style:{position:"relative"},children:[y.jsxs(Px,{children:[y.jsx(sA,{}),y.jsxs(fA,{children:[y.jsx(dA,{text:n}),y.jsx(gA,{})]})]}),y.jsxs(Px,{children:[y.jsx(EA,{blocks:t}),y.jsxs(MA,{children:[y.jsx(hA,{}),y.jsxs(OA,{children:[y.jsx(cA,{}),"2025 잔향",y.jsx("br",{}),"제 20대 졸업전시위원회"]}),i.map(a=>y.jsx(AA,{title:a.title,rows:a.rows,last:!!a.last},a.title))]})]})]})}const kA=S.div`
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
`,PA=S.div`
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
`,LA=S.div`
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
`,$A=S.h1`
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
`,ch=S.p`
    margin: 0;
@media (max-width: 640px) {
    font-size: 6px;
 }
   @media (max-width: 393px) {
    font-size: 5px;
  }
`,BA=S(ch)`
 @media (max-width: 640px) {
    display: none;
 }`;function Zm({nameKor:n,nameEng:t,role:i,sns:a,eMail:o,imgSrc:u,imgAlt:d}){return y.jsxs(kA,{children:[y.jsxs(PA,{children:[y.jsx(UA,{src:u,alt:d}),y.jsx(LA,{})]}),y.jsxs(zA,{children:[y.jsxs(Ux,{style:{top:"50px"},children:[y.jsx($A,{children:n}),y.jsx(ch,{children:t})]}),y.jsxs(Ux,{children:[y.jsx(ch,{children:i}),typeof a=="string"&&a.trim()&&a!=="-"?y.jsx(ch,{children:a}):Array.isArray(a)&&a.length>0?y.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",margin:"4px 0 0 0"},children:a.map((m,p)=>y.jsx("span",{style:{wordBreak:"break-all"},children:m.handle||m.url},`${m.platform}-${p}`))}):"-",y.jsx(BA,{children:o?y.jsx("a",{style:{textDecoration:"none",color:"inherit"},href:`mailto:${o}`,children:o}):null})]})]})]})}Zm.defaultProps={sns:[]};Zm.propTypes={nameKor:Z.string.isRequired,nameEng:Z.string,role:Z.string,sns:Z.arrayOf(Z.shape({platform:Z.string.isRequired,url:Z.string.isRequired})),eMail:Z.string,imgSrc:Z.string.isRequired,imgAlt:Z.string.isRequired};const FA=S.div`
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
`,qA=S.div`
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
`,T2=S.p`
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
`,KA=S(T2)`
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
`;function om({path:n="student",isActive:t=!1,onClick:i}){return y.jsxs(FA,{onClick:i,children:[y.jsx(T2,{$active:t,children:"교수"}),y.jsx(KA,{$active:t,children:"학생"}),y.jsx(qA,{$active:t})]})}om.propTypes={path:Z.oneOf(["student","professor"]),isActive:Z.bool,onClick:Z.func};const Lx=S.a`
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
`;function hh({label:n,href:t=null,active:i=!1,onClick:a,style:o,target:u,rel:d}){const p={"aria-current":i?"page":void 0,"data-active":i?"true":"false",onKeyDown:g=>{a&&(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),a(g))},"data-label":n,onClick:a,style:o,$active:i};return t?y.jsx(Lx,{href:t,target:u,rel:d,...p,children:y.jsx(zx,{className:"navbtn-text",children:n})}):y.jsx(Lx,{as:"button",type:"button",...p,style:{background:"none",border:0,...o},children:y.jsx(zx,{className:"navbtn-text",children:n})})}hh.propTypes={label:Z.string.isRequired,href:Z.string,active:Z.bool,onClick:Z.func,style:Z.object,target:Z.string,rel:Z.string};const S2=S.div`
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
`,HA=S(S2)`
  justify-content: flex-start;
`,$x=S.div`
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
`,A2=S.p`
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
`,GA=S(A2)`
  font-size: 16px;
  font-weight: 600;
  @media (max-width: 640px) {
   font-size: 13px;  
  }
  @media (max-width: 375px) {
    font-size: 12px;
  }
`;function Jm({label:n,style:t,mode:i}){const u=window.matchMedia("(max-width: 640px)").matches?"/icons/dropDownMobileIcon.svg":"/icons/arrowDropdownIcon.svg";return i==="category"?y.jsxs(HA,{style:t,children:[y.jsx(GA,{children:n}),y.jsx($x,{children:y.jsx("img",{src:"/icons/arrowDropdownIcon.svg",alt:"dropdownIcon"})})]}):y.jsxs(S2,{style:t,children:[y.jsx(A2,{children:n}),y.jsx($x,{children:y.jsx("img",{src:u,alt:"dropdownIcon"})})]})}Jm.propTypes={label:Z.string.isRequired,style:Z.object};const YA=S.div`
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
`,QA=S.div`
  display: flex;
  width: 90px;
  height: 20px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  @media (max-width: 640px) {
    width: 52px;  
 }
`,XA=S.p`
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
`;function R2({options:n,onSelect:t,style:i,isOpen:a,position:o,selected:u}){return y.jsx(YA,{style:i,$open:a,children:n.map((d,m)=>y.jsx(QA,{onClick:()=>t(d),children:y.jsx(XA,{$selected:d===u,children:d})},m))})}R2.propTypes={options:Z.arrayOf(Z.string).isRequired,onSelect:Z.func.isRequired,style:Z.object,isOpen:Z.bool,position:Z.any,selected:Z.string};const WA=S.div`
  position: relative;
`;function tg({label:n,options:t,onSelect:i,style:a,filter:o,mode:u}){const[d,m]=St.useState(!1),[p,g]=St.useState({top:0,left:0}),v=St.useRef(null),w=()=>{if(v.current){const R=v.current.getBoundingClientRect();g({top:R.bottom+window.scrollY,left:R.left+window.scrollX})}m(R=>!R)},T=R=>{i&&i(R),m(!1)};return y.jsxs(WA,{ref:v,style:a,children:[y.jsx("div",{onClick:w,children:y.jsx(Jm,{label:n,options:t,onSelect:i,style:{},filter:o,mode:u})}),y.jsx(R2,{options:t,onSelect:T,style:{},isOpen:d,position:p,selected:n})]})}tg.propTypes={label:Z.string.isRequired,options:Z.arrayOf(Z.string).isRequired,onSelect:Z.func.isRequired,style:Z.object,filter:Z.string};tg.defaultProps={style:{},filter:""};const ZA=S.div`
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
`,JA=S.div`
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
`,tR=S.div`
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
`;function I2({options:n,isOpen:t,onSelect:i,selected:a}){return y.jsx(ZA,{$open:t,children:y.jsx(JA,{$open:t,children:n.map((o,u)=>y.jsx(tR,{$selected:a===o,onClick:()=>i(o),children:o},u))})})}I2.propTypes={options:Z.arrayOf(Z.string).isRequired,isOpen:Z.bool.isRequired,onSelect:Z.func.isRequired,selected:Z.oneOfType([Z.string,Z.number])};const eR=S.div`
    position: relative;
    // 안에 들어가는 요소들 왼쪽 정렬
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;function ql({label:n,options:t,onSelect:i,style:a,mode:o}){const[u,d]=St.useState(!1),m=St.useRef(null),p=()=>{d(v=>!v)},g=v=>{i&&i(v),d(!1)};return y.jsxs(eR,{ref:m,style:a,children:[y.jsx("div",{onClick:p,children:y.jsx(Jm,{label:n,mode:o})}),y.jsx(I2,{options:t,onSelect:g,isOpen:u,selected:n})]})}ql.propTypes={label:Z.string.isRequired,options:Z.arrayOf(Z.string).isRequired,onSelect:Z.func.isRequired,style:Z.object,mode:Z.string};ql.defaultProps={style:{},mode:"category"};const bp=S.div`
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
`,Tp=S.div`
  width: 120px;
  height: 100%;
  @media (max-width: 1450px) {
    display: none;
  }
`,Sp=S.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  @media (max-width: 1450px) {
    display: none;
  }
`,Ap=S.div`
  display: none;
  @media (max-width: 1450px) {
    display: flex;
    justify-content: center;
    width: auto;
  }
`;function j2({onCategoryChange:n,onToggleChange:t,type:i,onSortChange:a,sortLabel:o}){const u={type:i},[d,m]=St.useState(!1),p=()=>m(Y=>{const ot=!Y;return t&&t(ot),ot}),[g,v]=St.useState("전체"),[w,T]=St.useState("All Projects"),R=["전체","산업디자인공학","미디어디자인공학"],M=["장영주","권오재","김 억","김한종","조남주","한민섭","홍성수","김태균"],L=["All Projects","AI & Robot","Edu & Kids","Health Care","IT & Tech","Living","Mobility"],U=["이름순","좋아요순","조회수순","팀작우선","개인작우선"],[K,X]=St.useState("이름순"),tt=o||K,lt=Y=>{X(Y),a&&a(Y)};return B.useEffect(()=>{v(d?M[0]:R[0])},[d]),u.type==="project"?y.jsxs(bp,{children:[y.jsx(Tp,{}),y.jsx(Sp,{children:L.map(Y=>y.jsx(hh,{label:Y,active:w===Y,onClick:()=>{T(Y),n&&n(Y)}},Y))}),y.jsx(Ap,{children:y.jsx(ql,{mode:"category",label:w,options:L,onSelect:Y=>{T(Y),n&&n(Y)}})}),y.jsx(tg,{label:tt,options:U,onSelect:lt})]}):d?y.jsxs(bp,{children:[y.jsx(Tp,{}),y.jsx(Sp,{children:M.map(Y=>y.jsx(hh,{label:Y,active:g===Y,onClick:()=>{v(Y),n&&n(Y)}},Y))}),y.jsx(Ap,{children:y.jsx(ql,{mode:"category",label:g,options:M,onSelect:Y=>{v(Y),n&&n(Y)}})}),y.jsx(om,{path:d?"professor":"student",isActive:d,onClick:p})]}):y.jsxs(bp,{children:[y.jsx(Tp,{}),y.jsx(Sp,{children:R.map(Y=>y.jsx(hh,{label:Y,active:g===Y,onClick:()=>{v(Y),n&&n(Y)}},Y))}),y.jsx(Ap,{children:y.jsx(ql,{mode:"category",label:g,options:R,onSelect:Y=>{v(Y),n&&n(Y)}})}),y.jsx(om,{path:d?"professor":"student",isActive:d,onClick:p})]})}const nR=S.div`
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
`,iR=S.div`
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
`,rR=S.img`
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
`,aR=S.div`
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
`,sR=S.p`
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
`,Bx=S.div`
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
`;function eg({nameKor:n,rank:t,eMail:i,education:a,field:o,imgSrc:u,imgAlt:d}){const m=p=>Array.isArray(p)?y.jsx(Bx,{children:p.map((g,v)=>y.jsx(Yc,{children:g},v))}):typeof p=="string"&&p?y.jsx(Bx,{children:y.jsx(Yc,{children:p})}):null;return y.jsx(nR,{children:y.jsxs(iR,{children:[y.jsx(rR,{src:u,alt:d}),y.jsxs(aR,{children:[y.jsx(sR,{children:n}),y.jsxs(Hc,{children:[y.jsx(Gc,{children:"직위(직급)"}),y.jsx(Yc,{children:t})]}),y.jsxs(Hc,{children:[y.jsx(Gc,{children:"이메일"}),y.jsx(Yc,{children:i})]}),y.jsxs(Hc,{children:[y.jsx(Gc,{children:"약력"}),m(a)]}),y.jsxs(Hc,{children:[y.jsx(Gc,{children:"전문 분야"}),m(o)]})]})]})})}eg.propTypes={nameKor:Z.string.isRequired,rank:Z.string.isRequired,eMail:Z.string.isRequired,education:Z.oneOfType([Z.string,Z.arrayOf(Z.string)]),field:Z.oneOfType([Z.string,Z.arrayOf(Z.string)]),imgSrc:Z.string.isRequired,imgAlt:Z.string.isRequired};eg.defaultProps={nameKor:"홍길동",rank:"교수",eMail:"honggildong@example.com",education:[],field:[],imgSrc:"/thumbnailExample.png",imgAlt:"홍길동 교수의 프로필 이미지"};const ng=JSON.parse('[{"num":0,"nameKor":"강유진","nameEng":"Kang Yujin","role":"3D Modeler","department":1,"professorId":"p04","studentId":2021194003,"eMail":"rkddbwls0404@gmail.com","sns":"-","imgUrl":"../image/0/portrait.jpg","category":"c4","projectNum":45,"team":1,"leader":0},{"num":1,"nameKor":"고명현","nameEng":"Go Myeonghyeon","role":"Product Designer","department":1,"professorId":"p03","studentId":2019190002,"eMail":"harczail.76@gmail.com","sns":"@_archive.hynn","imgUrl":"../image/1/portrait.jpg","category":"c0","projectNum":0,"team":0,"leader":""},{"num":2,"nameKor":"고서영","nameEng":"Go Seoyeong","role":"3d Product Designer","department":0,"professorId":"p02","studentId":2022190001,"eMail":"rhtjdud2003@naver.com","sns":"@se_o.o_","imgUrl":"../image/2/portrait.jpg","category":"c2","projectNum":26,"team":1,"leader":0},{"num":3,"nameKor":"고은솔","nameEng":"Ko Eunsol","role":"UX/UI Designer","department":1,"professorId":"p01","studentId":2021194005,"eMail":"soolu202@naver.com","sns":"@sol20_27","imgUrl":"../image/3/portrait.jpg","category":"c1","projectNum":24,"team":0,"leader":""},{"num":4,"nameKor":"구예진","nameEng":"Koo Yejin","role":"UX/UI Designer","department":1,"professorId":"p03","studentId":2022194002,"eMail":"yejk63@gmail.com","sns":"@yeahz_n","imgUrl":"../image/4/portrait.jpg","category":"c2","projectNum":27,"team":1,"leader":1},{"num":5,"nameKor":"구인회","nameEng":"Koo Inhoe","role":"Industrial Designer","department":0,"professorId":"p02","studentId":2020190001,"eMail":"eric2261@naver.com","sns":"@dlsghl01_","imgUrl":"../image/5/portrait.jpg","category":"c5","projectNum":66,"team":1,"leader":1},{"num":6,"nameKor":"권유빈","nameEng":"Kwon Yoobeen","role":"UX/UI Designer","department":1,"professorId":"p02","studentId":2020194002,"eMail":"yoobeenkwon@gmail.com","sns":"@yoovebeen","imgUrl":"../image/6/portrait.jpg","category":"c2","projectNum":26,"team":1,"leader":1},{"num":7,"nameKor":"권지민","nameEng":"Kwon Jimin","role":"UX/UI Designer","department":1,"professorId":"p03","studentId":2022194038,"eMail":"jmnee0115@naver.com","sns":"@j_minee_e","imgUrl":"../image/7/portrait.jpg","category":"c4","projectNum":46,"team":0,"leader":""},{"num":8,"nameKor":"김강민","nameEng":"Kim Gangmin","role":"Mobility Designer","department":0,"professorId":"p04","studentId":2020192003,"eMail":"min7053@naver.com","sns":"@krkdals.m","imgUrl":"../image/8/portrait.jpg","category":"c5","projectNum":67,"team":1,"leader":1},{"num":9,"nameKor":"김기윤","nameEng":"Kim Giyun","role":"Industrial Designer","department":0,"professorId":"p02","studentId":2020190002,"eMail":"tkenrnen112@tukorea.ac.kr","sns":"@gi_yunk","imgUrl":"../image/9/portrait.jpg","category":"c5","projectNum":68,"team":1,"leader":0},{"num":10,"nameKor":"김동주","nameEng":"Kim Dongju","role":"Product Designer","department":0,"professorId":"p00","studentId":2020190005,"eMail":"dongdongju3144@naver.com","sns":"@doongjuu_","imgUrl":"../image/10/portrait.jpg","category":"c3","projectNum":34,"team":0,"leader":""},{"num":11,"nameKor":"김민석","nameEng":"Kim Minseok","role":"Product Designer","department":0,"professorId":"p02","studentId":2020190006,"eMail":"@eneu201@gmail.com","sns":"@mskk.01","imgUrl":"../image/11/portrait.jpg","category":"c4","projectNum":47,"team":0,"leader":""},{"num":12,"nameKor":"김세린","nameEng":"Kim Serin","role":"Product Designer","department":0,"professorId":"p04","studentId":2021192006,"eMail":"kara7094@naver.com","sns":"@ssal._.bap","imgUrl":"../image/12/portrait.jpg","category":"c4","projectNum":48,"team":0,"leader":""},{"num":13,"nameKor":"김소리","nameEng":"Kim Sori","role":"UXUI Designer","department":1,"professorId":"p03","studentId":2021194037,"eMail":"mulsik11@gmail.com","sns":"@sorisorry_","imgUrl":"../image/13/portrait.jpg","category":"c4","projectNum":49,"team":0,"leader":""},{"num":14,"nameKor":"김예린","nameEng":"Kim Yerin","role":"Industrial Designer","department":0,"professorId":"p02","studentId":2021190007,"eMail":"kkye.0204@gmail.com","sns":"@_y.rin_","imgUrl":"../image/14/portrait.jpg","category":"c5","projectNum":69,"team":0,"leader":""},{"num":15,"nameKor":"김예준","nameEng":"Kim Yejun","role":"UX/UI, Front-End","department":1,"professorId":"p01","studentId":2020194006,"eMail":"optimusjun15@naver.com","sns":"@yeah_jun_0228","imgUrl":"../image/15/portrait.jpg","category":"c4","projectNum":50,"team":0,"leader":""},{"num":16,"nameKor":"김윤곤","nameEng":"Kim Yungon","role":"Front Designer","department":1,"professorId":"p03","studentId":2020194008,"eMail":"yunkon0722@gmail.com","sns":"@0123456789on","imgUrl":"../image/16/portrait.jpg","category":"c0","projectNum":1,"team":0,"leader":""},{"num":17,"nameKor":"김윤서","nameEng":"Kim Yunseo","role":"UX/UI Designer","department":1,"professorId":"p02","studentId":2021192007,"eMail":"thtpwl39@tukorea.ac.kr","sns":"@kyuunsoo","imgUrl":"../image/17/portrait.jpg","category":"c4","projectNum":51,"team":0,"leader":""},{"num":18,"nameKor":"김윤성","nameEng":"Kim Yunseong","role":"3D Modeling","department":0,"professorId":"p00","studentId":2020192038,"eMail":"dbstjd9063@gmail.com","sns":"@kimyyuun","imgUrl":"../image/18/portrait.jpg","category":"c0","projectNum":2,"team":0,"leader":""},{"num":19,"nameKor":"김주은","nameEng":"Kim Jueun","role":"UX/UI, HTML Coder","department":1,"professorId":"p02","studentId":2022194007,"eMail":"kimjueun58@gmail.com","sns":"-","imgUrl":"../image/19/portrait.jpg","category":"c2","projectNum":28,"team":1,"leader":0},{"num":20,"nameKor":"김지민","nameEng":"Kim Jimin","role":"Art Director & 2D","department":0,"professorId":"p02","studentId":2020190011,"eMail":"a01039029588@gmail.com","sns":"@oui_parfum_tuk23","imgUrl":"../image/20/portrait.jpg","category":"c3","projectNum":35,"team":1,"leader":0},{"num":21,"nameKor":"김지혜","nameEng":"Kim Jihye","role":"Concept, Rendering","department":0,"professorId":"p05","studentId":2021190012,"eMail":"kjj0209077@naver.com","sns":"@istriioi","imgUrl":"../image/21/portrait.jpg","category":"c5","projectNum":70,"team":1,"leader":1},{"num":22,"nameKor":"김한슬","nameEng":"Kim Hanseul","role":"Product Designer","department":0,"professorId":"p04","studentId":2021192008,"eMail":"mns816@turkorea.ac.kr","sns":"@mnsul_2","imgUrl":"../image/22/portrait.jpg","category":"c3","projectNum":36,"team":0,"leader":""},{"num":23,"nameKor":"남가림","nameEng":"Nam Garim","role":"Product Designer","department":0,"professorId":"p00","studentId":2021190014,"eMail":"garim0402@naver.com","sns":"@ga_rim__","imgUrl":"../image/23/portrait.jpg","category":"c5","projectNum":71,"team":1,"leader":1},{"num":24,"nameKor":"남궁두경","nameEng":"Namgoong Doogyung","role":"Prototype","department":0,"professorId":"p05","studentId":2020192012,"eMail":"dkyung1919@naver.com","sns":"@munamunyeojung.9","imgUrl":"../image/24/portrait.jpg","category":"c0","projectNum":3,"team":1,"leader":1},{"num":25,"nameKor":"노희재","nameEng":"Roe Heejae","role":"Interaction Designer","department":0,"professorId":"p02","studentId":2019192013,"eMail":"wjdrl1144@gmail.com","sns":"@heejae_po","imgUrl":"../image/25/portrait.jpg","category":"c3","projectNum":37,"team":0,"leader":""},{"num":26,"nameKor":"마은성","nameEng":"Ma Eunseong","role":"3D Modeling","department":0,"professorId":"p05","studentId":2021190016,"eMail":"mes3788@naver.com","sns":"@iam._.es","imgUrl":"../image/26/portrait.jpg","category":"c5","projectNum":70,"team":1,"leader":0},{"num":27,"nameKor":"문나라","nameEng":"Moon Nara","role":"Product Designer","department":0,"professorId":"p02","studentId":2021192009,"eMail":"skfk020529@naver.com","sns":"@nnoom_r","imgUrl":"../image/27/portrait.jpg","category":"c3","projectNum":38,"team":0,"leader":""},{"num":28,"nameKor":"문지형","nameEng":"Moon Jihyeong","role":"Art Director","department":0,"professorId":"p05","studentId":2020192014,"eMail":"dogtable4099@naver.com","sns":"@puer.deisgn","imgUrl":"../image/28/portrait.jpg","category":"c0","projectNum":3,"team":1,"leader":0},{"num":29,"nameKor":"민혜연","nameEng":"Min Hyeyeon","role":"Art Director","department":0,"professorId":"p00","studentId":2022192010,"eMail":"hime4ma.y@gmail.com","sns":"@kid.mugi","imgUrl":"../image/29/portrait.jpg","category":"c2","projectNum":29,"team":0,"leader":""},{"num":30,"nameKor":"박민규","nameEng":"Park Mingyu","role":"Application Designer","department":1,"professorId":"p03","studentId":2019194041,"eMail":"mingyu6393@naver.com","sns":"@min.gyu7791","imgUrl":"../image/30/portrait.jpg","category":"c0","projectNum":4,"team":0,"leader":""},{"num":31,"nameKor":"박서영","nameEng":"Park Seoyoung","role":"Product Designer","department":1,"professorId":"p03","studentId":2021192011,"eMail":"pszer0@naver.com","sns":"@ps.zer0","imgUrl":"../image/31/portrait.jpg","category":"c4","projectNum":52,"team":0,"leader":""},{"num":32,"nameKor":"박예인","nameEng":"Park Yein","role":"Prototype","department":1,"professorId":"p01","studentId":2021194013,"eMail":"pyi0413@naver.com","sns":"@p5_baguette","imgUrl":"../image/32/portrait.jpg","category":"c4","projectNum":45,"team":1,"leader":1},{"num":33,"nameKor":"박예진","nameEng":"Park Yejin","role":"Product Designer","department":0,"professorId":"p00","studentId":2021190018,"eMail":"yejin6607@naver.com","sns":"@yejin6607","imgUrl":"../image/33/portrait.jpg","category":"c5","projectNum":71,"team":1,"leader":0},{"num":34,"nameKor":"박재민","nameEng":"Park Jaemin","role":"Web 3D/XR Designer","department":1,"professorId":"p03","studentId":2020192016,"eMail":"shiibadog@tukorea.ac.kr","sns":"@jaemino_ob","imgUrl":"../image/34/portrait.jpg","category":"c2","projectNum":27,"team":1,"leader":0},{"num":35,"nameKor":"박정훈","nameEng":"Park Jeonghun","role":"Industrial Designer","department":0,"professorId":"p05","studentId":2022192012,"eMail":"2022192012@tukorea.ac.kr","sns":"-","imgUrl":"../image/35/portrait.jpg","category":"c2","projectNum":30,"team":0,"leader":""},{"num":36,"nameKor":"박지수","nameEng":"Park Jisoo","role":"UX/UI Designer","department":1,"professorId":"p03","studentId":2021194014,"eMail":"popopo020128@gmail.com","sns":"@dujs_b","imgUrl":"../image/36/portrait.jpg","category":"c0","projectNum":5,"team":0,"leader":""},{"num":37,"nameKor":"박해인","nameEng":"Park Haein","role":"Front Designer","department":0,"professorId":"p06","studentId":2022192014,"eMail":"2022192014@tukorea.ac.kr","sns":"-","imgUrl":"../image/37/portrait.jpg","category":"c5","projectNum":72,"team":0,"leader":""},{"num":38,"nameKor":"박현","nameEng":"Park Hyun","role":"Designer Director","department":0,"professorId":"p04","studentId":2022190039,"eMail":"parkhyun920@naver.com","sns":"-","imgUrl":"../image/38/portrait.jpg","category":"c4","projectNum":53,"team":1,"leader":1},{"num":39,"nameKor":"박혜성","nameEng":"Park Hyeseong","role":"Furniture Designer","department":0,"professorId":"p00","studentId":2021190020,"eMail":"hyesungpark1128@gmail.com","sns":"@comet_design02","imgUrl":"../image/39/portrait.jpg","category":"c5","projectNum":73,"team":0,"leader":""},{"num":40,"nameKor":"박효정","nameEng":"Park Hyojung","role":"UX/UI Designer","department":0,"professorId":"p02","studentId":2021190021,"eMail":"2021190021@tukorea.ac.kr","sns":"-","imgUrl":"../image/40/portrait.jpg","category":"c4","projectNum":54,"team":0,"leader":""},{"num":41,"nameKor":"배아영","nameEng":"Bae Ayeong","role":"UX/UI Designer","department":1,"professorId":"p01","studentId":2022194014,"eMail":"your3ami@tukorea.ac.kr","sns":"-","imgUrl":"../image/41/portrait.jpg","category":"c0","projectNum":6,"team":0,"leader":""},{"num":42,"nameKor":"배혜림","nameEng":"Bae Hyelim","role":"Industrial Designer","department":0,"professorId":"p05","studentId":2021192013,"eMail":"mil2021@tukorea.ac.kr","sns":"-","imgUrl":"../image/42/portrait.jpg","category":"c0","projectNum":7,"team":1,"leader":0},{"num":43,"nameKor":"백대한","nameEng":"Baek Daehan","role":"Product Designer","department":0,"professorId":"p05","studentId":2020192039,"eMail":"eifasfkifk@gmail.com","sns":"-","imgUrl":"../image/43/portrait.jpg","category":"c0","projectNum":8,"team":0,"leader":""},{"num":44,"nameKor":"백미나","nameEng":"Baek Mina","role":"Graphic designer","department":0,"professorId":"p06","studentId":2021190023,"eMail":"wbwyhr@naver.com","sns":"@oeuvreb","imgUrl":"../image/44/portrait.jpg","category":"c4","projectNum":55,"team":0,"leader":""},{"num":45,"nameKor":"서연주","nameEng":"Seo Yeonju","role":"UI/UX,HTML Coder","department":1,"professorId":"p02","studentId":2022194015,"eMail":"syj0305290529@gmail.com","sns":"@yeonju._0","imgUrl":"../image/45/portrait.jpg","category":"c2","projectNum":28,"team":1,"leader":1},{"num":46,"nameKor":"서원진","nameEng":"Seo Wonjin","role":"Living Product Designer","department":0,"professorId":"p05","studentId":2019152026,"eMail":"swj000324@gmail.com","sns":"@wonjin0324","imgUrl":"../image/46/portrait.jpg","category":"c4","projectNum":56,"team":0,"leader":""},{"num":47,"nameKor":"석동현","nameEng":"Suk Donghyun","role":"Visual Director","department":0,"professorId":"p06","studentId":2020190015,"eMail":"andysuk0108@naver.com","sns":"@hyun_108","imgUrl":"../image/47/portrait.jpg","category":"c5","projectNum":66,"team":1,"leader":0},{"num":48,"nameKor":"성수민","nameEng":"Seong Sumin","role":"JS, Flask Prototype","department":1,"professorId":"p02","studentId":2020194016,"eMail":"epwyqqu309@gmail.com","sns":"-","imgUrl":"../image/48/portrait.jpg","category":"c3","projectNum":39,"team":1,"leader":1},{"num":49,"nameKor":"성유승","nameEng":"Sung Yuseung","role":"UX/UI, Prototype","department":1,"professorId":"p02","studentId":2019122021,"eMail":"usngsung0830@naver.com","sns":"@u_seung0830","imgUrl":"../image/49/portrait.jpg","category":"c1","projectNum":25,"team":1,"leader":0},{"num":50,"nameKor":"송지원","nameEng":"Song Jiwon","role":"Creative Designer","department":0,"professorId":"p04","studentId":2021190024,"eMail":"wldnjs0762@naver.com","sns":"@7.27_v","imgUrl":"../image/50/portrait.jpg","category":"c0","projectNum":9,"team":1,"leader":1},{"num":51,"nameKor":"신산하","nameEng":"Shin Sanha","role":"UX/UI Designer","department":1,"professorId":"p02","studentId":2021192014,"eMail":"sanha@tukorea.ac.kr","sns":"@sanamonii","imgUrl":"../image/51/portrait.jpg","category":"c3","projectNum":39,"team":1,"leader":0},{"num":52,"nameKor":"신주혜","nameEng":"Shin Juhye","role":"Product Designer","department":0,"professorId":"p05","studentId":2022190019,"eMail":"grace04god@tukorea.ac.kr","sns":"-","imgUrl":"../image/52/portrait.jpg","category":"c0","projectNum":10,"team":1,"leader":0},{"num":53,"nameKor":"신주희","nameEng":"Shin Juhui","role":"PM · UX/UI · Dev","department":1,"professorId":"p07","studentId":2022194016,"eMail":"lucytomato@naver.com","sns":"@krhee_o","imgUrl":"../image/53/portrait.jpg","category":"c3","projectNum":40,"team":0,"leader":""},{"num":54,"nameKor":"심태섭","nameEng":"Sim Taeseob","role":"UX/UI, Prototype","department":1,"professorId":"p01","studentId":2020194017,"eMail":"1212sts@naver.com","sns":"@tlaxotjq","imgUrl":"../image/54/portrait.jpg","category":"c0","projectNum":11,"team":0,"leader":""},{"num":55,"nameKor":"안상은","nameEng":"An Sangeun","role":"Product Designer","department":1,"professorId":"p03","studentId":2022194018,"eMail":"iltkddms@tukorea.ac.kr","sns":"@in_saengeun","imgUrl":"../image/55/portrait.jpg","category":"c4","projectNum":57,"team":1,"leader":1},{"num":56,"nameKor":"염수민","nameEng":"Yeom Sumin","role":"UX/UI, Prototype","department":1,"professorId":"p01","studentId":2022194021,"eMail":"yeommin2528@gmail.com","sns":"-","imgUrl":"../image/56/portrait.jpg","category":"c4","projectNum":58,"team":0,"leader":""},{"num":57,"nameKor":"유수현","nameEng":"Ryu Soohyun","role":"Modeling, UX/UI","department":0,"professorId":"p06","studentId":2022192019,"eMail":"suhyeon9145@naver.com","sns":"@dbtn_246","imgUrl":"../image/57/portrait.jpg","category":"c2","projectNum":31,"team":1,"leader":1},{"num":58,"nameKor":"윤모란","nameEng":"Yoon Moran","role":"Modeling, Rendering","department":0,"professorId":"p06","studentId":2022190024,"eMail":"moran_a_486@naver.com","sns":"-","imgUrl":"../image/58/portrait.jpg","category":"c2","projectNum":31,"team":1,"leader":0},{"num":59,"nameKor":"윤서희","nameEng":"Yoon Seohee","role":"Product Designer","department":0,"professorId":"p00","studentId":2020192021,"eMail":"dbstjgml000@naver.com","sns":"@hi_seoheeeee","imgUrl":"../image/59/portrait.jpg","category":"c0","projectNum":12,"team":0,"leader":""},{"num":60,"nameKor":"윤재익","nameEng":"Yun Jaeik","role":"Art Director","department":1,"professorId":"p01","studentId":2020194018,"eMail":"jwodlr10014@naver.com","sns":"@bpink._.j","imgUrl":"../image/60/portrait.jpg","category":"c0","projectNum":13,"team":0,"leader":""},{"num":61,"nameKor":"이교연","nameEng":"Lee Gyoyeon","role":"Product,Graphic","department":0,"professorId":"p01","studentId":2022192038,"eMail":"inacutewaytoday@gmail.com","sns":"-","imgUrl":"../image/61/portrait.jpg","category":"c2","projectNum":32,"team":0,"leader":""},{"num":62,"nameKor":"이도훈","nameEng":"Lee Dohun","role":"Mobility Designer","department":0,"professorId":"p02","studentId":2020190025,"eMail":"bestson0137@tukorea.ac.kr","sns":"@dl_doh","imgUrl":"../image/62/portrait.jpg","category":"c5","projectNum":74,"team":0,"leader":""},{"num":63,"nameKor":"이민욱","nameEng":"Lee Minuk","role":"Product Designer","department":1,"professorId":"p01","studentId":2020194021,"eMail":"lmu0306@naver.com","sns":"-","imgUrl":"../image/63/portrait.jpg","category":"c4","projectNum":59,"team":0,"leader":""},{"num":64,"nameKor":"이상","nameEng":"Lee Sang","role":"Industrial Designer","department":0,"professorId":"p02","studentId":2020190027,"eMail":"23isgood@naver.com","sns":"@leesang2001","imgUrl":"../image/64/portrait.jpg","category":"c3","projectNum":35,"team":1,"leader":1},{"num":65,"nameKor":"이영","nameEng":"Lee Young","role":"Product Designer","department":1,"professorId":"p03","studentId":2022194025,"eMail":"young2003@tukorea.ac.kr","sns":"@username","imgUrl":"../image/65/portrait.jpg","category":"c4","projectNum":57,"team":1,"leader":0},{"num":66,"nameKor":"이영재","nameEng":"Lee Youngjae","role":"Product Designer","department":1,"professorId":"p03","studentId":2020194023,"eMail":"roiray0320@gmail.com","sns":"@6amtol","imgUrl":"../image/66/portrait.jpg","category":"c0","projectNum":14,"team":1,"leader":0},{"num":67,"nameKor":"이웅찬","nameEng":"Lee Woongchan","role":"Product Designer","department":0,"professorId":"p02","studentId":2020192028,"eMail":"dldndcks01@naver.com","sns":"@eedndcks","imgUrl":"../image/67/portrait.jpg","category":"c3","projectNum":41,"team":0,"leader":""},{"num":68,"nameKor":"이준오","nameEng":"Lee Juno","role":"Graphic, 3D, UI/UX","department":0,"professorId":"p00","studentId":2020190030,"eMail":"ljuno421@naver.com","sns":"@jun_duck0421","imgUrl":"../image/68/portrait.jpg","category":"c0","projectNum":15,"team":1,"leader":1},{"num":69,"nameKor":"이지민","nameEng":"Lee Jimin","role":"UX/UI, Prototype","department":1,"professorId":"p02","studentId":2020194026,"eMail":"ibs7533@naver.com","sns":"@minigmin_1004","imgUrl":"../image/69/portrait.jpg","category":"c1","projectNum":25,"team":1,"leader":1},{"num":70,"nameKor":"이지현","nameEng":"Lee Jihyeon","role":"Drone Designer","department":0,"professorId":"p04","studentId":2022192023,"eMail":"lanius4257@tukorea.ac.kr","sns":"@__jiwawa__","imgUrl":"../image/70/portrait.jpg","category":"c5","projectNum":67,"team":1,"leader":0},{"num":71,"nameKor":"이채연","nameEng":"Lee Chaeyeon","role":"UX/UI, Front-End","department":1,"professorId":"p07","studentId":2021194022,"eMail":"cvgh6835@naver.com","sns":"@cvgh._.ly","imgUrl":"../image/71/portrait.jpg","category":"c0","projectNum":16,"team":0,"leader":""},{"num":72,"nameKor":"이채원","nameEng":"Lee Chaewon","role":"Product Designer","department":0,"professorId":"p06","studentId":2022192024,"eMail":"chaerry3907@naver.com","sns":"@chae_rr","imgUrl":"../image/72/portrait.jpg","category":"c0","projectNum":7,"team":1,"leader":1},{"num":73,"nameKor":"이채원","nameEng":"Lee Chaewon","role":"Product Designer","department":1,"professorId":"p03","studentId":2021194023,"eMail":"mondyu1024@gmail.com","sns":"@di_ed_ie","imgUrl":"../image/73/portrait.jpg","category":"c0","projectNum":14,"team":1,"leader":1},{"num":74,"nameKor":"임세준","nameEng":"Im Sejun","role":"Product Designer","department":0,"professorId":"p04","studentId":2019190043,"eMail":"helicat123@naver.com","sns":"-","imgUrl":"../image/74/portrait.jpg","category":"c5","projectNum":75,"team":1,"leader":1},{"num":75,"nameKor":"임소이","nameEng":"Yim Soie","role":"3d Designer","department":0,"professorId":"p05","studentId":2022190030,"eMail":"soie0410@tukorea.ac.kr","sns":"@idiox_1","imgUrl":"../image/75/portrait.jpg","category":"c0","projectNum":17,"team":1,"leader":1},{"num":76,"nameKor":"임종석","nameEng":"Lim Jongseok","role":"Product Designer","department":0,"professorId":"p06","studentId":2020192032,"eMail":"rimjs01@tukorea.ac.kr","sns":"@im_seok01","imgUrl":"../image/76/portrait.jpg","category":"c0","projectNum":18,"team":0,"leader":""},{"num":77,"nameKor":"전준범","nameEng":"Jeon Junbeom","role":"UX, 3D Graphics","department":1,"professorId":"p01","studentId":2021194028,"eMail":"@jb_jeon@naver.com","sns":"@imdiverstandinoncliff","imgUrl":"../image/77/portrait.jpg","category":"c4","projectNum":60,"team":0,"leader":""},{"num":78,"nameKor":"정문선","nameEng":"Jung Moonsun","role":"UX/UI Designer","department":0,"professorId":"p02","studentId":2020190033,"eMail":"munseon9822@naver.com","sns":"@moooon_suuuuuun","imgUrl":"../image/78/portrait.jpg","category":"c3","projectNum":42,"team":0,"leader":""},{"num":79,"nameKor":"정민호","nameEng":"Jung Minho","role":"Industrial Designer","department":0,"professorId":"p04","studentId":2020190034,"eMail":"jmh011014@naver.com","sns":"@j_m2nh5","imgUrl":"../image/79/portrait.jpg","category":"c5","projectNum":68,"team":1,"leader":1},{"num":80,"nameKor":"정유진","nameEng":"Jung Yuzin","role":"Product Designer","department":0,"professorId":"p05","studentId":2022190033,"eMail":"akf0301@naver.com","sns":"@jhin0112__","imgUrl":"../image/80/portrait.jpg","category":"c5","projectNum":76,"team":0,"leader":""},{"num":81,"nameKor":"정지원","nameEng":"Jung Jiwon","role":"3D Designer","department":0,"professorId":"p06","studentId":2022192025,"eMail":"marcellar1071@gmail.com","sns":"@stopmongkki","imgUrl":"../image/81/portrait.jpg","category":"c0","projectNum":17,"team":1,"leader":0},{"num":82,"nameKor":"정혜원","nameEng":"Jeong Hyewon","role":"Visual Designer","department":0,"professorId":"p06","studentId":2021190034,"eMail":"jhw275@naver.com","sns":"-","imgUrl":"../image/82/portrait.jpg","category":"c0","projectNum":10,"team":1,"leader":1},{"num":83,"nameKor":"정혜조","nameEng":"Jeong Hyejo","role":"3D Designer","department":0,"professorId":"p00","studentId":2022192028,"eMail":"hyejo5614@naver.com","sns":"@11.7OK","imgUrl":"../image/83/portrait.jpg","category":"c4","projectNum":61,"team":0,"leader":""},{"num":84,"nameKor":"정호균","nameEng":"Jeong Hokyun","role":"UX/UI","department":1,"professorId":"p01","studentId":2020194031,"eMail":"hohokyun@naver.com","sns":"-","imgUrl":"../image/84/portrait.jpg","category":"c4","projectNum":62,"team":0,"leader":""},{"num":85,"nameKor":"조선화","nameEng":"Jo Sunhwa","role":"Visual Designer","department":0,"professorId":"p04","studentId":2022192039,"eMail":"jo5629@naver.com","sns":"@_sh_1114_","imgUrl":"../image/85/portrait.jpg","category":"c4","projectNum":53,"team":1,"leader":0},{"num":86,"nameKor":"조채빈","nameEng":"Cho Chaebin","role":"Robot Designer","department":0,"professorId":"p00","studentId":2021192029,"eMail":"chea0000@tukorea.ac.kr","sns":"-","imgUrl":"../image/86/portrait.jpg","category":"c0","projectNum":19,"team":0,"leader":""},{"num":87,"nameKor":"주예지","nameEng":"Ju Yeji","role":"UX/UI","department":1,"professorId":"p03","studentId":2022194040,"eMail":"jooyeiji@naver.com","sns":"@yej1__","imgUrl":"../image/87/portrait.jpg","category":"c0","projectNum":20,"team":0,"leader":""},{"num":88,"nameKor":"진세원","nameEng":"Jin Sewon","role":"Product & Visual","department":0,"professorId":"p00","studentId":2022192030,"eMail":"sewoneee@naver.com","sns":"@jinsewon99","imgUrl":"../image/88/portrait.jpg","category":"c0","projectNum":15,"team":1,"leader":0},{"num":89,"nameKor":"진효민","nameEng":"Jin Hyomin","role":"Living Designer","department":0,"professorId":"p07","studentId":2022190040,"eMail":"jhm8912@naver.com","sns":"@hyomin_eao","imgUrl":"../image/89/portrait.jpg","category":"c4","projectNum":63,"team":0,"leader":""},{"num":90,"nameKor":"차소이","nameEng":"Cha Soyi","role":"Industrial Designer","department":0,"professorId":"p06","studentId":2022192040,"eMail":"osjj2202@naver.com","sns":"@cow__tooth","imgUrl":"../image/90/portrait.jpg","category":"c0","projectNum":21,"team":0,"leader":""},{"num":91,"nameKor":"차한비","nameEng":"Cha Hanbi","role":"Product Designer","department":0,"professorId":"p02","studentId":2022192031,"eMail":"cha4786@naver.com","sns":"@raincar__","imgUrl":"../image/91/portrait.jpg","category":"c2","projectNum":33,"team":0,"leader":""},{"num":92,"nameKor":"최가현","nameEng":"Choi Gahyun","role":"XR Controller","department":1,"professorId":"p07","studentId":2022194034,"eMail":"poiulkjhmnb098@naver.com","sns":"@_.ga._.xx","imgUrl":"../image/92/portrait.jpg","category":"c3","projectNum":43,"team":0,"leader":""},{"num":93,"nameKor":"한채원","nameEng":"Han Chaewon","role":"Product Design","department":0,"professorId":"p04","studentId":2021190036,"eMail":"2chaetwo@gmail.com","sns":"@1chaeone","imgUrl":"../image/93/portrait.jpg","category":"c4","projectNum":64,"team":0,"leader":""},{"num":94,"nameKor":"함은서","nameEng":"Ham Eunseo","role":"UX/UI Designer","department":1,"professorId":"p03","studentId":2021192034,"eMail":"hamunseo0894@naver.com","sns":"@hama_pit_a_pat","imgUrl":"../image/94/portrait.jpg","category":"c0","projectNum":22,"team":0,"leader":""},{"num":95,"nameKor":"허도윤","nameEng":"Heo Doyun","role":"UX/UI","department":1,"professorId":"p03","studentId":2022194041,"eMail":"saver2075@icloud.com","sns":"-","imgUrl":"../image/95/portrait.jpg","category":"c3","projectNum":44,"team":0,"leader":""},{"num":96,"nameKor":"허지유","nameEng":"Heo Jiyu","role":"Art Director","department":0,"professorId":"p04","studentId":2021192035,"eMail":"jjoojjoo0314@naver.com","sns":"@ji._.iu","imgUrl":"../image/96/portrait.jpg","category":"c0","projectNum":9,"team":1,"leader":0},{"num":97,"nameKor":"홍승재","nameEng":"Hong Seungjae","role":"Product Designer","department":0,"professorId":"p02","studentId":2020192036,"eMail":"h010505@naver.com","sns":"@dent__de","imgUrl":"../image/97/portrait.jpg","category":"c4","projectNum":65,"team":0,"leader":""},{"num":98,"nameKor":"홍지우","nameEng":"Hong Jiwoo","role":"Art Director","department":0,"professorId":"p04","studentId":2021192036,"eMail":"hongjiwoo222@gmail.com","sns":"@ghdwldnnn","imgUrl":"../image/98/portrait.jpg","category":"c5","projectNum":75,"team":1,"leader":0},{"num":99,"nameKor":"황수정","nameEng":"Hwang Sujeong","role":"3D Designer","department":0,"professorId":"p05","studentId":2022190036,"eMail":"bvnm1234@tukorea.ac.kr","sns":"@suj2ong","imgUrl":"../image/99/portrait.jpg","category":"c0","projectNum":23,"team":0,"leader":""}]'),oR=[{id:"p00",nameKor:"장영주",nameEng:"Jang Youngjoo",rank:"학부장, 교수",email:"jyj@tukorea.ac.kr",education:["㈜LG 전자 디자인 연구소","㈜인터디자인 디자인 기획실장","한국디지털디자인학회 이사","경기도 시흥시 정책기획단 정책위원","제품디자인·브랜드 개발센터 [EH]책임교수","디자인비지니스혁신 센터장"],field:["제품디자인·브랜드 개발","디자인 조직과 협동적 Process","제품디자인과 산업기술의 통합적 시스템 구축"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524695988100.jpg"},{id:"p01",nameKor:"권오재",nameEng:"Kwon Ojae",rank:"교수",email:"kwsokw@tukorea.ac.kr",education:["㈜키메이커스 대표이사","㈜삼성전자 디자인경영센터 UX연구소 그룹장","㈜LG전자 디자인종합연구소 가전제품팀 연구원","서울 성북구청, 용인시 디자인위원","ESK / KOSES / KADI 이사, 서비스디자인학회 사업부회장","2016 대한민국 ICT INNOVATION 대상 미래부장관 유공자 표창"],field:["UX 기반 제품/서비스 디자인 기획 및 양산화 개발","제품 인터페이스 UI 분석 및 UI 설계","제품디자인, 설계 및 양산용 제품 개발","사용자의 감성을 자극하는 밸류 체인(Value Chain) 요인 연구"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524642556100.jpg"},{id:"p02",nameKor:"김 억",nameEng:"Kim Eok",rank:"교수, 학생처장",email:"kimeok@tukorea.ac.kr",education:["㈜LG전자 디자인경영센터 선임연구원","KAIST 총동문회 이사","한국산업디자이너협회 이사 / 한국서비스디자인학회 이사","한국디자인기초조형학회 / 한국디자인학회 이사","디자인융합전문대학원 사업단장"],field:["디자인 전략 및 기획","서비스디자인 및 PSS(Product-Service System) 개발","도시 공공 디자인"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524658322100.jpg"},{id:"p03",nameKor:"김한종",nameEng:"Kim Hanjong",rank:"조교수, PD교수",email:"hanjongkim@tukorea.ac.kr",education:["AR 기반의 인터랙티브 제품 프로토타이핑 도구 개발","이동형음압병동의 디자인 요구사항 수립 연구","이동형음압병동 설계를 위한 디자인 도구 개발","한국기계연구원 산업용 SW UX/UI 가이드라인 개발"],field:["Web 기반 3D 그래픽스","SW 시스템 디자인 / 프론트엔드 개발","디자인 지원 도구 개발"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524669896100.jpg"},{id:"p04",nameKor:"조남주",nameEng:"Jo Namjoo",rank:"교수,특별보좌역",email:"njjoh@tukorea.ac.kr",education:["서울특별시 서울디자인위원회 심의위원","국립공원관리공단 디자인 분야 자문위원","'디자인코리아 2003'국제회의 패널리스트","㈜현대 리바트 가구 디자인아웃소싱 프로젝트"],field:["가구 디자인 엔지니어링","지속가능한 공공디자인","제품디자인 엔지니어링"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524711232100.jpg"},{id:"p05",nameKor:"한민섭",nameEng:"Han Minseop",rank:"부교수",email:"mshan@tukorea.ac.kr",education:["CISD정보저장기기 연구센터 전문연구원","㈜코닝 정밀소재 책임연구원","㈜삼성전자 생산기술연구소 책임연구원"],field:["나노/마이크로 초정밀 미세 가공 공정","Equipment H/W 설계 및 시뮬레이션","융복합 가공 시스템 설계"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524614469100.jpg"},{id:"p06",nameKor:"홍성수",nameEng:"Hong Seongsu",rank:"교수, 국제처장",email:"hss@tukorea.ac.kr",education:["3차원 의료영상시스템(MRI) 제품설계 및 디자인","다족형견마로봇 / 헬스케어로봇 / 재활보조로봇","식사보조로봇/ 수중로봇/ 청소로봇 / 웨어러블 로봇","협동로봇/ 자율주행로봇/ 순찰로봇/ 공항안내로봇 등 90여종 로봇 개발"],field:["로봇 시스템 개발/ 로봇디자인/ HRI 디자인","로봇 문화콘텐츠 기술개발","신기술 전시기획/ 전시시스템개발"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524724386100.jpg"},{id:"p07",nameKor:"김태균",nameEng:"Kim Taekyun",rank:"조교수, 진로취업지도교수",email:"tgkim1design@tukorea.ac.kr",education:["영국, 영국 국제디자인박람회전시 ‘London 100% Design‘ 초청 출품","중국, SUPER DESIGNERS: Exploration of Creative Forms, The Boundaries of Design Forms 초청 출품","INNOCHINA 대상","나는글로벌벤처다 동상","Spark Awards-Silver"],field:["AI 기반 제품·공공시설물 디자인 실무·방법론","UX 중심 디자인 전략·개발","지식 주도 디자인 아이디에이션 기반 실무 디자인 설계 및 교수법"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1724738930608100.jpg"}],eu=JSON.parse(`[{"members":[1],"category":"c0","projectNum":0,"titleKor":"체계적인 아이디어 발전을 위한 AI기반 디자인 실험 워크스페이스","titleEng":"IDEA UNION LAB","description":"IDEA UNION LAB은 아이디어 발전 과정에서 어려움을 겪는 디자이너를 위한 AI 기반 디자인 실험실 서비스입니다. 단순히 AI에게 디자인 결과물을 요청하는 방식이 아니라 디자인 프로세스처럼 방법론의 프로세스에 따라 인사이트를 도출하며, 발전된 아이디어 및 생성 과정을 제공합니다. 이를 통해 보다 체계적으로 아이디어를 발전시킬 수 있으며 방법론을 학습할 수 있습니다.","videoId":1128192125},{"members":[16],"category":"c0","projectNum":1,"titleKor":"맵시","titleEng":"MAPSEE","description":"MAPSEE는 사용자의 취향을 분석해 생성한 퍼소나와 실제 착장을 비교함으로써, 두 스타일 간의 차이를 시각적으로 보여주는 서비스입니다. 색상·핏·무드의 유사도와 차이를 ‘패션 지도’처럼 표현하여, 사용자가 자신의 옷맵시가 어떤 방향으로 나아가고 있는지 한눈에 확인할 수 있도록 돕습니다.","videoId":1127543207},{"members":[18],"category":"c0","projectNum":2,"titleKor":"건물화재내부정찰로봇","titleEng":"RESQ","description":"화재 발생 후 골든타임을 지키기 위해서 현재 소방관인력으로만 힘든  경우가 많습니다. 고온·연기·어두운 환경에서도 자유롭게 이동하며 \\n내부를 탐색할 수 있으며, 실시간 영상 데이터를 제공해 소방관의 안전한 구조 활동을 지원합니다. ResQ는 화재 현장에서 인명 피해를 \\n최소화할 수 있습니다.   \\n있는 든든한 파트너입니다.","videoId":1128457679},{"members":[24,28],"category":"c0","projectNum":3,"titleKor":"스카이 가드 듀오","titleEng":"SKY GUARD DUO","description":"매년 증가하는 버드스트라이크 위협에 맞서는 'SKY GUARD DUO'. 이 시스템은 지상을 담당하는 자율주행 로봇과 상공을 책임지는 드론 편대로 구성된 이중 방어 솔루션입니다. AI가 위협을 탐지하면 에어캐논이 먼저 대응하고, 필요시 드론 편대가 출격하여 입체 작전을 펼칩니다. 공항 안전의 새로운 기준을 제시합니다.","videoId":1126407280},{"members":[30],"category":"c0","projectNum":4,"titleKor":"마이다꾸","titleEng":"MYDAKU","description":"MYDAKU 는 작성한 일기의 내용과 키워드를 통해 그날의 기분과 일상을 표현한 AI 스티커 제작 서비스입니다. 업로드 한 일기 사진을 바탕으로 키워드를 선택하여 감정이나 주제를 시각적으로 표현할 수 있는 AI 스티커를 제공받습니다. 또한 자동 생성된 AI 스티커를 저장하며 제작한 스티커와 키워드를 바탕으로 타 사용자와 스티커를 공유할 수 있습니다.","videoId":1126865139},{"members":[36],"category":"c0","projectNum":5,"titleKor":"레디큐","titleEng":"READYQ","description":"READYQ는 필기 자료를 인식하여 퀴즈를 생성하는 AI 기반 학습 관리 서비스입니다. 암기 학습에 어려움을 겪는 사용자를 위해 맞춤형 퀴즈를 제공하고 체계적인 기억 인출 연습을 돕습니다. 나아가 생성된 퀴즈를 통해 자연스러운 복습 기회와 효율적인 학습 관리를 지원합니다.","videoId":1127539556},{"members":[41],"category":"c0","projectNum":6,"titleKor":"조각조각","titleEng":"JOGAKJOGAK","description":"조각조각은 사용자가 키워드를 바탕으로 스토리를 작성하고, 해당 스토리에 맞춰 사진을 촬영하면 AI가 일러스트를 완성시켜 주는 게임형 서비스입니다. 캐릭터 애니메이션 요소를 통해 사용자에게 흥미를 제공하여 사진 속에 담긴 순간의 이야기와 감정을 풍부하게 표현하도록 돕습니다.","videoId":1126740651},{"members":[72,42],"category":"c0","projectNum":7,"titleKor":"팔로잉 충전 스테이션 드론","titleEng":"FOLLOWING CHARGING STATION DRONE","description":"Following Charging Station Drone은 공중급유기 기술에서 착안한 제품으로 드론을 충전해주는 이동식 충전소 역할을 수행한다.  이 충전 드론은 배터리 한계로 비행 시간이 짧았던 드론들을 충전하므로써 효율성을 극대화하고 편한 충전 방식을 제공한다.","videoId":1127151890},{"members":[43],"category":"c0","projectNum":8,"titleKor":"에이아이스마트모니터암","titleEng":"AI SMART MONITORARM","description":"AI 스마트 모니터암은 사용자의 자세를 인식해 올바르게 교정해주는 스마트 디바이스입니다. 내장된 카메라와 인공지능이 목과 어깨의 움직임을 실시간으로 감지하여 피로를 줄이고 건강한 자세 습관을 형성하도록 돕습니다.","videoId":1127217010},{"members":[50,96],"category":"c0","projectNum":9,"titleKor":"문화유산 복원 시스템 로봇","titleEng":"BIND","description":"국내 문화유산 복원 현장은 인력난과 수작업 한계로 복원율이 1%에 불과합니다. BIND는 유물 복원 작업의 효율성과 정확성을 높여 이 문제를 해결하기 위해 개발되었습니다. 레이저 세척, 3D 스캐닝, AI 모델링, 세라믹 프린팅, CNC 가공을 통합해 원본의 질감까지 재현하며, 이를 통해 소중한 문화유산을 안전하게 보존하여 미래 세대에 온전히 전달합니다.","videoId":1127032149},{"members":[82,52],"category":"c0","projectNum":10,"titleKor":"자기주도학습 강화를 위한 학습 독려 로봇","titleEng":"ENDY","description":"공부 도중 휴대전화 사용, 졸음 상황 등 사용자의 학습 상태를 고려하여 바른 학습 태도를 유지하도록 로봇이 재촉하고 시간에 따른 공부 진도를 확인하며 학습 텐션을 유지할 수 있도록 피드백을 한다. 로봇을 통한 사용자의 학습 관찰과 실시간 피드백을 가능케 하여 AI 학습 컴페니언 로봇 개발을 도모하고자 하였다.","videoId":1126889031},{"members":[54],"category":"c0","projectNum":11,"titleKor":"툰챗","titleEng":"TOONCHAT","description":"툰-챗'은 인간관계가 지속될수록 표현이 단조로워지고 단어가 생략되어 가는 온라인 채팅 환경을 만화 같은 그래픽으로 표현하여 풍부하고 즐거운 소통 경험으로 유도하는 서비스입니다. 사용자가 입력한 채팅은 각자 선택한 화풍의 그래픽으로 출력되고, 출력된 서로의 그래픽을 공유하며 새로운 소통 경험을 만듭니다.","videoId":1126711648},{"members":[59],"category":"c0","projectNum":12,"titleKor":"미래형 방범 솔루션 귀갓길 동행 드론","titleEng":"RING GUARDIAN","description":"RING GUARDIAN은 야간 귀가 중 사용자의 머리 위를 따라 이동하며 길을 비추고 주변을 기록하는 방범 드론입니다. 어둠 속에서도 안전한 동행을 제공하며, 엔젤링 형태의 조명으로 심리적 안정감을, 경찰 시스템과 연동되어 신속한 대응과 실질적 보호를 지원합니다.","videoId":1127418304},{"members":[60],"category":"c0","projectNum":13,"titleKor":"마스크 이모지","titleEng":"MASK EMOJI","description":"MASK - EMOJI는 청소년과 20~30대가 SNS 소통 속에서 ‘가면’을 쓰고 진짜 감정을 숨기는 현상에서 착안한 프로젝트입니다. 사용자는 자신만의 ‘가면’을 직접 꾸미며, AI 로봇과 친구처럼 대화하면서 감정을 자연스럽게 표현할 수 있습니다. 또한 방대한 수집 요소를 결합해 감정 표현의 새로운 방식을 제시하는 차별화된 경험을 선사합니다.","videoId":1127190833},{"members":[73,66],"category":"c0","projectNum":14,"titleKor":"위플","titleEng":"WEEPLE","description":"Weeple은 가족, 친구, 동호회 등 우리 그룹이 함께 찍은 사진과 짧은 설명을 입력하면,\\nAI가 그룹의  분위기와 특성을 분석하여 우리만의 보드게임 테마를 만들어주는 서비스입니다.\\n같이 찍은 사진이 게임으로 바뀌고, 우리만의 추억과 개성이 담긴 미션에 도전해볼 수 있습니다.\\n함께 웃고 도전하면서, 우리 그룹만의 스토리를 즐길 수 있는 보드게임 테마를 만들어보세요!","videoId":1127052600},{"members":[68,88],"category":"c0","projectNum":15,"titleKor":"수중 속 골프공 수거로봇","titleEng":"AQUATRIEVE","description":"매년 전 세계 골프장에서 유실되는 1억 개 이상의 골프공은 해양 오염과 미세플라스틱 문제를 야기합니다. 현재는 다이버가 직접 수중에 들어가 회수하지만, 어두운 환경과 공에 맞을 위험이 있습니다. 본 로봇은 자율주행으로 공을 수거하고 스테이션으로 운반해 로스트볼로 재활용하고, 이니셜·특징이 있는 공은 앱을 통해 주인에게 반환합니다.","videoId":1127036871},{"members":[71],"category":"c0","projectNum":16,"titleKor":"뮤즈","titleEng":"MUSE","description":"MUSE는 디자이너가 논문을 이해하고 실무에 바로 활용하도록 돕는 AI 기반 웹서비스입니다. AI가 논문을 분석하여 디자인 브리프, 퍼소나 스토리, 디자인 가이드라인, 관련 자료 추천, 아이디어 생성 도우미의 5가지 실무에 특화된 형태(텍스트 및 시각 자료 결합)로 재구성해 제공합니다. 도출된 인사이트는 프로젝트 폴더에 체계적으로 저장 및 관리할 수 있으며, 직관적인 UI로 효율적인 디자인 작업을 지원합니다.","videoId":1127403683},{"members":[75,81],"category":"c0","projectNum":17,"titleKor":"공항 위험물질 및 마약 탐지 로봇","titleEng":"CO-BOT","description":"마약, 폭발물, 바이러스 등 눈에 보이지 않는 위험을 빠르고 정확하게 탐지해 사고를 예방합니다.다중 센서와 AI 전자코를 이용해 공기 중 분자 변화를 분석하고, 자율주행으로 넓은 공간을 순찰합니다.탐지 정보는 실시간으로 전달되며, 검역, 마약 탐지, 폭발물 탐지 모드를 상황에 맞게 전환할 수 있습니다.이 로봇은 공항 같은 시설을 안전하게 지키는 스마트한 감시 파트너입니다.","videoId":1127049607},{"members":[76],"category":"c0","projectNum":18,"titleKor":"전기차 화재 진압 로봇","titleEng":"E-FIBOT","description":"최근 전기차 시장의 확대와 함께 전기차 화재 또한 사회적 문제로 떠오르고 있다.\\n전기차 화재 진압에서 가장 중요한 것은 신속한 소화이다.\\n\\n하지만 기존 간접 소화 방식은 완전 소화까지 약 3~4시간이 소요되어 피해 확산을 \\n막기 어렵다. 또다른 방식인 직접 소화 방식은 속도는 빠르지만 \\n폭발, 감전과 같은 위험성 때문에 쉽게 쓰기 어렵다.\\n\\n이러한 전기차 화재를 신속하고 안전하게 진압하기 위해 E-FIBOT을 개발하였다.","videoId":1127469972},{"members":[86],"category":"c0","projectNum":19,"titleKor":"해저 미세플라스틱 수거 로봇","titleEng":"Aqua Breeze","description":"Aqua Breeze는 마찰대전 발전소자를 활용한 자가발전 로봇으로 외부 전력 없이도 자율적으로 작동하며 정전기 흡착 원리를 통해 해저에 침적된 미세플라스틱을 친환경적으로 수거하여 기존의 방식으로는 처리하기 어려웠던 문제를 해결하고 이를 통해 해양 생태계와 퇴적 환경을 보호하는 지속가능한 솔루션을 제공합니다.","videoId":"-"},{"members":[87],"category":"c0","projectNum":20,"titleKor":"노블","titleEng":"NOBLE","description":"Noble은 웹소설 집필을 원하는 사용자를 위한 메모 기반 스토리 생성 서비스입니다. 아이디어 메모를 관리하고 선택한 메모를 토대로 다양한 플롯 생성을 제공합니다. 또한 AI 편집 기능을 통해 문장을 다듬고 완성도 있는 웹소설로 발전시킬 수 있습니다. 사용자는 창작 과정의 부담을 줄이고 보다 쉽고 즐겁게 글쓰기를 이어갈 수 있습니다.","videoId":1126680452},{"members":[90],"category":"c0","projectNum":21,"titleKor":"스노모","titleEng":"SNOMO","description":"SNOMO는 겨울철 빈번히 발생하는 비닐하우스 피해를 예방하기 위해서 적설량을 자동 감지해 눈을 제거하는 비닐하우스 전용 제설 로봇입니다. 이를 통해 고령화된 농촌의 인력 소모를 줄이고, 농작물 피해와 복구 비용을 줄일 수 있습니다. 더 나아가 현재뿐만 아니라 미래에 이상 기후로 인하여 더욱 잦고 심각해질 피해에 대응하기 위해서도 필요한 제품입니다.","videoId":1127827337},{"members":[94],"category":"c0","projectNum":22,"titleKor":"초보디자이너들을 위한 실전형 학습 UX/UI 챌린지","titleEng":"RE:CHAL","description":"AI를 활용해 실제 사용자 리뷰를 분석하고, 초보 UX/UI 디자이너가 실무 감각을 기를 수 있는 과제를 자동 생성하는 학습 도구입니다. 데이터 기반의 UX 과제를 통해 사용자는 문제 해결 중심의 사고를 훈련하고, 사용자 경험을 분석하는 능력을 자연스럽게 향상시킬 수 있습니다.","videoId":1127540743},{"members":[99],"category":"c0","projectNum":23,"titleKor":"파미","titleEng":"FARMIE","description":"FARMIE는 농업 인구 감소와 고령화에 대응하여 개발된 스마트 작물보호제 살포 로봇입니다. FARMIE 실시간으로 작물 상태와 병해충을 모니터링하여 최적의 작업 경로를 자동으로 계획/실행합니다. 수집된 데이터 분석을 통해 효과적인 방제 전략을 수립하여 농작업의 효율성, 정밀도 및 효과를 크게 향상시키고 작업자의 부담을 줄이는 것을 목표로 합니다","videoId":1127428419},{"members":[3],"category":"c1","projectNum":24,"titleKor":"심부름 탐험","titleEng":"ERRAND ADVENTURE","description":"어린이의 건강한 성장과정을 위해서는 책임감과 자립심을 기르는 것이 매우 중요합니다. 이때, 심부름이 좋은 효과를 가져다주지만 아이들은 심부름 과정을 귀찮고 지루하게 여기는 경향이 있습니다. 이러한 문제를 해결하기 위해 아이들이 캐릭터와 함께 상호작용하며 놀이처럼 즐길 수 있는 탐험 컨셉의 어린이용 심부름 서비스 제작하였습니다.","videoId":1127852716},{"members":[69,49],"category":"c1","projectNum":25,"titleKor":"모티","titleEng":"MOTI","description":"MOTI는 앞날의 불확실성에 불안을 느끼는 청소년들을 위해 버킷리스트라는 목표를 세우며 보다 현실적으로 꿈에 다가갈 수 있도록 유도하는 청소년 자아실현 가이드 플랫폼입니다. 우리는 사용자의 흥미와 관심사를 바탕으로 새로운 도전과제를 제시하고, 그에 어울리는 리워드를 제시함으로써 청소년들의 끊임없는 탐구심을 이끌어냅니다.","videoId":1127523874},{"members":[6,2],"category":"c2","projectNum":26,"titleKor":"해빗","titleEng":"HAVIT","description":"HAVIT은 건강과 만족 사이에서 자신만의 균형을 찾고자 하는 이들을 위한 스마트 도시락 및 식단 관리 서비스입니다. 급격한 생활 양식의 변화와 기술 발전으로 젊은 세대의 가속 노화가 두드러진 현시점, HAVIT은 즐거움을 더한 지속 가능한 건강 관리, 즉 헬시 플레저를 추구하는 이들에게 개인화된 루틴을 통한 새로운 경험을 제안합니다.","videoId":"1127431236?h=239d5ba621"},{"members":[4,34],"category":"c2","projectNum":27,"titleKor":"3D 필드 성장형 러닝서비스","titleEng":"COAK","description":"COAK은 러닝 기록을 특별한 경험으로 바꾸어 동기부여하는 서비스입니다. \\n사용자가 달린 러닝 루트를 시각화 하고 3D 필드로 생성합니다.\\n같은 루트를 반복해 달릴수록 필드의 자연 요소가 점차 성장합니다. \\n크루와 함께한 기록은 모여 하나의 숲을 이루며, 새로운 방식의 러닝 경험을 통해 지속적인 동기를 제공합니다.","videoId":1127539956},{"members":[45,19],"category":"c2","projectNum":28,"titleKor":"감정을 머물러 바라볼 수 있는 감정 기록 앱","titleEng":"Feeltr","description":"Feeltr는 감각 자극(온도, 밝기, 촉각, 청각)을 기반으로 감정을 비유하고 세부 감정을 선택해 모호한 감정을 인식하도록 돕습니다. 이후 감정이 발생한 상황과 반응을 일기로 정리하고, 개인 맞춤형 케어를 제안합니다. 감정 기록은 감정 카드로 생성되어 달력에 저장되며,  감정 변화 흐름을 직관적으로 확인하고 자기 이해와 정서 회복력을 높일 수 있습니다.","videoId":1127177184},{"members":[29],"category":"c2","projectNum":29,"titleKor":"애니키트","titleEng":"ANIKIT","description":"ANIKIT은 ‘animal’의 ‘ani’와 ‘kit’의 합성어로, 동물처럼 친근하면서 언제 어디서나 사용할 수 있는 의료 키트입니다. 차가운 의료기기의 이미지를 벗어나 아이들에게 따뜻함과 안정감을 전하며, 동물을 모티브로 한 디자인으로 자연스럽게 다가갑니다. 학교나 집 등 어디서든 아이가 스스로 건강을 관리할 수 있도록 돕는 동반자 같은 키트입니다.","videoId":1126266309},{"members":[35],"category":"c2","projectNum":30,"titleKor":"액토","titleEng":"ACTO","description":"ACTO는 식단 제안형 냉장고와 이동형 모듈 냉장고, 두 본체로 구성됩니다.\\n이동형 모듈 냉장고는 부재 중 신선식품을 대신 수령·보관하며,\\n식단 제안형 냉장고는 스마트 워치 태그 기반으로 맞춤형 식단을 제공합니다.\\n두 냉장고의 연동을 통해 ACTO는 사용자의 식습관을 분석하고,\\n건강한 생활 패턴을 관리하는 냉장고입니다.","videoId":1126763958},{"members":[57,58],"category":"c2","projectNum":31,"titleKor":"스마트 비대면 외래진료 의료기","titleEng":"VITALL^NK","description":"VitalL^nk는 의료 사각지대에 놓인 노인 환자들을 대상으로, 병원 방문 없이도 주요 건강 검진을 스스로 수행할 수 있도록 돕는 의료기기입니다. 단순한 검사 기능과 원격 진료 연결을 제공합니다. 기본적인 체온 검사는 물론, 혈당과 혈압, 심전도 측정, 손목 골밀도 검사, 초음파 검사를 통해 노인성 질환의 주요 지표도 빠르게 확인할 수 있습니다.","videoId":1126436227},{"members":[61],"category":"c2","projectNum":32,"titleKor":"소형 반려견 전용 AED 내장 산책 리드줄","titleEng":"DOG AED LEASH","description":"반려견과 함께 걷는 시간은 언제나 즐겁지만 갑작스러운 위험이 찾아올\\n수도 있습니다. 특히 소형견은 심정지 시 몇 분 안에 대응하지 못하면 큰\\n위험에 놓일 수 있습니다. 이 리드줄은 그런 순간을 대비하여 반려견 전\\n용 AED 기능을 함께 담았습니다. 평소에는 가볍게 사용할 수 있는 리드\\n줄이지만, 필요할 때는 구조 도구가 됩니다.","videoId":1127407103},{"members":[91],"category":"c2","projectNum":33,"titleKor":"메디메이트","titleEng":"MEDIMATE","description":"고령화와 의학 발전으로 현대인들은 의약품을 손쉽게 접하게 되었지만, 그만큼 방치되거나 잘못 폐기되는 의약품 또한 증가하고 있으며, 이들은 수질 오염 및 생태계 교란을 유발하게 됩니다. 따라서 사용자가 약을 안전하게 관리하고 폐기까지 책임질 수 있도록 돕는 서비스, 메디메이트를 제작했습니다. 이는 건강한 생활 습관과 지속 가능한 환경 보호에 기여할 것입니다.","videoId":1127528036},{"members":[10],"category":"c3","projectNum":34,"titleKor":"마리스","titleEng":"MARIS","description":"Maris는 선박 하부에 부착되는 따개비를 효과적으로 제거하기 위해 설계된 자율 주행 수중 로봇입니다. 라틴어로 ‘바다의, 바다를’이라는 뜻을 담은 이름처럼, 해양 환경에서 최적의 성능을 발휘하도록 제작되었습니다. 8개의 고성능 프로펠러가 탑재되어 수중에서도 안정적이고 자유로운 기동이 가능하며, 정밀한 제어를 통해 선박 하부 구역을 빈틈없이 관리할 수 있습니다. 또한 따개비 제거 장치에는 스크래퍼와 브러시가 각각 모듈화되어 있어, 스크래퍼의 날이 무뎌지거나 브러시가 손상될 경우 손쉽게 교체할 수 있습니다. 이를 통해 유지보수가 간단하고, 장기간 안정적인 성능을 보장하며, 효율적인 선체 관리로 연료 절감과 친환경 운항을 돕는 혁신적인 솔루션입니다.","videoId":1127467906},{"members":[64,20],"category":"c3","projectNum":35,"titleKor":"ESG 부산 - 스테이션","titleEng":"ESG BUSAN - STATION","description":"ESG 부산'은 부산 주요 관광지에 설치된 ESG 체험 플랫폼으로, 투명 OLED 패널, 업사이클링 키링 자판기, 플로깅 도구 대여 부스로 구성됩니다. 관광객들은 도시를 탐험하는 동안 쓰레기를 줍기 위한 집게를 대여하고, 상징적인 업사이클링 키링을 받을 수 있습니다. 이는 관광과 지속가능성의 접점을 제시하는 새로운 유형의 체험형 공공시설물입니다.","videoId":1127729155},{"members":[22],"category":"c3","projectNum":36,"titleKor":"씬킷","titleEng":"SYN:KET","description":"SYN:KET은 신디사이저, 샘플러, 비트메이커를 하나로 담은 휴대용 그루브 박스입니다.\\n사용자는 8개의 터치패드와 원형 인터페이스를 통해 리듬을 손끝으로 느끼고 조형하며,\\n음악을 ‘만드는 행위’ 에서 ‘소리를 다루는 경험’ 으로 확장된 새로운 창작의 감각을 얻게 됩니다.","videoId":1127471421},{"members":[25],"category":"c3","projectNum":37,"titleKor":"페이스:디","titleEng":"FACE:D","description":"FACE:D는 iPhone의 Face ID와 ARKit52 기술을 활용하여 사용자의 표정을 실시간으로 인식하고, 52개의 BlendShape 데이터를 기반으로 감정을 분석한다. 분석된 감정은 Unity로 제작된 상담 시뮬레이션 콘텐츠에 반영되어, 사용자의 표정에 따라 내담자의 감정 수치가 변화한다. 감정 데이터 기반의 새로운 인터랙티브 경험을 제공한다.","videoId":1127322837},{"members":[27],"category":"c3","projectNum":38,"titleKor":"모온","titleEng":"MO-ON","description":"‘모으다’와 ‘ON’의 MO-ON(모온)은 멀티모달 AI의 강력한 생성 능력을 하나의 웨어러블에 담아 현실과 가상을 넘나들며 자유롭고 직관적인 창작 경험을 제공합니다. 이로써 개개인의 창의성과 개성을 존중하는 창작자 중심의 궁극적인 AI 글래스로 완성됩니다.","videoId":1127476055},{"members":[48,51],"category":"c3","projectNum":39,"titleKor":"AI 기반 모의 인터뷰 서비스","titleEng":"PRETALK","description":"PRETALK은 인터뷰 진행자가 더 나은 사용자 경험(UX)과 깊이 있는 인사이트를 도출할 수 있도록 돕는 인터뷰 연습 서비스입니다.\\n가상의 퍼소나와 실전처럼 인터뷰를 연습하면서 질문 설계, 흐름 관리, 응답 분석까지 체계적으로 준비할 수 있으며, 실제 상황에 가까운 시뮬레이션을 통해 인터뷰 역량을 강화할 수 있습니다.","videoId":1126830637},{"members":[53],"category":"c3","projectNum":40,"titleKor":"투미","titleEng":"TO.ME","description":"to.me는 사용자의 감정과 목소리를 기반으로 스스로에게 피드백을 제공하는 일정 관리 서비스입니다.\\nAI가 사용자의 음성과 대화 스타일을 학습해, 일정 전 나의 목소리로 맞춤형 알림을 전달함으로써\\n정서적 몰입과 자기동기화를 돕는 새로운 자기조절 경험을 제공합니다.","videoId":1127548024},{"members":[67],"category":"c3","projectNum":41,"titleKor":"스트릭스","titleEng":"STRIX","description":"야간에 발생하는 조난사고는 제한된 장비와 시야 때문에 구조 시간이 지연되고, 구조대원과 조난당한 등산객 모두에게 큰 위험으로 이어집니다. 이러한 문제를 해결하기 위해 개발된 스마트 AR 헬멧 STRIX는 실시간 정보를 제공함으로써 구조대원의 판단을 지원하고, 구조 효율성과 안정성을 동시에 향상시켜 야간 구조 활동의 새로운 가능성을 제시합니다.","videoId":1127434135},{"members":[78],"category":"c3","projectNum":42,"titleKor":"ESG 부산 - 앱","titleEng":"ESG BUSAN - APP","description":"ESG 앱은 관광객이 부산 명소를 즐기며 자연스럽게 환경 활동에 참여할 수 있는 서비스입니다. ESG 스테이션에서 플로깅 도구를 대여해 미션을 수행하고, 완료 시 관광지 키링을 리워드로 받을 수 있습니다. 전 과정은 앱과 연동되어 관광, 환경 활동, 보상까지 간편하게 체험할 수 있으며, 부산의 지속가능한 가치를 전합니다.","videoId":1127754084},{"members":[92],"category":"c3","projectNum":43,"titleKor":"소프티 엔 하디","titleEng":"SOFTY & HARDY","description":"현재 존재하는 VR  콘서트는 시각과 청각에만 의존하여, 관객은 무대와 깊이 교류하지 못하고 단순한 관람에 머무르게 됩니다. 이 문제를 해결하기 위해 촉각을 더한 새로운 인터랙션을 제안합니다. 본 제품인 HARDY & SOFTY 는 무대와 관객을 이어주는 감각적인 다리 역할을 하며, 이를 통해 관객은 단순한 관람자가 아닌 참여자가 됩니다.","videoId":1127445758},{"members":[95],"category":"c3","projectNum":44,"titleKor":"포잉!","titleEng":"POING!","description":"POING!은 반려동물의 생체 신호와 행동 데이터를 기반으로, 홈캠 공간 속에서 살아 있는 듯한 디지털 반려동물을 구현합니다. 반려동물의 실제 데이터를 바탕으로 특정 상황의 행동을 재현합니다. 사용자는 반려동물의 고유한 특성과 행동 데이터를 '디지털 유산'으로 보존하여, 고유한 행동들을 생생하게 다시 경험할 수 있습니다.","videoId":1127520805},{"members":[32,0],"category":"c4","projectNum":45,"titleKor":"소-다방","titleEng":"SO-DABANG","description":"내 손 안의 작은 다방, 소-다방. 어플리케이션 속 DJ와 소통하며 음악을 감상해보세요. 그 시절 다방처럼 DJ에게 원하는 노래를 신청할 수 있습니다. 블루투스 스피커와 함께 사용하여 더 특별한 경험을 만끽하세요.","videoId":1127750387},{"members":[7],"category":"c4","projectNum":46,"titleKor":"집쿡타임","titleEng":"JipCook Time","description":"‘집쿡타임’은 집에 있는 식재료를 기반으로 맞춤형 레시피를 추천하는 서비스입니다. 사용자는 카메라 인식이나 직접 입력으로 식재료를 등록하고, 유통기한 관리도 가능합니다. 이후 조리 시간·맛·요리 종류 등 필터를 통해 원하는 조건의 레시피를 탐색할 수 있으며, GPT API를 활용한 AI가 재료에 맞춘 레시피를 자동 추천합니다. 추천된 레시피는 수정·공유가 가능해 사용자만의 커스텀 레시피로 확장됩니다.","videoId":1127762035},{"members":[11],"category":"c4","projectNum":47,"titleKor":"아쿠아링크","titleEng":"AQUALINK","description":"기존의 제습기는 실내 습도를 조절해 쾌적한 환경을 조성하지만, 이 과정에서 수집된 물은 대부분 활용하지 못한 채 버려집니다. Aqualink는 물을 버리지 않고, 재사용 가능한 자원으로 전환하여 식물 재배에 활용하는 순환형 시스템을 제안합니다. 이를 통해 자원의 활용도를 높이며 환경적 가치와 실용성을 동시에 구현합니다.","videoId":1126379564},{"members":[12],"category":"c4","projectNum":48,"titleKor":"센소","titleEng":"SENSO","description":"SEnSO는 확장현실(XR) 콘텐츠를 체험할 수 있도록 설계된 몰입형 다감각 스피커입니다. XR 환경 속 공연 콘텐츠와 연동되어 단순한 사운드 출력이 아닌, 자동 리프트, 조명 연출, 실제 바람 분사 등 다양한 감각 자극을 통합 제공합니다. 사용자는 콘텐츠 속 위치와 관계없이, 조명과 바람을 통해 몰입의 중심에 있는 듯한 경험을 할 수 있습니다.","videoId":1127519416},{"members":[13],"category":"c4","projectNum":49,"titleKor":"재료 교체로 레시피를 바꾸는 요리 플랫폼","titleEng":"REMIK","description":"레믹은 레시피를 바꿀 수 있는 요리 동영상 플랫폼입니다. 알레르기• 종교• 채식주의 • 개인 선호 등 다양한 이유로 특정 식재료를 먹지 못하는 인구가 증가하고 있습니다. 이를 바탕으로, 레믹은 재료를 변경하여 레시피를 새롭게 재생성합니다. 이 과정에서 사용자는 요리를 더욱 다양하고 창의적으로 접근 할 수 있습니다.","videoId":1127828070},{"members":[15],"category":"c4","projectNum":50,"titleKor":"감성 기반 소비 기록 서비스","titleEng":"LEAF NOTE","description":"Leaf Note는 소비를 단순한 수치가 아닌 나뭇잎과 캐릭터라는 감성적 요소로 표현하는 새로운 형태의 가계부입니다. 매일의 소비가 입력될 때마다 하나의 나뭇잎으로 시각화되어 차곡차곡 쌓이고, 항목별 소비는 개성 있는 캐릭터로 나타나 사용자가 친근하게 자신의 소비 패턴을 이해하도록 돕습니다. 숫자 중심의 기록이 아닌 시각적 변화를 통해, 소비에 담긴 감정과 태도를 자연스럽게 인식하게 합니다.","videoId":"1128686899"},{"members":[17],"category":"c4","projectNum":51,"titleKor":"테트링","titleEng":"TETLINK","description":"테트링은 쌓지 않는 정보 아카이브 서비스입니다. 기존 서비스가 정보를 보관하는 데 목적을 두었다면, 테트링은 이후 정보를 소비하는 것에 초점을 맞춥니다. 사용자가 저장한 정보를 블록형 게임의 블록처럼 시각화해 효과적인 소비를 유도하고, 그 과정에서 사용자는 아카이브를 비워내는 새로운 경험을 즐길 수 있습니다.","videoId":1126373064},{"members":[31],"category":"c4","projectNum":52,"titleKor":"클러버스","titleEng":"CLUB EARTH","description":"클러버스는 패션 업사이클링 스타터를 위해 소장 중인 의류로 새활용을 할 수 있도록 돕는 Up It Yourself! KIT와 온라인 서비스를 제공합니다. 실패에 대한 부담 없이 초보자도 쉽게 제작할 수 있는 도구와 도안, 튜토리얼 영상, 온라인 매뉴얼 등 다양한 가이드를 통해 업사이클링의 장벽을 낮추고, 지속 가능한 패션 문화를 함께 만들어가고자 합니다.","videoId":1127302808},{"members":[38,85],"category":"c4","projectNum":53,"titleKor":"공동체 생활에서의 물 절약 시스템","titleEng":"AQUA-SAVE","description":"AQUA-SAVE'는 일상 속 과도한 물 소비 문제를 해결하기 위해 개발된 스마트 절수 시스템입니다. 수전 디스플레이를 통해 실시간 물 사용량, 온도, 사용시간을 확인할 수 있으며, 애플리케이션을 통해 개인 및 공동체별 데이터를 분석하고 절수 미션을 제공합니다. 미션 달성 시 리워드가 제공되며, 이는 공동체의 효율적인 물 사용 습관 형성에 기여합니다.","videoId":1127099717},{"members":[40],"category":"c4","projectNum":54,"titleKor":"한번쯤 망해봐도 괜찮은 인생 게임","titleEng":"내가 뭘 잘못했는데요?","description":"사람은 자신이 하고 싶은 것을 할 때 가장 빛난다.\\n그러나 현실은 빠른 속도와 정해진 답을 끊임없이 요구합니다. 많은 사람들이 중요한 진로와 직업의 갈림길 앞에서 깊은 혼란을 겪습니다. 본 프로젝트는 그러한 상황에서 다양한 선택을 시뮬레이션할 수 있게 하여 각자의 리듬과 가능성을 온전히 존중하고자 하는 의도에서 만들어졌습니다.","videoId":"-"},{"members":[44],"category":"c4","projectNum":55,"titleKor":"사용자 경험 기반 디지털 아카이브","titleEng":"Ever Archive","description":"현대인의 디지털 라이프 속에서 기억은 쉽게 저장되지만, 그 안에 담긴 감정은 점차 흐려집니다. \\nEver Archive는 이런 감정의 흔적을 몰입감 있는 경험으로 보존할 수 있도록 설계되었습니다. \\n기억은 사라지는 것이 아니라, 형태를 바꿔 마음에 남는 것, 디자인을 통해 그 형태를 만들어주고 싶었습니다.\\n사람의 마음과 감정을 다루는 디자인을 지향합니다.","videoId":1127045458},{"members":[46],"category":"c4","projectNum":56,"titleKor":"모듈형 침구 UV 살균 로봇 청소기","titleEng":"NOVIX","description":"NOVIX는 침구 UV 살균 로봇 청소기로 모듈형 로봇기기와 본체 로봇청소기 2개로 이루어져있습니다. 본체는 가정집의 먼지청소를 먼저 이행하고 사용자가 침구위에서 모듈형 로봇을 작동시키면 상단의 360°센서 기반으로 자율 주행하며 침구 위를 이동하면서 보이지 않는 진드기와 유해 입자를 효과적으로 제거하는 UV 살균이 가능합니다.","videoId":1126569569},{"members":[55,65],"category":"c4","projectNum":57,"titleKor":"모담이","titleEng":"MODAMI","description":"시니어를 위한 AI 자서전 서비스 '모담이'는 AI 아바타 '담이'와의 대화를 통해 당신의 삶을 기록합니다. \\n키보드 없이 터치와 음성으로 세상에 단 하나뿐인 나만의 특별한 자서전이 완성됩니다.","videoId":1127565627},{"members":[56],"category":"c4","projectNum":58,"titleKor":"소설 창작을 위한 협업 커뮤니티 플랫폼","titleEng":"CREWE","description":"Crewe는 하나의 아이디어에서 여러 사람이 의견을 더해 이야기를 완성하는 협업형 창작 플랫폼입니다. 하나의 소재에서 다양한 전개가 만들어지며, 함께 이야기를 확장해가는 집단 창작의 즐거움을 제공합니다.","videoId":1127471110},{"members":[63],"category":"c4","projectNum":59,"titleKor":"유아 정서 발달 자연 친화 자동화 화분","titleEng":"REONA","description":"REONA는 자연의 흐름을 형상화한 클라우드 형태의 스마트 화분으로 디지털 디스플레이와 직관적인 형태 변화를 통해 날씨와 급수 필요성을 전달합니다. 하단부의 물을 워터펌프를 통해 끌어올려 상단 구름 부분에서 빗방울처럼 떨어뜨림으로써 식물이 자라는 자연의 환경을 실내에서 경험할 수 있도록 재현한 제품입니다.","videoId":"-"},{"members":[77],"category":"c4","projectNum":60,"titleKor":"노트모","titleEng":"NOTEMO","description":"notemo'는 사용자가 겪고 있는 정신적인 어려움을 완화할 수 있는 감정 습관 어플입니다. 하루에 한 번 짧고 직관적인 질문에 대답하며 감정에 솔직해지는 법을 배우고, '마음 기록장'과 '마음 정원' 을 통해 이를 쉽고 재미있게 확인할 수 있습니다. 또한, '마음 살펴보기' 를 통해 특정 심리 영역을 탐색할 수 있습니다.","videoId":1127447000},{"members":[83],"category":"c4","projectNum":61,"titleKor":"리:미스트","titleEng":"RE:MIST","description":"RE:MIST는 사용자가 향을 원하는 대로 조합해 사용하는 모듈형 충전식 스프레이다. 재사용 가능한 구조와 진공 시스템으로 플라스틱과 유해 가스 사용을 줄이며, 분사량·향·기능을 세밀하게 조절할 수 있어 개인 맞춤형 경험을 제공한다. 환경 보호, 경제성, 창의적 사용성을 모두 갖춘 지속 가능한 라이프스타일 제품이다.","videoId":1127188689},{"members":[84],"category":"c4","projectNum":62,"titleKor":"경험소비 기반 햄버거 커스터마이징 어플","titleEng":"BURGIT","description":"Z세대는 전세계 인구의 25%를 차지하며 역대 최대 규모의 소비력을 갖춘 세대가 될 것으로 예측됩니다. 이들에게 중요한 것은 직접 개입한 생산형 경험과 자기표현을 할 수 있는 콘텐츠입니다. 해당 어플은 사용자가 인터랙티브 요소를 통해 햄버거 재료를 직접 선택하고 제조할 수 있도록 하는 경험 소비 기반 햄버거 커스터마이징 어플리케이션입니다.","videoId":1126413536},{"members":[89],"category":"c4","projectNum":63,"titleKor":"엔코","titleEng":"ENCO","description":"밀키트의 복잡한 조리 과정을 디제잉의 감각적인 퍼포먼스로 재해석합니다. DJ 컨트롤러에서 영감을 받은 다이얼과 레버, 행동을 유도하는 LED 인디케이터는 요리의 순서와 흐름을 직관적으로 안내합니다. 이를 통해 요리 과정을 하나의 퍼포먼스처럼 완성하는 새로운 경험을 제공하며 라이프스타일을 제안합니다.","videoId":1128232388},{"members":[93],"category":"c4","projectNum":64,"titleKor":"씨너리","titleEng":"SEENERY","description":"SEENERY는 '나(seen)'와 '여행의 풍경(scenery)'을 연결해 1인 여행자에게 새로운 기록 방식을 제안하는 휴대용 자동 촬영 드론입니다. 사용자는 제품을 비틀어 Boomerang, Sky, Surround, Follow 중 원하는 4가지 모드를 선택 후 공중에 띄웁니다. 제품은 피사체 및 환경 인식, 구도, 색감, 플래시 자동 조절로 최적의 촬영을 제공합니다. 듀얼 프로펠러와 고효율 배터리로 안정적이며, 작고 가벼워 휴대가 용이합니다. 단순한 '띄우는 동작'만으로 나와 풍경을 함께 담아 특별한 순간을 완성합니다.","videoId":"1127472732"},{"members":[97],"category":"c4","projectNum":65,"titleKor":"감정 시각화 표현 치료 장치","titleEng":"VI-MO","description":"‘VI-mo’는 사용자로 하여금 자신의 감정을 외부 시점에서 시각적으로 인식하게 하여 감정의 정리와 자기 이해를 돕는 제품입니다. 감정을 말로 꺼내고 물리적 형태로 마주하는 경험은 심리적 위안과 정서적 회복을 유도하며, 감정을 억누르기보다 자연스럽게 흐르게 하는 감정 순환의 장치를 제공합니다.","videoId":"1128446266"},{"members":[5,47],"category":"c5","projectNum":66,"titleKor":"폴라리스","titleEng":"POLARIS","description":"극한 환경에서도 자유롭게 이동하며 탐사 목적에 따라 모듈을 교체할 수 있는 극지 탐사 모빌리티로, 드론과 연동해 지형과 위험 요소를 실시간으로 스캔하고 다양한 임무를 효율적이고 안전하게 수행하며, 기후 변화 분석, 자원 탐사, 생태 조사, 야간 관측과 긴급 구조까지 동시에 수행하며 극한 환경 탐사의 새로운 기준과 가능성을 보여준다.","videoId":1128433794},{"members":[8,70],"category":"c5","projectNum":67,"titleKor":"파빅스","titleEng":"PAVIX","description":"드론이 포트홀을 스캔하면 무인 모빌리티가 자동으로 이동해 보수를 수행하는 시스템입니다. TBM 공법을 적용해 절삭·청소·접착을 일체화했으며, 프리캐스트 임플란트 공법을 통해 경화 시간을 단축해 신속한 도로 개방이 가능합니다. 다관절 다리로 정밀한 작업이 가능하며, 드론이 프리캐스트를 카트리지 형태로 전달합니다.","videoId":1127509590},{"members":[79,9],"category":"c5","projectNum":68,"titleKor":"감정기반 맞춤형 활동 추천 모빌리티 서비스","titleEng":"FLOV","description":"FLOV는 인공지능이 개인의 성향과 상황을 분석해 맞춤형 정보를 제공하는 시대에 주목합니다. 기술의 고도화로 사회적 유대가 약화되고 감정적 교류가 줄어든 미래 환경에서 해소되지 못한 감정을 지닌 개인에게 감정에 적합한 활동과 장소를 추천하고, 그 목적에 최적화된 모듈형 모빌리티를 통해 새로운 감정 해소 경험을 제공합니다.","videoId":1127816861},{"members":[14],"category":"c5","projectNum":69,"titleKor":"지구와 우주를 연결하는 차세대 모빌리티 시스템","titleEng":"KAIROS","description":"KAIROS'는 지구와 우주 간 연속된 이동 경험을 제공하는 차세대 모빌리티 시스템입니다. 출발지부터 목적지까지 단일 공간에서 이동하며 새로운 라이프스타일을 누릴 수 있습니다. 직선과 평면 중심의 클래식카 감성과 미래지향적 조형성의 조화를 이루며 기능성과 감성을 동시에 아우르는 차세대 모빌리티입니다.","videoId":1128367659},{"members":[21,26],"category":"c5","projectNum":70,"titleKor":"리프텐","titleEng":"RIFETEN","description":"도로 지면의 손상을 사전에 탐지하고, 발생될 포트홀을 예방하기 위해 개발된 자율주행 모빌리티입니다. 지면의 하부 약화를 감지하면 정지하여 드릴을 이용해 지면을 천공하고, 우레탄 폼과 레진을 주입하여 내부를 메우고 표면을 마감합니다. 드릴, 우레탄 및 레진 노즐은 하부에 배치되어 x축 트랙을 따라 정밀하게 이동하여 보수 대상 지점을 정교하게 작업합니다.","videoId":1127475114},{"members":[23,33],"category":"c5","projectNum":71,"titleKor":"레이온","titleEng":"RAYON","description":"RAYON은 복잡한 지하철 역사 환경에서 역무원이 신속하게 이동해 응급 상황에 1차적인 처치를 수행할 수 있도록 설계된 1인용 응급 구조 모빌리티입니다. 구급대가 도착하기 전까지의 결정적인 시간을 단축하기 위해 좁은 통로와 다층 구조에서도 안정적인 주행이 가능하며, 응급 장비 수납 모듈과 직관적인 조작 시스템을 갖추고 있습니다.","videoId":1127232925},{"members":[37],"category":"c5","projectNum":72,"titleKor":"휠로콥터","titleEng":"WHEELOCPCOTER","description":"WHEELCOPTER는 육상 주행과 비행이 모두 가능한 하이브리드 모빌리티로, 접근이 어려운 지역에서도 구조와 탐색을 수행할 수 있습니다. 바퀴를 프로펠러로 전환하는 구조로 효율성과 경제성을 높였으며, 재난 대응·군사 작전·보급 등 다양한 임무에 활용 가능합니다.","videoId":1127451104},{"members":[39],"category":"c5","projectNum":73,"titleKor":"포레스트","titleEng":"FOR:EST","description":"PBV 플랫폼을 기반으로 시니어의 이동과 휴식을 고려한 맞춤형 인테리어 솔루션을 제안한다. 라운지 체어형 무중력 카시트와 모듈 교체 구조를 통해 반려견용·테이블용 옵션을 제공하며, 회전 플레이트로 이동·정차·산책 시나리오에 맞춰 공간을 전환해 액티브 시니어의 안전하고 편안한 아웃도어 라이프를 지원한다.","videoId":1126626799},{"members":[62],"category":"c5","projectNum":74,"titleKor":"하우릭스","titleEng":"HAULIX","description":"HAULIX는 도시와 농촌 모두를 아우르는 차세대 모듈형 전동 바이크입니다. 이동성과 적재 능력을 동시에 갖춘 이 제품은, 후방에 다양한 모듈을 탈부착하여 사용자 맞춤형 구성이 가능합니다. 또한 GPS 기록, 직관적인 디스플레이, 접이식 안장 등 고령자를 배려한 세심한 기능도 탑재되어 있어 일상 이동의 부담을 줄여줍니다.","videoId":1127497630},{"members":[74,98],"category":"c5","projectNum":75,"titleKor":"퀀타엑스","titleEng":"QUANTA-X","description":"연기 감지 센서가 화재를 탐지하면 드론이 자동으로 출동해 화재 지점에 소화볼을 투하하고 초기 진화를 수행합니다. 조기 감지와 신속한 대응을 통해 산불 확산을 방지하며 산림 자원과 생태계를 보호하고, 공공기관과 민간 분야로의 활용 가능성이 높습니다.","videoId":1127242698},{"members":[80],"category":"c5","projectNum":76,"titleKor":"투위","titleEng":"TOWEE","description":"TOWEE는 트랜스윙 시스템을 탑재한 eVTOL 차량 견인 모빌리티입니다.","videoId":1127231053}]`),Fx=40;function C2(n){if(!n)return n;const t="/";if(/^https?:\/\//i.test(n))return n;const i=n.replace(/^\.\.\//,"").replace(/^\//,"");return t+i}const lR={c0:"A",c1:"E",c2:"H",c3:"I",c4:"L",c5:"M"},qx=["전체","산업디자인공학","미디어디자인공학"],uR={산업디자인공학:0,미디어디자인공학:1},Kx=n=>n==="IND"||n===0||n==="0"?0:n==="MED"||n===1||n==="1"?1:n,Rp=ng,kl=oR,cR=S.div`
  position: relative; background: #fff;
`,hR=S.div`
  padding-left: ${Fx}px; padding-right: ${Fx}px; display: flex; flex-direction: column;
  @media (max-width: 640px) {
    padding-left: 16px;
    padding-right: 16px;  
 }
`;function dR({children:n}){return y.jsx(cR,{children:y.jsx(hR,{children:n})})}const fR=S.div`
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
`,pR=S.div`
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
`,mR=S.div`
  text-decoration: none; cursor: pointer;
`,gR=S.div`position: relative;`;function yR({people:n}){const t=zh();return y.jsx(fR,{children:n.map((i,a)=>{const o=i.id??i.studentId??`${i.nameKor}-${a}`,u=typeof i.projectNum=="number"&&i.category,d=u?i.projectNum+1:null,m=u?`${lR[i.category]||"A"}${String(d).padStart(3,"0")}`:null,p=y.jsx(Zm,{nameKor:i.nameKor,nameEng:i.nameEng,role:i.role,sns:i.sns||"-",eMail:i.eMail,imgSrc:C2(i.imgUrl),imgAlt:`${i.nameKor} profile`},o);return u?y.jsx(mR,{role:"link",tabIndex:0,onClick:()=>t(`/work/${m}`),onKeyDown:g=>{(g.key==="Enter"||g.key===" ")&&t(`/work/${m}`)},"aria-label":`${i.nameKor} 작품 보기 (${m})`,children:p},`link-${o}`):p})})}function xR(){const[n,t]=St.useState(!1),[i,a]=St.useState(qx[0]),o=St.useMemo(()=>{const m=new Map;return(eu||[]).forEach(p=>{(p.members||[]).forEach(g=>{m.has(g)||m.set(g,p)})}),m},[]);St.useEffect(()=>{a(n?kl[0]?.id||"":qx[0])},[n]);const u=St.useMemo(()=>{if(!n){if(i==="전체")return Rp;let p=uR[i];return p===void 0&&(p=Kx(i)),Rp.filter(g=>Kx(g.department)===p)}const m=kl.some(p=>p.id===i)?i:kl.find(p=>p.nameKor===i)?.id||"";return Rp.filter(p=>p.professorId===m).map(p=>{let g=o.get(p.num);g||(g=(eu||[]).find(w=>w.category===p.category&&w.projectNum===p.projectNum)||null);const v=g?`/projects/${g.projectNum}/thumb.jpg`:"/thumbnailExample.png";return{...p,imgUrl:v}})},[i,n,o]),d=St.useMemo(()=>n&&(kl.find(p=>p.id===i)||kl.find(p=>p.nameKor===i))||null,[n,i]);return y.jsxs(gR,{children:[y.jsx(pR,{children:"Peoples"}),y.jsx(j2,{type:"people",onCategoryChange:a,onToggleChange:t}),y.jsxs(dR,{children:[n&&d&&y.jsx(eg,{nameKor:d.nameKor,rank:d.rank||"교수",eMail:d.email,education:d.education,field:d.field,imgSrc:C2(d.imgUrl),imgAlt:`${d.nameKor} profile`}),y.jsx(yR,{people:u})]})]})}const Hx=S.div`
  @media (max-width: 393px) {
    --s: clamp(0.82, calc(100vw / 393), 1);

    transform: scale(var(--s));
    transform-origin: top left;

    width: calc(173px * var(--s));
    height: calc(151px * var(--s));
  }
`,vR=S.div`
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
`,Gx=S.div`
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
`,_R=S.div`
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
`,ER=S.img`
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
`,wR=S.div`
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
`,bR=S.div`
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
`,TR=S.p`
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
`,SR=S.p`
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
`,AR=S.div`
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
`,RR=S.div`
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
`,IR=S.p`
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
`,jR=S.div`
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
`,CR=S.img`
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
`,DR=S.div`
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
`,Yx=S.div`
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
`,Qx=S.div`
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
`,Xx=S.p`
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
`;function Wx(n){return typeof n=="number"&&n>999?"999+":n}function ig({titleKor:n,titleEng:t,nameKor:i,view:a,like:o,href:u,src:d,profileImgs:m,docId:p}){const g=typeof o=="number"?o:0,v=typeof a=="number"?a:0,w=U=>{const K=U.currentTarget.querySelector(".card-hover");K&&(K.style.opacity=1)},T=U=>{const K=U.currentTarget.querySelector(".card-hover");K&&(K.style.opacity=0)},R="/",M=/^https?:\/\//i.test(u),L=y.jsxs(y.Fragment,{children:[y.jsx(vR,{children:y.jsxs(_R,{onMouseEnter:w,onMouseLeave:T,children:[y.jsx(wR,{className:"card-hover",children:y.jsxs(bR,{children:[y.jsx(SR,{children:n}),y.jsx(TR,{children:t})]})}),y.jsx(ER,{src:d,alt:"Project"})]})}),y.jsxs(AR,{children:[y.jsxs(RR,{children:[y.jsx(jR,{children:m.map((U,K)=>y.jsx(CR,{src:U,alt:`Profile${K+1}`,$z:3-K,$ml:K>0},K))}),y.jsx(IR,{children:i})]}),y.jsxs(DR,{children:[y.jsxs(Yx,{children:[y.jsx(Qx,{src:`${R}icons/likeIcon.svg`}),y.jsx(Xx,{children:Wx(g)||0})]}),y.jsxs(Yx,{children:[y.jsx(Qx,{src:`${R}icons/viewIcon.svg`}),y.jsx(Xx,{children:Wx(v)||0})]})]})]})]});return M?y.jsx(Hx,{children:y.jsx(Gx,{as:"a",href:u,style:{textDecoration:"none"},children:L})}):y.jsx(Hx,{children:y.jsx(Gx,{as:es,to:u.startsWith("/")?u:`/${u}`,style:{textDecoration:"none"},children:L})})}ig.propTypes={titleKor:Z.string.isRequired,titleEng:Z.string.isRequired,nameKor:Z.string.isRequired,view:Z.number,like:Z.number,src:Z.string.isRequired,href:Z.string.isRequired,profileImgs:Z.arrayOf(Z.string).isRequired,docId:Z.oneOfType([Z.string,Z.number]),collection:Z.string};ig.defaultProps={titleKor:"프로젝트 제목",titleEng:"Project Title",nameKor:"Author Name",view:0,like:0,collection:"works"};const NR=()=>{};var Zx={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D2=function(n){const t=[];let i=0;for(let a=0;a<n.length;a++){let o=n.charCodeAt(a);o<128?t[i++]=o:o<2048?(t[i++]=o>>6|192,t[i++]=o&63|128):(o&64512)===55296&&a+1<n.length&&(n.charCodeAt(a+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++a)&1023),t[i++]=o>>18|240,t[i++]=o>>12&63|128,t[i++]=o>>6&63|128,t[i++]=o&63|128):(t[i++]=o>>12|224,t[i++]=o>>6&63|128,t[i++]=o&63|128)}return t},MR=function(n){const t=[];let i=0,a=0;for(;i<n.length;){const o=n[i++];if(o<128)t[a++]=String.fromCharCode(o);else if(o>191&&o<224){const u=n[i++];t[a++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=n[i++],d=n[i++],m=n[i++],p=((o&7)<<18|(u&63)<<12|(d&63)<<6|m&63)-65536;t[a++]=String.fromCharCode(55296+(p>>10)),t[a++]=String.fromCharCode(56320+(p&1023))}else{const u=n[i++],d=n[i++];t[a++]=String.fromCharCode((o&15)<<12|(u&63)<<6|d&63)}}return t.join("")},N2={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let o=0;o<n.length;o+=3){const u=n[o],d=o+1<n.length,m=d?n[o+1]:0,p=o+2<n.length,g=p?n[o+2]:0,v=u>>2,w=(u&3)<<4|m>>4;let T=(m&15)<<2|g>>6,R=g&63;p||(R=64,d||(T=64)),a.push(i[v],i[w],i[T],i[R])}return a.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(D2(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):MR(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let o=0;o<n.length;){const u=i[n.charAt(o++)],m=o<n.length?i[n.charAt(o)]:0;++o;const g=o<n.length?i[n.charAt(o)]:64;++o;const w=o<n.length?i[n.charAt(o)]:64;if(++o,u==null||m==null||g==null||w==null)throw new OR;const T=u<<2|m>>4;if(a.push(T),g!==64){const R=m<<4&240|g>>2;if(a.push(R),w!==64){const M=g<<6&192|w;a.push(M)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class OR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const VR=function(n){const t=D2(n);return N2.encodeByteArray(t,!0)},Th=function(n){return VR(n).replace(/\./g,"")},kR=function(n){try{return N2.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function PR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const UR=()=>PR().__FIREBASE_DEFAULTS__,LR=()=>{if(typeof process>"u"||typeof Zx>"u")return;const n=Zx.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},zR=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&kR(n[1]);return t&&JSON.parse(t)},rg=()=>{try{return NR()||UR()||LR()||zR()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},$R=n=>rg()?.emulatorHosts?.[n],BR=n=>{const t=$R(n);if(!t)return;const i=t.lastIndexOf(":");if(i<=0||i+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const a=parseInt(t.substring(i+1),10);return t[0]==="["?[t.substring(1,i-1),a]:[t.substring(0,i),a]},M2=()=>rg()?.config;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}wrapCallback(t){return(i,a)=>{i?this.reject(i):this.resolve(a),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(i):t(i,a))}}}/**
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
 */function ag(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function qR(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function KR(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},a=t||"demo-project",o=n.iat||0,u=n.sub||n.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d={iss:`https://securetoken.google.com/${a}`,aud:a,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Th(JSON.stringify(i)),Th(JSON.stringify(d)),""].join(".")}const Kl={};function HR(){const n={prod:[],emulator:[]};for(const t of Object.keys(Kl))Kl[t]?n.emulator.push(t):n.prod.push(t);return n}function GR(n){let t=document.getElementById(n),i=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),i=!0),{created:i,element:t}}let Jx=!1;function YR(n,t){if(typeof window>"u"||typeof document>"u"||!ag(window.location.host)||Kl[n]===t||Kl[n]||Jx)return;Kl[n]=t;function i(T){return`__firebase__banner__${T}`}const a="__firebase__banner",u=HR().prod.length>0;function d(){const T=document.getElementById(a);T&&T.remove()}function m(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function p(T,R){T.setAttribute("width","24"),T.setAttribute("id",R),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function g(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{Jx=!0,d()},T}function v(T,R){T.setAttribute("id",R),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function w(){const T=GR(a),R=i("text"),M=document.getElementById(R)||document.createElement("span"),L=i("learnmore"),U=document.getElementById(L)||document.createElement("a"),K=i("preprendIcon"),X=document.getElementById(K)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const tt=T.element;m(tt),v(U,L);const lt=g();p(X,K),tt.append(X,M,U,lt),document.body.appendChild(tt)}u?(M.innerText="Preview backend disconnected.",X.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function QR(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function XR(){const n=rg()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function WR(){return!XR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ZR(){try{return typeof indexedDB=="object"}catch{return!1}}function JR(){return new Promise((n,t)=>{try{let i=!0;const a="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(a);o.onsuccess=()=>{o.result.close(),i||self.indexedDB.deleteDatabase(a),n(!0)},o.onupgradeneeded=()=>{i=!1},o.onerror=()=>{t(o.error?.message||"")}}catch(i){t(i)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t6="FirebaseError";class bo extends Error{constructor(t,i,a){super(i),this.code=t,this.customData=a,this.name=t6,Object.setPrototypeOf(this,bo.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,O2.prototype.create)}}class O2{constructor(t,i,a){this.service=t,this.serviceName=i,this.errors=a}create(t,...i){const a=i[0]||{},o=`${this.service}/${t}`,u=this.errors[t],d=u?e6(u,a):"Error",m=`${this.serviceName}: ${d} (${o}).`;return new bo(o,m,a)}}function e6(n,t){return n.replace(n6,(i,a)=>{const o=t[a];return o!=null?String(o):`<${a}?>`})}const n6=/\{\$([^}]+)}/g;function Sh(n,t){if(n===t)return!0;const i=Object.keys(n),a=Object.keys(t);for(const o of i){if(!a.includes(o))return!1;const u=n[o],d=t[o];if(tv(u)&&tv(d)){if(!Sh(u,d))return!1}else if(u!==d)return!1}for(const o of a)if(!i.includes(o))return!1;return!0}function tv(n){return n!==null&&typeof n=="object"}/**
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
 */function sr(n){return n&&n._delegate?n._delegate:n}class nu{constructor(t,i,a){this.name=t,this.instanceFactory=i,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class i6{constructor(t,i){this.name=t,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const i=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(i)){const a=new FR;if(this.instancesDeferred.set(i,a),this.isInitialized(i)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:i});o&&a.resolve(o)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(t){const i=this.normalizeInstanceIdentifier(t?.identifier),a=t?.optional??!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(a)return null;throw o}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(a6(t))try{this.getOrInitializeService({instanceIdentifier:Ha})}catch{}for(const[i,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);try{const u=this.getOrInitializeService({instanceIdentifier:o});a.resolve(u)}catch{}}}}clearInstance(t=Ha){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...t.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ha){return this.instances.has(t)}getOptions(t=Ha){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:i={}}=t,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:a,options:i});for(const[u,d]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);a===m&&d.resolve(o)}return o}onInit(t,i){const a=this.normalizeInstanceIdentifier(i),o=this.onInitCallbacks.get(a)??new Set;o.add(t),this.onInitCallbacks.set(a,o);const u=this.instances.get(a);return u&&t(u,a),()=>{o.delete(t)}}invokeOnInitCallbacks(t,i){const a=this.onInitCallbacks.get(i);if(a)for(const o of a)try{o(t,i)}catch{}}getOrInitializeService({instanceIdentifier:t,options:i={}}){let a=this.instances.get(t);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:r6(t),options:i}),this.instances.set(t,a),this.instancesOptions.set(t,i),this.invokeOnInitCallbacks(a,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,a)}catch{}return a||null}normalizeInstanceIdentifier(t=Ha){return this.component?this.component.multipleInstances?t:Ha:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function r6(n){return n===Ha?void 0:n}function a6(n){return n.instantiationMode==="EAGER"}/**
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
 */class s6{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const i=this.getProvider(t.name);if(i.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);i.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const i=new i6(t,this);return this.providers.set(t,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bt;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Bt||(Bt={}));const o6={debug:Bt.DEBUG,verbose:Bt.VERBOSE,info:Bt.INFO,warn:Bt.WARN,error:Bt.ERROR,silent:Bt.SILENT},l6=Bt.INFO,u6={[Bt.DEBUG]:"log",[Bt.VERBOSE]:"log",[Bt.INFO]:"info",[Bt.WARN]:"warn",[Bt.ERROR]:"error"},c6=(n,t,...i)=>{if(t<n.logLevel)return;const a=new Date().toISOString(),o=u6[t];if(o)console[o](`[${a}]  ${n.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class V2{constructor(t){this.name=t,this._logLevel=l6,this._logHandler=c6,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Bt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?o6[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Bt.DEBUG,...t),this._logHandler(this,Bt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Bt.VERBOSE,...t),this._logHandler(this,Bt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Bt.INFO,...t),this._logHandler(this,Bt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Bt.WARN,...t),this._logHandler(this,Bt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Bt.ERROR,...t),this._logHandler(this,Bt.ERROR,...t)}}const h6=(n,t)=>t.some(i=>n instanceof i);let ev,nv;function d6(){return ev||(ev=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function f6(){return nv||(nv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const k2=new WeakMap,lm=new WeakMap,P2=new WeakMap,Ip=new WeakMap,sg=new WeakMap;function p6(n){const t=new Promise((i,a)=>{const o=()=>{n.removeEventListener("success",u),n.removeEventListener("error",d)},u=()=>{i(Wr(n.result)),o()},d=()=>{a(n.error),o()};n.addEventListener("success",u),n.addEventListener("error",d)});return t.then(i=>{i instanceof IDBCursor&&k2.set(i,n)}).catch(()=>{}),sg.set(t,n),t}function m6(n){if(lm.has(n))return;const t=new Promise((i,a)=>{const o=()=>{n.removeEventListener("complete",u),n.removeEventListener("error",d),n.removeEventListener("abort",d)},u=()=>{i(),o()},d=()=>{a(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",u),n.addEventListener("error",d),n.addEventListener("abort",d)});lm.set(n,t)}let um={get(n,t,i){if(n instanceof IDBTransaction){if(t==="done")return lm.get(n);if(t==="objectStoreNames")return n.objectStoreNames||P2.get(n);if(t==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return Wr(n[t])},set(n,t,i){return n[t]=i,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function g6(n){um=n(um)}function y6(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...i){const a=n.call(jp(this),t,...i);return P2.set(a,t.sort?t.sort():[t]),Wr(a)}:f6().includes(n)?function(...t){return n.apply(jp(this),t),Wr(k2.get(this))}:function(...t){return Wr(n.apply(jp(this),t))}}function x6(n){return typeof n=="function"?y6(n):(n instanceof IDBTransaction&&m6(n),h6(n,d6())?new Proxy(n,um):n)}function Wr(n){if(n instanceof IDBRequest)return p6(n);if(Ip.has(n))return Ip.get(n);const t=x6(n);return t!==n&&(Ip.set(n,t),sg.set(t,n)),t}const jp=n=>sg.get(n);function v6(n,t,{blocked:i,upgrade:a,blocking:o,terminated:u}={}){const d=indexedDB.open(n,t),m=Wr(d);return a&&d.addEventListener("upgradeneeded",p=>{a(Wr(d.result),p.oldVersion,p.newVersion,Wr(d.transaction),p)}),i&&d.addEventListener("blocked",p=>i(p.oldVersion,p.newVersion,p)),m.then(p=>{u&&p.addEventListener("close",()=>u()),o&&p.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),m}const _6=["get","getKey","getAll","getAllKeys","count"],E6=["put","add","delete","clear"],Cp=new Map;function iv(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Cp.get(t))return Cp.get(t);const i=t.replace(/FromIndex$/,""),a=t!==i,o=E6.includes(i);if(!(i in(a?IDBIndex:IDBObjectStore).prototype)||!(o||_6.includes(i)))return;const u=async function(d,...m){const p=this.transaction(d,o?"readwrite":"readonly");let g=p.store;return a&&(g=g.index(m.shift())),(await Promise.all([g[i](...m),o&&p.done]))[0]};return Cp.set(t,u),u}g6(n=>({...n,get:(t,i,a)=>iv(t,i)||n.get(t,i,a),has:(t,i)=>!!iv(t,i)||n.has(t,i)}));/**
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
 */class w6{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(b6(i)){const a=i.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(i=>i).join(" ")}}function b6(n){return n.getComponent()?.type==="VERSION"}const cm="@firebase/app",rv="0.14.4";/**
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
 */const or=new V2("@firebase/app"),T6="@firebase/app-compat",S6="@firebase/analytics-compat",A6="@firebase/analytics",R6="@firebase/app-check-compat",I6="@firebase/app-check",j6="@firebase/auth",C6="@firebase/auth-compat",D6="@firebase/database",N6="@firebase/data-connect",M6="@firebase/database-compat",O6="@firebase/functions",V6="@firebase/functions-compat",k6="@firebase/installations",P6="@firebase/installations-compat",U6="@firebase/messaging",L6="@firebase/messaging-compat",z6="@firebase/performance",$6="@firebase/performance-compat",B6="@firebase/remote-config",F6="@firebase/remote-config-compat",q6="@firebase/storage",K6="@firebase/storage-compat",H6="@firebase/firestore",G6="@firebase/ai",Y6="@firebase/firestore-compat",Q6="firebase",X6="12.4.0";/**
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
 */const hm="[DEFAULT]",W6={[cm]:"fire-core",[T6]:"fire-core-compat",[A6]:"fire-analytics",[S6]:"fire-analytics-compat",[I6]:"fire-app-check",[R6]:"fire-app-check-compat",[j6]:"fire-auth",[C6]:"fire-auth-compat",[D6]:"fire-rtdb",[N6]:"fire-data-connect",[M6]:"fire-rtdb-compat",[O6]:"fire-fn",[V6]:"fire-fn-compat",[k6]:"fire-iid",[P6]:"fire-iid-compat",[U6]:"fire-fcm",[L6]:"fire-fcm-compat",[z6]:"fire-perf",[$6]:"fire-perf-compat",[B6]:"fire-rc",[F6]:"fire-rc-compat",[q6]:"fire-gcs",[K6]:"fire-gcs-compat",[H6]:"fire-fst",[Y6]:"fire-fst-compat",[G6]:"fire-vertex","fire-js":"fire-js",[Q6]:"fire-js-all"};/**
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
 */const iu=new Map,Z6=new Map,dm=new Map;function av(n,t){try{n.container.addComponent(t)}catch(i){or.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,i)}}function Ah(n){const t=n.name;if(dm.has(t))return or.debug(`There were multiple attempts to register component ${t}.`),!1;dm.set(t,n);for(const i of iu.values())av(i,n);for(const i of Z6.values())av(i,n);return!0}function J6(n,t){const i=n.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),n.container.getProvider(t)}function tI(n){return n==null?!1:n.settings!==void 0}/**
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
 */const eI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zr=new O2("app","Firebase",eI);/**
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
 */class nI{constructor(t,i,a){this._isDeleted=!1,this._options={...t},this._config={...i},this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new nu("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Zr.create("app-deleted",{appName:this._name})}}/**
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
 */const iI=X6;function og(n,t={}){let i=n;typeof t!="object"&&(t={name:t});const a={name:hm,automaticDataCollectionEnabled:!0,...t},o=a.name;if(typeof o!="string"||!o)throw Zr.create("bad-app-name",{appName:String(o)});if(i||(i=M2()),!i)throw Zr.create("no-options");const u=iu.get(o);if(u){if(Sh(i,u.options)&&Sh(a,u.config))return u;throw Zr.create("duplicate-app",{appName:o})}const d=new s6(o);for(const p of dm.values())d.addComponent(p);const m=new nI(i,a,d);return iu.set(o,m),m}function rI(n=hm){const t=iu.get(n);if(!t&&n===hm&&M2())return og();if(!t)throw Zr.create("no-app",{appName:n});return t}function sv(){return Array.from(iu.values())}function no(n,t,i){let a=W6[n]??n;i&&(a+=`-${i}`);const o=a.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const d=[`Unable to register library "${a}" with version "${t}":`];o&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),o&&u&&d.push("and"),u&&d.push(`version name "${t}" contains illegal characters (whitespace or "/")`),or.warn(d.join(" "));return}Ah(new nu(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}/**
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
 */const aI="firebase-heartbeat-database",sI=1,ru="firebase-heartbeat-store";let Dp=null;function U2(){return Dp||(Dp=v6(aI,sI,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(ru)}catch(i){console.warn(i)}}}}).catch(n=>{throw Zr.create("idb-open",{originalErrorMessage:n.message})})),Dp}async function oI(n){try{const i=(await U2()).transaction(ru),a=await i.objectStore(ru).get(L2(n));return await i.done,a}catch(t){if(t instanceof bo)or.warn(t.message);else{const i=Zr.create("idb-get",{originalErrorMessage:t?.message});or.warn(i.message)}}}async function ov(n,t){try{const a=(await U2()).transaction(ru,"readwrite");await a.objectStore(ru).put(t,L2(n)),await a.done}catch(i){if(i instanceof bo)or.warn(i.message);else{const a=Zr.create("idb-set",{originalErrorMessage:i?.message});or.warn(a.message)}}}function L2(n){return`${n.name}!${n.options.appId}`}/**
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
 */const lI=1024,uI=30;class cI{constructor(t){this.container=t,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new dI(i),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=lv();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(o=>o.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:i}),this._heartbeatsCache.heartbeats.length>uI){const o=fI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){or.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=lv(),{heartbeatsToSend:i,unsentEntries:a}=hI(this._heartbeatsCache.heartbeats),o=Th(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return or.warn(t),""}}}function lv(){return new Date().toISOString().substring(0,10)}function hI(n,t=lI){const i=[];let a=n.slice();for(const o of n){const u=i.find(d=>d.agent===o.agent);if(u){if(u.dates.push(o.date),uv(i)>t){u.dates.pop();break}}else if(i.push({agent:o.agent,dates:[o.date]}),uv(i)>t){i.pop();break}a=a.slice(1)}return{heartbeatsToSend:i,unsentEntries:a}}class dI{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ZR()?JR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await oI(this.app);return i?.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const a=await this.read();return ov(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const a=await this.read();return ov(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...t.heartbeats]})}else return}}function uv(n){return Th(JSON.stringify({version:2,heartbeats:n})).length}function fI(n){if(n.length===0)return-1;let t=0,i=n[0].date;for(let a=1;a<n.length;a++)n[a].date<i&&(i=n[a].date,t=a);return t}/**
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
 */function pI(n){Ah(new nu("platform-logger",t=>new w6(t),"PRIVATE")),Ah(new nu("heartbeat",t=>new cI(t),"PRIVATE")),no(cm,rv,n),no(cm,rv,"esm2020"),no("fire-js","")}pI("");var mI="firebase",gI="12.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */no(mI,gI,"app");var cv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jr,z2;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(j,I){function C(){}C.prototype=I.prototype,j.F=I.prototype,j.prototype=new C,j.prototype.constructor=j,j.D=function(O,k,z){for(var D=Array(arguments.length-2),se=2;se<arguments.length;se++)D[se-2]=arguments[se];return I.prototype[k].apply(O,D)}}function i(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(a,i),a.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(j,I,C){C||(C=0);const O=Array(16);if(typeof I=="string")for(var k=0;k<16;++k)O[k]=I.charCodeAt(C++)|I.charCodeAt(C++)<<8|I.charCodeAt(C++)<<16|I.charCodeAt(C++)<<24;else for(k=0;k<16;++k)O[k]=I[C++]|I[C++]<<8|I[C++]<<16|I[C++]<<24;I=j.g[0],C=j.g[1],k=j.g[2];let z=j.g[3],D;D=I+(z^C&(k^z))+O[0]+3614090360&4294967295,I=C+(D<<7&4294967295|D>>>25),D=z+(k^I&(C^k))+O[1]+3905402710&4294967295,z=I+(D<<12&4294967295|D>>>20),D=k+(C^z&(I^C))+O[2]+606105819&4294967295,k=z+(D<<17&4294967295|D>>>15),D=C+(I^k&(z^I))+O[3]+3250441966&4294967295,C=k+(D<<22&4294967295|D>>>10),D=I+(z^C&(k^z))+O[4]+4118548399&4294967295,I=C+(D<<7&4294967295|D>>>25),D=z+(k^I&(C^k))+O[5]+1200080426&4294967295,z=I+(D<<12&4294967295|D>>>20),D=k+(C^z&(I^C))+O[6]+2821735955&4294967295,k=z+(D<<17&4294967295|D>>>15),D=C+(I^k&(z^I))+O[7]+4249261313&4294967295,C=k+(D<<22&4294967295|D>>>10),D=I+(z^C&(k^z))+O[8]+1770035416&4294967295,I=C+(D<<7&4294967295|D>>>25),D=z+(k^I&(C^k))+O[9]+2336552879&4294967295,z=I+(D<<12&4294967295|D>>>20),D=k+(C^z&(I^C))+O[10]+4294925233&4294967295,k=z+(D<<17&4294967295|D>>>15),D=C+(I^k&(z^I))+O[11]+2304563134&4294967295,C=k+(D<<22&4294967295|D>>>10),D=I+(z^C&(k^z))+O[12]+1804603682&4294967295,I=C+(D<<7&4294967295|D>>>25),D=z+(k^I&(C^k))+O[13]+4254626195&4294967295,z=I+(D<<12&4294967295|D>>>20),D=k+(C^z&(I^C))+O[14]+2792965006&4294967295,k=z+(D<<17&4294967295|D>>>15),D=C+(I^k&(z^I))+O[15]+1236535329&4294967295,C=k+(D<<22&4294967295|D>>>10),D=I+(k^z&(C^k))+O[1]+4129170786&4294967295,I=C+(D<<5&4294967295|D>>>27),D=z+(C^k&(I^C))+O[6]+3225465664&4294967295,z=I+(D<<9&4294967295|D>>>23),D=k+(I^C&(z^I))+O[11]+643717713&4294967295,k=z+(D<<14&4294967295|D>>>18),D=C+(z^I&(k^z))+O[0]+3921069994&4294967295,C=k+(D<<20&4294967295|D>>>12),D=I+(k^z&(C^k))+O[5]+3593408605&4294967295,I=C+(D<<5&4294967295|D>>>27),D=z+(C^k&(I^C))+O[10]+38016083&4294967295,z=I+(D<<9&4294967295|D>>>23),D=k+(I^C&(z^I))+O[15]+3634488961&4294967295,k=z+(D<<14&4294967295|D>>>18),D=C+(z^I&(k^z))+O[4]+3889429448&4294967295,C=k+(D<<20&4294967295|D>>>12),D=I+(k^z&(C^k))+O[9]+568446438&4294967295,I=C+(D<<5&4294967295|D>>>27),D=z+(C^k&(I^C))+O[14]+3275163606&4294967295,z=I+(D<<9&4294967295|D>>>23),D=k+(I^C&(z^I))+O[3]+4107603335&4294967295,k=z+(D<<14&4294967295|D>>>18),D=C+(z^I&(k^z))+O[8]+1163531501&4294967295,C=k+(D<<20&4294967295|D>>>12),D=I+(k^z&(C^k))+O[13]+2850285829&4294967295,I=C+(D<<5&4294967295|D>>>27),D=z+(C^k&(I^C))+O[2]+4243563512&4294967295,z=I+(D<<9&4294967295|D>>>23),D=k+(I^C&(z^I))+O[7]+1735328473&4294967295,k=z+(D<<14&4294967295|D>>>18),D=C+(z^I&(k^z))+O[12]+2368359562&4294967295,C=k+(D<<20&4294967295|D>>>12),D=I+(C^k^z)+O[5]+4294588738&4294967295,I=C+(D<<4&4294967295|D>>>28),D=z+(I^C^k)+O[8]+2272392833&4294967295,z=I+(D<<11&4294967295|D>>>21),D=k+(z^I^C)+O[11]+1839030562&4294967295,k=z+(D<<16&4294967295|D>>>16),D=C+(k^z^I)+O[14]+4259657740&4294967295,C=k+(D<<23&4294967295|D>>>9),D=I+(C^k^z)+O[1]+2763975236&4294967295,I=C+(D<<4&4294967295|D>>>28),D=z+(I^C^k)+O[4]+1272893353&4294967295,z=I+(D<<11&4294967295|D>>>21),D=k+(z^I^C)+O[7]+4139469664&4294967295,k=z+(D<<16&4294967295|D>>>16),D=C+(k^z^I)+O[10]+3200236656&4294967295,C=k+(D<<23&4294967295|D>>>9),D=I+(C^k^z)+O[13]+681279174&4294967295,I=C+(D<<4&4294967295|D>>>28),D=z+(I^C^k)+O[0]+3936430074&4294967295,z=I+(D<<11&4294967295|D>>>21),D=k+(z^I^C)+O[3]+3572445317&4294967295,k=z+(D<<16&4294967295|D>>>16),D=C+(k^z^I)+O[6]+76029189&4294967295,C=k+(D<<23&4294967295|D>>>9),D=I+(C^k^z)+O[9]+3654602809&4294967295,I=C+(D<<4&4294967295|D>>>28),D=z+(I^C^k)+O[12]+3873151461&4294967295,z=I+(D<<11&4294967295|D>>>21),D=k+(z^I^C)+O[15]+530742520&4294967295,k=z+(D<<16&4294967295|D>>>16),D=C+(k^z^I)+O[2]+3299628645&4294967295,C=k+(D<<23&4294967295|D>>>9),D=I+(k^(C|~z))+O[0]+4096336452&4294967295,I=C+(D<<6&4294967295|D>>>26),D=z+(C^(I|~k))+O[7]+1126891415&4294967295,z=I+(D<<10&4294967295|D>>>22),D=k+(I^(z|~C))+O[14]+2878612391&4294967295,k=z+(D<<15&4294967295|D>>>17),D=C+(z^(k|~I))+O[5]+4237533241&4294967295,C=k+(D<<21&4294967295|D>>>11),D=I+(k^(C|~z))+O[12]+1700485571&4294967295,I=C+(D<<6&4294967295|D>>>26),D=z+(C^(I|~k))+O[3]+2399980690&4294967295,z=I+(D<<10&4294967295|D>>>22),D=k+(I^(z|~C))+O[10]+4293915773&4294967295,k=z+(D<<15&4294967295|D>>>17),D=C+(z^(k|~I))+O[1]+2240044497&4294967295,C=k+(D<<21&4294967295|D>>>11),D=I+(k^(C|~z))+O[8]+1873313359&4294967295,I=C+(D<<6&4294967295|D>>>26),D=z+(C^(I|~k))+O[15]+4264355552&4294967295,z=I+(D<<10&4294967295|D>>>22),D=k+(I^(z|~C))+O[6]+2734768916&4294967295,k=z+(D<<15&4294967295|D>>>17),D=C+(z^(k|~I))+O[13]+1309151649&4294967295,C=k+(D<<21&4294967295|D>>>11),D=I+(k^(C|~z))+O[4]+4149444226&4294967295,I=C+(D<<6&4294967295|D>>>26),D=z+(C^(I|~k))+O[11]+3174756917&4294967295,z=I+(D<<10&4294967295|D>>>22),D=k+(I^(z|~C))+O[2]+718787259&4294967295,k=z+(D<<15&4294967295|D>>>17),D=C+(z^(k|~I))+O[9]+3951481745&4294967295,j.g[0]=j.g[0]+I&4294967295,j.g[1]=j.g[1]+(k+(D<<21&4294967295|D>>>11))&4294967295,j.g[2]=j.g[2]+k&4294967295,j.g[3]=j.g[3]+z&4294967295}a.prototype.v=function(j,I){I===void 0&&(I=j.length);const C=I-this.blockSize,O=this.C;let k=this.h,z=0;for(;z<I;){if(k==0)for(;z<=C;)o(this,j,z),z+=this.blockSize;if(typeof j=="string"){for(;z<I;)if(O[k++]=j.charCodeAt(z++),k==this.blockSize){o(this,O),k=0;break}}else for(;z<I;)if(O[k++]=j[z++],k==this.blockSize){o(this,O),k=0;break}}this.h=k,this.o+=I},a.prototype.A=function(){var j=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);j[0]=128;for(var I=1;I<j.length-8;++I)j[I]=0;I=this.o*8;for(var C=j.length-8;C<j.length;++C)j[C]=I&255,I/=256;for(this.v(j),j=Array(16),I=0,C=0;C<4;++C)for(let O=0;O<32;O+=8)j[I++]=this.g[C]>>>O&255;return j};function u(j,I){var C=m;return Object.prototype.hasOwnProperty.call(C,j)?C[j]:C[j]=I(j)}function d(j,I){this.h=I;const C=[];let O=!0;for(let k=j.length-1;k>=0;k--){const z=j[k]|0;O&&z==I||(C[k]=z,O=!1)}this.g=C}var m={};function p(j){return-128<=j&&j<128?u(j,function(I){return new d([I|0],I<0?-1:0)}):new d([j|0],j<0?-1:0)}function g(j){if(isNaN(j)||!isFinite(j))return w;if(j<0)return U(g(-j));const I=[];let C=1;for(let O=0;j>=C;O++)I[O]=j/C|0,C*=4294967296;return new d(I,0)}function v(j,I){if(j.length==0)throw Error("number format error: empty string");if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(j.charAt(0)=="-")return U(v(j.substring(1),I));if(j.indexOf("-")>=0)throw Error('number format error: interior "-" character');const C=g(Math.pow(I,8));let O=w;for(let z=0;z<j.length;z+=8){var k=Math.min(8,j.length-z);const D=parseInt(j.substring(z,z+k),I);k<8?(k=g(Math.pow(I,k)),O=O.j(k).add(g(D))):(O=O.j(C),O=O.add(g(D)))}return O}var w=p(0),T=p(1),R=p(16777216);n=d.prototype,n.m=function(){if(L(this))return-U(this).m();let j=0,I=1;for(let C=0;C<this.g.length;C++){const O=this.i(C);j+=(O>=0?O:4294967296+O)*I,I*=4294967296}return j},n.toString=function(j){if(j=j||10,j<2||36<j)throw Error("radix out of range: "+j);if(M(this))return"0";if(L(this))return"-"+U(this).toString(j);const I=g(Math.pow(j,6));var C=this;let O="";for(;;){const k=lt(C,I).g;C=K(C,k.j(I));let z=((C.g.length>0?C.g[0]:C.h)>>>0).toString(j);if(C=k,M(C))return z+O;for(;z.length<6;)z="0"+z;O=z+O}},n.i=function(j){return j<0?0:j<this.g.length?this.g[j]:this.h};function M(j){if(j.h!=0)return!1;for(let I=0;I<j.g.length;I++)if(j.g[I]!=0)return!1;return!0}function L(j){return j.h==-1}n.l=function(j){return j=K(this,j),L(j)?-1:M(j)?0:1};function U(j){const I=j.g.length,C=[];for(let O=0;O<I;O++)C[O]=~j.g[O];return new d(C,~j.h).add(T)}n.abs=function(){return L(this)?U(this):this},n.add=function(j){const I=Math.max(this.g.length,j.g.length),C=[];let O=0;for(let k=0;k<=I;k++){let z=O+(this.i(k)&65535)+(j.i(k)&65535),D=(z>>>16)+(this.i(k)>>>16)+(j.i(k)>>>16);O=D>>>16,z&=65535,D&=65535,C[k]=D<<16|z}return new d(C,C[C.length-1]&-2147483648?-1:0)};function K(j,I){return j.add(U(I))}n.j=function(j){if(M(this)||M(j))return w;if(L(this))return L(j)?U(this).j(U(j)):U(U(this).j(j));if(L(j))return U(this.j(U(j)));if(this.l(R)<0&&j.l(R)<0)return g(this.m()*j.m());const I=this.g.length+j.g.length,C=[];for(var O=0;O<2*I;O++)C[O]=0;for(O=0;O<this.g.length;O++)for(let k=0;k<j.g.length;k++){const z=this.i(O)>>>16,D=this.i(O)&65535,se=j.i(k)>>>16,qt=j.i(k)&65535;C[2*O+2*k]+=D*qt,X(C,2*O+2*k),C[2*O+2*k+1]+=z*qt,X(C,2*O+2*k+1),C[2*O+2*k+1]+=D*se,X(C,2*O+2*k+1),C[2*O+2*k+2]+=z*se,X(C,2*O+2*k+2)}for(j=0;j<I;j++)C[j]=C[2*j+1]<<16|C[2*j];for(j=I;j<2*I;j++)C[j]=0;return new d(C,0)};function X(j,I){for(;(j[I]&65535)!=j[I];)j[I+1]+=j[I]>>>16,j[I]&=65535,I++}function tt(j,I){this.g=j,this.h=I}function lt(j,I){if(M(I))throw Error("division by zero");if(M(j))return new tt(w,w);if(L(j))return I=lt(U(j),I),new tt(U(I.g),U(I.h));if(L(I))return I=lt(j,U(I)),new tt(U(I.g),I.h);if(j.g.length>30){if(L(j)||L(I))throw Error("slowDivide_ only works with positive integers.");for(var C=T,O=I;O.l(j)<=0;)C=Y(C),O=Y(O);var k=ot(C,1),z=ot(O,1);for(O=ot(O,2),C=ot(C,2);!M(O);){var D=z.add(O);D.l(j)<=0&&(k=k.add(C),z=D),O=ot(O,1),C=ot(C,1)}return I=K(j,k.j(I)),new tt(k,I)}for(k=w;j.l(I)>=0;){for(C=Math.max(1,Math.floor(j.m()/I.m())),O=Math.ceil(Math.log(C)/Math.LN2),O=O<=48?1:Math.pow(2,O-48),z=g(C),D=z.j(I);L(D)||D.l(j)>0;)C-=O,z=g(C),D=z.j(I);M(z)&&(z=T),k=k.add(z),j=K(j,D)}return new tt(k,j)}n.B=function(j){return lt(this,j).h},n.and=function(j){const I=Math.max(this.g.length,j.g.length),C=[];for(let O=0;O<I;O++)C[O]=this.i(O)&j.i(O);return new d(C,this.h&j.h)},n.or=function(j){const I=Math.max(this.g.length,j.g.length),C=[];for(let O=0;O<I;O++)C[O]=this.i(O)|j.i(O);return new d(C,this.h|j.h)},n.xor=function(j){const I=Math.max(this.g.length,j.g.length),C=[];for(let O=0;O<I;O++)C[O]=this.i(O)^j.i(O);return new d(C,this.h^j.h)};function Y(j){const I=j.g.length+1,C=[];for(let O=0;O<I;O++)C[O]=j.i(O)<<1|j.i(O-1)>>>31;return new d(C,j.h)}function ot(j,I){const C=I>>5;I%=32;const O=j.g.length-C,k=[];for(let z=0;z<O;z++)k[z]=I>0?j.i(z+C)>>>I|j.i(z+C+1)<<32-I:j.i(z+C);return new d(k,j.h)}a.prototype.digest=a.prototype.A,a.prototype.reset=a.prototype.u,a.prototype.update=a.prototype.v,z2=a,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.B,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=g,d.fromString=v,Jr=d}).apply(typeof cv<"u"?cv:typeof self<"u"?self:typeof window<"u"?window:{});var Qc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $2,Ll,B2,dh,fm,F2,q2,K2;(function(){var n,t=Object.defineProperty;function i(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qc=="object"&&Qc];for(var x=0;x<c.length;++x){var _=c[x];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var a=i(this);function o(c,x){if(x)t:{var _=a;c=c.split(".");for(var A=0;A<c.length-1;A++){var q=c[A];if(!(q in _))break t;_=_[q]}c=c[c.length-1],A=_[c],x=x(A),x!=A&&x!=null&&t(_,c,{configurable:!0,writable:!0,value:x})}}o("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(c){return c||function(x){var _=[],A;for(A in x)Object.prototype.hasOwnProperty.call(x,A)&&_.push([A,x[A]]);return _}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function m(c){var x=typeof c;return x=="object"&&c!=null||x=="function"}function p(c,x,_){return c.call.apply(c.bind,arguments)}function g(c,x,_){return g=p,g.apply(null,arguments)}function v(c,x){var _=Array.prototype.slice.call(arguments,1);return function(){var A=_.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function w(c,x){function _(){}_.prototype=x.prototype,c.Z=x.prototype,c.prototype=new _,c.prototype.constructor=c,c.Ob=function(A,q,W){for(var ut=Array(arguments.length-2),Rt=2;Rt<arguments.length;Rt++)ut[Rt-2]=arguments[Rt];return x.prototype[q].apply(A,ut)}}var T=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function R(c){const x=c.length;if(x>0){const _=Array(x);for(let A=0;A<x;A++)_[A]=c[A];return _}return[]}function M(c,x){for(let A=1;A<arguments.length;A++){const q=arguments[A];var _=typeof q;if(_=_!="object"?_:q?Array.isArray(q)?"array":_:"null",_=="array"||_=="object"&&typeof q.length=="number"){_=c.length||0;const W=q.length||0;c.length=_+W;for(let ut=0;ut<W;ut++)c[_+ut]=q[ut]}else c.push(q)}}class L{constructor(x,_){this.i=x,this.j=_,this.h=0,this.g=null}get(){let x;return this.h>0?(this.h--,x=this.g,this.g=x.next,x.next=null):x=this.i(),x}}function U(c){d.setTimeout(()=>{throw c},0)}function K(){var c=j;let x=null;return c.g&&(x=c.g,c.g=c.g.next,c.g||(c.h=null),x.next=null),x}class X{constructor(){this.h=this.g=null}add(x,_){const A=tt.get();A.set(x,_),this.h?this.h.next=A:this.g=A,this.h=A}}var tt=new L(()=>new lt,c=>c.reset());class lt{constructor(){this.next=this.g=this.h=null}set(x,_){this.h=x,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let Y,ot=!1,j=new X,I=()=>{const c=Promise.resolve(void 0);Y=()=>{c.then(C)}};function C(){for(var c;c=K();){try{c.h.call(c.g)}catch(_){U(_)}var x=tt;x.j(c),x.h<100&&(x.h++,c.next=x.g,x.g=c)}ot=!1}function O(){this.u=this.u,this.C=this.C}O.prototype.u=!1,O.prototype.dispose=function(){this.u||(this.u=!0,this.N())},O.prototype[Symbol.dispose]=function(){this.dispose()},O.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function k(c,x){this.type=c,this.g=this.target=x,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var z=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,x=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};d.addEventListener("test",_,x),d.removeEventListener("test",_,x)}catch{}return c})();function D(c){return/^[\s\xa0]*$/.test(c)}function se(c,x){k.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,x)}w(se,k),se.prototype.init=function(c,x){const _=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=x,x=c.relatedTarget,x||(_=="mouseover"?x=c.fromElement:_=="mouseout"&&(x=c.toElement)),this.relatedTarget=x,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&se.Z.h.call(this)},se.prototype.h=function(){se.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var qt="closure_listenable_"+(Math.random()*1e6|0),J=0;function dt(c,x,_,A,q){this.listener=c,this.proxy=null,this.src=x,this.type=_,this.capture=!!A,this.ha=q,this.key=++J,this.da=this.fa=!1}function yt(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function jt(c,x,_){for(const A in c)x.call(_,c[A],A,c)}function V(c,x){for(const _ in c)x.call(void 0,c[_],_,c)}function at(c){const x={};for(const _ in c)x[_]=c[_];return x}const ct="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ht(c,x){let _,A;for(let q=1;q<arguments.length;q++){A=arguments[q];for(_ in A)c[_]=A[_];for(let W=0;W<ct.length;W++)_=ct[W],Object.prototype.hasOwnProperty.call(A,_)&&(c[_]=A[_])}}function gt(c){this.src=c,this.g={},this.h=0}gt.prototype.add=function(c,x,_,A,q){const W=c.toString();c=this.g[W],c||(c=this.g[W]=[],this.h++);const ut=_t(c,x,A,q);return ut>-1?(x=c[ut],_||(x.fa=!1)):(x=new dt(x,this.src,W,!!A,q),x.fa=_,c.push(x)),x};function Ct(c,x){const _=x.type;if(_ in c.g){var A=c.g[_],q=Array.prototype.indexOf.call(A,x,void 0),W;(W=q>=0)&&Array.prototype.splice.call(A,q,1),W&&(yt(x),c.g[_].length==0&&(delete c.g[_],c.h--))}}function _t(c,x,_,A){for(let q=0;q<c.length;++q){const W=c[q];if(!W.da&&W.listener==x&&W.capture==!!_&&W.ha==A)return q}return-1}var ge="closure_lm_"+(Math.random()*1e6|0),Lt={};function Me(c,x,_,A,q){if(Array.isArray(x)){for(let W=0;W<x.length;W++)Me(c,x[W],_,A,q);return null}return _=Tu(_),c&&c[qt]?c.J(x,_,m(A)?!!A.capture:!1,q):Ni(c,x,_,!1,A,q)}function Ni(c,x,_,A,q,W){if(!x)throw Error("Invalid event type");const ut=m(q)?!!q.capture:!!q;let Rt=jo(c);if(Rt||(c[ge]=Rt=new gt(c)),_=Rt.add(x,_,A,ut,W),_.proxy)return _;if(A=Hn(),_.proxy=A,A.src=c,A.listener=_,c.addEventListener)z||(q=ut),q===void 0&&(q=!1),c.addEventListener(x.toString(),A,q);else if(c.attachEvent)c.attachEvent(as(x.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Hn(){function c(_){return x.call(c.src,c.listener,_)}const x=cd;return c}function ln(c,x,_,A,q){if(Array.isArray(x))for(var W=0;W<x.length;W++)ln(c,x[W],_,A,q);else A=m(A)?!!A.capture:!!A,_=Tu(_),c&&c[qt]?(c=c.i,W=String(x).toString(),W in c.g&&(x=c.g[W],_=_t(x,_,A,q),_>-1&&(yt(x[_]),Array.prototype.splice.call(x,_,1),x.length==0&&(delete c.g[W],c.h--)))):c&&(c=jo(c))&&(x=c.g[x.toString()],c=-1,x&&(c=_t(x,_,A,q)),(_=c>-1?x[c]:null)&&ua(_))}function ua(c){if(typeof c!="number"&&c&&!c.da){var x=c.src;if(x&&x[qt])Ct(x.i,c);else{var _=c.type,A=c.proxy;x.removeEventListener?x.removeEventListener(_,A,c.capture):x.detachEvent?x.detachEvent(as(_),A):x.addListener&&x.removeListener&&x.removeListener(A),(_=jo(x))?(Ct(_,c),_.h==0&&(_.src=null,x[ge]=null)):yt(c)}}}function as(c){return c in Lt?Lt[c]:Lt[c]="on"+c}function cd(c,x){if(c.da)c=!0;else{x=new se(x,this);const _=c.listener,A=c.ha||c.src;c.fa&&ua(c),c=_.call(A,x)}return c}function jo(c){return c=c[ge],c instanceof gt?c:null}var pn="__closure_events_fn_"+(Math.random()*1e9>>>0);function Tu(c){return typeof c=="function"?c:(c[pn]||(c[pn]=function(x){return c.handleEvent(x)}),c[pn])}function Oe(){O.call(this),this.i=new gt(this),this.M=this,this.G=null}w(Oe,O),Oe.prototype[qt]=!0,Oe.prototype.removeEventListener=function(c,x,_,A){ln(this,c,x,_,A)};function Le(c,x){var _,A=c.G;if(A)for(_=[];A;A=A.G)_.push(A);if(c=c.M,A=x.type||x,typeof x=="string")x=new k(x,c);else if(x instanceof k)x.target=x.target||c;else{var q=x;x=new k(A,c),ht(x,q)}q=!0;let W,ut;if(_)for(ut=_.length-1;ut>=0;ut--)W=x.g=_[ut],q=Mi(W,A,!0,x)&&q;if(W=x.g=c,q=Mi(W,A,!0,x)&&q,q=Mi(W,A,!1,x)&&q,_)for(ut=0;ut<_.length;ut++)W=x.g=_[ut],q=Mi(W,A,!1,x)&&q}Oe.prototype.N=function(){if(Oe.Z.N.call(this),this.i){var c=this.i;for(const x in c.g){const _=c.g[x];for(let A=0;A<_.length;A++)yt(_[A]);delete c.g[x],c.h--}}this.G=null},Oe.prototype.J=function(c,x,_,A){return this.i.add(String(c),x,!1,_,A)},Oe.prototype.K=function(c,x,_,A){return this.i.add(String(c),x,!0,_,A)};function Mi(c,x,_,A){if(x=c.i.g[String(x)],!x)return!0;x=x.concat();let q=!0;for(let W=0;W<x.length;++W){const ut=x[W];if(ut&&!ut.da&&ut.capture==_){const Rt=ut.listener,oe=ut.ha||ut.src;ut.fa&&Ct(c.i,ut),q=Rt.call(oe,A)!==!1&&q}}return q&&!A.defaultPrevented}function hd(c,x){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=g(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(x)>2147483647?-1:d.setTimeout(c,x||0)}function Co(c){c.g=hd(()=>{c.g=null,c.i&&(c.i=!1,Co(c))},c.l);const x=c.h;c.h=null,c.m.apply(null,x)}class dd extends O{constructor(x,_){super(),this.m=x,this.l=_,this.h=null,this.i=!1,this.g=null}j(x){this.h=arguments,this.g?this.i=!0:Co(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ca(c){O.call(this),this.h=c,this.g={}}w(ca,O);var hr=[];function tn(c){jt(c.g,function(x,_){this.g.hasOwnProperty(_)&&ua(x)},c),c.g={}}ca.prototype.N=function(){ca.Z.N.call(this),tn(this)},ca.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Dn=d.JSON.stringify,un=d.JSON.parse,fd=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function Su(){}function Au(){}var oi={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function dr(){k.call(this,"d")}w(dr,k);function Gn(){k.call(this,"c")}w(Gn,k);var Nn={},fr=null;function ss(){return fr=fr||new Oe}Nn.Ia="serverreachability";function Do(c){k.call(this,Nn.Ia,c)}w(Do,k);function pr(c){const x=ss();Le(x,new Do(x))}Nn.STAT_EVENT="statevent";function os(c,x){k.call(this,Nn.STAT_EVENT,c),this.stat=x}w(os,k);function ve(c){const x=ss();Le(x,new os(x,c))}Nn.Ja="timingevent";function Ru(c,x){k.call(this,Nn.Ja,c),this.size=x}w(Ru,k);function mr(c,x){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},x)}function gr(){this.g=!0}gr.prototype.ua=function(){this.g=!1};function No(c,x,_,A,q,W){c.info(function(){if(c.g)if(W){var ut="",Rt=W.split("&");for(let Qt=0;Qt<Rt.length;Qt++){var oe=Rt[Qt].split("=");if(oe.length>1){const we=oe[0];oe=oe[1];const En=we.split("_");ut=En.length>=2&&En[1]=="type"?ut+(we+"="+oe+"&"):ut+(we+"=redacted&")}}}else ut=null;else ut=W;return"XMLHTTP REQ ("+A+") [attempt "+q+"]: "+x+`
`+_+`
`+ut})}function Mo(c,x,_,A,q,W,ut){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+q+"]: "+x+`
`+_+`
`+W+" "+ut})}function Oi(c,x,_,A){c.info(function(){return"XMLHTTP TEXT ("+x+"): "+li(c,_)+(A?" "+A:"")})}function pd(c,x){c.info(function(){return"TIMEOUT: "+x})}gr.prototype.info=function(){};function li(c,x){if(!c.g)return x;if(!x)return null;try{const W=JSON.parse(x);if(W){for(c=0;c<W.length;c++)if(Array.isArray(W[c])){var _=W[c];if(!(_.length<2)){var A=_[1];if(Array.isArray(A)&&!(A.length<1)){var q=A[0];if(q!="noop"&&q!="stop"&&q!="close")for(let ut=1;ut<A.length;ut++)A[ut]=""}}}}return Dn(W)}catch{return x}}var _e={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ge={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Vi;function ha(){}w(ha,Su),ha.prototype.g=function(){return new XMLHttpRequest},Vi=new ha;function da(c){return encodeURIComponent(String(c))}function md(c){var x=1;c=c.split(":");const _=[];for(;x>0&&c.length;)_.push(c.shift()),x--;return c.length&&_.push(c.join(":")),_}function Yn(c,x,_,A){this.j=c,this.i=x,this.l=_,this.S=A||1,this.V=new ca(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new yr}function yr(){this.i=null,this.g="",this.h=!1}var ls={},ui={};function ci(c,x,_){c.M=1,c.A=Pi(fe(x)),c.u=_,c.R=!0,xr(c,null)}function xr(c,x){c.F=Date.now(),fa(c),c.B=fe(c.A);var _=c.B,A=c.S;Array.isArray(A)||(A=[String(A)]),Du(_.i,"t",A),c.C=0,_=c.j.L,c.h=new yr,c.g=xs(c.j,_?x:null,!c.u),c.P>0&&(c.O=new dd(g(c.Y,c,c.g),c.P)),x=c.V,_=c.g,A=c.ba;var q="readystatechange";Array.isArray(q)||(q&&(hr[0]=q.toString()),q=hr);for(let W=0;W<q.length;W++){const ut=Me(_,q[W],A||x.handleEvent,!1,x.h||x);if(!ut)break;x.g[ut.key]=ut}x=c.J?at(c.J):{},c.u?(c.v||(c.v="POST"),x["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,x)):(c.v="GET",c.g.ea(c.B,c.v,null,x)),pr(),No(c.i,c.v,c.B,c.l,c.S,c.u)}Yn.prototype.ba=function(c){c=c.target;const x=this.O;x&&en(c)==3?x.j():this.Y(c)},Yn.prototype.Y=function(c){try{if(c==this.g)t:{const Rt=en(this.g),oe=this.g.ya(),Qt=this.g.ca();if(!(Rt<3)&&(Rt!=3||this.g&&(this.h.h||this.g.la()||Ta(this.g)))){this.K||Rt!=4||oe==7||(oe==8||Qt<=0?pr(3):pr(2)),di(this);var x=this.g.ca();this.X=x;var _=vr(this);if(this.o=x==200,Mo(this.i,this.v,this.B,this.l,this.S,Rt,x),this.o){if(this.U&&!this.L){e:{if(this.g){var A,q=this.g;if((A=q.g?q.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(A)){var W=A;break e}}W=null}if(c=W)Oi(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,us(this,c);else{this.o=!1,this.m=3,ve(12),fi(this),pa(this);break t}}if(this.R){c=!0;let we;for(;!this.K&&this.C<_.length;)if(we=Iu(this,_),we==ui){Rt==4&&(this.m=4,ve(14),c=!1),Oi(this.i,this.l,null,"[Incomplete Response]");break}else if(we==ls){this.m=4,ve(15),Oi(this.i,this.l,_,"[Invalid Chunk]"),c=!1;break}else Oi(this.i,this.l,we,null),us(this,we);if(Ee(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Rt!=4||_.length!=0||this.h.h||(this.m=1,ve(16),c=!1),this.o=this.o&&c,!c)Oi(this.i,this.l,_,"[Invalid Chunked Response]"),fi(this),pa(this);else if(_.length>0&&!this.W){this.W=!0;var ut=this.j;ut.g==this&&ut.aa&&!ut.P&&(ut.j.info("Great, no buffering proxy detected. Bytes received: "+_.length),Fo(ut),ut.P=!0,ve(11))}}else Oi(this.i,this.l,_,null),us(this,_);Rt==4&&fi(this),this.o&&!this.K&&(Rt==4?qo(this.j,this):(this.o=!1,fa(this)))}else Sa(this.g),x==400&&_.indexOf("Unknown SID")>0?(this.m=3,ve(12)):(this.m=0,ve(13)),fi(this),pa(this)}}}catch{}finally{}};function vr(c){if(!Ee(c))return c.g.la();const x=Ta(c.g);if(x==="")return"";let _="";const A=x.length,q=en(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return fi(c),pa(c),"";c.h.i=new d.TextDecoder}for(let W=0;W<A;W++)c.h.h=!0,_+=c.h.i.decode(x[W],{stream:!(q&&W==A-1)});return x.length=0,c.h.g+=_,c.C=0,c.h.g}function Ee(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function Iu(c,x){var _=c.C,A=x.indexOf(`
`,_);return A==-1?ui:(_=Number(x.substring(_,A)),isNaN(_)?ls:(A+=1,A+_>x.length?ui:(x=x.slice(A,A+_),c.C=A+_,x)))}Yn.prototype.cancel=function(){this.K=!0,fi(this)};function fa(c){c.T=Date.now()+c.H,hi(c,c.H)}function hi(c,x){if(c.D!=null)throw Error("WatchDog timer not null");c.D=mr(g(c.aa,c),x)}function di(c){c.D&&(d.clearTimeout(c.D),c.D=null)}Yn.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(pd(this.i,this.B),this.M!=2&&(pr(),ve(17)),fi(this),this.m=2,pa(this)):hi(this,this.T-c)};function pa(c){c.j.I==0||c.K||qo(c.j,c)}function fi(c){di(c);var x=c.O;x&&typeof x.dispose=="function"&&x.dispose(),c.O=null,tn(c.V),c.g&&(x=c.g,c.g=null,x.abort(),x.dispose())}function us(c,x){try{var _=c.j;if(_.I!=0&&(_.g==c||ya(_.h,c))){if(!c.L&&ya(_.h,c)&&_.I==3){try{var A=_.Ba.g.parse(x)}catch{A=null}if(Array.isArray(A)&&A.length==3){var q=A;if(q[0]==0){t:if(!_.v){if(_.g)if(_.g.F+3e3<c.F)ys(_),pi(_);else break t;Bo(_),ve(18)}}else _.xa=q[1],0<_.xa-_.K&&q[2]<37500&&_.F&&_.A==0&&!_.C&&(_.C=mr(g(_.Va,_),6e3));Mn(_.h)<=1&&_.ta&&(_.ta=void 0)}else zi(_,11)}else if((c.L||_.g==c)&&ys(_),!D(x))for(q=_.Ba.g.parse(x),x=0;x<q.length;x++){let Qt=q[x];const we=Qt[0];if(!(we<=_.K))if(_.K=we,Qt=Qt[1],_.I==2)if(Qt[0]=="c"){_.M=Qt[1],_.ba=Qt[2];const En=Qt[3];En!=null&&(_.ka=En,_.j.info("VER="+_.ka));const mi=Qt[4];mi!=null&&(_.za=mi,_.j.info("SVER="+_.za));const Wn=Qt[5];Wn!=null&&typeof Wn=="number"&&Wn>0&&(A=1.5*Wn,_.O=A,_.j.info("backChannelRequestTimeoutMs_="+A)),A=_;const Zn=c.g;if(Zn){const Jn=Zn.g?Zn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Jn){var W=A.h;W.g||Jn.indexOf("spdy")==-1&&Jn.indexOf("quic")==-1&&Jn.indexOf("h2")==-1||(W.j=W.l,W.g=new Set,W.h&&(cs(W,W.h),W.h=null))}if(A.G){const Ho=Zn.g?Zn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ho&&(A.wa=Ho,Zt(A.J,A.G,Ho))}}_.I=3,_.l&&_.l.ra(),_.aa&&(_.T=Date.now()-c.F,_.j.info("Handshake RTT: "+_.T+"ms")),A=_;var ut=c;if(A.na=zu(A,A.L?A.ba:null,A.W),ut.L){ki(A.h,ut);var Rt=ut,oe=A.O;oe&&(Rt.H=oe),Rt.D&&(di(Rt),fa(Rt)),A.g=ut}else ku(A);_.i.length>0&&ja(_)}else Qt[0]!="stop"&&Qt[0]!="close"||zi(_,7);else _.I==3&&(Qt[0]=="stop"||Qt[0]=="close"?Qt[0]=="stop"?zi(_,7):Ra(_):Qt[0]!="noop"&&_.l&&_.l.qa(Qt),_.A=0)}}pr(4)}catch{}}var gd=class{constructor(c,x){this.g=c,this.map=x}};function ma(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ga(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Mn(c){return c.h?1:c.g?c.g.size:0}function ya(c,x){return c.h?c.h==x:c.g?c.g.has(x):!1}function cs(c,x){c.g?c.g.add(x):c.h=x}function ki(c,x){c.h&&c.h==x?c.h=null:c.g&&c.g.has(x)&&c.g.delete(x)}ma.prototype.cancel=function(){if(this.i=hs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function hs(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let x=c.i;for(const _ of c.g.values())x=x.concat(_.G);return x}return R(c.i)}var ds=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yd(c,x){if(c){c=c.split("&");for(let _=0;_<c.length;_++){const A=c[_].indexOf("=");let q,W=null;A>=0?(q=c[_].substring(0,A),W=c[_].substring(A+1)):q=c[_],x(q,W?decodeURIComponent(W.replace(/\+/g," ")):"")}}}function Qn(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let x;c instanceof Qn?(this.l=c.l,_r(this,c.j),this.o=c.o,this.g=c.g,xa(this,c.u),this.h=c.h,Er(this,Nu(c.i)),this.m=c.m):c&&(x=String(c).match(ds))?(this.l=!1,_r(this,x[1]||"",!0),this.o=va(x[2]||""),this.g=va(x[3]||"",!0),xa(this,x[4]),this.h=va(x[5]||"",!0),Er(this,x[6]||"",!0),this.m=va(x[7]||"")):(this.l=!1,this.i=new On(null,this.l))}Qn.prototype.toString=function(){const c=[];var x=this.j;x&&c.push(ze(x,Vo,!0),":");var _=this.g;return(_||x=="file")&&(c.push("//"),(x=this.o)&&c.push(ze(x,Vo,!0),"@"),c.push(da(_).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.u,_!=null&&c.push(":",String(_))),(_=this.h)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(ze(_,_.charAt(0)=="/"?wr:ko,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",ze(_,Cu)),c.join("")},Qn.prototype.resolve=function(c){const x=fe(this);let _=!!c.j;_?_r(x,c.j):_=!!c.o,_?x.o=c.o:_=!!c.g,_?x.g=c.g:_=c.u!=null;var A=c.h;if(_)xa(x,c.u);else if(_=!!c.h){if(A.charAt(0)!="/")if(this.g&&!this.h)A="/"+A;else{var q=x.h.lastIndexOf("/");q!=-1&&(A=x.h.slice(0,q+1)+A)}if(q=A,q==".."||q==".")A="";else if(q.indexOf("./")!=-1||q.indexOf("/.")!=-1){A=q.lastIndexOf("/",0)==0,q=q.split("/");const W=[];for(let ut=0;ut<q.length;){const Rt=q[ut++];Rt=="."?A&&ut==q.length&&W.push(""):Rt==".."?((W.length>1||W.length==1&&W[0]!="")&&W.pop(),A&&ut==q.length&&W.push("")):(W.push(Rt),A=!0)}A=W.join("/")}else A=q}return _?x.h=A:_=c.i.toString()!=="",_?Er(x,Nu(c.i)):_=!!c.m,_&&(x.m=c.m),x};function fe(c){return new Qn(c)}function _r(c,x,_){c.j=_?va(x,!0):x,c.j&&(c.j=c.j.replace(/:$/,""))}function xa(c,x){if(x){if(x=Number(x),isNaN(x)||x<0)throw Error("Bad port number "+x);c.u=x}else c.u=null}function Er(c,x,_){x instanceof On?(c.i=x,Lo(c.i,c.l)):(_||(x=ze(x,ju)),c.i=new On(x,c.l))}function Zt(c,x,_){c.i.set(x,_)}function Pi(c){return Zt(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function va(c,x){return c?x?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function ze(c,x,_){return typeof c=="string"?(c=encodeURI(c).replace(x,Oo),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Oo(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Vo=/[#\/\?@]/g,ko=/[#\?:]/g,wr=/[#\?]/g,ju=/[#\?@]/g,Cu=/#/g;function On(c,x){this.h=this.g=null,this.i=c||null,this.j=!!x}function Ui(c){c.g||(c.g=new Map,c.h=0,c.i&&yd(c.i,function(x,_){c.add(decodeURIComponent(x.replace(/\+/g," ")),_)}))}n=On.prototype,n.add=function(c,x){Ui(this),this.i=null,c=Xn(this,c);let _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(x),this.h+=1,this};function Po(c,x){Ui(c),x=Xn(c,x),c.g.has(x)&&(c.i=null,c.h-=c.g.get(x).length,c.g.delete(x))}function Uo(c,x){return Ui(c),x=Xn(c,x),c.g.has(x)}n.forEach=function(c,x){Ui(this),this.g.forEach(function(_,A){_.forEach(function(q){c.call(x,q,A,this)},this)},this)};function fs(c,x){Ui(c);let _=[];if(typeof x=="string")Uo(c,x)&&(_=_.concat(c.g.get(Xn(c,x))));else for(c=Array.from(c.g.values()),x=0;x<c.length;x++)_=_.concat(c[x]);return _}n.set=function(c,x){return Ui(this),this.i=null,c=Xn(this,c),Uo(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[x]),this.h+=1,this},n.get=function(c,x){return c?(c=fs(this,c),c.length>0?String(c[0]):x):x};function Du(c,x,_){Po(c,x),_.length>0&&(c.i=null,c.g.set(Xn(c,x),R(_)),c.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],x=Array.from(this.g.keys());for(let A=0;A<x.length;A++){var _=x[A];const q=da(_);_=fs(this,_);for(let W=0;W<_.length;W++){let ut=q;_[W]!==""&&(ut+="="+da(_[W])),c.push(ut)}}return this.i=c.join("&")};function Nu(c){const x=new On;return x.i=c.i,c.g&&(x.g=new Map(c.g),x.h=c.h),x}function Xn(c,x){return x=String(x),c.j&&(x=x.toLowerCase()),x}function Lo(c,x){x&&!c.j&&(Ui(c),c.i=null,c.g.forEach(function(_,A){const q=A.toLowerCase();A!=q&&(Po(this,A),Du(this,q,_))},c)),c.j=x}function zo(c,x){const _=new gr;if(d.Image){const A=new Image;A.onload=v(cn,_,"TestLoadImage: loaded",!0,x,A),A.onerror=v(cn,_,"TestLoadImage: error",!1,x,A),A.onabort=v(cn,_,"TestLoadImage: abort",!1,x,A),A.ontimeout=v(cn,_,"TestLoadImage: timeout",!1,x,A),d.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else x(!1)}function br(c,x){const _=new gr,A=new AbortController,q=setTimeout(()=>{A.abort(),cn(_,"TestPingServer: timeout",!1,x)},1e4);fetch(c,{signal:A.signal}).then(W=>{clearTimeout(q),W.ok?cn(_,"TestPingServer: ok",!0,x):cn(_,"TestPingServer: server error",!1,x)}).catch(()=>{clearTimeout(q),cn(_,"TestPingServer: error",!1,x)})}function cn(c,x,_,A,q){try{q&&(q.onload=null,q.onerror=null,q.onabort=null,q.ontimeout=null),A(_)}catch{}}function Mu(){this.g=new fd}function _a(c){this.i=c.Sb||null,this.h=c.ab||!1}w(_a,Su),_a.prototype.g=function(){return new Ea(this.i,this.h)};function Ea(c,x){Oe.call(this),this.H=c,this.o=x,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}w(Ea,Oe),n=Ea.prototype,n.open=function(c,x){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=x,this.readyState=1,Li(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const x={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(x.body=c),(this.H||d).fetch(new Request(this.D,x)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,hn(this)),this.readyState=0},n.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Li(this)),this.g&&(this.readyState=3,Li(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Tr(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function Tr(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}n.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var x=c.value?c.value:new Uint8Array(0);(x=this.B.decode(x,{stream:!c.done}))&&(this.response=this.responseText+=x)}c.done?hn(this):Li(this),this.readyState==3&&Tr(this)}},n.Oa=function(c){this.g&&(this.response=this.responseText=c,hn(this))},n.Na=function(c){this.g&&(this.response=c,hn(this))},n.ga=function(){this.g&&hn(this)};function hn(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Li(c)}n.setRequestHeader=function(c,x){this.A.append(c,x)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],x=this.h.entries();for(var _=x.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=x.next();return c.join(`\r
`)};function Li(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Ea.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Sr(c){let x="";return jt(c,function(_,A){x+=A,x+=":",x+=_,x+=`\r
`}),x}function Vn(c,x,_){t:{for(A in _){var A=!1;break t}A=!0}A||(_=Sr(_),typeof c=="string"?_!=null&&da(_):Zt(c,x,_))}function ie(c){Oe.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}w(ie,Oe);var ps=/^https?$/i,Ou=["POST","PUT"];n=ie.prototype,n.Fa=function(c){this.H=c},n.ea=function(c,x,_,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);x=x?x.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Vi.g(),this.g.onreadystatechange=T(g(this.Ca,this));try{this.B=!0,this.g.open(x,String(c),!0),this.B=!1}catch(W){wa(this,W);return}if(c=_||"",_=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var q in A)_.set(q,A[q]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const W of A.keys())_.set(W,A.get(W));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(_.keys()).find(W=>W.toLowerCase()=="content-type"),q=d.FormData&&c instanceof d.FormData,!(Array.prototype.indexOf.call(Ou,x,void 0)>=0)||A||q||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[W,ut]of _)this.g.setRequestHeader(W,ut);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(W){wa(this,W)}};function wa(c,x){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=x,c.o=5,ba(c),Ve(c)}function ba(c){c.A||(c.A=!0,Le(c,"complete"),Le(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,Le(this,"complete"),Le(this,"abort"),Ve(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ve(this,!0)),ie.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?$o(this):this.Xa())},n.Xa=function(){$o(this)};function $o(c){if(c.h&&typeof u<"u"){if(c.v&&en(c)==4)setTimeout(c.Ca.bind(c),0);else if(Le(c,"readystatechange"),en(c)==4){c.h=!1;try{const W=c.ca();t:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var x=!0;break t;default:x=!1}var _;if(!(_=x)){var A;if(A=W===0){let ut=String(c.D).match(ds)[1]||null;!ut&&d.self&&d.self.location&&(ut=d.self.location.protocol.slice(0,-1)),A=!ps.test(ut?ut.toLowerCase():"")}_=A}if(_)Le(c,"complete"),Le(c,"success");else{c.o=6;try{var q=en(c)>2?c.g.statusText:""}catch{q=""}c.l=q+" ["+c.ca()+"]",ba(c)}}finally{Ve(c)}}}}function Ve(c,x){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const _=c.g;c.g=null,x||Le(c,"ready");try{_.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function en(c){return c.g?c.g.readyState:0}n.ca=function(){try{return en(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(c){if(this.g){var x=this.g.responseText;return c&&x.indexOf(c)==0&&(x=x.substring(c.length)),un(x)}};function Ta(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Sa(c){const x={};c=(c.g&&en(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(D(c[A]))continue;var _=md(c[A]);const q=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const W=x[q]||[];x[q]=W,W.push(_)}V(x,function(A){return A.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Aa(c,x,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||x}function ms(c){this.za=0,this.i=[],this.j=new gr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Aa("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Aa("baseRetryDelayMs",5e3,c),this.Za=Aa("retryDelaySeedMs",1e4,c),this.Ta=Aa("forwardChannelMaxRetries",2,c),this.va=Aa("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new ma(c&&c.concurrentRequestLimit),this.Ba=new Mu,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=ms.prototype,n.ka=8,n.I=1,n.connect=function(c,x,_,A){ve(0),this.W=c,this.H=x||{},_&&A!==void 0&&(this.H.OSID=_,this.H.OAID=A),this.F=this.X,this.J=zu(this,null,this.W),ja(this)};function Ra(c){if(Ia(c),c.I==3){var x=c.V++,_=fe(c.J);if(Zt(_,"SID",c.M),Zt(_,"RID",x),Zt(_,"TYPE","terminate"),Ca(c,_),x=new Yn(c,c.j,x),x.M=2,x.A=Pi(fe(_)),_=!1,d.navigator&&d.navigator.sendBeacon)try{_=d.navigator.sendBeacon(x.A.toString(),"")}catch{}!_&&d.Image&&(new Image().src=x.A,_=!0),_||(x.g=xs(x.j,null),x.g.ea(x.A)),x.F=Date.now(),fa(x)}Lu(c)}function pi(c){c.g&&(Fo(c),c.g.cancel(),c.g=null)}function Ia(c){pi(c),c.v&&(d.clearTimeout(c.v),c.v=null),ys(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&d.clearTimeout(c.m),c.m=null)}function ja(c){if(!ga(c.h)&&!c.m){c.m=!0;var x=c.Ea;Y||I(),ot||(Y(),ot=!0),j.add(x,c),c.D=0}}function xd(c,x){return Mn(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=x.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=mr(g(c.Ea,c,x),Uu(c,c.D)),c.D++,!0)}n.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const q=new Yn(this,this.j,c);let W=this.o;if(this.U&&(W?(W=at(W),ht(W,this.U)):W=this.U),this.u!==null||this.R||(q.J=W,W=null),this.S)t:{for(var x=0,_=0;_<this.i.length;_++){e:{var A=this.i[_];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break e}A=void 0}if(A===void 0)break;if(x+=A,x>4096){x=_;break t}if(x===4096||_===this.i.length-1){x=_+1;break t}}x=1e3}else x=1e3;x=gs(this,q,x),_=fe(this.J),Zt(_,"RID",c),Zt(_,"CVER",22),this.G&&Zt(_,"X-HTTP-Session-Id",this.G),Ca(this,_),W&&(this.R?x="headers="+da(Sr(W))+"&"+x:this.u&&Vn(_,this.u,W)),cs(this.h,q),this.Ra&&Zt(_,"TYPE","init"),this.S?(Zt(_,"$req",x),Zt(_,"SID","null"),q.U=!0,ci(q,_,null)):ci(q,_,x),this.I=2}}else this.I==3&&(c?Vu(this,c):this.i.length==0||ga(this.h)||Vu(this))};function Vu(c,x){var _;x?_=x.l:_=c.V++;const A=fe(c.J);Zt(A,"SID",c.M),Zt(A,"RID",_),Zt(A,"AID",c.K),Ca(c,A),c.u&&c.o&&Vn(A,c.u,c.o),_=new Yn(c,c.j,_,c.D+1),c.u===null&&(_.J=c.o),x&&(c.i=x.G.concat(c.i)),x=gs(c,_,1e3),_.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),cs(c.h,_),ci(_,A,x)}function Ca(c,x){c.H&&jt(c.H,function(_,A){Zt(x,A,_)}),c.l&&jt({},function(_,A){Zt(x,A,_)})}function gs(c,x,_){_=Math.min(c.i.length,_);const A=c.l?g(c.l.Ka,c.l,c):null;t:{var q=c.i;let Rt=-1;for(;;){const oe=["count="+_];Rt==-1?_>0?(Rt=q[0].g,oe.push("ofs="+Rt)):Rt=0:oe.push("ofs="+Rt);let Qt=!0;for(let we=0;we<_;we++){var W=q[we].g;const En=q[we].map;if(W-=Rt,W<0)Rt=Math.max(0,q[we].g-100),Qt=!1;else try{W="req"+W+"_"||"";try{var ut=En instanceof Map?En:Object.entries(En);for(const[mi,Wn]of ut){let Zn=Wn;m(Wn)&&(Zn=Dn(Wn)),oe.push(W+mi+"="+encodeURIComponent(Zn))}}catch(mi){throw oe.push(W+"type="+encodeURIComponent("_badmap")),mi}}catch{A&&A(En)}}if(Qt){ut=oe.join("&");break t}}ut=void 0}return c=c.i.splice(0,_),x.G=c,ut}function ku(c){if(!c.g&&!c.v){c.Y=1;var x=c.Da;Y||I(),ot||(Y(),ot=!0),j.add(x,c),c.A=0}}function Bo(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=mr(g(c.Da,c),Uu(c,c.A)),c.A++,!0)}n.Da=function(){if(this.v=null,Pu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=mr(g(this.Wa,this),c)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ve(10),pi(this),Pu(this))};function Fo(c){c.B!=null&&(d.clearTimeout(c.B),c.B=null)}function Pu(c){c.g=new Yn(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var x=fe(c.na);Zt(x,"RID","rpc"),Zt(x,"SID",c.M),Zt(x,"AID",c.K),Zt(x,"CI",c.F?"0":"1"),!c.F&&c.ia&&Zt(x,"TO",c.ia),Zt(x,"TYPE","xmlhttp"),Ca(c,x),c.u&&c.o&&Vn(x,c.u,c.o),c.O&&(c.g.H=c.O);var _=c.g;c=c.ba,_.M=1,_.A=Pi(fe(x)),_.u=null,_.R=!0,xr(_,c)}n.Va=function(){this.C!=null&&(this.C=null,pi(this),Bo(this),ve(19))};function ys(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function qo(c,x){var _=null;if(c.g==x){ys(c),Fo(c),c.g=null;var A=2}else if(ya(c.h,x))_=x.G,ki(c.h,x),A=1;else return;if(c.I!=0){if(x.o)if(A==1){_=x.u?x.u.length:0,x=Date.now()-x.F;var q=c.D;A=ss(),Le(A,new Ru(A,_)),ja(c)}else ku(c);else if(q=x.m,q==3||q==0&&x.X>0||!(A==1&&xd(c,x)||A==2&&Bo(c)))switch(_&&_.length>0&&(x=c.h,x.i=x.i.concat(_)),q){case 1:zi(c,5);break;case 4:zi(c,10);break;case 3:zi(c,6);break;default:zi(c,2)}}}function Uu(c,x){let _=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(_*=2),_*x}function zi(c,x){if(c.j.info("Error code "+x),x==2){var _=g(c.bb,c),A=c.Ua;const q=!A;A=new Qn(A||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||_r(A,"https"),Pi(A),q?zo(A.toString(),_):br(A.toString(),_)}else ve(2);c.I=0,c.l&&c.l.pa(x),Lu(c),Ia(c)}n.bb=function(c){c?(this.j.info("Successfully pinged google.com"),ve(2)):(this.j.info("Failed to ping google.com"),ve(1))};function Lu(c){if(c.I=0,c.ja=[],c.l){const x=hs(c.h);(x.length!=0||c.i.length!=0)&&(M(c.ja,x),M(c.ja,c.i),c.h.i.length=0,R(c.i),c.i.length=0),c.l.oa()}}function zu(c,x,_){var A=_ instanceof Qn?fe(_):new Qn(_);if(A.g!="")x&&(A.g=x+"."+A.g),xa(A,A.u);else{var q=d.location;A=q.protocol,x=x?x+"."+q.hostname:q.hostname,q=+q.port;const W=new Qn(null);A&&_r(W,A),x&&(W.g=x),q&&xa(W,q),_&&(W.h=_),A=W}return _=c.G,x=c.wa,_&&x&&Zt(A,_,x),Zt(A,"VER",c.ka),Ca(c,A),A}function xs(c,x,_){if(x&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return x=c.Aa&&!c.ma?new ie(new _a({ab:_})):new ie(c.ma),x.Fa(c.L),x}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function $u(){}n=$u.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function vs(){}vs.prototype.g=function(c,x){return new dn(c,x)};function dn(c,x){Oe.call(this),this.g=new ms(x),this.l=c,this.h=x&&x.messageUrlParams||null,c=x&&x.messageHeaders||null,x&&x.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=x&&x.initMessageHeaders||null,x&&x.messageContentType&&(c?c["X-WebChannel-Content-Type"]=x.messageContentType:c={"X-WebChannel-Content-Type":x.messageContentType}),x&&x.sa&&(c?c["X-WebChannel-Client-Profile"]=x.sa:c={"X-WebChannel-Client-Profile":x.sa}),this.g.U=c,(c=x&&x.Qb)&&!D(c)&&(this.g.u=c),this.A=x&&x.supportsCrossDomainXhr||!1,this.v=x&&x.sendRawJson||!1,(x=x&&x.httpSessionIdParam)&&!D(x)&&(this.g.G=x,c=this.h,c!==null&&x in c&&(c=this.h,x in c&&delete c[x])),this.j=new Ar(this)}w(dn,Oe),dn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},dn.prototype.close=function(){Ra(this.g)},dn.prototype.o=function(c){var x=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.v&&(_={},_.__data__=Dn(c),c=_);x.i.push(new gd(x.Ya++,c)),x.I==3&&ja(x)},dn.prototype.N=function(){this.g.l=null,delete this.j,Ra(this.g),delete this.g,dn.Z.N.call(this)};function Ko(c){dr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var x=c.__sm__;if(x){t:{for(const _ in x){c=_;break t}c=void 0}(this.i=c)&&(c=this.i,x=x!==null&&c in x?x[c]:void 0),this.data=x}else this.data=c}w(Ko,dr);function Bu(){Gn.call(this),this.status=1}w(Bu,Gn);function Ar(c){this.g=c}w(Ar,$u),Ar.prototype.ra=function(){Le(this.g,"a")},Ar.prototype.qa=function(c){Le(this.g,new Ko(c))},Ar.prototype.pa=function(c){Le(this.g,new Bu)},Ar.prototype.oa=function(){Le(this.g,"b")},vs.prototype.createWebChannel=vs.prototype.g,dn.prototype.send=dn.prototype.o,dn.prototype.open=dn.prototype.m,dn.prototype.close=dn.prototype.close,K2=function(){return new vs},q2=function(){return ss()},F2=Nn,fm={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},_e.NO_ERROR=0,_e.TIMEOUT=8,_e.HTTP_ERROR=6,dh=_e,Ge.COMPLETE="complete",B2=Ge,Au.EventType=oi,oi.OPEN="a",oi.CLOSE="b",oi.ERROR="c",oi.MESSAGE="d",Oe.prototype.listen=Oe.prototype.J,Ll=Au,ie.prototype.listenOnce=ie.prototype.K,ie.prototype.getLastError=ie.prototype.Ha,ie.prototype.getLastErrorCode=ie.prototype.ya,ie.prototype.getStatus=ie.prototype.ca,ie.prototype.getResponseJson=ie.prototype.La,ie.prototype.getResponseText=ie.prototype.la,ie.prototype.send=ie.prototype.ea,ie.prototype.setWithCredentials=ie.prototype.Fa,$2=ie}).apply(typeof Qc<"u"?Qc:typeof self<"u"?self:typeof window<"u"?window:{});const hv="@firebase/firestore",dv="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Za=new V2("@firebase/firestore");function Ws(){return Za.logLevel}function pt(n,...t){if(Za.logLevel<=Bt.DEBUG){const i=t.map(lg);Za.debug(`Firestore (${To}): ${n}`,...i)}}function lr(n,...t){if(Za.logLevel<=Bt.ERROR){const i=t.map(lg);Za.error(`Firestore (${To}): ${n}`,...i)}}function co(n,...t){if(Za.logLevel<=Bt.WARN){const i=t.map(lg);Za.warn(`Firestore (${To}): ${n}`,...i)}}function lg(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function bt(n,t,i){let a="Unexpected state";typeof t=="string"?a=t:i=t,H2(n,a,i)}function H2(n,t,i){let a=`FIRESTORE (${To}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(i!==void 0)try{a+=" CONTEXT: "+JSON.stringify(i)}catch{a+=" CONTEXT: "+i}throw lr(a),new Error(a)}function Yt(n,t,i,a){let o="Unexpected state";typeof i=="string"?o=i:a=i,n||H2(t,o,a)}function It(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class G2{constructor(t,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class yI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,i){t.enqueueRetryable((()=>i(sn.UNAUTHENTICATED)))}shutdown(){}}class xI{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,i){this.changeListener=i,t.enqueueRetryable((()=>i(this.token.user)))}shutdown(){this.changeListener=null}}class vI{constructor(t){this.t=t,this.currentUser=sn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,i){Yt(this.o===void 0,42304);let a=this.i;const o=p=>this.i!==a?(a=this.i,i(p)):Promise.resolve();let u=new ir;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new ir,t.enqueueRetryable((()=>o(this.currentUser)))};const d=()=>{const p=u;t.enqueueRetryable((async()=>{await p.promise,await o(this.currentUser)}))},m=p=>{pt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit((p=>m(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?m(p):(pt("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new ir)}}),0),d()}getToken(){const t=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then((a=>this.i!==t?(pt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(Yt(typeof a.accessToken=="string",31837,{l:a}),new G2(a.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Yt(t===null||typeof t=="string",2055,{h:t}),new sn(t)}}class _I{constructor(t,i,a){this.P=t,this.T=i,this.I=a,this.type="FirstParty",this.user=sn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class EI{constructor(t,i,a){this.P=t,this.T=i,this.I=a}getToken(){return Promise.resolve(new _I(this.P,this.T,this.I))}start(t,i){t.enqueueRetryable((()=>i(sn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class fv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wI{constructor(t,i){this.V=i,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,tI(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,i){Yt(this.o===void 0,3512);const a=u=>{u.error!=null&&pt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const d=u.token!==this.m;return this.m=u.token,pt("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?i(u.token):Promise.resolve()};this.o=u=>{t.enqueueRetryable((()=>a(u)))};const o=u=>{pt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):pt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new fv(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((i=>i?(Yt(typeof i.token=="string",44558,{tokenResult:i}),this.m=i.token,new fv(i.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),i=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(i);else for(let a=0;a<n;a++)i[a]=Math.floor(256*Math.random());return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=62*Math.floor(4.129032258064516);let a="";for(;a.length<20;){const o=bI(40);for(let u=0;u<o.length;++u)a.length<20&&o[u]<i&&(a+=t.charAt(o[u]%62))}return a}}function Pt(n,t){return n<t?-1:n>t?1:0}function pm(n,t){const i=Math.min(n.length,t.length);for(let a=0;a<i;a++){const o=n.charAt(a),u=t.charAt(a);if(o!==u)return Np(o)===Np(u)?Pt(o,u):Np(o)?1:-1}return Pt(n.length,t.length)}const TI=55296,SI=57343;function Np(n){const t=n.charCodeAt(0);return t>=TI&&t<=SI}function ho(n,t,i){return n.length===t.length&&n.every(((a,o)=>i(a,t[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv="__name__";class wi{constructor(t,i,a){i===void 0?i=0:i>t.length&&bt(637,{offset:i,range:t.length}),a===void 0?a=t.length-i:a>t.length-i&&bt(1746,{length:a,range:t.length-i}),this.segments=t,this.offset=i,this.len=a}get length(){return this.len}isEqual(t){return wi.comparator(this,t)===0}child(t){const i=this.segments.slice(this.offset,this.limit());return t instanceof wi?t.forEach((a=>{i.push(a)})):i.push(t),this.construct(i)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}forEach(t){for(let i=this.offset,a=this.limit();i<a;i++)t(this.segments[i])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,i){const a=Math.min(t.length,i.length);for(let o=0;o<a;o++){const u=wi.compareSegments(t.get(o),i.get(o));if(u!==0)return u}return Pt(t.length,i.length)}static compareSegments(t,i){const a=wi.isNumericId(t),o=wi.isNumericId(i);return a&&!o?-1:!a&&o?1:a&&o?wi.extractNumericId(t).compare(wi.extractNumericId(i)):pm(t,i)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Jr.fromString(t.substring(4,t.length-2))}}class ae extends wi{construct(t,i,a){return new ae(t,i,a)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const i=[];for(const a of t){if(a.indexOf("//")>=0)throw new ft(it.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);i.push(...a.split("/").filter((o=>o.length>0)))}return new ae(i)}static emptyPath(){return new ae([])}}const AI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends wi{construct(t,i,a){return new Ze(t,i,a)}static isValidIdentifier(t){return AI.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===pv}static keyField(){return new Ze([pv])}static fromServerFormat(t){const i=[];let a="",o=0;const u=()=>{if(a.length===0)throw new ft(it.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);i.push(a),a=""};let d=!1;for(;o<t.length;){const m=t[o];if(m==="\\"){if(o+1===t.length)throw new ft(it.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const p=t[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ft(it.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);a+=p,o+=2}else m==="`"?(d=!d,o++):m!=="."||d?(a+=m,o++):(u(),o++)}if(u(),d)throw new ft(it.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ze(i)}static emptyPath(){return new Ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Y2(n,t,i){if(!i)throw new ft(it.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function RI(n,t,i,a){if(t===!0&&a===!0)throw new ft(it.INVALID_ARGUMENT,`${n} and ${i} cannot be used together.`)}function mv(n){if(!vt.isDocumentKey(n))throw new ft(it.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function gv(n){if(vt.isDocumentKey(n))throw new ft(it.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Q2(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Yh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(a){return a.constructor?a.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":bt(12329,{type:typeof n})}function ur(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new ft(it.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=Yh(n);throw new ft(it.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${i}`)}}return n}/**
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
 */function Ne(n,t){const i={typeString:n};return t&&(i.value=t),i}function mu(n,t){if(!Q2(n))throw new ft(it.INVALID_ARGUMENT,"JSON must be an object");let i;for(const a in t)if(t[a]){const o=t[a].typeString,u="value"in t[a]?{value:t[a].value}:void 0;if(!(a in n)){i=`JSON missing required field: '${a}'`;break}const d=n[a];if(o&&typeof d!==o){i=`JSON field '${a}' must be a ${o}.`;break}if(u!==void 0&&d!==u.value){i=`Expected '${a}' field to equal '${u.value}'`;break}}if(i)throw new ft(it.INVALID_ARGUMENT,i);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv=-62135596800,xv=1e6;class ue{static now(){return ue.fromMillis(Date.now())}static fromDate(t){return ue.fromMillis(t.getTime())}static fromMillis(t){const i=Math.floor(t/1e3),a=Math.floor((t-1e3*i)*xv);return new ue(i,a)}constructor(t,i){if(this.seconds=t,this.nanoseconds=i,i<0)throw new ft(it.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(i>=1e9)throw new ft(it.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(t<yv)throw new ft(it.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ft(it.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/xv}_compareTo(t){return this.seconds===t.seconds?Pt(this.nanoseconds,t.nanoseconds):Pt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ue._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(mu(t,ue._jsonSchema))return new ue(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-yv;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ue._jsonSchemaVersion="firestore/timestamp/1.0",ue._jsonSchema={type:Ne("string",ue._jsonSchemaVersion),seconds:Ne("number"),nanoseconds:Ne("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const au=-1;function II(n,t){const i=n.toTimestamp().seconds,a=n.toTimestamp().nanoseconds+1,o=At.fromTimestamp(a===1e9?new ue(i+1,0):new ue(i,a));return new ea(o,vt.empty(),t)}function jI(n){return new ea(n.readTime,n.key,au)}class ea{constructor(t,i,a){this.readTime=t,this.documentKey=i,this.largestBatchId=a}static min(){return new ea(At.min(),vt.empty(),au)}static max(){return new ea(At.max(),vt.empty(),au)}}function CI(n,t){let i=n.readTime.compareTo(t.readTime);return i!==0?i:(i=vt.comparator(n.documentKey,t.documentKey),i!==0?i:Pt(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class NI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(n){if(n.code!==it.FAILED_PRECONDITION||n.message!==DI)throw n;pt("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((i=>{this.isDone=!0,this.result=i,this.nextCallback&&this.nextCallback(i)}),(i=>{this.isDone=!0,this.error=i,this.catchCallback&&this.catchCallback(i)}))}catch(t){return this.next(void 0,t)}next(t,i){return this.callbackAttached&&bt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(i,this.error):this.wrapSuccess(t,this.result):new st(((a,o)=>{this.nextCallback=u=>{this.wrapSuccess(t,u).next(a,o)},this.catchCallback=u=>{this.wrapFailure(i,u).next(a,o)}}))}toPromise(){return new Promise(((t,i)=>{this.next(t,i)}))}wrapUserFunction(t){try{const i=t();return i instanceof st?i:st.resolve(i)}catch(i){return st.reject(i)}}wrapSuccess(t,i){return t?this.wrapUserFunction((()=>t(i))):st.resolve(i)}wrapFailure(t,i){return t?this.wrapUserFunction((()=>t(i))):st.reject(i)}static resolve(t){return new st(((i,a)=>{i(t)}))}static reject(t){return new st(((i,a)=>{a(t)}))}static waitFor(t){return new st(((i,a)=>{let o=0,u=0,d=!1;t.forEach((m=>{++o,m.next((()=>{++u,d&&u===o&&i()}),(p=>a(p)))})),d=!0,u===o&&i()}))}static or(t){let i=st.resolve(!1);for(const a of t)i=i.next((o=>o?st.resolve(o):a()));return i}static forEach(t,i){const a=[];return t.forEach(((o,u)=>{a.push(i.call(this,o,u))})),this.waitFor(a)}static mapArray(t,i){return new st(((a,o)=>{const u=t.length,d=new Array(u);let m=0;for(let p=0;p<u;p++){const g=p;i(t[g]).next((v=>{d[g]=v,++m,m===u&&a(d)}),(v=>o(v)))}}))}static doWhile(t,i){return new st(((a,o)=>{const u=()=>{t()===!0?i().next((()=>{u()}),o):a()};u()}))}}function MI(n){const t=n.match(/Android ([\d.]+)/i),i=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(i)}function Ao(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Qh{constructor(t,i){this.previousValue=t,i&&(i.sequenceNumberHandler=a=>this.ae(a),this.ue=a=>i.writeSequenceNumber(a))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Qh.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=-1;function Xh(n){return n==null}function Rh(n){return n===0&&1/n==-1/0}function OI(n){return typeof n=="number"&&Number.isInteger(n)&&!Rh(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X2="";function VI(n){let t="";for(let i=0;i<n.length;i++)t.length>0&&(t=vv(t)),t=kI(n.get(i),t);return vv(t)}function kI(n,t){let i=t;const a=n.length;for(let o=0;o<a;o++){const u=n.charAt(o);switch(u){case"\0":i+="";break;case X2:i+="";break;default:i+=u}}return i}function vv(n){return n+X2+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _v(n){let t=0;for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&t++;return t}function oa(n,t){for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&t(i,n[i])}function W2(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t,i){this.comparator=t,this.root=i||We.EMPTY}insert(t,i){return new me(this.comparator,this.root.insert(t,i,this.comparator).copy(null,null,We.BLACK,null,null))}remove(t){return new me(this.comparator,this.root.remove(t,this.comparator).copy(null,null,We.BLACK,null,null))}get(t){let i=this.root;for(;!i.isEmpty();){const a=this.comparator(t,i.key);if(a===0)return i.value;a<0?i=i.left:a>0&&(i=i.right)}return null}indexOf(t){let i=0,a=this.root;for(;!a.isEmpty();){const o=this.comparator(t,a.key);if(o===0)return i+a.left.size;o<0?a=a.left:(i+=a.left.size+1,a=a.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((i,a)=>(t(i,a),!1)))}toString(){const t=[];return this.inorderTraversal(((i,a)=>(t.push(`${i}:${a}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Xc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Xc(this.root,t,this.comparator,!1)}getReverseIterator(){return new Xc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Xc(this.root,t,this.comparator,!0)}}class Xc{constructor(t,i,a,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!t.isEmpty();)if(u=i?a(t.key,i):1,i&&o&&(u*=-1),u<0)t=this.isReverse?t.left:t.right;else{if(u===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const i={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return i}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class We{constructor(t,i,a,o,u){this.key=t,this.value=i,this.color=a??We.RED,this.left=o??We.EMPTY,this.right=u??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,i,a,o,u){return new We(t??this.key,i??this.value,a??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,i,a){let o=this;const u=a(t,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(t,i,a),null):u===0?o.copy(null,i,null,null,null):o.copy(null,null,null,null,o.right.insert(t,i,a)),o.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,i){let a,o=this;if(i(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,i),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),i(t,o.key)===0){if(o.right.isEmpty())return We.EMPTY;a=o.right.min(),o=o.copy(a.key,a.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,i))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,i)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw bt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw bt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw bt(27949);return t+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw bt(57766)}get value(){throw bt(16141)}get color(){throw bt(16727)}get left(){throw bt(29726)}get right(){throw bt(36894)}copy(t,i,a,o,u){return this}insert(t,i,a){return new We(t,i)}remove(t,i){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(t){this.comparator=t,this.data=new me(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((i,a)=>(t(i),!1)))}forEachInRange(t,i){const a=this.data.getIteratorFrom(t[0]);for(;a.hasNext();){const o=a.getNext();if(this.comparator(o.key,t[1])>=0)return;i(o.key)}}forEachWhile(t,i){let a;for(a=i!==void 0?this.data.getIteratorFrom(i):this.data.getIterator();a.hasNext();)if(!t(a.getNext().key))return}firstAfterOrEqual(t){const i=this.data.getIteratorFrom(t);return i.hasNext()?i.getNext().key:null}getIterator(){return new Ev(this.data.getIterator())}getIteratorFrom(t){return new Ev(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let i=this;return i.size<t.size&&(i=t,t=this),t.forEach((a=>{i=i.add(a)})),i}isEqual(t){if(!(t instanceof Ue)||this.size!==t.size)return!1;const i=this.data.getIterator(),a=t.data.getIterator();for(;i.hasNext();){const o=i.getNext().key,u=a.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((i=>{t.push(i)})),t}toString(){const t=[];return this.forEach((i=>t.push(i))),"SortedSet("+t.toString()+")"}copy(t){const i=new Ue(this.comparator);return i.data=t,i}}class Ev{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(t){this.fields=t,t.sort(Ze.comparator)}static empty(){return new Cn([])}unionWith(t){let i=new Ue(Ze.comparator);for(const a of this.fields)i=i.add(a);for(const a of t)i=i.add(a);return new Cn(i.toArray())}covers(t){for(const i of this.fields)if(i.isPrefixOf(t))return!0;return!1}isEqual(t){return ho(this.fields,t.fields,((i,a)=>i.isEqual(a)))}}/**
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
 */class Z2 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(t){this.binaryString=t}static fromBase64String(t){const i=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new Z2("Invalid base64 string: "+u):u}})(t);return new Je(i)}static fromUint8Array(t){const i=(function(o){let u="";for(let d=0;d<o.length;++d)u+=String.fromCharCode(o[d]);return u})(t);return new Je(i)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(i){return btoa(i)})(this.binaryString)}toUint8Array(){return(function(i){const a=new Uint8Array(i.length);for(let o=0;o<i.length;o++)a[o]=i.charCodeAt(o);return a})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Pt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Je.EMPTY_BYTE_STRING=new Je("");const PI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function na(n){if(Yt(!!n,39018),typeof n=="string"){let t=0;const i=PI.exec(n);if(Yt(!!i,46558,{timestamp:n}),i[1]){let o=i[1];o=(o+"000000000").substr(0,9),t=Number(o)}const a=new Date(n);return{seconds:Math.floor(a.getTime()/1e3),nanos:t}}return{seconds:Se(n.seconds),nanos:Se(n.nanos)}}function Se(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ia(n){return typeof n=="string"?Je.fromBase64String(n):Je.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J2="server_timestamp",tE="__type__",eE="__previous_value__",nE="__local_write_time__";function hg(n){return(n?.mapValue?.fields||{})[tE]?.stringValue===J2}function Wh(n){const t=n.mapValue.fields[eE];return hg(t)?Wh(t):t}function su(n){const t=na(n.mapValue.fields[nE].timestampValue);return new ue(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(t,i,a,o,u,d,m,p,g,v){this.databaseId=t,this.appId=i,this.persistenceKey=a,this.host=o,this.ssl=u,this.forceLongPolling=d,this.autoDetectLongPolling=m,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=v}}const Ih="(default)";class ou{constructor(t,i){this.projectId=t,this.database=i||Ih}static empty(){return new ou("","")}get isDefaultDatabase(){return this.database===Ih}isEqual(t){return t instanceof ou&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE="__type__",LI="__max__",Wc={mapValue:{}},rE="__vector__",jh="value";function ra(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?hg(n)?4:$I(n)?9007199254740991:zI(n)?10:11:bt(28295,{value:n})}function ji(n,t){if(n===t)return!0;const i=ra(n);if(i!==ra(t))return!1;switch(i){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return su(n).isEqual(su(t));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const d=na(o.timestampValue),m=na(u.timestampValue);return d.seconds===m.seconds&&d.nanos===m.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(o,u){return ia(o.bytesValue).isEqual(ia(u.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(o,u){return Se(o.geoPointValue.latitude)===Se(u.geoPointValue.latitude)&&Se(o.geoPointValue.longitude)===Se(u.geoPointValue.longitude)})(n,t);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return Se(o.integerValue)===Se(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const d=Se(o.doubleValue),m=Se(u.doubleValue);return d===m?Rh(d)===Rh(m):isNaN(d)&&isNaN(m)}return!1})(n,t);case 9:return ho(n.arrayValue.values||[],t.arrayValue.values||[],ji);case 10:case 11:return(function(o,u){const d=o.mapValue.fields||{},m=u.mapValue.fields||{};if(_v(d)!==_v(m))return!1;for(const p in d)if(d.hasOwnProperty(p)&&(m[p]===void 0||!ji(d[p],m[p])))return!1;return!0})(n,t);default:return bt(52216,{left:n})}}function lu(n,t){return(n.values||[]).find((i=>ji(i,t)))!==void 0}function fo(n,t){if(n===t)return 0;const i=ra(n),a=ra(t);if(i!==a)return Pt(i,a);switch(i){case 0:case 9007199254740991:return 0;case 1:return Pt(n.booleanValue,t.booleanValue);case 2:return(function(u,d){const m=Se(u.integerValue||u.doubleValue),p=Se(d.integerValue||d.doubleValue);return m<p?-1:m>p?1:m===p?0:isNaN(m)?isNaN(p)?0:-1:1})(n,t);case 3:return wv(n.timestampValue,t.timestampValue);case 4:return wv(su(n),su(t));case 5:return pm(n.stringValue,t.stringValue);case 6:return(function(u,d){const m=ia(u),p=ia(d);return m.compareTo(p)})(n.bytesValue,t.bytesValue);case 7:return(function(u,d){const m=u.split("/"),p=d.split("/");for(let g=0;g<m.length&&g<p.length;g++){const v=Pt(m[g],p[g]);if(v!==0)return v}return Pt(m.length,p.length)})(n.referenceValue,t.referenceValue);case 8:return(function(u,d){const m=Pt(Se(u.latitude),Se(d.latitude));return m!==0?m:Pt(Se(u.longitude),Se(d.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return bv(n.arrayValue,t.arrayValue);case 10:return(function(u,d){const m=u.fields||{},p=d.fields||{},g=m[jh]?.arrayValue,v=p[jh]?.arrayValue,w=Pt(g?.values?.length||0,v?.values?.length||0);return w!==0?w:bv(g,v)})(n.mapValue,t.mapValue);case 11:return(function(u,d){if(u===Wc.mapValue&&d===Wc.mapValue)return 0;if(u===Wc.mapValue)return 1;if(d===Wc.mapValue)return-1;const m=u.fields||{},p=Object.keys(m),g=d.fields||{},v=Object.keys(g);p.sort(),v.sort();for(let w=0;w<p.length&&w<v.length;++w){const T=pm(p[w],v[w]);if(T!==0)return T;const R=fo(m[p[w]],g[v[w]]);if(R!==0)return R}return Pt(p.length,v.length)})(n.mapValue,t.mapValue);default:throw bt(23264,{he:i})}}function wv(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return Pt(n,t);const i=na(n),a=na(t),o=Pt(i.seconds,a.seconds);return o!==0?o:Pt(i.nanos,a.nanos)}function bv(n,t){const i=n.values||[],a=t.values||[];for(let o=0;o<i.length&&o<a.length;++o){const u=fo(i[o],a[o]);if(u)return u}return Pt(i.length,a.length)}function po(n){return mm(n)}function mm(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(i){const a=na(i);return`time(${a.seconds},${a.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(i){return ia(i).toBase64()})(n.bytesValue):"referenceValue"in n?(function(i){return vt.fromName(i).toString()})(n.referenceValue):"geoPointValue"in n?(function(i){return`geo(${i.latitude},${i.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(i){let a="[",o=!0;for(const u of i.values||[])o?o=!1:a+=",",a+=mm(u);return a+"]"})(n.arrayValue):"mapValue"in n?(function(i){const a=Object.keys(i.fields||{}).sort();let o="{",u=!0;for(const d of a)u?u=!1:o+=",",o+=`${d}:${mm(i.fields[d])}`;return o+"}"})(n.mapValue):bt(61005,{value:n})}function fh(n){switch(ra(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Wh(n);return t?16+fh(t):16;case 5:return 2*n.stringValue.length;case 6:return ia(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(a){return(a.values||[]).reduce(((o,u)=>o+fh(u)),0)})(n.arrayValue);case 10:case 11:return(function(a){let o=0;return oa(a.fields,((u,d)=>{o+=u.length+fh(d)})),o})(n.mapValue);default:throw bt(13486,{value:n})}}function Tv(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function gm(n){return!!n&&"integerValue"in n}function dg(n){return!!n&&"arrayValue"in n}function Sv(n){return!!n&&"nullValue"in n}function Av(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ph(n){return!!n&&"mapValue"in n}function zI(n){return(n?.mapValue?.fields||{})[iE]?.stringValue===rE}function Hl(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return oa(n.mapValue.fields,((i,a)=>t.mapValue.fields[i]=Hl(a))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let i=0;i<(n.arrayValue.values||[]).length;++i)t.arrayValue.values[i]=Hl(n.arrayValue.values[i]);return t}return{...n}}function $I(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===LI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(t){this.value=t}static empty(){return new vn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let i=this.value;for(let a=0;a<t.length-1;++a)if(i=(i.mapValue.fields||{})[t.get(a)],!ph(i))return null;return i=(i.mapValue.fields||{})[t.lastSegment()],i||null}}set(t,i){this.getFieldsMap(t.popLast())[t.lastSegment()]=Hl(i)}setAll(t){let i=Ze.emptyPath(),a={},o=[];t.forEach(((d,m)=>{if(!i.isImmediateParentOf(m)){const p=this.getFieldsMap(i);this.applyChanges(p,a,o),a={},o=[],i=m.popLast()}d?a[m.lastSegment()]=Hl(d):o.push(m.lastSegment())}));const u=this.getFieldsMap(i);this.applyChanges(u,a,o)}delete(t){const i=this.field(t.popLast());ph(i)&&i.mapValue.fields&&delete i.mapValue.fields[t.lastSegment()]}isEqual(t){return ji(this.value,t.value)}getFieldsMap(t){let i=this.value;i.mapValue.fields||(i.mapValue={fields:{}});for(let a=0;a<t.length;++a){let o=i.mapValue.fields[t.get(a)];ph(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},i.mapValue.fields[t.get(a)]=o),i=o}return i.mapValue.fields}applyChanges(t,i,a){oa(i,((o,u)=>t[o]=u));for(const o of a)delete t[o]}clone(){return new vn(Hl(this.value))}}function aE(n){const t=[];return oa(n.fields,((i,a)=>{const o=new Ze([i]);if(ph(a)){const u=aE(a.mapValue).fields;if(u.length===0)t.push(o);else for(const d of u)t.push(o.child(d))}else t.push(o)})),new Cn(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(t,i,a,o,u,d,m){this.key=t,this.documentType=i,this.version=a,this.readTime=o,this.createTime=u,this.data=d,this.documentState=m}static newInvalidDocument(t){return new on(t,0,At.min(),At.min(),At.min(),vn.empty(),0)}static newFoundDocument(t,i,a,o){return new on(t,1,i,At.min(),a,o,0)}static newNoDocument(t,i){return new on(t,2,i,At.min(),At.min(),vn.empty(),0)}static newUnknownDocument(t,i){return new on(t,3,i,At.min(),At.min(),vn.empty(),2)}convertToFoundDocument(t,i){return!this.createTime.isEqual(At.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=i,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=vn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=vn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=At.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof on&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new on(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ch{constructor(t,i){this.position=t,this.inclusive=i}}function Rv(n,t,i){let a=0;for(let o=0;o<n.position.length;o++){const u=t[o],d=n.position[o];if(u.field.isKeyField()?a=vt.comparator(vt.fromName(d.referenceValue),i.key):a=fo(d,i.data.field(u.field)),u.dir==="desc"&&(a*=-1),a!==0)break}return a}function Iv(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let i=0;i<n.position.length;i++)if(!ji(n.position[i],t.position[i]))return!1;return!0}/**
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
 */class uu{constructor(t,i="asc"){this.field=t,this.dir=i}}function BI(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class sE{}class De extends sE{constructor(t,i,a){super(),this.field=t,this.op=i,this.value=a}static create(t,i,a){return t.isKeyField()?i==="in"||i==="not-in"?this.createKeyFieldInFilter(t,i,a):new qI(t,i,a):i==="array-contains"?new GI(t,a):i==="in"?new YI(t,a):i==="not-in"?new QI(t,a):i==="array-contains-any"?new XI(t,a):new De(t,i,a)}static createKeyFieldInFilter(t,i,a){return i==="in"?new KI(t,a):new HI(t,a)}matches(t){const i=t.data.field(this.field);return this.op==="!="?i!==null&&i.nullValue===void 0&&this.matchesComparison(fo(i,this.value)):i!==null&&ra(this.value)===ra(i)&&this.matchesComparison(fo(i,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return bt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ai extends sE{constructor(t,i){super(),this.filters=t,this.op=i,this.Pe=null}static create(t,i){return new ai(t,i)}matches(t){return oE(this)?this.filters.find((i=>!i.matches(t)))===void 0:this.filters.find((i=>i.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,i)=>t.concat(i.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function oE(n){return n.op==="and"}function lE(n){return FI(n)&&oE(n)}function FI(n){for(const t of n.filters)if(t instanceof ai)return!1;return!0}function ym(n){if(n instanceof De)return n.field.canonicalString()+n.op.toString()+po(n.value);if(lE(n))return n.filters.map((t=>ym(t))).join(",");{const t=n.filters.map((i=>ym(i))).join(",");return`${n.op}(${t})`}}function uE(n,t){return n instanceof De?(function(a,o){return o instanceof De&&a.op===o.op&&a.field.isEqual(o.field)&&ji(a.value,o.value)})(n,t):n instanceof ai?(function(a,o){return o instanceof ai&&a.op===o.op&&a.filters.length===o.filters.length?a.filters.reduce(((u,d,m)=>u&&uE(d,o.filters[m])),!0):!1})(n,t):void bt(19439)}function cE(n){return n instanceof De?(function(i){return`${i.field.canonicalString()} ${i.op} ${po(i.value)}`})(n):n instanceof ai?(function(i){return i.op.toString()+" {"+i.getFilters().map(cE).join(" ,")+"}"})(n):"Filter"}class qI extends De{constructor(t,i,a){super(t,i,a),this.key=vt.fromName(a.referenceValue)}matches(t){const i=vt.comparator(t.key,this.key);return this.matchesComparison(i)}}class KI extends De{constructor(t,i){super(t,"in",i),this.keys=hE("in",i)}matches(t){return this.keys.some((i=>i.isEqual(t.key)))}}class HI extends De{constructor(t,i){super(t,"not-in",i),this.keys=hE("not-in",i)}matches(t){return!this.keys.some((i=>i.isEqual(t.key)))}}function hE(n,t){return(t.arrayValue?.values||[]).map((i=>vt.fromName(i.referenceValue)))}class GI extends De{constructor(t,i){super(t,"array-contains",i)}matches(t){const i=t.data.field(this.field);return dg(i)&&lu(i.arrayValue,this.value)}}class YI extends De{constructor(t,i){super(t,"in",i)}matches(t){const i=t.data.field(this.field);return i!==null&&lu(this.value.arrayValue,i)}}class QI extends De{constructor(t,i){super(t,"not-in",i)}matches(t){if(lu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const i=t.data.field(this.field);return i!==null&&i.nullValue===void 0&&!lu(this.value.arrayValue,i)}}class XI extends De{constructor(t,i){super(t,"array-contains-any",i)}matches(t){const i=t.data.field(this.field);return!(!dg(i)||!i.arrayValue.values)&&i.arrayValue.values.some((a=>lu(this.value.arrayValue,a)))}}/**
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
 */class WI{constructor(t,i=null,a=[],o=[],u=null,d=null,m=null){this.path=t,this.collectionGroup=i,this.orderBy=a,this.filters=o,this.limit=u,this.startAt=d,this.endAt=m,this.Te=null}}function jv(n,t=null,i=[],a=[],o=null,u=null,d=null){return new WI(n,t,i,a,o,u,d)}function fg(n){const t=It(n);if(t.Te===null){let i=t.path.canonicalString();t.collectionGroup!==null&&(i+="|cg:"+t.collectionGroup),i+="|f:",i+=t.filters.map((a=>ym(a))).join(","),i+="|ob:",i+=t.orderBy.map((a=>(function(u){return u.field.canonicalString()+u.dir})(a))).join(","),Xh(t.limit)||(i+="|l:",i+=t.limit),t.startAt&&(i+="|lb:",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((a=>po(a))).join(",")),t.endAt&&(i+="|ub:",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((a=>po(a))).join(",")),t.Te=i}return t.Te}function pg(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<n.orderBy.length;i++)if(!BI(n.orderBy[i],t.orderBy[i]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let i=0;i<n.filters.length;i++)if(!uE(n.filters[i],t.filters[i]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Iv(n.startAt,t.startAt)&&Iv(n.endAt,t.endAt)}function xm(n){return vt.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(t,i=null,a=[],o=[],u=null,d="F",m=null,p=null){this.path=t,this.collectionGroup=i,this.explicitOrderBy=a,this.filters=o,this.limit=u,this.limitType=d,this.startAt=m,this.endAt=p,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function ZI(n,t,i,a,o,u,d,m){return new Ro(n,t,i,a,o,u,d,m)}function mg(n){return new Ro(n)}function Cv(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function dE(n){return n.collectionGroup!==null}function Gl(n){const t=It(n);if(t.Ie===null){t.Ie=[];const i=new Set;for(const u of t.explicitOrderBy)t.Ie.push(u),i.add(u.field.canonicalString());const a=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(d){let m=new Ue(Ze.comparator);return d.filters.forEach((p=>{p.getFlattenedFilters().forEach((g=>{g.isInequality()&&(m=m.add(g.field))}))})),m})(t).forEach((u=>{i.has(u.canonicalString())||u.isKeyField()||t.Ie.push(new uu(u,a))})),i.has(Ze.keyField().canonicalString())||t.Ie.push(new uu(Ze.keyField(),a))}return t.Ie}function Ti(n){const t=It(n);return t.Ee||(t.Ee=JI(t,Gl(n))),t.Ee}function JI(n,t){if(n.limitType==="F")return jv(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new uu(o.field,u)}));const i=n.endAt?new Ch(n.endAt.position,n.endAt.inclusive):null,a=n.startAt?new Ch(n.startAt.position,n.startAt.inclusive):null;return jv(n.path,n.collectionGroup,t,n.filters,n.limit,i,a)}}function vm(n,t){const i=n.filters.concat([t]);return new Ro(n.path,n.collectionGroup,n.explicitOrderBy.slice(),i,n.limit,n.limitType,n.startAt,n.endAt)}function _m(n,t,i){return new Ro(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,i,n.startAt,n.endAt)}function Zh(n,t){return pg(Ti(n),Ti(t))&&n.limitType===t.limitType}function fE(n){return`${fg(Ti(n))}|lt:${n.limitType}`}function Zs(n){return`Query(target=${(function(i){let a=i.path.canonicalString();return i.collectionGroup!==null&&(a+=" collectionGroup="+i.collectionGroup),i.filters.length>0&&(a+=`, filters: [${i.filters.map((o=>cE(o))).join(", ")}]`),Xh(i.limit)||(a+=", limit: "+i.limit),i.orderBy.length>0&&(a+=`, orderBy: [${i.orderBy.map((o=>(function(d){return`${d.field.canonicalString()} (${d.dir})`})(o))).join(", ")}]`),i.startAt&&(a+=", startAt: ",a+=i.startAt.inclusive?"b:":"a:",a+=i.startAt.position.map((o=>po(o))).join(",")),i.endAt&&(a+=", endAt: ",a+=i.endAt.inclusive?"a:":"b:",a+=i.endAt.position.map((o=>po(o))).join(",")),`Target(${a})`})(Ti(n))}; limitType=${n.limitType})`}function Jh(n,t){return t.isFoundDocument()&&(function(a,o){const u=o.key.path;return a.collectionGroup!==null?o.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(u):vt.isDocumentKey(a.path)?a.path.isEqual(u):a.path.isImmediateParentOf(u)})(n,t)&&(function(a,o){for(const u of Gl(a))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(n,t)&&(function(a,o){for(const u of a.filters)if(!u.matches(o))return!1;return!0})(n,t)&&(function(a,o){return!(a.startAt&&!(function(d,m,p){const g=Rv(d,m,p);return d.inclusive?g<=0:g<0})(a.startAt,Gl(a),o)||a.endAt&&!(function(d,m,p){const g=Rv(d,m,p);return d.inclusive?g>=0:g>0})(a.endAt,Gl(a),o))})(n,t)}function t3(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function pE(n){return(t,i)=>{let a=!1;for(const o of Gl(n)){const u=e3(o,t,i);if(u!==0)return u;a=a||o.field.isKeyField()}return 0}}function e3(n,t,i){const a=n.field.isKeyField()?vt.comparator(t.key,i.key):(function(u,d,m){const p=d.data.field(u),g=m.data.field(u);return p!==null&&g!==null?fo(p,g):bt(42886)})(n.field,t,i);switch(n.dir){case"asc":return a;case"desc":return-1*a;default:return bt(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(t,i){this.mapKeyFn=t,this.equalsFn=i,this.inner={},this.innerSize=0}get(t){const i=this.mapKeyFn(t),a=this.inner[i];if(a!==void 0){for(const[o,u]of a)if(this.equalsFn(o,t))return u}}has(t){return this.get(t)!==void 0}set(t,i){const a=this.mapKeyFn(t),o=this.inner[a];if(o===void 0)return this.inner[a]=[[t,i]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],t))return void(o[u]=[t,i]);o.push([t,i]),this.innerSize++}delete(t){const i=this.mapKeyFn(t),a=this.inner[i];if(a===void 0)return!1;for(let o=0;o<a.length;o++)if(this.equalsFn(a[o][0],t))return a.length===1?delete this.inner[i]:a.splice(o,1),this.innerSize--,!0;return!1}forEach(t){oa(this.inner,((i,a)=>{for(const[o,u]of a)t(o,u)}))}isEmpty(){return W2(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n3=new me(vt.comparator);function cr(){return n3}const mE=new me(vt.comparator);function zl(...n){let t=mE;for(const i of n)t=t.insert(i.key,i);return t}function gE(n){let t=mE;return n.forEach(((i,a)=>t=t.insert(i,a.overlayedDocument))),t}function Ya(){return Yl()}function yE(){return Yl()}function Yl(){return new ns((n=>n.toString()),((n,t)=>n.isEqual(t)))}const i3=new me(vt.comparator),r3=new Ue(vt.comparator);function Ut(...n){let t=r3;for(const i of n)t=t.add(i);return t}const a3=new Ue(Pt);function s3(){return a3}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rh(t)?"-0":t}}function xE(n){return{integerValue:""+n}}function vE(n,t){return OI(t)?xE(t):gg(n,t)}/**
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
 */class td{constructor(){this._=void 0}}function o3(n,t,i){return n instanceof Dh?(function(o,u){const d={fields:{[tE]:{stringValue:J2},[nE]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&hg(u)&&(u=Wh(u)),u&&(d.fields[eE]=u),{mapValue:d}})(i,t):n instanceof cu?EE(n,t):n instanceof hu?wE(n,t):(function(o,u){const d=_E(o,u),m=Dv(d)+Dv(o.Ae);return gm(d)&&gm(o.Ae)?xE(m):gg(o.serializer,m)})(n,t)}function l3(n,t,i){return n instanceof cu?EE(n,t):n instanceof hu?wE(n,t):i}function _E(n,t){return n instanceof du?(function(a){return gm(a)||(function(u){return!!u&&"doubleValue"in u})(a)})(t)?t:{integerValue:0}:null}class Dh extends td{}class cu extends td{constructor(t){super(),this.elements=t}}function EE(n,t){const i=bE(t);for(const a of n.elements)i.some((o=>ji(o,a)))||i.push(a);return{arrayValue:{values:i}}}class hu extends td{constructor(t){super(),this.elements=t}}function wE(n,t){let i=bE(t);for(const a of n.elements)i=i.filter((o=>!ji(o,a)));return{arrayValue:{values:i}}}class du extends td{constructor(t,i){super(),this.serializer=t,this.Ae=i}}function Dv(n){return Se(n.integerValue||n.doubleValue)}function bE(n){return dg(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u3{constructor(t,i){this.field=t,this.transform=i}}function c3(n,t){return n.field.isEqual(t.field)&&(function(a,o){return a instanceof cu&&o instanceof cu||a instanceof hu&&o instanceof hu?ho(a.elements,o.elements,ji):a instanceof du&&o instanceof du?ji(a.Ae,o.Ae):a instanceof Dh&&o instanceof Dh})(n.transform,t.transform)}class h3{constructor(t,i){this.version=t,this.transformResults=i}}class Si{constructor(t,i){this.updateTime=t,this.exists=i}static none(){return new Si}static exists(t){return new Si(void 0,t)}static updateTime(t){return new Si(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function mh(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class ed{}function TE(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new AE(n.key,Si.none()):new gu(n.key,n.data,Si.none());{const i=n.data,a=vn.empty();let o=new Ue(Ze.comparator);for(let u of t.fields)if(!o.has(u)){let d=i.field(u);d===null&&u.length>1&&(u=u.popLast(),d=i.field(u)),d===null?a.delete(u):a.set(u,d),o=o.add(u)}return new la(n.key,a,new Cn(o.toArray()),Si.none())}}function d3(n,t,i){n instanceof gu?(function(o,u,d){const m=o.value.clone(),p=Mv(o.fieldTransforms,u,d.transformResults);m.setAll(p),u.convertToFoundDocument(d.version,m).setHasCommittedMutations()})(n,t,i):n instanceof la?(function(o,u,d){if(!mh(o.precondition,u))return void u.convertToUnknownDocument(d.version);const m=Mv(o.fieldTransforms,u,d.transformResults),p=u.data;p.setAll(SE(o)),p.setAll(m),u.convertToFoundDocument(d.version,p).setHasCommittedMutations()})(n,t,i):(function(o,u,d){u.convertToNoDocument(d.version).setHasCommittedMutations()})(0,t,i)}function Ql(n,t,i,a){return n instanceof gu?(function(u,d,m,p){if(!mh(u.precondition,d))return m;const g=u.value.clone(),v=Ov(u.fieldTransforms,p,d);return g.setAll(v),d.convertToFoundDocument(d.version,g).setHasLocalMutations(),null})(n,t,i,a):n instanceof la?(function(u,d,m,p){if(!mh(u.precondition,d))return m;const g=Ov(u.fieldTransforms,p,d),v=d.data;return v.setAll(SE(u)),v.setAll(g),d.convertToFoundDocument(d.version,v).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((w=>w.field)))})(n,t,i,a):(function(u,d,m){return mh(u.precondition,d)?(d.convertToNoDocument(d.version).setHasLocalMutations(),null):m})(n,t,i)}function f3(n,t){let i=null;for(const a of n.fieldTransforms){const o=t.data.field(a.field),u=_E(a.transform,o||null);u!=null&&(i===null&&(i=vn.empty()),i.set(a.field,u))}return i||null}function Nv(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(a,o){return a===void 0&&o===void 0||!(!a||!o)&&ho(a,o,((u,d)=>c3(u,d)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class gu extends ed{constructor(t,i,a,o=[]){super(),this.key=t,this.value=i,this.precondition=a,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class la extends ed{constructor(t,i,a,o,u=[]){super(),this.key=t,this.data=i,this.fieldMask=a,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function SE(n){const t=new Map;return n.fieldMask.fields.forEach((i=>{if(!i.isEmpty()){const a=n.data.field(i);t.set(i,a)}})),t}function Mv(n,t,i){const a=new Map;Yt(n.length===i.length,32656,{Re:i.length,Ve:n.length});for(let o=0;o<i.length;o++){const u=n[o],d=u.transform,m=t.data.field(u.field);a.set(u.field,l3(d,m,i[o]))}return a}function Ov(n,t,i){const a=new Map;for(const o of n){const u=o.transform,d=i.data.field(o.field);a.set(o.field,o3(u,d,t))}return a}class AE extends ed{constructor(t,i){super(),this.key=t,this.precondition=i,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class p3 extends ed{constructor(t,i){super(),this.key=t,this.precondition=i,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m3{constructor(t,i,a,o){this.batchId=t,this.localWriteTime=i,this.baseMutations=a,this.mutations=o}applyToRemoteDocument(t,i){const a=i.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(t.key)&&d3(u,t,a[o])}}applyToLocalView(t,i){for(const a of this.baseMutations)a.key.isEqual(t.key)&&(i=Ql(a,t,i,this.localWriteTime));for(const a of this.mutations)a.key.isEqual(t.key)&&(i=Ql(a,t,i,this.localWriteTime));return i}applyToLocalDocumentSet(t,i){const a=yE();return this.mutations.forEach((o=>{const u=t.get(o.key),d=u.overlayedDocument;let m=this.applyToLocalView(d,u.mutatedFields);m=i.has(o.key)?null:m;const p=TE(d,m);p!==null&&a.set(o.key,p),d.isValidDocument()||d.convertToNoDocument(At.min())})),a}keys(){return this.mutations.reduce(((t,i)=>t.add(i.key)),Ut())}isEqual(t){return this.batchId===t.batchId&&ho(this.mutations,t.mutations,((i,a)=>Nv(i,a)))&&ho(this.baseMutations,t.baseMutations,((i,a)=>Nv(i,a)))}}class yg{constructor(t,i,a,o){this.batch=t,this.commitVersion=i,this.mutationResults=a,this.docVersions=o}static from(t,i,a){Yt(t.mutations.length===a.length,58842,{me:t.mutations.length,fe:a.length});let o=(function(){return i3})();const u=t.mutations;for(let d=0;d<u.length;d++)o=o.insert(u[d].key,a[d].version);return new yg(t,i,a,o)}}/**
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
 */let g3=class{constructor(t,i){this.largestBatchId=t,this.mutation=i}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class y3{constructor(t,i){this.count=t,this.unchangedNames=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je,$t;function x3(n){switch(n){case it.OK:return bt(64938);case it.CANCELLED:case it.UNKNOWN:case it.DEADLINE_EXCEEDED:case it.RESOURCE_EXHAUSTED:case it.INTERNAL:case it.UNAVAILABLE:case it.UNAUTHENTICATED:return!1;case it.INVALID_ARGUMENT:case it.NOT_FOUND:case it.ALREADY_EXISTS:case it.PERMISSION_DENIED:case it.FAILED_PRECONDITION:case it.ABORTED:case it.OUT_OF_RANGE:case it.UNIMPLEMENTED:case it.DATA_LOSS:return!0;default:return bt(15467,{code:n})}}function RE(n){if(n===void 0)return lr("GRPC error has no .code"),it.UNKNOWN;switch(n){case je.OK:return it.OK;case je.CANCELLED:return it.CANCELLED;case je.UNKNOWN:return it.UNKNOWN;case je.DEADLINE_EXCEEDED:return it.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return it.RESOURCE_EXHAUSTED;case je.INTERNAL:return it.INTERNAL;case je.UNAVAILABLE:return it.UNAVAILABLE;case je.UNAUTHENTICATED:return it.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return it.INVALID_ARGUMENT;case je.NOT_FOUND:return it.NOT_FOUND;case je.ALREADY_EXISTS:return it.ALREADY_EXISTS;case je.PERMISSION_DENIED:return it.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return it.FAILED_PRECONDITION;case je.ABORTED:return it.ABORTED;case je.OUT_OF_RANGE:return it.OUT_OF_RANGE;case je.UNIMPLEMENTED:return it.UNIMPLEMENTED;case je.DATA_LOSS:return it.DATA_LOSS;default:return bt(39323,{code:n})}}($t=je||(je={}))[$t.OK=0]="OK",$t[$t.CANCELLED=1]="CANCELLED",$t[$t.UNKNOWN=2]="UNKNOWN",$t[$t.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$t[$t.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$t[$t.NOT_FOUND=5]="NOT_FOUND",$t[$t.ALREADY_EXISTS=6]="ALREADY_EXISTS",$t[$t.PERMISSION_DENIED=7]="PERMISSION_DENIED",$t[$t.UNAUTHENTICATED=16]="UNAUTHENTICATED",$t[$t.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$t[$t.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$t[$t.ABORTED=10]="ABORTED",$t[$t.OUT_OF_RANGE=11]="OUT_OF_RANGE",$t[$t.UNIMPLEMENTED=12]="UNIMPLEMENTED",$t[$t.INTERNAL=13]="INTERNAL",$t[$t.UNAVAILABLE=14]="UNAVAILABLE",$t[$t.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function v3(){return new TextEncoder}/**
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
 */const _3=new Jr([4294967295,4294967295],0);function Vv(n){const t=v3().encode(n),i=new z2;return i.update(t),new Uint8Array(i.digest())}function kv(n){const t=new DataView(n.buffer),i=t.getUint32(0,!0),a=t.getUint32(4,!0),o=t.getUint32(8,!0),u=t.getUint32(12,!0);return[new Jr([i,a],0),new Jr([o,u],0)]}class xg{constructor(t,i,a){if(this.bitmap=t,this.padding=i,this.hashCount=a,i<0||i>=8)throw new $l(`Invalid padding: ${i}`);if(a<0)throw new $l(`Invalid hash count: ${a}`);if(t.length>0&&this.hashCount===0)throw new $l(`Invalid hash count: ${a}`);if(t.length===0&&i!==0)throw new $l(`Invalid padding when bitmap length is 0: ${i}`);this.ge=8*t.length-i,this.pe=Jr.fromNumber(this.ge)}ye(t,i,a){let o=t.add(i.multiply(Jr.fromNumber(a)));return o.compare(_3)===1&&(o=new Jr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const i=Vv(t),[a,o]=kv(i);for(let u=0;u<this.hashCount;u++){const d=this.ye(a,o,u);if(!this.we(d))return!1}return!0}static create(t,i,a){const o=t%8==0?0:8-t%8,u=new Uint8Array(Math.ceil(t/8)),d=new xg(u,o,i);return a.forEach((m=>d.insert(m))),d}insert(t){if(this.ge===0)return;const i=Vv(t),[a,o]=kv(i);for(let u=0;u<this.hashCount;u++){const d=this.ye(a,o,u);this.Se(d)}}Se(t){const i=Math.floor(t/8),a=t%8;this.bitmap[i]|=1<<a}}class $l extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(t,i,a,o,u){this.snapshotVersion=t,this.targetChanges=i,this.targetMismatches=a,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(t,i,a){const o=new Map;return o.set(t,yu.createSynthesizedTargetChangeForCurrentChange(t,i,a)),new nd(At.min(),o,new me(Pt),cr(),Ut())}}class yu{constructor(t,i,a,o,u){this.resumeToken=t,this.current=i,this.addedDocuments=a,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(t,i,a){return new yu(a,i,Ut(),Ut(),Ut())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(t,i,a,o){this.be=t,this.removedTargetIds=i,this.key=a,this.De=o}}class IE{constructor(t,i){this.targetId=t,this.Ce=i}}class jE{constructor(t,i,a=Je.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=i,this.resumeToken=a,this.cause=o}}class Pv{constructor(){this.ve=0,this.Fe=Uv(),this.Me=Je.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=Ut(),i=Ut(),a=Ut();return this.Fe.forEach(((o,u)=>{switch(u){case 0:t=t.add(o);break;case 2:i=i.add(o);break;case 1:a=a.add(o);break;default:bt(38017,{changeType:u})}})),new yu(this.Me,this.xe,t,i,a)}qe(){this.Oe=!1,this.Fe=Uv()}Qe(t,i){this.Oe=!0,this.Fe=this.Fe.insert(t,i)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,Yt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class E3{constructor(t){this.Ge=t,this.ze=new Map,this.je=cr(),this.Je=Zc(),this.He=Zc(),this.Ye=new me(Pt)}Ze(t){for(const i of t.be)t.De&&t.De.isFoundDocument()?this.Xe(i,t.De):this.et(i,t.key,t.De);for(const i of t.removedTargetIds)this.et(i,t.key,t.De)}tt(t){this.forEachTarget(t,(i=>{const a=this.nt(i);switch(t.state){case 0:this.rt(i)&&a.Le(t.resumeToken);break;case 1:a.Ke(),a.Ne||a.qe(),a.Le(t.resumeToken);break;case 2:a.Ke(),a.Ne||this.removeTarget(i);break;case 3:this.rt(i)&&(a.We(),a.Le(t.resumeToken));break;case 4:this.rt(i)&&(this.it(i),a.Le(t.resumeToken));break;default:bt(56790,{state:t.state})}}))}forEachTarget(t,i){t.targetIds.length>0?t.targetIds.forEach(i):this.ze.forEach(((a,o)=>{this.rt(o)&&i(o)}))}st(t){const i=t.targetId,a=t.Ce.count,o=this.ot(i);if(o){const u=o.target;if(xm(u))if(a===0){const d=new vt(u.path);this.et(i,d,on.newNoDocument(d,At.min()))}else Yt(a===1,20013,{expectedCount:a});else{const d=this._t(i);if(d!==a){const m=this.ut(t),p=m?this.ct(m,t,d):1;if(p!==0){this.it(i);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(i,g)}}}}}ut(t){const i=t.Ce.unchangedNames;if(!i||!i.bits)return null;const{bits:{bitmap:a="",padding:o=0},hashCount:u=0}=i;let d,m;try{d=ia(a).toUint8Array()}catch(p){if(p instanceof Z2)return co("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{m=new xg(d,o,u)}catch(p){return co(p instanceof $l?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return m.ge===0?null:m}ct(t,i,a){return i.Ce.count===a-this.Pt(t,i.targetId)?0:2}Pt(t,i){const a=this.Ge.getRemoteKeysForTarget(i);let o=0;return a.forEach((u=>{const d=this.Ge.ht(),m=`projects/${d.projectId}/databases/${d.database}/documents/${u.path.canonicalString()}`;t.mightContain(m)||(this.et(i,u,null),o++)})),o}Tt(t){const i=new Map;this.ze.forEach(((u,d)=>{const m=this.ot(d);if(m){if(u.current&&xm(m.target)){const p=new vt(m.target.path);this.It(p).has(d)||this.Et(d,p)||this.et(d,p,on.newNoDocument(p,t))}u.Be&&(i.set(d,u.ke()),u.qe())}}));let a=Ut();this.He.forEach(((u,d)=>{let m=!0;d.forEachWhile((p=>{const g=this.ot(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(a=a.add(u))})),this.je.forEach(((u,d)=>d.setReadTime(t)));const o=new nd(t,i,this.Ye,this.je,a);return this.je=cr(),this.Je=Zc(),this.He=Zc(),this.Ye=new me(Pt),o}Xe(t,i){if(!this.rt(t))return;const a=this.Et(t,i.key)?2:0;this.nt(t).Qe(i.key,a),this.je=this.je.insert(i.key,i),this.Je=this.Je.insert(i.key,this.It(i.key).add(t)),this.He=this.He.insert(i.key,this.dt(i.key).add(t))}et(t,i,a){if(!this.rt(t))return;const o=this.nt(t);this.Et(t,i)?o.Qe(i,1):o.$e(i),this.He=this.He.insert(i,this.dt(i).delete(t)),this.He=this.He.insert(i,this.dt(i).add(t)),a&&(this.je=this.je.insert(i,a))}removeTarget(t){this.ze.delete(t)}_t(t){const i=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+i.addedDocuments.size-i.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let i=this.ze.get(t);return i||(i=new Pv,this.ze.set(t,i)),i}dt(t){let i=this.He.get(t);return i||(i=new Ue(Pt),this.He=this.He.insert(t,i)),i}It(t){let i=this.Je.get(t);return i||(i=new Ue(Pt),this.Je=this.Je.insert(t,i)),i}rt(t){const i=this.ot(t)!==null;return i||pt("WatchChangeAggregator","Detected inactive target",t),i}ot(t){const i=this.ze.get(t);return i&&i.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Pv),this.Ge.getRemoteKeysForTarget(t).forEach((i=>{this.et(t,i,null)}))}Et(t,i){return this.Ge.getRemoteKeysForTarget(t).has(i)}}function Zc(){return new me(vt.comparator)}function Uv(){return new me(vt.comparator)}const w3={asc:"ASCENDING",desc:"DESCENDING"},b3={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},T3={and:"AND",or:"OR"};class S3{constructor(t,i){this.databaseId=t,this.useProto3Json=i}}function Em(n,t){return n.useProto3Json||Xh(t)?t:{value:t}}function Nh(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function CE(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function A3(n,t){return Nh(n,t.toTimestamp())}function Ai(n){return Yt(!!n,49232),At.fromTimestamp((function(i){const a=na(i);return new ue(a.seconds,a.nanos)})(n))}function vg(n,t){return wm(n,t).canonicalString()}function wm(n,t){const i=(function(o){return new ae(["projects",o.projectId,"databases",o.database])})(n).child("documents");return t===void 0?i:i.child(t)}function DE(n){const t=ae.fromString(n);return Yt(kE(t),10190,{key:t.toString()}),t}function bm(n,t){return vg(n.databaseId,t.path)}function Mp(n,t){const i=DE(t);if(i.get(1)!==n.databaseId.projectId)throw new ft(it.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+i.get(1)+" vs "+n.databaseId.projectId);if(i.get(3)!==n.databaseId.database)throw new ft(it.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+i.get(3)+" vs "+n.databaseId.database);return new vt(ME(i))}function NE(n,t){return vg(n.databaseId,t)}function R3(n){const t=DE(n);return t.length===4?ae.emptyPath():ME(t)}function Tm(n){return new ae(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ME(n){return Yt(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Lv(n,t,i){return{name:bm(n,t),fields:i.value.mapValue.fields}}function I3(n,t){let i;if("targetChange"in t){t.targetChange;const a=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:bt(39313,{state:g})})(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],u=(function(g,v){return g.useProto3Json?(Yt(v===void 0||typeof v=="string",58123),Je.fromBase64String(v||"")):(Yt(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),Je.fromUint8Array(v||new Uint8Array))})(n,t.targetChange.resumeToken),d=t.targetChange.cause,m=d&&(function(g){const v=g.code===void 0?it.UNKNOWN:RE(g.code);return new ft(v,g.message||"")})(d);i=new jE(a,o,u,m||null)}else if("documentChange"in t){t.documentChange;const a=t.documentChange;a.document,a.document.name,a.document.updateTime;const o=Mp(n,a.document.name),u=Ai(a.document.updateTime),d=a.document.createTime?Ai(a.document.createTime):At.min(),m=new vn({mapValue:{fields:a.document.fields}}),p=on.newFoundDocument(o,u,d,m),g=a.targetIds||[],v=a.removedTargetIds||[];i=new gh(g,v,p.key,p)}else if("documentDelete"in t){t.documentDelete;const a=t.documentDelete;a.document;const o=Mp(n,a.document),u=a.readTime?Ai(a.readTime):At.min(),d=on.newNoDocument(o,u),m=a.removedTargetIds||[];i=new gh([],m,d.key,d)}else if("documentRemove"in t){t.documentRemove;const a=t.documentRemove;a.document;const o=Mp(n,a.document),u=a.removedTargetIds||[];i=new gh([],u,o,null)}else{if(!("filter"in t))return bt(11601,{Rt:t});{t.filter;const a=t.filter;a.targetId;const{count:o=0,unchangedNames:u}=a,d=new y3(o,u),m=a.targetId;i=new IE(m,d)}}return i}function j3(n,t){let i;if(t instanceof gu)i={update:Lv(n,t.key,t.value)};else if(t instanceof AE)i={delete:bm(n,t.key)};else if(t instanceof la)i={update:Lv(n,t.key,t.data),updateMask:U3(t.fieldMask)};else{if(!(t instanceof p3))return bt(16599,{Vt:t.type});i={verify:bm(n,t.key)}}return t.fieldTransforms.length>0&&(i.updateTransforms=t.fieldTransforms.map((a=>(function(u,d){const m=d.transform;if(m instanceof Dh)return{fieldPath:d.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof cu)return{fieldPath:d.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof hu)return{fieldPath:d.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof du)return{fieldPath:d.field.canonicalString(),increment:m.Ae};throw bt(20930,{transform:d.transform})})(0,a)))),t.precondition.isNone||(i.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:A3(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:bt(27497)})(n,t.precondition)),i}function C3(n,t){return n&&n.length>0?(Yt(t!==void 0,14353),n.map((i=>(function(o,u){let d=o.updateTime?Ai(o.updateTime):Ai(u);return d.isEqual(At.min())&&(d=Ai(u)),new h3(d,o.transformResults||[])})(i,t)))):[]}function D3(n,t){return{documents:[NE(n,t.path)]}}function N3(n,t){const i={structuredQuery:{}},a=t.path;let o;t.collectionGroup!==null?(o=a,i.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=a.popLast(),i.structuredQuery.from=[{collectionId:a.lastSegment()}]),i.parent=NE(n,o);const u=(function(g){if(g.length!==0)return VE(ai.create(g,"and"))})(t.filters);u&&(i.structuredQuery.where=u);const d=(function(g){if(g.length!==0)return g.map((v=>(function(T){return{field:Js(T.field),direction:V3(T.dir)}})(v)))})(t.orderBy);d&&(i.structuredQuery.orderBy=d);const m=Em(n,t.limit);return m!==null&&(i.structuredQuery.limit=m),t.startAt&&(i.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(t.startAt)),t.endAt&&(i.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(t.endAt)),{ft:i,parent:o}}function M3(n){let t=R3(n.parent);const i=n.structuredQuery,a=i.from?i.from.length:0;let o=null;if(a>0){Yt(a===1,65062);const v=i.from[0];v.allDescendants?o=v.collectionId:t=t.child(v.collectionId)}let u=[];i.where&&(u=(function(w){const T=OE(w);return T instanceof ai&&lE(T)?T.getFilters():[T]})(i.where));let d=[];i.orderBy&&(d=(function(w){return w.map((T=>(function(M){return new uu(to(M.field),(function(U){switch(U){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(M.direction))})(T)))})(i.orderBy));let m=null;i.limit&&(m=(function(w){let T;return T=typeof w=="object"?w.value:w,Xh(T)?null:T})(i.limit));let p=null;i.startAt&&(p=(function(w){const T=!!w.before,R=w.values||[];return new Ch(R,T)})(i.startAt));let g=null;return i.endAt&&(g=(function(w){const T=!w.before,R=w.values||[];return new Ch(R,T)})(i.endAt)),ZI(t,o,d,u,m,"F",p,g)}function O3(n,t){const i=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return bt(28987,{purpose:o})}})(t.purpose);return i==null?null:{"goog-listen-tags":i}}function OE(n){return n.unaryFilter!==void 0?(function(i){switch(i.unaryFilter.op){case"IS_NAN":const a=to(i.unaryFilter.field);return De.create(a,"==",{doubleValue:NaN});case"IS_NULL":const o=to(i.unaryFilter.field);return De.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=to(i.unaryFilter.field);return De.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const d=to(i.unaryFilter.field);return De.create(d,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return bt(61313);default:return bt(60726)}})(n):n.fieldFilter!==void 0?(function(i){return De.create(to(i.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return bt(58110);default:return bt(50506)}})(i.fieldFilter.op),i.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(i){return ai.create(i.compositeFilter.filters.map((a=>OE(a))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return bt(1026)}})(i.compositeFilter.op))})(n):bt(30097,{filter:n})}function V3(n){return w3[n]}function k3(n){return b3[n]}function P3(n){return T3[n]}function Js(n){return{fieldPath:n.canonicalString()}}function to(n){return Ze.fromServerFormat(n.fieldPath)}function VE(n){return n instanceof De?(function(i){if(i.op==="=="){if(Av(i.value))return{unaryFilter:{field:Js(i.field),op:"IS_NAN"}};if(Sv(i.value))return{unaryFilter:{field:Js(i.field),op:"IS_NULL"}}}else if(i.op==="!="){if(Av(i.value))return{unaryFilter:{field:Js(i.field),op:"IS_NOT_NAN"}};if(Sv(i.value))return{unaryFilter:{field:Js(i.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Js(i.field),op:k3(i.op),value:i.value}}})(n):n instanceof ai?(function(i){const a=i.getFilters().map((o=>VE(o)));return a.length===1?a[0]:{compositeFilter:{op:P3(i.op),filters:a}}})(n):bt(54877,{filter:n})}function U3(n){const t=[];return n.fields.forEach((i=>t.push(i.canonicalString()))),{fieldPaths:t}}function kE(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(t,i,a,o,u=At.min(),d=At.min(),m=Je.EMPTY_BYTE_STRING,p=null){this.target=t,this.targetId=i,this.purpose=a,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=d,this.resumeToken=m,this.expectedCount=p}withSequenceNumber(t){return new Xr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,i){return new Xr(this.target,this.targetId,this.purpose,this.sequenceNumber,i,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L3{constructor(t){this.yt=t}}function z3(n){const t=M3({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?_m(t,t.limit,"L"):t}/**
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
 */class $3{constructor(){this.Cn=new B3}addToCollectionParentIndex(t,i){return this.Cn.add(i),st.resolve()}getCollectionParents(t,i){return st.resolve(this.Cn.getEntries(i))}addFieldIndex(t,i){return st.resolve()}deleteFieldIndex(t,i){return st.resolve()}deleteAllFieldIndexes(t){return st.resolve()}createTargetIndexes(t,i){return st.resolve()}getDocumentsMatchingTarget(t,i){return st.resolve(null)}getIndexType(t,i){return st.resolve(0)}getFieldIndexes(t,i){return st.resolve([])}getNextCollectionGroupToUpdate(t){return st.resolve(null)}getMinOffset(t,i){return st.resolve(ea.min())}getMinOffsetFromCollectionGroup(t,i){return st.resolve(ea.min())}updateCollectionGroup(t,i,a){return st.resolve()}updateIndexEntries(t,i){return st.resolve()}}class B3{constructor(){this.index={}}add(t){const i=t.lastSegment(),a=t.popLast(),o=this.index[i]||new Ue(ae.comparator),u=!o.has(a);return this.index[i]=o.add(a),u}has(t){const i=t.lastSegment(),a=t.popLast(),o=this.index[i];return o&&o.has(a)}getEntries(t){return(this.index[t]||new Ue(ae.comparator)).toArray()}}/**
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
 */const zv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},PE=41943040;class xn{static withCacheSize(t){return new xn(t,xn.DEFAULT_COLLECTION_PERCENTILE,xn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,i,a){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=i,this.maximumSequenceNumbersToCollect=a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xn.DEFAULT_COLLECTION_PERCENTILE=10,xn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,xn.DEFAULT=new xn(PE,xn.DEFAULT_COLLECTION_PERCENTILE,xn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),xn.DISABLED=new xn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const $v="LruGarbageCollector",F3=1048576;function Bv([n,t],[i,a]){const o=Pt(n,i);return o===0?Pt(t,a):o}class q3{constructor(t){this.Ir=t,this.buffer=new Ue(Bv),this.Er=0}dr(){return++this.Er}Ar(t){const i=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(i);else{const a=this.buffer.last();Bv(i,a)<0&&(this.buffer=this.buffer.delete(a).add(i))}}get maxValue(){return this.buffer.last()[0]}}class K3{constructor(t,i,a){this.garbageCollector=t,this.asyncQueue=i,this.localStore=a,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){pt($v,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(i){Ao(i)?pt($v,"Ignoring IndexedDB error during garbage collection: ",i):await So(i)}await this.Vr(3e5)}))}}class H3{constructor(t,i){this.mr=t,this.params=i}calculateTargetCount(t,i){return this.mr.gr(t).next((a=>Math.floor(i/100*a)))}nthSequenceNumber(t,i){if(i===0)return st.resolve(Qh.ce);const a=new q3(i);return this.mr.forEachTarget(t,(o=>a.Ar(o.sequenceNumber))).next((()=>this.mr.pr(t,(o=>a.Ar(o))))).next((()=>a.maxValue))}removeTargets(t,i,a){return this.mr.removeTargets(t,i,a)}removeOrphanedDocuments(t,i){return this.mr.removeOrphanedDocuments(t,i)}collect(t,i){return this.params.cacheSizeCollectionThreshold===-1?(pt("LruGarbageCollector","Garbage collection skipped; disabled"),st.resolve(zv)):this.getCacheSize(t).next((a=>a<this.params.cacheSizeCollectionThreshold?(pt("LruGarbageCollector",`Garbage collection skipped; Cache size ${a} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),zv):this.yr(t,i)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,i){let a,o,u,d,m,p,g;const v=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((w=>(w>this.params.maximumSequenceNumbersToCollect?(pt("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),o=this.params.maximumSequenceNumbersToCollect):o=w,d=Date.now(),this.nthSequenceNumber(t,o)))).next((w=>(a=w,m=Date.now(),this.removeTargets(t,a,i)))).next((w=>(u=w,p=Date.now(),this.removeOrphanedDocuments(t,a)))).next((w=>(g=Date.now(),Ws()<=Bt.DEBUG&&pt("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${d-v}ms
	Determined least recently used ${o} in `+(m-d)+`ms
	Removed ${u} targets in `+(p-m)+`ms
	Removed ${w} documents in `+(g-p)+`ms
Total Duration: ${g-v}ms`),st.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:w}))))}}function G3(n,t){return new H3(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y3{constructor(){this.changes=new ns((t=>t.toString()),((t,i)=>t.isEqual(i))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,i){this.assertNotApplied(),this.changes.set(t,on.newInvalidDocument(t).setReadTime(i))}getEntry(t,i){this.assertNotApplied();const a=this.changes.get(i);return a!==void 0?st.resolve(a):this.getFromCache(t,i)}getEntries(t,i){return this.getAllFromCache(t,i)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Q3{constructor(t,i){this.overlayedDocument=t,this.mutatedFields=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X3{constructor(t,i,a,o){this.remoteDocumentCache=t,this.mutationQueue=i,this.documentOverlayCache=a,this.indexManager=o}getDocument(t,i){let a=null;return this.documentOverlayCache.getOverlay(t,i).next((o=>(a=o,this.remoteDocumentCache.getEntry(t,i)))).next((o=>(a!==null&&Ql(a.mutation,o,Cn.empty(),ue.now()),o)))}getDocuments(t,i){return this.remoteDocumentCache.getEntries(t,i).next((a=>this.getLocalViewOfDocuments(t,a,Ut()).next((()=>a))))}getLocalViewOfDocuments(t,i,a=Ut()){const o=Ya();return this.populateOverlays(t,o,i).next((()=>this.computeViews(t,i,o,a).next((u=>{let d=zl();return u.forEach(((m,p)=>{d=d.insert(m,p.overlayedDocument)})),d}))))}getOverlayedDocuments(t,i){const a=Ya();return this.populateOverlays(t,a,i).next((()=>this.computeViews(t,i,a,Ut())))}populateOverlays(t,i,a){const o=[];return a.forEach((u=>{i.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(t,o).next((u=>{u.forEach(((d,m)=>{i.set(d,m)}))}))}computeViews(t,i,a,o){let u=cr();const d=Yl(),m=(function(){return Yl()})();return i.forEach(((p,g)=>{const v=a.get(g.key);o.has(g.key)&&(v===void 0||v.mutation instanceof la)?u=u.insert(g.key,g):v!==void 0?(d.set(g.key,v.mutation.getFieldMask()),Ql(v.mutation,g,v.mutation.getFieldMask(),ue.now())):d.set(g.key,Cn.empty())})),this.recalculateAndSaveOverlays(t,u).next((p=>(p.forEach(((g,v)=>d.set(g,v))),i.forEach(((g,v)=>m.set(g,new Q3(v,d.get(g)??null)))),m)))}recalculateAndSaveOverlays(t,i){const a=Yl();let o=new me(((d,m)=>d-m)),u=Ut();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,i).next((d=>{for(const m of d)m.keys().forEach((p=>{const g=i.get(p);if(g===null)return;let v=a.get(p)||Cn.empty();v=m.applyToLocalView(g,v),a.set(p,v);const w=(o.get(m.batchId)||Ut()).add(p);o=o.insert(m.batchId,w)}))})).next((()=>{const d=[],m=o.getReverseIterator();for(;m.hasNext();){const p=m.getNext(),g=p.key,v=p.value,w=yE();v.forEach((T=>{if(!u.has(T)){const R=TE(i.get(T),a.get(T));R!==null&&w.set(T,R),u=u.add(T)}})),d.push(this.documentOverlayCache.saveOverlays(t,g,w))}return st.waitFor(d)})).next((()=>a))}recalculateAndSaveOverlaysForDocumentKeys(t,i){return this.remoteDocumentCache.getEntries(t,i).next((a=>this.recalculateAndSaveOverlays(t,a)))}getDocumentsMatchingQuery(t,i,a,o){return(function(d){return vt.isDocumentKey(d.path)&&d.collectionGroup===null&&d.filters.length===0})(i)?this.getDocumentsMatchingDocumentQuery(t,i.path):dE(i)?this.getDocumentsMatchingCollectionGroupQuery(t,i,a,o):this.getDocumentsMatchingCollectionQuery(t,i,a,o)}getNextDocuments(t,i,a,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,i,a,o).next((u=>{const d=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,i,a.largestBatchId,o-u.size):st.resolve(Ya());let m=au,p=u;return d.next((g=>st.forEach(g,((v,w)=>(m<w.largestBatchId&&(m=w.largestBatchId),u.get(v)?st.resolve():this.remoteDocumentCache.getEntry(t,v).next((T=>{p=p.insert(v,T)}))))).next((()=>this.populateOverlays(t,g,u))).next((()=>this.computeViews(t,p,g,Ut()))).next((v=>({batchId:m,changes:gE(v)})))))}))}getDocumentsMatchingDocumentQuery(t,i){return this.getDocument(t,new vt(i)).next((a=>{let o=zl();return a.isFoundDocument()&&(o=o.insert(a.key,a)),o}))}getDocumentsMatchingCollectionGroupQuery(t,i,a,o){const u=i.collectionGroup;let d=zl();return this.indexManager.getCollectionParents(t,u).next((m=>st.forEach(m,(p=>{const g=(function(w,T){return new Ro(T,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)})(i,p.child(u));return this.getDocumentsMatchingCollectionQuery(t,g,a,o).next((v=>{v.forEach(((w,T)=>{d=d.insert(w,T)}))}))})).next((()=>d))))}getDocumentsMatchingCollectionQuery(t,i,a,o){let u;return this.documentOverlayCache.getOverlaysForCollection(t,i.path,a.largestBatchId).next((d=>(u=d,this.remoteDocumentCache.getDocumentsMatchingQuery(t,i,a,u,o)))).next((d=>{u.forEach(((p,g)=>{const v=g.getKey();d.get(v)===null&&(d=d.insert(v,on.newInvalidDocument(v)))}));let m=zl();return d.forEach(((p,g)=>{const v=u.get(p);v!==void 0&&Ql(v.mutation,g,Cn.empty(),ue.now()),Jh(i,g)&&(m=m.insert(p,g))})),m}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W3{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,i){return st.resolve(this.Lr.get(i))}saveBundleMetadata(t,i){return this.Lr.set(i.id,(function(o){return{id:o.id,version:o.version,createTime:Ai(o.createTime)}})(i)),st.resolve()}getNamedQuery(t,i){return st.resolve(this.kr.get(i))}saveNamedQuery(t,i){return this.kr.set(i.name,(function(o){return{name:o.name,query:z3(o.bundledQuery),readTime:Ai(o.readTime)}})(i)),st.resolve()}}/**
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
 */class Z3{constructor(){this.overlays=new me(vt.comparator),this.qr=new Map}getOverlay(t,i){return st.resolve(this.overlays.get(i))}getOverlays(t,i){const a=Ya();return st.forEach(i,(o=>this.getOverlay(t,o).next((u=>{u!==null&&a.set(o,u)})))).next((()=>a))}saveOverlays(t,i,a){return a.forEach(((o,u)=>{this.St(t,i,u)})),st.resolve()}removeOverlaysForBatchId(t,i,a){const o=this.qr.get(a);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.qr.delete(a)),st.resolve()}getOverlaysForCollection(t,i,a){const o=Ya(),u=i.length+1,d=new vt(i.child("")),m=this.overlays.getIteratorFrom(d);for(;m.hasNext();){const p=m.getNext().value,g=p.getKey();if(!i.isPrefixOf(g.path))break;g.path.length===u&&p.largestBatchId>a&&o.set(p.getKey(),p)}return st.resolve(o)}getOverlaysForCollectionGroup(t,i,a,o){let u=new me(((g,v)=>g-v));const d=this.overlays.getIterator();for(;d.hasNext();){const g=d.getNext().value;if(g.getKey().getCollectionGroup()===i&&g.largestBatchId>a){let v=u.get(g.largestBatchId);v===null&&(v=Ya(),u=u.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const m=Ya(),p=u.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((g,v)=>m.set(g,v))),!(m.size()>=o)););return st.resolve(m)}St(t,i,a){const o=this.overlays.get(a.key);if(o!==null){const d=this.qr.get(o.largestBatchId).delete(a.key);this.qr.set(o.largestBatchId,d)}this.overlays=this.overlays.insert(a.key,new g3(i,a));let u=this.qr.get(i);u===void 0&&(u=Ut(),this.qr.set(i,u)),this.qr.set(i,u.add(a.key))}}/**
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
 */class J3{constructor(){this.sessionToken=Je.EMPTY_BYTE_STRING}getSessionToken(t){return st.resolve(this.sessionToken)}setSessionToken(t,i){return this.sessionToken=i,st.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(){this.Qr=new Ue(Ke.$r),this.Ur=new Ue(Ke.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,i){const a=new Ke(t,i);this.Qr=this.Qr.add(a),this.Ur=this.Ur.add(a)}Wr(t,i){t.forEach((a=>this.addReference(a,i)))}removeReference(t,i){this.Gr(new Ke(t,i))}zr(t,i){t.forEach((a=>this.removeReference(a,i)))}jr(t){const i=new vt(new ae([])),a=new Ke(i,t),o=new Ke(i,t+1),u=[];return this.Ur.forEachInRange([a,o],(d=>{this.Gr(d),u.push(d.key)})),u}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const i=new vt(new ae([])),a=new Ke(i,t),o=new Ke(i,t+1);let u=Ut();return this.Ur.forEachInRange([a,o],(d=>{u=u.add(d.key)})),u}containsKey(t){const i=new Ke(t,0),a=this.Qr.firstAfterOrEqual(i);return a!==null&&t.isEqual(a.key)}}class Ke{constructor(t,i){this.key=t,this.Yr=i}static $r(t,i){return vt.comparator(t.key,i.key)||Pt(t.Yr,i.Yr)}static Kr(t,i){return Pt(t.Yr,i.Yr)||vt.comparator(t.key,i.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tj{constructor(t,i){this.indexManager=t,this.referenceDelegate=i,this.mutationQueue=[],this.tr=1,this.Zr=new Ue(Ke.$r)}checkEmpty(t){return st.resolve(this.mutationQueue.length===0)}addMutationBatch(t,i,a,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const d=new m3(u,i,a,o);this.mutationQueue.push(d);for(const m of o)this.Zr=this.Zr.add(new Ke(m.key,u)),this.indexManager.addToCollectionParentIndex(t,m.key.path.popLast());return st.resolve(d)}lookupMutationBatch(t,i){return st.resolve(this.Xr(i))}getNextMutationBatchAfterBatchId(t,i){const a=i+1,o=this.ei(a),u=o<0?0:o;return st.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return st.resolve(this.mutationQueue.length===0?cg:this.tr-1)}getAllMutationBatches(t){return st.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,i){const a=new Ke(i,0),o=new Ke(i,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([a,o],(d=>{const m=this.Xr(d.Yr);u.push(m)})),st.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(t,i){let a=new Ue(Pt);return i.forEach((o=>{const u=new Ke(o,0),d=new Ke(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,d],(m=>{a=a.add(m.Yr)}))})),st.resolve(this.ti(a))}getAllMutationBatchesAffectingQuery(t,i){const a=i.path,o=a.length+1;let u=a;vt.isDocumentKey(u)||(u=u.child(""));const d=new Ke(new vt(u),0);let m=new Ue(Pt);return this.Zr.forEachWhile((p=>{const g=p.key.path;return!!a.isPrefixOf(g)&&(g.length===o&&(m=m.add(p.Yr)),!0)}),d),st.resolve(this.ti(m))}ti(t){const i=[];return t.forEach((a=>{const o=this.Xr(a);o!==null&&i.push(o)})),i}removeMutationBatch(t,i){Yt(this.ni(i.batchId,"removed")===0,55003),this.mutationQueue.shift();let a=this.Zr;return st.forEach(i.mutations,(o=>{const u=new Ke(o.key,i.batchId);return a=a.delete(u),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)})).next((()=>{this.Zr=a}))}ir(t){}containsKey(t,i){const a=new Ke(i,0),o=this.Zr.firstAfterOrEqual(a);return st.resolve(i.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,st.resolve()}ni(t,i){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const i=this.ei(t);return i<0||i>=this.mutationQueue.length?null:this.mutationQueue[i]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ej{constructor(t){this.ri=t,this.docs=(function(){return new me(vt.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,i){const a=i.key,o=this.docs.get(a),u=o?o.size:0,d=this.ri(i);return this.docs=this.docs.insert(a,{document:i.mutableCopy(),size:d}),this.size+=d-u,this.indexManager.addToCollectionParentIndex(t,a.path.popLast())}removeEntry(t){const i=this.docs.get(t);i&&(this.docs=this.docs.remove(t),this.size-=i.size)}getEntry(t,i){const a=this.docs.get(i);return st.resolve(a?a.document.mutableCopy():on.newInvalidDocument(i))}getEntries(t,i){let a=cr();return i.forEach((o=>{const u=this.docs.get(o);a=a.insert(o,u?u.document.mutableCopy():on.newInvalidDocument(o))})),st.resolve(a)}getDocumentsMatchingQuery(t,i,a,o){let u=cr();const d=i.path,m=new vt(d.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(m);for(;p.hasNext();){const{key:g,value:{document:v}}=p.getNext();if(!d.isPrefixOf(g.path))break;g.path.length>d.length+1||CI(jI(v),a)<=0||(o.has(v.key)||Jh(i,v))&&(u=u.insert(v.key,v.mutableCopy()))}return st.resolve(u)}getAllFromCollectionGroup(t,i,a,o){bt(9500)}ii(t,i){return st.forEach(this.docs,(a=>i(a)))}newChangeBuffer(t){return new nj(this)}getSize(t){return st.resolve(this.size)}}class nj extends Y3{constructor(t){super(),this.Nr=t}applyChanges(t){const i=[];return this.changes.forEach(((a,o)=>{o.isValidDocument()?i.push(this.Nr.addEntry(t,o)):this.Nr.removeEntry(a)})),st.waitFor(i)}getFromCache(t,i){return this.Nr.getEntry(t,i)}getAllFromCache(t,i){return this.Nr.getEntries(t,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ij{constructor(t){this.persistence=t,this.si=new ns((i=>fg(i)),pg),this.lastRemoteSnapshotVersion=At.min(),this.highestTargetId=0,this.oi=0,this._i=new _g,this.targetCount=0,this.ai=mo.ur()}forEachTarget(t,i){return this.si.forEach(((a,o)=>i(o))),st.resolve()}getLastRemoteSnapshotVersion(t){return st.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return st.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),st.resolve(this.highestTargetId)}setTargetsMetadata(t,i,a){return a&&(this.lastRemoteSnapshotVersion=a),i>this.oi&&(this.oi=i),st.resolve()}Pr(t){this.si.set(t.target,t);const i=t.targetId;i>this.highestTargetId&&(this.ai=new mo(i),this.highestTargetId=i),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,i){return this.Pr(i),this.targetCount+=1,st.resolve()}updateTargetData(t,i){return this.Pr(i),st.resolve()}removeTargetData(t,i){return this.si.delete(i.target),this._i.jr(i.targetId),this.targetCount-=1,st.resolve()}removeTargets(t,i,a){let o=0;const u=[];return this.si.forEach(((d,m)=>{m.sequenceNumber<=i&&a.get(m.targetId)===null&&(this.si.delete(d),u.push(this.removeMatchingKeysForTargetId(t,m.targetId)),o++)})),st.waitFor(u).next((()=>o))}getTargetCount(t){return st.resolve(this.targetCount)}getTargetData(t,i){const a=this.si.get(i)||null;return st.resolve(a)}addMatchingKeys(t,i,a){return this._i.Wr(i,a),st.resolve()}removeMatchingKeys(t,i,a){this._i.zr(i,a);const o=this.persistence.referenceDelegate,u=[];return o&&i.forEach((d=>{u.push(o.markPotentiallyOrphaned(t,d))})),st.waitFor(u)}removeMatchingKeysForTargetId(t,i){return this._i.jr(i),st.resolve()}getMatchingKeysForTargetId(t,i){const a=this._i.Hr(i);return st.resolve(a)}containsKey(t,i){return st.resolve(this._i.containsKey(i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(t,i){this.ui={},this.overlays={},this.ci=new Qh(0),this.li=!1,this.li=!0,this.hi=new J3,this.referenceDelegate=t(this),this.Pi=new ij(this),this.indexManager=new $3,this.remoteDocumentCache=(function(o){return new ej(o)})((a=>this.referenceDelegate.Ti(a))),this.serializer=new L3(i),this.Ii=new W3(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let i=this.overlays[t.toKey()];return i||(i=new Z3,this.overlays[t.toKey()]=i),i}getMutationQueue(t,i){let a=this.ui[t.toKey()];return a||(a=new tj(i,this.referenceDelegate),this.ui[t.toKey()]=a),a}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,i,a){pt("MemoryPersistence","Starting transaction:",t);const o=new rj(this.ci.next());return this.referenceDelegate.Ei(),a(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ai(t,i){return st.or(Object.values(this.ui).map((a=>()=>a.containsKey(t,i))))}}class rj extends NI{constructor(t){super(),this.currentSequenceNumber=t}}class Eg{constructor(t){this.persistence=t,this.Ri=new _g,this.Vi=null}static mi(t){return new Eg(t)}get fi(){if(this.Vi)return this.Vi;throw bt(60996)}addReference(t,i,a){return this.Ri.addReference(a,i),this.fi.delete(a.toString()),st.resolve()}removeReference(t,i,a){return this.Ri.removeReference(a,i),this.fi.add(a.toString()),st.resolve()}markPotentiallyOrphaned(t,i){return this.fi.add(i.toString()),st.resolve()}removeTarget(t,i){this.Ri.jr(i.targetId).forEach((o=>this.fi.add(o.toString())));const a=this.persistence.getTargetCache();return a.getMatchingKeysForTargetId(t,i.targetId).next((o=>{o.forEach((u=>this.fi.add(u.toString())))})).next((()=>a.removeTargetData(t,i)))}Ei(){this.Vi=new Set}di(t){const i=this.persistence.getRemoteDocumentCache().newChangeBuffer();return st.forEach(this.fi,(a=>{const o=vt.fromPath(a);return this.gi(t,o).next((u=>{u||i.removeEntry(o,At.min())}))})).next((()=>(this.Vi=null,i.apply(t))))}updateLimboDocument(t,i){return this.gi(t,i).next((a=>{a?this.fi.delete(i.toString()):this.fi.add(i.toString())}))}Ti(t){return 0}gi(t,i){return st.or([()=>st.resolve(this.Ri.containsKey(i)),()=>this.persistence.getTargetCache().containsKey(t,i),()=>this.persistence.Ai(t,i)])}}class Mh{constructor(t,i){this.persistence=t,this.pi=new ns((a=>VI(a.path)),((a,o)=>a.isEqual(o))),this.garbageCollector=G3(this,i)}static mi(t,i){return new Mh(t,i)}Ei(){}di(t){return st.resolve()}forEachTarget(t,i){return this.persistence.getTargetCache().forEachTarget(t,i)}gr(t){const i=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((a=>i.next((o=>a+o))))}wr(t){let i=0;return this.pr(t,(a=>{i++})).next((()=>i))}pr(t,i){return st.forEach(this.pi,((a,o)=>this.br(t,a,o).next((u=>u?st.resolve():i(o)))))}removeTargets(t,i,a){return this.persistence.getTargetCache().removeTargets(t,i,a)}removeOrphanedDocuments(t,i){let a=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(t,(d=>this.br(t,d,i).next((m=>{m||(a++,u.removeEntry(d,At.min()))})))).next((()=>u.apply(t))).next((()=>a))}markPotentiallyOrphaned(t,i){return this.pi.set(i,t.currentSequenceNumber),st.resolve()}removeTarget(t,i){const a=i.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,a)}addReference(t,i,a){return this.pi.set(a,t.currentSequenceNumber),st.resolve()}removeReference(t,i,a){return this.pi.set(a,t.currentSequenceNumber),st.resolve()}updateLimboDocument(t,i){return this.pi.set(i,t.currentSequenceNumber),st.resolve()}Ti(t){let i=t.key.toString().length;return t.isFoundDocument()&&(i+=fh(t.data.value)),i}br(t,i,a){return st.or([()=>this.persistence.Ai(t,i),()=>this.persistence.getTargetCache().containsKey(t,i),()=>{const o=this.pi.get(i);return st.resolve(o!==void 0&&o>a)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(t,i,a,o){this.targetId=t,this.fromCache=i,this.Es=a,this.ds=o}static As(t,i){let a=Ut(),o=Ut();for(const u of i.docChanges)switch(u.type){case 0:a=a.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new wg(t,i.fromCache,a,o)}}/**
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
 */class aj{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class sj{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return WR()?8:MI(QR())>0?6:4})()}initialize(t,i){this.ps=t,this.indexManager=i,this.Rs=!0}getDocumentsMatchingQuery(t,i,a,o){const u={result:null};return this.ys(t,i).next((d=>{u.result=d})).next((()=>{if(!u.result)return this.ws(t,i,o,a).next((d=>{u.result=d}))})).next((()=>{if(u.result)return;const d=new aj;return this.Ss(t,i,d).next((m=>{if(u.result=m,this.Vs)return this.bs(t,i,d,m.size)}))})).next((()=>u.result))}bs(t,i,a,o){return a.documentReadCount<this.fs?(Ws()<=Bt.DEBUG&&pt("QueryEngine","SDK will not create cache indexes for query:",Zs(i),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),st.resolve()):(Ws()<=Bt.DEBUG&&pt("QueryEngine","Query:",Zs(i),"scans",a.documentReadCount,"local documents and returns",o,"documents as results."),a.documentReadCount>this.gs*o?(Ws()<=Bt.DEBUG&&pt("QueryEngine","The SDK decides to create cache indexes for query:",Zs(i),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ti(i))):st.resolve())}ys(t,i){if(Cv(i))return st.resolve(null);let a=Ti(i);return this.indexManager.getIndexType(t,a).next((o=>o===0?null:(i.limit!==null&&o===1&&(i=_m(i,null,"F"),a=Ti(i)),this.indexManager.getDocumentsMatchingTarget(t,a).next((u=>{const d=Ut(...u);return this.ps.getDocuments(t,d).next((m=>this.indexManager.getMinOffset(t,a).next((p=>{const g=this.Ds(i,m);return this.Cs(i,g,d,p.readTime)?this.ys(t,_m(i,null,"F")):this.vs(t,g,i,p)}))))})))))}ws(t,i,a,o){return Cv(i)||o.isEqual(At.min())?st.resolve(null):this.ps.getDocuments(t,a).next((u=>{const d=this.Ds(i,u);return this.Cs(i,d,a,o)?st.resolve(null):(Ws()<=Bt.DEBUG&&pt("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Zs(i)),this.vs(t,d,i,II(o,au)).next((m=>m)))}))}Ds(t,i){let a=new Ue(pE(t));return i.forEach(((o,u)=>{Jh(t,u)&&(a=a.add(u))})),a}Cs(t,i,a,o){if(t.limit===null)return!1;if(a.size!==i.size)return!0;const u=t.limitType==="F"?i.last():i.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(t,i,a){return Ws()<=Bt.DEBUG&&pt("QueryEngine","Using full collection scan to execute query:",Zs(i)),this.ps.getDocumentsMatchingQuery(t,i,ea.min(),a)}vs(t,i,a,o){return this.ps.getDocumentsMatchingQuery(t,a,o).next((u=>(i.forEach((d=>{u=u.insert(d.key,d)})),u)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg="LocalStore",oj=3e8;class lj{constructor(t,i,a,o){this.persistence=t,this.Fs=i,this.serializer=o,this.Ms=new me(Pt),this.xs=new ns((u=>fg(u)),pg),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(a)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new X3(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(i=>t.collect(i,this.Ms)))}}function uj(n,t,i,a){return new lj(n,t,i,a)}async function LE(n,t){const i=It(n);return await i.persistence.runTransaction("Handle user change","readonly",(a=>{let o;return i.mutationQueue.getAllMutationBatches(a).next((u=>(o=u,i.Bs(t),i.mutationQueue.getAllMutationBatches(a)))).next((u=>{const d=[],m=[];let p=Ut();for(const g of o){d.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}for(const g of u){m.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}return i.localDocuments.getDocuments(a,p).next((g=>({Ls:g,removedBatchIds:d,addedBatchIds:m})))}))}))}function cj(n,t){const i=It(n);return i.persistence.runTransaction("Acknowledge batch","readwrite-primary",(a=>{const o=t.batch.keys(),u=i.Ns.newChangeBuffer({trackRemovals:!0});return(function(m,p,g,v){const w=g.batch,T=w.keys();let R=st.resolve();return T.forEach((M=>{R=R.next((()=>v.getEntry(p,M))).next((L=>{const U=g.docVersions.get(M);Yt(U!==null,48541),L.version.compareTo(U)<0&&(w.applyToRemoteDocument(L,g),L.isValidDocument()&&(L.setReadTime(g.commitVersion),v.addEntry(L)))}))})),R.next((()=>m.mutationQueue.removeMutationBatch(p,w)))})(i,a,t,u).next((()=>u.apply(a))).next((()=>i.mutationQueue.performConsistencyCheck(a))).next((()=>i.documentOverlayCache.removeOverlaysForBatchId(a,o,t.batch.batchId))).next((()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,(function(m){let p=Ut();for(let g=0;g<m.mutationResults.length;++g)m.mutationResults[g].transformResults.length>0&&(p=p.add(m.batch.mutations[g].key));return p})(t)))).next((()=>i.localDocuments.getDocuments(a,o)))}))}function zE(n){const t=It(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(i=>t.Pi.getLastRemoteSnapshotVersion(i)))}function hj(n,t){const i=It(n),a=t.snapshotVersion;let o=i.Ms;return i.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const d=i.Ns.newChangeBuffer({trackRemovals:!0});o=i.Ms;const m=[];t.targetChanges.forEach(((v,w)=>{const T=o.get(w);if(!T)return;m.push(i.Pi.removeMatchingKeys(u,v.removedDocuments,w).next((()=>i.Pi.addMatchingKeys(u,v.addedDocuments,w))));let R=T.withSequenceNumber(u.currentSequenceNumber);t.targetMismatches.get(w)!==null?R=R.withResumeToken(Je.EMPTY_BYTE_STRING,At.min()).withLastLimboFreeSnapshotVersion(At.min()):v.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(v.resumeToken,a)),o=o.insert(w,R),(function(L,U,K){return L.resumeToken.approximateByteSize()===0||U.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=oj?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0})(T,R,v)&&m.push(i.Pi.updateTargetData(u,R))}));let p=cr(),g=Ut();if(t.documentUpdates.forEach((v=>{t.resolvedLimboDocuments.has(v)&&m.push(i.persistence.referenceDelegate.updateLimboDocument(u,v))})),m.push(dj(u,d,t.documentUpdates).next((v=>{p=v.ks,g=v.qs}))),!a.isEqual(At.min())){const v=i.Pi.getLastRemoteSnapshotVersion(u).next((w=>i.Pi.setTargetsMetadata(u,u.currentSequenceNumber,a)));m.push(v)}return st.waitFor(m).next((()=>d.apply(u))).next((()=>i.localDocuments.getLocalViewOfDocuments(u,p,g))).next((()=>p))})).then((u=>(i.Ms=o,u)))}function dj(n,t,i){let a=Ut(),o=Ut();return i.forEach((u=>a=a.add(u))),t.getEntries(n,a).next((u=>{let d=cr();return i.forEach(((m,p)=>{const g=u.get(m);p.isFoundDocument()!==g.isFoundDocument()&&(o=o.add(m)),p.isNoDocument()&&p.version.isEqual(At.min())?(t.removeEntry(m,p.readTime),d=d.insert(m,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(t.addEntry(p),d=d.insert(m,p)):pt(bg,"Ignoring outdated watch update for ",m,". Current version:",g.version," Watch version:",p.version)})),{ks:d,qs:o}}))}function fj(n,t){const i=It(n);return i.persistence.runTransaction("Get next mutation batch","readonly",(a=>(t===void 0&&(t=cg),i.mutationQueue.getNextMutationBatchAfterBatchId(a,t))))}function pj(n,t){const i=It(n);return i.persistence.runTransaction("Allocate target","readwrite",(a=>{let o;return i.Pi.getTargetData(a,t).next((u=>u?(o=u,st.resolve(o)):i.Pi.allocateTargetId(a).next((d=>(o=new Xr(t,d,"TargetPurposeListen",a.currentSequenceNumber),i.Pi.addTargetData(a,o).next((()=>o)))))))})).then((a=>{const o=i.Ms.get(a.targetId);return(o===null||a.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(i.Ms=i.Ms.insert(a.targetId,a),i.xs.set(t,a.targetId)),a}))}async function Sm(n,t,i){const a=It(n),o=a.Ms.get(t),u=i?"readwrite":"readwrite-primary";try{i||await a.persistence.runTransaction("Release target",u,(d=>a.persistence.referenceDelegate.removeTarget(d,o)))}catch(d){if(!Ao(d))throw d;pt(bg,`Failed to update sequence numbers for target ${t}: ${d}`)}a.Ms=a.Ms.remove(t),a.xs.delete(o.target)}function Fv(n,t,i){const a=It(n);let o=At.min(),u=Ut();return a.persistence.runTransaction("Execute query","readwrite",(d=>(function(p,g,v){const w=It(p),T=w.xs.get(v);return T!==void 0?st.resolve(w.Ms.get(T)):w.Pi.getTargetData(g,v)})(a,d,Ti(t)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,a.Pi.getMatchingKeysForTargetId(d,m.targetId).next((p=>{u=p}))})).next((()=>a.Fs.getDocumentsMatchingQuery(d,t,i?o:At.min(),i?u:Ut()))).next((m=>(mj(a,t3(t),m),{documents:m,Qs:u})))))}function mj(n,t,i){let a=n.Os.get(t)||At.min();i.forEach(((o,u)=>{u.readTime.compareTo(a)>0&&(a=u.readTime)})),n.Os.set(t,a)}class qv{constructor(){this.activeTargetIds=s3()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class gj{constructor(){this.Mo=new qv,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,i,a){}addLocalQueryTarget(t,i=!0){return i&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,i,a){this.xo[t]=i}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new qv,Promise.resolve()}handleUserChange(t,i,a){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class yj{Oo(t){}shutdown(){}}/**
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
 */const Kv="ConnectivityMonitor";class Hv{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){pt(Kv,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){pt(Kv,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Jc=null;function Am(){return Jc===null?Jc=(function(){return 268435456+Math.round(2147483648*Math.random())})():Jc++,"0x"+Jc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op="RestConnection",xj={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class vj{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=i+"://"+t.host,this.Ko=`projects/${a}/databases/${o}`,this.Wo=this.databaseId.database===Ih?`project_id=${a}`:`project_id=${a}&database_id=${o}`}Go(t,i,a,o,u){const d=Am(),m=this.zo(t,i.toUriEncodedString());pt(Op,`Sending RPC '${t}' ${d}:`,m,a);const p={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(p,o,u);const{host:g}=new URL(m),v=ag(g);return this.Jo(t,m,p,a,v).then((w=>(pt(Op,`Received RPC '${t}' ${d}: `,w),w)),(w=>{throw co(Op,`RPC '${t}' ${d} failed with error: `,w,"url: ",m,"request:",a),w}))}Ho(t,i,a,o,u,d){return this.Go(t,i,a,o,u)}jo(t,i,a){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+To})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach(((o,u)=>t[u]=o)),a&&a.headers.forEach(((o,u)=>t[u]=o))}zo(t,i){const a=xj[t];return`${this.Uo}/v1/${i}:${a}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _j{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an="WebChannelConnection";class Ej extends vj{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,i,a,o,u){const d=Am();return new Promise(((m,p)=>{const g=new $2;g.setWithCredentials(!0),g.listenOnce(B2.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case dh.NO_ERROR:const w=g.getResponseJson();pt(an,`XHR for RPC '${t}' ${d} received:`,JSON.stringify(w)),m(w);break;case dh.TIMEOUT:pt(an,`RPC '${t}' ${d} timed out`),p(new ft(it.DEADLINE_EXCEEDED,"Request time out"));break;case dh.HTTP_ERROR:const T=g.getStatus();if(pt(an,`RPC '${t}' ${d} failed with status:`,T,"response text:",g.getResponseText()),T>0){let R=g.getResponseJson();Array.isArray(R)&&(R=R[0]);const M=R?.error;if(M&&M.status&&M.message){const L=(function(K){const X=K.toLowerCase().replace(/_/g,"-");return Object.values(it).indexOf(X)>=0?X:it.UNKNOWN})(M.status);p(new ft(L,M.message))}else p(new ft(it.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new ft(it.UNAVAILABLE,"Connection failed."));break;default:bt(9055,{l_:t,streamId:d,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{pt(an,`RPC '${t}' ${d} completed.`)}}));const v=JSON.stringify(o);pt(an,`RPC '${t}' ${d} sending request:`,o),g.send(i,"POST",v,a,15)}))}T_(t,i,a){const o=Am(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],d=K2(),m=q2(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.jo(p.initMessageHeaders,i,a),p.encodeInitMessageHeaders=!0;const v=u.join("");pt(an,`Creating RPC '${t}' stream ${o}: ${v}`,p);const w=d.createWebChannel(v,p);this.I_(w);let T=!1,R=!1;const M=new _j({Yo:U=>{R?pt(an,`Not sending because RPC '${t}' stream ${o} is closed:`,U):(T||(pt(an,`Opening RPC '${t}' stream ${o} transport.`),w.open(),T=!0),pt(an,`RPC '${t}' stream ${o} sending:`,U),w.send(U))},Zo:()=>w.close()}),L=(U,K,X)=>{U.listen(K,(tt=>{try{X(tt)}catch(lt){setTimeout((()=>{throw lt}),0)}}))};return L(w,Ll.EventType.OPEN,(()=>{R||(pt(an,`RPC '${t}' stream ${o} transport opened.`),M.o_())})),L(w,Ll.EventType.CLOSE,(()=>{R||(R=!0,pt(an,`RPC '${t}' stream ${o} transport closed`),M.a_(),this.E_(w))})),L(w,Ll.EventType.ERROR,(U=>{R||(R=!0,co(an,`RPC '${t}' stream ${o} transport errored. Name:`,U.name,"Message:",U.message),M.a_(new ft(it.UNAVAILABLE,"The operation could not be completed")))})),L(w,Ll.EventType.MESSAGE,(U=>{if(!R){const K=U.data[0];Yt(!!K,16349);const X=K,tt=X?.error||X[0]?.error;if(tt){pt(an,`RPC '${t}' stream ${o} received error:`,tt);const lt=tt.status;let Y=(function(I){const C=je[I];if(C!==void 0)return RE(C)})(lt),ot=tt.message;Y===void 0&&(Y=it.INTERNAL,ot="Unknown error status: "+lt+" with message "+tt.message),R=!0,M.a_(new ft(Y,ot)),w.close()}else pt(an,`RPC '${t}' stream ${o} received:`,K),M.u_(K)}})),L(m,F2.STAT_EVENT,(U=>{U.stat===fm.PROXY?pt(an,`RPC '${t}' stream ${o} detected buffering proxy`):U.stat===fm.NOPROXY&&pt(an,`RPC '${t}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{M.__()}),0),M}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((i=>i===t))}}function Vp(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(n){return new S3(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(t,i,a=1e3,o=1.5,u=6e4){this.Mi=t,this.timerId=i,this.d_=a,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const i=Math.floor(this.V_+this.y_()),a=Math.max(0,Date.now()-this.f_),o=Math.max(0,i-a);o>0&&pt("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${i} ms, last attempt: ${a} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv="PersistentStream";class BE{constructor(t,i,a,o,u,d,m,p){this.Mi=t,this.S_=a,this.b_=o,this.connection=u,this.authCredentialsProvider=d,this.appCheckCredentialsProvider=m,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new $E(t,i)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,i){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():i&&i.code===it.RESOURCE_EXHAUSTED?(lr(i.toString()),lr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):i&&i.code===it.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(i)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),i=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([a,o])=>{this.D_===i&&this.G_(a,o)}),(a=>{t((()=>{const o=new ft(it.UNKNOWN,"Fetching auth token failed: "+a.message);return this.z_(o)}))}))}G_(t,i){const a=this.W_(this.D_);this.stream=this.j_(t,i),this.stream.Xo((()=>{a((()=>this.listener.Xo()))})),this.stream.t_((()=>{a((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{a((()=>this.z_(o)))})),this.stream.onMessage((o=>{a((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return pt(Gv,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return i=>{this.Mi.enqueueAndForget((()=>this.D_===t?i():(pt(Gv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class wj extends BE{constructor(t,i,a,o,u,d){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",i,a,o,d),this.serializer=u}j_(t,i){return this.connection.T_("Listen",t,i)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const i=I3(this.serializer,t),a=(function(u){if(!("targetChange"in u))return At.min();const d=u.targetChange;return d.targetIds&&d.targetIds.length?At.min():d.readTime?Ai(d.readTime):At.min()})(t);return this.listener.H_(i,a)}Y_(t){const i={};i.database=Tm(this.serializer),i.addTarget=(function(u,d){let m;const p=d.target;if(m=xm(p)?{documents:D3(u,p)}:{query:N3(u,p).ft},m.targetId=d.targetId,d.resumeToken.approximateByteSize()>0){m.resumeToken=CE(u,d.resumeToken);const g=Em(u,d.expectedCount);g!==null&&(m.expectedCount=g)}else if(d.snapshotVersion.compareTo(At.min())>0){m.readTime=Nh(u,d.snapshotVersion.toTimestamp());const g=Em(u,d.expectedCount);g!==null&&(m.expectedCount=g)}return m})(this.serializer,t);const a=O3(this.serializer,t);a&&(i.labels=a),this.q_(i)}Z_(t){const i={};i.database=Tm(this.serializer),i.removeTarget=t,this.q_(i)}}class bj extends BE{constructor(t,i,a,o,u,d){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",i,a,o,d),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,i){return this.connection.T_("Write",t,i)}J_(t){return Yt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Yt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){Yt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const i=C3(t.writeResults,t.commitTime),a=Ai(t.commitTime);return this.listener.na(a,i)}ra(){const t={};t.database=Tm(this.serializer),this.q_(t)}ea(t){const i={streamToken:this.lastStreamToken,writes:t.map((a=>j3(this.serializer,a)))};this.q_(i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tj{}class Sj extends Tj{constructor(t,i,a,o){super(),this.authCredentials=t,this.appCheckCredentials=i,this.connection=a,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ft(it.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,i,a,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,d])=>this.connection.Go(t,wm(i,a),o,u,d))).catch((u=>{throw u.name==="FirebaseError"?(u.code===it.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ft(it.UNKNOWN,u.toString())}))}Ho(t,i,a,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([d,m])=>this.connection.Ho(t,wm(i,a),o,d,m,u))).catch((d=>{throw d.name==="FirebaseError"?(d.code===it.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),d):new ft(it.UNKNOWN,d.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class Aj{constructor(t,i){this.asyncQueue=t,this.onlineStateHandler=i,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const i=`Could not reach Cloud Firestore backend. ${t}
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
 */const Ja="RemoteStore";class Rj{constructor(t,i,a,o,u){this.localStore=t,this.datastore=i,this.asyncQueue=a,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo((d=>{a.enqueueAndForget((async()=>{is(this)&&(pt(Ja,"Restarting streams for network reachability change."),await(async function(p){const g=It(p);g.Ea.add(4),await xu(g),g.Ra.set("Unknown"),g.Ea.delete(4),await rd(g)})(this))}))})),this.Ra=new Aj(a,o)}}async function rd(n){if(is(n))for(const t of n.da)await t(!0)}async function xu(n){for(const t of n.da)await t(!1)}function FE(n,t){const i=It(n);i.Ia.has(t.targetId)||(i.Ia.set(t.targetId,t),Rg(i)?Ag(i):Io(i).O_()&&Sg(i,t))}function Tg(n,t){const i=It(n),a=Io(i);i.Ia.delete(t),a.O_()&&qE(i,t),i.Ia.size===0&&(a.O_()?a.L_():is(i)&&i.Ra.set("Unknown"))}function Sg(n,t){if(n.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(At.min())>0){const i=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(i)}Io(n).Y_(t)}function qE(n,t){n.Va.Ue(t),Io(n).Z_(t)}function Ag(n){n.Va=new E3({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),Io(n).start(),n.Ra.ua()}function Rg(n){return is(n)&&!Io(n).x_()&&n.Ia.size>0}function is(n){return It(n).Ea.size===0}function KE(n){n.Va=void 0}async function Ij(n){n.Ra.set("Online")}async function jj(n){n.Ia.forEach(((t,i)=>{Sg(n,t)}))}async function Cj(n,t){KE(n),Rg(n)?(n.Ra.ha(t),Ag(n)):n.Ra.set("Unknown")}async function Dj(n,t,i){if(n.Ra.set("Online"),t instanceof jE&&t.state===2&&t.cause)try{await(async function(o,u){const d=u.cause;for(const m of u.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,d),o.Ia.delete(m),o.Va.removeTarget(m))})(n,t)}catch(a){pt(Ja,"Failed to remove targets %s: %s ",t.targetIds.join(","),a),await Oh(n,a)}else if(t instanceof gh?n.Va.Ze(t):t instanceof IE?n.Va.st(t):n.Va.tt(t),!i.isEqual(At.min()))try{const a=await zE(n.localStore);i.compareTo(a)>=0&&await(function(u,d){const m=u.Va.Tt(d);return m.targetChanges.forEach(((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const v=u.Ia.get(g);v&&u.Ia.set(g,v.withResumeToken(p.resumeToken,d))}})),m.targetMismatches.forEach(((p,g)=>{const v=u.Ia.get(p);if(!v)return;u.Ia.set(p,v.withResumeToken(Je.EMPTY_BYTE_STRING,v.snapshotVersion)),qE(u,p);const w=new Xr(v.target,p,g,v.sequenceNumber);Sg(u,w)})),u.remoteSyncer.applyRemoteEvent(m)})(n,i)}catch(a){pt(Ja,"Failed to raise snapshot:",a),await Oh(n,a)}}async function Oh(n,t,i){if(!Ao(t))throw t;n.Ea.add(1),await xu(n),n.Ra.set("Offline"),i||(i=()=>zE(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{pt(Ja,"Retrying IndexedDB access"),await i(),n.Ea.delete(1),await rd(n)}))}function HE(n,t){return t().catch((i=>Oh(n,i,t)))}async function ad(n){const t=It(n),i=aa(t);let a=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:cg;for(;Nj(t);)try{const o=await fj(t.localStore,a);if(o===null){t.Ta.length===0&&i.L_();break}a=o.batchId,Mj(t,o)}catch(o){await Oh(t,o)}GE(t)&&YE(t)}function Nj(n){return is(n)&&n.Ta.length<10}function Mj(n,t){n.Ta.push(t);const i=aa(n);i.O_()&&i.X_&&i.ea(t.mutations)}function GE(n){return is(n)&&!aa(n).x_()&&n.Ta.length>0}function YE(n){aa(n).start()}async function Oj(n){aa(n).ra()}async function Vj(n){const t=aa(n);for(const i of n.Ta)t.ea(i.mutations)}async function kj(n,t,i){const a=n.Ta.shift(),o=yg.from(a,t,i);await HE(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await ad(n)}async function Pj(n,t){t&&aa(n).X_&&await(async function(a,o){if((function(d){return x3(d)&&d!==it.ABORTED})(o.code)){const u=a.Ta.shift();aa(a).B_(),await HE(a,(()=>a.remoteSyncer.rejectFailedWrite(u.batchId,o))),await ad(a)}})(n,t),GE(n)&&YE(n)}async function Yv(n,t){const i=It(n);i.asyncQueue.verifyOperationInProgress(),pt(Ja,"RemoteStore received new credentials");const a=is(i);i.Ea.add(3),await xu(i),a&&i.Ra.set("Unknown"),await i.remoteSyncer.handleCredentialChange(t),i.Ea.delete(3),await rd(i)}async function Uj(n,t){const i=It(n);t?(i.Ea.delete(2),await rd(i)):t||(i.Ea.add(2),await xu(i),i.Ra.set("Unknown"))}function Io(n){return n.ma||(n.ma=(function(i,a,o){const u=It(i);return u.sa(),new wj(a,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(n.datastore,n.asyncQueue,{Xo:Ij.bind(null,n),t_:jj.bind(null,n),r_:Cj.bind(null,n),H_:Dj.bind(null,n)}),n.da.push((async t=>{t?(n.ma.B_(),Rg(n)?Ag(n):n.Ra.set("Unknown")):(await n.ma.stop(),KE(n))}))),n.ma}function aa(n){return n.fa||(n.fa=(function(i,a,o){const u=It(i);return u.sa(),new bj(a,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:Oj.bind(null,n),r_:Pj.bind(null,n),ta:Vj.bind(null,n),na:kj.bind(null,n)}),n.da.push((async t=>{t?(n.fa.B_(),await ad(n)):(await n.fa.stop(),n.Ta.length>0&&(pt(Ja,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(t,i,a,o,u){this.asyncQueue=t,this.timerId=i,this.targetTimeMs=a,this.op=o,this.removalCallback=u,this.deferred=new ir,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((d=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,i,a,o,u){const d=Date.now()+a,m=new Ig(t,i,d,o,u);return m.start(a),m}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ft(it.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jg(n,t){if(lr("AsyncQueue",`${t}: ${n}`),Ao(n))return new ft(it.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{static emptySet(t){return new io(t.comparator)}constructor(t){this.comparator=t?(i,a)=>t(i,a)||vt.comparator(i.key,a.key):(i,a)=>vt.comparator(i.key,a.key),this.keyedMap=zl(),this.sortedSet=new me(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const i=this.keyedMap.get(t);return i?this.sortedSet.indexOf(i):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((i,a)=>(t(i),!1)))}add(t){const i=this.delete(t.key);return i.copy(i.keyedMap.insert(t.key,t),i.sortedSet.insert(t,null))}delete(t){const i=this.get(t);return i?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(i)):this}isEqual(t){if(!(t instanceof io)||this.size!==t.size)return!1;const i=this.sortedSet.getIterator(),a=t.sortedSet.getIterator();for(;i.hasNext();){const o=i.getNext().key,u=a.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const t=[];return this.forEach((i=>{t.push(i.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Qv{constructor(){this.ga=new me(vt.comparator)}track(t){const i=t.doc.key,a=this.ga.get(i);a?t.type!==0&&a.type===3?this.ga=this.ga.insert(i,t):t.type===3&&a.type!==1?this.ga=this.ga.insert(i,{type:a.type,doc:t.doc}):t.type===2&&a.type===2?this.ga=this.ga.insert(i,{type:2,doc:t.doc}):t.type===2&&a.type===0?this.ga=this.ga.insert(i,{type:0,doc:t.doc}):t.type===1&&a.type===0?this.ga=this.ga.remove(i):t.type===1&&a.type===2?this.ga=this.ga.insert(i,{type:1,doc:a.doc}):t.type===0&&a.type===1?this.ga=this.ga.insert(i,{type:2,doc:t.doc}):bt(63341,{Rt:t,pa:a}):this.ga=this.ga.insert(i,t)}ya(){const t=[];return this.ga.inorderTraversal(((i,a)=>{t.push(a)})),t}}class go{constructor(t,i,a,o,u,d,m,p,g){this.query=t,this.docs=i,this.oldDocs=a,this.docChanges=o,this.mutatedKeys=u,this.fromCache=d,this.syncStateChanged=m,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(t,i,a,o,u){const d=[];return i.forEach((m=>{d.push({type:0,doc:m})})),new go(t,i,io.emptySet(i),d,a,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Zh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const i=this.docChanges,a=t.docChanges;if(i.length!==a.length)return!1;for(let o=0;o<i.length;o++)if(i[o].type!==a[o].type||!i[o].doc.isEqual(a[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lj{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class zj{constructor(){this.queries=Xv(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(i,a){const o=It(i),u=o.queries;o.queries=Xv(),u.forEach(((d,m)=>{for(const p of m.Sa)p.onError(a)}))})(this,new ft(it.ABORTED,"Firestore shutting down"))}}function Xv(){return new ns((n=>fE(n)),Zh)}async function QE(n,t){const i=It(n);let a=3;const o=t.query;let u=i.queries.get(o);u?!u.ba()&&t.Da()&&(a=2):(u=new Lj,a=t.Da()?0:1);try{switch(a){case 0:u.wa=await i.onListen(o,!0);break;case 1:u.wa=await i.onListen(o,!1);break;case 2:await i.onFirstRemoteStoreListen(o)}}catch(d){const m=jg(d,`Initialization of query '${Zs(t.query)}' failed`);return void t.onError(m)}i.queries.set(o,u),u.Sa.push(t),t.va(i.onlineState),u.wa&&t.Fa(u.wa)&&Cg(i)}async function XE(n,t){const i=It(n),a=t.query;let o=3;const u=i.queries.get(a);if(u){const d=u.Sa.indexOf(t);d>=0&&(u.Sa.splice(d,1),u.Sa.length===0?o=t.Da()?0:1:!u.ba()&&t.Da()&&(o=2))}switch(o){case 0:return i.queries.delete(a),i.onUnlisten(a,!0);case 1:return i.queries.delete(a),i.onUnlisten(a,!1);case 2:return i.onLastRemoteStoreUnlisten(a);default:return}}function $j(n,t){const i=It(n);let a=!1;for(const o of t){const u=o.query,d=i.queries.get(u);if(d){for(const m of d.Sa)m.Fa(o)&&(a=!0);d.wa=o}}a&&Cg(i)}function Bj(n,t,i){const a=It(n),o=a.queries.get(t);if(o)for(const u of o.Sa)u.onError(i);a.queries.delete(t)}function Cg(n){n.Ca.forEach((t=>{t.next()}))}var Rm,Wv;(Wv=Rm||(Rm={})).Ma="default",Wv.Cache="cache";class WE{constructor(t,i,a){this.query=t,this.xa=i,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=a||{}}Fa(t){if(!this.options.includeMetadataChanges){const a=[];for(const o of t.docChanges)o.type!==3&&a.push(o);t=new go(t.query,t.docs,t.oldDocs,a,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let i=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),i=!0):this.La(t,this.onlineState)&&(this.ka(t),i=!0),this.Na=t,i}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let i=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),i=!0),i}La(t,i){if(!t.fromCache||!this.Da())return!0;const a=i!=="Offline";return(!this.options.qa||!a)&&(!t.docs.isEmpty()||t.hasCachedResults||i==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const i=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!i)&&this.options.includeMetadataChanges===!0}ka(t){t=go.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Rm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(t){this.key=t}}class JE{constructor(t){this.key=t}}class Fj{constructor(t,i){this.query=t,this.Ya=i,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ut(),this.mutatedKeys=Ut(),this.eu=pE(t),this.tu=new io(this.eu)}get nu(){return this.Ya}ru(t,i){const a=i?i.iu:new Qv,o=i?i.tu:this.tu;let u=i?i.mutatedKeys:this.mutatedKeys,d=o,m=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,g=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal(((v,w)=>{const T=o.get(v),R=Jh(this.query,w)?w:null,M=!!T&&this.mutatedKeys.has(T.key),L=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let U=!1;T&&R?T.data.isEqual(R.data)?M!==L&&(a.track({type:3,doc:R}),U=!0):this.su(T,R)||(a.track({type:2,doc:R}),U=!0,(p&&this.eu(R,p)>0||g&&this.eu(R,g)<0)&&(m=!0)):!T&&R?(a.track({type:0,doc:R}),U=!0):T&&!R&&(a.track({type:1,doc:T}),U=!0,(p||g)&&(m=!0)),U&&(R?(d=d.add(R),u=L?u.add(v):u.delete(v)):(d=d.delete(v),u=u.delete(v)))})),this.query.limit!==null)for(;d.size>this.query.limit;){const v=this.query.limitType==="F"?d.last():d.first();d=d.delete(v.key),u=u.delete(v.key),a.track({type:1,doc:v})}return{tu:d,iu:a,Cs:m,mutatedKeys:u}}su(t,i){return t.hasLocalMutations&&i.hasCommittedMutations&&!i.hasLocalMutations}applyChanges(t,i,a,o){const u=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const d=t.iu.ya();d.sort(((v,w)=>(function(R,M){const L=U=>{switch(U){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return bt(20277,{Rt:U})}};return L(R)-L(M)})(v.type,w.type)||this.eu(v.doc,w.doc))),this.ou(a),o=o??!1;const m=i&&!o?this._u():[],p=this.Xa.size===0&&this.current&&!o?1:0,g=p!==this.Za;return this.Za=p,d.length!==0||g?{snapshot:new go(this.query,t.tu,u,d,t.mutatedKeys,p===0,g,!1,!!a&&a.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Qv,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((i=>this.Ya=this.Ya.add(i))),t.modifiedDocuments.forEach((i=>{})),t.removedDocuments.forEach((i=>this.Ya=this.Ya.delete(i))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=Ut(),this.tu.forEach((a=>{this.uu(a.key)&&(this.Xa=this.Xa.add(a.key))}));const i=[];return t.forEach((a=>{this.Xa.has(a)||i.push(new JE(a))})),this.Xa.forEach((a=>{t.has(a)||i.push(new ZE(a))})),i}cu(t){this.Ya=t.Qs,this.Xa=Ut();const i=this.ru(t.documents);return this.applyChanges(i,!0)}lu(){return go.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Dg="SyncEngine";class qj{constructor(t,i,a){this.query=t,this.targetId=i,this.view=a}}class Kj{constructor(t){this.key=t,this.hu=!1}}class Hj{constructor(t,i,a,o,u,d){this.localStore=t,this.remoteStore=i,this.eventManager=a,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=d,this.Pu={},this.Tu=new ns((m=>fE(m)),Zh),this.Iu=new Map,this.Eu=new Set,this.du=new me(vt.comparator),this.Au=new Map,this.Ru=new _g,this.Vu={},this.mu=new Map,this.fu=mo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Gj(n,t,i=!0){const a=aw(n);let o;const u=a.Tu.get(t);return u?(a.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await tw(a,t,i,!0),o}async function Yj(n,t){const i=aw(n);await tw(i,t,!0,!1)}async function tw(n,t,i,a){const o=await pj(n.localStore,Ti(t)),u=o.targetId,d=n.sharedClientState.addLocalQueryTarget(u,i);let m;return a&&(m=await Qj(n,t,u,d==="current",o.resumeToken)),n.isPrimaryClient&&i&&FE(n.remoteStore,o),m}async function Qj(n,t,i,a,o){n.pu=(w,T,R)=>(async function(L,U,K,X){let tt=U.view.ru(K);tt.Cs&&(tt=await Fv(L.localStore,U.query,!1).then((({documents:j})=>U.view.ru(j,tt))));const lt=X&&X.targetChanges.get(U.targetId),Y=X&&X.targetMismatches.get(U.targetId)!=null,ot=U.view.applyChanges(tt,L.isPrimaryClient,lt,Y);return Jv(L,U.targetId,ot.au),ot.snapshot})(n,w,T,R);const u=await Fv(n.localStore,t,!0),d=new Fj(t,u.Qs),m=d.ru(u.documents),p=yu.createSynthesizedTargetChangeForCurrentChange(i,a&&n.onlineState!=="Offline",o),g=d.applyChanges(m,n.isPrimaryClient,p);Jv(n,i,g.au);const v=new qj(t,i,d);return n.Tu.set(t,v),n.Iu.has(i)?n.Iu.get(i).push(t):n.Iu.set(i,[t]),g.snapshot}async function Xj(n,t,i){const a=It(n),o=a.Tu.get(t),u=a.Iu.get(o.targetId);if(u.length>1)return a.Iu.set(o.targetId,u.filter((d=>!Zh(d,t)))),void a.Tu.delete(t);a.isPrimaryClient?(a.sharedClientState.removeLocalQueryTarget(o.targetId),a.sharedClientState.isActiveQueryTarget(o.targetId)||await Sm(a.localStore,o.targetId,!1).then((()=>{a.sharedClientState.clearQueryState(o.targetId),i&&Tg(a.remoteStore,o.targetId),Im(a,o.targetId)})).catch(So)):(Im(a,o.targetId),await Sm(a.localStore,o.targetId,!0))}async function Wj(n,t){const i=It(n),a=i.Tu.get(t),o=i.Iu.get(a.targetId);i.isPrimaryClient&&o.length===1&&(i.sharedClientState.removeLocalQueryTarget(a.targetId),Tg(i.remoteStore,a.targetId))}async function Zj(n,t,i){const a=aC(n);try{const o=await(function(d,m){const p=It(d),g=ue.now(),v=m.reduce(((R,M)=>R.add(M.key)),Ut());let w,T;return p.persistence.runTransaction("Locally write mutations","readwrite",(R=>{let M=cr(),L=Ut();return p.Ns.getEntries(R,v).next((U=>{M=U,M.forEach(((K,X)=>{X.isValidDocument()||(L=L.add(K))}))})).next((()=>p.localDocuments.getOverlayedDocuments(R,M))).next((U=>{w=U;const K=[];for(const X of m){const tt=f3(X,w.get(X.key).overlayedDocument);tt!=null&&K.push(new la(X.key,tt,aE(tt.value.mapValue),Si.exists(!0)))}return p.mutationQueue.addMutationBatch(R,g,K,m)})).next((U=>{T=U;const K=U.applyToLocalDocumentSet(w,L);return p.documentOverlayCache.saveOverlays(R,U.batchId,K)}))})).then((()=>({batchId:T.batchId,changes:gE(w)})))})(a.localStore,t);a.sharedClientState.addPendingMutation(o.batchId),(function(d,m,p){let g=d.Vu[d.currentUser.toKey()];g||(g=new me(Pt)),g=g.insert(m,p),d.Vu[d.currentUser.toKey()]=g})(a,o.batchId,i),await vu(a,o.changes),await ad(a.remoteStore)}catch(o){const u=jg(o,"Failed to persist write");i.reject(u)}}async function ew(n,t){const i=It(n);try{const a=await hj(i.localStore,t);t.targetChanges.forEach(((o,u)=>{const d=i.Au.get(u);d&&(Yt(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?d.hu=!0:o.modifiedDocuments.size>0?Yt(d.hu,14607):o.removedDocuments.size>0&&(Yt(d.hu,42227),d.hu=!1))})),await vu(i,a,t)}catch(a){await So(a)}}function Zv(n,t,i){const a=It(n);if(a.isPrimaryClient&&i===0||!a.isPrimaryClient&&i===1){const o=[];a.Tu.forEach(((u,d)=>{const m=d.view.va(t);m.snapshot&&o.push(m.snapshot)})),(function(d,m){const p=It(d);p.onlineState=m;let g=!1;p.queries.forEach(((v,w)=>{for(const T of w.Sa)T.va(m)&&(g=!0)})),g&&Cg(p)})(a.eventManager,t),o.length&&a.Pu.H_(o),a.onlineState=t,a.isPrimaryClient&&a.sharedClientState.setOnlineState(t)}}async function Jj(n,t,i){const a=It(n);a.sharedClientState.updateQueryState(t,"rejected",i);const o=a.Au.get(t),u=o&&o.key;if(u){let d=new me(vt.comparator);d=d.insert(u,on.newNoDocument(u,At.min()));const m=Ut().add(u),p=new nd(At.min(),new Map,new me(Pt),d,m);await ew(a,p),a.du=a.du.remove(u),a.Au.delete(t),Ng(a)}else await Sm(a.localStore,t,!1).then((()=>Im(a,t,i))).catch(So)}async function tC(n,t){const i=It(n),a=t.batch.batchId;try{const o=await cj(i.localStore,t);iw(i,a,null),nw(i,a),i.sharedClientState.updateMutationState(a,"acknowledged"),await vu(i,o)}catch(o){await So(o)}}async function eC(n,t,i){const a=It(n);try{const o=await(function(d,m){const p=It(d);return p.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let v;return p.mutationQueue.lookupMutationBatch(g,m).next((w=>(Yt(w!==null,37113),v=w.keys(),p.mutationQueue.removeMutationBatch(g,w)))).next((()=>p.mutationQueue.performConsistencyCheck(g))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(g,v,m))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v))).next((()=>p.localDocuments.getDocuments(g,v)))}))})(a.localStore,t);iw(a,t,i),nw(a,t),a.sharedClientState.updateMutationState(t,"rejected",i),await vu(a,o)}catch(o){await So(o)}}function nw(n,t){(n.mu.get(t)||[]).forEach((i=>{i.resolve()})),n.mu.delete(t)}function iw(n,t,i){const a=It(n);let o=a.Vu[a.currentUser.toKey()];if(o){const u=o.get(t);u&&(i?u.reject(i):u.resolve(),o=o.remove(t)),a.Vu[a.currentUser.toKey()]=o}}function Im(n,t,i=null){n.sharedClientState.removeLocalQueryTarget(t);for(const a of n.Iu.get(t))n.Tu.delete(a),i&&n.Pu.yu(a,i);n.Iu.delete(t),n.isPrimaryClient&&n.Ru.jr(t).forEach((a=>{n.Ru.containsKey(a)||rw(n,a)}))}function rw(n,t){n.Eu.delete(t.path.canonicalString());const i=n.du.get(t);i!==null&&(Tg(n.remoteStore,i),n.du=n.du.remove(t),n.Au.delete(i),Ng(n))}function Jv(n,t,i){for(const a of i)a instanceof ZE?(n.Ru.addReference(a.key,t),nC(n,a)):a instanceof JE?(pt(Dg,"Document no longer in limbo: "+a.key),n.Ru.removeReference(a.key,t),n.Ru.containsKey(a.key)||rw(n,a.key)):bt(19791,{wu:a})}function nC(n,t){const i=t.key,a=i.path.canonicalString();n.du.get(i)||n.Eu.has(a)||(pt(Dg,"New document in limbo: "+i),n.Eu.add(a),Ng(n))}function Ng(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const i=new vt(ae.fromString(t)),a=n.fu.next();n.Au.set(a,new Kj(i)),n.du=n.du.insert(i,a),FE(n.remoteStore,new Xr(Ti(mg(i.path)),a,"TargetPurposeLimboResolution",Qh.ce))}}async function vu(n,t,i){const a=It(n),o=[],u=[],d=[];a.Tu.isEmpty()||(a.Tu.forEach(((m,p)=>{d.push(a.pu(p,t,i).then((g=>{if((g||i)&&a.isPrimaryClient){const v=g?!g.fromCache:i?.targetChanges.get(p.targetId)?.current;a.sharedClientState.updateQueryState(p.targetId,v?"current":"not-current")}if(g){o.push(g);const v=wg.As(p.targetId,g);u.push(v)}})))})),await Promise.all(d),a.Pu.H_(o),await(async function(p,g){const v=It(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(w=>st.forEach(g,(T=>st.forEach(T.Es,(R=>v.persistence.referenceDelegate.addReference(w,T.targetId,R))).next((()=>st.forEach(T.ds,(R=>v.persistence.referenceDelegate.removeReference(w,T.targetId,R)))))))))}catch(w){if(!Ao(w))throw w;pt(bg,"Failed to update sequence numbers: "+w)}for(const w of g){const T=w.targetId;if(!w.fromCache){const R=v.Ms.get(T),M=R.snapshotVersion,L=R.withLastLimboFreeSnapshotVersion(M);v.Ms=v.Ms.insert(T,L)}}})(a.localStore,u))}async function iC(n,t){const i=It(n);if(!i.currentUser.isEqual(t)){pt(Dg,"User change. New user:",t.toKey());const a=await LE(i.localStore,t);i.currentUser=t,(function(u,d){u.mu.forEach((m=>{m.forEach((p=>{p.reject(new ft(it.CANCELLED,d))}))})),u.mu.clear()})(i,"'waitForPendingWrites' promise is rejected due to a user change."),i.sharedClientState.handleUserChange(t,a.removedBatchIds,a.addedBatchIds),await vu(i,a.Ls)}}function rC(n,t){const i=It(n),a=i.Au.get(t);if(a&&a.hu)return Ut().add(a.key);{let o=Ut();const u=i.Iu.get(t);if(!u)return o;for(const d of u){const m=i.Tu.get(d);o=o.unionWith(m.view.nu)}return o}}function aw(n){const t=It(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=ew.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=rC.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Jj.bind(null,t),t.Pu.H_=$j.bind(null,t.eventManager),t.Pu.yu=Bj.bind(null,t.eventManager),t}function aC(n){const t=It(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=tC.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=eC.bind(null,t),t}class Vh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=id(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,i){return null}Mu(t,i){return null}vu(t){return uj(this.persistence,new sj,t.initialUser,this.serializer)}Cu(t){return new UE(Eg.mi,this.serializer)}Du(t){return new gj}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Vh.provider={build:()=>new Vh};class sC extends Vh{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,i){Yt(this.persistence.referenceDelegate instanceof Mh,46915);const a=this.persistence.referenceDelegate.garbageCollector;return new K3(a,t.asyncQueue,i)}Cu(t){const i=this.cacheSizeBytes!==void 0?xn.withCacheSize(this.cacheSizeBytes):xn.DEFAULT;return new UE((a=>Mh.mi(a,i)),this.serializer)}}class jm{async initialize(t,i){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(i),this.remoteStore=this.createRemoteStore(i),this.eventManager=this.createEventManager(i),this.syncEngine=this.createSyncEngine(i,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>Zv(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=iC.bind(null,this.syncEngine),await Uj(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new zj})()}createDatastore(t){const i=id(t.databaseInfo.databaseId),a=(function(u){return new Ej(u)})(t.databaseInfo);return(function(u,d,m,p){return new Sj(u,d,m,p)})(t.authCredentials,t.appCheckCredentials,a,i)}createRemoteStore(t){return(function(a,o,u,d,m){return new Rj(a,o,u,d,m)})(this.localStore,this.datastore,t.asyncQueue,(i=>Zv(this.syncEngine,i,0)),(function(){return Hv.v()?new Hv:new yj})())}createSyncEngine(t,i){return(function(o,u,d,m,p,g,v){const w=new Hj(o,u,d,m,p,g);return v&&(w.gu=!0),w})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,i)}async terminate(){await(async function(i){const a=It(i);pt(Ja,"RemoteStore shutting down."),a.Ea.add(5),await xu(a),a.Aa.shutdown(),a.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}jm.provider={build:()=>new jm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class sw{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):lr("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,i){setTimeout((()=>{this.muted||t(i)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa="FirestoreClient";class oC{constructor(t,i,a,o,u){this.authCredentials=t,this.appCheckCredentials=i,this.asyncQueue=a,this.databaseInfo=o,this.user=sn.UNAUTHENTICATED,this.clientId=ug.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(a,(async d=>{pt(sa,"Received user=",d.uid),await this.authCredentialListener(d),this.user=d})),this.appCheckCredentials.start(a,(d=>(pt(sa,"Received new app check token=",d),this.appCheckCredentialListener(d,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ir;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(i){const a=jg(i,"Failed to shutdown persistence");t.reject(a)}})),t.promise}}async function kp(n,t){n.asyncQueue.verifyOperationInProgress(),pt(sa,"Initializing OfflineComponentProvider");const i=n.configuration;await t.initialize(i);let a=i.initialUser;n.setCredentialChangeListener((async o=>{a.isEqual(o)||(await LE(t.localStore,o),a=o)})),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t}async function t_(n,t){n.asyncQueue.verifyOperationInProgress();const i=await lC(n);pt(sa,"Initializing OnlineComponentProvider"),await t.initialize(i,n.configuration),n.setCredentialChangeListener((a=>Yv(t.remoteStore,a))),n.setAppCheckTokenChangeListener(((a,o)=>Yv(t.remoteStore,o))),n._onlineComponents=t}async function lC(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){pt(sa,"Using user provided OfflineComponentProvider");try{await kp(n,n._uninitializedComponentsProvider._offline)}catch(t){const i=t;if(!(function(o){return o.name==="FirebaseError"?o.code===it.FAILED_PRECONDITION||o.code===it.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(i))throw i;co("Error using user provided cache. Falling back to memory cache: "+i),await kp(n,new Vh)}}else pt(sa,"Using default OfflineComponentProvider"),await kp(n,new sC(void 0));return n._offlineComponents}async function ow(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(pt(sa,"Using user provided OnlineComponentProvider"),await t_(n,n._uninitializedComponentsProvider._online)):(pt(sa,"Using default OnlineComponentProvider"),await t_(n,new jm))),n._onlineComponents}function uC(n){return ow(n).then((t=>t.syncEngine))}async function lw(n){const t=await ow(n),i=t.eventManager;return i.onListen=Gj.bind(null,t.syncEngine),i.onUnlisten=Xj.bind(null,t.syncEngine),i.onFirstRemoteStoreListen=Yj.bind(null,t.syncEngine),i.onLastRemoteStoreUnlisten=Wj.bind(null,t.syncEngine),i}function cC(n,t,i={}){const a=new ir;return n.asyncQueue.enqueueAndForget((async()=>(function(u,d,m,p,g){const v=new sw({next:T=>{v.Nu(),d.enqueueAndForget((()=>XE(u,w)));const R=T.docs.has(m);!R&&T.fromCache?g.reject(new ft(it.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&T.fromCache&&p&&p.source==="server"?g.reject(new ft(it.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(T)},error:T=>g.reject(T)}),w=new WE(mg(m.path),v,{includeMetadataChanges:!0,qa:!0});return QE(u,w)})(await lw(n),n.asyncQueue,t,i,a))),a.promise}function hC(n,t,i={}){const a=new ir;return n.asyncQueue.enqueueAndForget((async()=>(function(u,d,m,p,g){const v=new sw({next:T=>{v.Nu(),d.enqueueAndForget((()=>XE(u,w))),T.fromCache&&p.source==="server"?g.reject(new ft(it.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(T)},error:T=>g.reject(T)}),w=new WE(m,v,{includeMetadataChanges:!0,qa:!0});return QE(u,w)})(await lw(n),n.asyncQueue,t,i,a))),a.promise}/**
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
 */function uw(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw="firestore.googleapis.com",n_=!0;class i_{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new ft(it.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=cw,this.ssl=n_}else this.host=t.host,this.ssl=t.ssl??n_;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=PE;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<F3)throw new ft(it.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}RI("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=uw(t.experimentalLongPollingOptions??{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new ft(it.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new ft(it.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new ft(it.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(a,o){return a.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class sd{constructor(t,i,a,o){this._authCredentials=t,this._appCheckCredentials=i,this._databaseId=a,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new i_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ft(it.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new ft(it.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new i_(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(a){if(!a)return new yI;switch(a.type){case"firstParty":return new EI(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new ft(it.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(i){const a=e_.get(i);a&&(pt("ComponentProvider","Removing Datastore"),e_.delete(i),a.terminate())})(this),Promise.resolve()}}function dC(n,t,i,a={}){n=ur(n,sd);const o=ag(t),u=n._getSettings(),d={...u,emulatorOptions:n._getEmulatorOptions()},m=`${t}:${i}`;o&&(qR(`https://${m}`),YR("Firestore",!0)),u.host!==cw&&u.host!==m&&co("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...u,host:m,ssl:o,emulatorOptions:a};if(!Sh(p,d)&&(n._setSettings(p),a.mockUserToken)){let g,v;if(typeof a.mockUserToken=="string")g=a.mockUserToken,v=sn.MOCK_USER;else{g=KR(a.mockUserToken,n._app?.options.projectId);const w=a.mockUserToken.sub||a.mockUserToken.user_id;if(!w)throw new ft(it.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new sn(w)}n._authCredentials=new xI(new G2(g,v))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(t,i,a){this.converter=i,this._query=a,this.type="query",this.firestore=t}withConverter(t){return new rs(this.firestore,t,this._query)}}class Ae{constructor(t,i,a){this.converter=i,this._key=a,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ta(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ae(this.firestore,t,this._key)}toJSON(){return{type:Ae._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,i,a){if(mu(i,Ae._jsonSchema))return new Ae(t,a||null,new vt(ae.fromString(i.referencePath)))}}Ae._jsonSchemaVersion="firestore/documentReference/1.0",Ae._jsonSchema={type:Ne("string",Ae._jsonSchemaVersion),referencePath:Ne("string")};class ta extends rs{constructor(t,i,a){super(t,i,mg(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ae(this.firestore,null,new vt(t))}withConverter(t){return new ta(this.firestore,t,this._path)}}function yh(n,t,...i){if(n=sr(n),Y2("collection","path",t),n instanceof sd){const a=ae.fromString(t,...i);return gv(a),new ta(n,null,a)}{if(!(n instanceof Ae||n instanceof ta))throw new ft(it.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=n._path.child(ae.fromString(t,...i));return gv(a),new ta(n.firestore,null,a)}}function Xl(n,t,...i){if(n=sr(n),arguments.length===1&&(t=ug.newId()),Y2("doc","path",t),n instanceof sd){const a=ae.fromString(t,...i);return mv(a),new Ae(n,null,new vt(a))}{if(!(n instanceof Ae||n instanceof ta))throw new ft(it.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=n._path.child(ae.fromString(t,...i));return mv(a),new Ae(n.firestore,n instanceof ta?n.converter:null,new vt(a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_="AsyncQueue";class a_{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new $E(this,"async_queue_retry"),this._c=()=>{const a=Vp();a&&pt(r_,"Visibility state changed to "+a.visibilityState),this.M_.w_()},this.ac=t;const i=Vp();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const i=Vp();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const i=new ir;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(i.resolve,i.reject),i.promise))).then((()=>i.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!Ao(t))throw t;pt(r_,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const i=this.ac.then((()=>(this.rc=!0,t().catch((a=>{throw this.nc=a,this.rc=!1,lr("INTERNAL UNHANDLED ERROR: ",s_(a)),a})).then((a=>(this.rc=!1,a))))));return this.ac=i,i}enqueueAfterDelay(t,i,a){this.uc(),this.oc.indexOf(t)>-1&&(i=0);const o=Ig.createAndSchedule(this,t,i,a,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&bt(47125,{Pc:s_(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const i of this.tc)if(i.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((i,a)=>i.targetTimeMs-a.targetTimeMs));for(const i of this.tc)if(i.skipDelay(),t!=="all"&&i.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const i=this.tc.indexOf(t);this.tc.splice(i,1)}}function s_(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class _u extends sd{constructor(t,i,a,o){super(t,i,a,o),this.type="firestore",this._queue=new a_,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new a_(t),this._firestoreClient=void 0,await t}}}function hw(n,t){const i=typeof n=="object"?n:rI(),a=typeof n=="string"?n:Ih,o=J6(i,"firestore").getImmediate({identifier:a});if(!o._initialized){const u=BR("firestore");u&&dC(o,...u)}return o}function Mg(n){if(n._terminated)throw new ft(it.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||fC(n),n._firestoreClient}function fC(n){const t=n._freezeSettings(),i=(function(o,u,d,m){return new UI(o,u,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,uw(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,t);n._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new oC(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&(function(o){const u=o?._online.build();return{_offline:o?._offline.build(u),_online:u}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Fn(Je.fromBase64String(t))}catch(i){throw new ft(it.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(t){return new Fn(Je.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Fn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(mu(t,Fn._jsonSchema))return Fn.fromBase64String(t.bytes)}}Fn._jsonSchemaVersion="firestore/bytes/1.0",Fn._jsonSchema={type:Ne("string",Fn._jsonSchemaVersion),bytes:Ne("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(...t){for(let i=0;i<t.length;++i)if(t[i].length===0)throw new ft(it.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(t,i){if(!isFinite(t)||t<-90||t>90)throw new ft(it.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(i)||i<-180||i>180)throw new ft(it.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+i);this._lat=t,this._long=i}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Pt(this._lat,t._lat)||Pt(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ri._jsonSchemaVersion}}static fromJSON(t){if(mu(t,Ri._jsonSchema))return new Ri(t.latitude,t.longitude)}}Ri._jsonSchemaVersion="firestore/geoPoint/1.0",Ri._jsonSchema={type:Ne("string",Ri._jsonSchemaVersion),latitude:Ne("number"),longitude:Ne("number")};/**
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
 */class Ii{constructor(t){this._values=(t||[]).map((i=>i))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(a,o){if(a.length!==o.length)return!1;for(let u=0;u<a.length;++u)if(a[u]!==o[u])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Ii._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(mu(t,Ii._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((i=>typeof i=="number")))return new Ii(t.vectorValues);throw new ft(it.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ii._jsonSchemaVersion="firestore/vectorValue/1.0",Ii._jsonSchema={type:Ne("string",Ii._jsonSchemaVersion),vectorValues:Ne("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC=/^__.*__$/;class mC{constructor(t,i,a){this.data=t,this.fieldMask=i,this.fieldTransforms=a}toMutation(t,i){return this.fieldMask!==null?new la(t,this.data,this.fieldMask,i,this.fieldTransforms):new gu(t,this.data,i,this.fieldTransforms)}}class dw{constructor(t,i,a){this.data=t,this.fieldMask=i,this.fieldTransforms=a}toMutation(t,i){return new la(t,this.data,this.fieldMask,i,this.fieldTransforms)}}function fw(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw bt(40011,{Ac:n})}}class Og{constructor(t,i,a,o,u,d){this.settings=t,this.databaseId=i,this.serializer=a,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=d||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new Og({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const i=this.path?.child(t),a=this.Vc({path:i,fc:!1});return a.gc(t),a}yc(t){const i=this.path?.child(t),a=this.Vc({path:i,fc:!1});return a.Rc(),a}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return kh(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((i=>t.isPrefixOf(i)))!==void 0||this.fieldTransforms.find((i=>t.isPrefixOf(i.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(fw(this.Ac)&&pC.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class gC{constructor(t,i,a){this.databaseId=t,this.ignoreUndefinedProperties=i,this.serializer=a||id(t)}Cc(t,i,a,o=!1){return new Og({Ac:t,methodName:i,Dc:a,path:Ze.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Vg(n){const t=n._freezeSettings(),i=id(n._databaseId);return new gC(n._databaseId,!!t.ignoreUndefinedProperties,i)}function yC(n,t,i,a,o,u={}){const d=n.Cc(u.merge||u.mergeFields?2:0,t,i,o);Pg("Data must be an object, but it was:",d,a);const m=pw(a,d);let p,g;if(u.merge)p=new Cn(d.fieldMask),g=d.fieldTransforms;else if(u.mergeFields){const v=[];for(const w of u.mergeFields){const T=Cm(t,w,i);if(!d.contains(T))throw new ft(it.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);gw(v,T)||v.push(T)}p=new Cn(v),g=d.fieldTransforms.filter((w=>p.covers(w.field)))}else p=null,g=d.fieldTransforms;return new mC(new vn(m),p,g)}class ud extends ld{_toFieldTransform(t){if(t.Ac!==2)throw t.Ac===1?t.Sc(`${this._methodName}() can only appear at the top level of your update data`):t.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof ud}}class kg extends ld{constructor(t,i){super(t),this.Fc=i}_toFieldTransform(t){const i=new du(t.serializer,vE(t.serializer,this.Fc));return new u3(t.path,i)}isEqual(t){return t instanceof kg&&this.Fc===t.Fc}}function xC(n,t,i,a){const o=n.Cc(1,t,i);Pg("Data must be an object, but it was:",o,a);const u=[],d=vn.empty();oa(a,((p,g)=>{const v=Ug(t,p,i);g=sr(g);const w=o.yc(v);if(g instanceof ud)u.push(v);else{const T=Eu(g,w);T!=null&&(u.push(v),d.set(v,T))}}));const m=new Cn(u);return new dw(d,m,o.fieldTransforms)}function vC(n,t,i,a,o,u){const d=n.Cc(1,t,i),m=[Cm(t,a,i)],p=[o];if(u.length%2!=0)throw new ft(it.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<u.length;T+=2)m.push(Cm(t,u[T])),p.push(u[T+1]);const g=[],v=vn.empty();for(let T=m.length-1;T>=0;--T)if(!gw(g,m[T])){const R=m[T];let M=p[T];M=sr(M);const L=d.yc(R);if(M instanceof ud)g.push(R);else{const U=Eu(M,L);U!=null&&(g.push(R),v.set(R,U))}}const w=new Cn(g);return new dw(v,w,d.fieldTransforms)}function _C(n,t,i,a=!1){return Eu(i,n.Cc(a?4:3,t))}function Eu(n,t){if(mw(n=sr(n)))return Pg("Unsupported field value:",t,n),pw(n,t);if(n instanceof ld)return(function(a,o){if(!fw(o.Ac))throw o.Sc(`${a._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${a._methodName}() is not currently supported inside arrays`);const u=a._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(a,o){const u=[];let d=0;for(const m of a){let p=Eu(m,o.wc(d));p==null&&(p={nullValue:"NULL_VALUE"}),u.push(p),d++}return{arrayValue:{values:u}}})(n,t)}return(function(a,o){if((a=sr(a))===null)return{nullValue:"NULL_VALUE"};if(typeof a=="number")return vE(o.serializer,a);if(typeof a=="boolean")return{booleanValue:a};if(typeof a=="string")return{stringValue:a};if(a instanceof Date){const u=ue.fromDate(a);return{timestampValue:Nh(o.serializer,u)}}if(a instanceof ue){const u=new ue(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:Nh(o.serializer,u)}}if(a instanceof Ri)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof Fn)return{bytesValue:CE(o.serializer,a._byteString)};if(a instanceof Ae){const u=o.databaseId,d=a.firestore._databaseId;if(!d.isEqual(u))throw o.Sc(`Document reference is for database ${d.projectId}/${d.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:vg(a.firestore._databaseId||o.databaseId,a._key.path)}}if(a instanceof Ii)return(function(d,m){return{mapValue:{fields:{[iE]:{stringValue:rE},[jh]:{arrayValue:{values:d.toArray().map((g=>{if(typeof g!="number")throw m.Sc("VectorValues must only contain numeric values.");return gg(m.serializer,g)}))}}}}}})(a,o);throw o.Sc(`Unsupported field value: ${Yh(a)}`)})(n,t)}function pw(n,t){const i={};return W2(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):oa(n,((a,o)=>{const u=Eu(o,t.mc(a));u!=null&&(i[a]=u)})),{mapValue:{fields:i}}}function mw(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ue||n instanceof Ri||n instanceof Fn||n instanceof Ae||n instanceof ld||n instanceof Ii)}function Pg(n,t,i){if(!mw(i)||!Q2(i)){const a=Yh(i);throw a==="an object"?t.Sc(n+" a custom object"):t.Sc(n+" "+a)}}function Cm(n,t,i){if((t=sr(t))instanceof od)return t._internalPath;if(typeof t=="string")return Ug(n,t);throw kh("Field path arguments must be of type string or ",n,!1,void 0,i)}const EC=new RegExp("[~\\*/\\[\\]]");function Ug(n,t,i){if(t.search(EC)>=0)throw kh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,i);try{return new od(...t.split("."))._internalPath}catch{throw kh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,i)}}function kh(n,t,i,a,o){const u=a&&!a.isEmpty(),d=o!==void 0;let m=`Function ${t}() called with invalid data`;i&&(m+=" (via `toFirestore()`)"),m+=". ";let p="";return(u||d)&&(p+=" (found",u&&(p+=` in field ${a}`),d&&(p+=` in document ${o}`),p+=")"),new ft(it.INVALID_ARGUMENT,m+n+p)}function gw(n,t){return n.some((i=>i.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(t,i,a,o,u){this._firestore=t,this._userDataWriter=i,this._key=a,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new Ae(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new wC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const i=this._document.data.field(Lg("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i)}}}class wC extends yw{data(){return super.data()}}function Lg(n,t){return typeof t=="string"?Ug(n,t):t instanceof od?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bC(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ft(it.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class zg{}class xw extends zg{}function o_(n,t,...i){let a=[];t instanceof zg&&a.push(t),a=a.concat(i),(function(u){const d=u.filter((p=>p instanceof Bg)).length,m=u.filter((p=>p instanceof $g)).length;if(d>1||d>0&&m>0)throw new ft(it.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(a);for(const o of a)n=o._apply(n);return n}class $g extends xw{constructor(t,i,a){super(),this._field=t,this._op=i,this._value=a,this.type="where"}static _create(t,i,a){return new $g(t,i,a)}_apply(t){const i=this._parse(t);return vw(t._query,i),new rs(t.firestore,t.converter,vm(t._query,i))}_parse(t){const i=Vg(t.firestore);return(function(u,d,m,p,g,v,w){let T;if(g.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new ft(it.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){c_(w,v);const M=[];for(const L of w)M.push(u_(p,u,L));T={arrayValue:{values:M}}}else T=u_(p,u,w)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||c_(w,v),T=_C(m,d,w,v==="in"||v==="not-in");return De.create(g,v,T)})(t._query,"where",i,t.firestore._databaseId,this._field,this._op,this._value)}}class Bg extends zg{constructor(t,i){super(),this.type=t,this._queryConstraints=i}static _create(t,i){return new Bg(t,i)}_parse(t){const i=this._queryConstraints.map((a=>a._parse(t))).filter((a=>a.getFilters().length>0));return i.length===1?i[0]:ai.create(i,this._getOperator())}_apply(t){const i=this._parse(t);return i.getFilters().length===0?t:((function(o,u){let d=o;const m=u.getFlattenedFilters();for(const p of m)vw(d,p),d=vm(d,p)})(t._query,i),new rs(t.firestore,t.converter,vm(t._query,i)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Fg extends xw{constructor(t,i){super(),this._field=t,this._direction=i,this.type="orderBy"}static _create(t,i){return new Fg(t,i)}_apply(t){const i=(function(o,u,d){if(o.startAt!==null)throw new ft(it.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ft(it.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new uu(u,d)})(t._query,this._field,this._direction);return new rs(t.firestore,t.converter,(function(o,u){const d=o.explicitOrderBy.concat([u]);return new Ro(o.path,o.collectionGroup,d,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(t._query,i))}}function l_(n,t="asc"){const i=t,a=Lg("orderBy",n);return Fg._create(a,i)}function u_(n,t,i){if(typeof(i=sr(i))=="string"){if(i==="")throw new ft(it.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!dE(t)&&i.indexOf("/")!==-1)throw new ft(it.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${i}' contains a '/' character.`);const a=t.path.child(ae.fromString(i));if(!vt.isDocumentKey(a))throw new ft(it.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${a}' is not because it has an odd number of segments (${a.length}).`);return Tv(n,new vt(a))}if(i instanceof Ae)return Tv(n,i._key);throw new ft(it.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Yh(i)}.`)}function c_(n,t){if(!Array.isArray(n)||n.length===0)throw new ft(it.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function vw(n,t){const i=(function(o,u){for(const d of o)for(const m of d.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(i!==null)throw i===t.op?new ft(it.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new ft(it.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${i.toString()}' filters.`)}class TC{convertValue(t,i="none"){switch(ra(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Se(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,i);case 5:return t.stringValue;case 6:return this.convertBytes(ia(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,i);case 11:return this.convertObject(t.mapValue,i);case 10:return this.convertVectorValue(t.mapValue);default:throw bt(62114,{value:t})}}convertObject(t,i){return this.convertObjectMap(t.fields,i)}convertObjectMap(t,i="none"){const a={};return oa(t,((o,u)=>{a[o]=this.convertValue(u,i)})),a}convertVectorValue(t){const i=t.fields?.[jh].arrayValue?.values?.map((a=>Se(a.doubleValue)));return new Ii(i)}convertGeoPoint(t){return new Ri(Se(t.latitude),Se(t.longitude))}convertArray(t,i){return(t.values||[]).map((a=>this.convertValue(a,i)))}convertServerTimestamp(t,i){switch(i){case"previous":const a=Wh(t);return a==null?null:this.convertValue(a,i);case"estimate":return this.convertTimestamp(su(t));default:return null}}convertTimestamp(t){const i=na(t);return new ue(i.seconds,i.nanos)}convertDocumentKey(t,i){const a=ae.fromString(t);Yt(kE(a),9688,{name:t});const o=new ou(a.get(1),a.get(3)),u=new vt(a.popFirst(5));return o.isEqual(i)||lr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${i.projectId}/${i.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SC(n,t,i){let a;return a=n?i&&(i.merge||i.mergeFields)?n.toFirestore(t,i):n.toFirestore(t):t,a}class Bl{constructor(t,i){this.hasPendingWrites=t,this.fromCache=i}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Wa extends yw{constructor(t,i,a,o,u,d){super(t,i,a,o,d),this._firestore=t,this._firestoreImpl=t,this.metadata=u}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const i=new xh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(i,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,i={}){if(this._document){const a=this._document.data.field(Lg("DocumentSnapshot.get",t));if(a!==null)return this._userDataWriter.convertValue(a,i.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ft(it.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,i={};return i.type=Wa._jsonSchemaVersion,i.bundle="",i.bundleSource="DocumentSnapshot",i.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?i:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),i.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),i)}}Wa._jsonSchemaVersion="firestore/documentSnapshot/1.0",Wa._jsonSchema={type:Ne("string",Wa._jsonSchemaVersion),bundleSource:Ne("string","DocumentSnapshot"),bundleName:Ne("string"),bundle:Ne("string")};class xh extends Wa{data(t={}){return super.data(t)}}class ro{constructor(t,i,a,o){this._firestore=t,this._userDataWriter=i,this._snapshot=o,this.metadata=new Bl(o.hasPendingWrites,o.fromCache),this.query=a}get docs(){const t=[];return this.forEach((i=>t.push(i))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,i){this._snapshot.docs.forEach((a=>{t.call(i,new xh(this._firestore,this._userDataWriter,a.key,a,new Bl(this._snapshot.mutatedKeys.has(a.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const i=!!t.includeMetadataChanges;if(i&&this._snapshot.excludesMetadataChanges)throw new ft(it.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===i||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let d=0;return o._snapshot.docChanges.map((m=>{const p=new xh(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Bl(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:p,oldIndex:-1,newIndex:d++}}))}{let d=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const p=new xh(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Bl(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let g=-1,v=-1;return m.type!==0&&(g=d.indexOf(m.doc.key),d=d.delete(m.doc.key)),m.type!==1&&(d=d.add(m.doc),v=d.indexOf(m.doc.key)),{type:AC(m.type),doc:p,oldIndex:g,newIndex:v}}))}})(this,i),this._cachedChangesIncludeMetadataChanges=i),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ft(it.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=ro._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=ug.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const i=[],a=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(i.push(u._document),a.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function AC(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return bt(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(n){n=ur(n,Ae);const t=ur(n.firestore,_u);return cC(Mg(t),n._key).then((i=>RC(t,n,i)))}ro._jsonSchemaVersion="firestore/querySnapshot/1.0",ro._jsonSchema={type:Ne("string",ro._jsonSchemaVersion),bundleSource:Ne("string","QuerySnapshot"),bundleName:Ne("string"),bundle:Ne("string")};class _w extends TC{constructor(t){super(),this.firestore=t}convertBytes(t){return new Fn(t)}convertReference(t){const i=this.convertDocumentKey(t,this.firestore._databaseId);return new Ae(this.firestore,null,i)}}function Dm(n){n=ur(n,rs);const t=ur(n.firestore,_u),i=Mg(t),a=new _w(t);return bC(n._query),hC(i,n._query).then((o=>new ro(t,a,n,o)))}function qg(n,t,i){n=ur(n,Ae);const a=ur(n.firestore,_u),o=SC(n.converter,t,i);return Ew(a,[yC(Vg(a),"setDoc",n._key,o,n.converter!==null,i).toMutation(n._key,Si.none())])}function Ph(n,t,i,...a){n=ur(n,Ae);const o=ur(n.firestore,_u),u=Vg(o);let d;return d=typeof(t=sr(t))=="string"||t instanceof od?vC(u,"updateDoc",n._key,t,i,a):xC(u,"updateDoc",n._key,t),Ew(o,[d.toMutation(n._key,Si.exists(!0))])}function Ew(n,t){return(function(a,o){const u=new ir;return a.asyncQueue.enqueueAndForget((async()=>Zj(await uC(a),o,u))),u.promise})(Mg(n),t)}function RC(n,t,i){const a=i.docs.get(t._key),o=new _w(n);return new Wa(n,o,t._key,a,new Bl(i.hasPendingWrites,i.fromCache),t.converter)}function Uh(n){return new kg("increment",n)}(function(t,i=!0){(function(o){To=o})(iI),Ah(new nu("firestore",((a,{instanceIdentifier:o,options:u})=>{const d=a.getProvider("app").getImmediate(),m=new _u(new vI(a.getProvider("auth-internal")),new wI(d,a.getProvider("app-check-internal")),(function(g,v){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ft(it.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ou(g.options.projectId,v)})(d,o),d);return u={useFetchStreams:i,...u},m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),no(hv,dv,t),no(hv,dv,"esm2020")})();const IC={apiKey:"AIzaSyAEFzPwTADLzuxWuyk889Jz1cHPsEgLOkQ",authDomain:"tu2025grad.firebaseapp.com",projectId:"tu2025grad",storageBucket:"tu2025grad.firebasestorage.app",messagingSenderId:"553768466639",appId:"1:553768466639:web:7c16f5d6432da7ebc05fba"},jC=sv().length?sv()[0]:og(IC),Wl=hw(jC),h_=40;function ww(n){if(!n)return n;const t="/";if(/^https?:\/\//i.test(n))return n;const i=n.replace(/^\.\.\//,"").replace(/^\//,"");return t+i}const CC=S.div`
  position: relative; background: #fff;
`,DC=S.div`
  padding-left: ${h_}px; padding-right: ${h_}px; display: flex; flex-direction: column;
  @media (max-width: 640px) {
    padding-left: 16px;
    padding-right: 16px;  
 }
`;function NC({children:n}){return y.jsx(CC,{children:y.jsx(DC,{children:n})})}const MC=S.div`
  position: relative;
  min-height: calc(100vh - 200px);
`,OC=S.div`
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
`,VC=S.div`
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
`,d_=eu,bw=ng,kC={"All Projects":null,"AI & Robot":"c0","Edu & Kids":"c1","Health Care":"c2","IT & Tech":"c3",Living:"c4",Mobility:"c5"};function Nm(n){return n.members.map(t=>{const i=bw.find(a=>a.num===t);return i?i.nameKor:""}).filter(Boolean).join(", ")}function PC(n){return n.members.map(t=>{const i=bw.find(a=>a.num===t);return i?ww(i.imgUrl):""}).filter(Boolean)}function UC({list:n,statsById:t}){const i={c0:"A",c1:"E",c2:"H",c3:"I",c4:"L",c5:"M"};return y.jsx(OC,{children:n.map((a,o)=>{const u=Nm(a),d=PC(a),m=String(a.projectNum+1).padStart(3,"0"),g=`${i[a.category]||"A"}${m}`,v=a.projectNum??a.num;return y.jsx(ig,{titleKor:a.titleKor,titleEng:a.titleEng,src:ww(`/projects/${a.projectNum}/thumb.jpg`||`/projects/${a.projectNum}/thumb.png`),nameKor:u,profileImgs:d,docId:v,href:`/work/${g}`,like:t[String(v)]?.like??0,view:t[String(v)]?.view??0},o)})})}function LC(){const[n,t]=St.useState("All Projects"),[i,a]=St.useState("이름순"),[o,u]=St.useState({});St.useEffect(()=>{let p=!0;return(async()=>{try{const g=await Dm(yh(Wl,"works"));if(!p)return;const v={};g.forEach(w=>{const T=w.data()||{};v[String(w.id)]={like:typeof T.like=="number"?T.like:0,view:typeof T.view=="number"?T.view:0}}),u(v)}catch(g){console.error("Failed to load works stats:",g)}})(),()=>{p=!1}},[]);const d=St.useMemo(()=>{const p=kC[n]||null;return p?d_.filter(g=>g.category===p):d_},[n]),m=St.useMemo(()=>{const p=[...d];switch(i){case"이름순":p.sort((g,v)=>Nm(g).localeCompare(Nm(v),"ko"));break;case"좋아요순":p.sort((g,v)=>{const w=String(g.projectNum??g.num),T=String(v.projectNum??v.num),R=o[w]?.like??0;return(o[T]?.like??0)-R});break;case"조회수순":p.sort((g,v)=>{const w=String(g.projectNum??g.num),T=String(v.projectNum??v.num),R=o[w]?.view??0;return(o[T]?.view??0)-R});break;case"팀작우선":p.sort((g,v)=>(v.members.length>1)-(g.members.length>1));break;case"개인작우선":p.sort((g,v)=>(g.members.length>1)-(v.members.length>1));break}return p},[d,i,o]);return y.jsxs(MC,{children:[y.jsx(VC,{children:"Projects"}),y.jsx(j2,{type:"project",onCategoryChange:t,onSortChange:a,sortLabel:i}),y.jsx(NC,{children:y.jsx(UC,{list:m,statsById:o})})]})}const zC=S.div(({height:n,from:t,to:i,position:a,z:o})=>({position:"absolute",left:0,right:0,[a]:-1,height:n,pointerEvents:"none",zIndex:o??0,background:`linear-gradient(180deg, ${t} 0%, ${i} 100%)`}));function Kg({position:n="bottom",from:t,to:i,height:a=240,z:o=0,style:u}){return y.jsx(zC,{position:n,from:t,to:i,height:a,z:o,style:u})}const rr={heroToWhite:{from:"rgba(18,18,18,0)",to:"#FFFFFF",h:80},whiteToBlack:{from:"rgba(255,255,255,0)",to:"#121212",h:160},blackToBlackSoft:{from:"rgba(18,18,18,0)",to:"#121212",h:180}},$C=S.section`
  position: relative; height: 100vh; min-height: 620px; overflow: hidden; background: #121212; z-index: 1;
  @media (max-width: 640px) {
    height: 100vh;
    min-height: 220px;
  }
`,BC=S.div`
  position: absolute; inset: 0;
  /* Video container sits here */
`,FC=S.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
`,qC=S.video`
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
`,HC=S.video`
  width: 100%;
  height: 100%;
  display: block;
`,GC=S.div`
  position: absolute;
  inset: 0;
  background-color: rgba(18, 18, 18, 0.2);
`,YC=S.div`
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
`,f_=S.p`
  margin: 0; color: #FFFFFF; font-family: Pretendard, system-ui; font-size: 16px; line-height: 19.2px;
  @media (max-width: 640px) {
    font-size: 13px;
    line-height: 1.4;
  }
`,QC=S.p`
  margin: 0; color: #FFFFFF; font-family: Pretendard, system-ui; font-weight: 600; font-size: 24px; line-height: 27.6px;
  @media (max-width: 640px) {
    font-size: 17px;
    line-height: 1.3;
  }
`,XC=S.button`
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
`;function WC(){const[n,t]=St.useState(!1),i=St.useRef(null),a="/",o=zh();St.useEffect(()=>()=>{i.current&&clearTimeout(i.current)},[]);const u=()=>{const m=`${typeof window<"u"&&window.innerWidth<640?"projects":"showroom"}`;o(m)};return y.jsxs($C,{"aria-label":"Hero",children:[y.jsxs(BC,{children:[y.jsx(FC,{"aria-hidden":!0,children:y.jsx(qC,{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata",children:y.jsx("source",{src:`${a}video/hero11.mp4`,type:"video/mp4"})})}),y.jsx(KC,{"aria-label":"Hero background video",children:y.jsxs(HC,{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata",onLoadedData:()=>{i.current&&clearTimeout(i.current),i.current=setTimeout(()=>t(!0),13900)},children:[y.jsx("source",{src:`${a}video/hero11.mp4`,type:"video/mp4"}),"Your browser does not support the video tag."]})}),y.jsx(GC,{})]}),y.jsxs(YC,{$visible:n,children:[y.jsxs(f_,{children:["25. 10. 24. FRI~26. SUN",y.jsx("br",{}),"Hongdae Art Center B2"]}),y.jsx(f_,{children:"Department of Design Engineering"}),y.jsxs(QC,{children:["Tech University of Korea",y.jsx("br",{}),"20th Grad Exhibition"]})]}),y.jsxs(XC,{type:"button",onClick:u,"aria-label":"View More",children:[y.jsx("span",{className:"desktop",children:"View More"}),y.jsx("span",{className:"mobile",children:"View Work"})]}),y.jsx(Kg,{position:"bottom",from:rr.heroToWhite.from,to:rr.heroToWhite.to,height:rr.heroToWhite.h,z:0})]})}const p_="/",ZC=S.section`
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  padding-top: 120px;
  padding-bottom: 160px;
  @media (max-width: 640px) {
    padding-top: 32px;
    padding-bottom: 48px;
  }
`,JC=S.div`
  width: 100%;
  max-width: calc(100vw - 80px);
  margin: 0 auto;
  @media (max-width: 640px) {
    max-width: 100%;
    padding: 0 12px;
    box-sizing: border-box;
  }
`,tD=S.div`
  display: flex;
  gap: 94px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 640px) {
    gap: 32px;
  }
`,eD=S.div`
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
`,nD=S.h2`
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
`,iD=S.div`
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
`,rD=S.div`
  display: flex;
  width: 285px;
  height: 285px;
  position: relative;
  overflow: hidden;
  background: #FFFFFF;
  @media (max-width: 640px) {
    display: none;
  }
`,aD=S.div`
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
`;function sD(){return y.jsxs(ZC,{"aria-labelledby":"brand-title",children:[y.jsxs(JC,{children:[y.jsxs(tD,{children:[y.jsx(nD,{id:"brand-title",children:"Brand Concept"}),y.jsxs(eD,{children:[y.jsxs(iD,{children:["우리는 살아가며 수많은 순간들을 스쳐 지나간다.",y.jsx("br",{}),"그 순간들은 이내 사라지는 듯하지만,",y.jsx("br",{}),"마음속 깊이 은은히 스며들어 기억이 되고,",y.jsx("br",{}),"결국엔 우리 존재의 한 조각이 된다.",y.jsx("br",{}),y.jsx("br",{}),"<잔향> 전시는 작품이 남긴 향이 관람객에게 스며들어",y.jsx("br",{}),"시간이 지나도 떠오를 수 있는 ‘기억의 향기’를 남기고자 한다.",y.jsx("br",{}),"단순한 결과물의 나열이 아닌, 창작의 과정과 고민이 축적된 흔적들이",y.jsx("br",{}),"이 공간에 머무는 이들의 감각과 감정 속에 잔잔히 머물기를 바란다.",y.jsx("br",{}),y.jsx("br",{}),"전시를 마주한 순간이 훗날, 불현듯 떠오르는 영감으로 다시 피어나기를.",y.jsx("br",{}),"그리하여 우리의 잔향이 누군가의 기억 속에서 오래도록 머물 수 있기를."]}),y.jsx(rD,{children:y.jsx("img",{src:`${p_}brand-logo.png`,alt:"2025 졸업전시 브랜드 로고",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",zIndex:1},draggable:!1})})]})]}),y.jsx(aD,{as:"div",style:{background:"none",height:"auto",justifyContent:"center",alignItems:"center",display:"flex",boxShadow:"none",margin:"32px auto 0",padding:0},children:y.jsx("img",{src:`${p_}brand-variation.png`,alt:"브랜드 컨셉 공식 그래픽",style:{width:"100%",maxWidth:480,height:"auto",display:"block",margin:"0 auto"},draggable:!1})})]}),y.jsx(Kg,{position:"bottom",from:rr.whiteToBlack.from,to:rr.whiteToBlack.to,height:rr.whiteToBlack.h,z:0})]})}const oD='Pretendard, system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial, sans-serif',lD=S.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${n=>n.$size==="sm"?40:52}px;
  padding: 0 ${n=>n.$size==="sm"?16:24}px;
  border: 1px solid #FFFFFF;
  color: #FFFFFF;
  background: transparent;
  font-family: ${oD};
  font-weight: 700;
  font-size: ${n=>n.$size==="sm"?13:14}px;
  letter-spacing: 0.2px;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  width: ${n=>n.$full?"100%":"auto"};
  transition: background .15s ease, color .15s ease, border-color .15s ease;
`,uD=S.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-left: 8px;
  border-top: 1px solid #FFFFFF;
  border-right: 1px solid #FFFFFF;
  transform: rotate(45deg);
`;function Hg({as:n="button",href:t,label:i="View More",size:a="md",fullWidth:o=!1,showArrow:u,defaultShowArrow:d=!0,onArrowChange:m,onClick:p,style:g}){const v=typeof u=="boolean",[w,T]=St.useState(d),R=v?u:w;St.useCallback(()=>{if(v){m&&m(!u);return}T(L=>{const U=!L;return m&&m(U),U})},[v,m,u]);const M={onClick:p,style:g,"data-arrow-visible":R,"data-toggle-arrow-fn":void 0,$size:a,$full:o,as:n,href:t,type:n==="button"?"button":void 0};return y.jsxs(lD,{...M,target:"_blank",rel:"noopener noreferrer",children:[i,R?y.jsx(uD,{"aria-hidden":!0}):null]})}const qe="/",cD=S.section`
  position: relative;
  padding-top: 120px;
  padding-bottom: 120px;
  background: #121212;
  z-index: 1;
`,hD=S.div`
  width: 100%;
  max-width: 1840px;
  margin: 0 auto;
`,dD=S.div`
  position: relative;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  background: #171717;
`,Qs=S.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,th=S.video`
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
`;const fD=S.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  @media (max-width: 640px) {
    gap: 10px;
    margin-top: 12px;
    display: none; /* hide desktop grid on small screens */
  }
`,Pp=S.div`
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
`,pD=S.div`
  display: none;
  @media (max-width: 640px) {
    display: block;
    padding: 20px; /* edge-to-edge on mobile */
    box-sizing: border-box;
  }
`,mD=S.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,gD=S.div`
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  background: #151515;
  aspect-ratio: 2 / 1;
  max-height: 300px;
`,yD=S.div`
  display: flex;
  gap: 8px;
`,m_=S.div`
  flex: 1; /* share available width evenly */
  border-radius: 4px;
  overflow: hidden;
  background: #151515;
  aspect-ratio: 1 / 1;
  max-height: 200px;
`;function xD(){const n=[{src:`${qe}video/sub1.mp4`,cap:""},{src:`${qe}sq5.png`,cap:""},{src:`${qe}sq2.png`,cap:""},{src:`${qe}video/category.mp4`,cap:""},{src:`${qe}sq6.png`,cap:""},{src:`${qe}sq4.png`,cap:""},{src:"https://placehold.co/987x555",cap:""},{src:`${qe}sq3.png`,cap:""},{src:`${qe}sq1.png`,cap:""}];return y.jsxs(cD,{"aria-label":"Gallery",children:[y.jsx(Kg,{position:"top",from:rr.blackToBlackSoft.from,to:rr.blackToBlackSoft.to,height:rr.blackToBlackSoft.h,z:0}),y.jsxs(hD,{children:[y.jsx(dD,{children:y.jsx(th,{src:`${qe}video/main.mp4`,alt:"featured",muted:!0,autoPlay:!0,playsInline:!0,loop:!0})}),y.jsxs(fD,{className:"gallery-desktop",children:[y.jsxs(Pp,{children:[y.jsx(tr,{$w:910,$h:445,children:y.jsx(th,{src:`${qe}video/sub1.mp4`,alt:""})}),y.jsx(tr,{$w:445,$h:445,children:y.jsx(Qs,{src:`${qe}sq5.png`,alt:""})}),y.jsx(tr,{$w:445,$h:445,children:y.jsx(Qs,{src:`${qe}sq6.png`,alt:""})})]}),y.jsxs(Pp,{children:[y.jsx(tr,{$w:445,$h:445,children:y.jsx(Qs,{src:`${qe}sq4.png`,alt:""})}),y.jsx(tr,{$w:445,$h:445,children:y.jsx(Qs,{src:`${qe}sq2.png`,alt:""})}),y.jsx(tr,{$w:910,$h:445,children:y.jsx(th,{src:`${qe}video/category.mp4`,alt:"",muted:!0,autoPlay:!0,playsInline:!0,loop:!0})})]}),y.jsxs(Pp,{children:[y.jsx(tr,{$w:910,$h:445,children:y.jsx(th,{src:`${qe}video/category.mp4`,alt:"",muted:!0,autoPlay:!0,playsInline:!0,loop:!0})}),y.jsx(tr,{$w:445,$h:445,children:y.jsx(Qs,{src:`${qe}sq3.png`,alt:""})}),y.jsx(tr,{$w:445,$h:445,children:y.jsx(Qs,{src:`${qe}sq1.png`,alt:""})})]})]}),y.jsx(pD,{children:y.jsx("div",{style:{marginTop:12,display:"flex",flexDirection:"column",gap:12},children:Array.from({length:3}).map((t,i)=>{const a=i*3,o=n[a],u=n[a+1],d=n[a+2];return y.jsxs(mD,{children:[o&&y.jsxs(gD,{children:[y.jsx("img",{src:o.src,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),o.cap&&y.jsx(Up,{style:{opacity:1},children:o.cap})]}),y.jsxs(yD,{children:[u&&y.jsxs(m_,{children:[y.jsx("img",{src:u.src,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),u.cap&&y.jsx(Up,{style:{opacity:1},children:u.cap})]}),d&&y.jsxs(m_,{children:[y.jsx("img",{src:d.src,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),d.cap&&y.jsx(Up,{style:{opacity:1},children:d.cap})]})]})]},i)})})}),y.jsx("div",{style:{paddingTop:40,display:"flex",justifyContent:"center"},children:y.jsx(Hg,{label:"View More"})})]})]})}const vD=S.section`
  position: relative;
  height: ${n=>`${n.$durationVh}vh`};
`,_D=S.div`
  position: sticky; top: 0; height: 100vh; overflow: hidden;
  display: ${n=>n.$center?"flex":"block"};
  align-items: ${n=>n.$center?"center":"stretch"};
  justify-content: ${n=>n.$center?"center":"unset"};
`,ED=S.div`
  width: 100%;
  ${n=>n.$offset?`transform: translateY(${n.$offset}px);`:""}
`;function wD({durationVh:n=300,center:t=!0,centerOffsetPx:i=0,children:a,style:o}){const u=St.useRef(null),[d,m]=St.useState(0);return St.useEffect(()=>{const p=u.current;if(!p)return;let g=0,v=!0;const w=()=>{if(!v)return;const T=p.getBoundingClientRect(),R=window.innerHeight,M=n/100*R-R,L=Math.min(Math.max(-T.top,0),M);m(M>0?L/M:0),g=requestAnimationFrame(w)};return g=requestAnimationFrame(w),()=>{v=!1,cancelAnimationFrame(g)}},[n]),y.jsx(vD,{ref:u,style:o,$durationVh:n,children:y.jsx(_D,{$center:t,children:y.jsx(ED,{$offset:i,children:typeof a=="function"?a(d):a})})})}const g_=[{id:"w1",index:"A010",artistKr:"송지원, 허지유",dept:"Industrial Design Engineering",titleSmall:"한국산업기술진흥원장상 수상",titleStrong:"BIND",rightMeta1:"Precision and efficency beyond human limits.",rightMeta2:"BIND, 흩어진 시간을 하나로 잇다.",image:"1127032149"},{id:"w2",index:"A017",artistKr:"이채연",dept:"Media Design Engineering",titleSmall:"총동문회장상 수상",titleStrong:"MUSE",rightMeta1:"디자인 논문을 쉽게 활용할 수 있도록 돕는",rightMeta2:"AI 인사이트 제공 서비스",image:"1127403683"},{id:"w3",index:"A011",artistKr:"정혜원, 신주혜",dept:"Industrial Design Engineering",titleSmall:"한국공학대학교총장상 수상",titleStrong:"ENDY",rightMeta1:"감정을 이해하고 반응하는 학습 파트너,",rightMeta2:"자기주도학습의 새로운 동반자 ENDY",image:"1126889031"}],bD=S.div`
  position: relative;
  background: #121212;
  @media (max-width: 640px) {
    background: #121212;
    padding: 0 0 24px 0;
  }
`,TD=S.div`
  display: none;
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100vw;
    padding: 0 0 24px 0;
    box-sizing: border-box;
  }
`,SD=S(es)`
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
`;const AD=S.div`
  padding: 12px 14px 16px 14px;
  color: #fff;
  font-family: Pretendard, system-ui;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,RD=S.div`
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
`;const ID=S.div`
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
  -webkit-mask-image: rgba(0,0,0,0);
          mask-image: rgba(0,0,0,0);
`,jD=S.div`
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
`,CD=S.div`
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
`,DD=S.div`
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
`,ND=S.div`
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
`,MD=S.div`
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
`,OD=S.small`
  display: block; color: #D9D9D9;
  font-family: Pretendard, system-ui; font-size: 24px; font-weight: 400;
  @media (max-width: 640px) {
    font-size: 12px;
  }
`,VD=S.strong`
  display: block; color: #FAFAFA;
  font-family: Pretendard, system-ui; font-size: 42px; font-weight: 700;
  @media (max-width: 640px) {
    font-size: 18px;
  }
`,kD=S.iframe`
  width: 1280px;
  height: 720px;
  border: none;
  display: block;
  margin: 0 auto;
  opacity: 0.75;
`,PD=S.iframe`
  width: 100%;
  height: auto;
  min-height: 200px;
  border: none;
  display: block;
  margin-top: 16px;
`,UD=(n,t=0,i=1)=>Math.max(t,Math.min(i,n)),Xs=(n,t,i)=>n+(t-n)*i,LD=n=>n<.5?2*n*n:1-Math.pow(-2*n+2,2)/2;function zD({work:n,progress:t,videoId:i}){String(i||"").trim();const a=`https://player.vimeo.com/video/${n.image}?muted=1&autoplay=1&loop=1&badge=0&controls=0&autopause=0&title=0&byline=0&portrait=0&app_id=58479`,o=LD(UD(t,0,1)),u=Xs(0,-120,o),d=Xs(0,-360,o),m=Xs(0,-280,o),p=Xs(0,-220,o),g=Xs(0,-260,o),v=Xs(0,-180,o),w=.55,R=o<w?1:1-Math.max(0,Math.min(1,(o-w)/(.9-w))),M={transform:`translate3d(0, ${u}px, 0)`,willChange:"transform"},L=K=>({transform:`translate3d(0, ${K}px, 0)`,opacity:R,willChange:"transform, opacity"}),U={transform:`translate3d(0, ${v}px, 0)`,opacity:R,willChange:"transform, opacity"};return y.jsx(y.Fragment,{children:y.jsx(bD,{children:y.jsxs(RD,{children:[y.jsx(ID,{style:M,children:y.jsx(kD,{src:a,frameBorder:"0"})}),y.jsx(jD,{style:L(d),children:n.artistKr}),y.jsx(CD,{style:L(m),children:n.dept}),y.jsx(DD,{style:L(p),children:n.rightMeta1}),y.jsx(ND,{style:L(g),children:n.rightMeta2}),y.jsxs(MD,{style:U,children:[y.jsx(OD,{children:n.titleSmall}),y.jsx(VD,{children:n.titleStrong})]})]})})})}function $D(){return y.jsxs(y.Fragment,{children:[y.jsx("style",{children:`
        @media (max-width: 640px) {
          .expo-works-desktop { display: none !important; }
        }
        @media (min-width: 641px) {
          .expo-works-mobile { display: none !important; }
        }
      `}),y.jsx("div",{className:"expo-works-desktop",children:g_.slice(0,3).map(n=>y.jsx(wD,{durationVh:320,center:!0,centerOffsetPx:-40,children:t=>y.jsx(zD,{work:n,progress:t})},n.id))}),y.jsx(TD,{className:"expo-works-mobile",children:g_.map(n=>y.jsxs(SD,{to:`work/${n.index}`,children:[y.jsx(PD,{src:`https://player.vimeo.com/video/${n.image}?badge=0&controls=0&autopause=0&title=0&byline=0&portrait=0&app_id=58479`}),y.jsxs(AD,{children:[y.jsx("div",{style:{fontWeight:700,fontSize:16},children:n.titleStrong}),y.jsxs("div",{style:{fontSize:13,color:"#D9D9D9"},children:[n.artistKr," | ",n.dept]}),y.jsx("div",{style:{fontSize:12,color:"#A1A1A1",marginTop:2},children:n.rightMeta1}),y.jsx("div",{style:{fontSize:12,color:"#A1A1A1"},children:n.rightMeta2})]})]},n.id))})]})}const BD="/",FD=S.div`
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
`,qD=S.div`
  position: relative; 
  height: auto;
`,KD=S.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0px;
  @media (max-width: 640px) {
    gap: 16px;
}
`,HD=S.div`
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
`,GD=S.div`
  display: flex; align-items: center; height: 49px; padding-bottom: 21px; color: #FFFFFF; font-family: Pretendard, system-ui; font-size: 40px; font-weight: 700; line-height: 38.4px;
  @media (max-width: 640px) {
    font-size: 24px; height: 29px; padding-bottom: 12px;
}
`,YD=S.div`
  display: flex; flex-direction: column; align-items: center; gap: 60px; margin-top: 20px;
  @media (max-width: 640px) {
    margin-top: 60px;
    gap: 40px;
}
`,QD=S.div`
  width: 272px; height: 272px; background: #121212; overflow: hidden; display: flex; align-items: center; justify-content: center;
  @media (max-width: 640px) {
    width: 160px; height: 160px;
}
`;function XD(){return y.jsx(FD,{"aria-labelledby":"insta-title",children:y.jsx(qD,{children:y.jsxs(KD,{children:[y.jsx(HD,{children:y.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#FFFFFF",children:[y.jsx("path",{d:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2A3.2 3.2 0 1 1 12 8a3.2 3.2 0 0 1 0 6.4z"}),y.jsx("circle",{cx:"17.5",cy:"6.5",r:"1.2"}),y.jsx("path",{d:"M17.8 2H6.2A4.2 4.2 0 0 0 2 6.2v11.6A4.2 4.2 0 0 0 6.2 22h11.6A4.2 4.2 0 0 0 22 17.8V6.2A4.2 4.2 0 0 0 17.8 2zm2.6 15.8a2.6 2.6 0 0 1-2.6 2.6H6.2a2.6 2.6 0 0 1-2.6-2.6V6.2A2.6 2.6 0 0 1 6.2 3.6h11.6a2.6 2.6 0 0 1 2.6 2.6v11.6z"})]})}),y.jsx(GD,{id:"insta-title",children:"@tukd_grad"}),y.jsxs(YD,{children:[y.jsx(QD,{children:y.jsx("img",{src:`${BD}insta-qr.png`,alt:"Instagram preview"})}),y.jsx(Hg,{as:"a",href:"https://www.instagram.com/tukd_grad?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",label:"View Instagram",size:"sm"})]})]})})})}const bu=`'Pretendard', system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial, sans-serif`,y_=350,WD=S.section`
  padding: 120px 0 0 0; background: #121212;
`,ZD=S.div`
  position: relative; background: #121212;
`,JD=S.div`
  /* padding-left: ${y_}px; padding-right: ${y_}px; */
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
`,t5=({children:n})=>y.jsx(ZD,{children:y.jsx(JD,{children:n})}),e5=S.div`
  width: 289px; height: 45px; display: flex; align-items: flex-end;
`,n5=S.div`
  font-family: ${bu}; font-size: 20px; font-weight: 700; line-height: 22.4px; color: #FFFFFF;

  @media (max-width: 640px) {
    font-size: 16px;
}
`;function i5({title:n}){return y.jsx(e5,{children:y.jsx(n5,{children:n})})}const r5=S.div`
  border-bottom: ${n=>n.$last?"none":"1px rgba(255,255,255,0.12) solid"};
  display: flex; gap: 20px; align-items: flex-start;
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 20px;
    padding: 0;
    width: 100%;
  }
`,a5=S.div`
  padding-top: 22px; padding-bottom: 40px;
  border-bottom: ${n=>n.$divider?"1px rgba(255,255,255,0.12) solid":"none"};
  display: flex; gap: 20px; align-items: flex-start;
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 8px;
    padding: 16px 0 20px 0;
  }
`,s5=S.div`
  width: 135px;
  @media (max-width: 640px) {
    width: 100%;
  }
`,o5=S.div`
  font-family: ${bu}; font-size: 16px; font-weight: 700; line-height: 22.4px; color: #FFFFFF;
  @media (max-width: 640px) {
    font-size: 14px;
}
`,l5=S.div`
  width: 700px; display: flex; flex-direction: column; gap: 10px;
  @media (max-width: 640px) {
    width: 100%;
    gap: 6px;
  }
`;function Yr({k:n,children:t,divider:i=!0}){return y.jsxs(a5,{$divider:i,children:[y.jsx(s5,{children:y.jsx(o5,{children:n})}),y.jsx(l5,{children:t})]})}const u5=S.div`
  width: 900px; display: flex; flex-direction: column;
  @media (max-width: 640px) {
    width: 100%;
    padding: 0;
    box-sizing: border-box;
  }
`;function x_({title:n,children:t,last:i=!1}){return y.jsxs(r5,{$last:i,children:[y.jsx(i5,{title:n}),y.jsx(u5,{children:t})]})}const c5=S.div`
  width: 900px; padding-top: 22px; padding-bottom: 40px; border-bottom: 1px rgba(255,255,255,0.12) solid;
  @media (max-width: 640px) {
    width: 100%;
    padding: 12px 0px 20px 0px;
    box-sizing: border-box;
  }
`,h5=S.div`
  font-family: ${bu}; font-size: 16px; font-weight: 700; color: #FFFFFF;
  @media (max-width: 640px) {
    font-size: 14px;
}
`,Ht=S.div`
  font-family: ${bu}; font-size: 16px; font-weight: 300; color: #CCCCCC; letter-spacing: 0px;
  @media (max-width: 640px) {
    font-size: 13px;
}
`,eh=S(Ht)`
  font-weight: 500;
`,d5=S(Ht)`
  font-size: 13px;
`;S(Ht)`
  margin-top: 24px;
`;const f5=S.a`
  font-family: ${bu}; font-size: 16px; font-weight: 300; color: #CCCCCC; text-decoration: underline;
  @media (max-width: 640px) {
    font-size: 13px;
}
`;function p5(){return y.jsx(WD,{"aria-label":"Venue & Access",children:y.jsxs(t5,{children:[y.jsxs(x_,{title:"Venew Details",children:[y.jsx(c5,{children:y.jsx(h5,{children:"잔향 : 기억의 향기"})}),y.jsx(Yr,{k:"Term",children:y.jsx(Ht,{children:"2025. 10. 24. FRI - 10. 26. SUN"})}),y.jsxs(Yr,{k:"Hours",children:[y.jsx(Ht,{children:"10.24.FRI   13:00 ~ 17:30 (OPENING 16:00~)"}),y.jsx(Ht,{children:"10.25.SAT ~ 10.26.SUN    10:00 ~ 17:30"})]}),y.jsxs(Yr,{k:"Schedule",children:[y.jsx(eh,{children:"10.24.FRI"}),y.jsx(Ht,{children:"13:00    자유관람"}),y.jsx(Ht,{children:"15:00    졸업생 홈커밍 행사"}),y.jsx(Ht,{children:"16:00    개회식"}),y.jsx(Ht,{children:"16:20    졸업작품 우수작 시상"}),y.jsx(Ht,{children:"16:30    자유관람"}),y.jsxs(eh,{children:[y.jsx("br",{}),"10.25.SAT"]}),y.jsx(Ht,{children:"10:00    자유관람"}),y.jsx(Ht,{children:"13:00    취·창업 커리어 캠프"}),y.jsxs(eh,{children:[y.jsx("br",{}),"10.26.SUN"]}),y.jsx(Ht,{children:"10:00    자유관람"})]}),y.jsxs(Yr,{k:"Website",divider:!1,children:[y.jsx(Ht,{children:"Hongik Art Center"}),y.jsx(f5,{href:"https://artscenter.hongik.ac.kr/artcenter/index.do",target:"_blank",rel:"noreferrer",children:"https://artscenter.hongik.ac.kr/artcenter/index.do"})]})]}),y.jsxs(x_,{title:"Access",children:[y.jsxs(Yr,{k:"Address",children:[y.jsxs(Ht,{children:["홍대 아트센터 지하 2층 전시관 3",y.jsx("br",{}),"서울시 종로구 대학로 57"]}),y.jsxs(Ht,{children:["Hongik Art Center B2 Gallery 3",y.jsx("br",{}),"57, Daehak-ro, Jongno-gu, Seoul"]}),y.jsx("div",{style:{marginTop:24},children:y.jsx(Hg,{as:"a",href:"https://maps.app.goo.gl/qc99M9bDqyBTcmx79",label:"Map",size:"sm",showArrow:!0})})]}),y.jsxs(Yr,{k:"Parking",children:[y.jsx(Ht,{children:"B3F ~ B6F"}),y.jsxs(Ht,{children:[y.jsx("br",{}),"기본 30분 3,000원 / 이후 20분당 2,000원"]}),y.jsx(Ht,{children:"이용객 주차권 지참 시 50% 할인 및 1시간 무료이용권 제공"}),y.jsx(eh,{children:"(주차권으로만 정산 가능, 티켓정산 불가)"}),y.jsx(d5,{children:"주차권 배부 장소: B2 갤러리 3, 전시장 입구 인포데스크"})]}),y.jsxs(Yr,{k:"By Subway",children:[y.jsx(Ht,{children:"[1호선 종로5가역]"}),y.jsx(Ht,{children:"2번 출구 방면으로 이동 → 이화사거리 방면으로 약 800m 직진 (도보7분)"}),y.jsxs(Ht,{children:[y.jsx("br",{}),"[4호선 혜화역]"]}),y.jsx(Ht,{children:"3번 출구 방면으로 이동 → 이화사거리 방면으로 약 800m 직진 (도보7분)"}),y.jsx(Ht,{children:"또는 08번 마을버스 탑승 후 이화사거리 앞 하차"})]}),y.jsxs(Yr,{k:"By Bus",divider:!1,children:[y.jsx(Ht,{children:"[이화사거리(01-572) 하차]"}),y.jsx(Ht,{children:"마을버스 종로 08번"}),y.jsxs(Ht,{children:[y.jsx("br",{}),"[현대그룹빌딩(01-218) 하차]"]}),y.jsx(Ht,{children:"102, 107, 108, 109, 162, 301, 7025"}),y.jsxs(Ht,{children:[y.jsx("br",{}),"[이화장(01-223) 하차]"]}),y.jsx(Ht,{children:"109, 273, 601, 2112, 7025"})]})]})]})})}S.div`
  @media (max-width: 640px) {
    display: none !important;
  }
`;const m5=S.div`
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
`;function g5(){const n=[y.jsx(WC,{},"hero"),y.jsx(sD,{},"brand"),y.jsx(xD,{},"gallery"),y.jsx(m5,{children:"TU-EXPO Works"},"works-title"),y.jsx($D,{},"works"),y.jsx(XD,{},"insta"),y.jsx(p5,{},"venue")];return y.jsx("div",{style:{background:"#121212",minHeight:"100vh"},children:n})}const y5="/",Gg="Pretendard, system-ui",x5=S.div`
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
`,v5=`${y5}guestbook-card.svg`,_5=S.div`
  width: 181px;
  height: 147px;
  position: absolute;
  left: 6px;
  top: 190px;
  background-image: url(${v5});
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
`,E5=S.div` 
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
`,w5=S.div`
  /* position: absolute; */
  font-family: ${Gg};
  font-weight: 600;
  font-size: 20px;
  color: #555;
  @media (max-width: 640px) {
    font-size: 16px;
  }
`,b5=S.div`
  /* position: absolute; */
  top: 63px;
  width: 229px;
  height: 190px;
  font-family: ${Gg};
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
`,T5=S.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
  font-family: ${Gg};
  font-weight: 600;
  font-size: 14px;
  color: #555;
  @media (max-width: 640px) {
    right: 0px;
    bottom: 0px;
    font-size: 12px;
  }
`;function S5({to:n,from:t,message:i}){return y.jsxs(x5,{$w:yo,$h:ts,children:[y.jsx(_5,{}),y.jsxs(E5,{$w:yo,$h:ts,children:[y.jsx(w5,{children:`To. ${n}`}),y.jsx(b5,{children:i}),y.jsx(T5,{children:`From. ${t}`})]})]})}const A5=S.div`
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
`,R5=S.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;function I5({src:n}){return y.jsx(A5,{$w:yo,$h:ts,children:y.jsx(R5,{src:n,alt:"포토 카드"})})}const j5=S.button`
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
`,C5=S.div`
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
`,D5=S.div`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  display: grid;
  place-items: center;
  @media (max-width: 640px) {
    width: 26px;
    height: 26px;
  }
`,N5=S.div`
  width: 32px;
  height: 32px;
  position: relative;
  @media (max-width: 640px) {
    width: 26px;
    height: 26px;
  }
`,M5=S.span`
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
`,O5=S.span`
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
`;function V5({onClick:n}){return y.jsxs(j5,{onClick:n,"aria-label":"방명록 작성",$w:yo,$h:ts,children:[y.jsx(C5,{$w:yo,$h:ts}),y.jsx(D5,{children:y.jsxs(N5,{children:[y.jsx(M5,{}),y.jsx(O5,{})]})})]})}const yo=270,ts=337,k5=30,Tw=20,P5=210,U5=60,Sw=173,Aw=216,L5=16,z5=16,Mm=16,$5=S.div`
  padding: 0 0 12px 0;
  @media (max-width: 640px) {
    display: none;
  }
`,B5=S.div`
  position: relative;
  width: 100%;
  height: 3px;
  background: #171717;
  border-radius: 2px;
  overflow: hidden;
`,F5=S.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 3px;
  width: ${n=>n.$w}px;
  min-width: 25px;
  background: #7a7a7a;
  border-radius: 2px;
  transition: width 350ms ease-in;
`,q5=S.div`
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-y;
  cursor: grab;
  padding: 0 ${U5}px 0 ${P5}px;
  scrollbar-width: none; 
  -ms-overflow-style: none;
  &::-webkit-scrollbar { display: none; }

  @media (max-width: 640px) {
    overflow: visible;
    padding: 0px;
    cursor: default;
  }
`,K5=S.div`
  display: flex;
  gap: ${k5}px;
  align-items: flex-start;
  min-height: ${ts*2+Tw}px;

  @media (max-width: 640px) {
    gap: ${L5}px;
    min-height: initial;
  }
`,H5=S.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: ${Mm}px;
  padding: 0 16px; /* 좌우 16px 고정 마진 */
`,G5=S.div`
  width: calc((100% - ${Mm}px) / 2);
  height: ${Aw}px;
  flex: 0 0 calc((100% - ${Mm}px) / 2);
`,Y5=S.div`
  @media (max-width: 640px) { display: none; }
`,Q5=S.div`
  display: none;
  @media (max-width: 640px) { display: block; }
`,X5=S.div`
  display: flex;
  flex-direction: column;
  gap: ${Tw}px;
  @media (max-width: 640px) {
    width: ${Sw}px;
    gap: ${z5}px;
  }
`,Rw=S.div`
  width: ${yo}px;
  height: ${ts}px;
  @media (max-width: 640px) {
    width: ${Sw}px;
    height: ${Aw}px;
  }
`,v_=n=>{const t=[{type:"add",id:"add"},...n],i=[{min:6,max:10},{min:16,max:20},{min:26,max:30}];let a=0;const o="/";return i.forEach((u,d)=>{if(t.length>u.min+a){const m=Math.min(Math.floor(Math.random()*(u.max-u.min+1))+u.min,t.length)+a;let p;do p=Math.floor(Math.random()*7)+1;while(t[t.length-1]?.id===`ph-${Date.now()}-${t.length-1}`&&p===t[t.length-1]?.id);t.splice(m,0,{type:"photo",id:`ph-${Date.now()}-${d}`,src:`${o}sq${p}.png`}),a++}}),t},W5=n=>{const t=[];for(let i=0;i<n.length;i+=2)t.push([n[i],n[i+1]||null]);return t};function Z5({onOpenModal:n,items:t}){const i=B.useRef(null),[a,o]=B.useState({width:0,trackW:0}),[u,d]=B.useState(()=>v_(t)),[m,p]=B.useState(()=>window.matchMedia&&window.matchMedia("(max-width: 640px)").matches);B.useEffect(()=>{d(v_(t))},[t]);const g=W5(u);B.useEffect(()=>{if(!window.matchMedia)return;const R=window.matchMedia("(max-width: 640px)"),M=L=>p(L.matches);return R.addEventListener?R.addEventListener("change",M):R.addListener(M),()=>{R.removeEventListener?R.removeEventListener("change",M):R.removeListener(M)}},[]),B.useEffect(()=>{if(m)return;const R=i.current;if(!R)return;const M=L=>{Math.abs(L.deltaY)>Math.abs(L.deltaX)&&(R.scrollLeft+=L.deltaY,L.preventDefault())};return R.addEventListener("wheel",M,{passive:!1}),()=>R.removeEventListener("wheel",M)},[m]);const v=B.useRef({on:!1,moved:!1,startX:0,startScroll:0}),w=R=>!!R?.closest?.('button, a, input, textarea, select, label, [role="button"], [data-nodrag]');B.useEffect(()=>{if(m)return;const R=i.current;if(!R)return;const M=K=>{K.button===0&&(w(K.target)||(v.current.on=!0,v.current.moved=!1,v.current.startX=K.clientX,v.current.startScroll=R.scrollLeft,R.setPointerCapture?.(K.pointerId),document.body.style.userSelect="none",R.style.cursor="grabbing"))},L=K=>{if(!v.current.on)return;const X=K.clientX-v.current.startX;Math.abs(X)>2&&(v.current.moved=!0),R.scrollLeft=v.current.startScroll-X},U=K=>{v.current.on&&(R.releasePointerCapture?.(K.pointerId),document.body.style.userSelect="",R.style.cursor="grab",v.current.moved&&(K.preventDefault(),K.stopPropagation()),v.current.on=!1)};return R.addEventListener("pointerdown",M),window.addEventListener("pointermove",L),window.addEventListener("pointerup",U),R.addEventListener("pointercancel",U),()=>{R.removeEventListener("pointerdown",M),window.removeEventListener("pointermove",L),window.removeEventListener("pointerup",U),R.removeEventListener("pointercancel",U)}},[m]);const T=B.useCallback(()=>{const R=i.current;if(!R)return;const M=R.clientWidth,L=R.scrollWidth,U=R.scrollLeft,X=R.parentElement?.clientWidth||M,tt=Math.max(1,L-M),lt=Math.min(1,Math.max(0,U/tt)),Y=Math.round(X*lt);o({width:Y,trackW:X})},[]);return B.useEffect(()=>{if(m)return;T();const R=i.current;if(!R)return;const M=()=>requestAnimationFrame(T),L=()=>requestAnimationFrame(T);return R.addEventListener("scroll",M,{passive:!0}),window.addEventListener("resize",L),()=>{R.removeEventListener("scroll",M),window.removeEventListener("resize",L)}},[T,m]),y.jsxs(y.Fragment,{children:[y.jsxs(Y5,{children:[y.jsx($5,{children:y.jsx(B5,{children:y.jsx(F5,{$w:a.width})})}),y.jsx(q5,{ref:i,children:y.jsx(K5,{children:g.map((R,M)=>y.jsxs(X5,{children:[y.jsx(Lp,{data:R[0],onOpenModal:n}),R[1]?y.jsx(Lp,{data:R[1],onOpenModal:n}):y.jsx(Rw,{})]},`col-${M}`))})})]}),y.jsx(Q5,{children:y.jsx(H5,{children:u.map(R=>y.jsx(G5,{children:y.jsx(Lp,{data:R,onOpenModal:n})},R.id))})})]})}function Lp({data:n,onOpenModal:t}){return n?n.type==="add"?y.jsx(V5,{onClick:t,style:{pointerEvents:"auto"}}):n.type==="photo"?y.jsx(I5,{src:n.src}):y.jsx(S5,{to:n.to,from:n.from,message:n.message}):y.jsx(Rw,{})}const J5="/",tN=S.div`
  position: fixed; inset: 0; z-index: 1000;
  display: grid; place-items: center;
  background: rgba(0,0,0,.45);
  @media (max-width: 640px) {
    align-items: end;
    padding: 0 16px 84px 16px;
  }
`,eN=S.div`
  position: relative; display: inline-flex; align-items: flex-end; gap: 17px;
  @media (max-width: 640px) {
    gap: 0;
  }
`,nN=S.div`
  padding: 40px; border-radius: 16px;
  background: rgba(160,160,160,.80);
  backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
  display: inline-flex; gap: 20px; align-items: center;
  @media (max-width: 640px) {
    padding: 18px;
    border-radius: 12px;
  }
`,iN=S.div`
  width: 520px; display: inline-flex; gap: 20px; align-items: center;
  @media (max-width: 640px) {
    width: 300px;
    gap: 12px;
  }
`,rN=S.div`
  width: 450px; height: 560px; position: relative; overflow: hidden;
  border-radius: 16px;
  background: linear-gradient(246deg, #F2F0FF -0.07%, #FFF 99.93%);
  box-shadow: 0 20px 60px rgba(0,0,0,.25);
  @media (max-width: 640px) {
    width: 260px;
    height: 340px;
    border-radius: 12px;
  }
`,aN=S.div`
  position: absolute;
  left: 12px;
  top: 314.67px;
  width: 302px;
  height: 246px;
  background-image: url(${J5}/gestbook-card.svg);
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 640px) {
    left: 4px;
    top: 210px;
    width: 158px;
    height: 130px;
  }
`,sN=S.div`
  position: absolute; left: 32px; top: 50px; display: inline-flex; align-items: center; gap: 8px;
  @media (max-width: 640px) {
    left: 18px; top: 22px; gap: 6px;
  }
`,oN=S.div`
  font-family: Pretendard, system-ui; font-weight: 600; font-size: 32px; color: #555;
  @media (max-width: 640px) {
    font-size: 22px;
  }
`,lN=S.input`
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
`,uN=S.div`
  position: absolute; left: 32px; top: 104px; width: 381px;
  @media (max-width: 640px) {
    left: 18px; top: 78px; width: 206px;
  }
`,cN=S.textarea`
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
`,hN=S.div`
  position: absolute; left: 181px; top: 472px; display: inline-flex; align-items: center; gap: 8px;
  @media (max-width: 640px) {
    left: 110px; top: 270px; gap: 6px;
  }
  @media (max-width: 640px) {
    left: auto; top: auto; right: 18px; bottom: 16px; gap: 6px;
  }
`,dN=S.div`
  font-family: Pretendard, system-ui; font-weight: 600; font-size: 32px; color: #555;
  @media (max-width: 640px) {
    font-size: 22px;
  }
`,fN=S.input`
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
`,pN=S.div`
  width: 50px; height: 560px; display: inline-flex; flex-direction: column; justify-content: flex-end;
  @media (max-width: 640px) {
    height: 340px;
  }
`,mN=S.button`
  width: 50px; height: 50px; border-radius: 25px;
  background: #202020; cursor: pointer;
  display: grid; place-items: center; border: none;
  @media (max-width: 640px) {
    width: 40px; height: 40px; border-radius: 20px;
  }
`,gN=S.div`
  width: 20px; height: 17px; background: #fff; clip-path: polygon(0 0,100% 50%,0 100%);
  @media (max-width: 640px) {
    width: 16px; height: 14px;
  }
`,yN=S.div`
  width: 60px; height: 640px; position: relative;
  @media (max-width: 640px) {
    width: 100%; height: auto;
  }
`,xN=S.button`
  width: 60px; height: 60px; position: absolute; left: 0; top: 0;
  display: grid; place-items: center; cursor: pointer;
  background: transparent; border: none;
  @media (max-width: 640px) {
    position: fixed; left: 50%; bottom: 20px; top: auto; transform: translateX(-50%);
    width: 56px; height: 56px; border-radius: 28px; background: #fff1;
    backdrop-filter: blur(2px);
  }
`,vN=S.div`
  width: 32px; height: 32px; position: relative;
`,__=S.span`
  position: absolute; left: 15px; top: 4px; width: 2px; height: 24px;
  background: #FFFFFF; transform: rotate(${n=>n.$deg}deg);
  @media (max-width: 640px) {
    left: 15px; top: 4px; height: 24px;
  }
`;function _N({open:n,onClose:t,onSubmit:i,defaultTo:a="",defaultFrom:o=""}){const[u,d]=B.useState(a),[m,p]=B.useState(o),[g,v]=B.useState(""),w=B.useRef(null);if(B.useEffect(()=>{const M=L=>{L.key==="Escape"&&t?.()};return n&&document.addEventListener("keydown",M),()=>document.removeEventListener("keydown",M)},[n,t]),!n)return null;const T=M=>{M.target===w.current&&t?.()},R=()=>{const M={to:(u||"").trim(),from:(m||"").trim(),message:(g||"").trim()};M.message&&i?.(M)};return y.jsx(tN,{ref:w,onMouseDown:T,children:y.jsxs(eN,{onMouseDown:M=>M.stopPropagation(),children:[y.jsx(nN,{children:y.jsxs(iN,{children:[y.jsxs(rN,{children:[y.jsx(aN,{}),y.jsxs(sN,{children:[y.jsx(oN,{children:"To."}),y.jsx(lN,{value:u,onChange:M=>d(M.target.value),placeholder:"받는 사람"})]}),y.jsx(uN,{children:y.jsx(cN,{placeholder:"내용을 입력해 주세요.",value:g,onChange:M=>v(M.target.value)})}),y.jsxs(hN,{children:[y.jsx(dN,{children:"From."}),y.jsx(fN,{value:m,onChange:M=>p(M.target.value),placeholder:"보내는 사람"})]})]}),y.jsx(pN,{children:y.jsx(mN,{type:"button",onClick:R,"aria-label":"send",children:y.jsx(gN,{})})})]})}),y.jsx(yN,{children:y.jsx(xN,{type:"button",onClick:t,"aria-label":"close",children:y.jsxs(vN,{children:[y.jsx(__,{$deg:45}),y.jsx(__,{$deg:-45})]})})})]})})}const EN={apiKey:"AIzaSyAEFzPwTADLzuxWuyk889Jz1cHPsEgLOkQ",authDomain:"tu2025grad.firebaseapp.com",projectId:"tu2025grad",storageBucket:"tu2025grad.firebasestorage.app",messagingSenderId:"553768466639",appId:"1:553768466639:web:7c16f5d6432da7ebc05fba"},wN=og(EN),zp=hw(wN),bN='Pretendard, system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial, sans-serif',TN=S.div`
  background: #121212; min-height: 100vh;
`,SN=S.main`
  padding: 80px 40px 120px 40px;
  @media (max-width: 640px) {
    padding: 52px 0 80px 0;
  }
`,AN=S.h1`
  font-family: ${bN}; font-weight: 700; font-size: 32px; color: #FFFFFF; text-align: center; margin: 20px 0 40px;
  @media (max-width: 640px) {
    font-size: 20px; margin: 4px 0 24px ;
  }
`,RN=S.section`
  display: flex; justify-content: center;
  @media (max-width: 640px) {
    justify-content: stretch;
  }
`,IN=S.div`
  width: 100%;
  @media (max-width: 640px) {
    width: 100%;
  }
`;function jN(){const[n,t]=St.useState(!1),[i,a]=St.useState([]);St.useEffect(()=>{let d=!0;return(async()=>{try{const m=o_(yh(zp,"guest"),l_("time","desc")),p=await Dm(m);if(!d)return;const g=[];p.forEach(v=>{const w=v.data();g.push({id:v.id,to:w.to||"",from:w.from||"",message:w.message||"",type:"text"})}),a(g)}catch(m){console.error("Failed to load guestbook items:",m)}})(),()=>{d=!1}},[]);const o=async({to:d,from:m,message:p})=>{try{const g=String(Date.now());await qg(Xl(yh(zp,"guest"),g),{to:d||"",from:m||"",message:p||"",time:g});try{const v=o_(yh(zp,"guest"),l_("time","desc")),w=await Dm(v),T=[];w.forEach(R=>{const M=R.data();T.push({id:R.id,to:M.to||"",from:M.from||"",message:M.message||"",type:"text"})}),a(T)}catch(v){console.error("Failed to reload guestbook items after submit:",v)}t(!1)}catch(g){console.error("Failed to submit guest message:",g)}};return y.jsxs(TN,{children:[y.jsxs(SN,{children:[y.jsx(AN,{children:"Guest Book"}),y.jsx(RN,{children:y.jsxs(IN,{className:"gb-wrap",children:[y.jsx("style",{children:`
    .gb-wrap *::-webkit-scrollbar { display: none; }
    .gb-wrap * { scrollbar-width: none; -ms-overflow-style: none; }
    .gb-wrap article img { width: 100% !important; height: 100% !important; object-fit: cover !important; display: block !important; }
  `}),y.jsx(Z5,{onOpenModal:()=>t(!0),items:i})]})})]}),y.jsx(_N,{open:n,onClose:()=>t(!1),onSubmit:o})]})}const Om="/",CN=S.div`
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
`,DN=S.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: auto;
  @media (max-width: 640px) {
    gap: 40px;
    /* width: calc(100% - 32px); */
}
`,NN=S.div`
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
`,MN=S.div`
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 640px) {
    display: none;
}
`,ON=S.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  /* align-items: center; */
  gap: 16px;
  @media (max-width: 640px) {
    width: 100%;
}
`,VN=S.h1`
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
`,kN=S.p`
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
`,PN=S.div`
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
`,UN=S.div`
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
`,LN=S.div`
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
`,zN=S.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
`,$N=S.div`
  width: 24px;
  height: 24px;
  background-image: ${({$src:n})=>`url("${n}")`};
  background-size: contain;
  background-repeat: no-repeat;
  @media (max-width: 640px) {
    width: 16px;
    height: 16px;
}
`,BN=S.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #e0e0e0;
  margin: 0;
  padding: 0;
  @media (max-width: 640px) {
    font-size: 16px;
}
`,FN=S.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 12px;
  cursor: pointer;
`,qN=S.p`
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
`,KN=S.div`
  display: flex;
  width: 20px;
  height: 75px;
  align-items: center;
  justify-content: center;
  background-image: url('${Om}icons/pageDownIcon.svg');
  background-size: contain;
  background-repeat: no-repeat;
  @media (max-width: 640px) {
    width: 10px;
    height: 38px;
}
`;function Vm({titleKor:n,titleEng:t,context:i,isOpen:a=!0,onClose:o,src:u,docId:d,collection:m="works"}){const[p,g]=B.useState(0),[v,w]=B.useState(!1);B.useEffect(()=>{let M=!0;return(async()=>{if(d!=null)try{const L=Xl(Wl,m,String(d)),U=await vh(L);if(!M)return;if(U.exists()){const K=U.data();g(typeof K.like=="number"?K.like:0)}else g(0)}catch(L){console.error("Firestore getDoc error:",L),M&&g(0)}})(),()=>{M=!1}},[d,m]);const T=async()=>{try{const M=Xl(Wl,m,String(d)),L=await vh(M);if(L.exists()){const U=L.data();g(typeof U.like=="number"?U.like:0)}}catch(M){console.error("Firestore refresh error:",M)}},R=async()=>{if(v)return;if(d==null){console.warn("handleLike called without a valid docId");return}w(!0);const M=Xl(Wl,m,String(d));try{await Ph(M,{like:Uh(1)}),g(L=>L+1),await T()}catch(L){if(L.code==="not-found"||/No document/i.test(String(L)))try{(await vh(M)).exists()?await Ph(M,{like:Uh(1)}):await qg(M,{like:1},{merge:!0}),await T()}catch(U){console.error("Firestore like fallback error:",U)}else console.error("Firestore like error:",L)}finally{w(!1)}};return y.jsx(CN,{$open:!!a,children:y.jsxs(DN,{children:[y.jsxs(NN,{children:[y.jsx(MN,{onClick:()=>{typeof o=="function"&&o()},children:y.jsx("img",{src:`${Om}icons/closeIcon.svg`,alt:"Close Icon"})}),y.jsxs(ON,{children:[y.jsx(PN,{$src:u}),y.jsx(VN,{children:n}),y.jsx(kN,{children:i})]})]}),y.jsxs(UN,{children:[y.jsx(LN,{onClick:R,"aria-disabled":v,title:v?"처리 중":"좋아요",children:y.jsxs(zN,{children:[y.jsx($N,{$src:`${Om}icons/likeIcon(white).svg`,"aria-label":"Like icon"}),y.jsx(BN,{children:p||0})]})}),y.jsxs(FN,{onClick:()=>{const L=Math.max(document.documentElement?.scrollHeight||0,document.body?.scrollHeight||0)-window.innerHeight,K=Math.max(0,L-269);window.scrollTo({top:K,behavior:"smooth"})},children:[y.jsx(qN,{children:"Designer Info"}),y.jsx(KN,{})]})]})]})})}Vm.propTypes={titleKor:Z.string.isRequired,titleEng:Z.string.isRequired,context:Z.string.isRequired,isOpen:Z.bool,onClose:Z.func,docId:Z.oneOfType([Z.string,Z.number]).isRequired,collection:Z.string};const HN=S.div`
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
`,GN=S.div`
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
`,YN=S.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  display: block;
`,QN=S.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 8px);
  width: auto;
  @media (max-width: 640px) {
    height: 100%;
}
`,XN=S.div`
  display: flex;
  height: auto;
  padding: 0;
  margin: 0;
  flex-direction: column;
  gap: 0px;
`,WN=S.h1`
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
`,ZN=S.h2`
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
`,JN=S.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 84px;
  @media (max-width: 640px) {
    height: 38px;
}
`,t9=S.div`
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
`,$p=S.h3`
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
`,e9=S.div`
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
`,Bp=S.p`
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
`;function Yg({nameKor:n,nameEng:t,part:i,sns:a,eMail:o,imgUrl:u,imgAlt:d}){return y.jsxs(HN,{children:[y.jsx(GN,{children:y.jsx(YN,{src:u,alt:d})}),y.jsxs(QN,{children:[y.jsxs(XN,{children:[y.jsx(WN,{children:n}),y.jsx(ZN,{children:t})]}),y.jsxs(JN,{children:[y.jsxs(t9,{children:[y.jsx($p,{children:"Part"}),y.jsx($p,{children:"SNS"}),y.jsx($p,{children:"E-mail"})]}),y.jsxs(e9,{children:[y.jsx(Bp,{children:i}),y.jsx(Bp,{children:a}),y.jsx(Bp,{children:o})]})]})]})]})}Yg.propTypes={nameKor:Z.string.isRequired,nameEng:Z.string.isRequired,part:Z.string,sns:Z.string,eMail:Z.string,imgUrl:Z.string.isRequired,imgAlt:Z.string.isRequired};Yg.defaultProps={sns:"N/A",eMail:"N/A"};const n9=S.div`
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
`,i9=S.div`
  display: flex;
  flex-direction: column;
  width: 810px;
  height: auto;
  gap: 76px;
  @media (max-width: 640px) {
    width: 100%;
    gap: 21px;
}
`,r9=S.h1`
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
`;function E_({designers:n}){return y.jsxs(n9,{children:[y.jsx(r9,{children:"Designer"}),y.jsx(i9,{children:n.map((t,i)=>y.jsx(Yg,{nameKor:t.nameKor,nameEng:t.nameEng,part:t.role,sns:t.sns,eMail:t.eMail,imgUrl:t.imgUrl},i))})]})}const a9=S.div`
    width: 100%; // 임시값
    margin-top: 50px;
    max-width: ${n=>n.$isInfoOpen?"100%":"1800px"};
@media (max-width: 640px) {
    margin-top: 20px;
}
`,s9=S.div`
    position: relative;
    width: 100%;
    max-width: 100vw;
    padding-top: 56.25%; // 16:9 비율
`,o9=S.iframe`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
`;function l9({videoId:n,isInfoOpen:t}){const a=`https://player.vimeo.com/video/${String(n||"").trim()}?badge=0&autopause=0&title=0&byline=0&portrait=0&app_id=58479`;return y.jsx(a9,{$isInfoOpen:t,children:y.jsx(s9,{children:y.jsx(o9,{src:a,frameBorder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,title:"Embedded Vimeo"})})})}const u9="/",c9=S.div`
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
`,h9=S.div`
    display: flex;
    width: 40px;
    height: 40px;
`;function d9({isOpen:n=!1,onClick:t}){const[i,a]=B.useState(!1);return B.useEffect(()=>{let o;return n?a(!1):(a(!1),o=setTimeout(()=>{a(!0)},500)),()=>clearTimeout(o)},[n]),y.jsx(c9,{$visible:!n,$active:i,onClick:()=>{typeof t=="function"&&t()},children:y.jsx(h9,{children:y.jsx("img",{src:`${u9}icons/infoOpenIcon.svg`,alt:"작품 정보 열기"})})})}function nh(n){if(!n)return n;const t="/";if(/^https?:\/\//i.test(n))return n;const i=String(n).replace(/^\.\.\//,"").replace(/^\//,"");return t+i}const f9=S.img`
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
`,Fp=n=>y.jsx(f9,{loading:"lazy",...n}),p9=S.div`
  display: flex;
  position: relative;
  background: #fff;
  width: 100%;
  @media (max-width: 640px) {
    flex-direction: column;
}
`,m9=S.div`
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
`,g9=S.div`
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
`,w_=S.div`
  display: flex;
  position: relative;
  width: 100%;
`,y9=S.div`
  position: relative;
  width: 100%;
  height: auto;
  /* max-width: 1800px; */
`,x9={A:"c0",E:"c1",H:"c2",I:"c3",L:"c4",M:"c5"};function v9(){const{pid:n}=kT(),t=(n||"").toUpperCase().match(/^([A-Z])(\d{3})$/),[i,a]=B.useState(!0),[o,u]=B.useState(!0),d=()=>{a(!1),setTimeout(()=>{u(!1)},500)},m=()=>{u(!0),setTimeout(()=>{a(!0)},0)};let p=null;if(t){const[,K,X]=t,tt=x9[K]||null,lt=Math.max(0,parseInt(X,10)-1);p=eu.find(Y=>Y.projectNum===lt&&(!tt||Y.category===tt)),p||(p=eu.find(Y=>Y.projectNum==lt))}if(!p)return y.jsx(w_,{children:y.jsxs(PageContainer,{children:[y.jsx(Vm,{titleKor:"작품 제목(한글)",titleEng:"Work Title (English)",context:"이곳은 작품 설명이 들어가는 영역입니다. 작품에 대한 상세한 설명이나 배경, 제작 과정 등을 기술할 수 있습니다. 이 텍스트는 예시로 작성된 내용이며, 실제 작품 설명으로 대체되어야 합니다.",isOpen:i,onClose:()=>a(!1),docId:0}),y.jsx(Fp,{src:"https://placehold.co/1530x4000",alt:"featured"}),y.jsx(E_,{children:"  "})]})});const g=(p.members||[]).map(K=>{const X=ng.find(tt=>tt.num===K);return X?{nameKor:X.nameKor,nameEng:X.nameEng,role:X.role||"Designer",sns:X.sns||"-",eMail:X.eMail||"",imgUrl:nh(X.imgUrl||"/김예준.jpg")}:null}).filter(Boolean),w={c0:"A",c1:"E",c2:"H",c3:"I",c4:"L",c5:"M"}[p.category]||"A",T=p.projectNum??p.num,R=String(T).padStart(3,"0"),M=`/projects/${T}`,[L,U]=B.useState([]);return B.useEffect(()=>{let K=!1;const X=["jpg"],tt=30,lt=2,Y=j=>!j||!j.ok?!1:(j.headers.get("content-type")||"").startsWith("image/"),ot=async j=>{try{const I=await fetch(j,{method:"GET",cache:"no-store"});return Y(I)}catch{return!1}};return(async()=>{const j=[];let I=0;for(let C=0;C<tt;C++){let O=!1;for(const k of X){const z=nh(`${M}/gallery/${C}.${k}`);if(await ot(z)){j.push(z),O=!0,I=0;break}}if(!O&&(j.length===0||(I+=1,I>=lt)))break}K||U(j)})(),()=>{K=!0}},[M]),B.useEffect(()=>{const K=p?.projectNum??p?.num;if(K==null)return;const tt=Xl(Wl,"works",String(K));(async()=>{try{await Ph(tt,{view:Uh(1)})}catch(lt){if(lt.code==="not-found"||/No document/i.test(String(lt)))try{(await vh(tt)).exists()?await Ph(tt,{view:Uh(1)}):await qg(tt,{view:1},{merge:!0})}catch(Y){console.error("Firestore view fallback error:",Y)}else console.error("Firestore view error:",lt)}})()},[p?.projectNum,p?.num]),y.jsx(w_,{children:y.jsxs(p9,{children:[y.jsx(d9,{isOpen:i,onClick:m}),y.jsx(g9,{$visible:o,children:y.jsx(Vm,{titleKor:p.titleKor,titleEng:p.titleEng,context:p.description||"null",isOpen:i,onClose:d,src:nh(`/projects/${T}/thumb.jpg`),docId:T})}),y.jsxs(m9,{$isInfoOpen:i,children:[L.length>0?L.map((K,X)=>y.jsx(Fp,{src:K,alt:`project-${w}${R}-img-${X+1}`},X)):y.jsx(Fp,{src:nh("/thumbnailExample.png"),alt:`project-${w}${R}-placeholder`}),y.jsx(l9,{videoId:p.videoId,isInfoOpen:i}),y.jsx(y9,{children:y.jsx(E_,{designers:g})})]})]})})}const b_="/",_9=P4`
  0%   { transform: translateY(calc(var(--amp, 8px) * -1)); }
  100% { transform: translateY(var(--amp, 8px)); }
`,E9=S.div`
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
`,w9=S.div`
    animation: ${({$visible:n,$floatDur:t})=>n?Qm`${_9} ${t??1800}ms ease-in-out infinite alternate`:"none"};
    will-change: transform;
`,T_=S.div`
    display: flex;
    width: 40px;
    height: 40px;
    background-image: url(${n=>n.src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;function b9({visible:n=!0,fadeMs:t=800,floatDur:i=1800,amp:a=6}={}){return y.jsxs(E9,{$visible:n,$fadeMs:t,"aria-hidden":!n,children:[y.jsx(T_,{src:`${b_}icons/showIndicatorMouse.svg`}),y.jsx(w9,{$visible:n,$floatDur:i,style:{"--amp":`${a}px`},children:y.jsx(T_,{src:`${b_}icons/showIndicatorDown.svg`})})]})}const qp=S.div`
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
`,S_=S.div`
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
`,A_=S.div`
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
`,R_=S.div`
    display: flex;
    width: 72px;
    height: 1px;

    height: 1px; background:#333;
    width: ${({$shown:n,$lineWidth:t})=>n?t||"72px":"0px"};
    transition:
    width ${({$lDur:n})=>n}ms ${({$ease:n})=>n} ${({$lDelay:n})=>n}ms;
`,I_=S.div`
    display: flex;
    align-items: center;
    gap: 12px;
    mix-blend-mode: difference;
`,T9=S.div`
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
`,S9=S.p`
    font-size: 16px;
    font-weight: 300;
    color: #222;
    line-height: 150%;
    text-align: justify;
    margin: 0;
`;function Kp({children:n,textWidth:t,textHeight:i,shown:a,tDur:o,tDelay:u,ease:d}){return y.jsx(T9,{$textWidth:t,$textHeight:i,$shown:a,$tDur:o,$tDelay:u,$ease:d,children:y.jsx(S9,{children:n})})}function A9({top:n,left:t,right:i="auto",bottom:a,lineWidth:o,textWidth:u,textHeight:d,children:m,position:p="left",isActive:g,section:v,currentSection:w,anim:T}){const[R,M]=B.useState(!1),L=T?.circle?.easing||T?.line?.easing||T?.text?.easing||"cubic-bezier(0.22,1,0.36,1)",U=T?.circle?.duration??250,K=T?.circle?.delay??120,X=T?.line?.duration??500,tt=K+U+(T?.line?.delay??120),lt=T?.text?.duration??280,Y=tt+X+(T?.text?.delay??80),j=g||R&&w===v;if(B.useEffect(()=>{g&&!R&&M(!0)},[g,R]),p==="right")return y.jsxs(qp,{$top:n,$left:t,$right:i,$bottom:a,children:[y.jsx(Kp,{textWidth:u,textHeight:d,shown:j,tDur:lt,tDelay:Y,ease:L,children:m}),y.jsxs(I_,{children:[y.jsx(R_,{$lineWidth:o,$shown:j,$lDur:X,$lDelay:tt,$ease:L}),y.jsx(S_,{$shown:j,$cDur:U,$cDelay:K,$ease:L,children:y.jsx(A_,{$shown:j,$cDur:U,$cDelay:K,$ease:L})})]})]});if(p==="left")return y.jsxs(qp,{$top:n,$left:t,$right:i,$bottom:a,children:[y.jsxs(I_,{children:[y.jsx(S_,{$shown:j,$cDur:U,$cDelay:K,$ease:L,children:y.jsx(A_,{$shown:j,$cDur:U,$cDelay:K,$ease:L})}),y.jsx(R_,{$lineWidth:o,$shown:j,$lDur:X,$lDelay:tt,$ease:L})]}),y.jsx(Kp,{textWidth:u,textHeight:d,shown:j,tDur:lt,tDelay:Y,ease:L,children:m})]});if(p==="no-line")return y.jsx(qp,{$top:n,$left:t,$right:i,$bottom:a,children:y.jsx(Kp,{textWidth:u,textHeight:d,shown:j,tDur:lt,tDelay:Y,ease:L,children:m})})}const Hp="/",R9=S.div`
    display: flex;
    position: relative;
    margin-top: 80px;
    width: 100vw;
    flex-direction: column;
`,I9=S.div`
    display: flex;
    position: relative;
    width: 100vw;
    height: 500vh;
    background-color: #FFF;
    background-color: transparent;
    isolation: isolate;
`,Gp=S.img`
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
`,j9=S.div`
    display: flex;
    position: fixed;
    width: 100vw;
    height: 40px;
    bottom: 0;
    left: 0;
    background-color: #202020;
    z-index: 6;
`;function C9(){const n=B.useRef(null),[t,i]=B.useState(0),a=B.useRef(0),o=B.useRef(!1),u=B.useRef(null),d=B.useRef(0),m=1200,p=1500,[g,v]=B.useState(0),[w,T]=B.useState(!1),[R,M]=B.useState(!0),L=B.useRef(!1),U=B.useRef(null),K=[{top:"130vh",left:"15vw",textWidth:"300px",textHeight:"auto",position:"left",section:1,info:"모든 꽃이 피어날 수 있는 근원적인 기반이다. 거칠고 단단한 돌은 졸업전시를 향한 수많은 준비와 실험, 실패와 성장의 흔적을 품고 있다. 돌 위에 스며든 이끼와 작은 생명들은 그 과정 속에서 서서히 쌓인 노력의 결실을 상징한다. 이는 향이 머무는 토양처럼, 모든 창작의 향이 퍼져나가기 전의 저장된 시간을 의미한다."},{top:"220vh",right:"53vw",textWidth:"300px",textHeight:"auto",position:"right",section:2,info:"시간 위에 피어난 졸업생들의 존재이자 향의 발화점이다. 꽃은 자신만의 빛깔과 감정, 그리고 이야기를 담은 향을 내뿜는다. 이 향은 단순한 냄새가 아닌, 졸업생들의 기억과 감정이 응축된 예술의 잔향이다. 전시장을 거닐던 관람객들은 그 향을 맡으며 각자의 기억과 감정 속에서 새로운 장면을 떠올리고, 그 순간 작품은 관람객의 내면으로 스며든다."},{top:"355vh",right:"15vw",textWidth:"300px",textHeight:"auto",position:"right",section:3,info:"향의 흐름이 새로운 생명으로 이어지는 장면을 형상화한다. 돌에서 피어난 꽃들이 줄기와 풀로 연결되며, 이는 졸업전시를 통해 이어지는 졸업생과 관람객의 감정적 교류를 상징한다. 꽃에서 나온 향을 맡은 관람객들은 단순히 감상자가 아닌, 그 향의 영향을 받아 자신만의 ‘꽃’을 피우는 존재로 변화한다. 그리고 다시 그들이 만들어내는 향은 또 다른 사람에게 스며들어, 기억과 감정의 연쇄를 만들어낸다."},{top:"420vh",left:"25vw",textWidth:"300px",textHeight:"auto",position:"no-line",section:4,info:"결국 이 세 오브제는 한 사람의 향이 또 다른 향으로 이어지는 순환을 이야기한다. 돌은 그 순환의 뿌리이며, 꽃은 향의 시작점이고, 메인오브제는 그 향이 세상으로 확산되어 기억과 창작이 끊임없이 이어지는 ‘잔향의 생태계’를 완성하는 상징이다."}],X=t===1||t===4?1:.3,tt=t===2||t===4?1:.3,lt=t===3||t===4?1:.3;return B.useEffect(()=>{const Y=()=>{if(!n.current)return;const ot=n.current.getBoundingClientRect().top+window.scrollY,I=Math.max(0,Math.min(window.scrollY-ot,4*window.innerHeight))/window.innerHeight*100;let C=0;I>=350?C=4:I>=270?C=3:I>=170?C=2:I>=70?C=1:C=0,i(O=>O===C?O:C)};return window.addEventListener("scroll",Y,{passive:!0}),Y(),()=>window.removeEventListener("scroll",Y)},[]),B.useEffect(()=>{const Y=ot=>{if(M(!1),L.current=!0,clearTimeout(U.current),T(!1),!n.current)return;const j=n.current.getBoundingClientRect().top+window.scrollY,I=j,C=j+4*window.innerHeight,O=window.scrollY;if(O<I-20||O>C+20)return;if(o.current){ot.preventDefault();return}if(Date.now()-d.current<m+p){ot.preventDefault();return}const z=ot.deltaY,D=Math.sign(z);if(D===0)return;const qt=Math.max(0,Math.min(4,a.current+D));if(qt===a.current){ot.preventDefault();return}o.current=!0,d.current=Date.now(),a.current=qt;const J=j+qt*window.innerHeight;window.scrollTo({top:J,behavior:"smooth"}),clearTimeout(u.current),u.current=setTimeout(()=>{o.current=!1,T(!0),v(qt)},1e3),ot.preventDefault()};return window.addEventListener("wheel",Y,{passive:!1}),()=>{window.removeEventListener("wheel",Y),clearTimeout(u.current)}},[]),B.useEffect(()=>{const Y=ot=>{const j=[" ","PageDown","ArrowDown"],I=["PageUp","ArrowUp"];M(!1),L.current=!0,clearTimeout(U.current),j.includes(ot.key)?(ot.preventDefault(),window.dispatchEvent(new WheelEvent("wheel",{deltaY:100}))):I.includes(ot.key)&&(ot.preventDefault(),window.dispatchEvent(new WheelEvent("wheel",{deltaY:-100})))};return window.addEventListener("keydown",Y),()=>window.removeEventListener("keydown",Y)},[]),B.useEffect(()=>(L.current||(M(!0),clearTimeout(U.current),U.current=setTimeout(()=>{M(!1),L.current=!0},5e3)),()=>clearTimeout(U.current)),[]),B.useEffect(()=>{},[w,g]),y.jsxs(R9,{children:[y.jsx(b9,{visible:R,fadeMs:700,floatDur:1900,amp:8}),y.jsxs(I9,{ref:n,children:[K.map((Y,ot)=>y.jsx(A9,{top:Y.top,left:Y.left,right:Y.right,textWidth:Y.textWidth,textHeight:Y.textHeight,position:Y.position,isActive:w&&g===Y.section,anim:{circle:{duration:250,delay:120,easing:"cubic-bezier(0.22,1,0.36,1)"},line:{duration:500,delay:120,easing:"cubic-bezier(0.22,1,0.36,1)"},text:{duration:280,delay:80,easing:"cubic-bezier(0.22,1,0.36,1)"}},section:Y.section,currentSection:g,children:Y.info},ot)),y.jsx(Gp,{src:`${Hp}showroom/showRight.png`,alt:"Showroom Right",$opacity:lt}),y.jsx(Gp,{src:`${Hp}showroom/showCenter.png`,alt:"Showroom Center",$opacity:tt}),y.jsx(Gp,{src:`${Hp}showroom/showLeft.png`,alt:"Showroom Left",$opacity:X})]}),y.jsx(j9,{})]})}var Yp={exports:{}},Pl={},Qp={exports:{}},Xp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j_;function D9(){return j_||(j_=1,(function(n){function t(J,dt){var yt=J.length;J.push(dt);t:for(;0<yt;){var jt=yt-1>>>1,V=J[jt];if(0<o(V,dt))J[jt]=dt,J[yt]=V,yt=jt;else break t}}function i(J){return J.length===0?null:J[0]}function a(J){if(J.length===0)return null;var dt=J[0],yt=J.pop();if(yt!==dt){J[0]=yt;t:for(var jt=0,V=J.length,at=V>>>1;jt<at;){var ct=2*(jt+1)-1,ht=J[ct],gt=ct+1,Ct=J[gt];if(0>o(ht,yt))gt<V&&0>o(Ct,ht)?(J[jt]=Ct,J[gt]=yt,jt=gt):(J[jt]=ht,J[ct]=yt,jt=ct);else if(gt<V&&0>o(Ct,yt))J[jt]=Ct,J[gt]=yt,jt=gt;else break t}}return dt}function o(J,dt){var yt=J.sortIndex-dt.sortIndex;return yt!==0?yt:J.id-dt.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;n.unstable_now=function(){return u.now()}}else{var d=Date,m=d.now();n.unstable_now=function(){return d.now()-m}}var p=[],g=[],v=1,w=null,T=3,R=!1,M=!1,L=!1,U=!1,K=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,tt=typeof setImmediate<"u"?setImmediate:null;function lt(J){for(var dt=i(g);dt!==null;){if(dt.callback===null)a(g);else if(dt.startTime<=J)a(g),dt.sortIndex=dt.expirationTime,t(p,dt);else break;dt=i(g)}}function Y(J){if(L=!1,lt(J),!M)if(i(p)!==null)M=!0,ot||(ot=!0,z());else{var dt=i(g);dt!==null&&qt(Y,dt.startTime-J)}}var ot=!1,j=-1,I=5,C=-1;function O(){return U?!0:!(n.unstable_now()-C<I)}function k(){if(U=!1,ot){var J=n.unstable_now();C=J;var dt=!0;try{t:{M=!1,L&&(L=!1,X(j),j=-1),R=!0;var yt=T;try{e:{for(lt(J),w=i(p);w!==null&&!(w.expirationTime>J&&O());){var jt=w.callback;if(typeof jt=="function"){w.callback=null,T=w.priorityLevel;var V=jt(w.expirationTime<=J);if(J=n.unstable_now(),typeof V=="function"){w.callback=V,lt(J),dt=!0;break e}w===i(p)&&a(p),lt(J)}else a(p);w=i(p)}if(w!==null)dt=!0;else{var at=i(g);at!==null&&qt(Y,at.startTime-J),dt=!1}}break t}finally{w=null,T=yt,R=!1}dt=void 0}}finally{dt?z():ot=!1}}}var z;if(typeof tt=="function")z=function(){tt(k)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,se=D.port2;D.port1.onmessage=k,z=function(){se.postMessage(null)}}else z=function(){K(k,0)};function qt(J,dt){j=K(function(){J(n.unstable_now())},dt)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(J){J.callback=null},n.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<J?Math.floor(1e3/J):5},n.unstable_getCurrentPriorityLevel=function(){return T},n.unstable_next=function(J){switch(T){case 1:case 2:case 3:var dt=3;break;default:dt=T}var yt=T;T=dt;try{return J()}finally{T=yt}},n.unstable_requestPaint=function(){U=!0},n.unstable_runWithPriority=function(J,dt){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var yt=T;T=J;try{return dt()}finally{T=yt}},n.unstable_scheduleCallback=function(J,dt,yt){var jt=n.unstable_now();switch(typeof yt=="object"&&yt!==null?(yt=yt.delay,yt=typeof yt=="number"&&0<yt?jt+yt:jt):yt=jt,J){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=yt+V,J={id:v++,callback:dt,priorityLevel:J,startTime:yt,expirationTime:V,sortIndex:-1},yt>jt?(J.sortIndex=yt,t(g,J),i(p)===null&&J===i(g)&&(L?(X(j),j=-1):L=!0,qt(Y,yt-jt))):(J.sortIndex=V,t(p,J),M||R||(M=!0,ot||(ot=!0,z()))),J},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(J){var dt=T;return function(){var yt=T;T=dt;try{return J.apply(this,arguments)}finally{T=yt}}}})(Xp)),Xp}var C_;function N9(){return C_||(C_=1,Qp.exports=D9()),Qp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D_;function M9(){if(D_)return Pl;D_=1;var n=N9(),t=km(),i=MS();function a(e){var r="https://react.dev/errors/"+e;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)r+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var r=e,s=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(s=r.return),e=r.return;while(e)}return r.tag===3?s:null}function d(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(a(188))}function p(e){var r=e.alternate;if(!r){if(r=u(e),r===null)throw Error(a(188));return r!==e?null:e}for(var s=e,l=r;;){var h=s.return;if(h===null)break;var f=h.alternate;if(f===null){if(l=h.return,l!==null){s=l;continue}break}if(h.child===f.child){for(f=h.child;f;){if(f===s)return m(h),e;if(f===l)return m(h),r;f=f.sibling}throw Error(a(188))}if(s.return!==l.return)s=h,l=f;else{for(var E=!1,b=h.child;b;){if(b===s){E=!0,s=h,l=f;break}if(b===l){E=!0,l=h,s=f;break}b=b.sibling}if(!E){for(b=f.child;b;){if(b===s){E=!0,s=f,l=h;break}if(b===l){E=!0,l=f,s=h;break}b=b.sibling}if(!E)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:r}function g(e){var r=e.tag;if(r===5||r===26||r===27||r===6)return e;for(e=e.child;e!==null;){if(r=g(e),r!==null)return r;e=e.sibling}return null}var v=Object.assign,w=Symbol.for("react.element"),T=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),K=Symbol.for("react.provider"),X=Symbol.for("react.consumer"),tt=Symbol.for("react.context"),lt=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),ot=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function z(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var D=Symbol.for("react.client.reference");function se(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===D?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M:return"Fragment";case U:return"Profiler";case L:return"StrictMode";case Y:return"Suspense";case ot:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case tt:return(e.displayName||"Context")+".Provider";case X:return(e._context.displayName||"Context")+".Consumer";case lt:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case j:return r=e.displayName||null,r!==null?r:se(e.type)||"Memo";case I:r=e._payload,e=e._init;try{return se(e(r))}catch{}}return null}var qt=Array.isArray,J=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,dt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,yt={pending:!1,data:null,method:null,action:null},jt=[],V=-1;function at(e){return{current:e}}function ct(e){0>V||(e.current=jt[V],jt[V]=null,V--)}function ht(e,r){V++,jt[V]=e.current,e.current=r}var gt=at(null),Ct=at(null),_t=at(null),ge=at(null);function Lt(e,r){switch(ht(_t,r),ht(Ct,e),ht(gt,null),r.nodeType){case 9:case 11:e=(e=r.documentElement)&&(e=e.namespaceURI)?V1(e):0;break;default:if(e=r.tagName,r=r.namespaceURI)r=V1(r),e=k1(r,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ct(gt),ht(gt,e)}function Me(){ct(gt),ct(Ct),ct(_t)}function Ni(e){e.memoizedState!==null&&ht(ge,e);var r=gt.current,s=k1(r,e.type);r!==s&&(ht(Ct,e),ht(gt,s))}function Hn(e){Ct.current===e&&(ct(gt),ct(Ct)),ge.current===e&&(ct(ge),jl._currentValue=yt)}var ln=Object.prototype.hasOwnProperty,ua=n.unstable_scheduleCallback,as=n.unstable_cancelCallback,cd=n.unstable_shouldYield,jo=n.unstable_requestPaint,pn=n.unstable_now,Tu=n.unstable_getCurrentPriorityLevel,Oe=n.unstable_ImmediatePriority,Le=n.unstable_UserBlockingPriority,Mi=n.unstable_NormalPriority,hd=n.unstable_LowPriority,Co=n.unstable_IdlePriority,dd=n.log,ca=n.unstable_setDisableYieldValue,hr=null,tn=null;function Dn(e){if(typeof dd=="function"&&ca(e),tn&&typeof tn.setStrictMode=="function")try{tn.setStrictMode(hr,e)}catch{}}var un=Math.clz32?Math.clz32:Au,fd=Math.log,Su=Math.LN2;function Au(e){return e>>>=0,e===0?32:31-(fd(e)/Su|0)|0}var oi=256,dr=4194304;function Gn(e){var r=e&42;if(r!==0)return r;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Nn(e,r,s){var l=e.pendingLanes;if(l===0)return 0;var h=0,f=e.suspendedLanes,E=e.pingedLanes;e=e.warmLanes;var b=l&134217727;return b!==0?(l=b&~f,l!==0?h=Gn(l):(E&=b,E!==0?h=Gn(E):s||(s=b&~e,s!==0&&(h=Gn(s))))):(b=l&~f,b!==0?h=Gn(b):E!==0?h=Gn(E):s||(s=l&~e,s!==0&&(h=Gn(s)))),h===0?0:r!==0&&r!==h&&(r&f)===0&&(f=h&-h,s=r&-r,f>=s||f===32&&(s&4194048)!==0)?r:h}function fr(e,r){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&r)===0}function ss(e,r){switch(e){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Do(){var e=oi;return oi<<=1,(oi&4194048)===0&&(oi=256),e}function pr(){var e=dr;return dr<<=1,(dr&62914560)===0&&(dr=4194304),e}function os(e){for(var r=[],s=0;31>s;s++)r.push(e);return r}function ve(e,r){e.pendingLanes|=r,r!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ru(e,r,s,l,h,f){var E=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var b=e.entanglements,N=e.expirationTimes,H=e.hiddenUpdates;for(s=E&~s;0<s;){var et=31-un(s),rt=1<<et;b[et]=0,N[et]=-1;var G=H[et];if(G!==null)for(H[et]=null,et=0;et<G.length;et++){var Q=G[et];Q!==null&&(Q.lane&=-536870913)}s&=~rt}l!==0&&mr(e,l,0),f!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=f&~(E&~r))}function mr(e,r,s){e.pendingLanes|=r,e.suspendedLanes&=~r;var l=31-un(r);e.entangledLanes|=r,e.entanglements[l]=e.entanglements[l]|1073741824|s&4194090}function gr(e,r){var s=e.entangledLanes|=r;for(e=e.entanglements;s;){var l=31-un(s),h=1<<l;h&r|e[l]&r&&(e[l]|=r),s&=~h}}function No(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Mo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Oi(){var e=dt.p;return e!==0?e:(e=window.event,e===void 0?32:ex(e.type))}function pd(e,r){var s=dt.p;try{return dt.p=e,r()}finally{dt.p=s}}var li=Math.random().toString(36).slice(2),_e="__reactFiber$"+li,Ge="__reactProps$"+li,Vi="__reactContainer$"+li,ha="__reactEvents$"+li,da="__reactListeners$"+li,md="__reactHandles$"+li,Yn="__reactResources$"+li,yr="__reactMarker$"+li;function ls(e){delete e[_e],delete e[Ge],delete e[ha],delete e[da],delete e[md]}function ui(e){var r=e[_e];if(r)return r;for(var s=e.parentNode;s;){if(r=s[Vi]||s[_e]){if(s=r.alternate,r.child!==null||s!==null&&s.child!==null)for(e=z1(e);e!==null;){if(s=e[_e])return s;e=z1(e)}return r}e=s,s=e.parentNode}return null}function ci(e){if(e=e[_e]||e[Vi]){var r=e.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return e}return null}function xr(e){var r=e.tag;if(r===5||r===26||r===27||r===6)return e.stateNode;throw Error(a(33))}function vr(e){var r=e[Yn];return r||(r=e[Yn]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function Ee(e){e[yr]=!0}var Iu=new Set,fa={};function hi(e,r){di(e,r),di(e+"Capture",r)}function di(e,r){for(fa[e]=r,e=0;e<r.length;e++)Iu.add(r[e])}var pa=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),fi={},us={};function gd(e){return ln.call(us,e)?!0:ln.call(fi,e)?!1:pa.test(e)?us[e]=!0:(fi[e]=!0,!1)}function ma(e,r,s){if(gd(r))if(s===null)e.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(r);return;case"boolean":var l=r.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(r);return}}e.setAttribute(r,""+s)}}function ga(e,r,s){if(s===null)e.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttribute(r,""+s)}}function Mn(e,r,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(r,s,""+l)}}var ya,cs;function ki(e){if(ya===void 0)try{throw Error()}catch(s){var r=s.stack.trim().match(/\n( *(at )?)/);ya=r&&r[1]||"",cs=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ya+e+cs}var hs=!1;function ds(e,r){if(!e||hs)return"";hs=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(r){var rt=function(){throw Error()};if(Object.defineProperty(rt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(rt,[])}catch(Q){var G=Q}Reflect.construct(e,[],rt)}else{try{rt.call()}catch(Q){G=Q}e.call(rt.prototype)}}else{try{throw Error()}catch(Q){G=Q}(rt=e())&&typeof rt.catch=="function"&&rt.catch(function(){})}}catch(Q){if(Q&&G&&typeof Q.stack=="string")return[Q.stack,G.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=l.DetermineComponentFrameRoot(),E=f[0],b=f[1];if(E&&b){var N=E.split(`
`),H=b.split(`
`);for(h=l=0;l<N.length&&!N[l].includes("DetermineComponentFrameRoot");)l++;for(;h<H.length&&!H[h].includes("DetermineComponentFrameRoot");)h++;if(l===N.length||h===H.length)for(l=N.length-1,h=H.length-1;1<=l&&0<=h&&N[l]!==H[h];)h--;for(;1<=l&&0<=h;l--,h--)if(N[l]!==H[h]){if(l!==1||h!==1)do if(l--,h--,0>h||N[l]!==H[h]){var et=`
`+N[l].replace(" at new "," at ");return e.displayName&&et.includes("<anonymous>")&&(et=et.replace("<anonymous>",e.displayName)),et}while(1<=l&&0<=h);break}}}finally{hs=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?ki(s):""}function yd(e){switch(e.tag){case 26:case 27:case 5:return ki(e.type);case 16:return ki("Lazy");case 13:return ki("Suspense");case 19:return ki("SuspenseList");case 0:case 15:return ds(e.type,!1);case 11:return ds(e.type.render,!1);case 1:return ds(e.type,!0);case 31:return ki("Activity");default:return""}}function Qn(e){try{var r="";do r+=yd(e),e=e.return;while(e);return r}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function fe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _r(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function xa(e){var r=_r(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),l=""+e[r];if(!e.hasOwnProperty(r)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var h=s.get,f=s.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return h.call(this)},set:function(E){l=""+E,f.call(this,E)}}),Object.defineProperty(e,r,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function Er(e){e._valueTracker||(e._valueTracker=xa(e))}function Zt(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var s=r.getValue(),l="";return e&&(l=_r(e)?e.checked?"true":"false":e.value),e=l,e!==s?(r.setValue(e),!0):!1}function Pi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var va=/[\n"\\]/g;function ze(e){return e.replace(va,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Oo(e,r,s,l,h,f,E,b){e.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.type=E:e.removeAttribute("type"),r!=null?E==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+fe(r)):e.value!==""+fe(r)&&(e.value=""+fe(r)):E!=="submit"&&E!=="reset"||e.removeAttribute("value"),r!=null?ko(e,E,fe(r)):s!=null?ko(e,E,fe(s)):l!=null&&e.removeAttribute("value"),h==null&&f!=null&&(e.defaultChecked=!!f),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+fe(b):e.removeAttribute("name")}function Vo(e,r,s,l,h,f,E,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),r!=null||s!=null){if(!(f!=="submit"&&f!=="reset"||r!=null))return;s=s!=null?""+fe(s):"",r=r!=null?""+fe(r):s,b||r===e.value||(e.value=r),e.defaultValue=r}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=b?e.checked:!!l,e.defaultChecked=!!l,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(e.name=E)}function ko(e,r,s){r==="number"&&Pi(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function wr(e,r,s,l){if(e=e.options,r){r={};for(var h=0;h<s.length;h++)r["$"+s[h]]=!0;for(s=0;s<e.length;s++)h=r.hasOwnProperty("$"+e[s].value),e[s].selected!==h&&(e[s].selected=h),h&&l&&(e[s].defaultSelected=!0)}else{for(s=""+fe(s),r=null,h=0;h<e.length;h++){if(e[h].value===s){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}r!==null||e[h].disabled||(r=e[h])}r!==null&&(r.selected=!0)}}function ju(e,r,s){if(r!=null&&(r=""+fe(r),r!==e.value&&(e.value=r),s==null)){e.defaultValue!==r&&(e.defaultValue=r);return}e.defaultValue=s!=null?""+fe(s):""}function Cu(e,r,s,l){if(r==null){if(l!=null){if(s!=null)throw Error(a(92));if(qt(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),r=s}s=fe(r),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l)}function On(e,r){if(r){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=r;return}}e.textContent=r}var Ui=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Po(e,r,s){var l=r.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="":l?e.setProperty(r,s):typeof s!="number"||s===0||Ui.has(r)?r==="float"?e.cssFloat=s:e[r]=(""+s).trim():e[r]=s+"px"}function Uo(e,r,s){if(r!=null&&typeof r!="object")throw Error(a(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||r!=null&&r.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in r)l=r[h],r.hasOwnProperty(h)&&s[h]!==l&&Po(e,h,l)}else for(var f in r)r.hasOwnProperty(f)&&Po(e,f,r[f])}function fs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Du=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Nu=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xn(e){return Nu.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Lo=null;function zo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var br=null,cn=null;function Mu(e){var r=ci(e);if(r&&(e=r.stateNode)){var s=e[Ge]||null;t:switch(e=r.stateNode,r.type){case"input":if(Oo(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),r=s.name,s.type==="radio"&&r!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+ze(""+r)+'"][type="radio"]'),r=0;r<s.length;r++){var l=s[r];if(l!==e&&l.form===e.form){var h=l[Ge]||null;if(!h)throw Error(a(90));Oo(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(r=0;r<s.length;r++)l=s[r],l.form===e.form&&Zt(l)}break t;case"textarea":ju(e,s.value,s.defaultValue);break t;case"select":r=s.value,r!=null&&wr(e,!!s.multiple,r,!1)}}}var _a=!1;function Ea(e,r,s){if(_a)return e(r,s);_a=!0;try{var l=e(r);return l}finally{if(_a=!1,(br!==null||cn!==null)&&(wc(),br&&(r=br,e=cn,cn=br=null,Mu(r),e)))for(r=0;r<e.length;r++)Mu(e[r])}}function Tr(e,r){var s=e.stateNode;if(s===null)return null;var l=s[Ge]||null;if(l===null)return null;s=l[r];t:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,r,typeof s));return s}var hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Li=!1;if(hn)try{var Sr={};Object.defineProperty(Sr,"passive",{get:function(){Li=!0}}),window.addEventListener("test",Sr,Sr),window.removeEventListener("test",Sr,Sr)}catch{Li=!1}var Vn=null,ie=null,ps=null;function Ou(){if(ps)return ps;var e,r=ie,s=r.length,l,h="value"in Vn?Vn.value:Vn.textContent,f=h.length;for(e=0;e<s&&r[e]===h[e];e++);var E=s-e;for(l=1;l<=E&&r[s-l]===h[f-l];l++);return ps=h.slice(e,1<l?1-l:void 0)}function wa(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function ba(){return!0}function $o(){return!1}function Ve(e){function r(s,l,h,f,E){this._reactName=s,this._targetInst=h,this.type=l,this.nativeEvent=f,this.target=E,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(s=e[b],this[b]=s?s(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ba:$o,this.isPropagationStopped=$o,this}return v(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=ba)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=ba)},persist:function(){},isPersistent:ba}),r}var en={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ta=Ve(en),Sa=v({},en,{view:0,detail:0}),Aa=Ve(Sa),ms,Ra,pi,Ia=v({},Sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pi&&(pi&&e.type==="mousemove"?(ms=e.screenX-pi.screenX,Ra=e.screenY-pi.screenY):Ra=ms=0,pi=e),ms)},movementY:function(e){return"movementY"in e?e.movementY:Ra}}),ja=Ve(Ia),xd=v({},Ia,{dataTransfer:0}),Vu=Ve(xd),Ca=v({},Sa,{relatedTarget:0}),gs=Ve(Ca),ku=v({},en,{animationName:0,elapsedTime:0,pseudoElement:0}),Bo=Ve(ku),Fo=v({},en,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pu=Ve(Fo),ys=v({},en,{data:0}),qo=Ve(ys),Uu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zi={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zu(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=Lu[e])?!!r[e]:!1}function xs(){return zu}var $u=v({},Sa,{key:function(e){if(e.key){var r=Uu[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=wa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zi[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xs,charCode:function(e){return e.type==="keypress"?wa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vs=Ve($u),dn=v({},Ia,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ko=Ve(dn),Bu=v({},Sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xs}),Ar=Ve(Bu),c=v({},en,{propertyName:0,elapsedTime:0,pseudoElement:0}),x=Ve(c),_=v({},Ia,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),A=Ve(_),q=v({},en,{newState:0,oldState:0}),W=Ve(q),ut=[9,13,27,32],Rt=hn&&"CompositionEvent"in window,oe=null;hn&&"documentMode"in document&&(oe=document.documentMode);var Qt=hn&&"TextEvent"in window&&!oe,we=hn&&(!Rt||oe&&8<oe&&11>=oe),En=" ",mi=!1;function Wn(e,r){switch(e){case"keyup":return ut.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zn(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jn=!1;function Ho(e,r){switch(e){case"compositionend":return Zn(r);case"keypress":return r.which!==32?null:(mi=!0,En);case"textInput":return e=r.data,e===En&&mi?null:e;default:return null}}function Iw(e,r){if(Jn)return e==="compositionend"||!Rt&&Wn(e,r)?(e=Ou(),ps=ie=Vn=null,Jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return we&&r.locale!=="ko"?null:r.data;default:return null}}var jw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qg(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!jw[e.type]:r==="textarea"}function Xg(e,r,s,l){br?cn?cn.push(l):cn=[l]:br=l,r=Ic(r,"onChange"),0<r.length&&(s=new Ta("onChange","change",null,s,l),e.push({event:s,listeners:r}))}var Go=null,Yo=null;function Cw(e){C1(e,0)}function Fu(e){var r=xr(e);if(Zt(r))return e}function Wg(e,r){if(e==="change")return r}var Zg=!1;if(hn){var vd;if(hn){var _d="oninput"in document;if(!_d){var Jg=document.createElement("div");Jg.setAttribute("oninput","return;"),_d=typeof Jg.oninput=="function"}vd=_d}else vd=!1;Zg=vd&&(!document.documentMode||9<document.documentMode)}function t0(){Go&&(Go.detachEvent("onpropertychange",e0),Yo=Go=null)}function e0(e){if(e.propertyName==="value"&&Fu(Yo)){var r=[];Xg(r,Yo,e,zo(e)),Ea(Cw,r)}}function Dw(e,r,s){e==="focusin"?(t0(),Go=r,Yo=s,Go.attachEvent("onpropertychange",e0)):e==="focusout"&&t0()}function Nw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fu(Yo)}function Mw(e,r){if(e==="click")return Fu(r)}function Ow(e,r){if(e==="input"||e==="change")return Fu(r)}function Vw(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var wn=typeof Object.is=="function"?Object.is:Vw;function Qo(e,r){if(wn(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var s=Object.keys(e),l=Object.keys(r);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var h=s[l];if(!ln.call(r,h)||!wn(e[h],r[h]))return!1}return!0}function n0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function i0(e,r){var s=n0(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=r&&l>=r)return{node:s,offset:r-e};e=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=n0(s)}}function r0(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?r0(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function a0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var r=Pi(e.document);r instanceof e.HTMLIFrameElement;){try{var s=typeof r.contentWindow.location.href=="string"}catch{s=!1}if(s)e=r.contentWindow;else break;r=Pi(e.document)}return r}function Ed(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}var kw=hn&&"documentMode"in document&&11>=document.documentMode,_s=null,wd=null,Xo=null,bd=!1;function s0(e,r,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;bd||_s==null||_s!==Pi(l)||(l=_s,"selectionStart"in l&&Ed(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Xo&&Qo(Xo,l)||(Xo=l,l=Ic(wd,"onSelect"),0<l.length&&(r=new Ta("onSelect","select",null,r,s),e.push({event:r,listeners:l}),r.target=_s)))}function Da(e,r){var s={};return s[e.toLowerCase()]=r.toLowerCase(),s["Webkit"+e]="webkit"+r,s["Moz"+e]="moz"+r,s}var Es={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionrun:Da("Transition","TransitionRun"),transitionstart:Da("Transition","TransitionStart"),transitioncancel:Da("Transition","TransitionCancel"),transitionend:Da("Transition","TransitionEnd")},Td={},o0={};hn&&(o0=document.createElement("div").style,"AnimationEvent"in window||(delete Es.animationend.animation,delete Es.animationiteration.animation,delete Es.animationstart.animation),"TransitionEvent"in window||delete Es.transitionend.transition);function Na(e){if(Td[e])return Td[e];if(!Es[e])return e;var r=Es[e],s;for(s in r)if(r.hasOwnProperty(s)&&s in o0)return Td[e]=r[s];return e}var l0=Na("animationend"),u0=Na("animationiteration"),c0=Na("animationstart"),Pw=Na("transitionrun"),Uw=Na("transitionstart"),Lw=Na("transitioncancel"),h0=Na("transitionend"),d0=new Map,Sd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Sd.push("scrollEnd");function ti(e,r){d0.set(e,r),hi(r,[e])}var f0=new WeakMap;function kn(e,r){if(typeof e=="object"&&e!==null){var s=f0.get(e);return s!==void 0?s:(r={value:e,source:r,stack:Qn(r)},f0.set(e,r),r)}return{value:e,source:r,stack:Qn(r)}}var Pn=[],ws=0,Ad=0;function qu(){for(var e=ws,r=Ad=ws=0;r<e;){var s=Pn[r];Pn[r++]=null;var l=Pn[r];Pn[r++]=null;var h=Pn[r];Pn[r++]=null;var f=Pn[r];if(Pn[r++]=null,l!==null&&h!==null){var E=l.pending;E===null?h.next=h:(h.next=E.next,E.next=h),l.pending=h}f!==0&&p0(s,h,f)}}function Ku(e,r,s,l){Pn[ws++]=e,Pn[ws++]=r,Pn[ws++]=s,Pn[ws++]=l,Ad|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Rd(e,r,s,l){return Ku(e,r,s,l),Hu(e)}function bs(e,r){return Ku(e,null,null,r),Hu(e)}function p0(e,r,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var h=!1,f=e.return;f!==null;)f.childLanes|=s,l=f.alternate,l!==null&&(l.childLanes|=s),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(h=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,h&&r!==null&&(h=31-un(s),e=f.hiddenUpdates,l=e[h],l===null?e[h]=[r]:l.push(r),r.lane=s|536870912),f):null}function Hu(e){if(50<El)throw El=0,Of=null,Error(a(185));for(var r=e.return;r!==null;)e=r,r=e.return;return e.tag===3?e.stateNode:null}var Ts={};function zw(e,r,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(e,r,s,l){return new zw(e,r,s,l)}function Id(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $i(e,r){var s=e.alternate;return s===null?(s=bn(e.tag,r,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=r,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,r=e.dependencies,s.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function m0(e,r){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=r,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,r=s.dependencies,e.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),e}function Gu(e,r,s,l,h,f){var E=0;if(l=e,typeof e=="function")Id(e)&&(E=1);else if(typeof e=="string")E=Bb(e,s,gt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=bn(31,s,r,h),e.elementType=C,e.lanes=f,e;case M:return Ma(s.children,h,f,r);case L:E=8,h|=24;break;case U:return e=bn(12,s,r,h|2),e.elementType=U,e.lanes=f,e;case Y:return e=bn(13,s,r,h),e.elementType=Y,e.lanes=f,e;case ot:return e=bn(19,s,r,h),e.elementType=ot,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case K:case tt:E=10;break t;case X:E=9;break t;case lt:E=11;break t;case j:E=14;break t;case I:E=16,l=null;break t}E=29,s=Error(a(130,e===null?"null":typeof e,"")),l=null}return r=bn(E,s,r,h),r.elementType=e,r.type=l,r.lanes=f,r}function Ma(e,r,s,l){return e=bn(7,e,l,r),e.lanes=s,e}function jd(e,r,s){return e=bn(6,e,null,r),e.lanes=s,e}function Cd(e,r,s){return r=bn(4,e.children!==null?e.children:[],e.key,r),r.lanes=s,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}var Ss=[],As=0,Yu=null,Qu=0,Un=[],Ln=0,Oa=null,Bi=1,Fi="";function Va(e,r){Ss[As++]=Qu,Ss[As++]=Yu,Yu=e,Qu=r}function g0(e,r,s){Un[Ln++]=Bi,Un[Ln++]=Fi,Un[Ln++]=Oa,Oa=e;var l=Bi;e=Fi;var h=32-un(l)-1;l&=~(1<<h),s+=1;var f=32-un(r)+h;if(30<f){var E=h-h%5;f=(l&(1<<E)-1).toString(32),l>>=E,h-=E,Bi=1<<32-un(r)+h|s<<h|l,Fi=f+e}else Bi=1<<f|s<<h|l,Fi=e}function Dd(e){e.return!==null&&(Va(e,1),g0(e,1,0))}function Nd(e){for(;e===Yu;)Yu=Ss[--As],Ss[As]=null,Qu=Ss[--As],Ss[As]=null;for(;e===Oa;)Oa=Un[--Ln],Un[Ln]=null,Fi=Un[--Ln],Un[Ln]=null,Bi=Un[--Ln],Un[Ln]=null}var fn=null,ye=null,Kt=!1,ka=null,gi=!1,Md=Error(a(519));function Pa(e){var r=Error(a(418,""));throw Jo(kn(r,e)),Md}function y0(e){var r=e.stateNode,s=e.type,l=e.memoizedProps;switch(r[_e]=e,r[Ge]=l,s){case"dialog":kt("cancel",r),kt("close",r);break;case"iframe":case"object":case"embed":kt("load",r);break;case"video":case"audio":for(s=0;s<bl.length;s++)kt(bl[s],r);break;case"source":kt("error",r);break;case"img":case"image":case"link":kt("error",r),kt("load",r);break;case"details":kt("toggle",r);break;case"input":kt("invalid",r),Vo(r,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Er(r);break;case"select":kt("invalid",r);break;case"textarea":kt("invalid",r),Cu(r,l.value,l.defaultValue,l.children),Er(r)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||r.textContent===""+s||l.suppressHydrationWarning===!0||O1(r.textContent,s)?(l.popover!=null&&(kt("beforetoggle",r),kt("toggle",r)),l.onScroll!=null&&kt("scroll",r),l.onScrollEnd!=null&&kt("scrollend",r),l.onClick!=null&&(r.onclick=jc),r=!0):r=!1,r||Pa(e)}function x0(e){for(fn=e.return;fn;)switch(fn.tag){case 5:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:fn=fn.return}}function Wo(e){if(e!==fn)return!1;if(!Kt)return x0(e),Kt=!0,!1;var r=e.tag,s;if((s=r!==3&&r!==27)&&((s=r===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||Xf(e.type,e.memoizedProps)),s=!s),s&&ye&&Pa(e),x0(e),r===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(r===0){ye=ni(e.nextSibling);break t}r--}else s!=="$"&&s!=="$!"&&s!=="$?"||r++;e=e.nextSibling}ye=null}}else r===27?(r=ye,Br(e.type)?(e=tp,tp=null,ye=e):ye=r):ye=fn?ni(e.stateNode.nextSibling):null;return!0}function Zo(){ye=fn=null,Kt=!1}function v0(){var e=ka;return e!==null&&(yn===null?yn=e:yn.push.apply(yn,e),ka=null),e}function Jo(e){ka===null?ka=[e]:ka.push(e)}var Od=at(null),Ua=null,qi=null;function Rr(e,r,s){ht(Od,r._currentValue),r._currentValue=s}function Ki(e){e._currentValue=Od.current,ct(Od)}function Vd(e,r,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),e===s)break;e=e.return}}function kd(e,r,s,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var f=h.dependencies;if(f!==null){var E=h.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=h;for(var N=0;N<r.length;N++)if(b.context===r[N]){f.lanes|=s,b=f.alternate,b!==null&&(b.lanes|=s),Vd(f.return,s,e),l||(E=null);break t}f=b.next}}else if(h.tag===18){if(E=h.return,E===null)throw Error(a(341));E.lanes|=s,f=E.alternate,f!==null&&(f.lanes|=s),Vd(E,s,e),E=null}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===e){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}}function tl(e,r,s,l){e=null;for(var h=r,f=!1;h!==null;){if(!f){if((h.flags&524288)!==0)f=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var E=h.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var b=h.type;wn(h.pendingProps.value,E.value)||(e!==null?e.push(b):e=[b])}}else if(h===ge.current){if(E=h.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(jl):e=[jl])}h=h.return}e!==null&&kd(r,e,s,l),r.flags|=262144}function Xu(e){for(e=e.firstContext;e!==null;){if(!wn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function La(e){Ua=e,qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function nn(e){return _0(Ua,e)}function Wu(e,r){return Ua===null&&La(e),_0(e,r)}function _0(e,r){var s=r._currentValue;if(r={context:r,memoizedValue:s,next:null},qi===null){if(e===null)throw Error(a(308));qi=r,e.dependencies={lanes:0,firstContext:r},e.flags|=524288}else qi=qi.next=r;return s}var $w=typeof AbortController<"u"?AbortController:function(){var e=[],r=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){r.aborted=!0,e.forEach(function(s){return s()})}},Bw=n.unstable_scheduleCallback,Fw=n.unstable_NormalPriority,ke={$$typeof:tt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Pd(){return{controller:new $w,data:new Map,refCount:0}}function el(e){e.refCount--,e.refCount===0&&Bw(Fw,function(){e.controller.abort()})}var nl=null,Ud=0,Rs=0,Is=null;function qw(e,r){if(nl===null){var s=nl=[];Ud=0,Rs=$f(),Is={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Ud++,r.then(E0,E0),r}function E0(){if(--Ud===0&&nl!==null){Is!==null&&(Is.status="fulfilled");var e=nl;nl=null,Rs=0,Is=null;for(var r=0;r<e.length;r++)(0,e[r])()}}function Kw(e,r){var s=[],l={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return e.then(function(){l.status="fulfilled",l.value=r;for(var h=0;h<s.length;h++)(0,s[h])(r)},function(h){for(l.status="rejected",l.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),l}var w0=J.S;J.S=function(e,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&qw(e,r),w0!==null&&w0(e,r)};var za=at(null);function Ld(){var e=za.current;return e!==null?e:re.pooledCache}function Zu(e,r){r===null?ht(za,za.current):ht(za,r.pool)}function b0(){var e=Ld();return e===null?null:{parent:ke._currentValue,pool:e}}var il=Error(a(460)),T0=Error(a(474)),Ju=Error(a(542)),zd={then:function(){}};function S0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function tc(){}function A0(e,r,s){switch(s=e[s],s===void 0?e.push(r):s!==r&&(r.then(tc,tc),r=s),r.status){case"fulfilled":return r.value;case"rejected":throw e=r.reason,I0(e),e;default:if(typeof r.status=="string")r.then(tc,tc);else{if(e=re,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=r,e.status="pending",e.then(function(l){if(r.status==="pending"){var h=r;h.status="fulfilled",h.value=l}},function(l){if(r.status==="pending"){var h=r;h.status="rejected",h.reason=l}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw e=r.reason,I0(e),e}throw rl=r,il}}var rl=null;function R0(){if(rl===null)throw Error(a(459));var e=rl;return rl=null,e}function I0(e){if(e===il||e===Ju)throw Error(a(483))}var Ir=!1;function $d(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bd(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function jr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Cr(e,r,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Xt&2)!==0){var h=l.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),l.pending=r,r=Hu(e),p0(e,null,s),r}return Ku(e,l,r,s),Hu(e)}function al(e,r,s){if(r=r.updateQueue,r!==null&&(r=r.shared,(s&4194048)!==0)){var l=r.lanes;l&=e.pendingLanes,s|=l,r.lanes=s,gr(e,s)}}function Fd(e,r){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var h=null,f=null;if(s=s.firstBaseUpdate,s!==null){do{var E={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};f===null?h=f=E:f=f.next=E,s=s.next}while(s!==null);f===null?h=f=r:f=f.next=r}else h=f=r;s={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:f,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=r:e.next=r,s.lastBaseUpdate=r}var qd=!1;function sl(){if(qd){var e=Is;if(e!==null)throw e}}function ol(e,r,s,l){qd=!1;var h=e.updateQueue;Ir=!1;var f=h.firstBaseUpdate,E=h.lastBaseUpdate,b=h.shared.pending;if(b!==null){h.shared.pending=null;var N=b,H=N.next;N.next=null,E===null?f=H:E.next=H,E=N;var et=e.alternate;et!==null&&(et=et.updateQueue,b=et.lastBaseUpdate,b!==E&&(b===null?et.firstBaseUpdate=H:b.next=H,et.lastBaseUpdate=N))}if(f!==null){var rt=h.baseState;E=0,et=H=N=null,b=f;do{var G=b.lane&-536870913,Q=G!==b.lane;if(Q?(zt&G)===G:(l&G)===G){G!==0&&G===Rs&&(qd=!0),et!==null&&(et=et.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Tt=e,Et=b;G=r;var ee=s;switch(Et.tag){case 1:if(Tt=Et.payload,typeof Tt=="function"){rt=Tt.call(ee,rt,G);break t}rt=Tt;break t;case 3:Tt.flags=Tt.flags&-65537|128;case 0:if(Tt=Et.payload,G=typeof Tt=="function"?Tt.call(ee,rt,G):Tt,G==null)break t;rt=v({},rt,G);break t;case 2:Ir=!0}}G=b.callback,G!==null&&(e.flags|=64,Q&&(e.flags|=8192),Q=h.callbacks,Q===null?h.callbacks=[G]:Q.push(G))}else Q={lane:G,tag:b.tag,payload:b.payload,callback:b.callback,next:null},et===null?(H=et=Q,N=rt):et=et.next=Q,E|=G;if(b=b.next,b===null){if(b=h.shared.pending,b===null)break;Q=b,b=Q.next,Q.next=null,h.lastBaseUpdate=Q,h.shared.pending=null}}while(!0);et===null&&(N=rt),h.baseState=N,h.firstBaseUpdate=H,h.lastBaseUpdate=et,f===null&&(h.shared.lanes=0),Ur|=E,e.lanes=E,e.memoizedState=rt}}function j0(e,r){if(typeof e!="function")throw Error(a(191,e));e.call(r)}function C0(e,r){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)j0(s[e],r)}var js=at(null),ec=at(0);function D0(e,r){e=Zi,ht(ec,e),ht(js,r),Zi=e|r.baseLanes}function Kd(){ht(ec,Zi),ht(js,js.current)}function Hd(){Zi=ec.current,ct(js),ct(ec)}var Dr=0,Mt=null,Jt=null,Re=null,nc=!1,Cs=!1,$a=!1,ic=0,ll=0,Ds=null,Hw=0;function be(){throw Error(a(321))}function Gd(e,r){if(r===null)return!1;for(var s=0;s<r.length&&s<e.length;s++)if(!wn(e[s],r[s]))return!1;return!0}function Yd(e,r,s,l,h,f){return Dr=f,Mt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,J.H=e===null||e.memoizedState===null?py:my,$a=!1,f=s(l,h),$a=!1,Cs&&(f=M0(r,s,l,h)),N0(e),f}function N0(e){J.H=uc;var r=Jt!==null&&Jt.next!==null;if(Dr=0,Re=Jt=Mt=null,nc=!1,ll=0,Ds=null,r)throw Error(a(300));e===null||$e||(e=e.dependencies,e!==null&&Xu(e)&&($e=!0))}function M0(e,r,s,l){Mt=e;var h=0;do{if(Cs&&(Ds=null),ll=0,Cs=!1,25<=h)throw Error(a(301));if(h+=1,Re=Jt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}J.H=Jw,f=r(s,l)}while(Cs);return f}function Gw(){var e=J.H,r=e.useState()[0];return r=typeof r.then=="function"?ul(r):r,e=e.useState()[0],(Jt!==null?Jt.memoizedState:null)!==e&&(Mt.flags|=1024),r}function Qd(){var e=ic!==0;return ic=0,e}function Xd(e,r,s){r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~s}function Wd(e){if(nc){for(e=e.memoizedState;e!==null;){var r=e.queue;r!==null&&(r.pending=null),e=e.next}nc=!1}Dr=0,Re=Jt=Mt=null,Cs=!1,ll=ic=0,Ds=null}function mn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?Mt.memoizedState=Re=e:Re=Re.next=e,Re}function Ie(){if(Jt===null){var e=Mt.alternate;e=e!==null?e.memoizedState:null}else e=Jt.next;var r=Re===null?Mt.memoizedState:Re.next;if(r!==null)Re=r,Jt=e;else{if(e===null)throw Mt.alternate===null?Error(a(467)):Error(a(310));Jt=e,e={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},Re===null?Mt.memoizedState=Re=e:Re=Re.next=e}return Re}function Zd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ul(e){var r=ll;return ll+=1,Ds===null&&(Ds=[]),e=A0(Ds,e,r),r=Mt,(Re===null?r.memoizedState:Re.next)===null&&(r=r.alternate,J.H=r===null||r.memoizedState===null?py:my),e}function rc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ul(e);if(e.$$typeof===tt)return nn(e)}throw Error(a(438,String(e)))}function Jd(e){var r=null,s=Mt.updateQueue;if(s!==null&&(r=s.memoCache),r==null){var l=Mt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(r={data:l.data.map(function(h){return h.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),s===null&&(s=Zd(),Mt.updateQueue=s),s.memoCache=r,s=r.data[r.index],s===void 0)for(s=r.data[r.index]=Array(e),l=0;l<e;l++)s[l]=O;return r.index++,s}function Hi(e,r){return typeof r=="function"?r(e):r}function ac(e){var r=Ie();return tf(r,Jt,e)}function tf(e,r,s){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var h=e.baseQueue,f=l.pending;if(f!==null){if(h!==null){var E=h.next;h.next=f.next,f.next=E}r.baseQueue=h=f,l.pending=null}if(f=e.baseState,h===null)e.memoizedState=f;else{r=h.next;var b=E=null,N=null,H=r,et=!1;do{var rt=H.lane&-536870913;if(rt!==H.lane?(zt&rt)===rt:(Dr&rt)===rt){var G=H.revertLane;if(G===0)N!==null&&(N=N.next={lane:0,revertLane:0,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),rt===Rs&&(et=!0);else if((Dr&G)===G){H=H.next,G===Rs&&(et=!0);continue}else rt={lane:0,revertLane:H.revertLane,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},N===null?(b=N=rt,E=f):N=N.next=rt,Mt.lanes|=G,Ur|=G;rt=H.action,$a&&s(f,rt),f=H.hasEagerState?H.eagerState:s(f,rt)}else G={lane:rt,revertLane:H.revertLane,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},N===null?(b=N=G,E=f):N=N.next=G,Mt.lanes|=rt,Ur|=rt;H=H.next}while(H!==null&&H!==r);if(N===null?E=f:N.next=b,!wn(f,e.memoizedState)&&($e=!0,et&&(s=Is,s!==null)))throw s;e.memoizedState=f,e.baseState=E,e.baseQueue=N,l.lastRenderedState=f}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function ef(e){var r=Ie(),s=r.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var l=s.dispatch,h=s.pending,f=r.memoizedState;if(h!==null){s.pending=null;var E=h=h.next;do f=e(f,E.action),E=E.next;while(E!==h);wn(f,r.memoizedState)||($e=!0),r.memoizedState=f,r.baseQueue===null&&(r.baseState=f),s.lastRenderedState=f}return[f,l]}function O0(e,r,s){var l=Mt,h=Ie(),f=Kt;if(f){if(s===void 0)throw Error(a(407));s=s()}else s=r();var E=!wn((Jt||h).memoizedState,s);E&&(h.memoizedState=s,$e=!0),h=h.queue;var b=P0.bind(null,l,h,e);if(cl(2048,8,b,[e]),h.getSnapshot!==r||E||Re!==null&&Re.memoizedState.tag&1){if(l.flags|=2048,Ns(9,sc(),k0.bind(null,l,h,s,r),null),re===null)throw Error(a(349));f||(Dr&124)!==0||V0(l,r,s)}return s}function V0(e,r,s){e.flags|=16384,e={getSnapshot:r,value:s},r=Mt.updateQueue,r===null?(r=Zd(),Mt.updateQueue=r,r.stores=[e]):(s=r.stores,s===null?r.stores=[e]:s.push(e))}function k0(e,r,s,l){r.value=s,r.getSnapshot=l,U0(r)&&L0(e)}function P0(e,r,s){return s(function(){U0(r)&&L0(e)})}function U0(e){var r=e.getSnapshot;e=e.value;try{var s=r();return!wn(e,s)}catch{return!0}}function L0(e){var r=bs(e,2);r!==null&&In(r,e,2)}function nf(e){var r=mn();if(typeof e=="function"){var s=e;if(e=s(),$a){Dn(!0);try{s()}finally{Dn(!1)}}}return r.memoizedState=r.baseState=e,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:e},r}function z0(e,r,s,l){return e.baseState=s,tf(e,Jt,typeof l=="function"?l:Hi)}function Yw(e,r,s,l,h){if(lc(e))throw Error(a(485));if(e=r.action,e!==null){var f={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){f.listeners.push(E)}};J.T!==null?s(!0):f.isTransition=!1,l(f),s=r.pending,s===null?(f.next=r.pending=f,$0(r,f)):(f.next=s.next,r.pending=s.next=f)}}function $0(e,r){var s=r.action,l=r.payload,h=e.state;if(r.isTransition){var f=J.T,E={};J.T=E;try{var b=s(h,l),N=J.S;N!==null&&N(E,b),B0(e,r,b)}catch(H){rf(e,r,H)}finally{J.T=f}}else try{f=s(h,l),B0(e,r,f)}catch(H){rf(e,r,H)}}function B0(e,r,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){F0(e,r,l)},function(l){return rf(e,r,l)}):F0(e,r,s)}function F0(e,r,s){r.status="fulfilled",r.value=s,q0(r),e.state=s,r=e.pending,r!==null&&(s=r.next,s===r?e.pending=null:(s=s.next,r.next=s,$0(e,s)))}function rf(e,r,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do r.status="rejected",r.reason=s,q0(r),r=r.next;while(r!==l)}e.action=null}function q0(e){e=e.listeners;for(var r=0;r<e.length;r++)(0,e[r])()}function K0(e,r){return r}function H0(e,r){if(Kt){var s=re.formState;if(s!==null){t:{var l=Mt;if(Kt){if(ye){e:{for(var h=ye,f=gi;h.nodeType!==8;){if(!f){h=null;break e}if(h=ni(h.nextSibling),h===null){h=null;break e}}f=h.data,h=f==="F!"||f==="F"?h:null}if(h){ye=ni(h.nextSibling),l=h.data==="F!";break t}}Pa(l)}l=!1}l&&(r=s[0])}}return s=mn(),s.memoizedState=s.baseState=r,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:K0,lastRenderedState:r},s.queue=l,s=hy.bind(null,Mt,l),l.dispatch=s,l=nf(!1),f=uf.bind(null,Mt,!1,l.queue),l=mn(),h={state:r,dispatch:null,action:e,pending:null},l.queue=h,s=Yw.bind(null,Mt,h,f,s),h.dispatch=s,l.memoizedState=e,[r,s,!1]}function G0(e){var r=Ie();return Y0(r,Jt,e)}function Y0(e,r,s){if(r=tf(e,r,K0)[0],e=ac(Hi)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var l=ul(r)}catch(E){throw E===il?Ju:E}else l=r;r=Ie();var h=r.queue,f=h.dispatch;return s!==r.memoizedState&&(Mt.flags|=2048,Ns(9,sc(),Qw.bind(null,h,s),null)),[l,f,e]}function Qw(e,r){e.action=r}function Q0(e){var r=Ie(),s=Jt;if(s!==null)return Y0(r,s,e);Ie(),r=r.memoizedState,s=Ie();var l=s.queue.dispatch;return s.memoizedState=e,[r,l,!1]}function Ns(e,r,s,l){return e={tag:e,create:s,deps:l,inst:r,next:null},r=Mt.updateQueue,r===null&&(r=Zd(),Mt.updateQueue=r),s=r.lastEffect,s===null?r.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,r.lastEffect=e),e}function sc(){return{destroy:void 0,resource:void 0}}function X0(){return Ie().memoizedState}function oc(e,r,s,l){var h=mn();l=l===void 0?null:l,Mt.flags|=e,h.memoizedState=Ns(1|r,sc(),s,l)}function cl(e,r,s,l){var h=Ie();l=l===void 0?null:l;var f=h.memoizedState.inst;Jt!==null&&l!==null&&Gd(l,Jt.memoizedState.deps)?h.memoizedState=Ns(r,f,s,l):(Mt.flags|=e,h.memoizedState=Ns(1|r,f,s,l))}function W0(e,r){oc(8390656,8,e,r)}function Z0(e,r){cl(2048,8,e,r)}function J0(e,r){return cl(4,2,e,r)}function ty(e,r){return cl(4,4,e,r)}function ey(e,r){if(typeof r=="function"){e=e();var s=r(e);return function(){typeof s=="function"?s():r(null)}}if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function ny(e,r,s){s=s!=null?s.concat([e]):null,cl(4,4,ey.bind(null,r,e),s)}function af(){}function iy(e,r){var s=Ie();r=r===void 0?null:r;var l=s.memoizedState;return r!==null&&Gd(r,l[1])?l[0]:(s.memoizedState=[e,r],e)}function ry(e,r){var s=Ie();r=r===void 0?null:r;var l=s.memoizedState;if(r!==null&&Gd(r,l[1]))return l[0];if(l=e(),$a){Dn(!0);try{e()}finally{Dn(!1)}}return s.memoizedState=[l,r],l}function sf(e,r,s){return s===void 0||(Dr&1073741824)!==0?e.memoizedState=r:(e.memoizedState=s,e=o1(),Mt.lanes|=e,Ur|=e,s)}function ay(e,r,s,l){return wn(s,r)?s:js.current!==null?(e=sf(e,s,l),wn(e,r)||($e=!0),e):(Dr&42)===0?($e=!0,e.memoizedState=s):(e=o1(),Mt.lanes|=e,Ur|=e,r)}function sy(e,r,s,l,h){var f=dt.p;dt.p=f!==0&&8>f?f:8;var E=J.T,b={};J.T=b,uf(e,!1,r,s);try{var N=h(),H=J.S;if(H!==null&&H(b,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var et=Kw(N,l);hl(e,r,et,Rn(e))}else hl(e,r,l,Rn(e))}catch(rt){hl(e,r,{then:function(){},status:"rejected",reason:rt},Rn())}finally{dt.p=f,J.T=E}}function Xw(){}function of(e,r,s,l){if(e.tag!==5)throw Error(a(476));var h=oy(e).queue;sy(e,h,r,yt,s===null?Xw:function(){return ly(e),s(l)})}function oy(e){var r=e.memoizedState;if(r!==null)return r;r={memoizedState:yt,baseState:yt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:yt},next:null};var s={};return r.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:s},next:null},e.memoizedState=r,e=e.alternate,e!==null&&(e.memoizedState=r),r}function ly(e){var r=oy(e).next.queue;hl(e,r,{},Rn())}function lf(){return nn(jl)}function uy(){return Ie().memoizedState}function cy(){return Ie().memoizedState}function Ww(e){for(var r=e.return;r!==null;){switch(r.tag){case 24:case 3:var s=Rn();e=jr(s);var l=Cr(r,e,s);l!==null&&(In(l,r,s),al(l,r,s)),r={cache:Pd()},e.payload=r;return}r=r.return}}function Zw(e,r,s){var l=Rn();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},lc(e)?dy(r,s):(s=Rd(e,r,s,l),s!==null&&(In(s,e,l),fy(s,r,l)))}function hy(e,r,s){var l=Rn();hl(e,r,s,l)}function hl(e,r,s,l){var h={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(lc(e))dy(r,h);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=r.lastRenderedReducer,f!==null))try{var E=r.lastRenderedState,b=f(E,s);if(h.hasEagerState=!0,h.eagerState=b,wn(b,E))return Ku(e,r,h,0),re===null&&qu(),!1}catch{}finally{}if(s=Rd(e,r,h,l),s!==null)return In(s,e,l),fy(s,r,l),!0}return!1}function uf(e,r,s,l){if(l={lane:2,revertLane:$f(),action:l,hasEagerState:!1,eagerState:null,next:null},lc(e)){if(r)throw Error(a(479))}else r=Rd(e,s,l,2),r!==null&&In(r,e,2)}function lc(e){var r=e.alternate;return e===Mt||r!==null&&r===Mt}function dy(e,r){Cs=nc=!0;var s=e.pending;s===null?r.next=r:(r.next=s.next,s.next=r),e.pending=r}function fy(e,r,s){if((s&4194048)!==0){var l=r.lanes;l&=e.pendingLanes,s|=l,r.lanes=s,gr(e,s)}}var uc={readContext:nn,use:rc,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useLayoutEffect:be,useInsertionEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useSyncExternalStore:be,useId:be,useHostTransitionStatus:be,useFormState:be,useActionState:be,useOptimistic:be,useMemoCache:be,useCacheRefresh:be},py={readContext:nn,use:rc,useCallback:function(e,r){return mn().memoizedState=[e,r===void 0?null:r],e},useContext:nn,useEffect:W0,useImperativeHandle:function(e,r,s){s=s!=null?s.concat([e]):null,oc(4194308,4,ey.bind(null,r,e),s)},useLayoutEffect:function(e,r){return oc(4194308,4,e,r)},useInsertionEffect:function(e,r){oc(4,2,e,r)},useMemo:function(e,r){var s=mn();r=r===void 0?null:r;var l=e();if($a){Dn(!0);try{e()}finally{Dn(!1)}}return s.memoizedState=[l,r],l},useReducer:function(e,r,s){var l=mn();if(s!==void 0){var h=s(r);if($a){Dn(!0);try{s(r)}finally{Dn(!1)}}}else h=r;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=Zw.bind(null,Mt,e),[l.memoizedState,e]},useRef:function(e){var r=mn();return e={current:e},r.memoizedState=e},useState:function(e){e=nf(e);var r=e.queue,s=hy.bind(null,Mt,r);return r.dispatch=s,[e.memoizedState,s]},useDebugValue:af,useDeferredValue:function(e,r){var s=mn();return sf(s,e,r)},useTransition:function(){var e=nf(!1);return e=sy.bind(null,Mt,e.queue,!0,!1),mn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,r,s){var l=Mt,h=mn();if(Kt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=r(),re===null)throw Error(a(349));(zt&124)!==0||V0(l,r,s)}h.memoizedState=s;var f={value:s,getSnapshot:r};return h.queue=f,W0(P0.bind(null,l,f,e),[e]),l.flags|=2048,Ns(9,sc(),k0.bind(null,l,f,s,r),null),s},useId:function(){var e=mn(),r=re.identifierPrefix;if(Kt){var s=Fi,l=Bi;s=(l&~(1<<32-un(l)-1)).toString(32)+s,r="«"+r+"R"+s,s=ic++,0<s&&(r+="H"+s.toString(32)),r+="»"}else s=Hw++,r="«"+r+"r"+s.toString(32)+"»";return e.memoizedState=r},useHostTransitionStatus:lf,useFormState:H0,useActionState:H0,useOptimistic:function(e){var r=mn();r.memoizedState=r.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=s,r=uf.bind(null,Mt,!0,s),s.dispatch=r,[e,r]},useMemoCache:Jd,useCacheRefresh:function(){return mn().memoizedState=Ww.bind(null,Mt)}},my={readContext:nn,use:rc,useCallback:iy,useContext:nn,useEffect:Z0,useImperativeHandle:ny,useInsertionEffect:J0,useLayoutEffect:ty,useMemo:ry,useReducer:ac,useRef:X0,useState:function(){return ac(Hi)},useDebugValue:af,useDeferredValue:function(e,r){var s=Ie();return ay(s,Jt.memoizedState,e,r)},useTransition:function(){var e=ac(Hi)[0],r=Ie().memoizedState;return[typeof e=="boolean"?e:ul(e),r]},useSyncExternalStore:O0,useId:uy,useHostTransitionStatus:lf,useFormState:G0,useActionState:G0,useOptimistic:function(e,r){var s=Ie();return z0(s,Jt,e,r)},useMemoCache:Jd,useCacheRefresh:cy},Jw={readContext:nn,use:rc,useCallback:iy,useContext:nn,useEffect:Z0,useImperativeHandle:ny,useInsertionEffect:J0,useLayoutEffect:ty,useMemo:ry,useReducer:ef,useRef:X0,useState:function(){return ef(Hi)},useDebugValue:af,useDeferredValue:function(e,r){var s=Ie();return Jt===null?sf(s,e,r):ay(s,Jt.memoizedState,e,r)},useTransition:function(){var e=ef(Hi)[0],r=Ie().memoizedState;return[typeof e=="boolean"?e:ul(e),r]},useSyncExternalStore:O0,useId:uy,useHostTransitionStatus:lf,useFormState:Q0,useActionState:Q0,useOptimistic:function(e,r){var s=Ie();return Jt!==null?z0(s,Jt,e,r):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:Jd,useCacheRefresh:cy},Ms=null,dl=0;function cc(e){var r=dl;return dl+=1,Ms===null&&(Ms=[]),A0(Ms,e,r)}function fl(e,r){r=r.props.ref,e.ref=r!==void 0?r:null}function hc(e,r){throw r.$$typeof===w?Error(a(525)):(e=Object.prototype.toString.call(r),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e)))}function gy(e){var r=e._init;return r(e._payload)}function yy(e){function r($,P){if(e){var F=$.deletions;F===null?($.deletions=[P],$.flags|=16):F.push(P)}}function s($,P){if(!e)return null;for(;P!==null;)r($,P),P=P.sibling;return null}function l($){for(var P=new Map;$!==null;)$.key!==null?P.set($.key,$):P.set($.index,$),$=$.sibling;return P}function h($,P){return $=$i($,P),$.index=0,$.sibling=null,$}function f($,P,F){return $.index=F,e?(F=$.alternate,F!==null?(F=F.index,F<P?($.flags|=67108866,P):F):($.flags|=67108866,P)):($.flags|=1048576,P)}function E($){return e&&$.alternate===null&&($.flags|=67108866),$}function b($,P,F,nt){return P===null||P.tag!==6?(P=jd(F,$.mode,nt),P.return=$,P):(P=h(P,F),P.return=$,P)}function N($,P,F,nt){var mt=F.type;return mt===M?et($,P,F.props.children,nt,F.key):P!==null&&(P.elementType===mt||typeof mt=="object"&&mt!==null&&mt.$$typeof===I&&gy(mt)===P.type)?(P=h(P,F.props),fl(P,F),P.return=$,P):(P=Gu(F.type,F.key,F.props,null,$.mode,nt),fl(P,F),P.return=$,P)}function H($,P,F,nt){return P===null||P.tag!==4||P.stateNode.containerInfo!==F.containerInfo||P.stateNode.implementation!==F.implementation?(P=Cd(F,$.mode,nt),P.return=$,P):(P=h(P,F.children||[]),P.return=$,P)}function et($,P,F,nt,mt){return P===null||P.tag!==7?(P=Ma(F,$.mode,nt,mt),P.return=$,P):(P=h(P,F),P.return=$,P)}function rt($,P,F){if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return P=jd(""+P,$.mode,F),P.return=$,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case T:return F=Gu(P.type,P.key,P.props,null,$.mode,F),fl(F,P),F.return=$,F;case R:return P=Cd(P,$.mode,F),P.return=$,P;case I:var nt=P._init;return P=nt(P._payload),rt($,P,F)}if(qt(P)||z(P))return P=Ma(P,$.mode,F,null),P.return=$,P;if(typeof P.then=="function")return rt($,cc(P),F);if(P.$$typeof===tt)return rt($,Wu($,P),F);hc($,P)}return null}function G($,P,F,nt){var mt=P!==null?P.key:null;if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return mt!==null?null:b($,P,""+F,nt);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case T:return F.key===mt?N($,P,F,nt):null;case R:return F.key===mt?H($,P,F,nt):null;case I:return mt=F._init,F=mt(F._payload),G($,P,F,nt)}if(qt(F)||z(F))return mt!==null?null:et($,P,F,nt,null);if(typeof F.then=="function")return G($,P,cc(F),nt);if(F.$$typeof===tt)return G($,P,Wu($,F),nt);hc($,F)}return null}function Q($,P,F,nt,mt){if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return $=$.get(F)||null,b(P,$,""+nt,mt);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case T:return $=$.get(nt.key===null?F:nt.key)||null,N(P,$,nt,mt);case R:return $=$.get(nt.key===null?F:nt.key)||null,H(P,$,nt,mt);case I:var Ot=nt._init;return nt=Ot(nt._payload),Q($,P,F,nt,mt)}if(qt(nt)||z(nt))return $=$.get(F)||null,et(P,$,nt,mt,null);if(typeof nt.then=="function")return Q($,P,F,cc(nt),mt);if(nt.$$typeof===tt)return Q($,P,F,Wu(P,nt),mt);hc(P,nt)}return null}function Tt($,P,F,nt){for(var mt=null,Ot=null,xt=P,wt=P=0,Fe=null;xt!==null&&wt<F.length;wt++){xt.index>wt?(Fe=xt,xt=null):Fe=xt.sibling;var Ft=G($,xt,F[wt],nt);if(Ft===null){xt===null&&(xt=Fe);break}e&&xt&&Ft.alternate===null&&r($,xt),P=f(Ft,P,wt),Ot===null?mt=Ft:Ot.sibling=Ft,Ot=Ft,xt=Fe}if(wt===F.length)return s($,xt),Kt&&Va($,wt),mt;if(xt===null){for(;wt<F.length;wt++)xt=rt($,F[wt],nt),xt!==null&&(P=f(xt,P,wt),Ot===null?mt=xt:Ot.sibling=xt,Ot=xt);return Kt&&Va($,wt),mt}for(xt=l(xt);wt<F.length;wt++)Fe=Q(xt,$,wt,F[wt],nt),Fe!==null&&(e&&Fe.alternate!==null&&xt.delete(Fe.key===null?wt:Fe.key),P=f(Fe,P,wt),Ot===null?mt=Fe:Ot.sibling=Fe,Ot=Fe);return e&&xt.forEach(function(Gr){return r($,Gr)}),Kt&&Va($,wt),mt}function Et($,P,F,nt){if(F==null)throw Error(a(151));for(var mt=null,Ot=null,xt=P,wt=P=0,Fe=null,Ft=F.next();xt!==null&&!Ft.done;wt++,Ft=F.next()){xt.index>wt?(Fe=xt,xt=null):Fe=xt.sibling;var Gr=G($,xt,Ft.value,nt);if(Gr===null){xt===null&&(xt=Fe);break}e&&xt&&Gr.alternate===null&&r($,xt),P=f(Gr,P,wt),Ot===null?mt=Gr:Ot.sibling=Gr,Ot=Gr,xt=Fe}if(Ft.done)return s($,xt),Kt&&Va($,wt),mt;if(xt===null){for(;!Ft.done;wt++,Ft=F.next())Ft=rt($,Ft.value,nt),Ft!==null&&(P=f(Ft,P,wt),Ot===null?mt=Ft:Ot.sibling=Ft,Ot=Ft);return Kt&&Va($,wt),mt}for(xt=l(xt);!Ft.done;wt++,Ft=F.next())Ft=Q(xt,$,wt,Ft.value,nt),Ft!==null&&(e&&Ft.alternate!==null&&xt.delete(Ft.key===null?wt:Ft.key),P=f(Ft,P,wt),Ot===null?mt=Ft:Ot.sibling=Ft,Ot=Ft);return e&&xt.forEach(function(tT){return r($,tT)}),Kt&&Va($,wt),mt}function ee($,P,F,nt){if(typeof F=="object"&&F!==null&&F.type===M&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case T:t:{for(var mt=F.key;P!==null;){if(P.key===mt){if(mt=F.type,mt===M){if(P.tag===7){s($,P.sibling),nt=h(P,F.props.children),nt.return=$,$=nt;break t}}else if(P.elementType===mt||typeof mt=="object"&&mt!==null&&mt.$$typeof===I&&gy(mt)===P.type){s($,P.sibling),nt=h(P,F.props),fl(nt,F),nt.return=$,$=nt;break t}s($,P);break}else r($,P);P=P.sibling}F.type===M?(nt=Ma(F.props.children,$.mode,nt,F.key),nt.return=$,$=nt):(nt=Gu(F.type,F.key,F.props,null,$.mode,nt),fl(nt,F),nt.return=$,$=nt)}return E($);case R:t:{for(mt=F.key;P!==null;){if(P.key===mt)if(P.tag===4&&P.stateNode.containerInfo===F.containerInfo&&P.stateNode.implementation===F.implementation){s($,P.sibling),nt=h(P,F.children||[]),nt.return=$,$=nt;break t}else{s($,P);break}else r($,P);P=P.sibling}nt=Cd(F,$.mode,nt),nt.return=$,$=nt}return E($);case I:return mt=F._init,F=mt(F._payload),ee($,P,F,nt)}if(qt(F))return Tt($,P,F,nt);if(z(F)){if(mt=z(F),typeof mt!="function")throw Error(a(150));return F=mt.call(F),Et($,P,F,nt)}if(typeof F.then=="function")return ee($,P,cc(F),nt);if(F.$$typeof===tt)return ee($,P,Wu($,F),nt);hc($,F)}return typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint"?(F=""+F,P!==null&&P.tag===6?(s($,P.sibling),nt=h(P,F),nt.return=$,$=nt):(s($,P),nt=jd(F,$.mode,nt),nt.return=$,$=nt),E($)):s($,P)}return function($,P,F,nt){try{dl=0;var mt=ee($,P,F,nt);return Ms=null,mt}catch(xt){if(xt===il||xt===Ju)throw xt;var Ot=bn(29,xt,null,$.mode);return Ot.lanes=nt,Ot.return=$,Ot}finally{}}}var Os=yy(!0),xy=yy(!1),zn=at(null),yi=null;function Nr(e){var r=e.alternate;ht(Pe,Pe.current&1),ht(zn,e),yi===null&&(r===null||js.current!==null||r.memoizedState!==null)&&(yi=e)}function vy(e){if(e.tag===22){if(ht(Pe,Pe.current),ht(zn,e),yi===null){var r=e.alternate;r!==null&&r.memoizedState!==null&&(yi=e)}}else Mr()}function Mr(){ht(Pe,Pe.current),ht(zn,zn.current)}function Gi(e){ct(zn),yi===e&&(yi=null),ct(Pe)}var Pe=at(0);function dc(e){for(var r=e;r!==null;){if(r.tag===13){var s=r.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||Jf(s)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function cf(e,r,s,l){r=e.memoizedState,s=s(l,r),s=s==null?r:v({},r,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var hf={enqueueSetState:function(e,r,s){e=e._reactInternals;var l=Rn(),h=jr(l);h.payload=r,s!=null&&(h.callback=s),r=Cr(e,h,l),r!==null&&(In(r,e,l),al(r,e,l))},enqueueReplaceState:function(e,r,s){e=e._reactInternals;var l=Rn(),h=jr(l);h.tag=1,h.payload=r,s!=null&&(h.callback=s),r=Cr(e,h,l),r!==null&&(In(r,e,l),al(r,e,l))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var s=Rn(),l=jr(s);l.tag=2,r!=null&&(l.callback=r),r=Cr(e,l,s),r!==null&&(In(r,e,s),al(r,e,s))}};function _y(e,r,s,l,h,f,E){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,f,E):r.prototype&&r.prototype.isPureReactComponent?!Qo(s,l)||!Qo(h,f):!0}function Ey(e,r,s,l){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(s,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(s,l),r.state!==e&&hf.enqueueReplaceState(r,r.state,null)}function Ba(e,r){var s=r;if("ref"in r){s={};for(var l in r)l!=="ref"&&(s[l]=r[l])}if(e=e.defaultProps){s===r&&(s=v({},s));for(var h in e)s[h]===void 0&&(s[h]=e[h])}return s}var fc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function wy(e){fc(e)}function by(e){console.error(e)}function Ty(e){fc(e)}function pc(e,r){try{var s=e.onUncaughtError;s(r.value,{componentStack:r.stack})}catch(l){setTimeout(function(){throw l})}}function Sy(e,r,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function df(e,r,s){return s=jr(s),s.tag=3,s.payload={element:null},s.callback=function(){pc(e,r)},s}function Ay(e){return e=jr(e),e.tag=3,e}function Ry(e,r,s,l){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var f=l.value;e.payload=function(){return h(f)},e.callback=function(){Sy(r,s,l)}}var E=s.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(e.callback=function(){Sy(r,s,l),typeof h!="function"&&(Lr===null?Lr=new Set([this]):Lr.add(this));var b=l.stack;this.componentDidCatch(l.value,{componentStack:b!==null?b:""})})}function tb(e,r,s,l,h){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(r=s.alternate,r!==null&&tl(r,s,h,!0),s=zn.current,s!==null){switch(s.tag){case 13:return yi===null?kf():s.alternate===null&&xe===0&&(xe=3),s.flags&=-257,s.flags|=65536,s.lanes=h,l===zd?s.flags|=16384:(r=s.updateQueue,r===null?s.updateQueue=new Set([l]):r.add(l),Uf(e,l,h)),!1;case 22:return s.flags|=65536,l===zd?s.flags|=16384:(r=s.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=r):(s=r.retryQueue,s===null?r.retryQueue=new Set([l]):s.add(l)),Uf(e,l,h)),!1}throw Error(a(435,s.tag))}return Uf(e,l,h),kf(),!1}if(Kt)return r=zn.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=h,l!==Md&&(e=Error(a(422),{cause:l}),Jo(kn(e,s)))):(l!==Md&&(r=Error(a(423),{cause:l}),Jo(kn(r,s))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=kn(l,s),h=df(e.stateNode,l,h),Fd(e,h),xe!==4&&(xe=2)),!1;var f=Error(a(520),{cause:l});if(f=kn(f,s),_l===null?_l=[f]:_l.push(f),xe!==4&&(xe=2),r===null)return!0;l=kn(l,s),s=r;do{switch(s.tag){case 3:return s.flags|=65536,e=h&-h,s.lanes|=e,e=df(s.stateNode,l,e),Fd(s,e),!1;case 1:if(r=s.type,f=s.stateNode,(s.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Lr===null||!Lr.has(f))))return s.flags|=65536,h&=-h,s.lanes|=h,h=Ay(h),Ry(h,e,s,l),Fd(s,h),!1}s=s.return}while(s!==null);return!1}var Iy=Error(a(461)),$e=!1;function Ye(e,r,s,l){r.child=e===null?xy(r,null,s,l):Os(r,e.child,s,l)}function jy(e,r,s,l,h){s=s.render;var f=r.ref;if("ref"in l){var E={};for(var b in l)b!=="ref"&&(E[b]=l[b])}else E=l;return La(r),l=Yd(e,r,s,E,f,h),b=Qd(),e!==null&&!$e?(Xd(e,r,h),Yi(e,r,h)):(Kt&&b&&Dd(r),r.flags|=1,Ye(e,r,l,h),r.child)}function Cy(e,r,s,l,h){if(e===null){var f=s.type;return typeof f=="function"&&!Id(f)&&f.defaultProps===void 0&&s.compare===null?(r.tag=15,r.type=f,Dy(e,r,f,l,h)):(e=Gu(s.type,null,l,r,r.mode,h),e.ref=r.ref,e.return=r,r.child=e)}if(f=e.child,!_f(e,h)){var E=f.memoizedProps;if(s=s.compare,s=s!==null?s:Qo,s(E,l)&&e.ref===r.ref)return Yi(e,r,h)}return r.flags|=1,e=$i(f,l),e.ref=r.ref,e.return=r,r.child=e}function Dy(e,r,s,l,h){if(e!==null){var f=e.memoizedProps;if(Qo(f,l)&&e.ref===r.ref)if($e=!1,r.pendingProps=l=f,_f(e,h))(e.flags&131072)!==0&&($e=!0);else return r.lanes=e.lanes,Yi(e,r,h)}return ff(e,r,s,l,h)}function Ny(e,r,s){var l=r.pendingProps,h=l.children,f=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((r.flags&128)!==0){if(l=f!==null?f.baseLanes|s:s,e!==null){for(h=r.child=e.child,f=0;h!==null;)f=f|h.lanes|h.childLanes,h=h.sibling;r.childLanes=f&~l}else r.childLanes=0,r.child=null;return My(e,r,l,s)}if((s&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},e!==null&&Zu(r,f!==null?f.cachePool:null),f!==null?D0(r,f):Kd(),vy(r);else return r.lanes=r.childLanes=536870912,My(e,r,f!==null?f.baseLanes|s:s,s)}else f!==null?(Zu(r,f.cachePool),D0(r,f),Mr(),r.memoizedState=null):(e!==null&&Zu(r,null),Kd(),Mr());return Ye(e,r,h,s),r.child}function My(e,r,s,l){var h=Ld();return h=h===null?null:{parent:ke._currentValue,pool:h},r.memoizedState={baseLanes:s,cachePool:h},e!==null&&Zu(r,null),Kd(),vy(r),e!==null&&tl(e,r,l,!0),null}function mc(e,r){var s=r.ref;if(s===null)e!==null&&e.ref!==null&&(r.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(r.flags|=4194816)}}function ff(e,r,s,l,h){return La(r),s=Yd(e,r,s,l,void 0,h),l=Qd(),e!==null&&!$e?(Xd(e,r,h),Yi(e,r,h)):(Kt&&l&&Dd(r),r.flags|=1,Ye(e,r,s,h),r.child)}function Oy(e,r,s,l,h,f){return La(r),r.updateQueue=null,s=M0(r,l,s,h),N0(e),l=Qd(),e!==null&&!$e?(Xd(e,r,f),Yi(e,r,f)):(Kt&&l&&Dd(r),r.flags|=1,Ye(e,r,s,f),r.child)}function Vy(e,r,s,l,h){if(La(r),r.stateNode===null){var f=Ts,E=s.contextType;typeof E=="object"&&E!==null&&(f=nn(E)),f=new s(l,f),r.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=hf,r.stateNode=f,f._reactInternals=r,f=r.stateNode,f.props=l,f.state=r.memoizedState,f.refs={},$d(r),E=s.contextType,f.context=typeof E=="object"&&E!==null?nn(E):Ts,f.state=r.memoizedState,E=s.getDerivedStateFromProps,typeof E=="function"&&(cf(r,s,E,l),f.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(E=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),E!==f.state&&hf.enqueueReplaceState(f,f.state,null),ol(r,l,f,h),sl(),f.state=r.memoizedState),typeof f.componentDidMount=="function"&&(r.flags|=4194308),l=!0}else if(e===null){f=r.stateNode;var b=r.memoizedProps,N=Ba(s,b);f.props=N;var H=f.context,et=s.contextType;E=Ts,typeof et=="object"&&et!==null&&(E=nn(et));var rt=s.getDerivedStateFromProps;et=typeof rt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=r.pendingProps!==b,et||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||H!==E)&&Ey(r,f,l,E),Ir=!1;var G=r.memoizedState;f.state=G,ol(r,l,f,h),sl(),H=r.memoizedState,b||G!==H||Ir?(typeof rt=="function"&&(cf(r,s,rt,l),H=r.memoizedState),(N=Ir||_y(r,s,N,l,G,H,E))?(et||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(r.flags|=4194308)):(typeof f.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=H),f.props=l,f.state=H,f.context=E,l=N):(typeof f.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{f=r.stateNode,Bd(e,r),E=r.memoizedProps,et=Ba(s,E),f.props=et,rt=r.pendingProps,G=f.context,H=s.contextType,N=Ts,typeof H=="object"&&H!==null&&(N=nn(H)),b=s.getDerivedStateFromProps,(H=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E!==rt||G!==N)&&Ey(r,f,l,N),Ir=!1,G=r.memoizedState,f.state=G,ol(r,l,f,h),sl();var Q=r.memoizedState;E!==rt||G!==Q||Ir||e!==null&&e.dependencies!==null&&Xu(e.dependencies)?(typeof b=="function"&&(cf(r,s,b,l),Q=r.memoizedState),(et=Ir||_y(r,s,et,l,G,Q,N)||e!==null&&e.dependencies!==null&&Xu(e.dependencies))?(H||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(l,Q,N),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(l,Q,N)),typeof f.componentDidUpdate=="function"&&(r.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof f.componentDidUpdate!="function"||E===e.memoizedProps&&G===e.memoizedState||(r.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&G===e.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=Q),f.props=l,f.state=Q,f.context=N,l=et):(typeof f.componentDidUpdate!="function"||E===e.memoizedProps&&G===e.memoizedState||(r.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&G===e.memoizedState||(r.flags|=1024),l=!1)}return f=l,mc(e,r),l=(r.flags&128)!==0,f||l?(f=r.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:f.render(),r.flags|=1,e!==null&&l?(r.child=Os(r,e.child,null,h),r.child=Os(r,null,s,h)):Ye(e,r,s,h),r.memoizedState=f.state,e=r.child):e=Yi(e,r,h),e}function ky(e,r,s,l){return Zo(),r.flags|=256,Ye(e,r,s,l),r.child}var pf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mf(e){return{baseLanes:e,cachePool:b0()}}function gf(e,r,s){return e=e!==null?e.childLanes&~s:0,r&&(e|=$n),e}function Py(e,r,s){var l=r.pendingProps,h=!1,f=(r.flags&128)!==0,E;if((E=f)||(E=e!==null&&e.memoizedState===null?!1:(Pe.current&2)!==0),E&&(h=!0,r.flags&=-129),E=(r.flags&32)!==0,r.flags&=-33,e===null){if(Kt){if(h?Nr(r):Mr(),Kt){var b=ye,N;if(N=b){t:{for(N=b,b=gi;N.nodeType!==8;){if(!b){b=null;break t}if(N=ni(N.nextSibling),N===null){b=null;break t}}b=N}b!==null?(r.memoizedState={dehydrated:b,treeContext:Oa!==null?{id:Bi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},N=bn(18,null,null,0),N.stateNode=b,N.return=r,r.child=N,fn=r,ye=null,N=!0):N=!1}N||Pa(r)}if(b=r.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Jf(b)?r.lanes=32:r.lanes=536870912,null;Gi(r)}return b=l.children,l=l.fallback,h?(Mr(),h=r.mode,b=gc({mode:"hidden",children:b},h),l=Ma(l,h,s,null),b.return=r,l.return=r,b.sibling=l,r.child=b,h=r.child,h.memoizedState=mf(s),h.childLanes=gf(e,E,s),r.memoizedState=pf,l):(Nr(r),yf(r,b))}if(N=e.memoizedState,N!==null&&(b=N.dehydrated,b!==null)){if(f)r.flags&256?(Nr(r),r.flags&=-257,r=xf(e,r,s)):r.memoizedState!==null?(Mr(),r.child=e.child,r.flags|=128,r=null):(Mr(),h=l.fallback,b=r.mode,l=gc({mode:"visible",children:l.children},b),h=Ma(h,b,s,null),h.flags|=2,l.return=r,h.return=r,l.sibling=h,r.child=l,Os(r,e.child,null,s),l=r.child,l.memoizedState=mf(s),l.childLanes=gf(e,E,s),r.memoizedState=pf,r=h);else if(Nr(r),Jf(b)){if(E=b.nextSibling&&b.nextSibling.dataset,E)var H=E.dgst;E=H,l=Error(a(419)),l.stack="",l.digest=E,Jo({value:l,source:null,stack:null}),r=xf(e,r,s)}else if($e||tl(e,r,s,!1),E=(s&e.childLanes)!==0,$e||E){if(E=re,E!==null&&(l=s&-s,l=(l&42)!==0?1:No(l),l=(l&(E.suspendedLanes|s))!==0?0:l,l!==0&&l!==N.retryLane))throw N.retryLane=l,bs(e,l),In(E,e,l),Iy;b.data==="$?"||kf(),r=xf(e,r,s)}else b.data==="$?"?(r.flags|=192,r.child=e.child,r=null):(e=N.treeContext,ye=ni(b.nextSibling),fn=r,Kt=!0,ka=null,gi=!1,e!==null&&(Un[Ln++]=Bi,Un[Ln++]=Fi,Un[Ln++]=Oa,Bi=e.id,Fi=e.overflow,Oa=r),r=yf(r,l.children),r.flags|=4096);return r}return h?(Mr(),h=l.fallback,b=r.mode,N=e.child,H=N.sibling,l=$i(N,{mode:"hidden",children:l.children}),l.subtreeFlags=N.subtreeFlags&65011712,H!==null?h=$i(H,h):(h=Ma(h,b,s,null),h.flags|=2),h.return=r,l.return=r,l.sibling=h,r.child=l,l=h,h=r.child,b=e.child.memoizedState,b===null?b=mf(s):(N=b.cachePool,N!==null?(H=ke._currentValue,N=N.parent!==H?{parent:H,pool:H}:N):N=b0(),b={baseLanes:b.baseLanes|s,cachePool:N}),h.memoizedState=b,h.childLanes=gf(e,E,s),r.memoizedState=pf,l):(Nr(r),s=e.child,e=s.sibling,s=$i(s,{mode:"visible",children:l.children}),s.return=r,s.sibling=null,e!==null&&(E=r.deletions,E===null?(r.deletions=[e],r.flags|=16):E.push(e)),r.child=s,r.memoizedState=null,s)}function yf(e,r){return r=gc({mode:"visible",children:r},e.mode),r.return=e,e.child=r}function gc(e,r){return e=bn(22,e,null,r),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function xf(e,r,s){return Os(r,e.child,null,s),e=yf(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function Uy(e,r,s){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r),Vd(e.return,r,s)}function vf(e,r,s,l,h){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:h}:(f.isBackwards=r,f.rendering=null,f.renderingStartTime=0,f.last=l,f.tail=s,f.tailMode=h)}function Ly(e,r,s){var l=r.pendingProps,h=l.revealOrder,f=l.tail;if(Ye(e,r,l.children,s),l=Pe.current,(l&2)!==0)l=l&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Uy(e,s,r);else if(e.tag===19)Uy(e,s,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break t;for(;e.sibling===null;){if(e.return===null||e.return===r)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(ht(Pe,l),h){case"forwards":for(s=r.child,h=null;s!==null;)e=s.alternate,e!==null&&dc(e)===null&&(h=s),s=s.sibling;s=h,s===null?(h=r.child,r.child=null):(h=s.sibling,s.sibling=null),vf(r,!1,h,s,f);break;case"backwards":for(s=null,h=r.child,r.child=null;h!==null;){if(e=h.alternate,e!==null&&dc(e)===null){r.child=h;break}e=h.sibling,h.sibling=s,s=h,h=e}vf(r,!0,s,null,f);break;case"together":vf(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Yi(e,r,s){if(e!==null&&(r.dependencies=e.dependencies),Ur|=r.lanes,(s&r.childLanes)===0)if(e!==null){if(tl(e,r,s,!1),(s&r.childLanes)===0)return null}else return null;if(e!==null&&r.child!==e.child)throw Error(a(153));if(r.child!==null){for(e=r.child,s=$i(e,e.pendingProps),r.child=s,s.return=r;e.sibling!==null;)e=e.sibling,s=s.sibling=$i(e,e.pendingProps),s.return=r;s.sibling=null}return r.child}function _f(e,r){return(e.lanes&r)!==0?!0:(e=e.dependencies,!!(e!==null&&Xu(e)))}function eb(e,r,s){switch(r.tag){case 3:Lt(r,r.stateNode.containerInfo),Rr(r,ke,e.memoizedState.cache),Zo();break;case 27:case 5:Ni(r);break;case 4:Lt(r,r.stateNode.containerInfo);break;case 10:Rr(r,r.type,r.memoizedProps.value);break;case 13:var l=r.memoizedState;if(l!==null)return l.dehydrated!==null?(Nr(r),r.flags|=128,null):(s&r.child.childLanes)!==0?Py(e,r,s):(Nr(r),e=Yi(e,r,s),e!==null?e.sibling:null);Nr(r);break;case 19:var h=(e.flags&128)!==0;if(l=(s&r.childLanes)!==0,l||(tl(e,r,s,!1),l=(s&r.childLanes)!==0),h){if(l)return Ly(e,r,s);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),ht(Pe,Pe.current),l)break;return null;case 22:case 23:return r.lanes=0,Ny(e,r,s);case 24:Rr(r,ke,e.memoizedState.cache)}return Yi(e,r,s)}function zy(e,r,s){if(e!==null)if(e.memoizedProps!==r.pendingProps)$e=!0;else{if(!_f(e,s)&&(r.flags&128)===0)return $e=!1,eb(e,r,s);$e=(e.flags&131072)!==0}else $e=!1,Kt&&(r.flags&1048576)!==0&&g0(r,Qu,r.index);switch(r.lanes=0,r.tag){case 16:t:{e=r.pendingProps;var l=r.elementType,h=l._init;if(l=h(l._payload),r.type=l,typeof l=="function")Id(l)?(e=Ba(l,e),r.tag=1,r=Vy(null,r,l,e,s)):(r.tag=0,r=ff(null,r,l,e,s));else{if(l!=null){if(h=l.$$typeof,h===lt){r.tag=11,r=jy(null,r,l,e,s);break t}else if(h===j){r.tag=14,r=Cy(null,r,l,e,s);break t}}throw r=se(l)||l,Error(a(306,r,""))}}return r;case 0:return ff(e,r,r.type,r.pendingProps,s);case 1:return l=r.type,h=Ba(l,r.pendingProps),Vy(e,r,l,h,s);case 3:t:{if(Lt(r,r.stateNode.containerInfo),e===null)throw Error(a(387));l=r.pendingProps;var f=r.memoizedState;h=f.element,Bd(e,r),ol(r,l,null,s);var E=r.memoizedState;if(l=E.cache,Rr(r,ke,l),l!==f.cache&&kd(r,[ke],s,!0),sl(),l=E.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:E.cache},r.updateQueue.baseState=f,r.memoizedState=f,r.flags&256){r=ky(e,r,l,s);break t}else if(l!==h){h=kn(Error(a(424)),r),Jo(h),r=ky(e,r,l,s);break t}else{switch(e=r.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ye=ni(e.firstChild),fn=r,Kt=!0,ka=null,gi=!0,s=xy(r,null,l,s),r.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Zo(),l===h){r=Yi(e,r,s);break t}Ye(e,r,l,s)}r=r.child}return r;case 26:return mc(e,r),e===null?(s=q1(r.type,null,r.pendingProps,null))?r.memoizedState=s:Kt||(s=r.type,e=r.pendingProps,l=Cc(_t.current).createElement(s),l[_e]=r,l[Ge]=e,Xe(l,s,e),Ee(l),r.stateNode=l):r.memoizedState=q1(r.type,e.memoizedProps,r.pendingProps,e.memoizedState),null;case 27:return Ni(r),e===null&&Kt&&(l=r.stateNode=$1(r.type,r.pendingProps,_t.current),fn=r,gi=!0,h=ye,Br(r.type)?(tp=h,ye=ni(l.firstChild)):ye=h),Ye(e,r,r.pendingProps.children,s),mc(e,r),e===null&&(r.flags|=4194304),r.child;case 5:return e===null&&Kt&&((h=l=ye)&&(l=jb(l,r.type,r.pendingProps,gi),l!==null?(r.stateNode=l,fn=r,ye=ni(l.firstChild),gi=!1,h=!0):h=!1),h||Pa(r)),Ni(r),h=r.type,f=r.pendingProps,E=e!==null?e.memoizedProps:null,l=f.children,Xf(h,f)?l=null:E!==null&&Xf(h,E)&&(r.flags|=32),r.memoizedState!==null&&(h=Yd(e,r,Gw,null,null,s),jl._currentValue=h),mc(e,r),Ye(e,r,l,s),r.child;case 6:return e===null&&Kt&&((e=s=ye)&&(s=Cb(s,r.pendingProps,gi),s!==null?(r.stateNode=s,fn=r,ye=null,e=!0):e=!1),e||Pa(r)),null;case 13:return Py(e,r,s);case 4:return Lt(r,r.stateNode.containerInfo),l=r.pendingProps,e===null?r.child=Os(r,null,l,s):Ye(e,r,l,s),r.child;case 11:return jy(e,r,r.type,r.pendingProps,s);case 7:return Ye(e,r,r.pendingProps,s),r.child;case 8:return Ye(e,r,r.pendingProps.children,s),r.child;case 12:return Ye(e,r,r.pendingProps.children,s),r.child;case 10:return l=r.pendingProps,Rr(r,r.type,l.value),Ye(e,r,l.children,s),r.child;case 9:return h=r.type._context,l=r.pendingProps.children,La(r),h=nn(h),l=l(h),r.flags|=1,Ye(e,r,l,s),r.child;case 14:return Cy(e,r,r.type,r.pendingProps,s);case 15:return Dy(e,r,r.type,r.pendingProps,s);case 19:return Ly(e,r,s);case 31:return l=r.pendingProps,s=r.mode,l={mode:l.mode,children:l.children},e===null?(s=gc(l,s),s.ref=r.ref,r.child=s,s.return=r,r=s):(s=$i(e.child,l),s.ref=r.ref,r.child=s,s.return=r,r=s),r;case 22:return Ny(e,r,s);case 24:return La(r),l=nn(ke),e===null?(h=Ld(),h===null&&(h=re,f=Pd(),h.pooledCache=f,f.refCount++,f!==null&&(h.pooledCacheLanes|=s),h=f),r.memoizedState={parent:l,cache:h},$d(r),Rr(r,ke,h)):((e.lanes&s)!==0&&(Bd(e,r),ol(r,null,null,s),sl()),h=e.memoizedState,f=r.memoizedState,h.parent!==l?(h={parent:l,cache:l},r.memoizedState=h,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=h),Rr(r,ke,l)):(l=f.cache,Rr(r,ke,l),l!==h.cache&&kd(r,[ke],s,!0))),Ye(e,r,r.pendingProps.children,s),r.child;case 29:throw r.pendingProps}throw Error(a(156,r.tag))}function Qi(e){e.flags|=4}function $y(e,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Q1(r)){if(r=zn.current,r!==null&&((zt&4194048)===zt?yi!==null:(zt&62914560)!==zt&&(zt&536870912)===0||r!==yi))throw rl=zd,T0;e.flags|=8192}}function yc(e,r){r!==null&&(e.flags|=4),e.flags&16384&&(r=e.tag!==22?pr():536870912,e.lanes|=r,Us|=r)}function pl(e,r){if(!Kt)switch(e.tailMode){case"hidden":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function pe(e){var r=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(r)for(var h=e.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=s,r}function nb(e,r,s){var l=r.pendingProps;switch(Nd(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(r),null;case 1:return pe(r),null;case 3:return s=r.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),r.memoizedState.cache!==l&&(r.flags|=2048),Ki(ke),Me(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Wo(r)?Qi(r):e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,v0())),pe(r),null;case 26:return s=r.memoizedState,e===null?(Qi(r),s!==null?(pe(r),$y(r,s)):(pe(r),r.flags&=-16777217)):s?s!==e.memoizedState?(Qi(r),pe(r),$y(r,s)):(pe(r),r.flags&=-16777217):(e.memoizedProps!==l&&Qi(r),pe(r),r.flags&=-16777217),null;case 27:Hn(r),s=_t.current;var h=r.type;if(e!==null&&r.stateNode!=null)e.memoizedProps!==l&&Qi(r);else{if(!l){if(r.stateNode===null)throw Error(a(166));return pe(r),null}e=gt.current,Wo(r)?y0(r):(e=$1(h,l,s),r.stateNode=e,Qi(r))}return pe(r),null;case 5:if(Hn(r),s=r.type,e!==null&&r.stateNode!=null)e.memoizedProps!==l&&Qi(r);else{if(!l){if(r.stateNode===null)throw Error(a(166));return pe(r),null}if(e=gt.current,Wo(r))y0(r);else{switch(h=Cc(_t.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?h.createElement(s,{is:l.is}):h.createElement(s)}}e[_e]=r,e[Ge]=l;t:for(h=r.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===r)break t;for(;h.sibling===null;){if(h.return===null||h.return===r)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}r.stateNode=e;t:switch(Xe(e,s,l),s){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Qi(r)}}return pe(r),r.flags&=-16777217,null;case 6:if(e&&r.stateNode!=null)e.memoizedProps!==l&&Qi(r);else{if(typeof l!="string"&&r.stateNode===null)throw Error(a(166));if(e=_t.current,Wo(r)){if(e=r.stateNode,s=r.memoizedProps,l=null,h=fn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[_e]=r,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||O1(e.nodeValue,s)),e||Pa(r)}else e=Cc(e).createTextNode(l),e[_e]=r,r.stateNode=e}return pe(r),null;case 13:if(l=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Wo(r),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[_e]=r}else Zo(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;pe(r),h=!1}else h=v0(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return r.flags&256?(Gi(r),r):(Gi(r),null)}if(Gi(r),(r.flags&128)!==0)return r.lanes=s,r;if(s=l!==null,e=e!==null&&e.memoizedState!==null,s){l=r.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var f=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(f=l.memoizedState.cachePool.pool),f!==h&&(l.flags|=2048)}return s!==e&&s&&(r.child.flags|=8192),yc(r,r.updateQueue),pe(r),null;case 4:return Me(),e===null&&Kf(r.stateNode.containerInfo),pe(r),null;case 10:return Ki(r.type),pe(r),null;case 19:if(ct(Pe),h=r.memoizedState,h===null)return pe(r),null;if(l=(r.flags&128)!==0,f=h.rendering,f===null)if(l)pl(h,!1);else{if(xe!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(f=dc(e),f!==null){for(r.flags|=128,pl(h,!1),e=f.updateQueue,r.updateQueue=e,yc(r,e),r.subtreeFlags=0,e=s,s=r.child;s!==null;)m0(s,e),s=s.sibling;return ht(Pe,Pe.current&1|2),r.child}e=e.sibling}h.tail!==null&&pn()>_c&&(r.flags|=128,l=!0,pl(h,!1),r.lanes=4194304)}else{if(!l)if(e=dc(f),e!==null){if(r.flags|=128,l=!0,e=e.updateQueue,r.updateQueue=e,yc(r,e),pl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!f.alternate&&!Kt)return pe(r),null}else 2*pn()-h.renderingStartTime>_c&&s!==536870912&&(r.flags|=128,l=!0,pl(h,!1),r.lanes=4194304);h.isBackwards?(f.sibling=r.child,r.child=f):(e=h.last,e!==null?e.sibling=f:r.child=f,h.last=f)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=pn(),r.sibling=null,e=Pe.current,ht(Pe,l?e&1|2:e&1),r):(pe(r),null);case 22:case 23:return Gi(r),Hd(),l=r.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(r.flags|=8192):l&&(r.flags|=8192),l?(s&536870912)!==0&&(r.flags&128)===0&&(pe(r),r.subtreeFlags&6&&(r.flags|=8192)):pe(r),s=r.updateQueue,s!==null&&yc(r,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),l!==s&&(r.flags|=2048),e!==null&&ct(za),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),r.memoizedState.cache!==s&&(r.flags|=2048),Ki(ke),pe(r),null;case 25:return null;case 30:return null}throw Error(a(156,r.tag))}function ib(e,r){switch(Nd(r),r.tag){case 1:return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return Ki(ke),Me(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 26:case 27:case 5:return Hn(r),null;case 13:if(Gi(r),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(a(340));Zo()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return ct(Pe),null;case 4:return Me(),null;case 10:return Ki(r.type),null;case 22:case 23:return Gi(r),Hd(),e!==null&&ct(za),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 24:return Ki(ke),null;case 25:return null;default:return null}}function By(e,r){switch(Nd(r),r.tag){case 3:Ki(ke),Me();break;case 26:case 27:case 5:Hn(r);break;case 4:Me();break;case 13:Gi(r);break;case 19:ct(Pe);break;case 10:Ki(r.type);break;case 22:case 23:Gi(r),Hd(),e!==null&&ct(za);break;case 24:Ki(ke)}}function ml(e,r){try{var s=r.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var h=l.next;s=h;do{if((s.tag&e)===e){l=void 0;var f=s.create,E=s.inst;l=f(),E.destroy=l}s=s.next}while(s!==h)}}catch(b){ne(r,r.return,b)}}function Or(e,r,s){try{var l=r.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var f=h.next;l=f;do{if((l.tag&e)===e){var E=l.inst,b=E.destroy;if(b!==void 0){E.destroy=void 0,h=r;var N=s,H=b;try{H()}catch(et){ne(h,N,et)}}}l=l.next}while(l!==f)}}catch(et){ne(r,r.return,et)}}function Fy(e){var r=e.updateQueue;if(r!==null){var s=e.stateNode;try{C0(r,s)}catch(l){ne(e,e.return,l)}}}function qy(e,r,s){s.props=Ba(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){ne(e,r,l)}}function gl(e,r){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(h){ne(e,r,h)}}function xi(e,r){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(h){ne(e,r,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){ne(e,r,h)}else s.current=null}function Ky(e){var r=e.type,s=e.memoizedProps,l=e.stateNode;try{t:switch(r){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(h){ne(e,e.return,h)}}function Ef(e,r,s){try{var l=e.stateNode;Tb(l,e.type,s,r),l[Ge]=r}catch(h){ne(e,e.return,h)}}function Hy(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Br(e.type)||e.tag===4}function wf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Hy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Br(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bf(e,r,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,r?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,r):(r=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,r.appendChild(e),s=s._reactRootContainer,s!=null||r.onclick!==null||(r.onclick=jc));else if(l!==4&&(l===27&&Br(e.type)&&(s=e.stateNode,r=null),e=e.child,e!==null))for(bf(e,r,s),e=e.sibling;e!==null;)bf(e,r,s),e=e.sibling}function xc(e,r,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,r?s.insertBefore(e,r):s.appendChild(e);else if(l!==4&&(l===27&&Br(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(xc(e,r,s),e=e.sibling;e!==null;)xc(e,r,s),e=e.sibling}function Gy(e){var r=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,h=r.attributes;h.length;)r.removeAttributeNode(h[0]);Xe(r,l,s),r[_e]=e,r[Ge]=s}catch(f){ne(e,e.return,f)}}var Xi=!1,Te=!1,Tf=!1,Yy=typeof WeakSet=="function"?WeakSet:Set,Be=null;function rb(e,r){if(e=e.containerInfo,Yf=kc,e=a0(e),Ed(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var h=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{s.nodeType,f.nodeType}catch{s=null;break t}var E=0,b=-1,N=-1,H=0,et=0,rt=e,G=null;e:for(;;){for(var Q;rt!==s||h!==0&&rt.nodeType!==3||(b=E+h),rt!==f||l!==0&&rt.nodeType!==3||(N=E+l),rt.nodeType===3&&(E+=rt.nodeValue.length),(Q=rt.firstChild)!==null;)G=rt,rt=Q;for(;;){if(rt===e)break e;if(G===s&&++H===h&&(b=E),G===f&&++et===l&&(N=E),(Q=rt.nextSibling)!==null)break;rt=G,G=rt.parentNode}rt=Q}s=b===-1||N===-1?null:{start:b,end:N}}else s=null}s=s||{start:0,end:0}}else s=null;for(Qf={focusedElem:e,selectionRange:s},kc=!1,Be=r;Be!==null;)if(r=Be,e=r.child,(r.subtreeFlags&1024)!==0&&e!==null)e.return=r,Be=e;else for(;Be!==null;){switch(r=Be,f=r.alternate,e=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,s=r,h=f.memoizedProps,f=f.memoizedState,l=s.stateNode;try{var Tt=Ba(s.type,h,s.elementType===s.type);e=l.getSnapshotBeforeUpdate(Tt,f),l.__reactInternalSnapshotBeforeUpdate=e}catch(Et){ne(s,s.return,Et)}}break;case 3:if((e&1024)!==0){if(e=r.stateNode.containerInfo,s=e.nodeType,s===9)Zf(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Zf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=r.sibling,e!==null){e.return=r.return,Be=e;break}Be=r.return}}function Qy(e,r,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Vr(e,s),l&4&&ml(5,s);break;case 1:if(Vr(e,s),l&4)if(e=s.stateNode,r===null)try{e.componentDidMount()}catch(E){ne(s,s.return,E)}else{var h=Ba(s.type,r.memoizedProps);r=r.memoizedState;try{e.componentDidUpdate(h,r,e.__reactInternalSnapshotBeforeUpdate)}catch(E){ne(s,s.return,E)}}l&64&&Fy(s),l&512&&gl(s,s.return);break;case 3:if(Vr(e,s),l&64&&(e=s.updateQueue,e!==null)){if(r=null,s.child!==null)switch(s.child.tag){case 27:case 5:r=s.child.stateNode;break;case 1:r=s.child.stateNode}try{C0(e,r)}catch(E){ne(s,s.return,E)}}break;case 27:r===null&&l&4&&Gy(s);case 26:case 5:Vr(e,s),r===null&&l&4&&Ky(s),l&512&&gl(s,s.return);break;case 12:Vr(e,s);break;case 13:Vr(e,s),l&4&&Zy(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=fb.bind(null,s),Db(e,s))));break;case 22:if(l=s.memoizedState!==null||Xi,!l){r=r!==null&&r.memoizedState!==null||Te,h=Xi;var f=Te;Xi=l,(Te=r)&&!f?kr(e,s,(s.subtreeFlags&8772)!==0):Vr(e,s),Xi=h,Te=f}break;case 30:break;default:Vr(e,s)}}function Xy(e){var r=e.alternate;r!==null&&(e.alternate=null,Xy(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&ls(r)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ce=null,gn=!1;function Wi(e,r,s){for(s=s.child;s!==null;)Wy(e,r,s),s=s.sibling}function Wy(e,r,s){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(hr,s)}catch{}switch(s.tag){case 26:Te||xi(s,r),Wi(e,r,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Te||xi(s,r);var l=ce,h=gn;Br(s.type)&&(ce=s.stateNode,gn=!1),Wi(e,r,s),Sl(s.stateNode),ce=l,gn=h;break;case 5:Te||xi(s,r);case 6:if(l=ce,h=gn,ce=null,Wi(e,r,s),ce=l,gn=h,ce!==null)if(gn)try{(ce.nodeType===9?ce.body:ce.nodeName==="HTML"?ce.ownerDocument.body:ce).removeChild(s.stateNode)}catch(f){ne(s,r,f)}else try{ce.removeChild(s.stateNode)}catch(f){ne(s,r,f)}break;case 18:ce!==null&&(gn?(e=ce,L1(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Ml(e)):L1(ce,s.stateNode));break;case 4:l=ce,h=gn,ce=s.stateNode.containerInfo,gn=!0,Wi(e,r,s),ce=l,gn=h;break;case 0:case 11:case 14:case 15:Te||Or(2,s,r),Te||Or(4,s,r),Wi(e,r,s);break;case 1:Te||(xi(s,r),l=s.stateNode,typeof l.componentWillUnmount=="function"&&qy(s,r,l)),Wi(e,r,s);break;case 21:Wi(e,r,s);break;case 22:Te=(l=Te)||s.memoizedState!==null,Wi(e,r,s),Te=l;break;default:Wi(e,r,s)}}function Zy(e,r){if(r.memoizedState===null&&(e=r.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ml(e)}catch(s){ne(r,r.return,s)}}function ab(e){switch(e.tag){case 13:case 19:var r=e.stateNode;return r===null&&(r=e.stateNode=new Yy),r;case 22:return e=e.stateNode,r=e._retryCache,r===null&&(r=e._retryCache=new Yy),r;default:throw Error(a(435,e.tag))}}function Sf(e,r){var s=ab(e);r.forEach(function(l){var h=pb.bind(null,e,l);s.has(l)||(s.add(l),l.then(h,h))})}function Tn(e,r){var s=r.deletions;if(s!==null)for(var l=0;l<s.length;l++){var h=s[l],f=e,E=r,b=E;t:for(;b!==null;){switch(b.tag){case 27:if(Br(b.type)){ce=b.stateNode,gn=!1;break t}break;case 5:ce=b.stateNode,gn=!1;break t;case 3:case 4:ce=b.stateNode.containerInfo,gn=!0;break t}b=b.return}if(ce===null)throw Error(a(160));Wy(f,E,h),ce=null,gn=!1,f=h.alternate,f!==null&&(f.return=null),h.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)Jy(r,e),r=r.sibling}var ei=null;function Jy(e,r){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Tn(r,e),Sn(e),l&4&&(Or(3,e,e.return),ml(3,e),Or(5,e,e.return));break;case 1:Tn(r,e),Sn(e),l&512&&(Te||s===null||xi(s,s.return)),l&64&&Xi&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var h=ei;if(Tn(r,e),Sn(e),l&512&&(Te||s===null||xi(s,s.return)),l&4){var f=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){t:{l=e.type,s=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":f=h.getElementsByTagName("title")[0],(!f||f[yr]||f[_e]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=h.createElement(l),h.head.insertBefore(f,h.querySelector("head > title"))),Xe(f,l,s),f[_e]=e,Ee(f),l=f;break t;case"link":var E=G1("link","href",h).get(l+(s.href||""));if(E){for(var b=0;b<E.length;b++)if(f=E[b],f.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&f.getAttribute("rel")===(s.rel==null?null:s.rel)&&f.getAttribute("title")===(s.title==null?null:s.title)&&f.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){E.splice(b,1);break e}}f=h.createElement(l),Xe(f,l,s),h.head.appendChild(f);break;case"meta":if(E=G1("meta","content",h).get(l+(s.content||""))){for(b=0;b<E.length;b++)if(f=E[b],f.getAttribute("content")===(s.content==null?null:""+s.content)&&f.getAttribute("name")===(s.name==null?null:s.name)&&f.getAttribute("property")===(s.property==null?null:s.property)&&f.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&f.getAttribute("charset")===(s.charSet==null?null:s.charSet)){E.splice(b,1);break e}}f=h.createElement(l),Xe(f,l,s),h.head.appendChild(f);break;default:throw Error(a(468,l))}f[_e]=e,Ee(f),l=f}e.stateNode=l}else Y1(h,e.type,e.stateNode);else e.stateNode=H1(h,l,e.memoizedProps);else f!==l?(f===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):f.count--,l===null?Y1(h,e.type,e.stateNode):H1(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Ef(e,e.memoizedProps,s.memoizedProps)}break;case 27:Tn(r,e),Sn(e),l&512&&(Te||s===null||xi(s,s.return)),s!==null&&l&4&&Ef(e,e.memoizedProps,s.memoizedProps);break;case 5:if(Tn(r,e),Sn(e),l&512&&(Te||s===null||xi(s,s.return)),e.flags&32){h=e.stateNode;try{On(h,"")}catch(Q){ne(e,e.return,Q)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,Ef(e,h,s!==null?s.memoizedProps:h)),l&1024&&(Tf=!0);break;case 6:if(Tn(r,e),Sn(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(Q){ne(e,e.return,Q)}}break;case 3:if(Mc=null,h=ei,ei=Dc(r.containerInfo),Tn(r,e),ei=h,Sn(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Ml(r.containerInfo)}catch(Q){ne(e,e.return,Q)}Tf&&(Tf=!1,t1(e));break;case 4:l=ei,ei=Dc(e.stateNode.containerInfo),Tn(r,e),Sn(e),ei=l;break;case 12:Tn(r,e),Sn(e);break;case 13:Tn(r,e),Sn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Df=pn()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Sf(e,l)));break;case 22:h=e.memoizedState!==null;var N=s!==null&&s.memoizedState!==null,H=Xi,et=Te;if(Xi=H||h,Te=et||N,Tn(r,e),Te=et,Xi=H,Sn(e),l&8192)t:for(r=e.stateNode,r._visibility=h?r._visibility&-2:r._visibility|1,h&&(s===null||N||Xi||Te||Fa(e)),s=null,r=e;;){if(r.tag===5||r.tag===26){if(s===null){N=s=r;try{if(f=N.stateNode,h)E=f.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{b=N.stateNode;var rt=N.memoizedProps.style,G=rt!=null&&rt.hasOwnProperty("display")?rt.display:null;b.style.display=G==null||typeof G=="boolean"?"":(""+G).trim()}}catch(Q){ne(N,N.return,Q)}}}else if(r.tag===6){if(s===null){N=r;try{N.stateNode.nodeValue=h?"":N.memoizedProps}catch(Q){ne(N,N.return,Q)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===e)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break t;for(;r.sibling===null;){if(r.return===null||r.return===e)break t;s===r&&(s=null),r=r.return}s===r&&(s=null),r.sibling.return=r.return,r=r.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Sf(e,s))));break;case 19:Tn(r,e),Sn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Sf(e,l)));break;case 30:break;case 21:break;default:Tn(r,e),Sn(e)}}function Sn(e){var r=e.flags;if(r&2){try{for(var s,l=e.return;l!==null;){if(Hy(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var h=s.stateNode,f=wf(e);xc(e,f,h);break;case 5:var E=s.stateNode;s.flags&32&&(On(E,""),s.flags&=-33);var b=wf(e);xc(e,b,E);break;case 3:case 4:var N=s.stateNode.containerInfo,H=wf(e);bf(e,H,N);break;default:throw Error(a(161))}}catch(et){ne(e,e.return,et)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function t1(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var r=e;t1(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),e=e.sibling}}function Vr(e,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)Qy(e,r.alternate,r),r=r.sibling}function Fa(e){for(e=e.child;e!==null;){var r=e;switch(r.tag){case 0:case 11:case 14:case 15:Or(4,r,r.return),Fa(r);break;case 1:xi(r,r.return);var s=r.stateNode;typeof s.componentWillUnmount=="function"&&qy(r,r.return,s),Fa(r);break;case 27:Sl(r.stateNode);case 26:case 5:xi(r,r.return),Fa(r);break;case 22:r.memoizedState===null&&Fa(r);break;case 30:Fa(r);break;default:Fa(r)}e=e.sibling}}function kr(e,r,s){for(s=s&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var l=r.alternate,h=e,f=r,E=f.flags;switch(f.tag){case 0:case 11:case 15:kr(h,f,s),ml(4,f);break;case 1:if(kr(h,f,s),l=f,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(H){ne(l,l.return,H)}if(l=f,h=l.updateQueue,h!==null){var b=l.stateNode;try{var N=h.shared.hiddenCallbacks;if(N!==null)for(h.shared.hiddenCallbacks=null,h=0;h<N.length;h++)j0(N[h],b)}catch(H){ne(l,l.return,H)}}s&&E&64&&Fy(f),gl(f,f.return);break;case 27:Gy(f);case 26:case 5:kr(h,f,s),s&&l===null&&E&4&&Ky(f),gl(f,f.return);break;case 12:kr(h,f,s);break;case 13:kr(h,f,s),s&&E&4&&Zy(h,f);break;case 22:f.memoizedState===null&&kr(h,f,s),gl(f,f.return);break;case 30:break;default:kr(h,f,s)}r=r.sibling}}function Af(e,r){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(e=r.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&el(s))}function Rf(e,r){e=null,r.alternate!==null&&(e=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==e&&(r.refCount++,e!=null&&el(e))}function vi(e,r,s,l){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)e1(e,r,s,l),r=r.sibling}function e1(e,r,s,l){var h=r.flags;switch(r.tag){case 0:case 11:case 15:vi(e,r,s,l),h&2048&&ml(9,r);break;case 1:vi(e,r,s,l);break;case 3:vi(e,r,s,l),h&2048&&(e=null,r.alternate!==null&&(e=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==e&&(r.refCount++,e!=null&&el(e)));break;case 12:if(h&2048){vi(e,r,s,l),e=r.stateNode;try{var f=r.memoizedProps,E=f.id,b=f.onPostCommit;typeof b=="function"&&b(E,r.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(N){ne(r,r.return,N)}}else vi(e,r,s,l);break;case 13:vi(e,r,s,l);break;case 23:break;case 22:f=r.stateNode,E=r.alternate,r.memoizedState!==null?f._visibility&2?vi(e,r,s,l):yl(e,r):f._visibility&2?vi(e,r,s,l):(f._visibility|=2,Vs(e,r,s,l,(r.subtreeFlags&10256)!==0)),h&2048&&Af(E,r);break;case 24:vi(e,r,s,l),h&2048&&Rf(r.alternate,r);break;default:vi(e,r,s,l)}}function Vs(e,r,s,l,h){for(h=h&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var f=e,E=r,b=s,N=l,H=E.flags;switch(E.tag){case 0:case 11:case 15:Vs(f,E,b,N,h),ml(8,E);break;case 23:break;case 22:var et=E.stateNode;E.memoizedState!==null?et._visibility&2?Vs(f,E,b,N,h):yl(f,E):(et._visibility|=2,Vs(f,E,b,N,h)),h&&H&2048&&Af(E.alternate,E);break;case 24:Vs(f,E,b,N,h),h&&H&2048&&Rf(E.alternate,E);break;default:Vs(f,E,b,N,h)}r=r.sibling}}function yl(e,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var s=e,l=r,h=l.flags;switch(l.tag){case 22:yl(s,l),h&2048&&Af(l.alternate,l);break;case 24:yl(s,l),h&2048&&Rf(l.alternate,l);break;default:yl(s,l)}r=r.sibling}}var xl=8192;function ks(e){if(e.subtreeFlags&xl)for(e=e.child;e!==null;)n1(e),e=e.sibling}function n1(e){switch(e.tag){case 26:ks(e),e.flags&xl&&e.memoizedState!==null&&qb(ei,e.memoizedState,e.memoizedProps);break;case 5:ks(e);break;case 3:case 4:var r=ei;ei=Dc(e.stateNode.containerInfo),ks(e),ei=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=xl,xl=16777216,ks(e),xl=r):ks(e));break;default:ks(e)}}function i1(e){var r=e.alternate;if(r!==null&&(e=r.child,e!==null)){r.child=null;do r=e.sibling,e.sibling=null,e=r;while(e!==null)}}function vl(e){var r=e.deletions;if((e.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var l=r[s];Be=l,a1(l,e)}i1(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)r1(e),e=e.sibling}function r1(e){switch(e.tag){case 0:case 11:case 15:vl(e),e.flags&2048&&Or(9,e,e.return);break;case 3:vl(e);break;case 12:vl(e);break;case 22:var r=e.stateNode;e.memoizedState!==null&&r._visibility&2&&(e.return===null||e.return.tag!==13)?(r._visibility&=-3,vc(e)):vl(e);break;default:vl(e)}}function vc(e){var r=e.deletions;if((e.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var l=r[s];Be=l,a1(l,e)}i1(e)}for(e=e.child;e!==null;){switch(r=e,r.tag){case 0:case 11:case 15:Or(8,r,r.return),vc(r);break;case 22:s=r.stateNode,s._visibility&2&&(s._visibility&=-3,vc(r));break;default:vc(r)}e=e.sibling}}function a1(e,r){for(;Be!==null;){var s=Be;switch(s.tag){case 0:case 11:case 15:Or(8,s,r);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:el(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Be=l;else t:for(s=e;Be!==null;){l=Be;var h=l.sibling,f=l.return;if(Xy(l),l===s){Be=null;break t}if(h!==null){h.return=f,Be=h;break t}Be=f}}}var sb={getCacheForType:function(e){var r=nn(ke),s=r.data.get(e);return s===void 0&&(s=e(),r.data.set(e,s)),s}},ob=typeof WeakMap=="function"?WeakMap:Map,Xt=0,re=null,Vt=null,zt=0,Wt=0,An=null,Pr=!1,Ps=!1,If=!1,Zi=0,xe=0,Ur=0,qa=0,jf=0,$n=0,Us=0,_l=null,yn=null,Cf=!1,Df=0,_c=1/0,Ec=null,Lr=null,Qe=0,zr=null,Ls=null,zs=0,Nf=0,Mf=null,s1=null,El=0,Of=null;function Rn(){if((Xt&2)!==0&&zt!==0)return zt&-zt;if(J.T!==null){var e=Rs;return e!==0?e:$f()}return Oi()}function o1(){$n===0&&($n=(zt&536870912)===0||Kt?Do():536870912);var e=zn.current;return e!==null&&(e.flags|=32),$n}function In(e,r,s){(e===re&&(Wt===2||Wt===9)||e.cancelPendingCommit!==null)&&($s(e,0),$r(e,zt,$n,!1)),ve(e,s),((Xt&2)===0||e!==re)&&(e===re&&((Xt&2)===0&&(qa|=s),xe===4&&$r(e,zt,$n,!1)),_i(e))}function l1(e,r,s){if((Xt&6)!==0)throw Error(a(327));var l=!s&&(r&124)===0&&(r&e.expiredLanes)===0||fr(e,r),h=l?cb(e,r):Pf(e,r,!0),f=l;do{if(h===0){Ps&&!l&&$r(e,r,0,!1);break}else{if(s=e.current.alternate,f&&!lb(s)){h=Pf(e,r,!1),f=!1;continue}if(h===2){if(f=r,e.errorRecoveryDisabledLanes&f)var E=0;else E=e.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){r=E;t:{var b=e;h=_l;var N=b.current.memoizedState.isDehydrated;if(N&&($s(b,E).flags|=256),E=Pf(b,E,!1),E!==2){if(If&&!N){b.errorRecoveryDisabledLanes|=f,qa|=f,h=4;break t}f=yn,yn=h,f!==null&&(yn===null?yn=f:yn.push.apply(yn,f))}h=E}if(f=!1,h!==2)continue}}if(h===1){$s(e,0),$r(e,r,0,!0);break}t:{switch(l=e,f=h,f){case 0:case 1:throw Error(a(345));case 4:if((r&4194048)!==r)break;case 6:$r(l,r,$n,!Pr);break t;case 2:yn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((r&62914560)===r&&(h=Df+300-pn(),10<h)){if($r(l,r,$n,!Pr),Nn(l,0,!0)!==0)break t;l.timeoutHandle=P1(u1.bind(null,l,s,yn,Ec,Cf,r,$n,qa,Us,Pr,f,2,-0,0),h);break t}u1(l,s,yn,Ec,Cf,r,$n,qa,Us,Pr,f,0,-0,0)}}break}while(!0);_i(e)}function u1(e,r,s,l,h,f,E,b,N,H,et,rt,G,Q){if(e.timeoutHandle=-1,rt=r.subtreeFlags,(rt&8192||(rt&16785408)===16785408)&&(Il={stylesheets:null,count:0,unsuspend:Fb},n1(r),rt=Kb(),rt!==null)){e.cancelPendingCommit=rt(g1.bind(null,e,r,f,s,l,h,E,b,N,et,1,G,Q)),$r(e,f,E,!H);return}g1(e,r,f,s,l,h,E,b,N)}function lb(e){for(var r=e;;){var s=r.tag;if((s===0||s===11||s===15)&&r.flags&16384&&(s=r.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var h=s[l],f=h.getSnapshot;h=h.value;try{if(!wn(f(),h))return!1}catch{return!1}}if(s=r.child,r.subtreeFlags&16384&&s!==null)s.return=r,r=s;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function $r(e,r,s,l){r&=~jf,r&=~qa,e.suspendedLanes|=r,e.pingedLanes&=~r,l&&(e.warmLanes|=r),l=e.expirationTimes;for(var h=r;0<h;){var f=31-un(h),E=1<<f;l[f]=-1,h&=~E}s!==0&&mr(e,s,r)}function wc(){return(Xt&6)===0?(wl(0),!1):!0}function Vf(){if(Vt!==null){if(Wt===0)var e=Vt.return;else e=Vt,qi=Ua=null,Wd(e),Ms=null,dl=0,e=Vt;for(;e!==null;)By(e.alternate,e),e=e.return;Vt=null}}function $s(e,r){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,Ab(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Vf(),re=e,Vt=s=$i(e.current,null),zt=r,Wt=0,An=null,Pr=!1,Ps=fr(e,r),If=!1,Us=$n=jf=qa=Ur=xe=0,yn=_l=null,Cf=!1,(r&8)!==0&&(r|=r&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=r;0<l;){var h=31-un(l),f=1<<h;r|=e[h],l&=~f}return Zi=r,qu(),s}function c1(e,r){Mt=null,J.H=uc,r===il||r===Ju?(r=R0(),Wt=3):r===T0?(r=R0(),Wt=4):Wt=r===Iy?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,An=r,Vt===null&&(xe=1,pc(e,kn(r,e.current)))}function h1(){var e=J.H;return J.H=uc,e===null?uc:e}function d1(){var e=J.A;return J.A=sb,e}function kf(){xe=4,Pr||(zt&4194048)!==zt&&zn.current!==null||(Ps=!0),(Ur&134217727)===0&&(qa&134217727)===0||re===null||$r(re,zt,$n,!1)}function Pf(e,r,s){var l=Xt;Xt|=2;var h=h1(),f=d1();(re!==e||zt!==r)&&(Ec=null,$s(e,r)),r=!1;var E=xe;t:do try{if(Wt!==0&&Vt!==null){var b=Vt,N=An;switch(Wt){case 8:Vf(),E=6;break t;case 3:case 2:case 9:case 6:zn.current===null&&(r=!0);var H=Wt;if(Wt=0,An=null,Bs(e,b,N,H),s&&Ps){E=0;break t}break;default:H=Wt,Wt=0,An=null,Bs(e,b,N,H)}}ub(),E=xe;break}catch(et){c1(e,et)}while(!0);return r&&e.shellSuspendCounter++,qi=Ua=null,Xt=l,J.H=h,J.A=f,Vt===null&&(re=null,zt=0,qu()),E}function ub(){for(;Vt!==null;)f1(Vt)}function cb(e,r){var s=Xt;Xt|=2;var l=h1(),h=d1();re!==e||zt!==r?(Ec=null,_c=pn()+500,$s(e,r)):Ps=fr(e,r);t:do try{if(Wt!==0&&Vt!==null){r=Vt;var f=An;e:switch(Wt){case 1:Wt=0,An=null,Bs(e,r,f,1);break;case 2:case 9:if(S0(f)){Wt=0,An=null,p1(r);break}r=function(){Wt!==2&&Wt!==9||re!==e||(Wt=7),_i(e)},f.then(r,r);break t;case 3:Wt=7;break t;case 4:Wt=5;break t;case 7:S0(f)?(Wt=0,An=null,p1(r)):(Wt=0,An=null,Bs(e,r,f,7));break;case 5:var E=null;switch(Vt.tag){case 26:E=Vt.memoizedState;case 5:case 27:var b=Vt;if(!E||Q1(E)){Wt=0,An=null;var N=b.sibling;if(N!==null)Vt=N;else{var H=b.return;H!==null?(Vt=H,bc(H)):Vt=null}break e}}Wt=0,An=null,Bs(e,r,f,5);break;case 6:Wt=0,An=null,Bs(e,r,f,6);break;case 8:Vf(),xe=6;break t;default:throw Error(a(462))}}hb();break}catch(et){c1(e,et)}while(!0);return qi=Ua=null,J.H=l,J.A=h,Xt=s,Vt!==null?0:(re=null,zt=0,qu(),xe)}function hb(){for(;Vt!==null&&!cd();)f1(Vt)}function f1(e){var r=zy(e.alternate,e,Zi);e.memoizedProps=e.pendingProps,r===null?bc(e):Vt=r}function p1(e){var r=e,s=r.alternate;switch(r.tag){case 15:case 0:r=Oy(s,r,r.pendingProps,r.type,void 0,zt);break;case 11:r=Oy(s,r,r.pendingProps,r.type.render,r.ref,zt);break;case 5:Wd(r);default:By(s,r),r=Vt=m0(r,Zi),r=zy(s,r,Zi)}e.memoizedProps=e.pendingProps,r===null?bc(e):Vt=r}function Bs(e,r,s,l){qi=Ua=null,Wd(r),Ms=null,dl=0;var h=r.return;try{if(tb(e,h,r,s,zt)){xe=1,pc(e,kn(s,e.current)),Vt=null;return}}catch(f){if(h!==null)throw Vt=h,f;xe=1,pc(e,kn(s,e.current)),Vt=null;return}r.flags&32768?(Kt||l===1?e=!0:Ps||(zt&536870912)!==0?e=!1:(Pr=e=!0,(l===2||l===9||l===3||l===6)&&(l=zn.current,l!==null&&l.tag===13&&(l.flags|=16384))),m1(r,e)):bc(r)}function bc(e){var r=e;do{if((r.flags&32768)!==0){m1(r,Pr);return}e=r.return;var s=nb(r.alternate,r,Zi);if(s!==null){Vt=s;return}if(r=r.sibling,r!==null){Vt=r;return}Vt=r=e}while(r!==null);xe===0&&(xe=5)}function m1(e,r){do{var s=ib(e.alternate,e);if(s!==null){s.flags&=32767,Vt=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!r&&(e=e.sibling,e!==null)){Vt=e;return}Vt=e=s}while(e!==null);xe=6,Vt=null}function g1(e,r,s,l,h,f,E,b,N){e.cancelPendingCommit=null;do Tc();while(Qe!==0);if((Xt&6)!==0)throw Error(a(327));if(r!==null){if(r===e.current)throw Error(a(177));if(f=r.lanes|r.childLanes,f|=Ad,Ru(e,s,f,E,b,N),e===re&&(Vt=re=null,zt=0),Ls=r,zr=e,zs=s,Nf=f,Mf=h,s1=l,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,mb(Mi,function(){return E1(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||l){l=J.T,J.T=null,h=dt.p,dt.p=2,E=Xt,Xt|=4;try{rb(e,r,s)}finally{Xt=E,dt.p=h,J.T=l}}Qe=1,y1(),x1(),v1()}}function y1(){if(Qe===1){Qe=0;var e=zr,r=Ls,s=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||s){s=J.T,J.T=null;var l=dt.p;dt.p=2;var h=Xt;Xt|=4;try{Jy(r,e);var f=Qf,E=a0(e.containerInfo),b=f.focusedElem,N=f.selectionRange;if(E!==b&&b&&b.ownerDocument&&r0(b.ownerDocument.documentElement,b)){if(N!==null&&Ed(b)){var H=N.start,et=N.end;if(et===void 0&&(et=H),"selectionStart"in b)b.selectionStart=H,b.selectionEnd=Math.min(et,b.value.length);else{var rt=b.ownerDocument||document,G=rt&&rt.defaultView||window;if(G.getSelection){var Q=G.getSelection(),Tt=b.textContent.length,Et=Math.min(N.start,Tt),ee=N.end===void 0?Et:Math.min(N.end,Tt);!Q.extend&&Et>ee&&(E=ee,ee=Et,Et=E);var $=i0(b,Et),P=i0(b,ee);if($&&P&&(Q.rangeCount!==1||Q.anchorNode!==$.node||Q.anchorOffset!==$.offset||Q.focusNode!==P.node||Q.focusOffset!==P.offset)){var F=rt.createRange();F.setStart($.node,$.offset),Q.removeAllRanges(),Et>ee?(Q.addRange(F),Q.extend(P.node,P.offset)):(F.setEnd(P.node,P.offset),Q.addRange(F))}}}}for(rt=[],Q=b;Q=Q.parentNode;)Q.nodeType===1&&rt.push({element:Q,left:Q.scrollLeft,top:Q.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<rt.length;b++){var nt=rt[b];nt.element.scrollLeft=nt.left,nt.element.scrollTop=nt.top}}kc=!!Yf,Qf=Yf=null}finally{Xt=h,dt.p=l,J.T=s}}e.current=r,Qe=2}}function x1(){if(Qe===2){Qe=0;var e=zr,r=Ls,s=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||s){s=J.T,J.T=null;var l=dt.p;dt.p=2;var h=Xt;Xt|=4;try{Qy(e,r.alternate,r)}finally{Xt=h,dt.p=l,J.T=s}}Qe=3}}function v1(){if(Qe===4||Qe===3){Qe=0,jo();var e=zr,r=Ls,s=zs,l=s1;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Qe=5:(Qe=0,Ls=zr=null,_1(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(Lr=null),Mo(s),r=r.stateNode,tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(hr,r,void 0,(r.current.flags&128)===128)}catch{}if(l!==null){r=J.T,h=dt.p,dt.p=2,J.T=null;try{for(var f=e.onRecoverableError,E=0;E<l.length;E++){var b=l[E];f(b.value,{componentStack:b.stack})}}finally{J.T=r,dt.p=h}}(zs&3)!==0&&Tc(),_i(e),h=e.pendingLanes,(s&4194090)!==0&&(h&42)!==0?e===Of?El++:(El=0,Of=e):El=0,wl(0)}}function _1(e,r){(e.pooledCacheLanes&=r)===0&&(r=e.pooledCache,r!=null&&(e.pooledCache=null,el(r)))}function Tc(e){return y1(),x1(),v1(),E1()}function E1(){if(Qe!==5)return!1;var e=zr,r=Nf;Nf=0;var s=Mo(zs),l=J.T,h=dt.p;try{dt.p=32>s?32:s,J.T=null,s=Mf,Mf=null;var f=zr,E=zs;if(Qe=0,Ls=zr=null,zs=0,(Xt&6)!==0)throw Error(a(331));var b=Xt;if(Xt|=4,r1(f.current),e1(f,f.current,E,s),Xt=b,wl(0,!1),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(hr,f)}catch{}return!0}finally{dt.p=h,J.T=l,_1(e,r)}}function w1(e,r,s){r=kn(s,r),r=df(e.stateNode,r,2),e=Cr(e,r,2),e!==null&&(ve(e,2),_i(e))}function ne(e,r,s){if(e.tag===3)w1(e,e,s);else for(;r!==null;){if(r.tag===3){w1(r,e,s);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Lr===null||!Lr.has(l))){e=kn(s,e),s=Ay(2),l=Cr(r,s,2),l!==null&&(Ry(s,l,r,e),ve(l,2),_i(l));break}}r=r.return}}function Uf(e,r,s){var l=e.pingCache;if(l===null){l=e.pingCache=new ob;var h=new Set;l.set(r,h)}else h=l.get(r),h===void 0&&(h=new Set,l.set(r,h));h.has(s)||(If=!0,h.add(s),e=db.bind(null,e,r,s),r.then(e,e))}function db(e,r,s){var l=e.pingCache;l!==null&&l.delete(r),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,re===e&&(zt&s)===s&&(xe===4||xe===3&&(zt&62914560)===zt&&300>pn()-Df?(Xt&2)===0&&$s(e,0):jf|=s,Us===zt&&(Us=0)),_i(e)}function b1(e,r){r===0&&(r=pr()),e=bs(e,r),e!==null&&(ve(e,r),_i(e))}function fb(e){var r=e.memoizedState,s=0;r!==null&&(s=r.retryLane),b1(e,s)}function pb(e,r){var s=0;switch(e.tag){case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(s=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(r),b1(e,s)}function mb(e,r){return ua(e,r)}var Sc=null,Fs=null,Lf=!1,Ac=!1,zf=!1,Ka=0;function _i(e){e!==Fs&&e.next===null&&(Fs===null?Sc=Fs=e:Fs=Fs.next=e),Ac=!0,Lf||(Lf=!0,yb())}function wl(e,r){if(!zf&&Ac){zf=!0;do for(var s=!1,l=Sc;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var f=0;else{var E=l.suspendedLanes,b=l.pingedLanes;f=(1<<31-un(42|e)+1)-1,f&=h&~(E&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(s=!0,R1(l,f))}else f=zt,f=Nn(l,l===re?f:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(f&3)===0||fr(l,f)||(s=!0,R1(l,f));l=l.next}while(s);zf=!1}}function gb(){T1()}function T1(){Ac=Lf=!1;var e=0;Ka!==0&&(Sb()&&(e=Ka),Ka=0);for(var r=pn(),s=null,l=Sc;l!==null;){var h=l.next,f=S1(l,r);f===0?(l.next=null,s===null?Sc=h:s.next=h,h===null&&(Fs=s)):(s=l,(e!==0||(f&3)!==0)&&(Ac=!0)),l=h}wl(e)}function S1(e,r){for(var s=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var E=31-un(f),b=1<<E,N=h[E];N===-1?((b&s)===0||(b&l)!==0)&&(h[E]=ss(b,r)):N<=r&&(e.expiredLanes|=b),f&=~b}if(r=re,s=zt,s=Nn(e,e===r?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===r&&(Wt===2||Wt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&as(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||fr(e,s)){if(r=s&-s,r===e.callbackPriority)return r;switch(l!==null&&as(l),Mo(s)){case 2:case 8:s=Le;break;case 32:s=Mi;break;case 268435456:s=Co;break;default:s=Mi}return l=A1.bind(null,e),s=ua(s,l),e.callbackPriority=r,e.callbackNode=s,r}return l!==null&&l!==null&&as(l),e.callbackPriority=2,e.callbackNode=null,2}function A1(e,r){if(Qe!==0&&Qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(Tc()&&e.callbackNode!==s)return null;var l=zt;return l=Nn(e,e===re?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(l1(e,l,r),S1(e,pn()),e.callbackNode!=null&&e.callbackNode===s?A1.bind(null,e):null)}function R1(e,r){if(Tc())return null;l1(e,r,!0)}function yb(){Rb(function(){(Xt&6)!==0?ua(Oe,gb):T1()})}function $f(){return Ka===0&&(Ka=Do()),Ka}function I1(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Xn(""+e)}function j1(e,r){var s=r.ownerDocument.createElement("input");return s.name=r.name,s.value=r.value,e.id&&s.setAttribute("form",e.id),r.parentNode.insertBefore(s,r),e=new FormData(e),s.parentNode.removeChild(s),e}function xb(e,r,s,l,h){if(r==="submit"&&s&&s.stateNode===h){var f=I1((h[Ge]||null).action),E=l.submitter;E&&(r=(r=E[Ge]||null)?I1(r.formAction):E.getAttribute("formAction"),r!==null&&(f=r,E=null));var b=new Ta("action","action",null,l,h);e.push({event:b,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ka!==0){var N=E?j1(h,E):new FormData(h);of(s,{pending:!0,data:N,method:h.method,action:f},null,N)}}else typeof f=="function"&&(b.preventDefault(),N=E?j1(h,E):new FormData(h),of(s,{pending:!0,data:N,method:h.method,action:f},f,N))},currentTarget:h}]})}}for(var Bf=0;Bf<Sd.length;Bf++){var Ff=Sd[Bf],vb=Ff.toLowerCase(),_b=Ff[0].toUpperCase()+Ff.slice(1);ti(vb,"on"+_b)}ti(l0,"onAnimationEnd"),ti(u0,"onAnimationIteration"),ti(c0,"onAnimationStart"),ti("dblclick","onDoubleClick"),ti("focusin","onFocus"),ti("focusout","onBlur"),ti(Pw,"onTransitionRun"),ti(Uw,"onTransitionStart"),ti(Lw,"onTransitionCancel"),ti(h0,"onTransitionEnd"),di("onMouseEnter",["mouseout","mouseover"]),di("onMouseLeave",["mouseout","mouseover"]),di("onPointerEnter",["pointerout","pointerover"]),di("onPointerLeave",["pointerout","pointerover"]),hi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),hi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),hi("onBeforeInput",["compositionend","keypress","textInput","paste"]),hi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),hi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),hi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Eb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bl));function C1(e,r){r=(r&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],h=l.event;l=l.listeners;t:{var f=void 0;if(r)for(var E=l.length-1;0<=E;E--){var b=l[E],N=b.instance,H=b.currentTarget;if(b=b.listener,N!==f&&h.isPropagationStopped())break t;f=b,h.currentTarget=H;try{f(h)}catch(et){fc(et)}h.currentTarget=null,f=N}else for(E=0;E<l.length;E++){if(b=l[E],N=b.instance,H=b.currentTarget,b=b.listener,N!==f&&h.isPropagationStopped())break t;f=b,h.currentTarget=H;try{f(h)}catch(et){fc(et)}h.currentTarget=null,f=N}}}}function kt(e,r){var s=r[ha];s===void 0&&(s=r[ha]=new Set);var l=e+"__bubble";s.has(l)||(D1(r,e,2,!1),s.add(l))}function qf(e,r,s){var l=0;r&&(l|=4),D1(s,e,l,r)}var Rc="_reactListening"+Math.random().toString(36).slice(2);function Kf(e){if(!e[Rc]){e[Rc]=!0,Iu.forEach(function(s){s!=="selectionchange"&&(Eb.has(s)||qf(s,!1,e),qf(s,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Rc]||(r[Rc]=!0,qf("selectionchange",!1,r))}}function D1(e,r,s,l){switch(ex(r)){case 2:var h=Yb;break;case 8:h=Qb;break;default:h=ap}s=h.bind(null,r,s,e),h=void 0,!Li||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(r,s,{capture:!0,passive:h}):e.addEventListener(r,s,!0):h!==void 0?e.addEventListener(r,s,{passive:h}):e.addEventListener(r,s,!1)}function Hf(e,r,s,l,h){var f=l;if((r&1)===0&&(r&2)===0&&l!==null)t:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var b=l.stateNode.containerInfo;if(b===h)break;if(E===4)for(E=l.return;E!==null;){var N=E.tag;if((N===3||N===4)&&E.stateNode.containerInfo===h)return;E=E.return}for(;b!==null;){if(E=ui(b),E===null)return;if(N=E.tag,N===5||N===6||N===26||N===27){l=f=E;continue t}b=b.parentNode}}l=l.return}Ea(function(){var H=f,et=zo(s),rt=[];t:{var G=d0.get(e);if(G!==void 0){var Q=Ta,Tt=e;switch(e){case"keypress":if(wa(s)===0)break t;case"keydown":case"keyup":Q=vs;break;case"focusin":Tt="focus",Q=gs;break;case"focusout":Tt="blur",Q=gs;break;case"beforeblur":case"afterblur":Q=gs;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=ja;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=Vu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=Ar;break;case l0:case u0:case c0:Q=Bo;break;case h0:Q=x;break;case"scroll":case"scrollend":Q=Aa;break;case"wheel":Q=A;break;case"copy":case"cut":case"paste":Q=Pu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=Ko;break;case"toggle":case"beforetoggle":Q=W}var Et=(r&4)!==0,ee=!Et&&(e==="scroll"||e==="scrollend"),$=Et?G!==null?G+"Capture":null:G;Et=[];for(var P=H,F;P!==null;){var nt=P;if(F=nt.stateNode,nt=nt.tag,nt!==5&&nt!==26&&nt!==27||F===null||$===null||(nt=Tr(P,$),nt!=null&&Et.push(Tl(P,nt,F))),ee)break;P=P.return}0<Et.length&&(G=new Q(G,Tt,null,s,et),rt.push({event:G,listeners:Et}))}}if((r&7)===0){t:{if(G=e==="mouseover"||e==="pointerover",Q=e==="mouseout"||e==="pointerout",G&&s!==Lo&&(Tt=s.relatedTarget||s.fromElement)&&(ui(Tt)||Tt[Vi]))break t;if((Q||G)&&(G=et.window===et?et:(G=et.ownerDocument)?G.defaultView||G.parentWindow:window,Q?(Tt=s.relatedTarget||s.toElement,Q=H,Tt=Tt?ui(Tt):null,Tt!==null&&(ee=u(Tt),Et=Tt.tag,Tt!==ee||Et!==5&&Et!==27&&Et!==6)&&(Tt=null)):(Q=null,Tt=H),Q!==Tt)){if(Et=ja,nt="onMouseLeave",$="onMouseEnter",P="mouse",(e==="pointerout"||e==="pointerover")&&(Et=Ko,nt="onPointerLeave",$="onPointerEnter",P="pointer"),ee=Q==null?G:xr(Q),F=Tt==null?G:xr(Tt),G=new Et(nt,P+"leave",Q,s,et),G.target=ee,G.relatedTarget=F,nt=null,ui(et)===H&&(Et=new Et($,P+"enter",Tt,s,et),Et.target=F,Et.relatedTarget=ee,nt=Et),ee=nt,Q&&Tt)e:{for(Et=Q,$=Tt,P=0,F=Et;F;F=qs(F))P++;for(F=0,nt=$;nt;nt=qs(nt))F++;for(;0<P-F;)Et=qs(Et),P--;for(;0<F-P;)$=qs($),F--;for(;P--;){if(Et===$||$!==null&&Et===$.alternate)break e;Et=qs(Et),$=qs($)}Et=null}else Et=null;Q!==null&&N1(rt,G,Q,Et,!1),Tt!==null&&ee!==null&&N1(rt,ee,Tt,Et,!0)}}t:{if(G=H?xr(H):window,Q=G.nodeName&&G.nodeName.toLowerCase(),Q==="select"||Q==="input"&&G.type==="file")var mt=Wg;else if(Qg(G))if(Zg)mt=Ow;else{mt=Nw;var Ot=Dw}else Q=G.nodeName,!Q||Q.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?H&&fs(H.elementType)&&(mt=Wg):mt=Mw;if(mt&&(mt=mt(e,H))){Xg(rt,mt,s,et);break t}Ot&&Ot(e,G,H),e==="focusout"&&H&&G.type==="number"&&H.memoizedProps.value!=null&&ko(G,"number",G.value)}switch(Ot=H?xr(H):window,e){case"focusin":(Qg(Ot)||Ot.contentEditable==="true")&&(_s=Ot,wd=H,Xo=null);break;case"focusout":Xo=wd=_s=null;break;case"mousedown":bd=!0;break;case"contextmenu":case"mouseup":case"dragend":bd=!1,s0(rt,s,et);break;case"selectionchange":if(kw)break;case"keydown":case"keyup":s0(rt,s,et)}var xt;if(Rt)t:{switch(e){case"compositionstart":var wt="onCompositionStart";break t;case"compositionend":wt="onCompositionEnd";break t;case"compositionupdate":wt="onCompositionUpdate";break t}wt=void 0}else Jn?Wn(e,s)&&(wt="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(wt="onCompositionStart");wt&&(we&&s.locale!=="ko"&&(Jn||wt!=="onCompositionStart"?wt==="onCompositionEnd"&&Jn&&(xt=Ou()):(Vn=et,ie="value"in Vn?Vn.value:Vn.textContent,Jn=!0)),Ot=Ic(H,wt),0<Ot.length&&(wt=new qo(wt,e,null,s,et),rt.push({event:wt,listeners:Ot}),xt?wt.data=xt:(xt=Zn(s),xt!==null&&(wt.data=xt)))),(xt=Qt?Ho(e,s):Iw(e,s))&&(wt=Ic(H,"onBeforeInput"),0<wt.length&&(Ot=new qo("onBeforeInput","beforeinput",null,s,et),rt.push({event:Ot,listeners:wt}),Ot.data=xt)),xb(rt,e,H,s,et)}C1(rt,r)})}function Tl(e,r,s){return{instance:e,listener:r,currentTarget:s}}function Ic(e,r){for(var s=r+"Capture",l=[];e!==null;){var h=e,f=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||f===null||(h=Tr(e,s),h!=null&&l.unshift(Tl(e,h,f)),h=Tr(e,r),h!=null&&l.push(Tl(e,h,f))),e.tag===3)return l;e=e.return}return[]}function qs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function N1(e,r,s,l,h){for(var f=r._reactName,E=[];s!==null&&s!==l;){var b=s,N=b.alternate,H=b.stateNode;if(b=b.tag,N!==null&&N===l)break;b!==5&&b!==26&&b!==27||H===null||(N=H,h?(H=Tr(s,f),H!=null&&E.unshift(Tl(s,H,N))):h||(H=Tr(s,f),H!=null&&E.push(Tl(s,H,N)))),s=s.return}E.length!==0&&e.push({event:r,listeners:E})}var wb=/\r\n?/g,bb=/\u0000|\uFFFD/g;function M1(e){return(typeof e=="string"?e:""+e).replace(wb,`
`).replace(bb,"")}function O1(e,r){return r=M1(r),M1(e)===r}function jc(){}function te(e,r,s,l,h,f){switch(s){case"children":typeof l=="string"?r==="body"||r==="textarea"&&l===""||On(e,l):(typeof l=="number"||typeof l=="bigint")&&r!=="body"&&On(e,""+l);break;case"className":ga(e,"class",l);break;case"tabIndex":ga(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ga(e,s,l);break;case"style":Uo(e,l,f);break;case"data":if(r!=="object"){ga(e,"data",l);break}case"src":case"href":if(l===""&&(r!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Xn(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(s==="formAction"?(r!=="input"&&te(e,r,"name",h.name,h,null),te(e,r,"formEncType",h.formEncType,h,null),te(e,r,"formMethod",h.formMethod,h,null),te(e,r,"formTarget",h.formTarget,h,null)):(te(e,r,"encType",h.encType,h,null),te(e,r,"method",h.method,h,null),te(e,r,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Xn(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=jc);break;case"onScroll":l!=null&&kt("scroll",e);break;case"onScrollEnd":l!=null&&kt("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=Xn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":kt("beforetoggle",e),kt("toggle",e),ma(e,"popover",l);break;case"xlinkActuate":Mn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Mn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Mn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Mn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Mn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Mn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Mn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Mn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Mn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ma(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Du.get(s)||s,ma(e,s,l))}}function Gf(e,r,s,l,h,f){switch(s){case"style":Uo(e,l,f);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof l=="string"?On(e,l):(typeof l=="number"||typeof l=="bigint")&&On(e,""+l);break;case"onScroll":l!=null&&kt("scroll",e);break;case"onScrollEnd":l!=null&&kt("scrollend",e);break;case"onClick":l!=null&&(e.onclick=jc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!fa.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),r=s.slice(2,h?s.length-7:void 0),f=e[Ge]||null,f=f!=null?f[s]:null,typeof f=="function"&&e.removeEventListener(r,f,h),typeof l=="function")){typeof f!="function"&&f!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(r,l,h);break t}s in e?e[s]=l:l===!0?e.setAttribute(s,""):ma(e,s,l)}}}function Xe(e,r,s){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":kt("error",e),kt("load",e);var l=!1,h=!1,f;for(f in s)if(s.hasOwnProperty(f)){var E=s[f];if(E!=null)switch(f){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:te(e,r,f,E,s,null)}}h&&te(e,r,"srcSet",s.srcSet,s,null),l&&te(e,r,"src",s.src,s,null);return;case"input":kt("invalid",e);var b=f=E=h=null,N=null,H=null;for(l in s)if(s.hasOwnProperty(l)){var et=s[l];if(et!=null)switch(l){case"name":h=et;break;case"type":E=et;break;case"checked":N=et;break;case"defaultChecked":H=et;break;case"value":f=et;break;case"defaultValue":b=et;break;case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(a(137,r));break;default:te(e,r,l,et,s,null)}}Vo(e,f,b,N,H,E,h,!1),Er(e);return;case"select":kt("invalid",e),l=E=f=null;for(h in s)if(s.hasOwnProperty(h)&&(b=s[h],b!=null))switch(h){case"value":f=b;break;case"defaultValue":E=b;break;case"multiple":l=b;default:te(e,r,h,b,s,null)}r=f,s=E,e.multiple=!!l,r!=null?wr(e,!!l,r,!1):s!=null&&wr(e,!!l,s,!0);return;case"textarea":kt("invalid",e),f=h=l=null;for(E in s)if(s.hasOwnProperty(E)&&(b=s[E],b!=null))switch(E){case"value":l=b;break;case"defaultValue":h=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(a(91));break;default:te(e,r,E,b,s,null)}Cu(e,l,h,f),Er(e);return;case"option":for(N in s)if(s.hasOwnProperty(N)&&(l=s[N],l!=null))switch(N){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:te(e,r,N,l,s,null)}return;case"dialog":kt("beforetoggle",e),kt("toggle",e),kt("cancel",e),kt("close",e);break;case"iframe":case"object":kt("load",e);break;case"video":case"audio":for(l=0;l<bl.length;l++)kt(bl[l],e);break;case"image":kt("error",e),kt("load",e);break;case"details":kt("toggle",e);break;case"embed":case"source":case"link":kt("error",e),kt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(H in s)if(s.hasOwnProperty(H)&&(l=s[H],l!=null))switch(H){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:te(e,r,H,l,s,null)}return;default:if(fs(r)){for(et in s)s.hasOwnProperty(et)&&(l=s[et],l!==void 0&&Gf(e,r,et,l,s,void 0));return}}for(b in s)s.hasOwnProperty(b)&&(l=s[b],l!=null&&te(e,r,b,l,s,null))}function Tb(e,r,s,l){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,f=null,E=null,b=null,N=null,H=null,et=null;for(Q in s){var rt=s[Q];if(s.hasOwnProperty(Q)&&rt!=null)switch(Q){case"checked":break;case"value":break;case"defaultValue":N=rt;default:l.hasOwnProperty(Q)||te(e,r,Q,null,l,rt)}}for(var G in l){var Q=l[G];if(rt=s[G],l.hasOwnProperty(G)&&(Q!=null||rt!=null))switch(G){case"type":f=Q;break;case"name":h=Q;break;case"checked":H=Q;break;case"defaultChecked":et=Q;break;case"value":E=Q;break;case"defaultValue":b=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(a(137,r));break;default:Q!==rt&&te(e,r,G,Q,l,rt)}}Oo(e,E,b,N,H,et,f,h);return;case"select":Q=E=b=G=null;for(f in s)if(N=s[f],s.hasOwnProperty(f)&&N!=null)switch(f){case"value":break;case"multiple":Q=N;default:l.hasOwnProperty(f)||te(e,r,f,null,l,N)}for(h in l)if(f=l[h],N=s[h],l.hasOwnProperty(h)&&(f!=null||N!=null))switch(h){case"value":G=f;break;case"defaultValue":b=f;break;case"multiple":E=f;default:f!==N&&te(e,r,h,f,l,N)}r=b,s=E,l=Q,G!=null?wr(e,!!s,G,!1):!!l!=!!s&&(r!=null?wr(e,!!s,r,!0):wr(e,!!s,s?[]:"",!1));return;case"textarea":Q=G=null;for(b in s)if(h=s[b],s.hasOwnProperty(b)&&h!=null&&!l.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:te(e,r,b,null,l,h)}for(E in l)if(h=l[E],f=s[E],l.hasOwnProperty(E)&&(h!=null||f!=null))switch(E){case"value":G=h;break;case"defaultValue":Q=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==f&&te(e,r,E,h,l,f)}ju(e,G,Q);return;case"option":for(var Tt in s)if(G=s[Tt],s.hasOwnProperty(Tt)&&G!=null&&!l.hasOwnProperty(Tt))switch(Tt){case"selected":e.selected=!1;break;default:te(e,r,Tt,null,l,G)}for(N in l)if(G=l[N],Q=s[N],l.hasOwnProperty(N)&&G!==Q&&(G!=null||Q!=null))switch(N){case"selected":e.selected=G&&typeof G!="function"&&typeof G!="symbol";break;default:te(e,r,N,G,l,Q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Et in s)G=s[Et],s.hasOwnProperty(Et)&&G!=null&&!l.hasOwnProperty(Et)&&te(e,r,Et,null,l,G);for(H in l)if(G=l[H],Q=s[H],l.hasOwnProperty(H)&&G!==Q&&(G!=null||Q!=null))switch(H){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(a(137,r));break;default:te(e,r,H,G,l,Q)}return;default:if(fs(r)){for(var ee in s)G=s[ee],s.hasOwnProperty(ee)&&G!==void 0&&!l.hasOwnProperty(ee)&&Gf(e,r,ee,void 0,l,G);for(et in l)G=l[et],Q=s[et],!l.hasOwnProperty(et)||G===Q||G===void 0&&Q===void 0||Gf(e,r,et,G,l,Q);return}}for(var $ in s)G=s[$],s.hasOwnProperty($)&&G!=null&&!l.hasOwnProperty($)&&te(e,r,$,null,l,G);for(rt in l)G=l[rt],Q=s[rt],!l.hasOwnProperty(rt)||G===Q||G==null&&Q==null||te(e,r,rt,G,l,Q)}var Yf=null,Qf=null;function Cc(e){return e.nodeType===9?e:e.ownerDocument}function V1(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function k1(e,r){if(e===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&r==="foreignObject"?0:e}function Xf(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Wf=null;function Sb(){var e=window.event;return e&&e.type==="popstate"?e===Wf?!1:(Wf=e,!0):(Wf=null,!1)}var P1=typeof setTimeout=="function"?setTimeout:void 0,Ab=typeof clearTimeout=="function"?clearTimeout:void 0,U1=typeof Promise=="function"?Promise:void 0,Rb=typeof queueMicrotask=="function"?queueMicrotask:typeof U1<"u"?function(e){return U1.resolve(null).then(e).catch(Ib)}:P1;function Ib(e){setTimeout(function(){throw e})}function Br(e){return e==="head"}function L1(e,r){var s=r,l=0,h=0;do{var f=s.nextSibling;if(e.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"){if(0<l&&8>l){s=l;var E=e.ownerDocument;if(s&1&&Sl(E.documentElement),s&2&&Sl(E.body),s&4)for(s=E.head,Sl(s),E=s.firstChild;E;){var b=E.nextSibling,N=E.nodeName;E[yr]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&E.rel.toLowerCase()==="stylesheet"||s.removeChild(E),E=b}}if(h===0){e.removeChild(f),Ml(r);return}h--}else s==="$"||s==="$?"||s==="$!"?h++:l=s.charCodeAt(0)-48;else l=0;s=f}while(s);Ml(r)}function Zf(e){var r=e.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var s=r;switch(r=r.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Zf(s),ls(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function jb(e,r,s,l){for(;e.nodeType===1;){var h=s;if(e.nodeName.toLowerCase()!==r.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[yr])switch(r){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(r==="input"&&e.type==="hidden"){var f=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ni(e.nextSibling),e===null)break}return null}function Cb(e,r,s){if(r==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=ni(e.nextSibling),e===null))return null;return e}function Jf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Db(e,r){var s=e.ownerDocument;if(e.data!=="$?"||s.readyState==="complete")r();else{var l=function(){r(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function ni(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return e}var tp=null;function z1(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(r===0)return e;r--}else s==="/$"&&r++}e=e.previousSibling}return null}function $1(e,r,s){switch(r=Cc(s),e){case"html":if(e=r.documentElement,!e)throw Error(a(452));return e;case"head":if(e=r.head,!e)throw Error(a(453));return e;case"body":if(e=r.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Sl(e){for(var r=e.attributes;r.length;)e.removeAttributeNode(r[0]);ls(e)}var Bn=new Map,B1=new Set;function Dc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ji=dt.d;dt.d={f:Nb,r:Mb,D:Ob,C:Vb,L:kb,m:Pb,X:Lb,S:Ub,M:zb};function Nb(){var e=Ji.f(),r=wc();return e||r}function Mb(e){var r=ci(e);r!==null&&r.tag===5&&r.type==="form"?ly(r):Ji.r(e)}var Ks=typeof document>"u"?null:document;function F1(e,r,s){var l=Ks;if(l&&typeof r=="string"&&r){var h=ze(r);h='link[rel="'+e+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),B1.has(h)||(B1.add(h),e={rel:e,crossOrigin:s,href:r},l.querySelector(h)===null&&(r=l.createElement("link"),Xe(r,"link",e),Ee(r),l.head.appendChild(r)))}}function Ob(e){Ji.D(e),F1("dns-prefetch",e,null)}function Vb(e,r){Ji.C(e,r),F1("preconnect",e,r)}function kb(e,r,s){Ji.L(e,r,s);var l=Ks;if(l&&e&&r){var h='link[rel="preload"][as="'+ze(r)+'"]';r==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+ze(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+ze(s.imageSizes)+'"]')):h+='[href="'+ze(e)+'"]';var f=h;switch(r){case"style":f=Hs(e);break;case"script":f=Gs(e)}Bn.has(f)||(e=v({rel:"preload",href:r==="image"&&s&&s.imageSrcSet?void 0:e,as:r},s),Bn.set(f,e),l.querySelector(h)!==null||r==="style"&&l.querySelector(Al(f))||r==="script"&&l.querySelector(Rl(f))||(r=l.createElement("link"),Xe(r,"link",e),Ee(r),l.head.appendChild(r)))}}function Pb(e,r){Ji.m(e,r);var s=Ks;if(s&&e){var l=r&&typeof r.as=="string"?r.as:"script",h='link[rel="modulepreload"][as="'+ze(l)+'"][href="'+ze(e)+'"]',f=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Gs(e)}if(!Bn.has(f)&&(e=v({rel:"modulepreload",href:e},r),Bn.set(f,e),s.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Rl(f)))return}l=s.createElement("link"),Xe(l,"link",e),Ee(l),s.head.appendChild(l)}}}function Ub(e,r,s){Ji.S(e,r,s);var l=Ks;if(l&&e){var h=vr(l).hoistableStyles,f=Hs(e);r=r||"default";var E=h.get(f);if(!E){var b={loading:0,preload:null};if(E=l.querySelector(Al(f)))b.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":r},s),(s=Bn.get(f))&&ep(e,s);var N=E=l.createElement("link");Ee(N),Xe(N,"link",e),N._p=new Promise(function(H,et){N.onload=H,N.onerror=et}),N.addEventListener("load",function(){b.loading|=1}),N.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Nc(E,r,l)}E={type:"stylesheet",instance:E,count:1,state:b},h.set(f,E)}}}function Lb(e,r){Ji.X(e,r);var s=Ks;if(s&&e){var l=vr(s).hoistableScripts,h=Gs(e),f=l.get(h);f||(f=s.querySelector(Rl(h)),f||(e=v({src:e,async:!0},r),(r=Bn.get(h))&&np(e,r),f=s.createElement("script"),Ee(f),Xe(f,"link",e),s.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(h,f))}}function zb(e,r){Ji.M(e,r);var s=Ks;if(s&&e){var l=vr(s).hoistableScripts,h=Gs(e),f=l.get(h);f||(f=s.querySelector(Rl(h)),f||(e=v({src:e,async:!0,type:"module"},r),(r=Bn.get(h))&&np(e,r),f=s.createElement("script"),Ee(f),Xe(f,"link",e),s.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(h,f))}}function q1(e,r,s,l){var h=(h=_t.current)?Dc(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(r=Hs(s.href),s=vr(h).hoistableStyles,l=s.get(r),l||(l={type:"style",instance:null,count:0,state:null},s.set(r,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Hs(s.href);var f=vr(h).hoistableStyles,E=f.get(e);if(E||(h=h.ownerDocument||h,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,E),(f=h.querySelector(Al(e)))&&!f._p&&(E.instance=f,E.state.loading=5),Bn.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Bn.set(e,s),f||$b(h,e,s,E.state))),r&&l===null)throw Error(a(528,""));return E}if(r&&l!==null)throw Error(a(529,""));return null;case"script":return r=s.async,s=s.src,typeof s=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Gs(s),s=vr(h).hoistableScripts,l=s.get(r),l||(l={type:"script",instance:null,count:0,state:null},s.set(r,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Hs(e){return'href="'+ze(e)+'"'}function Al(e){return'link[rel="stylesheet"]['+e+"]"}function K1(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function $b(e,r,s,l){e.querySelector('link[rel="preload"][as="style"]['+r+"]")?l.loading=1:(r=e.createElement("link"),l.preload=r,r.addEventListener("load",function(){return l.loading|=1}),r.addEventListener("error",function(){return l.loading|=2}),Xe(r,"link",s),Ee(r),e.head.appendChild(r))}function Gs(e){return'[src="'+ze(e)+'"]'}function Rl(e){return"script[async]"+e}function H1(e,r,s){if(r.count++,r.instance===null)switch(r.type){case"style":var l=e.querySelector('style[data-href~="'+ze(s.href)+'"]');if(l)return r.instance=l,Ee(l),l;var h=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ee(l),Xe(l,"style",h),Nc(l,s.precedence,e),r.instance=l;case"stylesheet":h=Hs(s.href);var f=e.querySelector(Al(h));if(f)return r.state.loading|=4,r.instance=f,Ee(f),f;l=K1(s),(h=Bn.get(h))&&ep(l,h),f=(e.ownerDocument||e).createElement("link"),Ee(f);var E=f;return E._p=new Promise(function(b,N){E.onload=b,E.onerror=N}),Xe(f,"link",l),r.state.loading|=4,Nc(f,s.precedence,e),r.instance=f;case"script":return f=Gs(s.src),(h=e.querySelector(Rl(f)))?(r.instance=h,Ee(h),h):(l=s,(h=Bn.get(f))&&(l=v({},s),np(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),Ee(h),Xe(h,"link",l),e.head.appendChild(h),r.instance=h);case"void":return null;default:throw Error(a(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(l=r.instance,r.state.loading|=4,Nc(l,s.precedence,e));return r.instance}function Nc(e,r,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,f=h,E=0;E<l.length;E++){var b=l[E];if(b.dataset.precedence===r)f=b;else if(f!==h)break}f?f.parentNode.insertBefore(e,f.nextSibling):(r=s.nodeType===9?s.head:s,r.insertBefore(e,r.firstChild))}function ep(e,r){e.crossOrigin==null&&(e.crossOrigin=r.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=r.referrerPolicy),e.title==null&&(e.title=r.title)}function np(e,r){e.crossOrigin==null&&(e.crossOrigin=r.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=r.referrerPolicy),e.integrity==null&&(e.integrity=r.integrity)}var Mc=null;function G1(e,r,s){if(Mc===null){var l=new Map,h=Mc=new Map;h.set(s,l)}else h=Mc,l=h.get(s),l||(l=new Map,h.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),h=0;h<s.length;h++){var f=s[h];if(!(f[yr]||f[_e]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var E=f.getAttribute(r)||"";E=e+E;var b=l.get(E);b?b.push(f):l.set(E,[f])}}return l}function Y1(e,r,s){e=e.ownerDocument||e,e.head.insertBefore(s,r==="title"?e.querySelector("head > title"):null)}function Bb(e,r,s){if(s===1||r.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return e=r.disabled,typeof r.precedence=="string"&&e==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function Q1(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Il=null;function Fb(){}function qb(e,r,s){if(Il===null)throw Error(a(475));var l=Il;if(r.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=Hs(s.href),f=e.querySelector(Al(h));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Oc.bind(l),e.then(l,l)),r.state.loading|=4,r.instance=f,Ee(f);return}f=e.ownerDocument||e,s=K1(s),(h=Bn.get(h))&&ep(s,h),f=f.createElement("link"),Ee(f);var E=f;E._p=new Promise(function(b,N){E.onload=b,E.onerror=N}),Xe(f,"link",s),r.instance=f}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(r,e),(e=r.state.preload)&&(r.state.loading&3)===0&&(l.count++,r=Oc.bind(l),e.addEventListener("load",r),e.addEventListener("error",r))}}function Kb(){if(Il===null)throw Error(a(475));var e=Il;return e.stylesheets&&e.count===0&&ip(e,e.stylesheets),0<e.count?function(r){var s=setTimeout(function(){if(e.stylesheets&&ip(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(s)}}:null}function Oc(){if(this.count--,this.count===0){if(this.stylesheets)ip(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Vc=null;function ip(e,r){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Vc=new Map,r.forEach(Hb,e),Vc=null,Oc.call(e))}function Hb(e,r){if(!(r.state.loading&4)){var s=Vc.get(e);if(s)var l=s.get(null);else{s=new Map,Vc.set(e,s);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<h.length;f++){var E=h[f];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(s.set(E.dataset.precedence,E),l=E)}l&&s.set(null,l)}h=r.instance,E=h.getAttribute("data-precedence"),f=s.get(E)||l,f===l&&s.set(null,h),s.set(E,h),this.count++,l=Oc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),f?f.parentNode.insertBefore(h,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),r.state.loading|=4}}var jl={$$typeof:tt,Provider:null,Consumer:null,_currentValue:yt,_currentValue2:yt,_threadCount:0};function Gb(e,r,s,l,h,f,E,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=os(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=os(0),this.hiddenUpdates=os(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=f,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function X1(e,r,s,l,h,f,E,b,N,H,et,rt){return e=new Gb(e,r,s,E,b,N,H,rt),r=1,f===!0&&(r|=24),f=bn(3,null,null,r),e.current=f,f.stateNode=e,r=Pd(),r.refCount++,e.pooledCache=r,r.refCount++,f.memoizedState={element:l,isDehydrated:s,cache:r},$d(f),e}function W1(e){return e?(e=Ts,e):Ts}function Z1(e,r,s,l,h,f){h=W1(h),l.context===null?l.context=h:l.pendingContext=h,l=jr(r),l.payload={element:s},f=f===void 0?null:f,f!==null&&(l.callback=f),s=Cr(e,l,r),s!==null&&(In(s,e,r),al(s,e,r))}function J1(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<r?s:r}}function rp(e,r){J1(e,r),(e=e.alternate)&&J1(e,r)}function tx(e){if(e.tag===13){var r=bs(e,67108864);r!==null&&In(r,e,67108864),rp(e,67108864)}}var kc=!0;function Yb(e,r,s,l){var h=J.T;J.T=null;var f=dt.p;try{dt.p=2,ap(e,r,s,l)}finally{dt.p=f,J.T=h}}function Qb(e,r,s,l){var h=J.T;J.T=null;var f=dt.p;try{dt.p=8,ap(e,r,s,l)}finally{dt.p=f,J.T=h}}function ap(e,r,s,l){if(kc){var h=sp(l);if(h===null)Hf(e,r,l,Pc,s),nx(e,l);else if(Wb(h,e,r,s,l))l.stopPropagation();else if(nx(e,l),r&4&&-1<Xb.indexOf(e)){for(;h!==null;){var f=ci(h);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var E=Gn(f.pendingLanes);if(E!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;E;){var N=1<<31-un(E);b.entanglements[1]|=N,E&=~N}_i(f),(Xt&6)===0&&(_c=pn()+500,wl(0))}}break;case 13:b=bs(f,2),b!==null&&In(b,f,2),wc(),rp(f,2)}if(f=sp(l),f===null&&Hf(e,r,l,Pc,s),f===h)break;h=f}h!==null&&l.stopPropagation()}else Hf(e,r,l,null,s)}}function sp(e){return e=zo(e),op(e)}var Pc=null;function op(e){if(Pc=null,e=ui(e),e!==null){var r=u(e);if(r===null)e=null;else{var s=r.tag;if(s===13){if(e=d(r),e!==null)return e;e=null}else if(s===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null)}}return Pc=e,null}function ex(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Tu()){case Oe:return 2;case Le:return 8;case Mi:case hd:return 32;case Co:return 268435456;default:return 32}default:return 32}}var lp=!1,Fr=null,qr=null,Kr=null,Cl=new Map,Dl=new Map,Hr=[],Xb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function nx(e,r){switch(e){case"focusin":case"focusout":Fr=null;break;case"dragenter":case"dragleave":qr=null;break;case"mouseover":case"mouseout":Kr=null;break;case"pointerover":case"pointerout":Cl.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dl.delete(r.pointerId)}}function Nl(e,r,s,l,h,f){return e===null||e.nativeEvent!==f?(e={blockedOn:r,domEventName:s,eventSystemFlags:l,nativeEvent:f,targetContainers:[h]},r!==null&&(r=ci(r),r!==null&&tx(r)),e):(e.eventSystemFlags|=l,r=e.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),e)}function Wb(e,r,s,l,h){switch(r){case"focusin":return Fr=Nl(Fr,e,r,s,l,h),!0;case"dragenter":return qr=Nl(qr,e,r,s,l,h),!0;case"mouseover":return Kr=Nl(Kr,e,r,s,l,h),!0;case"pointerover":var f=h.pointerId;return Cl.set(f,Nl(Cl.get(f)||null,e,r,s,l,h)),!0;case"gotpointercapture":return f=h.pointerId,Dl.set(f,Nl(Dl.get(f)||null,e,r,s,l,h)),!0}return!1}function ix(e){var r=ui(e.target);if(r!==null){var s=u(r);if(s!==null){if(r=s.tag,r===13){if(r=d(s),r!==null){e.blockedOn=r,pd(e.priority,function(){if(s.tag===13){var l=Rn();l=No(l);var h=bs(s,l);h!==null&&In(h,s,l),rp(s,l)}});return}}else if(r===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Uc(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var s=sp(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);Lo=l,s.target.dispatchEvent(l),Lo=null}else return r=ci(s),r!==null&&tx(r),e.blockedOn=s,!1;r.shift()}return!0}function rx(e,r,s){Uc(e)&&s.delete(r)}function Zb(){lp=!1,Fr!==null&&Uc(Fr)&&(Fr=null),qr!==null&&Uc(qr)&&(qr=null),Kr!==null&&Uc(Kr)&&(Kr=null),Cl.forEach(rx),Dl.forEach(rx)}function Lc(e,r){e.blockedOn===r&&(e.blockedOn=null,lp||(lp=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Zb)))}var zc=null;function ax(e){zc!==e&&(zc=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){zc===e&&(zc=null);for(var r=0;r<e.length;r+=3){var s=e[r],l=e[r+1],h=e[r+2];if(typeof l!="function"){if(op(l||s)===null)continue;break}var f=ci(s);f!==null&&(e.splice(r,3),r-=3,of(f,{pending:!0,data:h,method:s.method,action:l},l,h))}}))}function Ml(e){function r(N){return Lc(N,e)}Fr!==null&&Lc(Fr,e),qr!==null&&Lc(qr,e),Kr!==null&&Lc(Kr,e),Cl.forEach(r),Dl.forEach(r);for(var s=0;s<Hr.length;s++){var l=Hr[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Hr.length&&(s=Hr[0],s.blockedOn===null);)ix(s),s.blockedOn===null&&Hr.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var h=s[l],f=s[l+1],E=h[Ge]||null;if(typeof f=="function")E||ax(s);else if(E){var b=null;if(f&&f.hasAttribute("formAction")){if(h=f,E=f[Ge]||null)b=E.formAction;else if(op(h)!==null)continue}else b=E.action;typeof b=="function"?s[l+1]=b:(s.splice(l,3),l-=3),ax(s)}}}function up(e){this._internalRoot=e}$c.prototype.render=up.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(a(409));var s=r.current,l=Rn();Z1(s,l,e,r,null,null)},$c.prototype.unmount=up.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;Z1(e.current,2,null,e,null,null),wc(),r[Vi]=null}};function $c(e){this._internalRoot=e}$c.prototype.unstable_scheduleHydration=function(e){if(e){var r=Oi();e={blockedOn:null,target:e,priority:r};for(var s=0;s<Hr.length&&r!==0&&r<Hr[s].priority;s++);Hr.splice(s,0,e),s===0&&ix(e)}};var sx=t.version;if(sx!=="19.1.1")throw Error(a(527,sx,"19.1.1"));dt.findDOMNode=function(e){var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=p(r),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Jb={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:J,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bc.isDisabled&&Bc.supportsFiber)try{hr=Bc.inject(Jb),tn=Bc}catch{}}return Pl.createRoot=function(e,r){if(!o(e))throw Error(a(299));var s=!1,l="",h=wy,f=by,E=Ty,b=null;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(f=r.onCaughtError),r.onRecoverableError!==void 0&&(E=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(b=r.unstable_transitionCallbacks)),r=X1(e,1,!1,null,null,s,l,h,f,E,b,null),e[Vi]=r.current,Kf(e),new up(r)},Pl.hydrateRoot=function(e,r,s){if(!o(e))throw Error(a(299));var l=!1,h="",f=wy,E=by,b=Ty,N=null,H=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(E=s.onCaughtError),s.onRecoverableError!==void 0&&(b=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(N=s.unstable_transitionCallbacks),s.formState!==void 0&&(H=s.formState)),r=X1(e,1,!0,r,s??null,l,h,f,E,b,N,H),r.context=W1(null),s=r.current,l=Rn(),l=No(l),h=jr(l),h.callback=null,Cr(s,h,l),s=l,r.current.lanes=s,ve(r,s),_i(r),e[Vi]=r.current,Kf(e),new $c(r)},Pl.version="19.1.1",Pl}var N_;function O9(){if(N_)return Yp.exports;N_=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}return n(),Yp.exports=M9(),Yp.exports}var V9=O9();function k9(){const n=Ci(),t=NT();return St.useEffect(()=>{t!=="POP"&&window.scrollTo({top:0,behavior:"instant"});const i=document.getElementById("main");i&&i.focus({preventScroll:!0})},[n,t]),null}function P9({headerMode:n,setHeaderMode:t}){const i=B.useMemo(()=>[{key:"projects",label:"PROJECTS",href:"/projects/"},{key:"peoples",label:"PEOPLES",href:"/peoples/"},{key:"showroom",label:"SHOWROOM",href:"/showroom/"},{key:"guestbook",label:"GUESTBOOK",href:"/guestbook/"},{key:"credits",label:"CREDITS",href:"/credits/"}],[]),a=Ci(),o=B.useMemo(()=>{const d=a.pathname.replace(/^\/+/,"");if(!d)return;const m=d.split("/")[0];return["projects","peoples","showroom","guestbook","credits"].includes(m)?m:void 0},[a.pathname]),u=o==="showroom";return y.jsxs(y.Fragment,{children:[y.jsx(E2,{items:i,activeKey:o,mode:n,autoOnScroll:n===he.GRADIENT_DARK||n===he.DARK,scrollThreshold:8,sticky:!0,overlay:n===he.GRADIENT_DARK||n===he.DARK,maxWidth:1280,onModeChange:t}),y.jsx("main",{id:"main",tabIndex:-1,style:{outline:"none",width:"100vw",boxSizing:"border-box",padding:0},children:y.jsx(WT,{})}),!u&&y.jsx(w2,{title:"잔향 : 기억의 향기",nav:[{label:"PROJECTS",href:"/projects/"},{label:"PEOPLES",href:"/peoples/"},{label:"SHOWROOM",href:"/showroom/"},{label:"GUESTBOOK",href:"/guestbook/"},{label:"CREDITS",href:"/credits/"}],copyright:["ⓒ 2025 TECH UNIV KOREA. ALL RIGHTS RESERVED.","TUKOREA DESIGN ENGINEERING 20TH GRADUATION EXHIBITION"],social:{youtube:{href:"https://youtube.com/",label:"YouTube"},instagram:{href:"https://www.instagram.com/tukd_grad?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",label:"Instagram"}},sidePadding:350,maxWidth:1220})]})}function U9({setHeaderMode:n}){return St.useEffect(()=>{n(he.GRADIENT)},[n]),y.jsx(VA,{})}function L9({setHeaderMode:n}){return St.useEffect(()=>{n(he.GRADIENT)},[n]),y.jsx(xR,{})}function z9({setHeaderMode:n}){return St.useEffect(()=>{n(he.GRADIENT)},[n]),y.jsx(LC,{})}function $9({setHeaderMode:n}){return St.useEffect(()=>{n(he.GRADIENT_DARK)},[n]),y.jsx(g5,{})}function B9({setHeaderMode:n}){return St.useEffect(()=>{n(he.DARK)},[n]),y.jsx(jN,{})}function F9({setHeaderMode:n}){return St.useEffect(()=>{n(he.LIGHT)},[n]),y.jsx(v9,{})}function q9({setHeaderMode:n}){return St.useEffect(()=>{n(he.DARK)},[n]),y.jsx(C9,{})}function K9(){const[n,t]=B.useState(he.GRADIENT);return y.jsxs(wS,{basename:"/",children:[y.jsx(k9,{}),y.jsx(JT,{children:y.jsxs(Ei,{element:y.jsx(P9,{headerMode:n,setHeaderMode:t}),children:[y.jsx(Ei,{index:!0,element:y.jsx($9,{setHeaderMode:t})}),y.jsx(Ei,{path:"projects/",element:y.jsx(z9,{setHeaderMode:t})}),y.jsx(Ei,{path:"peoples/",element:y.jsx(L9,{setHeaderMode:t})}),y.jsx(Ei,{path:"guestbook/",element:y.jsx(B9,{setHeaderMode:t})}),y.jsx(Ei,{path:"work/:pid",element:y.jsx(F9,{setHeaderMode:t})}),y.jsx(Ei,{path:"credits/",element:y.jsx(U9,{setHeaderMode:t})}),y.jsx(Ei,{path:"showroom/",element:y.jsx(q9,{setHeaderMode:t})}),y.jsx(Ei,{path:"*",element:y.jsx(XT,{to:"/",replace:!0})})]})})]})}const M_=typeof document<"u"?document.getElementById("root"):null;M_&&V9.createRoot(M_).render(y.jsx(K9,{}));
