(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(o){if(o.ep)return;o.ep=!0;const u=i(o);fetch(o.href,u)}})();function L_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var hp={exports:{}},Ml={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hx;function lT(){if(hx)return Ml;hx=1;var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(a,o,u){var d=null;if(u!==void 0&&(d=""+u),o.key!==void 0&&(d=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:n,type:a,key:d,ref:o!==void 0?o:null,props:u}}return Ml.Fragment=t,Ml.jsx=i,Ml.jsxs=i,Ml}var dx;function uT(){return dx||(dx=1,hp.exports=lT()),hp.exports}var y=uT(),dp={exports:{}},Dt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fx;function cT(){if(fx)return Dt;fx=1;var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),E=Symbol.iterator;function S(V){return V===null||typeof V!="object"?null:(V=E&&V[E]||V["@@iterator"],typeof V=="function"?V:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,L={};function U(V,at,ct){this.props=V,this.context=at,this.refs=L,this.updater=ct||R}U.prototype.isReactComponent={},U.prototype.setState=function(V,at){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,at,"setState")},U.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function q(){}q.prototype=U.prototype;function X(V,at,ct){this.props=V,this.context=at,this.refs=L,this.updater=ct||R}var tt=X.prototype=new q;tt.constructor=X,M(tt,U.prototype),tt.isPureReactComponent=!0;var lt=Array.isArray,Y={H:null,A:null,T:null,S:null,V:null},ot=Object.prototype.hasOwnProperty;function C(V,at,ct,ht,gt,jt){return ct=jt.ref,{$$typeof:n,type:V,key:at,ref:ct!==void 0?ct:null,props:jt}}function I(V,at){return C(V.type,at,void 0,void 0,void 0,V.props)}function j(V){return typeof V=="object"&&V!==null&&V.$$typeof===n}function O(V){var at={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(ct){return at[ct]})}var k=/\/+/g;function z(V,at){return typeof V=="object"&&V!==null&&V.key!=null?O(""+V.key):at.toString(36)}function D(){}function se(V){switch(V.status){case"fulfilled":return V.value;case"rejected":throw V.reason;default:switch(typeof V.status=="string"?V.then(D,D):(V.status="pending",V.then(function(at){V.status==="pending"&&(V.status="fulfilled",V.value=at)},function(at){V.status==="pending"&&(V.status="rejected",V.reason=at)})),V.status){case"fulfilled":return V.value;case"rejected":throw V.reason}}throw V}function Kt(V,at,ct,ht,gt){var jt=typeof V;(jt==="undefined"||jt==="boolean")&&(V=null);var _t=!1;if(V===null)_t=!0;else switch(jt){case"bigint":case"string":case"number":_t=!0;break;case"object":switch(V.$$typeof){case n:case t:_t=!0;break;case v:return _t=V._init,Kt(_t(V._payload),at,ct,ht,gt)}}if(_t)return gt=gt(V),_t=ht===""?"."+z(V,0):ht,lt(gt)?(ct="",_t!=null&&(ct=_t.replace(k,"$&/")+"/"),Kt(gt,at,ct,"",function(Me){return Me})):gt!=null&&(j(gt)&&(gt=I(gt,ct+(gt.key==null||V&&V.key===gt.key?"":(""+gt.key).replace(k,"$&/")+"/")+_t)),at.push(gt)),1;_t=0;var ge=ht===""?".":ht+":";if(lt(V))for(var Lt=0;Lt<V.length;Lt++)ht=V[Lt],jt=ge+z(ht,Lt),_t+=Kt(ht,at,ct,jt,gt);else if(Lt=S(V),typeof Lt=="function")for(V=Lt.call(V),Lt=0;!(ht=V.next()).done;)ht=ht.value,jt=ge+z(ht,Lt++),_t+=Kt(ht,at,ct,jt,gt);else if(jt==="object"){if(typeof V.then=="function")return Kt(se(V),at,ct,ht,gt);throw at=String(V),Error("Objects are not valid as a React child (found: "+(at==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":at)+"). If you meant to render a collection of children, use an array instead.")}return _t}function J(V,at,ct){if(V==null)return V;var ht=[],gt=0;return Kt(V,ht,"","",function(jt){return at.call(ct,jt,gt++)}),ht}function dt(V){if(V._status===-1){var at=V._result;at=at(),at.then(function(ct){(V._status===0||V._status===-1)&&(V._status=1,V._result=ct)},function(ct){(V._status===0||V._status===-1)&&(V._status=2,V._result=ct)}),V._status===-1&&(V._status=0,V._result=at)}if(V._status===1)return V._result.default;throw V._result}var yt=typeof reportError=="function"?reportError:function(V){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var at=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof V=="object"&&V!==null&&typeof V.message=="string"?String(V.message):String(V),error:V});if(!window.dispatchEvent(at))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",V);return}console.error(V)};function Ct(){}return Dt.Children={map:J,forEach:function(V,at,ct){J(V,function(){at.apply(this,arguments)},ct)},count:function(V){var at=0;return J(V,function(){at++}),at},toArray:function(V){return J(V,function(at){return at})||[]},only:function(V){if(!j(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Dt.Component=U,Dt.Fragment=i,Dt.Profiler=o,Dt.PureComponent=X,Dt.StrictMode=a,Dt.Suspense=p,Dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Y,Dt.__COMPILER_RUNTIME={__proto__:null,c:function(V){return Y.H.useMemoCache(V)}},Dt.cache=function(V){return function(){return V.apply(null,arguments)}},Dt.cloneElement=function(V,at,ct){if(V==null)throw Error("The argument must be a React element, but you passed "+V+".");var ht=M({},V.props),gt=V.key,jt=void 0;if(at!=null)for(_t in at.ref!==void 0&&(jt=void 0),at.key!==void 0&&(gt=""+at.key),at)!ot.call(at,_t)||_t==="key"||_t==="__self"||_t==="__source"||_t==="ref"&&at.ref===void 0||(ht[_t]=at[_t]);var _t=arguments.length-2;if(_t===1)ht.children=ct;else if(1<_t){for(var ge=Array(_t),Lt=0;Lt<_t;Lt++)ge[Lt]=arguments[Lt+2];ht.children=ge}return C(V.type,gt,void 0,void 0,jt,ht)},Dt.createContext=function(V){return V={$$typeof:d,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null},V.Provider=V,V.Consumer={$$typeof:u,_context:V},V},Dt.createElement=function(V,at,ct){var ht,gt={},jt=null;if(at!=null)for(ht in at.key!==void 0&&(jt=""+at.key),at)ot.call(at,ht)&&ht!=="key"&&ht!=="__self"&&ht!=="__source"&&(gt[ht]=at[ht]);var _t=arguments.length-2;if(_t===1)gt.children=ct;else if(1<_t){for(var ge=Array(_t),Lt=0;Lt<_t;Lt++)ge[Lt]=arguments[Lt+2];gt.children=ge}if(V&&V.defaultProps)for(ht in _t=V.defaultProps,_t)gt[ht]===void 0&&(gt[ht]=_t[ht]);return C(V,jt,void 0,void 0,null,gt)},Dt.createRef=function(){return{current:null}},Dt.forwardRef=function(V){return{$$typeof:m,render:V}},Dt.isValidElement=j,Dt.lazy=function(V){return{$$typeof:v,_payload:{_status:-1,_result:V},_init:dt}},Dt.memo=function(V,at){return{$$typeof:g,type:V,compare:at===void 0?null:at}},Dt.startTransition=function(V){var at=Y.T,ct={};Y.T=ct;try{var ht=V(),gt=Y.S;gt!==null&&gt(ct,ht),typeof ht=="object"&&ht!==null&&typeof ht.then=="function"&&ht.then(Ct,yt)}catch(jt){yt(jt)}finally{Y.T=at}},Dt.unstable_useCacheRefresh=function(){return Y.H.useCacheRefresh()},Dt.use=function(V){return Y.H.use(V)},Dt.useActionState=function(V,at,ct){return Y.H.useActionState(V,at,ct)},Dt.useCallback=function(V,at){return Y.H.useCallback(V,at)},Dt.useContext=function(V){return Y.H.useContext(V)},Dt.useDebugValue=function(){},Dt.useDeferredValue=function(V,at){return Y.H.useDeferredValue(V,at)},Dt.useEffect=function(V,at,ct){var ht=Y.H;if(typeof ct=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ht.useEffect(V,at)},Dt.useId=function(){return Y.H.useId()},Dt.useImperativeHandle=function(V,at,ct){return Y.H.useImperativeHandle(V,at,ct)},Dt.useInsertionEffect=function(V,at){return Y.H.useInsertionEffect(V,at)},Dt.useLayoutEffect=function(V,at){return Y.H.useLayoutEffect(V,at)},Dt.useMemo=function(V,at){return Y.H.useMemo(V,at)},Dt.useOptimistic=function(V,at){return Y.H.useOptimistic(V,at)},Dt.useReducer=function(V,at,ct){return Y.H.useReducer(V,at,ct)},Dt.useRef=function(V){return Y.H.useRef(V)},Dt.useState=function(V){return Y.H.useState(V)},Dt.useSyncExternalStore=function(V,at,ct){return Y.H.useSyncExternalStore(V,at,ct)},Dt.useTransition=function(){return Y.H.useTransition()},Dt.version="19.1.1",Dt}var px;function $m(){return px||(px=1,dp.exports=cT()),dp.exports}var B=$m();const St=L_(B);/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var mx="popstate";function hT(n={}){function t(a,o){let{pathname:u,search:d,hash:m}=a.location;return em("",{pathname:u,search:d,hash:m},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function i(a,o){return typeof o=="string"?o:Zl(o)}return fT(t,i,null,n)}function de(n,t){if(n===!1||n===null||typeof n>"u")throw new Error(t)}function ri(n,t){if(!n){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function dT(){return Math.random().toString(36).substring(2,10)}function gx(n,t){return{usr:n.state,key:n.key,idx:t}}function em(n,t,i=null,a){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof t=="string"?xo(t):t,state:i,key:t&&t.key||a||dT()}}function Zl({pathname:n="/",search:t="",hash:i=""}){return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(n+=i.charAt(0)==="#"?i:"#"+i),n}function xo(n){let t={};if(n){let i=n.indexOf("#");i>=0&&(t.hash=n.substring(i),n=n.substring(0,i));let a=n.indexOf("?");a>=0&&(t.search=n.substring(a),n=n.substring(0,a)),n&&(t.pathname=n)}return t}function fT(n,t,i,a={}){let{window:o=document.defaultView,v5Compat:u=!1}=a,d=o.history,m="POP",p=null,g=v();g==null&&(g=0,d.replaceState({...d.state,idx:g},""));function v(){return(d.state||{idx:null}).idx}function E(){m="POP";let U=v(),q=U==null?null:U-g;g=U,p&&p({action:m,location:L.location,delta:q})}function S(U,q){m="PUSH";let X=em(L.location,U,q);g=v()+1;let tt=gx(X,g),lt=L.createHref(X);try{d.pushState(tt,"",lt)}catch(Y){if(Y instanceof DOMException&&Y.name==="DataCloneError")throw Y;o.location.assign(lt)}u&&p&&p({action:m,location:L.location,delta:1})}function R(U,q){m="REPLACE";let X=em(L.location,U,q);g=v();let tt=gx(X,g),lt=L.createHref(X);d.replaceState(tt,"",lt),u&&p&&p({action:m,location:L.location,delta:0})}function M(U){return pT(U)}let L={get action(){return m},get location(){return n(o,d)},listen(U){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(mx,E),p=U,()=>{o.removeEventListener(mx,E),p=null}},createHref(U){return t(o,U)},createURL:M,encodeLocation(U){let q=M(U);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:S,replace:R,go(U){return d.go(U)}};return L}function pT(n,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),de(i,"No window.location.(origin|href) available to create URL");let a=typeof n=="string"?n:Zl(n);return a=a.replace(/ $/,"%20"),!t&&a.startsWith("//")&&(a=i+a),new URL(a,i)}function z_(n,t,i="/"){return mT(n,t,i,!1)}function mT(n,t,i,a){let o=typeof t=="string"?xo(t):t,u=rr(o.pathname||"/",i);if(u==null)return null;let d=$_(n);gT(d);let m=null;for(let p=0;m==null&&p<d.length;++p){let g=RT(u);m=ST(d[p],g,a)}return m}function $_(n,t=[],i=[],a="",o=!1){let u=(d,m,p=o,g)=>{let v={relativePath:g===void 0?d.path||"":g,caseSensitive:d.caseSensitive===!0,childrenIndex:m,route:d};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(a)&&p)return;de(v.relativePath.startsWith(a),`Absolute route path "${v.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(a.length)}let E=nr([a,v.relativePath]),S=i.concat(v);d.children&&d.children.length>0&&(de(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${E}".`),$_(d.children,t,S,E,p)),!(d.path==null&&!d.index)&&t.push({path:E,score:bT(E,d.index),routesMeta:S})};return n.forEach((d,m)=>{if(d.path===""||!d.path?.includes("?"))u(d,m);else for(let p of B_(d.path))u(d,m,!0,p)}),t}function B_(n){let t=n.split("/");if(t.length===0)return[];let[i,...a]=t,o=i.endsWith("?"),u=i.replace(/\?$/,"");if(a.length===0)return o?[u,""]:[u];let d=B_(a.join("/")),m=[];return m.push(...d.map(p=>p===""?u:[u,p].join("/"))),o&&m.push(...d),m.map(p=>n.startsWith("/")&&p===""?"/":p)}function gT(n){n.sort((t,i)=>t.score!==i.score?i.score-t.score:TT(t.routesMeta.map(a=>a.childrenIndex),i.routesMeta.map(a=>a.childrenIndex)))}var yT=/^:[\w-]+$/,xT=3,vT=2,_T=1,wT=10,ET=-2,yx=n=>n==="*";function bT(n,t){let i=n.split("/"),a=i.length;return i.some(yx)&&(a+=ET),t&&(a+=vT),i.filter(o=>!yx(o)).reduce((o,u)=>o+(yT.test(u)?xT:u===""?_T:wT),a)}function TT(n,t){return n.length===t.length&&n.slice(0,-1).every((a,o)=>a===t[o])?n[n.length-1]-t[t.length-1]:0}function ST(n,t,i=!1){let{routesMeta:a}=n,o={},u="/",d=[];for(let m=0;m<a.length;++m){let p=a[m],g=m===a.length-1,v=u==="/"?t:t.slice(u.length)||"/",E=wh({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},v),S=p.route;if(!E&&g&&i&&!a[a.length-1].route.index&&(E=wh({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},v)),!E)return null;Object.assign(o,E.params),d.push({params:o,pathname:nr([u,E.pathname]),pathnameBase:DT(nr([u,E.pathnameBase])),route:S}),E.pathnameBase!=="/"&&(u=nr([u,E.pathnameBase]))}return d}function wh(n,t){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[i,a]=AT(n.path,n.caseSensitive,n.end),o=t.match(i);if(!o)return null;let u=o[0],d=u.replace(/(.)\/+$/,"$1"),m=o.slice(1);return{params:a.reduce((g,{paramName:v,isOptional:E},S)=>{if(v==="*"){let M=m[S]||"";d=u.slice(0,u.length-M.length).replace(/(.)\/+$/,"$1")}const R=m[S];return E&&!R?g[v]=void 0:g[v]=(R||"").replace(/%2F/g,"/"),g},{}),pathname:u,pathnameBase:d,pattern:n}}function AT(n,t=!1,i=!0){ri(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let a=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,m,p)=>(a.push({paramName:m,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(a.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),a]}function RT(n){try{return n.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ri(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),n}}function rr(n,t){if(t==="/")return n;if(!n.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,a=n.charAt(i);return a&&a!=="/"?null:n.slice(i)||"/"}function IT(n,t="/"){let{pathname:i,search:a="",hash:o=""}=typeof n=="string"?xo(n):n;return{pathname:i?i.startsWith("/")?i:CT(i,t):t,search:NT(a),hash:MT(o)}}function CT(n,t){let i=t.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?i.length>1&&i.pop():o!=="."&&i.push(o)}),i.length>1?i.join("/"):"/"}function fp(n,t,i,a){return`Cannot include a '${n}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function jT(n){return n.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function Bm(n){let t=jT(n);return t.map((i,a)=>a===t.length-1?i.pathname:i.pathnameBase)}function Fm(n,t,i,a=!1){let o;typeof n=="string"?o=xo(n):(o={...n},de(!o.pathname||!o.pathname.includes("?"),fp("?","pathname","search",o)),de(!o.pathname||!o.pathname.includes("#"),fp("#","pathname","hash",o)),de(!o.search||!o.search.includes("#"),fp("#","search","hash",o)));let u=n===""||o.pathname==="",d=u?"/":o.pathname,m;if(d==null)m=i;else{let E=t.length-1;if(!a&&d.startsWith("..")){let S=d.split("/");for(;S[0]==="..";)S.shift(),E-=1;o.pathname=S.join("/")}m=E>=0?t[E]:"/"}let p=IT(o,m),g=d&&d!=="/"&&d.endsWith("/"),v=(u||d===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(g||v)&&(p.pathname+="/"),p}var nr=n=>n.join("/").replace(/\/\/+/g,"/"),DT=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),NT=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,MT=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function OT(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var F_=["POST","PUT","PATCH","DELETE"];new Set(F_);var VT=["GET",...F_];new Set(VT);var vo=B.createContext(null);vo.displayName="DataRouter";var zh=B.createContext(null);zh.displayName="DataRouterState";B.createContext(!1);var K_=B.createContext({isTransitioning:!1});K_.displayName="ViewTransition";var kT=B.createContext(new Map);kT.displayName="Fetchers";var PT=B.createContext(null);PT.displayName="Await";var si=B.createContext(null);si.displayName="Navigation";var fu=B.createContext(null);fu.displayName="Location";var qn=B.createContext({outlet:null,matches:[],isDataRoute:!1});qn.displayName="Route";var Km=B.createContext(null);Km.displayName="RouteError";function UT(n,{relative:t}={}){de(_o(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:a}=B.useContext(si),{hash:o,pathname:u,search:d}=pu(n,{relative:t}),m=u;return i!=="/"&&(m=u==="/"?i:nr([i,u])),a.createHref({pathname:m,search:d,hash:o})}function _o(){return B.useContext(fu)!=null}function ji(){return de(_o(),"useLocation() may be used only in the context of a <Router> component."),B.useContext(fu).location}var q_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function H_(n){B.useContext(si).static||B.useLayoutEffect(n)}function $h(){let{isDataRoute:n}=B.useContext(qn);return n?tS():LT()}function LT(){de(_o(),"useNavigate() may be used only in the context of a <Router> component.");let n=B.useContext(vo),{basename:t,navigator:i}=B.useContext(si),{matches:a}=B.useContext(qn),{pathname:o}=ji(),u=JSON.stringify(Bm(a)),d=B.useRef(!1);return H_(()=>{d.current=!0}),B.useCallback((p,g={})=>{if(ri(d.current,q_),!d.current)return;if(typeof p=="number"){i.go(p);return}let v=Fm(p,JSON.parse(u),o,g.relative==="path");n==null&&t!=="/"&&(v.pathname=v.pathname==="/"?t:nr([t,v.pathname])),(g.replace?i.replace:i.push)(v,g.state,g)},[t,i,u,o,n])}var zT=B.createContext(null);function $T(n){let t=B.useContext(qn).outlet;return t&&B.createElement(zT.Provider,{value:n},t)}function BT(){let{matches:n}=B.useContext(qn),t=n[n.length-1];return t?t.params:{}}function pu(n,{relative:t}={}){let{matches:i}=B.useContext(qn),{pathname:a}=ji(),o=JSON.stringify(Bm(i));return B.useMemo(()=>Fm(n,JSON.parse(o),a,t==="path"),[n,o,a,t])}function FT(n,t){return G_(n,t)}function G_(n,t,i,a,o){de(_o(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=B.useContext(si),{matches:d}=B.useContext(qn),m=d[d.length-1],p=m?m.params:{},g=m?m.pathname:"/",v=m?m.pathnameBase:"/",E=m&&m.route;{let X=E&&E.path||"";Y_(g,!E||X.endsWith("*")||X.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${X}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${X}"> to <Route path="${X==="/"?"*":`${X}/*`}">.`)}let S=ji(),R;if(t){let X=typeof t=="string"?xo(t):t;de(v==="/"||X.pathname?.startsWith(v),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${X.pathname}" was given in the \`location\` prop.`),R=X}else R=S;let M=R.pathname||"/",L=M;if(v!=="/"){let X=v.replace(/^\//,"").split("/");L="/"+M.replace(/^\//,"").split("/").slice(X.length).join("/")}let U=z_(n,{pathname:L});ri(E||U!=null,`No routes matched location "${R.pathname}${R.search}${R.hash}" `),ri(U==null||U[U.length-1].route.element!==void 0||U[U.length-1].route.Component!==void 0||U[U.length-1].route.lazy!==void 0,`Matched leaf route at location "${R.pathname}${R.search}${R.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let q=YT(U&&U.map(X=>Object.assign({},X,{params:Object.assign({},p,X.params),pathname:nr([v,u.encodeLocation?u.encodeLocation(X.pathname).pathname:X.pathname]),pathnameBase:X.pathnameBase==="/"?v:nr([v,u.encodeLocation?u.encodeLocation(X.pathnameBase).pathname:X.pathnameBase])})),d,i,a,o);return t&&q?B.createElement(fu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...R},navigationType:"POP"}},q):q}function KT(){let n=JT(),t=OT(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),i=n instanceof Error?n.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},u={padding:"2px 4px",backgroundColor:a},d=null;return console.error("Error handled by React Router default ErrorBoundary:",n),d=B.createElement(B.Fragment,null,B.createElement("p",null,"💿 Hey developer 👋"),B.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",B.createElement("code",{style:u},"ErrorBoundary")," or"," ",B.createElement("code",{style:u},"errorElement")," prop on your route.")),B.createElement(B.Fragment,null,B.createElement("h2",null,"Unexpected Application Error!"),B.createElement("h3",{style:{fontStyle:"italic"}},t),i?B.createElement("pre",{style:o},i):null,d)}var qT=B.createElement(KT,null),HT=class extends B.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){this.props.unstable_onError?this.props.unstable_onError(n,t):console.error("React Router caught the following error during render",n)}render(){return this.state.error!==void 0?B.createElement(qn.Provider,{value:this.props.routeContext},B.createElement(Km.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function GT({routeContext:n,match:t,children:i}){let a=B.useContext(vo);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),B.createElement(qn.Provider,{value:n},i)}function YT(n,t=[],i=null,a=null,o=null){if(n==null){if(!i)return null;if(i.errors)n=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)n=i.matches;else return null}let u=n,d=i?.errors;if(d!=null){let g=u.findIndex(v=>v.route.id&&d?.[v.route.id]!==void 0);de(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),u=u.slice(0,Math.min(u.length,g+1))}let m=!1,p=-1;if(i)for(let g=0;g<u.length;g++){let v=u[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(p=g),v.route.id){let{loaderData:E,errors:S}=i,R=v.route.loader&&!E.hasOwnProperty(v.route.id)&&(!S||S[v.route.id]===void 0);if(v.route.lazy||R){m=!0,p>=0?u=u.slice(0,p+1):u=[u[0]];break}}}return u.reduceRight((g,v,E)=>{let S,R=!1,M=null,L=null;i&&(S=d&&v.route.id?d[v.route.id]:void 0,M=v.route.errorElement||qT,m&&(p<0&&E===0?(Y_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),R=!0,L=null):p===E&&(R=!0,L=v.route.hydrateFallbackElement||null)));let U=t.concat(u.slice(0,E+1)),q=()=>{let X;return S?X=M:R?X=L:v.route.Component?X=B.createElement(v.route.Component,null):v.route.element?X=v.route.element:X=g,B.createElement(GT,{match:v,routeContext:{outlet:g,matches:U,isDataRoute:i!=null},children:X})};return i&&(v.route.ErrorBoundary||v.route.errorElement||E===0)?B.createElement(HT,{location:i.location,revalidation:i.revalidation,component:M,error:S,children:q(),routeContext:{outlet:null,matches:U,isDataRoute:!0},unstable_onError:a}):q()},null)}function qm(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function QT(n){let t=B.useContext(vo);return de(t,qm(n)),t}function XT(n){let t=B.useContext(zh);return de(t,qm(n)),t}function WT(n){let t=B.useContext(qn);return de(t,qm(n)),t}function Hm(n){let t=WT(n),i=t.matches[t.matches.length-1];return de(i.route.id,`${n} can only be used on routes that contain a unique "id"`),i.route.id}function ZT(){return Hm("useRouteId")}function JT(){let n=B.useContext(Km),t=XT("useRouteError"),i=Hm("useRouteError");return n!==void 0?n:t.errors?.[i]}function tS(){let{router:n}=QT("useNavigate"),t=Hm("useNavigate"),i=B.useRef(!1);return H_(()=>{i.current=!0}),B.useCallback(async(o,u={})=>{ri(i.current,q_),i.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:t,...u}))},[n,t])}var xx={};function Y_(n,t,i){!t&&!xx[n]&&(xx[n]=!0,ri(!1,i))}B.memo(eS);function eS({routes:n,future:t,state:i,unstable_onError:a}){return G_(n,void 0,i,a,t)}function nS({to:n,replace:t,state:i,relative:a}){de(_o(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=B.useContext(si);ri(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=B.useContext(qn),{pathname:d}=ji(),m=$h(),p=Fm(n,Bm(u),d,a==="path"),g=JSON.stringify(p);return B.useEffect(()=>{m(JSON.parse(g),{replace:t,state:i,relative:a})},[m,g,a,t,i]),null}function iS(n){return $T(n.context)}function wi(n){de(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function rS({basename:n="/",children:t=null,location:i,navigationType:a="POP",navigator:o,static:u=!1}){de(!_o(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=n.replace(/^\/*/,"/"),m=B.useMemo(()=>({basename:d,navigator:o,static:u,future:{}}),[d,o,u]);typeof i=="string"&&(i=xo(i));let{pathname:p="/",search:g="",hash:v="",state:E=null,key:S="default"}=i,R=B.useMemo(()=>{let M=rr(p,d);return M==null?null:{location:{pathname:M,search:g,hash:v,state:E,key:S},navigationType:a}},[d,p,g,v,E,S,a]);return ri(R!=null,`<Router basename="${d}"> is not able to match the URL "${p}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),R==null?null:B.createElement(si.Provider,{value:m},B.createElement(fu.Provider,{children:t,value:R}))}function aS({children:n,location:t}){return FT(nm(n),t)}function nm(n,t=[]){let i=[];return B.Children.forEach(n,(a,o)=>{if(!B.isValidElement(a))return;let u=[...t,o];if(a.type===B.Fragment){i.push.apply(i,nm(a.props.children,u));return}de(a.type===wi,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),de(!a.props.index||!a.props.children,"An index route cannot have child routes.");let d={id:a.props.id||u.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(d.children=nm(a.props.children,u)),i.push(d)}),i}var ih="get",rh="application/x-www-form-urlencoded";function Bh(n){return n!=null&&typeof n.tagName=="string"}function sS(n){return Bh(n)&&n.tagName.toLowerCase()==="button"}function oS(n){return Bh(n)&&n.tagName.toLowerCase()==="form"}function lS(n){return Bh(n)&&n.tagName.toLowerCase()==="input"}function uS(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function cS(n,t){return n.button===0&&(!t||t==="_self")&&!uS(n)}var Kc=null;function hS(){if(Kc===null)try{new FormData(document.createElement("form"),0),Kc=!1}catch{Kc=!0}return Kc}var dS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function pp(n){return n!=null&&!dS.has(n)?(ri(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${rh}"`),null):n}function fS(n,t){let i,a,o,u,d;if(oS(n)){let m=n.getAttribute("action");a=m?rr(m,t):null,i=n.getAttribute("method")||ih,o=pp(n.getAttribute("enctype"))||rh,u=new FormData(n)}else if(sS(n)||lS(n)&&(n.type==="submit"||n.type==="image")){let m=n.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||m.getAttribute("action");if(a=p?rr(p,t):null,i=n.getAttribute("formmethod")||m.getAttribute("method")||ih,o=pp(n.getAttribute("formenctype"))||pp(m.getAttribute("enctype"))||rh,u=new FormData(m,n),!hS()){let{name:g,type:v,value:E}=n;if(v==="image"){let S=g?`${g}.`:"";u.append(`${S}x`,"0"),u.append(`${S}y`,"0")}else g&&u.append(g,E)}}else{if(Bh(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=ih,a=null,o=rh,d=n}return u&&o==="text/plain"&&(d=u,u=void 0),{action:a,method:i.toLowerCase(),encType:o,formData:u,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Gm(n,t){if(n===!1||n===null||typeof n>"u")throw new Error(t)}function pS(n,t,i){let a=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return a.pathname==="/"?a.pathname=`_root.${i}`:t&&rr(a.pathname,t)==="/"?a.pathname=`${t.replace(/\/$/,"")}/_root.${i}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${i}`,a}async function mS(n,t){if(n.id in t)return t[n.id];try{let i=await import(n.module);return t[n.id]=i,i}catch(i){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function gS(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function yS(n,t,i){let a=await Promise.all(n.map(async o=>{let u=t.routes[o.route.id];if(u){let d=await mS(u,i);return d.links?d.links():[]}return[]}));return wS(a.flat(1).filter(gS).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function vx(n,t,i,a,o,u){let d=(p,g)=>i[g]?p.route.id!==i[g].route.id:!0,m=(p,g)=>i[g].pathname!==p.pathname||i[g].route.path?.endsWith("*")&&i[g].params["*"]!==p.params["*"];return u==="assets"?t.filter((p,g)=>d(p,g)||m(p,g)):u==="data"?t.filter((p,g)=>{let v=a.routes[p.route.id];if(!v||!v.hasLoader)return!1;if(d(p,g)||m(p,g))return!0;if(p.route.shouldRevalidate){let E=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof E=="boolean")return E}return!0}):[]}function xS(n,t,{includeHydrateFallback:i}={}){return vS(n.map(a=>{let o=t.routes[a.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),i&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function vS(n){return[...new Set(n)]}function _S(n){let t={},i=Object.keys(n).sort();for(let a of i)t[a]=n[a];return t}function wS(n,t){let i=new Set;return new Set(t),n.reduce((a,o)=>{let u=JSON.stringify(_S(o));return i.has(u)||(i.add(u),a.push({key:u,link:o})),a},[])}function Q_(){let n=B.useContext(vo);return Gm(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function ES(){let n=B.useContext(zh);return Gm(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Ym=B.createContext(void 0);Ym.displayName="FrameworkContext";function X_(){let n=B.useContext(Ym);return Gm(n,"You must render this element inside a <HydratedRouter> element"),n}function bS(n,t){let i=B.useContext(Ym),[a,o]=B.useState(!1),[u,d]=B.useState(!1),{onFocus:m,onBlur:p,onMouseEnter:g,onMouseLeave:v,onTouchStart:E}=t,S=B.useRef(null);B.useEffect(()=>{if(n==="render"&&d(!0),n==="viewport"){let L=q=>{q.forEach(X=>{d(X.isIntersecting)})},U=new IntersectionObserver(L,{threshold:.5});return S.current&&U.observe(S.current),()=>{U.disconnect()}}},[n]),B.useEffect(()=>{if(a){let L=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(L)}}},[a]);let R=()=>{o(!0)},M=()=>{o(!1),d(!1)};return i?n!=="intent"?[u,S,{}]:[u,S,{onFocus:Ol(m,R),onBlur:Ol(p,M),onMouseEnter:Ol(g,R),onMouseLeave:Ol(v,M),onTouchStart:Ol(E,R)}]:[!1,S,{}]}function Ol(n,t){return i=>{n&&n(i),i.defaultPrevented||t(i)}}function TS({page:n,...t}){let{router:i}=Q_(),a=B.useMemo(()=>z_(i.routes,n,i.basename),[i.routes,n,i.basename]);return a?B.createElement(AS,{page:n,matches:a,...t}):null}function SS(n){let{manifest:t,routeModules:i}=X_(),[a,o]=B.useState([]);return B.useEffect(()=>{let u=!1;return yS(n,t,i).then(d=>{u||o(d)}),()=>{u=!0}},[n,t,i]),a}function AS({page:n,matches:t,...i}){let a=ji(),{manifest:o,routeModules:u}=X_(),{basename:d}=Q_(),{loaderData:m,matches:p}=ES(),g=B.useMemo(()=>vx(n,t,p,o,a,"data"),[n,t,p,o,a]),v=B.useMemo(()=>vx(n,t,p,o,a,"assets"),[n,t,p,o,a]),E=B.useMemo(()=>{if(n===a.pathname+a.search+a.hash)return[];let M=new Set,L=!1;if(t.forEach(q=>{let X=o.routes[q.route.id];!X||!X.hasLoader||(!g.some(tt=>tt.route.id===q.route.id)&&q.route.id in m&&u[q.route.id]?.shouldRevalidate||X.hasClientLoader?L=!0:M.add(q.route.id))}),M.size===0)return[];let U=pS(n,d,"data");return L&&M.size>0&&U.searchParams.set("_routes",t.filter(q=>M.has(q.route.id)).map(q=>q.route.id).join(",")),[U.pathname+U.search]},[d,m,a,o,g,t,n,u]),S=B.useMemo(()=>xS(v,o),[v,o]),R=SS(v);return B.createElement(B.Fragment,null,E.map(M=>B.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...i})),S.map(M=>B.createElement("link",{key:M,rel:"modulepreload",href:M,...i})),R.map(({key:M,link:L})=>B.createElement("link",{key:M,nonce:i.nonce,...L})))}function RS(...n){return t=>{n.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var W_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{W_&&(window.__reactRouterVersion="7.9.1")}catch{}function IS({basename:n,children:t,window:i}){let a=B.useRef();a.current==null&&(a.current=hT({window:i,v5Compat:!0}));let o=a.current,[u,d]=B.useState({action:o.action,location:o.location}),m=B.useCallback(p=>{B.startTransition(()=>d(p))},[d]);return B.useLayoutEffect(()=>o.listen(m),[o,m]),B.createElement(rS,{basename:n,children:t,location:u.location,navigationType:u.action,navigator:o})}var Z_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ts=B.forwardRef(function({onClick:t,discover:i="render",prefetch:a="none",relative:o,reloadDocument:u,replace:d,state:m,target:p,to:g,preventScrollReset:v,viewTransition:E,...S},R){let{basename:M}=B.useContext(si),L=typeof g=="string"&&Z_.test(g),U,q=!1;if(typeof g=="string"&&L&&(U=g,W_))try{let j=new URL(window.location.href),O=g.startsWith("//")?new URL(j.protocol+g):new URL(g),k=rr(O.pathname,M);O.origin===j.origin&&k!=null?g=k+O.search+O.hash:q=!0}catch{ri(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let X=UT(g,{relative:o}),[tt,lt,Y]=bS(a,S),ot=NS(g,{replace:d,state:m,target:p,preventScrollReset:v,relative:o,viewTransition:E});function C(j){t&&t(j),j.defaultPrevented||ot(j)}let I=B.createElement("a",{...S,...Y,href:U||X,onClick:q||u?t:C,ref:RS(R,lt),target:p,"data-discover":!L&&i==="render"?"true":void 0});return tt&&!L?B.createElement(B.Fragment,null,I,B.createElement(TS,{page:X})):I});ts.displayName="Link";var CS=B.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:a="",end:o=!1,style:u,to:d,viewTransition:m,children:p,...g},v){let E=pu(d,{relative:g.relative}),S=ji(),R=B.useContext(zh),{navigator:M,basename:L}=B.useContext(si),U=R!=null&&PS(E)&&m===!0,q=M.encodeLocation?M.encodeLocation(E).pathname:E.pathname,X=S.pathname,tt=R&&R.navigation&&R.navigation.location?R.navigation.location.pathname:null;i||(X=X.toLowerCase(),tt=tt?tt.toLowerCase():null,q=q.toLowerCase()),tt&&L&&(tt=rr(tt,L)||tt);const lt=q!=="/"&&q.endsWith("/")?q.length-1:q.length;let Y=X===q||!o&&X.startsWith(q)&&X.charAt(lt)==="/",ot=tt!=null&&(tt===q||!o&&tt.startsWith(q)&&tt.charAt(q.length)==="/"),C={isActive:Y,isPending:ot,isTransitioning:U},I=Y?t:void 0,j;typeof a=="function"?j=a(C):j=[a,Y?"active":null,ot?"pending":null,U?"transitioning":null].filter(Boolean).join(" ");let O=typeof u=="function"?u(C):u;return B.createElement(ts,{...g,"aria-current":I,className:j,ref:v,style:O,to:d,viewTransition:m},typeof p=="function"?p(C):p)});CS.displayName="NavLink";var jS=B.forwardRef(({discover:n="render",fetcherKey:t,navigate:i,reloadDocument:a,replace:o,state:u,method:d=ih,action:m,onSubmit:p,relative:g,preventScrollReset:v,viewTransition:E,...S},R)=>{let M=VS(),L=kS(m,{relative:g}),U=d.toLowerCase()==="get"?"get":"post",q=typeof m=="string"&&Z_.test(m),X=tt=>{if(p&&p(tt),tt.defaultPrevented)return;tt.preventDefault();let lt=tt.nativeEvent.submitter,Y=lt?.getAttribute("formmethod")||d;M(lt||tt.currentTarget,{fetcherKey:t,method:Y,navigate:i,replace:o,state:u,relative:g,preventScrollReset:v,viewTransition:E})};return B.createElement("form",{ref:R,method:U,action:L,onSubmit:a?p:X,...S,"data-discover":!q&&n==="render"?"true":void 0})});jS.displayName="Form";function DS(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function J_(n){let t=B.useContext(vo);return de(t,DS(n)),t}function NS(n,{target:t,replace:i,state:a,preventScrollReset:o,relative:u,viewTransition:d}={}){let m=$h(),p=ji(),g=pu(n,{relative:u});return B.useCallback(v=>{if(cS(v,t)){v.preventDefault();let E=i!==void 0?i:Zl(p)===Zl(g);m(n,{replace:E,state:a,preventScrollReset:o,relative:u,viewTransition:d})}},[p,m,g,i,a,t,n,o,u,d])}var MS=0,OS=()=>`__${String(++MS)}__`;function VS(){let{router:n}=J_("useSubmit"),{basename:t}=B.useContext(si),i=ZT();return B.useCallback(async(a,o={})=>{let{action:u,method:d,encType:m,formData:p,body:g}=fS(a,t);if(o.navigate===!1){let v=o.fetcherKey||OS();await n.fetch(v,i,o.action||u,{preventScrollReset:o.preventScrollReset,formData:p,body:g,formMethod:o.method||d,formEncType:o.encType||m,flushSync:o.flushSync})}else await n.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:p,body:g,formMethod:o.method||d,formEncType:o.encType||m,replace:o.replace,state:o.state,fromRouteId:i,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,t,i])}function kS(n,{relative:t}={}){let{basename:i}=B.useContext(si),a=B.useContext(qn);de(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),u={...pu(n||".",{relative:t})},d=ji();if(n==null){u.search=d.search;let m=new URLSearchParams(u.search),p=m.getAll("index");if(p.some(v=>v==="")){m.delete("index"),p.filter(E=>E).forEach(E=>m.append("index",E));let v=m.toString();u.search=v?`?${v}`:""}}return(!n||n===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:nr([i,u.pathname])),Zl(u)}function PS(n,{relative:t}={}){let i=B.useContext(K_);de(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=J_("useViewTransitionState"),o=pu(n,{relative:t});if(!i.isTransitioning)return!1;let u=rr(i.currentLocation.pathname,a)||i.currentLocation.pathname,d=rr(i.nextLocation.pathname,a)||i.nextLocation.pathname;return wh(o.pathname,d)!=null||wh(o.pathname,u)!=null}var mp={exports:{}},rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _x;function US(){if(_x)return rn;_x=1;var n=$m();function t(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,g,v){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:E==null?null:""+E,children:p,containerInfo:g,implementation:v}}var d=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,rn.createPortal=function(p,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return u(p,g,null,v)},rn.flushSync=function(p){var g=d.T,v=a.p;try{if(d.T=null,a.p=2,p)return p()}finally{d.T=g,a.p=v,a.d.f()}},rn.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,a.d.C(p,g))},rn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},rn.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var v=g.as,E=m(v,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,R=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?a.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:E,integrity:S,fetchPriority:R}):v==="script"&&a.d.X(p,{crossOrigin:E,integrity:S,fetchPriority:R,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},rn.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=m(g.as,g.crossOrigin);a.d.M(p,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&a.d.M(p)},rn.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,E=m(v,g.crossOrigin);a.d.L(p,v,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},rn.preloadModule=function(p,g){if(typeof p=="string")if(g){var v=m(g.as,g.crossOrigin);a.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else a.d.m(p)},rn.requestFormReset=function(p){a.d.r(p)},rn.unstable_batchedUpdates=function(p,g){return p(g)},rn.useFormState=function(p,g,v){return d.H.useFormState(p,g,v)},rn.useFormStatus=function(){return d.H.useHostTransitionStatus()},rn.version="19.1.1",rn}var wx;function LS(){if(wx)return mp.exports;wx=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}return n(),mp.exports=US(),mp.exports}var gp={exports:{}},yp,Ex;function zS(){if(Ex)return yp;Ex=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return yp=n,yp}var xp,bx;function $S(){if(bx)return xp;bx=1;var n=zS();function t(){}function i(){}return i.resetWarningCache=t,xp=function(){function a(d,m,p,g,v,E){if(E!==n){var S=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw S.name="Invariant Violation",S}}a.isRequired=a;function o(){return a}var u={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:o,element:a,elementType:a,instanceOf:o,node:a,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:i,resetWarningCache:t};return u.PropTypes=u,u},xp}var Tx;function BS(){return Tx||(Tx=1,gp.exports=$S()()),gp.exports}var FS=BS();const Z=L_(FS);var _n=function(){return _n=Object.assign||function(t){for(var i,a=1,o=arguments.length;a<o;a++){i=arguments[a];for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&(t[u]=i[u])}return t},_n.apply(this,arguments)};function Jl(n,t,i){if(i||arguments.length===2)for(var a=0,o=t.length,u;a<o;a++)(u||!(a in t))&&(u||(u=Array.prototype.slice.call(t,0,a)),u[a]=t[a]);return n.concat(u||Array.prototype.slice.call(t))}var le="-ms-",Fl="-moz-",Gt="-webkit-",t2="comm",Fh="rule",Qm="decl",KS="@import",e2="@keyframes",qS="@layer",n2=Math.abs,Xm=String.fromCharCode,im=Object.assign;function HS(n,t){return He(n,0)^45?(((t<<2^He(n,0))<<2^He(n,1))<<2^He(n,2))<<2^He(n,3):0}function i2(n){return n.trim()}function er(n,t){return(n=t.exec(n))?n[0]:n}function Nt(n,t,i){return n.replace(t,i)}function ah(n,t,i){return n.indexOf(t,i)}function He(n,t){return n.charCodeAt(t)|0}function ao(n,t,i){return n.slice(t,i)}function bi(n){return n.length}function r2(n){return n.length}function Ul(n,t){return t.push(n),n}function GS(n,t){return n.map(t).join("")}function Sx(n,t){return n.filter(function(i){return!er(i,t)})}var Kh=1,so=1,a2=0,Kn=0,je=0,wo="";function qh(n,t,i,a,o,u,d,m){return{value:n,root:t,parent:i,type:a,props:o,children:u,line:Kh,column:so,length:d,return:"",siblings:m}}function Yr(n,t){return im(qh("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},t)}function Gs(n){for(;n.root;)n=Yr(n.root,{children:[n]});Ul(n,n.siblings)}function YS(){return je}function QS(){return je=Kn>0?He(wo,--Kn):0,so--,je===10&&(so=1,Kh--),je}function ii(){return je=Kn<a2?He(wo,Kn++):0,so++,je===10&&(so=1,Kh++),je}function Ya(){return He(wo,Kn)}function sh(){return Kn}function Hh(n,t){return ao(wo,n,t)}function rm(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function XS(n){return Kh=so=1,a2=bi(wo=n),Kn=0,[]}function WS(n){return wo="",n}function vp(n){return i2(Hh(Kn-1,am(n===91?n+2:n===40?n+1:n)))}function ZS(n){for(;(je=Ya())&&je<33;)ii();return rm(n)>2||rm(je)>3?"":" "}function JS(n,t){for(;--t&&ii()&&!(je<48||je>102||je>57&&je<65||je>70&&je<97););return Hh(n,sh()+(t<6&&Ya()==32&&ii()==32))}function am(n){for(;ii();)switch(je){case n:return Kn;case 34:case 39:n!==34&&n!==39&&am(je);break;case 40:n===41&&am(n);break;case 92:ii();break}return Kn}function tA(n,t){for(;ii()&&n+je!==57;)if(n+je===84&&Ya()===47)break;return"/*"+Hh(t,Kn-1)+"*"+Xm(n===47?n:ii())}function eA(n){for(;!rm(Ya());)ii();return Hh(n,Kn)}function nA(n){return WS(oh("",null,null,null,[""],n=XS(n),0,[0],n))}function oh(n,t,i,a,o,u,d,m,p){for(var g=0,v=0,E=d,S=0,R=0,M=0,L=1,U=1,q=1,X=0,tt="",lt=o,Y=u,ot=a,C=tt;U;)switch(M=X,X=ii()){case 40:if(M!=108&&He(C,E-1)==58){ah(C+=Nt(vp(X),"&","&\f"),"&\f",n2(g?m[g-1]:0))!=-1&&(q=-1);break}case 34:case 39:case 91:C+=vp(X);break;case 9:case 10:case 13:case 32:C+=ZS(M);break;case 92:C+=JS(sh()-1,7);continue;case 47:switch(Ya()){case 42:case 47:Ul(iA(tA(ii(),sh()),t,i,p),p);break;default:C+="/"}break;case 123*L:m[g++]=bi(C)*q;case 125*L:case 59:case 0:switch(X){case 0:case 125:U=0;case 59+v:q==-1&&(C=Nt(C,/\f/g,"")),R>0&&bi(C)-E&&Ul(R>32?Rx(C+";",a,i,E-1,p):Rx(Nt(C," ","")+";",a,i,E-2,p),p);break;case 59:C+=";";default:if(Ul(ot=Ax(C,t,i,g,v,o,m,tt,lt=[],Y=[],E,u),u),X===123)if(v===0)oh(C,t,ot,ot,lt,u,E,m,Y);else switch(S===99&&He(C,3)===110?100:S){case 100:case 108:case 109:case 115:oh(n,ot,ot,a&&Ul(Ax(n,ot,ot,0,0,o,m,tt,o,lt=[],E,Y),Y),o,Y,E,m,a?lt:Y);break;default:oh(C,ot,ot,ot,[""],Y,0,m,Y)}}g=v=R=0,L=q=1,tt=C="",E=d;break;case 58:E=1+bi(C),R=M;default:if(L<1){if(X==123)--L;else if(X==125&&L++==0&&QS()==125)continue}switch(C+=Xm(X),X*L){case 38:q=v>0?1:(C+="\f",-1);break;case 44:m[g++]=(bi(C)-1)*q,q=1;break;case 64:Ya()===45&&(C+=vp(ii())),S=Ya(),v=E=bi(tt=C+=eA(sh())),X++;break;case 45:M===45&&bi(C)==2&&(L=0)}}return u}function Ax(n,t,i,a,o,u,d,m,p,g,v,E){for(var S=o-1,R=o===0?u:[""],M=r2(R),L=0,U=0,q=0;L<a;++L)for(var X=0,tt=ao(n,S+1,S=n2(U=d[L])),lt=n;X<M;++X)(lt=i2(U>0?R[X]+" "+tt:Nt(tt,/&\f/g,R[X])))&&(p[q++]=lt);return qh(n,t,i,o===0?Fh:m,p,g,v,E)}function iA(n,t,i,a){return qh(n,t,i,t2,Xm(YS()),ao(n,2,-2),0,a)}function Rx(n,t,i,a,o){return qh(n,t,i,Qm,ao(n,0,a),ao(n,a+1,-1),a,o)}function s2(n,t,i){switch(HS(n,t)){case 5103:return Gt+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Gt+n+n;case 4789:return Fl+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Gt+n+Fl+n+le+n+n;case 5936:switch(He(n,t+11)){case 114:return Gt+n+le+Nt(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Gt+n+le+Nt(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Gt+n+le+Nt(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Gt+n+le+n+n;case 6165:return Gt+n+le+"flex-"+n+n;case 5187:return Gt+n+Nt(n,/(\w+).+(:[^]+)/,Gt+"box-$1$2"+le+"flex-$1$2")+n;case 5443:return Gt+n+le+"flex-item-"+Nt(n,/flex-|-self/g,"")+(er(n,/flex-|baseline/)?"":le+"grid-row-"+Nt(n,/flex-|-self/g,""))+n;case 4675:return Gt+n+le+"flex-line-pack"+Nt(n,/align-content|flex-|-self/g,"")+n;case 5548:return Gt+n+le+Nt(n,"shrink","negative")+n;case 5292:return Gt+n+le+Nt(n,"basis","preferred-size")+n;case 6060:return Gt+"box-"+Nt(n,"-grow","")+Gt+n+le+Nt(n,"grow","positive")+n;case 4554:return Gt+Nt(n,/([^-])(transform)/g,"$1"+Gt+"$2")+n;case 6187:return Nt(Nt(Nt(n,/(zoom-|grab)/,Gt+"$1"),/(image-set)/,Gt+"$1"),n,"")+n;case 5495:case 3959:return Nt(n,/(image-set\([^]*)/,Gt+"$1$`$1");case 4968:return Nt(Nt(n,/(.+:)(flex-)?(.*)/,Gt+"box-pack:$3"+le+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Gt+n+n;case 4200:if(!er(n,/flex-|baseline/))return le+"grid-column-align"+ao(n,t)+n;break;case 2592:case 3360:return le+Nt(n,"template-","")+n;case 4384:case 3616:return i&&i.some(function(a,o){return t=o,er(a.props,/grid-\w+-end/)})?~ah(n+(i=i[t].value),"span",0)?n:le+Nt(n,"-start","")+n+le+"grid-row-span:"+(~ah(i,"span",0)?er(i,/\d+/):+er(i,/\d+/)-+er(n,/\d+/))+";":le+Nt(n,"-start","")+n;case 4896:case 4128:return i&&i.some(function(a){return er(a.props,/grid-\w+-start/)})?n:le+Nt(Nt(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Nt(n,/(.+)-inline(.+)/,Gt+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(bi(n)-1-t>6)switch(He(n,t+1)){case 109:if(He(n,t+4)!==45)break;case 102:return Nt(n,/(.+:)(.+)-([^]+)/,"$1"+Gt+"$2-$3$1"+Fl+(He(n,t+3)==108?"$3":"$2-$3"))+n;case 115:return~ah(n,"stretch",0)?s2(Nt(n,"stretch","fill-available"),t,i)+n:n}break;case 5152:case 5920:return Nt(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,o,u,d,m,p,g){return le+o+":"+u+g+(d?le+o+"-span:"+(m?p:+p-+u)+g:"")+n});case 4949:if(He(n,t+6)===121)return Nt(n,":",":"+Gt)+n;break;case 6444:switch(He(n,He(n,14)===45?18:11)){case 120:return Nt(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Gt+(He(n,14)===45?"inline-":"")+"box$3$1"+Gt+"$2$3$1"+le+"$2box$3")+n;case 100:return Nt(n,":",":"+le)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Nt(n,"scroll-","scroll-snap-")+n}return n}function Eh(n,t){for(var i="",a=0;a<n.length;a++)i+=t(n[a],a,n,t)||"";return i}function rA(n,t,i,a){switch(n.type){case qS:if(n.children.length)break;case KS:case Qm:return n.return=n.return||n.value;case t2:return"";case e2:return n.return=n.value+"{"+Eh(n.children,a)+"}";case Fh:if(!bi(n.value=n.props.join(",")))return""}return bi(i=Eh(n.children,a))?n.return=n.value+"{"+i+"}":""}function aA(n){var t=r2(n);return function(i,a,o,u){for(var d="",m=0;m<t;m++)d+=n[m](i,a,o,u)||"";return d}}function sA(n){return function(t){t.root||(t=t.return)&&n(t)}}function oA(n,t,i,a){if(n.length>-1&&!n.return)switch(n.type){case Qm:n.return=s2(n.value,n.length,i);return;case e2:return Eh([Yr(n,{value:Nt(n.value,"@","@"+Gt)})],a);case Fh:if(n.length)return GS(i=n.props,function(o){switch(er(o,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Gs(Yr(n,{props:[Nt(o,/:(read-\w+)/,":"+Fl+"$1")]})),Gs(Yr(n,{props:[o]})),im(n,{props:Sx(i,a)});break;case"::placeholder":Gs(Yr(n,{props:[Nt(o,/:(plac\w+)/,":"+Gt+"input-$1")]})),Gs(Yr(n,{props:[Nt(o,/:(plac\w+)/,":"+Fl+"$1")]})),Gs(Yr(n,{props:[Nt(o,/:(plac\w+)/,le+"input-$1")]})),Gs(Yr(n,{props:[o]})),im(n,{props:Sx(i,a)});break}return""})}}var lA={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Cn={},oo=typeof process<"u"&&Cn!==void 0&&(Cn.REACT_APP_SC_ATTR||Cn.SC_ATTR)||"data-styled",o2="active",l2="data-styled-version",Gh="6.1.19",Wm=`/*!sc*/
`,bh=typeof window<"u"&&typeof document<"u",uA=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Cn!==void 0&&Cn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Cn.REACT_APP_SC_DISABLE_SPEEDY!==""?Cn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Cn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Cn!==void 0&&Cn.SC_DISABLE_SPEEDY!==void 0&&Cn.SC_DISABLE_SPEEDY!==""&&Cn.SC_DISABLE_SPEEDY!=="false"&&Cn.SC_DISABLE_SPEEDY),Yh=Object.freeze([]),lo=Object.freeze({});function cA(n,t,i){return i===void 0&&(i=lo),n.theme!==i.theme&&n.theme||t||i.theme}var u2=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),hA=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,dA=/(^-|-$)/g;function Ix(n){return n.replace(hA,"-").replace(dA,"")}var fA=/(a)(d)/gi,qc=52,Cx=function(n){return String.fromCharCode(n+(n>25?39:97))};function sm(n){var t,i="";for(t=Math.abs(n);t>qc;t=t/qc|0)i=Cx(t%qc)+i;return(Cx(t%qc)+i).replace(fA,"$1-$2")}var _p,c2=5381,to=function(n,t){for(var i=t.length;i;)n=33*n^t.charCodeAt(--i);return n},h2=function(n){return to(c2,n)};function d2(n){return sm(h2(n)>>>0)}function pA(n){return n.displayName||n.name||"Component"}function wp(n){return typeof n=="string"&&!0}var f2=typeof Symbol=="function"&&Symbol.for,p2=f2?Symbol.for("react.memo"):60115,mA=f2?Symbol.for("react.forward_ref"):60112,gA={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},yA={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},m2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},xA=((_p={})[mA]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},_p[p2]=m2,_p);function jx(n){return("type"in(t=n)&&t.type.$$typeof)===p2?m2:"$$typeof"in n?xA[n.$$typeof]:gA;var t}var vA=Object.defineProperty,_A=Object.getOwnPropertyNames,Dx=Object.getOwnPropertySymbols,wA=Object.getOwnPropertyDescriptor,EA=Object.getPrototypeOf,Nx=Object.prototype;function g2(n,t,i){if(typeof t!="string"){if(Nx){var a=EA(t);a&&a!==Nx&&g2(n,a,i)}var o=_A(t);Dx&&(o=o.concat(Dx(t)));for(var u=jx(n),d=jx(t),m=0;m<o.length;++m){var p=o[m];if(!(p in yA||i&&i[p]||d&&p in d||u&&p in u)){var g=wA(t,p);try{vA(n,p,g)}catch{}}}}return n}function uo(n){return typeof n=="function"}function Zm(n){return typeof n=="object"&&"styledComponentId"in n}function Ha(n,t){return n&&t?"".concat(n," ").concat(t):n||t||""}function om(n,t){if(n.length===0)return"";for(var i=n[0],a=1;a<n.length;a++)i+=n[a];return i}function tu(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function lm(n,t,i){if(i===void 0&&(i=!1),!i&&!tu(n)&&!Array.isArray(n))return t;if(Array.isArray(t))for(var a=0;a<t.length;a++)n[a]=lm(n[a],t[a]);else if(tu(t))for(var a in t)n[a]=lm(n[a],t[a]);return n}function Jm(n,t){Object.defineProperty(n,"toString",{value:t})}function mu(n){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var bA=(function(){function n(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return n.prototype.indexOfGroup=function(t){for(var i=0,a=0;a<t;a++)i+=this.groupSizes[a];return i},n.prototype.insertRules=function(t,i){if(t>=this.groupSizes.length){for(var a=this.groupSizes,o=a.length,u=o;t>=u;)if((u<<=1)<0)throw mu(16,"".concat(t));this.groupSizes=new Uint32Array(u),this.groupSizes.set(a),this.length=u;for(var d=o;d<u;d++)this.groupSizes[d]=0}for(var m=this.indexOfGroup(t+1),p=(d=0,i.length);d<p;d++)this.tag.insertRule(m,i[d])&&(this.groupSizes[t]++,m++)},n.prototype.clearGroup=function(t){if(t<this.length){var i=this.groupSizes[t],a=this.indexOfGroup(t),o=a+i;this.groupSizes[t]=0;for(var u=a;u<o;u++)this.tag.deleteRule(a)}},n.prototype.getGroup=function(t){var i="";if(t>=this.length||this.groupSizes[t]===0)return i;for(var a=this.groupSizes[t],o=this.indexOfGroup(t),u=o+a,d=o;d<u;d++)i+="".concat(this.tag.getRule(d)).concat(Wm);return i},n})(),lh=new Map,Th=new Map,uh=1,Hc=function(n){if(lh.has(n))return lh.get(n);for(;Th.has(uh);)uh++;var t=uh++;return lh.set(n,t),Th.set(t,n),t},TA=function(n,t){uh=t+1,lh.set(n,t),Th.set(t,n)},SA="style[".concat(oo,"][").concat(l2,'="').concat(Gh,'"]'),AA=new RegExp("^".concat(oo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),RA=function(n,t,i){for(var a,o=i.split(","),u=0,d=o.length;u<d;u++)(a=o[u])&&n.registerName(t,a)},IA=function(n,t){for(var i,a=((i=t.textContent)!==null&&i!==void 0?i:"").split(Wm),o=[],u=0,d=a.length;u<d;u++){var m=a[u].trim();if(m){var p=m.match(AA);if(p){var g=0|parseInt(p[1],10),v=p[2];g!==0&&(TA(v,g),RA(n,v,p[3]),n.getTag().insertRules(g,o)),o.length=0}else o.push(m)}}},Mx=function(n){for(var t=document.querySelectorAll(SA),i=0,a=t.length;i<a;i++){var o=t[i];o&&o.getAttribute(oo)!==o2&&(IA(n,o),o.parentNode&&o.parentNode.removeChild(o))}};function CA(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var y2=function(n){var t=document.head,i=n||t,a=document.createElement("style"),o=(function(m){var p=Array.from(m.querySelectorAll("style[".concat(oo,"]")));return p[p.length-1]})(i),u=o!==void 0?o.nextSibling:null;a.setAttribute(oo,o2),a.setAttribute(l2,Gh);var d=CA();return d&&a.setAttribute("nonce",d),i.insertBefore(a,u),a},jA=(function(){function n(t){this.element=y2(t),this.element.appendChild(document.createTextNode("")),this.sheet=(function(i){if(i.sheet)return i.sheet;for(var a=document.styleSheets,o=0,u=a.length;o<u;o++){var d=a[o];if(d.ownerNode===i)return d}throw mu(17)})(this.element),this.length=0}return n.prototype.insertRule=function(t,i){try{return this.sheet.insertRule(i,t),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},n.prototype.getRule=function(t){var i=this.sheet.cssRules[t];return i&&i.cssText?i.cssText:""},n})(),DA=(function(){function n(t){this.element=y2(t),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(t,i){if(t<=this.length&&t>=0){var a=document.createTextNode(i);return this.element.insertBefore(a,this.nodes[t]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},n.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},n})(),NA=(function(){function n(t){this.rules=[],this.length=0}return n.prototype.insertRule=function(t,i){return t<=this.length&&(this.rules.splice(t,0,i),this.length++,!0)},n.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},n.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},n})(),Ox=bh,MA={isServer:!bh,useCSSOMInjection:!uA},x2=(function(){function n(t,i,a){t===void 0&&(t=lo),i===void 0&&(i={});var o=this;this.options=_n(_n({},MA),t),this.gs=i,this.names=new Map(a),this.server=!!t.isServer,!this.server&&bh&&Ox&&(Ox=!1,Mx(this)),Jm(this,function(){return(function(u){for(var d=u.getTag(),m=d.length,p="",g=function(E){var S=(function(q){return Th.get(q)})(E);if(S===void 0)return"continue";var R=u.names.get(S),M=d.getGroup(E);if(R===void 0||!R.size||M.length===0)return"continue";var L="".concat(oo,".g").concat(E,'[id="').concat(S,'"]'),U="";R!==void 0&&R.forEach(function(q){q.length>0&&(U+="".concat(q,","))}),p+="".concat(M).concat(L,'{content:"').concat(U,'"}').concat(Wm)},v=0;v<m;v++)g(v);return p})(o)})}return n.registerId=function(t){return Hc(t)},n.prototype.rehydrate=function(){!this.server&&bh&&Mx(this)},n.prototype.reconstructWithOptions=function(t,i){return i===void 0&&(i=!0),new n(_n(_n({},this.options),t),this.gs,i&&this.names||void 0)},n.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(t=(function(i){var a=i.useCSSOMInjection,o=i.target;return i.isServer?new NA(o):a?new jA(o):new DA(o)})(this.options),new bA(t)));var t},n.prototype.hasNameForId=function(t,i){return this.names.has(t)&&this.names.get(t).has(i)},n.prototype.registerName=function(t,i){if(Hc(t),this.names.has(t))this.names.get(t).add(i);else{var a=new Set;a.add(i),this.names.set(t,a)}},n.prototype.insertRules=function(t,i,a){this.registerName(t,i),this.getTag().insertRules(Hc(t),a)},n.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},n.prototype.clearRules=function(t){this.getTag().clearGroup(Hc(t)),this.clearNames(t)},n.prototype.clearTag=function(){this.tag=void 0},n})(),OA=/&/g,VA=/^\s*\/\/.*$/gm;function v2(n,t){return n.map(function(i){return i.type==="rule"&&(i.value="".concat(t," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(t," ")),i.props=i.props.map(function(a){return"".concat(t," ").concat(a)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=v2(i.children,t)),i})}function kA(n){var t,i,a,o=lo,u=o.options,d=u===void 0?lo:u,m=o.plugins,p=m===void 0?Yh:m,g=function(S,R,M){return M.startsWith(i)&&M.endsWith(i)&&M.replaceAll(i,"").length>0?".".concat(t):S},v=p.slice();v.push(function(S){S.type===Fh&&S.value.includes("&")&&(S.props[0]=S.props[0].replace(OA,i).replace(a,g))}),d.prefix&&v.push(oA),v.push(rA);var E=function(S,R,M,L){R===void 0&&(R=""),M===void 0&&(M=""),L===void 0&&(L="&"),t=L,i=R,a=new RegExp("\\".concat(i,"\\b"),"g");var U=S.replace(VA,""),q=nA(M||R?"".concat(M," ").concat(R," { ").concat(U," }"):U);d.namespace&&(q=v2(q,d.namespace));var X=[];return Eh(q,aA(v.concat(sA(function(tt){return X.push(tt)})))),X};return E.hash=p.length?p.reduce(function(S,R){return R.name||mu(15),to(S,R.name)},c2).toString():"",E}var PA=new x2,um=kA(),_2=St.createContext({shouldForwardProp:void 0,styleSheet:PA,stylis:um});_2.Consumer;St.createContext(void 0);function Vx(){return B.useContext(_2)}var w2=(function(){function n(t,i){var a=this;this.inject=function(o,u){u===void 0&&(u=um);var d=a.name+u.hash;o.hasNameForId(a.id,d)||o.insertRules(a.id,d,u(a.rules,d,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=i,Jm(this,function(){throw mu(12,String(a.name))})}return n.prototype.getName=function(t){return t===void 0&&(t=um),this.name+t.hash},n})(),UA=function(n){return n>="A"&&n<="Z"};function kx(n){for(var t="",i=0;i<n.length;i++){var a=n[i];if(i===1&&a==="-"&&n[0]==="-")return n;UA(a)?t+="-"+a.toLowerCase():t+=a}return t.startsWith("ms-")?"-"+t:t}var E2=function(n){return n==null||n===!1||n===""},b2=function(n){var t,i,a=[];for(var o in n){var u=n[o];n.hasOwnProperty(o)&&!E2(u)&&(Array.isArray(u)&&u.isCss||uo(u)?a.push("".concat(kx(o),":"),u,";"):tu(u)?a.push.apply(a,Jl(Jl(["".concat(o," {")],b2(u),!1),["}"],!1)):a.push("".concat(kx(o),": ").concat((t=o,(i=u)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||t in lA||t.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return a};function Qa(n,t,i,a){if(E2(n))return[];if(Zm(n))return[".".concat(n.styledComponentId)];if(uo(n)){if(!uo(u=n)||u.prototype&&u.prototype.isReactComponent||!t)return[n];var o=n(t);return Qa(o,t,i,a)}var u;return n instanceof w2?i?(n.inject(i,a),[n.getName(a)]):[n]:tu(n)?b2(n):Array.isArray(n)?Array.prototype.concat.apply(Yh,n.map(function(d){return Qa(d,t,i,a)})):[n.toString()]}function LA(n){for(var t=0;t<n.length;t+=1){var i=n[t];if(uo(i)&&!Zm(i))return!1}return!0}var zA=h2(Gh),$A=(function(){function n(t,i,a){this.rules=t,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&LA(t),this.componentId=i,this.baseHash=to(zA,i),this.baseStyle=a,x2.registerId(i)}return n.prototype.generateAndInjectStyles=function(t,i,a){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,i,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))o=Ha(o,this.staticRulesId);else{var u=om(Qa(this.rules,t,i,a)),d=sm(to(this.baseHash,u)>>>0);if(!i.hasNameForId(this.componentId,d)){var m=a(u,".".concat(d),void 0,this.componentId);i.insertRules(this.componentId,d,m)}o=Ha(o,d),this.staticRulesId=d}else{for(var p=to(this.baseHash,a.hash),g="",v=0;v<this.rules.length;v++){var E=this.rules[v];if(typeof E=="string")g+=E;else if(E){var S=om(Qa(E,t,i,a));p=to(p,S+v),g+=S}}if(g){var R=sm(p>>>0);i.hasNameForId(this.componentId,R)||i.insertRules(this.componentId,R,a(g,".".concat(R),void 0,this.componentId)),o=Ha(o,R)}}return o},n})(),T2=St.createContext(void 0);T2.Consumer;var Ep={};function BA(n,t,i){var a=Zm(n),o=n,u=!wp(n),d=t.attrs,m=d===void 0?Yh:d,p=t.componentId,g=p===void 0?(function(lt,Y){var ot=typeof lt!="string"?"sc":Ix(lt);Ep[ot]=(Ep[ot]||0)+1;var C="".concat(ot,"-").concat(d2(Gh+ot+Ep[ot]));return Y?"".concat(Y,"-").concat(C):C})(t.displayName,t.parentComponentId):p,v=t.displayName,E=v===void 0?(function(lt){return wp(lt)?"styled.".concat(lt):"Styled(".concat(pA(lt),")")})(n):v,S=t.displayName&&t.componentId?"".concat(Ix(t.displayName),"-").concat(t.componentId):t.componentId||g,R=a&&o.attrs?o.attrs.concat(m).filter(Boolean):m,M=t.shouldForwardProp;if(a&&o.shouldForwardProp){var L=o.shouldForwardProp;if(t.shouldForwardProp){var U=t.shouldForwardProp;M=function(lt,Y){return L(lt,Y)&&U(lt,Y)}}else M=L}var q=new $A(i,S,a?o.componentStyle:void 0);function X(lt,Y){return(function(ot,C,I){var j=ot.attrs,O=ot.componentStyle,k=ot.defaultProps,z=ot.foldedComponentIds,D=ot.styledComponentId,se=ot.target,Kt=St.useContext(T2),J=Vx(),dt=ot.shouldForwardProp||J.shouldForwardProp,yt=cA(C,Kt,k)||lo,Ct=(function(jt,_t,ge){for(var Lt,Me=_n(_n({},_t),{className:void 0,theme:ge}),Ni=0;Ni<jt.length;Ni+=1){var Hn=uo(Lt=jt[Ni])?Lt(Me):Lt;for(var ln in Hn)Me[ln]=ln==="className"?Ha(Me[ln],Hn[ln]):ln==="style"?_n(_n({},Me[ln]),Hn[ln]):Hn[ln]}return _t.className&&(Me.className=Ha(Me.className,_t.className)),Me})(j,C,yt),V=Ct.as||se,at={};for(var ct in Ct)Ct[ct]===void 0||ct[0]==="$"||ct==="as"||ct==="theme"&&Ct.theme===yt||(ct==="forwardedAs"?at.as=Ct.forwardedAs:dt&&!dt(ct,V)||(at[ct]=Ct[ct]));var ht=(function(jt,_t){var ge=Vx(),Lt=jt.generateAndInjectStyles(_t,ge.styleSheet,ge.stylis);return Lt})(O,Ct),gt=Ha(z,D);return ht&&(gt+=" "+ht),Ct.className&&(gt+=" "+Ct.className),at[wp(V)&&!u2.has(V)?"class":"className"]=gt,I&&(at.ref=I),B.createElement(V,at)})(tt,lt,Y)}X.displayName=E;var tt=St.forwardRef(X);return tt.attrs=R,tt.componentStyle=q,tt.displayName=E,tt.shouldForwardProp=M,tt.foldedComponentIds=a?Ha(o.foldedComponentIds,o.styledComponentId):"",tt.styledComponentId=S,tt.target=a?o.target:n,Object.defineProperty(tt,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(lt){this._foldedDefaultProps=a?(function(Y){for(var ot=[],C=1;C<arguments.length;C++)ot[C-1]=arguments[C];for(var I=0,j=ot;I<j.length;I++)lm(Y,j[I],!0);return Y})({},o.defaultProps,lt):lt}}),Jm(tt,function(){return".".concat(tt.styledComponentId)}),u&&g2(tt,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),tt}function Px(n,t){for(var i=[n[0]],a=0,o=t.length;a<o;a+=1)i.push(t[a],n[a+1]);return i}var Ux=function(n){return Object.assign(n,{isCss:!0})};function tg(n){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];if(uo(n)||tu(n))return Ux(Qa(Px(Yh,Jl([n],t,!0))));var a=n;return t.length===0&&a.length===1&&typeof a[0]=="string"?Qa(a):Ux(Qa(Px(a,t)))}function cm(n,t,i){if(i===void 0&&(i=lo),!t)throw mu(1,t);var a=function(o){for(var u=[],d=1;d<arguments.length;d++)u[d-1]=arguments[d];return n(t,i,tg.apply(void 0,Jl([o],u,!1)))};return a.attrs=function(o){return cm(n,t,_n(_n({},i),{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},a.withConfig=function(o){return cm(n,t,_n(_n({},i),o))},a}var S2=function(n){return cm(BA,n)},T=S2;u2.forEach(function(n){T[n]=S2(n)});function A2(n){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];var a=om(tg.apply(void 0,Jl([n],t,!1))),o=d2(a);return new w2(o,a)}const bp=T.a`
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
`;function eg({label:n,href:t="#",active:i=!1,onClick:a,style:o,target:u,rel:d}){const p=/^https?:\/\//i.test(t)||t?.startsWith("mailto:")||t?.startsWith("tel:");let g,v=!1;!p&&t&&(t.startsWith("/")&&(g=t,v=!0),t==="/"&&(g="/",v=!0));const S={"aria-current":i?"page":void 0,"data-active":i?"true":"false","data-label":n,onKeyDown:R=>{a&&(R.key==="Enter"||R.key===" ")&&(R.preventDefault(),a(R))},onClick:a,style:o,$active:i};return v?y.jsx(bp,{as:ts,to:g,...S,children:y.jsx("span",{className:"navbtn-text",children:n})}):t?y.jsx(bp,{href:t,target:u,rel:d,...S,children:y.jsx("span",{className:"navbtn-text",children:n})}):y.jsx(bp,{as:"button",type:"button",...S,style:{background:"none",border:0,...o},children:y.jsx("span",{className:"navbtn-text",children:n})})}eg.propTypes={label:Z.string.isRequired,href:Z.string,active:Z.bool,onClick:Z.func,style:Z.object,target:Z.string,rel:Z.string};const FA=({isOpen:n=!1,size:t=28,color:i="#fff",...a})=>{const o=Math.max(2,Math.round(t/14)),u=t/2,d=Math.round(t*.28);if(n)return y.jsxs("svg",{width:t,height:t,viewBox:`0 0 ${t} ${t}`,fill:"none",...a,children:[y.jsx("line",{x1:u-d,y1:u-d,x2:u+d,y2:u+d,stroke:i,strokeWidth:o,strokeLinecap:"round"}),y.jsx("line",{x1:u-d,y1:u+d,x2:u+d,y2:u-d,stroke:i,strokeWidth:o,strokeLinecap:"round"})]});const m=o,p=o/2;return y.jsxs("svg",{width:t,height:t,viewBox:`0 0 ${t} ${t}`,fill:"none",...a,children:[y.jsx("rect",{x:0,y:u-d-m/2,width:t,height:m,rx:p,fill:i}),y.jsx("rect",{x:0,y:u-m/2,width:t,height:m,rx:p,fill:i}),y.jsx("rect",{x:0,y:u+d-m/2,width:t,height:m,rx:p,fill:i})]})},he=Object.freeze({GRADIENT:"gradient",LIGHT:"light",DARK:"dark",GRADIENT_DARK:"gradient_dark"}),KA=T.header`
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
`,qA=T.div`
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
`,HA=T.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  @media (max-width: 640px) {
    gap: 8px;
  }
`,GA=T.div`
  display: flex;
  align-items: center;
  gap: 24px;
`,YA=T.nav`
  display: flex;
  align-items: center;
  gap: 24px;
  @media (max-width: 1450px) {
    display: none;
  }
`,QA=T.button`
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
`,XA=T.div`
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
`,WA=T.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  margin-top: 12px;
`,ZA=T(eg)`
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  letter-spacing: 0.26px;
`,JA=T.div`
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
`,t4=T.div`
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
`;function R2({items:n=[],activeKey:t,mode:i,onModeChange:a,autoOnScroll:o=!1,scrollThreshold:u=8,sticky:d=!0,maxWidth:m,overlay:p=!1}){const[g,v]=B.useState(!1),[E,S]=B.useState(he.GRADIENT),R=typeof i=="string",M=R?i:E,L=B.useRef(R?i:E);B.useEffect(()=>{if(!R)return;(window.scrollY||document.documentElement.scrollTop||0)<=u&&(L.current=i)},[i,R,u]),B.useEffect(()=>{if(!o)return;const O=()=>{const k=window.scrollY||document.documentElement.scrollTop||0,z=L.current||he.GRADIENT_DARK,D=k>u?he.DARK:z;R||S(D),a&&a(D)};return O(),window.addEventListener("scroll",O,{passive:!0}),()=>window.removeEventListener("scroll",O)},[o,R,a,u]);const{baseColor:U,gradient:q,textColor:X,boxShadow:tt,showGradient:lt}=B.useMemo(()=>{switch(M){case he.LIGHT:return{baseColor:"linear-gradient(180deg, rgba(255,255,255,0.8) 60%, rgba(255,255,255,0) 100%)",gradient:"rgba(255,255,255,1)",textColor:"#000",showGradient:!0};case he.DARK:return{baseColor:"linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,0) 100%)",gradient:"linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,1) 100%)",textColor:"#fff",showGradient:!0};case he.GRADIENT_DARK:return{baseColor:"linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,0) 100%)",gradient:"linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,1) 100%)",textColor:"#fff",showGradient:!1};default:return{baseColor:"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",gradient:"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",textColor:"#000",showGradient:!1}}},[M]),C=M===he.DARK||M===he.GRADIENT_DARK||g,I=C?"/icons/logoLight.svg":"/icons/logoDark.svg",j=n.filter(O=>O.label!=="SHOWROOM");return B.useEffect(()=>(g?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[g]),y.jsxs(KA,{role:"banner",$sticky:d,$overlay:p,$baseColor:U,$gradient:q,$showGradient:lt,$textColor:X,$boxShadow:tt,children:[y.jsx(qA,{$maxWidth:m,children:y.jsxs(HA,{children:[y.jsxs(GA,{children:[y.jsx(ts,{to:"/","aria-label":"홈으로",style:{color:"inherit",textDecoration:"none"},children:y.jsx(JA,{"aria-hidden":!0,children:y.jsx(t4,{children:y.jsx("div",{style:{backgroundImage:`url(${I})`,width:"100%",height:"100%",backgroundSize:"contain",backgroundRepeat:"no-repeat"}})})})}),y.jsx(YA,{"aria-label":"주 메뉴",children:n.map(O=>y.jsx(eg,{label:O.label,href:O.href,active:O.key===t},O.key))})]}),y.jsx(QA,{"aria-label":g?"메뉴 닫기":"메뉴 열기",onClick:()=>v(O=>!O),children:y.jsx(FA,{isOpen:g,size:24,color:C?"#fff":"#000"})})]})}),y.jsx(XA,{$open:g,onClick:()=>v(!1),children:y.jsx(WA,{onClick:O=>O.stopPropagation(),children:j.map(O=>y.jsx(ZA,{label:O.label,href:O.href,active:O.key===t,style:{fontSize:18,fontWeight:500,color:"#fff",textAlign:"center"},onClick:()=>v(!1)},O.key))})})]})}R2.propTypes={items:Z.arrayOf(Z.shape({key:Z.string.isRequired,label:Z.string.isRequired,href:Z.string})),activeKey:Z.string,mode:Z.oneOf([he.GRADIENT,he.LIGHT,he.DARK,he.GRADIENT_DARK]),onModeChange:Z.func,autoOnScroll:Z.bool,scrollThreshold:Z.number,sticky:Z.bool,overlay:Z.bool,maxWidth:Z.oneOfType([Z.string,Z.number])};const ng="Pretendard, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR', Arial, sans-serif",e4=T.footer`
  width: 100vw;
  background: #0E0E0E;
  border-top: 1px #A1A1A1 solid;
  @media (max-width: 640px) {
    min-width: 0;
    left: 0;
    right: 0;
  }
`,n4=T.div`
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
`,i4=T.div`
  font-family: ${ng};
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
`,r4=T.nav`
  display: flex;
  gap: 60px;
  flex-wrap: wrap;
  align-items: center;
  color: #F0F0F0;
  font-family: ${ng};
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
`,Lx=T.a`
  color: inherit;
  text-decoration: none;
  opacity: 0.95;
`,a4=T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #909090;
  font-family: ${ng};
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
`,s4=T.div`
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
`,zx=T.a`
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
`;function I2({title:n="잔향 : 기억의 향기",nav:t=[{label:"PROJECTS",href:"/projects"},{label:"PEOPLES",href:"/peoples"},{label:"SHOWROOM",href:"/showroom"},{label:"GUESTBOOK",href:"/guestbook"},{label:"CREDITS",href:"/credits"}],copyright:i=["ⓒ 2025 TECH UNIV KOREA. ALL RIGHTS RESERVED.","TUKOREA DESIGN ENGINEERING 20TH GRADUATION EXHIBITION"],social:a={youtube:{href:"https://youtube.com",label:"YouTube"},instagram:{href:"https://instagram.com",label:"Instagram"}},maxWidth:o=1220,sidePadding:u=350}){const[d,m]=St.useState(typeof window<"u"?window.innerWidth<640:!1);return St.useEffect(()=>{function p(){m(window.innerWidth<640)}return p(),window.addEventListener("resize",p),()=>window.removeEventListener("resize",p)},[]),y.jsx(e4,{role:"contentinfo",children:y.jsxs(n4,{$sidePadding:u,$maxWidth:o,children:[y.jsx(i4,{children:n}),y.jsx(r4,{"aria-label":"푸터 메뉴",children:t.filter(p=>!(d&&p.label==="SHOWROOM")).map(p=>{const g=p.href||"#",v=/^https?:\/\//i.test(g),E="/";let S=g;return v||g===E&&(S="/"),v?y.jsx(Lx,{href:g,children:p.label},p.label):y.jsx(Lx,{as:ts,to:S,children:p.label},p.label)})}),y.jsx(a4,{children:i.map((p,g)=>y.jsx("div",{children:p},g))}),y.jsxs(s4,{$sidePadding:u,children:[a?.youtube?.href&&y.jsx(zx,{href:a.youtube.href,"aria-label":a.youtube.label||"YouTube",target:"_blank",rel:"noreferrer noopener",children:y.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#FFFFFF","aria-hidden":!0,children:y.jsx("path",{d:"M23.5 7.2a4 4 0 0 0-2.8-2.8C18.8 4 12 4 12 4s-6.8 0-8.7.4A4 4 0 0 0 .5 7.2 41 41 0 0 0 0 12a41 41 0 0 0 .5 4.8 4 4 0 0 0 2.8 2.8C5.2 20 12 20 12 20s6.8 0 8.7-.4a4 4 0 0 0 2.8-2.8A41 41 0 0 0 24 12a41 41 0 0 0-.5-4.8zM9.6 15.2V8.8L15.8 12l-6.2 3.2z"})})}),a?.instagram?.href&&y.jsx(zx,{href:a.instagram.href,"aria-label":a.instagram.label||"Instagram",target:"_blank",rel:"noreferrer noopener",children:y.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#FFFFFF","aria-hidden":!0,children:[y.jsx("path",{d:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2A3.2 3.2 0 1 1 12 8a3.2 3.2 0 0 1 0 6.4z"}),y.jsx("circle",{cx:"17.5",cy:"6.5",r:"1.2"}),y.jsx("path",{d:"M17.8 2H6.2A4.2 4.2 0 0 0 2 6.2v11.6A4.2 4.2 0 0 0 6.2 22h11.6A4.2 4.2 0 0 0 22 17.8V6.2A4.2 4.2 0 0 0 17.8 2zm2.6 15.8a2.6 2.6 0 0 1-2.6 2.6H6.2a2.6 2.6 0 0 1-2.6-2.6V6.2A2.6 2.6 0 0 1 6.2 3.6h11.6a2.6 2.6 0 0 1 2.6 2.6v11.6z"})]})})]})]})})}I2.propTypes={title:Z.string,nav:Z.arrayOf(Z.shape({label:Z.string.isRequired,href:Z.string.isRequired})),copyright:Z.arrayOf(Z.string),social:Z.shape({youtube:Z.shape({href:Z.string,label:Z.string}),instagram:Z.shape({href:Z.string,label:Z.string})}),maxWidth:Z.number,sidePadding:Z.number};const Di="'Pretendard', system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif",o4=T.div`
  position: relative; background: #fff;
`,l4=T.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;function $x({children:n}){return y.jsx(o4,{children:y.jsx(l4,{children:n})})}const u4=T.div`
  position: relative; height: 52px; display: flex; align-items: flex-end; justify-content: center; line-height: 52px;
  font-family: ${Di}; font-size: 40px; font-weight: 700; color: #101010; line-height: 64px; margin-top: 88px;
  @media (max-width: 640px) {
    height: 21px;
    line-height: 21px;
    margin-top: 4px;
    font-size: 18px;
  }
`,c4=T.div`
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
`;function h4(){return y.jsxs(y.Fragment,{children:[y.jsx(u4,{children:"CREDITS"}),y.jsx(c4,{children:"잔향 : 기억의 향기"})]})}const d4=T.p`
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
`,f4=T.div`
  display: flex;
  position: relative;
  align-items: flex-start;
  overflow: visible;
  padding-top: 20px;
    @media (max-width: 640px) {
    padding-top: 0px;
  }
`,p4=T.div`
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
`,m4=T.div`
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
`,g4=T.div`
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
`,C2=T.div`
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
`;function y4({text:n}){return y.jsxs(f4,{children:[y.jsx(C2,{}),y.jsx(p4,{}),y.jsx(d4,{dangerouslySetInnerHTML:{__html:n}})]})}const x4=T.div`
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
`,v4=T.div`
  width: 800px; height: 450px; background: url('interviewThumb.png'); background-size:cover; position: relative; z-index: 30;
  @media (max-width: 640px) {
    width: 100vw;
    height: calc(100vw * 0.5625); /* 16:9 비율 유지 */
  }
`,_4=T.div`
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
`;function w4({children:n}){return y.jsx(v4,{children:y.jsx(_4,{children:n})})}const E4=T.div`
  display: flex; gap: 40px; margin-top: 44px; width: 1220px; position: relative;
  @media (max-width: 640px) {
    // flex 위쪽에 2개, 아래에 1개 배치되게 해주고, 아래 배치된거는 위쪽 2개의 길이만큼 맞춰주게 해주세요
    width: 100%;
    flex-wrap: wrap;
    gap: 32px;
    margin-top: 24px;
  }
`,b4=T.div`
  width: 374px; display: flex; flex-direction: column; gap: 40px;
    @media (max-width: 640px) {
      width: 100%;
      gap: 16px;
      padding: 0px 16px;
  }
`,T4=T.div`
  font-family: ${Di}; font-size: 28px; font-weight: 600; line-height: 20px; color: #000; margin: 0;
  @media (max-width: 640px) {
    font-size: 14px;
    line-height: 10px;
  }
`,S4=T.p`
  font-family: ${Di}; font-size: 16px; font-weight: 400; line-height: 150%; color: #404040; text-align: justify; margin: 0;
  @media (max-width: 640px) {
    font-size: 10px;
  }
`;function A4({blocks:n}){return y.jsxs(E4,{children:[y.jsx(C2,{}),n.map(t=>y.jsxs(b4,{children:[y.jsx(T4,{children:t.title}),y.jsx(S4,{dangerouslySetInnerHTML:{__html:t.body}})]},t.title))]})}const R4=T.div`
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
`,I4=T.div`
  width: 289px;
  height: 45px;
  display: flex;
  align-items: flex-end;
  @media (max-width: 640px) {
    height: auto;
    width: 88px;
    margin-top: 12px;
  }
`,C4=T.div`
  font-family: ${Di}; font-size: 20px;
  font-weight: 500;
  line-height: 22.4px;
  color: #202020;
  @media (max-width: 640px) {
    font-size: 14px;
    line-height: 14px;
  }
`,j4=T.div`
  width: 900px;
  display: flex;
  flex-direction: column;
  @media (max-width: 640px) {
    width: 100%;
  }
`;function D4({title:n,rows:t,last:i=!1}){return y.jsxs(R4,{$last:i,children:[y.jsx(I4,{children:y.jsx(C4,{children:n})}),y.jsx(j4,{children:t.map((a,o)=>y.jsx(P4,{ko:a.ko,en:a.en,divider:t.length>1&&o!==t.length-1},a.ko+a.en+o))})]})}const N4=T.div`
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
`,M4=T.div`
  width: 135px;
  @media (max-width: 640px) {
    width: 66px;
  }
`,O4=T.div`
  font-family: ${Di};
  font-size: 16px;
  font-weight: 300;
  line-height: 22.4px; 
  color: #202020;
  @media (max-width: 640px) {
    font-size: 12px;
    line-height: 14px;
  }
`,V4=T.div`
  display: flex; align-items: center;
`,k4=T.div`
  font-family: ${Di};
  font-size: 16px;
  font-weight: 300;
  line-height: 22.4px;
  color: #404040;
  @media (max-width: 640px) {
    font-size: 12px;
    line-height: 14px;
  }
`;function P4({ko:n,en:t,divider:i=!1}){return y.jsxs(N4,{$divider:i,children:[y.jsx(M4,{children:y.jsx(O4,{children:n})}),y.jsx(V4,{children:y.jsx(k4,{children:t})})]})}const U4=T.div`
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
`,L4=T.div`
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
`;function z4(){const n='안녕하세요, 제20회 졸업전시준비위원회입니다. <br/><br/>한국공학대학교 디자인공학부 제20회 졸업전시 <잔향>은 지난 시간 동안의 도전과 성장을 작품으로 담아내는 자리입니다. 이번 전시는 단순히 결과물을 나열하는 데 그치지 않고, 각자의 창작 과정 속에서 남겨진 고민과 흔적을 함께 나누고자 기획되었습니다. <br/><br/><잔향>이라는 주제는 작품이 지닌 감각과 정서가 관람자의 마음에 은은히 스며들어, 시간이 지나도 다시 떠오르는 기억으로 남기를 바라는 마음을 담고 있습니다. 학생들이 걸어온 수많은 순간과 열정이 응축된 이번 전시가, 누군가의 영감으로 다시 피어나길 희망합니다. 100명의 학생들이 모여 만들어 낸 이 전시는 그 어느 때보다 크고 도전적인 시도였습니다. 서로의 열정이 모여 이루어진 결과물이기에, 그 의미 또한 더욱 특별합니다.<br/><br/> 이번 전시가 졸업생들에게는 새로운 출발을 알리는 이정표로, 관람객에게는 오래도록 마음속에 머무는 "기억의 향기"로 남기를 바랍니다.',t=[{title:"학부장의 말씀",body:"스무 번째를 맞이하는 디자인공학부 졸업작품전시회를 진심으로 축하드립니다.<br/>이번 전시회에는 총 100명의 학생들이 개인 혹은 팀을 이루어, 산업디자인공학전공 47개 작품과 미디어디자인공학전공 30개 작품을 선보입니다. 이번 전시회는 단순히 결과물을 보여주는 자리를 넘어, 지난 4년간의 땀과 열정, 수많은 고민과 성장이 맺은 값진 결실이자, 새로운 출발을 알리는 뜻깊은 순간입니다.<br/>오늘날 우리는 인공지능, 스마트 기술, 친환경 소재 등 급속히 변화하는 기술 환경 속에서 전례 없는 전환의 시대를 맞이하고 있습니다.<br/>이러한 가운데에 디자이너는 우리의 생활에서 여러 불편한 요소를 찾아내고 이를 창의적이며 책임감 있게 해결할 수 있는 융합형 인재로서 그 역할이 더욱 중요해지고 있습니다.<br/>우리 디자인공학부 학생들은 이러한 변화에 능동적으로 대응하며, 사용자 중심의 사고, 미적 감각, 기술적 이해를 균형 있게 갖춘 디자이너로 성장해 왔습니다. 이번 전시의 모든 작품에는 치열한 탐구와 관찰, 반복된 시도와 실패, 그리고 그 너머의 성장이 고스란히 담겨 있습니다. 그 귀중한 과정을 진심으로 응원하며, 우리 학생들이 디자인을 통해 사회에 공헌하고 세상에 긍정적인 변화를 이끄는 창의적이고 따뜻한 디자이너로 거듭나기를 바랍니다.<br/>앞으로 변화와 도전의 흐름 속에서도 흔들림 없이 자신이 옳다고 믿는 방향으로 꿋꿋하게 나아가며, 사회 곳곳에서 중심적인 역할을 수행하는 당당한 디자이너로 성장하길 기대합니다. 그리고 언제 어디서든 한국공학대학교 디자인공학부의 이름을 빛내는 자랑스러운 동문으로 기억되길 바랍니다.<br/>마지막으로, 소중한 인재들의 성장을 위해 아낌없는 지도와 격려를 보내주신 교수님들께 깊은 감사의 말씀을 전합니다. 또한, 묵묵히 곁에서 자녀를 응원해주신 학부모님들께도 진심 어린 감사의 인사를 드립니다. 감사합니다."},{title:"학과 소개",body:"한국공학대학교 디자인공학부는 창의적인 디자인 발상법과 공학적 마인드의 통합적 접근법을 추구하는 시대로 바뀜에 따라 단순히 심미적 역할에만 머물렀던 디자인 개념에서 확장하여 4차 산업혁명 기술 분야를 선도하고자 하는 비전을 담고 있는 실무 중심의 융합형 학부입니다.<br/>디자인공학부는 디자인 기반의 창의적 아이디어와 HW/SW 융합 기술 개발 능력을 통해 기업을 혁신할 수 있는 인재 양성을 목표로 하고 있습니다."},{title:"웹사이트팀 제작 후기",body:"2025년 졸업전시 잔향의 웹사이트 기획부터 디자인, 그리고 구현까지 담당한 웹사이트 팀 성수민, 김예준 입니다. 25년 5월부터 컨셉이 정해진 이래 150일에 걸쳐 개발한 사이트가 이렇게 완성되어 무척 감격스럽습니다."}],i=[{title:"위원장",rows:[{ko:"홍승재",en:"Hong Seungjae"}]},{title:"부위원장",rows:[{ko:"김예린",en:"Kim Yerin"}]},{title:"총무",rows:[{ko:"진효민",en:"Jin Hyomin"},{ko:"정민호",en:"Jung Minho"}]},{title:"기획",rows:[{ko:"문나라",en:"Moon Nara"},{ko:"차소이",en:"Cha Soyi"},{ko:"한채원",en:"Han Chaewon"}]},{title:"홍보",rows:[{ko:"이채원",en:"Lee Chaewon"},{ko:"남가림",en:"Nam Garim"}]},{title:"디자인",rows:[{ko:"구인회",en:"Koo Inhoe"},{ko:"김기윤",en:"Kim Giyun"},{ko:"박혜성",en:"Park Hyeseong"},{ko:"석동현",en:"Suk Donghyun"}]},{title:"웹사이트",rows:[{ko:"성수민",en:"Seong Sumin"},{ko:"김예준",en:"Kim Yejun"}]},{title:"Special Thanks",rows:[{ko:"김한종 교수",en:"Prof. Kim Hanjong"}],last:!0}];return y.jsxs("div",{style:{position:"relative"},children:[y.jsxs($x,{children:[y.jsx(h4,{}),y.jsxs(x4,{children:[y.jsx(y4,{text:n}),y.jsx(w4,{})]})]}),y.jsxs($x,{children:[y.jsx(A4,{blocks:t}),y.jsxs(U4,{children:[y.jsx(g4,{}),y.jsxs(L4,{children:[y.jsx(m4,{}),"2025 잔향",y.jsx("br",{}),"제 20대 졸업전시위원회"]}),i.map(a=>y.jsx(D4,{title:a.title,rows:a.rows,last:!!a.last},a.title))]})]})]})}const $4=T.div`
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
`,B4=T.div`
  position: relative;
  width: 55%;
  height: 100%;
  flex: 0 0 auto;
`,F4=T.img`
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
`,K4=T.div`
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #f6f6f6 100%);
  z-index: 2;
  width: 20%;
`,q4=T.div`
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
`,Bx=T.div`
  margin: 0;
  padding: 0;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`,H4=T.h1`
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
`,ch=T.p`
    margin: 0;
@media (max-width: 640px) {
    font-size: 6px;
 }
   @media (max-width: 393px) {
    font-size: 5px;
  }
`,G4=T(ch)`
 @media (max-width: 640px) {
    display: none;
 }`;function ig({nameKor:n,nameEng:t,role:i,sns:a,eMail:o,imgSrc:u,imgAlt:d}){return y.jsxs($4,{children:[y.jsxs(B4,{children:[y.jsx(F4,{src:u,alt:d}),y.jsx(K4,{})]}),y.jsxs(q4,{children:[y.jsxs(Bx,{style:{top:"50px"},children:[y.jsx(H4,{children:n}),y.jsx(ch,{children:t})]}),y.jsxs(Bx,{children:[y.jsx(ch,{children:i}),typeof a=="string"&&a.trim()&&a!=="-"?y.jsx(ch,{children:a}):Array.isArray(a)&&a.length>0?y.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",margin:"4px 0 0 0"},children:a.map((m,p)=>y.jsx("span",{style:{wordBreak:"break-all"},children:m.handle||m.url},`${m.platform}-${p}`))}):"-",y.jsx(G4,{children:o?y.jsx("a",{style:{textDecoration:"none",color:"inherit"},href:`mailto:${o}`,children:o}):null})]})]})]})}ig.defaultProps={sns:[]};ig.propTypes={nameKor:Z.string.isRequired,nameEng:Z.string,role:Z.string,sns:Z.arrayOf(Z.shape({platform:Z.string.isRequired,url:Z.string.isRequired})),eMail:Z.string,imgSrc:Z.string.isRequired,imgAlt:Z.string.isRequired};const Y4=T.div`
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
`,Q4=T.div`
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
`,j2=T.p`
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
`,X4=T(j2)`
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
`;function hm({path:n="student",isActive:t=!1,onClick:i}){return y.jsxs(Y4,{onClick:i,children:[y.jsx(j2,{$active:t,children:"교수"}),y.jsx(X4,{$active:t,children:"학생"}),y.jsx(Q4,{$active:t})]})}hm.propTypes={path:Z.oneOf(["student","professor"]),isActive:Z.bool,onClick:Z.func};const Fx=T.a`
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
`,Kx=T.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;function hh({label:n,href:t=null,active:i=!1,onClick:a,style:o,target:u,rel:d}){const p={"aria-current":i?"page":void 0,"data-active":i?"true":"false",onKeyDown:g=>{a&&(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),a(g))},"data-label":n,onClick:a,style:o,$active:i};return t?y.jsx(Fx,{href:t,target:u,rel:d,...p,children:y.jsx(Kx,{className:"navbtn-text",children:n})}):y.jsx(Fx,{as:"button",type:"button",...p,style:{background:"none",border:0,...o},children:y.jsx(Kx,{className:"navbtn-text",children:n})})}hh.propTypes={label:Z.string.isRequired,href:Z.string,active:Z.bool,onClick:Z.func,style:Z.object,target:Z.string,rel:Z.string};const D2=T.div`
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
`,W4=T(D2)`
  justify-content: flex-start;
`,qx=T.div`
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
`,N2=T.p`
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
`,Z4=T(N2)`
  font-size: 16px;
  font-weight: 600;
  @media (max-width: 640px) {
   font-size: 13px;  
  }
  @media (max-width: 375px) {
    font-size: 12px;
  }
`;function rg({label:n,style:t,mode:i}){const u=window.matchMedia("(max-width: 640px)").matches?"/icons/dropDownMobileIcon.svg":"/icons/arrowDropdownIcon.svg";return i==="category"?y.jsxs(W4,{style:t,children:[y.jsx(Z4,{children:n}),y.jsx(qx,{children:y.jsx("img",{src:"/icons/arrowDropdownIcon.svg",alt:"dropdownIcon"})})]}):y.jsxs(D2,{style:t,children:[y.jsx(N2,{children:n}),y.jsx(qx,{children:y.jsx("img",{src:u,alt:"dropdownIcon"})})]})}rg.propTypes={label:Z.string.isRequired,style:Z.object};const J4=T.div`
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
`,tR=T.div`
  display: flex;
  width: 90px;
  height: 20px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  @media (max-width: 640px) {
    width: 52px;  
 }
`,eR=T.p`
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
`;function M2({options:n,onSelect:t,style:i,isOpen:a,position:o,selected:u}){return y.jsx(J4,{style:i,$open:a,children:n.map((d,m)=>y.jsx(tR,{onClick:()=>t(d),children:y.jsx(eR,{$selected:d===u,children:d})},m))})}M2.propTypes={options:Z.arrayOf(Z.string).isRequired,onSelect:Z.func.isRequired,style:Z.object,isOpen:Z.bool,position:Z.any,selected:Z.string};const nR=T.div`
  position: relative;
`;function ag({label:n,options:t,onSelect:i,style:a,filter:o,mode:u}){const[d,m]=St.useState(!1),[p,g]=St.useState({top:0,left:0}),v=St.useRef(null),E=()=>{if(v.current){const R=v.current.getBoundingClientRect();g({top:R.bottom+window.scrollY,left:R.left+window.scrollX})}m(R=>!R)},S=R=>{i&&i(R),m(!1)};return y.jsxs(nR,{ref:v,style:a,children:[y.jsx("div",{onClick:E,children:y.jsx(rg,{label:n,options:t,onSelect:i,style:{},filter:o,mode:u})}),y.jsx(M2,{options:t,onSelect:S,style:{},isOpen:d,position:p,selected:n})]})}ag.propTypes={label:Z.string.isRequired,options:Z.arrayOf(Z.string).isRequired,onSelect:Z.func.isRequired,style:Z.object,filter:Z.string};ag.defaultProps={style:{},filter:""};const iR=T.div`
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
`,rR=T.div`
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
`,aR=T.div`
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
`;function O2({options:n,isOpen:t,onSelect:i,selected:a}){return y.jsx(iR,{$open:t,children:y.jsx(rR,{$open:t,children:n.map((o,u)=>y.jsx(aR,{$selected:a===o,onClick:()=>i(o),children:o},u))})})}O2.propTypes={options:Z.arrayOf(Z.string).isRequired,isOpen:Z.bool.isRequired,onSelect:Z.func.isRequired,selected:Z.oneOfType([Z.string,Z.number])};const sR=T.div`
    position: relative;
    // 안에 들어가는 요소들 왼쪽 정렬
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;function Kl({label:n,options:t,onSelect:i,style:a,mode:o}){const[u,d]=St.useState(!1),m=St.useRef(null),p=()=>{d(v=>!v)},g=v=>{i&&i(v),d(!1)};return y.jsxs(sR,{ref:m,style:a,children:[y.jsx("div",{onClick:p,children:y.jsx(rg,{label:n,mode:o})}),y.jsx(O2,{options:t,onSelect:g,isOpen:u,selected:n})]})}Kl.propTypes={label:Z.string.isRequired,options:Z.arrayOf(Z.string).isRequired,onSelect:Z.func.isRequired,style:Z.object,mode:Z.string};Kl.defaultProps={style:{},mode:"category"};const Tp=T.div`
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
`,Sp=T.div`
  width: 120px;
  height: 100%;
  @media (max-width: 1450px) {
    display: none;
  }
`,Ap=T.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  @media (max-width: 1450px) {
    display: none;
  }
`,Rp=T.div`
  display: none;
  @media (max-width: 1450px) {
    display: flex;
    justify-content: center;
    width: auto;
  }
`;function V2({onCategoryChange:n,onToggleChange:t,type:i,onSortChange:a,sortLabel:o}){const u={type:i},[d,m]=St.useState(!1),p=()=>m(Y=>{const ot=!Y;return t&&t(ot),ot}),[g,v]=St.useState("전체"),[E,S]=St.useState("All Projects"),R=["전체","산업디자인공학","미디어디자인공학"],M=["장영주","권오재","김 억","김한종","조남주","한민섭","홍성수","김태균"],L=["All Projects","AI & Robot","Edu & Kids","Health Care","IT & Tech","Living","Mobility"],U=["이름순","좋아요순","조회수순","팀작우선","개인작우선"],[q,X]=St.useState("이름순"),tt=o||q,lt=Y=>{X(Y),a&&a(Y)};return B.useEffect(()=>{v(d?M[0]:R[0])},[d]),u.type==="project"?y.jsxs(Tp,{children:[y.jsx(Sp,{}),y.jsx(Ap,{children:L.map(Y=>y.jsx(hh,{label:Y,active:E===Y,onClick:()=>{S(Y),n&&n(Y)}},Y))}),y.jsx(Rp,{children:y.jsx(Kl,{mode:"category",label:E,options:L,onSelect:Y=>{S(Y),n&&n(Y)}})}),y.jsx(ag,{label:tt,options:U,onSelect:lt})]}):d?y.jsxs(Tp,{children:[y.jsx(Sp,{}),y.jsx(Ap,{children:M.map(Y=>y.jsx(hh,{label:Y,active:g===Y,onClick:()=>{v(Y),n&&n(Y)}},Y))}),y.jsx(Rp,{children:y.jsx(Kl,{mode:"category",label:g,options:M,onSelect:Y=>{v(Y),n&&n(Y)}})}),y.jsx(hm,{path:d?"professor":"student",isActive:d,onClick:p})]}):y.jsxs(Tp,{children:[y.jsx(Sp,{}),y.jsx(Ap,{children:R.map(Y=>y.jsx(hh,{label:Y,active:g===Y,onClick:()=>{v(Y),n&&n(Y)}},Y))}),y.jsx(Rp,{children:y.jsx(Kl,{mode:"category",label:g,options:R,onSelect:Y=>{v(Y),n&&n(Y)}})}),y.jsx(hm,{path:d?"professor":"student",isActive:d,onClick:p})]})}const oR=T.div`
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
`,lR=T.div`
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
`,uR=T.img`
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
`,cR=T.div`
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
`,hR=T.p`
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
`,Gc=T.div`
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
`,Yc=T.p`
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
`,Hx=T.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
`,Qc=T.p`
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
`;function sg({nameKor:n,rank:t,eMail:i,education:a,field:o,imgSrc:u,imgAlt:d}){const m=p=>Array.isArray(p)?y.jsx(Hx,{children:p.map((g,v)=>y.jsx(Qc,{children:g},v))}):typeof p=="string"&&p?y.jsx(Hx,{children:y.jsx(Qc,{children:p})}):null;return y.jsx(oR,{children:y.jsxs(lR,{children:[y.jsx(uR,{src:u,alt:d}),y.jsxs(cR,{children:[y.jsx(hR,{children:n}),y.jsxs(Gc,{children:[y.jsx(Yc,{children:"직위(직급)"}),y.jsx(Qc,{children:t})]}),y.jsxs(Gc,{children:[y.jsx(Yc,{children:"이메일"}),y.jsx(Qc,{children:i})]}),y.jsxs(Gc,{children:[y.jsx(Yc,{children:"약력"}),m(a)]}),y.jsxs(Gc,{children:[y.jsx(Yc,{children:"전문 분야"}),m(o)]})]})]})})}sg.propTypes={nameKor:Z.string.isRequired,rank:Z.string.isRequired,eMail:Z.string.isRequired,education:Z.oneOfType([Z.string,Z.arrayOf(Z.string)]),field:Z.oneOfType([Z.string,Z.arrayOf(Z.string)]),imgSrc:Z.string.isRequired,imgAlt:Z.string.isRequired};sg.defaultProps={nameKor:"홍길동",rank:"교수",eMail:"honggildong@example.com",education:[],field:[],imgSrc:"/thumbnailExample.png",imgAlt:"홍길동 교수의 프로필 이미지"};const og=JSON.parse('[{"num":0,"nameKor":"강유진","nameEng":"Kang Yujin","role":"3D Modeler","department":1,"professorId":"p04","studentId":2021194003,"eMail":"rkddbwls0404@gmail.com","sns":"-","imgUrl":"../image/0/portrait.jpg","category":"c4","projectNum":45,"team":1,"leader":0},{"num":1,"nameKor":"고명현","nameEng":"Go Myeonghyeon","role":"Product Designer","department":1,"professorId":"p03","studentId":2019190002,"eMail":"harczail.76@gmail.com","sns":"@_archive.hynn","imgUrl":"../image/1/portrait.jpg","category":"c0","projectNum":0,"team":0,"leader":""},{"num":2,"nameKor":"고서영","nameEng":"Go Seoyeong","role":"3d Product Designer","department":0,"professorId":"p02","studentId":2022190001,"eMail":"rhtjdud2003@naver.com","sns":"@se_o.o_","imgUrl":"../image/2/portrait.jpg","category":"c2","projectNum":26,"team":1,"leader":0},{"num":3,"nameKor":"고은솔","nameEng":"Ko Eunsol","role":"UX/UI Designer","department":1,"professorId":"p01","studentId":2021194005,"eMail":"soolu202@naver.com","sns":"@sol20_27","imgUrl":"../image/3/portrait.jpg","category":"c1","projectNum":24,"team":0,"leader":""},{"num":4,"nameKor":"구예진","nameEng":"Koo Yejin","role":"UX/UI Designer","department":1,"professorId":"p03","studentId":2022194002,"eMail":"yejk63@gmail.com","sns":"@yeahz_n","imgUrl":"../image/4/portrait.jpg","category":"c2","projectNum":27,"team":1,"leader":1},{"num":5,"nameKor":"구인회","nameEng":"Koo Inhoe","role":"Industrial Designer","department":0,"professorId":"p02","studentId":2020190001,"eMail":"eric2261@naver.com","sns":"@dlsghl01_","imgUrl":"../image/5/portrait.jpg","category":"c5","projectNum":66,"team":1,"leader":1},{"num":6,"nameKor":"권유빈","nameEng":"Kwon Yoobeen","role":"UX/UI Designer","department":1,"professorId":"p02","studentId":2020194002,"eMail":"yoobeenkwon@gmail.com","sns":"@yoovebeen","imgUrl":"../image/6/portrait.jpg","category":"c2","projectNum":26,"team":1,"leader":1},{"num":7,"nameKor":"권지민","nameEng":"Kwon Jimin","role":"UX/UI Designer","department":1,"professorId":"p03","studentId":2022194038,"eMail":"jmnee0115@naver.com","sns":"@j_minee_e","imgUrl":"../image/7/portrait.jpg","category":"c4","projectNum":46,"team":0,"leader":""},{"num":8,"nameKor":"김강민","nameEng":"Kim Gangmin","role":"Mobility Designer","department":0,"professorId":"p04","studentId":2020192003,"eMail":"min7053@naver.com","sns":"@krkdals.m","imgUrl":"../image/8/portrait.jpg","category":"c5","projectNum":67,"team":1,"leader":1},{"num":9,"nameKor":"김기윤","nameEng":"Kim Giyun","role":"Industrial Designer","department":0,"professorId":"p02","studentId":2020190002,"eMail":"tkenrnen112@tukorea.ac.kr","sns":"@gi_yunk","imgUrl":"../image/9/portrait.jpg","category":"c5","projectNum":68,"team":1,"leader":0},{"num":10,"nameKor":"김동주","nameEng":"Kim Dongju","role":"Product Designer","department":0,"professorId":"p00","studentId":2020190005,"eMail":"dongdongju3144@naver.com","sns":"@doongjuu_","imgUrl":"../image/10/portrait.jpg","category":"c3","projectNum":34,"team":0,"leader":""},{"num":11,"nameKor":"김민석","nameEng":"Kim Minseok","role":"Product Designer","department":0,"professorId":"p02","studentId":2020190006,"eMail":"@eneu201@gmail.com","sns":"@mskk.01","imgUrl":"../image/11/portrait.jpg","category":"c4","projectNum":47,"team":0,"leader":""},{"num":12,"nameKor":"김세린","nameEng":"Kim Serin","role":"Product Designer","department":0,"professorId":"p04","studentId":2021192006,"eMail":"kara7094@naver.com","sns":"@ssal._.bap","imgUrl":"../image/12/portrait.jpg","category":"c4","projectNum":48,"team":0,"leader":""},{"num":13,"nameKor":"김소리","nameEng":"Kim Sori","role":"UXUI Designer","department":1,"professorId":"p03","studentId":2021194037,"eMail":"mulsik11@gmail.com","sns":"@sorisorry_","imgUrl":"../image/13/portrait.jpg","category":"c4","projectNum":49,"team":0,"leader":""},{"num":14,"nameKor":"김예린","nameEng":"Kim Yerin","role":"Industrial Designer","department":0,"professorId":"p02","studentId":2021190007,"eMail":"kkye.0204@gmail.com","sns":"@_y.rin_","imgUrl":"../image/14/portrait.jpg","category":"c5","projectNum":69,"team":0,"leader":""},{"num":15,"nameKor":"김예준","nameEng":"Kim Yejun","role":"UX/UI, Front-End","department":1,"professorId":"p01","studentId":2020194006,"eMail":"optimusjun15@naver.com","sns":"@yeah_jun_0228","imgUrl":"../image/15/portrait.jpg","category":"c4","projectNum":50,"team":0,"leader":""},{"num":16,"nameKor":"김윤곤","nameEng":"Kim Yungon","role":"Front Designer","department":1,"professorId":"p03","studentId":2020194008,"eMail":"yunkon0722@gmail.com","sns":"@0123456789on","imgUrl":"../image/16/portrait.jpg","category":"c0","projectNum":1,"team":0,"leader":""},{"num":17,"nameKor":"김윤서","nameEng":"Kim Yunseo","role":"UX/UI Designer","department":1,"professorId":"p02","studentId":2021192007,"eMail":"thtpwl39@tukorea.ac.kr","sns":"@kyuunsoo","imgUrl":"../image/17/portrait.jpg","category":"c4","projectNum":51,"team":0,"leader":""},{"num":18,"nameKor":"김윤성","nameEng":"Kim Yunseong","role":"3D Modeling","department":0,"professorId":"p00","studentId":2020192038,"eMail":"dbstjd9063@gmail.com","sns":"@kimyyuun","imgUrl":"../image/18/portrait.jpg","category":"c0","projectNum":2,"team":0,"leader":""},{"num":19,"nameKor":"김주은","nameEng":"Kim Jueun","role":"UX/UI, HTML Coder","department":1,"professorId":"p02","studentId":2022194007,"eMail":"kimjueun58@gmail.com","sns":"-","imgUrl":"../image/19/portrait.jpg","category":"c2","projectNum":28,"team":1,"leader":0},{"num":20,"nameKor":"김지민","nameEng":"Kim Jimin","role":"Art Director & 2D","department":0,"professorId":"p02","studentId":2020190011,"eMail":"a01039029588@gmail.com","sns":"@oui_parfum_tuk23","imgUrl":"../image/20/portrait.jpg","category":"c3","projectNum":35,"team":1,"leader":0},{"num":21,"nameKor":"김지혜","nameEng":"Kim Jihye","role":"Concept, Rendering","department":0,"professorId":"p05","studentId":2021190012,"eMail":"kjj0209077@naver.com","sns":"@istriioi","imgUrl":"../image/21/portrait.jpg","category":"c5","projectNum":70,"team":1,"leader":1},{"num":22,"nameKor":"김한슬","nameEng":"Kim Hanseul","role":"Product Designer","department":0,"professorId":"p04","studentId":2021192008,"eMail":"mns816@turkorea.ac.kr","sns":"@mnsul_2","imgUrl":"../image/22/portrait.jpg","category":"c3","projectNum":36,"team":0,"leader":""},{"num":23,"nameKor":"남가림","nameEng":"Nam Garim","role":"Product Designer","department":0,"professorId":"p00","studentId":2021190014,"eMail":"garim0402@naver.com","sns":"@ga_rim__","imgUrl":"../image/23/portrait.jpg","category":"c5","projectNum":71,"team":1,"leader":1},{"num":24,"nameKor":"남궁두경","nameEng":"Namgoong Doogyung","role":"Prototype","department":0,"professorId":"p05","studentId":2020192012,"eMail":"dkyung1919@naver.com","sns":"@munamunyeojung.9","imgUrl":"../image/24/portrait.jpg","category":"c0","projectNum":3,"team":1,"leader":1},{"num":25,"nameKor":"노희재","nameEng":"Roe Heejae","role":"Interaction Designer","department":0,"professorId":"p02","studentId":2019192013,"eMail":"wjdrl1144@gmail.com","sns":"@heejae_po","imgUrl":"../image/25/portrait.jpg","category":"c3","projectNum":37,"team":0,"leader":""},{"num":26,"nameKor":"마은성","nameEng":"Ma Eunseong","role":"3D Modeling","department":0,"professorId":"p05","studentId":2021190016,"eMail":"mes3788@naver.com","sns":"@iam._.es","imgUrl":"../image/26/portrait.jpg","category":"c5","projectNum":70,"team":1,"leader":0},{"num":27,"nameKor":"문나라","nameEng":"Moon Nara","role":"Product Designer","department":0,"professorId":"p02","studentId":2021192009,"eMail":"skfk020529@naver.com","sns":"@nnoom_r","imgUrl":"../image/27/portrait.jpg","category":"c3","projectNum":38,"team":0,"leader":""},{"num":28,"nameKor":"문지형","nameEng":"Moon Jihyeong","role":"Art Director","department":0,"professorId":"p05","studentId":2020192014,"eMail":"dogtable4099@naver.com","sns":"@puer.deisgn","imgUrl":"../image/28/portrait.jpg","category":"c0","projectNum":3,"team":1,"leader":0},{"num":29,"nameKor":"민혜연","nameEng":"Min Hyeyeon","role":"Art Director","department":0,"professorId":"p00","studentId":2022192010,"eMail":"hime4ma.y@gmail.com","sns":"@kid.mugi","imgUrl":"../image/29/portrait.jpg","category":"c2","projectNum":29,"team":0,"leader":""},{"num":30,"nameKor":"박민규","nameEng":"Park Mingyu","role":"Application Designer","department":1,"professorId":"p03","studentId":2019194041,"eMail":"mingyu6393@naver.com","sns":"@min.gyu7791","imgUrl":"../image/30/portrait.jpg","category":"c0","projectNum":4,"team":0,"leader":""},{"num":31,"nameKor":"박서영","nameEng":"Park Seoyoung","role":"Product Designer","department":1,"professorId":"p03","studentId":2021192011,"eMail":"pszer0@naver.com","sns":"@ps.zer0","imgUrl":"../image/31/portrait.jpg","category":"c4","projectNum":52,"team":0,"leader":""},{"num":32,"nameKor":"박예인","nameEng":"Park Yein","role":"Prototype","department":1,"professorId":"p01","studentId":2021194013,"eMail":"pyi0413@naver.com","sns":"@p5_baguette","imgUrl":"../image/32/portrait.jpg","category":"c4","projectNum":45,"team":1,"leader":1},{"num":33,"nameKor":"박예진","nameEng":"Park Yejin","role":"Product Designer","department":0,"professorId":"p00","studentId":2021190018,"eMail":"yejin6607@naver.com","sns":"@yejin6607","imgUrl":"../image/33/portrait.jpg","category":"c5","projectNum":71,"team":1,"leader":0},{"num":34,"nameKor":"박재민","nameEng":"Park Jaemin","role":"Web 3D/XR Designer","department":1,"professorId":"p03","studentId":2020192016,"eMail":"shiibadog@tukorea.ac.kr","sns":"@jaemino_ob","imgUrl":"../image/34/portrait.jpg","category":"c2","projectNum":27,"team":1,"leader":0},{"num":35,"nameKor":"박정훈","nameEng":"Park Jeonghun","role":"Industrial Designer","department":0,"professorId":"p05","studentId":2022192012,"eMail":"2022192012@tukorea.ac.kr","sns":"-","imgUrl":"../image/35/portrait.jpg","category":"c2","projectNum":30,"team":0,"leader":""},{"num":36,"nameKor":"박지수","nameEng":"Park Jisoo","role":"UX/UI Designer","department":1,"professorId":"p03","studentId":2021194014,"eMail":"popopo020128@gmail.com","sns":"@dujs_b","imgUrl":"../image/36/portrait.jpg","category":"c0","projectNum":5,"team":0,"leader":""},{"num":37,"nameKor":"박해인","nameEng":"Park Haein","role":"Front Designer","department":0,"professorId":"p06","studentId":2022192014,"eMail":"2022192014@tukorea.ac.kr","sns":"-","imgUrl":"../image/37/portrait.jpg","category":"c5","projectNum":72,"team":0,"leader":""},{"num":38,"nameKor":"박현","nameEng":"Park Hyun","role":"Designer Director","department":0,"professorId":"p04","studentId":2022190039,"eMail":"parkhyun920@naver.com","sns":"-","imgUrl":"../image/38/portrait.jpg","category":"c4","projectNum":53,"team":1,"leader":1},{"num":39,"nameKor":"박혜성","nameEng":"Park Hyeseong","role":"Furniture Designer","department":0,"professorId":"p00","studentId":2021190020,"eMail":"hyesungpark1128@gmail.com","sns":"@comet_design02","imgUrl":"../image/39/portrait.jpg","category":"c5","projectNum":73,"team":0,"leader":""},{"num":40,"nameKor":"박효정","nameEng":"Park Hyojung","role":"UX/UI Designer","department":0,"professorId":"p02","studentId":2021190021,"eMail":"2021190021@tukorea.ac.kr","sns":"-","imgUrl":"../image/40/portrait.jpg","category":"c4","projectNum":54,"team":0,"leader":""},{"num":41,"nameKor":"배아영","nameEng":"Bae Ayeong","role":"UX/UI Designer","department":1,"professorId":"p01","studentId":2022194014,"eMail":"your3ami@tukorea.ac.kr","sns":"-","imgUrl":"../image/41/portrait.jpg","category":"c0","projectNum":6,"team":0,"leader":""},{"num":42,"nameKor":"배혜림","nameEng":"Bae Hyelim","role":"Industrial Designer","department":0,"professorId":"p05","studentId":2021192013,"eMail":"mil2021@tukorea.ac.kr","sns":"-","imgUrl":"../image/42/portrait.jpg","category":"c0","projectNum":7,"team":1,"leader":0},{"num":43,"nameKor":"백대한","nameEng":"Baek Daehan","role":"Product Designer","department":0,"professorId":"p05","studentId":2020192039,"eMail":"eifasfkifk@gmail.com","sns":"-","imgUrl":"../image/43/portrait.jpg","category":"c0","projectNum":8,"team":0,"leader":""},{"num":44,"nameKor":"백미나","nameEng":"Baek Mina","role":"Graphic designer","department":0,"professorId":"p06","studentId":2021190023,"eMail":"wbwyhr@naver.com","sns":"@oeuvreb","imgUrl":"../image/44/portrait.jpg","category":"c4","projectNum":55,"team":0,"leader":""},{"num":45,"nameKor":"서연주","nameEng":"Seo Yeonju","role":"UI/UX,HTML Coder","department":1,"professorId":"p02","studentId":2022194015,"eMail":"syj0305290529@gmail.com","sns":"@yeonju._0","imgUrl":"../image/45/portrait.jpg","category":"c2","projectNum":28,"team":1,"leader":1},{"num":46,"nameKor":"서원진","nameEng":"Seo Wonjin","role":"Living Product Designer","department":0,"professorId":"p05","studentId":2019152026,"eMail":"swj000324@gmail.com","sns":"@wonjin0324","imgUrl":"../image/46/portrait.jpg","category":"c4","projectNum":56,"team":0,"leader":""},{"num":47,"nameKor":"석동현","nameEng":"Suk Donghyun","role":"Visual Director","department":0,"professorId":"p06","studentId":2020190015,"eMail":"andysuk0108@naver.com","sns":"@hyun_108","imgUrl":"../image/47/portrait.jpg","category":"c5","projectNum":66,"team":1,"leader":0},{"num":48,"nameKor":"성수민","nameEng":"Seong Sumin","role":"JS, Flask Prototype","department":1,"professorId":"p02","studentId":2020194016,"eMail":"epwyqqu309@gmail.com","sns":"-","imgUrl":"../image/48/portrait.jpg","category":"c3","projectNum":39,"team":1,"leader":1},{"num":49,"nameKor":"성유승","nameEng":"Sung Yuseung","role":"UX/UI, Prototype","department":1,"professorId":"p02","studentId":2019122021,"eMail":"usngsung0830@naver.com","sns":"@u_seung0830","imgUrl":"../image/49/portrait.jpg","category":"c1","projectNum":25,"team":1,"leader":0},{"num":50,"nameKor":"송지원","nameEng":"Song Jiwon","role":"Creative Designer","department":0,"professorId":"p04","studentId":2021190024,"eMail":"wldnjs0762@naver.com","sns":"@7.27_v","imgUrl":"../image/50/portrait.jpg","category":"c0","projectNum":9,"team":1,"leader":1},{"num":51,"nameKor":"신산하","nameEng":"Shin Sanha","role":"UX/UI Designer","department":1,"professorId":"p02","studentId":2021192014,"eMail":"sanha@tukorea.ac.kr","sns":"@sanamonii","imgUrl":"../image/51/portrait.jpg","category":"c3","projectNum":39,"team":1,"leader":0},{"num":52,"nameKor":"신주혜","nameEng":"Shin Juhye","role":"Product Designer","department":0,"professorId":"p05","studentId":2022190019,"eMail":"grace04god@tukorea.ac.kr","sns":"-","imgUrl":"../image/52/portrait.jpg","category":"c0","projectNum":10,"team":1,"leader":0},{"num":53,"nameKor":"신주희","nameEng":"Shin Juhui","role":"PM · UX/UI · Dev","department":1,"professorId":"p07","studentId":2022194016,"eMail":"lucytomato@naver.com","sns":"@krhee_o","imgUrl":"../image/53/portrait.jpg","category":"c3","projectNum":40,"team":0,"leader":""},{"num":54,"nameKor":"심태섭","nameEng":"Sim Taeseob","role":"UX/UI, Prototype","department":1,"professorId":"p01","studentId":2020194017,"eMail":"1212sts@naver.com","sns":"@tlaxotjq","imgUrl":"../image/54/portrait.jpg","category":"c0","projectNum":11,"team":0,"leader":""},{"num":55,"nameKor":"안상은","nameEng":"An Sangeun","role":"Product Designer","department":1,"professorId":"p03","studentId":2022194018,"eMail":"iltkddms@tukorea.ac.kr","sns":"@in_saengeun","imgUrl":"../image/55/portrait.jpg","category":"c4","projectNum":57,"team":1,"leader":1},{"num":56,"nameKor":"염수민","nameEng":"Yeom Sumin","role":"UX/UI, Prototype","department":1,"professorId":"p01","studentId":2022194021,"eMail":"yeommin2528@gmail.com","sns":"-","imgUrl":"../image/56/portrait.jpg","category":"c4","projectNum":58,"team":0,"leader":""},{"num":57,"nameKor":"유수현","nameEng":"Ryu Soohyun","role":"Modeling, UX/UI","department":0,"professorId":"p06","studentId":2022192019,"eMail":"suhyeon9145@naver.com","sns":"@dbtn_246","imgUrl":"../image/57/portrait.jpg","category":"c2","projectNum":31,"team":1,"leader":1},{"num":58,"nameKor":"윤모란","nameEng":"Yoon Moran","role":"Modeling, Rendering","department":0,"professorId":"p06","studentId":2022190024,"eMail":"moran_a_486@naver.com","sns":"-","imgUrl":"../image/58/portrait.jpg","category":"c2","projectNum":31,"team":1,"leader":0},{"num":59,"nameKor":"윤서희","nameEng":"Yoon Seohee","role":"Product Designer","department":0,"professorId":"p00","studentId":2020192021,"eMail":"dbstjgml000@naver.com","sns":"@hi_seoheeeee","imgUrl":"../image/59/portrait.jpg","category":"c0","projectNum":12,"team":0,"leader":""},{"num":60,"nameKor":"윤재익","nameEng":"Yun Jaeik","role":"Art Director","department":1,"professorId":"p01","studentId":2020194018,"eMail":"jwodlr10014@naver.com","sns":"@bpink._.j","imgUrl":"../image/60/portrait.jpg","category":"c0","projectNum":13,"team":0,"leader":""},{"num":61,"nameKor":"이교연","nameEng":"Lee Gyoyeon","role":"Product,Graphic","department":0,"professorId":"p01","studentId":2022192038,"eMail":"inacutewaytoday@gmail.com","sns":"-","imgUrl":"../image/61/portrait.jpg","category":"c2","projectNum":32,"team":0,"leader":""},{"num":62,"nameKor":"이도훈","nameEng":"Lee Dohun","role":"Mobility Designer","department":0,"professorId":"p02","studentId":2020190025,"eMail":"bestson0137@tukorea.ac.kr","sns":"@dl_doh","imgUrl":"../image/62/portrait.jpg","category":"c5","projectNum":74,"team":0,"leader":""},{"num":63,"nameKor":"이민욱","nameEng":"Lee Minuk","role":"Product Designer","department":1,"professorId":"p01","studentId":2020194021,"eMail":"lmu0306@naver.com","sns":"-","imgUrl":"../image/63/portrait.jpg","category":"c4","projectNum":59,"team":0,"leader":""},{"num":64,"nameKor":"이상","nameEng":"Lee Sang","role":"Industrial Designer","department":0,"professorId":"p02","studentId":2020190027,"eMail":"23isgood@naver.com","sns":"@leesang2001","imgUrl":"../image/64/portrait.jpg","category":"c3","projectNum":35,"team":1,"leader":1},{"num":65,"nameKor":"이영","nameEng":"Lee Young","role":"Product Designer","department":1,"professorId":"p03","studentId":2022194025,"eMail":"young2003@tukorea.ac.kr","sns":"@username","imgUrl":"../image/65/portrait.jpg","category":"c4","projectNum":57,"team":1,"leader":0},{"num":66,"nameKor":"이영재","nameEng":"Lee Youngjae","role":"Product Designer","department":1,"professorId":"p03","studentId":2020194023,"eMail":"roiray0320@gmail.com","sns":"@6amtol","imgUrl":"../image/66/portrait.jpg","category":"c0","projectNum":14,"team":1,"leader":0},{"num":67,"nameKor":"이웅찬","nameEng":"Lee Woongchan","role":"Product Designer","department":0,"professorId":"p02","studentId":2020192028,"eMail":"dldndcks01@naver.com","sns":"@eedndcks","imgUrl":"../image/67/portrait.jpg","category":"c3","projectNum":41,"team":0,"leader":""},{"num":68,"nameKor":"이준오","nameEng":"Lee Juno","role":"Graphic, 3D, UI/UX","department":0,"professorId":"p00","studentId":2020190030,"eMail":"ljuno421@naver.com","sns":"@jun_duck0421","imgUrl":"../image/68/portrait.jpg","category":"c0","projectNum":15,"team":1,"leader":1},{"num":69,"nameKor":"이지민","nameEng":"Lee Jimin","role":"UX/UI, Prototype","department":1,"professorId":"p02","studentId":2020194026,"eMail":"ibs7533@naver.com","sns":"@minigmin_1004","imgUrl":"../image/69/portrait.jpg","category":"c1","projectNum":25,"team":1,"leader":1},{"num":70,"nameKor":"이지현","nameEng":"Lee Jihyeon","role":"Drone Designer","department":0,"professorId":"p04","studentId":2022192023,"eMail":"lanius4257@tukorea.ac.kr","sns":"@__jiwawa__","imgUrl":"../image/70/portrait.jpg","category":"c5","projectNum":67,"team":1,"leader":0},{"num":71,"nameKor":"이채연","nameEng":"Lee Chaeyeon","role":"UX/UI, Front-End","department":1,"professorId":"p07","studentId":2021194022,"eMail":"cvgh6835@naver.com","sns":"@cvgh._.ly","imgUrl":"../image/71/portrait.jpg","category":"c0","projectNum":16,"team":0,"leader":""},{"num":72,"nameKor":"이채원","nameEng":"Lee Chaewon","role":"Product Designer","department":0,"professorId":"p06","studentId":2022192024,"eMail":"chaerry3907@naver.com","sns":"@chae_rr","imgUrl":"../image/72/portrait.jpg","category":"c0","projectNum":7,"team":1,"leader":1},{"num":73,"nameKor":"이채원","nameEng":"Lee Chaewon","role":"Product Designer","department":1,"professorId":"p03","studentId":2021194023,"eMail":"mondyu1024@gmail.com","sns":"@di_ed_ie","imgUrl":"../image/73/portrait.jpg","category":"c0","projectNum":14,"team":1,"leader":1},{"num":74,"nameKor":"임세준","nameEng":"Im Sejun","role":"Product Designer","department":0,"professorId":"p04","studentId":2019190043,"eMail":"helicat123@naver.com","sns":"-","imgUrl":"../image/74/portrait.jpg","category":"c5","projectNum":75,"team":1,"leader":1},{"num":75,"nameKor":"임소이","nameEng":"Yim Soie","role":"3d Designer","department":0,"professorId":"p05","studentId":2022190030,"eMail":"soie0410@tukorea.ac.kr","sns":"@idiox_1","imgUrl":"../image/75/portrait.jpg","category":"c0","projectNum":17,"team":1,"leader":1},{"num":76,"nameKor":"임종석","nameEng":"Lim Jongseok","role":"Product Designer","department":0,"professorId":"p06","studentId":2020192032,"eMail":"rimjs01@tukorea.ac.kr","sns":"@im_seok01","imgUrl":"../image/76/portrait.jpg","category":"c0","projectNum":18,"team":0,"leader":""},{"num":77,"nameKor":"전준범","nameEng":"Jeon Junbeom","role":"UX, 3D Graphics","department":1,"professorId":"p01","studentId":2021194028,"eMail":"@jb_jeon@naver.com","sns":"@imdiverstandinoncliff","imgUrl":"../image/77/portrait.jpg","category":"c4","projectNum":60,"team":0,"leader":""},{"num":78,"nameKor":"정문선","nameEng":"Jung Moonsun","role":"UX/UI Designer","department":0,"professorId":"p02","studentId":2020190033,"eMail":"munseon9822@naver.com","sns":"@moooon_suuuuuun","imgUrl":"../image/78/portrait.jpg","category":"c3","projectNum":42,"team":0,"leader":""},{"num":79,"nameKor":"정민호","nameEng":"Jung Minho","role":"Industrial Designer","department":0,"professorId":"p04","studentId":2020190034,"eMail":"jmh011014@naver.com","sns":"@j_m2nh5","imgUrl":"../image/79/portrait.jpg","category":"c5","projectNum":68,"team":1,"leader":1},{"num":80,"nameKor":"정유진","nameEng":"Jung Yuzin","role":"Product Designer","department":0,"professorId":"p05","studentId":2022190033,"eMail":"akf0301@naver.com","sns":"@jhin0112__","imgUrl":"../image/80/portrait.jpg","category":"c5","projectNum":76,"team":0,"leader":""},{"num":81,"nameKor":"정지원","nameEng":"Jung Jiwon","role":"3D Designer","department":0,"professorId":"p06","studentId":2022192025,"eMail":"marcellar1071@gmail.com","sns":"@stopmongkki","imgUrl":"../image/81/portrait.jpg","category":"c0","projectNum":17,"team":1,"leader":0},{"num":82,"nameKor":"정혜원","nameEng":"Jeong Hyewon","role":"Visual Designer","department":0,"professorId":"p06","studentId":2021190034,"eMail":"jhw275@naver.com","sns":"-","imgUrl":"../image/82/portrait.jpg","category":"c0","projectNum":10,"team":1,"leader":1},{"num":83,"nameKor":"정혜조","nameEng":"Jeong Hyejo","role":"3D Designer","department":0,"professorId":"p00","studentId":2022192028,"eMail":"hyejo5614@naver.com","sns":"@11.7OK","imgUrl":"../image/83/portrait.jpg","category":"c4","projectNum":61,"team":0,"leader":""},{"num":84,"nameKor":"정호균","nameEng":"Jeong Hokyun","role":"UX/UI","department":1,"professorId":"p01","studentId":2020194031,"eMail":"hohokyun@naver.com","sns":"-","imgUrl":"../image/84/portrait.jpg","category":"c4","projectNum":62,"team":0,"leader":""},{"num":85,"nameKor":"조선화","nameEng":"Jo Sunhwa","role":"Visual Designer","department":0,"professorId":"p04","studentId":2022192039,"eMail":"jo5629@naver.com","sns":"@_sh_1114_","imgUrl":"../image/85/portrait.jpg","category":"c4","projectNum":53,"team":1,"leader":0},{"num":86,"nameKor":"조채빈","nameEng":"Cho Chaebin","role":"Robot Designer","department":0,"professorId":"p00","studentId":2021192029,"eMail":"chea0000@tukorea.ac.kr","sns":"-","imgUrl":"../image/86/portrait.jpg","category":"c0","projectNum":19,"team":0,"leader":""},{"num":87,"nameKor":"주예지","nameEng":"Ju Yeji","role":"UX/UI","department":1,"professorId":"p03","studentId":2022194040,"eMail":"jooyeiji@naver.com","sns":"@yej1__","imgUrl":"../image/87/portrait.jpg","category":"c0","projectNum":20,"team":0,"leader":""},{"num":88,"nameKor":"진세원","nameEng":"Jin Sewon","role":"Product & Visual","department":0,"professorId":"p00","studentId":2022192030,"eMail":"sewoneee@naver.com","sns":"@jinsewon99","imgUrl":"../image/88/portrait.jpg","category":"c0","projectNum":15,"team":1,"leader":0},{"num":89,"nameKor":"진효민","nameEng":"Jin Hyomin","role":"Living Designer","department":0,"professorId":"p07","studentId":2022190040,"eMail":"jhm8912@naver.com","sns":"@hyomin_eao","imgUrl":"../image/89/portrait.jpg","category":"c4","projectNum":63,"team":0,"leader":""},{"num":90,"nameKor":"차소이","nameEng":"Cha Soyi","role":"Industrial Designer","department":0,"professorId":"p06","studentId":2022192040,"eMail":"osjj2202@naver.com","sns":"@cow__tooth","imgUrl":"../image/90/portrait.jpg","category":"c0","projectNum":21,"team":0,"leader":""},{"num":91,"nameKor":"차한비","nameEng":"Cha Hanbi","role":"Product Designer","department":0,"professorId":"p02","studentId":2022192031,"eMail":"cha4786@naver.com","sns":"@raincar__","imgUrl":"../image/91/portrait.jpg","category":"c2","projectNum":33,"team":0,"leader":""},{"num":92,"nameKor":"최가현","nameEng":"Choi Gahyun","role":"XR Controller","department":1,"professorId":"p07","studentId":2022194034,"eMail":"poiulkjhmnb098@naver.com","sns":"@_.ga._.xx","imgUrl":"../image/92/portrait.jpg","category":"c3","projectNum":43,"team":0,"leader":""},{"num":93,"nameKor":"한채원","nameEng":"Han Chaewon","role":"Product Design","department":0,"professorId":"p04","studentId":2021190036,"eMail":"2chaetwo@gmail.com","sns":"@1chaeone","imgUrl":"../image/93/portrait.jpg","category":"c4","projectNum":64,"team":0,"leader":""},{"num":94,"nameKor":"함은서","nameEng":"Ham Eunseo","role":"UX/UI Designer","department":1,"professorId":"p03","studentId":2021192034,"eMail":"hamunseo0894@naver.com","sns":"@hama_pit_a_pat","imgUrl":"../image/94/portrait.jpg","category":"c0","projectNum":22,"team":0,"leader":""},{"num":95,"nameKor":"허도윤","nameEng":"Heo Doyun","role":"UX/UI","department":1,"professorId":"p03","studentId":2022194041,"eMail":"saver2075@icloud.com","sns":"-","imgUrl":"../image/95/portrait.jpg","category":"c3","projectNum":44,"team":0,"leader":""},{"num":96,"nameKor":"허지유","nameEng":"Heo Jiyu","role":"Art Director","department":0,"professorId":"p04","studentId":2021192035,"eMail":"jjoojjoo0314@naver.com","sns":"@ji._.iu","imgUrl":"../image/96/portrait.jpg","category":"c0","projectNum":9,"team":1,"leader":0},{"num":97,"nameKor":"홍승재","nameEng":"Hong Seungjae","role":"Product Designer","department":0,"professorId":"p02","studentId":2020192036,"eMail":"h010505@naver.com","sns":"@dent__de","imgUrl":"../image/97/portrait.jpg","category":"c4","projectNum":65,"team":0,"leader":""},{"num":98,"nameKor":"홍지우","nameEng":"Hong Jiwoo","role":"Art Director","department":0,"professorId":"p04","studentId":2021192036,"eMail":"hongjiwoo222@gmail.com","sns":"@ghdwldnnn","imgUrl":"../image/98/portrait.jpg","category":"c5","projectNum":75,"team":1,"leader":0},{"num":99,"nameKor":"황수정","nameEng":"Hwang Sujeong","role":"3D Designer","department":0,"professorId":"p05","studentId":2022190036,"eMail":"bvnm1234@tukorea.ac.kr","sns":"@suj2ong","imgUrl":"../image/99/portrait.jpg","category":"c0","projectNum":23,"team":0,"leader":""}]'),dR=[{id:"p00",nameKor:"장영주",nameEng:"Jang Youngjoo",rank:"학부장, 교수",email:"jyj@tukorea.ac.kr",education:["㈜LG 전자 디자인 연구소","㈜인터디자인 디자인 기획실장","한국디지털디자인학회 이사","경기도 시흥시 정책기획단 정책위원","제품디자인·브랜드 개발센터 [EH]책임교수","디자인비지니스혁신 센터장"],field:["제품디자인·브랜드 개발","디자인 조직과 협동적 Process","제품디자인과 산업기술의 통합적 시스템 구축"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524695988100.jpg"},{id:"p01",nameKor:"권오재",nameEng:"Kwon Ojae",rank:"교수",email:"kwsokw@tukorea.ac.kr",education:["㈜키메이커스 대표이사","㈜삼성전자 디자인경영센터 UX연구소 그룹장","㈜LG전자 디자인종합연구소 가전제품팀 연구원","서울 성북구청, 용인시 디자인위원","ESK / KOSES / KADI 이사, 서비스디자인학회 사업부회장","2016 대한민국 ICT INNOVATION 대상 미래부장관 유공자 표창"],field:["UX 기반 제품/서비스 디자인 기획 및 양산화 개발","제품 인터페이스 UI 분석 및 UI 설계","제품디자인, 설계 및 양산용 제품 개발","사용자의 감성을 자극하는 밸류 체인(Value Chain) 요인 연구"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524642556100.jpg"},{id:"p02",nameKor:"김 억",nameEng:"Kim Eok",rank:"교수, 학생처장",email:"kimeok@tukorea.ac.kr",education:["㈜LG전자 디자인경영센터 선임연구원","KAIST 총동문회 이사","한국산업디자이너협회 이사 / 한국서비스디자인학회 이사","한국디자인기초조형학회 / 한국디자인학회 이사","디자인융합전문대학원 사업단장"],field:["디자인 전략 및 기획","서비스디자인 및 PSS(Product-Service System) 개발","도시 공공 디자인"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524658322100.jpg"},{id:"p03",nameKor:"김한종",nameEng:"Kim Hanjong",rank:"조교수, PD교수",email:"hanjongkim@tukorea.ac.kr",education:["AR 기반의 인터랙티브 제품 프로토타이핑 도구 개발","이동형음압병동의 디자인 요구사항 수립 연구","이동형음압병동 설계를 위한 디자인 도구 개발","한국기계연구원 산업용 SW UX/UI 가이드라인 개발"],field:["Web 기반 3D 그래픽스","SW 시스템 디자인 / 프론트엔드 개발","디자인 지원 도구 개발"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524669896100.jpg"},{id:"p04",nameKor:"조남주",nameEng:"Jo Namjoo",rank:"교수,특별보좌역",email:"njjoh@tukorea.ac.kr",education:["서울특별시 서울디자인위원회 심의위원","국립공원관리공단 디자인 분야 자문위원","'디자인코리아 2003'국제회의 패널리스트","㈜현대 리바트 가구 디자인아웃소싱 프로젝트"],field:["가구 디자인 엔지니어링","지속가능한 공공디자인","제품디자인 엔지니어링"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524711232100.jpg"},{id:"p05",nameKor:"한민섭",nameEng:"Han Minseop",rank:"부교수",email:"mshan@tukorea.ac.kr",education:["CISD정보저장기기 연구센터 전문연구원","㈜코닝 정밀소재 책임연구원","㈜삼성전자 생산기술연구소 책임연구원"],field:["나노/마이크로 초정밀 미세 가공 공정","Equipment H/W 설계 및 시뮬레이션","융복합 가공 시스템 설계"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524614469100.jpg"},{id:"p06",nameKor:"홍성수",nameEng:"Hong Seongsu",rank:"교수, 국제처장",email:"hss@tukorea.ac.kr",education:["3차원 의료영상시스템(MRI) 제품설계 및 디자인","다족형견마로봇 / 헬스케어로봇 / 재활보조로봇","식사보조로봇/ 수중로봇/ 청소로봇 / 웨어러블 로봇","협동로봇/ 자율주행로봇/ 순찰로봇/ 공항안내로봇 등 90여종 로봇 개발"],field:["로봇 시스템 개발/ 로봇디자인/ HRI 디자인","로봇 문화콘텐츠 기술개발","신기술 전시기획/ 전시시스템개발"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524724386100.jpg"},{id:"p07",nameKor:"김태균",nameEng:"Kim Taekyun",rank:"조교수, 진로취업지도교수",email:"tgkim1design@tukorea.ac.kr",education:["영국, 영국 국제디자인박람회전시 ‘London 100% Design‘ 초청 출품","중국, SUPER DESIGNERS: Exploration of Creative Forms, The Boundaries of Design Forms 초청 출품","INNOCHINA 대상","나는글로벌벤처다 동상","Spark Awards-Silver"],field:["AI 기반 제품·공공시설물 디자인 실무·방법론","UX 중심 디자인 전략·개발","지식 주도 디자인 아이디에이션 기반 실무 디자인 설계 및 교수법"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1724738930608100.jpg"}],eu=JSON.parse(`[{"members":[1],"category":"c0","projectNum":0,"titleKor":"체계적인 아이디어 발전을 위한 AI기반 디자인 실험 워크스페이스","titleEng":"IDEA UNION LAB","description":"IDEA UNION LAB은 아이디어 발전 과정에서 어려움을 겪는 디자이너를 위한 AI 기반 디자인 실험실 서비스입니다. 단순히 AI에게 디자인 결과물을 요청하는 방식이 아니라 디자인 프로세스처럼 방법론의 프로세스에 따라 인사이트를 도출하며, 발전된 아이디어 및 생성 과정을 제공합니다. 이를 통해 보다 체계적으로 아이디어를 발전시킬 수 있으며 방법론을 학습할 수 있습니다.","videoId":1128192125},{"members":[16],"category":"c0","projectNum":1,"titleKor":"맵시","titleEng":"MAPSEE","description":"MAPSEE는 사용자의 취향을 분석해 생성한 퍼소나와 실제 착장을 비교함으로써, 두 스타일 간의 차이를 시각적으로 보여주는 서비스입니다. 색상·핏·무드의 유사도와 차이를 ‘패션 지도’처럼 표현하여, 사용자가 자신의 옷맵시가 어떤 방향으로 나아가고 있는지 한눈에 확인할 수 있도록 돕습니다.","videoId":1127543207},{"members":[18],"category":"c0","projectNum":2,"titleKor":"건물화재내부정찰로봇","titleEng":"RESQ","description":"화재 발생 후 골든타임을 지키기 위해서 현재 소방관인력으로만 힘든  경우가 많습니다. 고온·연기·어두운 환경에서도 자유롭게 이동하며 \\n내부를 탐색할 수 있으며, 실시간 영상 데이터를 제공해 소방관의 안전한 구조 활동을 지원합니다. ResQ는 화재 현장에서 인명 피해를 \\n최소화할 수 있습니다.   \\n있는 든든한 파트너입니다.","videoId":1128457679},{"members":[24,28],"category":"c0","projectNum":3,"titleKor":"스카이 가드 듀오","titleEng":"SKY GUARD DUO","description":"매년 증가하는 버드스트라이크 위협에 맞서는 'SKY GUARD DUO'. 이 시스템은 지상을 담당하는 자율주행 로봇과 상공을 책임지는 드론 편대로 구성된 이중 방어 솔루션입니다. AI가 위협을 탐지하면 에어캐논이 먼저 대응하고, 필요시 드론 편대가 출격하여 입체 작전을 펼칩니다. 공항 안전의 새로운 기준을 제시합니다.","videoId":1126407280},{"members":[30],"category":"c0","projectNum":4,"titleKor":"마이다꾸","titleEng":"MYDAKU","description":"MYDAKU 는 작성한 일기의 내용과 키워드를 통해 그날의 기분과 일상을 표현한 AI 스티커 제작 서비스입니다. 업로드 한 일기 사진을 바탕으로 키워드를 선택하여 감정이나 주제를 시각적으로 표현할 수 있는 AI 스티커를 제공받습니다. 또한 자동 생성된 AI 스티커를 저장하며 제작한 스티커와 키워드를 바탕으로 타 사용자와 스티커를 공유할 수 있습니다.","videoId":1126865139},{"members":[36],"category":"c0","projectNum":5,"titleKor":"레디큐","titleEng":"READYQ","description":"READYQ는 필기 자료를 인식하여 퀴즈를 생성하는 AI 기반 학습 관리 서비스입니다. 암기 학습에 어려움을 겪는 사용자를 위해 맞춤형 퀴즈를 제공하고 체계적인 기억 인출 연습을 돕습니다. 나아가 생성된 퀴즈를 통해 자연스러운 복습 기회와 효율적인 학습 관리를 지원합니다.","videoId":1127539556},{"members":[41],"category":"c0","projectNum":6,"titleKor":"조각조각","titleEng":"JOGAKJOGAK","description":"조각조각은 사용자가 키워드를 바탕으로 스토리를 작성하고, 해당 스토리에 맞춰 사진을 촬영하면 AI가 일러스트를 완성시켜 주는 게임형 서비스입니다. 캐릭터 애니메이션 요소를 통해 사용자에게 흥미를 제공하여 사진 속에 담긴 순간의 이야기와 감정을 풍부하게 표현하도록 돕습니다.","videoId":1126740651},{"members":[72,42],"category":"c0","projectNum":7,"titleKor":"팔로잉 충전 스테이션 드론","titleEng":"FOLLOWING CHARGING STATION DRONE","description":"Following Charging Station Drone은 공중급유기 기술에서 착안한 제품으로 드론을 충전해주는 이동식 충전소 역할을 수행한다.  이 충전 드론은 배터리 한계로 비행 시간이 짧았던 드론들을 충전하므로써 효율성을 극대화하고 편한 충전 방식을 제공한다.","videoId":1127151890},{"members":[43],"category":"c0","projectNum":8,"titleKor":"에이아이스마트모니터암","titleEng":"AI SMART MONITORARM","description":"AI 스마트 모니터암은 사용자의 자세를 인식해 올바르게 교정해주는 스마트 디바이스입니다. 내장된 카메라와 인공지능이 목과 어깨의 움직임을 실시간으로 감지하여 피로를 줄이고 건강한 자세 습관을 형성하도록 돕습니다.","videoId":1127217010},{"members":[50,96],"category":"c0","projectNum":9,"titleKor":"문화유산 복원 시스템 로봇","titleEng":"BIND","description":"국내 문화유산 복원 현장은 인력난과 수작업 한계로 복원율이 1%에 불과합니다. BIND는 유물 복원 작업의 효율성과 정확성을 높여 이 문제를 해결하기 위해 개발되었습니다. 레이저 세척, 3D 스캐닝, AI 모델링, 세라믹 프린팅, CNC 가공을 통합해 원본의 질감까지 재현하며, 이를 통해 소중한 문화유산을 안전하게 보존하여 미래 세대에 온전히 전달합니다.","videoId":1127032149},{"members":[82,52],"category":"c0","projectNum":10,"titleKor":"자기주도학습 강화를 위한 학습 독려 로봇","titleEng":"ENDY","description":"공부 도중 휴대전화 사용, 졸음 상황 등 사용자의 학습 상태를 고려하여 바른 학습 태도를 유지하도록 로봇이 재촉하고 시간에 따른 공부 진도를 확인하며 학습 텐션을 유지할 수 있도록 피드백을 한다. 로봇을 통한 사용자의 학습 관찰과 실시간 피드백을 가능케 하여 AI 학습 컴페니언 로봇 개발을 도모하고자 하였다.","videoId":1126889031},{"members":[54],"category":"c0","projectNum":11,"titleKor":"툰챗","titleEng":"TOONCHAT","description":"툰-챗'은 인간관계가 지속될수록 표현이 단조로워지고 단어가 생략되어 가는 온라인 채팅 환경을 만화 같은 그래픽으로 표현하여 풍부하고 즐거운 소통 경험으로 유도하는 서비스입니다. 사용자가 입력한 채팅은 각자 선택한 화풍의 그래픽으로 출력되고, 출력된 서로의 그래픽을 공유하며 새로운 소통 경험을 만듭니다.","videoId":1126711648},{"members":[59],"category":"c0","projectNum":12,"titleKor":"미래형 방범 솔루션 귀갓길 동행 드론","titleEng":"RING GUARDIAN","description":"RING GUARDIAN은 야간 귀가 중 사용자의 머리 위를 따라 이동하며 길을 비추고 주변을 기록하는 방범 드론입니다. 어둠 속에서도 안전한 동행을 제공하며, 엔젤링 형태의 조명으로 심리적 안정감을, 경찰 시스템과 연동되어 신속한 대응과 실질적 보호를 지원합니다.","videoId":1127418304},{"members":[60],"category":"c0","projectNum":13,"titleKor":"마스크 이모지","titleEng":"MASK EMOJI","description":"MASK - EMOJI는 청소년과 20~30대가 SNS 소통 속에서 ‘가면’을 쓰고 진짜 감정을 숨기는 현상에서 착안한 프로젝트입니다. 사용자는 자신만의 ‘가면’을 직접 꾸미며, AI 로봇과 친구처럼 대화하면서 감정을 자연스럽게 표현할 수 있습니다. 또한 방대한 수집 요소를 결합해 감정 표현의 새로운 방식을 제시하는 차별화된 경험을 선사합니다.","videoId":1127190833},{"members":[73,66],"category":"c0","projectNum":14,"titleKor":"위플","titleEng":"WEEPLE","description":"Weeple은 가족, 친구, 동호회 등 우리 그룹이 함께 찍은 사진과 짧은 설명을 입력하면,\\nAI가 그룹의  분위기와 특성을 분석하여 우리만의 보드게임 테마를 만들어주는 서비스입니다.\\n같이 찍은 사진이 게임으로 바뀌고, 우리만의 추억과 개성이 담긴 미션에 도전해볼 수 있습니다.\\n함께 웃고 도전하면서, 우리 그룹만의 스토리를 즐길 수 있는 보드게임 테마를 만들어보세요!","videoId":1127052600},{"members":[68,88],"category":"c0","projectNum":15,"titleKor":"수중 속 골프공 수거로봇","titleEng":"AQUATRIEVE","description":"매년 전 세계 골프장에서 유실되는 1억 개 이상의 골프공은 해양 오염과 미세플라스틱 문제를 야기합니다. 현재는 다이버가 직접 수중에 들어가 회수하지만, 어두운 환경과 공에 맞을 위험이 있습니다. 본 로봇은 자율주행으로 공을 수거하고 스테이션으로 운반해 로스트볼로 재활용하고, 이니셜·특징이 있는 공은 앱을 통해 주인에게 반환합니다.","videoId":1127036871},{"members":[71],"category":"c0","projectNum":16,"titleKor":"뮤즈","titleEng":"MUSE","description":"MUSE는 디자이너가 논문을 이해하고 실무에 바로 활용하도록 돕는 AI 기반 웹서비스입니다. AI가 논문을 분석하여 디자인 브리프, 퍼소나 스토리, 디자인 가이드라인, 관련 자료 추천, 아이디어 생성 도우미의 5가지 실무에 특화된 형태(텍스트 및 시각 자료 결합)로 재구성해 제공합니다. 도출된 인사이트는 프로젝트 폴더에 체계적으로 저장 및 관리할 수 있으며, 직관적인 UI로 효율적인 디자인 작업을 지원합니다.","videoId":1127403683},{"members":[75,81],"category":"c0","projectNum":17,"titleKor":"공항 위험물질 및 마약 탐지 로봇","titleEng":"CO-BOT","description":"마약, 폭발물, 바이러스 등 눈에 보이지 않는 위험을 빠르고 정확하게 탐지해 사고를 예방합니다.다중 센서와 AI 전자코를 이용해 공기 중 분자 변화를 분석하고, 자율주행으로 넓은 공간을 순찰합니다.탐지 정보는 실시간으로 전달되며, 검역, 마약 탐지, 폭발물 탐지 모드를 상황에 맞게 전환할 수 있습니다.이 로봇은 공항 같은 시설을 안전하게 지키는 스마트한 감시 파트너입니다.","videoId":1127049607},{"members":[76],"category":"c0","projectNum":18,"titleKor":"전기차 화재 진압 로봇","titleEng":"E-FIBOT","description":"최근 전기차 시장의 확대와 함께 전기차 화재 또한 사회적 문제로 떠오르고 있다.\\n전기차 화재 진압에서 가장 중요한 것은 신속한 소화이다.\\n\\n하지만 기존 간접 소화 방식은 완전 소화까지 약 3~4시간이 소요되어 피해 확산을 \\n막기 어렵다. 또다른 방식인 직접 소화 방식은 속도는 빠르지만 \\n폭발, 감전과 같은 위험성 때문에 쉽게 쓰기 어렵다.\\n\\n이러한 전기차 화재를 신속하고 안전하게 진압하기 위해 E-FIBOT을 개발하였다.","videoId":1127469972},{"members":[86],"category":"c0","projectNum":19,"titleKor":"해저 미세플라스틱 수거 로봇","titleEng":"Aqua Breeze","description":"Aqua Breeze는 마찰대전 발전소자를 활용한 자가발전 로봇으로 외부 전력 없이도 자율적으로 작동하며 정전기 흡착 원리를 통해 해저에 침적된 미세플라스틱을 친환경적으로 수거하여 기존의 방식으로는 처리하기 어려웠던 문제를 해결하고 이를 통해 해양 생태계와 퇴적 환경을 보호하는 지속가능한 솔루션을 제공합니다.","videoId":"-"},{"members":[87],"category":"c0","projectNum":20,"titleKor":"노블","titleEng":"NOBLE","description":"Noble은 웹소설 집필을 원하는 사용자를 위한 메모 기반 스토리 생성 서비스입니다. 아이디어 메모를 관리하고 선택한 메모를 토대로 다양한 플롯 생성을 제공합니다. 또한 AI 편집 기능을 통해 문장을 다듬고 완성도 있는 웹소설로 발전시킬 수 있습니다. 사용자는 창작 과정의 부담을 줄이고 보다 쉽고 즐겁게 글쓰기를 이어갈 수 있습니다.","videoId":1126680452},{"members":[90],"category":"c0","projectNum":21,"titleKor":"스노모","titleEng":"SNOMO","description":"SNOMO는 겨울철 빈번히 발생하는 비닐하우스 피해를 예방하기 위해서 적설량을 자동 감지해 눈을 제거하는 비닐하우스 전용 제설 로봇입니다. 이를 통해 고령화된 농촌의 인력 소모를 줄이고, 농작물 피해와 복구 비용을 줄일 수 있습니다. 더 나아가 현재뿐만 아니라 미래에 이상 기후로 인하여 더욱 잦고 심각해질 피해에 대응하기 위해서도 필요한 제품입니다.","videoId":1127827337},{"members":[94],"category":"c0","projectNum":22,"titleKor":"초보디자이너들을 위한 실전형 학습 UX/UI 챌린지","titleEng":"RE:CHAL","description":"AI를 활용해 실제 사용자 리뷰를 분석하고, 초보 UX/UI 디자이너가 실무 감각을 기를 수 있는 과제를 자동 생성하는 학습 도구입니다. 데이터 기반의 UX 과제를 통해 사용자는 문제 해결 중심의 사고를 훈련하고, 사용자 경험을 분석하는 능력을 자연스럽게 향상시킬 수 있습니다.","videoId":1127540743},{"members":[99],"category":"c0","projectNum":23,"titleKor":"파미","titleEng":"FARMIE","description":"FARMIE는 농업 인구 감소와 고령화에 대응하여 개발된 스마트 작물보호제 살포 로봇입니다. FARMIE 실시간으로 작물 상태와 병해충을 모니터링하여 최적의 작업 경로를 자동으로 계획/실행합니다. 수집된 데이터 분석을 통해 효과적인 방제 전략을 수립하여 농작업의 효율성, 정밀도 및 효과를 크게 향상시키고 작업자의 부담을 줄이는 것을 목표로 합니다","videoId":1127428419},{"members":[3],"category":"c1","projectNum":24,"titleKor":"심부름 탐험","titleEng":"ERRAND ADVENTURE","description":"어린이의 건강한 성장과정을 위해서는 책임감과 자립심을 기르는 것이 매우 중요합니다. 이때, 심부름이 좋은 효과를 가져다주지만 아이들은 심부름 과정을 귀찮고 지루하게 여기는 경향이 있습니다. 이러한 문제를 해결하기 위해 아이들이 캐릭터와 함께 상호작용하며 놀이처럼 즐길 수 있는 탐험 컨셉의 어린이용 심부름 서비스 제작하였습니다.","videoId":1127852716},{"members":[69,49],"category":"c1","projectNum":25,"titleKor":"모티","titleEng":"MOTI","description":"MOTI는 앞날의 불확실성에 불안을 느끼는 청소년들을 위해 버킷리스트라는 목표를 세우며 보다 현실적으로 꿈에 다가갈 수 있도록 유도하는 청소년 자아실현 가이드 플랫폼입니다. 우리는 사용자의 흥미와 관심사를 바탕으로 새로운 도전과제를 제시하고, 그에 어울리는 리워드를 제시함으로써 청소년들의 끊임없는 탐구심을 이끌어냅니다.","videoId":1127523874},{"members":[6,2],"category":"c2","projectNum":26,"titleKor":"해빗","titleEng":"HAVIT","description":"HAVIT은 건강과 만족 사이에서 자신만의 균형을 찾고자 하는 이들을 위한 스마트 도시락 및 식단 관리 서비스입니다. 급격한 생활 양식의 변화와 기술 발전으로 젊은 세대의 가속 노화가 두드러진 현시점, HAVIT은 즐거움을 더한 지속 가능한 건강 관리, 즉 헬시 플레저를 추구하는 이들에게 개인화된 루틴을 통한 새로운 경험을 제안합니다.","videoId":"1127431236?h=239d5ba621"},{"members":[4,34],"category":"c2","projectNum":27,"titleKor":"3D 필드 성장형 러닝서비스","titleEng":"COAK","description":"COAK은 러닝 기록을 특별한 경험으로 바꾸어 동기부여하는 서비스입니다. \\n사용자가 달린 러닝 루트를 시각화 하고 3D 필드로 생성합니다.\\n같은 루트를 반복해 달릴수록 필드의 자연 요소가 점차 성장합니다. \\n크루와 함께한 기록은 모여 하나의 숲을 이루며, 새로운 방식의 러닝 경험을 통해 지속적인 동기를 제공합니다.","videoId":1127539956},{"members":[45,19],"category":"c2","projectNum":28,"titleKor":"감정을 머물러 바라볼 수 있는 감정 기록 앱","titleEng":"Feeltr","description":"Feeltr는 감각 자극(온도, 밝기, 촉각, 청각)을 기반으로 감정을 비유하고 세부 감정을 선택해 모호한 감정을 인식하도록 돕습니다. 이후 감정이 발생한 상황과 반응을 일기로 정리하고, 개인 맞춤형 케어를 제안합니다. 감정 기록은 감정 카드로 생성되어 달력에 저장되며,  감정 변화 흐름을 직관적으로 확인하고 자기 이해와 정서 회복력을 높일 수 있습니다.","videoId":1127177184},{"members":[29],"category":"c2","projectNum":29,"titleKor":"애니키트","titleEng":"ANIKIT","description":"ANIKIT은 ‘animal’의 ‘ani’와 ‘kit’의 합성어로, 동물처럼 친근하면서 언제 어디서나 사용할 수 있는 의료 키트입니다. 차가운 의료기기의 이미지를 벗어나 아이들에게 따뜻함과 안정감을 전하며, 동물을 모티브로 한 디자인으로 자연스럽게 다가갑니다. 학교나 집 등 어디서든 아이가 스스로 건강을 관리할 수 있도록 돕는 동반자 같은 키트입니다.","videoId":1126266309},{"members":[35],"category":"c2","projectNum":30,"titleKor":"액토","titleEng":"ACTO","description":"ACTO는 식단 제안형 냉장고와 이동형 모듈 냉장고, 두 본체로 구성됩니다.\\n이동형 모듈 냉장고는 부재 중 신선식품을 대신 수령·보관하며,\\n식단 제안형 냉장고는 스마트 워치 태그 기반으로 맞춤형 식단을 제공합니다.\\n두 냉장고의 연동을 통해 ACTO는 사용자의 식습관을 분석하고,\\n건강한 생활 패턴을 관리하는 냉장고입니다.","videoId":1126763958},{"members":[57,58],"category":"c2","projectNum":31,"titleKor":"스마트 비대면 외래진료 의료기","titleEng":"VITALL^NK","description":"VitalL^nk는 의료 사각지대에 놓인 노인 환자들을 대상으로, 병원 방문 없이도 주요 건강 검진을 스스로 수행할 수 있도록 돕는 의료기기입니다. 단순한 검사 기능과 원격 진료 연결을 제공합니다. 기본적인 체온 검사는 물론, 혈당과 혈압, 심전도 측정, 손목 골밀도 검사, 초음파 검사를 통해 노인성 질환의 주요 지표도 빠르게 확인할 수 있습니다.","videoId":1126436227},{"members":[61],"category":"c2","projectNum":32,"titleKor":"소형 반려견 전용 AED 내장 산책 리드줄","titleEng":"DOG AED LEASH","description":"반려견과 함께 걷는 시간은 언제나 즐겁지만 갑작스러운 위험이 찾아올\\n수도 있습니다. 특히 소형견은 심정지 시 몇 분 안에 대응하지 못하면 큰\\n위험에 놓일 수 있습니다. 이 리드줄은 그런 순간을 대비하여 반려견 전\\n용 AED 기능을 함께 담았습니다. 평소에는 가볍게 사용할 수 있는 리드\\n줄이지만, 필요할 때는 구조 도구가 됩니다.","videoId":1127407103},{"members":[91],"category":"c2","projectNum":33,"titleKor":"메디메이트","titleEng":"MEDIMATE","description":"고령화와 의학 발전으로 현대인들은 의약품을 손쉽게 접하게 되었지만, 그만큼 방치되거나 잘못 폐기되는 의약품 또한 증가하고 있으며, 이들은 수질 오염 및 생태계 교란을 유발하게 됩니다. 따라서 사용자가 약을 안전하게 관리하고 폐기까지 책임질 수 있도록 돕는 서비스, 메디메이트를 제작했습니다. 이는 건강한 생활 습관과 지속 가능한 환경 보호에 기여할 것입니다.","videoId":1127528036},{"members":[10],"category":"c3","projectNum":34,"titleKor":"마리스","titleEng":"MARIS","description":"Maris는 선박 하부에 부착되는 따개비를 효과적으로 제거하기 위해 설계된 자율 주행 수중 로봇입니다. 라틴어로 ‘바다의, 바다를’이라는 뜻을 담은 이름처럼, 해양 환경에서 최적의 성능을 발휘하도록 제작되었습니다. 8개의 고성능 프로펠러가 탑재되어 수중에서도 안정적이고 자유로운 기동이 가능하며, 정밀한 제어를 통해 선박 하부 구역을 빈틈없이 관리할 수 있습니다. 또한 따개비 제거 장치에는 스크래퍼와 브러시가 각각 모듈화되어 있어, 스크래퍼의 날이 무뎌지거나 브러시가 손상될 경우 손쉽게 교체할 수 있습니다. 이를 통해 유지보수가 간단하고, 장기간 안정적인 성능을 보장하며, 효율적인 선체 관리로 연료 절감과 친환경 운항을 돕는 혁신적인 솔루션입니다.","videoId":1127467906},{"members":[64,20],"category":"c3","projectNum":35,"titleKor":"ESG 부산 - 스테이션","titleEng":"ESG BUSAN - STATION","description":"ESG 부산'은 부산 주요 관광지에 설치된 ESG 체험 플랫폼으로, 투명 OLED 패널, 업사이클링 키링 자판기, 플로깅 도구 대여 부스로 구성됩니다. 관광객들은 도시를 탐험하는 동안 쓰레기를 줍기 위한 집게를 대여하고, 상징적인 업사이클링 키링을 받을 수 있습니다. 이는 관광과 지속가능성의 접점을 제시하는 새로운 유형의 체험형 공공시설물입니다.","videoId":1127729155},{"members":[22],"category":"c3","projectNum":36,"titleKor":"씬킷","titleEng":"SYN:KET","description":"SYN:KET은 신디사이저, 샘플러, 비트메이커를 하나로 담은 휴대용 그루브 박스입니다.\\n사용자는 8개의 터치패드와 원형 인터페이스를 통해 리듬을 손끝으로 느끼고 조형하며,\\n음악을 ‘만드는 행위’ 에서 ‘소리를 다루는 경험’ 으로 확장된 새로운 창작의 감각을 얻게 됩니다.","videoId":1127471421},{"members":[25],"category":"c3","projectNum":37,"titleKor":"페이스:디","titleEng":"FACE:D","description":"FACE:D는 iPhone의 Face ID와 ARKit52 기술을 활용하여 사용자의 표정을 실시간으로 인식하고, 52개의 BlendShape 데이터를 기반으로 감정을 분석한다. 분석된 감정은 Unity로 제작된 상담 시뮬레이션 콘텐츠에 반영되어, 사용자의 표정에 따라 내담자의 감정 수치가 변화한다. 감정 데이터 기반의 새로운 인터랙티브 경험을 제공한다.","videoId":1127322837},{"members":[27],"category":"c3","projectNum":38,"titleKor":"모온","titleEng":"MO-ON","description":"‘모으다’와 ‘ON’의 MO-ON(모온)은 멀티모달 AI의 강력한 생성 능력을 하나의 웨어러블에 담아 현실과 가상을 넘나들며 자유롭고 직관적인 창작 경험을 제공합니다. 이로써 개개인의 창의성과 개성을 존중하는 창작자 중심의 궁극적인 AI 글래스로 완성됩니다.","videoId":1127476055},{"members":[48,51],"category":"c3","projectNum":39,"titleKor":"AI 기반 모의 인터뷰 서비스","titleEng":"PRETALK","description":"PRETALK은 인터뷰 진행자가 더 나은 사용자 경험(UX)과 깊이 있는 인사이트를 도출할 수 있도록 돕는 인터뷰 연습 서비스입니다.\\n가상의 퍼소나와 실전처럼 인터뷰를 연습하면서 질문 설계, 흐름 관리, 응답 분석까지 체계적으로 준비할 수 있으며, 실제 상황에 가까운 시뮬레이션을 통해 인터뷰 역량을 강화할 수 있습니다.","videoId":1126830637},{"members":[53],"category":"c3","projectNum":40,"titleKor":"투미","titleEng":"TO.ME","description":"to.me는 사용자의 감정과 목소리를 기반으로 스스로에게 피드백을 제공하는 일정 관리 서비스입니다.\\nAI가 사용자의 음성과 대화 스타일을 학습해, 일정 전 나의 목소리로 맞춤형 알림을 전달함으로써\\n정서적 몰입과 자기동기화를 돕는 새로운 자기조절 경험을 제공합니다.","videoId":1127548024},{"members":[67],"category":"c3","projectNum":41,"titleKor":"스트릭스","titleEng":"STRIX","description":"야간에 발생하는 조난사고는 제한된 장비와 시야 때문에 구조 시간이 지연되고, 구조대원과 조난당한 등산객 모두에게 큰 위험으로 이어집니다. 이러한 문제를 해결하기 위해 개발된 스마트 AR 헬멧 STRIX는 실시간 정보를 제공함으로써 구조대원의 판단을 지원하고, 구조 효율성과 안정성을 동시에 향상시켜 야간 구조 활동의 새로운 가능성을 제시합니다.","videoId":1127434135},{"members":[78],"category":"c3","projectNum":42,"titleKor":"ESG 부산 - 앱","titleEng":"ESG BUSAN - APP","description":"ESG 앱은 관광객이 부산 명소를 즐기며 자연스럽게 환경 활동에 참여할 수 있는 서비스입니다. ESG 스테이션에서 플로깅 도구를 대여해 미션을 수행하고, 완료 시 관광지 키링을 리워드로 받을 수 있습니다. 전 과정은 앱과 연동되어 관광, 환경 활동, 보상까지 간편하게 체험할 수 있으며, 부산의 지속가능한 가치를 전합니다.","videoId":1127754084},{"members":[92],"category":"c3","projectNum":43,"titleKor":"소프티 엔 하디","titleEng":"SOFTY & HARDY","description":"현재 존재하는 VR  콘서트는 시각과 청각에만 의존하여, 관객은 무대와 깊이 교류하지 못하고 단순한 관람에 머무르게 됩니다. 이 문제를 해결하기 위해 촉각을 더한 새로운 인터랙션을 제안합니다. 본 제품인 HARDY & SOFTY 는 무대와 관객을 이어주는 감각적인 다리 역할을 하며, 이를 통해 관객은 단순한 관람자가 아닌 참여자가 됩니다.","videoId":1127445758},{"members":[95],"category":"c3","projectNum":44,"titleKor":"포잉!","titleEng":"POING!","description":"POING!은 반려동물의 생체 신호와 행동 데이터를 기반으로, 홈캠 공간 속에서 살아 있는 듯한 디지털 반려동물을 구현합니다. 반려동물의 실제 데이터를 바탕으로 특정 상황의 행동을 재현합니다. 사용자는 반려동물의 고유한 특성과 행동 데이터를 '디지털 유산'으로 보존하여, 고유한 행동들을 생생하게 다시 경험할 수 있습니다.","videoId":1127520805},{"members":[32,0],"category":"c4","projectNum":45,"titleKor":"소-다방","titleEng":"SO-DABANG","description":"내 손 안의 작은 다방, 소-다방. 어플리케이션 속 DJ와 소통하며 음악을 감상해보세요. 그 시절 다방처럼 DJ에게 원하는 노래를 신청할 수 있습니다. 블루투스 스피커와 함께 사용하여 더 특별한 경험을 만끽하세요.","videoId":1127750387},{"members":[7],"category":"c4","projectNum":46,"titleKor":"집쿡타임","titleEng":"JipCook Time","description":"‘집쿡타임’은 집에 있는 식재료를 기반으로 맞춤형 레시피를 추천하는 서비스입니다. 사용자는 카메라 인식이나 직접 입력으로 식재료를 등록하고, 유통기한 관리도 가능합니다. 이후 조리 시간·맛·요리 종류 등 필터를 통해 원하는 조건의 레시피를 탐색할 수 있으며, GPT API를 활용한 AI가 재료에 맞춘 레시피를 자동 추천합니다. 추천된 레시피는 수정·공유가 가능해 사용자만의 커스텀 레시피로 확장됩니다.","videoId":1127762035},{"members":[11],"category":"c4","projectNum":47,"titleKor":"아쿠아링크","titleEng":"AQUALINK","description":"기존의 제습기는 실내 습도를 조절해 쾌적한 환경을 조성하지만, 이 과정에서 수집된 물은 대부분 활용하지 못한 채 버려집니다. Aqualink는 물을 버리지 않고, 재사용 가능한 자원으로 전환하여 식물 재배에 활용하는 순환형 시스템을 제안합니다. 이를 통해 자원의 활용도를 높이며 환경적 가치와 실용성을 동시에 구현합니다.","videoId":1126379564},{"members":[12],"category":"c4","projectNum":48,"titleKor":"센소","titleEng":"SENSO","description":"SEnSO는 확장현실(XR) 콘텐츠를 체험할 수 있도록 설계된 몰입형 다감각 스피커입니다. XR 환경 속 공연 콘텐츠와 연동되어 단순한 사운드 출력이 아닌, 자동 리프트, 조명 연출, 실제 바람 분사 등 다양한 감각 자극을 통합 제공합니다. 사용자는 콘텐츠 속 위치와 관계없이, 조명과 바람을 통해 몰입의 중심에 있는 듯한 경험을 할 수 있습니다.","videoId":1127519416},{"members":[13],"category":"c4","projectNum":49,"titleKor":"재료 교체로 레시피를 바꾸는 요리 플랫폼","titleEng":"REMIK","description":"레믹은 레시피를 바꿀 수 있는 요리 동영상 플랫폼입니다. 알레르기• 종교• 채식주의 • 개인 선호 등 다양한 이유로 특정 식재료를 먹지 못하는 인구가 증가하고 있습니다. 이를 바탕으로, 레믹은 재료를 변경하여 레시피를 새롭게 재생성합니다. 이 과정에서 사용자는 요리를 더욱 다양하고 창의적으로 접근 할 수 있습니다.","videoId":1127828070},{"members":[15],"category":"c4","projectNum":50,"titleKor":"감성 기반 소비 기록 서비스","titleEng":"LEAF NOTE","description":"Leaf Note는 소비를 단순한 수치가 아닌 나뭇잎과 캐릭터라는 감성적 요소로 표현하는 새로운 형태의 가계부입니다. 매일의 소비가 입력될 때마다 하나의 나뭇잎으로 시각화되어 차곡차곡 쌓이고, 항목별 소비는 개성 있는 캐릭터로 나타나 사용자가 친근하게 자신의 소비 패턴을 이해하도록 돕습니다. 숫자 중심의 기록이 아닌 시각적 변화를 통해, 소비에 담긴 감정과 태도를 자연스럽게 인식하게 합니다.","videoId":"1128686899"},{"members":[17],"category":"c4","projectNum":51,"titleKor":"테트링","titleEng":"TETLINK","description":"테트링은 쌓지 않는 정보 아카이브 서비스입니다. 기존 서비스가 정보를 보관하는 데 목적을 두었다면, 테트링은 이후 정보를 소비하는 것에 초점을 맞춥니다. 사용자가 저장한 정보를 블록형 게임의 블록처럼 시각화해 효과적인 소비를 유도하고, 그 과정에서 사용자는 아카이브를 비워내는 새로운 경험을 즐길 수 있습니다.","videoId":1126373064},{"members":[31],"category":"c4","projectNum":52,"titleKor":"클러버스","titleEng":"CLUB EARTH","description":"클러버스는 패션 업사이클링 스타터를 위해 소장 중인 의류로 새활용을 할 수 있도록 돕는 Up It Yourself! KIT와 온라인 서비스를 제공합니다. 실패에 대한 부담 없이 초보자도 쉽게 제작할 수 있는 도구와 도안, 튜토리얼 영상, 온라인 매뉴얼 등 다양한 가이드를 통해 업사이클링의 장벽을 낮추고, 지속 가능한 패션 문화를 함께 만들어가고자 합니다.","videoId":1127302808},{"members":[38,85],"category":"c4","projectNum":53,"titleKor":"공동체 생활에서의 물 절약 시스템","titleEng":"AQUA-SAVE","description":"AQUA-SAVE'는 일상 속 과도한 물 소비 문제를 해결하기 위해 개발된 스마트 절수 시스템입니다. 수전 디스플레이를 통해 실시간 물 사용량, 온도, 사용시간을 확인할 수 있으며, 애플리케이션을 통해 개인 및 공동체별 데이터를 분석하고 절수 미션을 제공합니다. 미션 달성 시 리워드가 제공되며, 이는 공동체의 효율적인 물 사용 습관 형성에 기여합니다.","videoId":1127099717},{"members":[40],"category":"c4","projectNum":54,"titleKor":"한번쯤 망해봐도 괜찮은 인생 게임","titleEng":"내가 뭘 잘못했는데요?","description":"사람은 자신이 하고 싶은 것을 할 때 가장 빛난다.\\n그러나 현실은 빠른 속도와 정해진 답을 끊임없이 요구합니다. 많은 사람들이 중요한 진로와 직업의 갈림길 앞에서 깊은 혼란을 겪습니다. 본 프로젝트는 그러한 상황에서 다양한 선택을 시뮬레이션할 수 있게 하여 각자의 리듬과 가능성을 온전히 존중하고자 하는 의도에서 만들어졌습니다.","videoId":"-"},{"members":[44],"category":"c4","projectNum":55,"titleKor":"사용자 경험 기반 디지털 아카이브","titleEng":"Ever Archive","description":"현대인의 디지털 라이프 속에서 기억은 쉽게 저장되지만, 그 안에 담긴 감정은 점차 흐려집니다. \\nEver Archive는 이런 감정의 흔적을 몰입감 있는 경험으로 보존할 수 있도록 설계되었습니다. \\n기억은 사라지는 것이 아니라, 형태를 바꿔 마음에 남는 것, 디자인을 통해 그 형태를 만들어주고 싶었습니다.\\n사람의 마음과 감정을 다루는 디자인을 지향합니다.","videoId":1127045458},{"members":[46],"category":"c4","projectNum":56,"titleKor":"모듈형 침구 UV 살균 로봇 청소기","titleEng":"NOVIX","description":"NOVIX는 침구 UV 살균 로봇 청소기로 모듈형 로봇기기와 본체 로봇청소기 2개로 이루어져있습니다. 본체는 가정집의 먼지청소를 먼저 이행하고 사용자가 침구위에서 모듈형 로봇을 작동시키면 상단의 360°센서 기반으로 자율 주행하며 침구 위를 이동하면서 보이지 않는 진드기와 유해 입자를 효과적으로 제거하는 UV 살균이 가능합니다.","videoId":1126569569},{"members":[55,65],"category":"c4","projectNum":57,"titleKor":"모담이","titleEng":"MODAMI","description":"시니어를 위한 AI 자서전 서비스 '모담이'는 AI 아바타 '담이'와의 대화를 통해 당신의 삶을 기록합니다. \\n키보드 없이 터치와 음성으로 세상에 단 하나뿐인 나만의 특별한 자서전이 완성됩니다.","videoId":1127565627},{"members":[56],"category":"c4","projectNum":58,"titleKor":"소설 창작을 위한 협업 커뮤니티 플랫폼","titleEng":"CREWE","description":"Crewe는 하나의 아이디어에서 여러 사람이 의견을 더해 이야기를 완성하는 협업형 창작 플랫폼입니다. 하나의 소재에서 다양한 전개가 만들어지며, 함께 이야기를 확장해가는 집단 창작의 즐거움을 제공합니다.","videoId":1127471110},{"members":[63],"category":"c4","projectNum":59,"titleKor":"유아 정서 발달 자연 친화 자동화 화분","titleEng":"REONA","description":"REONA는 자연의 흐름을 형상화한 클라우드 형태의 스마트 화분으로 디지털 디스플레이와 직관적인 형태 변화를 통해 날씨와 급수 필요성을 전달합니다. 하단부의 물을 워터펌프를 통해 끌어올려 상단 구름 부분에서 빗방울처럼 떨어뜨림으로써 식물이 자라는 자연의 환경을 실내에서 경험할 수 있도록 재현한 제품입니다.","videoId":"-"},{"members":[77],"category":"c4","projectNum":60,"titleKor":"노트모","titleEng":"NOTEMO","description":"notemo'는 사용자가 겪고 있는 정신적인 어려움을 완화할 수 있는 감정 습관 어플입니다. 하루에 한 번 짧고 직관적인 질문에 대답하며 감정에 솔직해지는 법을 배우고, '마음 기록장'과 '마음 정원' 을 통해 이를 쉽고 재미있게 확인할 수 있습니다. 또한, '마음 살펴보기' 를 통해 특정 심리 영역을 탐색할 수 있습니다.","videoId":1127447000},{"members":[83],"category":"c4","projectNum":61,"titleKor":"리:미스트","titleEng":"RE:MIST","description":"RE:MIST는 사용자가 향을 원하는 대로 조합해 사용하는 모듈형 충전식 스프레이다. 재사용 가능한 구조와 진공 시스템으로 플라스틱과 유해 가스 사용을 줄이며, 분사량·향·기능을 세밀하게 조절할 수 있어 개인 맞춤형 경험을 제공한다. 환경 보호, 경제성, 창의적 사용성을 모두 갖춘 지속 가능한 라이프스타일 제품이다.","videoId":1127188689},{"members":[84],"category":"c4","projectNum":62,"titleKor":"경험소비 기반 햄버거 커스터마이징 어플","titleEng":"BURGIT","description":"Z세대는 전세계 인구의 25%를 차지하며 역대 최대 규모의 소비력을 갖춘 세대가 될 것으로 예측됩니다. 이들에게 중요한 것은 직접 개입한 생산형 경험과 자기표현을 할 수 있는 콘텐츠입니다. 해당 어플은 사용자가 인터랙티브 요소를 통해 햄버거 재료를 직접 선택하고 제조할 수 있도록 하는 경험 소비 기반 햄버거 커스터마이징 어플리케이션입니다.","videoId":1126413536},{"members":[89],"category":"c4","projectNum":63,"titleKor":"엔코","titleEng":"ENCO","description":"밀키트의 복잡한 조리 과정을 디제잉의 감각적인 퍼포먼스로 재해석합니다. DJ 컨트롤러에서 영감을 받은 다이얼과 레버, 행동을 유도하는 LED 인디케이터는 요리의 순서와 흐름을 직관적으로 안내합니다. 이를 통해 요리 과정을 하나의 퍼포먼스처럼 완성하는 새로운 경험을 제공하며 라이프스타일을 제안합니다.","videoId":1128232388},{"members":[93],"category":"c4","projectNum":64,"titleKor":"씨너리","titleEng":"SEENERY","description":"SEENERY는 '나(seen)'와 '여행의 풍경(scenery)'을 연결해 1인 여행자에게 새로운 기록 방식을 제안하는 휴대용 자동 촬영 드론입니다. 사용자는 제품을 비틀어 Boomerang, Sky, Surround, Follow 중 원하는 4가지 모드를 선택 후 공중에 띄웁니다. 제품은 피사체 및 환경 인식, 구도, 색감, 플래시 자동 조절로 최적의 촬영을 제공합니다. 듀얼 프로펠러와 고효율 배터리로 안정적이며, 작고 가벼워 휴대가 용이합니다. 단순한 '띄우는 동작'만으로 나와 풍경을 함께 담아 특별한 순간을 완성합니다.","videoId":"1127472732"},{"members":[97],"category":"c4","projectNum":65,"titleKor":"감정 시각화 표현 치료 장치","titleEng":"VI-MO","description":"‘VI-mo’는 사용자로 하여금 자신의 감정을 외부 시점에서 시각적으로 인식하게 하여 감정의 정리와 자기 이해를 돕는 제품입니다. 감정을 말로 꺼내고 물리적 형태로 마주하는 경험은 심리적 위안과 정서적 회복을 유도하며, 감정을 억누르기보다 자연스럽게 흐르게 하는 감정 순환의 장치를 제공합니다.","videoId":"1128446266"},{"members":[5,47],"category":"c5","projectNum":66,"titleKor":"폴라리스","titleEng":"POLARIS","description":"극한 환경에서도 자유롭게 이동하며 탐사 목적에 따라 모듈을 교체할 수 있는 극지 탐사 모빌리티로, 드론과 연동해 지형과 위험 요소를 실시간으로 스캔하고 다양한 임무를 효율적이고 안전하게 수행하며, 기후 변화 분석, 자원 탐사, 생태 조사, 야간 관측과 긴급 구조까지 동시에 수행하며 극한 환경 탐사의 새로운 기준과 가능성을 보여준다.","videoId":1128433794},{"members":[8,70],"category":"c5","projectNum":67,"titleKor":"파빅스","titleEng":"PAVIX","description":"드론이 포트홀을 스캔하면 무인 모빌리티가 자동으로 이동해 보수를 수행하는 시스템입니다. TBM 공법을 적용해 절삭·청소·접착을 일체화했으며, 프리캐스트 임플란트 공법을 통해 경화 시간을 단축해 신속한 도로 개방이 가능합니다. 다관절 다리로 정밀한 작업이 가능하며, 드론이 프리캐스트를 카트리지 형태로 전달합니다.","videoId":1127509590},{"members":[79,9],"category":"c5","projectNum":68,"titleKor":"감정기반 맞춤형 활동 추천 모빌리티 서비스","titleEng":"FLOV","description":"FLOV는 인공지능이 개인의 성향과 상황을 분석해 맞춤형 정보를 제공하는 시대에 주목합니다. 기술의 고도화로 사회적 유대가 약화되고 감정적 교류가 줄어든 미래 환경에서 해소되지 못한 감정을 지닌 개인에게 감정에 적합한 활동과 장소를 추천하고, 그 목적에 최적화된 모듈형 모빌리티를 통해 새로운 감정 해소 경험을 제공합니다.","videoId":1127816861},{"members":[14],"category":"c5","projectNum":69,"titleKor":"지구와 우주를 연결하는 차세대 모빌리티 시스템","titleEng":"KAIROS","description":"KAIROS'는 지구와 우주 간 연속된 이동 경험을 제공하는 차세대 모빌리티 시스템입니다. 출발지부터 목적지까지 단일 공간에서 이동하며 새로운 라이프스타일을 누릴 수 있습니다. 직선과 평면 중심의 클래식카 감성과 미래지향적 조형성의 조화를 이루며 기능성과 감성을 동시에 아우르는 차세대 모빌리티입니다.","videoId":1128367659},{"members":[21,26],"category":"c5","projectNum":70,"titleKor":"리프텐","titleEng":"RIFETEN","description":"도로 지면의 손상을 사전에 탐지하고, 발생될 포트홀을 예방하기 위해 개발된 자율주행 모빌리티입니다. 지면의 하부 약화를 감지하면 정지하여 드릴을 이용해 지면을 천공하고, 우레탄 폼과 레진을 주입하여 내부를 메우고 표면을 마감합니다. 드릴, 우레탄 및 레진 노즐은 하부에 배치되어 x축 트랙을 따라 정밀하게 이동하여 보수 대상 지점을 정교하게 작업합니다.","videoId":1127475114},{"members":[23,33],"category":"c5","projectNum":71,"titleKor":"레이온","titleEng":"RAYON","description":"RAYON은 복잡한 지하철 역사 환경에서 역무원이 신속하게 이동해 응급 상황에 1차적인 처치를 수행할 수 있도록 설계된 1인용 응급 구조 모빌리티입니다. 구급대가 도착하기 전까지의 결정적인 시간을 단축하기 위해 좁은 통로와 다층 구조에서도 안정적인 주행이 가능하며, 응급 장비 수납 모듈과 직관적인 조작 시스템을 갖추고 있습니다.","videoId":1127232925},{"members":[37],"category":"c5","projectNum":72,"titleKor":"휠로콥터","titleEng":"WHEELOCPCOTER","description":"WHEELCOPTER는 육상 주행과 비행이 모두 가능한 하이브리드 모빌리티로, 접근이 어려운 지역에서도 구조와 탐색을 수행할 수 있습니다. 바퀴를 프로펠러로 전환하는 구조로 효율성과 경제성을 높였으며, 재난 대응·군사 작전·보급 등 다양한 임무에 활용 가능합니다.","videoId":1127451104},{"members":[39],"category":"c5","projectNum":73,"titleKor":"포레스트","titleEng":"FOR:EST","description":"PBV 플랫폼을 기반으로 시니어의 이동과 휴식을 고려한 맞춤형 인테리어 솔루션을 제안한다. 라운지 체어형 무중력 카시트와 모듈 교체 구조를 통해 반려견용·테이블용 옵션을 제공하며, 회전 플레이트로 이동·정차·산책 시나리오에 맞춰 공간을 전환해 액티브 시니어의 안전하고 편안한 아웃도어 라이프를 지원한다.","videoId":1126626799},{"members":[62],"category":"c5","projectNum":74,"titleKor":"하우릭스","titleEng":"HAULIX","description":"HAULIX는 도시와 농촌 모두를 아우르는 차세대 모듈형 전동 바이크입니다. 이동성과 적재 능력을 동시에 갖춘 이 제품은, 후방에 다양한 모듈을 탈부착하여 사용자 맞춤형 구성이 가능합니다. 또한 GPS 기록, 직관적인 디스플레이, 접이식 안장 등 고령자를 배려한 세심한 기능도 탑재되어 있어 일상 이동의 부담을 줄여줍니다.","videoId":1127497630},{"members":[74,98],"category":"c5","projectNum":75,"titleKor":"퀀타엑스","titleEng":"QUANTA-X","description":"연기 감지 센서가 화재를 탐지하면 드론이 자동으로 출동해 화재 지점에 소화볼을 투하하고 초기 진화를 수행합니다. 조기 감지와 신속한 대응을 통해 산불 확산을 방지하며 산림 자원과 생태계를 보호하고, 공공기관과 민간 분야로의 활용 가능성이 높습니다.","videoId":1127242698},{"members":[80],"category":"c5","projectNum":76,"titleKor":"투위","titleEng":"TOWEE","description":"TOWEE는 트랜스윙 시스템을 탑재한 eVTOL 차량 견인 모빌리티입니다.","videoId":1127231053}]`),Gx=40;function k2(n){if(!n)return n;const t="/";if(/^https?:\/\//i.test(n))return n;const i=n.replace(/^\.\.\//,"").replace(/^\//,"");return t+i}const fR={c0:"A",c1:"E",c2:"H",c3:"I",c4:"L",c5:"M"},Yx=["전체","산업디자인공학","미디어디자인공학"],pR={산업디자인공학:0,미디어디자인공학:1},Qx=n=>n==="IND"||n===0||n==="0"?0:n==="MED"||n===1||n==="1"?1:n,Ip=og,Vl=dR,mR=T.div`
  position: relative; background: #fff;
`,gR=T.div`
  padding-left: ${Gx}px; padding-right: ${Gx}px; display: flex; flex-direction: column;
  @media (max-width: 640px) {
    padding-left: 16px;
    padding-right: 16px;  
 }
`;function yR({children:n}){return y.jsx(mR,{children:y.jsx(gR,{children:n})})}const xR=T.div`
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
`,vR=T.div`
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
`,_R=T.div`
  text-decoration: none; cursor: pointer;
`,wR=T.div`position: relative;`;function ER({people:n}){const t=$h();return y.jsx(xR,{children:n.map((i,a)=>{const o=i.id??i.studentId??`${i.nameKor}-${a}`,u=typeof i.projectNum=="number"&&i.category,d=u?i.projectNum+1:null,m=u?`${fR[i.category]||"A"}${String(d).padStart(3,"0")}`:null,p=y.jsx(ig,{nameKor:i.nameKor,nameEng:i.nameEng,role:i.role,sns:i.sns||"-",eMail:i.eMail,imgSrc:k2(i.imgUrl),imgAlt:`${i.nameKor} profile`},o);return u?y.jsx(_R,{role:"link",tabIndex:0,onClick:()=>t(`/work/${m}`),onKeyDown:g=>{(g.key==="Enter"||g.key===" ")&&t(`/work/${m}`)},"aria-label":`${i.nameKor} 작품 보기 (${m})`,children:p},`link-${o}`):p})})}function bR(){const[n,t]=St.useState(!1),[i,a]=St.useState(Yx[0]),o=St.useMemo(()=>{const m=new Map;return(eu||[]).forEach(p=>{(p.members||[]).forEach(g=>{m.has(g)||m.set(g,p)})}),m},[]);St.useEffect(()=>{a(n?Vl[0]?.id||"":Yx[0])},[n]);const u=St.useMemo(()=>{if(!n){if(i==="전체")return Ip;let p=pR[i];return p===void 0&&(p=Qx(i)),Ip.filter(g=>Qx(g.department)===p)}const m=Vl.some(p=>p.id===i)?i:Vl.find(p=>p.nameKor===i)?.id||"";return Ip.filter(p=>p.professorId===m).map(p=>{let g=o.get(p.num);g||(g=(eu||[]).find(E=>E.category===p.category&&E.projectNum===p.projectNum)||null);const v=g?`/projects/${g.projectNum}/thumb.jpg`:"/thumbnailExample.png";return{...p,imgUrl:v}})},[i,n,o]),d=St.useMemo(()=>n&&(Vl.find(p=>p.id===i)||Vl.find(p=>p.nameKor===i))||null,[n,i]);return y.jsxs(wR,{children:[y.jsx(vR,{children:"Peoples"}),y.jsx(V2,{type:"people",onCategoryChange:a,onToggleChange:t}),y.jsxs(yR,{children:[n&&d&&y.jsx(sg,{nameKor:d.nameKor,rank:d.rank||"교수",eMail:d.email,education:d.education,field:d.field,imgSrc:k2(d.imgUrl),imgAlt:`${d.nameKor} profile`}),y.jsx(ER,{people:u})]})]})}const Xx=T.div`
  @media (max-width: 393px) {
    --s: clamp(0.82, calc(100vw / 393), 1);

    transform: scale(var(--s));
    transform-origin: top left;

    width: calc(173px * var(--s));
    height: calc(151px * var(--s));
  }
`,TR=T.div`
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
`,Wx=T.div`
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
`,SR=T.div`
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
`,AR=T.img`
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
`,RR=T.div`
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
`,IR=T.div`
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
`,CR=T.p`
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
`,jR=T.p`
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
`,DR=T.div`
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
`,NR=T.div`
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
`,MR=T.p`
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
`,OR=T.div`
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
`,VR=T.img`
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
`,kR=T.div`
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
`,Zx=T.div`
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
`,Jx=T.div`
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
`,tv=T.p`
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
`;function ev(n){return typeof n=="number"&&n>999?"999+":n}function lg({titleKor:n,titleEng:t,nameKor:i,view:a,like:o,href:u,src:d,profileImgs:m,docId:p}){const g=typeof o=="number"?o:0,v=typeof a=="number"?a:0,E=U=>{const q=U.currentTarget.querySelector(".card-hover");q&&(q.style.opacity=1)},S=U=>{const q=U.currentTarget.querySelector(".card-hover");q&&(q.style.opacity=0)},R="/",M=/^https?:\/\//i.test(u),L=y.jsxs(y.Fragment,{children:[y.jsx(TR,{children:y.jsxs(SR,{onMouseEnter:E,onMouseLeave:S,children:[y.jsx(RR,{className:"card-hover",children:y.jsxs(IR,{children:[y.jsx(jR,{children:n}),y.jsx(CR,{children:t})]})}),y.jsx(AR,{src:d,alt:"Project"})]})}),y.jsxs(DR,{children:[y.jsxs(NR,{children:[y.jsx(OR,{children:m.map((U,q)=>y.jsx(VR,{src:U,alt:`Profile${q+1}`,$z:3-q,$ml:q>0},q))}),y.jsx(MR,{children:i})]}),y.jsxs(kR,{children:[y.jsxs(Zx,{children:[y.jsx(Jx,{src:`${R}icons/likeIcon.svg`}),y.jsx(tv,{children:ev(g)||0})]}),y.jsxs(Zx,{children:[y.jsx(Jx,{src:`${R}icons/viewIcon.svg`}),y.jsx(tv,{children:ev(v)||0})]})]})]})]});return M?y.jsx(Xx,{children:y.jsx(Wx,{as:"a",href:u,style:{textDecoration:"none"},children:L})}):y.jsx(Xx,{children:y.jsx(Wx,{as:ts,to:u.startsWith("/")?u:`/${u}`,style:{textDecoration:"none"},children:L})})}lg.propTypes={titleKor:Z.string.isRequired,titleEng:Z.string.isRequired,nameKor:Z.string.isRequired,view:Z.number,like:Z.number,src:Z.string.isRequired,href:Z.string.isRequired,profileImgs:Z.arrayOf(Z.string).isRequired,docId:Z.oneOfType([Z.string,Z.number]),collection:Z.string};lg.defaultProps={titleKor:"프로젝트 제목",titleEng:"Project Title",nameKor:"Author Name",view:0,like:0,collection:"works"};const PR=()=>{};var nv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P2=function(n){const t=[];let i=0;for(let a=0;a<n.length;a++){let o=n.charCodeAt(a);o<128?t[i++]=o:o<2048?(t[i++]=o>>6|192,t[i++]=o&63|128):(o&64512)===55296&&a+1<n.length&&(n.charCodeAt(a+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++a)&1023),t[i++]=o>>18|240,t[i++]=o>>12&63|128,t[i++]=o>>6&63|128,t[i++]=o&63|128):(t[i++]=o>>12|224,t[i++]=o>>6&63|128,t[i++]=o&63|128)}return t},UR=function(n){const t=[];let i=0,a=0;for(;i<n.length;){const o=n[i++];if(o<128)t[a++]=String.fromCharCode(o);else if(o>191&&o<224){const u=n[i++];t[a++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=n[i++],d=n[i++],m=n[i++],p=((o&7)<<18|(u&63)<<12|(d&63)<<6|m&63)-65536;t[a++]=String.fromCharCode(55296+(p>>10)),t[a++]=String.fromCharCode(56320+(p&1023))}else{const u=n[i++],d=n[i++];t[a++]=String.fromCharCode((o&15)<<12|(u&63)<<6|d&63)}}return t.join("")},U2={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let o=0;o<n.length;o+=3){const u=n[o],d=o+1<n.length,m=d?n[o+1]:0,p=o+2<n.length,g=p?n[o+2]:0,v=u>>2,E=(u&3)<<4|m>>4;let S=(m&15)<<2|g>>6,R=g&63;p||(R=64,d||(S=64)),a.push(i[v],i[E],i[S],i[R])}return a.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(P2(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):UR(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let o=0;o<n.length;){const u=i[n.charAt(o++)],m=o<n.length?i[n.charAt(o)]:0;++o;const g=o<n.length?i[n.charAt(o)]:64;++o;const E=o<n.length?i[n.charAt(o)]:64;if(++o,u==null||m==null||g==null||E==null)throw new LR;const S=u<<2|m>>4;if(a.push(S),g!==64){const R=m<<4&240|g>>2;if(a.push(R),E!==64){const M=g<<6&192|E;a.push(M)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class LR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zR=function(n){const t=P2(n);return U2.encodeByteArray(t,!0)},Sh=function(n){return zR(n).replace(/\./g,"")},$R=function(n){try{return U2.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function BR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const FR=()=>BR().__FIREBASE_DEFAULTS__,KR=()=>{if(typeof process>"u"||typeof nv>"u")return;const n=nv.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},qR=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&$R(n[1]);return t&&JSON.parse(t)},ug=()=>{try{return PR()||FR()||KR()||qR()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},HR=n=>ug()?.emulatorHosts?.[n],GR=n=>{const t=HR(n);if(!t)return;const i=t.lastIndexOf(":");if(i<=0||i+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const a=parseInt(t.substring(i+1),10);return t[0]==="["?[t.substring(1,i-1),a]:[t.substring(0,i),a]},L2=()=>ug()?.config;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}wrapCallback(t){return(i,a)=>{i?this.reject(i):this.resolve(a),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(i):t(i,a))}}}/**
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
 */function cg(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function QR(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function XR(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},a=t||"demo-project",o=n.iat||0,u=n.sub||n.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d={iss:`https://securetoken.google.com/${a}`,aud:a,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Sh(JSON.stringify(i)),Sh(JSON.stringify(d)),""].join(".")}const ql={};function WR(){const n={prod:[],emulator:[]};for(const t of Object.keys(ql))ql[t]?n.emulator.push(t):n.prod.push(t);return n}function ZR(n){let t=document.getElementById(n),i=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),i=!0),{created:i,element:t}}let iv=!1;function JR(n,t){if(typeof window>"u"||typeof document>"u"||!cg(window.location.host)||ql[n]===t||ql[n]||iv)return;ql[n]=t;function i(S){return`__firebase__banner__${S}`}const a="__firebase__banner",u=WR().prod.length>0;function d(){const S=document.getElementById(a);S&&S.remove()}function m(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function p(S,R){S.setAttribute("width","24"),S.setAttribute("id",R),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function g(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{iv=!0,d()},S}function v(S,R){S.setAttribute("id",R),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function E(){const S=ZR(a),R=i("text"),M=document.getElementById(R)||document.createElement("span"),L=i("learnmore"),U=document.getElementById(L)||document.createElement("a"),q=i("preprendIcon"),X=document.getElementById(q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const tt=S.element;m(tt),v(U,L);const lt=g();p(X,q),tt.append(X,M,U,lt),document.body.appendChild(tt)}u?(M.innerText="Preview backend disconnected.",X.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,M.innerText="Preview backend running in this workspace."),M.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t6(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function e6(){const n=ug()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function n6(){return!e6()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function i6(){try{return typeof indexedDB=="object"}catch{return!1}}function r6(){return new Promise((n,t)=>{try{let i=!0;const a="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(a);o.onsuccess=()=>{o.result.close(),i||self.indexedDB.deleteDatabase(a),n(!0)},o.onupgradeneeded=()=>{i=!1},o.onerror=()=>{t(o.error?.message||"")}}catch(i){t(i)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a6="FirebaseError";class Eo extends Error{constructor(t,i,a){super(i),this.code=t,this.customData=a,this.name=a6,Object.setPrototypeOf(this,Eo.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,z2.prototype.create)}}class z2{constructor(t,i,a){this.service=t,this.serviceName=i,this.errors=a}create(t,...i){const a=i[0]||{},o=`${this.service}/${t}`,u=this.errors[t],d=u?s6(u,a):"Error",m=`${this.serviceName}: ${d} (${o}).`;return new Eo(o,m,a)}}function s6(n,t){return n.replace(o6,(i,a)=>{const o=t[a];return o!=null?String(o):`<${a}?>`})}const o6=/\{\$([^}]+)}/g;function Ah(n,t){if(n===t)return!0;const i=Object.keys(n),a=Object.keys(t);for(const o of i){if(!a.includes(o))return!1;const u=n[o],d=t[o];if(rv(u)&&rv(d)){if(!Ah(u,d))return!1}else if(u!==d)return!1}for(const o of a)if(!i.includes(o))return!1;return!0}function rv(n){return n!==null&&typeof n=="object"}/**
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
 */const qa="[DEFAULT]";/**
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
 */class l6{constructor(t,i){this.name=t,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const i=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(i)){const a=new YR;if(this.instancesDeferred.set(i,a),this.isInitialized(i)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:i});o&&a.resolve(o)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(t){const i=this.normalizeInstanceIdentifier(t?.identifier),a=t?.optional??!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(a)return null;throw o}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(c6(t))try{this.getOrInitializeService({instanceIdentifier:qa})}catch{}for(const[i,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);try{const u=this.getOrInitializeService({instanceIdentifier:o});a.resolve(u)}catch{}}}}clearInstance(t=qa){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...t.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=qa){return this.instances.has(t)}getOptions(t=qa){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:i={}}=t,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:a,options:i});for(const[u,d]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);a===m&&d.resolve(o)}return o}onInit(t,i){const a=this.normalizeInstanceIdentifier(i),o=this.onInitCallbacks.get(a)??new Set;o.add(t),this.onInitCallbacks.set(a,o);const u=this.instances.get(a);return u&&t(u,a),()=>{o.delete(t)}}invokeOnInitCallbacks(t,i){const a=this.onInitCallbacks.get(i);if(a)for(const o of a)try{o(t,i)}catch{}}getOrInitializeService({instanceIdentifier:t,options:i={}}){let a=this.instances.get(t);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:u6(t),options:i}),this.instances.set(t,a),this.instancesOptions.set(t,i),this.invokeOnInitCallbacks(a,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,a)}catch{}return a||null}normalizeInstanceIdentifier(t=qa){return this.component?this.component.multipleInstances?t:qa:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function u6(n){return n===qa?void 0:n}function c6(n){return n.instantiationMode==="EAGER"}/**
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
 */class h6{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const i=this.getProvider(t.name);if(i.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);i.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const i=new l6(t,this);return this.providers.set(t,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bt;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Bt||(Bt={}));const d6={debug:Bt.DEBUG,verbose:Bt.VERBOSE,info:Bt.INFO,warn:Bt.WARN,error:Bt.ERROR,silent:Bt.SILENT},f6=Bt.INFO,p6={[Bt.DEBUG]:"log",[Bt.VERBOSE]:"log",[Bt.INFO]:"info",[Bt.WARN]:"warn",[Bt.ERROR]:"error"},m6=(n,t,...i)=>{if(t<n.logLevel)return;const a=new Date().toISOString(),o=p6[t];if(o)console[o](`[${a}]  ${n.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class $2{constructor(t){this.name=t,this._logLevel=f6,this._logHandler=m6,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Bt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?d6[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Bt.DEBUG,...t),this._logHandler(this,Bt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Bt.VERBOSE,...t),this._logHandler(this,Bt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Bt.INFO,...t),this._logHandler(this,Bt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Bt.WARN,...t),this._logHandler(this,Bt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Bt.ERROR,...t),this._logHandler(this,Bt.ERROR,...t)}}const g6=(n,t)=>t.some(i=>n instanceof i);let av,sv;function y6(){return av||(av=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function x6(){return sv||(sv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const B2=new WeakMap,dm=new WeakMap,F2=new WeakMap,Cp=new WeakMap,hg=new WeakMap;function v6(n){const t=new Promise((i,a)=>{const o=()=>{n.removeEventListener("success",u),n.removeEventListener("error",d)},u=()=>{i(Xr(n.result)),o()},d=()=>{a(n.error),o()};n.addEventListener("success",u),n.addEventListener("error",d)});return t.then(i=>{i instanceof IDBCursor&&B2.set(i,n)}).catch(()=>{}),hg.set(t,n),t}function _6(n){if(dm.has(n))return;const t=new Promise((i,a)=>{const o=()=>{n.removeEventListener("complete",u),n.removeEventListener("error",d),n.removeEventListener("abort",d)},u=()=>{i(),o()},d=()=>{a(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",u),n.addEventListener("error",d),n.addEventListener("abort",d)});dm.set(n,t)}let fm={get(n,t,i){if(n instanceof IDBTransaction){if(t==="done")return dm.get(n);if(t==="objectStoreNames")return n.objectStoreNames||F2.get(n);if(t==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return Xr(n[t])},set(n,t,i){return n[t]=i,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function w6(n){fm=n(fm)}function E6(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...i){const a=n.call(jp(this),t,...i);return F2.set(a,t.sort?t.sort():[t]),Xr(a)}:x6().includes(n)?function(...t){return n.apply(jp(this),t),Xr(B2.get(this))}:function(...t){return Xr(n.apply(jp(this),t))}}function b6(n){return typeof n=="function"?E6(n):(n instanceof IDBTransaction&&_6(n),g6(n,y6())?new Proxy(n,fm):n)}function Xr(n){if(n instanceof IDBRequest)return v6(n);if(Cp.has(n))return Cp.get(n);const t=b6(n);return t!==n&&(Cp.set(n,t),hg.set(t,n)),t}const jp=n=>hg.get(n);function T6(n,t,{blocked:i,upgrade:a,blocking:o,terminated:u}={}){const d=indexedDB.open(n,t),m=Xr(d);return a&&d.addEventListener("upgradeneeded",p=>{a(Xr(d.result),p.oldVersion,p.newVersion,Xr(d.transaction),p)}),i&&d.addEventListener("blocked",p=>i(p.oldVersion,p.newVersion,p)),m.then(p=>{u&&p.addEventListener("close",()=>u()),o&&p.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),m}const S6=["get","getKey","getAll","getAllKeys","count"],A6=["put","add","delete","clear"],Dp=new Map;function ov(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Dp.get(t))return Dp.get(t);const i=t.replace(/FromIndex$/,""),a=t!==i,o=A6.includes(i);if(!(i in(a?IDBIndex:IDBObjectStore).prototype)||!(o||S6.includes(i)))return;const u=async function(d,...m){const p=this.transaction(d,o?"readwrite":"readonly");let g=p.store;return a&&(g=g.index(m.shift())),(await Promise.all([g[i](...m),o&&p.done]))[0]};return Dp.set(t,u),u}w6(n=>({...n,get:(t,i,a)=>ov(t,i)||n.get(t,i,a),has:(t,i)=>!!ov(t,i)||n.has(t,i)}));/**
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
 */class R6{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(I6(i)){const a=i.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(i=>i).join(" ")}}function I6(n){return n.getComponent()?.type==="VERSION"}const pm="@firebase/app",lv="0.14.4";/**
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
 */const sr=new $2("@firebase/app"),C6="@firebase/app-compat",j6="@firebase/analytics-compat",D6="@firebase/analytics",N6="@firebase/app-check-compat",M6="@firebase/app-check",O6="@firebase/auth",V6="@firebase/auth-compat",k6="@firebase/database",P6="@firebase/data-connect",U6="@firebase/database-compat",L6="@firebase/functions",z6="@firebase/functions-compat",$6="@firebase/installations",B6="@firebase/installations-compat",F6="@firebase/messaging",K6="@firebase/messaging-compat",q6="@firebase/performance",H6="@firebase/performance-compat",G6="@firebase/remote-config",Y6="@firebase/remote-config-compat",Q6="@firebase/storage",X6="@firebase/storage-compat",W6="@firebase/firestore",Z6="@firebase/ai",J6="@firebase/firestore-compat",tI="firebase",eI="12.4.0";/**
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
 */const mm="[DEFAULT]",nI={[pm]:"fire-core",[C6]:"fire-core-compat",[D6]:"fire-analytics",[j6]:"fire-analytics-compat",[M6]:"fire-app-check",[N6]:"fire-app-check-compat",[O6]:"fire-auth",[V6]:"fire-auth-compat",[k6]:"fire-rtdb",[P6]:"fire-data-connect",[U6]:"fire-rtdb-compat",[L6]:"fire-fn",[z6]:"fire-fn-compat",[$6]:"fire-iid",[B6]:"fire-iid-compat",[F6]:"fire-fcm",[K6]:"fire-fcm-compat",[q6]:"fire-perf",[H6]:"fire-perf-compat",[G6]:"fire-rc",[Y6]:"fire-rc-compat",[Q6]:"fire-gcs",[X6]:"fire-gcs-compat",[W6]:"fire-fst",[J6]:"fire-fst-compat",[Z6]:"fire-vertex","fire-js":"fire-js",[tI]:"fire-js-all"};/**
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
 */const iu=new Map,iI=new Map,gm=new Map;function uv(n,t){try{n.container.addComponent(t)}catch(i){sr.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,i)}}function Rh(n){const t=n.name;if(gm.has(t))return sr.debug(`There were multiple attempts to register component ${t}.`),!1;gm.set(t,n);for(const i of iu.values())uv(i,n);for(const i of iI.values())uv(i,n);return!0}function rI(n,t){const i=n.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),n.container.getProvider(t)}function aI(n){return n==null?!1:n.settings!==void 0}/**
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
 */const sI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wr=new z2("app","Firebase",sI);/**
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
 */class oI{constructor(t,i,a){this._isDeleted=!1,this._options={...t},this._config={...i},this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new nu("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Wr.create("app-deleted",{appName:this._name})}}/**
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
 */const lI=eI;function dg(n,t={}){let i=n;typeof t!="object"&&(t={name:t});const a={name:mm,automaticDataCollectionEnabled:!0,...t},o=a.name;if(typeof o!="string"||!o)throw Wr.create("bad-app-name",{appName:String(o)});if(i||(i=L2()),!i)throw Wr.create("no-options");const u=iu.get(o);if(u){if(Ah(i,u.options)&&Ah(a,u.config))return u;throw Wr.create("duplicate-app",{appName:o})}const d=new h6(o);for(const p of gm.values())d.addComponent(p);const m=new oI(i,a,d);return iu.set(o,m),m}function uI(n=mm){const t=iu.get(n);if(!t&&n===mm&&L2())return dg();if(!t)throw Wr.create("no-app",{appName:n});return t}function cv(){return Array.from(iu.values())}function eo(n,t,i){let a=nI[n]??n;i&&(a+=`-${i}`);const o=a.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const d=[`Unable to register library "${a}" with version "${t}":`];o&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),o&&u&&d.push("and"),u&&d.push(`version name "${t}" contains illegal characters (whitespace or "/")`),sr.warn(d.join(" "));return}Rh(new nu(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}/**
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
 */const cI="firebase-heartbeat-database",hI=1,ru="firebase-heartbeat-store";let Np=null;function K2(){return Np||(Np=T6(cI,hI,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(ru)}catch(i){console.warn(i)}}}}).catch(n=>{throw Wr.create("idb-open",{originalErrorMessage:n.message})})),Np}async function dI(n){try{const i=(await K2()).transaction(ru),a=await i.objectStore(ru).get(q2(n));return await i.done,a}catch(t){if(t instanceof Eo)sr.warn(t.message);else{const i=Wr.create("idb-get",{originalErrorMessage:t?.message});sr.warn(i.message)}}}async function hv(n,t){try{const a=(await K2()).transaction(ru,"readwrite");await a.objectStore(ru).put(t,q2(n)),await a.done}catch(i){if(i instanceof Eo)sr.warn(i.message);else{const a=Wr.create("idb-set",{originalErrorMessage:i?.message});sr.warn(a.message)}}}function q2(n){return`${n.name}!${n.options.appId}`}/**
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
 */const fI=1024,pI=30;class mI{constructor(t){this.container=t,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new yI(i),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=dv();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(o=>o.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:i}),this._heartbeatsCache.heartbeats.length>pI){const o=xI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){sr.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=dv(),{heartbeatsToSend:i,unsentEntries:a}=gI(this._heartbeatsCache.heartbeats),o=Sh(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return sr.warn(t),""}}}function dv(){return new Date().toISOString().substring(0,10)}function gI(n,t=fI){const i=[];let a=n.slice();for(const o of n){const u=i.find(d=>d.agent===o.agent);if(u){if(u.dates.push(o.date),fv(i)>t){u.dates.pop();break}}else if(i.push({agent:o.agent,dates:[o.date]}),fv(i)>t){i.pop();break}a=a.slice(1)}return{heartbeatsToSend:i,unsentEntries:a}}class yI{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return i6()?r6().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await dI(this.app);return i?.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const a=await this.read();return hv(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const a=await this.read();return hv(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...t.heartbeats]})}else return}}function fv(n){return Sh(JSON.stringify({version:2,heartbeats:n})).length}function xI(n){if(n.length===0)return-1;let t=0,i=n[0].date;for(let a=1;a<n.length;a++)n[a].date<i&&(i=n[a].date,t=a);return t}/**
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
 */function vI(n){Rh(new nu("platform-logger",t=>new R6(t),"PRIVATE")),Rh(new nu("heartbeat",t=>new mI(t),"PRIVATE")),eo(pm,lv,n),eo(pm,lv,"esm2020"),eo("fire-js","")}vI("");var _I="firebase",wI="12.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */eo(_I,wI,"app");var pv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zr,H2;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(C,I){function j(){}j.prototype=I.prototype,C.F=I.prototype,C.prototype=new j,C.prototype.constructor=C,C.D=function(O,k,z){for(var D=Array(arguments.length-2),se=2;se<arguments.length;se++)D[se-2]=arguments[se];return I.prototype[k].apply(O,D)}}function i(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(a,i),a.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(C,I,j){j||(j=0);const O=Array(16);if(typeof I=="string")for(var k=0;k<16;++k)O[k]=I.charCodeAt(j++)|I.charCodeAt(j++)<<8|I.charCodeAt(j++)<<16|I.charCodeAt(j++)<<24;else for(k=0;k<16;++k)O[k]=I[j++]|I[j++]<<8|I[j++]<<16|I[j++]<<24;I=C.g[0],j=C.g[1],k=C.g[2];let z=C.g[3],D;D=I+(z^j&(k^z))+O[0]+3614090360&4294967295,I=j+(D<<7&4294967295|D>>>25),D=z+(k^I&(j^k))+O[1]+3905402710&4294967295,z=I+(D<<12&4294967295|D>>>20),D=k+(j^z&(I^j))+O[2]+606105819&4294967295,k=z+(D<<17&4294967295|D>>>15),D=j+(I^k&(z^I))+O[3]+3250441966&4294967295,j=k+(D<<22&4294967295|D>>>10),D=I+(z^j&(k^z))+O[4]+4118548399&4294967295,I=j+(D<<7&4294967295|D>>>25),D=z+(k^I&(j^k))+O[5]+1200080426&4294967295,z=I+(D<<12&4294967295|D>>>20),D=k+(j^z&(I^j))+O[6]+2821735955&4294967295,k=z+(D<<17&4294967295|D>>>15),D=j+(I^k&(z^I))+O[7]+4249261313&4294967295,j=k+(D<<22&4294967295|D>>>10),D=I+(z^j&(k^z))+O[8]+1770035416&4294967295,I=j+(D<<7&4294967295|D>>>25),D=z+(k^I&(j^k))+O[9]+2336552879&4294967295,z=I+(D<<12&4294967295|D>>>20),D=k+(j^z&(I^j))+O[10]+4294925233&4294967295,k=z+(D<<17&4294967295|D>>>15),D=j+(I^k&(z^I))+O[11]+2304563134&4294967295,j=k+(D<<22&4294967295|D>>>10),D=I+(z^j&(k^z))+O[12]+1804603682&4294967295,I=j+(D<<7&4294967295|D>>>25),D=z+(k^I&(j^k))+O[13]+4254626195&4294967295,z=I+(D<<12&4294967295|D>>>20),D=k+(j^z&(I^j))+O[14]+2792965006&4294967295,k=z+(D<<17&4294967295|D>>>15),D=j+(I^k&(z^I))+O[15]+1236535329&4294967295,j=k+(D<<22&4294967295|D>>>10),D=I+(k^z&(j^k))+O[1]+4129170786&4294967295,I=j+(D<<5&4294967295|D>>>27),D=z+(j^k&(I^j))+O[6]+3225465664&4294967295,z=I+(D<<9&4294967295|D>>>23),D=k+(I^j&(z^I))+O[11]+643717713&4294967295,k=z+(D<<14&4294967295|D>>>18),D=j+(z^I&(k^z))+O[0]+3921069994&4294967295,j=k+(D<<20&4294967295|D>>>12),D=I+(k^z&(j^k))+O[5]+3593408605&4294967295,I=j+(D<<5&4294967295|D>>>27),D=z+(j^k&(I^j))+O[10]+38016083&4294967295,z=I+(D<<9&4294967295|D>>>23),D=k+(I^j&(z^I))+O[15]+3634488961&4294967295,k=z+(D<<14&4294967295|D>>>18),D=j+(z^I&(k^z))+O[4]+3889429448&4294967295,j=k+(D<<20&4294967295|D>>>12),D=I+(k^z&(j^k))+O[9]+568446438&4294967295,I=j+(D<<5&4294967295|D>>>27),D=z+(j^k&(I^j))+O[14]+3275163606&4294967295,z=I+(D<<9&4294967295|D>>>23),D=k+(I^j&(z^I))+O[3]+4107603335&4294967295,k=z+(D<<14&4294967295|D>>>18),D=j+(z^I&(k^z))+O[8]+1163531501&4294967295,j=k+(D<<20&4294967295|D>>>12),D=I+(k^z&(j^k))+O[13]+2850285829&4294967295,I=j+(D<<5&4294967295|D>>>27),D=z+(j^k&(I^j))+O[2]+4243563512&4294967295,z=I+(D<<9&4294967295|D>>>23),D=k+(I^j&(z^I))+O[7]+1735328473&4294967295,k=z+(D<<14&4294967295|D>>>18),D=j+(z^I&(k^z))+O[12]+2368359562&4294967295,j=k+(D<<20&4294967295|D>>>12),D=I+(j^k^z)+O[5]+4294588738&4294967295,I=j+(D<<4&4294967295|D>>>28),D=z+(I^j^k)+O[8]+2272392833&4294967295,z=I+(D<<11&4294967295|D>>>21),D=k+(z^I^j)+O[11]+1839030562&4294967295,k=z+(D<<16&4294967295|D>>>16),D=j+(k^z^I)+O[14]+4259657740&4294967295,j=k+(D<<23&4294967295|D>>>9),D=I+(j^k^z)+O[1]+2763975236&4294967295,I=j+(D<<4&4294967295|D>>>28),D=z+(I^j^k)+O[4]+1272893353&4294967295,z=I+(D<<11&4294967295|D>>>21),D=k+(z^I^j)+O[7]+4139469664&4294967295,k=z+(D<<16&4294967295|D>>>16),D=j+(k^z^I)+O[10]+3200236656&4294967295,j=k+(D<<23&4294967295|D>>>9),D=I+(j^k^z)+O[13]+681279174&4294967295,I=j+(D<<4&4294967295|D>>>28),D=z+(I^j^k)+O[0]+3936430074&4294967295,z=I+(D<<11&4294967295|D>>>21),D=k+(z^I^j)+O[3]+3572445317&4294967295,k=z+(D<<16&4294967295|D>>>16),D=j+(k^z^I)+O[6]+76029189&4294967295,j=k+(D<<23&4294967295|D>>>9),D=I+(j^k^z)+O[9]+3654602809&4294967295,I=j+(D<<4&4294967295|D>>>28),D=z+(I^j^k)+O[12]+3873151461&4294967295,z=I+(D<<11&4294967295|D>>>21),D=k+(z^I^j)+O[15]+530742520&4294967295,k=z+(D<<16&4294967295|D>>>16),D=j+(k^z^I)+O[2]+3299628645&4294967295,j=k+(D<<23&4294967295|D>>>9),D=I+(k^(j|~z))+O[0]+4096336452&4294967295,I=j+(D<<6&4294967295|D>>>26),D=z+(j^(I|~k))+O[7]+1126891415&4294967295,z=I+(D<<10&4294967295|D>>>22),D=k+(I^(z|~j))+O[14]+2878612391&4294967295,k=z+(D<<15&4294967295|D>>>17),D=j+(z^(k|~I))+O[5]+4237533241&4294967295,j=k+(D<<21&4294967295|D>>>11),D=I+(k^(j|~z))+O[12]+1700485571&4294967295,I=j+(D<<6&4294967295|D>>>26),D=z+(j^(I|~k))+O[3]+2399980690&4294967295,z=I+(D<<10&4294967295|D>>>22),D=k+(I^(z|~j))+O[10]+4293915773&4294967295,k=z+(D<<15&4294967295|D>>>17),D=j+(z^(k|~I))+O[1]+2240044497&4294967295,j=k+(D<<21&4294967295|D>>>11),D=I+(k^(j|~z))+O[8]+1873313359&4294967295,I=j+(D<<6&4294967295|D>>>26),D=z+(j^(I|~k))+O[15]+4264355552&4294967295,z=I+(D<<10&4294967295|D>>>22),D=k+(I^(z|~j))+O[6]+2734768916&4294967295,k=z+(D<<15&4294967295|D>>>17),D=j+(z^(k|~I))+O[13]+1309151649&4294967295,j=k+(D<<21&4294967295|D>>>11),D=I+(k^(j|~z))+O[4]+4149444226&4294967295,I=j+(D<<6&4294967295|D>>>26),D=z+(j^(I|~k))+O[11]+3174756917&4294967295,z=I+(D<<10&4294967295|D>>>22),D=k+(I^(z|~j))+O[2]+718787259&4294967295,k=z+(D<<15&4294967295|D>>>17),D=j+(z^(k|~I))+O[9]+3951481745&4294967295,C.g[0]=C.g[0]+I&4294967295,C.g[1]=C.g[1]+(k+(D<<21&4294967295|D>>>11))&4294967295,C.g[2]=C.g[2]+k&4294967295,C.g[3]=C.g[3]+z&4294967295}a.prototype.v=function(C,I){I===void 0&&(I=C.length);const j=I-this.blockSize,O=this.C;let k=this.h,z=0;for(;z<I;){if(k==0)for(;z<=j;)o(this,C,z),z+=this.blockSize;if(typeof C=="string"){for(;z<I;)if(O[k++]=C.charCodeAt(z++),k==this.blockSize){o(this,O),k=0;break}}else for(;z<I;)if(O[k++]=C[z++],k==this.blockSize){o(this,O),k=0;break}}this.h=k,this.o+=I},a.prototype.A=function(){var C=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);C[0]=128;for(var I=1;I<C.length-8;++I)C[I]=0;I=this.o*8;for(var j=C.length-8;j<C.length;++j)C[j]=I&255,I/=256;for(this.v(C),C=Array(16),I=0,j=0;j<4;++j)for(let O=0;O<32;O+=8)C[I++]=this.g[j]>>>O&255;return C};function u(C,I){var j=m;return Object.prototype.hasOwnProperty.call(j,C)?j[C]:j[C]=I(C)}function d(C,I){this.h=I;const j=[];let O=!0;for(let k=C.length-1;k>=0;k--){const z=C[k]|0;O&&z==I||(j[k]=z,O=!1)}this.g=j}var m={};function p(C){return-128<=C&&C<128?u(C,function(I){return new d([I|0],I<0?-1:0)}):new d([C|0],C<0?-1:0)}function g(C){if(isNaN(C)||!isFinite(C))return E;if(C<0)return U(g(-C));const I=[];let j=1;for(let O=0;C>=j;O++)I[O]=C/j|0,j*=4294967296;return new d(I,0)}function v(C,I){if(C.length==0)throw Error("number format error: empty string");if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(C.charAt(0)=="-")return U(v(C.substring(1),I));if(C.indexOf("-")>=0)throw Error('number format error: interior "-" character');const j=g(Math.pow(I,8));let O=E;for(let z=0;z<C.length;z+=8){var k=Math.min(8,C.length-z);const D=parseInt(C.substring(z,z+k),I);k<8?(k=g(Math.pow(I,k)),O=O.j(k).add(g(D))):(O=O.j(j),O=O.add(g(D)))}return O}var E=p(0),S=p(1),R=p(16777216);n=d.prototype,n.m=function(){if(L(this))return-U(this).m();let C=0,I=1;for(let j=0;j<this.g.length;j++){const O=this.i(j);C+=(O>=0?O:4294967296+O)*I,I*=4294967296}return C},n.toString=function(C){if(C=C||10,C<2||36<C)throw Error("radix out of range: "+C);if(M(this))return"0";if(L(this))return"-"+U(this).toString(C);const I=g(Math.pow(C,6));var j=this;let O="";for(;;){const k=lt(j,I).g;j=q(j,k.j(I));let z=((j.g.length>0?j.g[0]:j.h)>>>0).toString(C);if(j=k,M(j))return z+O;for(;z.length<6;)z="0"+z;O=z+O}},n.i=function(C){return C<0?0:C<this.g.length?this.g[C]:this.h};function M(C){if(C.h!=0)return!1;for(let I=0;I<C.g.length;I++)if(C.g[I]!=0)return!1;return!0}function L(C){return C.h==-1}n.l=function(C){return C=q(this,C),L(C)?-1:M(C)?0:1};function U(C){const I=C.g.length,j=[];for(let O=0;O<I;O++)j[O]=~C.g[O];return new d(j,~C.h).add(S)}n.abs=function(){return L(this)?U(this):this},n.add=function(C){const I=Math.max(this.g.length,C.g.length),j=[];let O=0;for(let k=0;k<=I;k++){let z=O+(this.i(k)&65535)+(C.i(k)&65535),D=(z>>>16)+(this.i(k)>>>16)+(C.i(k)>>>16);O=D>>>16,z&=65535,D&=65535,j[k]=D<<16|z}return new d(j,j[j.length-1]&-2147483648?-1:0)};function q(C,I){return C.add(U(I))}n.j=function(C){if(M(this)||M(C))return E;if(L(this))return L(C)?U(this).j(U(C)):U(U(this).j(C));if(L(C))return U(this.j(U(C)));if(this.l(R)<0&&C.l(R)<0)return g(this.m()*C.m());const I=this.g.length+C.g.length,j=[];for(var O=0;O<2*I;O++)j[O]=0;for(O=0;O<this.g.length;O++)for(let k=0;k<C.g.length;k++){const z=this.i(O)>>>16,D=this.i(O)&65535,se=C.i(k)>>>16,Kt=C.i(k)&65535;j[2*O+2*k]+=D*Kt,X(j,2*O+2*k),j[2*O+2*k+1]+=z*Kt,X(j,2*O+2*k+1),j[2*O+2*k+1]+=D*se,X(j,2*O+2*k+1),j[2*O+2*k+2]+=z*se,X(j,2*O+2*k+2)}for(C=0;C<I;C++)j[C]=j[2*C+1]<<16|j[2*C];for(C=I;C<2*I;C++)j[C]=0;return new d(j,0)};function X(C,I){for(;(C[I]&65535)!=C[I];)C[I+1]+=C[I]>>>16,C[I]&=65535,I++}function tt(C,I){this.g=C,this.h=I}function lt(C,I){if(M(I))throw Error("division by zero");if(M(C))return new tt(E,E);if(L(C))return I=lt(U(C),I),new tt(U(I.g),U(I.h));if(L(I))return I=lt(C,U(I)),new tt(U(I.g),I.h);if(C.g.length>30){if(L(C)||L(I))throw Error("slowDivide_ only works with positive integers.");for(var j=S,O=I;O.l(C)<=0;)j=Y(j),O=Y(O);var k=ot(j,1),z=ot(O,1);for(O=ot(O,2),j=ot(j,2);!M(O);){var D=z.add(O);D.l(C)<=0&&(k=k.add(j),z=D),O=ot(O,1),j=ot(j,1)}return I=q(C,k.j(I)),new tt(k,I)}for(k=E;C.l(I)>=0;){for(j=Math.max(1,Math.floor(C.m()/I.m())),O=Math.ceil(Math.log(j)/Math.LN2),O=O<=48?1:Math.pow(2,O-48),z=g(j),D=z.j(I);L(D)||D.l(C)>0;)j-=O,z=g(j),D=z.j(I);M(z)&&(z=S),k=k.add(z),C=q(C,D)}return new tt(k,C)}n.B=function(C){return lt(this,C).h},n.and=function(C){const I=Math.max(this.g.length,C.g.length),j=[];for(let O=0;O<I;O++)j[O]=this.i(O)&C.i(O);return new d(j,this.h&C.h)},n.or=function(C){const I=Math.max(this.g.length,C.g.length),j=[];for(let O=0;O<I;O++)j[O]=this.i(O)|C.i(O);return new d(j,this.h|C.h)},n.xor=function(C){const I=Math.max(this.g.length,C.g.length),j=[];for(let O=0;O<I;O++)j[O]=this.i(O)^C.i(O);return new d(j,this.h^C.h)};function Y(C){const I=C.g.length+1,j=[];for(let O=0;O<I;O++)j[O]=C.i(O)<<1|C.i(O-1)>>>31;return new d(j,C.h)}function ot(C,I){const j=I>>5;I%=32;const O=C.g.length-j,k=[];for(let z=0;z<O;z++)k[z]=I>0?C.i(z+j)>>>I|C.i(z+j+1)<<32-I:C.i(z+j);return new d(k,C.h)}a.prototype.digest=a.prototype.A,a.prototype.reset=a.prototype.u,a.prototype.update=a.prototype.v,H2=a,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.B,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=g,d.fromString=v,Zr=d}).apply(typeof pv<"u"?pv:typeof self<"u"?self:typeof window<"u"?window:{});var Xc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var G2,Ll,Y2,dh,ym,Q2,X2,W2;(function(){var n,t=Object.defineProperty;function i(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xc=="object"&&Xc];for(var x=0;x<c.length;++x){var _=c[x];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var a=i(this);function o(c,x){if(x)t:{var _=a;c=c.split(".");for(var A=0;A<c.length-1;A++){var K=c[A];if(!(K in _))break t;_=_[K]}c=c[c.length-1],A=_[c],x=x(A),x!=A&&x!=null&&t(_,c,{configurable:!0,writable:!0,value:x})}}o("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(c){return c||function(x){var _=[],A;for(A in x)Object.prototype.hasOwnProperty.call(x,A)&&_.push([A,x[A]]);return _}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function m(c){var x=typeof c;return x=="object"&&c!=null||x=="function"}function p(c,x,_){return c.call.apply(c.bind,arguments)}function g(c,x,_){return g=p,g.apply(null,arguments)}function v(c,x){var _=Array.prototype.slice.call(arguments,1);return function(){var A=_.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function E(c,x){function _(){}_.prototype=x.prototype,c.Z=x.prototype,c.prototype=new _,c.prototype.constructor=c,c.Ob=function(A,K,W){for(var ut=Array(arguments.length-2),Rt=2;Rt<arguments.length;Rt++)ut[Rt-2]=arguments[Rt];return x.prototype[K].apply(A,ut)}}var S=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function R(c){const x=c.length;if(x>0){const _=Array(x);for(let A=0;A<x;A++)_[A]=c[A];return _}return[]}function M(c,x){for(let A=1;A<arguments.length;A++){const K=arguments[A];var _=typeof K;if(_=_!="object"?_:K?Array.isArray(K)?"array":_:"null",_=="array"||_=="object"&&typeof K.length=="number"){_=c.length||0;const W=K.length||0;c.length=_+W;for(let ut=0;ut<W;ut++)c[_+ut]=K[ut]}else c.push(K)}}class L{constructor(x,_){this.i=x,this.j=_,this.h=0,this.g=null}get(){let x;return this.h>0?(this.h--,x=this.g,this.g=x.next,x.next=null):x=this.i(),x}}function U(c){d.setTimeout(()=>{throw c},0)}function q(){var c=C;let x=null;return c.g&&(x=c.g,c.g=c.g.next,c.g||(c.h=null),x.next=null),x}class X{constructor(){this.h=this.g=null}add(x,_){const A=tt.get();A.set(x,_),this.h?this.h.next=A:this.g=A,this.h=A}}var tt=new L(()=>new lt,c=>c.reset());class lt{constructor(){this.next=this.g=this.h=null}set(x,_){this.h=x,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let Y,ot=!1,C=new X,I=()=>{const c=Promise.resolve(void 0);Y=()=>{c.then(j)}};function j(){for(var c;c=q();){try{c.h.call(c.g)}catch(_){U(_)}var x=tt;x.j(c),x.h<100&&(x.h++,c.next=x.g,x.g=c)}ot=!1}function O(){this.u=this.u,this.C=this.C}O.prototype.u=!1,O.prototype.dispose=function(){this.u||(this.u=!0,this.N())},O.prototype[Symbol.dispose]=function(){this.dispose()},O.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function k(c,x){this.type=c,this.g=this.target=x,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var z=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,x=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};d.addEventListener("test",_,x),d.removeEventListener("test",_,x)}catch{}return c})();function D(c){return/^[\s\xa0]*$/.test(c)}function se(c,x){k.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,x)}E(se,k),se.prototype.init=function(c,x){const _=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=x,x=c.relatedTarget,x||(_=="mouseover"?x=c.fromElement:_=="mouseout"&&(x=c.toElement)),this.relatedTarget=x,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&se.Z.h.call(this)},se.prototype.h=function(){se.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Kt="closure_listenable_"+(Math.random()*1e6|0),J=0;function dt(c,x,_,A,K){this.listener=c,this.proxy=null,this.src=x,this.type=_,this.capture=!!A,this.ha=K,this.key=++J,this.da=this.fa=!1}function yt(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Ct(c,x,_){for(const A in c)x.call(_,c[A],A,c)}function V(c,x){for(const _ in c)x.call(void 0,c[_],_,c)}function at(c){const x={};for(const _ in c)x[_]=c[_];return x}const ct="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ht(c,x){let _,A;for(let K=1;K<arguments.length;K++){A=arguments[K];for(_ in A)c[_]=A[_];for(let W=0;W<ct.length;W++)_=ct[W],Object.prototype.hasOwnProperty.call(A,_)&&(c[_]=A[_])}}function gt(c){this.src=c,this.g={},this.h=0}gt.prototype.add=function(c,x,_,A,K){const W=c.toString();c=this.g[W],c||(c=this.g[W]=[],this.h++);const ut=_t(c,x,A,K);return ut>-1?(x=c[ut],_||(x.fa=!1)):(x=new dt(x,this.src,W,!!A,K),x.fa=_,c.push(x)),x};function jt(c,x){const _=x.type;if(_ in c.g){var A=c.g[_],K=Array.prototype.indexOf.call(A,x,void 0),W;(W=K>=0)&&Array.prototype.splice.call(A,K,1),W&&(yt(x),c.g[_].length==0&&(delete c.g[_],c.h--))}}function _t(c,x,_,A){for(let K=0;K<c.length;++K){const W=c[K];if(!W.da&&W.listener==x&&W.capture==!!_&&W.ha==A)return K}return-1}var ge="closure_lm_"+(Math.random()*1e6|0),Lt={};function Me(c,x,_,A,K){if(Array.isArray(x)){for(let W=0;W<x.length;W++)Me(c,x[W],_,A,K);return null}return _=Su(_),c&&c[Kt]?c.J(x,_,m(A)?!!A.capture:!1,K):Ni(c,x,_,!1,A,K)}function Ni(c,x,_,A,K,W){if(!x)throw Error("Invalid event type");const ut=m(K)?!!K.capture:!!K;let Rt=Io(c);if(Rt||(c[ge]=Rt=new gt(c)),_=Rt.add(x,_,A,ut,W),_.proxy)return _;if(A=Hn(),_.proxy=A,A.src=c,A.listener=_,c.addEventListener)z||(K=ut),K===void 0&&(K=!1),c.addEventListener(x.toString(),A,K);else if(c.attachEvent)c.attachEvent(rs(x.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Hn(){function c(_){return x.call(c.src,c.listener,_)}const x=hd;return c}function ln(c,x,_,A,K){if(Array.isArray(x))for(var W=0;W<x.length;W++)ln(c,x[W],_,A,K);else A=m(A)?!!A.capture:!!A,_=Su(_),c&&c[Kt]?(c=c.i,W=String(x).toString(),W in c.g&&(x=c.g[W],_=_t(x,_,A,K),_>-1&&(yt(x[_]),Array.prototype.splice.call(x,_,1),x.length==0&&(delete c.g[W],c.h--)))):c&&(c=Io(c))&&(x=c.g[x.toString()],c=-1,x&&(c=_t(x,_,A,K)),(_=c>-1?x[c]:null)&&la(_))}function la(c){if(typeof c!="number"&&c&&!c.da){var x=c.src;if(x&&x[Kt])jt(x.i,c);else{var _=c.type,A=c.proxy;x.removeEventListener?x.removeEventListener(_,A,c.capture):x.detachEvent?x.detachEvent(rs(_),A):x.addListener&&x.removeListener&&x.removeListener(A),(_=Io(x))?(jt(_,c),_.h==0&&(_.src=null,x[ge]=null)):yt(c)}}}function rs(c){return c in Lt?Lt[c]:Lt[c]="on"+c}function hd(c,x){if(c.da)c=!0;else{x=new se(x,this);const _=c.listener,A=c.ha||c.src;c.fa&&la(c),c=_.call(A,x)}return c}function Io(c){return c=c[ge],c instanceof gt?c:null}var pn="__closure_events_fn_"+(Math.random()*1e9>>>0);function Su(c){return typeof c=="function"?c:(c[pn]||(c[pn]=function(x){return c.handleEvent(x)}),c[pn])}function Oe(){O.call(this),this.i=new gt(this),this.M=this,this.G=null}E(Oe,O),Oe.prototype[Kt]=!0,Oe.prototype.removeEventListener=function(c,x,_,A){ln(this,c,x,_,A)};function ze(c,x){var _,A=c.G;if(A)for(_=[];A;A=A.G)_.push(A);if(c=c.M,A=x.type||x,typeof x=="string")x=new k(x,c);else if(x instanceof k)x.target=x.target||c;else{var K=x;x=new k(A,c),ht(x,K)}K=!0;let W,ut;if(_)for(ut=_.length-1;ut>=0;ut--)W=x.g=_[ut],K=Mi(W,A,!0,x)&&K;if(W=x.g=c,K=Mi(W,A,!0,x)&&K,K=Mi(W,A,!1,x)&&K,_)for(ut=0;ut<_.length;ut++)W=x.g=_[ut],K=Mi(W,A,!1,x)&&K}Oe.prototype.N=function(){if(Oe.Z.N.call(this),this.i){var c=this.i;for(const x in c.g){const _=c.g[x];for(let A=0;A<_.length;A++)yt(_[A]);delete c.g[x],c.h--}}this.G=null},Oe.prototype.J=function(c,x,_,A){return this.i.add(String(c),x,!1,_,A)},Oe.prototype.K=function(c,x,_,A){return this.i.add(String(c),x,!0,_,A)};function Mi(c,x,_,A){if(x=c.i.g[String(x)],!x)return!0;x=x.concat();let K=!0;for(let W=0;W<x.length;++W){const ut=x[W];if(ut&&!ut.da&&ut.capture==_){const Rt=ut.listener,oe=ut.ha||ut.src;ut.fa&&jt(c.i,ut),K=Rt.call(oe,A)!==!1&&K}}return K&&!A.defaultPrevented}function dd(c,x){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=g(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(x)>2147483647?-1:d.setTimeout(c,x||0)}function Co(c){c.g=dd(()=>{c.g=null,c.i&&(c.i=!1,Co(c))},c.l);const x=c.h;c.h=null,c.m.apply(null,x)}class fd extends O{constructor(x,_){super(),this.m=x,this.l=_,this.h=null,this.i=!1,this.g=null}j(x){this.h=arguments,this.g?this.i=!0:Co(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ua(c){O.call(this),this.h=c,this.g={}}E(ua,O);var cr=[];function tn(c){Ct(c.g,function(x,_){this.g.hasOwnProperty(_)&&la(x)},c),c.g={}}ua.prototype.N=function(){ua.Z.N.call(this),tn(this)},ua.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Dn=d.JSON.stringify,un=d.JSON.parse,pd=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function Au(){}function Ru(){}var oi={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function hr(){k.call(this,"d")}E(hr,k);function Gn(){k.call(this,"c")}E(Gn,k);var Nn={},dr=null;function as(){return dr=dr||new Oe}Nn.Ia="serverreachability";function jo(c){k.call(this,Nn.Ia,c)}E(jo,k);function fr(c){const x=as();ze(x,new jo(x))}Nn.STAT_EVENT="statevent";function ss(c,x){k.call(this,Nn.STAT_EVENT,c),this.stat=x}E(ss,k);function ve(c){const x=as();ze(x,new ss(x,c))}Nn.Ja="timingevent";function Iu(c,x){k.call(this,Nn.Ja,c),this.size=x}E(Iu,k);function pr(c,x){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},x)}function mr(){this.g=!0}mr.prototype.ua=function(){this.g=!1};function Do(c,x,_,A,K,W){c.info(function(){if(c.g)if(W){var ut="",Rt=W.split("&");for(let Qt=0;Qt<Rt.length;Qt++){var oe=Rt[Qt].split("=");if(oe.length>1){const Ee=oe[0];oe=oe[1];const wn=Ee.split("_");ut=wn.length>=2&&wn[1]=="type"?ut+(Ee+"="+oe+"&"):ut+(Ee+"=redacted&")}}}else ut=null;else ut=W;return"XMLHTTP REQ ("+A+") [attempt "+K+"]: "+x+`
`+_+`
`+ut})}function No(c,x,_,A,K,W,ut){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+K+"]: "+x+`
`+_+`
`+W+" "+ut})}function Oi(c,x,_,A){c.info(function(){return"XMLHTTP TEXT ("+x+"): "+li(c,_)+(A?" "+A:"")})}function md(c,x){c.info(function(){return"TIMEOUT: "+x})}mr.prototype.info=function(){};function li(c,x){if(!c.g)return x;if(!x)return null;try{const W=JSON.parse(x);if(W){for(c=0;c<W.length;c++)if(Array.isArray(W[c])){var _=W[c];if(!(_.length<2)){var A=_[1];if(Array.isArray(A)&&!(A.length<1)){var K=A[0];if(K!="noop"&&K!="stop"&&K!="close")for(let ut=1;ut<A.length;ut++)A[ut]=""}}}}return Dn(W)}catch{return x}}var _e={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ge={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Vi;function ca(){}E(ca,Au),ca.prototype.g=function(){return new XMLHttpRequest},Vi=new ca;function ha(c){return encodeURIComponent(String(c))}function gd(c){var x=1;c=c.split(":");const _=[];for(;x>0&&c.length;)_.push(c.shift()),x--;return c.length&&_.push(c.join(":")),_}function Yn(c,x,_,A){this.j=c,this.i=x,this.l=_,this.S=A||1,this.V=new ua(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new gr}function gr(){this.i=null,this.g="",this.h=!1}var os={},ui={};function ci(c,x,_){c.M=1,c.A=Pi(fe(x)),c.u=_,c.R=!0,yr(c,null)}function yr(c,x){c.F=Date.now(),da(c),c.B=fe(c.A);var _=c.B,A=c.S;Array.isArray(A)||(A=[String(A)]),Nu(_.i,"t",A),c.C=0,_=c.j.L,c.h=new gr,c.g=ys(c.j,_?x:null,!c.u),c.P>0&&(c.O=new fd(g(c.Y,c,c.g),c.P)),x=c.V,_=c.g,A=c.ba;var K="readystatechange";Array.isArray(K)||(K&&(cr[0]=K.toString()),K=cr);for(let W=0;W<K.length;W++){const ut=Me(_,K[W],A||x.handleEvent,!1,x.h||x);if(!ut)break;x.g[ut.key]=ut}x=c.J?at(c.J):{},c.u?(c.v||(c.v="POST"),x["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,x)):(c.v="GET",c.g.ea(c.B,c.v,null,x)),fr(),Do(c.i,c.v,c.B,c.l,c.S,c.u)}Yn.prototype.ba=function(c){c=c.target;const x=this.O;x&&en(c)==3?x.j():this.Y(c)},Yn.prototype.Y=function(c){try{if(c==this.g)t:{const Rt=en(this.g),oe=this.g.ya(),Qt=this.g.ca();if(!(Rt<3)&&(Rt!=3||this.g&&(this.h.h||this.g.la()||ba(this.g)))){this.K||Rt!=4||oe==7||(oe==8||Qt<=0?fr(3):fr(2)),di(this);var x=this.g.ca();this.X=x;var _=xr(this);if(this.o=x==200,No(this.i,this.v,this.B,this.l,this.S,Rt,x),this.o){if(this.U&&!this.L){e:{if(this.g){var A,K=this.g;if((A=K.g?K.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(A)){var W=A;break e}}W=null}if(c=W)Oi(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ls(this,c);else{this.o=!1,this.m=3,ve(12),fi(this),fa(this);break t}}if(this.R){c=!0;let Ee;for(;!this.K&&this.C<_.length;)if(Ee=Cu(this,_),Ee==ui){Rt==4&&(this.m=4,ve(14),c=!1),Oi(this.i,this.l,null,"[Incomplete Response]");break}else if(Ee==os){this.m=4,ve(15),Oi(this.i,this.l,_,"[Invalid Chunk]"),c=!1;break}else Oi(this.i,this.l,Ee,null),ls(this,Ee);if(we(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Rt!=4||_.length!=0||this.h.h||(this.m=1,ve(16),c=!1),this.o=this.o&&c,!c)Oi(this.i,this.l,_,"[Invalid Chunked Response]"),fi(this),fa(this);else if(_.length>0&&!this.W){this.W=!0;var ut=this.j;ut.g==this&&ut.aa&&!ut.P&&(ut.j.info("Great, no buffering proxy detected. Bytes received: "+_.length),Bo(ut),ut.P=!0,ve(11))}}else Oi(this.i,this.l,_,null),ls(this,_);Rt==4&&fi(this),this.o&&!this.K&&(Rt==4?Fo(this.j,this):(this.o=!1,da(this)))}else Ta(this.g),x==400&&_.indexOf("Unknown SID")>0?(this.m=3,ve(12)):(this.m=0,ve(13)),fi(this),fa(this)}}}catch{}finally{}};function xr(c){if(!we(c))return c.g.la();const x=ba(c.g);if(x==="")return"";let _="";const A=x.length,K=en(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return fi(c),fa(c),"";c.h.i=new d.TextDecoder}for(let W=0;W<A;W++)c.h.h=!0,_+=c.h.i.decode(x[W],{stream:!(K&&W==A-1)});return x.length=0,c.h.g+=_,c.C=0,c.h.g}function we(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function Cu(c,x){var _=c.C,A=x.indexOf(`
`,_);return A==-1?ui:(_=Number(x.substring(_,A)),isNaN(_)?os:(A+=1,A+_>x.length?ui:(x=x.slice(A,A+_),c.C=A+_,x)))}Yn.prototype.cancel=function(){this.K=!0,fi(this)};function da(c){c.T=Date.now()+c.H,hi(c,c.H)}function hi(c,x){if(c.D!=null)throw Error("WatchDog timer not null");c.D=pr(g(c.aa,c),x)}function di(c){c.D&&(d.clearTimeout(c.D),c.D=null)}Yn.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(md(this.i,this.B),this.M!=2&&(fr(),ve(17)),fi(this),this.m=2,fa(this)):hi(this,this.T-c)};function fa(c){c.j.I==0||c.K||Fo(c.j,c)}function fi(c){di(c);var x=c.O;x&&typeof x.dispose=="function"&&x.dispose(),c.O=null,tn(c.V),c.g&&(x=c.g,c.g=null,x.abort(),x.dispose())}function ls(c,x){try{var _=c.j;if(_.I!=0&&(_.g==c||ga(_.h,c))){if(!c.L&&ga(_.h,c)&&_.I==3){try{var A=_.Ba.g.parse(x)}catch{A=null}if(Array.isArray(A)&&A.length==3){var K=A;if(K[0]==0){t:if(!_.v){if(_.g)if(_.g.F+3e3<c.F)gs(_),pi(_);else break t;$o(_),ve(18)}}else _.xa=K[1],0<_.xa-_.K&&K[2]<37500&&_.F&&_.A==0&&!_.C&&(_.C=pr(g(_.Va,_),6e3));Mn(_.h)<=1&&_.ta&&(_.ta=void 0)}else zi(_,11)}else if((c.L||_.g==c)&&gs(_),!D(x))for(K=_.Ba.g.parse(x),x=0;x<K.length;x++){let Qt=K[x];const Ee=Qt[0];if(!(Ee<=_.K))if(_.K=Ee,Qt=Qt[1],_.I==2)if(Qt[0]=="c"){_.M=Qt[1],_.ba=Qt[2];const wn=Qt[3];wn!=null&&(_.ka=wn,_.j.info("VER="+_.ka));const mi=Qt[4];mi!=null&&(_.za=mi,_.j.info("SVER="+_.za));const Wn=Qt[5];Wn!=null&&typeof Wn=="number"&&Wn>0&&(A=1.5*Wn,_.O=A,_.j.info("backChannelRequestTimeoutMs_="+A)),A=_;const Zn=c.g;if(Zn){const Jn=Zn.g?Zn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Jn){var W=A.h;W.g||Jn.indexOf("spdy")==-1&&Jn.indexOf("quic")==-1&&Jn.indexOf("h2")==-1||(W.j=W.l,W.g=new Set,W.h&&(us(W,W.h),W.h=null))}if(A.G){const qo=Zn.g?Zn.g.getResponseHeader("X-HTTP-Session-Id"):null;qo&&(A.wa=qo,Zt(A.J,A.G,qo))}}_.I=3,_.l&&_.l.ra(),_.aa&&(_.T=Date.now()-c.F,_.j.info("Handshake RTT: "+_.T+"ms")),A=_;var ut=c;if(A.na=$u(A,A.L?A.ba:null,A.W),ut.L){ki(A.h,ut);var Rt=ut,oe=A.O;oe&&(Rt.H=oe),Rt.D&&(di(Rt),da(Rt)),A.g=ut}else Pu(A);_.i.length>0&&Ia(_)}else Qt[0]!="stop"&&Qt[0]!="close"||zi(_,7);else _.I==3&&(Qt[0]=="stop"||Qt[0]=="close"?Qt[0]=="stop"?zi(_,7):Aa(_):Qt[0]!="noop"&&_.l&&_.l.qa(Qt),_.A=0)}}fr(4)}catch{}}var yd=class{constructor(c,x){this.g=c,this.map=x}};function pa(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ma(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Mn(c){return c.h?1:c.g?c.g.size:0}function ga(c,x){return c.h?c.h==x:c.g?c.g.has(x):!1}function us(c,x){c.g?c.g.add(x):c.h=x}function ki(c,x){c.h&&c.h==x?c.h=null:c.g&&c.g.has(x)&&c.g.delete(x)}pa.prototype.cancel=function(){if(this.i=cs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function cs(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let x=c.i;for(const _ of c.g.values())x=x.concat(_.G);return x}return R(c.i)}var hs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xd(c,x){if(c){c=c.split("&");for(let _=0;_<c.length;_++){const A=c[_].indexOf("=");let K,W=null;A>=0?(K=c[_].substring(0,A),W=c[_].substring(A+1)):K=c[_],x(K,W?decodeURIComponent(W.replace(/\+/g," ")):"")}}}function Qn(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let x;c instanceof Qn?(this.l=c.l,vr(this,c.j),this.o=c.o,this.g=c.g,ya(this,c.u),this.h=c.h,_r(this,Mu(c.i)),this.m=c.m):c&&(x=String(c).match(hs))?(this.l=!1,vr(this,x[1]||"",!0),this.o=xa(x[2]||""),this.g=xa(x[3]||"",!0),ya(this,x[4]),this.h=xa(x[5]||"",!0),_r(this,x[6]||"",!0),this.m=xa(x[7]||"")):(this.l=!1,this.i=new On(null,this.l))}Qn.prototype.toString=function(){const c=[];var x=this.j;x&&c.push($e(x,Oo,!0),":");var _=this.g;return(_||x=="file")&&(c.push("//"),(x=this.o)&&c.push($e(x,Oo,!0),"@"),c.push(ha(_).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.u,_!=null&&c.push(":",String(_))),(_=this.h)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push($e(_,_.charAt(0)=="/"?wr:Vo,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",$e(_,Du)),c.join("")},Qn.prototype.resolve=function(c){const x=fe(this);let _=!!c.j;_?vr(x,c.j):_=!!c.o,_?x.o=c.o:_=!!c.g,_?x.g=c.g:_=c.u!=null;var A=c.h;if(_)ya(x,c.u);else if(_=!!c.h){if(A.charAt(0)!="/")if(this.g&&!this.h)A="/"+A;else{var K=x.h.lastIndexOf("/");K!=-1&&(A=x.h.slice(0,K+1)+A)}if(K=A,K==".."||K==".")A="";else if(K.indexOf("./")!=-1||K.indexOf("/.")!=-1){A=K.lastIndexOf("/",0)==0,K=K.split("/");const W=[];for(let ut=0;ut<K.length;){const Rt=K[ut++];Rt=="."?A&&ut==K.length&&W.push(""):Rt==".."?((W.length>1||W.length==1&&W[0]!="")&&W.pop(),A&&ut==K.length&&W.push("")):(W.push(Rt),A=!0)}A=W.join("/")}else A=K}return _?x.h=A:_=c.i.toString()!=="",_?_r(x,Mu(c.i)):_=!!c.m,_&&(x.m=c.m),x};function fe(c){return new Qn(c)}function vr(c,x,_){c.j=_?xa(x,!0):x,c.j&&(c.j=c.j.replace(/:$/,""))}function ya(c,x){if(x){if(x=Number(x),isNaN(x)||x<0)throw Error("Bad port number "+x);c.u=x}else c.u=null}function _r(c,x,_){x instanceof On?(c.i=x,Uo(c.i,c.l)):(_||(x=$e(x,ju)),c.i=new On(x,c.l))}function Zt(c,x,_){c.i.set(x,_)}function Pi(c){return Zt(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function xa(c,x){return c?x?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function $e(c,x,_){return typeof c=="string"?(c=encodeURI(c).replace(x,Mo),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Mo(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Oo=/[#\/\?@]/g,Vo=/[#\?:]/g,wr=/[#\?]/g,ju=/[#\?@]/g,Du=/#/g;function On(c,x){this.h=this.g=null,this.i=c||null,this.j=!!x}function Ui(c){c.g||(c.g=new Map,c.h=0,c.i&&xd(c.i,function(x,_){c.add(decodeURIComponent(x.replace(/\+/g," ")),_)}))}n=On.prototype,n.add=function(c,x){Ui(this),this.i=null,c=Xn(this,c);let _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(x),this.h+=1,this};function ko(c,x){Ui(c),x=Xn(c,x),c.g.has(x)&&(c.i=null,c.h-=c.g.get(x).length,c.g.delete(x))}function Po(c,x){return Ui(c),x=Xn(c,x),c.g.has(x)}n.forEach=function(c,x){Ui(this),this.g.forEach(function(_,A){_.forEach(function(K){c.call(x,K,A,this)},this)},this)};function ds(c,x){Ui(c);let _=[];if(typeof x=="string")Po(c,x)&&(_=_.concat(c.g.get(Xn(c,x))));else for(c=Array.from(c.g.values()),x=0;x<c.length;x++)_=_.concat(c[x]);return _}n.set=function(c,x){return Ui(this),this.i=null,c=Xn(this,c),Po(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[x]),this.h+=1,this},n.get=function(c,x){return c?(c=ds(this,c),c.length>0?String(c[0]):x):x};function Nu(c,x,_){ko(c,x),_.length>0&&(c.i=null,c.g.set(Xn(c,x),R(_)),c.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],x=Array.from(this.g.keys());for(let A=0;A<x.length;A++){var _=x[A];const K=ha(_);_=ds(this,_);for(let W=0;W<_.length;W++){let ut=K;_[W]!==""&&(ut+="="+ha(_[W])),c.push(ut)}}return this.i=c.join("&")};function Mu(c){const x=new On;return x.i=c.i,c.g&&(x.g=new Map(c.g),x.h=c.h),x}function Xn(c,x){return x=String(x),c.j&&(x=x.toLowerCase()),x}function Uo(c,x){x&&!c.j&&(Ui(c),c.i=null,c.g.forEach(function(_,A){const K=A.toLowerCase();A!=K&&(ko(this,A),Nu(this,K,_))},c)),c.j=x}function Lo(c,x){const _=new mr;if(d.Image){const A=new Image;A.onload=v(cn,_,"TestLoadImage: loaded",!0,x,A),A.onerror=v(cn,_,"TestLoadImage: error",!1,x,A),A.onabort=v(cn,_,"TestLoadImage: abort",!1,x,A),A.ontimeout=v(cn,_,"TestLoadImage: timeout",!1,x,A),d.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else x(!1)}function Er(c,x){const _=new mr,A=new AbortController,K=setTimeout(()=>{A.abort(),cn(_,"TestPingServer: timeout",!1,x)},1e4);fetch(c,{signal:A.signal}).then(W=>{clearTimeout(K),W.ok?cn(_,"TestPingServer: ok",!0,x):cn(_,"TestPingServer: server error",!1,x)}).catch(()=>{clearTimeout(K),cn(_,"TestPingServer: error",!1,x)})}function cn(c,x,_,A,K){try{K&&(K.onload=null,K.onerror=null,K.onabort=null,K.ontimeout=null),A(_)}catch{}}function Ou(){this.g=new pd}function va(c){this.i=c.Sb||null,this.h=c.ab||!1}E(va,Au),va.prototype.g=function(){return new _a(this.i,this.h)};function _a(c,x){Oe.call(this),this.H=c,this.o=x,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}E(_a,Oe),n=_a.prototype,n.open=function(c,x){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=x,this.readyState=1,Li(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const x={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(x.body=c),(this.H||d).fetch(new Request(this.D,x)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,hn(this)),this.readyState=0},n.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Li(this)),this.g&&(this.readyState=3,Li(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;br(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function br(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}n.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var x=c.value?c.value:new Uint8Array(0);(x=this.B.decode(x,{stream:!c.done}))&&(this.response=this.responseText+=x)}c.done?hn(this):Li(this),this.readyState==3&&br(this)}},n.Oa=function(c){this.g&&(this.response=this.responseText=c,hn(this))},n.Na=function(c){this.g&&(this.response=c,hn(this))},n.ga=function(){this.g&&hn(this)};function hn(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Li(c)}n.setRequestHeader=function(c,x){this.A.append(c,x)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],x=this.h.entries();for(var _=x.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=x.next();return c.join(`\r
`)};function Li(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(_a.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Tr(c){let x="";return Ct(c,function(_,A){x+=A,x+=":",x+=_,x+=`\r
`}),x}function Vn(c,x,_){t:{for(A in _){var A=!1;break t}A=!0}A||(_=Tr(_),typeof c=="string"?_!=null&&ha(_):Zt(c,x,_))}function ie(c){Oe.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}E(ie,Oe);var fs=/^https?$/i,Vu=["POST","PUT"];n=ie.prototype,n.Fa=function(c){this.H=c},n.ea=function(c,x,_,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);x=x?x.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Vi.g(),this.g.onreadystatechange=S(g(this.Ca,this));try{this.B=!0,this.g.open(x,String(c),!0),this.B=!1}catch(W){wa(this,W);return}if(c=_||"",_=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var K in A)_.set(K,A[K]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const W of A.keys())_.set(W,A.get(W));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(_.keys()).find(W=>W.toLowerCase()=="content-type"),K=d.FormData&&c instanceof d.FormData,!(Array.prototype.indexOf.call(Vu,x,void 0)>=0)||A||K||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[W,ut]of _)this.g.setRequestHeader(W,ut);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(W){wa(this,W)}};function wa(c,x){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=x,c.o=5,Ea(c),Ve(c)}function Ea(c){c.A||(c.A=!0,ze(c,"complete"),ze(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,ze(this,"complete"),ze(this,"abort"),Ve(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ve(this,!0)),ie.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?zo(this):this.Xa())},n.Xa=function(){zo(this)};function zo(c){if(c.h&&typeof u<"u"){if(c.v&&en(c)==4)setTimeout(c.Ca.bind(c),0);else if(ze(c,"readystatechange"),en(c)==4){c.h=!1;try{const W=c.ca();t:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var x=!0;break t;default:x=!1}var _;if(!(_=x)){var A;if(A=W===0){let ut=String(c.D).match(hs)[1]||null;!ut&&d.self&&d.self.location&&(ut=d.self.location.protocol.slice(0,-1)),A=!fs.test(ut?ut.toLowerCase():"")}_=A}if(_)ze(c,"complete"),ze(c,"success");else{c.o=6;try{var K=en(c)>2?c.g.statusText:""}catch{K=""}c.l=K+" ["+c.ca()+"]",Ea(c)}}finally{Ve(c)}}}}function Ve(c,x){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const _=c.g;c.g=null,x||ze(c,"ready");try{_.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function en(c){return c.g?c.g.readyState:0}n.ca=function(){try{return en(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(c){if(this.g){var x=this.g.responseText;return c&&x.indexOf(c)==0&&(x=x.substring(c.length)),un(x)}};function ba(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Ta(c){const x={};c=(c.g&&en(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(D(c[A]))continue;var _=gd(c[A]);const K=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const W=x[K]||[];x[K]=W,W.push(_)}V(x,function(A){return A.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Sa(c,x,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||x}function ps(c){this.za=0,this.i=[],this.j=new mr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Sa("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Sa("baseRetryDelayMs",5e3,c),this.Za=Sa("retryDelaySeedMs",1e4,c),this.Ta=Sa("forwardChannelMaxRetries",2,c),this.va=Sa("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new pa(c&&c.concurrentRequestLimit),this.Ba=new Ou,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=ps.prototype,n.ka=8,n.I=1,n.connect=function(c,x,_,A){ve(0),this.W=c,this.H=x||{},_&&A!==void 0&&(this.H.OSID=_,this.H.OAID=A),this.F=this.X,this.J=$u(this,null,this.W),Ia(this)};function Aa(c){if(Ra(c),c.I==3){var x=c.V++,_=fe(c.J);if(Zt(_,"SID",c.M),Zt(_,"RID",x),Zt(_,"TYPE","terminate"),Ca(c,_),x=new Yn(c,c.j,x),x.M=2,x.A=Pi(fe(_)),_=!1,d.navigator&&d.navigator.sendBeacon)try{_=d.navigator.sendBeacon(x.A.toString(),"")}catch{}!_&&d.Image&&(new Image().src=x.A,_=!0),_||(x.g=ys(x.j,null),x.g.ea(x.A)),x.F=Date.now(),da(x)}zu(c)}function pi(c){c.g&&(Bo(c),c.g.cancel(),c.g=null)}function Ra(c){pi(c),c.v&&(d.clearTimeout(c.v),c.v=null),gs(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&d.clearTimeout(c.m),c.m=null)}function Ia(c){if(!ma(c.h)&&!c.m){c.m=!0;var x=c.Ea;Y||I(),ot||(Y(),ot=!0),C.add(x,c),c.D=0}}function vd(c,x){return Mn(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=x.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=pr(g(c.Ea,c,x),Lu(c,c.D)),c.D++,!0)}n.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const K=new Yn(this,this.j,c);let W=this.o;if(this.U&&(W?(W=at(W),ht(W,this.U)):W=this.U),this.u!==null||this.R||(K.J=W,W=null),this.S)t:{for(var x=0,_=0;_<this.i.length;_++){e:{var A=this.i[_];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break e}A=void 0}if(A===void 0)break;if(x+=A,x>4096){x=_;break t}if(x===4096||_===this.i.length-1){x=_+1;break t}}x=1e3}else x=1e3;x=ms(this,K,x),_=fe(this.J),Zt(_,"RID",c),Zt(_,"CVER",22),this.G&&Zt(_,"X-HTTP-Session-Id",this.G),Ca(this,_),W&&(this.R?x="headers="+ha(Tr(W))+"&"+x:this.u&&Vn(_,this.u,W)),us(this.h,K),this.Ra&&Zt(_,"TYPE","init"),this.S?(Zt(_,"$req",x),Zt(_,"SID","null"),K.U=!0,ci(K,_,null)):ci(K,_,x),this.I=2}}else this.I==3&&(c?ku(this,c):this.i.length==0||ma(this.h)||ku(this))};function ku(c,x){var _;x?_=x.l:_=c.V++;const A=fe(c.J);Zt(A,"SID",c.M),Zt(A,"RID",_),Zt(A,"AID",c.K),Ca(c,A),c.u&&c.o&&Vn(A,c.u,c.o),_=new Yn(c,c.j,_,c.D+1),c.u===null&&(_.J=c.o),x&&(c.i=x.G.concat(c.i)),x=ms(c,_,1e3),_.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),us(c.h,_),ci(_,A,x)}function Ca(c,x){c.H&&Ct(c.H,function(_,A){Zt(x,A,_)}),c.l&&Ct({},function(_,A){Zt(x,A,_)})}function ms(c,x,_){_=Math.min(c.i.length,_);const A=c.l?g(c.l.Ka,c.l,c):null;t:{var K=c.i;let Rt=-1;for(;;){const oe=["count="+_];Rt==-1?_>0?(Rt=K[0].g,oe.push("ofs="+Rt)):Rt=0:oe.push("ofs="+Rt);let Qt=!0;for(let Ee=0;Ee<_;Ee++){var W=K[Ee].g;const wn=K[Ee].map;if(W-=Rt,W<0)Rt=Math.max(0,K[Ee].g-100),Qt=!1;else try{W="req"+W+"_"||"";try{var ut=wn instanceof Map?wn:Object.entries(wn);for(const[mi,Wn]of ut){let Zn=Wn;m(Wn)&&(Zn=Dn(Wn)),oe.push(W+mi+"="+encodeURIComponent(Zn))}}catch(mi){throw oe.push(W+"type="+encodeURIComponent("_badmap")),mi}}catch{A&&A(wn)}}if(Qt){ut=oe.join("&");break t}}ut=void 0}return c=c.i.splice(0,_),x.G=c,ut}function Pu(c){if(!c.g&&!c.v){c.Y=1;var x=c.Da;Y||I(),ot||(Y(),ot=!0),C.add(x,c),c.A=0}}function $o(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=pr(g(c.Da,c),Lu(c,c.A)),c.A++,!0)}n.Da=function(){if(this.v=null,Uu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=pr(g(this.Wa,this),c)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ve(10),pi(this),Uu(this))};function Bo(c){c.B!=null&&(d.clearTimeout(c.B),c.B=null)}function Uu(c){c.g=new Yn(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var x=fe(c.na);Zt(x,"RID","rpc"),Zt(x,"SID",c.M),Zt(x,"AID",c.K),Zt(x,"CI",c.F?"0":"1"),!c.F&&c.ia&&Zt(x,"TO",c.ia),Zt(x,"TYPE","xmlhttp"),Ca(c,x),c.u&&c.o&&Vn(x,c.u,c.o),c.O&&(c.g.H=c.O);var _=c.g;c=c.ba,_.M=1,_.A=Pi(fe(x)),_.u=null,_.R=!0,yr(_,c)}n.Va=function(){this.C!=null&&(this.C=null,pi(this),$o(this),ve(19))};function gs(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function Fo(c,x){var _=null;if(c.g==x){gs(c),Bo(c),c.g=null;var A=2}else if(ga(c.h,x))_=x.G,ki(c.h,x),A=1;else return;if(c.I!=0){if(x.o)if(A==1){_=x.u?x.u.length:0,x=Date.now()-x.F;var K=c.D;A=as(),ze(A,new Iu(A,_)),Ia(c)}else Pu(c);else if(K=x.m,K==3||K==0&&x.X>0||!(A==1&&vd(c,x)||A==2&&$o(c)))switch(_&&_.length>0&&(x=c.h,x.i=x.i.concat(_)),K){case 1:zi(c,5);break;case 4:zi(c,10);break;case 3:zi(c,6);break;default:zi(c,2)}}}function Lu(c,x){let _=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(_*=2),_*x}function zi(c,x){if(c.j.info("Error code "+x),x==2){var _=g(c.bb,c),A=c.Ua;const K=!A;A=new Qn(A||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||vr(A,"https"),Pi(A),K?Lo(A.toString(),_):Er(A.toString(),_)}else ve(2);c.I=0,c.l&&c.l.pa(x),zu(c),Ra(c)}n.bb=function(c){c?(this.j.info("Successfully pinged google.com"),ve(2)):(this.j.info("Failed to ping google.com"),ve(1))};function zu(c){if(c.I=0,c.ja=[],c.l){const x=cs(c.h);(x.length!=0||c.i.length!=0)&&(M(c.ja,x),M(c.ja,c.i),c.h.i.length=0,R(c.i),c.i.length=0),c.l.oa()}}function $u(c,x,_){var A=_ instanceof Qn?fe(_):new Qn(_);if(A.g!="")x&&(A.g=x+"."+A.g),ya(A,A.u);else{var K=d.location;A=K.protocol,x=x?x+"."+K.hostname:K.hostname,K=+K.port;const W=new Qn(null);A&&vr(W,A),x&&(W.g=x),K&&ya(W,K),_&&(W.h=_),A=W}return _=c.G,x=c.wa,_&&x&&Zt(A,_,x),Zt(A,"VER",c.ka),Ca(c,A),A}function ys(c,x,_){if(x&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return x=c.Aa&&!c.ma?new ie(new va({ab:_})):new ie(c.ma),x.Fa(c.L),x}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Bu(){}n=Bu.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function xs(){}xs.prototype.g=function(c,x){return new dn(c,x)};function dn(c,x){Oe.call(this),this.g=new ps(x),this.l=c,this.h=x&&x.messageUrlParams||null,c=x&&x.messageHeaders||null,x&&x.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=x&&x.initMessageHeaders||null,x&&x.messageContentType&&(c?c["X-WebChannel-Content-Type"]=x.messageContentType:c={"X-WebChannel-Content-Type":x.messageContentType}),x&&x.sa&&(c?c["X-WebChannel-Client-Profile"]=x.sa:c={"X-WebChannel-Client-Profile":x.sa}),this.g.U=c,(c=x&&x.Qb)&&!D(c)&&(this.g.u=c),this.A=x&&x.supportsCrossDomainXhr||!1,this.v=x&&x.sendRawJson||!1,(x=x&&x.httpSessionIdParam)&&!D(x)&&(this.g.G=x,c=this.h,c!==null&&x in c&&(c=this.h,x in c&&delete c[x])),this.j=new Sr(this)}E(dn,Oe),dn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},dn.prototype.close=function(){Aa(this.g)},dn.prototype.o=function(c){var x=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.v&&(_={},_.__data__=Dn(c),c=_);x.i.push(new yd(x.Ya++,c)),x.I==3&&Ia(x)},dn.prototype.N=function(){this.g.l=null,delete this.j,Aa(this.g),delete this.g,dn.Z.N.call(this)};function Ko(c){hr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var x=c.__sm__;if(x){t:{for(const _ in x){c=_;break t}c=void 0}(this.i=c)&&(c=this.i,x=x!==null&&c in x?x[c]:void 0),this.data=x}else this.data=c}E(Ko,hr);function Fu(){Gn.call(this),this.status=1}E(Fu,Gn);function Sr(c){this.g=c}E(Sr,Bu),Sr.prototype.ra=function(){ze(this.g,"a")},Sr.prototype.qa=function(c){ze(this.g,new Ko(c))},Sr.prototype.pa=function(c){ze(this.g,new Fu)},Sr.prototype.oa=function(){ze(this.g,"b")},xs.prototype.createWebChannel=xs.prototype.g,dn.prototype.send=dn.prototype.o,dn.prototype.open=dn.prototype.m,dn.prototype.close=dn.prototype.close,W2=function(){return new xs},X2=function(){return as()},Q2=Nn,ym={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},_e.NO_ERROR=0,_e.TIMEOUT=8,_e.HTTP_ERROR=6,dh=_e,Ge.COMPLETE="complete",Y2=Ge,Ru.EventType=oi,oi.OPEN="a",oi.CLOSE="b",oi.ERROR="c",oi.MESSAGE="d",Oe.prototype.listen=Oe.prototype.J,Ll=Ru,ie.prototype.listenOnce=ie.prototype.K,ie.prototype.getLastError=ie.prototype.Ha,ie.prototype.getLastErrorCode=ie.prototype.ya,ie.prototype.getStatus=ie.prototype.ca,ie.prototype.getResponseJson=ie.prototype.La,ie.prototype.getResponseText=ie.prototype.la,ie.prototype.send=ie.prototype.ea,ie.prototype.setWithCredentials=ie.prototype.Fa,G2=ie}).apply(typeof Xc<"u"?Xc:typeof self<"u"?self:typeof window<"u"?window:{});const mv="@firebase/firestore",gv="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Wa=new $2("@firebase/firestore");function Xs(){return Wa.logLevel}function pt(n,...t){if(Wa.logLevel<=Bt.DEBUG){const i=t.map(fg);Wa.debug(`Firestore (${bo}): ${n}`,...i)}}function or(n,...t){if(Wa.logLevel<=Bt.ERROR){const i=t.map(fg);Wa.error(`Firestore (${bo}): ${n}`,...i)}}function co(n,...t){if(Wa.logLevel<=Bt.WARN){const i=t.map(fg);Wa.warn(`Firestore (${bo}): ${n}`,...i)}}function fg(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function bt(n,t,i){let a="Unexpected state";typeof t=="string"?a=t:i=t,Z2(n,a,i)}function Z2(n,t,i){let a=`FIRESTORE (${bo}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(i!==void 0)try{a+=" CONTEXT: "+JSON.stringify(i)}catch{a+=" CONTEXT: "+i}throw or(a),new Error(a)}function Yt(n,t,i,a){let o="Unexpected state";typeof i=="string"?o=i:a=i,n||Z2(t,o,a)}function It(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class J2{constructor(t,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class EI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,i){t.enqueueRetryable((()=>i(sn.UNAUTHENTICATED)))}shutdown(){}}class bI{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,i){this.changeListener=i,t.enqueueRetryable((()=>i(this.token.user)))}shutdown(){this.changeListener=null}}class TI{constructor(t){this.t=t,this.currentUser=sn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,i){Yt(this.o===void 0,42304);let a=this.i;const o=p=>this.i!==a?(a=this.i,i(p)):Promise.resolve();let u=new ir;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new ir,t.enqueueRetryable((()=>o(this.currentUser)))};const d=()=>{const p=u;t.enqueueRetryable((async()=>{await p.promise,await o(this.currentUser)}))},m=p=>{pt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit((p=>m(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?m(p):(pt("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new ir)}}),0),d()}getToken(){const t=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then((a=>this.i!==t?(pt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(Yt(typeof a.accessToken=="string",31837,{l:a}),new J2(a.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Yt(t===null||typeof t=="string",2055,{h:t}),new sn(t)}}class SI{constructor(t,i,a){this.P=t,this.T=i,this.I=a,this.type="FirstParty",this.user=sn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class AI{constructor(t,i,a){this.P=t,this.T=i,this.I=a}getToken(){return Promise.resolve(new SI(this.P,this.T,this.I))}start(t,i){t.enqueueRetryable((()=>i(sn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class yv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class RI{constructor(t,i){this.V=i,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,aI(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,i){Yt(this.o===void 0,3512);const a=u=>{u.error!=null&&pt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const d=u.token!==this.m;return this.m=u.token,pt("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?i(u.token):Promise.resolve()};this.o=u=>{t.enqueueRetryable((()=>a(u)))};const o=u=>{pt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):pt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new yv(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((i=>i?(Yt(typeof i.token=="string",44558,{tokenResult:i}),this.m=i.token,new yv(i.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function II(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),i=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(i);else for(let a=0;a<n;a++)i[a]=Math.floor(256*Math.random());return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=62*Math.floor(4.129032258064516);let a="";for(;a.length<20;){const o=II(40);for(let u=0;u<o.length;++u)a.length<20&&o[u]<i&&(a+=t.charAt(o[u]%62))}return a}}function Pt(n,t){return n<t?-1:n>t?1:0}function xm(n,t){const i=Math.min(n.length,t.length);for(let a=0;a<i;a++){const o=n.charAt(a),u=t.charAt(a);if(o!==u)return Mp(o)===Mp(u)?Pt(o,u):Mp(o)?1:-1}return Pt(n.length,t.length)}const CI=55296,jI=57343;function Mp(n){const t=n.charCodeAt(0);return t>=CI&&t<=jI}function ho(n,t,i){return n.length===t.length&&n.every(((a,o)=>i(a,t[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv="__name__";class Ei{constructor(t,i,a){i===void 0?i=0:i>t.length&&bt(637,{offset:i,range:t.length}),a===void 0?a=t.length-i:a>t.length-i&&bt(1746,{length:a,range:t.length-i}),this.segments=t,this.offset=i,this.len=a}get length(){return this.len}isEqual(t){return Ei.comparator(this,t)===0}child(t){const i=this.segments.slice(this.offset,this.limit());return t instanceof Ei?t.forEach((a=>{i.push(a)})):i.push(t),this.construct(i)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}forEach(t){for(let i=this.offset,a=this.limit();i<a;i++)t(this.segments[i])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,i){const a=Math.min(t.length,i.length);for(let o=0;o<a;o++){const u=Ei.compareSegments(t.get(o),i.get(o));if(u!==0)return u}return Pt(t.length,i.length)}static compareSegments(t,i){const a=Ei.isNumericId(t),o=Ei.isNumericId(i);return a&&!o?-1:!a&&o?1:a&&o?Ei.extractNumericId(t).compare(Ei.extractNumericId(i)):xm(t,i)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Zr.fromString(t.substring(4,t.length-2))}}class ae extends Ei{construct(t,i,a){return new ae(t,i,a)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const i=[];for(const a of t){if(a.indexOf("//")>=0)throw new ft(it.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);i.push(...a.split("/").filter((o=>o.length>0)))}return new ae(i)}static emptyPath(){return new ae([])}}const DI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends Ei{construct(t,i,a){return new Ze(t,i,a)}static isValidIdentifier(t){return DI.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===xv}static keyField(){return new Ze([xv])}static fromServerFormat(t){const i=[];let a="",o=0;const u=()=>{if(a.length===0)throw new ft(it.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);i.push(a),a=""};let d=!1;for(;o<t.length;){const m=t[o];if(m==="\\"){if(o+1===t.length)throw new ft(it.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const p=t[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ft(it.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);a+=p,o+=2}else m==="`"?(d=!d,o++):m!=="."||d?(a+=m,o++):(u(),o++)}if(u(),d)throw new ft(it.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ze(i)}static emptyPath(){return new Ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function tw(n,t,i){if(!i)throw new ft(it.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function NI(n,t,i,a){if(t===!0&&a===!0)throw new ft(it.INVALID_ARGUMENT,`${n} and ${i} cannot be used together.`)}function vv(n){if(!vt.isDocumentKey(n))throw new ft(it.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function _v(n){if(vt.isDocumentKey(n))throw new ft(it.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ew(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Qh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(a){return a.constructor?a.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":bt(12329,{type:typeof n})}function lr(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new ft(it.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=Qh(n);throw new ft(it.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${i}`)}}return n}/**
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
 */function Ne(n,t){const i={typeString:n};return t&&(i.value=t),i}function gu(n,t){if(!ew(n))throw new ft(it.INVALID_ARGUMENT,"JSON must be an object");let i;for(const a in t)if(t[a]){const o=t[a].typeString,u="value"in t[a]?{value:t[a].value}:void 0;if(!(a in n)){i=`JSON missing required field: '${a}'`;break}const d=n[a];if(o&&typeof d!==o){i=`JSON field '${a}' must be a ${o}.`;break}if(u!==void 0&&d!==u.value){i=`Expected '${a}' field to equal '${u.value}'`;break}}if(i)throw new ft(it.INVALID_ARGUMENT,i);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv=-62135596800,Ev=1e6;class ue{static now(){return ue.fromMillis(Date.now())}static fromDate(t){return ue.fromMillis(t.getTime())}static fromMillis(t){const i=Math.floor(t/1e3),a=Math.floor((t-1e3*i)*Ev);return new ue(i,a)}constructor(t,i){if(this.seconds=t,this.nanoseconds=i,i<0)throw new ft(it.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(i>=1e9)throw new ft(it.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(t<wv)throw new ft(it.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ft(it.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ev}_compareTo(t){return this.seconds===t.seconds?Pt(this.nanoseconds,t.nanoseconds):Pt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ue._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(gu(t,ue._jsonSchema))return new ue(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-wv;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ue._jsonSchemaVersion="firestore/timestamp/1.0",ue._jsonSchema={type:Ne("string",ue._jsonSchemaVersion),seconds:Ne("number"),nanoseconds:Ne("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const au=-1;function MI(n,t){const i=n.toTimestamp().seconds,a=n.toTimestamp().nanoseconds+1,o=At.fromTimestamp(a===1e9?new ue(i+1,0):new ue(i,a));return new ta(o,vt.empty(),t)}function OI(n){return new ta(n.readTime,n.key,au)}class ta{constructor(t,i,a){this.readTime=t,this.documentKey=i,this.largestBatchId=a}static min(){return new ta(At.min(),vt.empty(),au)}static max(){return new ta(At.max(),vt.empty(),au)}}function VI(n,t){let i=n.readTime.compareTo(t.readTime);return i!==0?i:(i=vt.comparator(n.documentKey,t.documentKey),i!==0?i:Pt(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class PI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function To(n){if(n.code!==it.FAILED_PRECONDITION||n.message!==kI)throw n;pt("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((i=>{this.isDone=!0,this.result=i,this.nextCallback&&this.nextCallback(i)}),(i=>{this.isDone=!0,this.error=i,this.catchCallback&&this.catchCallback(i)}))}catch(t){return this.next(void 0,t)}next(t,i){return this.callbackAttached&&bt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(i,this.error):this.wrapSuccess(t,this.result):new st(((a,o)=>{this.nextCallback=u=>{this.wrapSuccess(t,u).next(a,o)},this.catchCallback=u=>{this.wrapFailure(i,u).next(a,o)}}))}toPromise(){return new Promise(((t,i)=>{this.next(t,i)}))}wrapUserFunction(t){try{const i=t();return i instanceof st?i:st.resolve(i)}catch(i){return st.reject(i)}}wrapSuccess(t,i){return t?this.wrapUserFunction((()=>t(i))):st.resolve(i)}wrapFailure(t,i){return t?this.wrapUserFunction((()=>t(i))):st.reject(i)}static resolve(t){return new st(((i,a)=>{i(t)}))}static reject(t){return new st(((i,a)=>{a(t)}))}static waitFor(t){return new st(((i,a)=>{let o=0,u=0,d=!1;t.forEach((m=>{++o,m.next((()=>{++u,d&&u===o&&i()}),(p=>a(p)))})),d=!0,u===o&&i()}))}static or(t){let i=st.resolve(!1);for(const a of t)i=i.next((o=>o?st.resolve(o):a()));return i}static forEach(t,i){const a=[];return t.forEach(((o,u)=>{a.push(i.call(this,o,u))})),this.waitFor(a)}static mapArray(t,i){return new st(((a,o)=>{const u=t.length,d=new Array(u);let m=0;for(let p=0;p<u;p++){const g=p;i(t[g]).next((v=>{d[g]=v,++m,m===u&&a(d)}),(v=>o(v)))}}))}static doWhile(t,i){return new st(((a,o)=>{const u=()=>{t()===!0?i().next((()=>{u()}),o):a()};u()}))}}function UI(n){const t=n.match(/Android ([\d.]+)/i),i=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(i)}function So(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Xh{constructor(t,i){this.previousValue=t,i&&(i.sequenceNumberHandler=a=>this.ae(a),this.ue=a=>i.writeSequenceNumber(a))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Xh.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg=-1;function Wh(n){return n==null}function Ih(n){return n===0&&1/n==-1/0}function LI(n){return typeof n=="number"&&Number.isInteger(n)&&!Ih(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw="";function zI(n){let t="";for(let i=0;i<n.length;i++)t.length>0&&(t=bv(t)),t=$I(n.get(i),t);return bv(t)}function $I(n,t){let i=t;const a=n.length;for(let o=0;o<a;o++){const u=n.charAt(o);switch(u){case"\0":i+="";break;case nw:i+="";break;default:i+=u}}return i}function bv(n){return n+nw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tv(n){let t=0;for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&t++;return t}function sa(n,t){for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&t(i,n[i])}function iw(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t,i){this.comparator=t,this.root=i||We.EMPTY}insert(t,i){return new me(this.comparator,this.root.insert(t,i,this.comparator).copy(null,null,We.BLACK,null,null))}remove(t){return new me(this.comparator,this.root.remove(t,this.comparator).copy(null,null,We.BLACK,null,null))}get(t){let i=this.root;for(;!i.isEmpty();){const a=this.comparator(t,i.key);if(a===0)return i.value;a<0?i=i.left:a>0&&(i=i.right)}return null}indexOf(t){let i=0,a=this.root;for(;!a.isEmpty();){const o=this.comparator(t,a.key);if(o===0)return i+a.left.size;o<0?a=a.left:(i+=a.left.size+1,a=a.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((i,a)=>(t(i,a),!1)))}toString(){const t=[];return this.inorderTraversal(((i,a)=>(t.push(`${i}:${a}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Wc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Wc(this.root,t,this.comparator,!1)}getReverseIterator(){return new Wc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Wc(this.root,t,this.comparator,!0)}}class Wc{constructor(t,i,a,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!t.isEmpty();)if(u=i?a(t.key,i):1,i&&o&&(u*=-1),u<0)t=this.isReverse?t.left:t.right;else{if(u===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const i={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return i}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class We{constructor(t,i,a,o,u){this.key=t,this.value=i,this.color=a??We.RED,this.left=o??We.EMPTY,this.right=u??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,i,a,o,u){return new We(t??this.key,i??this.value,a??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,i,a){let o=this;const u=a(t,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(t,i,a),null):u===0?o.copy(null,i,null,null,null):o.copy(null,null,null,null,o.right.insert(t,i,a)),o.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,i){let a,o=this;if(i(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,i),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),i(t,o.key)===0){if(o.right.isEmpty())return We.EMPTY;a=o.right.min(),o=o.copy(a.key,a.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,i))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,i)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw bt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw bt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw bt(27949);return t+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw bt(57766)}get value(){throw bt(16141)}get color(){throw bt(16727)}get left(){throw bt(29726)}get right(){throw bt(36894)}copy(t,i,a,o,u){return this}insert(t,i,a){return new We(t,i)}remove(t,i){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(t){this.comparator=t,this.data=new me(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((i,a)=>(t(i),!1)))}forEachInRange(t,i){const a=this.data.getIteratorFrom(t[0]);for(;a.hasNext();){const o=a.getNext();if(this.comparator(o.key,t[1])>=0)return;i(o.key)}}forEachWhile(t,i){let a;for(a=i!==void 0?this.data.getIteratorFrom(i):this.data.getIterator();a.hasNext();)if(!t(a.getNext().key))return}firstAfterOrEqual(t){const i=this.data.getIteratorFrom(t);return i.hasNext()?i.getNext().key:null}getIterator(){return new Sv(this.data.getIterator())}getIteratorFrom(t){return new Sv(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let i=this;return i.size<t.size&&(i=t,t=this),t.forEach((a=>{i=i.add(a)})),i}isEqual(t){if(!(t instanceof Le)||this.size!==t.size)return!1;const i=this.data.getIterator(),a=t.data.getIterator();for(;i.hasNext();){const o=i.getNext().key,u=a.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((i=>{t.push(i)})),t}toString(){const t=[];return this.forEach((i=>t.push(i))),"SortedSet("+t.toString()+")"}copy(t){const i=new Le(this.comparator);return i.data=t,i}}class Sv{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t){this.fields=t,t.sort(Ze.comparator)}static empty(){return new jn([])}unionWith(t){let i=new Le(Ze.comparator);for(const a of this.fields)i=i.add(a);for(const a of t)i=i.add(a);return new jn(i.toArray())}covers(t){for(const i of this.fields)if(i.isPrefixOf(t))return!0;return!1}isEqual(t){return ho(this.fields,t.fields,((i,a)=>i.isEqual(a)))}}/**
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
 */class rw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(t){this.binaryString=t}static fromBase64String(t){const i=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new rw("Invalid base64 string: "+u):u}})(t);return new Je(i)}static fromUint8Array(t){const i=(function(o){let u="";for(let d=0;d<o.length;++d)u+=String.fromCharCode(o[d]);return u})(t);return new Je(i)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(i){return btoa(i)})(this.binaryString)}toUint8Array(){return(function(i){const a=new Uint8Array(i.length);for(let o=0;o<i.length;o++)a[o]=i.charCodeAt(o);return a})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Pt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Je.EMPTY_BYTE_STRING=new Je("");const BI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ea(n){if(Yt(!!n,39018),typeof n=="string"){let t=0;const i=BI.exec(n);if(Yt(!!i,46558,{timestamp:n}),i[1]){let o=i[1];o=(o+"000000000").substr(0,9),t=Number(o)}const a=new Date(n);return{seconds:Math.floor(a.getTime()/1e3),nanos:t}}return{seconds:Se(n.seconds),nanos:Se(n.nanos)}}function Se(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function na(n){return typeof n=="string"?Je.fromBase64String(n):Je.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aw="server_timestamp",sw="__type__",ow="__previous_value__",lw="__local_write_time__";function gg(n){return(n?.mapValue?.fields||{})[sw]?.stringValue===aw}function Zh(n){const t=n.mapValue.fields[ow];return gg(t)?Zh(t):t}function su(n){const t=ea(n.mapValue.fields[lw].timestampValue);return new ue(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(t,i,a,o,u,d,m,p,g,v){this.databaseId=t,this.appId=i,this.persistenceKey=a,this.host=o,this.ssl=u,this.forceLongPolling=d,this.autoDetectLongPolling=m,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=v}}const Ch="(default)";class ou{constructor(t,i){this.projectId=t,this.database=i||Ch}static empty(){return new ou("","")}get isDefaultDatabase(){return this.database===Ch}isEqual(t){return t instanceof ou&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw="__type__",KI="__max__",Zc={mapValue:{}},cw="__vector__",jh="value";function ia(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?gg(n)?4:HI(n)?9007199254740991:qI(n)?10:11:bt(28295,{value:n})}function Ci(n,t){if(n===t)return!0;const i=ia(n);if(i!==ia(t))return!1;switch(i){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return su(n).isEqual(su(t));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const d=ea(o.timestampValue),m=ea(u.timestampValue);return d.seconds===m.seconds&&d.nanos===m.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(o,u){return na(o.bytesValue).isEqual(na(u.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(o,u){return Se(o.geoPointValue.latitude)===Se(u.geoPointValue.latitude)&&Se(o.geoPointValue.longitude)===Se(u.geoPointValue.longitude)})(n,t);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return Se(o.integerValue)===Se(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const d=Se(o.doubleValue),m=Se(u.doubleValue);return d===m?Ih(d)===Ih(m):isNaN(d)&&isNaN(m)}return!1})(n,t);case 9:return ho(n.arrayValue.values||[],t.arrayValue.values||[],Ci);case 10:case 11:return(function(o,u){const d=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Tv(d)!==Tv(m))return!1;for(const p in d)if(d.hasOwnProperty(p)&&(m[p]===void 0||!Ci(d[p],m[p])))return!1;return!0})(n,t);default:return bt(52216,{left:n})}}function lu(n,t){return(n.values||[]).find((i=>Ci(i,t)))!==void 0}function fo(n,t){if(n===t)return 0;const i=ia(n),a=ia(t);if(i!==a)return Pt(i,a);switch(i){case 0:case 9007199254740991:return 0;case 1:return Pt(n.booleanValue,t.booleanValue);case 2:return(function(u,d){const m=Se(u.integerValue||u.doubleValue),p=Se(d.integerValue||d.doubleValue);return m<p?-1:m>p?1:m===p?0:isNaN(m)?isNaN(p)?0:-1:1})(n,t);case 3:return Av(n.timestampValue,t.timestampValue);case 4:return Av(su(n),su(t));case 5:return xm(n.stringValue,t.stringValue);case 6:return(function(u,d){const m=na(u),p=na(d);return m.compareTo(p)})(n.bytesValue,t.bytesValue);case 7:return(function(u,d){const m=u.split("/"),p=d.split("/");for(let g=0;g<m.length&&g<p.length;g++){const v=Pt(m[g],p[g]);if(v!==0)return v}return Pt(m.length,p.length)})(n.referenceValue,t.referenceValue);case 8:return(function(u,d){const m=Pt(Se(u.latitude),Se(d.latitude));return m!==0?m:Pt(Se(u.longitude),Se(d.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return Rv(n.arrayValue,t.arrayValue);case 10:return(function(u,d){const m=u.fields||{},p=d.fields||{},g=m[jh]?.arrayValue,v=p[jh]?.arrayValue,E=Pt(g?.values?.length||0,v?.values?.length||0);return E!==0?E:Rv(g,v)})(n.mapValue,t.mapValue);case 11:return(function(u,d){if(u===Zc.mapValue&&d===Zc.mapValue)return 0;if(u===Zc.mapValue)return 1;if(d===Zc.mapValue)return-1;const m=u.fields||{},p=Object.keys(m),g=d.fields||{},v=Object.keys(g);p.sort(),v.sort();for(let E=0;E<p.length&&E<v.length;++E){const S=xm(p[E],v[E]);if(S!==0)return S;const R=fo(m[p[E]],g[v[E]]);if(R!==0)return R}return Pt(p.length,v.length)})(n.mapValue,t.mapValue);default:throw bt(23264,{he:i})}}function Av(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return Pt(n,t);const i=ea(n),a=ea(t),o=Pt(i.seconds,a.seconds);return o!==0?o:Pt(i.nanos,a.nanos)}function Rv(n,t){const i=n.values||[],a=t.values||[];for(let o=0;o<i.length&&o<a.length;++o){const u=fo(i[o],a[o]);if(u)return u}return Pt(i.length,a.length)}function po(n){return vm(n)}function vm(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(i){const a=ea(i);return`time(${a.seconds},${a.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(i){return na(i).toBase64()})(n.bytesValue):"referenceValue"in n?(function(i){return vt.fromName(i).toString()})(n.referenceValue):"geoPointValue"in n?(function(i){return`geo(${i.latitude},${i.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(i){let a="[",o=!0;for(const u of i.values||[])o?o=!1:a+=",",a+=vm(u);return a+"]"})(n.arrayValue):"mapValue"in n?(function(i){const a=Object.keys(i.fields||{}).sort();let o="{",u=!0;for(const d of a)u?u=!1:o+=",",o+=`${d}:${vm(i.fields[d])}`;return o+"}"})(n.mapValue):bt(61005,{value:n})}function fh(n){switch(ia(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Zh(n);return t?16+fh(t):16;case 5:return 2*n.stringValue.length;case 6:return na(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(a){return(a.values||[]).reduce(((o,u)=>o+fh(u)),0)})(n.arrayValue);case 10:case 11:return(function(a){let o=0;return sa(a.fields,((u,d)=>{o+=u.length+fh(d)})),o})(n.mapValue);default:throw bt(13486,{value:n})}}function Iv(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function _m(n){return!!n&&"integerValue"in n}function yg(n){return!!n&&"arrayValue"in n}function Cv(n){return!!n&&"nullValue"in n}function jv(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ph(n){return!!n&&"mapValue"in n}function qI(n){return(n?.mapValue?.fields||{})[uw]?.stringValue===cw}function Hl(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return sa(n.mapValue.fields,((i,a)=>t.mapValue.fields[i]=Hl(a))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let i=0;i<(n.arrayValue.values||[]).length;++i)t.arrayValue.values[i]=Hl(n.arrayValue.values[i]);return t}return{...n}}function HI(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===KI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(t){this.value=t}static empty(){return new vn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let i=this.value;for(let a=0;a<t.length-1;++a)if(i=(i.mapValue.fields||{})[t.get(a)],!ph(i))return null;return i=(i.mapValue.fields||{})[t.lastSegment()],i||null}}set(t,i){this.getFieldsMap(t.popLast())[t.lastSegment()]=Hl(i)}setAll(t){let i=Ze.emptyPath(),a={},o=[];t.forEach(((d,m)=>{if(!i.isImmediateParentOf(m)){const p=this.getFieldsMap(i);this.applyChanges(p,a,o),a={},o=[],i=m.popLast()}d?a[m.lastSegment()]=Hl(d):o.push(m.lastSegment())}));const u=this.getFieldsMap(i);this.applyChanges(u,a,o)}delete(t){const i=this.field(t.popLast());ph(i)&&i.mapValue.fields&&delete i.mapValue.fields[t.lastSegment()]}isEqual(t){return Ci(this.value,t.value)}getFieldsMap(t){let i=this.value;i.mapValue.fields||(i.mapValue={fields:{}});for(let a=0;a<t.length;++a){let o=i.mapValue.fields[t.get(a)];ph(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},i.mapValue.fields[t.get(a)]=o),i=o}return i.mapValue.fields}applyChanges(t,i,a){sa(i,((o,u)=>t[o]=u));for(const o of a)delete t[o]}clone(){return new vn(Hl(this.value))}}function hw(n){const t=[];return sa(n.fields,((i,a)=>{const o=new Ze([i]);if(ph(a)){const u=hw(a.mapValue).fields;if(u.length===0)t.push(o);else for(const d of u)t.push(o.child(d))}else t.push(o)})),new jn(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Dh{constructor(t,i){this.position=t,this.inclusive=i}}function Dv(n,t,i){let a=0;for(let o=0;o<n.position.length;o++){const u=t[o],d=n.position[o];if(u.field.isKeyField()?a=vt.comparator(vt.fromName(d.referenceValue),i.key):a=fo(d,i.data.field(u.field)),u.dir==="desc"&&(a*=-1),a!==0)break}return a}function Nv(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let i=0;i<n.position.length;i++)if(!Ci(n.position[i],t.position[i]))return!1;return!0}/**
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
 */class uu{constructor(t,i="asc"){this.field=t,this.dir=i}}function GI(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class dw{}class De extends dw{constructor(t,i,a){super(),this.field=t,this.op=i,this.value=a}static create(t,i,a){return t.isKeyField()?i==="in"||i==="not-in"?this.createKeyFieldInFilter(t,i,a):new QI(t,i,a):i==="array-contains"?new ZI(t,a):i==="in"?new JI(t,a):i==="not-in"?new t3(t,a):i==="array-contains-any"?new e3(t,a):new De(t,i,a)}static createKeyFieldInFilter(t,i,a){return i==="in"?new XI(t,a):new WI(t,a)}matches(t){const i=t.data.field(this.field);return this.op==="!="?i!==null&&i.nullValue===void 0&&this.matchesComparison(fo(i,this.value)):i!==null&&ia(this.value)===ia(i)&&this.matchesComparison(fo(i,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return bt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ai extends dw{constructor(t,i){super(),this.filters=t,this.op=i,this.Pe=null}static create(t,i){return new ai(t,i)}matches(t){return fw(this)?this.filters.find((i=>!i.matches(t)))===void 0:this.filters.find((i=>i.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,i)=>t.concat(i.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function fw(n){return n.op==="and"}function pw(n){return YI(n)&&fw(n)}function YI(n){for(const t of n.filters)if(t instanceof ai)return!1;return!0}function wm(n){if(n instanceof De)return n.field.canonicalString()+n.op.toString()+po(n.value);if(pw(n))return n.filters.map((t=>wm(t))).join(",");{const t=n.filters.map((i=>wm(i))).join(",");return`${n.op}(${t})`}}function mw(n,t){return n instanceof De?(function(a,o){return o instanceof De&&a.op===o.op&&a.field.isEqual(o.field)&&Ci(a.value,o.value)})(n,t):n instanceof ai?(function(a,o){return o instanceof ai&&a.op===o.op&&a.filters.length===o.filters.length?a.filters.reduce(((u,d,m)=>u&&mw(d,o.filters[m])),!0):!1})(n,t):void bt(19439)}function gw(n){return n instanceof De?(function(i){return`${i.field.canonicalString()} ${i.op} ${po(i.value)}`})(n):n instanceof ai?(function(i){return i.op.toString()+" {"+i.getFilters().map(gw).join(" ,")+"}"})(n):"Filter"}class QI extends De{constructor(t,i,a){super(t,i,a),this.key=vt.fromName(a.referenceValue)}matches(t){const i=vt.comparator(t.key,this.key);return this.matchesComparison(i)}}class XI extends De{constructor(t,i){super(t,"in",i),this.keys=yw("in",i)}matches(t){return this.keys.some((i=>i.isEqual(t.key)))}}class WI extends De{constructor(t,i){super(t,"not-in",i),this.keys=yw("not-in",i)}matches(t){return!this.keys.some((i=>i.isEqual(t.key)))}}function yw(n,t){return(t.arrayValue?.values||[]).map((i=>vt.fromName(i.referenceValue)))}class ZI extends De{constructor(t,i){super(t,"array-contains",i)}matches(t){const i=t.data.field(this.field);return yg(i)&&lu(i.arrayValue,this.value)}}class JI extends De{constructor(t,i){super(t,"in",i)}matches(t){const i=t.data.field(this.field);return i!==null&&lu(this.value.arrayValue,i)}}class t3 extends De{constructor(t,i){super(t,"not-in",i)}matches(t){if(lu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const i=t.data.field(this.field);return i!==null&&i.nullValue===void 0&&!lu(this.value.arrayValue,i)}}class e3 extends De{constructor(t,i){super(t,"array-contains-any",i)}matches(t){const i=t.data.field(this.field);return!(!yg(i)||!i.arrayValue.values)&&i.arrayValue.values.some((a=>lu(this.value.arrayValue,a)))}}/**
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
 */class n3{constructor(t,i=null,a=[],o=[],u=null,d=null,m=null){this.path=t,this.collectionGroup=i,this.orderBy=a,this.filters=o,this.limit=u,this.startAt=d,this.endAt=m,this.Te=null}}function Mv(n,t=null,i=[],a=[],o=null,u=null,d=null){return new n3(n,t,i,a,o,u,d)}function xg(n){const t=It(n);if(t.Te===null){let i=t.path.canonicalString();t.collectionGroup!==null&&(i+="|cg:"+t.collectionGroup),i+="|f:",i+=t.filters.map((a=>wm(a))).join(","),i+="|ob:",i+=t.orderBy.map((a=>(function(u){return u.field.canonicalString()+u.dir})(a))).join(","),Wh(t.limit)||(i+="|l:",i+=t.limit),t.startAt&&(i+="|lb:",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((a=>po(a))).join(",")),t.endAt&&(i+="|ub:",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((a=>po(a))).join(",")),t.Te=i}return t.Te}function vg(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<n.orderBy.length;i++)if(!GI(n.orderBy[i],t.orderBy[i]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let i=0;i<n.filters.length;i++)if(!mw(n.filters[i],t.filters[i]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Nv(n.startAt,t.startAt)&&Nv(n.endAt,t.endAt)}function Em(n){return vt.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(t,i=null,a=[],o=[],u=null,d="F",m=null,p=null){this.path=t,this.collectionGroup=i,this.explicitOrderBy=a,this.filters=o,this.limit=u,this.limitType=d,this.startAt=m,this.endAt=p,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function i3(n,t,i,a,o,u,d,m){return new Ao(n,t,i,a,o,u,d,m)}function _g(n){return new Ao(n)}function Ov(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function xw(n){return n.collectionGroup!==null}function Gl(n){const t=It(n);if(t.Ie===null){t.Ie=[];const i=new Set;for(const u of t.explicitOrderBy)t.Ie.push(u),i.add(u.field.canonicalString());const a=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(d){let m=new Le(Ze.comparator);return d.filters.forEach((p=>{p.getFlattenedFilters().forEach((g=>{g.isInequality()&&(m=m.add(g.field))}))})),m})(t).forEach((u=>{i.has(u.canonicalString())||u.isKeyField()||t.Ie.push(new uu(u,a))})),i.has(Ze.keyField().canonicalString())||t.Ie.push(new uu(Ze.keyField(),a))}return t.Ie}function Ti(n){const t=It(n);return t.Ee||(t.Ee=r3(t,Gl(n))),t.Ee}function r3(n,t){if(n.limitType==="F")return Mv(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new uu(o.field,u)}));const i=n.endAt?new Dh(n.endAt.position,n.endAt.inclusive):null,a=n.startAt?new Dh(n.startAt.position,n.startAt.inclusive):null;return Mv(n.path,n.collectionGroup,t,n.filters,n.limit,i,a)}}function bm(n,t){const i=n.filters.concat([t]);return new Ao(n.path,n.collectionGroup,n.explicitOrderBy.slice(),i,n.limit,n.limitType,n.startAt,n.endAt)}function Tm(n,t,i){return new Ao(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,i,n.startAt,n.endAt)}function Jh(n,t){return vg(Ti(n),Ti(t))&&n.limitType===t.limitType}function vw(n){return`${xg(Ti(n))}|lt:${n.limitType}`}function Ws(n){return`Query(target=${(function(i){let a=i.path.canonicalString();return i.collectionGroup!==null&&(a+=" collectionGroup="+i.collectionGroup),i.filters.length>0&&(a+=`, filters: [${i.filters.map((o=>gw(o))).join(", ")}]`),Wh(i.limit)||(a+=", limit: "+i.limit),i.orderBy.length>0&&(a+=`, orderBy: [${i.orderBy.map((o=>(function(d){return`${d.field.canonicalString()} (${d.dir})`})(o))).join(", ")}]`),i.startAt&&(a+=", startAt: ",a+=i.startAt.inclusive?"b:":"a:",a+=i.startAt.position.map((o=>po(o))).join(",")),i.endAt&&(a+=", endAt: ",a+=i.endAt.inclusive?"a:":"b:",a+=i.endAt.position.map((o=>po(o))).join(",")),`Target(${a})`})(Ti(n))}; limitType=${n.limitType})`}function td(n,t){return t.isFoundDocument()&&(function(a,o){const u=o.key.path;return a.collectionGroup!==null?o.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(u):vt.isDocumentKey(a.path)?a.path.isEqual(u):a.path.isImmediateParentOf(u)})(n,t)&&(function(a,o){for(const u of Gl(a))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(n,t)&&(function(a,o){for(const u of a.filters)if(!u.matches(o))return!1;return!0})(n,t)&&(function(a,o){return!(a.startAt&&!(function(d,m,p){const g=Dv(d,m,p);return d.inclusive?g<=0:g<0})(a.startAt,Gl(a),o)||a.endAt&&!(function(d,m,p){const g=Dv(d,m,p);return d.inclusive?g>=0:g>0})(a.endAt,Gl(a),o))})(n,t)}function a3(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function _w(n){return(t,i)=>{let a=!1;for(const o of Gl(n)){const u=s3(o,t,i);if(u!==0)return u;a=a||o.field.isKeyField()}return 0}}function s3(n,t,i){const a=n.field.isKeyField()?vt.comparator(t.key,i.key):(function(u,d,m){const p=d.data.field(u),g=m.data.field(u);return p!==null&&g!==null?fo(p,g):bt(42886)})(n.field,t,i);switch(n.dir){case"asc":return a;case"desc":return-1*a;default:return bt(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(t,i){this.mapKeyFn=t,this.equalsFn=i,this.inner={},this.innerSize=0}get(t){const i=this.mapKeyFn(t),a=this.inner[i];if(a!==void 0){for(const[o,u]of a)if(this.equalsFn(o,t))return u}}has(t){return this.get(t)!==void 0}set(t,i){const a=this.mapKeyFn(t),o=this.inner[a];if(o===void 0)return this.inner[a]=[[t,i]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],t))return void(o[u]=[t,i]);o.push([t,i]),this.innerSize++}delete(t){const i=this.mapKeyFn(t),a=this.inner[i];if(a===void 0)return!1;for(let o=0;o<a.length;o++)if(this.equalsFn(a[o][0],t))return a.length===1?delete this.inner[i]:a.splice(o,1),this.innerSize--,!0;return!1}forEach(t){sa(this.inner,((i,a)=>{for(const[o,u]of a)t(o,u)}))}isEmpty(){return iw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o3=new me(vt.comparator);function ur(){return o3}const ww=new me(vt.comparator);function zl(...n){let t=ww;for(const i of n)t=t.insert(i.key,i);return t}function Ew(n){let t=ww;return n.forEach(((i,a)=>t=t.insert(i,a.overlayedDocument))),t}function Ga(){return Yl()}function bw(){return Yl()}function Yl(){return new es((n=>n.toString()),((n,t)=>n.isEqual(t)))}const l3=new me(vt.comparator),u3=new Le(vt.comparator);function Ut(...n){let t=u3;for(const i of n)t=t.add(i);return t}const c3=new Le(Pt);function h3(){return c3}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ih(t)?"-0":t}}function Tw(n){return{integerValue:""+n}}function Sw(n,t){return LI(t)?Tw(t):wg(n,t)}/**
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
 */class ed{constructor(){this._=void 0}}function d3(n,t,i){return n instanceof Nh?(function(o,u){const d={fields:{[sw]:{stringValue:aw},[lw]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&gg(u)&&(u=Zh(u)),u&&(d.fields[ow]=u),{mapValue:d}})(i,t):n instanceof cu?Rw(n,t):n instanceof hu?Iw(n,t):(function(o,u){const d=Aw(o,u),m=Vv(d)+Vv(o.Ae);return _m(d)&&_m(o.Ae)?Tw(m):wg(o.serializer,m)})(n,t)}function f3(n,t,i){return n instanceof cu?Rw(n,t):n instanceof hu?Iw(n,t):i}function Aw(n,t){return n instanceof du?(function(a){return _m(a)||(function(u){return!!u&&"doubleValue"in u})(a)})(t)?t:{integerValue:0}:null}class Nh extends ed{}class cu extends ed{constructor(t){super(),this.elements=t}}function Rw(n,t){const i=Cw(t);for(const a of n.elements)i.some((o=>Ci(o,a)))||i.push(a);return{arrayValue:{values:i}}}class hu extends ed{constructor(t){super(),this.elements=t}}function Iw(n,t){let i=Cw(t);for(const a of n.elements)i=i.filter((o=>!Ci(o,a)));return{arrayValue:{values:i}}}class du extends ed{constructor(t,i){super(),this.serializer=t,this.Ae=i}}function Vv(n){return Se(n.integerValue||n.doubleValue)}function Cw(n){return yg(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p3{constructor(t,i){this.field=t,this.transform=i}}function m3(n,t){return n.field.isEqual(t.field)&&(function(a,o){return a instanceof cu&&o instanceof cu||a instanceof hu&&o instanceof hu?ho(a.elements,o.elements,Ci):a instanceof du&&o instanceof du?Ci(a.Ae,o.Ae):a instanceof Nh&&o instanceof Nh})(n.transform,t.transform)}class g3{constructor(t,i){this.version=t,this.transformResults=i}}class Si{constructor(t,i){this.updateTime=t,this.exists=i}static none(){return new Si}static exists(t){return new Si(void 0,t)}static updateTime(t){return new Si(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function mh(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class nd{}function jw(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Nw(n.key,Si.none()):new yu(n.key,n.data,Si.none());{const i=n.data,a=vn.empty();let o=new Le(Ze.comparator);for(let u of t.fields)if(!o.has(u)){let d=i.field(u);d===null&&u.length>1&&(u=u.popLast(),d=i.field(u)),d===null?a.delete(u):a.set(u,d),o=o.add(u)}return new oa(n.key,a,new jn(o.toArray()),Si.none())}}function y3(n,t,i){n instanceof yu?(function(o,u,d){const m=o.value.clone(),p=Pv(o.fieldTransforms,u,d.transformResults);m.setAll(p),u.convertToFoundDocument(d.version,m).setHasCommittedMutations()})(n,t,i):n instanceof oa?(function(o,u,d){if(!mh(o.precondition,u))return void u.convertToUnknownDocument(d.version);const m=Pv(o.fieldTransforms,u,d.transformResults),p=u.data;p.setAll(Dw(o)),p.setAll(m),u.convertToFoundDocument(d.version,p).setHasCommittedMutations()})(n,t,i):(function(o,u,d){u.convertToNoDocument(d.version).setHasCommittedMutations()})(0,t,i)}function Ql(n,t,i,a){return n instanceof yu?(function(u,d,m,p){if(!mh(u.precondition,d))return m;const g=u.value.clone(),v=Uv(u.fieldTransforms,p,d);return g.setAll(v),d.convertToFoundDocument(d.version,g).setHasLocalMutations(),null})(n,t,i,a):n instanceof oa?(function(u,d,m,p){if(!mh(u.precondition,d))return m;const g=Uv(u.fieldTransforms,p,d),v=d.data;return v.setAll(Dw(u)),v.setAll(g),d.convertToFoundDocument(d.version,v).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((E=>E.field)))})(n,t,i,a):(function(u,d,m){return mh(u.precondition,d)?(d.convertToNoDocument(d.version).setHasLocalMutations(),null):m})(n,t,i)}function x3(n,t){let i=null;for(const a of n.fieldTransforms){const o=t.data.field(a.field),u=Aw(a.transform,o||null);u!=null&&(i===null&&(i=vn.empty()),i.set(a.field,u))}return i||null}function kv(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(a,o){return a===void 0&&o===void 0||!(!a||!o)&&ho(a,o,((u,d)=>m3(u,d)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class yu extends nd{constructor(t,i,a,o=[]){super(),this.key=t,this.value=i,this.precondition=a,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class oa extends nd{constructor(t,i,a,o,u=[]){super(),this.key=t,this.data=i,this.fieldMask=a,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function Dw(n){const t=new Map;return n.fieldMask.fields.forEach((i=>{if(!i.isEmpty()){const a=n.data.field(i);t.set(i,a)}})),t}function Pv(n,t,i){const a=new Map;Yt(n.length===i.length,32656,{Re:i.length,Ve:n.length});for(let o=0;o<i.length;o++){const u=n[o],d=u.transform,m=t.data.field(u.field);a.set(u.field,f3(d,m,i[o]))}return a}function Uv(n,t,i){const a=new Map;for(const o of n){const u=o.transform,d=i.data.field(o.field);a.set(o.field,d3(u,d,t))}return a}class Nw extends nd{constructor(t,i){super(),this.key=t,this.precondition=i,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class v3 extends nd{constructor(t,i){super(),this.key=t,this.precondition=i,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _3{constructor(t,i,a,o){this.batchId=t,this.localWriteTime=i,this.baseMutations=a,this.mutations=o}applyToRemoteDocument(t,i){const a=i.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(t.key)&&y3(u,t,a[o])}}applyToLocalView(t,i){for(const a of this.baseMutations)a.key.isEqual(t.key)&&(i=Ql(a,t,i,this.localWriteTime));for(const a of this.mutations)a.key.isEqual(t.key)&&(i=Ql(a,t,i,this.localWriteTime));return i}applyToLocalDocumentSet(t,i){const a=bw();return this.mutations.forEach((o=>{const u=t.get(o.key),d=u.overlayedDocument;let m=this.applyToLocalView(d,u.mutatedFields);m=i.has(o.key)?null:m;const p=jw(d,m);p!==null&&a.set(o.key,p),d.isValidDocument()||d.convertToNoDocument(At.min())})),a}keys(){return this.mutations.reduce(((t,i)=>t.add(i.key)),Ut())}isEqual(t){return this.batchId===t.batchId&&ho(this.mutations,t.mutations,((i,a)=>kv(i,a)))&&ho(this.baseMutations,t.baseMutations,((i,a)=>kv(i,a)))}}class Eg{constructor(t,i,a,o){this.batch=t,this.commitVersion=i,this.mutationResults=a,this.docVersions=o}static from(t,i,a){Yt(t.mutations.length===a.length,58842,{me:t.mutations.length,fe:a.length});let o=(function(){return l3})();const u=t.mutations;for(let d=0;d<u.length;d++)o=o.insert(u[d].key,a[d].version);return new Eg(t,i,a,o)}}/**
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
 */let w3=class{constructor(t,i){this.largestBatchId=t,this.mutation=i}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class E3{constructor(t,i){this.count=t,this.unchangedNames=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce,$t;function b3(n){switch(n){case it.OK:return bt(64938);case it.CANCELLED:case it.UNKNOWN:case it.DEADLINE_EXCEEDED:case it.RESOURCE_EXHAUSTED:case it.INTERNAL:case it.UNAVAILABLE:case it.UNAUTHENTICATED:return!1;case it.INVALID_ARGUMENT:case it.NOT_FOUND:case it.ALREADY_EXISTS:case it.PERMISSION_DENIED:case it.FAILED_PRECONDITION:case it.ABORTED:case it.OUT_OF_RANGE:case it.UNIMPLEMENTED:case it.DATA_LOSS:return!0;default:return bt(15467,{code:n})}}function Mw(n){if(n===void 0)return or("GRPC error has no .code"),it.UNKNOWN;switch(n){case Ce.OK:return it.OK;case Ce.CANCELLED:return it.CANCELLED;case Ce.UNKNOWN:return it.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return it.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return it.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return it.INTERNAL;case Ce.UNAVAILABLE:return it.UNAVAILABLE;case Ce.UNAUTHENTICATED:return it.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return it.INVALID_ARGUMENT;case Ce.NOT_FOUND:return it.NOT_FOUND;case Ce.ALREADY_EXISTS:return it.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return it.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return it.FAILED_PRECONDITION;case Ce.ABORTED:return it.ABORTED;case Ce.OUT_OF_RANGE:return it.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return it.UNIMPLEMENTED;case Ce.DATA_LOSS:return it.DATA_LOSS;default:return bt(39323,{code:n})}}($t=Ce||(Ce={}))[$t.OK=0]="OK",$t[$t.CANCELLED=1]="CANCELLED",$t[$t.UNKNOWN=2]="UNKNOWN",$t[$t.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$t[$t.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$t[$t.NOT_FOUND=5]="NOT_FOUND",$t[$t.ALREADY_EXISTS=6]="ALREADY_EXISTS",$t[$t.PERMISSION_DENIED=7]="PERMISSION_DENIED",$t[$t.UNAUTHENTICATED=16]="UNAUTHENTICATED",$t[$t.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$t[$t.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$t[$t.ABORTED=10]="ABORTED",$t[$t.OUT_OF_RANGE=11]="OUT_OF_RANGE",$t[$t.UNIMPLEMENTED=12]="UNIMPLEMENTED",$t[$t.INTERNAL=13]="INTERNAL",$t[$t.UNAVAILABLE=14]="UNAVAILABLE",$t[$t.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function T3(){return new TextEncoder}/**
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
 */const S3=new Zr([4294967295,4294967295],0);function Lv(n){const t=T3().encode(n),i=new H2;return i.update(t),new Uint8Array(i.digest())}function zv(n){const t=new DataView(n.buffer),i=t.getUint32(0,!0),a=t.getUint32(4,!0),o=t.getUint32(8,!0),u=t.getUint32(12,!0);return[new Zr([i,a],0),new Zr([o,u],0)]}class bg{constructor(t,i,a){if(this.bitmap=t,this.padding=i,this.hashCount=a,i<0||i>=8)throw new $l(`Invalid padding: ${i}`);if(a<0)throw new $l(`Invalid hash count: ${a}`);if(t.length>0&&this.hashCount===0)throw new $l(`Invalid hash count: ${a}`);if(t.length===0&&i!==0)throw new $l(`Invalid padding when bitmap length is 0: ${i}`);this.ge=8*t.length-i,this.pe=Zr.fromNumber(this.ge)}ye(t,i,a){let o=t.add(i.multiply(Zr.fromNumber(a)));return o.compare(S3)===1&&(o=new Zr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const i=Lv(t),[a,o]=zv(i);for(let u=0;u<this.hashCount;u++){const d=this.ye(a,o,u);if(!this.we(d))return!1}return!0}static create(t,i,a){const o=t%8==0?0:8-t%8,u=new Uint8Array(Math.ceil(t/8)),d=new bg(u,o,i);return a.forEach((m=>d.insert(m))),d}insert(t){if(this.ge===0)return;const i=Lv(t),[a,o]=zv(i);for(let u=0;u<this.hashCount;u++){const d=this.ye(a,o,u);this.Se(d)}}Se(t){const i=Math.floor(t/8),a=t%8;this.bitmap[i]|=1<<a}}class $l extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(t,i,a,o,u){this.snapshotVersion=t,this.targetChanges=i,this.targetMismatches=a,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(t,i,a){const o=new Map;return o.set(t,xu.createSynthesizedTargetChangeForCurrentChange(t,i,a)),new id(At.min(),o,new me(Pt),ur(),Ut())}}class xu{constructor(t,i,a,o,u){this.resumeToken=t,this.current=i,this.addedDocuments=a,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(t,i,a){return new xu(a,i,Ut(),Ut(),Ut())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(t,i,a,o){this.be=t,this.removedTargetIds=i,this.key=a,this.De=o}}class Ow{constructor(t,i){this.targetId=t,this.Ce=i}}class Vw{constructor(t,i,a=Je.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=i,this.resumeToken=a,this.cause=o}}class $v{constructor(){this.ve=0,this.Fe=Bv(),this.Me=Je.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=Ut(),i=Ut(),a=Ut();return this.Fe.forEach(((o,u)=>{switch(u){case 0:t=t.add(o);break;case 2:i=i.add(o);break;case 1:a=a.add(o);break;default:bt(38017,{changeType:u})}})),new xu(this.Me,this.xe,t,i,a)}qe(){this.Oe=!1,this.Fe=Bv()}Qe(t,i){this.Oe=!0,this.Fe=this.Fe.insert(t,i)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,Yt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class A3{constructor(t){this.Ge=t,this.ze=new Map,this.je=ur(),this.Je=Jc(),this.He=Jc(),this.Ye=new me(Pt)}Ze(t){for(const i of t.be)t.De&&t.De.isFoundDocument()?this.Xe(i,t.De):this.et(i,t.key,t.De);for(const i of t.removedTargetIds)this.et(i,t.key,t.De)}tt(t){this.forEachTarget(t,(i=>{const a=this.nt(i);switch(t.state){case 0:this.rt(i)&&a.Le(t.resumeToken);break;case 1:a.Ke(),a.Ne||a.qe(),a.Le(t.resumeToken);break;case 2:a.Ke(),a.Ne||this.removeTarget(i);break;case 3:this.rt(i)&&(a.We(),a.Le(t.resumeToken));break;case 4:this.rt(i)&&(this.it(i),a.Le(t.resumeToken));break;default:bt(56790,{state:t.state})}}))}forEachTarget(t,i){t.targetIds.length>0?t.targetIds.forEach(i):this.ze.forEach(((a,o)=>{this.rt(o)&&i(o)}))}st(t){const i=t.targetId,a=t.Ce.count,o=this.ot(i);if(o){const u=o.target;if(Em(u))if(a===0){const d=new vt(u.path);this.et(i,d,on.newNoDocument(d,At.min()))}else Yt(a===1,20013,{expectedCount:a});else{const d=this._t(i);if(d!==a){const m=this.ut(t),p=m?this.ct(m,t,d):1;if(p!==0){this.it(i);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(i,g)}}}}}ut(t){const i=t.Ce.unchangedNames;if(!i||!i.bits)return null;const{bits:{bitmap:a="",padding:o=0},hashCount:u=0}=i;let d,m;try{d=na(a).toUint8Array()}catch(p){if(p instanceof rw)return co("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{m=new bg(d,o,u)}catch(p){return co(p instanceof $l?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return m.ge===0?null:m}ct(t,i,a){return i.Ce.count===a-this.Pt(t,i.targetId)?0:2}Pt(t,i){const a=this.Ge.getRemoteKeysForTarget(i);let o=0;return a.forEach((u=>{const d=this.Ge.ht(),m=`projects/${d.projectId}/databases/${d.database}/documents/${u.path.canonicalString()}`;t.mightContain(m)||(this.et(i,u,null),o++)})),o}Tt(t){const i=new Map;this.ze.forEach(((u,d)=>{const m=this.ot(d);if(m){if(u.current&&Em(m.target)){const p=new vt(m.target.path);this.It(p).has(d)||this.Et(d,p)||this.et(d,p,on.newNoDocument(p,t))}u.Be&&(i.set(d,u.ke()),u.qe())}}));let a=Ut();this.He.forEach(((u,d)=>{let m=!0;d.forEachWhile((p=>{const g=this.ot(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(a=a.add(u))})),this.je.forEach(((u,d)=>d.setReadTime(t)));const o=new id(t,i,this.Ye,this.je,a);return this.je=ur(),this.Je=Jc(),this.He=Jc(),this.Ye=new me(Pt),o}Xe(t,i){if(!this.rt(t))return;const a=this.Et(t,i.key)?2:0;this.nt(t).Qe(i.key,a),this.je=this.je.insert(i.key,i),this.Je=this.Je.insert(i.key,this.It(i.key).add(t)),this.He=this.He.insert(i.key,this.dt(i.key).add(t))}et(t,i,a){if(!this.rt(t))return;const o=this.nt(t);this.Et(t,i)?o.Qe(i,1):o.$e(i),this.He=this.He.insert(i,this.dt(i).delete(t)),this.He=this.He.insert(i,this.dt(i).add(t)),a&&(this.je=this.je.insert(i,a))}removeTarget(t){this.ze.delete(t)}_t(t){const i=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+i.addedDocuments.size-i.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let i=this.ze.get(t);return i||(i=new $v,this.ze.set(t,i)),i}dt(t){let i=this.He.get(t);return i||(i=new Le(Pt),this.He=this.He.insert(t,i)),i}It(t){let i=this.Je.get(t);return i||(i=new Le(Pt),this.Je=this.Je.insert(t,i)),i}rt(t){const i=this.ot(t)!==null;return i||pt("WatchChangeAggregator","Detected inactive target",t),i}ot(t){const i=this.ze.get(t);return i&&i.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new $v),this.Ge.getRemoteKeysForTarget(t).forEach((i=>{this.et(t,i,null)}))}Et(t,i){return this.Ge.getRemoteKeysForTarget(t).has(i)}}function Jc(){return new me(vt.comparator)}function Bv(){return new me(vt.comparator)}const R3={asc:"ASCENDING",desc:"DESCENDING"},I3={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},C3={and:"AND",or:"OR"};class j3{constructor(t,i){this.databaseId=t,this.useProto3Json=i}}function Sm(n,t){return n.useProto3Json||Wh(t)?t:{value:t}}function Mh(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function kw(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function D3(n,t){return Mh(n,t.toTimestamp())}function Ai(n){return Yt(!!n,49232),At.fromTimestamp((function(i){const a=ea(i);return new ue(a.seconds,a.nanos)})(n))}function Tg(n,t){return Am(n,t).canonicalString()}function Am(n,t){const i=(function(o){return new ae(["projects",o.projectId,"databases",o.database])})(n).child("documents");return t===void 0?i:i.child(t)}function Pw(n){const t=ae.fromString(n);return Yt(Bw(t),10190,{key:t.toString()}),t}function Rm(n,t){return Tg(n.databaseId,t.path)}function Op(n,t){const i=Pw(t);if(i.get(1)!==n.databaseId.projectId)throw new ft(it.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+i.get(1)+" vs "+n.databaseId.projectId);if(i.get(3)!==n.databaseId.database)throw new ft(it.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+i.get(3)+" vs "+n.databaseId.database);return new vt(Lw(i))}function Uw(n,t){return Tg(n.databaseId,t)}function N3(n){const t=Pw(n);return t.length===4?ae.emptyPath():Lw(t)}function Im(n){return new ae(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Lw(n){return Yt(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Fv(n,t,i){return{name:Rm(n,t),fields:i.value.mapValue.fields}}function M3(n,t){let i;if("targetChange"in t){t.targetChange;const a=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:bt(39313,{state:g})})(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],u=(function(g,v){return g.useProto3Json?(Yt(v===void 0||typeof v=="string",58123),Je.fromBase64String(v||"")):(Yt(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),Je.fromUint8Array(v||new Uint8Array))})(n,t.targetChange.resumeToken),d=t.targetChange.cause,m=d&&(function(g){const v=g.code===void 0?it.UNKNOWN:Mw(g.code);return new ft(v,g.message||"")})(d);i=new Vw(a,o,u,m||null)}else if("documentChange"in t){t.documentChange;const a=t.documentChange;a.document,a.document.name,a.document.updateTime;const o=Op(n,a.document.name),u=Ai(a.document.updateTime),d=a.document.createTime?Ai(a.document.createTime):At.min(),m=new vn({mapValue:{fields:a.document.fields}}),p=on.newFoundDocument(o,u,d,m),g=a.targetIds||[],v=a.removedTargetIds||[];i=new gh(g,v,p.key,p)}else if("documentDelete"in t){t.documentDelete;const a=t.documentDelete;a.document;const o=Op(n,a.document),u=a.readTime?Ai(a.readTime):At.min(),d=on.newNoDocument(o,u),m=a.removedTargetIds||[];i=new gh([],m,d.key,d)}else if("documentRemove"in t){t.documentRemove;const a=t.documentRemove;a.document;const o=Op(n,a.document),u=a.removedTargetIds||[];i=new gh([],u,o,null)}else{if(!("filter"in t))return bt(11601,{Rt:t});{t.filter;const a=t.filter;a.targetId;const{count:o=0,unchangedNames:u}=a,d=new E3(o,u),m=a.targetId;i=new Ow(m,d)}}return i}function O3(n,t){let i;if(t instanceof yu)i={update:Fv(n,t.key,t.value)};else if(t instanceof Nw)i={delete:Rm(n,t.key)};else if(t instanceof oa)i={update:Fv(n,t.key,t.data),updateMask:F3(t.fieldMask)};else{if(!(t instanceof v3))return bt(16599,{Vt:t.type});i={verify:Rm(n,t.key)}}return t.fieldTransforms.length>0&&(i.updateTransforms=t.fieldTransforms.map((a=>(function(u,d){const m=d.transform;if(m instanceof Nh)return{fieldPath:d.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof cu)return{fieldPath:d.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof hu)return{fieldPath:d.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof du)return{fieldPath:d.field.canonicalString(),increment:m.Ae};throw bt(20930,{transform:d.transform})})(0,a)))),t.precondition.isNone||(i.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:D3(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:bt(27497)})(n,t.precondition)),i}function V3(n,t){return n&&n.length>0?(Yt(t!==void 0,14353),n.map((i=>(function(o,u){let d=o.updateTime?Ai(o.updateTime):Ai(u);return d.isEqual(At.min())&&(d=Ai(u)),new g3(d,o.transformResults||[])})(i,t)))):[]}function k3(n,t){return{documents:[Uw(n,t.path)]}}function P3(n,t){const i={structuredQuery:{}},a=t.path;let o;t.collectionGroup!==null?(o=a,i.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=a.popLast(),i.structuredQuery.from=[{collectionId:a.lastSegment()}]),i.parent=Uw(n,o);const u=(function(g){if(g.length!==0)return $w(ai.create(g,"and"))})(t.filters);u&&(i.structuredQuery.where=u);const d=(function(g){if(g.length!==0)return g.map((v=>(function(S){return{field:Zs(S.field),direction:z3(S.dir)}})(v)))})(t.orderBy);d&&(i.structuredQuery.orderBy=d);const m=Sm(n,t.limit);return m!==null&&(i.structuredQuery.limit=m),t.startAt&&(i.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(t.startAt)),t.endAt&&(i.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(t.endAt)),{ft:i,parent:o}}function U3(n){let t=N3(n.parent);const i=n.structuredQuery,a=i.from?i.from.length:0;let o=null;if(a>0){Yt(a===1,65062);const v=i.from[0];v.allDescendants?o=v.collectionId:t=t.child(v.collectionId)}let u=[];i.where&&(u=(function(E){const S=zw(E);return S instanceof ai&&pw(S)?S.getFilters():[S]})(i.where));let d=[];i.orderBy&&(d=(function(E){return E.map((S=>(function(M){return new uu(Js(M.field),(function(U){switch(U){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(M.direction))})(S)))})(i.orderBy));let m=null;i.limit&&(m=(function(E){let S;return S=typeof E=="object"?E.value:E,Wh(S)?null:S})(i.limit));let p=null;i.startAt&&(p=(function(E){const S=!!E.before,R=E.values||[];return new Dh(R,S)})(i.startAt));let g=null;return i.endAt&&(g=(function(E){const S=!E.before,R=E.values||[];return new Dh(R,S)})(i.endAt)),i3(t,o,d,u,m,"F",p,g)}function L3(n,t){const i=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return bt(28987,{purpose:o})}})(t.purpose);return i==null?null:{"goog-listen-tags":i}}function zw(n){return n.unaryFilter!==void 0?(function(i){switch(i.unaryFilter.op){case"IS_NAN":const a=Js(i.unaryFilter.field);return De.create(a,"==",{doubleValue:NaN});case"IS_NULL":const o=Js(i.unaryFilter.field);return De.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Js(i.unaryFilter.field);return De.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const d=Js(i.unaryFilter.field);return De.create(d,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return bt(61313);default:return bt(60726)}})(n):n.fieldFilter!==void 0?(function(i){return De.create(Js(i.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return bt(58110);default:return bt(50506)}})(i.fieldFilter.op),i.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(i){return ai.create(i.compositeFilter.filters.map((a=>zw(a))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return bt(1026)}})(i.compositeFilter.op))})(n):bt(30097,{filter:n})}function z3(n){return R3[n]}function $3(n){return I3[n]}function B3(n){return C3[n]}function Zs(n){return{fieldPath:n.canonicalString()}}function Js(n){return Ze.fromServerFormat(n.fieldPath)}function $w(n){return n instanceof De?(function(i){if(i.op==="=="){if(jv(i.value))return{unaryFilter:{field:Zs(i.field),op:"IS_NAN"}};if(Cv(i.value))return{unaryFilter:{field:Zs(i.field),op:"IS_NULL"}}}else if(i.op==="!="){if(jv(i.value))return{unaryFilter:{field:Zs(i.field),op:"IS_NOT_NAN"}};if(Cv(i.value))return{unaryFilter:{field:Zs(i.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zs(i.field),op:$3(i.op),value:i.value}}})(n):n instanceof ai?(function(i){const a=i.getFilters().map((o=>$w(o)));return a.length===1?a[0]:{compositeFilter:{op:B3(i.op),filters:a}}})(n):bt(54877,{filter:n})}function F3(n){const t=[];return n.fields.forEach((i=>t.push(i.canonicalString()))),{fieldPaths:t}}function Bw(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(t,i,a,o,u=At.min(),d=At.min(),m=Je.EMPTY_BYTE_STRING,p=null){this.target=t,this.targetId=i,this.purpose=a,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=d,this.resumeToken=m,this.expectedCount=p}withSequenceNumber(t){return new Qr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,i){return new Qr(this.target,this.targetId,this.purpose,this.sequenceNumber,i,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K3{constructor(t){this.yt=t}}function q3(n){const t=U3({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Tm(t,t.limit,"L"):t}/**
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
 */class H3{constructor(){this.Cn=new G3}addToCollectionParentIndex(t,i){return this.Cn.add(i),st.resolve()}getCollectionParents(t,i){return st.resolve(this.Cn.getEntries(i))}addFieldIndex(t,i){return st.resolve()}deleteFieldIndex(t,i){return st.resolve()}deleteAllFieldIndexes(t){return st.resolve()}createTargetIndexes(t,i){return st.resolve()}getDocumentsMatchingTarget(t,i){return st.resolve(null)}getIndexType(t,i){return st.resolve(0)}getFieldIndexes(t,i){return st.resolve([])}getNextCollectionGroupToUpdate(t){return st.resolve(null)}getMinOffset(t,i){return st.resolve(ta.min())}getMinOffsetFromCollectionGroup(t,i){return st.resolve(ta.min())}updateCollectionGroup(t,i,a){return st.resolve()}updateIndexEntries(t,i){return st.resolve()}}class G3{constructor(){this.index={}}add(t){const i=t.lastSegment(),a=t.popLast(),o=this.index[i]||new Le(ae.comparator),u=!o.has(a);return this.index[i]=o.add(a),u}has(t){const i=t.lastSegment(),a=t.popLast(),o=this.index[i];return o&&o.has(a)}getEntries(t){return(this.index[t]||new Le(ae.comparator)).toArray()}}/**
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
 */const Kv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Fw=41943040;class xn{static withCacheSize(t){return new xn(t,xn.DEFAULT_COLLECTION_PERCENTILE,xn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,i,a){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=i,this.maximumSequenceNumbersToCollect=a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xn.DEFAULT_COLLECTION_PERCENTILE=10,xn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,xn.DEFAULT=new xn(Fw,xn.DEFAULT_COLLECTION_PERCENTILE,xn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),xn.DISABLED=new xn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const qv="LruGarbageCollector",Y3=1048576;function Hv([n,t],[i,a]){const o=Pt(n,i);return o===0?Pt(t,a):o}class Q3{constructor(t){this.Ir=t,this.buffer=new Le(Hv),this.Er=0}dr(){return++this.Er}Ar(t){const i=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(i);else{const a=this.buffer.last();Hv(i,a)<0&&(this.buffer=this.buffer.delete(a).add(i))}}get maxValue(){return this.buffer.last()[0]}}class X3{constructor(t,i,a){this.garbageCollector=t,this.asyncQueue=i,this.localStore=a,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){pt(qv,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(i){So(i)?pt(qv,"Ignoring IndexedDB error during garbage collection: ",i):await To(i)}await this.Vr(3e5)}))}}class W3{constructor(t,i){this.mr=t,this.params=i}calculateTargetCount(t,i){return this.mr.gr(t).next((a=>Math.floor(i/100*a)))}nthSequenceNumber(t,i){if(i===0)return st.resolve(Xh.ce);const a=new Q3(i);return this.mr.forEachTarget(t,(o=>a.Ar(o.sequenceNumber))).next((()=>this.mr.pr(t,(o=>a.Ar(o))))).next((()=>a.maxValue))}removeTargets(t,i,a){return this.mr.removeTargets(t,i,a)}removeOrphanedDocuments(t,i){return this.mr.removeOrphanedDocuments(t,i)}collect(t,i){return this.params.cacheSizeCollectionThreshold===-1?(pt("LruGarbageCollector","Garbage collection skipped; disabled"),st.resolve(Kv)):this.getCacheSize(t).next((a=>a<this.params.cacheSizeCollectionThreshold?(pt("LruGarbageCollector",`Garbage collection skipped; Cache size ${a} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Kv):this.yr(t,i)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,i){let a,o,u,d,m,p,g;const v=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((E=>(E>this.params.maximumSequenceNumbersToCollect?(pt("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),o=this.params.maximumSequenceNumbersToCollect):o=E,d=Date.now(),this.nthSequenceNumber(t,o)))).next((E=>(a=E,m=Date.now(),this.removeTargets(t,a,i)))).next((E=>(u=E,p=Date.now(),this.removeOrphanedDocuments(t,a)))).next((E=>(g=Date.now(),Xs()<=Bt.DEBUG&&pt("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${d-v}ms
	Determined least recently used ${o} in `+(m-d)+`ms
	Removed ${u} targets in `+(p-m)+`ms
	Removed ${E} documents in `+(g-p)+`ms
Total Duration: ${g-v}ms`),st.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:E}))))}}function Z3(n,t){return new W3(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J3{constructor(){this.changes=new es((t=>t.toString()),((t,i)=>t.isEqual(i))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,i){this.assertNotApplied(),this.changes.set(t,on.newInvalidDocument(t).setReadTime(i))}getEntry(t,i){this.assertNotApplied();const a=this.changes.get(i);return a!==void 0?st.resolve(a):this.getFromCache(t,i)}getEntries(t,i){return this.getAllFromCache(t,i)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class tC{constructor(t,i){this.overlayedDocument=t,this.mutatedFields=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(t,i,a,o){this.remoteDocumentCache=t,this.mutationQueue=i,this.documentOverlayCache=a,this.indexManager=o}getDocument(t,i){let a=null;return this.documentOverlayCache.getOverlay(t,i).next((o=>(a=o,this.remoteDocumentCache.getEntry(t,i)))).next((o=>(a!==null&&Ql(a.mutation,o,jn.empty(),ue.now()),o)))}getDocuments(t,i){return this.remoteDocumentCache.getEntries(t,i).next((a=>this.getLocalViewOfDocuments(t,a,Ut()).next((()=>a))))}getLocalViewOfDocuments(t,i,a=Ut()){const o=Ga();return this.populateOverlays(t,o,i).next((()=>this.computeViews(t,i,o,a).next((u=>{let d=zl();return u.forEach(((m,p)=>{d=d.insert(m,p.overlayedDocument)})),d}))))}getOverlayedDocuments(t,i){const a=Ga();return this.populateOverlays(t,a,i).next((()=>this.computeViews(t,i,a,Ut())))}populateOverlays(t,i,a){const o=[];return a.forEach((u=>{i.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(t,o).next((u=>{u.forEach(((d,m)=>{i.set(d,m)}))}))}computeViews(t,i,a,o){let u=ur();const d=Yl(),m=(function(){return Yl()})();return i.forEach(((p,g)=>{const v=a.get(g.key);o.has(g.key)&&(v===void 0||v.mutation instanceof oa)?u=u.insert(g.key,g):v!==void 0?(d.set(g.key,v.mutation.getFieldMask()),Ql(v.mutation,g,v.mutation.getFieldMask(),ue.now())):d.set(g.key,jn.empty())})),this.recalculateAndSaveOverlays(t,u).next((p=>(p.forEach(((g,v)=>d.set(g,v))),i.forEach(((g,v)=>m.set(g,new tC(v,d.get(g)??null)))),m)))}recalculateAndSaveOverlays(t,i){const a=Yl();let o=new me(((d,m)=>d-m)),u=Ut();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,i).next((d=>{for(const m of d)m.keys().forEach((p=>{const g=i.get(p);if(g===null)return;let v=a.get(p)||jn.empty();v=m.applyToLocalView(g,v),a.set(p,v);const E=(o.get(m.batchId)||Ut()).add(p);o=o.insert(m.batchId,E)}))})).next((()=>{const d=[],m=o.getReverseIterator();for(;m.hasNext();){const p=m.getNext(),g=p.key,v=p.value,E=bw();v.forEach((S=>{if(!u.has(S)){const R=jw(i.get(S),a.get(S));R!==null&&E.set(S,R),u=u.add(S)}})),d.push(this.documentOverlayCache.saveOverlays(t,g,E))}return st.waitFor(d)})).next((()=>a))}recalculateAndSaveOverlaysForDocumentKeys(t,i){return this.remoteDocumentCache.getEntries(t,i).next((a=>this.recalculateAndSaveOverlays(t,a)))}getDocumentsMatchingQuery(t,i,a,o){return(function(d){return vt.isDocumentKey(d.path)&&d.collectionGroup===null&&d.filters.length===0})(i)?this.getDocumentsMatchingDocumentQuery(t,i.path):xw(i)?this.getDocumentsMatchingCollectionGroupQuery(t,i,a,o):this.getDocumentsMatchingCollectionQuery(t,i,a,o)}getNextDocuments(t,i,a,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,i,a,o).next((u=>{const d=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,i,a.largestBatchId,o-u.size):st.resolve(Ga());let m=au,p=u;return d.next((g=>st.forEach(g,((v,E)=>(m<E.largestBatchId&&(m=E.largestBatchId),u.get(v)?st.resolve():this.remoteDocumentCache.getEntry(t,v).next((S=>{p=p.insert(v,S)}))))).next((()=>this.populateOverlays(t,g,u))).next((()=>this.computeViews(t,p,g,Ut()))).next((v=>({batchId:m,changes:Ew(v)})))))}))}getDocumentsMatchingDocumentQuery(t,i){return this.getDocument(t,new vt(i)).next((a=>{let o=zl();return a.isFoundDocument()&&(o=o.insert(a.key,a)),o}))}getDocumentsMatchingCollectionGroupQuery(t,i,a,o){const u=i.collectionGroup;let d=zl();return this.indexManager.getCollectionParents(t,u).next((m=>st.forEach(m,(p=>{const g=(function(E,S){return new Ao(S,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)})(i,p.child(u));return this.getDocumentsMatchingCollectionQuery(t,g,a,o).next((v=>{v.forEach(((E,S)=>{d=d.insert(E,S)}))}))})).next((()=>d))))}getDocumentsMatchingCollectionQuery(t,i,a,o){let u;return this.documentOverlayCache.getOverlaysForCollection(t,i.path,a.largestBatchId).next((d=>(u=d,this.remoteDocumentCache.getDocumentsMatchingQuery(t,i,a,u,o)))).next((d=>{u.forEach(((p,g)=>{const v=g.getKey();d.get(v)===null&&(d=d.insert(v,on.newInvalidDocument(v)))}));let m=zl();return d.forEach(((p,g)=>{const v=u.get(p);v!==void 0&&Ql(v.mutation,g,jn.empty(),ue.now()),td(i,g)&&(m=m.insert(p,g))})),m}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,i){return st.resolve(this.Lr.get(i))}saveBundleMetadata(t,i){return this.Lr.set(i.id,(function(o){return{id:o.id,version:o.version,createTime:Ai(o.createTime)}})(i)),st.resolve()}getNamedQuery(t,i){return st.resolve(this.kr.get(i))}saveNamedQuery(t,i){return this.kr.set(i.name,(function(o){return{name:o.name,query:q3(o.bundledQuery),readTime:Ai(o.readTime)}})(i)),st.resolve()}}/**
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
 */class iC{constructor(){this.overlays=new me(vt.comparator),this.qr=new Map}getOverlay(t,i){return st.resolve(this.overlays.get(i))}getOverlays(t,i){const a=Ga();return st.forEach(i,(o=>this.getOverlay(t,o).next((u=>{u!==null&&a.set(o,u)})))).next((()=>a))}saveOverlays(t,i,a){return a.forEach(((o,u)=>{this.St(t,i,u)})),st.resolve()}removeOverlaysForBatchId(t,i,a){const o=this.qr.get(a);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.qr.delete(a)),st.resolve()}getOverlaysForCollection(t,i,a){const o=Ga(),u=i.length+1,d=new vt(i.child("")),m=this.overlays.getIteratorFrom(d);for(;m.hasNext();){const p=m.getNext().value,g=p.getKey();if(!i.isPrefixOf(g.path))break;g.path.length===u&&p.largestBatchId>a&&o.set(p.getKey(),p)}return st.resolve(o)}getOverlaysForCollectionGroup(t,i,a,o){let u=new me(((g,v)=>g-v));const d=this.overlays.getIterator();for(;d.hasNext();){const g=d.getNext().value;if(g.getKey().getCollectionGroup()===i&&g.largestBatchId>a){let v=u.get(g.largestBatchId);v===null&&(v=Ga(),u=u.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const m=Ga(),p=u.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((g,v)=>m.set(g,v))),!(m.size()>=o)););return st.resolve(m)}St(t,i,a){const o=this.overlays.get(a.key);if(o!==null){const d=this.qr.get(o.largestBatchId).delete(a.key);this.qr.set(o.largestBatchId,d)}this.overlays=this.overlays.insert(a.key,new w3(i,a));let u=this.qr.get(i);u===void 0&&(u=Ut(),this.qr.set(i,u)),this.qr.set(i,u.add(a.key))}}/**
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
 */class rC{constructor(){this.sessionToken=Je.EMPTY_BYTE_STRING}getSessionToken(t){return st.resolve(this.sessionToken)}setSessionToken(t,i){return this.sessionToken=i,st.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(){this.Qr=new Le(qe.$r),this.Ur=new Le(qe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,i){const a=new qe(t,i);this.Qr=this.Qr.add(a),this.Ur=this.Ur.add(a)}Wr(t,i){t.forEach((a=>this.addReference(a,i)))}removeReference(t,i){this.Gr(new qe(t,i))}zr(t,i){t.forEach((a=>this.removeReference(a,i)))}jr(t){const i=new vt(new ae([])),a=new qe(i,t),o=new qe(i,t+1),u=[];return this.Ur.forEachInRange([a,o],(d=>{this.Gr(d),u.push(d.key)})),u}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const i=new vt(new ae([])),a=new qe(i,t),o=new qe(i,t+1);let u=Ut();return this.Ur.forEachInRange([a,o],(d=>{u=u.add(d.key)})),u}containsKey(t){const i=new qe(t,0),a=this.Qr.firstAfterOrEqual(i);return a!==null&&t.isEqual(a.key)}}class qe{constructor(t,i){this.key=t,this.Yr=i}static $r(t,i){return vt.comparator(t.key,i.key)||Pt(t.Yr,i.Yr)}static Kr(t,i){return Pt(t.Yr,i.Yr)||vt.comparator(t.key,i.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(t,i){this.indexManager=t,this.referenceDelegate=i,this.mutationQueue=[],this.tr=1,this.Zr=new Le(qe.$r)}checkEmpty(t){return st.resolve(this.mutationQueue.length===0)}addMutationBatch(t,i,a,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const d=new _3(u,i,a,o);this.mutationQueue.push(d);for(const m of o)this.Zr=this.Zr.add(new qe(m.key,u)),this.indexManager.addToCollectionParentIndex(t,m.key.path.popLast());return st.resolve(d)}lookupMutationBatch(t,i){return st.resolve(this.Xr(i))}getNextMutationBatchAfterBatchId(t,i){const a=i+1,o=this.ei(a),u=o<0?0:o;return st.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return st.resolve(this.mutationQueue.length===0?mg:this.tr-1)}getAllMutationBatches(t){return st.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,i){const a=new qe(i,0),o=new qe(i,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([a,o],(d=>{const m=this.Xr(d.Yr);u.push(m)})),st.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(t,i){let a=new Le(Pt);return i.forEach((o=>{const u=new qe(o,0),d=new qe(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,d],(m=>{a=a.add(m.Yr)}))})),st.resolve(this.ti(a))}getAllMutationBatchesAffectingQuery(t,i){const a=i.path,o=a.length+1;let u=a;vt.isDocumentKey(u)||(u=u.child(""));const d=new qe(new vt(u),0);let m=new Le(Pt);return this.Zr.forEachWhile((p=>{const g=p.key.path;return!!a.isPrefixOf(g)&&(g.length===o&&(m=m.add(p.Yr)),!0)}),d),st.resolve(this.ti(m))}ti(t){const i=[];return t.forEach((a=>{const o=this.Xr(a);o!==null&&i.push(o)})),i}removeMutationBatch(t,i){Yt(this.ni(i.batchId,"removed")===0,55003),this.mutationQueue.shift();let a=this.Zr;return st.forEach(i.mutations,(o=>{const u=new qe(o.key,i.batchId);return a=a.delete(u),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)})).next((()=>{this.Zr=a}))}ir(t){}containsKey(t,i){const a=new qe(i,0),o=this.Zr.firstAfterOrEqual(a);return st.resolve(i.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,st.resolve()}ni(t,i){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const i=this.ei(t);return i<0||i>=this.mutationQueue.length?null:this.mutationQueue[i]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(t){this.ri=t,this.docs=(function(){return new me(vt.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,i){const a=i.key,o=this.docs.get(a),u=o?o.size:0,d=this.ri(i);return this.docs=this.docs.insert(a,{document:i.mutableCopy(),size:d}),this.size+=d-u,this.indexManager.addToCollectionParentIndex(t,a.path.popLast())}removeEntry(t){const i=this.docs.get(t);i&&(this.docs=this.docs.remove(t),this.size-=i.size)}getEntry(t,i){const a=this.docs.get(i);return st.resolve(a?a.document.mutableCopy():on.newInvalidDocument(i))}getEntries(t,i){let a=ur();return i.forEach((o=>{const u=this.docs.get(o);a=a.insert(o,u?u.document.mutableCopy():on.newInvalidDocument(o))})),st.resolve(a)}getDocumentsMatchingQuery(t,i,a,o){let u=ur();const d=i.path,m=new vt(d.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(m);for(;p.hasNext();){const{key:g,value:{document:v}}=p.getNext();if(!d.isPrefixOf(g.path))break;g.path.length>d.length+1||VI(OI(v),a)<=0||(o.has(v.key)||td(i,v))&&(u=u.insert(v.key,v.mutableCopy()))}return st.resolve(u)}getAllFromCollectionGroup(t,i,a,o){bt(9500)}ii(t,i){return st.forEach(this.docs,(a=>i(a)))}newChangeBuffer(t){return new oC(this)}getSize(t){return st.resolve(this.size)}}class oC extends J3{constructor(t){super(),this.Nr=t}applyChanges(t){const i=[];return this.changes.forEach(((a,o)=>{o.isValidDocument()?i.push(this.Nr.addEntry(t,o)):this.Nr.removeEntry(a)})),st.waitFor(i)}getFromCache(t,i){return this.Nr.getEntry(t,i)}getAllFromCache(t,i){return this.Nr.getEntries(t,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(t){this.persistence=t,this.si=new es((i=>xg(i)),vg),this.lastRemoteSnapshotVersion=At.min(),this.highestTargetId=0,this.oi=0,this._i=new Sg,this.targetCount=0,this.ai=mo.ur()}forEachTarget(t,i){return this.si.forEach(((a,o)=>i(o))),st.resolve()}getLastRemoteSnapshotVersion(t){return st.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return st.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),st.resolve(this.highestTargetId)}setTargetsMetadata(t,i,a){return a&&(this.lastRemoteSnapshotVersion=a),i>this.oi&&(this.oi=i),st.resolve()}Pr(t){this.si.set(t.target,t);const i=t.targetId;i>this.highestTargetId&&(this.ai=new mo(i),this.highestTargetId=i),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,i){return this.Pr(i),this.targetCount+=1,st.resolve()}updateTargetData(t,i){return this.Pr(i),st.resolve()}removeTargetData(t,i){return this.si.delete(i.target),this._i.jr(i.targetId),this.targetCount-=1,st.resolve()}removeTargets(t,i,a){let o=0;const u=[];return this.si.forEach(((d,m)=>{m.sequenceNumber<=i&&a.get(m.targetId)===null&&(this.si.delete(d),u.push(this.removeMatchingKeysForTargetId(t,m.targetId)),o++)})),st.waitFor(u).next((()=>o))}getTargetCount(t){return st.resolve(this.targetCount)}getTargetData(t,i){const a=this.si.get(i)||null;return st.resolve(a)}addMatchingKeys(t,i,a){return this._i.Wr(i,a),st.resolve()}removeMatchingKeys(t,i,a){this._i.zr(i,a);const o=this.persistence.referenceDelegate,u=[];return o&&i.forEach((d=>{u.push(o.markPotentiallyOrphaned(t,d))})),st.waitFor(u)}removeMatchingKeysForTargetId(t,i){return this._i.jr(i),st.resolve()}getMatchingKeysForTargetId(t,i){const a=this._i.Hr(i);return st.resolve(a)}containsKey(t,i){return st.resolve(this._i.containsKey(i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(t,i){this.ui={},this.overlays={},this.ci=new Xh(0),this.li=!1,this.li=!0,this.hi=new rC,this.referenceDelegate=t(this),this.Pi=new lC(this),this.indexManager=new H3,this.remoteDocumentCache=(function(o){return new sC(o)})((a=>this.referenceDelegate.Ti(a))),this.serializer=new K3(i),this.Ii=new nC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let i=this.overlays[t.toKey()];return i||(i=new iC,this.overlays[t.toKey()]=i),i}getMutationQueue(t,i){let a=this.ui[t.toKey()];return a||(a=new aC(i,this.referenceDelegate),this.ui[t.toKey()]=a),a}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,i,a){pt("MemoryPersistence","Starting transaction:",t);const o=new uC(this.ci.next());return this.referenceDelegate.Ei(),a(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ai(t,i){return st.or(Object.values(this.ui).map((a=>()=>a.containsKey(t,i))))}}class uC extends PI{constructor(t){super(),this.currentSequenceNumber=t}}class Ag{constructor(t){this.persistence=t,this.Ri=new Sg,this.Vi=null}static mi(t){return new Ag(t)}get fi(){if(this.Vi)return this.Vi;throw bt(60996)}addReference(t,i,a){return this.Ri.addReference(a,i),this.fi.delete(a.toString()),st.resolve()}removeReference(t,i,a){return this.Ri.removeReference(a,i),this.fi.add(a.toString()),st.resolve()}markPotentiallyOrphaned(t,i){return this.fi.add(i.toString()),st.resolve()}removeTarget(t,i){this.Ri.jr(i.targetId).forEach((o=>this.fi.add(o.toString())));const a=this.persistence.getTargetCache();return a.getMatchingKeysForTargetId(t,i.targetId).next((o=>{o.forEach((u=>this.fi.add(u.toString())))})).next((()=>a.removeTargetData(t,i)))}Ei(){this.Vi=new Set}di(t){const i=this.persistence.getRemoteDocumentCache().newChangeBuffer();return st.forEach(this.fi,(a=>{const o=vt.fromPath(a);return this.gi(t,o).next((u=>{u||i.removeEntry(o,At.min())}))})).next((()=>(this.Vi=null,i.apply(t))))}updateLimboDocument(t,i){return this.gi(t,i).next((a=>{a?this.fi.delete(i.toString()):this.fi.add(i.toString())}))}Ti(t){return 0}gi(t,i){return st.or([()=>st.resolve(this.Ri.containsKey(i)),()=>this.persistence.getTargetCache().containsKey(t,i),()=>this.persistence.Ai(t,i)])}}class Oh{constructor(t,i){this.persistence=t,this.pi=new es((a=>zI(a.path)),((a,o)=>a.isEqual(o))),this.garbageCollector=Z3(this,i)}static mi(t,i){return new Oh(t,i)}Ei(){}di(t){return st.resolve()}forEachTarget(t,i){return this.persistence.getTargetCache().forEachTarget(t,i)}gr(t){const i=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((a=>i.next((o=>a+o))))}wr(t){let i=0;return this.pr(t,(a=>{i++})).next((()=>i))}pr(t,i){return st.forEach(this.pi,((a,o)=>this.br(t,a,o).next((u=>u?st.resolve():i(o)))))}removeTargets(t,i,a){return this.persistence.getTargetCache().removeTargets(t,i,a)}removeOrphanedDocuments(t,i){let a=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(t,(d=>this.br(t,d,i).next((m=>{m||(a++,u.removeEntry(d,At.min()))})))).next((()=>u.apply(t))).next((()=>a))}markPotentiallyOrphaned(t,i){return this.pi.set(i,t.currentSequenceNumber),st.resolve()}removeTarget(t,i){const a=i.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,a)}addReference(t,i,a){return this.pi.set(a,t.currentSequenceNumber),st.resolve()}removeReference(t,i,a){return this.pi.set(a,t.currentSequenceNumber),st.resolve()}updateLimboDocument(t,i){return this.pi.set(i,t.currentSequenceNumber),st.resolve()}Ti(t){let i=t.key.toString().length;return t.isFoundDocument()&&(i+=fh(t.data.value)),i}br(t,i,a){return st.or([()=>this.persistence.Ai(t,i),()=>this.persistence.getTargetCache().containsKey(t,i),()=>{const o=this.pi.get(i);return st.resolve(o!==void 0&&o>a)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(t,i,a,o){this.targetId=t,this.fromCache=i,this.Es=a,this.ds=o}static As(t,i){let a=Ut(),o=Ut();for(const u of i.docChanges)switch(u.type){case 0:a=a.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Rg(t,i.fromCache,a,o)}}/**
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
 */class cC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class hC{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return n6()?8:UI(t6())>0?6:4})()}initialize(t,i){this.ps=t,this.indexManager=i,this.Rs=!0}getDocumentsMatchingQuery(t,i,a,o){const u={result:null};return this.ys(t,i).next((d=>{u.result=d})).next((()=>{if(!u.result)return this.ws(t,i,o,a).next((d=>{u.result=d}))})).next((()=>{if(u.result)return;const d=new cC;return this.Ss(t,i,d).next((m=>{if(u.result=m,this.Vs)return this.bs(t,i,d,m.size)}))})).next((()=>u.result))}bs(t,i,a,o){return a.documentReadCount<this.fs?(Xs()<=Bt.DEBUG&&pt("QueryEngine","SDK will not create cache indexes for query:",Ws(i),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),st.resolve()):(Xs()<=Bt.DEBUG&&pt("QueryEngine","Query:",Ws(i),"scans",a.documentReadCount,"local documents and returns",o,"documents as results."),a.documentReadCount>this.gs*o?(Xs()<=Bt.DEBUG&&pt("QueryEngine","The SDK decides to create cache indexes for query:",Ws(i),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ti(i))):st.resolve())}ys(t,i){if(Ov(i))return st.resolve(null);let a=Ti(i);return this.indexManager.getIndexType(t,a).next((o=>o===0?null:(i.limit!==null&&o===1&&(i=Tm(i,null,"F"),a=Ti(i)),this.indexManager.getDocumentsMatchingTarget(t,a).next((u=>{const d=Ut(...u);return this.ps.getDocuments(t,d).next((m=>this.indexManager.getMinOffset(t,a).next((p=>{const g=this.Ds(i,m);return this.Cs(i,g,d,p.readTime)?this.ys(t,Tm(i,null,"F")):this.vs(t,g,i,p)}))))})))))}ws(t,i,a,o){return Ov(i)||o.isEqual(At.min())?st.resolve(null):this.ps.getDocuments(t,a).next((u=>{const d=this.Ds(i,u);return this.Cs(i,d,a,o)?st.resolve(null):(Xs()<=Bt.DEBUG&&pt("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ws(i)),this.vs(t,d,i,MI(o,au)).next((m=>m)))}))}Ds(t,i){let a=new Le(_w(t));return i.forEach(((o,u)=>{td(t,u)&&(a=a.add(u))})),a}Cs(t,i,a,o){if(t.limit===null)return!1;if(a.size!==i.size)return!0;const u=t.limitType==="F"?i.last():i.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(t,i,a){return Xs()<=Bt.DEBUG&&pt("QueryEngine","Using full collection scan to execute query:",Ws(i)),this.ps.getDocumentsMatchingQuery(t,i,ta.min(),a)}vs(t,i,a,o){return this.ps.getDocumentsMatchingQuery(t,a,o).next((u=>(i.forEach((d=>{u=u.insert(d.key,d)})),u)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig="LocalStore",dC=3e8;class fC{constructor(t,i,a,o){this.persistence=t,this.Fs=i,this.serializer=o,this.Ms=new me(Pt),this.xs=new es((u=>xg(u)),vg),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(a)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new eC(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(i=>t.collect(i,this.Ms)))}}function pC(n,t,i,a){return new fC(n,t,i,a)}async function qw(n,t){const i=It(n);return await i.persistence.runTransaction("Handle user change","readonly",(a=>{let o;return i.mutationQueue.getAllMutationBatches(a).next((u=>(o=u,i.Bs(t),i.mutationQueue.getAllMutationBatches(a)))).next((u=>{const d=[],m=[];let p=Ut();for(const g of o){d.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}for(const g of u){m.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}return i.localDocuments.getDocuments(a,p).next((g=>({Ls:g,removedBatchIds:d,addedBatchIds:m})))}))}))}function mC(n,t){const i=It(n);return i.persistence.runTransaction("Acknowledge batch","readwrite-primary",(a=>{const o=t.batch.keys(),u=i.Ns.newChangeBuffer({trackRemovals:!0});return(function(m,p,g,v){const E=g.batch,S=E.keys();let R=st.resolve();return S.forEach((M=>{R=R.next((()=>v.getEntry(p,M))).next((L=>{const U=g.docVersions.get(M);Yt(U!==null,48541),L.version.compareTo(U)<0&&(E.applyToRemoteDocument(L,g),L.isValidDocument()&&(L.setReadTime(g.commitVersion),v.addEntry(L)))}))})),R.next((()=>m.mutationQueue.removeMutationBatch(p,E)))})(i,a,t,u).next((()=>u.apply(a))).next((()=>i.mutationQueue.performConsistencyCheck(a))).next((()=>i.documentOverlayCache.removeOverlaysForBatchId(a,o,t.batch.batchId))).next((()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,(function(m){let p=Ut();for(let g=0;g<m.mutationResults.length;++g)m.mutationResults[g].transformResults.length>0&&(p=p.add(m.batch.mutations[g].key));return p})(t)))).next((()=>i.localDocuments.getDocuments(a,o)))}))}function Hw(n){const t=It(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(i=>t.Pi.getLastRemoteSnapshotVersion(i)))}function gC(n,t){const i=It(n),a=t.snapshotVersion;let o=i.Ms;return i.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const d=i.Ns.newChangeBuffer({trackRemovals:!0});o=i.Ms;const m=[];t.targetChanges.forEach(((v,E)=>{const S=o.get(E);if(!S)return;m.push(i.Pi.removeMatchingKeys(u,v.removedDocuments,E).next((()=>i.Pi.addMatchingKeys(u,v.addedDocuments,E))));let R=S.withSequenceNumber(u.currentSequenceNumber);t.targetMismatches.get(E)!==null?R=R.withResumeToken(Je.EMPTY_BYTE_STRING,At.min()).withLastLimboFreeSnapshotVersion(At.min()):v.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(v.resumeToken,a)),o=o.insert(E,R),(function(L,U,q){return L.resumeToken.approximateByteSize()===0||U.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=dC?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0})(S,R,v)&&m.push(i.Pi.updateTargetData(u,R))}));let p=ur(),g=Ut();if(t.documentUpdates.forEach((v=>{t.resolvedLimboDocuments.has(v)&&m.push(i.persistence.referenceDelegate.updateLimboDocument(u,v))})),m.push(yC(u,d,t.documentUpdates).next((v=>{p=v.ks,g=v.qs}))),!a.isEqual(At.min())){const v=i.Pi.getLastRemoteSnapshotVersion(u).next((E=>i.Pi.setTargetsMetadata(u,u.currentSequenceNumber,a)));m.push(v)}return st.waitFor(m).next((()=>d.apply(u))).next((()=>i.localDocuments.getLocalViewOfDocuments(u,p,g))).next((()=>p))})).then((u=>(i.Ms=o,u)))}function yC(n,t,i){let a=Ut(),o=Ut();return i.forEach((u=>a=a.add(u))),t.getEntries(n,a).next((u=>{let d=ur();return i.forEach(((m,p)=>{const g=u.get(m);p.isFoundDocument()!==g.isFoundDocument()&&(o=o.add(m)),p.isNoDocument()&&p.version.isEqual(At.min())?(t.removeEntry(m,p.readTime),d=d.insert(m,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(t.addEntry(p),d=d.insert(m,p)):pt(Ig,"Ignoring outdated watch update for ",m,". Current version:",g.version," Watch version:",p.version)})),{ks:d,qs:o}}))}function xC(n,t){const i=It(n);return i.persistence.runTransaction("Get next mutation batch","readonly",(a=>(t===void 0&&(t=mg),i.mutationQueue.getNextMutationBatchAfterBatchId(a,t))))}function vC(n,t){const i=It(n);return i.persistence.runTransaction("Allocate target","readwrite",(a=>{let o;return i.Pi.getTargetData(a,t).next((u=>u?(o=u,st.resolve(o)):i.Pi.allocateTargetId(a).next((d=>(o=new Qr(t,d,"TargetPurposeListen",a.currentSequenceNumber),i.Pi.addTargetData(a,o).next((()=>o)))))))})).then((a=>{const o=i.Ms.get(a.targetId);return(o===null||a.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(i.Ms=i.Ms.insert(a.targetId,a),i.xs.set(t,a.targetId)),a}))}async function Cm(n,t,i){const a=It(n),o=a.Ms.get(t),u=i?"readwrite":"readwrite-primary";try{i||await a.persistence.runTransaction("Release target",u,(d=>a.persistence.referenceDelegate.removeTarget(d,o)))}catch(d){if(!So(d))throw d;pt(Ig,`Failed to update sequence numbers for target ${t}: ${d}`)}a.Ms=a.Ms.remove(t),a.xs.delete(o.target)}function Gv(n,t,i){const a=It(n);let o=At.min(),u=Ut();return a.persistence.runTransaction("Execute query","readwrite",(d=>(function(p,g,v){const E=It(p),S=E.xs.get(v);return S!==void 0?st.resolve(E.Ms.get(S)):E.Pi.getTargetData(g,v)})(a,d,Ti(t)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,a.Pi.getMatchingKeysForTargetId(d,m.targetId).next((p=>{u=p}))})).next((()=>a.Fs.getDocumentsMatchingQuery(d,t,i?o:At.min(),i?u:Ut()))).next((m=>(_C(a,a3(t),m),{documents:m,Qs:u})))))}function _C(n,t,i){let a=n.Os.get(t)||At.min();i.forEach(((o,u)=>{u.readTime.compareTo(a)>0&&(a=u.readTime)})),n.Os.set(t,a)}class Yv{constructor(){this.activeTargetIds=h3()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class wC{constructor(){this.Mo=new Yv,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,i,a){}addLocalQueryTarget(t,i=!0){return i&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,i,a){this.xo[t]=i}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new Yv,Promise.resolve()}handleUserChange(t,i,a){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class EC{Oo(t){}shutdown(){}}/**
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
 */const Qv="ConnectivityMonitor";class Xv{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){pt(Qv,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){pt(Qv,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let th=null;function jm(){return th===null?th=(function(){return 268435456+Math.round(2147483648*Math.random())})():th++,"0x"+th.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp="RestConnection",bC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class TC{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=i+"://"+t.host,this.Ko=`projects/${a}/databases/${o}`,this.Wo=this.databaseId.database===Ch?`project_id=${a}`:`project_id=${a}&database_id=${o}`}Go(t,i,a,o,u){const d=jm(),m=this.zo(t,i.toUriEncodedString());pt(Vp,`Sending RPC '${t}' ${d}:`,m,a);const p={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(p,o,u);const{host:g}=new URL(m),v=cg(g);return this.Jo(t,m,p,a,v).then((E=>(pt(Vp,`Received RPC '${t}' ${d}: `,E),E)),(E=>{throw co(Vp,`RPC '${t}' ${d} failed with error: `,E,"url: ",m,"request:",a),E}))}Ho(t,i,a,o,u,d){return this.Go(t,i,a,o,u)}jo(t,i,a){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+bo})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach(((o,u)=>t[u]=o)),a&&a.headers.forEach(((o,u)=>t[u]=o))}zo(t,i){const a=bC[t];return`${this.Uo}/v1/${i}:${a}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an="WebChannelConnection";class AC extends TC{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,i,a,o,u){const d=jm();return new Promise(((m,p)=>{const g=new G2;g.setWithCredentials(!0),g.listenOnce(Y2.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case dh.NO_ERROR:const E=g.getResponseJson();pt(an,`XHR for RPC '${t}' ${d} received:`,JSON.stringify(E)),m(E);break;case dh.TIMEOUT:pt(an,`RPC '${t}' ${d} timed out`),p(new ft(it.DEADLINE_EXCEEDED,"Request time out"));break;case dh.HTTP_ERROR:const S=g.getStatus();if(pt(an,`RPC '${t}' ${d} failed with status:`,S,"response text:",g.getResponseText()),S>0){let R=g.getResponseJson();Array.isArray(R)&&(R=R[0]);const M=R?.error;if(M&&M.status&&M.message){const L=(function(q){const X=q.toLowerCase().replace(/_/g,"-");return Object.values(it).indexOf(X)>=0?X:it.UNKNOWN})(M.status);p(new ft(L,M.message))}else p(new ft(it.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new ft(it.UNAVAILABLE,"Connection failed."));break;default:bt(9055,{l_:t,streamId:d,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{pt(an,`RPC '${t}' ${d} completed.`)}}));const v=JSON.stringify(o);pt(an,`RPC '${t}' ${d} sending request:`,o),g.send(i,"POST",v,a,15)}))}T_(t,i,a){const o=jm(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],d=W2(),m=X2(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.jo(p.initMessageHeaders,i,a),p.encodeInitMessageHeaders=!0;const v=u.join("");pt(an,`Creating RPC '${t}' stream ${o}: ${v}`,p);const E=d.createWebChannel(v,p);this.I_(E);let S=!1,R=!1;const M=new SC({Yo:U=>{R?pt(an,`Not sending because RPC '${t}' stream ${o} is closed:`,U):(S||(pt(an,`Opening RPC '${t}' stream ${o} transport.`),E.open(),S=!0),pt(an,`RPC '${t}' stream ${o} sending:`,U),E.send(U))},Zo:()=>E.close()}),L=(U,q,X)=>{U.listen(q,(tt=>{try{X(tt)}catch(lt){setTimeout((()=>{throw lt}),0)}}))};return L(E,Ll.EventType.OPEN,(()=>{R||(pt(an,`RPC '${t}' stream ${o} transport opened.`),M.o_())})),L(E,Ll.EventType.CLOSE,(()=>{R||(R=!0,pt(an,`RPC '${t}' stream ${o} transport closed`),M.a_(),this.E_(E))})),L(E,Ll.EventType.ERROR,(U=>{R||(R=!0,co(an,`RPC '${t}' stream ${o} transport errored. Name:`,U.name,"Message:",U.message),M.a_(new ft(it.UNAVAILABLE,"The operation could not be completed")))})),L(E,Ll.EventType.MESSAGE,(U=>{if(!R){const q=U.data[0];Yt(!!q,16349);const X=q,tt=X?.error||X[0]?.error;if(tt){pt(an,`RPC '${t}' stream ${o} received error:`,tt);const lt=tt.status;let Y=(function(I){const j=Ce[I];if(j!==void 0)return Mw(j)})(lt),ot=tt.message;Y===void 0&&(Y=it.INTERNAL,ot="Unknown error status: "+lt+" with message "+tt.message),R=!0,M.a_(new ft(Y,ot)),E.close()}else pt(an,`RPC '${t}' stream ${o} received:`,q),M.u_(q)}})),L(m,Q2.STAT_EVENT,(U=>{U.stat===ym.PROXY?pt(an,`RPC '${t}' stream ${o} detected buffering proxy`):U.stat===ym.NOPROXY&&pt(an,`RPC '${t}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{M.__()}),0),M}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((i=>i===t))}}function kp(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(n){return new j3(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(t,i,a=1e3,o=1.5,u=6e4){this.Mi=t,this.timerId=i,this.d_=a,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const i=Math.floor(this.V_+this.y_()),a=Math.max(0,Date.now()-this.f_),o=Math.max(0,i-a);o>0&&pt("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${i} ms, last attempt: ${a} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv="PersistentStream";class Yw{constructor(t,i,a,o,u,d,m,p){this.Mi=t,this.S_=a,this.b_=o,this.connection=u,this.authCredentialsProvider=d,this.appCheckCredentialsProvider=m,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Gw(t,i)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,i){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():i&&i.code===it.RESOURCE_EXHAUSTED?(or(i.toString()),or("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):i&&i.code===it.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(i)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),i=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([a,o])=>{this.D_===i&&this.G_(a,o)}),(a=>{t((()=>{const o=new ft(it.UNKNOWN,"Fetching auth token failed: "+a.message);return this.z_(o)}))}))}G_(t,i){const a=this.W_(this.D_);this.stream=this.j_(t,i),this.stream.Xo((()=>{a((()=>this.listener.Xo()))})),this.stream.t_((()=>{a((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{a((()=>this.z_(o)))})),this.stream.onMessage((o=>{a((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return pt(Wv,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return i=>{this.Mi.enqueueAndForget((()=>this.D_===t?i():(pt(Wv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class RC extends Yw{constructor(t,i,a,o,u,d){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",i,a,o,d),this.serializer=u}j_(t,i){return this.connection.T_("Listen",t,i)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const i=M3(this.serializer,t),a=(function(u){if(!("targetChange"in u))return At.min();const d=u.targetChange;return d.targetIds&&d.targetIds.length?At.min():d.readTime?Ai(d.readTime):At.min()})(t);return this.listener.H_(i,a)}Y_(t){const i={};i.database=Im(this.serializer),i.addTarget=(function(u,d){let m;const p=d.target;if(m=Em(p)?{documents:k3(u,p)}:{query:P3(u,p).ft},m.targetId=d.targetId,d.resumeToken.approximateByteSize()>0){m.resumeToken=kw(u,d.resumeToken);const g=Sm(u,d.expectedCount);g!==null&&(m.expectedCount=g)}else if(d.snapshotVersion.compareTo(At.min())>0){m.readTime=Mh(u,d.snapshotVersion.toTimestamp());const g=Sm(u,d.expectedCount);g!==null&&(m.expectedCount=g)}return m})(this.serializer,t);const a=L3(this.serializer,t);a&&(i.labels=a),this.q_(i)}Z_(t){const i={};i.database=Im(this.serializer),i.removeTarget=t,this.q_(i)}}class IC extends Yw{constructor(t,i,a,o,u,d){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",i,a,o,d),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,i){return this.connection.T_("Write",t,i)}J_(t){return Yt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Yt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){Yt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const i=V3(t.writeResults,t.commitTime),a=Ai(t.commitTime);return this.listener.na(a,i)}ra(){const t={};t.database=Im(this.serializer),this.q_(t)}ea(t){const i={streamToken:this.lastStreamToken,writes:t.map((a=>O3(this.serializer,a)))};this.q_(i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{}class jC extends CC{constructor(t,i,a,o){super(),this.authCredentials=t,this.appCheckCredentials=i,this.connection=a,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ft(it.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,i,a,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,d])=>this.connection.Go(t,Am(i,a),o,u,d))).catch((u=>{throw u.name==="FirebaseError"?(u.code===it.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ft(it.UNKNOWN,u.toString())}))}Ho(t,i,a,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([d,m])=>this.connection.Ho(t,Am(i,a),o,d,m,u))).catch((d=>{throw d.name==="FirebaseError"?(d.code===it.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),d):new ft(it.UNKNOWN,d.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class DC{constructor(t,i){this.asyncQueue=t,this.onlineStateHandler=i,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const i=`Could not reach Cloud Firestore backend. ${t}
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
 */const Za="RemoteStore";class NC{constructor(t,i,a,o,u){this.localStore=t,this.datastore=i,this.asyncQueue=a,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo((d=>{a.enqueueAndForget((async()=>{ns(this)&&(pt(Za,"Restarting streams for network reachability change."),await(async function(p){const g=It(p);g.Ea.add(4),await vu(g),g.Ra.set("Unknown"),g.Ea.delete(4),await ad(g)})(this))}))})),this.Ra=new DC(a,o)}}async function ad(n){if(ns(n))for(const t of n.da)await t(!0)}async function vu(n){for(const t of n.da)await t(!1)}function Qw(n,t){const i=It(n);i.Ia.has(t.targetId)||(i.Ia.set(t.targetId,t),Ng(i)?Dg(i):Ro(i).O_()&&jg(i,t))}function Cg(n,t){const i=It(n),a=Ro(i);i.Ia.delete(t),a.O_()&&Xw(i,t),i.Ia.size===0&&(a.O_()?a.L_():ns(i)&&i.Ra.set("Unknown"))}function jg(n,t){if(n.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(At.min())>0){const i=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(i)}Ro(n).Y_(t)}function Xw(n,t){n.Va.Ue(t),Ro(n).Z_(t)}function Dg(n){n.Va=new A3({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),Ro(n).start(),n.Ra.ua()}function Ng(n){return ns(n)&&!Ro(n).x_()&&n.Ia.size>0}function ns(n){return It(n).Ea.size===0}function Ww(n){n.Va=void 0}async function MC(n){n.Ra.set("Online")}async function OC(n){n.Ia.forEach(((t,i)=>{jg(n,t)}))}async function VC(n,t){Ww(n),Ng(n)?(n.Ra.ha(t),Dg(n)):n.Ra.set("Unknown")}async function kC(n,t,i){if(n.Ra.set("Online"),t instanceof Vw&&t.state===2&&t.cause)try{await(async function(o,u){const d=u.cause;for(const m of u.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,d),o.Ia.delete(m),o.Va.removeTarget(m))})(n,t)}catch(a){pt(Za,"Failed to remove targets %s: %s ",t.targetIds.join(","),a),await Vh(n,a)}else if(t instanceof gh?n.Va.Ze(t):t instanceof Ow?n.Va.st(t):n.Va.tt(t),!i.isEqual(At.min()))try{const a=await Hw(n.localStore);i.compareTo(a)>=0&&await(function(u,d){const m=u.Va.Tt(d);return m.targetChanges.forEach(((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const v=u.Ia.get(g);v&&u.Ia.set(g,v.withResumeToken(p.resumeToken,d))}})),m.targetMismatches.forEach(((p,g)=>{const v=u.Ia.get(p);if(!v)return;u.Ia.set(p,v.withResumeToken(Je.EMPTY_BYTE_STRING,v.snapshotVersion)),Xw(u,p);const E=new Qr(v.target,p,g,v.sequenceNumber);jg(u,E)})),u.remoteSyncer.applyRemoteEvent(m)})(n,i)}catch(a){pt(Za,"Failed to raise snapshot:",a),await Vh(n,a)}}async function Vh(n,t,i){if(!So(t))throw t;n.Ea.add(1),await vu(n),n.Ra.set("Offline"),i||(i=()=>Hw(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{pt(Za,"Retrying IndexedDB access"),await i(),n.Ea.delete(1),await ad(n)}))}function Zw(n,t){return t().catch((i=>Vh(n,i,t)))}async function sd(n){const t=It(n),i=ra(t);let a=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:mg;for(;PC(t);)try{const o=await xC(t.localStore,a);if(o===null){t.Ta.length===0&&i.L_();break}a=o.batchId,UC(t,o)}catch(o){await Vh(t,o)}Jw(t)&&tE(t)}function PC(n){return ns(n)&&n.Ta.length<10}function UC(n,t){n.Ta.push(t);const i=ra(n);i.O_()&&i.X_&&i.ea(t.mutations)}function Jw(n){return ns(n)&&!ra(n).x_()&&n.Ta.length>0}function tE(n){ra(n).start()}async function LC(n){ra(n).ra()}async function zC(n){const t=ra(n);for(const i of n.Ta)t.ea(i.mutations)}async function $C(n,t,i){const a=n.Ta.shift(),o=Eg.from(a,t,i);await Zw(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await sd(n)}async function BC(n,t){t&&ra(n).X_&&await(async function(a,o){if((function(d){return b3(d)&&d!==it.ABORTED})(o.code)){const u=a.Ta.shift();ra(a).B_(),await Zw(a,(()=>a.remoteSyncer.rejectFailedWrite(u.batchId,o))),await sd(a)}})(n,t),Jw(n)&&tE(n)}async function Zv(n,t){const i=It(n);i.asyncQueue.verifyOperationInProgress(),pt(Za,"RemoteStore received new credentials");const a=ns(i);i.Ea.add(3),await vu(i),a&&i.Ra.set("Unknown"),await i.remoteSyncer.handleCredentialChange(t),i.Ea.delete(3),await ad(i)}async function FC(n,t){const i=It(n);t?(i.Ea.delete(2),await ad(i)):t||(i.Ea.add(2),await vu(i),i.Ra.set("Unknown"))}function Ro(n){return n.ma||(n.ma=(function(i,a,o){const u=It(i);return u.sa(),new RC(a,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(n.datastore,n.asyncQueue,{Xo:MC.bind(null,n),t_:OC.bind(null,n),r_:VC.bind(null,n),H_:kC.bind(null,n)}),n.da.push((async t=>{t?(n.ma.B_(),Ng(n)?Dg(n):n.Ra.set("Unknown")):(await n.ma.stop(),Ww(n))}))),n.ma}function ra(n){return n.fa||(n.fa=(function(i,a,o){const u=It(i);return u.sa(),new IC(a,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:LC.bind(null,n),r_:BC.bind(null,n),ta:zC.bind(null,n),na:$C.bind(null,n)}),n.da.push((async t=>{t?(n.fa.B_(),await sd(n)):(await n.fa.stop(),n.Ta.length>0&&(pt(Za,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(t,i,a,o,u){this.asyncQueue=t,this.timerId=i,this.targetTimeMs=a,this.op=o,this.removalCallback=u,this.deferred=new ir,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((d=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,i,a,o,u){const d=Date.now()+a,m=new Mg(t,i,d,o,u);return m.start(a),m}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ft(it.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Og(n,t){if(or("AsyncQueue",`${t}: ${n}`),So(n))return new ft(it.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{static emptySet(t){return new no(t.comparator)}constructor(t){this.comparator=t?(i,a)=>t(i,a)||vt.comparator(i.key,a.key):(i,a)=>vt.comparator(i.key,a.key),this.keyedMap=zl(),this.sortedSet=new me(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const i=this.keyedMap.get(t);return i?this.sortedSet.indexOf(i):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((i,a)=>(t(i),!1)))}add(t){const i=this.delete(t.key);return i.copy(i.keyedMap.insert(t.key,t),i.sortedSet.insert(t,null))}delete(t){const i=this.get(t);return i?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(i)):this}isEqual(t){if(!(t instanceof no)||this.size!==t.size)return!1;const i=this.sortedSet.getIterator(),a=t.sortedSet.getIterator();for(;i.hasNext();){const o=i.getNext().key,u=a.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const t=[];return this.forEach((i=>{t.push(i.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Jv{constructor(){this.ga=new me(vt.comparator)}track(t){const i=t.doc.key,a=this.ga.get(i);a?t.type!==0&&a.type===3?this.ga=this.ga.insert(i,t):t.type===3&&a.type!==1?this.ga=this.ga.insert(i,{type:a.type,doc:t.doc}):t.type===2&&a.type===2?this.ga=this.ga.insert(i,{type:2,doc:t.doc}):t.type===2&&a.type===0?this.ga=this.ga.insert(i,{type:0,doc:t.doc}):t.type===1&&a.type===0?this.ga=this.ga.remove(i):t.type===1&&a.type===2?this.ga=this.ga.insert(i,{type:1,doc:a.doc}):t.type===0&&a.type===1?this.ga=this.ga.insert(i,{type:2,doc:t.doc}):bt(63341,{Rt:t,pa:a}):this.ga=this.ga.insert(i,t)}ya(){const t=[];return this.ga.inorderTraversal(((i,a)=>{t.push(a)})),t}}class go{constructor(t,i,a,o,u,d,m,p,g){this.query=t,this.docs=i,this.oldDocs=a,this.docChanges=o,this.mutatedKeys=u,this.fromCache=d,this.syncStateChanged=m,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(t,i,a,o,u){const d=[];return i.forEach((m=>{d.push({type:0,doc:m})})),new go(t,i,no.emptySet(i),d,a,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Jh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const i=this.docChanges,a=t.docChanges;if(i.length!==a.length)return!1;for(let o=0;o<i.length;o++)if(i[o].type!==a[o].type||!i[o].doc.isEqual(a[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class qC{constructor(){this.queries=t_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(i,a){const o=It(i),u=o.queries;o.queries=t_(),u.forEach(((d,m)=>{for(const p of m.Sa)p.onError(a)}))})(this,new ft(it.ABORTED,"Firestore shutting down"))}}function t_(){return new es((n=>vw(n)),Jh)}async function eE(n,t){const i=It(n);let a=3;const o=t.query;let u=i.queries.get(o);u?!u.ba()&&t.Da()&&(a=2):(u=new KC,a=t.Da()?0:1);try{switch(a){case 0:u.wa=await i.onListen(o,!0);break;case 1:u.wa=await i.onListen(o,!1);break;case 2:await i.onFirstRemoteStoreListen(o)}}catch(d){const m=Og(d,`Initialization of query '${Ws(t.query)}' failed`);return void t.onError(m)}i.queries.set(o,u),u.Sa.push(t),t.va(i.onlineState),u.wa&&t.Fa(u.wa)&&Vg(i)}async function nE(n,t){const i=It(n),a=t.query;let o=3;const u=i.queries.get(a);if(u){const d=u.Sa.indexOf(t);d>=0&&(u.Sa.splice(d,1),u.Sa.length===0?o=t.Da()?0:1:!u.ba()&&t.Da()&&(o=2))}switch(o){case 0:return i.queries.delete(a),i.onUnlisten(a,!0);case 1:return i.queries.delete(a),i.onUnlisten(a,!1);case 2:return i.onLastRemoteStoreUnlisten(a);default:return}}function HC(n,t){const i=It(n);let a=!1;for(const o of t){const u=o.query,d=i.queries.get(u);if(d){for(const m of d.Sa)m.Fa(o)&&(a=!0);d.wa=o}}a&&Vg(i)}function GC(n,t,i){const a=It(n),o=a.queries.get(t);if(o)for(const u of o.Sa)u.onError(i);a.queries.delete(t)}function Vg(n){n.Ca.forEach((t=>{t.next()}))}var Dm,e_;(e_=Dm||(Dm={})).Ma="default",e_.Cache="cache";class iE{constructor(t,i,a){this.query=t,this.xa=i,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=a||{}}Fa(t){if(!this.options.includeMetadataChanges){const a=[];for(const o of t.docChanges)o.type!==3&&a.push(o);t=new go(t.query,t.docs,t.oldDocs,a,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let i=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),i=!0):this.La(t,this.onlineState)&&(this.ka(t),i=!0),this.Na=t,i}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let i=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),i=!0),i}La(t,i){if(!t.fromCache||!this.Da())return!0;const a=i!=="Offline";return(!this.options.qa||!a)&&(!t.docs.isEmpty()||t.hasCachedResults||i==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const i=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!i)&&this.options.includeMetadataChanges===!0}ka(t){t=go.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Dm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(t){this.key=t}}class aE{constructor(t){this.key=t}}class YC{constructor(t,i){this.query=t,this.Ya=i,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ut(),this.mutatedKeys=Ut(),this.eu=_w(t),this.tu=new no(this.eu)}get nu(){return this.Ya}ru(t,i){const a=i?i.iu:new Jv,o=i?i.tu:this.tu;let u=i?i.mutatedKeys:this.mutatedKeys,d=o,m=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,g=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal(((v,E)=>{const S=o.get(v),R=td(this.query,E)?E:null,M=!!S&&this.mutatedKeys.has(S.key),L=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let U=!1;S&&R?S.data.isEqual(R.data)?M!==L&&(a.track({type:3,doc:R}),U=!0):this.su(S,R)||(a.track({type:2,doc:R}),U=!0,(p&&this.eu(R,p)>0||g&&this.eu(R,g)<0)&&(m=!0)):!S&&R?(a.track({type:0,doc:R}),U=!0):S&&!R&&(a.track({type:1,doc:S}),U=!0,(p||g)&&(m=!0)),U&&(R?(d=d.add(R),u=L?u.add(v):u.delete(v)):(d=d.delete(v),u=u.delete(v)))})),this.query.limit!==null)for(;d.size>this.query.limit;){const v=this.query.limitType==="F"?d.last():d.first();d=d.delete(v.key),u=u.delete(v.key),a.track({type:1,doc:v})}return{tu:d,iu:a,Cs:m,mutatedKeys:u}}su(t,i){return t.hasLocalMutations&&i.hasCommittedMutations&&!i.hasLocalMutations}applyChanges(t,i,a,o){const u=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const d=t.iu.ya();d.sort(((v,E)=>(function(R,M){const L=U=>{switch(U){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return bt(20277,{Rt:U})}};return L(R)-L(M)})(v.type,E.type)||this.eu(v.doc,E.doc))),this.ou(a),o=o??!1;const m=i&&!o?this._u():[],p=this.Xa.size===0&&this.current&&!o?1:0,g=p!==this.Za;return this.Za=p,d.length!==0||g?{snapshot:new go(this.query,t.tu,u,d,t.mutatedKeys,p===0,g,!1,!!a&&a.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Jv,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((i=>this.Ya=this.Ya.add(i))),t.modifiedDocuments.forEach((i=>{})),t.removedDocuments.forEach((i=>this.Ya=this.Ya.delete(i))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=Ut(),this.tu.forEach((a=>{this.uu(a.key)&&(this.Xa=this.Xa.add(a.key))}));const i=[];return t.forEach((a=>{this.Xa.has(a)||i.push(new aE(a))})),this.Xa.forEach((a=>{t.has(a)||i.push(new rE(a))})),i}cu(t){this.Ya=t.Qs,this.Xa=Ut();const i=this.ru(t.documents);return this.applyChanges(i,!0)}lu(){return go.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const kg="SyncEngine";class QC{constructor(t,i,a){this.query=t,this.targetId=i,this.view=a}}class XC{constructor(t){this.key=t,this.hu=!1}}class WC{constructor(t,i,a,o,u,d){this.localStore=t,this.remoteStore=i,this.eventManager=a,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=d,this.Pu={},this.Tu=new es((m=>vw(m)),Jh),this.Iu=new Map,this.Eu=new Set,this.du=new me(vt.comparator),this.Au=new Map,this.Ru=new Sg,this.Vu={},this.mu=new Map,this.fu=mo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function ZC(n,t,i=!0){const a=hE(n);let o;const u=a.Tu.get(t);return u?(a.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await sE(a,t,i,!0),o}async function JC(n,t){const i=hE(n);await sE(i,t,!0,!1)}async function sE(n,t,i,a){const o=await vC(n.localStore,Ti(t)),u=o.targetId,d=n.sharedClientState.addLocalQueryTarget(u,i);let m;return a&&(m=await tj(n,t,u,d==="current",o.resumeToken)),n.isPrimaryClient&&i&&Qw(n.remoteStore,o),m}async function tj(n,t,i,a,o){n.pu=(E,S,R)=>(async function(L,U,q,X){let tt=U.view.ru(q);tt.Cs&&(tt=await Gv(L.localStore,U.query,!1).then((({documents:C})=>U.view.ru(C,tt))));const lt=X&&X.targetChanges.get(U.targetId),Y=X&&X.targetMismatches.get(U.targetId)!=null,ot=U.view.applyChanges(tt,L.isPrimaryClient,lt,Y);return i_(L,U.targetId,ot.au),ot.snapshot})(n,E,S,R);const u=await Gv(n.localStore,t,!0),d=new YC(t,u.Qs),m=d.ru(u.documents),p=xu.createSynthesizedTargetChangeForCurrentChange(i,a&&n.onlineState!=="Offline",o),g=d.applyChanges(m,n.isPrimaryClient,p);i_(n,i,g.au);const v=new QC(t,i,d);return n.Tu.set(t,v),n.Iu.has(i)?n.Iu.get(i).push(t):n.Iu.set(i,[t]),g.snapshot}async function ej(n,t,i){const a=It(n),o=a.Tu.get(t),u=a.Iu.get(o.targetId);if(u.length>1)return a.Iu.set(o.targetId,u.filter((d=>!Jh(d,t)))),void a.Tu.delete(t);a.isPrimaryClient?(a.sharedClientState.removeLocalQueryTarget(o.targetId),a.sharedClientState.isActiveQueryTarget(o.targetId)||await Cm(a.localStore,o.targetId,!1).then((()=>{a.sharedClientState.clearQueryState(o.targetId),i&&Cg(a.remoteStore,o.targetId),Nm(a,o.targetId)})).catch(To)):(Nm(a,o.targetId),await Cm(a.localStore,o.targetId,!0))}async function nj(n,t){const i=It(n),a=i.Tu.get(t),o=i.Iu.get(a.targetId);i.isPrimaryClient&&o.length===1&&(i.sharedClientState.removeLocalQueryTarget(a.targetId),Cg(i.remoteStore,a.targetId))}async function ij(n,t,i){const a=cj(n);try{const o=await(function(d,m){const p=It(d),g=ue.now(),v=m.reduce(((R,M)=>R.add(M.key)),Ut());let E,S;return p.persistence.runTransaction("Locally write mutations","readwrite",(R=>{let M=ur(),L=Ut();return p.Ns.getEntries(R,v).next((U=>{M=U,M.forEach(((q,X)=>{X.isValidDocument()||(L=L.add(q))}))})).next((()=>p.localDocuments.getOverlayedDocuments(R,M))).next((U=>{E=U;const q=[];for(const X of m){const tt=x3(X,E.get(X.key).overlayedDocument);tt!=null&&q.push(new oa(X.key,tt,hw(tt.value.mapValue),Si.exists(!0)))}return p.mutationQueue.addMutationBatch(R,g,q,m)})).next((U=>{S=U;const q=U.applyToLocalDocumentSet(E,L);return p.documentOverlayCache.saveOverlays(R,U.batchId,q)}))})).then((()=>({batchId:S.batchId,changes:Ew(E)})))})(a.localStore,t);a.sharedClientState.addPendingMutation(o.batchId),(function(d,m,p){let g=d.Vu[d.currentUser.toKey()];g||(g=new me(Pt)),g=g.insert(m,p),d.Vu[d.currentUser.toKey()]=g})(a,o.batchId,i),await _u(a,o.changes),await sd(a.remoteStore)}catch(o){const u=Og(o,"Failed to persist write");i.reject(u)}}async function oE(n,t){const i=It(n);try{const a=await gC(i.localStore,t);t.targetChanges.forEach(((o,u)=>{const d=i.Au.get(u);d&&(Yt(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?d.hu=!0:o.modifiedDocuments.size>0?Yt(d.hu,14607):o.removedDocuments.size>0&&(Yt(d.hu,42227),d.hu=!1))})),await _u(i,a,t)}catch(a){await To(a)}}function n_(n,t,i){const a=It(n);if(a.isPrimaryClient&&i===0||!a.isPrimaryClient&&i===1){const o=[];a.Tu.forEach(((u,d)=>{const m=d.view.va(t);m.snapshot&&o.push(m.snapshot)})),(function(d,m){const p=It(d);p.onlineState=m;let g=!1;p.queries.forEach(((v,E)=>{for(const S of E.Sa)S.va(m)&&(g=!0)})),g&&Vg(p)})(a.eventManager,t),o.length&&a.Pu.H_(o),a.onlineState=t,a.isPrimaryClient&&a.sharedClientState.setOnlineState(t)}}async function rj(n,t,i){const a=It(n);a.sharedClientState.updateQueryState(t,"rejected",i);const o=a.Au.get(t),u=o&&o.key;if(u){let d=new me(vt.comparator);d=d.insert(u,on.newNoDocument(u,At.min()));const m=Ut().add(u),p=new id(At.min(),new Map,new me(Pt),d,m);await oE(a,p),a.du=a.du.remove(u),a.Au.delete(t),Pg(a)}else await Cm(a.localStore,t,!1).then((()=>Nm(a,t,i))).catch(To)}async function aj(n,t){const i=It(n),a=t.batch.batchId;try{const o=await mC(i.localStore,t);uE(i,a,null),lE(i,a),i.sharedClientState.updateMutationState(a,"acknowledged"),await _u(i,o)}catch(o){await To(o)}}async function sj(n,t,i){const a=It(n);try{const o=await(function(d,m){const p=It(d);return p.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let v;return p.mutationQueue.lookupMutationBatch(g,m).next((E=>(Yt(E!==null,37113),v=E.keys(),p.mutationQueue.removeMutationBatch(g,E)))).next((()=>p.mutationQueue.performConsistencyCheck(g))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(g,v,m))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v))).next((()=>p.localDocuments.getDocuments(g,v)))}))})(a.localStore,t);uE(a,t,i),lE(a,t),a.sharedClientState.updateMutationState(t,"rejected",i),await _u(a,o)}catch(o){await To(o)}}function lE(n,t){(n.mu.get(t)||[]).forEach((i=>{i.resolve()})),n.mu.delete(t)}function uE(n,t,i){const a=It(n);let o=a.Vu[a.currentUser.toKey()];if(o){const u=o.get(t);u&&(i?u.reject(i):u.resolve(),o=o.remove(t)),a.Vu[a.currentUser.toKey()]=o}}function Nm(n,t,i=null){n.sharedClientState.removeLocalQueryTarget(t);for(const a of n.Iu.get(t))n.Tu.delete(a),i&&n.Pu.yu(a,i);n.Iu.delete(t),n.isPrimaryClient&&n.Ru.jr(t).forEach((a=>{n.Ru.containsKey(a)||cE(n,a)}))}function cE(n,t){n.Eu.delete(t.path.canonicalString());const i=n.du.get(t);i!==null&&(Cg(n.remoteStore,i),n.du=n.du.remove(t),n.Au.delete(i),Pg(n))}function i_(n,t,i){for(const a of i)a instanceof rE?(n.Ru.addReference(a.key,t),oj(n,a)):a instanceof aE?(pt(kg,"Document no longer in limbo: "+a.key),n.Ru.removeReference(a.key,t),n.Ru.containsKey(a.key)||cE(n,a.key)):bt(19791,{wu:a})}function oj(n,t){const i=t.key,a=i.path.canonicalString();n.du.get(i)||n.Eu.has(a)||(pt(kg,"New document in limbo: "+i),n.Eu.add(a),Pg(n))}function Pg(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const i=new vt(ae.fromString(t)),a=n.fu.next();n.Au.set(a,new XC(i)),n.du=n.du.insert(i,a),Qw(n.remoteStore,new Qr(Ti(_g(i.path)),a,"TargetPurposeLimboResolution",Xh.ce))}}async function _u(n,t,i){const a=It(n),o=[],u=[],d=[];a.Tu.isEmpty()||(a.Tu.forEach(((m,p)=>{d.push(a.pu(p,t,i).then((g=>{if((g||i)&&a.isPrimaryClient){const v=g?!g.fromCache:i?.targetChanges.get(p.targetId)?.current;a.sharedClientState.updateQueryState(p.targetId,v?"current":"not-current")}if(g){o.push(g);const v=Rg.As(p.targetId,g);u.push(v)}})))})),await Promise.all(d),a.Pu.H_(o),await(async function(p,g){const v=It(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(E=>st.forEach(g,(S=>st.forEach(S.Es,(R=>v.persistence.referenceDelegate.addReference(E,S.targetId,R))).next((()=>st.forEach(S.ds,(R=>v.persistence.referenceDelegate.removeReference(E,S.targetId,R)))))))))}catch(E){if(!So(E))throw E;pt(Ig,"Failed to update sequence numbers: "+E)}for(const E of g){const S=E.targetId;if(!E.fromCache){const R=v.Ms.get(S),M=R.snapshotVersion,L=R.withLastLimboFreeSnapshotVersion(M);v.Ms=v.Ms.insert(S,L)}}})(a.localStore,u))}async function lj(n,t){const i=It(n);if(!i.currentUser.isEqual(t)){pt(kg,"User change. New user:",t.toKey());const a=await qw(i.localStore,t);i.currentUser=t,(function(u,d){u.mu.forEach((m=>{m.forEach((p=>{p.reject(new ft(it.CANCELLED,d))}))})),u.mu.clear()})(i,"'waitForPendingWrites' promise is rejected due to a user change."),i.sharedClientState.handleUserChange(t,a.removedBatchIds,a.addedBatchIds),await _u(i,a.Ls)}}function uj(n,t){const i=It(n),a=i.Au.get(t);if(a&&a.hu)return Ut().add(a.key);{let o=Ut();const u=i.Iu.get(t);if(!u)return o;for(const d of u){const m=i.Tu.get(d);o=o.unionWith(m.view.nu)}return o}}function hE(n){const t=It(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=oE.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=uj.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=rj.bind(null,t),t.Pu.H_=HC.bind(null,t.eventManager),t.Pu.yu=GC.bind(null,t.eventManager),t}function cj(n){const t=It(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=aj.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=sj.bind(null,t),t}class kh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=rd(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,i){return null}Mu(t,i){return null}vu(t){return pC(this.persistence,new hC,t.initialUser,this.serializer)}Cu(t){return new Kw(Ag.mi,this.serializer)}Du(t){return new wC}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}kh.provider={build:()=>new kh};class hj extends kh{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,i){Yt(this.persistence.referenceDelegate instanceof Oh,46915);const a=this.persistence.referenceDelegate.garbageCollector;return new X3(a,t.asyncQueue,i)}Cu(t){const i=this.cacheSizeBytes!==void 0?xn.withCacheSize(this.cacheSizeBytes):xn.DEFAULT;return new Kw((a=>Oh.mi(a,i)),this.serializer)}}class Mm{async initialize(t,i){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(i),this.remoteStore=this.createRemoteStore(i),this.eventManager=this.createEventManager(i),this.syncEngine=this.createSyncEngine(i,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>n_(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=lj.bind(null,this.syncEngine),await FC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new qC})()}createDatastore(t){const i=rd(t.databaseInfo.databaseId),a=(function(u){return new AC(u)})(t.databaseInfo);return(function(u,d,m,p){return new jC(u,d,m,p)})(t.authCredentials,t.appCheckCredentials,a,i)}createRemoteStore(t){return(function(a,o,u,d,m){return new NC(a,o,u,d,m)})(this.localStore,this.datastore,t.asyncQueue,(i=>n_(this.syncEngine,i,0)),(function(){return Xv.v()?new Xv:new EC})())}createSyncEngine(t,i){return(function(o,u,d,m,p,g,v){const E=new WC(o,u,d,m,p,g);return v&&(E.gu=!0),E})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,i)}async terminate(){await(async function(i){const a=It(i);pt(Za,"RemoteStore shutting down."),a.Ea.add(5),await vu(a),a.Aa.shutdown(),a.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Mm.provider={build:()=>new Mm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class dE{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):or("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,i){setTimeout((()=>{this.muted||t(i)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa="FirestoreClient";class dj{constructor(t,i,a,o,u){this.authCredentials=t,this.appCheckCredentials=i,this.asyncQueue=a,this.databaseInfo=o,this.user=sn.UNAUTHENTICATED,this.clientId=pg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(a,(async d=>{pt(aa,"Received user=",d.uid),await this.authCredentialListener(d),this.user=d})),this.appCheckCredentials.start(a,(d=>(pt(aa,"Received new app check token=",d),this.appCheckCredentialListener(d,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ir;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(i){const a=Og(i,"Failed to shutdown persistence");t.reject(a)}})),t.promise}}async function Pp(n,t){n.asyncQueue.verifyOperationInProgress(),pt(aa,"Initializing OfflineComponentProvider");const i=n.configuration;await t.initialize(i);let a=i.initialUser;n.setCredentialChangeListener((async o=>{a.isEqual(o)||(await qw(t.localStore,o),a=o)})),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t}async function r_(n,t){n.asyncQueue.verifyOperationInProgress();const i=await fj(n);pt(aa,"Initializing OnlineComponentProvider"),await t.initialize(i,n.configuration),n.setCredentialChangeListener((a=>Zv(t.remoteStore,a))),n.setAppCheckTokenChangeListener(((a,o)=>Zv(t.remoteStore,o))),n._onlineComponents=t}async function fj(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){pt(aa,"Using user provided OfflineComponentProvider");try{await Pp(n,n._uninitializedComponentsProvider._offline)}catch(t){const i=t;if(!(function(o){return o.name==="FirebaseError"?o.code===it.FAILED_PRECONDITION||o.code===it.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(i))throw i;co("Error using user provided cache. Falling back to memory cache: "+i),await Pp(n,new kh)}}else pt(aa,"Using default OfflineComponentProvider"),await Pp(n,new hj(void 0));return n._offlineComponents}async function fE(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(pt(aa,"Using user provided OnlineComponentProvider"),await r_(n,n._uninitializedComponentsProvider._online)):(pt(aa,"Using default OnlineComponentProvider"),await r_(n,new Mm))),n._onlineComponents}function pj(n){return fE(n).then((t=>t.syncEngine))}async function pE(n){const t=await fE(n),i=t.eventManager;return i.onListen=ZC.bind(null,t.syncEngine),i.onUnlisten=ej.bind(null,t.syncEngine),i.onFirstRemoteStoreListen=JC.bind(null,t.syncEngine),i.onLastRemoteStoreUnlisten=nj.bind(null,t.syncEngine),i}function mj(n,t,i={}){const a=new ir;return n.asyncQueue.enqueueAndForget((async()=>(function(u,d,m,p,g){const v=new dE({next:S=>{v.Nu(),d.enqueueAndForget((()=>nE(u,E)));const R=S.docs.has(m);!R&&S.fromCache?g.reject(new ft(it.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&S.fromCache&&p&&p.source==="server"?g.reject(new ft(it.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(S)},error:S=>g.reject(S)}),E=new iE(_g(m.path),v,{includeMetadataChanges:!0,qa:!0});return eE(u,E)})(await pE(n),n.asyncQueue,t,i,a))),a.promise}function gj(n,t,i={}){const a=new ir;return n.asyncQueue.enqueueAndForget((async()=>(function(u,d,m,p,g){const v=new dE({next:S=>{v.Nu(),d.enqueueAndForget((()=>nE(u,E))),S.fromCache&&p.source==="server"?g.reject(new ft(it.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(S)},error:S=>g.reject(S)}),E=new iE(m,v,{includeMetadataChanges:!0,qa:!0});return eE(u,E)})(await pE(n),n.asyncQueue,t,i,a))),a.promise}/**
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
 */function mE(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE="firestore.googleapis.com",s_=!0;class o_{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new ft(it.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=gE,this.ssl=s_}else this.host=t.host,this.ssl=t.ssl??s_;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Fw;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Y3)throw new ft(it.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}NI("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=mE(t.experimentalLongPollingOptions??{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new ft(it.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new ft(it.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new ft(it.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(a,o){return a.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class od{constructor(t,i,a,o){this._authCredentials=t,this._appCheckCredentials=i,this._databaseId=a,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new o_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ft(it.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new ft(it.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new o_(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(a){if(!a)return new EI;switch(a.type){case"firstParty":return new AI(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new ft(it.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(i){const a=a_.get(i);a&&(pt("ComponentProvider","Removing Datastore"),a_.delete(i),a.terminate())})(this),Promise.resolve()}}function yj(n,t,i,a={}){n=lr(n,od);const o=cg(t),u=n._getSettings(),d={...u,emulatorOptions:n._getEmulatorOptions()},m=`${t}:${i}`;o&&(QR(`https://${m}`),JR("Firestore",!0)),u.host!==gE&&u.host!==m&&co("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...u,host:m,ssl:o,emulatorOptions:a};if(!Ah(p,d)&&(n._setSettings(p),a.mockUserToken)){let g,v;if(typeof a.mockUserToken=="string")g=a.mockUserToken,v=sn.MOCK_USER;else{g=XR(a.mockUserToken,n._app?.options.projectId);const E=a.mockUserToken.sub||a.mockUserToken.user_id;if(!E)throw new ft(it.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new sn(E)}n._authCredentials=new bI(new J2(g,v))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(t,i,a){this.converter=i,this._query=a,this.type="query",this.firestore=t}withConverter(t){return new is(this.firestore,t,this._query)}}class Ae{constructor(t,i,a){this.converter=i,this._key=a,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ae(this.firestore,t,this._key)}toJSON(){return{type:Ae._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,i,a){if(gu(i,Ae._jsonSchema))return new Ae(t,a||null,new vt(ae.fromString(i.referencePath)))}}Ae._jsonSchemaVersion="firestore/documentReference/1.0",Ae._jsonSchema={type:Ne("string",Ae._jsonSchemaVersion),referencePath:Ne("string")};class Jr extends is{constructor(t,i,a){super(t,i,_g(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ae(this.firestore,null,new vt(t))}withConverter(t){return new Jr(this.firestore,t,this._path)}}function yh(n,t,...i){if(n=ar(n),tw("collection","path",t),n instanceof od){const a=ae.fromString(t,...i);return _v(a),new Jr(n,null,a)}{if(!(n instanceof Ae||n instanceof Jr))throw new ft(it.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=n._path.child(ae.fromString(t,...i));return _v(a),new Jr(n.firestore,null,a)}}function Xl(n,t,...i){if(n=ar(n),arguments.length===1&&(t=pg.newId()),tw("doc","path",t),n instanceof od){const a=ae.fromString(t,...i);return vv(a),new Ae(n,null,new vt(a))}{if(!(n instanceof Ae||n instanceof Jr))throw new ft(it.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=n._path.child(ae.fromString(t,...i));return vv(a),new Ae(n.firestore,n instanceof Jr?n.converter:null,new vt(a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_="AsyncQueue";class u_{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Gw(this,"async_queue_retry"),this._c=()=>{const a=kp();a&&pt(l_,"Visibility state changed to "+a.visibilityState),this.M_.w_()},this.ac=t;const i=kp();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const i=kp();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const i=new ir;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(i.resolve,i.reject),i.promise))).then((()=>i.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!So(t))throw t;pt(l_,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const i=this.ac.then((()=>(this.rc=!0,t().catch((a=>{throw this.nc=a,this.rc=!1,or("INTERNAL UNHANDLED ERROR: ",c_(a)),a})).then((a=>(this.rc=!1,a))))));return this.ac=i,i}enqueueAfterDelay(t,i,a){this.uc(),this.oc.indexOf(t)>-1&&(i=0);const o=Mg.createAndSchedule(this,t,i,a,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&bt(47125,{Pc:c_(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const i of this.tc)if(i.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((i,a)=>i.targetTimeMs-a.targetTimeMs));for(const i of this.tc)if(i.skipDelay(),t!=="all"&&i.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const i=this.tc.indexOf(t);this.tc.splice(i,1)}}function c_(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class wu extends od{constructor(t,i,a,o){super(t,i,a,o),this.type="firestore",this._queue=new u_,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new u_(t),this._firestoreClient=void 0,await t}}}function yE(n,t){const i=typeof n=="object"?n:uI(),a=typeof n=="string"?n:Ch,o=rI(i,"firestore").getImmediate({identifier:a});if(!o._initialized){const u=GR("firestore");u&&yj(o,...u)}return o}function Ug(n){if(n._terminated)throw new ft(it.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||xj(n),n._firestoreClient}function xj(n){const t=n._freezeSettings(),i=(function(o,u,d,m){return new FI(o,u,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,mE(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,t);n._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new dj(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&(function(o){const u=o?._online.build();return{_offline:o?._offline.build(u),_online:u}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ld{constructor(...t){for(let i=0;i<t.length;++i)if(t[i].length===0)throw new ft(it.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const vj=/^__.*__$/;class _j{constructor(t,i,a){this.data=t,this.fieldMask=i,this.fieldTransforms=a}toMutation(t,i){return this.fieldMask!==null?new oa(t,this.data,this.fieldMask,i,this.fieldTransforms):new yu(t,this.data,i,this.fieldTransforms)}}class xE{constructor(t,i,a){this.data=t,this.fieldMask=i,this.fieldTransforms=a}toMutation(t,i){return new oa(t,this.data,this.fieldMask,i,this.fieldTransforms)}}function vE(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw bt(40011,{Ac:n})}}class Lg{constructor(t,i,a,o,u,d){this.settings=t,this.databaseId=i,this.serializer=a,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=d||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new Lg({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const i=this.path?.child(t),a=this.Vc({path:i,fc:!1});return a.gc(t),a}yc(t){const i=this.path?.child(t),a=this.Vc({path:i,fc:!1});return a.Rc(),a}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return Ph(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((i=>t.isPrefixOf(i)))!==void 0||this.fieldTransforms.find((i=>t.isPrefixOf(i.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(vE(this.Ac)&&vj.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class wj{constructor(t,i,a){this.databaseId=t,this.ignoreUndefinedProperties=i,this.serializer=a||rd(t)}Cc(t,i,a,o=!1){return new Lg({Ac:t,methodName:i,Dc:a,path:Ze.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zg(n){const t=n._freezeSettings(),i=rd(n._databaseId);return new wj(n._databaseId,!!t.ignoreUndefinedProperties,i)}function Ej(n,t,i,a,o,u={}){const d=n.Cc(u.merge||u.mergeFields?2:0,t,i,o);Bg("Data must be an object, but it was:",d,a);const m=_E(a,d);let p,g;if(u.merge)p=new jn(d.fieldMask),g=d.fieldTransforms;else if(u.mergeFields){const v=[];for(const E of u.mergeFields){const S=Om(t,E,i);if(!d.contains(S))throw new ft(it.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);EE(v,S)||v.push(S)}p=new jn(v),g=d.fieldTransforms.filter((E=>p.covers(E.field)))}else p=null,g=d.fieldTransforms;return new _j(new vn(m),p,g)}class cd extends ud{_toFieldTransform(t){if(t.Ac!==2)throw t.Ac===1?t.Sc(`${this._methodName}() can only appear at the top level of your update data`):t.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof cd}}class $g extends ud{constructor(t,i){super(t),this.Fc=i}_toFieldTransform(t){const i=new du(t.serializer,Sw(t.serializer,this.Fc));return new p3(t.path,i)}isEqual(t){return t instanceof $g&&this.Fc===t.Fc}}function bj(n,t,i,a){const o=n.Cc(1,t,i);Bg("Data must be an object, but it was:",o,a);const u=[],d=vn.empty();sa(a,((p,g)=>{const v=Fg(t,p,i);g=ar(g);const E=o.yc(v);if(g instanceof cd)u.push(v);else{const S=Eu(g,E);S!=null&&(u.push(v),d.set(v,S))}}));const m=new jn(u);return new xE(d,m,o.fieldTransforms)}function Tj(n,t,i,a,o,u){const d=n.Cc(1,t,i),m=[Om(t,a,i)],p=[o];if(u.length%2!=0)throw new ft(it.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<u.length;S+=2)m.push(Om(t,u[S])),p.push(u[S+1]);const g=[],v=vn.empty();for(let S=m.length-1;S>=0;--S)if(!EE(g,m[S])){const R=m[S];let M=p[S];M=ar(M);const L=d.yc(R);if(M instanceof cd)g.push(R);else{const U=Eu(M,L);U!=null&&(g.push(R),v.set(R,U))}}const E=new jn(g);return new xE(v,E,d.fieldTransforms)}function Sj(n,t,i,a=!1){return Eu(i,n.Cc(a?4:3,t))}function Eu(n,t){if(wE(n=ar(n)))return Bg("Unsupported field value:",t,n),_E(n,t);if(n instanceof ud)return(function(a,o){if(!vE(o.Ac))throw o.Sc(`${a._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${a._methodName}() is not currently supported inside arrays`);const u=a._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(a,o){const u=[];let d=0;for(const m of a){let p=Eu(m,o.wc(d));p==null&&(p={nullValue:"NULL_VALUE"}),u.push(p),d++}return{arrayValue:{values:u}}})(n,t)}return(function(a,o){if((a=ar(a))===null)return{nullValue:"NULL_VALUE"};if(typeof a=="number")return Sw(o.serializer,a);if(typeof a=="boolean")return{booleanValue:a};if(typeof a=="string")return{stringValue:a};if(a instanceof Date){const u=ue.fromDate(a);return{timestampValue:Mh(o.serializer,u)}}if(a instanceof ue){const u=new ue(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:Mh(o.serializer,u)}}if(a instanceof Ri)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof Fn)return{bytesValue:kw(o.serializer,a._byteString)};if(a instanceof Ae){const u=o.databaseId,d=a.firestore._databaseId;if(!d.isEqual(u))throw o.Sc(`Document reference is for database ${d.projectId}/${d.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Tg(a.firestore._databaseId||o.databaseId,a._key.path)}}if(a instanceof Ii)return(function(d,m){return{mapValue:{fields:{[uw]:{stringValue:cw},[jh]:{arrayValue:{values:d.toArray().map((g=>{if(typeof g!="number")throw m.Sc("VectorValues must only contain numeric values.");return wg(m.serializer,g)}))}}}}}})(a,o);throw o.Sc(`Unsupported field value: ${Qh(a)}`)})(n,t)}function _E(n,t){const i={};return iw(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):sa(n,((a,o)=>{const u=Eu(o,t.mc(a));u!=null&&(i[a]=u)})),{mapValue:{fields:i}}}function wE(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ue||n instanceof Ri||n instanceof Fn||n instanceof Ae||n instanceof ud||n instanceof Ii)}function Bg(n,t,i){if(!wE(i)||!ew(i)){const a=Qh(i);throw a==="an object"?t.Sc(n+" a custom object"):t.Sc(n+" "+a)}}function Om(n,t,i){if((t=ar(t))instanceof ld)return t._internalPath;if(typeof t=="string")return Fg(n,t);throw Ph("Field path arguments must be of type string or ",n,!1,void 0,i)}const Aj=new RegExp("[~\\*/\\[\\]]");function Fg(n,t,i){if(t.search(Aj)>=0)throw Ph(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,i);try{return new ld(...t.split("."))._internalPath}catch{throw Ph(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,i)}}function Ph(n,t,i,a,o){const u=a&&!a.isEmpty(),d=o!==void 0;let m=`Function ${t}() called with invalid data`;i&&(m+=" (via `toFirestore()`)"),m+=". ";let p="";return(u||d)&&(p+=" (found",u&&(p+=` in field ${a}`),d&&(p+=` in document ${o}`),p+=")"),new ft(it.INVALID_ARGUMENT,m+n+p)}function EE(n,t){return n.some((i=>i.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(t,i,a,o,u){this._firestore=t,this._userDataWriter=i,this._key=a,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new Ae(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Rj(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const i=this._document.data.field(Kg("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i)}}}class Rj extends bE{data(){return super.data()}}function Kg(n,t){return typeof t=="string"?Fg(n,t):t instanceof ld?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ij(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ft(it.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class qg{}class TE extends qg{}function h_(n,t,...i){let a=[];t instanceof qg&&a.push(t),a=a.concat(i),(function(u){const d=u.filter((p=>p instanceof Gg)).length,m=u.filter((p=>p instanceof Hg)).length;if(d>1||d>0&&m>0)throw new ft(it.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(a);for(const o of a)n=o._apply(n);return n}class Hg extends TE{constructor(t,i,a){super(),this._field=t,this._op=i,this._value=a,this.type="where"}static _create(t,i,a){return new Hg(t,i,a)}_apply(t){const i=this._parse(t);return SE(t._query,i),new is(t.firestore,t.converter,bm(t._query,i))}_parse(t){const i=zg(t.firestore);return(function(u,d,m,p,g,v,E){let S;if(g.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new ft(it.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){p_(E,v);const M=[];for(const L of E)M.push(f_(p,u,L));S={arrayValue:{values:M}}}else S=f_(p,u,E)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||p_(E,v),S=Sj(m,d,E,v==="in"||v==="not-in");return De.create(g,v,S)})(t._query,"where",i,t.firestore._databaseId,this._field,this._op,this._value)}}class Gg extends qg{constructor(t,i){super(),this.type=t,this._queryConstraints=i}static _create(t,i){return new Gg(t,i)}_parse(t){const i=this._queryConstraints.map((a=>a._parse(t))).filter((a=>a.getFilters().length>0));return i.length===1?i[0]:ai.create(i,this._getOperator())}_apply(t){const i=this._parse(t);return i.getFilters().length===0?t:((function(o,u){let d=o;const m=u.getFlattenedFilters();for(const p of m)SE(d,p),d=bm(d,p)})(t._query,i),new is(t.firestore,t.converter,bm(t._query,i)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Yg extends TE{constructor(t,i){super(),this._field=t,this._direction=i,this.type="orderBy"}static _create(t,i){return new Yg(t,i)}_apply(t){const i=(function(o,u,d){if(o.startAt!==null)throw new ft(it.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ft(it.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new uu(u,d)})(t._query,this._field,this._direction);return new is(t.firestore,t.converter,(function(o,u){const d=o.explicitOrderBy.concat([u]);return new Ao(o.path,o.collectionGroup,d,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(t._query,i))}}function d_(n,t="asc"){const i=t,a=Kg("orderBy",n);return Yg._create(a,i)}function f_(n,t,i){if(typeof(i=ar(i))=="string"){if(i==="")throw new ft(it.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!xw(t)&&i.indexOf("/")!==-1)throw new ft(it.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${i}' contains a '/' character.`);const a=t.path.child(ae.fromString(i));if(!vt.isDocumentKey(a))throw new ft(it.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${a}' is not because it has an odd number of segments (${a.length}).`);return Iv(n,new vt(a))}if(i instanceof Ae)return Iv(n,i._key);throw new ft(it.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qh(i)}.`)}function p_(n,t){if(!Array.isArray(n)||n.length===0)throw new ft(it.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function SE(n,t){const i=(function(o,u){for(const d of o)for(const m of d.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(i!==null)throw i===t.op?new ft(it.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new ft(it.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${i.toString()}' filters.`)}class Cj{convertValue(t,i="none"){switch(ia(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Se(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,i);case 5:return t.stringValue;case 6:return this.convertBytes(na(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,i);case 11:return this.convertObject(t.mapValue,i);case 10:return this.convertVectorValue(t.mapValue);default:throw bt(62114,{value:t})}}convertObject(t,i){return this.convertObjectMap(t.fields,i)}convertObjectMap(t,i="none"){const a={};return sa(t,((o,u)=>{a[o]=this.convertValue(u,i)})),a}convertVectorValue(t){const i=t.fields?.[jh].arrayValue?.values?.map((a=>Se(a.doubleValue)));return new Ii(i)}convertGeoPoint(t){return new Ri(Se(t.latitude),Se(t.longitude))}convertArray(t,i){return(t.values||[]).map((a=>this.convertValue(a,i)))}convertServerTimestamp(t,i){switch(i){case"previous":const a=Zh(t);return a==null?null:this.convertValue(a,i);case"estimate":return this.convertTimestamp(su(t));default:return null}}convertTimestamp(t){const i=ea(t);return new ue(i.seconds,i.nanos)}convertDocumentKey(t,i){const a=ae.fromString(t);Yt(Bw(a),9688,{name:t});const o=new ou(a.get(1),a.get(3)),u=new vt(a.popFirst(5));return o.isEqual(i)||or(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${i.projectId}/${i.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jj(n,t,i){let a;return a=n?i&&(i.merge||i.mergeFields)?n.toFirestore(t,i):n.toFirestore(t):t,a}class Bl{constructor(t,i){this.hasPendingWrites=t,this.fromCache=i}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Xa extends bE{constructor(t,i,a,o,u,d){super(t,i,a,o,d),this._firestore=t,this._firestoreImpl=t,this.metadata=u}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const i=new xh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(i,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,i={}){if(this._document){const a=this._document.data.field(Kg("DocumentSnapshot.get",t));if(a!==null)return this._userDataWriter.convertValue(a,i.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ft(it.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,i={};return i.type=Xa._jsonSchemaVersion,i.bundle="",i.bundleSource="DocumentSnapshot",i.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?i:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),i.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),i)}}Xa._jsonSchemaVersion="firestore/documentSnapshot/1.0",Xa._jsonSchema={type:Ne("string",Xa._jsonSchemaVersion),bundleSource:Ne("string","DocumentSnapshot"),bundleName:Ne("string"),bundle:Ne("string")};class xh extends Xa{data(t={}){return super.data(t)}}class io{constructor(t,i,a,o){this._firestore=t,this._userDataWriter=i,this._snapshot=o,this.metadata=new Bl(o.hasPendingWrites,o.fromCache),this.query=a}get docs(){const t=[];return this.forEach((i=>t.push(i))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,i){this._snapshot.docs.forEach((a=>{t.call(i,new xh(this._firestore,this._userDataWriter,a.key,a,new Bl(this._snapshot.mutatedKeys.has(a.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const i=!!t.includeMetadataChanges;if(i&&this._snapshot.excludesMetadataChanges)throw new ft(it.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===i||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let d=0;return o._snapshot.docChanges.map((m=>{const p=new xh(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Bl(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:p,oldIndex:-1,newIndex:d++}}))}{let d=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const p=new xh(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Bl(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let g=-1,v=-1;return m.type!==0&&(g=d.indexOf(m.doc.key),d=d.delete(m.doc.key)),m.type!==1&&(d=d.add(m.doc),v=d.indexOf(m.doc.key)),{type:Dj(m.type),doc:p,oldIndex:g,newIndex:v}}))}})(this,i),this._cachedChangesIncludeMetadataChanges=i),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ft(it.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=io._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=pg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const i=[],a=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(i.push(u._document),a.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Dj(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return bt(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(n){n=lr(n,Ae);const t=lr(n.firestore,wu);return mj(Ug(t),n._key).then((i=>Nj(t,n,i)))}io._jsonSchemaVersion="firestore/querySnapshot/1.0",io._jsonSchema={type:Ne("string",io._jsonSchemaVersion),bundleSource:Ne("string","QuerySnapshot"),bundleName:Ne("string"),bundle:Ne("string")};class AE extends Cj{constructor(t){super(),this.firestore=t}convertBytes(t){return new Fn(t)}convertReference(t){const i=this.convertDocumentKey(t,this.firestore._databaseId);return new Ae(this.firestore,null,i)}}function Vm(n){n=lr(n,is);const t=lr(n.firestore,wu),i=Ug(t),a=new AE(t);return Ij(n._query),gj(i,n._query).then((o=>new io(t,a,n,o)))}function Qg(n,t,i){n=lr(n,Ae);const a=lr(n.firestore,wu),o=jj(n.converter,t,i);return RE(a,[Ej(zg(a),"setDoc",n._key,o,n.converter!==null,i).toMutation(n._key,Si.none())])}function Uh(n,t,i,...a){n=lr(n,Ae);const o=lr(n.firestore,wu),u=zg(o);let d;return d=typeof(t=ar(t))=="string"||t instanceof ld?Tj(u,"updateDoc",n._key,t,i,a):bj(u,"updateDoc",n._key,t),RE(o,[d.toMutation(n._key,Si.exists(!0))])}function RE(n,t){return(function(a,o){const u=new ir;return a.asyncQueue.enqueueAndForget((async()=>ij(await pj(a),o,u))),u.promise})(Ug(n),t)}function Nj(n,t,i){const a=i.docs.get(t._key),o=new AE(n);return new Xa(n,o,t._key,a,new Bl(i.hasPendingWrites,i.fromCache),t.converter)}function Lh(n){return new $g("increment",n)}(function(t,i=!0){(function(o){bo=o})(lI),Rh(new nu("firestore",((a,{instanceIdentifier:o,options:u})=>{const d=a.getProvider("app").getImmediate(),m=new wu(new TI(a.getProvider("auth-internal")),new RI(d,a.getProvider("app-check-internal")),(function(g,v){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ft(it.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ou(g.options.projectId,v)})(d,o),d);return u={useFetchStreams:i,...u},m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),eo(mv,gv,t),eo(mv,gv,"esm2020")})();const Mj={apiKey:"AIzaSyAEFzPwTADLzuxWuyk889Jz1cHPsEgLOkQ",authDomain:"tu2025grad.firebaseapp.com",projectId:"tu2025grad",storageBucket:"tu2025grad.firebasestorage.app",messagingSenderId:"553768466639",appId:"1:553768466639:web:7c16f5d6432da7ebc05fba"},Oj=cv().length?cv()[0]:dg(Mj),Wl=yE(Oj),m_=40;function IE(n){if(!n)return n;const t="/";if(/^https?:\/\//i.test(n))return n;const i=n.replace(/^\.\.\//,"").replace(/^\//,"");return t+i}const Vj=T.div`
  position: relative; background: #fff;
`,kj=T.div`
  padding-left: ${m_}px; padding-right: ${m_}px; display: flex; flex-direction: column;
  @media (max-width: 640px) {
    padding-left: 16px;
    padding-right: 16px;  
 }
`;function Pj({children:n}){return y.jsx(Vj,{children:y.jsx(kj,{children:n})})}const Uj=T.div`
  position: relative;
  min-height: calc(100vh - 200px);
`,Lj=T.div`
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
`,zj=T.div`
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
`,g_=eu,CE=og,$j={"All Projects":null,"AI & Robot":"c0","Edu & Kids":"c1","Health Care":"c2","IT & Tech":"c3",Living:"c4",Mobility:"c5"};function km(n){return n.members.map(t=>{const i=CE.find(a=>a.num===t);return i?i.nameKor:""}).filter(Boolean).join(", ")}function Bj(n){return n.members.map(t=>{const i=CE.find(a=>a.num===t);return i?IE(i.imgUrl):""}).filter(Boolean)}function Fj({list:n,statsById:t}){const i={c0:"A",c1:"E",c2:"H",c3:"I",c4:"L",c5:"M"};return y.jsx(Lj,{children:n.map((a,o)=>{const u=km(a),d=Bj(a),m=String(a.projectNum+1).padStart(3,"0"),g=`${i[a.category]||"A"}${m}`,v=a.projectNum??a.num;return y.jsx(lg,{titleKor:a.titleKor,titleEng:a.titleEng,src:IE(`/projects/${a.projectNum}/thumb.jpg`||`/projects/${a.projectNum}/thumb.png`),nameKor:u,profileImgs:d,docId:v,href:`/work/${g}`,like:t[String(v)]?.like??0,view:t[String(v)]?.view??0},o)})})}function Kj(){const[n,t]=St.useState("All Projects"),[i,a]=St.useState("이름순"),[o,u]=St.useState({});St.useEffect(()=>{let p=!0;return(async()=>{try{const g=await Vm(yh(Wl,"works"));if(!p)return;const v={};g.forEach(E=>{const S=E.data()||{};v[String(E.id)]={like:typeof S.like=="number"?S.like:0,view:typeof S.view=="number"?S.view:0}}),u(v)}catch(g){console.error("Failed to load works stats:",g)}})(),()=>{p=!1}},[]);const d=St.useMemo(()=>{const p=$j[n]||null;return p?g_.filter(g=>g.category===p):g_},[n]),m=St.useMemo(()=>{const p=[...d];switch(i){case"이름순":p.sort((g,v)=>km(g).localeCompare(km(v),"ko"));break;case"좋아요순":p.sort((g,v)=>{const E=String(g.projectNum??g.num),S=String(v.projectNum??v.num),R=o[E]?.like??0;return(o[S]?.like??0)-R});break;case"조회수순":p.sort((g,v)=>{const E=String(g.projectNum??g.num),S=String(v.projectNum??v.num),R=o[E]?.view??0;return(o[S]?.view??0)-R});break;case"팀작우선":p.sort((g,v)=>(v.members.length>1)-(g.members.length>1));break;case"개인작우선":p.sort((g,v)=>(g.members.length>1)-(v.members.length>1));break}return p},[d,i,o]);return y.jsxs(Uj,{children:[y.jsx(zj,{children:"Projects"}),y.jsx(V2,{type:"project",onCategoryChange:t,onSortChange:a,sortLabel:i}),y.jsx(Pj,{children:y.jsx(Fj,{list:m,statsById:o})})]})}const qj=T.div(({height:n,from:t,to:i,position:a,z:o})=>({position:"absolute",left:0,right:0,[a]:-1,height:n,pointerEvents:"none",zIndex:o??0,background:`linear-gradient(180deg, ${t} 0%, ${i} 100%)`}));function jE({position:n="bottom",from:t,to:i,height:a=240,z:o=0,style:u}){return y.jsx(qj,{position:n,from:t,to:i,height:a,z:o,style:u})}const ro={heroToWhite:{from:"rgba(18,18,18,0)",to:"#FFFFFF",h:80},whiteToBlack:{from:"rgba(255,255,255,0)",to:"#121212",h:160}},Hj=T.section`
  position: relative; height: 100vh; min-height: 620px; overflow: hidden; background: #121212; z-index: 1;
  @media (max-width: 640px) {
    height: 100vh;
    min-height: 220px;
  }
`,Gj=T.div`
  position: absolute; inset: 0;
  /* Video container sits here */
`,Yj=T.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
`,Qj=T.video`
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
`,Xj=T.div`
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
`,Wj=T.video`
  width: 100%;
  height: 100%;
  display: block;
`,Zj=T.div`
  position: absolute;
  inset: 0;
  background-color: rgba(18, 18, 18, 0.2);
`,Jj=T.div`
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
`,y_=T.p`
  margin: 0; color: #FFFFFF; font-family: Pretendard, system-ui; font-size: 16px; line-height: 19.2px;
  @media (max-width: 640px) {
    font-size: 13px;
    line-height: 1.4;
  }
`,tD=T.p`
  margin: 0; color: #FFFFFF; font-family: Pretendard, system-ui; font-weight: 600; font-size: 24px; line-height: 27.6px;
  @media (max-width: 640px) {
    font-size: 17px;
    line-height: 1.3;
  }
`,eD=T.button`
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
`;function nD(){const[n,t]=St.useState(!1),i=St.useRef(null),a="/",o=$h();St.useEffect(()=>()=>{i.current&&clearTimeout(i.current)},[]);const u=()=>{const m=`${typeof window<"u"&&window.innerWidth<640?"projects":"showroom"}`;o(m)};return y.jsxs(Hj,{"aria-label":"Hero",children:[y.jsxs(Gj,{children:[y.jsx(Yj,{"aria-hidden":!0,children:y.jsx(Qj,{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata",children:y.jsx("source",{src:`${a}video/hero11.mp4`,type:"video/mp4"})})}),y.jsx(Xj,{"aria-label":"Hero background video",children:y.jsxs(Wj,{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata",onLoadedData:()=>{i.current&&clearTimeout(i.current),i.current=setTimeout(()=>t(!0),13900)},children:[y.jsx("source",{src:`${a}video/hero11.mp4`,type:"video/mp4"}),"Your browser does not support the video tag."]})}),y.jsx(Zj,{})]}),y.jsxs(Jj,{$visible:n,children:[y.jsxs(y_,{children:["25. 10. 24. FRI~26. SUN",y.jsx("br",{}),"Hongdae Art Center B2"]}),y.jsx(y_,{children:"Department of Design Engineering"}),y.jsxs(tD,{children:["Tech University of Korea",y.jsx("br",{}),"20th Grad Exhibition"]})]}),y.jsxs(eD,{type:"button",onClick:u,"aria-label":"View More",children:[y.jsx("span",{className:"desktop",children:"View More"}),y.jsx("span",{className:"mobile",children:"View Work"})]}),y.jsx(jE,{position:"bottom",from:ro.heroToWhite.from,to:ro.heroToWhite.to,height:ro.heroToWhite.h,z:0})]})}T.section`
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  padding-top: 120px;
  padding-bottom: 160px;
  @media (max-width: 640px) {
    padding-top: 32px;
    padding-bottom: 48px;
  }
`;T.div`
  width: 100%;
  max-width: calc(100vw - 80px);
  margin: 0 auto;
  @media (max-width: 640px) {
    max-width: 100%;
    padding: 0 12px;
    box-sizing: border-box;
  }
`;T.div`
  display: flex;
  gap: 94px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 640px) {
    gap: 32px;
  }
`;T.div`
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
`;T.h2`
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
`;T.div`
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
`;T.div`
  display: flex;
  width: 285px;
  height: 285px;
  position: relative;
  overflow: hidden;
  background: #FFFFFF;
  @media (max-width: 640px) {
    display: none;
  }
`;T.div`
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
`;const iD='Pretendard, system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial, sans-serif',rD=T.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${n=>n.$size==="sm"?40:52}px;
  padding: 0 ${n=>n.$size==="sm"?16:24}px;
  border: 1px solid #FFFFFF;
  color: #FFFFFF;
  background: transparent;
  font-family: ${iD};
  font-weight: 700;
  font-size: ${n=>n.$size==="sm"?13:14}px;
  letter-spacing: 0.2px;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  width: ${n=>n.$full?"100%":"auto"};
  transition: background .15s ease, color .15s ease, border-color .15s ease;
`,aD=T.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-left: 8px;
  border-top: 1px solid #FFFFFF;
  border-right: 1px solid #FFFFFF;
  transform: rotate(45deg);
`;function Xg({as:n="button",href:t,label:i="View More",size:a="md",fullWidth:o=!1,showArrow:u,defaultShowArrow:d=!0,onArrowChange:m,onClick:p,style:g}){const v=typeof u=="boolean",[E,S]=St.useState(d),R=v?u:E;St.useCallback(()=>{if(v){m&&m(!u);return}S(L=>{const U=!L;return m&&m(U),U})},[v,m,u]);const M={onClick:p,style:g,"data-arrow-visible":R,"data-toggle-arrow-fn":void 0,$size:a,$full:o,as:n,href:t,type:n==="button"?"button":void 0};return y.jsxs(rD,{...M,target:"_blank",rel:"noopener noreferrer",children:[i,R?y.jsx(aD,{"aria-hidden":!0}):null]})}const Ue="/",sD=T.section`
  position: relative;
  padding: 120px 40px;
  background: #121212;
  z-index: 1;
`,oD=T.div`
  width: 100%;
  /* max-width: 1840px; */
  margin: 0 auto;
`,lD=T.div`
  position: relative;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  background: #171717;
`,Ys=T.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,kl=T.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;T.div`
  position: absolute;
  left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  width: 70px; height: 70px;
  border-radius: 35px;
  background: rgba(255,255,255,0.6);
  backdrop-filter: blur(5px);
`;T.div`
  position: absolute; left: 27px; top: 23px;
  width: 0; height: 0;
  border-left: 16px solid #000;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
`;const uD=T.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  @media (max-width: 640px) {
    gap: 10px;
    margin-top: 12px;
    display: none; /* hide desktop grid on small screens */
  }
`,Up=T.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  @media (max-width: 640px) {
    gap: 8px;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`,tr=T.div`
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
`,Lp=T.div`
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
`,cD=T.div`
  display: none;
  @media (max-width: 640px) {
    display: block;
    padding: 20px; /* edge-to-edge on mobile */
    box-sizing: border-box;
  }
`,hD=T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,dD=T.div`
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  background: #151515;
  aspect-ratio: 2 / 1;
  max-height: 300px;
`,fD=T.div`
  display: flex;
  gap: 8px;
`,x_=T.div`
  flex: 1; /* share available width evenly */
  border-radius: 4px;
  overflow: hidden;
  background: #151515;
  aspect-ratio: 1 / 1;
  max-height: 200px;
`;function pD(){const n=[{src:`${Ue}video/sub1.mp4`,cap:""},{src:`${Ue}sq5.png`,cap:""},{src:`${Ue}sq2.png`,cap:""},{src:`${Ue}video/category.mp4`,cap:""},{src:`${Ue}sq6.png`,cap:""},{src:`${Ue}sq4.png`,cap:""},{src:`${Ue}video/category.mp4`,cap:""},{src:`${Ue}sq3.png`,cap:""},{src:`${Ue}sq1.png`,cap:""}],t="calc((100vw - 140px) / 4)",i="calc((100vw - 100px) / 2)";return y.jsx(sD,{"aria-label":"Gallery",children:y.jsxs(oD,{children:[y.jsx(lD,{children:y.jsx(kl,{src:`${Ue}video/main.mp4`,alt:"featured",muted:!0,autoPlay:!0,playsInline:!0,loop:!0})}),y.jsxs(uD,{className:"gallery-desktop",children:[y.jsxs(Up,{children:[y.jsx(tr,{$w:i,$h:t,children:y.jsx(kl,{src:`${Ue}video/sub1.mp4`,alt:"",muted:!0,autoPlay:!0,playsInline:!0,loop:!0})}),y.jsx(tr,{$w:t,$h:t,children:y.jsx(Ys,{src:`${Ue}sq5.png`,alt:""})}),y.jsx(tr,{$w:t,$h:t,children:y.jsx(Ys,{src:`${Ue}sq6.png`,alt:""})})]}),y.jsxs(Up,{children:[y.jsx(tr,{$w:t,$h:t,children:y.jsx(Ys,{src:`${Ue}sq4.png`,alt:""})}),y.jsx(tr,{$w:t,$h:t,children:y.jsx(Ys,{src:`${Ue}sq2.png`,alt:""})}),y.jsx(tr,{$w:i,$h:t,children:y.jsx(kl,{src:`${Ue}video/category.mp4`,alt:"",muted:!0,autoPlay:!0,playsInline:!0,loop:!0})})]}),y.jsxs(Up,{children:[y.jsx(tr,{$w:i,$h:t,children:y.jsx(kl,{src:`${Ue}video/category.mp4`,alt:"",muted:!0,autoPlay:!0,playsInline:!0,loop:!0})}),y.jsx(tr,{$w:t,$h:t,children:y.jsx(Ys,{src:`${Ue}sq3.png`,alt:""})}),y.jsx(tr,{$w:t,$h:t,children:y.jsx(Ys,{src:`${Ue}sq1.png`,alt:""})})]})]}),y.jsx(cD,{children:y.jsx("div",{style:{marginTop:12,display:"flex",flexDirection:"column",gap:12},children:Array.from({length:3}).map((a,o)=>{const u=o*3,d=n[u],m=n[u+1],p=n[u+2];return y.jsxs(hD,{children:[d&&y.jsxs(dD,{children:[y.jsx(kl,{src:d.src,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),d.cap&&y.jsx(Lp,{style:{opacity:1},children:d.cap})]}),y.jsxs(fD,{children:[m&&y.jsxs(x_,{children:[y.jsx("img",{src:m.src,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),m.cap&&y.jsx(Lp,{style:{opacity:1},children:m.cap})]}),p&&y.jsxs(x_,{children:[y.jsx("img",{src:p.src,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),p.cap&&y.jsx(Lp,{style:{opacity:1},children:p.cap})]})]})]},o)})})}),y.jsx("div",{style:{paddingTop:40,display:"flex",justifyContent:"center"},children:y.jsx(Xg,{label:"View More"})})]})})}const mD=T.section`
  position: relative;
  height: ${n=>`${n.$durationVh}vh`};
`,gD=T.div`
  position: sticky; top: 0; height: 100vh; overflow: hidden;
  display: ${n=>n.$center?"flex":"block"};
  align-items: ${n=>n.$center?"center":"stretch"};
  justify-content: ${n=>n.$center?"center":"unset"};
`,yD=T.div`
  width: 100%;
  ${n=>n.$offset?`transform: translateY(${n.$offset}px);`:""}
`;function xD({durationVh:n=300,center:t=!0,centerOffsetPx:i=0,children:a,style:o}){const u=St.useRef(null),[d,m]=St.useState(0);return St.useEffect(()=>{const p=u.current;if(!p)return;let g=0,v=!0;const E=()=>{if(!v)return;const S=p.getBoundingClientRect(),R=window.innerHeight,M=n/100*R-R,L=Math.min(Math.max(-S.top,0),M);m(M>0?L/M:0),g=requestAnimationFrame(E)};return g=requestAnimationFrame(E),()=>{v=!1,cancelAnimationFrame(g)}},[n]),y.jsx(mD,{ref:u,style:o,$durationVh:n,children:y.jsx(gD,{$center:t,children:y.jsx(yD,{$offset:i,children:typeof a=="function"?a(d):a})})})}const v_=[{id:"w1",index:"A010",artistKr:"송지원, 허지유",dept:"Industrial Design Engineering",titleSmall:"한국산업기술진흥원장상 수상",titleStrong:"BIND",rightMeta1:"Precision and efficency beyond human limits.",rightMeta2:"BIND, 흩어진 시간을 하나로 잇다.",image:"1127032149"},{id:"w2",index:"A017",artistKr:"이채연",dept:"Media Design Engineering",titleSmall:"총동문회장상 수상",titleStrong:"MUSE",rightMeta1:"디자인 논문을 쉽게 활용할 수 있도록 돕는",rightMeta2:"AI 인사이트 제공 서비스",image:"1127403683"},{id:"w3",index:"A011",artistKr:"정혜원, 신주혜",dept:"Industrial Design Engineering",titleSmall:"한국공학대학교총장상 수상",titleStrong:"ENDY",rightMeta1:"감정을 이해하고 반응하는 학습 파트너,",rightMeta2:"자기주도학습의 새로운 동반자 ENDY",image:"1126889031"}],vD=T.div`
  position: relative;
  background: #121212;
  @media (max-width: 640px) {
    background: #121212;
    padding: 0 0 24px 0;
  }
`,_D=T.div`
  display: none;
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100vw;
    padding: 0 0 24px 0;
    box-sizing: border-box;
  }
`,wD=T(ts)`
  background: #222;
  border-radius: 10px;
  overflow: hidden;
  width: 92vw;
  margin: 12px auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;T.img`
  width: 100%;
  height: auto;
  display: block;
`;const ED=T.div`
  padding: 12px 14px 16px 14px;
  color: #fff;
  font-family: Pretendard, system-ui;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,bD=T.div`
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
`;T.div`
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
`;const TD=T.div`
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
`,SD=T.div`
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
`,AD=T.div`
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
`,RD=T.div`
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
`,ID=T.div`
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
`,CD=T.div`
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
`,jD=T.small`
  display: block; color: #D9D9D9;
  font-family: Pretendard, system-ui; font-size: 24px; font-weight: 400;
  @media (max-width: 1800px) {
    font-size: 18px;
  }
  @media (max-width: 640px) {
    font-size: 12px;
  }
`,DD=T.strong`
  display: block; color: #FAFAFA;
  font-family: Pretendard, system-ui; font-size: 42px; font-weight: 700;
  @media (max-width: 1800px) {
    font-size: 32px;
  }
  @media (max-width: 640px) {
    font-size: 18px;
  }
`,ND=T.iframe`
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
`,MD=T.iframe`
  width: 100%;
  height: auto;
  min-height: 200px;
  border: none;
  display: block;
  margin-top: 16px;
`,OD=(n,t=0,i=1)=>Math.max(t,Math.min(i,n)),Qs=(n,t,i)=>n+(t-n)*i,VD=n=>n<.5?2*n*n:1-Math.pow(-2*n+2,2)/2;function kD({work:n,progress:t,videoId:i}){String(i||"").trim();const a=`https://player.vimeo.com/video/${n.image}?muted=1&autoplay=1&loop=1&badge=0&controls=0&autopause=0&title=0&byline=0&portrait=0&app_id=58479`,o=VD(OD(t,0,1)),u=Qs(0,-120,o),d=Qs(0,-360,o),m=Qs(0,-280,o),p=Qs(0,-220,o),g=Qs(0,-260,o),v=Qs(0,-180,o),E=.55,R=o<E?1:1-Math.max(0,Math.min(1,(o-E)/(.9-E))),M={transform:`translate3d(0, ${u}px, 0)`,willChange:"transform"},L=q=>({transform:`translate3d(0, ${q}px, 0)`,opacity:R,willChange:"transform, opacity"}),U={transform:`translate3d(0, ${v}px, 0)`,opacity:R,willChange:"transform, opacity"};return y.jsx(y.Fragment,{children:y.jsx(vD,{children:y.jsxs(bD,{children:[y.jsx(TD,{style:M,children:y.jsx(ND,{src:a,frameBorder:"0"})}),y.jsx(SD,{style:L(d),children:n.artistKr}),y.jsx(AD,{style:L(m),children:n.dept}),y.jsx(RD,{style:L(p),children:n.rightMeta1}),y.jsx(ID,{style:L(g),children:n.rightMeta2}),y.jsxs(CD,{style:U,children:[y.jsx(jD,{children:n.titleSmall}),y.jsx(DD,{children:n.titleStrong})]})]})})})}function PD(){return y.jsxs(y.Fragment,{children:[y.jsx("style",{children:`
        @media (max-width: 640px) {
          .expo-works-desktop { display: none !important; }
        }
        @media (min-width: 641px) {
          .expo-works-mobile { display: none !important; }
        }
      `}),y.jsx("div",{className:"expo-works-desktop",children:v_.slice(0,3).map(n=>y.jsx(xD,{durationVh:320,center:!0,centerOffsetPx:-40,children:t=>y.jsx(kD,{work:n,progress:t})},n.id))}),y.jsx(_D,{className:"expo-works-mobile",children:v_.map(n=>y.jsxs(wD,{to:`work/${n.index}`,children:[y.jsx(MD,{src:`https://player.vimeo.com/video/${n.image}?badge=0&controls=0&autopause=0&title=0&byline=0&portrait=0&app_id=58479`}),y.jsxs(ED,{children:[y.jsx("div",{style:{fontWeight:700,fontSize:16},children:n.titleStrong}),y.jsxs("div",{style:{fontSize:13,color:"#D9D9D9"},children:[n.artistKr," | ",n.dept]}),y.jsx("div",{style:{fontSize:12,color:"#A1A1A1",marginTop:2},children:n.rightMeta1}),y.jsx("div",{style:{fontSize:12,color:"#A1A1A1"},children:n.rightMeta2})]})]},n.id))})]})}const UD="/",LD=T.div`
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
`,zD=T.div`
  position: relative; 
  height: auto;
`,$D=T.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0px;
  @media (max-width: 640px) {
    gap: 16px;
}
`,BD=T.div`
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
`,FD=T.div`
  display: flex; align-items: center; height: 49px; padding-bottom: 21px; color: #FFFFFF; font-family: Pretendard, system-ui; font-size: 40px; font-weight: 700; line-height: 38.4px;
  @media (max-width: 640px) {
    font-size: 24px; height: 29px; padding-bottom: 12px;
}
`,KD=T.div`
  display: flex; flex-direction: column; align-items: center; gap: 60px; margin-top: 20px;
  @media (max-width: 640px) {
    margin-top: 60px;
    gap: 40px;
}
`,qD=T.div`
  width: 272px; height: 272px; background: #121212; overflow: hidden; display: flex; align-items: center; justify-content: center;
  @media (max-width: 640px) {
    width: 160px; height: 160px;
}
`;function HD(){return y.jsx(LD,{"aria-labelledby":"insta-title",children:y.jsx(zD,{children:y.jsxs($D,{children:[y.jsx(BD,{children:y.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#FFFFFF",children:[y.jsx("path",{d:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2A3.2 3.2 0 1 1 12 8a3.2 3.2 0 0 1 0 6.4z"}),y.jsx("circle",{cx:"17.5",cy:"6.5",r:"1.2"}),y.jsx("path",{d:"M17.8 2H6.2A4.2 4.2 0 0 0 2 6.2v11.6A4.2 4.2 0 0 0 6.2 22h11.6A4.2 4.2 0 0 0 22 17.8V6.2A4.2 4.2 0 0 0 17.8 2zm2.6 15.8a2.6 2.6 0 0 1-2.6 2.6H6.2a2.6 2.6 0 0 1-2.6-2.6V6.2A2.6 2.6 0 0 1 6.2 3.6h11.6a2.6 2.6 0 0 1 2.6 2.6v11.6z"})]})}),y.jsx(FD,{id:"insta-title",children:"@tukd_grad"}),y.jsxs(KD,{children:[y.jsx(qD,{children:y.jsx("img",{src:`${UD}insta-qr.png`,alt:"Instagram preview"})}),y.jsx(Xg,{as:"a",href:"https://www.instagram.com/tukd_grad?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",label:"View Instagram",size:"sm"})]})]})})})}const Tu=`'Pretendard', system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial, sans-serif`,__=350,GD=T.section`
  padding: 120px 0 0 0; background: #121212;
`,YD=T.div`
  position: relative; background: #121212;
`,QD=T.div`
  /* padding-left: ${__}px; padding-right: ${__}px; */
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
`,XD=({children:n})=>y.jsx(YD,{children:y.jsx(QD,{children:n})}),WD=T.div`
  width: 289px; height: 45px; display: flex; align-items: flex-end;
`,ZD=T.div`
  font-family: ${Tu}; font-size: 20px; font-weight: 700; line-height: 22.4px; color: #FFFFFF;

  @media (max-width: 640px) {
    font-size: 16px;
}
`;function JD({title:n}){return y.jsx(WD,{children:y.jsx(ZD,{children:n})})}const t5=T.div`
  border-bottom: ${n=>n.$last?"none":"1px rgba(255,255,255,0.12) solid"};
  display: flex; gap: 20px; align-items: flex-start;
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 20px;
    padding: 0;
    width: 100%;
  }
`,e5=T.div`
  padding-top: 22px; padding-bottom: 40px;
  border-bottom: ${n=>n.$divider?"1px rgba(255,255,255,0.12) solid":"none"};
  display: flex; gap: 20px; align-items: flex-start;
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 8px;
    padding: 16px 0 20px 0;
  }
`,n5=T.div`
  width: 135px;
  @media (max-width: 640px) {
    width: 100%;
  }
`,i5=T.div`
  font-family: ${Tu}; font-size: 16px; font-weight: 700; line-height: 22.4px; color: #FFFFFF;
  @media (max-width: 640px) {
    font-size: 14px;
}
`,r5=T.div`
  width: 700px; display: flex; flex-direction: column; gap: 10px;
  @media (max-width: 640px) {
    width: 100%;
    gap: 6px;
  }
`;function Gr({k:n,children:t,divider:i=!0}){return y.jsxs(e5,{$divider:i,children:[y.jsx(n5,{children:y.jsx(i5,{children:n})}),y.jsx(r5,{children:t})]})}const a5=T.div`
  width: 900px; display: flex; flex-direction: column;
  @media (max-width: 640px) {
    width: 100%;
    padding: 0;
    box-sizing: border-box;
  }
`;function w_({title:n,children:t,last:i=!1}){return y.jsxs(t5,{$last:i,children:[y.jsx(JD,{title:n}),y.jsx(a5,{children:t})]})}const s5=T.div`
  width: 900px; padding-top: 22px; padding-bottom: 40px; border-bottom: 1px rgba(255,255,255,0.12) solid;
  @media (max-width: 640px) {
    width: 100%;
    padding: 12px 0px 20px 0px;
    box-sizing: border-box;
  }
`,o5=T.div`
  font-family: ${Tu}; font-size: 16px; font-weight: 700; color: #FFFFFF;
  @media (max-width: 640px) {
    font-size: 14px;
}
`,Ht=T.div`
  font-family: ${Tu}; font-size: 16px; font-weight: 300; color: #CCCCCC; letter-spacing: 0px;
  @media (max-width: 640px) {
    font-size: 13px;
}
`,eh=T(Ht)`
  font-weight: 500;
`,l5=T(Ht)`
  font-size: 13px;
`;T(Ht)`
  margin-top: 24px;
`;const u5=T.a`
  font-family: ${Tu}; font-size: 16px; font-weight: 300; color: #CCCCCC; text-decoration: underline;
  @media (max-width: 640px) {
    font-size: 13px;
}
`;function c5(){return y.jsx(GD,{"aria-label":"Venue & Access",children:y.jsxs(XD,{children:[y.jsxs(w_,{title:"Venew Details",children:[y.jsx(s5,{children:y.jsx(o5,{children:"잔향 : 기억의 향기"})}),y.jsx(Gr,{k:"Term",children:y.jsx(Ht,{children:"2025. 10. 24. FRI - 10. 26. SUN"})}),y.jsxs(Gr,{k:"Hours",children:[y.jsx(Ht,{children:"10.24.FRI   13:00 ~ 17:30 (OPENING 16:00~)"}),y.jsx(Ht,{children:"10.25.SAT ~ 10.26.SUN    10:00 ~ 17:30"})]}),y.jsxs(Gr,{k:"Schedule",children:[y.jsx(eh,{children:"10.24.FRI"}),y.jsx(Ht,{children:"13:00    자유관람"}),y.jsx(Ht,{children:"15:00    졸업생 홈커밍 행사"}),y.jsx(Ht,{children:"16:00    개회식"}),y.jsx(Ht,{children:"16:20    졸업작품 우수작 시상"}),y.jsx(Ht,{children:"16:30    자유관람"}),y.jsxs(eh,{children:[y.jsx("br",{}),"10.25.SAT"]}),y.jsx(Ht,{children:"10:00    자유관람"}),y.jsx(Ht,{children:"13:00    취·창업 커리어 캠프"}),y.jsxs(eh,{children:[y.jsx("br",{}),"10.26.SUN"]}),y.jsx(Ht,{children:"10:00    자유관람"})]}),y.jsxs(Gr,{k:"Website",divider:!1,children:[y.jsx(Ht,{children:"Hongik Art Center"}),y.jsx(u5,{href:"https://artscenter.hongik.ac.kr/artcenter/index.do",target:"_blank",rel:"noreferrer",children:"https://artscenter.hongik.ac.kr/artcenter/index.do"})]})]}),y.jsxs(w_,{title:"Access",children:[y.jsxs(Gr,{k:"Address",children:[y.jsxs(Ht,{children:["홍대 아트센터 지하 2층 전시관 3",y.jsx("br",{}),"서울시 종로구 대학로 57"]}),y.jsxs(Ht,{children:["Hongik Art Center B2 Gallery 3",y.jsx("br",{}),"57, Daehak-ro, Jongno-gu, Seoul"]}),y.jsx("div",{style:{marginTop:24},children:y.jsx(Xg,{as:"a",href:"https://maps.app.goo.gl/qc99M9bDqyBTcmx79",label:"Map",size:"sm",showArrow:!0})})]}),y.jsxs(Gr,{k:"Parking",children:[y.jsx(Ht,{children:"B3F ~ B6F"}),y.jsxs(Ht,{children:[y.jsx("br",{}),"기본 30분 3,000원 / 이후 20분당 2,000원"]}),y.jsx(Ht,{children:"이용객 주차권 지참 시 50% 할인 및 1시간 무료이용권 제공"}),y.jsx(eh,{children:"(주차권으로만 정산 가능, 티켓정산 불가)"}),y.jsx(l5,{children:"주차권 배부 장소: B2 갤러리 3, 전시장 입구 인포데스크"})]}),y.jsxs(Gr,{k:"By Subway",children:[y.jsx(Ht,{children:"[1호선 종로5가역]"}),y.jsx(Ht,{children:"2번 출구 방면으로 이동 → 이화사거리 방면으로 약 800m 직진 (도보7분)"}),y.jsxs(Ht,{children:[y.jsx("br",{}),"[4호선 혜화역]"]}),y.jsx(Ht,{children:"3번 출구 방면으로 이동 → 이화사거리 방면으로 약 800m 직진 (도보7분)"}),y.jsx(Ht,{children:"또는 08번 마을버스 탑승 후 이화사거리 앞 하차"})]}),y.jsxs(Gr,{k:"By Bus",divider:!1,children:[y.jsx(Ht,{children:"[이화사거리(01-572) 하차]"}),y.jsx(Ht,{children:"마을버스 종로 08번"}),y.jsxs(Ht,{children:[y.jsx("br",{}),"[현대그룹빌딩(01-218) 하차]"]}),y.jsx(Ht,{children:"102, 107, 108, 109, 162, 301, 7025"}),y.jsxs(Ht,{children:[y.jsx("br",{}),"[이화장(01-223) 하차]"]}),y.jsx(Ht,{children:"109, 273, 601, 2112, 7025"})]})]})]})})}const _h="/",h5=T.div`
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
`,d5=T.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1440px;
    gap: 100px;
`,zp=T.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 36px;
    width: 1150px;
    margin: 0 145px;
`,$p=T.div`
    display: flex;
    font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
    font-size: 32px;
    font-weight: 600;
    color: #000;
`,E_=T.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
`,Pm=T.div`
    display: flex;
    font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 150%;
    width: 597px;
    color: #202020;
`,f5=T(Pm)`
    flex-direction: column;
    width: 1150px;
`,Bp=T.img`
    width: auto;
    height: auto;
`,b_=T.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
`,p5=T.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 36px;
    width: 100%;
`,m5=A2`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`,g5=T.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    cursor: pointer;
    animation: ${m5} 1.8s ease-in-out infinite;
`,y5=T.div`
    width: 100%;
    height: 100%;
    background-image: url('${_h}icons/showIndicatorDown.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    transform: ${n=>n.$flipped?"scaleY(-1)":"none"};
    transition: transform 400ms ease;
`,x5=T.div`
    font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: #FFF;
`,v5=T.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 140px;
    position: absolute;
    bottom: 0;
    z-index: 10;
`;function _5({}){const[n,t]=B.useState(!1),i=B.useRef(null),[a,o]=B.useState(600);B.useEffect(()=>{if(!i.current)return;o(n?1800:600)},[n]);const u=[{title:"잔향 : 기억의 향기",context:`우리는 살아가며 수많은 순간들을 스쳐 지나간다.
                        그 순간들은 이내 사라지는 듯하지만, 마음속 깊이 은은히 스며들어 기억이 되고, 결국엔 우리 존재의 한 조각이 된다.

                        <잔향> 전시는 작품이 남긴 향이 관람객에게 스며들어 시간이 지나도 떠오를
                        수 있는 ‘기억의 향기’를 남기고자 한다. 단순한 결과물의 나열이 아닌, 창작의 과정과 고민이 축적된 흔적들이 이 공간에 머무는 이들의 감각과 감정 속에 잔잔히 머물기를 바란다.

                        전시를 마주한 순간이 훗날, 불현듯 떠오르는 영감으로 다시 피어나기를.
                        우리의 잔향이 누군가의 기억 속에서 오래도록 머물 수 있기를 바랍니다.`},{title:"기억을 통한 향 추출",context:`기억은 손에 잡히지 않지만 우리 안에 깊이 스며들어 감각의 결로 남습니다. 이 기억은 사라지지 않고 다시 응축되어, 마치 맡을 수 있는 '향’ 으로 추출되듯 되살아납니다.

                하나의 향이 탑·미들·베이스 노트로 이루어지듯, 기억 또한 여러 겹의 경험과 감정으로 구성됩니다. 작품을 마주한 첫 순간의 인상과 그 당시에 겪은 감정, 그리고 시간이 흐른 뒤 불현듯 되살아나는 여운이 서로 다른 노트를 이루어 층위를 만듭니다. <잔향> 전시는 이러한 기억의 향을 여섯 개의 주제로 응축하여 감각적으로 제시합니다.

                학생들이 쌓아온 고민과 탐구의 시간, 하나의 작품을 완성하기 위한 노력한 과정은 AI&ROBOT, EDUCATION&KIDS, HEALTH CARE, IT& TECH, LIVING, MOBILITY라는 여섯 가지 향으로 드러납니다. 각각 독립된 향은 노트처럼 뚜렷한 개성을 지니면서도 함께 어우러져 전체적인 조화를 완성합니다.`},{title:"잔향의 형",context:"세 갈래로 뻗어 나가는 유기적인 곡선은 꽃잎의 형상을 닮아, 작품 속에서 향이 피어오르고 퍼져나가는 순간을 담았습니다. 곡선들이 서로 교차하며 만들어내는 흐름은 창작의 과정에서 이어지는 영감과 감정을 나타내고, 그 중심에 놓인 물방울은 남겨진 향과 기억의 매개체를 의미합니다. 이는 전시를 통해 스며든 감각과 감정이 시간이 지나도 서서히 피어오르는 잔향으로 남기를 바라는 의지를 담고 있습니다."}];return y.jsxs(h5,{ref:i,$height:a,children:[y.jsxs(d5,{children:[y.jsxs(zp,{children:[y.jsx(E_,{children:y.jsx($p,{children:y.jsx("span",{children:u[0].title})})}),y.jsxs(b_,{children:[y.jsx(Pm,{children:u[0].context}),y.jsx(Bp,{src:`${_h}brand-concept-logo.png`})]})]}),y.jsxs(zp,{children:[y.jsx(E_,{children:y.jsx($p,{children:u[1].title})}),y.jsxs(b_,{children:[y.jsx(Pm,{children:u[1].context}),y.jsx(Bp,{src:`${_h}brand-category.png`})]})]}),y.jsxs(zp,{children:[y.jsxs(p5,{children:[y.jsx($p,{children:u[2].title}),y.jsx(f5,{children:u[2].context})]}),y.jsx(Bp,{src:`${_h}brand-variation.png`})]})]}),y.jsx(jE,{position:"bottom",from:ro.whiteToBlack.from,to:ro.whiteToBlack.to,height:ro.whiteToBlack.h,z:0}),y.jsxs(v5,{children:[y.jsx(g5,{onClick:()=>t(d=>!d),children:y.jsx(y5,{$flipped:n})}),y.jsx(x5,{children:n?"접기":"더보기"})]})]})}T.div`
  @media (max-width: 640px) {
    display: none !important;
  }
`;const w5=T.div`
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
`;function E5(){const n=[y.jsx(nD,{},"hero"),y.jsx(_5,{},"new-brand"),y.jsx(pD,{},"gallery"),y.jsx(w5,{children:"TU-EXPO Works"},"works-title"),y.jsx(PD,{},"works"),y.jsx(HD,{},"insta"),y.jsx(c5,{},"venue")];return y.jsx("div",{style:{background:"#121212",minHeight:"100vh"},children:n})}const b5="/",Wg="Pretendard, system-ui",T5=T.div`
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
`,S5=`${b5}guestbook-card.svg`,A5=T.div`
  width: 181px;
  height: 147px;
  position: absolute;
  left: 6px;
  top: 190px;
  background-image: url(${S5});
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
`,R5=T.div` 
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
`,I5=T.div`
  /* position: absolute; */
  font-family: ${Wg};
  font-weight: 600;
  font-size: 20px;
  color: #555;
  @media (max-width: 640px) {
    font-size: 16px;
  }
`,C5=T.div`
  /* position: absolute; */
  top: 63px;
  width: 229px;
  height: 190px;
  font-family: ${Wg};
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
`,j5=T.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
  font-family: ${Wg};
  font-weight: 600;
  font-size: 14px;
  color: #555;
  @media (max-width: 640px) {
    right: 0px;
    bottom: 0px;
    font-size: 12px;
  }
`;function D5({to:n,from:t,message:i}){return y.jsxs(T5,{$w:yo,$h:Ja,children:[y.jsx(A5,{}),y.jsxs(R5,{$w:yo,$h:Ja,children:[y.jsx(I5,{children:`To. ${n}`}),y.jsx(C5,{children:i}),y.jsx(j5,{children:`From. ${t}`})]})]})}const N5=T.div`
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
`,M5=T.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;function O5({src:n}){return y.jsx(N5,{$w:yo,$h:Ja,children:y.jsx(M5,{src:n,alt:"포토 카드"})})}const V5=T.button`
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
`,k5=T.div`
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
`,P5=T.div`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  display: grid;
  place-items: center;
  @media (max-width: 640px) {
    width: 26px;
    height: 26px;
  }
`,U5=T.div`
  width: 32px;
  height: 32px;
  position: relative;
  @media (max-width: 640px) {
    width: 26px;
    height: 26px;
  }
`,L5=T.span`
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
`,z5=T.span`
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
`;function $5({onClick:n}){return y.jsxs(V5,{onClick:n,"aria-label":"방명록 작성",$w:yo,$h:Ja,children:[y.jsx(k5,{$w:yo,$h:Ja}),y.jsx(P5,{children:y.jsxs(U5,{children:[y.jsx(L5,{}),y.jsx(z5,{})]})})]})}const yo=270,Ja=337,B5=30,DE=20,F5=210,K5=60,NE=173,ME=216,q5=16,H5=16,Um=16,G5=T.div`
  padding: 0 0 12px 0;
  @media (max-width: 640px) {
    display: none;
  }
`,Y5=T.div`
  position: relative;
  width: 100%;
  height: 3px;
  background: #171717;
  border-radius: 2px;
  overflow: hidden;
`,Q5=T.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 3px;
  width: ${n=>n.$w}px;
  min-width: 25px;
  background: #7a7a7a;
  border-radius: 2px;
  transition: width 350ms ease-in;
`,X5=T.div`
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-y;
  cursor: grab;
  padding: 0 ${K5}px 0 ${F5}px;
  scrollbar-width: none; 
  -ms-overflow-style: none;
  &::-webkit-scrollbar { display: none; }

  @media (max-width: 640px) {
    overflow: visible;
    padding: 0px;
    cursor: default;
  }
`,W5=T.div`
  display: flex;
  gap: ${B5}px;
  align-items: flex-start;
  min-height: ${Ja*2+DE}px;

  @media (max-width: 640px) {
    gap: ${q5}px;
    min-height: initial;
  }
`,Z5=T.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: ${Um}px;
  padding: 0 16px; /* 좌우 16px 고정 마진 */
`,J5=T.div`
  width: calc((100% - ${Um}px) / 2);
  height: ${ME}px;
  flex: 0 0 calc((100% - ${Um}px) / 2);
`,tN=T.div`
  @media (max-width: 640px) { display: none; }
`,eN=T.div`
  display: none;
  @media (max-width: 640px) { display: block; }
`,nN=T.div`
  display: flex;
  flex-direction: column;
  gap: ${DE}px;
  @media (max-width: 640px) {
    width: ${NE}px;
    gap: ${H5}px;
  }
`,OE=T.div`
  width: ${yo}px;
  height: ${Ja}px;
  @media (max-width: 640px) {
    width: ${NE}px;
    height: ${ME}px;
  }
`,T_=n=>{const t=[{type:"add",id:"add"},...n],i=[{min:6,max:10},{min:16,max:20},{min:26,max:30}];let a=0;const o="/";return i.forEach((u,d)=>{if(t.length>u.min+a){const m=Math.min(Math.floor(Math.random()*(u.max-u.min+1))+u.min,t.length)+a;let p;do p=Math.floor(Math.random()*7)+1;while(t[t.length-1]?.id===`ph-${Date.now()}-${t.length-1}`&&p===t[t.length-1]?.id);t.splice(m,0,{type:"photo",id:`ph-${Date.now()}-${d}`,src:`${o}sq${p}.png`}),a++}}),t},iN=n=>{const t=[];for(let i=0;i<n.length;i+=2)t.push([n[i],n[i+1]||null]);return t};function rN({onOpenModal:n,items:t}){const i=B.useRef(null),[a,o]=B.useState({width:0,trackW:0}),[u,d]=B.useState(()=>T_(t)),[m,p]=B.useState(()=>window.matchMedia&&window.matchMedia("(max-width: 640px)").matches);B.useEffect(()=>{d(T_(t))},[t]);const g=iN(u);B.useEffect(()=>{if(!window.matchMedia)return;const R=window.matchMedia("(max-width: 640px)"),M=L=>p(L.matches);return R.addEventListener?R.addEventListener("change",M):R.addListener(M),()=>{R.removeEventListener?R.removeEventListener("change",M):R.removeListener(M)}},[]),B.useEffect(()=>{if(m)return;const R=i.current;if(!R)return;const M=L=>{Math.abs(L.deltaY)>Math.abs(L.deltaX)&&(R.scrollLeft+=L.deltaY,L.preventDefault())};return R.addEventListener("wheel",M,{passive:!1}),()=>R.removeEventListener("wheel",M)},[m]);const v=B.useRef({on:!1,moved:!1,startX:0,startScroll:0}),E=R=>!!R?.closest?.('button, a, input, textarea, select, label, [role="button"], [data-nodrag]');B.useEffect(()=>{if(m)return;const R=i.current;if(!R)return;const M=q=>{q.button===0&&(E(q.target)||(v.current.on=!0,v.current.moved=!1,v.current.startX=q.clientX,v.current.startScroll=R.scrollLeft,R.setPointerCapture?.(q.pointerId),document.body.style.userSelect="none",R.style.cursor="grabbing"))},L=q=>{if(!v.current.on)return;const X=q.clientX-v.current.startX;Math.abs(X)>2&&(v.current.moved=!0),R.scrollLeft=v.current.startScroll-X},U=q=>{v.current.on&&(R.releasePointerCapture?.(q.pointerId),document.body.style.userSelect="",R.style.cursor="grab",v.current.moved&&(q.preventDefault(),q.stopPropagation()),v.current.on=!1)};return R.addEventListener("pointerdown",M),window.addEventListener("pointermove",L),window.addEventListener("pointerup",U),R.addEventListener("pointercancel",U),()=>{R.removeEventListener("pointerdown",M),window.removeEventListener("pointermove",L),window.removeEventListener("pointerup",U),R.removeEventListener("pointercancel",U)}},[m]);const S=B.useCallback(()=>{const R=i.current;if(!R)return;const M=R.clientWidth,L=R.scrollWidth,U=R.scrollLeft,X=R.parentElement?.clientWidth||M,tt=Math.max(1,L-M),lt=Math.min(1,Math.max(0,U/tt)),Y=Math.round(X*lt);o({width:Y,trackW:X})},[]);return B.useEffect(()=>{if(m)return;S();const R=i.current;if(!R)return;const M=()=>requestAnimationFrame(S),L=()=>requestAnimationFrame(S);return R.addEventListener("scroll",M,{passive:!0}),window.addEventListener("resize",L),()=>{R.removeEventListener("scroll",M),window.removeEventListener("resize",L)}},[S,m]),y.jsxs(y.Fragment,{children:[y.jsxs(tN,{children:[y.jsx(G5,{children:y.jsx(Y5,{children:y.jsx(Q5,{$w:a.width})})}),y.jsx(X5,{ref:i,children:y.jsx(W5,{children:g.map((R,M)=>y.jsxs(nN,{children:[y.jsx(Fp,{data:R[0],onOpenModal:n}),R[1]?y.jsx(Fp,{data:R[1],onOpenModal:n}):y.jsx(OE,{})]},`col-${M}`))})})]}),y.jsx(eN,{children:y.jsx(Z5,{children:u.map(R=>y.jsx(J5,{children:y.jsx(Fp,{data:R,onOpenModal:n})},R.id))})})]})}function Fp({data:n,onOpenModal:t}){return n?n.type==="add"?y.jsx($5,{onClick:t,style:{pointerEvents:"auto"}}):n.type==="photo"?y.jsx(O5,{src:n.src}):y.jsx(D5,{to:n.to,from:n.from,message:n.message}):y.jsx(OE,{})}const aN="/",sN=T.div`
  position: fixed; inset: 0; z-index: 1000;
  display: grid; place-items: center;
  background: rgba(0,0,0,.45);
  @media (max-width: 640px) {
    align-items: end;
    padding: 0 16px 84px 16px;
  }
`,oN=T.div`
  position: relative; display: inline-flex; align-items: flex-end; gap: 17px;
  @media (max-width: 640px) {
    gap: 0;
  }
`,lN=T.div`
  padding: 40px; border-radius: 16px;
  background: rgba(160,160,160,.80);
  backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
  display: inline-flex; gap: 20px; align-items: center;
  @media (max-width: 640px) {
    padding: 18px;
    border-radius: 12px;
  }
`,uN=T.div`
  width: 520px; display: inline-flex; gap: 20px; align-items: center;
  @media (max-width: 640px) {
    width: 300px;
    gap: 12px;
  }
`,cN=T.div`
  width: 450px; height: 560px; position: relative; overflow: hidden;
  border-radius: 16px;
  background: linear-gradient(246deg, #F2F0FF -0.07%, #FFF 99.93%);
  box-shadow: 0 20px 60px rgba(0,0,0,.25);
  @media (max-width: 640px) {
    width: 260px;
    height: 340px;
    border-radius: 12px;
  }
`,hN=T.div`
  position: absolute;
  left: 12px;
  top: 314.67px;
  width: 302px;
  height: 246px;
  background-image: url(${aN}/gestbook-card.svg);
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 640px) {
    left: 4px;
    top: 210px;
    width: 158px;
    height: 130px;
  }
`,dN=T.div`
  position: absolute; left: 32px; top: 50px; display: inline-flex; align-items: center; gap: 8px;
  @media (max-width: 640px) {
    left: 18px; top: 22px; gap: 6px;
  }
`,fN=T.div`
  font-family: Pretendard, system-ui; font-weight: 600; font-size: 32px; color: #555;
  @media (max-width: 640px) {
    font-size: 22px;
  }
`,pN=T.input`
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
`,mN=T.div`
  position: absolute; left: 32px; top: 104px; width: 381px;
  @media (max-width: 640px) {
    left: 18px; top: 78px; width: 206px;
  }
`,gN=T.textarea`
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
`,yN=T.div`
  position: absolute; left: 181px; top: 472px; display: inline-flex; align-items: center; gap: 8px;
  @media (max-width: 640px) {
    left: 110px; top: 270px; gap: 6px;
  }
  @media (max-width: 640px) {
    left: auto; top: auto; right: 18px; bottom: 16px; gap: 6px;
  }
`,xN=T.div`
  font-family: Pretendard, system-ui; font-weight: 600; font-size: 32px; color: #555;
  @media (max-width: 640px) {
    font-size: 22px;
  }
`,vN=T.input`
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
`,_N=T.div`
  width: 50px; height: 560px; display: inline-flex; flex-direction: column; justify-content: flex-end;
  @media (max-width: 640px) {
    height: 340px;
  }
`,wN=T.button`
  width: 50px; height: 50px; border-radius: 25px;
  background: #202020; cursor: pointer;
  display: grid; place-items: center; border: none;
  @media (max-width: 640px) {
    width: 40px; height: 40px; border-radius: 20px;
  }
`,EN=T.div`
  width: 20px; height: 17px; background: #fff; clip-path: polygon(0 0,100% 50%,0 100%);
  @media (max-width: 640px) {
    width: 16px; height: 14px;
  }
`,bN=T.div`
  width: 60px; height: 640px; position: relative;
  @media (max-width: 640px) {
    width: 100%; height: auto;
  }
`,TN=T.button`
  width: 60px; height: 60px; position: absolute; left: 0; top: 0;
  display: grid; place-items: center; cursor: pointer;
  background: transparent; border: none;
  @media (max-width: 640px) {
    position: fixed; left: 50%; bottom: 20px; top: auto; transform: translateX(-50%);
    width: 56px; height: 56px; border-radius: 28px; background: #fff1;
    backdrop-filter: blur(2px);
  }
`,SN=T.div`
  width: 32px; height: 32px; position: relative;
`,S_=T.span`
  position: absolute; left: 15px; top: 4px; width: 2px; height: 24px;
  background: #FFFFFF; transform: rotate(${n=>n.$deg}deg);
  @media (max-width: 640px) {
    left: 15px; top: 4px; height: 24px;
  }
`;function AN({open:n,onClose:t,onSubmit:i,defaultTo:a="",defaultFrom:o=""}){const[u,d]=B.useState(a),[m,p]=B.useState(o),[g,v]=B.useState(""),E=B.useRef(null);if(B.useEffect(()=>{const M=L=>{L.key==="Escape"&&t?.()};return n&&document.addEventListener("keydown",M),()=>document.removeEventListener("keydown",M)},[n,t]),!n)return null;const S=M=>{M.target===E.current&&t?.()},R=()=>{const M={to:(u||"").trim(),from:(m||"").trim(),message:(g||"").trim()};M.message&&i?.(M)};return y.jsx(sN,{ref:E,onMouseDown:S,children:y.jsxs(oN,{onMouseDown:M=>M.stopPropagation(),children:[y.jsx(lN,{children:y.jsxs(uN,{children:[y.jsxs(cN,{children:[y.jsx(hN,{}),y.jsxs(dN,{children:[y.jsx(fN,{children:"To."}),y.jsx(pN,{value:u,onChange:M=>d(M.target.value),placeholder:"받는 사람"})]}),y.jsx(mN,{children:y.jsx(gN,{placeholder:"내용을 입력해 주세요.",value:g,onChange:M=>v(M.target.value)})}),y.jsxs(yN,{children:[y.jsx(xN,{children:"From."}),y.jsx(vN,{value:m,onChange:M=>p(M.target.value),placeholder:"보내는 사람"})]})]}),y.jsx(_N,{children:y.jsx(wN,{type:"button",onClick:R,"aria-label":"send",children:y.jsx(EN,{})})})]})}),y.jsx(bN,{children:y.jsx(TN,{type:"button",onClick:t,"aria-label":"close",children:y.jsxs(SN,{children:[y.jsx(S_,{$deg:45}),y.jsx(S_,{$deg:-45})]})})})]})})}const RN={apiKey:"AIzaSyAEFzPwTADLzuxWuyk889Jz1cHPsEgLOkQ",authDomain:"tu2025grad.firebaseapp.com",projectId:"tu2025grad",storageBucket:"tu2025grad.firebasestorage.app",messagingSenderId:"553768466639",appId:"1:553768466639:web:7c16f5d6432da7ebc05fba"},IN=dg(RN),Kp=yE(IN),CN='Pretendard, system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial, sans-serif',jN=T.div`
  background: #121212; min-height: 100vh;
`,DN=T.main`
  padding: 80px 40px 120px 40px;
  @media (max-width: 640px) {
    padding: 52px 0 80px 0;
  }
`,NN=T.h1`
  font-family: ${CN}; font-weight: 700; font-size: 32px; color: #FFFFFF; text-align: center; margin: 20px 0 40px;
  @media (max-width: 640px) {
    font-size: 20px; margin: 4px 0 24px ;
  }
`,MN=T.section`
  display: flex; justify-content: center;
  @media (max-width: 640px) {
    justify-content: stretch;
  }
`,ON=T.div`
  width: 100%;
  @media (max-width: 640px) {
    width: 100%;
  }
`;function VN(){const[n,t]=St.useState(!1),[i,a]=St.useState([]);St.useEffect(()=>{let d=!0;return(async()=>{try{const m=h_(yh(Kp,"guest"),d_("time","desc")),p=await Vm(m);if(!d)return;const g=[];p.forEach(v=>{const E=v.data();g.push({id:v.id,to:E.to||"",from:E.from||"",message:E.message||"",type:"text"})}),a(g)}catch(m){console.error("Failed to load guestbook items:",m)}})(),()=>{d=!1}},[]);const o=async({to:d,from:m,message:p})=>{try{const g=String(Date.now());await Qg(Xl(yh(Kp,"guest"),g),{to:d||"",from:m||"",message:p||"",time:g});try{const v=h_(yh(Kp,"guest"),d_("time","desc")),E=await Vm(v),S=[];E.forEach(R=>{const M=R.data();S.push({id:R.id,to:M.to||"",from:M.from||"",message:M.message||"",type:"text"})}),a(S)}catch(v){console.error("Failed to reload guestbook items after submit:",v)}t(!1)}catch(g){console.error("Failed to submit guest message:",g)}};return y.jsxs(jN,{children:[y.jsxs(DN,{children:[y.jsx(NN,{children:"Guest Book"}),y.jsx(MN,{children:y.jsxs(ON,{className:"gb-wrap",children:[y.jsx("style",{children:`
    .gb-wrap *::-webkit-scrollbar { display: none; }
    .gb-wrap * { scrollbar-width: none; -ms-overflow-style: none; }
    .gb-wrap article img { width: 100% !important; height: 100% !important; object-fit: cover !important; display: block !important; }
  `}),y.jsx(rN,{onOpenModal:()=>t(!0),items:i})]})})]}),y.jsx(AN,{open:n,onClose:()=>t(!1),onSubmit:o})]})}const Lm="/",kN=T.div`
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
`,PN=T.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: auto;
  @media (max-width: 640px) {
    gap: 40px;
    /* width: calc(100% - 32px); */
}
`,UN=T.div`
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
`,LN=T.div`
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 640px) {
    display: none;
}
`,zN=T.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  /* align-items: center; */
  gap: 20px;
  @media (max-width: 640px) {
    width: 100%;
}
`,$N=T.h1`
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
`,BN=T.h2`
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
`,FN=T.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,KN=T.p`
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
`,qN=T.div`
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
`,HN=T.div`
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
`,GN=T.div`
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
`,YN=T.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
`,QN=T.div`
  width: 24px;
  height: 24px;
  background-image: ${({$src:n})=>`url("${n}")`};
  background-size: contain;
  background-repeat: no-repeat;
  @media (max-width: 640px) {
    width: 16px;
    height: 16px;
}
`,XN=T.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #e0e0e0;
  margin: 0;
  padding: 0;
  @media (max-width: 640px) {
    font-size: 16px;
}
`,WN=T.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 12px;
  cursor: pointer;
`,ZN=T.p`
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
`,JN=T.div`
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
`;function zm({titleKor:n,titleEng:t,context:i,isOpen:a=!0,onClose:o,src:u,docId:d,collection:m="works"}){const[p,g]=B.useState(0),[v,E]=B.useState(!1);B.useEffect(()=>{let M=!0;return(async()=>{if(d!=null)try{const L=Xl(Wl,m,String(d)),U=await vh(L);if(!M)return;if(U.exists()){const q=U.data();g(typeof q.like=="number"?q.like:0)}else g(0)}catch(L){console.error("Firestore getDoc error:",L),M&&g(0)}})(),()=>{M=!1}},[d,m]);const S=async()=>{try{const M=Xl(Wl,m,String(d)),L=await vh(M);if(L.exists()){const U=L.data();g(typeof U.like=="number"?U.like:0)}}catch(M){console.error("Firestore refresh error:",M)}},R=async()=>{if(v)return;if(d==null){console.warn("handleLike called without a valid docId");return}E(!0);const M=Xl(Wl,m,String(d));try{await Uh(M,{like:Lh(1)}),g(L=>L+1),await S()}catch(L){if(L.code==="not-found"||/No document/i.test(String(L)))try{(await vh(M)).exists()?await Uh(M,{like:Lh(1)}):await Qg(M,{like:1},{merge:!0}),await S()}catch(U){console.error("Firestore like fallback error:",U)}else console.error("Firestore like error:",L)}finally{E(!1)}};return y.jsx(kN,{$open:!!a,children:y.jsxs(PN,{children:[y.jsxs(UN,{children:[y.jsx(LN,{onClick:()=>{typeof o=="function"&&o()},children:y.jsx("img",{src:`${Lm}icons/closeIcon.svg`,alt:"Close Icon"})}),y.jsxs(zN,{children:[y.jsx(qN,{$src:u}),y.jsxs(FN,{children:[y.jsx(BN,{children:n}),y.jsx($N,{children:t})]}),y.jsx(KN,{children:i})]})]}),y.jsxs(HN,{children:[y.jsx(GN,{onClick:R,"aria-disabled":v,title:v?"처리 중":"좋아요",children:y.jsxs(YN,{children:[y.jsx(QN,{$src:`${Lm}icons/likeIcon(white).svg`,"aria-label":"Like icon"}),y.jsx(XN,{children:p||0})]})}),y.jsxs(WN,{onClick:()=>{const L=Math.max(document.documentElement?.scrollHeight||0,document.body?.scrollHeight||0)-window.innerHeight,q=Math.max(0,L-269);window.scrollTo({top:q,behavior:"smooth"})},children:[y.jsx(ZN,{children:"Designer Info"}),y.jsx(JN,{})]})]})]})})}zm.propTypes={titleKor:Z.string.isRequired,titleEng:Z.string.isRequired,context:Z.string.isRequired,isOpen:Z.bool,onClose:Z.func,docId:Z.oneOfType([Z.string,Z.number]).isRequired,collection:Z.string};const t9=T.div`
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
`,e9=T.div`
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
`,n9=T.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  display: block;
`,i9=T.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 8px);
  width: auto;
  @media (max-width: 640px) {
    height: 100%;
}
`,r9=T.div`
  display: flex;
  height: auto;
  padding: 0;
  margin: 0;
  flex-direction: column;
  gap: 0px;
`,a9=T.h1`
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
`,s9=T.h2`
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
`,o9=T.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 84px;
  @media (max-width: 640px) {
    height: 38px;
}
`,l9=T.div`
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
`,qp=T.h3`
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
`,u9=T.div`
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
`,Hp=T.p`
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
`;function Zg({nameKor:n,nameEng:t,part:i,sns:a,eMail:o,imgUrl:u,imgAlt:d}){return y.jsxs(t9,{children:[y.jsx(e9,{children:y.jsx(n9,{src:u,alt:d})}),y.jsxs(i9,{children:[y.jsxs(r9,{children:[y.jsx(a9,{children:n}),y.jsx(s9,{children:t})]}),y.jsxs(o9,{children:[y.jsxs(l9,{children:[y.jsx(qp,{children:"Part"}),y.jsx(qp,{children:"SNS"}),y.jsx(qp,{children:"E-mail"})]}),y.jsxs(u9,{children:[y.jsx(Hp,{children:i}),y.jsx(Hp,{children:a}),y.jsx(Hp,{children:o})]})]})]})]})}Zg.propTypes={nameKor:Z.string.isRequired,nameEng:Z.string.isRequired,part:Z.string,sns:Z.string,eMail:Z.string,imgUrl:Z.string.isRequired,imgAlt:Z.string.isRequired};Zg.defaultProps={sns:"N/A",eMail:"N/A"};const c9=T.div`
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
`,h9=T.div`
  display: flex;
  flex-direction: column;
  width: 810px;
  height: auto;
  gap: 76px;
  @media (max-width: 640px) {
    width: 100%;
    gap: 21px;
}
`,d9=T.h1`
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
`;function A_({designers:n}){return y.jsxs(c9,{children:[y.jsx(d9,{children:"Designer"}),y.jsx(h9,{children:n.map((t,i)=>y.jsx(Zg,{nameKor:t.nameKor,nameEng:t.nameEng,part:t.role,sns:t.sns,eMail:t.eMail,imgUrl:t.imgUrl},i))})]})}const f9=T.div`
    width: 100%; // 임시값
    margin-top: 50px;
    max-width: ${n=>n.$isInfoOpen?"100%":"1800px"};
@media (max-width: 640px) {
    margin-top: 20px;
}
`,p9=T.div`
    position: relative;
    width: 100%;
    max-width: 100vw;
    padding-top: 56.25%; // 16:9 비율
`,m9=T.iframe`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
`;function g9({videoId:n,isInfoOpen:t}){const a=`https://player.vimeo.com/video/${String(n||"").trim()}?badge=0&autopause=0&title=0&byline=0&portrait=0&app_id=58479`;return y.jsx(f9,{$isInfoOpen:t,children:y.jsx(p9,{children:y.jsx(m9,{src:a,frameBorder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,title:"Embedded Vimeo"})})})}const y9="/",x9=T.div`
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
`,v9=T.div`
    display: flex;
    width: 40px;
    height: 40px;
`;function _9({isOpen:n=!1,onClick:t}){const[i,a]=B.useState(!1);return B.useEffect(()=>{let o;return n?a(!1):(a(!1),o=setTimeout(()=>{a(!0)},500)),()=>clearTimeout(o)},[n]),y.jsx(x9,{$visible:!n,$active:i,onClick:()=>{typeof t=="function"&&t()},children:y.jsx(v9,{children:y.jsx("img",{src:`${y9}icons/infoOpenIcon.svg`,alt:"작품 정보 열기"})})})}function nh(n){if(!n)return n;const t="/";if(/^https?:\/\//i.test(n))return n;const i=String(n).replace(/^\.\.\//,"").replace(/^\//,"");return t+i}const w9=T.img`
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
`,Gp=n=>y.jsx(w9,{loading:"lazy",...n}),E9=T.div`
  display: flex;
  position: relative;
  background: #fff;
  width: 100%;
  @media (max-width: 640px) {
    flex-direction: column;
}
`,b9=T.div`
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
`,T9=T.div`
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
`,R_=T.div`
  display: flex;
  position: relative;
  width: 100%;
`,S9=T.div`
  position: relative;
  width: 100%;
  height: auto;
  /* max-width: 1800px; */
`,A9={A:"c0",E:"c1",H:"c2",I:"c3",L:"c4",M:"c5"};function R9(){const{pid:n}=BT(),t=(n||"").toUpperCase().match(/^([A-Z])(\d{3})$/),[i,a]=B.useState(!0),[o,u]=B.useState(!0),d=()=>{a(!1),setTimeout(()=>{u(!1)},500)},m=()=>{u(!0),setTimeout(()=>{a(!0)},0)};let p=null;if(t){const[,q,X]=t,tt=A9[q]||null,lt=Math.max(0,parseInt(X,10)-1);p=eu.find(Y=>Y.projectNum===lt&&(!tt||Y.category===tt)),p||(p=eu.find(Y=>Y.projectNum==lt))}if(!p)return y.jsx(R_,{children:y.jsxs(PageContainer,{children:[y.jsx(zm,{titleKor:"작품 제목(한글)",titleEng:"Work Title (English)",context:"이곳은 작품 설명이 들어가는 영역입니다. 작품에 대한 상세한 설명이나 배경, 제작 과정 등을 기술할 수 있습니다. 이 텍스트는 예시로 작성된 내용이며, 실제 작품 설명으로 대체되어야 합니다.",isOpen:i,onClose:()=>a(!1),docId:0}),y.jsx(Gp,{src:"https://placehold.co/1530x4000",alt:"featured"}),y.jsx(A_,{children:"  "})]})});const g=(p.members||[]).map(q=>{const X=og.find(tt=>tt.num===q);return X?{nameKor:X.nameKor,nameEng:X.nameEng,role:X.role||"Designer",sns:X.sns||"-",eMail:X.eMail||"",imgUrl:nh(X.imgUrl||"/김예준.jpg")}:null}).filter(Boolean),E={c0:"A",c1:"E",c2:"H",c3:"I",c4:"L",c5:"M"}[p.category]||"A",S=p.projectNum??p.num,R=String(S).padStart(3,"0"),M=`/projects/${S}`,[L,U]=B.useState([]);return B.useEffect(()=>{let q=!1;const X=["jpg"],tt=30,lt=2,Y=C=>!C||!C.ok?!1:(C.headers.get("content-type")||"").startsWith("image/"),ot=async C=>{try{const I=await fetch(C,{method:"GET",cache:"no-store"});return Y(I)}catch{return!1}};return(async()=>{const C=[];let I=0;for(let j=0;j<tt;j++){let O=!1;for(const k of X){const z=nh(`${M}/gallery/${j}.${k}`);if(await ot(z)){C.push(z),O=!0,I=0;break}}if(!O&&(C.length===0||(I+=1,I>=lt)))break}q||U(C)})(),()=>{q=!0}},[M]),B.useEffect(()=>{const q=p?.projectNum??p?.num;if(q==null)return;const tt=Xl(Wl,"works",String(q));(async()=>{try{await Uh(tt,{view:Lh(1)})}catch(lt){if(lt.code==="not-found"||/No document/i.test(String(lt)))try{(await vh(tt)).exists()?await Uh(tt,{view:Lh(1)}):await Qg(tt,{view:1},{merge:!0})}catch(Y){console.error("Firestore view fallback error:",Y)}else console.error("Firestore view error:",lt)}})()},[p?.projectNum,p?.num]),y.jsx(R_,{children:y.jsxs(E9,{children:[y.jsx(_9,{isOpen:i,onClick:m}),y.jsx(T9,{$visible:o,children:y.jsx(zm,{titleKor:p.titleKor,titleEng:p.titleEng,context:p.description||"null",isOpen:i,onClose:d,src:nh(`/projects/${S}/thumb.jpg`),docId:S})}),y.jsxs(b9,{$isInfoOpen:i,children:[L.length>0?L.map((q,X)=>y.jsx(Gp,{src:q,alt:`project-${E}${R}-img-${X+1}`},X)):y.jsx(Gp,{src:nh("/thumbnailExample.gif"),alt:`project-${E}${R}-placeholder`}),y.jsx(g9,{videoId:p.videoId,isInfoOpen:i}),y.jsx(S9,{children:y.jsx(A_,{designers:g})})]})]})})}const I_="/",I9=A2`
  0%   { transform: translateY(calc(var(--amp, 8px) * -1)); }
  100% { transform: translateY(var(--amp, 8px)); }
`,C9=T.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: auto;
    height: auto;
    padding: 20px 20px 10px 20px;
    background-color: rgba(0,0,0, 1);
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
`,j9=T.div`
    animation: ${({$visible:n,$floatDur:t})=>n?tg`${I9} ${t??1800}ms ease-in-out infinite alternate`:"none"};
    will-change: transform;
`,C_=T.div`
    display: flex;
    width: 40px;
    height: 40px;
    background-image: url(${n=>n.src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;function D9({visible:n=!0,fadeMs:t=800,floatDur:i=1800,amp:a=6}={}){return y.jsxs(C9,{$visible:n,$fadeMs:t,"aria-hidden":!n,children:[y.jsx(C_,{src:`${I_}icons/showIndicatorMouse.svg`,style:{color:"#FFF"}}),y.jsx(j9,{$visible:n,$floatDur:i,style:{"--amp":`${a}px`},children:y.jsx(C_,{src:`${I_}icons/showIndicatorDown.svg`})})]})}const Yp=T.div`
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
`,j_=T.div`
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
`,D_=T.div`
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
`,N_=T.div`
    display: flex;
    width: 72px;
    height: 1px;

    height: 1px; background:#333;
    width: ${({$shown:n,$lineWidth:t})=>n?t||"72px":"0px"};
    transition:
    width ${({$lDur:n})=>n}ms ${({$ease:n})=>n} ${({$lDelay:n})=>n}ms;
`,M_=T.div`
    display: flex;
    align-items: center;
    gap: 12px;
    mix-blend-mode: difference;
`,N9=T.div`
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
`,M9=T.p`
    font-size: 16px;
    font-weight: 300;
    color: #222;
    line-height: 150%;
    text-align: justify;
    margin: 0;
`;function Qp({children:n,textWidth:t,textHeight:i,shown:a,tDur:o,tDelay:u,ease:d}){return y.jsx(N9,{$textWidth:t,$textHeight:i,$shown:a,$tDur:o,$tDelay:u,$ease:d,children:y.jsx(M9,{children:n})})}function O9({top:n,left:t,right:i="auto",bottom:a,lineWidth:o,textWidth:u,textHeight:d,children:m,position:p="left",isActive:g,section:v,currentSection:E,anim:S}){const[R,M]=B.useState(!1),L=S?.circle?.easing||S?.line?.easing||S?.text?.easing||"cubic-bezier(0.22,1,0.36,1)",U=S?.circle?.duration??250,q=S?.circle?.delay??120,X=S?.line?.duration??500,tt=q+U+(S?.line?.delay??120),lt=S?.text?.duration??280,Y=tt+X+(S?.text?.delay??80),C=g||R&&E===v;if(B.useEffect(()=>{g&&!R&&M(!0)},[g,R]),p==="right")return y.jsxs(Yp,{$top:n,$left:t,$right:i,$bottom:a,children:[y.jsx(Qp,{textWidth:u,textHeight:d,shown:C,tDur:lt,tDelay:Y,ease:L,children:m}),y.jsxs(M_,{children:[y.jsx(N_,{$lineWidth:o,$shown:C,$lDur:X,$lDelay:tt,$ease:L}),y.jsx(j_,{$shown:C,$cDur:U,$cDelay:q,$ease:L,children:y.jsx(D_,{$shown:C,$cDur:U,$cDelay:q,$ease:L})})]})]});if(p==="left")return y.jsxs(Yp,{$top:n,$left:t,$right:i,$bottom:a,children:[y.jsxs(M_,{children:[y.jsx(j_,{$shown:C,$cDur:U,$cDelay:q,$ease:L,children:y.jsx(D_,{$shown:C,$cDur:U,$cDelay:q,$ease:L})}),y.jsx(N_,{$lineWidth:o,$shown:C,$lDur:X,$lDelay:tt,$ease:L})]}),y.jsx(Qp,{textWidth:u,textHeight:d,shown:C,tDur:lt,tDelay:Y,ease:L,children:m})]});if(p==="no-line")return y.jsx(Yp,{$top:n,$left:t,$right:i,$bottom:a,children:y.jsx(Qp,{textWidth:u,textHeight:d,shown:C,tDur:lt,tDelay:Y,ease:L,children:m})})}const Xp="/",V9=T.div`
    display: flex;
    position: relative;
    margin-top: 80px;
    width: 100vw;
    flex-direction: column;
`,k9=T.div`
    display: flex;
    position: relative;
    width: 100vw;
    height: 500vh;
    background-color: #FFF;
    background-color: transparent;
    isolation: isolate;
`,Wp=T.img`
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
`,P9=T.div`
    display: flex;
    position: fixed;
    width: 100vw;
    height: 40px;
    bottom: 0;
    left: 0;
    background-color: #202020;
    z-index: 6;
`;function U9(){const n=B.useRef(null),[t,i]=B.useState(0),a=B.useRef(0),o=B.useRef(!1),u=B.useRef(null),d=B.useRef(0),m=1200,p=1500,[g,v]=B.useState(0),[E,S]=B.useState(!1),[R,M]=B.useState(!0),L=B.useRef(!1),U=B.useRef(null),q=[{top:"130vh",left:"15vw",textWidth:"300px",textHeight:"auto",position:"left",section:1,info:"모든 꽃이 피어날 수 있는 근원적인 기반이다. 거칠고 단단한 돌은 졸업전시를 향한 수많은 준비와 실험, 실패와 성장의 흔적을 품고 있다. 돌 위에 스며든 이끼와 작은 생명들은 그 과정 속에서 서서히 쌓인 노력의 결실을 상징한다. 이는 향이 머무는 토양처럼, 모든 창작의 향이 퍼져나가기 전의 저장된 시간을 의미한다."},{top:"220vh",right:"53vw",textWidth:"300px",textHeight:"auto",position:"right",section:2,info:"시간 위에 피어난 졸업생들의 존재이자 향의 발화점이다. 꽃은 자신만의 빛깔과 감정, 그리고 이야기를 담은 향을 내뿜는다. 이 향은 단순한 냄새가 아닌, 졸업생들의 기억과 감정이 응축된 예술의 잔향이다. 전시장을 거닐던 관람객들은 그 향을 맡으며 각자의 기억과 감정 속에서 새로운 장면을 떠올리고, 그 순간 작품은 관람객의 내면으로 스며든다."},{top:"355vh",right:"15vw",textWidth:"300px",textHeight:"auto",position:"right",section:3,info:"향의 흐름이 새로운 생명으로 이어지는 장면을 형상화한다. 돌에서 피어난 꽃들이 줄기와 풀로 연결되며, 이는 졸업전시를 통해 이어지는 졸업생과 관람객의 감정적 교류를 상징한다. 꽃에서 나온 향을 맡은 관람객들은 단순히 감상자가 아닌, 그 향의 영향을 받아 자신만의 ‘꽃’을 피우는 존재로 변화한다. 그리고 다시 그들이 만들어내는 향은 또 다른 사람에게 스며들어, 기억과 감정의 연쇄를 만들어낸다."},{top:"420vh",left:"25vw",textWidth:"300px",textHeight:"auto",position:"no-line",section:4,info:"결국 이 세 오브제는 한 사람의 향이 또 다른 향으로 이어지는 순환을 이야기한다. 돌은 그 순환의 뿌리이며, 꽃은 향의 시작점이고, 메인오브제는 그 향이 세상으로 확산되어 기억과 창작이 끊임없이 이어지는 ‘잔향의 생태계’를 완성하는 상징이다."}],X=t===1||t===4?1:.3,tt=t===2||t===4?1:.3,lt=t===3||t===4?1:.3;return B.useEffect(()=>{const Y=()=>{if(!n.current)return;const ot=n.current.getBoundingClientRect().top+window.scrollY,I=Math.max(0,Math.min(window.scrollY-ot,4*window.innerHeight))/window.innerHeight*100;let j=0;I>=350?j=4:I>=270?j=3:I>=170?j=2:I>=70?j=1:j=0,i(O=>O===j?O:j)};return window.addEventListener("scroll",Y,{passive:!0}),Y(),()=>window.removeEventListener("scroll",Y)},[]),B.useEffect(()=>{const Y=ot=>{if(M(!1),L.current=!0,clearTimeout(U.current),S(!1),!n.current)return;const C=n.current.getBoundingClientRect().top+window.scrollY,I=C,j=C+4*window.innerHeight,O=window.scrollY;if(O<I-20||O>j+20)return;if(o.current){ot.preventDefault();return}if(Date.now()-d.current<m+p){ot.preventDefault();return}const z=ot.deltaY,D=Math.sign(z);if(D===0)return;const Kt=Math.max(0,Math.min(4,a.current+D));if(Kt===a.current){ot.preventDefault();return}o.current=!0,d.current=Date.now(),a.current=Kt;const J=C+Kt*window.innerHeight;window.scrollTo({top:J,behavior:"smooth"}),clearTimeout(u.current),u.current=setTimeout(()=>{o.current=!1,S(!0),v(Kt)},1e3),ot.preventDefault()};return window.addEventListener("wheel",Y,{passive:!1}),()=>{window.removeEventListener("wheel",Y),clearTimeout(u.current)}},[]),B.useEffect(()=>{const Y=ot=>{const C=[" ","PageDown","ArrowDown"],I=["PageUp","ArrowUp"];M(!1),L.current=!0,clearTimeout(U.current),C.includes(ot.key)?(ot.preventDefault(),window.dispatchEvent(new WheelEvent("wheel",{deltaY:100}))):I.includes(ot.key)&&(ot.preventDefault(),window.dispatchEvent(new WheelEvent("wheel",{deltaY:-100})))};return window.addEventListener("keydown",Y),()=>window.removeEventListener("keydown",Y)},[]),B.useEffect(()=>(L.current||(M(!0),clearTimeout(U.current),U.current=setTimeout(()=>{M(!1),L.current=!0},1e4)),()=>clearTimeout(U.current)),[]),B.useEffect(()=>{},[E,g]),y.jsxs(V9,{children:[y.jsx(D9,{visible:R,fadeMs:700,floatDur:900,amp:6}),y.jsxs(k9,{ref:n,children:[q.map((Y,ot)=>y.jsx(O9,{top:Y.top,left:Y.left,right:Y.right,textWidth:Y.textWidth,textHeight:Y.textHeight,position:Y.position,isActive:E&&g===Y.section,anim:{circle:{duration:250,delay:120,easing:"cubic-bezier(0.22,1,0.36,1)"},line:{duration:500,delay:120,easing:"cubic-bezier(0.22,1,0.36,1)"},text:{duration:280,delay:80,easing:"cubic-bezier(0.22,1,0.36,1)"}},section:Y.section,currentSection:g,children:Y.info},ot)),y.jsx(Wp,{src:`${Xp}showroom/showRight.png`,alt:"Showroom Right",$opacity:lt}),y.jsx(Wp,{src:`${Xp}showroom/showCenter.png`,alt:"Showroom Center",$opacity:tt}),y.jsx(Wp,{src:`${Xp}showroom/showLeft.png`,alt:"Showroom Left",$opacity:X})]}),y.jsx(P9,{})]})}var Zp={exports:{}},Pl={},Jp={exports:{}},tm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O_;function L9(){return O_||(O_=1,(function(n){function t(J,dt){var yt=J.length;J.push(dt);t:for(;0<yt;){var Ct=yt-1>>>1,V=J[Ct];if(0<o(V,dt))J[Ct]=dt,J[yt]=V,yt=Ct;else break t}}function i(J){return J.length===0?null:J[0]}function a(J){if(J.length===0)return null;var dt=J[0],yt=J.pop();if(yt!==dt){J[0]=yt;t:for(var Ct=0,V=J.length,at=V>>>1;Ct<at;){var ct=2*(Ct+1)-1,ht=J[ct],gt=ct+1,jt=J[gt];if(0>o(ht,yt))gt<V&&0>o(jt,ht)?(J[Ct]=jt,J[gt]=yt,Ct=gt):(J[Ct]=ht,J[ct]=yt,Ct=ct);else if(gt<V&&0>o(jt,yt))J[Ct]=jt,J[gt]=yt,Ct=gt;else break t}}return dt}function o(J,dt){var yt=J.sortIndex-dt.sortIndex;return yt!==0?yt:J.id-dt.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;n.unstable_now=function(){return u.now()}}else{var d=Date,m=d.now();n.unstable_now=function(){return d.now()-m}}var p=[],g=[],v=1,E=null,S=3,R=!1,M=!1,L=!1,U=!1,q=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,tt=typeof setImmediate<"u"?setImmediate:null;function lt(J){for(var dt=i(g);dt!==null;){if(dt.callback===null)a(g);else if(dt.startTime<=J)a(g),dt.sortIndex=dt.expirationTime,t(p,dt);else break;dt=i(g)}}function Y(J){if(L=!1,lt(J),!M)if(i(p)!==null)M=!0,ot||(ot=!0,z());else{var dt=i(g);dt!==null&&Kt(Y,dt.startTime-J)}}var ot=!1,C=-1,I=5,j=-1;function O(){return U?!0:!(n.unstable_now()-j<I)}function k(){if(U=!1,ot){var J=n.unstable_now();j=J;var dt=!0;try{t:{M=!1,L&&(L=!1,X(C),C=-1),R=!0;var yt=S;try{e:{for(lt(J),E=i(p);E!==null&&!(E.expirationTime>J&&O());){var Ct=E.callback;if(typeof Ct=="function"){E.callback=null,S=E.priorityLevel;var V=Ct(E.expirationTime<=J);if(J=n.unstable_now(),typeof V=="function"){E.callback=V,lt(J),dt=!0;break e}E===i(p)&&a(p),lt(J)}else a(p);E=i(p)}if(E!==null)dt=!0;else{var at=i(g);at!==null&&Kt(Y,at.startTime-J),dt=!1}}break t}finally{E=null,S=yt,R=!1}dt=void 0}}finally{dt?z():ot=!1}}}var z;if(typeof tt=="function")z=function(){tt(k)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,se=D.port2;D.port1.onmessage=k,z=function(){se.postMessage(null)}}else z=function(){q(k,0)};function Kt(J,dt){C=q(function(){J(n.unstable_now())},dt)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(J){J.callback=null},n.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<J?Math.floor(1e3/J):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_next=function(J){switch(S){case 1:case 2:case 3:var dt=3;break;default:dt=S}var yt=S;S=dt;try{return J()}finally{S=yt}},n.unstable_requestPaint=function(){U=!0},n.unstable_runWithPriority=function(J,dt){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var yt=S;S=J;try{return dt()}finally{S=yt}},n.unstable_scheduleCallback=function(J,dt,yt){var Ct=n.unstable_now();switch(typeof yt=="object"&&yt!==null?(yt=yt.delay,yt=typeof yt=="number"&&0<yt?Ct+yt:Ct):yt=Ct,J){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=yt+V,J={id:v++,callback:dt,priorityLevel:J,startTime:yt,expirationTime:V,sortIndex:-1},yt>Ct?(J.sortIndex=yt,t(g,J),i(p)===null&&J===i(g)&&(L?(X(C),C=-1):L=!0,Kt(Y,yt-Ct))):(J.sortIndex=V,t(p,J),M||R||(M=!0,ot||(ot=!0,z()))),J},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(J){var dt=S;return function(){var yt=S;S=dt;try{return J.apply(this,arguments)}finally{S=yt}}}})(tm)),tm}var V_;function z9(){return V_||(V_=1,Jp.exports=L9()),Jp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k_;function $9(){if(k_)return Pl;k_=1;var n=z9(),t=$m(),i=LS();function a(e){var r="https://react.dev/errors/"+e;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)r+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var r=e,s=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(s=r.return),e=r.return;while(e)}return r.tag===3?s:null}function d(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(a(188))}function p(e){var r=e.alternate;if(!r){if(r=u(e),r===null)throw Error(a(188));return r!==e?null:e}for(var s=e,l=r;;){var h=s.return;if(h===null)break;var f=h.alternate;if(f===null){if(l=h.return,l!==null){s=l;continue}break}if(h.child===f.child){for(f=h.child;f;){if(f===s)return m(h),e;if(f===l)return m(h),r;f=f.sibling}throw Error(a(188))}if(s.return!==l.return)s=h,l=f;else{for(var w=!1,b=h.child;b;){if(b===s){w=!0,s=h,l=f;break}if(b===l){w=!0,l=h,s=f;break}b=b.sibling}if(!w){for(b=f.child;b;){if(b===s){w=!0,s=f,l=h;break}if(b===l){w=!0,l=f,s=h;break}b=b.sibling}if(!w)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:r}function g(e){var r=e.tag;if(r===5||r===26||r===27||r===6)return e;for(e=e.child;e!==null;){if(r=g(e),r!==null)return r;e=e.sibling}return null}var v=Object.assign,E=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),q=Symbol.for("react.provider"),X=Symbol.for("react.consumer"),tt=Symbol.for("react.context"),lt=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),ot=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),j=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function z(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var D=Symbol.for("react.client.reference");function se(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===D?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M:return"Fragment";case U:return"Profiler";case L:return"StrictMode";case Y:return"Suspense";case ot:return"SuspenseList";case j:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case tt:return(e.displayName||"Context")+".Provider";case X:return(e._context.displayName||"Context")+".Consumer";case lt:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case C:return r=e.displayName||null,r!==null?r:se(e.type)||"Memo";case I:r=e._payload,e=e._init;try{return se(e(r))}catch{}}return null}var Kt=Array.isArray,J=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,dt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,yt={pending:!1,data:null,method:null,action:null},Ct=[],V=-1;function at(e){return{current:e}}function ct(e){0>V||(e.current=Ct[V],Ct[V]=null,V--)}function ht(e,r){V++,Ct[V]=e.current,e.current=r}var gt=at(null),jt=at(null),_t=at(null),ge=at(null);function Lt(e,r){switch(ht(_t,r),ht(jt,e),ht(gt,null),r.nodeType){case 9:case 11:e=(e=r.documentElement)&&(e=e.namespaceURI)?L1(e):0;break;default:if(e=r.tagName,r=r.namespaceURI)r=L1(r),e=z1(r,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ct(gt),ht(gt,e)}function Me(){ct(gt),ct(jt),ct(_t)}function Ni(e){e.memoizedState!==null&&ht(ge,e);var r=gt.current,s=z1(r,e.type);r!==s&&(ht(jt,e),ht(gt,s))}function Hn(e){jt.current===e&&(ct(gt),ct(jt)),ge.current===e&&(ct(ge),Il._currentValue=yt)}var ln=Object.prototype.hasOwnProperty,la=n.unstable_scheduleCallback,rs=n.unstable_cancelCallback,hd=n.unstable_shouldYield,Io=n.unstable_requestPaint,pn=n.unstable_now,Su=n.unstable_getCurrentPriorityLevel,Oe=n.unstable_ImmediatePriority,ze=n.unstable_UserBlockingPriority,Mi=n.unstable_NormalPriority,dd=n.unstable_LowPriority,Co=n.unstable_IdlePriority,fd=n.log,ua=n.unstable_setDisableYieldValue,cr=null,tn=null;function Dn(e){if(typeof fd=="function"&&ua(e),tn&&typeof tn.setStrictMode=="function")try{tn.setStrictMode(cr,e)}catch{}}var un=Math.clz32?Math.clz32:Ru,pd=Math.log,Au=Math.LN2;function Ru(e){return e>>>=0,e===0?32:31-(pd(e)/Au|0)|0}var oi=256,hr=4194304;function Gn(e){var r=e&42;if(r!==0)return r;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Nn(e,r,s){var l=e.pendingLanes;if(l===0)return 0;var h=0,f=e.suspendedLanes,w=e.pingedLanes;e=e.warmLanes;var b=l&134217727;return b!==0?(l=b&~f,l!==0?h=Gn(l):(w&=b,w!==0?h=Gn(w):s||(s=b&~e,s!==0&&(h=Gn(s))))):(b=l&~f,b!==0?h=Gn(b):w!==0?h=Gn(w):s||(s=l&~e,s!==0&&(h=Gn(s)))),h===0?0:r!==0&&r!==h&&(r&f)===0&&(f=h&-h,s=r&-r,f>=s||f===32&&(s&4194048)!==0)?r:h}function dr(e,r){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&r)===0}function as(e,r){switch(e){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jo(){var e=oi;return oi<<=1,(oi&4194048)===0&&(oi=256),e}function fr(){var e=hr;return hr<<=1,(hr&62914560)===0&&(hr=4194304),e}function ss(e){for(var r=[],s=0;31>s;s++)r.push(e);return r}function ve(e,r){e.pendingLanes|=r,r!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Iu(e,r,s,l,h,f){var w=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var b=e.entanglements,N=e.expirationTimes,H=e.hiddenUpdates;for(s=w&~s;0<s;){var et=31-un(s),rt=1<<et;b[et]=0,N[et]=-1;var G=H[et];if(G!==null)for(H[et]=null,et=0;et<G.length;et++){var Q=G[et];Q!==null&&(Q.lane&=-536870913)}s&=~rt}l!==0&&pr(e,l,0),f!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=f&~(w&~r))}function pr(e,r,s){e.pendingLanes|=r,e.suspendedLanes&=~r;var l=31-un(r);e.entangledLanes|=r,e.entanglements[l]=e.entanglements[l]|1073741824|s&4194090}function mr(e,r){var s=e.entangledLanes|=r;for(e=e.entanglements;s;){var l=31-un(s),h=1<<l;h&r|e[l]&r&&(e[l]|=r),s&=~h}}function Do(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function No(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Oi(){var e=dt.p;return e!==0?e:(e=window.event,e===void 0?32:ax(e.type))}function md(e,r){var s=dt.p;try{return dt.p=e,r()}finally{dt.p=s}}var li=Math.random().toString(36).slice(2),_e="__reactFiber$"+li,Ge="__reactProps$"+li,Vi="__reactContainer$"+li,ca="__reactEvents$"+li,ha="__reactListeners$"+li,gd="__reactHandles$"+li,Yn="__reactResources$"+li,gr="__reactMarker$"+li;function os(e){delete e[_e],delete e[Ge],delete e[ca],delete e[ha],delete e[gd]}function ui(e){var r=e[_e];if(r)return r;for(var s=e.parentNode;s;){if(r=s[Vi]||s[_e]){if(s=r.alternate,r.child!==null||s!==null&&s.child!==null)for(e=K1(e);e!==null;){if(s=e[_e])return s;e=K1(e)}return r}e=s,s=e.parentNode}return null}function ci(e){if(e=e[_e]||e[Vi]){var r=e.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return e}return null}function yr(e){var r=e.tag;if(r===5||r===26||r===27||r===6)return e.stateNode;throw Error(a(33))}function xr(e){var r=e[Yn];return r||(r=e[Yn]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function we(e){e[gr]=!0}var Cu=new Set,da={};function hi(e,r){di(e,r),di(e+"Capture",r)}function di(e,r){for(da[e]=r,e=0;e<r.length;e++)Cu.add(r[e])}var fa=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),fi={},ls={};function yd(e){return ln.call(ls,e)?!0:ln.call(fi,e)?!1:fa.test(e)?ls[e]=!0:(fi[e]=!0,!1)}function pa(e,r,s){if(yd(r))if(s===null)e.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(r);return;case"boolean":var l=r.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(r);return}}e.setAttribute(r,""+s)}}function ma(e,r,s){if(s===null)e.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttribute(r,""+s)}}function Mn(e,r,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(r,s,""+l)}}var ga,us;function ki(e){if(ga===void 0)try{throw Error()}catch(s){var r=s.stack.trim().match(/\n( *(at )?)/);ga=r&&r[1]||"",us=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ga+e+us}var cs=!1;function hs(e,r){if(!e||cs)return"";cs=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(r){var rt=function(){throw Error()};if(Object.defineProperty(rt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(rt,[])}catch(Q){var G=Q}Reflect.construct(e,[],rt)}else{try{rt.call()}catch(Q){G=Q}e.call(rt.prototype)}}else{try{throw Error()}catch(Q){G=Q}(rt=e())&&typeof rt.catch=="function"&&rt.catch(function(){})}}catch(Q){if(Q&&G&&typeof Q.stack=="string")return[Q.stack,G.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=l.DetermineComponentFrameRoot(),w=f[0],b=f[1];if(w&&b){var N=w.split(`
`),H=b.split(`
`);for(h=l=0;l<N.length&&!N[l].includes("DetermineComponentFrameRoot");)l++;for(;h<H.length&&!H[h].includes("DetermineComponentFrameRoot");)h++;if(l===N.length||h===H.length)for(l=N.length-1,h=H.length-1;1<=l&&0<=h&&N[l]!==H[h];)h--;for(;1<=l&&0<=h;l--,h--)if(N[l]!==H[h]){if(l!==1||h!==1)do if(l--,h--,0>h||N[l]!==H[h]){var et=`
`+N[l].replace(" at new "," at ");return e.displayName&&et.includes("<anonymous>")&&(et=et.replace("<anonymous>",e.displayName)),et}while(1<=l&&0<=h);break}}}finally{cs=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?ki(s):""}function xd(e){switch(e.tag){case 26:case 27:case 5:return ki(e.type);case 16:return ki("Lazy");case 13:return ki("Suspense");case 19:return ki("SuspenseList");case 0:case 15:return hs(e.type,!1);case 11:return hs(e.type.render,!1);case 1:return hs(e.type,!0);case 31:return ki("Activity");default:return""}}function Qn(e){try{var r="";do r+=xd(e),e=e.return;while(e);return r}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function fe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vr(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function ya(e){var r=vr(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),l=""+e[r];if(!e.hasOwnProperty(r)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var h=s.get,f=s.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return h.call(this)},set:function(w){l=""+w,f.call(this,w)}}),Object.defineProperty(e,r,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(w){l=""+w},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function _r(e){e._valueTracker||(e._valueTracker=ya(e))}function Zt(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var s=r.getValue(),l="";return e&&(l=vr(e)?e.checked?"true":"false":e.value),e=l,e!==s?(r.setValue(e),!0):!1}function Pi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var xa=/[\n"\\]/g;function $e(e){return e.replace(xa,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Mo(e,r,s,l,h,f,w,b){e.name="",w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.type=w:e.removeAttribute("type"),r!=null?w==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+fe(r)):e.value!==""+fe(r)&&(e.value=""+fe(r)):w!=="submit"&&w!=="reset"||e.removeAttribute("value"),r!=null?Vo(e,w,fe(r)):s!=null?Vo(e,w,fe(s)):l!=null&&e.removeAttribute("value"),h==null&&f!=null&&(e.defaultChecked=!!f),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+fe(b):e.removeAttribute("name")}function Oo(e,r,s,l,h,f,w,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),r!=null||s!=null){if(!(f!=="submit"&&f!=="reset"||r!=null))return;s=s!=null?""+fe(s):"",r=r!=null?""+fe(r):s,b||r===e.value||(e.value=r),e.defaultValue=r}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=b?e.checked:!!l,e.defaultChecked=!!l,w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"&&(e.name=w)}function Vo(e,r,s){r==="number"&&Pi(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function wr(e,r,s,l){if(e=e.options,r){r={};for(var h=0;h<s.length;h++)r["$"+s[h]]=!0;for(s=0;s<e.length;s++)h=r.hasOwnProperty("$"+e[s].value),e[s].selected!==h&&(e[s].selected=h),h&&l&&(e[s].defaultSelected=!0)}else{for(s=""+fe(s),r=null,h=0;h<e.length;h++){if(e[h].value===s){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}r!==null||e[h].disabled||(r=e[h])}r!==null&&(r.selected=!0)}}function ju(e,r,s){if(r!=null&&(r=""+fe(r),r!==e.value&&(e.value=r),s==null)){e.defaultValue!==r&&(e.defaultValue=r);return}e.defaultValue=s!=null?""+fe(s):""}function Du(e,r,s,l){if(r==null){if(l!=null){if(s!=null)throw Error(a(92));if(Kt(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),r=s}s=fe(r),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l)}function On(e,r){if(r){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=r;return}}e.textContent=r}var Ui=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ko(e,r,s){var l=r.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="":l?e.setProperty(r,s):typeof s!="number"||s===0||Ui.has(r)?r==="float"?e.cssFloat=s:e[r]=(""+s).trim():e[r]=s+"px"}function Po(e,r,s){if(r!=null&&typeof r!="object")throw Error(a(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||r!=null&&r.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in r)l=r[h],r.hasOwnProperty(h)&&s[h]!==l&&ko(e,h,l)}else for(var f in r)r.hasOwnProperty(f)&&ko(e,f,r[f])}function ds(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nu=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Mu=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xn(e){return Mu.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Uo=null;function Lo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Er=null,cn=null;function Ou(e){var r=ci(e);if(r&&(e=r.stateNode)){var s=e[Ge]||null;t:switch(e=r.stateNode,r.type){case"input":if(Mo(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),r=s.name,s.type==="radio"&&r!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+$e(""+r)+'"][type="radio"]'),r=0;r<s.length;r++){var l=s[r];if(l!==e&&l.form===e.form){var h=l[Ge]||null;if(!h)throw Error(a(90));Mo(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(r=0;r<s.length;r++)l=s[r],l.form===e.form&&Zt(l)}break t;case"textarea":ju(e,s.value,s.defaultValue);break t;case"select":r=s.value,r!=null&&wr(e,!!s.multiple,r,!1)}}}var va=!1;function _a(e,r,s){if(va)return e(r,s);va=!0;try{var l=e(r);return l}finally{if(va=!1,(Er!==null||cn!==null)&&(bc(),Er&&(r=Er,e=cn,cn=Er=null,Ou(r),e)))for(r=0;r<e.length;r++)Ou(e[r])}}function br(e,r){var s=e.stateNode;if(s===null)return null;var l=s[Ge]||null;if(l===null)return null;s=l[r];t:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,r,typeof s));return s}var hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Li=!1;if(hn)try{var Tr={};Object.defineProperty(Tr,"passive",{get:function(){Li=!0}}),window.addEventListener("test",Tr,Tr),window.removeEventListener("test",Tr,Tr)}catch{Li=!1}var Vn=null,ie=null,fs=null;function Vu(){if(fs)return fs;var e,r=ie,s=r.length,l,h="value"in Vn?Vn.value:Vn.textContent,f=h.length;for(e=0;e<s&&r[e]===h[e];e++);var w=s-e;for(l=1;l<=w&&r[s-l]===h[f-l];l++);return fs=h.slice(e,1<l?1-l:void 0)}function wa(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function Ea(){return!0}function zo(){return!1}function Ve(e){function r(s,l,h,f,w){this._reactName=s,this._targetInst=h,this.type=l,this.nativeEvent=f,this.target=w,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(s=e[b],this[b]=s?s(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ea:zo,this.isPropagationStopped=zo,this}return v(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Ea)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Ea)},persist:function(){},isPersistent:Ea}),r}var en={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ba=Ve(en),Ta=v({},en,{view:0,detail:0}),Sa=Ve(Ta),ps,Aa,pi,Ra=v({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ys,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pi&&(pi&&e.type==="mousemove"?(ps=e.screenX-pi.screenX,Aa=e.screenY-pi.screenY):Aa=ps=0,pi=e),ps)},movementY:function(e){return"movementY"in e?e.movementY:Aa}}),Ia=Ve(Ra),vd=v({},Ra,{dataTransfer:0}),ku=Ve(vd),Ca=v({},Ta,{relatedTarget:0}),ms=Ve(Ca),Pu=v({},en,{animationName:0,elapsedTime:0,pseudoElement:0}),$o=Ve(Pu),Bo=v({},en,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Uu=Ve(Bo),gs=v({},en,{data:0}),Fo=Ve(gs),Lu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zi={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $u(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=zu[e])?!!r[e]:!1}function ys(){return $u}var Bu=v({},Ta,{key:function(e){if(e.key){var r=Lu[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=wa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zi[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ys,charCode:function(e){return e.type==="keypress"?wa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xs=Ve(Bu),dn=v({},Ra,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ko=Ve(dn),Fu=v({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ys}),Sr=Ve(Fu),c=v({},en,{propertyName:0,elapsedTime:0,pseudoElement:0}),x=Ve(c),_=v({},Ra,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),A=Ve(_),K=v({},en,{newState:0,oldState:0}),W=Ve(K),ut=[9,13,27,32],Rt=hn&&"CompositionEvent"in window,oe=null;hn&&"documentMode"in document&&(oe=document.documentMode);var Qt=hn&&"TextEvent"in window&&!oe,Ee=hn&&(!Rt||oe&&8<oe&&11>=oe),wn=" ",mi=!1;function Wn(e,r){switch(e){case"keyup":return ut.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zn(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jn=!1;function qo(e,r){switch(e){case"compositionend":return Zn(r);case"keypress":return r.which!==32?null:(mi=!0,wn);case"textInput":return e=r.data,e===wn&&mi?null:e;default:return null}}function VE(e,r){if(Jn)return e==="compositionend"||!Rt&&Wn(e,r)?(e=Vu(),fs=ie=Vn=null,Jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Ee&&r.locale!=="ko"?null:r.data;default:return null}}var kE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jg(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!kE[e.type]:r==="textarea"}function t0(e,r,s,l){Er?cn?cn.push(l):cn=[l]:Er=l,r=Cc(r,"onChange"),0<r.length&&(s=new ba("onChange","change",null,s,l),e.push({event:s,listeners:r}))}var Ho=null,Go=null;function PE(e){O1(e,0)}function Ku(e){var r=yr(e);if(Zt(r))return e}function e0(e,r){if(e==="change")return r}var n0=!1;if(hn){var _d;if(hn){var wd="oninput"in document;if(!wd){var i0=document.createElement("div");i0.setAttribute("oninput","return;"),wd=typeof i0.oninput=="function"}_d=wd}else _d=!1;n0=_d&&(!document.documentMode||9<document.documentMode)}function r0(){Ho&&(Ho.detachEvent("onpropertychange",a0),Go=Ho=null)}function a0(e){if(e.propertyName==="value"&&Ku(Go)){var r=[];t0(r,Go,e,Lo(e)),_a(PE,r)}}function UE(e,r,s){e==="focusin"?(r0(),Ho=r,Go=s,Ho.attachEvent("onpropertychange",a0)):e==="focusout"&&r0()}function LE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ku(Go)}function zE(e,r){if(e==="click")return Ku(r)}function $E(e,r){if(e==="input"||e==="change")return Ku(r)}function BE(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var En=typeof Object.is=="function"?Object.is:BE;function Yo(e,r){if(En(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var s=Object.keys(e),l=Object.keys(r);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var h=s[l];if(!ln.call(r,h)||!En(e[h],r[h]))return!1}return!0}function s0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function o0(e,r){var s=s0(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=r&&l>=r)return{node:s,offset:r-e};e=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=s0(s)}}function l0(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?l0(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function u0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var r=Pi(e.document);r instanceof e.HTMLIFrameElement;){try{var s=typeof r.contentWindow.location.href=="string"}catch{s=!1}if(s)e=r.contentWindow;else break;r=Pi(e.document)}return r}function Ed(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}var FE=hn&&"documentMode"in document&&11>=document.documentMode,vs=null,bd=null,Qo=null,Td=!1;function c0(e,r,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Td||vs==null||vs!==Pi(l)||(l=vs,"selectionStart"in l&&Ed(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Qo&&Yo(Qo,l)||(Qo=l,l=Cc(bd,"onSelect"),0<l.length&&(r=new ba("onSelect","select",null,r,s),e.push({event:r,listeners:l}),r.target=vs)))}function ja(e,r){var s={};return s[e.toLowerCase()]=r.toLowerCase(),s["Webkit"+e]="webkit"+r,s["Moz"+e]="moz"+r,s}var _s={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionrun:ja("Transition","TransitionRun"),transitionstart:ja("Transition","TransitionStart"),transitioncancel:ja("Transition","TransitionCancel"),transitionend:ja("Transition","TransitionEnd")},Sd={},h0={};hn&&(h0=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function Da(e){if(Sd[e])return Sd[e];if(!_s[e])return e;var r=_s[e],s;for(s in r)if(r.hasOwnProperty(s)&&s in h0)return Sd[e]=r[s];return e}var d0=Da("animationend"),f0=Da("animationiteration"),p0=Da("animationstart"),KE=Da("transitionrun"),qE=Da("transitionstart"),HE=Da("transitioncancel"),m0=Da("transitionend"),g0=new Map,Ad="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ad.push("scrollEnd");function ti(e,r){g0.set(e,r),hi(r,[e])}var y0=new WeakMap;function kn(e,r){if(typeof e=="object"&&e!==null){var s=y0.get(e);return s!==void 0?s:(r={value:e,source:r,stack:Qn(r)},y0.set(e,r),r)}return{value:e,source:r,stack:Qn(r)}}var Pn=[],ws=0,Rd=0;function qu(){for(var e=ws,r=Rd=ws=0;r<e;){var s=Pn[r];Pn[r++]=null;var l=Pn[r];Pn[r++]=null;var h=Pn[r];Pn[r++]=null;var f=Pn[r];if(Pn[r++]=null,l!==null&&h!==null){var w=l.pending;w===null?h.next=h:(h.next=w.next,w.next=h),l.pending=h}f!==0&&x0(s,h,f)}}function Hu(e,r,s,l){Pn[ws++]=e,Pn[ws++]=r,Pn[ws++]=s,Pn[ws++]=l,Rd|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Id(e,r,s,l){return Hu(e,r,s,l),Gu(e)}function Es(e,r){return Hu(e,null,null,r),Gu(e)}function x0(e,r,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var h=!1,f=e.return;f!==null;)f.childLanes|=s,l=f.alternate,l!==null&&(l.childLanes|=s),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(h=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,h&&r!==null&&(h=31-un(s),e=f.hiddenUpdates,l=e[h],l===null?e[h]=[r]:l.push(r),r.lane=s|536870912),f):null}function Gu(e){if(50<_l)throw _l=0,Vf=null,Error(a(185));for(var r=e.return;r!==null;)e=r,r=e.return;return e.tag===3?e.stateNode:null}var bs={};function GE(e,r,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(e,r,s,l){return new GE(e,r,s,l)}function Cd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $i(e,r){var s=e.alternate;return s===null?(s=bn(e.tag,r,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=r,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,r=e.dependencies,s.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function v0(e,r){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=r,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,r=s.dependencies,e.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),e}function Yu(e,r,s,l,h,f){var w=0;if(l=e,typeof e=="function")Cd(e)&&(w=1);else if(typeof e=="string")w=Qb(e,s,gt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case j:return e=bn(31,s,r,h),e.elementType=j,e.lanes=f,e;case M:return Na(s.children,h,f,r);case L:w=8,h|=24;break;case U:return e=bn(12,s,r,h|2),e.elementType=U,e.lanes=f,e;case Y:return e=bn(13,s,r,h),e.elementType=Y,e.lanes=f,e;case ot:return e=bn(19,s,r,h),e.elementType=ot,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case q:case tt:w=10;break t;case X:w=9;break t;case lt:w=11;break t;case C:w=14;break t;case I:w=16,l=null;break t}w=29,s=Error(a(130,e===null?"null":typeof e,"")),l=null}return r=bn(w,s,r,h),r.elementType=e,r.type=l,r.lanes=f,r}function Na(e,r,s,l){return e=bn(7,e,l,r),e.lanes=s,e}function jd(e,r,s){return e=bn(6,e,null,r),e.lanes=s,e}function Dd(e,r,s){return r=bn(4,e.children!==null?e.children:[],e.key,r),r.lanes=s,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}var Ts=[],Ss=0,Qu=null,Xu=0,Un=[],Ln=0,Ma=null,Bi=1,Fi="";function Oa(e,r){Ts[Ss++]=Xu,Ts[Ss++]=Qu,Qu=e,Xu=r}function _0(e,r,s){Un[Ln++]=Bi,Un[Ln++]=Fi,Un[Ln++]=Ma,Ma=e;var l=Bi;e=Fi;var h=32-un(l)-1;l&=~(1<<h),s+=1;var f=32-un(r)+h;if(30<f){var w=h-h%5;f=(l&(1<<w)-1).toString(32),l>>=w,h-=w,Bi=1<<32-un(r)+h|s<<h|l,Fi=f+e}else Bi=1<<f|s<<h|l,Fi=e}function Nd(e){e.return!==null&&(Oa(e,1),_0(e,1,0))}function Md(e){for(;e===Qu;)Qu=Ts[--Ss],Ts[Ss]=null,Xu=Ts[--Ss],Ts[Ss]=null;for(;e===Ma;)Ma=Un[--Ln],Un[Ln]=null,Fi=Un[--Ln],Un[Ln]=null,Bi=Un[--Ln],Un[Ln]=null}var fn=null,ye=null,qt=!1,Va=null,gi=!1,Od=Error(a(519));function ka(e){var r=Error(a(418,""));throw Zo(kn(r,e)),Od}function w0(e){var r=e.stateNode,s=e.type,l=e.memoizedProps;switch(r[_e]=e,r[Ge]=l,s){case"dialog":kt("cancel",r),kt("close",r);break;case"iframe":case"object":case"embed":kt("load",r);break;case"video":case"audio":for(s=0;s<El.length;s++)kt(El[s],r);break;case"source":kt("error",r);break;case"img":case"image":case"link":kt("error",r),kt("load",r);break;case"details":kt("toggle",r);break;case"input":kt("invalid",r),Oo(r,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),_r(r);break;case"select":kt("invalid",r);break;case"textarea":kt("invalid",r),Du(r,l.value,l.defaultValue,l.children),_r(r)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||r.textContent===""+s||l.suppressHydrationWarning===!0||U1(r.textContent,s)?(l.popover!=null&&(kt("beforetoggle",r),kt("toggle",r)),l.onScroll!=null&&kt("scroll",r),l.onScrollEnd!=null&&kt("scrollend",r),l.onClick!=null&&(r.onclick=jc),r=!0):r=!1,r||ka(e)}function E0(e){for(fn=e.return;fn;)switch(fn.tag){case 5:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:fn=fn.return}}function Xo(e){if(e!==fn)return!1;if(!qt)return E0(e),qt=!0,!1;var r=e.tag,s;if((s=r!==3&&r!==27)&&((s=r===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||Wf(e.type,e.memoizedProps)),s=!s),s&&ye&&ka(e),E0(e),r===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(r===0){ye=ni(e.nextSibling);break t}r--}else s!=="$"&&s!=="$!"&&s!=="$?"||r++;e=e.nextSibling}ye=null}}else r===27?(r=ye,$r(e.type)?(e=ep,ep=null,ye=e):ye=r):ye=fn?ni(e.stateNode.nextSibling):null;return!0}function Wo(){ye=fn=null,qt=!1}function b0(){var e=Va;return e!==null&&(yn===null?yn=e:yn.push.apply(yn,e),Va=null),e}function Zo(e){Va===null?Va=[e]:Va.push(e)}var Vd=at(null),Pa=null,Ki=null;function Ar(e,r,s){ht(Vd,r._currentValue),r._currentValue=s}function qi(e){e._currentValue=Vd.current,ct(Vd)}function kd(e,r,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),e===s)break;e=e.return}}function Pd(e,r,s,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var f=h.dependencies;if(f!==null){var w=h.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=h;for(var N=0;N<r.length;N++)if(b.context===r[N]){f.lanes|=s,b=f.alternate,b!==null&&(b.lanes|=s),kd(f.return,s,e),l||(w=null);break t}f=b.next}}else if(h.tag===18){if(w=h.return,w===null)throw Error(a(341));w.lanes|=s,f=w.alternate,f!==null&&(f.lanes|=s),kd(w,s,e),w=null}else w=h.child;if(w!==null)w.return=h;else for(w=h;w!==null;){if(w===e){w=null;break}if(h=w.sibling,h!==null){h.return=w.return,w=h;break}w=w.return}h=w}}function Jo(e,r,s,l){e=null;for(var h=r,f=!1;h!==null;){if(!f){if((h.flags&524288)!==0)f=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var w=h.alternate;if(w===null)throw Error(a(387));if(w=w.memoizedProps,w!==null){var b=h.type;En(h.pendingProps.value,w.value)||(e!==null?e.push(b):e=[b])}}else if(h===ge.current){if(w=h.alternate,w===null)throw Error(a(387));w.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(Il):e=[Il])}h=h.return}e!==null&&Pd(r,e,s,l),r.flags|=262144}function Wu(e){for(e=e.firstContext;e!==null;){if(!En(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ua(e){Pa=e,Ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function nn(e){return T0(Pa,e)}function Zu(e,r){return Pa===null&&Ua(e),T0(e,r)}function T0(e,r){var s=r._currentValue;if(r={context:r,memoizedValue:s,next:null},Ki===null){if(e===null)throw Error(a(308));Ki=r,e.dependencies={lanes:0,firstContext:r},e.flags|=524288}else Ki=Ki.next=r;return s}var YE=typeof AbortController<"u"?AbortController:function(){var e=[],r=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){r.aborted=!0,e.forEach(function(s){return s()})}},QE=n.unstable_scheduleCallback,XE=n.unstable_NormalPriority,ke={$$typeof:tt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ud(){return{controller:new YE,data:new Map,refCount:0}}function tl(e){e.refCount--,e.refCount===0&&QE(XE,function(){e.controller.abort()})}var el=null,Ld=0,As=0,Rs=null;function WE(e,r){if(el===null){var s=el=[];Ld=0,As=Bf(),Rs={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Ld++,r.then(S0,S0),r}function S0(){if(--Ld===0&&el!==null){Rs!==null&&(Rs.status="fulfilled");var e=el;el=null,As=0,Rs=null;for(var r=0;r<e.length;r++)(0,e[r])()}}function ZE(e,r){var s=[],l={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return e.then(function(){l.status="fulfilled",l.value=r;for(var h=0;h<s.length;h++)(0,s[h])(r)},function(h){for(l.status="rejected",l.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),l}var A0=J.S;J.S=function(e,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&WE(e,r),A0!==null&&A0(e,r)};var La=at(null);function zd(){var e=La.current;return e!==null?e:re.pooledCache}function Ju(e,r){r===null?ht(La,La.current):ht(La,r.pool)}function R0(){var e=zd();return e===null?null:{parent:ke._currentValue,pool:e}}var nl=Error(a(460)),I0=Error(a(474)),tc=Error(a(542)),$d={then:function(){}};function C0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ec(){}function j0(e,r,s){switch(s=e[s],s===void 0?e.push(r):s!==r&&(r.then(ec,ec),r=s),r.status){case"fulfilled":return r.value;case"rejected":throw e=r.reason,N0(e),e;default:if(typeof r.status=="string")r.then(ec,ec);else{if(e=re,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=r,e.status="pending",e.then(function(l){if(r.status==="pending"){var h=r;h.status="fulfilled",h.value=l}},function(l){if(r.status==="pending"){var h=r;h.status="rejected",h.reason=l}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw e=r.reason,N0(e),e}throw il=r,nl}}var il=null;function D0(){if(il===null)throw Error(a(459));var e=il;return il=null,e}function N0(e){if(e===nl||e===tc)throw Error(a(483))}var Rr=!1;function Bd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Fd(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ir(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Cr(e,r,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Xt&2)!==0){var h=l.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),l.pending=r,r=Gu(e),x0(e,null,s),r}return Hu(e,l,r,s),Gu(e)}function rl(e,r,s){if(r=r.updateQueue,r!==null&&(r=r.shared,(s&4194048)!==0)){var l=r.lanes;l&=e.pendingLanes,s|=l,r.lanes=s,mr(e,s)}}function Kd(e,r){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var h=null,f=null;if(s=s.firstBaseUpdate,s!==null){do{var w={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};f===null?h=f=w:f=f.next=w,s=s.next}while(s!==null);f===null?h=f=r:f=f.next=r}else h=f=r;s={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:f,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=r:e.next=r,s.lastBaseUpdate=r}var qd=!1;function al(){if(qd){var e=Rs;if(e!==null)throw e}}function sl(e,r,s,l){qd=!1;var h=e.updateQueue;Rr=!1;var f=h.firstBaseUpdate,w=h.lastBaseUpdate,b=h.shared.pending;if(b!==null){h.shared.pending=null;var N=b,H=N.next;N.next=null,w===null?f=H:w.next=H,w=N;var et=e.alternate;et!==null&&(et=et.updateQueue,b=et.lastBaseUpdate,b!==w&&(b===null?et.firstBaseUpdate=H:b.next=H,et.lastBaseUpdate=N))}if(f!==null){var rt=h.baseState;w=0,et=H=N=null,b=f;do{var G=b.lane&-536870913,Q=G!==b.lane;if(Q?(zt&G)===G:(l&G)===G){G!==0&&G===As&&(qd=!0),et!==null&&(et=et.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Tt=e,wt=b;G=r;var ee=s;switch(wt.tag){case 1:if(Tt=wt.payload,typeof Tt=="function"){rt=Tt.call(ee,rt,G);break t}rt=Tt;break t;case 3:Tt.flags=Tt.flags&-65537|128;case 0:if(Tt=wt.payload,G=typeof Tt=="function"?Tt.call(ee,rt,G):Tt,G==null)break t;rt=v({},rt,G);break t;case 2:Rr=!0}}G=b.callback,G!==null&&(e.flags|=64,Q&&(e.flags|=8192),Q=h.callbacks,Q===null?h.callbacks=[G]:Q.push(G))}else Q={lane:G,tag:b.tag,payload:b.payload,callback:b.callback,next:null},et===null?(H=et=Q,N=rt):et=et.next=Q,w|=G;if(b=b.next,b===null){if(b=h.shared.pending,b===null)break;Q=b,b=Q.next,Q.next=null,h.lastBaseUpdate=Q,h.shared.pending=null}}while(!0);et===null&&(N=rt),h.baseState=N,h.firstBaseUpdate=H,h.lastBaseUpdate=et,f===null&&(h.shared.lanes=0),Pr|=w,e.lanes=w,e.memoizedState=rt}}function M0(e,r){if(typeof e!="function")throw Error(a(191,e));e.call(r)}function O0(e,r){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)M0(s[e],r)}var Is=at(null),nc=at(0);function V0(e,r){e=Zi,ht(nc,e),ht(Is,r),Zi=e|r.baseLanes}function Hd(){ht(nc,Zi),ht(Is,Is.current)}function Gd(){Zi=nc.current,ct(Is),ct(nc)}var jr=0,Mt=null,Jt=null,Re=null,ic=!1,Cs=!1,za=!1,rc=0,ol=0,js=null,JE=0;function be(){throw Error(a(321))}function Yd(e,r){if(r===null)return!1;for(var s=0;s<r.length&&s<e.length;s++)if(!En(e[s],r[s]))return!1;return!0}function Qd(e,r,s,l,h,f){return jr=f,Mt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,J.H=e===null||e.memoizedState===null?xy:vy,za=!1,f=s(l,h),za=!1,Cs&&(f=P0(r,s,l,h)),k0(e),f}function k0(e){J.H=cc;var r=Jt!==null&&Jt.next!==null;if(jr=0,Re=Jt=Mt=null,ic=!1,ol=0,js=null,r)throw Error(a(300));e===null||Be||(e=e.dependencies,e!==null&&Wu(e)&&(Be=!0))}function P0(e,r,s,l){Mt=e;var h=0;do{if(Cs&&(js=null),ol=0,Cs=!1,25<=h)throw Error(a(301));if(h+=1,Re=Jt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}J.H=sb,f=r(s,l)}while(Cs);return f}function tb(){var e=J.H,r=e.useState()[0];return r=typeof r.then=="function"?ll(r):r,e=e.useState()[0],(Jt!==null?Jt.memoizedState:null)!==e&&(Mt.flags|=1024),r}function Xd(){var e=rc!==0;return rc=0,e}function Wd(e,r,s){r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~s}function Zd(e){if(ic){for(e=e.memoizedState;e!==null;){var r=e.queue;r!==null&&(r.pending=null),e=e.next}ic=!1}jr=0,Re=Jt=Mt=null,Cs=!1,ol=rc=0,js=null}function mn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?Mt.memoizedState=Re=e:Re=Re.next=e,Re}function Ie(){if(Jt===null){var e=Mt.alternate;e=e!==null?e.memoizedState:null}else e=Jt.next;var r=Re===null?Mt.memoizedState:Re.next;if(r!==null)Re=r,Jt=e;else{if(e===null)throw Mt.alternate===null?Error(a(467)):Error(a(310));Jt=e,e={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},Re===null?Mt.memoizedState=Re=e:Re=Re.next=e}return Re}function Jd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ll(e){var r=ol;return ol+=1,js===null&&(js=[]),e=j0(js,e,r),r=Mt,(Re===null?r.memoizedState:Re.next)===null&&(r=r.alternate,J.H=r===null||r.memoizedState===null?xy:vy),e}function ac(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ll(e);if(e.$$typeof===tt)return nn(e)}throw Error(a(438,String(e)))}function tf(e){var r=null,s=Mt.updateQueue;if(s!==null&&(r=s.memoCache),r==null){var l=Mt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(r={data:l.data.map(function(h){return h.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),s===null&&(s=Jd(),Mt.updateQueue=s),s.memoCache=r,s=r.data[r.index],s===void 0)for(s=r.data[r.index]=Array(e),l=0;l<e;l++)s[l]=O;return r.index++,s}function Hi(e,r){return typeof r=="function"?r(e):r}function sc(e){var r=Ie();return ef(r,Jt,e)}function ef(e,r,s){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var h=e.baseQueue,f=l.pending;if(f!==null){if(h!==null){var w=h.next;h.next=f.next,f.next=w}r.baseQueue=h=f,l.pending=null}if(f=e.baseState,h===null)e.memoizedState=f;else{r=h.next;var b=w=null,N=null,H=r,et=!1;do{var rt=H.lane&-536870913;if(rt!==H.lane?(zt&rt)===rt:(jr&rt)===rt){var G=H.revertLane;if(G===0)N!==null&&(N=N.next={lane:0,revertLane:0,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),rt===As&&(et=!0);else if((jr&G)===G){H=H.next,G===As&&(et=!0);continue}else rt={lane:0,revertLane:H.revertLane,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},N===null?(b=N=rt,w=f):N=N.next=rt,Mt.lanes|=G,Pr|=G;rt=H.action,za&&s(f,rt),f=H.hasEagerState?H.eagerState:s(f,rt)}else G={lane:rt,revertLane:H.revertLane,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},N===null?(b=N=G,w=f):N=N.next=G,Mt.lanes|=rt,Pr|=rt;H=H.next}while(H!==null&&H!==r);if(N===null?w=f:N.next=b,!En(f,e.memoizedState)&&(Be=!0,et&&(s=Rs,s!==null)))throw s;e.memoizedState=f,e.baseState=w,e.baseQueue=N,l.lastRenderedState=f}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function nf(e){var r=Ie(),s=r.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var l=s.dispatch,h=s.pending,f=r.memoizedState;if(h!==null){s.pending=null;var w=h=h.next;do f=e(f,w.action),w=w.next;while(w!==h);En(f,r.memoizedState)||(Be=!0),r.memoizedState=f,r.baseQueue===null&&(r.baseState=f),s.lastRenderedState=f}return[f,l]}function U0(e,r,s){var l=Mt,h=Ie(),f=qt;if(f){if(s===void 0)throw Error(a(407));s=s()}else s=r();var w=!En((Jt||h).memoizedState,s);w&&(h.memoizedState=s,Be=!0),h=h.queue;var b=$0.bind(null,l,h,e);if(ul(2048,8,b,[e]),h.getSnapshot!==r||w||Re!==null&&Re.memoizedState.tag&1){if(l.flags|=2048,Ds(9,oc(),z0.bind(null,l,h,s,r),null),re===null)throw Error(a(349));f||(jr&124)!==0||L0(l,r,s)}return s}function L0(e,r,s){e.flags|=16384,e={getSnapshot:r,value:s},r=Mt.updateQueue,r===null?(r=Jd(),Mt.updateQueue=r,r.stores=[e]):(s=r.stores,s===null?r.stores=[e]:s.push(e))}function z0(e,r,s,l){r.value=s,r.getSnapshot=l,B0(r)&&F0(e)}function $0(e,r,s){return s(function(){B0(r)&&F0(e)})}function B0(e){var r=e.getSnapshot;e=e.value;try{var s=r();return!En(e,s)}catch{return!0}}function F0(e){var r=Es(e,2);r!==null&&In(r,e,2)}function rf(e){var r=mn();if(typeof e=="function"){var s=e;if(e=s(),za){Dn(!0);try{s()}finally{Dn(!1)}}}return r.memoizedState=r.baseState=e,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:e},r}function K0(e,r,s,l){return e.baseState=s,ef(e,Jt,typeof l=="function"?l:Hi)}function eb(e,r,s,l,h){if(uc(e))throw Error(a(485));if(e=r.action,e!==null){var f={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(w){f.listeners.push(w)}};J.T!==null?s(!0):f.isTransition=!1,l(f),s=r.pending,s===null?(f.next=r.pending=f,q0(r,f)):(f.next=s.next,r.pending=s.next=f)}}function q0(e,r){var s=r.action,l=r.payload,h=e.state;if(r.isTransition){var f=J.T,w={};J.T=w;try{var b=s(h,l),N=J.S;N!==null&&N(w,b),H0(e,r,b)}catch(H){af(e,r,H)}finally{J.T=f}}else try{f=s(h,l),H0(e,r,f)}catch(H){af(e,r,H)}}function H0(e,r,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){G0(e,r,l)},function(l){return af(e,r,l)}):G0(e,r,s)}function G0(e,r,s){r.status="fulfilled",r.value=s,Y0(r),e.state=s,r=e.pending,r!==null&&(s=r.next,s===r?e.pending=null:(s=s.next,r.next=s,q0(e,s)))}function af(e,r,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do r.status="rejected",r.reason=s,Y0(r),r=r.next;while(r!==l)}e.action=null}function Y0(e){e=e.listeners;for(var r=0;r<e.length;r++)(0,e[r])()}function Q0(e,r){return r}function X0(e,r){if(qt){var s=re.formState;if(s!==null){t:{var l=Mt;if(qt){if(ye){e:{for(var h=ye,f=gi;h.nodeType!==8;){if(!f){h=null;break e}if(h=ni(h.nextSibling),h===null){h=null;break e}}f=h.data,h=f==="F!"||f==="F"?h:null}if(h){ye=ni(h.nextSibling),l=h.data==="F!";break t}}ka(l)}l=!1}l&&(r=s[0])}}return s=mn(),s.memoizedState=s.baseState=r,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Q0,lastRenderedState:r},s.queue=l,s=my.bind(null,Mt,l),l.dispatch=s,l=rf(!1),f=cf.bind(null,Mt,!1,l.queue),l=mn(),h={state:r,dispatch:null,action:e,pending:null},l.queue=h,s=eb.bind(null,Mt,h,f,s),h.dispatch=s,l.memoizedState=e,[r,s,!1]}function W0(e){var r=Ie();return Z0(r,Jt,e)}function Z0(e,r,s){if(r=ef(e,r,Q0)[0],e=sc(Hi)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var l=ll(r)}catch(w){throw w===nl?tc:w}else l=r;r=Ie();var h=r.queue,f=h.dispatch;return s!==r.memoizedState&&(Mt.flags|=2048,Ds(9,oc(),nb.bind(null,h,s),null)),[l,f,e]}function nb(e,r){e.action=r}function J0(e){var r=Ie(),s=Jt;if(s!==null)return Z0(r,s,e);Ie(),r=r.memoizedState,s=Ie();var l=s.queue.dispatch;return s.memoizedState=e,[r,l,!1]}function Ds(e,r,s,l){return e={tag:e,create:s,deps:l,inst:r,next:null},r=Mt.updateQueue,r===null&&(r=Jd(),Mt.updateQueue=r),s=r.lastEffect,s===null?r.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,r.lastEffect=e),e}function oc(){return{destroy:void 0,resource:void 0}}function ty(){return Ie().memoizedState}function lc(e,r,s,l){var h=mn();l=l===void 0?null:l,Mt.flags|=e,h.memoizedState=Ds(1|r,oc(),s,l)}function ul(e,r,s,l){var h=Ie();l=l===void 0?null:l;var f=h.memoizedState.inst;Jt!==null&&l!==null&&Yd(l,Jt.memoizedState.deps)?h.memoizedState=Ds(r,f,s,l):(Mt.flags|=e,h.memoizedState=Ds(1|r,f,s,l))}function ey(e,r){lc(8390656,8,e,r)}function ny(e,r){ul(2048,8,e,r)}function iy(e,r){return ul(4,2,e,r)}function ry(e,r){return ul(4,4,e,r)}function ay(e,r){if(typeof r=="function"){e=e();var s=r(e);return function(){typeof s=="function"?s():r(null)}}if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function sy(e,r,s){s=s!=null?s.concat([e]):null,ul(4,4,ay.bind(null,r,e),s)}function sf(){}function oy(e,r){var s=Ie();r=r===void 0?null:r;var l=s.memoizedState;return r!==null&&Yd(r,l[1])?l[0]:(s.memoizedState=[e,r],e)}function ly(e,r){var s=Ie();r=r===void 0?null:r;var l=s.memoizedState;if(r!==null&&Yd(r,l[1]))return l[0];if(l=e(),za){Dn(!0);try{e()}finally{Dn(!1)}}return s.memoizedState=[l,r],l}function of(e,r,s){return s===void 0||(jr&1073741824)!==0?e.memoizedState=r:(e.memoizedState=s,e=h1(),Mt.lanes|=e,Pr|=e,s)}function uy(e,r,s,l){return En(s,r)?s:Is.current!==null?(e=of(e,s,l),En(e,r)||(Be=!0),e):(jr&42)===0?(Be=!0,e.memoizedState=s):(e=h1(),Mt.lanes|=e,Pr|=e,r)}function cy(e,r,s,l,h){var f=dt.p;dt.p=f!==0&&8>f?f:8;var w=J.T,b={};J.T=b,cf(e,!1,r,s);try{var N=h(),H=J.S;if(H!==null&&H(b,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var et=ZE(N,l);cl(e,r,et,Rn(e))}else cl(e,r,l,Rn(e))}catch(rt){cl(e,r,{then:function(){},status:"rejected",reason:rt},Rn())}finally{dt.p=f,J.T=w}}function ib(){}function lf(e,r,s,l){if(e.tag!==5)throw Error(a(476));var h=hy(e).queue;cy(e,h,r,yt,s===null?ib:function(){return dy(e),s(l)})}function hy(e){var r=e.memoizedState;if(r!==null)return r;r={memoizedState:yt,baseState:yt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:yt},next:null};var s={};return r.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:s},next:null},e.memoizedState=r,e=e.alternate,e!==null&&(e.memoizedState=r),r}function dy(e){var r=hy(e).next.queue;cl(e,r,{},Rn())}function uf(){return nn(Il)}function fy(){return Ie().memoizedState}function py(){return Ie().memoizedState}function rb(e){for(var r=e.return;r!==null;){switch(r.tag){case 24:case 3:var s=Rn();e=Ir(s);var l=Cr(r,e,s);l!==null&&(In(l,r,s),rl(l,r,s)),r={cache:Ud()},e.payload=r;return}r=r.return}}function ab(e,r,s){var l=Rn();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},uc(e)?gy(r,s):(s=Id(e,r,s,l),s!==null&&(In(s,e,l),yy(s,r,l)))}function my(e,r,s){var l=Rn();cl(e,r,s,l)}function cl(e,r,s,l){var h={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(uc(e))gy(r,h);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=r.lastRenderedReducer,f!==null))try{var w=r.lastRenderedState,b=f(w,s);if(h.hasEagerState=!0,h.eagerState=b,En(b,w))return Hu(e,r,h,0),re===null&&qu(),!1}catch{}finally{}if(s=Id(e,r,h,l),s!==null)return In(s,e,l),yy(s,r,l),!0}return!1}function cf(e,r,s,l){if(l={lane:2,revertLane:Bf(),action:l,hasEagerState:!1,eagerState:null,next:null},uc(e)){if(r)throw Error(a(479))}else r=Id(e,s,l,2),r!==null&&In(r,e,2)}function uc(e){var r=e.alternate;return e===Mt||r!==null&&r===Mt}function gy(e,r){Cs=ic=!0;var s=e.pending;s===null?r.next=r:(r.next=s.next,s.next=r),e.pending=r}function yy(e,r,s){if((s&4194048)!==0){var l=r.lanes;l&=e.pendingLanes,s|=l,r.lanes=s,mr(e,s)}}var cc={readContext:nn,use:ac,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useLayoutEffect:be,useInsertionEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useSyncExternalStore:be,useId:be,useHostTransitionStatus:be,useFormState:be,useActionState:be,useOptimistic:be,useMemoCache:be,useCacheRefresh:be},xy={readContext:nn,use:ac,useCallback:function(e,r){return mn().memoizedState=[e,r===void 0?null:r],e},useContext:nn,useEffect:ey,useImperativeHandle:function(e,r,s){s=s!=null?s.concat([e]):null,lc(4194308,4,ay.bind(null,r,e),s)},useLayoutEffect:function(e,r){return lc(4194308,4,e,r)},useInsertionEffect:function(e,r){lc(4,2,e,r)},useMemo:function(e,r){var s=mn();r=r===void 0?null:r;var l=e();if(za){Dn(!0);try{e()}finally{Dn(!1)}}return s.memoizedState=[l,r],l},useReducer:function(e,r,s){var l=mn();if(s!==void 0){var h=s(r);if(za){Dn(!0);try{s(r)}finally{Dn(!1)}}}else h=r;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=ab.bind(null,Mt,e),[l.memoizedState,e]},useRef:function(e){var r=mn();return e={current:e},r.memoizedState=e},useState:function(e){e=rf(e);var r=e.queue,s=my.bind(null,Mt,r);return r.dispatch=s,[e.memoizedState,s]},useDebugValue:sf,useDeferredValue:function(e,r){var s=mn();return of(s,e,r)},useTransition:function(){var e=rf(!1);return e=cy.bind(null,Mt,e.queue,!0,!1),mn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,r,s){var l=Mt,h=mn();if(qt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=r(),re===null)throw Error(a(349));(zt&124)!==0||L0(l,r,s)}h.memoizedState=s;var f={value:s,getSnapshot:r};return h.queue=f,ey($0.bind(null,l,f,e),[e]),l.flags|=2048,Ds(9,oc(),z0.bind(null,l,f,s,r),null),s},useId:function(){var e=mn(),r=re.identifierPrefix;if(qt){var s=Fi,l=Bi;s=(l&~(1<<32-un(l)-1)).toString(32)+s,r="«"+r+"R"+s,s=rc++,0<s&&(r+="H"+s.toString(32)),r+="»"}else s=JE++,r="«"+r+"r"+s.toString(32)+"»";return e.memoizedState=r},useHostTransitionStatus:uf,useFormState:X0,useActionState:X0,useOptimistic:function(e){var r=mn();r.memoizedState=r.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=s,r=cf.bind(null,Mt,!0,s),s.dispatch=r,[e,r]},useMemoCache:tf,useCacheRefresh:function(){return mn().memoizedState=rb.bind(null,Mt)}},vy={readContext:nn,use:ac,useCallback:oy,useContext:nn,useEffect:ny,useImperativeHandle:sy,useInsertionEffect:iy,useLayoutEffect:ry,useMemo:ly,useReducer:sc,useRef:ty,useState:function(){return sc(Hi)},useDebugValue:sf,useDeferredValue:function(e,r){var s=Ie();return uy(s,Jt.memoizedState,e,r)},useTransition:function(){var e=sc(Hi)[0],r=Ie().memoizedState;return[typeof e=="boolean"?e:ll(e),r]},useSyncExternalStore:U0,useId:fy,useHostTransitionStatus:uf,useFormState:W0,useActionState:W0,useOptimistic:function(e,r){var s=Ie();return K0(s,Jt,e,r)},useMemoCache:tf,useCacheRefresh:py},sb={readContext:nn,use:ac,useCallback:oy,useContext:nn,useEffect:ny,useImperativeHandle:sy,useInsertionEffect:iy,useLayoutEffect:ry,useMemo:ly,useReducer:nf,useRef:ty,useState:function(){return nf(Hi)},useDebugValue:sf,useDeferredValue:function(e,r){var s=Ie();return Jt===null?of(s,e,r):uy(s,Jt.memoizedState,e,r)},useTransition:function(){var e=nf(Hi)[0],r=Ie().memoizedState;return[typeof e=="boolean"?e:ll(e),r]},useSyncExternalStore:U0,useId:fy,useHostTransitionStatus:uf,useFormState:J0,useActionState:J0,useOptimistic:function(e,r){var s=Ie();return Jt!==null?K0(s,Jt,e,r):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:tf,useCacheRefresh:py},Ns=null,hl=0;function hc(e){var r=hl;return hl+=1,Ns===null&&(Ns=[]),j0(Ns,e,r)}function dl(e,r){r=r.props.ref,e.ref=r!==void 0?r:null}function dc(e,r){throw r.$$typeof===E?Error(a(525)):(e=Object.prototype.toString.call(r),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e)))}function _y(e){var r=e._init;return r(e._payload)}function wy(e){function r($,P){if(e){var F=$.deletions;F===null?($.deletions=[P],$.flags|=16):F.push(P)}}function s($,P){if(!e)return null;for(;P!==null;)r($,P),P=P.sibling;return null}function l($){for(var P=new Map;$!==null;)$.key!==null?P.set($.key,$):P.set($.index,$),$=$.sibling;return P}function h($,P){return $=$i($,P),$.index=0,$.sibling=null,$}function f($,P,F){return $.index=F,e?(F=$.alternate,F!==null?(F=F.index,F<P?($.flags|=67108866,P):F):($.flags|=67108866,P)):($.flags|=1048576,P)}function w($){return e&&$.alternate===null&&($.flags|=67108866),$}function b($,P,F,nt){return P===null||P.tag!==6?(P=jd(F,$.mode,nt),P.return=$,P):(P=h(P,F),P.return=$,P)}function N($,P,F,nt){var mt=F.type;return mt===M?et($,P,F.props.children,nt,F.key):P!==null&&(P.elementType===mt||typeof mt=="object"&&mt!==null&&mt.$$typeof===I&&_y(mt)===P.type)?(P=h(P,F.props),dl(P,F),P.return=$,P):(P=Yu(F.type,F.key,F.props,null,$.mode,nt),dl(P,F),P.return=$,P)}function H($,P,F,nt){return P===null||P.tag!==4||P.stateNode.containerInfo!==F.containerInfo||P.stateNode.implementation!==F.implementation?(P=Dd(F,$.mode,nt),P.return=$,P):(P=h(P,F.children||[]),P.return=$,P)}function et($,P,F,nt,mt){return P===null||P.tag!==7?(P=Na(F,$.mode,nt,mt),P.return=$,P):(P=h(P,F),P.return=$,P)}function rt($,P,F){if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return P=jd(""+P,$.mode,F),P.return=$,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case S:return F=Yu(P.type,P.key,P.props,null,$.mode,F),dl(F,P),F.return=$,F;case R:return P=Dd(P,$.mode,F),P.return=$,P;case I:var nt=P._init;return P=nt(P._payload),rt($,P,F)}if(Kt(P)||z(P))return P=Na(P,$.mode,F,null),P.return=$,P;if(typeof P.then=="function")return rt($,hc(P),F);if(P.$$typeof===tt)return rt($,Zu($,P),F);dc($,P)}return null}function G($,P,F,nt){var mt=P!==null?P.key:null;if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return mt!==null?null:b($,P,""+F,nt);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case S:return F.key===mt?N($,P,F,nt):null;case R:return F.key===mt?H($,P,F,nt):null;case I:return mt=F._init,F=mt(F._payload),G($,P,F,nt)}if(Kt(F)||z(F))return mt!==null?null:et($,P,F,nt,null);if(typeof F.then=="function")return G($,P,hc(F),nt);if(F.$$typeof===tt)return G($,P,Zu($,F),nt);dc($,F)}return null}function Q($,P,F,nt,mt){if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return $=$.get(F)||null,b(P,$,""+nt,mt);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case S:return $=$.get(nt.key===null?F:nt.key)||null,N(P,$,nt,mt);case R:return $=$.get(nt.key===null?F:nt.key)||null,H(P,$,nt,mt);case I:var Ot=nt._init;return nt=Ot(nt._payload),Q($,P,F,nt,mt)}if(Kt(nt)||z(nt))return $=$.get(F)||null,et(P,$,nt,mt,null);if(typeof nt.then=="function")return Q($,P,F,hc(nt),mt);if(nt.$$typeof===tt)return Q($,P,F,Zu(P,nt),mt);dc(P,nt)}return null}function Tt($,P,F,nt){for(var mt=null,Ot=null,xt=P,Et=P=0,Ke=null;xt!==null&&Et<F.length;Et++){xt.index>Et?(Ke=xt,xt=null):Ke=xt.sibling;var Ft=G($,xt,F[Et],nt);if(Ft===null){xt===null&&(xt=Ke);break}e&&xt&&Ft.alternate===null&&r($,xt),P=f(Ft,P,Et),Ot===null?mt=Ft:Ot.sibling=Ft,Ot=Ft,xt=Ke}if(Et===F.length)return s($,xt),qt&&Oa($,Et),mt;if(xt===null){for(;Et<F.length;Et++)xt=rt($,F[Et],nt),xt!==null&&(P=f(xt,P,Et),Ot===null?mt=xt:Ot.sibling=xt,Ot=xt);return qt&&Oa($,Et),mt}for(xt=l(xt);Et<F.length;Et++)Ke=Q(xt,$,Et,F[Et],nt),Ke!==null&&(e&&Ke.alternate!==null&&xt.delete(Ke.key===null?Et:Ke.key),P=f(Ke,P,Et),Ot===null?mt=Ke:Ot.sibling=Ke,Ot=Ke);return e&&xt.forEach(function(Hr){return r($,Hr)}),qt&&Oa($,Et),mt}function wt($,P,F,nt){if(F==null)throw Error(a(151));for(var mt=null,Ot=null,xt=P,Et=P=0,Ke=null,Ft=F.next();xt!==null&&!Ft.done;Et++,Ft=F.next()){xt.index>Et?(Ke=xt,xt=null):Ke=xt.sibling;var Hr=G($,xt,Ft.value,nt);if(Hr===null){xt===null&&(xt=Ke);break}e&&xt&&Hr.alternate===null&&r($,xt),P=f(Hr,P,Et),Ot===null?mt=Hr:Ot.sibling=Hr,Ot=Hr,xt=Ke}if(Ft.done)return s($,xt),qt&&Oa($,Et),mt;if(xt===null){for(;!Ft.done;Et++,Ft=F.next())Ft=rt($,Ft.value,nt),Ft!==null&&(P=f(Ft,P,Et),Ot===null?mt=Ft:Ot.sibling=Ft,Ot=Ft);return qt&&Oa($,Et),mt}for(xt=l(xt);!Ft.done;Et++,Ft=F.next())Ft=Q(xt,$,Et,Ft.value,nt),Ft!==null&&(e&&Ft.alternate!==null&&xt.delete(Ft.key===null?Et:Ft.key),P=f(Ft,P,Et),Ot===null?mt=Ft:Ot.sibling=Ft,Ot=Ft);return e&&xt.forEach(function(oT){return r($,oT)}),qt&&Oa($,Et),mt}function ee($,P,F,nt){if(typeof F=="object"&&F!==null&&F.type===M&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case S:t:{for(var mt=F.key;P!==null;){if(P.key===mt){if(mt=F.type,mt===M){if(P.tag===7){s($,P.sibling),nt=h(P,F.props.children),nt.return=$,$=nt;break t}}else if(P.elementType===mt||typeof mt=="object"&&mt!==null&&mt.$$typeof===I&&_y(mt)===P.type){s($,P.sibling),nt=h(P,F.props),dl(nt,F),nt.return=$,$=nt;break t}s($,P);break}else r($,P);P=P.sibling}F.type===M?(nt=Na(F.props.children,$.mode,nt,F.key),nt.return=$,$=nt):(nt=Yu(F.type,F.key,F.props,null,$.mode,nt),dl(nt,F),nt.return=$,$=nt)}return w($);case R:t:{for(mt=F.key;P!==null;){if(P.key===mt)if(P.tag===4&&P.stateNode.containerInfo===F.containerInfo&&P.stateNode.implementation===F.implementation){s($,P.sibling),nt=h(P,F.children||[]),nt.return=$,$=nt;break t}else{s($,P);break}else r($,P);P=P.sibling}nt=Dd(F,$.mode,nt),nt.return=$,$=nt}return w($);case I:return mt=F._init,F=mt(F._payload),ee($,P,F,nt)}if(Kt(F))return Tt($,P,F,nt);if(z(F)){if(mt=z(F),typeof mt!="function")throw Error(a(150));return F=mt.call(F),wt($,P,F,nt)}if(typeof F.then=="function")return ee($,P,hc(F),nt);if(F.$$typeof===tt)return ee($,P,Zu($,F),nt);dc($,F)}return typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint"?(F=""+F,P!==null&&P.tag===6?(s($,P.sibling),nt=h(P,F),nt.return=$,$=nt):(s($,P),nt=jd(F,$.mode,nt),nt.return=$,$=nt),w($)):s($,P)}return function($,P,F,nt){try{hl=0;var mt=ee($,P,F,nt);return Ns=null,mt}catch(xt){if(xt===nl||xt===tc)throw xt;var Ot=bn(29,xt,null,$.mode);return Ot.lanes=nt,Ot.return=$,Ot}finally{}}}var Ms=wy(!0),Ey=wy(!1),zn=at(null),yi=null;function Dr(e){var r=e.alternate;ht(Pe,Pe.current&1),ht(zn,e),yi===null&&(r===null||Is.current!==null||r.memoizedState!==null)&&(yi=e)}function by(e){if(e.tag===22){if(ht(Pe,Pe.current),ht(zn,e),yi===null){var r=e.alternate;r!==null&&r.memoizedState!==null&&(yi=e)}}else Nr()}function Nr(){ht(Pe,Pe.current),ht(zn,zn.current)}function Gi(e){ct(zn),yi===e&&(yi=null),ct(Pe)}var Pe=at(0);function fc(e){for(var r=e;r!==null;){if(r.tag===13){var s=r.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||tp(s)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function hf(e,r,s,l){r=e.memoizedState,s=s(l,r),s=s==null?r:v({},r,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var df={enqueueSetState:function(e,r,s){e=e._reactInternals;var l=Rn(),h=Ir(l);h.payload=r,s!=null&&(h.callback=s),r=Cr(e,h,l),r!==null&&(In(r,e,l),rl(r,e,l))},enqueueReplaceState:function(e,r,s){e=e._reactInternals;var l=Rn(),h=Ir(l);h.tag=1,h.payload=r,s!=null&&(h.callback=s),r=Cr(e,h,l),r!==null&&(In(r,e,l),rl(r,e,l))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var s=Rn(),l=Ir(s);l.tag=2,r!=null&&(l.callback=r),r=Cr(e,l,s),r!==null&&(In(r,e,s),rl(r,e,s))}};function Ty(e,r,s,l,h,f,w){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,f,w):r.prototype&&r.prototype.isPureReactComponent?!Yo(s,l)||!Yo(h,f):!0}function Sy(e,r,s,l){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(s,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(s,l),r.state!==e&&df.enqueueReplaceState(r,r.state,null)}function $a(e,r){var s=r;if("ref"in r){s={};for(var l in r)l!=="ref"&&(s[l]=r[l])}if(e=e.defaultProps){s===r&&(s=v({},s));for(var h in e)s[h]===void 0&&(s[h]=e[h])}return s}var pc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Ay(e){pc(e)}function Ry(e){console.error(e)}function Iy(e){pc(e)}function mc(e,r){try{var s=e.onUncaughtError;s(r.value,{componentStack:r.stack})}catch(l){setTimeout(function(){throw l})}}function Cy(e,r,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function ff(e,r,s){return s=Ir(s),s.tag=3,s.payload={element:null},s.callback=function(){mc(e,r)},s}function jy(e){return e=Ir(e),e.tag=3,e}function Dy(e,r,s,l){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var f=l.value;e.payload=function(){return h(f)},e.callback=function(){Cy(r,s,l)}}var w=s.stateNode;w!==null&&typeof w.componentDidCatch=="function"&&(e.callback=function(){Cy(r,s,l),typeof h!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var b=l.stack;this.componentDidCatch(l.value,{componentStack:b!==null?b:""})})}function ob(e,r,s,l,h){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(r=s.alternate,r!==null&&Jo(r,s,h,!0),s=zn.current,s!==null){switch(s.tag){case 13:return yi===null?Pf():s.alternate===null&&xe===0&&(xe=3),s.flags&=-257,s.flags|=65536,s.lanes=h,l===$d?s.flags|=16384:(r=s.updateQueue,r===null?s.updateQueue=new Set([l]):r.add(l),Lf(e,l,h)),!1;case 22:return s.flags|=65536,l===$d?s.flags|=16384:(r=s.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=r):(s=r.retryQueue,s===null?r.retryQueue=new Set([l]):s.add(l)),Lf(e,l,h)),!1}throw Error(a(435,s.tag))}return Lf(e,l,h),Pf(),!1}if(qt)return r=zn.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=h,l!==Od&&(e=Error(a(422),{cause:l}),Zo(kn(e,s)))):(l!==Od&&(r=Error(a(423),{cause:l}),Zo(kn(r,s))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=kn(l,s),h=ff(e.stateNode,l,h),Kd(e,h),xe!==4&&(xe=2)),!1;var f=Error(a(520),{cause:l});if(f=kn(f,s),vl===null?vl=[f]:vl.push(f),xe!==4&&(xe=2),r===null)return!0;l=kn(l,s),s=r;do{switch(s.tag){case 3:return s.flags|=65536,e=h&-h,s.lanes|=e,e=ff(s.stateNode,l,e),Kd(s,e),!1;case 1:if(r=s.type,f=s.stateNode,(s.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ur===null||!Ur.has(f))))return s.flags|=65536,h&=-h,s.lanes|=h,h=jy(h),Dy(h,e,s,l),Kd(s,h),!1}s=s.return}while(s!==null);return!1}var Ny=Error(a(461)),Be=!1;function Ye(e,r,s,l){r.child=e===null?Ey(r,null,s,l):Ms(r,e.child,s,l)}function My(e,r,s,l,h){s=s.render;var f=r.ref;if("ref"in l){var w={};for(var b in l)b!=="ref"&&(w[b]=l[b])}else w=l;return Ua(r),l=Qd(e,r,s,w,f,h),b=Xd(),e!==null&&!Be?(Wd(e,r,h),Yi(e,r,h)):(qt&&b&&Nd(r),r.flags|=1,Ye(e,r,l,h),r.child)}function Oy(e,r,s,l,h){if(e===null){var f=s.type;return typeof f=="function"&&!Cd(f)&&f.defaultProps===void 0&&s.compare===null?(r.tag=15,r.type=f,Vy(e,r,f,l,h)):(e=Yu(s.type,null,l,r,r.mode,h),e.ref=r.ref,e.return=r,r.child=e)}if(f=e.child,!wf(e,h)){var w=f.memoizedProps;if(s=s.compare,s=s!==null?s:Yo,s(w,l)&&e.ref===r.ref)return Yi(e,r,h)}return r.flags|=1,e=$i(f,l),e.ref=r.ref,e.return=r,r.child=e}function Vy(e,r,s,l,h){if(e!==null){var f=e.memoizedProps;if(Yo(f,l)&&e.ref===r.ref)if(Be=!1,r.pendingProps=l=f,wf(e,h))(e.flags&131072)!==0&&(Be=!0);else return r.lanes=e.lanes,Yi(e,r,h)}return pf(e,r,s,l,h)}function ky(e,r,s){var l=r.pendingProps,h=l.children,f=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((r.flags&128)!==0){if(l=f!==null?f.baseLanes|s:s,e!==null){for(h=r.child=e.child,f=0;h!==null;)f=f|h.lanes|h.childLanes,h=h.sibling;r.childLanes=f&~l}else r.childLanes=0,r.child=null;return Py(e,r,l,s)}if((s&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ju(r,f!==null?f.cachePool:null),f!==null?V0(r,f):Hd(),by(r);else return r.lanes=r.childLanes=536870912,Py(e,r,f!==null?f.baseLanes|s:s,s)}else f!==null?(Ju(r,f.cachePool),V0(r,f),Nr(),r.memoizedState=null):(e!==null&&Ju(r,null),Hd(),Nr());return Ye(e,r,h,s),r.child}function Py(e,r,s,l){var h=zd();return h=h===null?null:{parent:ke._currentValue,pool:h},r.memoizedState={baseLanes:s,cachePool:h},e!==null&&Ju(r,null),Hd(),by(r),e!==null&&Jo(e,r,l,!0),null}function gc(e,r){var s=r.ref;if(s===null)e!==null&&e.ref!==null&&(r.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(r.flags|=4194816)}}function pf(e,r,s,l,h){return Ua(r),s=Qd(e,r,s,l,void 0,h),l=Xd(),e!==null&&!Be?(Wd(e,r,h),Yi(e,r,h)):(qt&&l&&Nd(r),r.flags|=1,Ye(e,r,s,h),r.child)}function Uy(e,r,s,l,h,f){return Ua(r),r.updateQueue=null,s=P0(r,l,s,h),k0(e),l=Xd(),e!==null&&!Be?(Wd(e,r,f),Yi(e,r,f)):(qt&&l&&Nd(r),r.flags|=1,Ye(e,r,s,f),r.child)}function Ly(e,r,s,l,h){if(Ua(r),r.stateNode===null){var f=bs,w=s.contextType;typeof w=="object"&&w!==null&&(f=nn(w)),f=new s(l,f),r.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=df,r.stateNode=f,f._reactInternals=r,f=r.stateNode,f.props=l,f.state=r.memoizedState,f.refs={},Bd(r),w=s.contextType,f.context=typeof w=="object"&&w!==null?nn(w):bs,f.state=r.memoizedState,w=s.getDerivedStateFromProps,typeof w=="function"&&(hf(r,s,w,l),f.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(w=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),w!==f.state&&df.enqueueReplaceState(f,f.state,null),sl(r,l,f,h),al(),f.state=r.memoizedState),typeof f.componentDidMount=="function"&&(r.flags|=4194308),l=!0}else if(e===null){f=r.stateNode;var b=r.memoizedProps,N=$a(s,b);f.props=N;var H=f.context,et=s.contextType;w=bs,typeof et=="object"&&et!==null&&(w=nn(et));var rt=s.getDerivedStateFromProps;et=typeof rt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=r.pendingProps!==b,et||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||H!==w)&&Sy(r,f,l,w),Rr=!1;var G=r.memoizedState;f.state=G,sl(r,l,f,h),al(),H=r.memoizedState,b||G!==H||Rr?(typeof rt=="function"&&(hf(r,s,rt,l),H=r.memoizedState),(N=Rr||Ty(r,s,N,l,G,H,w))?(et||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(r.flags|=4194308)):(typeof f.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=H),f.props=l,f.state=H,f.context=w,l=N):(typeof f.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{f=r.stateNode,Fd(e,r),w=r.memoizedProps,et=$a(s,w),f.props=et,rt=r.pendingProps,G=f.context,H=s.contextType,N=bs,typeof H=="object"&&H!==null&&(N=nn(H)),b=s.getDerivedStateFromProps,(H=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(w!==rt||G!==N)&&Sy(r,f,l,N),Rr=!1,G=r.memoizedState,f.state=G,sl(r,l,f,h),al();var Q=r.memoizedState;w!==rt||G!==Q||Rr||e!==null&&e.dependencies!==null&&Wu(e.dependencies)?(typeof b=="function"&&(hf(r,s,b,l),Q=r.memoizedState),(et=Rr||Ty(r,s,et,l,G,Q,N)||e!==null&&e.dependencies!==null&&Wu(e.dependencies))?(H||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(l,Q,N),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(l,Q,N)),typeof f.componentDidUpdate=="function"&&(r.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof f.componentDidUpdate!="function"||w===e.memoizedProps&&G===e.memoizedState||(r.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&G===e.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=Q),f.props=l,f.state=Q,f.context=N,l=et):(typeof f.componentDidUpdate!="function"||w===e.memoizedProps&&G===e.memoizedState||(r.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&G===e.memoizedState||(r.flags|=1024),l=!1)}return f=l,gc(e,r),l=(r.flags&128)!==0,f||l?(f=r.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:f.render(),r.flags|=1,e!==null&&l?(r.child=Ms(r,e.child,null,h),r.child=Ms(r,null,s,h)):Ye(e,r,s,h),r.memoizedState=f.state,e=r.child):e=Yi(e,r,h),e}function zy(e,r,s,l){return Wo(),r.flags|=256,Ye(e,r,s,l),r.child}var mf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function gf(e){return{baseLanes:e,cachePool:R0()}}function yf(e,r,s){return e=e!==null?e.childLanes&~s:0,r&&(e|=$n),e}function $y(e,r,s){var l=r.pendingProps,h=!1,f=(r.flags&128)!==0,w;if((w=f)||(w=e!==null&&e.memoizedState===null?!1:(Pe.current&2)!==0),w&&(h=!0,r.flags&=-129),w=(r.flags&32)!==0,r.flags&=-33,e===null){if(qt){if(h?Dr(r):Nr(),qt){var b=ye,N;if(N=b){t:{for(N=b,b=gi;N.nodeType!==8;){if(!b){b=null;break t}if(N=ni(N.nextSibling),N===null){b=null;break t}}b=N}b!==null?(r.memoizedState={dehydrated:b,treeContext:Ma!==null?{id:Bi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},N=bn(18,null,null,0),N.stateNode=b,N.return=r,r.child=N,fn=r,ye=null,N=!0):N=!1}N||ka(r)}if(b=r.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return tp(b)?r.lanes=32:r.lanes=536870912,null;Gi(r)}return b=l.children,l=l.fallback,h?(Nr(),h=r.mode,b=yc({mode:"hidden",children:b},h),l=Na(l,h,s,null),b.return=r,l.return=r,b.sibling=l,r.child=b,h=r.child,h.memoizedState=gf(s),h.childLanes=yf(e,w,s),r.memoizedState=mf,l):(Dr(r),xf(r,b))}if(N=e.memoizedState,N!==null&&(b=N.dehydrated,b!==null)){if(f)r.flags&256?(Dr(r),r.flags&=-257,r=vf(e,r,s)):r.memoizedState!==null?(Nr(),r.child=e.child,r.flags|=128,r=null):(Nr(),h=l.fallback,b=r.mode,l=yc({mode:"visible",children:l.children},b),h=Na(h,b,s,null),h.flags|=2,l.return=r,h.return=r,l.sibling=h,r.child=l,Ms(r,e.child,null,s),l=r.child,l.memoizedState=gf(s),l.childLanes=yf(e,w,s),r.memoizedState=mf,r=h);else if(Dr(r),tp(b)){if(w=b.nextSibling&&b.nextSibling.dataset,w)var H=w.dgst;w=H,l=Error(a(419)),l.stack="",l.digest=w,Zo({value:l,source:null,stack:null}),r=vf(e,r,s)}else if(Be||Jo(e,r,s,!1),w=(s&e.childLanes)!==0,Be||w){if(w=re,w!==null&&(l=s&-s,l=(l&42)!==0?1:Do(l),l=(l&(w.suspendedLanes|s))!==0?0:l,l!==0&&l!==N.retryLane))throw N.retryLane=l,Es(e,l),In(w,e,l),Ny;b.data==="$?"||Pf(),r=vf(e,r,s)}else b.data==="$?"?(r.flags|=192,r.child=e.child,r=null):(e=N.treeContext,ye=ni(b.nextSibling),fn=r,qt=!0,Va=null,gi=!1,e!==null&&(Un[Ln++]=Bi,Un[Ln++]=Fi,Un[Ln++]=Ma,Bi=e.id,Fi=e.overflow,Ma=r),r=xf(r,l.children),r.flags|=4096);return r}return h?(Nr(),h=l.fallback,b=r.mode,N=e.child,H=N.sibling,l=$i(N,{mode:"hidden",children:l.children}),l.subtreeFlags=N.subtreeFlags&65011712,H!==null?h=$i(H,h):(h=Na(h,b,s,null),h.flags|=2),h.return=r,l.return=r,l.sibling=h,r.child=l,l=h,h=r.child,b=e.child.memoizedState,b===null?b=gf(s):(N=b.cachePool,N!==null?(H=ke._currentValue,N=N.parent!==H?{parent:H,pool:H}:N):N=R0(),b={baseLanes:b.baseLanes|s,cachePool:N}),h.memoizedState=b,h.childLanes=yf(e,w,s),r.memoizedState=mf,l):(Dr(r),s=e.child,e=s.sibling,s=$i(s,{mode:"visible",children:l.children}),s.return=r,s.sibling=null,e!==null&&(w=r.deletions,w===null?(r.deletions=[e],r.flags|=16):w.push(e)),r.child=s,r.memoizedState=null,s)}function xf(e,r){return r=yc({mode:"visible",children:r},e.mode),r.return=e,e.child=r}function yc(e,r){return e=bn(22,e,null,r),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function vf(e,r,s){return Ms(r,e.child,null,s),e=xf(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function By(e,r,s){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r),kd(e.return,r,s)}function _f(e,r,s,l,h){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:h}:(f.isBackwards=r,f.rendering=null,f.renderingStartTime=0,f.last=l,f.tail=s,f.tailMode=h)}function Fy(e,r,s){var l=r.pendingProps,h=l.revealOrder,f=l.tail;if(Ye(e,r,l.children,s),l=Pe.current,(l&2)!==0)l=l&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&By(e,s,r);else if(e.tag===19)By(e,s,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break t;for(;e.sibling===null;){if(e.return===null||e.return===r)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(ht(Pe,l),h){case"forwards":for(s=r.child,h=null;s!==null;)e=s.alternate,e!==null&&fc(e)===null&&(h=s),s=s.sibling;s=h,s===null?(h=r.child,r.child=null):(h=s.sibling,s.sibling=null),_f(r,!1,h,s,f);break;case"backwards":for(s=null,h=r.child,r.child=null;h!==null;){if(e=h.alternate,e!==null&&fc(e)===null){r.child=h;break}e=h.sibling,h.sibling=s,s=h,h=e}_f(r,!0,s,null,f);break;case"together":_f(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Yi(e,r,s){if(e!==null&&(r.dependencies=e.dependencies),Pr|=r.lanes,(s&r.childLanes)===0)if(e!==null){if(Jo(e,r,s,!1),(s&r.childLanes)===0)return null}else return null;if(e!==null&&r.child!==e.child)throw Error(a(153));if(r.child!==null){for(e=r.child,s=$i(e,e.pendingProps),r.child=s,s.return=r;e.sibling!==null;)e=e.sibling,s=s.sibling=$i(e,e.pendingProps),s.return=r;s.sibling=null}return r.child}function wf(e,r){return(e.lanes&r)!==0?!0:(e=e.dependencies,!!(e!==null&&Wu(e)))}function lb(e,r,s){switch(r.tag){case 3:Lt(r,r.stateNode.containerInfo),Ar(r,ke,e.memoizedState.cache),Wo();break;case 27:case 5:Ni(r);break;case 4:Lt(r,r.stateNode.containerInfo);break;case 10:Ar(r,r.type,r.memoizedProps.value);break;case 13:var l=r.memoizedState;if(l!==null)return l.dehydrated!==null?(Dr(r),r.flags|=128,null):(s&r.child.childLanes)!==0?$y(e,r,s):(Dr(r),e=Yi(e,r,s),e!==null?e.sibling:null);Dr(r);break;case 19:var h=(e.flags&128)!==0;if(l=(s&r.childLanes)!==0,l||(Jo(e,r,s,!1),l=(s&r.childLanes)!==0),h){if(l)return Fy(e,r,s);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),ht(Pe,Pe.current),l)break;return null;case 22:case 23:return r.lanes=0,ky(e,r,s);case 24:Ar(r,ke,e.memoizedState.cache)}return Yi(e,r,s)}function Ky(e,r,s){if(e!==null)if(e.memoizedProps!==r.pendingProps)Be=!0;else{if(!wf(e,s)&&(r.flags&128)===0)return Be=!1,lb(e,r,s);Be=(e.flags&131072)!==0}else Be=!1,qt&&(r.flags&1048576)!==0&&_0(r,Xu,r.index);switch(r.lanes=0,r.tag){case 16:t:{e=r.pendingProps;var l=r.elementType,h=l._init;if(l=h(l._payload),r.type=l,typeof l=="function")Cd(l)?(e=$a(l,e),r.tag=1,r=Ly(null,r,l,e,s)):(r.tag=0,r=pf(null,r,l,e,s));else{if(l!=null){if(h=l.$$typeof,h===lt){r.tag=11,r=My(null,r,l,e,s);break t}else if(h===C){r.tag=14,r=Oy(null,r,l,e,s);break t}}throw r=se(l)||l,Error(a(306,r,""))}}return r;case 0:return pf(e,r,r.type,r.pendingProps,s);case 1:return l=r.type,h=$a(l,r.pendingProps),Ly(e,r,l,h,s);case 3:t:{if(Lt(r,r.stateNode.containerInfo),e===null)throw Error(a(387));l=r.pendingProps;var f=r.memoizedState;h=f.element,Fd(e,r),sl(r,l,null,s);var w=r.memoizedState;if(l=w.cache,Ar(r,ke,l),l!==f.cache&&Pd(r,[ke],s,!0),al(),l=w.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:w.cache},r.updateQueue.baseState=f,r.memoizedState=f,r.flags&256){r=zy(e,r,l,s);break t}else if(l!==h){h=kn(Error(a(424)),r),Zo(h),r=zy(e,r,l,s);break t}else{switch(e=r.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ye=ni(e.firstChild),fn=r,qt=!0,Va=null,gi=!0,s=Ey(r,null,l,s),r.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Wo(),l===h){r=Yi(e,r,s);break t}Ye(e,r,l,s)}r=r.child}return r;case 26:return gc(e,r),e===null?(s=Y1(r.type,null,r.pendingProps,null))?r.memoizedState=s:qt||(s=r.type,e=r.pendingProps,l=Dc(_t.current).createElement(s),l[_e]=r,l[Ge]=e,Xe(l,s,e),we(l),r.stateNode=l):r.memoizedState=Y1(r.type,e.memoizedProps,r.pendingProps,e.memoizedState),null;case 27:return Ni(r),e===null&&qt&&(l=r.stateNode=q1(r.type,r.pendingProps,_t.current),fn=r,gi=!0,h=ye,$r(r.type)?(ep=h,ye=ni(l.firstChild)):ye=h),Ye(e,r,r.pendingProps.children,s),gc(e,r),e===null&&(r.flags|=4194304),r.child;case 5:return e===null&&qt&&((h=l=ye)&&(l=kb(l,r.type,r.pendingProps,gi),l!==null?(r.stateNode=l,fn=r,ye=ni(l.firstChild),gi=!1,h=!0):h=!1),h||ka(r)),Ni(r),h=r.type,f=r.pendingProps,w=e!==null?e.memoizedProps:null,l=f.children,Wf(h,f)?l=null:w!==null&&Wf(h,w)&&(r.flags|=32),r.memoizedState!==null&&(h=Qd(e,r,tb,null,null,s),Il._currentValue=h),gc(e,r),Ye(e,r,l,s),r.child;case 6:return e===null&&qt&&((e=s=ye)&&(s=Pb(s,r.pendingProps,gi),s!==null?(r.stateNode=s,fn=r,ye=null,e=!0):e=!1),e||ka(r)),null;case 13:return $y(e,r,s);case 4:return Lt(r,r.stateNode.containerInfo),l=r.pendingProps,e===null?r.child=Ms(r,null,l,s):Ye(e,r,l,s),r.child;case 11:return My(e,r,r.type,r.pendingProps,s);case 7:return Ye(e,r,r.pendingProps,s),r.child;case 8:return Ye(e,r,r.pendingProps.children,s),r.child;case 12:return Ye(e,r,r.pendingProps.children,s),r.child;case 10:return l=r.pendingProps,Ar(r,r.type,l.value),Ye(e,r,l.children,s),r.child;case 9:return h=r.type._context,l=r.pendingProps.children,Ua(r),h=nn(h),l=l(h),r.flags|=1,Ye(e,r,l,s),r.child;case 14:return Oy(e,r,r.type,r.pendingProps,s);case 15:return Vy(e,r,r.type,r.pendingProps,s);case 19:return Fy(e,r,s);case 31:return l=r.pendingProps,s=r.mode,l={mode:l.mode,children:l.children},e===null?(s=yc(l,s),s.ref=r.ref,r.child=s,s.return=r,r=s):(s=$i(e.child,l),s.ref=r.ref,r.child=s,s.return=r,r=s),r;case 22:return ky(e,r,s);case 24:return Ua(r),l=nn(ke),e===null?(h=zd(),h===null&&(h=re,f=Ud(),h.pooledCache=f,f.refCount++,f!==null&&(h.pooledCacheLanes|=s),h=f),r.memoizedState={parent:l,cache:h},Bd(r),Ar(r,ke,h)):((e.lanes&s)!==0&&(Fd(e,r),sl(r,null,null,s),al()),h=e.memoizedState,f=r.memoizedState,h.parent!==l?(h={parent:l,cache:l},r.memoizedState=h,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=h),Ar(r,ke,l)):(l=f.cache,Ar(r,ke,l),l!==h.cache&&Pd(r,[ke],s,!0))),Ye(e,r,r.pendingProps.children,s),r.child;case 29:throw r.pendingProps}throw Error(a(156,r.tag))}function Qi(e){e.flags|=4}function qy(e,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!J1(r)){if(r=zn.current,r!==null&&((zt&4194048)===zt?yi!==null:(zt&62914560)!==zt&&(zt&536870912)===0||r!==yi))throw il=$d,I0;e.flags|=8192}}function xc(e,r){r!==null&&(e.flags|=4),e.flags&16384&&(r=e.tag!==22?fr():536870912,e.lanes|=r,Ps|=r)}function fl(e,r){if(!qt)switch(e.tailMode){case"hidden":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function pe(e){var r=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(r)for(var h=e.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=s,r}function ub(e,r,s){var l=r.pendingProps;switch(Md(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(r),null;case 1:return pe(r),null;case 3:return s=r.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),r.memoizedState.cache!==l&&(r.flags|=2048),qi(ke),Me(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Xo(r)?Qi(r):e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,b0())),pe(r),null;case 26:return s=r.memoizedState,e===null?(Qi(r),s!==null?(pe(r),qy(r,s)):(pe(r),r.flags&=-16777217)):s?s!==e.memoizedState?(Qi(r),pe(r),qy(r,s)):(pe(r),r.flags&=-16777217):(e.memoizedProps!==l&&Qi(r),pe(r),r.flags&=-16777217),null;case 27:Hn(r),s=_t.current;var h=r.type;if(e!==null&&r.stateNode!=null)e.memoizedProps!==l&&Qi(r);else{if(!l){if(r.stateNode===null)throw Error(a(166));return pe(r),null}e=gt.current,Xo(r)?w0(r):(e=q1(h,l,s),r.stateNode=e,Qi(r))}return pe(r),null;case 5:if(Hn(r),s=r.type,e!==null&&r.stateNode!=null)e.memoizedProps!==l&&Qi(r);else{if(!l){if(r.stateNode===null)throw Error(a(166));return pe(r),null}if(e=gt.current,Xo(r))w0(r);else{switch(h=Dc(_t.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?h.createElement(s,{is:l.is}):h.createElement(s)}}e[_e]=r,e[Ge]=l;t:for(h=r.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===r)break t;for(;h.sibling===null;){if(h.return===null||h.return===r)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}r.stateNode=e;t:switch(Xe(e,s,l),s){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Qi(r)}}return pe(r),r.flags&=-16777217,null;case 6:if(e&&r.stateNode!=null)e.memoizedProps!==l&&Qi(r);else{if(typeof l!="string"&&r.stateNode===null)throw Error(a(166));if(e=_t.current,Xo(r)){if(e=r.stateNode,s=r.memoizedProps,l=null,h=fn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[_e]=r,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||U1(e.nodeValue,s)),e||ka(r)}else e=Dc(e).createTextNode(l),e[_e]=r,r.stateNode=e}return pe(r),null;case 13:if(l=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Xo(r),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[_e]=r}else Wo(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;pe(r),h=!1}else h=b0(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return r.flags&256?(Gi(r),r):(Gi(r),null)}if(Gi(r),(r.flags&128)!==0)return r.lanes=s,r;if(s=l!==null,e=e!==null&&e.memoizedState!==null,s){l=r.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var f=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(f=l.memoizedState.cachePool.pool),f!==h&&(l.flags|=2048)}return s!==e&&s&&(r.child.flags|=8192),xc(r,r.updateQueue),pe(r),null;case 4:return Me(),e===null&&Hf(r.stateNode.containerInfo),pe(r),null;case 10:return qi(r.type),pe(r),null;case 19:if(ct(Pe),h=r.memoizedState,h===null)return pe(r),null;if(l=(r.flags&128)!==0,f=h.rendering,f===null)if(l)fl(h,!1);else{if(xe!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(f=fc(e),f!==null){for(r.flags|=128,fl(h,!1),e=f.updateQueue,r.updateQueue=e,xc(r,e),r.subtreeFlags=0,e=s,s=r.child;s!==null;)v0(s,e),s=s.sibling;return ht(Pe,Pe.current&1|2),r.child}e=e.sibling}h.tail!==null&&pn()>wc&&(r.flags|=128,l=!0,fl(h,!1),r.lanes=4194304)}else{if(!l)if(e=fc(f),e!==null){if(r.flags|=128,l=!0,e=e.updateQueue,r.updateQueue=e,xc(r,e),fl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!f.alternate&&!qt)return pe(r),null}else 2*pn()-h.renderingStartTime>wc&&s!==536870912&&(r.flags|=128,l=!0,fl(h,!1),r.lanes=4194304);h.isBackwards?(f.sibling=r.child,r.child=f):(e=h.last,e!==null?e.sibling=f:r.child=f,h.last=f)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=pn(),r.sibling=null,e=Pe.current,ht(Pe,l?e&1|2:e&1),r):(pe(r),null);case 22:case 23:return Gi(r),Gd(),l=r.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(r.flags|=8192):l&&(r.flags|=8192),l?(s&536870912)!==0&&(r.flags&128)===0&&(pe(r),r.subtreeFlags&6&&(r.flags|=8192)):pe(r),s=r.updateQueue,s!==null&&xc(r,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),l!==s&&(r.flags|=2048),e!==null&&ct(La),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),r.memoizedState.cache!==s&&(r.flags|=2048),qi(ke),pe(r),null;case 25:return null;case 30:return null}throw Error(a(156,r.tag))}function cb(e,r){switch(Md(r),r.tag){case 1:return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return qi(ke),Me(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 26:case 27:case 5:return Hn(r),null;case 13:if(Gi(r),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(a(340));Wo()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return ct(Pe),null;case 4:return Me(),null;case 10:return qi(r.type),null;case 22:case 23:return Gi(r),Gd(),e!==null&&ct(La),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 24:return qi(ke),null;case 25:return null;default:return null}}function Hy(e,r){switch(Md(r),r.tag){case 3:qi(ke),Me();break;case 26:case 27:case 5:Hn(r);break;case 4:Me();break;case 13:Gi(r);break;case 19:ct(Pe);break;case 10:qi(r.type);break;case 22:case 23:Gi(r),Gd(),e!==null&&ct(La);break;case 24:qi(ke)}}function pl(e,r){try{var s=r.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var h=l.next;s=h;do{if((s.tag&e)===e){l=void 0;var f=s.create,w=s.inst;l=f(),w.destroy=l}s=s.next}while(s!==h)}}catch(b){ne(r,r.return,b)}}function Mr(e,r,s){try{var l=r.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var f=h.next;l=f;do{if((l.tag&e)===e){var w=l.inst,b=w.destroy;if(b!==void 0){w.destroy=void 0,h=r;var N=s,H=b;try{H()}catch(et){ne(h,N,et)}}}l=l.next}while(l!==f)}}catch(et){ne(r,r.return,et)}}function Gy(e){var r=e.updateQueue;if(r!==null){var s=e.stateNode;try{O0(r,s)}catch(l){ne(e,e.return,l)}}}function Yy(e,r,s){s.props=$a(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){ne(e,r,l)}}function ml(e,r){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(h){ne(e,r,h)}}function xi(e,r){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(h){ne(e,r,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){ne(e,r,h)}else s.current=null}function Qy(e){var r=e.type,s=e.memoizedProps,l=e.stateNode;try{t:switch(r){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(h){ne(e,e.return,h)}}function Ef(e,r,s){try{var l=e.stateNode;Db(l,e.type,s,r),l[Ge]=r}catch(h){ne(e,e.return,h)}}function Xy(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&$r(e.type)||e.tag===4}function bf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Xy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&$r(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Tf(e,r,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,r?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,r):(r=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,r.appendChild(e),s=s._reactRootContainer,s!=null||r.onclick!==null||(r.onclick=jc));else if(l!==4&&(l===27&&$r(e.type)&&(s=e.stateNode,r=null),e=e.child,e!==null))for(Tf(e,r,s),e=e.sibling;e!==null;)Tf(e,r,s),e=e.sibling}function vc(e,r,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,r?s.insertBefore(e,r):s.appendChild(e);else if(l!==4&&(l===27&&$r(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(vc(e,r,s),e=e.sibling;e!==null;)vc(e,r,s),e=e.sibling}function Wy(e){var r=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,h=r.attributes;h.length;)r.removeAttributeNode(h[0]);Xe(r,l,s),r[_e]=e,r[Ge]=s}catch(f){ne(e,e.return,f)}}var Xi=!1,Te=!1,Sf=!1,Zy=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function hb(e,r){if(e=e.containerInfo,Qf=Pc,e=u0(e),Ed(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var h=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{s.nodeType,f.nodeType}catch{s=null;break t}var w=0,b=-1,N=-1,H=0,et=0,rt=e,G=null;e:for(;;){for(var Q;rt!==s||h!==0&&rt.nodeType!==3||(b=w+h),rt!==f||l!==0&&rt.nodeType!==3||(N=w+l),rt.nodeType===3&&(w+=rt.nodeValue.length),(Q=rt.firstChild)!==null;)G=rt,rt=Q;for(;;){if(rt===e)break e;if(G===s&&++H===h&&(b=w),G===f&&++et===l&&(N=w),(Q=rt.nextSibling)!==null)break;rt=G,G=rt.parentNode}rt=Q}s=b===-1||N===-1?null:{start:b,end:N}}else s=null}s=s||{start:0,end:0}}else s=null;for(Xf={focusedElem:e,selectionRange:s},Pc=!1,Fe=r;Fe!==null;)if(r=Fe,e=r.child,(r.subtreeFlags&1024)!==0&&e!==null)e.return=r,Fe=e;else for(;Fe!==null;){switch(r=Fe,f=r.alternate,e=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,s=r,h=f.memoizedProps,f=f.memoizedState,l=s.stateNode;try{var Tt=$a(s.type,h,s.elementType===s.type);e=l.getSnapshotBeforeUpdate(Tt,f),l.__reactInternalSnapshotBeforeUpdate=e}catch(wt){ne(s,s.return,wt)}}break;case 3:if((e&1024)!==0){if(e=r.stateNode.containerInfo,s=e.nodeType,s===9)Jf(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Jf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=r.sibling,e!==null){e.return=r.return,Fe=e;break}Fe=r.return}}function Jy(e,r,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Or(e,s),l&4&&pl(5,s);break;case 1:if(Or(e,s),l&4)if(e=s.stateNode,r===null)try{e.componentDidMount()}catch(w){ne(s,s.return,w)}else{var h=$a(s.type,r.memoizedProps);r=r.memoizedState;try{e.componentDidUpdate(h,r,e.__reactInternalSnapshotBeforeUpdate)}catch(w){ne(s,s.return,w)}}l&64&&Gy(s),l&512&&ml(s,s.return);break;case 3:if(Or(e,s),l&64&&(e=s.updateQueue,e!==null)){if(r=null,s.child!==null)switch(s.child.tag){case 27:case 5:r=s.child.stateNode;break;case 1:r=s.child.stateNode}try{O0(e,r)}catch(w){ne(s,s.return,w)}}break;case 27:r===null&&l&4&&Wy(s);case 26:case 5:Or(e,s),r===null&&l&4&&Qy(s),l&512&&ml(s,s.return);break;case 12:Or(e,s);break;case 13:Or(e,s),l&4&&n1(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=_b.bind(null,s),Ub(e,s))));break;case 22:if(l=s.memoizedState!==null||Xi,!l){r=r!==null&&r.memoizedState!==null||Te,h=Xi;var f=Te;Xi=l,(Te=r)&&!f?Vr(e,s,(s.subtreeFlags&8772)!==0):Or(e,s),Xi=h,Te=f}break;case 30:break;default:Or(e,s)}}function t1(e){var r=e.alternate;r!==null&&(e.alternate=null,t1(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&os(r)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ce=null,gn=!1;function Wi(e,r,s){for(s=s.child;s!==null;)e1(e,r,s),s=s.sibling}function e1(e,r,s){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(cr,s)}catch{}switch(s.tag){case 26:Te||xi(s,r),Wi(e,r,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Te||xi(s,r);var l=ce,h=gn;$r(s.type)&&(ce=s.stateNode,gn=!1),Wi(e,r,s),Tl(s.stateNode),ce=l,gn=h;break;case 5:Te||xi(s,r);case 6:if(l=ce,h=gn,ce=null,Wi(e,r,s),ce=l,gn=h,ce!==null)if(gn)try{(ce.nodeType===9?ce.body:ce.nodeName==="HTML"?ce.ownerDocument.body:ce).removeChild(s.stateNode)}catch(f){ne(s,r,f)}else try{ce.removeChild(s.stateNode)}catch(f){ne(s,r,f)}break;case 18:ce!==null&&(gn?(e=ce,F1(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Nl(e)):F1(ce,s.stateNode));break;case 4:l=ce,h=gn,ce=s.stateNode.containerInfo,gn=!0,Wi(e,r,s),ce=l,gn=h;break;case 0:case 11:case 14:case 15:Te||Mr(2,s,r),Te||Mr(4,s,r),Wi(e,r,s);break;case 1:Te||(xi(s,r),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Yy(s,r,l)),Wi(e,r,s);break;case 21:Wi(e,r,s);break;case 22:Te=(l=Te)||s.memoizedState!==null,Wi(e,r,s),Te=l;break;default:Wi(e,r,s)}}function n1(e,r){if(r.memoizedState===null&&(e=r.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Nl(e)}catch(s){ne(r,r.return,s)}}function db(e){switch(e.tag){case 13:case 19:var r=e.stateNode;return r===null&&(r=e.stateNode=new Zy),r;case 22:return e=e.stateNode,r=e._retryCache,r===null&&(r=e._retryCache=new Zy),r;default:throw Error(a(435,e.tag))}}function Af(e,r){var s=db(e);r.forEach(function(l){var h=wb.bind(null,e,l);s.has(l)||(s.add(l),l.then(h,h))})}function Tn(e,r){var s=r.deletions;if(s!==null)for(var l=0;l<s.length;l++){var h=s[l],f=e,w=r,b=w;t:for(;b!==null;){switch(b.tag){case 27:if($r(b.type)){ce=b.stateNode,gn=!1;break t}break;case 5:ce=b.stateNode,gn=!1;break t;case 3:case 4:ce=b.stateNode.containerInfo,gn=!0;break t}b=b.return}if(ce===null)throw Error(a(160));e1(f,w,h),ce=null,gn=!1,f=h.alternate,f!==null&&(f.return=null),h.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)i1(r,e),r=r.sibling}var ei=null;function i1(e,r){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Tn(r,e),Sn(e),l&4&&(Mr(3,e,e.return),pl(3,e),Mr(5,e,e.return));break;case 1:Tn(r,e),Sn(e),l&512&&(Te||s===null||xi(s,s.return)),l&64&&Xi&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var h=ei;if(Tn(r,e),Sn(e),l&512&&(Te||s===null||xi(s,s.return)),l&4){var f=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){t:{l=e.type,s=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":f=h.getElementsByTagName("title")[0],(!f||f[gr]||f[_e]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=h.createElement(l),h.head.insertBefore(f,h.querySelector("head > title"))),Xe(f,l,s),f[_e]=e,we(f),l=f;break t;case"link":var w=W1("link","href",h).get(l+(s.href||""));if(w){for(var b=0;b<w.length;b++)if(f=w[b],f.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&f.getAttribute("rel")===(s.rel==null?null:s.rel)&&f.getAttribute("title")===(s.title==null?null:s.title)&&f.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){w.splice(b,1);break e}}f=h.createElement(l),Xe(f,l,s),h.head.appendChild(f);break;case"meta":if(w=W1("meta","content",h).get(l+(s.content||""))){for(b=0;b<w.length;b++)if(f=w[b],f.getAttribute("content")===(s.content==null?null:""+s.content)&&f.getAttribute("name")===(s.name==null?null:s.name)&&f.getAttribute("property")===(s.property==null?null:s.property)&&f.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&f.getAttribute("charset")===(s.charSet==null?null:s.charSet)){w.splice(b,1);break e}}f=h.createElement(l),Xe(f,l,s),h.head.appendChild(f);break;default:throw Error(a(468,l))}f[_e]=e,we(f),l=f}e.stateNode=l}else Z1(h,e.type,e.stateNode);else e.stateNode=X1(h,l,e.memoizedProps);else f!==l?(f===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):f.count--,l===null?Z1(h,e.type,e.stateNode):X1(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Ef(e,e.memoizedProps,s.memoizedProps)}break;case 27:Tn(r,e),Sn(e),l&512&&(Te||s===null||xi(s,s.return)),s!==null&&l&4&&Ef(e,e.memoizedProps,s.memoizedProps);break;case 5:if(Tn(r,e),Sn(e),l&512&&(Te||s===null||xi(s,s.return)),e.flags&32){h=e.stateNode;try{On(h,"")}catch(Q){ne(e,e.return,Q)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,Ef(e,h,s!==null?s.memoizedProps:h)),l&1024&&(Sf=!0);break;case 6:if(Tn(r,e),Sn(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(Q){ne(e,e.return,Q)}}break;case 3:if(Oc=null,h=ei,ei=Nc(r.containerInfo),Tn(r,e),ei=h,Sn(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Nl(r.containerInfo)}catch(Q){ne(e,e.return,Q)}Sf&&(Sf=!1,r1(e));break;case 4:l=ei,ei=Nc(e.stateNode.containerInfo),Tn(r,e),Sn(e),ei=l;break;case 12:Tn(r,e),Sn(e);break;case 13:Tn(r,e),Sn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Nf=pn()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Af(e,l)));break;case 22:h=e.memoizedState!==null;var N=s!==null&&s.memoizedState!==null,H=Xi,et=Te;if(Xi=H||h,Te=et||N,Tn(r,e),Te=et,Xi=H,Sn(e),l&8192)t:for(r=e.stateNode,r._visibility=h?r._visibility&-2:r._visibility|1,h&&(s===null||N||Xi||Te||Ba(e)),s=null,r=e;;){if(r.tag===5||r.tag===26){if(s===null){N=s=r;try{if(f=N.stateNode,h)w=f.style,typeof w.setProperty=="function"?w.setProperty("display","none","important"):w.display="none";else{b=N.stateNode;var rt=N.memoizedProps.style,G=rt!=null&&rt.hasOwnProperty("display")?rt.display:null;b.style.display=G==null||typeof G=="boolean"?"":(""+G).trim()}}catch(Q){ne(N,N.return,Q)}}}else if(r.tag===6){if(s===null){N=r;try{N.stateNode.nodeValue=h?"":N.memoizedProps}catch(Q){ne(N,N.return,Q)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===e)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break t;for(;r.sibling===null;){if(r.return===null||r.return===e)break t;s===r&&(s=null),r=r.return}s===r&&(s=null),r.sibling.return=r.return,r=r.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Af(e,s))));break;case 19:Tn(r,e),Sn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Af(e,l)));break;case 30:break;case 21:break;default:Tn(r,e),Sn(e)}}function Sn(e){var r=e.flags;if(r&2){try{for(var s,l=e.return;l!==null;){if(Xy(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var h=s.stateNode,f=bf(e);vc(e,f,h);break;case 5:var w=s.stateNode;s.flags&32&&(On(w,""),s.flags&=-33);var b=bf(e);vc(e,b,w);break;case 3:case 4:var N=s.stateNode.containerInfo,H=bf(e);Tf(e,H,N);break;default:throw Error(a(161))}}catch(et){ne(e,e.return,et)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function r1(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var r=e;r1(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),e=e.sibling}}function Or(e,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)Jy(e,r.alternate,r),r=r.sibling}function Ba(e){for(e=e.child;e!==null;){var r=e;switch(r.tag){case 0:case 11:case 14:case 15:Mr(4,r,r.return),Ba(r);break;case 1:xi(r,r.return);var s=r.stateNode;typeof s.componentWillUnmount=="function"&&Yy(r,r.return,s),Ba(r);break;case 27:Tl(r.stateNode);case 26:case 5:xi(r,r.return),Ba(r);break;case 22:r.memoizedState===null&&Ba(r);break;case 30:Ba(r);break;default:Ba(r)}e=e.sibling}}function Vr(e,r,s){for(s=s&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var l=r.alternate,h=e,f=r,w=f.flags;switch(f.tag){case 0:case 11:case 15:Vr(h,f,s),pl(4,f);break;case 1:if(Vr(h,f,s),l=f,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(H){ne(l,l.return,H)}if(l=f,h=l.updateQueue,h!==null){var b=l.stateNode;try{var N=h.shared.hiddenCallbacks;if(N!==null)for(h.shared.hiddenCallbacks=null,h=0;h<N.length;h++)M0(N[h],b)}catch(H){ne(l,l.return,H)}}s&&w&64&&Gy(f),ml(f,f.return);break;case 27:Wy(f);case 26:case 5:Vr(h,f,s),s&&l===null&&w&4&&Qy(f),ml(f,f.return);break;case 12:Vr(h,f,s);break;case 13:Vr(h,f,s),s&&w&4&&n1(h,f);break;case 22:f.memoizedState===null&&Vr(h,f,s),ml(f,f.return);break;case 30:break;default:Vr(h,f,s)}r=r.sibling}}function Rf(e,r){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(e=r.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&tl(s))}function If(e,r){e=null,r.alternate!==null&&(e=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==e&&(r.refCount++,e!=null&&tl(e))}function vi(e,r,s,l){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)a1(e,r,s,l),r=r.sibling}function a1(e,r,s,l){var h=r.flags;switch(r.tag){case 0:case 11:case 15:vi(e,r,s,l),h&2048&&pl(9,r);break;case 1:vi(e,r,s,l);break;case 3:vi(e,r,s,l),h&2048&&(e=null,r.alternate!==null&&(e=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==e&&(r.refCount++,e!=null&&tl(e)));break;case 12:if(h&2048){vi(e,r,s,l),e=r.stateNode;try{var f=r.memoizedProps,w=f.id,b=f.onPostCommit;typeof b=="function"&&b(w,r.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(N){ne(r,r.return,N)}}else vi(e,r,s,l);break;case 13:vi(e,r,s,l);break;case 23:break;case 22:f=r.stateNode,w=r.alternate,r.memoizedState!==null?f._visibility&2?vi(e,r,s,l):gl(e,r):f._visibility&2?vi(e,r,s,l):(f._visibility|=2,Os(e,r,s,l,(r.subtreeFlags&10256)!==0)),h&2048&&Rf(w,r);break;case 24:vi(e,r,s,l),h&2048&&If(r.alternate,r);break;default:vi(e,r,s,l)}}function Os(e,r,s,l,h){for(h=h&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var f=e,w=r,b=s,N=l,H=w.flags;switch(w.tag){case 0:case 11:case 15:Os(f,w,b,N,h),pl(8,w);break;case 23:break;case 22:var et=w.stateNode;w.memoizedState!==null?et._visibility&2?Os(f,w,b,N,h):gl(f,w):(et._visibility|=2,Os(f,w,b,N,h)),h&&H&2048&&Rf(w.alternate,w);break;case 24:Os(f,w,b,N,h),h&&H&2048&&If(w.alternate,w);break;default:Os(f,w,b,N,h)}r=r.sibling}}function gl(e,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var s=e,l=r,h=l.flags;switch(l.tag){case 22:gl(s,l),h&2048&&Rf(l.alternate,l);break;case 24:gl(s,l),h&2048&&If(l.alternate,l);break;default:gl(s,l)}r=r.sibling}}var yl=8192;function Vs(e){if(e.subtreeFlags&yl)for(e=e.child;e!==null;)s1(e),e=e.sibling}function s1(e){switch(e.tag){case 26:Vs(e),e.flags&yl&&e.memoizedState!==null&&Wb(ei,e.memoizedState,e.memoizedProps);break;case 5:Vs(e);break;case 3:case 4:var r=ei;ei=Nc(e.stateNode.containerInfo),Vs(e),ei=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=yl,yl=16777216,Vs(e),yl=r):Vs(e));break;default:Vs(e)}}function o1(e){var r=e.alternate;if(r!==null&&(e=r.child,e!==null)){r.child=null;do r=e.sibling,e.sibling=null,e=r;while(e!==null)}}function xl(e){var r=e.deletions;if((e.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var l=r[s];Fe=l,u1(l,e)}o1(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)l1(e),e=e.sibling}function l1(e){switch(e.tag){case 0:case 11:case 15:xl(e),e.flags&2048&&Mr(9,e,e.return);break;case 3:xl(e);break;case 12:xl(e);break;case 22:var r=e.stateNode;e.memoizedState!==null&&r._visibility&2&&(e.return===null||e.return.tag!==13)?(r._visibility&=-3,_c(e)):xl(e);break;default:xl(e)}}function _c(e){var r=e.deletions;if((e.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var l=r[s];Fe=l,u1(l,e)}o1(e)}for(e=e.child;e!==null;){switch(r=e,r.tag){case 0:case 11:case 15:Mr(8,r,r.return),_c(r);break;case 22:s=r.stateNode,s._visibility&2&&(s._visibility&=-3,_c(r));break;default:_c(r)}e=e.sibling}}function u1(e,r){for(;Fe!==null;){var s=Fe;switch(s.tag){case 0:case 11:case 15:Mr(8,s,r);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:tl(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Fe=l;else t:for(s=e;Fe!==null;){l=Fe;var h=l.sibling,f=l.return;if(t1(l),l===s){Fe=null;break t}if(h!==null){h.return=f,Fe=h;break t}Fe=f}}}var fb={getCacheForType:function(e){var r=nn(ke),s=r.data.get(e);return s===void 0&&(s=e(),r.data.set(e,s)),s}},pb=typeof WeakMap=="function"?WeakMap:Map,Xt=0,re=null,Vt=null,zt=0,Wt=0,An=null,kr=!1,ks=!1,Cf=!1,Zi=0,xe=0,Pr=0,Fa=0,jf=0,$n=0,Ps=0,vl=null,yn=null,Df=!1,Nf=0,wc=1/0,Ec=null,Ur=null,Qe=0,Lr=null,Us=null,Ls=0,Mf=0,Of=null,c1=null,_l=0,Vf=null;function Rn(){if((Xt&2)!==0&&zt!==0)return zt&-zt;if(J.T!==null){var e=As;return e!==0?e:Bf()}return Oi()}function h1(){$n===0&&($n=(zt&536870912)===0||qt?jo():536870912);var e=zn.current;return e!==null&&(e.flags|=32),$n}function In(e,r,s){(e===re&&(Wt===2||Wt===9)||e.cancelPendingCommit!==null)&&(zs(e,0),zr(e,zt,$n,!1)),ve(e,s),((Xt&2)===0||e!==re)&&(e===re&&((Xt&2)===0&&(Fa|=s),xe===4&&zr(e,zt,$n,!1)),_i(e))}function d1(e,r,s){if((Xt&6)!==0)throw Error(a(327));var l=!s&&(r&124)===0&&(r&e.expiredLanes)===0||dr(e,r),h=l?yb(e,r):Uf(e,r,!0),f=l;do{if(h===0){ks&&!l&&zr(e,r,0,!1);break}else{if(s=e.current.alternate,f&&!mb(s)){h=Uf(e,r,!1),f=!1;continue}if(h===2){if(f=r,e.errorRecoveryDisabledLanes&f)var w=0;else w=e.pendingLanes&-536870913,w=w!==0?w:w&536870912?536870912:0;if(w!==0){r=w;t:{var b=e;h=vl;var N=b.current.memoizedState.isDehydrated;if(N&&(zs(b,w).flags|=256),w=Uf(b,w,!1),w!==2){if(Cf&&!N){b.errorRecoveryDisabledLanes|=f,Fa|=f,h=4;break t}f=yn,yn=h,f!==null&&(yn===null?yn=f:yn.push.apply(yn,f))}h=w}if(f=!1,h!==2)continue}}if(h===1){zs(e,0),zr(e,r,0,!0);break}t:{switch(l=e,f=h,f){case 0:case 1:throw Error(a(345));case 4:if((r&4194048)!==r)break;case 6:zr(l,r,$n,!kr);break t;case 2:yn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((r&62914560)===r&&(h=Nf+300-pn(),10<h)){if(zr(l,r,$n,!kr),Nn(l,0,!0)!==0)break t;l.timeoutHandle=$1(f1.bind(null,l,s,yn,Ec,Df,r,$n,Fa,Ps,kr,f,2,-0,0),h);break t}f1(l,s,yn,Ec,Df,r,$n,Fa,Ps,kr,f,0,-0,0)}}break}while(!0);_i(e)}function f1(e,r,s,l,h,f,w,b,N,H,et,rt,G,Q){if(e.timeoutHandle=-1,rt=r.subtreeFlags,(rt&8192||(rt&16785408)===16785408)&&(Rl={stylesheets:null,count:0,unsuspend:Xb},s1(r),rt=Zb(),rt!==null)){e.cancelPendingCommit=rt(_1.bind(null,e,r,f,s,l,h,w,b,N,et,1,G,Q)),zr(e,f,w,!H);return}_1(e,r,f,s,l,h,w,b,N)}function mb(e){for(var r=e;;){var s=r.tag;if((s===0||s===11||s===15)&&r.flags&16384&&(s=r.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var h=s[l],f=h.getSnapshot;h=h.value;try{if(!En(f(),h))return!1}catch{return!1}}if(s=r.child,r.subtreeFlags&16384&&s!==null)s.return=r,r=s;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function zr(e,r,s,l){r&=~jf,r&=~Fa,e.suspendedLanes|=r,e.pingedLanes&=~r,l&&(e.warmLanes|=r),l=e.expirationTimes;for(var h=r;0<h;){var f=31-un(h),w=1<<f;l[f]=-1,h&=~w}s!==0&&pr(e,s,r)}function bc(){return(Xt&6)===0?(wl(0),!1):!0}function kf(){if(Vt!==null){if(Wt===0)var e=Vt.return;else e=Vt,Ki=Pa=null,Zd(e),Ns=null,hl=0,e=Vt;for(;e!==null;)Hy(e.alternate,e),e=e.return;Vt=null}}function zs(e,r){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,Mb(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),kf(),re=e,Vt=s=$i(e.current,null),zt=r,Wt=0,An=null,kr=!1,ks=dr(e,r),Cf=!1,Ps=$n=jf=Fa=Pr=xe=0,yn=vl=null,Df=!1,(r&8)!==0&&(r|=r&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=r;0<l;){var h=31-un(l),f=1<<h;r|=e[h],l&=~f}return Zi=r,qu(),s}function p1(e,r){Mt=null,J.H=cc,r===nl||r===tc?(r=D0(),Wt=3):r===I0?(r=D0(),Wt=4):Wt=r===Ny?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,An=r,Vt===null&&(xe=1,mc(e,kn(r,e.current)))}function m1(){var e=J.H;return J.H=cc,e===null?cc:e}function g1(){var e=J.A;return J.A=fb,e}function Pf(){xe=4,kr||(zt&4194048)!==zt&&zn.current!==null||(ks=!0),(Pr&134217727)===0&&(Fa&134217727)===0||re===null||zr(re,zt,$n,!1)}function Uf(e,r,s){var l=Xt;Xt|=2;var h=m1(),f=g1();(re!==e||zt!==r)&&(Ec=null,zs(e,r)),r=!1;var w=xe;t:do try{if(Wt!==0&&Vt!==null){var b=Vt,N=An;switch(Wt){case 8:kf(),w=6;break t;case 3:case 2:case 9:case 6:zn.current===null&&(r=!0);var H=Wt;if(Wt=0,An=null,$s(e,b,N,H),s&&ks){w=0;break t}break;default:H=Wt,Wt=0,An=null,$s(e,b,N,H)}}gb(),w=xe;break}catch(et){p1(e,et)}while(!0);return r&&e.shellSuspendCounter++,Ki=Pa=null,Xt=l,J.H=h,J.A=f,Vt===null&&(re=null,zt=0,qu()),w}function gb(){for(;Vt!==null;)y1(Vt)}function yb(e,r){var s=Xt;Xt|=2;var l=m1(),h=g1();re!==e||zt!==r?(Ec=null,wc=pn()+500,zs(e,r)):ks=dr(e,r);t:do try{if(Wt!==0&&Vt!==null){r=Vt;var f=An;e:switch(Wt){case 1:Wt=0,An=null,$s(e,r,f,1);break;case 2:case 9:if(C0(f)){Wt=0,An=null,x1(r);break}r=function(){Wt!==2&&Wt!==9||re!==e||(Wt=7),_i(e)},f.then(r,r);break t;case 3:Wt=7;break t;case 4:Wt=5;break t;case 7:C0(f)?(Wt=0,An=null,x1(r)):(Wt=0,An=null,$s(e,r,f,7));break;case 5:var w=null;switch(Vt.tag){case 26:w=Vt.memoizedState;case 5:case 27:var b=Vt;if(!w||J1(w)){Wt=0,An=null;var N=b.sibling;if(N!==null)Vt=N;else{var H=b.return;H!==null?(Vt=H,Tc(H)):Vt=null}break e}}Wt=0,An=null,$s(e,r,f,5);break;case 6:Wt=0,An=null,$s(e,r,f,6);break;case 8:kf(),xe=6;break t;default:throw Error(a(462))}}xb();break}catch(et){p1(e,et)}while(!0);return Ki=Pa=null,J.H=l,J.A=h,Xt=s,Vt!==null?0:(re=null,zt=0,qu(),xe)}function xb(){for(;Vt!==null&&!hd();)y1(Vt)}function y1(e){var r=Ky(e.alternate,e,Zi);e.memoizedProps=e.pendingProps,r===null?Tc(e):Vt=r}function x1(e){var r=e,s=r.alternate;switch(r.tag){case 15:case 0:r=Uy(s,r,r.pendingProps,r.type,void 0,zt);break;case 11:r=Uy(s,r,r.pendingProps,r.type.render,r.ref,zt);break;case 5:Zd(r);default:Hy(s,r),r=Vt=v0(r,Zi),r=Ky(s,r,Zi)}e.memoizedProps=e.pendingProps,r===null?Tc(e):Vt=r}function $s(e,r,s,l){Ki=Pa=null,Zd(r),Ns=null,hl=0;var h=r.return;try{if(ob(e,h,r,s,zt)){xe=1,mc(e,kn(s,e.current)),Vt=null;return}}catch(f){if(h!==null)throw Vt=h,f;xe=1,mc(e,kn(s,e.current)),Vt=null;return}r.flags&32768?(qt||l===1?e=!0:ks||(zt&536870912)!==0?e=!1:(kr=e=!0,(l===2||l===9||l===3||l===6)&&(l=zn.current,l!==null&&l.tag===13&&(l.flags|=16384))),v1(r,e)):Tc(r)}function Tc(e){var r=e;do{if((r.flags&32768)!==0){v1(r,kr);return}e=r.return;var s=ub(r.alternate,r,Zi);if(s!==null){Vt=s;return}if(r=r.sibling,r!==null){Vt=r;return}Vt=r=e}while(r!==null);xe===0&&(xe=5)}function v1(e,r){do{var s=cb(e.alternate,e);if(s!==null){s.flags&=32767,Vt=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!r&&(e=e.sibling,e!==null)){Vt=e;return}Vt=e=s}while(e!==null);xe=6,Vt=null}function _1(e,r,s,l,h,f,w,b,N){e.cancelPendingCommit=null;do Sc();while(Qe!==0);if((Xt&6)!==0)throw Error(a(327));if(r!==null){if(r===e.current)throw Error(a(177));if(f=r.lanes|r.childLanes,f|=Rd,Iu(e,s,f,w,b,N),e===re&&(Vt=re=null,zt=0),Us=r,Lr=e,Ls=s,Mf=f,Of=h,c1=l,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Eb(Mi,function(){return S1(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||l){l=J.T,J.T=null,h=dt.p,dt.p=2,w=Xt,Xt|=4;try{hb(e,r,s)}finally{Xt=w,dt.p=h,J.T=l}}Qe=1,w1(),E1(),b1()}}function w1(){if(Qe===1){Qe=0;var e=Lr,r=Us,s=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||s){s=J.T,J.T=null;var l=dt.p;dt.p=2;var h=Xt;Xt|=4;try{i1(r,e);var f=Xf,w=u0(e.containerInfo),b=f.focusedElem,N=f.selectionRange;if(w!==b&&b&&b.ownerDocument&&l0(b.ownerDocument.documentElement,b)){if(N!==null&&Ed(b)){var H=N.start,et=N.end;if(et===void 0&&(et=H),"selectionStart"in b)b.selectionStart=H,b.selectionEnd=Math.min(et,b.value.length);else{var rt=b.ownerDocument||document,G=rt&&rt.defaultView||window;if(G.getSelection){var Q=G.getSelection(),Tt=b.textContent.length,wt=Math.min(N.start,Tt),ee=N.end===void 0?wt:Math.min(N.end,Tt);!Q.extend&&wt>ee&&(w=ee,ee=wt,wt=w);var $=o0(b,wt),P=o0(b,ee);if($&&P&&(Q.rangeCount!==1||Q.anchorNode!==$.node||Q.anchorOffset!==$.offset||Q.focusNode!==P.node||Q.focusOffset!==P.offset)){var F=rt.createRange();F.setStart($.node,$.offset),Q.removeAllRanges(),wt>ee?(Q.addRange(F),Q.extend(P.node,P.offset)):(F.setEnd(P.node,P.offset),Q.addRange(F))}}}}for(rt=[],Q=b;Q=Q.parentNode;)Q.nodeType===1&&rt.push({element:Q,left:Q.scrollLeft,top:Q.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<rt.length;b++){var nt=rt[b];nt.element.scrollLeft=nt.left,nt.element.scrollTop=nt.top}}Pc=!!Qf,Xf=Qf=null}finally{Xt=h,dt.p=l,J.T=s}}e.current=r,Qe=2}}function E1(){if(Qe===2){Qe=0;var e=Lr,r=Us,s=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||s){s=J.T,J.T=null;var l=dt.p;dt.p=2;var h=Xt;Xt|=4;try{Jy(e,r.alternate,r)}finally{Xt=h,dt.p=l,J.T=s}}Qe=3}}function b1(){if(Qe===4||Qe===3){Qe=0,Io();var e=Lr,r=Us,s=Ls,l=c1;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Qe=5:(Qe=0,Us=Lr=null,T1(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(Ur=null),No(s),r=r.stateNode,tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(cr,r,void 0,(r.current.flags&128)===128)}catch{}if(l!==null){r=J.T,h=dt.p,dt.p=2,J.T=null;try{for(var f=e.onRecoverableError,w=0;w<l.length;w++){var b=l[w];f(b.value,{componentStack:b.stack})}}finally{J.T=r,dt.p=h}}(Ls&3)!==0&&Sc(),_i(e),h=e.pendingLanes,(s&4194090)!==0&&(h&42)!==0?e===Vf?_l++:(_l=0,Vf=e):_l=0,wl(0)}}function T1(e,r){(e.pooledCacheLanes&=r)===0&&(r=e.pooledCache,r!=null&&(e.pooledCache=null,tl(r)))}function Sc(e){return w1(),E1(),b1(),S1()}function S1(){if(Qe!==5)return!1;var e=Lr,r=Mf;Mf=0;var s=No(Ls),l=J.T,h=dt.p;try{dt.p=32>s?32:s,J.T=null,s=Of,Of=null;var f=Lr,w=Ls;if(Qe=0,Us=Lr=null,Ls=0,(Xt&6)!==0)throw Error(a(331));var b=Xt;if(Xt|=4,l1(f.current),a1(f,f.current,w,s),Xt=b,wl(0,!1),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(cr,f)}catch{}return!0}finally{dt.p=h,J.T=l,T1(e,r)}}function A1(e,r,s){r=kn(s,r),r=ff(e.stateNode,r,2),e=Cr(e,r,2),e!==null&&(ve(e,2),_i(e))}function ne(e,r,s){if(e.tag===3)A1(e,e,s);else for(;r!==null;){if(r.tag===3){A1(r,e,s);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ur===null||!Ur.has(l))){e=kn(s,e),s=jy(2),l=Cr(r,s,2),l!==null&&(Dy(s,l,r,e),ve(l,2),_i(l));break}}r=r.return}}function Lf(e,r,s){var l=e.pingCache;if(l===null){l=e.pingCache=new pb;var h=new Set;l.set(r,h)}else h=l.get(r),h===void 0&&(h=new Set,l.set(r,h));h.has(s)||(Cf=!0,h.add(s),e=vb.bind(null,e,r,s),r.then(e,e))}function vb(e,r,s){var l=e.pingCache;l!==null&&l.delete(r),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,re===e&&(zt&s)===s&&(xe===4||xe===3&&(zt&62914560)===zt&&300>pn()-Nf?(Xt&2)===0&&zs(e,0):jf|=s,Ps===zt&&(Ps=0)),_i(e)}function R1(e,r){r===0&&(r=fr()),e=Es(e,r),e!==null&&(ve(e,r),_i(e))}function _b(e){var r=e.memoizedState,s=0;r!==null&&(s=r.retryLane),R1(e,s)}function wb(e,r){var s=0;switch(e.tag){case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(s=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(r),R1(e,s)}function Eb(e,r){return la(e,r)}var Ac=null,Bs=null,zf=!1,Rc=!1,$f=!1,Ka=0;function _i(e){e!==Bs&&e.next===null&&(Bs===null?Ac=Bs=e:Bs=Bs.next=e),Rc=!0,zf||(zf=!0,Tb())}function wl(e,r){if(!$f&&Rc){$f=!0;do for(var s=!1,l=Ac;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var f=0;else{var w=l.suspendedLanes,b=l.pingedLanes;f=(1<<31-un(42|e)+1)-1,f&=h&~(w&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(s=!0,D1(l,f))}else f=zt,f=Nn(l,l===re?f:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(f&3)===0||dr(l,f)||(s=!0,D1(l,f));l=l.next}while(s);$f=!1}}function bb(){I1()}function I1(){Rc=zf=!1;var e=0;Ka!==0&&(Nb()&&(e=Ka),Ka=0);for(var r=pn(),s=null,l=Ac;l!==null;){var h=l.next,f=C1(l,r);f===0?(l.next=null,s===null?Ac=h:s.next=h,h===null&&(Bs=s)):(s=l,(e!==0||(f&3)!==0)&&(Rc=!0)),l=h}wl(e)}function C1(e,r){for(var s=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var w=31-un(f),b=1<<w,N=h[w];N===-1?((b&s)===0||(b&l)!==0)&&(h[w]=as(b,r)):N<=r&&(e.expiredLanes|=b),f&=~b}if(r=re,s=zt,s=Nn(e,e===r?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===r&&(Wt===2||Wt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&rs(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||dr(e,s)){if(r=s&-s,r===e.callbackPriority)return r;switch(l!==null&&rs(l),No(s)){case 2:case 8:s=ze;break;case 32:s=Mi;break;case 268435456:s=Co;break;default:s=Mi}return l=j1.bind(null,e),s=la(s,l),e.callbackPriority=r,e.callbackNode=s,r}return l!==null&&l!==null&&rs(l),e.callbackPriority=2,e.callbackNode=null,2}function j1(e,r){if(Qe!==0&&Qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(Sc()&&e.callbackNode!==s)return null;var l=zt;return l=Nn(e,e===re?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(d1(e,l,r),C1(e,pn()),e.callbackNode!=null&&e.callbackNode===s?j1.bind(null,e):null)}function D1(e,r){if(Sc())return null;d1(e,r,!0)}function Tb(){Ob(function(){(Xt&6)!==0?la(Oe,bb):I1()})}function Bf(){return Ka===0&&(Ka=jo()),Ka}function N1(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Xn(""+e)}function M1(e,r){var s=r.ownerDocument.createElement("input");return s.name=r.name,s.value=r.value,e.id&&s.setAttribute("form",e.id),r.parentNode.insertBefore(s,r),e=new FormData(e),s.parentNode.removeChild(s),e}function Sb(e,r,s,l,h){if(r==="submit"&&s&&s.stateNode===h){var f=N1((h[Ge]||null).action),w=l.submitter;w&&(r=(r=w[Ge]||null)?N1(r.formAction):w.getAttribute("formAction"),r!==null&&(f=r,w=null));var b=new ba("action","action",null,l,h);e.push({event:b,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ka!==0){var N=w?M1(h,w):new FormData(h);lf(s,{pending:!0,data:N,method:h.method,action:f},null,N)}}else typeof f=="function"&&(b.preventDefault(),N=w?M1(h,w):new FormData(h),lf(s,{pending:!0,data:N,method:h.method,action:f},f,N))},currentTarget:h}]})}}for(var Ff=0;Ff<Ad.length;Ff++){var Kf=Ad[Ff],Ab=Kf.toLowerCase(),Rb=Kf[0].toUpperCase()+Kf.slice(1);ti(Ab,"on"+Rb)}ti(d0,"onAnimationEnd"),ti(f0,"onAnimationIteration"),ti(p0,"onAnimationStart"),ti("dblclick","onDoubleClick"),ti("focusin","onFocus"),ti("focusout","onBlur"),ti(KE,"onTransitionRun"),ti(qE,"onTransitionStart"),ti(HE,"onTransitionCancel"),ti(m0,"onTransitionEnd"),di("onMouseEnter",["mouseout","mouseover"]),di("onMouseLeave",["mouseout","mouseover"]),di("onPointerEnter",["pointerout","pointerover"]),di("onPointerLeave",["pointerout","pointerover"]),hi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),hi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),hi("onBeforeInput",["compositionend","keypress","textInput","paste"]),hi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),hi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),hi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var El="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ib=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(El));function O1(e,r){r=(r&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],h=l.event;l=l.listeners;t:{var f=void 0;if(r)for(var w=l.length-1;0<=w;w--){var b=l[w],N=b.instance,H=b.currentTarget;if(b=b.listener,N!==f&&h.isPropagationStopped())break t;f=b,h.currentTarget=H;try{f(h)}catch(et){pc(et)}h.currentTarget=null,f=N}else for(w=0;w<l.length;w++){if(b=l[w],N=b.instance,H=b.currentTarget,b=b.listener,N!==f&&h.isPropagationStopped())break t;f=b,h.currentTarget=H;try{f(h)}catch(et){pc(et)}h.currentTarget=null,f=N}}}}function kt(e,r){var s=r[ca];s===void 0&&(s=r[ca]=new Set);var l=e+"__bubble";s.has(l)||(V1(r,e,2,!1),s.add(l))}function qf(e,r,s){var l=0;r&&(l|=4),V1(s,e,l,r)}var Ic="_reactListening"+Math.random().toString(36).slice(2);function Hf(e){if(!e[Ic]){e[Ic]=!0,Cu.forEach(function(s){s!=="selectionchange"&&(Ib.has(s)||qf(s,!1,e),qf(s,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Ic]||(r[Ic]=!0,qf("selectionchange",!1,r))}}function V1(e,r,s,l){switch(ax(r)){case 2:var h=eT;break;case 8:h=nT;break;default:h=sp}s=h.bind(null,r,s,e),h=void 0,!Li||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(r,s,{capture:!0,passive:h}):e.addEventListener(r,s,!0):h!==void 0?e.addEventListener(r,s,{passive:h}):e.addEventListener(r,s,!1)}function Gf(e,r,s,l,h){var f=l;if((r&1)===0&&(r&2)===0&&l!==null)t:for(;;){if(l===null)return;var w=l.tag;if(w===3||w===4){var b=l.stateNode.containerInfo;if(b===h)break;if(w===4)for(w=l.return;w!==null;){var N=w.tag;if((N===3||N===4)&&w.stateNode.containerInfo===h)return;w=w.return}for(;b!==null;){if(w=ui(b),w===null)return;if(N=w.tag,N===5||N===6||N===26||N===27){l=f=w;continue t}b=b.parentNode}}l=l.return}_a(function(){var H=f,et=Lo(s),rt=[];t:{var G=g0.get(e);if(G!==void 0){var Q=ba,Tt=e;switch(e){case"keypress":if(wa(s)===0)break t;case"keydown":case"keyup":Q=xs;break;case"focusin":Tt="focus",Q=ms;break;case"focusout":Tt="blur",Q=ms;break;case"beforeblur":case"afterblur":Q=ms;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=Ia;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=ku;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=Sr;break;case d0:case f0:case p0:Q=$o;break;case m0:Q=x;break;case"scroll":case"scrollend":Q=Sa;break;case"wheel":Q=A;break;case"copy":case"cut":case"paste":Q=Uu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=Ko;break;case"toggle":case"beforetoggle":Q=W}var wt=(r&4)!==0,ee=!wt&&(e==="scroll"||e==="scrollend"),$=wt?G!==null?G+"Capture":null:G;wt=[];for(var P=H,F;P!==null;){var nt=P;if(F=nt.stateNode,nt=nt.tag,nt!==5&&nt!==26&&nt!==27||F===null||$===null||(nt=br(P,$),nt!=null&&wt.push(bl(P,nt,F))),ee)break;P=P.return}0<wt.length&&(G=new Q(G,Tt,null,s,et),rt.push({event:G,listeners:wt}))}}if((r&7)===0){t:{if(G=e==="mouseover"||e==="pointerover",Q=e==="mouseout"||e==="pointerout",G&&s!==Uo&&(Tt=s.relatedTarget||s.fromElement)&&(ui(Tt)||Tt[Vi]))break t;if((Q||G)&&(G=et.window===et?et:(G=et.ownerDocument)?G.defaultView||G.parentWindow:window,Q?(Tt=s.relatedTarget||s.toElement,Q=H,Tt=Tt?ui(Tt):null,Tt!==null&&(ee=u(Tt),wt=Tt.tag,Tt!==ee||wt!==5&&wt!==27&&wt!==6)&&(Tt=null)):(Q=null,Tt=H),Q!==Tt)){if(wt=Ia,nt="onMouseLeave",$="onMouseEnter",P="mouse",(e==="pointerout"||e==="pointerover")&&(wt=Ko,nt="onPointerLeave",$="onPointerEnter",P="pointer"),ee=Q==null?G:yr(Q),F=Tt==null?G:yr(Tt),G=new wt(nt,P+"leave",Q,s,et),G.target=ee,G.relatedTarget=F,nt=null,ui(et)===H&&(wt=new wt($,P+"enter",Tt,s,et),wt.target=F,wt.relatedTarget=ee,nt=wt),ee=nt,Q&&Tt)e:{for(wt=Q,$=Tt,P=0,F=wt;F;F=Fs(F))P++;for(F=0,nt=$;nt;nt=Fs(nt))F++;for(;0<P-F;)wt=Fs(wt),P--;for(;0<F-P;)$=Fs($),F--;for(;P--;){if(wt===$||$!==null&&wt===$.alternate)break e;wt=Fs(wt),$=Fs($)}wt=null}else wt=null;Q!==null&&k1(rt,G,Q,wt,!1),Tt!==null&&ee!==null&&k1(rt,ee,Tt,wt,!0)}}t:{if(G=H?yr(H):window,Q=G.nodeName&&G.nodeName.toLowerCase(),Q==="select"||Q==="input"&&G.type==="file")var mt=e0;else if(Jg(G))if(n0)mt=$E;else{mt=LE;var Ot=UE}else Q=G.nodeName,!Q||Q.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?H&&ds(H.elementType)&&(mt=e0):mt=zE;if(mt&&(mt=mt(e,H))){t0(rt,mt,s,et);break t}Ot&&Ot(e,G,H),e==="focusout"&&H&&G.type==="number"&&H.memoizedProps.value!=null&&Vo(G,"number",G.value)}switch(Ot=H?yr(H):window,e){case"focusin":(Jg(Ot)||Ot.contentEditable==="true")&&(vs=Ot,bd=H,Qo=null);break;case"focusout":Qo=bd=vs=null;break;case"mousedown":Td=!0;break;case"contextmenu":case"mouseup":case"dragend":Td=!1,c0(rt,s,et);break;case"selectionchange":if(FE)break;case"keydown":case"keyup":c0(rt,s,et)}var xt;if(Rt)t:{switch(e){case"compositionstart":var Et="onCompositionStart";break t;case"compositionend":Et="onCompositionEnd";break t;case"compositionupdate":Et="onCompositionUpdate";break t}Et=void 0}else Jn?Wn(e,s)&&(Et="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(Et="onCompositionStart");Et&&(Ee&&s.locale!=="ko"&&(Jn||Et!=="onCompositionStart"?Et==="onCompositionEnd"&&Jn&&(xt=Vu()):(Vn=et,ie="value"in Vn?Vn.value:Vn.textContent,Jn=!0)),Ot=Cc(H,Et),0<Ot.length&&(Et=new Fo(Et,e,null,s,et),rt.push({event:Et,listeners:Ot}),xt?Et.data=xt:(xt=Zn(s),xt!==null&&(Et.data=xt)))),(xt=Qt?qo(e,s):VE(e,s))&&(Et=Cc(H,"onBeforeInput"),0<Et.length&&(Ot=new Fo("onBeforeInput","beforeinput",null,s,et),rt.push({event:Ot,listeners:Et}),Ot.data=xt)),Sb(rt,e,H,s,et)}O1(rt,r)})}function bl(e,r,s){return{instance:e,listener:r,currentTarget:s}}function Cc(e,r){for(var s=r+"Capture",l=[];e!==null;){var h=e,f=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||f===null||(h=br(e,s),h!=null&&l.unshift(bl(e,h,f)),h=br(e,r),h!=null&&l.push(bl(e,h,f))),e.tag===3)return l;e=e.return}return[]}function Fs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function k1(e,r,s,l,h){for(var f=r._reactName,w=[];s!==null&&s!==l;){var b=s,N=b.alternate,H=b.stateNode;if(b=b.tag,N!==null&&N===l)break;b!==5&&b!==26&&b!==27||H===null||(N=H,h?(H=br(s,f),H!=null&&w.unshift(bl(s,H,N))):h||(H=br(s,f),H!=null&&w.push(bl(s,H,N)))),s=s.return}w.length!==0&&e.push({event:r,listeners:w})}var Cb=/\r\n?/g,jb=/\u0000|\uFFFD/g;function P1(e){return(typeof e=="string"?e:""+e).replace(Cb,`
`).replace(jb,"")}function U1(e,r){return r=P1(r),P1(e)===r}function jc(){}function te(e,r,s,l,h,f){switch(s){case"children":typeof l=="string"?r==="body"||r==="textarea"&&l===""||On(e,l):(typeof l=="number"||typeof l=="bigint")&&r!=="body"&&On(e,""+l);break;case"className":ma(e,"class",l);break;case"tabIndex":ma(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ma(e,s,l);break;case"style":Po(e,l,f);break;case"data":if(r!=="object"){ma(e,"data",l);break}case"src":case"href":if(l===""&&(r!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Xn(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(s==="formAction"?(r!=="input"&&te(e,r,"name",h.name,h,null),te(e,r,"formEncType",h.formEncType,h,null),te(e,r,"formMethod",h.formMethod,h,null),te(e,r,"formTarget",h.formTarget,h,null)):(te(e,r,"encType",h.encType,h,null),te(e,r,"method",h.method,h,null),te(e,r,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Xn(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=jc);break;case"onScroll":l!=null&&kt("scroll",e);break;case"onScrollEnd":l!=null&&kt("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=Xn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":kt("beforetoggle",e),kt("toggle",e),pa(e,"popover",l);break;case"xlinkActuate":Mn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Mn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Mn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Mn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Mn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Mn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Mn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Mn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Mn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":pa(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Nu.get(s)||s,pa(e,s,l))}}function Yf(e,r,s,l,h,f){switch(s){case"style":Po(e,l,f);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof l=="string"?On(e,l):(typeof l=="number"||typeof l=="bigint")&&On(e,""+l);break;case"onScroll":l!=null&&kt("scroll",e);break;case"onScrollEnd":l!=null&&kt("scrollend",e);break;case"onClick":l!=null&&(e.onclick=jc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!da.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),r=s.slice(2,h?s.length-7:void 0),f=e[Ge]||null,f=f!=null?f[s]:null,typeof f=="function"&&e.removeEventListener(r,f,h),typeof l=="function")){typeof f!="function"&&f!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(r,l,h);break t}s in e?e[s]=l:l===!0?e.setAttribute(s,""):pa(e,s,l)}}}function Xe(e,r,s){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":kt("error",e),kt("load",e);var l=!1,h=!1,f;for(f in s)if(s.hasOwnProperty(f)){var w=s[f];if(w!=null)switch(f){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:te(e,r,f,w,s,null)}}h&&te(e,r,"srcSet",s.srcSet,s,null),l&&te(e,r,"src",s.src,s,null);return;case"input":kt("invalid",e);var b=f=w=h=null,N=null,H=null;for(l in s)if(s.hasOwnProperty(l)){var et=s[l];if(et!=null)switch(l){case"name":h=et;break;case"type":w=et;break;case"checked":N=et;break;case"defaultChecked":H=et;break;case"value":f=et;break;case"defaultValue":b=et;break;case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(a(137,r));break;default:te(e,r,l,et,s,null)}}Oo(e,f,b,N,H,w,h,!1),_r(e);return;case"select":kt("invalid",e),l=w=f=null;for(h in s)if(s.hasOwnProperty(h)&&(b=s[h],b!=null))switch(h){case"value":f=b;break;case"defaultValue":w=b;break;case"multiple":l=b;default:te(e,r,h,b,s,null)}r=f,s=w,e.multiple=!!l,r!=null?wr(e,!!l,r,!1):s!=null&&wr(e,!!l,s,!0);return;case"textarea":kt("invalid",e),f=h=l=null;for(w in s)if(s.hasOwnProperty(w)&&(b=s[w],b!=null))switch(w){case"value":l=b;break;case"defaultValue":h=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(a(91));break;default:te(e,r,w,b,s,null)}Du(e,l,h,f),_r(e);return;case"option":for(N in s)if(s.hasOwnProperty(N)&&(l=s[N],l!=null))switch(N){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:te(e,r,N,l,s,null)}return;case"dialog":kt("beforetoggle",e),kt("toggle",e),kt("cancel",e),kt("close",e);break;case"iframe":case"object":kt("load",e);break;case"video":case"audio":for(l=0;l<El.length;l++)kt(El[l],e);break;case"image":kt("error",e),kt("load",e);break;case"details":kt("toggle",e);break;case"embed":case"source":case"link":kt("error",e),kt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(H in s)if(s.hasOwnProperty(H)&&(l=s[H],l!=null))switch(H){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:te(e,r,H,l,s,null)}return;default:if(ds(r)){for(et in s)s.hasOwnProperty(et)&&(l=s[et],l!==void 0&&Yf(e,r,et,l,s,void 0));return}}for(b in s)s.hasOwnProperty(b)&&(l=s[b],l!=null&&te(e,r,b,l,s,null))}function Db(e,r,s,l){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,f=null,w=null,b=null,N=null,H=null,et=null;for(Q in s){var rt=s[Q];if(s.hasOwnProperty(Q)&&rt!=null)switch(Q){case"checked":break;case"value":break;case"defaultValue":N=rt;default:l.hasOwnProperty(Q)||te(e,r,Q,null,l,rt)}}for(var G in l){var Q=l[G];if(rt=s[G],l.hasOwnProperty(G)&&(Q!=null||rt!=null))switch(G){case"type":f=Q;break;case"name":h=Q;break;case"checked":H=Q;break;case"defaultChecked":et=Q;break;case"value":w=Q;break;case"defaultValue":b=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(a(137,r));break;default:Q!==rt&&te(e,r,G,Q,l,rt)}}Mo(e,w,b,N,H,et,f,h);return;case"select":Q=w=b=G=null;for(f in s)if(N=s[f],s.hasOwnProperty(f)&&N!=null)switch(f){case"value":break;case"multiple":Q=N;default:l.hasOwnProperty(f)||te(e,r,f,null,l,N)}for(h in l)if(f=l[h],N=s[h],l.hasOwnProperty(h)&&(f!=null||N!=null))switch(h){case"value":G=f;break;case"defaultValue":b=f;break;case"multiple":w=f;default:f!==N&&te(e,r,h,f,l,N)}r=b,s=w,l=Q,G!=null?wr(e,!!s,G,!1):!!l!=!!s&&(r!=null?wr(e,!!s,r,!0):wr(e,!!s,s?[]:"",!1));return;case"textarea":Q=G=null;for(b in s)if(h=s[b],s.hasOwnProperty(b)&&h!=null&&!l.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:te(e,r,b,null,l,h)}for(w in l)if(h=l[w],f=s[w],l.hasOwnProperty(w)&&(h!=null||f!=null))switch(w){case"value":G=h;break;case"defaultValue":Q=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==f&&te(e,r,w,h,l,f)}ju(e,G,Q);return;case"option":for(var Tt in s)if(G=s[Tt],s.hasOwnProperty(Tt)&&G!=null&&!l.hasOwnProperty(Tt))switch(Tt){case"selected":e.selected=!1;break;default:te(e,r,Tt,null,l,G)}for(N in l)if(G=l[N],Q=s[N],l.hasOwnProperty(N)&&G!==Q&&(G!=null||Q!=null))switch(N){case"selected":e.selected=G&&typeof G!="function"&&typeof G!="symbol";break;default:te(e,r,N,G,l,Q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var wt in s)G=s[wt],s.hasOwnProperty(wt)&&G!=null&&!l.hasOwnProperty(wt)&&te(e,r,wt,null,l,G);for(H in l)if(G=l[H],Q=s[H],l.hasOwnProperty(H)&&G!==Q&&(G!=null||Q!=null))switch(H){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(a(137,r));break;default:te(e,r,H,G,l,Q)}return;default:if(ds(r)){for(var ee in s)G=s[ee],s.hasOwnProperty(ee)&&G!==void 0&&!l.hasOwnProperty(ee)&&Yf(e,r,ee,void 0,l,G);for(et in l)G=l[et],Q=s[et],!l.hasOwnProperty(et)||G===Q||G===void 0&&Q===void 0||Yf(e,r,et,G,l,Q);return}}for(var $ in s)G=s[$],s.hasOwnProperty($)&&G!=null&&!l.hasOwnProperty($)&&te(e,r,$,null,l,G);for(rt in l)G=l[rt],Q=s[rt],!l.hasOwnProperty(rt)||G===Q||G==null&&Q==null||te(e,r,rt,G,l,Q)}var Qf=null,Xf=null;function Dc(e){return e.nodeType===9?e:e.ownerDocument}function L1(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function z1(e,r){if(e===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&r==="foreignObject"?0:e}function Wf(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Zf=null;function Nb(){var e=window.event;return e&&e.type==="popstate"?e===Zf?!1:(Zf=e,!0):(Zf=null,!1)}var $1=typeof setTimeout=="function"?setTimeout:void 0,Mb=typeof clearTimeout=="function"?clearTimeout:void 0,B1=typeof Promise=="function"?Promise:void 0,Ob=typeof queueMicrotask=="function"?queueMicrotask:typeof B1<"u"?function(e){return B1.resolve(null).then(e).catch(Vb)}:$1;function Vb(e){setTimeout(function(){throw e})}function $r(e){return e==="head"}function F1(e,r){var s=r,l=0,h=0;do{var f=s.nextSibling;if(e.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"){if(0<l&&8>l){s=l;var w=e.ownerDocument;if(s&1&&Tl(w.documentElement),s&2&&Tl(w.body),s&4)for(s=w.head,Tl(s),w=s.firstChild;w;){var b=w.nextSibling,N=w.nodeName;w[gr]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&w.rel.toLowerCase()==="stylesheet"||s.removeChild(w),w=b}}if(h===0){e.removeChild(f),Nl(r);return}h--}else s==="$"||s==="$?"||s==="$!"?h++:l=s.charCodeAt(0)-48;else l=0;s=f}while(s);Nl(r)}function Jf(e){var r=e.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var s=r;switch(r=r.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Jf(s),os(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function kb(e,r,s,l){for(;e.nodeType===1;){var h=s;if(e.nodeName.toLowerCase()!==r.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[gr])switch(r){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(r==="input"&&e.type==="hidden"){var f=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ni(e.nextSibling),e===null)break}return null}function Pb(e,r,s){if(r==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=ni(e.nextSibling),e===null))return null;return e}function tp(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Ub(e,r){var s=e.ownerDocument;if(e.data!=="$?"||s.readyState==="complete")r();else{var l=function(){r(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function ni(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return e}var ep=null;function K1(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(r===0)return e;r--}else s==="/$"&&r++}e=e.previousSibling}return null}function q1(e,r,s){switch(r=Dc(s),e){case"html":if(e=r.documentElement,!e)throw Error(a(452));return e;case"head":if(e=r.head,!e)throw Error(a(453));return e;case"body":if(e=r.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Tl(e){for(var r=e.attributes;r.length;)e.removeAttributeNode(r[0]);os(e)}var Bn=new Map,H1=new Set;function Nc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ji=dt.d;dt.d={f:Lb,r:zb,D:$b,C:Bb,L:Fb,m:Kb,X:Hb,S:qb,M:Gb};function Lb(){var e=Ji.f(),r=bc();return e||r}function zb(e){var r=ci(e);r!==null&&r.tag===5&&r.type==="form"?dy(r):Ji.r(e)}var Ks=typeof document>"u"?null:document;function G1(e,r,s){var l=Ks;if(l&&typeof r=="string"&&r){var h=$e(r);h='link[rel="'+e+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),H1.has(h)||(H1.add(h),e={rel:e,crossOrigin:s,href:r},l.querySelector(h)===null&&(r=l.createElement("link"),Xe(r,"link",e),we(r),l.head.appendChild(r)))}}function $b(e){Ji.D(e),G1("dns-prefetch",e,null)}function Bb(e,r){Ji.C(e,r),G1("preconnect",e,r)}function Fb(e,r,s){Ji.L(e,r,s);var l=Ks;if(l&&e&&r){var h='link[rel="preload"][as="'+$e(r)+'"]';r==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+$e(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+$e(s.imageSizes)+'"]')):h+='[href="'+$e(e)+'"]';var f=h;switch(r){case"style":f=qs(e);break;case"script":f=Hs(e)}Bn.has(f)||(e=v({rel:"preload",href:r==="image"&&s&&s.imageSrcSet?void 0:e,as:r},s),Bn.set(f,e),l.querySelector(h)!==null||r==="style"&&l.querySelector(Sl(f))||r==="script"&&l.querySelector(Al(f))||(r=l.createElement("link"),Xe(r,"link",e),we(r),l.head.appendChild(r)))}}function Kb(e,r){Ji.m(e,r);var s=Ks;if(s&&e){var l=r&&typeof r.as=="string"?r.as:"script",h='link[rel="modulepreload"][as="'+$e(l)+'"][href="'+$e(e)+'"]',f=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Hs(e)}if(!Bn.has(f)&&(e=v({rel:"modulepreload",href:e},r),Bn.set(f,e),s.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Al(f)))return}l=s.createElement("link"),Xe(l,"link",e),we(l),s.head.appendChild(l)}}}function qb(e,r,s){Ji.S(e,r,s);var l=Ks;if(l&&e){var h=xr(l).hoistableStyles,f=qs(e);r=r||"default";var w=h.get(f);if(!w){var b={loading:0,preload:null};if(w=l.querySelector(Sl(f)))b.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":r},s),(s=Bn.get(f))&&np(e,s);var N=w=l.createElement("link");we(N),Xe(N,"link",e),N._p=new Promise(function(H,et){N.onload=H,N.onerror=et}),N.addEventListener("load",function(){b.loading|=1}),N.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Mc(w,r,l)}w={type:"stylesheet",instance:w,count:1,state:b},h.set(f,w)}}}function Hb(e,r){Ji.X(e,r);var s=Ks;if(s&&e){var l=xr(s).hoistableScripts,h=Hs(e),f=l.get(h);f||(f=s.querySelector(Al(h)),f||(e=v({src:e,async:!0},r),(r=Bn.get(h))&&ip(e,r),f=s.createElement("script"),we(f),Xe(f,"link",e),s.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(h,f))}}function Gb(e,r){Ji.M(e,r);var s=Ks;if(s&&e){var l=xr(s).hoistableScripts,h=Hs(e),f=l.get(h);f||(f=s.querySelector(Al(h)),f||(e=v({src:e,async:!0,type:"module"},r),(r=Bn.get(h))&&ip(e,r),f=s.createElement("script"),we(f),Xe(f,"link",e),s.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(h,f))}}function Y1(e,r,s,l){var h=(h=_t.current)?Nc(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(r=qs(s.href),s=xr(h).hoistableStyles,l=s.get(r),l||(l={type:"style",instance:null,count:0,state:null},s.set(r,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=qs(s.href);var f=xr(h).hoistableStyles,w=f.get(e);if(w||(h=h.ownerDocument||h,w={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,w),(f=h.querySelector(Sl(e)))&&!f._p&&(w.instance=f,w.state.loading=5),Bn.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Bn.set(e,s),f||Yb(h,e,s,w.state))),r&&l===null)throw Error(a(528,""));return w}if(r&&l!==null)throw Error(a(529,""));return null;case"script":return r=s.async,s=s.src,typeof s=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Hs(s),s=xr(h).hoistableScripts,l=s.get(r),l||(l={type:"script",instance:null,count:0,state:null},s.set(r,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function qs(e){return'href="'+$e(e)+'"'}function Sl(e){return'link[rel="stylesheet"]['+e+"]"}function Q1(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function Yb(e,r,s,l){e.querySelector('link[rel="preload"][as="style"]['+r+"]")?l.loading=1:(r=e.createElement("link"),l.preload=r,r.addEventListener("load",function(){return l.loading|=1}),r.addEventListener("error",function(){return l.loading|=2}),Xe(r,"link",s),we(r),e.head.appendChild(r))}function Hs(e){return'[src="'+$e(e)+'"]'}function Al(e){return"script[async]"+e}function X1(e,r,s){if(r.count++,r.instance===null)switch(r.type){case"style":var l=e.querySelector('style[data-href~="'+$e(s.href)+'"]');if(l)return r.instance=l,we(l),l;var h=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),we(l),Xe(l,"style",h),Mc(l,s.precedence,e),r.instance=l;case"stylesheet":h=qs(s.href);var f=e.querySelector(Sl(h));if(f)return r.state.loading|=4,r.instance=f,we(f),f;l=Q1(s),(h=Bn.get(h))&&np(l,h),f=(e.ownerDocument||e).createElement("link"),we(f);var w=f;return w._p=new Promise(function(b,N){w.onload=b,w.onerror=N}),Xe(f,"link",l),r.state.loading|=4,Mc(f,s.precedence,e),r.instance=f;case"script":return f=Hs(s.src),(h=e.querySelector(Al(f)))?(r.instance=h,we(h),h):(l=s,(h=Bn.get(f))&&(l=v({},s),ip(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),we(h),Xe(h,"link",l),e.head.appendChild(h),r.instance=h);case"void":return null;default:throw Error(a(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(l=r.instance,r.state.loading|=4,Mc(l,s.precedence,e));return r.instance}function Mc(e,r,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,f=h,w=0;w<l.length;w++){var b=l[w];if(b.dataset.precedence===r)f=b;else if(f!==h)break}f?f.parentNode.insertBefore(e,f.nextSibling):(r=s.nodeType===9?s.head:s,r.insertBefore(e,r.firstChild))}function np(e,r){e.crossOrigin==null&&(e.crossOrigin=r.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=r.referrerPolicy),e.title==null&&(e.title=r.title)}function ip(e,r){e.crossOrigin==null&&(e.crossOrigin=r.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=r.referrerPolicy),e.integrity==null&&(e.integrity=r.integrity)}var Oc=null;function W1(e,r,s){if(Oc===null){var l=new Map,h=Oc=new Map;h.set(s,l)}else h=Oc,l=h.get(s),l||(l=new Map,h.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),h=0;h<s.length;h++){var f=s[h];if(!(f[gr]||f[_e]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var w=f.getAttribute(r)||"";w=e+w;var b=l.get(w);b?b.push(f):l.set(w,[f])}}return l}function Z1(e,r,s){e=e.ownerDocument||e,e.head.insertBefore(s,r==="title"?e.querySelector("head > title"):null)}function Qb(e,r,s){if(s===1||r.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return e=r.disabled,typeof r.precedence=="string"&&e==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function J1(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Rl=null;function Xb(){}function Wb(e,r,s){if(Rl===null)throw Error(a(475));var l=Rl;if(r.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=qs(s.href),f=e.querySelector(Sl(h));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Vc.bind(l),e.then(l,l)),r.state.loading|=4,r.instance=f,we(f);return}f=e.ownerDocument||e,s=Q1(s),(h=Bn.get(h))&&np(s,h),f=f.createElement("link"),we(f);var w=f;w._p=new Promise(function(b,N){w.onload=b,w.onerror=N}),Xe(f,"link",s),r.instance=f}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(r,e),(e=r.state.preload)&&(r.state.loading&3)===0&&(l.count++,r=Vc.bind(l),e.addEventListener("load",r),e.addEventListener("error",r))}}function Zb(){if(Rl===null)throw Error(a(475));var e=Rl;return e.stylesheets&&e.count===0&&rp(e,e.stylesheets),0<e.count?function(r){var s=setTimeout(function(){if(e.stylesheets&&rp(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(s)}}:null}function Vc(){if(this.count--,this.count===0){if(this.stylesheets)rp(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var kc=null;function rp(e,r){e.stylesheets=null,e.unsuspend!==null&&(e.count++,kc=new Map,r.forEach(Jb,e),kc=null,Vc.call(e))}function Jb(e,r){if(!(r.state.loading&4)){var s=kc.get(e);if(s)var l=s.get(null);else{s=new Map,kc.set(e,s);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<h.length;f++){var w=h[f];(w.nodeName==="LINK"||w.getAttribute("media")!=="not all")&&(s.set(w.dataset.precedence,w),l=w)}l&&s.set(null,l)}h=r.instance,w=h.getAttribute("data-precedence"),f=s.get(w)||l,f===l&&s.set(null,h),s.set(w,h),this.count++,l=Vc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),f?f.parentNode.insertBefore(h,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),r.state.loading|=4}}var Il={$$typeof:tt,Provider:null,Consumer:null,_currentValue:yt,_currentValue2:yt,_threadCount:0};function tT(e,r,s,l,h,f,w,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ss(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ss(0),this.hiddenUpdates=ss(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=f,this.onRecoverableError=w,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function tx(e,r,s,l,h,f,w,b,N,H,et,rt){return e=new tT(e,r,s,w,b,N,H,rt),r=1,f===!0&&(r|=24),f=bn(3,null,null,r),e.current=f,f.stateNode=e,r=Ud(),r.refCount++,e.pooledCache=r,r.refCount++,f.memoizedState={element:l,isDehydrated:s,cache:r},Bd(f),e}function ex(e){return e?(e=bs,e):bs}function nx(e,r,s,l,h,f){h=ex(h),l.context===null?l.context=h:l.pendingContext=h,l=Ir(r),l.payload={element:s},f=f===void 0?null:f,f!==null&&(l.callback=f),s=Cr(e,l,r),s!==null&&(In(s,e,r),rl(s,e,r))}function ix(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<r?s:r}}function ap(e,r){ix(e,r),(e=e.alternate)&&ix(e,r)}function rx(e){if(e.tag===13){var r=Es(e,67108864);r!==null&&In(r,e,67108864),ap(e,67108864)}}var Pc=!0;function eT(e,r,s,l){var h=J.T;J.T=null;var f=dt.p;try{dt.p=2,sp(e,r,s,l)}finally{dt.p=f,J.T=h}}function nT(e,r,s,l){var h=J.T;J.T=null;var f=dt.p;try{dt.p=8,sp(e,r,s,l)}finally{dt.p=f,J.T=h}}function sp(e,r,s,l){if(Pc){var h=op(l);if(h===null)Gf(e,r,l,Uc,s),sx(e,l);else if(rT(h,e,r,s,l))l.stopPropagation();else if(sx(e,l),r&4&&-1<iT.indexOf(e)){for(;h!==null;){var f=ci(h);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var w=Gn(f.pendingLanes);if(w!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;w;){var N=1<<31-un(w);b.entanglements[1]|=N,w&=~N}_i(f),(Xt&6)===0&&(wc=pn()+500,wl(0))}}break;case 13:b=Es(f,2),b!==null&&In(b,f,2),bc(),ap(f,2)}if(f=op(l),f===null&&Gf(e,r,l,Uc,s),f===h)break;h=f}h!==null&&l.stopPropagation()}else Gf(e,r,l,null,s)}}function op(e){return e=Lo(e),lp(e)}var Uc=null;function lp(e){if(Uc=null,e=ui(e),e!==null){var r=u(e);if(r===null)e=null;else{var s=r.tag;if(s===13){if(e=d(r),e!==null)return e;e=null}else if(s===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null)}}return Uc=e,null}function ax(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Su()){case Oe:return 2;case ze:return 8;case Mi:case dd:return 32;case Co:return 268435456;default:return 32}default:return 32}}var up=!1,Br=null,Fr=null,Kr=null,Cl=new Map,jl=new Map,qr=[],iT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sx(e,r){switch(e){case"focusin":case"focusout":Br=null;break;case"dragenter":case"dragleave":Fr=null;break;case"mouseover":case"mouseout":Kr=null;break;case"pointerover":case"pointerout":Cl.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":jl.delete(r.pointerId)}}function Dl(e,r,s,l,h,f){return e===null||e.nativeEvent!==f?(e={blockedOn:r,domEventName:s,eventSystemFlags:l,nativeEvent:f,targetContainers:[h]},r!==null&&(r=ci(r),r!==null&&rx(r)),e):(e.eventSystemFlags|=l,r=e.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),e)}function rT(e,r,s,l,h){switch(r){case"focusin":return Br=Dl(Br,e,r,s,l,h),!0;case"dragenter":return Fr=Dl(Fr,e,r,s,l,h),!0;case"mouseover":return Kr=Dl(Kr,e,r,s,l,h),!0;case"pointerover":var f=h.pointerId;return Cl.set(f,Dl(Cl.get(f)||null,e,r,s,l,h)),!0;case"gotpointercapture":return f=h.pointerId,jl.set(f,Dl(jl.get(f)||null,e,r,s,l,h)),!0}return!1}function ox(e){var r=ui(e.target);if(r!==null){var s=u(r);if(s!==null){if(r=s.tag,r===13){if(r=d(s),r!==null){e.blockedOn=r,md(e.priority,function(){if(s.tag===13){var l=Rn();l=Do(l);var h=Es(s,l);h!==null&&In(h,s,l),ap(s,l)}});return}}else if(r===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lc(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var s=op(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);Uo=l,s.target.dispatchEvent(l),Uo=null}else return r=ci(s),r!==null&&rx(r),e.blockedOn=s,!1;r.shift()}return!0}function lx(e,r,s){Lc(e)&&s.delete(r)}function aT(){up=!1,Br!==null&&Lc(Br)&&(Br=null),Fr!==null&&Lc(Fr)&&(Fr=null),Kr!==null&&Lc(Kr)&&(Kr=null),Cl.forEach(lx),jl.forEach(lx)}function zc(e,r){e.blockedOn===r&&(e.blockedOn=null,up||(up=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,aT)))}var $c=null;function ux(e){$c!==e&&($c=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){$c===e&&($c=null);for(var r=0;r<e.length;r+=3){var s=e[r],l=e[r+1],h=e[r+2];if(typeof l!="function"){if(lp(l||s)===null)continue;break}var f=ci(s);f!==null&&(e.splice(r,3),r-=3,lf(f,{pending:!0,data:h,method:s.method,action:l},l,h))}}))}function Nl(e){function r(N){return zc(N,e)}Br!==null&&zc(Br,e),Fr!==null&&zc(Fr,e),Kr!==null&&zc(Kr,e),Cl.forEach(r),jl.forEach(r);for(var s=0;s<qr.length;s++){var l=qr[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<qr.length&&(s=qr[0],s.blockedOn===null);)ox(s),s.blockedOn===null&&qr.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var h=s[l],f=s[l+1],w=h[Ge]||null;if(typeof f=="function")w||ux(s);else if(w){var b=null;if(f&&f.hasAttribute("formAction")){if(h=f,w=f[Ge]||null)b=w.formAction;else if(lp(h)!==null)continue}else b=w.action;typeof b=="function"?s[l+1]=b:(s.splice(l,3),l-=3),ux(s)}}}function cp(e){this._internalRoot=e}Bc.prototype.render=cp.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(a(409));var s=r.current,l=Rn();nx(s,l,e,r,null,null)},Bc.prototype.unmount=cp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;nx(e.current,2,null,e,null,null),bc(),r[Vi]=null}};function Bc(e){this._internalRoot=e}Bc.prototype.unstable_scheduleHydration=function(e){if(e){var r=Oi();e={blockedOn:null,target:e,priority:r};for(var s=0;s<qr.length&&r!==0&&r<qr[s].priority;s++);qr.splice(s,0,e),s===0&&ox(e)}};var cx=t.version;if(cx!=="19.1.1")throw Error(a(527,cx,"19.1.1"));dt.findDOMNode=function(e){var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=p(r),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var sT={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:J,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fc.isDisabled&&Fc.supportsFiber)try{cr=Fc.inject(sT),tn=Fc}catch{}}return Pl.createRoot=function(e,r){if(!o(e))throw Error(a(299));var s=!1,l="",h=Ay,f=Ry,w=Iy,b=null;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(f=r.onCaughtError),r.onRecoverableError!==void 0&&(w=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(b=r.unstable_transitionCallbacks)),r=tx(e,1,!1,null,null,s,l,h,f,w,b,null),e[Vi]=r.current,Hf(e),new cp(r)},Pl.hydrateRoot=function(e,r,s){if(!o(e))throw Error(a(299));var l=!1,h="",f=Ay,w=Ry,b=Iy,N=null,H=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(w=s.onCaughtError),s.onRecoverableError!==void 0&&(b=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(N=s.unstable_transitionCallbacks),s.formState!==void 0&&(H=s.formState)),r=tx(e,1,!0,r,s??null,l,h,f,w,b,N,H),r.context=ex(null),s=r.current,l=Rn(),l=Do(l),h=Ir(l),h.callback=null,Cr(s,h,l),s=l,r.current.lanes=s,ve(r,s),_i(r),e[Vi]=r.current,Hf(e),new Bc(r)},Pl.version="19.1.1",Pl}var P_;function B9(){if(P_)return Zp.exports;P_=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}return n(),Zp.exports=$9(),Zp.exports}var F9=B9();function K9(){const n=ji();return St.useLayoutEffect(()=>{window.scrollTo({top:0,behavior:"instant"});const t=document.getElementById("main");t&&t.focus({preventScroll:!0})},[n]),null}function q9({headerMode:n,setHeaderMode:t}){const i=B.useMemo(()=>[{key:"projects",label:"PROJECTS",href:"/projects/"},{key:"peoples",label:"PEOPLES",href:"/peoples/"},{key:"showroom",label:"SHOWROOM",href:"/showroom/"},{key:"guestbook",label:"GUESTBOOK",href:"/guestbook/"},{key:"credits",label:"CREDITS",href:"/credits/"}],[]),a=ji(),o=B.useMemo(()=>{const d=a.pathname.replace(/^\/+/,"");if(!d)return;const m=d.split("/")[0];return["projects","peoples","showroom","guestbook","credits"].includes(m)?m:void 0},[a.pathname]),u=o==="showroom";return y.jsxs(y.Fragment,{children:[y.jsx(R2,{items:i,activeKey:o,mode:n,autoOnScroll:n===he.GRADIENT_DARK||n===he.DARK,scrollThreshold:8,sticky:!0,overlay:n===he.GRADIENT_DARK||n===he.DARK,maxWidth:1280,onModeChange:t}),y.jsx("main",{id:"main",tabIndex:-1,style:{outline:"none",width:"100vw",boxSizing:"border-box",padding:0},children:y.jsx(iS,{})}),!u&&y.jsx(I2,{title:"잔향 : 기억의 향기",nav:[{label:"PROJECTS",href:"/projects/"},{label:"PEOPLES",href:"/peoples/"},{label:"SHOWROOM",href:"/showroom/"},{label:"GUESTBOOK",href:"/guestbook/"},{label:"CREDITS",href:"/credits/"}],copyright:["ⓒ 2025 TECH UNIV KOREA. ALL RIGHTS RESERVED.","TUKOREA DESIGN ENGINEERING 20TH GRADUATION EXHIBITION"],social:{youtube:{href:"https://youtube.com/",label:"YouTube"},instagram:{href:"https://www.instagram.com/tukd_grad?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",label:"Instagram"}},sidePadding:350,maxWidth:1220})]})}function H9({setHeaderMode:n}){return St.useLayoutEffect(()=>{n(he.GRADIENT)},[n]),y.jsx(z4,{})}function G9({setHeaderMode:n}){return St.useLayoutEffect(()=>{n(he.GRADIENT)},[n]),y.jsx(bR,{})}function Y9({setHeaderMode:n}){return St.useLayoutEffect(()=>{n(he.GRADIENT)},[n]),y.jsx(Kj,{})}function Q9({setHeaderMode:n}){return St.useLayoutEffect(()=>{n(he.GRADIENT_DARK)},[n]),y.jsx(E5,{})}function X9({setHeaderMode:n}){return St.useLayoutEffect(()=>{n(he.DARK)},[n]),y.jsx(VN,{})}function W9({setHeaderMode:n}){return St.useLayoutEffect(()=>{n(he.LIGHT)},[n]),y.jsx(R9,{})}function Z9({setHeaderMode:n}){return St.useLayoutEffect(()=>{n(he.DARK)},[n]),y.jsx(U9,{})}function J9(){const[n,t]=B.useState(he.GRADIENT);return y.jsxs(IS,{basename:"/",children:[y.jsx(K9,{}),y.jsx(aS,{children:y.jsxs(wi,{element:y.jsx(q9,{headerMode:n,setHeaderMode:t}),children:[y.jsx(wi,{index:!0,element:y.jsx(Q9,{setHeaderMode:t})}),y.jsx(wi,{path:"projects/",element:y.jsx(Y9,{setHeaderMode:t})}),y.jsx(wi,{path:"peoples/",element:y.jsx(G9,{setHeaderMode:t})}),y.jsx(wi,{path:"guestbook/",element:y.jsx(X9,{setHeaderMode:t})}),y.jsx(wi,{path:"work/:pid",element:y.jsx(W9,{setHeaderMode:t})}),y.jsx(wi,{path:"credits/",element:y.jsx(H9,{setHeaderMode:t})}),y.jsx(wi,{path:"showroom/",element:y.jsx(Z9,{setHeaderMode:t})}),y.jsx(wi,{path:"*",element:y.jsx(nS,{to:"/",replace:!0})})]})})]})}const U_=typeof document<"u"?document.getElementById("root"):null;U_&&F9.createRoot(U_).render(y.jsx(J9,{}));
