(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function r(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(o){if(o.ep)return;o.ep=!0;const u=r(o);fetch(o.href,u)}})();function m_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var rp={exports:{}},Cl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y1;function Nw(){if(Y1)return Cl;Y1=1;var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(a,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var p in o)p!=="key"&&(u[p]=o[p])}else u=o;return o=u.ref,{$$typeof:n,type:a,key:f,ref:o!==void 0?o:null,props:u}}return Cl.Fragment=t,Cl.jsx=r,Cl.jsxs=r,Cl}var Q1;function Mw(){return Q1||(Q1=1,rp.exports=Nw()),rp.exports}var x=Mw(),ap={exports:{}},jt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X1;function Ow(){if(X1)return jt;X1=1;var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),w=Symbol.iterator;function S(V){return V===null||typeof V!="object"?null:(V=w&&V[w]||V["@@iterator"],typeof V=="function"?V:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,B={};function P(V,at,lt){this.props=V,this.context=at,this.refs=B,this.updater=lt||R}P.prototype.isReactComponent={},P.prototype.setState=function(V,at){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,at,"setState")},P.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function G(){}G.prototype=P.prototype;function X(V,at,lt){this.props=V,this.context=at,this.refs=B,this.updater=lt||R}var it=X.prototype=new G;it.constructor=X,O(it,P.prototype),it.isPureReactComponent=!0;var ht=Array.isArray,J={H:null,A:null,T:null,S:null,V:null},dt=Object.prototype.hasOwnProperty;function j(V,at,lt,ut,gt,It){return lt=It.ref,{$$typeof:n,type:V,key:at,ref:lt!==void 0?lt:null,props:It}}function C(V,at){return j(V.type,at,void 0,void 0,void 0,V.props)}function I(V){return typeof V=="object"&&V!==null&&V.$$typeof===n}function M(V){var at={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(lt){return at[lt]})}var k=/\/+/g;function z(V,at){return typeof V=="object"&&V!==null&&V.key!=null?M(""+V.key):at.toString(36)}function N(){}function ue(V){switch(V.status){case"fulfilled":return V.value;case"rejected":throw V.reason;default:switch(typeof V.status=="string"?V.then(N,N):(V.status="pending",V.then(function(at){V.status==="pending"&&(V.status="fulfilled",V.value=at)},function(at){V.status==="pending"&&(V.status="rejected",V.reason=at)})),V.status){case"fulfilled":return V.value;case"rejected":throw V.reason}}throw V}function ne(V,at,lt,ut,gt){var It=typeof V;(It==="undefined"||It==="boolean")&&(V=null);var _t=!1;if(V===null)_t=!0;else switch(It){case"bigint":case"string":case"number":_t=!0;break;case"object":switch(V.$$typeof){case n:case t:_t=!0;break;case v:return _t=V._init,ne(_t(V._payload),at,lt,ut,gt)}}if(_t)return gt=gt(V),_t=ut===""?"."+z(V,0):ut,ht(gt)?(lt="",_t!=null&&(lt=_t.replace(k,"$&/")+"/"),ne(gt,at,lt,"",function(Me){return Me})):gt!=null&&(I(gt)&&(gt=C(gt,lt+(gt.key==null||V&&V.key===gt.key?"":(""+gt.key).replace(k,"$&/")+"/")+_t)),at.push(gt)),1;_t=0;var ge=ut===""?".":ut+":";if(ht(V))for(var Lt=0;Lt<V.length;Lt++)ut=V[Lt],It=ge+z(ut,Lt),_t+=ne(ut,at,lt,It,gt);else if(Lt=S(V),typeof Lt=="function")for(V=Lt.call(V),Lt=0;!(ut=V.next()).done;)ut=ut.value,It=ge+z(ut,Lt++),_t+=ne(ut,at,lt,It,gt);else if(It==="object"){if(typeof V.then=="function")return ne(ue(V),at,lt,ut,gt);throw at=String(V),Error("Objects are not valid as a React child (found: "+(at==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":at)+"). If you meant to render a collection of children, use an array instead.")}return _t}function Z(V,at,lt){if(V==null)return V;var ut=[],gt=0;return ne(V,ut,"","",function(It){return at.call(lt,It,gt++)}),ut}function ct(V){if(V._status===-1){var at=V._result;at=at(),at.then(function(lt){(V._status===0||V._status===-1)&&(V._status=1,V._result=lt)},function(lt){(V._status===0||V._status===-1)&&(V._status=2,V._result=lt)}),V._status===-1&&(V._status=0,V._result=at)}if(V._status===1)return V._result.default;throw V._result}var yt=typeof reportError=="function"?reportError:function(V){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var at=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof V=="object"&&V!==null&&typeof V.message=="string"?String(V.message):String(V),error:V});if(!window.dispatchEvent(at))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",V);return}console.error(V)};function Ct(){}return jt.Children={map:Z,forEach:function(V,at,lt){Z(V,function(){at.apply(this,arguments)},lt)},count:function(V){var at=0;return Z(V,function(){at++}),at},toArray:function(V){return Z(V,function(at){return at})||[]},only:function(V){if(!I(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},jt.Component=P,jt.Fragment=r,jt.Profiler=o,jt.PureComponent=X,jt.StrictMode=a,jt.Suspense=m,jt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,jt.__COMPILER_RUNTIME={__proto__:null,c:function(V){return J.H.useMemoCache(V)}},jt.cache=function(V){return function(){return V.apply(null,arguments)}},jt.cloneElement=function(V,at,lt){if(V==null)throw Error("The argument must be a React element, but you passed "+V+".");var ut=O({},V.props),gt=V.key,It=void 0;if(at!=null)for(_t in at.ref!==void 0&&(It=void 0),at.key!==void 0&&(gt=""+at.key),at)!dt.call(at,_t)||_t==="key"||_t==="__self"||_t==="__source"||_t==="ref"&&at.ref===void 0||(ut[_t]=at[_t]);var _t=arguments.length-2;if(_t===1)ut.children=lt;else if(1<_t){for(var ge=Array(_t),Lt=0;Lt<_t;Lt++)ge[Lt]=arguments[Lt+2];ut.children=ge}return j(V.type,gt,void 0,void 0,It,ut)},jt.createContext=function(V){return V={$$typeof:f,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null},V.Provider=V,V.Consumer={$$typeof:u,_context:V},V},jt.createElement=function(V,at,lt){var ut,gt={},It=null;if(at!=null)for(ut in at.key!==void 0&&(It=""+at.key),at)dt.call(at,ut)&&ut!=="key"&&ut!=="__self"&&ut!=="__source"&&(gt[ut]=at[ut]);var _t=arguments.length-2;if(_t===1)gt.children=lt;else if(1<_t){for(var ge=Array(_t),Lt=0;Lt<_t;Lt++)ge[Lt]=arguments[Lt+2];gt.children=ge}if(V&&V.defaultProps)for(ut in _t=V.defaultProps,_t)gt[ut]===void 0&&(gt[ut]=_t[ut]);return j(V,It,void 0,void 0,null,gt)},jt.createRef=function(){return{current:null}},jt.forwardRef=function(V){return{$$typeof:p,render:V}},jt.isValidElement=I,jt.lazy=function(V){return{$$typeof:v,_payload:{_status:-1,_result:V},_init:ct}},jt.memo=function(V,at){return{$$typeof:g,type:V,compare:at===void 0?null:at}},jt.startTransition=function(V){var at=J.T,lt={};J.T=lt;try{var ut=V(),gt=J.S;gt!==null&&gt(lt,ut),typeof ut=="object"&&ut!==null&&typeof ut.then=="function"&&ut.then(Ct,yt)}catch(It){yt(It)}finally{J.T=at}},jt.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},jt.use=function(V){return J.H.use(V)},jt.useActionState=function(V,at,lt){return J.H.useActionState(V,at,lt)},jt.useCallback=function(V,at){return J.H.useCallback(V,at)},jt.useContext=function(V){return J.H.useContext(V)},jt.useDebugValue=function(){},jt.useDeferredValue=function(V,at){return J.H.useDeferredValue(V,at)},jt.useEffect=function(V,at,lt){var ut=J.H;if(typeof lt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ut.useEffect(V,at)},jt.useId=function(){return J.H.useId()},jt.useImperativeHandle=function(V,at,lt){return J.H.useImperativeHandle(V,at,lt)},jt.useInsertionEffect=function(V,at){return J.H.useInsertionEffect(V,at)},jt.useLayoutEffect=function(V,at){return J.H.useLayoutEffect(V,at)},jt.useMemo=function(V,at){return J.H.useMemo(V,at)},jt.useOptimistic=function(V,at){return J.H.useOptimistic(V,at)},jt.useReducer=function(V,at,lt){return J.H.useReducer(V,at,lt)},jt.useRef=function(V){return J.H.useRef(V)},jt.useState=function(V){return J.H.useState(V)},jt.useSyncExternalStore=function(V,at,lt){return J.H.useSyncExternalStore(V,at,lt)},jt.useTransition=function(){return J.H.useTransition()},jt.version="19.1.1",jt}var W1;function Tm(){return W1||(W1=1,ap.exports=Ow()),ap.exports}var K=Tm();const Dt=m_(K);/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Z1="popstate";function Vw(n={}){function t(a,o){let{pathname:u,search:f,hash:p}=a.location;return Lp("",{pathname:u,search:f,hash:p},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(a,o){return typeof o=="string"?o:Hl(o)}return Uw(t,r,null,n)}function he(n,t){if(n===!1||n===null||typeof n>"u")throw new Error(t)}function ii(n,t){if(!n){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function kw(){return Math.random().toString(36).substring(2,10)}function J1(n,t){return{usr:n.state,key:n.key,idx:t}}function Lp(n,t,r=null,a){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof t=="string"?co(t):t,state:r,key:t&&t.key||a||kw()}}function Hl({pathname:n="/",search:t="",hash:r=""}){return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function co(n){let t={};if(n){let r=n.indexOf("#");r>=0&&(t.hash=n.substring(r),n=n.substring(0,r));let a=n.indexOf("?");a>=0&&(t.search=n.substring(a),n=n.substring(0,a)),n&&(t.pathname=n)}return t}function Uw(n,t,r,a={}){let{window:o=document.defaultView,v5Compat:u=!1}=a,f=o.history,p="POP",m=null,g=v();g==null&&(g=0,f.replaceState({...f.state,idx:g},""));function v(){return(f.state||{idx:null}).idx}function w(){p="POP";let P=v(),G=P==null?null:P-g;g=P,m&&m({action:p,location:B.location,delta:G})}function S(P,G){p="PUSH";let X=Lp(B.location,P,G);g=v()+1;let it=J1(X,g),ht=B.createHref(X);try{f.pushState(it,"",ht)}catch(J){if(J instanceof DOMException&&J.name==="DataCloneError")throw J;o.location.assign(ht)}u&&m&&m({action:p,location:B.location,delta:1})}function R(P,G){p="REPLACE";let X=Lp(B.location,P,G);g=v();let it=J1(X,g),ht=B.createHref(X);f.replaceState(it,"",ht),u&&m&&m({action:p,location:B.location,delta:0})}function O(P){return Pw(P)}let B={get action(){return p},get location(){return n(o,f)},listen(P){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(Z1,w),m=P,()=>{o.removeEventListener(Z1,w),m=null}},createHref(P){return t(o,P)},createURL:O,encodeLocation(P){let G=O(P);return{pathname:G.pathname,search:G.search,hash:G.hash}},push:S,replace:R,go(P){return f.go(P)}};return B}function Pw(n,t=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),he(r,"No window.location.(origin|href) available to create URL");let a=typeof n=="string"?n:Hl(n);return a=a.replace(/ $/,"%20"),!t&&a.startsWith("//")&&(a=r+a),new URL(a,r)}function g_(n,t,r="/"){return Lw(n,t,r,!1)}function Lw(n,t,r,a){let o=typeof t=="string"?co(t):t,u=ir(o.pathname||"/",r);if(u==null)return null;let f=y_(n);zw(f);let p=null;for(let m=0;p==null&&m<f.length;++m){let g=Ww(u);p=Qw(f[m],g,a)}return p}function y_(n,t=[],r=[],a="",o=!1){let u=(f,p,m=o,g)=>{let v={relativePath:g===void 0?f.path||"":g,caseSensitive:f.caseSensitive===!0,childrenIndex:p,route:f};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(a)&&m)return;he(v.relativePath.startsWith(a),`Absolute route path "${v.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(a.length)}let w=tr([a,v.relativePath]),S=r.concat(v);f.children&&f.children.length>0&&(he(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),y_(f.children,t,S,w,m)),!(f.path==null&&!f.index)&&t.push({path:w,score:Gw(w,f.index),routesMeta:S})};return n.forEach((f,p)=>{if(f.path===""||!f.path?.includes("?"))u(f,p);else for(let m of x_(f.path))u(f,p,!0,m)}),t}function x_(n){let t=n.split("/");if(t.length===0)return[];let[r,...a]=t,o=r.endsWith("?"),u=r.replace(/\?$/,"");if(a.length===0)return o?[u,""]:[u];let f=x_(a.join("/")),p=[];return p.push(...f.map(m=>m===""?u:[u,m].join("/"))),o&&p.push(...f),p.map(m=>n.startsWith("/")&&m===""?"/":m)}function zw(n){n.sort((t,r)=>t.score!==r.score?r.score-t.score:Yw(t.routesMeta.map(a=>a.childrenIndex),r.routesMeta.map(a=>a.childrenIndex)))}var Bw=/^:[\w-]+$/,$w=3,Fw=2,qw=1,Kw=10,Hw=-2,tx=n=>n==="*";function Gw(n,t){let r=n.split("/"),a=r.length;return r.some(tx)&&(a+=Hw),t&&(a+=Fw),r.filter(o=>!tx(o)).reduce((o,u)=>o+(Bw.test(u)?$w:u===""?qw:Kw),a)}function Yw(n,t){return n.length===t.length&&n.slice(0,-1).every((a,o)=>a===t[o])?n[n.length-1]-t[t.length-1]:0}function Qw(n,t,r=!1){let{routesMeta:a}=n,o={},u="/",f=[];for(let p=0;p<a.length;++p){let m=a[p],g=p===a.length-1,v=u==="/"?t:t.slice(u.length)||"/",w=fh({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},v),S=m.route;if(!w&&g&&r&&!a[a.length-1].route.index&&(w=fh({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},v)),!w)return null;Object.assign(o,w.params),f.push({params:o,pathname:tr([u,w.pathname]),pathnameBase:eT(tr([u,w.pathnameBase])),route:S}),w.pathnameBase!=="/"&&(u=tr([u,w.pathnameBase]))}return f}function fh(n,t){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[r,a]=Xw(n.path,n.caseSensitive,n.end),o=t.match(r);if(!o)return null;let u=o[0],f=u.replace(/(.)\/+$/,"$1"),p=o.slice(1);return{params:a.reduce((g,{paramName:v,isOptional:w},S)=>{if(v==="*"){let O=p[S]||"";f=u.slice(0,u.length-O.length).replace(/(.)\/+$/,"$1")}const R=p[S];return w&&!R?g[v]=void 0:g[v]=(R||"").replace(/%2F/g,"/"),g},{}),pathname:u,pathnameBase:f,pattern:n}}function Xw(n,t=!1,r=!0){ii(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let a=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,m)=>(a.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(a.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),a]}function Ww(n){try{return n.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ii(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),n}}function ir(n,t){if(t==="/")return n;if(!n.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,a=n.charAt(r);return a&&a!=="/"?null:n.slice(r)||"/"}function Zw(n,t="/"){let{pathname:r,search:a="",hash:o=""}=typeof n=="string"?co(n):n;return{pathname:r?r.startsWith("/")?r:Jw(r,t):t,search:nT(a),hash:iT(o)}}function Jw(n,t){let r=t.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function sp(n,t,r,a){return`Cannot include a '${n}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function tT(n){return n.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Sm(n){let t=tT(n);return t.map((r,a)=>a===t.length-1?r.pathname:r.pathnameBase)}function Am(n,t,r,a=!1){let o;typeof n=="string"?o=co(n):(o={...n},he(!o.pathname||!o.pathname.includes("?"),sp("?","pathname","search",o)),he(!o.pathname||!o.pathname.includes("#"),sp("#","pathname","hash",o)),he(!o.search||!o.search.includes("#"),sp("#","search","hash",o)));let u=n===""||o.pathname==="",f=u?"/":o.pathname,p;if(f==null)p=r;else{let w=t.length-1;if(!a&&f.startsWith("..")){let S=f.split("/");for(;S[0]==="..";)S.shift(),w-=1;o.pathname=S.join("/")}p=w>=0?t[w]:"/"}let m=Zw(o,p),g=f&&f!=="/"&&f.endsWith("/"),v=(u||f===".")&&r.endsWith("/");return!m.pathname.endsWith("/")&&(g||v)&&(m.pathname+="/"),m}var tr=n=>n.join("/").replace(/\/\/+/g,"/"),eT=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),nT=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,iT=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function rT(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var v_=["POST","PUT","PATCH","DELETE"];new Set(v_);var aT=["GET",...v_];new Set(aT);var ho=K.createContext(null);ho.displayName="DataRouter";var Nh=K.createContext(null);Nh.displayName="DataRouterState";K.createContext(!1);var __=K.createContext({isTransitioning:!1});__.displayName="ViewTransition";var sT=K.createContext(new Map);sT.displayName="Fetchers";var oT=K.createContext(null);oT.displayName="Await";var ai=K.createContext(null);ai.displayName="Navigation";var fo=K.createContext(null);fo.displayName="Location";var qn=K.createContext({outlet:null,matches:[],isDataRoute:!1});qn.displayName="Route";var Rm=K.createContext(null);Rm.displayName="RouteError";function lT(n,{relative:t}={}){he(po(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:a}=K.useContext(ai),{hash:o,pathname:u,search:f}=su(n,{relative:t}),p=u;return r!=="/"&&(p=u==="/"?r:tr([r,u])),a.createHref({pathname:p,search:f,hash:o})}function po(){return K.useContext(fo)!=null}function Ci(){return he(po(),"useLocation() may be used only in the context of a <Router> component."),K.useContext(fo).location}function uT(){return K.useContext(fo).navigationType}var E_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function b_(n){K.useContext(ai).static||K.useLayoutEffect(n)}function Cm(){let{isDataRoute:n}=K.useContext(qn);return n?ST():cT()}function cT(){he(po(),"useNavigate() may be used only in the context of a <Router> component.");let n=K.useContext(ho),{basename:t,navigator:r}=K.useContext(ai),{matches:a}=K.useContext(qn),{pathname:o}=Ci(),u=JSON.stringify(Sm(a)),f=K.useRef(!1);return b_(()=>{f.current=!0}),K.useCallback((m,g={})=>{if(ii(f.current,E_),!f.current)return;if(typeof m=="number"){r.go(m);return}let v=Am(m,JSON.parse(u),o,g.relative==="path");n==null&&t!=="/"&&(v.pathname=v.pathname==="/"?t:tr([t,v.pathname])),(g.replace?r.replace:r.push)(v,g.state,g)},[t,r,u,o,n])}var hT=K.createContext(null);function fT(n){let t=K.useContext(qn).outlet;return t&&K.createElement(hT.Provider,{value:n},t)}function dT(){let{matches:n}=K.useContext(qn),t=n[n.length-1];return t?t.params:{}}function su(n,{relative:t}={}){let{matches:r}=K.useContext(qn),{pathname:a}=Ci(),o=JSON.stringify(Sm(r));return K.useMemo(()=>Am(n,JSON.parse(o),a,t==="path"),[n,o,a,t])}function pT(n,t){return w_(n,t)}function w_(n,t,r,a,o){he(po(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=K.useContext(ai),{matches:f}=K.useContext(qn),p=f[f.length-1],m=p?p.params:{},g=p?p.pathname:"/",v=p?p.pathnameBase:"/",w=p&&p.route;{let X=w&&w.path||"";T_(g,!w||X.endsWith("*")||X.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${X}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${X}"> to <Route path="${X==="/"?"*":`${X}/*`}">.`)}let S=Ci(),R;if(t){let X=typeof t=="string"?co(t):t;he(v==="/"||X.pathname?.startsWith(v),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${X.pathname}" was given in the \`location\` prop.`),R=X}else R=S;let O=R.pathname||"/",B=O;if(v!=="/"){let X=v.replace(/^\//,"").split("/");B="/"+O.replace(/^\//,"").split("/").slice(X.length).join("/")}let P=g_(n,{pathname:B});ii(w||P!=null,`No routes matched location "${R.pathname}${R.search}${R.hash}" `),ii(P==null||P[P.length-1].route.element!==void 0||P[P.length-1].route.Component!==void 0||P[P.length-1].route.lazy!==void 0,`Matched leaf route at location "${R.pathname}${R.search}${R.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let G=vT(P&&P.map(X=>Object.assign({},X,{params:Object.assign({},m,X.params),pathname:tr([v,u.encodeLocation?u.encodeLocation(X.pathname).pathname:X.pathname]),pathnameBase:X.pathnameBase==="/"?v:tr([v,u.encodeLocation?u.encodeLocation(X.pathnameBase).pathname:X.pathnameBase])})),f,r,a,o);return t&&G?K.createElement(fo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...R},navigationType:"POP"}},G):G}function mT(){let n=TT(),t=rT(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),r=n instanceof Error?n.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},u={padding:"2px 4px",backgroundColor:a},f=null;return console.error("Error handled by React Router default ErrorBoundary:",n),f=K.createElement(K.Fragment,null,K.createElement("p",null,"💿 Hey developer 👋"),K.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",K.createElement("code",{style:u},"ErrorBoundary")," or"," ",K.createElement("code",{style:u},"errorElement")," prop on your route.")),K.createElement(K.Fragment,null,K.createElement("h2",null,"Unexpected Application Error!"),K.createElement("h3",{style:{fontStyle:"italic"}},t),r?K.createElement("pre",{style:o},r):null,f)}var gT=K.createElement(mT,null),yT=class extends K.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){this.props.unstable_onError?this.props.unstable_onError(n,t):console.error("React Router caught the following error during render",n)}render(){return this.state.error!==void 0?K.createElement(qn.Provider,{value:this.props.routeContext},K.createElement(Rm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function xT({routeContext:n,match:t,children:r}){let a=K.useContext(ho);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),K.createElement(qn.Provider,{value:n},r)}function vT(n,t=[],r=null,a=null,o=null){if(n==null){if(!r)return null;if(r.errors)n=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)n=r.matches;else return null}let u=n,f=r?.errors;if(f!=null){let g=u.findIndex(v=>v.route.id&&f?.[v.route.id]!==void 0);he(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),u=u.slice(0,Math.min(u.length,g+1))}let p=!1,m=-1;if(r)for(let g=0;g<u.length;g++){let v=u[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(m=g),v.route.id){let{loaderData:w,errors:S}=r,R=v.route.loader&&!w.hasOwnProperty(v.route.id)&&(!S||S[v.route.id]===void 0);if(v.route.lazy||R){p=!0,m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}return u.reduceRight((g,v,w)=>{let S,R=!1,O=null,B=null;r&&(S=f&&v.route.id?f[v.route.id]:void 0,O=v.route.errorElement||gT,p&&(m<0&&w===0?(T_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),R=!0,B=null):m===w&&(R=!0,B=v.route.hydrateFallbackElement||null)));let P=t.concat(u.slice(0,w+1)),G=()=>{let X;return S?X=O:R?X=B:v.route.Component?X=K.createElement(v.route.Component,null):v.route.element?X=v.route.element:X=g,K.createElement(xT,{match:v,routeContext:{outlet:g,matches:P,isDataRoute:r!=null},children:X})};return r&&(v.route.ErrorBoundary||v.route.errorElement||w===0)?K.createElement(yT,{location:r.location,revalidation:r.revalidation,component:O,error:S,children:G(),routeContext:{outlet:null,matches:P,isDataRoute:!0},unstable_onError:a}):G()},null)}function Im(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function _T(n){let t=K.useContext(ho);return he(t,Im(n)),t}function ET(n){let t=K.useContext(Nh);return he(t,Im(n)),t}function bT(n){let t=K.useContext(qn);return he(t,Im(n)),t}function jm(n){let t=bT(n),r=t.matches[t.matches.length-1];return he(r.route.id,`${n} can only be used on routes that contain a unique "id"`),r.route.id}function wT(){return jm("useRouteId")}function TT(){let n=K.useContext(Rm),t=ET("useRouteError"),r=jm("useRouteError");return n!==void 0?n:t.errors?.[r]}function ST(){let{router:n}=_T("useNavigate"),t=jm("useNavigate"),r=K.useRef(!1);return b_(()=>{r.current=!0}),K.useCallback(async(o,u={})=>{ii(r.current,E_),r.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:t,...u}))},[n,t])}var ex={};function T_(n,t,r){!t&&!ex[n]&&(ex[n]=!0,ii(!1,r))}K.memo(AT);function AT({routes:n,future:t,state:r,unstable_onError:a}){return w_(n,void 0,r,a,t)}function RT({to:n,replace:t,state:r,relative:a}){he(po(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=K.useContext(ai);ii(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=K.useContext(qn),{pathname:f}=Ci(),p=Cm(),m=Am(n,Sm(u),f,a==="path"),g=JSON.stringify(m);return K.useEffect(()=>{p(JSON.parse(g),{replace:t,state:r,relative:a})},[p,g,a,t,r]),null}function CT(n){return fT(n.context)}function Zi(n){he(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function IT({basename:n="/",children:t=null,location:r,navigationType:a="POP",navigator:o,static:u=!1}){he(!po(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=n.replace(/^\/*/,"/"),p=K.useMemo(()=>({basename:f,navigator:o,static:u,future:{}}),[f,o,u]);typeof r=="string"&&(r=co(r));let{pathname:m="/",search:g="",hash:v="",state:w=null,key:S="default"}=r,R=K.useMemo(()=>{let O=ir(m,f);return O==null?null:{location:{pathname:O,search:g,hash:v,state:w,key:S},navigationType:a}},[f,m,g,v,w,S,a]);return ii(R!=null,`<Router basename="${f}"> is not able to match the URL "${m}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),R==null?null:K.createElement(ai.Provider,{value:p},K.createElement(fo.Provider,{children:t,value:R}))}function jT({children:n,location:t}){return pT(zp(n),t)}function zp(n,t=[]){let r=[];return K.Children.forEach(n,(a,o)=>{if(!K.isValidElement(a))return;let u=[...t,o];if(a.type===K.Fragment){r.push.apply(r,zp(a.props.children,u));return}he(a.type===Zi,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),he(!a.props.index||!a.props.children,"An index route cannot have child routes.");let f={id:a.props.id||u.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(f.children=zp(a.props.children,u)),r.push(f)}),r}var Xc="get",Wc="application/x-www-form-urlencoded";function Mh(n){return n!=null&&typeof n.tagName=="string"}function DT(n){return Mh(n)&&n.tagName.toLowerCase()==="button"}function NT(n){return Mh(n)&&n.tagName.toLowerCase()==="form"}function MT(n){return Mh(n)&&n.tagName.toLowerCase()==="input"}function OT(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function VT(n,t){return n.button===0&&(!t||t==="_self")&&!OT(n)}var Uc=null;function kT(){if(Uc===null)try{new FormData(document.createElement("form"),0),Uc=!1}catch{Uc=!0}return Uc}var UT=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function op(n){return n!=null&&!UT.has(n)?(ii(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Wc}"`),null):n}function PT(n,t){let r,a,o,u,f;if(NT(n)){let p=n.getAttribute("action");a=p?ir(p,t):null,r=n.getAttribute("method")||Xc,o=op(n.getAttribute("enctype"))||Wc,u=new FormData(n)}else if(DT(n)||MT(n)&&(n.type==="submit"||n.type==="image")){let p=n.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=n.getAttribute("formaction")||p.getAttribute("action");if(a=m?ir(m,t):null,r=n.getAttribute("formmethod")||p.getAttribute("method")||Xc,o=op(n.getAttribute("formenctype"))||op(p.getAttribute("enctype"))||Wc,u=new FormData(p,n),!kT()){let{name:g,type:v,value:w}=n;if(v==="image"){let S=g?`${g}.`:"";u.append(`${S}x`,"0"),u.append(`${S}y`,"0")}else g&&u.append(g,w)}}else{if(Mh(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Xc,a=null,o=Wc,f=n}return u&&o==="text/plain"&&(f=u,u=void 0),{action:a,method:r.toLowerCase(),encType:o,formData:u,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Dm(n,t){if(n===!1||n===null||typeof n>"u")throw new Error(t)}function LT(n,t,r){let a=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return a.pathname==="/"?a.pathname=`_root.${r}`:t&&ir(a.pathname,t)==="/"?a.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${r}`,a}async function zT(n,t){if(n.id in t)return t[n.id];try{let r=await import(n.module);return t[n.id]=r,r}catch(r){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function BT(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function $T(n,t,r){let a=await Promise.all(n.map(async o=>{let u=t.routes[o.route.id];if(u){let f=await zT(u,r);return f.links?f.links():[]}return[]}));return HT(a.flat(1).filter(BT).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function nx(n,t,r,a,o,u){let f=(m,g)=>r[g]?m.route.id!==r[g].route.id:!0,p=(m,g)=>r[g].pathname!==m.pathname||r[g].route.path?.endsWith("*")&&r[g].params["*"]!==m.params["*"];return u==="assets"?t.filter((m,g)=>f(m,g)||p(m,g)):u==="data"?t.filter((m,g)=>{let v=a.routes[m.route.id];if(!v||!v.hasLoader)return!1;if(f(m,g)||p(m,g))return!0;if(m.route.shouldRevalidate){let w=m.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:r[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function FT(n,t,{includeHydrateFallback:r}={}){return qT(n.map(a=>{let o=t.routes[a.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),r&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function qT(n){return[...new Set(n)]}function KT(n){let t={},r=Object.keys(n).sort();for(let a of r)t[a]=n[a];return t}function HT(n,t){let r=new Set;return new Set(t),n.reduce((a,o)=>{let u=JSON.stringify(KT(o));return r.has(u)||(r.add(u),a.push({key:u,link:o})),a},[])}function S_(){let n=K.useContext(ho);return Dm(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function GT(){let n=K.useContext(Nh);return Dm(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Nm=K.createContext(void 0);Nm.displayName="FrameworkContext";function A_(){let n=K.useContext(Nm);return Dm(n,"You must render this element inside a <HydratedRouter> element"),n}function YT(n,t){let r=K.useContext(Nm),[a,o]=K.useState(!1),[u,f]=K.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:g,onMouseLeave:v,onTouchStart:w}=t,S=K.useRef(null);K.useEffect(()=>{if(n==="render"&&f(!0),n==="viewport"){let B=G=>{G.forEach(X=>{f(X.isIntersecting)})},P=new IntersectionObserver(B,{threshold:.5});return S.current&&P.observe(S.current),()=>{P.disconnect()}}},[n]),K.useEffect(()=>{if(a){let B=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(B)}}},[a]);let R=()=>{o(!0)},O=()=>{o(!1),f(!1)};return r?n!=="intent"?[u,S,{}]:[u,S,{onFocus:Il(p,R),onBlur:Il(m,O),onMouseEnter:Il(g,R),onMouseLeave:Il(v,O),onTouchStart:Il(w,R)}]:[!1,S,{}]}function Il(n,t){return r=>{n&&n(r),r.defaultPrevented||t(r)}}function QT({page:n,...t}){let{router:r}=S_(),a=K.useMemo(()=>g_(r.routes,n,r.basename),[r.routes,n,r.basename]);return a?K.createElement(WT,{page:n,matches:a,...t}):null}function XT(n){let{manifest:t,routeModules:r}=A_(),[a,o]=K.useState([]);return K.useEffect(()=>{let u=!1;return $T(n,t,r).then(f=>{u||o(f)}),()=>{u=!0}},[n,t,r]),a}function WT({page:n,matches:t,...r}){let a=Ci(),{manifest:o,routeModules:u}=A_(),{basename:f}=S_(),{loaderData:p,matches:m}=GT(),g=K.useMemo(()=>nx(n,t,m,o,a,"data"),[n,t,m,o,a]),v=K.useMemo(()=>nx(n,t,m,o,a,"assets"),[n,t,m,o,a]),w=K.useMemo(()=>{if(n===a.pathname+a.search+a.hash)return[];let O=new Set,B=!1;if(t.forEach(G=>{let X=o.routes[G.route.id];!X||!X.hasLoader||(!g.some(it=>it.route.id===G.route.id)&&G.route.id in p&&u[G.route.id]?.shouldRevalidate||X.hasClientLoader?B=!0:O.add(G.route.id))}),O.size===0)return[];let P=LT(n,f,"data");return B&&O.size>0&&P.searchParams.set("_routes",t.filter(G=>O.has(G.route.id)).map(G=>G.route.id).join(",")),[P.pathname+P.search]},[f,p,a,o,g,t,n,u]),S=K.useMemo(()=>FT(v,o),[v,o]),R=XT(v);return K.createElement(K.Fragment,null,w.map(O=>K.createElement("link",{key:O,rel:"prefetch",as:"fetch",href:O,...r})),S.map(O=>K.createElement("link",{key:O,rel:"modulepreload",href:O,...r})),R.map(({key:O,link:B})=>K.createElement("link",{key:O,nonce:r.nonce,...B})))}function ZT(...n){return t=>{n.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var R_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{R_&&(window.__reactRouterVersion="7.9.1")}catch{}function JT({basename:n,children:t,window:r}){let a=K.useRef();a.current==null&&(a.current=Vw({window:r,v5Compat:!0}));let o=a.current,[u,f]=K.useState({action:o.action,location:o.location}),p=K.useCallback(m=>{K.startTransition(()=>f(m))},[f]);return K.useLayoutEffect(()=>o.listen(p),[o,p]),K.createElement(IT,{basename:n,children:t,location:u.location,navigationType:u.action,navigator:o})}var C_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mo=K.forwardRef(function({onClick:t,discover:r="render",prefetch:a="none",relative:o,reloadDocument:u,replace:f,state:p,target:m,to:g,preventScrollReset:v,viewTransition:w,...S},R){let{basename:O}=K.useContext(ai),B=typeof g=="string"&&C_.test(g),P,G=!1;if(typeof g=="string"&&B&&(P=g,R_))try{let I=new URL(window.location.href),M=g.startsWith("//")?new URL(I.protocol+g):new URL(g),k=ir(M.pathname,O);M.origin===I.origin&&k!=null?g=k+M.search+M.hash:G=!0}catch{ii(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let X=lT(g,{relative:o}),[it,ht,J]=YT(a,S),dt=iS(g,{replace:f,state:p,target:m,preventScrollReset:v,relative:o,viewTransition:w});function j(I){t&&t(I),I.defaultPrevented||dt(I)}let C=K.createElement("a",{...S,...J,href:P||X,onClick:G||u?t:j,ref:ZT(R,ht),target:m,"data-discover":!B&&r==="render"?"true":void 0});return it&&!B?K.createElement(K.Fragment,null,C,K.createElement(QT,{page:X})):C});mo.displayName="Link";var tS=K.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:a="",end:o=!1,style:u,to:f,viewTransition:p,children:m,...g},v){let w=su(f,{relative:g.relative}),S=Ci(),R=K.useContext(Nh),{navigator:O,basename:B}=K.useContext(ai),P=R!=null&&lS(w)&&p===!0,G=O.encodeLocation?O.encodeLocation(w).pathname:w.pathname,X=S.pathname,it=R&&R.navigation&&R.navigation.location?R.navigation.location.pathname:null;r||(X=X.toLowerCase(),it=it?it.toLowerCase():null,G=G.toLowerCase()),it&&B&&(it=ir(it,B)||it);const ht=G!=="/"&&G.endsWith("/")?G.length-1:G.length;let J=X===G||!o&&X.startsWith(G)&&X.charAt(ht)==="/",dt=it!=null&&(it===G||!o&&it.startsWith(G)&&it.charAt(G.length)==="/"),j={isActive:J,isPending:dt,isTransitioning:P},C=J?t:void 0,I;typeof a=="function"?I=a(j):I=[a,J?"active":null,dt?"pending":null,P?"transitioning":null].filter(Boolean).join(" ");let M=typeof u=="function"?u(j):u;return K.createElement(mo,{...g,"aria-current":C,className:I,ref:v,style:M,to:f,viewTransition:p},typeof m=="function"?m(j):m)});tS.displayName="NavLink";var eS=K.forwardRef(({discover:n="render",fetcherKey:t,navigate:r,reloadDocument:a,replace:o,state:u,method:f=Xc,action:p,onSubmit:m,relative:g,preventScrollReset:v,viewTransition:w,...S},R)=>{let O=sS(),B=oS(p,{relative:g}),P=f.toLowerCase()==="get"?"get":"post",G=typeof p=="string"&&C_.test(p),X=it=>{if(m&&m(it),it.defaultPrevented)return;it.preventDefault();let ht=it.nativeEvent.submitter,J=ht?.getAttribute("formmethod")||f;O(ht||it.currentTarget,{fetcherKey:t,method:J,navigate:r,replace:o,state:u,relative:g,preventScrollReset:v,viewTransition:w})};return K.createElement("form",{ref:R,method:P,action:B,onSubmit:a?m:X,...S,"data-discover":!G&&n==="render"?"true":void 0})});eS.displayName="Form";function nS(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function I_(n){let t=K.useContext(ho);return he(t,nS(n)),t}function iS(n,{target:t,replace:r,state:a,preventScrollReset:o,relative:u,viewTransition:f}={}){let p=Cm(),m=Ci(),g=su(n,{relative:u});return K.useCallback(v=>{if(VT(v,t)){v.preventDefault();let w=r!==void 0?r:Hl(m)===Hl(g);p(n,{replace:w,state:a,preventScrollReset:o,relative:u,viewTransition:f})}},[m,p,g,r,a,t,n,o,u,f])}var rS=0,aS=()=>`__${String(++rS)}__`;function sS(){let{router:n}=I_("useSubmit"),{basename:t}=K.useContext(ai),r=wT();return K.useCallback(async(a,o={})=>{let{action:u,method:f,encType:p,formData:m,body:g}=PT(a,t);if(o.navigate===!1){let v=o.fetcherKey||aS();await n.fetch(v,r,o.action||u,{preventScrollReset:o.preventScrollReset,formData:m,body:g,formMethod:o.method||f,formEncType:o.encType||p,flushSync:o.flushSync})}else await n.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:m,body:g,formMethod:o.method||f,formEncType:o.encType||p,replace:o.replace,state:o.state,fromRouteId:r,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,t,r])}function oS(n,{relative:t}={}){let{basename:r}=K.useContext(ai),a=K.useContext(qn);he(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),u={...su(n||".",{relative:t})},f=Ci();if(n==null){u.search=f.search;let p=new URLSearchParams(u.search),m=p.getAll("index");if(m.some(v=>v==="")){p.delete("index"),m.filter(w=>w).forEach(w=>p.append("index",w));let v=p.toString();u.search=v?`?${v}`:""}}return(!n||n===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(u.pathname=u.pathname==="/"?r:tr([r,u.pathname])),Hl(u)}function lS(n,{relative:t}={}){let r=K.useContext(__);he(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=I_("useViewTransitionState"),o=su(n,{relative:t});if(!r.isTransitioning)return!1;let u=ir(r.currentLocation.pathname,a)||r.currentLocation.pathname,f=ir(r.nextLocation.pathname,a)||r.nextLocation.pathname;return fh(o.pathname,f)!=null||fh(o.pathname,u)!=null}var lp={exports:{}},nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ix;function uS(){if(ix)return nn;ix=1;var n=Tm();function t(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var a={d:{f:r,r:function(){throw Error(t(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(m,g,v){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:w==null?null:""+w,children:m,containerInfo:g,implementation:v}}var f=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,nn.createPortal=function(m,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return u(m,g,null,v)},nn.flushSync=function(m){var g=f.T,v=a.p;try{if(f.T=null,a.p=2,m)return m()}finally{f.T=g,a.p=v,a.d.f()}},nn.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,a.d.C(m,g))},nn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},nn.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var v=g.as,w=p(v,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,R=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?a.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:w,integrity:S,fetchPriority:R}):v==="script"&&a.d.X(m,{crossOrigin:w,integrity:S,fetchPriority:R,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},nn.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=p(g.as,g.crossOrigin);a.d.M(m,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&a.d.M(m)},nn.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,w=p(v,g.crossOrigin);a.d.L(m,v,{crossOrigin:w,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},nn.preloadModule=function(m,g){if(typeof m=="string")if(g){var v=p(g.as,g.crossOrigin);a.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else a.d.m(m)},nn.requestFormReset=function(m){a.d.r(m)},nn.unstable_batchedUpdates=function(m,g){return m(g)},nn.useFormState=function(m,g,v){return f.H.useFormState(m,g,v)},nn.useFormStatus=function(){return f.H.useHostTransitionStatus()},nn.version="19.1.1",nn}var rx;function cS(){if(rx)return lp.exports;rx=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}return n(),lp.exports=uS(),lp.exports}var up={exports:{}},cp,ax;function hS(){if(ax)return cp;ax=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return cp=n,cp}var hp,sx;function fS(){if(sx)return hp;sx=1;var n=hS();function t(){}function r(){}return r.resetWarningCache=t,hp=function(){function a(f,p,m,g,v,w){if(w!==n){var S=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw S.name="Invariant Violation",S}}a.isRequired=a;function o(){return a}var u={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:o,element:a,elementType:a,instanceOf:o,node:a,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:r,resetWarningCache:t};return u.PropTypes=u,u},hp}var ox;function dS(){return ox||(ox=1,up.exports=fS()()),up.exports}var pS=dS();const W=m_(pS);var vn=function(){return vn=Object.assign||function(t){for(var r,a=1,o=arguments.length;a<o;a++){r=arguments[a];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(t[u]=r[u])}return t},vn.apply(this,arguments)};function dh(n,t,r){if(r||arguments.length===2)for(var a=0,o=t.length,u;a<o;a++)(u||!(a in t))&&(u||(u=Array.prototype.slice.call(t,0,a)),u[a]=t[a]);return n.concat(u||Array.prototype.slice.call(t))}var oe="-ms-",Ul="-moz-",Ht="-webkit-",j_="comm",Oh="rule",Mm="decl",mS="@import",D_="@keyframes",gS="@layer",N_=Math.abs,Om=String.fromCharCode,Bp=Object.assign;function yS(n,t){return Ke(n,0)^45?(((t<<2^Ke(n,0))<<2^Ke(n,1))<<2^Ke(n,2))<<2^Ke(n,3):0}function M_(n){return n.trim()}function Ji(n,t){return(n=t.exec(n))?n[0]:n}function Nt(n,t,r){return n.replace(t,r)}function Zc(n,t,r){return n.indexOf(t,r)}function Ke(n,t){return n.charCodeAt(t)|0}function Js(n,t,r){return n.slice(t,r)}function Ei(n){return n.length}function O_(n){return n.length}function Nl(n,t){return t.push(n),n}function xS(n,t){return n.map(t).join("")}function lx(n,t){return n.filter(function(r){return!Ji(r,t)})}var Vh=1,to=1,V_=0,Fn=0,je=0,go="";function kh(n,t,r,a,o,u,f,p){return{value:n,root:t,parent:r,type:a,props:o,children:u,line:Vh,column:to,length:f,return:"",siblings:p}}function Gr(n,t){return Bp(kh("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},t)}function qs(n){for(;n.root;)n=Gr(n.root,{children:[n]});Nl(n,n.siblings)}function vS(){return je}function _S(){return je=Fn>0?Ke(go,--Fn):0,to--,je===10&&(to=1,Vh--),je}function ni(){return je=Fn<V_?Ke(go,Fn++):0,to++,je===10&&(to=1,Vh++),je}function Ga(){return Ke(go,Fn)}function Jc(){return Fn}function Uh(n,t){return Js(go,n,t)}function $p(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ES(n){return Vh=to=1,V_=Ei(go=n),Fn=0,[]}function bS(n){return go="",n}function fp(n){return M_(Uh(Fn-1,Fp(n===91?n+2:n===40?n+1:n)))}function wS(n){for(;(je=Ga())&&je<33;)ni();return $p(n)>2||$p(je)>3?"":" "}function TS(n,t){for(;--t&&ni()&&!(je<48||je>102||je>57&&je<65||je>70&&je<97););return Uh(n,Jc()+(t<6&&Ga()==32&&ni()==32))}function Fp(n){for(;ni();)switch(je){case n:return Fn;case 34:case 39:n!==34&&n!==39&&Fp(je);break;case 40:n===41&&Fp(n);break;case 92:ni();break}return Fn}function SS(n,t){for(;ni()&&n+je!==57;)if(n+je===84&&Ga()===47)break;return"/*"+Uh(t,Fn-1)+"*"+Om(n===47?n:ni())}function AS(n){for(;!$p(Ga());)ni();return Uh(n,Fn)}function RS(n){return bS(th("",null,null,null,[""],n=ES(n),0,[0],n))}function th(n,t,r,a,o,u,f,p,m){for(var g=0,v=0,w=f,S=0,R=0,O=0,B=1,P=1,G=1,X=0,it="",ht=o,J=u,dt=a,j=it;P;)switch(O=X,X=ni()){case 40:if(O!=108&&Ke(j,w-1)==58){Zc(j+=Nt(fp(X),"&","&\f"),"&\f",N_(g?p[g-1]:0))!=-1&&(G=-1);break}case 34:case 39:case 91:j+=fp(X);break;case 9:case 10:case 13:case 32:j+=wS(O);break;case 92:j+=TS(Jc()-1,7);continue;case 47:switch(Ga()){case 42:case 47:Nl(CS(SS(ni(),Jc()),t,r,m),m);break;default:j+="/"}break;case 123*B:p[g++]=Ei(j)*G;case 125*B:case 59:case 0:switch(X){case 0:case 125:P=0;case 59+v:G==-1&&(j=Nt(j,/\f/g,"")),R>0&&Ei(j)-w&&Nl(R>32?cx(j+";",a,r,w-1,m):cx(Nt(j," ","")+";",a,r,w-2,m),m);break;case 59:j+=";";default:if(Nl(dt=ux(j,t,r,g,v,o,p,it,ht=[],J=[],w,u),u),X===123)if(v===0)th(j,t,dt,dt,ht,u,w,p,J);else switch(S===99&&Ke(j,3)===110?100:S){case 100:case 108:case 109:case 115:th(n,dt,dt,a&&Nl(ux(n,dt,dt,0,0,o,p,it,o,ht=[],w,J),J),o,J,w,p,a?ht:J);break;default:th(j,dt,dt,dt,[""],J,0,p,J)}}g=v=R=0,B=G=1,it=j="",w=f;break;case 58:w=1+Ei(j),R=O;default:if(B<1){if(X==123)--B;else if(X==125&&B++==0&&_S()==125)continue}switch(j+=Om(X),X*B){case 38:G=v>0?1:(j+="\f",-1);break;case 44:p[g++]=(Ei(j)-1)*G,G=1;break;case 64:Ga()===45&&(j+=fp(ni())),S=Ga(),v=w=Ei(it=j+=AS(Jc())),X++;break;case 45:O===45&&Ei(j)==2&&(B=0)}}return u}function ux(n,t,r,a,o,u,f,p,m,g,v,w){for(var S=o-1,R=o===0?u:[""],O=O_(R),B=0,P=0,G=0;B<a;++B)for(var X=0,it=Js(n,S+1,S=N_(P=f[B])),ht=n;X<O;++X)(ht=M_(P>0?R[X]+" "+it:Nt(it,/&\f/g,R[X])))&&(m[G++]=ht);return kh(n,t,r,o===0?Oh:p,m,g,v,w)}function CS(n,t,r,a){return kh(n,t,r,j_,Om(vS()),Js(n,2,-2),0,a)}function cx(n,t,r,a,o){return kh(n,t,r,Mm,Js(n,0,a),Js(n,a+1,-1),a,o)}function k_(n,t,r){switch(yS(n,t)){case 5103:return Ht+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ht+n+n;case 4789:return Ul+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Ht+n+Ul+n+oe+n+n;case 5936:switch(Ke(n,t+11)){case 114:return Ht+n+oe+Nt(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Ht+n+oe+Nt(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Ht+n+oe+Nt(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Ht+n+oe+n+n;case 6165:return Ht+n+oe+"flex-"+n+n;case 5187:return Ht+n+Nt(n,/(\w+).+(:[^]+)/,Ht+"box-$1$2"+oe+"flex-$1$2")+n;case 5443:return Ht+n+oe+"flex-item-"+Nt(n,/flex-|-self/g,"")+(Ji(n,/flex-|baseline/)?"":oe+"grid-row-"+Nt(n,/flex-|-self/g,""))+n;case 4675:return Ht+n+oe+"flex-line-pack"+Nt(n,/align-content|flex-|-self/g,"")+n;case 5548:return Ht+n+oe+Nt(n,"shrink","negative")+n;case 5292:return Ht+n+oe+Nt(n,"basis","preferred-size")+n;case 6060:return Ht+"box-"+Nt(n,"-grow","")+Ht+n+oe+Nt(n,"grow","positive")+n;case 4554:return Ht+Nt(n,/([^-])(transform)/g,"$1"+Ht+"$2")+n;case 6187:return Nt(Nt(Nt(n,/(zoom-|grab)/,Ht+"$1"),/(image-set)/,Ht+"$1"),n,"")+n;case 5495:case 3959:return Nt(n,/(image-set\([^]*)/,Ht+"$1$`$1");case 4968:return Nt(Nt(n,/(.+:)(flex-)?(.*)/,Ht+"box-pack:$3"+oe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ht+n+n;case 4200:if(!Ji(n,/flex-|baseline/))return oe+"grid-column-align"+Js(n,t)+n;break;case 2592:case 3360:return oe+Nt(n,"template-","")+n;case 4384:case 3616:return r&&r.some(function(a,o){return t=o,Ji(a.props,/grid-\w+-end/)})?~Zc(n+(r=r[t].value),"span",0)?n:oe+Nt(n,"-start","")+n+oe+"grid-row-span:"+(~Zc(r,"span",0)?Ji(r,/\d+/):+Ji(r,/\d+/)-+Ji(n,/\d+/))+";":oe+Nt(n,"-start","")+n;case 4896:case 4128:return r&&r.some(function(a){return Ji(a.props,/grid-\w+-start/)})?n:oe+Nt(Nt(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Nt(n,/(.+)-inline(.+)/,Ht+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ei(n)-1-t>6)switch(Ke(n,t+1)){case 109:if(Ke(n,t+4)!==45)break;case 102:return Nt(n,/(.+:)(.+)-([^]+)/,"$1"+Ht+"$2-$3$1"+Ul+(Ke(n,t+3)==108?"$3":"$2-$3"))+n;case 115:return~Zc(n,"stretch",0)?k_(Nt(n,"stretch","fill-available"),t,r)+n:n}break;case 5152:case 5920:return Nt(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,o,u,f,p,m,g){return oe+o+":"+u+g+(f?oe+o+"-span:"+(p?m:+m-+u)+g:"")+n});case 4949:if(Ke(n,t+6)===121)return Nt(n,":",":"+Ht)+n;break;case 6444:switch(Ke(n,Ke(n,14)===45?18:11)){case 120:return Nt(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ht+(Ke(n,14)===45?"inline-":"")+"box$3$1"+Ht+"$2$3$1"+oe+"$2box$3")+n;case 100:return Nt(n,":",":"+oe)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Nt(n,"scroll-","scroll-snap-")+n}return n}function ph(n,t){for(var r="",a=0;a<n.length;a++)r+=t(n[a],a,n,t)||"";return r}function IS(n,t,r,a){switch(n.type){case gS:if(n.children.length)break;case mS:case Mm:return n.return=n.return||n.value;case j_:return"";case D_:return n.return=n.value+"{"+ph(n.children,a)+"}";case Oh:if(!Ei(n.value=n.props.join(",")))return""}return Ei(r=ph(n.children,a))?n.return=n.value+"{"+r+"}":""}function jS(n){var t=O_(n);return function(r,a,o,u){for(var f="",p=0;p<t;p++)f+=n[p](r,a,o,u)||"";return f}}function DS(n){return function(t){t.root||(t=t.return)&&n(t)}}function NS(n,t,r,a){if(n.length>-1&&!n.return)switch(n.type){case Mm:n.return=k_(n.value,n.length,r);return;case D_:return ph([Gr(n,{value:Nt(n.value,"@","@"+Ht)})],a);case Oh:if(n.length)return xS(r=n.props,function(o){switch(Ji(o,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":qs(Gr(n,{props:[Nt(o,/:(read-\w+)/,":"+Ul+"$1")]})),qs(Gr(n,{props:[o]})),Bp(n,{props:lx(r,a)});break;case"::placeholder":qs(Gr(n,{props:[Nt(o,/:(plac\w+)/,":"+Ht+"input-$1")]})),qs(Gr(n,{props:[Nt(o,/:(plac\w+)/,":"+Ul+"$1")]})),qs(Gr(n,{props:[Nt(o,/:(plac\w+)/,oe+"input-$1")]})),qs(Gr(n,{props:[o]})),Bp(n,{props:lx(r,a)});break}return""})}}var MS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Cn={},eo=typeof process<"u"&&Cn!==void 0&&(Cn.REACT_APP_SC_ATTR||Cn.SC_ATTR)||"data-styled",U_="active",P_="data-styled-version",Ph="6.1.19",Vm=`/*!sc*/
`,mh=typeof window<"u"&&typeof document<"u",OS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Cn!==void 0&&Cn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Cn.REACT_APP_SC_DISABLE_SPEEDY!==""?Cn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Cn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Cn!==void 0&&Cn.SC_DISABLE_SPEEDY!==void 0&&Cn.SC_DISABLE_SPEEDY!==""&&Cn.SC_DISABLE_SPEEDY!=="false"&&Cn.SC_DISABLE_SPEEDY),Lh=Object.freeze([]),no=Object.freeze({});function VS(n,t,r){return r===void 0&&(r=no),n.theme!==r.theme&&n.theme||t||r.theme}var L_=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),kS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,US=/(^-|-$)/g;function hx(n){return n.replace(kS,"-").replace(US,"")}var PS=/(a)(d)/gi,Pc=52,fx=function(n){return String.fromCharCode(n+(n>25?39:97))};function qp(n){var t,r="";for(t=Math.abs(n);t>Pc;t=t/Pc|0)r=fx(t%Pc)+r;return(fx(t%Pc)+r).replace(PS,"$1-$2")}var dp,z_=5381,Qs=function(n,t){for(var r=t.length;r;)n=33*n^t.charCodeAt(--r);return n},B_=function(n){return Qs(z_,n)};function LS(n){return qp(B_(n)>>>0)}function zS(n){return n.displayName||n.name||"Component"}function pp(n){return typeof n=="string"&&!0}var $_=typeof Symbol=="function"&&Symbol.for,F_=$_?Symbol.for("react.memo"):60115,BS=$_?Symbol.for("react.forward_ref"):60112,$S={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},FS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},q_={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},qS=((dp={})[BS]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},dp[F_]=q_,dp);function dx(n){return("type"in(t=n)&&t.type.$$typeof)===F_?q_:"$$typeof"in n?qS[n.$$typeof]:$S;var t}var KS=Object.defineProperty,HS=Object.getOwnPropertyNames,px=Object.getOwnPropertySymbols,GS=Object.getOwnPropertyDescriptor,YS=Object.getPrototypeOf,mx=Object.prototype;function K_(n,t,r){if(typeof t!="string"){if(mx){var a=YS(t);a&&a!==mx&&K_(n,a,r)}var o=HS(t);px&&(o=o.concat(px(t)));for(var u=dx(n),f=dx(t),p=0;p<o.length;++p){var m=o[p];if(!(m in FS||r&&r[m]||f&&m in f||u&&m in u)){var g=GS(t,m);try{KS(n,m,g)}catch{}}}}return n}function io(n){return typeof n=="function"}function km(n){return typeof n=="object"&&"styledComponentId"in n}function Ka(n,t){return n&&t?"".concat(n," ").concat(t):n||t||""}function gx(n,t){if(n.length===0)return"";for(var r=n[0],a=1;a<n.length;a++)r+=n[a];return r}function Gl(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Kp(n,t,r){if(r===void 0&&(r=!1),!r&&!Gl(n)&&!Array.isArray(n))return t;if(Array.isArray(t))for(var a=0;a<t.length;a++)n[a]=Kp(n[a],t[a]);else if(Gl(t))for(var a in t)n[a]=Kp(n[a],t[a]);return n}function Um(n,t){Object.defineProperty(n,"toString",{value:t})}function ou(n){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var QS=(function(){function n(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return n.prototype.indexOfGroup=function(t){for(var r=0,a=0;a<t;a++)r+=this.groupSizes[a];return r},n.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var a=this.groupSizes,o=a.length,u=o;t>=u;)if((u<<=1)<0)throw ou(16,"".concat(t));this.groupSizes=new Uint32Array(u),this.groupSizes.set(a),this.length=u;for(var f=o;f<u;f++)this.groupSizes[f]=0}for(var p=this.indexOfGroup(t+1),m=(f=0,r.length);f<m;f++)this.tag.insertRule(p,r[f])&&(this.groupSizes[t]++,p++)},n.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],a=this.indexOfGroup(t),o=a+r;this.groupSizes[t]=0;for(var u=a;u<o;u++)this.tag.deleteRule(a)}},n.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var a=this.groupSizes[t],o=this.indexOfGroup(t),u=o+a,f=o;f<u;f++)r+="".concat(this.tag.getRule(f)).concat(Vm);return r},n})(),eh=new Map,gh=new Map,nh=1,Lc=function(n){if(eh.has(n))return eh.get(n);for(;gh.has(nh);)nh++;var t=nh++;return eh.set(n,t),gh.set(t,n),t},XS=function(n,t){nh=t+1,eh.set(n,t),gh.set(t,n)},WS="style[".concat(eo,"][").concat(P_,'="').concat(Ph,'"]'),ZS=new RegExp("^".concat(eo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),JS=function(n,t,r){for(var a,o=r.split(","),u=0,f=o.length;u<f;u++)(a=o[u])&&n.registerName(t,a)},t4=function(n,t){for(var r,a=((r=t.textContent)!==null&&r!==void 0?r:"").split(Vm),o=[],u=0,f=a.length;u<f;u++){var p=a[u].trim();if(p){var m=p.match(ZS);if(m){var g=0|parseInt(m[1],10),v=m[2];g!==0&&(XS(v,g),JS(n,v,m[3]),n.getTag().insertRules(g,o)),o.length=0}else o.push(p)}}},yx=function(n){for(var t=document.querySelectorAll(WS),r=0,a=t.length;r<a;r++){var o=t[r];o&&o.getAttribute(eo)!==U_&&(t4(n,o),o.parentNode&&o.parentNode.removeChild(o))}};function e4(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var H_=function(n){var t=document.head,r=n||t,a=document.createElement("style"),o=(function(p){var m=Array.from(p.querySelectorAll("style[".concat(eo,"]")));return m[m.length-1]})(r),u=o!==void 0?o.nextSibling:null;a.setAttribute(eo,U_),a.setAttribute(P_,Ph);var f=e4();return f&&a.setAttribute("nonce",f),r.insertBefore(a,u),a},n4=(function(){function n(t){this.element=H_(t),this.element.appendChild(document.createTextNode("")),this.sheet=(function(r){if(r.sheet)return r.sheet;for(var a=document.styleSheets,o=0,u=a.length;o<u;o++){var f=a[o];if(f.ownerNode===r)return f}throw ou(17)})(this.element),this.length=0}return n.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},n.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},n})(),i4=(function(){function n(t){this.element=H_(t),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var a=document.createTextNode(r);return this.element.insertBefore(a,this.nodes[t]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},n.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},n})(),r4=(function(){function n(t){this.rules=[],this.length=0}return n.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},n.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},n.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},n})(),xx=mh,a4={isServer:!mh,useCSSOMInjection:!OS},G_=(function(){function n(t,r,a){t===void 0&&(t=no),r===void 0&&(r={});var o=this;this.options=vn(vn({},a4),t),this.gs=r,this.names=new Map(a),this.server=!!t.isServer,!this.server&&mh&&xx&&(xx=!1,yx(this)),Um(this,function(){return(function(u){for(var f=u.getTag(),p=f.length,m="",g=function(w){var S=(function(G){return gh.get(G)})(w);if(S===void 0)return"continue";var R=u.names.get(S),O=f.getGroup(w);if(R===void 0||!R.size||O.length===0)return"continue";var B="".concat(eo,".g").concat(w,'[id="').concat(S,'"]'),P="";R!==void 0&&R.forEach(function(G){G.length>0&&(P+="".concat(G,","))}),m+="".concat(O).concat(B,'{content:"').concat(P,'"}').concat(Vm)},v=0;v<p;v++)g(v);return m})(o)})}return n.registerId=function(t){return Lc(t)},n.prototype.rehydrate=function(){!this.server&&mh&&yx(this)},n.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new n(vn(vn({},this.options),t),this.gs,r&&this.names||void 0)},n.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(t=(function(r){var a=r.useCSSOMInjection,o=r.target;return r.isServer?new r4(o):a?new n4(o):new i4(o)})(this.options),new QS(t)));var t},n.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},n.prototype.registerName=function(t,r){if(Lc(t),this.names.has(t))this.names.get(t).add(r);else{var a=new Set;a.add(r),this.names.set(t,a)}},n.prototype.insertRules=function(t,r,a){this.registerName(t,r),this.getTag().insertRules(Lc(t),a)},n.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},n.prototype.clearRules=function(t){this.getTag().clearGroup(Lc(t)),this.clearNames(t)},n.prototype.clearTag=function(){this.tag=void 0},n})(),s4=/&/g,o4=/^\s*\/\/.*$/gm;function Y_(n,t){return n.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(a){return"".concat(t," ").concat(a)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Y_(r.children,t)),r})}function l4(n){var t,r,a,o=no,u=o.options,f=u===void 0?no:u,p=o.plugins,m=p===void 0?Lh:p,g=function(S,R,O){return O.startsWith(r)&&O.endsWith(r)&&O.replaceAll(r,"").length>0?".".concat(t):S},v=m.slice();v.push(function(S){S.type===Oh&&S.value.includes("&")&&(S.props[0]=S.props[0].replace(s4,r).replace(a,g))}),f.prefix&&v.push(NS),v.push(IS);var w=function(S,R,O,B){R===void 0&&(R=""),O===void 0&&(O=""),B===void 0&&(B="&"),t=B,r=R,a=new RegExp("\\".concat(r,"\\b"),"g");var P=S.replace(o4,""),G=RS(O||R?"".concat(O," ").concat(R," { ").concat(P," }"):P);f.namespace&&(G=Y_(G,f.namespace));var X=[];return ph(G,jS(v.concat(DS(function(it){return X.push(it)})))),X};return w.hash=m.length?m.reduce(function(S,R){return R.name||ou(15),Qs(S,R.name)},z_).toString():"",w}var u4=new G_,Hp=l4(),Q_=Dt.createContext({shouldForwardProp:void 0,styleSheet:u4,stylis:Hp});Q_.Consumer;Dt.createContext(void 0);function vx(){return K.useContext(Q_)}var c4=(function(){function n(t,r){var a=this;this.inject=function(o,u){u===void 0&&(u=Hp);var f=a.name+u.hash;o.hasNameForId(a.id,f)||o.insertRules(a.id,f,u(a.rules,f,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,Um(this,function(){throw ou(12,String(a.name))})}return n.prototype.getName=function(t){return t===void 0&&(t=Hp),this.name+t.hash},n})(),h4=function(n){return n>="A"&&n<="Z"};function _x(n){for(var t="",r=0;r<n.length;r++){var a=n[r];if(r===1&&a==="-"&&n[0]==="-")return n;h4(a)?t+="-"+a.toLowerCase():t+=a}return t.startsWith("ms-")?"-"+t:t}var X_=function(n){return n==null||n===!1||n===""},W_=function(n){var t,r,a=[];for(var o in n){var u=n[o];n.hasOwnProperty(o)&&!X_(u)&&(Array.isArray(u)&&u.isCss||io(u)?a.push("".concat(_x(o),":"),u,";"):Gl(u)?a.push.apply(a,dh(dh(["".concat(o," {")],W_(u),!1),["}"],!1)):a.push("".concat(_x(o),": ").concat((t=o,(r=u)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in MS||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return a};function Ya(n,t,r,a){if(X_(n))return[];if(km(n))return[".".concat(n.styledComponentId)];if(io(n)){if(!io(u=n)||u.prototype&&u.prototype.isReactComponent||!t)return[n];var o=n(t);return Ya(o,t,r,a)}var u;return n instanceof c4?r?(n.inject(r,a),[n.getName(a)]):[n]:Gl(n)?W_(n):Array.isArray(n)?Array.prototype.concat.apply(Lh,n.map(function(f){return Ya(f,t,r,a)})):[n.toString()]}function f4(n){for(var t=0;t<n.length;t+=1){var r=n[t];if(io(r)&&!km(r))return!1}return!0}var d4=B_(Ph),p4=(function(){function n(t,r,a){this.rules=t,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&f4(t),this.componentId=r,this.baseHash=Qs(d4,r),this.baseStyle=a,G_.registerId(r)}return n.prototype.generateAndInjectStyles=function(t,r,a){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=Ka(o,this.staticRulesId);else{var u=gx(Ya(this.rules,t,r,a)),f=qp(Qs(this.baseHash,u)>>>0);if(!r.hasNameForId(this.componentId,f)){var p=a(u,".".concat(f),void 0,this.componentId);r.insertRules(this.componentId,f,p)}o=Ka(o,f),this.staticRulesId=f}else{for(var m=Qs(this.baseHash,a.hash),g="",v=0;v<this.rules.length;v++){var w=this.rules[v];if(typeof w=="string")g+=w;else if(w){var S=gx(Ya(w,t,r,a));m=Qs(m,S+v),g+=S}}if(g){var R=qp(m>>>0);r.hasNameForId(this.componentId,R)||r.insertRules(this.componentId,R,a(g,".".concat(R),void 0,this.componentId)),o=Ka(o,R)}}return o},n})(),Z_=Dt.createContext(void 0);Z_.Consumer;var mp={};function m4(n,t,r){var a=km(n),o=n,u=!pp(n),f=t.attrs,p=f===void 0?Lh:f,m=t.componentId,g=m===void 0?(function(ht,J){var dt=typeof ht!="string"?"sc":hx(ht);mp[dt]=(mp[dt]||0)+1;var j="".concat(dt,"-").concat(LS(Ph+dt+mp[dt]));return J?"".concat(J,"-").concat(j):j})(t.displayName,t.parentComponentId):m,v=t.displayName,w=v===void 0?(function(ht){return pp(ht)?"styled.".concat(ht):"Styled(".concat(zS(ht),")")})(n):v,S=t.displayName&&t.componentId?"".concat(hx(t.displayName),"-").concat(t.componentId):t.componentId||g,R=a&&o.attrs?o.attrs.concat(p).filter(Boolean):p,O=t.shouldForwardProp;if(a&&o.shouldForwardProp){var B=o.shouldForwardProp;if(t.shouldForwardProp){var P=t.shouldForwardProp;O=function(ht,J){return B(ht,J)&&P(ht,J)}}else O=B}var G=new p4(r,S,a?o.componentStyle:void 0);function X(ht,J){return(function(dt,j,C){var I=dt.attrs,M=dt.componentStyle,k=dt.defaultProps,z=dt.foldedComponentIds,N=dt.styledComponentId,ue=dt.target,ne=Dt.useContext(Z_),Z=vx(),ct=dt.shouldForwardProp||Z.shouldForwardProp,yt=VS(j,ne,k)||no,Ct=(function(It,_t,ge){for(var Lt,Me=vn(vn({},_t),{className:void 0,theme:ge}),ji=0;ji<It.length;ji+=1){var Kn=io(Lt=It[ji])?Lt(Me):Lt;for(var on in Kn)Me[on]=on==="className"?Ka(Me[on],Kn[on]):on==="style"?vn(vn({},Me[on]),Kn[on]):Kn[on]}return _t.className&&(Me.className=Ka(Me.className,_t.className)),Me})(I,j,yt),V=Ct.as||ue,at={};for(var lt in Ct)Ct[lt]===void 0||lt[0]==="$"||lt==="as"||lt==="theme"&&Ct.theme===yt||(lt==="forwardedAs"?at.as=Ct.forwardedAs:ct&&!ct(lt,V)||(at[lt]=Ct[lt]));var ut=(function(It,_t){var ge=vx(),Lt=It.generateAndInjectStyles(_t,ge.styleSheet,ge.stylis);return Lt})(M,Ct),gt=Ka(z,N);return ut&&(gt+=" "+ut),Ct.className&&(gt+=" "+Ct.className),at[pp(V)&&!L_.has(V)?"class":"className"]=gt,C&&(at.ref=C),K.createElement(V,at)})(it,ht,J)}X.displayName=w;var it=Dt.forwardRef(X);return it.attrs=R,it.componentStyle=G,it.displayName=w,it.shouldForwardProp=O,it.foldedComponentIds=a?Ka(o.foldedComponentIds,o.styledComponentId):"",it.styledComponentId=S,it.target=a?o.target:n,Object.defineProperty(it,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ht){this._foldedDefaultProps=a?(function(J){for(var dt=[],j=1;j<arguments.length;j++)dt[j-1]=arguments[j];for(var C=0,I=dt;C<I.length;C++)Kp(J,I[C],!0);return J})({},o.defaultProps,ht):ht}}),Um(it,function(){return".".concat(it.styledComponentId)}),u&&K_(it,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),it}function Ex(n,t){for(var r=[n[0]],a=0,o=t.length;a<o;a+=1)r.push(t[a],n[a+1]);return r}var bx=function(n){return Object.assign(n,{isCss:!0})};function g4(n){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(io(n)||Gl(n))return bx(Ya(Ex(Lh,dh([n],t,!0))));var a=n;return t.length===0&&a.length===1&&typeof a[0]=="string"?Ya(a):bx(Ya(Ex(a,t)))}function Gp(n,t,r){if(r===void 0&&(r=no),!t)throw ou(1,t);var a=function(o){for(var u=[],f=1;f<arguments.length;f++)u[f-1]=arguments[f];return n(t,r,g4.apply(void 0,dh([o],u,!1)))};return a.attrs=function(o){return Gp(n,t,vn(vn({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},a.withConfig=function(o){return Gp(n,t,vn(vn({},r),o))},a}var J_=function(n){return Gp(m4,n)},A=J_;L_.forEach(function(n){A[n]=J_(n)});const gp=A.a`
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
`;function Pm({label:n,href:t="#",active:r=!1,onClick:a,style:o,target:u,rel:f}){const p="/TU2025gradulate/",m=/^https?:\/\//i.test(t)||t?.startsWith("mailto:")||t?.startsWith("tel:");let g,v=!1;!m&&t&&(t.startsWith(p)?(g="/"+t.slice(p.length).replace(/^\/+/,""),v=!0):t.startsWith("/")&&(g=t,v=!0),t===p&&(g="/",v=!0));const S={"aria-current":r?"page":void 0,"data-active":r?"true":"false","data-label":n,onKeyDown:R=>{a&&(R.key==="Enter"||R.key===" ")&&(R.preventDefault(),a(R))},onClick:a,style:o,$active:r};return v?x.jsx(gp,{as:mo,to:g,...S,children:x.jsx("span",{className:"navbtn-text",children:n})}):t?x.jsx(gp,{href:t,target:u,rel:f,...S,children:x.jsx("span",{className:"navbtn-text",children:n})}):x.jsx(gp,{as:"button",type:"button",...S,style:{background:"none",border:0,...o},children:x.jsx("span",{className:"navbtn-text",children:n})})}Pm.propTypes={label:W.string.isRequired,href:W.string,active:W.bool,onClick:W.func,style:W.object,target:W.string,rel:W.string};const y4=({isOpen:n=!1,size:t=28,color:r="#fff",...a})=>{const o=Math.max(2,Math.round(t/14)),u=t/2,f=Math.round(t*.28);if(n)return x.jsxs("svg",{width:t,height:t,viewBox:`0 0 ${t} ${t}`,fill:"none",...a,children:[x.jsx("line",{x1:u-f,y1:u-f,x2:u+f,y2:u+f,stroke:r,strokeWidth:o,strokeLinecap:"round"}),x.jsx("line",{x1:u-f,y1:u+f,x2:u+f,y2:u-f,stroke:r,strokeWidth:o,strokeLinecap:"round"})]});const p=o,m=o/2;return x.jsxs("svg",{width:t,height:t,viewBox:`0 0 ${t} ${t}`,fill:"none",...a,children:[x.jsx("rect",{x:0,y:u-f-p/2,width:t,height:p,rx:m,fill:r}),x.jsx("rect",{x:0,y:u-p/2,width:t,height:p,rx:m,fill:r}),x.jsx("rect",{x:0,y:u+f-p/2,width:t,height:p,rx:m,fill:r})]})},pe=Object.freeze({GRADIENT:"gradient",LIGHT:"light",DARK:"dark",GRADIENT_DARK:"gradient_dark"}),x4=A.header`
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
`,v4=A.div`
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
`,_4=A.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  @media (max-width: 640px) {
    gap: 8px;
  }
`,E4=A.div`
  display: flex;
  align-items: center;
  gap: 24px;
`,b4=A.nav`
  display: flex;
  align-items: center;
  gap: 24px;
  @media (max-width: 640px) {
    display: none;
  }
`,w4=A.button`
  display: none;
  @media (max-width: 640px) {
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
`,T4=A.div`
  display: none;
  @media (max-width: 640px) {
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
`,S4=A.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  margin-top: 12px;
`,A4=A(Pm)`
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  letter-spacing: 0.26px;
`,R4=A.div`
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
`,C4=A.div`
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
`;function tE({items:n=[],activeKey:t,mode:r,onModeChange:a,autoOnScroll:o=!1,scrollThreshold:u=8,sticky:f=!0,maxWidth:p,overlay:m=!1}){const[g,v]=K.useState(!1),[w,S]=K.useState(pe.GRADIENT),R=typeof r=="string",O=R?r:w,B=K.useRef(R?r:w);K.useEffect(()=>{if(!R)return;(window.scrollY||document.documentElement.scrollTop||0)<=u&&(B.current=r)},[r,R,u]),K.useEffect(()=>{if(!o)return;const M=()=>{const k=window.scrollY||document.documentElement.scrollTop||0,z=B.current||pe.GRADIENT_DARK,N=k>u?pe.DARK:z;R||S(N),a&&a(N)};return M(),window.addEventListener("scroll",M,{passive:!0}),()=>window.removeEventListener("scroll",M)},[o,R,a,u]);const{baseColor:P,gradient:G,textColor:X,boxShadow:it,showGradient:ht}=K.useMemo(()=>{switch(O){case pe.LIGHT:return{baseColor:"linear-gradient(180deg, rgba(255,255,255,0.8) 60%, rgba(255,255,255,0) 100%)",gradient:"rgba(255,255,255,1)",textColor:"#000",showGradient:!0};case pe.DARK:return{baseColor:"linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,0) 100%)",gradient:"linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,1) 100%)",textColor:"#fff",showGradient:!0};case pe.GRADIENT_DARK:return{baseColor:"linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,0) 100%)",gradient:"linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,1) 100%)",textColor:"#fff",showGradient:!1};default:return{baseColor:"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",gradient:"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",textColor:"#000",showGradient:!1}}},[O]),j=O===pe.DARK||O===pe.GRADIENT_DARK||g,C=j?"/TU2025gradulate/icons/logoLight.svg":"/TU2025gradulate/icons/logoDark.svg",I=n.filter(M=>M.label!=="SHOWROOM");return K.useEffect(()=>(g?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[g]),x.jsxs(x4,{role:"banner",$sticky:f,$overlay:m,$baseColor:P,$gradient:G,$showGradient:ht,$textColor:X,$boxShadow:it,children:[x.jsx(v4,{$maxWidth:p,children:x.jsxs(_4,{children:[x.jsxs(E4,{children:[x.jsx(mo,{to:"/","aria-label":"홈으로",style:{color:"inherit",textDecoration:"none"},children:x.jsx(R4,{"aria-hidden":!0,children:x.jsx(C4,{children:x.jsx("div",{style:{backgroundImage:`url(${C})`,width:"100%",height:"100%",backgroundSize:"contain",backgroundRepeat:"no-repeat"}})})})}),x.jsx(b4,{"aria-label":"주 메뉴",children:n.map(M=>x.jsx(Pm,{label:M.label,href:M.href,active:M.key===t},M.key))})]}),x.jsx(w4,{"aria-label":g?"메뉴 닫기":"메뉴 열기",onClick:()=>v(M=>!M),children:x.jsx(y4,{isOpen:g,size:24,color:j?"#fff":"#000"})})]})}),x.jsx(T4,{$open:g,onClick:()=>v(!1),children:x.jsx(S4,{onClick:M=>M.stopPropagation(),children:I.map(M=>x.jsx(A4,{label:M.label,href:M.href,active:M.key===t,style:{fontSize:18,fontWeight:500,color:"#fff",textAlign:"center"},onClick:()=>v(!1)},M.key))})})]})}tE.propTypes={items:W.arrayOf(W.shape({key:W.string.isRequired,label:W.string.isRequired,href:W.string})),activeKey:W.string,mode:W.oneOf([pe.GRADIENT,pe.LIGHT,pe.DARK,pe.GRADIENT_DARK]),onModeChange:W.func,autoOnScroll:W.bool,scrollThreshold:W.number,sticky:W.bool,overlay:W.bool,maxWidth:W.oneOfType([W.string,W.number])};const Lm="Pretendard, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR', Arial, sans-serif",I4=A.footer`
  width: 100vw;
  background: #0E0E0E;
  border-top: 1px #A1A1A1 solid;
  @media (max-width: 640px) {
    min-width: 0;
    left: 0;
    right: 0;
  }
`,j4=A.div`
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
`,D4=A.div`
  font-family: ${Lm};
  font-size: 24px;
  font-weight: 700;
  color: #FAFAFA;
  margin-bottom: 36px;
  @media (max-width: 640px) {
    font-size: 14px;
    margin-bottom: 16px;
  }
`,N4=A.nav`
  display: flex;
  gap: 60px;
  flex-wrap: wrap;
  align-items: center;
  color: #F0F0F0;
  font-family: ${Lm};
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
`,wx=A.a`
  color: inherit;
  text-decoration: none;
  opacity: 0.95;
`,M4=A.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #909090;
  font-family: ${Lm};
  font-size: 14px;
  font-weight: 300;
  max-width: 475px;
  @media (max-width: 640px) {
    font-size: 10px;
    max-width: 100vw;
    gap: 4px;
    align-items: center;
  }
`,O4=A.div`
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
`,Tx=A.a`
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
`;function eE({title:n="잔향 : 기억의 향기",nav:t=[{label:"PROJECTS",href:"/projects"},{label:"PEOPLES",href:"/peoples"},{label:"SHOWROOM",href:"/showroom"},{label:"GUESTBOOK",href:"/guestbook"},{label:"CREDITS",href:"/credits"}],copyright:r=["ⓒ 2025 TECH UNIV KOREA. ALL RIGHTS RESERVED.","TUKOREA DESIGN ENGINEERING 20TH GRADUATION EXHIBITION"],social:a={youtube:{href:"https://youtube.com",label:"YouTube"},instagram:{href:"https://instagram.com",label:"Instagram"}},maxWidth:o=1220,sidePadding:u=350}){return x.jsx(I4,{role:"contentinfo",children:x.jsxs(j4,{$sidePadding:u,$maxWidth:o,children:[x.jsx(D4,{children:n}),x.jsx(N4,{"aria-label":"푸터 메뉴",children:t.map(f=>{const p=f.href||"#",m=/^https?:\/\//i.test(p),g="/TU2025gradulate/";let v=p;return m||(p===g?v="/":p.startsWith(g)&&(v="/"+p.slice(g.length).replace(/^\/+/,""))),m?x.jsx(wx,{href:p,children:f.label},f.label):x.jsx(wx,{as:mo,to:v,children:f.label},f.label)})}),x.jsx(M4,{children:r.map((f,p)=>x.jsx("div",{children:f},p))}),x.jsxs(O4,{$sidePadding:u,children:[a?.youtube?.href&&x.jsx(Tx,{href:a.youtube.href,"aria-label":a.youtube.label||"YouTube",target:"_blank",rel:"noreferrer noopener",children:x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#FFFFFF","aria-hidden":!0,children:x.jsx("path",{d:"M23.5 7.2a4 4 0 0 0-2.8-2.8C18.8 4 12 4 12 4s-6.8 0-8.7.4A4 4 0 0 0 .5 7.2 41 41 0 0 0 0 12a41 41 0 0 0 .5 4.8 4 4 0 0 0 2.8 2.8C5.2 20 12 20 12 20s6.8 0 8.7-.4a4 4 0 0 0 2.8-2.8A41 41 0 0 0 24 12a41 41 0 0 0-.5-4.8zM9.6 15.2V8.8L15.8 12l-6.2 3.2z"})})}),a?.instagram?.href&&x.jsx(Tx,{href:a.instagram.href,"aria-label":a.instagram.label||"Instagram",target:"_blank",rel:"noreferrer noopener",children:x.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#FFFFFF","aria-hidden":!0,children:[x.jsx("path",{d:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2A3.2 3.2 0 1 1 12 8a3.2 3.2 0 0 1 0 6.4z"}),x.jsx("circle",{cx:"17.5",cy:"6.5",r:"1.2"}),x.jsx("path",{d:"M17.8 2H6.2A4.2 4.2 0 0 0 2 6.2v11.6A4.2 4.2 0 0 0 6.2 22h11.6A4.2 4.2 0 0 0 22 17.8V6.2A4.2 4.2 0 0 0 17.8 2zm2.6 15.8a2.6 2.6 0 0 1-2.6 2.6H6.2a2.6 2.6 0 0 1-2.6-2.6V6.2A2.6 2.6 0 0 1 6.2 3.6h11.6a2.6 2.6 0 0 1 2.6 2.6v11.6z"})]})})]})]})})}eE.propTypes={title:W.string,nav:W.arrayOf(W.shape({label:W.string.isRequired,href:W.string.isRequired})),copyright:W.arrayOf(W.string),social:W.shape({youtube:W.shape({href:W.string,label:W.string}),instagram:W.shape({href:W.string,label:W.string})}),maxWidth:W.number,sidePadding:W.number};const Ii="'Pretendard', system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif",V4=A.div`
  position: relative; background: #fff;
`,k4=A.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;function Sx({children:n}){return x.jsx(V4,{children:x.jsx(k4,{children:n})})}const U4=A.div`
  position: relative; height: 120px; display: flex; align-items: flex-end; justify-content: center;
  font-family: ${Ii}; font-size: 40px; font-weight: 700; color: #101010; line-height: 64px; margin-top: 98px;
  @media (max-width: 640px) {
    height: 21px;
    line-height: 21px;
    margin-top: 4px;
    font-size: 18px;
  }
`,P4=A.div`
  font-family: ${Ii}; font-size: 32px; font-weight: 600; line-height: 56px; color: #000; margin-top: 72px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 1220px;
  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 11px;
    margin-top: 24px;
    width: calc(100vw - 32px);
  }
`;function L4(){return x.jsxs(x.Fragment,{children:[x.jsx(U4,{children:"CREDITS"}),x.jsx(P4,{children:"잔향 : 기억의 향기"})]})}const z4=A.p`
  max-width: 374px;
  font-family: ${Ii};
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
    margin-top: 16px;
  }
`;function B4({text:n}){return x.jsx(z4,{dangerouslySetInnerHTML:{__html:n}})}const $4=A.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 46px;
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`,F4=A.div`
  width: 800px; height: 450px; background: #FFF4ED; position: relative;
  @media (max-width: 640px) {
    width: 100vw;
    height: calc(100vw * 0.5625); /* 16:9 비율 유지 */
  }
`,q4=A.div`
  position: absolute;
  left: 136px;
  top: 50%;
  transform: translateY(-50%);
  font-family: ${Ii};
  font-size: 82.64px;
  font-weight: 400;
  line-height: 92.55px;
  color: #000;
  @media (max-width: 640px) {
    font-size: 36px;
  }
`;function K4({children:n}){return x.jsx(F4,{children:x.jsx(q4,{children:n})})}const H4=A.div`
  display: flex; gap: 40px; margin-top: 44px; width: 1220px;
  @media (max-width: 640px) {
    // flex 위쪽에 2개, 아래에 1개 배치되게 해주고, 아래 배치된거는 위쪽 2개의 길이만큼 맞춰주게 해주세요
    width: 100%;
    flex-wrap: wrap;
    gap: 32px;
    margin-top: 24px;
  }
`,G4=A.div`
  width: 374px; display: flex; flex-direction: column; gap: 40px;
    @media (max-width: 640px) {
      width: 100%;
      gap: 16px;
      padding: 0px 16px;
  }
`,Y4=A.div`
  font-family: ${Ii}; font-size: 28px; font-weight: 600; line-height: 20px; color: #000; margin: 0;
  @media (max-width: 640px) {
    font-size: 14px;
    line-height: 10px;
  }
`,Q4=A.p`
  font-family: ${Ii}; font-size: 16px; font-weight: 400; line-height: 150%; color: #404040; text-align: justify; margin: 0;
  @media (max-width: 640px) {
    font-size: 10px;
  }
`;function X4({blocks:n}){return x.jsx(H4,{children:n.map(t=>x.jsxs(G4,{children:[x.jsx(Y4,{children:t.title}),x.jsx(Q4,{dangerouslySetInnerHTML:{__html:t.body}})]},t.title))})}const W4=A.div`
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
`,Z4=A.div`
  width: 289px;
  height: 45px;
  display: flex;
  align-items: flex-end;
  @media (max-width: 640px) {
    height: auto;
    width: 88px;
    margin-top: 12px;
  }
`,J4=A.div`
  font-family: ${Ii}; font-size: 20px;
  font-weight: 500;
  line-height: 22.4px;
  color: #202020;
  @media (max-width: 640px) {
    font-size: 14px;
    line-height: 14px;
  }
`,tA=A.div`
  width: 900px;
  display: flex;
  flex-direction: column;
  @media (max-width: 640px) {
    width: 100%;
  }
`;function eA({title:n,rows:t,last:r=!1}){return x.jsxs(W4,{$last:r,children:[x.jsx(Z4,{children:x.jsx(J4,{children:n})}),x.jsx(tA,{children:t.map((a,o)=>x.jsx(oA,{ko:a.ko,en:a.en,divider:t.length>1&&o!==t.length-1},a.ko+a.en+o))})]})}const nA=A.div`
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
`,iA=A.div`
  width: 135px;
  @media (max-width: 640px) {
    width: 66px;
  }
`,rA=A.div`
  font-family: ${Ii};
  font-size: 16px;
  font-weight: 300;
  line-height: 22.4px; 
  color: #202020;
  @media (max-width: 640px) {
    font-size: 12px;
    line-height: 14px;
  }
`,aA=A.div`
  display: flex; align-items: center;
`,sA=A.div`
  font-family: ${Ii};
  font-size: 16px;
  font-weight: 300;
  line-height: 22.4px;
  color: #404040;
  @media (max-width: 640px) {
    font-size: 12px;
    line-height: 14px;
  }
`;function oA({ko:n,en:t,divider:r=!1}){return x.jsxs(nA,{$divider:r,children:[x.jsx(iA,{children:x.jsx(rA,{children:n})}),x.jsx(aA,{children:x.jsx(sA,{children:t})})]})}const lA=A.div`
  margin-top: 60px;
  margin-bottom: 100px;
  @media (max-width: 640px) {
    margin-top: 80px;
    margin-bottom: 40px;
    width: calc(100vw - 32px);
    display: flex;
    flex-direction: column;
  }
`,uA=A.div`
  font-family: ${Ii};
  font-size: 28px;
  font-weight: 600;
  color: #101010;
  margin-bottom: 24px;
  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 18px;
    text-overflow: ellipsis;
  }
`;function cA(){const n='안녕하세요, 제20회 졸업전시준비위원회입니다. <br/><br/>한국공학대학교 디자인공학부 제20회 졸업전시 <잔향>은 지난 시간 동안의 도전과 성장을 작품으로 담아내는 자리입니다. 이번 전시는 단순히 결과물을 나열하는 데 그치지 않고, 각자의 창작 과정 속에서 남겨진 고민과 흔적을 함께 나누고자 기획되었습니다. <br/><br/><잔향>이라는 주제는 작품이 지닌 감각과 정서가 관람자의 마음에 은은히 스며들어, 시간이 지나도 다시 떠오르는 기억으로 남기를 바라는 마음을 담고 있습니다. 학생들이 걸어온 수많은 순간과 열정이 응축된 이번 전시가, 누군가의 영감으로 다시 피어나길 희망합니다. 100명의 학생들이 모여 만들어 낸 이 전시는 그 어느 때보다 크고 도전적인 시도였습니다. 서로의 열정이 모여 이루어진 결과물이기에, 그 의미 또한 더욱 특별합니다.<br/><br/> 이번 전시가 졸업생들에게는 새로운 출발을 알리는 이정표로, 관람객에게는 오래도록 마음속에 머무는 "기억의 향기"로 남기를 바랍니다.',t=[{title:"학과 소개",body:"한국공학대학교 디자인공학부는 창의적인 디자인 발상법과 공학적 마인드의 통합적 접근법을 추구하는 시대로 바뀜에 따라 단순히 심미적 역할에만 머물렀던 디자인 개념에서 확장하여 4차 산업혁명 기술 분야를 선도하고자 하는 비전을 담고 있는 실무 중심의 융합형 학부입니다.<br/>디자인공학부는 디자인 기반의 창의적 아이디어와 HW/SW 융합 기술 개발 능력을 통해 기업을 혁신할 수 있는 인재 양성을 목표로 하고 있습니다."},{title:"학부장의 말씀",body:"스무 번째를 맞이하는 디자인공학부 졸업작품전시회를 진심으로 축하드립니다.<br/>이번 전시회에는 총 100명의 학생들이 개인 혹은 팀을 이루어, 산업디자인공학전공 47개 작품과 미디어디자인공학전공 30개 작품을 선보입니다. 이번 전시회는 단순히 결과물을 보여주는 자리를 넘어, 지난 4년간의 땀과 열정, 수많은 고민과 성장이 맺은 값진 결실이자, 새로운 출발을 알리는 뜻깊은 순간입니다.<br/>오늘날 우리는 인공지능, 스마트 기술, 친환경 소재 등 급속히 변화하는 기술 환경 속에서 전례 없는 전환의 시대를 맞이하고 있습니다.<br/>이러한 가운데에 디자이너는 우리의 생활에서 여러 불편한 요소를 찾아내고 이를 창의적이며 책임감 있게 해결할 수 있는 융합형 인재로서 그 역할이 더욱 중요해지고 있습니다.<br/>우리 디자인공학부 학생들은 이러한 변화에 능동적으로 대응하며, 사용자 중심의 사고, 미적 감각, 기술적 이해를 균형 있게 갖춘 디자이너로 성장해 왔습니다. 이번 전시의 모든 작품에는 치열한 탐구와 관찰, 반복된 시도와 실패, 그리고 그 너머의 성장이 고스란히 담겨 있습니다. 그 귀중한 과정을 진심으로 응원하며, 우리 학생들이 디자인을 통해 사회에 공헌하고 세상에 긍정적인 변화를 이끄는 창의적이고 따뜻한 디자이너로 거듭나기를 바랍니다.<br/>앞으로 변화와 도전의 흐름 속에서도 흔들림 없이 자신이 옳다고 믿는 방향으로 꿋꿋하게 나아가며, 사회 곳곳에서 중심적인 역할을 수행하는 당당한 디자이너로 성장하길 기대합니다. 그리고 언제 어디서든 한국공학대학교 디자인공학부의 이름을 빛내는 자랑스러운 동문으로 기억되길 바랍니다.<br/>마지막으로, 소중한 인재들의 성장을 위해 아낌없는 지도와 격려를 보내주신 교수님들께 깊은 감사의 말씀을 전합니다. 또한, 묵묵히 곁에서 자녀를 응원해주신 학부모님들께도 진심 어린 감사의 인사를 드립니다. 감사합니다."},{title:"웹사이트팀 제작 후기",body:"내용 작성"}],r=[{title:"위원장",rows:[{ko:"홍승재",en:"Hong Seungjae"}]},{title:"부위원장",rows:[{ko:"김예린",en:"Kim Yerin"}]},{title:"총무",rows:[{ko:"진효민",en:"Jin Hyomin"},{ko:"정민호",en:"Jung Minho"}]},{title:"기획",rows:[{ko:"차소이",en:"Cha Soyi"},{ko:"문나라",en:"Moon Nara"},{ko:"한채원",en:"Han Chaewon"}]},{title:"홍보",rows:[{ko:"이채원",en:"Lee Chaewon"},{ko:"남가림",en:"Nam Garim"}]},{title:"디자인",rows:[{ko:"구인회",en:"Koo Inhoe"},{ko:"김기윤",en:"Kim Giyun"},{ko:"박혜성",en:"Park Hyeseong"},{ko:"석동현",en:"Suk Donghyun"}]},{title:"웹사이트",rows:[{ko:"성수민",en:"Seong Sumin"},{ko:"김예준",en:"Kim Yejun"}]},{title:"Special Thanks",rows:[{ko:"김한종 교수",en:"Prof. Kim Hanjong"}],last:!0}];return x.jsxs("div",{style:{position:"relative"},children:[x.jsxs(Sx,{children:[x.jsx(L4,{}),x.jsxs($4,{children:[x.jsx(B4,{text:n}),x.jsx(K4,{children:"단체사진 1장"})]})]}),x.jsxs(Sx,{children:[x.jsx(X4,{blocks:t}),x.jsxs(lA,{children:[x.jsxs(uA,{children:["2025 잔향",x.jsx("br",{}),"제 20대 졸업전시위원회"]}),r.map(a=>x.jsx(eA,{title:a.title,rows:a.rows,last:!!a.last},a.title))]})]})]})}const hA=A.div`
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
`,fA=A.div`
  position: relative;
  width: 55%;
  height: 100%;
  flex: 0 0 auto;
`,dA=A.img`
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
`,pA=A.div`
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #f6f6f6 100%);
  z-index: 2;
  width: 20%;
`,mA=A.div`
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
    padding: 16px 0 16px 18px;   
    font-size: 8px;
 }
`,Ax=A.div`
  margin: 0;
  padding: 0;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`,gA=A.h1`
    font-size: 28px;
    font-weight: 700;
    margin: 0;
 @media (max-width: 640px) {
    font-size: 16px;
 }
`,Yp=A.p`
    margin: 0;
@media (max-width: 640px) {
    font-size: 6px;
 }
`,yA=A(Yp)`
 @media (max-width: 640px) {
    display: none;
 }`;function zm({nameKor:n,nameEng:t,role:r,sns:a,eMail:o,imgSrc:u,imgAlt:f}){return x.jsxs(hA,{children:[x.jsxs(fA,{children:[x.jsx(dA,{src:u,alt:f}),x.jsx(pA,{})]}),x.jsxs(mA,{children:[x.jsxs(Ax,{style:{top:"50px"},children:[x.jsx(gA,{children:n}),x.jsx(Yp,{children:t})]}),x.jsxs(Ax,{children:[x.jsx(Yp,{children:r}),Array.isArray(a)&&a.length>0?x.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",margin:"4px 0 0 0"},children:a.map((p,m)=>x.jsx("a",{href:p.url,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"inherit",wordBreak:"break-all"},"aria-label":`${n} ${p.platform}`,children:p.url},`${p.platform}-${m}`))}):null,x.jsx(yA,{children:o?x.jsx("a",{style:{textDecoration:"none",color:"inherit"},href:`mailto:${o}`,children:o}):null})]})]})]})}zm.defaultProps={sns:[]};zm.propTypes={nameKor:W.string.isRequired,nameEng:W.string,role:W.string,sns:W.arrayOf(W.shape({platform:W.string.isRequired,url:W.string.isRequired})),eMail:W.string,imgSrc:W.string.isRequired,imgAlt:W.string.isRequired};const xA=A.div`
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
  @media (max-width: 640px) {
    width: 56px;
    height: auto;  
    border-radius: 10px;
 }
`,vA=A.div`
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
  @media (max-width: 640px) {
    width: 28px;
    height: 18px;
    left: ${n=>n.$active?"1px":"31px"};  
 }
`,nE=A.p`
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
  @media (max-width: 640px) {
    font-size: 8px;
    margin-left: 6px;
  }
`,_A=A(nE)`
  margin-left: 32px;
  color: ${n=>n.$active?"#909090":"#Fafafa"};
  font-weight: ${n=>n.$active?"400":"700"};
  @media (max-width: 640px) {
    font-size: 8px;
    margin-left: 16px;
  }
`;function Qp({path:n="student",isActive:t=!1,onClick:r}){return x.jsxs(xA,{onClick:r,children:[x.jsx(nE,{$active:t,children:"교수"}),x.jsx(_A,{$active:t,children:"학생"}),x.jsx(vA,{$active:t})]})}Qp.propTypes={path:W.oneOf(["student","professor"]),isActive:W.bool,onClick:W.func};const Rx=A.a`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 24px;
  line-height: 28.8px;
  letter-spacing: 0.24px;
  font-weight: ${n=>n.$active?700:400};
  color: ${n=>n.$active?"#000":"#bababa"};
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  padding: 0;
  margin: 0;
  cursor: pointer;
  outline: none;
  transition: opacity 120ms ease;
`;function ih({label:n,href:t=null,active:r=!1,onClick:a,style:o,target:u,rel:f}){const m={"aria-current":r?"page":void 0,"data-active":r?"true":"false",onKeyDown:g=>{a&&(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),a(g))},onClick:a,style:o,$active:r};return t?x.jsx(Rx,{href:t,target:u,rel:f,...m,children:n}):x.jsx(Rx,{as:"button",type:"button",...m,style:{background:"none",border:0,...o},children:n})}ih.propTypes={label:W.string.isRequired,href:W.string,active:W.bool,onClick:W.func,style:W.object,target:W.string,rel:W.string};const Cx=A.div`
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
`,Ix=A.div`
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
`,iE=A.p`
  width: auto;
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #191919;
  margin: 0;
  @media (max-width: 640px) {
   font-size: 13px;  
 }
`,EA=A(iE)`
  font-size: 13px;
  font-weight: 600;
`;function Bm({label:n,style:t,mode:r}){const a="/TU2025gradulate/",u=window.matchMedia("(max-width: 640px)").matches?`${a}icons/dropDownMobileIcon.svg`:`${a}icons/arrowDropdownIcon.svg`;return r==="category"?x.jsxs(Cx,{style:t,children:[x.jsx(EA,{children:n}),x.jsx(Ix,{children:x.jsx("img",{src:`${a}icons/arrowDropdownIcon.svg`,alt:"dropdownIcon"})})]}):x.jsxs(Cx,{style:t,children:[x.jsx(iE,{children:n}),x.jsx(Ix,{children:x.jsx("img",{src:u,alt:"dropdownIcon"})})]})}Bm.propTypes={label:W.string.isRequired,style:W.object};const bA=A.div`
  display: ${n=>n.$open?"flex":"none"};
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
  @media (max-width: 640px) {
     padding: 10px 16px;
 }
`,wA=A.div`
  display: flex;
  width: 90px;
  height: 20px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  @media (max-width: 640px) {
    width: 52px;  
 }
`,TA=A.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 16px;
  font-weight: ${n=>n.$selected?500:400};
  color: ${n=>n.$selected?"#191919":"#bababa"};
  margin: 0;
  padding: 0;
  @media (max-width: 640px) {
    font-size: 12px;  
 }
`;function rE({options:n,onSelect:t,style:r,isOpen:a,position:o,selected:u}){return x.jsx(bA,{style:r,$open:a,children:n.map((f,p)=>x.jsx(wA,{onClick:()=>t(f),children:x.jsx(TA,{$selected:f===u,children:f})},p))})}rE.propTypes={options:W.arrayOf(W.string).isRequired,onSelect:W.func.isRequired,style:W.object,isOpen:W.bool,position:W.any,selected:W.string};const SA=A.div`
  position: relative;
`;function $m({label:n,options:t,onSelect:r,style:a,filter:o,mode:u}){const[f,p]=Dt.useState(!1),[m,g]=Dt.useState({top:0,left:0}),v=Dt.useRef(null),w=()=>{if(v.current){const R=v.current.getBoundingClientRect();g({top:R.bottom+window.scrollY,left:R.left+window.scrollX})}p(R=>!R)},S=R=>{r&&r(R),p(!1)};return x.jsxs(SA,{ref:v,style:a,children:[x.jsx("div",{onClick:w,children:x.jsx(Bm,{label:n,options:t,onSelect:r,style:{},filter:o,mode:u})}),f&&x.jsx(rE,{options:t,onSelect:S,style:{},isOpen:f,position:m,selected:n})]})}$m.propTypes={label:W.string.isRequired,options:W.arrayOf(W.string).isRequired,onSelect:W.func.isRequired,style:W.object,filter:W.string};$m.defaultProps={style:{},filter:""};const AA=A.div`
    display: ${n=>n.$open?"flex":"none"};
    flex-direction: column;
    justify-content: flex-start;
    position: absolute;
    top: 100%;
    left: -16px;
    width: 100vw;
    height: auto;
    padding: 20px 16px;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(6px);
    z-index: 10;
`,RA=A.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    justify-content: flex-start;
    gap: 12px;
`,CA=A.div`
    font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
    font-size: 14px;
    font-weight: 400;
    height: 20px;
    color: ${n=>n.$selected?"#000":"#909090"};
    cursor: pointer;
`;function aE({options:n,isOpen:t,onSelect:r,selected:a}){return x.jsx(AA,{$open:t,children:x.jsx(RA,{children:n.map((o,u)=>x.jsx(CA,{$selected:a===o,onClick:()=>r(o),children:o},u))})})}aE.propTypes={options:W.arrayOf(W.string).isRequired,isOpen:W.bool.isRequired,onSelect:W.func.isRequired,selected:W.oneOfType([W.string,W.number])};const IA=A.div`
    position: relative;
`;function Pl({label:n,options:t,onSelect:r,style:a,mode:o}){const[u,f]=Dt.useState(!1),p=Dt.useRef(null),m=()=>{f(v=>!v)},g=v=>{r&&r(v),f(!1)};return x.jsxs(IA,{ref:p,style:a,children:[x.jsx("div",{onClick:m,children:x.jsx(Bm,{label:n,mode:o})}),u&&x.jsx(aE,{options:t,onSelect:g,isOpen:u,selected:n})]})}Pl.propTypes={label:W.string.isRequired,options:W.arrayOf(W.string).isRequired,onSelect:W.func.isRequired,style:W.object,mode:W.string};Pl.defaultProps={style:{},mode:"category"};const yp=A.div`
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
`,xp=A.div`
  width: 120px;
  height: 100%;
  @media (max-width: 640px) {
    display: none;
  }
`,vp=A.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  @media (max-width: 640px) {
    display: none;
  }
`,_p=A.div`
  display: none;
  @media (max-width: 640px) {
    display: flex;
    justify-content: center;
    width: auto;
  }
`;function sE({onCategoryChange:n,onToggleChange:t,type:r,onSortChange:a,sortLabel:o}){const u={type:r},[f,p]=Dt.useState(!1),m=()=>p(J=>{const dt=!J;return t&&t(dt),dt}),[g,v]=Dt.useState("전체"),[w,S]=Dt.useState("All Projects"),R=["전체","산업디자인공학","미디어디자인공학"],O=["장영주","권오재","김 억","김한종","조남주","한민섭","홍성수","김태균"],B=["All Projects","AI & Robot","Edu & Kids","Health Care","IT & Tech","Living","Mobility"],P=["이름순","좋아요순","조회수순","팀작우선","개인작우선"],[G,X]=Dt.useState("이름순"),it=o||G,ht=J=>{X(J),a&&a(J)};return K.useEffect(()=>{v(f?O[0]:R[0])},[f]),u.type==="project"?x.jsxs(yp,{children:[x.jsx(xp,{}),x.jsx(vp,{children:B.map(J=>x.jsx(ih,{label:J,active:w===J,onClick:()=>{S(J),n&&n(J)}},J))}),x.jsx(_p,{children:x.jsx(Pl,{mode:"category",label:w,options:B,onSelect:J=>{S(J),n&&n(J)}})}),x.jsx($m,{label:it,options:P,onSelect:ht})]}):f?x.jsxs(yp,{children:[x.jsx(xp,{}),x.jsx(vp,{children:O.map(J=>x.jsx(ih,{label:J,active:g===J,onClick:()=>{v(J),n&&n(J)}},J))}),x.jsx(_p,{children:x.jsx(Pl,{mode:"category",label:g,options:O,onSelect:J=>{v(J),n&&n(J)}})}),x.jsx(Qp,{path:f?"professor":"student",isActive:f,onClick:m})]}):x.jsxs(yp,{children:[x.jsx(xp,{}),x.jsx(vp,{children:R.map(J=>x.jsx(ih,{label:J,active:g===J,onClick:()=>{v(J),n&&n(J)}},J))}),x.jsx(_p,{children:x.jsx(Pl,{mode:"category",label:g,options:R,onSelect:J=>{v(J),n&&n(J)}})}),x.jsx(Qp,{path:f?"professor":"student",isActive:f,onClick:m})]})}const jA=A.div`
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
`,DA=A.div`
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
`,NA=A.img`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 240px;
  height: 332px;
  border: 1px solid #d0d0d0;
  object-fit: cover;
  @media (max-width: 640px) {
    width: 78px;
    height: 108px;
 }
`,MA=A.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0 20px;
  width: 983px;
  height: auto;
  @media (max-width: 640px) {
    width: 267px;  
    margin: 0 16px;
 }
`,OA=A.p`
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
  @media (max-width: 640px) {
    font-size: 18px;
 }
`,zc=A.div`
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
`,Bc=A.p`
  font-weight: 500;
  margin: 0;
  font-size: 20px;
  line-height: 22.4px;
  color: #606060;
  width: 135px;
  @media (max-width: 640px) {
    font-size: 10px;
    width: 75px;
 }
`,jx=A.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
`,$c=A.p`
  font-weight: 300;
  margin: 0;
  font-size: 16px;
  line-height: 22.4px;
  color: #000000;
  @media (max-width: 640px) {
    font-size: 10px;
 }
`;function Fm({nameKor:n,rank:t,eMail:r,education:a,field:o,imgSrc:u,imgAlt:f}){const p=m=>Array.isArray(m)?x.jsx(jx,{children:m.map((g,v)=>x.jsx($c,{children:g},v))}):typeof m=="string"&&m?x.jsx(jx,{children:x.jsx($c,{children:m})}):null;return x.jsx(jA,{children:x.jsxs(DA,{children:[x.jsx(NA,{src:u,alt:f}),x.jsxs(MA,{children:[x.jsx(OA,{children:n}),x.jsxs(zc,{children:[x.jsx(Bc,{children:"직위(직급)"}),x.jsx($c,{children:t})]}),x.jsxs(zc,{children:[x.jsx(Bc,{children:"이메일"}),x.jsx($c,{children:r})]}),x.jsxs(zc,{children:[x.jsx(Bc,{children:"약력"}),p(a)]}),x.jsxs(zc,{children:[x.jsx(Bc,{children:"전문 분야"}),p(o)]})]})]})})}Fm.propTypes={nameKor:W.string.isRequired,rank:W.string.isRequired,eMail:W.string.isRequired,education:W.oneOfType([W.string,W.arrayOf(W.string)]),field:W.oneOfType([W.string,W.arrayOf(W.string)]),imgSrc:W.string.isRequired,imgAlt:W.string.isRequired};Fm.defaultProps={nameKor:"홍길동",rank:"교수",eMail:"honggildong@example.com",education:[],field:[],imgSrc:"/TU2025gradulate/thumbnailExample.png",imgAlt:"홍길동 교수의 프로필 이미지"};const qm=JSON.parse('[{"num":0,"nameKor":"강유진","nameEng":"Kang Yujin","role":"Designer","department":1,"professorId":"p04","studentId":2021194003,"eMail":"rkddbwls0421@naver.com","sns":"","imgUrl":"../image/0/portrait.jpg","projectUrl":"","category":"c4","projectNum":45,"team":1,"leader":0},{"num":1,"nameKor":"고명현","nameEng":"Go Myeonghyeon","role":"Designer","department":1,"professorId":"p03","studentId":2019190002,"eMail":"aud4417@tukorea.ac.kr","sns":"","imgUrl":"../image/1/portrait.jpg","projectUrl":"","category":"c0","projectNum":0,"team":0,"leader":""},{"num":2,"nameKor":"고서영","nameEng":"Go Seoyeong","role":"Designer","department":0,"professorId":"p02","studentId":2022190001,"eMail":"rhtjdud2003@naver.com","sns":"","imgUrl":"../image/2/portrait.jpg","projectUrl":"","category":"c2","projectNum":26,"team":1,"leader":0},{"num":3,"nameKor":"고은솔","nameEng":"Ko Eunsol","role":"Designer","department":1,"professorId":"p01","studentId":2021194005,"eMail":"pinetree2021@tukorea.ac.kr","sns":"","imgUrl":"../image/3/portrait.jpg","projectUrl":"","category":"c1","projectNum":24,"team":0,"leader":""},{"num":4,"nameKor":"구예진","nameEng":"Koo Yejin","role":"Designer","department":1,"professorId":"p03","studentId":2022194002,"eMail":"ninejin63@gmail.com","sns":"","imgUrl":"../image/4/portrait.jpg","projectUrl":"","category":"c2","projectNum":27,"team":1,"leader":1},{"num":5,"nameKor":"구인회","nameEng":"Koo Inhoe","role":"Designer","department":0,"professorId":"p02","studentId":2020190001,"eMail":"eric2261@naver.com","sns":"","imgUrl":"../image/5/portrait.jpg","projectUrl":"","category":"c5","projectNum":66,"team":1,"leader":1},{"num":6,"nameKor":"권유빈","nameEng":"Kwon Yoobeen","role":"Designer","department":1,"professorId":"p02","studentId":2020194002,"eMail":"yoovebeen@naver.com","sns":"","imgUrl":"../image/6/portrait.jpg","projectUrl":"","category":"c2","projectNum":26,"team":1,"leader":1},{"num":7,"nameKor":"권지민","nameEng":"Kwon Jimin","role":"Designer","department":1,"professorId":"p03","studentId":2022194038,"eMail":"jmnee0115@naver.com","sns":"","imgUrl":"../image/7/portrait.jpg","projectUrl":"","category":"c4","projectNum":46,"team":0,"leader":""},{"num":8,"nameKor":"김강민","nameEng":"Kim Gangmin","role":"Designer","department":0,"professorId":"p04","studentId":2020192003,"eMail":"min7053@naver.com","sns":"","imgUrl":"../image/8/portrait.jpg","projectUrl":"","category":"c5","projectNum":67,"team":1,"leader":1},{"num":9,"nameKor":"김기윤","nameEng":"Kim Giyun","role":"Designer","department":0,"professorId":"p02","studentId":2020190002,"eMail":"tkenrnen112@naver.com","sns":"","imgUrl":"../image/9/portrait.jpg","projectUrl":"","category":"c5","projectNum":68,"team":1,"leader":0},{"num":10,"nameKor":"김동주","nameEng":"Kim Dongju","role":"Designer","department":0,"professorId":"p00","studentId":2020190005,"eMail":"dongju3144@daum.net","sns":"","imgUrl":"../image/10/portrait.jpg","projectUrl":"","category":"c3","projectNum":34,"team":0,"leader":""},{"num":11,"nameKor":"김민석","nameEng":"Kim Minseok","role":"Designer","department":0,"professorId":"p02","studentId":2020190006,"eMail":"minsuk2468@naver.com","sns":"","imgUrl":"../image/11/portrait.jpg","projectUrl":"","category":"c4","projectNum":47,"team":0,"leader":""},{"num":12,"nameKor":"김세린","nameEng":"Kim Serin","role":"Designer","department":0,"professorId":"p04","studentId":2021192006,"eMail":"kara7094@naver.com","sns":"","imgUrl":"../image/12/portrait.jpg","projectUrl":"","category":"c4","projectNum":48,"team":0,"leader":""},{"num":13,"nameKor":"김소리","nameEng":"Kim Sori","role":"Designer","department":1,"professorId":"p03","studentId":2021194037,"eMail":"mulsik11@gmail.com","sns":"","imgUrl":"../image/13/portrait.jpg","projectUrl":"","category":"c4","projectNum":49,"team":0,"leader":""},{"num":14,"nameKor":"김예린","nameEng":"Kim Yerin","role":"Designer","department":0,"professorId":"p02","studentId":2021190007,"eMail":"ask7240@naver.com","sns":"","imgUrl":"../image/14/portrait.jpg","projectUrl":"","category":"c5","projectNum":69,"team":0,"leader":""},{"num":15,"nameKor":"김예준","nameEng":"Kim Yejun","role":"Designer","department":1,"professorId":"p01","studentId":2020194006,"eMail":"optimusjun15@naver.com","sns":"","imgUrl":"../image/15/portrait.jpg","projectUrl":"","category":"c4","projectNum":50,"team":0,"leader":""},{"num":16,"nameKor":"김윤곤","nameEng":"Kim Yungon","role":"Designer","department":1,"professorId":"p03","studentId":2020194008,"eMail":"yunkon722@naver.com","sns":"","imgUrl":"../image/16/portrait.jpg","projectUrl":"","category":"c0","projectNum":1,"team":0,"leader":""},{"num":17,"nameKor":"김윤서","nameEng":"Kim Yunseo","role":"Designer","department":1,"professorId":"p02","studentId":2021192007,"eMail":"ekdma39@naver.com","sns":"","imgUrl":"../image/17/portrait.jpg","projectUrl":"","category":"c4","projectNum":51,"team":0,"leader":""},{"num":18,"nameKor":"김윤성","nameEng":"Kim Yunseong","role":"Designer","department":0,"professorId":"p00","studentId":2020192038,"eMail":"dbstjd9061@naver.com","sns":"","imgUrl":"../image/18/portrait.jpg","projectUrl":"","category":"c0","projectNum":2,"team":0,"leader":""},{"num":19,"nameKor":"김주은","nameEng":"Kim Jueun","role":"Designer","department":1,"professorId":"p02","studentId":2022194007,"eMail":"kimjueun6648@naver.com","sns":"","imgUrl":"../image/19/portrait.jpg","projectUrl":"","category":"c2","projectNum":28,"team":1,"leader":0},{"num":20,"nameKor":"김지민","nameEng":"Kim Jimin","role":"Designer","department":0,"professorId":"p02","studentId":2020190011,"eMail":"a01039029588@gmail.com","sns":"","imgUrl":"../image/20/portrait.jpg","projectUrl":"","category":"c3","projectNum":35,"team":1,"leader":0},{"num":21,"nameKor":"김지혜","nameEng":"Kim Jihye","role":"Designer","department":0,"professorId":"p05","studentId":2021190012,"eMail":"kjj0209077@naver.com","sns":"","imgUrl":"../image/21/portrait.jpg","projectUrl":"","category":"c5","projectNum":70,"team":1,"leader":1},{"num":22,"nameKor":"김한슬","nameEng":"Kim Hanseul","role":"Designer","department":0,"professorId":"p04","studentId":2021192008,"eMail":"pdl02081616@gmail.com","sns":"","imgUrl":"../image/22/portrait.jpg","projectUrl":"","category":"c3","projectNum":36,"team":0,"leader":""},{"num":23,"nameKor":"남가림","nameEng":"Nam Garim","role":"Designer","department":0,"professorId":"p00","studentId":2021190014,"eMail":"garim0402@naver.com","sns":"","imgUrl":"../image/23/portrait.jpg","projectUrl":"","category":"c5","projectNum":71,"team":1,"leader":1},{"num":24,"nameKor":"남궁두경","nameEng":"Namgoong Doogyung","role":"Designer","department":0,"professorId":"p05","studentId":2020192012,"eMail":"namgoongdg@gmail.com","sns":"","imgUrl":"../image/24/portrait.jpg","projectUrl":"","category":"c0","projectNum":3,"team":1,"leader":1},{"num":25,"nameKor":"노희재","nameEng":"Roe Heejae","role":"Designer","department":0,"professorId":"p02","studentId":2019192013,"eMail":"wjdrl1144@gmail.com","sns":"","imgUrl":"../image/25/portrait.jpg","projectUrl":"","category":"c3","projectNum":37,"team":0,"leader":""},{"num":26,"nameKor":"마은성","nameEng":"Ma Eunseong","role":"Designer","department":0,"professorId":"p05","studentId":2021190016,"eMail":"mes3788@naver.com","sns":"","imgUrl":"../image/26/portrait.jpg","projectUrl":"","category":"c5","projectNum":70,"team":1,"leader":0},{"num":27,"nameKor":"문나라","nameEng":"Moon Nara","role":"Designer","department":0,"professorId":"p02","studentId":2021192009,"eMail":"skfk020529@naver.com","sns":"","imgUrl":"../image/27/portrait.jpg","projectUrl":"","category":"c3","projectNum":38,"team":0,"leader":""},{"num":28,"nameKor":"문지형","nameEng":"Moon Jihyeong","role":"Designer","department":0,"professorId":"p05","studentId":2020192014,"eMail":"dogtable4099@naver.com","sns":"","imgUrl":"../image/28/portrait.jpg","projectUrl":"","category":"c0","projectNum":3,"team":1,"leader":0},{"num":29,"nameKor":"민혜연","nameEng":"Min Hyeyeon","role":"Designer","department":0,"professorId":"p00","studentId":2022192010,"eMail":"ajtlqkf_@naver.com","sns":"","imgUrl":"../image/29/portrait.jpg","projectUrl":"","category":"c2","projectNum":29,"team":0,"leader":""},{"num":30,"nameKor":"박민규","nameEng":"Park Mingyu","role":"Designer","department":1,"professorId":"p03","studentId":2019194041,"eMail":"mingyu6393@naver.com","sns":"","imgUrl":"../image/30/portrait.jpg","projectUrl":"","category":"c0","projectNum":4,"team":0,"leader":""},{"num":31,"nameKor":"박서영","nameEng":"Park Seoyoung","role":"Designer","department":1,"professorId":"p03","studentId":2021192011,"eMail":"pszer0@naver.com","sns":"","imgUrl":"../image/31/portrait.jpg","projectUrl":"","category":"c4","projectNum":52,"team":0,"leader":""},{"num":32,"nameKor":"박예인","nameEng":"Park Yein","role":"Designer","department":1,"professorId":"p01","studentId":2021194013,"eMail":"pyi0413@naver.com","sns":"","imgUrl":"../image/32/portrait.jpg","projectUrl":"","category":"c4","projectNum":45,"team":1,"leader":1},{"num":33,"nameKor":"박예진","nameEng":"Park Yejin","role":"Designer","department":0,"professorId":"p00","studentId":2021190018,"eMail":"yejin6607@naver.com","sns":"","imgUrl":"../image/33/portrait.jpg","projectUrl":"","category":"c5","projectNum":71,"team":1,"leader":0},{"num":34,"nameKor":"박재민","nameEng":"Park Jaemin","role":"Designer","department":1,"professorId":"p03","studentId":2020192016,"eMail":"shiibadog@naver.com","sns":"","imgUrl":"../image/34/portrait.jpg","projectUrl":"","category":"c2","projectNum":27,"team":1,"leader":0},{"num":35,"nameKor":"박정훈","nameEng":"Park Jeonghun","role":"Designer","department":0,"professorId":"p05","studentId":2022192012,"eMail":"hhh8353@naver.com","sns":"","imgUrl":"../image/35/portrait.jpg","projectUrl":"","category":"c2","projectNum":30,"team":0,"leader":""},{"num":36,"nameKor":"박지수","nameEng":"Park Jisoo","role":"Designer","department":1,"professorId":"p03","studentId":2021194014,"eMail":"popopo0128@naver.com","sns":"","imgUrl":"../image/36/portrait.jpg","projectUrl":"","category":"c0","projectNum":5,"team":0,"leader":""},{"num":37,"nameKor":"박해인","nameEng":"Park Haein","role":"Designer","department":0,"professorId":"p06","studentId":2022192014,"eMail":"haein061e@gmail.com","sns":"","imgUrl":"../image/37/portrait.jpg","projectUrl":"","category":"c5","projectNum":72,"team":0,"leader":""},{"num":38,"nameKor":"박현","nameEng":"Park Hyun","role":"Designer","department":0,"professorId":"p04","studentId":2022190039,"eMail":"prefrog2@naver.com","sns":"","imgUrl":"../image/38/portrait.jpg","projectUrl":"","category":"c4","projectNum":53,"team":1,"leader":1},{"num":39,"nameKor":"박혜성","nameEng":"Park Hyeseong","role":"Designer","department":0,"professorId":"p00","studentId":2021190020,"eMail":"hyesungpark1128@gmail.com","sns":"","imgUrl":"../image/39/portrait.jpg","projectUrl":"","category":"c5","projectNum":73,"team":0,"leader":""},{"num":40,"nameKor":"박효정","nameEng":"Park Hyojung","role":"Designer","department":0,"professorId":"p02","studentId":2021190021,"eMail":"lucymrx@naver.com","sns":"","imgUrl":"../image/40/portrait.jpg","projectUrl":"","category":"c4","projectNum":54,"team":0,"leader":""},{"num":41,"nameKor":"배아영","nameEng":"Bae Ayeong","role":"Designer","department":1,"professorId":"p01","studentId":2022194014,"eMail":"f3_ea@naver.com","sns":"","imgUrl":"../image/41/portrait.jpg","projectUrl":"","category":"c0","projectNum":6,"team":0,"leader":""},{"num":42,"nameKor":"배혜림","nameEng":"Bae Hyelim","role":"Designer","department":0,"professorId":"p05","studentId":2021192013,"eMail":"bhl00012@naver.com","sns":"","imgUrl":"../image/42/portrait.jpg","projectUrl":"","category":"c0","projectNum":7,"team":1,"leader":0},{"num":43,"nameKor":"백대한","nameEng":"Baek Daehan","role":"Designer","department":0,"professorId":"p05","studentId":2020192039,"eMail":"qoreogks789@naver.com","sns":"","imgUrl":"../image/43/portrait.jpg","projectUrl":"","category":"c0","projectNum":8,"team":0,"leader":""},{"num":44,"nameKor":"백미나","nameEng":"Baek Mina","role":"Designer","department":0,"professorId":"p06","studentId":2021190023,"eMail":"wbwyhr@gmail.com","sns":"","imgUrl":"../image/44/portrait.jpg","projectUrl":"","category":"c4","projectNum":55,"team":0,"leader":""},{"num":45,"nameKor":"서연주","nameEng":"Seo Yeonju","role":"Designer","department":1,"professorId":"p02","studentId":2022194015,"eMail":"syj0305290529@gmail.com","sns":"","imgUrl":"../image/45/portrait.jpg","projectUrl":"","category":"c2","projectNum":28,"team":1,"leader":1},{"num":46,"nameKor":"서원진","nameEng":"Seo Wonjin","role":"Designer","department":0,"professorId":"p05","studentId":2019152026,"eMail":"tjdnjswls4981@naver.com","sns":"","imgUrl":"../image/46/portrait.jpg","projectUrl":"","category":"c4","projectNum":56,"team":0,"leader":""},{"num":47,"nameKor":"석동현","nameEng":"Suk Donghyun","role":"Designer","department":0,"professorId":"p06","studentId":2020190015,"eMail":"andysuk0108@naver.com","sns":"","imgUrl":"../image/47/portrait.jpg","projectUrl":"","category":"c5","projectNum":66,"team":1,"leader":0},{"num":48,"nameKor":"성수민","nameEng":"Seong Sumin","role":"Designer","department":1,"professorId":"p02","studentId":2020194016,"eMail":"epwyqqu309@gmail.com","sns":"","imgUrl":"../image/48/portrait.jpg","projectUrl":"","category":"c3","projectNum":39,"team":1,"leader":1},{"num":49,"nameKor":"성유승","nameEng":"Sung Yuseung","role":"Designer","department":1,"professorId":"p02","studentId":2019122021,"eMail":"usngsung0830@naver.com","sns":"","imgUrl":"../image/49/portrait.jpg","projectUrl":"","category":"c1","projectNum":25,"team":1,"leader":0},{"num":50,"nameKor":"송지원","nameEng":"Song Jiwon","role":"Designer","department":0,"professorId":"p04","studentId":2021190024,"eMail":"wldnjs0762@naver.com","sns":"","imgUrl":"../image/50/portrait.jpg","projectUrl":"","category":"c0","projectNum":9,"team":1,"leader":1},{"num":51,"nameKor":"신산하","nameEng":"Shin Sanha","role":"Designer","department":1,"professorId":"p02","studentId":2021192014,"eMail":"sanha@tukorea.ac.kr","sns":"","imgUrl":"../image/51/portrait.jpg","projectUrl":"","category":"c3","projectNum":39,"team":1,"leader":0},{"num":52,"nameKor":"신주혜","nameEng":"Shin Juhye","role":"Designer","department":0,"professorId":"p05","studentId":2022190019,"eMail":"emily3652@naver.com","sns":"","imgUrl":"../image/52/portrait.jpg","projectUrl":"","category":"c0","projectNum":10,"team":1,"leader":0},{"num":53,"nameKor":"신주희","nameEng":"Shin Juhui","role":"Designer","department":1,"professorId":"p07","studentId":2022194016,"eMail":"lucytomato@naver.com","sns":"","imgUrl":"../image/53/portrait.jpg","projectUrl":"","category":"c3","projectNum":40,"team":0,"leader":""},{"num":54,"nameKor":"심태섭","nameEng":"Sim Taeseob","role":"Designer","department":1,"professorId":"p01","studentId":2020194017,"eMail":"1212sts@naver.com","sns":"","imgUrl":"../image/54/portrait.jpg","projectUrl":"","category":"c0","projectNum":11,"team":0,"leader":""},{"num":55,"nameKor":"안상은","nameEng":"An Sangeun","role":"Designer","department":1,"professorId":"p03","studentId":2022194018,"eMail":"itkddms@naver.com","sns":"","imgUrl":"../image/55/portrait.jpg","projectUrl":"","category":"c4","projectNum":57,"team":1,"leader":1},{"num":56,"nameKor":"염수민","nameEng":"Yeom Sumin","role":"Designer","department":1,"professorId":"p01","studentId":2022194021,"eMail":"yeomsumin030827@gmail.com","sns":"","imgUrl":"../image/56/portrait.jpg","projectUrl":"","category":"c4","projectNum":58,"team":0,"leader":""},{"num":57,"nameKor":"유수현","nameEng":"Ryu Soohyun","role":"Designer","department":0,"professorId":"p06","studentId":2022192019,"eMail":"suhyeon9145@naver.com","sns":"","imgUrl":"../image/57/portrait.jpg","projectUrl":"","category":"c2","projectNum":31,"team":1,"leader":1},{"num":58,"nameKor":"윤모란","nameEng":"Yoon Moran","role":"Designer","department":0,"professorId":"p06","studentId":2022190024,"eMail":"moran_a_486@naver.com","sns":"","imgUrl":"../image/58/portrait.jpg","projectUrl":"","category":"c2","projectNum":31,"team":1,"leader":0},{"num":59,"nameKor":"윤서희","nameEng":"Yoon Seohee","role":"Designer","department":0,"professorId":"p00","studentId":2020192021,"eMail":"dbstjgml000@naver.com","sns":"","imgUrl":"../image/59/portrait.jpg","projectUrl":"","category":"c0","projectNum":12,"team":0,"leader":""},{"num":60,"nameKor":"윤재익","nameEng":"Yun Jaeik","role":"Designer","department":1,"professorId":"p01","studentId":2020194018,"eMail":"jwodlr10014@naver.com","sns":"","imgUrl":"../image/60/portrait.jpg","projectUrl":"","category":"c0","projectNum":13,"team":0,"leader":""},{"num":61,"nameKor":"이교연","nameEng":"Lee Gyoyeon","role":"Designer","department":0,"professorId":"p01","studentId":2022192038,"eMail":"grace121516@naver.com","sns":"","imgUrl":"../image/61/portrait.jpg","projectUrl":"","category":"c2","projectNum":32,"team":0,"leader":""},{"num":62,"nameKor":"이도훈","nameEng":"Lee Dohun","role":"Designer","department":0,"professorId":"p02","studentId":2020190025,"eMail":"bestson0137@naver.com","sns":"","imgUrl":"../image/62/portrait.jpg","projectUrl":"","category":"c5","projectNum":74,"team":0,"leader":""},{"num":63,"nameKor":"이민욱","nameEng":"Lee Minuk","role":"Designer","department":1,"professorId":"p01","studentId":2020194021,"eMail":"lmu0306@naver.com","sns":"","imgUrl":"../image/63/portrait.jpg","projectUrl":"","category":"c4","projectNum":59,"team":0,"leader":""},{"num":64,"nameKor":"이상","nameEng":"Lee Sang","role":"Designer","department":0,"professorId":"p02","studentId":2020190027,"eMail":"23isgood@naver.com","sns":"","imgUrl":"../image/64/portrait.jpg","projectUrl":"","category":"c3","projectNum":35,"team":1,"leader":1},{"num":65,"nameKor":"이영","nameEng":"Lee Young","role":"Designer","department":1,"professorId":"p03","studentId":2022194025,"eMail":"young2003_@naver.com","sns":"","imgUrl":"../image/65/portrait.jpg","projectUrl":"","category":"c4","projectNum":57,"team":1,"leader":0},{"num":66,"nameKor":"이영재","nameEng":"Lee Youngjae","role":"Designer","department":1,"professorId":"p03","studentId":2020194023,"eMail":"buwong123@naver.com","sns":"","imgUrl":"../image/66/portrait.jpg","projectUrl":"","category":"c0","projectNum":14,"team":1,"leader":0},{"num":67,"nameKor":"이웅찬","nameEng":"Lee Woongchan","role":"Designer","department":0,"professorId":"p02","studentId":2020192028,"eMail":"dldndcks01@naver.com","sns":"","imgUrl":"../image/67/portrait.jpg","projectUrl":"","category":"c3","projectNum":41,"team":0,"leader":""},{"num":68,"nameKor":"이준오","nameEng":"Lee Juno","role":"Designer","department":0,"professorId":"p00","studentId":2020190030,"eMail":"ljuno421@naver.com","sns":"","imgUrl":"../image/68/portrait.jpg","projectUrl":"","category":"c0","projectNum":15,"team":1,"leader":1},{"num":69,"nameKor":"이지민","nameEng":"Lee Jimin","role":"Designer","department":1,"professorId":"p02","studentId":2020194026,"eMail":"ibs7533@naver.com","sns":"","imgUrl":"../image/69/portrait.jpg","projectUrl":"","category":"c1","projectNum":25,"team":1,"leader":1},{"num":70,"nameKor":"이지현","nameEng":"Lee Jihyeon","role":"Designer","department":0,"professorId":"p04","studentId":2022192023,"eMail":"dlwlgus1102@naver.com","sns":"","imgUrl":"../image/70/portrait.jpg","projectUrl":"","category":"c5","projectNum":67,"team":1,"leader":0},{"num":71,"nameKor":"이채연","nameEng":"Lee Chaeyeon","role":"Designer","department":1,"professorId":"p07","studentId":2021194022,"eMail":"cvgh6835@naver.com","sns":"","imgUrl":"../image/71/portrait.jpg","projectUrl":"","category":"c0","projectNum":16,"team":0,"leader":""},{"num":72,"nameKor":"이채원","nameEng":"Lee Chaewon","role":"Designer","department":0,"professorId":"p06","studentId":2022192024,"eMail":"chaerry3907@naver.com","sns":"","imgUrl":"../image/72/portrait.jpg","projectUrl":"","category":"c0","projectNum":7,"team":1,"leader":1},{"num":73,"nameKor":"이채원","nameEng":"Lee Chaewon","role":"Designer","department":1,"professorId":"p03","studentId":2021194023,"eMail":"coehfdl2222@naver.com","sns":"","imgUrl":"../image/73/portrait.jpg","projectUrl":"","category":"c0","projectNum":14,"team":1,"leader":1},{"num":74,"nameKor":"임세준","nameEng":"Im Sejun","role":"Designer","department":0,"professorId":"p04","studentId":2019190043,"eMail":"helicat123@naver.com","sns":"","imgUrl":"../image/74/portrait.jpg","projectUrl":"","category":"c5","projectNum":75,"team":1,"leader":1},{"num":75,"nameKor":"임소이","nameEng":"Yim Soie","role":"Designer","department":0,"professorId":"p05","studentId":2022190030,"eMail":"soie0410@naver.com","sns":"","imgUrl":"../image/75/portrait.jpg","projectUrl":"","category":"c0","projectNum":17,"team":1,"leader":1},{"num":76,"nameKor":"임종석","nameEng":"Lim Jongseok","role":"Designer","department":0,"professorId":"p06","studentId":2020192032,"eMail":"rimjs01@naver.com","sns":"","imgUrl":"../image/76/portrait.jpg","projectUrl":"","category":"c0","projectNum":18,"team":0,"leader":""},{"num":77,"nameKor":"전준범","nameEng":"Jeon Junbeom","role":"Designer","department":1,"professorId":"p01","studentId":2021194028,"eMail":"jbjeon0814@gmail.com","sns":"","imgUrl":"../image/77/portrait.jpg","projectUrl":"","category":"c4","projectNum":60,"team":0,"leader":""},{"num":78,"nameKor":"정문선","nameEng":"Jung Moonsun","role":"Designer","department":0,"professorId":"p02","studentId":2020190033,"eMail":"munseon9822@naver.com","sns":"","imgUrl":"../image/78/portrait.jpg","projectUrl":"","category":"c3","projectNum":42,"team":0,"leader":""},{"num":79,"nameKor":"정민호","nameEng":"Jung Minho","role":"Designer","department":0,"professorId":"p04","studentId":2020190034,"eMail":"jmh011014@naver.com","sns":"","imgUrl":"../image/79/portrait.jpg","projectUrl":"","category":"c5","projectNum":68,"team":1,"leader":1},{"num":80,"nameKor":"정유진","nameEng":"Jung Yuzin","role":"Designer","department":0,"professorId":"p05","studentId":2022190033,"eMail":"akf0301@naver.com","sns":"","imgUrl":"../image/80/portrait.jpg","projectUrl":"","category":"c5","projectNum":76,"team":0,"leader":""},{"num":81,"nameKor":"정지원","nameEng":"Jung Jiwon","role":"Designer","department":0,"professorId":"p06","studentId":2022192025,"eMail":"marcellar030328@naver.com","sns":"","imgUrl":"../image/81/portrait.jpg","projectUrl":"","category":"c0","projectNum":17,"team":1,"leader":0},{"num":82,"nameKor":"정혜원","nameEng":"Jeong Hyewon","role":"Designer","department":0,"professorId":"p06","studentId":2021190034,"eMail":"jeonghyewon020705@naver.com","sns":"","imgUrl":"../image/82/portrait.jpg","projectUrl":"","category":"c0","projectNum":10,"team":1,"leader":1},{"num":83,"nameKor":"정혜조","nameEng":"Jeong Hyejo","role":"Designer","department":0,"professorId":"p00","studentId":2022192028,"eMail":"hyejo5614@naver.com","sns":"","imgUrl":"../image/83/portrait.jpg","projectUrl":"","category":"c4","projectNum":61,"team":0,"leader":""},{"num":84,"nameKor":"정호균","nameEng":"Jeong Hokyun","role":"Designer","department":1,"professorId":"p01","studentId":2020194031,"eMail":"hohokyun@naver.com","sns":"","imgUrl":"../image/84/portrait.jpg","projectUrl":"","category":"c4","projectNum":62,"team":0,"leader":""},{"num":85,"nameKor":"조선화","nameEng":"Jo Sunhwa","role":"Designer","department":0,"professorId":"p04","studentId":2022192039,"eMail":"jo5629@naver.com","sns":"","imgUrl":"../image/85/portrait.jpg","projectUrl":"","category":"c4","projectNum":53,"team":1,"leader":0},{"num":86,"nameKor":"조채빈","nameEng":"Cho Chaebin","role":"Designer","department":0,"professorId":"p00","studentId":2021192029,"eMail":"cheabin0000@naver.com","sns":"","imgUrl":"../image/86/portrait.jpg","projectUrl":"","category":"c0","projectNum":19,"team":0,"leader":""},{"num":87,"nameKor":"주예지","nameEng":"Ju Yeji","role":"Designer","department":1,"professorId":"p03","studentId":2022194040,"eMail":"jooyeiji@naver.com","sns":"","imgUrl":"../image/87/portrait.jpg","projectUrl":"","category":"c0","projectNum":20,"team":0,"leader":""},{"num":88,"nameKor":"진세원","nameEng":"Jin Sewon","role":"Designer","department":0,"professorId":"p00","studentId":2022192030,"eMail":"sewoneee@naver.com","sns":"","imgUrl":"../image/88/portrait.jpg","projectUrl":"","category":"c0","projectNum":15,"team":1,"leader":0},{"num":89,"nameKor":"진효민","nameEng":"Jin Hyomin","role":"Designer","department":0,"professorId":"p07","studentId":2022190040,"eMail":"jhm8912@naver.com","sns":"","imgUrl":"../image/89/portrait.jpg","projectUrl":"","category":"c4","projectNum":63,"team":0,"leader":""},{"num":90,"nameKor":"차소이","nameEng":"Cha Soyi","role":"Designer","department":0,"professorId":"p06","studentId":2022192040,"eMail":"osjj2202@naver.com","sns":"","imgUrl":"../image/90/portrait.jpg","projectUrl":"","category":"c0","projectNum":21,"team":0,"leader":""},{"num":91,"nameKor":"차한비","nameEng":"Cha Hanbi","role":"Designer","department":0,"professorId":"p02","studentId":2022192031,"eMail":"cha4786@naver.com","sns":"","imgUrl":"../image/91/portrait.jpg","projectUrl":"","category":"c2","projectNum":33,"team":0,"leader":""},{"num":92,"nameKor":"최가현","nameEng":"Choi Gahyun","role":"Designer","department":1,"professorId":"p07","studentId":2022194034,"eMail":"poiulkjhmnb098@naver.com","sns":"","imgUrl":"../image/92/portrait.jpg","projectUrl":"","category":"c3","projectNum":43,"team":0,"leader":""},{"num":93,"nameKor":"한채원","nameEng":"Han Chaewon","role":"Designer","department":0,"professorId":"p04","studentId":2021190036,"eMail":"09clara@naver.com","sns":"","imgUrl":"../image/93/portrait.jpg","projectUrl":"","category":"c4","projectNum":64,"team":0,"leader":""},{"num":94,"nameKor":"함은서","nameEng":"Ham Eunseo","role":"Designer","department":1,"professorId":"p03","studentId":2021192034,"eMail":"hamunseo0894@naver.com","sns":"","imgUrl":"../image/94/portrait.jpg","projectUrl":"","category":"c0","projectNum":22,"team":0,"leader":""},{"num":95,"nameKor":"허도윤","nameEng":"Heo Doyun","role":"Designer","department":1,"professorId":"p03","studentId":2022194041,"eMail":"saver2075@icloud.com","sns":"","imgUrl":"../image/95/portrait.jpg","projectUrl":"","category":"c3","projectNum":44,"team":0,"leader":""},{"num":96,"nameKor":"허지유","nameEng":"Heo Jiyu","role":"Designer","department":0,"professorId":"p04","studentId":2021192035,"eMail":"jjoojjoo0314@naver.com","sns":"","imgUrl":"../image/96/portrait.jpg","projectUrl":"","category":"c0","projectNum":9,"team":1,"leader":0},{"num":97,"nameKor":"홍승재","nameEng":"Hong Seungjae","role":"Designer","department":0,"professorId":"p02","studentId":2020192036,"eMail":"h010505@naver.com","sns":"","imgUrl":"../image/97/portrait.jpg","projectUrl":"","category":"c4","projectNum":65,"team":0,"leader":""},{"num":98,"nameKor":"홍지우","nameEng":"Hong Jiwoo","role":"Designer","department":0,"professorId":"p04","studentId":2021192036,"eMail":"hongjiwoo222@naver.com","sns":"","imgUrl":"../image/98/portrait.jpg","projectUrl":"","category":"c5","projectNum":75,"team":1,"leader":0},{"num":99,"nameKor":"황수정","nameEng":"Hwang Sujeong","role":"Designer","department":0,"professorId":"p05","studentId":2022190036,"eMail":"zzxcvvb12@gmail.com","sns":"","imgUrl":"../image/99/portrait.jpg","projectUrl":"","category":"c0","projectNum":23,"team":0,"leader":""}]'),VA=[{id:"p00",nameKor:"장영주",nameEng:"Jang Youngjoo",rank:"학부장, 교수",email:"jyj@tukorea.ac.kr",education:["㈜LG 전자 디자인 연구소","㈜인터디자인 디자인 기획실장","한국디지털디자인학회 이사","경기도 시흥시 정책기획단 정책위원","제품디자인·브랜드 개발센터 [EH]책임교수","디자인비지니스혁신 센터장"],field:["제품디자인·브랜드 개발","디자인 조직과 협동적 Process","제품디자인과 산업기술의 통합적 시스템 구축"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524695988100.jpg"},{id:"p01",nameKor:"권오재",nameEng:"Kwon Ojae",rank:"교수",email:"kwsokw@tukorea.ac.kr",education:["임시 데이터","임시 데이터","임시 데이터","임시 데이터"],field:["임시 데이터","임시 데이터","임시 데이터","임시 데이터"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524642556100.jpg"},{id:"p02",nameKor:"김 억",nameEng:"Kim Eok",rank:"교수, 학생처장",email:"kimeok@tukorea.ac.kr",education:["㈜LG전자 디자인경영센터 선임연구원","KAIST 총동문회 이사","한국산업디자이너협회 이사 / 한국서비스디자인학회 이사","한국디자인기초조형학회 / 한국디자인학회 이사","디자인융합전문대학원 사업단장"],field:["디자인 전략 및 기획","서비스디자인 및 PSS(Product-Service System) 개발","도시 공공 디자인"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524658322100.jpg"},{id:"p03",nameKor:"김한종",nameEng:"Kim Hanjong",rank:"조교수, PD교수",email:"hanjongkim@tukorea.ac.kr",education:["AR 기반의 인터랙티브 제품 프로토타이핑 도구 개발","이동형음압병동의 디자인 요구사항 수립 연구","이동형음압병동 설계를 위한 디자인 도구 개발","한국기계연구원 산업용 SW UX/UI 가이드라인 개발"],field:["Web 기반 3D 그래픽스","SW 시스템 디자인 / 프론트엔드 개발","디자인 지원 도구 개발"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524669896100.jpg"},{id:"p04",nameKor:"조남주",nameEng:"Jo Namjoo",rank:"교수,특별보좌역",email:"njjoh@tukorea.ac.kr",education:["임시 데이터","임시 데이터","임시 데이터","임시 데이터"],field:["가구 디자인 엔지니어링","지속가능한 공공디자인","제품디자인 엔지니어링"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524711232100.jpg"},{id:"p05",nameKor:"한민섭",nameEng:"Han Minseop",rank:"부교수",email:"mshan@tukorea.ac.kr",education:["CISD정보저장기기 연구센터 전문연구원","㈜코닝 정밀소재 책임연구원","㈜삼성전자 생산기술연구소 책임연구원"],field:["나노/마이크로 초정밀 미세 가공 공정","Equipment H/W 설계 및 시뮬레이션","융복합 가공 시스템 설계"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524614469100.jpg"},{id:"p06",nameKor:"홍성수",nameEng:"Hong Seongsu",rank:"교수, 국제처장",email:"hss@tukorea.ac.kr",education:["3차원 의료영상시스템(MRI) 제품설계 및 디자인","다족형견마로봇 / 헬스케어로봇 / 재활보조로봇","식사보조로봇/ 수중로봇/ 청소로봇 / 웨어러블 로봇","협동로봇/ 자율주행로봇/ 순찰로봇/ 공항안내로봇 등 90여종 로봇 개발"],field:["로봇 시스템 개발/ 로봇디자인/ HRI 디자인","로봇 문화콘텐츠 기술개발","신기술 전시기획/ 전시시스템개발"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524724386100.jpg"},{id:"p07",nameKor:"김태균",nameEng:"Kim Taekyun",rank:"조교수, 진로취업지도교수",email:"tgkim1design@tukorea.ac.kr",education:["영국, 영국 국제디자인박람회전시 ‘London 100% Design‘ 초청 출품","중국, SUPER DESIGNERS: Exploration of Creative Forms, The Boundaries of Design Forms 초청 출품","INNOCHINA 대상","나는글로벌벤처다 동상","Spark Awards-Silver"],field:["AI 기반 제품·공공시설물 디자인 실무·방법론","UX 중심 디자인 전략·개발","지식 주도 디자인 아이디에이션 기반 실무 디자인 설계 및 교수법"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1724738930608100.jpg"}],Yl=JSON.parse('[{"members":[1],"category":"c0","projectNum":0,"titleKor":"한국어 타이틀 1","titleEng":"EngTitle 1","galleryCount":1,"description":"작품 설명 내용"},{"members":[16],"category":"c0","projectNum":1,"titleKor":"한국어 타이틀 2","titleEng":"EngTitle 2","galleryCount":1,"description":"작품 설명 내용"},{"members":[18],"category":"c0","projectNum":2,"titleKor":"한국어 타이틀 3","titleEng":"EngTitle 3","galleryCount":1,"description":"작품 설명 내용"},{"members":[24,28],"category":"c0","projectNum":3,"titleKor":"한국어 타이틀 4","titleEng":"EngTitle 4","galleryCount":1,"description":"작품 설명 내용"},{"members":[30],"category":"c0","projectNum":4,"titleKor":"한국어 타이틀 5","titleEng":"EngTitle 5","galleryCount":1,"description":"작품 설명 내용"},{"members":[36],"category":"c0","projectNum":5,"titleKor":"한국어 타이틀 6","titleEng":"EngTitle 6","galleryCount":1,"description":"작품 설명 내용"},{"members":[41],"category":"c0","projectNum":6,"titleKor":"한국어 타이틀 7","titleEng":"EngTitle 7","galleryCount":1,"description":"작품 설명 내용"},{"members":[72,42],"category":"c0","projectNum":7,"titleKor":"한국어 타이틀 8","titleEng":"EngTitle 8","galleryCount":1,"description":"작품 설명 내용"},{"members":[43],"category":"c0","projectNum":8,"titleKor":"한국어 타이틀 9","titleEng":"EngTitle 9","galleryCount":1,"description":"작품 설명 내용"},{"members":[50,96],"category":"c0","projectNum":9,"titleKor":"한국어 타이틀 10","titleEng":"EngTitle 10","galleryCount":1,"description":"작품 설명 내용"},{"members":[82,52],"category":"c0","projectNum":10,"titleKor":"한국어 타이틀 11","titleEng":"EngTitle 11","galleryCount":1,"description":"작품 설명 내용"},{"members":[54],"category":"c0","projectNum":11,"titleKor":"한국어 타이틀 12","titleEng":"EngTitle 12","galleryCount":1,"description":"작품 설명 내용"},{"members":[59],"category":"c0","projectNum":12,"titleKor":"한국어 타이틀 13","titleEng":"EngTitle 13","galleryCount":1,"description":"작품 설명 내용"},{"members":[60],"category":"c0","projectNum":13,"titleKor":"한국어 타이틀 14","titleEng":"EngTitle 14","galleryCount":1,"description":"작품 설명 내용"},{"members":[73,66],"category":"c0","projectNum":14,"titleKor":"한국어 타이틀 15","titleEng":"EngTitle 15","galleryCount":1,"description":"작품 설명 내용"},{"members":[68,88],"category":"c0","projectNum":15,"titleKor":"한국어 타이틀 16","titleEng":"EngTitle 16","galleryCount":1,"description":"작품 설명 내용"},{"members":[71],"category":"c0","projectNum":16,"titleKor":"한국어 타이틀 17","titleEng":"EngTitle 17","galleryCount":1,"description":"작품 설명 내용"},{"members":[75,81],"category":"c0","projectNum":17,"titleKor":"한국어 타이틀 18","titleEng":"EngTitle 18","galleryCount":1,"description":"작품 설명 내용"},{"members":[76],"category":"c0","projectNum":18,"titleKor":"한국어 타이틀 19","titleEng":"EngTitle 19","galleryCount":1,"description":"작품 설명 내용"},{"members":[86],"category":"c0","projectNum":19,"titleKor":"한국어 타이틀 20","titleEng":"EngTitle 20","galleryCount":1,"description":"작품 설명 내용"},{"members":[87],"category":"c0","projectNum":20,"titleKor":"한국어 타이틀 21","titleEng":"EngTitle 21","galleryCount":1,"description":"작품 설명 내용"},{"members":[90],"category":"c0","projectNum":21,"titleKor":"한국어 타이틀 22","titleEng":"EngTitle 22","galleryCount":1,"description":"작품 설명 내용"},{"members":[94],"category":"c0","projectNum":22,"titleKor":"한국어 타이틀 23","titleEng":"EngTitle 23","galleryCount":1,"description":"작품 설명 내용"},{"members":[99],"category":"c0","projectNum":23,"titleKor":"한국어 타이틀 24","titleEng":"EngTitle 24","galleryCount":1,"description":"작품 설명 내용"},{"members":[3],"category":"c1","projectNum":24,"titleKor":"한국어 타이틀 25","titleEng":"EngTitle 25","galleryCount":1,"description":"작품 설명 내용"},{"members":[69,49],"category":"c1","projectNum":25,"titleKor":"한국어 타이틀 26","titleEng":"EngTitle 26","galleryCount":1,"description":"작품 설명 내용"},{"members":[6,2],"category":"c2","projectNum":26,"titleKor":"한국어 타이틀 27","titleEng":"EngTitle 27","galleryCount":1,"description":"작품 설명 내용"},{"members":[4,34],"category":"c2","projectNum":27,"titleKor":"한국어 타이틀 28","titleEng":"EngTitle 28","galleryCount":1,"description":"작품 설명 내용"},{"members":[54,19],"category":"c2","projectNum":28,"titleKor":"한국어 타이틀 29","titleEng":"EngTitle 29","galleryCount":1,"description":"작품 설명 내용"},{"members":[29],"category":"c2","projectNum":29,"titleKor":"한국어 타이틀 30","titleEng":"EngTitle 30","galleryCount":1,"description":"작품 설명 내용"},{"members":[35],"category":"c2","projectNum":30,"titleKor":"한국어 타이틀 31","titleEng":"EngTitle 31","galleryCount":1,"description":"작품 설명 내용"},{"members":[57,58],"category":"c2","projectNum":31,"titleKor":"한국어 타이틀 32","titleEng":"EngTitle 32","galleryCount":1,"description":"작품 설명 내용"},{"members":[61],"category":"c2","projectNum":32,"titleKor":"한국어 타이틀 33","titleEng":"EngTitle 33","galleryCount":1,"description":"작품 설명 내용"},{"members":[91],"category":"c2","projectNum":33,"titleKor":"한국어 타이틀 34","titleEng":"EngTitle 34","galleryCount":1,"description":"작품 설명 내용"},{"members":[10],"category":"c3","projectNum":34,"titleKor":"한국어 타이틀 35","titleEng":"EngTitle 35","galleryCount":1,"description":"작품 설명 내용"},{"members":[64,20],"category":"c3","projectNum":35,"titleKor":"한국어 타이틀 36","titleEng":"EngTitle 36","galleryCount":1,"description":"작품 설명 내용"},{"members":[22],"category":"c3","projectNum":36,"titleKor":"한국어 타이틀 37","titleEng":"EngTitle 37","galleryCount":1,"description":"작품 설명 내용"},{"members":[25],"category":"c3","projectNum":37,"titleKor":"한국어 타이틀 38","titleEng":"EngTitle 38","galleryCount":1,"description":"작품 설명 내용"},{"members":[27],"category":"c3","projectNum":38,"titleKor":"한국어 타이틀 39","titleEng":"EngTitle 39","galleryCount":1,"description":"작품 설명 내용"},{"members":[48,51],"category":"c3","projectNum":39,"titleKor":"한국어 타이틀 40","titleEng":"EngTitle 40","galleryCount":1,"description":"작품 설명 내용"},{"members":[53],"category":"c3","projectNum":40,"titleKor":"한국어 타이틀 41","titleEng":"EngTitle 41","galleryCount":1,"description":"작품 설명 내용"},{"members":[67],"category":"c3","projectNum":41,"titleKor":"한국어 타이틀 42","titleEng":"EngTitle 42","galleryCount":1,"description":"작품 설명 내용"},{"members":[78],"category":"c3","projectNum":42,"titleKor":"한국어 타이틀 43","titleEng":"EngTitle 43","galleryCount":1,"description":"작품 설명 내용"},{"members":[92],"category":"c3","projectNum":43,"titleKor":"한국어 타이틀 44","titleEng":"EngTitle 44","galleryCount":1,"description":"작품 설명 내용"},{"members":[95],"category":"c3","projectNum":44,"titleKor":"한국어 타이틀 45","titleEng":"EngTitle 45","galleryCount":1,"description":"작품 설명 내용"},{"members":[32,0],"category":"c4","projectNum":45,"titleKor":"한국어 타이틀 46","titleEng":"EngTitle 46","galleryCount":1,"description":"작품 설명 내용"},{"members":[7],"category":"c4","projectNum":46,"titleKor":"한국어 타이틀 47","titleEng":"EngTitle 47","galleryCount":1,"description":"작품 설명 내용"},{"members":[11],"category":"c4","projectNum":47,"titleKor":"한국어 타이틀 48","titleEng":"EngTitle 48","galleryCount":1,"description":"작품 설명 내용"},{"members":[12],"category":"c4","projectNum":48,"titleKor":"한국어 타이틀 49","titleEng":"EngTitle 49","galleryCount":1,"description":"작품 설명 내용"},{"members":[13],"category":"c4","projectNum":49,"titleKor":"한국어 타이틀 50","titleEng":"EngTitle 50","galleryCount":1,"description":"작품 설명 내용"},{"members":[15],"category":"c4","projectNum":50,"titleKor":"한국어 타이틀 51","titleEng":"EngTitle 51","galleryCount":1,"description":"작품 설명 내용"},{"members":[17],"category":"c4","projectNum":51,"titleKor":"한국어 타이틀 52","titleEng":"EngTitle 52","galleryCount":1,"description":"작품 설명 내용"},{"members":[31],"category":"c4","projectNum":52,"titleKor":"한국어 타이틀 53","titleEng":"EngTitle 53","galleryCount":1,"description":"작품 설명 내용"},{"members":[38,85],"category":"c4","projectNum":53,"titleKor":"한국어 타이틀 54","titleEng":"EngTitle 54","galleryCount":1,"description":"작품 설명 내용"},{"members":[40],"category":"c4","projectNum":54,"titleKor":"한국어 타이틀 55","titleEng":"EngTitle 55","galleryCount":1,"description":"작품 설명 내용"},{"members":[44],"category":"c4","projectNum":55,"titleKor":"한국어 타이틀 56","titleEng":"EngTitle 56","galleryCount":1,"description":"작품 설명 내용"},{"members":[46],"category":"c4","projectNum":56,"titleKor":"한국어 타이틀 57","titleEng":"EngTitle 57","galleryCount":1,"description":"작품 설명 내용"},{"members":[55,65],"category":"c4","projectNum":57,"titleKor":"한국어 타이틀 58","titleEng":"EngTitle 58","galleryCount":1,"description":"작품 설명 내용"},{"members":[56],"category":"c4","projectNum":58,"titleKor":"한국어 타이틀 59","titleEng":"EngTitle 59","galleryCount":1,"description":"작품 설명 내용"},{"members":[63],"category":"c4","projectNum":59,"titleKor":"한국어 타이틀 60","titleEng":"EngTitle 60","galleryCount":1,"description":"작품 설명 내용"},{"members":[77],"category":"c4","projectNum":60,"titleKor":"한국어 타이틀 61","titleEng":"EngTitle 61","galleryCount":1,"description":"작품 설명 내용"},{"members":[83],"category":"c4","projectNum":61,"titleKor":"한국어 타이틀 62","titleEng":"EngTitle 62","galleryCount":1,"description":"작품 설명 내용"},{"members":[84],"category":"c4","projectNum":62,"titleKor":"한국어 타이틀 63","titleEng":"EngTitle 63","galleryCount":1,"description":"작품 설명 내용"},{"members":[89],"category":"c4","projectNum":63,"titleKor":"한국어 타이틀 64","titleEng":"EngTitle 64","galleryCount":1,"description":"작품 설명 내용"},{"members":[93],"category":"c4","projectNum":64,"titleKor":"한국어 타이틀 65","titleEng":"EngTitle 65","galleryCount":1,"description":"작품 설명 내용"},{"members":[97],"category":"c4","projectNum":65,"titleKor":"한국어 타이틀 66","titleEng":"EngTitle 66","galleryCount":1,"description":"작품 설명 내용"},{"members":[5,47],"category":"c5","projectNum":66,"titleKor":"한국어 타이틀 67","titleEng":"EngTitle 67","galleryCount":1,"description":"작품 설명 내용"},{"members":[8,70],"category":"c5","projectNum":67,"titleKor":"한국어 타이틀 68","titleEng":"EngTitle 68","galleryCount":1,"description":"작품 설명 내용"},{"members":[79,9],"category":"c5","projectNum":68,"titleKor":"한국어 타이틀 69","titleEng":"EngTitle 69","galleryCount":1,"description":"작품 설명 내용"},{"members":[14],"category":"c5","projectNum":69,"titleKor":"한국어 타이틀 70","titleEng":"EngTitle 70","galleryCount":1,"description":"작품 설명 내용"},{"members":[21,26],"category":"c5","projectNum":70,"titleKor":"한국어 타이틀 71","titleEng":"EngTitle 71","galleryCount":1,"description":"작품 설명 내용"},{"members":[23,33],"category":"c5","projectNum":71,"titleKor":"한국어 타이틀 72","titleEng":"EngTitle 72","galleryCount":1,"description":"작품 설명 내용"},{"members":[37],"category":"c5","projectNum":72,"titleKor":"한국어 타이틀 73","titleEng":"EngTitle 73","galleryCount":1,"description":"작품 설명 내용"},{"members":[39],"category":"c5","projectNum":73,"titleKor":"한국어 타이틀 74","titleEng":"EngTitle 74","galleryCount":1,"description":"작품 설명 내용"},{"members":[62],"category":"c5","projectNum":74,"titleKor":"한국어 타이틀 75","titleEng":"EngTitle 75","galleryCount":1,"description":"작품 설명 내용"},{"members":[74,98],"category":"c5","projectNum":75,"titleKor":"한국어 타이틀 76","titleEng":"EngTitle 76","galleryCount":1,"description":"작품 설명 내용"},{"members":[80],"category":"c5","projectNum":76,"titleKor":"한국어 타이틀 77","titleEng":"EngTitle 77","galleryCount":1,"description":"작품 설명 내용"}]'),Dx=40;function oE(n){if(!n)return n;const t="/TU2025gradulate/";if(/^https?:\/\//i.test(n))return n;const r=n.replace(/^\.\.\//,"").replace(/^\//,"");return t+r}const kA={c0:"A",c1:"E",c2:"H",c3:"I",c4:"L",c5:"M"},Nx=["전체","산업디자인공학","미디어디자인공학"],UA={산업디자인공학:0,미디어디자인공학:1},Mx=n=>n==="IND"||n===0||n==="0"?0:n==="MED"||n===1||n==="1"?1:n,Ep=qm,jl=VA,PA=A.div`
  position: relative; background: #fff;
`,LA=A.div`
  padding-left: ${Dx}px; padding-right: ${Dx}px; display: flex; flex-direction: column;
  @media (max-width: 640px) {
    padding-left: 16px;
    padding-right: 16px;  
 }
`;function zA({children:n}){return x.jsx(PA,{children:x.jsx(LA,{children:n})})}const BA=A.div`
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
`,$A=A.div`
  display: none;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 21px;
  font-family: 'Pretendard', system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.6px;
  color: #000000;
  margin-top: 4px;
  @media (max-width: 640px) {
    display: flex;
  }
`,FA=A.div`
  text-decoration: none; cursor: pointer;
`,qA=A.div`position: relative;`;function KA({people:n}){const t=Cm();return x.jsx(BA,{children:n.map((r,a)=>{const o=r.id??r.studentId??`${r.nameKor}-${a}`,u=typeof r.projectNum=="number"&&r.category,f=u?r.projectNum+1:null,p=u?`${kA[r.category]||"A"}${String(f).padStart(3,"0")}`:null,m=x.jsx(zm,{nameKor:r.nameKor,nameEng:r.nameEng,role:r.role,sns:r.sns||"-",eMail:r.eMail,imgSrc:oE(r.imgUrl),imgAlt:`${r.nameKor} profile`},o);return u?x.jsx(FA,{role:"link",tabIndex:0,onClick:()=>t(`/work/${p}`),onKeyDown:g=>{(g.key==="Enter"||g.key===" ")&&t(`/work/${p}`)},"aria-label":`${r.nameKor} 작품 보기 (${p})`,children:m},`link-${o}`):m})})}function HA(){const[n,t]=Dt.useState(!1),[r,a]=Dt.useState(Nx[0]),o=Dt.useMemo(()=>{const p=new Map;return(Yl||[]).forEach(m=>{(m.members||[]).forEach(g=>{p.has(g)||p.set(g,m)})}),p},[]);Dt.useEffect(()=>{a(n?jl[0]?.id||"":Nx[0])},[n]);const u=Dt.useMemo(()=>{if(!n){if(r==="전체")return Ep;let m=UA[r];return m===void 0&&(m=Mx(r)),Ep.filter(g=>Mx(g.department)===m)}const p=jl.some(m=>m.id===r)?r:jl.find(m=>m.nameKor===r)?.id||"";return Ep.filter(m=>m.professorId===p).map(m=>{let g=o.get(m.num);g||(g=(Yl||[]).find(w=>w.category===m.category&&w.projectNum===m.projectNum)||null);const v=g?`/projects/${g.projectNum}/thumb.jpg`:"/thumbnailExample.png";return{...m,imgUrl:v}})},[r,n,o]),f=Dt.useMemo(()=>n&&(jl.find(m=>m.id===r)||jl.find(m=>m.nameKor===r))||null,[n,r]);return x.jsxs(qA,{children:[x.jsx($A,{children:"Peoples"}),x.jsx(sE,{type:"people",onCategoryChange:a,onToggleChange:t}),x.jsxs(zA,{children:[n&&f&&x.jsx(Fm,{nameKor:f.nameKor,rank:f.rank||"교수",eMail:f.email,education:f.education,field:f.field,imgSrc:oE(f.imgUrl),imgAlt:`${f.nameKor} profile`}),x.jsx(KA,{people:u})]})]})}const GA=A.div`
  position: relative;
  width: 445px;
  height: 353px;
  border-radius: 16px;
  cursor: pointer;
  @media (max-width: 640px) {
    width: 173px;
    height: 137px;  
 }
`,Ox=A.div`
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
`,YA=A.div`
  display: flex;
  width: 445px;
  height: 353px;
  border-radius: 16px;
  @media (max-width: 640px) {
    width: 173px;
    height: 137px;
  }
`,QA=A.img`
  display: flex;
  width: 445px;
  height: 353px;
  border-radius: 16px;
  object-fit: cover;
  @media (max-width: 640px) {
    width: 173px;
    height: 137px;  
 }
`,XA=A.div`
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
    background: linear-gradient(180deg, rgba(102, 102, 102, 0) 60%, rgba(0, 0, 0, 0.6) 100%);
  }
`,WA=A.div`
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
 }
`,ZA=A.p`
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
`,JA=A.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  width: auto;
  color: #FFFFFF;
  @media (max-width: 640px) {
    font-size: 6px;
  }
`,tR=A.div`
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
`,eR=A.div`
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
`,nR=A.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 14px;
  font-weight: 300;
  margin: 0;
  color: #121212;
  @media (max-width: 640px) {
    font-size: 10px;  
 }
`,iR=A.div`
  display: flex;
  position: relative;
  width: auto;
  height: 20px;
  gap: -12px;
  @media (max-width: 640px) {
    height: 12px;  
 }
`,rR=A.img`
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
`,aR=A.div`
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
`,Vx=A.div`
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
`,kx=A.div`
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
`,Ux=A.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 12px;
  font-weight: 300;
  margin: 0;
  color: #121212;
  @media (max-width: 640px) {
    font-size: 8px;
 }
`;function Px(n){return typeof n=="number"&&n>999?"999+":n}function Km({titleKor:n,titleEng:t,nameKor:r,view:a,like:o,href:u,src:f,profileImgs:p,docId:m}){const g=typeof o=="number"?o:0,v=typeof a=="number"?a:0,w=P=>{const G=P.currentTarget.querySelector(".card-hover");G&&(G.style.opacity=1)},S=P=>{const G=P.currentTarget.querySelector(".card-hover");G&&(G.style.opacity=0)},R="/TU2025gradulate/",O=/^https?:\/\//i.test(u),B=x.jsxs(x.Fragment,{children:[x.jsx(GA,{children:x.jsxs(YA,{onMouseEnter:w,onMouseLeave:S,children:[x.jsx(XA,{className:"card-hover",children:x.jsxs(WA,{children:[x.jsx(JA,{children:n}),x.jsx(ZA,{children:t})]})}),x.jsx(QA,{src:f,alt:"Project"})]})}),x.jsxs(tR,{children:[x.jsxs(eR,{children:[x.jsx(iR,{children:p.map((P,G)=>x.jsx(rR,{src:P,alt:`Profile${G+1}`,$z:3-G,$ml:G>0},G))}),x.jsx(nR,{children:r})]}),x.jsxs(aR,{children:[x.jsxs(Vx,{children:[x.jsx(kx,{src:`${R}icons/likeIcon.svg`}),x.jsx(Ux,{children:Px(g)})]}),x.jsxs(Vx,{children:[x.jsx(kx,{src:`${R}icons/viewIcon.svg`}),x.jsx(Ux,{children:Px(v)})]})]})]})]});return O?x.jsx(Ox,{as:"a",href:u,style:{textDecoration:"none"},children:B}):x.jsx(Ox,{as:mo,to:u.startsWith("/")?u:`/${u}`,style:{textDecoration:"none"},children:B})}Km.propTypes={titleKor:W.string.isRequired,titleEng:W.string.isRequired,nameKor:W.string.isRequired,view:W.number,like:W.number,src:W.string.isRequired,href:W.string.isRequired,profileImgs:W.arrayOf(W.string).isRequired,docId:W.oneOfType([W.string,W.number]),collection:W.string};Km.defaultProps={titleKor:"프로젝트 제목",titleEng:"Project Title",nameKor:"Author Name",view:0,like:0,collection:"works"};const sR=()=>{};var Lx={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE=function(n){const t=[];let r=0;for(let a=0;a<n.length;a++){let o=n.charCodeAt(a);o<128?t[r++]=o:o<2048?(t[r++]=o>>6|192,t[r++]=o&63|128):(o&64512)===55296&&a+1<n.length&&(n.charCodeAt(a+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++a)&1023),t[r++]=o>>18|240,t[r++]=o>>12&63|128,t[r++]=o>>6&63|128,t[r++]=o&63|128):(t[r++]=o>>12|224,t[r++]=o>>6&63|128,t[r++]=o&63|128)}return t},oR=function(n){const t=[];let r=0,a=0;for(;r<n.length;){const o=n[r++];if(o<128)t[a++]=String.fromCharCode(o);else if(o>191&&o<224){const u=n[r++];t[a++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=n[r++],f=n[r++],p=n[r++],m=((o&7)<<18|(u&63)<<12|(f&63)<<6|p&63)-65536;t[a++]=String.fromCharCode(55296+(m>>10)),t[a++]=String.fromCharCode(56320+(m&1023))}else{const u=n[r++],f=n[r++];t[a++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return t.join("")},uE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let o=0;o<n.length;o+=3){const u=n[o],f=o+1<n.length,p=f?n[o+1]:0,m=o+2<n.length,g=m?n[o+2]:0,v=u>>2,w=(u&3)<<4|p>>4;let S=(p&15)<<2|g>>6,R=g&63;m||(R=64,f||(S=64)),a.push(r[v],r[w],r[S],r[R])}return a.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(lE(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):oR(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let o=0;o<n.length;){const u=r[n.charAt(o++)],p=o<n.length?r[n.charAt(o)]:0;++o;const g=o<n.length?r[n.charAt(o)]:64;++o;const w=o<n.length?r[n.charAt(o)]:64;if(++o,u==null||p==null||g==null||w==null)throw new lR;const S=u<<2|p>>4;if(a.push(S),g!==64){const R=p<<4&240|g>>2;if(a.push(R),w!==64){const O=g<<6&192|w;a.push(O)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class lR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uR=function(n){const t=lE(n);return uE.encodeByteArray(t,!0)},yh=function(n){return uR(n).replace(/\./g,"")},cR=function(n){try{return uE.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function hR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const fR=()=>hR().__FIREBASE_DEFAULTS__,dR=()=>{if(typeof process>"u"||typeof Lx>"u")return;const n=Lx.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},pR=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&cR(n[1]);return t&&JSON.parse(t)},Hm=()=>{try{return sR()||fR()||dR()||pR()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},mR=n=>Hm()?.emulatorHosts?.[n],gR=n=>{const t=mR(n);if(!t)return;const r=t.lastIndexOf(":");if(r<=0||r+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const a=parseInt(t.substring(r+1),10);return t[0]==="["?[t.substring(1,r-1),a]:[t.substring(0,r),a]},cE=()=>Hm()?.config;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,r)=>{this.resolve=t,this.reject=r})}wrapCallback(t){return(r,a)=>{r?this.reject(r):this.resolve(a),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(r):t(r,a))}}}/**
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
 */function Gm(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function xR(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function vR(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const r={alg:"none",type:"JWT"},a=t||"demo-project",o=n.iat||0,u=n.sub||n.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${a}`,aud:a,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...n};return[yh(JSON.stringify(r)),yh(JSON.stringify(f)),""].join(".")}const Ll={};function _R(){const n={prod:[],emulator:[]};for(const t of Object.keys(Ll))Ll[t]?n.emulator.push(t):n.prod.push(t);return n}function ER(n){let t=document.getElementById(n),r=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),r=!0),{created:r,element:t}}let zx=!1;function bR(n,t){if(typeof window>"u"||typeof document>"u"||!Gm(window.location.host)||Ll[n]===t||Ll[n]||zx)return;Ll[n]=t;function r(S){return`__firebase__banner__${S}`}const a="__firebase__banner",u=_R().prod.length>0;function f(){const S=document.getElementById(a);S&&S.remove()}function p(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function m(S,R){S.setAttribute("width","24"),S.setAttribute("id",R),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function g(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{zx=!0,f()},S}function v(S,R){S.setAttribute("id",R),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function w(){const S=ER(a),R=r("text"),O=document.getElementById(R)||document.createElement("span"),B=r("learnmore"),P=document.getElementById(B)||document.createElement("a"),G=r("preprendIcon"),X=document.getElementById(G)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const it=S.element;p(it),v(P,B);const ht=g();m(X,G),it.append(X,O,P,ht),document.body.appendChild(it)}u?(O.innerText="Preview backend disconnected.",X.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function wR(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function TR(){const n=Hm()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function SR(){return!TR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function AR(){try{return typeof indexedDB=="object"}catch{return!1}}function RR(){return new Promise((n,t)=>{try{let r=!0;const a="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(a);o.onsuccess=()=>{o.result.close(),r||self.indexedDB.deleteDatabase(a),n(!0)},o.onupgradeneeded=()=>{r=!1},o.onerror=()=>{t(o.error?.message||"")}}catch(r){t(r)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR="FirebaseError";class yo extends Error{constructor(t,r,a){super(r),this.code=t,this.customData=a,this.name=CR,Object.setPrototypeOf(this,yo.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hE.prototype.create)}}class hE{constructor(t,r,a){this.service=t,this.serviceName=r,this.errors=a}create(t,...r){const a=r[0]||{},o=`${this.service}/${t}`,u=this.errors[t],f=u?IR(u,a):"Error",p=`${this.serviceName}: ${f} (${o}).`;return new yo(o,p,a)}}function IR(n,t){return n.replace(jR,(r,a)=>{const o=t[a];return o!=null?String(o):`<${a}?>`})}const jR=/\{\$([^}]+)}/g;function xh(n,t){if(n===t)return!0;const r=Object.keys(n),a=Object.keys(t);for(const o of r){if(!a.includes(o))return!1;const u=n[o],f=t[o];if(Bx(u)&&Bx(f)){if(!xh(u,f))return!1}else if(u!==f)return!1}for(const o of a)if(!r.includes(o))return!1;return!0}function Bx(n){return n!==null&&typeof n=="object"}/**
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
 */function rr(n){return n&&n._delegate?n._delegate:n}class Ql{constructor(t,r,a){this.name=t,this.instanceFactory=r,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class DR{constructor(t,r){this.name=t,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const r=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(r)){const a=new yR;if(this.instancesDeferred.set(r,a),this.isInitialized(r)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:r});o&&a.resolve(o)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(t){const r=this.normalizeInstanceIdentifier(t?.identifier),a=t?.optional??!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(a)return null;throw o}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(MR(t))try{this.getOrInitializeService({instanceIdentifier:qa})}catch{}for(const[r,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(r);try{const u=this.getOrInitializeService({instanceIdentifier:o});a.resolve(u)}catch{}}}}clearInstance(t=qa){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...t.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=qa){return this.instances.has(t)}getOptions(t=qa){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:r={}}=t,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:a,options:r});for(const[u,f]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(u);a===p&&f.resolve(o)}return o}onInit(t,r){const a=this.normalizeInstanceIdentifier(r),o=this.onInitCallbacks.get(a)??new Set;o.add(t),this.onInitCallbacks.set(a,o);const u=this.instances.get(a);return u&&t(u,a),()=>{o.delete(t)}}invokeOnInitCallbacks(t,r){const a=this.onInitCallbacks.get(r);if(a)for(const o of a)try{o(t,r)}catch{}}getOrInitializeService({instanceIdentifier:t,options:r={}}){let a=this.instances.get(t);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:NR(t),options:r}),this.instances.set(t,a),this.instancesOptions.set(t,r),this.invokeOnInitCallbacks(a,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,a)}catch{}return a||null}normalizeInstanceIdentifier(t=qa){return this.component?this.component.multipleInstances?t:qa:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function NR(n){return n===qa?void 0:n}function MR(n){return n.instantiationMode==="EAGER"}/**
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
 */class OR{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const r=this.getProvider(t.name);if(r.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);r.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const r=new DR(t,this);return this.providers.set(t,r),r}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $t;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})($t||($t={}));const VR={debug:$t.DEBUG,verbose:$t.VERBOSE,info:$t.INFO,warn:$t.WARN,error:$t.ERROR,silent:$t.SILENT},kR=$t.INFO,UR={[$t.DEBUG]:"log",[$t.VERBOSE]:"log",[$t.INFO]:"info",[$t.WARN]:"warn",[$t.ERROR]:"error"},PR=(n,t,...r)=>{if(t<n.logLevel)return;const a=new Date().toISOString(),o=UR[t];if(o)console[o](`[${a}]  ${n.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class fE{constructor(t){this.name=t,this._logLevel=kR,this._logHandler=PR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in $t))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?VR[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,$t.DEBUG,...t),this._logHandler(this,$t.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,$t.VERBOSE,...t),this._logHandler(this,$t.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,$t.INFO,...t),this._logHandler(this,$t.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,$t.WARN,...t),this._logHandler(this,$t.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,$t.ERROR,...t),this._logHandler(this,$t.ERROR,...t)}}const LR=(n,t)=>t.some(r=>n instanceof r);let $x,Fx;function zR(){return $x||($x=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function BR(){return Fx||(Fx=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dE=new WeakMap,Xp=new WeakMap,pE=new WeakMap,bp=new WeakMap,Ym=new WeakMap;function $R(n){const t=new Promise((r,a)=>{const o=()=>{n.removeEventListener("success",u),n.removeEventListener("error",f)},u=()=>{r(Qr(n.result)),o()},f=()=>{a(n.error),o()};n.addEventListener("success",u),n.addEventListener("error",f)});return t.then(r=>{r instanceof IDBCursor&&dE.set(r,n)}).catch(()=>{}),Ym.set(t,n),t}function FR(n){if(Xp.has(n))return;const t=new Promise((r,a)=>{const o=()=>{n.removeEventListener("complete",u),n.removeEventListener("error",f),n.removeEventListener("abort",f)},u=()=>{r(),o()},f=()=>{a(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",u),n.addEventListener("error",f),n.addEventListener("abort",f)});Xp.set(n,t)}let Wp={get(n,t,r){if(n instanceof IDBTransaction){if(t==="done")return Xp.get(n);if(t==="objectStoreNames")return n.objectStoreNames||pE.get(n);if(t==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return Qr(n[t])},set(n,t,r){return n[t]=r,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function qR(n){Wp=n(Wp)}function KR(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...r){const a=n.call(wp(this),t,...r);return pE.set(a,t.sort?t.sort():[t]),Qr(a)}:BR().includes(n)?function(...t){return n.apply(wp(this),t),Qr(dE.get(this))}:function(...t){return Qr(n.apply(wp(this),t))}}function HR(n){return typeof n=="function"?KR(n):(n instanceof IDBTransaction&&FR(n),LR(n,zR())?new Proxy(n,Wp):n)}function Qr(n){if(n instanceof IDBRequest)return $R(n);if(bp.has(n))return bp.get(n);const t=HR(n);return t!==n&&(bp.set(n,t),Ym.set(t,n)),t}const wp=n=>Ym.get(n);function GR(n,t,{blocked:r,upgrade:a,blocking:o,terminated:u}={}){const f=indexedDB.open(n,t),p=Qr(f);return a&&f.addEventListener("upgradeneeded",m=>{a(Qr(f.result),m.oldVersion,m.newVersion,Qr(f.transaction),m)}),r&&f.addEventListener("blocked",m=>r(m.oldVersion,m.newVersion,m)),p.then(m=>{u&&m.addEventListener("close",()=>u()),o&&m.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),p}const YR=["get","getKey","getAll","getAllKeys","count"],QR=["put","add","delete","clear"],Tp=new Map;function qx(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Tp.get(t))return Tp.get(t);const r=t.replace(/FromIndex$/,""),a=t!==r,o=QR.includes(r);if(!(r in(a?IDBIndex:IDBObjectStore).prototype)||!(o||YR.includes(r)))return;const u=async function(f,...p){const m=this.transaction(f,o?"readwrite":"readonly");let g=m.store;return a&&(g=g.index(p.shift())),(await Promise.all([g[r](...p),o&&m.done]))[0]};return Tp.set(t,u),u}qR(n=>({...n,get:(t,r,a)=>qx(t,r)||n.get(t,r,a),has:(t,r)=>!!qx(t,r)||n.has(t,r)}));/**
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
 */class XR{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(WR(r)){const a=r.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(r=>r).join(" ")}}function WR(n){return n.getComponent()?.type==="VERSION"}const Zp="@firebase/app",Kx="0.14.4";/**
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
 */const ar=new fE("@firebase/app"),ZR="@firebase/app-compat",JR="@firebase/analytics-compat",t6="@firebase/analytics",e6="@firebase/app-check-compat",n6="@firebase/app-check",i6="@firebase/auth",r6="@firebase/auth-compat",a6="@firebase/database",s6="@firebase/data-connect",o6="@firebase/database-compat",l6="@firebase/functions",u6="@firebase/functions-compat",c6="@firebase/installations",h6="@firebase/installations-compat",f6="@firebase/messaging",d6="@firebase/messaging-compat",p6="@firebase/performance",m6="@firebase/performance-compat",g6="@firebase/remote-config",y6="@firebase/remote-config-compat",x6="@firebase/storage",v6="@firebase/storage-compat",_6="@firebase/firestore",E6="@firebase/ai",b6="@firebase/firestore-compat",w6="firebase",T6="12.4.0";/**
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
 */const Jp="[DEFAULT]",S6={[Zp]:"fire-core",[ZR]:"fire-core-compat",[t6]:"fire-analytics",[JR]:"fire-analytics-compat",[n6]:"fire-app-check",[e6]:"fire-app-check-compat",[i6]:"fire-auth",[r6]:"fire-auth-compat",[a6]:"fire-rtdb",[s6]:"fire-data-connect",[o6]:"fire-rtdb-compat",[l6]:"fire-fn",[u6]:"fire-fn-compat",[c6]:"fire-iid",[h6]:"fire-iid-compat",[f6]:"fire-fcm",[d6]:"fire-fcm-compat",[p6]:"fire-perf",[m6]:"fire-perf-compat",[g6]:"fire-rc",[y6]:"fire-rc-compat",[x6]:"fire-gcs",[v6]:"fire-gcs-compat",[_6]:"fire-fst",[b6]:"fire-fst-compat",[E6]:"fire-vertex","fire-js":"fire-js",[w6]:"fire-js-all"};/**
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
 */const Xl=new Map,A6=new Map,tm=new Map;function Hx(n,t){try{n.container.addComponent(t)}catch(r){ar.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,r)}}function vh(n){const t=n.name;if(tm.has(t))return ar.debug(`There were multiple attempts to register component ${t}.`),!1;tm.set(t,n);for(const r of Xl.values())Hx(r,n);for(const r of A6.values())Hx(r,n);return!0}function R6(n,t){const r=n.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),n.container.getProvider(t)}function C6(n){return n==null?!1:n.settings!==void 0}/**
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
 */const I6={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xr=new hE("app","Firebase",I6);/**
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
 */class j6{constructor(t,r,a){this._isDeleted=!1,this._options={...t},this._config={...r},this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new Ql("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Xr.create("app-deleted",{appName:this._name})}}/**
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
 */const D6=T6;function Qm(n,t={}){let r=n;typeof t!="object"&&(t={name:t});const a={name:Jp,automaticDataCollectionEnabled:!0,...t},o=a.name;if(typeof o!="string"||!o)throw Xr.create("bad-app-name",{appName:String(o)});if(r||(r=cE()),!r)throw Xr.create("no-options");const u=Xl.get(o);if(u){if(xh(r,u.options)&&xh(a,u.config))return u;throw Xr.create("duplicate-app",{appName:o})}const f=new OR(o);for(const m of tm.values())f.addComponent(m);const p=new j6(r,a,f);return Xl.set(o,p),p}function N6(n=Jp){const t=Xl.get(n);if(!t&&n===Jp&&cE())return Qm();if(!t)throw Xr.create("no-app",{appName:n});return t}function Gx(){return Array.from(Xl.values())}function Xs(n,t,r){let a=S6[n]??n;r&&(a+=`-${r}`);const o=a.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const f=[`Unable to register library "${a}" with version "${t}":`];o&&f.push(`library name "${a}" contains illegal characters (whitespace or "/")`),o&&u&&f.push("and"),u&&f.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ar.warn(f.join(" "));return}vh(new Ql(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}/**
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
 */const M6="firebase-heartbeat-database",O6=1,Wl="firebase-heartbeat-store";let Sp=null;function mE(){return Sp||(Sp=GR(M6,O6,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Wl)}catch(r){console.warn(r)}}}}).catch(n=>{throw Xr.create("idb-open",{originalErrorMessage:n.message})})),Sp}async function V6(n){try{const r=(await mE()).transaction(Wl),a=await r.objectStore(Wl).get(gE(n));return await r.done,a}catch(t){if(t instanceof yo)ar.warn(t.message);else{const r=Xr.create("idb-get",{originalErrorMessage:t?.message});ar.warn(r.message)}}}async function Yx(n,t){try{const a=(await mE()).transaction(Wl,"readwrite");await a.objectStore(Wl).put(t,gE(n)),await a.done}catch(r){if(r instanceof yo)ar.warn(r.message);else{const a=Xr.create("idb-set",{originalErrorMessage:r?.message});ar.warn(a.message)}}}function gE(n){return`${n.name}!${n.options.appId}`}/**
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
 */const k6=1024,U6=30;class P6{constructor(t){this.container=t,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new z6(r),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Qx();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(o=>o.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:r}),this._heartbeatsCache.heartbeats.length>U6){const o=B6(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){ar.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Qx(),{heartbeatsToSend:r,unsentEntries:a}=L6(this._heartbeatsCache.heartbeats),o=yh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return ar.warn(t),""}}}function Qx(){return new Date().toISOString().substring(0,10)}function L6(n,t=k6){const r=[];let a=n.slice();for(const o of n){const u=r.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),Xx(r)>t){u.dates.pop();break}}else if(r.push({agent:o.agent,dates:[o.date]}),Xx(r)>t){r.pop();break}a=a.slice(1)}return{heartbeatsToSend:r,unsentEntries:a}}class z6{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return AR()?RR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await V6(this.app);return r?.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const a=await this.read();return Yx(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const a=await this.read();return Yx(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...t.heartbeats]})}else return}}function Xx(n){return yh(JSON.stringify({version:2,heartbeats:n})).length}function B6(n){if(n.length===0)return-1;let t=0,r=n[0].date;for(let a=1;a<n.length;a++)n[a].date<r&&(r=n[a].date,t=a);return t}/**
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
 */function $6(n){vh(new Ql("platform-logger",t=>new XR(t),"PRIVATE")),vh(new Ql("heartbeat",t=>new P6(t),"PRIVATE")),Xs(Zp,Kx,n),Xs(Zp,Kx,"esm2020"),Xs("fire-js","")}$6("");var F6="firebase",q6="12.4.0";/**
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
 */Xs(F6,q6,"app");var Wx=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wr,yE;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(j,C){function I(){}I.prototype=C.prototype,j.F=C.prototype,j.prototype=new I,j.prototype.constructor=j,j.D=function(M,k,z){for(var N=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)N[ue-2]=arguments[ue];return C.prototype[k].apply(M,N)}}function r(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(a,r),a.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(j,C,I){I||(I=0);const M=Array(16);if(typeof C=="string")for(var k=0;k<16;++k)M[k]=C.charCodeAt(I++)|C.charCodeAt(I++)<<8|C.charCodeAt(I++)<<16|C.charCodeAt(I++)<<24;else for(k=0;k<16;++k)M[k]=C[I++]|C[I++]<<8|C[I++]<<16|C[I++]<<24;C=j.g[0],I=j.g[1],k=j.g[2];let z=j.g[3],N;N=C+(z^I&(k^z))+M[0]+3614090360&4294967295,C=I+(N<<7&4294967295|N>>>25),N=z+(k^C&(I^k))+M[1]+3905402710&4294967295,z=C+(N<<12&4294967295|N>>>20),N=k+(I^z&(C^I))+M[2]+606105819&4294967295,k=z+(N<<17&4294967295|N>>>15),N=I+(C^k&(z^C))+M[3]+3250441966&4294967295,I=k+(N<<22&4294967295|N>>>10),N=C+(z^I&(k^z))+M[4]+4118548399&4294967295,C=I+(N<<7&4294967295|N>>>25),N=z+(k^C&(I^k))+M[5]+1200080426&4294967295,z=C+(N<<12&4294967295|N>>>20),N=k+(I^z&(C^I))+M[6]+2821735955&4294967295,k=z+(N<<17&4294967295|N>>>15),N=I+(C^k&(z^C))+M[7]+4249261313&4294967295,I=k+(N<<22&4294967295|N>>>10),N=C+(z^I&(k^z))+M[8]+1770035416&4294967295,C=I+(N<<7&4294967295|N>>>25),N=z+(k^C&(I^k))+M[9]+2336552879&4294967295,z=C+(N<<12&4294967295|N>>>20),N=k+(I^z&(C^I))+M[10]+4294925233&4294967295,k=z+(N<<17&4294967295|N>>>15),N=I+(C^k&(z^C))+M[11]+2304563134&4294967295,I=k+(N<<22&4294967295|N>>>10),N=C+(z^I&(k^z))+M[12]+1804603682&4294967295,C=I+(N<<7&4294967295|N>>>25),N=z+(k^C&(I^k))+M[13]+4254626195&4294967295,z=C+(N<<12&4294967295|N>>>20),N=k+(I^z&(C^I))+M[14]+2792965006&4294967295,k=z+(N<<17&4294967295|N>>>15),N=I+(C^k&(z^C))+M[15]+1236535329&4294967295,I=k+(N<<22&4294967295|N>>>10),N=C+(k^z&(I^k))+M[1]+4129170786&4294967295,C=I+(N<<5&4294967295|N>>>27),N=z+(I^k&(C^I))+M[6]+3225465664&4294967295,z=C+(N<<9&4294967295|N>>>23),N=k+(C^I&(z^C))+M[11]+643717713&4294967295,k=z+(N<<14&4294967295|N>>>18),N=I+(z^C&(k^z))+M[0]+3921069994&4294967295,I=k+(N<<20&4294967295|N>>>12),N=C+(k^z&(I^k))+M[5]+3593408605&4294967295,C=I+(N<<5&4294967295|N>>>27),N=z+(I^k&(C^I))+M[10]+38016083&4294967295,z=C+(N<<9&4294967295|N>>>23),N=k+(C^I&(z^C))+M[15]+3634488961&4294967295,k=z+(N<<14&4294967295|N>>>18),N=I+(z^C&(k^z))+M[4]+3889429448&4294967295,I=k+(N<<20&4294967295|N>>>12),N=C+(k^z&(I^k))+M[9]+568446438&4294967295,C=I+(N<<5&4294967295|N>>>27),N=z+(I^k&(C^I))+M[14]+3275163606&4294967295,z=C+(N<<9&4294967295|N>>>23),N=k+(C^I&(z^C))+M[3]+4107603335&4294967295,k=z+(N<<14&4294967295|N>>>18),N=I+(z^C&(k^z))+M[8]+1163531501&4294967295,I=k+(N<<20&4294967295|N>>>12),N=C+(k^z&(I^k))+M[13]+2850285829&4294967295,C=I+(N<<5&4294967295|N>>>27),N=z+(I^k&(C^I))+M[2]+4243563512&4294967295,z=C+(N<<9&4294967295|N>>>23),N=k+(C^I&(z^C))+M[7]+1735328473&4294967295,k=z+(N<<14&4294967295|N>>>18),N=I+(z^C&(k^z))+M[12]+2368359562&4294967295,I=k+(N<<20&4294967295|N>>>12),N=C+(I^k^z)+M[5]+4294588738&4294967295,C=I+(N<<4&4294967295|N>>>28),N=z+(C^I^k)+M[8]+2272392833&4294967295,z=C+(N<<11&4294967295|N>>>21),N=k+(z^C^I)+M[11]+1839030562&4294967295,k=z+(N<<16&4294967295|N>>>16),N=I+(k^z^C)+M[14]+4259657740&4294967295,I=k+(N<<23&4294967295|N>>>9),N=C+(I^k^z)+M[1]+2763975236&4294967295,C=I+(N<<4&4294967295|N>>>28),N=z+(C^I^k)+M[4]+1272893353&4294967295,z=C+(N<<11&4294967295|N>>>21),N=k+(z^C^I)+M[7]+4139469664&4294967295,k=z+(N<<16&4294967295|N>>>16),N=I+(k^z^C)+M[10]+3200236656&4294967295,I=k+(N<<23&4294967295|N>>>9),N=C+(I^k^z)+M[13]+681279174&4294967295,C=I+(N<<4&4294967295|N>>>28),N=z+(C^I^k)+M[0]+3936430074&4294967295,z=C+(N<<11&4294967295|N>>>21),N=k+(z^C^I)+M[3]+3572445317&4294967295,k=z+(N<<16&4294967295|N>>>16),N=I+(k^z^C)+M[6]+76029189&4294967295,I=k+(N<<23&4294967295|N>>>9),N=C+(I^k^z)+M[9]+3654602809&4294967295,C=I+(N<<4&4294967295|N>>>28),N=z+(C^I^k)+M[12]+3873151461&4294967295,z=C+(N<<11&4294967295|N>>>21),N=k+(z^C^I)+M[15]+530742520&4294967295,k=z+(N<<16&4294967295|N>>>16),N=I+(k^z^C)+M[2]+3299628645&4294967295,I=k+(N<<23&4294967295|N>>>9),N=C+(k^(I|~z))+M[0]+4096336452&4294967295,C=I+(N<<6&4294967295|N>>>26),N=z+(I^(C|~k))+M[7]+1126891415&4294967295,z=C+(N<<10&4294967295|N>>>22),N=k+(C^(z|~I))+M[14]+2878612391&4294967295,k=z+(N<<15&4294967295|N>>>17),N=I+(z^(k|~C))+M[5]+4237533241&4294967295,I=k+(N<<21&4294967295|N>>>11),N=C+(k^(I|~z))+M[12]+1700485571&4294967295,C=I+(N<<6&4294967295|N>>>26),N=z+(I^(C|~k))+M[3]+2399980690&4294967295,z=C+(N<<10&4294967295|N>>>22),N=k+(C^(z|~I))+M[10]+4293915773&4294967295,k=z+(N<<15&4294967295|N>>>17),N=I+(z^(k|~C))+M[1]+2240044497&4294967295,I=k+(N<<21&4294967295|N>>>11),N=C+(k^(I|~z))+M[8]+1873313359&4294967295,C=I+(N<<6&4294967295|N>>>26),N=z+(I^(C|~k))+M[15]+4264355552&4294967295,z=C+(N<<10&4294967295|N>>>22),N=k+(C^(z|~I))+M[6]+2734768916&4294967295,k=z+(N<<15&4294967295|N>>>17),N=I+(z^(k|~C))+M[13]+1309151649&4294967295,I=k+(N<<21&4294967295|N>>>11),N=C+(k^(I|~z))+M[4]+4149444226&4294967295,C=I+(N<<6&4294967295|N>>>26),N=z+(I^(C|~k))+M[11]+3174756917&4294967295,z=C+(N<<10&4294967295|N>>>22),N=k+(C^(z|~I))+M[2]+718787259&4294967295,k=z+(N<<15&4294967295|N>>>17),N=I+(z^(k|~C))+M[9]+3951481745&4294967295,j.g[0]=j.g[0]+C&4294967295,j.g[1]=j.g[1]+(k+(N<<21&4294967295|N>>>11))&4294967295,j.g[2]=j.g[2]+k&4294967295,j.g[3]=j.g[3]+z&4294967295}a.prototype.v=function(j,C){C===void 0&&(C=j.length);const I=C-this.blockSize,M=this.C;let k=this.h,z=0;for(;z<C;){if(k==0)for(;z<=I;)o(this,j,z),z+=this.blockSize;if(typeof j=="string"){for(;z<C;)if(M[k++]=j.charCodeAt(z++),k==this.blockSize){o(this,M),k=0;break}}else for(;z<C;)if(M[k++]=j[z++],k==this.blockSize){o(this,M),k=0;break}}this.h=k,this.o+=C},a.prototype.A=function(){var j=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);j[0]=128;for(var C=1;C<j.length-8;++C)j[C]=0;C=this.o*8;for(var I=j.length-8;I<j.length;++I)j[I]=C&255,C/=256;for(this.v(j),j=Array(16),C=0,I=0;I<4;++I)for(let M=0;M<32;M+=8)j[C++]=this.g[I]>>>M&255;return j};function u(j,C){var I=p;return Object.prototype.hasOwnProperty.call(I,j)?I[j]:I[j]=C(j)}function f(j,C){this.h=C;const I=[];let M=!0;for(let k=j.length-1;k>=0;k--){const z=j[k]|0;M&&z==C||(I[k]=z,M=!1)}this.g=I}var p={};function m(j){return-128<=j&&j<128?u(j,function(C){return new f([C|0],C<0?-1:0)}):new f([j|0],j<0?-1:0)}function g(j){if(isNaN(j)||!isFinite(j))return w;if(j<0)return P(g(-j));const C=[];let I=1;for(let M=0;j>=I;M++)C[M]=j/I|0,I*=4294967296;return new f(C,0)}function v(j,C){if(j.length==0)throw Error("number format error: empty string");if(C=C||10,C<2||36<C)throw Error("radix out of range: "+C);if(j.charAt(0)=="-")return P(v(j.substring(1),C));if(j.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=g(Math.pow(C,8));let M=w;for(let z=0;z<j.length;z+=8){var k=Math.min(8,j.length-z);const N=parseInt(j.substring(z,z+k),C);k<8?(k=g(Math.pow(C,k)),M=M.j(k).add(g(N))):(M=M.j(I),M=M.add(g(N)))}return M}var w=m(0),S=m(1),R=m(16777216);n=f.prototype,n.m=function(){if(B(this))return-P(this).m();let j=0,C=1;for(let I=0;I<this.g.length;I++){const M=this.i(I);j+=(M>=0?M:4294967296+M)*C,C*=4294967296}return j},n.toString=function(j){if(j=j||10,j<2||36<j)throw Error("radix out of range: "+j);if(O(this))return"0";if(B(this))return"-"+P(this).toString(j);const C=g(Math.pow(j,6));var I=this;let M="";for(;;){const k=ht(I,C).g;I=G(I,k.j(C));let z=((I.g.length>0?I.g[0]:I.h)>>>0).toString(j);if(I=k,O(I))return z+M;for(;z.length<6;)z="0"+z;M=z+M}},n.i=function(j){return j<0?0:j<this.g.length?this.g[j]:this.h};function O(j){if(j.h!=0)return!1;for(let C=0;C<j.g.length;C++)if(j.g[C]!=0)return!1;return!0}function B(j){return j.h==-1}n.l=function(j){return j=G(this,j),B(j)?-1:O(j)?0:1};function P(j){const C=j.g.length,I=[];for(let M=0;M<C;M++)I[M]=~j.g[M];return new f(I,~j.h).add(S)}n.abs=function(){return B(this)?P(this):this},n.add=function(j){const C=Math.max(this.g.length,j.g.length),I=[];let M=0;for(let k=0;k<=C;k++){let z=M+(this.i(k)&65535)+(j.i(k)&65535),N=(z>>>16)+(this.i(k)>>>16)+(j.i(k)>>>16);M=N>>>16,z&=65535,N&=65535,I[k]=N<<16|z}return new f(I,I[I.length-1]&-2147483648?-1:0)};function G(j,C){return j.add(P(C))}n.j=function(j){if(O(this)||O(j))return w;if(B(this))return B(j)?P(this).j(P(j)):P(P(this).j(j));if(B(j))return P(this.j(P(j)));if(this.l(R)<0&&j.l(R)<0)return g(this.m()*j.m());const C=this.g.length+j.g.length,I=[];for(var M=0;M<2*C;M++)I[M]=0;for(M=0;M<this.g.length;M++)for(let k=0;k<j.g.length;k++){const z=this.i(M)>>>16,N=this.i(M)&65535,ue=j.i(k)>>>16,ne=j.i(k)&65535;I[2*M+2*k]+=N*ne,X(I,2*M+2*k),I[2*M+2*k+1]+=z*ne,X(I,2*M+2*k+1),I[2*M+2*k+1]+=N*ue,X(I,2*M+2*k+1),I[2*M+2*k+2]+=z*ue,X(I,2*M+2*k+2)}for(j=0;j<C;j++)I[j]=I[2*j+1]<<16|I[2*j];for(j=C;j<2*C;j++)I[j]=0;return new f(I,0)};function X(j,C){for(;(j[C]&65535)!=j[C];)j[C+1]+=j[C]>>>16,j[C]&=65535,C++}function it(j,C){this.g=j,this.h=C}function ht(j,C){if(O(C))throw Error("division by zero");if(O(j))return new it(w,w);if(B(j))return C=ht(P(j),C),new it(P(C.g),P(C.h));if(B(C))return C=ht(j,P(C)),new it(P(C.g),C.h);if(j.g.length>30){if(B(j)||B(C))throw Error("slowDivide_ only works with positive integers.");for(var I=S,M=C;M.l(j)<=0;)I=J(I),M=J(M);var k=dt(I,1),z=dt(M,1);for(M=dt(M,2),I=dt(I,2);!O(M);){var N=z.add(M);N.l(j)<=0&&(k=k.add(I),z=N),M=dt(M,1),I=dt(I,1)}return C=G(j,k.j(C)),new it(k,C)}for(k=w;j.l(C)>=0;){for(I=Math.max(1,Math.floor(j.m()/C.m())),M=Math.ceil(Math.log(I)/Math.LN2),M=M<=48?1:Math.pow(2,M-48),z=g(I),N=z.j(C);B(N)||N.l(j)>0;)I-=M,z=g(I),N=z.j(C);O(z)&&(z=S),k=k.add(z),j=G(j,N)}return new it(k,j)}n.B=function(j){return ht(this,j).h},n.and=function(j){const C=Math.max(this.g.length,j.g.length),I=[];for(let M=0;M<C;M++)I[M]=this.i(M)&j.i(M);return new f(I,this.h&j.h)},n.or=function(j){const C=Math.max(this.g.length,j.g.length),I=[];for(let M=0;M<C;M++)I[M]=this.i(M)|j.i(M);return new f(I,this.h|j.h)},n.xor=function(j){const C=Math.max(this.g.length,j.g.length),I=[];for(let M=0;M<C;M++)I[M]=this.i(M)^j.i(M);return new f(I,this.h^j.h)};function J(j){const C=j.g.length+1,I=[];for(let M=0;M<C;M++)I[M]=j.i(M)<<1|j.i(M-1)>>>31;return new f(I,j.h)}function dt(j,C){const I=C>>5;C%=32;const M=j.g.length-I,k=[];for(let z=0;z<M;z++)k[z]=C>0?j.i(z+I)>>>C|j.i(z+I+1)<<32-C:j.i(z+I);return new f(k,j.h)}a.prototype.digest=a.prototype.A,a.prototype.reset=a.prototype.u,a.prototype.update=a.prototype.v,yE=a,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.B,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=g,f.fromString=v,Wr=f}).apply(typeof Wx<"u"?Wx:typeof self<"u"?self:typeof window<"u"?window:{});var Fc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xE,Ml,vE,rh,em,_E,EE,bE;(function(){var n,t=Object.defineProperty;function r(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fc=="object"&&Fc];for(var y=0;y<c.length;++y){var _=c[y];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var a=r(this);function o(c,y){if(y)t:{var _=a;c=c.split(".");for(var T=0;T<c.length-1;T++){var F=c[T];if(!(F in _))break t;_=_[F]}c=c[c.length-1],T=_[c],y=y(T),y!=T&&y!=null&&t(_,c,{configurable:!0,writable:!0,value:y})}}o("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(c){return c||function(y){var _=[],T;for(T in y)Object.prototype.hasOwnProperty.call(y,T)&&_.push([T,y[T]]);return _}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},f=this||self;function p(c){var y=typeof c;return y=="object"&&c!=null||y=="function"}function m(c,y,_){return c.call.apply(c.bind,arguments)}function g(c,y,_){return g=m,g.apply(null,arguments)}function v(c,y){var _=Array.prototype.slice.call(arguments,1);return function(){var T=_.slice();return T.push.apply(T,arguments),c.apply(this,T)}}function w(c,y){function _(){}_.prototype=y.prototype,c.Z=y.prototype,c.prototype=new _,c.prototype.constructor=c,c.Ob=function(T,F,Q){for(var ot=Array(arguments.length-2),At=2;At<arguments.length;At++)ot[At-2]=arguments[At];return y.prototype[F].apply(T,ot)}}var S=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function R(c){const y=c.length;if(y>0){const _=Array(y);for(let T=0;T<y;T++)_[T]=c[T];return _}return[]}function O(c,y){for(let T=1;T<arguments.length;T++){const F=arguments[T];var _=typeof F;if(_=_!="object"?_:F?Array.isArray(F)?"array":_:"null",_=="array"||_=="object"&&typeof F.length=="number"){_=c.length||0;const Q=F.length||0;c.length=_+Q;for(let ot=0;ot<Q;ot++)c[_+ot]=F[ot]}else c.push(F)}}class B{constructor(y,_){this.i=y,this.j=_,this.h=0,this.g=null}get(){let y;return this.h>0?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function P(c){f.setTimeout(()=>{throw c},0)}function G(){var c=j;let y=null;return c.g&&(y=c.g,c.g=c.g.next,c.g||(c.h=null),y.next=null),y}class X{constructor(){this.h=this.g=null}add(y,_){const T=it.get();T.set(y,_),this.h?this.h.next=T:this.g=T,this.h=T}}var it=new B(()=>new ht,c=>c.reset());class ht{constructor(){this.next=this.g=this.h=null}set(y,_){this.h=y,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let J,dt=!1,j=new X,C=()=>{const c=Promise.resolve(void 0);J=()=>{c.then(I)}};function I(){for(var c;c=G();){try{c.h.call(c.g)}catch(_){P(_)}var y=it;y.j(c),y.h<100&&(y.h++,c.next=y.g,y.g=c)}dt=!1}function M(){this.u=this.u,this.C=this.C}M.prototype.u=!1,M.prototype.dispose=function(){this.u||(this.u=!0,this.N())},M.prototype[Symbol.dispose]=function(){this.dispose()},M.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function k(c,y){this.type=c,this.g=this.target=y,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var z=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var c=!1,y=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};f.addEventListener("test",_,y),f.removeEventListener("test",_,y)}catch{}return c})();function N(c){return/^[\s\xa0]*$/.test(c)}function ue(c,y){k.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,y)}w(ue,k),ue.prototype.init=function(c,y){const _=this.type=c.type,T=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=y,y=c.relatedTarget,y||(_=="mouseover"?y=c.fromElement:_=="mouseout"&&(y=c.toElement)),this.relatedTarget=y,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&ue.Z.h.call(this)},ue.prototype.h=function(){ue.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var ne="closure_listenable_"+(Math.random()*1e6|0),Z=0;function ct(c,y,_,T,F){this.listener=c,this.proxy=null,this.src=y,this.type=_,this.capture=!!T,this.ha=F,this.key=++Z,this.da=this.fa=!1}function yt(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Ct(c,y,_){for(const T in c)y.call(_,c[T],T,c)}function V(c,y){for(const _ in c)y.call(void 0,c[_],_,c)}function at(c){const y={};for(const _ in c)y[_]=c[_];return y}const lt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ut(c,y){let _,T;for(let F=1;F<arguments.length;F++){T=arguments[F];for(_ in T)c[_]=T[_];for(let Q=0;Q<lt.length;Q++)_=lt[Q],Object.prototype.hasOwnProperty.call(T,_)&&(c[_]=T[_])}}function gt(c){this.src=c,this.g={},this.h=0}gt.prototype.add=function(c,y,_,T,F){const Q=c.toString();c=this.g[Q],c||(c=this.g[Q]=[],this.h++);const ot=_t(c,y,T,F);return ot>-1?(y=c[ot],_||(y.fa=!1)):(y=new ct(y,this.src,Q,!!T,F),y.fa=_,c.push(y)),y};function It(c,y){const _=y.type;if(_ in c.g){var T=c.g[_],F=Array.prototype.indexOf.call(T,y,void 0),Q;(Q=F>=0)&&Array.prototype.splice.call(T,F,1),Q&&(yt(y),c.g[_].length==0&&(delete c.g[_],c.h--))}}function _t(c,y,_,T){for(let F=0;F<c.length;++F){const Q=c[F];if(!Q.da&&Q.listener==y&&Q.capture==!!_&&Q.ha==T)return F}return-1}var ge="closure_lm_"+(Math.random()*1e6|0),Lt={};function Me(c,y,_,T,F){if(Array.isArray(y)){for(let Q=0;Q<y.length;Q++)Me(c,y[Q],_,T,F);return null}return _=xu(_),c&&c[ne]?c.J(y,_,p(T)?!!T.capture:!1,F):ji(c,y,_,!1,T,F)}function ji(c,y,_,T,F,Q){if(!y)throw Error("Invalid event type");const ot=p(F)?!!F.capture:!!F;let At=wo(c);if(At||(c[ge]=At=new gt(c)),_=At.add(y,_,T,ot,Q),_.proxy)return _;if(T=Kn(),_.proxy=T,T.src=c,T.listener=_,c.addEventListener)z||(F=ot),F===void 0&&(F=!1),c.addEventListener(y.toString(),T,F);else if(c.attachEvent)c.attachEvent(es(y.toString()),T);else if(c.addListener&&c.removeListener)c.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Kn(){function c(_){return y.call(c.src,c.listener,_)}const y=af;return c}function on(c,y,_,T,F){if(Array.isArray(y))for(var Q=0;Q<y.length;Q++)on(c,y[Q],_,T,F);else T=p(T)?!!T.capture:!!T,_=xu(_),c&&c[ne]?(c=c.i,Q=String(y).toString(),Q in c.g&&(y=c.g[Q],_=_t(y,_,T,F),_>-1&&(yt(y[_]),Array.prototype.splice.call(y,_,1),y.length==0&&(delete c.g[Q],c.h--)))):c&&(c=wo(c))&&(y=c.g[y.toString()],c=-1,y&&(c=_t(y,_,T,F)),(_=c>-1?y[c]:null)&&oa(_))}function oa(c){if(typeof c!="number"&&c&&!c.da){var y=c.src;if(y&&y[ne])It(y.i,c);else{var _=c.type,T=c.proxy;y.removeEventListener?y.removeEventListener(_,T,c.capture):y.detachEvent?y.detachEvent(es(_),T):y.addListener&&y.removeListener&&y.removeListener(T),(_=wo(y))?(It(_,c),_.h==0&&(_.src=null,y[ge]=null)):yt(c)}}}function es(c){return c in Lt?Lt[c]:Lt[c]="on"+c}function af(c,y){if(c.da)c=!0;else{y=new ue(y,this);const _=c.listener,T=c.ha||c.src;c.fa&&oa(c),c=_.call(T,y)}return c}function wo(c){return c=c[ge],c instanceof gt?c:null}var dn="__closure_events_fn_"+(Math.random()*1e9>>>0);function xu(c){return typeof c=="function"?c:(c[dn]||(c[dn]=function(y){return c.handleEvent(y)}),c[dn])}function Oe(){M.call(this),this.i=new gt(this),this.M=this,this.G=null}w(Oe,M),Oe.prototype[ne]=!0,Oe.prototype.removeEventListener=function(c,y,_,T){on(this,c,y,_,T)};function Le(c,y){var _,T=c.G;if(T)for(_=[];T;T=T.G)_.push(T);if(c=c.M,T=y.type||y,typeof y=="string")y=new k(y,c);else if(y instanceof k)y.target=y.target||c;else{var F=y;y=new k(T,c),ut(y,F)}F=!0;let Q,ot;if(_)for(ot=_.length-1;ot>=0;ot--)Q=y.g=_[ot],F=Di(Q,T,!0,y)&&F;if(Q=y.g=c,F=Di(Q,T,!0,y)&&F,F=Di(Q,T,!1,y)&&F,_)for(ot=0;ot<_.length;ot++)Q=y.g=_[ot],F=Di(Q,T,!1,y)&&F}Oe.prototype.N=function(){if(Oe.Z.N.call(this),this.i){var c=this.i;for(const y in c.g){const _=c.g[y];for(let T=0;T<_.length;T++)yt(_[T]);delete c.g[y],c.h--}}this.G=null},Oe.prototype.J=function(c,y,_,T){return this.i.add(String(c),y,!1,_,T)},Oe.prototype.K=function(c,y,_,T){return this.i.add(String(c),y,!0,_,T)};function Di(c,y,_,T){if(y=c.i.g[String(y)],!y)return!0;y=y.concat();let F=!0;for(let Q=0;Q<y.length;++Q){const ot=y[Q];if(ot&&!ot.da&&ot.capture==_){const At=ot.listener,se=ot.ha||ot.src;ot.fa&&It(c.i,ot),F=At.call(se,T)!==!1&&F}}return F&&!T.defaultPrevented}function sf(c,y){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=g(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(y)>2147483647?-1:f.setTimeout(c,y||0)}function To(c){c.g=sf(()=>{c.g=null,c.i&&(c.i=!1,To(c))},c.l);const y=c.h;c.h=null,c.m.apply(null,y)}class of extends M{constructor(y,_){super(),this.m=y,this.l=_,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:To(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function la(c){M.call(this),this.h=c,this.g={}}w(la,M);var ur=[];function Je(c){Ct(c.g,function(y,_){this.g.hasOwnProperty(_)&&oa(y)},c),c.g={}}la.prototype.N=function(){la.Z.N.call(this),Je(this)},la.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var jn=f.JSON.stringify,ln=f.JSON.parse,lf=class{stringify(c){return f.JSON.stringify(c,void 0)}parse(c){return f.JSON.parse(c,void 0)}};function vu(){}function _u(){}var si={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function cr(){k.call(this,"d")}w(cr,k);function Hn(){k.call(this,"c")}w(Hn,k);var Dn={},hr=null;function ns(){return hr=hr||new Oe}Dn.Ia="serverreachability";function So(c){k.call(this,Dn.Ia,c)}w(So,k);function fr(c){const y=ns();Le(y,new So(y))}Dn.STAT_EVENT="statevent";function is(c,y){k.call(this,Dn.STAT_EVENT,c),this.stat=y}w(is,k);function ve(c){const y=ns();Le(y,new is(y,c))}Dn.Ja="timingevent";function Eu(c,y){k.call(this,Dn.Ja,c),this.size=y}w(Eu,k);function dr(c,y){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){c()},y)}function pr(){this.g=!0}pr.prototype.ua=function(){this.g=!1};function Ao(c,y,_,T,F,Q){c.info(function(){if(c.g)if(Q){var ot="",At=Q.split("&");for(let Yt=0;Yt<At.length;Yt++){var se=At[Yt].split("=");if(se.length>1){const be=se[0];se=se[1];const _n=be.split("_");ot=_n.length>=2&&_n[1]=="type"?ot+(be+"="+se+"&"):ot+(be+"=redacted&")}}}else ot=null;else ot=Q;return"XMLHTTP REQ ("+T+") [attempt "+F+"]: "+y+`
`+_+`
`+ot})}function Ro(c,y,_,T,F,Q,ot){c.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+F+"]: "+y+`
`+_+`
`+Q+" "+ot})}function Ni(c,y,_,T){c.info(function(){return"XMLHTTP TEXT ("+y+"): "+oi(c,_)+(T?" "+T:"")})}function uf(c,y){c.info(function(){return"TIMEOUT: "+y})}pr.prototype.info=function(){};function oi(c,y){if(!c.g)return y;if(!y)return null;try{const Q=JSON.parse(y);if(Q){for(c=0;c<Q.length;c++)if(Array.isArray(Q[c])){var _=Q[c];if(!(_.length<2)){var T=_[1];if(Array.isArray(T)&&!(T.length<1)){var F=T[0];if(F!="noop"&&F!="stop"&&F!="close")for(let ot=1;ot<T.length;ot++)T[ot]=""}}}}return jn(Q)}catch{return y}}var _e={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},He={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Mi;function ua(){}w(ua,vu),ua.prototype.g=function(){return new XMLHttpRequest},Mi=new ua;function ca(c){return encodeURIComponent(String(c))}function cf(c){var y=1;c=c.split(":");const _=[];for(;y>0&&c.length;)_.push(c.shift()),y--;return c.length&&_.push(c.join(":")),_}function Gn(c,y,_,T){this.j=c,this.i=y,this.l=_,this.S=T||1,this.V=new la(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new mr}function mr(){this.i=null,this.g="",this.h=!1}var rs={},li={};function ui(c,y,_){c.M=1,c.A=Vi(fe(y)),c.u=_,c.R=!0,gr(c,null)}function gr(c,y){c.F=Date.now(),ha(c),c.B=fe(c.A);var _=c.B,T=c.S;Array.isArray(T)||(T=[String(T)]),Su(_.i,"t",T),c.C=0,_=c.j.L,c.h=new mr,c.g=ps(c.j,_?y:null,!c.u),c.P>0&&(c.O=new of(g(c.Y,c,c.g),c.P)),y=c.V,_=c.g,T=c.ba;var F="readystatechange";Array.isArray(F)||(F&&(ur[0]=F.toString()),F=ur);for(let Q=0;Q<F.length;Q++){const ot=Me(_,F[Q],T||y.handleEvent,!1,y.h||y);if(!ot)break;y.g[ot.key]=ot}y=c.J?at(c.J):{},c.u?(c.v||(c.v="POST"),y["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,y)):(c.v="GET",c.g.ea(c.B,c.v,null,y)),fr(),Ao(c.i,c.v,c.B,c.l,c.S,c.u)}Gn.prototype.ba=function(c){c=c.target;const y=this.O;y&&tn(c)==3?y.j():this.Y(c)},Gn.prototype.Y=function(c){try{if(c==this.g)t:{const At=tn(this.g),se=this.g.ya(),Yt=this.g.ca();if(!(At<3)&&(At!=3||this.g&&(this.h.h||this.g.la()||ba(this.g)))){this.K||At!=4||se==7||(se==8||Yt<=0?fr(3):fr(2)),hi(this);var y=this.g.ca();this.X=y;var _=yr(this);if(this.o=y==200,Ro(this.i,this.v,this.B,this.l,this.S,At,y),this.o){if(this.U&&!this.L){e:{if(this.g){var T,F=this.g;if((T=F.g?F.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(T)){var Q=T;break e}}Q=null}if(c=Q)Ni(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,as(this,c);else{this.o=!1,this.m=3,ve(12),fi(this),fa(this);break t}}if(this.R){c=!0;let be;for(;!this.K&&this.C<_.length;)if(be=bu(this,_),be==li){At==4&&(this.m=4,ve(14),c=!1),Ni(this.i,this.l,null,"[Incomplete Response]");break}else if(be==rs){this.m=4,ve(15),Ni(this.i,this.l,_,"[Invalid Chunk]"),c=!1;break}else Ni(this.i,this.l,be,null),as(this,be);if(Ee(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),At!=4||_.length!=0||this.h.h||(this.m=1,ve(16),c=!1),this.o=this.o&&c,!c)Ni(this.i,this.l,_,"[Invalid Chunked Response]"),fi(this),fa(this);else if(_.length>0&&!this.W){this.W=!0;var ot=this.j;ot.g==this&&ot.aa&&!ot.P&&(ot.j.info("Great, no buffering proxy detected. Bytes received: "+_.length),Uo(ot),ot.P=!0,ve(11))}}else Ni(this.i,this.l,_,null),as(this,_);At==4&&fi(this),this.o&&!this.K&&(At==4?Po(this.j,this):(this.o=!1,ha(this)))}else wa(this.g),y==400&&_.indexOf("Unknown SID")>0?(this.m=3,ve(12)):(this.m=0,ve(13)),fi(this),fa(this)}}}catch{}finally{}};function yr(c){if(!Ee(c))return c.g.la();const y=ba(c.g);if(y==="")return"";let _="";const T=y.length,F=tn(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return fi(c),fa(c),"";c.h.i=new f.TextDecoder}for(let Q=0;Q<T;Q++)c.h.h=!0,_+=c.h.i.decode(y[Q],{stream:!(F&&Q==T-1)});return y.length=0,c.h.g+=_,c.C=0,c.h.g}function Ee(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function bu(c,y){var _=c.C,T=y.indexOf(`
`,_);return T==-1?li:(_=Number(y.substring(_,T)),isNaN(_)?rs:(T+=1,T+_>y.length?li:(y=y.slice(T,T+_),c.C=T+_,y)))}Gn.prototype.cancel=function(){this.K=!0,fi(this)};function ha(c){c.T=Date.now()+c.H,ci(c,c.H)}function ci(c,y){if(c.D!=null)throw Error("WatchDog timer not null");c.D=dr(g(c.aa,c),y)}function hi(c){c.D&&(f.clearTimeout(c.D),c.D=null)}Gn.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(uf(this.i,this.B),this.M!=2&&(fr(),ve(17)),fi(this),this.m=2,fa(this)):ci(this,this.T-c)};function fa(c){c.j.I==0||c.K||Po(c.j,c)}function fi(c){hi(c);var y=c.O;y&&typeof y.dispose=="function"&&y.dispose(),c.O=null,Je(c.V),c.g&&(y=c.g,c.g=null,y.abort(),y.dispose())}function as(c,y){try{var _=c.j;if(_.I!=0&&(_.g==c||ma(_.h,c))){if(!c.L&&ma(_.h,c)&&_.I==3){try{var T=_.Ba.g.parse(y)}catch{T=null}if(Array.isArray(T)&&T.length==3){var F=T;if(F[0]==0){t:if(!_.v){if(_.g)if(_.g.F+3e3<c.F)ds(_),di(_);else break t;ko(_),ve(18)}}else _.xa=F[1],0<_.xa-_.K&&F[2]<37500&&_.F&&_.A==0&&!_.C&&(_.C=dr(g(_.Va,_),6e3));Nn(_.h)<=1&&_.ta&&(_.ta=void 0)}else Pi(_,11)}else if((c.L||_.g==c)&&ds(_),!N(y))for(F=_.Ba.g.parse(y),y=0;y<F.length;y++){let Yt=F[y];const be=Yt[0];if(!(be<=_.K))if(_.K=be,Yt=Yt[1],_.I==2)if(Yt[0]=="c"){_.M=Yt[1],_.ba=Yt[2];const _n=Yt[3];_n!=null&&(_.ka=_n,_.j.info("VER="+_.ka));const pi=Yt[4];pi!=null&&(_.za=pi,_.j.info("SVER="+_.za));const Xn=Yt[5];Xn!=null&&typeof Xn=="number"&&Xn>0&&(T=1.5*Xn,_.O=T,_.j.info("backChannelRequestTimeoutMs_="+T)),T=_;const Wn=c.g;if(Wn){const Zn=Wn.g?Wn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Zn){var Q=T.h;Q.g||Zn.indexOf("spdy")==-1&&Zn.indexOf("quic")==-1&&Zn.indexOf("h2")==-1||(Q.j=Q.l,Q.g=new Set,Q.h&&(ss(Q,Q.h),Q.h=null))}if(T.G){const zo=Wn.g?Wn.g.getResponseHeader("X-HTTP-Session-Id"):null;zo&&(T.wa=zo,Wt(T.J,T.G,zo))}}_.I=3,_.l&&_.l.ra(),_.aa&&(_.T=Date.now()-c.F,_.j.info("Handshake RTT: "+_.T+"ms")),T=_;var ot=c;if(T.na=Ou(T,T.L?T.ba:null,T.W),ot.L){Oi(T.h,ot);var At=ot,se=T.O;se&&(At.H=se),At.D&&(hi(At),ha(At)),T.g=ot}else ju(T);_.i.length>0&&Ra(_)}else Yt[0]!="stop"&&Yt[0]!="close"||Pi(_,7);else _.I==3&&(Yt[0]=="stop"||Yt[0]=="close"?Yt[0]=="stop"?Pi(_,7):Sa(_):Yt[0]!="noop"&&_.l&&_.l.qa(Yt),_.A=0)}}fr(4)}catch{}}var hf=class{constructor(c,y){this.g=c,this.map=y}};function da(c){this.l=c||10,f.PerformanceNavigationTiming?(c=f.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function pa(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Nn(c){return c.h?1:c.g?c.g.size:0}function ma(c,y){return c.h?c.h==y:c.g?c.g.has(y):!1}function ss(c,y){c.g?c.g.add(y):c.h=y}function Oi(c,y){c.h&&c.h==y?c.h=null:c.g&&c.g.has(y)&&c.g.delete(y)}da.prototype.cancel=function(){if(this.i=os(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function os(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let y=c.i;for(const _ of c.g.values())y=y.concat(_.G);return y}return R(c.i)}var ls=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ff(c,y){if(c){c=c.split("&");for(let _=0;_<c.length;_++){const T=c[_].indexOf("=");let F,Q=null;T>=0?(F=c[_].substring(0,T),Q=c[_].substring(T+1)):F=c[_],y(F,Q?decodeURIComponent(Q.replace(/\+/g," ")):"")}}}function Yn(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let y;c instanceof Yn?(this.l=c.l,xr(this,c.j),this.o=c.o,this.g=c.g,ga(this,c.u),this.h=c.h,vr(this,Au(c.i)),this.m=c.m):c&&(y=String(c).match(ls))?(this.l=!1,xr(this,y[1]||"",!0),this.o=ya(y[2]||""),this.g=ya(y[3]||"",!0),ga(this,y[4]),this.h=ya(y[5]||"",!0),vr(this,y[6]||"",!0),this.m=ya(y[7]||"")):(this.l=!1,this.i=new Mn(null,this.l))}Yn.prototype.toString=function(){const c=[];var y=this.j;y&&c.push(ze(y,Io,!0),":");var _=this.g;return(_||y=="file")&&(c.push("//"),(y=this.o)&&c.push(ze(y,Io,!0),"@"),c.push(ca(_).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.u,_!=null&&c.push(":",String(_))),(_=this.h)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(ze(_,_.charAt(0)=="/"?_r:jo,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",ze(_,Tu)),c.join("")},Yn.prototype.resolve=function(c){const y=fe(this);let _=!!c.j;_?xr(y,c.j):_=!!c.o,_?y.o=c.o:_=!!c.g,_?y.g=c.g:_=c.u!=null;var T=c.h;if(_)ga(y,c.u);else if(_=!!c.h){if(T.charAt(0)!="/")if(this.g&&!this.h)T="/"+T;else{var F=y.h.lastIndexOf("/");F!=-1&&(T=y.h.slice(0,F+1)+T)}if(F=T,F==".."||F==".")T="";else if(F.indexOf("./")!=-1||F.indexOf("/.")!=-1){T=F.lastIndexOf("/",0)==0,F=F.split("/");const Q=[];for(let ot=0;ot<F.length;){const At=F[ot++];At=="."?T&&ot==F.length&&Q.push(""):At==".."?((Q.length>1||Q.length==1&&Q[0]!="")&&Q.pop(),T&&ot==F.length&&Q.push("")):(Q.push(At),T=!0)}T=Q.join("/")}else T=F}return _?y.h=T:_=c.i.toString()!=="",_?vr(y,Au(c.i)):_=!!c.m,_&&(y.m=c.m),y};function fe(c){return new Yn(c)}function xr(c,y,_){c.j=_?ya(y,!0):y,c.j&&(c.j=c.j.replace(/:$/,""))}function ga(c,y){if(y){if(y=Number(y),isNaN(y)||y<0)throw Error("Bad port number "+y);c.u=y}else c.u=null}function vr(c,y,_){y instanceof Mn?(c.i=y,Mo(c.i,c.l)):(_||(y=ze(y,wu)),c.i=new Mn(y,c.l))}function Wt(c,y,_){c.i.set(y,_)}function Vi(c){return Wt(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function ya(c,y){return c?y?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function ze(c,y,_){return typeof c=="string"?(c=encodeURI(c).replace(y,Co),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Co(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Io=/[#\/\?@]/g,jo=/[#\?:]/g,_r=/[#\?]/g,wu=/[#\?@]/g,Tu=/#/g;function Mn(c,y){this.h=this.g=null,this.i=c||null,this.j=!!y}function ki(c){c.g||(c.g=new Map,c.h=0,c.i&&ff(c.i,function(y,_){c.add(decodeURIComponent(y.replace(/\+/g," ")),_)}))}n=Mn.prototype,n.add=function(c,y){ki(this),this.i=null,c=Qn(this,c);let _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(y),this.h+=1,this};function Do(c,y){ki(c),y=Qn(c,y),c.g.has(y)&&(c.i=null,c.h-=c.g.get(y).length,c.g.delete(y))}function No(c,y){return ki(c),y=Qn(c,y),c.g.has(y)}n.forEach=function(c,y){ki(this),this.g.forEach(function(_,T){_.forEach(function(F){c.call(y,F,T,this)},this)},this)};function us(c,y){ki(c);let _=[];if(typeof y=="string")No(c,y)&&(_=_.concat(c.g.get(Qn(c,y))));else for(c=Array.from(c.g.values()),y=0;y<c.length;y++)_=_.concat(c[y]);return _}n.set=function(c,y){return ki(this),this.i=null,c=Qn(this,c),No(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[y]),this.h+=1,this},n.get=function(c,y){return c?(c=us(this,c),c.length>0?String(c[0]):y):y};function Su(c,y,_){Do(c,y),_.length>0&&(c.i=null,c.g.set(Qn(c,y),R(_)),c.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],y=Array.from(this.g.keys());for(let T=0;T<y.length;T++){var _=y[T];const F=ca(_);_=us(this,_);for(let Q=0;Q<_.length;Q++){let ot=F;_[Q]!==""&&(ot+="="+ca(_[Q])),c.push(ot)}}return this.i=c.join("&")};function Au(c){const y=new Mn;return y.i=c.i,c.g&&(y.g=new Map(c.g),y.h=c.h),y}function Qn(c,y){return y=String(y),c.j&&(y=y.toLowerCase()),y}function Mo(c,y){y&&!c.j&&(ki(c),c.i=null,c.g.forEach(function(_,T){const F=T.toLowerCase();T!=F&&(Do(this,T),Su(this,F,_))},c)),c.j=y}function Oo(c,y){const _=new pr;if(f.Image){const T=new Image;T.onload=v(un,_,"TestLoadImage: loaded",!0,y,T),T.onerror=v(un,_,"TestLoadImage: error",!1,y,T),T.onabort=v(un,_,"TestLoadImage: abort",!1,y,T),T.ontimeout=v(un,_,"TestLoadImage: timeout",!1,y,T),f.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=c}else y(!1)}function Er(c,y){const _=new pr,T=new AbortController,F=setTimeout(()=>{T.abort(),un(_,"TestPingServer: timeout",!1,y)},1e4);fetch(c,{signal:T.signal}).then(Q=>{clearTimeout(F),Q.ok?un(_,"TestPingServer: ok",!0,y):un(_,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(F),un(_,"TestPingServer: error",!1,y)})}function un(c,y,_,T,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),T(_)}catch{}}function Ru(){this.g=new lf}function xa(c){this.i=c.Sb||null,this.h=c.ab||!1}w(xa,vu),xa.prototype.g=function(){return new va(this.i,this.h)};function va(c,y){Oe.call(this),this.H=c,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}w(va,Oe),n=va.prototype,n.open=function(c,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=y,this.readyState=1,Ui(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const y={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(y.body=c),(this.H||f).fetch(new Request(this.D,y)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,cn(this)),this.readyState=0},n.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Ui(this)),this.g&&(this.readyState=3,Ui(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;br(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function br(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}n.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var y=c.value?c.value:new Uint8Array(0);(y=this.B.decode(y,{stream:!c.done}))&&(this.response=this.responseText+=y)}c.done?cn(this):Ui(this),this.readyState==3&&br(this)}},n.Oa=function(c){this.g&&(this.response=this.responseText=c,cn(this))},n.Na=function(c){this.g&&(this.response=c,cn(this))},n.ga=function(){this.g&&cn(this)};function cn(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Ui(c)}n.setRequestHeader=function(c,y){this.A.append(c,y)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],y=this.h.entries();for(var _=y.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=y.next();return c.join(`\r
`)};function Ui(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(va.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function wr(c){let y="";return Ct(c,function(_,T){y+=T,y+=":",y+=_,y+=`\r
`}),y}function On(c,y,_){t:{for(T in _){var T=!1;break t}T=!0}T||(_=wr(_),typeof c=="string"?_!=null&&ca(_):Wt(c,y,_))}function ie(c){Oe.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}w(ie,Oe);var cs=/^https?$/i,Cu=["POST","PUT"];n=ie.prototype,n.Fa=function(c){this.H=c},n.ea=function(c,y,_,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);y=y?y.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Mi.g(),this.g.onreadystatechange=S(g(this.Ca,this));try{this.B=!0,this.g.open(y,String(c),!0),this.B=!1}catch(Q){_a(this,Q);return}if(c=_||"",_=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var F in T)_.set(F,T[F]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const Q of T.keys())_.set(Q,T.get(Q));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(_.keys()).find(Q=>Q.toLowerCase()=="content-type"),F=f.FormData&&c instanceof f.FormData,!(Array.prototype.indexOf.call(Cu,y,void 0)>=0)||T||F||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Q,ot]of _)this.g.setRequestHeader(Q,ot);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(Q){_a(this,Q)}};function _a(c,y){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=y,c.o=5,Ea(c),Ve(c)}function Ea(c){c.A||(c.A=!0,Le(c,"complete"),Le(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,Le(this,"complete"),Le(this,"abort"),Ve(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ve(this,!0)),ie.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Vo(this):this.Xa())},n.Xa=function(){Vo(this)};function Vo(c){if(c.h&&typeof u<"u"){if(c.v&&tn(c)==4)setTimeout(c.Ca.bind(c),0);else if(Le(c,"readystatechange"),tn(c)==4){c.h=!1;try{const Q=c.ca();t:switch(Q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break t;default:y=!1}var _;if(!(_=y)){var T;if(T=Q===0){let ot=String(c.D).match(ls)[1]||null;!ot&&f.self&&f.self.location&&(ot=f.self.location.protocol.slice(0,-1)),T=!cs.test(ot?ot.toLowerCase():"")}_=T}if(_)Le(c,"complete"),Le(c,"success");else{c.o=6;try{var F=tn(c)>2?c.g.statusText:""}catch{F=""}c.l=F+" ["+c.ca()+"]",Ea(c)}}finally{Ve(c)}}}}function Ve(c,y){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const _=c.g;c.g=null,y||Le(c,"ready");try{_.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function tn(c){return c.g?c.g.readyState:0}n.ca=function(){try{return tn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(c){if(this.g){var y=this.g.responseText;return c&&y.indexOf(c)==0&&(y=y.substring(c.length)),ln(y)}};function ba(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function wa(c){const y={};c=(c.g&&tn(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<c.length;T++){if(N(c[T]))continue;var _=cf(c[T]);const F=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const Q=y[F]||[];y[F]=Q,Q.push(_)}V(y,function(T){return T.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ta(c,y,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||y}function hs(c){this.za=0,this.i=[],this.j=new pr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ta("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ta("baseRetryDelayMs",5e3,c),this.Za=Ta("retryDelaySeedMs",1e4,c),this.Ta=Ta("forwardChannelMaxRetries",2,c),this.va=Ta("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new da(c&&c.concurrentRequestLimit),this.Ba=new Ru,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=hs.prototype,n.ka=8,n.I=1,n.connect=function(c,y,_,T){ve(0),this.W=c,this.H=y||{},_&&T!==void 0&&(this.H.OSID=_,this.H.OAID=T),this.F=this.X,this.J=Ou(this,null,this.W),Ra(this)};function Sa(c){if(Aa(c),c.I==3){var y=c.V++,_=fe(c.J);if(Wt(_,"SID",c.M),Wt(_,"RID",y),Wt(_,"TYPE","terminate"),Ca(c,_),y=new Gn(c,c.j,y),y.M=2,y.A=Vi(fe(_)),_=!1,f.navigator&&f.navigator.sendBeacon)try{_=f.navigator.sendBeacon(y.A.toString(),"")}catch{}!_&&f.Image&&(new Image().src=y.A,_=!0),_||(y.g=ps(y.j,null),y.g.ea(y.A)),y.F=Date.now(),ha(y)}Mu(c)}function di(c){c.g&&(Uo(c),c.g.cancel(),c.g=null)}function Aa(c){di(c),c.v&&(f.clearTimeout(c.v),c.v=null),ds(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&f.clearTimeout(c.m),c.m=null)}function Ra(c){if(!pa(c.h)&&!c.m){c.m=!0;var y=c.Ea;J||C(),dt||(J(),dt=!0),j.add(y,c),c.D=0}}function df(c,y){return Nn(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=y.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=dr(g(c.Ea,c,y),Nu(c,c.D)),c.D++,!0)}n.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const F=new Gn(this,this.j,c);let Q=this.o;if(this.U&&(Q?(Q=at(Q),ut(Q,this.U)):Q=this.U),this.u!==null||this.R||(F.J=Q,Q=null),this.S)t:{for(var y=0,_=0;_<this.i.length;_++){e:{var T=this.i[_];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break e}T=void 0}if(T===void 0)break;if(y+=T,y>4096){y=_;break t}if(y===4096||_===this.i.length-1){y=_+1;break t}}y=1e3}else y=1e3;y=fs(this,F,y),_=fe(this.J),Wt(_,"RID",c),Wt(_,"CVER",22),this.G&&Wt(_,"X-HTTP-Session-Id",this.G),Ca(this,_),Q&&(this.R?y="headers="+ca(wr(Q))+"&"+y:this.u&&On(_,this.u,Q)),ss(this.h,F),this.Ra&&Wt(_,"TYPE","init"),this.S?(Wt(_,"$req",y),Wt(_,"SID","null"),F.U=!0,ui(F,_,null)):ui(F,_,y),this.I=2}}else this.I==3&&(c?Iu(this,c):this.i.length==0||pa(this.h)||Iu(this))};function Iu(c,y){var _;y?_=y.l:_=c.V++;const T=fe(c.J);Wt(T,"SID",c.M),Wt(T,"RID",_),Wt(T,"AID",c.K),Ca(c,T),c.u&&c.o&&On(T,c.u,c.o),_=new Gn(c,c.j,_,c.D+1),c.u===null&&(_.J=c.o),y&&(c.i=y.G.concat(c.i)),y=fs(c,_,1e3),_.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),ss(c.h,_),ui(_,T,y)}function Ca(c,y){c.H&&Ct(c.H,function(_,T){Wt(y,T,_)}),c.l&&Ct({},function(_,T){Wt(y,T,_)})}function fs(c,y,_){_=Math.min(c.i.length,_);const T=c.l?g(c.l.Ka,c.l,c):null;t:{var F=c.i;let At=-1;for(;;){const se=["count="+_];At==-1?_>0?(At=F[0].g,se.push("ofs="+At)):At=0:se.push("ofs="+At);let Yt=!0;for(let be=0;be<_;be++){var Q=F[be].g;const _n=F[be].map;if(Q-=At,Q<0)At=Math.max(0,F[be].g-100),Yt=!1;else try{Q="req"+Q+"_"||"";try{var ot=_n instanceof Map?_n:Object.entries(_n);for(const[pi,Xn]of ot){let Wn=Xn;p(Xn)&&(Wn=jn(Xn)),se.push(Q+pi+"="+encodeURIComponent(Wn))}}catch(pi){throw se.push(Q+"type="+encodeURIComponent("_badmap")),pi}}catch{T&&T(_n)}}if(Yt){ot=se.join("&");break t}}ot=void 0}return c=c.i.splice(0,_),y.G=c,ot}function ju(c){if(!c.g&&!c.v){c.Y=1;var y=c.Da;J||C(),dt||(J(),dt=!0),j.add(y,c),c.A=0}}function ko(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=dr(g(c.Da,c),Nu(c,c.A)),c.A++,!0)}n.Da=function(){if(this.v=null,Du(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=dr(g(this.Wa,this),c)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ve(10),di(this),Du(this))};function Uo(c){c.B!=null&&(f.clearTimeout(c.B),c.B=null)}function Du(c){c.g=new Gn(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var y=fe(c.na);Wt(y,"RID","rpc"),Wt(y,"SID",c.M),Wt(y,"AID",c.K),Wt(y,"CI",c.F?"0":"1"),!c.F&&c.ia&&Wt(y,"TO",c.ia),Wt(y,"TYPE","xmlhttp"),Ca(c,y),c.u&&c.o&&On(y,c.u,c.o),c.O&&(c.g.H=c.O);var _=c.g;c=c.ba,_.M=1,_.A=Vi(fe(y)),_.u=null,_.R=!0,gr(_,c)}n.Va=function(){this.C!=null&&(this.C=null,di(this),ko(this),ve(19))};function ds(c){c.C!=null&&(f.clearTimeout(c.C),c.C=null)}function Po(c,y){var _=null;if(c.g==y){ds(c),Uo(c),c.g=null;var T=2}else if(ma(c.h,y))_=y.G,Oi(c.h,y),T=1;else return;if(c.I!=0){if(y.o)if(T==1){_=y.u?y.u.length:0,y=Date.now()-y.F;var F=c.D;T=ns(),Le(T,new Eu(T,_)),Ra(c)}else ju(c);else if(F=y.m,F==3||F==0&&y.X>0||!(T==1&&df(c,y)||T==2&&ko(c)))switch(_&&_.length>0&&(y=c.h,y.i=y.i.concat(_)),F){case 1:Pi(c,5);break;case 4:Pi(c,10);break;case 3:Pi(c,6);break;default:Pi(c,2)}}}function Nu(c,y){let _=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(_*=2),_*y}function Pi(c,y){if(c.j.info("Error code "+y),y==2){var _=g(c.bb,c),T=c.Ua;const F=!T;T=new Yn(T||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||xr(T,"https"),Vi(T),F?Oo(T.toString(),_):Er(T.toString(),_)}else ve(2);c.I=0,c.l&&c.l.pa(y),Mu(c),Aa(c)}n.bb=function(c){c?(this.j.info("Successfully pinged google.com"),ve(2)):(this.j.info("Failed to ping google.com"),ve(1))};function Mu(c){if(c.I=0,c.ja=[],c.l){const y=os(c.h);(y.length!=0||c.i.length!=0)&&(O(c.ja,y),O(c.ja,c.i),c.h.i.length=0,R(c.i),c.i.length=0),c.l.oa()}}function Ou(c,y,_){var T=_ instanceof Yn?fe(_):new Yn(_);if(T.g!="")y&&(T.g=y+"."+T.g),ga(T,T.u);else{var F=f.location;T=F.protocol,y=y?y+"."+F.hostname:F.hostname,F=+F.port;const Q=new Yn(null);T&&xr(Q,T),y&&(Q.g=y),F&&ga(Q,F),_&&(Q.h=_),T=Q}return _=c.G,y=c.wa,_&&y&&Wt(T,_,y),Wt(T,"VER",c.ka),Ca(c,T),T}function ps(c,y,_){if(y&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return y=c.Aa&&!c.ma?new ie(new xa({ab:_})):new ie(c.ma),y.Fa(c.L),y}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Vu(){}n=Vu.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function ms(){}ms.prototype.g=function(c,y){return new hn(c,y)};function hn(c,y){Oe.call(this),this.g=new hs(y),this.l=c,this.h=y&&y.messageUrlParams||null,c=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(c?c["X-WebChannel-Content-Type"]=y.messageContentType:c={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.sa&&(c?c["X-WebChannel-Client-Profile"]=y.sa:c={"X-WebChannel-Client-Profile":y.sa}),this.g.U=c,(c=y&&y.Qb)&&!N(c)&&(this.g.u=c),this.A=y&&y.supportsCrossDomainXhr||!1,this.v=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!N(y)&&(this.g.G=y,c=this.h,c!==null&&y in c&&(c=this.h,y in c&&delete c[y])),this.j=new Tr(this)}w(hn,Oe),hn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},hn.prototype.close=function(){Sa(this.g)},hn.prototype.o=function(c){var y=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.v&&(_={},_.__data__=jn(c),c=_);y.i.push(new hf(y.Ya++,c)),y.I==3&&Ra(y)},hn.prototype.N=function(){this.g.l=null,delete this.j,Sa(this.g),delete this.g,hn.Z.N.call(this)};function Lo(c){cr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var y=c.__sm__;if(y){t:{for(const _ in y){c=_;break t}c=void 0}(this.i=c)&&(c=this.i,y=y!==null&&c in y?y[c]:void 0),this.data=y}else this.data=c}w(Lo,cr);function ku(){Hn.call(this),this.status=1}w(ku,Hn);function Tr(c){this.g=c}w(Tr,Vu),Tr.prototype.ra=function(){Le(this.g,"a")},Tr.prototype.qa=function(c){Le(this.g,new Lo(c))},Tr.prototype.pa=function(c){Le(this.g,new ku)},Tr.prototype.oa=function(){Le(this.g,"b")},ms.prototype.createWebChannel=ms.prototype.g,hn.prototype.send=hn.prototype.o,hn.prototype.open=hn.prototype.m,hn.prototype.close=hn.prototype.close,bE=function(){return new ms},EE=function(){return ns()},_E=Dn,em={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},_e.NO_ERROR=0,_e.TIMEOUT=8,_e.HTTP_ERROR=6,rh=_e,He.COMPLETE="complete",vE=He,_u.EventType=si,si.OPEN="a",si.CLOSE="b",si.ERROR="c",si.MESSAGE="d",Oe.prototype.listen=Oe.prototype.J,Ml=_u,ie.prototype.listenOnce=ie.prototype.K,ie.prototype.getLastError=ie.prototype.Ha,ie.prototype.getLastErrorCode=ie.prototype.ya,ie.prototype.getStatus=ie.prototype.ca,ie.prototype.getResponseJson=ie.prototype.La,ie.prototype.getResponseText=ie.prototype.la,ie.prototype.send=ie.prototype.ea,ie.prototype.setWithCredentials=ie.prototype.Fa,xE=ie}).apply(typeof Fc<"u"?Fc:typeof self<"u"?self:typeof window<"u"?window:{});const Zx="@firebase/firestore",Jx="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let xo="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa=new fE("@firebase/firestore");function Ks(){return Xa.logLevel}function pt(n,...t){if(Xa.logLevel<=$t.DEBUG){const r=t.map(Xm);Xa.debug(`Firestore (${xo}): ${n}`,...r)}}function sr(n,...t){if(Xa.logLevel<=$t.ERROR){const r=t.map(Xm);Xa.error(`Firestore (${xo}): ${n}`,...r)}}function ro(n,...t){if(Xa.logLevel<=$t.WARN){const r=t.map(Xm);Xa.warn(`Firestore (${xo}): ${n}`,...r)}}function Xm(n){if(typeof n=="string")return n;try{/**
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
 */function wt(n,t,r){let a="Unexpected state";typeof t=="string"?a=t:r=t,wE(n,a,r)}function wE(n,t,r){let a=`FIRESTORE (${xo}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(r!==void 0)try{a+=" CONTEXT: "+JSON.stringify(r)}catch{a+=" CONTEXT: "+r}throw sr(a),new Error(a)}function Gt(n,t,r,a){let o="Unexpected state";typeof r=="string"?o=r:a=r,n||wE(t,o,a)}function Rt(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ft extends yo{constructor(t,r){super(t,r),this.code=t,this.message=r,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class TE{constructor(t,r){this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class K6{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,r){t.enqueueRetryable((()=>r(an.UNAUTHENTICATED)))}shutdown(){}}class H6{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,r){this.changeListener=r,t.enqueueRetryable((()=>r(this.token.user)))}shutdown(){this.changeListener=null}}class G6{constructor(t){this.t=t,this.currentUser=an.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,r){Gt(this.o===void 0,42304);let a=this.i;const o=m=>this.i!==a?(a=this.i,r(m)):Promise.resolve();let u=new er;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new er,t.enqueueRetryable((()=>o(this.currentUser)))};const f=()=>{const m=u;t.enqueueRetryable((async()=>{await m.promise,await o(this.currentUser)}))},p=m=>{pt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit((m=>p(m))),setTimeout((()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?p(m):(pt("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new er)}}),0),f()}getToken(){const t=this.i,r=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(r).then((a=>this.i!==t?(pt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(Gt(typeof a.accessToken=="string",31837,{l:a}),new TE(a.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Gt(t===null||typeof t=="string",2055,{h:t}),new an(t)}}class Y6{constructor(t,r,a){this.P=t,this.T=r,this.I=a,this.type="FirstParty",this.user=an.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Q6{constructor(t,r,a){this.P=t,this.T=r,this.I=a}getToken(){return Promise.resolve(new Y6(this.P,this.T,this.I))}start(t,r){t.enqueueRetryable((()=>r(an.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class tv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class X6{constructor(t,r){this.V=r,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,C6(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,r){Gt(this.o===void 0,3512);const a=u=>{u.error!=null&&pt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.m;return this.m=u.token,pt("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?r(u.token):Promise.resolve()};this.o=u=>{t.enqueueRetryable((()=>a(u)))};const o=u=>{pt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):pt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new tv(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((r=>r?(Gt(typeof r.token=="string",44558,{tokenResult:r}),this.m=r.token,new tv(r.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function W6(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),r=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(r);else for(let a=0;a<n;a++)r[a]=Math.floor(256*Math.random());return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=62*Math.floor(4.129032258064516);let a="";for(;a.length<20;){const o=W6(40);for(let u=0;u<o.length;++u)a.length<20&&o[u]<r&&(a+=t.charAt(o[u]%62))}return a}}function Ut(n,t){return n<t?-1:n>t?1:0}function nm(n,t){const r=Math.min(n.length,t.length);for(let a=0;a<r;a++){const o=n.charAt(a),u=t.charAt(a);if(o!==u)return Ap(o)===Ap(u)?Ut(o,u):Ap(o)?1:-1}return Ut(n.length,t.length)}const Z6=55296,J6=57343;function Ap(n){const t=n.charCodeAt(0);return t>=Z6&&t<=J6}function ao(n,t,r){return n.length===t.length&&n.every(((a,o)=>r(a,t[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev="__name__";class _i{constructor(t,r,a){r===void 0?r=0:r>t.length&&wt(637,{offset:r,range:t.length}),a===void 0?a=t.length-r:a>t.length-r&&wt(1746,{length:a,range:t.length-r}),this.segments=t,this.offset=r,this.len=a}get length(){return this.len}isEqual(t){return _i.comparator(this,t)===0}child(t){const r=this.segments.slice(this.offset,this.limit());return t instanceof _i?t.forEach((a=>{r.push(a)})):r.push(t),this.construct(r)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==t.get(r))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==t.get(r))return!1;return!0}forEach(t){for(let r=this.offset,a=this.limit();r<a;r++)t(this.segments[r])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,r){const a=Math.min(t.length,r.length);for(let o=0;o<a;o++){const u=_i.compareSegments(t.get(o),r.get(o));if(u!==0)return u}return Ut(t.length,r.length)}static compareSegments(t,r){const a=_i.isNumericId(t),o=_i.isNumericId(r);return a&&!o?-1:!a&&o?1:a&&o?_i.extractNumericId(t).compare(_i.extractNumericId(r)):nm(t,r)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Wr.fromString(t.substring(4,t.length-2))}}class ae extends _i{construct(t,r,a){return new ae(t,r,a)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const r=[];for(const a of t){if(a.indexOf("//")>=0)throw new ft(nt.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);r.push(...a.split("/").filter((o=>o.length>0)))}return new ae(r)}static emptyPath(){return new ae([])}}const tC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends _i{construct(t,r,a){return new We(t,r,a)}static isValidIdentifier(t){return tC.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ev}static keyField(){return new We([ev])}static fromServerFormat(t){const r=[];let a="",o=0;const u=()=>{if(a.length===0)throw new ft(nt.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);r.push(a),a=""};let f=!1;for(;o<t.length;){const p=t[o];if(p==="\\"){if(o+1===t.length)throw new ft(nt.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const m=t[o+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new ft(nt.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);a+=m,o+=2}else p==="`"?(f=!f,o++):p!=="."||f?(a+=p,o++):(u(),o++)}if(u(),f)throw new ft(nt.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new We(r)}static emptyPath(){return new We([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function SE(n,t,r){if(!r)throw new ft(nt.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function eC(n,t,r,a){if(t===!0&&a===!0)throw new ft(nt.INVALID_ARGUMENT,`${n} and ${r} cannot be used together.`)}function nv(n){if(!vt.isDocumentKey(n))throw new ft(nt.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function iv(n){if(vt.isDocumentKey(n))throw new ft(nt.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function AE(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function zh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(a){return a.constructor?a.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":wt(12329,{type:typeof n})}function or(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new ft(nt.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const r=zh(n);throw new ft(nt.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${r}`)}}return n}/**
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
 */function Ne(n,t){const r={typeString:n};return t&&(r.value=t),r}function lu(n,t){if(!AE(n))throw new ft(nt.INVALID_ARGUMENT,"JSON must be an object");let r;for(const a in t)if(t[a]){const o=t[a].typeString,u="value"in t[a]?{value:t[a].value}:void 0;if(!(a in n)){r=`JSON missing required field: '${a}'`;break}const f=n[a];if(o&&typeof f!==o){r=`JSON field '${a}' must be a ${o}.`;break}if(u!==void 0&&f!==u.value){r=`Expected '${a}' field to equal '${u.value}'`;break}}if(r)throw new ft(nt.INVALID_ARGUMENT,r);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv=-62135596800,av=1e6;class le{static now(){return le.fromMillis(Date.now())}static fromDate(t){return le.fromMillis(t.getTime())}static fromMillis(t){const r=Math.floor(t/1e3),a=Math.floor((t-1e3*r)*av);return new le(r,a)}constructor(t,r){if(this.seconds=t,this.nanoseconds=r,r<0)throw new ft(nt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(r>=1e9)throw new ft(nt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(t<rv)throw new ft(nt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ft(nt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/av}_compareTo(t){return this.seconds===t.seconds?Ut(this.nanoseconds,t.nanoseconds):Ut(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:le._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(lu(t,le._jsonSchema))return new le(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-rv;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}le._jsonSchemaVersion="firestore/timestamp/1.0",le._jsonSchema={type:Ne("string",le._jsonSchemaVersion),seconds:Ne("number"),nanoseconds:Ne("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Zl=-1;function nC(n,t){const r=n.toTimestamp().seconds,a=n.toTimestamp().nanoseconds+1,o=St.fromTimestamp(a===1e9?new le(r+1,0):new le(r,a));return new Jr(o,vt.empty(),t)}function iC(n){return new Jr(n.readTime,n.key,Zl)}class Jr{constructor(t,r,a){this.readTime=t,this.documentKey=r,this.largestBatchId=a}static min(){return new Jr(St.min(),vt.empty(),Zl)}static max(){return new Jr(St.max(),vt.empty(),Zl)}}function rC(n,t){let r=n.readTime.compareTo(t.readTime);return r!==0?r:(r=vt.comparator(n.documentKey,t.documentKey),r!==0?r:Ut(n.largestBatchId,t.largestBatchId))}/**
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
 */const aC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vo(n){if(n.code!==nt.FAILED_PRECONDITION||n.message!==aC)throw n;pt("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((r=>{this.isDone=!0,this.result=r,this.nextCallback&&this.nextCallback(r)}),(r=>{this.isDone=!0,this.error=r,this.catchCallback&&this.catchCallback(r)}))}catch(t){return this.next(void 0,t)}next(t,r){return this.callbackAttached&&wt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(r,this.error):this.wrapSuccess(t,this.result):new st(((a,o)=>{this.nextCallback=u=>{this.wrapSuccess(t,u).next(a,o)},this.catchCallback=u=>{this.wrapFailure(r,u).next(a,o)}}))}toPromise(){return new Promise(((t,r)=>{this.next(t,r)}))}wrapUserFunction(t){try{const r=t();return r instanceof st?r:st.resolve(r)}catch(r){return st.reject(r)}}wrapSuccess(t,r){return t?this.wrapUserFunction((()=>t(r))):st.resolve(r)}wrapFailure(t,r){return t?this.wrapUserFunction((()=>t(r))):st.reject(r)}static resolve(t){return new st(((r,a)=>{r(t)}))}static reject(t){return new st(((r,a)=>{a(t)}))}static waitFor(t){return new st(((r,a)=>{let o=0,u=0,f=!1;t.forEach((p=>{++o,p.next((()=>{++u,f&&u===o&&r()}),(m=>a(m)))})),f=!0,u===o&&r()}))}static or(t){let r=st.resolve(!1);for(const a of t)r=r.next((o=>o?st.resolve(o):a()));return r}static forEach(t,r){const a=[];return t.forEach(((o,u)=>{a.push(r.call(this,o,u))})),this.waitFor(a)}static mapArray(t,r){return new st(((a,o)=>{const u=t.length,f=new Array(u);let p=0;for(let m=0;m<u;m++){const g=m;r(t[g]).next((v=>{f[g]=v,++p,p===u&&a(f)}),(v=>o(v)))}}))}static doWhile(t,r){return new st(((a,o)=>{const u=()=>{t()===!0?r().next((()=>{u()}),o):a()};u()}))}}function oC(n){const t=n.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}function _o(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Bh{constructor(t,r){this.previousValue=t,r&&(r.sequenceNumberHandler=a=>this.ae(a),this.ue=a=>r.writeSequenceNumber(a))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Bh.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm=-1;function $h(n){return n==null}function _h(n){return n===0&&1/n==-1/0}function lC(n){return typeof n=="number"&&Number.isInteger(n)&&!_h(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE="";function uC(n){let t="";for(let r=0;r<n.length;r++)t.length>0&&(t=sv(t)),t=cC(n.get(r),t);return sv(t)}function cC(n,t){let r=t;const a=n.length;for(let o=0;o<a;o++){const u=n.charAt(o);switch(u){case"\0":r+="";break;case RE:r+="";break;default:r+=u}}return r}function sv(n){return n+RE+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ov(n){let t=0;for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t++;return t}function aa(n,t){for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t(r,n[r])}function CE(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Pe{constructor(t){this.comparator=t,this.data=new me(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((r,a)=>(t(r),!1)))}forEachInRange(t,r){const a=this.data.getIteratorFrom(t[0]);for(;a.hasNext();){const o=a.getNext();if(this.comparator(o.key,t[1])>=0)return;r(o.key)}}forEachWhile(t,r){let a;for(a=r!==void 0?this.data.getIteratorFrom(r):this.data.getIterator();a.hasNext();)if(!t(a.getNext().key))return}firstAfterOrEqual(t){const r=this.data.getIteratorFrom(t);return r.hasNext()?r.getNext().key:null}getIterator(){return new lv(this.data.getIterator())}getIteratorFrom(t){return new lv(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let r=this;return r.size<t.size&&(r=t,t=this),t.forEach((a=>{r=r.add(a)})),r}isEqual(t){if(!(t instanceof Pe)||this.size!==t.size)return!1;const r=this.data.getIterator(),a=t.data.getIterator();for(;r.hasNext();){const o=r.getNext().key,u=a.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((r=>{t.push(r)})),t}toString(){const t=[];return this.forEach((r=>t.push(r))),"SortedSet("+t.toString()+")"}copy(t){const r=new Pe(this.comparator);return r.data=t,r}}class lv{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class In{constructor(t){this.fields=t,t.sort(We.comparator)}static empty(){return new In([])}unionWith(t){let r=new Pe(We.comparator);for(const a of this.fields)r=r.add(a);for(const a of t)r=r.add(a);return new In(r.toArray())}covers(t){for(const r of this.fields)if(r.isPrefixOf(t))return!0;return!1}isEqual(t){return ao(this.fields,t.fields,((r,a)=>r.isEqual(a)))}}/**
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
 */class IE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ze{constructor(t){this.binaryString=t}static fromBase64String(t){const r=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new IE("Invalid base64 string: "+u):u}})(t);return new Ze(r)}static fromUint8Array(t){const r=(function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u})(t);return new Ze(r)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(r){return btoa(r)})(this.binaryString)}toUint8Array(){return(function(r){const a=new Uint8Array(r.length);for(let o=0;o<r.length;o++)a[o]=r.charCodeAt(o);return a})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Ut(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const hC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ta(n){if(Gt(!!n,39018),typeof n=="string"){let t=0;const r=hC.exec(n);if(Gt(!!r,46558,{timestamp:n}),r[1]){let o=r[1];o=(o+"000000000").substr(0,9),t=Number(o)}const a=new Date(n);return{seconds:Math.floor(a.getTime()/1e3),nanos:t}}return{seconds:Se(n.seconds),nanos:Se(n.nanos)}}function Se(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ea(n){return typeof n=="string"?Ze.fromBase64String(n):Ze.fromUint8Array(n)}/**
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
 */const jE="server_timestamp",DE="__type__",NE="__previous_value__",ME="__local_write_time__";function Jm(n){return(n?.mapValue?.fields||{})[DE]?.stringValue===jE}function Fh(n){const t=n.mapValue.fields[NE];return Jm(t)?Fh(t):t}function Jl(n){const t=ta(n.mapValue.fields[ME].timestampValue);return new le(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(t,r,a,o,u,f,p,m,g,v){this.databaseId=t,this.appId=r,this.persistenceKey=a,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=p,this.longPollingOptions=m,this.useFetchStreams=g,this.isUsingEmulator=v}}const Eh="(default)";class tu{constructor(t,r){this.projectId=t,this.database=r||Eh}static empty(){return new tu("","")}get isDefaultDatabase(){return this.database===Eh}isEqual(t){return t instanceof tu&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const OE="__type__",dC="__max__",Kc={mapValue:{}},VE="__vector__",bh="value";function na(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Jm(n)?4:mC(n)?9007199254740991:pC(n)?10:11:wt(28295,{value:n})}function Ri(n,t){if(n===t)return!0;const r=na(n);if(r!==na(t))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Jl(n).isEqual(Jl(t));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=ta(o.timestampValue),p=ta(u.timestampValue);return f.seconds===p.seconds&&f.nanos===p.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(o,u){return ea(o.bytesValue).isEqual(ea(u.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(o,u){return Se(o.geoPointValue.latitude)===Se(u.geoPointValue.latitude)&&Se(o.geoPointValue.longitude)===Se(u.geoPointValue.longitude)})(n,t);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return Se(o.integerValue)===Se(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=Se(o.doubleValue),p=Se(u.doubleValue);return f===p?_h(f)===_h(p):isNaN(f)&&isNaN(p)}return!1})(n,t);case 9:return ao(n.arrayValue.values||[],t.arrayValue.values||[],Ri);case 10:case 11:return(function(o,u){const f=o.mapValue.fields||{},p=u.mapValue.fields||{};if(ov(f)!==ov(p))return!1;for(const m in f)if(f.hasOwnProperty(m)&&(p[m]===void 0||!Ri(f[m],p[m])))return!1;return!0})(n,t);default:return wt(52216,{left:n})}}function eu(n,t){return(n.values||[]).find((r=>Ri(r,t)))!==void 0}function so(n,t){if(n===t)return 0;const r=na(n),a=na(t);if(r!==a)return Ut(r,a);switch(r){case 0:case 9007199254740991:return 0;case 1:return Ut(n.booleanValue,t.booleanValue);case 2:return(function(u,f){const p=Se(u.integerValue||u.doubleValue),m=Se(f.integerValue||f.doubleValue);return p<m?-1:p>m?1:p===m?0:isNaN(p)?isNaN(m)?0:-1:1})(n,t);case 3:return uv(n.timestampValue,t.timestampValue);case 4:return uv(Jl(n),Jl(t));case 5:return nm(n.stringValue,t.stringValue);case 6:return(function(u,f){const p=ea(u),m=ea(f);return p.compareTo(m)})(n.bytesValue,t.bytesValue);case 7:return(function(u,f){const p=u.split("/"),m=f.split("/");for(let g=0;g<p.length&&g<m.length;g++){const v=Ut(p[g],m[g]);if(v!==0)return v}return Ut(p.length,m.length)})(n.referenceValue,t.referenceValue);case 8:return(function(u,f){const p=Ut(Se(u.latitude),Se(f.latitude));return p!==0?p:Ut(Se(u.longitude),Se(f.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return cv(n.arrayValue,t.arrayValue);case 10:return(function(u,f){const p=u.fields||{},m=f.fields||{},g=p[bh]?.arrayValue,v=m[bh]?.arrayValue,w=Ut(g?.values?.length||0,v?.values?.length||0);return w!==0?w:cv(g,v)})(n.mapValue,t.mapValue);case 11:return(function(u,f){if(u===Kc.mapValue&&f===Kc.mapValue)return 0;if(u===Kc.mapValue)return 1;if(f===Kc.mapValue)return-1;const p=u.fields||{},m=Object.keys(p),g=f.fields||{},v=Object.keys(g);m.sort(),v.sort();for(let w=0;w<m.length&&w<v.length;++w){const S=nm(m[w],v[w]);if(S!==0)return S;const R=so(p[m[w]],g[v[w]]);if(R!==0)return R}return Ut(m.length,v.length)})(n.mapValue,t.mapValue);default:throw wt(23264,{he:r})}}function uv(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return Ut(n,t);const r=ta(n),a=ta(t),o=Ut(r.seconds,a.seconds);return o!==0?o:Ut(r.nanos,a.nanos)}function cv(n,t){const r=n.values||[],a=t.values||[];for(let o=0;o<r.length&&o<a.length;++o){const u=so(r[o],a[o]);if(u)return u}return Ut(r.length,a.length)}function oo(n){return im(n)}function im(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(r){const a=ta(r);return`time(${a.seconds},${a.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(r){return ea(r).toBase64()})(n.bytesValue):"referenceValue"in n?(function(r){return vt.fromName(r).toString()})(n.referenceValue):"geoPointValue"in n?(function(r){return`geo(${r.latitude},${r.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(r){let a="[",o=!0;for(const u of r.values||[])o?o=!1:a+=",",a+=im(u);return a+"]"})(n.arrayValue):"mapValue"in n?(function(r){const a=Object.keys(r.fields||{}).sort();let o="{",u=!0;for(const f of a)u?u=!1:o+=",",o+=`${f}:${im(r.fields[f])}`;return o+"}"})(n.mapValue):wt(61005,{value:n})}function ah(n){switch(na(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Fh(n);return t?16+ah(t):16;case 5:return 2*n.stringValue.length;case 6:return ea(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(a){return(a.values||[]).reduce(((o,u)=>o+ah(u)),0)})(n.arrayValue);case 10:case 11:return(function(a){let o=0;return aa(a.fields,((u,f)=>{o+=u.length+ah(f)})),o})(n.mapValue);default:throw wt(13486,{value:n})}}function hv(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function rm(n){return!!n&&"integerValue"in n}function tg(n){return!!n&&"arrayValue"in n}function fv(n){return!!n&&"nullValue"in n}function dv(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function sh(n){return!!n&&"mapValue"in n}function pC(n){return(n?.mapValue?.fields||{})[OE]?.stringValue===VE}function zl(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return aa(n.mapValue.fields,((r,a)=>t.mapValue.fields[r]=zl(a))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let r=0;r<(n.arrayValue.values||[]).length;++r)t.arrayValue.values[r]=zl(n.arrayValue.values[r]);return t}return{...n}}function mC(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===dC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(t){this.value=t}static empty(){return new xn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let r=this.value;for(let a=0;a<t.length-1;++a)if(r=(r.mapValue.fields||{})[t.get(a)],!sh(r))return null;return r=(r.mapValue.fields||{})[t.lastSegment()],r||null}}set(t,r){this.getFieldsMap(t.popLast())[t.lastSegment()]=zl(r)}setAll(t){let r=We.emptyPath(),a={},o=[];t.forEach(((f,p)=>{if(!r.isImmediateParentOf(p)){const m=this.getFieldsMap(r);this.applyChanges(m,a,o),a={},o=[],r=p.popLast()}f?a[p.lastSegment()]=zl(f):o.push(p.lastSegment())}));const u=this.getFieldsMap(r);this.applyChanges(u,a,o)}delete(t){const r=this.field(t.popLast());sh(r)&&r.mapValue.fields&&delete r.mapValue.fields[t.lastSegment()]}isEqual(t){return Ri(this.value,t.value)}getFieldsMap(t){let r=this.value;r.mapValue.fields||(r.mapValue={fields:{}});for(let a=0;a<t.length;++a){let o=r.mapValue.fields[t.get(a)];sh(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},r.mapValue.fields[t.get(a)]=o),r=o}return r.mapValue.fields}applyChanges(t,r,a){aa(r,((o,u)=>t[o]=u));for(const o of a)delete t[o]}clone(){return new xn(zl(this.value))}}function kE(n){const t=[];return aa(n.fields,((r,a)=>{const o=new We([r]);if(sh(a)){const u=kE(a.mapValue).fields;if(u.length===0)t.push(o);else for(const f of u)t.push(o.child(f))}else t.push(o)})),new In(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(t,r,a,o,u,f,p){this.key=t,this.documentType=r,this.version=a,this.readTime=o,this.createTime=u,this.data=f,this.documentState=p}static newInvalidDocument(t){return new sn(t,0,St.min(),St.min(),St.min(),xn.empty(),0)}static newFoundDocument(t,r,a,o){return new sn(t,1,r,St.min(),a,o,0)}static newNoDocument(t,r){return new sn(t,2,r,St.min(),St.min(),xn.empty(),0)}static newUnknownDocument(t,r){return new sn(t,3,r,St.min(),St.min(),xn.empty(),2)}convertToFoundDocument(t,r){return!this.createTime.isEqual(St.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=r,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=xn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=xn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=St.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof sn&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new sn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class wh{constructor(t,r){this.position=t,this.inclusive=r}}function pv(n,t,r){let a=0;for(let o=0;o<n.position.length;o++){const u=t[o],f=n.position[o];if(u.field.isKeyField()?a=vt.comparator(vt.fromName(f.referenceValue),r.key):a=so(f,r.data.field(u.field)),u.dir==="desc"&&(a*=-1),a!==0)break}return a}function mv(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let r=0;r<n.position.length;r++)if(!Ri(n.position[r],t.position[r]))return!1;return!0}/**
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
 */class nu{constructor(t,r="asc"){this.field=t,this.dir=r}}function gC(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class UE{}class De extends UE{constructor(t,r,a){super(),this.field=t,this.op=r,this.value=a}static create(t,r,a){return t.isKeyField()?r==="in"||r==="not-in"?this.createKeyFieldInFilter(t,r,a):new xC(t,r,a):r==="array-contains"?new EC(t,a):r==="in"?new bC(t,a):r==="not-in"?new wC(t,a):r==="array-contains-any"?new TC(t,a):new De(t,r,a)}static createKeyFieldInFilter(t,r,a){return r==="in"?new vC(t,a):new _C(t,a)}matches(t){const r=t.data.field(this.field);return this.op==="!="?r!==null&&r.nullValue===void 0&&this.matchesComparison(so(r,this.value)):r!==null&&na(this.value)===na(r)&&this.matchesComparison(so(r,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return wt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ri extends UE{constructor(t,r){super(),this.filters=t,this.op=r,this.Pe=null}static create(t,r){return new ri(t,r)}matches(t){return PE(this)?this.filters.find((r=>!r.matches(t)))===void 0:this.filters.find((r=>r.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,r)=>t.concat(r.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function PE(n){return n.op==="and"}function LE(n){return yC(n)&&PE(n)}function yC(n){for(const t of n.filters)if(t instanceof ri)return!1;return!0}function am(n){if(n instanceof De)return n.field.canonicalString()+n.op.toString()+oo(n.value);if(LE(n))return n.filters.map((t=>am(t))).join(",");{const t=n.filters.map((r=>am(r))).join(",");return`${n.op}(${t})`}}function zE(n,t){return n instanceof De?(function(a,o){return o instanceof De&&a.op===o.op&&a.field.isEqual(o.field)&&Ri(a.value,o.value)})(n,t):n instanceof ri?(function(a,o){return o instanceof ri&&a.op===o.op&&a.filters.length===o.filters.length?a.filters.reduce(((u,f,p)=>u&&zE(f,o.filters[p])),!0):!1})(n,t):void wt(19439)}function BE(n){return n instanceof De?(function(r){return`${r.field.canonicalString()} ${r.op} ${oo(r.value)}`})(n):n instanceof ri?(function(r){return r.op.toString()+" {"+r.getFilters().map(BE).join(" ,")+"}"})(n):"Filter"}class xC extends De{constructor(t,r,a){super(t,r,a),this.key=vt.fromName(a.referenceValue)}matches(t){const r=vt.comparator(t.key,this.key);return this.matchesComparison(r)}}class vC extends De{constructor(t,r){super(t,"in",r),this.keys=$E("in",r)}matches(t){return this.keys.some((r=>r.isEqual(t.key)))}}class _C extends De{constructor(t,r){super(t,"not-in",r),this.keys=$E("not-in",r)}matches(t){return!this.keys.some((r=>r.isEqual(t.key)))}}function $E(n,t){return(t.arrayValue?.values||[]).map((r=>vt.fromName(r.referenceValue)))}class EC extends De{constructor(t,r){super(t,"array-contains",r)}matches(t){const r=t.data.field(this.field);return tg(r)&&eu(r.arrayValue,this.value)}}class bC extends De{constructor(t,r){super(t,"in",r)}matches(t){const r=t.data.field(this.field);return r!==null&&eu(this.value.arrayValue,r)}}class wC extends De{constructor(t,r){super(t,"not-in",r)}matches(t){if(eu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const r=t.data.field(this.field);return r!==null&&r.nullValue===void 0&&!eu(this.value.arrayValue,r)}}class TC extends De{constructor(t,r){super(t,"array-contains-any",r)}matches(t){const r=t.data.field(this.field);return!(!tg(r)||!r.arrayValue.values)&&r.arrayValue.values.some((a=>eu(this.value.arrayValue,a)))}}/**
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
 */class SC{constructor(t,r=null,a=[],o=[],u=null,f=null,p=null){this.path=t,this.collectionGroup=r,this.orderBy=a,this.filters=o,this.limit=u,this.startAt=f,this.endAt=p,this.Te=null}}function gv(n,t=null,r=[],a=[],o=null,u=null,f=null){return new SC(n,t,r,a,o,u,f)}function eg(n){const t=Rt(n);if(t.Te===null){let r=t.path.canonicalString();t.collectionGroup!==null&&(r+="|cg:"+t.collectionGroup),r+="|f:",r+=t.filters.map((a=>am(a))).join(","),r+="|ob:",r+=t.orderBy.map((a=>(function(u){return u.field.canonicalString()+u.dir})(a))).join(","),$h(t.limit)||(r+="|l:",r+=t.limit),t.startAt&&(r+="|lb:",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((a=>oo(a))).join(",")),t.endAt&&(r+="|ub:",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((a=>oo(a))).join(",")),t.Te=r}return t.Te}function ng(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let r=0;r<n.orderBy.length;r++)if(!gC(n.orderBy[r],t.orderBy[r]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let r=0;r<n.filters.length;r++)if(!zE(n.filters[r],t.filters[r]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!mv(n.startAt,t.startAt)&&mv(n.endAt,t.endAt)}function sm(n){return vt.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(t,r=null,a=[],o=[],u=null,f="F",p=null,m=null){this.path=t,this.collectionGroup=r,this.explicitOrderBy=a,this.filters=o,this.limit=u,this.limitType=f,this.startAt=p,this.endAt=m,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function AC(n,t,r,a,o,u,f,p){return new Eo(n,t,r,a,o,u,f,p)}function ig(n){return new Eo(n)}function yv(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function FE(n){return n.collectionGroup!==null}function Bl(n){const t=Rt(n);if(t.Ie===null){t.Ie=[];const r=new Set;for(const u of t.explicitOrderBy)t.Ie.push(u),r.add(u.field.canonicalString());const a=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let p=new Pe(We.comparator);return f.filters.forEach((m=>{m.getFlattenedFilters().forEach((g=>{g.isInequality()&&(p=p.add(g.field))}))})),p})(t).forEach((u=>{r.has(u.canonicalString())||u.isKeyField()||t.Ie.push(new nu(u,a))})),r.has(We.keyField().canonicalString())||t.Ie.push(new nu(We.keyField(),a))}return t.Ie}function bi(n){const t=Rt(n);return t.Ee||(t.Ee=RC(t,Bl(n))),t.Ee}function RC(n,t){if(n.limitType==="F")return gv(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new nu(o.field,u)}));const r=n.endAt?new wh(n.endAt.position,n.endAt.inclusive):null,a=n.startAt?new wh(n.startAt.position,n.startAt.inclusive):null;return gv(n.path,n.collectionGroup,t,n.filters,n.limit,r,a)}}function om(n,t){const r=n.filters.concat([t]);return new Eo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),r,n.limit,n.limitType,n.startAt,n.endAt)}function lm(n,t,r){return new Eo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,r,n.startAt,n.endAt)}function qh(n,t){return ng(bi(n),bi(t))&&n.limitType===t.limitType}function qE(n){return`${eg(bi(n))}|lt:${n.limitType}`}function Hs(n){return`Query(target=${(function(r){let a=r.path.canonicalString();return r.collectionGroup!==null&&(a+=" collectionGroup="+r.collectionGroup),r.filters.length>0&&(a+=`, filters: [${r.filters.map((o=>BE(o))).join(", ")}]`),$h(r.limit)||(a+=", limit: "+r.limit),r.orderBy.length>0&&(a+=`, orderBy: [${r.orderBy.map((o=>(function(f){return`${f.field.canonicalString()} (${f.dir})`})(o))).join(", ")}]`),r.startAt&&(a+=", startAt: ",a+=r.startAt.inclusive?"b:":"a:",a+=r.startAt.position.map((o=>oo(o))).join(",")),r.endAt&&(a+=", endAt: ",a+=r.endAt.inclusive?"a:":"b:",a+=r.endAt.position.map((o=>oo(o))).join(",")),`Target(${a})`})(bi(n))}; limitType=${n.limitType})`}function Kh(n,t){return t.isFoundDocument()&&(function(a,o){const u=o.key.path;return a.collectionGroup!==null?o.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(u):vt.isDocumentKey(a.path)?a.path.isEqual(u):a.path.isImmediateParentOf(u)})(n,t)&&(function(a,o){for(const u of Bl(a))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(n,t)&&(function(a,o){for(const u of a.filters)if(!u.matches(o))return!1;return!0})(n,t)&&(function(a,o){return!(a.startAt&&!(function(f,p,m){const g=pv(f,p,m);return f.inclusive?g<=0:g<0})(a.startAt,Bl(a),o)||a.endAt&&!(function(f,p,m){const g=pv(f,p,m);return f.inclusive?g>=0:g>0})(a.endAt,Bl(a),o))})(n,t)}function CC(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function KE(n){return(t,r)=>{let a=!1;for(const o of Bl(n)){const u=IC(o,t,r);if(u!==0)return u;a=a||o.field.isKeyField()}return 0}}function IC(n,t,r){const a=n.field.isKeyField()?vt.comparator(t.key,r.key):(function(u,f,p){const m=f.data.field(u),g=p.data.field(u);return m!==null&&g!==null?so(m,g):wt(42886)})(n.field,t,r);switch(n.dir){case"asc":return a;case"desc":return-1*a;default:return wt(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(t,r){this.mapKeyFn=t,this.equalsFn=r,this.inner={},this.innerSize=0}get(t){const r=this.mapKeyFn(t),a=this.inner[r];if(a!==void 0){for(const[o,u]of a)if(this.equalsFn(o,t))return u}}has(t){return this.get(t)!==void 0}set(t,r){const a=this.mapKeyFn(t),o=this.inner[a];if(o===void 0)return this.inner[a]=[[t,r]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],t))return void(o[u]=[t,r]);o.push([t,r]),this.innerSize++}delete(t){const r=this.mapKeyFn(t),a=this.inner[r];if(a===void 0)return!1;for(let o=0;o<a.length;o++)if(this.equalsFn(a[o][0],t))return a.length===1?delete this.inner[r]:a.splice(o,1),this.innerSize--,!0;return!1}forEach(t){aa(this.inner,((r,a)=>{for(const[o,u]of a)t(o,u)}))}isEmpty(){return CE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC=new me(vt.comparator);function lr(){return jC}const HE=new me(vt.comparator);function Ol(...n){let t=HE;for(const r of n)t=t.insert(r.key,r);return t}function GE(n){let t=HE;return n.forEach(((r,a)=>t=t.insert(r,a.overlayedDocument))),t}function Ha(){return $l()}function YE(){return $l()}function $l(){return new Za((n=>n.toString()),((n,t)=>n.isEqual(t)))}const DC=new me(vt.comparator),NC=new Pe(vt.comparator);function Pt(...n){let t=NC;for(const r of n)t=t.add(r);return t}const MC=new Pe(Ut);function OC(){return MC}/**
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
 */function rg(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_h(t)?"-0":t}}function QE(n){return{integerValue:""+n}}function XE(n,t){return lC(t)?QE(t):rg(n,t)}/**
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
 */class Hh{constructor(){this._=void 0}}function VC(n,t,r){return n instanceof Th?(function(o,u){const f={fields:{[DE]:{stringValue:jE},[ME]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Jm(u)&&(u=Fh(u)),u&&(f.fields[NE]=u),{mapValue:f}})(r,t):n instanceof iu?ZE(n,t):n instanceof ru?JE(n,t):(function(o,u){const f=WE(o,u),p=xv(f)+xv(o.Ae);return rm(f)&&rm(o.Ae)?QE(p):rg(o.serializer,p)})(n,t)}function kC(n,t,r){return n instanceof iu?ZE(n,t):n instanceof ru?JE(n,t):r}function WE(n,t){return n instanceof au?(function(a){return rm(a)||(function(u){return!!u&&"doubleValue"in u})(a)})(t)?t:{integerValue:0}:null}class Th extends Hh{}class iu extends Hh{constructor(t){super(),this.elements=t}}function ZE(n,t){const r=t2(t);for(const a of n.elements)r.some((o=>Ri(o,a)))||r.push(a);return{arrayValue:{values:r}}}class ru extends Hh{constructor(t){super(),this.elements=t}}function JE(n,t){let r=t2(t);for(const a of n.elements)r=r.filter((o=>!Ri(o,a)));return{arrayValue:{values:r}}}class au extends Hh{constructor(t,r){super(),this.serializer=t,this.Ae=r}}function xv(n){return Se(n.integerValue||n.doubleValue)}function t2(n){return tg(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(t,r){this.field=t,this.transform=r}}function PC(n,t){return n.field.isEqual(t.field)&&(function(a,o){return a instanceof iu&&o instanceof iu||a instanceof ru&&o instanceof ru?ao(a.elements,o.elements,Ri):a instanceof au&&o instanceof au?Ri(a.Ae,o.Ae):a instanceof Th&&o instanceof Th})(n.transform,t.transform)}class LC{constructor(t,r){this.version=t,this.transformResults=r}}class wi{constructor(t,r){this.updateTime=t,this.exists=r}static none(){return new wi}static exists(t){return new wi(void 0,t)}static updateTime(t){return new wi(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function oh(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Gh{}function e2(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new i2(n.key,wi.none()):new uu(n.key,n.data,wi.none());{const r=n.data,a=xn.empty();let o=new Pe(We.comparator);for(let u of t.fields)if(!o.has(u)){let f=r.field(u);f===null&&u.length>1&&(u=u.popLast(),f=r.field(u)),f===null?a.delete(u):a.set(u,f),o=o.add(u)}return new sa(n.key,a,new In(o.toArray()),wi.none())}}function zC(n,t,r){n instanceof uu?(function(o,u,f){const p=o.value.clone(),m=_v(o.fieldTransforms,u,f.transformResults);p.setAll(m),u.convertToFoundDocument(f.version,p).setHasCommittedMutations()})(n,t,r):n instanceof sa?(function(o,u,f){if(!oh(o.precondition,u))return void u.convertToUnknownDocument(f.version);const p=_v(o.fieldTransforms,u,f.transformResults),m=u.data;m.setAll(n2(o)),m.setAll(p),u.convertToFoundDocument(f.version,m).setHasCommittedMutations()})(n,t,r):(function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()})(0,t,r)}function Fl(n,t,r,a){return n instanceof uu?(function(u,f,p,m){if(!oh(u.precondition,f))return p;const g=u.value.clone(),v=Ev(u.fieldTransforms,m,f);return g.setAll(v),f.convertToFoundDocument(f.version,g).setHasLocalMutations(),null})(n,t,r,a):n instanceof sa?(function(u,f,p,m){if(!oh(u.precondition,f))return p;const g=Ev(u.fieldTransforms,m,f),v=f.data;return v.setAll(n2(u)),v.setAll(g),f.convertToFoundDocument(f.version,v).setHasLocalMutations(),p===null?null:p.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((w=>w.field)))})(n,t,r,a):(function(u,f,p){return oh(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):p})(n,t,r)}function BC(n,t){let r=null;for(const a of n.fieldTransforms){const o=t.data.field(a.field),u=WE(a.transform,o||null);u!=null&&(r===null&&(r=xn.empty()),r.set(a.field,u))}return r||null}function vv(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(a,o){return a===void 0&&o===void 0||!(!a||!o)&&ao(a,o,((u,f)=>PC(u,f)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class uu extends Gh{constructor(t,r,a,o=[]){super(),this.key=t,this.value=r,this.precondition=a,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class sa extends Gh{constructor(t,r,a,o,u=[]){super(),this.key=t,this.data=r,this.fieldMask=a,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function n2(n){const t=new Map;return n.fieldMask.fields.forEach((r=>{if(!r.isEmpty()){const a=n.data.field(r);t.set(r,a)}})),t}function _v(n,t,r){const a=new Map;Gt(n.length===r.length,32656,{Re:r.length,Ve:n.length});for(let o=0;o<r.length;o++){const u=n[o],f=u.transform,p=t.data.field(u.field);a.set(u.field,kC(f,p,r[o]))}return a}function Ev(n,t,r){const a=new Map;for(const o of n){const u=o.transform,f=r.data.field(o.field);a.set(o.field,VC(u,f,t))}return a}class i2 extends Gh{constructor(t,r){super(),this.key=t,this.precondition=r,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $C extends Gh{constructor(t,r){super(),this.key=t,this.precondition=r,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(t,r,a,o){this.batchId=t,this.localWriteTime=r,this.baseMutations=a,this.mutations=o}applyToRemoteDocument(t,r){const a=r.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(t.key)&&zC(u,t,a[o])}}applyToLocalView(t,r){for(const a of this.baseMutations)a.key.isEqual(t.key)&&(r=Fl(a,t,r,this.localWriteTime));for(const a of this.mutations)a.key.isEqual(t.key)&&(r=Fl(a,t,r,this.localWriteTime));return r}applyToLocalDocumentSet(t,r){const a=YE();return this.mutations.forEach((o=>{const u=t.get(o.key),f=u.overlayedDocument;let p=this.applyToLocalView(f,u.mutatedFields);p=r.has(o.key)?null:p;const m=e2(f,p);m!==null&&a.set(o.key,m),f.isValidDocument()||f.convertToNoDocument(St.min())})),a}keys(){return this.mutations.reduce(((t,r)=>t.add(r.key)),Pt())}isEqual(t){return this.batchId===t.batchId&&ao(this.mutations,t.mutations,((r,a)=>vv(r,a)))&&ao(this.baseMutations,t.baseMutations,((r,a)=>vv(r,a)))}}class ag{constructor(t,r,a,o){this.batch=t,this.commitVersion=r,this.mutationResults=a,this.docVersions=o}static from(t,r,a){Gt(t.mutations.length===a.length,58842,{me:t.mutations.length,fe:a.length});let o=(function(){return DC})();const u=t.mutations;for(let f=0;f<u.length;f++)o=o.insert(u[f].key,a[f].version);return new ag(t,r,a,o)}}/**
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
 */let qC=class{constructor(t,r){this.largestBatchId=t,this.mutation=r}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class KC{constructor(t,r){this.count=t,this.unchangedNames=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie,Bt;function HC(n){switch(n){case nt.OK:return wt(64938);case nt.CANCELLED:case nt.UNKNOWN:case nt.DEADLINE_EXCEEDED:case nt.RESOURCE_EXHAUSTED:case nt.INTERNAL:case nt.UNAVAILABLE:case nt.UNAUTHENTICATED:return!1;case nt.INVALID_ARGUMENT:case nt.NOT_FOUND:case nt.ALREADY_EXISTS:case nt.PERMISSION_DENIED:case nt.FAILED_PRECONDITION:case nt.ABORTED:case nt.OUT_OF_RANGE:case nt.UNIMPLEMENTED:case nt.DATA_LOSS:return!0;default:return wt(15467,{code:n})}}function r2(n){if(n===void 0)return sr("GRPC error has no .code"),nt.UNKNOWN;switch(n){case Ie.OK:return nt.OK;case Ie.CANCELLED:return nt.CANCELLED;case Ie.UNKNOWN:return nt.UNKNOWN;case Ie.DEADLINE_EXCEEDED:return nt.DEADLINE_EXCEEDED;case Ie.RESOURCE_EXHAUSTED:return nt.RESOURCE_EXHAUSTED;case Ie.INTERNAL:return nt.INTERNAL;case Ie.UNAVAILABLE:return nt.UNAVAILABLE;case Ie.UNAUTHENTICATED:return nt.UNAUTHENTICATED;case Ie.INVALID_ARGUMENT:return nt.INVALID_ARGUMENT;case Ie.NOT_FOUND:return nt.NOT_FOUND;case Ie.ALREADY_EXISTS:return nt.ALREADY_EXISTS;case Ie.PERMISSION_DENIED:return nt.PERMISSION_DENIED;case Ie.FAILED_PRECONDITION:return nt.FAILED_PRECONDITION;case Ie.ABORTED:return nt.ABORTED;case Ie.OUT_OF_RANGE:return nt.OUT_OF_RANGE;case Ie.UNIMPLEMENTED:return nt.UNIMPLEMENTED;case Ie.DATA_LOSS:return nt.DATA_LOSS;default:return wt(39323,{code:n})}}(Bt=Ie||(Ie={}))[Bt.OK=0]="OK",Bt[Bt.CANCELLED=1]="CANCELLED",Bt[Bt.UNKNOWN=2]="UNKNOWN",Bt[Bt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Bt[Bt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Bt[Bt.NOT_FOUND=5]="NOT_FOUND",Bt[Bt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Bt[Bt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Bt[Bt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Bt[Bt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Bt[Bt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Bt[Bt.ABORTED=10]="ABORTED",Bt[Bt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Bt[Bt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Bt[Bt.INTERNAL=13]="INTERNAL",Bt[Bt.UNAVAILABLE=14]="UNAVAILABLE",Bt[Bt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function GC(){return new TextEncoder}/**
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
 */const YC=new Wr([4294967295,4294967295],0);function bv(n){const t=GC().encode(n),r=new yE;return r.update(t),new Uint8Array(r.digest())}function wv(n){const t=new DataView(n.buffer),r=t.getUint32(0,!0),a=t.getUint32(4,!0),o=t.getUint32(8,!0),u=t.getUint32(12,!0);return[new Wr([r,a],0),new Wr([o,u],0)]}class sg{constructor(t,r,a){if(this.bitmap=t,this.padding=r,this.hashCount=a,r<0||r>=8)throw new Vl(`Invalid padding: ${r}`);if(a<0)throw new Vl(`Invalid hash count: ${a}`);if(t.length>0&&this.hashCount===0)throw new Vl(`Invalid hash count: ${a}`);if(t.length===0&&r!==0)throw new Vl(`Invalid padding when bitmap length is 0: ${r}`);this.ge=8*t.length-r,this.pe=Wr.fromNumber(this.ge)}ye(t,r,a){let o=t.add(r.multiply(Wr.fromNumber(a)));return o.compare(YC)===1&&(o=new Wr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const r=bv(t),[a,o]=wv(r);for(let u=0;u<this.hashCount;u++){const f=this.ye(a,o,u);if(!this.we(f))return!1}return!0}static create(t,r,a){const o=t%8==0?0:8-t%8,u=new Uint8Array(Math.ceil(t/8)),f=new sg(u,o,r);return a.forEach((p=>f.insert(p))),f}insert(t){if(this.ge===0)return;const r=bv(t),[a,o]=wv(r);for(let u=0;u<this.hashCount;u++){const f=this.ye(a,o,u);this.Se(f)}}Se(t){const r=Math.floor(t/8),a=t%8;this.bitmap[r]|=1<<a}}class Vl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(t,r,a,o,u){this.snapshotVersion=t,this.targetChanges=r,this.targetMismatches=a,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(t,r,a){const o=new Map;return o.set(t,cu.createSynthesizedTargetChangeForCurrentChange(t,r,a)),new Yh(St.min(),o,new me(Ut),lr(),Pt())}}class cu{constructor(t,r,a,o,u){this.resumeToken=t,this.current=r,this.addedDocuments=a,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(t,r,a){return new cu(a,r,Pt(),Pt(),Pt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(t,r,a,o){this.be=t,this.removedTargetIds=r,this.key=a,this.De=o}}class a2{constructor(t,r){this.targetId=t,this.Ce=r}}class s2{constructor(t,r,a=Ze.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=r,this.resumeToken=a,this.cause=o}}class Tv{constructor(){this.ve=0,this.Fe=Sv(),this.Me=Ze.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=Pt(),r=Pt(),a=Pt();return this.Fe.forEach(((o,u)=>{switch(u){case 0:t=t.add(o);break;case 2:r=r.add(o);break;case 1:a=a.add(o);break;default:wt(38017,{changeType:u})}})),new cu(this.Me,this.xe,t,r,a)}qe(){this.Oe=!1,this.Fe=Sv()}Qe(t,r){this.Oe=!0,this.Fe=this.Fe.insert(t,r)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,Gt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class QC{constructor(t){this.Ge=t,this.ze=new Map,this.je=lr(),this.Je=Hc(),this.He=Hc(),this.Ye=new me(Ut)}Ze(t){for(const r of t.be)t.De&&t.De.isFoundDocument()?this.Xe(r,t.De):this.et(r,t.key,t.De);for(const r of t.removedTargetIds)this.et(r,t.key,t.De)}tt(t){this.forEachTarget(t,(r=>{const a=this.nt(r);switch(t.state){case 0:this.rt(r)&&a.Le(t.resumeToken);break;case 1:a.Ke(),a.Ne||a.qe(),a.Le(t.resumeToken);break;case 2:a.Ke(),a.Ne||this.removeTarget(r);break;case 3:this.rt(r)&&(a.We(),a.Le(t.resumeToken));break;case 4:this.rt(r)&&(this.it(r),a.Le(t.resumeToken));break;default:wt(56790,{state:t.state})}}))}forEachTarget(t,r){t.targetIds.length>0?t.targetIds.forEach(r):this.ze.forEach(((a,o)=>{this.rt(o)&&r(o)}))}st(t){const r=t.targetId,a=t.Ce.count,o=this.ot(r);if(o){const u=o.target;if(sm(u))if(a===0){const f=new vt(u.path);this.et(r,f,sn.newNoDocument(f,St.min()))}else Gt(a===1,20013,{expectedCount:a});else{const f=this._t(r);if(f!==a){const p=this.ut(t),m=p?this.ct(p,t,f):1;if(m!==0){this.it(r);const g=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(r,g)}}}}}ut(t){const r=t.Ce.unchangedNames;if(!r||!r.bits)return null;const{bits:{bitmap:a="",padding:o=0},hashCount:u=0}=r;let f,p;try{f=ea(a).toUint8Array()}catch(m){if(m instanceof IE)return ro("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{p=new sg(f,o,u)}catch(m){return ro(m instanceof Vl?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return p.ge===0?null:p}ct(t,r,a){return r.Ce.count===a-this.Pt(t,r.targetId)?0:2}Pt(t,r){const a=this.Ge.getRemoteKeysForTarget(r);let o=0;return a.forEach((u=>{const f=this.Ge.ht(),p=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;t.mightContain(p)||(this.et(r,u,null),o++)})),o}Tt(t){const r=new Map;this.ze.forEach(((u,f)=>{const p=this.ot(f);if(p){if(u.current&&sm(p.target)){const m=new vt(p.target.path);this.It(m).has(f)||this.Et(f,m)||this.et(f,m,sn.newNoDocument(m,t))}u.Be&&(r.set(f,u.ke()),u.qe())}}));let a=Pt();this.He.forEach(((u,f)=>{let p=!0;f.forEachWhile((m=>{const g=this.ot(m);return!g||g.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)})),p&&(a=a.add(u))})),this.je.forEach(((u,f)=>f.setReadTime(t)));const o=new Yh(t,r,this.Ye,this.je,a);return this.je=lr(),this.Je=Hc(),this.He=Hc(),this.Ye=new me(Ut),o}Xe(t,r){if(!this.rt(t))return;const a=this.Et(t,r.key)?2:0;this.nt(t).Qe(r.key,a),this.je=this.je.insert(r.key,r),this.Je=this.Je.insert(r.key,this.It(r.key).add(t)),this.He=this.He.insert(r.key,this.dt(r.key).add(t))}et(t,r,a){if(!this.rt(t))return;const o=this.nt(t);this.Et(t,r)?o.Qe(r,1):o.$e(r),this.He=this.He.insert(r,this.dt(r).delete(t)),this.He=this.He.insert(r,this.dt(r).add(t)),a&&(this.je=this.je.insert(r,a))}removeTarget(t){this.ze.delete(t)}_t(t){const r=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+r.addedDocuments.size-r.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let r=this.ze.get(t);return r||(r=new Tv,this.ze.set(t,r)),r}dt(t){let r=this.He.get(t);return r||(r=new Pe(Ut),this.He=this.He.insert(t,r)),r}It(t){let r=this.Je.get(t);return r||(r=new Pe(Ut),this.Je=this.Je.insert(t,r)),r}rt(t){const r=this.ot(t)!==null;return r||pt("WatchChangeAggregator","Detected inactive target",t),r}ot(t){const r=this.ze.get(t);return r&&r.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Tv),this.Ge.getRemoteKeysForTarget(t).forEach((r=>{this.et(t,r,null)}))}Et(t,r){return this.Ge.getRemoteKeysForTarget(t).has(r)}}function Hc(){return new me(vt.comparator)}function Sv(){return new me(vt.comparator)}const XC={asc:"ASCENDING",desc:"DESCENDING"},WC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ZC={and:"AND",or:"OR"};class JC{constructor(t,r){this.databaseId=t,this.useProto3Json=r}}function um(n,t){return n.useProto3Json||$h(t)?t:{value:t}}function Sh(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function o2(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function tI(n,t){return Sh(n,t.toTimestamp())}function Ti(n){return Gt(!!n,49232),St.fromTimestamp((function(r){const a=ta(r);return new le(a.seconds,a.nanos)})(n))}function og(n,t){return cm(n,t).canonicalString()}function cm(n,t){const r=(function(o){return new ae(["projects",o.projectId,"databases",o.database])})(n).child("documents");return t===void 0?r:r.child(t)}function l2(n){const t=ae.fromString(n);return Gt(d2(t),10190,{key:t.toString()}),t}function hm(n,t){return og(n.databaseId,t.path)}function Rp(n,t){const r=l2(t);if(r.get(1)!==n.databaseId.projectId)throw new ft(nt.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+n.databaseId.projectId);if(r.get(3)!==n.databaseId.database)throw new ft(nt.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+n.databaseId.database);return new vt(c2(r))}function u2(n,t){return og(n.databaseId,t)}function eI(n){const t=l2(n);return t.length===4?ae.emptyPath():c2(t)}function fm(n){return new ae(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function c2(n){return Gt(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Av(n,t,r){return{name:hm(n,t),fields:r.value.mapValue.fields}}function nI(n,t){let r;if("targetChange"in t){t.targetChange;const a=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:wt(39313,{state:g})})(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],u=(function(g,v){return g.useProto3Json?(Gt(v===void 0||typeof v=="string",58123),Ze.fromBase64String(v||"")):(Gt(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),Ze.fromUint8Array(v||new Uint8Array))})(n,t.targetChange.resumeToken),f=t.targetChange.cause,p=f&&(function(g){const v=g.code===void 0?nt.UNKNOWN:r2(g.code);return new ft(v,g.message||"")})(f);r=new s2(a,o,u,p||null)}else if("documentChange"in t){t.documentChange;const a=t.documentChange;a.document,a.document.name,a.document.updateTime;const o=Rp(n,a.document.name),u=Ti(a.document.updateTime),f=a.document.createTime?Ti(a.document.createTime):St.min(),p=new xn({mapValue:{fields:a.document.fields}}),m=sn.newFoundDocument(o,u,f,p),g=a.targetIds||[],v=a.removedTargetIds||[];r=new lh(g,v,m.key,m)}else if("documentDelete"in t){t.documentDelete;const a=t.documentDelete;a.document;const o=Rp(n,a.document),u=a.readTime?Ti(a.readTime):St.min(),f=sn.newNoDocument(o,u),p=a.removedTargetIds||[];r=new lh([],p,f.key,f)}else if("documentRemove"in t){t.documentRemove;const a=t.documentRemove;a.document;const o=Rp(n,a.document),u=a.removedTargetIds||[];r=new lh([],u,o,null)}else{if(!("filter"in t))return wt(11601,{Rt:t});{t.filter;const a=t.filter;a.targetId;const{count:o=0,unchangedNames:u}=a,f=new KC(o,u),p=a.targetId;r=new a2(p,f)}}return r}function iI(n,t){let r;if(t instanceof uu)r={update:Av(n,t.key,t.value)};else if(t instanceof i2)r={delete:hm(n,t.key)};else if(t instanceof sa)r={update:Av(n,t.key,t.data),updateMask:fI(t.fieldMask)};else{if(!(t instanceof $C))return wt(16599,{Vt:t.type});r={verify:hm(n,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map((a=>(function(u,f){const p=f.transform;if(p instanceof Th)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof iu)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof ru)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof au)return{fieldPath:f.field.canonicalString(),increment:p.Ae};throw wt(20930,{transform:f.transform})})(0,a)))),t.precondition.isNone||(r.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:tI(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:wt(27497)})(n,t.precondition)),r}function rI(n,t){return n&&n.length>0?(Gt(t!==void 0,14353),n.map((r=>(function(o,u){let f=o.updateTime?Ti(o.updateTime):Ti(u);return f.isEqual(St.min())&&(f=Ti(u)),new LC(f,o.transformResults||[])})(r,t)))):[]}function aI(n,t){return{documents:[u2(n,t.path)]}}function sI(n,t){const r={structuredQuery:{}},a=t.path;let o;t.collectionGroup!==null?(o=a,r.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=a.popLast(),r.structuredQuery.from=[{collectionId:a.lastSegment()}]),r.parent=u2(n,o);const u=(function(g){if(g.length!==0)return f2(ri.create(g,"and"))})(t.filters);u&&(r.structuredQuery.where=u);const f=(function(g){if(g.length!==0)return g.map((v=>(function(S){return{field:Gs(S.field),direction:uI(S.dir)}})(v)))})(t.orderBy);f&&(r.structuredQuery.orderBy=f);const p=um(n,t.limit);return p!==null&&(r.structuredQuery.limit=p),t.startAt&&(r.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(t.startAt)),t.endAt&&(r.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(t.endAt)),{ft:r,parent:o}}function oI(n){let t=eI(n.parent);const r=n.structuredQuery,a=r.from?r.from.length:0;let o=null;if(a>0){Gt(a===1,65062);const v=r.from[0];v.allDescendants?o=v.collectionId:t=t.child(v.collectionId)}let u=[];r.where&&(u=(function(w){const S=h2(w);return S instanceof ri&&LE(S)?S.getFilters():[S]})(r.where));let f=[];r.orderBy&&(f=(function(w){return w.map((S=>(function(O){return new nu(Ys(O.field),(function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(O.direction))})(S)))})(r.orderBy));let p=null;r.limit&&(p=(function(w){let S;return S=typeof w=="object"?w.value:w,$h(S)?null:S})(r.limit));let m=null;r.startAt&&(m=(function(w){const S=!!w.before,R=w.values||[];return new wh(R,S)})(r.startAt));let g=null;return r.endAt&&(g=(function(w){const S=!w.before,R=w.values||[];return new wh(R,S)})(r.endAt)),AC(t,o,f,u,p,"F",m,g)}function lI(n,t){const r=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return wt(28987,{purpose:o})}})(t.purpose);return r==null?null:{"goog-listen-tags":r}}function h2(n){return n.unaryFilter!==void 0?(function(r){switch(r.unaryFilter.op){case"IS_NAN":const a=Ys(r.unaryFilter.field);return De.create(a,"==",{doubleValue:NaN});case"IS_NULL":const o=Ys(r.unaryFilter.field);return De.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Ys(r.unaryFilter.field);return De.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Ys(r.unaryFilter.field);return De.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return wt(61313);default:return wt(60726)}})(n):n.fieldFilter!==void 0?(function(r){return De.create(Ys(r.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return wt(58110);default:return wt(50506)}})(r.fieldFilter.op),r.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(r){return ri.create(r.compositeFilter.filters.map((a=>h2(a))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return wt(1026)}})(r.compositeFilter.op))})(n):wt(30097,{filter:n})}function uI(n){return XC[n]}function cI(n){return WC[n]}function hI(n){return ZC[n]}function Gs(n){return{fieldPath:n.canonicalString()}}function Ys(n){return We.fromServerFormat(n.fieldPath)}function f2(n){return n instanceof De?(function(r){if(r.op==="=="){if(dv(r.value))return{unaryFilter:{field:Gs(r.field),op:"IS_NAN"}};if(fv(r.value))return{unaryFilter:{field:Gs(r.field),op:"IS_NULL"}}}else if(r.op==="!="){if(dv(r.value))return{unaryFilter:{field:Gs(r.field),op:"IS_NOT_NAN"}};if(fv(r.value))return{unaryFilter:{field:Gs(r.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gs(r.field),op:cI(r.op),value:r.value}}})(n):n instanceof ri?(function(r){const a=r.getFilters().map((o=>f2(o)));return a.length===1?a[0]:{compositeFilter:{op:hI(r.op),filters:a}}})(n):wt(54877,{filter:n})}function fI(n){const t=[];return n.fields.forEach((r=>t.push(r.canonicalString()))),{fieldPaths:t}}function d2(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(t,r,a,o,u=St.min(),f=St.min(),p=Ze.EMPTY_BYTE_STRING,m=null){this.target=t,this.targetId=r,this.purpose=a,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=p,this.expectedCount=m}withSequenceNumber(t){return new Yr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,r){return new Yr(this.target,this.targetId,this.purpose,this.sequenceNumber,r,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(t){this.yt=t}}function pI(n){const t=oI({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?lm(t,t.limit,"L"):t}/**
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
 */class mI{constructor(){this.Cn=new gI}addToCollectionParentIndex(t,r){return this.Cn.add(r),st.resolve()}getCollectionParents(t,r){return st.resolve(this.Cn.getEntries(r))}addFieldIndex(t,r){return st.resolve()}deleteFieldIndex(t,r){return st.resolve()}deleteAllFieldIndexes(t){return st.resolve()}createTargetIndexes(t,r){return st.resolve()}getDocumentsMatchingTarget(t,r){return st.resolve(null)}getIndexType(t,r){return st.resolve(0)}getFieldIndexes(t,r){return st.resolve([])}getNextCollectionGroupToUpdate(t){return st.resolve(null)}getMinOffset(t,r){return st.resolve(Jr.min())}getMinOffsetFromCollectionGroup(t,r){return st.resolve(Jr.min())}updateCollectionGroup(t,r,a){return st.resolve()}updateIndexEntries(t,r){return st.resolve()}}class gI{constructor(){this.index={}}add(t){const r=t.lastSegment(),a=t.popLast(),o=this.index[r]||new Pe(ae.comparator),u=!o.has(a);return this.index[r]=o.add(a),u}has(t){const r=t.lastSegment(),a=t.popLast(),o=this.index[r];return o&&o.has(a)}getEntries(t){return(this.index[t]||new Pe(ae.comparator)).toArray()}}/**
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
 */const Rv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},p2=41943040;class yn{static withCacheSize(t){return new yn(t,yn.DEFAULT_COLLECTION_PERCENTILE,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,r,a){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=r,this.maximumSequenceNumbersToCollect=a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yn.DEFAULT_COLLECTION_PERCENTILE=10,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yn.DEFAULT=new yn(p2,yn.DEFAULT_COLLECTION_PERCENTILE,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yn.DISABLED=new yn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new lo(0)}static cr(){return new lo(-1)}}/**
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
 */const Cv="LruGarbageCollector",yI=1048576;function Iv([n,t],[r,a]){const o=Ut(n,r);return o===0?Ut(t,a):o}class xI{constructor(t){this.Ir=t,this.buffer=new Pe(Iv),this.Er=0}dr(){return++this.Er}Ar(t){const r=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(r);else{const a=this.buffer.last();Iv(r,a)<0&&(this.buffer=this.buffer.delete(a).add(r))}}get maxValue(){return this.buffer.last()[0]}}class vI{constructor(t,r,a){this.garbageCollector=t,this.asyncQueue=r,this.localStore=a,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){pt(Cv,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(r){_o(r)?pt(Cv,"Ignoring IndexedDB error during garbage collection: ",r):await vo(r)}await this.Vr(3e5)}))}}class _I{constructor(t,r){this.mr=t,this.params=r}calculateTargetCount(t,r){return this.mr.gr(t).next((a=>Math.floor(r/100*a)))}nthSequenceNumber(t,r){if(r===0)return st.resolve(Bh.ce);const a=new xI(r);return this.mr.forEachTarget(t,(o=>a.Ar(o.sequenceNumber))).next((()=>this.mr.pr(t,(o=>a.Ar(o))))).next((()=>a.maxValue))}removeTargets(t,r,a){return this.mr.removeTargets(t,r,a)}removeOrphanedDocuments(t,r){return this.mr.removeOrphanedDocuments(t,r)}collect(t,r){return this.params.cacheSizeCollectionThreshold===-1?(pt("LruGarbageCollector","Garbage collection skipped; disabled"),st.resolve(Rv)):this.getCacheSize(t).next((a=>a<this.params.cacheSizeCollectionThreshold?(pt("LruGarbageCollector",`Garbage collection skipped; Cache size ${a} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Rv):this.yr(t,r)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,r){let a,o,u,f,p,m,g;const v=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((w=>(w>this.params.maximumSequenceNumbersToCollect?(pt("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),o=this.params.maximumSequenceNumbersToCollect):o=w,f=Date.now(),this.nthSequenceNumber(t,o)))).next((w=>(a=w,p=Date.now(),this.removeTargets(t,a,r)))).next((w=>(u=w,m=Date.now(),this.removeOrphanedDocuments(t,a)))).next((w=>(g=Date.now(),Ks()<=$t.DEBUG&&pt("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-v}ms
	Determined least recently used ${o} in `+(p-f)+`ms
	Removed ${u} targets in `+(m-p)+`ms
	Removed ${w} documents in `+(g-m)+`ms
Total Duration: ${g-v}ms`),st.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:w}))))}}function EI(n,t){return new _I(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(){this.changes=new Za((t=>t.toString()),((t,r)=>t.isEqual(r))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,r){this.assertNotApplied(),this.changes.set(t,sn.newInvalidDocument(t).setReadTime(r))}getEntry(t,r){this.assertNotApplied();const a=this.changes.get(r);return a!==void 0?st.resolve(a):this.getFromCache(t,r)}getEntries(t,r){return this.getAllFromCache(t,r)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class wI{constructor(t,r){this.overlayedDocument=t,this.mutatedFields=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(t,r,a,o){this.remoteDocumentCache=t,this.mutationQueue=r,this.documentOverlayCache=a,this.indexManager=o}getDocument(t,r){let a=null;return this.documentOverlayCache.getOverlay(t,r).next((o=>(a=o,this.remoteDocumentCache.getEntry(t,r)))).next((o=>(a!==null&&Fl(a.mutation,o,In.empty(),le.now()),o)))}getDocuments(t,r){return this.remoteDocumentCache.getEntries(t,r).next((a=>this.getLocalViewOfDocuments(t,a,Pt()).next((()=>a))))}getLocalViewOfDocuments(t,r,a=Pt()){const o=Ha();return this.populateOverlays(t,o,r).next((()=>this.computeViews(t,r,o,a).next((u=>{let f=Ol();return u.forEach(((p,m)=>{f=f.insert(p,m.overlayedDocument)})),f}))))}getOverlayedDocuments(t,r){const a=Ha();return this.populateOverlays(t,a,r).next((()=>this.computeViews(t,r,a,Pt())))}populateOverlays(t,r,a){const o=[];return a.forEach((u=>{r.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(t,o).next((u=>{u.forEach(((f,p)=>{r.set(f,p)}))}))}computeViews(t,r,a,o){let u=lr();const f=$l(),p=(function(){return $l()})();return r.forEach(((m,g)=>{const v=a.get(g.key);o.has(g.key)&&(v===void 0||v.mutation instanceof sa)?u=u.insert(g.key,g):v!==void 0?(f.set(g.key,v.mutation.getFieldMask()),Fl(v.mutation,g,v.mutation.getFieldMask(),le.now())):f.set(g.key,In.empty())})),this.recalculateAndSaveOverlays(t,u).next((m=>(m.forEach(((g,v)=>f.set(g,v))),r.forEach(((g,v)=>p.set(g,new wI(v,f.get(g)??null)))),p)))}recalculateAndSaveOverlays(t,r){const a=$l();let o=new me(((f,p)=>f-p)),u=Pt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,r).next((f=>{for(const p of f)p.keys().forEach((m=>{const g=r.get(m);if(g===null)return;let v=a.get(m)||In.empty();v=p.applyToLocalView(g,v),a.set(m,v);const w=(o.get(p.batchId)||Pt()).add(m);o=o.insert(p.batchId,w)}))})).next((()=>{const f=[],p=o.getReverseIterator();for(;p.hasNext();){const m=p.getNext(),g=m.key,v=m.value,w=YE();v.forEach((S=>{if(!u.has(S)){const R=e2(r.get(S),a.get(S));R!==null&&w.set(S,R),u=u.add(S)}})),f.push(this.documentOverlayCache.saveOverlays(t,g,w))}return st.waitFor(f)})).next((()=>a))}recalculateAndSaveOverlaysForDocumentKeys(t,r){return this.remoteDocumentCache.getEntries(t,r).next((a=>this.recalculateAndSaveOverlays(t,a)))}getDocumentsMatchingQuery(t,r,a,o){return(function(f){return vt.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0})(r)?this.getDocumentsMatchingDocumentQuery(t,r.path):FE(r)?this.getDocumentsMatchingCollectionGroupQuery(t,r,a,o):this.getDocumentsMatchingCollectionQuery(t,r,a,o)}getNextDocuments(t,r,a,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,r,a,o).next((u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,r,a.largestBatchId,o-u.size):st.resolve(Ha());let p=Zl,m=u;return f.next((g=>st.forEach(g,((v,w)=>(p<w.largestBatchId&&(p=w.largestBatchId),u.get(v)?st.resolve():this.remoteDocumentCache.getEntry(t,v).next((S=>{m=m.insert(v,S)}))))).next((()=>this.populateOverlays(t,g,u))).next((()=>this.computeViews(t,m,g,Pt()))).next((v=>({batchId:p,changes:GE(v)})))))}))}getDocumentsMatchingDocumentQuery(t,r){return this.getDocument(t,new vt(r)).next((a=>{let o=Ol();return a.isFoundDocument()&&(o=o.insert(a.key,a)),o}))}getDocumentsMatchingCollectionGroupQuery(t,r,a,o){const u=r.collectionGroup;let f=Ol();return this.indexManager.getCollectionParents(t,u).next((p=>st.forEach(p,(m=>{const g=(function(w,S){return new Eo(S,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)})(r,m.child(u));return this.getDocumentsMatchingCollectionQuery(t,g,a,o).next((v=>{v.forEach(((w,S)=>{f=f.insert(w,S)}))}))})).next((()=>f))))}getDocumentsMatchingCollectionQuery(t,r,a,o){let u;return this.documentOverlayCache.getOverlaysForCollection(t,r.path,a.largestBatchId).next((f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(t,r,a,u,o)))).next((f=>{u.forEach(((m,g)=>{const v=g.getKey();f.get(v)===null&&(f=f.insert(v,sn.newInvalidDocument(v)))}));let p=Ol();return f.forEach(((m,g)=>{const v=u.get(m);v!==void 0&&Fl(v.mutation,g,In.empty(),le.now()),Kh(r,g)&&(p=p.insert(m,g))})),p}))}}/**
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
 */class SI{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,r){return st.resolve(this.Lr.get(r))}saveBundleMetadata(t,r){return this.Lr.set(r.id,(function(o){return{id:o.id,version:o.version,createTime:Ti(o.createTime)}})(r)),st.resolve()}getNamedQuery(t,r){return st.resolve(this.kr.get(r))}saveNamedQuery(t,r){return this.kr.set(r.name,(function(o){return{name:o.name,query:pI(o.bundledQuery),readTime:Ti(o.readTime)}})(r)),st.resolve()}}/**
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
 */class AI{constructor(){this.overlays=new me(vt.comparator),this.qr=new Map}getOverlay(t,r){return st.resolve(this.overlays.get(r))}getOverlays(t,r){const a=Ha();return st.forEach(r,(o=>this.getOverlay(t,o).next((u=>{u!==null&&a.set(o,u)})))).next((()=>a))}saveOverlays(t,r,a){return a.forEach(((o,u)=>{this.St(t,r,u)})),st.resolve()}removeOverlaysForBatchId(t,r,a){const o=this.qr.get(a);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.qr.delete(a)),st.resolve()}getOverlaysForCollection(t,r,a){const o=Ha(),u=r.length+1,f=new vt(r.child("")),p=this.overlays.getIteratorFrom(f);for(;p.hasNext();){const m=p.getNext().value,g=m.getKey();if(!r.isPrefixOf(g.path))break;g.path.length===u&&m.largestBatchId>a&&o.set(m.getKey(),m)}return st.resolve(o)}getOverlaysForCollectionGroup(t,r,a,o){let u=new me(((g,v)=>g-v));const f=this.overlays.getIterator();for(;f.hasNext();){const g=f.getNext().value;if(g.getKey().getCollectionGroup()===r&&g.largestBatchId>a){let v=u.get(g.largestBatchId);v===null&&(v=Ha(),u=u.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const p=Ha(),m=u.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach(((g,v)=>p.set(g,v))),!(p.size()>=o)););return st.resolve(p)}St(t,r,a){const o=this.overlays.get(a.key);if(o!==null){const f=this.qr.get(o.largestBatchId).delete(a.key);this.qr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(a.key,new qC(r,a));let u=this.qr.get(r);u===void 0&&(u=Pt(),this.qr.set(r,u)),this.qr.set(r,u.add(a.key))}}/**
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
 */class RI{constructor(){this.sessionToken=Ze.EMPTY_BYTE_STRING}getSessionToken(t){return st.resolve(this.sessionToken)}setSessionToken(t,r){return this.sessionToken=r,st.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(){this.Qr=new Pe(qe.$r),this.Ur=new Pe(qe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,r){const a=new qe(t,r);this.Qr=this.Qr.add(a),this.Ur=this.Ur.add(a)}Wr(t,r){t.forEach((a=>this.addReference(a,r)))}removeReference(t,r){this.Gr(new qe(t,r))}zr(t,r){t.forEach((a=>this.removeReference(a,r)))}jr(t){const r=new vt(new ae([])),a=new qe(r,t),o=new qe(r,t+1),u=[];return this.Ur.forEachInRange([a,o],(f=>{this.Gr(f),u.push(f.key)})),u}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const r=new vt(new ae([])),a=new qe(r,t),o=new qe(r,t+1);let u=Pt();return this.Ur.forEachInRange([a,o],(f=>{u=u.add(f.key)})),u}containsKey(t){const r=new qe(t,0),a=this.Qr.firstAfterOrEqual(r);return a!==null&&t.isEqual(a.key)}}class qe{constructor(t,r){this.key=t,this.Yr=r}static $r(t,r){return vt.comparator(t.key,r.key)||Ut(t.Yr,r.Yr)}static Kr(t,r){return Ut(t.Yr,r.Yr)||vt.comparator(t.key,r.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(t,r){this.indexManager=t,this.referenceDelegate=r,this.mutationQueue=[],this.tr=1,this.Zr=new Pe(qe.$r)}checkEmpty(t){return st.resolve(this.mutationQueue.length===0)}addMutationBatch(t,r,a,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new FC(u,r,a,o);this.mutationQueue.push(f);for(const p of o)this.Zr=this.Zr.add(new qe(p.key,u)),this.indexManager.addToCollectionParentIndex(t,p.key.path.popLast());return st.resolve(f)}lookupMutationBatch(t,r){return st.resolve(this.Xr(r))}getNextMutationBatchAfterBatchId(t,r){const a=r+1,o=this.ei(a),u=o<0?0:o;return st.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return st.resolve(this.mutationQueue.length===0?Zm:this.tr-1)}getAllMutationBatches(t){return st.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,r){const a=new qe(r,0),o=new qe(r,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([a,o],(f=>{const p=this.Xr(f.Yr);u.push(p)})),st.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(t,r){let a=new Pe(Ut);return r.forEach((o=>{const u=new qe(o,0),f=new qe(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,f],(p=>{a=a.add(p.Yr)}))})),st.resolve(this.ti(a))}getAllMutationBatchesAffectingQuery(t,r){const a=r.path,o=a.length+1;let u=a;vt.isDocumentKey(u)||(u=u.child(""));const f=new qe(new vt(u),0);let p=new Pe(Ut);return this.Zr.forEachWhile((m=>{const g=m.key.path;return!!a.isPrefixOf(g)&&(g.length===o&&(p=p.add(m.Yr)),!0)}),f),st.resolve(this.ti(p))}ti(t){const r=[];return t.forEach((a=>{const o=this.Xr(a);o!==null&&r.push(o)})),r}removeMutationBatch(t,r){Gt(this.ni(r.batchId,"removed")===0,55003),this.mutationQueue.shift();let a=this.Zr;return st.forEach(r.mutations,(o=>{const u=new qe(o.key,r.batchId);return a=a.delete(u),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)})).next((()=>{this.Zr=a}))}ir(t){}containsKey(t,r){const a=new qe(r,0),o=this.Zr.firstAfterOrEqual(a);return st.resolve(r.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,st.resolve()}ni(t,r){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const r=this.ei(t);return r<0||r>=this.mutationQueue.length?null:this.mutationQueue[r]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(t){this.ri=t,this.docs=(function(){return new me(vt.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,r){const a=r.key,o=this.docs.get(a),u=o?o.size:0,f=this.ri(r);return this.docs=this.docs.insert(a,{document:r.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(t,a.path.popLast())}removeEntry(t){const r=this.docs.get(t);r&&(this.docs=this.docs.remove(t),this.size-=r.size)}getEntry(t,r){const a=this.docs.get(r);return st.resolve(a?a.document.mutableCopy():sn.newInvalidDocument(r))}getEntries(t,r){let a=lr();return r.forEach((o=>{const u=this.docs.get(o);a=a.insert(o,u?u.document.mutableCopy():sn.newInvalidDocument(o))})),st.resolve(a)}getDocumentsMatchingQuery(t,r,a,o){let u=lr();const f=r.path,p=new vt(f.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(p);for(;m.hasNext();){const{key:g,value:{document:v}}=m.getNext();if(!f.isPrefixOf(g.path))break;g.path.length>f.length+1||rC(iC(v),a)<=0||(o.has(v.key)||Kh(r,v))&&(u=u.insert(v.key,v.mutableCopy()))}return st.resolve(u)}getAllFromCollectionGroup(t,r,a,o){wt(9500)}ii(t,r){return st.forEach(this.docs,(a=>r(a)))}newChangeBuffer(t){return new jI(this)}getSize(t){return st.resolve(this.size)}}class jI extends bI{constructor(t){super(),this.Nr=t}applyChanges(t){const r=[];return this.changes.forEach(((a,o)=>{o.isValidDocument()?r.push(this.Nr.addEntry(t,o)):this.Nr.removeEntry(a)})),st.waitFor(r)}getFromCache(t,r){return this.Nr.getEntry(t,r)}getAllFromCache(t,r){return this.Nr.getEntries(t,r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(t){this.persistence=t,this.si=new Za((r=>eg(r)),ng),this.lastRemoteSnapshotVersion=St.min(),this.highestTargetId=0,this.oi=0,this._i=new lg,this.targetCount=0,this.ai=lo.ur()}forEachTarget(t,r){return this.si.forEach(((a,o)=>r(o))),st.resolve()}getLastRemoteSnapshotVersion(t){return st.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return st.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),st.resolve(this.highestTargetId)}setTargetsMetadata(t,r,a){return a&&(this.lastRemoteSnapshotVersion=a),r>this.oi&&(this.oi=r),st.resolve()}Pr(t){this.si.set(t.target,t);const r=t.targetId;r>this.highestTargetId&&(this.ai=new lo(r),this.highestTargetId=r),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,r){return this.Pr(r),this.targetCount+=1,st.resolve()}updateTargetData(t,r){return this.Pr(r),st.resolve()}removeTargetData(t,r){return this.si.delete(r.target),this._i.jr(r.targetId),this.targetCount-=1,st.resolve()}removeTargets(t,r,a){let o=0;const u=[];return this.si.forEach(((f,p)=>{p.sequenceNumber<=r&&a.get(p.targetId)===null&&(this.si.delete(f),u.push(this.removeMatchingKeysForTargetId(t,p.targetId)),o++)})),st.waitFor(u).next((()=>o))}getTargetCount(t){return st.resolve(this.targetCount)}getTargetData(t,r){const a=this.si.get(r)||null;return st.resolve(a)}addMatchingKeys(t,r,a){return this._i.Wr(r,a),st.resolve()}removeMatchingKeys(t,r,a){this._i.zr(r,a);const o=this.persistence.referenceDelegate,u=[];return o&&r.forEach((f=>{u.push(o.markPotentiallyOrphaned(t,f))})),st.waitFor(u)}removeMatchingKeysForTargetId(t,r){return this._i.jr(r),st.resolve()}getMatchingKeysForTargetId(t,r){const a=this._i.Hr(r);return st.resolve(a)}containsKey(t,r){return st.resolve(this._i.containsKey(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m2{constructor(t,r){this.ui={},this.overlays={},this.ci=new Bh(0),this.li=!1,this.li=!0,this.hi=new RI,this.referenceDelegate=t(this),this.Pi=new DI(this),this.indexManager=new mI,this.remoteDocumentCache=(function(o){return new II(o)})((a=>this.referenceDelegate.Ti(a))),this.serializer=new dI(r),this.Ii=new SI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let r=this.overlays[t.toKey()];return r||(r=new AI,this.overlays[t.toKey()]=r),r}getMutationQueue(t,r){let a=this.ui[t.toKey()];return a||(a=new CI(r,this.referenceDelegate),this.ui[t.toKey()]=a),a}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,r,a){pt("MemoryPersistence","Starting transaction:",t);const o=new NI(this.ci.next());return this.referenceDelegate.Ei(),a(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ai(t,r){return st.or(Object.values(this.ui).map((a=>()=>a.containsKey(t,r))))}}class NI extends sC{constructor(t){super(),this.currentSequenceNumber=t}}class ug{constructor(t){this.persistence=t,this.Ri=new lg,this.Vi=null}static mi(t){return new ug(t)}get fi(){if(this.Vi)return this.Vi;throw wt(60996)}addReference(t,r,a){return this.Ri.addReference(a,r),this.fi.delete(a.toString()),st.resolve()}removeReference(t,r,a){return this.Ri.removeReference(a,r),this.fi.add(a.toString()),st.resolve()}markPotentiallyOrphaned(t,r){return this.fi.add(r.toString()),st.resolve()}removeTarget(t,r){this.Ri.jr(r.targetId).forEach((o=>this.fi.add(o.toString())));const a=this.persistence.getTargetCache();return a.getMatchingKeysForTargetId(t,r.targetId).next((o=>{o.forEach((u=>this.fi.add(u.toString())))})).next((()=>a.removeTargetData(t,r)))}Ei(){this.Vi=new Set}di(t){const r=this.persistence.getRemoteDocumentCache().newChangeBuffer();return st.forEach(this.fi,(a=>{const o=vt.fromPath(a);return this.gi(t,o).next((u=>{u||r.removeEntry(o,St.min())}))})).next((()=>(this.Vi=null,r.apply(t))))}updateLimboDocument(t,r){return this.gi(t,r).next((a=>{a?this.fi.delete(r.toString()):this.fi.add(r.toString())}))}Ti(t){return 0}gi(t,r){return st.or([()=>st.resolve(this.Ri.containsKey(r)),()=>this.persistence.getTargetCache().containsKey(t,r),()=>this.persistence.Ai(t,r)])}}class Ah{constructor(t,r){this.persistence=t,this.pi=new Za((a=>uC(a.path)),((a,o)=>a.isEqual(o))),this.garbageCollector=EI(this,r)}static mi(t,r){return new Ah(t,r)}Ei(){}di(t){return st.resolve()}forEachTarget(t,r){return this.persistence.getTargetCache().forEachTarget(t,r)}gr(t){const r=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((a=>r.next((o=>a+o))))}wr(t){let r=0;return this.pr(t,(a=>{r++})).next((()=>r))}pr(t,r){return st.forEach(this.pi,((a,o)=>this.br(t,a,o).next((u=>u?st.resolve():r(o)))))}removeTargets(t,r,a){return this.persistence.getTargetCache().removeTargets(t,r,a)}removeOrphanedDocuments(t,r){let a=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(t,(f=>this.br(t,f,r).next((p=>{p||(a++,u.removeEntry(f,St.min()))})))).next((()=>u.apply(t))).next((()=>a))}markPotentiallyOrphaned(t,r){return this.pi.set(r,t.currentSequenceNumber),st.resolve()}removeTarget(t,r){const a=r.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,a)}addReference(t,r,a){return this.pi.set(a,t.currentSequenceNumber),st.resolve()}removeReference(t,r,a){return this.pi.set(a,t.currentSequenceNumber),st.resolve()}updateLimboDocument(t,r){return this.pi.set(r,t.currentSequenceNumber),st.resolve()}Ti(t){let r=t.key.toString().length;return t.isFoundDocument()&&(r+=ah(t.data.value)),r}br(t,r,a){return st.or([()=>this.persistence.Ai(t,r),()=>this.persistence.getTargetCache().containsKey(t,r),()=>{const o=this.pi.get(r);return st.resolve(o!==void 0&&o>a)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class MI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class OI{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return SR()?8:oC(wR())>0?6:4})()}initialize(t,r){this.ps=t,this.indexManager=r,this.Rs=!0}getDocumentsMatchingQuery(t,r,a,o){const u={result:null};return this.ys(t,r).next((f=>{u.result=f})).next((()=>{if(!u.result)return this.ws(t,r,o,a).next((f=>{u.result=f}))})).next((()=>{if(u.result)return;const f=new MI;return this.Ss(t,r,f).next((p=>{if(u.result=p,this.Vs)return this.bs(t,r,f,p.size)}))})).next((()=>u.result))}bs(t,r,a,o){return a.documentReadCount<this.fs?(Ks()<=$t.DEBUG&&pt("QueryEngine","SDK will not create cache indexes for query:",Hs(r),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),st.resolve()):(Ks()<=$t.DEBUG&&pt("QueryEngine","Query:",Hs(r),"scans",a.documentReadCount,"local documents and returns",o,"documents as results."),a.documentReadCount>this.gs*o?(Ks()<=$t.DEBUG&&pt("QueryEngine","The SDK decides to create cache indexes for query:",Hs(r),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,bi(r))):st.resolve())}ys(t,r){if(yv(r))return st.resolve(null);let a=bi(r);return this.indexManager.getIndexType(t,a).next((o=>o===0?null:(r.limit!==null&&o===1&&(r=lm(r,null,"F"),a=bi(r)),this.indexManager.getDocumentsMatchingTarget(t,a).next((u=>{const f=Pt(...u);return this.ps.getDocuments(t,f).next((p=>this.indexManager.getMinOffset(t,a).next((m=>{const g=this.Ds(r,p);return this.Cs(r,g,f,m.readTime)?this.ys(t,lm(r,null,"F")):this.vs(t,g,r,m)}))))})))))}ws(t,r,a,o){return yv(r)||o.isEqual(St.min())?st.resolve(null):this.ps.getDocuments(t,a).next((u=>{const f=this.Ds(r,u);return this.Cs(r,f,a,o)?st.resolve(null):(Ks()<=$t.DEBUG&&pt("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Hs(r)),this.vs(t,f,r,nC(o,Zl)).next((p=>p)))}))}Ds(t,r){let a=new Pe(KE(t));return r.forEach(((o,u)=>{Kh(t,u)&&(a=a.add(u))})),a}Cs(t,r,a,o){if(t.limit===null)return!1;if(a.size!==r.size)return!0;const u=t.limitType==="F"?r.last():r.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(t,r,a){return Ks()<=$t.DEBUG&&pt("QueryEngine","Using full collection scan to execute query:",Hs(r)),this.ps.getDocumentsMatchingQuery(t,r,Jr.min(),a)}vs(t,r,a,o){return this.ps.getDocumentsMatchingQuery(t,a,o).next((u=>(r.forEach((f=>{u=u.insert(f.key,f)})),u)))}}/**
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
 */const hg="LocalStore",VI=3e8;class kI{constructor(t,r,a,o){this.persistence=t,this.Fs=r,this.serializer=o,this.Ms=new me(Ut),this.xs=new Za((u=>eg(u)),ng),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(a)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new TI(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(r=>t.collect(r,this.Ms)))}}function UI(n,t,r,a){return new kI(n,t,r,a)}async function g2(n,t){const r=Rt(n);return await r.persistence.runTransaction("Handle user change","readonly",(a=>{let o;return r.mutationQueue.getAllMutationBatches(a).next((u=>(o=u,r.Bs(t),r.mutationQueue.getAllMutationBatches(a)))).next((u=>{const f=[],p=[];let m=Pt();for(const g of o){f.push(g.batchId);for(const v of g.mutations)m=m.add(v.key)}for(const g of u){p.push(g.batchId);for(const v of g.mutations)m=m.add(v.key)}return r.localDocuments.getDocuments(a,m).next((g=>({Ls:g,removedBatchIds:f,addedBatchIds:p})))}))}))}function PI(n,t){const r=Rt(n);return r.persistence.runTransaction("Acknowledge batch","readwrite-primary",(a=>{const o=t.batch.keys(),u=r.Ns.newChangeBuffer({trackRemovals:!0});return(function(p,m,g,v){const w=g.batch,S=w.keys();let R=st.resolve();return S.forEach((O=>{R=R.next((()=>v.getEntry(m,O))).next((B=>{const P=g.docVersions.get(O);Gt(P!==null,48541),B.version.compareTo(P)<0&&(w.applyToRemoteDocument(B,g),B.isValidDocument()&&(B.setReadTime(g.commitVersion),v.addEntry(B)))}))})),R.next((()=>p.mutationQueue.removeMutationBatch(m,w)))})(r,a,t,u).next((()=>u.apply(a))).next((()=>r.mutationQueue.performConsistencyCheck(a))).next((()=>r.documentOverlayCache.removeOverlaysForBatchId(a,o,t.batch.batchId))).next((()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,(function(p){let m=Pt();for(let g=0;g<p.mutationResults.length;++g)p.mutationResults[g].transformResults.length>0&&(m=m.add(p.batch.mutations[g].key));return m})(t)))).next((()=>r.localDocuments.getDocuments(a,o)))}))}function y2(n){const t=Rt(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(r=>t.Pi.getLastRemoteSnapshotVersion(r)))}function LI(n,t){const r=Rt(n),a=t.snapshotVersion;let o=r.Ms;return r.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const f=r.Ns.newChangeBuffer({trackRemovals:!0});o=r.Ms;const p=[];t.targetChanges.forEach(((v,w)=>{const S=o.get(w);if(!S)return;p.push(r.Pi.removeMatchingKeys(u,v.removedDocuments,w).next((()=>r.Pi.addMatchingKeys(u,v.addedDocuments,w))));let R=S.withSequenceNumber(u.currentSequenceNumber);t.targetMismatches.get(w)!==null?R=R.withResumeToken(Ze.EMPTY_BYTE_STRING,St.min()).withLastLimboFreeSnapshotVersion(St.min()):v.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(v.resumeToken,a)),o=o.insert(w,R),(function(B,P,G){return B.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-B.snapshotVersion.toMicroseconds()>=VI?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0})(S,R,v)&&p.push(r.Pi.updateTargetData(u,R))}));let m=lr(),g=Pt();if(t.documentUpdates.forEach((v=>{t.resolvedLimboDocuments.has(v)&&p.push(r.persistence.referenceDelegate.updateLimboDocument(u,v))})),p.push(zI(u,f,t.documentUpdates).next((v=>{m=v.ks,g=v.qs}))),!a.isEqual(St.min())){const v=r.Pi.getLastRemoteSnapshotVersion(u).next((w=>r.Pi.setTargetsMetadata(u,u.currentSequenceNumber,a)));p.push(v)}return st.waitFor(p).next((()=>f.apply(u))).next((()=>r.localDocuments.getLocalViewOfDocuments(u,m,g))).next((()=>m))})).then((u=>(r.Ms=o,u)))}function zI(n,t,r){let a=Pt(),o=Pt();return r.forEach((u=>a=a.add(u))),t.getEntries(n,a).next((u=>{let f=lr();return r.forEach(((p,m)=>{const g=u.get(p);m.isFoundDocument()!==g.isFoundDocument()&&(o=o.add(p)),m.isNoDocument()&&m.version.isEqual(St.min())?(t.removeEntry(p,m.readTime),f=f.insert(p,m)):!g.isValidDocument()||m.version.compareTo(g.version)>0||m.version.compareTo(g.version)===0&&g.hasPendingWrites?(t.addEntry(m),f=f.insert(p,m)):pt(hg,"Ignoring outdated watch update for ",p,". Current version:",g.version," Watch version:",m.version)})),{ks:f,qs:o}}))}function BI(n,t){const r=Rt(n);return r.persistence.runTransaction("Get next mutation batch","readonly",(a=>(t===void 0&&(t=Zm),r.mutationQueue.getNextMutationBatchAfterBatchId(a,t))))}function $I(n,t){const r=Rt(n);return r.persistence.runTransaction("Allocate target","readwrite",(a=>{let o;return r.Pi.getTargetData(a,t).next((u=>u?(o=u,st.resolve(o)):r.Pi.allocateTargetId(a).next((f=>(o=new Yr(t,f,"TargetPurposeListen",a.currentSequenceNumber),r.Pi.addTargetData(a,o).next((()=>o)))))))})).then((a=>{const o=r.Ms.get(a.targetId);return(o===null||a.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(r.Ms=r.Ms.insert(a.targetId,a),r.xs.set(t,a.targetId)),a}))}async function dm(n,t,r){const a=Rt(n),o=a.Ms.get(t),u=r?"readwrite":"readwrite-primary";try{r||await a.persistence.runTransaction("Release target",u,(f=>a.persistence.referenceDelegate.removeTarget(f,o)))}catch(f){if(!_o(f))throw f;pt(hg,`Failed to update sequence numbers for target ${t}: ${f}`)}a.Ms=a.Ms.remove(t),a.xs.delete(o.target)}function jv(n,t,r){const a=Rt(n);let o=St.min(),u=Pt();return a.persistence.runTransaction("Execute query","readwrite",(f=>(function(m,g,v){const w=Rt(m),S=w.xs.get(v);return S!==void 0?st.resolve(w.Ms.get(S)):w.Pi.getTargetData(g,v)})(a,f,bi(t)).next((p=>{if(p)return o=p.lastLimboFreeSnapshotVersion,a.Pi.getMatchingKeysForTargetId(f,p.targetId).next((m=>{u=m}))})).next((()=>a.Fs.getDocumentsMatchingQuery(f,t,r?o:St.min(),r?u:Pt()))).next((p=>(FI(a,CC(t),p),{documents:p,Qs:u})))))}function FI(n,t,r){let a=n.Os.get(t)||St.min();r.forEach(((o,u)=>{u.readTime.compareTo(a)>0&&(a=u.readTime)})),n.Os.set(t,a)}class Dv{constructor(){this.activeTargetIds=OC()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class qI{constructor(){this.Mo=new Dv,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,r,a){}addLocalQueryTarget(t,r=!0){return r&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,r,a){this.xo[t]=r}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new Dv,Promise.resolve()}handleUserChange(t,r,a){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class KI{Oo(t){}shutdown(){}}/**
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
 */const Nv="ConnectivityMonitor";class Mv{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){pt(Nv,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){pt(Nv,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Gc=null;function pm(){return Gc===null?Gc=(function(){return 268435456+Math.round(2147483648*Math.random())})():Gc++,"0x"+Gc.toString(16)}/**
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
 */const Cp="RestConnection",HI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class GI{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=r+"://"+t.host,this.Ko=`projects/${a}/databases/${o}`,this.Wo=this.databaseId.database===Eh?`project_id=${a}`:`project_id=${a}&database_id=${o}`}Go(t,r,a,o,u){const f=pm(),p=this.zo(t,r.toUriEncodedString());pt(Cp,`Sending RPC '${t}' ${f}:`,p,a);const m={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(m,o,u);const{host:g}=new URL(p),v=Gm(g);return this.Jo(t,p,m,a,v).then((w=>(pt(Cp,`Received RPC '${t}' ${f}: `,w),w)),(w=>{throw ro(Cp,`RPC '${t}' ${f} failed with error: `,w,"url: ",p,"request:",a),w}))}Ho(t,r,a,o,u,f){return this.Go(t,r,a,o,u)}jo(t,r,a){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+xo})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach(((o,u)=>t[u]=o)),a&&a.headers.forEach(((o,u)=>t[u]=o))}zo(t,r){const a=HI[t];return`${this.Uo}/v1/${r}:${a}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn="WebChannelConnection";class QI extends GI{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,r,a,o,u){const f=pm();return new Promise(((p,m)=>{const g=new xE;g.setWithCredentials(!0),g.listenOnce(vE.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case rh.NO_ERROR:const w=g.getResponseJson();pt(rn,`XHR for RPC '${t}' ${f} received:`,JSON.stringify(w)),p(w);break;case rh.TIMEOUT:pt(rn,`RPC '${t}' ${f} timed out`),m(new ft(nt.DEADLINE_EXCEEDED,"Request time out"));break;case rh.HTTP_ERROR:const S=g.getStatus();if(pt(rn,`RPC '${t}' ${f} failed with status:`,S,"response text:",g.getResponseText()),S>0){let R=g.getResponseJson();Array.isArray(R)&&(R=R[0]);const O=R?.error;if(O&&O.status&&O.message){const B=(function(G){const X=G.toLowerCase().replace(/_/g,"-");return Object.values(nt).indexOf(X)>=0?X:nt.UNKNOWN})(O.status);m(new ft(B,O.message))}else m(new ft(nt.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new ft(nt.UNAVAILABLE,"Connection failed."));break;default:wt(9055,{l_:t,streamId:f,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{pt(rn,`RPC '${t}' ${f} completed.`)}}));const v=JSON.stringify(o);pt(rn,`RPC '${t}' ${f} sending request:`,o),g.send(r,"POST",v,a,15)}))}T_(t,r,a){const o=pm(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],f=bE(),p=EE(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.jo(m.initMessageHeaders,r,a),m.encodeInitMessageHeaders=!0;const v=u.join("");pt(rn,`Creating RPC '${t}' stream ${o}: ${v}`,m);const w=f.createWebChannel(v,m);this.I_(w);let S=!1,R=!1;const O=new YI({Yo:P=>{R?pt(rn,`Not sending because RPC '${t}' stream ${o} is closed:`,P):(S||(pt(rn,`Opening RPC '${t}' stream ${o} transport.`),w.open(),S=!0),pt(rn,`RPC '${t}' stream ${o} sending:`,P),w.send(P))},Zo:()=>w.close()}),B=(P,G,X)=>{P.listen(G,(it=>{try{X(it)}catch(ht){setTimeout((()=>{throw ht}),0)}}))};return B(w,Ml.EventType.OPEN,(()=>{R||(pt(rn,`RPC '${t}' stream ${o} transport opened.`),O.o_())})),B(w,Ml.EventType.CLOSE,(()=>{R||(R=!0,pt(rn,`RPC '${t}' stream ${o} transport closed`),O.a_(),this.E_(w))})),B(w,Ml.EventType.ERROR,(P=>{R||(R=!0,ro(rn,`RPC '${t}' stream ${o} transport errored. Name:`,P.name,"Message:",P.message),O.a_(new ft(nt.UNAVAILABLE,"The operation could not be completed")))})),B(w,Ml.EventType.MESSAGE,(P=>{if(!R){const G=P.data[0];Gt(!!G,16349);const X=G,it=X?.error||X[0]?.error;if(it){pt(rn,`RPC '${t}' stream ${o} received error:`,it);const ht=it.status;let J=(function(C){const I=Ie[C];if(I!==void 0)return r2(I)})(ht),dt=it.message;J===void 0&&(J=nt.INTERNAL,dt="Unknown error status: "+ht+" with message "+it.message),R=!0,O.a_(new ft(J,dt)),w.close()}else pt(rn,`RPC '${t}' stream ${o} received:`,G),O.u_(G)}})),B(p,_E.STAT_EVENT,(P=>{P.stat===em.PROXY?pt(rn,`RPC '${t}' stream ${o} detected buffering proxy`):P.stat===em.NOPROXY&&pt(rn,`RPC '${t}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{O.__()}),0),O}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((r=>r===t))}}function Ip(){return typeof document<"u"?document:null}/**
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
 */function Qh(n){return new JC(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x2{constructor(t,r,a=1e3,o=1.5,u=6e4){this.Mi=t,this.timerId=r,this.d_=a,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const r=Math.floor(this.V_+this.y_()),a=Math.max(0,Date.now()-this.f_),o=Math.max(0,r-a);o>0&&pt("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${r} ms, last attempt: ${a} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov="PersistentStream";class v2{constructor(t,r,a,o,u,f,p,m){this.Mi=t,this.S_=a,this.b_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=p,this.listener=m,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new x2(t,r)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,r){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():r&&r.code===nt.RESOURCE_EXHAUSTED?(sr(r.toString()),sr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):r&&r.code===nt.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(r)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),r=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([a,o])=>{this.D_===r&&this.G_(a,o)}),(a=>{t((()=>{const o=new ft(nt.UNKNOWN,"Fetching auth token failed: "+a.message);return this.z_(o)}))}))}G_(t,r){const a=this.W_(this.D_);this.stream=this.j_(t,r),this.stream.Xo((()=>{a((()=>this.listener.Xo()))})),this.stream.t_((()=>{a((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{a((()=>this.z_(o)))})),this.stream.onMessage((o=>{a((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return pt(Ov,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return r=>{this.Mi.enqueueAndForget((()=>this.D_===t?r():(pt(Ov,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class XI extends v2{constructor(t,r,a,o,u,f){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",r,a,o,f),this.serializer=u}j_(t,r){return this.connection.T_("Listen",t,r)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const r=nI(this.serializer,t),a=(function(u){if(!("targetChange"in u))return St.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?St.min():f.readTime?Ti(f.readTime):St.min()})(t);return this.listener.H_(r,a)}Y_(t){const r={};r.database=fm(this.serializer),r.addTarget=(function(u,f){let p;const m=f.target;if(p=sm(m)?{documents:aI(u,m)}:{query:sI(u,m).ft},p.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){p.resumeToken=o2(u,f.resumeToken);const g=um(u,f.expectedCount);g!==null&&(p.expectedCount=g)}else if(f.snapshotVersion.compareTo(St.min())>0){p.readTime=Sh(u,f.snapshotVersion.toTimestamp());const g=um(u,f.expectedCount);g!==null&&(p.expectedCount=g)}return p})(this.serializer,t);const a=lI(this.serializer,t);a&&(r.labels=a),this.q_(r)}Z_(t){const r={};r.database=fm(this.serializer),r.removeTarget=t,this.q_(r)}}class WI extends v2{constructor(t,r,a,o,u,f){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",r,a,o,f),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,r){return this.connection.T_("Write",t,r)}J_(t){return Gt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Gt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){Gt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const r=rI(t.writeResults,t.commitTime),a=Ti(t.commitTime);return this.listener.na(a,r)}ra(){const t={};t.database=fm(this.serializer),this.q_(t)}ea(t){const r={streamToken:this.lastStreamToken,writes:t.map((a=>iI(this.serializer,a)))};this.q_(r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{}class JI extends ZI{constructor(t,r,a,o){super(),this.authCredentials=t,this.appCheckCredentials=r,this.connection=a,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ft(nt.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,r,a,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,f])=>this.connection.Go(t,cm(r,a),o,u,f))).catch((u=>{throw u.name==="FirebaseError"?(u.code===nt.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ft(nt.UNKNOWN,u.toString())}))}Ho(t,r,a,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([f,p])=>this.connection.Ho(t,cm(r,a),o,f,p,u))).catch((f=>{throw f.name==="FirebaseError"?(f.code===nt.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new ft(nt.UNKNOWN,f.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class tj{constructor(t,r){this.asyncQueue=t,this.onlineStateHandler=r,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const r=`Could not reach Cloud Firestore backend. ${t}
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
 */const Wa="RemoteStore";class ej{constructor(t,r,a,o,u){this.localStore=t,this.datastore=r,this.asyncQueue=a,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo((f=>{a.enqueueAndForget((async()=>{Ja(this)&&(pt(Wa,"Restarting streams for network reachability change."),await(async function(m){const g=Rt(m);g.Ea.add(4),await hu(g),g.Ra.set("Unknown"),g.Ea.delete(4),await Xh(g)})(this))}))})),this.Ra=new tj(a,o)}}async function Xh(n){if(Ja(n))for(const t of n.da)await t(!0)}async function hu(n){for(const t of n.da)await t(!1)}function _2(n,t){const r=Rt(n);r.Ia.has(t.targetId)||(r.Ia.set(t.targetId,t),mg(r)?pg(r):bo(r).O_()&&dg(r,t))}function fg(n,t){const r=Rt(n),a=bo(r);r.Ia.delete(t),a.O_()&&E2(r,t),r.Ia.size===0&&(a.O_()?a.L_():Ja(r)&&r.Ra.set("Unknown"))}function dg(n,t){if(n.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(St.min())>0){const r=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(r)}bo(n).Y_(t)}function E2(n,t){n.Va.Ue(t),bo(n).Z_(t)}function pg(n){n.Va=new QC({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),bo(n).start(),n.Ra.ua()}function mg(n){return Ja(n)&&!bo(n).x_()&&n.Ia.size>0}function Ja(n){return Rt(n).Ea.size===0}function b2(n){n.Va=void 0}async function nj(n){n.Ra.set("Online")}async function ij(n){n.Ia.forEach(((t,r)=>{dg(n,t)}))}async function rj(n,t){b2(n),mg(n)?(n.Ra.ha(t),pg(n)):n.Ra.set("Unknown")}async function aj(n,t,r){if(n.Ra.set("Online"),t instanceof s2&&t.state===2&&t.cause)try{await(async function(o,u){const f=u.cause;for(const p of u.targetIds)o.Ia.has(p)&&(await o.remoteSyncer.rejectListen(p,f),o.Ia.delete(p),o.Va.removeTarget(p))})(n,t)}catch(a){pt(Wa,"Failed to remove targets %s: %s ",t.targetIds.join(","),a),await Rh(n,a)}else if(t instanceof lh?n.Va.Ze(t):t instanceof a2?n.Va.st(t):n.Va.tt(t),!r.isEqual(St.min()))try{const a=await y2(n.localStore);r.compareTo(a)>=0&&await(function(u,f){const p=u.Va.Tt(f);return p.targetChanges.forEach(((m,g)=>{if(m.resumeToken.approximateByteSize()>0){const v=u.Ia.get(g);v&&u.Ia.set(g,v.withResumeToken(m.resumeToken,f))}})),p.targetMismatches.forEach(((m,g)=>{const v=u.Ia.get(m);if(!v)return;u.Ia.set(m,v.withResumeToken(Ze.EMPTY_BYTE_STRING,v.snapshotVersion)),E2(u,m);const w=new Yr(v.target,m,g,v.sequenceNumber);dg(u,w)})),u.remoteSyncer.applyRemoteEvent(p)})(n,r)}catch(a){pt(Wa,"Failed to raise snapshot:",a),await Rh(n,a)}}async function Rh(n,t,r){if(!_o(t))throw t;n.Ea.add(1),await hu(n),n.Ra.set("Offline"),r||(r=()=>y2(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{pt(Wa,"Retrying IndexedDB access"),await r(),n.Ea.delete(1),await Xh(n)}))}function w2(n,t){return t().catch((r=>Rh(n,r,t)))}async function Wh(n){const t=Rt(n),r=ia(t);let a=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Zm;for(;sj(t);)try{const o=await BI(t.localStore,a);if(o===null){t.Ta.length===0&&r.L_();break}a=o.batchId,oj(t,o)}catch(o){await Rh(t,o)}T2(t)&&S2(t)}function sj(n){return Ja(n)&&n.Ta.length<10}function oj(n,t){n.Ta.push(t);const r=ia(n);r.O_()&&r.X_&&r.ea(t.mutations)}function T2(n){return Ja(n)&&!ia(n).x_()&&n.Ta.length>0}function S2(n){ia(n).start()}async function lj(n){ia(n).ra()}async function uj(n){const t=ia(n);for(const r of n.Ta)t.ea(r.mutations)}async function cj(n,t,r){const a=n.Ta.shift(),o=ag.from(a,t,r);await w2(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await Wh(n)}async function hj(n,t){t&&ia(n).X_&&await(async function(a,o){if((function(f){return HC(f)&&f!==nt.ABORTED})(o.code)){const u=a.Ta.shift();ia(a).B_(),await w2(a,(()=>a.remoteSyncer.rejectFailedWrite(u.batchId,o))),await Wh(a)}})(n,t),T2(n)&&S2(n)}async function Vv(n,t){const r=Rt(n);r.asyncQueue.verifyOperationInProgress(),pt(Wa,"RemoteStore received new credentials");const a=Ja(r);r.Ea.add(3),await hu(r),a&&r.Ra.set("Unknown"),await r.remoteSyncer.handleCredentialChange(t),r.Ea.delete(3),await Xh(r)}async function fj(n,t){const r=Rt(n);t?(r.Ea.delete(2),await Xh(r)):t||(r.Ea.add(2),await hu(r),r.Ra.set("Unknown"))}function bo(n){return n.ma||(n.ma=(function(r,a,o){const u=Rt(r);return u.sa(),new XI(a,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(n.datastore,n.asyncQueue,{Xo:nj.bind(null,n),t_:ij.bind(null,n),r_:rj.bind(null,n),H_:aj.bind(null,n)}),n.da.push((async t=>{t?(n.ma.B_(),mg(n)?pg(n):n.Ra.set("Unknown")):(await n.ma.stop(),b2(n))}))),n.ma}function ia(n){return n.fa||(n.fa=(function(r,a,o){const u=Rt(r);return u.sa(),new WI(a,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:lj.bind(null,n),r_:hj.bind(null,n),ta:uj.bind(null,n),na:cj.bind(null,n)}),n.da.push((async t=>{t?(n.fa.B_(),await Wh(n)):(await n.fa.stop(),n.Ta.length>0&&(pt(Wa,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(t,r,a,o,u){this.asyncQueue=t,this.timerId=r,this.targetTimeMs=a,this.op=o,this.removalCallback=u,this.deferred=new er,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((f=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,r,a,o,u){const f=Date.now()+a,p=new gg(t,r,f,o,u);return p.start(a),p}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ft(nt.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yg(n,t){if(sr("AsyncQueue",`${t}: ${n}`),_o(n))return new ft(nt.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{static emptySet(t){return new Ws(t.comparator)}constructor(t){this.comparator=t?(r,a)=>t(r,a)||vt.comparator(r.key,a.key):(r,a)=>vt.comparator(r.key,a.key),this.keyedMap=Ol(),this.sortedSet=new me(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const r=this.keyedMap.get(t);return r?this.sortedSet.indexOf(r):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((r,a)=>(t(r),!1)))}add(t){const r=this.delete(t.key);return r.copy(r.keyedMap.insert(t.key,t),r.sortedSet.insert(t,null))}delete(t){const r=this.get(t);return r?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(r)):this}isEqual(t){if(!(t instanceof Ws)||this.size!==t.size)return!1;const r=this.sortedSet.getIterator(),a=t.sortedSet.getIterator();for(;r.hasNext();){const o=r.getNext().key,u=a.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const t=[];return this.forEach((r=>{t.push(r.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,r){const a=new Ws;return a.comparator=this.comparator,a.keyedMap=t,a.sortedSet=r,a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(){this.ga=new me(vt.comparator)}track(t){const r=t.doc.key,a=this.ga.get(r);a?t.type!==0&&a.type===3?this.ga=this.ga.insert(r,t):t.type===3&&a.type!==1?this.ga=this.ga.insert(r,{type:a.type,doc:t.doc}):t.type===2&&a.type===2?this.ga=this.ga.insert(r,{type:2,doc:t.doc}):t.type===2&&a.type===0?this.ga=this.ga.insert(r,{type:0,doc:t.doc}):t.type===1&&a.type===0?this.ga=this.ga.remove(r):t.type===1&&a.type===2?this.ga=this.ga.insert(r,{type:1,doc:a.doc}):t.type===0&&a.type===1?this.ga=this.ga.insert(r,{type:2,doc:t.doc}):wt(63341,{Rt:t,pa:a}):this.ga=this.ga.insert(r,t)}ya(){const t=[];return this.ga.inorderTraversal(((r,a)=>{t.push(a)})),t}}class uo{constructor(t,r,a,o,u,f,p,m,g){this.query=t,this.docs=r,this.oldDocs=a,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=p,this.excludesMetadataChanges=m,this.hasCachedResults=g}static fromInitialDocuments(t,r,a,o,u){const f=[];return r.forEach((p=>{f.push({type:0,doc:p})})),new uo(t,r,Ws.emptySet(r),f,a,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&qh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const r=this.docChanges,a=t.docChanges;if(r.length!==a.length)return!1;for(let o=0;o<r.length;o++)if(r[o].type!==a[o].type||!r[o].doc.isEqual(a[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dj{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class pj{constructor(){this.queries=Uv(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(r,a){const o=Rt(r),u=o.queries;o.queries=Uv(),u.forEach(((f,p)=>{for(const m of p.Sa)m.onError(a)}))})(this,new ft(nt.ABORTED,"Firestore shutting down"))}}function Uv(){return new Za((n=>qE(n)),qh)}async function A2(n,t){const r=Rt(n);let a=3;const o=t.query;let u=r.queries.get(o);u?!u.ba()&&t.Da()&&(a=2):(u=new dj,a=t.Da()?0:1);try{switch(a){case 0:u.wa=await r.onListen(o,!0);break;case 1:u.wa=await r.onListen(o,!1);break;case 2:await r.onFirstRemoteStoreListen(o)}}catch(f){const p=yg(f,`Initialization of query '${Hs(t.query)}' failed`);return void t.onError(p)}r.queries.set(o,u),u.Sa.push(t),t.va(r.onlineState),u.wa&&t.Fa(u.wa)&&xg(r)}async function R2(n,t){const r=Rt(n),a=t.query;let o=3;const u=r.queries.get(a);if(u){const f=u.Sa.indexOf(t);f>=0&&(u.Sa.splice(f,1),u.Sa.length===0?o=t.Da()?0:1:!u.ba()&&t.Da()&&(o=2))}switch(o){case 0:return r.queries.delete(a),r.onUnlisten(a,!0);case 1:return r.queries.delete(a),r.onUnlisten(a,!1);case 2:return r.onLastRemoteStoreUnlisten(a);default:return}}function mj(n,t){const r=Rt(n);let a=!1;for(const o of t){const u=o.query,f=r.queries.get(u);if(f){for(const p of f.Sa)p.Fa(o)&&(a=!0);f.wa=o}}a&&xg(r)}function gj(n,t,r){const a=Rt(n),o=a.queries.get(t);if(o)for(const u of o.Sa)u.onError(r);a.queries.delete(t)}function xg(n){n.Ca.forEach((t=>{t.next()}))}var mm,Pv;(Pv=mm||(mm={})).Ma="default",Pv.Cache="cache";class C2{constructor(t,r,a){this.query=t,this.xa=r,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=a||{}}Fa(t){if(!this.options.includeMetadataChanges){const a=[];for(const o of t.docChanges)o.type!==3&&a.push(o);t=new uo(t.query,t.docs,t.oldDocs,a,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let r=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),r=!0):this.La(t,this.onlineState)&&(this.ka(t),r=!0),this.Na=t,r}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let r=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),r=!0),r}La(t,r){if(!t.fromCache||!this.Da())return!0;const a=r!=="Offline";return(!this.options.qa||!a)&&(!t.docs.isEmpty()||t.hasCachedResults||r==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const r=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!r)&&this.options.includeMetadataChanges===!0}ka(t){t=uo.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==mm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(t){this.key=t}}class j2{constructor(t){this.key=t}}class yj{constructor(t,r){this.query=t,this.Ya=r,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Pt(),this.mutatedKeys=Pt(),this.eu=KE(t),this.tu=new Ws(this.eu)}get nu(){return this.Ya}ru(t,r){const a=r?r.iu:new kv,o=r?r.tu:this.tu;let u=r?r.mutatedKeys:this.mutatedKeys,f=o,p=!1;const m=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,g=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal(((v,w)=>{const S=o.get(v),R=Kh(this.query,w)?w:null,O=!!S&&this.mutatedKeys.has(S.key),B=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let P=!1;S&&R?S.data.isEqual(R.data)?O!==B&&(a.track({type:3,doc:R}),P=!0):this.su(S,R)||(a.track({type:2,doc:R}),P=!0,(m&&this.eu(R,m)>0||g&&this.eu(R,g)<0)&&(p=!0)):!S&&R?(a.track({type:0,doc:R}),P=!0):S&&!R&&(a.track({type:1,doc:S}),P=!0,(m||g)&&(p=!0)),P&&(R?(f=f.add(R),u=B?u.add(v):u.delete(v)):(f=f.delete(v),u=u.delete(v)))})),this.query.limit!==null)for(;f.size>this.query.limit;){const v=this.query.limitType==="F"?f.last():f.first();f=f.delete(v.key),u=u.delete(v.key),a.track({type:1,doc:v})}return{tu:f,iu:a,Cs:p,mutatedKeys:u}}su(t,r){return t.hasLocalMutations&&r.hasCommittedMutations&&!r.hasLocalMutations}applyChanges(t,r,a,o){const u=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const f=t.iu.ya();f.sort(((v,w)=>(function(R,O){const B=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return wt(20277,{Rt:P})}};return B(R)-B(O)})(v.type,w.type)||this.eu(v.doc,w.doc))),this.ou(a),o=o??!1;const p=r&&!o?this._u():[],m=this.Xa.size===0&&this.current&&!o?1:0,g=m!==this.Za;return this.Za=m,f.length!==0||g?{snapshot:new uo(this.query,t.tu,u,f,t.mutatedKeys,m===0,g,!1,!!a&&a.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new kv,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((r=>this.Ya=this.Ya.add(r))),t.modifiedDocuments.forEach((r=>{})),t.removedDocuments.forEach((r=>this.Ya=this.Ya.delete(r))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=Pt(),this.tu.forEach((a=>{this.uu(a.key)&&(this.Xa=this.Xa.add(a.key))}));const r=[];return t.forEach((a=>{this.Xa.has(a)||r.push(new j2(a))})),this.Xa.forEach((a=>{t.has(a)||r.push(new I2(a))})),r}cu(t){this.Ya=t.Qs,this.Xa=Pt();const r=this.ru(t.documents);return this.applyChanges(r,!0)}lu(){return uo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const vg="SyncEngine";class xj{constructor(t,r,a){this.query=t,this.targetId=r,this.view=a}}class vj{constructor(t){this.key=t,this.hu=!1}}class _j{constructor(t,r,a,o,u,f){this.localStore=t,this.remoteStore=r,this.eventManager=a,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.Pu={},this.Tu=new Za((p=>qE(p)),qh),this.Iu=new Map,this.Eu=new Set,this.du=new me(vt.comparator),this.Au=new Map,this.Ru=new lg,this.Vu={},this.mu=new Map,this.fu=lo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Ej(n,t,r=!0){const a=k2(n);let o;const u=a.Tu.get(t);return u?(a.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await D2(a,t,r,!0),o}async function bj(n,t){const r=k2(n);await D2(r,t,!0,!1)}async function D2(n,t,r,a){const o=await $I(n.localStore,bi(t)),u=o.targetId,f=n.sharedClientState.addLocalQueryTarget(u,r);let p;return a&&(p=await wj(n,t,u,f==="current",o.resumeToken)),n.isPrimaryClient&&r&&_2(n.remoteStore,o),p}async function wj(n,t,r,a,o){n.pu=(w,S,R)=>(async function(B,P,G,X){let it=P.view.ru(G);it.Cs&&(it=await jv(B.localStore,P.query,!1).then((({documents:j})=>P.view.ru(j,it))));const ht=X&&X.targetChanges.get(P.targetId),J=X&&X.targetMismatches.get(P.targetId)!=null,dt=P.view.applyChanges(it,B.isPrimaryClient,ht,J);return zv(B,P.targetId,dt.au),dt.snapshot})(n,w,S,R);const u=await jv(n.localStore,t,!0),f=new yj(t,u.Qs),p=f.ru(u.documents),m=cu.createSynthesizedTargetChangeForCurrentChange(r,a&&n.onlineState!=="Offline",o),g=f.applyChanges(p,n.isPrimaryClient,m);zv(n,r,g.au);const v=new xj(t,r,f);return n.Tu.set(t,v),n.Iu.has(r)?n.Iu.get(r).push(t):n.Iu.set(r,[t]),g.snapshot}async function Tj(n,t,r){const a=Rt(n),o=a.Tu.get(t),u=a.Iu.get(o.targetId);if(u.length>1)return a.Iu.set(o.targetId,u.filter((f=>!qh(f,t)))),void a.Tu.delete(t);a.isPrimaryClient?(a.sharedClientState.removeLocalQueryTarget(o.targetId),a.sharedClientState.isActiveQueryTarget(o.targetId)||await dm(a.localStore,o.targetId,!1).then((()=>{a.sharedClientState.clearQueryState(o.targetId),r&&fg(a.remoteStore,o.targetId),gm(a,o.targetId)})).catch(vo)):(gm(a,o.targetId),await dm(a.localStore,o.targetId,!0))}async function Sj(n,t){const r=Rt(n),a=r.Tu.get(t),o=r.Iu.get(a.targetId);r.isPrimaryClient&&o.length===1&&(r.sharedClientState.removeLocalQueryTarget(a.targetId),fg(r.remoteStore,a.targetId))}async function Aj(n,t,r){const a=Mj(n);try{const o=await(function(f,p){const m=Rt(f),g=le.now(),v=p.reduce(((R,O)=>R.add(O.key)),Pt());let w,S;return m.persistence.runTransaction("Locally write mutations","readwrite",(R=>{let O=lr(),B=Pt();return m.Ns.getEntries(R,v).next((P=>{O=P,O.forEach(((G,X)=>{X.isValidDocument()||(B=B.add(G))}))})).next((()=>m.localDocuments.getOverlayedDocuments(R,O))).next((P=>{w=P;const G=[];for(const X of p){const it=BC(X,w.get(X.key).overlayedDocument);it!=null&&G.push(new sa(X.key,it,kE(it.value.mapValue),wi.exists(!0)))}return m.mutationQueue.addMutationBatch(R,g,G,p)})).next((P=>{S=P;const G=P.applyToLocalDocumentSet(w,B);return m.documentOverlayCache.saveOverlays(R,P.batchId,G)}))})).then((()=>({batchId:S.batchId,changes:GE(w)})))})(a.localStore,t);a.sharedClientState.addPendingMutation(o.batchId),(function(f,p,m){let g=f.Vu[f.currentUser.toKey()];g||(g=new me(Ut)),g=g.insert(p,m),f.Vu[f.currentUser.toKey()]=g})(a,o.batchId,r),await fu(a,o.changes),await Wh(a.remoteStore)}catch(o){const u=yg(o,"Failed to persist write");r.reject(u)}}async function N2(n,t){const r=Rt(n);try{const a=await LI(r.localStore,t);t.targetChanges.forEach(((o,u)=>{const f=r.Au.get(u);f&&(Gt(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.hu=!0:o.modifiedDocuments.size>0?Gt(f.hu,14607):o.removedDocuments.size>0&&(Gt(f.hu,42227),f.hu=!1))})),await fu(r,a,t)}catch(a){await vo(a)}}function Lv(n,t,r){const a=Rt(n);if(a.isPrimaryClient&&r===0||!a.isPrimaryClient&&r===1){const o=[];a.Tu.forEach(((u,f)=>{const p=f.view.va(t);p.snapshot&&o.push(p.snapshot)})),(function(f,p){const m=Rt(f);m.onlineState=p;let g=!1;m.queries.forEach(((v,w)=>{for(const S of w.Sa)S.va(p)&&(g=!0)})),g&&xg(m)})(a.eventManager,t),o.length&&a.Pu.H_(o),a.onlineState=t,a.isPrimaryClient&&a.sharedClientState.setOnlineState(t)}}async function Rj(n,t,r){const a=Rt(n);a.sharedClientState.updateQueryState(t,"rejected",r);const o=a.Au.get(t),u=o&&o.key;if(u){let f=new me(vt.comparator);f=f.insert(u,sn.newNoDocument(u,St.min()));const p=Pt().add(u),m=new Yh(St.min(),new Map,new me(Ut),f,p);await N2(a,m),a.du=a.du.remove(u),a.Au.delete(t),_g(a)}else await dm(a.localStore,t,!1).then((()=>gm(a,t,r))).catch(vo)}async function Cj(n,t){const r=Rt(n),a=t.batch.batchId;try{const o=await PI(r.localStore,t);O2(r,a,null),M2(r,a),r.sharedClientState.updateMutationState(a,"acknowledged"),await fu(r,o)}catch(o){await vo(o)}}async function Ij(n,t,r){const a=Rt(n);try{const o=await(function(f,p){const m=Rt(f);return m.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let v;return m.mutationQueue.lookupMutationBatch(g,p).next((w=>(Gt(w!==null,37113),v=w.keys(),m.mutationQueue.removeMutationBatch(g,w)))).next((()=>m.mutationQueue.performConsistencyCheck(g))).next((()=>m.documentOverlayCache.removeOverlaysForBatchId(g,v,p))).next((()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v))).next((()=>m.localDocuments.getDocuments(g,v)))}))})(a.localStore,t);O2(a,t,r),M2(a,t),a.sharedClientState.updateMutationState(t,"rejected",r),await fu(a,o)}catch(o){await vo(o)}}function M2(n,t){(n.mu.get(t)||[]).forEach((r=>{r.resolve()})),n.mu.delete(t)}function O2(n,t,r){const a=Rt(n);let o=a.Vu[a.currentUser.toKey()];if(o){const u=o.get(t);u&&(r?u.reject(r):u.resolve(),o=o.remove(t)),a.Vu[a.currentUser.toKey()]=o}}function gm(n,t,r=null){n.sharedClientState.removeLocalQueryTarget(t);for(const a of n.Iu.get(t))n.Tu.delete(a),r&&n.Pu.yu(a,r);n.Iu.delete(t),n.isPrimaryClient&&n.Ru.jr(t).forEach((a=>{n.Ru.containsKey(a)||V2(n,a)}))}function V2(n,t){n.Eu.delete(t.path.canonicalString());const r=n.du.get(t);r!==null&&(fg(n.remoteStore,r),n.du=n.du.remove(t),n.Au.delete(r),_g(n))}function zv(n,t,r){for(const a of r)a instanceof I2?(n.Ru.addReference(a.key,t),jj(n,a)):a instanceof j2?(pt(vg,"Document no longer in limbo: "+a.key),n.Ru.removeReference(a.key,t),n.Ru.containsKey(a.key)||V2(n,a.key)):wt(19791,{wu:a})}function jj(n,t){const r=t.key,a=r.path.canonicalString();n.du.get(r)||n.Eu.has(a)||(pt(vg,"New document in limbo: "+r),n.Eu.add(a),_g(n))}function _g(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const r=new vt(ae.fromString(t)),a=n.fu.next();n.Au.set(a,new vj(r)),n.du=n.du.insert(r,a),_2(n.remoteStore,new Yr(bi(ig(r.path)),a,"TargetPurposeLimboResolution",Bh.ce))}}async function fu(n,t,r){const a=Rt(n),o=[],u=[],f=[];a.Tu.isEmpty()||(a.Tu.forEach(((p,m)=>{f.push(a.pu(m,t,r).then((g=>{if((g||r)&&a.isPrimaryClient){const v=g?!g.fromCache:r?.targetChanges.get(m.targetId)?.current;a.sharedClientState.updateQueryState(m.targetId,v?"current":"not-current")}if(g){o.push(g);const v=cg.As(m.targetId,g);u.push(v)}})))})),await Promise.all(f),a.Pu.H_(o),await(async function(m,g){const v=Rt(m);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(w=>st.forEach(g,(S=>st.forEach(S.Es,(R=>v.persistence.referenceDelegate.addReference(w,S.targetId,R))).next((()=>st.forEach(S.ds,(R=>v.persistence.referenceDelegate.removeReference(w,S.targetId,R)))))))))}catch(w){if(!_o(w))throw w;pt(hg,"Failed to update sequence numbers: "+w)}for(const w of g){const S=w.targetId;if(!w.fromCache){const R=v.Ms.get(S),O=R.snapshotVersion,B=R.withLastLimboFreeSnapshotVersion(O);v.Ms=v.Ms.insert(S,B)}}})(a.localStore,u))}async function Dj(n,t){const r=Rt(n);if(!r.currentUser.isEqual(t)){pt(vg,"User change. New user:",t.toKey());const a=await g2(r.localStore,t);r.currentUser=t,(function(u,f){u.mu.forEach((p=>{p.forEach((m=>{m.reject(new ft(nt.CANCELLED,f))}))})),u.mu.clear()})(r,"'waitForPendingWrites' promise is rejected due to a user change."),r.sharedClientState.handleUserChange(t,a.removedBatchIds,a.addedBatchIds),await fu(r,a.Ls)}}function Nj(n,t){const r=Rt(n),a=r.Au.get(t);if(a&&a.hu)return Pt().add(a.key);{let o=Pt();const u=r.Iu.get(t);if(!u)return o;for(const f of u){const p=r.Tu.get(f);o=o.unionWith(p.view.nu)}return o}}function k2(n){const t=Rt(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=N2.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Nj.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Rj.bind(null,t),t.Pu.H_=mj.bind(null,t.eventManager),t.Pu.yu=gj.bind(null,t.eventManager),t}function Mj(n){const t=Rt(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Cj.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Ij.bind(null,t),t}class Ch{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Qh(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,r){return null}Mu(t,r){return null}vu(t){return UI(this.persistence,new OI,t.initialUser,this.serializer)}Cu(t){return new m2(ug.mi,this.serializer)}Du(t){return new qI}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ch.provider={build:()=>new Ch};class Oj extends Ch{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,r){Gt(this.persistence.referenceDelegate instanceof Ah,46915);const a=this.persistence.referenceDelegate.garbageCollector;return new vI(a,t.asyncQueue,r)}Cu(t){const r=this.cacheSizeBytes!==void 0?yn.withCacheSize(this.cacheSizeBytes):yn.DEFAULT;return new m2((a=>Ah.mi(a,r)),this.serializer)}}class ym{async initialize(t,r){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(r),this.remoteStore=this.createRemoteStore(r),this.eventManager=this.createEventManager(r),this.syncEngine=this.createSyncEngine(r,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>Lv(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=Dj.bind(null,this.syncEngine),await fj(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new pj})()}createDatastore(t){const r=Qh(t.databaseInfo.databaseId),a=(function(u){return new QI(u)})(t.databaseInfo);return(function(u,f,p,m){return new JI(u,f,p,m)})(t.authCredentials,t.appCheckCredentials,a,r)}createRemoteStore(t){return(function(a,o,u,f,p){return new ej(a,o,u,f,p)})(this.localStore,this.datastore,t.asyncQueue,(r=>Lv(this.syncEngine,r,0)),(function(){return Mv.v()?new Mv:new KI})())}createSyncEngine(t,r){return(function(o,u,f,p,m,g,v){const w=new _j(o,u,f,p,m,g);return v&&(w.gu=!0),w})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,r)}async terminate(){await(async function(r){const a=Rt(r);pt(Wa,"RemoteStore shutting down."),a.Ea.add(5),await hu(a),a.Aa.shutdown(),a.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}ym.provider={build:()=>new ym};/**
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
 */class U2{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):sr("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,r){setTimeout((()=>{this.muted||t(r)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra="FirestoreClient";class Vj{constructor(t,r,a,o,u){this.authCredentials=t,this.appCheckCredentials=r,this.asyncQueue=a,this.databaseInfo=o,this.user=an.UNAUTHENTICATED,this.clientId=Wm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(a,(async f=>{pt(ra,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f})),this.appCheckCredentials.start(a,(f=>(pt(ra,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new er;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(r){const a=yg(r,"Failed to shutdown persistence");t.reject(a)}})),t.promise}}async function jp(n,t){n.asyncQueue.verifyOperationInProgress(),pt(ra,"Initializing OfflineComponentProvider");const r=n.configuration;await t.initialize(r);let a=r.initialUser;n.setCredentialChangeListener((async o=>{a.isEqual(o)||(await g2(t.localStore,o),a=o)})),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t}async function Bv(n,t){n.asyncQueue.verifyOperationInProgress();const r=await kj(n);pt(ra,"Initializing OnlineComponentProvider"),await t.initialize(r,n.configuration),n.setCredentialChangeListener((a=>Vv(t.remoteStore,a))),n.setAppCheckTokenChangeListener(((a,o)=>Vv(t.remoteStore,o))),n._onlineComponents=t}async function kj(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){pt(ra,"Using user provided OfflineComponentProvider");try{await jp(n,n._uninitializedComponentsProvider._offline)}catch(t){const r=t;if(!(function(o){return o.name==="FirebaseError"?o.code===nt.FAILED_PRECONDITION||o.code===nt.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(r))throw r;ro("Error using user provided cache. Falling back to memory cache: "+r),await jp(n,new Ch)}}else pt(ra,"Using default OfflineComponentProvider"),await jp(n,new Oj(void 0));return n._offlineComponents}async function P2(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(pt(ra,"Using user provided OnlineComponentProvider"),await Bv(n,n._uninitializedComponentsProvider._online)):(pt(ra,"Using default OnlineComponentProvider"),await Bv(n,new ym))),n._onlineComponents}function Uj(n){return P2(n).then((t=>t.syncEngine))}async function L2(n){const t=await P2(n),r=t.eventManager;return r.onListen=Ej.bind(null,t.syncEngine),r.onUnlisten=Tj.bind(null,t.syncEngine),r.onFirstRemoteStoreListen=bj.bind(null,t.syncEngine),r.onLastRemoteStoreUnlisten=Sj.bind(null,t.syncEngine),r}function Pj(n,t,r={}){const a=new er;return n.asyncQueue.enqueueAndForget((async()=>(function(u,f,p,m,g){const v=new U2({next:S=>{v.Nu(),f.enqueueAndForget((()=>R2(u,w)));const R=S.docs.has(p);!R&&S.fromCache?g.reject(new ft(nt.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&S.fromCache&&m&&m.source==="server"?g.reject(new ft(nt.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(S)},error:S=>g.reject(S)}),w=new C2(ig(p.path),v,{includeMetadataChanges:!0,qa:!0});return A2(u,w)})(await L2(n),n.asyncQueue,t,r,a))),a.promise}function Lj(n,t,r={}){const a=new er;return n.asyncQueue.enqueueAndForget((async()=>(function(u,f,p,m,g){const v=new U2({next:S=>{v.Nu(),f.enqueueAndForget((()=>R2(u,w))),S.fromCache&&m.source==="server"?g.reject(new ft(nt.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(S)},error:S=>g.reject(S)}),w=new C2(p,v,{includeMetadataChanges:!0,qa:!0});return A2(u,w)})(await L2(n),n.asyncQueue,t,r,a))),a.promise}/**
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
 */function z2(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const $v=new Map;/**
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
 */const B2="firestore.googleapis.com",Fv=!0;class qv{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new ft(nt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=B2,this.ssl=Fv}else this.host=t.host,this.ssl=t.ssl??Fv;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=p2;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<yI)throw new ft(nt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}eC("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=z2(t.experimentalLongPollingOptions??{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new ft(nt.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new ft(nt.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new ft(nt.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(a,o){return a.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Zh{constructor(t,r,a,o){this._authCredentials=t,this._appCheckCredentials=r,this._databaseId=a,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ft(nt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new ft(nt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qv(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(a){if(!a)return new K6;switch(a.type){case"firstParty":return new Q6(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new ft(nt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(r){const a=$v.get(r);a&&(pt("ComponentProvider","Removing Datastore"),$v.delete(r),a.terminate())})(this),Promise.resolve()}}function zj(n,t,r,a={}){n=or(n,Zh);const o=Gm(t),u=n._getSettings(),f={...u,emulatorOptions:n._getEmulatorOptions()},p=`${t}:${r}`;o&&(xR(`https://${p}`),bR("Firestore",!0)),u.host!==B2&&u.host!==p&&ro("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m={...u,host:p,ssl:o,emulatorOptions:a};if(!xh(m,f)&&(n._setSettings(m),a.mockUserToken)){let g,v;if(typeof a.mockUserToken=="string")g=a.mockUserToken,v=an.MOCK_USER;else{g=vR(a.mockUserToken,n._app?.options.projectId);const w=a.mockUserToken.sub||a.mockUserToken.user_id;if(!w)throw new ft(nt.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new an(w)}n._authCredentials=new H6(new TE(g,v))}}/**
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
 */class ts{constructor(t,r,a){this.converter=r,this._query=a,this.type="query",this.firestore=t}withConverter(t){return new ts(this.firestore,t,this._query)}}class Ae{constructor(t,r,a){this.converter=r,this._key=a,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ae(this.firestore,t,this._key)}toJSON(){return{type:Ae._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,r,a){if(lu(r,Ae._jsonSchema))return new Ae(t,a||null,new vt(ae.fromString(r.referencePath)))}}Ae._jsonSchemaVersion="firestore/documentReference/1.0",Ae._jsonSchema={type:Ne("string",Ae._jsonSchemaVersion),referencePath:Ne("string")};class Zr extends ts{constructor(t,r,a){super(t,r,ig(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ae(this.firestore,null,new vt(t))}withConverter(t){return new Zr(this.firestore,t,this._path)}}function uh(n,t,...r){if(n=rr(n),SE("collection","path",t),n instanceof Zh){const a=ae.fromString(t,...r);return iv(a),new Zr(n,null,a)}{if(!(n instanceof Ae||n instanceof Zr))throw new ft(nt.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=n._path.child(ae.fromString(t,...r));return iv(a),new Zr(n.firestore,null,a)}}function ql(n,t,...r){if(n=rr(n),arguments.length===1&&(t=Wm.newId()),SE("doc","path",t),n instanceof Zh){const a=ae.fromString(t,...r);return nv(a),new Ae(n,null,new vt(a))}{if(!(n instanceof Ae||n instanceof Zr))throw new ft(nt.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=n._path.child(ae.fromString(t,...r));return nv(a),new Ae(n.firestore,n instanceof Zr?n.converter:null,new vt(a))}}/**
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
 */const Kv="AsyncQueue";class Hv{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new x2(this,"async_queue_retry"),this._c=()=>{const a=Ip();a&&pt(Kv,"Visibility state changed to "+a.visibilityState),this.M_.w_()},this.ac=t;const r=Ip();r&&typeof r.addEventListener=="function"&&r.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const r=Ip();r&&typeof r.removeEventListener=="function"&&r.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const r=new er;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(r.resolve,r.reject),r.promise))).then((()=>r.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!_o(t))throw t;pt(Kv,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const r=this.ac.then((()=>(this.rc=!0,t().catch((a=>{throw this.nc=a,this.rc=!1,sr("INTERNAL UNHANDLED ERROR: ",Gv(a)),a})).then((a=>(this.rc=!1,a))))));return this.ac=r,r}enqueueAfterDelay(t,r,a){this.uc(),this.oc.indexOf(t)>-1&&(r=0);const o=gg.createAndSchedule(this,t,r,a,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&wt(47125,{Pc:Gv(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const r of this.tc)if(r.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((r,a)=>r.targetTimeMs-a.targetTimeMs));for(const r of this.tc)if(r.skipDelay(),t!=="all"&&r.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const r=this.tc.indexOf(t);this.tc.splice(r,1)}}function Gv(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class du extends Zh{constructor(t,r,a,o){super(t,r,a,o),this.type="firestore",this._queue=new Hv,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Hv(t),this._firestoreClient=void 0,await t}}}function $2(n,t){const r=typeof n=="object"?n:N6(),a=typeof n=="string"?n:Eh,o=R6(r,"firestore").getImmediate({identifier:a});if(!o._initialized){const u=gR("firestore");u&&zj(o,...u)}return o}function Eg(n){if(n._terminated)throw new ft(nt.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Bj(n),n._firestoreClient}function Bj(n){const t=n._freezeSettings(),r=(function(o,u,f,p){return new fC(o,u,f,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,z2(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,t);n._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new Vj(n._authCredentials,n._appCheckCredentials,n._queue,r,n._componentsProvider&&(function(o){const u=o?._online.build();return{_offline:o?._offline.build(u),_online:u}})(n._componentsProvider))}/**
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
 */class $n{constructor(t){this._byteString=t}static fromBase64String(t){try{return new $n(Ze.fromBase64String(t))}catch(r){throw new ft(nt.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+r)}}static fromUint8Array(t){return new $n(Ze.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:$n._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(lu(t,$n._jsonSchema))return $n.fromBase64String(t.bytes)}}$n._jsonSchemaVersion="firestore/bytes/1.0",$n._jsonSchema={type:Ne("string",$n._jsonSchemaVersion),bytes:Ne("string")};/**
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
 */class Jh{constructor(...t){for(let r=0;r<t.length;++r)if(t[r].length===0)throw new ft(nt.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class tf{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(t,r){if(!isFinite(t)||t<-90||t>90)throw new ft(nt.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(r)||r<-180||r>180)throw new ft(nt.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+r);this._lat=t,this._long=r}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Ut(this._lat,t._lat)||Ut(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Si._jsonSchemaVersion}}static fromJSON(t){if(lu(t,Si._jsonSchema))return new Si(t.latitude,t.longitude)}}Si._jsonSchemaVersion="firestore/geoPoint/1.0",Si._jsonSchema={type:Ne("string",Si._jsonSchemaVersion),latitude:Ne("number"),longitude:Ne("number")};/**
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
 */class Ai{constructor(t){this._values=(t||[]).map((r=>r))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(a,o){if(a.length!==o.length)return!1;for(let u=0;u<a.length;++u)if(a[u]!==o[u])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Ai._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(lu(t,Ai._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((r=>typeof r=="number")))return new Ai(t.vectorValues);throw new ft(nt.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ai._jsonSchemaVersion="firestore/vectorValue/1.0",Ai._jsonSchema={type:Ne("string",Ai._jsonSchemaVersion),vectorValues:Ne("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $j=/^__.*__$/;class Fj{constructor(t,r,a){this.data=t,this.fieldMask=r,this.fieldTransforms=a}toMutation(t,r){return this.fieldMask!==null?new sa(t,this.data,this.fieldMask,r,this.fieldTransforms):new uu(t,this.data,r,this.fieldTransforms)}}class F2{constructor(t,r,a){this.data=t,this.fieldMask=r,this.fieldTransforms=a}toMutation(t,r){return new sa(t,this.data,this.fieldMask,r,this.fieldTransforms)}}function q2(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw wt(40011,{Ac:n})}}class bg{constructor(t,r,a,o,u,f){this.settings=t,this.databaseId=r,this.serializer=a,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new bg({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const r=this.path?.child(t),a=this.Vc({path:r,fc:!1});return a.gc(t),a}yc(t){const r=this.path?.child(t),a=this.Vc({path:r,fc:!1});return a.Rc(),a}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return Ih(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((r=>t.isPrefixOf(r)))!==void 0||this.fieldTransforms.find((r=>t.isPrefixOf(r.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(q2(this.Ac)&&$j.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class qj{constructor(t,r,a){this.databaseId=t,this.ignoreUndefinedProperties=r,this.serializer=a||Qh(t)}Cc(t,r,a,o=!1){return new bg({Ac:t,methodName:r,Dc:a,path:We.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wg(n){const t=n._freezeSettings(),r=Qh(n._databaseId);return new qj(n._databaseId,!!t.ignoreUndefinedProperties,r)}function Kj(n,t,r,a,o,u={}){const f=n.Cc(u.merge||u.mergeFields?2:0,t,r,o);Sg("Data must be an object, but it was:",f,a);const p=K2(a,f);let m,g;if(u.merge)m=new In(f.fieldMask),g=f.fieldTransforms;else if(u.mergeFields){const v=[];for(const w of u.mergeFields){const S=xm(t,w,r);if(!f.contains(S))throw new ft(nt.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);G2(v,S)||v.push(S)}m=new In(v),g=f.fieldTransforms.filter((w=>m.covers(w.field)))}else m=null,g=f.fieldTransforms;return new Fj(new xn(p),m,g)}class ef extends tf{_toFieldTransform(t){if(t.Ac!==2)throw t.Ac===1?t.Sc(`${this._methodName}() can only appear at the top level of your update data`):t.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof ef}}class Tg extends tf{constructor(t,r){super(t),this.Fc=r}_toFieldTransform(t){const r=new au(t.serializer,XE(t.serializer,this.Fc));return new UC(t.path,r)}isEqual(t){return t instanceof Tg&&this.Fc===t.Fc}}function Hj(n,t,r,a){const o=n.Cc(1,t,r);Sg("Data must be an object, but it was:",o,a);const u=[],f=xn.empty();aa(a,((m,g)=>{const v=Ag(t,m,r);g=rr(g);const w=o.yc(v);if(g instanceof ef)u.push(v);else{const S=pu(g,w);S!=null&&(u.push(v),f.set(v,S))}}));const p=new In(u);return new F2(f,p,o.fieldTransforms)}function Gj(n,t,r,a,o,u){const f=n.Cc(1,t,r),p=[xm(t,a,r)],m=[o];if(u.length%2!=0)throw new ft(nt.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<u.length;S+=2)p.push(xm(t,u[S])),m.push(u[S+1]);const g=[],v=xn.empty();for(let S=p.length-1;S>=0;--S)if(!G2(g,p[S])){const R=p[S];let O=m[S];O=rr(O);const B=f.yc(R);if(O instanceof ef)g.push(R);else{const P=pu(O,B);P!=null&&(g.push(R),v.set(R,P))}}const w=new In(g);return new F2(v,w,f.fieldTransforms)}function Yj(n,t,r,a=!1){return pu(r,n.Cc(a?4:3,t))}function pu(n,t){if(H2(n=rr(n)))return Sg("Unsupported field value:",t,n),K2(n,t);if(n instanceof tf)return(function(a,o){if(!q2(o.Ac))throw o.Sc(`${a._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${a._methodName}() is not currently supported inside arrays`);const u=a._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(a,o){const u=[];let f=0;for(const p of a){let m=pu(p,o.wc(f));m==null&&(m={nullValue:"NULL_VALUE"}),u.push(m),f++}return{arrayValue:{values:u}}})(n,t)}return(function(a,o){if((a=rr(a))===null)return{nullValue:"NULL_VALUE"};if(typeof a=="number")return XE(o.serializer,a);if(typeof a=="boolean")return{booleanValue:a};if(typeof a=="string")return{stringValue:a};if(a instanceof Date){const u=le.fromDate(a);return{timestampValue:Sh(o.serializer,u)}}if(a instanceof le){const u=new le(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:Sh(o.serializer,u)}}if(a instanceof Si)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof $n)return{bytesValue:o2(o.serializer,a._byteString)};if(a instanceof Ae){const u=o.databaseId,f=a.firestore._databaseId;if(!f.isEqual(u))throw o.Sc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:og(a.firestore._databaseId||o.databaseId,a._key.path)}}if(a instanceof Ai)return(function(f,p){return{mapValue:{fields:{[OE]:{stringValue:VE},[bh]:{arrayValue:{values:f.toArray().map((g=>{if(typeof g!="number")throw p.Sc("VectorValues must only contain numeric values.");return rg(p.serializer,g)}))}}}}}})(a,o);throw o.Sc(`Unsupported field value: ${zh(a)}`)})(n,t)}function K2(n,t){const r={};return CE(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):aa(n,((a,o)=>{const u=pu(o,t.mc(a));u!=null&&(r[a]=u)})),{mapValue:{fields:r}}}function H2(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof le||n instanceof Si||n instanceof $n||n instanceof Ae||n instanceof tf||n instanceof Ai)}function Sg(n,t,r){if(!H2(r)||!AE(r)){const a=zh(r);throw a==="an object"?t.Sc(n+" a custom object"):t.Sc(n+" "+a)}}function xm(n,t,r){if((t=rr(t))instanceof Jh)return t._internalPath;if(typeof t=="string")return Ag(n,t);throw Ih("Field path arguments must be of type string or ",n,!1,void 0,r)}const Qj=new RegExp("[~\\*/\\[\\]]");function Ag(n,t,r){if(t.search(Qj)>=0)throw Ih(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,r);try{return new Jh(...t.split("."))._internalPath}catch{throw Ih(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,r)}}function Ih(n,t,r,a,o){const u=a&&!a.isEmpty(),f=o!==void 0;let p=`Function ${t}() called with invalid data`;r&&(p+=" (via `toFirestore()`)"),p+=". ";let m="";return(u||f)&&(m+=" (found",u&&(m+=` in field ${a}`),f&&(m+=` in document ${o}`),m+=")"),new ft(nt.INVALID_ARGUMENT,p+n+m)}function G2(n,t){return n.some((r=>r.isEqual(t)))}/**
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
 */class Y2{constructor(t,r,a,o,u){this._firestore=t,this._userDataWriter=r,this._key=a,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new Ae(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Xj(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const r=this._document.data.field(Rg("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r)}}}class Xj extends Y2{data(){return super.data()}}function Rg(n,t){return typeof t=="string"?Ag(n,t):t instanceof Jh?t._internalPath:t._delegate._internalPath}/**
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
 */function Wj(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ft(nt.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Cg{}class Q2 extends Cg{}function Yv(n,t,...r){let a=[];t instanceof Cg&&a.push(t),a=a.concat(r),(function(u){const f=u.filter((m=>m instanceof jg)).length,p=u.filter((m=>m instanceof Ig)).length;if(f>1||f>0&&p>0)throw new ft(nt.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(a);for(const o of a)n=o._apply(n);return n}class Ig extends Q2{constructor(t,r,a){super(),this._field=t,this._op=r,this._value=a,this.type="where"}static _create(t,r,a){return new Ig(t,r,a)}_apply(t){const r=this._parse(t);return X2(t._query,r),new ts(t.firestore,t.converter,om(t._query,r))}_parse(t){const r=wg(t.firestore);return(function(u,f,p,m,g,v,w){let S;if(g.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new ft(nt.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){Wv(w,v);const O=[];for(const B of w)O.push(Xv(m,u,B));S={arrayValue:{values:O}}}else S=Xv(m,u,w)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||Wv(w,v),S=Yj(p,f,w,v==="in"||v==="not-in");return De.create(g,v,S)})(t._query,"where",r,t.firestore._databaseId,this._field,this._op,this._value)}}class jg extends Cg{constructor(t,r){super(),this.type=t,this._queryConstraints=r}static _create(t,r){return new jg(t,r)}_parse(t){const r=this._queryConstraints.map((a=>a._parse(t))).filter((a=>a.getFilters().length>0));return r.length===1?r[0]:ri.create(r,this._getOperator())}_apply(t){const r=this._parse(t);return r.getFilters().length===0?t:((function(o,u){let f=o;const p=u.getFlattenedFilters();for(const m of p)X2(f,m),f=om(f,m)})(t._query,r),new ts(t.firestore,t.converter,om(t._query,r)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Dg extends Q2{constructor(t,r){super(),this._field=t,this._direction=r,this.type="orderBy"}static _create(t,r){return new Dg(t,r)}_apply(t){const r=(function(o,u,f){if(o.startAt!==null)throw new ft(nt.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ft(nt.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new nu(u,f)})(t._query,this._field,this._direction);return new ts(t.firestore,t.converter,(function(o,u){const f=o.explicitOrderBy.concat([u]);return new Eo(o.path,o.collectionGroup,f,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(t._query,r))}}function Qv(n,t="asc"){const r=t,a=Rg("orderBy",n);return Dg._create(a,r)}function Xv(n,t,r){if(typeof(r=rr(r))=="string"){if(r==="")throw new ft(nt.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!FE(t)&&r.indexOf("/")!==-1)throw new ft(nt.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${r}' contains a '/' character.`);const a=t.path.child(ae.fromString(r));if(!vt.isDocumentKey(a))throw new ft(nt.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${a}' is not because it has an odd number of segments (${a.length}).`);return hv(n,new vt(a))}if(r instanceof Ae)return hv(n,r._key);throw new ft(nt.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${zh(r)}.`)}function Wv(n,t){if(!Array.isArray(n)||n.length===0)throw new ft(nt.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function X2(n,t){const r=(function(o,u){for(const f of o)for(const p of f.getFlattenedFilters())if(u.indexOf(p.op)>=0)return p.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(r!==null)throw r===t.op?new ft(nt.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new ft(nt.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${r.toString()}' filters.`)}class Zj{convertValue(t,r="none"){switch(na(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Se(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,r);case 5:return t.stringValue;case 6:return this.convertBytes(ea(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,r);case 11:return this.convertObject(t.mapValue,r);case 10:return this.convertVectorValue(t.mapValue);default:throw wt(62114,{value:t})}}convertObject(t,r){return this.convertObjectMap(t.fields,r)}convertObjectMap(t,r="none"){const a={};return aa(t,((o,u)=>{a[o]=this.convertValue(u,r)})),a}convertVectorValue(t){const r=t.fields?.[bh].arrayValue?.values?.map((a=>Se(a.doubleValue)));return new Ai(r)}convertGeoPoint(t){return new Si(Se(t.latitude),Se(t.longitude))}convertArray(t,r){return(t.values||[]).map((a=>this.convertValue(a,r)))}convertServerTimestamp(t,r){switch(r){case"previous":const a=Fh(t);return a==null?null:this.convertValue(a,r);case"estimate":return this.convertTimestamp(Jl(t));default:return null}}convertTimestamp(t){const r=ta(t);return new le(r.seconds,r.nanos)}convertDocumentKey(t,r){const a=ae.fromString(t);Gt(d2(a),9688,{name:t});const o=new tu(a.get(1),a.get(3)),u=new vt(a.popFirst(5));return o.isEqual(r)||sr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),u}}/**
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
 */function Jj(n,t,r){let a;return a=n?r&&(r.merge||r.mergeFields)?n.toFirestore(t,r):n.toFirestore(t):t,a}class kl{constructor(t,r){this.hasPendingWrites=t,this.fromCache=r}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Qa extends Y2{constructor(t,r,a,o,u,f){super(t,r,a,o,f),this._firestore=t,this._firestoreImpl=t,this.metadata=u}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const r=new ch(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(r,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,r={}){if(this._document){const a=this._document.data.field(Rg("DocumentSnapshot.get",t));if(a!==null)return this._userDataWriter.convertValue(a,r.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ft(nt.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,r={};return r.type=Qa._jsonSchemaVersion,r.bundle="",r.bundleSource="DocumentSnapshot",r.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?r:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),r.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),r)}}Qa._jsonSchemaVersion="firestore/documentSnapshot/1.0",Qa._jsonSchema={type:Ne("string",Qa._jsonSchemaVersion),bundleSource:Ne("string","DocumentSnapshot"),bundleName:Ne("string"),bundle:Ne("string")};class ch extends Qa{data(t={}){return super.data(t)}}class Zs{constructor(t,r,a,o){this._firestore=t,this._userDataWriter=r,this._snapshot=o,this.metadata=new kl(o.hasPendingWrites,o.fromCache),this.query=a}get docs(){const t=[];return this.forEach((r=>t.push(r))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,r){this._snapshot.docs.forEach((a=>{t.call(r,new ch(this._firestore,this._userDataWriter,a.key,a,new kl(this._snapshot.mutatedKeys.has(a.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const r=!!t.includeMetadataChanges;if(r&&this._snapshot.excludesMetadataChanges)throw new ft(nt.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===r||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map((p=>{const m=new ch(o._firestore,o._userDataWriter,p.doc.key,p.doc,new kl(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:m,oldIndex:-1,newIndex:f++}}))}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((p=>u||p.type!==3)).map((p=>{const m=new ch(o._firestore,o._userDataWriter,p.doc.key,p.doc,new kl(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let g=-1,v=-1;return p.type!==0&&(g=f.indexOf(p.doc.key),f=f.delete(p.doc.key)),p.type!==1&&(f=f.add(p.doc),v=f.indexOf(p.doc.key)),{type:t3(p.type),doc:m,oldIndex:g,newIndex:v}}))}})(this,r),this._cachedChangesIncludeMetadataChanges=r),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ft(nt.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Zs._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Wm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const r=[],a=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(r.push(u._document),a.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function t3(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return wt(61501,{type:n})}}/**
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
 */function hh(n){n=or(n,Ae);const t=or(n.firestore,du);return Pj(Eg(t),n._key).then((r=>e3(t,n,r)))}Zs._jsonSchemaVersion="firestore/querySnapshot/1.0",Zs._jsonSchema={type:Ne("string",Zs._jsonSchemaVersion),bundleSource:Ne("string","QuerySnapshot"),bundleName:Ne("string"),bundle:Ne("string")};class W2 extends Zj{constructor(t){super(),this.firestore=t}convertBytes(t){return new $n(t)}convertReference(t){const r=this.convertDocumentKey(t,this.firestore._databaseId);return new Ae(this.firestore,null,r)}}function vm(n){n=or(n,ts);const t=or(n.firestore,du),r=Eg(t),a=new W2(t);return Wj(n._query),Lj(r,n._query).then((o=>new Zs(t,a,n,o)))}function Ng(n,t,r){n=or(n,Ae);const a=or(n.firestore,du),o=Jj(n.converter,t,r);return Z2(a,[Kj(wg(a),"setDoc",n._key,o,n.converter!==null,r).toMutation(n._key,wi.none())])}function jh(n,t,r,...a){n=or(n,Ae);const o=or(n.firestore,du),u=wg(o);let f;return f=typeof(t=rr(t))=="string"||t instanceof Jh?Gj(u,"updateDoc",n._key,t,r,a):Hj(u,"updateDoc",n._key,t),Z2(o,[f.toMutation(n._key,wi.exists(!0))])}function Z2(n,t){return(function(a,o){const u=new er;return a.asyncQueue.enqueueAndForget((async()=>Aj(await Uj(a),o,u))),u.promise})(Eg(n),t)}function e3(n,t,r){const a=r.docs.get(t._key),o=new W2(n);return new Qa(n,o,t._key,a,new kl(r.hasPendingWrites,r.fromCache),t.converter)}function Dh(n){return new Tg("increment",n)}(function(t,r=!0){(function(o){xo=o})(D6),vh(new Ql("firestore",((a,{instanceIdentifier:o,options:u})=>{const f=a.getProvider("app").getImmediate(),p=new du(new G6(a.getProvider("auth-internal")),new X6(f,a.getProvider("app-check-internal")),(function(g,v){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ft(nt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tu(g.options.projectId,v)})(f,o),f);return u={useFetchStreams:r,...u},p._setSettings(u),p}),"PUBLIC").setMultipleInstances(!0)),Xs(Zx,Jx,t),Xs(Zx,Jx,"esm2020")})();const n3={apiKey:"AIzaSyAEFzPwTADLzuxWuyk889Jz1cHPsEgLOkQ",authDomain:"tu2025grad.firebaseapp.com",projectId:"tu2025grad",storageBucket:"tu2025grad.firebasestorage.app",messagingSenderId:"553768466639",appId:"1:553768466639:web:7c16f5d6432da7ebc05fba"},i3=Gx().length?Gx()[0]:Qm(n3),Kl=$2(i3),Zv=40;function J2(n){if(!n)return n;const t="/TU2025gradulate/";if(/^https?:\/\//i.test(n))return n;const r=n.replace(/^\.\.\//,"").replace(/^\//,"");return t+r}const r3=A.div`
  position: relative; background: #fff;
`,a3=A.div`
  padding-left: ${Zv}px; padding-right: ${Zv}px; display: flex; flex-direction: column;
  @media (max-width: 640px) {
    padding-left: 16px;
    padding-right: 16px;  
 }
`;function s3({children:n}){return x.jsx(r3,{children:x.jsx(a3,{children:n})})}const o3=A.div`
  position: relative;
  min-height: calc(100vh - 200px);
`,l3=A.div`
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
`,u3=A.div`
  display: none;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 21px;
  font-family: 'Pretendard', system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.6px;
  color: #000000;
  margin-top: 4px;
  @media (max-width: 640px) {
    display: flex;
  }
`,Jv=Yl,tb=qm,c3={"All Projects":null,"AI & Robot":"c0","Edu & Kids":"c1","Health Care":"c2","IT & Tech":"c3",Living:"c4",Mobility:"c5"};function _m(n){return n.members.map(t=>{const r=tb.find(a=>a.num===t);return r?r.nameKor:""}).filter(Boolean).join(", ")}function h3(n){return n.members.map(t=>{const r=tb.find(a=>a.num===t);return r?J2(r.imgUrl):""}).filter(Boolean)}function f3({list:n,statsById:t}){const r={c0:"A",c1:"E",c2:"H",c3:"I",c4:"L",c5:"M"};return x.jsx(l3,{children:n.map((a,o)=>{const u=_m(a),f=h3(a),p=String(a.projectNum+1).padStart(3,"0"),g=`${r[a.category]||"A"}${p}`,v=a.projectNum??a.num;return x.jsx(Km,{titleKor:a.titleKor,titleEng:a.titleEng,src:J2(`/projects/${a.projectNum}/thumb.jpg`),nameKor:u,profileImgs:f,docId:v,href:`/work/${g}`,like:t[String(v)]?.like??0,view:t[String(v)]?.view??0},o)})})}function d3(){const[n,t]=Dt.useState("All Projects"),[r,a]=Dt.useState("이름순"),[o,u]=Dt.useState({});Dt.useEffect(()=>{let m=!0;return(async()=>{try{const g=await vm(uh(Kl,"works"));if(!m)return;const v={};g.forEach(w=>{const S=w.data()||{};v[String(w.id)]={like:typeof S.like=="number"?S.like:0,view:typeof S.view=="number"?S.view:0}}),u(v)}catch(g){console.error("Failed to load works stats:",g)}})(),()=>{m=!1}},[]);const f=Dt.useMemo(()=>{const m=c3[n]||null;return m?Jv.filter(g=>g.category===m):Jv},[n]),p=Dt.useMemo(()=>{const m=[...f];switch(r){case"이름순":m.sort((g,v)=>_m(g).localeCompare(_m(v),"ko"));break;case"좋아요순":m.sort((g,v)=>{const w=String(g.projectNum??g.num),S=String(v.projectNum??v.num),R=o[w]?.like??0;return(o[S]?.like??0)-R});break;case"조회수순":m.sort((g,v)=>{const w=String(g.projectNum??g.num),S=String(v.projectNum??v.num),R=o[w]?.view??0;return(o[S]?.view??0)-R});break;case"팀작우선":m.sort((g,v)=>(v.members.length>1)-(g.members.length>1));break;case"개인작우선":m.sort((g,v)=>(g.members.length>1)-(v.members.length>1));break}return m},[f,r,o]);return x.jsxs(o3,{children:[x.jsx(u3,{children:"Projects"}),x.jsx(sE,{type:"project",onCategoryChange:t,onSortChange:a,sortLabel:r}),x.jsx(s3,{children:x.jsx(f3,{list:p,statsById:o})})]})}const p3=A.div(({height:n,from:t,to:r,position:a,z:o})=>({position:"absolute",left:0,right:0,[a]:-1,height:n,pointerEvents:"none",zIndex:o??0,background:`linear-gradient(180deg, ${t} 0%, ${r} 100%)`}));function Mg({position:n="bottom",from:t,to:r,height:a=240,z:o=0,style:u}){return x.jsx(p3,{position:n,from:t,to:r,height:a,z:o,style:u})}const nr={heroToWhite:{from:"rgba(18,18,18,0)",to:"#FFFFFF",h:80},whiteToBlack:{from:"rgba(255,255,255,0)",to:"#121212",h:160},blackToBlackSoft:{from:"rgba(18,18,18,0)",to:"#121212",h:180}},t_="/TU2025gradulate/",m3=A.section`
  position: relative; height: 974px; min-height: 620px; overflow: hidden; background: #121212; z-index: 1;
  @media (max-width: 640px) {
    height: 320px;
    min-height: 220px;
  }
`,g3=A.div`
  position: absolute; inset: 0;
  /* Video container sits here */
`,y3=A.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
`,x3=A.video`
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
`,v3=A.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  aspect-ratio: 1 / 1; /* width defines the square size now */
  transform: translate(-50%, -50%);
  overflow: hidden;
`,_3=A.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,E3=A.div`
  position: absolute;
  inset: 0;
  background-color: rgba(18, 18, 18, 0.2);
`,b3=A.div`
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
`,e_=A.p`
  margin: 0; color: #FFFFFF; font-family: Pretendard, system-ui; font-size: 16px; line-height: 19.2px;
  @media (max-width: 640px) {
    font-size: 13px;
    line-height: 1.4;
  }
`,w3=A.p`
  margin: 0; color: #FFFFFF; font-family: Pretendard, system-ui; font-weight: 600; font-size: 24px; line-height: 27.6px;
  @media (max-width: 640px) {
    font-size: 17px;
    line-height: 1.3;
  }
`,T3=A.button`
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
`;function S3(){const[n,t]=Dt.useState(!1),r=Dt.useRef(null);return Dt.useEffect(()=>()=>{r.current&&clearTimeout(r.current)},[]),x.jsxs(m3,{"aria-label":"Hero",children:[x.jsxs(g3,{children:[x.jsx(y3,{"aria-hidden":!0,children:x.jsx(x3,{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata",children:x.jsx("source",{src:`${t_}video/hero11.mp4`,type:"video/mp4"})})}),x.jsx(v3,{"aria-label":"Hero background video",children:x.jsxs(_3,{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata",onLoadedData:()=>{r.current&&clearTimeout(r.current),r.current=setTimeout(()=>t(!0),15500)},children:[x.jsx("source",{src:`${t_}video/hero11.mp4`,type:"video/mp4"}),"Your browser does not support the video tag."]})}),x.jsx(E3,{})]}),x.jsxs(b3,{$visible:n,children:[x.jsxs(e_,{children:["25. 10. 24. FRI~26. SUN",x.jsx("br",{}),"Hongdae Art Center B2"]}),x.jsx(e_,{children:"Department of Design Engineering"}),x.jsxs(w3,{children:["Tech University of Korea",x.jsx("br",{}),"20th Grad Exhibition"]})]}),x.jsx(T3,{type:"button","aria-label":"View More",children:"View More"}),x.jsx(Mg,{position:"bottom",from:nr.heroToWhite.from,to:nr.heroToWhite.to,height:nr.heroToWhite.h,z:0})]})}const n_="/TU2025gradulate/",A3=A.section`
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  padding-top: 120px;
  padding-bottom: 160px;
  @media (max-width: 640px) {
    padding-top: 32px;
    padding-bottom: 48px;
  }
`,R3=A.div`
  width: 100%;
  max-width: calc(100vw - 80px);
  margin: 0 auto;
  @media (max-width: 640px) {
    max-width: 100%;
    padding: 0 12px;
    box-sizing: border-box;
  }
`,C3=A.div`
  display: flex;
  gap: 94px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 640px) {
    gap: 32px;
  }
`,I3=A.div`
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
`,j3=A.h2`
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
`,D3=A.div`
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
`,N3=A.div`
  display: flex;
  width: 285px;
  height: 285px;
  position: relative;
  overflow: hidden;
  background: #FFFFFF;
  @media (max-width: 640px) {
    display: none;
  }
`,M3=A.div`
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
`;function O3(){return x.jsxs(A3,{"aria-labelledby":"brand-title",children:[x.jsxs(R3,{children:[x.jsxs(C3,{children:[x.jsx(j3,{id:"brand-title",children:"Brand Concept"}),x.jsxs(I3,{children:[x.jsxs(D3,{children:["우리는 살아가며 수많은 순간들을 스쳐 지나간다.",x.jsx("br",{}),"그 순간들은 이내 사라지는 듯하지만,",x.jsx("br",{}),"마음속 깊이 은은히 스며들어 기억이 되고,",x.jsx("br",{}),"결국엔 우리 존재의 한 조각이 된다.",x.jsx("br",{}),x.jsx("br",{}),"<잔향> 전시는 작품이 남긴 향이 관람객에게 스며들어",x.jsx("br",{}),"시간이 지나도 떠오를 수 있는 ‘기억의 향기’를 남기고자 한다.",x.jsx("br",{}),"단순한 결과물의 나열이 아닌, 창작의 과정과 고민이 축적된 흔적들이",x.jsx("br",{}),"이 공간에 머무는 이들의 감각과 감정 속에 잔잔히 머물기를 바란다.",x.jsx("br",{}),x.jsx("br",{}),"전시를 마주한 순간이 훗날, 불현듯 떠오르는 영감으로 다시 피어나기를.",x.jsx("br",{}),"그리하여 우리의 잔향이 누군가의 기억 속에서 오래도록 머물 수 있기를."]}),x.jsx(N3,{children:x.jsx("img",{src:`${n_}brand-logo.png`,alt:"2025 졸업전시 브랜드 로고",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",zIndex:1},draggable:!1})})]})]}),x.jsx(M3,{as:"div",style:{background:"none",height:"auto",justifyContent:"center",alignItems:"center",display:"flex",boxShadow:"none",margin:"32px auto 0",padding:0},children:x.jsx("img",{src:`${n_}brand-variation.png`,alt:"브랜드 컨셉 공식 그래픽",style:{width:"100%",maxWidth:480,height:"auto",display:"block",margin:"0 auto"},draggable:!1})})]}),x.jsx(Mg,{position:"bottom",from:nr.whiteToBlack.from,to:nr.whiteToBlack.to,height:nr.whiteToBlack.h,z:0})]})}const V3='Pretendard, system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial, sans-serif',k3=A.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${n=>n.$size==="sm"?40:52}px;
  padding: 0 ${n=>n.$size==="sm"?16:24}px;
  border: 1px solid #FFFFFF;
  color: #FFFFFF;
  background: transparent;
  font-family: ${V3};
  font-weight: 700;
  font-size: ${n=>n.$size==="sm"?13:14}px;
  letter-spacing: 0.2px;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  width: ${n=>n.$full?"100%":"auto"};
  transition: background .15s ease, color .15s ease, border-color .15s ease;
`,U3=A.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-left: 8px;
  border-top: 1px solid #FFFFFF;
  border-right: 1px solid #FFFFFF;
  transform: rotate(45deg);
`;function nf({as:n="button",href:t,label:r="View More",size:a="md",fullWidth:o=!1,showArrow:u,defaultShowArrow:f=!0,onArrowChange:p,onClick:m,style:g}){const v=typeof u=="boolean",[w,S]=Dt.useState(f),R=v?u:w;Dt.useCallback(()=>{if(v){p&&p(!u);return}S(B=>{const P=!B;return p&&p(P),P})},[v,p,u]);const O={onClick:m,style:g,"data-arrow-visible":R,"data-toggle-arrow-fn":void 0,$size:a,$full:o,as:n,href:t,type:n==="button"?"button":void 0};return x.jsxs(k3,{...O,target:"_blank",rel:"noopener noreferrer",children:[r,R?x.jsx(U3,{"aria-hidden":!0}):null]})}const P3=A.section`
  position: relative;
  padding-top: 120px;
  padding-bottom: 120px;
  background: #121212;
  z-index: 1;
`,L3=A.div`
  width: 100%;
  max-width: 1840px;
  margin: 0 auto;
`,z3=A.div`
  position: relative;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  background: #171717;
`,B3=A.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,$3=A.div`
  position: absolute;
  left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  width: 70px; height: 70px;
  border-radius: 35px;
  background: rgba(255,255,255,0.6);
  backdrop-filter: blur(5px);
`,F3=A.div`
  position: absolute; left: 27px; top: 23px;
  width: 0; height: 0;
  border-left: 16px solid #000;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
`,q3=A.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  @media (max-width: 640px) {
    gap: 10px;
    margin-top: 12px;
  }
`;A.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  @media (max-width: 640px) {
    gap: 8px;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;A.div`
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
`;const K3=A.div`
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
`;function H3(){const n=[{src:"https://placehold.co/910x512",cap:""},{src:"https://placehold.co/727x445",cap:"뭐"},{src:"https://placehold.co/727x445",cap:"뭐"},{src:"https://placehold.co/727x445",cap:"뭐"},{src:"https://placehold.co/727x445",cap:"뭐"},{src:"https://placehold.co/910x517",cap:""},{src:"https://placehold.co/987x555",cap:""},{src:"https://placehold.co/727x445",cap:"뭐"},{src:"https://placehold.co/727x445",cap:"뭐"}];return x.jsxs(P3,{"aria-label":"Gallery",children:[x.jsx(Mg,{position:"top",from:nr.blackToBlackSoft.from,to:nr.blackToBlackSoft.to,height:nr.blackToBlackSoft.h,z:0}),x.jsxs(L3,{children:[x.jsxs(z3,{children:[x.jsx(B3,{src:"https://placehold.co/1840x1000",alt:"featured"}),x.jsx($3,{"aria-hidden":!0,children:x.jsx(F3,{})})]}),x.jsx(q3,{className:"gallery-desktop"}),x.jsx("div",{className:"gallery-mobile",style:{display:"none"},children:x.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginTop:12},children:n.map((t,r)=>x.jsxs("div",{style:{width:"46vw",height:"46vw",minWidth:140,minHeight:140,maxWidth:"100vw",maxHeight:"100vw",borderRadius:4,overflow:"hidden",background:"#151515",position:"relative",marginBottom:8},children:[x.jsx("img",{src:t.src,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),t.cap&&x.jsx(K3,{children:t.cap})]},r))})}),x.jsx("div",{style:{paddingTop:40,display:"flex",justifyContent:"center"},children:x.jsx(nf,{label:"View More"})})]})]})}const G3=A.section`
  padding: 0;
`,Y3=A.div`
  position: relative; height: 1045px; overflow: hidden;
`,Q3=A.div`
  position: absolute; left: 0; right: 0; top: 0; text-align: center;
  color: #FFFFFF; font-family: Pretendard, system-ui; font-weight: 700; font-size: 40px; line-height: 64px;
`,X3=A.div`
  position: absolute; left: 40px; right: 40px; top: 140px; height: 905px; border-radius: 4px; overflow: hidden;
`,W3=A.img`
  width: 100%; height: 100%; object-fit: cover;
`,Z3=A.div`
  position: absolute; left: 732px; top: 327px; width: 787px; height: 492px; background: #FFFCFD;
`,J3=A.div`
  position: absolute; left: 610px; top: 496px; width: 700px; text-align: center;
  color: #000; font-family: Pretendard, system-ui; font-weight: 600; font-size: 48px; line-height: 76.8px;
`,tD=A.div`
  position: absolute; left: 860px; top: 935px;
`;function eD(){return x.jsx(G3,{"aria-labelledby":"online-title",children:x.jsxs(Y3,{children:[x.jsx(Q3,{id:"online-title",children:"Online Exhibition"}),x.jsx(X3,{children:x.jsx(W3,{src:"https://placehold.co/1840x905",alt:"Online Exhibition background"})}),x.jsx(Z3,{"aria-hidden":!0}),x.jsx(J3,{children:"오브제 활용 인터렉티브 세션으로 교체중"}),x.jsx(tD,{children:x.jsx(nf,{label:"View More"})})]})})}const nD=[{id:"w1",artistKr:"홍길동",dept:"Media Design Engineering",titleSmall:"jakpum en name",titleStrong:"작품 한글이름이름이름이",rightMeta1:"gandanhan jakpum seolmyeong",rightMeta2:"Janhyeang - daechung ganji naneun mal",image:"https://placehold.co/1265x712"},{id:"w2",artistKr:"김아무개",dept:"Industrial Design",titleSmall:"another name",titleStrong:"또 다른 작품명",rightMeta1:"brief copy line",rightMeta2:"longer secondary copy",image:"https://placehold.co/1265x712?text=work+2"},{id:"w3",artistKr:"참깨빙수",dept:"Chamkkae Bingsu",titleSmall:"small jakpum",titleStrong:"세상에서 가장 맛있는 어쩌고",rightMeta1:"건던헌 적펌 설멍",rightMeta2:"long long nong jakpum seolmyeong",image:"https://placehold.co/1265x712?text=work+3"}],iD=A.div`
  position: relative;
  background: #121212;
  @media (max-width: 640px) {
    background: #121212;
    padding: 0 0 24px 0;
  }
`,rD=A.div`
  display: none;
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100vw;
    padding: 0 0 24px 0;
    box-sizing: border-box;
  }
`,aD=A.div`
  background: #222;
  border-radius: 10px;
  overflow: hidden;
  width: 92vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,sD=A.img`
  width: 100%;
  height: auto;
  display: block;
`,oD=A.div`
  padding: 12px 14px 16px 14px;
  color: #fff;
  font-family: Pretendard, system-ui;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;A.div`
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
`;A.div`
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
`;A.div`
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
`;A.img`
  width: 1265px; height: 712px; display: block;
  @media (max-width: 640px) {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;const mu=`
  -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 18%, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 100%);
          mask-image: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 18%, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 100%);
`;A.div`
  position: absolute; left: 195px; top: 240px;
  color: #FAFAFA;
  font-family: Pretendard, system-ui;
  font-size: 112px; font-weight: 600;
  transform: translate3d(0, ${n=>n.$y||0}px, 0);
  opacity: ${n=>n.$opacity??1};
  ${mu}
  @media (max-width: 640px) {
    position: static;
    font-size: 28px;
    margin: 8px 0 0 0;
    transform: none;
    opacity: 1;
    mask-image: none;
    -webkit-mask-image: none;
  }
`;A.div`
  position: absolute; left: 195px; top: 374px;
  color: #D9D9D9;
  font-family: Pretendard, system-ui;
  font-size: 24px; font-weight: 400;
  transform: translate3d(0, ${n=>n.$y||0}px, 0);
  opacity: ${n=>n.$opacity??1};
  ${mu}
  @media (max-width: 640px) {
    position: static;
    font-size: 13px;
    margin: 2px 0 0 0;
    transform: none;
    opacity: 1;
    mask-image: none;
    -webkit-mask-image: none;
  }
`;A.div`
  position: absolute; right: 195px; top: 509px;
  width: 690.67px; color: #D9D9D9;
  font-family: Pretendard, system-ui; font-size: 24px; font-weight: 300;
  text-align: right;
  transform: translate3d(0, ${n=>n.$y||0}px, 0);
  opacity: ${n=>n.$opacity??1};
  ${mu}
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
`;A.div`
  position: absolute; right: 195px; top: 547px;
  width: 690.67px; color: #FAFAFA;
  font-family: Pretendard, system-ui; font-weight: 500; font-size: 32px;
  text-align: right;
  transform: translate3d(0, ${n=>n.$y||0}px, 0);
  opacity: ${n=>n.$opacity??1};
  ${mu}
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
`;A.div`
  position: absolute; left: 195px; top: 679px; width: 690.67px;
  transform: translate3d(0, ${n=>n.$y||0}px, 0);
  opacity: ${n=>n.$opacity??1};
  ${mu}
  @media (max-width: 640px) {
    position: static;
    width: 100%;
    margin: 4px 0 0 0;
    transform: none;
    opacity: 1;
    mask-image: none;
    -webkit-mask-image: none;
  }
`;A.small`
  display: block; color: #D9D9D9;
  font-family: Pretendard, system-ui; font-size: 24px; font-weight: 400;
  @media (max-width: 640px) {
    font-size: 12px;
  }
`;A.strong`
  display: block; color: #FAFAFA;
  font-family: Pretendard, system-ui; font-size: 42px; font-weight: 700;
  @media (max-width: 640px) {
    font-size: 18px;
  }
`;function lD(){return x.jsxs(x.Fragment,{children:[x.jsx(iD,{className:"expo-works-desktop"}),x.jsx(rD,{children:nD.map(n=>x.jsxs(aD,{children:[x.jsx(sD,{src:n.image,alt:n.titleStrong}),x.jsxs(oD,{children:[x.jsx("div",{style:{fontWeight:700,fontSize:16},children:n.titleStrong}),x.jsxs("div",{style:{fontSize:13,color:"#D9D9D9"},children:[n.artistKr," | ",n.dept]}),x.jsx("div",{style:{fontSize:12,color:"#A1A1A1",marginTop:2},children:n.rightMeta1}),x.jsx("div",{style:{fontSize:12,color:"#A1A1A1"},children:n.rightMeta2})]})]},n.id))})]})}const uD="/TU2025gradulate/",cD=A.div`
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
`,hD=A.div`
  position: relative; 
  height: auto;
`,fD=A.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0px;
  @media (max-width: 640px) {
    gap: 16px;
}
`,dD=A.div`
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
`,pD=A.div`
  display: flex; align-items: center; height: 49px; padding-bottom: 21px; color: #FFFFFF; font-family: Pretendard, system-ui; font-size: 40px; font-weight: 700; line-height: 38.4px;
  @media (max-width: 640px) {
    font-size: 24px; height: 29px; padding-bottom: 12px;
}
`,mD=A.div`
  display: flex; flex-direction: column; align-items: center; gap: 60px; margin-top: 20px;
  @media (max-width: 640px) {
    margin-top: 60px;
    gap: 40px;
}
`,gD=A.div`
  width: 272px; height: 272px; background: #121212; overflow: hidden; display: flex; align-items: center; justify-content: center;
  @media (max-width: 640px) {
    width: 160px; height: 160px;
}
`;function yD(){return x.jsx(cD,{"aria-labelledby":"insta-title",children:x.jsx(hD,{children:x.jsxs(fD,{children:[x.jsx(dD,{children:x.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#FFFFFF",children:[x.jsx("path",{d:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2A3.2 3.2 0 1 1 12 8a3.2 3.2 0 0 1 0 6.4z"}),x.jsx("circle",{cx:"17.5",cy:"6.5",r:"1.2"}),x.jsx("path",{d:"M17.8 2H6.2A4.2 4.2 0 0 0 2 6.2v11.6A4.2 4.2 0 0 0 6.2 22h11.6A4.2 4.2 0 0 0 22 17.8V6.2A4.2 4.2 0 0 0 17.8 2zm2.6 15.8a2.6 2.6 0 0 1-2.6 2.6H6.2a2.6 2.6 0 0 1-2.6-2.6V6.2A2.6 2.6 0 0 1 6.2 3.6h11.6a2.6 2.6 0 0 1 2.6 2.6v11.6z"})]})}),x.jsx(pD,{id:"insta-title",children:"@tukd_grad"}),x.jsxs(mD,{children:[x.jsx(gD,{children:x.jsx("img",{src:`${uD}insta-qr.png`,alt:"Instagram preview"})}),x.jsx(nf,{as:"a",href:"https://www.instagram.com/tukd_grad?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",label:"View Instagram",size:"sm"})]})]})})})}const gu=`'Pretendard', system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial, sans-serif`,i_=350,xD=A.section`
  padding: 120px 0 0 0; background: #121212;
`,vD=A.div`
  position: relative; background: #121212;
`,_D=A.div`
  /* padding-left: ${i_}px; padding-right: ${i_}px; */
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
`,ED=({children:n})=>x.jsx(vD,{children:x.jsx(_D,{children:n})}),bD=A.div`
  width: 289px; height: 45px; display: flex; align-items: flex-end;
`,wD=A.div`
  font-family: ${gu}; font-size: 20px; font-weight: 700; line-height: 22.4px; color: #FFFFFF;

  @media (max-width: 640px) {
    font-size: 16px;
}
`;function TD({title:n}){return x.jsx(bD,{children:x.jsx(wD,{children:n})})}const SD=A.div`
  border-bottom: ${n=>n.$last?"none":"1px rgba(255,255,255,0.12) solid"};
  display: flex; gap: 20px; align-items: flex-start;
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 20px;
    padding: 0;
    width: 100%;
  }
`,AD=A.div`
  padding-top: 22px; padding-bottom: 40px;
  border-bottom: ${n=>n.$divider?"1px rgba(255,255,255,0.12) solid":"none"};
  display: flex; gap: 20px; align-items: flex-start;
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 8px;
    padding: 16px 0 20px 0;
  }
`,RD=A.div`
  width: 135px;
  @media (max-width: 640px) {
    width: 100%;
  }
`,CD=A.div`
  font-family: ${gu}; font-size: 16px; font-weight: 700; line-height: 22.4px; color: #FFFFFF;
  @media (max-width: 640px) {
    font-size: 14px;
}
`,ID=A.div`
  width: 700px; display: flex; flex-direction: column; gap: 10px;
  @media (max-width: 640px) {
    width: 100%;
    gap: 6px;
  }
`;function Hr({k:n,children:t,divider:r=!0}){return x.jsxs(AD,{$divider:r,children:[x.jsx(RD,{children:x.jsx(CD,{children:n})}),x.jsx(ID,{children:t})]})}const jD=A.div`
  width: 900px; display: flex; flex-direction: column;
  @media (max-width: 640px) {
    width: 100%;
    padding: 0;
    box-sizing: border-box;
  }
`;function r_({title:n,children:t,last:r=!1}){return x.jsxs(SD,{$last:r,children:[x.jsx(TD,{title:n}),x.jsx(jD,{children:t})]})}const DD=A.div`
  width: 900px; padding-top: 22px; padding-bottom: 40px; border-bottom: 1px rgba(255,255,255,0.12) solid;
  @media (max-width: 640px) {
    width: 100%;
    padding: 12px 0px 20px 0px;
    box-sizing: border-box;
  }
`,ND=A.div`
  font-family: ${gu}; font-size: 16px; font-weight: 700; color: #FFFFFF;
  @media (max-width: 640px) {
    font-size: 14px;
}
`,qt=A.div`
  font-family: ${gu}; font-size: 16px; font-weight: 300; color: #CCCCCC; letter-spacing: 0px;
  @media (max-width: 640px) {
    font-size: 13px;
}
`,Yc=A(qt)`
  font-weight: 500;
`,MD=A(qt)`
  font-size: 13px;
`,OD=A(qt)`
  margin-top: 24px;
`,VD=A.a`
  font-family: ${gu}; font-size: 16px; font-weight: 300; color: #CCCCCC; text-decoration: underline;
  @media (max-width: 640px) {
    font-size: 13px;
}
`;function kD(){return x.jsx(xD,{"aria-label":"Venue & Access",children:x.jsxs(ED,{children:[x.jsxs(r_,{title:"Venew Details",children:[x.jsx(DD,{children:x.jsx(ND,{children:"잔향 : 기억의 향기"})}),x.jsx(Hr,{k:"Term",children:x.jsx(qt,{children:"2025. 10. 24. FRI - 10. 26. SUN"})}),x.jsxs(Hr,{k:"Hours",children:[x.jsx(qt,{children:"10.24.FRI   13:00 ~ 17:30 (OPENING 16:00~)"}),x.jsx(qt,{children:"10.25.SAT ~ 10.26.SUN    10:00 ~ 17:30"})]}),x.jsxs(Hr,{k:"Schedule",children:[x.jsx(Yc,{children:"10.24.FRI"}),x.jsx(qt,{children:"13:00    자유관람"}),x.jsx(qt,{children:"15:00    졸업생 홈커밍 행사"}),x.jsx(qt,{children:"16:00    개회식"}),x.jsx(qt,{children:"16:20    졸업작품 우수작 시상"}),x.jsx(qt,{children:"16:30    자유관람"}),x.jsxs(Yc,{children:[x.jsx("br",{}),"10.25.SAT"]}),x.jsx(qt,{children:"10:00    자유관람"}),x.jsx(qt,{children:"13:00    취·창업 커리어 캠프"}),x.jsxs(Yc,{children:[x.jsx("br",{}),"10.26.SUN"]}),x.jsx(qt,{children:"10:00    자유관람"})]}),x.jsxs(Hr,{k:"Website",divider:!1,children:[x.jsx(qt,{children:"Hongik Art Center"}),x.jsx(VD,{href:"https://artscenter.hongik.ac.kr/artcenter/index.do",target:"_blank",rel:"noreferrer",children:"https://artscenter.hongik.ac.kr/artcenter/index.do"})]})]}),x.jsxs(r_,{title:"Access",children:[x.jsxs(Hr,{k:"Address",children:[x.jsx(qt,{children:"Hongik Art Center B2 Gallery"}),x.jsx(qt,{children:"57, Daehak-ro, Jongno-gu, Seoul"}),x.jsx(OD,{children:"Address in local language"}),x.jsxs(qt,{children:["홍대 아트센터 지하 2층 전시관",x.jsx("br",{}),"서울시 종로구 대학로 57"]}),x.jsx("div",{style:{marginTop:24},children:x.jsx(nf,{as:"a",href:"https://maps.app.goo.gl/qc99M9bDqyBTcmx79",label:"Map",size:"sm",showArrow:!0})})]}),x.jsxs(Hr,{k:"Parking",children:[x.jsx(qt,{children:"B3F ~ B6F"}),x.jsxs(qt,{children:[x.jsx("br",{}),"기본 30분 3,000원 / 이후 20분당 2,000원"]}),x.jsx(qt,{children:"이용객 주차권 지참 시 50% 할인 및 1시간 무료이용권 제공"}),x.jsx(Yc,{children:"(주차권으로만 정산 가능, 티켓정산 불가)"}),x.jsx(MD,{children:"주차권 배부 장소: B2 갤러리 3, 전시장 입구 인포데스크"})]}),x.jsxs(Hr,{k:"By Subway",children:[x.jsx(qt,{children:"[1호선 종로5가역]"}),x.jsx(qt,{children:"2번 출구 방면으로 이동 → 이화사거리 방면으로 약 800m 직진 (도보7분)"}),x.jsxs(qt,{children:[x.jsx("br",{}),"[4호선 혜화역]"]}),x.jsx(qt,{children:"3번 출구 방면으로 이동 → 이화사거리 방면으로 약 800m 직진 (도보7분)"}),x.jsx(qt,{children:"또는 08번 마을버스 탑승 후 이화사거리 앞 하차"})]}),x.jsxs(Hr,{k:"By Bus",divider:!1,children:[x.jsx(qt,{children:"[이화사거리(01-572) 하차]"}),x.jsx(qt,{children:"마을버스 종로 08번"}),x.jsxs(qt,{children:[x.jsx("br",{}),"[현대그룹빌딩(01-218) 하차]"]}),x.jsx(qt,{children:"102, 107, 108, 109, 162, 301, 7025"}),x.jsxs(qt,{children:[x.jsx("br",{}),"[이화장(01-223) 하차]"]}),x.jsx(qt,{children:"109, 273, 601, 2112, 7025"})]})]})]})})}function UD(){const n=[x.jsx(S3,{},"hero"),x.jsx(O3,{},"brand"),x.jsx(H3,{},"gallery"),x.jsx(eD,{},"online"),x.jsx(lD,{},"works"),x.jsx(yD,{},"insta"),x.jsx(kD,{},"venue")];return x.jsx("div",{style:{background:"#121212",minHeight:"100vh"},children:n})}const PD="/TU2025gradulate/",Og="Pretendard, system-ui",LD=A.div`
  width: ${n=>n.$w}px;
  height: ${n=>n.$h}px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background: linear-gradient(246deg, #F2F0FF -0.07%, #FFF 99.93%);
  @media (max-width: 640px) {
    width: 100%;
    height: 216px;
    border-radius: 10px;
  }
`,zD=A.div`
  width: 181px;
  height: 147px;
  position: absolute;
  left: 6px;
  top: 190px;
  background-image: url(${PD}/gestbook-card.svg);
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
`;A.div`
  width: 25px;
  height: 25px;
  position: absolute;
  left: 8px;
  top: 304px;
  background: #EDECF2;
  border-radius: 4px;
  transform: translateZ(0);
  @media (max-width: 640px) {
    width: 18px;
    height: 18px;
    left: 6px;
    top: 188px;
  }
`;const BD=A.div`
  position: absolute;
  left: 20px;
  top: 30px;
  font-family: ${Og};
  font-weight: 600;
  font-size: 20px;
  color: #555;
  @media (max-width: 640px) {
    left: 14px;
    top: 16px;
    font-size: 16px;
  }
`,$D=A.div`
  position: absolute;
  left: 21px;
  top: 63px;
  width: 229px;
  font-family: ${Og};
  font-weight: 300;
  font-size: 18px;
  line-height: 27px;
  color: #333;
  @media (max-width: 640px) {
    left: 14px;
    top: 44px;
    width: 136px;
    font-size: 14px;
    line-height: 21px;
  }
`,FD=A.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-family: ${Og};
  font-weight: 600;
  font-size: 14px;
  color: #555;
  @media (max-width: 640px) {
    right: 8px;
    bottom: 8px;
    font-size: 12px;
  }
`;function qD({to:n,from:t,message:r}){return x.jsxs(LD,{$w:rf,$h:yu,children:[x.jsx(zD,{}),x.jsx(BD,{children:`To. ${n}`}),x.jsx($D,{children:r}),x.jsx(FD,{children:`From. ${t}`})]})}const KD=A.div`
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
`,HD=A.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;function GD({src:n}){return x.jsx(KD,{$w:rf,$h:yu,children:x.jsx(HD,{src:n,alt:"포토 카드"})})}const YD=A.button`
  width: ${n=>n.$w}px;
  height: ${n=>n.$h}px;
  border-radius: 8px;
  background: linear-gradient(137deg, #AEAEAE 0%, #848484 100%);
  outline: 1px rgba(255,255,255,.5) solid;
  outline-offset: -1px;
  display: grid;
  place-items: center;
  cursor: pointer;
  border: none;
  @media (max-width: 640px) {
    width: 100%;
    height: 216px;
    border-radius: 10px;
  }
`,QD=A.div`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  background: rgba(0,0,0,.35);
  display: grid;
  place-items: center;
  @media (max-width: 640px) {
    width: 26px;
    height: 26px;
  }
`,XD=A.div`
  width: 14px;
  height: 14px;
  position: relative;
  @media (max-width: 640px) {
    width: 12px;
    height: 12px;
  }
`,WD=A.span`
  position: absolute;
  left: 6px;
  top: 0;
  width: 2px;
  height: 14px;
  background: #fff;
  border-radius: 1px;
  @media (max-width: 640px) {
    left: 5px;
    height: 12px;
  }
`,ZD=A.span`
  position: absolute;
  left: 0;
  top: 6px;
  width: 14px;
  height: 2px;
  background: #fff;
  border-radius: 1px;
  @media (max-width: 640px) {
    top: 5px;
    width: 12px;
  }
`;function JD({onClick:n}){return x.jsx(YD,{onClick:n,"aria-label":"방명록 작성",$w:rf,$h:yu,children:x.jsx(QD,{children:x.jsxs(XD,{children:[x.jsx(WD,{}),x.jsx(ZD,{})]})})})}const rf=270,yu=337,t5=30,eb=20,e5=210,n5=60,nb=173,ib=216,i5=16,r5=16,Em=16,a5=A.div`
  padding: 0 0 12px 0;
  @media (max-width: 640px) {
    display: none;
  }
`,s5=A.div`
  position: relative;
  width: 100%;
  height: 3px;
  background: #171717;
  border-radius: 2px;
  overflow: hidden;
`,o5=A.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 3px;
  width: ${n=>n.$w}px;
  min-width: 25px;
  background: #7a7a7a;
  border-radius: 2px;
  transition: width 350ms ease-in;
`,l5=A.div`
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-y;
  cursor: grab;
  padding: 0 ${n5}px 0 ${e5}px;
  scrollbar-width: none; 
  -ms-overflow-style: none;
  &::-webkit-scrollbar { display: none; }

  @media (max-width: 640px) {
    overflow: visible;
    padding: 0px;
    cursor: default;
  }
`,u5=A.div`
  display: flex;
  gap: ${t5}px;
  align-items: flex-start;
  min-height: ${yu*2+eb}px;

  @media (max-width: 640px) {
    gap: ${i5}px;
    min-height: initial;
  }
`,c5=A.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: ${Em}px;
  padding: 0 16px; /* 좌우 16px 고정 마진 */
`,h5=A.div`
  width: calc((100% - ${Em}px) / 2);
  height: ${ib}px;
  flex: 0 0 calc((100% - ${Em}px) / 2);
`,f5=A.div`
  @media (max-width: 640px) { display: none; }
`,d5=A.div`
  display: none;
  @media (max-width: 640px) { display: block; }
`,p5=A.div`
  display: flex;
  flex-direction: column;
  gap: ${eb}px;
  @media (max-width: 640px) {
    width: ${nb}px;
    gap: ${r5}px;
  }
`,rb=A.div`
  width: ${rf}px;
  height: ${yu}px;
  @media (max-width: 640px) {
    width: ${nb}px;
    height: ${ib}px;
  }
`,a_=n=>{const t=[{type:"add",id:"add"},...n],r=[{min:6,max:10},{min:16,max:20},{min:26,max:30}];let a=0;return r.forEach((o,u)=>{if(t.length>o.min+a){const f=Math.min(Math.floor(Math.random()*(o.max-o.min+1))+o.min,t.length)+a;t.splice(f,0,{type:"photo",id:`ph-${Date.now()}-${u}`,src:"https://placehold.co/662x405"}),a++}}),t},m5=n=>{const t=[];for(let r=0;r<n.length;r+=2)t.push([n[r],n[r+1]||null]);return t};function g5({onOpenModal:n,items:t}){const r=K.useRef(null),[a,o]=K.useState({width:0,trackW:0}),[u,f]=K.useState(()=>a_(t)),[p,m]=K.useState(()=>window.matchMedia&&window.matchMedia("(max-width: 640px)").matches);K.useEffect(()=>{f(a_(t))},[t]);const g=m5(u);K.useEffect(()=>{if(!window.matchMedia)return;const R=window.matchMedia("(max-width: 640px)"),O=B=>m(B.matches);return R.addEventListener?R.addEventListener("change",O):R.addListener(O),()=>{R.removeEventListener?R.removeEventListener("change",O):R.removeListener(O)}},[]),K.useEffect(()=>{if(p)return;const R=r.current;if(!R)return;const O=B=>{Math.abs(B.deltaY)>Math.abs(B.deltaX)&&(R.scrollLeft+=B.deltaY,B.preventDefault())};return R.addEventListener("wheel",O,{passive:!1}),()=>R.removeEventListener("wheel",O)},[p]);const v=K.useRef({on:!1,moved:!1,startX:0,startScroll:0}),w=R=>!!R?.closest?.('button, a, input, textarea, select, label, [role="button"], [data-nodrag]');K.useEffect(()=>{if(p)return;const R=r.current;if(!R)return;const O=G=>{G.button===0&&(w(G.target)||(v.current.on=!0,v.current.moved=!1,v.current.startX=G.clientX,v.current.startScroll=R.scrollLeft,R.setPointerCapture?.(G.pointerId),document.body.style.userSelect="none",R.style.cursor="grabbing"))},B=G=>{if(!v.current.on)return;const X=G.clientX-v.current.startX;Math.abs(X)>2&&(v.current.moved=!0),R.scrollLeft=v.current.startScroll-X},P=G=>{v.current.on&&(R.releasePointerCapture?.(G.pointerId),document.body.style.userSelect="",R.style.cursor="grab",v.current.moved&&(G.preventDefault(),G.stopPropagation()),v.current.on=!1)};return R.addEventListener("pointerdown",O),window.addEventListener("pointermove",B),window.addEventListener("pointerup",P),R.addEventListener("pointercancel",P),()=>{R.removeEventListener("pointerdown",O),window.removeEventListener("pointermove",B),window.removeEventListener("pointerup",P),R.removeEventListener("pointercancel",P)}},[p]);const S=K.useCallback(()=>{const R=r.current;if(!R)return;const O=R.clientWidth,B=R.scrollWidth,P=R.scrollLeft,X=R.parentElement?.clientWidth||O,it=Math.max(1,B-O),ht=Math.min(1,Math.max(0,P/it)),J=Math.round(X*ht);o({width:J,trackW:X})},[]);return K.useEffect(()=>{if(p)return;S();const R=r.current;if(!R)return;const O=()=>requestAnimationFrame(S),B=()=>requestAnimationFrame(S);return R.addEventListener("scroll",O,{passive:!0}),window.addEventListener("resize",B),()=>{R.removeEventListener("scroll",O),window.removeEventListener("resize",B)}},[S,p]),x.jsxs(x.Fragment,{children:[x.jsxs(f5,{children:[x.jsx(a5,{children:x.jsx(s5,{children:x.jsx(o5,{$w:a.width})})}),x.jsx(l5,{ref:r,children:x.jsx(u5,{children:g.map((R,O)=>x.jsxs(p5,{children:[x.jsx(Dp,{data:R[0],onOpenModal:n}),R[1]?x.jsx(Dp,{data:R[1],onOpenModal:n}):x.jsx(rb,{})]},`col-${O}`))})})]}),x.jsx(d5,{children:x.jsx(c5,{children:u.map(R=>x.jsx(h5,{children:x.jsx(Dp,{data:R,onOpenModal:n})},R.id))})})]})}function Dp({data:n,onOpenModal:t}){return n?n.type==="add"?x.jsx(JD,{onClick:t,style:{pointerEvents:"auto"}}):n.type==="photo"?x.jsx(GD,{src:n.src}):x.jsx(qD,{to:n.to,from:n.from,message:n.message}):x.jsx(rb,{})}const y5="/TU2025gradulate/",x5=A.div`
  position: fixed; inset: 0; z-index: 1000;
  display: grid; place-items: center;
  background: rgba(0,0,0,.45);
  @media (max-width: 640px) {
    align-items: end;
    padding: 0 16px 84px 16px;
  }
`,v5=A.div`
  position: relative; display: inline-flex; align-items: flex-end; gap: 17px;
  @media (max-width: 640px) {
    gap: 0;
  }
`,_5=A.div`
  padding: 40px; border-radius: 16px;
  background: rgba(160,160,160,.80);
  backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
  display: inline-flex; gap: 20px; align-items: center;
  @media (max-width: 640px) {
    padding: 18px;
    border-radius: 12px;
  }
`,E5=A.div`
  width: 520px; display: inline-flex; gap: 20px; align-items: center;
  @media (max-width: 640px) {
    width: 300px;
    gap: 12px;
  }
`,b5=A.div`
  width: 450px; height: 560px; position: relative; overflow: hidden;
  border-radius: 16px;
  background: linear-gradient(246deg, #F2F0FF -0.07%, #FFF 99.93%);
  box-shadow: 0 20px 60px rgba(0,0,0,.25);
  @media (max-width: 640px) {
    width: 260px;
    height: 340px;
    border-radius: 12px;
  }
`,w5=A.div`
  position: absolute;
  left: 12px;
  top: 314.67px;
  width: 302px;
  height: 246px;
  background-image: url(${y5}/gestbook-card.svg);
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 640px) {
    left: 4px;
    top: 210px;
    width: 158px;
    height: 130px;
  }
`,T5=A.div`
  position: absolute; left: 32px; top: 50px; display: inline-flex; align-items: center; gap: 8px;
  @media (max-width: 640px) {
    left: 18px; top: 22px; gap: 6px;
  }
`,S5=A.div`
  font-family: Pretendard, system-ui; font-weight: 600; font-size: 32px; color: #555;
  @media (max-width: 640px) {
    font-size: 22px;
  }
`,A5=A.input`
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
`,R5=A.div`
  position: absolute; left: 32px; top: 104px; width: 381px;
  @media (max-width: 640px) {
    left: 18px; top: 78px; width: 206px;
  }
`,C5=A.textarea`
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
`,I5=A.div`
  position: absolute; left: 181px; top: 472px; display: inline-flex; align-items: center; gap: 8px;
  @media (max-width: 640px) {
    left: 110px; top: 270px; gap: 6px;
  }
  @media (max-width: 640px) {
    left: auto; top: auto; right: 18px; bottom: 16px; gap: 6px;
  }
`,j5=A.div`
  font-family: Pretendard, system-ui; font-weight: 600; font-size: 32px; color: #555;
  @media (max-width: 640px) {
    font-size: 22px;
  }
`,D5=A.input`
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
`,N5=A.div`
  width: 50px; height: 560px; display: inline-flex; flex-direction: column; justify-content: flex-end;
  @media (max-width: 640px) {
    height: 340px;
  }
`,M5=A.button`
  width: 50px; height: 50px; border-radius: 25px;
  background: #202020; cursor: pointer;
  display: grid; place-items: center; border: none;
  @media (max-width: 640px) {
    width: 40px; height: 40px; border-radius: 20px;
  }
`,O5=A.div`
  width: 20px; height: 17px; background: #fff; clip-path: polygon(0 0,100% 50%,0 100%);
  @media (max-width: 640px) {
    width: 16px; height: 14px;
  }
`,V5=A.div`
  width: 60px; height: 640px; position: relative;
  @media (max-width: 640px) {
    width: 100%; height: auto;
  }
`,k5=A.button`
  width: 60px; height: 60px; position: absolute; left: 0; top: 0;
  display: grid; place-items: center; cursor: pointer;
  background: transparent; border: none;
  @media (max-width: 640px) {
    position: fixed; left: 50%; bottom: 20px; top: auto; transform: translateX(-50%);
    width: 56px; height: 56px; border-radius: 28px; background: #fff1;
    backdrop-filter: blur(2px);
  }
`,U5=A.div`
  width: 32px; height: 32px; position: relative;
`,s_=A.span`
  position: absolute; left: 15px; top: 4px; width: 2px; height: 24px;
  background: #FFFFFF; transform: rotate(${n=>n.$deg}deg);
  @media (max-width: 640px) {
    left: 15px; top: 4px; height: 24px;
  }
`;function P5({open:n,onClose:t,onSubmit:r,defaultTo:a="",defaultFrom:o=""}){const[u,f]=K.useState(a),[p,m]=K.useState(o),[g,v]=K.useState(""),w=K.useRef(null);if(K.useEffect(()=>{const O=B=>{B.key==="Escape"&&t?.()};return n&&document.addEventListener("keydown",O),()=>document.removeEventListener("keydown",O)},[n,t]),!n)return null;const S=O=>{O.target===w.current&&t?.()},R=()=>{const O={to:(u||"").trim(),from:(p||"").trim(),message:(g||"").trim()};O.message&&r?.(O)};return x.jsx(x5,{ref:w,onMouseDown:S,children:x.jsxs(v5,{onMouseDown:O=>O.stopPropagation(),children:[x.jsx(_5,{children:x.jsxs(E5,{children:[x.jsxs(b5,{children:[x.jsx(w5,{}),x.jsxs(T5,{children:[x.jsx(S5,{children:"To."}),x.jsx(A5,{value:u,onChange:O=>f(O.target.value),placeholder:"받는 사람"})]}),x.jsx(R5,{children:x.jsx(C5,{placeholder:"내용을 입력해 주세요.",value:g,onChange:O=>v(O.target.value)})}),x.jsxs(I5,{children:[x.jsx(j5,{children:"From."}),x.jsx(D5,{value:p,onChange:O=>m(O.target.value),placeholder:"보내는 사람"})]})]}),x.jsx(N5,{children:x.jsx(M5,{type:"button",onClick:R,"aria-label":"send",children:x.jsx(O5,{})})})]})}),x.jsx(V5,{children:x.jsx(k5,{type:"button",onClick:t,"aria-label":"close",children:x.jsxs(U5,{children:[x.jsx(s_,{$deg:45}),x.jsx(s_,{$deg:-45})]})})})]})})}const L5={apiKey:"AIzaSyAEFzPwTADLzuxWuyk889Jz1cHPsEgLOkQ",authDomain:"tu2025grad.firebaseapp.com",projectId:"tu2025grad",storageBucket:"tu2025grad.firebasestorage.app",messagingSenderId:"553768466639",appId:"1:553768466639:web:7c16f5d6432da7ebc05fba"},z5=Qm(L5),Np=$2(z5),B5='Pretendard, system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial, sans-serif',$5=A.div`
  background: #121212; min-height: 100vh;
`,F5=A.main`
  padding: 80px 40px 120px 40px;
  @media (max-width: 640px) {
    padding: 40px 0 80px 0;
  }
`,q5=A.h1`
  font-family: ${B5}; font-weight: 700; font-size: 32px; color: #FFFFFF; text-align: center; margin: 20px 0 40px;
  @media (max-width: 640px) {
    font-size: 20px; margin: 0 0 16px;
  }
`,K5=A.section`
  display: flex; justify-content: center;
  @media (max-width: 640px) {
    justify-content: stretch;
  }
`,H5=A.div`
  width: 100%;
  @media (max-width: 640px) {
    width: 100%;
  }
`;function G5(){const[n,t]=Dt.useState(!1),[r,a]=Dt.useState([]);Dt.useEffect(()=>{let f=!0;return(async()=>{try{const p=Yv(uh(Np,"guest"),Qv("time","desc")),m=await vm(p);if(!f)return;const g=[];m.forEach(v=>{const w=v.data();g.push({id:v.id,to:w.to||"",from:w.from||"",message:w.message||"",type:"text"})}),a(g)}catch(p){console.error("Failed to load guestbook items:",p)}})(),()=>{f=!1}},[]);const o=async({to:f,from:p,message:m})=>{try{const g=String(Date.now());await Ng(ql(uh(Np,"guest"),g),{to:f||"",from:p||"",message:m||"",time:g});try{const v=Yv(uh(Np,"guest"),Qv("time","desc")),w=await vm(v),S=[];w.forEach(R=>{const O=R.data();S.push({id:R.id,to:O.to||"",from:O.from||"",message:O.message||"",type:"text"})}),a(S)}catch(v){console.error("Failed to reload guestbook items after submit:",v)}t(!1)}catch(g){console.error("Failed to submit guest message:",g)}};return x.jsxs($5,{children:[x.jsxs(F5,{children:[x.jsx(q5,{children:"Guest Book"}),x.jsx(K5,{children:x.jsxs(H5,{className:"gb-wrap",children:[x.jsx("style",{children:`
    .gb-wrap *::-webkit-scrollbar { display: none; }
    .gb-wrap * { scrollbar-width: none; -ms-overflow-style: none; }
    .gb-wrap article img { width: 100% !important; height: 100% !important; object-fit: cover !important; display: block !important; }
  `}),x.jsx(g5,{onOpenModal:()=>t(!0),items:r})]})})]}),x.jsx(P5,{open:n,onClose:()=>t(!1),onSubmit:o})]})}const bm="/TU2025gradulate/",Y5=A.div`
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
  z-index: 1000;
  transform: translateX(${n=>n.$open?"0":"-350px"});
  transition: transform 500ms ease-out;
  pointer-events: ${n=>n.$open?"auto":"none"};
  @media (max-width: 640px) {
    width: 100vw;
    height: auto;
    position: relative;
    top: 0;
    left: 0;
    padding: 40px 16px;
}
`,Q5=A.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: auto;
  @media (max-width: 640px) {
    gap: 40px;
}
`,X5=A.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  height: auto;
  gap: 48px;
  @media (max-width: 640px) {
    flex-direction: row;
    width: auto;
    gap: 16px;
    align-items: flex-start;
    justify-content: space-between;
}
`,W5=A.div`
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 640px) {
    display: none;
}
`,Z5=A.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 640px) {
    width: auto;
}
`,J5=A.h1`
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
`,tN=A.p`
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
`,eN=A.div`
  display: none;
  width: 172px;
  height: 240px;
  background-image: ${({$src:n})=>`url("${n}")`};
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  @media (max-width: 640px) {
    display: flex;
}
`,nN=A.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  height: 75px;
  @media (max-width: 640px) {
    width: auto;
    height: 38px;
}
`,iN=A.div`
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
`,rN=A.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
`,aN=A.div`
  width: 24px;
  height: 24px;
  background-image: ${({$src:n})=>`url("${n}")`};
  background-size: contain;
  background-repeat: no-repeat;
  @media (max-width: 640px) {
    width: 16px;
    height: 16px;
}
`,sN=A.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #e0e0e0;
  margin: 0;
  padding: 0;
  @media (max-width: 640px) {
    font-size: 16px;
}
`,oN=A.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 12px;
  cursor: pointer;
`,lN=A.p`
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
`,uN=A.div`
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
`;function wm({titleKor:n,titleEng:t,context:r,isOpen:a=!0,onClose:o,src:u,docId:f,collection:p="works"}){const[m,g]=K.useState(0),[v,w]=K.useState(!1);K.useEffect(()=>{let O=!0;return(async()=>{if(f!=null)try{const B=ql(Kl,p,String(f)),P=await hh(B);if(!O)return;if(P.exists()){const G=P.data();g(typeof G.like=="number"?G.like:0)}else g(0)}catch(B){console.error("Firestore getDoc error:",B),O&&g(0)}})(),()=>{O=!1}},[f,p]);const S=async()=>{try{const O=ql(Kl,p,String(f)),B=await hh(O);if(B.exists()){const P=B.data();g(typeof P.like=="number"?P.like:0)}}catch(O){console.error("Firestore refresh error:",O)}},R=async()=>{if(v)return;if(f==null){console.warn("handleLike called without a valid docId");return}w(!0);const O=ql(Kl,p,String(f));try{await jh(O,{like:Dh(1)}),g(B=>B+1),await S()}catch(B){if(B.code==="not-found"||/No document/i.test(String(B)))try{(await hh(O)).exists()?await jh(O,{like:Dh(1)}):await Ng(O,{like:1},{merge:!0}),await S()}catch(P){console.error("Firestore like fallback error:",P)}else console.error("Firestore like error:",B)}finally{w(!1)}};return x.jsx(Y5,{$open:!!a,children:x.jsxs(Q5,{children:[x.jsxs(X5,{children:[x.jsx(W5,{onClick:()=>{typeof o=="function"&&o()},children:x.jsx("img",{src:`${bm}icons/closeIcon.svg`,alt:"Close Icon"})}),x.jsxs(Z5,{children:[x.jsx(J5,{children:n}),x.jsx(tN,{children:r})]}),x.jsx(eN,{$src:u})]}),x.jsxs(nN,{children:[x.jsx(iN,{onClick:R,"aria-disabled":v,title:v?"처리 중":"좋아요",children:x.jsxs(rN,{children:[x.jsx(aN,{$src:`${bm}icons/likeIcon(white).svg`,"aria-label":"Like icon"}),x.jsx(sN,{children:m})]})}),x.jsxs(oN,{onClick:()=>{const B=Math.max(document.documentElement?.scrollHeight||0,document.body?.scrollHeight||0)-window.innerHeight,G=Math.max(0,B-269);window.scrollTo({top:G,behavior:"smooth"})},children:[x.jsx(lN,{children:"Designer Info"}),x.jsx(uN,{})]})]})]})})}wm.propTypes={titleKor:W.string.isRequired,titleEng:W.string.isRequired,context:W.string.isRequired,isOpen:W.bool,onClose:W.func,docId:W.oneOfType([W.string,W.number]).isRequired,collection:W.string};const cN=A.div`
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
`,hN=A.div`
  display: flex;
  width: 290px;
  height: 387px;
  border-radius: 4px;
  @media (max-width: 640px) {
    width: 173px;
    height: 231px;
    border-radius: 4px;
}
`,fN=A.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  display: block;
`,dN=A.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 8px);
  width: auto;
  @media (max-width: 640px) {
    height: 100%;
}
`,pN=A.div`
  display: flex;
  height: auto;
  padding: 0;
  margin: 0;
  flex-direction: column;
  gap: 0px;
`,mN=A.h1`
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
`,gN=A.h2`
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
`,yN=A.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 84px;
  @media (max-width: 640px) {
    height: 38px;
}
`,xN=A.div`
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
`,Mp=A.h3`
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
`,vN=A.div`
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
`,Op=A.p`
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
`;function Vg({nameKor:n,nameEng:t,part:r,sns:a,eMail:o,imgUrl:u,imgAlt:f}){return x.jsxs(cN,{children:[x.jsx(hN,{children:x.jsx(fN,{src:u,alt:f})}),x.jsxs(dN,{children:[x.jsxs(pN,{children:[x.jsx(mN,{children:n}),x.jsx(gN,{children:t})]}),x.jsxs(yN,{children:[x.jsxs(xN,{children:[x.jsx(Mp,{children:"Part"}),x.jsx(Mp,{children:"SNS"}),x.jsx(Mp,{children:"E-mail"})]}),x.jsxs(vN,{children:[x.jsx(Op,{children:r}),x.jsx(Op,{children:a}),x.jsx(Op,{children:o})]})]})]})]})}Vg.propTypes={nameKor:W.string.isRequired,nameEng:W.string.isRequired,part:W.string,sns:W.string,eMail:W.string,imgUrl:W.string.isRequired,imgAlt:W.string.isRequired};Vg.defaultProps={sns:"N/A",eMail:"N/A"};const _N=A.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 775px;
  height: 945px;
  gap: 20px;
  margin: 140px 0 120px 77px;
  @media (max-width: 640px) {
    width: calc(100vw - 32px);
    height: auto;
    margin: 100px 0px 100px 16px;
}
`,EN=A.div`
  display: flex;
  flex-direction: column;
  width: 810px;
  height: auto;
  gap: 76px;
  @media (max-width: 640px) {
    width: 100%;
    gap: 21px;
}
`,bN=A.h1`
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
`;function o_({designers:n}){return x.jsxs(_N,{children:[x.jsx(bN,{children:"Designer"}),x.jsx(EN,{children:n.map((t,r)=>x.jsx(Vg,{nameKor:t.nameKor,nameEn:t.nameEn,part:t.role,sns:t.sns,eMail:t.eMail,imgUrl:t.imgUrl},r))})]})}const wN=A.div`
    width: 100%; // 임시값
    margin-top: 50px;
@media (max-width: 640px) {
    margin-top: 20px;
}
`,TN=A.div`
    position: relative;
    width: 100%;
    max-width: 100vw;
    padding-top: 56.25%; // 16:9 비율
`,SN=A.iframe`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
`;function AN({videoId:n}){return x.jsx(wN,{children:x.jsx(TN,{children:x.jsx(SN,{src:"https://player.vimeo.com/video/1126266309?h=1f3e4f1f6e&title=0&byline=0&portrait=0",frameBorder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,title:"Embedded Vimeo"})})})}const RN="/TU2025gradulate/",CN=A.div`
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
`,IN=A.div`
    display: flex;
    width: 40px;
    height: 40px;
`;function jN({isOpen:n=!1,onClick:t}){const[r,a]=K.useState(!1);return K.useEffect(()=>{let o;return n?a(!1):(a(!1),o=setTimeout(()=>{a(!0)},500)),()=>clearTimeout(o)},[n]),x.jsx(CN,{$visible:!n,$active:r,onClick:()=>{typeof t=="function"&&t()},children:x.jsx(IN,{children:x.jsx("img",{src:`${RN}icons/infoOpenIcon.svg`,alt:"작품 정보 열기"})})})}const l_=40;function Qc(n){if(!n)return n;const t="/TU2025gradulate/";if(/^https?:\/\//i.test(n))return n;const r=String(n).replace(/^\.\.\//,"").replace(/^\//,"");return t+r}const DN=A.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
  image-rendering: -webkit-optimize-contrast;
  @media (max-width: 640px) {
    min-width: 100vw;
}
`,Vp=n=>x.jsx(DN,{loading:"lazy",...n}),NN=A.div`
  display: flex;
  position: relative;
  background: #fff;
  width: 100%;
  @media (max-width: 640px) {
    flex-direction: column;
}
`,MN=A.div`
  padding-right: ${l_}px;
  padding-left: ${n=>n.$isInfoOpen?0:l_}px;
  flex: 1 1 auto;
  width: auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* transition: all 500ms ease; */
  @media (max-width: 640px) {
    padding: 0
}
`,ON=A.div`
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
`,u_=A.div`
  display: flex;
  position: relative;
  width: 100%;
`,VN={A:"c0",E:"c1",H:"c2",I:"c3",L:"c4",M:"c5"};function kN(){const{pid:n}=dT(),t=(n||"").toUpperCase().match(/^([A-Z])(\d{3})$/),[r,a]=K.useState(!0),[o,u]=K.useState(!0),f=()=>{a(!1),setTimeout(()=>{u(!1)},500)},p=()=>{u(!0),setTimeout(()=>{a(!0)},0)};let m=null;if(t){const[,G,X]=t,it=VN[G]||null,ht=Math.max(0,parseInt(X,10)-1);m=Yl.find(J=>J.projectNum===ht&&(!it||J.category===it)),m||(m=Yl.find(J=>J.projectNum==ht))}if(!m)return x.jsx(u_,{children:x.jsxs(PageContainer,{children:[x.jsx(wm,{titleKor:"작품 제목(한글)",titleEng:"Work Title (English)",context:"이곳은 작품 설명이 들어가는 영역입니다. 작품에 대한 상세한 설명이나 배경, 제작 과정 등을 기술할 수 있습니다. 이 텍스트는 예시로 작성된 내용이며, 실제 작품 설명으로 대체되어야 합니다.",isOpen:r,onClose:()=>a(!1),docId:0}),x.jsx(Vp,{src:"https://placehold.co/1530x4000",alt:"featured"}),x.jsx(o_,{children:"  "})]})});const g=(m.members||[]).map(G=>{const X=qm.find(it=>it.num===G);return X?{nameKor:X.nameKor,nameEng:X.nameEng,role:X.role||"Designer",sns:X.sns||"-",eMail:X.eMail||"",imgUrl:Qc(X.imgUrl||"/김예준.jpg")}:null}).filter(Boolean),w={c0:"A",c1:"E",c2:"H",c3:"I",c4:"L",c5:"M"}[m.category]||"A",S=m.projectNum??m.num,R=String(S).padStart(3,"0"),O=`/projects/${S}`,B=Number(m.galleryCount||0),P=Array.from({length:B},(G,X)=>Qc(`${O}/gallery/${X}.jpg`));return K.useEffect(()=>{const G=m?.projectNum??m?.num;if(G==null)return;const it=ql(Kl,"works",String(G));(async()=>{try{await jh(it,{view:Dh(1)})}catch(ht){if(ht.code==="not-found"||/No document/i.test(String(ht)))try{(await hh(it)).exists()?await jh(it,{view:Dh(1)}):await Ng(it,{view:1},{merge:!0})}catch(J){console.error("Firestore view fallback error:",J)}else console.error("Firestore view error:",ht)}})()},[m?.projectNum,m?.num]),x.jsx(u_,{children:x.jsxs(NN,{children:[x.jsx(jN,{isOpen:r,onClick:p}),x.jsx(ON,{$visible:o,children:x.jsx(wm,{titleKor:m.titleKor,titleEng:m.titleEng,context:m.description||"null",isOpen:r,onClose:f,src:Qc(`/projects/${S}/thumb.jpg`),docId:S})}),x.jsxs(MN,{$isInfoOpen:r,children:[P.length>0?P.map((G,X)=>x.jsx(Vp,{src:G,alt:`project-${w}${R}-img-${X+1}`},X)):x.jsx(Vp,{src:Qc("/thumbnailExample.png"),alt:`project-${w}${R}-placeholder`}),x.jsx(AN,{videoId:m.videoId}),x.jsx(o_,{designers:g})]})]})})}var kp={exports:{}},Dl={},Up={exports:{}},Pp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c_;function UN(){return c_||(c_=1,(function(n){function t(Z,ct){var yt=Z.length;Z.push(ct);t:for(;0<yt;){var Ct=yt-1>>>1,V=Z[Ct];if(0<o(V,ct))Z[Ct]=ct,Z[yt]=V,yt=Ct;else break t}}function r(Z){return Z.length===0?null:Z[0]}function a(Z){if(Z.length===0)return null;var ct=Z[0],yt=Z.pop();if(yt!==ct){Z[0]=yt;t:for(var Ct=0,V=Z.length,at=V>>>1;Ct<at;){var lt=2*(Ct+1)-1,ut=Z[lt],gt=lt+1,It=Z[gt];if(0>o(ut,yt))gt<V&&0>o(It,ut)?(Z[Ct]=It,Z[gt]=yt,Ct=gt):(Z[Ct]=ut,Z[lt]=yt,Ct=lt);else if(gt<V&&0>o(It,yt))Z[Ct]=It,Z[gt]=yt,Ct=gt;else break t}}return ct}function o(Z,ct){var yt=Z.sortIndex-ct.sortIndex;return yt!==0?yt:Z.id-ct.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;n.unstable_now=function(){return u.now()}}else{var f=Date,p=f.now();n.unstable_now=function(){return f.now()-p}}var m=[],g=[],v=1,w=null,S=3,R=!1,O=!1,B=!1,P=!1,G=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,it=typeof setImmediate<"u"?setImmediate:null;function ht(Z){for(var ct=r(g);ct!==null;){if(ct.callback===null)a(g);else if(ct.startTime<=Z)a(g),ct.sortIndex=ct.expirationTime,t(m,ct);else break;ct=r(g)}}function J(Z){if(B=!1,ht(Z),!O)if(r(m)!==null)O=!0,dt||(dt=!0,z());else{var ct=r(g);ct!==null&&ne(J,ct.startTime-Z)}}var dt=!1,j=-1,C=5,I=-1;function M(){return P?!0:!(n.unstable_now()-I<C)}function k(){if(P=!1,dt){var Z=n.unstable_now();I=Z;var ct=!0;try{t:{O=!1,B&&(B=!1,X(j),j=-1),R=!0;var yt=S;try{e:{for(ht(Z),w=r(m);w!==null&&!(w.expirationTime>Z&&M());){var Ct=w.callback;if(typeof Ct=="function"){w.callback=null,S=w.priorityLevel;var V=Ct(w.expirationTime<=Z);if(Z=n.unstable_now(),typeof V=="function"){w.callback=V,ht(Z),ct=!0;break e}w===r(m)&&a(m),ht(Z)}else a(m);w=r(m)}if(w!==null)ct=!0;else{var at=r(g);at!==null&&ne(J,at.startTime-Z),ct=!1}}break t}finally{w=null,S=yt,R=!1}ct=void 0}}finally{ct?z():dt=!1}}}var z;if(typeof it=="function")z=function(){it(k)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,ue=N.port2;N.port1.onmessage=k,z=function(){ue.postMessage(null)}}else z=function(){G(k,0)};function ne(Z,ct){j=G(function(){Z(n.unstable_now())},ct)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Z){Z.callback=null},n.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<Z?Math.floor(1e3/Z):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_next=function(Z){switch(S){case 1:case 2:case 3:var ct=3;break;default:ct=S}var yt=S;S=ct;try{return Z()}finally{S=yt}},n.unstable_requestPaint=function(){P=!0},n.unstable_runWithPriority=function(Z,ct){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var yt=S;S=Z;try{return ct()}finally{S=yt}},n.unstable_scheduleCallback=function(Z,ct,yt){var Ct=n.unstable_now();switch(typeof yt=="object"&&yt!==null?(yt=yt.delay,yt=typeof yt=="number"&&0<yt?Ct+yt:Ct):yt=Ct,Z){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=yt+V,Z={id:v++,callback:ct,priorityLevel:Z,startTime:yt,expirationTime:V,sortIndex:-1},yt>Ct?(Z.sortIndex=yt,t(g,Z),r(m)===null&&Z===r(g)&&(B?(X(j),j=-1):B=!0,ne(J,yt-Ct))):(Z.sortIndex=V,t(m,Z),O||R||(O=!0,dt||(dt=!0,z()))),Z},n.unstable_shouldYield=M,n.unstable_wrapCallback=function(Z){var ct=S;return function(){var yt=S;S=ct;try{return Z.apply(this,arguments)}finally{S=yt}}}})(Pp)),Pp}var h_;function PN(){return h_||(h_=1,Up.exports=UN()),Up.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f_;function LN(){if(f_)return Dl;f_=1;var n=PN(),t=Tm(),r=cS();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(a(188))}function m(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,l=i;;){var h=s.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){s=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===s)return p(h),e;if(d===l)return p(h),i;d=d.sibling}throw Error(a(188))}if(s.return!==l.return)s=h,l=d;else{for(var E=!1,b=h.child;b;){if(b===s){E=!0,s=h,l=d;break}if(b===l){E=!0,l=h,s=d;break}b=b.sibling}if(!E){for(b=d.child;b;){if(b===s){E=!0,s=d,l=h;break}if(b===l){E=!0,l=d,s=h;break}b=b.sibling}if(!E)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function g(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=g(e),i!==null)return i;e=e.sibling}return null}var v=Object.assign,w=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),X=Symbol.for("react.consumer"),it=Symbol.for("react.context"),ht=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),dt=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),M=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function z(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var N=Symbol.for("react.client.reference");function ue(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===N?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case O:return"Fragment";case P:return"Profiler";case B:return"StrictMode";case J:return"Suspense";case dt:return"SuspenseList";case I:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case it:return(e.displayName||"Context")+".Provider";case X:return(e._context.displayName||"Context")+".Consumer";case ht:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case j:return i=e.displayName||null,i!==null?i:ue(e.type)||"Memo";case C:i=e._payload,e=e._init;try{return ue(e(i))}catch{}}return null}var ne=Array.isArray,Z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ct=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,yt={pending:!1,data:null,method:null,action:null},Ct=[],V=-1;function at(e){return{current:e}}function lt(e){0>V||(e.current=Ct[V],Ct[V]=null,V--)}function ut(e,i){V++,Ct[V]=e.current,e.current=i}var gt=at(null),It=at(null),_t=at(null),ge=at(null);function Lt(e,i){switch(ut(_t,i),ut(It,e),ut(gt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?b1(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=b1(i),e=w1(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}lt(gt),ut(gt,e)}function Me(){lt(gt),lt(It),lt(_t)}function ji(e){e.memoizedState!==null&&ut(ge,e);var i=gt.current,s=w1(i,e.type);i!==s&&(ut(It,e),ut(gt,s))}function Kn(e){It.current===e&&(lt(gt),lt(It)),ge.current===e&&(lt(ge),wl._currentValue=yt)}var on=Object.prototype.hasOwnProperty,oa=n.unstable_scheduleCallback,es=n.unstable_cancelCallback,af=n.unstable_shouldYield,wo=n.unstable_requestPaint,dn=n.unstable_now,xu=n.unstable_getCurrentPriorityLevel,Oe=n.unstable_ImmediatePriority,Le=n.unstable_UserBlockingPriority,Di=n.unstable_NormalPriority,sf=n.unstable_LowPriority,To=n.unstable_IdlePriority,of=n.log,la=n.unstable_setDisableYieldValue,ur=null,Je=null;function jn(e){if(typeof of=="function"&&la(e),Je&&typeof Je.setStrictMode=="function")try{Je.setStrictMode(ur,e)}catch{}}var ln=Math.clz32?Math.clz32:_u,lf=Math.log,vu=Math.LN2;function _u(e){return e>>>=0,e===0?32:31-(lf(e)/vu|0)|0}var si=256,cr=4194304;function Hn(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Dn(e,i,s){var l=e.pendingLanes;if(l===0)return 0;var h=0,d=e.suspendedLanes,E=e.pingedLanes;e=e.warmLanes;var b=l&134217727;return b!==0?(l=b&~d,l!==0?h=Hn(l):(E&=b,E!==0?h=Hn(E):s||(s=b&~e,s!==0&&(h=Hn(s))))):(b=l&~d,b!==0?h=Hn(b):E!==0?h=Hn(E):s||(s=l&~e,s!==0&&(h=Hn(s)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,s=i&-i,d>=s||d===32&&(s&4194048)!==0)?i:h}function hr(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function ns(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function So(){var e=si;return si<<=1,(si&4194048)===0&&(si=256),e}function fr(){var e=cr;return cr<<=1,(cr&62914560)===0&&(cr=4194304),e}function is(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function ve(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Eu(e,i,s,l,h,d){var E=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var b=e.entanglements,D=e.expirationTimes,q=e.hiddenUpdates;for(s=E&~s;0<s;){var tt=31-ln(s),rt=1<<tt;b[tt]=0,D[tt]=-1;var H=q[tt];if(H!==null)for(q[tt]=null,tt=0;tt<H.length;tt++){var Y=H[tt];Y!==null&&(Y.lane&=-536870913)}s&=~rt}l!==0&&dr(e,l,0),d!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=d&~(E&~i))}function dr(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-ln(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|s&4194090}function pr(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var l=31-ln(s),h=1<<l;h&i|e[l]&i&&(e[l]|=i),s&=~h}}function Ao(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ro(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ni(){var e=ct.p;return e!==0?e:(e=window.event,e===void 0?32:$1(e.type))}function uf(e,i){var s=ct.p;try{return ct.p=e,i()}finally{ct.p=s}}var oi=Math.random().toString(36).slice(2),_e="__reactFiber$"+oi,He="__reactProps$"+oi,Mi="__reactContainer$"+oi,ua="__reactEvents$"+oi,ca="__reactListeners$"+oi,cf="__reactHandles$"+oi,Gn="__reactResources$"+oi,mr="__reactMarker$"+oi;function rs(e){delete e[_e],delete e[He],delete e[ua],delete e[ca],delete e[cf]}function li(e){var i=e[_e];if(i)return i;for(var s=e.parentNode;s;){if(i=s[Mi]||s[_e]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=R1(e);e!==null;){if(s=e[_e])return s;e=R1(e)}return i}e=s,s=e.parentNode}return null}function ui(e){if(e=e[_e]||e[Mi]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function gr(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function yr(e){var i=e[Gn];return i||(i=e[Gn]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Ee(e){e[mr]=!0}var bu=new Set,ha={};function ci(e,i){hi(e,i),hi(e+"Capture",i)}function hi(e,i){for(ha[e]=i,e=0;e<i.length;e++)bu.add(i[e])}var fa=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),fi={},as={};function hf(e){return on.call(as,e)?!0:on.call(fi,e)?!1:fa.test(e)?as[e]=!0:(fi[e]=!0,!1)}function da(e,i,s){if(hf(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function pa(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function Nn(e,i,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+l)}}var ma,ss;function Oi(e){if(ma===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);ma=i&&i[1]||"",ss=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ma+e+ss}var os=!1;function ls(e,i){if(!e||os)return"";os=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var rt=function(){throw Error()};if(Object.defineProperty(rt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(rt,[])}catch(Y){var H=Y}Reflect.construct(e,[],rt)}else{try{rt.call()}catch(Y){H=Y}e.call(rt.prototype)}}else{try{throw Error()}catch(Y){H=Y}(rt=e())&&typeof rt.catch=="function"&&rt.catch(function(){})}}catch(Y){if(Y&&H&&typeof Y.stack=="string")return[Y.stack,H.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),E=d[0],b=d[1];if(E&&b){var D=E.split(`
`),q=b.split(`
`);for(h=l=0;l<D.length&&!D[l].includes("DetermineComponentFrameRoot");)l++;for(;h<q.length&&!q[h].includes("DetermineComponentFrameRoot");)h++;if(l===D.length||h===q.length)for(l=D.length-1,h=q.length-1;1<=l&&0<=h&&D[l]!==q[h];)h--;for(;1<=l&&0<=h;l--,h--)if(D[l]!==q[h]){if(l!==1||h!==1)do if(l--,h--,0>h||D[l]!==q[h]){var tt=`
`+D[l].replace(" at new "," at ");return e.displayName&&tt.includes("<anonymous>")&&(tt=tt.replace("<anonymous>",e.displayName)),tt}while(1<=l&&0<=h);break}}}finally{os=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?Oi(s):""}function ff(e){switch(e.tag){case 26:case 27:case 5:return Oi(e.type);case 16:return Oi("Lazy");case 13:return Oi("Suspense");case 19:return Oi("SuspenseList");case 0:case 15:return ls(e.type,!1);case 11:return ls(e.type.render,!1);case 1:return ls(e.type,!0);case 31:return Oi("Activity");default:return""}}function Yn(e){try{var i="";do i+=ff(e),e=e.return;while(e);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function fe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xr(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ga(e){var i=xr(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),l=""+e[i];if(!e.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var h=s.get,d=s.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(E){l=""+E,d.call(this,E)}}),Object.defineProperty(e,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function vr(e){e._valueTracker||(e._valueTracker=ga(e))}function Wt(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return e&&(l=xr(e)?e.checked?"true":"false":e.value),e=l,e!==s?(i.setValue(e),!0):!1}function Vi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ya=/[\n"\\]/g;function ze(e){return e.replace(ya,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Co(e,i,s,l,h,d,E,b){e.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.type=E:e.removeAttribute("type"),i!=null?E==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+fe(i)):e.value!==""+fe(i)&&(e.value=""+fe(i)):E!=="submit"&&E!=="reset"||e.removeAttribute("value"),i!=null?jo(e,E,fe(i)):s!=null?jo(e,E,fe(s)):l!=null&&e.removeAttribute("value"),h==null&&d!=null&&(e.defaultChecked=!!d),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+fe(b):e.removeAttribute("name")}function Io(e,i,s,l,h,d,E,b){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;s=s!=null?""+fe(s):"",i=i!=null?""+fe(i):s,b||i===e.value||(e.value=i),e.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=b?e.checked:!!l,e.defaultChecked=!!l,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(e.name=E)}function jo(e,i,s){i==="number"&&Vi(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function _r(e,i,s,l){if(e=e.options,i){i={};for(var h=0;h<s.length;h++)i["$"+s[h]]=!0;for(s=0;s<e.length;s++)h=i.hasOwnProperty("$"+e[s].value),e[s].selected!==h&&(e[s].selected=h),h&&l&&(e[s].defaultSelected=!0)}else{for(s=""+fe(s),i=null,h=0;h<e.length;h++){if(e[h].value===s){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function wu(e,i,s){if(i!=null&&(i=""+fe(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+fe(s):""}function Tu(e,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(ne(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=fe(i),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l)}function Mn(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var ki=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Do(e,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,s):typeof s!="number"||s===0||ki.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function No(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&s[h]!==l&&Do(e,h,l)}else for(var d in i)i.hasOwnProperty(d)&&Do(e,d,i[d])}function us(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Su=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Au=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qn(e){return Au.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Mo=null;function Oo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Er=null,un=null;function Ru(e){var i=ui(e);if(i&&(e=i.stateNode)){var s=e[He]||null;t:switch(e=i.stateNode,i.type){case"input":if(Co(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+ze(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==e&&l.form===e.form){var h=l[He]||null;if(!h)throw Error(a(90));Co(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===e.form&&Wt(l)}break t;case"textarea":wu(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&_r(e,!!s.multiple,i,!1)}}}var xa=!1;function va(e,i,s){if(xa)return e(i,s);xa=!0;try{var l=e(i);return l}finally{if(xa=!1,(Er!==null||un!==null)&&(gc(),Er&&(i=Er,e=un,un=Er=null,Ru(i),e)))for(i=0;i<e.length;i++)Ru(e[i])}}function br(e,i){var s=e.stateNode;if(s===null)return null;var l=s[He]||null;if(l===null)return null;s=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ui=!1;if(cn)try{var wr={};Object.defineProperty(wr,"passive",{get:function(){Ui=!0}}),window.addEventListener("test",wr,wr),window.removeEventListener("test",wr,wr)}catch{Ui=!1}var On=null,ie=null,cs=null;function Cu(){if(cs)return cs;var e,i=ie,s=i.length,l,h="value"in On?On.value:On.textContent,d=h.length;for(e=0;e<s&&i[e]===h[e];e++);var E=s-e;for(l=1;l<=E&&i[s-l]===h[d-l];l++);return cs=h.slice(e,1<l?1-l:void 0)}function _a(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Ea(){return!0}function Vo(){return!1}function Ve(e){function i(s,l,h,d,E){this._reactName=s,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=E,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(s=e[b],this[b]=s?s(d):d[b]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Ea:Vo,this.isPropagationStopped=Vo,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Ea)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Ea)},persist:function(){},isPersistent:Ea}),i}var tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ba=Ve(tn),wa=v({},tn,{view:0,detail:0}),Ta=Ve(wa),hs,Sa,di,Aa=v({},wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ps,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==di&&(di&&e.type==="mousemove"?(hs=e.screenX-di.screenX,Sa=e.screenY-di.screenY):Sa=hs=0,di=e),hs)},movementY:function(e){return"movementY"in e?e.movementY:Sa}}),Ra=Ve(Aa),df=v({},Aa,{dataTransfer:0}),Iu=Ve(df),Ca=v({},wa,{relatedTarget:0}),fs=Ve(Ca),ju=v({},tn,{animationName:0,elapsedTime:0,pseudoElement:0}),ko=Ve(ju),Uo=v({},tn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Du=Ve(Uo),ds=v({},tn,{data:0}),Po=Ve(ds),Nu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pi={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ou(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Mu[e])?!!i[e]:!1}function ps(){return Ou}var Vu=v({},wa,{key:function(e){if(e.key){var i=Nu[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=_a(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Pi[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ps,charCode:function(e){return e.type==="keypress"?_a(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_a(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ms=Ve(Vu),hn=v({},Aa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lo=Ve(hn),ku=v({},wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ps}),Tr=Ve(ku),c=v({},tn,{propertyName:0,elapsedTime:0,pseudoElement:0}),y=Ve(c),_=v({},Aa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),T=Ve(_),F=v({},tn,{newState:0,oldState:0}),Q=Ve(F),ot=[9,13,27,32],At=cn&&"CompositionEvent"in window,se=null;cn&&"documentMode"in document&&(se=document.documentMode);var Yt=cn&&"TextEvent"in window&&!se,be=cn&&(!At||se&&8<se&&11>=se),_n=" ",pi=!1;function Xn(e,i){switch(e){case"keyup":return ot.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wn(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zn=!1;function zo(e,i){switch(e){case"compositionend":return Wn(i);case"keypress":return i.which!==32?null:(pi=!0,_n);case"textInput":return e=i.data,e===_n&&pi?null:e;default:return null}}function ab(e,i){if(Zn)return e==="compositionend"||!At&&Xn(e,i)?(e=Cu(),cs=ie=On=null,Zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return be&&i.locale!=="ko"?null:i.data;default:return null}}var sb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kg(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!sb[e.type]:i==="textarea"}function Ug(e,i,s,l){Er?un?un.push(l):un=[l]:Er=l,i=bc(i,"onChange"),0<i.length&&(s=new ba("onChange","change",null,s,l),e.push({event:s,listeners:i}))}var Bo=null,$o=null;function ob(e){y1(e,0)}function Uu(e){var i=gr(e);if(Wt(i))return e}function Pg(e,i){if(e==="change")return i}var Lg=!1;if(cn){var pf;if(cn){var mf="oninput"in document;if(!mf){var zg=document.createElement("div");zg.setAttribute("oninput","return;"),mf=typeof zg.oninput=="function"}pf=mf}else pf=!1;Lg=pf&&(!document.documentMode||9<document.documentMode)}function Bg(){Bo&&(Bo.detachEvent("onpropertychange",$g),$o=Bo=null)}function $g(e){if(e.propertyName==="value"&&Uu($o)){var i=[];Ug(i,$o,e,Oo(e)),va(ob,i)}}function lb(e,i,s){e==="focusin"?(Bg(),Bo=i,$o=s,Bo.attachEvent("onpropertychange",$g)):e==="focusout"&&Bg()}function ub(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Uu($o)}function cb(e,i){if(e==="click")return Uu(i)}function hb(e,i){if(e==="input"||e==="change")return Uu(i)}function fb(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var En=typeof Object.is=="function"?Object.is:fb;function Fo(e,i){if(En(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var h=s[l];if(!on.call(i,h)||!En(e[h],i[h]))return!1}return!0}function Fg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qg(e,i){var s=Fg(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=i&&l>=i)return{node:s,offset:i-e};e=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=Fg(s)}}function Kg(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Kg(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Hg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Vi(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=Vi(e.document)}return i}function gf(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var db=cn&&"documentMode"in document&&11>=document.documentMode,gs=null,yf=null,qo=null,xf=!1;function Gg(e,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;xf||gs==null||gs!==Vi(l)||(l=gs,"selectionStart"in l&&gf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),qo&&Fo(qo,l)||(qo=l,l=bc(yf,"onSelect"),0<l.length&&(i=new ba("onSelect","select",null,i,s),e.push({event:i,listeners:l}),i.target=gs)))}function Ia(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var ys={animationend:Ia("Animation","AnimationEnd"),animationiteration:Ia("Animation","AnimationIteration"),animationstart:Ia("Animation","AnimationStart"),transitionrun:Ia("Transition","TransitionRun"),transitionstart:Ia("Transition","TransitionStart"),transitioncancel:Ia("Transition","TransitionCancel"),transitionend:Ia("Transition","TransitionEnd")},vf={},Yg={};cn&&(Yg=document.createElement("div").style,"AnimationEvent"in window||(delete ys.animationend.animation,delete ys.animationiteration.animation,delete ys.animationstart.animation),"TransitionEvent"in window||delete ys.transitionend.transition);function ja(e){if(vf[e])return vf[e];if(!ys[e])return e;var i=ys[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in Yg)return vf[e]=i[s];return e}var Qg=ja("animationend"),Xg=ja("animationiteration"),Wg=ja("animationstart"),pb=ja("transitionrun"),mb=ja("transitionstart"),gb=ja("transitioncancel"),Zg=ja("transitionend"),Jg=new Map,_f="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_f.push("scrollEnd");function Jn(e,i){Jg.set(e,i),ci(i,[e])}var t0=new WeakMap;function Vn(e,i){if(typeof e=="object"&&e!==null){var s=t0.get(e);return s!==void 0?s:(i={value:e,source:i,stack:Yn(i)},t0.set(e,i),i)}return{value:e,source:i,stack:Yn(i)}}var kn=[],xs=0,Ef=0;function Pu(){for(var e=xs,i=Ef=xs=0;i<e;){var s=kn[i];kn[i++]=null;var l=kn[i];kn[i++]=null;var h=kn[i];kn[i++]=null;var d=kn[i];if(kn[i++]=null,l!==null&&h!==null){var E=l.pending;E===null?h.next=h:(h.next=E.next,E.next=h),l.pending=h}d!==0&&e0(s,h,d)}}function Lu(e,i,s,l){kn[xs++]=e,kn[xs++]=i,kn[xs++]=s,kn[xs++]=l,Ef|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function bf(e,i,s,l){return Lu(e,i,s,l),zu(e)}function vs(e,i){return Lu(e,null,null,i),zu(e)}function e0(e,i,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var h=!1,d=e.return;d!==null;)d.childLanes|=s,l=d.alternate,l!==null&&(l.childLanes|=s),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(h=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,h&&i!==null&&(h=31-ln(s),e=d.hiddenUpdates,l=e[h],l===null?e[h]=[i]:l.push(i),i.lane=s|536870912),d):null}function zu(e){if(50<ml)throw ml=0,Cd=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var _s={};function yb(e,i,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(e,i,s,l){return new yb(e,i,s,l)}function wf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Li(e,i){var s=e.alternate;return s===null?(s=bn(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function n0(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Bu(e,i,s,l,h,d){var E=0;if(l=e,typeof e=="function")wf(e)&&(E=1);else if(typeof e=="string")E=vw(e,s,gt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case I:return e=bn(31,s,i,h),e.elementType=I,e.lanes=d,e;case O:return Da(s.children,h,d,i);case B:E=8,h|=24;break;case P:return e=bn(12,s,i,h|2),e.elementType=P,e.lanes=d,e;case J:return e=bn(13,s,i,h),e.elementType=J,e.lanes=d,e;case dt:return e=bn(19,s,i,h),e.elementType=dt,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case G:case it:E=10;break t;case X:E=9;break t;case ht:E=11;break t;case j:E=14;break t;case C:E=16,l=null;break t}E=29,s=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=bn(E,s,i,h),i.elementType=e,i.type=l,i.lanes=d,i}function Da(e,i,s,l){return e=bn(7,e,l,i),e.lanes=s,e}function Tf(e,i,s){return e=bn(6,e,null,i),e.lanes=s,e}function Sf(e,i,s){return i=bn(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Es=[],bs=0,$u=null,Fu=0,Un=[],Pn=0,Na=null,zi=1,Bi="";function Ma(e,i){Es[bs++]=Fu,Es[bs++]=$u,$u=e,Fu=i}function i0(e,i,s){Un[Pn++]=zi,Un[Pn++]=Bi,Un[Pn++]=Na,Na=e;var l=zi;e=Bi;var h=32-ln(l)-1;l&=~(1<<h),s+=1;var d=32-ln(i)+h;if(30<d){var E=h-h%5;d=(l&(1<<E)-1).toString(32),l>>=E,h-=E,zi=1<<32-ln(i)+h|s<<h|l,Bi=d+e}else zi=1<<d|s<<h|l,Bi=e}function Af(e){e.return!==null&&(Ma(e,1),i0(e,1,0))}function Rf(e){for(;e===$u;)$u=Es[--bs],Es[bs]=null,Fu=Es[--bs],Es[bs]=null;for(;e===Na;)Na=Un[--Pn],Un[Pn]=null,Bi=Un[--Pn],Un[Pn]=null,zi=Un[--Pn],Un[Pn]=null}var fn=null,ye=null,Kt=!1,Oa=null,mi=!1,Cf=Error(a(519));function Va(e){var i=Error(a(418,""));throw Go(Vn(i,e)),Cf}function r0(e){var i=e.stateNode,s=e.type,l=e.memoizedProps;switch(i[_e]=e,i[He]=l,s){case"dialog":kt("cancel",i),kt("close",i);break;case"iframe":case"object":case"embed":kt("load",i);break;case"video":case"audio":for(s=0;s<yl.length;s++)kt(yl[s],i);break;case"source":kt("error",i);break;case"img":case"image":case"link":kt("error",i),kt("load",i);break;case"details":kt("toggle",i);break;case"input":kt("invalid",i),Io(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),vr(i);break;case"select":kt("invalid",i);break;case"textarea":kt("invalid",i),Tu(i,l.value,l.defaultValue,l.children),vr(i)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||E1(i.textContent,s)?(l.popover!=null&&(kt("beforetoggle",i),kt("toggle",i)),l.onScroll!=null&&kt("scroll",i),l.onScrollEnd!=null&&kt("scrollend",i),l.onClick!=null&&(i.onclick=wc),i=!0):i=!1,i||Va(e)}function a0(e){for(fn=e.return;fn;)switch(fn.tag){case 5:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:fn=fn.return}}function Ko(e){if(e!==fn)return!1;if(!Kt)return a0(e),Kt=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||qd(e.type,e.memoizedProps)),s=!s),s&&ye&&Va(e),a0(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(i===0){ye=ei(e.nextSibling);break t}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;e=e.nextSibling}ye=null}}else i===27?(i=ye,zr(e.type)?(e=Yd,Yd=null,ye=e):ye=i):ye=fn?ei(e.stateNode.nextSibling):null;return!0}function Ho(){ye=fn=null,Kt=!1}function s0(){var e=Oa;return e!==null&&(gn===null?gn=e:gn.push.apply(gn,e),Oa=null),e}function Go(e){Oa===null?Oa=[e]:Oa.push(e)}var If=at(null),ka=null,$i=null;function Sr(e,i,s){ut(If,i._currentValue),i._currentValue=s}function Fi(e){e._currentValue=If.current,lt(If)}function jf(e,i,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===s)break;e=e.return}}function Df(e,i,s,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var d=h.dependencies;if(d!==null){var E=h.child;d=d.firstContext;t:for(;d!==null;){var b=d;d=h;for(var D=0;D<i.length;D++)if(b.context===i[D]){d.lanes|=s,b=d.alternate,b!==null&&(b.lanes|=s),jf(d.return,s,e),l||(E=null);break t}d=b.next}}else if(h.tag===18){if(E=h.return,E===null)throw Error(a(341));E.lanes|=s,d=E.alternate,d!==null&&(d.lanes|=s),jf(E,s,e),E=null}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===e){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}}function Yo(e,i,s,l){e=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var E=h.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var b=h.type;En(h.pendingProps.value,E.value)||(e!==null?e.push(b):e=[b])}}else if(h===ge.current){if(E=h.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(wl):e=[wl])}h=h.return}e!==null&&Df(i,e,s,l),i.flags|=262144}function qu(e){for(e=e.firstContext;e!==null;){if(!En(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ua(e){ka=e,$i=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function en(e){return o0(ka,e)}function Ku(e,i){return ka===null&&Ua(e),o0(e,i)}function o0(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},$i===null){if(e===null)throw Error(a(308));$i=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else $i=$i.next=i;return s}var xb=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},vb=n.unstable_scheduleCallback,_b=n.unstable_NormalPriority,ke={$$typeof:it,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Nf(){return{controller:new xb,data:new Map,refCount:0}}function Qo(e){e.refCount--,e.refCount===0&&vb(_b,function(){e.controller.abort()})}var Xo=null,Mf=0,ws=0,Ts=null;function Eb(e,i){if(Xo===null){var s=Xo=[];Mf=0,ws=Vd(),Ts={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Mf++,i.then(l0,l0),i}function l0(){if(--Mf===0&&Xo!==null){Ts!==null&&(Ts.status="fulfilled");var e=Xo;Xo=null,ws=0,Ts=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function bb(e,i){var s=[],l={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<s.length;h++)(0,s[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),l}var u0=Z.S;Z.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&Eb(e,i),u0!==null&&u0(e,i)};var Pa=at(null);function Of(){var e=Pa.current;return e!==null?e:re.pooledCache}function Hu(e,i){i===null?ut(Pa,Pa.current):ut(Pa,i.pool)}function c0(){var e=Of();return e===null?null:{parent:ke._currentValue,pool:e}}var Wo=Error(a(460)),h0=Error(a(474)),Gu=Error(a(542)),Vf={then:function(){}};function f0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Yu(){}function d0(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(Yu,Yu),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,m0(e),e;default:if(typeof i.status=="string")i.then(Yu,Yu);else{if(e=re,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,m0(e),e}throw Zo=i,Wo}}var Zo=null;function p0(){if(Zo===null)throw Error(a(459));var e=Zo;return Zo=null,e}function m0(e){if(e===Wo||e===Gu)throw Error(a(483))}var Ar=!1;function kf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Uf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Rr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Cr(e,i,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Qt&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=zu(e),e0(e,null,s),i}return Lu(e,l,i,s),zu(e)}function Jo(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,pr(e,s)}}function Pf(e,i){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var h=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var E={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?h=d=E:d=d.next=E,s=s.next}while(s!==null);d===null?h=d=i:d=d.next=i}else h=d=i;s={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var Lf=!1;function tl(){if(Lf){var e=Ts;if(e!==null)throw e}}function el(e,i,s,l){Lf=!1;var h=e.updateQueue;Ar=!1;var d=h.firstBaseUpdate,E=h.lastBaseUpdate,b=h.shared.pending;if(b!==null){h.shared.pending=null;var D=b,q=D.next;D.next=null,E===null?d=q:E.next=q,E=D;var tt=e.alternate;tt!==null&&(tt=tt.updateQueue,b=tt.lastBaseUpdate,b!==E&&(b===null?tt.firstBaseUpdate=q:b.next=q,tt.lastBaseUpdate=D))}if(d!==null){var rt=h.baseState;E=0,tt=q=D=null,b=d;do{var H=b.lane&-536870913,Y=H!==b.lane;if(Y?(zt&H)===H:(l&H)===H){H!==0&&H===ws&&(Lf=!0),tt!==null&&(tt=tt.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Tt=e,Et=b;H=i;var te=s;switch(Et.tag){case 1:if(Tt=Et.payload,typeof Tt=="function"){rt=Tt.call(te,rt,H);break t}rt=Tt;break t;case 3:Tt.flags=Tt.flags&-65537|128;case 0:if(Tt=Et.payload,H=typeof Tt=="function"?Tt.call(te,rt,H):Tt,H==null)break t;rt=v({},rt,H);break t;case 2:Ar=!0}}H=b.callback,H!==null&&(e.flags|=64,Y&&(e.flags|=8192),Y=h.callbacks,Y===null?h.callbacks=[H]:Y.push(H))}else Y={lane:H,tag:b.tag,payload:b.payload,callback:b.callback,next:null},tt===null?(q=tt=Y,D=rt):tt=tt.next=Y,E|=H;if(b=b.next,b===null){if(b=h.shared.pending,b===null)break;Y=b,b=Y.next,Y.next=null,h.lastBaseUpdate=Y,h.shared.pending=null}}while(!0);tt===null&&(D=rt),h.baseState=D,h.firstBaseUpdate=q,h.lastBaseUpdate=tt,d===null&&(h.shared.lanes=0),kr|=E,e.lanes=E,e.memoizedState=rt}}function g0(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function y0(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)g0(s[e],i)}var Ss=at(null),Qu=at(0);function x0(e,i){e=Xi,ut(Qu,e),ut(Ss,i),Xi=e|i.baseLanes}function zf(){ut(Qu,Xi),ut(Ss,Ss.current)}function Bf(){Xi=Qu.current,lt(Ss),lt(Qu)}var Ir=0,Mt=null,Zt=null,Re=null,Xu=!1,As=!1,La=!1,Wu=0,nl=0,Rs=null,wb=0;function we(){throw Error(a(321))}function $f(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!En(e[s],i[s]))return!1;return!0}function Ff(e,i,s,l,h,d){return Ir=d,Mt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Z.H=e===null||e.memoizedState===null?ey:ny,La=!1,d=s(l,h),La=!1,As&&(d=_0(i,s,l,h)),v0(e),d}function v0(e){Z.H=ic;var i=Zt!==null&&Zt.next!==null;if(Ir=0,Re=Zt=Mt=null,Xu=!1,nl=0,Rs=null,i)throw Error(a(300));e===null||Be||(e=e.dependencies,e!==null&&qu(e)&&(Be=!0))}function _0(e,i,s,l){Mt=e;var h=0;do{if(As&&(Rs=null),nl=0,As=!1,25<=h)throw Error(a(301));if(h+=1,Re=Zt=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}Z.H=jb,d=i(s,l)}while(As);return d}function Tb(){var e=Z.H,i=e.useState()[0];return i=typeof i.then=="function"?il(i):i,e=e.useState()[0],(Zt!==null?Zt.memoizedState:null)!==e&&(Mt.flags|=1024),i}function qf(){var e=Wu!==0;return Wu=0,e}function Kf(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function Hf(e){if(Xu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Xu=!1}Ir=0,Re=Zt=Mt=null,As=!1,nl=Wu=0,Rs=null}function pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?Mt.memoizedState=Re=e:Re=Re.next=e,Re}function Ce(){if(Zt===null){var e=Mt.alternate;e=e!==null?e.memoizedState:null}else e=Zt.next;var i=Re===null?Mt.memoizedState:Re.next;if(i!==null)Re=i,Zt=e;else{if(e===null)throw Mt.alternate===null?Error(a(467)):Error(a(310));Zt=e,e={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},Re===null?Mt.memoizedState=Re=e:Re=Re.next=e}return Re}function Gf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function il(e){var i=nl;return nl+=1,Rs===null&&(Rs=[]),e=d0(Rs,e,i),i=Mt,(Re===null?i.memoizedState:Re.next)===null&&(i=i.alternate,Z.H=i===null||i.memoizedState===null?ey:ny),e}function Zu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return il(e);if(e.$$typeof===it)return en(e)}throw Error(a(438,String(e)))}function Yf(e){var i=null,s=Mt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=Mt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Gf(),Mt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),l=0;l<e;l++)s[l]=M;return i.index++,s}function qi(e,i){return typeof i=="function"?i(e):i}function Ju(e){var i=Ce();return Qf(i,Zt,e)}function Qf(e,i,s){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var h=e.baseQueue,d=l.pending;if(d!==null){if(h!==null){var E=h.next;h.next=d.next,d.next=E}i.baseQueue=h=d,l.pending=null}if(d=e.baseState,h===null)e.memoizedState=d;else{i=h.next;var b=E=null,D=null,q=i,tt=!1;do{var rt=q.lane&-536870913;if(rt!==q.lane?(zt&rt)===rt:(Ir&rt)===rt){var H=q.revertLane;if(H===0)D!==null&&(D=D.next={lane:0,revertLane:0,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),rt===ws&&(tt=!0);else if((Ir&H)===H){q=q.next,H===ws&&(tt=!0);continue}else rt={lane:0,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},D===null?(b=D=rt,E=d):D=D.next=rt,Mt.lanes|=H,kr|=H;rt=q.action,La&&s(d,rt),d=q.hasEagerState?q.eagerState:s(d,rt)}else H={lane:rt,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},D===null?(b=D=H,E=d):D=D.next=H,Mt.lanes|=rt,kr|=rt;q=q.next}while(q!==null&&q!==i);if(D===null?E=d:D.next=b,!En(d,e.memoizedState)&&(Be=!0,tt&&(s=Ts,s!==null)))throw s;e.memoizedState=d,e.baseState=E,e.baseQueue=D,l.lastRenderedState=d}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Xf(e){var i=Ce(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var l=s.dispatch,h=s.pending,d=i.memoizedState;if(h!==null){s.pending=null;var E=h=h.next;do d=e(d,E.action),E=E.next;while(E!==h);En(d,i.memoizedState)||(Be=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),s.lastRenderedState=d}return[d,l]}function E0(e,i,s){var l=Mt,h=Ce(),d=Kt;if(d){if(s===void 0)throw Error(a(407));s=s()}else s=i();var E=!En((Zt||h).memoizedState,s);E&&(h.memoizedState=s,Be=!0),h=h.queue;var b=T0.bind(null,l,h,e);if(rl(2048,8,b,[e]),h.getSnapshot!==i||E||Re!==null&&Re.memoizedState.tag&1){if(l.flags|=2048,Cs(9,tc(),w0.bind(null,l,h,s,i),null),re===null)throw Error(a(349));d||(Ir&124)!==0||b0(l,i,s)}return s}function b0(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=Mt.updateQueue,i===null?(i=Gf(),Mt.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function w0(e,i,s,l){i.value=s,i.getSnapshot=l,S0(i)&&A0(e)}function T0(e,i,s){return s(function(){S0(i)&&A0(e)})}function S0(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!En(e,s)}catch{return!0}}function A0(e){var i=vs(e,2);i!==null&&Rn(i,e,2)}function Wf(e){var i=pn();if(typeof e=="function"){var s=e;if(e=s(),La){jn(!0);try{s()}finally{jn(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:e},i}function R0(e,i,s,l){return e.baseState=s,Qf(e,Zt,typeof l=="function"?l:qi)}function Sb(e,i,s,l,h){if(nc(e))throw Error(a(485));if(e=i.action,e!==null){var d={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){d.listeners.push(E)}};Z.T!==null?s(!0):d.isTransition=!1,l(d),s=i.pending,s===null?(d.next=i.pending=d,C0(i,d)):(d.next=s.next,i.pending=s.next=d)}}function C0(e,i){var s=i.action,l=i.payload,h=e.state;if(i.isTransition){var d=Z.T,E={};Z.T=E;try{var b=s(h,l),D=Z.S;D!==null&&D(E,b),I0(e,i,b)}catch(q){Zf(e,i,q)}finally{Z.T=d}}else try{d=s(h,l),I0(e,i,d)}catch(q){Zf(e,i,q)}}function I0(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){j0(e,i,l)},function(l){return Zf(e,i,l)}):j0(e,i,s)}function j0(e,i,s){i.status="fulfilled",i.value=s,D0(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,C0(e,s)))}function Zf(e,i,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,D0(i),i=i.next;while(i!==l)}e.action=null}function D0(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function N0(e,i){return i}function M0(e,i){if(Kt){var s=re.formState;if(s!==null){t:{var l=Mt;if(Kt){if(ye){e:{for(var h=ye,d=mi;h.nodeType!==8;){if(!d){h=null;break e}if(h=ei(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){ye=ei(h.nextSibling),l=h.data==="F!";break t}}Va(l)}l=!1}l&&(i=s[0])}}return s=pn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:N0,lastRenderedState:i},s.queue=l,s=Z0.bind(null,Mt,l),l.dispatch=s,l=Wf(!1),d=id.bind(null,Mt,!1,l.queue),l=pn(),h={state:i,dispatch:null,action:e,pending:null},l.queue=h,s=Sb.bind(null,Mt,h,d,s),h.dispatch=s,l.memoizedState=e,[i,s,!1]}function O0(e){var i=Ce();return V0(i,Zt,e)}function V0(e,i,s){if(i=Qf(e,i,N0)[0],e=Ju(qi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=il(i)}catch(E){throw E===Wo?Gu:E}else l=i;i=Ce();var h=i.queue,d=h.dispatch;return s!==i.memoizedState&&(Mt.flags|=2048,Cs(9,tc(),Ab.bind(null,h,s),null)),[l,d,e]}function Ab(e,i){e.action=i}function k0(e){var i=Ce(),s=Zt;if(s!==null)return V0(i,s,e);Ce(),i=i.memoizedState,s=Ce();var l=s.queue.dispatch;return s.memoizedState=e,[i,l,!1]}function Cs(e,i,s,l){return e={tag:e,create:s,deps:l,inst:i,next:null},i=Mt.updateQueue,i===null&&(i=Gf(),Mt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,i.lastEffect=e),e}function tc(){return{destroy:void 0,resource:void 0}}function U0(){return Ce().memoizedState}function ec(e,i,s,l){var h=pn();l=l===void 0?null:l,Mt.flags|=e,h.memoizedState=Cs(1|i,tc(),s,l)}function rl(e,i,s,l){var h=Ce();l=l===void 0?null:l;var d=h.memoizedState.inst;Zt!==null&&l!==null&&$f(l,Zt.memoizedState.deps)?h.memoizedState=Cs(i,d,s,l):(Mt.flags|=e,h.memoizedState=Cs(1|i,d,s,l))}function P0(e,i){ec(8390656,8,e,i)}function L0(e,i){rl(2048,8,e,i)}function z0(e,i){return rl(4,2,e,i)}function B0(e,i){return rl(4,4,e,i)}function $0(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function F0(e,i,s){s=s!=null?s.concat([e]):null,rl(4,4,$0.bind(null,i,e),s)}function Jf(){}function q0(e,i){var s=Ce();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&$f(i,l[1])?l[0]:(s.memoizedState=[e,i],e)}function K0(e,i){var s=Ce();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&$f(i,l[1]))return l[0];if(l=e(),La){jn(!0);try{e()}finally{jn(!1)}}return s.memoizedState=[l,i],l}function td(e,i,s){return s===void 0||(Ir&1073741824)!==0?e.memoizedState=i:(e.memoizedState=s,e=Yy(),Mt.lanes|=e,kr|=e,s)}function H0(e,i,s,l){return En(s,i)?s:Ss.current!==null?(e=td(e,s,l),En(e,i)||(Be=!0),e):(Ir&42)===0?(Be=!0,e.memoizedState=s):(e=Yy(),Mt.lanes|=e,kr|=e,i)}function G0(e,i,s,l,h){var d=ct.p;ct.p=d!==0&&8>d?d:8;var E=Z.T,b={};Z.T=b,id(e,!1,i,s);try{var D=h(),q=Z.S;if(q!==null&&q(b,D),D!==null&&typeof D=="object"&&typeof D.then=="function"){var tt=bb(D,l);al(e,i,tt,An(e))}else al(e,i,l,An(e))}catch(rt){al(e,i,{then:function(){},status:"rejected",reason:rt},An())}finally{ct.p=d,Z.T=E}}function Rb(){}function ed(e,i,s,l){if(e.tag!==5)throw Error(a(476));var h=Y0(e).queue;G0(e,h,i,yt,s===null?Rb:function(){return Q0(e),s(l)})}function Y0(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:yt,baseState:yt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:yt},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Q0(e){var i=Y0(e).next.queue;al(e,i,{},An())}function nd(){return en(wl)}function X0(){return Ce().memoizedState}function W0(){return Ce().memoizedState}function Cb(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=An();e=Rr(s);var l=Cr(i,e,s);l!==null&&(Rn(l,i,s),Jo(l,i,s)),i={cache:Nf()},e.payload=i;return}i=i.return}}function Ib(e,i,s){var l=An();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},nc(e)?J0(i,s):(s=bf(e,i,s,l),s!==null&&(Rn(s,e,l),ty(s,i,l)))}function Z0(e,i,s){var l=An();al(e,i,s,l)}function al(e,i,s,l){var h={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(nc(e))J0(i,h);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var E=i.lastRenderedState,b=d(E,s);if(h.hasEagerState=!0,h.eagerState=b,En(b,E))return Lu(e,i,h,0),re===null&&Pu(),!1}catch{}finally{}if(s=bf(e,i,h,l),s!==null)return Rn(s,e,l),ty(s,i,l),!0}return!1}function id(e,i,s,l){if(l={lane:2,revertLane:Vd(),action:l,hasEagerState:!1,eagerState:null,next:null},nc(e)){if(i)throw Error(a(479))}else i=bf(e,s,l,2),i!==null&&Rn(i,e,2)}function nc(e){var i=e.alternate;return e===Mt||i!==null&&i===Mt}function J0(e,i){As=Xu=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function ty(e,i,s){if((s&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,pr(e,s)}}var ic={readContext:en,use:Zu,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useLayoutEffect:we,useInsertionEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useSyncExternalStore:we,useId:we,useHostTransitionStatus:we,useFormState:we,useActionState:we,useOptimistic:we,useMemoCache:we,useCacheRefresh:we},ey={readContext:en,use:Zu,useCallback:function(e,i){return pn().memoizedState=[e,i===void 0?null:i],e},useContext:en,useEffect:P0,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,ec(4194308,4,$0.bind(null,i,e),s)},useLayoutEffect:function(e,i){return ec(4194308,4,e,i)},useInsertionEffect:function(e,i){ec(4,2,e,i)},useMemo:function(e,i){var s=pn();i=i===void 0?null:i;var l=e();if(La){jn(!0);try{e()}finally{jn(!1)}}return s.memoizedState=[l,i],l},useReducer:function(e,i,s){var l=pn();if(s!==void 0){var h=s(i);if(La){jn(!0);try{s(i)}finally{jn(!1)}}}else h=i;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=Ib.bind(null,Mt,e),[l.memoizedState,e]},useRef:function(e){var i=pn();return e={current:e},i.memoizedState=e},useState:function(e){e=Wf(e);var i=e.queue,s=Z0.bind(null,Mt,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:Jf,useDeferredValue:function(e,i){var s=pn();return td(s,e,i)},useTransition:function(){var e=Wf(!1);return e=G0.bind(null,Mt,e.queue,!0,!1),pn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var l=Mt,h=pn();if(Kt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),re===null)throw Error(a(349));(zt&124)!==0||b0(l,i,s)}h.memoizedState=s;var d={value:s,getSnapshot:i};return h.queue=d,P0(T0.bind(null,l,d,e),[e]),l.flags|=2048,Cs(9,tc(),w0.bind(null,l,d,s,i),null),s},useId:function(){var e=pn(),i=re.identifierPrefix;if(Kt){var s=Bi,l=zi;s=(l&~(1<<32-ln(l)-1)).toString(32)+s,i="«"+i+"R"+s,s=Wu++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=wb++,i="«"+i+"r"+s.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:nd,useFormState:M0,useActionState:M0,useOptimistic:function(e){var i=pn();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=id.bind(null,Mt,!0,s),s.dispatch=i,[e,i]},useMemoCache:Yf,useCacheRefresh:function(){return pn().memoizedState=Cb.bind(null,Mt)}},ny={readContext:en,use:Zu,useCallback:q0,useContext:en,useEffect:L0,useImperativeHandle:F0,useInsertionEffect:z0,useLayoutEffect:B0,useMemo:K0,useReducer:Ju,useRef:U0,useState:function(){return Ju(qi)},useDebugValue:Jf,useDeferredValue:function(e,i){var s=Ce();return H0(s,Zt.memoizedState,e,i)},useTransition:function(){var e=Ju(qi)[0],i=Ce().memoizedState;return[typeof e=="boolean"?e:il(e),i]},useSyncExternalStore:E0,useId:X0,useHostTransitionStatus:nd,useFormState:O0,useActionState:O0,useOptimistic:function(e,i){var s=Ce();return R0(s,Zt,e,i)},useMemoCache:Yf,useCacheRefresh:W0},jb={readContext:en,use:Zu,useCallback:q0,useContext:en,useEffect:L0,useImperativeHandle:F0,useInsertionEffect:z0,useLayoutEffect:B0,useMemo:K0,useReducer:Xf,useRef:U0,useState:function(){return Xf(qi)},useDebugValue:Jf,useDeferredValue:function(e,i){var s=Ce();return Zt===null?td(s,e,i):H0(s,Zt.memoizedState,e,i)},useTransition:function(){var e=Xf(qi)[0],i=Ce().memoizedState;return[typeof e=="boolean"?e:il(e),i]},useSyncExternalStore:E0,useId:X0,useHostTransitionStatus:nd,useFormState:k0,useActionState:k0,useOptimistic:function(e,i){var s=Ce();return Zt!==null?R0(s,Zt,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:Yf,useCacheRefresh:W0},Is=null,sl=0;function rc(e){var i=sl;return sl+=1,Is===null&&(Is=[]),d0(Is,e,i)}function ol(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function ac(e,i){throw i.$$typeof===w?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function iy(e){var i=e._init;return i(e._payload)}function ry(e){function i(L,U){if(e){var $=L.deletions;$===null?(L.deletions=[U],L.flags|=16):$.push(U)}}function s(L,U){if(!e)return null;for(;U!==null;)i(L,U),U=U.sibling;return null}function l(L){for(var U=new Map;L!==null;)L.key!==null?U.set(L.key,L):U.set(L.index,L),L=L.sibling;return U}function h(L,U){return L=Li(L,U),L.index=0,L.sibling=null,L}function d(L,U,$){return L.index=$,e?($=L.alternate,$!==null?($=$.index,$<U?(L.flags|=67108866,U):$):(L.flags|=67108866,U)):(L.flags|=1048576,U)}function E(L){return e&&L.alternate===null&&(L.flags|=67108866),L}function b(L,U,$,et){return U===null||U.tag!==6?(U=Tf($,L.mode,et),U.return=L,U):(U=h(U,$),U.return=L,U)}function D(L,U,$,et){var mt=$.type;return mt===O?tt(L,U,$.props.children,et,$.key):U!==null&&(U.elementType===mt||typeof mt=="object"&&mt!==null&&mt.$$typeof===C&&iy(mt)===U.type)?(U=h(U,$.props),ol(U,$),U.return=L,U):(U=Bu($.type,$.key,$.props,null,L.mode,et),ol(U,$),U.return=L,U)}function q(L,U,$,et){return U===null||U.tag!==4||U.stateNode.containerInfo!==$.containerInfo||U.stateNode.implementation!==$.implementation?(U=Sf($,L.mode,et),U.return=L,U):(U=h(U,$.children||[]),U.return=L,U)}function tt(L,U,$,et,mt){return U===null||U.tag!==7?(U=Da($,L.mode,et,mt),U.return=L,U):(U=h(U,$),U.return=L,U)}function rt(L,U,$){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return U=Tf(""+U,L.mode,$),U.return=L,U;if(typeof U=="object"&&U!==null){switch(U.$$typeof){case S:return $=Bu(U.type,U.key,U.props,null,L.mode,$),ol($,U),$.return=L,$;case R:return U=Sf(U,L.mode,$),U.return=L,U;case C:var et=U._init;return U=et(U._payload),rt(L,U,$)}if(ne(U)||z(U))return U=Da(U,L.mode,$,null),U.return=L,U;if(typeof U.then=="function")return rt(L,rc(U),$);if(U.$$typeof===it)return rt(L,Ku(L,U),$);ac(L,U)}return null}function H(L,U,$,et){var mt=U!==null?U.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return mt!==null?null:b(L,U,""+$,et);if(typeof $=="object"&&$!==null){switch($.$$typeof){case S:return $.key===mt?D(L,U,$,et):null;case R:return $.key===mt?q(L,U,$,et):null;case C:return mt=$._init,$=mt($._payload),H(L,U,$,et)}if(ne($)||z($))return mt!==null?null:tt(L,U,$,et,null);if(typeof $.then=="function")return H(L,U,rc($),et);if($.$$typeof===it)return H(L,U,Ku(L,$),et);ac(L,$)}return null}function Y(L,U,$,et,mt){if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return L=L.get($)||null,b(U,L,""+et,mt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case S:return L=L.get(et.key===null?$:et.key)||null,D(U,L,et,mt);case R:return L=L.get(et.key===null?$:et.key)||null,q(U,L,et,mt);case C:var Ot=et._init;return et=Ot(et._payload),Y(L,U,$,et,mt)}if(ne(et)||z(et))return L=L.get($)||null,tt(U,L,et,mt,null);if(typeof et.then=="function")return Y(L,U,$,rc(et),mt);if(et.$$typeof===it)return Y(L,U,$,Ku(U,et),mt);ac(U,et)}return null}function Tt(L,U,$,et){for(var mt=null,Ot=null,xt=U,bt=U=0,Fe=null;xt!==null&&bt<$.length;bt++){xt.index>bt?(Fe=xt,xt=null):Fe=xt.sibling;var Ft=H(L,xt,$[bt],et);if(Ft===null){xt===null&&(xt=Fe);break}e&&xt&&Ft.alternate===null&&i(L,xt),U=d(Ft,U,bt),Ot===null?mt=Ft:Ot.sibling=Ft,Ot=Ft,xt=Fe}if(bt===$.length)return s(L,xt),Kt&&Ma(L,bt),mt;if(xt===null){for(;bt<$.length;bt++)xt=rt(L,$[bt],et),xt!==null&&(U=d(xt,U,bt),Ot===null?mt=xt:Ot.sibling=xt,Ot=xt);return Kt&&Ma(L,bt),mt}for(xt=l(xt);bt<$.length;bt++)Fe=Y(xt,L,bt,$[bt],et),Fe!==null&&(e&&Fe.alternate!==null&&xt.delete(Fe.key===null?bt:Fe.key),U=d(Fe,U,bt),Ot===null?mt=Fe:Ot.sibling=Fe,Ot=Fe);return e&&xt.forEach(function(Kr){return i(L,Kr)}),Kt&&Ma(L,bt),mt}function Et(L,U,$,et){if($==null)throw Error(a(151));for(var mt=null,Ot=null,xt=U,bt=U=0,Fe=null,Ft=$.next();xt!==null&&!Ft.done;bt++,Ft=$.next()){xt.index>bt?(Fe=xt,xt=null):Fe=xt.sibling;var Kr=H(L,xt,Ft.value,et);if(Kr===null){xt===null&&(xt=Fe);break}e&&xt&&Kr.alternate===null&&i(L,xt),U=d(Kr,U,bt),Ot===null?mt=Kr:Ot.sibling=Kr,Ot=Kr,xt=Fe}if(Ft.done)return s(L,xt),Kt&&Ma(L,bt),mt;if(xt===null){for(;!Ft.done;bt++,Ft=$.next())Ft=rt(L,Ft.value,et),Ft!==null&&(U=d(Ft,U,bt),Ot===null?mt=Ft:Ot.sibling=Ft,Ot=Ft);return Kt&&Ma(L,bt),mt}for(xt=l(xt);!Ft.done;bt++,Ft=$.next())Ft=Y(xt,L,bt,Ft.value,et),Ft!==null&&(e&&Ft.alternate!==null&&xt.delete(Ft.key===null?bt:Ft.key),U=d(Ft,U,bt),Ot===null?mt=Ft:Ot.sibling=Ft,Ot=Ft);return e&&xt.forEach(function(Dw){return i(L,Dw)}),Kt&&Ma(L,bt),mt}function te(L,U,$,et){if(typeof $=="object"&&$!==null&&$.type===O&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case S:t:{for(var mt=$.key;U!==null;){if(U.key===mt){if(mt=$.type,mt===O){if(U.tag===7){s(L,U.sibling),et=h(U,$.props.children),et.return=L,L=et;break t}}else if(U.elementType===mt||typeof mt=="object"&&mt!==null&&mt.$$typeof===C&&iy(mt)===U.type){s(L,U.sibling),et=h(U,$.props),ol(et,$),et.return=L,L=et;break t}s(L,U);break}else i(L,U);U=U.sibling}$.type===O?(et=Da($.props.children,L.mode,et,$.key),et.return=L,L=et):(et=Bu($.type,$.key,$.props,null,L.mode,et),ol(et,$),et.return=L,L=et)}return E(L);case R:t:{for(mt=$.key;U!==null;){if(U.key===mt)if(U.tag===4&&U.stateNode.containerInfo===$.containerInfo&&U.stateNode.implementation===$.implementation){s(L,U.sibling),et=h(U,$.children||[]),et.return=L,L=et;break t}else{s(L,U);break}else i(L,U);U=U.sibling}et=Sf($,L.mode,et),et.return=L,L=et}return E(L);case C:return mt=$._init,$=mt($._payload),te(L,U,$,et)}if(ne($))return Tt(L,U,$,et);if(z($)){if(mt=z($),typeof mt!="function")throw Error(a(150));return $=mt.call($),Et(L,U,$,et)}if(typeof $.then=="function")return te(L,U,rc($),et);if($.$$typeof===it)return te(L,U,Ku(L,$),et);ac(L,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,U!==null&&U.tag===6?(s(L,U.sibling),et=h(U,$),et.return=L,L=et):(s(L,U),et=Tf($,L.mode,et),et.return=L,L=et),E(L)):s(L,U)}return function(L,U,$,et){try{sl=0;var mt=te(L,U,$,et);return Is=null,mt}catch(xt){if(xt===Wo||xt===Gu)throw xt;var Ot=bn(29,xt,null,L.mode);return Ot.lanes=et,Ot.return=L,Ot}finally{}}}var js=ry(!0),ay=ry(!1),Ln=at(null),gi=null;function jr(e){var i=e.alternate;ut(Ue,Ue.current&1),ut(Ln,e),gi===null&&(i===null||Ss.current!==null||i.memoizedState!==null)&&(gi=e)}function sy(e){if(e.tag===22){if(ut(Ue,Ue.current),ut(Ln,e),gi===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(gi=e)}}else Dr()}function Dr(){ut(Ue,Ue.current),ut(Ln,Ln.current)}function Ki(e){lt(Ln),gi===e&&(gi=null),lt(Ue)}var Ue=at(0);function sc(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||Gd(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function rd(e,i,s,l){i=e.memoizedState,s=s(l,i),s=s==null?i:v({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var ad={enqueueSetState:function(e,i,s){e=e._reactInternals;var l=An(),h=Rr(l);h.payload=i,s!=null&&(h.callback=s),i=Cr(e,h,l),i!==null&&(Rn(i,e,l),Jo(i,e,l))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var l=An(),h=Rr(l);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=Cr(e,h,l),i!==null&&(Rn(i,e,l),Jo(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=An(),l=Rr(s);l.tag=2,i!=null&&(l.callback=i),i=Cr(e,l,s),i!==null&&(Rn(i,e,s),Jo(i,e,s))}};function oy(e,i,s,l,h,d,E){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,E):i.prototype&&i.prototype.isPureReactComponent?!Fo(s,l)||!Fo(h,d):!0}function ly(e,i,s,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==e&&ad.enqueueReplaceState(i,i.state,null)}function za(e,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(e=e.defaultProps){s===i&&(s=v({},s));for(var h in e)s[h]===void 0&&(s[h]=e[h])}return s}var oc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function uy(e){oc(e)}function cy(e){console.error(e)}function hy(e){oc(e)}function lc(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function fy(e,i,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function sd(e,i,s){return s=Rr(s),s.tag=3,s.payload={element:null},s.callback=function(){lc(e,i)},s}function dy(e){return e=Rr(e),e.tag=3,e}function py(e,i,s,l){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;e.payload=function(){return h(d)},e.callback=function(){fy(i,s,l)}}var E=s.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(e.callback=function(){fy(i,s,l),typeof h!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var b=l.stack;this.componentDidCatch(l.value,{componentStack:b!==null?b:""})})}function Db(e,i,s,l,h){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&Yo(i,s,h,!0),s=Ln.current,s!==null){switch(s.tag){case 13:return gi===null?jd():s.alternate===null&&xe===0&&(xe=3),s.flags&=-257,s.flags|=65536,s.lanes=h,l===Vf?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Nd(e,l,h)),!1;case 22:return s.flags|=65536,l===Vf?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Nd(e,l,h)),!1}throw Error(a(435,s.tag))}return Nd(e,l,h),jd(),!1}if(Kt)return i=Ln.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==Cf&&(e=Error(a(422),{cause:l}),Go(Vn(e,s)))):(l!==Cf&&(i=Error(a(423),{cause:l}),Go(Vn(i,s))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=Vn(l,s),h=sd(e.stateNode,l,h),Pf(e,h),xe!==4&&(xe=2)),!1;var d=Error(a(520),{cause:l});if(d=Vn(d,s),pl===null?pl=[d]:pl.push(d),xe!==4&&(xe=2),i===null)return!0;l=Vn(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=h&-h,s.lanes|=e,e=sd(s.stateNode,l,e),Pf(s,e),!1;case 1:if(i=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ur===null||!Ur.has(d))))return s.flags|=65536,h&=-h,s.lanes|=h,h=dy(h),py(h,e,s,l),Pf(s,h),!1}s=s.return}while(s!==null);return!1}var my=Error(a(461)),Be=!1;function Ge(e,i,s,l){i.child=e===null?ay(i,null,s,l):js(i,e.child,s,l)}function gy(e,i,s,l,h){s=s.render;var d=i.ref;if("ref"in l){var E={};for(var b in l)b!=="ref"&&(E[b]=l[b])}else E=l;return Ua(i),l=Ff(e,i,s,E,d,h),b=qf(),e!==null&&!Be?(Kf(e,i,h),Hi(e,i,h)):(Kt&&b&&Af(i),i.flags|=1,Ge(e,i,l,h),i.child)}function yy(e,i,s,l,h){if(e===null){var d=s.type;return typeof d=="function"&&!wf(d)&&d.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=d,xy(e,i,d,l,h)):(e=Bu(s.type,null,l,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!pd(e,h)){var E=d.memoizedProps;if(s=s.compare,s=s!==null?s:Fo,s(E,l)&&e.ref===i.ref)return Hi(e,i,h)}return i.flags|=1,e=Li(d,l),e.ref=i.ref,e.return=i,i.child=e}function xy(e,i,s,l,h){if(e!==null){var d=e.memoizedProps;if(Fo(d,l)&&e.ref===i.ref)if(Be=!1,i.pendingProps=l=d,pd(e,h))(e.flags&131072)!==0&&(Be=!0);else return i.lanes=e.lanes,Hi(e,i,h)}return od(e,i,s,l,h)}function vy(e,i,s){var l=i.pendingProps,h=l.children,d=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|s:s,e!==null){for(h=i.child=e.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return _y(e,i,l,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Hu(i,d!==null?d.cachePool:null),d!==null?x0(i,d):zf(),sy(i);else return i.lanes=i.childLanes=536870912,_y(e,i,d!==null?d.baseLanes|s:s,s)}else d!==null?(Hu(i,d.cachePool),x0(i,d),Dr(),i.memoizedState=null):(e!==null&&Hu(i,null),zf(),Dr());return Ge(e,i,h,s),i.child}function _y(e,i,s,l){var h=Of();return h=h===null?null:{parent:ke._currentValue,pool:h},i.memoizedState={baseLanes:s,cachePool:h},e!==null&&Hu(i,null),zf(),sy(i),e!==null&&Yo(e,i,l,!0),null}function uc(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function od(e,i,s,l,h){return Ua(i),s=Ff(e,i,s,l,void 0,h),l=qf(),e!==null&&!Be?(Kf(e,i,h),Hi(e,i,h)):(Kt&&l&&Af(i),i.flags|=1,Ge(e,i,s,h),i.child)}function Ey(e,i,s,l,h,d){return Ua(i),i.updateQueue=null,s=_0(i,l,s,h),v0(e),l=qf(),e!==null&&!Be?(Kf(e,i,d),Hi(e,i,d)):(Kt&&l&&Af(i),i.flags|=1,Ge(e,i,s,d),i.child)}function by(e,i,s,l,h){if(Ua(i),i.stateNode===null){var d=_s,E=s.contextType;typeof E=="object"&&E!==null&&(d=en(E)),d=new s(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=ad,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},kf(i),E=s.contextType,d.context=typeof E=="object"&&E!==null?en(E):_s,d.state=i.memoizedState,E=s.getDerivedStateFromProps,typeof E=="function"&&(rd(i,s,E,l),d.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(E=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),E!==d.state&&ad.enqueueReplaceState(d,d.state,null),el(i,l,d,h),tl(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var b=i.memoizedProps,D=za(s,b);d.props=D;var q=d.context,tt=s.contextType;E=_s,typeof tt=="object"&&tt!==null&&(E=en(tt));var rt=s.getDerivedStateFromProps;tt=typeof rt=="function"||typeof d.getSnapshotBeforeUpdate=="function",b=i.pendingProps!==b,tt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b||q!==E)&&ly(i,d,l,E),Ar=!1;var H=i.memoizedState;d.state=H,el(i,l,d,h),tl(),q=i.memoizedState,b||H!==q||Ar?(typeof rt=="function"&&(rd(i,s,rt,l),q=i.memoizedState),(D=Ar||oy(i,s,D,l,H,q,E))?(tt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=q),d.props=l,d.state=q,d.context=E,l=D):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Uf(e,i),E=i.memoizedProps,tt=za(s,E),d.props=tt,rt=i.pendingProps,H=d.context,q=s.contextType,D=_s,typeof q=="object"&&q!==null&&(D=en(q)),b=s.getDerivedStateFromProps,(q=typeof b=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E!==rt||H!==D)&&ly(i,d,l,D),Ar=!1,H=i.memoizedState,d.state=H,el(i,l,d,h),tl();var Y=i.memoizedState;E!==rt||H!==Y||Ar||e!==null&&e.dependencies!==null&&qu(e.dependencies)?(typeof b=="function"&&(rd(i,s,b,l),Y=i.memoizedState),(tt=Ar||oy(i,s,tt,l,H,Y,D)||e!==null&&e.dependencies!==null&&qu(e.dependencies))?(q||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,Y,D),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,Y,D)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||E===e.memoizedProps&&H===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&H===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Y),d.props=l,d.state=Y,d.context=D,l=tt):(typeof d.componentDidUpdate!="function"||E===e.memoizedProps&&H===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&H===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,uc(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=js(i,e.child,null,h),i.child=js(i,null,s,h)):Ge(e,i,s,h),i.memoizedState=d.state,e=i.child):e=Hi(e,i,h),e}function wy(e,i,s,l){return Ho(),i.flags|=256,Ge(e,i,s,l),i.child}var ld={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ud(e){return{baseLanes:e,cachePool:c0()}}function cd(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=zn),e}function Ty(e,i,s){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,E;if((E=d)||(E=e!==null&&e.memoizedState===null?!1:(Ue.current&2)!==0),E&&(h=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,e===null){if(Kt){if(h?jr(i):Dr(),Kt){var b=ye,D;if(D=b){t:{for(D=b,b=mi;D.nodeType!==8;){if(!b){b=null;break t}if(D=ei(D.nextSibling),D===null){b=null;break t}}b=D}b!==null?(i.memoizedState={dehydrated:b,treeContext:Na!==null?{id:zi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},D=bn(18,null,null,0),D.stateNode=b,D.return=i,i.child=D,fn=i,ye=null,D=!0):D=!1}D||Va(i)}if(b=i.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Gd(b)?i.lanes=32:i.lanes=536870912,null;Ki(i)}return b=l.children,l=l.fallback,h?(Dr(),h=i.mode,b=cc({mode:"hidden",children:b},h),l=Da(l,h,s,null),b.return=i,l.return=i,b.sibling=l,i.child=b,h=i.child,h.memoizedState=ud(s),h.childLanes=cd(e,E,s),i.memoizedState=ld,l):(jr(i),hd(i,b))}if(D=e.memoizedState,D!==null&&(b=D.dehydrated,b!==null)){if(d)i.flags&256?(jr(i),i.flags&=-257,i=fd(e,i,s)):i.memoizedState!==null?(Dr(),i.child=e.child,i.flags|=128,i=null):(Dr(),h=l.fallback,b=i.mode,l=cc({mode:"visible",children:l.children},b),h=Da(h,b,s,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,js(i,e.child,null,s),l=i.child,l.memoizedState=ud(s),l.childLanes=cd(e,E,s),i.memoizedState=ld,i=h);else if(jr(i),Gd(b)){if(E=b.nextSibling&&b.nextSibling.dataset,E)var q=E.dgst;E=q,l=Error(a(419)),l.stack="",l.digest=E,Go({value:l,source:null,stack:null}),i=fd(e,i,s)}else if(Be||Yo(e,i,s,!1),E=(s&e.childLanes)!==0,Be||E){if(E=re,E!==null&&(l=s&-s,l=(l&42)!==0?1:Ao(l),l=(l&(E.suspendedLanes|s))!==0?0:l,l!==0&&l!==D.retryLane))throw D.retryLane=l,vs(e,l),Rn(E,e,l),my;b.data==="$?"||jd(),i=fd(e,i,s)}else b.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=D.treeContext,ye=ei(b.nextSibling),fn=i,Kt=!0,Oa=null,mi=!1,e!==null&&(Un[Pn++]=zi,Un[Pn++]=Bi,Un[Pn++]=Na,zi=e.id,Bi=e.overflow,Na=i),i=hd(i,l.children),i.flags|=4096);return i}return h?(Dr(),h=l.fallback,b=i.mode,D=e.child,q=D.sibling,l=Li(D,{mode:"hidden",children:l.children}),l.subtreeFlags=D.subtreeFlags&65011712,q!==null?h=Li(q,h):(h=Da(h,b,s,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,b=e.child.memoizedState,b===null?b=ud(s):(D=b.cachePool,D!==null?(q=ke._currentValue,D=D.parent!==q?{parent:q,pool:q}:D):D=c0(),b={baseLanes:b.baseLanes|s,cachePool:D}),h.memoizedState=b,h.childLanes=cd(e,E,s),i.memoizedState=ld,l):(jr(i),s=e.child,e=s.sibling,s=Li(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,e!==null&&(E=i.deletions,E===null?(i.deletions=[e],i.flags|=16):E.push(e)),i.child=s,i.memoizedState=null,s)}function hd(e,i){return i=cc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function cc(e,i){return e=bn(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function fd(e,i,s){return js(i,e.child,null,s),e=hd(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Sy(e,i,s){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),jf(e.return,i,s)}function dd(e,i,s,l,h){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=s,d.tailMode=h)}function Ay(e,i,s){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if(Ge(e,i,l.children,s),l=Ue.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sy(e,s,i);else if(e.tag===19)Sy(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(ut(Ue,l),h){case"forwards":for(s=i.child,h=null;s!==null;)e=s.alternate,e!==null&&sc(e)===null&&(h=s),s=s.sibling;s=h,s===null?(h=i.child,i.child=null):(h=s.sibling,s.sibling=null),dd(i,!1,h,s,d);break;case"backwards":for(s=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&sc(e)===null){i.child=h;break}e=h.sibling,h.sibling=s,s=h,h=e}dd(i,!0,s,null,d);break;case"together":dd(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Hi(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),kr|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(Yo(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=Li(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=Li(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function pd(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&qu(e)))}function Nb(e,i,s){switch(i.tag){case 3:Lt(i,i.stateNode.containerInfo),Sr(i,ke,e.memoizedState.cache),Ho();break;case 27:case 5:ji(i);break;case 4:Lt(i,i.stateNode.containerInfo);break;case 10:Sr(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(jr(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Ty(e,i,s):(jr(i),e=Hi(e,i,s),e!==null?e.sibling:null);jr(i);break;case 19:var h=(e.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(Yo(e,i,s,!1),l=(s&i.childLanes)!==0),h){if(l)return Ay(e,i,s);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),ut(Ue,Ue.current),l)break;return null;case 22:case 23:return i.lanes=0,vy(e,i,s);case 24:Sr(i,ke,e.memoizedState.cache)}return Hi(e,i,s)}function Ry(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)Be=!0;else{if(!pd(e,s)&&(i.flags&128)===0)return Be=!1,Nb(e,i,s);Be=(e.flags&131072)!==0}else Be=!1,Kt&&(i.flags&1048576)!==0&&i0(i,Fu,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")wf(l)?(e=za(l,e),i.tag=1,i=by(null,i,l,e,s)):(i.tag=0,i=od(null,i,l,e,s));else{if(l!=null){if(h=l.$$typeof,h===ht){i.tag=11,i=gy(null,i,l,e,s);break t}else if(h===j){i.tag=14,i=yy(null,i,l,e,s);break t}}throw i=ue(l)||l,Error(a(306,i,""))}}return i;case 0:return od(e,i,i.type,i.pendingProps,s);case 1:return l=i.type,h=za(l,i.pendingProps),by(e,i,l,h,s);case 3:t:{if(Lt(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var d=i.memoizedState;h=d.element,Uf(e,i),el(i,l,null,s);var E=i.memoizedState;if(l=E.cache,Sr(i,ke,l),l!==d.cache&&Df(i,[ke],s,!0),tl(),l=E.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=wy(e,i,l,s);break t}else if(l!==h){h=Vn(Error(a(424)),i),Go(h),i=wy(e,i,l,s);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ye=ei(e.firstChild),fn=i,Kt=!0,Oa=null,mi=!0,s=ay(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Ho(),l===h){i=Hi(e,i,s);break t}Ge(e,i,l,s)}i=i.child}return i;case 26:return uc(e,i),e===null?(s=D1(i.type,null,i.pendingProps,null))?i.memoizedState=s:Kt||(s=i.type,e=i.pendingProps,l=Tc(_t.current).createElement(s),l[_e]=i,l[He]=e,Qe(l,s,e),Ee(l),i.stateNode=l):i.memoizedState=D1(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return ji(i),e===null&&Kt&&(l=i.stateNode=C1(i.type,i.pendingProps,_t.current),fn=i,mi=!0,h=ye,zr(i.type)?(Yd=h,ye=ei(l.firstChild)):ye=h),Ge(e,i,i.pendingProps.children,s),uc(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Kt&&((h=l=ye)&&(l=sw(l,i.type,i.pendingProps,mi),l!==null?(i.stateNode=l,fn=i,ye=ei(l.firstChild),mi=!1,h=!0):h=!1),h||Va(i)),ji(i),h=i.type,d=i.pendingProps,E=e!==null?e.memoizedProps:null,l=d.children,qd(h,d)?l=null:E!==null&&qd(h,E)&&(i.flags|=32),i.memoizedState!==null&&(h=Ff(e,i,Tb,null,null,s),wl._currentValue=h),uc(e,i),Ge(e,i,l,s),i.child;case 6:return e===null&&Kt&&((e=s=ye)&&(s=ow(s,i.pendingProps,mi),s!==null?(i.stateNode=s,fn=i,ye=null,e=!0):e=!1),e||Va(i)),null;case 13:return Ty(e,i,s);case 4:return Lt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=js(i,null,l,s):Ge(e,i,l,s),i.child;case 11:return gy(e,i,i.type,i.pendingProps,s);case 7:return Ge(e,i,i.pendingProps,s),i.child;case 8:return Ge(e,i,i.pendingProps.children,s),i.child;case 12:return Ge(e,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Sr(i,i.type,l.value),Ge(e,i,l.children,s),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Ua(i),h=en(h),l=l(h),i.flags|=1,Ge(e,i,l,s),i.child;case 14:return yy(e,i,i.type,i.pendingProps,s);case 15:return xy(e,i,i.type,i.pendingProps,s);case 19:return Ay(e,i,s);case 31:return l=i.pendingProps,s=i.mode,l={mode:l.mode,children:l.children},e===null?(s=cc(l,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=Li(e.child,l),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return vy(e,i,s);case 24:return Ua(i),l=en(ke),e===null?(h=Of(),h===null&&(h=re,d=Nf(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=s),h=d),i.memoizedState={parent:l,cache:h},kf(i),Sr(i,ke,h)):((e.lanes&s)!==0&&(Uf(e,i),el(i,null,null,s),tl()),h=e.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),Sr(i,ke,l)):(l=d.cache,Sr(i,ke,l),l!==h.cache&&Df(i,[ke],s,!0))),Ge(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Gi(e){e.flags|=4}function Cy(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!k1(i)){if(i=Ln.current,i!==null&&((zt&4194048)===zt?gi!==null:(zt&62914560)!==zt&&(zt&536870912)===0||i!==gi))throw Zo=Vf,h0;e.flags|=8192}}function hc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?fr():536870912,e.lanes|=i,Os|=i)}function ll(e,i){if(!Kt)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function de(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(i)for(var h=e.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=s,i}function Mb(e,i,s){var l=i.pendingProps;switch(Rf(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(i),null;case 1:return de(i),null;case 3:return s=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Fi(ke),Me(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Ko(i)?Gi(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,s0())),de(i),null;case 26:return s=i.memoizedState,e===null?(Gi(i),s!==null?(de(i),Cy(i,s)):(de(i),i.flags&=-16777217)):s?s!==e.memoizedState?(Gi(i),de(i),Cy(i,s)):(de(i),i.flags&=-16777217):(e.memoizedProps!==l&&Gi(i),de(i),i.flags&=-16777217),null;case 27:Kn(i),s=_t.current;var h=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Gi(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return de(i),null}e=gt.current,Ko(i)?r0(i):(e=C1(h,l,s),i.stateNode=e,Gi(i))}return de(i),null;case 5:if(Kn(i),s=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Gi(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return de(i),null}if(e=gt.current,Ko(i))r0(i);else{switch(h=Tc(_t.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?h.createElement(s,{is:l.is}):h.createElement(s)}}e[_e]=i,e[He]=l;t:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break t;for(;h.sibling===null;){if(h.return===null||h.return===i)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=e;t:switch(Qe(e,s,l),s){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Gi(i)}}return de(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&Gi(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=_t.current,Ko(i)){if(e=i.stateNode,s=i.memoizedProps,l=null,h=fn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[_e]=i,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||E1(e.nodeValue,s)),e||Va(i)}else e=Tc(e).createTextNode(l),e[_e]=i,i.stateNode=e}return de(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Ko(i),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[_e]=i}else Ho(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;de(i),h=!1}else h=s0(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(Ki(i),i):(Ki(i),null)}if(Ki(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=l!==null,e=e!==null&&e.memoizedState!==null,s){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return s!==e&&s&&(i.child.flags|=8192),hc(i,i.updateQueue),de(i),null;case 4:return Me(),e===null&&Ld(i.stateNode.containerInfo),de(i),null;case 10:return Fi(i.type),de(i),null;case 19:if(lt(Ue),h=i.memoizedState,h===null)return de(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)ll(h,!1);else{if(xe!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=sc(e),d!==null){for(i.flags|=128,ll(h,!1),e=d.updateQueue,i.updateQueue=e,hc(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)n0(s,e),s=s.sibling;return ut(Ue,Ue.current&1|2),i.child}e=e.sibling}h.tail!==null&&dn()>pc&&(i.flags|=128,l=!0,ll(h,!1),i.lanes=4194304)}else{if(!l)if(e=sc(d),e!==null){if(i.flags|=128,l=!0,e=e.updateQueue,i.updateQueue=e,hc(i,e),ll(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!Kt)return de(i),null}else 2*dn()-h.renderingStartTime>pc&&s!==536870912&&(i.flags|=128,l=!0,ll(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(e=h.last,e!==null?e.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=dn(),i.sibling=null,e=Ue.current,ut(Ue,l?e&1|2:e&1),i):(de(i),null);case 22:case 23:return Ki(i),Bf(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(de(i),i.subtreeFlags&6&&(i.flags|=8192)):de(i),s=i.updateQueue,s!==null&&hc(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),e!==null&&lt(Pa),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Fi(ke),de(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function Ob(e,i){switch(Rf(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Fi(ke),Me(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Kn(i),null;case 13:if(Ki(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Ho()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return lt(Ue),null;case 4:return Me(),null;case 10:return Fi(i.type),null;case 22:case 23:return Ki(i),Bf(),e!==null&&lt(Pa),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Fi(ke),null;case 25:return null;default:return null}}function Iy(e,i){switch(Rf(i),i.tag){case 3:Fi(ke),Me();break;case 26:case 27:case 5:Kn(i);break;case 4:Me();break;case 13:Ki(i);break;case 19:lt(Ue);break;case 10:Fi(i.type);break;case 22:case 23:Ki(i),Bf(),e!==null&&lt(Pa);break;case 24:Fi(ke)}}function ul(e,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var h=l.next;s=h;do{if((s.tag&e)===e){l=void 0;var d=s.create,E=s.inst;l=d(),E.destroy=l}s=s.next}while(s!==h)}}catch(b){ee(i,i.return,b)}}function Nr(e,i,s){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&e)===e){var E=l.inst,b=E.destroy;if(b!==void 0){E.destroy=void 0,h=i;var D=s,q=b;try{q()}catch(tt){ee(h,D,tt)}}}l=l.next}while(l!==d)}}catch(tt){ee(i,i.return,tt)}}function jy(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{y0(i,s)}catch(l){ee(e,e.return,l)}}}function Dy(e,i,s){s.props=za(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){ee(e,i,l)}}function cl(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(h){ee(e,i,h)}}function yi(e,i){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(h){ee(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){ee(e,i,h)}else s.current=null}function Ny(e){var i=e.type,s=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(h){ee(e,e.return,h)}}function md(e,i,s){try{var l=e.stateNode;ew(l,e.type,s,i),l[He]=i}catch(h){ee(e,e.return,h)}}function My(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&zr(e.type)||e.tag===4}function gd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||My(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&zr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yd(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=wc));else if(l!==4&&(l===27&&zr(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(yd(e,i,s),e=e.sibling;e!==null;)yd(e,i,s),e=e.sibling}function fc(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(l!==4&&(l===27&&zr(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(fc(e,i,s),e=e.sibling;e!==null;)fc(e,i,s),e=e.sibling}function Oy(e){var i=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Qe(i,l,s),i[_e]=e,i[He]=s}catch(d){ee(e,e.return,d)}}var Yi=!1,Te=!1,xd=!1,Vy=typeof WeakSet=="function"?WeakSet:Set,$e=null;function Vb(e,i){if(e=e.containerInfo,$d=jc,e=Hg(e),gf(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break t}var E=0,b=-1,D=-1,q=0,tt=0,rt=e,H=null;e:for(;;){for(var Y;rt!==s||h!==0&&rt.nodeType!==3||(b=E+h),rt!==d||l!==0&&rt.nodeType!==3||(D=E+l),rt.nodeType===3&&(E+=rt.nodeValue.length),(Y=rt.firstChild)!==null;)H=rt,rt=Y;for(;;){if(rt===e)break e;if(H===s&&++q===h&&(b=E),H===d&&++tt===l&&(D=E),(Y=rt.nextSibling)!==null)break;rt=H,H=rt.parentNode}rt=Y}s=b===-1||D===-1?null:{start:b,end:D}}else s=null}s=s||{start:0,end:0}}else s=null;for(Fd={focusedElem:e,selectionRange:s},jc=!1,$e=i;$e!==null;)if(i=$e,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,$e=e;else for(;$e!==null;){switch(i=$e,d=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,s=i,h=d.memoizedProps,d=d.memoizedState,l=s.stateNode;try{var Tt=za(s.type,h,s.elementType===s.type);e=l.getSnapshotBeforeUpdate(Tt,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(Et){ee(s,s.return,Et)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)Hd(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Hd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,$e=e;break}$e=i.return}}function ky(e,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Mr(e,s),l&4&&ul(5,s);break;case 1:if(Mr(e,s),l&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(E){ee(s,s.return,E)}else{var h=za(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(E){ee(s,s.return,E)}}l&64&&jy(s),l&512&&cl(s,s.return);break;case 3:if(Mr(e,s),l&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{y0(e,i)}catch(E){ee(s,s.return,E)}}break;case 27:i===null&&l&4&&Oy(s);case 26:case 5:Mr(e,s),i===null&&l&4&&Ny(s),l&512&&cl(s,s.return);break;case 12:Mr(e,s);break;case 13:Mr(e,s),l&4&&Ly(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=qb.bind(null,s),lw(e,s))));break;case 22:if(l=s.memoizedState!==null||Yi,!l){i=i!==null&&i.memoizedState!==null||Te,h=Yi;var d=Te;Yi=l,(Te=i)&&!d?Or(e,s,(s.subtreeFlags&8772)!==0):Mr(e,s),Yi=h,Te=d}break;case 30:break;default:Mr(e,s)}}function Uy(e){var i=e.alternate;i!==null&&(e.alternate=null,Uy(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&rs(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ce=null,mn=!1;function Qi(e,i,s){for(s=s.child;s!==null;)Py(e,i,s),s=s.sibling}function Py(e,i,s){if(Je&&typeof Je.onCommitFiberUnmount=="function")try{Je.onCommitFiberUnmount(ur,s)}catch{}switch(s.tag){case 26:Te||yi(s,i),Qi(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Te||yi(s,i);var l=ce,h=mn;zr(s.type)&&(ce=s.stateNode,mn=!1),Qi(e,i,s),vl(s.stateNode),ce=l,mn=h;break;case 5:Te||yi(s,i);case 6:if(l=ce,h=mn,ce=null,Qi(e,i,s),ce=l,mn=h,ce!==null)if(mn)try{(ce.nodeType===9?ce.body:ce.nodeName==="HTML"?ce.ownerDocument.body:ce).removeChild(s.stateNode)}catch(d){ee(s,i,d)}else try{ce.removeChild(s.stateNode)}catch(d){ee(s,i,d)}break;case 18:ce!==null&&(mn?(e=ce,A1(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Rl(e)):A1(ce,s.stateNode));break;case 4:l=ce,h=mn,ce=s.stateNode.containerInfo,mn=!0,Qi(e,i,s),ce=l,mn=h;break;case 0:case 11:case 14:case 15:Te||Nr(2,s,i),Te||Nr(4,s,i),Qi(e,i,s);break;case 1:Te||(yi(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Dy(s,i,l)),Qi(e,i,s);break;case 21:Qi(e,i,s);break;case 22:Te=(l=Te)||s.memoizedState!==null,Qi(e,i,s),Te=l;break;default:Qi(e,i,s)}}function Ly(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Rl(e)}catch(s){ee(i,i.return,s)}}function kb(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Vy),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Vy),i;default:throw Error(a(435,e.tag))}}function vd(e,i){var s=kb(e);i.forEach(function(l){var h=Kb.bind(null,e,l);s.has(l)||(s.add(l),l.then(h,h))})}function wn(e,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var h=s[l],d=e,E=i,b=E;t:for(;b!==null;){switch(b.tag){case 27:if(zr(b.type)){ce=b.stateNode,mn=!1;break t}break;case 5:ce=b.stateNode,mn=!1;break t;case 3:case 4:ce=b.stateNode.containerInfo,mn=!0;break t}b=b.return}if(ce===null)throw Error(a(160));Py(d,E,h),ce=null,mn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)zy(i,e),i=i.sibling}var ti=null;function zy(e,i){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:wn(i,e),Tn(e),l&4&&(Nr(3,e,e.return),ul(3,e),Nr(5,e,e.return));break;case 1:wn(i,e),Tn(e),l&512&&(Te||s===null||yi(s,s.return)),l&64&&Yi&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var h=ti;if(wn(i,e),Tn(e),l&512&&(Te||s===null||yi(s,s.return)),l&4){var d=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){t:{l=e.type,s=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[mr]||d[_e]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),Qe(d,l,s),d[_e]=e,Ee(d),l=d;break t;case"link":var E=O1("link","href",h).get(l+(s.href||""));if(E){for(var b=0;b<E.length;b++)if(d=E[b],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){E.splice(b,1);break e}}d=h.createElement(l),Qe(d,l,s),h.head.appendChild(d);break;case"meta":if(E=O1("meta","content",h).get(l+(s.content||""))){for(b=0;b<E.length;b++)if(d=E[b],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){E.splice(b,1);break e}}d=h.createElement(l),Qe(d,l,s),h.head.appendChild(d);break;default:throw Error(a(468,l))}d[_e]=e,Ee(d),l=d}e.stateNode=l}else V1(h,e.type,e.stateNode);else e.stateNode=M1(h,l,e.memoizedProps);else d!==l?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,l===null?V1(h,e.type,e.stateNode):M1(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&md(e,e.memoizedProps,s.memoizedProps)}break;case 27:wn(i,e),Tn(e),l&512&&(Te||s===null||yi(s,s.return)),s!==null&&l&4&&md(e,e.memoizedProps,s.memoizedProps);break;case 5:if(wn(i,e),Tn(e),l&512&&(Te||s===null||yi(s,s.return)),e.flags&32){h=e.stateNode;try{Mn(h,"")}catch(Y){ee(e,e.return,Y)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,md(e,h,s!==null?s.memoizedProps:h)),l&1024&&(xd=!0);break;case 6:if(wn(i,e),Tn(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(Y){ee(e,e.return,Y)}}break;case 3:if(Rc=null,h=ti,ti=Sc(i.containerInfo),wn(i,e),ti=h,Tn(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Rl(i.containerInfo)}catch(Y){ee(e,e.return,Y)}xd&&(xd=!1,By(e));break;case 4:l=ti,ti=Sc(e.stateNode.containerInfo),wn(i,e),Tn(e),ti=l;break;case 12:wn(i,e),Tn(e);break;case 13:wn(i,e),Tn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Sd=dn()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,vd(e,l)));break;case 22:h=e.memoizedState!==null;var D=s!==null&&s.memoizedState!==null,q=Yi,tt=Te;if(Yi=q||h,Te=tt||D,wn(i,e),Te=tt,Yi=q,Tn(e),l&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(s===null||D||Yi||Te||Ba(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){D=s=i;try{if(d=D.stateNode,h)E=d.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{b=D.stateNode;var rt=D.memoizedProps.style,H=rt!=null&&rt.hasOwnProperty("display")?rt.display:null;b.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch(Y){ee(D,D.return,Y)}}}else if(i.tag===6){if(s===null){D=i;try{D.stateNode.nodeValue=h?"":D.memoizedProps}catch(Y){ee(D,D.return,Y)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,vd(e,s))));break;case 19:wn(i,e),Tn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,vd(e,l)));break;case 30:break;case 21:break;default:wn(i,e),Tn(e)}}function Tn(e){var i=e.flags;if(i&2){try{for(var s,l=e.return;l!==null;){if(My(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var h=s.stateNode,d=gd(e);fc(e,d,h);break;case 5:var E=s.stateNode;s.flags&32&&(Mn(E,""),s.flags&=-33);var b=gd(e);fc(e,b,E);break;case 3:case 4:var D=s.stateNode.containerInfo,q=gd(e);yd(e,q,D);break;default:throw Error(a(161))}}catch(tt){ee(e,e.return,tt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function By(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;By(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Mr(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)ky(e,i.alternate,i),i=i.sibling}function Ba(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Nr(4,i,i.return),Ba(i);break;case 1:yi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Dy(i,i.return,s),Ba(i);break;case 27:vl(i.stateNode);case 26:case 5:yi(i,i.return),Ba(i);break;case 22:i.memoizedState===null&&Ba(i);break;case 30:Ba(i);break;default:Ba(i)}e=e.sibling}}function Or(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=e,d=i,E=d.flags;switch(d.tag){case 0:case 11:case 15:Or(h,d,s),ul(4,d);break;case 1:if(Or(h,d,s),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(q){ee(l,l.return,q)}if(l=d,h=l.updateQueue,h!==null){var b=l.stateNode;try{var D=h.shared.hiddenCallbacks;if(D!==null)for(h.shared.hiddenCallbacks=null,h=0;h<D.length;h++)g0(D[h],b)}catch(q){ee(l,l.return,q)}}s&&E&64&&jy(d),cl(d,d.return);break;case 27:Oy(d);case 26:case 5:Or(h,d,s),s&&l===null&&E&4&&Ny(d),cl(d,d.return);break;case 12:Or(h,d,s);break;case 13:Or(h,d,s),s&&E&4&&Ly(h,d);break;case 22:d.memoizedState===null&&Or(h,d,s),cl(d,d.return);break;case 30:break;default:Or(h,d,s)}i=i.sibling}}function _d(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&Qo(s))}function Ed(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Qo(e))}function xi(e,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)$y(e,i,s,l),i=i.sibling}function $y(e,i,s,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:xi(e,i,s,l),h&2048&&ul(9,i);break;case 1:xi(e,i,s,l);break;case 3:xi(e,i,s,l),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Qo(e)));break;case 12:if(h&2048){xi(e,i,s,l),e=i.stateNode;try{var d=i.memoizedProps,E=d.id,b=d.onPostCommit;typeof b=="function"&&b(E,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(D){ee(i,i.return,D)}}else xi(e,i,s,l);break;case 13:xi(e,i,s,l);break;case 23:break;case 22:d=i.stateNode,E=i.alternate,i.memoizedState!==null?d._visibility&2?xi(e,i,s,l):hl(e,i):d._visibility&2?xi(e,i,s,l):(d._visibility|=2,Ds(e,i,s,l,(i.subtreeFlags&10256)!==0)),h&2048&&_d(E,i);break;case 24:xi(e,i,s,l),h&2048&&Ed(i.alternate,i);break;default:xi(e,i,s,l)}}function Ds(e,i,s,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=e,E=i,b=s,D=l,q=E.flags;switch(E.tag){case 0:case 11:case 15:Ds(d,E,b,D,h),ul(8,E);break;case 23:break;case 22:var tt=E.stateNode;E.memoizedState!==null?tt._visibility&2?Ds(d,E,b,D,h):hl(d,E):(tt._visibility|=2,Ds(d,E,b,D,h)),h&&q&2048&&_d(E.alternate,E);break;case 24:Ds(d,E,b,D,h),h&&q&2048&&Ed(E.alternate,E);break;default:Ds(d,E,b,D,h)}i=i.sibling}}function hl(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,l=i,h=l.flags;switch(l.tag){case 22:hl(s,l),h&2048&&_d(l.alternate,l);break;case 24:hl(s,l),h&2048&&Ed(l.alternate,l);break;default:hl(s,l)}i=i.sibling}}var fl=8192;function Ns(e){if(e.subtreeFlags&fl)for(e=e.child;e!==null;)Fy(e),e=e.sibling}function Fy(e){switch(e.tag){case 26:Ns(e),e.flags&fl&&e.memoizedState!==null&&Ew(ti,e.memoizedState,e.memoizedProps);break;case 5:Ns(e);break;case 3:case 4:var i=ti;ti=Sc(e.stateNode.containerInfo),Ns(e),ti=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=fl,fl=16777216,Ns(e),fl=i):Ns(e));break;default:Ns(e)}}function qy(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function dl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];$e=l,Hy(l,e)}qy(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ky(e),e=e.sibling}function Ky(e){switch(e.tag){case 0:case 11:case 15:dl(e),e.flags&2048&&Nr(9,e,e.return);break;case 3:dl(e);break;case 12:dl(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,dc(e)):dl(e);break;default:dl(e)}}function dc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];$e=l,Hy(l,e)}qy(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Nr(8,i,i.return),dc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,dc(i));break;default:dc(i)}e=e.sibling}}function Hy(e,i){for(;$e!==null;){var s=$e;switch(s.tag){case 0:case 11:case 15:Nr(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Qo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,$e=l;else t:for(s=e;$e!==null;){l=$e;var h=l.sibling,d=l.return;if(Uy(l),l===s){$e=null;break t}if(h!==null){h.return=d,$e=h;break t}$e=d}}}var Ub={getCacheForType:function(e){var i=en(ke),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s}},Pb=typeof WeakMap=="function"?WeakMap:Map,Qt=0,re=null,Vt=null,zt=0,Xt=0,Sn=null,Vr=!1,Ms=!1,bd=!1,Xi=0,xe=0,kr=0,$a=0,wd=0,zn=0,Os=0,pl=null,gn=null,Td=!1,Sd=0,pc=1/0,mc=null,Ur=null,Ye=0,Pr=null,Vs=null,ks=0,Ad=0,Rd=null,Gy=null,ml=0,Cd=null;function An(){if((Qt&2)!==0&&zt!==0)return zt&-zt;if(Z.T!==null){var e=ws;return e!==0?e:Vd()}return Ni()}function Yy(){zn===0&&(zn=(zt&536870912)===0||Kt?So():536870912);var e=Ln.current;return e!==null&&(e.flags|=32),zn}function Rn(e,i,s){(e===re&&(Xt===2||Xt===9)||e.cancelPendingCommit!==null)&&(Us(e,0),Lr(e,zt,zn,!1)),ve(e,s),((Qt&2)===0||e!==re)&&(e===re&&((Qt&2)===0&&($a|=s),xe===4&&Lr(e,zt,zn,!1)),vi(e))}function Qy(e,i,s){if((Qt&6)!==0)throw Error(a(327));var l=!s&&(i&124)===0&&(i&e.expiredLanes)===0||hr(e,i),h=l?Bb(e,i):Dd(e,i,!0),d=l;do{if(h===0){Ms&&!l&&Lr(e,i,0,!1);break}else{if(s=e.current.alternate,d&&!Lb(s)){h=Dd(e,i,!1),d=!1;continue}if(h===2){if(d=i,e.errorRecoveryDisabledLanes&d)var E=0;else E=e.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;t:{var b=e;h=pl;var D=b.current.memoizedState.isDehydrated;if(D&&(Us(b,E).flags|=256),E=Dd(b,E,!1),E!==2){if(bd&&!D){b.errorRecoveryDisabledLanes|=d,$a|=d,h=4;break t}d=gn,gn=h,d!==null&&(gn===null?gn=d:gn.push.apply(gn,d))}h=E}if(d=!1,h!==2)continue}}if(h===1){Us(e,0),Lr(e,i,0,!0);break}t:{switch(l=e,d=h,d){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Lr(l,i,zn,!Vr);break t;case 2:gn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(h=Sd+300-dn(),10<h)){if(Lr(l,i,zn,!Vr),Dn(l,0,!0)!==0)break t;l.timeoutHandle=T1(Xy.bind(null,l,s,gn,mc,Td,i,zn,$a,Os,Vr,d,2,-0,0),h);break t}Xy(l,s,gn,mc,Td,i,zn,$a,Os,Vr,d,0,-0,0)}}break}while(!0);vi(e)}function Xy(e,i,s,l,h,d,E,b,D,q,tt,rt,H,Y){if(e.timeoutHandle=-1,rt=i.subtreeFlags,(rt&8192||(rt&16785408)===16785408)&&(bl={stylesheets:null,count:0,unsuspend:_w},Fy(i),rt=bw(),rt!==null)){e.cancelPendingCommit=rt(i1.bind(null,e,i,d,s,l,h,E,b,D,tt,1,H,Y)),Lr(e,d,E,!q);return}i1(e,i,d,s,l,h,E,b,D)}function Lb(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var h=s[l],d=h.getSnapshot;h=h.value;try{if(!En(d(),h))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Lr(e,i,s,l){i&=~wd,i&=~$a,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var h=i;0<h;){var d=31-ln(h),E=1<<d;l[d]=-1,h&=~E}s!==0&&dr(e,s,i)}function gc(){return(Qt&6)===0?(gl(0),!1):!0}function Id(){if(Vt!==null){if(Xt===0)var e=Vt.return;else e=Vt,$i=ka=null,Hf(e),Is=null,sl=0,e=Vt;for(;e!==null;)Iy(e.alternate,e),e=e.return;Vt=null}}function Us(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,iw(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Id(),re=e,Vt=s=Li(e.current,null),zt=i,Xt=0,Sn=null,Vr=!1,Ms=hr(e,i),bd=!1,Os=zn=wd=$a=kr=xe=0,gn=pl=null,Td=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var h=31-ln(l),d=1<<h;i|=e[h],l&=~d}return Xi=i,Pu(),s}function Wy(e,i){Mt=null,Z.H=ic,i===Wo||i===Gu?(i=p0(),Xt=3):i===h0?(i=p0(),Xt=4):Xt=i===my?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Sn=i,Vt===null&&(xe=1,lc(e,Vn(i,e.current)))}function Zy(){var e=Z.H;return Z.H=ic,e===null?ic:e}function Jy(){var e=Z.A;return Z.A=Ub,e}function jd(){xe=4,Vr||(zt&4194048)!==zt&&Ln.current!==null||(Ms=!0),(kr&134217727)===0&&($a&134217727)===0||re===null||Lr(re,zt,zn,!1)}function Dd(e,i,s){var l=Qt;Qt|=2;var h=Zy(),d=Jy();(re!==e||zt!==i)&&(mc=null,Us(e,i)),i=!1;var E=xe;t:do try{if(Xt!==0&&Vt!==null){var b=Vt,D=Sn;switch(Xt){case 8:Id(),E=6;break t;case 3:case 2:case 9:case 6:Ln.current===null&&(i=!0);var q=Xt;if(Xt=0,Sn=null,Ps(e,b,D,q),s&&Ms){E=0;break t}break;default:q=Xt,Xt=0,Sn=null,Ps(e,b,D,q)}}zb(),E=xe;break}catch(tt){Wy(e,tt)}while(!0);return i&&e.shellSuspendCounter++,$i=ka=null,Qt=l,Z.H=h,Z.A=d,Vt===null&&(re=null,zt=0,Pu()),E}function zb(){for(;Vt!==null;)t1(Vt)}function Bb(e,i){var s=Qt;Qt|=2;var l=Zy(),h=Jy();re!==e||zt!==i?(mc=null,pc=dn()+500,Us(e,i)):Ms=hr(e,i);t:do try{if(Xt!==0&&Vt!==null){i=Vt;var d=Sn;e:switch(Xt){case 1:Xt=0,Sn=null,Ps(e,i,d,1);break;case 2:case 9:if(f0(d)){Xt=0,Sn=null,e1(i);break}i=function(){Xt!==2&&Xt!==9||re!==e||(Xt=7),vi(e)},d.then(i,i);break t;case 3:Xt=7;break t;case 4:Xt=5;break t;case 7:f0(d)?(Xt=0,Sn=null,e1(i)):(Xt=0,Sn=null,Ps(e,i,d,7));break;case 5:var E=null;switch(Vt.tag){case 26:E=Vt.memoizedState;case 5:case 27:var b=Vt;if(!E||k1(E)){Xt=0,Sn=null;var D=b.sibling;if(D!==null)Vt=D;else{var q=b.return;q!==null?(Vt=q,yc(q)):Vt=null}break e}}Xt=0,Sn=null,Ps(e,i,d,5);break;case 6:Xt=0,Sn=null,Ps(e,i,d,6);break;case 8:Id(),xe=6;break t;default:throw Error(a(462))}}$b();break}catch(tt){Wy(e,tt)}while(!0);return $i=ka=null,Z.H=l,Z.A=h,Qt=s,Vt!==null?0:(re=null,zt=0,Pu(),xe)}function $b(){for(;Vt!==null&&!af();)t1(Vt)}function t1(e){var i=Ry(e.alternate,e,Xi);e.memoizedProps=e.pendingProps,i===null?yc(e):Vt=i}function e1(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=Ey(s,i,i.pendingProps,i.type,void 0,zt);break;case 11:i=Ey(s,i,i.pendingProps,i.type.render,i.ref,zt);break;case 5:Hf(i);default:Iy(s,i),i=Vt=n0(i,Xi),i=Ry(s,i,Xi)}e.memoizedProps=e.pendingProps,i===null?yc(e):Vt=i}function Ps(e,i,s,l){$i=ka=null,Hf(i),Is=null,sl=0;var h=i.return;try{if(Db(e,h,i,s,zt)){xe=1,lc(e,Vn(s,e.current)),Vt=null;return}}catch(d){if(h!==null)throw Vt=h,d;xe=1,lc(e,Vn(s,e.current)),Vt=null;return}i.flags&32768?(Kt||l===1?e=!0:Ms||(zt&536870912)!==0?e=!1:(Vr=e=!0,(l===2||l===9||l===3||l===6)&&(l=Ln.current,l!==null&&l.tag===13&&(l.flags|=16384))),n1(i,e)):yc(i)}function yc(e){var i=e;do{if((i.flags&32768)!==0){n1(i,Vr);return}e=i.return;var s=Mb(i.alternate,i,Xi);if(s!==null){Vt=s;return}if(i=i.sibling,i!==null){Vt=i;return}Vt=i=e}while(i!==null);xe===0&&(xe=5)}function n1(e,i){do{var s=Ob(e.alternate,e);if(s!==null){s.flags&=32767,Vt=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){Vt=e;return}Vt=e=s}while(e!==null);xe=6,Vt=null}function i1(e,i,s,l,h,d,E,b,D){e.cancelPendingCommit=null;do xc();while(Ye!==0);if((Qt&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(d=i.lanes|i.childLanes,d|=Ef,Eu(e,s,d,E,b,D),e===re&&(Vt=re=null,zt=0),Vs=i,Pr=e,ks=s,Ad=d,Rd=h,Gy=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Hb(Di,function(){return l1(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=Z.T,Z.T=null,h=ct.p,ct.p=2,E=Qt,Qt|=4;try{Vb(e,i,s)}finally{Qt=E,ct.p=h,Z.T=l}}Ye=1,r1(),a1(),s1()}}function r1(){if(Ye===1){Ye=0;var e=Pr,i=Vs,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=Z.T,Z.T=null;var l=ct.p;ct.p=2;var h=Qt;Qt|=4;try{zy(i,e);var d=Fd,E=Hg(e.containerInfo),b=d.focusedElem,D=d.selectionRange;if(E!==b&&b&&b.ownerDocument&&Kg(b.ownerDocument.documentElement,b)){if(D!==null&&gf(b)){var q=D.start,tt=D.end;if(tt===void 0&&(tt=q),"selectionStart"in b)b.selectionStart=q,b.selectionEnd=Math.min(tt,b.value.length);else{var rt=b.ownerDocument||document,H=rt&&rt.defaultView||window;if(H.getSelection){var Y=H.getSelection(),Tt=b.textContent.length,Et=Math.min(D.start,Tt),te=D.end===void 0?Et:Math.min(D.end,Tt);!Y.extend&&Et>te&&(E=te,te=Et,Et=E);var L=qg(b,Et),U=qg(b,te);if(L&&U&&(Y.rangeCount!==1||Y.anchorNode!==L.node||Y.anchorOffset!==L.offset||Y.focusNode!==U.node||Y.focusOffset!==U.offset)){var $=rt.createRange();$.setStart(L.node,L.offset),Y.removeAllRanges(),Et>te?(Y.addRange($),Y.extend(U.node,U.offset)):($.setEnd(U.node,U.offset),Y.addRange($))}}}}for(rt=[],Y=b;Y=Y.parentNode;)Y.nodeType===1&&rt.push({element:Y,left:Y.scrollLeft,top:Y.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<rt.length;b++){var et=rt[b];et.element.scrollLeft=et.left,et.element.scrollTop=et.top}}jc=!!$d,Fd=$d=null}finally{Qt=h,ct.p=l,Z.T=s}}e.current=i,Ye=2}}function a1(){if(Ye===2){Ye=0;var e=Pr,i=Vs,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=Z.T,Z.T=null;var l=ct.p;ct.p=2;var h=Qt;Qt|=4;try{ky(e,i.alternate,i)}finally{Qt=h,ct.p=l,Z.T=s}}Ye=3}}function s1(){if(Ye===4||Ye===3){Ye=0,wo();var e=Pr,i=Vs,s=ks,l=Gy;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Ye=5:(Ye=0,Vs=Pr=null,o1(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(Ur=null),Ro(s),i=i.stateNode,Je&&typeof Je.onCommitFiberRoot=="function")try{Je.onCommitFiberRoot(ur,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=Z.T,h=ct.p,ct.p=2,Z.T=null;try{for(var d=e.onRecoverableError,E=0;E<l.length;E++){var b=l[E];d(b.value,{componentStack:b.stack})}}finally{Z.T=i,ct.p=h}}(ks&3)!==0&&xc(),vi(e),h=e.pendingLanes,(s&4194090)!==0&&(h&42)!==0?e===Cd?ml++:(ml=0,Cd=e):ml=0,gl(0)}}function o1(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Qo(i)))}function xc(e){return r1(),a1(),s1(),l1()}function l1(){if(Ye!==5)return!1;var e=Pr,i=Ad;Ad=0;var s=Ro(ks),l=Z.T,h=ct.p;try{ct.p=32>s?32:s,Z.T=null,s=Rd,Rd=null;var d=Pr,E=ks;if(Ye=0,Vs=Pr=null,ks=0,(Qt&6)!==0)throw Error(a(331));var b=Qt;if(Qt|=4,Ky(d.current),$y(d,d.current,E,s),Qt=b,gl(0,!1),Je&&typeof Je.onPostCommitFiberRoot=="function")try{Je.onPostCommitFiberRoot(ur,d)}catch{}return!0}finally{ct.p=h,Z.T=l,o1(e,i)}}function u1(e,i,s){i=Vn(s,i),i=sd(e.stateNode,i,2),e=Cr(e,i,2),e!==null&&(ve(e,2),vi(e))}function ee(e,i,s){if(e.tag===3)u1(e,e,s);else for(;i!==null;){if(i.tag===3){u1(i,e,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ur===null||!Ur.has(l))){e=Vn(s,e),s=dy(2),l=Cr(i,s,2),l!==null&&(py(s,l,i,e),ve(l,2),vi(l));break}}i=i.return}}function Nd(e,i,s){var l=e.pingCache;if(l===null){l=e.pingCache=new Pb;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(s)||(bd=!0,h.add(s),e=Fb.bind(null,e,i,s),i.then(e,e))}function Fb(e,i,s){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,re===e&&(zt&s)===s&&(xe===4||xe===3&&(zt&62914560)===zt&&300>dn()-Sd?(Qt&2)===0&&Us(e,0):wd|=s,Os===zt&&(Os=0)),vi(e)}function c1(e,i){i===0&&(i=fr()),e=vs(e,i),e!==null&&(ve(e,i),vi(e))}function qb(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),c1(e,s)}function Kb(e,i){var s=0;switch(e.tag){case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(s=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),c1(e,s)}function Hb(e,i){return oa(e,i)}var vc=null,Ls=null,Md=!1,_c=!1,Od=!1,Fa=0;function vi(e){e!==Ls&&e.next===null&&(Ls===null?vc=Ls=e:Ls=Ls.next=e),_c=!0,Md||(Md=!0,Yb())}function gl(e,i){if(!Od&&_c){Od=!0;do for(var s=!1,l=vc;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var E=l.suspendedLanes,b=l.pingedLanes;d=(1<<31-ln(42|e)+1)-1,d&=h&~(E&~b),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,p1(l,d))}else d=zt,d=Dn(l,l===re?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||hr(l,d)||(s=!0,p1(l,d));l=l.next}while(s);Od=!1}}function Gb(){h1()}function h1(){_c=Md=!1;var e=0;Fa!==0&&(nw()&&(e=Fa),Fa=0);for(var i=dn(),s=null,l=vc;l!==null;){var h=l.next,d=f1(l,i);d===0?(l.next=null,s===null?vc=h:s.next=h,h===null&&(Ls=s)):(s=l,(e!==0||(d&3)!==0)&&(_c=!0)),l=h}gl(e)}function f1(e,i){for(var s=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var E=31-ln(d),b=1<<E,D=h[E];D===-1?((b&s)===0||(b&l)!==0)&&(h[E]=ns(b,i)):D<=i&&(e.expiredLanes|=b),d&=~b}if(i=re,s=zt,s=Dn(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===i&&(Xt===2||Xt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&es(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||hr(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(l!==null&&es(l),Ro(s)){case 2:case 8:s=Le;break;case 32:s=Di;break;case 268435456:s=To;break;default:s=Di}return l=d1.bind(null,e),s=oa(s,l),e.callbackPriority=i,e.callbackNode=s,i}return l!==null&&l!==null&&es(l),e.callbackPriority=2,e.callbackNode=null,2}function d1(e,i){if(Ye!==0&&Ye!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(xc()&&e.callbackNode!==s)return null;var l=zt;return l=Dn(e,e===re?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Qy(e,l,i),f1(e,dn()),e.callbackNode!=null&&e.callbackNode===s?d1.bind(null,e):null)}function p1(e,i){if(xc())return null;Qy(e,i,!0)}function Yb(){rw(function(){(Qt&6)!==0?oa(Oe,Gb):h1()})}function Vd(){return Fa===0&&(Fa=So()),Fa}function m1(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Qn(""+e)}function g1(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function Qb(e,i,s,l,h){if(i==="submit"&&s&&s.stateNode===h){var d=m1((h[He]||null).action),E=l.submitter;E&&(i=(i=E[He]||null)?m1(i.formAction):E.getAttribute("formAction"),i!==null&&(d=i,E=null));var b=new ba("action","action",null,l,h);e.push({event:b,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Fa!==0){var D=E?g1(h,E):new FormData(h);ed(s,{pending:!0,data:D,method:h.method,action:d},null,D)}}else typeof d=="function"&&(b.preventDefault(),D=E?g1(h,E):new FormData(h),ed(s,{pending:!0,data:D,method:h.method,action:d},d,D))},currentTarget:h}]})}}for(var kd=0;kd<_f.length;kd++){var Ud=_f[kd],Xb=Ud.toLowerCase(),Wb=Ud[0].toUpperCase()+Ud.slice(1);Jn(Xb,"on"+Wb)}Jn(Qg,"onAnimationEnd"),Jn(Xg,"onAnimationIteration"),Jn(Wg,"onAnimationStart"),Jn("dblclick","onDoubleClick"),Jn("focusin","onFocus"),Jn("focusout","onBlur"),Jn(pb,"onTransitionRun"),Jn(mb,"onTransitionStart"),Jn(gb,"onTransitionCancel"),Jn(Zg,"onTransitionEnd"),hi("onMouseEnter",["mouseout","mouseover"]),hi("onMouseLeave",["mouseout","mouseover"]),hi("onPointerEnter",["pointerout","pointerover"]),hi("onPointerLeave",["pointerout","pointerover"]),ci("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ci("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ci("onBeforeInput",["compositionend","keypress","textInput","paste"]),ci("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ci("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ci("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yl));function y1(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],h=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var E=l.length-1;0<=E;E--){var b=l[E],D=b.instance,q=b.currentTarget;if(b=b.listener,D!==d&&h.isPropagationStopped())break t;d=b,h.currentTarget=q;try{d(h)}catch(tt){oc(tt)}h.currentTarget=null,d=D}else for(E=0;E<l.length;E++){if(b=l[E],D=b.instance,q=b.currentTarget,b=b.listener,D!==d&&h.isPropagationStopped())break t;d=b,h.currentTarget=q;try{d(h)}catch(tt){oc(tt)}h.currentTarget=null,d=D}}}}function kt(e,i){var s=i[ua];s===void 0&&(s=i[ua]=new Set);var l=e+"__bubble";s.has(l)||(x1(i,e,2,!1),s.add(l))}function Pd(e,i,s){var l=0;i&&(l|=4),x1(s,e,l,i)}var Ec="_reactListening"+Math.random().toString(36).slice(2);function Ld(e){if(!e[Ec]){e[Ec]=!0,bu.forEach(function(s){s!=="selectionchange"&&(Zb.has(s)||Pd(s,!1,e),Pd(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Ec]||(i[Ec]=!0,Pd("selectionchange",!1,i))}}function x1(e,i,s,l){switch($1(i)){case 2:var h=Sw;break;case 8:h=Aw;break;default:h=Jd}s=h.bind(null,i,s,e),h=void 0,!Ui||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(i,s,{capture:!0,passive:h}):e.addEventListener(i,s,!0):h!==void 0?e.addEventListener(i,s,{passive:h}):e.addEventListener(i,s,!1)}function zd(e,i,s,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var b=l.stateNode.containerInfo;if(b===h)break;if(E===4)for(E=l.return;E!==null;){var D=E.tag;if((D===3||D===4)&&E.stateNode.containerInfo===h)return;E=E.return}for(;b!==null;){if(E=li(b),E===null)return;if(D=E.tag,D===5||D===6||D===26||D===27){l=d=E;continue t}b=b.parentNode}}l=l.return}va(function(){var q=d,tt=Oo(s),rt=[];t:{var H=Jg.get(e);if(H!==void 0){var Y=ba,Tt=e;switch(e){case"keypress":if(_a(s)===0)break t;case"keydown":case"keyup":Y=ms;break;case"focusin":Tt="focus",Y=fs;break;case"focusout":Tt="blur",Y=fs;break;case"beforeblur":case"afterblur":Y=fs;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=Ra;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=Iu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=Tr;break;case Qg:case Xg:case Wg:Y=ko;break;case Zg:Y=y;break;case"scroll":case"scrollend":Y=Ta;break;case"wheel":Y=T;break;case"copy":case"cut":case"paste":Y=Du;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=Lo;break;case"toggle":case"beforetoggle":Y=Q}var Et=(i&4)!==0,te=!Et&&(e==="scroll"||e==="scrollend"),L=Et?H!==null?H+"Capture":null:H;Et=[];for(var U=q,$;U!==null;){var et=U;if($=et.stateNode,et=et.tag,et!==5&&et!==26&&et!==27||$===null||L===null||(et=br(U,L),et!=null&&Et.push(xl(U,et,$))),te)break;U=U.return}0<Et.length&&(H=new Y(H,Tt,null,s,tt),rt.push({event:H,listeners:Et}))}}if((i&7)===0){t:{if(H=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",H&&s!==Mo&&(Tt=s.relatedTarget||s.fromElement)&&(li(Tt)||Tt[Mi]))break t;if((Y||H)&&(H=tt.window===tt?tt:(H=tt.ownerDocument)?H.defaultView||H.parentWindow:window,Y?(Tt=s.relatedTarget||s.toElement,Y=q,Tt=Tt?li(Tt):null,Tt!==null&&(te=u(Tt),Et=Tt.tag,Tt!==te||Et!==5&&Et!==27&&Et!==6)&&(Tt=null)):(Y=null,Tt=q),Y!==Tt)){if(Et=Ra,et="onMouseLeave",L="onMouseEnter",U="mouse",(e==="pointerout"||e==="pointerover")&&(Et=Lo,et="onPointerLeave",L="onPointerEnter",U="pointer"),te=Y==null?H:gr(Y),$=Tt==null?H:gr(Tt),H=new Et(et,U+"leave",Y,s,tt),H.target=te,H.relatedTarget=$,et=null,li(tt)===q&&(Et=new Et(L,U+"enter",Tt,s,tt),Et.target=$,Et.relatedTarget=te,et=Et),te=et,Y&&Tt)e:{for(Et=Y,L=Tt,U=0,$=Et;$;$=zs($))U++;for($=0,et=L;et;et=zs(et))$++;for(;0<U-$;)Et=zs(Et),U--;for(;0<$-U;)L=zs(L),$--;for(;U--;){if(Et===L||L!==null&&Et===L.alternate)break e;Et=zs(Et),L=zs(L)}Et=null}else Et=null;Y!==null&&v1(rt,H,Y,Et,!1),Tt!==null&&te!==null&&v1(rt,te,Tt,Et,!0)}}t:{if(H=q?gr(q):window,Y=H.nodeName&&H.nodeName.toLowerCase(),Y==="select"||Y==="input"&&H.type==="file")var mt=Pg;else if(kg(H))if(Lg)mt=hb;else{mt=ub;var Ot=lb}else Y=H.nodeName,!Y||Y.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?q&&us(q.elementType)&&(mt=Pg):mt=cb;if(mt&&(mt=mt(e,q))){Ug(rt,mt,s,tt);break t}Ot&&Ot(e,H,q),e==="focusout"&&q&&H.type==="number"&&q.memoizedProps.value!=null&&jo(H,"number",H.value)}switch(Ot=q?gr(q):window,e){case"focusin":(kg(Ot)||Ot.contentEditable==="true")&&(gs=Ot,yf=q,qo=null);break;case"focusout":qo=yf=gs=null;break;case"mousedown":xf=!0;break;case"contextmenu":case"mouseup":case"dragend":xf=!1,Gg(rt,s,tt);break;case"selectionchange":if(db)break;case"keydown":case"keyup":Gg(rt,s,tt)}var xt;if(At)t:{switch(e){case"compositionstart":var bt="onCompositionStart";break t;case"compositionend":bt="onCompositionEnd";break t;case"compositionupdate":bt="onCompositionUpdate";break t}bt=void 0}else Zn?Xn(e,s)&&(bt="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(bt="onCompositionStart");bt&&(be&&s.locale!=="ko"&&(Zn||bt!=="onCompositionStart"?bt==="onCompositionEnd"&&Zn&&(xt=Cu()):(On=tt,ie="value"in On?On.value:On.textContent,Zn=!0)),Ot=bc(q,bt),0<Ot.length&&(bt=new Po(bt,e,null,s,tt),rt.push({event:bt,listeners:Ot}),xt?bt.data=xt:(xt=Wn(s),xt!==null&&(bt.data=xt)))),(xt=Yt?zo(e,s):ab(e,s))&&(bt=bc(q,"onBeforeInput"),0<bt.length&&(Ot=new Po("onBeforeInput","beforeinput",null,s,tt),rt.push({event:Ot,listeners:bt}),Ot.data=xt)),Qb(rt,e,q,s,tt)}y1(rt,i)})}function xl(e,i,s){return{instance:e,listener:i,currentTarget:s}}function bc(e,i){for(var s=i+"Capture",l=[];e!==null;){var h=e,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=br(e,s),h!=null&&l.unshift(xl(e,h,d)),h=br(e,i),h!=null&&l.push(xl(e,h,d))),e.tag===3)return l;e=e.return}return[]}function zs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function v1(e,i,s,l,h){for(var d=i._reactName,E=[];s!==null&&s!==l;){var b=s,D=b.alternate,q=b.stateNode;if(b=b.tag,D!==null&&D===l)break;b!==5&&b!==26&&b!==27||q===null||(D=q,h?(q=br(s,d),q!=null&&E.unshift(xl(s,q,D))):h||(q=br(s,d),q!=null&&E.push(xl(s,q,D)))),s=s.return}E.length!==0&&e.push({event:i,listeners:E})}var Jb=/\r\n?/g,tw=/\u0000|\uFFFD/g;function _1(e){return(typeof e=="string"?e:""+e).replace(Jb,`
`).replace(tw,"")}function E1(e,i){return i=_1(i),_1(e)===i}function wc(){}function Jt(e,i,s,l,h,d){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Mn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Mn(e,""+l);break;case"className":pa(e,"class",l);break;case"tabIndex":pa(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":pa(e,s,l);break;case"style":No(e,l,d);break;case"data":if(i!=="object"){pa(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Qn(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(i!=="input"&&Jt(e,i,"name",h.name,h,null),Jt(e,i,"formEncType",h.formEncType,h,null),Jt(e,i,"formMethod",h.formMethod,h,null),Jt(e,i,"formTarget",h.formTarget,h,null)):(Jt(e,i,"encType",h.encType,h,null),Jt(e,i,"method",h.method,h,null),Jt(e,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Qn(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=wc);break;case"onScroll":l!=null&&kt("scroll",e);break;case"onScrollEnd":l!=null&&kt("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=Qn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":kt("beforetoggle",e),kt("toggle",e),da(e,"popover",l);break;case"xlinkActuate":Nn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Nn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Nn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Nn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Nn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Nn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Nn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Nn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Nn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":da(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Su.get(s)||s,da(e,s,l))}}function Bd(e,i,s,l,h,d){switch(s){case"style":No(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof l=="string"?Mn(e,l):(typeof l=="number"||typeof l=="bigint")&&Mn(e,""+l);break;case"onScroll":l!=null&&kt("scroll",e);break;case"onScrollEnd":l!=null&&kt("scrollend",e);break;case"onClick":l!=null&&(e.onclick=wc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ha.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),i=s.slice(2,h?s.length-7:void 0),d=e[He]||null,d=d!=null?d[s]:null,typeof d=="function"&&e.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,l,h);break t}s in e?e[s]=l:l===!0?e.setAttribute(s,""):da(e,s,l)}}}function Qe(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":kt("error",e),kt("load",e);var l=!1,h=!1,d;for(d in s)if(s.hasOwnProperty(d)){var E=s[d];if(E!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Jt(e,i,d,E,s,null)}}h&&Jt(e,i,"srcSet",s.srcSet,s,null),l&&Jt(e,i,"src",s.src,s,null);return;case"input":kt("invalid",e);var b=d=E=h=null,D=null,q=null;for(l in s)if(s.hasOwnProperty(l)){var tt=s[l];if(tt!=null)switch(l){case"name":h=tt;break;case"type":E=tt;break;case"checked":D=tt;break;case"defaultChecked":q=tt;break;case"value":d=tt;break;case"defaultValue":b=tt;break;case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(a(137,i));break;default:Jt(e,i,l,tt,s,null)}}Io(e,d,b,D,q,E,h,!1),vr(e);return;case"select":kt("invalid",e),l=E=d=null;for(h in s)if(s.hasOwnProperty(h)&&(b=s[h],b!=null))switch(h){case"value":d=b;break;case"defaultValue":E=b;break;case"multiple":l=b;default:Jt(e,i,h,b,s,null)}i=d,s=E,e.multiple=!!l,i!=null?_r(e,!!l,i,!1):s!=null&&_r(e,!!l,s,!0);return;case"textarea":kt("invalid",e),d=h=l=null;for(E in s)if(s.hasOwnProperty(E)&&(b=s[E],b!=null))switch(E){case"value":l=b;break;case"defaultValue":h=b;break;case"children":d=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(a(91));break;default:Jt(e,i,E,b,s,null)}Tu(e,l,h,d),vr(e);return;case"option":for(D in s)if(s.hasOwnProperty(D)&&(l=s[D],l!=null))switch(D){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Jt(e,i,D,l,s,null)}return;case"dialog":kt("beforetoggle",e),kt("toggle",e),kt("cancel",e),kt("close",e);break;case"iframe":case"object":kt("load",e);break;case"video":case"audio":for(l=0;l<yl.length;l++)kt(yl[l],e);break;case"image":kt("error",e),kt("load",e);break;case"details":kt("toggle",e);break;case"embed":case"source":case"link":kt("error",e),kt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in s)if(s.hasOwnProperty(q)&&(l=s[q],l!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Jt(e,i,q,l,s,null)}return;default:if(us(i)){for(tt in s)s.hasOwnProperty(tt)&&(l=s[tt],l!==void 0&&Bd(e,i,tt,l,s,void 0));return}}for(b in s)s.hasOwnProperty(b)&&(l=s[b],l!=null&&Jt(e,i,b,l,s,null))}function ew(e,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,E=null,b=null,D=null,q=null,tt=null;for(Y in s){var rt=s[Y];if(s.hasOwnProperty(Y)&&rt!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":D=rt;default:l.hasOwnProperty(Y)||Jt(e,i,Y,null,l,rt)}}for(var H in l){var Y=l[H];if(rt=s[H],l.hasOwnProperty(H)&&(Y!=null||rt!=null))switch(H){case"type":d=Y;break;case"name":h=Y;break;case"checked":q=Y;break;case"defaultChecked":tt=Y;break;case"value":E=Y;break;case"defaultValue":b=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(a(137,i));break;default:Y!==rt&&Jt(e,i,H,Y,l,rt)}}Co(e,E,b,D,q,tt,d,h);return;case"select":Y=E=b=H=null;for(d in s)if(D=s[d],s.hasOwnProperty(d)&&D!=null)switch(d){case"value":break;case"multiple":Y=D;default:l.hasOwnProperty(d)||Jt(e,i,d,null,l,D)}for(h in l)if(d=l[h],D=s[h],l.hasOwnProperty(h)&&(d!=null||D!=null))switch(h){case"value":H=d;break;case"defaultValue":b=d;break;case"multiple":E=d;default:d!==D&&Jt(e,i,h,d,l,D)}i=b,s=E,l=Y,H!=null?_r(e,!!s,H,!1):!!l!=!!s&&(i!=null?_r(e,!!s,i,!0):_r(e,!!s,s?[]:"",!1));return;case"textarea":Y=H=null;for(b in s)if(h=s[b],s.hasOwnProperty(b)&&h!=null&&!l.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Jt(e,i,b,null,l,h)}for(E in l)if(h=l[E],d=s[E],l.hasOwnProperty(E)&&(h!=null||d!=null))switch(E){case"value":H=h;break;case"defaultValue":Y=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==d&&Jt(e,i,E,h,l,d)}wu(e,H,Y);return;case"option":for(var Tt in s)if(H=s[Tt],s.hasOwnProperty(Tt)&&H!=null&&!l.hasOwnProperty(Tt))switch(Tt){case"selected":e.selected=!1;break;default:Jt(e,i,Tt,null,l,H)}for(D in l)if(H=l[D],Y=s[D],l.hasOwnProperty(D)&&H!==Y&&(H!=null||Y!=null))switch(D){case"selected":e.selected=H&&typeof H!="function"&&typeof H!="symbol";break;default:Jt(e,i,D,H,l,Y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Et in s)H=s[Et],s.hasOwnProperty(Et)&&H!=null&&!l.hasOwnProperty(Et)&&Jt(e,i,Et,null,l,H);for(q in l)if(H=l[q],Y=s[q],l.hasOwnProperty(q)&&H!==Y&&(H!=null||Y!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(a(137,i));break;default:Jt(e,i,q,H,l,Y)}return;default:if(us(i)){for(var te in s)H=s[te],s.hasOwnProperty(te)&&H!==void 0&&!l.hasOwnProperty(te)&&Bd(e,i,te,void 0,l,H);for(tt in l)H=l[tt],Y=s[tt],!l.hasOwnProperty(tt)||H===Y||H===void 0&&Y===void 0||Bd(e,i,tt,H,l,Y);return}}for(var L in s)H=s[L],s.hasOwnProperty(L)&&H!=null&&!l.hasOwnProperty(L)&&Jt(e,i,L,null,l,H);for(rt in l)H=l[rt],Y=s[rt],!l.hasOwnProperty(rt)||H===Y||H==null&&Y==null||Jt(e,i,rt,H,l,Y)}var $d=null,Fd=null;function Tc(e){return e.nodeType===9?e:e.ownerDocument}function b1(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function w1(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function qd(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Kd=null;function nw(){var e=window.event;return e&&e.type==="popstate"?e===Kd?!1:(Kd=e,!0):(Kd=null,!1)}var T1=typeof setTimeout=="function"?setTimeout:void 0,iw=typeof clearTimeout=="function"?clearTimeout:void 0,S1=typeof Promise=="function"?Promise:void 0,rw=typeof queueMicrotask=="function"?queueMicrotask:typeof S1<"u"?function(e){return S1.resolve(null).then(e).catch(aw)}:T1;function aw(e){setTimeout(function(){throw e})}function zr(e){return e==="head"}function A1(e,i){var s=i,l=0,h=0;do{var d=s.nextSibling;if(e.removeChild(s),d&&d.nodeType===8)if(s=d.data,s==="/$"){if(0<l&&8>l){s=l;var E=e.ownerDocument;if(s&1&&vl(E.documentElement),s&2&&vl(E.body),s&4)for(s=E.head,vl(s),E=s.firstChild;E;){var b=E.nextSibling,D=E.nodeName;E[mr]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&E.rel.toLowerCase()==="stylesheet"||s.removeChild(E),E=b}}if(h===0){e.removeChild(d),Rl(i);return}h--}else s==="$"||s==="$?"||s==="$!"?h++:l=s.charCodeAt(0)-48;else l=0;s=d}while(s);Rl(i)}function Hd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Hd(s),rs(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function sw(e,i,s,l){for(;e.nodeType===1;){var h=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[mr])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=ei(e.nextSibling),e===null)break}return null}function ow(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=ei(e.nextSibling),e===null))return null;return e}function Gd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function lw(e,i){var s=e.ownerDocument;if(e.data!=="$?"||s.readyState==="complete")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function ei(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var Yd=null;function R1(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return e;i--}else s==="/$"&&i++}e=e.previousSibling}return null}function C1(e,i,s){switch(i=Tc(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function vl(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);rs(e)}var Bn=new Map,I1=new Set;function Sc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Wi=ct.d;ct.d={f:uw,r:cw,D:hw,C:fw,L:dw,m:pw,X:gw,S:mw,M:yw};function uw(){var e=Wi.f(),i=gc();return e||i}function cw(e){var i=ui(e);i!==null&&i.tag===5&&i.type==="form"?Q0(i):Wi.r(e)}var Bs=typeof document>"u"?null:document;function j1(e,i,s){var l=Bs;if(l&&typeof i=="string"&&i){var h=ze(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),I1.has(h)||(I1.add(h),e={rel:e,crossOrigin:s,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Qe(i,"link",e),Ee(i),l.head.appendChild(i)))}}function hw(e){Wi.D(e),j1("dns-prefetch",e,null)}function fw(e,i){Wi.C(e,i),j1("preconnect",e,i)}function dw(e,i,s){Wi.L(e,i,s);var l=Bs;if(l&&e&&i){var h='link[rel="preload"][as="'+ze(i)+'"]';i==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+ze(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+ze(s.imageSizes)+'"]')):h+='[href="'+ze(e)+'"]';var d=h;switch(i){case"style":d=$s(e);break;case"script":d=Fs(e)}Bn.has(d)||(e=v({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),Bn.set(d,e),l.querySelector(h)!==null||i==="style"&&l.querySelector(_l(d))||i==="script"&&l.querySelector(El(d))||(i=l.createElement("link"),Qe(i,"link",e),Ee(i),l.head.appendChild(i)))}}function pw(e,i){Wi.m(e,i);var s=Bs;if(s&&e){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+ze(l)+'"][href="'+ze(e)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Fs(e)}if(!Bn.has(d)&&(e=v({rel:"modulepreload",href:e},i),Bn.set(d,e),s.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(El(d)))return}l=s.createElement("link"),Qe(l,"link",e),Ee(l),s.head.appendChild(l)}}}function mw(e,i,s){Wi.S(e,i,s);var l=Bs;if(l&&e){var h=yr(l).hoistableStyles,d=$s(e);i=i||"default";var E=h.get(d);if(!E){var b={loading:0,preload:null};if(E=l.querySelector(_l(d)))b.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":i},s),(s=Bn.get(d))&&Qd(e,s);var D=E=l.createElement("link");Ee(D),Qe(D,"link",e),D._p=new Promise(function(q,tt){D.onload=q,D.onerror=tt}),D.addEventListener("load",function(){b.loading|=1}),D.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Ac(E,i,l)}E={type:"stylesheet",instance:E,count:1,state:b},h.set(d,E)}}}function gw(e,i){Wi.X(e,i);var s=Bs;if(s&&e){var l=yr(s).hoistableScripts,h=Fs(e),d=l.get(h);d||(d=s.querySelector(El(h)),d||(e=v({src:e,async:!0},i),(i=Bn.get(h))&&Xd(e,i),d=s.createElement("script"),Ee(d),Qe(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function yw(e,i){Wi.M(e,i);var s=Bs;if(s&&e){var l=yr(s).hoistableScripts,h=Fs(e),d=l.get(h);d||(d=s.querySelector(El(h)),d||(e=v({src:e,async:!0,type:"module"},i),(i=Bn.get(h))&&Xd(e,i),d=s.createElement("script"),Ee(d),Qe(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function D1(e,i,s,l){var h=(h=_t.current)?Sc(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=$s(s.href),s=yr(h).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=$s(s.href);var d=yr(h).hoistableStyles,E=d.get(e);if(E||(h=h.ownerDocument||h,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,E),(d=h.querySelector(_l(e)))&&!d._p&&(E.instance=d,E.state.loading=5),Bn.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Bn.set(e,s),d||xw(h,e,s,E.state))),i&&l===null)throw Error(a(528,""));return E}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Fs(s),s=yr(h).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function $s(e){return'href="'+ze(e)+'"'}function _l(e){return'link[rel="stylesheet"]['+e+"]"}function N1(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function xw(e,i,s,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Qe(i,"link",s),Ee(i),e.head.appendChild(i))}function Fs(e){return'[src="'+ze(e)+'"]'}function El(e){return"script[async]"+e}function M1(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+ze(s.href)+'"]');if(l)return i.instance=l,Ee(l),l;var h=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ee(l),Qe(l,"style",h),Ac(l,s.precedence,e),i.instance=l;case"stylesheet":h=$s(s.href);var d=e.querySelector(_l(h));if(d)return i.state.loading|=4,i.instance=d,Ee(d),d;l=N1(s),(h=Bn.get(h))&&Qd(l,h),d=(e.ownerDocument||e).createElement("link"),Ee(d);var E=d;return E._p=new Promise(function(b,D){E.onload=b,E.onerror=D}),Qe(d,"link",l),i.state.loading|=4,Ac(d,s.precedence,e),i.instance=d;case"script":return d=Fs(s.src),(h=e.querySelector(El(d)))?(i.instance=h,Ee(h),h):(l=s,(h=Bn.get(d))&&(l=v({},s),Xd(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),Ee(h),Qe(h,"link",l),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Ac(l,s.precedence,e));return i.instance}function Ac(e,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,E=0;E<l.length;E++){var b=l[E];if(b.dataset.precedence===i)d=b;else if(d!==h)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function Qd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Xd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Rc=null;function O1(e,i,s){if(Rc===null){var l=new Map,h=Rc=new Map;h.set(s,l)}else h=Rc,l=h.get(s),l||(l=new Map,h.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),h=0;h<s.length;h++){var d=s[h];if(!(d[mr]||d[_e]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var E=d.getAttribute(i)||"";E=e+E;var b=l.get(E);b?b.push(d):l.set(E,[d])}}return l}function V1(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function vw(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function k1(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var bl=null;function _w(){}function Ew(e,i,s){if(bl===null)throw Error(a(475));var l=bl;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=$s(s.href),d=e.querySelector(_l(h));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Cc.bind(l),e.then(l,l)),i.state.loading|=4,i.instance=d,Ee(d);return}d=e.ownerDocument||e,s=N1(s),(h=Bn.get(h))&&Qd(s,h),d=d.createElement("link"),Ee(d);var E=d;E._p=new Promise(function(b,D){E.onload=b,E.onerror=D}),Qe(d,"link",s),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=Cc.bind(l),e.addEventListener("load",i),e.addEventListener("error",i))}}function bw(){if(bl===null)throw Error(a(475));var e=bl;return e.stylesheets&&e.count===0&&Wd(e,e.stylesheets),0<e.count?function(i){var s=setTimeout(function(){if(e.stylesheets&&Wd(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(s)}}:null}function Cc(){if(this.count--,this.count===0){if(this.stylesheets)Wd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ic=null;function Wd(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ic=new Map,i.forEach(ww,e),Ic=null,Cc.call(e))}function ww(e,i){if(!(i.state.loading&4)){var s=Ic.get(e);if(s)var l=s.get(null);else{s=new Map,Ic.set(e,s);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var E=h[d];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(s.set(E.dataset.precedence,E),l=E)}l&&s.set(null,l)}h=i.instance,E=h.getAttribute("data-precedence"),d=s.get(E)||l,d===l&&s.set(null,h),s.set(E,h),this.count++,l=Cc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var wl={$$typeof:it,Provider:null,Consumer:null,_currentValue:yt,_currentValue2:yt,_threadCount:0};function Tw(e,i,s,l,h,d,E,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=is(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=is(0),this.hiddenUpdates=is(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function U1(e,i,s,l,h,d,E,b,D,q,tt,rt){return e=new Tw(e,i,s,E,b,D,q,rt),i=1,d===!0&&(i|=24),d=bn(3,null,null,i),e.current=d,d.stateNode=e,i=Nf(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:s,cache:i},kf(d),e}function P1(e){return e?(e=_s,e):_s}function L1(e,i,s,l,h,d){h=P1(h),l.context===null?l.context=h:l.pendingContext=h,l=Rr(i),l.payload={element:s},d=d===void 0?null:d,d!==null&&(l.callback=d),s=Cr(e,l,i),s!==null&&(Rn(s,e,i),Jo(s,e,i))}function z1(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function Zd(e,i){z1(e,i),(e=e.alternate)&&z1(e,i)}function B1(e){if(e.tag===13){var i=vs(e,67108864);i!==null&&Rn(i,e,67108864),Zd(e,67108864)}}var jc=!0;function Sw(e,i,s,l){var h=Z.T;Z.T=null;var d=ct.p;try{ct.p=2,Jd(e,i,s,l)}finally{ct.p=d,Z.T=h}}function Aw(e,i,s,l){var h=Z.T;Z.T=null;var d=ct.p;try{ct.p=8,Jd(e,i,s,l)}finally{ct.p=d,Z.T=h}}function Jd(e,i,s,l){if(jc){var h=tp(l);if(h===null)zd(e,i,l,Dc,s),F1(e,l);else if(Cw(h,e,i,s,l))l.stopPropagation();else if(F1(e,l),i&4&&-1<Rw.indexOf(e)){for(;h!==null;){var d=ui(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var E=Hn(d.pendingLanes);if(E!==0){var b=d;for(b.pendingLanes|=2,b.entangledLanes|=2;E;){var D=1<<31-ln(E);b.entanglements[1]|=D,E&=~D}vi(d),(Qt&6)===0&&(pc=dn()+500,gl(0))}}break;case 13:b=vs(d,2),b!==null&&Rn(b,d,2),gc(),Zd(d,2)}if(d=tp(l),d===null&&zd(e,i,l,Dc,s),d===h)break;h=d}h!==null&&l.stopPropagation()}else zd(e,i,l,null,s)}}function tp(e){return e=Oo(e),ep(e)}var Dc=null;function ep(e){if(Dc=null,e=li(e),e!==null){var i=u(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=f(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Dc=e,null}function $1(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xu()){case Oe:return 2;case Le:return 8;case Di:case sf:return 32;case To:return 268435456;default:return 32}default:return 32}}var np=!1,Br=null,$r=null,Fr=null,Tl=new Map,Sl=new Map,qr=[],Rw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function F1(e,i){switch(e){case"focusin":case"focusout":Br=null;break;case"dragenter":case"dragleave":$r=null;break;case"mouseover":case"mouseout":Fr=null;break;case"pointerover":case"pointerout":Tl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sl.delete(i.pointerId)}}function Al(e,i,s,l,h,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=ui(i),i!==null&&B1(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function Cw(e,i,s,l,h){switch(i){case"focusin":return Br=Al(Br,e,i,s,l,h),!0;case"dragenter":return $r=Al($r,e,i,s,l,h),!0;case"mouseover":return Fr=Al(Fr,e,i,s,l,h),!0;case"pointerover":var d=h.pointerId;return Tl.set(d,Al(Tl.get(d)||null,e,i,s,l,h)),!0;case"gotpointercapture":return d=h.pointerId,Sl.set(d,Al(Sl.get(d)||null,e,i,s,l,h)),!0}return!1}function q1(e){var i=li(e.target);if(i!==null){var s=u(i);if(s!==null){if(i=s.tag,i===13){if(i=f(s),i!==null){e.blockedOn=i,uf(e.priority,function(){if(s.tag===13){var l=An();l=Ao(l);var h=vs(s,l);h!==null&&Rn(h,s,l),Zd(s,l)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Nc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=tp(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);Mo=l,s.target.dispatchEvent(l),Mo=null}else return i=ui(s),i!==null&&B1(i),e.blockedOn=s,!1;i.shift()}return!0}function K1(e,i,s){Nc(e)&&s.delete(i)}function Iw(){np=!1,Br!==null&&Nc(Br)&&(Br=null),$r!==null&&Nc($r)&&($r=null),Fr!==null&&Nc(Fr)&&(Fr=null),Tl.forEach(K1),Sl.forEach(K1)}function Mc(e,i){e.blockedOn===i&&(e.blockedOn=null,np||(np=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Iw)))}var Oc=null;function H1(e){Oc!==e&&(Oc=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Oc===e&&(Oc=null);for(var i=0;i<e.length;i+=3){var s=e[i],l=e[i+1],h=e[i+2];if(typeof l!="function"){if(ep(l||s)===null)continue;break}var d=ui(s);d!==null&&(e.splice(i,3),i-=3,ed(d,{pending:!0,data:h,method:s.method,action:l},l,h))}}))}function Rl(e){function i(D){return Mc(D,e)}Br!==null&&Mc(Br,e),$r!==null&&Mc($r,e),Fr!==null&&Mc(Fr,e),Tl.forEach(i),Sl.forEach(i);for(var s=0;s<qr.length;s++){var l=qr[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<qr.length&&(s=qr[0],s.blockedOn===null);)q1(s),s.blockedOn===null&&qr.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var h=s[l],d=s[l+1],E=h[He]||null;if(typeof d=="function")E||H1(s);else if(E){var b=null;if(d&&d.hasAttribute("formAction")){if(h=d,E=d[He]||null)b=E.formAction;else if(ep(h)!==null)continue}else b=E.action;typeof b=="function"?s[l+1]=b:(s.splice(l,3),l-=3),H1(s)}}}function ip(e){this._internalRoot=e}Vc.prototype.render=ip.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=An();L1(s,l,e,i,null,null)},Vc.prototype.unmount=ip.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;L1(e.current,2,null,e,null,null),gc(),i[Mi]=null}};function Vc(e){this._internalRoot=e}Vc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Ni();e={blockedOn:null,target:e,priority:i};for(var s=0;s<qr.length&&i!==0&&i<qr[s].priority;s++);qr.splice(s,0,e),s===0&&q1(e)}};var G1=t.version;if(G1!=="19.1.1")throw Error(a(527,G1,"19.1.1"));ct.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=m(i),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var jw={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:Z,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kc.isDisabled&&kc.supportsFiber)try{ur=kc.inject(jw),Je=kc}catch{}}return Dl.createRoot=function(e,i){if(!o(e))throw Error(a(299));var s=!1,l="",h=uy,d=cy,E=hy,b=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(b=i.unstable_transitionCallbacks)),i=U1(e,1,!1,null,null,s,l,h,d,E,b,null),e[Mi]=i.current,Ld(e),new ip(i)},Dl.hydrateRoot=function(e,i,s){if(!o(e))throw Error(a(299));var l=!1,h="",d=uy,E=cy,b=hy,D=null,q=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(E=s.onCaughtError),s.onRecoverableError!==void 0&&(b=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(D=s.unstable_transitionCallbacks),s.formState!==void 0&&(q=s.formState)),i=U1(e,1,!0,i,s??null,l,h,d,E,b,D,q),i.context=P1(null),s=i.current,l=An(),l=Ao(l),h=Rr(l),h.callback=null,Cr(s,h,l),s=l,i.current.lanes=s,ve(i,s),vi(i),e[Mi]=i.current,Ld(e),new Vc(i)},Dl.version="19.1.1",Dl}var d_;function zN(){if(d_)return kp.exports;d_=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}return n(),kp.exports=LN(),kp.exports}var BN=zN();function $N(){const n=Ci(),t=uT();return Dt.useEffect(()=>{t!=="POP"&&window.scrollTo({top:0,behavior:"instant"});const r=document.getElementById("main");r&&r.focus({preventScroll:!0})},[n,t]),null}function FN({headerMode:n,setHeaderMode:t}){const r=K.useMemo(()=>[{key:"projects",label:"PROJECTS",href:"/TU2025gradulate/projects/"},{key:"peoples",label:"PEOPLES",href:"/TU2025gradulate/peoples/"},{key:"showroom",label:"SHOWROOM",href:"/TU2025gradulate/showroom/"},{key:"guestbook",label:"GUESTBOOK",href:"/TU2025gradulate/guestbook/"},{key:"credits",label:"CREDITS",href:"/TU2025gradulate/credits/"}],[]),a=Ci(),o=K.useMemo(()=>{const u=a.pathname.replace(/^\/+/,"");if(!u)return;const f=u.split("/")[0];return["projects","peoples","showroom","guestbook","credits"].includes(f)?f:void 0},[a.pathname]);return x.jsxs(x.Fragment,{children:[x.jsx(tE,{items:r,activeKey:o,mode:n,autoOnScroll:n===pe.GRADIENT_DARK||n===pe.DARK,scrollThreshold:8,sticky:!0,overlay:n===pe.GRADIENT_DARK||n===pe.DARK,maxWidth:1280,onModeChange:t}),x.jsx("main",{id:"main",tabIndex:-1,style:{outline:"none",width:"100vw",boxSizing:"border-box",padding:0},children:x.jsx(CT,{})}),x.jsx(eE,{title:"잔향 : 기억의 향기",nav:[{label:"PROJECTS",href:"/TU2025gradulate/projects/"},{label:"PEOPLES",href:"/TU2025gradulate/peoples/"},{label:"SHOWROOM",href:"/TU2025gradulate/showroom/"},{label:"GUESTBOOK",href:"/TU2025gradulate/guestbook/"},{label:"CREDITS",href:"/TU2025gradulate/credits/"}],copyright:["ⓒ 2025 TECH UNIV KOREA. ALL RIGHTS RESERVED.","TUKOREA DESIGN ENGINEERING 20TH GRADUATION EXHIBITION"],social:{youtube:{href:"https://youtube.com/",label:"YouTube"},instagram:{href:"https://instagram.com/",label:"Instagram"}},sidePadding:350,maxWidth:1220})]})}function qN({setHeaderMode:n}){return Dt.useEffect(()=>{n(pe.GRADIENT)},[n]),x.jsx(cA,{})}function KN({setHeaderMode:n}){return Dt.useEffect(()=>{n(pe.GRADIENT)},[n]),x.jsx(HA,{})}function HN({setHeaderMode:n}){return Dt.useEffect(()=>{n(pe.GRADIENT)},[n]),x.jsx(d3,{})}function GN({setHeaderMode:n}){return Dt.useEffect(()=>{n(pe.GRADIENT_DARK)},[n]),x.jsx(UD,{})}function YN({setHeaderMode:n}){return Dt.useEffect(()=>{n(pe.DARK)},[n]),x.jsx(G5,{})}function QN({setHeaderMode:n}){return Dt.useEffect(()=>{n(pe.LIGHT)},[n]),x.jsx(kN,{})}function XN(){const[n,t]=K.useState(pe.GRADIENT);return x.jsxs(JT,{basename:"/TU2025gradulate/",children:[x.jsx($N,{}),x.jsx(jT,{children:x.jsxs(Zi,{element:x.jsx(FN,{headerMode:n,setHeaderMode:t}),children:[x.jsx(Zi,{index:!0,element:x.jsx(GN,{setHeaderMode:t})}),x.jsx(Zi,{path:"projects/",element:x.jsx(HN,{setHeaderMode:t})}),x.jsx(Zi,{path:"peoples/",element:x.jsx(KN,{setHeaderMode:t})}),x.jsx(Zi,{path:"guestbook/",element:x.jsx(YN,{setHeaderMode:t})}),x.jsx(Zi,{path:"work/:pid",element:x.jsx(QN,{setHeaderMode:t})}),x.jsx(Zi,{path:"credits/",element:x.jsx(qN,{setHeaderMode:t})}),x.jsx(Zi,{path:"*",element:x.jsx(RT,{to:"/",replace:!0})})]})})]})}const p_=typeof document<"u"?document.getElementById("root"):null;p_&&BN.createRoot(p_).render(x.jsx(XN,{}));
