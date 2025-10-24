(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(o){if(o.ep)return;o.ep=!0;const u=i(o);fetch(o.href,u)}})();function X2(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var fp={exports:{}},Ml={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d1;function vT(){if(d1)return Ml;d1=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(a,o,u){var d=null;if(u!==void 0&&(d=""+u),o.key!==void 0&&(d=""+o.key),"key"in o){u={};for(var p in o)p!=="key"&&(u[p]=o[p])}else u=o;return o=u.ref,{$$typeof:n,type:a,key:d,ref:o!==void 0?o:null,props:u}}return Ml.Fragment=e,Ml.jsx=i,Ml.jsxs=i,Ml}var f1;function _T(){return f1||(f1=1,fp.exports=vT()),fp.exports}var y=_T(),pp={exports:{}},De={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p1;function wT(){if(p1)return De;p1=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),E=Symbol.iterator;function T(P){return P===null||typeof P!="object"?null:(P=E&&P[E]||P["@@iterator"],typeof P=="function"?P:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,k={};function V(P,ae,ce){this.props=P,this.context=ae,this.refs=k,this.updater=ce||A}V.prototype.isReactComponent={},V.prototype.setState=function(P,ae){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,ae,"setState")},V.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function B(){}B.prototype=V.prototype;function q(P,ae,ce){this.props=P,this.context=ae,this.refs=k,this.updater=ce||A}var Z=q.prototype=new B;Z.constructor=q,M(Z,V.prototype),Z.isPureReactComponent=!0;var le=Array.isArray,K={H:null,A:null,T:null,S:null,V:null},oe=Object.prototype.hasOwnProperty;function I(P,ae,ce,he,ge,je){return ce=je.ref,{$$typeof:n,type:P,key:ae,ref:ce!==void 0?ce:null,props:je}}function C(P,ae){return I(P.type,ae,void 0,void 0,void 0,P.props)}function j(P){return typeof P=="object"&&P!==null&&P.$$typeof===n}function O(P){var ae={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(ce){return ae[ce]})}var U=/\/+/g;function $(P,ae){return typeof P=="object"&&P!==null&&P.key!=null?O(""+P.key):ae.toString(36)}function D(){}function st(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(D,D):(P.status="pending",P.then(function(ae){P.status==="pending"&&(P.status="fulfilled",P.value=ae)},function(ae){P.status==="pending"&&(P.status="rejected",P.reason=ae)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function Ke(P,ae,ce,he,ge){var je=typeof P;(je==="undefined"||je==="boolean")&&(P=null);var _e=!1;if(P===null)_e=!0;else switch(je){case"bigint":case"string":case"number":_e=!0;break;case"object":switch(P.$$typeof){case n:case e:_e=!0;break;case v:return _e=P._init,Ke(_e(P._payload),ae,ce,he,ge)}}if(_e)return ge=ge(P),_e=he===""?"."+$(P,0):he,le(ge)?(ce="",_e!=null&&(ce=_e.replace(U,"$&/")+"/"),Ke(ge,ae,ce,"",function(Mt){return Mt})):ge!=null&&(j(ge)&&(ge=C(ge,ce+(ge.key==null||P&&P.key===ge.key?"":(""+ge.key).replace(U,"$&/")+"/")+_e)),ae.push(ge)),1;_e=0;var gt=he===""?".":he+":";if(le(P))for(var Le=0;Le<P.length;Le++)he=P[Le],je=gt+$(he,Le),_e+=Ke(he,ae,ce,je,ge);else if(Le=T(P),typeof Le=="function")for(P=Le.call(P),Le=0;!(he=P.next()).done;)he=he.value,je=gt+$(he,Le++),_e+=Ke(he,ae,ce,je,ge);else if(je==="object"){if(typeof P.then=="function")return Ke(st(P),ae,ce,he,ge);throw ae=String(P),Error("Objects are not valid as a React child (found: "+(ae==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":ae)+"). If you meant to render a collection of children, use an array instead.")}return _e}function ee(P,ae,ce){if(P==null)return P;var he=[],ge=0;return Ke(P,he,"","",function(je){return ae.call(ce,je,ge++)}),he}function de(P){if(P._status===-1){var ae=P._result;ae=ae(),ae.then(function(ce){(P._status===0||P._status===-1)&&(P._status=1,P._result=ce)},function(ce){(P._status===0||P._status===-1)&&(P._status=2,P._result=ce)}),P._status===-1&&(P._status=0,P._result=ae)}if(P._status===1)return P._result.default;throw P._result}var ye=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ae=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(ae))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)};function Ce(){}return De.Children={map:ee,forEach:function(P,ae,ce){ee(P,function(){ae.apply(this,arguments)},ce)},count:function(P){var ae=0;return ee(P,function(){ae++}),ae},toArray:function(P){return ee(P,function(ae){return ae})||[]},only:function(P){if(!j(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},De.Component=V,De.Fragment=i,De.Profiler=o,De.PureComponent=q,De.StrictMode=a,De.Suspense=m,De.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,De.__COMPILER_RUNTIME={__proto__:null,c:function(P){return K.H.useMemoCache(P)}},De.cache=function(P){return function(){return P.apply(null,arguments)}},De.cloneElement=function(P,ae,ce){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var he=M({},P.props),ge=P.key,je=void 0;if(ae!=null)for(_e in ae.ref!==void 0&&(je=void 0),ae.key!==void 0&&(ge=""+ae.key),ae)!oe.call(ae,_e)||_e==="key"||_e==="__self"||_e==="__source"||_e==="ref"&&ae.ref===void 0||(he[_e]=ae[_e]);var _e=arguments.length-2;if(_e===1)he.children=ce;else if(1<_e){for(var gt=Array(_e),Le=0;Le<_e;Le++)gt[Le]=arguments[Le+2];he.children=gt}return I(P.type,ge,void 0,void 0,je,he)},De.createContext=function(P){return P={$$typeof:d,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:u,_context:P},P},De.createElement=function(P,ae,ce){var he,ge={},je=null;if(ae!=null)for(he in ae.key!==void 0&&(je=""+ae.key),ae)oe.call(ae,he)&&he!=="key"&&he!=="__self"&&he!=="__source"&&(ge[he]=ae[he]);var _e=arguments.length-2;if(_e===1)ge.children=ce;else if(1<_e){for(var gt=Array(_e),Le=0;Le<_e;Le++)gt[Le]=arguments[Le+2];ge.children=gt}if(P&&P.defaultProps)for(he in _e=P.defaultProps,_e)ge[he]===void 0&&(ge[he]=_e[he]);return I(P,je,void 0,void 0,null,ge)},De.createRef=function(){return{current:null}},De.forwardRef=function(P){return{$$typeof:p,render:P}},De.isValidElement=j,De.lazy=function(P){return{$$typeof:v,_payload:{_status:-1,_result:P},_init:de}},De.memo=function(P,ae){return{$$typeof:g,type:P,compare:ae===void 0?null:ae}},De.startTransition=function(P){var ae=K.T,ce={};K.T=ce;try{var he=P(),ge=K.S;ge!==null&&ge(ce,he),typeof he=="object"&&he!==null&&typeof he.then=="function"&&he.then(Ce,ye)}catch(je){ye(je)}finally{K.T=ae}},De.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},De.use=function(P){return K.H.use(P)},De.useActionState=function(P,ae,ce){return K.H.useActionState(P,ae,ce)},De.useCallback=function(P,ae){return K.H.useCallback(P,ae)},De.useContext=function(P){return K.H.useContext(P)},De.useDebugValue=function(){},De.useDeferredValue=function(P,ae){return K.H.useDeferredValue(P,ae)},De.useEffect=function(P,ae,ce){var he=K.H;if(typeof ce=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return he.useEffect(P,ae)},De.useId=function(){return K.H.useId()},De.useImperativeHandle=function(P,ae,ce){return K.H.useImperativeHandle(P,ae,ce)},De.useInsertionEffect=function(P,ae){return K.H.useInsertionEffect(P,ae)},De.useLayoutEffect=function(P,ae){return K.H.useLayoutEffect(P,ae)},De.useMemo=function(P,ae){return K.H.useMemo(P,ae)},De.useOptimistic=function(P,ae){return K.H.useOptimistic(P,ae)},De.useReducer=function(P,ae,ce){return K.H.useReducer(P,ae,ce)},De.useRef=function(P){return K.H.useRef(P)},De.useState=function(P){return K.H.useState(P)},De.useSyncExternalStore=function(P,ae,ce){return K.H.useSyncExternalStore(P,ae,ce)},De.useTransition=function(){return K.H.useTransition()},De.version="19.1.1",De}var m1;function Bm(){return m1||(m1=1,pp.exports=wT()),pp.exports}var z=Bm();const be=X2(z);/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var g1="popstate";function ET(n={}){function e(a,o){let{pathname:u,search:d,hash:p}=a.location;return nm("",{pathname:u,search:d,hash:p},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function i(a,o){return typeof o=="string"?o:Zl(o)}return TT(e,i,null,n)}function dt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function ri(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function bT(){return Math.random().toString(36).substring(2,10)}function y1(n,e){return{usr:n.state,key:n.key,idx:e}}function nm(n,e,i=null,a){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?xo(e):e,state:i,key:e&&e.key||a||bT()}}function Zl({pathname:n="/",search:e="",hash:i=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(n+=i.charAt(0)==="#"?i:"#"+i),n}function xo(n){let e={};if(n){let i=n.indexOf("#");i>=0&&(e.hash=n.substring(i),n=n.substring(0,i));let a=n.indexOf("?");a>=0&&(e.search=n.substring(a),n=n.substring(0,a)),n&&(e.pathname=n)}return e}function TT(n,e,i,a={}){let{window:o=document.defaultView,v5Compat:u=!1}=a,d=o.history,p="POP",m=null,g=v();g==null&&(g=0,d.replaceState({...d.state,idx:g},""));function v(){return(d.state||{idx:null}).idx}function E(){p="POP";let V=v(),B=V==null?null:V-g;g=V,m&&m({action:p,location:k.location,delta:B})}function T(V,B){p="PUSH";let q=nm(k.location,V,B);g=v()+1;let Z=y1(q,g),le=k.createHref(q);try{d.pushState(Z,"",le)}catch(K){if(K instanceof DOMException&&K.name==="DataCloneError")throw K;o.location.assign(le)}u&&m&&m({action:p,location:k.location,delta:1})}function A(V,B){p="REPLACE";let q=nm(k.location,V,B);g=v();let Z=y1(q,g),le=k.createHref(q);d.replaceState(Z,"",le),u&&m&&m({action:p,location:k.location,delta:0})}function M(V){return ST(V)}let k={get action(){return p},get location(){return n(o,d)},listen(V){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(g1,E),m=V,()=>{o.removeEventListener(g1,E),m=null}},createHref(V){return e(o,V)},createURL:M,encodeLocation(V){let B=M(V);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:T,replace:A,go(V){return d.go(V)}};return k}function ST(n,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),dt(i,"No window.location.(origin|href) available to create URL");let a=typeof n=="string"?n:Zl(n);return a=a.replace(/ $/,"%20"),!e&&a.startsWith("//")&&(a=i+a),new URL(a,i)}function W2(n,e,i="/"){return AT(n,e,i,!1)}function AT(n,e,i,a){let o=typeof e=="string"?xo(e):e,u=rr(o.pathname||"/",i);if(u==null)return null;let d=Z2(n);RT(d);let p=null;for(let m=0;p==null&&m<d.length;++m){let g=UT(u);p=VT(d[m],g,a)}return p}function Z2(n,e=[],i=[],a="",o=!1){let u=(d,p,m=o,g)=>{let v={relativePath:g===void 0?d.path||"":g,caseSensitive:d.caseSensitive===!0,childrenIndex:p,route:d};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(a)&&m)return;dt(v.relativePath.startsWith(a),`Absolute route path "${v.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(a.length)}let E=nr([a,v.relativePath]),T=i.concat(v);d.children&&d.children.length>0&&(dt(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${E}".`),Z2(d.children,e,T,E,m)),!(d.path==null&&!d.index)&&e.push({path:E,score:OT(E,d.index),routesMeta:T})};return n.forEach((d,p)=>{if(d.path===""||!d.path?.includes("?"))u(d,p);else for(let m of J2(d.path))u(d,p,!0,m)}),e}function J2(n){let e=n.split("/");if(e.length===0)return[];let[i,...a]=e,o=i.endsWith("?"),u=i.replace(/\?$/,"");if(a.length===0)return o?[u,""]:[u];let d=J2(a.join("/")),p=[];return p.push(...d.map(m=>m===""?u:[u,m].join("/"))),o&&p.push(...d),p.map(m=>n.startsWith("/")&&m===""?"/":m)}function RT(n){n.sort((e,i)=>e.score!==i.score?i.score-e.score:kT(e.routesMeta.map(a=>a.childrenIndex),i.routesMeta.map(a=>a.childrenIndex)))}var IT=/^:[\w-]+$/,CT=3,jT=2,DT=1,NT=10,MT=-2,x1=n=>n==="*";function OT(n,e){let i=n.split("/"),a=i.length;return i.some(x1)&&(a+=MT),e&&(a+=jT),i.filter(o=>!x1(o)).reduce((o,u)=>o+(IT.test(u)?CT:u===""?DT:NT),a)}function kT(n,e){return n.length===e.length&&n.slice(0,-1).every((a,o)=>a===e[o])?n[n.length-1]-e[e.length-1]:0}function VT(n,e,i=!1){let{routesMeta:a}=n,o={},u="/",d=[];for(let p=0;p<a.length;++p){let m=a[p],g=p===a.length-1,v=u==="/"?e:e.slice(u.length)||"/",E=Eh({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},v),T=m.route;if(!E&&g&&i&&!a[a.length-1].route.index&&(E=Eh({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},v)),!E)return null;Object.assign(o,E.params),d.push({params:o,pathname:nr([u,E.pathname]),pathnameBase:BT(nr([u,E.pathnameBase])),route:T}),E.pathnameBase!=="/"&&(u=nr([u,E.pathnameBase]))}return d}function Eh(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[i,a]=PT(n.path,n.caseSensitive,n.end),o=e.match(i);if(!o)return null;let u=o[0],d=u.replace(/(.)\/+$/,"$1"),p=o.slice(1);return{params:a.reduce((g,{paramName:v,isOptional:E},T)=>{if(v==="*"){let M=p[T]||"";d=u.slice(0,u.length-M.length).replace(/(.)\/+$/,"$1")}const A=p[T];return E&&!A?g[v]=void 0:g[v]=(A||"").replace(/%2F/g,"/"),g},{}),pathname:u,pathnameBase:d,pattern:n}}function PT(n,e=!1,i=!0){ri(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let a=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,p,m)=>(a.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(a.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),a]}function UT(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ri(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function rr(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,a=n.charAt(i);return a&&a!=="/"?null:n.slice(i)||"/"}function LT(n,e="/"){let{pathname:i,search:a="",hash:o=""}=typeof n=="string"?xo(n):n;return{pathname:i?i.startsWith("/")?i:zT(i,e):e,search:FT(a),hash:KT(o)}}function zT(n,e){let i=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?i.length>1&&i.pop():o!=="."&&i.push(o)}),i.length>1?i.join("/"):"/"}function mp(n,e,i,a){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function $T(n){return n.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function Fm(n){let e=$T(n);return e.map((i,a)=>a===e.length-1?i.pathname:i.pathnameBase)}function Km(n,e,i,a=!1){let o;typeof n=="string"?o=xo(n):(o={...n},dt(!o.pathname||!o.pathname.includes("?"),mp("?","pathname","search",o)),dt(!o.pathname||!o.pathname.includes("#"),mp("#","pathname","hash",o)),dt(!o.search||!o.search.includes("#"),mp("#","search","hash",o)));let u=n===""||o.pathname==="",d=u?"/":o.pathname,p;if(d==null)p=i;else{let E=e.length-1;if(!a&&d.startsWith("..")){let T=d.split("/");for(;T[0]==="..";)T.shift(),E-=1;o.pathname=T.join("/")}p=E>=0?e[E]:"/"}let m=LT(o,p),g=d&&d!=="/"&&d.endsWith("/"),v=(u||d===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(g||v)&&(m.pathname+="/"),m}var nr=n=>n.join("/").replace(/\/\/+/g,"/"),BT=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),FT=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,KT=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function HT(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var e_=["POST","PUT","PATCH","DELETE"];new Set(e_);var qT=["GET",...e_];new Set(qT);var vo=z.createContext(null);vo.displayName="DataRouter";var Bh=z.createContext(null);Bh.displayName="DataRouterState";z.createContext(!1);var t_=z.createContext({isTransitioning:!1});t_.displayName="ViewTransition";var GT=z.createContext(new Map);GT.displayName="Fetchers";var YT=z.createContext(null);YT.displayName="Await";var si=z.createContext(null);si.displayName="Navigation";var fu=z.createContext(null);fu.displayName="Location";var Hn=z.createContext({outlet:null,matches:[],isDataRoute:!1});Hn.displayName="Route";var Hm=z.createContext(null);Hm.displayName="RouteError";function QT(n,{relative:e}={}){dt(_o(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:a}=z.useContext(si),{hash:o,pathname:u,search:d}=pu(n,{relative:e}),p=u;return i!=="/"&&(p=u==="/"?i:nr([i,u])),a.createHref({pathname:p,search:d,hash:o})}function _o(){return z.useContext(fu)!=null}function ji(){return dt(_o(),"useLocation() may be used only in the context of a <Router> component."),z.useContext(fu).location}var n_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function i_(n){z.useContext(si).static||z.useLayoutEffect(n)}function Fh(){let{isDataRoute:n}=z.useContext(Hn);return n?h4():XT()}function XT(){dt(_o(),"useNavigate() may be used only in the context of a <Router> component.");let n=z.useContext(vo),{basename:e,navigator:i}=z.useContext(si),{matches:a}=z.useContext(Hn),{pathname:o}=ji(),u=JSON.stringify(Fm(a)),d=z.useRef(!1);return i_(()=>{d.current=!0}),z.useCallback((m,g={})=>{if(ri(d.current,n_),!d.current)return;if(typeof m=="number"){i.go(m);return}let v=Km(m,JSON.parse(u),o,g.relative==="path");n==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:nr([e,v.pathname])),(g.replace?i.replace:i.push)(v,g.state,g)},[e,i,u,o,n])}var WT=z.createContext(null);function ZT(n){let e=z.useContext(Hn).outlet;return e&&z.createElement(WT.Provider,{value:n},e)}function JT(){let{matches:n}=z.useContext(Hn),e=n[n.length-1];return e?e.params:{}}function pu(n,{relative:e}={}){let{matches:i}=z.useContext(Hn),{pathname:a}=ji(),o=JSON.stringify(Fm(i));return z.useMemo(()=>Km(n,JSON.parse(o),a,e==="path"),[n,o,a,e])}function e4(n,e){return r_(n,e)}function r_(n,e,i,a,o){dt(_o(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=z.useContext(si),{matches:d}=z.useContext(Hn),p=d[d.length-1],m=p?p.params:{},g=p?p.pathname:"/",v=p?p.pathnameBase:"/",E=p&&p.route;{let q=E&&E.path||"";a_(g,!E||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let T=ji(),A;if(e){let q=typeof e=="string"?xo(e):e;dt(v==="/"||q.pathname?.startsWith(v),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${q.pathname}" was given in the \`location\` prop.`),A=q}else A=T;let M=A.pathname||"/",k=M;if(v!=="/"){let q=v.replace(/^\//,"").split("/");k="/"+M.replace(/^\//,"").split("/").slice(q.length).join("/")}let V=W2(n,{pathname:k});ri(E||V!=null,`No routes matched location "${A.pathname}${A.search}${A.hash}" `),ri(V==null||V[V.length-1].route.element!==void 0||V[V.length-1].route.Component!==void 0||V[V.length-1].route.lazy!==void 0,`Matched leaf route at location "${A.pathname}${A.search}${A.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let B=a4(V&&V.map(q=>Object.assign({},q,{params:Object.assign({},m,q.params),pathname:nr([v,u.encodeLocation?u.encodeLocation(q.pathname).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?v:nr([v,u.encodeLocation?u.encodeLocation(q.pathnameBase).pathname:q.pathnameBase])})),d,i,a,o);return e&&B?z.createElement(fu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...A},navigationType:"POP"}},B):B}function t4(){let n=c4(),e=HT(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),i=n instanceof Error?n.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},u={padding:"2px 4px",backgroundColor:a},d=null;return console.error("Error handled by React Router default ErrorBoundary:",n),d=z.createElement(z.Fragment,null,z.createElement("p",null,"💿 Hey developer 👋"),z.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",z.createElement("code",{style:u},"ErrorBoundary")," or"," ",z.createElement("code",{style:u},"errorElement")," prop on your route.")),z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},e),i?z.createElement("pre",{style:o},i):null,d)}var n4=z.createElement(t4,null),i4=class extends z.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){this.props.unstable_onError?this.props.unstable_onError(n,e):console.error("React Router caught the following error during render",n)}render(){return this.state.error!==void 0?z.createElement(Hn.Provider,{value:this.props.routeContext},z.createElement(Hm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function r4({routeContext:n,match:e,children:i}){let a=z.useContext(vo);return a&&a.static&&a.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=e.route.id),z.createElement(Hn.Provider,{value:n},i)}function a4(n,e=[],i=null,a=null,o=null){if(n==null){if(!i)return null;if(i.errors)n=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)n=i.matches;else return null}let u=n,d=i?.errors;if(d!=null){let g=u.findIndex(v=>v.route.id&&d?.[v.route.id]!==void 0);dt(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),u=u.slice(0,Math.min(u.length,g+1))}let p=!1,m=-1;if(i)for(let g=0;g<u.length;g++){let v=u[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(m=g),v.route.id){let{loaderData:E,errors:T}=i,A=v.route.loader&&!E.hasOwnProperty(v.route.id)&&(!T||T[v.route.id]===void 0);if(v.route.lazy||A){p=!0,m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}return u.reduceRight((g,v,E)=>{let T,A=!1,M=null,k=null;i&&(T=d&&v.route.id?d[v.route.id]:void 0,M=v.route.errorElement||n4,p&&(m<0&&E===0?(a_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),A=!0,k=null):m===E&&(A=!0,k=v.route.hydrateFallbackElement||null)));let V=e.concat(u.slice(0,E+1)),B=()=>{let q;return T?q=M:A?q=k:v.route.Component?q=z.createElement(v.route.Component,null):v.route.element?q=v.route.element:q=g,z.createElement(r4,{match:v,routeContext:{outlet:g,matches:V,isDataRoute:i!=null},children:q})};return i&&(v.route.ErrorBoundary||v.route.errorElement||E===0)?z.createElement(i4,{location:i.location,revalidation:i.revalidation,component:M,error:T,children:B(),routeContext:{outlet:null,matches:V,isDataRoute:!0},unstable_onError:a}):B()},null)}function qm(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function s4(n){let e=z.useContext(vo);return dt(e,qm(n)),e}function o4(n){let e=z.useContext(Bh);return dt(e,qm(n)),e}function l4(n){let e=z.useContext(Hn);return dt(e,qm(n)),e}function Gm(n){let e=l4(n),i=e.matches[e.matches.length-1];return dt(i.route.id,`${n} can only be used on routes that contain a unique "id"`),i.route.id}function u4(){return Gm("useRouteId")}function c4(){let n=z.useContext(Hm),e=o4("useRouteError"),i=Gm("useRouteError");return n!==void 0?n:e.errors?.[i]}function h4(){let{router:n}=s4("useNavigate"),e=Gm("useNavigate"),i=z.useRef(!1);return i_(()=>{i.current=!0}),z.useCallback(async(o,u={})=>{ri(i.current,n_),i.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:e,...u}))},[n,e])}var v1={};function a_(n,e,i){!e&&!v1[n]&&(v1[n]=!0,ri(!1,i))}z.memo(d4);function d4({routes:n,future:e,state:i,unstable_onError:a}){return r_(n,void 0,i,a,e)}function f4({to:n,replace:e,state:i,relative:a}){dt(_o(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=z.useContext(si);ri(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=z.useContext(Hn),{pathname:d}=ji(),p=Fh(),m=Km(n,Fm(u),d,a==="path"),g=JSON.stringify(m);return z.useEffect(()=>{p(JSON.parse(g),{replace:e,state:i,relative:a})},[p,g,a,e,i]),null}function p4(n){return ZT(n.context)}function wi(n){dt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function m4({basename:n="/",children:e=null,location:i,navigationType:a="POP",navigator:o,static:u=!1}){dt(!_o(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=n.replace(/^\/*/,"/"),p=z.useMemo(()=>({basename:d,navigator:o,static:u,future:{}}),[d,o,u]);typeof i=="string"&&(i=xo(i));let{pathname:m="/",search:g="",hash:v="",state:E=null,key:T="default"}=i,A=z.useMemo(()=>{let M=rr(m,d);return M==null?null:{location:{pathname:M,search:g,hash:v,state:E,key:T},navigationType:a}},[d,m,g,v,E,T,a]);return ri(A!=null,`<Router basename="${d}"> is not able to match the URL "${m}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),A==null?null:z.createElement(si.Provider,{value:p},z.createElement(fu.Provider,{children:e,value:A}))}function g4({children:n,location:e}){return e4(im(n),e)}function im(n,e=[]){let i=[];return z.Children.forEach(n,(a,o)=>{if(!z.isValidElement(a))return;let u=[...e,o];if(a.type===z.Fragment){i.push.apply(i,im(a.props.children,u));return}dt(a.type===wi,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),dt(!a.props.index||!a.props.children,"An index route cannot have child routes.");let d={id:a.props.id||u.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(d.children=im(a.props.children,u)),i.push(d)}),i}var rh="get",ah="application/x-www-form-urlencoded";function Kh(n){return n!=null&&typeof n.tagName=="string"}function y4(n){return Kh(n)&&n.tagName.toLowerCase()==="button"}function x4(n){return Kh(n)&&n.tagName.toLowerCase()==="form"}function v4(n){return Kh(n)&&n.tagName.toLowerCase()==="input"}function _4(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function w4(n,e){return n.button===0&&(!e||e==="_self")&&!_4(n)}var Kc=null;function E4(){if(Kc===null)try{new FormData(document.createElement("form"),0),Kc=!1}catch{Kc=!0}return Kc}var b4=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function gp(n){return n!=null&&!b4.has(n)?(ri(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ah}"`),null):n}function T4(n,e){let i,a,o,u,d;if(x4(n)){let p=n.getAttribute("action");a=p?rr(p,e):null,i=n.getAttribute("method")||rh,o=gp(n.getAttribute("enctype"))||ah,u=new FormData(n)}else if(y4(n)||v4(n)&&(n.type==="submit"||n.type==="image")){let p=n.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=n.getAttribute("formaction")||p.getAttribute("action");if(a=m?rr(m,e):null,i=n.getAttribute("formmethod")||p.getAttribute("method")||rh,o=gp(n.getAttribute("formenctype"))||gp(p.getAttribute("enctype"))||ah,u=new FormData(p,n),!E4()){let{name:g,type:v,value:E}=n;if(v==="image"){let T=g?`${g}.`:"";u.append(`${T}x`,"0"),u.append(`${T}y`,"0")}else g&&u.append(g,E)}}else{if(Kh(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=rh,a=null,o=ah,d=n}return u&&o==="text/plain"&&(d=u,u=void 0),{action:a,method:i.toLowerCase(),encType:o,formData:u,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ym(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function S4(n,e,i){let a=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return a.pathname==="/"?a.pathname=`_root.${i}`:e&&rr(a.pathname,e)==="/"?a.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${i}`,a}async function A4(n,e){if(n.id in e)return e[n.id];try{let i=await import(n.module);return e[n.id]=i,i}catch(i){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function R4(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function I4(n,e,i){let a=await Promise.all(n.map(async o=>{let u=e.routes[o.route.id];if(u){let d=await A4(u,i);return d.links?d.links():[]}return[]}));return N4(a.flat(1).filter(R4).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function _1(n,e,i,a,o,u){let d=(m,g)=>i[g]?m.route.id!==i[g].route.id:!0,p=(m,g)=>i[g].pathname!==m.pathname||i[g].route.path?.endsWith("*")&&i[g].params["*"]!==m.params["*"];return u==="assets"?e.filter((m,g)=>d(m,g)||p(m,g)):u==="data"?e.filter((m,g)=>{let v=a.routes[m.route.id];if(!v||!v.hasLoader)return!1;if(d(m,g)||p(m,g))return!0;if(m.route.shouldRevalidate){let E=m.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof E=="boolean")return E}return!0}):[]}function C4(n,e,{includeHydrateFallback:i}={}){return j4(n.map(a=>{let o=e.routes[a.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),i&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function j4(n){return[...new Set(n)]}function D4(n){let e={},i=Object.keys(n).sort();for(let a of i)e[a]=n[a];return e}function N4(n,e){let i=new Set;return new Set(e),n.reduce((a,o)=>{let u=JSON.stringify(D4(o));return i.has(u)||(i.add(u),a.push({key:u,link:o})),a},[])}function s_(){let n=z.useContext(vo);return Ym(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function M4(){let n=z.useContext(Bh);return Ym(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Qm=z.createContext(void 0);Qm.displayName="FrameworkContext";function o_(){let n=z.useContext(Qm);return Ym(n,"You must render this element inside a <HydratedRouter> element"),n}function O4(n,e){let i=z.useContext(Qm),[a,o]=z.useState(!1),[u,d]=z.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:g,onMouseLeave:v,onTouchStart:E}=e,T=z.useRef(null);z.useEffect(()=>{if(n==="render"&&d(!0),n==="viewport"){let k=B=>{B.forEach(q=>{d(q.isIntersecting)})},V=new IntersectionObserver(k,{threshold:.5});return T.current&&V.observe(T.current),()=>{V.disconnect()}}},[n]),z.useEffect(()=>{if(a){let k=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(k)}}},[a]);let A=()=>{o(!0)},M=()=>{o(!1),d(!1)};return i?n!=="intent"?[u,T,{}]:[u,T,{onFocus:Ol(p,A),onBlur:Ol(m,M),onMouseEnter:Ol(g,A),onMouseLeave:Ol(v,M),onTouchStart:Ol(E,A)}]:[!1,T,{}]}function Ol(n,e){return i=>{n&&n(i),i.defaultPrevented||e(i)}}function k4({page:n,...e}){let{router:i}=s_(),a=z.useMemo(()=>W2(i.routes,n,i.basename),[i.routes,n,i.basename]);return a?z.createElement(P4,{page:n,matches:a,...e}):null}function V4(n){let{manifest:e,routeModules:i}=o_(),[a,o]=z.useState([]);return z.useEffect(()=>{let u=!1;return I4(n,e,i).then(d=>{u||o(d)}),()=>{u=!0}},[n,e,i]),a}function P4({page:n,matches:e,...i}){let a=ji(),{manifest:o,routeModules:u}=o_(),{basename:d}=s_(),{loaderData:p,matches:m}=M4(),g=z.useMemo(()=>_1(n,e,m,o,a,"data"),[n,e,m,o,a]),v=z.useMemo(()=>_1(n,e,m,o,a,"assets"),[n,e,m,o,a]),E=z.useMemo(()=>{if(n===a.pathname+a.search+a.hash)return[];let M=new Set,k=!1;if(e.forEach(B=>{let q=o.routes[B.route.id];!q||!q.hasLoader||(!g.some(Z=>Z.route.id===B.route.id)&&B.route.id in p&&u[B.route.id]?.shouldRevalidate||q.hasClientLoader?k=!0:M.add(B.route.id))}),M.size===0)return[];let V=S4(n,d,"data");return k&&M.size>0&&V.searchParams.set("_routes",e.filter(B=>M.has(B.route.id)).map(B=>B.route.id).join(",")),[V.pathname+V.search]},[d,p,a,o,g,e,n,u]),T=z.useMemo(()=>C4(v,o),[v,o]),A=V4(v);return z.createElement(z.Fragment,null,E.map(M=>z.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...i})),T.map(M=>z.createElement("link",{key:M,rel:"modulepreload",href:M,...i})),A.map(({key:M,link:k})=>z.createElement("link",{key:M,nonce:i.nonce,...k})))}function U4(...n){return e=>{n.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var l_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{l_&&(window.__reactRouterVersion="7.9.1")}catch{}function L4({basename:n,children:e,window:i}){let a=z.useRef();a.current==null&&(a.current=ET({window:i,v5Compat:!0}));let o=a.current,[u,d]=z.useState({action:o.action,location:o.location}),p=z.useCallback(m=>{z.startTransition(()=>d(m))},[d]);return z.useLayoutEffect(()=>o.listen(p),[o,p]),z.createElement(m4,{basename:n,children:e,location:u.location,navigationType:u.action,navigator:o})}var u_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,es=z.forwardRef(function({onClick:e,discover:i="render",prefetch:a="none",relative:o,reloadDocument:u,replace:d,state:p,target:m,to:g,preventScrollReset:v,viewTransition:E,...T},A){let{basename:M}=z.useContext(si),k=typeof g=="string"&&u_.test(g),V,B=!1;if(typeof g=="string"&&k&&(V=g,l_))try{let j=new URL(window.location.href),O=g.startsWith("//")?new URL(j.protocol+g):new URL(g),U=rr(O.pathname,M);O.origin===j.origin&&U!=null?g=U+O.search+O.hash:B=!0}catch{ri(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let q=QT(g,{relative:o}),[Z,le,K]=O4(a,T),oe=F4(g,{replace:d,state:p,target:m,preventScrollReset:v,relative:o,viewTransition:E});function I(j){e&&e(j),j.defaultPrevented||oe(j)}let C=z.createElement("a",{...T,...K,href:V||q,onClick:B||u?e:I,ref:U4(A,le),target:m,"data-discover":!k&&i==="render"?"true":void 0});return Z&&!k?z.createElement(z.Fragment,null,C,z.createElement(k4,{page:q})):C});es.displayName="Link";var z4=z.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:a="",end:o=!1,style:u,to:d,viewTransition:p,children:m,...g},v){let E=pu(d,{relative:g.relative}),T=ji(),A=z.useContext(Bh),{navigator:M,basename:k}=z.useContext(si),V=A!=null&&Y4(E)&&p===!0,B=M.encodeLocation?M.encodeLocation(E).pathname:E.pathname,q=T.pathname,Z=A&&A.navigation&&A.navigation.location?A.navigation.location.pathname:null;i||(q=q.toLowerCase(),Z=Z?Z.toLowerCase():null,B=B.toLowerCase()),Z&&k&&(Z=rr(Z,k)||Z);const le=B!=="/"&&B.endsWith("/")?B.length-1:B.length;let K=q===B||!o&&q.startsWith(B)&&q.charAt(le)==="/",oe=Z!=null&&(Z===B||!o&&Z.startsWith(B)&&Z.charAt(B.length)==="/"),I={isActive:K,isPending:oe,isTransitioning:V},C=K?e:void 0,j;typeof a=="function"?j=a(I):j=[a,K?"active":null,oe?"pending":null,V?"transitioning":null].filter(Boolean).join(" ");let O=typeof u=="function"?u(I):u;return z.createElement(es,{...g,"aria-current":C,className:j,ref:v,style:O,to:d,viewTransition:p},typeof m=="function"?m(I):m)});z4.displayName="NavLink";var $4=z.forwardRef(({discover:n="render",fetcherKey:e,navigate:i,reloadDocument:a,replace:o,state:u,method:d=rh,action:p,onSubmit:m,relative:g,preventScrollReset:v,viewTransition:E,...T},A)=>{let M=q4(),k=G4(p,{relative:g}),V=d.toLowerCase()==="get"?"get":"post",B=typeof p=="string"&&u_.test(p),q=Z=>{if(m&&m(Z),Z.defaultPrevented)return;Z.preventDefault();let le=Z.nativeEvent.submitter,K=le?.getAttribute("formmethod")||d;M(le||Z.currentTarget,{fetcherKey:e,method:K,navigate:i,replace:o,state:u,relative:g,preventScrollReset:v,viewTransition:E})};return z.createElement("form",{ref:A,method:V,action:k,onSubmit:a?m:q,...T,"data-discover":!B&&n==="render"?"true":void 0})});$4.displayName="Form";function B4(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function c_(n){let e=z.useContext(vo);return dt(e,B4(n)),e}function F4(n,{target:e,replace:i,state:a,preventScrollReset:o,relative:u,viewTransition:d}={}){let p=Fh(),m=ji(),g=pu(n,{relative:u});return z.useCallback(v=>{if(w4(v,e)){v.preventDefault();let E=i!==void 0?i:Zl(m)===Zl(g);p(n,{replace:E,state:a,preventScrollReset:o,relative:u,viewTransition:d})}},[m,p,g,i,a,e,n,o,u,d])}var K4=0,H4=()=>`__${String(++K4)}__`;function q4(){let{router:n}=c_("useSubmit"),{basename:e}=z.useContext(si),i=u4();return z.useCallback(async(a,o={})=>{let{action:u,method:d,encType:p,formData:m,body:g}=T4(a,e);if(o.navigate===!1){let v=o.fetcherKey||H4();await n.fetch(v,i,o.action||u,{preventScrollReset:o.preventScrollReset,formData:m,body:g,formMethod:o.method||d,formEncType:o.encType||p,flushSync:o.flushSync})}else await n.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:m,body:g,formMethod:o.method||d,formEncType:o.encType||p,replace:o.replace,state:o.state,fromRouteId:i,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,e,i])}function G4(n,{relative:e}={}){let{basename:i}=z.useContext(si),a=z.useContext(Hn);dt(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),u={...pu(n||".",{relative:e})},d=ji();if(n==null){u.search=d.search;let p=new URLSearchParams(u.search),m=p.getAll("index");if(m.some(v=>v==="")){p.delete("index"),m.filter(E=>E).forEach(E=>p.append("index",E));let v=p.toString();u.search=v?`?${v}`:""}}return(!n||n===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:nr([i,u.pathname])),Zl(u)}function Y4(n,{relative:e}={}){let i=z.useContext(t_);dt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=c_("useViewTransitionState"),o=pu(n,{relative:e});if(!i.isTransitioning)return!1;let u=rr(i.currentLocation.pathname,a)||i.currentLocation.pathname,d=rr(i.nextLocation.pathname,a)||i.nextLocation.pathname;return Eh(o.pathname,d)!=null||Eh(o.pathname,u)!=null}var yp={exports:{}},rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w1;function Q4(){if(w1)return rn;w1=1;var n=Bm();function e(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(m,g,v){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:E==null?null:""+E,children:m,containerInfo:g,implementation:v}}var d=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,rn.createPortal=function(m,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return u(m,g,null,v)},rn.flushSync=function(m){var g=d.T,v=a.p;try{if(d.T=null,a.p=2,m)return m()}finally{d.T=g,a.p=v,a.d.f()}},rn.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,a.d.C(m,g))},rn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},rn.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var v=g.as,E=p(v,g.crossOrigin),T=typeof g.integrity=="string"?g.integrity:void 0,A=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?a.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:E,integrity:T,fetchPriority:A}):v==="script"&&a.d.X(m,{crossOrigin:E,integrity:T,fetchPriority:A,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},rn.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=p(g.as,g.crossOrigin);a.d.M(m,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&a.d.M(m)},rn.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,E=p(v,g.crossOrigin);a.d.L(m,v,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},rn.preloadModule=function(m,g){if(typeof m=="string")if(g){var v=p(g.as,g.crossOrigin);a.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else a.d.m(m)},rn.requestFormReset=function(m){a.d.r(m)},rn.unstable_batchedUpdates=function(m,g){return m(g)},rn.useFormState=function(m,g,v){return d.H.useFormState(m,g,v)},rn.useFormStatus=function(){return d.H.useHostTransitionStatus()},rn.version="19.1.1",rn}var E1;function X4(){if(E1)return yp.exports;E1=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),yp.exports=Q4(),yp.exports}var xp={exports:{}},vp,b1;function W4(){if(b1)return vp;b1=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return vp=n,vp}var _p,T1;function Z4(){if(T1)return _p;T1=1;var n=W4();function e(){}function i(){}return i.resetWarningCache=e,_p=function(){function a(d,p,m,g,v,E){if(E!==n){var T=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw T.name="Invariant Violation",T}}a.isRequired=a;function o(){return a}var u={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:o,element:a,elementType:a,instanceOf:o,node:a,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:i,resetWarningCache:e};return u.PropTypes=u,u},_p}var S1;function J4(){return S1||(S1=1,xp.exports=Z4()()),xp.exports}var eS=J4();const J=X2(eS);var _n=function(){return _n=Object.assign||function(e){for(var i,a=1,o=arguments.length;a<o;a++){i=arguments[a];for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&(e[u]=i[u])}return e},_n.apply(this,arguments)};function Jl(n,e,i){if(i||arguments.length===2)for(var a=0,o=e.length,u;a<o;a++)(u||!(a in e))&&(u||(u=Array.prototype.slice.call(e,0,a)),u[a]=e[a]);return n.concat(u||Array.prototype.slice.call(e))}var lt="-ms-",Fl="-moz-",Ge="-webkit-",h_="comm",Hh="rule",Xm="decl",tS="@import",d_="@keyframes",nS="@layer",f_=Math.abs,Wm=String.fromCharCode,rm=Object.assign;function iS(n,e){return qt(n,0)^45?(((e<<2^qt(n,0))<<2^qt(n,1))<<2^qt(n,2))<<2^qt(n,3):0}function p_(n){return n.trim()}function tr(n,e){return(n=e.exec(n))?n[0]:n}function Ne(n,e,i){return n.replace(e,i)}function sh(n,e,i){return n.indexOf(e,i)}function qt(n,e){return n.charCodeAt(e)|0}function ao(n,e,i){return n.slice(e,i)}function bi(n){return n.length}function m_(n){return n.length}function Ul(n,e){return e.push(n),n}function rS(n,e){return n.map(e).join("")}function A1(n,e){return n.filter(function(i){return!tr(i,e)})}var qh=1,so=1,g_=0,Kn=0,jt=0,wo="";function Gh(n,e,i,a,o,u,d,p){return{value:n,root:e,parent:i,type:a,props:o,children:u,line:qh,column:so,length:d,return:"",siblings:p}}function Yr(n,e){return rm(Gh("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function Gs(n){for(;n.root;)n=Yr(n.root,{children:[n]});Ul(n,n.siblings)}function aS(){return jt}function sS(){return jt=Kn>0?qt(wo,--Kn):0,so--,jt===10&&(so=1,qh--),jt}function ii(){return jt=Kn<g_?qt(wo,Kn++):0,so++,jt===10&&(so=1,qh++),jt}function Ya(){return qt(wo,Kn)}function oh(){return Kn}function Yh(n,e){return ao(wo,n,e)}function am(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function oS(n){return qh=so=1,g_=bi(wo=n),Kn=0,[]}function lS(n){return wo="",n}function wp(n){return p_(Yh(Kn-1,sm(n===91?n+2:n===40?n+1:n)))}function uS(n){for(;(jt=Ya())&&jt<33;)ii();return am(n)>2||am(jt)>3?"":" "}function cS(n,e){for(;--e&&ii()&&!(jt<48||jt>102||jt>57&&jt<65||jt>70&&jt<97););return Yh(n,oh()+(e<6&&Ya()==32&&ii()==32))}function sm(n){for(;ii();)switch(jt){case n:return Kn;case 34:case 39:n!==34&&n!==39&&sm(jt);break;case 40:n===41&&sm(n);break;case 92:ii();break}return Kn}function hS(n,e){for(;ii()&&n+jt!==57;)if(n+jt===84&&Ya()===47)break;return"/*"+Yh(e,Kn-1)+"*"+Wm(n===47?n:ii())}function dS(n){for(;!am(Ya());)ii();return Yh(n,Kn)}function fS(n){return lS(lh("",null,null,null,[""],n=oS(n),0,[0],n))}function lh(n,e,i,a,o,u,d,p,m){for(var g=0,v=0,E=d,T=0,A=0,M=0,k=1,V=1,B=1,q=0,Z="",le=o,K=u,oe=a,I=Z;V;)switch(M=q,q=ii()){case 40:if(M!=108&&qt(I,E-1)==58){sh(I+=Ne(wp(q),"&","&\f"),"&\f",f_(g?p[g-1]:0))!=-1&&(B=-1);break}case 34:case 39:case 91:I+=wp(q);break;case 9:case 10:case 13:case 32:I+=uS(M);break;case 92:I+=cS(oh()-1,7);continue;case 47:switch(Ya()){case 42:case 47:Ul(pS(hS(ii(),oh()),e,i,m),m);break;default:I+="/"}break;case 123*k:p[g++]=bi(I)*B;case 125*k:case 59:case 0:switch(q){case 0:case 125:V=0;case 59+v:B==-1&&(I=Ne(I,/\f/g,"")),A>0&&bi(I)-E&&Ul(A>32?I1(I+";",a,i,E-1,m):I1(Ne(I," ","")+";",a,i,E-2,m),m);break;case 59:I+=";";default:if(Ul(oe=R1(I,e,i,g,v,o,p,Z,le=[],K=[],E,u),u),q===123)if(v===0)lh(I,e,oe,oe,le,u,E,p,K);else switch(T===99&&qt(I,3)===110?100:T){case 100:case 108:case 109:case 115:lh(n,oe,oe,a&&Ul(R1(n,oe,oe,0,0,o,p,Z,o,le=[],E,K),K),o,K,E,p,a?le:K);break;default:lh(I,oe,oe,oe,[""],K,0,p,K)}}g=v=A=0,k=B=1,Z=I="",E=d;break;case 58:E=1+bi(I),A=M;default:if(k<1){if(q==123)--k;else if(q==125&&k++==0&&sS()==125)continue}switch(I+=Wm(q),q*k){case 38:B=v>0?1:(I+="\f",-1);break;case 44:p[g++]=(bi(I)-1)*B,B=1;break;case 64:Ya()===45&&(I+=wp(ii())),T=Ya(),v=E=bi(Z=I+=dS(oh())),q++;break;case 45:M===45&&bi(I)==2&&(k=0)}}return u}function R1(n,e,i,a,o,u,d,p,m,g,v,E){for(var T=o-1,A=o===0?u:[""],M=m_(A),k=0,V=0,B=0;k<a;++k)for(var q=0,Z=ao(n,T+1,T=f_(V=d[k])),le=n;q<M;++q)(le=p_(V>0?A[q]+" "+Z:Ne(Z,/&\f/g,A[q])))&&(m[B++]=le);return Gh(n,e,i,o===0?Hh:p,m,g,v,E)}function pS(n,e,i,a){return Gh(n,e,i,h_,Wm(aS()),ao(n,2,-2),0,a)}function I1(n,e,i,a,o){return Gh(n,e,i,Xm,ao(n,0,a),ao(n,a+1,-1),a,o)}function y_(n,e,i){switch(iS(n,e)){case 5103:return Ge+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ge+n+n;case 4789:return Fl+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Ge+n+Fl+n+lt+n+n;case 5936:switch(qt(n,e+11)){case 114:return Ge+n+lt+Ne(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Ge+n+lt+Ne(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Ge+n+lt+Ne(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Ge+n+lt+n+n;case 6165:return Ge+n+lt+"flex-"+n+n;case 5187:return Ge+n+Ne(n,/(\w+).+(:[^]+)/,Ge+"box-$1$2"+lt+"flex-$1$2")+n;case 5443:return Ge+n+lt+"flex-item-"+Ne(n,/flex-|-self/g,"")+(tr(n,/flex-|baseline/)?"":lt+"grid-row-"+Ne(n,/flex-|-self/g,""))+n;case 4675:return Ge+n+lt+"flex-line-pack"+Ne(n,/align-content|flex-|-self/g,"")+n;case 5548:return Ge+n+lt+Ne(n,"shrink","negative")+n;case 5292:return Ge+n+lt+Ne(n,"basis","preferred-size")+n;case 6060:return Ge+"box-"+Ne(n,"-grow","")+Ge+n+lt+Ne(n,"grow","positive")+n;case 4554:return Ge+Ne(n,/([^-])(transform)/g,"$1"+Ge+"$2")+n;case 6187:return Ne(Ne(Ne(n,/(zoom-|grab)/,Ge+"$1"),/(image-set)/,Ge+"$1"),n,"")+n;case 5495:case 3959:return Ne(n,/(image-set\([^]*)/,Ge+"$1$`$1");case 4968:return Ne(Ne(n,/(.+:)(flex-)?(.*)/,Ge+"box-pack:$3"+lt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ge+n+n;case 4200:if(!tr(n,/flex-|baseline/))return lt+"grid-column-align"+ao(n,e)+n;break;case 2592:case 3360:return lt+Ne(n,"template-","")+n;case 4384:case 3616:return i&&i.some(function(a,o){return e=o,tr(a.props,/grid-\w+-end/)})?~sh(n+(i=i[e].value),"span",0)?n:lt+Ne(n,"-start","")+n+lt+"grid-row-span:"+(~sh(i,"span",0)?tr(i,/\d+/):+tr(i,/\d+/)-+tr(n,/\d+/))+";":lt+Ne(n,"-start","")+n;case 4896:case 4128:return i&&i.some(function(a){return tr(a.props,/grid-\w+-start/)})?n:lt+Ne(Ne(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Ne(n,/(.+)-inline(.+)/,Ge+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(bi(n)-1-e>6)switch(qt(n,e+1)){case 109:if(qt(n,e+4)!==45)break;case 102:return Ne(n,/(.+:)(.+)-([^]+)/,"$1"+Ge+"$2-$3$1"+Fl+(qt(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~sh(n,"stretch",0)?y_(Ne(n,"stretch","fill-available"),e,i)+n:n}break;case 5152:case 5920:return Ne(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,o,u,d,p,m,g){return lt+o+":"+u+g+(d?lt+o+"-span:"+(p?m:+m-+u)+g:"")+n});case 4949:if(qt(n,e+6)===121)return Ne(n,":",":"+Ge)+n;break;case 6444:switch(qt(n,qt(n,14)===45?18:11)){case 120:return Ne(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ge+(qt(n,14)===45?"inline-":"")+"box$3$1"+Ge+"$2$3$1"+lt+"$2box$3")+n;case 100:return Ne(n,":",":"+lt)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ne(n,"scroll-","scroll-snap-")+n}return n}function bh(n,e){for(var i="",a=0;a<n.length;a++)i+=e(n[a],a,n,e)||"";return i}function mS(n,e,i,a){switch(n.type){case nS:if(n.children.length)break;case tS:case Xm:return n.return=n.return||n.value;case h_:return"";case d_:return n.return=n.value+"{"+bh(n.children,a)+"}";case Hh:if(!bi(n.value=n.props.join(",")))return""}return bi(i=bh(n.children,a))?n.return=n.value+"{"+i+"}":""}function gS(n){var e=m_(n);return function(i,a,o,u){for(var d="",p=0;p<e;p++)d+=n[p](i,a,o,u)||"";return d}}function yS(n){return function(e){e.root||(e=e.return)&&n(e)}}function xS(n,e,i,a){if(n.length>-1&&!n.return)switch(n.type){case Xm:n.return=y_(n.value,n.length,i);return;case d_:return bh([Yr(n,{value:Ne(n.value,"@","@"+Ge)})],a);case Hh:if(n.length)return rS(i=n.props,function(o){switch(tr(o,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Gs(Yr(n,{props:[Ne(o,/:(read-\w+)/,":"+Fl+"$1")]})),Gs(Yr(n,{props:[o]})),rm(n,{props:A1(i,a)});break;case"::placeholder":Gs(Yr(n,{props:[Ne(o,/:(plac\w+)/,":"+Ge+"input-$1")]})),Gs(Yr(n,{props:[Ne(o,/:(plac\w+)/,":"+Fl+"$1")]})),Gs(Yr(n,{props:[Ne(o,/:(plac\w+)/,lt+"input-$1")]})),Gs(Yr(n,{props:[o]})),rm(n,{props:A1(i,a)});break}return""})}}var vS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Cn={},oo=typeof process<"u"&&Cn!==void 0&&(Cn.REACT_APP_SC_ATTR||Cn.SC_ATTR)||"data-styled",x_="active",v_="data-styled-version",Qh="6.1.19",Zm=`/*!sc*/
`,Th=typeof window<"u"&&typeof document<"u",_S=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Cn!==void 0&&Cn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Cn.REACT_APP_SC_DISABLE_SPEEDY!==""?Cn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Cn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Cn!==void 0&&Cn.SC_DISABLE_SPEEDY!==void 0&&Cn.SC_DISABLE_SPEEDY!==""&&Cn.SC_DISABLE_SPEEDY!=="false"&&Cn.SC_DISABLE_SPEEDY),Xh=Object.freeze([]),lo=Object.freeze({});function wS(n,e,i){return i===void 0&&(i=lo),n.theme!==i.theme&&n.theme||e||i.theme}var __=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ES=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,bS=/(^-|-$)/g;function C1(n){return n.replace(ES,"-").replace(bS,"")}var TS=/(a)(d)/gi,Hc=52,j1=function(n){return String.fromCharCode(n+(n>25?39:97))};function om(n){var e,i="";for(e=Math.abs(n);e>Hc;e=e/Hc|0)i=j1(e%Hc)+i;return(j1(e%Hc)+i).replace(TS,"$1-$2")}var Ep,w_=5381,eo=function(n,e){for(var i=e.length;i;)n=33*n^e.charCodeAt(--i);return n},E_=function(n){return eo(w_,n)};function b_(n){return om(E_(n)>>>0)}function SS(n){return n.displayName||n.name||"Component"}function bp(n){return typeof n=="string"&&!0}var T_=typeof Symbol=="function"&&Symbol.for,S_=T_?Symbol.for("react.memo"):60115,AS=T_?Symbol.for("react.forward_ref"):60112,RS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},IS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},A_={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},CS=((Ep={})[AS]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ep[S_]=A_,Ep);function D1(n){return("type"in(e=n)&&e.type.$$typeof)===S_?A_:"$$typeof"in n?CS[n.$$typeof]:RS;var e}var jS=Object.defineProperty,DS=Object.getOwnPropertyNames,N1=Object.getOwnPropertySymbols,NS=Object.getOwnPropertyDescriptor,MS=Object.getPrototypeOf,M1=Object.prototype;function R_(n,e,i){if(typeof e!="string"){if(M1){var a=MS(e);a&&a!==M1&&R_(n,a,i)}var o=DS(e);N1&&(o=o.concat(N1(e)));for(var u=D1(n),d=D1(e),p=0;p<o.length;++p){var m=o[p];if(!(m in IS||i&&i[m]||d&&m in d||u&&m in u)){var g=NS(e,m);try{jS(n,m,g)}catch{}}}}return n}function uo(n){return typeof n=="function"}function Jm(n){return typeof n=="object"&&"styledComponentId"in n}function qa(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function lm(n,e){if(n.length===0)return"";for(var i=n[0],a=1;a<n.length;a++)i+=n[a];return i}function eu(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function um(n,e,i){if(i===void 0&&(i=!1),!i&&!eu(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var a=0;a<e.length;a++)n[a]=um(n[a],e[a]);else if(eu(e))for(var a in e)n[a]=um(n[a],e[a]);return n}function eg(n,e){Object.defineProperty(n,"toString",{value:e})}function mu(n){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var OS=(function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var i=0,a=0;a<e;a++)i+=this.groupSizes[a];return i},n.prototype.insertRules=function(e,i){if(e>=this.groupSizes.length){for(var a=this.groupSizes,o=a.length,u=o;e>=u;)if((u<<=1)<0)throw mu(16,"".concat(e));this.groupSizes=new Uint32Array(u),this.groupSizes.set(a),this.length=u;for(var d=o;d<u;d++)this.groupSizes[d]=0}for(var p=this.indexOfGroup(e+1),m=(d=0,i.length);d<m;d++)this.tag.insertRule(p,i[d])&&(this.groupSizes[e]++,p++)},n.prototype.clearGroup=function(e){if(e<this.length){var i=this.groupSizes[e],a=this.indexOfGroup(e),o=a+i;this.groupSizes[e]=0;for(var u=a;u<o;u++)this.tag.deleteRule(a)}},n.prototype.getGroup=function(e){var i="";if(e>=this.length||this.groupSizes[e]===0)return i;for(var a=this.groupSizes[e],o=this.indexOfGroup(e),u=o+a,d=o;d<u;d++)i+="".concat(this.tag.getRule(d)).concat(Zm);return i},n})(),uh=new Map,Sh=new Map,ch=1,qc=function(n){if(uh.has(n))return uh.get(n);for(;Sh.has(ch);)ch++;var e=ch++;return uh.set(n,e),Sh.set(e,n),e},kS=function(n,e){ch=e+1,uh.set(n,e),Sh.set(e,n)},VS="style[".concat(oo,"][").concat(v_,'="').concat(Qh,'"]'),PS=new RegExp("^".concat(oo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),US=function(n,e,i){for(var a,o=i.split(","),u=0,d=o.length;u<d;u++)(a=o[u])&&n.registerName(e,a)},LS=function(n,e){for(var i,a=((i=e.textContent)!==null&&i!==void 0?i:"").split(Zm),o=[],u=0,d=a.length;u<d;u++){var p=a[u].trim();if(p){var m=p.match(PS);if(m){var g=0|parseInt(m[1],10),v=m[2];g!==0&&(kS(v,g),US(n,v,m[3]),n.getTag().insertRules(g,o)),o.length=0}else o.push(p)}}},O1=function(n){for(var e=document.querySelectorAll(VS),i=0,a=e.length;i<a;i++){var o=e[i];o&&o.getAttribute(oo)!==x_&&(LS(n,o),o.parentNode&&o.parentNode.removeChild(o))}};function zS(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var I_=function(n){var e=document.head,i=n||e,a=document.createElement("style"),o=(function(p){var m=Array.from(p.querySelectorAll("style[".concat(oo,"]")));return m[m.length-1]})(i),u=o!==void 0?o.nextSibling:null;a.setAttribute(oo,x_),a.setAttribute(v_,Qh);var d=zS();return d&&a.setAttribute("nonce",d),i.insertBefore(a,u),a},$S=(function(){function n(e){this.element=I_(e),this.element.appendChild(document.createTextNode("")),this.sheet=(function(i){if(i.sheet)return i.sheet;for(var a=document.styleSheets,o=0,u=a.length;o<u;o++){var d=a[o];if(d.ownerNode===i)return d}throw mu(17)})(this.element),this.length=0}return n.prototype.insertRule=function(e,i){try{return this.sheet.insertRule(i,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var i=this.sheet.cssRules[e];return i&&i.cssText?i.cssText:""},n})(),BS=(function(){function n(e){this.element=I_(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,i){if(e<=this.length&&e>=0){var a=document.createTextNode(i);return this.element.insertBefore(a,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n})(),FS=(function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,i){return e<=this.length&&(this.rules.splice(e,0,i),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n})(),k1=Th,KS={isServer:!Th,useCSSOMInjection:!_S},C_=(function(){function n(e,i,a){e===void 0&&(e=lo),i===void 0&&(i={});var o=this;this.options=_n(_n({},KS),e),this.gs=i,this.names=new Map(a),this.server=!!e.isServer,!this.server&&Th&&k1&&(k1=!1,O1(this)),eg(this,function(){return(function(u){for(var d=u.getTag(),p=d.length,m="",g=function(E){var T=(function(B){return Sh.get(B)})(E);if(T===void 0)return"continue";var A=u.names.get(T),M=d.getGroup(E);if(A===void 0||!A.size||M.length===0)return"continue";var k="".concat(oo,".g").concat(E,'[id="').concat(T,'"]'),V="";A!==void 0&&A.forEach(function(B){B.length>0&&(V+="".concat(B,","))}),m+="".concat(M).concat(k,'{content:"').concat(V,'"}').concat(Zm)},v=0;v<p;v++)g(v);return m})(o)})}return n.registerId=function(e){return qc(e)},n.prototype.rehydrate=function(){!this.server&&Th&&O1(this)},n.prototype.reconstructWithOptions=function(e,i){return i===void 0&&(i=!0),new n(_n(_n({},this.options),e),this.gs,i&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=(function(i){var a=i.useCSSOMInjection,o=i.target;return i.isServer?new FS(o):a?new $S(o):new BS(o)})(this.options),new OS(e)));var e},n.prototype.hasNameForId=function(e,i){return this.names.has(e)&&this.names.get(e).has(i)},n.prototype.registerName=function(e,i){if(qc(e),this.names.has(e))this.names.get(e).add(i);else{var a=new Set;a.add(i),this.names.set(e,a)}},n.prototype.insertRules=function(e,i,a){this.registerName(e,i),this.getTag().insertRules(qc(e),a)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup(qc(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n})(),HS=/&/g,qS=/^\s*\/\/.*$/gm;function j_(n,e){return n.map(function(i){return i.type==="rule"&&(i.value="".concat(e," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(e," ")),i.props=i.props.map(function(a){return"".concat(e," ").concat(a)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=j_(i.children,e)),i})}function GS(n){var e,i,a,o=lo,u=o.options,d=u===void 0?lo:u,p=o.plugins,m=p===void 0?Xh:p,g=function(T,A,M){return M.startsWith(i)&&M.endsWith(i)&&M.replaceAll(i,"").length>0?".".concat(e):T},v=m.slice();v.push(function(T){T.type===Hh&&T.value.includes("&")&&(T.props[0]=T.props[0].replace(HS,i).replace(a,g))}),d.prefix&&v.push(xS),v.push(mS);var E=function(T,A,M,k){A===void 0&&(A=""),M===void 0&&(M=""),k===void 0&&(k="&"),e=k,i=A,a=new RegExp("\\".concat(i,"\\b"),"g");var V=T.replace(qS,""),B=fS(M||A?"".concat(M," ").concat(A," { ").concat(V," }"):V);d.namespace&&(B=j_(B,d.namespace));var q=[];return bh(B,gS(v.concat(yS(function(Z){return q.push(Z)})))),q};return E.hash=m.length?m.reduce(function(T,A){return A.name||mu(15),eo(T,A.name)},w_).toString():"",E}var YS=new C_,cm=GS(),D_=be.createContext({shouldForwardProp:void 0,styleSheet:YS,stylis:cm});D_.Consumer;be.createContext(void 0);function V1(){return z.useContext(D_)}var N_=(function(){function n(e,i){var a=this;this.inject=function(o,u){u===void 0&&(u=cm);var d=a.name+u.hash;o.hasNameForId(a.id,d)||o.insertRules(a.id,d,u(a.rules,d,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=i,eg(this,function(){throw mu(12,String(a.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=cm),this.name+e.hash},n})(),QS=function(n){return n>="A"&&n<="Z"};function P1(n){for(var e="",i=0;i<n.length;i++){var a=n[i];if(i===1&&a==="-"&&n[0]==="-")return n;QS(a)?e+="-"+a.toLowerCase():e+=a}return e.startsWith("ms-")?"-"+e:e}var M_=function(n){return n==null||n===!1||n===""},O_=function(n){var e,i,a=[];for(var o in n){var u=n[o];n.hasOwnProperty(o)&&!M_(u)&&(Array.isArray(u)&&u.isCss||uo(u)?a.push("".concat(P1(o),":"),u,";"):eu(u)?a.push.apply(a,Jl(Jl(["".concat(o," {")],O_(u),!1),["}"],!1)):a.push("".concat(P1(o),": ").concat((e=o,(i=u)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||e in vS||e.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return a};function Qa(n,e,i,a){if(M_(n))return[];if(Jm(n))return[".".concat(n.styledComponentId)];if(uo(n)){if(!uo(u=n)||u.prototype&&u.prototype.isReactComponent||!e)return[n];var o=n(e);return Qa(o,e,i,a)}var u;return n instanceof N_?i?(n.inject(i,a),[n.getName(a)]):[n]:eu(n)?O_(n):Array.isArray(n)?Array.prototype.concat.apply(Xh,n.map(function(d){return Qa(d,e,i,a)})):[n.toString()]}function XS(n){for(var e=0;e<n.length;e+=1){var i=n[e];if(uo(i)&&!Jm(i))return!1}return!0}var WS=E_(Qh),ZS=(function(){function n(e,i,a){this.rules=e,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&XS(e),this.componentId=i,this.baseHash=eo(WS,i),this.baseStyle=a,C_.registerId(i)}return n.prototype.generateAndInjectStyles=function(e,i,a){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,i,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))o=qa(o,this.staticRulesId);else{var u=lm(Qa(this.rules,e,i,a)),d=om(eo(this.baseHash,u)>>>0);if(!i.hasNameForId(this.componentId,d)){var p=a(u,".".concat(d),void 0,this.componentId);i.insertRules(this.componentId,d,p)}o=qa(o,d),this.staticRulesId=d}else{for(var m=eo(this.baseHash,a.hash),g="",v=0;v<this.rules.length;v++){var E=this.rules[v];if(typeof E=="string")g+=E;else if(E){var T=lm(Qa(E,e,i,a));m=eo(m,T+v),g+=T}}if(g){var A=om(m>>>0);i.hasNameForId(this.componentId,A)||i.insertRules(this.componentId,A,a(g,".".concat(A),void 0,this.componentId)),o=qa(o,A)}}return o},n})(),k_=be.createContext(void 0);k_.Consumer;var Tp={};function JS(n,e,i){var a=Jm(n),o=n,u=!bp(n),d=e.attrs,p=d===void 0?Xh:d,m=e.componentId,g=m===void 0?(function(le,K){var oe=typeof le!="string"?"sc":C1(le);Tp[oe]=(Tp[oe]||0)+1;var I="".concat(oe,"-").concat(b_(Qh+oe+Tp[oe]));return K?"".concat(K,"-").concat(I):I})(e.displayName,e.parentComponentId):m,v=e.displayName,E=v===void 0?(function(le){return bp(le)?"styled.".concat(le):"Styled(".concat(SS(le),")")})(n):v,T=e.displayName&&e.componentId?"".concat(C1(e.displayName),"-").concat(e.componentId):e.componentId||g,A=a&&o.attrs?o.attrs.concat(p).filter(Boolean):p,M=e.shouldForwardProp;if(a&&o.shouldForwardProp){var k=o.shouldForwardProp;if(e.shouldForwardProp){var V=e.shouldForwardProp;M=function(le,K){return k(le,K)&&V(le,K)}}else M=k}var B=new ZS(i,T,a?o.componentStyle:void 0);function q(le,K){return(function(oe,I,C){var j=oe.attrs,O=oe.componentStyle,U=oe.defaultProps,$=oe.foldedComponentIds,D=oe.styledComponentId,st=oe.target,Ke=be.useContext(k_),ee=V1(),de=oe.shouldForwardProp||ee.shouldForwardProp,ye=wS(I,Ke,U)||lo,Ce=(function(je,_e,gt){for(var Le,Mt=_n(_n({},_e),{className:void 0,theme:gt}),Ni=0;Ni<je.length;Ni+=1){var qn=uo(Le=je[Ni])?Le(Mt):Le;for(var ln in qn)Mt[ln]=ln==="className"?qa(Mt[ln],qn[ln]):ln==="style"?_n(_n({},Mt[ln]),qn[ln]):qn[ln]}return _e.className&&(Mt.className=qa(Mt.className,_e.className)),Mt})(j,I,ye),P=Ce.as||st,ae={};for(var ce in Ce)Ce[ce]===void 0||ce[0]==="$"||ce==="as"||ce==="theme"&&Ce.theme===ye||(ce==="forwardedAs"?ae.as=Ce.forwardedAs:de&&!de(ce,P)||(ae[ce]=Ce[ce]));var he=(function(je,_e){var gt=V1(),Le=je.generateAndInjectStyles(_e,gt.styleSheet,gt.stylis);return Le})(O,Ce),ge=qa($,D);return he&&(ge+=" "+he),Ce.className&&(ge+=" "+Ce.className),ae[bp(P)&&!__.has(P)?"class":"className"]=ge,C&&(ae.ref=C),z.createElement(P,ae)})(Z,le,K)}q.displayName=E;var Z=be.forwardRef(q);return Z.attrs=A,Z.componentStyle=B,Z.displayName=E,Z.shouldForwardProp=M,Z.foldedComponentIds=a?qa(o.foldedComponentIds,o.styledComponentId):"",Z.styledComponentId=T,Z.target=a?o.target:n,Object.defineProperty(Z,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(le){this._foldedDefaultProps=a?(function(K){for(var oe=[],I=1;I<arguments.length;I++)oe[I-1]=arguments[I];for(var C=0,j=oe;C<j.length;C++)um(K,j[C],!0);return K})({},o.defaultProps,le):le}}),eg(Z,function(){return".".concat(Z.styledComponentId)}),u&&R_(Z,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Z}function U1(n,e){for(var i=[n[0]],a=0,o=e.length;a<o;a+=1)i.push(e[a],n[a+1]);return i}var L1=function(n){return Object.assign(n,{isCss:!0})};function Ah(n){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];if(uo(n)||eu(n))return L1(Qa(U1(Xh,Jl([n],e,!0))));var a=n;return e.length===0&&a.length===1&&typeof a[0]=="string"?Qa(a):L1(Qa(U1(a,e)))}function hm(n,e,i){if(i===void 0&&(i=lo),!e)throw mu(1,e);var a=function(o){for(var u=[],d=1;d<arguments.length;d++)u[d-1]=arguments[d];return n(e,i,Ah.apply(void 0,Jl([o],u,!1)))};return a.attrs=function(o){return hm(n,e,_n(_n({},i),{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},a.withConfig=function(o){return hm(n,e,_n(_n({},i),o))},a}var V_=function(n){return hm(JS,n)},S=V_;__.forEach(function(n){S[n]=V_(n)});function tg(n){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];var a=lm(Ah.apply(void 0,Jl([n],e,!1))),o=b_(a);return new N_(o,a)}const Sp=S.a`
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
`;function ng({label:n,href:e="#",active:i=!1,onClick:a,style:o,target:u,rel:d}){const m=/^https?:\/\//i.test(e)||e?.startsWith("mailto:")||e?.startsWith("tel:");let g,v=!1;!m&&e&&(e.startsWith("/")&&(g=e,v=!0),e==="/"&&(g="/",v=!0));const T={"aria-current":i?"page":void 0,"data-active":i?"true":"false","data-label":n,onKeyDown:A=>{a&&(A.key==="Enter"||A.key===" ")&&(A.preventDefault(),a(A))},onClick:a,style:o,$active:i};return v?y.jsx(Sp,{as:es,to:g,...T,children:y.jsx("span",{className:"navbtn-text",children:n})}):e?y.jsx(Sp,{href:e,target:u,rel:d,...T,children:y.jsx("span",{className:"navbtn-text",children:n})}):y.jsx(Sp,{as:"button",type:"button",...T,style:{background:"none",border:0,...o},children:y.jsx("span",{className:"navbtn-text",children:n})})}ng.propTypes={label:J.string.isRequired,href:J.string,active:J.bool,onClick:J.func,style:J.object,target:J.string,rel:J.string};const eA=({isOpen:n=!1,size:e=28,color:i="#fff",...a})=>{const o=Math.max(2,Math.round(e/14)),u=e/2,d=Math.round(e*.28);if(n)return y.jsxs("svg",{width:e,height:e,viewBox:`0 0 ${e} ${e}`,fill:"none",...a,children:[y.jsx("line",{x1:u-d,y1:u-d,x2:u+d,y2:u+d,stroke:i,strokeWidth:o,strokeLinecap:"round"}),y.jsx("line",{x1:u-d,y1:u+d,x2:u+d,y2:u-d,stroke:i,strokeWidth:o,strokeLinecap:"round"})]});const p=o,m=o/2;return y.jsxs("svg",{width:e,height:e,viewBox:`0 0 ${e} ${e}`,fill:"none",...a,children:[y.jsx("rect",{x:0,y:u-d-p/2,width:e,height:p,rx:m,fill:i}),y.jsx("rect",{x:0,y:u-p/2,width:e,height:p,rx:m,fill:i}),y.jsx("rect",{x:0,y:u+d-p/2,width:e,height:p,rx:m,fill:i})]})},ht=Object.freeze({GRADIENT:"gradient",LIGHT:"light",DARK:"dark",GRADIENT_DARK:"gradient_dark"}),tA=S.header`
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
`;function P_({items:n=[],activeKey:e,mode:i,onModeChange:a,autoOnScroll:o=!1,scrollThreshold:u=8,sticky:d=!0,maxWidth:p,overlay:m=!1}){const[g,v]=z.useState(!1),[E,T]=z.useState(ht.GRADIENT),A=typeof i=="string",M=A?i:E,k=z.useRef(A?i:E);z.useEffect(()=>{if(!A)return;(window.scrollY||document.documentElement.scrollTop||0)<=u&&(k.current=i)},[i,A,u]),z.useEffect(()=>{if(!o)return;const O=()=>{const U=window.scrollY||document.documentElement.scrollTop||0,$=k.current||ht.GRADIENT_DARK,D=U>u?ht.DARK:$;A||T(D),a&&a(D)};return O(),window.addEventListener("scroll",O,{passive:!0}),()=>window.removeEventListener("scroll",O)},[o,A,a,u]);const{baseColor:V,gradient:B,textColor:q,boxShadow:Z,showGradient:le}=z.useMemo(()=>{switch(M){case ht.LIGHT:return{baseColor:"linear-gradient(180deg, rgba(255,255,255,0.8) 60%, rgba(255,255,255,0) 100%)",gradient:"rgba(255,255,255,1)",textColor:"#000",showGradient:!0};case ht.DARK:return{baseColor:"linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,0) 100%)",gradient:"linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,1) 100%)",textColor:"#fff",showGradient:!0};case ht.GRADIENT_DARK:return{baseColor:"linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,0) 100%)",gradient:"linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,1) 100%)",textColor:"#fff",showGradient:!1};default:return{baseColor:"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",gradient:"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",textColor:"#000",showGradient:!1}}},[M]),I=M===ht.DARK||M===ht.GRADIENT_DARK||g,C=I?"/icons/logoLight.svg":"/icons/logoDark.svg",j=n.filter(O=>O.label!=="SHOWROOM");return z.useEffect(()=>(g?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[g]),y.jsxs(tA,{role:"banner",$sticky:d,$overlay:m,$baseColor:V,$gradient:B,$showGradient:le,$textColor:q,$boxShadow:Z,children:[y.jsx(nA,{$maxWidth:p,children:y.jsxs(iA,{children:[y.jsxs(rA,{children:[y.jsx(es,{to:"/","aria-label":"홈으로",style:{color:"inherit",textDecoration:"none"},children:y.jsx(cA,{"aria-hidden":!0,children:y.jsx(hA,{children:y.jsx("div",{style:{backgroundImage:`url(${C})`,width:"100%",height:"100%",backgroundSize:"contain",backgroundRepeat:"no-repeat"}})})})}),y.jsx(aA,{"aria-label":"주 메뉴",children:n.map(O=>y.jsx(ng,{label:O.label,href:O.href,active:O.key===e},O.key))})]}),y.jsx(sA,{"aria-label":g?"메뉴 닫기":"메뉴 열기",onClick:()=>v(O=>!O),children:y.jsx(eA,{isOpen:g,size:24,color:I?"#fff":"#000"})})]})}),y.jsx(oA,{$open:g,onClick:()=>v(!1),children:y.jsx(lA,{onClick:O=>O.stopPropagation(),children:j.map(O=>y.jsx(uA,{label:O.label,href:O.href,active:O.key===e,style:{fontSize:18,fontWeight:500,color:"#fff",textAlign:"center"},onClick:()=>v(!1)},O.key))})})]})}P_.propTypes={items:J.arrayOf(J.shape({key:J.string.isRequired,label:J.string.isRequired,href:J.string})),activeKey:J.string,mode:J.oneOf([ht.GRADIENT,ht.LIGHT,ht.DARK,ht.GRADIENT_DARK]),onModeChange:J.func,autoOnScroll:J.bool,scrollThreshold:J.number,sticky:J.bool,overlay:J.bool,maxWidth:J.oneOfType([J.string,J.number])};const ig="Pretendard, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR', Arial, sans-serif",dA=S.footer`
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
`,z1=S.a`
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
`;function U_({title:n="잔향 : 기억의 향기",nav:e=[{label:"PROJECTS",href:"/projects"},{label:"PEOPLES",href:"/peoples"},{label:"SHOWROOM",href:"/showroom"},{label:"GUESTBOOK",href:"/guestbook"},{label:"CREDITS",href:"/credits"}],copyright:i=["ⓒ 2025 TECH UNIV KOREA. ALL RIGHTS RESERVED.","TUKOREA DESIGN ENGINEERING 20TH GRADUATION EXHIBITION"],social:a={youtube:{href:"https://youtube.com",label:"YouTube"},instagram:{href:"https://instagram.com",label:"Instagram"}},maxWidth:o=1220,sidePadding:u=350}){const[d,p]=be.useState(typeof window<"u"?window.innerWidth<640:!1);return be.useEffect(()=>{function m(){p(window.innerWidth<640)}return m(),window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[]),y.jsx(dA,{role:"contentinfo",children:y.jsxs(fA,{$sidePadding:u,$maxWidth:o,children:[y.jsx(pA,{children:n}),y.jsx(mA,{"aria-label":"푸터 메뉴",children:e.filter(m=>!(d&&m.label==="SHOWROOM")).map(m=>{const g=m.href||"#",v=/^https?:\/\//i.test(g),E="/";let T=g;return v||g===E&&(T="/"),v?y.jsx(z1,{href:g,children:m.label},m.label):y.jsx(z1,{as:es,to:T,children:m.label},m.label)})}),y.jsx(gA,{children:i.map((m,g)=>y.jsx("div",{children:m},g))}),y.jsxs(yA,{$sidePadding:u,children:[a?.youtube?.href&&y.jsx($1,{href:a.youtube.href,"aria-label":a.youtube.label||"YouTube",target:"_blank",rel:"noreferrer noopener",children:y.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#FFFFFF","aria-hidden":!0,children:y.jsx("path",{d:"M23.5 7.2a4 4 0 0 0-2.8-2.8C18.8 4 12 4 12 4s-6.8 0-8.7.4A4 4 0 0 0 .5 7.2 41 41 0 0 0 0 12a41 41 0 0 0 .5 4.8 4 4 0 0 0 2.8 2.8C5.2 20 12 20 12 20s6.8 0 8.7-.4a4 4 0 0 0 2.8-2.8A41 41 0 0 0 24 12a41 41 0 0 0-.5-4.8zM9.6 15.2V8.8L15.8 12l-6.2 3.2z"})})}),a?.instagram?.href&&y.jsx($1,{href:a.instagram.href,"aria-label":a.instagram.label||"Instagram",target:"_blank",rel:"noreferrer noopener",children:y.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#FFFFFF","aria-hidden":!0,children:[y.jsx("path",{d:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2A3.2 3.2 0 1 1 12 8a3.2 3.2 0 0 1 0 6.4z"}),y.jsx("circle",{cx:"17.5",cy:"6.5",r:"1.2"}),y.jsx("path",{d:"M17.8 2H6.2A4.2 4.2 0 0 0 2 6.2v11.6A4.2 4.2 0 0 0 6.2 22h11.6A4.2 4.2 0 0 0 22 17.8V6.2A4.2 4.2 0 0 0 17.8 2zm2.6 15.8a2.6 2.6 0 0 1-2.6 2.6H6.2a2.6 2.6 0 0 1-2.6-2.6V6.2A2.6 2.6 0 0 1 6.2 3.6h11.6a2.6 2.6 0 0 1 2.6 2.6v11.6z"})]})})]})]})})}U_.propTypes={title:J.string,nav:J.arrayOf(J.shape({label:J.string.isRequired,href:J.string.isRequired})),copyright:J.arrayOf(J.string),social:J.shape({youtube:J.shape({href:J.string,label:J.string}),instagram:J.shape({href:J.string,label:J.string})}),maxWidth:J.number,sidePadding:J.number};const xA=1200,vA=S.div`
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
`;function wA(){const n=z.useRef(null),e=z.useRef(null),i=z.useRef(null),a=z.useRef(!1),o=z.useRef(0),u=z.useRef(0),[d,p]=z.useState(!1),m=(T,A,M)=>Math.max(A,Math.min(M,T));function g(){try{const A=(window.getComputedStyle(document.body).backgroundColor||"").match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([0-9.]+))?\)/);if(A){const M=Number(A[1]),k=Number(A[2]),V=Number(A[3]);.2126*M+.7152*k+.0722*V<140?(e.current.style.backgroundColor="rgba(255,255,255,0.92)",e.current.style.border="1px solid rgba(0,0,0,0.12)",e.current.style.boxShadow="0 2px 6px rgba(0,0,0,0.45)"):(e.current.style.backgroundColor="rgba(0,0,0,0.78)",e.current.style.border="1px solid rgba(255,255,255,0.06)",e.current.style.boxShadow="0 2px 6px rgba(0,0,0,0.25)")}else e.current.style.backgroundColor="rgba(0,0,0,0.78)"}catch{e.current&&(e.current.style.backgroundColor="rgba(0,0,0,0.78)")}}function v(){i.current&&clearTimeout(i.current),i.current=setTimeout(()=>p(!1),xA)}function E(){const T=n.current,A=e.current;if(!T||!A)return;const M=document.documentElement,k=M.scrollHeight-window.innerHeight,V=T.clientHeight||window.innerHeight*.8;if(k<=0){p(!1);return}const B=Math.max(20,window.innerHeight/M.scrollHeight*V),q=window.scrollY/k*(V-B);A.style.height=B+"px",A.style.top=q+"px",p(!0),g(),v()}return z.useEffect(()=>{const T=k=>{k.ctrlKey||k.metaKey||k.altKey||(p(!0),v())},A=()=>E(),M=()=>E();return document.addEventListener("wheel",T,{passive:!0}),window.addEventListener("scroll",M,{passive:!0}),window.addEventListener("resize",A),typeof window<"u"&&(window.__CustomScrollbar={update:E}),E(),p(!0),v(),()=>{document.removeEventListener("wheel",T),window.removeEventListener("scroll",M),window.removeEventListener("resize",A),i.current&&clearTimeout(i.current);try{typeof window<"u"&&delete window.__CustomScrollbar}catch{}}},[]),z.useEffect(()=>{const T=n.current,A=e.current;if(!T||!A)return;function M(B){if(B.target===A)a.current=!0,o.current=B.clientY,u.current=window.scrollY,A.setPointerCapture(B.pointerId),A.classList&&A.classList.add("dragging");else{const q=T.getBoundingClientRect(),Z=B.clientY-q.top,le=q.height,oe=document.documentElement.scrollHeight-window.innerHeight,I=A.offsetHeight,j=m(Z-I/2,0,le-I)/(le-I)*oe;window.scrollTo({top:j,behavior:"smooth"}),E()}}function k(B){if(!a.current)return;const Z=document.documentElement.scrollHeight-window.innerHeight,le=T.clientHeight,K=A.offsetHeight,oe=B.clientY-o.current,I=le-K,C=oe/(I||1)*Z;window.scrollTo({top:m(u.current+C,0,Z)})}function V(B){if(a.current){a.current=!1;try{A.releasePointerCapture(B.pointerId)}catch{}A.classList&&A.classList.remove("dragging"),v()}}return T.addEventListener("pointerdown",M),window.addEventListener("pointermove",k),window.addEventListener("pointerup",V),()=>{T.removeEventListener("pointerdown",M),window.removeEventListener("pointermove",k),window.removeEventListener("pointerup",V)}},[]),y.jsx(vA,{ref:n,style:{opacity:d?1:0,pointerEvents:d?"auto":"none"},"aria-hidden":!1,children:y.jsx(_A,{ref:e})})}const Di="'Pretendard', system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif",EA="/",bA=S.div`
  position: relative; background: #fff;
`,TA=S.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;function B1({children:n}){return y.jsx(bA,{children:y.jsx(TA,{children:n})})}const SA=S.div`
  position: relative; height: 52px; display: flex; align-items: flex-end; justify-content: center; line-height: 52px;
  font-family: ${Di}; font-size: 40px; font-weight: 700; color: #101010; line-height: 64px; margin-top: 88px;
  @media (max-width: 640px) {
    height: 21px;
    line-height: 21px;
    margin-top: 4px;
    font-size: 18px;
  }
`,AA=S.div`
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
`;function RA(){return y.jsxs(y.Fragment,{children:[y.jsx(SA,{children:"CREDITS"}),y.jsx(AA,{children:"잔향 : 기억의 향기"})]})}const IA=S.p`
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
`,CA=S.div`
  display: flex;
  position: relative;
  align-items: flex-start;
  overflow: visible;
  padding-top: 20px;
    @media (max-width: 640px) {
    padding-top: 0px;
  }
`,jA=S.div`
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
`,DA=S.div`
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
`,NA=S.div`
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
`,L_=S.div`
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
`;function MA({text:n}){return y.jsxs(CA,{children:[y.jsx(L_,{}),y.jsx(jA,{}),y.jsx(IA,{dangerouslySetInnerHTML:{__html:n}})]})}const OA=S.div`
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
`,kA=S.div`
  width: 800px; height: 450px; background: #000; background-size:cover; position: relative; z-index: 30;
  cursor: not-allowed;
  @media (max-width: 640px) {
    width: 100vw;
    height: calc(100vw * 0.5625); /* 16:9 비율 유지 */
  }
`;S.div`
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
`;S.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
`;S.div`
  position: absolute;
  width: 70px;
  height: 70px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: url('${EA}icons/play_btn.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  z-index: 40;
  @media (max-width: 640px) {
    width: 40px;
    height: 40px;
  }
`;const VA=S.iframe`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
        z-index: 40;
      `;function PA({children:n}){return y.jsx(kA,{children:y.jsx(VA,{src:"https://www.youtube.com/embed/wDleVXGRbTQ?si=15Ch01nOAvqL4rde",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0})})}const UA=S.div`
  display: flex; gap: 40px; margin-top: 44px; width: 1220px; position: relative;
  @media (max-width: 640px) {
    // flex 위쪽에 2개, 아래에 1개 배치되게 해주고, 아래 배치된거는 위쪽 2개의 길이만큼 맞춰주게 해주세요
    width: 100%;
    flex-wrap: wrap;
    gap: 32px;
    margin-top: 24px;
  }
`,LA=S.div`
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
`,$A=S.p`
  font-family: ${Di}; font-size: 16px; font-weight: 400; line-height: 150%; color: #404040; text-align: justify; margin: 0;
  @media (max-width: 640px) {
    font-size: 10px;
  }
`;function BA({blocks:n}){return y.jsxs(UA,{children:[y.jsx(L_,{}),n.map(e=>y.jsxs(LA,{children:[y.jsx(zA,{children:e.title}),y.jsx($A,{dangerouslySetInnerHTML:{__html:e.body}})]},e.title))]})}const FA=S.div`
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
`,KA=S.div`
  width: 289px;
  height: 45px;
  display: flex;
  align-items: flex-end;
  @media (max-width: 640px) {
    height: auto;
    width: 88px;
    margin-top: 12px;
  }
`,HA=S.div`
  font-family: ${Di}; font-size: 20px;
  font-weight: 500;
  line-height: 22.4px;
  color: #202020;
  @media (max-width: 640px) {
    font-size: 14px;
    line-height: 14px;
  }
`,qA=S.div`
  width: 900px;
  display: flex;
  flex-direction: column;
  @media (max-width: 640px) {
    width: 100%;
  }
`;function GA({title:n,rows:e,last:i=!1}){return y.jsxs(FA,{$last:i,children:[y.jsx(KA,{children:y.jsx(HA,{children:n})}),y.jsx(qA,{children:e.map((a,o)=>y.jsx(JA,{ko:a.ko,en:a.en,divider:e.length>1&&o!==e.length-1},a.ko+a.en+o))})]})}const YA=S.div`
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
`,QA=S.div`
  width: 135px;
  @media (max-width: 640px) {
    width: 66px;
  }
`,XA=S.div`
  font-family: ${Di};
  font-size: 16px;
  font-weight: 300;
  line-height: 22.4px; 
  color: #202020;
  @media (max-width: 640px) {
    font-size: 12px;
    line-height: 14px;
  }
`,WA=S.div`
  display: flex; align-items: center;
`,ZA=S.div`
  font-family: ${Di};
  font-size: 16px;
  font-weight: 300;
  line-height: 22.4px;
  color: #404040;
  @media (max-width: 640px) {
    font-size: 12px;
    line-height: 14px;
  }
`;function JA({ko:n,en:e,divider:i=!1}){return y.jsxs(YA,{$divider:i,children:[y.jsx(QA,{children:y.jsx(XA,{children:n})}),y.jsx(WA,{children:y.jsx(ZA,{children:e})})]})}const eR=S.div`
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
`;function nR(){const n='안녕하세요, 제20회 졸업전시준비위원회입니다. <br/><br/>한국공학대학교 디자인공학부 제20회 졸업전시 <잔향>은 지난 시간 동안의 도전과 성장을 작품으로 담아내는 자리입니다. 이번 전시는 단순히 결과물을 나열하는 데 그치지 않고, 각자의 창작 과정 속에서 남겨진 고민과 흔적을 함께 나누고자 기획되었습니다. <br/><br/><잔향>이라는 주제는 작품이 지닌 감각과 정서가 관람자의 마음에 은은히 스며들어, 시간이 지나도 다시 떠오르는 기억으로 남기를 바라는 마음을 담고 있습니다. 학생들이 걸어온 수많은 순간과 열정이 응축된 이번 전시가, 누군가의 영감으로 다시 피어나길 희망합니다. 100명의 학생들이 모여 만들어 낸 이 전시는 그 어느 때보다 크고 도전적인 시도였습니다. 서로의 열정이 모여 이루어진 결과물이기에, 그 의미 또한 더욱 특별합니다.<br/><br/> 이번 전시가 졸업생들에게는 새로운 출발을 알리는 이정표로, 관람객에게는 오래도록 마음속에 머무는 "기억의 향기"로 남기를 바랍니다.',e=[{title:"학부장의 말씀",body:"스무 번째를 맞이하는 디자인공학부 졸업작품전시회를 진심으로 축하드립니다.<br/>이번 전시회에는 총 100명의 학생들이 개인 혹은 팀을 이루어, 산업디자인공학전공 47개 작품과 미디어디자인공학전공 30개 작품을 선보입니다. 이번 전시회는 단순히 결과물을 보여주는 자리를 넘어, 지난 4년간의 땀과 열정, 수많은 고민과 성장이 맺은 값진 결실이자, 새로운 출발을 알리는 뜻깊은 순간입니다.<br/>오늘날 우리는 인공지능, 스마트 기술, 친환경 소재 등 급속히 변화하는 기술 환경 속에서 전례 없는 전환의 시대를 맞이하고 있습니다.<br/>이러한 가운데에 디자이너는 우리의 생활에서 여러 불편한 요소를 찾아내고 이를 창의적이며 책임감 있게 해결할 수 있는 융합형 인재로서 그 역할이 더욱 중요해지고 있습니다.<br/>우리 디자인공학부 학생들은 이러한 변화에 능동적으로 대응하며, 사용자 중심의 사고, 미적 감각, 기술적 이해를 균형 있게 갖춘 디자이너로 성장해 왔습니다. 이번 전시의 모든 작품에는 치열한 탐구와 관찰, 반복된 시도와 실패, 그리고 그 너머의 성장이 고스란히 담겨 있습니다. 그 귀중한 과정을 진심으로 응원하며, 우리 학생들이 디자인을 통해 사회에 공헌하고 세상에 긍정적인 변화를 이끄는 창의적이고 따뜻한 디자이너로 거듭나기를 바랍니다.<br/>앞으로 변화와 도전의 흐름 속에서도 흔들림 없이 자신이 옳다고 믿는 방향으로 꿋꿋하게 나아가며, 사회 곳곳에서 중심적인 역할을 수행하는 당당한 디자이너로 성장하길 기대합니다. 그리고 언제 어디서든 한국공학대학교 디자인공학부의 이름을 빛내는 자랑스러운 동문으로 기억되길 바랍니다.<br/>마지막으로, 소중한 인재들의 성장을 위해 아낌없는 지도와 격려를 보내주신 교수님들께 깊은 감사의 말씀을 전합니다. 또한, 묵묵히 곁에서 자녀를 응원해주신 학부모님들께도 진심 어린 감사의 인사를 드립니다. 감사합니다."},{title:"학과 소개",body:"한국공학대학교 디자인공학부는 창의적인 디자인 발상법과 공학적 마인드의 통합적 접근법을 추구하는 시대로 바뀜에 따라 단순히 심미적 역할에만 머물렀던 디자인 개념에서 확장하여 4차 산업혁명 기술 분야를 선도하고자 하는 비전을 담고 있는 실무 중심의 융합형 학부입니다.<br/>디자인공학부는 디자인 기반의 창의적 아이디어와 HW/SW 융합 기술 개발 능력을 통해 기업을 혁신할 수 있는 인재 양성을 목표로 하고 있습니다."},{title:"웹사이트팀 제작 후기",body:"안녕하세요 제20회 졸업전시위원회의 웹사이트 기획부터 디자인, 그리고 구현까지 담당한 웹사이트 팀 성수민, 김예준입니다. <br/>25년 5월부터 웹사이트 컨셉이 정해진 이래 150일에 걸쳐 디자인 및 개발한 사이트가 이렇게 성공적으로 완성되어 무척 감격스러운 마음입니다.<br/>특히 저희 웹사이트 팀은 한국공학대학교 디자인학과 졸업전시위원회 최초로 공식 신설된 팀으로, 졸업전시를 위한 웹사이트 기획과 디자인, 구현과 배포를 졸업전시위원회의 공식 팀으로써 성공적으로 마무리 할 수 있음이 더더욱 뜻깊게 다가옵니다.<br/>저희 웹사이트는 디자인과 더불어 사용자경험, 데이터 관리, 개발 방식등 4년동안 걸어왔던 한국공학대학교 미디어디자인학과에서 배웠던 지식들을 최대한 활용하여 사소한 문제라도 같이 고민하고, 해결 방법을 강구하며 쌓아올린 결과물입니다. 저희가 걸어온 이 길에서 가장 힘들었지만, 그와 함께 걸어온 발자국이 틀리지 않았다는 것을 두 눈으로 볼 수 있어 기쁠따름입니다.<br/>앞으로 걸어나갈 길고 긴 길에서 미지라는 두려움 보단 지금까지의 경험으로 나아갈 수 있는 용기를 얻을 수 있는 이 순간이, ‘잔향’ 졸업전시와 함께 할 수 있어서 영광이었습니다.<br/>24년 12월부터 25년 10월까지 10개월의 긴 시간동안 고생하신 20대 졸업전시위원회 구성원 모두 고생많으셨습니다."}],i=[{title:"위원장",rows:[{ko:"홍승재",en:"Hong Seungjae"}]},{title:"부위원장",rows:[{ko:"김예린",en:"Kim Yerin"}]},{title:"총무",rows:[{ko:"진효민",en:"Jin Hyomin"},{ko:"정민호",en:"Jung Minho"}]},{title:"기획",rows:[{ko:"문나라",en:"Moon Nara"},{ko:"차소이",en:"Cha Soyi"},{ko:"한채원",en:"Han Chaewon"}]},{title:"홍보",rows:[{ko:"이채원",en:"Lee Chaewon"},{ko:"남가림",en:"Nam Garim"}]},{title:"디자인",rows:[{ko:"구인회",en:"Koo Inhoe"},{ko:"김기윤",en:"Kim Giyun"},{ko:"박혜성",en:"Park Hyeseong"},{ko:"석동현",en:"Suk Donghyun"}]},{title:"웹사이트",rows:[{ko:"성수민",en:"Seong Sumin"},{ko:"김예준",en:"Kim Yejun"}]},{title:"Special Thanks",rows:[{ko:"김한종 교수",en:"Prof. Kim Hanjong"},{ko:"고명현",en:"Go Myeonghyeon"}],last:!0}];return y.jsxs("div",{style:{position:"relative"},children:[y.jsxs(B1,{children:[y.jsx(RA,{}),y.jsxs(OA,{children:[y.jsx(MA,{text:n}),y.jsx(PA,{})]})]}),y.jsxs(B1,{children:[y.jsx(BA,{blocks:e}),y.jsxs(eR,{children:[y.jsx(NA,{}),y.jsxs(tR,{children:[y.jsx(DA,{}),"2025 잔향",y.jsx("br",{}),"제 20대 졸업전시위원회"]}),i.map(a=>y.jsx(GA,{title:a.title,rows:a.rows,last:!!a.last},a.title))]})]})]})}const iR=S.div`
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
`,rR=S.div`
  position: relative;
  width: 55%;
  height: 100%;
  flex: 0 0 auto;
`,aR=S.img`
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
`,sR=S.div`
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #f6f6f6 100%);
  z-index: 2;
  width: 20%;
`,oR=S.div`
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
`,lR=S.h1`
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
`,uR=S(hh)`
 @media (max-width: 640px) {
    display: none;
 }`;function rg({nameKor:n,nameEng:e,role:i,sns:a,eMail:o,imgSrc:u,imgAlt:d}){return y.jsxs(iR,{children:[y.jsxs(rR,{children:[y.jsx(aR,{src:u,alt:d}),y.jsx(sR,{})]}),y.jsxs(oR,{children:[y.jsxs(F1,{style:{top:"50px"},children:[y.jsx(lR,{children:n}),y.jsx(hh,{children:e})]}),y.jsxs(F1,{children:[y.jsx(hh,{children:i}),typeof a=="string"&&a.trim()&&a!=="-"?y.jsx(hh,{children:a}):Array.isArray(a)&&a.length>0?y.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",margin:"4px 0 0 0"},children:a.map((p,m)=>y.jsx("span",{style:{wordBreak:"break-all"},children:p.handle||p.url},`${p.platform}-${m}`))}):"-",y.jsx(uR,{children:o?y.jsx("a",{style:{textDecoration:"none",color:"inherit"},href:`mailto:${o}`,children:o}):null})]})]})]})}rg.defaultProps={sns:[]};rg.propTypes={nameKor:J.string.isRequired,nameEng:J.string,role:J.string,sns:J.arrayOf(J.shape({platform:J.string.isRequired,url:J.string.isRequired})),eMail:J.string,imgSrc:J.string.isRequired,imgAlt:J.string.isRequired};const cR=S.div`
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
`,hR=S.div`
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
`,z_=S.p`
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
`,dR=S(z_)`
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
`;function dm({path:n="student",isActive:e=!1,onClick:i}){return y.jsxs(cR,{onClick:i,children:[y.jsx(z_,{$active:e,children:"교수"}),y.jsx(dR,{$active:e,children:"학생"}),y.jsx(hR,{$active:e})]})}dm.propTypes={path:J.oneOf(["student","professor"]),isActive:J.bool,onClick:J.func};const K1=S.a`
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
`;function dh({label:n,href:e=null,active:i=!1,onClick:a,style:o,target:u,rel:d}){const m={"aria-current":i?"page":void 0,"data-active":i?"true":"false",onKeyDown:g=>{a&&(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),a(g))},"data-label":n,onClick:a,style:o,$active:i};return e?y.jsx(K1,{href:e,target:u,rel:d,...m,children:y.jsx(H1,{className:"navbtn-text",children:n})}):y.jsx(K1,{as:"button",type:"button",...m,style:{background:"none",border:0,...o},children:y.jsx(H1,{className:"navbtn-text",children:n})})}dh.propTypes={label:J.string.isRequired,href:J.string,active:J.bool,onClick:J.func,style:J.object,target:J.string,rel:J.string};const $_=S.div`
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
`,fR=S($_)`
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
`,B_=S.p`
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
`,pR=S(B_)`
  font-size: 16px;
  font-weight: 600;
  @media (max-width: 640px) {
   font-size: 13px;  
  }
  @media (max-width: 375px) {
    font-size: 12px;
  }
`;function ag({label:n,style:e,mode:i}){const u=window.matchMedia("(max-width: 640px)").matches?"/icons/dropDownMobileIcon.svg":"/icons/arrowDropdownIcon.svg";return i==="category"?y.jsxs(fR,{style:e,children:[y.jsx(pR,{children:n}),y.jsx(q1,{children:y.jsx("img",{src:"/icons/arrowDropdownIcon.svg",alt:"dropdownIcon"})})]}):y.jsxs($_,{style:e,children:[y.jsx(B_,{children:n}),y.jsx(q1,{children:y.jsx("img",{src:u,alt:"dropdownIcon"})})]})}ag.propTypes={label:J.string.isRequired,style:J.object};const mR=S.div`
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
`,gR=S.div`
  display: flex;
  width: 90px;
  height: 20px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  @media (max-width: 640px) {
    width: 52px;  
 }
`,yR=S.p`
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
`;function F_({options:n,onSelect:e,style:i,isOpen:a,position:o,selected:u}){return y.jsx(mR,{style:i,$open:a,children:n.map((d,p)=>y.jsx(gR,{onClick:()=>e(d),children:y.jsx(yR,{$selected:d===u,children:d})},p))})}F_.propTypes={options:J.arrayOf(J.string).isRequired,onSelect:J.func.isRequired,style:J.object,isOpen:J.bool,position:J.any,selected:J.string};const xR=S.div`
  position: relative;
`;function sg({label:n,options:e,onSelect:i,style:a,filter:o,mode:u}){const[d,p]=be.useState(!1),[m,g]=be.useState({top:0,left:0}),v=be.useRef(null),E=()=>{if(v.current){const A=v.current.getBoundingClientRect();g({top:A.bottom+window.scrollY,left:A.left+window.scrollX})}p(A=>!A)},T=A=>{i&&i(A),p(!1)};return y.jsxs(xR,{ref:v,style:a,children:[y.jsx("div",{onClick:E,children:y.jsx(ag,{label:n,options:e,onSelect:i,style:{},filter:o,mode:u})}),y.jsx(F_,{options:e,onSelect:T,style:{},isOpen:d,position:m,selected:n})]})}sg.propTypes={label:J.string.isRequired,options:J.arrayOf(J.string).isRequired,onSelect:J.func.isRequired,style:J.object,filter:J.string};sg.defaultProps={style:{},filter:""};const vR=S.div`
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
`,_R=S.div`
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
`,wR=S.div`
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
`;function K_({options:n,isOpen:e,onSelect:i,selected:a}){return y.jsx(vR,{$open:e,children:y.jsx(_R,{$open:e,children:n.map((o,u)=>y.jsx(wR,{$selected:a===o,onClick:()=>i(o),children:o},u))})})}K_.propTypes={options:J.arrayOf(J.string).isRequired,isOpen:J.bool.isRequired,onSelect:J.func.isRequired,selected:J.oneOfType([J.string,J.number])};const ER=S.div`
    position: relative;
    // 안에 들어가는 요소들 왼쪽 정렬
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;function Kl({label:n,options:e,onSelect:i,style:a,mode:o}){const[u,d]=be.useState(!1),p=be.useRef(null),m=()=>{d(v=>!v)},g=v=>{i&&i(v),d(!1)};return y.jsxs(ER,{ref:p,style:a,children:[y.jsx("div",{onClick:m,children:y.jsx(ag,{label:n,mode:o})}),y.jsx(K_,{options:e,onSelect:g,isOpen:u,selected:n})]})}Kl.propTypes={label:J.string.isRequired,options:J.arrayOf(J.string).isRequired,onSelect:J.func.isRequired,style:J.object,mode:J.string};Kl.defaultProps={style:{},mode:"category"};const Ap=S.div`
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
`;function H_({onCategoryChange:n,onToggleChange:e,type:i,onSortChange:a,sortLabel:o}){const u={type:i},[d,p]=be.useState(!1),m=()=>p(K=>{const oe=!K;return e&&e(oe),oe}),[g,v]=be.useState("전체"),[E,T]=be.useState("All Projects"),A=["전체","산업디자인공학","미디어디자인공학"],M=["장영주","권오재","김 억","김한종","조남주","한민섭","홍성수","김태균"],k=["All Projects","AI & Robot","Edu & Kids","Health Care","IT & Tech","Living","Mobility"],V=["이름순","좋아요순","조회수순","팀작우선","개인작우선"],[B,q]=be.useState("이름순"),Z=o||B,le=K=>{q(K),a&&a(K)};return z.useEffect(()=>{v(d?M[0]:A[0])},[d]),u.type==="project"?y.jsxs(Ap,{children:[y.jsx(Rp,{}),y.jsx(Ip,{children:k.map(K=>y.jsx(dh,{label:K,active:E===K,onClick:()=>{T(K),n&&n(K)}},K))}),y.jsx(Cp,{children:y.jsx(Kl,{mode:"category",label:E,options:k,onSelect:K=>{T(K),n&&n(K)}})}),y.jsx(sg,{label:Z,options:V,onSelect:le})]}):d?y.jsxs(Ap,{children:[y.jsx(Rp,{}),y.jsx(Ip,{children:M.map(K=>y.jsx(dh,{label:K,active:g===K,onClick:()=>{v(K),n&&n(K)}},K))}),y.jsx(Cp,{children:y.jsx(Kl,{mode:"category",label:g,options:M,onSelect:K=>{v(K),n&&n(K)}})}),y.jsx(dm,{path:d?"professor":"student",isActive:d,onClick:m})]}):y.jsxs(Ap,{children:[y.jsx(Rp,{}),y.jsx(Ip,{children:A.map(K=>y.jsx(dh,{label:K,active:g===K,onClick:()=>{v(K),n&&n(K)}},K))}),y.jsx(Cp,{children:y.jsx(Kl,{mode:"category",label:g,options:A,onSelect:K=>{v(K),n&&n(K)}})}),y.jsx(dm,{path:d?"professor":"student",isActive:d,onClick:m})]})}const bR=S.div`
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
`,TR=S.div`
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
`,SR=S.img`
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
`,AR=S.div`
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
`,RR=S.p`
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
`;function og({nameKor:n,rank:e,eMail:i,education:a,field:o,imgSrc:u,imgAlt:d}){const p=m=>Array.isArray(m)?y.jsx(G1,{children:m.map((g,v)=>y.jsx(Qc,{children:g},v))}):typeof m=="string"&&m?y.jsx(G1,{children:y.jsx(Qc,{children:m})}):null;return y.jsx(bR,{children:y.jsxs(TR,{children:[y.jsx(SR,{src:u,alt:d}),y.jsxs(AR,{children:[y.jsx(RR,{children:n}),y.jsxs(Gc,{children:[y.jsx(Yc,{children:"직위(직급)"}),y.jsx(Qc,{children:e})]}),y.jsxs(Gc,{children:[y.jsx(Yc,{children:"이메일"}),y.jsx(Qc,{children:i})]}),y.jsxs(Gc,{children:[y.jsx(Yc,{children:"약력"}),p(a)]}),y.jsxs(Gc,{children:[y.jsx(Yc,{children:"전문 분야"}),p(o)]})]})]})})}og.propTypes={nameKor:J.string.isRequired,rank:J.string.isRequired,eMail:J.string.isRequired,education:J.oneOfType([J.string,J.arrayOf(J.string)]),field:J.oneOfType([J.string,J.arrayOf(J.string)]),imgSrc:J.string.isRequired,imgAlt:J.string.isRequired};og.defaultProps={nameKor:"홍길동",rank:"교수",eMail:"honggildong@example.com",education:[],field:[],imgSrc:"/thumbnailExample.png",imgAlt:"홍길동 교수의 프로필 이미지"};const lg=JSON.parse('[{"num":0,"nameKor":"강유진","nameEng":"Kang Yujin","role":"3D Modeler","department":1,"professorId":"p04","studentId":2021194003,"eMail":"rkddbwls0404@gmail.com","sns":"-","imgUrl":"../image/0/portrait.jpg","category":"c4","projectNum":45,"team":1,"leader":0},{"num":1,"nameKor":"고명현","nameEng":"Go Myeonghyeon","role":"Product Designer","department":1,"professorId":"p03","studentId":2019190002,"eMail":"harczail.76@gmail.com","sns":"@_archive.hynn","imgUrl":"../image/1/portrait.jpg","category":"c0","projectNum":0,"team":0,"leader":""},{"num":2,"nameKor":"고서영","nameEng":"Go Seoyeong","role":"3d Product Designer","department":0,"professorId":"p02","studentId":2022190001,"eMail":"rhtjdud2003@naver.com","sns":"@se_o.o_","imgUrl":"../image/2/portrait.jpg","category":"c2","projectNum":26,"team":1,"leader":0},{"num":3,"nameKor":"고은솔","nameEng":"Ko Eunsol","role":"UX/UI Designer","department":1,"professorId":"p01","studentId":2021194005,"eMail":"soolu202@naver.com","sns":"@sol20_27","imgUrl":"../image/3/portrait.jpg","category":"c1","projectNum":24,"team":0,"leader":""},{"num":4,"nameKor":"구예진","nameEng":"Koo Yejin","role":"UX/UI Designer","department":1,"professorId":"p03","studentId":2022194002,"eMail":"yejk63@gmail.com","sns":"@yeahz_n","imgUrl":"../image/4/portrait.jpg","category":"c2","projectNum":27,"team":1,"leader":1},{"num":5,"nameKor":"구인회","nameEng":"Koo Inhoe","role":"Industrial Designer","department":0,"professorId":"p02","studentId":2020190001,"eMail":"eric2261@naver.com","sns":"@dlsghl01_","imgUrl":"../image/5/portrait.jpg","category":"c5","projectNum":66,"team":1,"leader":1},{"num":6,"nameKor":"권유빈","nameEng":"Kwon Yoobeen","role":"UX/UI Designer","department":1,"professorId":"p02","studentId":2020194002,"eMail":"yoobeenkwon@gmail.com","sns":"@yoovebeen","imgUrl":"../image/6/portrait.jpg","category":"c2","projectNum":26,"team":1,"leader":1},{"num":7,"nameKor":"권지민","nameEng":"Kwon Jimin","role":"UX/UI Designer","department":1,"professorId":"p03","studentId":2022194038,"eMail":"jmnee0115@naver.com","sns":"@j_minee_e","imgUrl":"../image/7/portrait.jpg","category":"c4","projectNum":46,"team":0,"leader":""},{"num":8,"nameKor":"김강민","nameEng":"Kim Gangmin","role":"Mobility Designer","department":0,"professorId":"p04","studentId":2020192003,"eMail":"min7053@naver.com","sns":"@krkdals.m","imgUrl":"../image/8/portrait.jpg","category":"c5","projectNum":67,"team":1,"leader":1},{"num":9,"nameKor":"김기윤","nameEng":"Kim Giyun","role":"Industrial Designer","department":0,"professorId":"p02","studentId":2020190002,"eMail":"tkenrnen112@tukorea.ac.kr","sns":"@gi_yunk","imgUrl":"../image/9/portrait.jpg","category":"c5","projectNum":68,"team":1,"leader":0},{"num":10,"nameKor":"김동주","nameEng":"Kim Dongju","role":"Product Designer","department":0,"professorId":"p00","studentId":2020190005,"eMail":"dongdongju3144@naver.com","sns":"@doongjuu_","imgUrl":"../image/10/portrait.jpg","category":"c3","projectNum":34,"team":0,"leader":""},{"num":11,"nameKor":"김민석","nameEng":"Kim Minseok","role":"Product Designer","department":0,"professorId":"p02","studentId":2020190006,"eMail":"@eneu201@gmail.com","sns":"@mskk.01","imgUrl":"../image/11/portrait.jpg","category":"c4","projectNum":47,"team":0,"leader":""},{"num":12,"nameKor":"김세린","nameEng":"Kim Serin","role":"Product Designer","department":0,"professorId":"p04","studentId":2021192006,"eMail":"kara7094@naver.com","sns":"@ssal._.bap","imgUrl":"../image/12/portrait.jpg","category":"c4","projectNum":48,"team":0,"leader":""},{"num":13,"nameKor":"김소리","nameEng":"Kim Sori","role":"UXUI Designer","department":1,"professorId":"p03","studentId":2021194037,"eMail":"mulsik11@gmail.com","sns":"@sorisorry_","imgUrl":"../image/13/portrait.jpg","category":"c4","projectNum":49,"team":0,"leader":""},{"num":14,"nameKor":"김예린","nameEng":"Kim Yerin","role":"Industrial Designer","department":0,"professorId":"p02","studentId":2021190007,"eMail":"kkye.0204@gmail.com","sns":"@_y.rin_","imgUrl":"../image/14/portrait.jpg","category":"c5","projectNum":69,"team":0,"leader":""},{"num":15,"nameKor":"김예준","nameEng":"Kim Yejun","role":"UX/UI, Front-End","department":1,"professorId":"p01","studentId":2020194006,"eMail":"optimusjun15@naver.com","sns":"@yeah_jun_0228","imgUrl":"../image/15/portrait.jpg","category":"c4","projectNum":50,"team":0,"leader":""},{"num":16,"nameKor":"김윤곤","nameEng":"Kim Yungon","role":"Front Designer","department":1,"professorId":"p03","studentId":2020194008,"eMail":"yunkon0722@gmail.com","sns":"@0123456789on","imgUrl":"../image/16/portrait.jpg","category":"c0","projectNum":1,"team":0,"leader":""},{"num":17,"nameKor":"김윤서","nameEng":"Kim Yunseo","role":"UX/UI Designer","department":1,"professorId":"p02","studentId":2021192007,"eMail":"thtpwl39@tukorea.ac.kr","sns":"@kyuunsoo","imgUrl":"../image/17/portrait.jpg","category":"c4","projectNum":51,"team":0,"leader":""},{"num":18,"nameKor":"김윤성","nameEng":"Kim Yunseong","role":"3D Modeling","department":0,"professorId":"p00","studentId":2020192038,"eMail":"dbstjd9063@gmail.com","sns":"@kimyyuun","imgUrl":"../image/18/portrait.jpg","category":"c0","projectNum":2,"team":0,"leader":""},{"num":19,"nameKor":"김주은","nameEng":"Kim Jueun","role":"UX/UI, HTML Coder","department":1,"professorId":"p02","studentId":2022194007,"eMail":"kimjueun58@gmail.com","sns":"-","imgUrl":"../image/19/portrait.jpg","category":"c2","projectNum":28,"team":1,"leader":0},{"num":20,"nameKor":"김지민","nameEng":"Kim Jimin","role":"Art Director & 2D","department":0,"professorId":"p02","studentId":2020190011,"eMail":"a01039029588@gmail.com","sns":"@oui_parfum_tuk23","imgUrl":"../image/20/portrait.jpg","category":"c3","projectNum":35,"team":1,"leader":0},{"num":21,"nameKor":"김지혜","nameEng":"Kim Jihye","role":"Concept, Rendering","department":0,"professorId":"p05","studentId":2021190012,"eMail":"kjj0209077@naver.com","sns":"@istriioi","imgUrl":"../image/21/portrait.jpg","category":"c5","projectNum":70,"team":1,"leader":1},{"num":22,"nameKor":"김한슬","nameEng":"Kim Hanseul","role":"Product Designer","department":0,"professorId":"p04","studentId":2021192008,"eMail":"mns816@turkorea.ac.kr","sns":"@mnsul_2","imgUrl":"../image/22/portrait.jpg","category":"c3","projectNum":36,"team":0,"leader":""},{"num":23,"nameKor":"남가림","nameEng":"Nam Garim","role":"Product Designer","department":0,"professorId":"p00","studentId":2021190014,"eMail":"garim0402@naver.com","sns":"@ga_rim__","imgUrl":"../image/23/portrait.jpg","category":"c5","projectNum":71,"team":1,"leader":1},{"num":24,"nameKor":"남궁두경","nameEng":"Namgoong Doogyung","role":"Prototype","department":0,"professorId":"p05","studentId":2020192012,"eMail":"dkyung1919@naver.com","sns":"@munamunyeojung.9","imgUrl":"../image/24/portrait.jpg","category":"c0","projectNum":3,"team":1,"leader":1},{"num":25,"nameKor":"노희재","nameEng":"Roe Heejae","role":"Interaction Designer","department":0,"professorId":"p02","studentId":2019192013,"eMail":"wjdrl1144@gmail.com","sns":"@heejae_po","imgUrl":"../image/25/portrait.jpg","category":"c3","projectNum":37,"team":0,"leader":""},{"num":26,"nameKor":"마은성","nameEng":"Ma Eunseong","role":"3D Modeling","department":0,"professorId":"p05","studentId":2021190016,"eMail":"mes3788@naver.com","sns":"@iam._.es","imgUrl":"../image/26/portrait.jpg","category":"c5","projectNum":70,"team":1,"leader":0},{"num":27,"nameKor":"문나라","nameEng":"Moon Nara","role":"Product Designer","department":0,"professorId":"p02","studentId":2021192009,"eMail":"skfk020529@naver.com","sns":"@nnoom_r","imgUrl":"../image/27/portrait.jpg","category":"c3","projectNum":38,"team":0,"leader":""},{"num":28,"nameKor":"문지형","nameEng":"Moon Jihyeong","role":"Art Director","department":0,"professorId":"p05","studentId":2020192014,"eMail":"dogtable4099@naver.com","sns":"@puer.deisgn","imgUrl":"../image/28/portrait.jpg","category":"c0","projectNum":3,"team":1,"leader":0},{"num":29,"nameKor":"민혜연","nameEng":"Min Hyeyeon","role":"Art Director","department":0,"professorId":"p00","studentId":2022192010,"eMail":"hime4ma.y@gmail.com","sns":"@kid.mugi","imgUrl":"../image/29/portrait.jpg","category":"c2","projectNum":29,"team":0,"leader":""},{"num":30,"nameKor":"박민규","nameEng":"Park Mingyu","role":"Application Designer","department":1,"professorId":"p03","studentId":2019194041,"eMail":"mingyu6393@naver.com","sns":"@min.gyu7791","imgUrl":"../image/30/portrait.jpg","category":"c0","projectNum":4,"team":0,"leader":""},{"num":31,"nameKor":"박서영","nameEng":"Park Seoyoung","role":"Product Designer","department":1,"professorId":"p03","studentId":2021192011,"eMail":"pszer0@naver.com","sns":"@ps.zer0","imgUrl":"../image/31/portrait.jpg","category":"c4","projectNum":52,"team":0,"leader":""},{"num":32,"nameKor":"박예인","nameEng":"Park Yein","role":"Prototype","department":1,"professorId":"p01","studentId":2021194013,"eMail":"pyi0413@naver.com","sns":"@p5_baguette","imgUrl":"../image/32/portrait.jpg","category":"c4","projectNum":45,"team":1,"leader":1},{"num":33,"nameKor":"박예진","nameEng":"Park Yejin","role":"Product Designer","department":0,"professorId":"p00","studentId":2021190018,"eMail":"yejin6607@naver.com","sns":"@yejin6607","imgUrl":"../image/33/portrait.jpg","category":"c5","projectNum":71,"team":1,"leader":0},{"num":34,"nameKor":"박재민","nameEng":"Park Jaemin","role":"Web 3D/XR Designer","department":1,"professorId":"p03","studentId":2020192016,"eMail":"shiibadog@tukorea.ac.kr","sns":"@jaemino_ob","imgUrl":"../image/34/portrait.jpg","category":"c2","projectNum":27,"team":1,"leader":0},{"num":35,"nameKor":"박정훈","nameEng":"Park Jeonghun","role":"Industrial Designer","department":0,"professorId":"p05","studentId":2022192012,"eMail":"2022192012@tukorea.ac.kr","sns":"-","imgUrl":"../image/35/portrait.jpg","category":"c2","projectNum":30,"team":0,"leader":""},{"num":36,"nameKor":"박지수","nameEng":"Park Jisoo","role":"UX/UI Designer","department":1,"professorId":"p03","studentId":2021194014,"eMail":"popopo020128@gmail.com","sns":"@dujs_b","imgUrl":"../image/36/portrait.jpg","category":"c0","projectNum":5,"team":0,"leader":""},{"num":37,"nameKor":"박해인","nameEng":"Park Haein","role":"Front Designer","department":0,"professorId":"p06","studentId":2022192014,"eMail":"2022192014@tukorea.ac.kr","sns":"-","imgUrl":"../image/37/portrait.jpg","category":"c5","projectNum":72,"team":0,"leader":""},{"num":38,"nameKor":"박현","nameEng":"Park Hyun","role":"Designer Director","department":0,"professorId":"p04","studentId":2022190039,"eMail":"parkhyun920@naver.com","sns":"-","imgUrl":"../image/38/portrait.jpg","category":"c4","projectNum":53,"team":1,"leader":1},{"num":39,"nameKor":"박혜성","nameEng":"Park Hyeseong","role":"Furniture Designer","department":0,"professorId":"p00","studentId":2021190020,"eMail":"hyesungpark1128@gmail.com","sns":"@comet_design02","imgUrl":"../image/39/portrait.jpg","category":"c5","projectNum":73,"team":0,"leader":""},{"num":40,"nameKor":"박효정","nameEng":"Park Hyojung","role":"UX/UI Designer","department":0,"professorId":"p02","studentId":2021190021,"eMail":"2021190021@tukorea.ac.kr","sns":"-","imgUrl":"../image/40/portrait.jpg","category":"c4","projectNum":54,"team":0,"leader":""},{"num":41,"nameKor":"배아영","nameEng":"Bae Ayeong","role":"UX/UI Designer","department":1,"professorId":"p01","studentId":2022194014,"eMail":"your3ami@tukorea.ac.kr","sns":"-","imgUrl":"../image/41/portrait.jpg","category":"c0","projectNum":6,"team":0,"leader":""},{"num":42,"nameKor":"배혜림","nameEng":"Bae Hyelim","role":"Industrial Designer","department":0,"professorId":"p05","studentId":2021192013,"eMail":"mil2021@tukorea.ac.kr","sns":"-","imgUrl":"../image/42/portrait.jpg","category":"c0","projectNum":7,"team":1,"leader":0},{"num":43,"nameKor":"백대한","nameEng":"Baek Daehan","role":"Product Designer","department":0,"professorId":"p05","studentId":2020192039,"eMail":"eifasfkifk@gmail.com","sns":"-","imgUrl":"../image/43/portrait.jpg","category":"c0","projectNum":8,"team":0,"leader":""},{"num":44,"nameKor":"백미나","nameEng":"Baek Mina","role":"Graphic designer","department":0,"professorId":"p06","studentId":2021190023,"eMail":"wbwyhr@naver.com","sns":"@oeuvreb","imgUrl":"../image/44/portrait.jpg","category":"c4","projectNum":55,"team":0,"leader":""},{"num":45,"nameKor":"서연주","nameEng":"Seo Yeonju","role":"UI/UX,HTML Coder","department":1,"professorId":"p02","studentId":2022194015,"eMail":"syj0305290529@gmail.com","sns":"@yeonju._0","imgUrl":"../image/45/portrait.jpg","category":"c2","projectNum":28,"team":1,"leader":1},{"num":46,"nameKor":"서원진","nameEng":"Seo Wonjin","role":"Living Product Designer","department":0,"professorId":"p05","studentId":2019152026,"eMail":"swj000324@gmail.com","sns":"@wonjin0324","imgUrl":"../image/46/portrait.jpg","category":"c4","projectNum":56,"team":0,"leader":""},{"num":47,"nameKor":"석동현","nameEng":"Suk Donghyun","role":"Visual Director","department":0,"professorId":"p06","studentId":2020190015,"eMail":"andysuk0108@naver.com","sns":"@hyun_108","imgUrl":"../image/47/portrait.jpg","category":"c5","projectNum":66,"team":1,"leader":0},{"num":48,"nameKor":"성수민","nameEng":"Seong Sumin","role":"JS, Flask Prototype","department":1,"professorId":"p02","studentId":2020194016,"eMail":"epwyqqu309@gmail.com","sns":"-","imgUrl":"../image/48/portrait.jpg","category":"c3","projectNum":39,"team":1,"leader":1},{"num":49,"nameKor":"성유승","nameEng":"Sung Yuseung","role":"UX/UI, Prototype","department":1,"professorId":"p02","studentId":2019122021,"eMail":"usngsung0830@naver.com","sns":"@u_seung0830","imgUrl":"../image/49/portrait.jpg","category":"c1","projectNum":25,"team":1,"leader":0},{"num":50,"nameKor":"송지원","nameEng":"Song Jiwon","role":"Creative Designer","department":0,"professorId":"p04","studentId":2021190024,"eMail":"wldnjs0762@naver.com","sns":"@7.27_v","imgUrl":"../image/50/portrait.jpg","category":"c0","projectNum":9,"team":1,"leader":1},{"num":51,"nameKor":"신산하","nameEng":"Shin Sanha","role":"UX/UI Designer","department":1,"professorId":"p02","studentId":2021192014,"eMail":"sanha@tukorea.ac.kr","sns":"@sanamonii","imgUrl":"../image/51/portrait.jpg","category":"c3","projectNum":39,"team":1,"leader":0},{"num":52,"nameKor":"신주혜","nameEng":"Shin Juhye","role":"Product Designer","department":0,"professorId":"p05","studentId":2022190019,"eMail":"grace04god@tukorea.ac.kr","sns":"-","imgUrl":"../image/52/portrait.jpg","category":"c0","projectNum":10,"team":1,"leader":0},{"num":53,"nameKor":"신주희","nameEng":"Shin Juhui","role":"PM · UX/UI · Dev","department":1,"professorId":"p07","studentId":2022194016,"eMail":"lucytomato@naver.com","sns":"@krhee_o","imgUrl":"../image/53/portrait.jpg","category":"c3","projectNum":40,"team":0,"leader":""},{"num":54,"nameKor":"심태섭","nameEng":"Sim Taeseob","role":"UX/UI, Prototype","department":1,"professorId":"p01","studentId":2020194017,"eMail":"1212sts@naver.com","sns":"@tlaxotjq","imgUrl":"../image/54/portrait.jpg","category":"c0","projectNum":11,"team":0,"leader":""},{"num":55,"nameKor":"안상은","nameEng":"An Sangeun","role":"Product Designer","department":1,"professorId":"p03","studentId":2022194018,"eMail":"iltkddms@tukorea.ac.kr","sns":"@in_saengeun","imgUrl":"../image/55/portrait.jpg","category":"c4","projectNum":57,"team":1,"leader":1},{"num":56,"nameKor":"염수민","nameEng":"Yeom Sumin","role":"UX/UI, Prototype","department":1,"professorId":"p01","studentId":2022194021,"eMail":"yeommin2528@gmail.com","sns":"-","imgUrl":"../image/56/portrait.jpg","category":"c4","projectNum":58,"team":0,"leader":""},{"num":57,"nameKor":"유수현","nameEng":"Ryu Soohyun","role":"Modeling, UX/UI","department":0,"professorId":"p06","studentId":2022192019,"eMail":"suhyeon9145@naver.com","sns":"@dbtn_246","imgUrl":"../image/57/portrait.jpg","category":"c2","projectNum":31,"team":1,"leader":1},{"num":58,"nameKor":"윤모란","nameEng":"Yoon Moran","role":"Modeling, Rendering","department":0,"professorId":"p06","studentId":2022190024,"eMail":"moran_a_486@naver.com","sns":"-","imgUrl":"../image/58/portrait.jpg","category":"c2","projectNum":31,"team":1,"leader":0},{"num":59,"nameKor":"윤서희","nameEng":"Yoon Seohee","role":"Product Designer","department":0,"professorId":"p00","studentId":2020192021,"eMail":"dbstjgml000@naver.com","sns":"@hi_seoheeeee","imgUrl":"../image/59/portrait.jpg","category":"c0","projectNum":12,"team":0,"leader":""},{"num":60,"nameKor":"윤재익","nameEng":"Yun Jaeik","role":"Art Director","department":1,"professorId":"p01","studentId":2020194018,"eMail":"jwodlr10014@naver.com","sns":"@bpink._.j","imgUrl":"../image/60/portrait.jpg","category":"c0","projectNum":13,"team":0,"leader":""},{"num":61,"nameKor":"이교연","nameEng":"Lee Gyoyeon","role":"Product,Graphic","department":0,"professorId":"p01","studentId":2022192038,"eMail":"inacutewaytoday@gmail.com","sns":"-","imgUrl":"../image/61/portrait.jpg","category":"c2","projectNum":32,"team":0,"leader":""},{"num":62,"nameKor":"이도훈","nameEng":"Lee Dohun","role":"Mobility Designer","department":0,"professorId":"p02","studentId":2020190025,"eMail":"bestson0137@tukorea.ac.kr","sns":"@dl_doh","imgUrl":"../image/62/portrait.jpg","category":"c5","projectNum":74,"team":0,"leader":""},{"num":63,"nameKor":"이민욱","nameEng":"Lee Minuk","role":"Product Designer","department":1,"professorId":"p01","studentId":2020194021,"eMail":"lmu0306@naver.com","sns":"-","imgUrl":"../image/63/portrait.jpg","category":"c4","projectNum":59,"team":0,"leader":""},{"num":64,"nameKor":"이상","nameEng":"Lee Sang","role":"Industrial Designer","department":0,"professorId":"p02","studentId":2020190027,"eMail":"23isgood@naver.com","sns":"@leesang2001","imgUrl":"../image/64/portrait.jpg","category":"c3","projectNum":35,"team":1,"leader":1},{"num":65,"nameKor":"이영","nameEng":"Lee Young","role":"Product Designer","department":1,"professorId":"p03","studentId":2022194025,"eMail":"young2003@tukorea.ac.kr","sns":"-","imgUrl":"../image/65/portrait.jpg","category":"c4","projectNum":57,"team":1,"leader":0},{"num":66,"nameKor":"이영재","nameEng":"Lee Youngjae","role":"Product Designer","department":1,"professorId":"p03","studentId":2020194023,"eMail":"roiray0320@gmail.com","sns":"@6amtol","imgUrl":"../image/66/portrait.jpg","category":"c0","projectNum":14,"team":1,"leader":0},{"num":67,"nameKor":"이웅찬","nameEng":"Lee Woongchan","role":"Product Designer","department":0,"professorId":"p02","studentId":2020192028,"eMail":"dldndcks01@naver.com","sns":"@eedndcks","imgUrl":"../image/67/portrait.jpg","category":"c3","projectNum":41,"team":0,"leader":""},{"num":68,"nameKor":"이준오","nameEng":"Lee Juno","role":"Graphic, 3D, UI/UX","department":0,"professorId":"p00","studentId":2020190030,"eMail":"ljuno421@naver.com","sns":"@jun_duck0421","imgUrl":"../image/68/portrait.jpg","category":"c0","projectNum":15,"team":1,"leader":1},{"num":69,"nameKor":"이지민","nameEng":"Lee Jimin","role":"UX/UI, Prototype","department":1,"professorId":"p02","studentId":2020194026,"eMail":"ibs7533@naver.com","sns":"@minigmin_1004","imgUrl":"../image/69/portrait.jpg","category":"c1","projectNum":25,"team":1,"leader":1},{"num":70,"nameKor":"이지현","nameEng":"Lee Jihyeon","role":"Drone Designer","department":0,"professorId":"p04","studentId":2022192023,"eMail":"lanius4257@tukorea.ac.kr","sns":"@__jiwawa__","imgUrl":"../image/70/portrait.jpg","category":"c5","projectNum":67,"team":1,"leader":0},{"num":71,"nameKor":"이채연","nameEng":"Lee Chaeyeon","role":"UX/UI, Front-End","department":1,"professorId":"p07","studentId":2021194022,"eMail":"cvgh6835@naver.com","sns":"@cvgh._.ly","imgUrl":"../image/71/portrait.jpg","category":"c0","projectNum":16,"team":0,"leader":""},{"num":72,"nameKor":"이채원","nameEng":"Lee Chaewon","role":"Product Designer","department":0,"professorId":"p06","studentId":2022192024,"eMail":"chaerry3907@naver.com","sns":"@chae_rr","imgUrl":"../image/72/portrait.jpg","category":"c0","projectNum":7,"team":1,"leader":1},{"num":73,"nameKor":"이채원","nameEng":"Lee Chaewon","role":"Product Designer","department":1,"professorId":"p03","studentId":2021194023,"eMail":"mondyu1024@gmail.com","sns":"@di_ed_ie","imgUrl":"../image/73/portrait.jpg","category":"c0","projectNum":14,"team":1,"leader":1},{"num":74,"nameKor":"임세준","nameEng":"Im Sejun","role":"Product Designer","department":0,"professorId":"p04","studentId":2019190043,"eMail":"helicat123@naver.com","sns":"-","imgUrl":"../image/74/portrait.jpg","category":"c5","projectNum":75,"team":1,"leader":1},{"num":75,"nameKor":"임소이","nameEng":"Yim Soie","role":"3d Designer","department":0,"professorId":"p05","studentId":2022190030,"eMail":"soie0410@tukorea.ac.kr","sns":"@idiox_1","imgUrl":"../image/75/portrait.jpg","category":"c0","projectNum":17,"team":1,"leader":1},{"num":76,"nameKor":"임종석","nameEng":"Lim Jongseok","role":"Product Designer","department":0,"professorId":"p06","studentId":2020192032,"eMail":"rimjs01@tukorea.ac.kr","sns":"@im_seok01","imgUrl":"../image/76/portrait.jpg","category":"c0","projectNum":18,"team":0,"leader":""},{"num":77,"nameKor":"전준범","nameEng":"Jeon Junbeom","role":"UX, 3D Graphics","department":1,"professorId":"p01","studentId":2021194028,"eMail":"@jb_jeon@naver.com","sns":"@imdiverstandinoncliff","imgUrl":"../image/77/portrait.jpg","category":"c4","projectNum":60,"team":0,"leader":""},{"num":78,"nameKor":"정문선","nameEng":"Jung Moonsun","role":"UX/UI Designer","department":0,"professorId":"p02","studentId":2020190033,"eMail":"munseon9822@naver.com","sns":"@moooon_suuuuuun","imgUrl":"../image/78/portrait.jpg","category":"c3","projectNum":42,"team":0,"leader":""},{"num":79,"nameKor":"정민호","nameEng":"Jung Minho","role":"Industrial Designer","department":0,"professorId":"p04","studentId":2020190034,"eMail":"jmh011014@naver.com","sns":"@j_m2nh5","imgUrl":"../image/79/portrait.jpg","category":"c5","projectNum":68,"team":1,"leader":1},{"num":80,"nameKor":"정유진","nameEng":"Jung Yuzin","role":"Product Designer","department":0,"professorId":"p05","studentId":2022190033,"eMail":"akf0301@naver.com","sns":"@jhin0112__","imgUrl":"../image/80/portrait.jpg","category":"c5","projectNum":76,"team":0,"leader":""},{"num":81,"nameKor":"정지원","nameEng":"Jung Jiwon","role":"3D Designer","department":0,"professorId":"p06","studentId":2022192025,"eMail":"marcellar1071@gmail.com","sns":"@stopmongkki","imgUrl":"../image/81/portrait.jpg","category":"c0","projectNum":17,"team":1,"leader":0},{"num":82,"nameKor":"정혜원","nameEng":"Jeong Hyewon","role":"Visual Designer","department":0,"professorId":"p06","studentId":2021190034,"eMail":"jhw275@naver.com","sns":"-","imgUrl":"../image/82/portrait.jpg","category":"c0","projectNum":10,"team":1,"leader":1},{"num":83,"nameKor":"정혜조","nameEng":"Jeong Hyejo","role":"3D Designer","department":0,"professorId":"p00","studentId":2022192028,"eMail":"hyejo5614@naver.com","sns":"@11.7OK","imgUrl":"../image/83/portrait.jpg","category":"c4","projectNum":61,"team":0,"leader":""},{"num":84,"nameKor":"정호균","nameEng":"Jeong Hokyun","role":"UX/UI","department":1,"professorId":"p01","studentId":2020194031,"eMail":"hohokyun@naver.com","sns":"-","imgUrl":"../image/84/portrait.jpg","category":"c4","projectNum":62,"team":0,"leader":""},{"num":85,"nameKor":"조선화","nameEng":"Jo Sunhwa","role":"Visual Designer","department":0,"professorId":"p04","studentId":2022192039,"eMail":"jo5629@naver.com","sns":"@_sh_1114_","imgUrl":"../image/85/portrait.jpg","category":"c4","projectNum":53,"team":1,"leader":0},{"num":86,"nameKor":"조채빈","nameEng":"Cho Chaebin","role":"Robot Designer","department":0,"professorId":"p00","studentId":2021192029,"eMail":"chea0000@tukorea.ac.kr","sns":"-","imgUrl":"../image/86/portrait.jpg","category":"c0","projectNum":19,"team":0,"leader":""},{"num":87,"nameKor":"주예지","nameEng":"Ju Yeji","role":"UX/UI","department":1,"professorId":"p03","studentId":2022194040,"eMail":"jooyeiji@naver.com","sns":"@yej1__","imgUrl":"../image/87/portrait.jpg","category":"c0","projectNum":20,"team":0,"leader":""},{"num":88,"nameKor":"진세원","nameEng":"Jin Sewon","role":"Product & Visual","department":0,"professorId":"p00","studentId":2022192030,"eMail":"sewoneee@naver.com","sns":"@jinsewon99","imgUrl":"../image/88/portrait.jpg","category":"c0","projectNum":15,"team":1,"leader":0},{"num":89,"nameKor":"진효민","nameEng":"Jin Hyomin","role":"Living Designer","department":0,"professorId":"p07","studentId":2022190040,"eMail":"jhm8912@naver.com","sns":"@hyomin_eao","imgUrl":"../image/89/portrait.jpg","category":"c4","projectNum":63,"team":0,"leader":""},{"num":90,"nameKor":"차소이","nameEng":"Cha Soyi","role":"Industrial Designer","department":0,"professorId":"p06","studentId":2022192040,"eMail":"osjj2202@naver.com","sns":"@cow__tooth","imgUrl":"../image/90/portrait.jpg","category":"c0","projectNum":21,"team":0,"leader":""},{"num":91,"nameKor":"차한비","nameEng":"Cha Hanbi","role":"Product Designer","department":0,"professorId":"p02","studentId":2022192031,"eMail":"cha4786@naver.com","sns":"@raincar__","imgUrl":"../image/91/portrait.jpg","category":"c2","projectNum":33,"team":0,"leader":""},{"num":92,"nameKor":"최가현","nameEng":"Choi Gahyun","role":"XR Controller","department":1,"professorId":"p07","studentId":2022194034,"eMail":"poiulkjhmnb098@naver.com","sns":"@_.ga._.xx","imgUrl":"../image/92/portrait.jpg","category":"c3","projectNum":43,"team":0,"leader":""},{"num":93,"nameKor":"한채원","nameEng":"Han Chaewon","role":"Product Design","department":0,"professorId":"p04","studentId":2021190036,"eMail":"2chaetwo@gmail.com","sns":"@1chaeone","imgUrl":"../image/93/portrait.jpg","category":"c4","projectNum":64,"team":0,"leader":""},{"num":94,"nameKor":"함은서","nameEng":"Ham Eunseo","role":"UX/UI Designer","department":1,"professorId":"p03","studentId":2021192034,"eMail":"hamunseo0894@naver.com","sns":"@hama_pit_a_pat","imgUrl":"../image/94/portrait.jpg","category":"c0","projectNum":22,"team":0,"leader":""},{"num":95,"nameKor":"허도윤","nameEng":"Heo Doyun","role":"UX/UI","department":1,"professorId":"p03","studentId":2022194041,"eMail":"saver2075@icloud.com","sns":"-","imgUrl":"../image/95/portrait.jpg","category":"c3","projectNum":44,"team":0,"leader":""},{"num":96,"nameKor":"허지유","nameEng":"Heo Jiyu","role":"Art Director","department":0,"professorId":"p04","studentId":2021192035,"eMail":"jjoojjoo0314@naver.com","sns":"@ji._.iu","imgUrl":"../image/96/portrait.jpg","category":"c0","projectNum":9,"team":1,"leader":0},{"num":97,"nameKor":"홍승재","nameEng":"Hong Seungjae","role":"Product Designer","department":0,"professorId":"p02","studentId":2020192036,"eMail":"h010505@naver.com","sns":"@dent__de","imgUrl":"../image/97/portrait.jpg","category":"c4","projectNum":65,"team":0,"leader":""},{"num":98,"nameKor":"홍지우","nameEng":"Hong Jiwoo","role":"Art Director","department":0,"professorId":"p04","studentId":2021192036,"eMail":"hongjiwoo222@gmail.com","sns":"@ghdwldnnn","imgUrl":"../image/98/portrait.jpg","category":"c5","projectNum":75,"team":1,"leader":0},{"num":99,"nameKor":"황수정","nameEng":"Hwang Sujeong","role":"3D Designer","department":0,"professorId":"p05","studentId":2022190036,"eMail":"bvnm1234@tukorea.ac.kr","sns":"@suj2ong","imgUrl":"../image/99/portrait.jpg","category":"c0","projectNum":23,"team":0,"leader":""}]'),IR=[{id:"p00",nameKor:"장영주",nameEng:"Jang Youngjoo",rank:"학부장, 교수",email:"jyj@tukorea.ac.kr",education:["㈜LG 전자 디자인 연구소","㈜인터디자인 디자인 기획실장","한국디지털디자인학회 이사","경기도 시흥시 정책기획단 정책위원","제품디자인·브랜드 개발센터 [EH]책임교수","디자인비지니스혁신 센터장"],field:["제품디자인·브랜드 개발","디자인 조직과 협동적 Process","제품디자인과 산업기술의 통합적 시스템 구축"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524695988100.jpg"},{id:"p01",nameKor:"권오재",nameEng:"Kwon Ojae",rank:"교수",email:"kwsokw@tukorea.ac.kr",education:["㈜키메이커스 대표이사","㈜삼성전자 디자인경영센터 UX연구소 그룹장","㈜LG전자 디자인종합연구소 가전제품팀 연구원","서울 성북구청, 용인시 디자인위원","ESK / KOSES / KADI 이사, 서비스디자인학회 사업부회장","2016 대한민국 ICT INNOVATION 대상 미래부장관 유공자 표창"],field:["UX 기반 제품/서비스 디자인 기획 및 양산화 개발","제품 인터페이스 UI 분석 및 UI 설계","제품디자인, 설계 및 양산용 제품 개발","사용자의 감성을 자극하는 밸류 체인(Value Chain) 요인 연구"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524642556100.jpg"},{id:"p02",nameKor:"김 억",nameEng:"Kim Eok",rank:"교수, 학생처장",email:"kimeok@tukorea.ac.kr",education:["㈜LG전자 디자인경영센터 선임연구원","KAIST 총동문회 이사","한국산업디자이너협회 이사 / 한국서비스디자인학회 이사","한국디자인기초조형학회 / 한국디자인학회 이사","디자인융합전문대학원 사업단장"],field:["디자인 전략 및 기획","서비스디자인 및 PSS(Product-Service System) 개발","도시 공공 디자인"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524658322100.jpg"},{id:"p03",nameKor:"김한종",nameEng:"Kim Hanjong",rank:"조교수, PD교수",email:"hanjongkim@tukorea.ac.kr",education:["AR 기반의 인터랙티브 제품 프로토타이핑 도구 개발","이동형음압병동의 디자인 요구사항 수립 연구","이동형음압병동 설계를 위한 디자인 도구 개발","한국기계연구원 산업용 SW UX/UI 가이드라인 개발"],field:["Web 기반 3D 그래픽스","SW 시스템 디자인 / 프론트엔드 개발","디자인 지원 도구 개발"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524669896100.jpg"},{id:"p04",nameKor:"조남주",nameEng:"Jo Namjoo",rank:"교수,특별보좌역",email:"njjoh@tukorea.ac.kr",education:["서울특별시 서울디자인위원회 심의위원","국립공원관리공단 디자인 분야 자문위원","'디자인코리아 2003'국제회의 패널리스트","㈜현대 리바트 가구 디자인아웃소싱 프로젝트"],field:["가구 디자인 엔지니어링","지속가능한 공공디자인","제품디자인 엔지니어링"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524711232100.jpg"},{id:"p05",nameKor:"한민섭",nameEng:"Han Minseop",rank:"부교수",email:"mshan@tukorea.ac.kr",education:["CISD정보저장기기 연구센터 전문연구원","㈜코닝 정밀소재 책임연구원","㈜삼성전자 생산기술연구소 책임연구원"],field:["나노/마이크로 초정밀 미세 가공 공정","Equipment H/W 설계 및 시뮬레이션","융복합 가공 시스템 설계"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524614469100.jpg"},{id:"p06",nameKor:"홍성수",nameEng:"Hong Seongsu",rank:"교수, 국제처장",email:"hss@tukorea.ac.kr",education:["3차원 의료영상시스템(MRI) 제품설계 및 디자인","다족형견마로봇 / 헬스케어로봇 / 재활보조로봇","식사보조로봇/ 수중로봇/ 청소로봇 / 웨어러블 로봇","협동로봇/ 자율주행로봇/ 순찰로봇/ 공항안내로봇 등 90여종 로봇 개발"],field:["로봇 시스템 개발/ 로봇디자인/ HRI 디자인","로봇 문화콘텐츠 기술개발","신기술 전시기획/ 전시시스템개발"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524724386100.jpg"},{id:"p07",nameKor:"김태균",nameEng:"Kim Taekyun",rank:"조교수, 진로취업지도교수",email:"tgkim1design@tukorea.ac.kr",education:["영국, 영국 국제디자인박람회전시 ‘London 100% Design‘ 초청 출품","중국, SUPER DESIGNERS: Exploration of Creative Forms, The Boundaries of Design Forms 초청 출품","INNOCHINA 대상","나는글로벌벤처다 동상","Spark Awards-Silver"],field:["AI 기반 제품·공공시설물 디자인 실무·방법론","UX 중심 디자인 전략·개발","지식 주도 디자인 아이디에이션 기반 실무 디자인 설계 및 교수법"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1724738930608100.jpg"}],tu=JSON.parse(`[{"members":[1],"category":"c0","projectNum":0,"titleKor":"체계적인 아이디어 발전을 위한 AI기반 디자인 실험 워크스페이스","titleEng":"IDEA UNION LAB","description":"IDEA UNION LAB은 아이디어 발전 과정에서 어려움을 겪는 디자이너를 위한 AI 기반 디자인 실험실 서비스입니다. 단순히 AI에게 디자인 결과물을 요청하는 방식이 아니라 디자인 프로세스처럼 방법론의 프로세스에 따라 인사이트를 도출하며, 발전된 아이디어 및 생성 과정을 제공합니다. 이를 통해 보다 체계적으로 아이디어를 발전시킬 수 있으며 방법론을 학습할 수 있습니다.","videoId":1128192125},{"members":[16],"category":"c0","projectNum":1,"titleKor":"맵시","titleEng":"MAPSEE","description":"MAPSEE는 사용자의 취향을 분석해 생성한 퍼소나와 실제 착장을 비교함으로써, 두 스타일 간의 차이를 시각적으로 보여주는 서비스입니다. 색상·핏·무드의 유사도와 차이를 ‘패션 지도’처럼 표현하여, 사용자가 자신의 옷맵시가 어떤 방향으로 나아가고 있는지 한눈에 확인할 수 있도록 돕습니다.","videoId":1127543207},{"members":[18],"category":"c0","projectNum":2,"titleKor":"건물화재내부정찰로봇","titleEng":"RESQ","description":"화재 발생 후 골든타임을 지키기 위해서 현재 소방관인력으로만 힘든  경우가 많습니다. 고온·연기·어두운 환경에서도 자유롭게 이동하며 \\n내부를 탐색할 수 있으며, 실시간 영상 데이터를 제공해 소방관의 안전한 구조 활동을 지원합니다. ResQ는 화재 현장에서 인명 피해를 \\n최소화할 수 있습니다.   \\n있는 든든한 파트너입니다.","videoId":1128457679},{"members":[24,28],"category":"c0","projectNum":3,"titleKor":"스카이 가드 듀오","titleEng":"SKY GUARD DUO","description":"매년 증가하는 버드스트라이크 위협에 맞서는 'SKY GUARD DUO'. 이 시스템은 지상을 담당하는 자율주행 로봇과 상공을 책임지는 드론 편대로 구성된 이중 방어 솔루션입니다. AI가 위협을 탐지하면 에어캐논이 먼저 대응하고, 필요시 드론 편대가 출격하여 입체 작전을 펼칩니다. 공항 안전의 새로운 기준을 제시합니다.","videoId":1126407280},{"members":[30],"category":"c0","projectNum":4,"titleKor":"마이다꾸","titleEng":"MYDAKU","description":"MYDAKU 는 작성한 일기의 내용과 키워드를 통해 그날의 기분과 일상을 표현한 AI 스티커 제작 서비스입니다. 업로드 한 일기 사진을 바탕으로 키워드를 선택하여 감정이나 주제를 시각적으로 표현할 수 있는 AI 스티커를 제공받습니다. 또한 자동 생성된 AI 스티커를 저장하며 제작한 스티커와 키워드를 바탕으로 타 사용자와 스티커를 공유할 수 있습니다.","videoId":1126865139},{"members":[36],"category":"c0","projectNum":5,"titleKor":"레디큐","titleEng":"READYQ","description":"READYQ는 필기 자료를 인식하여 퀴즈를 생성하는 AI 기반 학습 관리 서비스입니다. 암기 학습에 어려움을 겪는 사용자를 위해 맞춤형 퀴즈를 제공하고 체계적인 기억 인출 연습을 돕습니다. 나아가 생성된 퀴즈를 통해 자연스러운 복습 기회와 효율적인 학습 관리를 지원합니다.","videoId":1127539556},{"members":[41],"category":"c0","projectNum":6,"titleKor":"조각조각","titleEng":"JOGAKJOGAK","description":"조각조각은 사용자가 키워드를 바탕으로 스토리를 작성하고, 해당 스토리에 맞춰 사진을 촬영하면 AI가 일러스트를 완성시켜 주는 게임형 서비스입니다. 캐릭터 애니메이션 요소를 통해 사용자에게 흥미를 제공하여 사진 속에 담긴 순간의 이야기와 감정을 풍부하게 표현하도록 돕습니다.","videoId":1126740651},{"members":[72,42],"category":"c0","projectNum":7,"titleKor":"팔로잉 충전 스테이션 드론","titleEng":"FOLLOWING CHARGING STATION DRONE","description":"Following Charging Station Drone은 공중급유기 기술에서 착안한 제품으로 드론을 충전해주는 이동식 충전소 역할을 수행한다.  이 충전 드론은 배터리 한계로 비행 시간이 짧았던 드론들을 충전하므로써 효율성을 극대화하고 편한 충전 방식을 제공한다.","videoId":1127151890},{"members":[43],"category":"c0","projectNum":8,"titleKor":"에이아이스마트모니터암","titleEng":"AI SMART MONITORARM","description":"AI 스마트 모니터암은 사용자의 자세를 인식해 올바르게 교정해주는 스마트 디바이스입니다. 내장된 카메라와 인공지능이 목과 어깨의 움직임을 실시간으로 감지하여 피로를 줄이고 건강한 자세 습관을 형성하도록 돕습니다.","videoId":1127217010},{"members":[50,96],"category":"c0","projectNum":9,"titleKor":"문화유산 복원 시스템 로봇","titleEng":"BIND","description":"국내 문화유산 복원 현장은 인력난과 수작업 한계로 복원율이 1%에 불과합니다. BIND는 유물 복원 작업의 효율성과 정확성을 높여 이 문제를 해결하기 위해 개발되었습니다. 레이저 세척, 3D 스캐닝, AI 모델링, 세라믹 프린팅, CNC 가공을 통합해 원본의 질감까지 재현하며, 이를 통해 소중한 문화유산을 안전하게 보존하여 미래 세대에 온전히 전달합니다.","videoId":1127032149},{"members":[82,52],"category":"c0","projectNum":10,"titleKor":"자기주도학습 강화를 위한 학습 독려 로봇","titleEng":"ENDY","description":"공부 도중 휴대전화 사용, 졸음 상황 등 사용자의 학습 상태를 고려하여 바른 학습 태도를 유지하도록 로봇이 재촉하고 시간에 따른 공부 진도를 확인하며 학습 텐션을 유지할 수 있도록 피드백을 한다. 로봇을 통한 사용자의 학습 관찰과 실시간 피드백을 가능케 하여 AI 학습 컴페니언 로봇 개발을 도모하고자 하였다.","videoId":1126889031},{"members":[54],"category":"c0","projectNum":11,"titleKor":"툰챗","titleEng":"TOONCHAT","description":"툰-챗'은 인간관계가 지속될수록 표현이 단조로워지고 단어가 생략되어 가는 온라인 채팅 환경을 만화 같은 그래픽으로 표현하여 풍부하고 즐거운 소통 경험으로 유도하는 서비스입니다. 사용자가 입력한 채팅은 각자 선택한 화풍의 그래픽으로 출력되고, 출력된 서로의 그래픽을 공유하며 새로운 소통 경험을 만듭니다.","videoId":1126711648},{"members":[59],"category":"c0","projectNum":12,"titleKor":"미래형 방범 솔루션 귀갓길 동행 드론","titleEng":"RING GUARDIAN","description":"RING GUARDIAN은 야간 귀가 중 사용자의 머리 위를 따라 이동하며 길을 비추고 주변을 기록하는 방범 드론입니다. 어둠 속에서도 안전한 동행을 제공하며, 엔젤링 형태의 조명으로 심리적 안정감을, 경찰 시스템과 연동되어 신속한 대응과 실질적 보호를 지원합니다.","videoId":1127418304},{"members":[60],"category":"c0","projectNum":13,"titleKor":"마스크 이모지","titleEng":"MASK EMOJI","description":"MASK - EMOJI는 청소년과 20~30대가 SNS 소통 속에서 ‘가면’을 쓰고 진짜 감정을 숨기는 현상에서 착안한 프로젝트입니다. 사용자는 자신만의 ‘가면’을 직접 꾸미며, AI 로봇과 친구처럼 대화하면서 감정을 자연스럽게 표현할 수 있습니다. 또한 방대한 수집 요소를 결합해 감정 표현의 새로운 방식을 제시하는 차별화된 경험을 선사합니다.","videoId":1127190833},{"members":[73,66],"category":"c0","projectNum":14,"titleKor":"위플","titleEng":"WEEPLE","description":"Weeple은 가족, 친구, 동호회 등 우리 그룹이 함께 찍은 사진과 짧은 설명을 입력하면,\\nAI가 그룹의  분위기와 특성을 분석하여 우리만의 보드게임 테마를 만들어주는 서비스입니다.\\n같이 찍은 사진이 게임으로 바뀌고, 우리만의 추억과 개성이 담긴 미션에 도전해볼 수 있습니다.\\n함께 웃고 도전하면서, 우리 그룹만의 스토리를 즐길 수 있는 보드게임 테마를 만들어보세요!","videoId":1127052600},{"members":[68,88],"category":"c0","projectNum":15,"titleKor":"수중 속 골프공 수거로봇","titleEng":"AQUATRIEVE","description":"매년 전 세계 골프장에서 유실되는 1억 개 이상의 골프공은 해양 오염과 미세플라스틱 문제를 야기합니다. 현재는 다이버가 직접 수중에 들어가 회수하지만, 어두운 환경과 공에 맞을 위험이 있습니다. 본 로봇은 자율주행으로 공을 수거하고 스테이션으로 운반해 로스트볼로 재활용하고, 이니셜·특징이 있는 공은 앱을 통해 주인에게 반환합니다.","videoId":1127036871},{"members":[71],"category":"c0","projectNum":16,"titleKor":"뮤즈","titleEng":"MUSE","description":"MUSE는 디자이너가 논문을 이해하고 실무에 바로 활용하도록 돕는 AI 기반 웹서비스입니다. AI가 논문을 분석하여 디자인 브리프, 퍼소나 스토리, 디자인 가이드라인, 관련 자료 추천, 아이디어 생성 도우미의 5가지 실무에 특화된 형태(텍스트 및 시각 자료 결합)로 재구성해 제공합니다. 도출된 인사이트는 프로젝트 폴더에 체계적으로 저장 및 관리할 수 있으며, 직관적인 UI로 효율적인 디자인 작업을 지원합니다.","videoId":1127403683},{"members":[75,81],"category":"c0","projectNum":17,"titleKor":"공항 위험물질 및 마약 탐지 로봇","titleEng":"CO-BOT","description":"마약, 폭발물, 바이러스 등 눈에 보이지 않는 위험을 빠르고 정확하게 탐지해 사고를 예방합니다.다중 센서와 AI 전자코를 이용해 공기 중 분자 변화를 분석하고, 자율주행으로 넓은 공간을 순찰합니다.탐지 정보는 실시간으로 전달되며, 검역, 마약 탐지, 폭발물 탐지 모드를 상황에 맞게 전환할 수 있습니다.이 로봇은 공항 같은 시설을 안전하게 지키는 스마트한 감시 파트너입니다.","videoId":1127049607},{"members":[76],"category":"c0","projectNum":18,"titleKor":"전기차 화재 진압 로봇","titleEng":"E-FIBOT","description":"최근 전기차 시장의 확대와 함께 전기차 화재 또한 사회적 문제로 떠오르고 있다.\\n전기차 화재 진압에서 가장 중요한 것은 신속한 소화이다.\\n\\n하지만 기존 간접 소화 방식은 완전 소화까지 약 3~4시간이 소요되어 피해 확산을 \\n막기 어렵다. 또다른 방식인 직접 소화 방식은 속도는 빠르지만 \\n폭발, 감전과 같은 위험성 때문에 쉽게 쓰기 어렵다.\\n\\n이러한 전기차 화재를 신속하고 안전하게 진압하기 위해 E-FIBOT을 개발하였다.","videoId":1127469972},{"members":[86],"category":"c0","projectNum":19,"titleKor":"해저 미세플라스틱 수거 로봇","titleEng":"Aqua Breeze","description":"Aqua Breeze는 마찰대전 발전소자를 활용한 자가발전 로봇으로 외부 전력 없이도 자율적으로 작동하며 정전기 흡착 원리를 통해 해저에 침적된 미세플라스틱을 친환경적으로 수거하여 기존의 방식으로는 처리하기 어려웠던 문제를 해결하고 이를 통해 해양 생태계와 퇴적 환경을 보호하는 지속가능한 솔루션을 제공합니다.","videoId":"-"},{"members":[87],"category":"c0","projectNum":20,"titleKor":"노블","titleEng":"NOBLE","description":"Noble은 웹소설 집필을 원하는 사용자를 위한 메모 기반 스토리 생성 서비스입니다. 아이디어 메모를 관리하고 선택한 메모를 토대로 다양한 플롯 생성을 제공합니다. 또한 AI 편집 기능을 통해 문장을 다듬고 완성도 있는 웹소설로 발전시킬 수 있습니다. 사용자는 창작 과정의 부담을 줄이고 보다 쉽고 즐겁게 글쓰기를 이어갈 수 있습니다.","videoId":1126680452},{"members":[90],"category":"c0","projectNum":21,"titleKor":"스노모","titleEng":"SNOMO","description":"SNOMO는 겨울철 빈번히 발생하는 비닐하우스 피해를 예방하기 위해서 적설량을 자동 감지해 눈을 제거하는 비닐하우스 전용 제설 로봇입니다. 이를 통해 고령화된 농촌의 인력 소모를 줄이고, 농작물 피해와 복구 비용을 줄일 수 있습니다. 더 나아가 현재뿐만 아니라 미래에 이상 기후로 인하여 더욱 잦고 심각해질 피해에 대응하기 위해서도 필요한 제품입니다.","videoId":1127827337},{"members":[94],"category":"c0","projectNum":22,"titleKor":"초보디자이너들을 위한 실전형 학습 UX/UI 챌린지","titleEng":"RE:CHAL","description":"AI를 활용해 실제 사용자 리뷰를 분석하고, 초보 UX/UI 디자이너가 실무 감각을 기를 수 있는 과제를 자동 생성하는 학습 도구입니다. 데이터 기반의 UX 과제를 통해 사용자는 문제 해결 중심의 사고를 훈련하고, 사용자 경험을 분석하는 능력을 자연스럽게 향상시킬 수 있습니다.","videoId":1127540743},{"members":[99],"category":"c0","projectNum":23,"titleKor":"파미","titleEng":"FARMIE","description":"FARMIE는 농업 인구 감소와 고령화에 대응하여 개발된 스마트 작물보호제 살포 로봇입니다. FARMIE 실시간으로 작물 상태와 병해충을 모니터링하여 최적의 작업 경로를 자동으로 계획/실행합니다. 수집된 데이터 분석을 통해 효과적인 방제 전략을 수립하여 농작업의 효율성, 정밀도 및 효과를 크게 향상시키고 작업자의 부담을 줄이는 것을 목표로 합니다","videoId":1127428419},{"members":[3],"category":"c1","projectNum":24,"titleKor":"심부름 탐험","titleEng":"ERRAND ADVENTURE","description":"어린이의 건강한 성장과정을 위해서는 책임감과 자립심을 기르는 것이 매우 중요합니다. 이때, 심부름이 좋은 효과를 가져다주지만 아이들은 심부름 과정을 귀찮고 지루하게 여기는 경향이 있습니다. 이러한 문제를 해결하기 위해 아이들이 캐릭터와 함께 상호작용하며 놀이처럼 즐길 수 있는 탐험 컨셉의 어린이용 심부름 서비스 제작하였습니다.","videoId":1127852716},{"members":[69,49],"category":"c1","projectNum":25,"titleKor":"모티","titleEng":"MOTI","description":"MOTI는 앞날의 불확실성에 불안을 느끼는 청소년들을 위해 버킷리스트라는 목표를 세우며 보다 현실적으로 꿈에 다가갈 수 있도록 유도하는 청소년 자아실현 가이드 플랫폼입니다. 우리는 사용자의 흥미와 관심사를 바탕으로 새로운 도전과제를 제시하고, 그에 어울리는 리워드를 제시함으로써 청소년들의 끊임없는 탐구심을 이끌어냅니다.","videoId":1127523874},{"members":[6,2],"category":"c2","projectNum":26,"titleKor":"해빗","titleEng":"HAVIT","description":"HAVIT은 건강과 만족 사이에서 자신만의 균형을 찾고자 하는 이들을 위한 스마트 도시락 및 식단 관리 서비스입니다. 급격한 생활 양식의 변화와 기술 발전으로 젊은 세대의 가속 노화가 두드러진 현시점, HAVIT은 즐거움을 더한 지속 가능한 건강 관리, 즉 헬시 플레저를 추구하는 이들에게 개인화된 루틴을 통한 새로운 경험을 제안합니다.","videoId":"1127431236?h=239d5ba621"},{"members":[4,34],"category":"c2","projectNum":27,"titleKor":"3D 필드 성장형 러닝서비스","titleEng":"COAK","description":"COAK은 러닝 기록을 특별한 경험으로 바꾸어 동기부여하는 서비스입니다. \\n사용자가 달린 러닝 루트를 시각화 하고 3D 필드로 생성합니다.\\n같은 루트를 반복해 달릴수록 필드의 자연 요소가 점차 성장합니다. \\n크루와 함께한 기록은 모여 하나의 숲을 이루며, 새로운 방식의 러닝 경험을 통해 지속적인 동기를 제공합니다.","videoId":1127539956},{"members":[45,19],"category":"c2","projectNum":28,"titleKor":"감정을 머물러 바라볼 수 있는 감정 기록 앱","titleEng":"Feeltr","description":"Feeltr는 감각 자극(온도, 밝기, 촉각, 청각)을 기반으로 감정을 비유하고 세부 감정을 선택해 모호한 감정을 인식하도록 돕습니다. 이후 감정이 발생한 상황과 반응을 일기로 정리하고, 개인 맞춤형 케어를 제안합니다. 감정 기록은 감정 카드로 생성되어 달력에 저장되며,  감정 변화 흐름을 직관적으로 확인하고 자기 이해와 정서 회복력을 높일 수 있습니다.","videoId":1127177184},{"members":[29],"category":"c2","projectNum":29,"titleKor":"애니키트","titleEng":"ANIKIT","description":"ANIKIT은 ‘animal’의 ‘ani’와 ‘kit’의 합성어로, 동물처럼 친근하면서 언제 어디서나 사용할 수 있는 의료 키트입니다. 차가운 의료기기의 이미지를 벗어나 아이들에게 따뜻함과 안정감을 전하며, 동물을 모티브로 한 디자인으로 자연스럽게 다가갑니다. 학교나 집 등 어디서든 아이가 스스로 건강을 관리할 수 있도록 돕는 동반자 같은 키트입니다.","videoId":1126266309},{"members":[35],"category":"c2","projectNum":30,"titleKor":"액토","titleEng":"ACTO","description":"ACTO는 식단 제안형 냉장고와 이동형 모듈 냉장고, 두 본체로 구성됩니다.\\n이동형 모듈 냉장고는 부재 중 신선식품을 대신 수령·보관하며,\\n식단 제안형 냉장고는 스마트 워치 태그 기반으로 맞춤형 식단을 제공합니다.\\n두 냉장고의 연동을 통해 ACTO는 사용자의 식습관을 분석하고,\\n건강한 생활 패턴을 관리하는 냉장고입니다.","videoId":1126763958},{"members":[57,58],"category":"c2","projectNum":31,"titleKor":"스마트 비대면 외래진료 의료기","titleEng":"VITALL^NK","description":"VitalL^nk는 의료 사각지대에 놓인 노인 환자들을 대상으로, 병원 방문 없이도 주요 건강 검진을 스스로 수행할 수 있도록 돕는 의료기기입니다. 단순한 검사 기능과 원격 진료 연결을 제공합니다. 기본적인 체온 검사는 물론, 혈당과 혈압, 심전도 측정, 손목 골밀도 검사, 초음파 검사를 통해 노인성 질환의 주요 지표도 빠르게 확인할 수 있습니다.","videoId":1126436227},{"members":[61],"category":"c2","projectNum":32,"titleKor":"소형 반려견 전용 AED 내장 산책 리드줄","titleEng":"DOG AED LEASH","description":"반려견과 함께 걷는 시간은 언제나 즐겁지만 갑작스러운 위험이 찾아올\\n수도 있습니다. 특히 소형견은 심정지 시 몇 분 안에 대응하지 못하면 큰\\n위험에 놓일 수 있습니다. 이 리드줄은 그런 순간을 대비하여 반려견 전\\n용 AED 기능을 함께 담았습니다. 평소에는 가볍게 사용할 수 있는 리드\\n줄이지만, 필요할 때는 구조 도구가 됩니다.","videoId":1127407103},{"members":[91],"category":"c2","projectNum":33,"titleKor":"메디메이트","titleEng":"MEDIMATE","description":"고령화와 의학 발전으로 현대인들은 의약품을 손쉽게 접하게 되었지만, 그만큼 방치되거나 잘못 폐기되는 의약품 또한 증가하고 있으며, 이들은 수질 오염 및 생태계 교란을 유발하게 됩니다. 따라서 사용자가 약을 안전하게 관리하고 폐기까지 책임질 수 있도록 돕는 서비스, 메디메이트를 제작했습니다. 이는 건강한 생활 습관과 지속 가능한 환경 보호에 기여할 것입니다.","videoId":1127528036},{"members":[10],"category":"c3","projectNum":34,"titleKor":"마리스","titleEng":"MARIS","description":"Maris는 선박 하부에 부착되는 따개비를 효과적으로 제거하기 위해 설계된 자율 주행 수중 로봇입니다. 라틴어로 ‘바다의, 바다를’이라는 뜻을 담은 이름처럼, 해양 환경에서 최적의 성능을 발휘하도록 제작되었습니다. 8개의 고성능 프로펠러가 탑재되어 수중에서도 안정적이고 자유로운 기동이 가능하며, 정밀한 제어를 통해 선박 하부 구역을 빈틈없이 관리할 수 있습니다. 또한 따개비 제거 장치에는 스크래퍼와 브러시가 각각 모듈화되어 있어, 스크래퍼의 날이 무뎌지거나 브러시가 손상될 경우 손쉽게 교체할 수 있습니다. 이를 통해 유지보수가 간단하고, 장기간 안정적인 성능을 보장하며, 효율적인 선체 관리로 연료 절감과 친환경 운항을 돕는 혁신적인 솔루션입니다.","videoId":1127467906},{"members":[64,20],"category":"c3","projectNum":35,"titleKor":"ESG 부산 - 스테이션","titleEng":"ESG BUSAN - STATION","description":"ESG 부산'은 부산 주요 관광지에 설치된 ESG 체험 플랫폼으로, 투명 OLED 패널, 업사이클링 키링 자판기, 플로깅 도구 대여 부스로 구성됩니다. 관광객들은 도시를 탐험하는 동안 쓰레기를 줍기 위한 집게를 대여하고, 상징적인 업사이클링 키링을 받을 수 있습니다. 이는 관광과 지속가능성의 접점을 제시하는 새로운 유형의 체험형 공공시설물입니다.","videoId":1127729155},{"members":[22],"category":"c3","projectNum":36,"titleKor":"씬킷","titleEng":"SYN:KET","description":"SYN:KET은 신디사이저, 샘플러, 비트메이커를 하나로 담은 휴대용 그루브 박스입니다.\\n사용자는 8개의 터치패드와 원형 인터페이스를 통해 리듬을 손끝으로 느끼고 조형하며,\\n음악을 ‘만드는 행위’ 에서 ‘소리를 다루는 경험’ 으로 확장된 새로운 창작의 감각을 얻게 됩니다.","videoId":1127471421},{"members":[25],"category":"c3","projectNum":37,"titleKor":"페이스:디","titleEng":"FACE:D","description":"FACE:D는 iPhone의 Face ID와 ARKit52 기술을 활용하여 사용자의 표정을 실시간으로 인식하고, 52개의 BlendShape 데이터를 기반으로 감정을 분석한다. 분석된 감정은 Unity로 제작된 상담 시뮬레이션 콘텐츠에 반영되어, 사용자의 표정에 따라 내담자의 감정 수치가 변화한다. 감정 데이터 기반의 새로운 인터랙티브 경험을 제공한다.","videoId":1127322837},{"members":[27],"category":"c3","projectNum":38,"titleKor":"모온","titleEng":"MO-ON","description":"‘모으다’와 ‘ON’의 MO-ON(모온)은 멀티모달 AI의 강력한 생성 능력을 하나의 웨어러블에 담아 현실과 가상을 넘나들며 자유롭고 직관적인 창작 경험을 제공합니다. 이로써 개개인의 창의성과 개성을 존중하는 창작자 중심의 궁극적인 AI 글래스로 완성됩니다.","videoId":1127476055},{"members":[48,51],"category":"c3","projectNum":39,"titleKor":"AI 기반 모의 인터뷰 서비스","titleEng":"PRETALK","description":"PRETALK은 인터뷰 진행자가 더 나은 사용자 경험(UX)과 깊이 있는 인사이트를 도출할 수 있도록 돕는 인터뷰 연습 서비스입니다.\\n가상의 퍼소나와 실전처럼 인터뷰를 연습하면서 질문 설계, 흐름 관리, 응답 분석까지 체계적으로 준비할 수 있으며, 실제 상황에 가까운 시뮬레이션을 통해 인터뷰 역량을 강화할 수 있습니다.","videoId":1126830637},{"members":[53],"category":"c3","projectNum":40,"titleKor":"투미","titleEng":"TO.ME","description":"to.me는 사용자의 감정과 목소리를 기반으로 스스로에게 피드백을 제공하는 일정 관리 서비스입니다.\\nAI가 사용자의 음성과 대화 스타일을 학습해, 일정 전 나의 목소리로 맞춤형 알림을 전달함으로써\\n정서적 몰입과 자기동기화를 돕는 새로운 자기조절 경험을 제공합니다.","videoId":1127548024},{"members":[67],"category":"c3","projectNum":41,"titleKor":"스트릭스","titleEng":"STRIX","description":"야간에 발생하는 조난사고는 제한된 장비와 시야 때문에 구조 시간이 지연되고, 구조대원과 조난당한 등산객 모두에게 큰 위험으로 이어집니다. 이러한 문제를 해결하기 위해 개발된 스마트 AR 헬멧 STRIX는 실시간 정보를 제공함으로써 구조대원의 판단을 지원하고, 구조 효율성과 안정성을 동시에 향상시켜 야간 구조 활동의 새로운 가능성을 제시합니다.","videoId":1127434135},{"members":[78],"category":"c3","projectNum":42,"titleKor":"ESG 부산 - 앱","titleEng":"ESG BUSAN - APP","description":"ESG 앱은 관광객이 부산 명소를 즐기며 자연스럽게 환경 활동에 참여할 수 있는 서비스입니다. ESG 스테이션에서 플로깅 도구를 대여해 미션을 수행하고, 완료 시 관광지 키링을 리워드로 받을 수 있습니다. 전 과정은 앱과 연동되어 관광, 환경 활동, 보상까지 간편하게 체험할 수 있으며, 부산의 지속가능한 가치를 전합니다.","videoId":1127754084},{"members":[92],"category":"c3","projectNum":43,"titleKor":"소프티 엔 하디","titleEng":"SOFTY & HARDY","description":"현재 존재하는 VR  콘서트는 시각과 청각에만 의존하여, 관객은 무대와 깊이 교류하지 못하고 단순한 관람에 머무르게 됩니다. 이 문제를 해결하기 위해 촉각을 더한 새로운 인터랙션을 제안합니다. 본 제품인 HARDY & SOFTY 는 무대와 관객을 이어주는 감각적인 다리 역할을 하며, 이를 통해 관객은 단순한 관람자가 아닌 참여자가 됩니다.","videoId":1127445758},{"members":[95],"category":"c3","projectNum":44,"titleKor":"포잉!","titleEng":"POING!","description":"POING!은 반려동물의 생체 신호와 행동 데이터를 기반으로, 홈캠 공간 속에서 살아 있는 듯한 디지털 반려동물을 구현합니다. 반려동물의 실제 데이터를 바탕으로 특정 상황의 행동을 재현합니다. 사용자는 반려동물의 고유한 특성과 행동 데이터를 '디지털 유산'으로 보존하여, 고유한 행동들을 생생하게 다시 경험할 수 있습니다.","videoId":1127520805},{"members":[32,0],"category":"c4","projectNum":45,"titleKor":"소-다방","titleEng":"SO-DABANG","description":"내 손 안의 작은 다방, 소-다방. 어플리케이션 속 DJ와 소통하며 음악을 감상해보세요. 그 시절 다방처럼 DJ에게 원하는 노래를 신청할 수 있습니다. 블루투스 스피커와 함께 사용하여 더 특별한 경험을 만끽하세요.","videoId":1127750387},{"members":[7],"category":"c4","projectNum":46,"titleKor":"집쿡타임","titleEng":"JipCook Time","description":"‘집쿡타임’은 집에 있는 식재료를 기반으로 맞춤형 레시피를 추천하는 서비스입니다. 사용자는 카메라 인식이나 직접 입력으로 식재료를 등록하고, 유통기한 관리도 가능합니다. 이후 조리 시간·맛·요리 종류 등 필터를 통해 원하는 조건의 레시피를 탐색할 수 있으며, GPT API를 활용한 AI가 재료에 맞춘 레시피를 자동 추천합니다. 추천된 레시피는 수정·공유가 가능해 사용자만의 커스텀 레시피로 확장됩니다.","videoId":1127762035},{"members":[11],"category":"c4","projectNum":47,"titleKor":"아쿠아링크","titleEng":"AQUALINK","description":"기존의 제습기는 실내 습도를 조절해 쾌적한 환경을 조성하지만, 이 과정에서 수집된 물은 대부분 활용하지 못한 채 버려집니다. Aqualink는 물을 버리지 않고, 재사용 가능한 자원으로 전환하여 식물 재배에 활용하는 순환형 시스템을 제안합니다. 이를 통해 자원의 활용도를 높이며 환경적 가치와 실용성을 동시에 구현합니다.","videoId":1126379564},{"members":[12],"category":"c4","projectNum":48,"titleKor":"센소","titleEng":"SENSO","description":"SEnSO는 확장현실(XR) 콘텐츠를 체험할 수 있도록 설계된 몰입형 다감각 스피커입니다. XR 환경 속 공연 콘텐츠와 연동되어 단순한 사운드 출력이 아닌, 자동 리프트, 조명 연출, 실제 바람 분사 등 다양한 감각 자극을 통합 제공합니다. 사용자는 콘텐츠 속 위치와 관계없이, 조명과 바람을 통해 몰입의 중심에 있는 듯한 경험을 할 수 있습니다.","videoId":1127519416},{"members":[13],"category":"c4","projectNum":49,"titleKor":"재료 교체로 레시피를 바꾸는 요리 플랫폼","titleEng":"REMIK","description":"레믹은 레시피를 바꿀 수 있는 요리 동영상 플랫폼입니다. 알레르기• 종교• 채식주의 • 개인 선호 등 다양한 이유로 특정 식재료를 먹지 못하는 인구가 증가하고 있습니다. 이를 바탕으로, 레믹은 재료를 변경하여 레시피를 새롭게 재생성합니다. 이 과정에서 사용자는 요리를 더욱 다양하고 창의적으로 접근 할 수 있습니다.","videoId":1127828070},{"members":[15],"category":"c4","projectNum":50,"titleKor":"감성 기반 소비 기록 서비스","titleEng":"LEAF NOTE","description":"Leaf Note는 소비를 단순한 수치가 아닌 나뭇잎과 캐릭터라는 감성적 요소로 표현하는 새로운 형태의 가계부입니다. 매일의 소비가 입력될 때마다 하나의 나뭇잎으로 시각화되어 차곡차곡 쌓이고, 항목별 소비는 개성 있는 캐릭터로 나타나 사용자가 친근하게 자신의 소비 패턴을 이해하도록 돕습니다. 숫자 중심의 기록이 아닌 시각적 변화를 통해, 소비에 담긴 감정과 태도를 자연스럽게 인식하게 합니다.","videoId":"1128686899"},{"members":[17],"category":"c4","projectNum":51,"titleKor":"테트링","titleEng":"TETLINK","description":"테트링은 쌓지 않는 정보 아카이브 서비스입니다. 기존 서비스가 정보를 보관하는 데 목적을 두었다면, 테트링은 이후 정보를 소비하는 것에 초점을 맞춥니다. 사용자가 저장한 정보를 블록형 게임의 블록처럼 시각화해 효과적인 소비를 유도하고, 그 과정에서 사용자는 아카이브를 비워내는 새로운 경험을 즐길 수 있습니다.","videoId":1126373064},{"members":[31],"category":"c4","projectNum":52,"titleKor":"클러버스","titleEng":"CLUB EARTH","description":"클러버스는 패션 업사이클링 스타터를 위해 소장 중인 의류로 새활용을 할 수 있도록 돕는 Up It Yourself! KIT와 온라인 서비스를 제공합니다. 실패에 대한 부담 없이 초보자도 쉽게 제작할 수 있는 도구와 도안, 튜토리얼 영상, 온라인 매뉴얼 등 다양한 가이드를 통해 업사이클링의 장벽을 낮추고, 지속 가능한 패션 문화를 함께 만들어가고자 합니다.","videoId":1127302808},{"members":[38,85],"category":"c4","projectNum":53,"titleKor":"공동체 생활에서의 물 절약 시스템","titleEng":"AQUA-SAVE","description":"AQUA-SAVE'는 일상 속 과도한 물 소비 문제를 해결하기 위해 개발된 스마트 절수 시스템입니다. 수전 디스플레이를 통해 실시간 물 사용량, 온도, 사용시간을 확인할 수 있으며, 애플리케이션을 통해 개인 및 공동체별 데이터를 분석하고 절수 미션을 제공합니다. 미션 달성 시 리워드가 제공되며, 이는 공동체의 효율적인 물 사용 습관 형성에 기여합니다.","videoId":1127099717},{"members":[40],"category":"c4","projectNum":54,"titleKor":"한번쯤 망해봐도 괜찮은 인생 게임","titleEng":"내가 뭘 잘못했는데요?","description":"사람은 자신이 하고 싶은 것을 할 때 가장 빛난다.\\n그러나 현실은 빠른 속도와 정해진 답을 끊임없이 요구합니다. 많은 사람들이 중요한 진로와 직업의 갈림길 앞에서 깊은 혼란을 겪습니다. 본 프로젝트는 그러한 상황에서 다양한 선택을 시뮬레이션할 수 있게 하여 각자의 리듬과 가능성을 온전히 존중하고자 하는 의도에서 만들어졌습니다.","videoId":"-"},{"members":[44],"category":"c4","projectNum":55,"titleKor":"사용자 경험 기반 디지털 아카이브","titleEng":"Ever Archive","description":"현대인의 디지털 라이프 속에서 기억은 쉽게 저장되지만, 그 안에 담긴 감정은 점차 흐려집니다. \\nEver Archive는 이런 감정의 흔적을 몰입감 있는 경험으로 보존할 수 있도록 설계되었습니다. \\n기억은 사라지는 것이 아니라, 형태를 바꿔 마음에 남는 것, 디자인을 통해 그 형태를 만들어주고 싶었습니다.\\n사람의 마음과 감정을 다루는 디자인을 지향합니다.","videoId":1127045458},{"members":[46],"category":"c4","projectNum":56,"titleKor":"모듈형 침구 UV 살균 로봇 청소기","titleEng":"NOVIX","description":"NOVIX는 침구 UV 살균 로봇 청소기로 모듈형 로봇기기와 본체 로봇청소기 2개로 이루어져있습니다. 본체는 가정집의 먼지청소를 먼저 이행하고 사용자가 침구위에서 모듈형 로봇을 작동시키면 상단의 360°센서 기반으로 자율 주행하며 침구 위를 이동하면서 보이지 않는 진드기와 유해 입자를 효과적으로 제거하는 UV 살균이 가능합니다.","videoId":1126569569},{"members":[55,65],"category":"c4","projectNum":57,"titleKor":"모담이","titleEng":"MODAMI","description":"시니어를 위한 AI 자서전 서비스 '모담이'는 AI 아바타 '담이'와의 대화를 통해 당신의 삶을 기록합니다. \\n키보드 없이 터치와 음성으로 세상에 단 하나뿐인 나만의 특별한 자서전이 완성됩니다.","videoId":1127565627},{"members":[56],"category":"c4","projectNum":58,"titleKor":"소설 창작을 위한 협업 커뮤니티 플랫폼","titleEng":"CREWE","description":"Crewe는 하나의 아이디어에서 여러 사람이 의견을 더해 이야기를 완성하는 협업형 창작 플랫폼입니다. 하나의 소재에서 다양한 전개가 만들어지며, 함께 이야기를 확장해가는 집단 창작의 즐거움을 제공합니다.","videoId":1127471110},{"members":[63],"category":"c4","projectNum":59,"titleKor":"유아 정서 발달 자연 친화 자동화 화분","titleEng":"REONA","description":"REONA는 자연의 흐름을 형상화한 클라우드 형태의 스마트 화분으로 디지털 디스플레이와 직관적인 형태 변화를 통해 날씨와 급수 필요성을 전달합니다. 하단부의 물을 워터펌프를 통해 끌어올려 상단 구름 부분에서 빗방울처럼 떨어뜨림으로써 식물이 자라는 자연의 환경을 실내에서 경험할 수 있도록 재현한 제품입니다.","videoId":"-"},{"members":[77],"category":"c4","projectNum":60,"titleKor":"노트모","titleEng":"NOTEMO","description":"notemo'는 사용자가 겪고 있는 정신적인 어려움을 완화할 수 있는 감정 습관 어플입니다. 하루에 한 번 짧고 직관적인 질문에 대답하며 감정에 솔직해지는 법을 배우고, '마음 기록장'과 '마음 정원' 을 통해 이를 쉽고 재미있게 확인할 수 있습니다. 또한, '마음 살펴보기' 를 통해 특정 심리 영역을 탐색할 수 있습니다.","videoId":1127447000},{"members":[83],"category":"c4","projectNum":61,"titleKor":"리:미스트","titleEng":"RE:MIST","description":"RE:MIST는 사용자가 향을 원하는 대로 조합해 사용하는 모듈형 충전식 스프레이다. 재사용 가능한 구조와 진공 시스템으로 플라스틱과 유해 가스 사용을 줄이며, 분사량·향·기능을 세밀하게 조절할 수 있어 개인 맞춤형 경험을 제공한다. 환경 보호, 경제성, 창의적 사용성을 모두 갖춘 지속 가능한 라이프스타일 제품이다.","videoId":1127188689},{"members":[84],"category":"c4","projectNum":62,"titleKor":"경험소비 기반 햄버거 커스터마이징 어플","titleEng":"BURGIT","description":"Z세대는 전세계 인구의 25%를 차지하며 역대 최대 규모의 소비력을 갖춘 세대가 될 것으로 예측됩니다. 이들에게 중요한 것은 직접 개입한 생산형 경험과 자기표현을 할 수 있는 콘텐츠입니다. 해당 어플은 사용자가 인터랙티브 요소를 통해 햄버거 재료를 직접 선택하고 제조할 수 있도록 하는 경험 소비 기반 햄버거 커스터마이징 어플리케이션입니다.","videoId":1126413536},{"members":[89],"category":"c4","projectNum":63,"titleKor":"엔코","titleEng":"ENCO","description":"밀키트의 복잡한 조리 과정을 디제잉의 감각적인 퍼포먼스로 재해석합니다. DJ 컨트롤러에서 영감을 받은 다이얼과 레버, 행동을 유도하는 LED 인디케이터는 요리의 순서와 흐름을 직관적으로 안내합니다. 이를 통해 요리 과정을 하나의 퍼포먼스처럼 완성하는 새로운 경험을 제공하며 라이프스타일을 제안합니다.","videoId":1128232388},{"members":[93],"category":"c4","projectNum":64,"titleKor":"씨너리","titleEng":"SEENERY","description":"SEENERY는 '나(seen)'와 '여행의 풍경(scenery)'을 연결해 1인 여행자에게 새로운 기록 방식을 제안하는 휴대용 자동 촬영 드론입니다. 사용자는 제품을 비틀어 Boomerang, Sky, Surround, Follow 중 원하는 4가지 모드를 선택 후 공중에 띄웁니다. 제품은 피사체 및 환경 인식, 구도, 색감, 플래시 자동 조절로 최적의 촬영을 제공합니다. 듀얼 프로펠러와 고효율 배터리로 안정적이며, 작고 가벼워 휴대가 용이합니다. 단순한 '띄우는 동작'만으로 나와 풍경을 함께 담아 특별한 순간을 완성합니다.","videoId":"1127472732"},{"members":[97],"category":"c4","projectNum":65,"titleKor":"감정 시각화 표현 치료 장치","titleEng":"VI-MO","description":"‘VI-mo’는 사용자로 하여금 자신의 감정을 외부 시점에서 시각적으로 인식하게 하여 감정의 정리와 자기 이해를 돕는 제품입니다. 감정을 말로 꺼내고 물리적 형태로 마주하는 경험은 심리적 위안과 정서적 회복을 유도하며, 감정을 억누르기보다 자연스럽게 흐르게 하는 감정 순환의 장치를 제공합니다.","videoId":"1128446266"},{"members":[5,47],"category":"c5","projectNum":66,"titleKor":"폴라리스","titleEng":"POLARIS","description":"극한 환경에서도 자유롭게 이동하며 탐사 목적에 따라 모듈을 교체할 수 있는 극지 탐사 모빌리티로, 드론과 연동해 지형과 위험 요소를 실시간으로 스캔하고 다양한 임무를 효율적이고 안전하게 수행하며, 기후 변화 분석, 자원 탐사, 생태 조사, 야간 관측과 긴급 구조까지 동시에 수행하며 극한 환경 탐사의 새로운 기준과 가능성을 보여준다.","videoId":1128433794},{"members":[8,70],"category":"c5","projectNum":67,"titleKor":"파빅스","titleEng":"PAVIX","description":"드론이 포트홀을 스캔하면 무인 모빌리티가 자동으로 이동해 보수를 수행하는 시스템입니다. TBM 공법을 적용해 절삭·청소·접착을 일체화했으며, 프리캐스트 임플란트 공법을 통해 경화 시간을 단축해 신속한 도로 개방이 가능합니다. 다관절 다리로 정밀한 작업이 가능하며, 드론이 프리캐스트를 카트리지 형태로 전달합니다.","videoId":1127509590},{"members":[79,9],"category":"c5","projectNum":68,"titleKor":"감정기반 맞춤형 활동 추천 모빌리티 서비스","titleEng":"FLOV","description":"FLOV는 인공지능이 개인의 성향과 상황을 분석해 맞춤형 정보를 제공하는 시대에 주목합니다. 기술의 고도화로 사회적 유대가 약화되고 감정적 교류가 줄어든 미래 환경에서 해소되지 못한 감정을 지닌 개인에게 감정에 적합한 활동과 장소를 추천하고, 그 목적에 최적화된 모듈형 모빌리티를 통해 새로운 감정 해소 경험을 제공합니다.","videoId":1127816861},{"members":[14],"category":"c5","projectNum":69,"titleKor":"지구와 우주를 연결하는 차세대 모빌리티 시스템","titleEng":"KAIROS","description":"KAIROS'는 지구와 우주 간 연속된 이동 경험을 제공하는 차세대 모빌리티 시스템입니다. 출발지부터 목적지까지 단일 공간에서 이동하며 새로운 라이프스타일을 누릴 수 있습니다. 직선과 평면 중심의 클래식카 감성과 미래지향적 조형성의 조화를 이루며 기능성과 감성을 동시에 아우르는 차세대 모빌리티입니다.","videoId":1128367659},{"members":[21,26],"category":"c5","projectNum":70,"titleKor":"리프텐","titleEng":"RIFETEN","description":"도로 지면의 손상을 사전에 탐지하고, 발생될 포트홀을 예방하기 위해 개발된 자율주행 모빌리티입니다. 지면의 하부 약화를 감지하면 정지하여 드릴을 이용해 지면을 천공하고, 우레탄 폼과 레진을 주입하여 내부를 메우고 표면을 마감합니다. 드릴, 우레탄 및 레진 노즐은 하부에 배치되어 x축 트랙을 따라 정밀하게 이동하여 보수 대상 지점을 정교하게 작업합니다.","videoId":1127475114},{"members":[23,33],"category":"c5","projectNum":71,"titleKor":"레이온","titleEng":"RAYON","description":"RAYON은 복잡한 지하철 역사 환경에서 역무원이 신속하게 이동해 응급 상황에 1차적인 처치를 수행할 수 있도록 설계된 1인용 응급 구조 모빌리티입니다. 구급대가 도착하기 전까지의 결정적인 시간을 단축하기 위해 좁은 통로와 다층 구조에서도 안정적인 주행이 가능하며, 응급 장비 수납 모듈과 직관적인 조작 시스템을 갖추고 있습니다.","videoId":1127232925},{"members":[37],"category":"c5","projectNum":72,"titleKor":"휠로콥터","titleEng":"WHEELOCPCOTER","description":"WHEELCOPTER는 육상 주행과 비행이 모두 가능한 하이브리드 모빌리티로, 접근이 어려운 지역에서도 구조와 탐색을 수행할 수 있습니다. 바퀴를 프로펠러로 전환하는 구조로 효율성과 경제성을 높였으며, 재난 대응·군사 작전·보급 등 다양한 임무에 활용 가능합니다.","videoId":1127451104},{"members":[39],"category":"c5","projectNum":73,"titleKor":"포레스트","titleEng":"FOR:EST","description":"PBV 플랫폼을 기반으로 시니어의 이동과 휴식을 고려한 맞춤형 인테리어 솔루션을 제안한다. 라운지 체어형 무중력 카시트와 모듈 교체 구조를 통해 반려견용·테이블용 옵션을 제공하며, 회전 플레이트로 이동·정차·산책 시나리오에 맞춰 공간을 전환해 액티브 시니어의 안전하고 편안한 아웃도어 라이프를 지원한다.","videoId":1126626799},{"members":[62],"category":"c5","projectNum":74,"titleKor":"하우릭스","titleEng":"HAULIX","description":"HAULIX는 도시와 농촌 모두를 아우르는 차세대 모듈형 전동 바이크입니다. 이동성과 적재 능력을 동시에 갖춘 이 제품은, 후방에 다양한 모듈을 탈부착하여 사용자 맞춤형 구성이 가능합니다. 또한 GPS 기록, 직관적인 디스플레이, 접이식 안장 등 고령자를 배려한 세심한 기능도 탑재되어 있어 일상 이동의 부담을 줄여줍니다.","videoId":1127497630},{"members":[74,98],"category":"c5","projectNum":75,"titleKor":"퀀타엑스","titleEng":"QUANTA-X","description":"연기 감지 센서가 화재를 탐지하면 드론이 자동으로 출동해 화재 지점에 소화볼을 투하하고 초기 진화를 수행합니다. 조기 감지와 신속한 대응을 통해 산불 확산을 방지하며 산림 자원과 생태계를 보호하고, 공공기관과 민간 분야로의 활용 가능성이 높습니다.","videoId":1127242698},{"members":[80],"category":"c5","projectNum":76,"titleKor":"투위","titleEng":"TOWEE","description":"TOWEE는 트랜스윙 시스템을 탑재한 eVTOL 차량 견인 모빌리티입니다.","videoId":1127231053}]`),Y1=40;function q_(n){if(!n)return n;const e="/";if(/^https?:\/\//i.test(n))return n;const i=n.replace(/^\.\.\//,"").replace(/^\//,"");return e+i}const CR={c0:"A",c1:"E",c2:"H",c3:"I",c4:"L",c5:"M"},Q1=["전체","산업디자인공학","미디어디자인공학"],jR={산업디자인공학:0,미디어디자인공학:1},X1=n=>n==="IND"||n===0||n==="0"?0:n==="MED"||n===1||n==="1"?1:n,jp=lg,kl=IR,DR=S.div`
  position: relative; background: #fff;
`,NR=S.div`
  padding-left: ${Y1}px; padding-right: ${Y1}px; display: flex; flex-direction: column;
  @media (max-width: 640px) {
    padding-left: 16px;
    padding-right: 16px;  
 }
`;function MR({children:n}){return y.jsx(DR,{children:y.jsx(NR,{children:n})})}const OR=S.div`
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
`,kR=S.div`
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
`,VR=S.div`
  text-decoration: none; cursor: pointer;
`,PR=S.div`position: relative;`;function UR({people:n}){const e=Fh();return y.jsx(OR,{children:n.map((i,a)=>{const o=i.id??i.studentId??`${i.nameKor}-${a}`,u=typeof i.projectNum=="number"&&i.category,d=u?i.projectNum+1:null,p=u?`${CR[i.category]||"A"}${String(d).padStart(3,"0")}`:null,m=y.jsx(rg,{nameKor:i.nameKor,nameEng:i.nameEng,role:i.role,sns:i.sns||"-",eMail:i.eMail,imgSrc:q_(i.imgUrl),imgAlt:`${i.nameKor} profile`},o);return u?y.jsx(VR,{role:"link",tabIndex:0,onClick:()=>e(`/work/${p}`),onKeyDown:g=>{(g.key==="Enter"||g.key===" ")&&e(`/work/${p}`)},"aria-label":`${i.nameKor} 작품 보기 (${p})`,children:m},`link-${o}`):m})})}function LR(){const[n,e]=be.useState(!1),[i,a]=be.useState(Q1[0]),o=be.useMemo(()=>{const p=new Map;return(tu||[]).forEach(m=>{(m.members||[]).forEach(g=>{p.has(g)||p.set(g,m)})}),p},[]);be.useEffect(()=>{a(n?kl[0]?.id||"":Q1[0])},[n]);const u=be.useMemo(()=>{if(!n){if(i==="전체")return jp;let m=jR[i];return m===void 0&&(m=X1(i)),jp.filter(g=>X1(g.department)===m)}const p=kl.some(m=>m.id===i)?i:kl.find(m=>m.nameKor===i)?.id||"";return jp.filter(m=>m.professorId===p).map(m=>{let g=o.get(m.num);g||(g=(tu||[]).find(E=>E.category===m.category&&E.projectNum===m.projectNum)||null);const v=g?`/projects/${g.projectNum}/thumb.jpg`:"/thumbnailExample.png";return{...m,imgUrl:v}})},[i,n,o]),d=be.useMemo(()=>n&&(kl.find(m=>m.id===i)||kl.find(m=>m.nameKor===i))||null,[n,i]);return y.jsxs(PR,{children:[y.jsx(kR,{children:"Peoples"}),y.jsx(H_,{type:"people",onCategoryChange:a,onToggleChange:e}),y.jsxs(MR,{children:[n&&d&&y.jsx(og,{nameKor:d.nameKor,rank:d.rank||"교수",eMail:d.email,education:d.education,field:d.field,imgSrc:q_(d.imgUrl),imgAlt:`${d.nameKor} profile`}),y.jsx(UR,{people:u})]})]})}const W1=S.div`
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
`,$R=S.div`
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
`,BR=S.img`
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
`,FR=S.div`
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
`,KR=S.div`
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
`,HR=S.p`
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
`,qR=S.p`
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
`,GR=S.div`
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
`,YR=S.div`
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
`,QR=S.p`
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
`,XR=S.div`
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
`,WR=S.img`
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
`,ZR=S.div`
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
`,ev=S.div`
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
`,tv=S.p`
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
`;function nv(n){return typeof n=="number"&&n>999?"999+":n}function ug({titleKor:n,titleEng:e,nameKor:i,view:a,like:o,href:u,src:d,profileImgs:p,docId:m}){const g=typeof o=="number"?o:0,v=typeof a=="number"?a:0,E=V=>{const B=V.currentTarget.querySelector(".card-hover");B&&(B.style.opacity=1)},T=V=>{const B=V.currentTarget.querySelector(".card-hover");B&&(B.style.opacity=0)},A="/",M=/^https?:\/\//i.test(u),k=y.jsxs(y.Fragment,{children:[y.jsx(zR,{children:y.jsxs($R,{onMouseEnter:E,onMouseLeave:T,children:[y.jsx(FR,{className:"card-hover",children:y.jsxs(KR,{children:[y.jsx(qR,{children:n}),y.jsx(HR,{children:e})]})}),y.jsx(BR,{src:d,alt:"Project"})]})}),y.jsxs(GR,{children:[y.jsxs(YR,{children:[y.jsx(XR,{children:p.map((V,B)=>y.jsx(WR,{src:V,alt:`Profile${B+1}`,$z:3-B,$ml:B>0},B))}),y.jsx(QR,{children:i})]}),y.jsxs(ZR,{children:[y.jsxs(J1,{children:[y.jsx(ev,{src:`${A}icons/likeIcon.svg`}),y.jsx(tv,{children:nv(g)||0})]}),y.jsxs(J1,{children:[y.jsx(ev,{src:`${A}icons/viewIcon.svg`}),y.jsx(tv,{children:nv(v)||0})]})]})]})]});return M?y.jsx(W1,{children:y.jsx(Z1,{as:"a",href:u,style:{textDecoration:"none"},children:k})}):y.jsx(W1,{children:y.jsx(Z1,{as:es,to:u.startsWith("/")?u:`/${u}`,style:{textDecoration:"none"},children:k})})}ug.propTypes={titleKor:J.string.isRequired,titleEng:J.string.isRequired,nameKor:J.string.isRequired,view:J.number,like:J.number,src:J.string.isRequired,href:J.string.isRequired,profileImgs:J.arrayOf(J.string).isRequired,docId:J.oneOfType([J.string,J.number]),collection:J.string};ug.defaultProps={titleKor:"프로젝트 제목",titleEng:"Project Title",nameKor:"Author Name",view:0,like:0,collection:"works"};const JR=()=>{};var iv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_=function(n){const e=[];let i=0;for(let a=0;a<n.length;a++){let o=n.charCodeAt(a);o<128?e[i++]=o:o<2048?(e[i++]=o>>6|192,e[i++]=o&63|128):(o&64512)===55296&&a+1<n.length&&(n.charCodeAt(a+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++a)&1023),e[i++]=o>>18|240,e[i++]=o>>12&63|128,e[i++]=o>>6&63|128,e[i++]=o&63|128):(e[i++]=o>>12|224,e[i++]=o>>6&63|128,e[i++]=o&63|128)}return e},e6=function(n){const e=[];let i=0,a=0;for(;i<n.length;){const o=n[i++];if(o<128)e[a++]=String.fromCharCode(o);else if(o>191&&o<224){const u=n[i++];e[a++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=n[i++],d=n[i++],p=n[i++],m=((o&7)<<18|(u&63)<<12|(d&63)<<6|p&63)-65536;e[a++]=String.fromCharCode(55296+(m>>10)),e[a++]=String.fromCharCode(56320+(m&1023))}else{const u=n[i++],d=n[i++];e[a++]=String.fromCharCode((o&15)<<12|(u&63)<<6|d&63)}}return e.join("")},Y_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let o=0;o<n.length;o+=3){const u=n[o],d=o+1<n.length,p=d?n[o+1]:0,m=o+2<n.length,g=m?n[o+2]:0,v=u>>2,E=(u&3)<<4|p>>4;let T=(p&15)<<2|g>>6,A=g&63;m||(A=64,d||(T=64)),a.push(i[v],i[E],i[T],i[A])}return a.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(G_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):e6(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let o=0;o<n.length;){const u=i[n.charAt(o++)],p=o<n.length?i[n.charAt(o)]:0;++o;const g=o<n.length?i[n.charAt(o)]:64;++o;const E=o<n.length?i[n.charAt(o)]:64;if(++o,u==null||p==null||g==null||E==null)throw new t6;const T=u<<2|p>>4;if(a.push(T),g!==64){const A=p<<4&240|g>>2;if(a.push(A),E!==64){const M=g<<6&192|E;a.push(M)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class t6 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const n6=function(n){const e=G_(n);return Y_.encodeByteArray(e,!0)},Rh=function(n){return n6(n).replace(/\./g,"")},i6=function(n){try{return Y_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function r6(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const a6=()=>r6().__FIREBASE_DEFAULTS__,s6=()=>{if(typeof process>"u"||typeof iv>"u")return;const n=iv.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},o6=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&i6(n[1]);return e&&JSON.parse(e)},cg=()=>{try{return JR()||a6()||s6()||o6()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},l6=n=>cg()?.emulatorHosts?.[n],u6=n=>{const e=l6(n);if(!e)return;const i=e.lastIndexOf(":");if(i<=0||i+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const a=parseInt(e.substring(i+1),10);return e[0]==="["?[e.substring(1,i-1),a]:[e.substring(0,i),a]},Q_=()=>cg()?.config;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c6{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}wrapCallback(e){return(i,a)=>{i?this.reject(i):this.resolve(a),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(i):e(i,a))}}}/**
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
 */function hg(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function h6(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function d6(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},a=e||"demo-project",o=n.iat||0,u=n.sub||n.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d={iss:`https://securetoken.google.com/${a}`,aud:a,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Rh(JSON.stringify(i)),Rh(JSON.stringify(d)),""].join(".")}const Hl={};function f6(){const n={prod:[],emulator:[]};for(const e of Object.keys(Hl))Hl[e]?n.emulator.push(e):n.prod.push(e);return n}function p6(n){let e=document.getElementById(n),i=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),i=!0),{created:i,element:e}}let rv=!1;function m6(n,e){if(typeof window>"u"||typeof document>"u"||!hg(window.location.host)||Hl[n]===e||Hl[n]||rv)return;Hl[n]=e;function i(T){return`__firebase__banner__${T}`}const a="__firebase__banner",u=f6().prod.length>0;function d(){const T=document.getElementById(a);T&&T.remove()}function p(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function m(T,A){T.setAttribute("width","24"),T.setAttribute("id",A),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function g(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{rv=!0,d()},T}function v(T,A){T.setAttribute("id",A),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function E(){const T=p6(a),A=i("text"),M=document.getElementById(A)||document.createElement("span"),k=i("learnmore"),V=document.getElementById(k)||document.createElement("a"),B=i("preprendIcon"),q=document.getElementById(B)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const Z=T.element;p(Z),v(V,k);const le=g();m(q,B),Z.append(q,M,V,le),document.body.appendChild(Z)}u?(M.innerText="Preview backend disconnected.",q.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function g6(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function y6(){const n=cg()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function x6(){return!y6()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function v6(){try{return typeof indexedDB=="object"}catch{return!1}}function _6(){return new Promise((n,e)=>{try{let i=!0;const a="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(a);o.onsuccess=()=>{o.result.close(),i||self.indexedDB.deleteDatabase(a),n(!0)},o.onupgradeneeded=()=>{i=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(i){e(i)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w6="FirebaseError";class Eo extends Error{constructor(e,i,a){super(i),this.code=e,this.customData=a,this.name=w6,Object.setPrototypeOf(this,Eo.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,X_.prototype.create)}}class X_{constructor(e,i,a){this.service=e,this.serviceName=i,this.errors=a}create(e,...i){const a=i[0]||{},o=`${this.service}/${e}`,u=this.errors[e],d=u?E6(u,a):"Error",p=`${this.serviceName}: ${d} (${o}).`;return new Eo(o,p,a)}}function E6(n,e){return n.replace(b6,(i,a)=>{const o=e[a];return o!=null?String(o):`<${a}?>`})}const b6=/\{\$([^}]+)}/g;function Ih(n,e){if(n===e)return!0;const i=Object.keys(n),a=Object.keys(e);for(const o of i){if(!a.includes(o))return!1;const u=n[o],d=e[o];if(av(u)&&av(d)){if(!Ih(u,d))return!1}else if(u!==d)return!1}for(const o of a)if(!i.includes(o))return!1;return!0}function av(n){return n!==null&&typeof n=="object"}/**
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
 */function ar(n){return n&&n._delegate?n._delegate:n}class nu{constructor(e,i,a){this.name=e,this.instanceFactory=i,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class T6{constructor(e,i){this.name=e,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const i=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(i)){const a=new c6;if(this.instancesDeferred.set(i,a),this.isInitialized(i)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:i});o&&a.resolve(o)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(e){const i=this.normalizeInstanceIdentifier(e?.identifier),a=e?.optional??!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(a)return null;throw o}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(A6(e))try{this.getOrInitializeService({instanceIdentifier:Ha})}catch{}for(const[i,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);try{const u=this.getOrInitializeService({instanceIdentifier:o});a.resolve(u)}catch{}}}}clearInstance(e=Ha){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...e.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ha){return this.instances.has(e)}getOptions(e=Ha){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:i={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:a,options:i});for(const[u,d]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(u);a===p&&d.resolve(o)}return o}onInit(e,i){const a=this.normalizeInstanceIdentifier(i),o=this.onInitCallbacks.get(a)??new Set;o.add(e),this.onInitCallbacks.set(a,o);const u=this.instances.get(a);return u&&e(u,a),()=>{o.delete(e)}}invokeOnInitCallbacks(e,i){const a=this.onInitCallbacks.get(i);if(a)for(const o of a)try{o(e,i)}catch{}}getOrInitializeService({instanceIdentifier:e,options:i={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:S6(e),options:i}),this.instances.set(e,a),this.instancesOptions.set(e,i),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch{}return a||null}normalizeInstanceIdentifier(e=Ha){return this.component?this.component.multipleInstances?e:Ha:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function S6(n){return n===Ha?void 0:n}function A6(n){return n.instantiationMode==="EAGER"}/**
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
 */class R6{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const i=this.getProvider(e.name);if(i.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);i.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const i=new T6(e,this);return this.providers.set(e,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Be||(Be={}));const I6={debug:Be.DEBUG,verbose:Be.VERBOSE,info:Be.INFO,warn:Be.WARN,error:Be.ERROR,silent:Be.SILENT},C6=Be.INFO,j6={[Be.DEBUG]:"log",[Be.VERBOSE]:"log",[Be.INFO]:"info",[Be.WARN]:"warn",[Be.ERROR]:"error"},D6=(n,e,...i)=>{if(e<n.logLevel)return;const a=new Date().toISOString(),o=j6[e];if(o)console[o](`[${a}]  ${n.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class W_{constructor(e){this.name=e,this._logLevel=C6,this._logHandler=D6,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?I6[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Be.DEBUG,...e),this._logHandler(this,Be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Be.VERBOSE,...e),this._logHandler(this,Be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Be.INFO,...e),this._logHandler(this,Be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Be.WARN,...e),this._logHandler(this,Be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Be.ERROR,...e),this._logHandler(this,Be.ERROR,...e)}}const N6=(n,e)=>e.some(i=>n instanceof i);let sv,ov;function M6(){return sv||(sv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function O6(){return ov||(ov=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Z_=new WeakMap,fm=new WeakMap,J_=new WeakMap,Dp=new WeakMap,dg=new WeakMap;function k6(n){const e=new Promise((i,a)=>{const o=()=>{n.removeEventListener("success",u),n.removeEventListener("error",d)},u=()=>{i(Xr(n.result)),o()},d=()=>{a(n.error),o()};n.addEventListener("success",u),n.addEventListener("error",d)});return e.then(i=>{i instanceof IDBCursor&&Z_.set(i,n)}).catch(()=>{}),dg.set(e,n),e}function V6(n){if(fm.has(n))return;const e=new Promise((i,a)=>{const o=()=>{n.removeEventListener("complete",u),n.removeEventListener("error",d),n.removeEventListener("abort",d)},u=()=>{i(),o()},d=()=>{a(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",u),n.addEventListener("error",d),n.addEventListener("abort",d)});fm.set(n,e)}let pm={get(n,e,i){if(n instanceof IDBTransaction){if(e==="done")return fm.get(n);if(e==="objectStoreNames")return n.objectStoreNames||J_.get(n);if(e==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return Xr(n[e])},set(n,e,i){return n[e]=i,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function P6(n){pm=n(pm)}function U6(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...i){const a=n.call(Np(this),e,...i);return J_.set(a,e.sort?e.sort():[e]),Xr(a)}:O6().includes(n)?function(...e){return n.apply(Np(this),e),Xr(Z_.get(this))}:function(...e){return Xr(n.apply(Np(this),e))}}function L6(n){return typeof n=="function"?U6(n):(n instanceof IDBTransaction&&V6(n),N6(n,M6())?new Proxy(n,pm):n)}function Xr(n){if(n instanceof IDBRequest)return k6(n);if(Dp.has(n))return Dp.get(n);const e=L6(n);return e!==n&&(Dp.set(n,e),dg.set(e,n)),e}const Np=n=>dg.get(n);function z6(n,e,{blocked:i,upgrade:a,blocking:o,terminated:u}={}){const d=indexedDB.open(n,e),p=Xr(d);return a&&d.addEventListener("upgradeneeded",m=>{a(Xr(d.result),m.oldVersion,m.newVersion,Xr(d.transaction),m)}),i&&d.addEventListener("blocked",m=>i(m.oldVersion,m.newVersion,m)),p.then(m=>{u&&m.addEventListener("close",()=>u()),o&&m.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),p}const $6=["get","getKey","getAll","getAllKeys","count"],B6=["put","add","delete","clear"],Mp=new Map;function lv(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Mp.get(e))return Mp.get(e);const i=e.replace(/FromIndex$/,""),a=e!==i,o=B6.includes(i);if(!(i in(a?IDBIndex:IDBObjectStore).prototype)||!(o||$6.includes(i)))return;const u=async function(d,...p){const m=this.transaction(d,o?"readwrite":"readonly");let g=m.store;return a&&(g=g.index(p.shift())),(await Promise.all([g[i](...p),o&&m.done]))[0]};return Mp.set(e,u),u}P6(n=>({...n,get:(e,i,a)=>lv(e,i)||n.get(e,i,a),has:(e,i)=>!!lv(e,i)||n.has(e,i)}));/**
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
 */class F6{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(K6(i)){const a=i.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(i=>i).join(" ")}}function K6(n){return n.getComponent()?.type==="VERSION"}const mm="@firebase/app",uv="0.14.4";/**
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
 */const sr=new W_("@firebase/app"),H6="@firebase/app-compat",q6="@firebase/analytics-compat",G6="@firebase/analytics",Y6="@firebase/app-check-compat",Q6="@firebase/app-check",X6="@firebase/auth",W6="@firebase/auth-compat",Z6="@firebase/database",J6="@firebase/data-connect",eI="@firebase/database-compat",tI="@firebase/functions",nI="@firebase/functions-compat",iI="@firebase/installations",rI="@firebase/installations-compat",aI="@firebase/messaging",sI="@firebase/messaging-compat",oI="@firebase/performance",lI="@firebase/performance-compat",uI="@firebase/remote-config",cI="@firebase/remote-config-compat",hI="@firebase/storage",dI="@firebase/storage-compat",fI="@firebase/firestore",pI="@firebase/ai",mI="@firebase/firestore-compat",gI="firebase",yI="12.4.0";/**
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
 */const gm="[DEFAULT]",xI={[mm]:"fire-core",[H6]:"fire-core-compat",[G6]:"fire-analytics",[q6]:"fire-analytics-compat",[Q6]:"fire-app-check",[Y6]:"fire-app-check-compat",[X6]:"fire-auth",[W6]:"fire-auth-compat",[Z6]:"fire-rtdb",[J6]:"fire-data-connect",[eI]:"fire-rtdb-compat",[tI]:"fire-fn",[nI]:"fire-fn-compat",[iI]:"fire-iid",[rI]:"fire-iid-compat",[aI]:"fire-fcm",[sI]:"fire-fcm-compat",[oI]:"fire-perf",[lI]:"fire-perf-compat",[uI]:"fire-rc",[cI]:"fire-rc-compat",[hI]:"fire-gcs",[dI]:"fire-gcs-compat",[fI]:"fire-fst",[mI]:"fire-fst-compat",[pI]:"fire-vertex","fire-js":"fire-js",[gI]:"fire-js-all"};/**
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
 */const iu=new Map,vI=new Map,ym=new Map;function cv(n,e){try{n.container.addComponent(e)}catch(i){sr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,i)}}function Ch(n){const e=n.name;if(ym.has(e))return sr.debug(`There were multiple attempts to register component ${e}.`),!1;ym.set(e,n);for(const i of iu.values())cv(i,n);for(const i of vI.values())cv(i,n);return!0}function _I(n,e){const i=n.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),n.container.getProvider(e)}function wI(n){return n==null?!1:n.settings!==void 0}/**
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
 */const EI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wr=new X_("app","Firebase",EI);/**
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
 */class bI{constructor(e,i,a){this._isDeleted=!1,this._options={...e},this._config={...i},this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new nu("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wr.create("app-deleted",{appName:this._name})}}/**
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
 */const TI=yI;function fg(n,e={}){let i=n;typeof e!="object"&&(e={name:e});const a={name:gm,automaticDataCollectionEnabled:!0,...e},o=a.name;if(typeof o!="string"||!o)throw Wr.create("bad-app-name",{appName:String(o)});if(i||(i=Q_()),!i)throw Wr.create("no-options");const u=iu.get(o);if(u){if(Ih(i,u.options)&&Ih(a,u.config))return u;throw Wr.create("duplicate-app",{appName:o})}const d=new R6(o);for(const m of ym.values())d.addComponent(m);const p=new bI(i,a,d);return iu.set(o,p),p}function SI(n=gm){const e=iu.get(n);if(!e&&n===gm&&Q_())return fg();if(!e)throw Wr.create("no-app",{appName:n});return e}function hv(){return Array.from(iu.values())}function to(n,e,i){let a=xI[n]??n;i&&(a+=`-${i}`);const o=a.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const d=[`Unable to register library "${a}" with version "${e}":`];o&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),o&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),sr.warn(d.join(" "));return}Ch(new nu(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
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
 */const AI="firebase-heartbeat-database",RI=1,ru="firebase-heartbeat-store";let Op=null;function ew(){return Op||(Op=z6(AI,RI,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ru)}catch(i){console.warn(i)}}}}).catch(n=>{throw Wr.create("idb-open",{originalErrorMessage:n.message})})),Op}async function II(n){try{const i=(await ew()).transaction(ru),a=await i.objectStore(ru).get(tw(n));return await i.done,a}catch(e){if(e instanceof Eo)sr.warn(e.message);else{const i=Wr.create("idb-get",{originalErrorMessage:e?.message});sr.warn(i.message)}}}async function dv(n,e){try{const a=(await ew()).transaction(ru,"readwrite");await a.objectStore(ru).put(e,tw(n)),await a.done}catch(i){if(i instanceof Eo)sr.warn(i.message);else{const a=Wr.create("idb-set",{originalErrorMessage:i?.message});sr.warn(a.message)}}}function tw(n){return`${n.name}!${n.options.appId}`}/**
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
 */const CI=1024,jI=30;class DI{constructor(e){this.container=e,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new MI(i),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=fv();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(o=>o.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:i}),this._heartbeatsCache.heartbeats.length>jI){const o=OI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){sr.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=fv(),{heartbeatsToSend:i,unsentEntries:a}=NI(this._heartbeatsCache.heartbeats),o=Rh(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return sr.warn(e),""}}}function fv(){return new Date().toISOString().substring(0,10)}function NI(n,e=CI){const i=[];let a=n.slice();for(const o of n){const u=i.find(d=>d.agent===o.agent);if(u){if(u.dates.push(o.date),pv(i)>e){u.dates.pop();break}}else if(i.push({agent:o.agent,dates:[o.date]}),pv(i)>e){i.pop();break}a=a.slice(1)}return{heartbeatsToSend:i,unsentEntries:a}}class MI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return v6()?_6().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await II(this.app);return i?.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const a=await this.read();return dv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const a=await this.read();return dv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function pv(n){return Rh(JSON.stringify({version:2,heartbeats:n})).length}function OI(n){if(n.length===0)return-1;let e=0,i=n[0].date;for(let a=1;a<n.length;a++)n[a].date<i&&(i=n[a].date,e=a);return e}/**
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
 */function kI(n){Ch(new nu("platform-logger",e=>new F6(e),"PRIVATE")),Ch(new nu("heartbeat",e=>new DI(e),"PRIVATE")),to(mm,uv,n),to(mm,uv,"esm2020"),to("fire-js","")}kI("");var VI="firebase",PI="12.4.0";/**
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
 */to(VI,PI,"app");var mv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zr,nw;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,C){function j(){}j.prototype=C.prototype,I.F=C.prototype,I.prototype=new j,I.prototype.constructor=I,I.D=function(O,U,$){for(var D=Array(arguments.length-2),st=2;st<arguments.length;st++)D[st-2]=arguments[st];return C.prototype[U].apply(O,D)}}function i(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(a,i),a.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(I,C,j){j||(j=0);const O=Array(16);if(typeof C=="string")for(var U=0;U<16;++U)O[U]=C.charCodeAt(j++)|C.charCodeAt(j++)<<8|C.charCodeAt(j++)<<16|C.charCodeAt(j++)<<24;else for(U=0;U<16;++U)O[U]=C[j++]|C[j++]<<8|C[j++]<<16|C[j++]<<24;C=I.g[0],j=I.g[1],U=I.g[2];let $=I.g[3],D;D=C+($^j&(U^$))+O[0]+3614090360&4294967295,C=j+(D<<7&4294967295|D>>>25),D=$+(U^C&(j^U))+O[1]+3905402710&4294967295,$=C+(D<<12&4294967295|D>>>20),D=U+(j^$&(C^j))+O[2]+606105819&4294967295,U=$+(D<<17&4294967295|D>>>15),D=j+(C^U&($^C))+O[3]+3250441966&4294967295,j=U+(D<<22&4294967295|D>>>10),D=C+($^j&(U^$))+O[4]+4118548399&4294967295,C=j+(D<<7&4294967295|D>>>25),D=$+(U^C&(j^U))+O[5]+1200080426&4294967295,$=C+(D<<12&4294967295|D>>>20),D=U+(j^$&(C^j))+O[6]+2821735955&4294967295,U=$+(D<<17&4294967295|D>>>15),D=j+(C^U&($^C))+O[7]+4249261313&4294967295,j=U+(D<<22&4294967295|D>>>10),D=C+($^j&(U^$))+O[8]+1770035416&4294967295,C=j+(D<<7&4294967295|D>>>25),D=$+(U^C&(j^U))+O[9]+2336552879&4294967295,$=C+(D<<12&4294967295|D>>>20),D=U+(j^$&(C^j))+O[10]+4294925233&4294967295,U=$+(D<<17&4294967295|D>>>15),D=j+(C^U&($^C))+O[11]+2304563134&4294967295,j=U+(D<<22&4294967295|D>>>10),D=C+($^j&(U^$))+O[12]+1804603682&4294967295,C=j+(D<<7&4294967295|D>>>25),D=$+(U^C&(j^U))+O[13]+4254626195&4294967295,$=C+(D<<12&4294967295|D>>>20),D=U+(j^$&(C^j))+O[14]+2792965006&4294967295,U=$+(D<<17&4294967295|D>>>15),D=j+(C^U&($^C))+O[15]+1236535329&4294967295,j=U+(D<<22&4294967295|D>>>10),D=C+(U^$&(j^U))+O[1]+4129170786&4294967295,C=j+(D<<5&4294967295|D>>>27),D=$+(j^U&(C^j))+O[6]+3225465664&4294967295,$=C+(D<<9&4294967295|D>>>23),D=U+(C^j&($^C))+O[11]+643717713&4294967295,U=$+(D<<14&4294967295|D>>>18),D=j+($^C&(U^$))+O[0]+3921069994&4294967295,j=U+(D<<20&4294967295|D>>>12),D=C+(U^$&(j^U))+O[5]+3593408605&4294967295,C=j+(D<<5&4294967295|D>>>27),D=$+(j^U&(C^j))+O[10]+38016083&4294967295,$=C+(D<<9&4294967295|D>>>23),D=U+(C^j&($^C))+O[15]+3634488961&4294967295,U=$+(D<<14&4294967295|D>>>18),D=j+($^C&(U^$))+O[4]+3889429448&4294967295,j=U+(D<<20&4294967295|D>>>12),D=C+(U^$&(j^U))+O[9]+568446438&4294967295,C=j+(D<<5&4294967295|D>>>27),D=$+(j^U&(C^j))+O[14]+3275163606&4294967295,$=C+(D<<9&4294967295|D>>>23),D=U+(C^j&($^C))+O[3]+4107603335&4294967295,U=$+(D<<14&4294967295|D>>>18),D=j+($^C&(U^$))+O[8]+1163531501&4294967295,j=U+(D<<20&4294967295|D>>>12),D=C+(U^$&(j^U))+O[13]+2850285829&4294967295,C=j+(D<<5&4294967295|D>>>27),D=$+(j^U&(C^j))+O[2]+4243563512&4294967295,$=C+(D<<9&4294967295|D>>>23),D=U+(C^j&($^C))+O[7]+1735328473&4294967295,U=$+(D<<14&4294967295|D>>>18),D=j+($^C&(U^$))+O[12]+2368359562&4294967295,j=U+(D<<20&4294967295|D>>>12),D=C+(j^U^$)+O[5]+4294588738&4294967295,C=j+(D<<4&4294967295|D>>>28),D=$+(C^j^U)+O[8]+2272392833&4294967295,$=C+(D<<11&4294967295|D>>>21),D=U+($^C^j)+O[11]+1839030562&4294967295,U=$+(D<<16&4294967295|D>>>16),D=j+(U^$^C)+O[14]+4259657740&4294967295,j=U+(D<<23&4294967295|D>>>9),D=C+(j^U^$)+O[1]+2763975236&4294967295,C=j+(D<<4&4294967295|D>>>28),D=$+(C^j^U)+O[4]+1272893353&4294967295,$=C+(D<<11&4294967295|D>>>21),D=U+($^C^j)+O[7]+4139469664&4294967295,U=$+(D<<16&4294967295|D>>>16),D=j+(U^$^C)+O[10]+3200236656&4294967295,j=U+(D<<23&4294967295|D>>>9),D=C+(j^U^$)+O[13]+681279174&4294967295,C=j+(D<<4&4294967295|D>>>28),D=$+(C^j^U)+O[0]+3936430074&4294967295,$=C+(D<<11&4294967295|D>>>21),D=U+($^C^j)+O[3]+3572445317&4294967295,U=$+(D<<16&4294967295|D>>>16),D=j+(U^$^C)+O[6]+76029189&4294967295,j=U+(D<<23&4294967295|D>>>9),D=C+(j^U^$)+O[9]+3654602809&4294967295,C=j+(D<<4&4294967295|D>>>28),D=$+(C^j^U)+O[12]+3873151461&4294967295,$=C+(D<<11&4294967295|D>>>21),D=U+($^C^j)+O[15]+530742520&4294967295,U=$+(D<<16&4294967295|D>>>16),D=j+(U^$^C)+O[2]+3299628645&4294967295,j=U+(D<<23&4294967295|D>>>9),D=C+(U^(j|~$))+O[0]+4096336452&4294967295,C=j+(D<<6&4294967295|D>>>26),D=$+(j^(C|~U))+O[7]+1126891415&4294967295,$=C+(D<<10&4294967295|D>>>22),D=U+(C^($|~j))+O[14]+2878612391&4294967295,U=$+(D<<15&4294967295|D>>>17),D=j+($^(U|~C))+O[5]+4237533241&4294967295,j=U+(D<<21&4294967295|D>>>11),D=C+(U^(j|~$))+O[12]+1700485571&4294967295,C=j+(D<<6&4294967295|D>>>26),D=$+(j^(C|~U))+O[3]+2399980690&4294967295,$=C+(D<<10&4294967295|D>>>22),D=U+(C^($|~j))+O[10]+4293915773&4294967295,U=$+(D<<15&4294967295|D>>>17),D=j+($^(U|~C))+O[1]+2240044497&4294967295,j=U+(D<<21&4294967295|D>>>11),D=C+(U^(j|~$))+O[8]+1873313359&4294967295,C=j+(D<<6&4294967295|D>>>26),D=$+(j^(C|~U))+O[15]+4264355552&4294967295,$=C+(D<<10&4294967295|D>>>22),D=U+(C^($|~j))+O[6]+2734768916&4294967295,U=$+(D<<15&4294967295|D>>>17),D=j+($^(U|~C))+O[13]+1309151649&4294967295,j=U+(D<<21&4294967295|D>>>11),D=C+(U^(j|~$))+O[4]+4149444226&4294967295,C=j+(D<<6&4294967295|D>>>26),D=$+(j^(C|~U))+O[11]+3174756917&4294967295,$=C+(D<<10&4294967295|D>>>22),D=U+(C^($|~j))+O[2]+718787259&4294967295,U=$+(D<<15&4294967295|D>>>17),D=j+($^(U|~C))+O[9]+3951481745&4294967295,I.g[0]=I.g[0]+C&4294967295,I.g[1]=I.g[1]+(U+(D<<21&4294967295|D>>>11))&4294967295,I.g[2]=I.g[2]+U&4294967295,I.g[3]=I.g[3]+$&4294967295}a.prototype.v=function(I,C){C===void 0&&(C=I.length);const j=C-this.blockSize,O=this.C;let U=this.h,$=0;for(;$<C;){if(U==0)for(;$<=j;)o(this,I,$),$+=this.blockSize;if(typeof I=="string"){for(;$<C;)if(O[U++]=I.charCodeAt($++),U==this.blockSize){o(this,O),U=0;break}}else for(;$<C;)if(O[U++]=I[$++],U==this.blockSize){o(this,O),U=0;break}}this.h=U,this.o+=C},a.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var C=1;C<I.length-8;++C)I[C]=0;C=this.o*8;for(var j=I.length-8;j<I.length;++j)I[j]=C&255,C/=256;for(this.v(I),I=Array(16),C=0,j=0;j<4;++j)for(let O=0;O<32;O+=8)I[C++]=this.g[j]>>>O&255;return I};function u(I,C){var j=p;return Object.prototype.hasOwnProperty.call(j,I)?j[I]:j[I]=C(I)}function d(I,C){this.h=C;const j=[];let O=!0;for(let U=I.length-1;U>=0;U--){const $=I[U]|0;O&&$==C||(j[U]=$,O=!1)}this.g=j}var p={};function m(I){return-128<=I&&I<128?u(I,function(C){return new d([C|0],C<0?-1:0)}):new d([I|0],I<0?-1:0)}function g(I){if(isNaN(I)||!isFinite(I))return E;if(I<0)return V(g(-I));const C=[];let j=1;for(let O=0;I>=j;O++)C[O]=I/j|0,j*=4294967296;return new d(C,0)}function v(I,C){if(I.length==0)throw Error("number format error: empty string");if(C=C||10,C<2||36<C)throw Error("radix out of range: "+C);if(I.charAt(0)=="-")return V(v(I.substring(1),C));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const j=g(Math.pow(C,8));let O=E;for(let $=0;$<I.length;$+=8){var U=Math.min(8,I.length-$);const D=parseInt(I.substring($,$+U),C);U<8?(U=g(Math.pow(C,U)),O=O.j(U).add(g(D))):(O=O.j(j),O=O.add(g(D)))}return O}var E=m(0),T=m(1),A=m(16777216);n=d.prototype,n.m=function(){if(k(this))return-V(this).m();let I=0,C=1;for(let j=0;j<this.g.length;j++){const O=this.i(j);I+=(O>=0?O:4294967296+O)*C,C*=4294967296}return I},n.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(M(this))return"0";if(k(this))return"-"+V(this).toString(I);const C=g(Math.pow(I,6));var j=this;let O="";for(;;){const U=le(j,C).g;j=B(j,U.j(C));let $=((j.g.length>0?j.g[0]:j.h)>>>0).toString(I);if(j=U,M(j))return $+O;for(;$.length<6;)$="0"+$;O=$+O}},n.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function M(I){if(I.h!=0)return!1;for(let C=0;C<I.g.length;C++)if(I.g[C]!=0)return!1;return!0}function k(I){return I.h==-1}n.l=function(I){return I=B(this,I),k(I)?-1:M(I)?0:1};function V(I){const C=I.g.length,j=[];for(let O=0;O<C;O++)j[O]=~I.g[O];return new d(j,~I.h).add(T)}n.abs=function(){return k(this)?V(this):this},n.add=function(I){const C=Math.max(this.g.length,I.g.length),j=[];let O=0;for(let U=0;U<=C;U++){let $=O+(this.i(U)&65535)+(I.i(U)&65535),D=($>>>16)+(this.i(U)>>>16)+(I.i(U)>>>16);O=D>>>16,$&=65535,D&=65535,j[U]=D<<16|$}return new d(j,j[j.length-1]&-2147483648?-1:0)};function B(I,C){return I.add(V(C))}n.j=function(I){if(M(this)||M(I))return E;if(k(this))return k(I)?V(this).j(V(I)):V(V(this).j(I));if(k(I))return V(this.j(V(I)));if(this.l(A)<0&&I.l(A)<0)return g(this.m()*I.m());const C=this.g.length+I.g.length,j=[];for(var O=0;O<2*C;O++)j[O]=0;for(O=0;O<this.g.length;O++)for(let U=0;U<I.g.length;U++){const $=this.i(O)>>>16,D=this.i(O)&65535,st=I.i(U)>>>16,Ke=I.i(U)&65535;j[2*O+2*U]+=D*Ke,q(j,2*O+2*U),j[2*O+2*U+1]+=$*Ke,q(j,2*O+2*U+1),j[2*O+2*U+1]+=D*st,q(j,2*O+2*U+1),j[2*O+2*U+2]+=$*st,q(j,2*O+2*U+2)}for(I=0;I<C;I++)j[I]=j[2*I+1]<<16|j[2*I];for(I=C;I<2*C;I++)j[I]=0;return new d(j,0)};function q(I,C){for(;(I[C]&65535)!=I[C];)I[C+1]+=I[C]>>>16,I[C]&=65535,C++}function Z(I,C){this.g=I,this.h=C}function le(I,C){if(M(C))throw Error("division by zero");if(M(I))return new Z(E,E);if(k(I))return C=le(V(I),C),new Z(V(C.g),V(C.h));if(k(C))return C=le(I,V(C)),new Z(V(C.g),C.h);if(I.g.length>30){if(k(I)||k(C))throw Error("slowDivide_ only works with positive integers.");for(var j=T,O=C;O.l(I)<=0;)j=K(j),O=K(O);var U=oe(j,1),$=oe(O,1);for(O=oe(O,2),j=oe(j,2);!M(O);){var D=$.add(O);D.l(I)<=0&&(U=U.add(j),$=D),O=oe(O,1),j=oe(j,1)}return C=B(I,U.j(C)),new Z(U,C)}for(U=E;I.l(C)>=0;){for(j=Math.max(1,Math.floor(I.m()/C.m())),O=Math.ceil(Math.log(j)/Math.LN2),O=O<=48?1:Math.pow(2,O-48),$=g(j),D=$.j(C);k(D)||D.l(I)>0;)j-=O,$=g(j),D=$.j(C);M($)&&($=T),U=U.add($),I=B(I,D)}return new Z(U,I)}n.B=function(I){return le(this,I).h},n.and=function(I){const C=Math.max(this.g.length,I.g.length),j=[];for(let O=0;O<C;O++)j[O]=this.i(O)&I.i(O);return new d(j,this.h&I.h)},n.or=function(I){const C=Math.max(this.g.length,I.g.length),j=[];for(let O=0;O<C;O++)j[O]=this.i(O)|I.i(O);return new d(j,this.h|I.h)},n.xor=function(I){const C=Math.max(this.g.length,I.g.length),j=[];for(let O=0;O<C;O++)j[O]=this.i(O)^I.i(O);return new d(j,this.h^I.h)};function K(I){const C=I.g.length+1,j=[];for(let O=0;O<C;O++)j[O]=I.i(O)<<1|I.i(O-1)>>>31;return new d(j,I.h)}function oe(I,C){const j=C>>5;C%=32;const O=I.g.length-j,U=[];for(let $=0;$<O;$++)U[$]=C>0?I.i($+j)>>>C|I.i($+j+1)<<32-C:I.i($+j);return new d(U,I.h)}a.prototype.digest=a.prototype.A,a.prototype.reset=a.prototype.u,a.prototype.update=a.prototype.v,nw=a,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.B,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=g,d.fromString=v,Zr=d}).apply(typeof mv<"u"?mv:typeof self<"u"?self:typeof window<"u"?window:{});var Xc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var iw,Ll,rw,fh,xm,aw,sw,ow;(function(){var n,e=Object.defineProperty;function i(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xc=="object"&&Xc];for(var x=0;x<c.length;++x){var _=c[x];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var a=i(this);function o(c,x){if(x)e:{var _=a;c=c.split(".");for(var R=0;R<c.length-1;R++){var G=c[R];if(!(G in _))break e;_=_[G]}c=c[c.length-1],R=_[c],x=x(R),x!=R&&x!=null&&e(_,c,{configurable:!0,writable:!0,value:x})}}o("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(c){return c||function(x){var _=[],R;for(R in x)Object.prototype.hasOwnProperty.call(x,R)&&_.push([R,x[R]]);return _}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function p(c){var x=typeof c;return x=="object"&&c!=null||x=="function"}function m(c,x,_){return c.call.apply(c.bind,arguments)}function g(c,x,_){return g=m,g.apply(null,arguments)}function v(c,x){var _=Array.prototype.slice.call(arguments,1);return function(){var R=_.slice();return R.push.apply(R,arguments),c.apply(this,R)}}function E(c,x){function _(){}_.prototype=x.prototype,c.Z=x.prototype,c.prototype=new _,c.prototype.constructor=c,c.Ob=function(R,G,W){for(var ue=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)ue[Re-2]=arguments[Re];return x.prototype[G].apply(R,ue)}}var T=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function A(c){const x=c.length;if(x>0){const _=Array(x);for(let R=0;R<x;R++)_[R]=c[R];return _}return[]}function M(c,x){for(let R=1;R<arguments.length;R++){const G=arguments[R];var _=typeof G;if(_=_!="object"?_:G?Array.isArray(G)?"array":_:"null",_=="array"||_=="object"&&typeof G.length=="number"){_=c.length||0;const W=G.length||0;c.length=_+W;for(let ue=0;ue<W;ue++)c[_+ue]=G[ue]}else c.push(G)}}class k{constructor(x,_){this.i=x,this.j=_,this.h=0,this.g=null}get(){let x;return this.h>0?(this.h--,x=this.g,this.g=x.next,x.next=null):x=this.i(),x}}function V(c){d.setTimeout(()=>{throw c},0)}function B(){var c=I;let x=null;return c.g&&(x=c.g,c.g=c.g.next,c.g||(c.h=null),x.next=null),x}class q{constructor(){this.h=this.g=null}add(x,_){const R=Z.get();R.set(x,_),this.h?this.h.next=R:this.g=R,this.h=R}}var Z=new k(()=>new le,c=>c.reset());class le{constructor(){this.next=this.g=this.h=null}set(x,_){this.h=x,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let K,oe=!1,I=new q,C=()=>{const c=Promise.resolve(void 0);K=()=>{c.then(j)}};function j(){for(var c;c=B();){try{c.h.call(c.g)}catch(_){V(_)}var x=Z;x.j(c),x.h<100&&(x.h++,c.next=x.g,x.g=c)}oe=!1}function O(){this.u=this.u,this.C=this.C}O.prototype.u=!1,O.prototype.dispose=function(){this.u||(this.u=!0,this.N())},O.prototype[Symbol.dispose]=function(){this.dispose()},O.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function U(c,x){this.type=c,this.g=this.target=x,this.defaultPrevented=!1}U.prototype.h=function(){this.defaultPrevented=!0};var $=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,x=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};d.addEventListener("test",_,x),d.removeEventListener("test",_,x)}catch{}return c})();function D(c){return/^[\s\xa0]*$/.test(c)}function st(c,x){U.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,x)}E(st,U),st.prototype.init=function(c,x){const _=this.type=c.type,R=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=x,x=c.relatedTarget,x||(_=="mouseover"?x=c.fromElement:_=="mouseout"&&(x=c.toElement)),this.relatedTarget=x,R?(this.clientX=R.clientX!==void 0?R.clientX:R.pageX,this.clientY=R.clientY!==void 0?R.clientY:R.pageY,this.screenX=R.screenX||0,this.screenY=R.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&st.Z.h.call(this)},st.prototype.h=function(){st.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Ke="closure_listenable_"+(Math.random()*1e6|0),ee=0;function de(c,x,_,R,G){this.listener=c,this.proxy=null,this.src=x,this.type=_,this.capture=!!R,this.ha=G,this.key=++ee,this.da=this.fa=!1}function ye(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Ce(c,x,_){for(const R in c)x.call(_,c[R],R,c)}function P(c,x){for(const _ in c)x.call(void 0,c[_],_,c)}function ae(c){const x={};for(const _ in c)x[_]=c[_];return x}const ce="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function he(c,x){let _,R;for(let G=1;G<arguments.length;G++){R=arguments[G];for(_ in R)c[_]=R[_];for(let W=0;W<ce.length;W++)_=ce[W],Object.prototype.hasOwnProperty.call(R,_)&&(c[_]=R[_])}}function ge(c){this.src=c,this.g={},this.h=0}ge.prototype.add=function(c,x,_,R,G){const W=c.toString();c=this.g[W],c||(c=this.g[W]=[],this.h++);const ue=_e(c,x,R,G);return ue>-1?(x=c[ue],_||(x.fa=!1)):(x=new de(x,this.src,W,!!R,G),x.fa=_,c.push(x)),x};function je(c,x){const _=x.type;if(_ in c.g){var R=c.g[_],G=Array.prototype.indexOf.call(R,x,void 0),W;(W=G>=0)&&Array.prototype.splice.call(R,G,1),W&&(ye(x),c.g[_].length==0&&(delete c.g[_],c.h--))}}function _e(c,x,_,R){for(let G=0;G<c.length;++G){const W=c[G];if(!W.da&&W.listener==x&&W.capture==!!_&&W.ha==R)return G}return-1}var gt="closure_lm_"+(Math.random()*1e6|0),Le={};function Mt(c,x,_,R,G){if(Array.isArray(x)){for(let W=0;W<x.length;W++)Mt(c,x[W],_,R,G);return null}return _=Su(_),c&&c[Ke]?c.J(x,_,p(R)?!!R.capture:!1,G):Ni(c,x,_,!1,R,G)}function Ni(c,x,_,R,G,W){if(!x)throw Error("Invalid event type");const ue=p(G)?!!G.capture:!!G;let Re=Io(c);if(Re||(c[gt]=Re=new ge(c)),_=Re.add(x,_,R,ue,W),_.proxy)return _;if(R=qn(),_.proxy=R,R.src=c,R.listener=_,c.addEventListener)$||(G=ue),G===void 0&&(G=!1),c.addEventListener(x.toString(),R,G);else if(c.attachEvent)c.attachEvent(rs(x.toString()),R);else if(c.addListener&&c.removeListener)c.addListener(R);else throw Error("addEventListener and attachEvent are unavailable.");return _}function qn(){function c(_){return x.call(c.src,c.listener,_)}const x=fd;return c}function ln(c,x,_,R,G){if(Array.isArray(x))for(var W=0;W<x.length;W++)ln(c,x[W],_,R,G);else R=p(R)?!!R.capture:!!R,_=Su(_),c&&c[Ke]?(c=c.i,W=String(x).toString(),W in c.g&&(x=c.g[W],_=_e(x,_,R,G),_>-1&&(ye(x[_]),Array.prototype.splice.call(x,_,1),x.length==0&&(delete c.g[W],c.h--)))):c&&(c=Io(c))&&(x=c.g[x.toString()],c=-1,x&&(c=_e(x,_,R,G)),(_=c>-1?x[c]:null)&&la(_))}function la(c){if(typeof c!="number"&&c&&!c.da){var x=c.src;if(x&&x[Ke])je(x.i,c);else{var _=c.type,R=c.proxy;x.removeEventListener?x.removeEventListener(_,R,c.capture):x.detachEvent?x.detachEvent(rs(_),R):x.addListener&&x.removeListener&&x.removeListener(R),(_=Io(x))?(je(_,c),_.h==0&&(_.src=null,x[gt]=null)):ye(c)}}}function rs(c){return c in Le?Le[c]:Le[c]="on"+c}function fd(c,x){if(c.da)c=!0;else{x=new st(x,this);const _=c.listener,R=c.ha||c.src;c.fa&&la(c),c=_.call(R,x)}return c}function Io(c){return c=c[gt],c instanceof ge?c:null}var pn="__closure_events_fn_"+(Math.random()*1e9>>>0);function Su(c){return typeof c=="function"?c:(c[pn]||(c[pn]=function(x){return c.handleEvent(x)}),c[pn])}function Ot(){O.call(this),this.i=new ge(this),this.M=this,this.G=null}E(Ot,O),Ot.prototype[Ke]=!0,Ot.prototype.removeEventListener=function(c,x,_,R){ln(this,c,x,_,R)};function zt(c,x){var _,R=c.G;if(R)for(_=[];R;R=R.G)_.push(R);if(c=c.M,R=x.type||x,typeof x=="string")x=new U(x,c);else if(x instanceof U)x.target=x.target||c;else{var G=x;x=new U(R,c),he(x,G)}G=!0;let W,ue;if(_)for(ue=_.length-1;ue>=0;ue--)W=x.g=_[ue],G=Mi(W,R,!0,x)&&G;if(W=x.g=c,G=Mi(W,R,!0,x)&&G,G=Mi(W,R,!1,x)&&G,_)for(ue=0;ue<_.length;ue++)W=x.g=_[ue],G=Mi(W,R,!1,x)&&G}Ot.prototype.N=function(){if(Ot.Z.N.call(this),this.i){var c=this.i;for(const x in c.g){const _=c.g[x];for(let R=0;R<_.length;R++)ye(_[R]);delete c.g[x],c.h--}}this.G=null},Ot.prototype.J=function(c,x,_,R){return this.i.add(String(c),x,!1,_,R)},Ot.prototype.K=function(c,x,_,R){return this.i.add(String(c),x,!0,_,R)};function Mi(c,x,_,R){if(x=c.i.g[String(x)],!x)return!0;x=x.concat();let G=!0;for(let W=0;W<x.length;++W){const ue=x[W];if(ue&&!ue.da&&ue.capture==_){const Re=ue.listener,ot=ue.ha||ue.src;ue.fa&&je(c.i,ue),G=Re.call(ot,R)!==!1&&G}}return G&&!R.defaultPrevented}function pd(c,x){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=g(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(x)>2147483647?-1:d.setTimeout(c,x||0)}function Co(c){c.g=pd(()=>{c.g=null,c.i&&(c.i=!1,Co(c))},c.l);const x=c.h;c.h=null,c.m.apply(null,x)}class md extends O{constructor(x,_){super(),this.m=x,this.l=_,this.h=null,this.i=!1,this.g=null}j(x){this.h=arguments,this.g?this.i=!0:Co(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ua(c){O.call(this),this.h=c,this.g={}}E(ua,O);var cr=[];function en(c){Ce(c.g,function(x,_){this.g.hasOwnProperty(_)&&la(x)},c),c.g={}}ua.prototype.N=function(){ua.Z.N.call(this),en(this)},ua.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Dn=d.JSON.stringify,un=d.JSON.parse,gd=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function Au(){}function Ru(){}var oi={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function hr(){U.call(this,"d")}E(hr,U);function Gn(){U.call(this,"c")}E(Gn,U);var Nn={},dr=null;function as(){return dr=dr||new Ot}Nn.Ia="serverreachability";function jo(c){U.call(this,Nn.Ia,c)}E(jo,U);function fr(c){const x=as();zt(x,new jo(x))}Nn.STAT_EVENT="statevent";function ss(c,x){U.call(this,Nn.STAT_EVENT,c),this.stat=x}E(ss,U);function vt(c){const x=as();zt(x,new ss(x,c))}Nn.Ja="timingevent";function Iu(c,x){U.call(this,Nn.Ja,c),this.size=x}E(Iu,U);function pr(c,x){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},x)}function mr(){this.g=!0}mr.prototype.ua=function(){this.g=!1};function Do(c,x,_,R,G,W){c.info(function(){if(c.g)if(W){var ue="",Re=W.split("&");for(let Qe=0;Qe<Re.length;Qe++){var ot=Re[Qe].split("=");if(ot.length>1){const Et=ot[0];ot=ot[1];const wn=Et.split("_");ue=wn.length>=2&&wn[1]=="type"?ue+(Et+"="+ot+"&"):ue+(Et+"=redacted&")}}}else ue=null;else ue=W;return"XMLHTTP REQ ("+R+") [attempt "+G+"]: "+x+`
`+_+`
`+ue})}function No(c,x,_,R,G,W,ue){c.info(function(){return"XMLHTTP RESP ("+R+") [ attempt "+G+"]: "+x+`
`+_+`
`+W+" "+ue})}function Oi(c,x,_,R){c.info(function(){return"XMLHTTP TEXT ("+x+"): "+li(c,_)+(R?" "+R:"")})}function yd(c,x){c.info(function(){return"TIMEOUT: "+x})}mr.prototype.info=function(){};function li(c,x){if(!c.g)return x;if(!x)return null;try{const W=JSON.parse(x);if(W){for(c=0;c<W.length;c++)if(Array.isArray(W[c])){var _=W[c];if(!(_.length<2)){var R=_[1];if(Array.isArray(R)&&!(R.length<1)){var G=R[0];if(G!="noop"&&G!="stop"&&G!="close")for(let ue=1;ue<R.length;ue++)R[ue]=""}}}}return Dn(W)}catch{return x}}var _t={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Gt={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ki;function ca(){}E(ca,Au),ca.prototype.g=function(){return new XMLHttpRequest},ki=new ca;function ha(c){return encodeURIComponent(String(c))}function xd(c){var x=1;c=c.split(":");const _=[];for(;x>0&&c.length;)_.push(c.shift()),x--;return c.length&&_.push(c.join(":")),_}function Yn(c,x,_,R){this.j=c,this.i=x,this.l=_,this.S=R||1,this.V=new ua(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new gr}function gr(){this.i=null,this.g="",this.h=!1}var os={},ui={};function ci(c,x,_){c.M=1,c.A=Pi(ft(x)),c.u=_,c.R=!0,yr(c,null)}function yr(c,x){c.F=Date.now(),da(c),c.B=ft(c.A);var _=c.B,R=c.S;Array.isArray(R)||(R=[String(R)]),Nu(_.i,"t",R),c.C=0,_=c.j.L,c.h=new gr,c.g=ys(c.j,_?x:null,!c.u),c.P>0&&(c.O=new md(g(c.Y,c,c.g),c.P)),x=c.V,_=c.g,R=c.ba;var G="readystatechange";Array.isArray(G)||(G&&(cr[0]=G.toString()),G=cr);for(let W=0;W<G.length;W++){const ue=Mt(_,G[W],R||x.handleEvent,!1,x.h||x);if(!ue)break;x.g[ue.key]=ue}x=c.J?ae(c.J):{},c.u?(c.v||(c.v="POST"),x["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,x)):(c.v="GET",c.g.ea(c.B,c.v,null,x)),fr(),Do(c.i,c.v,c.B,c.l,c.S,c.u)}Yn.prototype.ba=function(c){c=c.target;const x=this.O;x&&tn(c)==3?x.j():this.Y(c)},Yn.prototype.Y=function(c){try{if(c==this.g)e:{const Re=tn(this.g),ot=this.g.ya(),Qe=this.g.ca();if(!(Re<3)&&(Re!=3||this.g&&(this.h.h||this.g.la()||ba(this.g)))){this.K||Re!=4||ot==7||(ot==8||Qe<=0?fr(3):fr(2)),di(this);var x=this.g.ca();this.X=x;var _=xr(this);if(this.o=x==200,No(this.i,this.v,this.B,this.l,this.S,Re,x),this.o){if(this.U&&!this.L){t:{if(this.g){var R,G=this.g;if((R=G.g?G.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(R)){var W=R;break t}}W=null}if(c=W)Oi(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ls(this,c);else{this.o=!1,this.m=3,vt(12),fi(this),fa(this);break e}}if(this.R){c=!0;let Et;for(;!this.K&&this.C<_.length;)if(Et=Cu(this,_),Et==ui){Re==4&&(this.m=4,vt(14),c=!1),Oi(this.i,this.l,null,"[Incomplete Response]");break}else if(Et==os){this.m=4,vt(15),Oi(this.i,this.l,_,"[Invalid Chunk]"),c=!1;break}else Oi(this.i,this.l,Et,null),ls(this,Et);if(wt(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Re!=4||_.length!=0||this.h.h||(this.m=1,vt(16),c=!1),this.o=this.o&&c,!c)Oi(this.i,this.l,_,"[Invalid Chunked Response]"),fi(this),fa(this);else if(_.length>0&&!this.W){this.W=!0;var ue=this.j;ue.g==this&&ue.aa&&!ue.P&&(ue.j.info("Great, no buffering proxy detected. Bytes received: "+_.length),Bo(ue),ue.P=!0,vt(11))}}else Oi(this.i,this.l,_,null),ls(this,_);Re==4&&fi(this),this.o&&!this.K&&(Re==4?Fo(this.j,this):(this.o=!1,da(this)))}else Ta(this.g),x==400&&_.indexOf("Unknown SID")>0?(this.m=3,vt(12)):(this.m=0,vt(13)),fi(this),fa(this)}}}catch{}finally{}};function xr(c){if(!wt(c))return c.g.la();const x=ba(c.g);if(x==="")return"";let _="";const R=x.length,G=tn(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return fi(c),fa(c),"";c.h.i=new d.TextDecoder}for(let W=0;W<R;W++)c.h.h=!0,_+=c.h.i.decode(x[W],{stream:!(G&&W==R-1)});return x.length=0,c.h.g+=_,c.C=0,c.h.g}function wt(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function Cu(c,x){var _=c.C,R=x.indexOf(`
`,_);return R==-1?ui:(_=Number(x.substring(_,R)),isNaN(_)?os:(R+=1,R+_>x.length?ui:(x=x.slice(R,R+_),c.C=R+_,x)))}Yn.prototype.cancel=function(){this.K=!0,fi(this)};function da(c){c.T=Date.now()+c.H,hi(c,c.H)}function hi(c,x){if(c.D!=null)throw Error("WatchDog timer not null");c.D=pr(g(c.aa,c),x)}function di(c){c.D&&(d.clearTimeout(c.D),c.D=null)}Yn.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(yd(this.i,this.B),this.M!=2&&(fr(),vt(17)),fi(this),this.m=2,fa(this)):hi(this,this.T-c)};function fa(c){c.j.I==0||c.K||Fo(c.j,c)}function fi(c){di(c);var x=c.O;x&&typeof x.dispose=="function"&&x.dispose(),c.O=null,en(c.V),c.g&&(x=c.g,c.g=null,x.abort(),x.dispose())}function ls(c,x){try{var _=c.j;if(_.I!=0&&(_.g==c||ga(_.h,c))){if(!c.L&&ga(_.h,c)&&_.I==3){try{var R=_.Ba.g.parse(x)}catch{R=null}if(Array.isArray(R)&&R.length==3){var G=R;if(G[0]==0){e:if(!_.v){if(_.g)if(_.g.F+3e3<c.F)gs(_),pi(_);else break e;$o(_),vt(18)}}else _.xa=G[1],0<_.xa-_.K&&G[2]<37500&&_.F&&_.A==0&&!_.C&&(_.C=pr(g(_.Va,_),6e3));Mn(_.h)<=1&&_.ta&&(_.ta=void 0)}else zi(_,11)}else if((c.L||_.g==c)&&gs(_),!D(x))for(G=_.Ba.g.parse(x),x=0;x<G.length;x++){let Qe=G[x];const Et=Qe[0];if(!(Et<=_.K))if(_.K=Et,Qe=Qe[1],_.I==2)if(Qe[0]=="c"){_.M=Qe[1],_.ba=Qe[2];const wn=Qe[3];wn!=null&&(_.ka=wn,_.j.info("VER="+_.ka));const mi=Qe[4];mi!=null&&(_.za=mi,_.j.info("SVER="+_.za));const Wn=Qe[5];Wn!=null&&typeof Wn=="number"&&Wn>0&&(R=1.5*Wn,_.O=R,_.j.info("backChannelRequestTimeoutMs_="+R)),R=_;const Zn=c.g;if(Zn){const Jn=Zn.g?Zn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Jn){var W=R.h;W.g||Jn.indexOf("spdy")==-1&&Jn.indexOf("quic")==-1&&Jn.indexOf("h2")==-1||(W.j=W.l,W.g=new Set,W.h&&(us(W,W.h),W.h=null))}if(R.G){const Ho=Zn.g?Zn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ho&&(R.wa=Ho,Ze(R.J,R.G,Ho))}}_.I=3,_.l&&_.l.ra(),_.aa&&(_.T=Date.now()-c.F,_.j.info("Handshake RTT: "+_.T+"ms")),R=_;var ue=c;if(R.na=$u(R,R.L?R.ba:null,R.W),ue.L){Vi(R.h,ue);var Re=ue,ot=R.O;ot&&(Re.H=ot),Re.D&&(di(Re),da(Re)),R.g=ue}else Pu(R);_.i.length>0&&Ia(_)}else Qe[0]!="stop"&&Qe[0]!="close"||zi(_,7);else _.I==3&&(Qe[0]=="stop"||Qe[0]=="close"?Qe[0]=="stop"?zi(_,7):Aa(_):Qe[0]!="noop"&&_.l&&_.l.qa(Qe),_.A=0)}}fr(4)}catch{}}var vd=class{constructor(c,x){this.g=c,this.map=x}};function pa(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ma(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Mn(c){return c.h?1:c.g?c.g.size:0}function ga(c,x){return c.h?c.h==x:c.g?c.g.has(x):!1}function us(c,x){c.g?c.g.add(x):c.h=x}function Vi(c,x){c.h&&c.h==x?c.h=null:c.g&&c.g.has(x)&&c.g.delete(x)}pa.prototype.cancel=function(){if(this.i=cs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function cs(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let x=c.i;for(const _ of c.g.values())x=x.concat(_.G);return x}return A(c.i)}var hs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _d(c,x){if(c){c=c.split("&");for(let _=0;_<c.length;_++){const R=c[_].indexOf("=");let G,W=null;R>=0?(G=c[_].substring(0,R),W=c[_].substring(R+1)):G=c[_],x(G,W?decodeURIComponent(W.replace(/\+/g," ")):"")}}}function Qn(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let x;c instanceof Qn?(this.l=c.l,vr(this,c.j),this.o=c.o,this.g=c.g,ya(this,c.u),this.h=c.h,_r(this,Mu(c.i)),this.m=c.m):c&&(x=String(c).match(hs))?(this.l=!1,vr(this,x[1]||"",!0),this.o=xa(x[2]||""),this.g=xa(x[3]||"",!0),ya(this,x[4]),this.h=xa(x[5]||"",!0),_r(this,x[6]||"",!0),this.m=xa(x[7]||"")):(this.l=!1,this.i=new On(null,this.l))}Qn.prototype.toString=function(){const c=[];var x=this.j;x&&c.push($t(x,Oo,!0),":");var _=this.g;return(_||x=="file")&&(c.push("//"),(x=this.o)&&c.push($t(x,Oo,!0),"@"),c.push(ha(_).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.u,_!=null&&c.push(":",String(_))),(_=this.h)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push($t(_,_.charAt(0)=="/"?wr:ko,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",$t(_,Du)),c.join("")},Qn.prototype.resolve=function(c){const x=ft(this);let _=!!c.j;_?vr(x,c.j):_=!!c.o,_?x.o=c.o:_=!!c.g,_?x.g=c.g:_=c.u!=null;var R=c.h;if(_)ya(x,c.u);else if(_=!!c.h){if(R.charAt(0)!="/")if(this.g&&!this.h)R="/"+R;else{var G=x.h.lastIndexOf("/");G!=-1&&(R=x.h.slice(0,G+1)+R)}if(G=R,G==".."||G==".")R="";else if(G.indexOf("./")!=-1||G.indexOf("/.")!=-1){R=G.lastIndexOf("/",0)==0,G=G.split("/");const W=[];for(let ue=0;ue<G.length;){const Re=G[ue++];Re=="."?R&&ue==G.length&&W.push(""):Re==".."?((W.length>1||W.length==1&&W[0]!="")&&W.pop(),R&&ue==G.length&&W.push("")):(W.push(Re),R=!0)}R=W.join("/")}else R=G}return _?x.h=R:_=c.i.toString()!=="",_?_r(x,Mu(c.i)):_=!!c.m,_&&(x.m=c.m),x};function ft(c){return new Qn(c)}function vr(c,x,_){c.j=_?xa(x,!0):x,c.j&&(c.j=c.j.replace(/:$/,""))}function ya(c,x){if(x){if(x=Number(x),isNaN(x)||x<0)throw Error("Bad port number "+x);c.u=x}else c.u=null}function _r(c,x,_){x instanceof On?(c.i=x,Uo(c.i,c.l)):(_||(x=$t(x,ju)),c.i=new On(x,c.l))}function Ze(c,x,_){c.i.set(x,_)}function Pi(c){return Ze(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function xa(c,x){return c?x?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function $t(c,x,_){return typeof c=="string"?(c=encodeURI(c).replace(x,Mo),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Mo(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Oo=/[#\/\?@]/g,ko=/[#\?:]/g,wr=/[#\?]/g,ju=/[#\?@]/g,Du=/#/g;function On(c,x){this.h=this.g=null,this.i=c||null,this.j=!!x}function Ui(c){c.g||(c.g=new Map,c.h=0,c.i&&_d(c.i,function(x,_){c.add(decodeURIComponent(x.replace(/\+/g," ")),_)}))}n=On.prototype,n.add=function(c,x){Ui(this),this.i=null,c=Xn(this,c);let _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(x),this.h+=1,this};function Vo(c,x){Ui(c),x=Xn(c,x),c.g.has(x)&&(c.i=null,c.h-=c.g.get(x).length,c.g.delete(x))}function Po(c,x){return Ui(c),x=Xn(c,x),c.g.has(x)}n.forEach=function(c,x){Ui(this),this.g.forEach(function(_,R){_.forEach(function(G){c.call(x,G,R,this)},this)},this)};function ds(c,x){Ui(c);let _=[];if(typeof x=="string")Po(c,x)&&(_=_.concat(c.g.get(Xn(c,x))));else for(c=Array.from(c.g.values()),x=0;x<c.length;x++)_=_.concat(c[x]);return _}n.set=function(c,x){return Ui(this),this.i=null,c=Xn(this,c),Po(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[x]),this.h+=1,this},n.get=function(c,x){return c?(c=ds(this,c),c.length>0?String(c[0]):x):x};function Nu(c,x,_){Vo(c,x),_.length>0&&(c.i=null,c.g.set(Xn(c,x),A(_)),c.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],x=Array.from(this.g.keys());for(let R=0;R<x.length;R++){var _=x[R];const G=ha(_);_=ds(this,_);for(let W=0;W<_.length;W++){let ue=G;_[W]!==""&&(ue+="="+ha(_[W])),c.push(ue)}}return this.i=c.join("&")};function Mu(c){const x=new On;return x.i=c.i,c.g&&(x.g=new Map(c.g),x.h=c.h),x}function Xn(c,x){return x=String(x),c.j&&(x=x.toLowerCase()),x}function Uo(c,x){x&&!c.j&&(Ui(c),c.i=null,c.g.forEach(function(_,R){const G=R.toLowerCase();R!=G&&(Vo(this,R),Nu(this,G,_))},c)),c.j=x}function Lo(c,x){const _=new mr;if(d.Image){const R=new Image;R.onload=v(cn,_,"TestLoadImage: loaded",!0,x,R),R.onerror=v(cn,_,"TestLoadImage: error",!1,x,R),R.onabort=v(cn,_,"TestLoadImage: abort",!1,x,R),R.ontimeout=v(cn,_,"TestLoadImage: timeout",!1,x,R),d.setTimeout(function(){R.ontimeout&&R.ontimeout()},1e4),R.src=c}else x(!1)}function Er(c,x){const _=new mr,R=new AbortController,G=setTimeout(()=>{R.abort(),cn(_,"TestPingServer: timeout",!1,x)},1e4);fetch(c,{signal:R.signal}).then(W=>{clearTimeout(G),W.ok?cn(_,"TestPingServer: ok",!0,x):cn(_,"TestPingServer: server error",!1,x)}).catch(()=>{clearTimeout(G),cn(_,"TestPingServer: error",!1,x)})}function cn(c,x,_,R,G){try{G&&(G.onload=null,G.onerror=null,G.onabort=null,G.ontimeout=null),R(_)}catch{}}function Ou(){this.g=new gd}function va(c){this.i=c.Sb||null,this.h=c.ab||!1}E(va,Au),va.prototype.g=function(){return new _a(this.i,this.h)};function _a(c,x){Ot.call(this),this.H=c,this.o=x,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}E(_a,Ot),n=_a.prototype,n.open=function(c,x){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=x,this.readyState=1,Li(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const x={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(x.body=c),(this.H||d).fetch(new Request(this.D,x)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,hn(this)),this.readyState=0},n.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Li(this)),this.g&&(this.readyState=3,Li(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;br(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function br(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}n.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var x=c.value?c.value:new Uint8Array(0);(x=this.B.decode(x,{stream:!c.done}))&&(this.response=this.responseText+=x)}c.done?hn(this):Li(this),this.readyState==3&&br(this)}},n.Oa=function(c){this.g&&(this.response=this.responseText=c,hn(this))},n.Na=function(c){this.g&&(this.response=c,hn(this))},n.ga=function(){this.g&&hn(this)};function hn(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Li(c)}n.setRequestHeader=function(c,x){this.A.append(c,x)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],x=this.h.entries();for(var _=x.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=x.next();return c.join(`\r
`)};function Li(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(_a.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Tr(c){let x="";return Ce(c,function(_,R){x+=R,x+=":",x+=_,x+=`\r
`}),x}function kn(c,x,_){e:{for(R in _){var R=!1;break e}R=!0}R||(_=Tr(_),typeof c=="string"?_!=null&&ha(_):Ze(c,x,_))}function it(c){Ot.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}E(it,Ot);var fs=/^https?$/i,ku=["POST","PUT"];n=it.prototype,n.Fa=function(c){this.H=c},n.ea=function(c,x,_,R){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);x=x?x.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ki.g(),this.g.onreadystatechange=T(g(this.Ca,this));try{this.B=!0,this.g.open(x,String(c),!0),this.B=!1}catch(W){wa(this,W);return}if(c=_||"",_=new Map(this.headers),R)if(Object.getPrototypeOf(R)===Object.prototype)for(var G in R)_.set(G,R[G]);else if(typeof R.keys=="function"&&typeof R.get=="function")for(const W of R.keys())_.set(W,R.get(W));else throw Error("Unknown input type for opt_headers: "+String(R));R=Array.from(_.keys()).find(W=>W.toLowerCase()=="content-type"),G=d.FormData&&c instanceof d.FormData,!(Array.prototype.indexOf.call(ku,x,void 0)>=0)||R||G||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[W,ue]of _)this.g.setRequestHeader(W,ue);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(W){wa(this,W)}};function wa(c,x){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=x,c.o=5,Ea(c),kt(c)}function Ea(c){c.A||(c.A=!0,zt(c,"complete"),zt(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,zt(this,"complete"),zt(this,"abort"),kt(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),kt(this,!0)),it.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?zo(this):this.Xa())},n.Xa=function(){zo(this)};function zo(c){if(c.h&&typeof u<"u"){if(c.v&&tn(c)==4)setTimeout(c.Ca.bind(c),0);else if(zt(c,"readystatechange"),tn(c)==4){c.h=!1;try{const W=c.ca();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var x=!0;break e;default:x=!1}var _;if(!(_=x)){var R;if(R=W===0){let ue=String(c.D).match(hs)[1]||null;!ue&&d.self&&d.self.location&&(ue=d.self.location.protocol.slice(0,-1)),R=!fs.test(ue?ue.toLowerCase():"")}_=R}if(_)zt(c,"complete"),zt(c,"success");else{c.o=6;try{var G=tn(c)>2?c.g.statusText:""}catch{G=""}c.l=G+" ["+c.ca()+"]",Ea(c)}}finally{kt(c)}}}}function kt(c,x){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const _=c.g;c.g=null,x||zt(c,"ready");try{_.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function tn(c){return c.g?c.g.readyState:0}n.ca=function(){try{return tn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(c){if(this.g){var x=this.g.responseText;return c&&x.indexOf(c)==0&&(x=x.substring(c.length)),un(x)}};function ba(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Ta(c){const x={};c=(c.g&&tn(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let R=0;R<c.length;R++){if(D(c[R]))continue;var _=xd(c[R]);const G=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const W=x[G]||[];x[G]=W,W.push(_)}P(x,function(R){return R.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Sa(c,x,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||x}function ps(c){this.za=0,this.i=[],this.j=new mr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Sa("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Sa("baseRetryDelayMs",5e3,c),this.Za=Sa("retryDelaySeedMs",1e4,c),this.Ta=Sa("forwardChannelMaxRetries",2,c),this.va=Sa("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new pa(c&&c.concurrentRequestLimit),this.Ba=new Ou,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=ps.prototype,n.ka=8,n.I=1,n.connect=function(c,x,_,R){vt(0),this.W=c,this.H=x||{},_&&R!==void 0&&(this.H.OSID=_,this.H.OAID=R),this.F=this.X,this.J=$u(this,null,this.W),Ia(this)};function Aa(c){if(Ra(c),c.I==3){var x=c.V++,_=ft(c.J);if(Ze(_,"SID",c.M),Ze(_,"RID",x),Ze(_,"TYPE","terminate"),Ca(c,_),x=new Yn(c,c.j,x),x.M=2,x.A=Pi(ft(_)),_=!1,d.navigator&&d.navigator.sendBeacon)try{_=d.navigator.sendBeacon(x.A.toString(),"")}catch{}!_&&d.Image&&(new Image().src=x.A,_=!0),_||(x.g=ys(x.j,null),x.g.ea(x.A)),x.F=Date.now(),da(x)}zu(c)}function pi(c){c.g&&(Bo(c),c.g.cancel(),c.g=null)}function Ra(c){pi(c),c.v&&(d.clearTimeout(c.v),c.v=null),gs(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&d.clearTimeout(c.m),c.m=null)}function Ia(c){if(!ma(c.h)&&!c.m){c.m=!0;var x=c.Ea;K||C(),oe||(K(),oe=!0),I.add(x,c),c.D=0}}function wd(c,x){return Mn(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=x.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=pr(g(c.Ea,c,x),Lu(c,c.D)),c.D++,!0)}n.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const G=new Yn(this,this.j,c);let W=this.o;if(this.U&&(W?(W=ae(W),he(W,this.U)):W=this.U),this.u!==null||this.R||(G.J=W,W=null),this.S)e:{for(var x=0,_=0;_<this.i.length;_++){t:{var R=this.i[_];if("__data__"in R.map&&(R=R.map.__data__,typeof R=="string")){R=R.length;break t}R=void 0}if(R===void 0)break;if(x+=R,x>4096){x=_;break e}if(x===4096||_===this.i.length-1){x=_+1;break e}}x=1e3}else x=1e3;x=ms(this,G,x),_=ft(this.J),Ze(_,"RID",c),Ze(_,"CVER",22),this.G&&Ze(_,"X-HTTP-Session-Id",this.G),Ca(this,_),W&&(this.R?x="headers="+ha(Tr(W))+"&"+x:this.u&&kn(_,this.u,W)),us(this.h,G),this.Ra&&Ze(_,"TYPE","init"),this.S?(Ze(_,"$req",x),Ze(_,"SID","null"),G.U=!0,ci(G,_,null)):ci(G,_,x),this.I=2}}else this.I==3&&(c?Vu(this,c):this.i.length==0||ma(this.h)||Vu(this))};function Vu(c,x){var _;x?_=x.l:_=c.V++;const R=ft(c.J);Ze(R,"SID",c.M),Ze(R,"RID",_),Ze(R,"AID",c.K),Ca(c,R),c.u&&c.o&&kn(R,c.u,c.o),_=new Yn(c,c.j,_,c.D+1),c.u===null&&(_.J=c.o),x&&(c.i=x.G.concat(c.i)),x=ms(c,_,1e3),_.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),us(c.h,_),ci(_,R,x)}function Ca(c,x){c.H&&Ce(c.H,function(_,R){Ze(x,R,_)}),c.l&&Ce({},function(_,R){Ze(x,R,_)})}function ms(c,x,_){_=Math.min(c.i.length,_);const R=c.l?g(c.l.Ka,c.l,c):null;e:{var G=c.i;let Re=-1;for(;;){const ot=["count="+_];Re==-1?_>0?(Re=G[0].g,ot.push("ofs="+Re)):Re=0:ot.push("ofs="+Re);let Qe=!0;for(let Et=0;Et<_;Et++){var W=G[Et].g;const wn=G[Et].map;if(W-=Re,W<0)Re=Math.max(0,G[Et].g-100),Qe=!1;else try{W="req"+W+"_"||"";try{var ue=wn instanceof Map?wn:Object.entries(wn);for(const[mi,Wn]of ue){let Zn=Wn;p(Wn)&&(Zn=Dn(Wn)),ot.push(W+mi+"="+encodeURIComponent(Zn))}}catch(mi){throw ot.push(W+"type="+encodeURIComponent("_badmap")),mi}}catch{R&&R(wn)}}if(Qe){ue=ot.join("&");break e}}ue=void 0}return c=c.i.splice(0,_),x.G=c,ue}function Pu(c){if(!c.g&&!c.v){c.Y=1;var x=c.Da;K||C(),oe||(K(),oe=!0),I.add(x,c),c.A=0}}function $o(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=pr(g(c.Da,c),Lu(c,c.A)),c.A++,!0)}n.Da=function(){if(this.v=null,Uu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=pr(g(this.Wa,this),c)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,vt(10),pi(this),Uu(this))};function Bo(c){c.B!=null&&(d.clearTimeout(c.B),c.B=null)}function Uu(c){c.g=new Yn(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var x=ft(c.na);Ze(x,"RID","rpc"),Ze(x,"SID",c.M),Ze(x,"AID",c.K),Ze(x,"CI",c.F?"0":"1"),!c.F&&c.ia&&Ze(x,"TO",c.ia),Ze(x,"TYPE","xmlhttp"),Ca(c,x),c.u&&c.o&&kn(x,c.u,c.o),c.O&&(c.g.H=c.O);var _=c.g;c=c.ba,_.M=1,_.A=Pi(ft(x)),_.u=null,_.R=!0,yr(_,c)}n.Va=function(){this.C!=null&&(this.C=null,pi(this),$o(this),vt(19))};function gs(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function Fo(c,x){var _=null;if(c.g==x){gs(c),Bo(c),c.g=null;var R=2}else if(ga(c.h,x))_=x.G,Vi(c.h,x),R=1;else return;if(c.I!=0){if(x.o)if(R==1){_=x.u?x.u.length:0,x=Date.now()-x.F;var G=c.D;R=as(),zt(R,new Iu(R,_)),Ia(c)}else Pu(c);else if(G=x.m,G==3||G==0&&x.X>0||!(R==1&&wd(c,x)||R==2&&$o(c)))switch(_&&_.length>0&&(x=c.h,x.i=x.i.concat(_)),G){case 1:zi(c,5);break;case 4:zi(c,10);break;case 3:zi(c,6);break;default:zi(c,2)}}}function Lu(c,x){let _=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(_*=2),_*x}function zi(c,x){if(c.j.info("Error code "+x),x==2){var _=g(c.bb,c),R=c.Ua;const G=!R;R=new Qn(R||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||vr(R,"https"),Pi(R),G?Lo(R.toString(),_):Er(R.toString(),_)}else vt(2);c.I=0,c.l&&c.l.pa(x),zu(c),Ra(c)}n.bb=function(c){c?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function zu(c){if(c.I=0,c.ja=[],c.l){const x=cs(c.h);(x.length!=0||c.i.length!=0)&&(M(c.ja,x),M(c.ja,c.i),c.h.i.length=0,A(c.i),c.i.length=0),c.l.oa()}}function $u(c,x,_){var R=_ instanceof Qn?ft(_):new Qn(_);if(R.g!="")x&&(R.g=x+"."+R.g),ya(R,R.u);else{var G=d.location;R=G.protocol,x=x?x+"."+G.hostname:G.hostname,G=+G.port;const W=new Qn(null);R&&vr(W,R),x&&(W.g=x),G&&ya(W,G),_&&(W.h=_),R=W}return _=c.G,x=c.wa,_&&x&&Ze(R,_,x),Ze(R,"VER",c.ka),Ca(c,R),R}function ys(c,x,_){if(x&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return x=c.Aa&&!c.ma?new it(new va({ab:_})):new it(c.ma),x.Fa(c.L),x}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Bu(){}n=Bu.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function xs(){}xs.prototype.g=function(c,x){return new dn(c,x)};function dn(c,x){Ot.call(this),this.g=new ps(x),this.l=c,this.h=x&&x.messageUrlParams||null,c=x&&x.messageHeaders||null,x&&x.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=x&&x.initMessageHeaders||null,x&&x.messageContentType&&(c?c["X-WebChannel-Content-Type"]=x.messageContentType:c={"X-WebChannel-Content-Type":x.messageContentType}),x&&x.sa&&(c?c["X-WebChannel-Client-Profile"]=x.sa:c={"X-WebChannel-Client-Profile":x.sa}),this.g.U=c,(c=x&&x.Qb)&&!D(c)&&(this.g.u=c),this.A=x&&x.supportsCrossDomainXhr||!1,this.v=x&&x.sendRawJson||!1,(x=x&&x.httpSessionIdParam)&&!D(x)&&(this.g.G=x,c=this.h,c!==null&&x in c&&(c=this.h,x in c&&delete c[x])),this.j=new Sr(this)}E(dn,Ot),dn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},dn.prototype.close=function(){Aa(this.g)},dn.prototype.o=function(c){var x=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.v&&(_={},_.__data__=Dn(c),c=_);x.i.push(new vd(x.Ya++,c)),x.I==3&&Ia(x)},dn.prototype.N=function(){this.g.l=null,delete this.j,Aa(this.g),delete this.g,dn.Z.N.call(this)};function Ko(c){hr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var x=c.__sm__;if(x){e:{for(const _ in x){c=_;break e}c=void 0}(this.i=c)&&(c=this.i,x=x!==null&&c in x?x[c]:void 0),this.data=x}else this.data=c}E(Ko,hr);function Fu(){Gn.call(this),this.status=1}E(Fu,Gn);function Sr(c){this.g=c}E(Sr,Bu),Sr.prototype.ra=function(){zt(this.g,"a")},Sr.prototype.qa=function(c){zt(this.g,new Ko(c))},Sr.prototype.pa=function(c){zt(this.g,new Fu)},Sr.prototype.oa=function(){zt(this.g,"b")},xs.prototype.createWebChannel=xs.prototype.g,dn.prototype.send=dn.prototype.o,dn.prototype.open=dn.prototype.m,dn.prototype.close=dn.prototype.close,ow=function(){return new xs},sw=function(){return as()},aw=Nn,xm={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},_t.NO_ERROR=0,_t.TIMEOUT=8,_t.HTTP_ERROR=6,fh=_t,Gt.COMPLETE="complete",rw=Gt,Ru.EventType=oi,oi.OPEN="a",oi.CLOSE="b",oi.ERROR="c",oi.MESSAGE="d",Ot.prototype.listen=Ot.prototype.J,Ll=Ru,it.prototype.listenOnce=it.prototype.K,it.prototype.getLastError=it.prototype.Ha,it.prototype.getLastErrorCode=it.prototype.ya,it.prototype.getStatus=it.prototype.ca,it.prototype.getResponseJson=it.prototype.La,it.prototype.getResponseText=it.prototype.la,it.prototype.send=it.prototype.ea,it.prototype.setWithCredentials=it.prototype.Fa,iw=it}).apply(typeof Xc<"u"?Xc:typeof self<"u"?self:typeof window<"u"?window:{});const gv="@firebase/firestore",yv="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}sn.UNAUTHENTICATED=new sn(null),sn.GOOGLE_CREDENTIALS=new sn("google-credentials-uid"),sn.FIRST_PARTY=new sn("first-party-uid"),sn.MOCK_USER=new sn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Wa=new W_("@firebase/firestore");function Xs(){return Wa.logLevel}function pe(n,...e){if(Wa.logLevel<=Be.DEBUG){const i=e.map(pg);Wa.debug(`Firestore (${bo}): ${n}`,...i)}}function or(n,...e){if(Wa.logLevel<=Be.ERROR){const i=e.map(pg);Wa.error(`Firestore (${bo}): ${n}`,...i)}}function co(n,...e){if(Wa.logLevel<=Be.WARN){const i=e.map(pg);Wa.warn(`Firestore (${bo}): ${n}`,...i)}}function pg(n){if(typeof n=="string")return n;try{/**
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
 */function Te(n,e,i){let a="Unexpected state";typeof e=="string"?a=e:i=e,lw(n,a,i)}function lw(n,e,i){let a=`FIRESTORE (${bo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(i!==void 0)try{a+=" CONTEXT: "+JSON.stringify(i)}catch{a+=" CONTEXT: "+i}throw or(a),new Error(a)}function Ye(n,e,i,a){let o="Unexpected state";typeof i=="string"?o=i:a=i,n||lw(e,o,a)}function Ie(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class fe extends Eo{constructor(e,i){super(e,i),this.code=e,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(){this.promise=new Promise(((e,i)=>{this.resolve=e,this.reject=i}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(e,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class UI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,i){e.enqueueRetryable((()=>i(sn.UNAUTHENTICATED)))}shutdown(){}}class LI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,i){this.changeListener=i,e.enqueueRetryable((()=>i(this.token.user)))}shutdown(){this.changeListener=null}}class zI{constructor(e){this.t=e,this.currentUser=sn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,i){Ye(this.o===void 0,42304);let a=this.i;const o=m=>this.i!==a?(a=this.i,i(m)):Promise.resolve();let u=new ir;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new ir,e.enqueueRetryable((()=>o(this.currentUser)))};const d=()=>{const m=u;e.enqueueRetryable((async()=>{await m.promise,await o(this.currentUser)}))},p=m=>{pe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit((m=>p(m))),setTimeout((()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?p(m):(pe("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new ir)}}),0),d()}getToken(){const e=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then((a=>this.i!==e?(pe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(Ye(typeof a.accessToken=="string",31837,{l:a}),new uw(a.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ye(e===null||typeof e=="string",2055,{h:e}),new sn(e)}}class $I{constructor(e,i,a){this.P=e,this.T=i,this.I=a,this.type="FirstParty",this.user=sn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class BI{constructor(e,i,a){this.P=e,this.T=i,this.I=a}getToken(){return Promise.resolve(new $I(this.P,this.T,this.I))}start(e,i){e.enqueueRetryable((()=>i(sn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class xv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class FI{constructor(e,i){this.V=i,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,wI(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,i){Ye(this.o===void 0,3512);const a=u=>{u.error!=null&&pe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const d=u.token!==this.m;return this.m=u.token,pe("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?i(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>a(u)))};const o=u=>{pe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):pe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new xv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((i=>i?(Ye(typeof i.token=="string",44558,{tokenResult:i}),this.m=i.token,new xv(i.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function KI(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),i=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(i);else for(let a=0;a<n;a++)i[a]=Math.floor(256*Math.random());return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=62*Math.floor(4.129032258064516);let a="";for(;a.length<20;){const o=KI(40);for(let u=0;u<o.length;++u)a.length<20&&o[u]<i&&(a+=e.charAt(o[u]%62))}return a}}function Pe(n,e){return n<e?-1:n>e?1:0}function vm(n,e){const i=Math.min(n.length,e.length);for(let a=0;a<i;a++){const o=n.charAt(a),u=e.charAt(a);if(o!==u)return kp(o)===kp(u)?Pe(o,u):kp(o)?1:-1}return Pe(n.length,e.length)}const HI=55296,qI=57343;function kp(n){const e=n.charCodeAt(0);return e>=HI&&e<=qI}function ho(n,e,i){return n.length===e.length&&n.every(((a,o)=>i(a,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv="__name__";class Ei{constructor(e,i,a){i===void 0?i=0:i>e.length&&Te(637,{offset:i,range:e.length}),a===void 0?a=e.length-i:a>e.length-i&&Te(1746,{length:a,range:e.length-i}),this.segments=e,this.offset=i,this.len=a}get length(){return this.len}isEqual(e){return Ei.comparator(this,e)===0}child(e){const i=this.segments.slice(this.offset,this.limit());return e instanceof Ei?e.forEach((a=>{i.push(a)})):i.push(e),this.construct(i)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==e.get(i))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==e.get(i))return!1;return!0}forEach(e){for(let i=this.offset,a=this.limit();i<a;i++)e(this.segments[i])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,i){const a=Math.min(e.length,i.length);for(let o=0;o<a;o++){const u=Ei.compareSegments(e.get(o),i.get(o));if(u!==0)return u}return Pe(e.length,i.length)}static compareSegments(e,i){const a=Ei.isNumericId(e),o=Ei.isNumericId(i);return a&&!o?-1:!a&&o?1:a&&o?Ei.extractNumericId(e).compare(Ei.extractNumericId(i)):vm(e,i)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Zr.fromString(e.substring(4,e.length-2))}}class at extends Ei{construct(e,i,a){return new at(e,i,a)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const i=[];for(const a of e){if(a.indexOf("//")>=0)throw new fe(ie.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);i.push(...a.split("/").filter((o=>o.length>0)))}return new at(i)}static emptyPath(){return new at([])}}const GI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Zt extends Ei{construct(e,i,a){return new Zt(e,i,a)}static isValidIdentifier(e){return GI.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Zt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===vv}static keyField(){return new Zt([vv])}static fromServerFormat(e){const i=[];let a="",o=0;const u=()=>{if(a.length===0)throw new fe(ie.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);i.push(a),a=""};let d=!1;for(;o<e.length;){const p=e[o];if(p==="\\"){if(o+1===e.length)throw new fe(ie.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[o+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new fe(ie.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);a+=m,o+=2}else p==="`"?(d=!d,o++):p!=="."||d?(a+=p,o++):(u(),o++)}if(u(),d)throw new fe(ie.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Zt(i)}static emptyPath(){return new Zt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.path=e}static fromPath(e){return new ve(at.fromString(e))}static fromName(e){return new ve(at.fromString(e).popFirst(5))}static empty(){return new ve(at.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&at.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,i){return at.comparator(e.path,i.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ve(new at(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cw(n,e,i){if(!i)throw new fe(ie.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function YI(n,e,i,a){if(e===!0&&a===!0)throw new fe(ie.INVALID_ARGUMENT,`${n} and ${i} cannot be used together.`)}function _v(n){if(!ve.isDocumentKey(n))throw new fe(ie.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function wv(n){if(ve.isDocumentKey(n))throw new fe(ie.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function hw(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Wh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(a){return a.constructor?a.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Te(12329,{type:typeof n})}function lr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new fe(ie.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=Wh(n);throw new fe(ie.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${i}`)}}return n}/**
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
 */function Nt(n,e){const i={typeString:n};return e&&(i.value=e),i}function gu(n,e){if(!hw(n))throw new fe(ie.INVALID_ARGUMENT,"JSON must be an object");let i;for(const a in e)if(e[a]){const o=e[a].typeString,u="value"in e[a]?{value:e[a].value}:void 0;if(!(a in n)){i=`JSON missing required field: '${a}'`;break}const d=n[a];if(o&&typeof d!==o){i=`JSON field '${a}' must be a ${o}.`;break}if(u!==void 0&&d!==u.value){i=`Expected '${a}' field to equal '${u.value}'`;break}}if(i)throw new fe(ie.INVALID_ARGUMENT,i);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev=-62135596800,bv=1e6;class ut{static now(){return ut.fromMillis(Date.now())}static fromDate(e){return ut.fromMillis(e.getTime())}static fromMillis(e){const i=Math.floor(e/1e3),a=Math.floor((e-1e3*i)*bv);return new ut(i,a)}constructor(e,i){if(this.seconds=e,this.nanoseconds=i,i<0)throw new fe(ie.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(i>=1e9)throw new fe(ie.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(e<Ev)throw new fe(ie.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new fe(ie.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/bv}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ut._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(gu(e,ut._jsonSchema))return new ut(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ev;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ut._jsonSchemaVersion="firestore/timestamp/1.0",ut._jsonSchema={type:Nt("string",ut._jsonSchemaVersion),seconds:Nt("number"),nanoseconds:Nt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{static fromTimestamp(e){return new Ae(e)}static min(){return new Ae(new ut(0,0))}static max(){return new Ae(new ut(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const au=-1;function QI(n,e){const i=n.toTimestamp().seconds,a=n.toTimestamp().nanoseconds+1,o=Ae.fromTimestamp(a===1e9?new ut(i+1,0):new ut(i,a));return new ea(o,ve.empty(),e)}function XI(n){return new ea(n.readTime,n.key,au)}class ea{constructor(e,i,a){this.readTime=e,this.documentKey=i,this.largestBatchId=a}static min(){return new ea(Ae.min(),ve.empty(),au)}static max(){return new ea(Ae.max(),ve.empty(),au)}}function WI(n,e){let i=n.readTime.compareTo(e.readTime);return i!==0?i:(i=ve.comparator(n.documentKey,e.documentKey),i!==0?i:Pe(n.largestBatchId,e.largestBatchId))}/**
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
 */const ZI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class JI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function To(n){if(n.code!==ie.FAILED_PRECONDITION||n.message!==ZI)throw n;pe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((i=>{this.isDone=!0,this.result=i,this.nextCallback&&this.nextCallback(i)}),(i=>{this.isDone=!0,this.error=i,this.catchCallback&&this.catchCallback(i)}))}catch(e){return this.next(void 0,e)}next(e,i){return this.callbackAttached&&Te(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(i,this.error):this.wrapSuccess(e,this.result):new se(((a,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(a,o)},this.catchCallback=u=>{this.wrapFailure(i,u).next(a,o)}}))}toPromise(){return new Promise(((e,i)=>{this.next(e,i)}))}wrapUserFunction(e){try{const i=e();return i instanceof se?i:se.resolve(i)}catch(i){return se.reject(i)}}wrapSuccess(e,i){return e?this.wrapUserFunction((()=>e(i))):se.resolve(i)}wrapFailure(e,i){return e?this.wrapUserFunction((()=>e(i))):se.reject(i)}static resolve(e){return new se(((i,a)=>{i(e)}))}static reject(e){return new se(((i,a)=>{a(e)}))}static waitFor(e){return new se(((i,a)=>{let o=0,u=0,d=!1;e.forEach((p=>{++o,p.next((()=>{++u,d&&u===o&&i()}),(m=>a(m)))})),d=!0,u===o&&i()}))}static or(e){let i=se.resolve(!1);for(const a of e)i=i.next((o=>o?se.resolve(o):a()));return i}static forEach(e,i){const a=[];return e.forEach(((o,u)=>{a.push(i.call(this,o,u))})),this.waitFor(a)}static mapArray(e,i){return new se(((a,o)=>{const u=e.length,d=new Array(u);let p=0;for(let m=0;m<u;m++){const g=m;i(e[g]).next((v=>{d[g]=v,++p,p===u&&a(d)}),(v=>o(v)))}}))}static doWhile(e,i){return new se(((a,o)=>{const u=()=>{e()===!0?i().next((()=>{u()}),o):a()};u()}))}}function e3(n){const e=n.match(/Android ([\d.]+)/i),i=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(i)}function So(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Zh{constructor(e,i){this.previousValue=e,i&&(i.sequenceNumberHandler=a=>this.ae(a),this.ue=a=>i.writeSequenceNumber(a))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Zh.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const dw="";function n3(n){let e="";for(let i=0;i<n.length;i++)e.length>0&&(e=Tv(e)),e=i3(n.get(i),e);return Tv(e)}function i3(n,e){let i=e;const a=n.length;for(let o=0;o<a;o++){const u=n.charAt(o);switch(u){case"\0":i+="";break;case dw:i+="";break;default:i+=u}}return i}function Tv(n){return n+dw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv(n){let e=0;for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&e++;return e}function sa(n,e){for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&e(i,n[i])}function fw(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,i){this.comparator=e,this.root=i||Wt.EMPTY}insert(e,i){return new mt(this.comparator,this.root.insert(e,i,this.comparator).copy(null,null,Wt.BLACK,null,null))}remove(e){return new mt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Wt.BLACK,null,null))}get(e){let i=this.root;for(;!i.isEmpty();){const a=this.comparator(e,i.key);if(a===0)return i.value;a<0?i=i.left:a>0&&(i=i.right)}return null}indexOf(e){let i=0,a=this.root;for(;!a.isEmpty();){const o=this.comparator(e,a.key);if(o===0)return i+a.left.size;o<0?a=a.left:(i+=a.left.size+1,a=a.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((i,a)=>(e(i,a),!1)))}toString(){const e=[];return this.inorderTraversal(((i,a)=>(e.push(`${i}:${a}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wc(this.root,e,this.comparator,!0)}}class Wc{constructor(e,i,a,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=i?a(e.key,i):1,i&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const i={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return i}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Wt{constructor(e,i,a,o,u){this.key=e,this.value=i,this.color=a??Wt.RED,this.left=o??Wt.EMPTY,this.right=u??Wt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,i,a,o,u){return new Wt(e??this.key,i??this.value,a??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,i,a){let o=this;const u=a(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,i,a),null):u===0?o.copy(null,i,null,null,null):o.copy(null,null,null,null,o.right.insert(e,i,a)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Wt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,i){let a,o=this;if(i(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,i),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),i(e,o.key)===0){if(o.right.isEmpty())return Wt.EMPTY;a=o.right.min(),o=o.copy(a.key,a.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,i))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,i)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Te(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Te(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Te(27949);return e+(this.isRed()?0:1)}}Wt.EMPTY=null,Wt.RED=!0,Wt.BLACK=!1;Wt.EMPTY=new class{constructor(){this.size=0}get key(){throw Te(57766)}get value(){throw Te(16141)}get color(){throw Te(16727)}get left(){throw Te(29726)}get right(){throw Te(36894)}copy(e,i,a,o,u){return this}insert(e,i,a){return new Wt(e,i)}remove(e,i){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.comparator=e,this.data=new mt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((i,a)=>(e(i),!1)))}forEachInRange(e,i){const a=this.data.getIteratorFrom(e[0]);for(;a.hasNext();){const o=a.getNext();if(this.comparator(o.key,e[1])>=0)return;i(o.key)}}forEachWhile(e,i){let a;for(a=i!==void 0?this.data.getIteratorFrom(i):this.data.getIterator();a.hasNext();)if(!e(a.getNext().key))return}firstAfterOrEqual(e){const i=this.data.getIteratorFrom(e);return i.hasNext()?i.getNext().key:null}getIterator(){return new Av(this.data.getIterator())}getIteratorFrom(e){return new Av(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let i=this;return i.size<e.size&&(i=e,e=this),e.forEach((a=>{i=i.add(a)})),i}isEqual(e){if(!(e instanceof Lt)||this.size!==e.size)return!1;const i=this.data.getIterator(),a=e.data.getIterator();for(;i.hasNext();){const o=i.getNext().key,u=a.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((i=>{e.push(i)})),e}toString(){const e=[];return this.forEach((i=>e.push(i))),"SortedSet("+e.toString()+")"}copy(e){const i=new Lt(this.comparator);return i.data=e,i}}class Av{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class jn{constructor(e){this.fields=e,e.sort(Zt.comparator)}static empty(){return new jn([])}unionWith(e){let i=new Lt(Zt.comparator);for(const a of this.fields)i=i.add(a);for(const a of e)i=i.add(a);return new jn(i.toArray())}covers(e){for(const i of this.fields)if(i.isPrefixOf(e))return!0;return!1}isEqual(e){return ho(this.fields,e.fields,((i,a)=>i.isEqual(a)))}}/**
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
 */class Jt{constructor(e){this.binaryString=e}static fromBase64String(e){const i=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new pw("Invalid base64 string: "+u):u}})(e);return new Jt(i)}static fromUint8Array(e){const i=(function(o){let u="";for(let d=0;d<o.length;++d)u+=String.fromCharCode(o[d]);return u})(e);return new Jt(i)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(i){return btoa(i)})(this.binaryString)}toUint8Array(){return(function(i){const a=new Uint8Array(i.length);for(let o=0;o<i.length;o++)a[o]=i.charCodeAt(o);return a})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Jt.EMPTY_BYTE_STRING=new Jt("");const r3=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ta(n){if(Ye(!!n,39018),typeof n=="string"){let e=0;const i=r3.exec(n);if(Ye(!!i,46558,{timestamp:n}),i[1]){let o=i[1];o=(o+"000000000").substr(0,9),e=Number(o)}const a=new Date(n);return{seconds:Math.floor(a.getTime()/1e3),nanos:e}}return{seconds:St(n.seconds),nanos:St(n.nanos)}}function St(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function na(n){return typeof n=="string"?Jt.fromBase64String(n):Jt.fromUint8Array(n)}/**
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
 */const mw="server_timestamp",gw="__type__",yw="__previous_value__",xw="__local_write_time__";function yg(n){return(n?.mapValue?.fields||{})[gw]?.stringValue===mw}function ed(n){const e=n.mapValue.fields[yw];return yg(e)?ed(e):e}function su(n){const e=ta(n.mapValue.fields[xw].timestampValue);return new ut(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a3{constructor(e,i,a,o,u,d,p,m,g,v){this.databaseId=e,this.appId=i,this.persistenceKey=a,this.host=o,this.ssl=u,this.forceLongPolling=d,this.autoDetectLongPolling=p,this.longPollingOptions=m,this.useFetchStreams=g,this.isUsingEmulator=v}}const Dh="(default)";class ou{constructor(e,i){this.projectId=e,this.database=i||Dh}static empty(){return new ou("","")}get isDefaultDatabase(){return this.database===Dh}isEqual(e){return e instanceof ou&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const vw="__type__",s3="__max__",Zc={mapValue:{}},_w="__vector__",Nh="value";function ia(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?yg(n)?4:l3(n)?9007199254740991:o3(n)?10:11:Te(28295,{value:n})}function Ci(n,e){if(n===e)return!0;const i=ia(n);if(i!==ia(e))return!1;switch(i){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return su(n).isEqual(su(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const d=ta(o.timestampValue),p=ta(u.timestampValue);return d.seconds===p.seconds&&d.nanos===p.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,u){return na(o.bytesValue).isEqual(na(u.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,u){return St(o.geoPointValue.latitude)===St(u.geoPointValue.latitude)&&St(o.geoPointValue.longitude)===St(u.geoPointValue.longitude)})(n,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return St(o.integerValue)===St(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const d=St(o.doubleValue),p=St(u.doubleValue);return d===p?jh(d)===jh(p):isNaN(d)&&isNaN(p)}return!1})(n,e);case 9:return ho(n.arrayValue.values||[],e.arrayValue.values||[],Ci);case 10:case 11:return(function(o,u){const d=o.mapValue.fields||{},p=u.mapValue.fields||{};if(Sv(d)!==Sv(p))return!1;for(const m in d)if(d.hasOwnProperty(m)&&(p[m]===void 0||!Ci(d[m],p[m])))return!1;return!0})(n,e);default:return Te(52216,{left:n})}}function lu(n,e){return(n.values||[]).find((i=>Ci(i,e)))!==void 0}function fo(n,e){if(n===e)return 0;const i=ia(n),a=ia(e);if(i!==a)return Pe(i,a);switch(i){case 0:case 9007199254740991:return 0;case 1:return Pe(n.booleanValue,e.booleanValue);case 2:return(function(u,d){const p=St(u.integerValue||u.doubleValue),m=St(d.integerValue||d.doubleValue);return p<m?-1:p>m?1:p===m?0:isNaN(p)?isNaN(m)?0:-1:1})(n,e);case 3:return Rv(n.timestampValue,e.timestampValue);case 4:return Rv(su(n),su(e));case 5:return vm(n.stringValue,e.stringValue);case 6:return(function(u,d){const p=na(u),m=na(d);return p.compareTo(m)})(n.bytesValue,e.bytesValue);case 7:return(function(u,d){const p=u.split("/"),m=d.split("/");for(let g=0;g<p.length&&g<m.length;g++){const v=Pe(p[g],m[g]);if(v!==0)return v}return Pe(p.length,m.length)})(n.referenceValue,e.referenceValue);case 8:return(function(u,d){const p=Pe(St(u.latitude),St(d.latitude));return p!==0?p:Pe(St(u.longitude),St(d.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Iv(n.arrayValue,e.arrayValue);case 10:return(function(u,d){const p=u.fields||{},m=d.fields||{},g=p[Nh]?.arrayValue,v=m[Nh]?.arrayValue,E=Pe(g?.values?.length||0,v?.values?.length||0);return E!==0?E:Iv(g,v)})(n.mapValue,e.mapValue);case 11:return(function(u,d){if(u===Zc.mapValue&&d===Zc.mapValue)return 0;if(u===Zc.mapValue)return 1;if(d===Zc.mapValue)return-1;const p=u.fields||{},m=Object.keys(p),g=d.fields||{},v=Object.keys(g);m.sort(),v.sort();for(let E=0;E<m.length&&E<v.length;++E){const T=vm(m[E],v[E]);if(T!==0)return T;const A=fo(p[m[E]],g[v[E]]);if(A!==0)return A}return Pe(m.length,v.length)})(n.mapValue,e.mapValue);default:throw Te(23264,{he:i})}}function Rv(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Pe(n,e);const i=ta(n),a=ta(e),o=Pe(i.seconds,a.seconds);return o!==0?o:Pe(i.nanos,a.nanos)}function Iv(n,e){const i=n.values||[],a=e.values||[];for(let o=0;o<i.length&&o<a.length;++o){const u=fo(i[o],a[o]);if(u)return u}return Pe(i.length,a.length)}function po(n){return _m(n)}function _m(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(i){const a=ta(i);return`time(${a.seconds},${a.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(i){return na(i).toBase64()})(n.bytesValue):"referenceValue"in n?(function(i){return ve.fromName(i).toString()})(n.referenceValue):"geoPointValue"in n?(function(i){return`geo(${i.latitude},${i.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(i){let a="[",o=!0;for(const u of i.values||[])o?o=!1:a+=",",a+=_m(u);return a+"]"})(n.arrayValue):"mapValue"in n?(function(i){const a=Object.keys(i.fields||{}).sort();let o="{",u=!0;for(const d of a)u?u=!1:o+=",",o+=`${d}:${_m(i.fields[d])}`;return o+"}"})(n.mapValue):Te(61005,{value:n})}function ph(n){switch(ia(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ed(n);return e?16+ph(e):16;case 5:return 2*n.stringValue.length;case 6:return na(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(a){return(a.values||[]).reduce(((o,u)=>o+ph(u)),0)})(n.arrayValue);case 10:case 11:return(function(a){let o=0;return sa(a.fields,((u,d)=>{o+=u.length+ph(d)})),o})(n.mapValue);default:throw Te(13486,{value:n})}}function Cv(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function wm(n){return!!n&&"integerValue"in n}function xg(n){return!!n&&"arrayValue"in n}function jv(n){return!!n&&"nullValue"in n}function Dv(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function mh(n){return!!n&&"mapValue"in n}function o3(n){return(n?.mapValue?.fields||{})[vw]?.stringValue===_w}function ql(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return sa(n.mapValue.fields,((i,a)=>e.mapValue.fields[i]=ql(a))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let i=0;i<(n.arrayValue.values||[]).length;++i)e.arrayValue.values[i]=ql(n.arrayValue.values[i]);return e}return{...n}}function l3(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===s3}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.value=e}static empty(){return new vn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let i=this.value;for(let a=0;a<e.length-1;++a)if(i=(i.mapValue.fields||{})[e.get(a)],!mh(i))return null;return i=(i.mapValue.fields||{})[e.lastSegment()],i||null}}set(e,i){this.getFieldsMap(e.popLast())[e.lastSegment()]=ql(i)}setAll(e){let i=Zt.emptyPath(),a={},o=[];e.forEach(((d,p)=>{if(!i.isImmediateParentOf(p)){const m=this.getFieldsMap(i);this.applyChanges(m,a,o),a={},o=[],i=p.popLast()}d?a[p.lastSegment()]=ql(d):o.push(p.lastSegment())}));const u=this.getFieldsMap(i);this.applyChanges(u,a,o)}delete(e){const i=this.field(e.popLast());mh(i)&&i.mapValue.fields&&delete i.mapValue.fields[e.lastSegment()]}isEqual(e){return Ci(this.value,e.value)}getFieldsMap(e){let i=this.value;i.mapValue.fields||(i.mapValue={fields:{}});for(let a=0;a<e.length;++a){let o=i.mapValue.fields[e.get(a)];mh(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},i.mapValue.fields[e.get(a)]=o),i=o}return i.mapValue.fields}applyChanges(e,i,a){sa(i,((o,u)=>e[o]=u));for(const o of a)delete e[o]}clone(){return new vn(ql(this.value))}}function ww(n){const e=[];return sa(n.fields,((i,a)=>{const o=new Zt([i]);if(mh(a)){const u=ww(a.mapValue).fields;if(u.length===0)e.push(o);else for(const d of u)e.push(o.child(d))}else e.push(o)})),new jn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,i,a,o,u,d,p){this.key=e,this.documentType=i,this.version=a,this.readTime=o,this.createTime=u,this.data=d,this.documentState=p}static newInvalidDocument(e){return new on(e,0,Ae.min(),Ae.min(),Ae.min(),vn.empty(),0)}static newFoundDocument(e,i,a,o){return new on(e,1,i,Ae.min(),a,o,0)}static newNoDocument(e,i){return new on(e,2,i,Ae.min(),Ae.min(),vn.empty(),0)}static newUnknownDocument(e,i){return new on(e,3,i,Ae.min(),Ae.min(),vn.empty(),2)}convertToFoundDocument(e,i){return!this.createTime.isEqual(Ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=i,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof on&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new on(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Mh{constructor(e,i){this.position=e,this.inclusive=i}}function Nv(n,e,i){let a=0;for(let o=0;o<n.position.length;o++){const u=e[o],d=n.position[o];if(u.field.isKeyField()?a=ve.comparator(ve.fromName(d.referenceValue),i.key):a=fo(d,i.data.field(u.field)),u.dir==="desc"&&(a*=-1),a!==0)break}return a}function Mv(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let i=0;i<n.position.length;i++)if(!Ci(n.position[i],e.position[i]))return!1;return!0}/**
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
 */class uu{constructor(e,i="asc"){this.field=e,this.dir=i}}function u3(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Ew{}class Dt extends Ew{constructor(e,i,a){super(),this.field=e,this.op=i,this.value=a}static create(e,i,a){return e.isKeyField()?i==="in"||i==="not-in"?this.createKeyFieldInFilter(e,i,a):new h3(e,i,a):i==="array-contains"?new p3(e,a):i==="in"?new m3(e,a):i==="not-in"?new g3(e,a):i==="array-contains-any"?new y3(e,a):new Dt(e,i,a)}static createKeyFieldInFilter(e,i,a){return i==="in"?new d3(e,a):new f3(e,a)}matches(e){const i=e.data.field(this.field);return this.op==="!="?i!==null&&i.nullValue===void 0&&this.matchesComparison(fo(i,this.value)):i!==null&&ia(this.value)===ia(i)&&this.matchesComparison(fo(i,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ai extends Ew{constructor(e,i){super(),this.filters=e,this.op=i,this.Pe=null}static create(e,i){return new ai(e,i)}matches(e){return bw(this)?this.filters.find((i=>!i.matches(e)))===void 0:this.filters.find((i=>i.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,i)=>e.concat(i.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function bw(n){return n.op==="and"}function Tw(n){return c3(n)&&bw(n)}function c3(n){for(const e of n.filters)if(e instanceof ai)return!1;return!0}function Em(n){if(n instanceof Dt)return n.field.canonicalString()+n.op.toString()+po(n.value);if(Tw(n))return n.filters.map((e=>Em(e))).join(",");{const e=n.filters.map((i=>Em(i))).join(",");return`${n.op}(${e})`}}function Sw(n,e){return n instanceof Dt?(function(a,o){return o instanceof Dt&&a.op===o.op&&a.field.isEqual(o.field)&&Ci(a.value,o.value)})(n,e):n instanceof ai?(function(a,o){return o instanceof ai&&a.op===o.op&&a.filters.length===o.filters.length?a.filters.reduce(((u,d,p)=>u&&Sw(d,o.filters[p])),!0):!1})(n,e):void Te(19439)}function Aw(n){return n instanceof Dt?(function(i){return`${i.field.canonicalString()} ${i.op} ${po(i.value)}`})(n):n instanceof ai?(function(i){return i.op.toString()+" {"+i.getFilters().map(Aw).join(" ,")+"}"})(n):"Filter"}class h3 extends Dt{constructor(e,i,a){super(e,i,a),this.key=ve.fromName(a.referenceValue)}matches(e){const i=ve.comparator(e.key,this.key);return this.matchesComparison(i)}}class d3 extends Dt{constructor(e,i){super(e,"in",i),this.keys=Rw("in",i)}matches(e){return this.keys.some((i=>i.isEqual(e.key)))}}class f3 extends Dt{constructor(e,i){super(e,"not-in",i),this.keys=Rw("not-in",i)}matches(e){return!this.keys.some((i=>i.isEqual(e.key)))}}function Rw(n,e){return(e.arrayValue?.values||[]).map((i=>ve.fromName(i.referenceValue)))}class p3 extends Dt{constructor(e,i){super(e,"array-contains",i)}matches(e){const i=e.data.field(this.field);return xg(i)&&lu(i.arrayValue,this.value)}}class m3 extends Dt{constructor(e,i){super(e,"in",i)}matches(e){const i=e.data.field(this.field);return i!==null&&lu(this.value.arrayValue,i)}}class g3 extends Dt{constructor(e,i){super(e,"not-in",i)}matches(e){if(lu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const i=e.data.field(this.field);return i!==null&&i.nullValue===void 0&&!lu(this.value.arrayValue,i)}}class y3 extends Dt{constructor(e,i){super(e,"array-contains-any",i)}matches(e){const i=e.data.field(this.field);return!(!xg(i)||!i.arrayValue.values)&&i.arrayValue.values.some((a=>lu(this.value.arrayValue,a)))}}/**
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
 */class x3{constructor(e,i=null,a=[],o=[],u=null,d=null,p=null){this.path=e,this.collectionGroup=i,this.orderBy=a,this.filters=o,this.limit=u,this.startAt=d,this.endAt=p,this.Te=null}}function Ov(n,e=null,i=[],a=[],o=null,u=null,d=null){return new x3(n,e,i,a,o,u,d)}function vg(n){const e=Ie(n);if(e.Te===null){let i=e.path.canonicalString();e.collectionGroup!==null&&(i+="|cg:"+e.collectionGroup),i+="|f:",i+=e.filters.map((a=>Em(a))).join(","),i+="|ob:",i+=e.orderBy.map((a=>(function(u){return u.field.canonicalString()+u.dir})(a))).join(","),Jh(e.limit)||(i+="|l:",i+=e.limit),e.startAt&&(i+="|lb:",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map((a=>po(a))).join(",")),e.endAt&&(i+="|ub:",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map((a=>po(a))).join(",")),e.Te=i}return e.Te}function _g(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<n.orderBy.length;i++)if(!u3(n.orderBy[i],e.orderBy[i]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let i=0;i<n.filters.length;i++)if(!Sw(n.filters[i],e.filters[i]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Mv(n.startAt,e.startAt)&&Mv(n.endAt,e.endAt)}function bm(n){return ve.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,i=null,a=[],o=[],u=null,d="F",p=null,m=null){this.path=e,this.collectionGroup=i,this.explicitOrderBy=a,this.filters=o,this.limit=u,this.limitType=d,this.startAt=p,this.endAt=m,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function v3(n,e,i,a,o,u,d,p){return new Ao(n,e,i,a,o,u,d,p)}function wg(n){return new Ao(n)}function kv(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Iw(n){return n.collectionGroup!==null}function Gl(n){const e=Ie(n);if(e.Ie===null){e.Ie=[];const i=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),i.add(u.field.canonicalString());const a=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(d){let p=new Lt(Zt.comparator);return d.filters.forEach((m=>{m.getFlattenedFilters().forEach((g=>{g.isInequality()&&(p=p.add(g.field))}))})),p})(e).forEach((u=>{i.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new uu(u,a))})),i.has(Zt.keyField().canonicalString())||e.Ie.push(new uu(Zt.keyField(),a))}return e.Ie}function Ti(n){const e=Ie(n);return e.Ee||(e.Ee=_3(e,Gl(n))),e.Ee}function _3(n,e){if(n.limitType==="F")return Ov(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new uu(o.field,u)}));const i=n.endAt?new Mh(n.endAt.position,n.endAt.inclusive):null,a=n.startAt?new Mh(n.startAt.position,n.startAt.inclusive):null;return Ov(n.path,n.collectionGroup,e,n.filters,n.limit,i,a)}}function Tm(n,e){const i=n.filters.concat([e]);return new Ao(n.path,n.collectionGroup,n.explicitOrderBy.slice(),i,n.limit,n.limitType,n.startAt,n.endAt)}function Sm(n,e,i){return new Ao(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,i,n.startAt,n.endAt)}function td(n,e){return _g(Ti(n),Ti(e))&&n.limitType===e.limitType}function Cw(n){return`${vg(Ti(n))}|lt:${n.limitType}`}function Ws(n){return`Query(target=${(function(i){let a=i.path.canonicalString();return i.collectionGroup!==null&&(a+=" collectionGroup="+i.collectionGroup),i.filters.length>0&&(a+=`, filters: [${i.filters.map((o=>Aw(o))).join(", ")}]`),Jh(i.limit)||(a+=", limit: "+i.limit),i.orderBy.length>0&&(a+=`, orderBy: [${i.orderBy.map((o=>(function(d){return`${d.field.canonicalString()} (${d.dir})`})(o))).join(", ")}]`),i.startAt&&(a+=", startAt: ",a+=i.startAt.inclusive?"b:":"a:",a+=i.startAt.position.map((o=>po(o))).join(",")),i.endAt&&(a+=", endAt: ",a+=i.endAt.inclusive?"a:":"b:",a+=i.endAt.position.map((o=>po(o))).join(",")),`Target(${a})`})(Ti(n))}; limitType=${n.limitType})`}function nd(n,e){return e.isFoundDocument()&&(function(a,o){const u=o.key.path;return a.collectionGroup!==null?o.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(u):ve.isDocumentKey(a.path)?a.path.isEqual(u):a.path.isImmediateParentOf(u)})(n,e)&&(function(a,o){for(const u of Gl(a))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(n,e)&&(function(a,o){for(const u of a.filters)if(!u.matches(o))return!1;return!0})(n,e)&&(function(a,o){return!(a.startAt&&!(function(d,p,m){const g=Nv(d,p,m);return d.inclusive?g<=0:g<0})(a.startAt,Gl(a),o)||a.endAt&&!(function(d,p,m){const g=Nv(d,p,m);return d.inclusive?g>=0:g>0})(a.endAt,Gl(a),o))})(n,e)}function w3(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function jw(n){return(e,i)=>{let a=!1;for(const o of Gl(n)){const u=E3(o,e,i);if(u!==0)return u;a=a||o.field.isKeyField()}return 0}}function E3(n,e,i){const a=n.field.isKeyField()?ve.comparator(e.key,i.key):(function(u,d,p){const m=d.data.field(u),g=p.data.field(u);return m!==null&&g!==null?fo(m,g):Te(42886)})(n.field,e,i);switch(n.dir){case"asc":return a;case"desc":return-1*a;default:return Te(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,i){this.mapKeyFn=e,this.equalsFn=i,this.inner={},this.innerSize=0}get(e){const i=this.mapKeyFn(e),a=this.inner[i];if(a!==void 0){for(const[o,u]of a)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,i){const a=this.mapKeyFn(e),o=this.inner[a];if(o===void 0)return this.inner[a]=[[e,i]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,i]);o.push([e,i]),this.innerSize++}delete(e){const i=this.mapKeyFn(e),a=this.inner[i];if(a===void 0)return!1;for(let o=0;o<a.length;o++)if(this.equalsFn(a[o][0],e))return a.length===1?delete this.inner[i]:a.splice(o,1),this.innerSize--,!0;return!1}forEach(e){sa(this.inner,((i,a)=>{for(const[o,u]of a)e(o,u)}))}isEmpty(){return fw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b3=new mt(ve.comparator);function ur(){return b3}const Dw=new mt(ve.comparator);function zl(...n){let e=Dw;for(const i of n)e=e.insert(i.key,i);return e}function Nw(n){let e=Dw;return n.forEach(((i,a)=>e=e.insert(i,a.overlayedDocument))),e}function Ga(){return Yl()}function Mw(){return Yl()}function Yl(){return new ts((n=>n.toString()),((n,e)=>n.isEqual(e)))}const T3=new mt(ve.comparator),S3=new Lt(ve.comparator);function Ue(...n){let e=S3;for(const i of n)e=e.add(i);return e}const A3=new Lt(Pe);function R3(){return A3}/**
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
 */function Eg(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jh(e)?"-0":e}}function Ow(n){return{integerValue:""+n}}function kw(n,e){return t3(e)?Ow(e):Eg(n,e)}/**
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
 */class id{constructor(){this._=void 0}}function I3(n,e,i){return n instanceof Oh?(function(o,u){const d={fields:{[gw]:{stringValue:mw},[xw]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&yg(u)&&(u=ed(u)),u&&(d.fields[yw]=u),{mapValue:d}})(i,e):n instanceof cu?Pw(n,e):n instanceof hu?Uw(n,e):(function(o,u){const d=Vw(o,u),p=Vv(d)+Vv(o.Ae);return wm(d)&&wm(o.Ae)?Ow(p):Eg(o.serializer,p)})(n,e)}function C3(n,e,i){return n instanceof cu?Pw(n,e):n instanceof hu?Uw(n,e):i}function Vw(n,e){return n instanceof du?(function(a){return wm(a)||(function(u){return!!u&&"doubleValue"in u})(a)})(e)?e:{integerValue:0}:null}class Oh extends id{}class cu extends id{constructor(e){super(),this.elements=e}}function Pw(n,e){const i=Lw(e);for(const a of n.elements)i.some((o=>Ci(o,a)))||i.push(a);return{arrayValue:{values:i}}}class hu extends id{constructor(e){super(),this.elements=e}}function Uw(n,e){let i=Lw(e);for(const a of n.elements)i=i.filter((o=>!Ci(o,a)));return{arrayValue:{values:i}}}class du extends id{constructor(e,i){super(),this.serializer=e,this.Ae=i}}function Vv(n){return St(n.integerValue||n.doubleValue)}function Lw(n){return xg(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j3{constructor(e,i){this.field=e,this.transform=i}}function D3(n,e){return n.field.isEqual(e.field)&&(function(a,o){return a instanceof cu&&o instanceof cu||a instanceof hu&&o instanceof hu?ho(a.elements,o.elements,Ci):a instanceof du&&o instanceof du?Ci(a.Ae,o.Ae):a instanceof Oh&&o instanceof Oh})(n.transform,e.transform)}class N3{constructor(e,i){this.version=e,this.transformResults=i}}class Si{constructor(e,i){this.updateTime=e,this.exists=i}static none(){return new Si}static exists(e){return new Si(void 0,e)}static updateTime(e){return new Si(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function gh(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class rd{}function zw(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Bw(n.key,Si.none()):new yu(n.key,n.data,Si.none());{const i=n.data,a=vn.empty();let o=new Lt(Zt.comparator);for(let u of e.fields)if(!o.has(u)){let d=i.field(u);d===null&&u.length>1&&(u=u.popLast(),d=i.field(u)),d===null?a.delete(u):a.set(u,d),o=o.add(u)}return new oa(n.key,a,new jn(o.toArray()),Si.none())}}function M3(n,e,i){n instanceof yu?(function(o,u,d){const p=o.value.clone(),m=Uv(o.fieldTransforms,u,d.transformResults);p.setAll(m),u.convertToFoundDocument(d.version,p).setHasCommittedMutations()})(n,e,i):n instanceof oa?(function(o,u,d){if(!gh(o.precondition,u))return void u.convertToUnknownDocument(d.version);const p=Uv(o.fieldTransforms,u,d.transformResults),m=u.data;m.setAll($w(o)),m.setAll(p),u.convertToFoundDocument(d.version,m).setHasCommittedMutations()})(n,e,i):(function(o,u,d){u.convertToNoDocument(d.version).setHasCommittedMutations()})(0,e,i)}function Ql(n,e,i,a){return n instanceof yu?(function(u,d,p,m){if(!gh(u.precondition,d))return p;const g=u.value.clone(),v=Lv(u.fieldTransforms,m,d);return g.setAll(v),d.convertToFoundDocument(d.version,g).setHasLocalMutations(),null})(n,e,i,a):n instanceof oa?(function(u,d,p,m){if(!gh(u.precondition,d))return p;const g=Lv(u.fieldTransforms,m,d),v=d.data;return v.setAll($w(u)),v.setAll(g),d.convertToFoundDocument(d.version,v).setHasLocalMutations(),p===null?null:p.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((E=>E.field)))})(n,e,i,a):(function(u,d,p){return gh(u.precondition,d)?(d.convertToNoDocument(d.version).setHasLocalMutations(),null):p})(n,e,i)}function O3(n,e){let i=null;for(const a of n.fieldTransforms){const o=e.data.field(a.field),u=Vw(a.transform,o||null);u!=null&&(i===null&&(i=vn.empty()),i.set(a.field,u))}return i||null}function Pv(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(a,o){return a===void 0&&o===void 0||!(!a||!o)&&ho(a,o,((u,d)=>D3(u,d)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class yu extends rd{constructor(e,i,a,o=[]){super(),this.key=e,this.value=i,this.precondition=a,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class oa extends rd{constructor(e,i,a,o,u=[]){super(),this.key=e,this.data=i,this.fieldMask=a,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function $w(n){const e=new Map;return n.fieldMask.fields.forEach((i=>{if(!i.isEmpty()){const a=n.data.field(i);e.set(i,a)}})),e}function Uv(n,e,i){const a=new Map;Ye(n.length===i.length,32656,{Re:i.length,Ve:n.length});for(let o=0;o<i.length;o++){const u=n[o],d=u.transform,p=e.data.field(u.field);a.set(u.field,C3(d,p,i[o]))}return a}function Lv(n,e,i){const a=new Map;for(const o of n){const u=o.transform,d=i.data.field(o.field);a.set(o.field,I3(u,d,e))}return a}class Bw extends rd{constructor(e,i){super(),this.key=e,this.precondition=i,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class k3 extends rd{constructor(e,i){super(),this.key=e,this.precondition=i,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V3{constructor(e,i,a,o){this.batchId=e,this.localWriteTime=i,this.baseMutations=a,this.mutations=o}applyToRemoteDocument(e,i){const a=i.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&M3(u,e,a[o])}}applyToLocalView(e,i){for(const a of this.baseMutations)a.key.isEqual(e.key)&&(i=Ql(a,e,i,this.localWriteTime));for(const a of this.mutations)a.key.isEqual(e.key)&&(i=Ql(a,e,i,this.localWriteTime));return i}applyToLocalDocumentSet(e,i){const a=Mw();return this.mutations.forEach((o=>{const u=e.get(o.key),d=u.overlayedDocument;let p=this.applyToLocalView(d,u.mutatedFields);p=i.has(o.key)?null:p;const m=zw(d,p);m!==null&&a.set(o.key,m),d.isValidDocument()||d.convertToNoDocument(Ae.min())})),a}keys(){return this.mutations.reduce(((e,i)=>e.add(i.key)),Ue())}isEqual(e){return this.batchId===e.batchId&&ho(this.mutations,e.mutations,((i,a)=>Pv(i,a)))&&ho(this.baseMutations,e.baseMutations,((i,a)=>Pv(i,a)))}}class bg{constructor(e,i,a,o){this.batch=e,this.commitVersion=i,this.mutationResults=a,this.docVersions=o}static from(e,i,a){Ye(e.mutations.length===a.length,58842,{me:e.mutations.length,fe:a.length});let o=(function(){return T3})();const u=e.mutations;for(let d=0;d<u.length;d++)o=o.insert(u[d].key,a[d].version);return new bg(e,i,a,o)}}/**
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
 */let P3=class{constructor(e,i){this.largestBatchId=e,this.mutation=i}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class U3{constructor(e,i){this.count=e,this.unchangedNames=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ct,$e;function L3(n){switch(n){case ie.OK:return Te(64938);case ie.CANCELLED:case ie.UNKNOWN:case ie.DEADLINE_EXCEEDED:case ie.RESOURCE_EXHAUSTED:case ie.INTERNAL:case ie.UNAVAILABLE:case ie.UNAUTHENTICATED:return!1;case ie.INVALID_ARGUMENT:case ie.NOT_FOUND:case ie.ALREADY_EXISTS:case ie.PERMISSION_DENIED:case ie.FAILED_PRECONDITION:case ie.ABORTED:case ie.OUT_OF_RANGE:case ie.UNIMPLEMENTED:case ie.DATA_LOSS:return!0;default:return Te(15467,{code:n})}}function Fw(n){if(n===void 0)return or("GRPC error has no .code"),ie.UNKNOWN;switch(n){case Ct.OK:return ie.OK;case Ct.CANCELLED:return ie.CANCELLED;case Ct.UNKNOWN:return ie.UNKNOWN;case Ct.DEADLINE_EXCEEDED:return ie.DEADLINE_EXCEEDED;case Ct.RESOURCE_EXHAUSTED:return ie.RESOURCE_EXHAUSTED;case Ct.INTERNAL:return ie.INTERNAL;case Ct.UNAVAILABLE:return ie.UNAVAILABLE;case Ct.UNAUTHENTICATED:return ie.UNAUTHENTICATED;case Ct.INVALID_ARGUMENT:return ie.INVALID_ARGUMENT;case Ct.NOT_FOUND:return ie.NOT_FOUND;case Ct.ALREADY_EXISTS:return ie.ALREADY_EXISTS;case Ct.PERMISSION_DENIED:return ie.PERMISSION_DENIED;case Ct.FAILED_PRECONDITION:return ie.FAILED_PRECONDITION;case Ct.ABORTED:return ie.ABORTED;case Ct.OUT_OF_RANGE:return ie.OUT_OF_RANGE;case Ct.UNIMPLEMENTED:return ie.UNIMPLEMENTED;case Ct.DATA_LOSS:return ie.DATA_LOSS;default:return Te(39323,{code:n})}}($e=Ct||(Ct={}))[$e.OK=0]="OK",$e[$e.CANCELLED=1]="CANCELLED",$e[$e.UNKNOWN=2]="UNKNOWN",$e[$e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$e[$e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$e[$e.NOT_FOUND=5]="NOT_FOUND",$e[$e.ALREADY_EXISTS=6]="ALREADY_EXISTS",$e[$e.PERMISSION_DENIED=7]="PERMISSION_DENIED",$e[$e.UNAUTHENTICATED=16]="UNAUTHENTICATED",$e[$e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$e[$e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$e[$e.ABORTED=10]="ABORTED",$e[$e.OUT_OF_RANGE=11]="OUT_OF_RANGE",$e[$e.UNIMPLEMENTED=12]="UNIMPLEMENTED",$e[$e.INTERNAL=13]="INTERNAL",$e[$e.UNAVAILABLE=14]="UNAVAILABLE",$e[$e.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const $3=new Zr([4294967295,4294967295],0);function zv(n){const e=z3().encode(n),i=new nw;return i.update(e),new Uint8Array(i.digest())}function $v(n){const e=new DataView(n.buffer),i=e.getUint32(0,!0),a=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new Zr([i,a],0),new Zr([o,u],0)]}class Tg{constructor(e,i,a){if(this.bitmap=e,this.padding=i,this.hashCount=a,i<0||i>=8)throw new $l(`Invalid padding: ${i}`);if(a<0)throw new $l(`Invalid hash count: ${a}`);if(e.length>0&&this.hashCount===0)throw new $l(`Invalid hash count: ${a}`);if(e.length===0&&i!==0)throw new $l(`Invalid padding when bitmap length is 0: ${i}`);this.ge=8*e.length-i,this.pe=Zr.fromNumber(this.ge)}ye(e,i,a){let o=e.add(i.multiply(Zr.fromNumber(a)));return o.compare($3)===1&&(o=new Zr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const i=zv(e),[a,o]=$v(i);for(let u=0;u<this.hashCount;u++){const d=this.ye(a,o,u);if(!this.we(d))return!1}return!0}static create(e,i,a){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),d=new Tg(u,o,i);return a.forEach((p=>d.insert(p))),d}insert(e){if(this.ge===0)return;const i=zv(e),[a,o]=$v(i);for(let u=0;u<this.hashCount;u++){const d=this.ye(a,o,u);this.Se(d)}}Se(e){const i=Math.floor(e/8),a=e%8;this.bitmap[i]|=1<<a}}class $l extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e,i,a,o,u){this.snapshotVersion=e,this.targetChanges=i,this.targetMismatches=a,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,i,a){const o=new Map;return o.set(e,xu.createSynthesizedTargetChangeForCurrentChange(e,i,a)),new ad(Ae.min(),o,new mt(Pe),ur(),Ue())}}class xu{constructor(e,i,a,o,u){this.resumeToken=e,this.current=i,this.addedDocuments=a,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,i,a){return new xu(a,i,Ue(),Ue(),Ue())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e,i,a,o){this.be=e,this.removedTargetIds=i,this.key=a,this.De=o}}class Kw{constructor(e,i){this.targetId=e,this.Ce=i}}class Hw{constructor(e,i,a=Jt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=i,this.resumeToken=a,this.cause=o}}class Bv{constructor(){this.ve=0,this.Fe=Fv(),this.Me=Jt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ue(),i=Ue(),a=Ue();return this.Fe.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:i=i.add(o);break;case 1:a=a.add(o);break;default:Te(38017,{changeType:u})}})),new xu(this.Me,this.xe,e,i,a)}qe(){this.Oe=!1,this.Fe=Fv()}Qe(e,i){this.Oe=!0,this.Fe=this.Fe.insert(e,i)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ye(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class B3{constructor(e){this.Ge=e,this.ze=new Map,this.je=ur(),this.Je=Jc(),this.He=Jc(),this.Ye=new mt(Pe)}Ze(e){for(const i of e.be)e.De&&e.De.isFoundDocument()?this.Xe(i,e.De):this.et(i,e.key,e.De);for(const i of e.removedTargetIds)this.et(i,e.key,e.De)}tt(e){this.forEachTarget(e,(i=>{const a=this.nt(i);switch(e.state){case 0:this.rt(i)&&a.Le(e.resumeToken);break;case 1:a.Ke(),a.Ne||a.qe(),a.Le(e.resumeToken);break;case 2:a.Ke(),a.Ne||this.removeTarget(i);break;case 3:this.rt(i)&&(a.We(),a.Le(e.resumeToken));break;case 4:this.rt(i)&&(this.it(i),a.Le(e.resumeToken));break;default:Te(56790,{state:e.state})}}))}forEachTarget(e,i){e.targetIds.length>0?e.targetIds.forEach(i):this.ze.forEach(((a,o)=>{this.rt(o)&&i(o)}))}st(e){const i=e.targetId,a=e.Ce.count,o=this.ot(i);if(o){const u=o.target;if(bm(u))if(a===0){const d=new ve(u.path);this.et(i,d,on.newNoDocument(d,Ae.min()))}else Ye(a===1,20013,{expectedCount:a});else{const d=this._t(i);if(d!==a){const p=this.ut(e),m=p?this.ct(p,e,d):1;if(m!==0){this.it(i);const g=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(i,g)}}}}}ut(e){const i=e.Ce.unchangedNames;if(!i||!i.bits)return null;const{bits:{bitmap:a="",padding:o=0},hashCount:u=0}=i;let d,p;try{d=na(a).toUint8Array()}catch(m){if(m instanceof pw)return co("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{p=new Tg(d,o,u)}catch(m){return co(m instanceof $l?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return p.ge===0?null:p}ct(e,i,a){return i.Ce.count===a-this.Pt(e,i.targetId)?0:2}Pt(e,i){const a=this.Ge.getRemoteKeysForTarget(i);let o=0;return a.forEach((u=>{const d=this.Ge.ht(),p=`projects/${d.projectId}/databases/${d.database}/documents/${u.path.canonicalString()}`;e.mightContain(p)||(this.et(i,u,null),o++)})),o}Tt(e){const i=new Map;this.ze.forEach(((u,d)=>{const p=this.ot(d);if(p){if(u.current&&bm(p.target)){const m=new ve(p.target.path);this.It(m).has(d)||this.Et(d,m)||this.et(d,m,on.newNoDocument(m,e))}u.Be&&(i.set(d,u.ke()),u.qe())}}));let a=Ue();this.He.forEach(((u,d)=>{let p=!0;d.forEachWhile((m=>{const g=this.ot(m);return!g||g.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)})),p&&(a=a.add(u))})),this.je.forEach(((u,d)=>d.setReadTime(e)));const o=new ad(e,i,this.Ye,this.je,a);return this.je=ur(),this.Je=Jc(),this.He=Jc(),this.Ye=new mt(Pe),o}Xe(e,i){if(!this.rt(e))return;const a=this.Et(e,i.key)?2:0;this.nt(e).Qe(i.key,a),this.je=this.je.insert(i.key,i),this.Je=this.Je.insert(i.key,this.It(i.key).add(e)),this.He=this.He.insert(i.key,this.dt(i.key).add(e))}et(e,i,a){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,i)?o.Qe(i,1):o.$e(i),this.He=this.He.insert(i,this.dt(i).delete(e)),this.He=this.He.insert(i,this.dt(i).add(e)),a&&(this.je=this.je.insert(i,a))}removeTarget(e){this.ze.delete(e)}_t(e){const i=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+i.addedDocuments.size-i.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let i=this.ze.get(e);return i||(i=new Bv,this.ze.set(e,i)),i}dt(e){let i=this.He.get(e);return i||(i=new Lt(Pe),this.He=this.He.insert(e,i)),i}It(e){let i=this.Je.get(e);return i||(i=new Lt(Pe),this.Je=this.Je.insert(e,i)),i}rt(e){const i=this.ot(e)!==null;return i||pe("WatchChangeAggregator","Detected inactive target",e),i}ot(e){const i=this.ze.get(e);return i&&i.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Bv),this.Ge.getRemoteKeysForTarget(e).forEach((i=>{this.et(e,i,null)}))}Et(e,i){return this.Ge.getRemoteKeysForTarget(e).has(i)}}function Jc(){return new mt(ve.comparator)}function Fv(){return new mt(ve.comparator)}const F3={asc:"ASCENDING",desc:"DESCENDING"},K3={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},H3={and:"AND",or:"OR"};class q3{constructor(e,i){this.databaseId=e,this.useProto3Json=i}}function Am(n,e){return n.useProto3Json||Jh(e)?e:{value:e}}function kh(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function qw(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function G3(n,e){return kh(n,e.toTimestamp())}function Ai(n){return Ye(!!n,49232),Ae.fromTimestamp((function(i){const a=ta(i);return new ut(a.seconds,a.nanos)})(n))}function Sg(n,e){return Rm(n,e).canonicalString()}function Rm(n,e){const i=(function(o){return new at(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?i:i.child(e)}function Gw(n){const e=at.fromString(n);return Ye(Zw(e),10190,{key:e.toString()}),e}function Im(n,e){return Sg(n.databaseId,e.path)}function Vp(n,e){const i=Gw(e);if(i.get(1)!==n.databaseId.projectId)throw new fe(ie.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+i.get(1)+" vs "+n.databaseId.projectId);if(i.get(3)!==n.databaseId.database)throw new fe(ie.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+i.get(3)+" vs "+n.databaseId.database);return new ve(Qw(i))}function Yw(n,e){return Sg(n.databaseId,e)}function Y3(n){const e=Gw(n);return e.length===4?at.emptyPath():Qw(e)}function Cm(n){return new at(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Qw(n){return Ye(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Kv(n,e,i){return{name:Im(n,e),fields:i.value.mapValue.fields}}function Q3(n,e){let i;if("targetChange"in e){e.targetChange;const a=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Te(39313,{state:g})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(g,v){return g.useProto3Json?(Ye(v===void 0||typeof v=="string",58123),Jt.fromBase64String(v||"")):(Ye(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),Jt.fromUint8Array(v||new Uint8Array))})(n,e.targetChange.resumeToken),d=e.targetChange.cause,p=d&&(function(g){const v=g.code===void 0?ie.UNKNOWN:Fw(g.code);return new fe(v,g.message||"")})(d);i=new Hw(a,o,u,p||null)}else if("documentChange"in e){e.documentChange;const a=e.documentChange;a.document,a.document.name,a.document.updateTime;const o=Vp(n,a.document.name),u=Ai(a.document.updateTime),d=a.document.createTime?Ai(a.document.createTime):Ae.min(),p=new vn({mapValue:{fields:a.document.fields}}),m=on.newFoundDocument(o,u,d,p),g=a.targetIds||[],v=a.removedTargetIds||[];i=new yh(g,v,m.key,m)}else if("documentDelete"in e){e.documentDelete;const a=e.documentDelete;a.document;const o=Vp(n,a.document),u=a.readTime?Ai(a.readTime):Ae.min(),d=on.newNoDocument(o,u),p=a.removedTargetIds||[];i=new yh([],p,d.key,d)}else if("documentRemove"in e){e.documentRemove;const a=e.documentRemove;a.document;const o=Vp(n,a.document),u=a.removedTargetIds||[];i=new yh([],u,o,null)}else{if(!("filter"in e))return Te(11601,{Rt:e});{e.filter;const a=e.filter;a.targetId;const{count:o=0,unchangedNames:u}=a,d=new U3(o,u),p=a.targetId;i=new Kw(p,d)}}return i}function X3(n,e){let i;if(e instanceof yu)i={update:Kv(n,e.key,e.value)};else if(e instanceof Bw)i={delete:Im(n,e.key)};else if(e instanceof oa)i={update:Kv(n,e.key,e.data),updateMask:aC(e.fieldMask)};else{if(!(e instanceof k3))return Te(16599,{Vt:e.type});i={verify:Im(n,e.key)}}return e.fieldTransforms.length>0&&(i.updateTransforms=e.fieldTransforms.map((a=>(function(u,d){const p=d.transform;if(p instanceof Oh)return{fieldPath:d.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof cu)return{fieldPath:d.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof hu)return{fieldPath:d.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof du)return{fieldPath:d.field.canonicalString(),increment:p.Ae};throw Te(20930,{transform:d.transform})})(0,a)))),e.precondition.isNone||(i.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:G3(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:Te(27497)})(n,e.precondition)),i}function W3(n,e){return n&&n.length>0?(Ye(e!==void 0,14353),n.map((i=>(function(o,u){let d=o.updateTime?Ai(o.updateTime):Ai(u);return d.isEqual(Ae.min())&&(d=Ai(u)),new N3(d,o.transformResults||[])})(i,e)))):[]}function Z3(n,e){return{documents:[Yw(n,e.path)]}}function J3(n,e){const i={structuredQuery:{}},a=e.path;let o;e.collectionGroup!==null?(o=a,i.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=a.popLast(),i.structuredQuery.from=[{collectionId:a.lastSegment()}]),i.parent=Yw(n,o);const u=(function(g){if(g.length!==0)return Ww(ai.create(g,"and"))})(e.filters);u&&(i.structuredQuery.where=u);const d=(function(g){if(g.length!==0)return g.map((v=>(function(T){return{field:Zs(T.field),direction:nC(T.dir)}})(v)))})(e.orderBy);d&&(i.structuredQuery.orderBy=d);const p=Am(n,e.limit);return p!==null&&(i.structuredQuery.limit=p),e.startAt&&(i.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(e.startAt)),e.endAt&&(i.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(e.endAt)),{ft:i,parent:o}}function eC(n){let e=Y3(n.parent);const i=n.structuredQuery,a=i.from?i.from.length:0;let o=null;if(a>0){Ye(a===1,65062);const v=i.from[0];v.allDescendants?o=v.collectionId:e=e.child(v.collectionId)}let u=[];i.where&&(u=(function(E){const T=Xw(E);return T instanceof ai&&Tw(T)?T.getFilters():[T]})(i.where));let d=[];i.orderBy&&(d=(function(E){return E.map((T=>(function(M){return new uu(Js(M.field),(function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(M.direction))})(T)))})(i.orderBy));let p=null;i.limit&&(p=(function(E){let T;return T=typeof E=="object"?E.value:E,Jh(T)?null:T})(i.limit));let m=null;i.startAt&&(m=(function(E){const T=!!E.before,A=E.values||[];return new Mh(A,T)})(i.startAt));let g=null;return i.endAt&&(g=(function(E){const T=!E.before,A=E.values||[];return new Mh(A,T)})(i.endAt)),v3(e,o,d,u,p,"F",m,g)}function tC(n,e){const i=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te(28987,{purpose:o})}})(e.purpose);return i==null?null:{"goog-listen-tags":i}}function Xw(n){return n.unaryFilter!==void 0?(function(i){switch(i.unaryFilter.op){case"IS_NAN":const a=Js(i.unaryFilter.field);return Dt.create(a,"==",{doubleValue:NaN});case"IS_NULL":const o=Js(i.unaryFilter.field);return Dt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Js(i.unaryFilter.field);return Dt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const d=Js(i.unaryFilter.field);return Dt.create(d,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Te(61313);default:return Te(60726)}})(n):n.fieldFilter!==void 0?(function(i){return Dt.create(Js(i.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Te(58110);default:return Te(50506)}})(i.fieldFilter.op),i.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(i){return ai.create(i.compositeFilter.filters.map((a=>Xw(a))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Te(1026)}})(i.compositeFilter.op))})(n):Te(30097,{filter:n})}function nC(n){return F3[n]}function iC(n){return K3[n]}function rC(n){return H3[n]}function Zs(n){return{fieldPath:n.canonicalString()}}function Js(n){return Zt.fromServerFormat(n.fieldPath)}function Ww(n){return n instanceof Dt?(function(i){if(i.op==="=="){if(Dv(i.value))return{unaryFilter:{field:Zs(i.field),op:"IS_NAN"}};if(jv(i.value))return{unaryFilter:{field:Zs(i.field),op:"IS_NULL"}}}else if(i.op==="!="){if(Dv(i.value))return{unaryFilter:{field:Zs(i.field),op:"IS_NOT_NAN"}};if(jv(i.value))return{unaryFilter:{field:Zs(i.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zs(i.field),op:iC(i.op),value:i.value}}})(n):n instanceof ai?(function(i){const a=i.getFilters().map((o=>Ww(o)));return a.length===1?a[0]:{compositeFilter:{op:rC(i.op),filters:a}}})(n):Te(54877,{filter:n})}function aC(n){const e=[];return n.fields.forEach((i=>e.push(i.canonicalString()))),{fieldPaths:e}}function Zw(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,i,a,o,u=Ae.min(),d=Ae.min(),p=Jt.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=i,this.purpose=a,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=d,this.resumeToken=p,this.expectedCount=m}withSequenceNumber(e){return new Qr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,i){return new Qr(this.target,this.targetId,this.purpose,this.sequenceNumber,i,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e){this.yt=e}}function oC(n){const e=eC({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Sm(e,e.limit,"L"):e}/**
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
 */class lC{constructor(){this.Cn=new uC}addToCollectionParentIndex(e,i){return this.Cn.add(i),se.resolve()}getCollectionParents(e,i){return se.resolve(this.Cn.getEntries(i))}addFieldIndex(e,i){return se.resolve()}deleteFieldIndex(e,i){return se.resolve()}deleteAllFieldIndexes(e){return se.resolve()}createTargetIndexes(e,i){return se.resolve()}getDocumentsMatchingTarget(e,i){return se.resolve(null)}getIndexType(e,i){return se.resolve(0)}getFieldIndexes(e,i){return se.resolve([])}getNextCollectionGroupToUpdate(e){return se.resolve(null)}getMinOffset(e,i){return se.resolve(ea.min())}getMinOffsetFromCollectionGroup(e,i){return se.resolve(ea.min())}updateCollectionGroup(e,i,a){return se.resolve()}updateIndexEntries(e,i){return se.resolve()}}class uC{constructor(){this.index={}}add(e){const i=e.lastSegment(),a=e.popLast(),o=this.index[i]||new Lt(at.comparator),u=!o.has(a);return this.index[i]=o.add(a),u}has(e){const i=e.lastSegment(),a=e.popLast(),o=this.index[i];return o&&o.has(a)}getEntries(e){return(this.index[e]||new Lt(at.comparator)).toArray()}}/**
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
 */const Hv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Jw=41943040;class xn{static withCacheSize(e){return new xn(e,xn.DEFAULT_COLLECTION_PERCENTILE,xn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,i,a){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=i,this.maximumSequenceNumbersToCollect=a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class mo{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new mo(0)}static cr(){return new mo(-1)}}/**
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
 */const qv="LruGarbageCollector",cC=1048576;function Gv([n,e],[i,a]){const o=Pe(n,i);return o===0?Pe(e,a):o}class hC{constructor(e){this.Ir=e,this.buffer=new Lt(Gv),this.Er=0}dr(){return++this.Er}Ar(e){const i=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(i);else{const a=this.buffer.last();Gv(i,a)<0&&(this.buffer=this.buffer.delete(a).add(i))}}get maxValue(){return this.buffer.last()[0]}}class dC{constructor(e,i,a){this.garbageCollector=e,this.asyncQueue=i,this.localStore=a,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){pe(qv,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(i){So(i)?pe(qv,"Ignoring IndexedDB error during garbage collection: ",i):await To(i)}await this.Vr(3e5)}))}}class fC{constructor(e,i){this.mr=e,this.params=i}calculateTargetCount(e,i){return this.mr.gr(e).next((a=>Math.floor(i/100*a)))}nthSequenceNumber(e,i){if(i===0)return se.resolve(Zh.ce);const a=new hC(i);return this.mr.forEachTarget(e,(o=>a.Ar(o.sequenceNumber))).next((()=>this.mr.pr(e,(o=>a.Ar(o))))).next((()=>a.maxValue))}removeTargets(e,i,a){return this.mr.removeTargets(e,i,a)}removeOrphanedDocuments(e,i){return this.mr.removeOrphanedDocuments(e,i)}collect(e,i){return this.params.cacheSizeCollectionThreshold===-1?(pe("LruGarbageCollector","Garbage collection skipped; disabled"),se.resolve(Hv)):this.getCacheSize(e).next((a=>a<this.params.cacheSizeCollectionThreshold?(pe("LruGarbageCollector",`Garbage collection skipped; Cache size ${a} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Hv):this.yr(e,i)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,i){let a,o,u,d,p,m,g;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((E=>(E>this.params.maximumSequenceNumbersToCollect?(pe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),o=this.params.maximumSequenceNumbersToCollect):o=E,d=Date.now(),this.nthSequenceNumber(e,o)))).next((E=>(a=E,p=Date.now(),this.removeTargets(e,a,i)))).next((E=>(u=E,m=Date.now(),this.removeOrphanedDocuments(e,a)))).next((E=>(g=Date.now(),Xs()<=Be.DEBUG&&pe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${d-v}ms
	Determined least recently used ${o} in `+(p-d)+`ms
	Removed ${u} targets in `+(m-p)+`ms
	Removed ${E} documents in `+(g-m)+`ms
Total Duration: ${g-v}ms`),se.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:E}))))}}function pC(n,e){return new fC(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(){this.changes=new ts((e=>e.toString()),((e,i)=>e.isEqual(i))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,i){this.assertNotApplied(),this.changes.set(e,on.newInvalidDocument(e).setReadTime(i))}getEntry(e,i){this.assertNotApplied();const a=this.changes.get(i);return a!==void 0?se.resolve(a):this.getFromCache(e,i)}getEntries(e,i){return this.getAllFromCache(e,i)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class gC{constructor(e,i){this.overlayedDocument=e,this.mutatedFields=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(e,i,a,o){this.remoteDocumentCache=e,this.mutationQueue=i,this.documentOverlayCache=a,this.indexManager=o}getDocument(e,i){let a=null;return this.documentOverlayCache.getOverlay(e,i).next((o=>(a=o,this.remoteDocumentCache.getEntry(e,i)))).next((o=>(a!==null&&Ql(a.mutation,o,jn.empty(),ut.now()),o)))}getDocuments(e,i){return this.remoteDocumentCache.getEntries(e,i).next((a=>this.getLocalViewOfDocuments(e,a,Ue()).next((()=>a))))}getLocalViewOfDocuments(e,i,a=Ue()){const o=Ga();return this.populateOverlays(e,o,i).next((()=>this.computeViews(e,i,o,a).next((u=>{let d=zl();return u.forEach(((p,m)=>{d=d.insert(p,m.overlayedDocument)})),d}))))}getOverlayedDocuments(e,i){const a=Ga();return this.populateOverlays(e,a,i).next((()=>this.computeViews(e,i,a,Ue())))}populateOverlays(e,i,a){const o=[];return a.forEach((u=>{i.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((d,p)=>{i.set(d,p)}))}))}computeViews(e,i,a,o){let u=ur();const d=Yl(),p=(function(){return Yl()})();return i.forEach(((m,g)=>{const v=a.get(g.key);o.has(g.key)&&(v===void 0||v.mutation instanceof oa)?u=u.insert(g.key,g):v!==void 0?(d.set(g.key,v.mutation.getFieldMask()),Ql(v.mutation,g,v.mutation.getFieldMask(),ut.now())):d.set(g.key,jn.empty())})),this.recalculateAndSaveOverlays(e,u).next((m=>(m.forEach(((g,v)=>d.set(g,v))),i.forEach(((g,v)=>p.set(g,new gC(v,d.get(g)??null)))),p)))}recalculateAndSaveOverlays(e,i){const a=Yl();let o=new mt(((d,p)=>d-p)),u=Ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,i).next((d=>{for(const p of d)p.keys().forEach((m=>{const g=i.get(m);if(g===null)return;let v=a.get(m)||jn.empty();v=p.applyToLocalView(g,v),a.set(m,v);const E=(o.get(p.batchId)||Ue()).add(m);o=o.insert(p.batchId,E)}))})).next((()=>{const d=[],p=o.getReverseIterator();for(;p.hasNext();){const m=p.getNext(),g=m.key,v=m.value,E=Mw();v.forEach((T=>{if(!u.has(T)){const A=zw(i.get(T),a.get(T));A!==null&&E.set(T,A),u=u.add(T)}})),d.push(this.documentOverlayCache.saveOverlays(e,g,E))}return se.waitFor(d)})).next((()=>a))}recalculateAndSaveOverlaysForDocumentKeys(e,i){return this.remoteDocumentCache.getEntries(e,i).next((a=>this.recalculateAndSaveOverlays(e,a)))}getDocumentsMatchingQuery(e,i,a,o){return(function(d){return ve.isDocumentKey(d.path)&&d.collectionGroup===null&&d.filters.length===0})(i)?this.getDocumentsMatchingDocumentQuery(e,i.path):Iw(i)?this.getDocumentsMatchingCollectionGroupQuery(e,i,a,o):this.getDocumentsMatchingCollectionQuery(e,i,a,o)}getNextDocuments(e,i,a,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,i,a,o).next((u=>{const d=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,i,a.largestBatchId,o-u.size):se.resolve(Ga());let p=au,m=u;return d.next((g=>se.forEach(g,((v,E)=>(p<E.largestBatchId&&(p=E.largestBatchId),u.get(v)?se.resolve():this.remoteDocumentCache.getEntry(e,v).next((T=>{m=m.insert(v,T)}))))).next((()=>this.populateOverlays(e,g,u))).next((()=>this.computeViews(e,m,g,Ue()))).next((v=>({batchId:p,changes:Nw(v)})))))}))}getDocumentsMatchingDocumentQuery(e,i){return this.getDocument(e,new ve(i)).next((a=>{let o=zl();return a.isFoundDocument()&&(o=o.insert(a.key,a)),o}))}getDocumentsMatchingCollectionGroupQuery(e,i,a,o){const u=i.collectionGroup;let d=zl();return this.indexManager.getCollectionParents(e,u).next((p=>se.forEach(p,(m=>{const g=(function(E,T){return new Ao(T,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)})(i,m.child(u));return this.getDocumentsMatchingCollectionQuery(e,g,a,o).next((v=>{v.forEach(((E,T)=>{d=d.insert(E,T)}))}))})).next((()=>d))))}getDocumentsMatchingCollectionQuery(e,i,a,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,i.path,a.largestBatchId).next((d=>(u=d,this.remoteDocumentCache.getDocumentsMatchingQuery(e,i,a,u,o)))).next((d=>{u.forEach(((m,g)=>{const v=g.getKey();d.get(v)===null&&(d=d.insert(v,on.newInvalidDocument(v)))}));let p=zl();return d.forEach(((m,g)=>{const v=u.get(m);v!==void 0&&Ql(v.mutation,g,jn.empty(),ut.now()),nd(i,g)&&(p=p.insert(m,g))})),p}))}}/**
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
 */class xC{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,i){return se.resolve(this.Lr.get(i))}saveBundleMetadata(e,i){return this.Lr.set(i.id,(function(o){return{id:o.id,version:o.version,createTime:Ai(o.createTime)}})(i)),se.resolve()}getNamedQuery(e,i){return se.resolve(this.kr.get(i))}saveNamedQuery(e,i){return this.kr.set(i.name,(function(o){return{name:o.name,query:oC(o.bundledQuery),readTime:Ai(o.readTime)}})(i)),se.resolve()}}/**
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
 */class vC{constructor(){this.overlays=new mt(ve.comparator),this.qr=new Map}getOverlay(e,i){return se.resolve(this.overlays.get(i))}getOverlays(e,i){const a=Ga();return se.forEach(i,(o=>this.getOverlay(e,o).next((u=>{u!==null&&a.set(o,u)})))).next((()=>a))}saveOverlays(e,i,a){return a.forEach(((o,u)=>{this.St(e,i,u)})),se.resolve()}removeOverlaysForBatchId(e,i,a){const o=this.qr.get(a);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.qr.delete(a)),se.resolve()}getOverlaysForCollection(e,i,a){const o=Ga(),u=i.length+1,d=new ve(i.child("")),p=this.overlays.getIteratorFrom(d);for(;p.hasNext();){const m=p.getNext().value,g=m.getKey();if(!i.isPrefixOf(g.path))break;g.path.length===u&&m.largestBatchId>a&&o.set(m.getKey(),m)}return se.resolve(o)}getOverlaysForCollectionGroup(e,i,a,o){let u=new mt(((g,v)=>g-v));const d=this.overlays.getIterator();for(;d.hasNext();){const g=d.getNext().value;if(g.getKey().getCollectionGroup()===i&&g.largestBatchId>a){let v=u.get(g.largestBatchId);v===null&&(v=Ga(),u=u.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const p=Ga(),m=u.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach(((g,v)=>p.set(g,v))),!(p.size()>=o)););return se.resolve(p)}St(e,i,a){const o=this.overlays.get(a.key);if(o!==null){const d=this.qr.get(o.largestBatchId).delete(a.key);this.qr.set(o.largestBatchId,d)}this.overlays=this.overlays.insert(a.key,new P3(i,a));let u=this.qr.get(i);u===void 0&&(u=Ue(),this.qr.set(i,u)),this.qr.set(i,u.add(a.key))}}/**
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
 */class _C{constructor(){this.sessionToken=Jt.EMPTY_BYTE_STRING}getSessionToken(e){return se.resolve(this.sessionToken)}setSessionToken(e,i){return this.sessionToken=i,se.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(){this.Qr=new Lt(Ht.$r),this.Ur=new Lt(Ht.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,i){const a=new Ht(e,i);this.Qr=this.Qr.add(a),this.Ur=this.Ur.add(a)}Wr(e,i){e.forEach((a=>this.addReference(a,i)))}removeReference(e,i){this.Gr(new Ht(e,i))}zr(e,i){e.forEach((a=>this.removeReference(a,i)))}jr(e){const i=new ve(new at([])),a=new Ht(i,e),o=new Ht(i,e+1),u=[];return this.Ur.forEachInRange([a,o],(d=>{this.Gr(d),u.push(d.key)})),u}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const i=new ve(new at([])),a=new Ht(i,e),o=new Ht(i,e+1);let u=Ue();return this.Ur.forEachInRange([a,o],(d=>{u=u.add(d.key)})),u}containsKey(e){const i=new Ht(e,0),a=this.Qr.firstAfterOrEqual(i);return a!==null&&e.isEqual(a.key)}}class Ht{constructor(e,i){this.key=e,this.Yr=i}static $r(e,i){return ve.comparator(e.key,i.key)||Pe(e.Yr,i.Yr)}static Kr(e,i){return Pe(e.Yr,i.Yr)||ve.comparator(e.key,i.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e,i){this.indexManager=e,this.referenceDelegate=i,this.mutationQueue=[],this.tr=1,this.Zr=new Lt(Ht.$r)}checkEmpty(e){return se.resolve(this.mutationQueue.length===0)}addMutationBatch(e,i,a,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const d=new V3(u,i,a,o);this.mutationQueue.push(d);for(const p of o)this.Zr=this.Zr.add(new Ht(p.key,u)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return se.resolve(d)}lookupMutationBatch(e,i){return se.resolve(this.Xr(i))}getNextMutationBatchAfterBatchId(e,i){const a=i+1,o=this.ei(a),u=o<0?0:o;return se.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return se.resolve(this.mutationQueue.length===0?gg:this.tr-1)}getAllMutationBatches(e){return se.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,i){const a=new Ht(i,0),o=new Ht(i,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([a,o],(d=>{const p=this.Xr(d.Yr);u.push(p)})),se.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,i){let a=new Lt(Pe);return i.forEach((o=>{const u=new Ht(o,0),d=new Ht(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,d],(p=>{a=a.add(p.Yr)}))})),se.resolve(this.ti(a))}getAllMutationBatchesAffectingQuery(e,i){const a=i.path,o=a.length+1;let u=a;ve.isDocumentKey(u)||(u=u.child(""));const d=new Ht(new ve(u),0);let p=new Lt(Pe);return this.Zr.forEachWhile((m=>{const g=m.key.path;return!!a.isPrefixOf(g)&&(g.length===o&&(p=p.add(m.Yr)),!0)}),d),se.resolve(this.ti(p))}ti(e){const i=[];return e.forEach((a=>{const o=this.Xr(a);o!==null&&i.push(o)})),i}removeMutationBatch(e,i){Ye(this.ni(i.batchId,"removed")===0,55003),this.mutationQueue.shift();let a=this.Zr;return se.forEach(i.mutations,(o=>{const u=new Ht(o.key,i.batchId);return a=a.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Zr=a}))}ir(e){}containsKey(e,i){const a=new Ht(i,0),o=this.Zr.firstAfterOrEqual(a);return se.resolve(i.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,se.resolve()}ni(e,i){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const i=this.ei(e);return i<0||i>=this.mutationQueue.length?null:this.mutationQueue[i]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e){this.ri=e,this.docs=(function(){return new mt(ve.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,i){const a=i.key,o=this.docs.get(a),u=o?o.size:0,d=this.ri(i);return this.docs=this.docs.insert(a,{document:i.mutableCopy(),size:d}),this.size+=d-u,this.indexManager.addToCollectionParentIndex(e,a.path.popLast())}removeEntry(e){const i=this.docs.get(e);i&&(this.docs=this.docs.remove(e),this.size-=i.size)}getEntry(e,i){const a=this.docs.get(i);return se.resolve(a?a.document.mutableCopy():on.newInvalidDocument(i))}getEntries(e,i){let a=ur();return i.forEach((o=>{const u=this.docs.get(o);a=a.insert(o,u?u.document.mutableCopy():on.newInvalidDocument(o))})),se.resolve(a)}getDocumentsMatchingQuery(e,i,a,o){let u=ur();const d=i.path,p=new ve(d.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(p);for(;m.hasNext();){const{key:g,value:{document:v}}=m.getNext();if(!d.isPrefixOf(g.path))break;g.path.length>d.length+1||WI(XI(v),a)<=0||(o.has(v.key)||nd(i,v))&&(u=u.insert(v.key,v.mutableCopy()))}return se.resolve(u)}getAllFromCollectionGroup(e,i,a,o){Te(9500)}ii(e,i){return se.forEach(this.docs,(a=>i(a)))}newChangeBuffer(e){return new bC(this)}getSize(e){return se.resolve(this.size)}}class bC extends mC{constructor(e){super(),this.Nr=e}applyChanges(e){const i=[];return this.changes.forEach(((a,o)=>{o.isValidDocument()?i.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(a)})),se.waitFor(i)}getFromCache(e,i){return this.Nr.getEntry(e,i)}getAllFromCache(e,i){return this.Nr.getEntries(e,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e){this.persistence=e,this.si=new ts((i=>vg(i)),_g),this.lastRemoteSnapshotVersion=Ae.min(),this.highestTargetId=0,this.oi=0,this._i=new Ag,this.targetCount=0,this.ai=mo.ur()}forEachTarget(e,i){return this.si.forEach(((a,o)=>i(o))),se.resolve()}getLastRemoteSnapshotVersion(e){return se.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return se.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),se.resolve(this.highestTargetId)}setTargetsMetadata(e,i,a){return a&&(this.lastRemoteSnapshotVersion=a),i>this.oi&&(this.oi=i),se.resolve()}Pr(e){this.si.set(e.target,e);const i=e.targetId;i>this.highestTargetId&&(this.ai=new mo(i),this.highestTargetId=i),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,i){return this.Pr(i),this.targetCount+=1,se.resolve()}updateTargetData(e,i){return this.Pr(i),se.resolve()}removeTargetData(e,i){return this.si.delete(i.target),this._i.jr(i.targetId),this.targetCount-=1,se.resolve()}removeTargets(e,i,a){let o=0;const u=[];return this.si.forEach(((d,p)=>{p.sequenceNumber<=i&&a.get(p.targetId)===null&&(this.si.delete(d),u.push(this.removeMatchingKeysForTargetId(e,p.targetId)),o++)})),se.waitFor(u).next((()=>o))}getTargetCount(e){return se.resolve(this.targetCount)}getTargetData(e,i){const a=this.si.get(i)||null;return se.resolve(a)}addMatchingKeys(e,i,a){return this._i.Wr(i,a),se.resolve()}removeMatchingKeys(e,i,a){this._i.zr(i,a);const o=this.persistence.referenceDelegate,u=[];return o&&i.forEach((d=>{u.push(o.markPotentiallyOrphaned(e,d))})),se.waitFor(u)}removeMatchingKeysForTargetId(e,i){return this._i.jr(i),se.resolve()}getMatchingKeysForTargetId(e,i){const a=this._i.Hr(i);return se.resolve(a)}containsKey(e,i){return se.resolve(this._i.containsKey(i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e,i){this.ui={},this.overlays={},this.ci=new Zh(0),this.li=!1,this.li=!0,this.hi=new _C,this.referenceDelegate=e(this),this.Pi=new TC(this),this.indexManager=new lC,this.remoteDocumentCache=(function(o){return new EC(o)})((a=>this.referenceDelegate.Ti(a))),this.serializer=new sC(i),this.Ii=new xC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let i=this.overlays[e.toKey()];return i||(i=new vC,this.overlays[e.toKey()]=i),i}getMutationQueue(e,i){let a=this.ui[e.toKey()];return a||(a=new wC(i,this.referenceDelegate),this.ui[e.toKey()]=a),a}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,i,a){pe("MemoryPersistence","Starting transaction:",e);const o=new SC(this.ci.next());return this.referenceDelegate.Ei(),a(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ai(e,i){return se.or(Object.values(this.ui).map((a=>()=>a.containsKey(e,i))))}}class SC extends JI{constructor(e){super(),this.currentSequenceNumber=e}}class Rg{constructor(e){this.persistence=e,this.Ri=new Ag,this.Vi=null}static mi(e){return new Rg(e)}get fi(){if(this.Vi)return this.Vi;throw Te(60996)}addReference(e,i,a){return this.Ri.addReference(a,i),this.fi.delete(a.toString()),se.resolve()}removeReference(e,i,a){return this.Ri.removeReference(a,i),this.fi.add(a.toString()),se.resolve()}markPotentiallyOrphaned(e,i){return this.fi.add(i.toString()),se.resolve()}removeTarget(e,i){this.Ri.jr(i.targetId).forEach((o=>this.fi.add(o.toString())));const a=this.persistence.getTargetCache();return a.getMatchingKeysForTargetId(e,i.targetId).next((o=>{o.forEach((u=>this.fi.add(u.toString())))})).next((()=>a.removeTargetData(e,i)))}Ei(){this.Vi=new Set}di(e){const i=this.persistence.getRemoteDocumentCache().newChangeBuffer();return se.forEach(this.fi,(a=>{const o=ve.fromPath(a);return this.gi(e,o).next((u=>{u||i.removeEntry(o,Ae.min())}))})).next((()=>(this.Vi=null,i.apply(e))))}updateLimboDocument(e,i){return this.gi(e,i).next((a=>{a?this.fi.delete(i.toString()):this.fi.add(i.toString())}))}Ti(e){return 0}gi(e,i){return se.or([()=>se.resolve(this.Ri.containsKey(i)),()=>this.persistence.getTargetCache().containsKey(e,i),()=>this.persistence.Ai(e,i)])}}class Vh{constructor(e,i){this.persistence=e,this.pi=new ts((a=>n3(a.path)),((a,o)=>a.isEqual(o))),this.garbageCollector=pC(this,i)}static mi(e,i){return new Vh(e,i)}Ei(){}di(e){return se.resolve()}forEachTarget(e,i){return this.persistence.getTargetCache().forEachTarget(e,i)}gr(e){const i=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((a=>i.next((o=>a+o))))}wr(e){let i=0;return this.pr(e,(a=>{i++})).next((()=>i))}pr(e,i){return se.forEach(this.pi,((a,o)=>this.br(e,a,o).next((u=>u?se.resolve():i(o)))))}removeTargets(e,i,a){return this.persistence.getTargetCache().removeTargets(e,i,a)}removeOrphanedDocuments(e,i){let a=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(e,(d=>this.br(e,d,i).next((p=>{p||(a++,u.removeEntry(d,Ae.min()))})))).next((()=>u.apply(e))).next((()=>a))}markPotentiallyOrphaned(e,i){return this.pi.set(i,e.currentSequenceNumber),se.resolve()}removeTarget(e,i){const a=i.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,a)}addReference(e,i,a){return this.pi.set(a,e.currentSequenceNumber),se.resolve()}removeReference(e,i,a){return this.pi.set(a,e.currentSequenceNumber),se.resolve()}updateLimboDocument(e,i){return this.pi.set(i,e.currentSequenceNumber),se.resolve()}Ti(e){let i=e.key.toString().length;return e.isFoundDocument()&&(i+=ph(e.data.value)),i}br(e,i,a){return se.or([()=>this.persistence.Ai(e,i),()=>this.persistence.getTargetCache().containsKey(e,i),()=>{const o=this.pi.get(i);return se.resolve(o!==void 0&&o>a)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e,i,a,o){this.targetId=e,this.fromCache=i,this.Es=a,this.ds=o}static As(e,i){let a=Ue(),o=Ue();for(const u of i.docChanges)switch(u.type){case 0:a=a.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Ig(e,i.fromCache,a,o)}}/**
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
 */class AC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class RC{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return x6()?8:e3(g6())>0?6:4})()}initialize(e,i){this.ps=e,this.indexManager=i,this.Rs=!0}getDocumentsMatchingQuery(e,i,a,o){const u={result:null};return this.ys(e,i).next((d=>{u.result=d})).next((()=>{if(!u.result)return this.ws(e,i,o,a).next((d=>{u.result=d}))})).next((()=>{if(u.result)return;const d=new AC;return this.Ss(e,i,d).next((p=>{if(u.result=p,this.Vs)return this.bs(e,i,d,p.size)}))})).next((()=>u.result))}bs(e,i,a,o){return a.documentReadCount<this.fs?(Xs()<=Be.DEBUG&&pe("QueryEngine","SDK will not create cache indexes for query:",Ws(i),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),se.resolve()):(Xs()<=Be.DEBUG&&pe("QueryEngine","Query:",Ws(i),"scans",a.documentReadCount,"local documents and returns",o,"documents as results."),a.documentReadCount>this.gs*o?(Xs()<=Be.DEBUG&&pe("QueryEngine","The SDK decides to create cache indexes for query:",Ws(i),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ti(i))):se.resolve())}ys(e,i){if(kv(i))return se.resolve(null);let a=Ti(i);return this.indexManager.getIndexType(e,a).next((o=>o===0?null:(i.limit!==null&&o===1&&(i=Sm(i,null,"F"),a=Ti(i)),this.indexManager.getDocumentsMatchingTarget(e,a).next((u=>{const d=Ue(...u);return this.ps.getDocuments(e,d).next((p=>this.indexManager.getMinOffset(e,a).next((m=>{const g=this.Ds(i,p);return this.Cs(i,g,d,m.readTime)?this.ys(e,Sm(i,null,"F")):this.vs(e,g,i,m)}))))})))))}ws(e,i,a,o){return kv(i)||o.isEqual(Ae.min())?se.resolve(null):this.ps.getDocuments(e,a).next((u=>{const d=this.Ds(i,u);return this.Cs(i,d,a,o)?se.resolve(null):(Xs()<=Be.DEBUG&&pe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ws(i)),this.vs(e,d,i,QI(o,au)).next((p=>p)))}))}Ds(e,i){let a=new Lt(jw(e));return i.forEach(((o,u)=>{nd(e,u)&&(a=a.add(u))})),a}Cs(e,i,a,o){if(e.limit===null)return!1;if(a.size!==i.size)return!0;const u=e.limitType==="F"?i.last():i.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,i,a){return Xs()<=Be.DEBUG&&pe("QueryEngine","Using full collection scan to execute query:",Ws(i)),this.ps.getDocumentsMatchingQuery(e,i,ea.min(),a)}vs(e,i,a,o){return this.ps.getDocumentsMatchingQuery(e,a,o).next((u=>(i.forEach((d=>{u=u.insert(d.key,d)})),u)))}}/**
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
 */const Cg="LocalStore",IC=3e8;class CC{constructor(e,i,a,o){this.persistence=e,this.Fs=i,this.serializer=o,this.Ms=new mt(Pe),this.xs=new ts((u=>vg(u)),_g),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(a)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new yC(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(i=>e.collect(i,this.Ms)))}}function jC(n,e,i,a){return new CC(n,e,i,a)}async function tE(n,e){const i=Ie(n);return await i.persistence.runTransaction("Handle user change","readonly",(a=>{let o;return i.mutationQueue.getAllMutationBatches(a).next((u=>(o=u,i.Bs(e),i.mutationQueue.getAllMutationBatches(a)))).next((u=>{const d=[],p=[];let m=Ue();for(const g of o){d.push(g.batchId);for(const v of g.mutations)m=m.add(v.key)}for(const g of u){p.push(g.batchId);for(const v of g.mutations)m=m.add(v.key)}return i.localDocuments.getDocuments(a,m).next((g=>({Ls:g,removedBatchIds:d,addedBatchIds:p})))}))}))}function DC(n,e){const i=Ie(n);return i.persistence.runTransaction("Acknowledge batch","readwrite-primary",(a=>{const o=e.batch.keys(),u=i.Ns.newChangeBuffer({trackRemovals:!0});return(function(p,m,g,v){const E=g.batch,T=E.keys();let A=se.resolve();return T.forEach((M=>{A=A.next((()=>v.getEntry(m,M))).next((k=>{const V=g.docVersions.get(M);Ye(V!==null,48541),k.version.compareTo(V)<0&&(E.applyToRemoteDocument(k,g),k.isValidDocument()&&(k.setReadTime(g.commitVersion),v.addEntry(k)))}))})),A.next((()=>p.mutationQueue.removeMutationBatch(m,E)))})(i,a,e,u).next((()=>u.apply(a))).next((()=>i.mutationQueue.performConsistencyCheck(a))).next((()=>i.documentOverlayCache.removeOverlaysForBatchId(a,o,e.batch.batchId))).next((()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,(function(p){let m=Ue();for(let g=0;g<p.mutationResults.length;++g)p.mutationResults[g].transformResults.length>0&&(m=m.add(p.batch.mutations[g].key));return m})(e)))).next((()=>i.localDocuments.getDocuments(a,o)))}))}function nE(n){const e=Ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(i=>e.Pi.getLastRemoteSnapshotVersion(i)))}function NC(n,e){const i=Ie(n),a=e.snapshotVersion;let o=i.Ms;return i.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const d=i.Ns.newChangeBuffer({trackRemovals:!0});o=i.Ms;const p=[];e.targetChanges.forEach(((v,E)=>{const T=o.get(E);if(!T)return;p.push(i.Pi.removeMatchingKeys(u,v.removedDocuments,E).next((()=>i.Pi.addMatchingKeys(u,v.addedDocuments,E))));let A=T.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(E)!==null?A=A.withResumeToken(Jt.EMPTY_BYTE_STRING,Ae.min()).withLastLimboFreeSnapshotVersion(Ae.min()):v.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(v.resumeToken,a)),o=o.insert(E,A),(function(k,V,B){return k.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=IC?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0})(T,A,v)&&p.push(i.Pi.updateTargetData(u,A))}));let m=ur(),g=Ue();if(e.documentUpdates.forEach((v=>{e.resolvedLimboDocuments.has(v)&&p.push(i.persistence.referenceDelegate.updateLimboDocument(u,v))})),p.push(MC(u,d,e.documentUpdates).next((v=>{m=v.ks,g=v.qs}))),!a.isEqual(Ae.min())){const v=i.Pi.getLastRemoteSnapshotVersion(u).next((E=>i.Pi.setTargetsMetadata(u,u.currentSequenceNumber,a)));p.push(v)}return se.waitFor(p).next((()=>d.apply(u))).next((()=>i.localDocuments.getLocalViewOfDocuments(u,m,g))).next((()=>m))})).then((u=>(i.Ms=o,u)))}function MC(n,e,i){let a=Ue(),o=Ue();return i.forEach((u=>a=a.add(u))),e.getEntries(n,a).next((u=>{let d=ur();return i.forEach(((p,m)=>{const g=u.get(p);m.isFoundDocument()!==g.isFoundDocument()&&(o=o.add(p)),m.isNoDocument()&&m.version.isEqual(Ae.min())?(e.removeEntry(p,m.readTime),d=d.insert(p,m)):!g.isValidDocument()||m.version.compareTo(g.version)>0||m.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(m),d=d.insert(p,m)):pe(Cg,"Ignoring outdated watch update for ",p,". Current version:",g.version," Watch version:",m.version)})),{ks:d,qs:o}}))}function OC(n,e){const i=Ie(n);return i.persistence.runTransaction("Get next mutation batch","readonly",(a=>(e===void 0&&(e=gg),i.mutationQueue.getNextMutationBatchAfterBatchId(a,e))))}function kC(n,e){const i=Ie(n);return i.persistence.runTransaction("Allocate target","readwrite",(a=>{let o;return i.Pi.getTargetData(a,e).next((u=>u?(o=u,se.resolve(o)):i.Pi.allocateTargetId(a).next((d=>(o=new Qr(e,d,"TargetPurposeListen",a.currentSequenceNumber),i.Pi.addTargetData(a,o).next((()=>o)))))))})).then((a=>{const o=i.Ms.get(a.targetId);return(o===null||a.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(i.Ms=i.Ms.insert(a.targetId,a),i.xs.set(e,a.targetId)),a}))}async function jm(n,e,i){const a=Ie(n),o=a.Ms.get(e),u=i?"readwrite":"readwrite-primary";try{i||await a.persistence.runTransaction("Release target",u,(d=>a.persistence.referenceDelegate.removeTarget(d,o)))}catch(d){if(!So(d))throw d;pe(Cg,`Failed to update sequence numbers for target ${e}: ${d}`)}a.Ms=a.Ms.remove(e),a.xs.delete(o.target)}function Yv(n,e,i){const a=Ie(n);let o=Ae.min(),u=Ue();return a.persistence.runTransaction("Execute query","readwrite",(d=>(function(m,g,v){const E=Ie(m),T=E.xs.get(v);return T!==void 0?se.resolve(E.Ms.get(T)):E.Pi.getTargetData(g,v)})(a,d,Ti(e)).next((p=>{if(p)return o=p.lastLimboFreeSnapshotVersion,a.Pi.getMatchingKeysForTargetId(d,p.targetId).next((m=>{u=m}))})).next((()=>a.Fs.getDocumentsMatchingQuery(d,e,i?o:Ae.min(),i?u:Ue()))).next((p=>(VC(a,w3(e),p),{documents:p,Qs:u})))))}function VC(n,e,i){let a=n.Os.get(e)||Ae.min();i.forEach(((o,u)=>{u.readTime.compareTo(a)>0&&(a=u.readTime)})),n.Os.set(e,a)}class Qv{constructor(){this.activeTargetIds=R3()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class PC{constructor(){this.Mo=new Qv,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,i,a){}addLocalQueryTarget(e,i=!0){return i&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,i,a){this.xo[e]=i}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Qv,Promise.resolve()}handleUserChange(e,i,a){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class UC{Oo(e){}shutdown(){}}/**
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
 */const Xv="ConnectivityMonitor";class Wv{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){pe(Xv,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){pe(Xv,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let eh=null;function Dm(){return eh===null?eh=(function(){return 268435456+Math.round(2147483648*Math.random())})():eh++,"0x"+eh.toString(16)}/**
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
 */const Pp="RestConnection",LC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class zC{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const i=e.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=i+"://"+e.host,this.Ko=`projects/${a}/databases/${o}`,this.Wo=this.databaseId.database===Dh?`project_id=${a}`:`project_id=${a}&database_id=${o}`}Go(e,i,a,o,u){const d=Dm(),p=this.zo(e,i.toUriEncodedString());pe(Pp,`Sending RPC '${e}' ${d}:`,p,a);const m={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(m,o,u);const{host:g}=new URL(p),v=hg(g);return this.Jo(e,p,m,a,v).then((E=>(pe(Pp,`Received RPC '${e}' ${d}: `,E),E)),(E=>{throw co(Pp,`RPC '${e}' ${d} failed with error: `,E,"url: ",p,"request:",a),E}))}Ho(e,i,a,o,u,d){return this.Go(e,i,a,o,u)}jo(e,i,a){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+bo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach(((o,u)=>e[u]=o)),a&&a.headers.forEach(((o,u)=>e[u]=o))}zo(e,i){const a=LC[e];return`${this.Uo}/v1/${i}:${a}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an="WebChannelConnection";class BC extends zC{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,i,a,o,u){const d=Dm();return new Promise(((p,m)=>{const g=new iw;g.setWithCredentials(!0),g.listenOnce(rw.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case fh.NO_ERROR:const E=g.getResponseJson();pe(an,`XHR for RPC '${e}' ${d} received:`,JSON.stringify(E)),p(E);break;case fh.TIMEOUT:pe(an,`RPC '${e}' ${d} timed out`),m(new fe(ie.DEADLINE_EXCEEDED,"Request time out"));break;case fh.HTTP_ERROR:const T=g.getStatus();if(pe(an,`RPC '${e}' ${d} failed with status:`,T,"response text:",g.getResponseText()),T>0){let A=g.getResponseJson();Array.isArray(A)&&(A=A[0]);const M=A?.error;if(M&&M.status&&M.message){const k=(function(B){const q=B.toLowerCase().replace(/_/g,"-");return Object.values(ie).indexOf(q)>=0?q:ie.UNKNOWN})(M.status);m(new fe(k,M.message))}else m(new fe(ie.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new fe(ie.UNAVAILABLE,"Connection failed."));break;default:Te(9055,{l_:e,streamId:d,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{pe(an,`RPC '${e}' ${d} completed.`)}}));const v=JSON.stringify(o);pe(an,`RPC '${e}' ${d} sending request:`,o),g.send(i,"POST",v,a,15)}))}T_(e,i,a){const o=Dm(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],d=ow(),p=sw(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.jo(m.initMessageHeaders,i,a),m.encodeInitMessageHeaders=!0;const v=u.join("");pe(an,`Creating RPC '${e}' stream ${o}: ${v}`,m);const E=d.createWebChannel(v,m);this.I_(E);let T=!1,A=!1;const M=new $C({Yo:V=>{A?pe(an,`Not sending because RPC '${e}' stream ${o} is closed:`,V):(T||(pe(an,`Opening RPC '${e}' stream ${o} transport.`),E.open(),T=!0),pe(an,`RPC '${e}' stream ${o} sending:`,V),E.send(V))},Zo:()=>E.close()}),k=(V,B,q)=>{V.listen(B,(Z=>{try{q(Z)}catch(le){setTimeout((()=>{throw le}),0)}}))};return k(E,Ll.EventType.OPEN,(()=>{A||(pe(an,`RPC '${e}' stream ${o} transport opened.`),M.o_())})),k(E,Ll.EventType.CLOSE,(()=>{A||(A=!0,pe(an,`RPC '${e}' stream ${o} transport closed`),M.a_(),this.E_(E))})),k(E,Ll.EventType.ERROR,(V=>{A||(A=!0,co(an,`RPC '${e}' stream ${o} transport errored. Name:`,V.name,"Message:",V.message),M.a_(new fe(ie.UNAVAILABLE,"The operation could not be completed")))})),k(E,Ll.EventType.MESSAGE,(V=>{if(!A){const B=V.data[0];Ye(!!B,16349);const q=B,Z=q?.error||q[0]?.error;if(Z){pe(an,`RPC '${e}' stream ${o} received error:`,Z);const le=Z.status;let K=(function(C){const j=Ct[C];if(j!==void 0)return Fw(j)})(le),oe=Z.message;K===void 0&&(K=ie.INTERNAL,oe="Unknown error status: "+le+" with message "+Z.message),A=!0,M.a_(new fe(K,oe)),E.close()}else pe(an,`RPC '${e}' stream ${o} received:`,B),M.u_(B)}})),k(p,aw.STAT_EVENT,(V=>{V.stat===xm.PROXY?pe(an,`RPC '${e}' stream ${o} detected buffering proxy`):V.stat===xm.NOPROXY&&pe(an,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{M.__()}),0),M}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((i=>i===e))}}function Up(){return typeof document<"u"?document:null}/**
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
 */function sd(n){return new q3(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e,i,a=1e3,o=1.5,u=6e4){this.Mi=e,this.timerId=i,this.d_=a,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const i=Math.floor(this.V_+this.y_()),a=Math.max(0,Date.now()-this.f_),o=Math.max(0,i-a);o>0&&pe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${i} ms, last attempt: ${a} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv="PersistentStream";class rE{constructor(e,i,a,o,u,d,p,m){this.Mi=e,this.S_=a,this.b_=o,this.connection=u,this.authCredentialsProvider=d,this.appCheckCredentialsProvider=p,this.listener=m,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new iE(e,i)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,i){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():i&&i.code===ie.RESOURCE_EXHAUSTED?(or(i.toString()),or("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):i&&i.code===ie.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(i)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),i=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([a,o])=>{this.D_===i&&this.G_(a,o)}),(a=>{e((()=>{const o=new fe(ie.UNKNOWN,"Fetching auth token failed: "+a.message);return this.z_(o)}))}))}G_(e,i){const a=this.W_(this.D_);this.stream=this.j_(e,i),this.stream.Xo((()=>{a((()=>this.listener.Xo()))})),this.stream.t_((()=>{a((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{a((()=>this.z_(o)))})),this.stream.onMessage((o=>{a((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return pe(Zv,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return i=>{this.Mi.enqueueAndForget((()=>this.D_===e?i():(pe(Zv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class FC extends rE{constructor(e,i,a,o,u,d){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",i,a,o,d),this.serializer=u}j_(e,i){return this.connection.T_("Listen",e,i)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const i=Q3(this.serializer,e),a=(function(u){if(!("targetChange"in u))return Ae.min();const d=u.targetChange;return d.targetIds&&d.targetIds.length?Ae.min():d.readTime?Ai(d.readTime):Ae.min()})(e);return this.listener.H_(i,a)}Y_(e){const i={};i.database=Cm(this.serializer),i.addTarget=(function(u,d){let p;const m=d.target;if(p=bm(m)?{documents:Z3(u,m)}:{query:J3(u,m).ft},p.targetId=d.targetId,d.resumeToken.approximateByteSize()>0){p.resumeToken=qw(u,d.resumeToken);const g=Am(u,d.expectedCount);g!==null&&(p.expectedCount=g)}else if(d.snapshotVersion.compareTo(Ae.min())>0){p.readTime=kh(u,d.snapshotVersion.toTimestamp());const g=Am(u,d.expectedCount);g!==null&&(p.expectedCount=g)}return p})(this.serializer,e);const a=tC(this.serializer,e);a&&(i.labels=a),this.q_(i)}Z_(e){const i={};i.database=Cm(this.serializer),i.removeTarget=e,this.q_(i)}}class KC extends rE{constructor(e,i,a,o,u,d){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",i,a,o,d),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,i){return this.connection.T_("Write",e,i)}J_(e){return Ye(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ye(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ye(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const i=W3(e.writeResults,e.commitTime),a=Ai(e.commitTime);return this.listener.na(a,i)}ra(){const e={};e.database=Cm(this.serializer),this.q_(e)}ea(e){const i={streamToken:this.lastStreamToken,writes:e.map((a=>X3(this.serializer,a)))};this.q_(i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{}class qC extends HC{constructor(e,i,a,o){super(),this.authCredentials=e,this.appCheckCredentials=i,this.connection=a,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new fe(ie.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,i,a,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,d])=>this.connection.Go(e,Rm(i,a),o,u,d))).catch((u=>{throw u.name==="FirebaseError"?(u.code===ie.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new fe(ie.UNKNOWN,u.toString())}))}Ho(e,i,a,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([d,p])=>this.connection.Ho(e,Rm(i,a),o,d,p,u))).catch((d=>{throw d.name==="FirebaseError"?(d.code===ie.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),d):new fe(ie.UNKNOWN,d.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class GC{constructor(e,i){this.asyncQueue=e,this.onlineStateHandler=i,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const i=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(or(i),this.aa=!1):pe("OnlineStateTracker",i)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za="RemoteStore";class YC{constructor(e,i,a,o,u){this.localStore=e,this.datastore=i,this.asyncQueue=a,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo((d=>{a.enqueueAndForget((async()=>{ns(this)&&(pe(Za,"Restarting streams for network reachability change."),await(async function(m){const g=Ie(m);g.Ea.add(4),await vu(g),g.Ra.set("Unknown"),g.Ea.delete(4),await od(g)})(this))}))})),this.Ra=new GC(a,o)}}async function od(n){if(ns(n))for(const e of n.da)await e(!0)}async function vu(n){for(const e of n.da)await e(!1)}function aE(n,e){const i=Ie(n);i.Ia.has(e.targetId)||(i.Ia.set(e.targetId,e),Mg(i)?Ng(i):Ro(i).O_()&&Dg(i,e))}function jg(n,e){const i=Ie(n),a=Ro(i);i.Ia.delete(e),a.O_()&&sE(i,e),i.Ia.size===0&&(a.O_()?a.L_():ns(i)&&i.Ra.set("Unknown"))}function Dg(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ae.min())>0){const i=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(i)}Ro(n).Y_(e)}function sE(n,e){n.Va.Ue(e),Ro(n).Z_(e)}function Ng(n){n.Va=new B3({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Ro(n).start(),n.Ra.ua()}function Mg(n){return ns(n)&&!Ro(n).x_()&&n.Ia.size>0}function ns(n){return Ie(n).Ea.size===0}function oE(n){n.Va=void 0}async function QC(n){n.Ra.set("Online")}async function XC(n){n.Ia.forEach(((e,i)=>{Dg(n,e)}))}async function WC(n,e){oE(n),Mg(n)?(n.Ra.ha(e),Ng(n)):n.Ra.set("Unknown")}async function ZC(n,e,i){if(n.Ra.set("Online"),e instanceof Hw&&e.state===2&&e.cause)try{await(async function(o,u){const d=u.cause;for(const p of u.targetIds)o.Ia.has(p)&&(await o.remoteSyncer.rejectListen(p,d),o.Ia.delete(p),o.Va.removeTarget(p))})(n,e)}catch(a){pe(Za,"Failed to remove targets %s: %s ",e.targetIds.join(","),a),await Ph(n,a)}else if(e instanceof yh?n.Va.Ze(e):e instanceof Kw?n.Va.st(e):n.Va.tt(e),!i.isEqual(Ae.min()))try{const a=await nE(n.localStore);i.compareTo(a)>=0&&await(function(u,d){const p=u.Va.Tt(d);return p.targetChanges.forEach(((m,g)=>{if(m.resumeToken.approximateByteSize()>0){const v=u.Ia.get(g);v&&u.Ia.set(g,v.withResumeToken(m.resumeToken,d))}})),p.targetMismatches.forEach(((m,g)=>{const v=u.Ia.get(m);if(!v)return;u.Ia.set(m,v.withResumeToken(Jt.EMPTY_BYTE_STRING,v.snapshotVersion)),sE(u,m);const E=new Qr(v.target,m,g,v.sequenceNumber);Dg(u,E)})),u.remoteSyncer.applyRemoteEvent(p)})(n,i)}catch(a){pe(Za,"Failed to raise snapshot:",a),await Ph(n,a)}}async function Ph(n,e,i){if(!So(e))throw e;n.Ea.add(1),await vu(n),n.Ra.set("Offline"),i||(i=()=>nE(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{pe(Za,"Retrying IndexedDB access"),await i(),n.Ea.delete(1),await od(n)}))}function lE(n,e){return e().catch((i=>Ph(n,i,e)))}async function ld(n){const e=Ie(n),i=ra(e);let a=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:gg;for(;JC(e);)try{const o=await OC(e.localStore,a);if(o===null){e.Ta.length===0&&i.L_();break}a=o.batchId,ej(e,o)}catch(o){await Ph(e,o)}uE(e)&&cE(e)}function JC(n){return ns(n)&&n.Ta.length<10}function ej(n,e){n.Ta.push(e);const i=ra(n);i.O_()&&i.X_&&i.ea(e.mutations)}function uE(n){return ns(n)&&!ra(n).x_()&&n.Ta.length>0}function cE(n){ra(n).start()}async function tj(n){ra(n).ra()}async function nj(n){const e=ra(n);for(const i of n.Ta)e.ea(i.mutations)}async function ij(n,e,i){const a=n.Ta.shift(),o=bg.from(a,e,i);await lE(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await ld(n)}async function rj(n,e){e&&ra(n).X_&&await(async function(a,o){if((function(d){return L3(d)&&d!==ie.ABORTED})(o.code)){const u=a.Ta.shift();ra(a).B_(),await lE(a,(()=>a.remoteSyncer.rejectFailedWrite(u.batchId,o))),await ld(a)}})(n,e),uE(n)&&cE(n)}async function Jv(n,e){const i=Ie(n);i.asyncQueue.verifyOperationInProgress(),pe(Za,"RemoteStore received new credentials");const a=ns(i);i.Ea.add(3),await vu(i),a&&i.Ra.set("Unknown"),await i.remoteSyncer.handleCredentialChange(e),i.Ea.delete(3),await od(i)}async function aj(n,e){const i=Ie(n);e?(i.Ea.delete(2),await od(i)):e||(i.Ea.add(2),await vu(i),i.Ra.set("Unknown"))}function Ro(n){return n.ma||(n.ma=(function(i,a,o){const u=Ie(i);return u.sa(),new FC(a,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(n.datastore,n.asyncQueue,{Xo:QC.bind(null,n),t_:XC.bind(null,n),r_:WC.bind(null,n),H_:ZC.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),Mg(n)?Ng(n):n.Ra.set("Unknown")):(await n.ma.stop(),oE(n))}))),n.ma}function ra(n){return n.fa||(n.fa=(function(i,a,o){const u=Ie(i);return u.sa(),new KC(a,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:tj.bind(null,n),r_:rj.bind(null,n),ta:nj.bind(null,n),na:ij.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await ld(n)):(await n.fa.stop(),n.Ta.length>0&&(pe(Za,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e,i,a,o,u){this.asyncQueue=e,this.timerId=i,this.targetTimeMs=a,this.op=o,this.removalCallback=u,this.deferred=new ir,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((d=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,i,a,o,u){const d=Date.now()+a,p=new Og(e,i,d,o,u);return p.start(a),p}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new fe(ie.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kg(n,e){if(or("AsyncQueue",`${e}: ${n}`),So(n))return new fe(ie.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{static emptySet(e){return new no(e.comparator)}constructor(e){this.comparator=e?(i,a)=>e(i,a)||ve.comparator(i.key,a.key):(i,a)=>ve.comparator(i.key,a.key),this.keyedMap=zl(),this.sortedSet=new mt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const i=this.keyedMap.get(e);return i?this.sortedSet.indexOf(i):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((i,a)=>(e(i),!1)))}add(e){const i=this.delete(e.key);return i.copy(i.keyedMap.insert(e.key,e),i.sortedSet.insert(e,null))}delete(e){const i=this.get(e);return i?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(i)):this}isEqual(e){if(!(e instanceof no)||this.size!==e.size)return!1;const i=this.sortedSet.getIterator(),a=e.sortedSet.getIterator();for(;i.hasNext();){const o=i.getNext().key,u=a.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((i=>{e.push(i.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,i){const a=new no;return a.comparator=this.comparator,a.keyedMap=e,a.sortedSet=i,a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(){this.ga=new mt(ve.comparator)}track(e){const i=e.doc.key,a=this.ga.get(i);a?e.type!==0&&a.type===3?this.ga=this.ga.insert(i,e):e.type===3&&a.type!==1?this.ga=this.ga.insert(i,{type:a.type,doc:e.doc}):e.type===2&&a.type===2?this.ga=this.ga.insert(i,{type:2,doc:e.doc}):e.type===2&&a.type===0?this.ga=this.ga.insert(i,{type:0,doc:e.doc}):e.type===1&&a.type===0?this.ga=this.ga.remove(i):e.type===1&&a.type===2?this.ga=this.ga.insert(i,{type:1,doc:a.doc}):e.type===0&&a.type===1?this.ga=this.ga.insert(i,{type:2,doc:e.doc}):Te(63341,{Rt:e,pa:a}):this.ga=this.ga.insert(i,e)}ya(){const e=[];return this.ga.inorderTraversal(((i,a)=>{e.push(a)})),e}}class go{constructor(e,i,a,o,u,d,p,m,g){this.query=e,this.docs=i,this.oldDocs=a,this.docChanges=o,this.mutatedKeys=u,this.fromCache=d,this.syncStateChanged=p,this.excludesMetadataChanges=m,this.hasCachedResults=g}static fromInitialDocuments(e,i,a,o,u){const d=[];return i.forEach((p=>{d.push({type:0,doc:p})})),new go(e,i,no.emptySet(i),d,a,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&td(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const i=this.docChanges,a=e.docChanges;if(i.length!==a.length)return!1;for(let o=0;o<i.length;o++)if(i[o].type!==a[o].type||!i[o].doc.isEqual(a[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sj{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class oj{constructor(){this.queries=t2(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(i,a){const o=Ie(i),u=o.queries;o.queries=t2(),u.forEach(((d,p)=>{for(const m of p.Sa)m.onError(a)}))})(this,new fe(ie.ABORTED,"Firestore shutting down"))}}function t2(){return new ts((n=>Cw(n)),td)}async function hE(n,e){const i=Ie(n);let a=3;const o=e.query;let u=i.queries.get(o);u?!u.ba()&&e.Da()&&(a=2):(u=new sj,a=e.Da()?0:1);try{switch(a){case 0:u.wa=await i.onListen(o,!0);break;case 1:u.wa=await i.onListen(o,!1);break;case 2:await i.onFirstRemoteStoreListen(o)}}catch(d){const p=kg(d,`Initialization of query '${Ws(e.query)}' failed`);return void e.onError(p)}i.queries.set(o,u),u.Sa.push(e),e.va(i.onlineState),u.wa&&e.Fa(u.wa)&&Vg(i)}async function dE(n,e){const i=Ie(n),a=e.query;let o=3;const u=i.queries.get(a);if(u){const d=u.Sa.indexOf(e);d>=0&&(u.Sa.splice(d,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return i.queries.delete(a),i.onUnlisten(a,!0);case 1:return i.queries.delete(a),i.onUnlisten(a,!1);case 2:return i.onLastRemoteStoreUnlisten(a);default:return}}function lj(n,e){const i=Ie(n);let a=!1;for(const o of e){const u=o.query,d=i.queries.get(u);if(d){for(const p of d.Sa)p.Fa(o)&&(a=!0);d.wa=o}}a&&Vg(i)}function uj(n,e,i){const a=Ie(n),o=a.queries.get(e);if(o)for(const u of o.Sa)u.onError(i);a.queries.delete(e)}function Vg(n){n.Ca.forEach((e=>{e.next()}))}var Nm,n2;(n2=Nm||(Nm={})).Ma="default",n2.Cache="cache";class fE{constructor(e,i,a){this.query=e,this.xa=i,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=a||{}}Fa(e){if(!this.options.includeMetadataChanges){const a=[];for(const o of e.docChanges)o.type!==3&&a.push(o);e=new go(e.query,e.docs,e.oldDocs,a,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let i=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),i=!0):this.La(e,this.onlineState)&&(this.ka(e),i=!0),this.Na=e,i}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let i=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),i=!0),i}La(e,i){if(!e.fromCache||!this.Da())return!0;const a=i!=="Offline";return(!this.options.qa||!a)&&(!e.docs.isEmpty()||e.hasCachedResults||i==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const i=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!i)&&this.options.includeMetadataChanges===!0}ka(e){e=go.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Nm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e){this.key=e}}class mE{constructor(e){this.key=e}}class cj{constructor(e,i){this.query=e,this.Ya=i,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ue(),this.mutatedKeys=Ue(),this.eu=jw(e),this.tu=new no(this.eu)}get nu(){return this.Ya}ru(e,i){const a=i?i.iu:new e2,o=i?i.tu:this.tu;let u=i?i.mutatedKeys:this.mutatedKeys,d=o,p=!1;const m=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,g=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((v,E)=>{const T=o.get(v),A=nd(this.query,E)?E:null,M=!!T&&this.mutatedKeys.has(T.key),k=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let V=!1;T&&A?T.data.isEqual(A.data)?M!==k&&(a.track({type:3,doc:A}),V=!0):this.su(T,A)||(a.track({type:2,doc:A}),V=!0,(m&&this.eu(A,m)>0||g&&this.eu(A,g)<0)&&(p=!0)):!T&&A?(a.track({type:0,doc:A}),V=!0):T&&!A&&(a.track({type:1,doc:T}),V=!0,(m||g)&&(p=!0)),V&&(A?(d=d.add(A),u=k?u.add(v):u.delete(v)):(d=d.delete(v),u=u.delete(v)))})),this.query.limit!==null)for(;d.size>this.query.limit;){const v=this.query.limitType==="F"?d.last():d.first();d=d.delete(v.key),u=u.delete(v.key),a.track({type:1,doc:v})}return{tu:d,iu:a,Cs:p,mutatedKeys:u}}su(e,i){return e.hasLocalMutations&&i.hasCommittedMutations&&!i.hasLocalMutations}applyChanges(e,i,a,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const d=e.iu.ya();d.sort(((v,E)=>(function(A,M){const k=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te(20277,{Rt:V})}};return k(A)-k(M)})(v.type,E.type)||this.eu(v.doc,E.doc))),this.ou(a),o=o??!1;const p=i&&!o?this._u():[],m=this.Xa.size===0&&this.current&&!o?1:0,g=m!==this.Za;return this.Za=m,d.length!==0||g?{snapshot:new go(this.query,e.tu,u,d,e.mutatedKeys,m===0,g,!1,!!a&&a.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new e2,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((i=>this.Ya=this.Ya.add(i))),e.modifiedDocuments.forEach((i=>{})),e.removedDocuments.forEach((i=>this.Ya=this.Ya.delete(i))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ue(),this.tu.forEach((a=>{this.uu(a.key)&&(this.Xa=this.Xa.add(a.key))}));const i=[];return e.forEach((a=>{this.Xa.has(a)||i.push(new mE(a))})),this.Xa.forEach((a=>{e.has(a)||i.push(new pE(a))})),i}cu(e){this.Ya=e.Qs,this.Xa=Ue();const i=this.ru(e.documents);return this.applyChanges(i,!0)}lu(){return go.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Pg="SyncEngine";class hj{constructor(e,i,a){this.query=e,this.targetId=i,this.view=a}}class dj{constructor(e){this.key=e,this.hu=!1}}class fj{constructor(e,i,a,o,u,d){this.localStore=e,this.remoteStore=i,this.eventManager=a,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=d,this.Pu={},this.Tu=new ts((p=>Cw(p)),td),this.Iu=new Map,this.Eu=new Set,this.du=new mt(ve.comparator),this.Au=new Map,this.Ru=new Ag,this.Vu={},this.mu=new Map,this.fu=mo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function pj(n,e,i=!0){const a=wE(n);let o;const u=a.Tu.get(e);return u?(a.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await gE(a,e,i,!0),o}async function mj(n,e){const i=wE(n);await gE(i,e,!0,!1)}async function gE(n,e,i,a){const o=await kC(n.localStore,Ti(e)),u=o.targetId,d=n.sharedClientState.addLocalQueryTarget(u,i);let p;return a&&(p=await gj(n,e,u,d==="current",o.resumeToken)),n.isPrimaryClient&&i&&aE(n.remoteStore,o),p}async function gj(n,e,i,a,o){n.pu=(E,T,A)=>(async function(k,V,B,q){let Z=V.view.ru(B);Z.Cs&&(Z=await Yv(k.localStore,V.query,!1).then((({documents:I})=>V.view.ru(I,Z))));const le=q&&q.targetChanges.get(V.targetId),K=q&&q.targetMismatches.get(V.targetId)!=null,oe=V.view.applyChanges(Z,k.isPrimaryClient,le,K);return r2(k,V.targetId,oe.au),oe.snapshot})(n,E,T,A);const u=await Yv(n.localStore,e,!0),d=new cj(e,u.Qs),p=d.ru(u.documents),m=xu.createSynthesizedTargetChangeForCurrentChange(i,a&&n.onlineState!=="Offline",o),g=d.applyChanges(p,n.isPrimaryClient,m);r2(n,i,g.au);const v=new hj(e,i,d);return n.Tu.set(e,v),n.Iu.has(i)?n.Iu.get(i).push(e):n.Iu.set(i,[e]),g.snapshot}async function yj(n,e,i){const a=Ie(n),o=a.Tu.get(e),u=a.Iu.get(o.targetId);if(u.length>1)return a.Iu.set(o.targetId,u.filter((d=>!td(d,e)))),void a.Tu.delete(e);a.isPrimaryClient?(a.sharedClientState.removeLocalQueryTarget(o.targetId),a.sharedClientState.isActiveQueryTarget(o.targetId)||await jm(a.localStore,o.targetId,!1).then((()=>{a.sharedClientState.clearQueryState(o.targetId),i&&jg(a.remoteStore,o.targetId),Mm(a,o.targetId)})).catch(To)):(Mm(a,o.targetId),await jm(a.localStore,o.targetId,!0))}async function xj(n,e){const i=Ie(n),a=i.Tu.get(e),o=i.Iu.get(a.targetId);i.isPrimaryClient&&o.length===1&&(i.sharedClientState.removeLocalQueryTarget(a.targetId),jg(i.remoteStore,a.targetId))}async function vj(n,e,i){const a=Aj(n);try{const o=await(function(d,p){const m=Ie(d),g=ut.now(),v=p.reduce(((A,M)=>A.add(M.key)),Ue());let E,T;return m.persistence.runTransaction("Locally write mutations","readwrite",(A=>{let M=ur(),k=Ue();return m.Ns.getEntries(A,v).next((V=>{M=V,M.forEach(((B,q)=>{q.isValidDocument()||(k=k.add(B))}))})).next((()=>m.localDocuments.getOverlayedDocuments(A,M))).next((V=>{E=V;const B=[];for(const q of p){const Z=O3(q,E.get(q.key).overlayedDocument);Z!=null&&B.push(new oa(q.key,Z,ww(Z.value.mapValue),Si.exists(!0)))}return m.mutationQueue.addMutationBatch(A,g,B,p)})).next((V=>{T=V;const B=V.applyToLocalDocumentSet(E,k);return m.documentOverlayCache.saveOverlays(A,V.batchId,B)}))})).then((()=>({batchId:T.batchId,changes:Nw(E)})))})(a.localStore,e);a.sharedClientState.addPendingMutation(o.batchId),(function(d,p,m){let g=d.Vu[d.currentUser.toKey()];g||(g=new mt(Pe)),g=g.insert(p,m),d.Vu[d.currentUser.toKey()]=g})(a,o.batchId,i),await _u(a,o.changes),await ld(a.remoteStore)}catch(o){const u=kg(o,"Failed to persist write");i.reject(u)}}async function yE(n,e){const i=Ie(n);try{const a=await NC(i.localStore,e);e.targetChanges.forEach(((o,u)=>{const d=i.Au.get(u);d&&(Ye(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?d.hu=!0:o.modifiedDocuments.size>0?Ye(d.hu,14607):o.removedDocuments.size>0&&(Ye(d.hu,42227),d.hu=!1))})),await _u(i,a,e)}catch(a){await To(a)}}function i2(n,e,i){const a=Ie(n);if(a.isPrimaryClient&&i===0||!a.isPrimaryClient&&i===1){const o=[];a.Tu.forEach(((u,d)=>{const p=d.view.va(e);p.snapshot&&o.push(p.snapshot)})),(function(d,p){const m=Ie(d);m.onlineState=p;let g=!1;m.queries.forEach(((v,E)=>{for(const T of E.Sa)T.va(p)&&(g=!0)})),g&&Vg(m)})(a.eventManager,e),o.length&&a.Pu.H_(o),a.onlineState=e,a.isPrimaryClient&&a.sharedClientState.setOnlineState(e)}}async function _j(n,e,i){const a=Ie(n);a.sharedClientState.updateQueryState(e,"rejected",i);const o=a.Au.get(e),u=o&&o.key;if(u){let d=new mt(ve.comparator);d=d.insert(u,on.newNoDocument(u,Ae.min()));const p=Ue().add(u),m=new ad(Ae.min(),new Map,new mt(Pe),d,p);await yE(a,m),a.du=a.du.remove(u),a.Au.delete(e),Ug(a)}else await jm(a.localStore,e,!1).then((()=>Mm(a,e,i))).catch(To)}async function wj(n,e){const i=Ie(n),a=e.batch.batchId;try{const o=await DC(i.localStore,e);vE(i,a,null),xE(i,a),i.sharedClientState.updateMutationState(a,"acknowledged"),await _u(i,o)}catch(o){await To(o)}}async function Ej(n,e,i){const a=Ie(n);try{const o=await(function(d,p){const m=Ie(d);return m.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let v;return m.mutationQueue.lookupMutationBatch(g,p).next((E=>(Ye(E!==null,37113),v=E.keys(),m.mutationQueue.removeMutationBatch(g,E)))).next((()=>m.mutationQueue.performConsistencyCheck(g))).next((()=>m.documentOverlayCache.removeOverlaysForBatchId(g,v,p))).next((()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v))).next((()=>m.localDocuments.getDocuments(g,v)))}))})(a.localStore,e);vE(a,e,i),xE(a,e),a.sharedClientState.updateMutationState(e,"rejected",i),await _u(a,o)}catch(o){await To(o)}}function xE(n,e){(n.mu.get(e)||[]).forEach((i=>{i.resolve()})),n.mu.delete(e)}function vE(n,e,i){const a=Ie(n);let o=a.Vu[a.currentUser.toKey()];if(o){const u=o.get(e);u&&(i?u.reject(i):u.resolve(),o=o.remove(e)),a.Vu[a.currentUser.toKey()]=o}}function Mm(n,e,i=null){n.sharedClientState.removeLocalQueryTarget(e);for(const a of n.Iu.get(e))n.Tu.delete(a),i&&n.Pu.yu(a,i);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((a=>{n.Ru.containsKey(a)||_E(n,a)}))}function _E(n,e){n.Eu.delete(e.path.canonicalString());const i=n.du.get(e);i!==null&&(jg(n.remoteStore,i),n.du=n.du.remove(e),n.Au.delete(i),Ug(n))}function r2(n,e,i){for(const a of i)a instanceof pE?(n.Ru.addReference(a.key,e),bj(n,a)):a instanceof mE?(pe(Pg,"Document no longer in limbo: "+a.key),n.Ru.removeReference(a.key,e),n.Ru.containsKey(a.key)||_E(n,a.key)):Te(19791,{wu:a})}function bj(n,e){const i=e.key,a=i.path.canonicalString();n.du.get(i)||n.Eu.has(a)||(pe(Pg,"New document in limbo: "+i),n.Eu.add(a),Ug(n))}function Ug(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const i=new ve(at.fromString(e)),a=n.fu.next();n.Au.set(a,new dj(i)),n.du=n.du.insert(i,a),aE(n.remoteStore,new Qr(Ti(wg(i.path)),a,"TargetPurposeLimboResolution",Zh.ce))}}async function _u(n,e,i){const a=Ie(n),o=[],u=[],d=[];a.Tu.isEmpty()||(a.Tu.forEach(((p,m)=>{d.push(a.pu(m,e,i).then((g=>{if((g||i)&&a.isPrimaryClient){const v=g?!g.fromCache:i?.targetChanges.get(m.targetId)?.current;a.sharedClientState.updateQueryState(m.targetId,v?"current":"not-current")}if(g){o.push(g);const v=Ig.As(m.targetId,g);u.push(v)}})))})),await Promise.all(d),a.Pu.H_(o),await(async function(m,g){const v=Ie(m);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(E=>se.forEach(g,(T=>se.forEach(T.Es,(A=>v.persistence.referenceDelegate.addReference(E,T.targetId,A))).next((()=>se.forEach(T.ds,(A=>v.persistence.referenceDelegate.removeReference(E,T.targetId,A)))))))))}catch(E){if(!So(E))throw E;pe(Cg,"Failed to update sequence numbers: "+E)}for(const E of g){const T=E.targetId;if(!E.fromCache){const A=v.Ms.get(T),M=A.snapshotVersion,k=A.withLastLimboFreeSnapshotVersion(M);v.Ms=v.Ms.insert(T,k)}}})(a.localStore,u))}async function Tj(n,e){const i=Ie(n);if(!i.currentUser.isEqual(e)){pe(Pg,"User change. New user:",e.toKey());const a=await tE(i.localStore,e);i.currentUser=e,(function(u,d){u.mu.forEach((p=>{p.forEach((m=>{m.reject(new fe(ie.CANCELLED,d))}))})),u.mu.clear()})(i,"'waitForPendingWrites' promise is rejected due to a user change."),i.sharedClientState.handleUserChange(e,a.removedBatchIds,a.addedBatchIds),await _u(i,a.Ls)}}function Sj(n,e){const i=Ie(n),a=i.Au.get(e);if(a&&a.hu)return Ue().add(a.key);{let o=Ue();const u=i.Iu.get(e);if(!u)return o;for(const d of u){const p=i.Tu.get(d);o=o.unionWith(p.view.nu)}return o}}function wE(n){const e=Ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=yE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Sj.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_j.bind(null,e),e.Pu.H_=lj.bind(null,e.eventManager),e.Pu.yu=uj.bind(null,e.eventManager),e}function Aj(n){const e=Ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=wj.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ej.bind(null,e),e}class Uh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=sd(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,i){return null}Mu(e,i){return null}vu(e){return jC(this.persistence,new RC,e.initialUser,this.serializer)}Cu(e){return new eE(Rg.mi,this.serializer)}Du(e){return new PC}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Uh.provider={build:()=>new Uh};class Rj extends Uh{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,i){Ye(this.persistence.referenceDelegate instanceof Vh,46915);const a=this.persistence.referenceDelegate.garbageCollector;return new dC(a,e.asyncQueue,i)}Cu(e){const i=this.cacheSizeBytes!==void 0?xn.withCacheSize(this.cacheSizeBytes):xn.DEFAULT;return new eE((a=>Vh.mi(a,i)),this.serializer)}}class Om{async initialize(e,i){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(i),this.remoteStore=this.createRemoteStore(i),this.eventManager=this.createEventManager(i),this.syncEngine=this.createSyncEngine(i,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>i2(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=Tj.bind(null,this.syncEngine),await aj(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new oj})()}createDatastore(e){const i=sd(e.databaseInfo.databaseId),a=(function(u){return new BC(u)})(e.databaseInfo);return(function(u,d,p,m){return new qC(u,d,p,m)})(e.authCredentials,e.appCheckCredentials,a,i)}createRemoteStore(e){return(function(a,o,u,d,p){return new YC(a,o,u,d,p)})(this.localStore,this.datastore,e.asyncQueue,(i=>i2(this.syncEngine,i,0)),(function(){return Wv.v()?new Wv:new UC})())}createSyncEngine(e,i){return(function(o,u,d,p,m,g,v){const E=new fj(o,u,d,p,m,g);return v&&(E.gu=!0),E})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,i)}async terminate(){await(async function(i){const a=Ie(i);pe(Za,"RemoteStore shutting down."),a.Ea.add(5),await vu(a),a.Aa.shutdown(),a.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Om.provider={build:()=>new Om};/**
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
 */class EE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):or("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,i){setTimeout((()=>{this.muted||e(i)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa="FirestoreClient";class Ij{constructor(e,i,a,o,u){this.authCredentials=e,this.appCheckCredentials=i,this.asyncQueue=a,this.databaseInfo=o,this.user=sn.UNAUTHENTICATED,this.clientId=mg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(a,(async d=>{pe(aa,"Received user=",d.uid),await this.authCredentialListener(d),this.user=d})),this.appCheckCredentials.start(a,(d=>(pe(aa,"Received new app check token=",d),this.appCheckCredentialListener(d,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ir;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(i){const a=kg(i,"Failed to shutdown persistence");e.reject(a)}})),e.promise}}async function Lp(n,e){n.asyncQueue.verifyOperationInProgress(),pe(aa,"Initializing OfflineComponentProvider");const i=n.configuration;await e.initialize(i);let a=i.initialUser;n.setCredentialChangeListener((async o=>{a.isEqual(o)||(await tE(e.localStore,o),a=o)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function a2(n,e){n.asyncQueue.verifyOperationInProgress();const i=await Cj(n);pe(aa,"Initializing OnlineComponentProvider"),await e.initialize(i,n.configuration),n.setCredentialChangeListener((a=>Jv(e.remoteStore,a))),n.setAppCheckTokenChangeListener(((a,o)=>Jv(e.remoteStore,o))),n._onlineComponents=e}async function Cj(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){pe(aa,"Using user provided OfflineComponentProvider");try{await Lp(n,n._uninitializedComponentsProvider._offline)}catch(e){const i=e;if(!(function(o){return o.name==="FirebaseError"?o.code===ie.FAILED_PRECONDITION||o.code===ie.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(i))throw i;co("Error using user provided cache. Falling back to memory cache: "+i),await Lp(n,new Uh)}}else pe(aa,"Using default OfflineComponentProvider"),await Lp(n,new Rj(void 0));return n._offlineComponents}async function bE(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(pe(aa,"Using user provided OnlineComponentProvider"),await a2(n,n._uninitializedComponentsProvider._online)):(pe(aa,"Using default OnlineComponentProvider"),await a2(n,new Om))),n._onlineComponents}function jj(n){return bE(n).then((e=>e.syncEngine))}async function TE(n){const e=await bE(n),i=e.eventManager;return i.onListen=pj.bind(null,e.syncEngine),i.onUnlisten=yj.bind(null,e.syncEngine),i.onFirstRemoteStoreListen=mj.bind(null,e.syncEngine),i.onLastRemoteStoreUnlisten=xj.bind(null,e.syncEngine),i}function Dj(n,e,i={}){const a=new ir;return n.asyncQueue.enqueueAndForget((async()=>(function(u,d,p,m,g){const v=new EE({next:T=>{v.Nu(),d.enqueueAndForget((()=>dE(u,E)));const A=T.docs.has(p);!A&&T.fromCache?g.reject(new fe(ie.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&T.fromCache&&m&&m.source==="server"?g.reject(new fe(ie.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(T)},error:T=>g.reject(T)}),E=new fE(wg(p.path),v,{includeMetadataChanges:!0,qa:!0});return hE(u,E)})(await TE(n),n.asyncQueue,e,i,a))),a.promise}function Nj(n,e,i={}){const a=new ir;return n.asyncQueue.enqueueAndForget((async()=>(function(u,d,p,m,g){const v=new EE({next:T=>{v.Nu(),d.enqueueAndForget((()=>dE(u,E))),T.fromCache&&m.source==="server"?g.reject(new fe(ie.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(T)},error:T=>g.reject(T)}),E=new fE(p,v,{includeMetadataChanges:!0,qa:!0});return hE(u,E)})(await TE(n),n.asyncQueue,e,i,a))),a.promise}/**
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
 */function SE(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const s2=new Map;/**
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
 */const AE="firestore.googleapis.com",o2=!0;class l2{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new fe(ie.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=AE,this.ssl=o2}else this.host=e.host,this.ssl=e.ssl??o2;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Jw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<cC)throw new fe(ie.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}YI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=SE(e.experimentalLongPollingOptions??{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new fe(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new fe(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new fe(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(a,o){return a.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ud{constructor(e,i,a,o){this._authCredentials=e,this._appCheckCredentials=i,this._databaseId=a,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new l2({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new fe(ie.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new fe(ie.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new l2(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(a){if(!a)return new UI;switch(a.type){case"firstParty":return new BI(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new fe(ie.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(i){const a=s2.get(i);a&&(pe("ComponentProvider","Removing Datastore"),s2.delete(i),a.terminate())})(this),Promise.resolve()}}function Mj(n,e,i,a={}){n=lr(n,ud);const o=hg(e),u=n._getSettings(),d={...u,emulatorOptions:n._getEmulatorOptions()},p=`${e}:${i}`;o&&(h6(`https://${p}`),m6("Firestore",!0)),u.host!==AE&&u.host!==p&&co("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m={...u,host:p,ssl:o,emulatorOptions:a};if(!Ih(m,d)&&(n._setSettings(m),a.mockUserToken)){let g,v;if(typeof a.mockUserToken=="string")g=a.mockUserToken,v=sn.MOCK_USER;else{g=d6(a.mockUserToken,n._app?.options.projectId);const E=a.mockUserToken.sub||a.mockUserToken.user_id;if(!E)throw new fe(ie.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new sn(E)}n._authCredentials=new LI(new uw(g,v))}}/**
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
 */class is{constructor(e,i,a){this.converter=i,this._query=a,this.type="query",this.firestore=e}withConverter(e){return new is(this.firestore,e,this._query)}}class At{constructor(e,i,a){this.converter=i,this._key=a,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new At(this.firestore,e,this._key)}toJSON(){return{type:At._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,i,a){if(gu(i,At._jsonSchema))return new At(e,a||null,new ve(at.fromString(i.referencePath)))}}At._jsonSchemaVersion="firestore/documentReference/1.0",At._jsonSchema={type:Nt("string",At._jsonSchemaVersion),referencePath:Nt("string")};class Jr extends is{constructor(e,i,a){super(e,i,wg(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new At(this.firestore,null,new ve(e))}withConverter(e){return new Jr(this.firestore,e,this._path)}}function xh(n,e,...i){if(n=ar(n),cw("collection","path",e),n instanceof ud){const a=at.fromString(e,...i);return wv(a),new Jr(n,null,a)}{if(!(n instanceof At||n instanceof Jr))throw new fe(ie.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=n._path.child(at.fromString(e,...i));return wv(a),new Jr(n.firestore,null,a)}}function Xl(n,e,...i){if(n=ar(n),arguments.length===1&&(e=mg.newId()),cw("doc","path",e),n instanceof ud){const a=at.fromString(e,...i);return _v(a),new At(n,null,new ve(a))}{if(!(n instanceof At||n instanceof Jr))throw new fe(ie.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=n._path.child(at.fromString(e,...i));return _v(a),new At(n.firestore,n instanceof Jr?n.converter:null,new ve(a))}}/**
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
 */const u2="AsyncQueue";class c2{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new iE(this,"async_queue_retry"),this._c=()=>{const a=Up();a&&pe(u2,"Visibility state changed to "+a.visibilityState),this.M_.w_()},this.ac=e;const i=Up();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const i=Up();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const i=new ir;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(i.resolve,i.reject),i.promise))).then((()=>i.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!So(e))throw e;pe(u2,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const i=this.ac.then((()=>(this.rc=!0,e().catch((a=>{throw this.nc=a,this.rc=!1,or("INTERNAL UNHANDLED ERROR: ",h2(a)),a})).then((a=>(this.rc=!1,a))))));return this.ac=i,i}enqueueAfterDelay(e,i,a){this.uc(),this.oc.indexOf(e)>-1&&(i=0);const o=Og.createAndSchedule(this,e,i,a,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&Te(47125,{Pc:h2(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const i of this.tc)if(i.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((i,a)=>i.targetTimeMs-a.targetTimeMs));for(const i of this.tc)if(i.skipDelay(),e!=="all"&&i.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const i=this.tc.indexOf(e);this.tc.splice(i,1)}}function h2(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class wu extends ud{constructor(e,i,a,o){super(e,i,a,o),this.type="firestore",this._queue=new c2,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new c2(e),this._firestoreClient=void 0,await e}}}function RE(n,e){const i=typeof n=="object"?n:SI(),a=typeof n=="string"?n:Dh,o=_I(i,"firestore").getImmediate({identifier:a});if(!o._initialized){const u=u6("firestore");u&&Mj(o,...u)}return o}function Lg(n){if(n._terminated)throw new fe(ie.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Oj(n),n._firestoreClient}function Oj(n){const e=n._freezeSettings(),i=(function(o,u,d,p){return new a3(o,u,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,SE(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Ij(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&(function(o){const u=o?._online.build();return{_offline:o?._offline.build(u),_online:u}})(n._componentsProvider))}/**
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
 */class Fn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Fn(Jt.fromBase64String(e))}catch(i){throw new fe(ie.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(e){return new Fn(Jt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Fn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(gu(e,Fn._jsonSchema))return Fn.fromBase64String(e.bytes)}}Fn._jsonSchemaVersion="firestore/bytes/1.0",Fn._jsonSchema={type:Nt("string",Fn._jsonSchemaVersion),bytes:Nt("string")};/**
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
 */class cd{constructor(...e){for(let i=0;i<e.length;++i)if(e[i].length===0)throw new fe(ie.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Zt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class hd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,i){if(!isFinite(e)||e<-90||e>90)throw new fe(ie.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(i)||i<-180||i>180)throw new fe(ie.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+i);this._lat=e,this._long=i}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ri._jsonSchemaVersion}}static fromJSON(e){if(gu(e,Ri._jsonSchema))return new Ri(e.latitude,e.longitude)}}Ri._jsonSchemaVersion="firestore/geoPoint/1.0",Ri._jsonSchema={type:Nt("string",Ri._jsonSchemaVersion),latitude:Nt("number"),longitude:Nt("number")};/**
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
 */class Ii{constructor(e){this._values=(e||[]).map((i=>i))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(a,o){if(a.length!==o.length)return!1;for(let u=0;u<a.length;++u)if(a[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ii._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(gu(e,Ii._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((i=>typeof i=="number")))return new Ii(e.vectorValues);throw new fe(ie.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ii._jsonSchemaVersion="firestore/vectorValue/1.0",Ii._jsonSchema={type:Nt("string",Ii._jsonSchemaVersion),vectorValues:Nt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kj=/^__.*__$/;class Vj{constructor(e,i,a){this.data=e,this.fieldMask=i,this.fieldTransforms=a}toMutation(e,i){return this.fieldMask!==null?new oa(e,this.data,this.fieldMask,i,this.fieldTransforms):new yu(e,this.data,i,this.fieldTransforms)}}class IE{constructor(e,i,a){this.data=e,this.fieldMask=i,this.fieldTransforms=a}toMutation(e,i){return new oa(e,this.data,this.fieldMask,i,this.fieldTransforms)}}function CE(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te(40011,{Ac:n})}}class zg{constructor(e,i,a,o,u,d){this.settings=e,this.databaseId=i,this.serializer=a,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=d||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new zg({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const i=this.path?.child(e),a=this.Vc({path:i,fc:!1});return a.gc(e),a}yc(e){const i=this.path?.child(e),a=this.Vc({path:i,fc:!1});return a.Rc(),a}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Lh(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((i=>e.isPrefixOf(i)))!==void 0||this.fieldTransforms.find((i=>e.isPrefixOf(i.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(CE(this.Ac)&&kj.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Pj{constructor(e,i,a){this.databaseId=e,this.ignoreUndefinedProperties=i,this.serializer=a||sd(e)}Cc(e,i,a,o=!1){return new zg({Ac:e,methodName:i,Dc:a,path:Zt.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $g(n){const e=n._freezeSettings(),i=sd(n._databaseId);return new Pj(n._databaseId,!!e.ignoreUndefinedProperties,i)}function Uj(n,e,i,a,o,u={}){const d=n.Cc(u.merge||u.mergeFields?2:0,e,i,o);Fg("Data must be an object, but it was:",d,a);const p=jE(a,d);let m,g;if(u.merge)m=new jn(d.fieldMask),g=d.fieldTransforms;else if(u.mergeFields){const v=[];for(const E of u.mergeFields){const T=km(e,E,i);if(!d.contains(T))throw new fe(ie.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);NE(v,T)||v.push(T)}m=new jn(v),g=d.fieldTransforms.filter((E=>m.covers(E.field)))}else m=null,g=d.fieldTransforms;return new Vj(new vn(p),m,g)}class dd extends hd{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof dd}}class Bg extends hd{constructor(e,i){super(e),this.Fc=i}_toFieldTransform(e){const i=new du(e.serializer,kw(e.serializer,this.Fc));return new j3(e.path,i)}isEqual(e){return e instanceof Bg&&this.Fc===e.Fc}}function Lj(n,e,i,a){const o=n.Cc(1,e,i);Fg("Data must be an object, but it was:",o,a);const u=[],d=vn.empty();sa(a,((m,g)=>{const v=Kg(e,m,i);g=ar(g);const E=o.yc(v);if(g instanceof dd)u.push(v);else{const T=Eu(g,E);T!=null&&(u.push(v),d.set(v,T))}}));const p=new jn(u);return new IE(d,p,o.fieldTransforms)}function zj(n,e,i,a,o,u){const d=n.Cc(1,e,i),p=[km(e,a,i)],m=[o];if(u.length%2!=0)throw new fe(ie.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<u.length;T+=2)p.push(km(e,u[T])),m.push(u[T+1]);const g=[],v=vn.empty();for(let T=p.length-1;T>=0;--T)if(!NE(g,p[T])){const A=p[T];let M=m[T];M=ar(M);const k=d.yc(A);if(M instanceof dd)g.push(A);else{const V=Eu(M,k);V!=null&&(g.push(A),v.set(A,V))}}const E=new jn(g);return new IE(v,E,d.fieldTransforms)}function $j(n,e,i,a=!1){return Eu(i,n.Cc(a?4:3,e))}function Eu(n,e){if(DE(n=ar(n)))return Fg("Unsupported field value:",e,n),jE(n,e);if(n instanceof hd)return(function(a,o){if(!CE(o.Ac))throw o.Sc(`${a._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${a._methodName}() is not currently supported inside arrays`);const u=a._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(a,o){const u=[];let d=0;for(const p of a){let m=Eu(p,o.wc(d));m==null&&(m={nullValue:"NULL_VALUE"}),u.push(m),d++}return{arrayValue:{values:u}}})(n,e)}return(function(a,o){if((a=ar(a))===null)return{nullValue:"NULL_VALUE"};if(typeof a=="number")return kw(o.serializer,a);if(typeof a=="boolean")return{booleanValue:a};if(typeof a=="string")return{stringValue:a};if(a instanceof Date){const u=ut.fromDate(a);return{timestampValue:kh(o.serializer,u)}}if(a instanceof ut){const u=new ut(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:kh(o.serializer,u)}}if(a instanceof Ri)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof Fn)return{bytesValue:qw(o.serializer,a._byteString)};if(a instanceof At){const u=o.databaseId,d=a.firestore._databaseId;if(!d.isEqual(u))throw o.Sc(`Document reference is for database ${d.projectId}/${d.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Sg(a.firestore._databaseId||o.databaseId,a._key.path)}}if(a instanceof Ii)return(function(d,p){return{mapValue:{fields:{[vw]:{stringValue:_w},[Nh]:{arrayValue:{values:d.toArray().map((g=>{if(typeof g!="number")throw p.Sc("VectorValues must only contain numeric values.");return Eg(p.serializer,g)}))}}}}}})(a,o);throw o.Sc(`Unsupported field value: ${Wh(a)}`)})(n,e)}function jE(n,e){const i={};return fw(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):sa(n,((a,o)=>{const u=Eu(o,e.mc(a));u!=null&&(i[a]=u)})),{mapValue:{fields:i}}}function DE(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ut||n instanceof Ri||n instanceof Fn||n instanceof At||n instanceof hd||n instanceof Ii)}function Fg(n,e,i){if(!DE(i)||!hw(i)){const a=Wh(i);throw a==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+a)}}function km(n,e,i){if((e=ar(e))instanceof cd)return e._internalPath;if(typeof e=="string")return Kg(n,e);throw Lh("Field path arguments must be of type string or ",n,!1,void 0,i)}const Bj=new RegExp("[~\\*/\\[\\]]");function Kg(n,e,i){if(e.search(Bj)>=0)throw Lh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,i);try{return new cd(...e.split("."))._internalPath}catch{throw Lh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,i)}}function Lh(n,e,i,a,o){const u=a&&!a.isEmpty(),d=o!==void 0;let p=`Function ${e}() called with invalid data`;i&&(p+=" (via `toFirestore()`)"),p+=". ";let m="";return(u||d)&&(m+=" (found",u&&(m+=` in field ${a}`),d&&(m+=` in document ${o}`),m+=")"),new fe(ie.INVALID_ARGUMENT,p+n+m)}function NE(n,e){return n.some((i=>i.isEqual(e)))}/**
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
 */class ME{constructor(e,i,a,o,u){this._firestore=e,this._userDataWriter=i,this._key=a,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Fj(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const i=this._document.data.field(Hg("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i)}}}class Fj extends ME{data(){return super.data()}}function Hg(n,e){return typeof e=="string"?Kg(n,e):e instanceof cd?e._internalPath:e._delegate._internalPath}/**
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
 */function Kj(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new fe(ie.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class qg{}class OE extends qg{}function d2(n,e,...i){let a=[];e instanceof qg&&a.push(e),a=a.concat(i),(function(u){const d=u.filter((m=>m instanceof Yg)).length,p=u.filter((m=>m instanceof Gg)).length;if(d>1||d>0&&p>0)throw new fe(ie.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(a);for(const o of a)n=o._apply(n);return n}class Gg extends OE{constructor(e,i,a){super(),this._field=e,this._op=i,this._value=a,this.type="where"}static _create(e,i,a){return new Gg(e,i,a)}_apply(e){const i=this._parse(e);return kE(e._query,i),new is(e.firestore,e.converter,Tm(e._query,i))}_parse(e){const i=$g(e.firestore);return(function(u,d,p,m,g,v,E){let T;if(g.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new fe(ie.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){m2(E,v);const M=[];for(const k of E)M.push(p2(m,u,k));T={arrayValue:{values:M}}}else T=p2(m,u,E)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||m2(E,v),T=$j(p,d,E,v==="in"||v==="not-in");return Dt.create(g,v,T)})(e._query,"where",i,e.firestore._databaseId,this._field,this._op,this._value)}}class Yg extends qg{constructor(e,i){super(),this.type=e,this._queryConstraints=i}static _create(e,i){return new Yg(e,i)}_parse(e){const i=this._queryConstraints.map((a=>a._parse(e))).filter((a=>a.getFilters().length>0));return i.length===1?i[0]:ai.create(i,this._getOperator())}_apply(e){const i=this._parse(e);return i.getFilters().length===0?e:((function(o,u){let d=o;const p=u.getFlattenedFilters();for(const m of p)kE(d,m),d=Tm(d,m)})(e._query,i),new is(e.firestore,e.converter,Tm(e._query,i)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Qg extends OE{constructor(e,i){super(),this._field=e,this._direction=i,this.type="orderBy"}static _create(e,i){return new Qg(e,i)}_apply(e){const i=(function(o,u,d){if(o.startAt!==null)throw new fe(ie.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new fe(ie.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new uu(u,d)})(e._query,this._field,this._direction);return new is(e.firestore,e.converter,(function(o,u){const d=o.explicitOrderBy.concat([u]);return new Ao(o.path,o.collectionGroup,d,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,i))}}function f2(n,e="asc"){const i=e,a=Hg("orderBy",n);return Qg._create(a,i)}function p2(n,e,i){if(typeof(i=ar(i))=="string"){if(i==="")throw new fe(ie.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Iw(e)&&i.indexOf("/")!==-1)throw new fe(ie.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${i}' contains a '/' character.`);const a=e.path.child(at.fromString(i));if(!ve.isDocumentKey(a))throw new fe(ie.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${a}' is not because it has an odd number of segments (${a.length}).`);return Cv(n,new ve(a))}if(i instanceof At)return Cv(n,i._key);throw new fe(ie.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Wh(i)}.`)}function m2(n,e){if(!Array.isArray(n)||n.length===0)throw new fe(ie.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function kE(n,e){const i=(function(o,u){for(const d of o)for(const p of d.getFlattenedFilters())if(u.indexOf(p.op)>=0)return p.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(i!==null)throw i===e.op?new fe(ie.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new fe(ie.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${i.toString()}' filters.`)}class Hj{convertValue(e,i="none"){switch(ia(e)){case 0:return null;case 1:return e.booleanValue;case 2:return St(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,i);case 5:return e.stringValue;case 6:return this.convertBytes(na(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,i);case 11:return this.convertObject(e.mapValue,i);case 10:return this.convertVectorValue(e.mapValue);default:throw Te(62114,{value:e})}}convertObject(e,i){return this.convertObjectMap(e.fields,i)}convertObjectMap(e,i="none"){const a={};return sa(e,((o,u)=>{a[o]=this.convertValue(u,i)})),a}convertVectorValue(e){const i=e.fields?.[Nh].arrayValue?.values?.map((a=>St(a.doubleValue)));return new Ii(i)}convertGeoPoint(e){return new Ri(St(e.latitude),St(e.longitude))}convertArray(e,i){return(e.values||[]).map((a=>this.convertValue(a,i)))}convertServerTimestamp(e,i){switch(i){case"previous":const a=ed(e);return a==null?null:this.convertValue(a,i);case"estimate":return this.convertTimestamp(su(e));default:return null}}convertTimestamp(e){const i=ta(e);return new ut(i.seconds,i.nanos)}convertDocumentKey(e,i){const a=at.fromString(e);Ye(Zw(a),9688,{name:e});const o=new ou(a.get(1),a.get(3)),u=new ve(a.popFirst(5));return o.isEqual(i)||or(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${i.projectId}/${i.database}) instead.`),u}}/**
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
 */function qj(n,e,i){let a;return a=n?i&&(i.merge||i.mergeFields)?n.toFirestore(e,i):n.toFirestore(e):e,a}class Bl{constructor(e,i){this.hasPendingWrites=e,this.fromCache=i}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Xa extends ME{constructor(e,i,a,o,u,d){super(e,i,a,o,d),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const i=new vh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(i,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,i={}){if(this._document){const a=this._document.data.field(Hg("DocumentSnapshot.get",e));if(a!==null)return this._userDataWriter.convertValue(a,i.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new fe(ie.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,i={};return i.type=Xa._jsonSchemaVersion,i.bundle="",i.bundleSource="DocumentSnapshot",i.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?i:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),i.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),i)}}Xa._jsonSchemaVersion="firestore/documentSnapshot/1.0",Xa._jsonSchema={type:Nt("string",Xa._jsonSchemaVersion),bundleSource:Nt("string","DocumentSnapshot"),bundleName:Nt("string"),bundle:Nt("string")};class vh extends Xa{data(e={}){return super.data(e)}}class io{constructor(e,i,a,o){this._firestore=e,this._userDataWriter=i,this._snapshot=o,this.metadata=new Bl(o.hasPendingWrites,o.fromCache),this.query=a}get docs(){const e=[];return this.forEach((i=>e.push(i))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,i){this._snapshot.docs.forEach((a=>{e.call(i,new vh(this._firestore,this._userDataWriter,a.key,a,new Bl(this._snapshot.mutatedKeys.has(a.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const i=!!e.includeMetadataChanges;if(i&&this._snapshot.excludesMetadataChanges)throw new fe(ie.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===i||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let d=0;return o._snapshot.docChanges.map((p=>{const m=new vh(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Bl(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:m,oldIndex:-1,newIndex:d++}}))}{let d=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((p=>u||p.type!==3)).map((p=>{const m=new vh(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Bl(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let g=-1,v=-1;return p.type!==0&&(g=d.indexOf(p.doc.key),d=d.delete(p.doc.key)),p.type!==1&&(d=d.add(p.doc),v=d.indexOf(p.doc.key)),{type:Gj(p.type),doc:m,oldIndex:g,newIndex:v}}))}})(this,i),this._cachedChangesIncludeMetadataChanges=i),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new fe(ie.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=io._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=mg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const i=[],a=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(i.push(u._document),a.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Gj(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te(61501,{type:n})}}/**
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
 */function _h(n){n=lr(n,At);const e=lr(n.firestore,wu);return Dj(Lg(e),n._key).then((i=>Yj(e,n,i)))}io._jsonSchemaVersion="firestore/querySnapshot/1.0",io._jsonSchema={type:Nt("string",io._jsonSchemaVersion),bundleSource:Nt("string","QuerySnapshot"),bundleName:Nt("string"),bundle:Nt("string")};class VE extends Hj{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fn(e)}convertReference(e){const i=this.convertDocumentKey(e,this.firestore._databaseId);return new At(this.firestore,null,i)}}function Vm(n){n=lr(n,is);const e=lr(n.firestore,wu),i=Lg(e),a=new VE(e);return Kj(n._query),Nj(i,n._query).then((o=>new io(e,a,n,o)))}function Xg(n,e,i){n=lr(n,At);const a=lr(n.firestore,wu),o=qj(n.converter,e,i);return PE(a,[Uj($g(a),"setDoc",n._key,o,n.converter!==null,i).toMutation(n._key,Si.none())])}function zh(n,e,i,...a){n=lr(n,At);const o=lr(n.firestore,wu),u=$g(o);let d;return d=typeof(e=ar(e))=="string"||e instanceof cd?zj(u,"updateDoc",n._key,e,i,a):Lj(u,"updateDoc",n._key,e),PE(o,[d.toMutation(n._key,Si.exists(!0))])}function PE(n,e){return(function(a,o){const u=new ir;return a.asyncQueue.enqueueAndForget((async()=>vj(await jj(a),o,u))),u.promise})(Lg(n),e)}function Yj(n,e,i){const a=i.docs.get(e._key),o=new VE(n);return new Xa(n,o,e._key,a,new Bl(i.hasPendingWrites,i.fromCache),e.converter)}function $h(n){return new Bg("increment",n)}(function(e,i=!0){(function(o){bo=o})(TI),Ch(new nu("firestore",((a,{instanceIdentifier:o,options:u})=>{const d=a.getProvider("app").getImmediate(),p=new wu(new zI(a.getProvider("auth-internal")),new FI(d,a.getProvider("app-check-internal")),(function(g,v){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new fe(ie.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ou(g.options.projectId,v)})(d,o),d);return u={useFetchStreams:i,...u},p._setSettings(u),p}),"PUBLIC").setMultipleInstances(!0)),to(gv,yv,e),to(gv,yv,"esm2020")})();const Qj={apiKey:"AIzaSyDNeoxp-PIOVG14sQdfk-vstE4LYfh6I1Y",authDomain:"tu2025grad-ae6fd.firebaseapp.com",projectId:"tu2025grad-ae6fd",storageBucket:"tu2025grad-ae6fd.firebasestorage.app",messagingSenderId:"485747297627",appId:"1:485747297627:web:b33c732ec5ccd5c4859e7e"},Xj=hv().length?hv()[0]:fg(Qj),Wl=RE(Xj),g2=40;function UE(n){if(!n)return n;const e="/";if(/^https?:\/\//i.test(n))return n;const i=n.replace(/^\.\.\//,"").replace(/^\//,"");return e+i}const Wj=S.div`
  position: relative; background: #fff;
`,Zj=S.div`
  padding-left: ${g2}px; padding-right: ${g2}px; display: flex; flex-direction: column;
  @media (max-width: 640px) {
    padding-left: 16px;
    padding-right: 16px;  
 }
`;function Jj({children:n}){return y.jsx(Wj,{children:y.jsx(Zj,{children:n})})}const e5=S.div`
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
`,n5=S.div`
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
`,y2=tu,LE=lg,i5={"All Projects":null,"AI & Robot":"c0","Edu & Kids":"c1","Health Care":"c2","IT & Tech":"c3",Living:"c4",Mobility:"c5"};function Pm(n){return n.members.map(e=>{const i=LE.find(a=>a.num===e);return i?i.nameKor:""}).filter(Boolean).join(", ")}function r5(n){return n.members.map(e=>{const i=LE.find(a=>a.num===e);return i?UE(i.imgUrl):""}).filter(Boolean)}function a5({list:n,statsById:e}){const i={c0:"A",c1:"E",c2:"H",c3:"I",c4:"L",c5:"M"};return y.jsx(t5,{children:n.map((a,o)=>{const u=Pm(a),d=r5(a),p=String(a.projectNum+1).padStart(3,"0"),g=`${i[a.category]||"A"}${p}`,v=a.projectNum??a.num;return y.jsx(ug,{titleKor:a.titleKor,titleEng:a.titleEng,src:UE(`/projects/${a.projectNum}/thumb.jpg`||`/projects/${a.projectNum}/thumb.png`),nameKor:u,profileImgs:d,docId:v,href:`/work/${g}`,like:e[String(v)]?.like??0,view:e[String(v)]?.view??0},o)})})}function s5(){const[n,e]=be.useState("All Projects"),[i,a]=be.useState("이름순"),[o,u]=be.useState({});be.useEffect(()=>{let m=!0;return(async()=>{try{const g=await Vm(xh(Wl,"works")),v=g.docs.map(T=>({id:T.id,...T.data()}));if(console.log(JSON.stringify(v,null,2)),!m)return;const E={};g.forEach(T=>{const A=T.data()||{};E[String(T.id)]={like:typeof A.like=="number"?A.like:0,view:typeof A.view=="number"?A.view:0}}),u(E)}catch(g){console.error("Failed to load works stats:",g)}})(),()=>{m=!1}},[]);const d=be.useMemo(()=>{const m=i5[n]||null;return m?y2.filter(g=>g.category===m):y2},[n]),p=be.useMemo(()=>{const m=[...d];switch(i){case"이름순":m.sort((g,v)=>Pm(g).localeCompare(Pm(v),"ko"));break;case"좋아요순":m.sort((g,v)=>{const E=String(g.projectNum??g.num),T=String(v.projectNum??v.num),A=o[E]?.like??0;return(o[T]?.like??0)-A});break;case"조회수순":m.sort((g,v)=>{const E=String(g.projectNum??g.num),T=String(v.projectNum??v.num),A=o[E]?.view??0;return(o[T]?.view??0)-A});break;case"팀작우선":m.sort((g,v)=>(v.members.length>1)-(g.members.length>1));break;case"개인작우선":m.sort((g,v)=>(g.members.length>1)-(v.members.length>1));break}return m},[d,i,o]);return y.jsxs(e5,{children:[y.jsx(n5,{children:"Projects"}),y.jsx(H_,{type:"project",onCategoryChange:e,onSortChange:a,sortLabel:i}),y.jsx(Jj,{children:y.jsx(a5,{list:p,statsById:o})})]})}const o5=S.div(({height:n,from:e,to:i,position:a,z:o})=>({position:"absolute",left:0,right:0,[a]:-1,height:n,pointerEvents:"none",zIndex:o??0,background:`linear-gradient(180deg, ${e} 0%, ${i} 100%)`}));function zE({position:n="bottom",from:e,to:i,height:a=240,z:o=0,style:u}){return y.jsx(o5,{position:n,from:e,to:i,height:a,z:o,style:u})}const ro={heroToWhite:{from:"rgba(18,18,18,0)",to:"#FFFFFF",h:80},whiteToBlack:{from:"rgba(255,255,255,0)",to:"#121212",h:160}},l5=S.section`
  position: relative; height: 100vh; min-height: 620px; overflow: hidden; background: #121212; z-index: 1;
  @media (max-width: 640px) {
    height: 100vh;
    min-height: 220px;
  }
`,u5=S.div`
  position: absolute; inset: 0;
  /* Video container sits here */
`,c5=S.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
`,h5=S.video`
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
`,d5=S.div`
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
`,f5=S.video`
  width: 100%;
  height: 100%;
  display: block;
`,p5=S.div`
  position: absolute;
  inset: 0;
  background-color: rgba(18, 18, 18, 0.2);
`,m5=S.div`
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
`,x2=S.p`
  margin: 0; color: #FFFFFF; font-family: Pretendard, system-ui; font-size: 16px; line-height: 19.2px;
  @media (max-width: 640px) {
    font-size: 13px;
    line-height: 1.4;
  }
`,g5=S.p`
  margin: 0; color: #FFFFFF; font-family: Pretendard, system-ui; font-weight: 600; font-size: 24px; line-height: 27.6px;
  @media (max-width: 640px) {
    font-size: 17px;
    line-height: 1.3;
  }
`,y5=S.button`
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
`;function x5(){const[n,e]=be.useState(!1),i=be.useRef(null),a="/",o=Fh();be.useEffect(()=>()=>{i.current&&clearTimeout(i.current)},[]);const u=()=>{const p=`${typeof window<"u"&&window.innerWidth<640?"projects":"showroom"}`;o(p)};return y.jsxs(l5,{"aria-label":"Hero",children:[y.jsxs(u5,{children:[y.jsx(c5,{"aria-hidden":!0,children:y.jsx(h5,{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata",children:y.jsx("source",{src:`${a}video/hero11.mp4`,type:"video/mp4"})})}),y.jsx(d5,{"aria-label":"Hero background video",children:y.jsxs(f5,{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata",onLoadedData:()=>{i.current&&clearTimeout(i.current),i.current=setTimeout(()=>e(!0),13900)},children:[y.jsx("source",{src:`${a}video/hero11.mp4`,type:"video/mp4"}),"Your browser does not support the video tag."]})}),y.jsx(p5,{})]}),y.jsxs(m5,{$visible:n,children:[y.jsxs(x2,{children:["25. 10. 24. FRI~26. SUN",y.jsx("br",{}),"Hongdae Art Center B2"]}),y.jsx(x2,{children:"Department of Design Engineering"}),y.jsxs(g5,{children:["Tech University of Korea",y.jsx("br",{}),"20th Grad Exhibition"]})]}),y.jsxs(y5,{type:"button",onClick:u,"aria-label":"View More",children:[y.jsx("span",{className:"desktop",children:"View More"}),y.jsx("span",{className:"mobile",children:"View Work"})]}),y.jsx(zE,{position:"bottom",from:ro.heroToWhite.from,to:ro.heroToWhite.to,height:ro.heroToWhite.h,z:0})]})}S.section`
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
`;const v5='Pretendard, system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial, sans-serif',_5=S.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${n=>n.$size==="sm"?40:52}px;
  padding: 0 ${n=>n.$size==="sm"?16:24}px;
  border: 1px solid #FFFFFF;
  color: #FFFFFF;
  background: transparent;
  font-family: ${v5};
  font-weight: 700;
  font-size: ${n=>n.$size==="sm"?13:14}px;
  letter-spacing: 0.2px;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  width: ${n=>n.$full?"100%":"auto"};
  transition: background .15s ease, color .15s ease, border-color .15s ease;
`,w5=S.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-left: 8px;
  border-top: 1px solid #FFFFFF;
  border-right: 1px solid #FFFFFF;
  transform: rotate(45deg);
`;function Wg({as:n="button",href:e,label:i="View More",size:a="md",fullWidth:o=!1,showArrow:u,defaultShowArrow:d=!0,onArrowChange:p,onClick:m,style:g}){const v=typeof u=="boolean",[E,T]=be.useState(d),A=v?u:E;be.useCallback(()=>{if(v){p&&p(!u);return}T(k=>{const V=!k;return p&&p(V),V})},[v,p,u]);const M={onClick:m,style:g,"data-arrow-visible":A,"data-toggle-arrow-fn":void 0,$size:a,$full:o,as:n,href:e,type:n==="button"?"button":void 0};return y.jsxs(_5,{...M,target:"_blank",rel:"noopener noreferrer",children:[i,A?y.jsx(w5,{"aria-hidden":!0}):null]})}const Ut="/",E5=S.section`
  position: relative;
  padding: 120px 40px;
  background: #121212;
  z-index: 1;
`,b5=S.div`
  width: 100%;
  /* max-width: 1840px; */
  margin: 0 auto;
`,T5=S.div`
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
`;const S5=S.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  @media (max-width: 640px) {
    gap: 10px;
    margin-top: 12px;
    display: none; /* hide desktop grid on small screens */
  }
`,zp=S.div`
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
`,A5=S.div`
  display: none;
  @media (max-width: 640px) {
    display: block;
    padding: 20px; /* edge-to-edge on mobile */
    box-sizing: border-box;
  }
`,R5=S.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,I5=S.div`
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  background: #151515;
  aspect-ratio: 2 / 1;
  max-height: 300px;
`,C5=S.div`
  display: flex;
  gap: 8px;
`,v2=S.div`
  flex: 1; /* share available width evenly */
  border-radius: 4px;
  overflow: hidden;
  background: #151515;
  aspect-ratio: 1 / 1;
  max-height: 200px;
`;function j5(){const n=[{src:`${Ut}video/sub1.mp4`,cap:""},{src:`${Ut}sq5.png`,cap:""},{src:`${Ut}sq2.png`,cap:""},{src:`${Ut}video/category.mp4`,cap:""},{src:`${Ut}sq6.png`,cap:""},{src:`${Ut}sq4.png`,cap:""},{src:`${Ut}video/vid22.mp4`,cap:""},{src:`${Ut}sq3.png`,cap:""},{src:`${Ut}sq1.png`,cap:""}],e="calc((100vw - 140px) / 4)",i="calc((100vw - 100px) / 2)";return y.jsx(E5,{"aria-label":"Gallery",children:y.jsxs(b5,{children:[y.jsx(T5,{children:y.jsx(Vl,{src:`${Ut}video/main.mp4`,alt:"featured",muted:!0,autoPlay:!0,playsInline:!0,loop:!0})}),y.jsxs(S5,{className:"gallery-desktop",children:[y.jsxs(zp,{children:[y.jsx(er,{$w:i,$h:e,children:y.jsx(Vl,{src:`${Ut}video/sub1.mp4`,alt:"",muted:!0,autoPlay:!0,playsInline:!0,loop:!0})}),y.jsx(er,{$w:e,$h:e,children:y.jsx(Ys,{src:`${Ut}sq5.png`,alt:""})}),y.jsx(er,{$w:e,$h:e,children:y.jsx(Ys,{src:`${Ut}sq6.png`,alt:""})})]}),y.jsxs(zp,{children:[y.jsx(er,{$w:e,$h:e,children:y.jsx(Ys,{src:`${Ut}sq4.png`,alt:""})}),y.jsx(er,{$w:e,$h:e,children:y.jsx(Ys,{src:`${Ut}sq2.png`,alt:""})}),y.jsx(er,{$w:i,$h:e,children:y.jsx(Vl,{src:`${Ut}video/category.mp4`,alt:"",muted:!0,autoPlay:!0,playsInline:!0,loop:!0})})]}),y.jsxs(zp,{children:[y.jsx(er,{$w:i,$h:e,children:y.jsx(Vl,{src:`${Ut}video/vid22.mp4`,alt:"",muted:!0,autoPlay:!0,playsInline:!0,loop:!0})}),y.jsx(er,{$w:e,$h:e,children:y.jsx(Ys,{src:`${Ut}sq3.png`,alt:""})}),y.jsx(er,{$w:e,$h:e,children:y.jsx(Ys,{src:`${Ut}sq1.png`,alt:""})})]})]}),y.jsx(A5,{children:y.jsx("div",{style:{marginTop:12,display:"flex",flexDirection:"column",gap:12},children:Array.from({length:3}).map((a,o)=>{const u=o*3,d=n[u],p=n[u+1],m=n[u+2];return y.jsxs(R5,{children:[d&&y.jsxs(I5,{children:[y.jsx(Vl,{src:d.src,muted:!0,autoPlay:!0,playsInline:!0,loop:!0,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),d.cap&&y.jsx($p,{style:{opacity:1},children:d.cap})]}),y.jsxs(C5,{children:[p&&y.jsxs(v2,{children:[y.jsx("img",{src:p.src,muted:!0,autoPlay:!0,playsInline:!0,loop:!0,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),p.cap&&y.jsx($p,{style:{opacity:1},children:p.cap})]}),m&&y.jsxs(v2,{children:[y.jsx("img",{src:m.src,muted:!0,autoPlay:!0,playsInline:!0,loop:!0,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),m.cap&&y.jsx($p,{style:{opacity:1},children:m.cap})]})]})]},o)})})}),y.jsx("div",{style:{paddingTop:40,display:"flex",justifyContent:"center"},children:y.jsx(Wg,{as:"a",href:"https://www.youtube.com/@tukgrad2025",label:"View More"})})]})})}const D5=S.section`
  position: relative;
  height: ${n=>`${n.$durationVh}vh`};
`,N5=S.div`
  position: sticky; top: 0; height: 100vh; overflow: hidden;
  display: ${n=>n.$center?"flex":"block"};
  align-items: ${n=>n.$center?"center":"stretch"};
  justify-content: ${n=>n.$center?"center":"unset"};
`,M5=S.div`
  width: 100%;
  ${n=>n.$offset?`transform: translateY(${n.$offset}px);`:""}
`;function O5({durationVh:n=300,center:e=!0,centerOffsetPx:i=0,children:a,style:o}){const u=be.useRef(null),[d,p]=be.useState(0);return be.useEffect(()=>{const m=u.current;if(!m)return;let g=0,v=!0;const E=()=>{if(!v)return;const T=m.getBoundingClientRect(),A=window.innerHeight,M=n/100*A-A,k=Math.min(Math.max(-T.top,0),M);p(M>0?k/M:0),g=requestAnimationFrame(E)};return g=requestAnimationFrame(E),()=>{v=!1,cancelAnimationFrame(g)}},[n]),y.jsx(D5,{ref:u,style:o,$durationVh:n,children:y.jsx(N5,{$center:e,children:y.jsx(M5,{$offset:i,children:typeof a=="function"?a(d):a})})})}const _2=[{id:"w1",index:"A010",artistKr:"송지원, 허지유",dept:"Industrial Design Engineering",titleSmall:"한국산업기술진흥원장상 수상",titleStrong:"BIND",rightMeta1:"Precision and efficency beyond human limits.",rightMeta2:"BIND, 흩어진 시간을 하나로 잇다.",image:"1127032149"},{id:"w2",index:"A017",artistKr:"이채연",dept:"Media Design Engineering",titleSmall:"총동문회장상 수상",titleStrong:"MUSE",rightMeta1:"디자인 논문을 쉽게 활용할 수 있도록 돕는",rightMeta2:"AI 인사이트 제공 서비스",image:"1127403683"},{id:"w3",index:"A011",artistKr:"정혜원, 신주혜",dept:"Industrial Design Engineering",titleSmall:"한국공학대학교총장상 수상",titleStrong:"ENDY",rightMeta1:"감정을 이해하고 반응하는 학습 파트너,",rightMeta2:"자기주도학습의 새로운 동반자 ENDY",image:"1126889031"}],k5=S.div`
  position: relative;
  background: #121212;
  @media (max-width: 640px) {
    background: #121212;
    padding: 0 0 24px 0;
  }
`,V5=S.div`
  display: none;
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100vw;
    padding: 0 0 24px 0;
    box-sizing: border-box;
  }
`,P5=S(es)`
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
`;const U5=S.div`
  padding: 12px 14px 16px 14px;
  color: #fff;
  font-family: Pretendard, system-ui;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,L5=S.div`
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
`,$5=S.div`
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
`,B5=S.div`
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
`,F5=S.div`
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
`,K5=S.div`
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
`,H5=S.div`
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
`,q5=S.small`
  display: block; color: #D9D9D9;
  font-family: Pretendard, system-ui; font-size: 24px; font-weight: 400;
  @media (max-width: 1800px) {
    font-size: 18px;
  }
  @media (max-width: 640px) {
    font-size: 12px;
  }
`,G5=S.strong`
  display: block; color: #FAFAFA;
  font-family: Pretendard, system-ui; font-size: 42px; font-weight: 700;
  @media (max-width: 1800px) {
    font-size: 32px;
  }
  @media (max-width: 640px) {
    font-size: 18px;
  }
`,Y5=S.iframe`
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
`,Q5=S.iframe`
  width: 100%;
  height: auto;
  min-height: 200px;
  border: none;
  display: block;
  margin-top: 16px;
`,X5=(n,e=0,i=1)=>Math.max(e,Math.min(i,n)),Qs=(n,e,i)=>n+(e-n)*i,W5=n=>n<.5?2*n*n:1-Math.pow(-2*n+2,2)/2;function Z5({work:n,progress:e,videoId:i}){String(i||"").trim();const a=`https://player.vimeo.com/video/${n.image}?muted=1&autoplay=1&loop=1&badge=0&controls=0&autopause=0&title=0&byline=0&portrait=0&app_id=58479`,o=W5(X5(e,0,1)),u=Qs(0,-120,o),d=Qs(0,-360,o),p=Qs(0,-280,o),m=Qs(0,-220,o),g=Qs(0,-260,o),v=Qs(0,-180,o),E=.55,A=o<E?1:1-Math.max(0,Math.min(1,(o-E)/(.9-E))),M={transform:`translate3d(0, ${u}px, 0)`,willChange:"transform"},k=B=>({transform:`translate3d(0, ${B}px, 0)`,opacity:A,willChange:"transform, opacity"}),V={transform:`translate3d(0, ${v}px, 0)`,opacity:A,willChange:"transform, opacity"};return y.jsx(y.Fragment,{children:y.jsx(k5,{children:y.jsxs(L5,{children:[y.jsx(z5,{style:M,children:y.jsx(Y5,{src:a,frameBorder:"0"})}),y.jsx($5,{style:k(d),children:n.artistKr}),y.jsx(B5,{style:k(p),children:n.dept}),y.jsx(F5,{style:k(m),children:n.rightMeta1}),y.jsx(K5,{style:k(g),children:n.rightMeta2}),y.jsxs(H5,{style:V,children:[y.jsx(q5,{children:n.titleSmall}),y.jsx(G5,{children:n.titleStrong})]})]})})})}function J5(){return y.jsxs(y.Fragment,{children:[y.jsx("style",{children:`
        @media (max-width: 640px) {
          .expo-works-desktop { display: none !important; }
        }
        @media (min-width: 641px) {
          .expo-works-mobile { display: none !important; }
        }
      `}),y.jsx("div",{className:"expo-works-desktop",children:_2.slice(0,3).map(n=>y.jsx(O5,{durationVh:320,center:!0,centerOffsetPx:-40,children:e=>y.jsx(Z5,{work:n,progress:e})},n.id))}),y.jsx(V5,{className:"expo-works-mobile",children:_2.map(n=>y.jsxs(P5,{to:`work/${n.index}`,children:[y.jsx(Q5,{src:`https://player.vimeo.com/video/${n.image}?badge=0&controls=0&autopause=0&title=0&byline=0&portrait=0&app_id=58479`}),y.jsxs(U5,{children:[y.jsx("div",{style:{fontWeight:700,fontSize:16},children:n.titleStrong}),y.jsxs("div",{style:{fontSize:13,color:"#D9D9D9"},children:[n.artistKr," | ",n.dept]}),y.jsx("div",{style:{fontSize:12,color:"#A1A1A1",marginTop:2},children:n.rightMeta1}),y.jsx("div",{style:{fontSize:12,color:"#A1A1A1"},children:n.rightMeta2})]})]},n.id))})]})}const eD="/",tD=S.div`
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
`,nD=S.div`
  position: relative; 
  height: auto;
`,iD=S.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0px;
  @media (max-width: 640px) {
    gap: 16px;
}
`,rD=S.div`
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
`,aD=S.div`
  display: flex; align-items: center; height: 49px; padding-bottom: 21px; color: #FFFFFF; font-family: Pretendard, system-ui; font-size: 40px; font-weight: 700; line-height: 38.4px;
  @media (max-width: 640px) {
    font-size: 24px; height: 29px; padding-bottom: 12px;
}
`,sD=S.div`
  display: flex; flex-direction: column; align-items: center; gap: 60px; margin-top: 20px;
  @media (max-width: 640px) {
    margin-top: 60px;
    gap: 40px;
}
`,oD=S.div`
  width: 272px; height: 272px; background: #121212; overflow: hidden; display: flex; align-items: center; justify-content: center;
  @media (max-width: 640px) {
    width: 160px; height: 160px;
}
`;function lD(){return y.jsx(tD,{"aria-labelledby":"insta-title",children:y.jsx(nD,{children:y.jsxs(iD,{children:[y.jsx(rD,{children:y.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#FFFFFF",children:[y.jsx("path",{d:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2A3.2 3.2 0 1 1 12 8a3.2 3.2 0 0 1 0 6.4z"}),y.jsx("circle",{cx:"17.5",cy:"6.5",r:"1.2"}),y.jsx("path",{d:"M17.8 2H6.2A4.2 4.2 0 0 0 2 6.2v11.6A4.2 4.2 0 0 0 6.2 22h11.6A4.2 4.2 0 0 0 22 17.8V6.2A4.2 4.2 0 0 0 17.8 2zm2.6 15.8a2.6 2.6 0 0 1-2.6 2.6H6.2a2.6 2.6 0 0 1-2.6-2.6V6.2A2.6 2.6 0 0 1 6.2 3.6h11.6a2.6 2.6 0 0 1 2.6 2.6v11.6z"})]})}),y.jsx(aD,{id:"insta-title",children:"@tukd_grad"}),y.jsxs(sD,{children:[y.jsx(oD,{children:y.jsx("img",{src:`${eD}insta-qr.png`,alt:"Instagram preview"})}),y.jsx(Wg,{as:"a",href:"https://www.instagram.com/tukd_grad?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",label:"View Instagram",size:"sm"})]})]})})})}const Tu=`'Pretendard', system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial, sans-serif`,w2=350,uD=S.section`
  padding: 120px 0 0 0; background: #121212;
`,cD=S.div`
  position: relative; background: #121212;
`,hD=S.div`
  /* padding-left: ${w2}px; padding-right: ${w2}px; */
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
`,dD=({children:n})=>y.jsx(cD,{children:y.jsx(hD,{children:n})}),fD=S.div`
  width: 289px; height: 45px; display: flex; align-items: flex-end;
    @media (max-width: 1250px) {
        width: 200px;
    }
`,pD=S.div`
  font-family: ${Tu}; font-size: 20px; font-weight: 700; line-height: 22.4px; color: #FFFFFF;

  @media (max-width: 640px) {
    font-size: 16px;
}
`;function mD({title:n}){return y.jsx(fD,{children:y.jsx(pD,{children:n})})}const gD=S.div`
  border-bottom: ${n=>n.$last?"none":"1px rgba(255,255,255,0.12) solid"};
  display: flex; gap: 20px; align-items: flex-start;
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 20px;
    padding: 0;
    width: 100%;
  }
`,yD=S.div`
  padding-top: 22px; padding-bottom: 40px;
  border-bottom: ${n=>n.$divider?"1px rgba(255,255,255,0.12) solid":"none"};
  display: flex; gap: 20px; align-items: flex-start;
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 8px;
    padding: 16px 0 20px 0;
  }
`,xD=S.div`
  width: 135px;
  @media (max-width: 640px) {
    width: 100%;
  }
`,vD=S.div`
  font-family: ${Tu}; font-size: 16px; font-weight: 700; line-height: 22.4px; color: #FFFFFF;
  @media (max-width: 640px) {
    font-size: 14px;
}
`,_D=S.div`
  width: 700px; display: flex; flex-direction: column; gap: 10px;
  @media (max-width: 640px) {
    width: 100%;
    gap: 6px;
  }
`;function Gr({k:n,children:e,divider:i=!0}){return y.jsxs(yD,{$divider:i,children:[y.jsx(xD,{children:y.jsx(vD,{children:n})}),y.jsx(_D,{children:e})]})}const wD=S.div`
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
`;function E2({title:n,children:e,last:i=!1}){return y.jsxs(gD,{$last:i,children:[y.jsx(mD,{title:n}),y.jsx(wD,{children:e})]})}const ED=S.div`
  width: 900px; padding-top: 22px; padding-bottom: 40px; border-bottom: 1px rgba(255,255,255,0.12) solid;
    @media (max-width: 1250px) {
        width: 100%;
    }
  @media (max-width: 640px) {
    width: 100%;
    padding: 12px 0px 20px 0px;
    box-sizing: border-box;
  }
`,bD=S.div`
  font-family: ${Tu}; font-size: 16px; font-weight: 700; color: #FFFFFF;
  @media (max-width: 640px) {
    font-size: 14px;
}
`,qe=S.div`
  font-family: ${Tu}; font-size: 16px; font-weight: 300; color: #CCCCCC; letter-spacing: 0px;
  @media (max-width: 640px) {
    font-size: 13px;
}
`,th=S(qe)`
  font-weight: 500;
`,TD=S(qe)`
  font-size: 13px;
`;S(qe)`
  margin-top: 24px;
`;const SD=S.a`
  font-family: ${Tu}; font-size: 16px; font-weight: 300; color: #CCCCCC; text-decoration: underline;
  @media (max-width: 640px) {
    font-size: 13px;
}
`;function AD(){return y.jsx(uD,{"aria-label":"Venue & Access",children:y.jsxs(dD,{children:[y.jsxs(E2,{title:"Venew Details",children:[y.jsx(ED,{children:y.jsx(bD,{children:"잔향 : 기억의 향기"})}),y.jsx(Gr,{k:"Term",children:y.jsx(qe,{children:"2025. 10. 24. FRI - 10. 26. SUN"})}),y.jsxs(Gr,{k:"Hours",children:[y.jsx(qe,{children:"10.24.FRI   13:00 ~ 17:30 (OPENING 16:00~)"}),y.jsx(qe,{children:"10.25.SAT ~ 10.26.SUN    10:00 ~ 17:30"})]}),y.jsxs(Gr,{k:"Schedule",children:[y.jsx(th,{children:"10.24.FRI"}),y.jsx(qe,{children:"13:00    자유관람"}),y.jsx(qe,{children:"15:00    졸업생 홈커밍 행사"}),y.jsx(qe,{children:"16:00    개회식"}),y.jsx(qe,{children:"16:20    졸업작품 우수작 시상"}),y.jsx(qe,{children:"16:30    자유관람"}),y.jsxs(th,{children:[y.jsx("br",{}),"10.25.SAT"]}),y.jsx(qe,{children:"10:00    자유관람"}),y.jsx(qe,{children:"13:00    취·창업 커리어 캠프"}),y.jsxs(th,{children:[y.jsx("br",{}),"10.26.SUN"]}),y.jsx(qe,{children:"10:00    자유관람"})]}),y.jsxs(Gr,{k:"Website",divider:!1,children:[y.jsx(qe,{children:"Hongik Art Center"}),y.jsx(SD,{href:"https://artscenter.hongik.ac.kr/artcenter/index.do",target:"_blank",rel:"noreferrer",children:"https://artscenter.hongik.ac.kr/artcenter/index.do"})]})]}),y.jsxs(E2,{title:"Access",children:[y.jsxs(Gr,{k:"Address",children:[y.jsxs(qe,{children:["홍대 아트센터 지하 2층 전시관 3",y.jsx("br",{}),"서울시 종로구 대학로 57"]}),y.jsxs(qe,{children:["Hongik Art Center B2 Gallery 3",y.jsx("br",{}),"57, Daehak-ro, Jongno-gu, Seoul"]}),y.jsx("div",{style:{marginTop:24},children:y.jsx(Wg,{as:"a",href:"https://maps.app.goo.gl/qc99M9bDqyBTcmx79",label:"Map",size:"sm",showArrow:!0})})]}),y.jsxs(Gr,{k:"Parking",children:[y.jsx(qe,{children:"B3F ~ B6F"}),y.jsxs(qe,{children:[y.jsx("br",{}),"기본 30분 3,000원 / 이후 20분당 2,000원"]}),y.jsx(qe,{children:"이용객 주차권 지참 시 50% 할인 및 1시간 무료이용권 제공"}),y.jsx(th,{children:"(주차권으로만 정산 가능, 티켓정산 불가)"}),y.jsx(TD,{children:"주차권 배부 장소: B2 갤러리 3, 전시장 입구 인포데스크"})]}),y.jsxs(Gr,{k:"By Subway",children:[y.jsx(qe,{children:"[1호선 종로5가역]"}),y.jsx(qe,{children:"2번 출구 방면으로 이동 → 이화사거리 방면으로 약 800m 직진 (도보7분)"}),y.jsxs(qe,{children:[y.jsx("br",{}),"[4호선 혜화역]"]}),y.jsx(qe,{children:"3번 출구 방면으로 이동 → 이화사거리 방면으로 약 800m 직진 (도보7분)"}),y.jsx(qe,{children:"또는 08번 마을버스 탑승 후 이화사거리 앞 하차"})]}),y.jsxs(Gr,{k:"By Bus",divider:!1,children:[y.jsx(qe,{children:"[이화사거리(01-572) 하차]"}),y.jsx(qe,{children:"마을버스 종로 08번"}),y.jsxs(qe,{children:[y.jsx("br",{}),"[현대그룹빌딩(01-218) 하차]"]}),y.jsx(qe,{children:"102, 107, 108, 109, 162, 301, 7025"}),y.jsxs(qe,{children:[y.jsx("br",{}),"[이화장(01-223) 하차]"]}),y.jsx(qe,{children:"109, 273, 601, 2112, 7025"})]})]})]})})}const wh="/",RD=S.div`
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
`,ID=S.div`
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
`,b2=S.div`
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
`,CD=S(Um)`
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
`,jD=S.img`
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
`,DD=S.img`
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
`,ND=S.img`
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
`,T2=S.div`
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
`,MD=S.div`
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
`,OD=tg`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`,kD=S.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    cursor: pointer;
    animation: ${OD} 1.8s ease-in-out infinite;
    @media (max-width: 640px) {
        width: 40px;
        height: 40px;
    }
`,VD=S.div`
    width: 100%;
    height: 100%;
    background-image: url('${wh}icons/showIndicatorDown.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    transform: ${n=>n.$flipped?"scaleY(-1)":"none"};
    transition: transform 400ms ease;
`,PD=S.div`
    font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: #FFF;
    @media (max-width: 640px) {
        font-size: 16px;
    }
`,UD=S.div`
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
`;function LD({}){const[n,e]=z.useState(!1),i=z.useRef(null),[a,o]=z.useState(0);z.useEffect(()=>{if(!i.current)return;const d=i.current.querySelectorAll("div")[0].scrollHeight/2.7;if(n){const p=d*3.5;o(p)}else o(d)},[n]);const u=[{title:"잔향 : 기억의 향기",context:`우리는 살아가며 수많은 순간들을 스쳐 지나간다.
                        그 순간들은 이내 사라지는 듯하지만, 마음속 깊이 은은히 스며들어 기억이 되고, 결국엔 우리 존재의 한 조각이 된다.

                        <잔향> 전시는 작품이 남긴 향이 관람객에게 스며들어 시간이 지나도 떠오를
                        수 있는 ‘기억의 향기’를 남기고자 한다. 단순한 결과물의 나열이 아닌, 창작의 과정과 고민이 축적된 흔적들이 이 공간에 머무는 이들의 감각과 감정 속에 잔잔히 머물기를 바란다.

                        전시를 마주한 순간이 훗날, 불현듯 떠오르는 영감으로 다시 피어나기를.
                        우리의 잔향이 누군가의 기억 속에서 오래도록 머물 수 있기를 바랍니다.`},{title:"기억을 통한 향 추출",context:`기억은 손에 잡히지 않지만 우리 안에 깊이 스며들어 감각의 결로 남습니다. 이 기억은 사라지지 않고 다시 응축되어, 마치 맡을 수 있는 '향’ 으로 추출되듯 되살아납니다.

                하나의 향이 탑·미들·베이스 노트로 이루어지듯, 기억 또한 여러 겹의 경험과 감정으로 구성됩니다. 작품을 마주한 첫 순간의 인상과 그 당시에 겪은 감정, 그리고 시간이 흐른 뒤 불현듯 되살아나는 여운이 서로 다른 노트를 이루어 층위를 만듭니다. <잔향> 전시는 이러한 기억의 향을 여섯 개의 주제로 응축하여 감각적으로 제시합니다.

                학생들이 쌓아온 고민과 탐구의 시간, 하나의 작품을 완성하기 위한 노력한 과정은 AI&ROBOT, EDUCATION&KIDS, HEALTH CARE, IT& TECH, LIVING, MOBILITY라는 여섯 가지 향으로 드러납니다. 각각 독립된 향은 노트처럼 뚜렷한 개성을 지니면서도 함께 어우러져 전체적인 조화를 완성합니다.`},{title:"잔향의 형",context:"세 갈래로 뻗어 나가는 유기적인 곡선은 꽃잎의 형상을 닮아, 작품 속에서 향이 피어오르고 퍼져나가는 순간을 담았습니다. 곡선들이 서로 교차하며 만들어내는 흐름은 창작의 과정에서 이어지는 영감과 감정을 나타내고, 그 중심에 놓인 물방울은 남겨진 향과 기억의 매개체를 의미합니다. 이는 전시를 통해 스며든 감각과 감정이 시간이 지나도 서서히 피어오르는 잔향으로 남기를 바라는 의지를 담고 있습니다."}];return y.jsxs(RD,{ref:i,$height:a,children:[y.jsxs(ID,{children:[y.jsxs(Bp,{children:[y.jsx(b2,{children:y.jsx(Fp,{children:y.jsx("span",{children:u[0].title})})}),y.jsxs(T2,{children:[y.jsx(Um,{children:u[0].context}),y.jsx(jD,{src:`${wh}brand-concept-logo.png`})]})]}),y.jsxs(Bp,{children:[y.jsx(b2,{children:y.jsx(Fp,{children:u[1].title})}),y.jsxs(T2,{children:[y.jsx(Um,{children:u[1].context}),y.jsx(DD,{src:`${wh}brand-category.png`})]})]}),y.jsxs(Bp,{children:[y.jsxs(MD,{children:[y.jsx(Fp,{children:u[2].title}),y.jsx(CD,{children:u[2].context})]}),y.jsx(ND,{src:`${wh}brand-variation.png`})]})]}),y.jsx(zE,{position:"bottom",from:ro.whiteToBlack.from,to:ro.whiteToBlack.to,height:ro.whiteToBlack.h,z:0}),y.jsxs(UD,{children:[y.jsx(kD,{onClick:()=>e(d=>!d),children:y.jsx(VD,{$flipped:n})}),y.jsx(PD,{children:n?"접기":"더보기"})]})]})}S.div`
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
`;function $D(){const n=[y.jsx(x5,{},"hero"),y.jsx(LD,{},"new-brand"),y.jsx(j5,{},"gallery"),y.jsx(zD,{children:"TU-EXPO Works"},"works-title"),y.jsx(J5,{},"works"),y.jsx(lD,{},"insta"),y.jsx(AD,{},"venue")];return y.jsx("div",{style:{background:"#121212",minHeight:"100vh"},children:n})}const BD="/",Zg="Pretendard, system-ui",FD=S.div`
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
`,KD=`${BD}guestbook-card.svg`,HD=S.div`
  width: 181px;
  height: 147px;
  position: absolute;
  left: 6px;
  top: 190px;
  background-image: url(${KD});
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
`,qD=S.div` 
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
`,GD=S.div`
  /* position: absolute; */
  font-family: ${Zg};
  font-weight: 600;
  font-size: 20px;
  color: #555;
  @media (max-width: 640px) {
    font-size: 16px;
  }
`,YD=S.div`
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
`,QD=S.div`
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
`;function XD({to:n,from:e,message:i}){return y.jsxs(FD,{$w:yo,$h:Ja,children:[y.jsx(HD,{}),y.jsxs(qD,{$w:yo,$h:Ja,children:[y.jsx(GD,{children:`To. ${n}`}),y.jsx(YD,{children:i}),y.jsx(QD,{children:`From. ${e}`})]})]})}const WD=S.div`
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
`,ZD=S.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;function JD({src:n}){return y.jsx(WD,{$w:yo,$h:Ja,children:y.jsx(ZD,{src:n,alt:"포토 카드"})})}const eN=S.button`
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
`,nN=S.div`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  display: grid;
  place-items: center;
  @media (max-width: 640px) {
    width: 26px;
    height: 26px;
  }
`,iN=S.div`
  width: 32px;
  height: 32px;
  position: relative;
  @media (max-width: 640px) {
    width: 26px;
    height: 26px;
  }
`,rN=S.span`
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
`,aN=S.span`
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
`;function sN({onClick:n}){return y.jsxs(eN,{onClick:n,"aria-label":"방명록 작성",$w:yo,$h:Ja,children:[y.jsx(tN,{$w:yo,$h:Ja}),y.jsx(nN,{children:y.jsxs(iN,{children:[y.jsx(rN,{}),y.jsx(aN,{})]})})]})}const yo=270,Ja=337,oN=30,$E=20,lN=210,uN=60,BE=173,FE=216,cN=16,hN=16,Lm=16,dN=S.div`
  padding: 0 0 12px 0;
  @media (max-width: 640px) {
    display: none;
  }
`,fN=S.div`
  position: relative;
  width: 100%;
  height: 3px;
  background: #171717;
  border-radius: 2px;
  overflow: hidden;
`,pN=S.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 3px;
  width: ${n=>n.$w}px;
  min-width: 25px;
  background: #7a7a7a;
  border-radius: 2px;
  transition: width 350ms ease-in;
`,mN=S.div`
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-y;
  cursor: grab;
  padding: 0 ${uN}px 0 ${lN}px;
  scrollbar-width: none; 
  -ms-overflow-style: none;
  &::-webkit-scrollbar { display: none; }

  @media (max-width: 640px) {
    overflow: visible;
    padding: 0px;
    cursor: default;
  }
`,gN=S.div`
  display: flex;
  gap: ${oN}px;
  align-items: flex-start;
  min-height: ${Ja*2+$E}px;

  @media (max-width: 640px) {
    gap: ${cN}px;
    min-height: initial;
  }
`,yN=S.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: ${Lm}px;
  padding: 0 16px; /* 좌우 16px 고정 마진 */
`,xN=S.div`
  width: calc((100% - ${Lm}px) / 2);
  height: ${FE}px;
  flex: 0 0 calc((100% - ${Lm}px) / 2);
`,vN=S.div`
  @media (max-width: 640px) { display: none; }
`,_N=S.div`
  display: none;
  @media (max-width: 640px) { display: block; }
`,wN=S.div`
  display: flex;
  flex-direction: column;
  gap: ${$E}px;
  @media (max-width: 640px) {
    width: ${BE}px;
    gap: ${hN}px;
  }
`,KE=S.div`
  width: ${yo}px;
  height: ${Ja}px;
  @media (max-width: 640px) {
    width: ${BE}px;
    height: ${FE}px;
  }
`,EN=S.div`
  display: block;
  cursor: pointer;
`,S2=n=>{const e=[{type:"add",id:"add"},...n],i=[{min:6,max:10},{min:16,max:20},{min:26,max:30}];let a=0;const o="/";return i.forEach((u,d)=>{if(e.length>u.min+a){const p=Math.min(Math.floor(Math.random()*(u.max-u.min+1))+u.min,e.length)+a;let m;do m=Math.floor(Math.random()*7)+1;while(e[e.length-1]?.id===`ph-${Date.now()}-${e.length-1}`&&m===e[e.length-1]?.id);e.splice(p,0,{type:"photo",id:`ph-${Date.now()}-${d}`,src:`${o}sq${m}.png`}),a++}}),e},bN=n=>{const e=[];for(let i=0;i<n.length;i+=2)e.push([n[i],n[i+1]||null]);return e};function TN({onOpenModal:n,items:e}){const i=z.useRef(null),[a,o]=z.useState({width:0,trackW:0}),[u,d]=z.useState(()=>S2(e)),[p,m]=z.useState(()=>window.matchMedia&&window.matchMedia("(max-width: 640px)").matches);z.useEffect(()=>{d(S2(e))},[e]);const g=bN(u);z.useEffect(()=>{if(!window.matchMedia)return;const A=window.matchMedia("(max-width: 640px)"),M=k=>m(k.matches);return A.addEventListener?A.addEventListener("change",M):A.addListener(M),()=>{A.removeEventListener?A.removeEventListener("change",M):A.removeListener(M)}},[]),z.useEffect(()=>{if(p)return;const A=i.current;if(!A)return;const M=k=>{Math.abs(k.deltaY)>Math.abs(k.deltaX)&&(A.scrollLeft+=k.deltaY,k.preventDefault())};return A.addEventListener("wheel",M,{passive:!1}),()=>A.removeEventListener("wheel",M)},[p]);const v=z.useRef({on:!1,moved:!1,startX:0,startScroll:0}),E=A=>!!A?.closest?.('button, a, input, textarea, select, label, [role="button"], [data-nodrag]');z.useEffect(()=>{if(p)return;const A=i.current;if(!A)return;const M=B=>{B.button===0&&(E(B.target)||(v.current.on=!0,v.current.moved=!1,v.current.startX=B.clientX,v.current.startScroll=A.scrollLeft,A.setPointerCapture?.(B.pointerId),document.body.style.userSelect="none",A.style.cursor="grabbing"))},k=B=>{if(!v.current.on)return;const q=B.clientX-v.current.startX;Math.abs(q)>2&&(v.current.moved=!0),A.scrollLeft=v.current.startScroll-q},V=B=>{v.current.on&&(A.releasePointerCapture?.(B.pointerId),document.body.style.userSelect="",A.style.cursor="grab",v.current.moved&&(B.preventDefault(),B.stopPropagation()),v.current.on=!1)};return A.addEventListener("pointerdown",M),window.addEventListener("pointermove",k),window.addEventListener("pointerup",V),A.addEventListener("pointercancel",V),()=>{A.removeEventListener("pointerdown",M),window.removeEventListener("pointermove",k),window.removeEventListener("pointerup",V),A.removeEventListener("pointercancel",V)}},[p]);const T=z.useCallback(()=>{const A=i.current;if(!A)return;const M=A.clientWidth,k=A.scrollWidth,V=A.scrollLeft,q=A.parentElement?.clientWidth||M,Z=Math.max(1,k-M),le=Math.min(1,Math.max(0,V/Z)),K=Math.round(q*le);o({width:K,trackW:q})},[]);return z.useEffect(()=>{if(p)return;T();const A=i.current;if(!A)return;const M=()=>requestAnimationFrame(T),k=()=>requestAnimationFrame(T);return A.addEventListener("scroll",M,{passive:!0}),window.addEventListener("resize",k),()=>{A.removeEventListener("scroll",M),window.removeEventListener("resize",k)}},[T,p]),y.jsxs(y.Fragment,{children:[y.jsxs(vN,{children:[y.jsx(dN,{children:y.jsx(fN,{children:y.jsx(pN,{$w:a.width})})}),y.jsx(mN,{ref:i,children:y.jsx(gN,{children:g.map((A,M)=>y.jsxs(wN,{children:[y.jsx(Kp,{data:A[0],onOpenModal:n}),A[1]?y.jsx(Kp,{data:A[1],onOpenModal:n}):y.jsx(KE,{})]},`col-${M}`))})})]}),y.jsx(_N,{children:y.jsx(yN,{children:u.map(A=>y.jsx(xN,{children:y.jsx(Kp,{data:A,onOpenModal:n})},A.id))})})]})}function Kp({data:n,onOpenModal:e}){return n?n.type==="add"?y.jsx(sN,{onClick:()=>e?.({type:"add"}),style:{pointerEvents:"auto"}}):n.type==="photo"?y.jsx(JD,{src:n.src}):y.jsx(EN,{role:"button",tabIndex:0,"aria-label":`open guestbook card ${n.from?`from ${n.from}`:""}`,onClick:()=>e?.({type:"guestbook",item:n}),onKeyDown:i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),e?.({type:"guestbook",item:n}))},"data-nodrag":!0,children:y.jsx(XD,{to:n.to,from:n.from,message:n.message})}):y.jsx(KE,{})}const HE="/",SN=tg`
  from { opacity: 0; }
  to { opacity: 1; }
`,AN=tg`
  from { opacity: 1; }
  to { opacity: 0; }
`,A2=S.div`
  position: fixed; inset: 0; z-index: 1000;
  display: grid; place-items: center;
  background: rgba(0,0,0,.45);
  opacity: 0;
  animation: ${n=>n.$closing?AN:SN} 220ms ease-out forwards;
  @media (max-width: 640px) {
    align-items: end;
    padding: 0 16px 84px 16px;
  }
`,R2=S.div`
  position: relative; display: inline-flex; align-items: flex-end; gap: 17px;
  @media (max-width: 640px) {
    gap: 0;
  }
`,I2=S.div`
  padding: 40px; border-radius: 16px;
  background: rgba(160,160,160,.80);
  backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
  display: inline-flex; gap: 20px; align-items: center;
  @media (max-width: 640px) {
    padding: 18px;
    border-radius: 12px;
  }
`,RN=S.div`
  width: 520px; display: inline-flex; gap: 20px; align-items: center;
  @media (max-width: 640px) {
    width: 300px;
    gap: 12px;
  }
`,C2=S.div`
  width: 450px; height: 560px; position: relative; overflow: hidden;
  border-radius: 16px;
  background: linear-gradient(246deg, #F2F0FF -0.07%, #FFF 99.93%);
  box-shadow: 0 20px 60px rgba(0,0,0,.25);
  @media (max-width: 640px) {
    width: 260px;
    height: 340px;
    border-radius: 12px;
  }
`,j2=S.div`
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
`,D2=S.div`
  position: absolute; left: 32px; top: 50px; display: inline-flex; align-items: center; gap: 8px;
  @media (max-width: 640px) {
    left: 18px; top: 22px; gap: 6px;
  }
`,N2=S.div`
  font-family: Pretendard, system-ui; font-weight: 600; font-size: 32px; color: #555;
  @media (max-width: 640px) {
    font-size: 22px;
  }
`,IN=S.input`
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
`,CN=S.div`
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
`,M2=S.div`
  position: absolute; left: 32px; top: 104px; width: 381px;
  @media (max-width: 640px) {
    left: 18px; top: 78px; width: 206px;
  }
`,jN=S.textarea`
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
`,DN=S.div`
  width: 353px; min-height: 220px; resize: none;
  border: none; outline: none;
  border-radius: 12px; padding: 14px 0px;
  font-family: Pretendard, system-ui; font-size: 24px; line-height: 150%; color: #303030;
  font-weight: 400;
  @media (max-width: 640px) {
    min-height: 120px; border-radius: 10px; padding: 10px 12px;
    font-size: 14px; line-height: 21px;
  }
`,O2=S.div`
  position: absolute; right: 32px; top: 472px; display: inline-flex; align-items: center; gap: 8px;
  @media (max-width: 640px) {
    left: 110px; top: 270px; gap: 6px;
  }
  @media (max-width: 640px) {
    left: auto; top: auto; right: 18px; bottom: 16px; gap: 6px;
  }
`,k2=S.div`
  font-family: Pretendard, system-ui; font-weight: 600; font-size: 32px; color: #555;
  @media (max-width: 640px) {
    font-size: 22px;
  }
`,NN=S.input`
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
`,MN=S.div`
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
`,ON=S.div`
  width: 50px; height: 560px; display: inline-flex; flex-direction: column; justify-content: flex-end;
  @media (max-width: 640px) {
    height: 340px;
  }
`,kN=S.button`
  width: 50px; height: 50px; border-radius: 25px;
  background: #202020; cursor: pointer;
  display: grid; place-items: center; border: none;
  @media (max-width: 640px) {
    width: 40px; height: 40px; border-radius: 20px;
  }
  &:hover {
    background: #404040;
  }
`,VN=S.div`
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
`,V2=S.div`
  width: 60px; height: 640px; position: relative;
  @media (max-width: 640px) {
    width: 100%; height: auto;
  }
`,P2=S.button`
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
`,U2=S.div`
  width: 32px; height: 32px; position: relative;
`,nh=S.span`
  position: absolute; left: 15px; top: 4px; width: 2px; height: 24px;
  background: #FFFFFF; transform: rotate(${n=>n.$deg}deg);
  @media (max-width: 640px) {
    left: 15px; top: 4px; height: 24px;
  }
`;function PN({open:n,onClose:e,onSubmit:i,defaultTo:a="",defaultFrom:o="",defaultMessage:u="",type:d}){const[p,m]=z.useState(n),[g,v]=z.useState(!1),[E,T]=z.useState(a),[A,M]=z.useState(o),[k,V]=z.useState(""),B=z.useRef(null),q=z.useCallback(()=>{v(!0),T(""),M(""),V(""),e?.()},[e]);if(z.useEffect(()=>{const K=oe=>{oe.key==="Escape"&&q()};return n&&document.addEventListener("keydown",K),()=>document.removeEventListener("keydown",K)},[n,q]),z.useEffect(()=>{n&&(m(!0),v(!1),T((a??"").toString()),M((o??"").toString()),V((u??"").toString()))},[n,a,o,u]),z.useEffect(()=>{if(!n&&p){v(!0);const K=setTimeout(()=>{v(!1),m(!1)},220);return()=>clearTimeout(K)}},[n,p]),!p)return null;const Z=K=>{K.target===B.current&&q()},le=()=>{const K={to:(E||"").trim(),from:(A||"").trim(),message:(k||"").trim()};K.message&&i?.(K)};if(console.log(d),d==="add")return y.jsx(A2,{ref:B,onMouseDown:Z,$closing:g,children:y.jsxs(R2,{onMouseDown:K=>K.stopPropagation(),children:[y.jsx(I2,{children:y.jsxs(RN,{children:[y.jsxs(C2,{children:[y.jsx(j2,{}),y.jsxs(D2,{children:[y.jsx(N2,{children:"To."}),y.jsx(IN,{value:E,onChange:K=>T(K.target.value),placeholder:"받는 사람"})]}),y.jsx(M2,{children:y.jsx(jN,{placeholder:"내용을 입력해 주세요.",value:k,onChange:K=>V(K.target.value)})}),y.jsxs(O2,{children:[y.jsx(k2,{children:"From."}),y.jsx(NN,{value:A,onChange:K=>M(K.target.value),placeholder:"보내는 사람"})]})]}),y.jsx(ON,{children:y.jsx(kN,{type:"button",onClick:le,"aria-label":"send",children:y.jsx(VN,{})})})]})}),y.jsx(V2,{children:y.jsx(P2,{type:"button",onClick:q,"aria-label":"close",children:y.jsxs(U2,{children:[y.jsx(nh,{$deg:45}),y.jsx(nh,{$deg:-45})]})})})]})});if(d==="guestbook")return y.jsx(A2,{ref:B,onMouseDown:Z,$closing:g,children:y.jsxs(R2,{onMouseDown:K=>K.stopPropagation(),children:[y.jsx(I2,{children:y.jsxs(C2,{children:[y.jsx(j2,{}),y.jsxs(D2,{children:[y.jsx(N2,{children:"To."}),y.jsx(CN,{children:a})]}),y.jsx(M2,{children:y.jsx(DN,{children:u})}),y.jsxs(O2,{children:[y.jsx(k2,{children:"From."}),y.jsx(MN,{children:o})]})]})}),y.jsx(V2,{children:y.jsx(P2,{type:"button",onClick:q,"aria-label":"close",children:y.jsxs(U2,{children:[y.jsx(nh,{$deg:45}),y.jsx(nh,{$deg:-45})]})})})]})})}const UN={apiKey:"AIzaSyDNeoxp-PIOVG14sQdfk-vstE4LYfh6I1Y",authDomain:"tu2025grad-ae6fd.firebaseapp.com",projectId:"tu2025grad-ae6fd",storageBucket:"tu2025grad-ae6fd.firebasestorage.app",messagingSenderId:"485747297627",appId:"1:485747297627:web:b33c732ec5ccd5c4859e7e"},LN=fg(UN),Hp=RE(LN),zN='Pretendard, system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial, sans-serif',$N=S.div`
  background: #121212; min-height: 100vh;
`,BN=S.main`
  padding: 80px 40px 120px 40px;
  @media (max-width: 640px) {
    padding: 52px 0 80px 0;
  }
`,FN=S.h1`
  font-family: ${zN}; font-weight: 700; font-size: 32px; color: #FFFFFF; text-align: center; margin: 20px 0 40px;
  @media (max-width: 640px) {
    font-size: 20px; margin: 4px 0 24px ;
  }
`,KN=S.section`
  display: flex; justify-content: center;
  @media (max-width: 640px) {
    justify-content: stretch;
  }
`,HN=S.div`
  width: 100%;
  @media (max-width: 640px) {
    width: 100%;
  }
`;function qN(){const[n,e]=be.useState(!1),[i,a]=be.useState("add"),[o,u]=be.useState({to:"",from:"",message:""}),[d,p]=be.useState([]);be.useEffect(()=>{let E=!0;return(async()=>{try{const T=d2(xh(Hp,"guest"),f2("time","desc")),A=await Vm(T);if(!E)return;const M=[];A.forEach(k=>{const V=k.data();M.push({id:k.id,to:V.to||"",from:V.from||"",message:V.message||"",type:"text"})}),p(M)}catch(T){console.error("Failed to load guestbook items:",T)}})(),()=>{E=!1}},[]);const m=async({to:E,from:T,message:A})=>{try{const M=String(Date.now());await Xg(Xl(xh(Hp,"guest"),M),{to:E||"",from:T||"",message:A||"",time:M});try{const k=d2(xh(Hp,"guest"),f2("time","desc")),V=await Vm(k),B=[];V.forEach(q=>{const Z=q.data();B.push({id:q.id,to:Z.to||"",from:Z.from||"",message:Z.message||"",type:"text"})}),p(B)}catch(k){console.error("Failed to reload guestbook items after submit:",k)}e(!1)}catch(M){console.error("Failed to submit guest message:",M)}},g=`
    .gb-wrap *::-webkit-scrollbar { display: none; }
    .gb-wrap * { scrollbar-width: none; -ms-overflow-style: none; }
    .gb-wrap article img { width: 100% !important; height: 100% !important; object-fit: cover !important; display: block !important; }
  `,v=be.useCallback(E=>{E&&typeof E=="object"&&E.type?(a(E.type),E.type==="guestbook"&&E.item?u({to:E.item.to||"",from:E.item.from||"",message:E.item.message||""}):u({to:"",from:"",message:""})):(a("add"),u({to:"",from:"",message:""})),e(!0)},[]);return y.jsxs($N,{children:[y.jsxs(BN,{children:[y.jsx(FN,{children:"Guest Book"}),y.jsx(KN,{children:y.jsxs(HN,{className:"gb-wrap",children:[y.jsx("style",{children:g}),y.jsx(TN,{onOpenModal:v,items:d})]})})]}),y.jsx(PN,{open:n,type:i,defaultTo:o.to,defaultFrom:o.from,defaultMessage:o.message,onClose:()=>e(!1),onSubmit:m})]})}const zm="/",GN=S.div`
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
`,YN=S.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: auto;
  @media (max-width: 640px) {
    gap: 40px;
    /* width: calc(100% - 32px); */
}
`,QN=S.div`
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
`,XN=S.div`
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 640px) {
    display: none;
}
`,WN=S.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  /* align-items: center; */
  gap: 20px;
  @media (max-width: 640px) {
    width: 100%;
}
`,ZN=S.h1`
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
`,JN=S.h2`
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
`,e9=S.div`
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
`,n9=S.div`
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
`,i9=S.div`
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
`,r9=S.div`
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
`,a9=S.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
`,s9=S.div`
  width: 24px;
  height: 24px;
  background-image: ${({$src:n})=>`url("${n}")`};
  background-size: contain;
  background-repeat: no-repeat;
  @media (max-width: 640px) {
    width: 16px;
    height: 16px;
}
`,o9=S.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #e0e0e0;
  margin: 0;
  padding: 0;
  @media (max-width: 640px) {
    font-size: 16px;
}
`,l9=S.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 12px;
  cursor: pointer;
`,u9=S.p`
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
`,c9=S.div`
  display: flex;
  width: 20px;
  height: 75px;
  align-items: center;
  justify-content: center;
  background-image: url('${zm}icons/pageDownIcon.svg');
  background-size: contain;
  background-repeat: no-repeat;
  @media (max-width: 640px) {
    width: 10px;
    height: 38px;
}
`;function $m({titleKor:n,titleEng:e,context:i,isOpen:a=!0,onClose:o,src:u,docId:d,collection:p="works"}){const[m,g]=z.useState(0),[v,E]=z.useState(!1);z.useEffect(()=>{let M=!0;return(async()=>{if(d!=null)try{const k=Xl(Wl,p,String(d)),V=await _h(k);if(!M)return;if(V.exists()){const B=V.data();g(typeof B.like=="number"?B.like:0)}else g(0)}catch(k){console.error("Firestore getDoc error:",k),M&&g(0)}})(),()=>{M=!1}},[d,p]);const T=async()=>{try{const M=Xl(Wl,p,String(d)),k=await _h(M);if(k.exists()){const V=k.data();g(typeof V.like=="number"?V.like:0)}}catch(M){console.error("Firestore refresh error:",M)}},A=async()=>{if(v)return;if(d==null){console.warn("handleLike called without a valid docId");return}E(!0);const M=Xl(Wl,p,String(d));try{await zh(M,{like:$h(1)}),g(k=>k+1),await T()}catch(k){if(k.code==="not-found"||/No document/i.test(String(k)))try{(await _h(M)).exists()?await zh(M,{like:$h(1)}):await Xg(M,{like:1},{merge:!0}),await T()}catch(V){console.error("Firestore like fallback error:",V)}else console.error("Firestore like error:",k)}finally{E(!1)}};return y.jsx(GN,{$open:!!a,children:y.jsxs(YN,{children:[y.jsxs(QN,{children:[y.jsx(XN,{onClick:()=>{typeof o=="function"&&o()},children:y.jsx("img",{src:`${zm}icons/closeIcon.svg`,alt:"Close Icon"})}),y.jsxs(WN,{children:[y.jsx(n9,{$src:u}),y.jsxs(e9,{children:[y.jsx(JN,{children:n}),y.jsx(ZN,{children:e})]}),y.jsx(t9,{children:i})]})]}),y.jsxs(i9,{children:[y.jsx(r9,{onClick:A,"aria-disabled":v,title:v?"처리 중":"좋아요",children:y.jsxs(a9,{children:[y.jsx(s9,{$src:`${zm}icons/likeIcon(white).svg`,"aria-label":"Like icon"}),y.jsx(o9,{children:m||0})]})}),y.jsxs(l9,{onClick:()=>{const k=Math.max(document.documentElement?.scrollHeight||0,document.body?.scrollHeight||0)-window.innerHeight,B=Math.max(0,k-269);window.scrollTo({top:B,behavior:"smooth"})},children:[y.jsx(u9,{children:"Designer Info"}),y.jsx(c9,{})]})]})]})})}$m.propTypes={titleKor:J.string.isRequired,titleEng:J.string.isRequired,context:J.string.isRequired,isOpen:J.bool,onClose:J.func,docId:J.oneOfType([J.string,J.number]).isRequired,collection:J.string};const h9=S.div`
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
`,d9=S.div`
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
`,f9=S.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  display: block;
`,p9=S.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 8px);
  width: auto;
  @media (max-width: 640px) {
    height: 100%;
}
`,m9=S.div`
  display: flex;
  height: auto;
  padding: 0;
  margin: 0;
  flex-direction: column;
  gap: 0px;
`,g9=S.h1`
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
`,y9=S.h2`
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
`,x9=S.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 84px;
  @media (max-width: 640px) {
    height: 38px;
}
`,v9=S.div`
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
`,_9=S.div`
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
`;function Jg({nameKor:n,nameEng:e,part:i,sns:a,eMail:o,imgUrl:u,imgAlt:d}){return y.jsxs(h9,{children:[y.jsx(d9,{children:y.jsx(f9,{src:u,alt:d})}),y.jsxs(p9,{children:[y.jsxs(m9,{children:[y.jsx(g9,{children:n}),y.jsx(y9,{children:e})]}),y.jsxs(x9,{children:[y.jsxs(v9,{children:[y.jsx(qp,{children:"Part"}),y.jsx(qp,{children:"SNS"}),y.jsx(qp,{children:"E-mail"})]}),y.jsxs(_9,{children:[y.jsx(Gp,{children:i}),y.jsx(Gp,{children:a}),y.jsx(Gp,{children:o})]})]})]})]})}Jg.propTypes={nameKor:J.string.isRequired,nameEng:J.string.isRequired,part:J.string,sns:J.string,eMail:J.string,imgUrl:J.string.isRequired,imgAlt:J.string.isRequired};Jg.defaultProps={sns:"N/A",eMail:"N/A"};const w9=S.div`
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
`,E9=S.div`
  display: flex;
  flex-direction: column;
  width: 810px;
  height: auto;
  gap: 76px;
  @media (max-width: 640px) {
    width: 100%;
    gap: 21px;
}
`,b9=S.h1`
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
`;function L2({designers:n}){return y.jsxs(w9,{children:[y.jsx(b9,{children:"Designer"}),y.jsx(E9,{children:n.map((e,i)=>y.jsx(Jg,{nameKor:e.nameKor,nameEng:e.nameEng,part:e.role,sns:e.sns,eMail:e.eMail,imgUrl:e.imgUrl},i))})]})}const T9=S.div`
    width: 100%; // 임시값
    margin-top: 50px;
    max-width: ${n=>n.$isInfoOpen?"100%":"1800px"};
@media (max-width: 640px) {
    margin-top: 20px;
}
`,S9=S.div`
    position: relative;
    width: 100%;
    max-width: 100vw;
    padding-top: 56.25%; // 16:9 비율
`,A9=S.iframe`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
`;function R9({videoId:n,isInfoOpen:e}){const a=`https://player.vimeo.com/video/${String(n||"").trim()}?badge=0&autopause=0&title=0&byline=0&portrait=0&app_id=58479`;return y.jsx(T9,{$isInfoOpen:e,children:y.jsx(S9,{children:y.jsx(A9,{src:a,frameBorder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,title:"Embedded Vimeo"})})})}const I9="/",C9=S.div`
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
`,j9=S.div`
    display: flex;
    width: 40px;
    height: 40px;
`;function D9({isOpen:n=!1,onClick:e}){const[i,a]=z.useState(!1);return z.useEffect(()=>{let o;return n?a(!1):(a(!1),o=setTimeout(()=>{a(!0)},500)),()=>clearTimeout(o)},[n]),y.jsx(C9,{$visible:!n,$active:i,onClick:()=>{typeof e=="function"&&e()},children:y.jsx(j9,{children:y.jsx("img",{src:`${I9}icons/infoOpenIcon.svg`,alt:"작품 정보 열기"})})})}function ih(n){if(!n)return n;const e="/";if(/^https?:\/\//i.test(n))return n;const i=String(n).replace(/^\.\.\//,"").replace(/^\//,"");return e+i}const N9=S.img`
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
`,Yp=n=>y.jsx(N9,{loading:"lazy",...n}),M9=S.div`
  display: flex;
  position: relative;
  background: #fff;
  width: 100%;
  @media (max-width: 640px) {
    flex-direction: column;
}
`,O9=S.div`
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
`,k9=S.div`
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
`,z2=S.div`
  display: flex;
  position: relative;
  width: 100%;
`,V9=S.div`
  position: relative;
  width: 100%;
  height: auto;
  /* max-width: 1800px; */
`,P9={A:"c0",E:"c1",H:"c2",I:"c3",L:"c4",M:"c5"};function U9(){const{pid:n}=JT(),e=(n||"").toUpperCase().match(/^([A-Z])(\d{3})$/),[i,a]=z.useState(!0),[o,u]=z.useState(!0),d=()=>{a(!1),setTimeout(()=>{u(!1)},500)},p=()=>{u(!0),setTimeout(()=>{a(!0)},0)};let m=null;if(e){const[,B,q]=e,Z=P9[B]||null,le=Math.max(0,parseInt(q,10)-1);m=tu.find(K=>K.projectNum===le&&(!Z||K.category===Z)),m||(m=tu.find(K=>K.projectNum==le))}if(!m)return y.jsx(z2,{children:y.jsxs(PageContainer,{children:[y.jsx($m,{titleKor:"작품 제목(한글)",titleEng:"Work Title (English)",context:"이곳은 작품 설명이 들어가는 영역입니다. 작품에 대한 상세한 설명이나 배경, 제작 과정 등을 기술할 수 있습니다. 이 텍스트는 예시로 작성된 내용이며, 실제 작품 설명으로 대체되어야 합니다.",isOpen:i,onClose:()=>a(!1),docId:0}),y.jsx(Yp,{src:"https://placehold.co/1530x4000",alt:"featured"}),y.jsx(L2,{children:"  "})]})});const g=(m.members||[]).map(B=>{const q=lg.find(Z=>Z.num===B);return q?{nameKor:q.nameKor,nameEng:q.nameEng,role:q.role||"Designer",sns:q.sns||"-",eMail:q.eMail||"",imgUrl:ih(q.imgUrl||"/김예준.jpg")}:null}).filter(Boolean),E={c0:"A",c1:"E",c2:"H",c3:"I",c4:"L",c5:"M"}[m.category]||"A",T=m.projectNum??m.num,A=String(T).padStart(3,"0"),M=`/projects/${T}`,[k,V]=z.useState([]);return z.useEffect(()=>{let B=!1;const q=["jpg"],Z=30,le=2,K=I=>!I||!I.ok?!1:(I.headers.get("content-type")||"").startsWith("image/"),oe=async I=>{try{const C=await fetch(I,{method:"GET",cache:"no-store"});return K(C)}catch{return!1}};return(async()=>{const I=[];let C=0;for(let j=0;j<Z;j++){let O=!1;for(const U of q){const $=ih(`${M}/gallery/${j}.${U}`);if(await oe($)){I.push($),O=!0,C=0;break}}if(!O&&(I.length===0||(C+=1,C>=le)))break}B||V(I)})(),()=>{B=!0}},[M]),z.useEffect(()=>{const B=m?.projectNum??m?.num;if(B==null)return;const Z=Xl(Wl,"works",String(B));(async()=>{try{await zh(Z,{view:$h(1)})}catch(le){if(le.code==="not-found"||/No document/i.test(String(le)))try{(await _h(Z)).exists()?await zh(Z,{view:$h(1)}):await Xg(Z,{view:1},{merge:!0})}catch(K){console.error("Firestore view fallback error:",K)}else console.error("Firestore view error:",le)}})()},[m?.projectNum,m?.num]),y.jsx(z2,{children:y.jsxs(M9,{children:[y.jsx(D9,{isOpen:i,onClick:p}),y.jsx(k9,{$visible:o,children:y.jsx($m,{titleKor:m.titleKor,titleEng:m.titleEng,context:m.description||"null",isOpen:i,onClose:d,src:ih(`/projects/${T}/thumb.jpg`),docId:T})}),y.jsxs(O9,{$isInfoOpen:i,children:[k.length>0?k.map((B,q)=>y.jsx(Yp,{src:B,alt:`project-${E}${A}-img-${q+1}`},q)):y.jsx(Yp,{src:ih("/thumbnailExample.gif"),alt:`project-${E}${A}-placeholder`}),y.jsx(R9,{videoId:m.videoId,isInfoOpen:i}),y.jsx(V9,{children:y.jsx(L2,{designers:g})})]})]})})}const L9=S.div`
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
`;function $9({visible:n=!0,fadeMs:e=400,activeIndex:i=0,total:a=5}={}){const o=new Array(a).fill(0);return y.jsx(L9,{$visible:n,$fadeMs:e,"aria-hidden":!n,children:o.map((u,d)=>y.jsx(z9,{$active:d===(i??0)},d))})}const Qp=S.div`
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
`,$2=S.div`
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
`,B2=S.div`
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
`,F2=S.div`
    display: flex;
    width: 72px;
    height: 1px;

    height: 1px; background:#333;
    width: ${({$shown:n,$lineWidth:e})=>n?e||"72px":"0px"};
    transition:
    width ${({$lDur:n})=>n}ms ${({$ease:n})=>n} ${({$lDelay:n})=>n}ms;
`,K2=S.div`
    display: flex;
    align-items: center;
    gap: 12px;
    mix-blend-mode: difference;
`,B9=S.div`
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
`,F9=S.p`
    font-size: 16px;
    font-weight: 300;
    color: #222;
    line-height: 150%;
    text-align: justify;
    margin: 0;
`;function Xp({children:n,textWidth:e,textHeight:i,shown:a,tDur:o,tDelay:u,ease:d}){return y.jsx(B9,{$textWidth:e,$textHeight:i,$shown:a,$tDur:o,$tDelay:u,$ease:d,children:y.jsx(F9,{children:n})})}function K9({top:n,left:e,right:i="auto",bottom:a,lineWidth:o,textWidth:u,textHeight:d,children:p,position:m="left",isActive:g,section:v,currentSection:E,anim:T}){const[A,M]=z.useState(!1),k=T?.circle?.easing||T?.line?.easing||T?.text?.easing||"cubic-bezier(0.22,1,0.36,1)",V=T?.circle?.duration??250,B=T?.circle?.delay??120,q=T?.line?.duration??500,Z=B+V+(T?.line?.delay??120),le=T?.text?.duration??280,K=Z+q+(T?.text?.delay??80),I=g||A&&E===v;if(z.useEffect(()=>{g&&!A&&M(!0)},[g,A]),m==="right")return y.jsxs(Qp,{$top:n,$left:e,$right:i,$bottom:a,children:[y.jsx(Xp,{textWidth:u,textHeight:d,shown:I,tDur:le,tDelay:K,ease:k,children:p}),y.jsxs(K2,{children:[y.jsx(F2,{$lineWidth:o,$shown:I,$lDur:q,$lDelay:Z,$ease:k}),y.jsx($2,{$shown:I,$cDur:V,$cDelay:B,$ease:k,children:y.jsx(B2,{$shown:I,$cDur:V,$cDelay:B,$ease:k})})]})]});if(m==="left")return y.jsxs(Qp,{$top:n,$left:e,$right:i,$bottom:a,children:[y.jsxs(K2,{children:[y.jsx($2,{$shown:I,$cDur:V,$cDelay:B,$ease:k,children:y.jsx(B2,{$shown:I,$cDur:V,$cDelay:B,$ease:k})}),y.jsx(F2,{$lineWidth:o,$shown:I,$lDur:q,$lDelay:Z,$ease:k})]}),y.jsx(Xp,{textWidth:u,textHeight:d,shown:I,tDur:le,tDelay:K,ease:k,children:p})]});if(m==="no-line")return y.jsx(Qp,{$top:n,$left:e,$right:i,$bottom:a,children:y.jsx(Xp,{textWidth:u,textHeight:d,shown:I,tDur:le,tDelay:K,ease:k,children:p})})}const Wp="/",H9=S.div`
    display: flex;
    position: relative;
    margin-top: 80px;
    width: 100vw;
    flex-direction: column;
`,q9=S.div`
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
`,G9=S.div`
    display: flex;
    position: fixed;
    width: 100vw;
    height: 40px;
    bottom: 0;
    left: 0;
    background-color: #202020;
    z-index: 6;
`;function Y9(){const n=z.useRef(null),[e,i]=z.useState(0),a=z.useRef(0),o=z.useRef(!1),u=z.useRef(null),d=z.useRef(0),p=1200,m=1500,[g,v]=z.useState(0),[E,T]=z.useState(!1),[A,M]=z.useState(!0),k=z.useRef(!1),V=z.useRef(null),B=[{top:"130vh",left:"15vw",textWidth:"300px",textHeight:"auto",position:"left",section:1,info:"모든 꽃이 피어날 수 있는 근원적인 기반이다. 거칠고 단단한 돌은 졸업전시를 향한 수많은 준비와 실험, 실패와 성장의 흔적을 품고 있다. 돌 위에 스며든 이끼와 작은 생명들은 그 과정 속에서 서서히 쌓인 노력의 결실을 상징한다. 이는 향이 머무는 토양처럼, 모든 창작의 향이 퍼져나가기 전의 저장된 시간을 의미한다."},{top:"220vh",right:"53vw",textWidth:"300px",textHeight:"auto",position:"right",section:2,info:"시간 위에 피어난 졸업생들의 존재이자 향의 발화점이다. 꽃은 자신만의 빛깔과 감정, 그리고 이야기를 담은 향을 내뿜는다. 이 향은 단순한 냄새가 아닌, 졸업생들의 기억과 감정이 응축된 예술의 잔향이다. 전시장을 거닐던 관람객들은 그 향을 맡으며 각자의 기억과 감정 속에서 새로운 장면을 떠올리고, 그 순간 작품은 관람객의 내면으로 스며든다."},{top:"355vh",right:"15vw",textWidth:"300px",textHeight:"auto",position:"right",section:3,info:"향의 흐름이 새로운 생명으로 이어지는 장면을 형상화한다. 돌에서 피어난 꽃들이 줄기와 풀로 연결되며, 이는 졸업전시를 통해 이어지는 졸업생과 관람객의 감정적 교류를 상징한다. 꽃에서 나온 향을 맡은 관람객들은 단순히 감상자가 아닌, 그 향의 영향을 받아 자신만의 ‘꽃’을 피우는 존재로 변화한다. 그리고 다시 그들이 만들어내는 향은 또 다른 사람에게 스며들어, 기억과 감정의 연쇄를 만들어낸다."},{top:"420vh",left:"25vw",textWidth:"300px",textHeight:"auto",position:"no-line",section:4,info:"결국 이 세 오브제는 한 사람의 향이 또 다른 향으로 이어지는 순환을 이야기한다. 돌은 그 순환의 뿌리이며, 꽃은 향의 시작점이고, 메인오브제는 그 향이 세상으로 확산되어 기억과 창작이 끊임없이 이어지는 ‘잔향의 생태계’를 완성하는 상징이다."}],q=e===1||e===4?1:.3,Z=e===2||e===4?1:.3,le=e===3||e===4?1:.3;return z.useEffect(()=>{const K=()=>{if(!n.current)return;const oe=n.current.getBoundingClientRect().top+window.scrollY,C=Math.max(0,Math.min(window.scrollY-oe,4*window.innerHeight))/window.innerHeight*100;let j=0;C>=350?j=4:C>=270?j=3:C>=170?j=2:C>=70?j=1:j=0,i(O=>O===j?O:j)};return window.addEventListener("scroll",K,{passive:!0}),K(),()=>window.removeEventListener("scroll",K)},[]),z.useEffect(()=>{const K=oe=>{if(M(!1),k.current=!0,clearTimeout(V.current),T(!1),!n.current)return;const I=n.current.getBoundingClientRect().top+window.scrollY,C=I,j=I+4*window.innerHeight,O=window.scrollY;if(O<C-20||O>j+20)return;if(o.current){oe.preventDefault();return}if(Date.now()-d.current<p+m){oe.preventDefault();return}const $=oe.deltaY,D=Math.sign($);if(D===0)return;const Ke=Math.max(0,Math.min(4,a.current+D));if(Ke===a.current){oe.preventDefault();return}o.current=!0,d.current=Date.now(),a.current=Ke;const ee=I+Ke*window.innerHeight;window.scrollTo({top:ee,behavior:"smooth"}),clearTimeout(u.current),u.current=setTimeout(()=>{o.current=!1,T(!0),v(Ke)},1e3),oe.preventDefault()};return window.addEventListener("wheel",K,{passive:!1}),()=>{window.removeEventListener("wheel",K),clearTimeout(u.current)}},[]),z.useEffect(()=>{const K=oe=>{const I=[" ","PageDown","ArrowDown"],C=["PageUp","ArrowUp"];M(!1),k.current=!0,clearTimeout(V.current),I.includes(oe.key)?(oe.preventDefault(),window.dispatchEvent(new WheelEvent("wheel",{deltaY:100}))):C.includes(oe.key)&&(oe.preventDefault(),window.dispatchEvent(new WheelEvent("wheel",{deltaY:-100})))};return window.addEventListener("keydown",K),()=>window.removeEventListener("keydown",K)},[]),z.useEffect(()=>(k.current||(M(!0),clearTimeout(V.current),V.current=setTimeout(()=>{M(!1),k.current=!0},1e4)),()=>clearTimeout(V.current)),[]),z.useEffect(()=>{},[E,g]),y.jsxs(H9,{children:[y.jsx($9,{visible:A,fadeMs:700,activeIndex:g,total:5}),y.jsxs(q9,{ref:n,children:[B.map((K,oe)=>y.jsx(K9,{top:K.top,left:K.left,right:K.right,textWidth:K.textWidth,textHeight:K.textHeight,position:K.position,isActive:E&&g===K.section,anim:{circle:{duration:250,delay:120,easing:"cubic-bezier(0.22,1,0.36,1)"},line:{duration:500,delay:120,easing:"cubic-bezier(0.22,1,0.36,1)"},text:{duration:280,delay:80,easing:"cubic-bezier(0.22,1,0.36,1)"}},section:K.section,currentSection:g,children:K.info},oe)),y.jsx(Zp,{src:`${Wp}showroom/showRight.png`,alt:"Showroom Right",$opacity:le}),y.jsx(Zp,{src:`${Wp}showroom/showCenter.png`,alt:"Showroom Center",$opacity:Z}),y.jsx(Zp,{src:`${Wp}showroom/showLeft.png`,alt:"Showroom Left",$opacity:q})]}),y.jsx(G9,{})]})}var Jp={exports:{}},Pl={},em={exports:{}},tm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H2;function Q9(){return H2||(H2=1,(function(n){function e(ee,de){var ye=ee.length;ee.push(de);e:for(;0<ye;){var Ce=ye-1>>>1,P=ee[Ce];if(0<o(P,de))ee[Ce]=de,ee[ye]=P,ye=Ce;else break e}}function i(ee){return ee.length===0?null:ee[0]}function a(ee){if(ee.length===0)return null;var de=ee[0],ye=ee.pop();if(ye!==de){ee[0]=ye;e:for(var Ce=0,P=ee.length,ae=P>>>1;Ce<ae;){var ce=2*(Ce+1)-1,he=ee[ce],ge=ce+1,je=ee[ge];if(0>o(he,ye))ge<P&&0>o(je,he)?(ee[Ce]=je,ee[ge]=ye,Ce=ge):(ee[Ce]=he,ee[ce]=ye,Ce=ce);else if(ge<P&&0>o(je,ye))ee[Ce]=je,ee[ge]=ye,Ce=ge;else break e}}return de}function o(ee,de){var ye=ee.sortIndex-de.sortIndex;return ye!==0?ye:ee.id-de.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;n.unstable_now=function(){return u.now()}}else{var d=Date,p=d.now();n.unstable_now=function(){return d.now()-p}}var m=[],g=[],v=1,E=null,T=3,A=!1,M=!1,k=!1,V=!1,B=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;function le(ee){for(var de=i(g);de!==null;){if(de.callback===null)a(g);else if(de.startTime<=ee)a(g),de.sortIndex=de.expirationTime,e(m,de);else break;de=i(g)}}function K(ee){if(k=!1,le(ee),!M)if(i(m)!==null)M=!0,oe||(oe=!0,$());else{var de=i(g);de!==null&&Ke(K,de.startTime-ee)}}var oe=!1,I=-1,C=5,j=-1;function O(){return V?!0:!(n.unstable_now()-j<C)}function U(){if(V=!1,oe){var ee=n.unstable_now();j=ee;var de=!0;try{e:{M=!1,k&&(k=!1,q(I),I=-1),A=!0;var ye=T;try{t:{for(le(ee),E=i(m);E!==null&&!(E.expirationTime>ee&&O());){var Ce=E.callback;if(typeof Ce=="function"){E.callback=null,T=E.priorityLevel;var P=Ce(E.expirationTime<=ee);if(ee=n.unstable_now(),typeof P=="function"){E.callback=P,le(ee),de=!0;break t}E===i(m)&&a(m),le(ee)}else a(m);E=i(m)}if(E!==null)de=!0;else{var ae=i(g);ae!==null&&Ke(K,ae.startTime-ee),de=!1}}break e}finally{E=null,T=ye,A=!1}de=void 0}}finally{de?$():oe=!1}}}var $;if(typeof Z=="function")$=function(){Z(U)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,st=D.port2;D.port1.onmessage=U,$=function(){st.postMessage(null)}}else $=function(){B(U,0)};function Ke(ee,de){I=B(function(){ee(n.unstable_now())},de)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ee){ee.callback=null},n.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<ee?Math.floor(1e3/ee):5},n.unstable_getCurrentPriorityLevel=function(){return T},n.unstable_next=function(ee){switch(T){case 1:case 2:case 3:var de=3;break;default:de=T}var ye=T;T=de;try{return ee()}finally{T=ye}},n.unstable_requestPaint=function(){V=!0},n.unstable_runWithPriority=function(ee,de){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var ye=T;T=ee;try{return de()}finally{T=ye}},n.unstable_scheduleCallback=function(ee,de,ye){var Ce=n.unstable_now();switch(typeof ye=="object"&&ye!==null?(ye=ye.delay,ye=typeof ye=="number"&&0<ye?Ce+ye:Ce):ye=Ce,ee){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=ye+P,ee={id:v++,callback:de,priorityLevel:ee,startTime:ye,expirationTime:P,sortIndex:-1},ye>Ce?(ee.sortIndex=ye,e(g,ee),i(m)===null&&ee===i(g)&&(k?(q(I),I=-1):k=!0,Ke(K,ye-Ce))):(ee.sortIndex=P,e(m,ee),M||A||(M=!0,oe||(oe=!0,$()))),ee},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(ee){var de=T;return function(){var ye=T;T=de;try{return ee.apply(this,arguments)}finally{T=ye}}}})(tm)),tm}var q2;function X9(){return q2||(q2=1,em.exports=Q9()),em.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G2;function W9(){if(G2)return Pl;G2=1;var n=X9(),e=Bm(),i=X4();function a(t){var r="https://react.dev/errors/"+t;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)r+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var r=t,s=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(s=r.return),t=r.return;while(t)}return r.tag===3?s:null}function d(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function p(t){if(u(t)!==t)throw Error(a(188))}function m(t){var r=t.alternate;if(!r){if(r=u(t),r===null)throw Error(a(188));return r!==t?null:t}for(var s=t,l=r;;){var h=s.return;if(h===null)break;var f=h.alternate;if(f===null){if(l=h.return,l!==null){s=l;continue}break}if(h.child===f.child){for(f=h.child;f;){if(f===s)return p(h),t;if(f===l)return p(h),r;f=f.sibling}throw Error(a(188))}if(s.return!==l.return)s=h,l=f;else{for(var w=!1,b=h.child;b;){if(b===s){w=!0,s=h,l=f;break}if(b===l){w=!0,l=h,s=f;break}b=b.sibling}if(!w){for(b=f.child;b;){if(b===s){w=!0,s=f,l=h;break}if(b===l){w=!0,l=f,s=h;break}b=b.sibling}if(!w)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:r}function g(t){var r=t.tag;if(r===5||r===26||r===27||r===6)return t;for(t=t.child;t!==null;){if(r=g(t),r!==null)return r;t=t.sibling}return null}var v=Object.assign,E=Symbol.for("react.element"),T=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),q=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),j=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),U=Symbol.iterator;function $(t){return t===null||typeof t!="object"?null:(t=U&&t[U]||t["@@iterator"],typeof t=="function"?t:null)}var D=Symbol.for("react.client.reference");function st(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===D?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case M:return"Fragment";case V:return"Profiler";case k:return"StrictMode";case K:return"Suspense";case oe:return"SuspenseList";case j:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case Z:return(t.displayName||"Context")+".Provider";case q:return(t._context.displayName||"Context")+".Consumer";case le:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return r=t.displayName||null,r!==null?r:st(t.type)||"Memo";case C:r=t._payload,t=t._init;try{return st(t(r))}catch{}}return null}var Ke=Array.isArray,ee=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ye={pending:!1,data:null,method:null,action:null},Ce=[],P=-1;function ae(t){return{current:t}}function ce(t){0>P||(t.current=Ce[P],Ce[P]=null,P--)}function he(t,r){P++,Ce[P]=t.current,t.current=r}var ge=ae(null),je=ae(null),_e=ae(null),gt=ae(null);function Le(t,r){switch(he(_e,r),he(je,t),he(ge,null),r.nodeType){case 9:case 11:t=(t=r.documentElement)&&(t=t.namespaceURI)?zx(t):0;break;default:if(t=r.tagName,r=r.namespaceURI)r=zx(r),t=$x(r,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ce(ge),he(ge,t)}function Mt(){ce(ge),ce(je),ce(_e)}function Ni(t){t.memoizedState!==null&&he(gt,t);var r=ge.current,s=$x(r,t.type);r!==s&&(he(je,t),he(ge,s))}function qn(t){je.current===t&&(ce(ge),ce(je)),gt.current===t&&(ce(gt),Il._currentValue=ye)}var ln=Object.prototype.hasOwnProperty,la=n.unstable_scheduleCallback,rs=n.unstable_cancelCallback,fd=n.unstable_shouldYield,Io=n.unstable_requestPaint,pn=n.unstable_now,Su=n.unstable_getCurrentPriorityLevel,Ot=n.unstable_ImmediatePriority,zt=n.unstable_UserBlockingPriority,Mi=n.unstable_NormalPriority,pd=n.unstable_LowPriority,Co=n.unstable_IdlePriority,md=n.log,ua=n.unstable_setDisableYieldValue,cr=null,en=null;function Dn(t){if(typeof md=="function"&&ua(t),en&&typeof en.setStrictMode=="function")try{en.setStrictMode(cr,t)}catch{}}var un=Math.clz32?Math.clz32:Ru,gd=Math.log,Au=Math.LN2;function Ru(t){return t>>>=0,t===0?32:31-(gd(t)/Au|0)|0}var oi=256,hr=4194304;function Gn(t){var r=t&42;if(r!==0)return r;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Nn(t,r,s){var l=t.pendingLanes;if(l===0)return 0;var h=0,f=t.suspendedLanes,w=t.pingedLanes;t=t.warmLanes;var b=l&134217727;return b!==0?(l=b&~f,l!==0?h=Gn(l):(w&=b,w!==0?h=Gn(w):s||(s=b&~t,s!==0&&(h=Gn(s))))):(b=l&~f,b!==0?h=Gn(b):w!==0?h=Gn(w):s||(s=l&~t,s!==0&&(h=Gn(s)))),h===0?0:r!==0&&r!==h&&(r&f)===0&&(f=h&-h,s=r&-r,f>=s||f===32&&(s&4194048)!==0)?r:h}function dr(t,r){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&r)===0}function as(t,r){switch(t){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jo(){var t=oi;return oi<<=1,(oi&4194048)===0&&(oi=256),t}function fr(){var t=hr;return hr<<=1,(hr&62914560)===0&&(hr=4194304),t}function ss(t){for(var r=[],s=0;31>s;s++)r.push(t);return r}function vt(t,r){t.pendingLanes|=r,r!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Iu(t,r,s,l,h,f){var w=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var b=t.entanglements,N=t.expirationTimes,Y=t.hiddenUpdates;for(s=w&~s;0<s;){var te=31-un(s),re=1<<te;b[te]=0,N[te]=-1;var Q=Y[te];if(Q!==null)for(Y[te]=null,te=0;te<Q.length;te++){var X=Q[te];X!==null&&(X.lane&=-536870913)}s&=~re}l!==0&&pr(t,l,0),f!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=f&~(w&~r))}function pr(t,r,s){t.pendingLanes|=r,t.suspendedLanes&=~r;var l=31-un(r);t.entangledLanes|=r,t.entanglements[l]=t.entanglements[l]|1073741824|s&4194090}function mr(t,r){var s=t.entangledLanes|=r;for(t=t.entanglements;s;){var l=31-un(s),h=1<<l;h&r|t[l]&r&&(t[l]|=r),s&=~h}}function Do(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function No(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Oi(){var t=de.p;return t!==0?t:(t=window.event,t===void 0?32:s1(t.type))}function yd(t,r){var s=de.p;try{return de.p=t,r()}finally{de.p=s}}var li=Math.random().toString(36).slice(2),_t="__reactFiber$"+li,Gt="__reactProps$"+li,ki="__reactContainer$"+li,ca="__reactEvents$"+li,ha="__reactListeners$"+li,xd="__reactHandles$"+li,Yn="__reactResources$"+li,gr="__reactMarker$"+li;function os(t){delete t[_t],delete t[Gt],delete t[ca],delete t[ha],delete t[xd]}function ui(t){var r=t[_t];if(r)return r;for(var s=t.parentNode;s;){if(r=s[ki]||s[_t]){if(s=r.alternate,r.child!==null||s!==null&&s.child!==null)for(t=Hx(t);t!==null;){if(s=t[_t])return s;t=Hx(t)}return r}t=s,s=t.parentNode}return null}function ci(t){if(t=t[_t]||t[ki]){var r=t.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return t}return null}function yr(t){var r=t.tag;if(r===5||r===26||r===27||r===6)return t.stateNode;throw Error(a(33))}function xr(t){var r=t[Yn];return r||(r=t[Yn]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function wt(t){t[gr]=!0}var Cu=new Set,da={};function hi(t,r){di(t,r),di(t+"Capture",r)}function di(t,r){for(da[t]=r,t=0;t<r.length;t++)Cu.add(r[t])}var fa=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),fi={},ls={};function vd(t){return ln.call(ls,t)?!0:ln.call(fi,t)?!1:fa.test(t)?ls[t]=!0:(fi[t]=!0,!1)}function pa(t,r,s){if(vd(r))if(s===null)t.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(r);return;case"boolean":var l=r.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(r);return}}t.setAttribute(r,""+s)}}function ma(t,r,s){if(s===null)t.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttribute(r,""+s)}}function Mn(t,r,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(r,s,""+l)}}var ga,us;function Vi(t){if(ga===void 0)try{throw Error()}catch(s){var r=s.stack.trim().match(/\n( *(at )?)/);ga=r&&r[1]||"",us=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ga+t+us}var cs=!1;function hs(t,r){if(!t||cs)return"";cs=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(r){var re=function(){throw Error()};if(Object.defineProperty(re.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(re,[])}catch(X){var Q=X}Reflect.construct(t,[],re)}else{try{re.call()}catch(X){Q=X}t.call(re.prototype)}}else{try{throw Error()}catch(X){Q=X}(re=t())&&typeof re.catch=="function"&&re.catch(function(){})}}catch(X){if(X&&Q&&typeof X.stack=="string")return[X.stack,Q.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=l.DetermineComponentFrameRoot(),w=f[0],b=f[1];if(w&&b){var N=w.split(`
`),Y=b.split(`
`);for(h=l=0;l<N.length&&!N[l].includes("DetermineComponentFrameRoot");)l++;for(;h<Y.length&&!Y[h].includes("DetermineComponentFrameRoot");)h++;if(l===N.length||h===Y.length)for(l=N.length-1,h=Y.length-1;1<=l&&0<=h&&N[l]!==Y[h];)h--;for(;1<=l&&0<=h;l--,h--)if(N[l]!==Y[h]){if(l!==1||h!==1)do if(l--,h--,0>h||N[l]!==Y[h]){var te=`
`+N[l].replace(" at new "," at ");return t.displayName&&te.includes("<anonymous>")&&(te=te.replace("<anonymous>",t.displayName)),te}while(1<=l&&0<=h);break}}}finally{cs=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?Vi(s):""}function _d(t){switch(t.tag){case 26:case 27:case 5:return Vi(t.type);case 16:return Vi("Lazy");case 13:return Vi("Suspense");case 19:return Vi("SuspenseList");case 0:case 15:return hs(t.type,!1);case 11:return hs(t.type.render,!1);case 1:return hs(t.type,!0);case 31:return Vi("Activity");default:return""}}function Qn(t){try{var r="";do r+=_d(t),t=t.return;while(t);return r}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function ft(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function vr(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function ya(t){var r=vr(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),l=""+t[r];if(!t.hasOwnProperty(r)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var h=s.get,f=s.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return h.call(this)},set:function(w){l=""+w,f.call(this,w)}}),Object.defineProperty(t,r,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(w){l=""+w},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function _r(t){t._valueTracker||(t._valueTracker=ya(t))}function Ze(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var s=r.getValue(),l="";return t&&(l=vr(t)?t.checked?"true":"false":t.value),t=l,t!==s?(r.setValue(t),!0):!1}function Pi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var xa=/[\n"\\]/g;function $t(t){return t.replace(xa,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Mo(t,r,s,l,h,f,w,b){t.name="",w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.type=w:t.removeAttribute("type"),r!=null?w==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+ft(r)):t.value!==""+ft(r)&&(t.value=""+ft(r)):w!=="submit"&&w!=="reset"||t.removeAttribute("value"),r!=null?ko(t,w,ft(r)):s!=null?ko(t,w,ft(s)):l!=null&&t.removeAttribute("value"),h==null&&f!=null&&(t.defaultChecked=!!f),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+ft(b):t.removeAttribute("name")}function Oo(t,r,s,l,h,f,w,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),r!=null||s!=null){if(!(f!=="submit"&&f!=="reset"||r!=null))return;s=s!=null?""+ft(s):"",r=r!=null?""+ft(r):s,b||r===t.value||(t.value=r),t.defaultValue=r}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=b?t.checked:!!l,t.defaultChecked=!!l,w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"&&(t.name=w)}function ko(t,r,s){r==="number"&&Pi(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function wr(t,r,s,l){if(t=t.options,r){r={};for(var h=0;h<s.length;h++)r["$"+s[h]]=!0;for(s=0;s<t.length;s++)h=r.hasOwnProperty("$"+t[s].value),t[s].selected!==h&&(t[s].selected=h),h&&l&&(t[s].defaultSelected=!0)}else{for(s=""+ft(s),r=null,h=0;h<t.length;h++){if(t[h].value===s){t[h].selected=!0,l&&(t[h].defaultSelected=!0);return}r!==null||t[h].disabled||(r=t[h])}r!==null&&(r.selected=!0)}}function ju(t,r,s){if(r!=null&&(r=""+ft(r),r!==t.value&&(t.value=r),s==null)){t.defaultValue!==r&&(t.defaultValue=r);return}t.defaultValue=s!=null?""+ft(s):""}function Du(t,r,s,l){if(r==null){if(l!=null){if(s!=null)throw Error(a(92));if(Ke(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),r=s}s=ft(r),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l)}function On(t,r){if(r){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=r;return}}t.textContent=r}var Ui=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Vo(t,r,s){var l=r.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="":l?t.setProperty(r,s):typeof s!="number"||s===0||Ui.has(r)?r==="float"?t.cssFloat=s:t[r]=(""+s).trim():t[r]=s+"px"}function Po(t,r,s){if(r!=null&&typeof r!="object")throw Error(a(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||r!=null&&r.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var h in r)l=r[h],r.hasOwnProperty(h)&&s[h]!==l&&Vo(t,h,l)}else for(var f in r)r.hasOwnProperty(f)&&Vo(t,f,r[f])}function ds(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nu=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Mu=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xn(t){return Mu.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Uo=null;function Lo(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Er=null,cn=null;function Ou(t){var r=ci(t);if(r&&(t=r.stateNode)){var s=t[Gt]||null;e:switch(t=r.stateNode,r.type){case"input":if(Mo(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),r=s.name,s.type==="radio"&&r!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+$t(""+r)+'"][type="radio"]'),r=0;r<s.length;r++){var l=s[r];if(l!==t&&l.form===t.form){var h=l[Gt]||null;if(!h)throw Error(a(90));Mo(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(r=0;r<s.length;r++)l=s[r],l.form===t.form&&Ze(l)}break e;case"textarea":ju(t,s.value,s.defaultValue);break e;case"select":r=s.value,r!=null&&wr(t,!!s.multiple,r,!1)}}}var va=!1;function _a(t,r,s){if(va)return t(r,s);va=!0;try{var l=t(r);return l}finally{if(va=!1,(Er!==null||cn!==null)&&(bc(),Er&&(r=Er,t=cn,cn=Er=null,Ou(r),t)))for(r=0;r<t.length;r++)Ou(t[r])}}function br(t,r){var s=t.stateNode;if(s===null)return null;var l=s[Gt]||null;if(l===null)return null;s=l[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,r,typeof s));return s}var hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Li=!1;if(hn)try{var Tr={};Object.defineProperty(Tr,"passive",{get:function(){Li=!0}}),window.addEventListener("test",Tr,Tr),window.removeEventListener("test",Tr,Tr)}catch{Li=!1}var kn=null,it=null,fs=null;function ku(){if(fs)return fs;var t,r=it,s=r.length,l,h="value"in kn?kn.value:kn.textContent,f=h.length;for(t=0;t<s&&r[t]===h[t];t++);var w=s-t;for(l=1;l<=w&&r[s-l]===h[f-l];l++);return fs=h.slice(t,1<l?1-l:void 0)}function wa(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function Ea(){return!0}function zo(){return!1}function kt(t){function r(s,l,h,f,w){this._reactName=s,this._targetInst=h,this.type=l,this.nativeEvent=f,this.target=w,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(s=t[b],this[b]=s?s(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ea:zo,this.isPropagationStopped=zo,this}return v(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Ea)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Ea)},persist:function(){},isPersistent:Ea}),r}var tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ba=kt(tn),Ta=v({},tn,{view:0,detail:0}),Sa=kt(Ta),ps,Aa,pi,Ra=v({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ys,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==pi&&(pi&&t.type==="mousemove"?(ps=t.screenX-pi.screenX,Aa=t.screenY-pi.screenY):Aa=ps=0,pi=t),ps)},movementY:function(t){return"movementY"in t?t.movementY:Aa}}),Ia=kt(Ra),wd=v({},Ra,{dataTransfer:0}),Vu=kt(wd),Ca=v({},Ta,{relatedTarget:0}),ms=kt(Ca),Pu=v({},tn,{animationName:0,elapsedTime:0,pseudoElement:0}),$o=kt(Pu),Bo=v({},tn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Uu=kt(Bo),gs=v({},tn,{data:0}),Fo=kt(gs),Lu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zi={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $u(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=zu[t])?!!r[t]:!1}function ys(){return $u}var Bu=v({},Ta,{key:function(t){if(t.key){var r=Lu[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=wa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zi[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ys,charCode:function(t){return t.type==="keypress"?wa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?wa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xs=kt(Bu),dn=v({},Ra,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ko=kt(dn),Fu=v({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ys}),Sr=kt(Fu),c=v({},tn,{propertyName:0,elapsedTime:0,pseudoElement:0}),x=kt(c),_=v({},Ra,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),R=kt(_),G=v({},tn,{newState:0,oldState:0}),W=kt(G),ue=[9,13,27,32],Re=hn&&"CompositionEvent"in window,ot=null;hn&&"documentMode"in document&&(ot=document.documentMode);var Qe=hn&&"TextEvent"in window&&!ot,Et=hn&&(!Re||ot&&8<ot&&11>=ot),wn=" ",mi=!1;function Wn(t,r){switch(t){case"keyup":return ue.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zn(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Jn=!1;function Ho(t,r){switch(t){case"compositionend":return Zn(r);case"keypress":return r.which!==32?null:(mi=!0,wn);case"textInput":return t=r.data,t===wn&&mi?null:t;default:return null}}function qE(t,r){if(Jn)return t==="compositionend"||!Re&&Wn(t,r)?(t=ku(),fs=it=kn=null,Jn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Et&&r.locale!=="ko"?null:r.data;default:return null}}var GE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function e0(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!GE[t.type]:r==="textarea"}function t0(t,r,s,l){Er?cn?cn.push(l):cn=[l]:Er=l,r=Cc(r,"onChange"),0<r.length&&(s=new ba("onChange","change",null,s,l),t.push({event:s,listeners:r}))}var qo=null,Go=null;function YE(t){kx(t,0)}function Ku(t){var r=yr(t);if(Ze(r))return t}function n0(t,r){if(t==="change")return r}var i0=!1;if(hn){var Ed;if(hn){var bd="oninput"in document;if(!bd){var r0=document.createElement("div");r0.setAttribute("oninput","return;"),bd=typeof r0.oninput=="function"}Ed=bd}else Ed=!1;i0=Ed&&(!document.documentMode||9<document.documentMode)}function a0(){qo&&(qo.detachEvent("onpropertychange",s0),Go=qo=null)}function s0(t){if(t.propertyName==="value"&&Ku(Go)){var r=[];t0(r,Go,t,Lo(t)),_a(YE,r)}}function QE(t,r,s){t==="focusin"?(a0(),qo=r,Go=s,qo.attachEvent("onpropertychange",s0)):t==="focusout"&&a0()}function XE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ku(Go)}function WE(t,r){if(t==="click")return Ku(r)}function ZE(t,r){if(t==="input"||t==="change")return Ku(r)}function JE(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var En=typeof Object.is=="function"?Object.is:JE;function Yo(t,r){if(En(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var s=Object.keys(t),l=Object.keys(r);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var h=s[l];if(!ln.call(r,h)||!En(t[h],r[h]))return!1}return!0}function o0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function l0(t,r){var s=o0(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=r&&l>=r)return{node:s,offset:r-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=o0(s)}}function u0(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?u0(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function c0(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var r=Pi(t.document);r instanceof t.HTMLIFrameElement;){try{var s=typeof r.contentWindow.location.href=="string"}catch{s=!1}if(s)t=r.contentWindow;else break;r=Pi(t.document)}return r}function Td(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}var eb=hn&&"documentMode"in document&&11>=document.documentMode,vs=null,Sd=null,Qo=null,Ad=!1;function h0(t,r,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Ad||vs==null||vs!==Pi(l)||(l=vs,"selectionStart"in l&&Td(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Qo&&Yo(Qo,l)||(Qo=l,l=Cc(Sd,"onSelect"),0<l.length&&(r=new ba("onSelect","select",null,r,s),t.push({event:r,listeners:l}),r.target=vs)))}function ja(t,r){var s={};return s[t.toLowerCase()]=r.toLowerCase(),s["Webkit"+t]="webkit"+r,s["Moz"+t]="moz"+r,s}var _s={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionrun:ja("Transition","TransitionRun"),transitionstart:ja("Transition","TransitionStart"),transitioncancel:ja("Transition","TransitionCancel"),transitionend:ja("Transition","TransitionEnd")},Rd={},d0={};hn&&(d0=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function Da(t){if(Rd[t])return Rd[t];if(!_s[t])return t;var r=_s[t],s;for(s in r)if(r.hasOwnProperty(s)&&s in d0)return Rd[t]=r[s];return t}var f0=Da("animationend"),p0=Da("animationiteration"),m0=Da("animationstart"),tb=Da("transitionrun"),nb=Da("transitionstart"),ib=Da("transitioncancel"),g0=Da("transitionend"),y0=new Map,Id="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Id.push("scrollEnd");function ei(t,r){y0.set(t,r),hi(r,[t])}var x0=new WeakMap;function Vn(t,r){if(typeof t=="object"&&t!==null){var s=x0.get(t);return s!==void 0?s:(r={value:t,source:r,stack:Qn(r)},x0.set(t,r),r)}return{value:t,source:r,stack:Qn(r)}}var Pn=[],ws=0,Cd=0;function Hu(){for(var t=ws,r=Cd=ws=0;r<t;){var s=Pn[r];Pn[r++]=null;var l=Pn[r];Pn[r++]=null;var h=Pn[r];Pn[r++]=null;var f=Pn[r];if(Pn[r++]=null,l!==null&&h!==null){var w=l.pending;w===null?h.next=h:(h.next=w.next,w.next=h),l.pending=h}f!==0&&v0(s,h,f)}}function qu(t,r,s,l){Pn[ws++]=t,Pn[ws++]=r,Pn[ws++]=s,Pn[ws++]=l,Cd|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function jd(t,r,s,l){return qu(t,r,s,l),Gu(t)}function Es(t,r){return qu(t,null,null,r),Gu(t)}function v0(t,r,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var h=!1,f=t.return;f!==null;)f.childLanes|=s,l=f.alternate,l!==null&&(l.childLanes|=s),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(h=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,h&&r!==null&&(h=31-un(s),t=f.hiddenUpdates,l=t[h],l===null?t[h]=[r]:l.push(r),r.lane=s|536870912),f):null}function Gu(t){if(50<_l)throw _l=0,Pf=null,Error(a(185));for(var r=t.return;r!==null;)t=r,r=t.return;return t.tag===3?t.stateNode:null}var bs={};function rb(t,r,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(t,r,s,l){return new rb(t,r,s,l)}function Dd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $i(t,r){var s=t.alternate;return s===null?(s=bn(t.tag,r,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=r,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,r=t.dependencies,s.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function _0(t,r){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=r,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,r=s.dependencies,t.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),t}function Yu(t,r,s,l,h,f){var w=0;if(l=t,typeof t=="function")Dd(t)&&(w=1);else if(typeof t=="string")w=sT(t,s,ge.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case j:return t=bn(31,s,r,h),t.elementType=j,t.lanes=f,t;case M:return Na(s.children,h,f,r);case k:w=8,h|=24;break;case V:return t=bn(12,s,r,h|2),t.elementType=V,t.lanes=f,t;case K:return t=bn(13,s,r,h),t.elementType=K,t.lanes=f,t;case oe:return t=bn(19,s,r,h),t.elementType=oe,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case B:case Z:w=10;break e;case q:w=9;break e;case le:w=11;break e;case I:w=14;break e;case C:w=16,l=null;break e}w=29,s=Error(a(130,t===null?"null":typeof t,"")),l=null}return r=bn(w,s,r,h),r.elementType=t,r.type=l,r.lanes=f,r}function Na(t,r,s,l){return t=bn(7,t,l,r),t.lanes=s,t}function Nd(t,r,s){return t=bn(6,t,null,r),t.lanes=s,t}function Md(t,r,s){return r=bn(4,t.children!==null?t.children:[],t.key,r),r.lanes=s,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}var Ts=[],Ss=0,Qu=null,Xu=0,Un=[],Ln=0,Ma=null,Bi=1,Fi="";function Oa(t,r){Ts[Ss++]=Xu,Ts[Ss++]=Qu,Qu=t,Xu=r}function w0(t,r,s){Un[Ln++]=Bi,Un[Ln++]=Fi,Un[Ln++]=Ma,Ma=t;var l=Bi;t=Fi;var h=32-un(l)-1;l&=~(1<<h),s+=1;var f=32-un(r)+h;if(30<f){var w=h-h%5;f=(l&(1<<w)-1).toString(32),l>>=w,h-=w,Bi=1<<32-un(r)+h|s<<h|l,Fi=f+t}else Bi=1<<f|s<<h|l,Fi=t}function Od(t){t.return!==null&&(Oa(t,1),w0(t,1,0))}function kd(t){for(;t===Qu;)Qu=Ts[--Ss],Ts[Ss]=null,Xu=Ts[--Ss],Ts[Ss]=null;for(;t===Ma;)Ma=Un[--Ln],Un[Ln]=null,Fi=Un[--Ln],Un[Ln]=null,Bi=Un[--Ln],Un[Ln]=null}var fn=null,yt=null,He=!1,ka=null,gi=!1,Vd=Error(a(519));function Va(t){var r=Error(a(418,""));throw Zo(Vn(r,t)),Vd}function E0(t){var r=t.stateNode,s=t.type,l=t.memoizedProps;switch(r[_t]=t,r[Gt]=l,s){case"dialog":Ve("cancel",r),Ve("close",r);break;case"iframe":case"object":case"embed":Ve("load",r);break;case"video":case"audio":for(s=0;s<El.length;s++)Ve(El[s],r);break;case"source":Ve("error",r);break;case"img":case"image":case"link":Ve("error",r),Ve("load",r);break;case"details":Ve("toggle",r);break;case"input":Ve("invalid",r),Oo(r,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),_r(r);break;case"select":Ve("invalid",r);break;case"textarea":Ve("invalid",r),Du(r,l.value,l.defaultValue,l.children),_r(r)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||r.textContent===""+s||l.suppressHydrationWarning===!0||Lx(r.textContent,s)?(l.popover!=null&&(Ve("beforetoggle",r),Ve("toggle",r)),l.onScroll!=null&&Ve("scroll",r),l.onScrollEnd!=null&&Ve("scrollend",r),l.onClick!=null&&(r.onclick=jc),r=!0):r=!1,r||Va(t)}function b0(t){for(fn=t.return;fn;)switch(fn.tag){case 5:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:fn=fn.return}}function Xo(t){if(t!==fn)return!1;if(!He)return b0(t),He=!0,!1;var r=t.tag,s;if((s=r!==3&&r!==27)&&((s=r===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Jf(t.type,t.memoizedProps)),s=!s),s&&yt&&Va(t),b0(t),r===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8)if(s=t.data,s==="/$"){if(r===0){yt=ni(t.nextSibling);break e}r--}else s!=="$"&&s!=="$!"&&s!=="$?"||r++;t=t.nextSibling}yt=null}}else r===27?(r=yt,$r(t.type)?(t=ip,ip=null,yt=t):yt=r):yt=fn?ni(t.stateNode.nextSibling):null;return!0}function Wo(){yt=fn=null,He=!1}function T0(){var t=ka;return t!==null&&(yn===null?yn=t:yn.push.apply(yn,t),ka=null),t}function Zo(t){ka===null?ka=[t]:ka.push(t)}var Pd=ae(null),Pa=null,Ki=null;function Ar(t,r,s){he(Pd,r._currentValue),r._currentValue=s}function Hi(t){t._currentValue=Pd.current,ce(Pd)}function Ud(t,r,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),t===s)break;t=t.return}}function Ld(t,r,s,l){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var f=h.dependencies;if(f!==null){var w=h.child;f=f.firstContext;e:for(;f!==null;){var b=f;f=h;for(var N=0;N<r.length;N++)if(b.context===r[N]){f.lanes|=s,b=f.alternate,b!==null&&(b.lanes|=s),Ud(f.return,s,t),l||(w=null);break e}f=b.next}}else if(h.tag===18){if(w=h.return,w===null)throw Error(a(341));w.lanes|=s,f=w.alternate,f!==null&&(f.lanes|=s),Ud(w,s,t),w=null}else w=h.child;if(w!==null)w.return=h;else for(w=h;w!==null;){if(w===t){w=null;break}if(h=w.sibling,h!==null){h.return=w.return,w=h;break}w=w.return}h=w}}function Jo(t,r,s,l){t=null;for(var h=r,f=!1;h!==null;){if(!f){if((h.flags&524288)!==0)f=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var w=h.alternate;if(w===null)throw Error(a(387));if(w=w.memoizedProps,w!==null){var b=h.type;En(h.pendingProps.value,w.value)||(t!==null?t.push(b):t=[b])}}else if(h===gt.current){if(w=h.alternate,w===null)throw Error(a(387));w.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push(Il):t=[Il])}h=h.return}t!==null&&Ld(r,t,s,l),r.flags|=262144}function Wu(t){for(t=t.firstContext;t!==null;){if(!En(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ua(t){Pa=t,Ki=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function nn(t){return S0(Pa,t)}function Zu(t,r){return Pa===null&&Ua(t),S0(t,r)}function S0(t,r){var s=r._currentValue;if(r={context:r,memoizedValue:s,next:null},Ki===null){if(t===null)throw Error(a(308));Ki=r,t.dependencies={lanes:0,firstContext:r},t.flags|=524288}else Ki=Ki.next=r;return s}var ab=typeof AbortController<"u"?AbortController:function(){var t=[],r=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){r.aborted=!0,t.forEach(function(s){return s()})}},sb=n.unstable_scheduleCallback,ob=n.unstable_NormalPriority,Vt={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zd(){return{controller:new ab,data:new Map,refCount:0}}function el(t){t.refCount--,t.refCount===0&&sb(ob,function(){t.controller.abort()})}var tl=null,$d=0,As=0,Rs=null;function lb(t,r){if(tl===null){var s=tl=[];$d=0,As=Kf(),Rs={status:"pending",value:void 0,then:function(l){s.push(l)}}}return $d++,r.then(A0,A0),r}function A0(){if(--$d===0&&tl!==null){Rs!==null&&(Rs.status="fulfilled");var t=tl;tl=null,As=0,Rs=null;for(var r=0;r<t.length;r++)(0,t[r])()}}function ub(t,r){var s=[],l={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return t.then(function(){l.status="fulfilled",l.value=r;for(var h=0;h<s.length;h++)(0,s[h])(r)},function(h){for(l.status="rejected",l.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),l}var R0=ee.S;ee.S=function(t,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&lb(t,r),R0!==null&&R0(t,r)};var La=ae(null);function Bd(){var t=La.current;return t!==null?t:rt.pooledCache}function Ju(t,r){r===null?he(La,La.current):he(La,r.pool)}function I0(){var t=Bd();return t===null?null:{parent:Vt._currentValue,pool:t}}var nl=Error(a(460)),C0=Error(a(474)),ec=Error(a(542)),Fd={then:function(){}};function j0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function tc(){}function D0(t,r,s){switch(s=t[s],s===void 0?t.push(r):s!==r&&(r.then(tc,tc),r=s),r.status){case"fulfilled":return r.value;case"rejected":throw t=r.reason,M0(t),t;default:if(typeof r.status=="string")r.then(tc,tc);else{if(t=rt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=r,t.status="pending",t.then(function(l){if(r.status==="pending"){var h=r;h.status="fulfilled",h.value=l}},function(l){if(r.status==="pending"){var h=r;h.status="rejected",h.reason=l}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw t=r.reason,M0(t),t}throw il=r,nl}}var il=null;function N0(){if(il===null)throw Error(a(459));var t=il;return il=null,t}function M0(t){if(t===nl||t===ec)throw Error(a(483))}var Rr=!1;function Kd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hd(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ir(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Cr(t,r,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Xe&2)!==0){var h=l.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),l.pending=r,r=Gu(t),v0(t,null,s),r}return qu(t,l,r,s),Gu(t)}function rl(t,r,s){if(r=r.updateQueue,r!==null&&(r=r.shared,(s&4194048)!==0)){var l=r.lanes;l&=t.pendingLanes,s|=l,r.lanes=s,mr(t,s)}}function qd(t,r){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var h=null,f=null;if(s=s.firstBaseUpdate,s!==null){do{var w={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};f===null?h=f=w:f=f.next=w,s=s.next}while(s!==null);f===null?h=f=r:f=f.next=r}else h=f=r;s={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:f,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=r:t.next=r,s.lastBaseUpdate=r}var Gd=!1;function al(){if(Gd){var t=Rs;if(t!==null)throw t}}function sl(t,r,s,l){Gd=!1;var h=t.updateQueue;Rr=!1;var f=h.firstBaseUpdate,w=h.lastBaseUpdate,b=h.shared.pending;if(b!==null){h.shared.pending=null;var N=b,Y=N.next;N.next=null,w===null?f=Y:w.next=Y,w=N;var te=t.alternate;te!==null&&(te=te.updateQueue,b=te.lastBaseUpdate,b!==w&&(b===null?te.firstBaseUpdate=Y:b.next=Y,te.lastBaseUpdate=N))}if(f!==null){var re=h.baseState;w=0,te=Y=N=null,b=f;do{var Q=b.lane&-536870913,X=Q!==b.lane;if(X?(ze&Q)===Q:(l&Q)===Q){Q!==0&&Q===As&&(Gd=!0),te!==null&&(te=te.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var Se=t,we=b;Q=r;var tt=s;switch(we.tag){case 1:if(Se=we.payload,typeof Se=="function"){re=Se.call(tt,re,Q);break e}re=Se;break e;case 3:Se.flags=Se.flags&-65537|128;case 0:if(Se=we.payload,Q=typeof Se=="function"?Se.call(tt,re,Q):Se,Q==null)break e;re=v({},re,Q);break e;case 2:Rr=!0}}Q=b.callback,Q!==null&&(t.flags|=64,X&&(t.flags|=8192),X=h.callbacks,X===null?h.callbacks=[Q]:X.push(Q))}else X={lane:Q,tag:b.tag,payload:b.payload,callback:b.callback,next:null},te===null?(Y=te=X,N=re):te=te.next=X,w|=Q;if(b=b.next,b===null){if(b=h.shared.pending,b===null)break;X=b,b=X.next,X.next=null,h.lastBaseUpdate=X,h.shared.pending=null}}while(!0);te===null&&(N=re),h.baseState=N,h.firstBaseUpdate=Y,h.lastBaseUpdate=te,f===null&&(h.shared.lanes=0),Pr|=w,t.lanes=w,t.memoizedState=re}}function O0(t,r){if(typeof t!="function")throw Error(a(191,t));t.call(r)}function k0(t,r){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)O0(s[t],r)}var Is=ae(null),nc=ae(0);function V0(t,r){t=Zi,he(nc,t),he(Is,r),Zi=t|r.baseLanes}function Yd(){he(nc,Zi),he(Is,Is.current)}function Qd(){Zi=nc.current,ce(Is),ce(nc)}var jr=0,Me=null,Je=null,Rt=null,ic=!1,Cs=!1,za=!1,rc=0,ol=0,js=null,cb=0;function bt(){throw Error(a(321))}function Xd(t,r){if(r===null)return!1;for(var s=0;s<r.length&&s<t.length;s++)if(!En(t[s],r[s]))return!1;return!0}function Wd(t,r,s,l,h,f){return jr=f,Me=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,ee.H=t===null||t.memoizedState===null?vy:_y,za=!1,f=s(l,h),za=!1,Cs&&(f=U0(r,s,l,h)),P0(t),f}function P0(t){ee.H=cc;var r=Je!==null&&Je.next!==null;if(jr=0,Rt=Je=Me=null,ic=!1,ol=0,js=null,r)throw Error(a(300));t===null||Bt||(t=t.dependencies,t!==null&&Wu(t)&&(Bt=!0))}function U0(t,r,s,l){Me=t;var h=0;do{if(Cs&&(js=null),ol=0,Cs=!1,25<=h)throw Error(a(301));if(h+=1,Rt=Je=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}ee.H=yb,f=r(s,l)}while(Cs);return f}function hb(){var t=ee.H,r=t.useState()[0];return r=typeof r.then=="function"?ll(r):r,t=t.useState()[0],(Je!==null?Je.memoizedState:null)!==t&&(Me.flags|=1024),r}function Zd(){var t=rc!==0;return rc=0,t}function Jd(t,r,s){r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~s}function ef(t){if(ic){for(t=t.memoizedState;t!==null;){var r=t.queue;r!==null&&(r.pending=null),t=t.next}ic=!1}jr=0,Rt=Je=Me=null,Cs=!1,ol=rc=0,js=null}function mn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?Me.memoizedState=Rt=t:Rt=Rt.next=t,Rt}function It(){if(Je===null){var t=Me.alternate;t=t!==null?t.memoizedState:null}else t=Je.next;var r=Rt===null?Me.memoizedState:Rt.next;if(r!==null)Rt=r,Je=t;else{if(t===null)throw Me.alternate===null?Error(a(467)):Error(a(310));Je=t,t={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},Rt===null?Me.memoizedState=Rt=t:Rt=Rt.next=t}return Rt}function tf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ll(t){var r=ol;return ol+=1,js===null&&(js=[]),t=D0(js,t,r),r=Me,(Rt===null?r.memoizedState:Rt.next)===null&&(r=r.alternate,ee.H=r===null||r.memoizedState===null?vy:_y),t}function ac(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ll(t);if(t.$$typeof===Z)return nn(t)}throw Error(a(438,String(t)))}function nf(t){var r=null,s=Me.updateQueue;if(s!==null&&(r=s.memoCache),r==null){var l=Me.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(r={data:l.data.map(function(h){return h.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),s===null&&(s=tf(),Me.updateQueue=s),s.memoCache=r,s=r.data[r.index],s===void 0)for(s=r.data[r.index]=Array(t),l=0;l<t;l++)s[l]=O;return r.index++,s}function qi(t,r){return typeof r=="function"?r(t):r}function sc(t){var r=It();return rf(r,Je,t)}function rf(t,r,s){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var h=t.baseQueue,f=l.pending;if(f!==null){if(h!==null){var w=h.next;h.next=f.next,f.next=w}r.baseQueue=h=f,l.pending=null}if(f=t.baseState,h===null)t.memoizedState=f;else{r=h.next;var b=w=null,N=null,Y=r,te=!1;do{var re=Y.lane&-536870913;if(re!==Y.lane?(ze&re)===re:(jr&re)===re){var Q=Y.revertLane;if(Q===0)N!==null&&(N=N.next={lane:0,revertLane:0,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null}),re===As&&(te=!0);else if((jr&Q)===Q){Y=Y.next,Q===As&&(te=!0);continue}else re={lane:0,revertLane:Y.revertLane,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},N===null?(b=N=re,w=f):N=N.next=re,Me.lanes|=Q,Pr|=Q;re=Y.action,za&&s(f,re),f=Y.hasEagerState?Y.eagerState:s(f,re)}else Q={lane:re,revertLane:Y.revertLane,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},N===null?(b=N=Q,w=f):N=N.next=Q,Me.lanes|=re,Pr|=re;Y=Y.next}while(Y!==null&&Y!==r);if(N===null?w=f:N.next=b,!En(f,t.memoizedState)&&(Bt=!0,te&&(s=Rs,s!==null)))throw s;t.memoizedState=f,t.baseState=w,t.baseQueue=N,l.lastRenderedState=f}return h===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function af(t){var r=It(),s=r.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var l=s.dispatch,h=s.pending,f=r.memoizedState;if(h!==null){s.pending=null;var w=h=h.next;do f=t(f,w.action),w=w.next;while(w!==h);En(f,r.memoizedState)||(Bt=!0),r.memoizedState=f,r.baseQueue===null&&(r.baseState=f),s.lastRenderedState=f}return[f,l]}function L0(t,r,s){var l=Me,h=It(),f=He;if(f){if(s===void 0)throw Error(a(407));s=s()}else s=r();var w=!En((Je||h).memoizedState,s);w&&(h.memoizedState=s,Bt=!0),h=h.queue;var b=B0.bind(null,l,h,t);if(ul(2048,8,b,[t]),h.getSnapshot!==r||w||Rt!==null&&Rt.memoizedState.tag&1){if(l.flags|=2048,Ds(9,oc(),$0.bind(null,l,h,s,r),null),rt===null)throw Error(a(349));f||(jr&124)!==0||z0(l,r,s)}return s}function z0(t,r,s){t.flags|=16384,t={getSnapshot:r,value:s},r=Me.updateQueue,r===null?(r=tf(),Me.updateQueue=r,r.stores=[t]):(s=r.stores,s===null?r.stores=[t]:s.push(t))}function $0(t,r,s,l){r.value=s,r.getSnapshot=l,F0(r)&&K0(t)}function B0(t,r,s){return s(function(){F0(r)&&K0(t)})}function F0(t){var r=t.getSnapshot;t=t.value;try{var s=r();return!En(t,s)}catch{return!0}}function K0(t){var r=Es(t,2);r!==null&&In(r,t,2)}function sf(t){var r=mn();if(typeof t=="function"){var s=t;if(t=s(),za){Dn(!0);try{s()}finally{Dn(!1)}}}return r.memoizedState=r.baseState=t,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:t},r}function H0(t,r,s,l){return t.baseState=s,rf(t,Je,typeof l=="function"?l:qi)}function db(t,r,s,l,h){if(uc(t))throw Error(a(485));if(t=r.action,t!==null){var f={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(w){f.listeners.push(w)}};ee.T!==null?s(!0):f.isTransition=!1,l(f),s=r.pending,s===null?(f.next=r.pending=f,q0(r,f)):(f.next=s.next,r.pending=s.next=f)}}function q0(t,r){var s=r.action,l=r.payload,h=t.state;if(r.isTransition){var f=ee.T,w={};ee.T=w;try{var b=s(h,l),N=ee.S;N!==null&&N(w,b),G0(t,r,b)}catch(Y){of(t,r,Y)}finally{ee.T=f}}else try{f=s(h,l),G0(t,r,f)}catch(Y){of(t,r,Y)}}function G0(t,r,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Y0(t,r,l)},function(l){return of(t,r,l)}):Y0(t,r,s)}function Y0(t,r,s){r.status="fulfilled",r.value=s,Q0(r),t.state=s,r=t.pending,r!==null&&(s=r.next,s===r?t.pending=null:(s=s.next,r.next=s,q0(t,s)))}function of(t,r,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do r.status="rejected",r.reason=s,Q0(r),r=r.next;while(r!==l)}t.action=null}function Q0(t){t=t.listeners;for(var r=0;r<t.length;r++)(0,t[r])()}function X0(t,r){return r}function W0(t,r){if(He){var s=rt.formState;if(s!==null){e:{var l=Me;if(He){if(yt){t:{for(var h=yt,f=gi;h.nodeType!==8;){if(!f){h=null;break t}if(h=ni(h.nextSibling),h===null){h=null;break t}}f=h.data,h=f==="F!"||f==="F"?h:null}if(h){yt=ni(h.nextSibling),l=h.data==="F!";break e}}Va(l)}l=!1}l&&(r=s[0])}}return s=mn(),s.memoizedState=s.baseState=r,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:X0,lastRenderedState:r},s.queue=l,s=gy.bind(null,Me,l),l.dispatch=s,l=sf(!1),f=df.bind(null,Me,!1,l.queue),l=mn(),h={state:r,dispatch:null,action:t,pending:null},l.queue=h,s=db.bind(null,Me,h,f,s),h.dispatch=s,l.memoizedState=t,[r,s,!1]}function Z0(t){var r=It();return J0(r,Je,t)}function J0(t,r,s){if(r=rf(t,r,X0)[0],t=sc(qi)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var l=ll(r)}catch(w){throw w===nl?ec:w}else l=r;r=It();var h=r.queue,f=h.dispatch;return s!==r.memoizedState&&(Me.flags|=2048,Ds(9,oc(),fb.bind(null,h,s),null)),[l,f,t]}function fb(t,r){t.action=r}function ey(t){var r=It(),s=Je;if(s!==null)return J0(r,s,t);It(),r=r.memoizedState,s=It();var l=s.queue.dispatch;return s.memoizedState=t,[r,l,!1]}function Ds(t,r,s,l){return t={tag:t,create:s,deps:l,inst:r,next:null},r=Me.updateQueue,r===null&&(r=tf(),Me.updateQueue=r),s=r.lastEffect,s===null?r.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,r.lastEffect=t),t}function oc(){return{destroy:void 0,resource:void 0}}function ty(){return It().memoizedState}function lc(t,r,s,l){var h=mn();l=l===void 0?null:l,Me.flags|=t,h.memoizedState=Ds(1|r,oc(),s,l)}function ul(t,r,s,l){var h=It();l=l===void 0?null:l;var f=h.memoizedState.inst;Je!==null&&l!==null&&Xd(l,Je.memoizedState.deps)?h.memoizedState=Ds(r,f,s,l):(Me.flags|=t,h.memoizedState=Ds(1|r,f,s,l))}function ny(t,r){lc(8390656,8,t,r)}function iy(t,r){ul(2048,8,t,r)}function ry(t,r){return ul(4,2,t,r)}function ay(t,r){return ul(4,4,t,r)}function sy(t,r){if(typeof r=="function"){t=t();var s=r(t);return function(){typeof s=="function"?s():r(null)}}if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function oy(t,r,s){s=s!=null?s.concat([t]):null,ul(4,4,sy.bind(null,r,t),s)}function lf(){}function ly(t,r){var s=It();r=r===void 0?null:r;var l=s.memoizedState;return r!==null&&Xd(r,l[1])?l[0]:(s.memoizedState=[t,r],t)}function uy(t,r){var s=It();r=r===void 0?null:r;var l=s.memoizedState;if(r!==null&&Xd(r,l[1]))return l[0];if(l=t(),za){Dn(!0);try{t()}finally{Dn(!1)}}return s.memoizedState=[l,r],l}function uf(t,r,s){return s===void 0||(jr&1073741824)!==0?t.memoizedState=r:(t.memoizedState=s,t=dx(),Me.lanes|=t,Pr|=t,s)}function cy(t,r,s,l){return En(s,r)?s:Is.current!==null?(t=uf(t,s,l),En(t,r)||(Bt=!0),t):(jr&42)===0?(Bt=!0,t.memoizedState=s):(t=dx(),Me.lanes|=t,Pr|=t,r)}function hy(t,r,s,l,h){var f=de.p;de.p=f!==0&&8>f?f:8;var w=ee.T,b={};ee.T=b,df(t,!1,r,s);try{var N=h(),Y=ee.S;if(Y!==null&&Y(b,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var te=ub(N,l);cl(t,r,te,Rn(t))}else cl(t,r,l,Rn(t))}catch(re){cl(t,r,{then:function(){},status:"rejected",reason:re},Rn())}finally{de.p=f,ee.T=w}}function pb(){}function cf(t,r,s,l){if(t.tag!==5)throw Error(a(476));var h=dy(t).queue;hy(t,h,r,ye,s===null?pb:function(){return fy(t),s(l)})}function dy(t){var r=t.memoizedState;if(r!==null)return r;r={memoizedState:ye,baseState:ye,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:ye},next:null};var s={};return r.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:s},next:null},t.memoizedState=r,t=t.alternate,t!==null&&(t.memoizedState=r),r}function fy(t){var r=dy(t).next.queue;cl(t,r,{},Rn())}function hf(){return nn(Il)}function py(){return It().memoizedState}function my(){return It().memoizedState}function mb(t){for(var r=t.return;r!==null;){switch(r.tag){case 24:case 3:var s=Rn();t=Ir(s);var l=Cr(r,t,s);l!==null&&(In(l,r,s),rl(l,r,s)),r={cache:zd()},t.payload=r;return}r=r.return}}function gb(t,r,s){var l=Rn();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},uc(t)?yy(r,s):(s=jd(t,r,s,l),s!==null&&(In(s,t,l),xy(s,r,l)))}function gy(t,r,s){var l=Rn();cl(t,r,s,l)}function cl(t,r,s,l){var h={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(uc(t))yy(r,h);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=r.lastRenderedReducer,f!==null))try{var w=r.lastRenderedState,b=f(w,s);if(h.hasEagerState=!0,h.eagerState=b,En(b,w))return qu(t,r,h,0),rt===null&&Hu(),!1}catch{}finally{}if(s=jd(t,r,h,l),s!==null)return In(s,t,l),xy(s,r,l),!0}return!1}function df(t,r,s,l){if(l={lane:2,revertLane:Kf(),action:l,hasEagerState:!1,eagerState:null,next:null},uc(t)){if(r)throw Error(a(479))}else r=jd(t,s,l,2),r!==null&&In(r,t,2)}function uc(t){var r=t.alternate;return t===Me||r!==null&&r===Me}function yy(t,r){Cs=ic=!0;var s=t.pending;s===null?r.next=r:(r.next=s.next,s.next=r),t.pending=r}function xy(t,r,s){if((s&4194048)!==0){var l=r.lanes;l&=t.pendingLanes,s|=l,r.lanes=s,mr(t,s)}}var cc={readContext:nn,use:ac,useCallback:bt,useContext:bt,useEffect:bt,useImperativeHandle:bt,useLayoutEffect:bt,useInsertionEffect:bt,useMemo:bt,useReducer:bt,useRef:bt,useState:bt,useDebugValue:bt,useDeferredValue:bt,useTransition:bt,useSyncExternalStore:bt,useId:bt,useHostTransitionStatus:bt,useFormState:bt,useActionState:bt,useOptimistic:bt,useMemoCache:bt,useCacheRefresh:bt},vy={readContext:nn,use:ac,useCallback:function(t,r){return mn().memoizedState=[t,r===void 0?null:r],t},useContext:nn,useEffect:ny,useImperativeHandle:function(t,r,s){s=s!=null?s.concat([t]):null,lc(4194308,4,sy.bind(null,r,t),s)},useLayoutEffect:function(t,r){return lc(4194308,4,t,r)},useInsertionEffect:function(t,r){lc(4,2,t,r)},useMemo:function(t,r){var s=mn();r=r===void 0?null:r;var l=t();if(za){Dn(!0);try{t()}finally{Dn(!1)}}return s.memoizedState=[l,r],l},useReducer:function(t,r,s){var l=mn();if(s!==void 0){var h=s(r);if(za){Dn(!0);try{s(r)}finally{Dn(!1)}}}else h=r;return l.memoizedState=l.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},l.queue=t,t=t.dispatch=gb.bind(null,Me,t),[l.memoizedState,t]},useRef:function(t){var r=mn();return t={current:t},r.memoizedState=t},useState:function(t){t=sf(t);var r=t.queue,s=gy.bind(null,Me,r);return r.dispatch=s,[t.memoizedState,s]},useDebugValue:lf,useDeferredValue:function(t,r){var s=mn();return uf(s,t,r)},useTransition:function(){var t=sf(!1);return t=hy.bind(null,Me,t.queue,!0,!1),mn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,r,s){var l=Me,h=mn();if(He){if(s===void 0)throw Error(a(407));s=s()}else{if(s=r(),rt===null)throw Error(a(349));(ze&124)!==0||z0(l,r,s)}h.memoizedState=s;var f={value:s,getSnapshot:r};return h.queue=f,ny(B0.bind(null,l,f,t),[t]),l.flags|=2048,Ds(9,oc(),$0.bind(null,l,f,s,r),null),s},useId:function(){var t=mn(),r=rt.identifierPrefix;if(He){var s=Fi,l=Bi;s=(l&~(1<<32-un(l)-1)).toString(32)+s,r="«"+r+"R"+s,s=rc++,0<s&&(r+="H"+s.toString(32)),r+="»"}else s=cb++,r="«"+r+"r"+s.toString(32)+"»";return t.memoizedState=r},useHostTransitionStatus:hf,useFormState:W0,useActionState:W0,useOptimistic:function(t){var r=mn();r.memoizedState=r.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=s,r=df.bind(null,Me,!0,s),s.dispatch=r,[t,r]},useMemoCache:nf,useCacheRefresh:function(){return mn().memoizedState=mb.bind(null,Me)}},_y={readContext:nn,use:ac,useCallback:ly,useContext:nn,useEffect:iy,useImperativeHandle:oy,useInsertionEffect:ry,useLayoutEffect:ay,useMemo:uy,useReducer:sc,useRef:ty,useState:function(){return sc(qi)},useDebugValue:lf,useDeferredValue:function(t,r){var s=It();return cy(s,Je.memoizedState,t,r)},useTransition:function(){var t=sc(qi)[0],r=It().memoizedState;return[typeof t=="boolean"?t:ll(t),r]},useSyncExternalStore:L0,useId:py,useHostTransitionStatus:hf,useFormState:Z0,useActionState:Z0,useOptimistic:function(t,r){var s=It();return H0(s,Je,t,r)},useMemoCache:nf,useCacheRefresh:my},yb={readContext:nn,use:ac,useCallback:ly,useContext:nn,useEffect:iy,useImperativeHandle:oy,useInsertionEffect:ry,useLayoutEffect:ay,useMemo:uy,useReducer:af,useRef:ty,useState:function(){return af(qi)},useDebugValue:lf,useDeferredValue:function(t,r){var s=It();return Je===null?uf(s,t,r):cy(s,Je.memoizedState,t,r)},useTransition:function(){var t=af(qi)[0],r=It().memoizedState;return[typeof t=="boolean"?t:ll(t),r]},useSyncExternalStore:L0,useId:py,useHostTransitionStatus:hf,useFormState:ey,useActionState:ey,useOptimistic:function(t,r){var s=It();return Je!==null?H0(s,Je,t,r):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:nf,useCacheRefresh:my},Ns=null,hl=0;function hc(t){var r=hl;return hl+=1,Ns===null&&(Ns=[]),D0(Ns,t,r)}function dl(t,r){r=r.props.ref,t.ref=r!==void 0?r:null}function dc(t,r){throw r.$$typeof===E?Error(a(525)):(t=Object.prototype.toString.call(r),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t)))}function wy(t){var r=t._init;return r(t._payload)}function Ey(t){function r(F,L){if(t){var H=F.deletions;H===null?(F.deletions=[L],F.flags|=16):H.push(L)}}function s(F,L){if(!t)return null;for(;L!==null;)r(F,L),L=L.sibling;return null}function l(F){for(var L=new Map;F!==null;)F.key!==null?L.set(F.key,F):L.set(F.index,F),F=F.sibling;return L}function h(F,L){return F=$i(F,L),F.index=0,F.sibling=null,F}function f(F,L,H){return F.index=H,t?(H=F.alternate,H!==null?(H=H.index,H<L?(F.flags|=67108866,L):H):(F.flags|=67108866,L)):(F.flags|=1048576,L)}function w(F){return t&&F.alternate===null&&(F.flags|=67108866),F}function b(F,L,H,ne){return L===null||L.tag!==6?(L=Nd(H,F.mode,ne),L.return=F,L):(L=h(L,H),L.return=F,L)}function N(F,L,H,ne){var me=H.type;return me===M?te(F,L,H.props.children,ne,H.key):L!==null&&(L.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===C&&wy(me)===L.type)?(L=h(L,H.props),dl(L,H),L.return=F,L):(L=Yu(H.type,H.key,H.props,null,F.mode,ne),dl(L,H),L.return=F,L)}function Y(F,L,H,ne){return L===null||L.tag!==4||L.stateNode.containerInfo!==H.containerInfo||L.stateNode.implementation!==H.implementation?(L=Md(H,F.mode,ne),L.return=F,L):(L=h(L,H.children||[]),L.return=F,L)}function te(F,L,H,ne,me){return L===null||L.tag!==7?(L=Na(H,F.mode,ne,me),L.return=F,L):(L=h(L,H),L.return=F,L)}function re(F,L,H){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return L=Nd(""+L,F.mode,H),L.return=F,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case T:return H=Yu(L.type,L.key,L.props,null,F.mode,H),dl(H,L),H.return=F,H;case A:return L=Md(L,F.mode,H),L.return=F,L;case C:var ne=L._init;return L=ne(L._payload),re(F,L,H)}if(Ke(L)||$(L))return L=Na(L,F.mode,H,null),L.return=F,L;if(typeof L.then=="function")return re(F,hc(L),H);if(L.$$typeof===Z)return re(F,Zu(F,L),H);dc(F,L)}return null}function Q(F,L,H,ne){var me=L!==null?L.key:null;if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return me!==null?null:b(F,L,""+H,ne);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case T:return H.key===me?N(F,L,H,ne):null;case A:return H.key===me?Y(F,L,H,ne):null;case C:return me=H._init,H=me(H._payload),Q(F,L,H,ne)}if(Ke(H)||$(H))return me!==null?null:te(F,L,H,ne,null);if(typeof H.then=="function")return Q(F,L,hc(H),ne);if(H.$$typeof===Z)return Q(F,L,Zu(F,H),ne);dc(F,H)}return null}function X(F,L,H,ne,me){if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return F=F.get(H)||null,b(L,F,""+ne,me);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case T:return F=F.get(ne.key===null?H:ne.key)||null,N(L,F,ne,me);case A:return F=F.get(ne.key===null?H:ne.key)||null,Y(L,F,ne,me);case C:var Oe=ne._init;return ne=Oe(ne._payload),X(F,L,H,ne,me)}if(Ke(ne)||$(ne))return F=F.get(H)||null,te(L,F,ne,me,null);if(typeof ne.then=="function")return X(F,L,H,hc(ne),me);if(ne.$$typeof===Z)return X(F,L,H,Zu(L,ne),me);dc(L,ne)}return null}function Se(F,L,H,ne){for(var me=null,Oe=null,xe=L,Ee=L=0,Kt=null;xe!==null&&Ee<H.length;Ee++){xe.index>Ee?(Kt=xe,xe=null):Kt=xe.sibling;var Fe=Q(F,xe,H[Ee],ne);if(Fe===null){xe===null&&(xe=Kt);break}t&&xe&&Fe.alternate===null&&r(F,xe),L=f(Fe,L,Ee),Oe===null?me=Fe:Oe.sibling=Fe,Oe=Fe,xe=Kt}if(Ee===H.length)return s(F,xe),He&&Oa(F,Ee),me;if(xe===null){for(;Ee<H.length;Ee++)xe=re(F,H[Ee],ne),xe!==null&&(L=f(xe,L,Ee),Oe===null?me=xe:Oe.sibling=xe,Oe=xe);return He&&Oa(F,Ee),me}for(xe=l(xe);Ee<H.length;Ee++)Kt=X(xe,F,Ee,H[Ee],ne),Kt!==null&&(t&&Kt.alternate!==null&&xe.delete(Kt.key===null?Ee:Kt.key),L=f(Kt,L,Ee),Oe===null?me=Kt:Oe.sibling=Kt,Oe=Kt);return t&&xe.forEach(function(qr){return r(F,qr)}),He&&Oa(F,Ee),me}function we(F,L,H,ne){if(H==null)throw Error(a(151));for(var me=null,Oe=null,xe=L,Ee=L=0,Kt=null,Fe=H.next();xe!==null&&!Fe.done;Ee++,Fe=H.next()){xe.index>Ee?(Kt=xe,xe=null):Kt=xe.sibling;var qr=Q(F,xe,Fe.value,ne);if(qr===null){xe===null&&(xe=Kt);break}t&&xe&&qr.alternate===null&&r(F,xe),L=f(qr,L,Ee),Oe===null?me=qr:Oe.sibling=qr,Oe=qr,xe=Kt}if(Fe.done)return s(F,xe),He&&Oa(F,Ee),me;if(xe===null){for(;!Fe.done;Ee++,Fe=H.next())Fe=re(F,Fe.value,ne),Fe!==null&&(L=f(Fe,L,Ee),Oe===null?me=Fe:Oe.sibling=Fe,Oe=Fe);return He&&Oa(F,Ee),me}for(xe=l(xe);!Fe.done;Ee++,Fe=H.next())Fe=X(xe,F,Ee,Fe.value,ne),Fe!==null&&(t&&Fe.alternate!==null&&xe.delete(Fe.key===null?Ee:Fe.key),L=f(Fe,L,Ee),Oe===null?me=Fe:Oe.sibling=Fe,Oe=Fe);return t&&xe.forEach(function(xT){return r(F,xT)}),He&&Oa(F,Ee),me}function tt(F,L,H,ne){if(typeof H=="object"&&H!==null&&H.type===M&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case T:e:{for(var me=H.key;L!==null;){if(L.key===me){if(me=H.type,me===M){if(L.tag===7){s(F,L.sibling),ne=h(L,H.props.children),ne.return=F,F=ne;break e}}else if(L.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===C&&wy(me)===L.type){s(F,L.sibling),ne=h(L,H.props),dl(ne,H),ne.return=F,F=ne;break e}s(F,L);break}else r(F,L);L=L.sibling}H.type===M?(ne=Na(H.props.children,F.mode,ne,H.key),ne.return=F,F=ne):(ne=Yu(H.type,H.key,H.props,null,F.mode,ne),dl(ne,H),ne.return=F,F=ne)}return w(F);case A:e:{for(me=H.key;L!==null;){if(L.key===me)if(L.tag===4&&L.stateNode.containerInfo===H.containerInfo&&L.stateNode.implementation===H.implementation){s(F,L.sibling),ne=h(L,H.children||[]),ne.return=F,F=ne;break e}else{s(F,L);break}else r(F,L);L=L.sibling}ne=Md(H,F.mode,ne),ne.return=F,F=ne}return w(F);case C:return me=H._init,H=me(H._payload),tt(F,L,H,ne)}if(Ke(H))return Se(F,L,H,ne);if($(H)){if(me=$(H),typeof me!="function")throw Error(a(150));return H=me.call(H),we(F,L,H,ne)}if(typeof H.then=="function")return tt(F,L,hc(H),ne);if(H.$$typeof===Z)return tt(F,L,Zu(F,H),ne);dc(F,H)}return typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint"?(H=""+H,L!==null&&L.tag===6?(s(F,L.sibling),ne=h(L,H),ne.return=F,F=ne):(s(F,L),ne=Nd(H,F.mode,ne),ne.return=F,F=ne),w(F)):s(F,L)}return function(F,L,H,ne){try{hl=0;var me=tt(F,L,H,ne);return Ns=null,me}catch(xe){if(xe===nl||xe===ec)throw xe;var Oe=bn(29,xe,null,F.mode);return Oe.lanes=ne,Oe.return=F,Oe}finally{}}}var Ms=Ey(!0),by=Ey(!1),zn=ae(null),yi=null;function Dr(t){var r=t.alternate;he(Pt,Pt.current&1),he(zn,t),yi===null&&(r===null||Is.current!==null||r.memoizedState!==null)&&(yi=t)}function Ty(t){if(t.tag===22){if(he(Pt,Pt.current),he(zn,t),yi===null){var r=t.alternate;r!==null&&r.memoizedState!==null&&(yi=t)}}else Nr()}function Nr(){he(Pt,Pt.current),he(zn,zn.current)}function Gi(t){ce(zn),yi===t&&(yi=null),ce(Pt)}var Pt=ae(0);function fc(t){for(var r=t;r!==null;){if(r.tag===13){var s=r.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||np(s)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function ff(t,r,s,l){r=t.memoizedState,s=s(l,r),s=s==null?r:v({},r,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var pf={enqueueSetState:function(t,r,s){t=t._reactInternals;var l=Rn(),h=Ir(l);h.payload=r,s!=null&&(h.callback=s),r=Cr(t,h,l),r!==null&&(In(r,t,l),rl(r,t,l))},enqueueReplaceState:function(t,r,s){t=t._reactInternals;var l=Rn(),h=Ir(l);h.tag=1,h.payload=r,s!=null&&(h.callback=s),r=Cr(t,h,l),r!==null&&(In(r,t,l),rl(r,t,l))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var s=Rn(),l=Ir(s);l.tag=2,r!=null&&(l.callback=r),r=Cr(t,l,s),r!==null&&(In(r,t,s),rl(r,t,s))}};function Sy(t,r,s,l,h,f,w){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,f,w):r.prototype&&r.prototype.isPureReactComponent?!Yo(s,l)||!Yo(h,f):!0}function Ay(t,r,s,l){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(s,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(s,l),r.state!==t&&pf.enqueueReplaceState(r,r.state,null)}function $a(t,r){var s=r;if("ref"in r){s={};for(var l in r)l!=="ref"&&(s[l]=r[l])}if(t=t.defaultProps){s===r&&(s=v({},s));for(var h in t)s[h]===void 0&&(s[h]=t[h])}return s}var pc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Ry(t){pc(t)}function Iy(t){console.error(t)}function Cy(t){pc(t)}function mc(t,r){try{var s=t.onUncaughtError;s(r.value,{componentStack:r.stack})}catch(l){setTimeout(function(){throw l})}}function jy(t,r,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function mf(t,r,s){return s=Ir(s),s.tag=3,s.payload={element:null},s.callback=function(){mc(t,r)},s}function Dy(t){return t=Ir(t),t.tag=3,t}function Ny(t,r,s,l){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var f=l.value;t.payload=function(){return h(f)},t.callback=function(){jy(r,s,l)}}var w=s.stateNode;w!==null&&typeof w.componentDidCatch=="function"&&(t.callback=function(){jy(r,s,l),typeof h!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var b=l.stack;this.componentDidCatch(l.value,{componentStack:b!==null?b:""})})}function xb(t,r,s,l,h){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(r=s.alternate,r!==null&&Jo(r,s,h,!0),s=zn.current,s!==null){switch(s.tag){case 13:return yi===null?Lf():s.alternate===null&&xt===0&&(xt=3),s.flags&=-257,s.flags|=65536,s.lanes=h,l===Fd?s.flags|=16384:(r=s.updateQueue,r===null?s.updateQueue=new Set([l]):r.add(l),$f(t,l,h)),!1;case 22:return s.flags|=65536,l===Fd?s.flags|=16384:(r=s.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=r):(s=r.retryQueue,s===null?r.retryQueue=new Set([l]):s.add(l)),$f(t,l,h)),!1}throw Error(a(435,s.tag))}return $f(t,l,h),Lf(),!1}if(He)return r=zn.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=h,l!==Vd&&(t=Error(a(422),{cause:l}),Zo(Vn(t,s)))):(l!==Vd&&(r=Error(a(423),{cause:l}),Zo(Vn(r,s))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,l=Vn(l,s),h=mf(t.stateNode,l,h),qd(t,h),xt!==4&&(xt=2)),!1;var f=Error(a(520),{cause:l});if(f=Vn(f,s),vl===null?vl=[f]:vl.push(f),xt!==4&&(xt=2),r===null)return!0;l=Vn(l,s),s=r;do{switch(s.tag){case 3:return s.flags|=65536,t=h&-h,s.lanes|=t,t=mf(s.stateNode,l,t),qd(s,t),!1;case 1:if(r=s.type,f=s.stateNode,(s.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ur===null||!Ur.has(f))))return s.flags|=65536,h&=-h,s.lanes|=h,h=Dy(h),Ny(h,t,s,l),qd(s,h),!1}s=s.return}while(s!==null);return!1}var My=Error(a(461)),Bt=!1;function Yt(t,r,s,l){r.child=t===null?by(r,null,s,l):Ms(r,t.child,s,l)}function Oy(t,r,s,l,h){s=s.render;var f=r.ref;if("ref"in l){var w={};for(var b in l)b!=="ref"&&(w[b]=l[b])}else w=l;return Ua(r),l=Wd(t,r,s,w,f,h),b=Zd(),t!==null&&!Bt?(Jd(t,r,h),Yi(t,r,h)):(He&&b&&Od(r),r.flags|=1,Yt(t,r,l,h),r.child)}function ky(t,r,s,l,h){if(t===null){var f=s.type;return typeof f=="function"&&!Dd(f)&&f.defaultProps===void 0&&s.compare===null?(r.tag=15,r.type=f,Vy(t,r,f,l,h)):(t=Yu(s.type,null,l,r,r.mode,h),t.ref=r.ref,t.return=r,r.child=t)}if(f=t.child,!bf(t,h)){var w=f.memoizedProps;if(s=s.compare,s=s!==null?s:Yo,s(w,l)&&t.ref===r.ref)return Yi(t,r,h)}return r.flags|=1,t=$i(f,l),t.ref=r.ref,t.return=r,r.child=t}function Vy(t,r,s,l,h){if(t!==null){var f=t.memoizedProps;if(Yo(f,l)&&t.ref===r.ref)if(Bt=!1,r.pendingProps=l=f,bf(t,h))(t.flags&131072)!==0&&(Bt=!0);else return r.lanes=t.lanes,Yi(t,r,h)}return gf(t,r,s,l,h)}function Py(t,r,s){var l=r.pendingProps,h=l.children,f=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((r.flags&128)!==0){if(l=f!==null?f.baseLanes|s:s,t!==null){for(h=r.child=t.child,f=0;h!==null;)f=f|h.lanes|h.childLanes,h=h.sibling;r.childLanes=f&~l}else r.childLanes=0,r.child=null;return Uy(t,r,l,s)}if((s&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ju(r,f!==null?f.cachePool:null),f!==null?V0(r,f):Yd(),Ty(r);else return r.lanes=r.childLanes=536870912,Uy(t,r,f!==null?f.baseLanes|s:s,s)}else f!==null?(Ju(r,f.cachePool),V0(r,f),Nr(),r.memoizedState=null):(t!==null&&Ju(r,null),Yd(),Nr());return Yt(t,r,h,s),r.child}function Uy(t,r,s,l){var h=Bd();return h=h===null?null:{parent:Vt._currentValue,pool:h},r.memoizedState={baseLanes:s,cachePool:h},t!==null&&Ju(r,null),Yd(),Ty(r),t!==null&&Jo(t,r,l,!0),null}function gc(t,r){var s=r.ref;if(s===null)t!==null&&t.ref!==null&&(r.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(r.flags|=4194816)}}function gf(t,r,s,l,h){return Ua(r),s=Wd(t,r,s,l,void 0,h),l=Zd(),t!==null&&!Bt?(Jd(t,r,h),Yi(t,r,h)):(He&&l&&Od(r),r.flags|=1,Yt(t,r,s,h),r.child)}function Ly(t,r,s,l,h,f){return Ua(r),r.updateQueue=null,s=U0(r,l,s,h),P0(t),l=Zd(),t!==null&&!Bt?(Jd(t,r,f),Yi(t,r,f)):(He&&l&&Od(r),r.flags|=1,Yt(t,r,s,f),r.child)}function zy(t,r,s,l,h){if(Ua(r),r.stateNode===null){var f=bs,w=s.contextType;typeof w=="object"&&w!==null&&(f=nn(w)),f=new s(l,f),r.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=pf,r.stateNode=f,f._reactInternals=r,f=r.stateNode,f.props=l,f.state=r.memoizedState,f.refs={},Kd(r),w=s.contextType,f.context=typeof w=="object"&&w!==null?nn(w):bs,f.state=r.memoizedState,w=s.getDerivedStateFromProps,typeof w=="function"&&(ff(r,s,w,l),f.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(w=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),w!==f.state&&pf.enqueueReplaceState(f,f.state,null),sl(r,l,f,h),al(),f.state=r.memoizedState),typeof f.componentDidMount=="function"&&(r.flags|=4194308),l=!0}else if(t===null){f=r.stateNode;var b=r.memoizedProps,N=$a(s,b);f.props=N;var Y=f.context,te=s.contextType;w=bs,typeof te=="object"&&te!==null&&(w=nn(te));var re=s.getDerivedStateFromProps;te=typeof re=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=r.pendingProps!==b,te||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||Y!==w)&&Ay(r,f,l,w),Rr=!1;var Q=r.memoizedState;f.state=Q,sl(r,l,f,h),al(),Y=r.memoizedState,b||Q!==Y||Rr?(typeof re=="function"&&(ff(r,s,re,l),Y=r.memoizedState),(N=Rr||Sy(r,s,N,l,Q,Y,w))?(te||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(r.flags|=4194308)):(typeof f.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=Y),f.props=l,f.state=Y,f.context=w,l=N):(typeof f.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{f=r.stateNode,Hd(t,r),w=r.memoizedProps,te=$a(s,w),f.props=te,re=r.pendingProps,Q=f.context,Y=s.contextType,N=bs,typeof Y=="object"&&Y!==null&&(N=nn(Y)),b=s.getDerivedStateFromProps,(Y=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(w!==re||Q!==N)&&Ay(r,f,l,N),Rr=!1,Q=r.memoizedState,f.state=Q,sl(r,l,f,h),al();var X=r.memoizedState;w!==re||Q!==X||Rr||t!==null&&t.dependencies!==null&&Wu(t.dependencies)?(typeof b=="function"&&(ff(r,s,b,l),X=r.memoizedState),(te=Rr||Sy(r,s,te,l,Q,X,N)||t!==null&&t.dependencies!==null&&Wu(t.dependencies))?(Y||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(l,X,N),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(l,X,N)),typeof f.componentDidUpdate=="function"&&(r.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof f.componentDidUpdate!="function"||w===t.memoizedProps&&Q===t.memoizedState||(r.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||w===t.memoizedProps&&Q===t.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=X),f.props=l,f.state=X,f.context=N,l=te):(typeof f.componentDidUpdate!="function"||w===t.memoizedProps&&Q===t.memoizedState||(r.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||w===t.memoizedProps&&Q===t.memoizedState||(r.flags|=1024),l=!1)}return f=l,gc(t,r),l=(r.flags&128)!==0,f||l?(f=r.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:f.render(),r.flags|=1,t!==null&&l?(r.child=Ms(r,t.child,null,h),r.child=Ms(r,null,s,h)):Yt(t,r,s,h),r.memoizedState=f.state,t=r.child):t=Yi(t,r,h),t}function $y(t,r,s,l){return Wo(),r.flags|=256,Yt(t,r,s,l),r.child}var yf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xf(t){return{baseLanes:t,cachePool:I0()}}function vf(t,r,s){return t=t!==null?t.childLanes&~s:0,r&&(t|=$n),t}function By(t,r,s){var l=r.pendingProps,h=!1,f=(r.flags&128)!==0,w;if((w=f)||(w=t!==null&&t.memoizedState===null?!1:(Pt.current&2)!==0),w&&(h=!0,r.flags&=-129),w=(r.flags&32)!==0,r.flags&=-33,t===null){if(He){if(h?Dr(r):Nr(),He){var b=yt,N;if(N=b){e:{for(N=b,b=gi;N.nodeType!==8;){if(!b){b=null;break e}if(N=ni(N.nextSibling),N===null){b=null;break e}}b=N}b!==null?(r.memoizedState={dehydrated:b,treeContext:Ma!==null?{id:Bi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},N=bn(18,null,null,0),N.stateNode=b,N.return=r,r.child=N,fn=r,yt=null,N=!0):N=!1}N||Va(r)}if(b=r.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return np(b)?r.lanes=32:r.lanes=536870912,null;Gi(r)}return b=l.children,l=l.fallback,h?(Nr(),h=r.mode,b=yc({mode:"hidden",children:b},h),l=Na(l,h,s,null),b.return=r,l.return=r,b.sibling=l,r.child=b,h=r.child,h.memoizedState=xf(s),h.childLanes=vf(t,w,s),r.memoizedState=yf,l):(Dr(r),_f(r,b))}if(N=t.memoizedState,N!==null&&(b=N.dehydrated,b!==null)){if(f)r.flags&256?(Dr(r),r.flags&=-257,r=wf(t,r,s)):r.memoizedState!==null?(Nr(),r.child=t.child,r.flags|=128,r=null):(Nr(),h=l.fallback,b=r.mode,l=yc({mode:"visible",children:l.children},b),h=Na(h,b,s,null),h.flags|=2,l.return=r,h.return=r,l.sibling=h,r.child=l,Ms(r,t.child,null,s),l=r.child,l.memoizedState=xf(s),l.childLanes=vf(t,w,s),r.memoizedState=yf,r=h);else if(Dr(r),np(b)){if(w=b.nextSibling&&b.nextSibling.dataset,w)var Y=w.dgst;w=Y,l=Error(a(419)),l.stack="",l.digest=w,Zo({value:l,source:null,stack:null}),r=wf(t,r,s)}else if(Bt||Jo(t,r,s,!1),w=(s&t.childLanes)!==0,Bt||w){if(w=rt,w!==null&&(l=s&-s,l=(l&42)!==0?1:Do(l),l=(l&(w.suspendedLanes|s))!==0?0:l,l!==0&&l!==N.retryLane))throw N.retryLane=l,Es(t,l),In(w,t,l),My;b.data==="$?"||Lf(),r=wf(t,r,s)}else b.data==="$?"?(r.flags|=192,r.child=t.child,r=null):(t=N.treeContext,yt=ni(b.nextSibling),fn=r,He=!0,ka=null,gi=!1,t!==null&&(Un[Ln++]=Bi,Un[Ln++]=Fi,Un[Ln++]=Ma,Bi=t.id,Fi=t.overflow,Ma=r),r=_f(r,l.children),r.flags|=4096);return r}return h?(Nr(),h=l.fallback,b=r.mode,N=t.child,Y=N.sibling,l=$i(N,{mode:"hidden",children:l.children}),l.subtreeFlags=N.subtreeFlags&65011712,Y!==null?h=$i(Y,h):(h=Na(h,b,s,null),h.flags|=2),h.return=r,l.return=r,l.sibling=h,r.child=l,l=h,h=r.child,b=t.child.memoizedState,b===null?b=xf(s):(N=b.cachePool,N!==null?(Y=Vt._currentValue,N=N.parent!==Y?{parent:Y,pool:Y}:N):N=I0(),b={baseLanes:b.baseLanes|s,cachePool:N}),h.memoizedState=b,h.childLanes=vf(t,w,s),r.memoizedState=yf,l):(Dr(r),s=t.child,t=s.sibling,s=$i(s,{mode:"visible",children:l.children}),s.return=r,s.sibling=null,t!==null&&(w=r.deletions,w===null?(r.deletions=[t],r.flags|=16):w.push(t)),r.child=s,r.memoizedState=null,s)}function _f(t,r){return r=yc({mode:"visible",children:r},t.mode),r.return=t,t.child=r}function yc(t,r){return t=bn(22,t,null,r),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function wf(t,r,s){return Ms(r,t.child,null,s),t=_f(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Fy(t,r,s){t.lanes|=r;var l=t.alternate;l!==null&&(l.lanes|=r),Ud(t.return,r,s)}function Ef(t,r,s,l,h){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:h}:(f.isBackwards=r,f.rendering=null,f.renderingStartTime=0,f.last=l,f.tail=s,f.tailMode=h)}function Ky(t,r,s){var l=r.pendingProps,h=l.revealOrder,f=l.tail;if(Yt(t,r,l.children,s),l=Pt.current,(l&2)!==0)l=l&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fy(t,s,r);else if(t.tag===19)Fy(t,s,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(he(Pt,l),h){case"forwards":for(s=r.child,h=null;s!==null;)t=s.alternate,t!==null&&fc(t)===null&&(h=s),s=s.sibling;s=h,s===null?(h=r.child,r.child=null):(h=s.sibling,s.sibling=null),Ef(r,!1,h,s,f);break;case"backwards":for(s=null,h=r.child,r.child=null;h!==null;){if(t=h.alternate,t!==null&&fc(t)===null){r.child=h;break}t=h.sibling,h.sibling=s,s=h,h=t}Ef(r,!0,s,null,f);break;case"together":Ef(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Yi(t,r,s){if(t!==null&&(r.dependencies=t.dependencies),Pr|=r.lanes,(s&r.childLanes)===0)if(t!==null){if(Jo(t,r,s,!1),(s&r.childLanes)===0)return null}else return null;if(t!==null&&r.child!==t.child)throw Error(a(153));if(r.child!==null){for(t=r.child,s=$i(t,t.pendingProps),r.child=s,s.return=r;t.sibling!==null;)t=t.sibling,s=s.sibling=$i(t,t.pendingProps),s.return=r;s.sibling=null}return r.child}function bf(t,r){return(t.lanes&r)!==0?!0:(t=t.dependencies,!!(t!==null&&Wu(t)))}function vb(t,r,s){switch(r.tag){case 3:Le(r,r.stateNode.containerInfo),Ar(r,Vt,t.memoizedState.cache),Wo();break;case 27:case 5:Ni(r);break;case 4:Le(r,r.stateNode.containerInfo);break;case 10:Ar(r,r.type,r.memoizedProps.value);break;case 13:var l=r.memoizedState;if(l!==null)return l.dehydrated!==null?(Dr(r),r.flags|=128,null):(s&r.child.childLanes)!==0?By(t,r,s):(Dr(r),t=Yi(t,r,s),t!==null?t.sibling:null);Dr(r);break;case 19:var h=(t.flags&128)!==0;if(l=(s&r.childLanes)!==0,l||(Jo(t,r,s,!1),l=(s&r.childLanes)!==0),h){if(l)return Ky(t,r,s);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),he(Pt,Pt.current),l)break;return null;case 22:case 23:return r.lanes=0,Py(t,r,s);case 24:Ar(r,Vt,t.memoizedState.cache)}return Yi(t,r,s)}function Hy(t,r,s){if(t!==null)if(t.memoizedProps!==r.pendingProps)Bt=!0;else{if(!bf(t,s)&&(r.flags&128)===0)return Bt=!1,vb(t,r,s);Bt=(t.flags&131072)!==0}else Bt=!1,He&&(r.flags&1048576)!==0&&w0(r,Xu,r.index);switch(r.lanes=0,r.tag){case 16:e:{t=r.pendingProps;var l=r.elementType,h=l._init;if(l=h(l._payload),r.type=l,typeof l=="function")Dd(l)?(t=$a(l,t),r.tag=1,r=zy(null,r,l,t,s)):(r.tag=0,r=gf(null,r,l,t,s));else{if(l!=null){if(h=l.$$typeof,h===le){r.tag=11,r=Oy(null,r,l,t,s);break e}else if(h===I){r.tag=14,r=ky(null,r,l,t,s);break e}}throw r=st(l)||l,Error(a(306,r,""))}}return r;case 0:return gf(t,r,r.type,r.pendingProps,s);case 1:return l=r.type,h=$a(l,r.pendingProps),zy(t,r,l,h,s);case 3:e:{if(Le(r,r.stateNode.containerInfo),t===null)throw Error(a(387));l=r.pendingProps;var f=r.memoizedState;h=f.element,Hd(t,r),sl(r,l,null,s);var w=r.memoizedState;if(l=w.cache,Ar(r,Vt,l),l!==f.cache&&Ld(r,[Vt],s,!0),al(),l=w.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:w.cache},r.updateQueue.baseState=f,r.memoizedState=f,r.flags&256){r=$y(t,r,l,s);break e}else if(l!==h){h=Vn(Error(a(424)),r),Zo(h),r=$y(t,r,l,s);break e}else{switch(t=r.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(yt=ni(t.firstChild),fn=r,He=!0,ka=null,gi=!0,s=by(r,null,l,s),r.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Wo(),l===h){r=Yi(t,r,s);break e}Yt(t,r,l,s)}r=r.child}return r;case 26:return gc(t,r),t===null?(s=Qx(r.type,null,r.pendingProps,null))?r.memoizedState=s:He||(s=r.type,t=r.pendingProps,l=Dc(_e.current).createElement(s),l[_t]=r,l[Gt]=t,Xt(l,s,t),wt(l),r.stateNode=l):r.memoizedState=Qx(r.type,t.memoizedProps,r.pendingProps,t.memoizedState),null;case 27:return Ni(r),t===null&&He&&(l=r.stateNode=qx(r.type,r.pendingProps,_e.current),fn=r,gi=!0,h=yt,$r(r.type)?(ip=h,yt=ni(l.firstChild)):yt=h),Yt(t,r,r.pendingProps.children,s),gc(t,r),t===null&&(r.flags|=4194304),r.child;case 5:return t===null&&He&&((h=l=yt)&&(l=Gb(l,r.type,r.pendingProps,gi),l!==null?(r.stateNode=l,fn=r,yt=ni(l.firstChild),gi=!1,h=!0):h=!1),h||Va(r)),Ni(r),h=r.type,f=r.pendingProps,w=t!==null?t.memoizedProps:null,l=f.children,Jf(h,f)?l=null:w!==null&&Jf(h,w)&&(r.flags|=32),r.memoizedState!==null&&(h=Wd(t,r,hb,null,null,s),Il._currentValue=h),gc(t,r),Yt(t,r,l,s),r.child;case 6:return t===null&&He&&((t=s=yt)&&(s=Yb(s,r.pendingProps,gi),s!==null?(r.stateNode=s,fn=r,yt=null,t=!0):t=!1),t||Va(r)),null;case 13:return By(t,r,s);case 4:return Le(r,r.stateNode.containerInfo),l=r.pendingProps,t===null?r.child=Ms(r,null,l,s):Yt(t,r,l,s),r.child;case 11:return Oy(t,r,r.type,r.pendingProps,s);case 7:return Yt(t,r,r.pendingProps,s),r.child;case 8:return Yt(t,r,r.pendingProps.children,s),r.child;case 12:return Yt(t,r,r.pendingProps.children,s),r.child;case 10:return l=r.pendingProps,Ar(r,r.type,l.value),Yt(t,r,l.children,s),r.child;case 9:return h=r.type._context,l=r.pendingProps.children,Ua(r),h=nn(h),l=l(h),r.flags|=1,Yt(t,r,l,s),r.child;case 14:return ky(t,r,r.type,r.pendingProps,s);case 15:return Vy(t,r,r.type,r.pendingProps,s);case 19:return Ky(t,r,s);case 31:return l=r.pendingProps,s=r.mode,l={mode:l.mode,children:l.children},t===null?(s=yc(l,s),s.ref=r.ref,r.child=s,s.return=r,r=s):(s=$i(t.child,l),s.ref=r.ref,r.child=s,s.return=r,r=s),r;case 22:return Py(t,r,s);case 24:return Ua(r),l=nn(Vt),t===null?(h=Bd(),h===null&&(h=rt,f=zd(),h.pooledCache=f,f.refCount++,f!==null&&(h.pooledCacheLanes|=s),h=f),r.memoizedState={parent:l,cache:h},Kd(r),Ar(r,Vt,h)):((t.lanes&s)!==0&&(Hd(t,r),sl(r,null,null,s),al()),h=t.memoizedState,f=r.memoizedState,h.parent!==l?(h={parent:l,cache:l},r.memoizedState=h,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=h),Ar(r,Vt,l)):(l=f.cache,Ar(r,Vt,l),l!==h.cache&&Ld(r,[Vt],s,!0))),Yt(t,r,r.pendingProps.children,s),r.child;case 29:throw r.pendingProps}throw Error(a(156,r.tag))}function Qi(t){t.flags|=4}function qy(t,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!e1(r)){if(r=zn.current,r!==null&&((ze&4194048)===ze?yi!==null:(ze&62914560)!==ze&&(ze&536870912)===0||r!==yi))throw il=Fd,C0;t.flags|=8192}}function xc(t,r){r!==null&&(t.flags|=4),t.flags&16384&&(r=t.tag!==22?fr():536870912,t.lanes|=r,Ps|=r)}function fl(t,r){if(!He)switch(t.tailMode){case"hidden":r=t.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function pt(t){var r=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(r)for(var h=t.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=l,t.childLanes=s,r}function _b(t,r,s){var l=r.pendingProps;switch(kd(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(r),null;case 1:return pt(r),null;case 3:return s=r.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),r.memoizedState.cache!==l&&(r.flags|=2048),Hi(Vt),Mt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Xo(r)?Qi(r):t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,T0())),pt(r),null;case 26:return s=r.memoizedState,t===null?(Qi(r),s!==null?(pt(r),qy(r,s)):(pt(r),r.flags&=-16777217)):s?s!==t.memoizedState?(Qi(r),pt(r),qy(r,s)):(pt(r),r.flags&=-16777217):(t.memoizedProps!==l&&Qi(r),pt(r),r.flags&=-16777217),null;case 27:qn(r),s=_e.current;var h=r.type;if(t!==null&&r.stateNode!=null)t.memoizedProps!==l&&Qi(r);else{if(!l){if(r.stateNode===null)throw Error(a(166));return pt(r),null}t=ge.current,Xo(r)?E0(r):(t=qx(h,l,s),r.stateNode=t,Qi(r))}return pt(r),null;case 5:if(qn(r),s=r.type,t!==null&&r.stateNode!=null)t.memoizedProps!==l&&Qi(r);else{if(!l){if(r.stateNode===null)throw Error(a(166));return pt(r),null}if(t=ge.current,Xo(r))E0(r);else{switch(h=Dc(_e.current),t){case 1:t=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:t=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":t=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":t=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":t=h.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?h.createElement(s,{is:l.is}):h.createElement(s)}}t[_t]=r,t[Gt]=l;e:for(h=r.child;h!==null;){if(h.tag===5||h.tag===6)t.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===r)break e;for(;h.sibling===null;){if(h.return===null||h.return===r)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}r.stateNode=t;e:switch(Xt(t,s,l),s){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Qi(r)}}return pt(r),r.flags&=-16777217,null;case 6:if(t&&r.stateNode!=null)t.memoizedProps!==l&&Qi(r);else{if(typeof l!="string"&&r.stateNode===null)throw Error(a(166));if(t=_e.current,Xo(r)){if(t=r.stateNode,s=r.memoizedProps,l=null,h=fn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}t[_t]=r,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||Lx(t.nodeValue,s)),t||Va(r)}else t=Dc(t).createTextNode(l),t[_t]=r,r.stateNode=t}return pt(r),null;case 13:if(l=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=Xo(r),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(a(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[_t]=r}else Wo(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;pt(r),h=!1}else h=T0(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=h),h=!0;if(!h)return r.flags&256?(Gi(r),r):(Gi(r),null)}if(Gi(r),(r.flags&128)!==0)return r.lanes=s,r;if(s=l!==null,t=t!==null&&t.memoizedState!==null,s){l=r.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var f=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(f=l.memoizedState.cachePool.pool),f!==h&&(l.flags|=2048)}return s!==t&&s&&(r.child.flags|=8192),xc(r,r.updateQueue),pt(r),null;case 4:return Mt(),t===null&&Yf(r.stateNode.containerInfo),pt(r),null;case 10:return Hi(r.type),pt(r),null;case 19:if(ce(Pt),h=r.memoizedState,h===null)return pt(r),null;if(l=(r.flags&128)!==0,f=h.rendering,f===null)if(l)fl(h,!1);else{if(xt!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(f=fc(t),f!==null){for(r.flags|=128,fl(h,!1),t=f.updateQueue,r.updateQueue=t,xc(r,t),r.subtreeFlags=0,t=s,s=r.child;s!==null;)_0(s,t),s=s.sibling;return he(Pt,Pt.current&1|2),r.child}t=t.sibling}h.tail!==null&&pn()>wc&&(r.flags|=128,l=!0,fl(h,!1),r.lanes=4194304)}else{if(!l)if(t=fc(f),t!==null){if(r.flags|=128,l=!0,t=t.updateQueue,r.updateQueue=t,xc(r,t),fl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!f.alternate&&!He)return pt(r),null}else 2*pn()-h.renderingStartTime>wc&&s!==536870912&&(r.flags|=128,l=!0,fl(h,!1),r.lanes=4194304);h.isBackwards?(f.sibling=r.child,r.child=f):(t=h.last,t!==null?t.sibling=f:r.child=f,h.last=f)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=pn(),r.sibling=null,t=Pt.current,he(Pt,l?t&1|2:t&1),r):(pt(r),null);case 22:case 23:return Gi(r),Qd(),l=r.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(r.flags|=8192):l&&(r.flags|=8192),l?(s&536870912)!==0&&(r.flags&128)===0&&(pt(r),r.subtreeFlags&6&&(r.flags|=8192)):pt(r),s=r.updateQueue,s!==null&&xc(r,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),l!==s&&(r.flags|=2048),t!==null&&ce(La),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),r.memoizedState.cache!==s&&(r.flags|=2048),Hi(Vt),pt(r),null;case 25:return null;case 30:return null}throw Error(a(156,r.tag))}function wb(t,r){switch(kd(r),r.tag){case 1:return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Hi(Vt),Mt(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 26:case 27:case 5:return qn(r),null;case 13:if(Gi(r),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(a(340));Wo()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return ce(Pt),null;case 4:return Mt(),null;case 10:return Hi(r.type),null;case 22:case 23:return Gi(r),Qd(),t!==null&&ce(La),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 24:return Hi(Vt),null;case 25:return null;default:return null}}function Gy(t,r){switch(kd(r),r.tag){case 3:Hi(Vt),Mt();break;case 26:case 27:case 5:qn(r);break;case 4:Mt();break;case 13:Gi(r);break;case 19:ce(Pt);break;case 10:Hi(r.type);break;case 22:case 23:Gi(r),Qd(),t!==null&&ce(La);break;case 24:Hi(Vt)}}function pl(t,r){try{var s=r.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var h=l.next;s=h;do{if((s.tag&t)===t){l=void 0;var f=s.create,w=s.inst;l=f(),w.destroy=l}s=s.next}while(s!==h)}}catch(b){nt(r,r.return,b)}}function Mr(t,r,s){try{var l=r.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var f=h.next;l=f;do{if((l.tag&t)===t){var w=l.inst,b=w.destroy;if(b!==void 0){w.destroy=void 0,h=r;var N=s,Y=b;try{Y()}catch(te){nt(h,N,te)}}}l=l.next}while(l!==f)}}catch(te){nt(r,r.return,te)}}function Yy(t){var r=t.updateQueue;if(r!==null){var s=t.stateNode;try{k0(r,s)}catch(l){nt(t,t.return,l)}}}function Qy(t,r,s){s.props=$a(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){nt(t,r,l)}}function ml(t,r){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(h){nt(t,r,h)}}function xi(t,r){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(h){nt(t,r,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){nt(t,r,h)}else s.current=null}function Xy(t){var r=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(h){nt(t,t.return,h)}}function Tf(t,r,s){try{var l=t.stateNode;Bb(l,t.type,s,r),l[Gt]=r}catch(h){nt(t,t.return,h)}}function Wy(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&$r(t.type)||t.tag===4}function Sf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Wy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&$r(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Af(t,r,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,r?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,r):(r=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,r.appendChild(t),s=s._reactRootContainer,s!=null||r.onclick!==null||(r.onclick=jc));else if(l!==4&&(l===27&&$r(t.type)&&(s=t.stateNode,r=null),t=t.child,t!==null))for(Af(t,r,s),t=t.sibling;t!==null;)Af(t,r,s),t=t.sibling}function vc(t,r,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,r?s.insertBefore(t,r):s.appendChild(t);else if(l!==4&&(l===27&&$r(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(vc(t,r,s),t=t.sibling;t!==null;)vc(t,r,s),t=t.sibling}function Zy(t){var r=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,h=r.attributes;h.length;)r.removeAttributeNode(h[0]);Xt(r,l,s),r[_t]=t,r[Gt]=s}catch(f){nt(t,t.return,f)}}var Xi=!1,Tt=!1,Rf=!1,Jy=typeof WeakSet=="function"?WeakSet:Set,Ft=null;function Eb(t,r){if(t=t.containerInfo,Wf=Pc,t=c0(t),Td(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var h=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{s.nodeType,f.nodeType}catch{s=null;break e}var w=0,b=-1,N=-1,Y=0,te=0,re=t,Q=null;t:for(;;){for(var X;re!==s||h!==0&&re.nodeType!==3||(b=w+h),re!==f||l!==0&&re.nodeType!==3||(N=w+l),re.nodeType===3&&(w+=re.nodeValue.length),(X=re.firstChild)!==null;)Q=re,re=X;for(;;){if(re===t)break t;if(Q===s&&++Y===h&&(b=w),Q===f&&++te===l&&(N=w),(X=re.nextSibling)!==null)break;re=Q,Q=re.parentNode}re=X}s=b===-1||N===-1?null:{start:b,end:N}}else s=null}s=s||{start:0,end:0}}else s=null;for(Zf={focusedElem:t,selectionRange:s},Pc=!1,Ft=r;Ft!==null;)if(r=Ft,t=r.child,(r.subtreeFlags&1024)!==0&&t!==null)t.return=r,Ft=t;else for(;Ft!==null;){switch(r=Ft,f=r.alternate,t=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,s=r,h=f.memoizedProps,f=f.memoizedState,l=s.stateNode;try{var Se=$a(s.type,h,s.elementType===s.type);t=l.getSnapshotBeforeUpdate(Se,f),l.__reactInternalSnapshotBeforeUpdate=t}catch(we){nt(s,s.return,we)}}break;case 3:if((t&1024)!==0){if(t=r.stateNode.containerInfo,s=t.nodeType,s===9)tp(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":tp(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=r.sibling,t!==null){t.return=r.return,Ft=t;break}Ft=r.return}}function ex(t,r,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Or(t,s),l&4&&pl(5,s);break;case 1:if(Or(t,s),l&4)if(t=s.stateNode,r===null)try{t.componentDidMount()}catch(w){nt(s,s.return,w)}else{var h=$a(s.type,r.memoizedProps);r=r.memoizedState;try{t.componentDidUpdate(h,r,t.__reactInternalSnapshotBeforeUpdate)}catch(w){nt(s,s.return,w)}}l&64&&Yy(s),l&512&&ml(s,s.return);break;case 3:if(Or(t,s),l&64&&(t=s.updateQueue,t!==null)){if(r=null,s.child!==null)switch(s.child.tag){case 27:case 5:r=s.child.stateNode;break;case 1:r=s.child.stateNode}try{k0(t,r)}catch(w){nt(s,s.return,w)}}break;case 27:r===null&&l&4&&Zy(s);case 26:case 5:Or(t,s),r===null&&l&4&&Xy(s),l&512&&ml(s,s.return);break;case 12:Or(t,s);break;case 13:Or(t,s),l&4&&ix(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=Db.bind(null,s),Qb(t,s))));break;case 22:if(l=s.memoizedState!==null||Xi,!l){r=r!==null&&r.memoizedState!==null||Tt,h=Xi;var f=Tt;Xi=l,(Tt=r)&&!f?kr(t,s,(s.subtreeFlags&8772)!==0):Or(t,s),Xi=h,Tt=f}break;case 30:break;default:Or(t,s)}}function tx(t){var r=t.alternate;r!==null&&(t.alternate=null,tx(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&os(r)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ct=null,gn=!1;function Wi(t,r,s){for(s=s.child;s!==null;)nx(t,r,s),s=s.sibling}function nx(t,r,s){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(cr,s)}catch{}switch(s.tag){case 26:Tt||xi(s,r),Wi(t,r,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Tt||xi(s,r);var l=ct,h=gn;$r(s.type)&&(ct=s.stateNode,gn=!1),Wi(t,r,s),Tl(s.stateNode),ct=l,gn=h;break;case 5:Tt||xi(s,r);case 6:if(l=ct,h=gn,ct=null,Wi(t,r,s),ct=l,gn=h,ct!==null)if(gn)try{(ct.nodeType===9?ct.body:ct.nodeName==="HTML"?ct.ownerDocument.body:ct).removeChild(s.stateNode)}catch(f){nt(s,r,f)}else try{ct.removeChild(s.stateNode)}catch(f){nt(s,r,f)}break;case 18:ct!==null&&(gn?(t=ct,Kx(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Nl(t)):Kx(ct,s.stateNode));break;case 4:l=ct,h=gn,ct=s.stateNode.containerInfo,gn=!0,Wi(t,r,s),ct=l,gn=h;break;case 0:case 11:case 14:case 15:Tt||Mr(2,s,r),Tt||Mr(4,s,r),Wi(t,r,s);break;case 1:Tt||(xi(s,r),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Qy(s,r,l)),Wi(t,r,s);break;case 21:Wi(t,r,s);break;case 22:Tt=(l=Tt)||s.memoizedState!==null,Wi(t,r,s),Tt=l;break;default:Wi(t,r,s)}}function ix(t,r){if(r.memoizedState===null&&(t=r.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Nl(t)}catch(s){nt(r,r.return,s)}}function bb(t){switch(t.tag){case 13:case 19:var r=t.stateNode;return r===null&&(r=t.stateNode=new Jy),r;case 22:return t=t.stateNode,r=t._retryCache,r===null&&(r=t._retryCache=new Jy),r;default:throw Error(a(435,t.tag))}}function If(t,r){var s=bb(t);r.forEach(function(l){var h=Nb.bind(null,t,l);s.has(l)||(s.add(l),l.then(h,h))})}function Tn(t,r){var s=r.deletions;if(s!==null)for(var l=0;l<s.length;l++){var h=s[l],f=t,w=r,b=w;e:for(;b!==null;){switch(b.tag){case 27:if($r(b.type)){ct=b.stateNode,gn=!1;break e}break;case 5:ct=b.stateNode,gn=!1;break e;case 3:case 4:ct=b.stateNode.containerInfo,gn=!0;break e}b=b.return}if(ct===null)throw Error(a(160));nx(f,w,h),ct=null,gn=!1,f=h.alternate,f!==null&&(f.return=null),h.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)rx(r,t),r=r.sibling}var ti=null;function rx(t,r){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Tn(r,t),Sn(t),l&4&&(Mr(3,t,t.return),pl(3,t),Mr(5,t,t.return));break;case 1:Tn(r,t),Sn(t),l&512&&(Tt||s===null||xi(s,s.return)),l&64&&Xi&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var h=ti;if(Tn(r,t),Sn(t),l&512&&(Tt||s===null||xi(s,s.return)),l&4){var f=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,h=h.ownerDocument||h;t:switch(l){case"title":f=h.getElementsByTagName("title")[0],(!f||f[gr]||f[_t]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=h.createElement(l),h.head.insertBefore(f,h.querySelector("head > title"))),Xt(f,l,s),f[_t]=t,wt(f),l=f;break e;case"link":var w=Zx("link","href",h).get(l+(s.href||""));if(w){for(var b=0;b<w.length;b++)if(f=w[b],f.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&f.getAttribute("rel")===(s.rel==null?null:s.rel)&&f.getAttribute("title")===(s.title==null?null:s.title)&&f.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){w.splice(b,1);break t}}f=h.createElement(l),Xt(f,l,s),h.head.appendChild(f);break;case"meta":if(w=Zx("meta","content",h).get(l+(s.content||""))){for(b=0;b<w.length;b++)if(f=w[b],f.getAttribute("content")===(s.content==null?null:""+s.content)&&f.getAttribute("name")===(s.name==null?null:s.name)&&f.getAttribute("property")===(s.property==null?null:s.property)&&f.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&f.getAttribute("charset")===(s.charSet==null?null:s.charSet)){w.splice(b,1);break t}}f=h.createElement(l),Xt(f,l,s),h.head.appendChild(f);break;default:throw Error(a(468,l))}f[_t]=t,wt(f),l=f}t.stateNode=l}else Jx(h,t.type,t.stateNode);else t.stateNode=Wx(h,l,t.memoizedProps);else f!==l?(f===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):f.count--,l===null?Jx(h,t.type,t.stateNode):Wx(h,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Tf(t,t.memoizedProps,s.memoizedProps)}break;case 27:Tn(r,t),Sn(t),l&512&&(Tt||s===null||xi(s,s.return)),s!==null&&l&4&&Tf(t,t.memoizedProps,s.memoizedProps);break;case 5:if(Tn(r,t),Sn(t),l&512&&(Tt||s===null||xi(s,s.return)),t.flags&32){h=t.stateNode;try{On(h,"")}catch(X){nt(t,t.return,X)}}l&4&&t.stateNode!=null&&(h=t.memoizedProps,Tf(t,h,s!==null?s.memoizedProps:h)),l&1024&&(Rf=!0);break;case 6:if(Tn(r,t),Sn(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(X){nt(t,t.return,X)}}break;case 3:if(Oc=null,h=ti,ti=Nc(r.containerInfo),Tn(r,t),ti=h,Sn(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Nl(r.containerInfo)}catch(X){nt(t,t.return,X)}Rf&&(Rf=!1,ax(t));break;case 4:l=ti,ti=Nc(t.stateNode.containerInfo),Tn(r,t),Sn(t),ti=l;break;case 12:Tn(r,t),Sn(t);break;case 13:Tn(r,t),Sn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Of=pn()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,If(t,l)));break;case 22:h=t.memoizedState!==null;var N=s!==null&&s.memoizedState!==null,Y=Xi,te=Tt;if(Xi=Y||h,Tt=te||N,Tn(r,t),Tt=te,Xi=Y,Sn(t),l&8192)e:for(r=t.stateNode,r._visibility=h?r._visibility&-2:r._visibility|1,h&&(s===null||N||Xi||Tt||Ba(t)),s=null,r=t;;){if(r.tag===5||r.tag===26){if(s===null){N=s=r;try{if(f=N.stateNode,h)w=f.style,typeof w.setProperty=="function"?w.setProperty("display","none","important"):w.display="none";else{b=N.stateNode;var re=N.memoizedProps.style,Q=re!=null&&re.hasOwnProperty("display")?re.display:null;b.style.display=Q==null||typeof Q=="boolean"?"":(""+Q).trim()}}catch(X){nt(N,N.return,X)}}}else if(r.tag===6){if(s===null){N=r;try{N.stateNode.nodeValue=h?"":N.memoizedProps}catch(X){nt(N,N.return,X)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===t)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;s===r&&(s=null),r=r.return}s===r&&(s=null),r.sibling.return=r.return,r=r.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,If(t,s))));break;case 19:Tn(r,t),Sn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,If(t,l)));break;case 30:break;case 21:break;default:Tn(r,t),Sn(t)}}function Sn(t){var r=t.flags;if(r&2){try{for(var s,l=t.return;l!==null;){if(Wy(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var h=s.stateNode,f=Sf(t);vc(t,f,h);break;case 5:var w=s.stateNode;s.flags&32&&(On(w,""),s.flags&=-33);var b=Sf(t);vc(t,b,w);break;case 3:case 4:var N=s.stateNode.containerInfo,Y=Sf(t);Af(t,Y,N);break;default:throw Error(a(161))}}catch(te){nt(t,t.return,te)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function ax(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var r=t;ax(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),t=t.sibling}}function Or(t,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)ex(t,r.alternate,r),r=r.sibling}function Ba(t){for(t=t.child;t!==null;){var r=t;switch(r.tag){case 0:case 11:case 14:case 15:Mr(4,r,r.return),Ba(r);break;case 1:xi(r,r.return);var s=r.stateNode;typeof s.componentWillUnmount=="function"&&Qy(r,r.return,s),Ba(r);break;case 27:Tl(r.stateNode);case 26:case 5:xi(r,r.return),Ba(r);break;case 22:r.memoizedState===null&&Ba(r);break;case 30:Ba(r);break;default:Ba(r)}t=t.sibling}}function kr(t,r,s){for(s=s&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var l=r.alternate,h=t,f=r,w=f.flags;switch(f.tag){case 0:case 11:case 15:kr(h,f,s),pl(4,f);break;case 1:if(kr(h,f,s),l=f,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(Y){nt(l,l.return,Y)}if(l=f,h=l.updateQueue,h!==null){var b=l.stateNode;try{var N=h.shared.hiddenCallbacks;if(N!==null)for(h.shared.hiddenCallbacks=null,h=0;h<N.length;h++)O0(N[h],b)}catch(Y){nt(l,l.return,Y)}}s&&w&64&&Yy(f),ml(f,f.return);break;case 27:Zy(f);case 26:case 5:kr(h,f,s),s&&l===null&&w&4&&Xy(f),ml(f,f.return);break;case 12:kr(h,f,s);break;case 13:kr(h,f,s),s&&w&4&&ix(h,f);break;case 22:f.memoizedState===null&&kr(h,f,s),ml(f,f.return);break;case 30:break;default:kr(h,f,s)}r=r.sibling}}function Cf(t,r){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(t=r.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&el(s))}function jf(t,r){t=null,r.alternate!==null&&(t=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==t&&(r.refCount++,t!=null&&el(t))}function vi(t,r,s,l){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)sx(t,r,s,l),r=r.sibling}function sx(t,r,s,l){var h=r.flags;switch(r.tag){case 0:case 11:case 15:vi(t,r,s,l),h&2048&&pl(9,r);break;case 1:vi(t,r,s,l);break;case 3:vi(t,r,s,l),h&2048&&(t=null,r.alternate!==null&&(t=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==t&&(r.refCount++,t!=null&&el(t)));break;case 12:if(h&2048){vi(t,r,s,l),t=r.stateNode;try{var f=r.memoizedProps,w=f.id,b=f.onPostCommit;typeof b=="function"&&b(w,r.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(N){nt(r,r.return,N)}}else vi(t,r,s,l);break;case 13:vi(t,r,s,l);break;case 23:break;case 22:f=r.stateNode,w=r.alternate,r.memoizedState!==null?f._visibility&2?vi(t,r,s,l):gl(t,r):f._visibility&2?vi(t,r,s,l):(f._visibility|=2,Os(t,r,s,l,(r.subtreeFlags&10256)!==0)),h&2048&&Cf(w,r);break;case 24:vi(t,r,s,l),h&2048&&jf(r.alternate,r);break;default:vi(t,r,s,l)}}function Os(t,r,s,l,h){for(h=h&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var f=t,w=r,b=s,N=l,Y=w.flags;switch(w.tag){case 0:case 11:case 15:Os(f,w,b,N,h),pl(8,w);break;case 23:break;case 22:var te=w.stateNode;w.memoizedState!==null?te._visibility&2?Os(f,w,b,N,h):gl(f,w):(te._visibility|=2,Os(f,w,b,N,h)),h&&Y&2048&&Cf(w.alternate,w);break;case 24:Os(f,w,b,N,h),h&&Y&2048&&jf(w.alternate,w);break;default:Os(f,w,b,N,h)}r=r.sibling}}function gl(t,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var s=t,l=r,h=l.flags;switch(l.tag){case 22:gl(s,l),h&2048&&Cf(l.alternate,l);break;case 24:gl(s,l),h&2048&&jf(l.alternate,l);break;default:gl(s,l)}r=r.sibling}}var yl=8192;function ks(t){if(t.subtreeFlags&yl)for(t=t.child;t!==null;)ox(t),t=t.sibling}function ox(t){switch(t.tag){case 26:ks(t),t.flags&yl&&t.memoizedState!==null&&lT(ti,t.memoizedState,t.memoizedProps);break;case 5:ks(t);break;case 3:case 4:var r=ti;ti=Nc(t.stateNode.containerInfo),ks(t),ti=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=yl,yl=16777216,ks(t),yl=r):ks(t));break;default:ks(t)}}function lx(t){var r=t.alternate;if(r!==null&&(t=r.child,t!==null)){r.child=null;do r=t.sibling,t.sibling=null,t=r;while(t!==null)}}function xl(t){var r=t.deletions;if((t.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var l=r[s];Ft=l,cx(l,t)}lx(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ux(t),t=t.sibling}function ux(t){switch(t.tag){case 0:case 11:case 15:xl(t),t.flags&2048&&Mr(9,t,t.return);break;case 3:xl(t);break;case 12:xl(t);break;case 22:var r=t.stateNode;t.memoizedState!==null&&r._visibility&2&&(t.return===null||t.return.tag!==13)?(r._visibility&=-3,_c(t)):xl(t);break;default:xl(t)}}function _c(t){var r=t.deletions;if((t.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var l=r[s];Ft=l,cx(l,t)}lx(t)}for(t=t.child;t!==null;){switch(r=t,r.tag){case 0:case 11:case 15:Mr(8,r,r.return),_c(r);break;case 22:s=r.stateNode,s._visibility&2&&(s._visibility&=-3,_c(r));break;default:_c(r)}t=t.sibling}}function cx(t,r){for(;Ft!==null;){var s=Ft;switch(s.tag){case 0:case 11:case 15:Mr(8,s,r);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:el(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Ft=l;else e:for(s=t;Ft!==null;){l=Ft;var h=l.sibling,f=l.return;if(tx(l),l===s){Ft=null;break e}if(h!==null){h.return=f,Ft=h;break e}Ft=f}}}var Tb={getCacheForType:function(t){var r=nn(Vt),s=r.data.get(t);return s===void 0&&(s=t(),r.data.set(t,s)),s}},Sb=typeof WeakMap=="function"?WeakMap:Map,Xe=0,rt=null,ke=null,ze=0,We=0,An=null,Vr=!1,Vs=!1,Df=!1,Zi=0,xt=0,Pr=0,Fa=0,Nf=0,$n=0,Ps=0,vl=null,yn=null,Mf=!1,Of=0,wc=1/0,Ec=null,Ur=null,Qt=0,Lr=null,Us=null,Ls=0,kf=0,Vf=null,hx=null,_l=0,Pf=null;function Rn(){if((Xe&2)!==0&&ze!==0)return ze&-ze;if(ee.T!==null){var t=As;return t!==0?t:Kf()}return Oi()}function dx(){$n===0&&($n=(ze&536870912)===0||He?jo():536870912);var t=zn.current;return t!==null&&(t.flags|=32),$n}function In(t,r,s){(t===rt&&(We===2||We===9)||t.cancelPendingCommit!==null)&&(zs(t,0),zr(t,ze,$n,!1)),vt(t,s),((Xe&2)===0||t!==rt)&&(t===rt&&((Xe&2)===0&&(Fa|=s),xt===4&&zr(t,ze,$n,!1)),_i(t))}function fx(t,r,s){if((Xe&6)!==0)throw Error(a(327));var l=!s&&(r&124)===0&&(r&t.expiredLanes)===0||dr(t,r),h=l?Ib(t,r):zf(t,r,!0),f=l;do{if(h===0){Vs&&!l&&zr(t,r,0,!1);break}else{if(s=t.current.alternate,f&&!Ab(s)){h=zf(t,r,!1),f=!1;continue}if(h===2){if(f=r,t.errorRecoveryDisabledLanes&f)var w=0;else w=t.pendingLanes&-536870913,w=w!==0?w:w&536870912?536870912:0;if(w!==0){r=w;e:{var b=t;h=vl;var N=b.current.memoizedState.isDehydrated;if(N&&(zs(b,w).flags|=256),w=zf(b,w,!1),w!==2){if(Df&&!N){b.errorRecoveryDisabledLanes|=f,Fa|=f,h=4;break e}f=yn,yn=h,f!==null&&(yn===null?yn=f:yn.push.apply(yn,f))}h=w}if(f=!1,h!==2)continue}}if(h===1){zs(t,0),zr(t,r,0,!0);break}e:{switch(l=t,f=h,f){case 0:case 1:throw Error(a(345));case 4:if((r&4194048)!==r)break;case 6:zr(l,r,$n,!Vr);break e;case 2:yn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((r&62914560)===r&&(h=Of+300-pn(),10<h)){if(zr(l,r,$n,!Vr),Nn(l,0,!0)!==0)break e;l.timeoutHandle=Bx(px.bind(null,l,s,yn,Ec,Mf,r,$n,Fa,Ps,Vr,f,2,-0,0),h);break e}px(l,s,yn,Ec,Mf,r,$n,Fa,Ps,Vr,f,0,-0,0)}}break}while(!0);_i(t)}function px(t,r,s,l,h,f,w,b,N,Y,te,re,Q,X){if(t.timeoutHandle=-1,re=r.subtreeFlags,(re&8192||(re&16785408)===16785408)&&(Rl={stylesheets:null,count:0,unsuspend:oT},ox(r),re=uT(),re!==null)){t.cancelPendingCommit=re(wx.bind(null,t,r,f,s,l,h,w,b,N,te,1,Q,X)),zr(t,f,w,!Y);return}wx(t,r,f,s,l,h,w,b,N)}function Ab(t){for(var r=t;;){var s=r.tag;if((s===0||s===11||s===15)&&r.flags&16384&&(s=r.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var h=s[l],f=h.getSnapshot;h=h.value;try{if(!En(f(),h))return!1}catch{return!1}}if(s=r.child,r.subtreeFlags&16384&&s!==null)s.return=r,r=s;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function zr(t,r,s,l){r&=~Nf,r&=~Fa,t.suspendedLanes|=r,t.pingedLanes&=~r,l&&(t.warmLanes|=r),l=t.expirationTimes;for(var h=r;0<h;){var f=31-un(h),w=1<<f;l[f]=-1,h&=~w}s!==0&&pr(t,s,r)}function bc(){return(Xe&6)===0?(wl(0),!1):!0}function Uf(){if(ke!==null){if(We===0)var t=ke.return;else t=ke,Ki=Pa=null,ef(t),Ns=null,hl=0,t=ke;for(;t!==null;)Gy(t.alternate,t),t=t.return;ke=null}}function zs(t,r){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,Kb(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Uf(),rt=t,ke=s=$i(t.current,null),ze=r,We=0,An=null,Vr=!1,Vs=dr(t,r),Df=!1,Ps=$n=Nf=Fa=Pr=xt=0,yn=vl=null,Mf=!1,(r&8)!==0&&(r|=r&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=r;0<l;){var h=31-un(l),f=1<<h;r|=t[h],l&=~f}return Zi=r,Hu(),s}function mx(t,r){Me=null,ee.H=cc,r===nl||r===ec?(r=N0(),We=3):r===C0?(r=N0(),We=4):We=r===My?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,An=r,ke===null&&(xt=1,mc(t,Vn(r,t.current)))}function gx(){var t=ee.H;return ee.H=cc,t===null?cc:t}function yx(){var t=ee.A;return ee.A=Tb,t}function Lf(){xt=4,Vr||(ze&4194048)!==ze&&zn.current!==null||(Vs=!0),(Pr&134217727)===0&&(Fa&134217727)===0||rt===null||zr(rt,ze,$n,!1)}function zf(t,r,s){var l=Xe;Xe|=2;var h=gx(),f=yx();(rt!==t||ze!==r)&&(Ec=null,zs(t,r)),r=!1;var w=xt;e:do try{if(We!==0&&ke!==null){var b=ke,N=An;switch(We){case 8:Uf(),w=6;break e;case 3:case 2:case 9:case 6:zn.current===null&&(r=!0);var Y=We;if(We=0,An=null,$s(t,b,N,Y),s&&Vs){w=0;break e}break;default:Y=We,We=0,An=null,$s(t,b,N,Y)}}Rb(),w=xt;break}catch(te){mx(t,te)}while(!0);return r&&t.shellSuspendCounter++,Ki=Pa=null,Xe=l,ee.H=h,ee.A=f,ke===null&&(rt=null,ze=0,Hu()),w}function Rb(){for(;ke!==null;)xx(ke)}function Ib(t,r){var s=Xe;Xe|=2;var l=gx(),h=yx();rt!==t||ze!==r?(Ec=null,wc=pn()+500,zs(t,r)):Vs=dr(t,r);e:do try{if(We!==0&&ke!==null){r=ke;var f=An;t:switch(We){case 1:We=0,An=null,$s(t,r,f,1);break;case 2:case 9:if(j0(f)){We=0,An=null,vx(r);break}r=function(){We!==2&&We!==9||rt!==t||(We=7),_i(t)},f.then(r,r);break e;case 3:We=7;break e;case 4:We=5;break e;case 7:j0(f)?(We=0,An=null,vx(r)):(We=0,An=null,$s(t,r,f,7));break;case 5:var w=null;switch(ke.tag){case 26:w=ke.memoizedState;case 5:case 27:var b=ke;if(!w||e1(w)){We=0,An=null;var N=b.sibling;if(N!==null)ke=N;else{var Y=b.return;Y!==null?(ke=Y,Tc(Y)):ke=null}break t}}We=0,An=null,$s(t,r,f,5);break;case 6:We=0,An=null,$s(t,r,f,6);break;case 8:Uf(),xt=6;break e;default:throw Error(a(462))}}Cb();break}catch(te){mx(t,te)}while(!0);return Ki=Pa=null,ee.H=l,ee.A=h,Xe=s,ke!==null?0:(rt=null,ze=0,Hu(),xt)}function Cb(){for(;ke!==null&&!fd();)xx(ke)}function xx(t){var r=Hy(t.alternate,t,Zi);t.memoizedProps=t.pendingProps,r===null?Tc(t):ke=r}function vx(t){var r=t,s=r.alternate;switch(r.tag){case 15:case 0:r=Ly(s,r,r.pendingProps,r.type,void 0,ze);break;case 11:r=Ly(s,r,r.pendingProps,r.type.render,r.ref,ze);break;case 5:ef(r);default:Gy(s,r),r=ke=_0(r,Zi),r=Hy(s,r,Zi)}t.memoizedProps=t.pendingProps,r===null?Tc(t):ke=r}function $s(t,r,s,l){Ki=Pa=null,ef(r),Ns=null,hl=0;var h=r.return;try{if(xb(t,h,r,s,ze)){xt=1,mc(t,Vn(s,t.current)),ke=null;return}}catch(f){if(h!==null)throw ke=h,f;xt=1,mc(t,Vn(s,t.current)),ke=null;return}r.flags&32768?(He||l===1?t=!0:Vs||(ze&536870912)!==0?t=!1:(Vr=t=!0,(l===2||l===9||l===3||l===6)&&(l=zn.current,l!==null&&l.tag===13&&(l.flags|=16384))),_x(r,t)):Tc(r)}function Tc(t){var r=t;do{if((r.flags&32768)!==0){_x(r,Vr);return}t=r.return;var s=_b(r.alternate,r,Zi);if(s!==null){ke=s;return}if(r=r.sibling,r!==null){ke=r;return}ke=r=t}while(r!==null);xt===0&&(xt=5)}function _x(t,r){do{var s=wb(t.alternate,t);if(s!==null){s.flags&=32767,ke=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!r&&(t=t.sibling,t!==null)){ke=t;return}ke=t=s}while(t!==null);xt=6,ke=null}function wx(t,r,s,l,h,f,w,b,N){t.cancelPendingCommit=null;do Sc();while(Qt!==0);if((Xe&6)!==0)throw Error(a(327));if(r!==null){if(r===t.current)throw Error(a(177));if(f=r.lanes|r.childLanes,f|=Cd,Iu(t,s,f,w,b,N),t===rt&&(ke=rt=null,ze=0),Us=r,Lr=t,Ls=s,kf=f,Vf=h,hx=l,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Mb(Mi,function(){return Ax(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||l){l=ee.T,ee.T=null,h=de.p,de.p=2,w=Xe,Xe|=4;try{Eb(t,r,s)}finally{Xe=w,de.p=h,ee.T=l}}Qt=1,Ex(),bx(),Tx()}}function Ex(){if(Qt===1){Qt=0;var t=Lr,r=Us,s=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||s){s=ee.T,ee.T=null;var l=de.p;de.p=2;var h=Xe;Xe|=4;try{rx(r,t);var f=Zf,w=c0(t.containerInfo),b=f.focusedElem,N=f.selectionRange;if(w!==b&&b&&b.ownerDocument&&u0(b.ownerDocument.documentElement,b)){if(N!==null&&Td(b)){var Y=N.start,te=N.end;if(te===void 0&&(te=Y),"selectionStart"in b)b.selectionStart=Y,b.selectionEnd=Math.min(te,b.value.length);else{var re=b.ownerDocument||document,Q=re&&re.defaultView||window;if(Q.getSelection){var X=Q.getSelection(),Se=b.textContent.length,we=Math.min(N.start,Se),tt=N.end===void 0?we:Math.min(N.end,Se);!X.extend&&we>tt&&(w=tt,tt=we,we=w);var F=l0(b,we),L=l0(b,tt);if(F&&L&&(X.rangeCount!==1||X.anchorNode!==F.node||X.anchorOffset!==F.offset||X.focusNode!==L.node||X.focusOffset!==L.offset)){var H=re.createRange();H.setStart(F.node,F.offset),X.removeAllRanges(),we>tt?(X.addRange(H),X.extend(L.node,L.offset)):(H.setEnd(L.node,L.offset),X.addRange(H))}}}}for(re=[],X=b;X=X.parentNode;)X.nodeType===1&&re.push({element:X,left:X.scrollLeft,top:X.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<re.length;b++){var ne=re[b];ne.element.scrollLeft=ne.left,ne.element.scrollTop=ne.top}}Pc=!!Wf,Zf=Wf=null}finally{Xe=h,de.p=l,ee.T=s}}t.current=r,Qt=2}}function bx(){if(Qt===2){Qt=0;var t=Lr,r=Us,s=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||s){s=ee.T,ee.T=null;var l=de.p;de.p=2;var h=Xe;Xe|=4;try{ex(t,r.alternate,r)}finally{Xe=h,de.p=l,ee.T=s}}Qt=3}}function Tx(){if(Qt===4||Qt===3){Qt=0,Io();var t=Lr,r=Us,s=Ls,l=hx;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Qt=5:(Qt=0,Us=Lr=null,Sx(t,t.pendingLanes));var h=t.pendingLanes;if(h===0&&(Ur=null),No(s),r=r.stateNode,en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(cr,r,void 0,(r.current.flags&128)===128)}catch{}if(l!==null){r=ee.T,h=de.p,de.p=2,ee.T=null;try{for(var f=t.onRecoverableError,w=0;w<l.length;w++){var b=l[w];f(b.value,{componentStack:b.stack})}}finally{ee.T=r,de.p=h}}(Ls&3)!==0&&Sc(),_i(t),h=t.pendingLanes,(s&4194090)!==0&&(h&42)!==0?t===Pf?_l++:(_l=0,Pf=t):_l=0,wl(0)}}function Sx(t,r){(t.pooledCacheLanes&=r)===0&&(r=t.pooledCache,r!=null&&(t.pooledCache=null,el(r)))}function Sc(t){return Ex(),bx(),Tx(),Ax()}function Ax(){if(Qt!==5)return!1;var t=Lr,r=kf;kf=0;var s=No(Ls),l=ee.T,h=de.p;try{de.p=32>s?32:s,ee.T=null,s=Vf,Vf=null;var f=Lr,w=Ls;if(Qt=0,Us=Lr=null,Ls=0,(Xe&6)!==0)throw Error(a(331));var b=Xe;if(Xe|=4,ux(f.current),sx(f,f.current,w,s),Xe=b,wl(0,!1),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(cr,f)}catch{}return!0}finally{de.p=h,ee.T=l,Sx(t,r)}}function Rx(t,r,s){r=Vn(s,r),r=mf(t.stateNode,r,2),t=Cr(t,r,2),t!==null&&(vt(t,2),_i(t))}function nt(t,r,s){if(t.tag===3)Rx(t,t,s);else for(;r!==null;){if(r.tag===3){Rx(r,t,s);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ur===null||!Ur.has(l))){t=Vn(s,t),s=Dy(2),l=Cr(r,s,2),l!==null&&(Ny(s,l,r,t),vt(l,2),_i(l));break}}r=r.return}}function $f(t,r,s){var l=t.pingCache;if(l===null){l=t.pingCache=new Sb;var h=new Set;l.set(r,h)}else h=l.get(r),h===void 0&&(h=new Set,l.set(r,h));h.has(s)||(Df=!0,h.add(s),t=jb.bind(null,t,r,s),r.then(t,t))}function jb(t,r,s){var l=t.pingCache;l!==null&&l.delete(r),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,rt===t&&(ze&s)===s&&(xt===4||xt===3&&(ze&62914560)===ze&&300>pn()-Of?(Xe&2)===0&&zs(t,0):Nf|=s,Ps===ze&&(Ps=0)),_i(t)}function Ix(t,r){r===0&&(r=fr()),t=Es(t,r),t!==null&&(vt(t,r),_i(t))}function Db(t){var r=t.memoizedState,s=0;r!==null&&(s=r.retryLane),Ix(t,s)}function Nb(t,r){var s=0;switch(t.tag){case 13:var l=t.stateNode,h=t.memoizedState;h!==null&&(s=h.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(r),Ix(t,s)}function Mb(t,r){return la(t,r)}var Ac=null,Bs=null,Bf=!1,Rc=!1,Ff=!1,Ka=0;function _i(t){t!==Bs&&t.next===null&&(Bs===null?Ac=Bs=t:Bs=Bs.next=t),Rc=!0,Bf||(Bf=!0,kb())}function wl(t,r){if(!Ff&&Rc){Ff=!0;do for(var s=!1,l=Ac;l!==null;){if(t!==0){var h=l.pendingLanes;if(h===0)var f=0;else{var w=l.suspendedLanes,b=l.pingedLanes;f=(1<<31-un(42|t)+1)-1,f&=h&~(w&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(s=!0,Nx(l,f))}else f=ze,f=Nn(l,l===rt?f:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(f&3)===0||dr(l,f)||(s=!0,Nx(l,f));l=l.next}while(s);Ff=!1}}function Ob(){Cx()}function Cx(){Rc=Bf=!1;var t=0;Ka!==0&&(Fb()&&(t=Ka),Ka=0);for(var r=pn(),s=null,l=Ac;l!==null;){var h=l.next,f=jx(l,r);f===0?(l.next=null,s===null?Ac=h:s.next=h,h===null&&(Bs=s)):(s=l,(t!==0||(f&3)!==0)&&(Rc=!0)),l=h}wl(t)}function jx(t,r){for(var s=t.suspendedLanes,l=t.pingedLanes,h=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var w=31-un(f),b=1<<w,N=h[w];N===-1?((b&s)===0||(b&l)!==0)&&(h[w]=as(b,r)):N<=r&&(t.expiredLanes|=b),f&=~b}if(r=rt,s=ze,s=Nn(t,t===r?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===r&&(We===2||We===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&rs(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||dr(t,s)){if(r=s&-s,r===t.callbackPriority)return r;switch(l!==null&&rs(l),No(s)){case 2:case 8:s=zt;break;case 32:s=Mi;break;case 268435456:s=Co;break;default:s=Mi}return l=Dx.bind(null,t),s=la(s,l),t.callbackPriority=r,t.callbackNode=s,r}return l!==null&&l!==null&&rs(l),t.callbackPriority=2,t.callbackNode=null,2}function Dx(t,r){if(Qt!==0&&Qt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Sc()&&t.callbackNode!==s)return null;var l=ze;return l=Nn(t,t===rt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(fx(t,l,r),jx(t,pn()),t.callbackNode!=null&&t.callbackNode===s?Dx.bind(null,t):null)}function Nx(t,r){if(Sc())return null;fx(t,r,!0)}function kb(){Hb(function(){(Xe&6)!==0?la(Ot,Ob):Cx()})}function Kf(){return Ka===0&&(Ka=jo()),Ka}function Mx(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Xn(""+t)}function Ox(t,r){var s=r.ownerDocument.createElement("input");return s.name=r.name,s.value=r.value,t.id&&s.setAttribute("form",t.id),r.parentNode.insertBefore(s,r),t=new FormData(t),s.parentNode.removeChild(s),t}function Vb(t,r,s,l,h){if(r==="submit"&&s&&s.stateNode===h){var f=Mx((h[Gt]||null).action),w=l.submitter;w&&(r=(r=w[Gt]||null)?Mx(r.formAction):w.getAttribute("formAction"),r!==null&&(f=r,w=null));var b=new ba("action","action",null,l,h);t.push({event:b,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ka!==0){var N=w?Ox(h,w):new FormData(h);cf(s,{pending:!0,data:N,method:h.method,action:f},null,N)}}else typeof f=="function"&&(b.preventDefault(),N=w?Ox(h,w):new FormData(h),cf(s,{pending:!0,data:N,method:h.method,action:f},f,N))},currentTarget:h}]})}}for(var Hf=0;Hf<Id.length;Hf++){var qf=Id[Hf],Pb=qf.toLowerCase(),Ub=qf[0].toUpperCase()+qf.slice(1);ei(Pb,"on"+Ub)}ei(f0,"onAnimationEnd"),ei(p0,"onAnimationIteration"),ei(m0,"onAnimationStart"),ei("dblclick","onDoubleClick"),ei("focusin","onFocus"),ei("focusout","onBlur"),ei(tb,"onTransitionRun"),ei(nb,"onTransitionStart"),ei(ib,"onTransitionCancel"),ei(g0,"onTransitionEnd"),di("onMouseEnter",["mouseout","mouseover"]),di("onMouseLeave",["mouseout","mouseover"]),di("onPointerEnter",["pointerout","pointerover"]),di("onPointerLeave",["pointerout","pointerover"]),hi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),hi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),hi("onBeforeInput",["compositionend","keypress","textInput","paste"]),hi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),hi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),hi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var El="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(El));function kx(t,r){r=(r&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],h=l.event;l=l.listeners;e:{var f=void 0;if(r)for(var w=l.length-1;0<=w;w--){var b=l[w],N=b.instance,Y=b.currentTarget;if(b=b.listener,N!==f&&h.isPropagationStopped())break e;f=b,h.currentTarget=Y;try{f(h)}catch(te){pc(te)}h.currentTarget=null,f=N}else for(w=0;w<l.length;w++){if(b=l[w],N=b.instance,Y=b.currentTarget,b=b.listener,N!==f&&h.isPropagationStopped())break e;f=b,h.currentTarget=Y;try{f(h)}catch(te){pc(te)}h.currentTarget=null,f=N}}}}function Ve(t,r){var s=r[ca];s===void 0&&(s=r[ca]=new Set);var l=t+"__bubble";s.has(l)||(Vx(r,t,2,!1),s.add(l))}function Gf(t,r,s){var l=0;r&&(l|=4),Vx(s,t,l,r)}var Ic="_reactListening"+Math.random().toString(36).slice(2);function Yf(t){if(!t[Ic]){t[Ic]=!0,Cu.forEach(function(s){s!=="selectionchange"&&(Lb.has(s)||Gf(s,!1,t),Gf(s,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[Ic]||(r[Ic]=!0,Gf("selectionchange",!1,r))}}function Vx(t,r,s,l){switch(s1(r)){case 2:var h=dT;break;case 8:h=fT;break;default:h=lp}s=h.bind(null,r,s,t),h=void 0,!Li||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),l?h!==void 0?t.addEventListener(r,s,{capture:!0,passive:h}):t.addEventListener(r,s,!0):h!==void 0?t.addEventListener(r,s,{passive:h}):t.addEventListener(r,s,!1)}function Qf(t,r,s,l,h){var f=l;if((r&1)===0&&(r&2)===0&&l!==null)e:for(;;){if(l===null)return;var w=l.tag;if(w===3||w===4){var b=l.stateNode.containerInfo;if(b===h)break;if(w===4)for(w=l.return;w!==null;){var N=w.tag;if((N===3||N===4)&&w.stateNode.containerInfo===h)return;w=w.return}for(;b!==null;){if(w=ui(b),w===null)return;if(N=w.tag,N===5||N===6||N===26||N===27){l=f=w;continue e}b=b.parentNode}}l=l.return}_a(function(){var Y=f,te=Lo(s),re=[];e:{var Q=y0.get(t);if(Q!==void 0){var X=ba,Se=t;switch(t){case"keypress":if(wa(s)===0)break e;case"keydown":case"keyup":X=xs;break;case"focusin":Se="focus",X=ms;break;case"focusout":Se="blur",X=ms;break;case"beforeblur":case"afterblur":X=ms;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":X=Ia;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":X=Vu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":X=Sr;break;case f0:case p0:case m0:X=$o;break;case g0:X=x;break;case"scroll":case"scrollend":X=Sa;break;case"wheel":X=R;break;case"copy":case"cut":case"paste":X=Uu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":X=Ko;break;case"toggle":case"beforetoggle":X=W}var we=(r&4)!==0,tt=!we&&(t==="scroll"||t==="scrollend"),F=we?Q!==null?Q+"Capture":null:Q;we=[];for(var L=Y,H;L!==null;){var ne=L;if(H=ne.stateNode,ne=ne.tag,ne!==5&&ne!==26&&ne!==27||H===null||F===null||(ne=br(L,F),ne!=null&&we.push(bl(L,ne,H))),tt)break;L=L.return}0<we.length&&(Q=new X(Q,Se,null,s,te),re.push({event:Q,listeners:we}))}}if((r&7)===0){e:{if(Q=t==="mouseover"||t==="pointerover",X=t==="mouseout"||t==="pointerout",Q&&s!==Uo&&(Se=s.relatedTarget||s.fromElement)&&(ui(Se)||Se[ki]))break e;if((X||Q)&&(Q=te.window===te?te:(Q=te.ownerDocument)?Q.defaultView||Q.parentWindow:window,X?(Se=s.relatedTarget||s.toElement,X=Y,Se=Se?ui(Se):null,Se!==null&&(tt=u(Se),we=Se.tag,Se!==tt||we!==5&&we!==27&&we!==6)&&(Se=null)):(X=null,Se=Y),X!==Se)){if(we=Ia,ne="onMouseLeave",F="onMouseEnter",L="mouse",(t==="pointerout"||t==="pointerover")&&(we=Ko,ne="onPointerLeave",F="onPointerEnter",L="pointer"),tt=X==null?Q:yr(X),H=Se==null?Q:yr(Se),Q=new we(ne,L+"leave",X,s,te),Q.target=tt,Q.relatedTarget=H,ne=null,ui(te)===Y&&(we=new we(F,L+"enter",Se,s,te),we.target=H,we.relatedTarget=tt,ne=we),tt=ne,X&&Se)t:{for(we=X,F=Se,L=0,H=we;H;H=Fs(H))L++;for(H=0,ne=F;ne;ne=Fs(ne))H++;for(;0<L-H;)we=Fs(we),L--;for(;0<H-L;)F=Fs(F),H--;for(;L--;){if(we===F||F!==null&&we===F.alternate)break t;we=Fs(we),F=Fs(F)}we=null}else we=null;X!==null&&Px(re,Q,X,we,!1),Se!==null&&tt!==null&&Px(re,tt,Se,we,!0)}}e:{if(Q=Y?yr(Y):window,X=Q.nodeName&&Q.nodeName.toLowerCase(),X==="select"||X==="input"&&Q.type==="file")var me=n0;else if(e0(Q))if(i0)me=ZE;else{me=XE;var Oe=QE}else X=Q.nodeName,!X||X.toLowerCase()!=="input"||Q.type!=="checkbox"&&Q.type!=="radio"?Y&&ds(Y.elementType)&&(me=n0):me=WE;if(me&&(me=me(t,Y))){t0(re,me,s,te);break e}Oe&&Oe(t,Q,Y),t==="focusout"&&Y&&Q.type==="number"&&Y.memoizedProps.value!=null&&ko(Q,"number",Q.value)}switch(Oe=Y?yr(Y):window,t){case"focusin":(e0(Oe)||Oe.contentEditable==="true")&&(vs=Oe,Sd=Y,Qo=null);break;case"focusout":Qo=Sd=vs=null;break;case"mousedown":Ad=!0;break;case"contextmenu":case"mouseup":case"dragend":Ad=!1,h0(re,s,te);break;case"selectionchange":if(eb)break;case"keydown":case"keyup":h0(re,s,te)}var xe;if(Re)e:{switch(t){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else Jn?Wn(t,s)&&(Ee="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Ee="onCompositionStart");Ee&&(Et&&s.locale!=="ko"&&(Jn||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Jn&&(xe=ku()):(kn=te,it="value"in kn?kn.value:kn.textContent,Jn=!0)),Oe=Cc(Y,Ee),0<Oe.length&&(Ee=new Fo(Ee,t,null,s,te),re.push({event:Ee,listeners:Oe}),xe?Ee.data=xe:(xe=Zn(s),xe!==null&&(Ee.data=xe)))),(xe=Qe?Ho(t,s):qE(t,s))&&(Ee=Cc(Y,"onBeforeInput"),0<Ee.length&&(Oe=new Fo("onBeforeInput","beforeinput",null,s,te),re.push({event:Oe,listeners:Ee}),Oe.data=xe)),Vb(re,t,Y,s,te)}kx(re,r)})}function bl(t,r,s){return{instance:t,listener:r,currentTarget:s}}function Cc(t,r){for(var s=r+"Capture",l=[];t!==null;){var h=t,f=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||f===null||(h=br(t,s),h!=null&&l.unshift(bl(t,h,f)),h=br(t,r),h!=null&&l.push(bl(t,h,f))),t.tag===3)return l;t=t.return}return[]}function Fs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Px(t,r,s,l,h){for(var f=r._reactName,w=[];s!==null&&s!==l;){var b=s,N=b.alternate,Y=b.stateNode;if(b=b.tag,N!==null&&N===l)break;b!==5&&b!==26&&b!==27||Y===null||(N=Y,h?(Y=br(s,f),Y!=null&&w.unshift(bl(s,Y,N))):h||(Y=br(s,f),Y!=null&&w.push(bl(s,Y,N)))),s=s.return}w.length!==0&&t.push({event:r,listeners:w})}var zb=/\r\n?/g,$b=/\u0000|\uFFFD/g;function Ux(t){return(typeof t=="string"?t:""+t).replace(zb,`
`).replace($b,"")}function Lx(t,r){return r=Ux(r),Ux(t)===r}function jc(){}function et(t,r,s,l,h,f){switch(s){case"children":typeof l=="string"?r==="body"||r==="textarea"&&l===""||On(t,l):(typeof l=="number"||typeof l=="bigint")&&r!=="body"&&On(t,""+l);break;case"className":ma(t,"class",l);break;case"tabIndex":ma(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ma(t,s,l);break;case"style":Po(t,l,f);break;case"data":if(r!=="object"){ma(t,"data",l);break}case"src":case"href":if(l===""&&(r!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Xn(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(s==="formAction"?(r!=="input"&&et(t,r,"name",h.name,h,null),et(t,r,"formEncType",h.formEncType,h,null),et(t,r,"formMethod",h.formMethod,h,null),et(t,r,"formTarget",h.formTarget,h,null)):(et(t,r,"encType",h.encType,h,null),et(t,r,"method",h.method,h,null),et(t,r,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Xn(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=jc);break;case"onScroll":l!=null&&Ve("scroll",t);break;case"onScrollEnd":l!=null&&Ve("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Xn(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":Ve("beforetoggle",t),Ve("toggle",t),pa(t,"popover",l);break;case"xlinkActuate":Mn(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Mn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Mn(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Mn(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Mn(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Mn(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Mn(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Mn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Mn(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":pa(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Nu.get(s)||s,pa(t,s,l))}}function Xf(t,r,s,l,h,f){switch(s){case"style":Po(t,l,f);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof l=="string"?On(t,l):(typeof l=="number"||typeof l=="bigint")&&On(t,""+l);break;case"onScroll":l!=null&&Ve("scroll",t);break;case"onScrollEnd":l!=null&&Ve("scrollend",t);break;case"onClick":l!=null&&(t.onclick=jc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!da.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),r=s.slice(2,h?s.length-7:void 0),f=t[Gt]||null,f=f!=null?f[s]:null,typeof f=="function"&&t.removeEventListener(r,f,h),typeof l=="function")){typeof f!="function"&&f!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(r,l,h);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):pa(t,s,l)}}}function Xt(t,r,s){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ve("error",t),Ve("load",t);var l=!1,h=!1,f;for(f in s)if(s.hasOwnProperty(f)){var w=s[f];if(w!=null)switch(f){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:et(t,r,f,w,s,null)}}h&&et(t,r,"srcSet",s.srcSet,s,null),l&&et(t,r,"src",s.src,s,null);return;case"input":Ve("invalid",t);var b=f=w=h=null,N=null,Y=null;for(l in s)if(s.hasOwnProperty(l)){var te=s[l];if(te!=null)switch(l){case"name":h=te;break;case"type":w=te;break;case"checked":N=te;break;case"defaultChecked":Y=te;break;case"value":f=te;break;case"defaultValue":b=te;break;case"children":case"dangerouslySetInnerHTML":if(te!=null)throw Error(a(137,r));break;default:et(t,r,l,te,s,null)}}Oo(t,f,b,N,Y,w,h,!1),_r(t);return;case"select":Ve("invalid",t),l=w=f=null;for(h in s)if(s.hasOwnProperty(h)&&(b=s[h],b!=null))switch(h){case"value":f=b;break;case"defaultValue":w=b;break;case"multiple":l=b;default:et(t,r,h,b,s,null)}r=f,s=w,t.multiple=!!l,r!=null?wr(t,!!l,r,!1):s!=null&&wr(t,!!l,s,!0);return;case"textarea":Ve("invalid",t),f=h=l=null;for(w in s)if(s.hasOwnProperty(w)&&(b=s[w],b!=null))switch(w){case"value":l=b;break;case"defaultValue":h=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(a(91));break;default:et(t,r,w,b,s,null)}Du(t,l,h,f),_r(t);return;case"option":for(N in s)if(s.hasOwnProperty(N)&&(l=s[N],l!=null))switch(N){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:et(t,r,N,l,s,null)}return;case"dialog":Ve("beforetoggle",t),Ve("toggle",t),Ve("cancel",t),Ve("close",t);break;case"iframe":case"object":Ve("load",t);break;case"video":case"audio":for(l=0;l<El.length;l++)Ve(El[l],t);break;case"image":Ve("error",t),Ve("load",t);break;case"details":Ve("toggle",t);break;case"embed":case"source":case"link":Ve("error",t),Ve("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Y in s)if(s.hasOwnProperty(Y)&&(l=s[Y],l!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:et(t,r,Y,l,s,null)}return;default:if(ds(r)){for(te in s)s.hasOwnProperty(te)&&(l=s[te],l!==void 0&&Xf(t,r,te,l,s,void 0));return}}for(b in s)s.hasOwnProperty(b)&&(l=s[b],l!=null&&et(t,r,b,l,s,null))}function Bb(t,r,s,l){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,f=null,w=null,b=null,N=null,Y=null,te=null;for(X in s){var re=s[X];if(s.hasOwnProperty(X)&&re!=null)switch(X){case"checked":break;case"value":break;case"defaultValue":N=re;default:l.hasOwnProperty(X)||et(t,r,X,null,l,re)}}for(var Q in l){var X=l[Q];if(re=s[Q],l.hasOwnProperty(Q)&&(X!=null||re!=null))switch(Q){case"type":f=X;break;case"name":h=X;break;case"checked":Y=X;break;case"defaultChecked":te=X;break;case"value":w=X;break;case"defaultValue":b=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(a(137,r));break;default:X!==re&&et(t,r,Q,X,l,re)}}Mo(t,w,b,N,Y,te,f,h);return;case"select":X=w=b=Q=null;for(f in s)if(N=s[f],s.hasOwnProperty(f)&&N!=null)switch(f){case"value":break;case"multiple":X=N;default:l.hasOwnProperty(f)||et(t,r,f,null,l,N)}for(h in l)if(f=l[h],N=s[h],l.hasOwnProperty(h)&&(f!=null||N!=null))switch(h){case"value":Q=f;break;case"defaultValue":b=f;break;case"multiple":w=f;default:f!==N&&et(t,r,h,f,l,N)}r=b,s=w,l=X,Q!=null?wr(t,!!s,Q,!1):!!l!=!!s&&(r!=null?wr(t,!!s,r,!0):wr(t,!!s,s?[]:"",!1));return;case"textarea":X=Q=null;for(b in s)if(h=s[b],s.hasOwnProperty(b)&&h!=null&&!l.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:et(t,r,b,null,l,h)}for(w in l)if(h=l[w],f=s[w],l.hasOwnProperty(w)&&(h!=null||f!=null))switch(w){case"value":Q=h;break;case"defaultValue":X=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==f&&et(t,r,w,h,l,f)}ju(t,Q,X);return;case"option":for(var Se in s)if(Q=s[Se],s.hasOwnProperty(Se)&&Q!=null&&!l.hasOwnProperty(Se))switch(Se){case"selected":t.selected=!1;break;default:et(t,r,Se,null,l,Q)}for(N in l)if(Q=l[N],X=s[N],l.hasOwnProperty(N)&&Q!==X&&(Q!=null||X!=null))switch(N){case"selected":t.selected=Q&&typeof Q!="function"&&typeof Q!="symbol";break;default:et(t,r,N,Q,l,X)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var we in s)Q=s[we],s.hasOwnProperty(we)&&Q!=null&&!l.hasOwnProperty(we)&&et(t,r,we,null,l,Q);for(Y in l)if(Q=l[Y],X=s[Y],l.hasOwnProperty(Y)&&Q!==X&&(Q!=null||X!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(a(137,r));break;default:et(t,r,Y,Q,l,X)}return;default:if(ds(r)){for(var tt in s)Q=s[tt],s.hasOwnProperty(tt)&&Q!==void 0&&!l.hasOwnProperty(tt)&&Xf(t,r,tt,void 0,l,Q);for(te in l)Q=l[te],X=s[te],!l.hasOwnProperty(te)||Q===X||Q===void 0&&X===void 0||Xf(t,r,te,Q,l,X);return}}for(var F in s)Q=s[F],s.hasOwnProperty(F)&&Q!=null&&!l.hasOwnProperty(F)&&et(t,r,F,null,l,Q);for(re in l)Q=l[re],X=s[re],!l.hasOwnProperty(re)||Q===X||Q==null&&X==null||et(t,r,re,Q,l,X)}var Wf=null,Zf=null;function Dc(t){return t.nodeType===9?t:t.ownerDocument}function zx(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $x(t,r){if(t===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&r==="foreignObject"?0:t}function Jf(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var ep=null;function Fb(){var t=window.event;return t&&t.type==="popstate"?t===ep?!1:(ep=t,!0):(ep=null,!1)}var Bx=typeof setTimeout=="function"?setTimeout:void 0,Kb=typeof clearTimeout=="function"?clearTimeout:void 0,Fx=typeof Promise=="function"?Promise:void 0,Hb=typeof queueMicrotask=="function"?queueMicrotask:typeof Fx<"u"?function(t){return Fx.resolve(null).then(t).catch(qb)}:Bx;function qb(t){setTimeout(function(){throw t})}function $r(t){return t==="head"}function Kx(t,r){var s=r,l=0,h=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"){if(0<l&&8>l){s=l;var w=t.ownerDocument;if(s&1&&Tl(w.documentElement),s&2&&Tl(w.body),s&4)for(s=w.head,Tl(s),w=s.firstChild;w;){var b=w.nextSibling,N=w.nodeName;w[gr]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&w.rel.toLowerCase()==="stylesheet"||s.removeChild(w),w=b}}if(h===0){t.removeChild(f),Nl(r);return}h--}else s==="$"||s==="$?"||s==="$!"?h++:l=s.charCodeAt(0)-48;else l=0;s=f}while(s);Nl(r)}function tp(t){var r=t.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var s=r;switch(r=r.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":tp(s),os(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function Gb(t,r,s,l){for(;t.nodeType===1;){var h=s;if(t.nodeName.toLowerCase()!==r.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[gr])switch(r){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==h.rel||t.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(r==="input"&&t.type==="hidden"){var f=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ni(t.nextSibling),t===null)break}return null}function Yb(t,r,s){if(r==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=ni(t.nextSibling),t===null))return null;return t}function np(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Qb(t,r){var s=t.ownerDocument;if(t.data!=="$?"||s.readyState==="complete")r();else{var l=function(){r(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function ni(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return t}var ip=null;function Hx(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(r===0)return t;r--}else s==="/$"&&r++}t=t.previousSibling}return null}function qx(t,r,s){switch(r=Dc(s),t){case"html":if(t=r.documentElement,!t)throw Error(a(452));return t;case"head":if(t=r.head,!t)throw Error(a(453));return t;case"body":if(t=r.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function Tl(t){for(var r=t.attributes;r.length;)t.removeAttributeNode(r[0]);os(t)}var Bn=new Map,Gx=new Set;function Nc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ji=de.d;de.d={f:Xb,r:Wb,D:Zb,C:Jb,L:eT,m:tT,X:iT,S:nT,M:rT};function Xb(){var t=Ji.f(),r=bc();return t||r}function Wb(t){var r=ci(t);r!==null&&r.tag===5&&r.type==="form"?fy(r):Ji.r(t)}var Ks=typeof document>"u"?null:document;function Yx(t,r,s){var l=Ks;if(l&&typeof r=="string"&&r){var h=$t(r);h='link[rel="'+t+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),Gx.has(h)||(Gx.add(h),t={rel:t,crossOrigin:s,href:r},l.querySelector(h)===null&&(r=l.createElement("link"),Xt(r,"link",t),wt(r),l.head.appendChild(r)))}}function Zb(t){Ji.D(t),Yx("dns-prefetch",t,null)}function Jb(t,r){Ji.C(t,r),Yx("preconnect",t,r)}function eT(t,r,s){Ji.L(t,r,s);var l=Ks;if(l&&t&&r){var h='link[rel="preload"][as="'+$t(r)+'"]';r==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+$t(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+$t(s.imageSizes)+'"]')):h+='[href="'+$t(t)+'"]';var f=h;switch(r){case"style":f=Hs(t);break;case"script":f=qs(t)}Bn.has(f)||(t=v({rel:"preload",href:r==="image"&&s&&s.imageSrcSet?void 0:t,as:r},s),Bn.set(f,t),l.querySelector(h)!==null||r==="style"&&l.querySelector(Sl(f))||r==="script"&&l.querySelector(Al(f))||(r=l.createElement("link"),Xt(r,"link",t),wt(r),l.head.appendChild(r)))}}function tT(t,r){Ji.m(t,r);var s=Ks;if(s&&t){var l=r&&typeof r.as=="string"?r.as:"script",h='link[rel="modulepreload"][as="'+$t(l)+'"][href="'+$t(t)+'"]',f=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=qs(t)}if(!Bn.has(f)&&(t=v({rel:"modulepreload",href:t},r),Bn.set(f,t),s.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Al(f)))return}l=s.createElement("link"),Xt(l,"link",t),wt(l),s.head.appendChild(l)}}}function nT(t,r,s){Ji.S(t,r,s);var l=Ks;if(l&&t){var h=xr(l).hoistableStyles,f=Hs(t);r=r||"default";var w=h.get(f);if(!w){var b={loading:0,preload:null};if(w=l.querySelector(Sl(f)))b.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":r},s),(s=Bn.get(f))&&rp(t,s);var N=w=l.createElement("link");wt(N),Xt(N,"link",t),N._p=new Promise(function(Y,te){N.onload=Y,N.onerror=te}),N.addEventListener("load",function(){b.loading|=1}),N.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Mc(w,r,l)}w={type:"stylesheet",instance:w,count:1,state:b},h.set(f,w)}}}function iT(t,r){Ji.X(t,r);var s=Ks;if(s&&t){var l=xr(s).hoistableScripts,h=qs(t),f=l.get(h);f||(f=s.querySelector(Al(h)),f||(t=v({src:t,async:!0},r),(r=Bn.get(h))&&ap(t,r),f=s.createElement("script"),wt(f),Xt(f,"link",t),s.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(h,f))}}function rT(t,r){Ji.M(t,r);var s=Ks;if(s&&t){var l=xr(s).hoistableScripts,h=qs(t),f=l.get(h);f||(f=s.querySelector(Al(h)),f||(t=v({src:t,async:!0,type:"module"},r),(r=Bn.get(h))&&ap(t,r),f=s.createElement("script"),wt(f),Xt(f,"link",t),s.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(h,f))}}function Qx(t,r,s,l){var h=(h=_e.current)?Nc(h):null;if(!h)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(r=Hs(s.href),s=xr(h).hoistableStyles,l=s.get(r),l||(l={type:"style",instance:null,count:0,state:null},s.set(r,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Hs(s.href);var f=xr(h).hoistableStyles,w=f.get(t);if(w||(h=h.ownerDocument||h,w={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,w),(f=h.querySelector(Sl(t)))&&!f._p&&(w.instance=f,w.state.loading=5),Bn.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Bn.set(t,s),f||aT(h,t,s,w.state))),r&&l===null)throw Error(a(528,""));return w}if(r&&l!==null)throw Error(a(529,""));return null;case"script":return r=s.async,s=s.src,typeof s=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=qs(s),s=xr(h).hoistableScripts,l=s.get(r),l||(l={type:"script",instance:null,count:0,state:null},s.set(r,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function Hs(t){return'href="'+$t(t)+'"'}function Sl(t){return'link[rel="stylesheet"]['+t+"]"}function Xx(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function aT(t,r,s,l){t.querySelector('link[rel="preload"][as="style"]['+r+"]")?l.loading=1:(r=t.createElement("link"),l.preload=r,r.addEventListener("load",function(){return l.loading|=1}),r.addEventListener("error",function(){return l.loading|=2}),Xt(r,"link",s),wt(r),t.head.appendChild(r))}function qs(t){return'[src="'+$t(t)+'"]'}function Al(t){return"script[async]"+t}function Wx(t,r,s){if(r.count++,r.instance===null)switch(r.type){case"style":var l=t.querySelector('style[data-href~="'+$t(s.href)+'"]');if(l)return r.instance=l,wt(l),l;var h=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),wt(l),Xt(l,"style",h),Mc(l,s.precedence,t),r.instance=l;case"stylesheet":h=Hs(s.href);var f=t.querySelector(Sl(h));if(f)return r.state.loading|=4,r.instance=f,wt(f),f;l=Xx(s),(h=Bn.get(h))&&rp(l,h),f=(t.ownerDocument||t).createElement("link"),wt(f);var w=f;return w._p=new Promise(function(b,N){w.onload=b,w.onerror=N}),Xt(f,"link",l),r.state.loading|=4,Mc(f,s.precedence,t),r.instance=f;case"script":return f=qs(s.src),(h=t.querySelector(Al(f)))?(r.instance=h,wt(h),h):(l=s,(h=Bn.get(f))&&(l=v({},s),ap(l,h)),t=t.ownerDocument||t,h=t.createElement("script"),wt(h),Xt(h,"link",l),t.head.appendChild(h),r.instance=h);case"void":return null;default:throw Error(a(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(l=r.instance,r.state.loading|=4,Mc(l,s.precedence,t));return r.instance}function Mc(t,r,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,f=h,w=0;w<l.length;w++){var b=l[w];if(b.dataset.precedence===r)f=b;else if(f!==h)break}f?f.parentNode.insertBefore(t,f.nextSibling):(r=s.nodeType===9?s.head:s,r.insertBefore(t,r.firstChild))}function rp(t,r){t.crossOrigin==null&&(t.crossOrigin=r.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=r.referrerPolicy),t.title==null&&(t.title=r.title)}function ap(t,r){t.crossOrigin==null&&(t.crossOrigin=r.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=r.referrerPolicy),t.integrity==null&&(t.integrity=r.integrity)}var Oc=null;function Zx(t,r,s){if(Oc===null){var l=new Map,h=Oc=new Map;h.set(s,l)}else h=Oc,l=h.get(s),l||(l=new Map,h.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),h=0;h<s.length;h++){var f=s[h];if(!(f[gr]||f[_t]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var w=f.getAttribute(r)||"";w=t+w;var b=l.get(w);b?b.push(f):l.set(w,[f])}}return l}function Jx(t,r,s){t=t.ownerDocument||t,t.head.insertBefore(s,r==="title"?t.querySelector("head > title"):null)}function sT(t,r,s){if(s===1||r.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return t=r.disabled,typeof r.precedence=="string"&&t==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function e1(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Rl=null;function oT(){}function lT(t,r,s){if(Rl===null)throw Error(a(475));var l=Rl;if(r.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=Hs(s.href),f=t.querySelector(Sl(h));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=kc.bind(l),t.then(l,l)),r.state.loading|=4,r.instance=f,wt(f);return}f=t.ownerDocument||t,s=Xx(s),(h=Bn.get(h))&&rp(s,h),f=f.createElement("link"),wt(f);var w=f;w._p=new Promise(function(b,N){w.onload=b,w.onerror=N}),Xt(f,"link",s),r.instance=f}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(r,t),(t=r.state.preload)&&(r.state.loading&3)===0&&(l.count++,r=kc.bind(l),t.addEventListener("load",r),t.addEventListener("error",r))}}function uT(){if(Rl===null)throw Error(a(475));var t=Rl;return t.stylesheets&&t.count===0&&sp(t,t.stylesheets),0<t.count?function(r){var s=setTimeout(function(){if(t.stylesheets&&sp(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(s)}}:null}function kc(){if(this.count--,this.count===0){if(this.stylesheets)sp(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Vc=null;function sp(t,r){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Vc=new Map,r.forEach(cT,t),Vc=null,kc.call(t))}function cT(t,r){if(!(r.state.loading&4)){var s=Vc.get(t);if(s)var l=s.get(null);else{s=new Map,Vc.set(t,s);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<h.length;f++){var w=h[f];(w.nodeName==="LINK"||w.getAttribute("media")!=="not all")&&(s.set(w.dataset.precedence,w),l=w)}l&&s.set(null,l)}h=r.instance,w=h.getAttribute("data-precedence"),f=s.get(w)||l,f===l&&s.set(null,h),s.set(w,h),this.count++,l=kc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),f?f.parentNode.insertBefore(h,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),r.state.loading|=4}}var Il={$$typeof:Z,Provider:null,Consumer:null,_currentValue:ye,_currentValue2:ye,_threadCount:0};function hT(t,r,s,l,h,f,w,b){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ss(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ss(0),this.hiddenUpdates=ss(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=f,this.onRecoverableError=w,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function t1(t,r,s,l,h,f,w,b,N,Y,te,re){return t=new hT(t,r,s,w,b,N,Y,re),r=1,f===!0&&(r|=24),f=bn(3,null,null,r),t.current=f,f.stateNode=t,r=zd(),r.refCount++,t.pooledCache=r,r.refCount++,f.memoizedState={element:l,isDehydrated:s,cache:r},Kd(f),t}function n1(t){return t?(t=bs,t):bs}function i1(t,r,s,l,h,f){h=n1(h),l.context===null?l.context=h:l.pendingContext=h,l=Ir(r),l.payload={element:s},f=f===void 0?null:f,f!==null&&(l.callback=f),s=Cr(t,l,r),s!==null&&(In(s,t,r),rl(s,t,r))}function r1(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<r?s:r}}function op(t,r){r1(t,r),(t=t.alternate)&&r1(t,r)}function a1(t){if(t.tag===13){var r=Es(t,67108864);r!==null&&In(r,t,67108864),op(t,67108864)}}var Pc=!0;function dT(t,r,s,l){var h=ee.T;ee.T=null;var f=de.p;try{de.p=2,lp(t,r,s,l)}finally{de.p=f,ee.T=h}}function fT(t,r,s,l){var h=ee.T;ee.T=null;var f=de.p;try{de.p=8,lp(t,r,s,l)}finally{de.p=f,ee.T=h}}function lp(t,r,s,l){if(Pc){var h=up(l);if(h===null)Qf(t,r,l,Uc,s),o1(t,l);else if(mT(h,t,r,s,l))l.stopPropagation();else if(o1(t,l),r&4&&-1<pT.indexOf(t)){for(;h!==null;){var f=ci(h);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var w=Gn(f.pendingLanes);if(w!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;w;){var N=1<<31-un(w);b.entanglements[1]|=N,w&=~N}_i(f),(Xe&6)===0&&(wc=pn()+500,wl(0))}}break;case 13:b=Es(f,2),b!==null&&In(b,f,2),bc(),op(f,2)}if(f=up(l),f===null&&Qf(t,r,l,Uc,s),f===h)break;h=f}h!==null&&l.stopPropagation()}else Qf(t,r,l,null,s)}}function up(t){return t=Lo(t),cp(t)}var Uc=null;function cp(t){if(Uc=null,t=ui(t),t!==null){var r=u(t);if(r===null)t=null;else{var s=r.tag;if(s===13){if(t=d(r),t!==null)return t;t=null}else if(s===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null)}}return Uc=t,null}function s1(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Su()){case Ot:return 2;case zt:return 8;case Mi:case pd:return 32;case Co:return 268435456;default:return 32}default:return 32}}var hp=!1,Br=null,Fr=null,Kr=null,Cl=new Map,jl=new Map,Hr=[],pT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function o1(t,r){switch(t){case"focusin":case"focusout":Br=null;break;case"dragenter":case"dragleave":Fr=null;break;case"mouseover":case"mouseout":Kr=null;break;case"pointerover":case"pointerout":Cl.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":jl.delete(r.pointerId)}}function Dl(t,r,s,l,h,f){return t===null||t.nativeEvent!==f?(t={blockedOn:r,domEventName:s,eventSystemFlags:l,nativeEvent:f,targetContainers:[h]},r!==null&&(r=ci(r),r!==null&&a1(r)),t):(t.eventSystemFlags|=l,r=t.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),t)}function mT(t,r,s,l,h){switch(r){case"focusin":return Br=Dl(Br,t,r,s,l,h),!0;case"dragenter":return Fr=Dl(Fr,t,r,s,l,h),!0;case"mouseover":return Kr=Dl(Kr,t,r,s,l,h),!0;case"pointerover":var f=h.pointerId;return Cl.set(f,Dl(Cl.get(f)||null,t,r,s,l,h)),!0;case"gotpointercapture":return f=h.pointerId,jl.set(f,Dl(jl.get(f)||null,t,r,s,l,h)),!0}return!1}function l1(t){var r=ui(t.target);if(r!==null){var s=u(r);if(s!==null){if(r=s.tag,r===13){if(r=d(s),r!==null){t.blockedOn=r,yd(t.priority,function(){if(s.tag===13){var l=Rn();l=Do(l);var h=Es(s,l);h!==null&&In(h,s,l),op(s,l)}});return}}else if(r===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Lc(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var s=up(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Uo=l,s.target.dispatchEvent(l),Uo=null}else return r=ci(s),r!==null&&a1(r),t.blockedOn=s,!1;r.shift()}return!0}function u1(t,r,s){Lc(t)&&s.delete(r)}function gT(){hp=!1,Br!==null&&Lc(Br)&&(Br=null),Fr!==null&&Lc(Fr)&&(Fr=null),Kr!==null&&Lc(Kr)&&(Kr=null),Cl.forEach(u1),jl.forEach(u1)}function zc(t,r){t.blockedOn===r&&(t.blockedOn=null,hp||(hp=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,gT)))}var $c=null;function c1(t){$c!==t&&($c=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){$c===t&&($c=null);for(var r=0;r<t.length;r+=3){var s=t[r],l=t[r+1],h=t[r+2];if(typeof l!="function"){if(cp(l||s)===null)continue;break}var f=ci(s);f!==null&&(t.splice(r,3),r-=3,cf(f,{pending:!0,data:h,method:s.method,action:l},l,h))}}))}function Nl(t){function r(N){return zc(N,t)}Br!==null&&zc(Br,t),Fr!==null&&zc(Fr,t),Kr!==null&&zc(Kr,t),Cl.forEach(r),jl.forEach(r);for(var s=0;s<Hr.length;s++){var l=Hr[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Hr.length&&(s=Hr[0],s.blockedOn===null);)l1(s),s.blockedOn===null&&Hr.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var h=s[l],f=s[l+1],w=h[Gt]||null;if(typeof f=="function")w||c1(s);else if(w){var b=null;if(f&&f.hasAttribute("formAction")){if(h=f,w=f[Gt]||null)b=w.formAction;else if(cp(h)!==null)continue}else b=w.action;typeof b=="function"?s[l+1]=b:(s.splice(l,3),l-=3),c1(s)}}}function dp(t){this._internalRoot=t}Bc.prototype.render=dp.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(a(409));var s=r.current,l=Rn();i1(s,l,t,r,null,null)},Bc.prototype.unmount=dp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;i1(t.current,2,null,t,null,null),bc(),r[ki]=null}};function Bc(t){this._internalRoot=t}Bc.prototype.unstable_scheduleHydration=function(t){if(t){var r=Oi();t={blockedOn:null,target:t,priority:r};for(var s=0;s<Hr.length&&r!==0&&r<Hr[s].priority;s++);Hr.splice(s,0,t),s===0&&l1(t)}};var h1=e.version;if(h1!=="19.1.1")throw Error(a(527,h1,"19.1.1"));de.findDOMNode=function(t){var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=m(r),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var yT={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:ee,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fc.isDisabled&&Fc.supportsFiber)try{cr=Fc.inject(yT),en=Fc}catch{}}return Pl.createRoot=function(t,r){if(!o(t))throw Error(a(299));var s=!1,l="",h=Ry,f=Iy,w=Cy,b=null;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(f=r.onCaughtError),r.onRecoverableError!==void 0&&(w=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(b=r.unstable_transitionCallbacks)),r=t1(t,1,!1,null,null,s,l,h,f,w,b,null),t[ki]=r.current,Yf(t),new dp(r)},Pl.hydrateRoot=function(t,r,s){if(!o(t))throw Error(a(299));var l=!1,h="",f=Ry,w=Iy,b=Cy,N=null,Y=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(w=s.onCaughtError),s.onRecoverableError!==void 0&&(b=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(N=s.unstable_transitionCallbacks),s.formState!==void 0&&(Y=s.formState)),r=t1(t,1,!0,r,s??null,l,h,f,w,b,N,Y),r.context=n1(null),s=r.current,l=Rn(),l=Do(l),h=Ir(l),h.callback=null,Cr(s,h,l),s=l,r.current.lanes=s,vt(r,s),_i(r),t[ki]=r.current,Yf(t),new Bc(r)},Pl.version="19.1.1",Pl}var Y2;function Z9(){if(Y2)return Jp.exports;Y2=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Jp.exports=W9(),Jp.exports}var J9=Z9();function eM(){const n=ji();return be.useLayoutEffect(()=>{window.scrollTo({top:0,behavior:"instant"});const e=document.getElementById("main");e&&e.focus({preventScroll:!0})},[n]),null}function tM({headerMode:n,setHeaderMode:e}){const i=z.useMemo(()=>[{key:"projects",label:"PROJECTS",href:"/projects/"},{key:"peoples",label:"PEOPLES",href:"/peoples/"},{key:"showroom",label:"SHOWROOM",href:"/showroom/"},{key:"guestbook",label:"GUESTBOOK",href:"/guestbook/"},{key:"credits",label:"CREDITS",href:"/credits/"}],[]),a=ji(),o=z.useMemo(()=>{const d=a.pathname.replace(/^\/+/,"");if(!d)return;const p=d.split("/")[0];return["projects","peoples","showroom","guestbook","credits"].includes(p)?p:void 0},[a.pathname]),u=o==="showroom";return y.jsxs(y.Fragment,{children:[y.jsx(P_,{items:i,activeKey:o,mode:n,autoOnScroll:n===ht.GRADIENT_DARK||n===ht.DARK,scrollThreshold:8,sticky:!0,overlay:n===ht.GRADIENT_DARK||n===ht.DARK,maxWidth:1280,onModeChange:e}),y.jsx("main",{id:"main",tabIndex:-1,style:{outline:"none",width:"100vw",boxSizing:"border-box",padding:0},children:y.jsx(p4,{})}),!u&&y.jsx(U_,{title:"잔향 : 기억의 향기",nav:[{label:"PROJECTS",href:"/projects/"},{label:"PEOPLES",href:"/peoples/"},{label:"SHOWROOM",href:"/showroom/"},{label:"GUESTBOOK",href:"/guestbook/"},{label:"CREDITS",href:"/credits/"}],copyright:["ⓒ 2025 TECH UNIV KOREA. ALL RIGHTS RESERVED.","TUKOREA DESIGN ENGINEERING 20TH GRADUATION EXHIBITION"],social:{youtube:{href:"https://www.youtube.com/@tukgrad2025",label:"YouTube"},instagram:{href:"https://www.instagram.com/tukd_grad?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",label:"Instagram"}},sidePadding:350,maxWidth:1220}),o!=="showroom"&&y.jsx(wA,{})]})}function nM({setHeaderMode:n}){return be.useLayoutEffect(()=>{n(ht.GRADIENT)},[n]),y.jsx(nR,{})}function iM({setHeaderMode:n}){return be.useLayoutEffect(()=>{n(ht.GRADIENT)},[n]),y.jsx(LR,{})}function rM({setHeaderMode:n}){return be.useLayoutEffect(()=>{n(ht.GRADIENT)},[n]),y.jsx(s5,{})}function aM({setHeaderMode:n}){return be.useLayoutEffect(()=>{n(ht.GRADIENT_DARK)},[n]),y.jsx($D,{})}function sM({setHeaderMode:n}){return be.useLayoutEffect(()=>{n(ht.DARK)},[n]),y.jsx(qN,{})}function oM({setHeaderMode:n}){return be.useLayoutEffect(()=>{n(ht.LIGHT)},[n]),y.jsx(U9,{})}function lM({setHeaderMode:n}){return be.useLayoutEffect(()=>{n(ht.DARK)},[n]),y.jsx(Y9,{})}function uM(){const[n,e]=z.useState(ht.GRADIENT);return y.jsxs(L4,{basename:"/",children:[y.jsx(eM,{}),y.jsx(g4,{children:y.jsxs(wi,{element:y.jsx(tM,{headerMode:n,setHeaderMode:e}),children:[y.jsx(wi,{index:!0,element:y.jsx(aM,{setHeaderMode:e})}),y.jsx(wi,{path:"projects/",element:y.jsx(rM,{setHeaderMode:e})}),y.jsx(wi,{path:"peoples/",element:y.jsx(iM,{setHeaderMode:e})}),y.jsx(wi,{path:"guestbook/",element:y.jsx(sM,{setHeaderMode:e})}),y.jsx(wi,{path:"work/:pid",element:y.jsx(oM,{setHeaderMode:e})}),y.jsx(wi,{path:"credits/",element:y.jsx(nM,{setHeaderMode:e})}),y.jsx(wi,{path:"showroom/",element:y.jsx(lM,{setHeaderMode:e})}),y.jsx(wi,{path:"*",element:y.jsx(f4,{to:"/",replace:!0})})]})})]})}const Q2=typeof document<"u"?document.getElementById("root"):null;Q2&&J9.createRoot(Q2).render(y.jsx(uM,{}));
