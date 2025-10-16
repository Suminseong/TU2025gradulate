(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function i(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(o){if(o.ep)return;o.ep=!0;const u=i(o);fetch(o.href,u)}})();function x_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var sp={exports:{}},Dl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z1;function Nw(){if(Z1)return Dl;Z1=1;var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(a,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:n,type:a,key:f,ref:o!==void 0?o:null,props:u}}return Dl.Fragment=t,Dl.jsx=i,Dl.jsxs=i,Dl}var J1;function Mw(){return J1||(J1=1,sp.exports=Nw()),sp.exports}var x=Mw(),op={exports:{}},jt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tx;function Ow(){if(tx)return jt;tx=1;var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),w=Symbol.iterator;function S(O){return O===null||typeof O!="object"?null:(O=w&&O[w]||O["@@iterator"],typeof O=="function"?O:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,B={};function P(O,at,ut){this.props=O,this.context=at,this.refs=B,this.updater=ut||R}P.prototype.isReactComponent={},P.prototype.setState=function(O,at){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,at,"setState")},P.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function X(){}X.prototype=P.prototype;function Y(O,at,ut){this.props=O,this.context=at,this.refs=B,this.updater=ut||R}var J=Y.prototype=new X;J.constructor=Y,V(J,P.prototype),J.isPureReactComponent=!0;var ot=Array.isArray,Z={H:null,A:null,T:null,S:null,V:null},ft=Object.prototype.hasOwnProperty;function j(O,at,ut,ct,gt,It){return ut=It.ref,{$$typeof:n,type:O,key:at,ref:ut!==void 0?ut:null,props:It}}function C(O,at){return j(O.type,at,void 0,void 0,void 0,O.props)}function I(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function M(O){var at={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ut){return at[ut]})}var k=/\/+/g;function z(O,at){return typeof O=="object"&&O!==null&&O.key!=null?M(""+O.key):at.toString(36)}function N(){}function ue(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(N,N):(O.status="pending",O.then(function(at){O.status==="pending"&&(O.status="fulfilled",O.value=at)},function(at){O.status==="pending"&&(O.status="rejected",O.reason=at)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function ne(O,at,ut,ct,gt){var It=typeof O;(It==="undefined"||It==="boolean")&&(O=null);var _t=!1;if(O===null)_t=!0;else switch(It){case"bigint":case"string":case"number":_t=!0;break;case"object":switch(O.$$typeof){case n:case t:_t=!0;break;case v:return _t=O._init,ne(_t(O._payload),at,ut,ct,gt)}}if(_t)return gt=gt(O),_t=ct===""?"."+z(O,0):ct,ot(gt)?(ut="",_t!=null&&(ut=_t.replace(k,"$&/")+"/"),ne(gt,at,ut,"",function(Me){return Me})):gt!=null&&(I(gt)&&(gt=C(gt,ut+(gt.key==null||O&&O.key===gt.key?"":(""+gt.key).replace(k,"$&/")+"/")+_t)),at.push(gt)),1;_t=0;var ge=ct===""?".":ct+":";if(ot(O))for(var Lt=0;Lt<O.length;Lt++)ct=O[Lt],It=ge+z(ct,Lt),_t+=ne(ct,at,ut,It,gt);else if(Lt=S(O),typeof Lt=="function")for(O=Lt.call(O),Lt=0;!(ct=O.next()).done;)ct=ct.value,It=ge+z(ct,Lt++),_t+=ne(ct,at,ut,It,gt);else if(It==="object"){if(typeof O.then=="function")return ne(ue(O),at,ut,ct,gt);throw at=String(O),Error("Objects are not valid as a React child (found: "+(at==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":at)+"). If you meant to render a collection of children, use an array instead.")}return _t}function tt(O,at,ut){if(O==null)return O;var ct=[],gt=0;return ne(O,ct,"","",function(It){return at.call(ut,It,gt++)}),ct}function ht(O){if(O._status===-1){var at=O._result;at=at(),at.then(function(ut){(O._status===0||O._status===-1)&&(O._status=1,O._result=ut)},function(ut){(O._status===0||O._status===-1)&&(O._status=2,O._result=ut)}),O._status===-1&&(O._status=0,O._result=at)}if(O._status===1)return O._result.default;throw O._result}var yt=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var at=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(at))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function Ct(){}return jt.Children={map:tt,forEach:function(O,at,ut){tt(O,function(){at.apply(this,arguments)},ut)},count:function(O){var at=0;return tt(O,function(){at++}),at},toArray:function(O){return tt(O,function(at){return at})||[]},only:function(O){if(!I(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},jt.Component=P,jt.Fragment=i,jt.Profiler=o,jt.PureComponent=Y,jt.StrictMode=a,jt.Suspense=p,jt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,jt.__COMPILER_RUNTIME={__proto__:null,c:function(O){return Z.H.useMemoCache(O)}},jt.cache=function(O){return function(){return O.apply(null,arguments)}},jt.cloneElement=function(O,at,ut){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var ct=V({},O.props),gt=O.key,It=void 0;if(at!=null)for(_t in at.ref!==void 0&&(It=void 0),at.key!==void 0&&(gt=""+at.key),at)!ft.call(at,_t)||_t==="key"||_t==="__self"||_t==="__source"||_t==="ref"&&at.ref===void 0||(ct[_t]=at[_t]);var _t=arguments.length-2;if(_t===1)ct.children=ut;else if(1<_t){for(var ge=Array(_t),Lt=0;Lt<_t;Lt++)ge[Lt]=arguments[Lt+2];ct.children=ge}return j(O.type,gt,void 0,void 0,It,ct)},jt.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},jt.createElement=function(O,at,ut){var ct,gt={},It=null;if(at!=null)for(ct in at.key!==void 0&&(It=""+at.key),at)ft.call(at,ct)&&ct!=="key"&&ct!=="__self"&&ct!=="__source"&&(gt[ct]=at[ct]);var _t=arguments.length-2;if(_t===1)gt.children=ut;else if(1<_t){for(var ge=Array(_t),Lt=0;Lt<_t;Lt++)ge[Lt]=arguments[Lt+2];gt.children=ge}if(O&&O.defaultProps)for(ct in _t=O.defaultProps,_t)gt[ct]===void 0&&(gt[ct]=_t[ct]);return j(O,It,void 0,void 0,null,gt)},jt.createRef=function(){return{current:null}},jt.forwardRef=function(O){return{$$typeof:m,render:O}},jt.isValidElement=I,jt.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:ht}},jt.memo=function(O,at){return{$$typeof:g,type:O,compare:at===void 0?null:at}},jt.startTransition=function(O){var at=Z.T,ut={};Z.T=ut;try{var ct=O(),gt=Z.S;gt!==null&&gt(ut,ct),typeof ct=="object"&&ct!==null&&typeof ct.then=="function"&&ct.then(Ct,yt)}catch(It){yt(It)}finally{Z.T=at}},jt.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},jt.use=function(O){return Z.H.use(O)},jt.useActionState=function(O,at,ut){return Z.H.useActionState(O,at,ut)},jt.useCallback=function(O,at){return Z.H.useCallback(O,at)},jt.useContext=function(O){return Z.H.useContext(O)},jt.useDebugValue=function(){},jt.useDeferredValue=function(O,at){return Z.H.useDeferredValue(O,at)},jt.useEffect=function(O,at,ut){var ct=Z.H;if(typeof ut=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ct.useEffect(O,at)},jt.useId=function(){return Z.H.useId()},jt.useImperativeHandle=function(O,at,ut){return Z.H.useImperativeHandle(O,at,ut)},jt.useInsertionEffect=function(O,at){return Z.H.useInsertionEffect(O,at)},jt.useLayoutEffect=function(O,at){return Z.H.useLayoutEffect(O,at)},jt.useMemo=function(O,at){return Z.H.useMemo(O,at)},jt.useOptimistic=function(O,at){return Z.H.useOptimistic(O,at)},jt.useReducer=function(O,at,ut){return Z.H.useReducer(O,at,ut)},jt.useRef=function(O){return Z.H.useRef(O)},jt.useState=function(O){return Z.H.useState(O)},jt.useSyncExternalStore=function(O,at,ut){return Z.H.useSyncExternalStore(O,at,ut)},jt.useTransition=function(){return Z.H.useTransition()},jt.version="19.1.1",jt}var ex;function Sm(){return ex||(ex=1,op.exports=Ow()),op.exports}var K=Sm();const Ot=x_(K);/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var nx="popstate";function Vw(n={}){function t(a,o){let{pathname:u,search:f,hash:m}=a.location;return zp("",{pathname:u,search:f,hash:m},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function i(a,o){return typeof o=="string"?o:Yl(o)}return Uw(t,i,null,n)}function he(n,t){if(n===!1||n===null||typeof n>"u")throw new Error(t)}function ri(n,t){if(!n){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function kw(){return Math.random().toString(36).substring(2,10)}function ix(n,t){return{usr:n.state,key:n.key,idx:t}}function zp(n,t,i=null,a){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof t=="string"?po(t):t,state:i,key:t&&t.key||a||kw()}}function Yl({pathname:n="/",search:t="",hash:i=""}){return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(n+=i.charAt(0)==="#"?i:"#"+i),n}function po(n){let t={};if(n){let i=n.indexOf("#");i>=0&&(t.hash=n.substring(i),n=n.substring(0,i));let a=n.indexOf("?");a>=0&&(t.search=n.substring(a),n=n.substring(0,a)),n&&(t.pathname=n)}return t}function Uw(n,t,i,a={}){let{window:o=document.defaultView,v5Compat:u=!1}=a,f=o.history,m="POP",p=null,g=v();g==null&&(g=0,f.replaceState({...f.state,idx:g},""));function v(){return(f.state||{idx:null}).idx}function w(){m="POP";let P=v(),X=P==null?null:P-g;g=P,p&&p({action:m,location:B.location,delta:X})}function S(P,X){m="PUSH";let Y=zp(B.location,P,X);g=v()+1;let J=ix(Y,g),ot=B.createHref(Y);try{f.pushState(J,"",ot)}catch(Z){if(Z instanceof DOMException&&Z.name==="DataCloneError")throw Z;o.location.assign(ot)}u&&p&&p({action:m,location:B.location,delta:1})}function R(P,X){m="REPLACE";let Y=zp(B.location,P,X);g=v();let J=ix(Y,g),ot=B.createHref(Y);f.replaceState(J,"",ot),u&&p&&p({action:m,location:B.location,delta:0})}function V(P){return Pw(P)}let B={get action(){return m},get location(){return n(o,f)},listen(P){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(nx,w),p=P,()=>{o.removeEventListener(nx,w),p=null}},createHref(P){return t(o,P)},createURL:V,encodeLocation(P){let X=V(P);return{pathname:X.pathname,search:X.search,hash:X.hash}},push:S,replace:R,go(P){return f.go(P)}};return B}function Pw(n,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),he(i,"No window.location.(origin|href) available to create URL");let a=typeof n=="string"?n:Yl(n);return a=a.replace(/ $/,"%20"),!t&&a.startsWith("//")&&(a=i+a),new URL(a,i)}function v_(n,t,i="/"){return Lw(n,t,i,!1)}function Lw(n,t,i,a){let o=typeof t=="string"?po(t):t,u=ar(o.pathname||"/",i);if(u==null)return null;let f=__(n);zw(f);let m=null;for(let p=0;m==null&&p<f.length;++p){let g=Ww(u);m=Qw(f[p],g,a)}return m}function __(n,t=[],i=[],a="",o=!1){let u=(f,m,p=o,g)=>{let v={relativePath:g===void 0?f.path||"":g,caseSensitive:f.caseSensitive===!0,childrenIndex:m,route:f};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(a)&&p)return;he(v.relativePath.startsWith(a),`Absolute route path "${v.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(a.length)}let w=nr([a,v.relativePath]),S=i.concat(v);f.children&&f.children.length>0&&(he(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),__(f.children,t,S,w,p)),!(f.path==null&&!f.index)&&t.push({path:w,score:Gw(w,f.index),routesMeta:S})};return n.forEach((f,m)=>{if(f.path===""||!f.path?.includes("?"))u(f,m);else for(let p of E_(f.path))u(f,m,!0,p)}),t}function E_(n){let t=n.split("/");if(t.length===0)return[];let[i,...a]=t,o=i.endsWith("?"),u=i.replace(/\?$/,"");if(a.length===0)return o?[u,""]:[u];let f=E_(a.join("/")),m=[];return m.push(...f.map(p=>p===""?u:[u,p].join("/"))),o&&m.push(...f),m.map(p=>n.startsWith("/")&&p===""?"/":p)}function zw(n){n.sort((t,i)=>t.score!==i.score?i.score-t.score:Yw(t.routesMeta.map(a=>a.childrenIndex),i.routesMeta.map(a=>a.childrenIndex)))}var Bw=/^:[\w-]+$/,$w=3,Fw=2,qw=1,Kw=10,Hw=-2,rx=n=>n==="*";function Gw(n,t){let i=n.split("/"),a=i.length;return i.some(rx)&&(a+=Hw),t&&(a+=Fw),i.filter(o=>!rx(o)).reduce((o,u)=>o+(Bw.test(u)?$w:u===""?qw:Kw),a)}function Yw(n,t){return n.length===t.length&&n.slice(0,-1).every((a,o)=>a===t[o])?n[n.length-1]-t[t.length-1]:0}function Qw(n,t,i=!1){let{routesMeta:a}=n,o={},u="/",f=[];for(let m=0;m<a.length;++m){let p=a[m],g=m===a.length-1,v=u==="/"?t:t.slice(u.length)||"/",w=hh({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},v),S=p.route;if(!w&&g&&i&&!a[a.length-1].route.index&&(w=hh({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},v)),!w)return null;Object.assign(o,w.params),f.push({params:o,pathname:nr([u,w.pathname]),pathnameBase:eT(nr([u,w.pathnameBase])),route:S}),w.pathnameBase!=="/"&&(u=nr([u,w.pathnameBase]))}return f}function hh(n,t){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[i,a]=Xw(n.path,n.caseSensitive,n.end),o=t.match(i);if(!o)return null;let u=o[0],f=u.replace(/(.)\/+$/,"$1"),m=o.slice(1);return{params:a.reduce((g,{paramName:v,isOptional:w},S)=>{if(v==="*"){let V=m[S]||"";f=u.slice(0,u.length-V.length).replace(/(.)\/+$/,"$1")}const R=m[S];return w&&!R?g[v]=void 0:g[v]=(R||"").replace(/%2F/g,"/"),g},{}),pathname:u,pathnameBase:f,pattern:n}}function Xw(n,t=!1,i=!0){ri(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let a=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,m,p)=>(a.push({paramName:m,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(a.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),a]}function Ww(n){try{return n.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ri(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),n}}function ar(n,t){if(t==="/")return n;if(!n.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,a=n.charAt(i);return a&&a!=="/"?null:n.slice(i)||"/"}function Zw(n,t="/"){let{pathname:i,search:a="",hash:o=""}=typeof n=="string"?po(n):n;return{pathname:i?i.startsWith("/")?i:Jw(i,t):t,search:nT(a),hash:iT(o)}}function Jw(n,t){let i=t.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?i.length>1&&i.pop():o!=="."&&i.push(o)}),i.length>1?i.join("/"):"/"}function lp(n,t,i,a){return`Cannot include a '${n}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function tT(n){return n.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function Am(n){let t=tT(n);return t.map((i,a)=>a===t.length-1?i.pathname:i.pathnameBase)}function Rm(n,t,i,a=!1){let o;typeof n=="string"?o=po(n):(o={...n},he(!o.pathname||!o.pathname.includes("?"),lp("?","pathname","search",o)),he(!o.pathname||!o.pathname.includes("#"),lp("#","pathname","hash",o)),he(!o.search||!o.search.includes("#"),lp("#","search","hash",o)));let u=n===""||o.pathname==="",f=u?"/":o.pathname,m;if(f==null)m=i;else{let w=t.length-1;if(!a&&f.startsWith("..")){let S=f.split("/");for(;S[0]==="..";)S.shift(),w-=1;o.pathname=S.join("/")}m=w>=0?t[w]:"/"}let p=Zw(o,m),g=f&&f!=="/"&&f.endsWith("/"),v=(u||f===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(g||v)&&(p.pathname+="/"),p}var nr=n=>n.join("/").replace(/\/\/+/g,"/"),eT=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),nT=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,iT=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function rT(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var b_=["POST","PUT","PATCH","DELETE"];new Set(b_);var aT=["GET",...b_];new Set(aT);var mo=K.createContext(null);mo.displayName="DataRouter";var Nh=K.createContext(null);Nh.displayName="DataRouterState";K.createContext(!1);var w_=K.createContext({isTransitioning:!1});w_.displayName="ViewTransition";var sT=K.createContext(new Map);sT.displayName="Fetchers";var oT=K.createContext(null);oT.displayName="Await";var si=K.createContext(null);si.displayName="Navigation";var go=K.createContext(null);go.displayName="Location";var Kn=K.createContext({outlet:null,matches:[],isDataRoute:!1});Kn.displayName="Route";var Cm=K.createContext(null);Cm.displayName="RouteError";function lT(n,{relative:t}={}){he(yo(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:a}=K.useContext(si),{hash:o,pathname:u,search:f}=lu(n,{relative:t}),m=u;return i!=="/"&&(m=u==="/"?i:nr([i,u])),a.createHref({pathname:m,search:f,hash:o})}function yo(){return K.useContext(go)!=null}function ji(){return he(yo(),"useLocation() may be used only in the context of a <Router> component."),K.useContext(go).location}function uT(){return K.useContext(go).navigationType}var T_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function S_(n){K.useContext(si).static||K.useLayoutEffect(n)}function Im(){let{isDataRoute:n}=K.useContext(Kn);return n?ST():cT()}function cT(){he(yo(),"useNavigate() may be used only in the context of a <Router> component.");let n=K.useContext(mo),{basename:t,navigator:i}=K.useContext(si),{matches:a}=K.useContext(Kn),{pathname:o}=ji(),u=JSON.stringify(Am(a)),f=K.useRef(!1);return S_(()=>{f.current=!0}),K.useCallback((p,g={})=>{if(ri(f.current,T_),!f.current)return;if(typeof p=="number"){i.go(p);return}let v=Rm(p,JSON.parse(u),o,g.relative==="path");n==null&&t!=="/"&&(v.pathname=v.pathname==="/"?t:nr([t,v.pathname])),(g.replace?i.replace:i.push)(v,g.state,g)},[t,i,u,o,n])}var hT=K.createContext(null);function fT(n){let t=K.useContext(Kn).outlet;return t&&K.createElement(hT.Provider,{value:n},t)}function dT(){let{matches:n}=K.useContext(Kn),t=n[n.length-1];return t?t.params:{}}function lu(n,{relative:t}={}){let{matches:i}=K.useContext(Kn),{pathname:a}=ji(),o=JSON.stringify(Am(i));return K.useMemo(()=>Rm(n,JSON.parse(o),a,t==="path"),[n,o,a,t])}function pT(n,t){return A_(n,t)}function A_(n,t,i,a,o){he(yo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=K.useContext(si),{matches:f}=K.useContext(Kn),m=f[f.length-1],p=m?m.params:{},g=m?m.pathname:"/",v=m?m.pathnameBase:"/",w=m&&m.route;{let Y=w&&w.path||"";R_(g,!w||Y.endsWith("*")||Y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${Y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Y}"> to <Route path="${Y==="/"?"*":`${Y}/*`}">.`)}let S=ji(),R;if(t){let Y=typeof t=="string"?po(t):t;he(v==="/"||Y.pathname?.startsWith(v),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${Y.pathname}" was given in the \`location\` prop.`),R=Y}else R=S;let V=R.pathname||"/",B=V;if(v!=="/"){let Y=v.replace(/^\//,"").split("/");B="/"+V.replace(/^\//,"").split("/").slice(Y.length).join("/")}let P=v_(n,{pathname:B});ri(w||P!=null,`No routes matched location "${R.pathname}${R.search}${R.hash}" `),ri(P==null||P[P.length-1].route.element!==void 0||P[P.length-1].route.Component!==void 0||P[P.length-1].route.lazy!==void 0,`Matched leaf route at location "${R.pathname}${R.search}${R.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let X=vT(P&&P.map(Y=>Object.assign({},Y,{params:Object.assign({},p,Y.params),pathname:nr([v,u.encodeLocation?u.encodeLocation(Y.pathname).pathname:Y.pathname]),pathnameBase:Y.pathnameBase==="/"?v:nr([v,u.encodeLocation?u.encodeLocation(Y.pathnameBase).pathname:Y.pathnameBase])})),f,i,a,o);return t&&X?K.createElement(go.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...R},navigationType:"POP"}},X):X}function mT(){let n=TT(),t=rT(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),i=n instanceof Error?n.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},u={padding:"2px 4px",backgroundColor:a},f=null;return console.error("Error handled by React Router default ErrorBoundary:",n),f=K.createElement(K.Fragment,null,K.createElement("p",null,"💿 Hey developer 👋"),K.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",K.createElement("code",{style:u},"ErrorBoundary")," or"," ",K.createElement("code",{style:u},"errorElement")," prop on your route.")),K.createElement(K.Fragment,null,K.createElement("h2",null,"Unexpected Application Error!"),K.createElement("h3",{style:{fontStyle:"italic"}},t),i?K.createElement("pre",{style:o},i):null,f)}var gT=K.createElement(mT,null),yT=class extends K.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){this.props.unstable_onError?this.props.unstable_onError(n,t):console.error("React Router caught the following error during render",n)}render(){return this.state.error!==void 0?K.createElement(Kn.Provider,{value:this.props.routeContext},K.createElement(Cm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function xT({routeContext:n,match:t,children:i}){let a=K.useContext(mo);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),K.createElement(Kn.Provider,{value:n},i)}function vT(n,t=[],i=null,a=null,o=null){if(n==null){if(!i)return null;if(i.errors)n=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)n=i.matches;else return null}let u=n,f=i?.errors;if(f!=null){let g=u.findIndex(v=>v.route.id&&f?.[v.route.id]!==void 0);he(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),u=u.slice(0,Math.min(u.length,g+1))}let m=!1,p=-1;if(i)for(let g=0;g<u.length;g++){let v=u[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(p=g),v.route.id){let{loaderData:w,errors:S}=i,R=v.route.loader&&!w.hasOwnProperty(v.route.id)&&(!S||S[v.route.id]===void 0);if(v.route.lazy||R){m=!0,p>=0?u=u.slice(0,p+1):u=[u[0]];break}}}return u.reduceRight((g,v,w)=>{let S,R=!1,V=null,B=null;i&&(S=f&&v.route.id?f[v.route.id]:void 0,V=v.route.errorElement||gT,m&&(p<0&&w===0?(R_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),R=!0,B=null):p===w&&(R=!0,B=v.route.hydrateFallbackElement||null)));let P=t.concat(u.slice(0,w+1)),X=()=>{let Y;return S?Y=V:R?Y=B:v.route.Component?Y=K.createElement(v.route.Component,null):v.route.element?Y=v.route.element:Y=g,K.createElement(xT,{match:v,routeContext:{outlet:g,matches:P,isDataRoute:i!=null},children:Y})};return i&&(v.route.ErrorBoundary||v.route.errorElement||w===0)?K.createElement(yT,{location:i.location,revalidation:i.revalidation,component:V,error:S,children:X(),routeContext:{outlet:null,matches:P,isDataRoute:!0},unstable_onError:a}):X()},null)}function jm(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function _T(n){let t=K.useContext(mo);return he(t,jm(n)),t}function ET(n){let t=K.useContext(Nh);return he(t,jm(n)),t}function bT(n){let t=K.useContext(Kn);return he(t,jm(n)),t}function Dm(n){let t=bT(n),i=t.matches[t.matches.length-1];return he(i.route.id,`${n} can only be used on routes that contain a unique "id"`),i.route.id}function wT(){return Dm("useRouteId")}function TT(){let n=K.useContext(Cm),t=ET("useRouteError"),i=Dm("useRouteError");return n!==void 0?n:t.errors?.[i]}function ST(){let{router:n}=_T("useNavigate"),t=Dm("useNavigate"),i=K.useRef(!1);return S_(()=>{i.current=!0}),K.useCallback(async(o,u={})=>{ri(i.current,T_),i.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:t,...u}))},[n,t])}var ax={};function R_(n,t,i){!t&&!ax[n]&&(ax[n]=!0,ri(!1,i))}K.memo(AT);function AT({routes:n,future:t,state:i,unstable_onError:a}){return A_(n,void 0,i,a,t)}function RT({to:n,replace:t,state:i,relative:a}){he(yo(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=K.useContext(si);ri(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=K.useContext(Kn),{pathname:f}=ji(),m=Im(),p=Rm(n,Am(u),f,a==="path"),g=JSON.stringify(p);return K.useEffect(()=>{m(JSON.parse(g),{replace:t,state:i,relative:a})},[m,g,a,t,i]),null}function CT(n){return fT(n.context)}function tr(n){he(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function IT({basename:n="/",children:t=null,location:i,navigationType:a="POP",navigator:o,static:u=!1}){he(!yo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=n.replace(/^\/*/,"/"),m=K.useMemo(()=>({basename:f,navigator:o,static:u,future:{}}),[f,o,u]);typeof i=="string"&&(i=po(i));let{pathname:p="/",search:g="",hash:v="",state:w=null,key:S="default"}=i,R=K.useMemo(()=>{let V=ar(p,f);return V==null?null:{location:{pathname:V,search:g,hash:v,state:w,key:S},navigationType:a}},[f,p,g,v,w,S,a]);return ri(R!=null,`<Router basename="${f}"> is not able to match the URL "${p}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),R==null?null:K.createElement(si.Provider,{value:m},K.createElement(go.Provider,{children:t,value:R}))}function jT({children:n,location:t}){return pT(Bp(n),t)}function Bp(n,t=[]){let i=[];return K.Children.forEach(n,(a,o)=>{if(!K.isValidElement(a))return;let u=[...t,o];if(a.type===K.Fragment){i.push.apply(i,Bp(a.props.children,u));return}he(a.type===tr,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),he(!a.props.index||!a.props.children,"An index route cannot have child routes.");let f={id:a.props.id||u.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(f.children=Bp(a.props.children,u)),i.push(f)}),i}var Wc="get",Zc="application/x-www-form-urlencoded";function Mh(n){return n!=null&&typeof n.tagName=="string"}function DT(n){return Mh(n)&&n.tagName.toLowerCase()==="button"}function NT(n){return Mh(n)&&n.tagName.toLowerCase()==="form"}function MT(n){return Mh(n)&&n.tagName.toLowerCase()==="input"}function OT(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function VT(n,t){return n.button===0&&(!t||t==="_self")&&!OT(n)}var Pc=null;function kT(){if(Pc===null)try{new FormData(document.createElement("form"),0),Pc=!1}catch{Pc=!0}return Pc}var UT=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function up(n){return n!=null&&!UT.has(n)?(ri(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Zc}"`),null):n}function PT(n,t){let i,a,o,u,f;if(NT(n)){let m=n.getAttribute("action");a=m?ar(m,t):null,i=n.getAttribute("method")||Wc,o=up(n.getAttribute("enctype"))||Zc,u=new FormData(n)}else if(DT(n)||MT(n)&&(n.type==="submit"||n.type==="image")){let m=n.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||m.getAttribute("action");if(a=p?ar(p,t):null,i=n.getAttribute("formmethod")||m.getAttribute("method")||Wc,o=up(n.getAttribute("formenctype"))||up(m.getAttribute("enctype"))||Zc,u=new FormData(m,n),!kT()){let{name:g,type:v,value:w}=n;if(v==="image"){let S=g?`${g}.`:"";u.append(`${S}x`,"0"),u.append(`${S}y`,"0")}else g&&u.append(g,w)}}else{if(Mh(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Wc,a=null,o=Zc,f=n}return u&&o==="text/plain"&&(f=u,u=void 0),{action:a,method:i.toLowerCase(),encType:o,formData:u,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Nm(n,t){if(n===!1||n===null||typeof n>"u")throw new Error(t)}function LT(n,t,i){let a=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return a.pathname==="/"?a.pathname=`_root.${i}`:t&&ar(a.pathname,t)==="/"?a.pathname=`${t.replace(/\/$/,"")}/_root.${i}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${i}`,a}async function zT(n,t){if(n.id in t)return t[n.id];try{let i=await import(n.module);return t[n.id]=i,i}catch(i){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function BT(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function $T(n,t,i){let a=await Promise.all(n.map(async o=>{let u=t.routes[o.route.id];if(u){let f=await zT(u,i);return f.links?f.links():[]}return[]}));return HT(a.flat(1).filter(BT).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function sx(n,t,i,a,o,u){let f=(p,g)=>i[g]?p.route.id!==i[g].route.id:!0,m=(p,g)=>i[g].pathname!==p.pathname||i[g].route.path?.endsWith("*")&&i[g].params["*"]!==p.params["*"];return u==="assets"?t.filter((p,g)=>f(p,g)||m(p,g)):u==="data"?t.filter((p,g)=>{let v=a.routes[p.route.id];if(!v||!v.hasLoader)return!1;if(f(p,g)||m(p,g))return!0;if(p.route.shouldRevalidate){let w=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function FT(n,t,{includeHydrateFallback:i}={}){return qT(n.map(a=>{let o=t.routes[a.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),i&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function qT(n){return[...new Set(n)]}function KT(n){let t={},i=Object.keys(n).sort();for(let a of i)t[a]=n[a];return t}function HT(n,t){let i=new Set;return new Set(t),n.reduce((a,o)=>{let u=JSON.stringify(KT(o));return i.has(u)||(i.add(u),a.push({key:u,link:o})),a},[])}function C_(){let n=K.useContext(mo);return Nm(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function GT(){let n=K.useContext(Nh);return Nm(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Mm=K.createContext(void 0);Mm.displayName="FrameworkContext";function I_(){let n=K.useContext(Mm);return Nm(n,"You must render this element inside a <HydratedRouter> element"),n}function YT(n,t){let i=K.useContext(Mm),[a,o]=K.useState(!1),[u,f]=K.useState(!1),{onFocus:m,onBlur:p,onMouseEnter:g,onMouseLeave:v,onTouchStart:w}=t,S=K.useRef(null);K.useEffect(()=>{if(n==="render"&&f(!0),n==="viewport"){let B=X=>{X.forEach(Y=>{f(Y.isIntersecting)})},P=new IntersectionObserver(B,{threshold:.5});return S.current&&P.observe(S.current),()=>{P.disconnect()}}},[n]),K.useEffect(()=>{if(a){let B=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(B)}}},[a]);let R=()=>{o(!0)},V=()=>{o(!1),f(!1)};return i?n!=="intent"?[u,S,{}]:[u,S,{onFocus:Nl(m,R),onBlur:Nl(p,V),onMouseEnter:Nl(g,R),onMouseLeave:Nl(v,V),onTouchStart:Nl(w,R)}]:[!1,S,{}]}function Nl(n,t){return i=>{n&&n(i),i.defaultPrevented||t(i)}}function QT({page:n,...t}){let{router:i}=C_(),a=K.useMemo(()=>v_(i.routes,n,i.basename),[i.routes,n,i.basename]);return a?K.createElement(WT,{page:n,matches:a,...t}):null}function XT(n){let{manifest:t,routeModules:i}=I_(),[a,o]=K.useState([]);return K.useEffect(()=>{let u=!1;return $T(n,t,i).then(f=>{u||o(f)}),()=>{u=!0}},[n,t,i]),a}function WT({page:n,matches:t,...i}){let a=ji(),{manifest:o,routeModules:u}=I_(),{basename:f}=C_(),{loaderData:m,matches:p}=GT(),g=K.useMemo(()=>sx(n,t,p,o,a,"data"),[n,t,p,o,a]),v=K.useMemo(()=>sx(n,t,p,o,a,"assets"),[n,t,p,o,a]),w=K.useMemo(()=>{if(n===a.pathname+a.search+a.hash)return[];let V=new Set,B=!1;if(t.forEach(X=>{let Y=o.routes[X.route.id];!Y||!Y.hasLoader||(!g.some(J=>J.route.id===X.route.id)&&X.route.id in m&&u[X.route.id]?.shouldRevalidate||Y.hasClientLoader?B=!0:V.add(X.route.id))}),V.size===0)return[];let P=LT(n,f,"data");return B&&V.size>0&&P.searchParams.set("_routes",t.filter(X=>V.has(X.route.id)).map(X=>X.route.id).join(",")),[P.pathname+P.search]},[f,m,a,o,g,t,n,u]),S=K.useMemo(()=>FT(v,o),[v,o]),R=XT(v);return K.createElement(K.Fragment,null,w.map(V=>K.createElement("link",{key:V,rel:"prefetch",as:"fetch",href:V,...i})),S.map(V=>K.createElement("link",{key:V,rel:"modulepreload",href:V,...i})),R.map(({key:V,link:B})=>K.createElement("link",{key:V,nonce:i.nonce,...B})))}function ZT(...n){return t=>{n.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var j_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{j_&&(window.__reactRouterVersion="7.9.1")}catch{}function JT({basename:n,children:t,window:i}){let a=K.useRef();a.current==null&&(a.current=Vw({window:i,v5Compat:!0}));let o=a.current,[u,f]=K.useState({action:o.action,location:o.location}),m=K.useCallback(p=>{K.startTransition(()=>f(p))},[f]);return K.useLayoutEffect(()=>o.listen(m),[o,m]),K.createElement(IT,{basename:n,children:t,location:u.location,navigationType:u.action,navigator:o})}var D_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xo=K.forwardRef(function({onClick:t,discover:i="render",prefetch:a="none",relative:o,reloadDocument:u,replace:f,state:m,target:p,to:g,preventScrollReset:v,viewTransition:w,...S},R){let{basename:V}=K.useContext(si),B=typeof g=="string"&&D_.test(g),P,X=!1;if(typeof g=="string"&&B&&(P=g,j_))try{let I=new URL(window.location.href),M=g.startsWith("//")?new URL(I.protocol+g):new URL(g),k=ar(M.pathname,V);M.origin===I.origin&&k!=null?g=k+M.search+M.hash:X=!0}catch{ri(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Y=lT(g,{relative:o}),[J,ot,Z]=YT(a,S),ft=iS(g,{replace:f,state:m,target:p,preventScrollReset:v,relative:o,viewTransition:w});function j(I){t&&t(I),I.defaultPrevented||ft(I)}let C=K.createElement("a",{...S,...Z,href:P||Y,onClick:X||u?t:j,ref:ZT(R,ot),target:p,"data-discover":!B&&i==="render"?"true":void 0});return J&&!B?K.createElement(K.Fragment,null,C,K.createElement(QT,{page:Y})):C});xo.displayName="Link";var tS=K.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:a="",end:o=!1,style:u,to:f,viewTransition:m,children:p,...g},v){let w=lu(f,{relative:g.relative}),S=ji(),R=K.useContext(Nh),{navigator:V,basename:B}=K.useContext(si),P=R!=null&&lS(w)&&m===!0,X=V.encodeLocation?V.encodeLocation(w).pathname:w.pathname,Y=S.pathname,J=R&&R.navigation&&R.navigation.location?R.navigation.location.pathname:null;i||(Y=Y.toLowerCase(),J=J?J.toLowerCase():null,X=X.toLowerCase()),J&&B&&(J=ar(J,B)||J);const ot=X!=="/"&&X.endsWith("/")?X.length-1:X.length;let Z=Y===X||!o&&Y.startsWith(X)&&Y.charAt(ot)==="/",ft=J!=null&&(J===X||!o&&J.startsWith(X)&&J.charAt(X.length)==="/"),j={isActive:Z,isPending:ft,isTransitioning:P},C=Z?t:void 0,I;typeof a=="function"?I=a(j):I=[a,Z?"active":null,ft?"pending":null,P?"transitioning":null].filter(Boolean).join(" ");let M=typeof u=="function"?u(j):u;return K.createElement(xo,{...g,"aria-current":C,className:I,ref:v,style:M,to:f,viewTransition:m},typeof p=="function"?p(j):p)});tS.displayName="NavLink";var eS=K.forwardRef(({discover:n="render",fetcherKey:t,navigate:i,reloadDocument:a,replace:o,state:u,method:f=Wc,action:m,onSubmit:p,relative:g,preventScrollReset:v,viewTransition:w,...S},R)=>{let V=sS(),B=oS(m,{relative:g}),P=f.toLowerCase()==="get"?"get":"post",X=typeof m=="string"&&D_.test(m),Y=J=>{if(p&&p(J),J.defaultPrevented)return;J.preventDefault();let ot=J.nativeEvent.submitter,Z=ot?.getAttribute("formmethod")||f;V(ot||J.currentTarget,{fetcherKey:t,method:Z,navigate:i,replace:o,state:u,relative:g,preventScrollReset:v,viewTransition:w})};return K.createElement("form",{ref:R,method:P,action:B,onSubmit:a?p:Y,...S,"data-discover":!X&&n==="render"?"true":void 0})});eS.displayName="Form";function nS(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function N_(n){let t=K.useContext(mo);return he(t,nS(n)),t}function iS(n,{target:t,replace:i,state:a,preventScrollReset:o,relative:u,viewTransition:f}={}){let m=Im(),p=ji(),g=lu(n,{relative:u});return K.useCallback(v=>{if(VT(v,t)){v.preventDefault();let w=i!==void 0?i:Yl(p)===Yl(g);m(n,{replace:w,state:a,preventScrollReset:o,relative:u,viewTransition:f})}},[p,m,g,i,a,t,n,o,u,f])}var rS=0,aS=()=>`__${String(++rS)}__`;function sS(){let{router:n}=N_("useSubmit"),{basename:t}=K.useContext(si),i=wT();return K.useCallback(async(a,o={})=>{let{action:u,method:f,encType:m,formData:p,body:g}=PT(a,t);if(o.navigate===!1){let v=o.fetcherKey||aS();await n.fetch(v,i,o.action||u,{preventScrollReset:o.preventScrollReset,formData:p,body:g,formMethod:o.method||f,formEncType:o.encType||m,flushSync:o.flushSync})}else await n.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:p,body:g,formMethod:o.method||f,formEncType:o.encType||m,replace:o.replace,state:o.state,fromRouteId:i,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,t,i])}function oS(n,{relative:t}={}){let{basename:i}=K.useContext(si),a=K.useContext(Kn);he(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),u={...lu(n||".",{relative:t})},f=ji();if(n==null){u.search=f.search;let m=new URLSearchParams(u.search),p=m.getAll("index");if(p.some(v=>v==="")){m.delete("index"),p.filter(w=>w).forEach(w=>m.append("index",w));let v=m.toString();u.search=v?`?${v}`:""}}return(!n||n===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:nr([i,u.pathname])),Yl(u)}function lS(n,{relative:t}={}){let i=K.useContext(w_);he(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=N_("useViewTransitionState"),o=lu(n,{relative:t});if(!i.isTransitioning)return!1;let u=ar(i.currentLocation.pathname,a)||i.currentLocation.pathname,f=ar(i.nextLocation.pathname,a)||i.nextLocation.pathname;return hh(o.pathname,f)!=null||hh(o.pathname,u)!=null}var cp={exports:{}},nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ox;function uS(){if(ox)return nn;ox=1;var n=Sm();function t(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,g,v){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:w==null?null:""+w,children:p,containerInfo:g,implementation:v}}var f=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,nn.createPortal=function(p,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return u(p,g,null,v)},nn.flushSync=function(p){var g=f.T,v=a.p;try{if(f.T=null,a.p=2,p)return p()}finally{f.T=g,a.p=v,a.d.f()}},nn.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,a.d.C(p,g))},nn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},nn.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var v=g.as,w=m(v,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,R=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?a.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:w,integrity:S,fetchPriority:R}):v==="script"&&a.d.X(p,{crossOrigin:w,integrity:S,fetchPriority:R,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},nn.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=m(g.as,g.crossOrigin);a.d.M(p,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&a.d.M(p)},nn.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,w=m(v,g.crossOrigin);a.d.L(p,v,{crossOrigin:w,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},nn.preloadModule=function(p,g){if(typeof p=="string")if(g){var v=m(g.as,g.crossOrigin);a.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else a.d.m(p)},nn.requestFormReset=function(p){a.d.r(p)},nn.unstable_batchedUpdates=function(p,g){return p(g)},nn.useFormState=function(p,g,v){return f.H.useFormState(p,g,v)},nn.useFormStatus=function(){return f.H.useHostTransitionStatus()},nn.version="19.1.1",nn}var lx;function cS(){if(lx)return cp.exports;lx=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}return n(),cp.exports=uS(),cp.exports}var hp={exports:{}},fp,ux;function hS(){if(ux)return fp;ux=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return fp=n,fp}var dp,cx;function fS(){if(cx)return dp;cx=1;var n=hS();function t(){}function i(){}return i.resetWarningCache=t,dp=function(){function a(f,m,p,g,v,w){if(w!==n){var S=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw S.name="Invariant Violation",S}}a.isRequired=a;function o(){return a}var u={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:o,element:a,elementType:a,instanceOf:o,node:a,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:i,resetWarningCache:t};return u.PropTypes=u,u},dp}var hx;function dS(){return hx||(hx=1,hp.exports=fS()()),hp.exports}var pS=dS();const W=x_(pS);var vn=function(){return vn=Object.assign||function(t){for(var i,a=1,o=arguments.length;a<o;a++){i=arguments[a];for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&(t[u]=i[u])}return t},vn.apply(this,arguments)};function fh(n,t,i){if(i||arguments.length===2)for(var a=0,o=t.length,u;a<o;a++)(u||!(a in t))&&(u||(u=Array.prototype.slice.call(t,0,a)),u[a]=t[a]);return n.concat(u||Array.prototype.slice.call(t))}var oe="-ms-",zl="-moz-",Ht="-webkit-",M_="comm",Oh="rule",Om="decl",mS="@import",O_="@keyframes",gS="@layer",V_=Math.abs,Vm=String.fromCharCode,$p=Object.assign;function yS(n,t){return Ke(n,0)^45?(((t<<2^Ke(n,0))<<2^Ke(n,1))<<2^Ke(n,2))<<2^Ke(n,3):0}function k_(n){return n.trim()}function er(n,t){return(n=t.exec(n))?n[0]:n}function Dt(n,t,i){return n.replace(t,i)}function Jc(n,t,i){return n.indexOf(t,i)}function Ke(n,t){return n.charCodeAt(t)|0}function no(n,t,i){return n.slice(t,i)}function bi(n){return n.length}function U_(n){return n.length}function Vl(n,t){return t.push(n),n}function xS(n,t){return n.map(t).join("")}function fx(n,t){return n.filter(function(i){return!er(i,t)})}var Vh=1,io=1,P_=0,qn=0,je=0,vo="";function kh(n,t,i,a,o,u,f,m){return{value:n,root:t,parent:i,type:a,props:o,children:u,line:Vh,column:io,length:f,return:"",siblings:m}}function Gr(n,t){return $p(kh("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},t)}function Hs(n){for(;n.root;)n=Gr(n.root,{children:[n]});Vl(n,n.siblings)}function vS(){return je}function _S(){return je=qn>0?Ke(vo,--qn):0,io--,je===10&&(io=1,Vh--),je}function ii(){return je=qn<P_?Ke(vo,qn++):0,io++,je===10&&(io=1,Vh++),je}function Ya(){return Ke(vo,qn)}function th(){return qn}function Uh(n,t){return no(vo,n,t)}function Fp(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ES(n){return Vh=io=1,P_=bi(vo=n),qn=0,[]}function bS(n){return vo="",n}function pp(n){return k_(Uh(qn-1,qp(n===91?n+2:n===40?n+1:n)))}function wS(n){for(;(je=Ya())&&je<33;)ii();return Fp(n)>2||Fp(je)>3?"":" "}function TS(n,t){for(;--t&&ii()&&!(je<48||je>102||je>57&&je<65||je>70&&je<97););return Uh(n,th()+(t<6&&Ya()==32&&ii()==32))}function qp(n){for(;ii();)switch(je){case n:return qn;case 34:case 39:n!==34&&n!==39&&qp(je);break;case 40:n===41&&qp(n);break;case 92:ii();break}return qn}function SS(n,t){for(;ii()&&n+je!==57;)if(n+je===84&&Ya()===47)break;return"/*"+Uh(t,qn-1)+"*"+Vm(n===47?n:ii())}function AS(n){for(;!Fp(Ya());)ii();return Uh(n,qn)}function RS(n){return bS(eh("",null,null,null,[""],n=ES(n),0,[0],n))}function eh(n,t,i,a,o,u,f,m,p){for(var g=0,v=0,w=f,S=0,R=0,V=0,B=1,P=1,X=1,Y=0,J="",ot=o,Z=u,ft=a,j=J;P;)switch(V=Y,Y=ii()){case 40:if(V!=108&&Ke(j,w-1)==58){Jc(j+=Dt(pp(Y),"&","&\f"),"&\f",V_(g?m[g-1]:0))!=-1&&(X=-1);break}case 34:case 39:case 91:j+=pp(Y);break;case 9:case 10:case 13:case 32:j+=wS(V);break;case 92:j+=TS(th()-1,7);continue;case 47:switch(Ya()){case 42:case 47:Vl(CS(SS(ii(),th()),t,i,p),p);break;default:j+="/"}break;case 123*B:m[g++]=bi(j)*X;case 125*B:case 59:case 0:switch(Y){case 0:case 125:P=0;case 59+v:X==-1&&(j=Dt(j,/\f/g,"")),R>0&&bi(j)-w&&Vl(R>32?px(j+";",a,i,w-1,p):px(Dt(j," ","")+";",a,i,w-2,p),p);break;case 59:j+=";";default:if(Vl(ft=dx(j,t,i,g,v,o,m,J,ot=[],Z=[],w,u),u),Y===123)if(v===0)eh(j,t,ft,ft,ot,u,w,m,Z);else switch(S===99&&Ke(j,3)===110?100:S){case 100:case 108:case 109:case 115:eh(n,ft,ft,a&&Vl(dx(n,ft,ft,0,0,o,m,J,o,ot=[],w,Z),Z),o,Z,w,m,a?ot:Z);break;default:eh(j,ft,ft,ft,[""],Z,0,m,Z)}}g=v=R=0,B=X=1,J=j="",w=f;break;case 58:w=1+bi(j),R=V;default:if(B<1){if(Y==123)--B;else if(Y==125&&B++==0&&_S()==125)continue}switch(j+=Vm(Y),Y*B){case 38:X=v>0?1:(j+="\f",-1);break;case 44:m[g++]=(bi(j)-1)*X,X=1;break;case 64:Ya()===45&&(j+=pp(ii())),S=Ya(),v=w=bi(J=j+=AS(th())),Y++;break;case 45:V===45&&bi(j)==2&&(B=0)}}return u}function dx(n,t,i,a,o,u,f,m,p,g,v,w){for(var S=o-1,R=o===0?u:[""],V=U_(R),B=0,P=0,X=0;B<a;++B)for(var Y=0,J=no(n,S+1,S=V_(P=f[B])),ot=n;Y<V;++Y)(ot=k_(P>0?R[Y]+" "+J:Dt(J,/&\f/g,R[Y])))&&(p[X++]=ot);return kh(n,t,i,o===0?Oh:m,p,g,v,w)}function CS(n,t,i,a){return kh(n,t,i,M_,Vm(vS()),no(n,2,-2),0,a)}function px(n,t,i,a,o){return kh(n,t,i,Om,no(n,0,a),no(n,a+1,-1),a,o)}function L_(n,t,i){switch(yS(n,t)){case 5103:return Ht+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ht+n+n;case 4789:return zl+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Ht+n+zl+n+oe+n+n;case 5936:switch(Ke(n,t+11)){case 114:return Ht+n+oe+Dt(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Ht+n+oe+Dt(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Ht+n+oe+Dt(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Ht+n+oe+n+n;case 6165:return Ht+n+oe+"flex-"+n+n;case 5187:return Ht+n+Dt(n,/(\w+).+(:[^]+)/,Ht+"box-$1$2"+oe+"flex-$1$2")+n;case 5443:return Ht+n+oe+"flex-item-"+Dt(n,/flex-|-self/g,"")+(er(n,/flex-|baseline/)?"":oe+"grid-row-"+Dt(n,/flex-|-self/g,""))+n;case 4675:return Ht+n+oe+"flex-line-pack"+Dt(n,/align-content|flex-|-self/g,"")+n;case 5548:return Ht+n+oe+Dt(n,"shrink","negative")+n;case 5292:return Ht+n+oe+Dt(n,"basis","preferred-size")+n;case 6060:return Ht+"box-"+Dt(n,"-grow","")+Ht+n+oe+Dt(n,"grow","positive")+n;case 4554:return Ht+Dt(n,/([^-])(transform)/g,"$1"+Ht+"$2")+n;case 6187:return Dt(Dt(Dt(n,/(zoom-|grab)/,Ht+"$1"),/(image-set)/,Ht+"$1"),n,"")+n;case 5495:case 3959:return Dt(n,/(image-set\([^]*)/,Ht+"$1$`$1");case 4968:return Dt(Dt(n,/(.+:)(flex-)?(.*)/,Ht+"box-pack:$3"+oe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ht+n+n;case 4200:if(!er(n,/flex-|baseline/))return oe+"grid-column-align"+no(n,t)+n;break;case 2592:case 3360:return oe+Dt(n,"template-","")+n;case 4384:case 3616:return i&&i.some(function(a,o){return t=o,er(a.props,/grid-\w+-end/)})?~Jc(n+(i=i[t].value),"span",0)?n:oe+Dt(n,"-start","")+n+oe+"grid-row-span:"+(~Jc(i,"span",0)?er(i,/\d+/):+er(i,/\d+/)-+er(n,/\d+/))+";":oe+Dt(n,"-start","")+n;case 4896:case 4128:return i&&i.some(function(a){return er(a.props,/grid-\w+-start/)})?n:oe+Dt(Dt(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Dt(n,/(.+)-inline(.+)/,Ht+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(bi(n)-1-t>6)switch(Ke(n,t+1)){case 109:if(Ke(n,t+4)!==45)break;case 102:return Dt(n,/(.+:)(.+)-([^]+)/,"$1"+Ht+"$2-$3$1"+zl+(Ke(n,t+3)==108?"$3":"$2-$3"))+n;case 115:return~Jc(n,"stretch",0)?L_(Dt(n,"stretch","fill-available"),t,i)+n:n}break;case 5152:case 5920:return Dt(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,o,u,f,m,p,g){return oe+o+":"+u+g+(f?oe+o+"-span:"+(m?p:+p-+u)+g:"")+n});case 4949:if(Ke(n,t+6)===121)return Dt(n,":",":"+Ht)+n;break;case 6444:switch(Ke(n,Ke(n,14)===45?18:11)){case 120:return Dt(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ht+(Ke(n,14)===45?"inline-":"")+"box$3$1"+Ht+"$2$3$1"+oe+"$2box$3")+n;case 100:return Dt(n,":",":"+oe)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Dt(n,"scroll-","scroll-snap-")+n}return n}function dh(n,t){for(var i="",a=0;a<n.length;a++)i+=t(n[a],a,n,t)||"";return i}function IS(n,t,i,a){switch(n.type){case gS:if(n.children.length)break;case mS:case Om:return n.return=n.return||n.value;case M_:return"";case O_:return n.return=n.value+"{"+dh(n.children,a)+"}";case Oh:if(!bi(n.value=n.props.join(",")))return""}return bi(i=dh(n.children,a))?n.return=n.value+"{"+i+"}":""}function jS(n){var t=U_(n);return function(i,a,o,u){for(var f="",m=0;m<t;m++)f+=n[m](i,a,o,u)||"";return f}}function DS(n){return function(t){t.root||(t=t.return)&&n(t)}}function NS(n,t,i,a){if(n.length>-1&&!n.return)switch(n.type){case Om:n.return=L_(n.value,n.length,i);return;case O_:return dh([Gr(n,{value:Dt(n.value,"@","@"+Ht)})],a);case Oh:if(n.length)return xS(i=n.props,function(o){switch(er(o,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Hs(Gr(n,{props:[Dt(o,/:(read-\w+)/,":"+zl+"$1")]})),Hs(Gr(n,{props:[o]})),$p(n,{props:fx(i,a)});break;case"::placeholder":Hs(Gr(n,{props:[Dt(o,/:(plac\w+)/,":"+Ht+"input-$1")]})),Hs(Gr(n,{props:[Dt(o,/:(plac\w+)/,":"+zl+"$1")]})),Hs(Gr(n,{props:[Dt(o,/:(plac\w+)/,oe+"input-$1")]})),Hs(Gr(n,{props:[o]})),$p(n,{props:fx(i,a)});break}return""})}}var MS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Cn={},ro=typeof process<"u"&&Cn!==void 0&&(Cn.REACT_APP_SC_ATTR||Cn.SC_ATTR)||"data-styled",z_="active",B_="data-styled-version",Ph="6.1.19",km=`/*!sc*/
`,ph=typeof window<"u"&&typeof document<"u",OS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Cn!==void 0&&Cn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Cn.REACT_APP_SC_DISABLE_SPEEDY!==""?Cn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Cn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Cn!==void 0&&Cn.SC_DISABLE_SPEEDY!==void 0&&Cn.SC_DISABLE_SPEEDY!==""&&Cn.SC_DISABLE_SPEEDY!=="false"&&Cn.SC_DISABLE_SPEEDY),Lh=Object.freeze([]),ao=Object.freeze({});function VS(n,t,i){return i===void 0&&(i=ao),n.theme!==i.theme&&n.theme||t||i.theme}var $_=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),kS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,US=/(^-|-$)/g;function mx(n){return n.replace(kS,"-").replace(US,"")}var PS=/(a)(d)/gi,Lc=52,gx=function(n){return String.fromCharCode(n+(n>25?39:97))};function Kp(n){var t,i="";for(t=Math.abs(n);t>Lc;t=t/Lc|0)i=gx(t%Lc)+i;return(gx(t%Lc)+i).replace(PS,"$1-$2")}var mp,F_=5381,Ws=function(n,t){for(var i=t.length;i;)n=33*n^t.charCodeAt(--i);return n},q_=function(n){return Ws(F_,n)};function LS(n){return Kp(q_(n)>>>0)}function zS(n){return n.displayName||n.name||"Component"}function gp(n){return typeof n=="string"&&!0}var K_=typeof Symbol=="function"&&Symbol.for,H_=K_?Symbol.for("react.memo"):60115,BS=K_?Symbol.for("react.forward_ref"):60112,$S={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},FS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},G_={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},qS=((mp={})[BS]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},mp[H_]=G_,mp);function yx(n){return("type"in(t=n)&&t.type.$$typeof)===H_?G_:"$$typeof"in n?qS[n.$$typeof]:$S;var t}var KS=Object.defineProperty,HS=Object.getOwnPropertyNames,xx=Object.getOwnPropertySymbols,GS=Object.getOwnPropertyDescriptor,YS=Object.getPrototypeOf,vx=Object.prototype;function Y_(n,t,i){if(typeof t!="string"){if(vx){var a=YS(t);a&&a!==vx&&Y_(n,a,i)}var o=HS(t);xx&&(o=o.concat(xx(t)));for(var u=yx(n),f=yx(t),m=0;m<o.length;++m){var p=o[m];if(!(p in FS||i&&i[p]||f&&p in f||u&&p in u)){var g=GS(t,p);try{KS(n,p,g)}catch{}}}}return n}function so(n){return typeof n=="function"}function Um(n){return typeof n=="object"&&"styledComponentId"in n}function Ha(n,t){return n&&t?"".concat(n," ").concat(t):n||t||""}function _x(n,t){if(n.length===0)return"";for(var i=n[0],a=1;a<n.length;a++)i+=n[a];return i}function Ql(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Hp(n,t,i){if(i===void 0&&(i=!1),!i&&!Ql(n)&&!Array.isArray(n))return t;if(Array.isArray(t))for(var a=0;a<t.length;a++)n[a]=Hp(n[a],t[a]);else if(Ql(t))for(var a in t)n[a]=Hp(n[a],t[a]);return n}function Pm(n,t){Object.defineProperty(n,"toString",{value:t})}function uu(n){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var QS=(function(){function n(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return n.prototype.indexOfGroup=function(t){for(var i=0,a=0;a<t;a++)i+=this.groupSizes[a];return i},n.prototype.insertRules=function(t,i){if(t>=this.groupSizes.length){for(var a=this.groupSizes,o=a.length,u=o;t>=u;)if((u<<=1)<0)throw uu(16,"".concat(t));this.groupSizes=new Uint32Array(u),this.groupSizes.set(a),this.length=u;for(var f=o;f<u;f++)this.groupSizes[f]=0}for(var m=this.indexOfGroup(t+1),p=(f=0,i.length);f<p;f++)this.tag.insertRule(m,i[f])&&(this.groupSizes[t]++,m++)},n.prototype.clearGroup=function(t){if(t<this.length){var i=this.groupSizes[t],a=this.indexOfGroup(t),o=a+i;this.groupSizes[t]=0;for(var u=a;u<o;u++)this.tag.deleteRule(a)}},n.prototype.getGroup=function(t){var i="";if(t>=this.length||this.groupSizes[t]===0)return i;for(var a=this.groupSizes[t],o=this.indexOfGroup(t),u=o+a,f=o;f<u;f++)i+="".concat(this.tag.getRule(f)).concat(km);return i},n})(),nh=new Map,mh=new Map,ih=1,zc=function(n){if(nh.has(n))return nh.get(n);for(;mh.has(ih);)ih++;var t=ih++;return nh.set(n,t),mh.set(t,n),t},XS=function(n,t){ih=t+1,nh.set(n,t),mh.set(t,n)},WS="style[".concat(ro,"][").concat(B_,'="').concat(Ph,'"]'),ZS=new RegExp("^".concat(ro,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),JS=function(n,t,i){for(var a,o=i.split(","),u=0,f=o.length;u<f;u++)(a=o[u])&&n.registerName(t,a)},tA=function(n,t){for(var i,a=((i=t.textContent)!==null&&i!==void 0?i:"").split(km),o=[],u=0,f=a.length;u<f;u++){var m=a[u].trim();if(m){var p=m.match(ZS);if(p){var g=0|parseInt(p[1],10),v=p[2];g!==0&&(XS(v,g),JS(n,v,p[3]),n.getTag().insertRules(g,o)),o.length=0}else o.push(m)}}},Ex=function(n){for(var t=document.querySelectorAll(WS),i=0,a=t.length;i<a;i++){var o=t[i];o&&o.getAttribute(ro)!==z_&&(tA(n,o),o.parentNode&&o.parentNode.removeChild(o))}};function eA(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Q_=function(n){var t=document.head,i=n||t,a=document.createElement("style"),o=(function(m){var p=Array.from(m.querySelectorAll("style[".concat(ro,"]")));return p[p.length-1]})(i),u=o!==void 0?o.nextSibling:null;a.setAttribute(ro,z_),a.setAttribute(B_,Ph);var f=eA();return f&&a.setAttribute("nonce",f),i.insertBefore(a,u),a},nA=(function(){function n(t){this.element=Q_(t),this.element.appendChild(document.createTextNode("")),this.sheet=(function(i){if(i.sheet)return i.sheet;for(var a=document.styleSheets,o=0,u=a.length;o<u;o++){var f=a[o];if(f.ownerNode===i)return f}throw uu(17)})(this.element),this.length=0}return n.prototype.insertRule=function(t,i){try{return this.sheet.insertRule(i,t),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},n.prototype.getRule=function(t){var i=this.sheet.cssRules[t];return i&&i.cssText?i.cssText:""},n})(),iA=(function(){function n(t){this.element=Q_(t),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(t,i){if(t<=this.length&&t>=0){var a=document.createTextNode(i);return this.element.insertBefore(a,this.nodes[t]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},n.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},n})(),rA=(function(){function n(t){this.rules=[],this.length=0}return n.prototype.insertRule=function(t,i){return t<=this.length&&(this.rules.splice(t,0,i),this.length++,!0)},n.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},n.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},n})(),bx=ph,aA={isServer:!ph,useCSSOMInjection:!OS},X_=(function(){function n(t,i,a){t===void 0&&(t=ao),i===void 0&&(i={});var o=this;this.options=vn(vn({},aA),t),this.gs=i,this.names=new Map(a),this.server=!!t.isServer,!this.server&&ph&&bx&&(bx=!1,Ex(this)),Pm(this,function(){return(function(u){for(var f=u.getTag(),m=f.length,p="",g=function(w){var S=(function(X){return mh.get(X)})(w);if(S===void 0)return"continue";var R=u.names.get(S),V=f.getGroup(w);if(R===void 0||!R.size||V.length===0)return"continue";var B="".concat(ro,".g").concat(w,'[id="').concat(S,'"]'),P="";R!==void 0&&R.forEach(function(X){X.length>0&&(P+="".concat(X,","))}),p+="".concat(V).concat(B,'{content:"').concat(P,'"}').concat(km)},v=0;v<m;v++)g(v);return p})(o)})}return n.registerId=function(t){return zc(t)},n.prototype.rehydrate=function(){!this.server&&ph&&Ex(this)},n.prototype.reconstructWithOptions=function(t,i){return i===void 0&&(i=!0),new n(vn(vn({},this.options),t),this.gs,i&&this.names||void 0)},n.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(t=(function(i){var a=i.useCSSOMInjection,o=i.target;return i.isServer?new rA(o):a?new nA(o):new iA(o)})(this.options),new QS(t)));var t},n.prototype.hasNameForId=function(t,i){return this.names.has(t)&&this.names.get(t).has(i)},n.prototype.registerName=function(t,i){if(zc(t),this.names.has(t))this.names.get(t).add(i);else{var a=new Set;a.add(i),this.names.set(t,a)}},n.prototype.insertRules=function(t,i,a){this.registerName(t,i),this.getTag().insertRules(zc(t),a)},n.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},n.prototype.clearRules=function(t){this.getTag().clearGroup(zc(t)),this.clearNames(t)},n.prototype.clearTag=function(){this.tag=void 0},n})(),sA=/&/g,oA=/^\s*\/\/.*$/gm;function W_(n,t){return n.map(function(i){return i.type==="rule"&&(i.value="".concat(t," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(t," ")),i.props=i.props.map(function(a){return"".concat(t," ").concat(a)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=W_(i.children,t)),i})}function lA(n){var t,i,a,o=ao,u=o.options,f=u===void 0?ao:u,m=o.plugins,p=m===void 0?Lh:m,g=function(S,R,V){return V.startsWith(i)&&V.endsWith(i)&&V.replaceAll(i,"").length>0?".".concat(t):S},v=p.slice();v.push(function(S){S.type===Oh&&S.value.includes("&")&&(S.props[0]=S.props[0].replace(sA,i).replace(a,g))}),f.prefix&&v.push(NS),v.push(IS);var w=function(S,R,V,B){R===void 0&&(R=""),V===void 0&&(V=""),B===void 0&&(B="&"),t=B,i=R,a=new RegExp("\\".concat(i,"\\b"),"g");var P=S.replace(oA,""),X=RS(V||R?"".concat(V," ").concat(R," { ").concat(P," }"):P);f.namespace&&(X=W_(X,f.namespace));var Y=[];return dh(X,jS(v.concat(DS(function(J){return Y.push(J)})))),Y};return w.hash=p.length?p.reduce(function(S,R){return R.name||uu(15),Ws(S,R.name)},F_).toString():"",w}var uA=new X_,Gp=lA(),Z_=Ot.createContext({shouldForwardProp:void 0,styleSheet:uA,stylis:Gp});Z_.Consumer;Ot.createContext(void 0);function wx(){return K.useContext(Z_)}var cA=(function(){function n(t,i){var a=this;this.inject=function(o,u){u===void 0&&(u=Gp);var f=a.name+u.hash;o.hasNameForId(a.id,f)||o.insertRules(a.id,f,u(a.rules,f,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=i,Pm(this,function(){throw uu(12,String(a.name))})}return n.prototype.getName=function(t){return t===void 0&&(t=Gp),this.name+t.hash},n})(),hA=function(n){return n>="A"&&n<="Z"};function Tx(n){for(var t="",i=0;i<n.length;i++){var a=n[i];if(i===1&&a==="-"&&n[0]==="-")return n;hA(a)?t+="-"+a.toLowerCase():t+=a}return t.startsWith("ms-")?"-"+t:t}var J_=function(n){return n==null||n===!1||n===""},tE=function(n){var t,i,a=[];for(var o in n){var u=n[o];n.hasOwnProperty(o)&&!J_(u)&&(Array.isArray(u)&&u.isCss||so(u)?a.push("".concat(Tx(o),":"),u,";"):Ql(u)?a.push.apply(a,fh(fh(["".concat(o," {")],tE(u),!1),["}"],!1)):a.push("".concat(Tx(o),": ").concat((t=o,(i=u)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||t in MS||t.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return a};function Qa(n,t,i,a){if(J_(n))return[];if(Um(n))return[".".concat(n.styledComponentId)];if(so(n)){if(!so(u=n)||u.prototype&&u.prototype.isReactComponent||!t)return[n];var o=n(t);return Qa(o,t,i,a)}var u;return n instanceof cA?i?(n.inject(i,a),[n.getName(a)]):[n]:Ql(n)?tE(n):Array.isArray(n)?Array.prototype.concat.apply(Lh,n.map(function(f){return Qa(f,t,i,a)})):[n.toString()]}function fA(n){for(var t=0;t<n.length;t+=1){var i=n[t];if(so(i)&&!Um(i))return!1}return!0}var dA=q_(Ph),pA=(function(){function n(t,i,a){this.rules=t,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&fA(t),this.componentId=i,this.baseHash=Ws(dA,i),this.baseStyle=a,X_.registerId(i)}return n.prototype.generateAndInjectStyles=function(t,i,a){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,i,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))o=Ha(o,this.staticRulesId);else{var u=_x(Qa(this.rules,t,i,a)),f=Kp(Ws(this.baseHash,u)>>>0);if(!i.hasNameForId(this.componentId,f)){var m=a(u,".".concat(f),void 0,this.componentId);i.insertRules(this.componentId,f,m)}o=Ha(o,f),this.staticRulesId=f}else{for(var p=Ws(this.baseHash,a.hash),g="",v=0;v<this.rules.length;v++){var w=this.rules[v];if(typeof w=="string")g+=w;else if(w){var S=_x(Qa(w,t,i,a));p=Ws(p,S+v),g+=S}}if(g){var R=Kp(p>>>0);i.hasNameForId(this.componentId,R)||i.insertRules(this.componentId,R,a(g,".".concat(R),void 0,this.componentId)),o=Ha(o,R)}}return o},n})(),eE=Ot.createContext(void 0);eE.Consumer;var yp={};function mA(n,t,i){var a=Um(n),o=n,u=!gp(n),f=t.attrs,m=f===void 0?Lh:f,p=t.componentId,g=p===void 0?(function(ot,Z){var ft=typeof ot!="string"?"sc":mx(ot);yp[ft]=(yp[ft]||0)+1;var j="".concat(ft,"-").concat(LS(Ph+ft+yp[ft]));return Z?"".concat(Z,"-").concat(j):j})(t.displayName,t.parentComponentId):p,v=t.displayName,w=v===void 0?(function(ot){return gp(ot)?"styled.".concat(ot):"Styled(".concat(zS(ot),")")})(n):v,S=t.displayName&&t.componentId?"".concat(mx(t.displayName),"-").concat(t.componentId):t.componentId||g,R=a&&o.attrs?o.attrs.concat(m).filter(Boolean):m,V=t.shouldForwardProp;if(a&&o.shouldForwardProp){var B=o.shouldForwardProp;if(t.shouldForwardProp){var P=t.shouldForwardProp;V=function(ot,Z){return B(ot,Z)&&P(ot,Z)}}else V=B}var X=new pA(i,S,a?o.componentStyle:void 0);function Y(ot,Z){return(function(ft,j,C){var I=ft.attrs,M=ft.componentStyle,k=ft.defaultProps,z=ft.foldedComponentIds,N=ft.styledComponentId,ue=ft.target,ne=Ot.useContext(eE),tt=wx(),ht=ft.shouldForwardProp||tt.shouldForwardProp,yt=VS(j,ne,k)||ao,Ct=(function(It,_t,ge){for(var Lt,Me=vn(vn({},_t),{className:void 0,theme:ge}),Ni=0;Ni<It.length;Ni+=1){var Hn=so(Lt=It[Ni])?Lt(Me):Lt;for(var on in Hn)Me[on]=on==="className"?Ha(Me[on],Hn[on]):on==="style"?vn(vn({},Me[on]),Hn[on]):Hn[on]}return _t.className&&(Me.className=Ha(Me.className,_t.className)),Me})(I,j,yt),O=Ct.as||ue,at={};for(var ut in Ct)Ct[ut]===void 0||ut[0]==="$"||ut==="as"||ut==="theme"&&Ct.theme===yt||(ut==="forwardedAs"?at.as=Ct.forwardedAs:ht&&!ht(ut,O)||(at[ut]=Ct[ut]));var ct=(function(It,_t){var ge=wx(),Lt=It.generateAndInjectStyles(_t,ge.styleSheet,ge.stylis);return Lt})(M,Ct),gt=Ha(z,N);return ct&&(gt+=" "+ct),Ct.className&&(gt+=" "+Ct.className),at[gp(O)&&!$_.has(O)?"class":"className"]=gt,C&&(at.ref=C),K.createElement(O,at)})(J,ot,Z)}Y.displayName=w;var J=Ot.forwardRef(Y);return J.attrs=R,J.componentStyle=X,J.displayName=w,J.shouldForwardProp=V,J.foldedComponentIds=a?Ha(o.foldedComponentIds,o.styledComponentId):"",J.styledComponentId=S,J.target=a?o.target:n,Object.defineProperty(J,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ot){this._foldedDefaultProps=a?(function(Z){for(var ft=[],j=1;j<arguments.length;j++)ft[j-1]=arguments[j];for(var C=0,I=ft;C<I.length;C++)Hp(Z,I[C],!0);return Z})({},o.defaultProps,ot):ot}}),Pm(J,function(){return".".concat(J.styledComponentId)}),u&&Y_(J,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),J}function Sx(n,t){for(var i=[n[0]],a=0,o=t.length;a<o;a+=1)i.push(t[a],n[a+1]);return i}var Ax=function(n){return Object.assign(n,{isCss:!0})};function gA(n){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];if(so(n)||Ql(n))return Ax(Qa(Sx(Lh,fh([n],t,!0))));var a=n;return t.length===0&&a.length===1&&typeof a[0]=="string"?Qa(a):Ax(Qa(Sx(a,t)))}function Yp(n,t,i){if(i===void 0&&(i=ao),!t)throw uu(1,t);var a=function(o){for(var u=[],f=1;f<arguments.length;f++)u[f-1]=arguments[f];return n(t,i,gA.apply(void 0,fh([o],u,!1)))};return a.attrs=function(o){return Yp(n,t,vn(vn({},i),{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},a.withConfig=function(o){return Yp(n,t,vn(vn({},i),o))},a}var nE=function(n){return Yp(mA,n)},A=nE;$_.forEach(function(n){A[n]=nE(n)});const xp=A.a`
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
`;function Lm({label:n,href:t="#",active:i=!1,onClick:a,style:o,target:u,rel:f}){const m="/TU2025gradulate/",p=/^https?:\/\//i.test(t)||t?.startsWith("mailto:")||t?.startsWith("tel:");let g,v=!1;!p&&t&&(t.startsWith(m)?(g="/"+t.slice(m.length).replace(/^\/+/,""),v=!0):t.startsWith("/")&&(g=t,v=!0),t===m&&(g="/",v=!0));const S={"aria-current":i?"page":void 0,"data-active":i?"true":"false","data-label":n,onKeyDown:R=>{a&&(R.key==="Enter"||R.key===" ")&&(R.preventDefault(),a(R))},onClick:a,style:o,$active:i};return v?x.jsx(xp,{as:xo,to:g,...S,children:x.jsx("span",{className:"navbtn-text",children:n})}):t?x.jsx(xp,{href:t,target:u,rel:f,...S,children:x.jsx("span",{className:"navbtn-text",children:n})}):x.jsx(xp,{as:"button",type:"button",...S,style:{background:"none",border:0,...o},children:x.jsx("span",{className:"navbtn-text",children:n})})}Lm.propTypes={label:W.string.isRequired,href:W.string,active:W.bool,onClick:W.func,style:W.object,target:W.string,rel:W.string};const yA=({isOpen:n=!1,size:t=28,color:i="#fff",...a})=>{const o=Math.max(2,Math.round(t/14)),u=t/2,f=Math.round(t*.28);if(n)return x.jsxs("svg",{width:t,height:t,viewBox:`0 0 ${t} ${t}`,fill:"none",...a,children:[x.jsx("line",{x1:u-f,y1:u-f,x2:u+f,y2:u+f,stroke:i,strokeWidth:o,strokeLinecap:"round"}),x.jsx("line",{x1:u-f,y1:u+f,x2:u+f,y2:u-f,stroke:i,strokeWidth:o,strokeLinecap:"round"})]});const m=o,p=o/2;return x.jsxs("svg",{width:t,height:t,viewBox:`0 0 ${t} ${t}`,fill:"none",...a,children:[x.jsx("rect",{x:0,y:u-f-m/2,width:t,height:m,rx:p,fill:i}),x.jsx("rect",{x:0,y:u-m/2,width:t,height:m,rx:p,fill:i}),x.jsx("rect",{x:0,y:u+f-m/2,width:t,height:m,rx:p,fill:i})]})},pe=Object.freeze({GRADIENT:"gradient",LIGHT:"light",DARK:"dark",GRADIENT_DARK:"gradient_dark"}),xA=A.header`
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
`,vA=A.div`
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
`,_A=A.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  @media (max-width: 640px) {
    gap: 8px;
  }
`,EA=A.div`
  display: flex;
  align-items: center;
  gap: 24px;
`,bA=A.nav`
  display: flex;
  align-items: center;
  gap: 24px;
  @media (max-width: 640px) {
    display: none;
  }
`,wA=A.button`
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
`,TA=A.div`
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
`,SA=A.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  margin-top: 12px;
`,AA=A(Lm)`
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  letter-spacing: 0.26px;
`,RA=A.div`
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
`,CA=A.div`
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
`;function iE({items:n=[],activeKey:t,mode:i,onModeChange:a,autoOnScroll:o=!1,scrollThreshold:u=8,sticky:f=!0,maxWidth:m,overlay:p=!1}){const[g,v]=K.useState(!1),[w,S]=K.useState(pe.GRADIENT),R=typeof i=="string",V=R?i:w,B=K.useRef(R?i:w);K.useEffect(()=>{if(!R)return;(window.scrollY||document.documentElement.scrollTop||0)<=u&&(B.current=i)},[i,R,u]),K.useEffect(()=>{if(!o)return;const M=()=>{const k=window.scrollY||document.documentElement.scrollTop||0,z=B.current||pe.GRADIENT_DARK,N=k>u?pe.DARK:z;R||S(N),a&&a(N)};return M(),window.addEventListener("scroll",M,{passive:!0}),()=>window.removeEventListener("scroll",M)},[o,R,a,u]);const{baseColor:P,gradient:X,textColor:Y,boxShadow:J,showGradient:ot}=K.useMemo(()=>{switch(V){case pe.LIGHT:return{baseColor:"linear-gradient(180deg, rgba(255,255,255,0.8) 60%, rgba(255,255,255,0) 100%)",gradient:"rgba(255,255,255,1)",textColor:"#000",showGradient:!0};case pe.DARK:return{baseColor:"linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,0) 100%)",gradient:"linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,1) 100%)",textColor:"#fff",showGradient:!0};case pe.GRADIENT_DARK:return{baseColor:"linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,0) 100%)",gradient:"linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,1) 100%)",textColor:"#fff",showGradient:!1};default:return{baseColor:"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",gradient:"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",textColor:"#000",showGradient:!1}}},[V]),j=V===pe.DARK||V===pe.GRADIENT_DARK||g,C=j?"/TU2025gradulate/icons/logoLight.svg":"/TU2025gradulate/icons/logoDark.svg",I=n.filter(M=>M.label!=="SHOWROOM");return K.useEffect(()=>(g?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[g]),x.jsxs(xA,{role:"banner",$sticky:f,$overlay:p,$baseColor:P,$gradient:X,$showGradient:ot,$textColor:Y,$boxShadow:J,children:[x.jsx(vA,{$maxWidth:m,children:x.jsxs(_A,{children:[x.jsxs(EA,{children:[x.jsx(xo,{to:"/","aria-label":"홈으로",style:{color:"inherit",textDecoration:"none"},children:x.jsx(RA,{"aria-hidden":!0,children:x.jsx(CA,{children:x.jsx("div",{style:{backgroundImage:`url(${C})`,width:"100%",height:"100%",backgroundSize:"contain",backgroundRepeat:"no-repeat"}})})})}),x.jsx(bA,{"aria-label":"주 메뉴",children:n.map(M=>x.jsx(Lm,{label:M.label,href:M.href,active:M.key===t},M.key))})]}),x.jsx(wA,{"aria-label":g?"메뉴 닫기":"메뉴 열기",onClick:()=>v(M=>!M),children:x.jsx(yA,{isOpen:g,size:24,color:j?"#fff":"#000"})})]})}),x.jsx(TA,{$open:g,onClick:()=>v(!1),children:x.jsx(SA,{onClick:M=>M.stopPropagation(),children:I.map(M=>x.jsx(AA,{label:M.label,href:M.href,active:M.key===t,style:{fontSize:18,fontWeight:500,color:"#fff",textAlign:"center"},onClick:()=>v(!1)},M.key))})})]})}iE.propTypes={items:W.arrayOf(W.shape({key:W.string.isRequired,label:W.string.isRequired,href:W.string})),activeKey:W.string,mode:W.oneOf([pe.GRADIENT,pe.LIGHT,pe.DARK,pe.GRADIENT_DARK]),onModeChange:W.func,autoOnScroll:W.bool,scrollThreshold:W.number,sticky:W.bool,overlay:W.bool,maxWidth:W.oneOfType([W.string,W.number])};const zm="Pretendard, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR', Arial, sans-serif",IA=A.footer`
  width: 100vw;
  background: #0E0E0E;
  border-top: 1px #A1A1A1 solid;
  @media (max-width: 640px) {
    min-width: 0;
    left: 0;
    right: 0;
  }
`,jA=A.div`
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
`,DA=A.div`
  font-family: ${zm};
  font-size: 24px;
  font-weight: 700;
  color: #FAFAFA;
  margin-bottom: 36px;
  @media (max-width: 640px) {
    font-size: 14px;
    margin-bottom: 16px;
  }
`,NA=A.nav`
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
`,Rx=A.a`
  color: inherit;
  text-decoration: none;
  opacity: 0.95;
`,MA=A.div`
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
`,OA=A.div`
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
`;function rE({title:n="잔향 : 기억의 향기",nav:t=[{label:"PROJECTS",href:"/projects"},{label:"PEOPLES",href:"/peoples"},{label:"SHOWROOM",href:"/showroom"},{label:"GUESTBOOK",href:"/guestbook"},{label:"CREDITS",href:"/credits"}],copyright:i=["ⓒ 2025 TECH UNIV KOREA. ALL RIGHTS RESERVED.","TUKOREA DESIGN ENGINEERING 20TH GRADUATION EXHIBITION"],social:a={youtube:{href:"https://youtube.com",label:"YouTube"},instagram:{href:"https://instagram.com",label:"Instagram"}},maxWidth:o=1220,sidePadding:u=350}){return x.jsx(IA,{role:"contentinfo",children:x.jsxs(jA,{$sidePadding:u,$maxWidth:o,children:[x.jsx(DA,{children:n}),x.jsx(NA,{"aria-label":"푸터 메뉴",children:t.map(f=>{const m=f.href||"#",p=/^https?:\/\//i.test(m),g="/TU2025gradulate/";let v=m;return p||(m===g?v="/":m.startsWith(g)&&(v="/"+m.slice(g.length).replace(/^\/+/,""))),p?x.jsx(Rx,{href:m,children:f.label},f.label):x.jsx(Rx,{as:xo,to:v,children:f.label},f.label)})}),x.jsx(MA,{children:i.map((f,m)=>x.jsx("div",{children:f},m))}),x.jsxs(OA,{$sidePadding:u,children:[a?.youtube?.href&&x.jsx(Cx,{href:a.youtube.href,"aria-label":a.youtube.label||"YouTube",target:"_blank",rel:"noreferrer noopener",children:x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#FFFFFF","aria-hidden":!0,children:x.jsx("path",{d:"M23.5 7.2a4 4 0 0 0-2.8-2.8C18.8 4 12 4 12 4s-6.8 0-8.7.4A4 4 0 0 0 .5 7.2 41 41 0 0 0 0 12a41 41 0 0 0 .5 4.8 4 4 0 0 0 2.8 2.8C5.2 20 12 20 12 20s6.8 0 8.7-.4a4 4 0 0 0 2.8-2.8A41 41 0 0 0 24 12a41 41 0 0 0-.5-4.8zM9.6 15.2V8.8L15.8 12l-6.2 3.2z"})})}),a?.instagram?.href&&x.jsx(Cx,{href:a.instagram.href,"aria-label":a.instagram.label||"Instagram",target:"_blank",rel:"noreferrer noopener",children:x.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#FFFFFF","aria-hidden":!0,children:[x.jsx("path",{d:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2A3.2 3.2 0 1 1 12 8a3.2 3.2 0 0 1 0 6.4z"}),x.jsx("circle",{cx:"17.5",cy:"6.5",r:"1.2"}),x.jsx("path",{d:"M17.8 2H6.2A4.2 4.2 0 0 0 2 6.2v11.6A4.2 4.2 0 0 0 6.2 22h11.6A4.2 4.2 0 0 0 22 17.8V6.2A4.2 4.2 0 0 0 17.8 2zm2.6 15.8a2.6 2.6 0 0 1-2.6 2.6H6.2a2.6 2.6 0 0 1-2.6-2.6V6.2A2.6 2.6 0 0 1 6.2 3.6h11.6a2.6 2.6 0 0 1 2.6 2.6v11.6z"})]})})]})]})})}rE.propTypes={title:W.string,nav:W.arrayOf(W.shape({label:W.string.isRequired,href:W.string.isRequired})),copyright:W.arrayOf(W.string),social:W.shape({youtube:W.shape({href:W.string,label:W.string}),instagram:W.shape({href:W.string,label:W.string})}),maxWidth:W.number,sidePadding:W.number};const Di="'Pretendard', system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif",aE=350,Ix=`${aE/1920*100}vw`,VA=`${(aE+414)/1920*100}vw`,kA=A.div`
  position: relative; background: #fff;
`,UA=A.div`
  padding-left: ${Ix}; padding-right: ${Ix};
`;function jx({children:n}){return x.jsx(kA,{children:x.jsx(UA,{children:n})})}const PA=A.div`
  position: relative; height: 120px; display: flex; align-items: flex-end; justify-content: center;
  font-family: ${Di}; font-size: 40px; font-weight: 700; color: #101010; line-height: 64px; margin-top: 80px;
`,LA=A.div`
  font-family: ${Di}; font-size: 32px; font-weight: 600; line-height: 56px; color: #000; margin-top: 18px;
`;function zA(){return x.jsxs(x.Fragment,{children:[x.jsx(PA,{children:"CREDITS"}),x.jsx(LA,{children:"잔향 : 기억의 향기"})]})}const BA=A.div`
  max-width: 374px; font-family: ${Di}; font-size: 16px; font-weight: 300; line-height: 25.6px; color: #000; text-align: justify; margin-top: 5px;
`;function $A({text:n}){return x.jsx(BA,{children:n})}const FA=A.div`
  width: 806px; height: 375px; background: #FFF4ED; margin-top: 24px; margin-left: ${VA}; position: absolute;
`,qA=A.div`
  position: absolute; left: 136px; top: 140px; font-family: ${Di}; font-size: 82.64px; font-weight: 500; line-height: 92.55px; color: #000;
`;function KA({children:n}){return x.jsx(FA,{children:x.jsx(qA,{children:n})})}const HA=A.div`
  display: flex; gap: 40px; margin-top: 420px; width: 1220px;
`,GA=A.div`
  width: 374px; display: flex; flex-direction: column; gap: 20px;
`,YA=A.div`
  font-family: ${Di}; font-size: 28px; font-weight: 600; line-height: 49px; color: #000;
`,QA=A.div`
  font-family: ${Di}; font-size: 16px; font-weight: 400; line-height: 21.6px; color: #000; text-align: justify;
`;function XA({blocks:n}){return x.jsx(HA,{children:n.map(t=>x.jsxs(GA,{children:[x.jsx(YA,{children:t.title}),x.jsx(QA,{children:t.body})]},t.title))})}const WA=A.div`
  border-bottom: ${n=>n.$last?"none":"1px #E0E0E0 solid"}; display: flex; gap: 20px; padding-bottom: 10px; margin-top: 20px; align-items: flex-start;
`,ZA=A.div`
  width: 289px; height: 45px; display: flex; align-items: flex-end;
`,JA=A.div`
  font-family: ${Di}; font-size: 20px; font-weight: 500; line-height: 22.4px; color: #202020;
`,t4=A.div`
  width: 900px; display: flex; flex-direction: column;
`;function e4({title:n,rows:t,last:i=!1}){return x.jsxs(WA,{$last:i,children:[x.jsx(ZA,{children:x.jsx(JA,{children:n})}),x.jsx(t4,{children:t.map((a,o)=>x.jsx(o4,{ko:a.ko,en:a.en,divider:t.length>1&&o!==t.length-1},a.ko+a.en+o))})]})}const n4=A.div`
  padding-top: 22px; padding-bottom: 40px; border-bottom: ${n=>n.$divider?"1px #E0E0E0 solid":"none"}; display: flex; gap: 20px; align-items: flex-start;
`,i4=A.div`
  width: 135px;
`,r4=A.div`
  font-family: ${Di}; font-size: 16px; font-weight: 300; line-height: 22.4px; color: #202020;
`,a4=A.div`
  display: flex; align-items: center;
`,s4=A.div`
  font-family: ${Di}; font-size: 16px; font-weight: 300; line-height: 22.4px; color: #404040;
`;function o4({ko:n,en:t,divider:i=!1}){return x.jsxs(n4,{$divider:i,children:[x.jsx(i4,{children:x.jsx(r4,{children:n})}),x.jsx(a4,{children:x.jsx(s4,{children:t})})]})}const l4=A.div`
  margin-top: 60px;
`,u4=A.div`
  font-family: ${Di}; font-size: 28px; font-weight: 600; color: #101010; margin-bottom: 24px;
`;function c4(){const n="안녕하세요. 제 20대 졸업준비위원회입니다. 그리고 이후에는 적당히 졸준위의 생각과 고생에 대한 감상을 종합해…",t=[{title:"학부장의 말씀",body:"내용 작성"},{title:"졸전담당교수 말씀",body:"내용 작성"},{title:"웹사이트팀 제작 후기",body:"내용 작성"}],i=[{title:"위원장",rows:[{ko:"홍승재",en:"Hong Seungjae"}]},{title:"부위원장",rows:[{ko:"김예린",en:"Kim Yerin"}]},{title:"총무",rows:[{ko:"진효민",en:"Jin HYOMIN"},{ko:"정민호",en:"Jeong Minho"}]},{title:"기획",rows:[{ko:"차소이",en:"Cha Soi"},{ko:"문나라",en:"Mun Nara"},{ko:"한채원",en:"Han Chaewon"}]},{title:"홍보",rows:[{ko:"이채원",en:"Lee Chaewon"},{ko:"남가림",en:"Nam Garim"}]},{title:"디자인",rows:[{ko:"구인회",en:"Gu Inhoe"},{ko:"김기윤",en:"Kim Giyun"},{ko:"박혜성",en:"Bak Hyeseong"},{ko:"석동현",en:"Seok Donghyoen"}]},{title:"웹사이트",rows:[{ko:"성수민",en:"Seong Sumin"},{ko:"김예준",en:"Kim Yejun"}]},{title:"Special Thanks",rows:[{ko:"김한종 교수",en:"Prof. Kim Hanjong"}],last:!0}];return x.jsxs("div",{style:{position:"relative"},children:[x.jsxs(jx,{children:[x.jsx(zA,{}),x.jsx($A,{text:n})]}),x.jsx(KA,{children:"단체사진 1장"}),x.jsxs(jx,{children:[x.jsx(XA,{blocks:t}),x.jsxs(l4,{children:[x.jsxs(u4,{children:["2025 잔향",x.jsx("br",{}),"제 20대 졸업전시위원회"]}),i.map(a=>x.jsx(e4,{title:a.title,rows:a.rows,last:!!a.last},a.title))]})]})]})}const h4=A.div`
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
`,f4=A.div`
  position: relative;
  width: 55%;
  height: 100%;
  flex: 0 0 auto;
`,d4=A.img`
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
`,p4=A.div`
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #f6f6f6 100%);
  z-index: 2;
  width: 20%;
`,m4=A.div`
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
`,Dx=A.div`
  margin: 0;
  padding: 0;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`,g4=A.h1`
    font-size: 28px;
    font-weight: 700;
    margin: 0;
 @media (max-width: 640px) {
    font-size: 16px;
 }
`,Qp=A.p`
    margin: 0;
@media (max-width: 640px) {
    font-size: 6px;
 }
`,y4=A(Qp)`
 @media (max-width: 640px) {
    display: none;
 }`;function Bm({nameKor:n,nameEng:t,role:i,sns:a,eMail:o,imgSrc:u,imgAlt:f}){return x.jsxs(h4,{children:[x.jsxs(f4,{children:[x.jsx(d4,{src:u,alt:f}),x.jsx(p4,{})]}),x.jsxs(m4,{children:[x.jsxs(Dx,{style:{top:"50px"},children:[x.jsx(g4,{children:n}),x.jsx(Qp,{children:t})]}),x.jsxs(Dx,{children:[x.jsx(Qp,{children:i}),Array.isArray(a)&&a.length>0?x.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",margin:"4px 0 0 0"},children:a.map((m,p)=>x.jsx("a",{href:m.url,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"inherit",wordBreak:"break-all"},"aria-label":`${n} ${m.platform}`,children:m.url},`${m.platform}-${p}`))}):null,x.jsx(y4,{children:o?x.jsx("a",{style:{textDecoration:"none",color:"inherit"},href:`mailto:${o}`,children:o}):null})]})]})]})}Bm.defaultProps={sns:[]};Bm.propTypes={nameKor:W.string.isRequired,nameEng:W.string,role:W.string,sns:W.arrayOf(W.shape({platform:W.string.isRequired,url:W.string.isRequired})),eMail:W.string,imgSrc:W.string.isRequired,imgAlt:W.string.isRequired};const x4=A.div`
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
`,v4=A.div`
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
`,sE=A.p`
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
`,_4=A(sE)`
  margin-left: 32px;
  color: ${n=>n.$active?"#909090":"#Fafafa"};
  font-weight: ${n=>n.$active?"400":"700"};
  @media (max-width: 640px) {
    font-size: 8px;
    margin-left: 16px;
  }
`;function Xp({path:n="student",isActive:t=!1,onClick:i}){return x.jsxs(x4,{onClick:i,children:[x.jsx(sE,{$active:t,children:"교수"}),x.jsx(_4,{$active:t,children:"학생"}),x.jsx(v4,{$active:t})]})}Xp.propTypes={path:W.oneOf(["student","professor"]),isActive:W.bool,onClick:W.func};const Nx=A.a`
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
`;function rh({label:n,href:t=null,active:i=!1,onClick:a,style:o,target:u,rel:f}){const p={"aria-current":i?"page":void 0,"data-active":i?"true":"false",onKeyDown:g=>{a&&(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),a(g))},onClick:a,style:o,$active:i};return t?x.jsx(Nx,{href:t,target:u,rel:f,...p,children:n}):x.jsx(Nx,{as:"button",type:"button",...p,style:{background:"none",border:0,...o},children:n})}rh.propTypes={label:W.string.isRequired,href:W.string,active:W.bool,onClick:W.func,style:W.object,target:W.string,rel:W.string};const Mx=A.div`
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
`,oE=A.p`
  width: auto;
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #191919;
  margin: 0;
  @media (max-width: 640px) {
   font-size: 13px;  
 }
`,E4=A(oE)`
  font-size: 13px;
  font-weight: 600;
`;function $m({label:n,style:t,mode:i}){const a="/TU2025gradulate/",u=window.matchMedia("(max-width: 640px)").matches?`${a}icons/dropDownMobileIcon.svg`:`${a}icons/arrowDropdownIcon.svg`;return i==="category"?x.jsxs(Mx,{style:t,children:[x.jsx(E4,{children:n}),x.jsx(Ox,{children:x.jsx("img",{src:`${a}icons/arrowDropdownIcon.svg`,alt:"dropdownIcon"})})]}):x.jsxs(Mx,{style:t,children:[x.jsx(oE,{children:n}),x.jsx(Ox,{children:x.jsx("img",{src:u,alt:"dropdownIcon"})})]})}$m.propTypes={label:W.string.isRequired,style:W.object};const b4=A.div`
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
`,w4=A.div`
  display: flex;
  width: 90px;
  height: 20px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  @media (max-width: 640px) {
    width: 52px;  
 }
`,T4=A.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 16px;
  font-weight: ${n=>n.$selected?500:400};
  color: ${n=>n.$selected?"#191919":"#bababa"};
  margin: 0;
  padding: 0;
  @media (max-width: 640px) {
    font-size: 12px;  
 }
`;function lE({options:n,onSelect:t,style:i,isOpen:a,position:o,selected:u}){return x.jsx(b4,{style:i,$open:a,children:n.map((f,m)=>x.jsx(w4,{onClick:()=>t(f),children:x.jsx(T4,{$selected:f===u,children:f})},m))})}lE.propTypes={options:W.arrayOf(W.string).isRequired,onSelect:W.func.isRequired,style:W.object,isOpen:W.bool,position:W.any,selected:W.string};const S4=A.div`
  position: relative;
`;function Fm({label:n,options:t,onSelect:i,style:a,filter:o,mode:u}){const[f,m]=Ot.useState(!1),[p,g]=Ot.useState({top:0,left:0}),v=Ot.useRef(null),w=()=>{if(v.current){const R=v.current.getBoundingClientRect();g({top:R.bottom+window.scrollY,left:R.left+window.scrollX})}m(R=>!R)},S=R=>{i&&i(R),m(!1)};return x.jsxs(S4,{ref:v,style:a,children:[x.jsx("div",{onClick:w,children:x.jsx($m,{label:n,options:t,onSelect:i,style:{},filter:o,mode:u})}),f&&x.jsx(lE,{options:t,onSelect:S,style:{},isOpen:f,position:p,selected:n})]})}Fm.propTypes={label:W.string.isRequired,options:W.arrayOf(W.string).isRequired,onSelect:W.func.isRequired,style:W.object,filter:W.string};Fm.defaultProps={style:{},filter:""};const A4=A.div`
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
`,R4=A.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    justify-content: flex-start;
    gap: 12px;
`,C4=A.div`
    font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
    font-size: 14px;
    font-weight: 400;
    height: 20px;
    color: ${n=>n.$selected?"#000":"#909090"};
    cursor: pointer;
`;function uE({options:n,isOpen:t,onSelect:i,selected:a}){return x.jsx(A4,{$open:t,children:x.jsx(R4,{children:n.map((o,u)=>x.jsx(C4,{$selected:a===o,onClick:()=>i(o),children:o},u))})})}uE.propTypes={options:W.arrayOf(W.string).isRequired,isOpen:W.bool.isRequired,onSelect:W.func.isRequired,selected:W.oneOfType([W.string,W.number])};const I4=A.div`
    position: relative;
`;function Bl({label:n,options:t,onSelect:i,style:a,mode:o}){const[u,f]=Ot.useState(!1),m=Ot.useRef(null),p=()=>{f(v=>!v)},g=v=>{i&&i(v),f(!1)};return x.jsxs(I4,{ref:m,style:a,children:[x.jsx("div",{onClick:p,children:x.jsx($m,{label:n,mode:o})}),u&&x.jsx(uE,{options:t,onSelect:g,isOpen:u,selected:n})]})}Bl.propTypes={label:W.string.isRequired,options:W.arrayOf(W.string).isRequired,onSelect:W.func.isRequired,style:W.object,mode:W.string};Bl.defaultProps={style:{},mode:"category"};const vp=A.div`
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
`,_p=A.div`
  width: 120px;
  height: 100%;
  @media (max-width: 640px) {
    display: none;
  }
`,Ep=A.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  @media (max-width: 640px) {
    display: none;
  }
`,bp=A.div`
  display: none;
  @media (max-width: 640px) {
    display: flex;
    justify-content: center;
    width: auto;
  }
`;function cE({onCategoryChange:n,onToggleChange:t,type:i,onSortChange:a,sortLabel:o}){const u={type:i},[f,m]=Ot.useState(!1),p=()=>m(Z=>{const ft=!Z;return t&&t(ft),ft}),[g,v]=Ot.useState("전체"),[w,S]=Ot.useState("All Projects"),R=["전체","산업디자인공학","미디어디자인공학"],V=["장영주","권오재","김 억","김한종","조남주","한민섭","홍성수","김태균"],B=["All Projects","AI & Robot","Edu & Kids","Health Care","IT & Tech","Living","Mobility"],P=["이름순","좋아요순","조회수순","팀작우선","개인작우선"],[X,Y]=Ot.useState("이름순"),J=o||X,ot=Z=>{Y(Z),a&&a(Z)};return K.useEffect(()=>{v(f?V[0]:R[0])},[f]),u.type==="project"?x.jsxs(vp,{children:[x.jsx(_p,{}),x.jsx(Ep,{children:B.map(Z=>x.jsx(rh,{label:Z,active:w===Z,onClick:()=>{S(Z),n&&n(Z)}},Z))}),x.jsx(bp,{children:x.jsx(Bl,{mode:"category",label:w,options:B,onSelect:Z=>{S(Z),n&&n(Z)}})}),x.jsx(Fm,{label:J,options:P,onSelect:ot})]}):f?x.jsxs(vp,{children:[x.jsx(_p,{}),x.jsx(Ep,{children:V.map(Z=>x.jsx(rh,{label:Z,active:g===Z,onClick:()=>{v(Z),n&&n(Z)}},Z))}),x.jsx(bp,{children:x.jsx(Bl,{mode:"category",label:g,options:V,onSelect:Z=>{v(Z),n&&n(Z)}})}),x.jsx(Xp,{path:f?"professor":"student",isActive:f,onClick:p})]}):x.jsxs(vp,{children:[x.jsx(_p,{}),x.jsx(Ep,{children:R.map(Z=>x.jsx(rh,{label:Z,active:g===Z,onClick:()=>{v(Z),n&&n(Z)}},Z))}),x.jsx(bp,{children:x.jsx(Bl,{mode:"category",label:g,options:R,onSelect:Z=>{v(Z),n&&n(Z)}})}),x.jsx(Xp,{path:f?"professor":"student",isActive:f,onClick:p})]})}const j4=A.div`
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
`,D4=A.div`
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
`,N4=A.img`
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
`,M4=A.div`
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
`,O4=A.p`
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
`,Bc=A.div`
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
`,$c=A.p`
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
`,Vx=A.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
`,Fc=A.p`
  font-weight: 300;
  margin: 0;
  font-size: 16px;
  line-height: 22.4px;
  color: #000000;
  @media (max-width: 640px) {
    font-size: 10px;
 }
`;function qm({nameKor:n,rank:t,eMail:i,education:a,field:o,imgSrc:u,imgAlt:f}){const m=p=>Array.isArray(p)?x.jsx(Vx,{children:p.map((g,v)=>x.jsx(Fc,{children:g},v))}):typeof p=="string"&&p?x.jsx(Vx,{children:x.jsx(Fc,{children:p})}):null;return x.jsx(j4,{children:x.jsxs(D4,{children:[x.jsx(N4,{src:u,alt:f}),x.jsxs(M4,{children:[x.jsx(O4,{children:n}),x.jsxs(Bc,{children:[x.jsx($c,{children:"직위(직급)"}),x.jsx(Fc,{children:t})]}),x.jsxs(Bc,{children:[x.jsx($c,{children:"이메일"}),x.jsx(Fc,{children:i})]}),x.jsxs(Bc,{children:[x.jsx($c,{children:"약력"}),m(a)]}),x.jsxs(Bc,{children:[x.jsx($c,{children:"전문 분야"}),m(o)]})]})]})})}qm.propTypes={nameKor:W.string.isRequired,rank:W.string.isRequired,eMail:W.string.isRequired,education:W.oneOfType([W.string,W.arrayOf(W.string)]),field:W.oneOfType([W.string,W.arrayOf(W.string)]),imgSrc:W.string.isRequired,imgAlt:W.string.isRequired};qm.defaultProps={nameKor:"홍길동",rank:"교수",eMail:"honggildong@example.com",education:[],field:[],imgSrc:"/TU2025gradulate/thumbnailExample.png",imgAlt:"홍길동 교수의 프로필 이미지"};const Km=JSON.parse('[{"num":0,"nameKor":"강유진","nameEng":"Kang Yujin","role":"Designer","department":1,"professorId":"p04","studentId":2021194003,"eMail":"rkddbwls0421@naver.com","sns":"","imgUrl":"../image/0/portrait.jpg","projectUrl":"","category":"c4","projectNum":45,"team":1,"leader":0},{"num":1,"nameKor":"고명현","nameEng":"Go Myeonghyeon","role":"Designer","department":1,"professorId":"p03","studentId":2019190002,"eMail":"aud4417@tukorea.ac.kr","sns":"","imgUrl":"../image/1/portrait.jpg","projectUrl":"","category":"c0","projectNum":0,"team":0,"leader":""},{"num":2,"nameKor":"고서영","nameEng":"Go Seoyeong","role":"Designer","department":0,"professorId":"p02","studentId":2022190001,"eMail":"rhtjdud2003@naver.com","sns":"","imgUrl":"../image/2/portrait.jpg","projectUrl":"","category":"c2","projectNum":26,"team":1,"leader":0},{"num":3,"nameKor":"고은솔","nameEng":"Ko Eunsol","role":"Designer","department":1,"professorId":"p01","studentId":2021194005,"eMail":"pinetree2021@tukorea.ac.kr","sns":"","imgUrl":"../image/3/portrait.jpg","projectUrl":"","category":"c1","projectNum":24,"team":0,"leader":""},{"num":4,"nameKor":"구예진","nameEng":"Koo Yejin","role":"Designer","department":1,"professorId":"p03","studentId":2022194002,"eMail":"ninejin63@gmail.com","sns":"","imgUrl":"../image/4/portrait.jpg","projectUrl":"","category":"c2","projectNum":27,"team":1,"leader":1},{"num":5,"nameKor":"구인회","nameEng":"Koo Inhoe","role":"Designer","department":0,"professorId":"p02","studentId":2020190001,"eMail":"eric2261@naver.com","sns":"","imgUrl":"../image/5/portrait.jpg","projectUrl":"","category":"c5","projectNum":66,"team":1,"leader":1},{"num":6,"nameKor":"권유빈","nameEng":"Kwon Yoobeen","role":"Designer","department":1,"professorId":"p02","studentId":2020194002,"eMail":"yoovebeen@naver.com","sns":"","imgUrl":"../image/6/portrait.jpg","projectUrl":"","category":"c2","projectNum":26,"team":1,"leader":1},{"num":7,"nameKor":"권지민","nameEng":"Kwon Jimin","role":"Designer","department":1,"professorId":"p03","studentId":2022194038,"eMail":"jmnee0115@naver.com","sns":"","imgUrl":"../image/7/portrait.jpg","projectUrl":"","category":"c4","projectNum":46,"team":0,"leader":""},{"num":8,"nameKor":"김강민","nameEng":"Kim Gangmin","role":"Designer","department":0,"professorId":"p04","studentId":2020192003,"eMail":"min7053@naver.com","sns":"","imgUrl":"../image/8/portrait.jpg","projectUrl":"","category":"c5","projectNum":67,"team":1,"leader":1},{"num":9,"nameKor":"김기윤","nameEng":"Kim Giyun","role":"Designer","department":0,"professorId":"p02","studentId":2020190002,"eMail":"tkenrnen112@naver.com","sns":"","imgUrl":"../image/9/portrait.jpg","projectUrl":"","category":"c5","projectNum":68,"team":1,"leader":0},{"num":10,"nameKor":"김동주","nameEng":"Kim Dongju","role":"Designer","department":0,"professorId":"p00","studentId":2020190005,"eMail":"dongju3144@daum.net","sns":"","imgUrl":"../image/10/portrait.jpg","projectUrl":"","category":"c3","projectNum":34,"team":0,"leader":""},{"num":11,"nameKor":"김민석","nameEng":"Kim Minseok","role":"Designer","department":0,"professorId":"p02","studentId":2020190006,"eMail":"minsuk2468@naver.com","sns":"","imgUrl":"../image/11/portrait.jpg","projectUrl":"","category":"c4","projectNum":47,"team":0,"leader":""},{"num":12,"nameKor":"김세린","nameEng":"Kim Serin","role":"Designer","department":0,"professorId":"p04","studentId":2021192006,"eMail":"kara7094@naver.com","sns":"","imgUrl":"../image/12/portrait.jpg","projectUrl":"","category":"c4","projectNum":48,"team":0,"leader":""},{"num":13,"nameKor":"김소리","nameEng":"Kim Sori","role":"Designer","department":1,"professorId":"p03","studentId":2021194037,"eMail":"mulsik11@gmail.com","sns":"","imgUrl":"../image/13/portrait.jpg","projectUrl":"","category":"c4","projectNum":49,"team":0,"leader":""},{"num":14,"nameKor":"김예린","nameEng":"Kim Yerin","role":"Designer","department":0,"professorId":"p02","studentId":2021190007,"eMail":"ask7240@naver.com","sns":"","imgUrl":"../image/14/portrait.jpg","projectUrl":"","category":"c5","projectNum":69,"team":0,"leader":""},{"num":15,"nameKor":"김예준","nameEng":"Kim Yejun","role":"Designer","department":1,"professorId":"p01","studentId":2020194006,"eMail":"optimusjun15@naver.com","sns":"","imgUrl":"../image/15/portrait.jpg","projectUrl":"","category":"c4","projectNum":50,"team":0,"leader":""},{"num":16,"nameKor":"김윤곤","nameEng":"Kim Yungon","role":"Designer","department":1,"professorId":"p03","studentId":2020194008,"eMail":"yunkon722@naver.com","sns":"","imgUrl":"../image/16/portrait.jpg","projectUrl":"","category":"c0","projectNum":1,"team":0,"leader":""},{"num":17,"nameKor":"김윤서","nameEng":"Kim Yunseo","role":"Designer","department":1,"professorId":"p02","studentId":2021192007,"eMail":"ekdma39@naver.com","sns":"","imgUrl":"../image/17/portrait.jpg","projectUrl":"","category":"c4","projectNum":51,"team":0,"leader":""},{"num":18,"nameKor":"김윤성","nameEng":"Kim Yunseong","role":"Designer","department":0,"professorId":"p00","studentId":2020192038,"eMail":"dbstjd9061@naver.com","sns":"","imgUrl":"../image/18/portrait.jpg","projectUrl":"","category":"c0","projectNum":2,"team":0,"leader":""},{"num":19,"nameKor":"김주은","nameEng":"Kim Jueun","role":"Designer","department":1,"professorId":"p02","studentId":2022194007,"eMail":"kimjueun6648@naver.com","sns":"","imgUrl":"../image/19/portrait.jpg","projectUrl":"","category":"c2","projectNum":28,"team":1,"leader":0},{"num":20,"nameKor":"김지민","nameEng":"Kim Jimin","role":"Designer","department":0,"professorId":"p02","studentId":2020190011,"eMail":"a01039029588@gmail.com","sns":"","imgUrl":"../image/20/portrait.jpg","projectUrl":"","category":"c3","projectNum":35,"team":1,"leader":0},{"num":21,"nameKor":"김지혜","nameEng":"Kim Jihye","role":"Designer","department":0,"professorId":"p05","studentId":2021190012,"eMail":"kjj0209077@naver.com","sns":"","imgUrl":"../image/21/portrait.jpg","projectUrl":"","category":"c5","projectNum":70,"team":1,"leader":1},{"num":22,"nameKor":"김한슬","nameEng":"Kim Hanseul","role":"Designer","department":0,"professorId":"p04","studentId":2021192008,"eMail":"pdl02081616@gmail.com","sns":"","imgUrl":"../image/22/portrait.jpg","projectUrl":"","category":"c3","projectNum":36,"team":0,"leader":""},{"num":23,"nameKor":"남가림","nameEng":"Nam Garim","role":"Designer","department":0,"professorId":"p00","studentId":2021190014,"eMail":"garim0402@naver.com","sns":"","imgUrl":"../image/23/portrait.jpg","projectUrl":"","category":"c5","projectNum":71,"team":1,"leader":1},{"num":24,"nameKor":"남궁두경","nameEng":"Namgoong Doogyung","role":"Designer","department":0,"professorId":"p05","studentId":2020192012,"eMail":"namgoongdg@gmail.com","sns":"","imgUrl":"../image/24/portrait.jpg","projectUrl":"","category":"c0","projectNum":3,"team":1,"leader":1},{"num":25,"nameKor":"노희재","nameEng":"Roe Heejae","role":"Designer","department":0,"professorId":"p02","studentId":2019192013,"eMail":"wjdrl1144@gmail.com","sns":"","imgUrl":"../image/25/portrait.jpg","projectUrl":"","category":"c3","projectNum":37,"team":0,"leader":""},{"num":26,"nameKor":"마은성","nameEng":"Ma Eunseong","role":"Designer","department":0,"professorId":"p05","studentId":2021190016,"eMail":"mes3788@naver.com","sns":"","imgUrl":"../image/26/portrait.jpg","projectUrl":"","category":"c5","projectNum":70,"team":1,"leader":0},{"num":27,"nameKor":"문나라","nameEng":"Moon Nara","role":"Designer","department":0,"professorId":"p02","studentId":2021192009,"eMail":"skfk020529@naver.com","sns":"","imgUrl":"../image/27/portrait.jpg","projectUrl":"","category":"c3","projectNum":38,"team":0,"leader":""},{"num":28,"nameKor":"문지형","nameEng":"Moon Jihyeong","role":"Designer","department":0,"professorId":"p05","studentId":2020192014,"eMail":"dogtable4099@naver.com","sns":"","imgUrl":"../image/28/portrait.jpg","projectUrl":"","category":"c0","projectNum":3,"team":1,"leader":0},{"num":29,"nameKor":"민혜연","nameEng":"Min Hyeyeon","role":"Designer","department":0,"professorId":"p00","studentId":2022192010,"eMail":"ajtlqkf_@naver.com","sns":"","imgUrl":"../image/29/portrait.jpg","projectUrl":"","category":"c2","projectNum":29,"team":0,"leader":""},{"num":30,"nameKor":"박민규","nameEng":"Park Mingyu","role":"Designer","department":1,"professorId":"p03","studentId":2019194041,"eMail":"mingyu6393@naver.com","sns":"","imgUrl":"../image/30/portrait.jpg","projectUrl":"","category":"c0","projectNum":4,"team":0,"leader":""},{"num":31,"nameKor":"박서영","nameEng":"Park Seoyoung","role":"Designer","department":1,"professorId":"p03","studentId":2021192011,"eMail":"pszer0@naver.com","sns":"","imgUrl":"../image/31/portrait.jpg","projectUrl":"","category":"c4","projectNum":52,"team":0,"leader":""},{"num":32,"nameKor":"박예인","nameEng":"Park Yein","role":"Designer","department":1,"professorId":"p01","studentId":2021194013,"eMail":"pyi0413@naver.com","sns":"","imgUrl":"../image/32/portrait.jpg","projectUrl":"","category":"c4","projectNum":45,"team":1,"leader":1},{"num":33,"nameKor":"박예진","nameEng":"Park Yejin","role":"Designer","department":0,"professorId":"p00","studentId":2021190018,"eMail":"yejin6607@naver.com","sns":"","imgUrl":"../image/33/portrait.jpg","projectUrl":"","category":"c5","projectNum":71,"team":1,"leader":0},{"num":34,"nameKor":"박재민","nameEng":"Park Jaemin","role":"Designer","department":1,"professorId":"p03","studentId":2020192016,"eMail":"shiibadog@naver.com","sns":"","imgUrl":"../image/34/portrait.jpg","projectUrl":"","category":"c2","projectNum":27,"team":1,"leader":0},{"num":35,"nameKor":"박정훈","nameEng":"Park Jeonghun","role":"Designer","department":0,"professorId":"p05","studentId":2022192012,"eMail":"hhh8353@naver.com","sns":"","imgUrl":"../image/35/portrait.jpg","projectUrl":"","category":"c2","projectNum":30,"team":0,"leader":""},{"num":36,"nameKor":"박지수","nameEng":"Park Jisoo","role":"Designer","department":1,"professorId":"p03","studentId":2021194014,"eMail":"popopo0128@naver.com","sns":"","imgUrl":"../image/36/portrait.jpg","projectUrl":"","category":"c0","projectNum":5,"team":0,"leader":""},{"num":37,"nameKor":"박해인","nameEng":"Park Haein","role":"Designer","department":0,"professorId":"p06","studentId":2022192014,"eMail":"haein061e@gmail.com","sns":"","imgUrl":"../image/37/portrait.jpg","projectUrl":"","category":"c5","projectNum":72,"team":0,"leader":""},{"num":38,"nameKor":"박현","nameEng":"Park Hyun","role":"Designer","department":0,"professorId":"p04","studentId":2022190039,"eMail":"prefrog2@naver.com","sns":"","imgUrl":"../image/38/portrait.jpg","projectUrl":"","category":"c4","projectNum":53,"team":1,"leader":1},{"num":39,"nameKor":"박혜성","nameEng":"Park Hyeseong","role":"Designer","department":0,"professorId":"p00","studentId":2021190020,"eMail":"hyesungpark1128@gmail.com","sns":"","imgUrl":"../image/39/portrait.jpg","projectUrl":"","category":"c5","projectNum":73,"team":0,"leader":""},{"num":40,"nameKor":"박효정","nameEng":"Park Hyojung","role":"Designer","department":0,"professorId":"p02","studentId":2021190021,"eMail":"lucymrx@naver.com","sns":"","imgUrl":"../image/40/portrait.jpg","projectUrl":"","category":"c4","projectNum":54,"team":0,"leader":""},{"num":41,"nameKor":"배아영","nameEng":"Bae Ayeong","role":"Designer","department":1,"professorId":"p01","studentId":2022194014,"eMail":"f3_ea@naver.com","sns":"","imgUrl":"../image/41/portrait.jpg","projectUrl":"","category":"c0","projectNum":6,"team":0,"leader":""},{"num":42,"nameKor":"배혜림","nameEng":"Bae Hyelim","role":"Designer","department":0,"professorId":"p05","studentId":2021192013,"eMail":"bhl00012@naver.com","sns":"","imgUrl":"../image/42/portrait.jpg","projectUrl":"","category":"c0","projectNum":7,"team":1,"leader":0},{"num":43,"nameKor":"백대한","nameEng":"Baek Daehan","role":"Designer","department":0,"professorId":"p05","studentId":2020192039,"eMail":"qoreogks789@naver.com","sns":"","imgUrl":"../image/43/portrait.jpg","projectUrl":"","category":"c0","projectNum":8,"team":0,"leader":""},{"num":44,"nameKor":"백미나","nameEng":"Baek Mina","role":"Designer","department":0,"professorId":"p06","studentId":2021190023,"eMail":"wbwyhr@gmail.com","sns":"","imgUrl":"../image/44/portrait.jpg","projectUrl":"","category":"c4","projectNum":55,"team":0,"leader":""},{"num":45,"nameKor":"서연주","nameEng":"Seo Yeonju","role":"Designer","department":1,"professorId":"p02","studentId":2022194015,"eMail":"syj0305290529@gmail.com","sns":"","imgUrl":"../image/45/portrait.jpg","projectUrl":"","category":"c2","projectNum":28,"team":1,"leader":1},{"num":46,"nameKor":"서원진","nameEng":"Seo Wonjin","role":"Designer","department":0,"professorId":"p05","studentId":2019152026,"eMail":"tjdnjswls4981@naver.com","sns":"","imgUrl":"../image/46/portrait.jpg","projectUrl":"","category":"c4","projectNum":56,"team":0,"leader":""},{"num":47,"nameKor":"석동현","nameEng":"Suk Donghyun","role":"Designer","department":0,"professorId":"p06","studentId":2020190015,"eMail":"andysuk0108@naver.com","sns":"","imgUrl":"../image/47/portrait.jpg","projectUrl":"","category":"c5","projectNum":66,"team":1,"leader":0},{"num":48,"nameKor":"성수민","nameEng":"Seong Sumin","role":"Designer","department":1,"professorId":"p02","studentId":2020194016,"eMail":"epwyqqu309@gmail.com","sns":"","imgUrl":"../image/48/portrait.jpg","projectUrl":"","category":"c3","projectNum":39,"team":1,"leader":1},{"num":49,"nameKor":"성유승","nameEng":"Sung Yuseung","role":"Designer","department":1,"professorId":"p02","studentId":2019122021,"eMail":"usngsung0830@naver.com","sns":"","imgUrl":"../image/49/portrait.jpg","projectUrl":"","category":"c1","projectNum":25,"team":1,"leader":0},{"num":50,"nameKor":"송지원","nameEng":"Song Jiwon","role":"Designer","department":0,"professorId":"p04","studentId":2021190024,"eMail":"wldnjs0762@naver.com","sns":"","imgUrl":"../image/50/portrait.jpg","projectUrl":"","category":"c0","projectNum":9,"team":1,"leader":1},{"num":51,"nameKor":"신산하","nameEng":"Shin Sanha","role":"Designer","department":1,"professorId":"p02","studentId":2021192014,"eMail":"sanha@tukorea.ac.kr","sns":"","imgUrl":"../image/51/portrait.jpg","projectUrl":"","category":"c3","projectNum":39,"team":1,"leader":0},{"num":52,"nameKor":"신주혜","nameEng":"Shin Juhye","role":"Designer","department":0,"professorId":"p05","studentId":2022190019,"eMail":"emily3652@naver.com","sns":"","imgUrl":"../image/52/portrait.jpg","projectUrl":"","category":"c0","projectNum":10,"team":1,"leader":0},{"num":53,"nameKor":"신주희","nameEng":"Shin Juhui","role":"Designer","department":1,"professorId":"p07","studentId":2022194016,"eMail":"lucytomato@naver.com","sns":"","imgUrl":"../image/53/portrait.jpg","projectUrl":"","category":"c3","projectNum":40,"team":0,"leader":""},{"num":54,"nameKor":"심태섭","nameEng":"Sim Taeseob","role":"Designer","department":1,"professorId":"p01","studentId":2020194017,"eMail":"1212sts@naver.com","sns":"","imgUrl":"../image/54/portrait.jpg","projectUrl":"","category":"c0","projectNum":11,"team":0,"leader":""},{"num":55,"nameKor":"안상은","nameEng":"An Sangeun","role":"Designer","department":1,"professorId":"p03","studentId":2022194018,"eMail":"itkddms@naver.com","sns":"","imgUrl":"../image/55/portrait.jpg","projectUrl":"","category":"c4","projectNum":57,"team":1,"leader":1},{"num":56,"nameKor":"염수민","nameEng":"Yeom Sumin","role":"Designer","department":1,"professorId":"p01","studentId":2022194021,"eMail":"yeomsumin030827@gmail.com","sns":"","imgUrl":"../image/56/portrait.jpg","projectUrl":"","category":"c4","projectNum":58,"team":0,"leader":""},{"num":57,"nameKor":"유수현","nameEng":"Ryu Soohyun","role":"Designer","department":0,"professorId":"p06","studentId":2022192019,"eMail":"suhyeon9145@naver.com","sns":"","imgUrl":"../image/57/portrait.jpg","projectUrl":"","category":"c2","projectNum":31,"team":1,"leader":1},{"num":58,"nameKor":"윤모란","nameEng":"Yoon Moran","role":"Designer","department":0,"professorId":"p06","studentId":2022190024,"eMail":"moran_a_486@naver.com","sns":"","imgUrl":"../image/58/portrait.jpg","projectUrl":"","category":"c2","projectNum":31,"team":1,"leader":0},{"num":59,"nameKor":"윤서희","nameEng":"Yoon Seohee","role":"Designer","department":0,"professorId":"p00","studentId":2020192021,"eMail":"dbstjgml000@naver.com","sns":"","imgUrl":"../image/59/portrait.jpg","projectUrl":"","category":"c0","projectNum":12,"team":0,"leader":""},{"num":60,"nameKor":"윤재익","nameEng":"Yun Jaeik","role":"Designer","department":1,"professorId":"p01","studentId":2020194018,"eMail":"jwodlr10014@naver.com","sns":"","imgUrl":"../image/60/portrait.jpg","projectUrl":"","category":"c0","projectNum":13,"team":0,"leader":""},{"num":61,"nameKor":"이교연","nameEng":"Lee Gyoyeon","role":"Designer","department":0,"professorId":"p01","studentId":2022192038,"eMail":"grace121516@naver.com","sns":"","imgUrl":"../image/61/portrait.jpg","projectUrl":"","category":"c2","projectNum":32,"team":0,"leader":""},{"num":62,"nameKor":"이도훈","nameEng":"Lee Dohun","role":"Designer","department":0,"professorId":"p02","studentId":2020190025,"eMail":"bestson0137@naver.com","sns":"","imgUrl":"../image/62/portrait.jpg","projectUrl":"","category":"c5","projectNum":74,"team":0,"leader":""},{"num":63,"nameKor":"이민욱","nameEng":"Lee Minuk","role":"Designer","department":1,"professorId":"p01","studentId":2020194021,"eMail":"lmu0306@naver.com","sns":"","imgUrl":"../image/63/portrait.jpg","projectUrl":"","category":"c4","projectNum":59,"team":0,"leader":""},{"num":64,"nameKor":"이상","nameEng":"Lee Sang","role":"Designer","department":0,"professorId":"p02","studentId":2020190027,"eMail":"23isgood@naver.com","sns":"","imgUrl":"../image/64/portrait.jpg","projectUrl":"","category":"c3","projectNum":35,"team":1,"leader":1},{"num":65,"nameKor":"이영","nameEng":"Lee Young","role":"Designer","department":1,"professorId":"p03","studentId":2022194025,"eMail":"young2003_@naver.com","sns":"","imgUrl":"../image/65/portrait.jpg","projectUrl":"","category":"c4","projectNum":57,"team":1,"leader":0},{"num":66,"nameKor":"이영재","nameEng":"Lee Youngjae","role":"Designer","department":1,"professorId":"p03","studentId":2020194023,"eMail":"buwong123@naver.com","sns":"","imgUrl":"../image/66/portrait.jpg","projectUrl":"","category":"c0","projectNum":14,"team":1,"leader":0},{"num":67,"nameKor":"이웅찬","nameEng":"Lee Woongchan","role":"Designer","department":0,"professorId":"p02","studentId":2020192028,"eMail":"dldndcks01@naver.com","sns":"","imgUrl":"../image/67/portrait.jpg","projectUrl":"","category":"c3","projectNum":41,"team":0,"leader":""},{"num":68,"nameKor":"이준오","nameEng":"Lee Juno","role":"Designer","department":0,"professorId":"p00","studentId":2020190030,"eMail":"ljuno421@naver.com","sns":"","imgUrl":"../image/68/portrait.jpg","projectUrl":"","category":"c0","projectNum":15,"team":1,"leader":1},{"num":69,"nameKor":"이지민","nameEng":"Lee Jimin","role":"Designer","department":1,"professorId":"p02","studentId":2020194026,"eMail":"ibs7533@naver.com","sns":"","imgUrl":"../image/69/portrait.jpg","projectUrl":"","category":"c1","projectNum":25,"team":1,"leader":1},{"num":70,"nameKor":"이지현","nameEng":"Lee Jihyeon","role":"Designer","department":0,"professorId":"p04","studentId":2022192023,"eMail":"dlwlgus1102@naver.com","sns":"","imgUrl":"../image/70/portrait.jpg","projectUrl":"","category":"c5","projectNum":67,"team":1,"leader":0},{"num":71,"nameKor":"이채연","nameEng":"Lee Chaeyeon","role":"Designer","department":1,"professorId":"p07","studentId":2021194022,"eMail":"cvgh6835@naver.com","sns":"","imgUrl":"../image/71/portrait.jpg","projectUrl":"","category":"c0","projectNum":16,"team":0,"leader":""},{"num":72,"nameKor":"이채원","nameEng":"Lee Chaewon","role":"Designer","department":0,"professorId":"p06","studentId":2022192024,"eMail":"chaerry3907@naver.com","sns":"","imgUrl":"../image/72/portrait.jpg","projectUrl":"","category":"c0","projectNum":7,"team":1,"leader":1},{"num":73,"nameKor":"이채원","nameEng":"Lee Chaewon","role":"Designer","department":1,"professorId":"p03","studentId":2021194023,"eMail":"coehfdl2222@naver.com","sns":"","imgUrl":"../image/73/portrait.jpg","projectUrl":"","category":"c0","projectNum":14,"team":1,"leader":1},{"num":74,"nameKor":"임세준","nameEng":"Im Sejun","role":"Designer","department":0,"professorId":"p04","studentId":2019190043,"eMail":"helicat123@naver.com","sns":"","imgUrl":"../image/74/portrait.jpg","projectUrl":"","category":"c5","projectNum":75,"team":1,"leader":1},{"num":75,"nameKor":"임소이","nameEng":"Yim Soie","role":"Designer","department":0,"professorId":"p05","studentId":2022190030,"eMail":"soie0410@naver.com","sns":"","imgUrl":"../image/75/portrait.jpg","projectUrl":"","category":"c0","projectNum":17,"team":1,"leader":1},{"num":76,"nameKor":"임종석","nameEng":"Lim Jongseok","role":"Designer","department":0,"professorId":"p06","studentId":2020192032,"eMail":"rimjs01@naver.com","sns":"","imgUrl":"../image/76/portrait.jpg","projectUrl":"","category":"c0","projectNum":18,"team":0,"leader":""},{"num":77,"nameKor":"전준범","nameEng":"Jeon Junbeom","role":"Designer","department":1,"professorId":"p01","studentId":2021194028,"eMail":"jbjeon0814@gmail.com","sns":"","imgUrl":"../image/77/portrait.jpg","projectUrl":"","category":"c4","projectNum":60,"team":0,"leader":""},{"num":78,"nameKor":"정문선","nameEng":"Jung Moonsun","role":"Designer","department":0,"professorId":"p02","studentId":2020190033,"eMail":"munseon9822@naver.com","sns":"","imgUrl":"../image/78/portrait.jpg","projectUrl":"","category":"c3","projectNum":42,"team":0,"leader":""},{"num":79,"nameKor":"정민호","nameEng":"Jung Minho","role":"Designer","department":0,"professorId":"p04","studentId":2020190034,"eMail":"jmh011014@naver.com","sns":"","imgUrl":"../image/79/portrait.jpg","projectUrl":"","category":"c5","projectNum":68,"team":1,"leader":1},{"num":80,"nameKor":"정유진","nameEng":"Jung Yuzin","role":"Designer","department":0,"professorId":"p05","studentId":2022190033,"eMail":"akf0301@naver.com","sns":"","imgUrl":"../image/80/portrait.jpg","projectUrl":"","category":"c5","projectNum":76,"team":0,"leader":""},{"num":81,"nameKor":"정지원","nameEng":"Jung Jiwon","role":"Designer","department":0,"professorId":"p06","studentId":2022192025,"eMail":"marcellar030328@naver.com","sns":"","imgUrl":"../image/81/portrait.jpg","projectUrl":"","category":"c0","projectNum":17,"team":1,"leader":0},{"num":82,"nameKor":"정혜원","nameEng":"Jeong Hyewon","role":"Designer","department":0,"professorId":"p06","studentId":2021190034,"eMail":"jeonghyewon020705@naver.com","sns":"","imgUrl":"../image/82/portrait.jpg","projectUrl":"","category":"c0","projectNum":10,"team":1,"leader":1},{"num":83,"nameKor":"정혜조","nameEng":"Jeong Hyejo","role":"Designer","department":0,"professorId":"p00","studentId":2022192028,"eMail":"hyejo5614@naver.com","sns":"","imgUrl":"../image/83/portrait.jpg","projectUrl":"","category":"c4","projectNum":61,"team":0,"leader":""},{"num":84,"nameKor":"정호균","nameEng":"Jeong Hokyun","role":"Designer","department":1,"professorId":"p01","studentId":2020194031,"eMail":"hohokyun@naver.com","sns":"","imgUrl":"../image/84/portrait.jpg","projectUrl":"","category":"c4","projectNum":62,"team":0,"leader":""},{"num":85,"nameKor":"조선화","nameEng":"Jo Sunhwa","role":"Designer","department":0,"professorId":"p04","studentId":2022192039,"eMail":"jo5629@naver.com","sns":"","imgUrl":"../image/85/portrait.jpg","projectUrl":"","category":"c4","projectNum":53,"team":1,"leader":0},{"num":86,"nameKor":"조채빈","nameEng":"Cho Chaebin","role":"Designer","department":0,"professorId":"p00","studentId":2021192029,"eMail":"cheabin0000@naver.com","sns":"","imgUrl":"../image/86/portrait.jpg","projectUrl":"","category":"c0","projectNum":19,"team":0,"leader":""},{"num":87,"nameKor":"주예지","nameEng":"Ju Yeji","role":"Designer","department":1,"professorId":"p03","studentId":2022194040,"eMail":"jooyeiji@naver.com","sns":"","imgUrl":"../image/87/portrait.jpg","projectUrl":"","category":"c0","projectNum":20,"team":0,"leader":""},{"num":88,"nameKor":"진세원","nameEng":"Jin Sewon","role":"Designer","department":0,"professorId":"p00","studentId":2022192030,"eMail":"sewoneee@naver.com","sns":"","imgUrl":"../image/88/portrait.jpg","projectUrl":"","category":"c0","projectNum":15,"team":1,"leader":0},{"num":89,"nameKor":"진효민","nameEng":"Jin Hyomin","role":"Designer","department":0,"professorId":"p07","studentId":2022190040,"eMail":"jhm8912@naver.com","sns":"","imgUrl":"../image/89/portrait.jpg","projectUrl":"","category":"c4","projectNum":63,"team":0,"leader":""},{"num":90,"nameKor":"차소이","nameEng":"Cha Soyi","role":"Designer","department":0,"professorId":"p06","studentId":2022192040,"eMail":"osjj2202@naver.com","sns":"","imgUrl":"../image/90/portrait.jpg","projectUrl":"","category":"c0","projectNum":21,"team":0,"leader":""},{"num":91,"nameKor":"차한비","nameEng":"Cha Hanbi","role":"Designer","department":0,"professorId":"p02","studentId":2022192031,"eMail":"cha4786@naver.com","sns":"","imgUrl":"../image/91/portrait.jpg","projectUrl":"","category":"c2","projectNum":33,"team":0,"leader":""},{"num":92,"nameKor":"최가현","nameEng":"Choi Gahyun","role":"Designer","department":1,"professorId":"p07","studentId":2022194034,"eMail":"poiulkjhmnb098@naver.com","sns":"","imgUrl":"../image/92/portrait.jpg","projectUrl":"","category":"c3","projectNum":43,"team":0,"leader":""},{"num":93,"nameKor":"한채원","nameEng":"Han Chaewon","role":"Designer","department":0,"professorId":"p04","studentId":2021190036,"eMail":"09clara@naver.com","sns":"","imgUrl":"../image/93/portrait.jpg","projectUrl":"","category":"c4","projectNum":64,"team":0,"leader":""},{"num":94,"nameKor":"함은서","nameEng":"Ham Eunseo","role":"Designer","department":1,"professorId":"p03","studentId":2021192034,"eMail":"hamunseo0894@naver.com","sns":"","imgUrl":"../image/94/portrait.jpg","projectUrl":"","category":"c0","projectNum":22,"team":0,"leader":""},{"num":95,"nameKor":"허도윤","nameEng":"Heo Doyun","role":"Designer","department":1,"professorId":"p03","studentId":2022194041,"eMail":"saver2075@icloud.com","sns":"","imgUrl":"../image/95/portrait.jpg","projectUrl":"","category":"c3","projectNum":44,"team":0,"leader":""},{"num":96,"nameKor":"허지유","nameEng":"Heo Jiyu","role":"Designer","department":0,"professorId":"p04","studentId":2021192035,"eMail":"jjoojjoo0314@naver.com","sns":"","imgUrl":"../image/96/portrait.jpg","projectUrl":"","category":"c0","projectNum":9,"team":1,"leader":0},{"num":97,"nameKor":"홍승재","nameEng":"Hong Seungjae","role":"Designer","department":0,"professorId":"p02","studentId":2020192036,"eMail":"h010505@naver.com","sns":"","imgUrl":"../image/97/portrait.jpg","projectUrl":"","category":"c4","projectNum":65,"team":0,"leader":""},{"num":98,"nameKor":"홍지우","nameEng":"Hong Jiwoo","role":"Designer","department":0,"professorId":"p04","studentId":2021192036,"eMail":"hongjiwoo222@naver.com","sns":"","imgUrl":"../image/98/portrait.jpg","projectUrl":"","category":"c5","projectNum":75,"team":1,"leader":0},{"num":99,"nameKor":"황수정","nameEng":"Hwang Sujeong","role":"Designer","department":0,"professorId":"p05","studentId":2022190036,"eMail":"zzxcvvb12@gmail.com","sns":"","imgUrl":"../image/99/portrait.jpg","projectUrl":"","category":"c0","projectNum":23,"team":0,"leader":""}]'),V4=[{id:"p00",nameKor:"장영주",nameEng:"Jang Youngjoo",rank:"학부장, 교수",email:"jyj@tukorea.ac.kr",education:["㈜LG 전자 디자인 연구소","㈜인터디자인 디자인 기획실장","한국디지털디자인학회 이사","경기도 시흥시 정책기획단 정책위원","제품디자인·브랜드 개발센터 [EH]책임교수","디자인비지니스혁신 센터장"],field:["제품디자인·브랜드 개발","디자인 조직과 협동적 Process","제품디자인과 산업기술의 통합적 시스템 구축"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524695988100.jpg"},{id:"p01",nameKor:"권오재",nameEng:"Kwon Ojae",rank:"교수",email:"kwsokw@tukorea.ac.kr",education:["임시 데이터","임시 데이터","임시 데이터","임시 데이터"],field:["임시 데이터","임시 데이터","임시 데이터","임시 데이터"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524642556100.jpg"},{id:"p02",nameKor:"김 억",nameEng:"Kim Eok",rank:"교수, 학생처장",email:"kimeok@tukorea.ac.kr",education:["㈜LG전자 디자인경영센터 선임연구원","KAIST 총동문회 이사","한국산업디자이너협회 이사 / 한국서비스디자인학회 이사","한국디자인기초조형학회 / 한국디자인학회 이사","디자인융합전문대학원 사업단장"],field:["디자인 전략 및 기획","서비스디자인 및 PSS(Product-Service System) 개발","도시 공공 디자인"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524658322100.jpg"},{id:"p03",nameKor:"김한종",nameEng:"Kim Hanjong",rank:"조교수, PD교수",email:"hanjongkim@tukorea.ac.kr",education:["AR 기반의 인터랙티브 제품 프로토타이핑 도구 개발","이동형음압병동의 디자인 요구사항 수립 연구","이동형음압병동 설계를 위한 디자인 도구 개발","한국기계연구원 산업용 SW UX/UI 가이드라인 개발"],field:["Web 기반 3D 그래픽스","SW 시스템 디자인 / 프론트엔드 개발","디자인 지원 도구 개발"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524669896100.jpg"},{id:"p04",nameKor:"조남주",nameEng:"Jo Namjoo",rank:"교수,특별보좌역",email:"njjoh@tukorea.ac.kr",education:["임시 데이터","임시 데이터","임시 데이터","임시 데이터"],field:["가구 디자인 엔지니어링","지속가능한 공공디자인","제품디자인 엔지니어링"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524711232100.jpg"},{id:"p05",nameKor:"한민섭",nameEng:"Han Minseop",rank:"부교수",email:"mshan@tukorea.ac.kr",education:["CISD정보저장기기 연구센터 전문연구원","㈜코닝 정밀소재 책임연구원","㈜삼성전자 생산기술연구소 책임연구원"],field:["나노/마이크로 초정밀 미세 가공 공정","Equipment H/W 설계 및 시뮬레이션","융복합 가공 시스템 설계"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524614469100.jpg"},{id:"p06",nameKor:"홍성수",nameEng:"Hong Seongsu",rank:"교수, 국제처장",email:"hss@tukorea.ac.kr",education:["3차원 의료영상시스템(MRI) 제품설계 및 디자인","다족형견마로봇 / 헬스케어로봇 / 재활보조로봇","식사보조로봇/ 수중로봇/ 청소로봇 / 웨어러블 로봇","협동로봇/ 자율주행로봇/ 순찰로봇/ 공항안내로봇 등 90여종 로봇 개발"],field:["로봇 시스템 개발/ 로봇디자인/ HRI 디자인","로봇 문화콘텐츠 기술개발","신기술 전시기획/ 전시시스템개발"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524724386100.jpg"},{id:"p07",nameKor:"김태균",nameEng:"Kim Taekyun",rank:"조교수, 진로취업지도교수",email:"tgkim1design@tukorea.ac.kr",education:["영국, 영국 국제디자인박람회전시 ‘London 100% Design‘ 초청 출품","중국, SUPER DESIGNERS: Exploration of Creative Forms, The Boundaries of Design Forms 초청 출품","INNOCHINA 대상","나는글로벌벤처다 동상","Spark Awards-Silver"],field:["AI 기반 제품·공공시설물 디자인 실무·방법론","UX 중심 디자인 전략·개발","지식 주도 디자인 아이디에이션 기반 실무 디자인 설계 및 교수법"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1724738930608100.jpg"}],Xl=JSON.parse('[{"members":[1],"category":"c0","projectNum":0,"titleKor":"한국어 타이틀 1","titleEng":"EngTitle 1","galleryCount":1,"description":"작품 설명 내용"},{"members":[16],"category":"c0","projectNum":1,"titleKor":"한국어 타이틀 2","titleEng":"EngTitle 2","galleryCount":1,"description":"작품 설명 내용"},{"members":[18],"category":"c0","projectNum":2,"titleKor":"한국어 타이틀 3","titleEng":"EngTitle 3","galleryCount":1,"description":"작품 설명 내용"},{"members":[24,28],"category":"c0","projectNum":3,"titleKor":"한국어 타이틀 4","titleEng":"EngTitle 4","galleryCount":1,"description":"작품 설명 내용"},{"members":[30],"category":"c0","projectNum":4,"titleKor":"한국어 타이틀 5","titleEng":"EngTitle 5","galleryCount":1,"description":"작품 설명 내용"},{"members":[36],"category":"c0","projectNum":5,"titleKor":"한국어 타이틀 6","titleEng":"EngTitle 6","galleryCount":1,"description":"작품 설명 내용"},{"members":[41],"category":"c0","projectNum":6,"titleKor":"한국어 타이틀 7","titleEng":"EngTitle 7","galleryCount":1,"description":"작품 설명 내용"},{"members":[72,42],"category":"c0","projectNum":7,"titleKor":"한국어 타이틀 8","titleEng":"EngTitle 8","galleryCount":1,"description":"작품 설명 내용"},{"members":[43],"category":"c0","projectNum":8,"titleKor":"한국어 타이틀 9","titleEng":"EngTitle 9","galleryCount":1,"description":"작품 설명 내용"},{"members":[50,96],"category":"c0","projectNum":9,"titleKor":"한국어 타이틀 10","titleEng":"EngTitle 10","galleryCount":1,"description":"작품 설명 내용"},{"members":[82,52],"category":"c0","projectNum":10,"titleKor":"한국어 타이틀 11","titleEng":"EngTitle 11","galleryCount":1,"description":"작품 설명 내용"},{"members":[54],"category":"c0","projectNum":11,"titleKor":"한국어 타이틀 12","titleEng":"EngTitle 12","galleryCount":1,"description":"작품 설명 내용"},{"members":[59],"category":"c0","projectNum":12,"titleKor":"한국어 타이틀 13","titleEng":"EngTitle 13","galleryCount":1,"description":"작품 설명 내용"},{"members":[60],"category":"c0","projectNum":13,"titleKor":"한국어 타이틀 14","titleEng":"EngTitle 14","galleryCount":1,"description":"작품 설명 내용"},{"members":[73,66],"category":"c0","projectNum":14,"titleKor":"한국어 타이틀 15","titleEng":"EngTitle 15","galleryCount":1,"description":"작품 설명 내용"},{"members":[68,88],"category":"c0","projectNum":15,"titleKor":"한국어 타이틀 16","titleEng":"EngTitle 16","galleryCount":1,"description":"작품 설명 내용"},{"members":[71],"category":"c0","projectNum":16,"titleKor":"한국어 타이틀 17","titleEng":"EngTitle 17","galleryCount":1,"description":"작품 설명 내용"},{"members":[75,81],"category":"c0","projectNum":17,"titleKor":"한국어 타이틀 18","titleEng":"EngTitle 18","galleryCount":1,"description":"작품 설명 내용"},{"members":[76],"category":"c0","projectNum":18,"titleKor":"한국어 타이틀 19","titleEng":"EngTitle 19","galleryCount":1,"description":"작품 설명 내용"},{"members":[86],"category":"c0","projectNum":19,"titleKor":"한국어 타이틀 20","titleEng":"EngTitle 20","galleryCount":1,"description":"작품 설명 내용"},{"members":[87],"category":"c0","projectNum":20,"titleKor":"한국어 타이틀 21","titleEng":"EngTitle 21","galleryCount":1,"description":"작품 설명 내용"},{"members":[90],"category":"c0","projectNum":21,"titleKor":"한국어 타이틀 22","titleEng":"EngTitle 22","galleryCount":1,"description":"작품 설명 내용"},{"members":[94],"category":"c0","projectNum":22,"titleKor":"한국어 타이틀 23","titleEng":"EngTitle 23","galleryCount":1,"description":"작품 설명 내용"},{"members":[99],"category":"c0","projectNum":23,"titleKor":"한국어 타이틀 24","titleEng":"EngTitle 24","galleryCount":1,"description":"작품 설명 내용"},{"members":[3],"category":"c1","projectNum":24,"titleKor":"한국어 타이틀 25","titleEng":"EngTitle 25","galleryCount":1,"description":"작품 설명 내용"},{"members":[69,49],"category":"c1","projectNum":25,"titleKor":"한국어 타이틀 26","titleEng":"EngTitle 26","galleryCount":1,"description":"작품 설명 내용"},{"members":[6,2],"category":"c2","projectNum":26,"titleKor":"한국어 타이틀 27","titleEng":"EngTitle 27","galleryCount":1,"description":"작품 설명 내용"},{"members":[4,34],"category":"c2","projectNum":27,"titleKor":"한국어 타이틀 28","titleEng":"EngTitle 28","galleryCount":1,"description":"작품 설명 내용"},{"members":[54,19],"category":"c2","projectNum":28,"titleKor":"한국어 타이틀 29","titleEng":"EngTitle 29","galleryCount":1,"description":"작품 설명 내용"},{"members":[29],"category":"c2","projectNum":29,"titleKor":"한국어 타이틀 30","titleEng":"EngTitle 30","galleryCount":1,"description":"작품 설명 내용"},{"members":[35],"category":"c2","projectNum":30,"titleKor":"한국어 타이틀 31","titleEng":"EngTitle 31","galleryCount":1,"description":"작품 설명 내용"},{"members":[57,58],"category":"c2","projectNum":31,"titleKor":"한국어 타이틀 32","titleEng":"EngTitle 32","galleryCount":1,"description":"작품 설명 내용"},{"members":[61],"category":"c2","projectNum":32,"titleKor":"한국어 타이틀 33","titleEng":"EngTitle 33","galleryCount":1,"description":"작품 설명 내용"},{"members":[91],"category":"c2","projectNum":33,"titleKor":"한국어 타이틀 34","titleEng":"EngTitle 34","galleryCount":1,"description":"작품 설명 내용"},{"members":[10],"category":"c3","projectNum":34,"titleKor":"한국어 타이틀 35","titleEng":"EngTitle 35","galleryCount":1,"description":"작품 설명 내용"},{"members":[64,20],"category":"c3","projectNum":35,"titleKor":"한국어 타이틀 36","titleEng":"EngTitle 36","galleryCount":1,"description":"작품 설명 내용"},{"members":[22],"category":"c3","projectNum":36,"titleKor":"한국어 타이틀 37","titleEng":"EngTitle 37","galleryCount":1,"description":"작품 설명 내용"},{"members":[25],"category":"c3","projectNum":37,"titleKor":"한국어 타이틀 38","titleEng":"EngTitle 38","galleryCount":1,"description":"작품 설명 내용"},{"members":[27],"category":"c3","projectNum":38,"titleKor":"한국어 타이틀 39","titleEng":"EngTitle 39","galleryCount":1,"description":"작품 설명 내용"},{"members":[48,51],"category":"c3","projectNum":39,"titleKor":"한국어 타이틀 40","titleEng":"EngTitle 40","galleryCount":1,"description":"작품 설명 내용"},{"members":[53],"category":"c3","projectNum":40,"titleKor":"한국어 타이틀 41","titleEng":"EngTitle 41","galleryCount":1,"description":"작품 설명 내용"},{"members":[67],"category":"c3","projectNum":41,"titleKor":"한국어 타이틀 42","titleEng":"EngTitle 42","galleryCount":1,"description":"작품 설명 내용"},{"members":[78],"category":"c3","projectNum":42,"titleKor":"한국어 타이틀 43","titleEng":"EngTitle 43","galleryCount":1,"description":"작품 설명 내용"},{"members":[92],"category":"c3","projectNum":43,"titleKor":"한국어 타이틀 44","titleEng":"EngTitle 44","galleryCount":1,"description":"작품 설명 내용"},{"members":[95],"category":"c3","projectNum":44,"titleKor":"한국어 타이틀 45","titleEng":"EngTitle 45","galleryCount":1,"description":"작품 설명 내용"},{"members":[32,0],"category":"c4","projectNum":45,"titleKor":"한국어 타이틀 46","titleEng":"EngTitle 46","galleryCount":1,"description":"작품 설명 내용"},{"members":[7],"category":"c4","projectNum":46,"titleKor":"한국어 타이틀 47","titleEng":"EngTitle 47","galleryCount":1,"description":"작품 설명 내용"},{"members":[11],"category":"c4","projectNum":47,"titleKor":"한국어 타이틀 48","titleEng":"EngTitle 48","galleryCount":1,"description":"작품 설명 내용"},{"members":[12],"category":"c4","projectNum":48,"titleKor":"한국어 타이틀 49","titleEng":"EngTitle 49","galleryCount":1,"description":"작품 설명 내용"},{"members":[13],"category":"c4","projectNum":49,"titleKor":"한국어 타이틀 50","titleEng":"EngTitle 50","galleryCount":1,"description":"작품 설명 내용"},{"members":[15],"category":"c4","projectNum":50,"titleKor":"한국어 타이틀 51","titleEng":"EngTitle 51","galleryCount":1,"description":"작품 설명 내용"},{"members":[17],"category":"c4","projectNum":51,"titleKor":"한국어 타이틀 52","titleEng":"EngTitle 52","galleryCount":1,"description":"작품 설명 내용"},{"members":[31],"category":"c4","projectNum":52,"titleKor":"한국어 타이틀 53","titleEng":"EngTitle 53","galleryCount":1,"description":"작품 설명 내용"},{"members":[38,85],"category":"c4","projectNum":53,"titleKor":"한국어 타이틀 54","titleEng":"EngTitle 54","galleryCount":1,"description":"작품 설명 내용"},{"members":[40],"category":"c4","projectNum":54,"titleKor":"한국어 타이틀 55","titleEng":"EngTitle 55","galleryCount":1,"description":"작품 설명 내용"},{"members":[44],"category":"c4","projectNum":55,"titleKor":"한국어 타이틀 56","titleEng":"EngTitle 56","galleryCount":1,"description":"작품 설명 내용"},{"members":[46],"category":"c4","projectNum":56,"titleKor":"한국어 타이틀 57","titleEng":"EngTitle 57","galleryCount":1,"description":"작품 설명 내용"},{"members":[55,65],"category":"c4","projectNum":57,"titleKor":"한국어 타이틀 58","titleEng":"EngTitle 58","galleryCount":1,"description":"작품 설명 내용"},{"members":[56],"category":"c4","projectNum":58,"titleKor":"한국어 타이틀 59","titleEng":"EngTitle 59","galleryCount":1,"description":"작품 설명 내용"},{"members":[63],"category":"c4","projectNum":59,"titleKor":"한국어 타이틀 60","titleEng":"EngTitle 60","galleryCount":1,"description":"작품 설명 내용"},{"members":[77],"category":"c4","projectNum":60,"titleKor":"한국어 타이틀 61","titleEng":"EngTitle 61","galleryCount":1,"description":"작품 설명 내용"},{"members":[83],"category":"c4","projectNum":61,"titleKor":"한국어 타이틀 62","titleEng":"EngTitle 62","galleryCount":1,"description":"작품 설명 내용"},{"members":[84],"category":"c4","projectNum":62,"titleKor":"한국어 타이틀 63","titleEng":"EngTitle 63","galleryCount":1,"description":"작품 설명 내용"},{"members":[89],"category":"c4","projectNum":63,"titleKor":"한국어 타이틀 64","titleEng":"EngTitle 64","galleryCount":1,"description":"작품 설명 내용"},{"members":[93],"category":"c4","projectNum":64,"titleKor":"한국어 타이틀 65","titleEng":"EngTitle 65","galleryCount":1,"description":"작품 설명 내용"},{"members":[97],"category":"c4","projectNum":65,"titleKor":"한국어 타이틀 66","titleEng":"EngTitle 66","galleryCount":1,"description":"작품 설명 내용"},{"members":[5,47],"category":"c5","projectNum":66,"titleKor":"한국어 타이틀 67","titleEng":"EngTitle 67","galleryCount":1,"description":"작품 설명 내용"},{"members":[8,70],"category":"c5","projectNum":67,"titleKor":"한국어 타이틀 68","titleEng":"EngTitle 68","galleryCount":1,"description":"작품 설명 내용"},{"members":[79,9],"category":"c5","projectNum":68,"titleKor":"한국어 타이틀 69","titleEng":"EngTitle 69","galleryCount":1,"description":"작품 설명 내용"},{"members":[14],"category":"c5","projectNum":69,"titleKor":"한국어 타이틀 70","titleEng":"EngTitle 70","galleryCount":1,"description":"작품 설명 내용"},{"members":[21,26],"category":"c5","projectNum":70,"titleKor":"한국어 타이틀 71","titleEng":"EngTitle 71","galleryCount":1,"description":"작품 설명 내용"},{"members":[23,33],"category":"c5","projectNum":71,"titleKor":"한국어 타이틀 72","titleEng":"EngTitle 72","galleryCount":1,"description":"작품 설명 내용"},{"members":[37],"category":"c5","projectNum":72,"titleKor":"한국어 타이틀 73","titleEng":"EngTitle 73","galleryCount":1,"description":"작품 설명 내용"},{"members":[39],"category":"c5","projectNum":73,"titleKor":"한국어 타이틀 74","titleEng":"EngTitle 74","galleryCount":1,"description":"작품 설명 내용"},{"members":[62],"category":"c5","projectNum":74,"titleKor":"한국어 타이틀 75","titleEng":"EngTitle 75","galleryCount":1,"description":"작품 설명 내용"},{"members":[74,98],"category":"c5","projectNum":75,"titleKor":"한국어 타이틀 76","titleEng":"EngTitle 76","galleryCount":1,"description":"작품 설명 내용"},{"members":[80],"category":"c5","projectNum":76,"titleKor":"한국어 타이틀 77","titleEng":"EngTitle 77","galleryCount":1,"description":"작품 설명 내용"}]'),kx=40;function hE(n){if(!n)return n;const t="/TU2025gradulate/";if(/^https?:\/\//i.test(n))return n;const i=n.replace(/^\.\.\//,"").replace(/^\//,"");return t+i}const k4={c0:"A",c1:"E",c2:"H",c3:"I",c4:"L",c5:"M"},Ux=["전체","산업디자인공학","미디어디자인공학"],U4={산업디자인공학:0,미디어디자인공학:1},Px=n=>n==="IND"||n===0||n==="0"?0:n==="MED"||n===1||n==="1"?1:n,wp=Km,Ml=V4,P4=A.div`
  position: relative; background: #fff;
`,L4=A.div`
  padding-left: ${kx}px; padding-right: ${kx}px; display: flex; flex-direction: column;
  @media (max-width: 640px) {
    padding-left: 16px;
    padding-right: 16px;  
 }
`;function z4({children:n}){return x.jsx(P4,{children:x.jsx(L4,{children:n})})}const B4=A.div`
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
`,$4=A.div`
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
`,F4=A.div`
  text-decoration: none; cursor: pointer;
`,q4=A.div`position: relative;`;function K4({people:n}){const t=Im();return x.jsx(B4,{children:n.map((i,a)=>{const o=i.id??i.studentId??`${i.nameKor}-${a}`,u=typeof i.projectNum=="number"&&i.category,f=u?i.projectNum+1:null,m=u?`${k4[i.category]||"A"}${String(f).padStart(3,"0")}`:null,p=x.jsx(Bm,{nameKor:i.nameKor,nameEng:i.nameEng,role:i.role,sns:i.sns||"-",eMail:i.eMail,imgSrc:hE(i.imgUrl),imgAlt:`${i.nameKor} profile`},o);return u?x.jsx(F4,{role:"link",tabIndex:0,onClick:()=>t(`/work/${m}`),onKeyDown:g=>{(g.key==="Enter"||g.key===" ")&&t(`/work/${m}`)},"aria-label":`${i.nameKor} 작품 보기 (${m})`,children:p},`link-${o}`):p})})}function H4(){const[n,t]=Ot.useState(!1),[i,a]=Ot.useState(Ux[0]),o=Ot.useMemo(()=>{const m=new Map;return(Xl||[]).forEach(p=>{(p.members||[]).forEach(g=>{m.has(g)||m.set(g,p)})}),m},[]);Ot.useEffect(()=>{a(n?Ml[0]?.id||"":Ux[0])},[n]);const u=Ot.useMemo(()=>{if(!n){if(i==="전체")return wp;let p=U4[i];return p===void 0&&(p=Px(i)),wp.filter(g=>Px(g.department)===p)}const m=Ml.some(p=>p.id===i)?i:Ml.find(p=>p.nameKor===i)?.id||"";return wp.filter(p=>p.professorId===m).map(p=>{let g=o.get(p.num);g||(g=(Xl||[]).find(w=>w.category===p.category&&w.projectNum===p.projectNum)||null);const v=g?`/projects/${g.projectNum}/thumb.jpg`:"/thumbnailExample.png";return{...p,imgUrl:v}})},[i,n,o]),f=Ot.useMemo(()=>n&&(Ml.find(p=>p.id===i)||Ml.find(p=>p.nameKor===i))||null,[n,i]);return x.jsxs(q4,{children:[x.jsx($4,{children:"Peoples"}),x.jsx(cE,{type:"people",onCategoryChange:a,onToggleChange:t}),x.jsxs(z4,{children:[n&&f&&x.jsx(qm,{nameKor:f.nameKor,rank:f.rank||"교수",eMail:f.email,education:f.education,field:f.field,imgSrc:hE(f.imgUrl),imgAlt:`${f.nameKor} profile`}),x.jsx(K4,{people:u})]})]})}const G4=()=>{};var Lx={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE=function(n){const t=[];let i=0;for(let a=0;a<n.length;a++){let o=n.charCodeAt(a);o<128?t[i++]=o:o<2048?(t[i++]=o>>6|192,t[i++]=o&63|128):(o&64512)===55296&&a+1<n.length&&(n.charCodeAt(a+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++a)&1023),t[i++]=o>>18|240,t[i++]=o>>12&63|128,t[i++]=o>>6&63|128,t[i++]=o&63|128):(t[i++]=o>>12|224,t[i++]=o>>6&63|128,t[i++]=o&63|128)}return t},Y4=function(n){const t=[];let i=0,a=0;for(;i<n.length;){const o=n[i++];if(o<128)t[a++]=String.fromCharCode(o);else if(o>191&&o<224){const u=n[i++];t[a++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=n[i++],f=n[i++],m=n[i++],p=((o&7)<<18|(u&63)<<12|(f&63)<<6|m&63)-65536;t[a++]=String.fromCharCode(55296+(p>>10)),t[a++]=String.fromCharCode(56320+(p&1023))}else{const u=n[i++],f=n[i++];t[a++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return t.join("")},dE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let o=0;o<n.length;o+=3){const u=n[o],f=o+1<n.length,m=f?n[o+1]:0,p=o+2<n.length,g=p?n[o+2]:0,v=u>>2,w=(u&3)<<4|m>>4;let S=(m&15)<<2|g>>6,R=g&63;p||(R=64,f||(S=64)),a.push(i[v],i[w],i[S],i[R])}return a.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(fE(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Y4(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let o=0;o<n.length;){const u=i[n.charAt(o++)],m=o<n.length?i[n.charAt(o)]:0;++o;const g=o<n.length?i[n.charAt(o)]:64;++o;const w=o<n.length?i[n.charAt(o)]:64;if(++o,u==null||m==null||g==null||w==null)throw new Q4;const S=u<<2|m>>4;if(a.push(S),g!==64){const R=m<<4&240|g>>2;if(a.push(R),w!==64){const V=g<<6&192|w;a.push(V)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Q4 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const X4=function(n){const t=fE(n);return dE.encodeByteArray(t,!0)},gh=function(n){return X4(n).replace(/\./g,"")},W4=function(n){try{return dE.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Z4(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const J4=()=>Z4().__FIREBASE_DEFAULTS__,tR=()=>{if(typeof process>"u"||typeof Lx>"u")return;const n=Lx.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},eR=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&W4(n[1]);return t&&JSON.parse(t)},Hm=()=>{try{return G4()||J4()||tR()||eR()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},nR=n=>Hm()?.emulatorHosts?.[n],iR=n=>{const t=nR(n);if(!t)return;const i=t.lastIndexOf(":");if(i<=0||i+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const a=parseInt(t.substring(i+1),10);return t[0]==="["?[t.substring(1,i-1),a]:[t.substring(0,i),a]},pE=()=>Hm()?.config;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}wrapCallback(t){return(i,a)=>{i?this.reject(i):this.resolve(a),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(i):t(i,a))}}}/**
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
 */function Gm(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function aR(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function sR(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},a=t||"demo-project",o=n.iat||0,u=n.sub||n.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${a}`,aud:a,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...n};return[gh(JSON.stringify(i)),gh(JSON.stringify(f)),""].join(".")}const $l={};function oR(){const n={prod:[],emulator:[]};for(const t of Object.keys($l))$l[t]?n.emulator.push(t):n.prod.push(t);return n}function lR(n){let t=document.getElementById(n),i=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),i=!0),{created:i,element:t}}let zx=!1;function uR(n,t){if(typeof window>"u"||typeof document>"u"||!Gm(window.location.host)||$l[n]===t||$l[n]||zx)return;$l[n]=t;function i(S){return`__firebase__banner__${S}`}const a="__firebase__banner",u=oR().prod.length>0;function f(){const S=document.getElementById(a);S&&S.remove()}function m(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function p(S,R){S.setAttribute("width","24"),S.setAttribute("id",R),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function g(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{zx=!0,f()},S}function v(S,R){S.setAttribute("id",R),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function w(){const S=lR(a),R=i("text"),V=document.getElementById(R)||document.createElement("span"),B=i("learnmore"),P=document.getElementById(B)||document.createElement("a"),X=i("preprendIcon"),Y=document.getElementById(X)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const J=S.element;m(J),v(P,B);const ot=g();p(Y,X),J.append(Y,V,P,ot),document.body.appendChild(J)}u?(V.innerText="Preview backend disconnected.",Y.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Y.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cR(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hR(){const n=Hm()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fR(){return!hR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function dR(){try{return typeof indexedDB=="object"}catch{return!1}}function pR(){return new Promise((n,t)=>{try{let i=!0;const a="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(a);o.onsuccess=()=>{o.result.close(),i||self.indexedDB.deleteDatabase(a),n(!0)},o.onupgradeneeded=()=>{i=!1},o.onerror=()=>{t(o.error?.message||"")}}catch(i){t(i)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR="FirebaseError";class _o extends Error{constructor(t,i,a){super(i),this.code=t,this.customData=a,this.name=mR,Object.setPrototypeOf(this,_o.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mE.prototype.create)}}class mE{constructor(t,i,a){this.service=t,this.serviceName=i,this.errors=a}create(t,...i){const a=i[0]||{},o=`${this.service}/${t}`,u=this.errors[t],f=u?gR(u,a):"Error",m=`${this.serviceName}: ${f} (${o}).`;return new _o(o,m,a)}}function gR(n,t){return n.replace(yR,(i,a)=>{const o=t[a];return o!=null?String(o):`<${a}?>`})}const yR=/\{\$([^}]+)}/g;function yh(n,t){if(n===t)return!0;const i=Object.keys(n),a=Object.keys(t);for(const o of i){if(!a.includes(o))return!1;const u=n[o],f=t[o];if(Bx(u)&&Bx(f)){if(!yh(u,f))return!1}else if(u!==f)return!1}for(const o of a)if(!i.includes(o))return!1;return!0}function Bx(n){return n!==null&&typeof n=="object"}/**
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
 */function Ci(n){return n&&n._delegate?n._delegate:n}class Wl{constructor(t,i,a){this.name=t,this.instanceFactory=i,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class xR{constructor(t,i){this.name=t,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const i=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(i)){const a=new rR;if(this.instancesDeferred.set(i,a),this.isInitialized(i)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:i});o&&a.resolve(o)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(t){const i=this.normalizeInstanceIdentifier(t?.identifier),a=t?.optional??!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(a)return null;throw o}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(_R(t))try{this.getOrInitializeService({instanceIdentifier:Ka})}catch{}for(const[i,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);try{const u=this.getOrInitializeService({instanceIdentifier:o});a.resolve(u)}catch{}}}}clearInstance(t=Ka){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...t.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ka){return this.instances.has(t)}getOptions(t=Ka){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:i={}}=t,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:a,options:i});for(const[u,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);a===m&&f.resolve(o)}return o}onInit(t,i){const a=this.normalizeInstanceIdentifier(i),o=this.onInitCallbacks.get(a)??new Set;o.add(t),this.onInitCallbacks.set(a,o);const u=this.instances.get(a);return u&&t(u,a),()=>{o.delete(t)}}invokeOnInitCallbacks(t,i){const a=this.onInitCallbacks.get(i);if(a)for(const o of a)try{o(t,i)}catch{}}getOrInitializeService({instanceIdentifier:t,options:i={}}){let a=this.instances.get(t);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:vR(t),options:i}),this.instances.set(t,a),this.instancesOptions.set(t,i),this.invokeOnInitCallbacks(a,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,a)}catch{}return a||null}normalizeInstanceIdentifier(t=Ka){return this.component?this.component.multipleInstances?t:Ka:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vR(n){return n===Ka?void 0:n}function _R(n){return n.instantiationMode==="EAGER"}/**
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
 */class ER{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const i=this.getProvider(t.name);if(i.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);i.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const i=new xR(t,this);return this.providers.set(t,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $t;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})($t||($t={}));const bR={debug:$t.DEBUG,verbose:$t.VERBOSE,info:$t.INFO,warn:$t.WARN,error:$t.ERROR,silent:$t.SILENT},wR=$t.INFO,TR={[$t.DEBUG]:"log",[$t.VERBOSE]:"log",[$t.INFO]:"info",[$t.WARN]:"warn",[$t.ERROR]:"error"},SR=(n,t,...i)=>{if(t<n.logLevel)return;const a=new Date().toISOString(),o=TR[t];if(o)console[o](`[${a}]  ${n.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class gE{constructor(t){this.name=t,this._logLevel=wR,this._logHandler=SR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in $t))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?bR[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,$t.DEBUG,...t),this._logHandler(this,$t.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,$t.VERBOSE,...t),this._logHandler(this,$t.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,$t.INFO,...t),this._logHandler(this,$t.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,$t.WARN,...t),this._logHandler(this,$t.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,$t.ERROR,...t),this._logHandler(this,$t.ERROR,...t)}}const AR=(n,t)=>t.some(i=>n instanceof i);let $x,Fx;function RR(){return $x||($x=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function CR(){return Fx||(Fx=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yE=new WeakMap,Wp=new WeakMap,xE=new WeakMap,Tp=new WeakMap,Ym=new WeakMap;function IR(n){const t=new Promise((i,a)=>{const o=()=>{n.removeEventListener("success",u),n.removeEventListener("error",f)},u=()=>{i(Qr(n.result)),o()},f=()=>{a(n.error),o()};n.addEventListener("success",u),n.addEventListener("error",f)});return t.then(i=>{i instanceof IDBCursor&&yE.set(i,n)}).catch(()=>{}),Ym.set(t,n),t}function jR(n){if(Wp.has(n))return;const t=new Promise((i,a)=>{const o=()=>{n.removeEventListener("complete",u),n.removeEventListener("error",f),n.removeEventListener("abort",f)},u=()=>{i(),o()},f=()=>{a(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",u),n.addEventListener("error",f),n.addEventListener("abort",f)});Wp.set(n,t)}let Zp={get(n,t,i){if(n instanceof IDBTransaction){if(t==="done")return Wp.get(n);if(t==="objectStoreNames")return n.objectStoreNames||xE.get(n);if(t==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return Qr(n[t])},set(n,t,i){return n[t]=i,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function DR(n){Zp=n(Zp)}function NR(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...i){const a=n.call(Sp(this),t,...i);return xE.set(a,t.sort?t.sort():[t]),Qr(a)}:CR().includes(n)?function(...t){return n.apply(Sp(this),t),Qr(yE.get(this))}:function(...t){return Qr(n.apply(Sp(this),t))}}function MR(n){return typeof n=="function"?NR(n):(n instanceof IDBTransaction&&jR(n),AR(n,RR())?new Proxy(n,Zp):n)}function Qr(n){if(n instanceof IDBRequest)return IR(n);if(Tp.has(n))return Tp.get(n);const t=MR(n);return t!==n&&(Tp.set(n,t),Ym.set(t,n)),t}const Sp=n=>Ym.get(n);function OR(n,t,{blocked:i,upgrade:a,blocking:o,terminated:u}={}){const f=indexedDB.open(n,t),m=Qr(f);return a&&f.addEventListener("upgradeneeded",p=>{a(Qr(f.result),p.oldVersion,p.newVersion,Qr(f.transaction),p)}),i&&f.addEventListener("blocked",p=>i(p.oldVersion,p.newVersion,p)),m.then(p=>{u&&p.addEventListener("close",()=>u()),o&&p.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),m}const VR=["get","getKey","getAll","getAllKeys","count"],kR=["put","add","delete","clear"],Ap=new Map;function qx(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Ap.get(t))return Ap.get(t);const i=t.replace(/FromIndex$/,""),a=t!==i,o=kR.includes(i);if(!(i in(a?IDBIndex:IDBObjectStore).prototype)||!(o||VR.includes(i)))return;const u=async function(f,...m){const p=this.transaction(f,o?"readwrite":"readonly");let g=p.store;return a&&(g=g.index(m.shift())),(await Promise.all([g[i](...m),o&&p.done]))[0]};return Ap.set(t,u),u}DR(n=>({...n,get:(t,i,a)=>qx(t,i)||n.get(t,i,a),has:(t,i)=>!!qx(t,i)||n.has(t,i)}));/**
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
 */class UR{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(PR(i)){const a=i.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(i=>i).join(" ")}}function PR(n){return n.getComponent()?.type==="VERSION"}const Jp="@firebase/app",Kx="0.14.4";/**
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
 */const sr=new gE("@firebase/app"),LR="@firebase/app-compat",zR="@firebase/analytics-compat",BR="@firebase/analytics",$R="@firebase/app-check-compat",FR="@firebase/app-check",qR="@firebase/auth",KR="@firebase/auth-compat",HR="@firebase/database",GR="@firebase/data-connect",YR="@firebase/database-compat",QR="@firebase/functions",XR="@firebase/functions-compat",WR="@firebase/installations",ZR="@firebase/installations-compat",JR="@firebase/messaging",t6="@firebase/messaging-compat",e6="@firebase/performance",n6="@firebase/performance-compat",i6="@firebase/remote-config",r6="@firebase/remote-config-compat",a6="@firebase/storage",s6="@firebase/storage-compat",o6="@firebase/firestore",l6="@firebase/ai",u6="@firebase/firestore-compat",c6="firebase",h6="12.4.0";/**
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
 */const tm="[DEFAULT]",f6={[Jp]:"fire-core",[LR]:"fire-core-compat",[BR]:"fire-analytics",[zR]:"fire-analytics-compat",[FR]:"fire-app-check",[$R]:"fire-app-check-compat",[qR]:"fire-auth",[KR]:"fire-auth-compat",[HR]:"fire-rtdb",[GR]:"fire-data-connect",[YR]:"fire-rtdb-compat",[QR]:"fire-fn",[XR]:"fire-fn-compat",[WR]:"fire-iid",[ZR]:"fire-iid-compat",[JR]:"fire-fcm",[t6]:"fire-fcm-compat",[e6]:"fire-perf",[n6]:"fire-perf-compat",[i6]:"fire-rc",[r6]:"fire-rc-compat",[a6]:"fire-gcs",[s6]:"fire-gcs-compat",[o6]:"fire-fst",[u6]:"fire-fst-compat",[l6]:"fire-vertex","fire-js":"fire-js",[c6]:"fire-js-all"};/**
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
 */const Zl=new Map,d6=new Map,em=new Map;function Hx(n,t){try{n.container.addComponent(t)}catch(i){sr.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,i)}}function xh(n){const t=n.name;if(em.has(t))return sr.debug(`There were multiple attempts to register component ${t}.`),!1;em.set(t,n);for(const i of Zl.values())Hx(i,n);for(const i of d6.values())Hx(i,n);return!0}function p6(n,t){const i=n.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),n.container.getProvider(t)}function m6(n){return n==null?!1:n.settings!==void 0}/**
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
 */const g6={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xr=new mE("app","Firebase",g6);/**
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
 */class y6{constructor(t,i,a){this._isDeleted=!1,this._options={...t},this._config={...i},this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new Wl("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Xr.create("app-deleted",{appName:this._name})}}/**
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
 */const x6=h6;function Qm(n,t={}){let i=n;typeof t!="object"&&(t={name:t});const a={name:tm,automaticDataCollectionEnabled:!0,...t},o=a.name;if(typeof o!="string"||!o)throw Xr.create("bad-app-name",{appName:String(o)});if(i||(i=pE()),!i)throw Xr.create("no-options");const u=Zl.get(o);if(u){if(yh(i,u.options)&&yh(a,u.config))return u;throw Xr.create("duplicate-app",{appName:o})}const f=new ER(o);for(const p of em.values())f.addComponent(p);const m=new y6(i,a,f);return Zl.set(o,m),m}function v6(n=tm){const t=Zl.get(n);if(!t&&n===tm&&pE())return Qm();if(!t)throw Xr.create("no-app",{appName:n});return t}function Gx(){return Array.from(Zl.values())}function Zs(n,t,i){let a=f6[n]??n;i&&(a+=`-${i}`);const o=a.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const f=[`Unable to register library "${a}" with version "${t}":`];o&&f.push(`library name "${a}" contains illegal characters (whitespace or "/")`),o&&u&&f.push("and"),u&&f.push(`version name "${t}" contains illegal characters (whitespace or "/")`),sr.warn(f.join(" "));return}xh(new Wl(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}/**
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
 */const _6="firebase-heartbeat-database",E6=1,Jl="firebase-heartbeat-store";let Rp=null;function vE(){return Rp||(Rp=OR(_6,E6,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Jl)}catch(i){console.warn(i)}}}}).catch(n=>{throw Xr.create("idb-open",{originalErrorMessage:n.message})})),Rp}async function b6(n){try{const i=(await vE()).transaction(Jl),a=await i.objectStore(Jl).get(_E(n));return await i.done,a}catch(t){if(t instanceof _o)sr.warn(t.message);else{const i=Xr.create("idb-get",{originalErrorMessage:t?.message});sr.warn(i.message)}}}async function Yx(n,t){try{const a=(await vE()).transaction(Jl,"readwrite");await a.objectStore(Jl).put(t,_E(n)),await a.done}catch(i){if(i instanceof _o)sr.warn(i.message);else{const a=Xr.create("idb-set",{originalErrorMessage:i?.message});sr.warn(a.message)}}}function _E(n){return`${n.name}!${n.options.appId}`}/**
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
 */const w6=1024,T6=30;class S6{constructor(t){this.container=t,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new R6(i),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Qx();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(o=>o.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:i}),this._heartbeatsCache.heartbeats.length>T6){const o=C6(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){sr.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Qx(),{heartbeatsToSend:i,unsentEntries:a}=A6(this._heartbeatsCache.heartbeats),o=gh(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return sr.warn(t),""}}}function Qx(){return new Date().toISOString().substring(0,10)}function A6(n,t=w6){const i=[];let a=n.slice();for(const o of n){const u=i.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),Xx(i)>t){u.dates.pop();break}}else if(i.push({agent:o.agent,dates:[o.date]}),Xx(i)>t){i.pop();break}a=a.slice(1)}return{heartbeatsToSend:i,unsentEntries:a}}class R6{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dR()?pR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await b6(this.app);return i?.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const a=await this.read();return Yx(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const a=await this.read();return Yx(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...t.heartbeats]})}else return}}function Xx(n){return gh(JSON.stringify({version:2,heartbeats:n})).length}function C6(n){if(n.length===0)return-1;let t=0,i=n[0].date;for(let a=1;a<n.length;a++)n[a].date<i&&(i=n[a].date,t=a);return t}/**
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
 */function I6(n){xh(new Wl("platform-logger",t=>new UR(t),"PRIVATE")),xh(new Wl("heartbeat",t=>new S6(t),"PRIVATE")),Zs(Jp,Kx,n),Zs(Jp,Kx,"esm2020"),Zs("fire-js","")}I6("");var j6="firebase",D6="12.4.0";/**
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
 */Zs(j6,D6,"app");var Wx=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wr,EE;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(j,C){function I(){}I.prototype=C.prototype,j.F=C.prototype,j.prototype=new I,j.prototype.constructor=j,j.D=function(M,k,z){for(var N=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)N[ue-2]=arguments[ue];return C.prototype[k].apply(M,N)}}function i(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(a,i),a.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(j,C,I){I||(I=0);const M=Array(16);if(typeof C=="string")for(var k=0;k<16;++k)M[k]=C.charCodeAt(I++)|C.charCodeAt(I++)<<8|C.charCodeAt(I++)<<16|C.charCodeAt(I++)<<24;else for(k=0;k<16;++k)M[k]=C[I++]|C[I++]<<8|C[I++]<<16|C[I++]<<24;C=j.g[0],I=j.g[1],k=j.g[2];let z=j.g[3],N;N=C+(z^I&(k^z))+M[0]+3614090360&4294967295,C=I+(N<<7&4294967295|N>>>25),N=z+(k^C&(I^k))+M[1]+3905402710&4294967295,z=C+(N<<12&4294967295|N>>>20),N=k+(I^z&(C^I))+M[2]+606105819&4294967295,k=z+(N<<17&4294967295|N>>>15),N=I+(C^k&(z^C))+M[3]+3250441966&4294967295,I=k+(N<<22&4294967295|N>>>10),N=C+(z^I&(k^z))+M[4]+4118548399&4294967295,C=I+(N<<7&4294967295|N>>>25),N=z+(k^C&(I^k))+M[5]+1200080426&4294967295,z=C+(N<<12&4294967295|N>>>20),N=k+(I^z&(C^I))+M[6]+2821735955&4294967295,k=z+(N<<17&4294967295|N>>>15),N=I+(C^k&(z^C))+M[7]+4249261313&4294967295,I=k+(N<<22&4294967295|N>>>10),N=C+(z^I&(k^z))+M[8]+1770035416&4294967295,C=I+(N<<7&4294967295|N>>>25),N=z+(k^C&(I^k))+M[9]+2336552879&4294967295,z=C+(N<<12&4294967295|N>>>20),N=k+(I^z&(C^I))+M[10]+4294925233&4294967295,k=z+(N<<17&4294967295|N>>>15),N=I+(C^k&(z^C))+M[11]+2304563134&4294967295,I=k+(N<<22&4294967295|N>>>10),N=C+(z^I&(k^z))+M[12]+1804603682&4294967295,C=I+(N<<7&4294967295|N>>>25),N=z+(k^C&(I^k))+M[13]+4254626195&4294967295,z=C+(N<<12&4294967295|N>>>20),N=k+(I^z&(C^I))+M[14]+2792965006&4294967295,k=z+(N<<17&4294967295|N>>>15),N=I+(C^k&(z^C))+M[15]+1236535329&4294967295,I=k+(N<<22&4294967295|N>>>10),N=C+(k^z&(I^k))+M[1]+4129170786&4294967295,C=I+(N<<5&4294967295|N>>>27),N=z+(I^k&(C^I))+M[6]+3225465664&4294967295,z=C+(N<<9&4294967295|N>>>23),N=k+(C^I&(z^C))+M[11]+643717713&4294967295,k=z+(N<<14&4294967295|N>>>18),N=I+(z^C&(k^z))+M[0]+3921069994&4294967295,I=k+(N<<20&4294967295|N>>>12),N=C+(k^z&(I^k))+M[5]+3593408605&4294967295,C=I+(N<<5&4294967295|N>>>27),N=z+(I^k&(C^I))+M[10]+38016083&4294967295,z=C+(N<<9&4294967295|N>>>23),N=k+(C^I&(z^C))+M[15]+3634488961&4294967295,k=z+(N<<14&4294967295|N>>>18),N=I+(z^C&(k^z))+M[4]+3889429448&4294967295,I=k+(N<<20&4294967295|N>>>12),N=C+(k^z&(I^k))+M[9]+568446438&4294967295,C=I+(N<<5&4294967295|N>>>27),N=z+(I^k&(C^I))+M[14]+3275163606&4294967295,z=C+(N<<9&4294967295|N>>>23),N=k+(C^I&(z^C))+M[3]+4107603335&4294967295,k=z+(N<<14&4294967295|N>>>18),N=I+(z^C&(k^z))+M[8]+1163531501&4294967295,I=k+(N<<20&4294967295|N>>>12),N=C+(k^z&(I^k))+M[13]+2850285829&4294967295,C=I+(N<<5&4294967295|N>>>27),N=z+(I^k&(C^I))+M[2]+4243563512&4294967295,z=C+(N<<9&4294967295|N>>>23),N=k+(C^I&(z^C))+M[7]+1735328473&4294967295,k=z+(N<<14&4294967295|N>>>18),N=I+(z^C&(k^z))+M[12]+2368359562&4294967295,I=k+(N<<20&4294967295|N>>>12),N=C+(I^k^z)+M[5]+4294588738&4294967295,C=I+(N<<4&4294967295|N>>>28),N=z+(C^I^k)+M[8]+2272392833&4294967295,z=C+(N<<11&4294967295|N>>>21),N=k+(z^C^I)+M[11]+1839030562&4294967295,k=z+(N<<16&4294967295|N>>>16),N=I+(k^z^C)+M[14]+4259657740&4294967295,I=k+(N<<23&4294967295|N>>>9),N=C+(I^k^z)+M[1]+2763975236&4294967295,C=I+(N<<4&4294967295|N>>>28),N=z+(C^I^k)+M[4]+1272893353&4294967295,z=C+(N<<11&4294967295|N>>>21),N=k+(z^C^I)+M[7]+4139469664&4294967295,k=z+(N<<16&4294967295|N>>>16),N=I+(k^z^C)+M[10]+3200236656&4294967295,I=k+(N<<23&4294967295|N>>>9),N=C+(I^k^z)+M[13]+681279174&4294967295,C=I+(N<<4&4294967295|N>>>28),N=z+(C^I^k)+M[0]+3936430074&4294967295,z=C+(N<<11&4294967295|N>>>21),N=k+(z^C^I)+M[3]+3572445317&4294967295,k=z+(N<<16&4294967295|N>>>16),N=I+(k^z^C)+M[6]+76029189&4294967295,I=k+(N<<23&4294967295|N>>>9),N=C+(I^k^z)+M[9]+3654602809&4294967295,C=I+(N<<4&4294967295|N>>>28),N=z+(C^I^k)+M[12]+3873151461&4294967295,z=C+(N<<11&4294967295|N>>>21),N=k+(z^C^I)+M[15]+530742520&4294967295,k=z+(N<<16&4294967295|N>>>16),N=I+(k^z^C)+M[2]+3299628645&4294967295,I=k+(N<<23&4294967295|N>>>9),N=C+(k^(I|~z))+M[0]+4096336452&4294967295,C=I+(N<<6&4294967295|N>>>26),N=z+(I^(C|~k))+M[7]+1126891415&4294967295,z=C+(N<<10&4294967295|N>>>22),N=k+(C^(z|~I))+M[14]+2878612391&4294967295,k=z+(N<<15&4294967295|N>>>17),N=I+(z^(k|~C))+M[5]+4237533241&4294967295,I=k+(N<<21&4294967295|N>>>11),N=C+(k^(I|~z))+M[12]+1700485571&4294967295,C=I+(N<<6&4294967295|N>>>26),N=z+(I^(C|~k))+M[3]+2399980690&4294967295,z=C+(N<<10&4294967295|N>>>22),N=k+(C^(z|~I))+M[10]+4293915773&4294967295,k=z+(N<<15&4294967295|N>>>17),N=I+(z^(k|~C))+M[1]+2240044497&4294967295,I=k+(N<<21&4294967295|N>>>11),N=C+(k^(I|~z))+M[8]+1873313359&4294967295,C=I+(N<<6&4294967295|N>>>26),N=z+(I^(C|~k))+M[15]+4264355552&4294967295,z=C+(N<<10&4294967295|N>>>22),N=k+(C^(z|~I))+M[6]+2734768916&4294967295,k=z+(N<<15&4294967295|N>>>17),N=I+(z^(k|~C))+M[13]+1309151649&4294967295,I=k+(N<<21&4294967295|N>>>11),N=C+(k^(I|~z))+M[4]+4149444226&4294967295,C=I+(N<<6&4294967295|N>>>26),N=z+(I^(C|~k))+M[11]+3174756917&4294967295,z=C+(N<<10&4294967295|N>>>22),N=k+(C^(z|~I))+M[2]+718787259&4294967295,k=z+(N<<15&4294967295|N>>>17),N=I+(z^(k|~C))+M[9]+3951481745&4294967295,j.g[0]=j.g[0]+C&4294967295,j.g[1]=j.g[1]+(k+(N<<21&4294967295|N>>>11))&4294967295,j.g[2]=j.g[2]+k&4294967295,j.g[3]=j.g[3]+z&4294967295}a.prototype.v=function(j,C){C===void 0&&(C=j.length);const I=C-this.blockSize,M=this.C;let k=this.h,z=0;for(;z<C;){if(k==0)for(;z<=I;)o(this,j,z),z+=this.blockSize;if(typeof j=="string"){for(;z<C;)if(M[k++]=j.charCodeAt(z++),k==this.blockSize){o(this,M),k=0;break}}else for(;z<C;)if(M[k++]=j[z++],k==this.blockSize){o(this,M),k=0;break}}this.h=k,this.o+=C},a.prototype.A=function(){var j=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);j[0]=128;for(var C=1;C<j.length-8;++C)j[C]=0;C=this.o*8;for(var I=j.length-8;I<j.length;++I)j[I]=C&255,C/=256;for(this.v(j),j=Array(16),C=0,I=0;I<4;++I)for(let M=0;M<32;M+=8)j[C++]=this.g[I]>>>M&255;return j};function u(j,C){var I=m;return Object.prototype.hasOwnProperty.call(I,j)?I[j]:I[j]=C(j)}function f(j,C){this.h=C;const I=[];let M=!0;for(let k=j.length-1;k>=0;k--){const z=j[k]|0;M&&z==C||(I[k]=z,M=!1)}this.g=I}var m={};function p(j){return-128<=j&&j<128?u(j,function(C){return new f([C|0],C<0?-1:0)}):new f([j|0],j<0?-1:0)}function g(j){if(isNaN(j)||!isFinite(j))return w;if(j<0)return P(g(-j));const C=[];let I=1;for(let M=0;j>=I;M++)C[M]=j/I|0,I*=4294967296;return new f(C,0)}function v(j,C){if(j.length==0)throw Error("number format error: empty string");if(C=C||10,C<2||36<C)throw Error("radix out of range: "+C);if(j.charAt(0)=="-")return P(v(j.substring(1),C));if(j.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=g(Math.pow(C,8));let M=w;for(let z=0;z<j.length;z+=8){var k=Math.min(8,j.length-z);const N=parseInt(j.substring(z,z+k),C);k<8?(k=g(Math.pow(C,k)),M=M.j(k).add(g(N))):(M=M.j(I),M=M.add(g(N)))}return M}var w=p(0),S=p(1),R=p(16777216);n=f.prototype,n.m=function(){if(B(this))return-P(this).m();let j=0,C=1;for(let I=0;I<this.g.length;I++){const M=this.i(I);j+=(M>=0?M:4294967296+M)*C,C*=4294967296}return j},n.toString=function(j){if(j=j||10,j<2||36<j)throw Error("radix out of range: "+j);if(V(this))return"0";if(B(this))return"-"+P(this).toString(j);const C=g(Math.pow(j,6));var I=this;let M="";for(;;){const k=ot(I,C).g;I=X(I,k.j(C));let z=((I.g.length>0?I.g[0]:I.h)>>>0).toString(j);if(I=k,V(I))return z+M;for(;z.length<6;)z="0"+z;M=z+M}},n.i=function(j){return j<0?0:j<this.g.length?this.g[j]:this.h};function V(j){if(j.h!=0)return!1;for(let C=0;C<j.g.length;C++)if(j.g[C]!=0)return!1;return!0}function B(j){return j.h==-1}n.l=function(j){return j=X(this,j),B(j)?-1:V(j)?0:1};function P(j){const C=j.g.length,I=[];for(let M=0;M<C;M++)I[M]=~j.g[M];return new f(I,~j.h).add(S)}n.abs=function(){return B(this)?P(this):this},n.add=function(j){const C=Math.max(this.g.length,j.g.length),I=[];let M=0;for(let k=0;k<=C;k++){let z=M+(this.i(k)&65535)+(j.i(k)&65535),N=(z>>>16)+(this.i(k)>>>16)+(j.i(k)>>>16);M=N>>>16,z&=65535,N&=65535,I[k]=N<<16|z}return new f(I,I[I.length-1]&-2147483648?-1:0)};function X(j,C){return j.add(P(C))}n.j=function(j){if(V(this)||V(j))return w;if(B(this))return B(j)?P(this).j(P(j)):P(P(this).j(j));if(B(j))return P(this.j(P(j)));if(this.l(R)<0&&j.l(R)<0)return g(this.m()*j.m());const C=this.g.length+j.g.length,I=[];for(var M=0;M<2*C;M++)I[M]=0;for(M=0;M<this.g.length;M++)for(let k=0;k<j.g.length;k++){const z=this.i(M)>>>16,N=this.i(M)&65535,ue=j.i(k)>>>16,ne=j.i(k)&65535;I[2*M+2*k]+=N*ne,Y(I,2*M+2*k),I[2*M+2*k+1]+=z*ne,Y(I,2*M+2*k+1),I[2*M+2*k+1]+=N*ue,Y(I,2*M+2*k+1),I[2*M+2*k+2]+=z*ue,Y(I,2*M+2*k+2)}for(j=0;j<C;j++)I[j]=I[2*j+1]<<16|I[2*j];for(j=C;j<2*C;j++)I[j]=0;return new f(I,0)};function Y(j,C){for(;(j[C]&65535)!=j[C];)j[C+1]+=j[C]>>>16,j[C]&=65535,C++}function J(j,C){this.g=j,this.h=C}function ot(j,C){if(V(C))throw Error("division by zero");if(V(j))return new J(w,w);if(B(j))return C=ot(P(j),C),new J(P(C.g),P(C.h));if(B(C))return C=ot(j,P(C)),new J(P(C.g),C.h);if(j.g.length>30){if(B(j)||B(C))throw Error("slowDivide_ only works with positive integers.");for(var I=S,M=C;M.l(j)<=0;)I=Z(I),M=Z(M);var k=ft(I,1),z=ft(M,1);for(M=ft(M,2),I=ft(I,2);!V(M);){var N=z.add(M);N.l(j)<=0&&(k=k.add(I),z=N),M=ft(M,1),I=ft(I,1)}return C=X(j,k.j(C)),new J(k,C)}for(k=w;j.l(C)>=0;){for(I=Math.max(1,Math.floor(j.m()/C.m())),M=Math.ceil(Math.log(I)/Math.LN2),M=M<=48?1:Math.pow(2,M-48),z=g(I),N=z.j(C);B(N)||N.l(j)>0;)I-=M,z=g(I),N=z.j(C);V(z)&&(z=S),k=k.add(z),j=X(j,N)}return new J(k,j)}n.B=function(j){return ot(this,j).h},n.and=function(j){const C=Math.max(this.g.length,j.g.length),I=[];for(let M=0;M<C;M++)I[M]=this.i(M)&j.i(M);return new f(I,this.h&j.h)},n.or=function(j){const C=Math.max(this.g.length,j.g.length),I=[];for(let M=0;M<C;M++)I[M]=this.i(M)|j.i(M);return new f(I,this.h|j.h)},n.xor=function(j){const C=Math.max(this.g.length,j.g.length),I=[];for(let M=0;M<C;M++)I[M]=this.i(M)^j.i(M);return new f(I,this.h^j.h)};function Z(j){const C=j.g.length+1,I=[];for(let M=0;M<C;M++)I[M]=j.i(M)<<1|j.i(M-1)>>>31;return new f(I,j.h)}function ft(j,C){const I=C>>5;C%=32;const M=j.g.length-I,k=[];for(let z=0;z<M;z++)k[z]=C>0?j.i(z+I)>>>C|j.i(z+I+1)<<32-C:j.i(z+I);return new f(k,j.h)}a.prototype.digest=a.prototype.A,a.prototype.reset=a.prototype.u,a.prototype.update=a.prototype.v,EE=a,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.B,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=g,f.fromString=v,Wr=f}).apply(typeof Wx<"u"?Wx:typeof self<"u"?self:typeof window<"u"?window:{});var qc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bE,kl,wE,ah,nm,TE,SE,AE;(function(){var n,t=Object.defineProperty;function i(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof qc=="object"&&qc];for(var y=0;y<c.length;++y){var _=c[y];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var a=i(this);function o(c,y){if(y)t:{var _=a;c=c.split(".");for(var T=0;T<c.length-1;T++){var F=c[T];if(!(F in _))break t;_=_[F]}c=c[c.length-1],T=_[c],y=y(T),y!=T&&y!=null&&t(_,c,{configurable:!0,writable:!0,value:y})}}o("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(c){return c||function(y){var _=[],T;for(T in y)Object.prototype.hasOwnProperty.call(y,T)&&_.push([T,y[T]]);return _}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},f=this||self;function m(c){var y=typeof c;return y=="object"&&c!=null||y=="function"}function p(c,y,_){return c.call.apply(c.bind,arguments)}function g(c,y,_){return g=p,g.apply(null,arguments)}function v(c,y){var _=Array.prototype.slice.call(arguments,1);return function(){var T=_.slice();return T.push.apply(T,arguments),c.apply(this,T)}}function w(c,y){function _(){}_.prototype=y.prototype,c.Z=y.prototype,c.prototype=new _,c.prototype.constructor=c,c.Ob=function(T,F,Q){for(var lt=Array(arguments.length-2),At=2;At<arguments.length;At++)lt[At-2]=arguments[At];return y.prototype[F].apply(T,lt)}}var S=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function R(c){const y=c.length;if(y>0){const _=Array(y);for(let T=0;T<y;T++)_[T]=c[T];return _}return[]}function V(c,y){for(let T=1;T<arguments.length;T++){const F=arguments[T];var _=typeof F;if(_=_!="object"?_:F?Array.isArray(F)?"array":_:"null",_=="array"||_=="object"&&typeof F.length=="number"){_=c.length||0;const Q=F.length||0;c.length=_+Q;for(let lt=0;lt<Q;lt++)c[_+lt]=F[lt]}else c.push(F)}}class B{constructor(y,_){this.i=y,this.j=_,this.h=0,this.g=null}get(){let y;return this.h>0?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function P(c){f.setTimeout(()=>{throw c},0)}function X(){var c=j;let y=null;return c.g&&(y=c.g,c.g=c.g.next,c.g||(c.h=null),y.next=null),y}class Y{constructor(){this.h=this.g=null}add(y,_){const T=J.get();T.set(y,_),this.h?this.h.next=T:this.g=T,this.h=T}}var J=new B(()=>new ot,c=>c.reset());class ot{constructor(){this.next=this.g=this.h=null}set(y,_){this.h=y,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let Z,ft=!1,j=new Y,C=()=>{const c=Promise.resolve(void 0);Z=()=>{c.then(I)}};function I(){for(var c;c=X();){try{c.h.call(c.g)}catch(_){P(_)}var y=J;y.j(c),y.h<100&&(y.h++,c.next=y.g,y.g=c)}ft=!1}function M(){this.u=this.u,this.C=this.C}M.prototype.u=!1,M.prototype.dispose=function(){this.u||(this.u=!0,this.N())},M.prototype[Symbol.dispose]=function(){this.dispose()},M.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function k(c,y){this.type=c,this.g=this.target=y,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var z=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var c=!1,y=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};f.addEventListener("test",_,y),f.removeEventListener("test",_,y)}catch{}return c})();function N(c){return/^[\s\xa0]*$/.test(c)}function ue(c,y){k.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,y)}w(ue,k),ue.prototype.init=function(c,y){const _=this.type=c.type,T=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=y,y=c.relatedTarget,y||(_=="mouseover"?y=c.fromElement:_=="mouseout"&&(y=c.toElement)),this.relatedTarget=y,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&ue.Z.h.call(this)},ue.prototype.h=function(){ue.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var ne="closure_listenable_"+(Math.random()*1e6|0),tt=0;function ht(c,y,_,T,F){this.listener=c,this.proxy=null,this.src=y,this.type=_,this.capture=!!T,this.ha=F,this.key=++tt,this.da=this.fa=!1}function yt(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Ct(c,y,_){for(const T in c)y.call(_,c[T],T,c)}function O(c,y){for(const _ in c)y.call(void 0,c[_],_,c)}function at(c){const y={};for(const _ in c)y[_]=c[_];return y}const ut="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ct(c,y){let _,T;for(let F=1;F<arguments.length;F++){T=arguments[F];for(_ in T)c[_]=T[_];for(let Q=0;Q<ut.length;Q++)_=ut[Q],Object.prototype.hasOwnProperty.call(T,_)&&(c[_]=T[_])}}function gt(c){this.src=c,this.g={},this.h=0}gt.prototype.add=function(c,y,_,T,F){const Q=c.toString();c=this.g[Q],c||(c=this.g[Q]=[],this.h++);const lt=_t(c,y,T,F);return lt>-1?(y=c[lt],_||(y.fa=!1)):(y=new ht(y,this.src,Q,!!T,F),y.fa=_,c.push(y)),y};function It(c,y){const _=y.type;if(_ in c.g){var T=c.g[_],F=Array.prototype.indexOf.call(T,y,void 0),Q;(Q=F>=0)&&Array.prototype.splice.call(T,F,1),Q&&(yt(y),c.g[_].length==0&&(delete c.g[_],c.h--))}}function _t(c,y,_,T){for(let F=0;F<c.length;++F){const Q=c[F];if(!Q.da&&Q.listener==y&&Q.capture==!!_&&Q.ha==T)return F}return-1}var ge="closure_lm_"+(Math.random()*1e6|0),Lt={};function Me(c,y,_,T,F){if(Array.isArray(y)){for(let Q=0;Q<y.length;Q++)Me(c,y[Q],_,T,F);return null}return _=vu(_),c&&c[ne]?c.J(y,_,m(T)?!!T.capture:!1,F):Ni(c,y,_,!1,T,F)}function Ni(c,y,_,T,F,Q){if(!y)throw Error("Invalid event type");const lt=m(F)?!!F.capture:!!F;let At=Ao(c);if(At||(c[ge]=At=new gt(c)),_=At.add(y,_,T,lt,Q),_.proxy)return _;if(T=Hn(),_.proxy=T,T.src=c,T.listener=_,c.addEventListener)z||(F=lt),F===void 0&&(F=!1),c.addEventListener(y.toString(),T,F);else if(c.attachEvent)c.attachEvent(is(y.toString()),T);else if(c.addListener&&c.removeListener)c.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Hn(){function c(_){return y.call(c.src,c.listener,_)}const y=of;return c}function on(c,y,_,T,F){if(Array.isArray(y))for(var Q=0;Q<y.length;Q++)on(c,y[Q],_,T,F);else T=m(T)?!!T.capture:!!T,_=vu(_),c&&c[ne]?(c=c.i,Q=String(y).toString(),Q in c.g&&(y=c.g[Q],_=_t(y,_,T,F),_>-1&&(yt(y[_]),Array.prototype.splice.call(y,_,1),y.length==0&&(delete c.g[Q],c.h--)))):c&&(c=Ao(c))&&(y=c.g[y.toString()],c=-1,y&&(c=_t(y,_,T,F)),(_=c>-1?y[c]:null)&&la(_))}function la(c){if(typeof c!="number"&&c&&!c.da){var y=c.src;if(y&&y[ne])It(y.i,c);else{var _=c.type,T=c.proxy;y.removeEventListener?y.removeEventListener(_,T,c.capture):y.detachEvent?y.detachEvent(is(_),T):y.addListener&&y.removeListener&&y.removeListener(T),(_=Ao(y))?(It(_,c),_.h==0&&(_.src=null,y[ge]=null)):yt(c)}}}function is(c){return c in Lt?Lt[c]:Lt[c]="on"+c}function of(c,y){if(c.da)c=!0;else{y=new ue(y,this);const _=c.listener,T=c.ha||c.src;c.fa&&la(c),c=_.call(T,y)}return c}function Ao(c){return c=c[ge],c instanceof gt?c:null}var dn="__closure_events_fn_"+(Math.random()*1e9>>>0);function vu(c){return typeof c=="function"?c:(c[dn]||(c[dn]=function(y){return c.handleEvent(y)}),c[dn])}function Oe(){M.call(this),this.i=new gt(this),this.M=this,this.G=null}w(Oe,M),Oe.prototype[ne]=!0,Oe.prototype.removeEventListener=function(c,y,_,T){on(this,c,y,_,T)};function Le(c,y){var _,T=c.G;if(T)for(_=[];T;T=T.G)_.push(T);if(c=c.M,T=y.type||y,typeof y=="string")y=new k(y,c);else if(y instanceof k)y.target=y.target||c;else{var F=y;y=new k(T,c),ct(y,F)}F=!0;let Q,lt;if(_)for(lt=_.length-1;lt>=0;lt--)Q=y.g=_[lt],F=Mi(Q,T,!0,y)&&F;if(Q=y.g=c,F=Mi(Q,T,!0,y)&&F,F=Mi(Q,T,!1,y)&&F,_)for(lt=0;lt<_.length;lt++)Q=y.g=_[lt],F=Mi(Q,T,!1,y)&&F}Oe.prototype.N=function(){if(Oe.Z.N.call(this),this.i){var c=this.i;for(const y in c.g){const _=c.g[y];for(let T=0;T<_.length;T++)yt(_[T]);delete c.g[y],c.h--}}this.G=null},Oe.prototype.J=function(c,y,_,T){return this.i.add(String(c),y,!1,_,T)},Oe.prototype.K=function(c,y,_,T){return this.i.add(String(c),y,!0,_,T)};function Mi(c,y,_,T){if(y=c.i.g[String(y)],!y)return!0;y=y.concat();let F=!0;for(let Q=0;Q<y.length;++Q){const lt=y[Q];if(lt&&!lt.da&&lt.capture==_){const At=lt.listener,se=lt.ha||lt.src;lt.fa&&It(c.i,lt),F=At.call(se,T)!==!1&&F}}return F&&!T.defaultPrevented}function lf(c,y){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=g(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(y)>2147483647?-1:f.setTimeout(c,y||0)}function Ro(c){c.g=lf(()=>{c.g=null,c.i&&(c.i=!1,Ro(c))},c.l);const y=c.h;c.h=null,c.m.apply(null,y)}class uf extends M{constructor(y,_){super(),this.m=y,this.l=_,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:Ro(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ua(c){M.call(this),this.h=c,this.g={}}w(ua,M);var ur=[];function Je(c){Ct(c.g,function(y,_){this.g.hasOwnProperty(_)&&la(y)},c),c.g={}}ua.prototype.N=function(){ua.Z.N.call(this),Je(this)},ua.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var jn=f.JSON.stringify,ln=f.JSON.parse,cf=class{stringify(c){return f.JSON.stringify(c,void 0)}parse(c){return f.JSON.parse(c,void 0)}};function _u(){}function Eu(){}var oi={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function cr(){k.call(this,"d")}w(cr,k);function Gn(){k.call(this,"c")}w(Gn,k);var Dn={},hr=null;function rs(){return hr=hr||new Oe}Dn.Ia="serverreachability";function Co(c){k.call(this,Dn.Ia,c)}w(Co,k);function fr(c){const y=rs();Le(y,new Co(y))}Dn.STAT_EVENT="statevent";function as(c,y){k.call(this,Dn.STAT_EVENT,c),this.stat=y}w(as,k);function _e(c){const y=rs();Le(y,new as(y,c))}Dn.Ja="timingevent";function bu(c,y){k.call(this,Dn.Ja,c),this.size=y}w(bu,k);function dr(c,y){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){c()},y)}function pr(){this.g=!0}pr.prototype.ua=function(){this.g=!1};function Io(c,y,_,T,F,Q){c.info(function(){if(c.g)if(Q){var lt="",At=Q.split("&");for(let Yt=0;Yt<At.length;Yt++){var se=At[Yt].split("=");if(se.length>1){const we=se[0];se=se[1];const _n=we.split("_");lt=_n.length>=2&&_n[1]=="type"?lt+(we+"="+se+"&"):lt+(we+"=redacted&")}}}else lt=null;else lt=Q;return"XMLHTTP REQ ("+T+") [attempt "+F+"]: "+y+`
`+_+`
`+lt})}function jo(c,y,_,T,F,Q,lt){c.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+F+"]: "+y+`
`+_+`
`+Q+" "+lt})}function Oi(c,y,_,T){c.info(function(){return"XMLHTTP TEXT ("+y+"): "+li(c,_)+(T?" "+T:"")})}function hf(c,y){c.info(function(){return"TIMEOUT: "+y})}pr.prototype.info=function(){};function li(c,y){if(!c.g)return y;if(!y)return null;try{const Q=JSON.parse(y);if(Q){for(c=0;c<Q.length;c++)if(Array.isArray(Q[c])){var _=Q[c];if(!(_.length<2)){var T=_[1];if(Array.isArray(T)&&!(T.length<1)){var F=T[0];if(F!="noop"&&F!="stop"&&F!="close")for(let lt=1;lt<T.length;lt++)T[lt]=""}}}}return jn(Q)}catch{return y}}var Ee={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},He={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Vi;function ca(){}w(ca,_u),ca.prototype.g=function(){return new XMLHttpRequest},Vi=new ca;function ha(c){return encodeURIComponent(String(c))}function ff(c){var y=1;c=c.split(":");const _=[];for(;y>0&&c.length;)_.push(c.shift()),y--;return c.length&&_.push(c.join(":")),_}function Yn(c,y,_,T){this.j=c,this.i=y,this.l=_,this.S=T||1,this.V=new ua(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new mr}function mr(){this.i=null,this.g="",this.h=!1}var ss={},ui={};function ci(c,y,_){c.M=1,c.A=Ui(fe(y)),c.u=_,c.R=!0,gr(c,null)}function gr(c,y){c.F=Date.now(),fa(c),c.B=fe(c.A);var _=c.B,T=c.S;Array.isArray(T)||(T=[String(T)]),Au(_.i,"t",T),c.C=0,_=c.j.L,c.h=new mr,c.g=gs(c.j,_?y:null,!c.u),c.P>0&&(c.O=new uf(g(c.Y,c,c.g),c.P)),y=c.V,_=c.g,T=c.ba;var F="readystatechange";Array.isArray(F)||(F&&(ur[0]=F.toString()),F=ur);for(let Q=0;Q<F.length;Q++){const lt=Me(_,F[Q],T||y.handleEvent,!1,y.h||y);if(!lt)break;y.g[lt.key]=lt}y=c.J?at(c.J):{},c.u?(c.v||(c.v="POST"),y["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,y)):(c.v="GET",c.g.ea(c.B,c.v,null,y)),fr(),Io(c.i,c.v,c.B,c.l,c.S,c.u)}Yn.prototype.ba=function(c){c=c.target;const y=this.O;y&&tn(c)==3?y.j():this.Y(c)},Yn.prototype.Y=function(c){try{if(c==this.g)t:{const At=tn(this.g),se=this.g.ya(),Yt=this.g.ca();if(!(At<3)&&(At!=3||this.g&&(this.h.h||this.g.la()||wa(this.g)))){this.K||At!=4||se==7||(se==8||Yt<=0?fr(3):fr(2)),fi(this);var y=this.g.ca();this.X=y;var _=yr(this);if(this.o=y==200,jo(this.i,this.v,this.B,this.l,this.S,At,y),this.o){if(this.U&&!this.L){e:{if(this.g){var T,F=this.g;if((T=F.g?F.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(T)){var Q=T;break e}}Q=null}if(c=Q)Oi(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,os(this,c);else{this.o=!1,this.m=3,_e(12),di(this),da(this);break t}}if(this.R){c=!0;let we;for(;!this.K&&this.C<_.length;)if(we=wu(this,_),we==ui){At==4&&(this.m=4,_e(14),c=!1),Oi(this.i,this.l,null,"[Incomplete Response]");break}else if(we==ss){this.m=4,_e(15),Oi(this.i,this.l,_,"[Invalid Chunk]"),c=!1;break}else Oi(this.i,this.l,we,null),os(this,we);if(be(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),At!=4||_.length!=0||this.h.h||(this.m=1,_e(16),c=!1),this.o=this.o&&c,!c)Oi(this.i,this.l,_,"[Invalid Chunked Response]"),di(this),da(this);else if(_.length>0&&!this.W){this.W=!0;var lt=this.j;lt.g==this&&lt.aa&&!lt.P&&(lt.j.info("Great, no buffering proxy detected. Bytes received: "+_.length),zo(lt),lt.P=!0,_e(11))}}else Oi(this.i,this.l,_,null),os(this,_);At==4&&di(this),this.o&&!this.K&&(At==4?Bo(this.j,this):(this.o=!1,fa(this)))}else Ta(this.g),y==400&&_.indexOf("Unknown SID")>0?(this.m=3,_e(12)):(this.m=0,_e(13)),di(this),da(this)}}}catch{}finally{}};function yr(c){if(!be(c))return c.g.la();const y=wa(c.g);if(y==="")return"";let _="";const T=y.length,F=tn(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return di(c),da(c),"";c.h.i=new f.TextDecoder}for(let Q=0;Q<T;Q++)c.h.h=!0,_+=c.h.i.decode(y[Q],{stream:!(F&&Q==T-1)});return y.length=0,c.h.g+=_,c.C=0,c.h.g}function be(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function wu(c,y){var _=c.C,T=y.indexOf(`
`,_);return T==-1?ui:(_=Number(y.substring(_,T)),isNaN(_)?ss:(T+=1,T+_>y.length?ui:(y=y.slice(T,T+_),c.C=T+_,y)))}Yn.prototype.cancel=function(){this.K=!0,di(this)};function fa(c){c.T=Date.now()+c.H,hi(c,c.H)}function hi(c,y){if(c.D!=null)throw Error("WatchDog timer not null");c.D=dr(g(c.aa,c),y)}function fi(c){c.D&&(f.clearTimeout(c.D),c.D=null)}Yn.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(hf(this.i,this.B),this.M!=2&&(fr(),_e(17)),di(this),this.m=2,da(this)):hi(this,this.T-c)};function da(c){c.j.I==0||c.K||Bo(c.j,c)}function di(c){fi(c);var y=c.O;y&&typeof y.dispose=="function"&&y.dispose(),c.O=null,Je(c.V),c.g&&(y=c.g,c.g=null,y.abort(),y.dispose())}function os(c,y){try{var _=c.j;if(_.I!=0&&(_.g==c||ga(_.h,c))){if(!c.L&&ga(_.h,c)&&_.I==3){try{var T=_.Ba.g.parse(y)}catch{T=null}if(Array.isArray(T)&&T.length==3){var F=T;if(F[0]==0){t:if(!_.v){if(_.g)if(_.g.F+3e3<c.F)ms(_),pi(_);else break t;Lo(_),_e(18)}}else _.xa=F[1],0<_.xa-_.K&&F[2]<37500&&_.F&&_.A==0&&!_.C&&(_.C=dr(g(_.Va,_),6e3));Nn(_.h)<=1&&_.ta&&(_.ta=void 0)}else zi(_,11)}else if((c.L||_.g==c)&&ms(_),!N(y))for(F=_.Ba.g.parse(y),y=0;y<F.length;y++){let Yt=F[y];const we=Yt[0];if(!(we<=_.K))if(_.K=we,Yt=Yt[1],_.I==2)if(Yt[0]=="c"){_.M=Yt[1],_.ba=Yt[2];const _n=Yt[3];_n!=null&&(_.ka=_n,_.j.info("VER="+_.ka));const mi=Yt[4];mi!=null&&(_.za=mi,_.j.info("SVER="+_.za));const Wn=Yt[5];Wn!=null&&typeof Wn=="number"&&Wn>0&&(T=1.5*Wn,_.O=T,_.j.info("backChannelRequestTimeoutMs_="+T)),T=_;const Zn=c.g;if(Zn){const Jn=Zn.g?Zn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Jn){var Q=T.h;Q.g||Jn.indexOf("spdy")==-1&&Jn.indexOf("quic")==-1&&Jn.indexOf("h2")==-1||(Q.j=Q.l,Q.g=new Set,Q.h&&(ls(Q,Q.h),Q.h=null))}if(T.G){const Fo=Zn.g?Zn.g.getResponseHeader("X-HTTP-Session-Id"):null;Fo&&(T.wa=Fo,Wt(T.J,T.G,Fo))}}_.I=3,_.l&&_.l.ra(),_.aa&&(_.T=Date.now()-c.F,_.j.info("Handshake RTT: "+_.T+"ms")),T=_;var lt=c;if(T.na=Vu(T,T.L?T.ba:null,T.W),lt.L){ki(T.h,lt);var At=lt,se=T.O;se&&(At.H=se),At.D&&(fi(At),fa(At)),T.g=lt}else Du(T);_.i.length>0&&Ca(_)}else Yt[0]!="stop"&&Yt[0]!="close"||zi(_,7);else _.I==3&&(Yt[0]=="stop"||Yt[0]=="close"?Yt[0]=="stop"?zi(_,7):Aa(_):Yt[0]!="noop"&&_.l&&_.l.qa(Yt),_.A=0)}}fr(4)}catch{}}var df=class{constructor(c,y){this.g=c,this.map=y}};function pa(c){this.l=c||10,f.PerformanceNavigationTiming?(c=f.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ma(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Nn(c){return c.h?1:c.g?c.g.size:0}function ga(c,y){return c.h?c.h==y:c.g?c.g.has(y):!1}function ls(c,y){c.g?c.g.add(y):c.h=y}function ki(c,y){c.h&&c.h==y?c.h=null:c.g&&c.g.has(y)&&c.g.delete(y)}pa.prototype.cancel=function(){if(this.i=us(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function us(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let y=c.i;for(const _ of c.g.values())y=y.concat(_.G);return y}return R(c.i)}var cs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pf(c,y){if(c){c=c.split("&");for(let _=0;_<c.length;_++){const T=c[_].indexOf("=");let F,Q=null;T>=0?(F=c[_].substring(0,T),Q=c[_].substring(T+1)):F=c[_],y(F,Q?decodeURIComponent(Q.replace(/\+/g," ")):"")}}}function Qn(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let y;c instanceof Qn?(this.l=c.l,xr(this,c.j),this.o=c.o,this.g=c.g,ya(this,c.u),this.h=c.h,vr(this,Ru(c.i)),this.m=c.m):c&&(y=String(c).match(cs))?(this.l=!1,xr(this,y[1]||"",!0),this.o=xa(y[2]||""),this.g=xa(y[3]||"",!0),ya(this,y[4]),this.h=xa(y[5]||"",!0),vr(this,y[6]||"",!0),this.m=xa(y[7]||"")):(this.l=!1,this.i=new Mn(null,this.l))}Qn.prototype.toString=function(){const c=[];var y=this.j;y&&c.push(ze(y,No,!0),":");var _=this.g;return(_||y=="file")&&(c.push("//"),(y=this.o)&&c.push(ze(y,No,!0),"@"),c.push(ha(_).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.u,_!=null&&c.push(":",String(_))),(_=this.h)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(ze(_,_.charAt(0)=="/"?_r:Mo,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",ze(_,Su)),c.join("")},Qn.prototype.resolve=function(c){const y=fe(this);let _=!!c.j;_?xr(y,c.j):_=!!c.o,_?y.o=c.o:_=!!c.g,_?y.g=c.g:_=c.u!=null;var T=c.h;if(_)ya(y,c.u);else if(_=!!c.h){if(T.charAt(0)!="/")if(this.g&&!this.h)T="/"+T;else{var F=y.h.lastIndexOf("/");F!=-1&&(T=y.h.slice(0,F+1)+T)}if(F=T,F==".."||F==".")T="";else if(F.indexOf("./")!=-1||F.indexOf("/.")!=-1){T=F.lastIndexOf("/",0)==0,F=F.split("/");const Q=[];for(let lt=0;lt<F.length;){const At=F[lt++];At=="."?T&&lt==F.length&&Q.push(""):At==".."?((Q.length>1||Q.length==1&&Q[0]!="")&&Q.pop(),T&&lt==F.length&&Q.push("")):(Q.push(At),T=!0)}T=Q.join("/")}else T=F}return _?y.h=T:_=c.i.toString()!=="",_?vr(y,Ru(c.i)):_=!!c.m,_&&(y.m=c.m),y};function fe(c){return new Qn(c)}function xr(c,y,_){c.j=_?xa(y,!0):y,c.j&&(c.j=c.j.replace(/:$/,""))}function ya(c,y){if(y){if(y=Number(y),isNaN(y)||y<0)throw Error("Bad port number "+y);c.u=y}else c.u=null}function vr(c,y,_){y instanceof Mn?(c.i=y,ko(c.i,c.l)):(_||(y=ze(y,Tu)),c.i=new Mn(y,c.l))}function Wt(c,y,_){c.i.set(y,_)}function Ui(c){return Wt(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function xa(c,y){return c?y?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function ze(c,y,_){return typeof c=="string"?(c=encodeURI(c).replace(y,Do),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Do(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var No=/[#\/\?@]/g,Mo=/[#\?:]/g,_r=/[#\?]/g,Tu=/[#\?@]/g,Su=/#/g;function Mn(c,y){this.h=this.g=null,this.i=c||null,this.j=!!y}function Pi(c){c.g||(c.g=new Map,c.h=0,c.i&&pf(c.i,function(y,_){c.add(decodeURIComponent(y.replace(/\+/g," ")),_)}))}n=Mn.prototype,n.add=function(c,y){Pi(this),this.i=null,c=Xn(this,c);let _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(y),this.h+=1,this};function Oo(c,y){Pi(c),y=Xn(c,y),c.g.has(y)&&(c.i=null,c.h-=c.g.get(y).length,c.g.delete(y))}function Vo(c,y){return Pi(c),y=Xn(c,y),c.g.has(y)}n.forEach=function(c,y){Pi(this),this.g.forEach(function(_,T){_.forEach(function(F){c.call(y,F,T,this)},this)},this)};function hs(c,y){Pi(c);let _=[];if(typeof y=="string")Vo(c,y)&&(_=_.concat(c.g.get(Xn(c,y))));else for(c=Array.from(c.g.values()),y=0;y<c.length;y++)_=_.concat(c[y]);return _}n.set=function(c,y){return Pi(this),this.i=null,c=Xn(this,c),Vo(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[y]),this.h+=1,this},n.get=function(c,y){return c?(c=hs(this,c),c.length>0?String(c[0]):y):y};function Au(c,y,_){Oo(c,y),_.length>0&&(c.i=null,c.g.set(Xn(c,y),R(_)),c.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],y=Array.from(this.g.keys());for(let T=0;T<y.length;T++){var _=y[T];const F=ha(_);_=hs(this,_);for(let Q=0;Q<_.length;Q++){let lt=F;_[Q]!==""&&(lt+="="+ha(_[Q])),c.push(lt)}}return this.i=c.join("&")};function Ru(c){const y=new Mn;return y.i=c.i,c.g&&(y.g=new Map(c.g),y.h=c.h),y}function Xn(c,y){return y=String(y),c.j&&(y=y.toLowerCase()),y}function ko(c,y){y&&!c.j&&(Pi(c),c.i=null,c.g.forEach(function(_,T){const F=T.toLowerCase();T!=F&&(Oo(this,T),Au(this,F,_))},c)),c.j=y}function Uo(c,y){const _=new pr;if(f.Image){const T=new Image;T.onload=v(un,_,"TestLoadImage: loaded",!0,y,T),T.onerror=v(un,_,"TestLoadImage: error",!1,y,T),T.onabort=v(un,_,"TestLoadImage: abort",!1,y,T),T.ontimeout=v(un,_,"TestLoadImage: timeout",!1,y,T),f.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=c}else y(!1)}function Er(c,y){const _=new pr,T=new AbortController,F=setTimeout(()=>{T.abort(),un(_,"TestPingServer: timeout",!1,y)},1e4);fetch(c,{signal:T.signal}).then(Q=>{clearTimeout(F),Q.ok?un(_,"TestPingServer: ok",!0,y):un(_,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(F),un(_,"TestPingServer: error",!1,y)})}function un(c,y,_,T,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),T(_)}catch{}}function Cu(){this.g=new cf}function va(c){this.i=c.Sb||null,this.h=c.ab||!1}w(va,_u),va.prototype.g=function(){return new _a(this.i,this.h)};function _a(c,y){Oe.call(this),this.H=c,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}w(_a,Oe),n=_a.prototype,n.open=function(c,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=y,this.readyState=1,Li(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const y={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(y.body=c),(this.H||f).fetch(new Request(this.D,y)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,cn(this)),this.readyState=0},n.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Li(this)),this.g&&(this.readyState=3,Li(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;br(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function br(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}n.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var y=c.value?c.value:new Uint8Array(0);(y=this.B.decode(y,{stream:!c.done}))&&(this.response=this.responseText+=y)}c.done?cn(this):Li(this),this.readyState==3&&br(this)}},n.Oa=function(c){this.g&&(this.response=this.responseText=c,cn(this))},n.Na=function(c){this.g&&(this.response=c,cn(this))},n.ga=function(){this.g&&cn(this)};function cn(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Li(c)}n.setRequestHeader=function(c,y){this.A.append(c,y)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],y=this.h.entries();for(var _=y.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=y.next();return c.join(`\r
`)};function Li(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(_a.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function wr(c){let y="";return Ct(c,function(_,T){y+=T,y+=":",y+=_,y+=`\r
`}),y}function On(c,y,_){t:{for(T in _){var T=!1;break t}T=!0}T||(_=wr(_),typeof c=="string"?_!=null&&ha(_):Wt(c,y,_))}function ie(c){Oe.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}w(ie,Oe);var fs=/^https?$/i,Iu=["POST","PUT"];n=ie.prototype,n.Fa=function(c){this.H=c},n.ea=function(c,y,_,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);y=y?y.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Vi.g(),this.g.onreadystatechange=S(g(this.Ca,this));try{this.B=!0,this.g.open(y,String(c),!0),this.B=!1}catch(Q){Ea(this,Q);return}if(c=_||"",_=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var F in T)_.set(F,T[F]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const Q of T.keys())_.set(Q,T.get(Q));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(_.keys()).find(Q=>Q.toLowerCase()=="content-type"),F=f.FormData&&c instanceof f.FormData,!(Array.prototype.indexOf.call(Iu,y,void 0)>=0)||T||F||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Q,lt]of _)this.g.setRequestHeader(Q,lt);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(Q){Ea(this,Q)}};function Ea(c,y){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=y,c.o=5,ba(c),Ve(c)}function ba(c){c.A||(c.A=!0,Le(c,"complete"),Le(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,Le(this,"complete"),Le(this,"abort"),Ve(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ve(this,!0)),ie.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Po(this):this.Xa())},n.Xa=function(){Po(this)};function Po(c){if(c.h&&typeof u<"u"){if(c.v&&tn(c)==4)setTimeout(c.Ca.bind(c),0);else if(Le(c,"readystatechange"),tn(c)==4){c.h=!1;try{const Q=c.ca();t:switch(Q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break t;default:y=!1}var _;if(!(_=y)){var T;if(T=Q===0){let lt=String(c.D).match(cs)[1]||null;!lt&&f.self&&f.self.location&&(lt=f.self.location.protocol.slice(0,-1)),T=!fs.test(lt?lt.toLowerCase():"")}_=T}if(_)Le(c,"complete"),Le(c,"success");else{c.o=6;try{var F=tn(c)>2?c.g.statusText:""}catch{F=""}c.l=F+" ["+c.ca()+"]",ba(c)}}finally{Ve(c)}}}}function Ve(c,y){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const _=c.g;c.g=null,y||Le(c,"ready");try{_.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function tn(c){return c.g?c.g.readyState:0}n.ca=function(){try{return tn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(c){if(this.g){var y=this.g.responseText;return c&&y.indexOf(c)==0&&(y=y.substring(c.length)),ln(y)}};function wa(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Ta(c){const y={};c=(c.g&&tn(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<c.length;T++){if(N(c[T]))continue;var _=ff(c[T]);const F=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const Q=y[F]||[];y[F]=Q,Q.push(_)}O(y,function(T){return T.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Sa(c,y,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||y}function ds(c){this.za=0,this.i=[],this.j=new pr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Sa("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Sa("baseRetryDelayMs",5e3,c),this.Za=Sa("retryDelaySeedMs",1e4,c),this.Ta=Sa("forwardChannelMaxRetries",2,c),this.va=Sa("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new pa(c&&c.concurrentRequestLimit),this.Ba=new Cu,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=ds.prototype,n.ka=8,n.I=1,n.connect=function(c,y,_,T){_e(0),this.W=c,this.H=y||{},_&&T!==void 0&&(this.H.OSID=_,this.H.OAID=T),this.F=this.X,this.J=Vu(this,null,this.W),Ca(this)};function Aa(c){if(Ra(c),c.I==3){var y=c.V++,_=fe(c.J);if(Wt(_,"SID",c.M),Wt(_,"RID",y),Wt(_,"TYPE","terminate"),Ia(c,_),y=new Yn(c,c.j,y),y.M=2,y.A=Ui(fe(_)),_=!1,f.navigator&&f.navigator.sendBeacon)try{_=f.navigator.sendBeacon(y.A.toString(),"")}catch{}!_&&f.Image&&(new Image().src=y.A,_=!0),_||(y.g=gs(y.j,null),y.g.ea(y.A)),y.F=Date.now(),fa(y)}Ou(c)}function pi(c){c.g&&(zo(c),c.g.cancel(),c.g=null)}function Ra(c){pi(c),c.v&&(f.clearTimeout(c.v),c.v=null),ms(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&f.clearTimeout(c.m),c.m=null)}function Ca(c){if(!ma(c.h)&&!c.m){c.m=!0;var y=c.Ea;Z||C(),ft||(Z(),ft=!0),j.add(y,c),c.D=0}}function mf(c,y){return Nn(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=y.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=dr(g(c.Ea,c,y),Mu(c,c.D)),c.D++,!0)}n.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const F=new Yn(this,this.j,c);let Q=this.o;if(this.U&&(Q?(Q=at(Q),ct(Q,this.U)):Q=this.U),this.u!==null||this.R||(F.J=Q,Q=null),this.S)t:{for(var y=0,_=0;_<this.i.length;_++){e:{var T=this.i[_];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break e}T=void 0}if(T===void 0)break;if(y+=T,y>4096){y=_;break t}if(y===4096||_===this.i.length-1){y=_+1;break t}}y=1e3}else y=1e3;y=ps(this,F,y),_=fe(this.J),Wt(_,"RID",c),Wt(_,"CVER",22),this.G&&Wt(_,"X-HTTP-Session-Id",this.G),Ia(this,_),Q&&(this.R?y="headers="+ha(wr(Q))+"&"+y:this.u&&On(_,this.u,Q)),ls(this.h,F),this.Ra&&Wt(_,"TYPE","init"),this.S?(Wt(_,"$req",y),Wt(_,"SID","null"),F.U=!0,ci(F,_,null)):ci(F,_,y),this.I=2}}else this.I==3&&(c?ju(this,c):this.i.length==0||ma(this.h)||ju(this))};function ju(c,y){var _;y?_=y.l:_=c.V++;const T=fe(c.J);Wt(T,"SID",c.M),Wt(T,"RID",_),Wt(T,"AID",c.K),Ia(c,T),c.u&&c.o&&On(T,c.u,c.o),_=new Yn(c,c.j,_,c.D+1),c.u===null&&(_.J=c.o),y&&(c.i=y.G.concat(c.i)),y=ps(c,_,1e3),_.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),ls(c.h,_),ci(_,T,y)}function Ia(c,y){c.H&&Ct(c.H,function(_,T){Wt(y,T,_)}),c.l&&Ct({},function(_,T){Wt(y,T,_)})}function ps(c,y,_){_=Math.min(c.i.length,_);const T=c.l?g(c.l.Ka,c.l,c):null;t:{var F=c.i;let At=-1;for(;;){const se=["count="+_];At==-1?_>0?(At=F[0].g,se.push("ofs="+At)):At=0:se.push("ofs="+At);let Yt=!0;for(let we=0;we<_;we++){var Q=F[we].g;const _n=F[we].map;if(Q-=At,Q<0)At=Math.max(0,F[we].g-100),Yt=!1;else try{Q="req"+Q+"_"||"";try{var lt=_n instanceof Map?_n:Object.entries(_n);for(const[mi,Wn]of lt){let Zn=Wn;m(Wn)&&(Zn=jn(Wn)),se.push(Q+mi+"="+encodeURIComponent(Zn))}}catch(mi){throw se.push(Q+"type="+encodeURIComponent("_badmap")),mi}}catch{T&&T(_n)}}if(Yt){lt=se.join("&");break t}}lt=void 0}return c=c.i.splice(0,_),y.G=c,lt}function Du(c){if(!c.g&&!c.v){c.Y=1;var y=c.Da;Z||C(),ft||(Z(),ft=!0),j.add(y,c),c.A=0}}function Lo(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=dr(g(c.Da,c),Mu(c,c.A)),c.A++,!0)}n.Da=function(){if(this.v=null,Nu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=dr(g(this.Wa,this),c)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,_e(10),pi(this),Nu(this))};function zo(c){c.B!=null&&(f.clearTimeout(c.B),c.B=null)}function Nu(c){c.g=new Yn(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var y=fe(c.na);Wt(y,"RID","rpc"),Wt(y,"SID",c.M),Wt(y,"AID",c.K),Wt(y,"CI",c.F?"0":"1"),!c.F&&c.ia&&Wt(y,"TO",c.ia),Wt(y,"TYPE","xmlhttp"),Ia(c,y),c.u&&c.o&&On(y,c.u,c.o),c.O&&(c.g.H=c.O);var _=c.g;c=c.ba,_.M=1,_.A=Ui(fe(y)),_.u=null,_.R=!0,gr(_,c)}n.Va=function(){this.C!=null&&(this.C=null,pi(this),Lo(this),_e(19))};function ms(c){c.C!=null&&(f.clearTimeout(c.C),c.C=null)}function Bo(c,y){var _=null;if(c.g==y){ms(c),zo(c),c.g=null;var T=2}else if(ga(c.h,y))_=y.G,ki(c.h,y),T=1;else return;if(c.I!=0){if(y.o)if(T==1){_=y.u?y.u.length:0,y=Date.now()-y.F;var F=c.D;T=rs(),Le(T,new bu(T,_)),Ca(c)}else Du(c);else if(F=y.m,F==3||F==0&&y.X>0||!(T==1&&mf(c,y)||T==2&&Lo(c)))switch(_&&_.length>0&&(y=c.h,y.i=y.i.concat(_)),F){case 1:zi(c,5);break;case 4:zi(c,10);break;case 3:zi(c,6);break;default:zi(c,2)}}}function Mu(c,y){let _=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(_*=2),_*y}function zi(c,y){if(c.j.info("Error code "+y),y==2){var _=g(c.bb,c),T=c.Ua;const F=!T;T=new Qn(T||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||xr(T,"https"),Ui(T),F?Uo(T.toString(),_):Er(T.toString(),_)}else _e(2);c.I=0,c.l&&c.l.pa(y),Ou(c),Ra(c)}n.bb=function(c){c?(this.j.info("Successfully pinged google.com"),_e(2)):(this.j.info("Failed to ping google.com"),_e(1))};function Ou(c){if(c.I=0,c.ja=[],c.l){const y=us(c.h);(y.length!=0||c.i.length!=0)&&(V(c.ja,y),V(c.ja,c.i),c.h.i.length=0,R(c.i),c.i.length=0),c.l.oa()}}function Vu(c,y,_){var T=_ instanceof Qn?fe(_):new Qn(_);if(T.g!="")y&&(T.g=y+"."+T.g),ya(T,T.u);else{var F=f.location;T=F.protocol,y=y?y+"."+F.hostname:F.hostname,F=+F.port;const Q=new Qn(null);T&&xr(Q,T),y&&(Q.g=y),F&&ya(Q,F),_&&(Q.h=_),T=Q}return _=c.G,y=c.wa,_&&y&&Wt(T,_,y),Wt(T,"VER",c.ka),Ia(c,T),T}function gs(c,y,_){if(y&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return y=c.Aa&&!c.ma?new ie(new va({ab:_})):new ie(c.ma),y.Fa(c.L),y}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ku(){}n=ku.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function ys(){}ys.prototype.g=function(c,y){return new hn(c,y)};function hn(c,y){Oe.call(this),this.g=new ds(y),this.l=c,this.h=y&&y.messageUrlParams||null,c=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(c?c["X-WebChannel-Content-Type"]=y.messageContentType:c={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.sa&&(c?c["X-WebChannel-Client-Profile"]=y.sa:c={"X-WebChannel-Client-Profile":y.sa}),this.g.U=c,(c=y&&y.Qb)&&!N(c)&&(this.g.u=c),this.A=y&&y.supportsCrossDomainXhr||!1,this.v=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!N(y)&&(this.g.G=y,c=this.h,c!==null&&y in c&&(c=this.h,y in c&&delete c[y])),this.j=new Tr(this)}w(hn,Oe),hn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},hn.prototype.close=function(){Aa(this.g)},hn.prototype.o=function(c){var y=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.v&&(_={},_.__data__=jn(c),c=_);y.i.push(new df(y.Ya++,c)),y.I==3&&Ca(y)},hn.prototype.N=function(){this.g.l=null,delete this.j,Aa(this.g),delete this.g,hn.Z.N.call(this)};function $o(c){cr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var y=c.__sm__;if(y){t:{for(const _ in y){c=_;break t}c=void 0}(this.i=c)&&(c=this.i,y=y!==null&&c in y?y[c]:void 0),this.data=y}else this.data=c}w($o,cr);function Uu(){Gn.call(this),this.status=1}w(Uu,Gn);function Tr(c){this.g=c}w(Tr,ku),Tr.prototype.ra=function(){Le(this.g,"a")},Tr.prototype.qa=function(c){Le(this.g,new $o(c))},Tr.prototype.pa=function(c){Le(this.g,new Uu)},Tr.prototype.oa=function(){Le(this.g,"b")},ys.prototype.createWebChannel=ys.prototype.g,hn.prototype.send=hn.prototype.o,hn.prototype.open=hn.prototype.m,hn.prototype.close=hn.prototype.close,AE=function(){return new ys},SE=function(){return rs()},TE=Dn,nm={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ee.NO_ERROR=0,Ee.TIMEOUT=8,Ee.HTTP_ERROR=6,ah=Ee,He.COMPLETE="complete",wE=He,Eu.EventType=oi,oi.OPEN="a",oi.CLOSE="b",oi.ERROR="c",oi.MESSAGE="d",Oe.prototype.listen=Oe.prototype.J,kl=Eu,ie.prototype.listenOnce=ie.prototype.K,ie.prototype.getLastError=ie.prototype.Ha,ie.prototype.getLastErrorCode=ie.prototype.ya,ie.prototype.getStatus=ie.prototype.ca,ie.prototype.getResponseJson=ie.prototype.La,ie.prototype.getResponseText=ie.prototype.la,ie.prototype.send=ie.prototype.ea,ie.prototype.setWithCredentials=ie.prototype.Fa,bE=ie}).apply(typeof qc<"u"?qc:typeof self<"u"?self:typeof window<"u"?window:{});const Zx="@firebase/firestore",Jx="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Eo="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za=new gE("@firebase/firestore");function Gs(){return Za.logLevel}function pt(n,...t){if(Za.logLevel<=$t.DEBUG){const i=t.map(Xm);Za.debug(`Firestore (${Eo}): ${n}`,...i)}}function or(n,...t){if(Za.logLevel<=$t.ERROR){const i=t.map(Xm);Za.error(`Firestore (${Eo}): ${n}`,...i)}}function oo(n,...t){if(Za.logLevel<=$t.WARN){const i=t.map(Xm);Za.warn(`Firestore (${Eo}): ${n}`,...i)}}function Xm(n){if(typeof n=="string")return n;try{/**
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
 */function wt(n,t,i){let a="Unexpected state";typeof t=="string"?a=t:i=t,RE(n,a,i)}function RE(n,t,i){let a=`FIRESTORE (${Eo}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(i!==void 0)try{a+=" CONTEXT: "+JSON.stringify(i)}catch{a+=" CONTEXT: "+i}throw or(a),new Error(a)}function Gt(n,t,i,a){let o="Unexpected state";typeof i=="string"?o=i:a=i,n||RE(t,o,a)}function Rt(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class dt extends _o{constructor(t,i){super(t,i),this.code=t,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class CE{constructor(t,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class N6{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,i){t.enqueueRetryable((()=>i(an.UNAUTHENTICATED)))}shutdown(){}}class M6{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,i){this.changeListener=i,t.enqueueRetryable((()=>i(this.token.user)))}shutdown(){this.changeListener=null}}class O6{constructor(t){this.t=t,this.currentUser=an.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,i){Gt(this.o===void 0,42304);let a=this.i;const o=p=>this.i!==a?(a=this.i,i(p)):Promise.resolve();let u=new ir;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new ir,t.enqueueRetryable((()=>o(this.currentUser)))};const f=()=>{const p=u;t.enqueueRetryable((async()=>{await p.promise,await o(this.currentUser)}))},m=p=>{pt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit((p=>m(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?m(p):(pt("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new ir)}}),0),f()}getToken(){const t=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then((a=>this.i!==t?(pt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(Gt(typeof a.accessToken=="string",31837,{l:a}),new CE(a.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Gt(t===null||typeof t=="string",2055,{h:t}),new an(t)}}class V6{constructor(t,i,a){this.P=t,this.T=i,this.I=a,this.type="FirstParty",this.user=an.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class k6{constructor(t,i,a){this.P=t,this.T=i,this.I=a}getToken(){return Promise.resolve(new V6(this.P,this.T,this.I))}start(t,i){t.enqueueRetryable((()=>i(an.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class tv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class U6{constructor(t,i){this.V=i,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,m6(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,i){Gt(this.o===void 0,3512);const a=u=>{u.error!=null&&pt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.m;return this.m=u.token,pt("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?i(u.token):Promise.resolve()};this.o=u=>{t.enqueueRetryable((()=>a(u)))};const o=u=>{pt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):pt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new tv(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((i=>i?(Gt(typeof i.token=="string",44558,{tokenResult:i}),this.m=i.token,new tv(i.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function P6(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),i=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(i);else for(let a=0;a<n;a++)i[a]=Math.floor(256*Math.random());return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=62*Math.floor(4.129032258064516);let a="";for(;a.length<20;){const o=P6(40);for(let u=0;u<o.length;++u)a.length<20&&o[u]<i&&(a+=t.charAt(o[u]%62))}return a}}function Ut(n,t){return n<t?-1:n>t?1:0}function im(n,t){const i=Math.min(n.length,t.length);for(let a=0;a<i;a++){const o=n.charAt(a),u=t.charAt(a);if(o!==u)return Cp(o)===Cp(u)?Ut(o,u):Cp(o)?1:-1}return Ut(n.length,t.length)}const L6=55296,z6=57343;function Cp(n){const t=n.charCodeAt(0);return t>=L6&&t<=z6}function lo(n,t,i){return n.length===t.length&&n.every(((a,o)=>i(a,t[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev="__name__";class Ei{constructor(t,i,a){i===void 0?i=0:i>t.length&&wt(637,{offset:i,range:t.length}),a===void 0?a=t.length-i:a>t.length-i&&wt(1746,{length:a,range:t.length-i}),this.segments=t,this.offset=i,this.len=a}get length(){return this.len}isEqual(t){return Ei.comparator(this,t)===0}child(t){const i=this.segments.slice(this.offset,this.limit());return t instanceof Ei?t.forEach((a=>{i.push(a)})):i.push(t),this.construct(i)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}forEach(t){for(let i=this.offset,a=this.limit();i<a;i++)t(this.segments[i])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,i){const a=Math.min(t.length,i.length);for(let o=0;o<a;o++){const u=Ei.compareSegments(t.get(o),i.get(o));if(u!==0)return u}return Ut(t.length,i.length)}static compareSegments(t,i){const a=Ei.isNumericId(t),o=Ei.isNumericId(i);return a&&!o?-1:!a&&o?1:a&&o?Ei.extractNumericId(t).compare(Ei.extractNumericId(i)):im(t,i)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Wr.fromString(t.substring(4,t.length-2))}}class ae extends Ei{construct(t,i,a){return new ae(t,i,a)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const i=[];for(const a of t){if(a.indexOf("//")>=0)throw new dt(it.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);i.push(...a.split("/").filter((o=>o.length>0)))}return new ae(i)}static emptyPath(){return new ae([])}}const B6=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends Ei{construct(t,i,a){return new We(t,i,a)}static isValidIdentifier(t){return B6.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ev}static keyField(){return new We([ev])}static fromServerFormat(t){const i=[];let a="",o=0;const u=()=>{if(a.length===0)throw new dt(it.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);i.push(a),a=""};let f=!1;for(;o<t.length;){const m=t[o];if(m==="\\"){if(o+1===t.length)throw new dt(it.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const p=t[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new dt(it.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);a+=p,o+=2}else m==="`"?(f=!f,o++):m!=="."||f?(a+=m,o++):(u(),o++)}if(u(),f)throw new dt(it.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new We(i)}static emptyPath(){return new We([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function IE(n,t,i){if(!i)throw new dt(it.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function $6(n,t,i,a){if(t===!0&&a===!0)throw new dt(it.INVALID_ARGUMENT,`${n} and ${i} cannot be used together.`)}function nv(n){if(!vt.isDocumentKey(n))throw new dt(it.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function iv(n){if(vt.isDocumentKey(n))throw new dt(it.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function jE(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function zh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(a){return a.constructor?a.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":wt(12329,{type:typeof n})}function Fn(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new dt(it.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=zh(n);throw new dt(it.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${i}`)}}return n}/**
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
 */function Ne(n,t){const i={typeString:n};return t&&(i.value=t),i}function cu(n,t){if(!jE(n))throw new dt(it.INVALID_ARGUMENT,"JSON must be an object");let i;for(const a in t)if(t[a]){const o=t[a].typeString,u="value"in t[a]?{value:t[a].value}:void 0;if(!(a in n)){i=`JSON missing required field: '${a}'`;break}const f=n[a];if(o&&typeof f!==o){i=`JSON field '${a}' must be a ${o}.`;break}if(u!==void 0&&f!==u.value){i=`Expected '${a}' field to equal '${u.value}'`;break}}if(i)throw new dt(it.INVALID_ARGUMENT,i);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv=-62135596800,av=1e6;class le{static now(){return le.fromMillis(Date.now())}static fromDate(t){return le.fromMillis(t.getTime())}static fromMillis(t){const i=Math.floor(t/1e3),a=Math.floor((t-1e3*i)*av);return new le(i,a)}constructor(t,i){if(this.seconds=t,this.nanoseconds=i,i<0)throw new dt(it.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(i>=1e9)throw new dt(it.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(t<rv)throw new dt(it.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new dt(it.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/av}_compareTo(t){return this.seconds===t.seconds?Ut(this.nanoseconds,t.nanoseconds):Ut(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:le._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(cu(t,le._jsonSchema))return new le(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-rv;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}le._jsonSchemaVersion="firestore/timestamp/1.0",le._jsonSchema={type:Ne("string",le._jsonSchemaVersion),seconds:Ne("number"),nanoseconds:Ne("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const tu=-1;function F6(n,t){const i=n.toTimestamp().seconds,a=n.toTimestamp().nanoseconds+1,o=St.fromTimestamp(a===1e9?new le(i+1,0):new le(i,a));return new Jr(o,vt.empty(),t)}function q6(n){return new Jr(n.readTime,n.key,tu)}class Jr{constructor(t,i,a){this.readTime=t,this.documentKey=i,this.largestBatchId=a}static min(){return new Jr(St.min(),vt.empty(),tu)}static max(){return new Jr(St.max(),vt.empty(),tu)}}function K6(n,t){let i=n.readTime.compareTo(t.readTime);return i!==0?i:(i=vt.comparator(n.documentKey,t.documentKey),i!==0?i:Ut(n.largestBatchId,t.largestBatchId))}/**
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
 */const H6="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class G6{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bo(n){if(n.code!==it.FAILED_PRECONDITION||n.message!==H6)throw n;pt("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((i=>{this.isDone=!0,this.result=i,this.nextCallback&&this.nextCallback(i)}),(i=>{this.isDone=!0,this.error=i,this.catchCallback&&this.catchCallback(i)}))}catch(t){return this.next(void 0,t)}next(t,i){return this.callbackAttached&&wt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(i,this.error):this.wrapSuccess(t,this.result):new st(((a,o)=>{this.nextCallback=u=>{this.wrapSuccess(t,u).next(a,o)},this.catchCallback=u=>{this.wrapFailure(i,u).next(a,o)}}))}toPromise(){return new Promise(((t,i)=>{this.next(t,i)}))}wrapUserFunction(t){try{const i=t();return i instanceof st?i:st.resolve(i)}catch(i){return st.reject(i)}}wrapSuccess(t,i){return t?this.wrapUserFunction((()=>t(i))):st.resolve(i)}wrapFailure(t,i){return t?this.wrapUserFunction((()=>t(i))):st.reject(i)}static resolve(t){return new st(((i,a)=>{i(t)}))}static reject(t){return new st(((i,a)=>{a(t)}))}static waitFor(t){return new st(((i,a)=>{let o=0,u=0,f=!1;t.forEach((m=>{++o,m.next((()=>{++u,f&&u===o&&i()}),(p=>a(p)))})),f=!0,u===o&&i()}))}static or(t){let i=st.resolve(!1);for(const a of t)i=i.next((o=>o?st.resolve(o):a()));return i}static forEach(t,i){const a=[];return t.forEach(((o,u)=>{a.push(i.call(this,o,u))})),this.waitFor(a)}static mapArray(t,i){return new st(((a,o)=>{const u=t.length,f=new Array(u);let m=0;for(let p=0;p<u;p++){const g=p;i(t[g]).next((v=>{f[g]=v,++m,m===u&&a(f)}),(v=>o(v)))}}))}static doWhile(t,i){return new st(((a,o)=>{const u=()=>{t()===!0?i().next((()=>{u()}),o):a()};u()}))}}function Y6(n){const t=n.match(/Android ([\d.]+)/i),i=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(i)}function wo(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Bh{constructor(t,i){this.previousValue=t,i&&(i.sequenceNumberHandler=a=>this.ae(a),this.ue=a=>i.writeSequenceNumber(a))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Bh.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm=-1;function $h(n){return n==null}function vh(n){return n===0&&1/n==-1/0}function Q6(n){return typeof n=="number"&&Number.isInteger(n)&&!vh(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE="";function X6(n){let t="";for(let i=0;i<n.length;i++)t.length>0&&(t=sv(t)),t=W6(n.get(i),t);return sv(t)}function W6(n,t){let i=t;const a=n.length;for(let o=0;o<a;o++){const u=n.charAt(o);switch(u){case"\0":i+="";break;case DE:i+="";break;default:i+=u}}return i}function sv(n){return n+DE+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ov(n){let t=0;for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&t++;return t}function aa(n,t){for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&t(i,n[i])}function NE(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t,i){this.comparator=t,this.root=i||Xe.EMPTY}insert(t,i){return new me(this.comparator,this.root.insert(t,i,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(t){return new me(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(t){let i=this.root;for(;!i.isEmpty();){const a=this.comparator(t,i.key);if(a===0)return i.value;a<0?i=i.left:a>0&&(i=i.right)}return null}indexOf(t){let i=0,a=this.root;for(;!a.isEmpty();){const o=this.comparator(t,a.key);if(o===0)return i+a.left.size;o<0?a=a.left:(i+=a.left.size+1,a=a.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((i,a)=>(t(i,a),!1)))}toString(){const t=[];return this.inorderTraversal(((i,a)=>(t.push(`${i}:${a}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Kc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Kc(this.root,t,this.comparator,!1)}getReverseIterator(){return new Kc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Kc(this.root,t,this.comparator,!0)}}class Kc{constructor(t,i,a,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!t.isEmpty();)if(u=i?a(t.key,i):1,i&&o&&(u*=-1),u<0)t=this.isReverse?t.left:t.right;else{if(u===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const i={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return i}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Xe{constructor(t,i,a,o,u){this.key=t,this.value=i,this.color=a??Xe.RED,this.left=o??Xe.EMPTY,this.right=u??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,i,a,o,u){return new Xe(t??this.key,i??this.value,a??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,i,a){let o=this;const u=a(t,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(t,i,a),null):u===0?o.copy(null,i,null,null,null):o.copy(null,null,null,null,o.right.insert(t,i,a)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,i){let a,o=this;if(i(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,i),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),i(t,o.key)===0){if(o.right.isEmpty())return Xe.EMPTY;a=o.right.min(),o=o.copy(a.key,a.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,i))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,i)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw wt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw wt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw wt(27949);return t+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw wt(57766)}get value(){throw wt(16141)}get color(){throw wt(16727)}get left(){throw wt(29726)}get right(){throw wt(36894)}copy(t,i,a,o,u){return this}insert(t,i,a){return new Xe(t,i)}remove(t,i){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t){this.comparator=t,this.data=new me(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((i,a)=>(t(i),!1)))}forEachInRange(t,i){const a=this.data.getIteratorFrom(t[0]);for(;a.hasNext();){const o=a.getNext();if(this.comparator(o.key,t[1])>=0)return;i(o.key)}}forEachWhile(t,i){let a;for(a=i!==void 0?this.data.getIteratorFrom(i):this.data.getIterator();a.hasNext();)if(!t(a.getNext().key))return}firstAfterOrEqual(t){const i=this.data.getIteratorFrom(t);return i.hasNext()?i.getNext().key:null}getIterator(){return new lv(this.data.getIterator())}getIteratorFrom(t){return new lv(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let i=this;return i.size<t.size&&(i=t,t=this),t.forEach((a=>{i=i.add(a)})),i}isEqual(t){if(!(t instanceof Pe)||this.size!==t.size)return!1;const i=this.data.getIterator(),a=t.data.getIterator();for(;i.hasNext();){const o=i.getNext().key,u=a.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((i=>{t.push(i)})),t}toString(){const t=[];return this.forEach((i=>t.push(i))),"SortedSet("+t.toString()+")"}copy(t){const i=new Pe(this.comparator);return i.data=t,i}}class lv{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class In{constructor(t){this.fields=t,t.sort(We.comparator)}static empty(){return new In([])}unionWith(t){let i=new Pe(We.comparator);for(const a of this.fields)i=i.add(a);for(const a of t)i=i.add(a);return new In(i.toArray())}covers(t){for(const i of this.fields)if(i.isPrefixOf(t))return!0;return!1}isEqual(t){return lo(this.fields,t.fields,((i,a)=>i.isEqual(a)))}}/**
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
 */class ME extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ze{constructor(t){this.binaryString=t}static fromBase64String(t){const i=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new ME("Invalid base64 string: "+u):u}})(t);return new Ze(i)}static fromUint8Array(t){const i=(function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u})(t);return new Ze(i)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(i){return btoa(i)})(this.binaryString)}toUint8Array(){return(function(i){const a=new Uint8Array(i.length);for(let o=0;o<i.length;o++)a[o]=i.charCodeAt(o);return a})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Ut(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const Z6=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ta(n){if(Gt(!!n,39018),typeof n=="string"){let t=0;const i=Z6.exec(n);if(Gt(!!i,46558,{timestamp:n}),i[1]){let o=i[1];o=(o+"000000000").substr(0,9),t=Number(o)}const a=new Date(n);return{seconds:Math.floor(a.getTime()/1e3),nanos:t}}return{seconds:Ae(n.seconds),nanos:Ae(n.nanos)}}function Ae(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ea(n){return typeof n=="string"?Ze.fromBase64String(n):Ze.fromUint8Array(n)}/**
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
 */const OE="server_timestamp",VE="__type__",kE="__previous_value__",UE="__local_write_time__";function Jm(n){return(n?.mapValue?.fields||{})[VE]?.stringValue===OE}function Fh(n){const t=n.mapValue.fields[kE];return Jm(t)?Fh(t):t}function eu(n){const t=ta(n.mapValue.fields[UE].timestampValue);return new le(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J6{constructor(t,i,a,o,u,f,m,p,g,v){this.databaseId=t,this.appId=i,this.persistenceKey=a,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=v}}const _h="(default)";class nu{constructor(t,i){this.projectId=t,this.database=i||_h}static empty(){return new nu("","")}get isDefaultDatabase(){return this.database===_h}isEqual(t){return t instanceof nu&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const PE="__type__",tC="__max__",Hc={mapValue:{}},LE="__vector__",Eh="value";function na(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Jm(n)?4:nC(n)?9007199254740991:eC(n)?10:11:wt(28295,{value:n})}function Ii(n,t){if(n===t)return!0;const i=na(n);if(i!==na(t))return!1;switch(i){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return eu(n).isEqual(eu(t));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=ta(o.timestampValue),m=ta(u.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(o,u){return ea(o.bytesValue).isEqual(ea(u.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(o,u){return Ae(o.geoPointValue.latitude)===Ae(u.geoPointValue.latitude)&&Ae(o.geoPointValue.longitude)===Ae(u.geoPointValue.longitude)})(n,t);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return Ae(o.integerValue)===Ae(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=Ae(o.doubleValue),m=Ae(u.doubleValue);return f===m?vh(f)===vh(m):isNaN(f)&&isNaN(m)}return!1})(n,t);case 9:return lo(n.arrayValue.values||[],t.arrayValue.values||[],Ii);case 10:case 11:return(function(o,u){const f=o.mapValue.fields||{},m=u.mapValue.fields||{};if(ov(f)!==ov(m))return!1;for(const p in f)if(f.hasOwnProperty(p)&&(m[p]===void 0||!Ii(f[p],m[p])))return!1;return!0})(n,t);default:return wt(52216,{left:n})}}function iu(n,t){return(n.values||[]).find((i=>Ii(i,t)))!==void 0}function uo(n,t){if(n===t)return 0;const i=na(n),a=na(t);if(i!==a)return Ut(i,a);switch(i){case 0:case 9007199254740991:return 0;case 1:return Ut(n.booleanValue,t.booleanValue);case 2:return(function(u,f){const m=Ae(u.integerValue||u.doubleValue),p=Ae(f.integerValue||f.doubleValue);return m<p?-1:m>p?1:m===p?0:isNaN(m)?isNaN(p)?0:-1:1})(n,t);case 3:return uv(n.timestampValue,t.timestampValue);case 4:return uv(eu(n),eu(t));case 5:return im(n.stringValue,t.stringValue);case 6:return(function(u,f){const m=ea(u),p=ea(f);return m.compareTo(p)})(n.bytesValue,t.bytesValue);case 7:return(function(u,f){const m=u.split("/"),p=f.split("/");for(let g=0;g<m.length&&g<p.length;g++){const v=Ut(m[g],p[g]);if(v!==0)return v}return Ut(m.length,p.length)})(n.referenceValue,t.referenceValue);case 8:return(function(u,f){const m=Ut(Ae(u.latitude),Ae(f.latitude));return m!==0?m:Ut(Ae(u.longitude),Ae(f.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return cv(n.arrayValue,t.arrayValue);case 10:return(function(u,f){const m=u.fields||{},p=f.fields||{},g=m[Eh]?.arrayValue,v=p[Eh]?.arrayValue,w=Ut(g?.values?.length||0,v?.values?.length||0);return w!==0?w:cv(g,v)})(n.mapValue,t.mapValue);case 11:return(function(u,f){if(u===Hc.mapValue&&f===Hc.mapValue)return 0;if(u===Hc.mapValue)return 1;if(f===Hc.mapValue)return-1;const m=u.fields||{},p=Object.keys(m),g=f.fields||{},v=Object.keys(g);p.sort(),v.sort();for(let w=0;w<p.length&&w<v.length;++w){const S=im(p[w],v[w]);if(S!==0)return S;const R=uo(m[p[w]],g[v[w]]);if(R!==0)return R}return Ut(p.length,v.length)})(n.mapValue,t.mapValue);default:throw wt(23264,{he:i})}}function uv(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return Ut(n,t);const i=ta(n),a=ta(t),o=Ut(i.seconds,a.seconds);return o!==0?o:Ut(i.nanos,a.nanos)}function cv(n,t){const i=n.values||[],a=t.values||[];for(let o=0;o<i.length&&o<a.length;++o){const u=uo(i[o],a[o]);if(u)return u}return Ut(i.length,a.length)}function co(n){return rm(n)}function rm(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(i){const a=ta(i);return`time(${a.seconds},${a.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(i){return ea(i).toBase64()})(n.bytesValue):"referenceValue"in n?(function(i){return vt.fromName(i).toString()})(n.referenceValue):"geoPointValue"in n?(function(i){return`geo(${i.latitude},${i.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(i){let a="[",o=!0;for(const u of i.values||[])o?o=!1:a+=",",a+=rm(u);return a+"]"})(n.arrayValue):"mapValue"in n?(function(i){const a=Object.keys(i.fields||{}).sort();let o="{",u=!0;for(const f of a)u?u=!1:o+=",",o+=`${f}:${rm(i.fields[f])}`;return o+"}"})(n.mapValue):wt(61005,{value:n})}function sh(n){switch(na(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Fh(n);return t?16+sh(t):16;case 5:return 2*n.stringValue.length;case 6:return ea(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(a){return(a.values||[]).reduce(((o,u)=>o+sh(u)),0)})(n.arrayValue);case 10:case 11:return(function(a){let o=0;return aa(a.fields,((u,f)=>{o+=u.length+sh(f)})),o})(n.mapValue);default:throw wt(13486,{value:n})}}function hv(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function am(n){return!!n&&"integerValue"in n}function tg(n){return!!n&&"arrayValue"in n}function fv(n){return!!n&&"nullValue"in n}function dv(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function oh(n){return!!n&&"mapValue"in n}function eC(n){return(n?.mapValue?.fields||{})[PE]?.stringValue===LE}function Fl(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return aa(n.mapValue.fields,((i,a)=>t.mapValue.fields[i]=Fl(a))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let i=0;i<(n.arrayValue.values||[]).length;++i)t.arrayValue.values[i]=Fl(n.arrayValue.values[i]);return t}return{...n}}function nC(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===tC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(t){this.value=t}static empty(){return new xn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let i=this.value;for(let a=0;a<t.length-1;++a)if(i=(i.mapValue.fields||{})[t.get(a)],!oh(i))return null;return i=(i.mapValue.fields||{})[t.lastSegment()],i||null}}set(t,i){this.getFieldsMap(t.popLast())[t.lastSegment()]=Fl(i)}setAll(t){let i=We.emptyPath(),a={},o=[];t.forEach(((f,m)=>{if(!i.isImmediateParentOf(m)){const p=this.getFieldsMap(i);this.applyChanges(p,a,o),a={},o=[],i=m.popLast()}f?a[m.lastSegment()]=Fl(f):o.push(m.lastSegment())}));const u=this.getFieldsMap(i);this.applyChanges(u,a,o)}delete(t){const i=this.field(t.popLast());oh(i)&&i.mapValue.fields&&delete i.mapValue.fields[t.lastSegment()]}isEqual(t){return Ii(this.value,t.value)}getFieldsMap(t){let i=this.value;i.mapValue.fields||(i.mapValue={fields:{}});for(let a=0;a<t.length;++a){let o=i.mapValue.fields[t.get(a)];oh(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},i.mapValue.fields[t.get(a)]=o),i=o}return i.mapValue.fields}applyChanges(t,i,a){aa(i,((o,u)=>t[o]=u));for(const o of a)delete t[o]}clone(){return new xn(Fl(this.value))}}function zE(n){const t=[];return aa(n.fields,((i,a)=>{const o=new We([i]);if(oh(a)){const u=zE(a.mapValue).fields;if(u.length===0)t.push(o);else for(const f of u)t.push(o.child(f))}else t.push(o)})),new In(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(t,i,a,o,u,f,m){this.key=t,this.documentType=i,this.version=a,this.readTime=o,this.createTime=u,this.data=f,this.documentState=m}static newInvalidDocument(t){return new sn(t,0,St.min(),St.min(),St.min(),xn.empty(),0)}static newFoundDocument(t,i,a,o){return new sn(t,1,i,St.min(),a,o,0)}static newNoDocument(t,i){return new sn(t,2,i,St.min(),St.min(),xn.empty(),0)}static newUnknownDocument(t,i){return new sn(t,3,i,St.min(),St.min(),xn.empty(),2)}convertToFoundDocument(t,i){return!this.createTime.isEqual(St.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=i,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=xn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=xn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=St.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof sn&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new sn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class bh{constructor(t,i){this.position=t,this.inclusive=i}}function pv(n,t,i){let a=0;for(let o=0;o<n.position.length;o++){const u=t[o],f=n.position[o];if(u.field.isKeyField()?a=vt.comparator(vt.fromName(f.referenceValue),i.key):a=uo(f,i.data.field(u.field)),u.dir==="desc"&&(a*=-1),a!==0)break}return a}function mv(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let i=0;i<n.position.length;i++)if(!Ii(n.position[i],t.position[i]))return!1;return!0}/**
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
 */class ru{constructor(t,i="asc"){this.field=t,this.dir=i}}function iC(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class BE{}class De extends BE{constructor(t,i,a){super(),this.field=t,this.op=i,this.value=a}static create(t,i,a){return t.isKeyField()?i==="in"||i==="not-in"?this.createKeyFieldInFilter(t,i,a):new aC(t,i,a):i==="array-contains"?new lC(t,a):i==="in"?new uC(t,a):i==="not-in"?new cC(t,a):i==="array-contains-any"?new hC(t,a):new De(t,i,a)}static createKeyFieldInFilter(t,i,a){return i==="in"?new sC(t,a):new oC(t,a)}matches(t){const i=t.data.field(this.field);return this.op==="!="?i!==null&&i.nullValue===void 0&&this.matchesComparison(uo(i,this.value)):i!==null&&na(this.value)===na(i)&&this.matchesComparison(uo(i,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return wt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ai extends BE{constructor(t,i){super(),this.filters=t,this.op=i,this.Pe=null}static create(t,i){return new ai(t,i)}matches(t){return $E(this)?this.filters.find((i=>!i.matches(t)))===void 0:this.filters.find((i=>i.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,i)=>t.concat(i.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function $E(n){return n.op==="and"}function FE(n){return rC(n)&&$E(n)}function rC(n){for(const t of n.filters)if(t instanceof ai)return!1;return!0}function sm(n){if(n instanceof De)return n.field.canonicalString()+n.op.toString()+co(n.value);if(FE(n))return n.filters.map((t=>sm(t))).join(",");{const t=n.filters.map((i=>sm(i))).join(",");return`${n.op}(${t})`}}function qE(n,t){return n instanceof De?(function(a,o){return o instanceof De&&a.op===o.op&&a.field.isEqual(o.field)&&Ii(a.value,o.value)})(n,t):n instanceof ai?(function(a,o){return o instanceof ai&&a.op===o.op&&a.filters.length===o.filters.length?a.filters.reduce(((u,f,m)=>u&&qE(f,o.filters[m])),!0):!1})(n,t):void wt(19439)}function KE(n){return n instanceof De?(function(i){return`${i.field.canonicalString()} ${i.op} ${co(i.value)}`})(n):n instanceof ai?(function(i){return i.op.toString()+" {"+i.getFilters().map(KE).join(" ,")+"}"})(n):"Filter"}class aC extends De{constructor(t,i,a){super(t,i,a),this.key=vt.fromName(a.referenceValue)}matches(t){const i=vt.comparator(t.key,this.key);return this.matchesComparison(i)}}class sC extends De{constructor(t,i){super(t,"in",i),this.keys=HE("in",i)}matches(t){return this.keys.some((i=>i.isEqual(t.key)))}}class oC extends De{constructor(t,i){super(t,"not-in",i),this.keys=HE("not-in",i)}matches(t){return!this.keys.some((i=>i.isEqual(t.key)))}}function HE(n,t){return(t.arrayValue?.values||[]).map((i=>vt.fromName(i.referenceValue)))}class lC extends De{constructor(t,i){super(t,"array-contains",i)}matches(t){const i=t.data.field(this.field);return tg(i)&&iu(i.arrayValue,this.value)}}class uC extends De{constructor(t,i){super(t,"in",i)}matches(t){const i=t.data.field(this.field);return i!==null&&iu(this.value.arrayValue,i)}}class cC extends De{constructor(t,i){super(t,"not-in",i)}matches(t){if(iu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const i=t.data.field(this.field);return i!==null&&i.nullValue===void 0&&!iu(this.value.arrayValue,i)}}class hC extends De{constructor(t,i){super(t,"array-contains-any",i)}matches(t){const i=t.data.field(this.field);return!(!tg(i)||!i.arrayValue.values)&&i.arrayValue.values.some((a=>iu(this.value.arrayValue,a)))}}/**
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
 */class fC{constructor(t,i=null,a=[],o=[],u=null,f=null,m=null){this.path=t,this.collectionGroup=i,this.orderBy=a,this.filters=o,this.limit=u,this.startAt=f,this.endAt=m,this.Te=null}}function gv(n,t=null,i=[],a=[],o=null,u=null,f=null){return new fC(n,t,i,a,o,u,f)}function eg(n){const t=Rt(n);if(t.Te===null){let i=t.path.canonicalString();t.collectionGroup!==null&&(i+="|cg:"+t.collectionGroup),i+="|f:",i+=t.filters.map((a=>sm(a))).join(","),i+="|ob:",i+=t.orderBy.map((a=>(function(u){return u.field.canonicalString()+u.dir})(a))).join(","),$h(t.limit)||(i+="|l:",i+=t.limit),t.startAt&&(i+="|lb:",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((a=>co(a))).join(",")),t.endAt&&(i+="|ub:",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((a=>co(a))).join(",")),t.Te=i}return t.Te}function ng(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<n.orderBy.length;i++)if(!iC(n.orderBy[i],t.orderBy[i]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let i=0;i<n.filters.length;i++)if(!qE(n.filters[i],t.filters[i]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!mv(n.startAt,t.startAt)&&mv(n.endAt,t.endAt)}function om(n){return vt.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(t,i=null,a=[],o=[],u=null,f="F",m=null,p=null){this.path=t,this.collectionGroup=i,this.explicitOrderBy=a,this.filters=o,this.limit=u,this.limitType=f,this.startAt=m,this.endAt=p,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function dC(n,t,i,a,o,u,f,m){return new To(n,t,i,a,o,u,f,m)}function qh(n){return new To(n)}function yv(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function GE(n){return n.collectionGroup!==null}function ql(n){const t=Rt(n);if(t.Ie===null){t.Ie=[];const i=new Set;for(const u of t.explicitOrderBy)t.Ie.push(u),i.add(u.field.canonicalString());const a=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new Pe(We.comparator);return f.filters.forEach((p=>{p.getFlattenedFilters().forEach((g=>{g.isInequality()&&(m=m.add(g.field))}))})),m})(t).forEach((u=>{i.has(u.canonicalString())||u.isKeyField()||t.Ie.push(new ru(u,a))})),i.has(We.keyField().canonicalString())||t.Ie.push(new ru(We.keyField(),a))}return t.Ie}function wi(n){const t=Rt(n);return t.Ee||(t.Ee=pC(t,ql(n))),t.Ee}function pC(n,t){if(n.limitType==="F")return gv(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new ru(o.field,u)}));const i=n.endAt?new bh(n.endAt.position,n.endAt.inclusive):null,a=n.startAt?new bh(n.startAt.position,n.startAt.inclusive):null;return gv(n.path,n.collectionGroup,t,n.filters,n.limit,i,a)}}function lm(n,t){const i=n.filters.concat([t]);return new To(n.path,n.collectionGroup,n.explicitOrderBy.slice(),i,n.limit,n.limitType,n.startAt,n.endAt)}function um(n,t,i){return new To(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,i,n.startAt,n.endAt)}function Kh(n,t){return ng(wi(n),wi(t))&&n.limitType===t.limitType}function YE(n){return`${eg(wi(n))}|lt:${n.limitType}`}function Ys(n){return`Query(target=${(function(i){let a=i.path.canonicalString();return i.collectionGroup!==null&&(a+=" collectionGroup="+i.collectionGroup),i.filters.length>0&&(a+=`, filters: [${i.filters.map((o=>KE(o))).join(", ")}]`),$h(i.limit)||(a+=", limit: "+i.limit),i.orderBy.length>0&&(a+=`, orderBy: [${i.orderBy.map((o=>(function(f){return`${f.field.canonicalString()} (${f.dir})`})(o))).join(", ")}]`),i.startAt&&(a+=", startAt: ",a+=i.startAt.inclusive?"b:":"a:",a+=i.startAt.position.map((o=>co(o))).join(",")),i.endAt&&(a+=", endAt: ",a+=i.endAt.inclusive?"a:":"b:",a+=i.endAt.position.map((o=>co(o))).join(",")),`Target(${a})`})(wi(n))}; limitType=${n.limitType})`}function Hh(n,t){return t.isFoundDocument()&&(function(a,o){const u=o.key.path;return a.collectionGroup!==null?o.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(u):vt.isDocumentKey(a.path)?a.path.isEqual(u):a.path.isImmediateParentOf(u)})(n,t)&&(function(a,o){for(const u of ql(a))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(n,t)&&(function(a,o){for(const u of a.filters)if(!u.matches(o))return!1;return!0})(n,t)&&(function(a,o){return!(a.startAt&&!(function(f,m,p){const g=pv(f,m,p);return f.inclusive?g<=0:g<0})(a.startAt,ql(a),o)||a.endAt&&!(function(f,m,p){const g=pv(f,m,p);return f.inclusive?g>=0:g>0})(a.endAt,ql(a),o))})(n,t)}function mC(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function QE(n){return(t,i)=>{let a=!1;for(const o of ql(n)){const u=gC(o,t,i);if(u!==0)return u;a=a||o.field.isKeyField()}return 0}}function gC(n,t,i){const a=n.field.isKeyField()?vt.comparator(t.key,i.key):(function(u,f,m){const p=f.data.field(u),g=m.data.field(u);return p!==null&&g!==null?uo(p,g):wt(42886)})(n.field,t,i);switch(n.dir){case"asc":return a;case"desc":return-1*a;default:return wt(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(t,i){this.mapKeyFn=t,this.equalsFn=i,this.inner={},this.innerSize=0}get(t){const i=this.mapKeyFn(t),a=this.inner[i];if(a!==void 0){for(const[o,u]of a)if(this.equalsFn(o,t))return u}}has(t){return this.get(t)!==void 0}set(t,i){const a=this.mapKeyFn(t),o=this.inner[a];if(o===void 0)return this.inner[a]=[[t,i]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],t))return void(o[u]=[t,i]);o.push([t,i]),this.innerSize++}delete(t){const i=this.mapKeyFn(t),a=this.inner[i];if(a===void 0)return!1;for(let o=0;o<a.length;o++)if(this.equalsFn(a[o][0],t))return a.length===1?delete this.inner[i]:a.splice(o,1),this.innerSize--,!0;return!1}forEach(t){aa(this.inner,((i,a)=>{for(const[o,u]of a)t(o,u)}))}isEmpty(){return NE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC=new me(vt.comparator);function lr(){return yC}const XE=new me(vt.comparator);function Ul(...n){let t=XE;for(const i of n)t=t.insert(i.key,i);return t}function WE(n){let t=XE;return n.forEach(((i,a)=>t=t.insert(i,a.overlayedDocument))),t}function Ga(){return Kl()}function ZE(){return Kl()}function Kl(){return new es((n=>n.toString()),((n,t)=>n.isEqual(t)))}const xC=new me(vt.comparator),vC=new Pe(vt.comparator);function Pt(...n){let t=vC;for(const i of n)t=t.add(i);return t}const _C=new Pe(Ut);function EC(){return _C}/**
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
 */function ig(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vh(t)?"-0":t}}function JE(n){return{integerValue:""+n}}function t2(n,t){return Q6(t)?JE(t):ig(n,t)}/**
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
 */class Gh{constructor(){this._=void 0}}function bC(n,t,i){return n instanceof wh?(function(o,u){const f={fields:{[VE]:{stringValue:OE},[UE]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Jm(u)&&(u=Fh(u)),u&&(f.fields[kE]=u),{mapValue:f}})(i,t):n instanceof au?n2(n,t):n instanceof su?i2(n,t):(function(o,u){const f=e2(o,u),m=xv(f)+xv(o.Ae);return am(f)&&am(o.Ae)?JE(m):ig(o.serializer,m)})(n,t)}function wC(n,t,i){return n instanceof au?n2(n,t):n instanceof su?i2(n,t):i}function e2(n,t){return n instanceof ou?(function(a){return am(a)||(function(u){return!!u&&"doubleValue"in u})(a)})(t)?t:{integerValue:0}:null}class wh extends Gh{}class au extends Gh{constructor(t){super(),this.elements=t}}function n2(n,t){const i=r2(t);for(const a of n.elements)i.some((o=>Ii(o,a)))||i.push(a);return{arrayValue:{values:i}}}class su extends Gh{constructor(t){super(),this.elements=t}}function i2(n,t){let i=r2(t);for(const a of n.elements)i=i.filter((o=>!Ii(o,a)));return{arrayValue:{values:i}}}class ou extends Gh{constructor(t,i){super(),this.serializer=t,this.Ae=i}}function xv(n){return Ae(n.integerValue||n.doubleValue)}function r2(n){return tg(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(t,i){this.field=t,this.transform=i}}function SC(n,t){return n.field.isEqual(t.field)&&(function(a,o){return a instanceof au&&o instanceof au||a instanceof su&&o instanceof su?lo(a.elements,o.elements,Ii):a instanceof ou&&o instanceof ou?Ii(a.Ae,o.Ae):a instanceof wh&&o instanceof wh})(n.transform,t.transform)}class AC{constructor(t,i){this.version=t,this.transformResults=i}}class Ti{constructor(t,i){this.updateTime=t,this.exists=i}static none(){return new Ti}static exists(t){return new Ti(void 0,t)}static updateTime(t){return new Ti(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function lh(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Yh{}function a2(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new o2(n.key,Ti.none()):new hu(n.key,n.data,Ti.none());{const i=n.data,a=xn.empty();let o=new Pe(We.comparator);for(let u of t.fields)if(!o.has(u)){let f=i.field(u);f===null&&u.length>1&&(u=u.popLast(),f=i.field(u)),f===null?a.delete(u):a.set(u,f),o=o.add(u)}return new sa(n.key,a,new In(o.toArray()),Ti.none())}}function RC(n,t,i){n instanceof hu?(function(o,u,f){const m=o.value.clone(),p=_v(o.fieldTransforms,u,f.transformResults);m.setAll(p),u.convertToFoundDocument(f.version,m).setHasCommittedMutations()})(n,t,i):n instanceof sa?(function(o,u,f){if(!lh(o.precondition,u))return void u.convertToUnknownDocument(f.version);const m=_v(o.fieldTransforms,u,f.transformResults),p=u.data;p.setAll(s2(o)),p.setAll(m),u.convertToFoundDocument(f.version,p).setHasCommittedMutations()})(n,t,i):(function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()})(0,t,i)}function Hl(n,t,i,a){return n instanceof hu?(function(u,f,m,p){if(!lh(u.precondition,f))return m;const g=u.value.clone(),v=Ev(u.fieldTransforms,p,f);return g.setAll(v),f.convertToFoundDocument(f.version,g).setHasLocalMutations(),null})(n,t,i,a):n instanceof sa?(function(u,f,m,p){if(!lh(u.precondition,f))return m;const g=Ev(u.fieldTransforms,p,f),v=f.data;return v.setAll(s2(u)),v.setAll(g),f.convertToFoundDocument(f.version,v).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((w=>w.field)))})(n,t,i,a):(function(u,f,m){return lh(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m})(n,t,i)}function CC(n,t){let i=null;for(const a of n.fieldTransforms){const o=t.data.field(a.field),u=e2(a.transform,o||null);u!=null&&(i===null&&(i=xn.empty()),i.set(a.field,u))}return i||null}function vv(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(a,o){return a===void 0&&o===void 0||!(!a||!o)&&lo(a,o,((u,f)=>SC(u,f)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class hu extends Yh{constructor(t,i,a,o=[]){super(),this.key=t,this.value=i,this.precondition=a,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class sa extends Yh{constructor(t,i,a,o,u=[]){super(),this.key=t,this.data=i,this.fieldMask=a,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function s2(n){const t=new Map;return n.fieldMask.fields.forEach((i=>{if(!i.isEmpty()){const a=n.data.field(i);t.set(i,a)}})),t}function _v(n,t,i){const a=new Map;Gt(n.length===i.length,32656,{Re:i.length,Ve:n.length});for(let o=0;o<i.length;o++){const u=n[o],f=u.transform,m=t.data.field(u.field);a.set(u.field,wC(f,m,i[o]))}return a}function Ev(n,t,i){const a=new Map;for(const o of n){const u=o.transform,f=i.data.field(o.field);a.set(o.field,bC(u,f,t))}return a}class o2 extends Yh{constructor(t,i){super(),this.key=t,this.precondition=i,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class IC extends Yh{constructor(t,i){super(),this.key=t,this.precondition=i,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(t,i,a,o){this.batchId=t,this.localWriteTime=i,this.baseMutations=a,this.mutations=o}applyToRemoteDocument(t,i){const a=i.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(t.key)&&RC(u,t,a[o])}}applyToLocalView(t,i){for(const a of this.baseMutations)a.key.isEqual(t.key)&&(i=Hl(a,t,i,this.localWriteTime));for(const a of this.mutations)a.key.isEqual(t.key)&&(i=Hl(a,t,i,this.localWriteTime));return i}applyToLocalDocumentSet(t,i){const a=ZE();return this.mutations.forEach((o=>{const u=t.get(o.key),f=u.overlayedDocument;let m=this.applyToLocalView(f,u.mutatedFields);m=i.has(o.key)?null:m;const p=a2(f,m);p!==null&&a.set(o.key,p),f.isValidDocument()||f.convertToNoDocument(St.min())})),a}keys(){return this.mutations.reduce(((t,i)=>t.add(i.key)),Pt())}isEqual(t){return this.batchId===t.batchId&&lo(this.mutations,t.mutations,((i,a)=>vv(i,a)))&&lo(this.baseMutations,t.baseMutations,((i,a)=>vv(i,a)))}}class rg{constructor(t,i,a,o){this.batch=t,this.commitVersion=i,this.mutationResults=a,this.docVersions=o}static from(t,i,a){Gt(t.mutations.length===a.length,58842,{me:t.mutations.length,fe:a.length});let o=(function(){return xC})();const u=t.mutations;for(let f=0;f<u.length;f++)o=o.insert(u[f].key,a[f].version);return new rg(t,i,a,o)}}/**
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
 */let DC=class{constructor(t,i){this.largestBatchId=t,this.mutation=i}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class NC{constructor(t,i){this.count=t,this.unchangedNames=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie,Bt;function MC(n){switch(n){case it.OK:return wt(64938);case it.CANCELLED:case it.UNKNOWN:case it.DEADLINE_EXCEEDED:case it.RESOURCE_EXHAUSTED:case it.INTERNAL:case it.UNAVAILABLE:case it.UNAUTHENTICATED:return!1;case it.INVALID_ARGUMENT:case it.NOT_FOUND:case it.ALREADY_EXISTS:case it.PERMISSION_DENIED:case it.FAILED_PRECONDITION:case it.ABORTED:case it.OUT_OF_RANGE:case it.UNIMPLEMENTED:case it.DATA_LOSS:return!0;default:return wt(15467,{code:n})}}function l2(n){if(n===void 0)return or("GRPC error has no .code"),it.UNKNOWN;switch(n){case Ie.OK:return it.OK;case Ie.CANCELLED:return it.CANCELLED;case Ie.UNKNOWN:return it.UNKNOWN;case Ie.DEADLINE_EXCEEDED:return it.DEADLINE_EXCEEDED;case Ie.RESOURCE_EXHAUSTED:return it.RESOURCE_EXHAUSTED;case Ie.INTERNAL:return it.INTERNAL;case Ie.UNAVAILABLE:return it.UNAVAILABLE;case Ie.UNAUTHENTICATED:return it.UNAUTHENTICATED;case Ie.INVALID_ARGUMENT:return it.INVALID_ARGUMENT;case Ie.NOT_FOUND:return it.NOT_FOUND;case Ie.ALREADY_EXISTS:return it.ALREADY_EXISTS;case Ie.PERMISSION_DENIED:return it.PERMISSION_DENIED;case Ie.FAILED_PRECONDITION:return it.FAILED_PRECONDITION;case Ie.ABORTED:return it.ABORTED;case Ie.OUT_OF_RANGE:return it.OUT_OF_RANGE;case Ie.UNIMPLEMENTED:return it.UNIMPLEMENTED;case Ie.DATA_LOSS:return it.DATA_LOSS;default:return wt(39323,{code:n})}}(Bt=Ie||(Ie={}))[Bt.OK=0]="OK",Bt[Bt.CANCELLED=1]="CANCELLED",Bt[Bt.UNKNOWN=2]="UNKNOWN",Bt[Bt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Bt[Bt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Bt[Bt.NOT_FOUND=5]="NOT_FOUND",Bt[Bt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Bt[Bt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Bt[Bt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Bt[Bt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Bt[Bt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Bt[Bt.ABORTED=10]="ABORTED",Bt[Bt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Bt[Bt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Bt[Bt.INTERNAL=13]="INTERNAL",Bt[Bt.UNAVAILABLE=14]="UNAVAILABLE",Bt[Bt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function OC(){return new TextEncoder}/**
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
 */const VC=new Wr([4294967295,4294967295],0);function bv(n){const t=OC().encode(n),i=new EE;return i.update(t),new Uint8Array(i.digest())}function wv(n){const t=new DataView(n.buffer),i=t.getUint32(0,!0),a=t.getUint32(4,!0),o=t.getUint32(8,!0),u=t.getUint32(12,!0);return[new Wr([i,a],0),new Wr([o,u],0)]}class ag{constructor(t,i,a){if(this.bitmap=t,this.padding=i,this.hashCount=a,i<0||i>=8)throw new Pl(`Invalid padding: ${i}`);if(a<0)throw new Pl(`Invalid hash count: ${a}`);if(t.length>0&&this.hashCount===0)throw new Pl(`Invalid hash count: ${a}`);if(t.length===0&&i!==0)throw new Pl(`Invalid padding when bitmap length is 0: ${i}`);this.ge=8*t.length-i,this.pe=Wr.fromNumber(this.ge)}ye(t,i,a){let o=t.add(i.multiply(Wr.fromNumber(a)));return o.compare(VC)===1&&(o=new Wr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const i=bv(t),[a,o]=wv(i);for(let u=0;u<this.hashCount;u++){const f=this.ye(a,o,u);if(!this.we(f))return!1}return!0}static create(t,i,a){const o=t%8==0?0:8-t%8,u=new Uint8Array(Math.ceil(t/8)),f=new ag(u,o,i);return a.forEach((m=>f.insert(m))),f}insert(t){if(this.ge===0)return;const i=bv(t),[a,o]=wv(i);for(let u=0;u<this.hashCount;u++){const f=this.ye(a,o,u);this.Se(f)}}Se(t){const i=Math.floor(t/8),a=t%8;this.bitmap[i]|=1<<a}}class Pl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(t,i,a,o,u){this.snapshotVersion=t,this.targetChanges=i,this.targetMismatches=a,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(t,i,a){const o=new Map;return o.set(t,fu.createSynthesizedTargetChangeForCurrentChange(t,i,a)),new Qh(St.min(),o,new me(Ut),lr(),Pt())}}class fu{constructor(t,i,a,o,u){this.resumeToken=t,this.current=i,this.addedDocuments=a,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(t,i,a){return new fu(a,i,Pt(),Pt(),Pt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(t,i,a,o){this.be=t,this.removedTargetIds=i,this.key=a,this.De=o}}class u2{constructor(t,i){this.targetId=t,this.Ce=i}}class c2{constructor(t,i,a=Ze.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=i,this.resumeToken=a,this.cause=o}}class Tv{constructor(){this.ve=0,this.Fe=Sv(),this.Me=Ze.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=Pt(),i=Pt(),a=Pt();return this.Fe.forEach(((o,u)=>{switch(u){case 0:t=t.add(o);break;case 2:i=i.add(o);break;case 1:a=a.add(o);break;default:wt(38017,{changeType:u})}})),new fu(this.Me,this.xe,t,i,a)}qe(){this.Oe=!1,this.Fe=Sv()}Qe(t,i){this.Oe=!0,this.Fe=this.Fe.insert(t,i)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,Gt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class kC{constructor(t){this.Ge=t,this.ze=new Map,this.je=lr(),this.Je=Gc(),this.He=Gc(),this.Ye=new me(Ut)}Ze(t){for(const i of t.be)t.De&&t.De.isFoundDocument()?this.Xe(i,t.De):this.et(i,t.key,t.De);for(const i of t.removedTargetIds)this.et(i,t.key,t.De)}tt(t){this.forEachTarget(t,(i=>{const a=this.nt(i);switch(t.state){case 0:this.rt(i)&&a.Le(t.resumeToken);break;case 1:a.Ke(),a.Ne||a.qe(),a.Le(t.resumeToken);break;case 2:a.Ke(),a.Ne||this.removeTarget(i);break;case 3:this.rt(i)&&(a.We(),a.Le(t.resumeToken));break;case 4:this.rt(i)&&(this.it(i),a.Le(t.resumeToken));break;default:wt(56790,{state:t.state})}}))}forEachTarget(t,i){t.targetIds.length>0?t.targetIds.forEach(i):this.ze.forEach(((a,o)=>{this.rt(o)&&i(o)}))}st(t){const i=t.targetId,a=t.Ce.count,o=this.ot(i);if(o){const u=o.target;if(om(u))if(a===0){const f=new vt(u.path);this.et(i,f,sn.newNoDocument(f,St.min()))}else Gt(a===1,20013,{expectedCount:a});else{const f=this._t(i);if(f!==a){const m=this.ut(t),p=m?this.ct(m,t,f):1;if(p!==0){this.it(i);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(i,g)}}}}}ut(t){const i=t.Ce.unchangedNames;if(!i||!i.bits)return null;const{bits:{bitmap:a="",padding:o=0},hashCount:u=0}=i;let f,m;try{f=ea(a).toUint8Array()}catch(p){if(p instanceof ME)return oo("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{m=new ag(f,o,u)}catch(p){return oo(p instanceof Pl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return m.ge===0?null:m}ct(t,i,a){return i.Ce.count===a-this.Pt(t,i.targetId)?0:2}Pt(t,i){const a=this.Ge.getRemoteKeysForTarget(i);let o=0;return a.forEach((u=>{const f=this.Ge.ht(),m=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;t.mightContain(m)||(this.et(i,u,null),o++)})),o}Tt(t){const i=new Map;this.ze.forEach(((u,f)=>{const m=this.ot(f);if(m){if(u.current&&om(m.target)){const p=new vt(m.target.path);this.It(p).has(f)||this.Et(f,p)||this.et(f,p,sn.newNoDocument(p,t))}u.Be&&(i.set(f,u.ke()),u.qe())}}));let a=Pt();this.He.forEach(((u,f)=>{let m=!0;f.forEachWhile((p=>{const g=this.ot(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(a=a.add(u))})),this.je.forEach(((u,f)=>f.setReadTime(t)));const o=new Qh(t,i,this.Ye,this.je,a);return this.je=lr(),this.Je=Gc(),this.He=Gc(),this.Ye=new me(Ut),o}Xe(t,i){if(!this.rt(t))return;const a=this.Et(t,i.key)?2:0;this.nt(t).Qe(i.key,a),this.je=this.je.insert(i.key,i),this.Je=this.Je.insert(i.key,this.It(i.key).add(t)),this.He=this.He.insert(i.key,this.dt(i.key).add(t))}et(t,i,a){if(!this.rt(t))return;const o=this.nt(t);this.Et(t,i)?o.Qe(i,1):o.$e(i),this.He=this.He.insert(i,this.dt(i).delete(t)),this.He=this.He.insert(i,this.dt(i).add(t)),a&&(this.je=this.je.insert(i,a))}removeTarget(t){this.ze.delete(t)}_t(t){const i=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+i.addedDocuments.size-i.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let i=this.ze.get(t);return i||(i=new Tv,this.ze.set(t,i)),i}dt(t){let i=this.He.get(t);return i||(i=new Pe(Ut),this.He=this.He.insert(t,i)),i}It(t){let i=this.Je.get(t);return i||(i=new Pe(Ut),this.Je=this.Je.insert(t,i)),i}rt(t){const i=this.ot(t)!==null;return i||pt("WatchChangeAggregator","Detected inactive target",t),i}ot(t){const i=this.ze.get(t);return i&&i.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Tv),this.Ge.getRemoteKeysForTarget(t).forEach((i=>{this.et(t,i,null)}))}Et(t,i){return this.Ge.getRemoteKeysForTarget(t).has(i)}}function Gc(){return new me(vt.comparator)}function Sv(){return new me(vt.comparator)}const UC={asc:"ASCENDING",desc:"DESCENDING"},PC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},LC={and:"AND",or:"OR"};class zC{constructor(t,i){this.databaseId=t,this.useProto3Json=i}}function cm(n,t){return n.useProto3Json||$h(t)?t:{value:t}}function Th(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function h2(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function BC(n,t){return Th(n,t.toTimestamp())}function Si(n){return Gt(!!n,49232),St.fromTimestamp((function(i){const a=ta(i);return new le(a.seconds,a.nanos)})(n))}function sg(n,t){return hm(n,t).canonicalString()}function hm(n,t){const i=(function(o){return new ae(["projects",o.projectId,"databases",o.database])})(n).child("documents");return t===void 0?i:i.child(t)}function f2(n){const t=ae.fromString(n);return Gt(y2(t),10190,{key:t.toString()}),t}function fm(n,t){return sg(n.databaseId,t.path)}function Ip(n,t){const i=f2(t);if(i.get(1)!==n.databaseId.projectId)throw new dt(it.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+i.get(1)+" vs "+n.databaseId.projectId);if(i.get(3)!==n.databaseId.database)throw new dt(it.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+i.get(3)+" vs "+n.databaseId.database);return new vt(p2(i))}function d2(n,t){return sg(n.databaseId,t)}function $C(n){const t=f2(n);return t.length===4?ae.emptyPath():p2(t)}function dm(n){return new ae(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function p2(n){return Gt(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Av(n,t,i){return{name:fm(n,t),fields:i.value.mapValue.fields}}function FC(n,t){let i;if("targetChange"in t){t.targetChange;const a=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:wt(39313,{state:g})})(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],u=(function(g,v){return g.useProto3Json?(Gt(v===void 0||typeof v=="string",58123),Ze.fromBase64String(v||"")):(Gt(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),Ze.fromUint8Array(v||new Uint8Array))})(n,t.targetChange.resumeToken),f=t.targetChange.cause,m=f&&(function(g){const v=g.code===void 0?it.UNKNOWN:l2(g.code);return new dt(v,g.message||"")})(f);i=new c2(a,o,u,m||null)}else if("documentChange"in t){t.documentChange;const a=t.documentChange;a.document,a.document.name,a.document.updateTime;const o=Ip(n,a.document.name),u=Si(a.document.updateTime),f=a.document.createTime?Si(a.document.createTime):St.min(),m=new xn({mapValue:{fields:a.document.fields}}),p=sn.newFoundDocument(o,u,f,m),g=a.targetIds||[],v=a.removedTargetIds||[];i=new uh(g,v,p.key,p)}else if("documentDelete"in t){t.documentDelete;const a=t.documentDelete;a.document;const o=Ip(n,a.document),u=a.readTime?Si(a.readTime):St.min(),f=sn.newNoDocument(o,u),m=a.removedTargetIds||[];i=new uh([],m,f.key,f)}else if("documentRemove"in t){t.documentRemove;const a=t.documentRemove;a.document;const o=Ip(n,a.document),u=a.removedTargetIds||[];i=new uh([],u,o,null)}else{if(!("filter"in t))return wt(11601,{Rt:t});{t.filter;const a=t.filter;a.targetId;const{count:o=0,unchangedNames:u}=a,f=new NC(o,u),m=a.targetId;i=new u2(m,f)}}return i}function qC(n,t){let i;if(t instanceof hu)i={update:Av(n,t.key,t.value)};else if(t instanceof o2)i={delete:fm(n,t.key)};else if(t instanceof sa)i={update:Av(n,t.key,t.data),updateMask:JC(t.fieldMask)};else{if(!(t instanceof IC))return wt(16599,{Vt:t.type});i={verify:fm(n,t.key)}}return t.fieldTransforms.length>0&&(i.updateTransforms=t.fieldTransforms.map((a=>(function(u,f){const m=f.transform;if(m instanceof wh)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof au)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof su)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof ou)return{fieldPath:f.field.canonicalString(),increment:m.Ae};throw wt(20930,{transform:f.transform})})(0,a)))),t.precondition.isNone||(i.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:BC(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:wt(27497)})(n,t.precondition)),i}function KC(n,t){return n&&n.length>0?(Gt(t!==void 0,14353),n.map((i=>(function(o,u){let f=o.updateTime?Si(o.updateTime):Si(u);return f.isEqual(St.min())&&(f=Si(u)),new AC(f,o.transformResults||[])})(i,t)))):[]}function HC(n,t){return{documents:[d2(n,t.path)]}}function GC(n,t){const i={structuredQuery:{}},a=t.path;let o;t.collectionGroup!==null?(o=a,i.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=a.popLast(),i.structuredQuery.from=[{collectionId:a.lastSegment()}]),i.parent=d2(n,o);const u=(function(g){if(g.length!==0)return g2(ai.create(g,"and"))})(t.filters);u&&(i.structuredQuery.where=u);const f=(function(g){if(g.length!==0)return g.map((v=>(function(S){return{field:Qs(S.field),direction:XC(S.dir)}})(v)))})(t.orderBy);f&&(i.structuredQuery.orderBy=f);const m=cm(n,t.limit);return m!==null&&(i.structuredQuery.limit=m),t.startAt&&(i.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(t.startAt)),t.endAt&&(i.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(t.endAt)),{ft:i,parent:o}}function YC(n){let t=$C(n.parent);const i=n.structuredQuery,a=i.from?i.from.length:0;let o=null;if(a>0){Gt(a===1,65062);const v=i.from[0];v.allDescendants?o=v.collectionId:t=t.child(v.collectionId)}let u=[];i.where&&(u=(function(w){const S=m2(w);return S instanceof ai&&FE(S)?S.getFilters():[S]})(i.where));let f=[];i.orderBy&&(f=(function(w){return w.map((S=>(function(V){return new ru(Xs(V.field),(function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(V.direction))})(S)))})(i.orderBy));let m=null;i.limit&&(m=(function(w){let S;return S=typeof w=="object"?w.value:w,$h(S)?null:S})(i.limit));let p=null;i.startAt&&(p=(function(w){const S=!!w.before,R=w.values||[];return new bh(R,S)})(i.startAt));let g=null;return i.endAt&&(g=(function(w){const S=!w.before,R=w.values||[];return new bh(R,S)})(i.endAt)),dC(t,o,f,u,m,"F",p,g)}function QC(n,t){const i=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return wt(28987,{purpose:o})}})(t.purpose);return i==null?null:{"goog-listen-tags":i}}function m2(n){return n.unaryFilter!==void 0?(function(i){switch(i.unaryFilter.op){case"IS_NAN":const a=Xs(i.unaryFilter.field);return De.create(a,"==",{doubleValue:NaN});case"IS_NULL":const o=Xs(i.unaryFilter.field);return De.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Xs(i.unaryFilter.field);return De.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Xs(i.unaryFilter.field);return De.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return wt(61313);default:return wt(60726)}})(n):n.fieldFilter!==void 0?(function(i){return De.create(Xs(i.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return wt(58110);default:return wt(50506)}})(i.fieldFilter.op),i.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(i){return ai.create(i.compositeFilter.filters.map((a=>m2(a))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return wt(1026)}})(i.compositeFilter.op))})(n):wt(30097,{filter:n})}function XC(n){return UC[n]}function WC(n){return PC[n]}function ZC(n){return LC[n]}function Qs(n){return{fieldPath:n.canonicalString()}}function Xs(n){return We.fromServerFormat(n.fieldPath)}function g2(n){return n instanceof De?(function(i){if(i.op==="=="){if(dv(i.value))return{unaryFilter:{field:Qs(i.field),op:"IS_NAN"}};if(fv(i.value))return{unaryFilter:{field:Qs(i.field),op:"IS_NULL"}}}else if(i.op==="!="){if(dv(i.value))return{unaryFilter:{field:Qs(i.field),op:"IS_NOT_NAN"}};if(fv(i.value))return{unaryFilter:{field:Qs(i.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qs(i.field),op:WC(i.op),value:i.value}}})(n):n instanceof ai?(function(i){const a=i.getFilters().map((o=>g2(o)));return a.length===1?a[0]:{compositeFilter:{op:ZC(i.op),filters:a}}})(n):wt(54877,{filter:n})}function JC(n){const t=[];return n.fields.forEach((i=>t.push(i.canonicalString()))),{fieldPaths:t}}function y2(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(t,i,a,o,u=St.min(),f=St.min(),m=Ze.EMPTY_BYTE_STRING,p=null){this.target=t,this.targetId=i,this.purpose=a,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=m,this.expectedCount=p}withSequenceNumber(t){return new Yr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,i){return new Yr(this.target,this.targetId,this.purpose,this.sequenceNumber,i,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(t){this.yt=t}}function eI(n){const t=YC({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?um(t,t.limit,"L"):t}/**
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
 */class nI{constructor(){this.Cn=new iI}addToCollectionParentIndex(t,i){return this.Cn.add(i),st.resolve()}getCollectionParents(t,i){return st.resolve(this.Cn.getEntries(i))}addFieldIndex(t,i){return st.resolve()}deleteFieldIndex(t,i){return st.resolve()}deleteAllFieldIndexes(t){return st.resolve()}createTargetIndexes(t,i){return st.resolve()}getDocumentsMatchingTarget(t,i){return st.resolve(null)}getIndexType(t,i){return st.resolve(0)}getFieldIndexes(t,i){return st.resolve([])}getNextCollectionGroupToUpdate(t){return st.resolve(null)}getMinOffset(t,i){return st.resolve(Jr.min())}getMinOffsetFromCollectionGroup(t,i){return st.resolve(Jr.min())}updateCollectionGroup(t,i,a){return st.resolve()}updateIndexEntries(t,i){return st.resolve()}}class iI{constructor(){this.index={}}add(t){const i=t.lastSegment(),a=t.popLast(),o=this.index[i]||new Pe(ae.comparator),u=!o.has(a);return this.index[i]=o.add(a),u}has(t){const i=t.lastSegment(),a=t.popLast(),o=this.index[i];return o&&o.has(a)}getEntries(t){return(this.index[t]||new Pe(ae.comparator)).toArray()}}/**
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
 */const Rv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},x2=41943040;class yn{static withCacheSize(t){return new yn(t,yn.DEFAULT_COLLECTION_PERCENTILE,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,i,a){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=i,this.maximumSequenceNumbersToCollect=a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yn.DEFAULT_COLLECTION_PERCENTILE=10,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yn.DEFAULT=new yn(x2,yn.DEFAULT_COLLECTION_PERCENTILE,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yn.DISABLED=new yn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new ho(0)}static cr(){return new ho(-1)}}/**
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
 */const Cv="LruGarbageCollector",rI=1048576;function Iv([n,t],[i,a]){const o=Ut(n,i);return o===0?Ut(t,a):o}class aI{constructor(t){this.Ir=t,this.buffer=new Pe(Iv),this.Er=0}dr(){return++this.Er}Ar(t){const i=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(i);else{const a=this.buffer.last();Iv(i,a)<0&&(this.buffer=this.buffer.delete(a).add(i))}}get maxValue(){return this.buffer.last()[0]}}class sI{constructor(t,i,a){this.garbageCollector=t,this.asyncQueue=i,this.localStore=a,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){pt(Cv,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(i){wo(i)?pt(Cv,"Ignoring IndexedDB error during garbage collection: ",i):await bo(i)}await this.Vr(3e5)}))}}class oI{constructor(t,i){this.mr=t,this.params=i}calculateTargetCount(t,i){return this.mr.gr(t).next((a=>Math.floor(i/100*a)))}nthSequenceNumber(t,i){if(i===0)return st.resolve(Bh.ce);const a=new aI(i);return this.mr.forEachTarget(t,(o=>a.Ar(o.sequenceNumber))).next((()=>this.mr.pr(t,(o=>a.Ar(o))))).next((()=>a.maxValue))}removeTargets(t,i,a){return this.mr.removeTargets(t,i,a)}removeOrphanedDocuments(t,i){return this.mr.removeOrphanedDocuments(t,i)}collect(t,i){return this.params.cacheSizeCollectionThreshold===-1?(pt("LruGarbageCollector","Garbage collection skipped; disabled"),st.resolve(Rv)):this.getCacheSize(t).next((a=>a<this.params.cacheSizeCollectionThreshold?(pt("LruGarbageCollector",`Garbage collection skipped; Cache size ${a} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Rv):this.yr(t,i)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,i){let a,o,u,f,m,p,g;const v=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((w=>(w>this.params.maximumSequenceNumbersToCollect?(pt("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),o=this.params.maximumSequenceNumbersToCollect):o=w,f=Date.now(),this.nthSequenceNumber(t,o)))).next((w=>(a=w,m=Date.now(),this.removeTargets(t,a,i)))).next((w=>(u=w,p=Date.now(),this.removeOrphanedDocuments(t,a)))).next((w=>(g=Date.now(),Gs()<=$t.DEBUG&&pt("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-v}ms
	Determined least recently used ${o} in `+(m-f)+`ms
	Removed ${u} targets in `+(p-m)+`ms
	Removed ${w} documents in `+(g-p)+`ms
Total Duration: ${g-v}ms`),st.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:w}))))}}function lI(n,t){return new oI(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(){this.changes=new es((t=>t.toString()),((t,i)=>t.isEqual(i))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,i){this.assertNotApplied(),this.changes.set(t,sn.newInvalidDocument(t).setReadTime(i))}getEntry(t,i){this.assertNotApplied();const a=this.changes.get(i);return a!==void 0?st.resolve(a):this.getFromCache(t,i)}getEntries(t,i){return this.getAllFromCache(t,i)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class cI{constructor(t,i){this.overlayedDocument=t,this.mutatedFields=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(t,i,a,o){this.remoteDocumentCache=t,this.mutationQueue=i,this.documentOverlayCache=a,this.indexManager=o}getDocument(t,i){let a=null;return this.documentOverlayCache.getOverlay(t,i).next((o=>(a=o,this.remoteDocumentCache.getEntry(t,i)))).next((o=>(a!==null&&Hl(a.mutation,o,In.empty(),le.now()),o)))}getDocuments(t,i){return this.remoteDocumentCache.getEntries(t,i).next((a=>this.getLocalViewOfDocuments(t,a,Pt()).next((()=>a))))}getLocalViewOfDocuments(t,i,a=Pt()){const o=Ga();return this.populateOverlays(t,o,i).next((()=>this.computeViews(t,i,o,a).next((u=>{let f=Ul();return u.forEach(((m,p)=>{f=f.insert(m,p.overlayedDocument)})),f}))))}getOverlayedDocuments(t,i){const a=Ga();return this.populateOverlays(t,a,i).next((()=>this.computeViews(t,i,a,Pt())))}populateOverlays(t,i,a){const o=[];return a.forEach((u=>{i.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(t,o).next((u=>{u.forEach(((f,m)=>{i.set(f,m)}))}))}computeViews(t,i,a,o){let u=lr();const f=Kl(),m=(function(){return Kl()})();return i.forEach(((p,g)=>{const v=a.get(g.key);o.has(g.key)&&(v===void 0||v.mutation instanceof sa)?u=u.insert(g.key,g):v!==void 0?(f.set(g.key,v.mutation.getFieldMask()),Hl(v.mutation,g,v.mutation.getFieldMask(),le.now())):f.set(g.key,In.empty())})),this.recalculateAndSaveOverlays(t,u).next((p=>(p.forEach(((g,v)=>f.set(g,v))),i.forEach(((g,v)=>m.set(g,new cI(v,f.get(g)??null)))),m)))}recalculateAndSaveOverlays(t,i){const a=Kl();let o=new me(((f,m)=>f-m)),u=Pt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,i).next((f=>{for(const m of f)m.keys().forEach((p=>{const g=i.get(p);if(g===null)return;let v=a.get(p)||In.empty();v=m.applyToLocalView(g,v),a.set(p,v);const w=(o.get(m.batchId)||Pt()).add(p);o=o.insert(m.batchId,w)}))})).next((()=>{const f=[],m=o.getReverseIterator();for(;m.hasNext();){const p=m.getNext(),g=p.key,v=p.value,w=ZE();v.forEach((S=>{if(!u.has(S)){const R=a2(i.get(S),a.get(S));R!==null&&w.set(S,R),u=u.add(S)}})),f.push(this.documentOverlayCache.saveOverlays(t,g,w))}return st.waitFor(f)})).next((()=>a))}recalculateAndSaveOverlaysForDocumentKeys(t,i){return this.remoteDocumentCache.getEntries(t,i).next((a=>this.recalculateAndSaveOverlays(t,a)))}getDocumentsMatchingQuery(t,i,a,o){return(function(f){return vt.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0})(i)?this.getDocumentsMatchingDocumentQuery(t,i.path):GE(i)?this.getDocumentsMatchingCollectionGroupQuery(t,i,a,o):this.getDocumentsMatchingCollectionQuery(t,i,a,o)}getNextDocuments(t,i,a,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,i,a,o).next((u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,i,a.largestBatchId,o-u.size):st.resolve(Ga());let m=tu,p=u;return f.next((g=>st.forEach(g,((v,w)=>(m<w.largestBatchId&&(m=w.largestBatchId),u.get(v)?st.resolve():this.remoteDocumentCache.getEntry(t,v).next((S=>{p=p.insert(v,S)}))))).next((()=>this.populateOverlays(t,g,u))).next((()=>this.computeViews(t,p,g,Pt()))).next((v=>({batchId:m,changes:WE(v)})))))}))}getDocumentsMatchingDocumentQuery(t,i){return this.getDocument(t,new vt(i)).next((a=>{let o=Ul();return a.isFoundDocument()&&(o=o.insert(a.key,a)),o}))}getDocumentsMatchingCollectionGroupQuery(t,i,a,o){const u=i.collectionGroup;let f=Ul();return this.indexManager.getCollectionParents(t,u).next((m=>st.forEach(m,(p=>{const g=(function(w,S){return new To(S,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)})(i,p.child(u));return this.getDocumentsMatchingCollectionQuery(t,g,a,o).next((v=>{v.forEach(((w,S)=>{f=f.insert(w,S)}))}))})).next((()=>f))))}getDocumentsMatchingCollectionQuery(t,i,a,o){let u;return this.documentOverlayCache.getOverlaysForCollection(t,i.path,a.largestBatchId).next((f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(t,i,a,u,o)))).next((f=>{u.forEach(((p,g)=>{const v=g.getKey();f.get(v)===null&&(f=f.insert(v,sn.newInvalidDocument(v)))}));let m=Ul();return f.forEach(((p,g)=>{const v=u.get(p);v!==void 0&&Hl(v.mutation,g,In.empty(),le.now()),Hh(i,g)&&(m=m.insert(p,g))})),m}))}}/**
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
 */class fI{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,i){return st.resolve(this.Lr.get(i))}saveBundleMetadata(t,i){return this.Lr.set(i.id,(function(o){return{id:o.id,version:o.version,createTime:Si(o.createTime)}})(i)),st.resolve()}getNamedQuery(t,i){return st.resolve(this.kr.get(i))}saveNamedQuery(t,i){return this.kr.set(i.name,(function(o){return{name:o.name,query:eI(o.bundledQuery),readTime:Si(o.readTime)}})(i)),st.resolve()}}/**
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
 */class dI{constructor(){this.overlays=new me(vt.comparator),this.qr=new Map}getOverlay(t,i){return st.resolve(this.overlays.get(i))}getOverlays(t,i){const a=Ga();return st.forEach(i,(o=>this.getOverlay(t,o).next((u=>{u!==null&&a.set(o,u)})))).next((()=>a))}saveOverlays(t,i,a){return a.forEach(((o,u)=>{this.St(t,i,u)})),st.resolve()}removeOverlaysForBatchId(t,i,a){const o=this.qr.get(a);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.qr.delete(a)),st.resolve()}getOverlaysForCollection(t,i,a){const o=Ga(),u=i.length+1,f=new vt(i.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const p=m.getNext().value,g=p.getKey();if(!i.isPrefixOf(g.path))break;g.path.length===u&&p.largestBatchId>a&&o.set(p.getKey(),p)}return st.resolve(o)}getOverlaysForCollectionGroup(t,i,a,o){let u=new me(((g,v)=>g-v));const f=this.overlays.getIterator();for(;f.hasNext();){const g=f.getNext().value;if(g.getKey().getCollectionGroup()===i&&g.largestBatchId>a){let v=u.get(g.largestBatchId);v===null&&(v=Ga(),u=u.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const m=Ga(),p=u.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((g,v)=>m.set(g,v))),!(m.size()>=o)););return st.resolve(m)}St(t,i,a){const o=this.overlays.get(a.key);if(o!==null){const f=this.qr.get(o.largestBatchId).delete(a.key);this.qr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(a.key,new DC(i,a));let u=this.qr.get(i);u===void 0&&(u=Pt(),this.qr.set(i,u)),this.qr.set(i,u.add(a.key))}}/**
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
 */class pI{constructor(){this.sessionToken=Ze.EMPTY_BYTE_STRING}getSessionToken(t){return st.resolve(this.sessionToken)}setSessionToken(t,i){return this.sessionToken=i,st.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(){this.Qr=new Pe(qe.$r),this.Ur=new Pe(qe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,i){const a=new qe(t,i);this.Qr=this.Qr.add(a),this.Ur=this.Ur.add(a)}Wr(t,i){t.forEach((a=>this.addReference(a,i)))}removeReference(t,i){this.Gr(new qe(t,i))}zr(t,i){t.forEach((a=>this.removeReference(a,i)))}jr(t){const i=new vt(new ae([])),a=new qe(i,t),o=new qe(i,t+1),u=[];return this.Ur.forEachInRange([a,o],(f=>{this.Gr(f),u.push(f.key)})),u}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const i=new vt(new ae([])),a=new qe(i,t),o=new qe(i,t+1);let u=Pt();return this.Ur.forEachInRange([a,o],(f=>{u=u.add(f.key)})),u}containsKey(t){const i=new qe(t,0),a=this.Qr.firstAfterOrEqual(i);return a!==null&&t.isEqual(a.key)}}class qe{constructor(t,i){this.key=t,this.Yr=i}static $r(t,i){return vt.comparator(t.key,i.key)||Ut(t.Yr,i.Yr)}static Kr(t,i){return Ut(t.Yr,i.Yr)||vt.comparator(t.key,i.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(t,i){this.indexManager=t,this.referenceDelegate=i,this.mutationQueue=[],this.tr=1,this.Zr=new Pe(qe.$r)}checkEmpty(t){return st.resolve(this.mutationQueue.length===0)}addMutationBatch(t,i,a,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new jC(u,i,a,o);this.mutationQueue.push(f);for(const m of o)this.Zr=this.Zr.add(new qe(m.key,u)),this.indexManager.addToCollectionParentIndex(t,m.key.path.popLast());return st.resolve(f)}lookupMutationBatch(t,i){return st.resolve(this.Xr(i))}getNextMutationBatchAfterBatchId(t,i){const a=i+1,o=this.ei(a),u=o<0?0:o;return st.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return st.resolve(this.mutationQueue.length===0?Zm:this.tr-1)}getAllMutationBatches(t){return st.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,i){const a=new qe(i,0),o=new qe(i,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([a,o],(f=>{const m=this.Xr(f.Yr);u.push(m)})),st.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(t,i){let a=new Pe(Ut);return i.forEach((o=>{const u=new qe(o,0),f=new qe(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,f],(m=>{a=a.add(m.Yr)}))})),st.resolve(this.ti(a))}getAllMutationBatchesAffectingQuery(t,i){const a=i.path,o=a.length+1;let u=a;vt.isDocumentKey(u)||(u=u.child(""));const f=new qe(new vt(u),0);let m=new Pe(Ut);return this.Zr.forEachWhile((p=>{const g=p.key.path;return!!a.isPrefixOf(g)&&(g.length===o&&(m=m.add(p.Yr)),!0)}),f),st.resolve(this.ti(m))}ti(t){const i=[];return t.forEach((a=>{const o=this.Xr(a);o!==null&&i.push(o)})),i}removeMutationBatch(t,i){Gt(this.ni(i.batchId,"removed")===0,55003),this.mutationQueue.shift();let a=this.Zr;return st.forEach(i.mutations,(o=>{const u=new qe(o.key,i.batchId);return a=a.delete(u),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)})).next((()=>{this.Zr=a}))}ir(t){}containsKey(t,i){const a=new qe(i,0),o=this.Zr.firstAfterOrEqual(a);return st.resolve(i.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,st.resolve()}ni(t,i){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const i=this.ei(t);return i<0||i>=this.mutationQueue.length?null:this.mutationQueue[i]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(t){this.ri=t,this.docs=(function(){return new me(vt.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,i){const a=i.key,o=this.docs.get(a),u=o?o.size:0,f=this.ri(i);return this.docs=this.docs.insert(a,{document:i.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(t,a.path.popLast())}removeEntry(t){const i=this.docs.get(t);i&&(this.docs=this.docs.remove(t),this.size-=i.size)}getEntry(t,i){const a=this.docs.get(i);return st.resolve(a?a.document.mutableCopy():sn.newInvalidDocument(i))}getEntries(t,i){let a=lr();return i.forEach((o=>{const u=this.docs.get(o);a=a.insert(o,u?u.document.mutableCopy():sn.newInvalidDocument(o))})),st.resolve(a)}getDocumentsMatchingQuery(t,i,a,o){let u=lr();const f=i.path,m=new vt(f.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(m);for(;p.hasNext();){const{key:g,value:{document:v}}=p.getNext();if(!f.isPrefixOf(g.path))break;g.path.length>f.length+1||K6(q6(v),a)<=0||(o.has(v.key)||Hh(i,v))&&(u=u.insert(v.key,v.mutableCopy()))}return st.resolve(u)}getAllFromCollectionGroup(t,i,a,o){wt(9500)}ii(t,i){return st.forEach(this.docs,(a=>i(a)))}newChangeBuffer(t){return new yI(this)}getSize(t){return st.resolve(this.size)}}class yI extends uI{constructor(t){super(),this.Nr=t}applyChanges(t){const i=[];return this.changes.forEach(((a,o)=>{o.isValidDocument()?i.push(this.Nr.addEntry(t,o)):this.Nr.removeEntry(a)})),st.waitFor(i)}getFromCache(t,i){return this.Nr.getEntry(t,i)}getAllFromCache(t,i){return this.Nr.getEntries(t,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(t){this.persistence=t,this.si=new es((i=>eg(i)),ng),this.lastRemoteSnapshotVersion=St.min(),this.highestTargetId=0,this.oi=0,this._i=new og,this.targetCount=0,this.ai=ho.ur()}forEachTarget(t,i){return this.si.forEach(((a,o)=>i(o))),st.resolve()}getLastRemoteSnapshotVersion(t){return st.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return st.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),st.resolve(this.highestTargetId)}setTargetsMetadata(t,i,a){return a&&(this.lastRemoteSnapshotVersion=a),i>this.oi&&(this.oi=i),st.resolve()}Pr(t){this.si.set(t.target,t);const i=t.targetId;i>this.highestTargetId&&(this.ai=new ho(i),this.highestTargetId=i),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,i){return this.Pr(i),this.targetCount+=1,st.resolve()}updateTargetData(t,i){return this.Pr(i),st.resolve()}removeTargetData(t,i){return this.si.delete(i.target),this._i.jr(i.targetId),this.targetCount-=1,st.resolve()}removeTargets(t,i,a){let o=0;const u=[];return this.si.forEach(((f,m)=>{m.sequenceNumber<=i&&a.get(m.targetId)===null&&(this.si.delete(f),u.push(this.removeMatchingKeysForTargetId(t,m.targetId)),o++)})),st.waitFor(u).next((()=>o))}getTargetCount(t){return st.resolve(this.targetCount)}getTargetData(t,i){const a=this.si.get(i)||null;return st.resolve(a)}addMatchingKeys(t,i,a){return this._i.Wr(i,a),st.resolve()}removeMatchingKeys(t,i,a){this._i.zr(i,a);const o=this.persistence.referenceDelegate,u=[];return o&&i.forEach((f=>{u.push(o.markPotentiallyOrphaned(t,f))})),st.waitFor(u)}removeMatchingKeysForTargetId(t,i){return this._i.jr(i),st.resolve()}getMatchingKeysForTargetId(t,i){const a=this._i.Hr(i);return st.resolve(a)}containsKey(t,i){return st.resolve(this._i.containsKey(i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v2{constructor(t,i){this.ui={},this.overlays={},this.ci=new Bh(0),this.li=!1,this.li=!0,this.hi=new pI,this.referenceDelegate=t(this),this.Pi=new xI(this),this.indexManager=new nI,this.remoteDocumentCache=(function(o){return new gI(o)})((a=>this.referenceDelegate.Ti(a))),this.serializer=new tI(i),this.Ii=new fI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let i=this.overlays[t.toKey()];return i||(i=new dI,this.overlays[t.toKey()]=i),i}getMutationQueue(t,i){let a=this.ui[t.toKey()];return a||(a=new mI(i,this.referenceDelegate),this.ui[t.toKey()]=a),a}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,i,a){pt("MemoryPersistence","Starting transaction:",t);const o=new vI(this.ci.next());return this.referenceDelegate.Ei(),a(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ai(t,i){return st.or(Object.values(this.ui).map((a=>()=>a.containsKey(t,i))))}}class vI extends G6{constructor(t){super(),this.currentSequenceNumber=t}}class lg{constructor(t){this.persistence=t,this.Ri=new og,this.Vi=null}static mi(t){return new lg(t)}get fi(){if(this.Vi)return this.Vi;throw wt(60996)}addReference(t,i,a){return this.Ri.addReference(a,i),this.fi.delete(a.toString()),st.resolve()}removeReference(t,i,a){return this.Ri.removeReference(a,i),this.fi.add(a.toString()),st.resolve()}markPotentiallyOrphaned(t,i){return this.fi.add(i.toString()),st.resolve()}removeTarget(t,i){this.Ri.jr(i.targetId).forEach((o=>this.fi.add(o.toString())));const a=this.persistence.getTargetCache();return a.getMatchingKeysForTargetId(t,i.targetId).next((o=>{o.forEach((u=>this.fi.add(u.toString())))})).next((()=>a.removeTargetData(t,i)))}Ei(){this.Vi=new Set}di(t){const i=this.persistence.getRemoteDocumentCache().newChangeBuffer();return st.forEach(this.fi,(a=>{const o=vt.fromPath(a);return this.gi(t,o).next((u=>{u||i.removeEntry(o,St.min())}))})).next((()=>(this.Vi=null,i.apply(t))))}updateLimboDocument(t,i){return this.gi(t,i).next((a=>{a?this.fi.delete(i.toString()):this.fi.add(i.toString())}))}Ti(t){return 0}gi(t,i){return st.or([()=>st.resolve(this.Ri.containsKey(i)),()=>this.persistence.getTargetCache().containsKey(t,i),()=>this.persistence.Ai(t,i)])}}class Sh{constructor(t,i){this.persistence=t,this.pi=new es((a=>X6(a.path)),((a,o)=>a.isEqual(o))),this.garbageCollector=lI(this,i)}static mi(t,i){return new Sh(t,i)}Ei(){}di(t){return st.resolve()}forEachTarget(t,i){return this.persistence.getTargetCache().forEachTarget(t,i)}gr(t){const i=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((a=>i.next((o=>a+o))))}wr(t){let i=0;return this.pr(t,(a=>{i++})).next((()=>i))}pr(t,i){return st.forEach(this.pi,((a,o)=>this.br(t,a,o).next((u=>u?st.resolve():i(o)))))}removeTargets(t,i,a){return this.persistence.getTargetCache().removeTargets(t,i,a)}removeOrphanedDocuments(t,i){let a=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(t,(f=>this.br(t,f,i).next((m=>{m||(a++,u.removeEntry(f,St.min()))})))).next((()=>u.apply(t))).next((()=>a))}markPotentiallyOrphaned(t,i){return this.pi.set(i,t.currentSequenceNumber),st.resolve()}removeTarget(t,i){const a=i.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,a)}addReference(t,i,a){return this.pi.set(a,t.currentSequenceNumber),st.resolve()}removeReference(t,i,a){return this.pi.set(a,t.currentSequenceNumber),st.resolve()}updateLimboDocument(t,i){return this.pi.set(i,t.currentSequenceNumber),st.resolve()}Ti(t){let i=t.key.toString().length;return t.isFoundDocument()&&(i+=sh(t.data.value)),i}br(t,i,a){return st.or([()=>this.persistence.Ai(t,i),()=>this.persistence.getTargetCache().containsKey(t,i),()=>{const o=this.pi.get(i);return st.resolve(o!==void 0&&o>a)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(t,i,a,o){this.targetId=t,this.fromCache=i,this.Es=a,this.ds=o}static As(t,i){let a=Pt(),o=Pt();for(const u of i.docChanges)switch(u.type){case 0:a=a.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new ug(t,i.fromCache,a,o)}}/**
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
 */class _I{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class EI{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return fR()?8:Y6(cR())>0?6:4})()}initialize(t,i){this.ps=t,this.indexManager=i,this.Rs=!0}getDocumentsMatchingQuery(t,i,a,o){const u={result:null};return this.ys(t,i).next((f=>{u.result=f})).next((()=>{if(!u.result)return this.ws(t,i,o,a).next((f=>{u.result=f}))})).next((()=>{if(u.result)return;const f=new _I;return this.Ss(t,i,f).next((m=>{if(u.result=m,this.Vs)return this.bs(t,i,f,m.size)}))})).next((()=>u.result))}bs(t,i,a,o){return a.documentReadCount<this.fs?(Gs()<=$t.DEBUG&&pt("QueryEngine","SDK will not create cache indexes for query:",Ys(i),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),st.resolve()):(Gs()<=$t.DEBUG&&pt("QueryEngine","Query:",Ys(i),"scans",a.documentReadCount,"local documents and returns",o,"documents as results."),a.documentReadCount>this.gs*o?(Gs()<=$t.DEBUG&&pt("QueryEngine","The SDK decides to create cache indexes for query:",Ys(i),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,wi(i))):st.resolve())}ys(t,i){if(yv(i))return st.resolve(null);let a=wi(i);return this.indexManager.getIndexType(t,a).next((o=>o===0?null:(i.limit!==null&&o===1&&(i=um(i,null,"F"),a=wi(i)),this.indexManager.getDocumentsMatchingTarget(t,a).next((u=>{const f=Pt(...u);return this.ps.getDocuments(t,f).next((m=>this.indexManager.getMinOffset(t,a).next((p=>{const g=this.Ds(i,m);return this.Cs(i,g,f,p.readTime)?this.ys(t,um(i,null,"F")):this.vs(t,g,i,p)}))))})))))}ws(t,i,a,o){return yv(i)||o.isEqual(St.min())?st.resolve(null):this.ps.getDocuments(t,a).next((u=>{const f=this.Ds(i,u);return this.Cs(i,f,a,o)?st.resolve(null):(Gs()<=$t.DEBUG&&pt("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ys(i)),this.vs(t,f,i,F6(o,tu)).next((m=>m)))}))}Ds(t,i){let a=new Pe(QE(t));return i.forEach(((o,u)=>{Hh(t,u)&&(a=a.add(u))})),a}Cs(t,i,a,o){if(t.limit===null)return!1;if(a.size!==i.size)return!0;const u=t.limitType==="F"?i.last():i.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(t,i,a){return Gs()<=$t.DEBUG&&pt("QueryEngine","Using full collection scan to execute query:",Ys(i)),this.ps.getDocumentsMatchingQuery(t,i,Jr.min(),a)}vs(t,i,a,o){return this.ps.getDocumentsMatchingQuery(t,a,o).next((u=>(i.forEach((f=>{u=u.insert(f.key,f)})),u)))}}/**
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
 */const cg="LocalStore",bI=3e8;class wI{constructor(t,i,a,o){this.persistence=t,this.Fs=i,this.serializer=o,this.Ms=new me(Ut),this.xs=new es((u=>eg(u)),ng),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(a)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new hI(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(i=>t.collect(i,this.Ms)))}}function TI(n,t,i,a){return new wI(n,t,i,a)}async function _2(n,t){const i=Rt(n);return await i.persistence.runTransaction("Handle user change","readonly",(a=>{let o;return i.mutationQueue.getAllMutationBatches(a).next((u=>(o=u,i.Bs(t),i.mutationQueue.getAllMutationBatches(a)))).next((u=>{const f=[],m=[];let p=Pt();for(const g of o){f.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}for(const g of u){m.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}return i.localDocuments.getDocuments(a,p).next((g=>({Ls:g,removedBatchIds:f,addedBatchIds:m})))}))}))}function SI(n,t){const i=Rt(n);return i.persistence.runTransaction("Acknowledge batch","readwrite-primary",(a=>{const o=t.batch.keys(),u=i.Ns.newChangeBuffer({trackRemovals:!0});return(function(m,p,g,v){const w=g.batch,S=w.keys();let R=st.resolve();return S.forEach((V=>{R=R.next((()=>v.getEntry(p,V))).next((B=>{const P=g.docVersions.get(V);Gt(P!==null,48541),B.version.compareTo(P)<0&&(w.applyToRemoteDocument(B,g),B.isValidDocument()&&(B.setReadTime(g.commitVersion),v.addEntry(B)))}))})),R.next((()=>m.mutationQueue.removeMutationBatch(p,w)))})(i,a,t,u).next((()=>u.apply(a))).next((()=>i.mutationQueue.performConsistencyCheck(a))).next((()=>i.documentOverlayCache.removeOverlaysForBatchId(a,o,t.batch.batchId))).next((()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,(function(m){let p=Pt();for(let g=0;g<m.mutationResults.length;++g)m.mutationResults[g].transformResults.length>0&&(p=p.add(m.batch.mutations[g].key));return p})(t)))).next((()=>i.localDocuments.getDocuments(a,o)))}))}function E2(n){const t=Rt(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(i=>t.Pi.getLastRemoteSnapshotVersion(i)))}function AI(n,t){const i=Rt(n),a=t.snapshotVersion;let o=i.Ms;return i.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const f=i.Ns.newChangeBuffer({trackRemovals:!0});o=i.Ms;const m=[];t.targetChanges.forEach(((v,w)=>{const S=o.get(w);if(!S)return;m.push(i.Pi.removeMatchingKeys(u,v.removedDocuments,w).next((()=>i.Pi.addMatchingKeys(u,v.addedDocuments,w))));let R=S.withSequenceNumber(u.currentSequenceNumber);t.targetMismatches.get(w)!==null?R=R.withResumeToken(Ze.EMPTY_BYTE_STRING,St.min()).withLastLimboFreeSnapshotVersion(St.min()):v.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(v.resumeToken,a)),o=o.insert(w,R),(function(B,P,X){return B.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-B.snapshotVersion.toMicroseconds()>=bI?!0:X.addedDocuments.size+X.modifiedDocuments.size+X.removedDocuments.size>0})(S,R,v)&&m.push(i.Pi.updateTargetData(u,R))}));let p=lr(),g=Pt();if(t.documentUpdates.forEach((v=>{t.resolvedLimboDocuments.has(v)&&m.push(i.persistence.referenceDelegate.updateLimboDocument(u,v))})),m.push(RI(u,f,t.documentUpdates).next((v=>{p=v.ks,g=v.qs}))),!a.isEqual(St.min())){const v=i.Pi.getLastRemoteSnapshotVersion(u).next((w=>i.Pi.setTargetsMetadata(u,u.currentSequenceNumber,a)));m.push(v)}return st.waitFor(m).next((()=>f.apply(u))).next((()=>i.localDocuments.getLocalViewOfDocuments(u,p,g))).next((()=>p))})).then((u=>(i.Ms=o,u)))}function RI(n,t,i){let a=Pt(),o=Pt();return i.forEach((u=>a=a.add(u))),t.getEntries(n,a).next((u=>{let f=lr();return i.forEach(((m,p)=>{const g=u.get(m);p.isFoundDocument()!==g.isFoundDocument()&&(o=o.add(m)),p.isNoDocument()&&p.version.isEqual(St.min())?(t.removeEntry(m,p.readTime),f=f.insert(m,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(t.addEntry(p),f=f.insert(m,p)):pt(cg,"Ignoring outdated watch update for ",m,". Current version:",g.version," Watch version:",p.version)})),{ks:f,qs:o}}))}function CI(n,t){const i=Rt(n);return i.persistence.runTransaction("Get next mutation batch","readonly",(a=>(t===void 0&&(t=Zm),i.mutationQueue.getNextMutationBatchAfterBatchId(a,t))))}function II(n,t){const i=Rt(n);return i.persistence.runTransaction("Allocate target","readwrite",(a=>{let o;return i.Pi.getTargetData(a,t).next((u=>u?(o=u,st.resolve(o)):i.Pi.allocateTargetId(a).next((f=>(o=new Yr(t,f,"TargetPurposeListen",a.currentSequenceNumber),i.Pi.addTargetData(a,o).next((()=>o)))))))})).then((a=>{const o=i.Ms.get(a.targetId);return(o===null||a.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(i.Ms=i.Ms.insert(a.targetId,a),i.xs.set(t,a.targetId)),a}))}async function pm(n,t,i){const a=Rt(n),o=a.Ms.get(t),u=i?"readwrite":"readwrite-primary";try{i||await a.persistence.runTransaction("Release target",u,(f=>a.persistence.referenceDelegate.removeTarget(f,o)))}catch(f){if(!wo(f))throw f;pt(cg,`Failed to update sequence numbers for target ${t}: ${f}`)}a.Ms=a.Ms.remove(t),a.xs.delete(o.target)}function jv(n,t,i){const a=Rt(n);let o=St.min(),u=Pt();return a.persistence.runTransaction("Execute query","readwrite",(f=>(function(p,g,v){const w=Rt(p),S=w.xs.get(v);return S!==void 0?st.resolve(w.Ms.get(S)):w.Pi.getTargetData(g,v)})(a,f,wi(t)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,a.Pi.getMatchingKeysForTargetId(f,m.targetId).next((p=>{u=p}))})).next((()=>a.Fs.getDocumentsMatchingQuery(f,t,i?o:St.min(),i?u:Pt()))).next((m=>(jI(a,mC(t),m),{documents:m,Qs:u})))))}function jI(n,t,i){let a=n.Os.get(t)||St.min();i.forEach(((o,u)=>{u.readTime.compareTo(a)>0&&(a=u.readTime)})),n.Os.set(t,a)}class Dv{constructor(){this.activeTargetIds=EC()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class DI{constructor(){this.Mo=new Dv,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,i,a){}addLocalQueryTarget(t,i=!0){return i&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,i,a){this.xo[t]=i}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new Dv,Promise.resolve()}handleUserChange(t,i,a){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class NI{Oo(t){}shutdown(){}}/**
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
 */let Yc=null;function mm(){return Yc===null?Yc=(function(){return 268435456+Math.round(2147483648*Math.random())})():Yc++,"0x"+Yc.toString(16)}/**
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
 */const jp="RestConnection",MI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class OI{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=i+"://"+t.host,this.Ko=`projects/${a}/databases/${o}`,this.Wo=this.databaseId.database===_h?`project_id=${a}`:`project_id=${a}&database_id=${o}`}Go(t,i,a,o,u){const f=mm(),m=this.zo(t,i.toUriEncodedString());pt(jp,`Sending RPC '${t}' ${f}:`,m,a);const p={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(p,o,u);const{host:g}=new URL(m),v=Gm(g);return this.Jo(t,m,p,a,v).then((w=>(pt(jp,`Received RPC '${t}' ${f}: `,w),w)),(w=>{throw oo(jp,`RPC '${t}' ${f} failed with error: `,w,"url: ",m,"request:",a),w}))}Ho(t,i,a,o,u,f){return this.Go(t,i,a,o,u)}jo(t,i,a){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Eo})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach(((o,u)=>t[u]=o)),a&&a.headers.forEach(((o,u)=>t[u]=o))}zo(t,i){const a=MI[t];return`${this.Uo}/v1/${i}:${a}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn="WebChannelConnection";class kI extends OI{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,i,a,o,u){const f=mm();return new Promise(((m,p)=>{const g=new bE;g.setWithCredentials(!0),g.listenOnce(wE.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case ah.NO_ERROR:const w=g.getResponseJson();pt(rn,`XHR for RPC '${t}' ${f} received:`,JSON.stringify(w)),m(w);break;case ah.TIMEOUT:pt(rn,`RPC '${t}' ${f} timed out`),p(new dt(it.DEADLINE_EXCEEDED,"Request time out"));break;case ah.HTTP_ERROR:const S=g.getStatus();if(pt(rn,`RPC '${t}' ${f} failed with status:`,S,"response text:",g.getResponseText()),S>0){let R=g.getResponseJson();Array.isArray(R)&&(R=R[0]);const V=R?.error;if(V&&V.status&&V.message){const B=(function(X){const Y=X.toLowerCase().replace(/_/g,"-");return Object.values(it).indexOf(Y)>=0?Y:it.UNKNOWN})(V.status);p(new dt(B,V.message))}else p(new dt(it.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new dt(it.UNAVAILABLE,"Connection failed."));break;default:wt(9055,{l_:t,streamId:f,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{pt(rn,`RPC '${t}' ${f} completed.`)}}));const v=JSON.stringify(o);pt(rn,`RPC '${t}' ${f} sending request:`,o),g.send(i,"POST",v,a,15)}))}T_(t,i,a){const o=mm(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],f=AE(),m=SE(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.jo(p.initMessageHeaders,i,a),p.encodeInitMessageHeaders=!0;const v=u.join("");pt(rn,`Creating RPC '${t}' stream ${o}: ${v}`,p);const w=f.createWebChannel(v,p);this.I_(w);let S=!1,R=!1;const V=new VI({Yo:P=>{R?pt(rn,`Not sending because RPC '${t}' stream ${o} is closed:`,P):(S||(pt(rn,`Opening RPC '${t}' stream ${o} transport.`),w.open(),S=!0),pt(rn,`RPC '${t}' stream ${o} sending:`,P),w.send(P))},Zo:()=>w.close()}),B=(P,X,Y)=>{P.listen(X,(J=>{try{Y(J)}catch(ot){setTimeout((()=>{throw ot}),0)}}))};return B(w,kl.EventType.OPEN,(()=>{R||(pt(rn,`RPC '${t}' stream ${o} transport opened.`),V.o_())})),B(w,kl.EventType.CLOSE,(()=>{R||(R=!0,pt(rn,`RPC '${t}' stream ${o} transport closed`),V.a_(),this.E_(w))})),B(w,kl.EventType.ERROR,(P=>{R||(R=!0,oo(rn,`RPC '${t}' stream ${o} transport errored. Name:`,P.name,"Message:",P.message),V.a_(new dt(it.UNAVAILABLE,"The operation could not be completed")))})),B(w,kl.EventType.MESSAGE,(P=>{if(!R){const X=P.data[0];Gt(!!X,16349);const Y=X,J=Y?.error||Y[0]?.error;if(J){pt(rn,`RPC '${t}' stream ${o} received error:`,J);const ot=J.status;let Z=(function(C){const I=Ie[C];if(I!==void 0)return l2(I)})(ot),ft=J.message;Z===void 0&&(Z=it.INTERNAL,ft="Unknown error status: "+ot+" with message "+J.message),R=!0,V.a_(new dt(Z,ft)),w.close()}else pt(rn,`RPC '${t}' stream ${o} received:`,X),V.u_(X)}})),B(m,TE.STAT_EVENT,(P=>{P.stat===nm.PROXY?pt(rn,`RPC '${t}' stream ${o} detected buffering proxy`):P.stat===nm.NOPROXY&&pt(rn,`RPC '${t}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{V.__()}),0),V}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((i=>i===t))}}function Dp(){return typeof document<"u"?document:null}/**
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
 */function Xh(n){return new zC(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2{constructor(t,i,a=1e3,o=1.5,u=6e4){this.Mi=t,this.timerId=i,this.d_=a,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const i=Math.floor(this.V_+this.y_()),a=Math.max(0,Date.now()-this.f_),o=Math.max(0,i-a);o>0&&pt("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${i} ms, last attempt: ${a} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov="PersistentStream";class w2{constructor(t,i,a,o,u,f,m,p){this.Mi=t,this.S_=a,this.b_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new b2(t,i)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,i){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():i&&i.code===it.RESOURCE_EXHAUSTED?(or(i.toString()),or("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):i&&i.code===it.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(i)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),i=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([a,o])=>{this.D_===i&&this.G_(a,o)}),(a=>{t((()=>{const o=new dt(it.UNKNOWN,"Fetching auth token failed: "+a.message);return this.z_(o)}))}))}G_(t,i){const a=this.W_(this.D_);this.stream=this.j_(t,i),this.stream.Xo((()=>{a((()=>this.listener.Xo()))})),this.stream.t_((()=>{a((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{a((()=>this.z_(o)))})),this.stream.onMessage((o=>{a((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return pt(Ov,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return i=>{this.Mi.enqueueAndForget((()=>this.D_===t?i():(pt(Ov,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class UI extends w2{constructor(t,i,a,o,u,f){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",i,a,o,f),this.serializer=u}j_(t,i){return this.connection.T_("Listen",t,i)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const i=FC(this.serializer,t),a=(function(u){if(!("targetChange"in u))return St.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?St.min():f.readTime?Si(f.readTime):St.min()})(t);return this.listener.H_(i,a)}Y_(t){const i={};i.database=dm(this.serializer),i.addTarget=(function(u,f){let m;const p=f.target;if(m=om(p)?{documents:HC(u,p)}:{query:GC(u,p).ft},m.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){m.resumeToken=h2(u,f.resumeToken);const g=cm(u,f.expectedCount);g!==null&&(m.expectedCount=g)}else if(f.snapshotVersion.compareTo(St.min())>0){m.readTime=Th(u,f.snapshotVersion.toTimestamp());const g=cm(u,f.expectedCount);g!==null&&(m.expectedCount=g)}return m})(this.serializer,t);const a=QC(this.serializer,t);a&&(i.labels=a),this.q_(i)}Z_(t){const i={};i.database=dm(this.serializer),i.removeTarget=t,this.q_(i)}}class PI extends w2{constructor(t,i,a,o,u,f){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",i,a,o,f),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,i){return this.connection.T_("Write",t,i)}J_(t){return Gt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Gt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){Gt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const i=KC(t.writeResults,t.commitTime),a=Si(t.commitTime);return this.listener.na(a,i)}ra(){const t={};t.database=dm(this.serializer),this.q_(t)}ea(t){const i={streamToken:this.lastStreamToken,writes:t.map((a=>qC(this.serializer,a)))};this.q_(i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{}class zI extends LI{constructor(t,i,a,o){super(),this.authCredentials=t,this.appCheckCredentials=i,this.connection=a,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new dt(it.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,i,a,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,f])=>this.connection.Go(t,hm(i,a),o,u,f))).catch((u=>{throw u.name==="FirebaseError"?(u.code===it.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new dt(it.UNKNOWN,u.toString())}))}Ho(t,i,a,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([f,m])=>this.connection.Ho(t,hm(i,a),o,f,m,u))).catch((f=>{throw f.name==="FirebaseError"?(f.code===it.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new dt(it.UNKNOWN,f.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class BI{constructor(t,i){this.asyncQueue=t,this.onlineStateHandler=i,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const i=`Could not reach Cloud Firestore backend. ${t}
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
 */const Ja="RemoteStore";class $I{constructor(t,i,a,o,u){this.localStore=t,this.datastore=i,this.asyncQueue=a,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo((f=>{a.enqueueAndForget((async()=>{ns(this)&&(pt(Ja,"Restarting streams for network reachability change."),await(async function(p){const g=Rt(p);g.Ea.add(4),await du(g),g.Ra.set("Unknown"),g.Ea.delete(4),await Wh(g)})(this))}))})),this.Ra=new BI(a,o)}}async function Wh(n){if(ns(n))for(const t of n.da)await t(!0)}async function du(n){for(const t of n.da)await t(!1)}function T2(n,t){const i=Rt(n);i.Ia.has(t.targetId)||(i.Ia.set(t.targetId,t),pg(i)?dg(i):So(i).O_()&&fg(i,t))}function hg(n,t){const i=Rt(n),a=So(i);i.Ia.delete(t),a.O_()&&S2(i,t),i.Ia.size===0&&(a.O_()?a.L_():ns(i)&&i.Ra.set("Unknown"))}function fg(n,t){if(n.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(St.min())>0){const i=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(i)}So(n).Y_(t)}function S2(n,t){n.Va.Ue(t),So(n).Z_(t)}function dg(n){n.Va=new kC({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),So(n).start(),n.Ra.ua()}function pg(n){return ns(n)&&!So(n).x_()&&n.Ia.size>0}function ns(n){return Rt(n).Ea.size===0}function A2(n){n.Va=void 0}async function FI(n){n.Ra.set("Online")}async function qI(n){n.Ia.forEach(((t,i)=>{fg(n,t)}))}async function KI(n,t){A2(n),pg(n)?(n.Ra.ha(t),dg(n)):n.Ra.set("Unknown")}async function HI(n,t,i){if(n.Ra.set("Online"),t instanceof c2&&t.state===2&&t.cause)try{await(async function(o,u){const f=u.cause;for(const m of u.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,f),o.Ia.delete(m),o.Va.removeTarget(m))})(n,t)}catch(a){pt(Ja,"Failed to remove targets %s: %s ",t.targetIds.join(","),a),await Ah(n,a)}else if(t instanceof uh?n.Va.Ze(t):t instanceof u2?n.Va.st(t):n.Va.tt(t),!i.isEqual(St.min()))try{const a=await E2(n.localStore);i.compareTo(a)>=0&&await(function(u,f){const m=u.Va.Tt(f);return m.targetChanges.forEach(((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const v=u.Ia.get(g);v&&u.Ia.set(g,v.withResumeToken(p.resumeToken,f))}})),m.targetMismatches.forEach(((p,g)=>{const v=u.Ia.get(p);if(!v)return;u.Ia.set(p,v.withResumeToken(Ze.EMPTY_BYTE_STRING,v.snapshotVersion)),S2(u,p);const w=new Yr(v.target,p,g,v.sequenceNumber);fg(u,w)})),u.remoteSyncer.applyRemoteEvent(m)})(n,i)}catch(a){pt(Ja,"Failed to raise snapshot:",a),await Ah(n,a)}}async function Ah(n,t,i){if(!wo(t))throw t;n.Ea.add(1),await du(n),n.Ra.set("Offline"),i||(i=()=>E2(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{pt(Ja,"Retrying IndexedDB access"),await i(),n.Ea.delete(1),await Wh(n)}))}function R2(n,t){return t().catch((i=>Ah(n,i,t)))}async function Zh(n){const t=Rt(n),i=ia(t);let a=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Zm;for(;GI(t);)try{const o=await CI(t.localStore,a);if(o===null){t.Ta.length===0&&i.L_();break}a=o.batchId,YI(t,o)}catch(o){await Ah(t,o)}C2(t)&&I2(t)}function GI(n){return ns(n)&&n.Ta.length<10}function YI(n,t){n.Ta.push(t);const i=ia(n);i.O_()&&i.X_&&i.ea(t.mutations)}function C2(n){return ns(n)&&!ia(n).x_()&&n.Ta.length>0}function I2(n){ia(n).start()}async function QI(n){ia(n).ra()}async function XI(n){const t=ia(n);for(const i of n.Ta)t.ea(i.mutations)}async function WI(n,t,i){const a=n.Ta.shift(),o=rg.from(a,t,i);await R2(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await Zh(n)}async function ZI(n,t){t&&ia(n).X_&&await(async function(a,o){if((function(f){return MC(f)&&f!==it.ABORTED})(o.code)){const u=a.Ta.shift();ia(a).B_(),await R2(a,(()=>a.remoteSyncer.rejectFailedWrite(u.batchId,o))),await Zh(a)}})(n,t),C2(n)&&I2(n)}async function Vv(n,t){const i=Rt(n);i.asyncQueue.verifyOperationInProgress(),pt(Ja,"RemoteStore received new credentials");const a=ns(i);i.Ea.add(3),await du(i),a&&i.Ra.set("Unknown"),await i.remoteSyncer.handleCredentialChange(t),i.Ea.delete(3),await Wh(i)}async function JI(n,t){const i=Rt(n);t?(i.Ea.delete(2),await Wh(i)):t||(i.Ea.add(2),await du(i),i.Ra.set("Unknown"))}function So(n){return n.ma||(n.ma=(function(i,a,o){const u=Rt(i);return u.sa(),new UI(a,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(n.datastore,n.asyncQueue,{Xo:FI.bind(null,n),t_:qI.bind(null,n),r_:KI.bind(null,n),H_:HI.bind(null,n)}),n.da.push((async t=>{t?(n.ma.B_(),pg(n)?dg(n):n.Ra.set("Unknown")):(await n.ma.stop(),A2(n))}))),n.ma}function ia(n){return n.fa||(n.fa=(function(i,a,o){const u=Rt(i);return u.sa(),new PI(a,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:QI.bind(null,n),r_:ZI.bind(null,n),ta:XI.bind(null,n),na:WI.bind(null,n)}),n.da.push((async t=>{t?(n.fa.B_(),await Zh(n)):(await n.fa.stop(),n.Ta.length>0&&(pt(Ja,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(t,i,a,o,u){this.asyncQueue=t,this.timerId=i,this.targetTimeMs=a,this.op=o,this.removalCallback=u,this.deferred=new ir,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((f=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,i,a,o,u){const f=Date.now()+a,m=new mg(t,i,f,o,u);return m.start(a),m}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new dt(it.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function gg(n,t){if(or("AsyncQueue",`${t}: ${n}`),wo(n))return new dt(it.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{static emptySet(t){return new Js(t.comparator)}constructor(t){this.comparator=t?(i,a)=>t(i,a)||vt.comparator(i.key,a.key):(i,a)=>vt.comparator(i.key,a.key),this.keyedMap=Ul(),this.sortedSet=new me(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const i=this.keyedMap.get(t);return i?this.sortedSet.indexOf(i):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((i,a)=>(t(i),!1)))}add(t){const i=this.delete(t.key);return i.copy(i.keyedMap.insert(t.key,t),i.sortedSet.insert(t,null))}delete(t){const i=this.get(t);return i?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(i)):this}isEqual(t){if(!(t instanceof Js)||this.size!==t.size)return!1;const i=this.sortedSet.getIterator(),a=t.sortedSet.getIterator();for(;i.hasNext();){const o=i.getNext().key,u=a.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const t=[];return this.forEach((i=>{t.push(i.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,i){const a=new Js;return a.comparator=this.comparator,a.keyedMap=t,a.sortedSet=i,a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(){this.ga=new me(vt.comparator)}track(t){const i=t.doc.key,a=this.ga.get(i);a?t.type!==0&&a.type===3?this.ga=this.ga.insert(i,t):t.type===3&&a.type!==1?this.ga=this.ga.insert(i,{type:a.type,doc:t.doc}):t.type===2&&a.type===2?this.ga=this.ga.insert(i,{type:2,doc:t.doc}):t.type===2&&a.type===0?this.ga=this.ga.insert(i,{type:0,doc:t.doc}):t.type===1&&a.type===0?this.ga=this.ga.remove(i):t.type===1&&a.type===2?this.ga=this.ga.insert(i,{type:1,doc:a.doc}):t.type===0&&a.type===1?this.ga=this.ga.insert(i,{type:2,doc:t.doc}):wt(63341,{Rt:t,pa:a}):this.ga=this.ga.insert(i,t)}ya(){const t=[];return this.ga.inorderTraversal(((i,a)=>{t.push(a)})),t}}class fo{constructor(t,i,a,o,u,f,m,p,g){this.query=t,this.docs=i,this.oldDocs=a,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(t,i,a,o,u){const f=[];return i.forEach((m=>{f.push({type:0,doc:m})})),new fo(t,i,Js.emptySet(i),f,a,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Kh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const i=this.docChanges,a=t.docChanges;if(i.length!==a.length)return!1;for(let o=0;o<i.length;o++)if(i[o].type!==a[o].type||!i[o].doc.isEqual(a[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tj{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class ej{constructor(){this.queries=Uv(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(i,a){const o=Rt(i),u=o.queries;o.queries=Uv(),u.forEach(((f,m)=>{for(const p of m.Sa)p.onError(a)}))})(this,new dt(it.ABORTED,"Firestore shutting down"))}}function Uv(){return new es((n=>YE(n)),Kh)}async function yg(n,t){const i=Rt(n);let a=3;const o=t.query;let u=i.queries.get(o);u?!u.ba()&&t.Da()&&(a=2):(u=new tj,a=t.Da()?0:1);try{switch(a){case 0:u.wa=await i.onListen(o,!0);break;case 1:u.wa=await i.onListen(o,!1);break;case 2:await i.onFirstRemoteStoreListen(o)}}catch(f){const m=gg(f,`Initialization of query '${Ys(t.query)}' failed`);return void t.onError(m)}i.queries.set(o,u),u.Sa.push(t),t.va(i.onlineState),u.wa&&t.Fa(u.wa)&&vg(i)}async function xg(n,t){const i=Rt(n),a=t.query;let o=3;const u=i.queries.get(a);if(u){const f=u.Sa.indexOf(t);f>=0&&(u.Sa.splice(f,1),u.Sa.length===0?o=t.Da()?0:1:!u.ba()&&t.Da()&&(o=2))}switch(o){case 0:return i.queries.delete(a),i.onUnlisten(a,!0);case 1:return i.queries.delete(a),i.onUnlisten(a,!1);case 2:return i.onLastRemoteStoreUnlisten(a);default:return}}function nj(n,t){const i=Rt(n);let a=!1;for(const o of t){const u=o.query,f=i.queries.get(u);if(f){for(const m of f.Sa)m.Fa(o)&&(a=!0);f.wa=o}}a&&vg(i)}function ij(n,t,i){const a=Rt(n),o=a.queries.get(t);if(o)for(const u of o.Sa)u.onError(i);a.queries.delete(t)}function vg(n){n.Ca.forEach((t=>{t.next()}))}var gm,Pv;(Pv=gm||(gm={})).Ma="default",Pv.Cache="cache";class _g{constructor(t,i,a){this.query=t,this.xa=i,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=a||{}}Fa(t){if(!this.options.includeMetadataChanges){const a=[];for(const o of t.docChanges)o.type!==3&&a.push(o);t=new fo(t.query,t.docs,t.oldDocs,a,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let i=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),i=!0):this.La(t,this.onlineState)&&(this.ka(t),i=!0),this.Na=t,i}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let i=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),i=!0),i}La(t,i){if(!t.fromCache||!this.Da())return!0;const a=i!=="Offline";return(!this.options.qa||!a)&&(!t.docs.isEmpty()||t.hasCachedResults||i==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const i=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!i)&&this.options.includeMetadataChanges===!0}ka(t){t=fo.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==gm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(t){this.key=t}}class D2{constructor(t){this.key=t}}class rj{constructor(t,i){this.query=t,this.Ya=i,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Pt(),this.mutatedKeys=Pt(),this.eu=QE(t),this.tu=new Js(this.eu)}get nu(){return this.Ya}ru(t,i){const a=i?i.iu:new kv,o=i?i.tu:this.tu;let u=i?i.mutatedKeys:this.mutatedKeys,f=o,m=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,g=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal(((v,w)=>{const S=o.get(v),R=Hh(this.query,w)?w:null,V=!!S&&this.mutatedKeys.has(S.key),B=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let P=!1;S&&R?S.data.isEqual(R.data)?V!==B&&(a.track({type:3,doc:R}),P=!0):this.su(S,R)||(a.track({type:2,doc:R}),P=!0,(p&&this.eu(R,p)>0||g&&this.eu(R,g)<0)&&(m=!0)):!S&&R?(a.track({type:0,doc:R}),P=!0):S&&!R&&(a.track({type:1,doc:S}),P=!0,(p||g)&&(m=!0)),P&&(R?(f=f.add(R),u=B?u.add(v):u.delete(v)):(f=f.delete(v),u=u.delete(v)))})),this.query.limit!==null)for(;f.size>this.query.limit;){const v=this.query.limitType==="F"?f.last():f.first();f=f.delete(v.key),u=u.delete(v.key),a.track({type:1,doc:v})}return{tu:f,iu:a,Cs:m,mutatedKeys:u}}su(t,i){return t.hasLocalMutations&&i.hasCommittedMutations&&!i.hasLocalMutations}applyChanges(t,i,a,o){const u=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const f=t.iu.ya();f.sort(((v,w)=>(function(R,V){const B=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return wt(20277,{Rt:P})}};return B(R)-B(V)})(v.type,w.type)||this.eu(v.doc,w.doc))),this.ou(a),o=o??!1;const m=i&&!o?this._u():[],p=this.Xa.size===0&&this.current&&!o?1:0,g=p!==this.Za;return this.Za=p,f.length!==0||g?{snapshot:new fo(this.query,t.tu,u,f,t.mutatedKeys,p===0,g,!1,!!a&&a.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new kv,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((i=>this.Ya=this.Ya.add(i))),t.modifiedDocuments.forEach((i=>{})),t.removedDocuments.forEach((i=>this.Ya=this.Ya.delete(i))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=Pt(),this.tu.forEach((a=>{this.uu(a.key)&&(this.Xa=this.Xa.add(a.key))}));const i=[];return t.forEach((a=>{this.Xa.has(a)||i.push(new D2(a))})),this.Xa.forEach((a=>{t.has(a)||i.push(new j2(a))})),i}cu(t){this.Ya=t.Qs,this.Xa=Pt();const i=this.ru(t.documents);return this.applyChanges(i,!0)}lu(){return fo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Eg="SyncEngine";class aj{constructor(t,i,a){this.query=t,this.targetId=i,this.view=a}}class sj{constructor(t){this.key=t,this.hu=!1}}class oj{constructor(t,i,a,o,u,f){this.localStore=t,this.remoteStore=i,this.eventManager=a,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.Pu={},this.Tu=new es((m=>YE(m)),Kh),this.Iu=new Map,this.Eu=new Set,this.du=new me(vt.comparator),this.Au=new Map,this.Ru=new og,this.Vu={},this.mu=new Map,this.fu=ho.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function lj(n,t,i=!0){const a=U2(n);let o;const u=a.Tu.get(t);return u?(a.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await N2(a,t,i,!0),o}async function uj(n,t){const i=U2(n);await N2(i,t,!0,!1)}async function N2(n,t,i,a){const o=await II(n.localStore,wi(t)),u=o.targetId,f=n.sharedClientState.addLocalQueryTarget(u,i);let m;return a&&(m=await cj(n,t,u,f==="current",o.resumeToken)),n.isPrimaryClient&&i&&T2(n.remoteStore,o),m}async function cj(n,t,i,a,o){n.pu=(w,S,R)=>(async function(B,P,X,Y){let J=P.view.ru(X);J.Cs&&(J=await jv(B.localStore,P.query,!1).then((({documents:j})=>P.view.ru(j,J))));const ot=Y&&Y.targetChanges.get(P.targetId),Z=Y&&Y.targetMismatches.get(P.targetId)!=null,ft=P.view.applyChanges(J,B.isPrimaryClient,ot,Z);return zv(B,P.targetId,ft.au),ft.snapshot})(n,w,S,R);const u=await jv(n.localStore,t,!0),f=new rj(t,u.Qs),m=f.ru(u.documents),p=fu.createSynthesizedTargetChangeForCurrentChange(i,a&&n.onlineState!=="Offline",o),g=f.applyChanges(m,n.isPrimaryClient,p);zv(n,i,g.au);const v=new aj(t,i,f);return n.Tu.set(t,v),n.Iu.has(i)?n.Iu.get(i).push(t):n.Iu.set(i,[t]),g.snapshot}async function hj(n,t,i){const a=Rt(n),o=a.Tu.get(t),u=a.Iu.get(o.targetId);if(u.length>1)return a.Iu.set(o.targetId,u.filter((f=>!Kh(f,t)))),void a.Tu.delete(t);a.isPrimaryClient?(a.sharedClientState.removeLocalQueryTarget(o.targetId),a.sharedClientState.isActiveQueryTarget(o.targetId)||await pm(a.localStore,o.targetId,!1).then((()=>{a.sharedClientState.clearQueryState(o.targetId),i&&hg(a.remoteStore,o.targetId),ym(a,o.targetId)})).catch(bo)):(ym(a,o.targetId),await pm(a.localStore,o.targetId,!0))}async function fj(n,t){const i=Rt(n),a=i.Tu.get(t),o=i.Iu.get(a.targetId);i.isPrimaryClient&&o.length===1&&(i.sharedClientState.removeLocalQueryTarget(a.targetId),hg(i.remoteStore,a.targetId))}async function dj(n,t,i){const a=_j(n);try{const o=await(function(f,m){const p=Rt(f),g=le.now(),v=m.reduce(((R,V)=>R.add(V.key)),Pt());let w,S;return p.persistence.runTransaction("Locally write mutations","readwrite",(R=>{let V=lr(),B=Pt();return p.Ns.getEntries(R,v).next((P=>{V=P,V.forEach(((X,Y)=>{Y.isValidDocument()||(B=B.add(X))}))})).next((()=>p.localDocuments.getOverlayedDocuments(R,V))).next((P=>{w=P;const X=[];for(const Y of m){const J=CC(Y,w.get(Y.key).overlayedDocument);J!=null&&X.push(new sa(Y.key,J,zE(J.value.mapValue),Ti.exists(!0)))}return p.mutationQueue.addMutationBatch(R,g,X,m)})).next((P=>{S=P;const X=P.applyToLocalDocumentSet(w,B);return p.documentOverlayCache.saveOverlays(R,P.batchId,X)}))})).then((()=>({batchId:S.batchId,changes:WE(w)})))})(a.localStore,t);a.sharedClientState.addPendingMutation(o.batchId),(function(f,m,p){let g=f.Vu[f.currentUser.toKey()];g||(g=new me(Ut)),g=g.insert(m,p),f.Vu[f.currentUser.toKey()]=g})(a,o.batchId,i),await pu(a,o.changes),await Zh(a.remoteStore)}catch(o){const u=gg(o,"Failed to persist write");i.reject(u)}}async function M2(n,t){const i=Rt(n);try{const a=await AI(i.localStore,t);t.targetChanges.forEach(((o,u)=>{const f=i.Au.get(u);f&&(Gt(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.hu=!0:o.modifiedDocuments.size>0?Gt(f.hu,14607):o.removedDocuments.size>0&&(Gt(f.hu,42227),f.hu=!1))})),await pu(i,a,t)}catch(a){await bo(a)}}function Lv(n,t,i){const a=Rt(n);if(a.isPrimaryClient&&i===0||!a.isPrimaryClient&&i===1){const o=[];a.Tu.forEach(((u,f)=>{const m=f.view.va(t);m.snapshot&&o.push(m.snapshot)})),(function(f,m){const p=Rt(f);p.onlineState=m;let g=!1;p.queries.forEach(((v,w)=>{for(const S of w.Sa)S.va(m)&&(g=!0)})),g&&vg(p)})(a.eventManager,t),o.length&&a.Pu.H_(o),a.onlineState=t,a.isPrimaryClient&&a.sharedClientState.setOnlineState(t)}}async function pj(n,t,i){const a=Rt(n);a.sharedClientState.updateQueryState(t,"rejected",i);const o=a.Au.get(t),u=o&&o.key;if(u){let f=new me(vt.comparator);f=f.insert(u,sn.newNoDocument(u,St.min()));const m=Pt().add(u),p=new Qh(St.min(),new Map,new me(Ut),f,m);await M2(a,p),a.du=a.du.remove(u),a.Au.delete(t),bg(a)}else await pm(a.localStore,t,!1).then((()=>ym(a,t,i))).catch(bo)}async function mj(n,t){const i=Rt(n),a=t.batch.batchId;try{const o=await SI(i.localStore,t);V2(i,a,null),O2(i,a),i.sharedClientState.updateMutationState(a,"acknowledged"),await pu(i,o)}catch(o){await bo(o)}}async function gj(n,t,i){const a=Rt(n);try{const o=await(function(f,m){const p=Rt(f);return p.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let v;return p.mutationQueue.lookupMutationBatch(g,m).next((w=>(Gt(w!==null,37113),v=w.keys(),p.mutationQueue.removeMutationBatch(g,w)))).next((()=>p.mutationQueue.performConsistencyCheck(g))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(g,v,m))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v))).next((()=>p.localDocuments.getDocuments(g,v)))}))})(a.localStore,t);V2(a,t,i),O2(a,t),a.sharedClientState.updateMutationState(t,"rejected",i),await pu(a,o)}catch(o){await bo(o)}}function O2(n,t){(n.mu.get(t)||[]).forEach((i=>{i.resolve()})),n.mu.delete(t)}function V2(n,t,i){const a=Rt(n);let o=a.Vu[a.currentUser.toKey()];if(o){const u=o.get(t);u&&(i?u.reject(i):u.resolve(),o=o.remove(t)),a.Vu[a.currentUser.toKey()]=o}}function ym(n,t,i=null){n.sharedClientState.removeLocalQueryTarget(t);for(const a of n.Iu.get(t))n.Tu.delete(a),i&&n.Pu.yu(a,i);n.Iu.delete(t),n.isPrimaryClient&&n.Ru.jr(t).forEach((a=>{n.Ru.containsKey(a)||k2(n,a)}))}function k2(n,t){n.Eu.delete(t.path.canonicalString());const i=n.du.get(t);i!==null&&(hg(n.remoteStore,i),n.du=n.du.remove(t),n.Au.delete(i),bg(n))}function zv(n,t,i){for(const a of i)a instanceof j2?(n.Ru.addReference(a.key,t),yj(n,a)):a instanceof D2?(pt(Eg,"Document no longer in limbo: "+a.key),n.Ru.removeReference(a.key,t),n.Ru.containsKey(a.key)||k2(n,a.key)):wt(19791,{wu:a})}function yj(n,t){const i=t.key,a=i.path.canonicalString();n.du.get(i)||n.Eu.has(a)||(pt(Eg,"New document in limbo: "+i),n.Eu.add(a),bg(n))}function bg(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const i=new vt(ae.fromString(t)),a=n.fu.next();n.Au.set(a,new sj(i)),n.du=n.du.insert(i,a),T2(n.remoteStore,new Yr(wi(qh(i.path)),a,"TargetPurposeLimboResolution",Bh.ce))}}async function pu(n,t,i){const a=Rt(n),o=[],u=[],f=[];a.Tu.isEmpty()||(a.Tu.forEach(((m,p)=>{f.push(a.pu(p,t,i).then((g=>{if((g||i)&&a.isPrimaryClient){const v=g?!g.fromCache:i?.targetChanges.get(p.targetId)?.current;a.sharedClientState.updateQueryState(p.targetId,v?"current":"not-current")}if(g){o.push(g);const v=ug.As(p.targetId,g);u.push(v)}})))})),await Promise.all(f),a.Pu.H_(o),await(async function(p,g){const v=Rt(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(w=>st.forEach(g,(S=>st.forEach(S.Es,(R=>v.persistence.referenceDelegate.addReference(w,S.targetId,R))).next((()=>st.forEach(S.ds,(R=>v.persistence.referenceDelegate.removeReference(w,S.targetId,R)))))))))}catch(w){if(!wo(w))throw w;pt(cg,"Failed to update sequence numbers: "+w)}for(const w of g){const S=w.targetId;if(!w.fromCache){const R=v.Ms.get(S),V=R.snapshotVersion,B=R.withLastLimboFreeSnapshotVersion(V);v.Ms=v.Ms.insert(S,B)}}})(a.localStore,u))}async function xj(n,t){const i=Rt(n);if(!i.currentUser.isEqual(t)){pt(Eg,"User change. New user:",t.toKey());const a=await _2(i.localStore,t);i.currentUser=t,(function(u,f){u.mu.forEach((m=>{m.forEach((p=>{p.reject(new dt(it.CANCELLED,f))}))})),u.mu.clear()})(i,"'waitForPendingWrites' promise is rejected due to a user change."),i.sharedClientState.handleUserChange(t,a.removedBatchIds,a.addedBatchIds),await pu(i,a.Ls)}}function vj(n,t){const i=Rt(n),a=i.Au.get(t);if(a&&a.hu)return Pt().add(a.key);{let o=Pt();const u=i.Iu.get(t);if(!u)return o;for(const f of u){const m=i.Tu.get(f);o=o.unionWith(m.view.nu)}return o}}function U2(n){const t=Rt(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=M2.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=vj.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=pj.bind(null,t),t.Pu.H_=nj.bind(null,t.eventManager),t.Pu.yu=ij.bind(null,t.eventManager),t}function _j(n){const t=Rt(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=mj.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=gj.bind(null,t),t}class Rh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Xh(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,i){return null}Mu(t,i){return null}vu(t){return TI(this.persistence,new EI,t.initialUser,this.serializer)}Cu(t){return new v2(lg.mi,this.serializer)}Du(t){return new DI}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Rh.provider={build:()=>new Rh};class Ej extends Rh{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,i){Gt(this.persistence.referenceDelegate instanceof Sh,46915);const a=this.persistence.referenceDelegate.garbageCollector;return new sI(a,t.asyncQueue,i)}Cu(t){const i=this.cacheSizeBytes!==void 0?yn.withCacheSize(this.cacheSizeBytes):yn.DEFAULT;return new v2((a=>Sh.mi(a,i)),this.serializer)}}class xm{async initialize(t,i){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(i),this.remoteStore=this.createRemoteStore(i),this.eventManager=this.createEventManager(i),this.syncEngine=this.createSyncEngine(i,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>Lv(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=xj.bind(null,this.syncEngine),await JI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new ej})()}createDatastore(t){const i=Xh(t.databaseInfo.databaseId),a=(function(u){return new kI(u)})(t.databaseInfo);return(function(u,f,m,p){return new zI(u,f,m,p)})(t.authCredentials,t.appCheckCredentials,a,i)}createRemoteStore(t){return(function(a,o,u,f,m){return new $I(a,o,u,f,m)})(this.localStore,this.datastore,t.asyncQueue,(i=>Lv(this.syncEngine,i,0)),(function(){return Mv.v()?new Mv:new NI})())}createSyncEngine(t,i){return(function(o,u,f,m,p,g,v){const w=new oj(o,u,f,m,p,g);return v&&(w.gu=!0),w})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,i)}async terminate(){await(async function(i){const a=Rt(i);pt(Ja,"RemoteStore shutting down."),a.Ea.add(5),await du(a),a.Aa.shutdown(),a.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}xm.provider={build:()=>new xm};/**
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
 */class wg{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):or("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,i){setTimeout((()=>{this.muted||t(i)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra="FirestoreClient";class bj{constructor(t,i,a,o,u){this.authCredentials=t,this.appCheckCredentials=i,this.asyncQueue=a,this.databaseInfo=o,this.user=an.UNAUTHENTICATED,this.clientId=Wm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(a,(async f=>{pt(ra,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f})),this.appCheckCredentials.start(a,(f=>(pt(ra,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ir;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(i){const a=gg(i,"Failed to shutdown persistence");t.reject(a)}})),t.promise}}async function Np(n,t){n.asyncQueue.verifyOperationInProgress(),pt(ra,"Initializing OfflineComponentProvider");const i=n.configuration;await t.initialize(i);let a=i.initialUser;n.setCredentialChangeListener((async o=>{a.isEqual(o)||(await _2(t.localStore,o),a=o)})),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t}async function Bv(n,t){n.asyncQueue.verifyOperationInProgress();const i=await wj(n);pt(ra,"Initializing OnlineComponentProvider"),await t.initialize(i,n.configuration),n.setCredentialChangeListener((a=>Vv(t.remoteStore,a))),n.setAppCheckTokenChangeListener(((a,o)=>Vv(t.remoteStore,o))),n._onlineComponents=t}async function wj(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){pt(ra,"Using user provided OfflineComponentProvider");try{await Np(n,n._uninitializedComponentsProvider._offline)}catch(t){const i=t;if(!(function(o){return o.name==="FirebaseError"?o.code===it.FAILED_PRECONDITION||o.code===it.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(i))throw i;oo("Error using user provided cache. Falling back to memory cache: "+i),await Np(n,new Rh)}}else pt(ra,"Using default OfflineComponentProvider"),await Np(n,new Ej(void 0));return n._offlineComponents}async function P2(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(pt(ra,"Using user provided OnlineComponentProvider"),await Bv(n,n._uninitializedComponentsProvider._online)):(pt(ra,"Using default OnlineComponentProvider"),await Bv(n,new xm))),n._onlineComponents}function Tj(n){return P2(n).then((t=>t.syncEngine))}async function Ch(n){const t=await P2(n),i=t.eventManager;return i.onListen=lj.bind(null,t.syncEngine),i.onUnlisten=hj.bind(null,t.syncEngine),i.onFirstRemoteStoreListen=uj.bind(null,t.syncEngine),i.onLastRemoteStoreUnlisten=fj.bind(null,t.syncEngine),i}function Sj(n,t,i={}){const a=new ir;return n.asyncQueue.enqueueAndForget((async()=>(function(u,f,m,p,g){const v=new wg({next:S=>{v.Nu(),f.enqueueAndForget((()=>xg(u,w)));const R=S.docs.has(m);!R&&S.fromCache?g.reject(new dt(it.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&S.fromCache&&p&&p.source==="server"?g.reject(new dt(it.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(S)},error:S=>g.reject(S)}),w=new _g(qh(m.path),v,{includeMetadataChanges:!0,qa:!0});return yg(u,w)})(await Ch(n),n.asyncQueue,t,i,a))),a.promise}function Aj(n,t,i={}){const a=new ir;return n.asyncQueue.enqueueAndForget((async()=>(function(u,f,m,p,g){const v=new wg({next:S=>{v.Nu(),f.enqueueAndForget((()=>xg(u,w))),S.fromCache&&p.source==="server"?g.reject(new dt(it.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(S)},error:S=>g.reject(S)}),w=new _g(m,v,{includeMetadataChanges:!0,qa:!0});return yg(u,w)})(await Ch(n),n.asyncQueue,t,i,a))),a.promise}/**
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
 */function L2(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const z2="firestore.googleapis.com",Fv=!0;class qv{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new dt(it.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=z2,this.ssl=Fv}else this.host=t.host,this.ssl=t.ssl??Fv;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=x2;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<rI)throw new dt(it.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}$6("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=L2(t.experimentalLongPollingOptions??{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new dt(it.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new dt(it.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new dt(it.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(a,o){return a.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Jh{constructor(t,i,a,o){this._authCredentials=t,this._appCheckCredentials=i,this._databaseId=a,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new dt(it.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new dt(it.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qv(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(a){if(!a)return new N6;switch(a.type){case"firstParty":return new k6(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new dt(it.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(i){const a=$v.get(i);a&&(pt("ComponentProvider","Removing Datastore"),$v.delete(i),a.terminate())})(this),Promise.resolve()}}function Rj(n,t,i,a={}){n=Fn(n,Jh);const o=Gm(t),u=n._getSettings(),f={...u,emulatorOptions:n._getEmulatorOptions()},m=`${t}:${i}`;o&&(aR(`https://${m}`),uR("Firestore",!0)),u.host!==z2&&u.host!==m&&oo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...u,host:m,ssl:o,emulatorOptions:a};if(!yh(p,f)&&(n._setSettings(p),a.mockUserToken)){let g,v;if(typeof a.mockUserToken=="string")g=a.mockUserToken,v=an.MOCK_USER;else{g=sR(a.mockUserToken,n._app?.options.projectId);const w=a.mockUserToken.sub||a.mockUserToken.user_id;if(!w)throw new dt(it.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new an(w)}n._authCredentials=new M6(new CE(g,v))}}/**
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
 */class oa{constructor(t,i,a){this.converter=i,this._query=a,this.type="query",this.firestore=t}withConverter(t){return new oa(this.firestore,t,this._query)}}class ve{constructor(t,i,a){this.converter=i,this._key=a,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ve(this.firestore,t,this._key)}toJSON(){return{type:ve._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,i,a){if(cu(i,ve._jsonSchema))return new ve(t,a||null,new vt(ae.fromString(i.referencePath)))}}ve._jsonSchemaVersion="firestore/documentReference/1.0",ve._jsonSchema={type:Ne("string",ve._jsonSchemaVersion),referencePath:Ne("string")};class Zr extends oa{constructor(t,i,a){super(t,i,qh(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ve(this.firestore,null,new vt(t))}withConverter(t){return new Zr(this.firestore,t,this._path)}}function vm(n,t,...i){if(n=Ci(n),IE("collection","path",t),n instanceof Jh){const a=ae.fromString(t,...i);return iv(a),new Zr(n,null,a)}{if(!(n instanceof ve||n instanceof Zr))throw new dt(it.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=n._path.child(ae.fromString(t,...i));return iv(a),new Zr(n.firestore,null,a)}}function to(n,t,...i){if(n=Ci(n),arguments.length===1&&(t=Wm.newId()),IE("doc","path",t),n instanceof Jh){const a=ae.fromString(t,...i);return nv(a),new ve(n,null,new vt(a))}{if(!(n instanceof ve||n instanceof Zr))throw new dt(it.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=n._path.child(ae.fromString(t,...i));return nv(a),new ve(n.firestore,n instanceof Zr?n.converter:null,new vt(a))}}/**
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
 */const Kv="AsyncQueue";class Hv{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new b2(this,"async_queue_retry"),this._c=()=>{const a=Dp();a&&pt(Kv,"Visibility state changed to "+a.visibilityState),this.M_.w_()},this.ac=t;const i=Dp();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const i=Dp();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const i=new ir;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(i.resolve,i.reject),i.promise))).then((()=>i.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!wo(t))throw t;pt(Kv,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const i=this.ac.then((()=>(this.rc=!0,t().catch((a=>{throw this.nc=a,this.rc=!1,or("INTERNAL UNHANDLED ERROR: ",Gv(a)),a})).then((a=>(this.rc=!1,a))))));return this.ac=i,i}enqueueAfterDelay(t,i,a){this.uc(),this.oc.indexOf(t)>-1&&(i=0);const o=mg.createAndSchedule(this,t,i,a,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&wt(47125,{Pc:Gv(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const i of this.tc)if(i.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((i,a)=>i.targetTimeMs-a.targetTimeMs));for(const i of this.tc)if(i.skipDelay(),t!=="all"&&i.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const i=this.tc.indexOf(t);this.tc.splice(i,1)}}function Gv(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yv(n){return(function(i,a){if(typeof i!="object"||i===null)return!1;const o=i;for(const u of a)if(u in o&&typeof o[u]=="function")return!0;return!1})(n,["next","error","complete"])}class ts extends Jh{constructor(t,i,a,o){super(t,i,a,o),this.type="firestore",this._queue=new Hv,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Hv(t),this._firestoreClient=void 0,await t}}}function B2(n,t){const i=typeof n=="object"?n:v6(),a=typeof n=="string"?n:_h,o=p6(i,"firestore").getImmediate({identifier:a});if(!o._initialized){const u=iR("firestore");u&&Rj(o,...u)}return o}function tf(n){if(n._terminated)throw new dt(it.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Cj(n),n._firestoreClient}function Cj(n){const t=n._freezeSettings(),i=(function(o,u,f,m){return new J6(o,u,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,L2(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,t);n._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new bj(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&(function(o){const u=o?._online.build();return{_offline:o?._offline.build(u),_online:u}})(n._componentsProvider))}/**
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
 */class $n{constructor(t){this._byteString=t}static fromBase64String(t){try{return new $n(Ze.fromBase64String(t))}catch(i){throw new dt(it.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(t){return new $n(Ze.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:$n._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(cu(t,$n._jsonSchema))return $n.fromBase64String(t.bytes)}}$n._jsonSchemaVersion="firestore/bytes/1.0",$n._jsonSchema={type:Ne("string",$n._jsonSchemaVersion),bytes:Ne("string")};/**
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
 */class ef{constructor(...t){for(let i=0;i<t.length;++i)if(t[i].length===0)throw new dt(it.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class nf{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(t,i){if(!isFinite(t)||t<-90||t>90)throw new dt(it.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(i)||i<-180||i>180)throw new dt(it.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+i);this._lat=t,this._long=i}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Ut(this._lat,t._lat)||Ut(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ai._jsonSchemaVersion}}static fromJSON(t){if(cu(t,Ai._jsonSchema))return new Ai(t.latitude,t.longitude)}}Ai._jsonSchemaVersion="firestore/geoPoint/1.0",Ai._jsonSchema={type:Ne("string",Ai._jsonSchemaVersion),latitude:Ne("number"),longitude:Ne("number")};/**
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
 */class Ri{constructor(t){this._values=(t||[]).map((i=>i))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(a,o){if(a.length!==o.length)return!1;for(let u=0;u<a.length;++u)if(a[u]!==o[u])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Ri._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(cu(t,Ri._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((i=>typeof i=="number")))return new Ri(t.vectorValues);throw new dt(it.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ri._jsonSchemaVersion="firestore/vectorValue/1.0",Ri._jsonSchema={type:Ne("string",Ri._jsonSchemaVersion),vectorValues:Ne("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ij=/^__.*__$/;class jj{constructor(t,i,a){this.data=t,this.fieldMask=i,this.fieldTransforms=a}toMutation(t,i){return this.fieldMask!==null?new sa(t,this.data,this.fieldMask,i,this.fieldTransforms):new hu(t,this.data,i,this.fieldTransforms)}}class $2{constructor(t,i,a){this.data=t,this.fieldMask=i,this.fieldTransforms=a}toMutation(t,i){return new sa(t,this.data,this.fieldMask,i,this.fieldTransforms)}}function F2(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw wt(40011,{Ac:n})}}class Tg{constructor(t,i,a,o,u,f){this.settings=t,this.databaseId=i,this.serializer=a,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new Tg({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const i=this.path?.child(t),a=this.Vc({path:i,fc:!1});return a.gc(t),a}yc(t){const i=this.path?.child(t),a=this.Vc({path:i,fc:!1});return a.Rc(),a}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return Ih(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((i=>t.isPrefixOf(i)))!==void 0||this.fieldTransforms.find((i=>t.isPrefixOf(i.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(F2(this.Ac)&&Ij.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class Dj{constructor(t,i,a){this.databaseId=t,this.ignoreUndefinedProperties=i,this.serializer=a||Xh(t)}Cc(t,i,a,o=!1){return new Tg({Ac:t,methodName:i,Dc:a,path:We.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Sg(n){const t=n._freezeSettings(),i=Xh(n._databaseId);return new Dj(n._databaseId,!!t.ignoreUndefinedProperties,i)}function Nj(n,t,i,a,o,u={}){const f=n.Cc(u.merge||u.mergeFields?2:0,t,i,o);Rg("Data must be an object, but it was:",f,a);const m=q2(a,f);let p,g;if(u.merge)p=new In(f.fieldMask),g=f.fieldTransforms;else if(u.mergeFields){const v=[];for(const w of u.mergeFields){const S=_m(t,w,i);if(!f.contains(S))throw new dt(it.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);H2(v,S)||v.push(S)}p=new In(v),g=f.fieldTransforms.filter((w=>p.covers(w.field)))}else p=null,g=f.fieldTransforms;return new jj(new xn(m),p,g)}class rf extends nf{_toFieldTransform(t){if(t.Ac!==2)throw t.Ac===1?t.Sc(`${this._methodName}() can only appear at the top level of your update data`):t.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof rf}}class Ag extends nf{constructor(t,i){super(t),this.Fc=i}_toFieldTransform(t){const i=new ou(t.serializer,t2(t.serializer,this.Fc));return new TC(t.path,i)}isEqual(t){return t instanceof Ag&&this.Fc===t.Fc}}function Mj(n,t,i,a){const o=n.Cc(1,t,i);Rg("Data must be an object, but it was:",o,a);const u=[],f=xn.empty();aa(a,((p,g)=>{const v=Cg(t,p,i);g=Ci(g);const w=o.yc(v);if(g instanceof rf)u.push(v);else{const S=mu(g,w);S!=null&&(u.push(v),f.set(v,S))}}));const m=new In(u);return new $2(f,m,o.fieldTransforms)}function Oj(n,t,i,a,o,u){const f=n.Cc(1,t,i),m=[_m(t,a,i)],p=[o];if(u.length%2!=0)throw new dt(it.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<u.length;S+=2)m.push(_m(t,u[S])),p.push(u[S+1]);const g=[],v=xn.empty();for(let S=m.length-1;S>=0;--S)if(!H2(g,m[S])){const R=m[S];let V=p[S];V=Ci(V);const B=f.yc(R);if(V instanceof rf)g.push(R);else{const P=mu(V,B);P!=null&&(g.push(R),v.set(R,P))}}const w=new In(g);return new $2(v,w,f.fieldTransforms)}function Vj(n,t,i,a=!1){return mu(i,n.Cc(a?4:3,t))}function mu(n,t){if(K2(n=Ci(n)))return Rg("Unsupported field value:",t,n),q2(n,t);if(n instanceof nf)return(function(a,o){if(!F2(o.Ac))throw o.Sc(`${a._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${a._methodName}() is not currently supported inside arrays`);const u=a._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(a,o){const u=[];let f=0;for(const m of a){let p=mu(m,o.wc(f));p==null&&(p={nullValue:"NULL_VALUE"}),u.push(p),f++}return{arrayValue:{values:u}}})(n,t)}return(function(a,o){if((a=Ci(a))===null)return{nullValue:"NULL_VALUE"};if(typeof a=="number")return t2(o.serializer,a);if(typeof a=="boolean")return{booleanValue:a};if(typeof a=="string")return{stringValue:a};if(a instanceof Date){const u=le.fromDate(a);return{timestampValue:Th(o.serializer,u)}}if(a instanceof le){const u=new le(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:Th(o.serializer,u)}}if(a instanceof Ai)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof $n)return{bytesValue:h2(o.serializer,a._byteString)};if(a instanceof ve){const u=o.databaseId,f=a.firestore._databaseId;if(!f.isEqual(u))throw o.Sc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:sg(a.firestore._databaseId||o.databaseId,a._key.path)}}if(a instanceof Ri)return(function(f,m){return{mapValue:{fields:{[PE]:{stringValue:LE},[Eh]:{arrayValue:{values:f.toArray().map((g=>{if(typeof g!="number")throw m.Sc("VectorValues must only contain numeric values.");return ig(m.serializer,g)}))}}}}}})(a,o);throw o.Sc(`Unsupported field value: ${zh(a)}`)})(n,t)}function q2(n,t){const i={};return NE(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):aa(n,((a,o)=>{const u=mu(o,t.mc(a));u!=null&&(i[a]=u)})),{mapValue:{fields:i}}}function K2(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof le||n instanceof Ai||n instanceof $n||n instanceof ve||n instanceof nf||n instanceof Ri)}function Rg(n,t,i){if(!K2(i)||!jE(i)){const a=zh(i);throw a==="an object"?t.Sc(n+" a custom object"):t.Sc(n+" "+a)}}function _m(n,t,i){if((t=Ci(t))instanceof ef)return t._internalPath;if(typeof t=="string")return Cg(n,t);throw Ih("Field path arguments must be of type string or ",n,!1,void 0,i)}const kj=new RegExp("[~\\*/\\[\\]]");function Cg(n,t,i){if(t.search(kj)>=0)throw Ih(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,i);try{return new ef(...t.split("."))._internalPath}catch{throw Ih(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,i)}}function Ih(n,t,i,a,o){const u=a&&!a.isEmpty(),f=o!==void 0;let m=`Function ${t}() called with invalid data`;i&&(m+=" (via `toFirestore()`)"),m+=". ";let p="";return(u||f)&&(p+=" (found",u&&(p+=` in field ${a}`),f&&(p+=` in document ${o}`),p+=")"),new dt(it.INVALID_ARGUMENT,m+n+p)}function H2(n,t){return n.some((i=>i.isEqual(t)))}/**
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
 */class G2{constructor(t,i,a,o,u){this._firestore=t,this._userDataWriter=i,this._key=a,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new ve(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Uj(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const i=this._document.data.field(Ig("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i)}}}class Uj extends G2{data(){return super.data()}}function Ig(n,t){return typeof t=="string"?Cg(n,t):t instanceof ef?t._internalPath:t._delegate._internalPath}/**
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
 */function Y2(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new dt(it.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class jg{}class Q2 extends jg{}function Pj(n,t,...i){let a=[];t instanceof jg&&a.push(t),a=a.concat(i),(function(u){const f=u.filter((p=>p instanceof Ng)).length,m=u.filter((p=>p instanceof Dg)).length;if(f>1||f>0&&m>0)throw new dt(it.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(a);for(const o of a)n=o._apply(n);return n}class Dg extends Q2{constructor(t,i,a){super(),this._field=t,this._op=i,this._value=a,this.type="where"}static _create(t,i,a){return new Dg(t,i,a)}_apply(t){const i=this._parse(t);return X2(t._query,i),new oa(t.firestore,t.converter,lm(t._query,i))}_parse(t){const i=Sg(t.firestore);return(function(u,f,m,p,g,v,w){let S;if(g.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new dt(it.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){Xv(w,v);const V=[];for(const B of w)V.push(Qv(p,u,B));S={arrayValue:{values:V}}}else S=Qv(p,u,w)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||Xv(w,v),S=Vj(m,f,w,v==="in"||v==="not-in");return De.create(g,v,S)})(t._query,"where",i,t.firestore._databaseId,this._field,this._op,this._value)}}class Ng extends jg{constructor(t,i){super(),this.type=t,this._queryConstraints=i}static _create(t,i){return new Ng(t,i)}_parse(t){const i=this._queryConstraints.map((a=>a._parse(t))).filter((a=>a.getFilters().length>0));return i.length===1?i[0]:ai.create(i,this._getOperator())}_apply(t){const i=this._parse(t);return i.getFilters().length===0?t:((function(o,u){let f=o;const m=u.getFlattenedFilters();for(const p of m)X2(f,p),f=lm(f,p)})(t._query,i),new oa(t.firestore,t.converter,lm(t._query,i)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Mg extends Q2{constructor(t,i){super(),this._field=t,this._direction=i,this.type="orderBy"}static _create(t,i){return new Mg(t,i)}_apply(t){const i=(function(o,u,f){if(o.startAt!==null)throw new dt(it.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new dt(it.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ru(u,f)})(t._query,this._field,this._direction);return new oa(t.firestore,t.converter,(function(o,u){const f=o.explicitOrderBy.concat([u]);return new To(o.path,o.collectionGroup,f,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(t._query,i))}}function Lj(n,t="asc"){const i=t,a=Ig("orderBy",n);return Mg._create(a,i)}function Qv(n,t,i){if(typeof(i=Ci(i))=="string"){if(i==="")throw new dt(it.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!GE(t)&&i.indexOf("/")!==-1)throw new dt(it.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${i}' contains a '/' character.`);const a=t.path.child(ae.fromString(i));if(!vt.isDocumentKey(a))throw new dt(it.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${a}' is not because it has an odd number of segments (${a.length}).`);return hv(n,new vt(a))}if(i instanceof ve)return hv(n,i._key);throw new dt(it.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${zh(i)}.`)}function Xv(n,t){if(!Array.isArray(n)||n.length===0)throw new dt(it.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function X2(n,t){const i=(function(o,u){for(const f of o)for(const m of f.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(i!==null)throw i===t.op?new dt(it.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new dt(it.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${i.toString()}' filters.`)}class zj{convertValue(t,i="none"){switch(na(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ae(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,i);case 5:return t.stringValue;case 6:return this.convertBytes(ea(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,i);case 11:return this.convertObject(t.mapValue,i);case 10:return this.convertVectorValue(t.mapValue);default:throw wt(62114,{value:t})}}convertObject(t,i){return this.convertObjectMap(t.fields,i)}convertObjectMap(t,i="none"){const a={};return aa(t,((o,u)=>{a[o]=this.convertValue(u,i)})),a}convertVectorValue(t){const i=t.fields?.[Eh].arrayValue?.values?.map((a=>Ae(a.doubleValue)));return new Ri(i)}convertGeoPoint(t){return new Ai(Ae(t.latitude),Ae(t.longitude))}convertArray(t,i){return(t.values||[]).map((a=>this.convertValue(a,i)))}convertServerTimestamp(t,i){switch(i){case"previous":const a=Fh(t);return a==null?null:this.convertValue(a,i);case"estimate":return this.convertTimestamp(eu(t));default:return null}}convertTimestamp(t){const i=ta(t);return new le(i.seconds,i.nanos)}convertDocumentKey(t,i){const a=ae.fromString(t);Gt(y2(a),9688,{name:t});const o=new nu(a.get(1),a.get(3)),u=new vt(a.popFirst(5));return o.isEqual(i)||or(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${i.projectId}/${i.database}) instead.`),u}}/**
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
 */function Bj(n,t,i){let a;return a=n?i&&(i.merge||i.mergeFields)?n.toFirestore(t,i):n.toFirestore(t):t,a}class Ll{constructor(t,i){this.hasPendingWrites=t,this.fromCache=i}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Xa extends G2{constructor(t,i,a,o,u,f){super(t,i,a,o,f),this._firestore=t,this._firestoreImpl=t,this.metadata=u}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const i=new ch(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(i,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,i={}){if(this._document){const a=this._document.data.field(Ig("DocumentSnapshot.get",t));if(a!==null)return this._userDataWriter.convertValue(a,i.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new dt(it.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,i={};return i.type=Xa._jsonSchemaVersion,i.bundle="",i.bundleSource="DocumentSnapshot",i.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?i:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),i.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),i)}}Xa._jsonSchemaVersion="firestore/documentSnapshot/1.0",Xa._jsonSchema={type:Ne("string",Xa._jsonSchemaVersion),bundleSource:Ne("string","DocumentSnapshot"),bundleName:Ne("string"),bundle:Ne("string")};class ch extends Xa{data(t={}){return super.data(t)}}class Wa{constructor(t,i,a,o){this._firestore=t,this._userDataWriter=i,this._snapshot=o,this.metadata=new Ll(o.hasPendingWrites,o.fromCache),this.query=a}get docs(){const t=[];return this.forEach((i=>t.push(i))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,i){this._snapshot.docs.forEach((a=>{t.call(i,new ch(this._firestore,this._userDataWriter,a.key,a,new Ll(this._snapshot.mutatedKeys.has(a.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const i=!!t.includeMetadataChanges;if(i&&this._snapshot.excludesMetadataChanges)throw new dt(it.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===i||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map((m=>{const p=new ch(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Ll(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:p,oldIndex:-1,newIndex:f++}}))}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const p=new ch(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Ll(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let g=-1,v=-1;return m.type!==0&&(g=f.indexOf(m.doc.key),f=f.delete(m.doc.key)),m.type!==1&&(f=f.add(m.doc),v=f.indexOf(m.doc.key)),{type:$j(m.type),doc:p,oldIndex:g,newIndex:v}}))}})(this,i),this._cachedChangesIncludeMetadataChanges=i),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new dt(it.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Wa._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Wm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const i=[],a=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(i.push(u._document),a.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function $j(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return wt(61501,{type:n})}}/**
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
 */function Gl(n){n=Fn(n,ve);const t=Fn(n.firestore,ts);return Sj(tf(t),n._key).then((i=>Z2(t,n,i)))}Wa._jsonSchemaVersion="firestore/querySnapshot/1.0",Wa._jsonSchema={type:Ne("string",Wa._jsonSchemaVersion),bundleSource:Ne("string","QuerySnapshot"),bundleName:Ne("string"),bundle:Ne("string")};class Og extends zj{constructor(t){super(),this.firestore=t}convertBytes(t){return new $n(t)}convertReference(t){const i=this.convertDocumentKey(t,this.firestore._databaseId);return new ve(this.firestore,null,i)}}function Fj(n){n=Fn(n,oa);const t=Fn(n.firestore,ts),i=tf(t),a=new Og(t);return Y2(n._query),Aj(i,n._query).then((o=>new Wa(t,a,n,o)))}function Vg(n,t,i){n=Fn(n,ve);const a=Fn(n.firestore,ts),o=Bj(n.converter,t,i);return W2(a,[Nj(Sg(a),"setDoc",n._key,o,n.converter!==null,i).toMutation(n._key,Ti.none())])}function jh(n,t,i,...a){n=Fn(n,ve);const o=Fn(n.firestore,ts),u=Sg(o);let f;return f=typeof(t=Ci(t))=="string"||t instanceof ef?Oj(u,"updateDoc",n._key,t,i,a):Mj(u,"updateDoc",n._key,t),W2(o,[f.toMutation(n._key,Ti.exists(!0))])}function qj(n,...t){n=Ci(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||Yv(t[a])||(i=t[a++]);const o={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Yv(t[a])){const p=t[a];t[a]=p.next?.bind(p),t[a+1]=p.error?.bind(p),t[a+2]=p.complete?.bind(p)}let u,f,m;if(n instanceof ve)f=Fn(n.firestore,ts),m=qh(n._key.path),u={next:p=>{t[a]&&t[a](Z2(f,n,p))},error:t[a+1],complete:t[a+2]};else{const p=Fn(n,oa);f=Fn(p.firestore,ts),m=p._query;const g=new Og(f);u={next:v=>{t[a]&&t[a](new Wa(f,g,p,v))},error:t[a+1],complete:t[a+2]},Y2(n._query)}return(function(g,v,w,S){const R=new wg(S),V=new _g(v,R,w);return g.asyncQueue.enqueueAndForget((async()=>yg(await Ch(g),V))),()=>{R.Nu(),g.asyncQueue.enqueueAndForget((async()=>xg(await Ch(g),V)))}})(tf(f),m,o,u)}function W2(n,t){return(function(a,o){const u=new ir;return a.asyncQueue.enqueueAndForget((async()=>dj(await Tj(a),o,u))),u.promise})(tf(n),t)}function Z2(n,t,i){const a=i.docs.get(t._key),o=new Og(n);return new Xa(n,o,t._key,a,new Ll(i.hasPendingWrites,i.fromCache),t.converter)}function Dh(n){return new Ag("increment",n)}(function(t,i=!0){(function(o){Eo=o})(x6),xh(new Wl("firestore",((a,{instanceIdentifier:o,options:u})=>{const f=a.getProvider("app").getImmediate(),m=new ts(new O6(a.getProvider("auth-internal")),new U6(f,a.getProvider("app-check-internal")),(function(g,v){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new dt(it.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new nu(g.options.projectId,v)})(f,o),f);return u={useFetchStreams:i,...u},m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),Zs(Zx,Jx,t),Zs(Zx,Jx,"esm2020")})();const Kj={apiKey:"AIzaSyAEFzPwTADLzuxWuyk889Jz1cHPsEgLOkQ",authDomain:"tu2025grad.firebaseapp.com",projectId:"tu2025grad",storageBucket:"tu2025grad.firebasestorage.app",messagingSenderId:"553768466639",appId:"1:553768466639:web:7c16f5d6432da7ebc05fba"},Hj=Gx().length?Gx()[0]:Qm(Kj),eo=B2(Hj),Gj=A.div`
  position: relative;
  width: 445px;
  height: 353px;
  border-radius: 16px;
  cursor: pointer;
  @media (max-width: 640px) {
    width: 173px;
    height: 137px;  
 }
`,Wv=A.div`
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
`,Yj=A.div`
  display: flex;
  width: 445px;
  height: 353px;
  border-radius: 16px;
  @media (max-width: 640px) {
    width: 173px;
    height: 137px;
  }
`,Qj=A.img`
  display: flex;
  width: 445px;
  height: 353px;
  border-radius: 16px;
  object-fit: cover;
  @media (max-width: 640px) {
    width: 173px;
    height: 137px;  
 }
`,Xj=A.div`
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
`,Wj=A.div`
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
`,Zj=A.p`
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
`,Jj=A.p`
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
`,t3=A.div`
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
`,e3=A.div`
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
`,n3=A.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 14px;
  font-weight: 300;
  margin: 0;
  color: #121212;
  @media (max-width: 640px) {
    font-size: 10px;  
 }
`,i3=A.div`
  display: flex;
  position: relative;
  width: auto;
  height: 20px;
  gap: -12px;
  @media (max-width: 640px) {
    height: 12px;  
 }
`,r3=A.img`
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
`,a3=A.div`
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
`,Zv=A.div`
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
`,Jv=A.div`
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
`,t_=A.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 12px;
  font-weight: 300;
  margin: 0;
  color: #121212;
  @media (max-width: 640px) {
    font-size: 8px;
 }
`;function kg({titleKor:n,titleEng:t,nameKor:i,view:a,like:o,href:u,src:f,profileImgs:m,docId:p,collection:g="works"}){const[v,w]=K.useState(typeof o=="number"?o:0),[S,R]=K.useState(typeof a=="number"?a:0);K.useEffect(()=>{let J=!0;return(async()=>{if(p!=null)try{const ot=to(eo,g,String(p)),Z=await Gl(ot);if(!J)return;if(Z.exists()){const ft=Z.data();w(typeof ft.like=="number"?ft.like:0),R(typeof ft.view=="number"?ft.view:0)}}catch(ot){console.error("ProjectCard Firestore read error:",ot)}})(),()=>{J=!1}},[p,g]);const V=J=>{const ot=J.currentTarget.querySelector(".card-hover");ot&&(ot.style.opacity=1)},B=J=>{const ot=J.currentTarget.querySelector(".card-hover");ot&&(ot.style.opacity=0)},P="/TU2025gradulate/",X=/^https?:\/\//i.test(u),Y=x.jsxs(x.Fragment,{children:[x.jsx(Gj,{children:x.jsxs(Yj,{onMouseEnter:V,onMouseLeave:B,children:[x.jsx(Xj,{className:"card-hover",children:x.jsxs(Wj,{children:[x.jsx(Jj,{children:n}),x.jsx(Zj,{children:t})]})}),x.jsx(Qj,{src:f,alt:"Project"})]})}),x.jsxs(t3,{children:[x.jsxs(e3,{children:[x.jsx(i3,{children:m.map((J,ot)=>x.jsx(r3,{src:J,alt:`Profile${ot+1}`,$z:3-ot,$ml:ot>0},ot))}),x.jsx(n3,{children:i})]}),x.jsxs(a3,{children:[x.jsxs(Zv,{children:[x.jsx(Jv,{src:`${P}icons/likeIcon.svg`}),x.jsx(t_,{children:v})]}),x.jsxs(Zv,{children:[x.jsx(Jv,{src:`${P}icons/viewIcon.svg`}),x.jsx(t_,{children:S})]})]})]})]});return X?x.jsx(Wv,{as:"a",href:u,style:{textDecoration:"none"},children:Y}):x.jsx(Wv,{as:xo,to:u.startsWith("/")?u:`/${u}`,style:{textDecoration:"none"},children:Y})}kg.propTypes={titleKor:W.string.isRequired,titleEng:W.string.isRequired,nameKor:W.string.isRequired,view:W.number,like:W.number,src:W.string.isRequired,href:W.string.isRequired,profileImgs:W.arrayOf(W.string).isRequired,docId:W.oneOfType([W.string,W.number]),collection:W.string};kg.defaultProps={titleKor:"프로젝트 제목",titleEng:"Project Title",nameKor:"Author Name",view:0,like:0,collection:"works"};const e_=40;function J2(n){if(!n)return n;const t="/TU2025gradulate/";if(/^https?:\/\//i.test(n))return n;const i=n.replace(/^\.\.\//,"").replace(/^\//,"");return t+i}const s3=A.div`
  position: relative; background: #fff;
`,o3=A.div`
  padding-left: ${e_}px; padding-right: ${e_}px; display: flex; flex-direction: column;
  @media (max-width: 640px) {
    padding-left: 16px;
    padding-right: 16px;  
 }
`;function l3({children:n}){return x.jsx(s3,{children:x.jsx(o3,{children:n})})}const u3=A.div`
  position: relative;
  min-height: calc(100vh - 200px);
`,c3=A.div`
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
`,h3=A.div`
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
`,n_=Xl,tb=Km,f3={"All Projects":null,"AI & Robot":"c0","Edu & Kids":"c1","Health Care":"c2","IT & Tech":"c3",Living:"c4",Mobility:"c5"};function Em(n){return n.members.map(t=>{const i=tb.find(a=>a.num===t);return i?i.nameKor:""}).filter(Boolean).join(", ")}function d3(n){return n.members.map(t=>{const i=tb.find(a=>a.num===t);return i?J2(i.imgUrl):""}).filter(Boolean)}function p3({list:n}){const t={c0:"A",c1:"E",c2:"H",c3:"I",c4:"L",c5:"M"};return x.jsx(c3,{children:n.map((i,a)=>{const o=Em(i),u=d3(i),f=String(i.projectNum+1).padStart(3,"0"),p=`${t[i.category]||"A"}${f}`,g=i.projectNum??i.num;return x.jsx(kg,{titleKor:i.titleKor,titleEng:i.titleEng,src:J2(`/projects/${i.projectNum}/thumb.jpg`),nameKor:o,profileImgs:u,docId:g,href:`/work/${p}`},a)})})}function m3(){const[n,t]=Ot.useState("All Projects"),[i,a]=Ot.useState("이름순"),[o,u]=Ot.useState({});Ot.useEffect(()=>{let p=!0;return(async()=>{try{const g=await Fj(vm(eo,"works"));if(!p)return;const v={};g.forEach(w=>{const S=w.data()||{};v[String(w.id)]={like:typeof S.like=="number"?S.like:0,view:typeof S.view=="number"?S.view:0}}),u(v)}catch(g){console.error("Failed to load works stats:",g)}})(),()=>{p=!1}},[]);const f=Ot.useMemo(()=>{const p=f3[n]||null;return p?n_.filter(g=>g.category===p):n_},[n]),m=Ot.useMemo(()=>{const p=[...f];switch(i){case"이름순":p.sort((g,v)=>Em(g).localeCompare(Em(v),"ko"));break;case"좋아요순":p.sort((g,v)=>{const w=String(g.projectNum??g.num),S=String(v.projectNum??v.num),R=o[w]?.like??0;return(o[S]?.like??0)-R});break;case"조회수순":p.sort((g,v)=>{const w=String(g.projectNum??g.num),S=String(v.projectNum??v.num),R=o[w]?.view??0;return(o[S]?.view??0)-R});break;case"팀작우선":p.sort((g,v)=>(v.members.length>1)-(g.members.length>1));break;case"개인작우선":p.sort((g,v)=>(g.members.length>1)-(v.members.length>1));break}return p},[f,i,o]);return x.jsxs(u3,{children:[x.jsx(h3,{children:"Projects"}),x.jsx(cE,{type:"project",onCategoryChange:t,onSortChange:a,sortLabel:i}),x.jsx(l3,{children:x.jsx(p3,{list:m})})]})}const g3=A.div(({height:n,from:t,to:i,position:a,z:o})=>({position:"absolute",left:0,right:0,[a]:-1,height:n,pointerEvents:"none",zIndex:o??0,background:`linear-gradient(180deg, ${t} 0%, ${i} 100%)`}));function Ug({position:n="bottom",from:t,to:i,height:a=240,z:o=0,style:u}){return x.jsx(g3,{position:n,from:t,to:i,height:a,z:o,style:u})}const rr={heroToWhite:{from:"rgba(18,18,18,0)",to:"#FFFFFF",h:80},whiteToBlack:{from:"rgba(255,255,255,0)",to:"#121212",h:160},blackToBlackSoft:{from:"rgba(18,18,18,0)",to:"#121212",h:180}},y3=A.section`
  position: relative; height: 974px; min-height: 620px; overflow: hidden; background: #121212; z-index: 1;
  @media (max-width: 640px) {
    height: 320px;
    min-height: 220px;
  }
`,x3=A.div`
  position: absolute; inset: 0;
  background: url("https://placehold.co/3169x1783") center/cover no-repeat;
  @media (max-width: 640px) {
    background-size: cover;
    background-position: center;
  }
`;A.div`
  content: ""; position: absolute; inset: 0;
  background: linear-gradient(180deg, #121212 0%, rgba(18,18,18,0) 55%);
`;const v3=A.div`
  position: absolute;
  inset: 0;
  background-color: rgba(18, 18, 18, 0.2);
`,_3=A.div`
  position: absolute; left: 40px; bottom: 80px; max-width: 1029px; display: flex; flex-direction: column; gap: 8px;
  @media (max-width: 640px) {
    left: 16px;
    bottom: 32px;
    max-width: 90vw;
    gap: 4px;
  }
`,i_=A.p`
  margin: 0; color: #FFFFFF; font-family: Pretendard, system-ui; font-size: 16px; line-height: 19.2px;
  @media (max-width: 640px) {
    font-size: 13px;
    line-height: 1.4;
  }
`,E3=A.p`
  margin: 0; color: #FFFFFF; font-family: Pretendard, system-ui; font-weight: 600; font-size: 24px; line-height: 27.6px;
  @media (max-width: 640px) {
    font-size: 17px;
    line-height: 1.3;
  }
`,b3=A.button`
  position: absolute; left: 50%; transform: translateX(-50%); bottom: 72px;
  width: 240px; height: 52px; display: flex; align-items: center; justify-content: center;
  background: rgba(255,255,255,0.05); border: 1px solid #FFFFFF; color: #FFFFFF;
  font-family: Pretendard, system-ui; font-weight: 700; cursor: pointer;
  @media (max-width: 640px) {
    width: 140px;
    height: 36px;
    font-size: 14px;
    bottom: 16px;
  }
`;function w3(){return x.jsxs(y3,{"aria-label":"Hero",children:[x.jsx(x3,{children:x.jsx(v3,{})}),x.jsxs(_3,{children:[x.jsxs(i_,{children:["25. 10. 24. FRI~26. SUN",x.jsx("br",{}),"Hongdae Art Center B2"]}),x.jsx(i_,{children:"Department of Design Engineering"}),x.jsxs(E3,{children:["Tech University of Korea",x.jsx("br",{}),"20th Grad Exhibition"]})]}),x.jsx(b3,{type:"button","aria-label":"View More",children:"View More"}),x.jsx(Ug,{position:"bottom",from:rr.heroToWhite.from,to:rr.heroToWhite.to,height:rr.heroToWhite.h,z:0})]})}const r_="/TU2025gradulate/",T3=A.section`
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  padding-top: 120px;
  padding-bottom: 160px;
  @media (max-width: 640px) {
    padding-top: 32px;
    padding-bottom: 48px;
  }
`,S3=A.div`
  width: 100%;
  max-width: calc(100vw - 80px);
  margin: 0 auto;
  @media (max-width: 640px) {
    max-width: 100%;
    padding: 0 12px;
    box-sizing: border-box;
  }
`,A3=A.div`
  display: flex;
  gap: 94px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 640px) {
    gap: 32px;
  }
`,R3=A.div`
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
`,C3=A.h2`
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
`,I3=A.div`
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
`,j3=A.div`
  display: flex;
  width: 285px;
  height: 285px;
  position: relative;
  overflow: hidden;
  background: #FFFFFF;
  @media (max-width: 640px) {
    display: none;
  }
`,D3=A.div`
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
`;function N3(){return x.jsxs(T3,{"aria-labelledby":"brand-title",children:[x.jsxs(S3,{children:[x.jsxs(A3,{children:[x.jsx(C3,{id:"brand-title",children:"Brand Concept"}),x.jsxs(R3,{children:[x.jsxs(I3,{children:["우리는 살아가며 수많은 순간들을 스쳐 지나간다.",x.jsx("br",{}),"그 순간들은 이내 사라지는 듯하지만,",x.jsx("br",{}),"마음속 깊이 은은히 스며들어 기억이 되고,",x.jsx("br",{}),"결국엔 우리 존재의 한 조각이 된다.",x.jsx("br",{}),x.jsx("br",{}),"<잔향> 전시는 작품이 남긴 향이 관람객에게 스며들어",x.jsx("br",{}),"시간이 지나도 떠오를 수 있는 ‘기억의 향기’를 남기고자 한다.",x.jsx("br",{}),"단순한 결과물의 나열이 아닌, 창작의 과정과 고민이 축적된 흔적들이",x.jsx("br",{}),"이 공간에 머무는 이들의 감각과 감정 속에 잔잔히 머물기를 바란다.",x.jsx("br",{}),x.jsx("br",{}),"전시를 마주한 순간이 훗날, 불현듯 떠오르는 영감으로 다시 피어나기를.",x.jsx("br",{}),"그리하여 우리의 잔향이 누군가의 기억 속에서 오래도록 머물 수 있기를."]}),x.jsx(j3,{children:x.jsx("img",{src:`${r_}brand-logo.png`,alt:"2025 졸업전시 브랜드 로고",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",zIndex:1},draggable:!1})})]})]}),x.jsx(D3,{as:"div",style:{background:"none",height:"auto",justifyContent:"center",alignItems:"center",display:"flex",boxShadow:"none",margin:"32px auto 0",padding:0},children:x.jsx("img",{src:`${r_}brand-variation.png`,alt:"브랜드 컨셉 공식 그래픽",style:{width:"100%",maxWidth:480,height:"auto",display:"block",margin:"0 auto"},draggable:!1})})]}),x.jsx(Ug,{position:"bottom",from:rr.whiteToBlack.from,to:rr.whiteToBlack.to,height:rr.whiteToBlack.h,z:0})]})}const M3='Pretendard, system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial, sans-serif',O3=A.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${n=>n.$size==="sm"?40:52}px;
  padding: 0 ${n=>n.$size==="sm"?16:24}px;
  border: 1px solid #FFFFFF;
  color: #FFFFFF;
  background: transparent;
  font-family: ${M3};
  font-weight: 700;
  font-size: ${n=>n.$size==="sm"?13:14}px;
  letter-spacing: 0.2px;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  width: ${n=>n.$full?"100%":"auto"};
  transition: background .15s ease, color .15s ease, border-color .15s ease;
`,V3=A.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-left: 8px;
  border-top: 1px solid #FFFFFF;
  border-right: 1px solid #FFFFFF;
  transform: rotate(45deg);
`;function af({as:n="button",href:t,label:i="View More",size:a="md",fullWidth:o=!1,showArrow:u,defaultShowArrow:f=!0,onArrowChange:m,onClick:p,style:g}){const v=typeof u=="boolean",[w,S]=Ot.useState(f),R=v?u:w;Ot.useCallback(()=>{if(v){m&&m(!u);return}S(B=>{const P=!B;return m&&m(P),P})},[v,m,u]);const V={onClick:p,style:g,"data-arrow-visible":R,"data-toggle-arrow-fn":void 0,$size:a,$full:o,as:n,href:t,type:n==="button"?"button":void 0};return x.jsxs(O3,{...V,target:"_blank",rel:"noopener noreferrer",children:[i,R?x.jsx(V3,{"aria-hidden":!0}):null]})}const k3=A.section`
  position: relative;
  padding-top: 120px;
  padding-bottom: 120px;
  background: #121212;
  z-index: 1;
`,U3=A.div`
  width: 100%;
  max-width: 1840px;
  margin: 0 auto;
`,P3=A.div`
  position: relative;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  background: #171717;
`,L3=A.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,z3=A.div`
  position: absolute;
  left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  width: 70px; height: 70px;
  border-radius: 35px;
  background: rgba(255,255,255,0.6);
  backdrop-filter: blur(5px);
`,B3=A.div`
  position: absolute; left: 27px; top: 23px;
  width: 0; height: 0;
  border-left: 16px solid #000;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
`,$3=A.div`
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
`;const F3=A.div`
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
`;function q3(){const n=[{src:"https://placehold.co/910x512",cap:""},{src:"https://placehold.co/727x445",cap:"뭐"},{src:"https://placehold.co/727x445",cap:"뭐"},{src:"https://placehold.co/727x445",cap:"뭐"},{src:"https://placehold.co/727x445",cap:"뭐"},{src:"https://placehold.co/910x517",cap:""},{src:"https://placehold.co/987x555",cap:""},{src:"https://placehold.co/727x445",cap:"뭐"},{src:"https://placehold.co/727x445",cap:"뭐"}];return x.jsxs(k3,{"aria-label":"Gallery",children:[x.jsx(Ug,{position:"top",from:rr.blackToBlackSoft.from,to:rr.blackToBlackSoft.to,height:rr.blackToBlackSoft.h,z:0}),x.jsxs(U3,{children:[x.jsxs(P3,{children:[x.jsx(L3,{src:"https://placehold.co/1840x1000",alt:"featured"}),x.jsx(z3,{"aria-hidden":!0,children:x.jsx(B3,{})})]}),x.jsx($3,{className:"gallery-desktop"}),x.jsx("div",{className:"gallery-mobile",style:{display:"none"},children:x.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginTop:12},children:n.map((t,i)=>x.jsxs("div",{style:{width:"46vw",height:"46vw",minWidth:140,minHeight:140,maxWidth:"100vw",maxHeight:"100vw",borderRadius:4,overflow:"hidden",background:"#151515",position:"relative",marginBottom:8},children:[x.jsx("img",{src:t.src,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),t.cap&&x.jsx(F3,{children:t.cap})]},i))})}),x.jsx("div",{style:{paddingTop:40,display:"flex",justifyContent:"center"},children:x.jsx(af,{label:"View More"})})]})]})}const K3=A.section`
  padding: 0;
`,H3=A.div`
  position: relative; height: 1045px; overflow: hidden;
`,G3=A.div`
  position: absolute; left: 0; right: 0; top: 0; text-align: center;
  color: #FFFFFF; font-family: Pretendard, system-ui; font-weight: 700; font-size: 40px; line-height: 64px;
`,Y3=A.div`
  position: absolute; left: 40px; right: 40px; top: 140px; height: 905px; border-radius: 4px; overflow: hidden;
`,Q3=A.img`
  width: 100%; height: 100%; object-fit: cover;
`,X3=A.div`
  position: absolute; left: 732px; top: 327px; width: 787px; height: 492px; background: #FFFCFD;
`,W3=A.div`
  position: absolute; left: 610px; top: 496px; width: 700px; text-align: center;
  color: #000; font-family: Pretendard, system-ui; font-weight: 600; font-size: 48px; line-height: 76.8px;
`,Z3=A.div`
  position: absolute; left: 860px; top: 935px;
`;function J3(){return x.jsx(K3,{"aria-labelledby":"online-title",children:x.jsxs(H3,{children:[x.jsx(G3,{id:"online-title",children:"Online Exhibition"}),x.jsx(Y3,{children:x.jsx(Q3,{src:"https://placehold.co/1840x905",alt:"Online Exhibition background"})}),x.jsx(X3,{"aria-hidden":!0}),x.jsx(W3,{children:"오브제 활용 인터렉티브 세션으로 교체중"}),x.jsx(Z3,{children:x.jsx(af,{label:"View More"})})]})})}const tD=[{id:"w1",artistKr:"홍길동",dept:"Media Design Engineering",titleSmall:"jakpum en name",titleStrong:"작품 한글이름이름이름이",rightMeta1:"gandanhan jakpum seolmyeong",rightMeta2:"Janhyeang - daechung ganji naneun mal",image:"https://placehold.co/1265x712"},{id:"w2",artistKr:"김아무개",dept:"Industrial Design",titleSmall:"another name",titleStrong:"또 다른 작품명",rightMeta1:"brief copy line",rightMeta2:"longer secondary copy",image:"https://placehold.co/1265x712?text=work+2"},{id:"w3",artistKr:"참깨빙수",dept:"Chamkkae Bingsu",titleSmall:"small jakpum",titleStrong:"세상에서 가장 맛있는 어쩌고",rightMeta1:"건던헌 적펌 설멍",rightMeta2:"long long nong jakpum seolmyeong",image:"https://placehold.co/1265x712?text=work+3"}],eD=A.div`
  position: relative;
  background: #121212;
  @media (max-width: 640px) {
    background: #121212;
    padding: 0 0 24px 0;
  }
`,nD=A.div`
  display: none;
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100vw;
    padding: 0 0 24px 0;
    box-sizing: border-box;
  }
`,iD=A.div`
  background: #222;
  border-radius: 10px;
  overflow: hidden;
  width: 92vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,rD=A.img`
  width: 100%;
  height: auto;
  display: block;
`,aD=A.div`
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
`;const gu=`
  -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 18%, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 100%);
          mask-image: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 18%, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 100%);
`;A.div`
  position: absolute; left: 195px; top: 240px;
  color: #FAFAFA;
  font-family: Pretendard, system-ui;
  font-size: 112px; font-weight: 600;
  transform: translate3d(0, ${n=>n.$y||0}px, 0);
  opacity: ${n=>n.$opacity??1};
  ${gu}
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
  ${gu}
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
  ${gu}
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
  ${gu}
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
  ${gu}
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
`;function sD(){return x.jsxs(x.Fragment,{children:[x.jsx(eD,{className:"expo-works-desktop"}),x.jsx(nD,{children:tD.map(n=>x.jsxs(iD,{children:[x.jsx(rD,{src:n.image,alt:n.titleStrong}),x.jsxs(aD,{children:[x.jsx("div",{style:{fontWeight:700,fontSize:16},children:n.titleStrong}),x.jsxs("div",{style:{fontSize:13,color:"#D9D9D9"},children:[n.artistKr," | ",n.dept]}),x.jsx("div",{style:{fontSize:12,color:"#A1A1A1",marginTop:2},children:n.rightMeta1}),x.jsx("div",{style:{fontSize:12,color:"#A1A1A1"},children:n.rightMeta2})]})]},n.id))})]})}const oD="/TU2025gradulate/",lD=A.div`
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
`,uD=A.div`
  position: relative; 
  height: auto;
`,cD=A.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0px;
  @media (max-width: 640px) {
    gap: 16px;
}
`,hD=A.div`
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
`,fD=A.div`
  display: flex; align-items: center; height: 49px; padding-bottom: 21px; color: #FFFFFF; font-family: Pretendard, system-ui; font-size: 40px; font-weight: 700; line-height: 38.4px;
  @media (max-width: 640px) {
    font-size: 24px; height: 29px; padding-bottom: 12px;
}
`,dD=A.div`
  display: flex; flex-direction: column; align-items: center; gap: 60px; margin-top: 20px;
  @media (max-width: 640px) {
    margin-top: 60px;
    gap: 40px;
}
`,pD=A.div`
  width: 272px; height: 272px; background: #121212; overflow: hidden; display: flex; align-items: center; justify-content: center;
  @media (max-width: 640px) {
    width: 160px; height: 160px;
}
`;function mD(){return x.jsx(lD,{"aria-labelledby":"insta-title",children:x.jsx(uD,{children:x.jsxs(cD,{children:[x.jsx(hD,{children:x.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#FFFFFF",children:[x.jsx("path",{d:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2A3.2 3.2 0 1 1 12 8a3.2 3.2 0 0 1 0 6.4z"}),x.jsx("circle",{cx:"17.5",cy:"6.5",r:"1.2"}),x.jsx("path",{d:"M17.8 2H6.2A4.2 4.2 0 0 0 2 6.2v11.6A4.2 4.2 0 0 0 6.2 22h11.6A4.2 4.2 0 0 0 22 17.8V6.2A4.2 4.2 0 0 0 17.8 2zm2.6 15.8a2.6 2.6 0 0 1-2.6 2.6H6.2a2.6 2.6 0 0 1-2.6-2.6V6.2A2.6 2.6 0 0 1 6.2 3.6h11.6a2.6 2.6 0 0 1 2.6 2.6v11.6z"})]})}),x.jsx(fD,{id:"insta-title",children:"@tukd_grad"}),x.jsxs(dD,{children:[x.jsx(pD,{children:x.jsx("img",{src:`${oD}insta-qr.png`,alt:"Instagram preview"})}),x.jsx(af,{as:"a",href:"https://www.instagram.com/tukd_grad?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",label:"View Instagram",size:"sm"})]})]})})})}const yu=`'Pretendard', system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial, sans-serif`,a_=350,gD=A.section`
  padding: 120px 0 0 0; background: #121212;
`,yD=A.div`
  position: relative; background: #121212;
`,xD=A.div`
  /* padding-left: ${a_}px; padding-right: ${a_}px; */
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
`,vD=({children:n})=>x.jsx(yD,{children:x.jsx(xD,{children:n})}),_D=A.div`
  width: 289px; height: 45px; display: flex; align-items: flex-end;
`,ED=A.div`
  font-family: ${yu}; font-size: 20px; font-weight: 700; line-height: 22.4px; color: #FFFFFF;

  @media (max-width: 640px) {
    font-size: 16px;
}
`;function bD({title:n}){return x.jsx(_D,{children:x.jsx(ED,{children:n})})}const wD=A.div`
  border-bottom: ${n=>n.$last?"none":"1px rgba(255,255,255,0.12) solid"};
  display: flex; gap: 20px; align-items: flex-start;
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 20px;
    padding: 0;
    width: 100%;
  }
`,TD=A.div`
  padding-top: 22px; padding-bottom: 40px;
  border-bottom: ${n=>n.$divider?"1px rgba(255,255,255,0.12) solid":"none"};
  display: flex; gap: 20px; align-items: flex-start;
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 8px;
    padding: 16px 0 20px 0;
  }
`,SD=A.div`
  width: 135px;
  @media (max-width: 640px) {
    width: 100%;
  }
`,AD=A.div`
  font-family: ${yu}; font-size: 16px; font-weight: 700; line-height: 22.4px; color: #FFFFFF;
  @media (max-width: 640px) {
    font-size: 14px;
}
`,RD=A.div`
  width: 700px; display: flex; flex-direction: column; gap: 10px;
  @media (max-width: 640px) {
    width: 100%;
    gap: 6px;
  }
`;function Hr({k:n,children:t,divider:i=!0}){return x.jsxs(TD,{$divider:i,children:[x.jsx(SD,{children:x.jsx(AD,{children:n})}),x.jsx(RD,{children:t})]})}const CD=A.div`
  width: 900px; display: flex; flex-direction: column;
  @media (max-width: 640px) {
    width: 100%;
    padding: 0;
    box-sizing: border-box;
  }
`;function s_({title:n,children:t,last:i=!1}){return x.jsxs(wD,{$last:i,children:[x.jsx(bD,{title:n}),x.jsx(CD,{children:t})]})}const ID=A.div`
  width: 900px; padding-top: 22px; padding-bottom: 40px; border-bottom: 1px rgba(255,255,255,0.12) solid;
  @media (max-width: 640px) {
    width: 100%;
    padding: 12px 0px 20px 0px;
    box-sizing: border-box;
  }
`,jD=A.div`
  font-family: ${yu}; font-size: 16px; font-weight: 700; color: #FFFFFF;
  @media (max-width: 640px) {
    font-size: 14px;
}
`,qt=A.div`
  font-family: ${yu}; font-size: 16px; font-weight: 300; color: #CCCCCC; letter-spacing: 0px;
  @media (max-width: 640px) {
    font-size: 13px;
}
`,Qc=A(qt)`
  font-weight: 500;
`,DD=A(qt)`
  font-size: 13px;
`,ND=A(qt)`
  margin-top: 24px;
`,MD=A.a`
  font-family: ${yu}; font-size: 16px; font-weight: 300; color: #CCCCCC; text-decoration: underline;
  @media (max-width: 640px) {
    font-size: 13px;
}
`;function OD(){return x.jsx(gD,{"aria-label":"Venue & Access",children:x.jsxs(vD,{children:[x.jsxs(s_,{title:"Venew Details",children:[x.jsx(ID,{children:x.jsx(jD,{children:"잔향 : 기억의 향기"})}),x.jsx(Hr,{k:"Term",children:x.jsx(qt,{children:"2025. 10. 24. FRI - 10. 26. SUN"})}),x.jsxs(Hr,{k:"Hours",children:[x.jsx(qt,{children:"10.24.FRI   13:00 ~ 17:30 (OPENING 16:00~)"}),x.jsx(qt,{children:"10.25.SAT ~ 10.26.SUN    10:00 ~ 17:30"})]}),x.jsxs(Hr,{k:"Schedule",children:[x.jsx(Qc,{children:"10.24.FRI"}),x.jsx(qt,{children:"13:00    자유관람"}),x.jsx(qt,{children:"15:00    졸업생 홈커밍 행사"}),x.jsx(qt,{children:"16:00    개회식"}),x.jsx(qt,{children:"16:20    졸업작품 우수작 시상"}),x.jsx(qt,{children:"16:30    자유관람"}),x.jsxs(Qc,{children:[x.jsx("br",{}),"10.25.SAT"]}),x.jsx(qt,{children:"10:00    자유관람"}),x.jsx(qt,{children:"13:00    취·창업 커리어 캠프"}),x.jsxs(Qc,{children:[x.jsx("br",{}),"10.26.SUN"]}),x.jsx(qt,{children:"10:00    자유관람"})]}),x.jsxs(Hr,{k:"Website",divider:!1,children:[x.jsx(qt,{children:"Hongik Art Center"}),x.jsx(MD,{href:"https://artscenter.hongik.ac.kr/artcenter/index.do",target:"_blank",rel:"noreferrer",children:"https://artscenter.hongik.ac.kr/artcenter/index.do"})]})]}),x.jsxs(s_,{title:"Access",children:[x.jsxs(Hr,{k:"Address",children:[x.jsx(qt,{children:"Hongik Art Center B2 Gallery"}),x.jsx(qt,{children:"57, Daehak-ro, Jongno-gu, Seoul"}),x.jsx(ND,{children:"Address in local language"}),x.jsxs(qt,{children:["홍대 아트센터 지하 2층 전시관",x.jsx("br",{}),"서울시 종로구 대학로 57"]}),x.jsx("div",{style:{marginTop:24},children:x.jsx(af,{as:"a",href:"https://maps.app.goo.gl/qc99M9bDqyBTcmx79",label:"Map",size:"sm",showArrow:!0})})]}),x.jsxs(Hr,{k:"Parking",children:[x.jsx(qt,{children:"B3F ~ B6F"}),x.jsxs(qt,{children:[x.jsx("br",{}),"기본 30분 3,000원 / 이후 20분당 2,000원"]}),x.jsx(qt,{children:"이용객 주차권 지참 시 50% 할인 및 1시간 무료이용권 제공"}),x.jsx(Qc,{children:"(주차권으로만 정산 가능, 티켓정산 불가)"}),x.jsx(DD,{children:"주차권 배부 장소: B2 갤러리 3, 전시장 입구 인포데스크"})]}),x.jsxs(Hr,{k:"By Subway",children:[x.jsx(qt,{children:"[1호선 종로5가역]"}),x.jsx(qt,{children:"2번 출구 방면으로 이동 → 이화사거리 방면으로 약 800m 직진 (도보7분)"}),x.jsxs(qt,{children:[x.jsx("br",{}),"[4호선 혜화역]"]}),x.jsx(qt,{children:"3번 출구 방면으로 이동 → 이화사거리 방면으로 약 800m 직진 (도보7분)"}),x.jsx(qt,{children:"또는 08번 마을버스 탑승 후 이화사거리 앞 하차"})]}),x.jsxs(Hr,{k:"By Bus",divider:!1,children:[x.jsx(qt,{children:"[이화사거리(01-572) 하차]"}),x.jsx(qt,{children:"마을버스 종로 08번"}),x.jsxs(qt,{children:[x.jsx("br",{}),"[현대그룹빌딩(01-218) 하차]"]}),x.jsx(qt,{children:"102, 107, 108, 109, 162, 301, 7025"}),x.jsxs(qt,{children:[x.jsx("br",{}),"[이화장(01-223) 하차]"]}),x.jsx(qt,{children:"109, 273, 601, 2112, 7025"})]})]})]})})}function VD(){const n=[x.jsx(w3,{},"hero"),x.jsx(N3,{},"brand"),x.jsx(q3,{},"gallery"),x.jsx(J3,{},"online"),x.jsx(sD,{},"works"),x.jsx(mD,{},"insta"),x.jsx(OD,{},"venue")];return x.jsx("div",{style:{background:"#121212",minHeight:"100vh"},children:n})}const Pg="Pretendard, system-ui",kD=A.div`
  width: ${n=>n.$w}px;
  height: ${n=>n.$h}px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background: linear-gradient(225deg, #F2F0FF 0%, #FFFFFF 100%);
  @media (max-width: 640px) {
    width: 100%;
    height: 216px;
    border-radius: 10px;
  }
`,UD=A.div`
  width: 149px;
  height: 147px;
  position: absolute;
  left: 40px;
  top: 190px;
  background: #EDECF2;
  border-radius: 8px;
  transform: translateZ(0);
  @media (max-width: 640px) {
    width: 96px;
    height: 94px;
    left: 26px;
    top: 118px;
    border-radius: 6px;
  }
`,PD=A.div`
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
`,LD=A.div`
  position: absolute;
  left: 20px;
  top: 30px;
  font-family: ${Pg};
  font-weight: 600;
  font-size: 20px;
  color: #555;
  @media (max-width: 640px) {
    left: 14px;
    top: 16px;
    font-size: 16px;
  }
`,zD=A.div`
  position: absolute;
  left: 21px;
  top: 63px;
  width: 229px;
  font-family: ${Pg};
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
`,BD=A.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-family: ${Pg};
  font-weight: 600;
  font-size: 14px;
  color: #555;
  @media (max-width: 640px) {
    right: 8px;
    bottom: 8px;
    font-size: 12px;
  }
`;function $D({to:n,from:t,message:i}){return x.jsxs(kD,{$w:sf,$h:xu,children:[x.jsx(UD,{}),x.jsx(PD,{}),x.jsx(LD,{children:`To. ${n}`}),x.jsx(zD,{children:i}),x.jsx(BD,{children:`From. ${t}`})]})}const FD=A.div`
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
`,qD=A.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;function KD({src:n}){return x.jsx(FD,{$w:sf,$h:xu,children:x.jsx(qD,{src:n,alt:"포토 카드"})})}const HD=A.button`
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
`,GD=A.div`
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
`,YD=A.div`
  width: 14px;
  height: 14px;
  position: relative;
  @media (max-width: 640px) {
    width: 12px;
    height: 12px;
  }
`,QD=A.span`
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
`,XD=A.span`
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
`;function WD({onClick:n}){return x.jsx(HD,{onClick:n,"aria-label":"방명록 작성",$w:sf,$h:xu,children:x.jsx(GD,{children:x.jsxs(YD,{children:[x.jsx(QD,{}),x.jsx(XD,{})]})})})}const sf=270,xu=337,ZD=30,eb=20,JD=210,t5=60,nb=173,ib=216,e5=16,n5=16,bm=16,i5=A.div`
  padding: 0 0 12px 0;
  @media (max-width: 640px) {
    display: none;
  }
`,r5=A.div`
  position: relative;
  width: 100%;
  height: 3px;
  background: #171717;
  border-radius: 2px;
  overflow: hidden;
`,a5=A.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 3px;
  width: ${n=>n.$w}px;
  min-width: 25px;
  background: #7a7a7a;
  border-radius: 2px;
  transition: width 350ms ease-in;
`,s5=A.div`
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-y;
  cursor: grab;
  padding: 0 ${t5}px 0 ${JD}px;
  scrollbar-width: none; 
  -ms-overflow-style: none;
  &::-webkit-scrollbar { display: none; }

  @media (max-width: 640px) {
    overflow: visible;
    padding: 0px;
    cursor: default;
  }
`,o5=A.div`
  display: flex;
  gap: ${ZD}px;
  align-items: flex-start;
  min-height: ${xu*2+eb}px;

  @media (max-width: 640px) {
    gap: ${e5}px;
    min-height: initial;
  }
`,l5=A.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: ${bm}px;
  padding: 0 16px; /* 좌우 16px 고정 마진 */
`,u5=A.div`
  width: calc((100% - ${bm}px) / 2);
  height: ${ib}px;
  flex: 0 0 calc((100% - ${bm}px) / 2);
`,c5=A.div`
  @media (max-width: 640px) { display: none; }
`,h5=A.div`
  display: none;
  @media (max-width: 640px) { display: block; }
`,f5=A.div`
  display: flex;
  flex-direction: column;
  gap: ${eb}px;
  @media (max-width: 640px) {
    width: ${nb}px;
    gap: ${n5}px;
  }
`,rb=A.div`
  width: ${sf}px;
  height: ${xu}px;
  @media (max-width: 640px) {
    width: ${nb}px;
    height: ${ib}px;
  }
`,o_=n=>{const t=[{type:"add",id:"add"},...n],i=[{min:6,max:10},{min:16,max:20},{min:26,max:30}];let a=0;return i.forEach((o,u)=>{if(t.length>o.min+a){const f=Math.min(Math.floor(Math.random()*(o.max-o.min+1))+o.min,t.length)+a;t.splice(f,0,{type:"photo",id:`ph-${Date.now()}-${u}`,src:"https://placehold.co/662x405"}),a++}}),t},d5=n=>{const t=[];for(let i=0;i<n.length;i+=2)t.push([n[i],n[i+1]||null]);return t};function p5({onOpenModal:n,items:t}){const i=K.useRef(null),[a,o]=K.useState({width:0,trackW:0}),[u,f]=K.useState(()=>o_(t)),[m,p]=K.useState(()=>window.matchMedia&&window.matchMedia("(max-width: 640px)").matches);K.useEffect(()=>{f(o_(t))},[t]);const g=d5(u);K.useEffect(()=>{if(!window.matchMedia)return;const R=window.matchMedia("(max-width: 640px)"),V=B=>p(B.matches);return R.addEventListener?R.addEventListener("change",V):R.addListener(V),()=>{R.removeEventListener?R.removeEventListener("change",V):R.removeListener(V)}},[]),K.useEffect(()=>{if(m)return;const R=i.current;if(!R)return;const V=B=>{Math.abs(B.deltaY)>Math.abs(B.deltaX)&&(R.scrollLeft+=B.deltaY,B.preventDefault())};return R.addEventListener("wheel",V,{passive:!1}),()=>R.removeEventListener("wheel",V)},[m]);const v=K.useRef({on:!1,moved:!1,startX:0,startScroll:0}),w=R=>!!R?.closest?.('button, a, input, textarea, select, label, [role="button"], [data-nodrag]');K.useEffect(()=>{if(m)return;const R=i.current;if(!R)return;const V=X=>{X.button===0&&(w(X.target)||(v.current.on=!0,v.current.moved=!1,v.current.startX=X.clientX,v.current.startScroll=R.scrollLeft,R.setPointerCapture?.(X.pointerId),document.body.style.userSelect="none",R.style.cursor="grabbing"))},B=X=>{if(!v.current.on)return;const Y=X.clientX-v.current.startX;Math.abs(Y)>2&&(v.current.moved=!0),R.scrollLeft=v.current.startScroll-Y},P=X=>{v.current.on&&(R.releasePointerCapture?.(X.pointerId),document.body.style.userSelect="",R.style.cursor="grab",v.current.moved&&(X.preventDefault(),X.stopPropagation()),v.current.on=!1)};return R.addEventListener("pointerdown",V),window.addEventListener("pointermove",B),window.addEventListener("pointerup",P),R.addEventListener("pointercancel",P),()=>{R.removeEventListener("pointerdown",V),window.removeEventListener("pointermove",B),window.removeEventListener("pointerup",P),R.removeEventListener("pointercancel",P)}},[m]);const S=K.useCallback(()=>{const R=i.current;if(!R)return;const V=R.clientWidth,B=R.scrollWidth,P=R.scrollLeft,Y=R.parentElement?.clientWidth||V,J=Math.max(1,B-V),ot=Math.min(1,Math.max(0,P/J)),Z=Math.round(Y*ot);o({width:Z,trackW:Y})},[]);return K.useEffect(()=>{if(m)return;S();const R=i.current;if(!R)return;const V=()=>requestAnimationFrame(S),B=()=>requestAnimationFrame(S);return R.addEventListener("scroll",V,{passive:!0}),window.addEventListener("resize",B),()=>{R.removeEventListener("scroll",V),window.removeEventListener("resize",B)}},[S,m]),x.jsxs(x.Fragment,{children:[x.jsxs(c5,{children:[x.jsx(i5,{children:x.jsx(r5,{children:x.jsx(a5,{$w:a.width})})}),x.jsx(s5,{ref:i,children:x.jsx(o5,{children:g.map((R,V)=>x.jsxs(f5,{children:[x.jsx(Mp,{data:R[0],onOpenModal:n}),R[1]?x.jsx(Mp,{data:R[1],onOpenModal:n}):x.jsx(rb,{})]},`col-${V}`))})})]}),x.jsx(h5,{children:x.jsx(l5,{children:u.map(R=>x.jsx(u5,{children:x.jsx(Mp,{data:R,onOpenModal:n})},R.id))})})]})}function Mp({data:n,onOpenModal:t}){return n?n.type==="add"?x.jsx(WD,{onClick:t,style:{pointerEvents:"auto"}}):n.type==="photo"?x.jsx(KD,{src:n.src}):x.jsx($D,{to:n.to,from:n.from,message:n.message}):x.jsx(rb,{})}const m5=A.div`
  position: fixed; inset: 0; z-index: 1000;
  display: grid; place-items: center;
  background: rgba(0,0,0,.45);
  @media (max-width: 640px) {
    align-items: end;
    padding: 0 16px 84px 16px;
  }
`,g5=A.div`
  position: relative; display: inline-flex; align-items: flex-end; gap: 17px;
  @media (max-width: 640px) {
    gap: 0;
  }
`,y5=A.div`
  padding: 40px; border-radius: 16px;
  background: rgba(160,160,160,.80);
  backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
  display: inline-flex; gap: 20px; align-items: center;
  @media (max-width: 640px) {
    padding: 18px;
    border-radius: 12px;
  }
`,x5=A.div`
  width: 520px; display: inline-flex; gap: 20px; align-items: center;
  @media (max-width: 640px) {
    width: 300px;
    gap: 12px;
  }
`,v5=A.div`
  width: 450px; height: 560px; position: relative; overflow: hidden;
  border-radius: 16px;
  background: linear-gradient(225deg, #F2F0FF 0%, #FFFFFF 100%);
  box-shadow: 0 20px 60px rgba(0,0,0,.25);
  @media (max-width: 640px) {
    width: 260px;
    height: 340px;
    border-radius: 12px;
  }
`,_5=A.div`
  position: absolute; left: 66.53px; top: 314.67px; width: 248.47px; height: 245.33px; border-radius: 9999px; background: #EDECF2;
  @media (max-width: 640px) {
    left: 40px; top: 210px; width: 160px; height: 158px;
  }
`,E5=A.div`
  position: absolute; left: 13.33px; top: 504.92px; width: 42.14px; height: 41.05px; border-radius: 9999px; background: #EDECF2;
  @media (max-width: 640px) {
    left: 8px; top: 300px; width: 28px; height: 28px;
  }
`,b5=A.div`
  position: absolute; left: 32px; top: 50px; display: inline-flex; align-items: center; gap: 8px;
  @media (max-width: 640px) {
    left: 18px; top: 22px; gap: 6px;
  }
`,w5=A.div`
  font-family: Pretendard, system-ui; font-weight: 600; font-size: 32px; color: #555;
  @media (max-width: 640px) {
    font-size: 22px;
  }
`,T5=A.input`
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
`,S5=A.div`
  position: absolute; left: 32px; top: 104px; width: 381px;
  @media (max-width: 640px) {
    left: 18px; top: 78px; width: 206px;
  }
`,A5=A.textarea`
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
`,R5=A.div`
  position: absolute; left: 181px; top: 472px; display: inline-flex; align-items: center; gap: 8px;
  @media (max-width: 640px) {
    left: 110px; top: 270px; gap: 6px;
  }
  @media (max-width: 640px) {
    left: auto; top: auto; right: 18px; bottom: 16px; gap: 6px;
  }
`,C5=A.div`
  font-family: Pretendard, system-ui; font-weight: 600; font-size: 32px; color: #555;
  @media (max-width: 640px) {
    font-size: 22px;
  }
`,I5=A.input`
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
`,j5=A.div`
  width: 50px; height: 560px; display: inline-flex; flex-direction: column; justify-content: flex-end;
  @media (max-width: 640px) {
    height: 340px;
  }
`,D5=A.button`
  width: 50px; height: 50px; border-radius: 25px;
  background: #202020; cursor: pointer;
  display: grid; place-items: center; border: none;
  @media (max-width: 640px) {
    width: 40px; height: 40px; border-radius: 20px;
  }
`,N5=A.div`
  width: 20px; height: 17px; background: #fff; clip-path: polygon(0 0,100% 50%,0 100%);
  @media (max-width: 640px) {
    width: 16px; height: 14px;
  }
`,M5=A.div`
  width: 60px; height: 640px; position: relative;
  @media (max-width: 640px) {
    width: 100%; height: auto;
  }
`,O5=A.button`
  width: 60px; height: 60px; position: absolute; left: 0; top: 0;
  display: grid; place-items: center; cursor: pointer;
  background: transparent; border: none;
  @media (max-width: 640px) {
    position: fixed; left: 50%; bottom: 20px; top: auto; transform: translateX(-50%);
    width: 56px; height: 56px; border-radius: 28px; background: #fff1;
    backdrop-filter: blur(2px);
  }
`,V5=A.div`
  width: 32px; height: 32px; position: relative;
`,l_=A.span`
  position: absolute; left: 15px; top: 4px; width: 2px; height: 24px;
  background: #FFFFFF; transform: rotate(${n=>n.$deg}deg);
  @media (max-width: 640px) {
    left: 15px; top: 4px; height: 24px;
  }
`;function k5({open:n,onClose:t,onSubmit:i,defaultTo:a="",defaultFrom:o=""}){const[u,f]=K.useState(a),[m,p]=K.useState(o),[g,v]=K.useState(""),w=K.useRef(null);if(K.useEffect(()=>{const V=B=>{B.key==="Escape"&&t?.()};return n&&document.addEventListener("keydown",V),()=>document.removeEventListener("keydown",V)},[n,t]),!n)return null;const S=V=>{V.target===w.current&&t?.()},R=()=>{const V={to:(u||"").trim(),from:(m||"").trim(),message:(g||"").trim()};V.message&&i?.(V)};return x.jsx(m5,{ref:w,onMouseDown:S,children:x.jsxs(g5,{onMouseDown:V=>V.stopPropagation(),children:[x.jsx(y5,{children:x.jsxs(x5,{children:[x.jsxs(v5,{children:[x.jsx(_5,{}),x.jsx(E5,{}),x.jsxs(b5,{children:[x.jsx(w5,{children:"To."}),x.jsx(T5,{value:u,onChange:V=>f(V.target.value),placeholder:"받는 사람"})]}),x.jsx(S5,{children:x.jsx(A5,{placeholder:"내용을 입력해 주세요.",value:g,onChange:V=>v(V.target.value)})}),x.jsxs(R5,{children:[x.jsx(C5,{children:"From."}),x.jsx(I5,{value:m,onChange:V=>p(V.target.value),placeholder:"보내는 사람"})]})]}),x.jsx(j5,{children:x.jsx(D5,{type:"button",onClick:R,"aria-label":"send",children:x.jsx(N5,{})})})]})}),x.jsx(M5,{children:x.jsx(O5,{type:"button",onClick:t,"aria-label":"close",children:x.jsxs(V5,{children:[x.jsx(l_,{$deg:45}),x.jsx(l_,{$deg:-45})]})})})]})})}const U5={apiKey:"AIzaSyAEFzPwTADLzuxWuyk889Jz1cHPsEgLOkQ",authDomain:"tu2025grad.firebaseapp.com",projectId:"tu2025grad",storageBucket:"tu2025grad.firebasestorage.app",messagingSenderId:"553768466639",appId:"1:553768466639:web:7c16f5d6432da7ebc05fba"},P5=Qm(U5),u_=B2(P5),L5='Pretendard, system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial, sans-serif',z5=A.div`
  background: #121212; min-height: 100vh;
`,B5=A.main`
  padding: 80px 40px 120px 40px;
  @media (max-width: 640px) {
    padding: 40px 0 80px 0;
  }
`,$5=A.h1`
  font-family: ${L5}; font-weight: 700; font-size: 32px; color: #FFFFFF; text-align: center; margin: 20px 0 40px;
  @media (max-width: 640px) {
    font-size: 20px; margin: 0 0 16px;
  }
`,F5=A.section`
  display: flex; justify-content: center;
  @media (max-width: 640px) {
    justify-content: stretch;
  }
`,q5=A.div`
  width: 100%;
  @media (max-width: 640px) {
    width: 100%;
  }
`;function K5(){const[n,t]=Ot.useState(!1),[i,a]=Ot.useState([]);Ot.useEffect(()=>{const f=Pj(vm(u_,"guest"),Lj("time","desc")),m=qj(f,p=>{const g=[];p.forEach(v=>{const w=v.data();g.push({id:v.id,to:w.to||"",from:w.from||"",message:w.message||"",type:"text"})}),a(g)});return()=>m()},[]);const o=async({to:f,from:m,message:p})=>{try{const g=String(Date.now());await Vg(to(vm(u_,"guest"),g),{to:f||"",from:m||"",message:p||"",time:g}),t(!1)}catch(g){console.error("Failed to submit guest message:",g)}};return x.jsxs(z5,{children:[x.jsxs(B5,{children:[x.jsx($5,{children:"Guest Book"}),x.jsx(F5,{children:x.jsxs(q5,{className:"gb-wrap",children:[x.jsx("style",{children:`
    .gb-wrap *::-webkit-scrollbar { display: none; }
    .gb-wrap * { scrollbar-width: none; -ms-overflow-style: none; }
    .gb-wrap article img { width: 100% !important; height: 100% !important; object-fit: cover !important; display: block !important; }
  `}),x.jsx(p5,{onOpenModal:()=>t(!0),items:i})]})})]}),x.jsx(k5,{open:n,onClose:()=>t(!1),onSubmit:o})]})}const wm="/TU2025gradulate/",H5=A.div`
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
`,G5=A.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: auto;
  @media (max-width: 640px) {
    gap: 40px;
}
`,Y5=A.div`
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
`,Q5=A.div`
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 640px) {
    display: none;
}
`,X5=A.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 640px) {
    width: auto;
}
`,W5=A.h1`
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
`,Z5=A.p`
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
`,J5=A.div`
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
`,tN=A.div`
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
`,eN=A.div`
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
`,nN=A.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
`,iN=A.div`
  width: 24px;
  height: 24px;
  background-image: ${({$src:n})=>`url("${n}")`};
  background-size: contain;
  background-repeat: no-repeat;
  @media (max-width: 640px) {
    width: 16px;
    height: 16px;
}
`,rN=A.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #e0e0e0;
  margin: 0;
  padding: 0;
  @media (max-width: 640px) {
    font-size: 16px;
}
`,aN=A.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 12px;
  cursor: pointer;
`,sN=A.p`
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
`,oN=A.div`
  display: flex;
  width: 20px;
  height: 75px;
  align-items: center;
  justify-content: center;
  background-image: url('${wm}icons/pageDownIcon.svg');
  background-size: contain;
  background-repeat: no-repeat;
  @media (max-width: 640px) {
    width: 10px;
    height: 38px;
}
`;function Tm({titleKor:n,titleEng:t,context:i,isOpen:a=!0,onClose:o,src:u,docId:f,collection:m="works"}){const[p,g]=K.useState(0),[v,w]=K.useState(!1);K.useEffect(()=>{let V=!0;return(async()=>{if(f!=null)try{const B=to(eo,m,String(f)),P=await Gl(B);if(!V)return;if(P.exists()){const X=P.data();g(typeof X.like=="number"?X.like:0)}else g(0)}catch(B){console.error("Firestore getDoc error:",B),V&&g(0)}})(),()=>{V=!1}},[f,m]);const S=async()=>{try{const V=to(eo,m,String(f)),B=await Gl(V);if(B.exists()){const P=B.data();g(typeof P.like=="number"?P.like:0)}}catch(V){console.error("Firestore refresh error:",V)}},R=async()=>{if(v)return;if(f==null){console.warn("handleLike called without a valid docId");return}w(!0);const V=to(eo,m,String(f));try{await jh(V,{like:Dh(1)}),g(B=>B+1),await S()}catch(B){if(B.code==="not-found"||/No document/i.test(String(B)))try{(await Gl(V)).exists()?await jh(V,{like:Dh(1)}):await Vg(V,{like:1},{merge:!0}),await S()}catch(P){console.error("Firestore like fallback error:",P)}else console.error("Firestore like error:",B)}finally{w(!1)}};return x.jsx(H5,{$open:!!a,children:x.jsxs(G5,{children:[x.jsxs(Y5,{children:[x.jsx(Q5,{onClick:()=>{typeof o=="function"&&o()},children:x.jsx("img",{src:`${wm}icons/closeIcon.svg`,alt:"Close Icon"})}),x.jsxs(X5,{children:[x.jsx(W5,{children:n}),x.jsx(Z5,{children:i})]}),x.jsx(J5,{$src:u})]}),x.jsxs(tN,{children:[x.jsx(eN,{onClick:R,"aria-disabled":v,title:v?"처리 중":"좋아요",children:x.jsxs(nN,{children:[x.jsx(iN,{$src:`${wm}icons/likeIcon(white).svg`,"aria-label":"Like icon"}),x.jsx(rN,{children:p})]})}),x.jsxs(aN,{onClick:()=>{const B=Math.max(document.documentElement?.scrollHeight||0,document.body?.scrollHeight||0)-window.innerHeight,X=Math.max(0,B-269);window.scrollTo({top:X,behavior:"smooth"})},children:[x.jsx(sN,{children:"Designer Info"}),x.jsx(oN,{})]})]})]})})}Tm.propTypes={titleKor:W.string.isRequired,titleEng:W.string.isRequired,context:W.string.isRequired,isOpen:W.bool,onClose:W.func,docId:W.oneOfType([W.string,W.number]).isRequired,collection:W.string};const lN=A.div`
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
`,uN=A.div`
  display: flex;
  width: 290px;
  height: 387px;
  border-radius: 4px;
  @media (max-width: 640px) {
    width: 173px;
    height: 231px;
    border-radius: 4px;
}
`,cN=A.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  display: block;
`,hN=A.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 8px);
  width: auto;
  @media (max-width: 640px) {
    height: 100%;
}
`,fN=A.div`
  display: flex;
  height: auto;
  padding: 0;
  margin: 0;
  flex-direction: column;
  gap: 0px;
`,dN=A.h1`
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
`,pN=A.h2`
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
`,mN=A.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 84px;
  @media (max-width: 640px) {
    height: 38px;
}
`,gN=A.div`
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
`,Op=A.h3`
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
`,yN=A.div`
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
`,Vp=A.p`
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
`;function Lg({nameKor:n,nameEng:t,part:i,sns:a,eMail:o,imgUrl:u,imgAlt:f}){return x.jsxs(lN,{children:[x.jsx(uN,{children:x.jsx(cN,{src:u,alt:f})}),x.jsxs(hN,{children:[x.jsxs(fN,{children:[x.jsx(dN,{children:n}),x.jsx(pN,{children:t})]}),x.jsxs(mN,{children:[x.jsxs(gN,{children:[x.jsx(Op,{children:"Part"}),x.jsx(Op,{children:"SNS"}),x.jsx(Op,{children:"E-mail"})]}),x.jsxs(yN,{children:[x.jsx(Vp,{children:i}),x.jsx(Vp,{children:a}),x.jsx(Vp,{children:o})]})]})]})]})}Lg.propTypes={nameKor:W.string.isRequired,nameEng:W.string.isRequired,part:W.string,sns:W.string,eMail:W.string,imgUrl:W.string.isRequired,imgAlt:W.string.isRequired};Lg.defaultProps={sns:"N/A",eMail:"N/A"};const xN=A.div`
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
`,vN=A.div`
  display: flex;
  flex-direction: column;
  width: 810px;
  height: auto;
  gap: 76px;
  @media (max-width: 640px) {
    width: 100%;
    gap: 21px;
}
`,_N=A.h1`
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
`;function c_({designers:n}){return x.jsxs(xN,{children:[x.jsx(_N,{children:"Designer"}),x.jsx(vN,{children:n.map((t,i)=>x.jsx(Lg,{nameKor:t.nameKor,nameEn:t.nameEn,part:t.role,sns:t.sns,eMail:t.eMail,imgUrl:t.imgUrl},i))})]})}const EN=A.div`
    width: 100%; // 임시값
    margin-top: 50px;
@media (max-width: 640px) {
    margin-top: 20px;
}
`,bN=A.div`
    position: relative;
    width: 100%;
    max-width: 100vw;
    padding-top: 56.25%; // 16:9 비율
`,wN=A.iframe`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
`;function TN({videoId:n}){return x.jsx(EN,{children:x.jsx(bN,{children:x.jsx(wN,{src:"https://player.vimeo.com/video/1126266309?h=1f3e4f1f6e&title=0&byline=0&portrait=0",frameBorder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,title:"Embedded Vimeo"})})})}const SN="/TU2025gradulate/",AN=A.div`
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
`,RN=A.div`
    display: flex;
    width: 40px;
    height: 40px;
`;function CN({isOpen:n=!1,onClick:t}){const[i,a]=K.useState(!1);return K.useEffect(()=>{let o;return n?a(!1):(a(!1),o=setTimeout(()=>{a(!0)},500)),()=>clearTimeout(o)},[n]),x.jsx(AN,{$visible:!n,$active:i,onClick:()=>{typeof t=="function"&&t()},children:x.jsx(RN,{children:x.jsx("img",{src:`${SN}icons/infoOpenIcon.svg`,alt:"작품 정보 열기"})})})}const h_=40;function Xc(n){if(!n)return n;const t="/TU2025gradulate/";if(/^https?:\/\//i.test(n))return n;const i=String(n).replace(/^\.\.\//,"").replace(/^\//,"");return t+i}const IN=A.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
  image-rendering: -webkit-optimize-contrast;
  @media (max-width: 640px) {
    min-width: 100vw;
}
`,kp=n=>x.jsx(IN,{loading:"lazy",...n}),jN=A.div`
  display: flex;
  position: relative;
  background: #fff;
  width: 100%;
  @media (max-width: 640px) {
    flex-direction: column;
}
`,DN=A.div`
  padding-right: ${h_}px;
  padding-left: ${n=>n.$isInfoOpen?0:h_}px;
  flex: 1 1 auto;
  width: auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* transition: all 500ms ease; */
  @media (max-width: 640px) {
    padding: 0
}
`,NN=A.div`
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
`,f_=A.div`
  display: flex;
  position: relative;
  width: 100%;
`,MN={A:"c0",E:"c1",H:"c2",I:"c3",L:"c4",M:"c5"};function ON(){const{pid:n}=dT(),t=(n||"").toUpperCase().match(/^([A-Z])(\d{3})$/),[i,a]=K.useState(!0),[o,u]=K.useState(!0),f=()=>{a(!1),setTimeout(()=>{u(!1)},500)},m=()=>{u(!0),setTimeout(()=>{a(!0)},0)};let p=null;if(t){const[,X,Y]=t,J=MN[X]||null,ot=Math.max(0,parseInt(Y,10)-1);p=Xl.find(Z=>Z.projectNum===ot&&(!J||Z.category===J)),p||(p=Xl.find(Z=>Z.projectNum==ot))}if(!p)return x.jsx(f_,{children:x.jsxs(PageContainer,{children:[x.jsx(Tm,{titleKor:"작품 제목(한글)",titleEng:"Work Title (English)",context:"이곳은 작품 설명이 들어가는 영역입니다. 작품에 대한 상세한 설명이나 배경, 제작 과정 등을 기술할 수 있습니다. 이 텍스트는 예시로 작성된 내용이며, 실제 작품 설명으로 대체되어야 합니다.",isOpen:i,onClose:()=>a(!1),docId:0}),x.jsx(kp,{src:"https://placehold.co/1530x4000",alt:"featured"}),x.jsx(c_,{children:"  "})]})});const g=(p.members||[]).map(X=>{const Y=Km.find(J=>J.num===X);return Y?{nameKor:Y.nameKor,nameEng:Y.nameEng,role:Y.role||"Designer",sns:Y.sns||"-",eMail:Y.eMail||"",imgUrl:Xc(Y.imgUrl||"/김예준.jpg")}:null}).filter(Boolean),w={c0:"A",c1:"E",c2:"H",c3:"I",c4:"L",c5:"M"}[p.category]||"A",S=p.projectNum??p.num,R=String(S).padStart(3,"0"),V=`/projects/${S}`,B=Number(p.galleryCount||0),P=Array.from({length:B},(X,Y)=>Xc(`${V}/gallery/${Y}.jpg`));return K.useEffect(()=>{const X=p?.projectNum??p?.num;if(X==null)return;const J=to(eo,"works",String(X));(async()=>{try{await jh(J,{view:Dh(1)})}catch(ot){if(ot.code==="not-found"||/No document/i.test(String(ot)))try{(await Gl(J)).exists()?await jh(J,{view:Dh(1)}):await Vg(J,{view:1},{merge:!0})}catch(Z){console.error("Firestore view fallback error:",Z)}else console.error("Firestore view error:",ot)}})()},[p?.projectNum,p?.num]),x.jsx(f_,{children:x.jsxs(jN,{children:[x.jsx(CN,{isOpen:i,onClick:m}),x.jsx(NN,{$visible:o,children:x.jsx(Tm,{titleKor:p.titleKor,titleEng:p.titleEng,context:p.description||"null",isOpen:i,onClose:f,src:Xc(`/projects/${S}/thumb.jpg`),docId:S})}),x.jsxs(DN,{$isInfoOpen:i,children:[P.length>0?P.map((X,Y)=>x.jsx(kp,{src:X,alt:`project-${w}${R}-img-${Y+1}`},Y)):x.jsx(kp,{src:Xc("/thumbnailExample.png"),alt:`project-${w}${R}-placeholder`}),x.jsx(TN,{videoId:p.videoId}),x.jsx(c_,{designers:g})]})]})})}var Up={exports:{}},Ol={},Pp={exports:{}},Lp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d_;function VN(){return d_||(d_=1,(function(n){function t(tt,ht){var yt=tt.length;tt.push(ht);t:for(;0<yt;){var Ct=yt-1>>>1,O=tt[Ct];if(0<o(O,ht))tt[Ct]=ht,tt[yt]=O,yt=Ct;else break t}}function i(tt){return tt.length===0?null:tt[0]}function a(tt){if(tt.length===0)return null;var ht=tt[0],yt=tt.pop();if(yt!==ht){tt[0]=yt;t:for(var Ct=0,O=tt.length,at=O>>>1;Ct<at;){var ut=2*(Ct+1)-1,ct=tt[ut],gt=ut+1,It=tt[gt];if(0>o(ct,yt))gt<O&&0>o(It,ct)?(tt[Ct]=It,tt[gt]=yt,Ct=gt):(tt[Ct]=ct,tt[ut]=yt,Ct=ut);else if(gt<O&&0>o(It,yt))tt[Ct]=It,tt[gt]=yt,Ct=gt;else break t}}return ht}function o(tt,ht){var yt=tt.sortIndex-ht.sortIndex;return yt!==0?yt:tt.id-ht.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;n.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();n.unstable_now=function(){return f.now()-m}}var p=[],g=[],v=1,w=null,S=3,R=!1,V=!1,B=!1,P=!1,X=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;function ot(tt){for(var ht=i(g);ht!==null;){if(ht.callback===null)a(g);else if(ht.startTime<=tt)a(g),ht.sortIndex=ht.expirationTime,t(p,ht);else break;ht=i(g)}}function Z(tt){if(B=!1,ot(tt),!V)if(i(p)!==null)V=!0,ft||(ft=!0,z());else{var ht=i(g);ht!==null&&ne(Z,ht.startTime-tt)}}var ft=!1,j=-1,C=5,I=-1;function M(){return P?!0:!(n.unstable_now()-I<C)}function k(){if(P=!1,ft){var tt=n.unstable_now();I=tt;var ht=!0;try{t:{V=!1,B&&(B=!1,Y(j),j=-1),R=!0;var yt=S;try{e:{for(ot(tt),w=i(p);w!==null&&!(w.expirationTime>tt&&M());){var Ct=w.callback;if(typeof Ct=="function"){w.callback=null,S=w.priorityLevel;var O=Ct(w.expirationTime<=tt);if(tt=n.unstable_now(),typeof O=="function"){w.callback=O,ot(tt),ht=!0;break e}w===i(p)&&a(p),ot(tt)}else a(p);w=i(p)}if(w!==null)ht=!0;else{var at=i(g);at!==null&&ne(Z,at.startTime-tt),ht=!1}}break t}finally{w=null,S=yt,R=!1}ht=void 0}}finally{ht?z():ft=!1}}}var z;if(typeof J=="function")z=function(){J(k)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,ue=N.port2;N.port1.onmessage=k,z=function(){ue.postMessage(null)}}else z=function(){X(k,0)};function ne(tt,ht){j=X(function(){tt(n.unstable_now())},ht)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(tt){tt.callback=null},n.unstable_forceFrameRate=function(tt){0>tt||125<tt?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<tt?Math.floor(1e3/tt):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_next=function(tt){switch(S){case 1:case 2:case 3:var ht=3;break;default:ht=S}var yt=S;S=ht;try{return tt()}finally{S=yt}},n.unstable_requestPaint=function(){P=!0},n.unstable_runWithPriority=function(tt,ht){switch(tt){case 1:case 2:case 3:case 4:case 5:break;default:tt=3}var yt=S;S=tt;try{return ht()}finally{S=yt}},n.unstable_scheduleCallback=function(tt,ht,yt){var Ct=n.unstable_now();switch(typeof yt=="object"&&yt!==null?(yt=yt.delay,yt=typeof yt=="number"&&0<yt?Ct+yt:Ct):yt=Ct,tt){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=yt+O,tt={id:v++,callback:ht,priorityLevel:tt,startTime:yt,expirationTime:O,sortIndex:-1},yt>Ct?(tt.sortIndex=yt,t(g,tt),i(p)===null&&tt===i(g)&&(B?(Y(j),j=-1):B=!0,ne(Z,yt-Ct))):(tt.sortIndex=O,t(p,tt),V||R||(V=!0,ft||(ft=!0,z()))),tt},n.unstable_shouldYield=M,n.unstable_wrapCallback=function(tt){var ht=S;return function(){var yt=S;S=ht;try{return tt.apply(this,arguments)}finally{S=yt}}}})(Lp)),Lp}var p_;function kN(){return p_||(p_=1,Pp.exports=VN()),Pp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_;function UN(){if(m_)return Ol;m_=1;var n=kN(),t=Sm(),i=cS();function a(e){var r="https://react.dev/errors/"+e;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)r+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var r=e,s=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(s=r.return),e=r.return;while(e)}return r.tag===3?s:null}function f(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(a(188))}function p(e){var r=e.alternate;if(!r){if(r=u(e),r===null)throw Error(a(188));return r!==e?null:e}for(var s=e,l=r;;){var h=s.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){s=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===s)return m(h),e;if(d===l)return m(h),r;d=d.sibling}throw Error(a(188))}if(s.return!==l.return)s=h,l=d;else{for(var E=!1,b=h.child;b;){if(b===s){E=!0,s=h,l=d;break}if(b===l){E=!0,l=h,s=d;break}b=b.sibling}if(!E){for(b=d.child;b;){if(b===s){E=!0,s=d,l=h;break}if(b===l){E=!0,l=d,s=h;break}b=b.sibling}if(!E)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:r}function g(e){var r=e.tag;if(r===5||r===26||r===27||r===6)return e;for(e=e.child;e!==null;){if(r=g(e),r!==null)return r;e=e.sibling}return null}var v=Object.assign,w=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),X=Symbol.for("react.provider"),Y=Symbol.for("react.consumer"),J=Symbol.for("react.context"),ot=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),ft=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),M=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function z(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var N=Symbol.for("react.client.reference");function ue(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===N?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case V:return"Fragment";case P:return"Profiler";case B:return"StrictMode";case Z:return"Suspense";case ft:return"SuspenseList";case I:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case J:return(e.displayName||"Context")+".Provider";case Y:return(e._context.displayName||"Context")+".Consumer";case ot:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case j:return r=e.displayName||null,r!==null?r:ue(e.type)||"Memo";case C:r=e._payload,e=e._init;try{return ue(e(r))}catch{}}return null}var ne=Array.isArray,tt=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ht=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,yt={pending:!1,data:null,method:null,action:null},Ct=[],O=-1;function at(e){return{current:e}}function ut(e){0>O||(e.current=Ct[O],Ct[O]=null,O--)}function ct(e,r){O++,Ct[O]=e.current,e.current=r}var gt=at(null),It=at(null),_t=at(null),ge=at(null);function Lt(e,r){switch(ct(_t,r),ct(It,e),ct(gt,null),r.nodeType){case 9:case 11:e=(e=r.documentElement)&&(e=e.namespaceURI)?A1(e):0;break;default:if(e=r.tagName,r=r.namespaceURI)r=A1(r),e=R1(r,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ut(gt),ct(gt,e)}function Me(){ut(gt),ut(It),ut(_t)}function Ni(e){e.memoizedState!==null&&ct(ge,e);var r=gt.current,s=R1(r,e.type);r!==s&&(ct(It,e),ct(gt,s))}function Hn(e){It.current===e&&(ut(gt),ut(It)),ge.current===e&&(ut(ge),Al._currentValue=yt)}var on=Object.prototype.hasOwnProperty,la=n.unstable_scheduleCallback,is=n.unstable_cancelCallback,of=n.unstable_shouldYield,Ao=n.unstable_requestPaint,dn=n.unstable_now,vu=n.unstable_getCurrentPriorityLevel,Oe=n.unstable_ImmediatePriority,Le=n.unstable_UserBlockingPriority,Mi=n.unstable_NormalPriority,lf=n.unstable_LowPriority,Ro=n.unstable_IdlePriority,uf=n.log,ua=n.unstable_setDisableYieldValue,ur=null,Je=null;function jn(e){if(typeof uf=="function"&&ua(e),Je&&typeof Je.setStrictMode=="function")try{Je.setStrictMode(ur,e)}catch{}}var ln=Math.clz32?Math.clz32:Eu,cf=Math.log,_u=Math.LN2;function Eu(e){return e>>>=0,e===0?32:31-(cf(e)/_u|0)|0}var oi=256,cr=4194304;function Gn(e){var r=e&42;if(r!==0)return r;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Dn(e,r,s){var l=e.pendingLanes;if(l===0)return 0;var h=0,d=e.suspendedLanes,E=e.pingedLanes;e=e.warmLanes;var b=l&134217727;return b!==0?(l=b&~d,l!==0?h=Gn(l):(E&=b,E!==0?h=Gn(E):s||(s=b&~e,s!==0&&(h=Gn(s))))):(b=l&~d,b!==0?h=Gn(b):E!==0?h=Gn(E):s||(s=l&~e,s!==0&&(h=Gn(s)))),h===0?0:r!==0&&r!==h&&(r&d)===0&&(d=h&-h,s=r&-r,d>=s||d===32&&(s&4194048)!==0)?r:h}function hr(e,r){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&r)===0}function rs(e,r){switch(e){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Co(){var e=oi;return oi<<=1,(oi&4194048)===0&&(oi=256),e}function fr(){var e=cr;return cr<<=1,(cr&62914560)===0&&(cr=4194304),e}function as(e){for(var r=[],s=0;31>s;s++)r.push(e);return r}function _e(e,r){e.pendingLanes|=r,r!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function bu(e,r,s,l,h,d){var E=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var b=e.entanglements,D=e.expirationTimes,q=e.hiddenUpdates;for(s=E&~s;0<s;){var et=31-ln(s),rt=1<<et;b[et]=0,D[et]=-1;var H=q[et];if(H!==null)for(q[et]=null,et=0;et<H.length;et++){var G=H[et];G!==null&&(G.lane&=-536870913)}s&=~rt}l!==0&&dr(e,l,0),d!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=d&~(E&~r))}function dr(e,r,s){e.pendingLanes|=r,e.suspendedLanes&=~r;var l=31-ln(r);e.entangledLanes|=r,e.entanglements[l]=e.entanglements[l]|1073741824|s&4194090}function pr(e,r){var s=e.entangledLanes|=r;for(e=e.entanglements;s;){var l=31-ln(s),h=1<<l;h&r|e[l]&r&&(e[l]|=r),s&=~h}}function Io(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function jo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Oi(){var e=ht.p;return e!==0?e:(e=window.event,e===void 0?32:H1(e.type))}function hf(e,r){var s=ht.p;try{return ht.p=e,r()}finally{ht.p=s}}var li=Math.random().toString(36).slice(2),Ee="__reactFiber$"+li,He="__reactProps$"+li,Vi="__reactContainer$"+li,ca="__reactEvents$"+li,ha="__reactListeners$"+li,ff="__reactHandles$"+li,Yn="__reactResources$"+li,mr="__reactMarker$"+li;function ss(e){delete e[Ee],delete e[He],delete e[ca],delete e[ha],delete e[ff]}function ui(e){var r=e[Ee];if(r)return r;for(var s=e.parentNode;s;){if(r=s[Vi]||s[Ee]){if(s=r.alternate,r.child!==null||s!==null&&s.child!==null)for(e=D1(e);e!==null;){if(s=e[Ee])return s;e=D1(e)}return r}e=s,s=e.parentNode}return null}function ci(e){if(e=e[Ee]||e[Vi]){var r=e.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return e}return null}function gr(e){var r=e.tag;if(r===5||r===26||r===27||r===6)return e.stateNode;throw Error(a(33))}function yr(e){var r=e[Yn];return r||(r=e[Yn]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function be(e){e[mr]=!0}var wu=new Set,fa={};function hi(e,r){fi(e,r),fi(e+"Capture",r)}function fi(e,r){for(fa[e]=r,e=0;e<r.length;e++)wu.add(r[e])}var da=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),di={},os={};function df(e){return on.call(os,e)?!0:on.call(di,e)?!1:da.test(e)?os[e]=!0:(di[e]=!0,!1)}function pa(e,r,s){if(df(r))if(s===null)e.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(r);return;case"boolean":var l=r.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(r);return}}e.setAttribute(r,""+s)}}function ma(e,r,s){if(s===null)e.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttribute(r,""+s)}}function Nn(e,r,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(r,s,""+l)}}var ga,ls;function ki(e){if(ga===void 0)try{throw Error()}catch(s){var r=s.stack.trim().match(/\n( *(at )?)/);ga=r&&r[1]||"",ls=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ga+e+ls}var us=!1;function cs(e,r){if(!e||us)return"";us=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(r){var rt=function(){throw Error()};if(Object.defineProperty(rt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(rt,[])}catch(G){var H=G}Reflect.construct(e,[],rt)}else{try{rt.call()}catch(G){H=G}e.call(rt.prototype)}}else{try{throw Error()}catch(G){H=G}(rt=e())&&typeof rt.catch=="function"&&rt.catch(function(){})}}catch(G){if(G&&H&&typeof G.stack=="string")return[G.stack,H.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),E=d[0],b=d[1];if(E&&b){var D=E.split(`
`),q=b.split(`
`);for(h=l=0;l<D.length&&!D[l].includes("DetermineComponentFrameRoot");)l++;for(;h<q.length&&!q[h].includes("DetermineComponentFrameRoot");)h++;if(l===D.length||h===q.length)for(l=D.length-1,h=q.length-1;1<=l&&0<=h&&D[l]!==q[h];)h--;for(;1<=l&&0<=h;l--,h--)if(D[l]!==q[h]){if(l!==1||h!==1)do if(l--,h--,0>h||D[l]!==q[h]){var et=`
`+D[l].replace(" at new "," at ");return e.displayName&&et.includes("<anonymous>")&&(et=et.replace("<anonymous>",e.displayName)),et}while(1<=l&&0<=h);break}}}finally{us=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?ki(s):""}function pf(e){switch(e.tag){case 26:case 27:case 5:return ki(e.type);case 16:return ki("Lazy");case 13:return ki("Suspense");case 19:return ki("SuspenseList");case 0:case 15:return cs(e.type,!1);case 11:return cs(e.type.render,!1);case 1:return cs(e.type,!0);case 31:return ki("Activity");default:return""}}function Qn(e){try{var r="";do r+=pf(e),e=e.return;while(e);return r}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function fe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xr(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function ya(e){var r=xr(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),l=""+e[r];if(!e.hasOwnProperty(r)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var h=s.get,d=s.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return h.call(this)},set:function(E){l=""+E,d.call(this,E)}}),Object.defineProperty(e,r,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function vr(e){e._valueTracker||(e._valueTracker=ya(e))}function Wt(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var s=r.getValue(),l="";return e&&(l=xr(e)?e.checked?"true":"false":e.value),e=l,e!==s?(r.setValue(e),!0):!1}function Ui(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var xa=/[\n"\\]/g;function ze(e){return e.replace(xa,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Do(e,r,s,l,h,d,E,b){e.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.type=E:e.removeAttribute("type"),r!=null?E==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+fe(r)):e.value!==""+fe(r)&&(e.value=""+fe(r)):E!=="submit"&&E!=="reset"||e.removeAttribute("value"),r!=null?Mo(e,E,fe(r)):s!=null?Mo(e,E,fe(s)):l!=null&&e.removeAttribute("value"),h==null&&d!=null&&(e.defaultChecked=!!d),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+fe(b):e.removeAttribute("name")}function No(e,r,s,l,h,d,E,b){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),r!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||r!=null))return;s=s!=null?""+fe(s):"",r=r!=null?""+fe(r):s,b||r===e.value||(e.value=r),e.defaultValue=r}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=b?e.checked:!!l,e.defaultChecked=!!l,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(e.name=E)}function Mo(e,r,s){r==="number"&&Ui(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function _r(e,r,s,l){if(e=e.options,r){r={};for(var h=0;h<s.length;h++)r["$"+s[h]]=!0;for(s=0;s<e.length;s++)h=r.hasOwnProperty("$"+e[s].value),e[s].selected!==h&&(e[s].selected=h),h&&l&&(e[s].defaultSelected=!0)}else{for(s=""+fe(s),r=null,h=0;h<e.length;h++){if(e[h].value===s){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}r!==null||e[h].disabled||(r=e[h])}r!==null&&(r.selected=!0)}}function Tu(e,r,s){if(r!=null&&(r=""+fe(r),r!==e.value&&(e.value=r),s==null)){e.defaultValue!==r&&(e.defaultValue=r);return}e.defaultValue=s!=null?""+fe(s):""}function Su(e,r,s,l){if(r==null){if(l!=null){if(s!=null)throw Error(a(92));if(ne(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),r=s}s=fe(r),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l)}function Mn(e,r){if(r){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=r;return}}e.textContent=r}var Pi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Oo(e,r,s){var l=r.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="":l?e.setProperty(r,s):typeof s!="number"||s===0||Pi.has(r)?r==="float"?e.cssFloat=s:e[r]=(""+s).trim():e[r]=s+"px"}function Vo(e,r,s){if(r!=null&&typeof r!="object")throw Error(a(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||r!=null&&r.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in r)l=r[h],r.hasOwnProperty(h)&&s[h]!==l&&Oo(e,h,l)}else for(var d in r)r.hasOwnProperty(d)&&Oo(e,d,r[d])}function hs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Au=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ru=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xn(e){return Ru.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var ko=null;function Uo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Er=null,un=null;function Cu(e){var r=ci(e);if(r&&(e=r.stateNode)){var s=e[He]||null;t:switch(e=r.stateNode,r.type){case"input":if(Do(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),r=s.name,s.type==="radio"&&r!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+ze(""+r)+'"][type="radio"]'),r=0;r<s.length;r++){var l=s[r];if(l!==e&&l.form===e.form){var h=l[He]||null;if(!h)throw Error(a(90));Do(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(r=0;r<s.length;r++)l=s[r],l.form===e.form&&Wt(l)}break t;case"textarea":Tu(e,s.value,s.defaultValue);break t;case"select":r=s.value,r!=null&&_r(e,!!s.multiple,r,!1)}}}var va=!1;function _a(e,r,s){if(va)return e(r,s);va=!0;try{var l=e(r);return l}finally{if(va=!1,(Er!==null||un!==null)&&(yc(),Er&&(r=Er,e=un,un=Er=null,Cu(r),e)))for(r=0;r<e.length;r++)Cu(e[r])}}function br(e,r){var s=e.stateNode;if(s===null)return null;var l=s[He]||null;if(l===null)return null;s=l[r];t:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,r,typeof s));return s}var cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Li=!1;if(cn)try{var wr={};Object.defineProperty(wr,"passive",{get:function(){Li=!0}}),window.addEventListener("test",wr,wr),window.removeEventListener("test",wr,wr)}catch{Li=!1}var On=null,ie=null,fs=null;function Iu(){if(fs)return fs;var e,r=ie,s=r.length,l,h="value"in On?On.value:On.textContent,d=h.length;for(e=0;e<s&&r[e]===h[e];e++);var E=s-e;for(l=1;l<=E&&r[s-l]===h[d-l];l++);return fs=h.slice(e,1<l?1-l:void 0)}function Ea(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function ba(){return!0}function Po(){return!1}function Ve(e){function r(s,l,h,d,E){this._reactName=s,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=E,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(s=e[b],this[b]=s?s(d):d[b]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ba:Po,this.isPropagationStopped=Po,this}return v(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=ba)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=ba)},persist:function(){},isPersistent:ba}),r}var tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wa=Ve(tn),Ta=v({},tn,{view:0,detail:0}),Sa=Ve(Ta),ds,Aa,pi,Ra=v({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pi&&(pi&&e.type==="mousemove"?(ds=e.screenX-pi.screenX,Aa=e.screenY-pi.screenY):Aa=ds=0,pi=e),ds)},movementY:function(e){return"movementY"in e?e.movementY:Aa}}),Ca=Ve(Ra),mf=v({},Ra,{dataTransfer:0}),ju=Ve(mf),Ia=v({},Ta,{relatedTarget:0}),ps=Ve(Ia),Du=v({},tn,{animationName:0,elapsedTime:0,pseudoElement:0}),Lo=Ve(Du),zo=v({},tn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Nu=Ve(zo),ms=v({},tn,{data:0}),Bo=Ve(ms),Mu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zi={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ou={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vu(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=Ou[e])?!!r[e]:!1}function gs(){return Vu}var ku=v({},Ta,{key:function(e){if(e.key){var r=Mu[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=Ea(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zi[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gs,charCode:function(e){return e.type==="keypress"?Ea(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ea(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ys=Ve(ku),hn=v({},Ra,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$o=Ve(hn),Uu=v({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gs}),Tr=Ve(Uu),c=v({},tn,{propertyName:0,elapsedTime:0,pseudoElement:0}),y=Ve(c),_=v({},Ra,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),T=Ve(_),F=v({},tn,{newState:0,oldState:0}),Q=Ve(F),lt=[9,13,27,32],At=cn&&"CompositionEvent"in window,se=null;cn&&"documentMode"in document&&(se=document.documentMode);var Yt=cn&&"TextEvent"in window&&!se,we=cn&&(!At||se&&8<se&&11>=se),_n=" ",mi=!1;function Wn(e,r){switch(e){case"keyup":return lt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zn(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jn=!1;function Fo(e,r){switch(e){case"compositionend":return Zn(r);case"keypress":return r.which!==32?null:(mi=!0,_n);case"textInput":return e=r.data,e===_n&&mi?null:e;default:return null}}function ab(e,r){if(Jn)return e==="compositionend"||!At&&Wn(e,r)?(e=Iu(),fs=ie=On=null,Jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return we&&r.locale!=="ko"?null:r.data;default:return null}}var sb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zg(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!sb[e.type]:r==="textarea"}function Bg(e,r,s,l){Er?un?un.push(l):un=[l]:Er=l,r=wc(r,"onChange"),0<r.length&&(s=new wa("onChange","change",null,s,l),e.push({event:s,listeners:r}))}var qo=null,Ko=null;function ob(e){E1(e,0)}function Pu(e){var r=gr(e);if(Wt(r))return e}function $g(e,r){if(e==="change")return r}var Fg=!1;if(cn){var gf;if(cn){var yf="oninput"in document;if(!yf){var qg=document.createElement("div");qg.setAttribute("oninput","return;"),yf=typeof qg.oninput=="function"}gf=yf}else gf=!1;Fg=gf&&(!document.documentMode||9<document.documentMode)}function Kg(){qo&&(qo.detachEvent("onpropertychange",Hg),Ko=qo=null)}function Hg(e){if(e.propertyName==="value"&&Pu(Ko)){var r=[];Bg(r,Ko,e,Uo(e)),_a(ob,r)}}function lb(e,r,s){e==="focusin"?(Kg(),qo=r,Ko=s,qo.attachEvent("onpropertychange",Hg)):e==="focusout"&&Kg()}function ub(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pu(Ko)}function cb(e,r){if(e==="click")return Pu(r)}function hb(e,r){if(e==="input"||e==="change")return Pu(r)}function fb(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var En=typeof Object.is=="function"?Object.is:fb;function Ho(e,r){if(En(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var s=Object.keys(e),l=Object.keys(r);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var h=s[l];if(!on.call(r,h)||!En(e[h],r[h]))return!1}return!0}function Gg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yg(e,r){var s=Gg(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=r&&l>=r)return{node:s,offset:r-e};e=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=Gg(s)}}function Qg(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?Qg(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function Xg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var r=Ui(e.document);r instanceof e.HTMLIFrameElement;){try{var s=typeof r.contentWindow.location.href=="string"}catch{s=!1}if(s)e=r.contentWindow;else break;r=Ui(e.document)}return r}function xf(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}var db=cn&&"documentMode"in document&&11>=document.documentMode,xs=null,vf=null,Go=null,_f=!1;function Wg(e,r,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;_f||xs==null||xs!==Ui(l)||(l=xs,"selectionStart"in l&&xf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Go&&Ho(Go,l)||(Go=l,l=wc(vf,"onSelect"),0<l.length&&(r=new wa("onSelect","select",null,r,s),e.push({event:r,listeners:l}),r.target=xs)))}function ja(e,r){var s={};return s[e.toLowerCase()]=r.toLowerCase(),s["Webkit"+e]="webkit"+r,s["Moz"+e]="moz"+r,s}var vs={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionrun:ja("Transition","TransitionRun"),transitionstart:ja("Transition","TransitionStart"),transitioncancel:ja("Transition","TransitionCancel"),transitionend:ja("Transition","TransitionEnd")},Ef={},Zg={};cn&&(Zg=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function Da(e){if(Ef[e])return Ef[e];if(!vs[e])return e;var r=vs[e],s;for(s in r)if(r.hasOwnProperty(s)&&s in Zg)return Ef[e]=r[s];return e}var Jg=Da("animationend"),t0=Da("animationiteration"),e0=Da("animationstart"),pb=Da("transitionrun"),mb=Da("transitionstart"),gb=Da("transitioncancel"),n0=Da("transitionend"),i0=new Map,bf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bf.push("scrollEnd");function ti(e,r){i0.set(e,r),hi(r,[e])}var r0=new WeakMap;function Vn(e,r){if(typeof e=="object"&&e!==null){var s=r0.get(e);return s!==void 0?s:(r={value:e,source:r,stack:Qn(r)},r0.set(e,r),r)}return{value:e,source:r,stack:Qn(r)}}var kn=[],_s=0,wf=0;function Lu(){for(var e=_s,r=wf=_s=0;r<e;){var s=kn[r];kn[r++]=null;var l=kn[r];kn[r++]=null;var h=kn[r];kn[r++]=null;var d=kn[r];if(kn[r++]=null,l!==null&&h!==null){var E=l.pending;E===null?h.next=h:(h.next=E.next,E.next=h),l.pending=h}d!==0&&a0(s,h,d)}}function zu(e,r,s,l){kn[_s++]=e,kn[_s++]=r,kn[_s++]=s,kn[_s++]=l,wf|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Tf(e,r,s,l){return zu(e,r,s,l),Bu(e)}function Es(e,r){return zu(e,null,null,r),Bu(e)}function a0(e,r,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var h=!1,d=e.return;d!==null;)d.childLanes|=s,l=d.alternate,l!==null&&(l.childLanes|=s),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(h=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,h&&r!==null&&(h=31-ln(s),e=d.hiddenUpdates,l=e[h],l===null?e[h]=[r]:l.push(r),r.lane=s|536870912),d):null}function Bu(e){if(50<xl)throw xl=0,jd=null,Error(a(185));for(var r=e.return;r!==null;)e=r,r=e.return;return e.tag===3?e.stateNode:null}var bs={};function yb(e,r,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(e,r,s,l){return new yb(e,r,s,l)}function Sf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bi(e,r){var s=e.alternate;return s===null?(s=bn(e.tag,r,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=r,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,r=e.dependencies,s.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function s0(e,r){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=r,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,r=s.dependencies,e.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),e}function $u(e,r,s,l,h,d){var E=0;if(l=e,typeof e=="function")Sf(e)&&(E=1);else if(typeof e=="string")E=vw(e,s,gt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case I:return e=bn(31,s,r,h),e.elementType=I,e.lanes=d,e;case V:return Na(s.children,h,d,r);case B:E=8,h|=24;break;case P:return e=bn(12,s,r,h|2),e.elementType=P,e.lanes=d,e;case Z:return e=bn(13,s,r,h),e.elementType=Z,e.lanes=d,e;case ft:return e=bn(19,s,r,h),e.elementType=ft,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case X:case J:E=10;break t;case Y:E=9;break t;case ot:E=11;break t;case j:E=14;break t;case C:E=16,l=null;break t}E=29,s=Error(a(130,e===null?"null":typeof e,"")),l=null}return r=bn(E,s,r,h),r.elementType=e,r.type=l,r.lanes=d,r}function Na(e,r,s,l){return e=bn(7,e,l,r),e.lanes=s,e}function Af(e,r,s){return e=bn(6,e,null,r),e.lanes=s,e}function Rf(e,r,s){return r=bn(4,e.children!==null?e.children:[],e.key,r),r.lanes=s,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}var ws=[],Ts=0,Fu=null,qu=0,Un=[],Pn=0,Ma=null,$i=1,Fi="";function Oa(e,r){ws[Ts++]=qu,ws[Ts++]=Fu,Fu=e,qu=r}function o0(e,r,s){Un[Pn++]=$i,Un[Pn++]=Fi,Un[Pn++]=Ma,Ma=e;var l=$i;e=Fi;var h=32-ln(l)-1;l&=~(1<<h),s+=1;var d=32-ln(r)+h;if(30<d){var E=h-h%5;d=(l&(1<<E)-1).toString(32),l>>=E,h-=E,$i=1<<32-ln(r)+h|s<<h|l,Fi=d+e}else $i=1<<d|s<<h|l,Fi=e}function Cf(e){e.return!==null&&(Oa(e,1),o0(e,1,0))}function If(e){for(;e===Fu;)Fu=ws[--Ts],ws[Ts]=null,qu=ws[--Ts],ws[Ts]=null;for(;e===Ma;)Ma=Un[--Pn],Un[Pn]=null,Fi=Un[--Pn],Un[Pn]=null,$i=Un[--Pn],Un[Pn]=null}var fn=null,ye=null,Kt=!1,Va=null,gi=!1,jf=Error(a(519));function ka(e){var r=Error(a(418,""));throw Xo(Vn(r,e)),jf}function l0(e){var r=e.stateNode,s=e.type,l=e.memoizedProps;switch(r[Ee]=e,r[He]=l,s){case"dialog":kt("cancel",r),kt("close",r);break;case"iframe":case"object":case"embed":kt("load",r);break;case"video":case"audio":for(s=0;s<_l.length;s++)kt(_l[s],r);break;case"source":kt("error",r);break;case"img":case"image":case"link":kt("error",r),kt("load",r);break;case"details":kt("toggle",r);break;case"input":kt("invalid",r),No(r,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),vr(r);break;case"select":kt("invalid",r);break;case"textarea":kt("invalid",r),Su(r,l.value,l.defaultValue,l.children),vr(r)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||r.textContent===""+s||l.suppressHydrationWarning===!0||S1(r.textContent,s)?(l.popover!=null&&(kt("beforetoggle",r),kt("toggle",r)),l.onScroll!=null&&kt("scroll",r),l.onScrollEnd!=null&&kt("scrollend",r),l.onClick!=null&&(r.onclick=Tc),r=!0):r=!1,r||ka(e)}function u0(e){for(fn=e.return;fn;)switch(fn.tag){case 5:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:fn=fn.return}}function Yo(e){if(e!==fn)return!1;if(!Kt)return u0(e),Kt=!0,!1;var r=e.tag,s;if((s=r!==3&&r!==27)&&((s=r===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||Hd(e.type,e.memoizedProps)),s=!s),s&&ye&&ka(e),u0(e),r===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(r===0){ye=ni(e.nextSibling);break t}r--}else s!=="$"&&s!=="$!"&&s!=="$?"||r++;e=e.nextSibling}ye=null}}else r===27?(r=ye,zr(e.type)?(e=Xd,Xd=null,ye=e):ye=r):ye=fn?ni(e.stateNode.nextSibling):null;return!0}function Qo(){ye=fn=null,Kt=!1}function c0(){var e=Va;return e!==null&&(gn===null?gn=e:gn.push.apply(gn,e),Va=null),e}function Xo(e){Va===null?Va=[e]:Va.push(e)}var Df=at(null),Ua=null,qi=null;function Sr(e,r,s){ct(Df,r._currentValue),r._currentValue=s}function Ki(e){e._currentValue=Df.current,ut(Df)}function Nf(e,r,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),e===s)break;e=e.return}}function Mf(e,r,s,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var d=h.dependencies;if(d!==null){var E=h.child;d=d.firstContext;t:for(;d!==null;){var b=d;d=h;for(var D=0;D<r.length;D++)if(b.context===r[D]){d.lanes|=s,b=d.alternate,b!==null&&(b.lanes|=s),Nf(d.return,s,e),l||(E=null);break t}d=b.next}}else if(h.tag===18){if(E=h.return,E===null)throw Error(a(341));E.lanes|=s,d=E.alternate,d!==null&&(d.lanes|=s),Nf(E,s,e),E=null}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===e){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}}function Wo(e,r,s,l){e=null;for(var h=r,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var E=h.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var b=h.type;En(h.pendingProps.value,E.value)||(e!==null?e.push(b):e=[b])}}else if(h===ge.current){if(E=h.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(Al):e=[Al])}h=h.return}e!==null&&Mf(r,e,s,l),r.flags|=262144}function Ku(e){for(e=e.firstContext;e!==null;){if(!En(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pa(e){Ua=e,qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function en(e){return h0(Ua,e)}function Hu(e,r){return Ua===null&&Pa(e),h0(e,r)}function h0(e,r){var s=r._currentValue;if(r={context:r,memoizedValue:s,next:null},qi===null){if(e===null)throw Error(a(308));qi=r,e.dependencies={lanes:0,firstContext:r},e.flags|=524288}else qi=qi.next=r;return s}var xb=typeof AbortController<"u"?AbortController:function(){var e=[],r=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){r.aborted=!0,e.forEach(function(s){return s()})}},vb=n.unstable_scheduleCallback,_b=n.unstable_NormalPriority,ke={$$typeof:J,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Of(){return{controller:new xb,data:new Map,refCount:0}}function Zo(e){e.refCount--,e.refCount===0&&vb(_b,function(){e.controller.abort()})}var Jo=null,Vf=0,Ss=0,As=null;function Eb(e,r){if(Jo===null){var s=Jo=[];Vf=0,Ss=Ud(),As={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Vf++,r.then(f0,f0),r}function f0(){if(--Vf===0&&Jo!==null){As!==null&&(As.status="fulfilled");var e=Jo;Jo=null,Ss=0,As=null;for(var r=0;r<e.length;r++)(0,e[r])()}}function bb(e,r){var s=[],l={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return e.then(function(){l.status="fulfilled",l.value=r;for(var h=0;h<s.length;h++)(0,s[h])(r)},function(h){for(l.status="rejected",l.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),l}var d0=tt.S;tt.S=function(e,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&Eb(e,r),d0!==null&&d0(e,r)};var La=at(null);function kf(){var e=La.current;return e!==null?e:re.pooledCache}function Gu(e,r){r===null?ct(La,La.current):ct(La,r.pool)}function p0(){var e=kf();return e===null?null:{parent:ke._currentValue,pool:e}}var tl=Error(a(460)),m0=Error(a(474)),Yu=Error(a(542)),Uf={then:function(){}};function g0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Qu(){}function y0(e,r,s){switch(s=e[s],s===void 0?e.push(r):s!==r&&(r.then(Qu,Qu),r=s),r.status){case"fulfilled":return r.value;case"rejected":throw e=r.reason,v0(e),e;default:if(typeof r.status=="string")r.then(Qu,Qu);else{if(e=re,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=r,e.status="pending",e.then(function(l){if(r.status==="pending"){var h=r;h.status="fulfilled",h.value=l}},function(l){if(r.status==="pending"){var h=r;h.status="rejected",h.reason=l}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw e=r.reason,v0(e),e}throw el=r,tl}}var el=null;function x0(){if(el===null)throw Error(a(459));var e=el;return el=null,e}function v0(e){if(e===tl||e===Yu)throw Error(a(483))}var Ar=!1;function Pf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Lf(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Rr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Cr(e,r,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Qt&2)!==0){var h=l.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),l.pending=r,r=Bu(e),a0(e,null,s),r}return zu(e,l,r,s),Bu(e)}function nl(e,r,s){if(r=r.updateQueue,r!==null&&(r=r.shared,(s&4194048)!==0)){var l=r.lanes;l&=e.pendingLanes,s|=l,r.lanes=s,pr(e,s)}}function zf(e,r){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var h=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var E={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?h=d=E:d=d.next=E,s=s.next}while(s!==null);d===null?h=d=r:d=d.next=r}else h=d=r;s={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=r:e.next=r,s.lastBaseUpdate=r}var Bf=!1;function il(){if(Bf){var e=As;if(e!==null)throw e}}function rl(e,r,s,l){Bf=!1;var h=e.updateQueue;Ar=!1;var d=h.firstBaseUpdate,E=h.lastBaseUpdate,b=h.shared.pending;if(b!==null){h.shared.pending=null;var D=b,q=D.next;D.next=null,E===null?d=q:E.next=q,E=D;var et=e.alternate;et!==null&&(et=et.updateQueue,b=et.lastBaseUpdate,b!==E&&(b===null?et.firstBaseUpdate=q:b.next=q,et.lastBaseUpdate=D))}if(d!==null){var rt=h.baseState;E=0,et=q=D=null,b=d;do{var H=b.lane&-536870913,G=H!==b.lane;if(G?(zt&H)===H:(l&H)===H){H!==0&&H===Ss&&(Bf=!0),et!==null&&(et=et.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Tt=e,Et=b;H=r;var te=s;switch(Et.tag){case 1:if(Tt=Et.payload,typeof Tt=="function"){rt=Tt.call(te,rt,H);break t}rt=Tt;break t;case 3:Tt.flags=Tt.flags&-65537|128;case 0:if(Tt=Et.payload,H=typeof Tt=="function"?Tt.call(te,rt,H):Tt,H==null)break t;rt=v({},rt,H);break t;case 2:Ar=!0}}H=b.callback,H!==null&&(e.flags|=64,G&&(e.flags|=8192),G=h.callbacks,G===null?h.callbacks=[H]:G.push(H))}else G={lane:H,tag:b.tag,payload:b.payload,callback:b.callback,next:null},et===null?(q=et=G,D=rt):et=et.next=G,E|=H;if(b=b.next,b===null){if(b=h.shared.pending,b===null)break;G=b,b=G.next,G.next=null,h.lastBaseUpdate=G,h.shared.pending=null}}while(!0);et===null&&(D=rt),h.baseState=D,h.firstBaseUpdate=q,h.lastBaseUpdate=et,d===null&&(h.shared.lanes=0),kr|=E,e.lanes=E,e.memoizedState=rt}}function _0(e,r){if(typeof e!="function")throw Error(a(191,e));e.call(r)}function E0(e,r){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)_0(s[e],r)}var Rs=at(null),Xu=at(0);function b0(e,r){e=Zi,ct(Xu,e),ct(Rs,r),Zi=e|r.baseLanes}function $f(){ct(Xu,Zi),ct(Rs,Rs.current)}function Ff(){Zi=Xu.current,ut(Rs),ut(Xu)}var Ir=0,Nt=null,Zt=null,Re=null,Wu=!1,Cs=!1,za=!1,Zu=0,al=0,Is=null,wb=0;function Te(){throw Error(a(321))}function qf(e,r){if(r===null)return!1;for(var s=0;s<r.length&&s<e.length;s++)if(!En(e[s],r[s]))return!1;return!0}function Kf(e,r,s,l,h,d){return Ir=d,Nt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,tt.H=e===null||e.memoizedState===null?ay:sy,za=!1,d=s(l,h),za=!1,Cs&&(d=T0(r,s,l,h)),w0(e),d}function w0(e){tt.H=rc;var r=Zt!==null&&Zt.next!==null;if(Ir=0,Re=Zt=Nt=null,Wu=!1,al=0,Is=null,r)throw Error(a(300));e===null||Be||(e=e.dependencies,e!==null&&Ku(e)&&(Be=!0))}function T0(e,r,s,l){Nt=e;var h=0;do{if(Cs&&(Is=null),al=0,Cs=!1,25<=h)throw Error(a(301));if(h+=1,Re=Zt=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}tt.H=jb,d=r(s,l)}while(Cs);return d}function Tb(){var e=tt.H,r=e.useState()[0];return r=typeof r.then=="function"?sl(r):r,e=e.useState()[0],(Zt!==null?Zt.memoizedState:null)!==e&&(Nt.flags|=1024),r}function Hf(){var e=Zu!==0;return Zu=0,e}function Gf(e,r,s){r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~s}function Yf(e){if(Wu){for(e=e.memoizedState;e!==null;){var r=e.queue;r!==null&&(r.pending=null),e=e.next}Wu=!1}Ir=0,Re=Zt=Nt=null,Cs=!1,al=Zu=0,Is=null}function pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?Nt.memoizedState=Re=e:Re=Re.next=e,Re}function Ce(){if(Zt===null){var e=Nt.alternate;e=e!==null?e.memoizedState:null}else e=Zt.next;var r=Re===null?Nt.memoizedState:Re.next;if(r!==null)Re=r,Zt=e;else{if(e===null)throw Nt.alternate===null?Error(a(467)):Error(a(310));Zt=e,e={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},Re===null?Nt.memoizedState=Re=e:Re=Re.next=e}return Re}function Qf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function sl(e){var r=al;return al+=1,Is===null&&(Is=[]),e=y0(Is,e,r),r=Nt,(Re===null?r.memoizedState:Re.next)===null&&(r=r.alternate,tt.H=r===null||r.memoizedState===null?ay:sy),e}function Ju(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return sl(e);if(e.$$typeof===J)return en(e)}throw Error(a(438,String(e)))}function Xf(e){var r=null,s=Nt.updateQueue;if(s!==null&&(r=s.memoCache),r==null){var l=Nt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(r={data:l.data.map(function(h){return h.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),s===null&&(s=Qf(),Nt.updateQueue=s),s.memoCache=r,s=r.data[r.index],s===void 0)for(s=r.data[r.index]=Array(e),l=0;l<e;l++)s[l]=M;return r.index++,s}function Hi(e,r){return typeof r=="function"?r(e):r}function tc(e){var r=Ce();return Wf(r,Zt,e)}function Wf(e,r,s){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var h=e.baseQueue,d=l.pending;if(d!==null){if(h!==null){var E=h.next;h.next=d.next,d.next=E}r.baseQueue=h=d,l.pending=null}if(d=e.baseState,h===null)e.memoizedState=d;else{r=h.next;var b=E=null,D=null,q=r,et=!1;do{var rt=q.lane&-536870913;if(rt!==q.lane?(zt&rt)===rt:(Ir&rt)===rt){var H=q.revertLane;if(H===0)D!==null&&(D=D.next={lane:0,revertLane:0,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),rt===Ss&&(et=!0);else if((Ir&H)===H){q=q.next,H===Ss&&(et=!0);continue}else rt={lane:0,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},D===null?(b=D=rt,E=d):D=D.next=rt,Nt.lanes|=H,kr|=H;rt=q.action,za&&s(d,rt),d=q.hasEagerState?q.eagerState:s(d,rt)}else H={lane:rt,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},D===null?(b=D=H,E=d):D=D.next=H,Nt.lanes|=rt,kr|=rt;q=q.next}while(q!==null&&q!==r);if(D===null?E=d:D.next=b,!En(d,e.memoizedState)&&(Be=!0,et&&(s=As,s!==null)))throw s;e.memoizedState=d,e.baseState=E,e.baseQueue=D,l.lastRenderedState=d}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Zf(e){var r=Ce(),s=r.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var l=s.dispatch,h=s.pending,d=r.memoizedState;if(h!==null){s.pending=null;var E=h=h.next;do d=e(d,E.action),E=E.next;while(E!==h);En(d,r.memoizedState)||(Be=!0),r.memoizedState=d,r.baseQueue===null&&(r.baseState=d),s.lastRenderedState=d}return[d,l]}function S0(e,r,s){var l=Nt,h=Ce(),d=Kt;if(d){if(s===void 0)throw Error(a(407));s=s()}else s=r();var E=!En((Zt||h).memoizedState,s);E&&(h.memoizedState=s,Be=!0),h=h.queue;var b=C0.bind(null,l,h,e);if(ol(2048,8,b,[e]),h.getSnapshot!==r||E||Re!==null&&Re.memoizedState.tag&1){if(l.flags|=2048,js(9,ec(),R0.bind(null,l,h,s,r),null),re===null)throw Error(a(349));d||(Ir&124)!==0||A0(l,r,s)}return s}function A0(e,r,s){e.flags|=16384,e={getSnapshot:r,value:s},r=Nt.updateQueue,r===null?(r=Qf(),Nt.updateQueue=r,r.stores=[e]):(s=r.stores,s===null?r.stores=[e]:s.push(e))}function R0(e,r,s,l){r.value=s,r.getSnapshot=l,I0(r)&&j0(e)}function C0(e,r,s){return s(function(){I0(r)&&j0(e)})}function I0(e){var r=e.getSnapshot;e=e.value;try{var s=r();return!En(e,s)}catch{return!0}}function j0(e){var r=Es(e,2);r!==null&&Rn(r,e,2)}function Jf(e){var r=pn();if(typeof e=="function"){var s=e;if(e=s(),za){jn(!0);try{s()}finally{jn(!1)}}}return r.memoizedState=r.baseState=e,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:e},r}function D0(e,r,s,l){return e.baseState=s,Wf(e,Zt,typeof l=="function"?l:Hi)}function Sb(e,r,s,l,h){if(ic(e))throw Error(a(485));if(e=r.action,e!==null){var d={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){d.listeners.push(E)}};tt.T!==null?s(!0):d.isTransition=!1,l(d),s=r.pending,s===null?(d.next=r.pending=d,N0(r,d)):(d.next=s.next,r.pending=s.next=d)}}function N0(e,r){var s=r.action,l=r.payload,h=e.state;if(r.isTransition){var d=tt.T,E={};tt.T=E;try{var b=s(h,l),D=tt.S;D!==null&&D(E,b),M0(e,r,b)}catch(q){td(e,r,q)}finally{tt.T=d}}else try{d=s(h,l),M0(e,r,d)}catch(q){td(e,r,q)}}function M0(e,r,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){O0(e,r,l)},function(l){return td(e,r,l)}):O0(e,r,s)}function O0(e,r,s){r.status="fulfilled",r.value=s,V0(r),e.state=s,r=e.pending,r!==null&&(s=r.next,s===r?e.pending=null:(s=s.next,r.next=s,N0(e,s)))}function td(e,r,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do r.status="rejected",r.reason=s,V0(r),r=r.next;while(r!==l)}e.action=null}function V0(e){e=e.listeners;for(var r=0;r<e.length;r++)(0,e[r])()}function k0(e,r){return r}function U0(e,r){if(Kt){var s=re.formState;if(s!==null){t:{var l=Nt;if(Kt){if(ye){e:{for(var h=ye,d=gi;h.nodeType!==8;){if(!d){h=null;break e}if(h=ni(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){ye=ni(h.nextSibling),l=h.data==="F!";break t}}ka(l)}l=!1}l&&(r=s[0])}}return s=pn(),s.memoizedState=s.baseState=r,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:k0,lastRenderedState:r},s.queue=l,s=ny.bind(null,Nt,l),l.dispatch=s,l=Jf(!1),d=ad.bind(null,Nt,!1,l.queue),l=pn(),h={state:r,dispatch:null,action:e,pending:null},l.queue=h,s=Sb.bind(null,Nt,h,d,s),h.dispatch=s,l.memoizedState=e,[r,s,!1]}function P0(e){var r=Ce();return L0(r,Zt,e)}function L0(e,r,s){if(r=Wf(e,r,k0)[0],e=tc(Hi)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var l=sl(r)}catch(E){throw E===tl?Yu:E}else l=r;r=Ce();var h=r.queue,d=h.dispatch;return s!==r.memoizedState&&(Nt.flags|=2048,js(9,ec(),Ab.bind(null,h,s),null)),[l,d,e]}function Ab(e,r){e.action=r}function z0(e){var r=Ce(),s=Zt;if(s!==null)return L0(r,s,e);Ce(),r=r.memoizedState,s=Ce();var l=s.queue.dispatch;return s.memoizedState=e,[r,l,!1]}function js(e,r,s,l){return e={tag:e,create:s,deps:l,inst:r,next:null},r=Nt.updateQueue,r===null&&(r=Qf(),Nt.updateQueue=r),s=r.lastEffect,s===null?r.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,r.lastEffect=e),e}function ec(){return{destroy:void 0,resource:void 0}}function B0(){return Ce().memoizedState}function nc(e,r,s,l){var h=pn();l=l===void 0?null:l,Nt.flags|=e,h.memoizedState=js(1|r,ec(),s,l)}function ol(e,r,s,l){var h=Ce();l=l===void 0?null:l;var d=h.memoizedState.inst;Zt!==null&&l!==null&&qf(l,Zt.memoizedState.deps)?h.memoizedState=js(r,d,s,l):(Nt.flags|=e,h.memoizedState=js(1|r,d,s,l))}function $0(e,r){nc(8390656,8,e,r)}function F0(e,r){ol(2048,8,e,r)}function q0(e,r){return ol(4,2,e,r)}function K0(e,r){return ol(4,4,e,r)}function H0(e,r){if(typeof r=="function"){e=e();var s=r(e);return function(){typeof s=="function"?s():r(null)}}if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function G0(e,r,s){s=s!=null?s.concat([e]):null,ol(4,4,H0.bind(null,r,e),s)}function ed(){}function Y0(e,r){var s=Ce();r=r===void 0?null:r;var l=s.memoizedState;return r!==null&&qf(r,l[1])?l[0]:(s.memoizedState=[e,r],e)}function Q0(e,r){var s=Ce();r=r===void 0?null:r;var l=s.memoizedState;if(r!==null&&qf(r,l[1]))return l[0];if(l=e(),za){jn(!0);try{e()}finally{jn(!1)}}return s.memoizedState=[l,r],l}function nd(e,r,s){return s===void 0||(Ir&1073741824)!==0?e.memoizedState=r:(e.memoizedState=s,e=Zy(),Nt.lanes|=e,kr|=e,s)}function X0(e,r,s,l){return En(s,r)?s:Rs.current!==null?(e=nd(e,s,l),En(e,r)||(Be=!0),e):(Ir&42)===0?(Be=!0,e.memoizedState=s):(e=Zy(),Nt.lanes|=e,kr|=e,r)}function W0(e,r,s,l,h){var d=ht.p;ht.p=d!==0&&8>d?d:8;var E=tt.T,b={};tt.T=b,ad(e,!1,r,s);try{var D=h(),q=tt.S;if(q!==null&&q(b,D),D!==null&&typeof D=="object"&&typeof D.then=="function"){var et=bb(D,l);ll(e,r,et,An(e))}else ll(e,r,l,An(e))}catch(rt){ll(e,r,{then:function(){},status:"rejected",reason:rt},An())}finally{ht.p=d,tt.T=E}}function Rb(){}function id(e,r,s,l){if(e.tag!==5)throw Error(a(476));var h=Z0(e).queue;W0(e,h,r,yt,s===null?Rb:function(){return J0(e),s(l)})}function Z0(e){var r=e.memoizedState;if(r!==null)return r;r={memoizedState:yt,baseState:yt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:yt},next:null};var s={};return r.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:s},next:null},e.memoizedState=r,e=e.alternate,e!==null&&(e.memoizedState=r),r}function J0(e){var r=Z0(e).next.queue;ll(e,r,{},An())}function rd(){return en(Al)}function ty(){return Ce().memoizedState}function ey(){return Ce().memoizedState}function Cb(e){for(var r=e.return;r!==null;){switch(r.tag){case 24:case 3:var s=An();e=Rr(s);var l=Cr(r,e,s);l!==null&&(Rn(l,r,s),nl(l,r,s)),r={cache:Of()},e.payload=r;return}r=r.return}}function Ib(e,r,s){var l=An();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},ic(e)?iy(r,s):(s=Tf(e,r,s,l),s!==null&&(Rn(s,e,l),ry(s,r,l)))}function ny(e,r,s){var l=An();ll(e,r,s,l)}function ll(e,r,s,l){var h={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(ic(e))iy(r,h);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=r.lastRenderedReducer,d!==null))try{var E=r.lastRenderedState,b=d(E,s);if(h.hasEagerState=!0,h.eagerState=b,En(b,E))return zu(e,r,h,0),re===null&&Lu(),!1}catch{}finally{}if(s=Tf(e,r,h,l),s!==null)return Rn(s,e,l),ry(s,r,l),!0}return!1}function ad(e,r,s,l){if(l={lane:2,revertLane:Ud(),action:l,hasEagerState:!1,eagerState:null,next:null},ic(e)){if(r)throw Error(a(479))}else r=Tf(e,s,l,2),r!==null&&Rn(r,e,2)}function ic(e){var r=e.alternate;return e===Nt||r!==null&&r===Nt}function iy(e,r){Cs=Wu=!0;var s=e.pending;s===null?r.next=r:(r.next=s.next,s.next=r),e.pending=r}function ry(e,r,s){if((s&4194048)!==0){var l=r.lanes;l&=e.pendingLanes,s|=l,r.lanes=s,pr(e,s)}}var rc={readContext:en,use:Ju,useCallback:Te,useContext:Te,useEffect:Te,useImperativeHandle:Te,useLayoutEffect:Te,useInsertionEffect:Te,useMemo:Te,useReducer:Te,useRef:Te,useState:Te,useDebugValue:Te,useDeferredValue:Te,useTransition:Te,useSyncExternalStore:Te,useId:Te,useHostTransitionStatus:Te,useFormState:Te,useActionState:Te,useOptimistic:Te,useMemoCache:Te,useCacheRefresh:Te},ay={readContext:en,use:Ju,useCallback:function(e,r){return pn().memoizedState=[e,r===void 0?null:r],e},useContext:en,useEffect:$0,useImperativeHandle:function(e,r,s){s=s!=null?s.concat([e]):null,nc(4194308,4,H0.bind(null,r,e),s)},useLayoutEffect:function(e,r){return nc(4194308,4,e,r)},useInsertionEffect:function(e,r){nc(4,2,e,r)},useMemo:function(e,r){var s=pn();r=r===void 0?null:r;var l=e();if(za){jn(!0);try{e()}finally{jn(!1)}}return s.memoizedState=[l,r],l},useReducer:function(e,r,s){var l=pn();if(s!==void 0){var h=s(r);if(za){jn(!0);try{s(r)}finally{jn(!1)}}}else h=r;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=Ib.bind(null,Nt,e),[l.memoizedState,e]},useRef:function(e){var r=pn();return e={current:e},r.memoizedState=e},useState:function(e){e=Jf(e);var r=e.queue,s=ny.bind(null,Nt,r);return r.dispatch=s,[e.memoizedState,s]},useDebugValue:ed,useDeferredValue:function(e,r){var s=pn();return nd(s,e,r)},useTransition:function(){var e=Jf(!1);return e=W0.bind(null,Nt,e.queue,!0,!1),pn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,r,s){var l=Nt,h=pn();if(Kt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=r(),re===null)throw Error(a(349));(zt&124)!==0||A0(l,r,s)}h.memoizedState=s;var d={value:s,getSnapshot:r};return h.queue=d,$0(C0.bind(null,l,d,e),[e]),l.flags|=2048,js(9,ec(),R0.bind(null,l,d,s,r),null),s},useId:function(){var e=pn(),r=re.identifierPrefix;if(Kt){var s=Fi,l=$i;s=(l&~(1<<32-ln(l)-1)).toString(32)+s,r="«"+r+"R"+s,s=Zu++,0<s&&(r+="H"+s.toString(32)),r+="»"}else s=wb++,r="«"+r+"r"+s.toString(32)+"»";return e.memoizedState=r},useHostTransitionStatus:rd,useFormState:U0,useActionState:U0,useOptimistic:function(e){var r=pn();r.memoizedState=r.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=s,r=ad.bind(null,Nt,!0,s),s.dispatch=r,[e,r]},useMemoCache:Xf,useCacheRefresh:function(){return pn().memoizedState=Cb.bind(null,Nt)}},sy={readContext:en,use:Ju,useCallback:Y0,useContext:en,useEffect:F0,useImperativeHandle:G0,useInsertionEffect:q0,useLayoutEffect:K0,useMemo:Q0,useReducer:tc,useRef:B0,useState:function(){return tc(Hi)},useDebugValue:ed,useDeferredValue:function(e,r){var s=Ce();return X0(s,Zt.memoizedState,e,r)},useTransition:function(){var e=tc(Hi)[0],r=Ce().memoizedState;return[typeof e=="boolean"?e:sl(e),r]},useSyncExternalStore:S0,useId:ty,useHostTransitionStatus:rd,useFormState:P0,useActionState:P0,useOptimistic:function(e,r){var s=Ce();return D0(s,Zt,e,r)},useMemoCache:Xf,useCacheRefresh:ey},jb={readContext:en,use:Ju,useCallback:Y0,useContext:en,useEffect:F0,useImperativeHandle:G0,useInsertionEffect:q0,useLayoutEffect:K0,useMemo:Q0,useReducer:Zf,useRef:B0,useState:function(){return Zf(Hi)},useDebugValue:ed,useDeferredValue:function(e,r){var s=Ce();return Zt===null?nd(s,e,r):X0(s,Zt.memoizedState,e,r)},useTransition:function(){var e=Zf(Hi)[0],r=Ce().memoizedState;return[typeof e=="boolean"?e:sl(e),r]},useSyncExternalStore:S0,useId:ty,useHostTransitionStatus:rd,useFormState:z0,useActionState:z0,useOptimistic:function(e,r){var s=Ce();return Zt!==null?D0(s,Zt,e,r):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:Xf,useCacheRefresh:ey},Ds=null,ul=0;function ac(e){var r=ul;return ul+=1,Ds===null&&(Ds=[]),y0(Ds,e,r)}function cl(e,r){r=r.props.ref,e.ref=r!==void 0?r:null}function sc(e,r){throw r.$$typeof===w?Error(a(525)):(e=Object.prototype.toString.call(r),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e)))}function oy(e){var r=e._init;return r(e._payload)}function ly(e){function r(L,U){if(e){var $=L.deletions;$===null?(L.deletions=[U],L.flags|=16):$.push(U)}}function s(L,U){if(!e)return null;for(;U!==null;)r(L,U),U=U.sibling;return null}function l(L){for(var U=new Map;L!==null;)L.key!==null?U.set(L.key,L):U.set(L.index,L),L=L.sibling;return U}function h(L,U){return L=Bi(L,U),L.index=0,L.sibling=null,L}function d(L,U,$){return L.index=$,e?($=L.alternate,$!==null?($=$.index,$<U?(L.flags|=67108866,U):$):(L.flags|=67108866,U)):(L.flags|=1048576,U)}function E(L){return e&&L.alternate===null&&(L.flags|=67108866),L}function b(L,U,$,nt){return U===null||U.tag!==6?(U=Af($,L.mode,nt),U.return=L,U):(U=h(U,$),U.return=L,U)}function D(L,U,$,nt){var mt=$.type;return mt===V?et(L,U,$.props.children,nt,$.key):U!==null&&(U.elementType===mt||typeof mt=="object"&&mt!==null&&mt.$$typeof===C&&oy(mt)===U.type)?(U=h(U,$.props),cl(U,$),U.return=L,U):(U=$u($.type,$.key,$.props,null,L.mode,nt),cl(U,$),U.return=L,U)}function q(L,U,$,nt){return U===null||U.tag!==4||U.stateNode.containerInfo!==$.containerInfo||U.stateNode.implementation!==$.implementation?(U=Rf($,L.mode,nt),U.return=L,U):(U=h(U,$.children||[]),U.return=L,U)}function et(L,U,$,nt,mt){return U===null||U.tag!==7?(U=Na($,L.mode,nt,mt),U.return=L,U):(U=h(U,$),U.return=L,U)}function rt(L,U,$){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return U=Af(""+U,L.mode,$),U.return=L,U;if(typeof U=="object"&&U!==null){switch(U.$$typeof){case S:return $=$u(U.type,U.key,U.props,null,L.mode,$),cl($,U),$.return=L,$;case R:return U=Rf(U,L.mode,$),U.return=L,U;case C:var nt=U._init;return U=nt(U._payload),rt(L,U,$)}if(ne(U)||z(U))return U=Na(U,L.mode,$,null),U.return=L,U;if(typeof U.then=="function")return rt(L,ac(U),$);if(U.$$typeof===J)return rt(L,Hu(L,U),$);sc(L,U)}return null}function H(L,U,$,nt){var mt=U!==null?U.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return mt!==null?null:b(L,U,""+$,nt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case S:return $.key===mt?D(L,U,$,nt):null;case R:return $.key===mt?q(L,U,$,nt):null;case C:return mt=$._init,$=mt($._payload),H(L,U,$,nt)}if(ne($)||z($))return mt!==null?null:et(L,U,$,nt,null);if(typeof $.then=="function")return H(L,U,ac($),nt);if($.$$typeof===J)return H(L,U,Hu(L,$),nt);sc(L,$)}return null}function G(L,U,$,nt,mt){if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return L=L.get($)||null,b(U,L,""+nt,mt);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case S:return L=L.get(nt.key===null?$:nt.key)||null,D(U,L,nt,mt);case R:return L=L.get(nt.key===null?$:nt.key)||null,q(U,L,nt,mt);case C:var Mt=nt._init;return nt=Mt(nt._payload),G(L,U,$,nt,mt)}if(ne(nt)||z(nt))return L=L.get($)||null,et(U,L,nt,mt,null);if(typeof nt.then=="function")return G(L,U,$,ac(nt),mt);if(nt.$$typeof===J)return G(L,U,$,Hu(U,nt),mt);sc(U,nt)}return null}function Tt(L,U,$,nt){for(var mt=null,Mt=null,xt=U,bt=U=0,Fe=null;xt!==null&&bt<$.length;bt++){xt.index>bt?(Fe=xt,xt=null):Fe=xt.sibling;var Ft=H(L,xt,$[bt],nt);if(Ft===null){xt===null&&(xt=Fe);break}e&&xt&&Ft.alternate===null&&r(L,xt),U=d(Ft,U,bt),Mt===null?mt=Ft:Mt.sibling=Ft,Mt=Ft,xt=Fe}if(bt===$.length)return s(L,xt),Kt&&Oa(L,bt),mt;if(xt===null){for(;bt<$.length;bt++)xt=rt(L,$[bt],nt),xt!==null&&(U=d(xt,U,bt),Mt===null?mt=xt:Mt.sibling=xt,Mt=xt);return Kt&&Oa(L,bt),mt}for(xt=l(xt);bt<$.length;bt++)Fe=G(xt,L,bt,$[bt],nt),Fe!==null&&(e&&Fe.alternate!==null&&xt.delete(Fe.key===null?bt:Fe.key),U=d(Fe,U,bt),Mt===null?mt=Fe:Mt.sibling=Fe,Mt=Fe);return e&&xt.forEach(function(Kr){return r(L,Kr)}),Kt&&Oa(L,bt),mt}function Et(L,U,$,nt){if($==null)throw Error(a(151));for(var mt=null,Mt=null,xt=U,bt=U=0,Fe=null,Ft=$.next();xt!==null&&!Ft.done;bt++,Ft=$.next()){xt.index>bt?(Fe=xt,xt=null):Fe=xt.sibling;var Kr=H(L,xt,Ft.value,nt);if(Kr===null){xt===null&&(xt=Fe);break}e&&xt&&Kr.alternate===null&&r(L,xt),U=d(Kr,U,bt),Mt===null?mt=Kr:Mt.sibling=Kr,Mt=Kr,xt=Fe}if(Ft.done)return s(L,xt),Kt&&Oa(L,bt),mt;if(xt===null){for(;!Ft.done;bt++,Ft=$.next())Ft=rt(L,Ft.value,nt),Ft!==null&&(U=d(Ft,U,bt),Mt===null?mt=Ft:Mt.sibling=Ft,Mt=Ft);return Kt&&Oa(L,bt),mt}for(xt=l(xt);!Ft.done;bt++,Ft=$.next())Ft=G(xt,L,bt,Ft.value,nt),Ft!==null&&(e&&Ft.alternate!==null&&xt.delete(Ft.key===null?bt:Ft.key),U=d(Ft,U,bt),Mt===null?mt=Ft:Mt.sibling=Ft,Mt=Ft);return e&&xt.forEach(function(Dw){return r(L,Dw)}),Kt&&Oa(L,bt),mt}function te(L,U,$,nt){if(typeof $=="object"&&$!==null&&$.type===V&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case S:t:{for(var mt=$.key;U!==null;){if(U.key===mt){if(mt=$.type,mt===V){if(U.tag===7){s(L,U.sibling),nt=h(U,$.props.children),nt.return=L,L=nt;break t}}else if(U.elementType===mt||typeof mt=="object"&&mt!==null&&mt.$$typeof===C&&oy(mt)===U.type){s(L,U.sibling),nt=h(U,$.props),cl(nt,$),nt.return=L,L=nt;break t}s(L,U);break}else r(L,U);U=U.sibling}$.type===V?(nt=Na($.props.children,L.mode,nt,$.key),nt.return=L,L=nt):(nt=$u($.type,$.key,$.props,null,L.mode,nt),cl(nt,$),nt.return=L,L=nt)}return E(L);case R:t:{for(mt=$.key;U!==null;){if(U.key===mt)if(U.tag===4&&U.stateNode.containerInfo===$.containerInfo&&U.stateNode.implementation===$.implementation){s(L,U.sibling),nt=h(U,$.children||[]),nt.return=L,L=nt;break t}else{s(L,U);break}else r(L,U);U=U.sibling}nt=Rf($,L.mode,nt),nt.return=L,L=nt}return E(L);case C:return mt=$._init,$=mt($._payload),te(L,U,$,nt)}if(ne($))return Tt(L,U,$,nt);if(z($)){if(mt=z($),typeof mt!="function")throw Error(a(150));return $=mt.call($),Et(L,U,$,nt)}if(typeof $.then=="function")return te(L,U,ac($),nt);if($.$$typeof===J)return te(L,U,Hu(L,$),nt);sc(L,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,U!==null&&U.tag===6?(s(L,U.sibling),nt=h(U,$),nt.return=L,L=nt):(s(L,U),nt=Af($,L.mode,nt),nt.return=L,L=nt),E(L)):s(L,U)}return function(L,U,$,nt){try{ul=0;var mt=te(L,U,$,nt);return Ds=null,mt}catch(xt){if(xt===tl||xt===Yu)throw xt;var Mt=bn(29,xt,null,L.mode);return Mt.lanes=nt,Mt.return=L,Mt}finally{}}}var Ns=ly(!0),uy=ly(!1),Ln=at(null),yi=null;function jr(e){var r=e.alternate;ct(Ue,Ue.current&1),ct(Ln,e),yi===null&&(r===null||Rs.current!==null||r.memoizedState!==null)&&(yi=e)}function cy(e){if(e.tag===22){if(ct(Ue,Ue.current),ct(Ln,e),yi===null){var r=e.alternate;r!==null&&r.memoizedState!==null&&(yi=e)}}else Dr()}function Dr(){ct(Ue,Ue.current),ct(Ln,Ln.current)}function Gi(e){ut(Ln),yi===e&&(yi=null),ut(Ue)}var Ue=at(0);function oc(e){for(var r=e;r!==null;){if(r.tag===13){var s=r.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||Qd(s)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function sd(e,r,s,l){r=e.memoizedState,s=s(l,r),s=s==null?r:v({},r,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var od={enqueueSetState:function(e,r,s){e=e._reactInternals;var l=An(),h=Rr(l);h.payload=r,s!=null&&(h.callback=s),r=Cr(e,h,l),r!==null&&(Rn(r,e,l),nl(r,e,l))},enqueueReplaceState:function(e,r,s){e=e._reactInternals;var l=An(),h=Rr(l);h.tag=1,h.payload=r,s!=null&&(h.callback=s),r=Cr(e,h,l),r!==null&&(Rn(r,e,l),nl(r,e,l))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var s=An(),l=Rr(s);l.tag=2,r!=null&&(l.callback=r),r=Cr(e,l,s),r!==null&&(Rn(r,e,s),nl(r,e,s))}};function hy(e,r,s,l,h,d,E){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,E):r.prototype&&r.prototype.isPureReactComponent?!Ho(s,l)||!Ho(h,d):!0}function fy(e,r,s,l){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(s,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(s,l),r.state!==e&&od.enqueueReplaceState(r,r.state,null)}function Ba(e,r){var s=r;if("ref"in r){s={};for(var l in r)l!=="ref"&&(s[l]=r[l])}if(e=e.defaultProps){s===r&&(s=v({},s));for(var h in e)s[h]===void 0&&(s[h]=e[h])}return s}var lc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function dy(e){lc(e)}function py(e){console.error(e)}function my(e){lc(e)}function uc(e,r){try{var s=e.onUncaughtError;s(r.value,{componentStack:r.stack})}catch(l){setTimeout(function(){throw l})}}function gy(e,r,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function ld(e,r,s){return s=Rr(s),s.tag=3,s.payload={element:null},s.callback=function(){uc(e,r)},s}function yy(e){return e=Rr(e),e.tag=3,e}function xy(e,r,s,l){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;e.payload=function(){return h(d)},e.callback=function(){gy(r,s,l)}}var E=s.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(e.callback=function(){gy(r,s,l),typeof h!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var b=l.stack;this.componentDidCatch(l.value,{componentStack:b!==null?b:""})})}function Db(e,r,s,l,h){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(r=s.alternate,r!==null&&Wo(r,s,h,!0),s=Ln.current,s!==null){switch(s.tag){case 13:return yi===null?Nd():s.alternate===null&&xe===0&&(xe=3),s.flags&=-257,s.flags|=65536,s.lanes=h,l===Uf?s.flags|=16384:(r=s.updateQueue,r===null?s.updateQueue=new Set([l]):r.add(l),Od(e,l,h)),!1;case 22:return s.flags|=65536,l===Uf?s.flags|=16384:(r=s.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=r):(s=r.retryQueue,s===null?r.retryQueue=new Set([l]):s.add(l)),Od(e,l,h)),!1}throw Error(a(435,s.tag))}return Od(e,l,h),Nd(),!1}if(Kt)return r=Ln.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=h,l!==jf&&(e=Error(a(422),{cause:l}),Xo(Vn(e,s)))):(l!==jf&&(r=Error(a(423),{cause:l}),Xo(Vn(r,s))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=Vn(l,s),h=ld(e.stateNode,l,h),zf(e,h),xe!==4&&(xe=2)),!1;var d=Error(a(520),{cause:l});if(d=Vn(d,s),yl===null?yl=[d]:yl.push(d),xe!==4&&(xe=2),r===null)return!0;l=Vn(l,s),s=r;do{switch(s.tag){case 3:return s.flags|=65536,e=h&-h,s.lanes|=e,e=ld(s.stateNode,l,e),zf(s,e),!1;case 1:if(r=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ur===null||!Ur.has(d))))return s.flags|=65536,h&=-h,s.lanes|=h,h=yy(h),xy(h,e,s,l),zf(s,h),!1}s=s.return}while(s!==null);return!1}var vy=Error(a(461)),Be=!1;function Ge(e,r,s,l){r.child=e===null?uy(r,null,s,l):Ns(r,e.child,s,l)}function _y(e,r,s,l,h){s=s.render;var d=r.ref;if("ref"in l){var E={};for(var b in l)b!=="ref"&&(E[b]=l[b])}else E=l;return Pa(r),l=Kf(e,r,s,E,d,h),b=Hf(),e!==null&&!Be?(Gf(e,r,h),Yi(e,r,h)):(Kt&&b&&Cf(r),r.flags|=1,Ge(e,r,l,h),r.child)}function Ey(e,r,s,l,h){if(e===null){var d=s.type;return typeof d=="function"&&!Sf(d)&&d.defaultProps===void 0&&s.compare===null?(r.tag=15,r.type=d,by(e,r,d,l,h)):(e=$u(s.type,null,l,r,r.mode,h),e.ref=r.ref,e.return=r,r.child=e)}if(d=e.child,!gd(e,h)){var E=d.memoizedProps;if(s=s.compare,s=s!==null?s:Ho,s(E,l)&&e.ref===r.ref)return Yi(e,r,h)}return r.flags|=1,e=Bi(d,l),e.ref=r.ref,e.return=r,r.child=e}function by(e,r,s,l,h){if(e!==null){var d=e.memoizedProps;if(Ho(d,l)&&e.ref===r.ref)if(Be=!1,r.pendingProps=l=d,gd(e,h))(e.flags&131072)!==0&&(Be=!0);else return r.lanes=e.lanes,Yi(e,r,h)}return ud(e,r,s,l,h)}function wy(e,r,s){var l=r.pendingProps,h=l.children,d=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((r.flags&128)!==0){if(l=d!==null?d.baseLanes|s:s,e!==null){for(h=r.child=e.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;r.childLanes=d&~l}else r.childLanes=0,r.child=null;return Ty(e,r,l,s)}if((s&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},e!==null&&Gu(r,d!==null?d.cachePool:null),d!==null?b0(r,d):$f(),cy(r);else return r.lanes=r.childLanes=536870912,Ty(e,r,d!==null?d.baseLanes|s:s,s)}else d!==null?(Gu(r,d.cachePool),b0(r,d),Dr(),r.memoizedState=null):(e!==null&&Gu(r,null),$f(),Dr());return Ge(e,r,h,s),r.child}function Ty(e,r,s,l){var h=kf();return h=h===null?null:{parent:ke._currentValue,pool:h},r.memoizedState={baseLanes:s,cachePool:h},e!==null&&Gu(r,null),$f(),cy(r),e!==null&&Wo(e,r,l,!0),null}function cc(e,r){var s=r.ref;if(s===null)e!==null&&e.ref!==null&&(r.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(r.flags|=4194816)}}function ud(e,r,s,l,h){return Pa(r),s=Kf(e,r,s,l,void 0,h),l=Hf(),e!==null&&!Be?(Gf(e,r,h),Yi(e,r,h)):(Kt&&l&&Cf(r),r.flags|=1,Ge(e,r,s,h),r.child)}function Sy(e,r,s,l,h,d){return Pa(r),r.updateQueue=null,s=T0(r,l,s,h),w0(e),l=Hf(),e!==null&&!Be?(Gf(e,r,d),Yi(e,r,d)):(Kt&&l&&Cf(r),r.flags|=1,Ge(e,r,s,d),r.child)}function Ay(e,r,s,l,h){if(Pa(r),r.stateNode===null){var d=bs,E=s.contextType;typeof E=="object"&&E!==null&&(d=en(E)),d=new s(l,d),r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=od,r.stateNode=d,d._reactInternals=r,d=r.stateNode,d.props=l,d.state=r.memoizedState,d.refs={},Pf(r),E=s.contextType,d.context=typeof E=="object"&&E!==null?en(E):bs,d.state=r.memoizedState,E=s.getDerivedStateFromProps,typeof E=="function"&&(sd(r,s,E,l),d.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(E=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),E!==d.state&&od.enqueueReplaceState(d,d.state,null),rl(r,l,d,h),il(),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308),l=!0}else if(e===null){d=r.stateNode;var b=r.memoizedProps,D=Ba(s,b);d.props=D;var q=d.context,et=s.contextType;E=bs,typeof et=="object"&&et!==null&&(E=en(et));var rt=s.getDerivedStateFromProps;et=typeof rt=="function"||typeof d.getSnapshotBeforeUpdate=="function",b=r.pendingProps!==b,et||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b||q!==E)&&fy(r,d,l,E),Ar=!1;var H=r.memoizedState;d.state=H,rl(r,l,d,h),il(),q=r.memoizedState,b||H!==q||Ar?(typeof rt=="function"&&(sd(r,s,rt,l),q=r.memoizedState),(D=Ar||hy(r,s,D,l,H,q,E))?(et||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(r.flags|=4194308)):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=q),d.props=l,d.state=q,d.context=E,l=D):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{d=r.stateNode,Lf(e,r),E=r.memoizedProps,et=Ba(s,E),d.props=et,rt=r.pendingProps,H=d.context,q=s.contextType,D=bs,typeof q=="object"&&q!==null&&(D=en(q)),b=s.getDerivedStateFromProps,(q=typeof b=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E!==rt||H!==D)&&fy(r,d,l,D),Ar=!1,H=r.memoizedState,d.state=H,rl(r,l,d,h),il();var G=r.memoizedState;E!==rt||H!==G||Ar||e!==null&&e.dependencies!==null&&Ku(e.dependencies)?(typeof b=="function"&&(sd(r,s,b,l),G=r.memoizedState),(et=Ar||hy(r,s,et,l,H,G,D)||e!==null&&e.dependencies!==null&&Ku(e.dependencies))?(q||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,G,D),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,G,D)),typeof d.componentDidUpdate=="function"&&(r.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof d.componentDidUpdate!="function"||E===e.memoizedProps&&H===e.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&H===e.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=G),d.props=l,d.state=G,d.context=D,l=et):(typeof d.componentDidUpdate!="function"||E===e.memoizedProps&&H===e.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&H===e.memoizedState||(r.flags|=1024),l=!1)}return d=l,cc(e,r),l=(r.flags&128)!==0,d||l?(d=r.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:d.render(),r.flags|=1,e!==null&&l?(r.child=Ns(r,e.child,null,h),r.child=Ns(r,null,s,h)):Ge(e,r,s,h),r.memoizedState=d.state,e=r.child):e=Yi(e,r,h),e}function Ry(e,r,s,l){return Qo(),r.flags|=256,Ge(e,r,s,l),r.child}var cd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hd(e){return{baseLanes:e,cachePool:p0()}}function fd(e,r,s){return e=e!==null?e.childLanes&~s:0,r&&(e|=zn),e}function Cy(e,r,s){var l=r.pendingProps,h=!1,d=(r.flags&128)!==0,E;if((E=d)||(E=e!==null&&e.memoizedState===null?!1:(Ue.current&2)!==0),E&&(h=!0,r.flags&=-129),E=(r.flags&32)!==0,r.flags&=-33,e===null){if(Kt){if(h?jr(r):Dr(),Kt){var b=ye,D;if(D=b){t:{for(D=b,b=gi;D.nodeType!==8;){if(!b){b=null;break t}if(D=ni(D.nextSibling),D===null){b=null;break t}}b=D}b!==null?(r.memoizedState={dehydrated:b,treeContext:Ma!==null?{id:$i,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},D=bn(18,null,null,0),D.stateNode=b,D.return=r,r.child=D,fn=r,ye=null,D=!0):D=!1}D||ka(r)}if(b=r.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Qd(b)?r.lanes=32:r.lanes=536870912,null;Gi(r)}return b=l.children,l=l.fallback,h?(Dr(),h=r.mode,b=hc({mode:"hidden",children:b},h),l=Na(l,h,s,null),b.return=r,l.return=r,b.sibling=l,r.child=b,h=r.child,h.memoizedState=hd(s),h.childLanes=fd(e,E,s),r.memoizedState=cd,l):(jr(r),dd(r,b))}if(D=e.memoizedState,D!==null&&(b=D.dehydrated,b!==null)){if(d)r.flags&256?(jr(r),r.flags&=-257,r=pd(e,r,s)):r.memoizedState!==null?(Dr(),r.child=e.child,r.flags|=128,r=null):(Dr(),h=l.fallback,b=r.mode,l=hc({mode:"visible",children:l.children},b),h=Na(h,b,s,null),h.flags|=2,l.return=r,h.return=r,l.sibling=h,r.child=l,Ns(r,e.child,null,s),l=r.child,l.memoizedState=hd(s),l.childLanes=fd(e,E,s),r.memoizedState=cd,r=h);else if(jr(r),Qd(b)){if(E=b.nextSibling&&b.nextSibling.dataset,E)var q=E.dgst;E=q,l=Error(a(419)),l.stack="",l.digest=E,Xo({value:l,source:null,stack:null}),r=pd(e,r,s)}else if(Be||Wo(e,r,s,!1),E=(s&e.childLanes)!==0,Be||E){if(E=re,E!==null&&(l=s&-s,l=(l&42)!==0?1:Io(l),l=(l&(E.suspendedLanes|s))!==0?0:l,l!==0&&l!==D.retryLane))throw D.retryLane=l,Es(e,l),Rn(E,e,l),vy;b.data==="$?"||Nd(),r=pd(e,r,s)}else b.data==="$?"?(r.flags|=192,r.child=e.child,r=null):(e=D.treeContext,ye=ni(b.nextSibling),fn=r,Kt=!0,Va=null,gi=!1,e!==null&&(Un[Pn++]=$i,Un[Pn++]=Fi,Un[Pn++]=Ma,$i=e.id,Fi=e.overflow,Ma=r),r=dd(r,l.children),r.flags|=4096);return r}return h?(Dr(),h=l.fallback,b=r.mode,D=e.child,q=D.sibling,l=Bi(D,{mode:"hidden",children:l.children}),l.subtreeFlags=D.subtreeFlags&65011712,q!==null?h=Bi(q,h):(h=Na(h,b,s,null),h.flags|=2),h.return=r,l.return=r,l.sibling=h,r.child=l,l=h,h=r.child,b=e.child.memoizedState,b===null?b=hd(s):(D=b.cachePool,D!==null?(q=ke._currentValue,D=D.parent!==q?{parent:q,pool:q}:D):D=p0(),b={baseLanes:b.baseLanes|s,cachePool:D}),h.memoizedState=b,h.childLanes=fd(e,E,s),r.memoizedState=cd,l):(jr(r),s=e.child,e=s.sibling,s=Bi(s,{mode:"visible",children:l.children}),s.return=r,s.sibling=null,e!==null&&(E=r.deletions,E===null?(r.deletions=[e],r.flags|=16):E.push(e)),r.child=s,r.memoizedState=null,s)}function dd(e,r){return r=hc({mode:"visible",children:r},e.mode),r.return=e,e.child=r}function hc(e,r){return e=bn(22,e,null,r),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function pd(e,r,s){return Ns(r,e.child,null,s),e=dd(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function Iy(e,r,s){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r),Nf(e.return,r,s)}function md(e,r,s,l,h){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:h}:(d.isBackwards=r,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=s,d.tailMode=h)}function jy(e,r,s){var l=r.pendingProps,h=l.revealOrder,d=l.tail;if(Ge(e,r,l.children,s),l=Ue.current,(l&2)!==0)l=l&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Iy(e,s,r);else if(e.tag===19)Iy(e,s,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break t;for(;e.sibling===null;){if(e.return===null||e.return===r)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(ct(Ue,l),h){case"forwards":for(s=r.child,h=null;s!==null;)e=s.alternate,e!==null&&oc(e)===null&&(h=s),s=s.sibling;s=h,s===null?(h=r.child,r.child=null):(h=s.sibling,s.sibling=null),md(r,!1,h,s,d);break;case"backwards":for(s=null,h=r.child,r.child=null;h!==null;){if(e=h.alternate,e!==null&&oc(e)===null){r.child=h;break}e=h.sibling,h.sibling=s,s=h,h=e}md(r,!0,s,null,d);break;case"together":md(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Yi(e,r,s){if(e!==null&&(r.dependencies=e.dependencies),kr|=r.lanes,(s&r.childLanes)===0)if(e!==null){if(Wo(e,r,s,!1),(s&r.childLanes)===0)return null}else return null;if(e!==null&&r.child!==e.child)throw Error(a(153));if(r.child!==null){for(e=r.child,s=Bi(e,e.pendingProps),r.child=s,s.return=r;e.sibling!==null;)e=e.sibling,s=s.sibling=Bi(e,e.pendingProps),s.return=r;s.sibling=null}return r.child}function gd(e,r){return(e.lanes&r)!==0?!0:(e=e.dependencies,!!(e!==null&&Ku(e)))}function Nb(e,r,s){switch(r.tag){case 3:Lt(r,r.stateNode.containerInfo),Sr(r,ke,e.memoizedState.cache),Qo();break;case 27:case 5:Ni(r);break;case 4:Lt(r,r.stateNode.containerInfo);break;case 10:Sr(r,r.type,r.memoizedProps.value);break;case 13:var l=r.memoizedState;if(l!==null)return l.dehydrated!==null?(jr(r),r.flags|=128,null):(s&r.child.childLanes)!==0?Cy(e,r,s):(jr(r),e=Yi(e,r,s),e!==null?e.sibling:null);jr(r);break;case 19:var h=(e.flags&128)!==0;if(l=(s&r.childLanes)!==0,l||(Wo(e,r,s,!1),l=(s&r.childLanes)!==0),h){if(l)return jy(e,r,s);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),ct(Ue,Ue.current),l)break;return null;case 22:case 23:return r.lanes=0,wy(e,r,s);case 24:Sr(r,ke,e.memoizedState.cache)}return Yi(e,r,s)}function Dy(e,r,s){if(e!==null)if(e.memoizedProps!==r.pendingProps)Be=!0;else{if(!gd(e,s)&&(r.flags&128)===0)return Be=!1,Nb(e,r,s);Be=(e.flags&131072)!==0}else Be=!1,Kt&&(r.flags&1048576)!==0&&o0(r,qu,r.index);switch(r.lanes=0,r.tag){case 16:t:{e=r.pendingProps;var l=r.elementType,h=l._init;if(l=h(l._payload),r.type=l,typeof l=="function")Sf(l)?(e=Ba(l,e),r.tag=1,r=Ay(null,r,l,e,s)):(r.tag=0,r=ud(null,r,l,e,s));else{if(l!=null){if(h=l.$$typeof,h===ot){r.tag=11,r=_y(null,r,l,e,s);break t}else if(h===j){r.tag=14,r=Ey(null,r,l,e,s);break t}}throw r=ue(l)||l,Error(a(306,r,""))}}return r;case 0:return ud(e,r,r.type,r.pendingProps,s);case 1:return l=r.type,h=Ba(l,r.pendingProps),Ay(e,r,l,h,s);case 3:t:{if(Lt(r,r.stateNode.containerInfo),e===null)throw Error(a(387));l=r.pendingProps;var d=r.memoizedState;h=d.element,Lf(e,r),rl(r,l,null,s);var E=r.memoizedState;if(l=E.cache,Sr(r,ke,l),l!==d.cache&&Mf(r,[ke],s,!0),il(),l=E.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:E.cache},r.updateQueue.baseState=d,r.memoizedState=d,r.flags&256){r=Ry(e,r,l,s);break t}else if(l!==h){h=Vn(Error(a(424)),r),Xo(h),r=Ry(e,r,l,s);break t}else{switch(e=r.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ye=ni(e.firstChild),fn=r,Kt=!0,Va=null,gi=!0,s=uy(r,null,l,s),r.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Qo(),l===h){r=Yi(e,r,s);break t}Ge(e,r,l,s)}r=r.child}return r;case 26:return cc(e,r),e===null?(s=V1(r.type,null,r.pendingProps,null))?r.memoizedState=s:Kt||(s=r.type,e=r.pendingProps,l=Sc(_t.current).createElement(s),l[Ee]=r,l[He]=e,Qe(l,s,e),be(l),r.stateNode=l):r.memoizedState=V1(r.type,e.memoizedProps,r.pendingProps,e.memoizedState),null;case 27:return Ni(r),e===null&&Kt&&(l=r.stateNode=N1(r.type,r.pendingProps,_t.current),fn=r,gi=!0,h=ye,zr(r.type)?(Xd=h,ye=ni(l.firstChild)):ye=h),Ge(e,r,r.pendingProps.children,s),cc(e,r),e===null&&(r.flags|=4194304),r.child;case 5:return e===null&&Kt&&((h=l=ye)&&(l=sw(l,r.type,r.pendingProps,gi),l!==null?(r.stateNode=l,fn=r,ye=ni(l.firstChild),gi=!1,h=!0):h=!1),h||ka(r)),Ni(r),h=r.type,d=r.pendingProps,E=e!==null?e.memoizedProps:null,l=d.children,Hd(h,d)?l=null:E!==null&&Hd(h,E)&&(r.flags|=32),r.memoizedState!==null&&(h=Kf(e,r,Tb,null,null,s),Al._currentValue=h),cc(e,r),Ge(e,r,l,s),r.child;case 6:return e===null&&Kt&&((e=s=ye)&&(s=ow(s,r.pendingProps,gi),s!==null?(r.stateNode=s,fn=r,ye=null,e=!0):e=!1),e||ka(r)),null;case 13:return Cy(e,r,s);case 4:return Lt(r,r.stateNode.containerInfo),l=r.pendingProps,e===null?r.child=Ns(r,null,l,s):Ge(e,r,l,s),r.child;case 11:return _y(e,r,r.type,r.pendingProps,s);case 7:return Ge(e,r,r.pendingProps,s),r.child;case 8:return Ge(e,r,r.pendingProps.children,s),r.child;case 12:return Ge(e,r,r.pendingProps.children,s),r.child;case 10:return l=r.pendingProps,Sr(r,r.type,l.value),Ge(e,r,l.children,s),r.child;case 9:return h=r.type._context,l=r.pendingProps.children,Pa(r),h=en(h),l=l(h),r.flags|=1,Ge(e,r,l,s),r.child;case 14:return Ey(e,r,r.type,r.pendingProps,s);case 15:return by(e,r,r.type,r.pendingProps,s);case 19:return jy(e,r,s);case 31:return l=r.pendingProps,s=r.mode,l={mode:l.mode,children:l.children},e===null?(s=hc(l,s),s.ref=r.ref,r.child=s,s.return=r,r=s):(s=Bi(e.child,l),s.ref=r.ref,r.child=s,s.return=r,r=s),r;case 22:return wy(e,r,s);case 24:return Pa(r),l=en(ke),e===null?(h=kf(),h===null&&(h=re,d=Of(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=s),h=d),r.memoizedState={parent:l,cache:h},Pf(r),Sr(r,ke,h)):((e.lanes&s)!==0&&(Lf(e,r),rl(r,null,null,s),il()),h=e.memoizedState,d=r.memoizedState,h.parent!==l?(h={parent:l,cache:l},r.memoizedState=h,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=h),Sr(r,ke,l)):(l=d.cache,Sr(r,ke,l),l!==h.cache&&Mf(r,[ke],s,!0))),Ge(e,r,r.pendingProps.children,s),r.child;case 29:throw r.pendingProps}throw Error(a(156,r.tag))}function Qi(e){e.flags|=4}function Ny(e,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!z1(r)){if(r=Ln.current,r!==null&&((zt&4194048)===zt?yi!==null:(zt&62914560)!==zt&&(zt&536870912)===0||r!==yi))throw el=Uf,m0;e.flags|=8192}}function fc(e,r){r!==null&&(e.flags|=4),e.flags&16384&&(r=e.tag!==22?fr():536870912,e.lanes|=r,ks|=r)}function hl(e,r){if(!Kt)switch(e.tailMode){case"hidden":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function de(e){var r=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(r)for(var h=e.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=s,r}function Mb(e,r,s){var l=r.pendingProps;switch(If(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(r),null;case 1:return de(r),null;case 3:return s=r.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),r.memoizedState.cache!==l&&(r.flags|=2048),Ki(ke),Me(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Yo(r)?Qi(r):e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,c0())),de(r),null;case 26:return s=r.memoizedState,e===null?(Qi(r),s!==null?(de(r),Ny(r,s)):(de(r),r.flags&=-16777217)):s?s!==e.memoizedState?(Qi(r),de(r),Ny(r,s)):(de(r),r.flags&=-16777217):(e.memoizedProps!==l&&Qi(r),de(r),r.flags&=-16777217),null;case 27:Hn(r),s=_t.current;var h=r.type;if(e!==null&&r.stateNode!=null)e.memoizedProps!==l&&Qi(r);else{if(!l){if(r.stateNode===null)throw Error(a(166));return de(r),null}e=gt.current,Yo(r)?l0(r):(e=N1(h,l,s),r.stateNode=e,Qi(r))}return de(r),null;case 5:if(Hn(r),s=r.type,e!==null&&r.stateNode!=null)e.memoizedProps!==l&&Qi(r);else{if(!l){if(r.stateNode===null)throw Error(a(166));return de(r),null}if(e=gt.current,Yo(r))l0(r);else{switch(h=Sc(_t.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?h.createElement(s,{is:l.is}):h.createElement(s)}}e[Ee]=r,e[He]=l;t:for(h=r.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===r)break t;for(;h.sibling===null;){if(h.return===null||h.return===r)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}r.stateNode=e;t:switch(Qe(e,s,l),s){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Qi(r)}}return de(r),r.flags&=-16777217,null;case 6:if(e&&r.stateNode!=null)e.memoizedProps!==l&&Qi(r);else{if(typeof l!="string"&&r.stateNode===null)throw Error(a(166));if(e=_t.current,Yo(r)){if(e=r.stateNode,s=r.memoizedProps,l=null,h=fn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[Ee]=r,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||S1(e.nodeValue,s)),e||ka(r)}else e=Sc(e).createTextNode(l),e[Ee]=r,r.stateNode=e}return de(r),null;case 13:if(l=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Yo(r),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[Ee]=r}else Qo(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;de(r),h=!1}else h=c0(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return r.flags&256?(Gi(r),r):(Gi(r),null)}if(Gi(r),(r.flags&128)!==0)return r.lanes=s,r;if(s=l!==null,e=e!==null&&e.memoizedState!==null,s){l=r.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return s!==e&&s&&(r.child.flags|=8192),fc(r,r.updateQueue),de(r),null;case 4:return Me(),e===null&&Bd(r.stateNode.containerInfo),de(r),null;case 10:return Ki(r.type),de(r),null;case 19:if(ut(Ue),h=r.memoizedState,h===null)return de(r),null;if(l=(r.flags&128)!==0,d=h.rendering,d===null)if(l)hl(h,!1);else{if(xe!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(d=oc(e),d!==null){for(r.flags|=128,hl(h,!1),e=d.updateQueue,r.updateQueue=e,fc(r,e),r.subtreeFlags=0,e=s,s=r.child;s!==null;)s0(s,e),s=s.sibling;return ct(Ue,Ue.current&1|2),r.child}e=e.sibling}h.tail!==null&&dn()>mc&&(r.flags|=128,l=!0,hl(h,!1),r.lanes=4194304)}else{if(!l)if(e=oc(d),e!==null){if(r.flags|=128,l=!0,e=e.updateQueue,r.updateQueue=e,fc(r,e),hl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!Kt)return de(r),null}else 2*dn()-h.renderingStartTime>mc&&s!==536870912&&(r.flags|=128,l=!0,hl(h,!1),r.lanes=4194304);h.isBackwards?(d.sibling=r.child,r.child=d):(e=h.last,e!==null?e.sibling=d:r.child=d,h.last=d)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=dn(),r.sibling=null,e=Ue.current,ct(Ue,l?e&1|2:e&1),r):(de(r),null);case 22:case 23:return Gi(r),Ff(),l=r.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(r.flags|=8192):l&&(r.flags|=8192),l?(s&536870912)!==0&&(r.flags&128)===0&&(de(r),r.subtreeFlags&6&&(r.flags|=8192)):de(r),s=r.updateQueue,s!==null&&fc(r,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),l!==s&&(r.flags|=2048),e!==null&&ut(La),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),r.memoizedState.cache!==s&&(r.flags|=2048),Ki(ke),de(r),null;case 25:return null;case 30:return null}throw Error(a(156,r.tag))}function Ob(e,r){switch(If(r),r.tag){case 1:return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return Ki(ke),Me(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 26:case 27:case 5:return Hn(r),null;case 13:if(Gi(r),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(a(340));Qo()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return ut(Ue),null;case 4:return Me(),null;case 10:return Ki(r.type),null;case 22:case 23:return Gi(r),Ff(),e!==null&&ut(La),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 24:return Ki(ke),null;case 25:return null;default:return null}}function My(e,r){switch(If(r),r.tag){case 3:Ki(ke),Me();break;case 26:case 27:case 5:Hn(r);break;case 4:Me();break;case 13:Gi(r);break;case 19:ut(Ue);break;case 10:Ki(r.type);break;case 22:case 23:Gi(r),Ff(),e!==null&&ut(La);break;case 24:Ki(ke)}}function fl(e,r){try{var s=r.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var h=l.next;s=h;do{if((s.tag&e)===e){l=void 0;var d=s.create,E=s.inst;l=d(),E.destroy=l}s=s.next}while(s!==h)}}catch(b){ee(r,r.return,b)}}function Nr(e,r,s){try{var l=r.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&e)===e){var E=l.inst,b=E.destroy;if(b!==void 0){E.destroy=void 0,h=r;var D=s,q=b;try{q()}catch(et){ee(h,D,et)}}}l=l.next}while(l!==d)}}catch(et){ee(r,r.return,et)}}function Oy(e){var r=e.updateQueue;if(r!==null){var s=e.stateNode;try{E0(r,s)}catch(l){ee(e,e.return,l)}}}function Vy(e,r,s){s.props=Ba(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){ee(e,r,l)}}function dl(e,r){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(h){ee(e,r,h)}}function xi(e,r){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(h){ee(e,r,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){ee(e,r,h)}else s.current=null}function ky(e){var r=e.type,s=e.memoizedProps,l=e.stateNode;try{t:switch(r){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(h){ee(e,e.return,h)}}function yd(e,r,s){try{var l=e.stateNode;ew(l,e.type,s,r),l[He]=r}catch(h){ee(e,e.return,h)}}function Uy(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&zr(e.type)||e.tag===4}function xd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Uy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&zr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vd(e,r,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,r?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,r):(r=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,r.appendChild(e),s=s._reactRootContainer,s!=null||r.onclick!==null||(r.onclick=Tc));else if(l!==4&&(l===27&&zr(e.type)&&(s=e.stateNode,r=null),e=e.child,e!==null))for(vd(e,r,s),e=e.sibling;e!==null;)vd(e,r,s),e=e.sibling}function dc(e,r,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,r?s.insertBefore(e,r):s.appendChild(e);else if(l!==4&&(l===27&&zr(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(dc(e,r,s),e=e.sibling;e!==null;)dc(e,r,s),e=e.sibling}function Py(e){var r=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,h=r.attributes;h.length;)r.removeAttributeNode(h[0]);Qe(r,l,s),r[Ee]=e,r[He]=s}catch(d){ee(e,e.return,d)}}var Xi=!1,Se=!1,_d=!1,Ly=typeof WeakSet=="function"?WeakSet:Set,$e=null;function Vb(e,r){if(e=e.containerInfo,qd=Dc,e=Xg(e),xf(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break t}var E=0,b=-1,D=-1,q=0,et=0,rt=e,H=null;e:for(;;){for(var G;rt!==s||h!==0&&rt.nodeType!==3||(b=E+h),rt!==d||l!==0&&rt.nodeType!==3||(D=E+l),rt.nodeType===3&&(E+=rt.nodeValue.length),(G=rt.firstChild)!==null;)H=rt,rt=G;for(;;){if(rt===e)break e;if(H===s&&++q===h&&(b=E),H===d&&++et===l&&(D=E),(G=rt.nextSibling)!==null)break;rt=H,H=rt.parentNode}rt=G}s=b===-1||D===-1?null:{start:b,end:D}}else s=null}s=s||{start:0,end:0}}else s=null;for(Kd={focusedElem:e,selectionRange:s},Dc=!1,$e=r;$e!==null;)if(r=$e,e=r.child,(r.subtreeFlags&1024)!==0&&e!==null)e.return=r,$e=e;else for(;$e!==null;){switch(r=$e,d=r.alternate,e=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,s=r,h=d.memoizedProps,d=d.memoizedState,l=s.stateNode;try{var Tt=Ba(s.type,h,s.elementType===s.type);e=l.getSnapshotBeforeUpdate(Tt,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(Et){ee(s,s.return,Et)}}break;case 3:if((e&1024)!==0){if(e=r.stateNode.containerInfo,s=e.nodeType,s===9)Yd(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Yd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=r.sibling,e!==null){e.return=r.return,$e=e;break}$e=r.return}}function zy(e,r,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Mr(e,s),l&4&&fl(5,s);break;case 1:if(Mr(e,s),l&4)if(e=s.stateNode,r===null)try{e.componentDidMount()}catch(E){ee(s,s.return,E)}else{var h=Ba(s.type,r.memoizedProps);r=r.memoizedState;try{e.componentDidUpdate(h,r,e.__reactInternalSnapshotBeforeUpdate)}catch(E){ee(s,s.return,E)}}l&64&&Oy(s),l&512&&dl(s,s.return);break;case 3:if(Mr(e,s),l&64&&(e=s.updateQueue,e!==null)){if(r=null,s.child!==null)switch(s.child.tag){case 27:case 5:r=s.child.stateNode;break;case 1:r=s.child.stateNode}try{E0(e,r)}catch(E){ee(s,s.return,E)}}break;case 27:r===null&&l&4&&Py(s);case 26:case 5:Mr(e,s),r===null&&l&4&&ky(s),l&512&&dl(s,s.return);break;case 12:Mr(e,s);break;case 13:Mr(e,s),l&4&&Fy(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=qb.bind(null,s),lw(e,s))));break;case 22:if(l=s.memoizedState!==null||Xi,!l){r=r!==null&&r.memoizedState!==null||Se,h=Xi;var d=Se;Xi=l,(Se=r)&&!d?Or(e,s,(s.subtreeFlags&8772)!==0):Mr(e,s),Xi=h,Se=d}break;case 30:break;default:Mr(e,s)}}function By(e){var r=e.alternate;r!==null&&(e.alternate=null,By(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&ss(r)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ce=null,mn=!1;function Wi(e,r,s){for(s=s.child;s!==null;)$y(e,r,s),s=s.sibling}function $y(e,r,s){if(Je&&typeof Je.onCommitFiberUnmount=="function")try{Je.onCommitFiberUnmount(ur,s)}catch{}switch(s.tag){case 26:Se||xi(s,r),Wi(e,r,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Se||xi(s,r);var l=ce,h=mn;zr(s.type)&&(ce=s.stateNode,mn=!1),Wi(e,r,s),bl(s.stateNode),ce=l,mn=h;break;case 5:Se||xi(s,r);case 6:if(l=ce,h=mn,ce=null,Wi(e,r,s),ce=l,mn=h,ce!==null)if(mn)try{(ce.nodeType===9?ce.body:ce.nodeName==="HTML"?ce.ownerDocument.body:ce).removeChild(s.stateNode)}catch(d){ee(s,r,d)}else try{ce.removeChild(s.stateNode)}catch(d){ee(s,r,d)}break;case 18:ce!==null&&(mn?(e=ce,j1(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),jl(e)):j1(ce,s.stateNode));break;case 4:l=ce,h=mn,ce=s.stateNode.containerInfo,mn=!0,Wi(e,r,s),ce=l,mn=h;break;case 0:case 11:case 14:case 15:Se||Nr(2,s,r),Se||Nr(4,s,r),Wi(e,r,s);break;case 1:Se||(xi(s,r),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Vy(s,r,l)),Wi(e,r,s);break;case 21:Wi(e,r,s);break;case 22:Se=(l=Se)||s.memoizedState!==null,Wi(e,r,s),Se=l;break;default:Wi(e,r,s)}}function Fy(e,r){if(r.memoizedState===null&&(e=r.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{jl(e)}catch(s){ee(r,r.return,s)}}function kb(e){switch(e.tag){case 13:case 19:var r=e.stateNode;return r===null&&(r=e.stateNode=new Ly),r;case 22:return e=e.stateNode,r=e._retryCache,r===null&&(r=e._retryCache=new Ly),r;default:throw Error(a(435,e.tag))}}function Ed(e,r){var s=kb(e);r.forEach(function(l){var h=Kb.bind(null,e,l);s.has(l)||(s.add(l),l.then(h,h))})}function wn(e,r){var s=r.deletions;if(s!==null)for(var l=0;l<s.length;l++){var h=s[l],d=e,E=r,b=E;t:for(;b!==null;){switch(b.tag){case 27:if(zr(b.type)){ce=b.stateNode,mn=!1;break t}break;case 5:ce=b.stateNode,mn=!1;break t;case 3:case 4:ce=b.stateNode.containerInfo,mn=!0;break t}b=b.return}if(ce===null)throw Error(a(160));$y(d,E,h),ce=null,mn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)qy(r,e),r=r.sibling}var ei=null;function qy(e,r){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:wn(r,e),Tn(e),l&4&&(Nr(3,e,e.return),fl(3,e),Nr(5,e,e.return));break;case 1:wn(r,e),Tn(e),l&512&&(Se||s===null||xi(s,s.return)),l&64&&Xi&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var h=ei;if(wn(r,e),Tn(e),l&512&&(Se||s===null||xi(s,s.return)),l&4){var d=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){t:{l=e.type,s=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[mr]||d[Ee]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),Qe(d,l,s),d[Ee]=e,be(d),l=d;break t;case"link":var E=P1("link","href",h).get(l+(s.href||""));if(E){for(var b=0;b<E.length;b++)if(d=E[b],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){E.splice(b,1);break e}}d=h.createElement(l),Qe(d,l,s),h.head.appendChild(d);break;case"meta":if(E=P1("meta","content",h).get(l+(s.content||""))){for(b=0;b<E.length;b++)if(d=E[b],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){E.splice(b,1);break e}}d=h.createElement(l),Qe(d,l,s),h.head.appendChild(d);break;default:throw Error(a(468,l))}d[Ee]=e,be(d),l=d}e.stateNode=l}else L1(h,e.type,e.stateNode);else e.stateNode=U1(h,l,e.memoizedProps);else d!==l?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,l===null?L1(h,e.type,e.stateNode):U1(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&yd(e,e.memoizedProps,s.memoizedProps)}break;case 27:wn(r,e),Tn(e),l&512&&(Se||s===null||xi(s,s.return)),s!==null&&l&4&&yd(e,e.memoizedProps,s.memoizedProps);break;case 5:if(wn(r,e),Tn(e),l&512&&(Se||s===null||xi(s,s.return)),e.flags&32){h=e.stateNode;try{Mn(h,"")}catch(G){ee(e,e.return,G)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,yd(e,h,s!==null?s.memoizedProps:h)),l&1024&&(_d=!0);break;case 6:if(wn(r,e),Tn(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(G){ee(e,e.return,G)}}break;case 3:if(Cc=null,h=ei,ei=Ac(r.containerInfo),wn(r,e),ei=h,Tn(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{jl(r.containerInfo)}catch(G){ee(e,e.return,G)}_d&&(_d=!1,Ky(e));break;case 4:l=ei,ei=Ac(e.stateNode.containerInfo),wn(r,e),Tn(e),ei=l;break;case 12:wn(r,e),Tn(e);break;case 13:wn(r,e),Tn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Rd=dn()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ed(e,l)));break;case 22:h=e.memoizedState!==null;var D=s!==null&&s.memoizedState!==null,q=Xi,et=Se;if(Xi=q||h,Se=et||D,wn(r,e),Se=et,Xi=q,Tn(e),l&8192)t:for(r=e.stateNode,r._visibility=h?r._visibility&-2:r._visibility|1,h&&(s===null||D||Xi||Se||$a(e)),s=null,r=e;;){if(r.tag===5||r.tag===26){if(s===null){D=s=r;try{if(d=D.stateNode,h)E=d.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{b=D.stateNode;var rt=D.memoizedProps.style,H=rt!=null&&rt.hasOwnProperty("display")?rt.display:null;b.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch(G){ee(D,D.return,G)}}}else if(r.tag===6){if(s===null){D=r;try{D.stateNode.nodeValue=h?"":D.memoizedProps}catch(G){ee(D,D.return,G)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===e)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break t;for(;r.sibling===null;){if(r.return===null||r.return===e)break t;s===r&&(s=null),r=r.return}s===r&&(s=null),r.sibling.return=r.return,r=r.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Ed(e,s))));break;case 19:wn(r,e),Tn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ed(e,l)));break;case 30:break;case 21:break;default:wn(r,e),Tn(e)}}function Tn(e){var r=e.flags;if(r&2){try{for(var s,l=e.return;l!==null;){if(Uy(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var h=s.stateNode,d=xd(e);dc(e,d,h);break;case 5:var E=s.stateNode;s.flags&32&&(Mn(E,""),s.flags&=-33);var b=xd(e);dc(e,b,E);break;case 3:case 4:var D=s.stateNode.containerInfo,q=xd(e);vd(e,q,D);break;default:throw Error(a(161))}}catch(et){ee(e,e.return,et)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function Ky(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var r=e;Ky(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),e=e.sibling}}function Mr(e,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)zy(e,r.alternate,r),r=r.sibling}function $a(e){for(e=e.child;e!==null;){var r=e;switch(r.tag){case 0:case 11:case 14:case 15:Nr(4,r,r.return),$a(r);break;case 1:xi(r,r.return);var s=r.stateNode;typeof s.componentWillUnmount=="function"&&Vy(r,r.return,s),$a(r);break;case 27:bl(r.stateNode);case 26:case 5:xi(r,r.return),$a(r);break;case 22:r.memoizedState===null&&$a(r);break;case 30:$a(r);break;default:$a(r)}e=e.sibling}}function Or(e,r,s){for(s=s&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var l=r.alternate,h=e,d=r,E=d.flags;switch(d.tag){case 0:case 11:case 15:Or(h,d,s),fl(4,d);break;case 1:if(Or(h,d,s),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(q){ee(l,l.return,q)}if(l=d,h=l.updateQueue,h!==null){var b=l.stateNode;try{var D=h.shared.hiddenCallbacks;if(D!==null)for(h.shared.hiddenCallbacks=null,h=0;h<D.length;h++)_0(D[h],b)}catch(q){ee(l,l.return,q)}}s&&E&64&&Oy(d),dl(d,d.return);break;case 27:Py(d);case 26:case 5:Or(h,d,s),s&&l===null&&E&4&&ky(d),dl(d,d.return);break;case 12:Or(h,d,s);break;case 13:Or(h,d,s),s&&E&4&&Fy(h,d);break;case 22:d.memoizedState===null&&Or(h,d,s),dl(d,d.return);break;case 30:break;default:Or(h,d,s)}r=r.sibling}}function bd(e,r){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(e=r.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&Zo(s))}function wd(e,r){e=null,r.alternate!==null&&(e=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==e&&(r.refCount++,e!=null&&Zo(e))}function vi(e,r,s,l){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Hy(e,r,s,l),r=r.sibling}function Hy(e,r,s,l){var h=r.flags;switch(r.tag){case 0:case 11:case 15:vi(e,r,s,l),h&2048&&fl(9,r);break;case 1:vi(e,r,s,l);break;case 3:vi(e,r,s,l),h&2048&&(e=null,r.alternate!==null&&(e=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==e&&(r.refCount++,e!=null&&Zo(e)));break;case 12:if(h&2048){vi(e,r,s,l),e=r.stateNode;try{var d=r.memoizedProps,E=d.id,b=d.onPostCommit;typeof b=="function"&&b(E,r.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(D){ee(r,r.return,D)}}else vi(e,r,s,l);break;case 13:vi(e,r,s,l);break;case 23:break;case 22:d=r.stateNode,E=r.alternate,r.memoizedState!==null?d._visibility&2?vi(e,r,s,l):pl(e,r):d._visibility&2?vi(e,r,s,l):(d._visibility|=2,Ms(e,r,s,l,(r.subtreeFlags&10256)!==0)),h&2048&&bd(E,r);break;case 24:vi(e,r,s,l),h&2048&&wd(r.alternate,r);break;default:vi(e,r,s,l)}}function Ms(e,r,s,l,h){for(h=h&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var d=e,E=r,b=s,D=l,q=E.flags;switch(E.tag){case 0:case 11:case 15:Ms(d,E,b,D,h),fl(8,E);break;case 23:break;case 22:var et=E.stateNode;E.memoizedState!==null?et._visibility&2?Ms(d,E,b,D,h):pl(d,E):(et._visibility|=2,Ms(d,E,b,D,h)),h&&q&2048&&bd(E.alternate,E);break;case 24:Ms(d,E,b,D,h),h&&q&2048&&wd(E.alternate,E);break;default:Ms(d,E,b,D,h)}r=r.sibling}}function pl(e,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var s=e,l=r,h=l.flags;switch(l.tag){case 22:pl(s,l),h&2048&&bd(l.alternate,l);break;case 24:pl(s,l),h&2048&&wd(l.alternate,l);break;default:pl(s,l)}r=r.sibling}}var ml=8192;function Os(e){if(e.subtreeFlags&ml)for(e=e.child;e!==null;)Gy(e),e=e.sibling}function Gy(e){switch(e.tag){case 26:Os(e),e.flags&ml&&e.memoizedState!==null&&Ew(ei,e.memoizedState,e.memoizedProps);break;case 5:Os(e);break;case 3:case 4:var r=ei;ei=Ac(e.stateNode.containerInfo),Os(e),ei=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=ml,ml=16777216,Os(e),ml=r):Os(e));break;default:Os(e)}}function Yy(e){var r=e.alternate;if(r!==null&&(e=r.child,e!==null)){r.child=null;do r=e.sibling,e.sibling=null,e=r;while(e!==null)}}function gl(e){var r=e.deletions;if((e.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var l=r[s];$e=l,Xy(l,e)}Yy(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Qy(e),e=e.sibling}function Qy(e){switch(e.tag){case 0:case 11:case 15:gl(e),e.flags&2048&&Nr(9,e,e.return);break;case 3:gl(e);break;case 12:gl(e);break;case 22:var r=e.stateNode;e.memoizedState!==null&&r._visibility&2&&(e.return===null||e.return.tag!==13)?(r._visibility&=-3,pc(e)):gl(e);break;default:gl(e)}}function pc(e){var r=e.deletions;if((e.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var l=r[s];$e=l,Xy(l,e)}Yy(e)}for(e=e.child;e!==null;){switch(r=e,r.tag){case 0:case 11:case 15:Nr(8,r,r.return),pc(r);break;case 22:s=r.stateNode,s._visibility&2&&(s._visibility&=-3,pc(r));break;default:pc(r)}e=e.sibling}}function Xy(e,r){for(;$e!==null;){var s=$e;switch(s.tag){case 0:case 11:case 15:Nr(8,s,r);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Zo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,$e=l;else t:for(s=e;$e!==null;){l=$e;var h=l.sibling,d=l.return;if(By(l),l===s){$e=null;break t}if(h!==null){h.return=d,$e=h;break t}$e=d}}}var Ub={getCacheForType:function(e){var r=en(ke),s=r.data.get(e);return s===void 0&&(s=e(),r.data.set(e,s)),s}},Pb=typeof WeakMap=="function"?WeakMap:Map,Qt=0,re=null,Vt=null,zt=0,Xt=0,Sn=null,Vr=!1,Vs=!1,Td=!1,Zi=0,xe=0,kr=0,Fa=0,Sd=0,zn=0,ks=0,yl=null,gn=null,Ad=!1,Rd=0,mc=1/0,gc=null,Ur=null,Ye=0,Pr=null,Us=null,Ps=0,Cd=0,Id=null,Wy=null,xl=0,jd=null;function An(){if((Qt&2)!==0&&zt!==0)return zt&-zt;if(tt.T!==null){var e=Ss;return e!==0?e:Ud()}return Oi()}function Zy(){zn===0&&(zn=(zt&536870912)===0||Kt?Co():536870912);var e=Ln.current;return e!==null&&(e.flags|=32),zn}function Rn(e,r,s){(e===re&&(Xt===2||Xt===9)||e.cancelPendingCommit!==null)&&(Ls(e,0),Lr(e,zt,zn,!1)),_e(e,s),((Qt&2)===0||e!==re)&&(e===re&&((Qt&2)===0&&(Fa|=s),xe===4&&Lr(e,zt,zn,!1)),_i(e))}function Jy(e,r,s){if((Qt&6)!==0)throw Error(a(327));var l=!s&&(r&124)===0&&(r&e.expiredLanes)===0||hr(e,r),h=l?Bb(e,r):Md(e,r,!0),d=l;do{if(h===0){Vs&&!l&&Lr(e,r,0,!1);break}else{if(s=e.current.alternate,d&&!Lb(s)){h=Md(e,r,!1),d=!1;continue}if(h===2){if(d=r,e.errorRecoveryDisabledLanes&d)var E=0;else E=e.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){r=E;t:{var b=e;h=yl;var D=b.current.memoizedState.isDehydrated;if(D&&(Ls(b,E).flags|=256),E=Md(b,E,!1),E!==2){if(Td&&!D){b.errorRecoveryDisabledLanes|=d,Fa|=d,h=4;break t}d=gn,gn=h,d!==null&&(gn===null?gn=d:gn.push.apply(gn,d))}h=E}if(d=!1,h!==2)continue}}if(h===1){Ls(e,0),Lr(e,r,0,!0);break}t:{switch(l=e,d=h,d){case 0:case 1:throw Error(a(345));case 4:if((r&4194048)!==r)break;case 6:Lr(l,r,zn,!Vr);break t;case 2:gn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((r&62914560)===r&&(h=Rd+300-dn(),10<h)){if(Lr(l,r,zn,!Vr),Dn(l,0,!0)!==0)break t;l.timeoutHandle=C1(t1.bind(null,l,s,gn,gc,Ad,r,zn,Fa,ks,Vr,d,2,-0,0),h);break t}t1(l,s,gn,gc,Ad,r,zn,Fa,ks,Vr,d,0,-0,0)}}break}while(!0);_i(e)}function t1(e,r,s,l,h,d,E,b,D,q,et,rt,H,G){if(e.timeoutHandle=-1,rt=r.subtreeFlags,(rt&8192||(rt&16785408)===16785408)&&(Sl={stylesheets:null,count:0,unsuspend:_w},Gy(r),rt=bw(),rt!==null)){e.cancelPendingCommit=rt(o1.bind(null,e,r,d,s,l,h,E,b,D,et,1,H,G)),Lr(e,d,E,!q);return}o1(e,r,d,s,l,h,E,b,D)}function Lb(e){for(var r=e;;){var s=r.tag;if((s===0||s===11||s===15)&&r.flags&16384&&(s=r.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var h=s[l],d=h.getSnapshot;h=h.value;try{if(!En(d(),h))return!1}catch{return!1}}if(s=r.child,r.subtreeFlags&16384&&s!==null)s.return=r,r=s;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Lr(e,r,s,l){r&=~Sd,r&=~Fa,e.suspendedLanes|=r,e.pingedLanes&=~r,l&&(e.warmLanes|=r),l=e.expirationTimes;for(var h=r;0<h;){var d=31-ln(h),E=1<<d;l[d]=-1,h&=~E}s!==0&&dr(e,s,r)}function yc(){return(Qt&6)===0?(vl(0),!1):!0}function Dd(){if(Vt!==null){if(Xt===0)var e=Vt.return;else e=Vt,qi=Ua=null,Yf(e),Ds=null,ul=0,e=Vt;for(;e!==null;)My(e.alternate,e),e=e.return;Vt=null}}function Ls(e,r){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,iw(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Dd(),re=e,Vt=s=Bi(e.current,null),zt=r,Xt=0,Sn=null,Vr=!1,Vs=hr(e,r),Td=!1,ks=zn=Sd=Fa=kr=xe=0,gn=yl=null,Ad=!1,(r&8)!==0&&(r|=r&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=r;0<l;){var h=31-ln(l),d=1<<h;r|=e[h],l&=~d}return Zi=r,Lu(),s}function e1(e,r){Nt=null,tt.H=rc,r===tl||r===Yu?(r=x0(),Xt=3):r===m0?(r=x0(),Xt=4):Xt=r===vy?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Sn=r,Vt===null&&(xe=1,uc(e,Vn(r,e.current)))}function n1(){var e=tt.H;return tt.H=rc,e===null?rc:e}function i1(){var e=tt.A;return tt.A=Ub,e}function Nd(){xe=4,Vr||(zt&4194048)!==zt&&Ln.current!==null||(Vs=!0),(kr&134217727)===0&&(Fa&134217727)===0||re===null||Lr(re,zt,zn,!1)}function Md(e,r,s){var l=Qt;Qt|=2;var h=n1(),d=i1();(re!==e||zt!==r)&&(gc=null,Ls(e,r)),r=!1;var E=xe;t:do try{if(Xt!==0&&Vt!==null){var b=Vt,D=Sn;switch(Xt){case 8:Dd(),E=6;break t;case 3:case 2:case 9:case 6:Ln.current===null&&(r=!0);var q=Xt;if(Xt=0,Sn=null,zs(e,b,D,q),s&&Vs){E=0;break t}break;default:q=Xt,Xt=0,Sn=null,zs(e,b,D,q)}}zb(),E=xe;break}catch(et){e1(e,et)}while(!0);return r&&e.shellSuspendCounter++,qi=Ua=null,Qt=l,tt.H=h,tt.A=d,Vt===null&&(re=null,zt=0,Lu()),E}function zb(){for(;Vt!==null;)r1(Vt)}function Bb(e,r){var s=Qt;Qt|=2;var l=n1(),h=i1();re!==e||zt!==r?(gc=null,mc=dn()+500,Ls(e,r)):Vs=hr(e,r);t:do try{if(Xt!==0&&Vt!==null){r=Vt;var d=Sn;e:switch(Xt){case 1:Xt=0,Sn=null,zs(e,r,d,1);break;case 2:case 9:if(g0(d)){Xt=0,Sn=null,a1(r);break}r=function(){Xt!==2&&Xt!==9||re!==e||(Xt=7),_i(e)},d.then(r,r);break t;case 3:Xt=7;break t;case 4:Xt=5;break t;case 7:g0(d)?(Xt=0,Sn=null,a1(r)):(Xt=0,Sn=null,zs(e,r,d,7));break;case 5:var E=null;switch(Vt.tag){case 26:E=Vt.memoizedState;case 5:case 27:var b=Vt;if(!E||z1(E)){Xt=0,Sn=null;var D=b.sibling;if(D!==null)Vt=D;else{var q=b.return;q!==null?(Vt=q,xc(q)):Vt=null}break e}}Xt=0,Sn=null,zs(e,r,d,5);break;case 6:Xt=0,Sn=null,zs(e,r,d,6);break;case 8:Dd(),xe=6;break t;default:throw Error(a(462))}}$b();break}catch(et){e1(e,et)}while(!0);return qi=Ua=null,tt.H=l,tt.A=h,Qt=s,Vt!==null?0:(re=null,zt=0,Lu(),xe)}function $b(){for(;Vt!==null&&!of();)r1(Vt)}function r1(e){var r=Dy(e.alternate,e,Zi);e.memoizedProps=e.pendingProps,r===null?xc(e):Vt=r}function a1(e){var r=e,s=r.alternate;switch(r.tag){case 15:case 0:r=Sy(s,r,r.pendingProps,r.type,void 0,zt);break;case 11:r=Sy(s,r,r.pendingProps,r.type.render,r.ref,zt);break;case 5:Yf(r);default:My(s,r),r=Vt=s0(r,Zi),r=Dy(s,r,Zi)}e.memoizedProps=e.pendingProps,r===null?xc(e):Vt=r}function zs(e,r,s,l){qi=Ua=null,Yf(r),Ds=null,ul=0;var h=r.return;try{if(Db(e,h,r,s,zt)){xe=1,uc(e,Vn(s,e.current)),Vt=null;return}}catch(d){if(h!==null)throw Vt=h,d;xe=1,uc(e,Vn(s,e.current)),Vt=null;return}r.flags&32768?(Kt||l===1?e=!0:Vs||(zt&536870912)!==0?e=!1:(Vr=e=!0,(l===2||l===9||l===3||l===6)&&(l=Ln.current,l!==null&&l.tag===13&&(l.flags|=16384))),s1(r,e)):xc(r)}function xc(e){var r=e;do{if((r.flags&32768)!==0){s1(r,Vr);return}e=r.return;var s=Mb(r.alternate,r,Zi);if(s!==null){Vt=s;return}if(r=r.sibling,r!==null){Vt=r;return}Vt=r=e}while(r!==null);xe===0&&(xe=5)}function s1(e,r){do{var s=Ob(e.alternate,e);if(s!==null){s.flags&=32767,Vt=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!r&&(e=e.sibling,e!==null)){Vt=e;return}Vt=e=s}while(e!==null);xe=6,Vt=null}function o1(e,r,s,l,h,d,E,b,D){e.cancelPendingCommit=null;do vc();while(Ye!==0);if((Qt&6)!==0)throw Error(a(327));if(r!==null){if(r===e.current)throw Error(a(177));if(d=r.lanes|r.childLanes,d|=wf,bu(e,s,d,E,b,D),e===re&&(Vt=re=null,zt=0),Us=r,Pr=e,Ps=s,Cd=d,Id=h,Wy=l,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Hb(Mi,function(){return f1(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||l){l=tt.T,tt.T=null,h=ht.p,ht.p=2,E=Qt,Qt|=4;try{Vb(e,r,s)}finally{Qt=E,ht.p=h,tt.T=l}}Ye=1,l1(),u1(),c1()}}function l1(){if(Ye===1){Ye=0;var e=Pr,r=Us,s=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||s){s=tt.T,tt.T=null;var l=ht.p;ht.p=2;var h=Qt;Qt|=4;try{qy(r,e);var d=Kd,E=Xg(e.containerInfo),b=d.focusedElem,D=d.selectionRange;if(E!==b&&b&&b.ownerDocument&&Qg(b.ownerDocument.documentElement,b)){if(D!==null&&xf(b)){var q=D.start,et=D.end;if(et===void 0&&(et=q),"selectionStart"in b)b.selectionStart=q,b.selectionEnd=Math.min(et,b.value.length);else{var rt=b.ownerDocument||document,H=rt&&rt.defaultView||window;if(H.getSelection){var G=H.getSelection(),Tt=b.textContent.length,Et=Math.min(D.start,Tt),te=D.end===void 0?Et:Math.min(D.end,Tt);!G.extend&&Et>te&&(E=te,te=Et,Et=E);var L=Yg(b,Et),U=Yg(b,te);if(L&&U&&(G.rangeCount!==1||G.anchorNode!==L.node||G.anchorOffset!==L.offset||G.focusNode!==U.node||G.focusOffset!==U.offset)){var $=rt.createRange();$.setStart(L.node,L.offset),G.removeAllRanges(),Et>te?(G.addRange($),G.extend(U.node,U.offset)):($.setEnd(U.node,U.offset),G.addRange($))}}}}for(rt=[],G=b;G=G.parentNode;)G.nodeType===1&&rt.push({element:G,left:G.scrollLeft,top:G.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<rt.length;b++){var nt=rt[b];nt.element.scrollLeft=nt.left,nt.element.scrollTop=nt.top}}Dc=!!qd,Kd=qd=null}finally{Qt=h,ht.p=l,tt.T=s}}e.current=r,Ye=2}}function u1(){if(Ye===2){Ye=0;var e=Pr,r=Us,s=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||s){s=tt.T,tt.T=null;var l=ht.p;ht.p=2;var h=Qt;Qt|=4;try{zy(e,r.alternate,r)}finally{Qt=h,ht.p=l,tt.T=s}}Ye=3}}function c1(){if(Ye===4||Ye===3){Ye=0,Ao();var e=Pr,r=Us,s=Ps,l=Wy;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Ye=5:(Ye=0,Us=Pr=null,h1(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(Ur=null),jo(s),r=r.stateNode,Je&&typeof Je.onCommitFiberRoot=="function")try{Je.onCommitFiberRoot(ur,r,void 0,(r.current.flags&128)===128)}catch{}if(l!==null){r=tt.T,h=ht.p,ht.p=2,tt.T=null;try{for(var d=e.onRecoverableError,E=0;E<l.length;E++){var b=l[E];d(b.value,{componentStack:b.stack})}}finally{tt.T=r,ht.p=h}}(Ps&3)!==0&&vc(),_i(e),h=e.pendingLanes,(s&4194090)!==0&&(h&42)!==0?e===jd?xl++:(xl=0,jd=e):xl=0,vl(0)}}function h1(e,r){(e.pooledCacheLanes&=r)===0&&(r=e.pooledCache,r!=null&&(e.pooledCache=null,Zo(r)))}function vc(e){return l1(),u1(),c1(),f1()}function f1(){if(Ye!==5)return!1;var e=Pr,r=Cd;Cd=0;var s=jo(Ps),l=tt.T,h=ht.p;try{ht.p=32>s?32:s,tt.T=null,s=Id,Id=null;var d=Pr,E=Ps;if(Ye=0,Us=Pr=null,Ps=0,(Qt&6)!==0)throw Error(a(331));var b=Qt;if(Qt|=4,Qy(d.current),Hy(d,d.current,E,s),Qt=b,vl(0,!1),Je&&typeof Je.onPostCommitFiberRoot=="function")try{Je.onPostCommitFiberRoot(ur,d)}catch{}return!0}finally{ht.p=h,tt.T=l,h1(e,r)}}function d1(e,r,s){r=Vn(s,r),r=ld(e.stateNode,r,2),e=Cr(e,r,2),e!==null&&(_e(e,2),_i(e))}function ee(e,r,s){if(e.tag===3)d1(e,e,s);else for(;r!==null;){if(r.tag===3){d1(r,e,s);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ur===null||!Ur.has(l))){e=Vn(s,e),s=yy(2),l=Cr(r,s,2),l!==null&&(xy(s,l,r,e),_e(l,2),_i(l));break}}r=r.return}}function Od(e,r,s){var l=e.pingCache;if(l===null){l=e.pingCache=new Pb;var h=new Set;l.set(r,h)}else h=l.get(r),h===void 0&&(h=new Set,l.set(r,h));h.has(s)||(Td=!0,h.add(s),e=Fb.bind(null,e,r,s),r.then(e,e))}function Fb(e,r,s){var l=e.pingCache;l!==null&&l.delete(r),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,re===e&&(zt&s)===s&&(xe===4||xe===3&&(zt&62914560)===zt&&300>dn()-Rd?(Qt&2)===0&&Ls(e,0):Sd|=s,ks===zt&&(ks=0)),_i(e)}function p1(e,r){r===0&&(r=fr()),e=Es(e,r),e!==null&&(_e(e,r),_i(e))}function qb(e){var r=e.memoizedState,s=0;r!==null&&(s=r.retryLane),p1(e,s)}function Kb(e,r){var s=0;switch(e.tag){case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(s=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(r),p1(e,s)}function Hb(e,r){return la(e,r)}var _c=null,Bs=null,Vd=!1,Ec=!1,kd=!1,qa=0;function _i(e){e!==Bs&&e.next===null&&(Bs===null?_c=Bs=e:Bs=Bs.next=e),Ec=!0,Vd||(Vd=!0,Yb())}function vl(e,r){if(!kd&&Ec){kd=!0;do for(var s=!1,l=_c;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var E=l.suspendedLanes,b=l.pingedLanes;d=(1<<31-ln(42|e)+1)-1,d&=h&~(E&~b),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,x1(l,d))}else d=zt,d=Dn(l,l===re?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||hr(l,d)||(s=!0,x1(l,d));l=l.next}while(s);kd=!1}}function Gb(){m1()}function m1(){Ec=Vd=!1;var e=0;qa!==0&&(nw()&&(e=qa),qa=0);for(var r=dn(),s=null,l=_c;l!==null;){var h=l.next,d=g1(l,r);d===0?(l.next=null,s===null?_c=h:s.next=h,h===null&&(Bs=s)):(s=l,(e!==0||(d&3)!==0)&&(Ec=!0)),l=h}vl(e)}function g1(e,r){for(var s=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var E=31-ln(d),b=1<<E,D=h[E];D===-1?((b&s)===0||(b&l)!==0)&&(h[E]=rs(b,r)):D<=r&&(e.expiredLanes|=b),d&=~b}if(r=re,s=zt,s=Dn(e,e===r?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===r&&(Xt===2||Xt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&is(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||hr(e,s)){if(r=s&-s,r===e.callbackPriority)return r;switch(l!==null&&is(l),jo(s)){case 2:case 8:s=Le;break;case 32:s=Mi;break;case 268435456:s=Ro;break;default:s=Mi}return l=y1.bind(null,e),s=la(s,l),e.callbackPriority=r,e.callbackNode=s,r}return l!==null&&l!==null&&is(l),e.callbackPriority=2,e.callbackNode=null,2}function y1(e,r){if(Ye!==0&&Ye!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(vc()&&e.callbackNode!==s)return null;var l=zt;return l=Dn(e,e===re?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Jy(e,l,r),g1(e,dn()),e.callbackNode!=null&&e.callbackNode===s?y1.bind(null,e):null)}function x1(e,r){if(vc())return null;Jy(e,r,!0)}function Yb(){rw(function(){(Qt&6)!==0?la(Oe,Gb):m1()})}function Ud(){return qa===0&&(qa=Co()),qa}function v1(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Xn(""+e)}function _1(e,r){var s=r.ownerDocument.createElement("input");return s.name=r.name,s.value=r.value,e.id&&s.setAttribute("form",e.id),r.parentNode.insertBefore(s,r),e=new FormData(e),s.parentNode.removeChild(s),e}function Qb(e,r,s,l,h){if(r==="submit"&&s&&s.stateNode===h){var d=v1((h[He]||null).action),E=l.submitter;E&&(r=(r=E[He]||null)?v1(r.formAction):E.getAttribute("formAction"),r!==null&&(d=r,E=null));var b=new wa("action","action",null,l,h);e.push({event:b,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(qa!==0){var D=E?_1(h,E):new FormData(h);id(s,{pending:!0,data:D,method:h.method,action:d},null,D)}}else typeof d=="function"&&(b.preventDefault(),D=E?_1(h,E):new FormData(h),id(s,{pending:!0,data:D,method:h.method,action:d},d,D))},currentTarget:h}]})}}for(var Pd=0;Pd<bf.length;Pd++){var Ld=bf[Pd],Xb=Ld.toLowerCase(),Wb=Ld[0].toUpperCase()+Ld.slice(1);ti(Xb,"on"+Wb)}ti(Jg,"onAnimationEnd"),ti(t0,"onAnimationIteration"),ti(e0,"onAnimationStart"),ti("dblclick","onDoubleClick"),ti("focusin","onFocus"),ti("focusout","onBlur"),ti(pb,"onTransitionRun"),ti(mb,"onTransitionStart"),ti(gb,"onTransitionCancel"),ti(n0,"onTransitionEnd"),fi("onMouseEnter",["mouseout","mouseover"]),fi("onMouseLeave",["mouseout","mouseover"]),fi("onPointerEnter",["pointerout","pointerover"]),fi("onPointerLeave",["pointerout","pointerover"]),hi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),hi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),hi("onBeforeInput",["compositionend","keypress","textInput","paste"]),hi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),hi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),hi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _l="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_l));function E1(e,r){r=(r&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],h=l.event;l=l.listeners;t:{var d=void 0;if(r)for(var E=l.length-1;0<=E;E--){var b=l[E],D=b.instance,q=b.currentTarget;if(b=b.listener,D!==d&&h.isPropagationStopped())break t;d=b,h.currentTarget=q;try{d(h)}catch(et){lc(et)}h.currentTarget=null,d=D}else for(E=0;E<l.length;E++){if(b=l[E],D=b.instance,q=b.currentTarget,b=b.listener,D!==d&&h.isPropagationStopped())break t;d=b,h.currentTarget=q;try{d(h)}catch(et){lc(et)}h.currentTarget=null,d=D}}}}function kt(e,r){var s=r[ca];s===void 0&&(s=r[ca]=new Set);var l=e+"__bubble";s.has(l)||(b1(r,e,2,!1),s.add(l))}function zd(e,r,s){var l=0;r&&(l|=4),b1(s,e,l,r)}var bc="_reactListening"+Math.random().toString(36).slice(2);function Bd(e){if(!e[bc]){e[bc]=!0,wu.forEach(function(s){s!=="selectionchange"&&(Zb.has(s)||zd(s,!1,e),zd(s,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[bc]||(r[bc]=!0,zd("selectionchange",!1,r))}}function b1(e,r,s,l){switch(H1(r)){case 2:var h=Sw;break;case 8:h=Aw;break;default:h=ep}s=h.bind(null,r,s,e),h=void 0,!Li||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(r,s,{capture:!0,passive:h}):e.addEventListener(r,s,!0):h!==void 0?e.addEventListener(r,s,{passive:h}):e.addEventListener(r,s,!1)}function $d(e,r,s,l,h){var d=l;if((r&1)===0&&(r&2)===0&&l!==null)t:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var b=l.stateNode.containerInfo;if(b===h)break;if(E===4)for(E=l.return;E!==null;){var D=E.tag;if((D===3||D===4)&&E.stateNode.containerInfo===h)return;E=E.return}for(;b!==null;){if(E=ui(b),E===null)return;if(D=E.tag,D===5||D===6||D===26||D===27){l=d=E;continue t}b=b.parentNode}}l=l.return}_a(function(){var q=d,et=Uo(s),rt=[];t:{var H=i0.get(e);if(H!==void 0){var G=wa,Tt=e;switch(e){case"keypress":if(Ea(s)===0)break t;case"keydown":case"keyup":G=ys;break;case"focusin":Tt="focus",G=ps;break;case"focusout":Tt="blur",G=ps;break;case"beforeblur":case"afterblur":G=ps;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=Ca;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=ju;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=Tr;break;case Jg:case t0:case e0:G=Lo;break;case n0:G=y;break;case"scroll":case"scrollend":G=Sa;break;case"wheel":G=T;break;case"copy":case"cut":case"paste":G=Nu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=$o;break;case"toggle":case"beforetoggle":G=Q}var Et=(r&4)!==0,te=!Et&&(e==="scroll"||e==="scrollend"),L=Et?H!==null?H+"Capture":null:H;Et=[];for(var U=q,$;U!==null;){var nt=U;if($=nt.stateNode,nt=nt.tag,nt!==5&&nt!==26&&nt!==27||$===null||L===null||(nt=br(U,L),nt!=null&&Et.push(El(U,nt,$))),te)break;U=U.return}0<Et.length&&(H=new G(H,Tt,null,s,et),rt.push({event:H,listeners:Et}))}}if((r&7)===0){t:{if(H=e==="mouseover"||e==="pointerover",G=e==="mouseout"||e==="pointerout",H&&s!==ko&&(Tt=s.relatedTarget||s.fromElement)&&(ui(Tt)||Tt[Vi]))break t;if((G||H)&&(H=et.window===et?et:(H=et.ownerDocument)?H.defaultView||H.parentWindow:window,G?(Tt=s.relatedTarget||s.toElement,G=q,Tt=Tt?ui(Tt):null,Tt!==null&&(te=u(Tt),Et=Tt.tag,Tt!==te||Et!==5&&Et!==27&&Et!==6)&&(Tt=null)):(G=null,Tt=q),G!==Tt)){if(Et=Ca,nt="onMouseLeave",L="onMouseEnter",U="mouse",(e==="pointerout"||e==="pointerover")&&(Et=$o,nt="onPointerLeave",L="onPointerEnter",U="pointer"),te=G==null?H:gr(G),$=Tt==null?H:gr(Tt),H=new Et(nt,U+"leave",G,s,et),H.target=te,H.relatedTarget=$,nt=null,ui(et)===q&&(Et=new Et(L,U+"enter",Tt,s,et),Et.target=$,Et.relatedTarget=te,nt=Et),te=nt,G&&Tt)e:{for(Et=G,L=Tt,U=0,$=Et;$;$=$s($))U++;for($=0,nt=L;nt;nt=$s(nt))$++;for(;0<U-$;)Et=$s(Et),U--;for(;0<$-U;)L=$s(L),$--;for(;U--;){if(Et===L||L!==null&&Et===L.alternate)break e;Et=$s(Et),L=$s(L)}Et=null}else Et=null;G!==null&&w1(rt,H,G,Et,!1),Tt!==null&&te!==null&&w1(rt,te,Tt,Et,!0)}}t:{if(H=q?gr(q):window,G=H.nodeName&&H.nodeName.toLowerCase(),G==="select"||G==="input"&&H.type==="file")var mt=$g;else if(zg(H))if(Fg)mt=hb;else{mt=ub;var Mt=lb}else G=H.nodeName,!G||G.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?q&&hs(q.elementType)&&(mt=$g):mt=cb;if(mt&&(mt=mt(e,q))){Bg(rt,mt,s,et);break t}Mt&&Mt(e,H,q),e==="focusout"&&q&&H.type==="number"&&q.memoizedProps.value!=null&&Mo(H,"number",H.value)}switch(Mt=q?gr(q):window,e){case"focusin":(zg(Mt)||Mt.contentEditable==="true")&&(xs=Mt,vf=q,Go=null);break;case"focusout":Go=vf=xs=null;break;case"mousedown":_f=!0;break;case"contextmenu":case"mouseup":case"dragend":_f=!1,Wg(rt,s,et);break;case"selectionchange":if(db)break;case"keydown":case"keyup":Wg(rt,s,et)}var xt;if(At)t:{switch(e){case"compositionstart":var bt="onCompositionStart";break t;case"compositionend":bt="onCompositionEnd";break t;case"compositionupdate":bt="onCompositionUpdate";break t}bt=void 0}else Jn?Wn(e,s)&&(bt="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(bt="onCompositionStart");bt&&(we&&s.locale!=="ko"&&(Jn||bt!=="onCompositionStart"?bt==="onCompositionEnd"&&Jn&&(xt=Iu()):(On=et,ie="value"in On?On.value:On.textContent,Jn=!0)),Mt=wc(q,bt),0<Mt.length&&(bt=new Bo(bt,e,null,s,et),rt.push({event:bt,listeners:Mt}),xt?bt.data=xt:(xt=Zn(s),xt!==null&&(bt.data=xt)))),(xt=Yt?Fo(e,s):ab(e,s))&&(bt=wc(q,"onBeforeInput"),0<bt.length&&(Mt=new Bo("onBeforeInput","beforeinput",null,s,et),rt.push({event:Mt,listeners:bt}),Mt.data=xt)),Qb(rt,e,q,s,et)}E1(rt,r)})}function El(e,r,s){return{instance:e,listener:r,currentTarget:s}}function wc(e,r){for(var s=r+"Capture",l=[];e!==null;){var h=e,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=br(e,s),h!=null&&l.unshift(El(e,h,d)),h=br(e,r),h!=null&&l.push(El(e,h,d))),e.tag===3)return l;e=e.return}return[]}function $s(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function w1(e,r,s,l,h){for(var d=r._reactName,E=[];s!==null&&s!==l;){var b=s,D=b.alternate,q=b.stateNode;if(b=b.tag,D!==null&&D===l)break;b!==5&&b!==26&&b!==27||q===null||(D=q,h?(q=br(s,d),q!=null&&E.unshift(El(s,q,D))):h||(q=br(s,d),q!=null&&E.push(El(s,q,D)))),s=s.return}E.length!==0&&e.push({event:r,listeners:E})}var Jb=/\r\n?/g,tw=/\u0000|\uFFFD/g;function T1(e){return(typeof e=="string"?e:""+e).replace(Jb,`
`).replace(tw,"")}function S1(e,r){return r=T1(r),T1(e)===r}function Tc(){}function Jt(e,r,s,l,h,d){switch(s){case"children":typeof l=="string"?r==="body"||r==="textarea"&&l===""||Mn(e,l):(typeof l=="number"||typeof l=="bigint")&&r!=="body"&&Mn(e,""+l);break;case"className":ma(e,"class",l);break;case"tabIndex":ma(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ma(e,s,l);break;case"style":Vo(e,l,d);break;case"data":if(r!=="object"){ma(e,"data",l);break}case"src":case"href":if(l===""&&(r!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Xn(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(r!=="input"&&Jt(e,r,"name",h.name,h,null),Jt(e,r,"formEncType",h.formEncType,h,null),Jt(e,r,"formMethod",h.formMethod,h,null),Jt(e,r,"formTarget",h.formTarget,h,null)):(Jt(e,r,"encType",h.encType,h,null),Jt(e,r,"method",h.method,h,null),Jt(e,r,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Xn(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=Tc);break;case"onScroll":l!=null&&kt("scroll",e);break;case"onScrollEnd":l!=null&&kt("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=Xn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":kt("beforetoggle",e),kt("toggle",e),pa(e,"popover",l);break;case"xlinkActuate":Nn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Nn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Nn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Nn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Nn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Nn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Nn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Nn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Nn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":pa(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Au.get(s)||s,pa(e,s,l))}}function Fd(e,r,s,l,h,d){switch(s){case"style":Vo(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof l=="string"?Mn(e,l):(typeof l=="number"||typeof l=="bigint")&&Mn(e,""+l);break;case"onScroll":l!=null&&kt("scroll",e);break;case"onScrollEnd":l!=null&&kt("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Tc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!fa.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),r=s.slice(2,h?s.length-7:void 0),d=e[He]||null,d=d!=null?d[s]:null,typeof d=="function"&&e.removeEventListener(r,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(r,l,h);break t}s in e?e[s]=l:l===!0?e.setAttribute(s,""):pa(e,s,l)}}}function Qe(e,r,s){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":kt("error",e),kt("load",e);var l=!1,h=!1,d;for(d in s)if(s.hasOwnProperty(d)){var E=s[d];if(E!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:Jt(e,r,d,E,s,null)}}h&&Jt(e,r,"srcSet",s.srcSet,s,null),l&&Jt(e,r,"src",s.src,s,null);return;case"input":kt("invalid",e);var b=d=E=h=null,D=null,q=null;for(l in s)if(s.hasOwnProperty(l)){var et=s[l];if(et!=null)switch(l){case"name":h=et;break;case"type":E=et;break;case"checked":D=et;break;case"defaultChecked":q=et;break;case"value":d=et;break;case"defaultValue":b=et;break;case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(a(137,r));break;default:Jt(e,r,l,et,s,null)}}No(e,d,b,D,q,E,h,!1),vr(e);return;case"select":kt("invalid",e),l=E=d=null;for(h in s)if(s.hasOwnProperty(h)&&(b=s[h],b!=null))switch(h){case"value":d=b;break;case"defaultValue":E=b;break;case"multiple":l=b;default:Jt(e,r,h,b,s,null)}r=d,s=E,e.multiple=!!l,r!=null?_r(e,!!l,r,!1):s!=null&&_r(e,!!l,s,!0);return;case"textarea":kt("invalid",e),d=h=l=null;for(E in s)if(s.hasOwnProperty(E)&&(b=s[E],b!=null))switch(E){case"value":l=b;break;case"defaultValue":h=b;break;case"children":d=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(a(91));break;default:Jt(e,r,E,b,s,null)}Su(e,l,h,d),vr(e);return;case"option":for(D in s)if(s.hasOwnProperty(D)&&(l=s[D],l!=null))switch(D){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Jt(e,r,D,l,s,null)}return;case"dialog":kt("beforetoggle",e),kt("toggle",e),kt("cancel",e),kt("close",e);break;case"iframe":case"object":kt("load",e);break;case"video":case"audio":for(l=0;l<_l.length;l++)kt(_l[l],e);break;case"image":kt("error",e),kt("load",e);break;case"details":kt("toggle",e);break;case"embed":case"source":case"link":kt("error",e),kt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in s)if(s.hasOwnProperty(q)&&(l=s[q],l!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:Jt(e,r,q,l,s,null)}return;default:if(hs(r)){for(et in s)s.hasOwnProperty(et)&&(l=s[et],l!==void 0&&Fd(e,r,et,l,s,void 0));return}}for(b in s)s.hasOwnProperty(b)&&(l=s[b],l!=null&&Jt(e,r,b,l,s,null))}function ew(e,r,s,l){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,E=null,b=null,D=null,q=null,et=null;for(G in s){var rt=s[G];if(s.hasOwnProperty(G)&&rt!=null)switch(G){case"checked":break;case"value":break;case"defaultValue":D=rt;default:l.hasOwnProperty(G)||Jt(e,r,G,null,l,rt)}}for(var H in l){var G=l[H];if(rt=s[H],l.hasOwnProperty(H)&&(G!=null||rt!=null))switch(H){case"type":d=G;break;case"name":h=G;break;case"checked":q=G;break;case"defaultChecked":et=G;break;case"value":E=G;break;case"defaultValue":b=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(a(137,r));break;default:G!==rt&&Jt(e,r,H,G,l,rt)}}Do(e,E,b,D,q,et,d,h);return;case"select":G=E=b=H=null;for(d in s)if(D=s[d],s.hasOwnProperty(d)&&D!=null)switch(d){case"value":break;case"multiple":G=D;default:l.hasOwnProperty(d)||Jt(e,r,d,null,l,D)}for(h in l)if(d=l[h],D=s[h],l.hasOwnProperty(h)&&(d!=null||D!=null))switch(h){case"value":H=d;break;case"defaultValue":b=d;break;case"multiple":E=d;default:d!==D&&Jt(e,r,h,d,l,D)}r=b,s=E,l=G,H!=null?_r(e,!!s,H,!1):!!l!=!!s&&(r!=null?_r(e,!!s,r,!0):_r(e,!!s,s?[]:"",!1));return;case"textarea":G=H=null;for(b in s)if(h=s[b],s.hasOwnProperty(b)&&h!=null&&!l.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Jt(e,r,b,null,l,h)}for(E in l)if(h=l[E],d=s[E],l.hasOwnProperty(E)&&(h!=null||d!=null))switch(E){case"value":H=h;break;case"defaultValue":G=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==d&&Jt(e,r,E,h,l,d)}Tu(e,H,G);return;case"option":for(var Tt in s)if(H=s[Tt],s.hasOwnProperty(Tt)&&H!=null&&!l.hasOwnProperty(Tt))switch(Tt){case"selected":e.selected=!1;break;default:Jt(e,r,Tt,null,l,H)}for(D in l)if(H=l[D],G=s[D],l.hasOwnProperty(D)&&H!==G&&(H!=null||G!=null))switch(D){case"selected":e.selected=H&&typeof H!="function"&&typeof H!="symbol";break;default:Jt(e,r,D,H,l,G)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Et in s)H=s[Et],s.hasOwnProperty(Et)&&H!=null&&!l.hasOwnProperty(Et)&&Jt(e,r,Et,null,l,H);for(q in l)if(H=l[q],G=s[q],l.hasOwnProperty(q)&&H!==G&&(H!=null||G!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(a(137,r));break;default:Jt(e,r,q,H,l,G)}return;default:if(hs(r)){for(var te in s)H=s[te],s.hasOwnProperty(te)&&H!==void 0&&!l.hasOwnProperty(te)&&Fd(e,r,te,void 0,l,H);for(et in l)H=l[et],G=s[et],!l.hasOwnProperty(et)||H===G||H===void 0&&G===void 0||Fd(e,r,et,H,l,G);return}}for(var L in s)H=s[L],s.hasOwnProperty(L)&&H!=null&&!l.hasOwnProperty(L)&&Jt(e,r,L,null,l,H);for(rt in l)H=l[rt],G=s[rt],!l.hasOwnProperty(rt)||H===G||H==null&&G==null||Jt(e,r,rt,H,l,G)}var qd=null,Kd=null;function Sc(e){return e.nodeType===9?e:e.ownerDocument}function A1(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function R1(e,r){if(e===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&r==="foreignObject"?0:e}function Hd(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Gd=null;function nw(){var e=window.event;return e&&e.type==="popstate"?e===Gd?!1:(Gd=e,!0):(Gd=null,!1)}var C1=typeof setTimeout=="function"?setTimeout:void 0,iw=typeof clearTimeout=="function"?clearTimeout:void 0,I1=typeof Promise=="function"?Promise:void 0,rw=typeof queueMicrotask=="function"?queueMicrotask:typeof I1<"u"?function(e){return I1.resolve(null).then(e).catch(aw)}:C1;function aw(e){setTimeout(function(){throw e})}function zr(e){return e==="head"}function j1(e,r){var s=r,l=0,h=0;do{var d=s.nextSibling;if(e.removeChild(s),d&&d.nodeType===8)if(s=d.data,s==="/$"){if(0<l&&8>l){s=l;var E=e.ownerDocument;if(s&1&&bl(E.documentElement),s&2&&bl(E.body),s&4)for(s=E.head,bl(s),E=s.firstChild;E;){var b=E.nextSibling,D=E.nodeName;E[mr]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&E.rel.toLowerCase()==="stylesheet"||s.removeChild(E),E=b}}if(h===0){e.removeChild(d),jl(r);return}h--}else s==="$"||s==="$?"||s==="$!"?h++:l=s.charCodeAt(0)-48;else l=0;s=d}while(s);jl(r)}function Yd(e){var r=e.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var s=r;switch(r=r.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Yd(s),ss(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function sw(e,r,s,l){for(;e.nodeType===1;){var h=s;if(e.nodeName.toLowerCase()!==r.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[mr])switch(r){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(r==="input"&&e.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=ni(e.nextSibling),e===null)break}return null}function ow(e,r,s){if(r==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=ni(e.nextSibling),e===null))return null;return e}function Qd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function lw(e,r){var s=e.ownerDocument;if(e.data!=="$?"||s.readyState==="complete")r();else{var l=function(){r(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function ni(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return e}var Xd=null;function D1(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(r===0)return e;r--}else s==="/$"&&r++}e=e.previousSibling}return null}function N1(e,r,s){switch(r=Sc(s),e){case"html":if(e=r.documentElement,!e)throw Error(a(452));return e;case"head":if(e=r.head,!e)throw Error(a(453));return e;case"body":if(e=r.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function bl(e){for(var r=e.attributes;r.length;)e.removeAttributeNode(r[0]);ss(e)}var Bn=new Map,M1=new Set;function Ac(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ji=ht.d;ht.d={f:uw,r:cw,D:hw,C:fw,L:dw,m:pw,X:gw,S:mw,M:yw};function uw(){var e=Ji.f(),r=yc();return e||r}function cw(e){var r=ci(e);r!==null&&r.tag===5&&r.type==="form"?J0(r):Ji.r(e)}var Fs=typeof document>"u"?null:document;function O1(e,r,s){var l=Fs;if(l&&typeof r=="string"&&r){var h=ze(r);h='link[rel="'+e+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),M1.has(h)||(M1.add(h),e={rel:e,crossOrigin:s,href:r},l.querySelector(h)===null&&(r=l.createElement("link"),Qe(r,"link",e),be(r),l.head.appendChild(r)))}}function hw(e){Ji.D(e),O1("dns-prefetch",e,null)}function fw(e,r){Ji.C(e,r),O1("preconnect",e,r)}function dw(e,r,s){Ji.L(e,r,s);var l=Fs;if(l&&e&&r){var h='link[rel="preload"][as="'+ze(r)+'"]';r==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+ze(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+ze(s.imageSizes)+'"]')):h+='[href="'+ze(e)+'"]';var d=h;switch(r){case"style":d=qs(e);break;case"script":d=Ks(e)}Bn.has(d)||(e=v({rel:"preload",href:r==="image"&&s&&s.imageSrcSet?void 0:e,as:r},s),Bn.set(d,e),l.querySelector(h)!==null||r==="style"&&l.querySelector(wl(d))||r==="script"&&l.querySelector(Tl(d))||(r=l.createElement("link"),Qe(r,"link",e),be(r),l.head.appendChild(r)))}}function pw(e,r){Ji.m(e,r);var s=Fs;if(s&&e){var l=r&&typeof r.as=="string"?r.as:"script",h='link[rel="modulepreload"][as="'+ze(l)+'"][href="'+ze(e)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ks(e)}if(!Bn.has(d)&&(e=v({rel:"modulepreload",href:e},r),Bn.set(d,e),s.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Tl(d)))return}l=s.createElement("link"),Qe(l,"link",e),be(l),s.head.appendChild(l)}}}function mw(e,r,s){Ji.S(e,r,s);var l=Fs;if(l&&e){var h=yr(l).hoistableStyles,d=qs(e);r=r||"default";var E=h.get(d);if(!E){var b={loading:0,preload:null};if(E=l.querySelector(wl(d)))b.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":r},s),(s=Bn.get(d))&&Wd(e,s);var D=E=l.createElement("link");be(D),Qe(D,"link",e),D._p=new Promise(function(q,et){D.onload=q,D.onerror=et}),D.addEventListener("load",function(){b.loading|=1}),D.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Rc(E,r,l)}E={type:"stylesheet",instance:E,count:1,state:b},h.set(d,E)}}}function gw(e,r){Ji.X(e,r);var s=Fs;if(s&&e){var l=yr(s).hoistableScripts,h=Ks(e),d=l.get(h);d||(d=s.querySelector(Tl(h)),d||(e=v({src:e,async:!0},r),(r=Bn.get(h))&&Zd(e,r),d=s.createElement("script"),be(d),Qe(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function yw(e,r){Ji.M(e,r);var s=Fs;if(s&&e){var l=yr(s).hoistableScripts,h=Ks(e),d=l.get(h);d||(d=s.querySelector(Tl(h)),d||(e=v({src:e,async:!0,type:"module"},r),(r=Bn.get(h))&&Zd(e,r),d=s.createElement("script"),be(d),Qe(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function V1(e,r,s,l){var h=(h=_t.current)?Ac(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(r=qs(s.href),s=yr(h).hoistableStyles,l=s.get(r),l||(l={type:"style",instance:null,count:0,state:null},s.set(r,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=qs(s.href);var d=yr(h).hoistableStyles,E=d.get(e);if(E||(h=h.ownerDocument||h,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,E),(d=h.querySelector(wl(e)))&&!d._p&&(E.instance=d,E.state.loading=5),Bn.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Bn.set(e,s),d||xw(h,e,s,E.state))),r&&l===null)throw Error(a(528,""));return E}if(r&&l!==null)throw Error(a(529,""));return null;case"script":return r=s.async,s=s.src,typeof s=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Ks(s),s=yr(h).hoistableScripts,l=s.get(r),l||(l={type:"script",instance:null,count:0,state:null},s.set(r,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function qs(e){return'href="'+ze(e)+'"'}function wl(e){return'link[rel="stylesheet"]['+e+"]"}function k1(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function xw(e,r,s,l){e.querySelector('link[rel="preload"][as="style"]['+r+"]")?l.loading=1:(r=e.createElement("link"),l.preload=r,r.addEventListener("load",function(){return l.loading|=1}),r.addEventListener("error",function(){return l.loading|=2}),Qe(r,"link",s),be(r),e.head.appendChild(r))}function Ks(e){return'[src="'+ze(e)+'"]'}function Tl(e){return"script[async]"+e}function U1(e,r,s){if(r.count++,r.instance===null)switch(r.type){case"style":var l=e.querySelector('style[data-href~="'+ze(s.href)+'"]');if(l)return r.instance=l,be(l),l;var h=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),be(l),Qe(l,"style",h),Rc(l,s.precedence,e),r.instance=l;case"stylesheet":h=qs(s.href);var d=e.querySelector(wl(h));if(d)return r.state.loading|=4,r.instance=d,be(d),d;l=k1(s),(h=Bn.get(h))&&Wd(l,h),d=(e.ownerDocument||e).createElement("link"),be(d);var E=d;return E._p=new Promise(function(b,D){E.onload=b,E.onerror=D}),Qe(d,"link",l),r.state.loading|=4,Rc(d,s.precedence,e),r.instance=d;case"script":return d=Ks(s.src),(h=e.querySelector(Tl(d)))?(r.instance=h,be(h),h):(l=s,(h=Bn.get(d))&&(l=v({},s),Zd(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),be(h),Qe(h,"link",l),e.head.appendChild(h),r.instance=h);case"void":return null;default:throw Error(a(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(l=r.instance,r.state.loading|=4,Rc(l,s.precedence,e));return r.instance}function Rc(e,r,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,E=0;E<l.length;E++){var b=l[E];if(b.dataset.precedence===r)d=b;else if(d!==h)break}d?d.parentNode.insertBefore(e,d.nextSibling):(r=s.nodeType===9?s.head:s,r.insertBefore(e,r.firstChild))}function Wd(e,r){e.crossOrigin==null&&(e.crossOrigin=r.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=r.referrerPolicy),e.title==null&&(e.title=r.title)}function Zd(e,r){e.crossOrigin==null&&(e.crossOrigin=r.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=r.referrerPolicy),e.integrity==null&&(e.integrity=r.integrity)}var Cc=null;function P1(e,r,s){if(Cc===null){var l=new Map,h=Cc=new Map;h.set(s,l)}else h=Cc,l=h.get(s),l||(l=new Map,h.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),h=0;h<s.length;h++){var d=s[h];if(!(d[mr]||d[Ee]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var E=d.getAttribute(r)||"";E=e+E;var b=l.get(E);b?b.push(d):l.set(E,[d])}}return l}function L1(e,r,s){e=e.ownerDocument||e,e.head.insertBefore(s,r==="title"?e.querySelector("head > title"):null)}function vw(e,r,s){if(s===1||r.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return e=r.disabled,typeof r.precedence=="string"&&e==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function z1(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Sl=null;function _w(){}function Ew(e,r,s){if(Sl===null)throw Error(a(475));var l=Sl;if(r.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=qs(s.href),d=e.querySelector(wl(h));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Ic.bind(l),e.then(l,l)),r.state.loading|=4,r.instance=d,be(d);return}d=e.ownerDocument||e,s=k1(s),(h=Bn.get(h))&&Wd(s,h),d=d.createElement("link"),be(d);var E=d;E._p=new Promise(function(b,D){E.onload=b,E.onerror=D}),Qe(d,"link",s),r.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(r,e),(e=r.state.preload)&&(r.state.loading&3)===0&&(l.count++,r=Ic.bind(l),e.addEventListener("load",r),e.addEventListener("error",r))}}function bw(){if(Sl===null)throw Error(a(475));var e=Sl;return e.stylesheets&&e.count===0&&Jd(e,e.stylesheets),0<e.count?function(r){var s=setTimeout(function(){if(e.stylesheets&&Jd(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(s)}}:null}function Ic(){if(this.count--,this.count===0){if(this.stylesheets)Jd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var jc=null;function Jd(e,r){e.stylesheets=null,e.unsuspend!==null&&(e.count++,jc=new Map,r.forEach(ww,e),jc=null,Ic.call(e))}function ww(e,r){if(!(r.state.loading&4)){var s=jc.get(e);if(s)var l=s.get(null);else{s=new Map,jc.set(e,s);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var E=h[d];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(s.set(E.dataset.precedence,E),l=E)}l&&s.set(null,l)}h=r.instance,E=h.getAttribute("data-precedence"),d=s.get(E)||l,d===l&&s.set(null,h),s.set(E,h),this.count++,l=Ic.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),r.state.loading|=4}}var Al={$$typeof:J,Provider:null,Consumer:null,_currentValue:yt,_currentValue2:yt,_threadCount:0};function Tw(e,r,s,l,h,d,E,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=as(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=as(0),this.hiddenUpdates=as(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function B1(e,r,s,l,h,d,E,b,D,q,et,rt){return e=new Tw(e,r,s,E,b,D,q,rt),r=1,d===!0&&(r|=24),d=bn(3,null,null,r),e.current=d,d.stateNode=e,r=Of(),r.refCount++,e.pooledCache=r,r.refCount++,d.memoizedState={element:l,isDehydrated:s,cache:r},Pf(d),e}function $1(e){return e?(e=bs,e):bs}function F1(e,r,s,l,h,d){h=$1(h),l.context===null?l.context=h:l.pendingContext=h,l=Rr(r),l.payload={element:s},d=d===void 0?null:d,d!==null&&(l.callback=d),s=Cr(e,l,r),s!==null&&(Rn(s,e,r),nl(s,e,r))}function q1(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<r?s:r}}function tp(e,r){q1(e,r),(e=e.alternate)&&q1(e,r)}function K1(e){if(e.tag===13){var r=Es(e,67108864);r!==null&&Rn(r,e,67108864),tp(e,67108864)}}var Dc=!0;function Sw(e,r,s,l){var h=tt.T;tt.T=null;var d=ht.p;try{ht.p=2,ep(e,r,s,l)}finally{ht.p=d,tt.T=h}}function Aw(e,r,s,l){var h=tt.T;tt.T=null;var d=ht.p;try{ht.p=8,ep(e,r,s,l)}finally{ht.p=d,tt.T=h}}function ep(e,r,s,l){if(Dc){var h=np(l);if(h===null)$d(e,r,l,Nc,s),G1(e,l);else if(Cw(h,e,r,s,l))l.stopPropagation();else if(G1(e,l),r&4&&-1<Rw.indexOf(e)){for(;h!==null;){var d=ci(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var E=Gn(d.pendingLanes);if(E!==0){var b=d;for(b.pendingLanes|=2,b.entangledLanes|=2;E;){var D=1<<31-ln(E);b.entanglements[1]|=D,E&=~D}_i(d),(Qt&6)===0&&(mc=dn()+500,vl(0))}}break;case 13:b=Es(d,2),b!==null&&Rn(b,d,2),yc(),tp(d,2)}if(d=np(l),d===null&&$d(e,r,l,Nc,s),d===h)break;h=d}h!==null&&l.stopPropagation()}else $d(e,r,l,null,s)}}function np(e){return e=Uo(e),ip(e)}var Nc=null;function ip(e){if(Nc=null,e=ui(e),e!==null){var r=u(e);if(r===null)e=null;else{var s=r.tag;if(s===13){if(e=f(r),e!==null)return e;e=null}else if(s===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null)}}return Nc=e,null}function H1(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(vu()){case Oe:return 2;case Le:return 8;case Mi:case lf:return 32;case Ro:return 268435456;default:return 32}default:return 32}}var rp=!1,Br=null,$r=null,Fr=null,Rl=new Map,Cl=new Map,qr=[],Rw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function G1(e,r){switch(e){case"focusin":case"focusout":Br=null;break;case"dragenter":case"dragleave":$r=null;break;case"mouseover":case"mouseout":Fr=null;break;case"pointerover":case"pointerout":Rl.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cl.delete(r.pointerId)}}function Il(e,r,s,l,h,d){return e===null||e.nativeEvent!==d?(e={blockedOn:r,domEventName:s,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},r!==null&&(r=ci(r),r!==null&&K1(r)),e):(e.eventSystemFlags|=l,r=e.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),e)}function Cw(e,r,s,l,h){switch(r){case"focusin":return Br=Il(Br,e,r,s,l,h),!0;case"dragenter":return $r=Il($r,e,r,s,l,h),!0;case"mouseover":return Fr=Il(Fr,e,r,s,l,h),!0;case"pointerover":var d=h.pointerId;return Rl.set(d,Il(Rl.get(d)||null,e,r,s,l,h)),!0;case"gotpointercapture":return d=h.pointerId,Cl.set(d,Il(Cl.get(d)||null,e,r,s,l,h)),!0}return!1}function Y1(e){var r=ui(e.target);if(r!==null){var s=u(r);if(s!==null){if(r=s.tag,r===13){if(r=f(s),r!==null){e.blockedOn=r,hf(e.priority,function(){if(s.tag===13){var l=An();l=Io(l);var h=Es(s,l);h!==null&&Rn(h,s,l),tp(s,l)}});return}}else if(r===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mc(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var s=np(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);ko=l,s.target.dispatchEvent(l),ko=null}else return r=ci(s),r!==null&&K1(r),e.blockedOn=s,!1;r.shift()}return!0}function Q1(e,r,s){Mc(e)&&s.delete(r)}function Iw(){rp=!1,Br!==null&&Mc(Br)&&(Br=null),$r!==null&&Mc($r)&&($r=null),Fr!==null&&Mc(Fr)&&(Fr=null),Rl.forEach(Q1),Cl.forEach(Q1)}function Oc(e,r){e.blockedOn===r&&(e.blockedOn=null,rp||(rp=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Iw)))}var Vc=null;function X1(e){Vc!==e&&(Vc=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Vc===e&&(Vc=null);for(var r=0;r<e.length;r+=3){var s=e[r],l=e[r+1],h=e[r+2];if(typeof l!="function"){if(ip(l||s)===null)continue;break}var d=ci(s);d!==null&&(e.splice(r,3),r-=3,id(d,{pending:!0,data:h,method:s.method,action:l},l,h))}}))}function jl(e){function r(D){return Oc(D,e)}Br!==null&&Oc(Br,e),$r!==null&&Oc($r,e),Fr!==null&&Oc(Fr,e),Rl.forEach(r),Cl.forEach(r);for(var s=0;s<qr.length;s++){var l=qr[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<qr.length&&(s=qr[0],s.blockedOn===null);)Y1(s),s.blockedOn===null&&qr.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var h=s[l],d=s[l+1],E=h[He]||null;if(typeof d=="function")E||X1(s);else if(E){var b=null;if(d&&d.hasAttribute("formAction")){if(h=d,E=d[He]||null)b=E.formAction;else if(ip(h)!==null)continue}else b=E.action;typeof b=="function"?s[l+1]=b:(s.splice(l,3),l-=3),X1(s)}}}function ap(e){this._internalRoot=e}kc.prototype.render=ap.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(a(409));var s=r.current,l=An();F1(s,l,e,r,null,null)},kc.prototype.unmount=ap.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;F1(e.current,2,null,e,null,null),yc(),r[Vi]=null}};function kc(e){this._internalRoot=e}kc.prototype.unstable_scheduleHydration=function(e){if(e){var r=Oi();e={blockedOn:null,target:e,priority:r};for(var s=0;s<qr.length&&r!==0&&r<qr[s].priority;s++);qr.splice(s,0,e),s===0&&Y1(e)}};var W1=t.version;if(W1!=="19.1.1")throw Error(a(527,W1,"19.1.1"));ht.findDOMNode=function(e){var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=p(r),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var jw={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:tt,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uc.isDisabled&&Uc.supportsFiber)try{ur=Uc.inject(jw),Je=Uc}catch{}}return Ol.createRoot=function(e,r){if(!o(e))throw Error(a(299));var s=!1,l="",h=dy,d=py,E=my,b=null;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(d=r.onCaughtError),r.onRecoverableError!==void 0&&(E=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(b=r.unstable_transitionCallbacks)),r=B1(e,1,!1,null,null,s,l,h,d,E,b,null),e[Vi]=r.current,Bd(e),new ap(r)},Ol.hydrateRoot=function(e,r,s){if(!o(e))throw Error(a(299));var l=!1,h="",d=dy,E=py,b=my,D=null,q=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(E=s.onCaughtError),s.onRecoverableError!==void 0&&(b=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(D=s.unstable_transitionCallbacks),s.formState!==void 0&&(q=s.formState)),r=B1(e,1,!0,r,s??null,l,h,d,E,b,D,q),r.context=$1(null),s=r.current,l=An(),l=Io(l),h=Rr(l),h.callback=null,Cr(s,h,l),s=l,r.current.lanes=s,_e(r,s),_i(r),e[Vi]=r.current,Bd(e),new kc(r)},Ol.version="19.1.1",Ol}var g_;function PN(){if(g_)return Up.exports;g_=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}return n(),Up.exports=UN(),Up.exports}var LN=PN();function zN(){const n=ji(),t=uT();return Ot.useEffect(()=>{t!=="POP"&&window.scrollTo({top:0,behavior:"instant"});const i=document.getElementById("main");i&&i.focus({preventScroll:!0})},[n,t]),null}function BN({headerMode:n,setHeaderMode:t}){const i=K.useMemo(()=>[{key:"projects",label:"PROJECTS",href:"/TU2025gradulate/projects/"},{key:"peoples",label:"PEOPLES",href:"/TU2025gradulate/peoples/"},{key:"showroom",label:"SHOWROOM",href:"/TU2025gradulate/showroom/"},{key:"guestbook",label:"GUESTBOOK",href:"/TU2025gradulate/guestbook/"},{key:"credits",label:"CREDITS",href:"/TU2025gradulate/credits/"}],[]),a=ji(),o=K.useMemo(()=>{const u=a.pathname.replace(/^\/+/,"");if(!u)return;const f=u.split("/")[0];return["projects","peoples","showroom","guestbook","credits"].includes(f)?f:void 0},[a.pathname]);return x.jsxs(x.Fragment,{children:[x.jsx(iE,{items:i,activeKey:o,mode:n,autoOnScroll:n===pe.GRADIENT_DARK||n===pe.DARK,scrollThreshold:8,sticky:!0,overlay:n===pe.GRADIENT_DARK||n===pe.DARK,maxWidth:1280,onModeChange:t}),x.jsx("main",{id:"main",tabIndex:-1,style:{outline:"none",width:"100vw",boxSizing:"border-box",padding:0},children:x.jsx(CT,{})}),x.jsx(rE,{title:"잔향 : 기억의 향기",nav:[{label:"PROJECTS",href:"/TU2025gradulate/projects/"},{label:"PEOPLES",href:"/TU2025gradulate/peoples/"},{label:"SHOWROOM",href:"/TU2025gradulate/showroom/"},{label:"GUESTBOOK",href:"/TU2025gradulate/guestbook/"},{label:"CREDITS",href:"/TU2025gradulate/credits/"}],copyright:["ⓒ 2025 TECH UNIV KOREA. ALL RIGHTS RESERVED.","TUKOREA DESIGN ENGINEERING 20TH GRADUATION EXHIBITION"],social:{youtube:{href:"https://youtube.com/",label:"YouTube"},instagram:{href:"https://instagram.com/",label:"Instagram"}},sidePadding:350,maxWidth:1220})]})}function $N({setHeaderMode:n}){return Ot.useEffect(()=>{n(pe.GRADIENT)},[n]),x.jsx(c4,{})}function FN({setHeaderMode:n}){return Ot.useEffect(()=>{n(pe.GRADIENT)},[n]),x.jsx(H4,{})}function qN({setHeaderMode:n}){return Ot.useEffect(()=>{n(pe.GRADIENT)},[n]),x.jsx(m3,{})}function KN({setHeaderMode:n}){return Ot.useEffect(()=>{n(pe.GRADIENT_DARK)},[n]),x.jsx(VD,{})}function HN({setHeaderMode:n}){return Ot.useEffect(()=>{n(pe.DARK)},[n]),x.jsx(K5,{})}function GN({setHeaderMode:n}){return Ot.useEffect(()=>{n(pe.LIGHT)},[n]),x.jsx(ON,{})}function YN(){const[n,t]=K.useState(pe.GRADIENT);return x.jsxs(JT,{basename:"/TU2025gradulate/",children:[x.jsx(zN,{}),x.jsx(jT,{children:x.jsxs(tr,{element:x.jsx(BN,{headerMode:n,setHeaderMode:t}),children:[x.jsx(tr,{index:!0,element:x.jsx(KN,{setHeaderMode:t})}),x.jsx(tr,{path:"projects/",element:x.jsx(qN,{setHeaderMode:t})}),x.jsx(tr,{path:"peoples/",element:x.jsx(FN,{setHeaderMode:t})}),x.jsx(tr,{path:"guestbook/",element:x.jsx(HN,{setHeaderMode:t})}),x.jsx(tr,{path:"work/:pid",element:x.jsx(GN,{setHeaderMode:t})}),x.jsx(tr,{path:"credits/",element:x.jsx($N,{setHeaderMode:t})}),x.jsx(tr,{path:"*",element:x.jsx(RT,{to:"/",replace:!0})})]})})]})}const y_=typeof document<"u"?document.getElementById("root"):null;y_&&LN.createRoot(y_).render(x.jsx(YN,{}));
