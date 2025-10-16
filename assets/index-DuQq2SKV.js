(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function r(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(o){if(o.ep)return;o.ep=!0;const u=r(o);fetch(o.href,u)}})();function Xx(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var np={exports:{}},Rl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O1;function fT(){if(O1)return Rl;O1=1;var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(a,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:n,type:a,key:f,ref:o!==void 0?o:null,props:u}}return Rl.Fragment=t,Rl.jsx=r,Rl.jsxs=r,Rl}var V1;function dT(){return V1||(V1=1,np.exports=fT()),np.exports}var v=dT(),ip={exports:{}},It={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k1;function pT(){if(k1)return It;k1=1;var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),b=Symbol.iterator;function S(O){return O===null||typeof O!="object"?null:(O=b&&O[b]||O["@@iterator"],typeof O=="function"?O:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,$={};function P(O,rt,ut){this.props=O,this.context=rt,this.refs=$,this.updater=ut||j}P.prototype.isReactComponent={},P.prototype.setState=function(O,rt){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,rt,"setState")},P.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function X(){}X.prototype=P.prototype;function Q(O,rt,ut){this.props=O,this.context=rt,this.refs=$,this.updater=ut||j}var Z=Q.prototype=new X;Z.constructor=Q,U(Z,P.prototype),Z.isPureReactComponent=!0;var ot=Array.isArray,tt={H:null,A:null,T:null,S:null,V:null},ft=Object.prototype.hasOwnProperty;function I(O,rt,ut,ct,gt,jt){return ut=jt.ref,{$$typeof:n,type:O,key:rt,ref:ut!==void 0?ut:null,props:jt}}function R(O,rt){return I(O.type,rt,void 0,void 0,void 0,O.props)}function C(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function M(O){var rt={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ut){return rt[ut]})}var V=/\/+/g;function z(O,rt){return typeof O=="object"&&O!==null&&O.key!=null?M(""+O.key):rt.toString(36)}function N(){}function ue(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(N,N):(O.status="pending",O.then(function(rt){O.status==="pending"&&(O.status="fulfilled",O.value=rt)},function(rt){O.status==="pending"&&(O.status="rejected",O.reason=rt)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function ne(O,rt,ut,ct,gt){var jt=typeof O;(jt==="undefined"||jt==="boolean")&&(O=null);var xt=!1;if(O===null)xt=!0;else switch(jt){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(O.$$typeof){case n:case t:xt=!0;break;case _:return xt=O._init,ne(xt(O._payload),rt,ut,ct,gt)}}if(xt)return gt=gt(O),xt=ct===""?"."+z(O,0):ct,ot(gt)?(ut="",xt!=null&&(ut=xt.replace(V,"$&/")+"/"),ne(gt,rt,ut,"",function(Ne){return Ne})):gt!=null&&(C(gt)&&(gt=R(gt,ut+(gt.key==null||O&&O.key===gt.key?"":(""+gt.key).replace(V,"$&/")+"/")+xt)),rt.push(gt)),1;xt=0;var ge=ct===""?".":ct+":";if(ot(O))for(var Lt=0;Lt<O.length;Lt++)ct=O[Lt],jt=ge+z(ct,Lt),xt+=ne(ct,rt,ut,jt,gt);else if(Lt=S(O),typeof Lt=="function")for(O=Lt.call(O),Lt=0;!(ct=O.next()).done;)ct=ct.value,jt=ge+z(ct,Lt++),xt+=ne(ct,rt,ut,jt,gt);else if(jt==="object"){if(typeof O.then=="function")return ne(ue(O),rt,ut,ct,gt);throw rt=String(O),Error("Objects are not valid as a React child (found: "+(rt==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":rt)+"). If you meant to render a collection of children, use an array instead.")}return xt}function J(O,rt,ut){if(O==null)return O;var ct=[],gt=0;return ne(O,ct,"","",function(jt){return rt.call(ut,jt,gt++)}),ct}function ht(O){if(O._status===-1){var rt=O._result;rt=rt(),rt.then(function(ut){(O._status===0||O._status===-1)&&(O._status=1,O._result=ut)},function(ut){(O._status===0||O._status===-1)&&(O._status=2,O._result=ut)}),O._status===-1&&(O._status=0,O._result=rt)}if(O._status===1)return O._result.default;throw O._result}var yt=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var rt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(rt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function Ct(){}return It.Children={map:J,forEach:function(O,rt,ut){J(O,function(){rt.apply(this,arguments)},ut)},count:function(O){var rt=0;return J(O,function(){rt++}),rt},toArray:function(O){return J(O,function(rt){return rt})||[]},only:function(O){if(!C(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},It.Component=P,It.Fragment=r,It.Profiler=o,It.PureComponent=Q,It.StrictMode=a,It.Suspense=p,It.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=tt,It.__COMPILER_RUNTIME={__proto__:null,c:function(O){return tt.H.useMemoCache(O)}},It.cache=function(O){return function(){return O.apply(null,arguments)}},It.cloneElement=function(O,rt,ut){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var ct=U({},O.props),gt=O.key,jt=void 0;if(rt!=null)for(xt in rt.ref!==void 0&&(jt=void 0),rt.key!==void 0&&(gt=""+rt.key),rt)!ft.call(rt,xt)||xt==="key"||xt==="__self"||xt==="__source"||xt==="ref"&&rt.ref===void 0||(ct[xt]=rt[xt]);var xt=arguments.length-2;if(xt===1)ct.children=ut;else if(1<xt){for(var ge=Array(xt),Lt=0;Lt<xt;Lt++)ge[Lt]=arguments[Lt+2];ct.children=ge}return I(O.type,gt,void 0,void 0,jt,ct)},It.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},It.createElement=function(O,rt,ut){var ct,gt={},jt=null;if(rt!=null)for(ct in rt.key!==void 0&&(jt=""+rt.key),rt)ft.call(rt,ct)&&ct!=="key"&&ct!=="__self"&&ct!=="__source"&&(gt[ct]=rt[ct]);var xt=arguments.length-2;if(xt===1)gt.children=ut;else if(1<xt){for(var ge=Array(xt),Lt=0;Lt<xt;Lt++)ge[Lt]=arguments[Lt+2];gt.children=ge}if(O&&O.defaultProps)for(ct in xt=O.defaultProps,xt)gt[ct]===void 0&&(gt[ct]=xt[ct]);return I(O,jt,void 0,void 0,null,gt)},It.createRef=function(){return{current:null}},It.forwardRef=function(O){return{$$typeof:m,render:O}},It.isValidElement=C,It.lazy=function(O){return{$$typeof:_,_payload:{_status:-1,_result:O},_init:ht}},It.memo=function(O,rt){return{$$typeof:g,type:O,compare:rt===void 0?null:rt}},It.startTransition=function(O){var rt=tt.T,ut={};tt.T=ut;try{var ct=O(),gt=tt.S;gt!==null&&gt(ut,ct),typeof ct=="object"&&ct!==null&&typeof ct.then=="function"&&ct.then(Ct,yt)}catch(jt){yt(jt)}finally{tt.T=rt}},It.unstable_useCacheRefresh=function(){return tt.H.useCacheRefresh()},It.use=function(O){return tt.H.use(O)},It.useActionState=function(O,rt,ut){return tt.H.useActionState(O,rt,ut)},It.useCallback=function(O,rt){return tt.H.useCallback(O,rt)},It.useContext=function(O){return tt.H.useContext(O)},It.useDebugValue=function(){},It.useDeferredValue=function(O,rt){return tt.H.useDeferredValue(O,rt)},It.useEffect=function(O,rt,ut){var ct=tt.H;if(typeof ut=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ct.useEffect(O,rt)},It.useId=function(){return tt.H.useId()},It.useImperativeHandle=function(O,rt,ut){return tt.H.useImperativeHandle(O,rt,ut)},It.useInsertionEffect=function(O,rt){return tt.H.useInsertionEffect(O,rt)},It.useLayoutEffect=function(O,rt){return tt.H.useLayoutEffect(O,rt)},It.useMemo=function(O,rt){return tt.H.useMemo(O,rt)},It.useOptimistic=function(O,rt){return tt.H.useOptimistic(O,rt)},It.useReducer=function(O,rt,ut){return tt.H.useReducer(O,rt,ut)},It.useRef=function(O){return tt.H.useRef(O)},It.useState=function(O){return tt.H.useState(O)},It.useSyncExternalStore=function(O,rt,ut){return tt.H.useSyncExternalStore(O,rt,ut)},It.useTransition=function(){return tt.H.useTransition()},It.version="19.1.1",It}var U1;function ym(){return U1||(U1=1,ip.exports=pT()),ip.exports}var q=ym();const kt=Xx(q);/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var P1="popstate";function mT(n={}){function t(a,o){let{pathname:u,search:f,hash:m}=a.location;return Vp("",{pathname:u,search:f,hash:m},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(a,o){return typeof o=="string"?o:ql(o)}return yT(t,r,null,n)}function he(n,t){if(n===!1||n===null||typeof n>"u")throw new Error(t)}function ii(n,t){if(!n){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function gT(){return Math.random().toString(36).substring(2,10)}function L1(n,t){return{usr:n.state,key:n.key,idx:t}}function Vp(n,t,r=null,a){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof t=="string"?co(t):t,state:r,key:t&&t.key||a||gT()}}function ql({pathname:n="/",search:t="",hash:r=""}){return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function co(n){let t={};if(n){let r=n.indexOf("#");r>=0&&(t.hash=n.substring(r),n=n.substring(0,r));let a=n.indexOf("?");a>=0&&(t.search=n.substring(a),n=n.substring(0,a)),n&&(t.pathname=n)}return t}function yT(n,t,r,a={}){let{window:o=document.defaultView,v5Compat:u=!1}=a,f=o.history,m="POP",p=null,g=_();g==null&&(g=0,f.replaceState({...f.state,idx:g},""));function _(){return(f.state||{idx:null}).idx}function b(){m="POP";let P=_(),X=P==null?null:P-g;g=P,p&&p({action:m,location:$.location,delta:X})}function S(P,X){m="PUSH";let Q=Vp($.location,P,X);g=_()+1;let Z=L1(Q,g),ot=$.createHref(Q);try{f.pushState(Z,"",ot)}catch(tt){if(tt instanceof DOMException&&tt.name==="DataCloneError")throw tt;o.location.assign(ot)}u&&p&&p({action:m,location:$.location,delta:1})}function j(P,X){m="REPLACE";let Q=Vp($.location,P,X);g=_();let Z=L1(Q,g),ot=$.createHref(Q);f.replaceState(Z,"",ot),u&&p&&p({action:m,location:$.location,delta:0})}function U(P){return vT(P)}let $={get action(){return m},get location(){return n(o,f)},listen(P){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(P1,b),p=P,()=>{o.removeEventListener(P1,b),p=null}},createHref(P){return t(o,P)},createURL:U,encodeLocation(P){let X=U(P);return{pathname:X.pathname,search:X.search,hash:X.hash}},push:S,replace:j,go(P){return f.go(P)}};return $}function vT(n,t=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),he(r,"No window.location.(origin|href) available to create URL");let a=typeof n=="string"?n:ql(n);return a=a.replace(/ $/,"%20"),!t&&a.startsWith("//")&&(a=r+a),new URL(a,r)}function Wx(n,t,r="/"){return xT(n,t,r,!1)}function xT(n,t,r,a){let o=typeof t=="string"?co(t):t,u=ir(o.pathname||"/",r);if(u==null)return null;let f=Zx(n);_T(f);let m=null;for(let p=0;m==null&&p<f.length;++p){let g=DT(u);m=jT(f[p],g,a)}return m}function Zx(n,t=[],r=[],a="",o=!1){let u=(f,m,p=o,g)=>{let _={relativePath:g===void 0?f.path||"":g,caseSensitive:f.caseSensitive===!0,childrenIndex:m,route:f};if(_.relativePath.startsWith("/")){if(!_.relativePath.startsWith(a)&&p)return;he(_.relativePath.startsWith(a),`Absolute route path "${_.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),_.relativePath=_.relativePath.slice(a.length)}let b=tr([a,_.relativePath]),S=r.concat(_);f.children&&f.children.length>0&&(he(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${b}".`),Zx(f.children,t,S,b,p)),!(f.path==null&&!f.index)&&t.push({path:b,score:RT(b,f.index),routesMeta:S})};return n.forEach((f,m)=>{if(f.path===""||!f.path?.includes("?"))u(f,m);else for(let p of Jx(f.path))u(f,m,!0,p)}),t}function Jx(n){let t=n.split("/");if(t.length===0)return[];let[r,...a]=t,o=r.endsWith("?"),u=r.replace(/\?$/,"");if(a.length===0)return o?[u,""]:[u];let f=Jx(a.join("/")),m=[];return m.push(...f.map(p=>p===""?u:[u,p].join("/"))),o&&m.push(...f),m.map(p=>n.startsWith("/")&&p===""?"/":p)}function _T(n){n.sort((t,r)=>t.score!==r.score?r.score-t.score:CT(t.routesMeta.map(a=>a.childrenIndex),r.routesMeta.map(a=>a.childrenIndex)))}var ET=/^:[\w-]+$/,bT=3,TT=2,wT=1,ST=10,AT=-2,z1=n=>n==="*";function RT(n,t){let r=n.split("/"),a=r.length;return r.some(z1)&&(a+=AT),t&&(a+=TT),r.filter(o=>!z1(o)).reduce((o,u)=>o+(ET.test(u)?bT:u===""?wT:ST),a)}function CT(n,t){return n.length===t.length&&n.slice(0,-1).every((a,o)=>a===t[o])?n[n.length-1]-t[t.length-1]:0}function jT(n,t,r=!1){let{routesMeta:a}=n,o={},u="/",f=[];for(let m=0;m<a.length;++m){let p=a[m],g=m===a.length-1,_=u==="/"?t:t.slice(u.length)||"/",b=oh({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},_),S=p.route;if(!b&&g&&r&&!a[a.length-1].route.index&&(b=oh({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},_)),!b)return null;Object.assign(o,b.params),f.push({params:o,pathname:tr([u,b.pathname]),pathnameBase:VT(tr([u,b.pathnameBase])),route:S}),b.pathnameBase!=="/"&&(u=tr([u,b.pathnameBase]))}return f}function oh(n,t){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[r,a]=IT(n.path,n.caseSensitive,n.end),o=t.match(r);if(!o)return null;let u=o[0],f=u.replace(/(.)\/+$/,"$1"),m=o.slice(1);return{params:a.reduce((g,{paramName:_,isOptional:b},S)=>{if(_==="*"){let U=m[S]||"";f=u.slice(0,u.length-U.length).replace(/(.)\/+$/,"$1")}const j=m[S];return b&&!j?g[_]=void 0:g[_]=(j||"").replace(/%2F/g,"/"),g},{}),pathname:u,pathnameBase:f,pattern:n}}function IT(n,t=!1,r=!0){ii(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let a=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,m,p)=>(a.push({paramName:m,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(a.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),a]}function DT(n){try{return n.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ii(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),n}}function ir(n,t){if(t==="/")return n;if(!n.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,a=n.charAt(r);return a&&a!=="/"?null:n.slice(r)||"/"}function NT(n,t="/"){let{pathname:r,search:a="",hash:o=""}=typeof n=="string"?co(n):n;return{pathname:r?r.startsWith("/")?r:MT(r,t):t,search:kT(a),hash:UT(o)}}function MT(n,t){let r=t.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function rp(n,t,r,a){return`Cannot include a '${n}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function OT(n){return n.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function vm(n){let t=OT(n);return t.map((r,a)=>a===t.length-1?r.pathname:r.pathnameBase)}function xm(n,t,r,a=!1){let o;typeof n=="string"?o=co(n):(o={...n},he(!o.pathname||!o.pathname.includes("?"),rp("?","pathname","search",o)),he(!o.pathname||!o.pathname.includes("#"),rp("#","pathname","hash",o)),he(!o.search||!o.search.includes("#"),rp("#","search","hash",o)));let u=n===""||o.pathname==="",f=u?"/":o.pathname,m;if(f==null)m=r;else{let b=t.length-1;if(!a&&f.startsWith("..")){let S=f.split("/");for(;S[0]==="..";)S.shift(),b-=1;o.pathname=S.join("/")}m=b>=0?t[b]:"/"}let p=NT(o,m),g=f&&f!=="/"&&f.endsWith("/"),_=(u||f===".")&&r.endsWith("/");return!p.pathname.endsWith("/")&&(g||_)&&(p.pathname+="/"),p}var tr=n=>n.join("/").replace(/\/\/+/g,"/"),VT=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),kT=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,UT=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function PT(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var t_=["POST","PUT","PATCH","DELETE"];new Set(t_);var LT=["GET",...t_];new Set(LT);var ho=q.createContext(null);ho.displayName="DataRouter";var Ch=q.createContext(null);Ch.displayName="DataRouterState";q.createContext(!1);var e_=q.createContext({isTransitioning:!1});e_.displayName="ViewTransition";var zT=q.createContext(new Map);zT.displayName="Fetchers";var BT=q.createContext(null);BT.displayName="Await";var ri=q.createContext(null);ri.displayName="Navigation";var fo=q.createContext(null);fo.displayName="Location";var Kn=q.createContext({outlet:null,matches:[],isDataRoute:!1});Kn.displayName="Route";var _m=q.createContext(null);_m.displayName="RouteError";function $T(n,{relative:t}={}){he(po(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:a}=q.useContext(ri),{hash:o,pathname:u,search:f}=ru(n,{relative:t}),m=u;return r!=="/"&&(m=u==="/"?r:tr([r,u])),a.createHref({pathname:m,search:f,hash:o})}function po(){return q.useContext(fo)!=null}function Ci(){return he(po(),"useLocation() may be used only in the context of a <Router> component."),q.useContext(fo).location}function FT(){return q.useContext(fo).navigationType}var n_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function i_(n){q.useContext(ri).static||q.useLayoutEffect(n)}function Em(){let{isDataRoute:n}=q.useContext(Kn);return n?aw():KT()}function KT(){he(po(),"useNavigate() may be used only in the context of a <Router> component.");let n=q.useContext(ho),{basename:t,navigator:r}=q.useContext(ri),{matches:a}=q.useContext(Kn),{pathname:o}=Ci(),u=JSON.stringify(vm(a)),f=q.useRef(!1);return i_(()=>{f.current=!0}),q.useCallback((p,g={})=>{if(ii(f.current,n_),!f.current)return;if(typeof p=="number"){r.go(p);return}let _=xm(p,JSON.parse(u),o,g.relative==="path");n==null&&t!=="/"&&(_.pathname=_.pathname==="/"?t:tr([t,_.pathname])),(g.replace?r.replace:r.push)(_,g.state,g)},[t,r,u,o,n])}var qT=q.createContext(null);function HT(n){let t=q.useContext(Kn).outlet;return t&&q.createElement(qT.Provider,{value:n},t)}function GT(){let{matches:n}=q.useContext(Kn),t=n[n.length-1];return t?t.params:{}}function ru(n,{relative:t}={}){let{matches:r}=q.useContext(Kn),{pathname:a}=Ci(),o=JSON.stringify(vm(r));return q.useMemo(()=>xm(n,JSON.parse(o),a,t==="path"),[n,o,a,t])}function YT(n,t){return r_(n,t)}function r_(n,t,r,a,o){he(po(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=q.useContext(ri),{matches:f}=q.useContext(Kn),m=f[f.length-1],p=m?m.params:{},g=m?m.pathname:"/",_=m?m.pathnameBase:"/",b=m&&m.route;{let Q=b&&b.path||"";a_(g,!b||Q.endsWith("*")||Q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${Q==="/"?"*":`${Q}/*`}">.`)}let S=Ci(),j;if(t){let Q=typeof t=="string"?co(t):t;he(_==="/"||Q.pathname?.startsWith(_),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${Q.pathname}" was given in the \`location\` prop.`),j=Q}else j=S;let U=j.pathname||"/",$=U;if(_!=="/"){let Q=_.replace(/^\//,"").split("/");$="/"+U.replace(/^\//,"").split("/").slice(Q.length).join("/")}let P=Wx(n,{pathname:$});ii(b||P!=null,`No routes matched location "${j.pathname}${j.search}${j.hash}" `),ii(P==null||P[P.length-1].route.element!==void 0||P[P.length-1].route.Component!==void 0||P[P.length-1].route.lazy!==void 0,`Matched leaf route at location "${j.pathname}${j.search}${j.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let X=JT(P&&P.map(Q=>Object.assign({},Q,{params:Object.assign({},p,Q.params),pathname:tr([_,u.encodeLocation?u.encodeLocation(Q.pathname).pathname:Q.pathname]),pathnameBase:Q.pathnameBase==="/"?_:tr([_,u.encodeLocation?u.encodeLocation(Q.pathnameBase).pathname:Q.pathnameBase])})),f,r,a,o);return t&&X?q.createElement(fo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...j},navigationType:"POP"}},X):X}function QT(){let n=rw(),t=PT(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),r=n instanceof Error?n.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},u={padding:"2px 4px",backgroundColor:a},f=null;return console.error("Error handled by React Router default ErrorBoundary:",n),f=q.createElement(q.Fragment,null,q.createElement("p",null,"💿 Hey developer 👋"),q.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",q.createElement("code",{style:u},"ErrorBoundary")," or"," ",q.createElement("code",{style:u},"errorElement")," prop on your route.")),q.createElement(q.Fragment,null,q.createElement("h2",null,"Unexpected Application Error!"),q.createElement("h3",{style:{fontStyle:"italic"}},t),r?q.createElement("pre",{style:o},r):null,f)}var XT=q.createElement(QT,null),WT=class extends q.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){this.props.unstable_onError?this.props.unstable_onError(n,t):console.error("React Router caught the following error during render",n)}render(){return this.state.error!==void 0?q.createElement(Kn.Provider,{value:this.props.routeContext},q.createElement(_m.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ZT({routeContext:n,match:t,children:r}){let a=q.useContext(ho);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),q.createElement(Kn.Provider,{value:n},r)}function JT(n,t=[],r=null,a=null,o=null){if(n==null){if(!r)return null;if(r.errors)n=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)n=r.matches;else return null}let u=n,f=r?.errors;if(f!=null){let g=u.findIndex(_=>_.route.id&&f?.[_.route.id]!==void 0);he(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),u=u.slice(0,Math.min(u.length,g+1))}let m=!1,p=-1;if(r)for(let g=0;g<u.length;g++){let _=u[g];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(p=g),_.route.id){let{loaderData:b,errors:S}=r,j=_.route.loader&&!b.hasOwnProperty(_.route.id)&&(!S||S[_.route.id]===void 0);if(_.route.lazy||j){m=!0,p>=0?u=u.slice(0,p+1):u=[u[0]];break}}}return u.reduceRight((g,_,b)=>{let S,j=!1,U=null,$=null;r&&(S=f&&_.route.id?f[_.route.id]:void 0,U=_.route.errorElement||XT,m&&(p<0&&b===0?(a_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),j=!0,$=null):p===b&&(j=!0,$=_.route.hydrateFallbackElement||null)));let P=t.concat(u.slice(0,b+1)),X=()=>{let Q;return S?Q=U:j?Q=$:_.route.Component?Q=q.createElement(_.route.Component,null):_.route.element?Q=_.route.element:Q=g,q.createElement(ZT,{match:_,routeContext:{outlet:g,matches:P,isDataRoute:r!=null},children:Q})};return r&&(_.route.ErrorBoundary||_.route.errorElement||b===0)?q.createElement(WT,{location:r.location,revalidation:r.revalidation,component:U,error:S,children:X(),routeContext:{outlet:null,matches:P,isDataRoute:!0},unstable_onError:a}):X()},null)}function bm(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function tw(n){let t=q.useContext(ho);return he(t,bm(n)),t}function ew(n){let t=q.useContext(Ch);return he(t,bm(n)),t}function nw(n){let t=q.useContext(Kn);return he(t,bm(n)),t}function Tm(n){let t=nw(n),r=t.matches[t.matches.length-1];return he(r.route.id,`${n} can only be used on routes that contain a unique "id"`),r.route.id}function iw(){return Tm("useRouteId")}function rw(){let n=q.useContext(_m),t=ew("useRouteError"),r=Tm("useRouteError");return n!==void 0?n:t.errors?.[r]}function aw(){let{router:n}=tw("useNavigate"),t=Tm("useNavigate"),r=q.useRef(!1);return i_(()=>{r.current=!0}),q.useCallback(async(o,u={})=>{ii(r.current,n_),r.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:t,...u}))},[n,t])}var B1={};function a_(n,t,r){!t&&!B1[n]&&(B1[n]=!0,ii(!1,r))}q.memo(sw);function sw({routes:n,future:t,state:r,unstable_onError:a}){return r_(n,void 0,r,a,t)}function ow({to:n,replace:t,state:r,relative:a}){he(po(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=q.useContext(ri);ii(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=q.useContext(Kn),{pathname:f}=Ci(),m=Em(),p=xm(n,vm(u),f,a==="path"),g=JSON.stringify(p);return q.useEffect(()=>{m(JSON.parse(g),{replace:t,state:r,relative:a})},[m,g,a,t,r]),null}function lw(n){return HT(n.context)}function Zi(n){he(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function uw({basename:n="/",children:t=null,location:r,navigationType:a="POP",navigator:o,static:u=!1}){he(!po(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=n.replace(/^\/*/,"/"),m=q.useMemo(()=>({basename:f,navigator:o,static:u,future:{}}),[f,o,u]);typeof r=="string"&&(r=co(r));let{pathname:p="/",search:g="",hash:_="",state:b=null,key:S="default"}=r,j=q.useMemo(()=>{let U=ir(p,f);return U==null?null:{location:{pathname:U,search:g,hash:_,state:b,key:S},navigationType:a}},[f,p,g,_,b,S,a]);return ii(j!=null,`<Router basename="${f}"> is not able to match the URL "${p}${g}${_}" because it does not start with the basename, so the <Router> won't render anything.`),j==null?null:q.createElement(ri.Provider,{value:m},q.createElement(fo.Provider,{children:t,value:j}))}function cw({children:n,location:t}){return YT(kp(n),t)}function kp(n,t=[]){let r=[];return q.Children.forEach(n,(a,o)=>{if(!q.isValidElement(a))return;let u=[...t,o];if(a.type===q.Fragment){r.push.apply(r,kp(a.props.children,u));return}he(a.type===Zi,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),he(!a.props.index||!a.props.children,"An index route cannot have child routes.");let f={id:a.props.id||u.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(f.children=kp(a.props.children,u)),r.push(f)}),r}var Gc="get",Yc="application/x-www-form-urlencoded";function jh(n){return n!=null&&typeof n.tagName=="string"}function hw(n){return jh(n)&&n.tagName.toLowerCase()==="button"}function fw(n){return jh(n)&&n.tagName.toLowerCase()==="form"}function dw(n){return jh(n)&&n.tagName.toLowerCase()==="input"}function pw(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function mw(n,t){return n.button===0&&(!t||t==="_self")&&!pw(n)}var Oc=null;function gw(){if(Oc===null)try{new FormData(document.createElement("form"),0),Oc=!1}catch{Oc=!0}return Oc}var yw=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ap(n){return n!=null&&!yw.has(n)?(ii(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Yc}"`),null):n}function vw(n,t){let r,a,o,u,f;if(fw(n)){let m=n.getAttribute("action");a=m?ir(m,t):null,r=n.getAttribute("method")||Gc,o=ap(n.getAttribute("enctype"))||Yc,u=new FormData(n)}else if(hw(n)||dw(n)&&(n.type==="submit"||n.type==="image")){let m=n.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||m.getAttribute("action");if(a=p?ir(p,t):null,r=n.getAttribute("formmethod")||m.getAttribute("method")||Gc,o=ap(n.getAttribute("formenctype"))||ap(m.getAttribute("enctype"))||Yc,u=new FormData(m,n),!gw()){let{name:g,type:_,value:b}=n;if(_==="image"){let S=g?`${g}.`:"";u.append(`${S}x`,"0"),u.append(`${S}y`,"0")}else g&&u.append(g,b)}}else{if(jh(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Gc,a=null,o=Yc,f=n}return u&&o==="text/plain"&&(f=u,u=void 0),{action:a,method:r.toLowerCase(),encType:o,formData:u,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function wm(n,t){if(n===!1||n===null||typeof n>"u")throw new Error(t)}function xw(n,t,r){let a=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return a.pathname==="/"?a.pathname=`_root.${r}`:t&&ir(a.pathname,t)==="/"?a.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${r}`,a}async function _w(n,t){if(n.id in t)return t[n.id];try{let r=await import(n.module);return t[n.id]=r,r}catch(r){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ew(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function bw(n,t,r){let a=await Promise.all(n.map(async o=>{let u=t.routes[o.route.id];if(u){let f=await _w(u,r);return f.links?f.links():[]}return[]}));return Aw(a.flat(1).filter(Ew).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function $1(n,t,r,a,o,u){let f=(p,g)=>r[g]?p.route.id!==r[g].route.id:!0,m=(p,g)=>r[g].pathname!==p.pathname||r[g].route.path?.endsWith("*")&&r[g].params["*"]!==p.params["*"];return u==="assets"?t.filter((p,g)=>f(p,g)||m(p,g)):u==="data"?t.filter((p,g)=>{let _=a.routes[p.route.id];if(!_||!_.hasLoader)return!1;if(f(p,g)||m(p,g))return!0;if(p.route.shouldRevalidate){let b=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:r[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof b=="boolean")return b}return!0}):[]}function Tw(n,t,{includeHydrateFallback:r}={}){return ww(n.map(a=>{let o=t.routes[a.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),r&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function ww(n){return[...new Set(n)]}function Sw(n){let t={},r=Object.keys(n).sort();for(let a of r)t[a]=n[a];return t}function Aw(n,t){let r=new Set;return new Set(t),n.reduce((a,o)=>{let u=JSON.stringify(Sw(o));return r.has(u)||(r.add(u),a.push({key:u,link:o})),a},[])}function s_(){let n=q.useContext(ho);return wm(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function Rw(){let n=q.useContext(Ch);return wm(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Sm=q.createContext(void 0);Sm.displayName="FrameworkContext";function o_(){let n=q.useContext(Sm);return wm(n,"You must render this element inside a <HydratedRouter> element"),n}function Cw(n,t){let r=q.useContext(Sm),[a,o]=q.useState(!1),[u,f]=q.useState(!1),{onFocus:m,onBlur:p,onMouseEnter:g,onMouseLeave:_,onTouchStart:b}=t,S=q.useRef(null);q.useEffect(()=>{if(n==="render"&&f(!0),n==="viewport"){let $=X=>{X.forEach(Q=>{f(Q.isIntersecting)})},P=new IntersectionObserver($,{threshold:.5});return S.current&&P.observe(S.current),()=>{P.disconnect()}}},[n]),q.useEffect(()=>{if(a){let $=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout($)}}},[a]);let j=()=>{o(!0)},U=()=>{o(!1),f(!1)};return r?n!=="intent"?[u,S,{}]:[u,S,{onFocus:Cl(m,j),onBlur:Cl(p,U),onMouseEnter:Cl(g,j),onMouseLeave:Cl(_,U),onTouchStart:Cl(b,j)}]:[!1,S,{}]}function Cl(n,t){return r=>{n&&n(r),r.defaultPrevented||t(r)}}function jw({page:n,...t}){let{router:r}=s_(),a=q.useMemo(()=>Wx(r.routes,n,r.basename),[r.routes,n,r.basename]);return a?q.createElement(Dw,{page:n,matches:a,...t}):null}function Iw(n){let{manifest:t,routeModules:r}=o_(),[a,o]=q.useState([]);return q.useEffect(()=>{let u=!1;return bw(n,t,r).then(f=>{u||o(f)}),()=>{u=!0}},[n,t,r]),a}function Dw({page:n,matches:t,...r}){let a=Ci(),{manifest:o,routeModules:u}=o_(),{basename:f}=s_(),{loaderData:m,matches:p}=Rw(),g=q.useMemo(()=>$1(n,t,p,o,a,"data"),[n,t,p,o,a]),_=q.useMemo(()=>$1(n,t,p,o,a,"assets"),[n,t,p,o,a]),b=q.useMemo(()=>{if(n===a.pathname+a.search+a.hash)return[];let U=new Set,$=!1;if(t.forEach(X=>{let Q=o.routes[X.route.id];!Q||!Q.hasLoader||(!g.some(Z=>Z.route.id===X.route.id)&&X.route.id in m&&u[X.route.id]?.shouldRevalidate||Q.hasClientLoader?$=!0:U.add(X.route.id))}),U.size===0)return[];let P=xw(n,f,"data");return $&&U.size>0&&P.searchParams.set("_routes",t.filter(X=>U.has(X.route.id)).map(X=>X.route.id).join(",")),[P.pathname+P.search]},[f,m,a,o,g,t,n,u]),S=q.useMemo(()=>Tw(_,o),[_,o]),j=Iw(_);return q.createElement(q.Fragment,null,b.map(U=>q.createElement("link",{key:U,rel:"prefetch",as:"fetch",href:U,...r})),S.map(U=>q.createElement("link",{key:U,rel:"modulepreload",href:U,...r})),j.map(({key:U,link:$})=>q.createElement("link",{key:U,nonce:r.nonce,...$})))}function Nw(...n){return t=>{n.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var l_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{l_&&(window.__reactRouterVersion="7.9.1")}catch{}function Mw({basename:n,children:t,window:r}){let a=q.useRef();a.current==null&&(a.current=mT({window:r,v5Compat:!0}));let o=a.current,[u,f]=q.useState({action:o.action,location:o.location}),m=q.useCallback(p=>{q.startTransition(()=>f(p))},[f]);return q.useLayoutEffect(()=>o.listen(m),[o,m]),q.createElement(uw,{basename:n,children:t,location:u.location,navigationType:u.action,navigator:o})}var u_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mo=q.forwardRef(function({onClick:t,discover:r="render",prefetch:a="none",relative:o,reloadDocument:u,replace:f,state:m,target:p,to:g,preventScrollReset:_,viewTransition:b,...S},j){let{basename:U}=q.useContext(ri),$=typeof g=="string"&&u_.test(g),P,X=!1;if(typeof g=="string"&&$&&(P=g,l_))try{let C=new URL(window.location.href),M=g.startsWith("//")?new URL(C.protocol+g):new URL(g),V=ir(M.pathname,U);M.origin===C.origin&&V!=null?g=V+M.search+M.hash:X=!0}catch{ii(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Q=$T(g,{relative:o}),[Z,ot,tt]=Cw(a,S),ft=Uw(g,{replace:f,state:m,target:p,preventScrollReset:_,relative:o,viewTransition:b});function I(C){t&&t(C),C.defaultPrevented||ft(C)}let R=q.createElement("a",{...S,...tt,href:P||Q,onClick:X||u?t:I,ref:Nw(j,ot),target:p,"data-discover":!$&&r==="render"?"true":void 0});return Z&&!$?q.createElement(q.Fragment,null,R,q.createElement(jw,{page:Q})):R});mo.displayName="Link";var Ow=q.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:a="",end:o=!1,style:u,to:f,viewTransition:m,children:p,...g},_){let b=ru(f,{relative:g.relative}),S=Ci(),j=q.useContext(Ch),{navigator:U,basename:$}=q.useContext(ri),P=j!=null&&$w(b)&&m===!0,X=U.encodeLocation?U.encodeLocation(b).pathname:b.pathname,Q=S.pathname,Z=j&&j.navigation&&j.navigation.location?j.navigation.location.pathname:null;r||(Q=Q.toLowerCase(),Z=Z?Z.toLowerCase():null,X=X.toLowerCase()),Z&&$&&(Z=ir(Z,$)||Z);const ot=X!=="/"&&X.endsWith("/")?X.length-1:X.length;let tt=Q===X||!o&&Q.startsWith(X)&&Q.charAt(ot)==="/",ft=Z!=null&&(Z===X||!o&&Z.startsWith(X)&&Z.charAt(X.length)==="/"),I={isActive:tt,isPending:ft,isTransitioning:P},R=tt?t:void 0,C;typeof a=="function"?C=a(I):C=[a,tt?"active":null,ft?"pending":null,P?"transitioning":null].filter(Boolean).join(" ");let M=typeof u=="function"?u(I):u;return q.createElement(mo,{...g,"aria-current":R,className:C,ref:_,style:M,to:f,viewTransition:m},typeof p=="function"?p(I):p)});Ow.displayName="NavLink";var Vw=q.forwardRef(({discover:n="render",fetcherKey:t,navigate:r,reloadDocument:a,replace:o,state:u,method:f=Gc,action:m,onSubmit:p,relative:g,preventScrollReset:_,viewTransition:b,...S},j)=>{let U=zw(),$=Bw(m,{relative:g}),P=f.toLowerCase()==="get"?"get":"post",X=typeof m=="string"&&u_.test(m),Q=Z=>{if(p&&p(Z),Z.defaultPrevented)return;Z.preventDefault();let ot=Z.nativeEvent.submitter,tt=ot?.getAttribute("formmethod")||f;U(ot||Z.currentTarget,{fetcherKey:t,method:tt,navigate:r,replace:o,state:u,relative:g,preventScrollReset:_,viewTransition:b})};return q.createElement("form",{ref:j,method:P,action:$,onSubmit:a?p:Q,...S,"data-discover":!X&&n==="render"?"true":void 0})});Vw.displayName="Form";function kw(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function c_(n){let t=q.useContext(ho);return he(t,kw(n)),t}function Uw(n,{target:t,replace:r,state:a,preventScrollReset:o,relative:u,viewTransition:f}={}){let m=Em(),p=Ci(),g=ru(n,{relative:u});return q.useCallback(_=>{if(mw(_,t)){_.preventDefault();let b=r!==void 0?r:ql(p)===ql(g);m(n,{replace:b,state:a,preventScrollReset:o,relative:u,viewTransition:f})}},[p,m,g,r,a,t,n,o,u,f])}var Pw=0,Lw=()=>`__${String(++Pw)}__`;function zw(){let{router:n}=c_("useSubmit"),{basename:t}=q.useContext(ri),r=iw();return q.useCallback(async(a,o={})=>{let{action:u,method:f,encType:m,formData:p,body:g}=vw(a,t);if(o.navigate===!1){let _=o.fetcherKey||Lw();await n.fetch(_,r,o.action||u,{preventScrollReset:o.preventScrollReset,formData:p,body:g,formMethod:o.method||f,formEncType:o.encType||m,flushSync:o.flushSync})}else await n.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:p,body:g,formMethod:o.method||f,formEncType:o.encType||m,replace:o.replace,state:o.state,fromRouteId:r,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,t,r])}function Bw(n,{relative:t}={}){let{basename:r}=q.useContext(ri),a=q.useContext(Kn);he(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),u={...ru(n||".",{relative:t})},f=Ci();if(n==null){u.search=f.search;let m=new URLSearchParams(u.search),p=m.getAll("index");if(p.some(_=>_==="")){m.delete("index"),p.filter(b=>b).forEach(b=>m.append("index",b));let _=m.toString();u.search=_?`?${_}`:""}}return(!n||n===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(u.pathname=u.pathname==="/"?r:tr([r,u.pathname])),ql(u)}function $w(n,{relative:t}={}){let r=q.useContext(e_);he(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=c_("useViewTransitionState"),o=ru(n,{relative:t});if(!r.isTransitioning)return!1;let u=ir(r.currentLocation.pathname,a)||r.currentLocation.pathname,f=ir(r.nextLocation.pathname,a)||r.nextLocation.pathname;return oh(o.pathname,f)!=null||oh(o.pathname,u)!=null}var sp={exports:{}},nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F1;function Fw(){if(F1)return nn;F1=1;var n=ym();function t(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)g+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var a={d:{f:r,r:function(){throw Error(t(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,g,_){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:b==null?null:""+b,children:p,containerInfo:g,implementation:_}}var f=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,nn.createPortal=function(p,g){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return u(p,g,null,_)},nn.flushSync=function(p){var g=f.T,_=a.p;try{if(f.T=null,a.p=2,p)return p()}finally{f.T=g,a.p=_,a.d.f()}},nn.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,a.d.C(p,g))},nn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},nn.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var _=g.as,b=m(_,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,j=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;_==="style"?a.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:b,integrity:S,fetchPriority:j}):_==="script"&&a.d.X(p,{crossOrigin:b,integrity:S,fetchPriority:j,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},nn.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var _=m(g.as,g.crossOrigin);a.d.M(p,{crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&a.d.M(p)},nn.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var _=g.as,b=m(_,g.crossOrigin);a.d.L(p,_,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},nn.preloadModule=function(p,g){if(typeof p=="string")if(g){var _=m(g.as,g.crossOrigin);a.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else a.d.m(p)},nn.requestFormReset=function(p){a.d.r(p)},nn.unstable_batchedUpdates=function(p,g){return p(g)},nn.useFormState=function(p,g,_){return f.H.useFormState(p,g,_)},nn.useFormStatus=function(){return f.H.useHostTransitionStatus()},nn.version="19.1.1",nn}var K1;function Kw(){if(K1)return sp.exports;K1=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}return n(),sp.exports=Fw(),sp.exports}var op={exports:{}},lp,q1;function qw(){if(q1)return lp;q1=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return lp=n,lp}var up,H1;function Hw(){if(H1)return up;H1=1;var n=qw();function t(){}function r(){}return r.resetWarningCache=t,up=function(){function a(f,m,p,g,_,b){if(b!==n){var S=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw S.name="Invariant Violation",S}}a.isRequired=a;function o(){return a}var u={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:o,element:a,elementType:a,instanceOf:o,node:a,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:r,resetWarningCache:t};return u.PropTypes=u,u},up}var G1;function Gw(){return G1||(G1=1,op.exports=Hw()()),op.exports}var Yw=Gw();const W=Xx(Yw);var xn=function(){return xn=Object.assign||function(t){for(var r,a=1,o=arguments.length;a<o;a++){r=arguments[a];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(t[u]=r[u])}return t},xn.apply(this,arguments)};function lh(n,t,r){if(r||arguments.length===2)for(var a=0,o=t.length,u;a<o;a++)(u||!(a in t))&&(u||(u=Array.prototype.slice.call(t,0,a)),u[a]=t[a]);return n.concat(u||Array.prototype.slice.call(t))}var se="-ms-",kl="-moz-",Ht="-webkit-",h_="comm",Ih="rule",Am="decl",Qw="@import",f_="@keyframes",Xw="@layer",d_=Math.abs,Rm=String.fromCharCode,Up=Object.assign;function Ww(n,t){return qe(n,0)^45?(((t<<2^qe(n,0))<<2^qe(n,1))<<2^qe(n,2))<<2^qe(n,3):0}function p_(n){return n.trim()}function Ji(n,t){return(n=t.exec(n))?n[0]:n}function Dt(n,t,r){return n.replace(t,r)}function Qc(n,t,r){return n.indexOf(t,r)}function qe(n,t){return n.charCodeAt(t)|0}function Js(n,t,r){return n.slice(t,r)}function _i(n){return n.length}function m_(n){return n.length}function Dl(n,t){return t.push(n),n}function Zw(n,t){return n.map(t).join("")}function Y1(n,t){return n.filter(function(r){return!Ji(r,t)})}var Dh=1,to=1,g_=0,Fn=0,je=0,go="";function Nh(n,t,r,a,o,u,f,m){return{value:n,root:t,parent:r,type:a,props:o,children:u,line:Dh,column:to,length:f,return:"",siblings:m}}function Hr(n,t){return Up(Nh("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},t)}function Fs(n){for(;n.root;)n=Hr(n.root,{children:[n]});Dl(n,n.siblings)}function Jw(){return je}function tS(){return je=Fn>0?qe(go,--Fn):0,to--,je===10&&(to=1,Dh--),je}function ni(){return je=Fn<g_?qe(go,Fn++):0,to++,je===10&&(to=1,Dh++),je}function Ga(){return qe(go,Fn)}function Xc(){return Fn}function Mh(n,t){return Js(go,n,t)}function Pp(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function eS(n){return Dh=to=1,g_=_i(go=n),Fn=0,[]}function nS(n){return go="",n}function cp(n){return p_(Mh(Fn-1,Lp(n===91?n+2:n===40?n+1:n)))}function iS(n){for(;(je=Ga())&&je<33;)ni();return Pp(n)>2||Pp(je)>3?"":" "}function rS(n,t){for(;--t&&ni()&&!(je<48||je>102||je>57&&je<65||je>70&&je<97););return Mh(n,Xc()+(t<6&&Ga()==32&&ni()==32))}function Lp(n){for(;ni();)switch(je){case n:return Fn;case 34:case 39:n!==34&&n!==39&&Lp(je);break;case 40:n===41&&Lp(n);break;case 92:ni();break}return Fn}function aS(n,t){for(;ni()&&n+je!==57;)if(n+je===84&&Ga()===47)break;return"/*"+Mh(t,Fn-1)+"*"+Rm(n===47?n:ni())}function sS(n){for(;!Pp(Ga());)ni();return Mh(n,Fn)}function oS(n){return nS(Wc("",null,null,null,[""],n=eS(n),0,[0],n))}function Wc(n,t,r,a,o,u,f,m,p){for(var g=0,_=0,b=f,S=0,j=0,U=0,$=1,P=1,X=1,Q=0,Z="",ot=o,tt=u,ft=a,I=Z;P;)switch(U=Q,Q=ni()){case 40:if(U!=108&&qe(I,b-1)==58){Qc(I+=Dt(cp(Q),"&","&\f"),"&\f",d_(g?m[g-1]:0))!=-1&&(X=-1);break}case 34:case 39:case 91:I+=cp(Q);break;case 9:case 10:case 13:case 32:I+=iS(U);break;case 92:I+=rS(Xc()-1,7);continue;case 47:switch(Ga()){case 42:case 47:Dl(lS(aS(ni(),Xc()),t,r,p),p);break;default:I+="/"}break;case 123*$:m[g++]=_i(I)*X;case 125*$:case 59:case 0:switch(Q){case 0:case 125:P=0;case 59+_:X==-1&&(I=Dt(I,/\f/g,"")),j>0&&_i(I)-b&&Dl(j>32?X1(I+";",a,r,b-1,p):X1(Dt(I," ","")+";",a,r,b-2,p),p);break;case 59:I+=";";default:if(Dl(ft=Q1(I,t,r,g,_,o,m,Z,ot=[],tt=[],b,u),u),Q===123)if(_===0)Wc(I,t,ft,ft,ot,u,b,m,tt);else switch(S===99&&qe(I,3)===110?100:S){case 100:case 108:case 109:case 115:Wc(n,ft,ft,a&&Dl(Q1(n,ft,ft,0,0,o,m,Z,o,ot=[],b,tt),tt),o,tt,b,m,a?ot:tt);break;default:Wc(I,ft,ft,ft,[""],tt,0,m,tt)}}g=_=j=0,$=X=1,Z=I="",b=f;break;case 58:b=1+_i(I),j=U;default:if($<1){if(Q==123)--$;else if(Q==125&&$++==0&&tS()==125)continue}switch(I+=Rm(Q),Q*$){case 38:X=_>0?1:(I+="\f",-1);break;case 44:m[g++]=(_i(I)-1)*X,X=1;break;case 64:Ga()===45&&(I+=cp(ni())),S=Ga(),_=b=_i(Z=I+=sS(Xc())),Q++;break;case 45:U===45&&_i(I)==2&&($=0)}}return u}function Q1(n,t,r,a,o,u,f,m,p,g,_,b){for(var S=o-1,j=o===0?u:[""],U=m_(j),$=0,P=0,X=0;$<a;++$)for(var Q=0,Z=Js(n,S+1,S=d_(P=f[$])),ot=n;Q<U;++Q)(ot=p_(P>0?j[Q]+" "+Z:Dt(Z,/&\f/g,j[Q])))&&(p[X++]=ot);return Nh(n,t,r,o===0?Ih:m,p,g,_,b)}function lS(n,t,r,a){return Nh(n,t,r,h_,Rm(Jw()),Js(n,2,-2),0,a)}function X1(n,t,r,a,o){return Nh(n,t,r,Am,Js(n,0,a),Js(n,a+1,-1),a,o)}function y_(n,t,r){switch(Ww(n,t)){case 5103:return Ht+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ht+n+n;case 4789:return kl+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Ht+n+kl+n+se+n+n;case 5936:switch(qe(n,t+11)){case 114:return Ht+n+se+Dt(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Ht+n+se+Dt(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Ht+n+se+Dt(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Ht+n+se+n+n;case 6165:return Ht+n+se+"flex-"+n+n;case 5187:return Ht+n+Dt(n,/(\w+).+(:[^]+)/,Ht+"box-$1$2"+se+"flex-$1$2")+n;case 5443:return Ht+n+se+"flex-item-"+Dt(n,/flex-|-self/g,"")+(Ji(n,/flex-|baseline/)?"":se+"grid-row-"+Dt(n,/flex-|-self/g,""))+n;case 4675:return Ht+n+se+"flex-line-pack"+Dt(n,/align-content|flex-|-self/g,"")+n;case 5548:return Ht+n+se+Dt(n,"shrink","negative")+n;case 5292:return Ht+n+se+Dt(n,"basis","preferred-size")+n;case 6060:return Ht+"box-"+Dt(n,"-grow","")+Ht+n+se+Dt(n,"grow","positive")+n;case 4554:return Ht+Dt(n,/([^-])(transform)/g,"$1"+Ht+"$2")+n;case 6187:return Dt(Dt(Dt(n,/(zoom-|grab)/,Ht+"$1"),/(image-set)/,Ht+"$1"),n,"")+n;case 5495:case 3959:return Dt(n,/(image-set\([^]*)/,Ht+"$1$`$1");case 4968:return Dt(Dt(n,/(.+:)(flex-)?(.*)/,Ht+"box-pack:$3"+se+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ht+n+n;case 4200:if(!Ji(n,/flex-|baseline/))return se+"grid-column-align"+Js(n,t)+n;break;case 2592:case 3360:return se+Dt(n,"template-","")+n;case 4384:case 3616:return r&&r.some(function(a,o){return t=o,Ji(a.props,/grid-\w+-end/)})?~Qc(n+(r=r[t].value),"span",0)?n:se+Dt(n,"-start","")+n+se+"grid-row-span:"+(~Qc(r,"span",0)?Ji(r,/\d+/):+Ji(r,/\d+/)-+Ji(n,/\d+/))+";":se+Dt(n,"-start","")+n;case 4896:case 4128:return r&&r.some(function(a){return Ji(a.props,/grid-\w+-start/)})?n:se+Dt(Dt(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Dt(n,/(.+)-inline(.+)/,Ht+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_i(n)-1-t>6)switch(qe(n,t+1)){case 109:if(qe(n,t+4)!==45)break;case 102:return Dt(n,/(.+:)(.+)-([^]+)/,"$1"+Ht+"$2-$3$1"+kl+(qe(n,t+3)==108?"$3":"$2-$3"))+n;case 115:return~Qc(n,"stretch",0)?y_(Dt(n,"stretch","fill-available"),t,r)+n:n}break;case 5152:case 5920:return Dt(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,o,u,f,m,p,g){return se+o+":"+u+g+(f?se+o+"-span:"+(m?p:+p-+u)+g:"")+n});case 4949:if(qe(n,t+6)===121)return Dt(n,":",":"+Ht)+n;break;case 6444:switch(qe(n,qe(n,14)===45?18:11)){case 120:return Dt(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ht+(qe(n,14)===45?"inline-":"")+"box$3$1"+Ht+"$2$3$1"+se+"$2box$3")+n;case 100:return Dt(n,":",":"+se)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Dt(n,"scroll-","scroll-snap-")+n}return n}function uh(n,t){for(var r="",a=0;a<n.length;a++)r+=t(n[a],a,n,t)||"";return r}function uS(n,t,r,a){switch(n.type){case Xw:if(n.children.length)break;case Qw:case Am:return n.return=n.return||n.value;case h_:return"";case f_:return n.return=n.value+"{"+uh(n.children,a)+"}";case Ih:if(!_i(n.value=n.props.join(",")))return""}return _i(r=uh(n.children,a))?n.return=n.value+"{"+r+"}":""}function cS(n){var t=m_(n);return function(r,a,o,u){for(var f="",m=0;m<t;m++)f+=n[m](r,a,o,u)||"";return f}}function hS(n){return function(t){t.root||(t=t.return)&&n(t)}}function fS(n,t,r,a){if(n.length>-1&&!n.return)switch(n.type){case Am:n.return=y_(n.value,n.length,r);return;case f_:return uh([Hr(n,{value:Dt(n.value,"@","@"+Ht)})],a);case Ih:if(n.length)return Zw(r=n.props,function(o){switch(Ji(o,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Fs(Hr(n,{props:[Dt(o,/:(read-\w+)/,":"+kl+"$1")]})),Fs(Hr(n,{props:[o]})),Up(n,{props:Y1(r,a)});break;case"::placeholder":Fs(Hr(n,{props:[Dt(o,/:(plac\w+)/,":"+Ht+"input-$1")]})),Fs(Hr(n,{props:[Dt(o,/:(plac\w+)/,":"+kl+"$1")]})),Fs(Hr(n,{props:[Dt(o,/:(plac\w+)/,se+"input-$1")]})),Fs(Hr(n,{props:[o]})),Up(n,{props:Y1(r,a)});break}return""})}}var dS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Cn={},eo=typeof process<"u"&&Cn!==void 0&&(Cn.REACT_APP_SC_ATTR||Cn.SC_ATTR)||"data-styled",v_="active",x_="data-styled-version",Oh="6.1.19",Cm=`/*!sc*/
`,ch=typeof window<"u"&&typeof document<"u",pS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Cn!==void 0&&Cn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Cn.REACT_APP_SC_DISABLE_SPEEDY!==""?Cn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Cn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Cn!==void 0&&Cn.SC_DISABLE_SPEEDY!==void 0&&Cn.SC_DISABLE_SPEEDY!==""&&Cn.SC_DISABLE_SPEEDY!=="false"&&Cn.SC_DISABLE_SPEEDY),Vh=Object.freeze([]),no=Object.freeze({});function mS(n,t,r){return r===void 0&&(r=no),n.theme!==r.theme&&n.theme||t||r.theme}var __=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),gS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,yS=/(^-|-$)/g;function W1(n){return n.replace(gS,"-").replace(yS,"")}var vS=/(a)(d)/gi,Vc=52,Z1=function(n){return String.fromCharCode(n+(n>25?39:97))};function zp(n){var t,r="";for(t=Math.abs(n);t>Vc;t=t/Vc|0)r=Z1(t%Vc)+r;return(Z1(t%Vc)+r).replace(vS,"$1-$2")}var hp,E_=5381,Ys=function(n,t){for(var r=t.length;r;)n=33*n^t.charCodeAt(--r);return n},b_=function(n){return Ys(E_,n)};function xS(n){return zp(b_(n)>>>0)}function _S(n){return n.displayName||n.name||"Component"}function fp(n){return typeof n=="string"&&!0}var T_=typeof Symbol=="function"&&Symbol.for,w_=T_?Symbol.for("react.memo"):60115,ES=T_?Symbol.for("react.forward_ref"):60112,bS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},TS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},S_={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},wS=((hp={})[ES]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},hp[w_]=S_,hp);function J1(n){return("type"in(t=n)&&t.type.$$typeof)===w_?S_:"$$typeof"in n?wS[n.$$typeof]:bS;var t}var SS=Object.defineProperty,AS=Object.getOwnPropertyNames,tv=Object.getOwnPropertySymbols,RS=Object.getOwnPropertyDescriptor,CS=Object.getPrototypeOf,ev=Object.prototype;function A_(n,t,r){if(typeof t!="string"){if(ev){var a=CS(t);a&&a!==ev&&A_(n,a,r)}var o=AS(t);tv&&(o=o.concat(tv(t)));for(var u=J1(n),f=J1(t),m=0;m<o.length;++m){var p=o[m];if(!(p in TS||r&&r[p]||f&&p in f||u&&p in u)){var g=RS(t,p);try{SS(n,p,g)}catch{}}}}return n}function io(n){return typeof n=="function"}function jm(n){return typeof n=="object"&&"styledComponentId"in n}function qa(n,t){return n&&t?"".concat(n," ").concat(t):n||t||""}function nv(n,t){if(n.length===0)return"";for(var r=n[0],a=1;a<n.length;a++)r+=n[a];return r}function Hl(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Bp(n,t,r){if(r===void 0&&(r=!1),!r&&!Hl(n)&&!Array.isArray(n))return t;if(Array.isArray(t))for(var a=0;a<t.length;a++)n[a]=Bp(n[a],t[a]);else if(Hl(t))for(var a in t)n[a]=Bp(n[a],t[a]);return n}function Im(n,t){Object.defineProperty(n,"toString",{value:t})}function au(n){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var jS=(function(){function n(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return n.prototype.indexOfGroup=function(t){for(var r=0,a=0;a<t;a++)r+=this.groupSizes[a];return r},n.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var a=this.groupSizes,o=a.length,u=o;t>=u;)if((u<<=1)<0)throw au(16,"".concat(t));this.groupSizes=new Uint32Array(u),this.groupSizes.set(a),this.length=u;for(var f=o;f<u;f++)this.groupSizes[f]=0}for(var m=this.indexOfGroup(t+1),p=(f=0,r.length);f<p;f++)this.tag.insertRule(m,r[f])&&(this.groupSizes[t]++,m++)},n.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],a=this.indexOfGroup(t),o=a+r;this.groupSizes[t]=0;for(var u=a;u<o;u++)this.tag.deleteRule(a)}},n.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var a=this.groupSizes[t],o=this.indexOfGroup(t),u=o+a,f=o;f<u;f++)r+="".concat(this.tag.getRule(f)).concat(Cm);return r},n})(),Zc=new Map,hh=new Map,Jc=1,kc=function(n){if(Zc.has(n))return Zc.get(n);for(;hh.has(Jc);)Jc++;var t=Jc++;return Zc.set(n,t),hh.set(t,n),t},IS=function(n,t){Jc=t+1,Zc.set(n,t),hh.set(t,n)},DS="style[".concat(eo,"][").concat(x_,'="').concat(Oh,'"]'),NS=new RegExp("^".concat(eo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),MS=function(n,t,r){for(var a,o=r.split(","),u=0,f=o.length;u<f;u++)(a=o[u])&&n.registerName(t,a)},OS=function(n,t){for(var r,a=((r=t.textContent)!==null&&r!==void 0?r:"").split(Cm),o=[],u=0,f=a.length;u<f;u++){var m=a[u].trim();if(m){var p=m.match(NS);if(p){var g=0|parseInt(p[1],10),_=p[2];g!==0&&(IS(_,g),MS(n,_,p[3]),n.getTag().insertRules(g,o)),o.length=0}else o.push(m)}}},iv=function(n){for(var t=document.querySelectorAll(DS),r=0,a=t.length;r<a;r++){var o=t[r];o&&o.getAttribute(eo)!==v_&&(OS(n,o),o.parentNode&&o.parentNode.removeChild(o))}};function VS(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var R_=function(n){var t=document.head,r=n||t,a=document.createElement("style"),o=(function(m){var p=Array.from(m.querySelectorAll("style[".concat(eo,"]")));return p[p.length-1]})(r),u=o!==void 0?o.nextSibling:null;a.setAttribute(eo,v_),a.setAttribute(x_,Oh);var f=VS();return f&&a.setAttribute("nonce",f),r.insertBefore(a,u),a},kS=(function(){function n(t){this.element=R_(t),this.element.appendChild(document.createTextNode("")),this.sheet=(function(r){if(r.sheet)return r.sheet;for(var a=document.styleSheets,o=0,u=a.length;o<u;o++){var f=a[o];if(f.ownerNode===r)return f}throw au(17)})(this.element),this.length=0}return n.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},n.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},n})(),US=(function(){function n(t){this.element=R_(t),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var a=document.createTextNode(r);return this.element.insertBefore(a,this.nodes[t]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},n.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},n})(),PS=(function(){function n(t){this.rules=[],this.length=0}return n.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},n.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},n.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},n})(),rv=ch,LS={isServer:!ch,useCSSOMInjection:!pS},C_=(function(){function n(t,r,a){t===void 0&&(t=no),r===void 0&&(r={});var o=this;this.options=xn(xn({},LS),t),this.gs=r,this.names=new Map(a),this.server=!!t.isServer,!this.server&&ch&&rv&&(rv=!1,iv(this)),Im(this,function(){return(function(u){for(var f=u.getTag(),m=f.length,p="",g=function(b){var S=(function(X){return hh.get(X)})(b);if(S===void 0)return"continue";var j=u.names.get(S),U=f.getGroup(b);if(j===void 0||!j.size||U.length===0)return"continue";var $="".concat(eo,".g").concat(b,'[id="').concat(S,'"]'),P="";j!==void 0&&j.forEach(function(X){X.length>0&&(P+="".concat(X,","))}),p+="".concat(U).concat($,'{content:"').concat(P,'"}').concat(Cm)},_=0;_<m;_++)g(_);return p})(o)})}return n.registerId=function(t){return kc(t)},n.prototype.rehydrate=function(){!this.server&&ch&&iv(this)},n.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new n(xn(xn({},this.options),t),this.gs,r&&this.names||void 0)},n.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(t=(function(r){var a=r.useCSSOMInjection,o=r.target;return r.isServer?new PS(o):a?new kS(o):new US(o)})(this.options),new jS(t)));var t},n.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},n.prototype.registerName=function(t,r){if(kc(t),this.names.has(t))this.names.get(t).add(r);else{var a=new Set;a.add(r),this.names.set(t,a)}},n.prototype.insertRules=function(t,r,a){this.registerName(t,r),this.getTag().insertRules(kc(t),a)},n.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},n.prototype.clearRules=function(t){this.getTag().clearGroup(kc(t)),this.clearNames(t)},n.prototype.clearTag=function(){this.tag=void 0},n})(),zS=/&/g,BS=/^\s*\/\/.*$/gm;function j_(n,t){return n.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(a){return"".concat(t," ").concat(a)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=j_(r.children,t)),r})}function $S(n){var t,r,a,o=no,u=o.options,f=u===void 0?no:u,m=o.plugins,p=m===void 0?Vh:m,g=function(S,j,U){return U.startsWith(r)&&U.endsWith(r)&&U.replaceAll(r,"").length>0?".".concat(t):S},_=p.slice();_.push(function(S){S.type===Ih&&S.value.includes("&")&&(S.props[0]=S.props[0].replace(zS,r).replace(a,g))}),f.prefix&&_.push(fS),_.push(uS);var b=function(S,j,U,$){j===void 0&&(j=""),U===void 0&&(U=""),$===void 0&&($="&"),t=$,r=j,a=new RegExp("\\".concat(r,"\\b"),"g");var P=S.replace(BS,""),X=oS(U||j?"".concat(U," ").concat(j," { ").concat(P," }"):P);f.namespace&&(X=j_(X,f.namespace));var Q=[];return uh(X,cS(_.concat(hS(function(Z){return Q.push(Z)})))),Q};return b.hash=p.length?p.reduce(function(S,j){return j.name||au(15),Ys(S,j.name)},E_).toString():"",b}var FS=new C_,$p=$S(),I_=kt.createContext({shouldForwardProp:void 0,styleSheet:FS,stylis:$p});I_.Consumer;kt.createContext(void 0);function av(){return q.useContext(I_)}var KS=(function(){function n(t,r){var a=this;this.inject=function(o,u){u===void 0&&(u=$p);var f=a.name+u.hash;o.hasNameForId(a.id,f)||o.insertRules(a.id,f,u(a.rules,f,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,Im(this,function(){throw au(12,String(a.name))})}return n.prototype.getName=function(t){return t===void 0&&(t=$p),this.name+t.hash},n})(),qS=function(n){return n>="A"&&n<="Z"};function sv(n){for(var t="",r=0;r<n.length;r++){var a=n[r];if(r===1&&a==="-"&&n[0]==="-")return n;qS(a)?t+="-"+a.toLowerCase():t+=a}return t.startsWith("ms-")?"-"+t:t}var D_=function(n){return n==null||n===!1||n===""},N_=function(n){var t,r,a=[];for(var o in n){var u=n[o];n.hasOwnProperty(o)&&!D_(u)&&(Array.isArray(u)&&u.isCss||io(u)?a.push("".concat(sv(o),":"),u,";"):Hl(u)?a.push.apply(a,lh(lh(["".concat(o," {")],N_(u),!1),["}"],!1)):a.push("".concat(sv(o),": ").concat((t=o,(r=u)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in dS||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return a};function Ya(n,t,r,a){if(D_(n))return[];if(jm(n))return[".".concat(n.styledComponentId)];if(io(n)){if(!io(u=n)||u.prototype&&u.prototype.isReactComponent||!t)return[n];var o=n(t);return Ya(o,t,r,a)}var u;return n instanceof KS?r?(n.inject(r,a),[n.getName(a)]):[n]:Hl(n)?N_(n):Array.isArray(n)?Array.prototype.concat.apply(Vh,n.map(function(f){return Ya(f,t,r,a)})):[n.toString()]}function HS(n){for(var t=0;t<n.length;t+=1){var r=n[t];if(io(r)&&!jm(r))return!1}return!0}var GS=b_(Oh),YS=(function(){function n(t,r,a){this.rules=t,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&HS(t),this.componentId=r,this.baseHash=Ys(GS,r),this.baseStyle=a,C_.registerId(r)}return n.prototype.generateAndInjectStyles=function(t,r,a){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=qa(o,this.staticRulesId);else{var u=nv(Ya(this.rules,t,r,a)),f=zp(Ys(this.baseHash,u)>>>0);if(!r.hasNameForId(this.componentId,f)){var m=a(u,".".concat(f),void 0,this.componentId);r.insertRules(this.componentId,f,m)}o=qa(o,f),this.staticRulesId=f}else{for(var p=Ys(this.baseHash,a.hash),g="",_=0;_<this.rules.length;_++){var b=this.rules[_];if(typeof b=="string")g+=b;else if(b){var S=nv(Ya(b,t,r,a));p=Ys(p,S+_),g+=S}}if(g){var j=zp(p>>>0);r.hasNameForId(this.componentId,j)||r.insertRules(this.componentId,j,a(g,".".concat(j),void 0,this.componentId)),o=qa(o,j)}}return o},n})(),M_=kt.createContext(void 0);M_.Consumer;var dp={};function QS(n,t,r){var a=jm(n),o=n,u=!fp(n),f=t.attrs,m=f===void 0?Vh:f,p=t.componentId,g=p===void 0?(function(ot,tt){var ft=typeof ot!="string"?"sc":W1(ot);dp[ft]=(dp[ft]||0)+1;var I="".concat(ft,"-").concat(xS(Oh+ft+dp[ft]));return tt?"".concat(tt,"-").concat(I):I})(t.displayName,t.parentComponentId):p,_=t.displayName,b=_===void 0?(function(ot){return fp(ot)?"styled.".concat(ot):"Styled(".concat(_S(ot),")")})(n):_,S=t.displayName&&t.componentId?"".concat(W1(t.displayName),"-").concat(t.componentId):t.componentId||g,j=a&&o.attrs?o.attrs.concat(m).filter(Boolean):m,U=t.shouldForwardProp;if(a&&o.shouldForwardProp){var $=o.shouldForwardProp;if(t.shouldForwardProp){var P=t.shouldForwardProp;U=function(ot,tt){return $(ot,tt)&&P(ot,tt)}}else U=$}var X=new YS(r,S,a?o.componentStyle:void 0);function Q(ot,tt){return(function(ft,I,R){var C=ft.attrs,M=ft.componentStyle,V=ft.defaultProps,z=ft.foldedComponentIds,N=ft.styledComponentId,ue=ft.target,ne=kt.useContext(M_),J=av(),ht=ft.shouldForwardProp||J.shouldForwardProp,yt=mS(I,ne,V)||no,Ct=(function(jt,xt,ge){for(var Lt,Ne=xn(xn({},xt),{className:void 0,theme:ge}),Ii=0;Ii<jt.length;Ii+=1){var qn=io(Lt=jt[Ii])?Lt(Ne):Lt;for(var on in qn)Ne[on]=on==="className"?qa(Ne[on],qn[on]):on==="style"?xn(xn({},Ne[on]),qn[on]):qn[on]}return xt.className&&(Ne.className=qa(Ne.className,xt.className)),Ne})(C,I,yt),O=Ct.as||ue,rt={};for(var ut in Ct)Ct[ut]===void 0||ut[0]==="$"||ut==="as"||ut==="theme"&&Ct.theme===yt||(ut==="forwardedAs"?rt.as=Ct.forwardedAs:ht&&!ht(ut,O)||(rt[ut]=Ct[ut]));var ct=(function(jt,xt){var ge=av(),Lt=jt.generateAndInjectStyles(xt,ge.styleSheet,ge.stylis);return Lt})(M,Ct),gt=qa(z,N);return ct&&(gt+=" "+ct),Ct.className&&(gt+=" "+Ct.className),rt[fp(O)&&!__.has(O)?"class":"className"]=gt,R&&(rt.ref=R),q.createElement(O,rt)})(Z,ot,tt)}Q.displayName=b;var Z=kt.forwardRef(Q);return Z.attrs=j,Z.componentStyle=X,Z.displayName=b,Z.shouldForwardProp=U,Z.foldedComponentIds=a?qa(o.foldedComponentIds,o.styledComponentId):"",Z.styledComponentId=S,Z.target=a?o.target:n,Object.defineProperty(Z,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ot){this._foldedDefaultProps=a?(function(tt){for(var ft=[],I=1;I<arguments.length;I++)ft[I-1]=arguments[I];for(var R=0,C=ft;R<C.length;R++)Bp(tt,C[R],!0);return tt})({},o.defaultProps,ot):ot}}),Im(Z,function(){return".".concat(Z.styledComponentId)}),u&&A_(Z,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Z}function ov(n,t){for(var r=[n[0]],a=0,o=t.length;a<o;a+=1)r.push(t[a],n[a+1]);return r}var lv=function(n){return Object.assign(n,{isCss:!0})};function XS(n){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(io(n)||Hl(n))return lv(Ya(ov(Vh,lh([n],t,!0))));var a=n;return t.length===0&&a.length===1&&typeof a[0]=="string"?Ya(a):lv(Ya(ov(a,t)))}function Fp(n,t,r){if(r===void 0&&(r=no),!t)throw au(1,t);var a=function(o){for(var u=[],f=1;f<arguments.length;f++)u[f-1]=arguments[f];return n(t,r,XS.apply(void 0,lh([o],u,!1)))};return a.attrs=function(o){return Fp(n,t,xn(xn({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},a.withConfig=function(o){return Fp(n,t,xn(xn({},r),o))},a}var O_=function(n){return Fp(QS,n)},A=O_;__.forEach(function(n){A[n]=O_(n)});const pp=A.a`
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
`;function Dm({label:n,href:t="#",active:r=!1,onClick:a,style:o,target:u,rel:f}){const m="/TU2025gradulate/",p=/^https?:\/\//i.test(t)||t?.startsWith("mailto:")||t?.startsWith("tel:");let g,_=!1;!p&&t&&(t.startsWith(m)?(g="/"+t.slice(m.length).replace(/^\/+/,""),_=!0):t.startsWith("/")&&(g=t,_=!0),t===m&&(g="/",_=!0));const S={"aria-current":r?"page":void 0,"data-active":r?"true":"false","data-label":n,onKeyDown:j=>{a&&(j.key==="Enter"||j.key===" ")&&(j.preventDefault(),a(j))},onClick:a,style:o,$active:r};return _?v.jsx(pp,{as:mo,to:g,...S,children:v.jsx("span",{className:"navbtn-text",children:n})}):t?v.jsx(pp,{href:t,target:u,rel:f,...S,children:v.jsx("span",{className:"navbtn-text",children:n})}):v.jsx(pp,{as:"button",type:"button",...S,style:{background:"none",border:0,...o},children:v.jsx("span",{className:"navbtn-text",children:n})})}Dm.propTypes={label:W.string.isRequired,href:W.string,active:W.bool,onClick:W.func,style:W.object,target:W.string,rel:W.string};const WS=({isOpen:n=!1,size:t=28,color:r="#fff",...a})=>{const o=Math.max(2,Math.round(t/14)),u=t/2,f=Math.round(t*.28);if(n)return v.jsxs("svg",{width:t,height:t,viewBox:`0 0 ${t} ${t}`,fill:"none",...a,children:[v.jsx("line",{x1:u-f,y1:u-f,x2:u+f,y2:u+f,stroke:r,strokeWidth:o,strokeLinecap:"round"}),v.jsx("line",{x1:u-f,y1:u+f,x2:u+f,y2:u-f,stroke:r,strokeWidth:o,strokeLinecap:"round"})]});const m=o,p=o/2;return v.jsxs("svg",{width:t,height:t,viewBox:`0 0 ${t} ${t}`,fill:"none",...a,children:[v.jsx("rect",{x:0,y:u-f-m/2,width:t,height:m,rx:p,fill:r}),v.jsx("rect",{x:0,y:u-m/2,width:t,height:m,rx:p,fill:r}),v.jsx("rect",{x:0,y:u+f-m/2,width:t,height:m,rx:p,fill:r})]})},pe=Object.freeze({GRADIENT:"gradient",LIGHT:"light",DARK:"dark",GRADIENT_DARK:"gradient_dark"}),ZS=A.header`
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
`,JS=A.div`
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
`,tA=A.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  @media (max-width: 640px) {
    gap: 8px;
  }
`,eA=A.div`
  display: flex;
  align-items: center;
  gap: 24px;
`,nA=A.nav`
  display: flex;
  align-items: center;
  gap: 24px;
  @media (max-width: 640px) {
    display: none;
  }
`,iA=A.button`
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
`,rA=A.div`
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
`,aA=A.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  margin-top: 12px;
`,sA=A(Dm)`
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  letter-spacing: 0.26px;
`,oA=A.div`
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
`,lA=A.div`
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
`;function V_({items:n=[],activeKey:t,mode:r,onModeChange:a,autoOnScroll:o=!1,scrollThreshold:u=8,sticky:f=!0,maxWidth:m,overlay:p=!1}){const[g,_]=q.useState(!1),[b,S]=q.useState(pe.GRADIENT),j=typeof r=="string",U=j?r:b,$=q.useRef(j?r:b);q.useEffect(()=>{if(!j)return;(window.scrollY||document.documentElement.scrollTop||0)<=u&&($.current=r)},[r,j,u]),q.useEffect(()=>{if(!o)return;const M=()=>{const V=window.scrollY||document.documentElement.scrollTop||0,z=$.current||pe.GRADIENT_DARK,N=V>u?pe.DARK:z;j||S(N),a&&a(N)};return M(),window.addEventListener("scroll",M,{passive:!0}),()=>window.removeEventListener("scroll",M)},[o,j,a,u]);const{baseColor:P,gradient:X,textColor:Q,boxShadow:Z,showGradient:ot}=q.useMemo(()=>{switch(U){case pe.LIGHT:return{baseColor:"linear-gradient(180deg, rgba(255,255,255,0.8) 60%, rgba(255,255,255,0) 100%)",gradient:"rgba(255,255,255,1)",textColor:"#000",showGradient:!0};case pe.DARK:return{baseColor:"linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,0) 100%)",gradient:"linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,1) 100%)",textColor:"#fff",showGradient:!0};case pe.GRADIENT_DARK:return{baseColor:"linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,0) 100%)",gradient:"linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,1) 100%)",textColor:"#fff",showGradient:!1};default:return{baseColor:"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",gradient:"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",textColor:"#000",showGradient:!1}}},[U]),I=U===pe.DARK||U===pe.GRADIENT_DARK||g,R=I?"/TU2025gradulate/icons/logoLight.svg":"/TU2025gradulate/icons/logoDark.svg",C=n.filter(M=>M.label!=="SHOWROOM");return q.useEffect(()=>(g?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[g]),v.jsxs(ZS,{role:"banner",$sticky:f,$overlay:p,$baseColor:P,$gradient:X,$showGradient:ot,$textColor:Q,$boxShadow:Z,children:[v.jsx(JS,{$maxWidth:m,children:v.jsxs(tA,{children:[v.jsxs(eA,{children:[v.jsx(mo,{to:"/","aria-label":"홈으로",style:{color:"inherit",textDecoration:"none"},children:v.jsx(oA,{"aria-hidden":!0,children:v.jsx(lA,{children:v.jsx("div",{style:{backgroundImage:`url(${R})`,width:"100%",height:"100%",backgroundSize:"contain",backgroundRepeat:"no-repeat"}})})})}),v.jsx(nA,{"aria-label":"주 메뉴",children:n.map(M=>v.jsx(Dm,{label:M.label,href:M.href,active:M.key===t},M.key))})]}),v.jsx(iA,{"aria-label":g?"메뉴 닫기":"메뉴 열기",onClick:()=>_(M=>!M),children:v.jsx(WS,{isOpen:g,size:24,color:I?"#fff":"#000"})})]})}),v.jsx(rA,{$open:g,onClick:()=>_(!1),children:v.jsx(aA,{onClick:M=>M.stopPropagation(),children:C.map(M=>v.jsx(sA,{label:M.label,href:M.href,active:M.key===t,style:{fontSize:18,fontWeight:500,color:"#fff",textAlign:"center"},onClick:()=>_(!1)},M.key))})})]})}V_.propTypes={items:W.arrayOf(W.shape({key:W.string.isRequired,label:W.string.isRequired,href:W.string})),activeKey:W.string,mode:W.oneOf([pe.GRADIENT,pe.LIGHT,pe.DARK,pe.GRADIENT_DARK]),onModeChange:W.func,autoOnScroll:W.bool,scrollThreshold:W.number,sticky:W.bool,overlay:W.bool,maxWidth:W.oneOfType([W.string,W.number])};const Nm="Pretendard, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR', Arial, sans-serif",uA=A.footer`
  width: 100vw;
  background: #0E0E0E;
  border-top: 1px #A1A1A1 solid;
  @media (max-width: 640px) {
    min-width: 0;
    left: 0;
    right: 0;
  }
`,cA=A.div`
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
`,hA=A.div`
  font-family: ${Nm};
  font-size: 24px;
  font-weight: 700;
  color: #FAFAFA;
  margin-bottom: 36px;
  @media (max-width: 640px) {
    font-size: 14px;
    margin-bottom: 16px;
  }
`,fA=A.nav`
  display: flex;
  gap: 60px;
  flex-wrap: wrap;
  align-items: center;
  color: #F0F0F0;
  font-family: ${Nm};
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
`,uv=A.a`
  color: inherit;
  text-decoration: none;
  opacity: 0.95;
`,dA=A.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #909090;
  font-family: ${Nm};
  font-size: 14px;
  font-weight: 300;
  max-width: 475px;
  @media (max-width: 640px) {
    font-size: 10px;
    max-width: 100vw;
    gap: 4px;
    align-items: center;
  }
`,pA=A.div`
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
`,cv=A.a`
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
`;function k_({title:n="잔향 : 기억의 향기",nav:t=[{label:"PROJECTS",href:"/projects"},{label:"PEOPLES",href:"/peoples"},{label:"SHOWROOM",href:"/showroom"},{label:"GUESTBOOK",href:"/guestbook"},{label:"CREDITS",href:"/credits"}],copyright:r=["ⓒ 2025 TECH UNIV KOREA. ALL RIGHTS RESERVED.","TUKOREA DESIGN ENGINEERING 20TH GRADUATION EXHIBITION"],social:a={youtube:{href:"https://youtube.com",label:"YouTube"},instagram:{href:"https://instagram.com",label:"Instagram"}},maxWidth:o=1220,sidePadding:u=350}){return v.jsx(uA,{role:"contentinfo",children:v.jsxs(cA,{$sidePadding:u,$maxWidth:o,children:[v.jsx(hA,{children:n}),v.jsx(fA,{"aria-label":"푸터 메뉴",children:t.map(f=>{const m=f.href||"#",p=/^https?:\/\//i.test(m),g="/TU2025gradulate/";let _=m;return p||(m===g?_="/":m.startsWith(g)&&(_="/"+m.slice(g.length).replace(/^\/+/,""))),p?v.jsx(uv,{href:m,children:f.label},f.label):v.jsx(uv,{as:mo,to:_,children:f.label},f.label)})}),v.jsx(dA,{children:r.map((f,m)=>v.jsx("div",{children:f},m))}),v.jsxs(pA,{$sidePadding:u,children:[a?.youtube?.href&&v.jsx(cv,{href:a.youtube.href,"aria-label":a.youtube.label||"YouTube",target:"_blank",rel:"noreferrer noopener",children:v.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#FFFFFF","aria-hidden":!0,children:v.jsx("path",{d:"M23.5 7.2a4 4 0 0 0-2.8-2.8C18.8 4 12 4 12 4s-6.8 0-8.7.4A4 4 0 0 0 .5 7.2 41 41 0 0 0 0 12a41 41 0 0 0 .5 4.8 4 4 0 0 0 2.8 2.8C5.2 20 12 20 12 20s6.8 0 8.7-.4a4 4 0 0 0 2.8-2.8A41 41 0 0 0 24 12a41 41 0 0 0-.5-4.8zM9.6 15.2V8.8L15.8 12l-6.2 3.2z"})})}),a?.instagram?.href&&v.jsx(cv,{href:a.instagram.href,"aria-label":a.instagram.label||"Instagram",target:"_blank",rel:"noreferrer noopener",children:v.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#FFFFFF","aria-hidden":!0,children:[v.jsx("path",{d:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2A3.2 3.2 0 1 1 12 8a3.2 3.2 0 0 1 0 6.4z"}),v.jsx("circle",{cx:"17.5",cy:"6.5",r:"1.2"}),v.jsx("path",{d:"M17.8 2H6.2A4.2 4.2 0 0 0 2 6.2v11.6A4.2 4.2 0 0 0 6.2 22h11.6A4.2 4.2 0 0 0 22 17.8V6.2A4.2 4.2 0 0 0 17.8 2zm2.6 15.8a2.6 2.6 0 0 1-2.6 2.6H6.2a2.6 2.6 0 0 1-2.6-2.6V6.2A2.6 2.6 0 0 1 6.2 3.6h11.6a2.6 2.6 0 0 1 2.6 2.6v11.6z"})]})})]})]})})}k_.propTypes={title:W.string,nav:W.arrayOf(W.shape({label:W.string.isRequired,href:W.string.isRequired})),copyright:W.arrayOf(W.string),social:W.shape({youtube:W.shape({href:W.string,label:W.string}),instagram:W.shape({href:W.string,label:W.string})}),maxWidth:W.number,sidePadding:W.number};const ji="'Pretendard', system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif",U_=350,hv=`${U_/1920*100}vw`,mA=`${(U_+414)/1920*100}vw`,gA=A.div`
  position: relative; background: #fff;
`,yA=A.div`
  padding-left: ${hv}; padding-right: ${hv};
`;function fv({children:n}){return v.jsx(gA,{children:v.jsx(yA,{children:n})})}const vA=A.div`
  position: relative; height: 120px; display: flex; align-items: flex-end; justify-content: center;
  font-family: ${ji}; font-size: 40px; font-weight: 700; color: #101010; line-height: 64px; margin-top: 80px;
`,xA=A.div`
  font-family: ${ji}; font-size: 32px; font-weight: 600; line-height: 56px; color: #000; margin-top: 18px;
`;function _A(){return v.jsxs(v.Fragment,{children:[v.jsx(vA,{children:"CREDITS"}),v.jsx(xA,{children:"잔향 : 기억의 향기"})]})}const EA=A.div`
  max-width: 374px; font-family: ${ji}; font-size: 16px; font-weight: 300; line-height: 25.6px; color: #000; text-align: justify; margin-top: 5px;
`;function bA({text:n}){return v.jsx(EA,{children:n})}const TA=A.div`
  width: 806px; height: 375px; background: #FFF4ED; margin-top: 24px; margin-left: ${mA}; position: absolute;
`,wA=A.div`
  position: absolute; left: 136px; top: 140px; font-family: ${ji}; font-size: 82.64px; font-weight: 500; line-height: 92.55px; color: #000;
`;function SA({children:n}){return v.jsx(TA,{children:v.jsx(wA,{children:n})})}const AA=A.div`
  display: flex; gap: 40px; margin-top: 420px; width: 1220px;
`,RA=A.div`
  width: 374px; display: flex; flex-direction: column; gap: 20px;
`,CA=A.div`
  font-family: ${ji}; font-size: 28px; font-weight: 600; line-height: 49px; color: #000;
`,jA=A.div`
  font-family: ${ji}; font-size: 16px; font-weight: 400; line-height: 21.6px; color: #000; text-align: justify;
`;function IA({blocks:n}){return v.jsx(AA,{children:n.map(t=>v.jsxs(RA,{children:[v.jsx(CA,{children:t.title}),v.jsx(jA,{children:t.body})]},t.title))})}const DA=A.div`
  border-bottom: ${n=>n.$last?"none":"1px #E0E0E0 solid"}; display: flex; gap: 20px; padding-bottom: 10px; margin-top: 20px; align-items: flex-start;
`,NA=A.div`
  width: 289px; height: 45px; display: flex; align-items: flex-end;
`,MA=A.div`
  font-family: ${ji}; font-size: 20px; font-weight: 500; line-height: 22.4px; color: #202020;
`,OA=A.div`
  width: 900px; display: flex; flex-direction: column;
`;function VA({title:n,rows:t,last:r=!1}){return v.jsxs(DA,{$last:r,children:[v.jsx(NA,{children:v.jsx(MA,{children:n})}),v.jsx(OA,{children:t.map((a,o)=>v.jsx(BA,{ko:a.ko,en:a.en,divider:t.length>1&&o!==t.length-1},a.ko+a.en+o))})]})}const kA=A.div`
  padding-top: 22px; padding-bottom: 40px; border-bottom: ${n=>n.$divider?"1px #E0E0E0 solid":"none"}; display: flex; gap: 20px; align-items: flex-start;
`,UA=A.div`
  width: 135px;
`,PA=A.div`
  font-family: ${ji}; font-size: 16px; font-weight: 300; line-height: 22.4px; color: #202020;
`,LA=A.div`
  display: flex; align-items: center;
`,zA=A.div`
  font-family: ${ji}; font-size: 16px; font-weight: 300; line-height: 22.4px; color: #404040;
`;function BA({ko:n,en:t,divider:r=!1}){return v.jsxs(kA,{$divider:r,children:[v.jsx(UA,{children:v.jsx(PA,{children:n})}),v.jsx(LA,{children:v.jsx(zA,{children:t})})]})}const $A=A.div`
  margin-top: 60px;
`,FA=A.div`
  font-family: ${ji}; font-size: 28px; font-weight: 600; color: #101010; margin-bottom: 24px;
`;function KA(){const n="안녕하세요. 제 20대 졸업준비위원회입니다. 그리고 이후에는 적당히 졸준위의 생각과 고생에 대한 감상을 종합해…",t=[{title:"학부장의 말씀",body:"내용 작성"},{title:"졸전담당교수 말씀",body:"내용 작성"},{title:"웹사이트팀 제작 후기",body:"내용 작성"}],r=[{title:"위원장",rows:[{ko:"홍승재",en:"Hong Seungjae"}]},{title:"부위원장",rows:[{ko:"김예린",en:"Kim Yerin"}]},{title:"총무",rows:[{ko:"진효민",en:"Jin HYOMIN"},{ko:"정민호",en:"Jeong Minho"}]},{title:"기획",rows:[{ko:"차소이",en:"Cha Soi"},{ko:"문나라",en:"Mun Nara"},{ko:"한채원",en:"Han Chaewon"}]},{title:"홍보",rows:[{ko:"이채원",en:"Lee Chaewon"},{ko:"남가림",en:"Nam Garim"}]},{title:"디자인",rows:[{ko:"구인회",en:"Gu Inhoe"},{ko:"김기윤",en:"Kim Giyun"},{ko:"박혜성",en:"Bak Hyeseong"},{ko:"석동현",en:"Seok Donghyoen"}]},{title:"웹사이트",rows:[{ko:"성수민",en:"Seong Sumin"},{ko:"김예준",en:"Kim Yejun"}]},{title:"Special Thanks",rows:[{ko:"김한종 교수",en:"Prof. Kim Hanjong"}],last:!0}];return v.jsxs("div",{style:{position:"relative"},children:[v.jsxs(fv,{children:[v.jsx(_A,{}),v.jsx(bA,{text:n})]}),v.jsx(SA,{children:"단체사진 1장"}),v.jsxs(fv,{children:[v.jsx(IA,{blocks:t}),v.jsxs($A,{children:[v.jsxs(FA,{children:["2025 잔향",v.jsx("br",{}),"제 20대 졸업전시위원회"]}),r.map(a=>v.jsx(VA,{title:a.title,rows:a.rows,last:!!a.last},a.title))]})]})]})}const qA=A.div`
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
`,HA=A.div`
  position: relative;
  width: 55%;
  height: 100%;
  flex: 0 0 auto;
`,GA=A.img`
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
`,YA=A.div`
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #f6f6f6 100%);
  z-index: 2;
  width: 20%;
`,QA=A.div`
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
`,dv=A.div`
  margin: 0;
  padding: 0;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`,XA=A.h1`
    font-size: 28px;
    font-weight: 700;
    margin: 0;
 @media (max-width: 640px) {
    font-size: 16px;
 }
`,Kp=A.p`
    margin: 0;
@media (max-width: 640px) {
    font-size: 6px;
 }
`,WA=A(Kp)`
 @media (max-width: 640px) {
    display: none;
 }`;function Mm({nameKor:n,nameEng:t,role:r,sns:a,eMail:o,imgSrc:u,imgAlt:f}){return v.jsxs(qA,{children:[v.jsxs(HA,{children:[v.jsx(GA,{src:u,alt:f}),v.jsx(YA,{})]}),v.jsxs(QA,{children:[v.jsxs(dv,{style:{top:"50px"},children:[v.jsx(XA,{children:n}),v.jsx(Kp,{children:t})]}),v.jsxs(dv,{children:[v.jsx(Kp,{children:r}),Array.isArray(a)&&a.length>0?v.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",margin:"4px 0 0 0"},children:a.map((m,p)=>v.jsx("a",{href:m.url,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"inherit",wordBreak:"break-all"},"aria-label":`${n} ${m.platform}`,children:m.url},`${m.platform}-${p}`))}):null,v.jsx(WA,{children:o?v.jsx("a",{style:{textDecoration:"none",color:"inherit"},href:`mailto:${o}`,children:o}):null})]})]})]})}Mm.defaultProps={sns:[]};Mm.propTypes={nameKor:W.string.isRequired,nameEng:W.string,role:W.string,sns:W.arrayOf(W.shape({platform:W.string.isRequired,url:W.string.isRequired})),eMail:W.string,imgSrc:W.string.isRequired,imgAlt:W.string.isRequired};const ZA=A.div`
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
`,JA=A.div`
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
`,P_=A.p`
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
`,t4=A(P_)`
  margin-left: 32px;
  color: ${n=>n.$active?"#909090":"#Fafafa"};
  font-weight: ${n=>n.$active?"400":"700"};
  @media (max-width: 640px) {
    font-size: 8px;
    margin-left: 16px;
  }
`;function qp({path:n="student",isActive:t=!1,onClick:r}){return v.jsxs(ZA,{onClick:r,children:[v.jsx(P_,{$active:t,children:"교수"}),v.jsx(t4,{$active:t,children:"학생"}),v.jsx(JA,{$active:t})]})}qp.propTypes={path:W.oneOf(["student","professor"]),isActive:W.bool,onClick:W.func};const pv=A.a`
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
`;function th({label:n,href:t=null,active:r=!1,onClick:a,style:o,target:u,rel:f}){const p={"aria-current":r?"page":void 0,"data-active":r?"true":"false",onKeyDown:g=>{a&&(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),a(g))},onClick:a,style:o,$active:r};return t?v.jsx(pv,{href:t,target:u,rel:f,...p,children:n}):v.jsx(pv,{as:"button",type:"button",...p,style:{background:"none",border:0,...o},children:n})}th.propTypes={label:W.string.isRequired,href:W.string,active:W.bool,onClick:W.func,style:W.object,target:W.string,rel:W.string};const mv=A.div`
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
`,gv=A.div`
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
`,L_=A.p`
  width: auto;
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #191919;
  margin: 0;
  @media (max-width: 640px) {
   font-size: 13px;  
 }
`,e4=A(L_)`
  font-size: 13px;
  font-weight: 600;
`;function Om({label:n,style:t,mode:r}){const a="/TU2025gradulate/",u=window.matchMedia("(max-width: 640px)").matches?`${a}icons/dropDownMobileIcon.svg`:`${a}icons/arrowDropdownIcon.svg`;return r==="category"?v.jsxs(mv,{style:t,children:[v.jsx(e4,{children:n}),v.jsx(gv,{children:v.jsx("img",{src:`${a}icons/arrowDropdownIcon.svg`,alt:"dropdownIcon"})})]}):v.jsxs(mv,{style:t,children:[v.jsx(L_,{children:n}),v.jsx(gv,{children:v.jsx("img",{src:u,alt:"dropdownIcon"})})]})}Om.propTypes={label:W.string.isRequired,style:W.object};const n4=A.div`
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
`,i4=A.div`
  display: flex;
  width: 90px;
  height: 20px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  @media (max-width: 640px) {
    width: 52px;  
 }
`,r4=A.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 16px;
  font-weight: ${n=>n.$selected?500:400};
  color: ${n=>n.$selected?"#191919":"#bababa"};
  margin: 0;
  padding: 0;
  @media (max-width: 640px) {
    font-size: 12px;  
 }
`;function z_({options:n,onSelect:t,style:r,isOpen:a,position:o,selected:u}){return v.jsx(n4,{style:r,$open:a,children:n.map((f,m)=>v.jsx(i4,{onClick:()=>t(f),children:v.jsx(r4,{$selected:f===u,children:f})},m))})}z_.propTypes={options:W.arrayOf(W.string).isRequired,onSelect:W.func.isRequired,style:W.object,isOpen:W.bool,position:W.any,selected:W.string};const a4=A.div`
  position: relative;
`;function Vm({label:n,options:t,onSelect:r,style:a,filter:o,mode:u}){const[f,m]=kt.useState(!1),[p,g]=kt.useState({top:0,left:0}),_=kt.useRef(null),b=()=>{if(_.current){const j=_.current.getBoundingClientRect();g({top:j.bottom+window.scrollY,left:j.left+window.scrollX})}m(j=>!j)},S=j=>{r&&r(j),m(!1)};return v.jsxs(a4,{ref:_,style:a,children:[v.jsx("div",{onClick:b,children:v.jsx(Om,{label:n,options:t,onSelect:r,style:{},filter:o,mode:u})}),f&&v.jsx(z_,{options:t,onSelect:S,style:{},isOpen:f,position:p,selected:n})]})}Vm.propTypes={label:W.string.isRequired,options:W.arrayOf(W.string).isRequired,onSelect:W.func.isRequired,style:W.object,filter:W.string};Vm.defaultProps={style:{},filter:""};const s4=A.div`
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
`,o4=A.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    justify-content: flex-start;
    gap: 12px;
`,l4=A.div`
    font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
    font-size: 14px;
    font-weight: 400;
    height: 20px;
    color: ${n=>n.$selected?"#000":"#909090"};
    cursor: pointer;
`;function B_({options:n,isOpen:t,onSelect:r,selected:a}){return v.jsx(s4,{$open:t,children:v.jsx(o4,{children:n.map((o,u)=>v.jsx(l4,{$selected:a===o,onClick:()=>r(o),children:o},u))})})}B_.propTypes={options:W.arrayOf(W.string).isRequired,isOpen:W.bool.isRequired,onSelect:W.func.isRequired,selected:W.oneOfType([W.string,W.number])};const u4=A.div`
    position: relative;
`;function Ul({label:n,options:t,onSelect:r,style:a,mode:o}){const[u,f]=kt.useState(!1),m=kt.useRef(null),p=()=>{f(_=>!_)},g=_=>{r&&r(_),f(!1)};return v.jsxs(u4,{ref:m,style:a,children:[v.jsx("div",{onClick:p,children:v.jsx(Om,{label:n,mode:o})}),u&&v.jsx(B_,{options:t,onSelect:g,isOpen:u,selected:n})]})}Ul.propTypes={label:W.string.isRequired,options:W.arrayOf(W.string).isRequired,onSelect:W.func.isRequired,style:W.object,mode:W.string};Ul.defaultProps={style:{},mode:"category"};const mp=A.div`
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
`,gp=A.div`
  width: 120px;
  height: 100%;
  @media (max-width: 640px) {
    display: none;
  }
`,yp=A.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  @media (max-width: 640px) {
    display: none;
  }
`,vp=A.div`
  display: none;
  @media (max-width: 640px) {
    display: flex;
    justify-content: center;
    width: auto;
  }
`;function $_({onCategoryChange:n,onToggleChange:t,type:r,onSortChange:a,sortLabel:o}){const u={type:r},[f,m]=kt.useState(!1),p=()=>m(tt=>{const ft=!tt;return t&&t(ft),ft}),[g,_]=kt.useState("전체"),[b,S]=kt.useState("All Projects"),j=["전체","산업디자인공학","미디어디자인공학"],U=["장영주","권오재","김 억","김한종","조남주","한민섭","홍성수","김태균"],$=["All Projects","AI & Robot","Edu & Kids","Health Care","IT & Tech","Living","Mobility"],P=["이름순","좋아요순","조회수순","팀작우선","개인작우선"],[X,Q]=kt.useState("이름순"),Z=o||X,ot=tt=>{Q(tt),a&&a(tt)};return q.useEffect(()=>{_(f?U[0]:j[0])},[f]),u.type==="project"?v.jsxs(mp,{children:[v.jsx(gp,{}),v.jsx(yp,{children:$.map(tt=>v.jsx(th,{label:tt,active:b===tt,onClick:()=>{S(tt),n&&n(tt)}},tt))}),v.jsx(vp,{children:v.jsx(Ul,{mode:"category",label:b,options:$,onSelect:tt=>{S(tt),n&&n(tt)}})}),v.jsx(Vm,{label:Z,options:P,onSelect:ot})]}):f?v.jsxs(mp,{children:[v.jsx(gp,{}),v.jsx(yp,{children:U.map(tt=>v.jsx(th,{label:tt,active:g===tt,onClick:()=>{_(tt),n&&n(tt)}},tt))}),v.jsx(vp,{children:v.jsx(Ul,{mode:"category",label:g,options:U,onSelect:tt=>{_(tt),n&&n(tt)}})}),v.jsx(qp,{path:f?"professor":"student",isActive:f,onClick:p})]}):v.jsxs(mp,{children:[v.jsx(gp,{}),v.jsx(yp,{children:j.map(tt=>v.jsx(th,{label:tt,active:g===tt,onClick:()=>{_(tt),n&&n(tt)}},tt))}),v.jsx(vp,{children:v.jsx(Ul,{mode:"category",label:g,options:j,onSelect:tt=>{_(tt),n&&n(tt)}})}),v.jsx(qp,{path:f?"professor":"student",isActive:f,onClick:p})]})}const c4=A.div`
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
`,h4=A.div`
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
`,f4=A.img`
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
`,d4=A.div`
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
`,p4=A.p`
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
`,Uc=A.div`
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
`,Pc=A.p`
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
`,yv=A.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
`,Lc=A.p`
  font-weight: 300;
  margin: 0;
  font-size: 16px;
  line-height: 22.4px;
  color: #000000;
  @media (max-width: 640px) {
    font-size: 10px;
 }
`;function km({nameKor:n,rank:t,eMail:r,education:a,field:o,imgSrc:u,imgAlt:f}){const m=p=>Array.isArray(p)?v.jsx(yv,{children:p.map((g,_)=>v.jsx(Lc,{children:g},_))}):typeof p=="string"&&p?v.jsx(yv,{children:v.jsx(Lc,{children:p})}):null;return v.jsx(c4,{children:v.jsxs(h4,{children:[v.jsx(f4,{src:u,alt:f}),v.jsxs(d4,{children:[v.jsx(p4,{children:n}),v.jsxs(Uc,{children:[v.jsx(Pc,{children:"직위(직급)"}),v.jsx(Lc,{children:t})]}),v.jsxs(Uc,{children:[v.jsx(Pc,{children:"이메일"}),v.jsx(Lc,{children:r})]}),v.jsxs(Uc,{children:[v.jsx(Pc,{children:"약력"}),m(a)]}),v.jsxs(Uc,{children:[v.jsx(Pc,{children:"전문 분야"}),m(o)]})]})]})})}km.propTypes={nameKor:W.string.isRequired,rank:W.string.isRequired,eMail:W.string.isRequired,education:W.oneOfType([W.string,W.arrayOf(W.string)]),field:W.oneOfType([W.string,W.arrayOf(W.string)]),imgSrc:W.string.isRequired,imgAlt:W.string.isRequired};km.defaultProps={nameKor:"홍길동",rank:"교수",eMail:"honggildong@example.com",education:[],field:[],imgSrc:"/TU2025gradulate/thumbnailExample.png",imgAlt:"홍길동 교수의 프로필 이미지"};const Um=JSON.parse('[{"num":0,"nameKor":"강유진","nameEng":"Kang Yujin","role":"Designer","department":1,"professorId":"p04","studentId":2021194003,"eMail":"rkddbwls0421@naver.com","sns":"","imgUrl":"../image/0/portrait.jpg","projectUrl":"","category":"c4","projectNum":45,"team":1,"leader":0},{"num":1,"nameKor":"고명현","nameEng":"Go Myeonghyeon","role":"Designer","department":1,"professorId":"p03","studentId":2019190002,"eMail":"aud4417@tukorea.ac.kr","sns":"","imgUrl":"../image/1/portrait.jpg","projectUrl":"","category":"c0","projectNum":0,"team":0,"leader":""},{"num":2,"nameKor":"고서영","nameEng":"Go Seoyeong","role":"Designer","department":0,"professorId":"p02","studentId":2022190001,"eMail":"rhtjdud2003@naver.com","sns":"","imgUrl":"../image/2/portrait.jpg","projectUrl":"","category":"c2","projectNum":26,"team":1,"leader":0},{"num":3,"nameKor":"고은솔","nameEng":"Ko Eunsol","role":"Designer","department":1,"professorId":"p01","studentId":2021194005,"eMail":"pinetree2021@tukorea.ac.kr","sns":"","imgUrl":"../image/3/portrait.jpg","projectUrl":"","category":"c1","projectNum":24,"team":0,"leader":""},{"num":4,"nameKor":"구예진","nameEng":"Koo Yejin","role":"Designer","department":1,"professorId":"p03","studentId":2022194002,"eMail":"ninejin63@gmail.com","sns":"","imgUrl":"../image/4/portrait.jpg","projectUrl":"","category":"c2","projectNum":27,"team":1,"leader":1},{"num":5,"nameKor":"구인회","nameEng":"Koo Inhoe","role":"Designer","department":0,"professorId":"p02","studentId":2020190001,"eMail":"eric2261@naver.com","sns":"","imgUrl":"../image/5/portrait.jpg","projectUrl":"","category":"c5","projectNum":66,"team":1,"leader":1},{"num":6,"nameKor":"권유빈","nameEng":"Kwon Yoobeen","role":"Designer","department":1,"professorId":"p02","studentId":2020194002,"eMail":"yoovebeen@naver.com","sns":"","imgUrl":"../image/6/portrait.jpg","projectUrl":"","category":"c2","projectNum":26,"team":1,"leader":1},{"num":7,"nameKor":"권지민","nameEng":"Kwon Jimin","role":"Designer","department":1,"professorId":"p03","studentId":2022194038,"eMail":"jmnee0115@naver.com","sns":"","imgUrl":"../image/7/portrait.jpg","projectUrl":"","category":"c4","projectNum":46,"team":0,"leader":""},{"num":8,"nameKor":"김강민","nameEng":"Kim Gangmin","role":"Designer","department":0,"professorId":"p04","studentId":2020192003,"eMail":"min7053@naver.com","sns":"","imgUrl":"../image/8/portrait.jpg","projectUrl":"","category":"c5","projectNum":67,"team":1,"leader":1},{"num":9,"nameKor":"김기윤","nameEng":"Kim Giyun","role":"Designer","department":0,"professorId":"p02","studentId":2020190002,"eMail":"tkenrnen112@naver.com","sns":"","imgUrl":"../image/9/portrait.jpg","projectUrl":"","category":"c5","projectNum":68,"team":1,"leader":0},{"num":10,"nameKor":"김동주","nameEng":"Kim Dongju","role":"Designer","department":0,"professorId":"p00","studentId":2020190005,"eMail":"dongju3144@daum.net","sns":"","imgUrl":"../image/10/portrait.jpg","projectUrl":"","category":"c3","projectNum":34,"team":0,"leader":""},{"num":11,"nameKor":"김민석","nameEng":"Kim Minseok","role":"Designer","department":0,"professorId":"p02","studentId":2020190006,"eMail":"minsuk2468@naver.com","sns":"","imgUrl":"../image/11/portrait.jpg","projectUrl":"","category":"c4","projectNum":47,"team":0,"leader":""},{"num":12,"nameKor":"김세린","nameEng":"Kim Serin","role":"Designer","department":0,"professorId":"p04","studentId":2021192006,"eMail":"kara7094@naver.com","sns":"","imgUrl":"../image/12/portrait.jpg","projectUrl":"","category":"c4","projectNum":48,"team":0,"leader":""},{"num":13,"nameKor":"김소리","nameEng":"Kim Sori","role":"Designer","department":1,"professorId":"p03","studentId":2021194037,"eMail":"mulsik11@gmail.com","sns":"","imgUrl":"../image/13/portrait.jpg","projectUrl":"","category":"c4","projectNum":49,"team":0,"leader":""},{"num":14,"nameKor":"김예린","nameEng":"Kim Yerin","role":"Designer","department":0,"professorId":"p02","studentId":2021190007,"eMail":"ask7240@naver.com","sns":"","imgUrl":"../image/14/portrait.jpg","projectUrl":"","category":"c5","projectNum":69,"team":0,"leader":""},{"num":15,"nameKor":"김예준","nameEng":"Kim Yejun","role":"Designer","department":1,"professorId":"p01","studentId":2020194006,"eMail":"optimusjun15@naver.com","sns":"","imgUrl":"../image/15/portrait.jpg","projectUrl":"","category":"c4","projectNum":50,"team":0,"leader":""},{"num":16,"nameKor":"김윤곤","nameEng":"Kim Yungon","role":"Designer","department":1,"professorId":"p03","studentId":2020194008,"eMail":"yunkon722@naver.com","sns":"","imgUrl":"../image/16/portrait.jpg","projectUrl":"","category":"c0","projectNum":1,"team":0,"leader":""},{"num":17,"nameKor":"김윤서","nameEng":"Kim Yunseo","role":"Designer","department":1,"professorId":"p02","studentId":2021192007,"eMail":"ekdma39@naver.com","sns":"","imgUrl":"../image/17/portrait.jpg","projectUrl":"","category":"c4","projectNum":51,"team":0,"leader":""},{"num":18,"nameKor":"김윤성","nameEng":"Kim Yunseong","role":"Designer","department":0,"professorId":"p00","studentId":2020192038,"eMail":"dbstjd9061@naver.com","sns":"","imgUrl":"../image/18/portrait.jpg","projectUrl":"","category":"c0","projectNum":2,"team":0,"leader":""},{"num":19,"nameKor":"김주은","nameEng":"Kim Jueun","role":"Designer","department":1,"professorId":"p02","studentId":2022194007,"eMail":"kimjueun6648@naver.com","sns":"","imgUrl":"../image/19/portrait.jpg","projectUrl":"","category":"c2","projectNum":28,"team":1,"leader":0},{"num":20,"nameKor":"김지민","nameEng":"Kim Jimin","role":"Designer","department":0,"professorId":"p02","studentId":2020190011,"eMail":"a01039029588@gmail.com","sns":"","imgUrl":"../image/20/portrait.jpg","projectUrl":"","category":"c3","projectNum":35,"team":1,"leader":0},{"num":21,"nameKor":"김지혜","nameEng":"Kim Jihye","role":"Designer","department":0,"professorId":"p05","studentId":2021190012,"eMail":"kjj0209077@naver.com","sns":"","imgUrl":"../image/21/portrait.jpg","projectUrl":"","category":"c5","projectNum":70,"team":1,"leader":1},{"num":22,"nameKor":"김한슬","nameEng":"Kim Hanseul","role":"Designer","department":0,"professorId":"p04","studentId":2021192008,"eMail":"pdl02081616@gmail.com","sns":"","imgUrl":"../image/22/portrait.jpg","projectUrl":"","category":"c3","projectNum":36,"team":0,"leader":""},{"num":23,"nameKor":"남가림","nameEng":"Nam Garim","role":"Designer","department":0,"professorId":"p00","studentId":2021190014,"eMail":"garim0402@naver.com","sns":"","imgUrl":"../image/23/portrait.jpg","projectUrl":"","category":"c5","projectNum":71,"team":1,"leader":1},{"num":24,"nameKor":"남궁두경","nameEng":"Namgoong Doogyung","role":"Designer","department":0,"professorId":"p05","studentId":2020192012,"eMail":"namgoongdg@gmail.com","sns":"","imgUrl":"../image/24/portrait.jpg","projectUrl":"","category":"c0","projectNum":3,"team":1,"leader":1},{"num":25,"nameKor":"노희재","nameEng":"Roe Heejae","role":"Designer","department":0,"professorId":"p02","studentId":2019192013,"eMail":"wjdrl1144@gmail.com","sns":"","imgUrl":"../image/25/portrait.jpg","projectUrl":"","category":"c3","projectNum":37,"team":0,"leader":""},{"num":26,"nameKor":"마은성","nameEng":"Ma Eunseong","role":"Designer","department":0,"professorId":"p05","studentId":2021190016,"eMail":"mes3788@naver.com","sns":"","imgUrl":"../image/26/portrait.jpg","projectUrl":"","category":"c5","projectNum":70,"team":1,"leader":0},{"num":27,"nameKor":"문나라","nameEng":"Moon Nara","role":"Designer","department":0,"professorId":"p02","studentId":2021192009,"eMail":"skfk020529@naver.com","sns":"","imgUrl":"../image/27/portrait.jpg","projectUrl":"","category":"c3","projectNum":38,"team":0,"leader":""},{"num":28,"nameKor":"문지형","nameEng":"Moon Jihyeong","role":"Designer","department":0,"professorId":"p05","studentId":2020192014,"eMail":"dogtable4099@naver.com","sns":"","imgUrl":"../image/28/portrait.jpg","projectUrl":"","category":"c0","projectNum":3,"team":1,"leader":0},{"num":29,"nameKor":"민혜연","nameEng":"Min Hyeyeon","role":"Designer","department":0,"professorId":"p00","studentId":2022192010,"eMail":"ajtlqkf_@naver.com","sns":"","imgUrl":"../image/29/portrait.jpg","projectUrl":"","category":"c2","projectNum":29,"team":0,"leader":""},{"num":30,"nameKor":"박민규","nameEng":"Park Mingyu","role":"Designer","department":1,"professorId":"p03","studentId":2019194041,"eMail":"mingyu6393@naver.com","sns":"","imgUrl":"../image/30/portrait.jpg","projectUrl":"","category":"c0","projectNum":4,"team":0,"leader":""},{"num":31,"nameKor":"박서영","nameEng":"Park Seoyoung","role":"Designer","department":1,"professorId":"p03","studentId":2021192011,"eMail":"pszer0@naver.com","sns":"","imgUrl":"../image/31/portrait.jpg","projectUrl":"","category":"c4","projectNum":52,"team":0,"leader":""},{"num":32,"nameKor":"박예인","nameEng":"Park Yein","role":"Designer","department":1,"professorId":"p01","studentId":2021194013,"eMail":"pyi0413@naver.com","sns":"","imgUrl":"../image/32/portrait.jpg","projectUrl":"","category":"c4","projectNum":45,"team":1,"leader":1},{"num":33,"nameKor":"박예진","nameEng":"Park Yejin","role":"Designer","department":0,"professorId":"p00","studentId":2021190018,"eMail":"yejin6607@naver.com","sns":"","imgUrl":"../image/33/portrait.jpg","projectUrl":"","category":"c5","projectNum":71,"team":1,"leader":0},{"num":34,"nameKor":"박재민","nameEng":"Park Jaemin","role":"Designer","department":1,"professorId":"p03","studentId":2020192016,"eMail":"shiibadog@naver.com","sns":"","imgUrl":"../image/34/portrait.jpg","projectUrl":"","category":"c2","projectNum":27,"team":1,"leader":0},{"num":35,"nameKor":"박정훈","nameEng":"Park Jeonghun","role":"Designer","department":0,"professorId":"p05","studentId":2022192012,"eMail":"hhh8353@naver.com","sns":"","imgUrl":"../image/35/portrait.jpg","projectUrl":"","category":"c2","projectNum":30,"team":0,"leader":""},{"num":36,"nameKor":"박지수","nameEng":"Park Jisoo","role":"Designer","department":1,"professorId":"p03","studentId":2021194014,"eMail":"popopo0128@naver.com","sns":"","imgUrl":"../image/36/portrait.jpg","projectUrl":"","category":"c0","projectNum":5,"team":0,"leader":""},{"num":37,"nameKor":"박해인","nameEng":"Park Haein","role":"Designer","department":0,"professorId":"p06","studentId":2022192014,"eMail":"haein061e@gmail.com","sns":"","imgUrl":"../image/37/portrait.jpg","projectUrl":"","category":"c5","projectNum":72,"team":0,"leader":""},{"num":38,"nameKor":"박현","nameEng":"Park Hyun","role":"Designer","department":0,"professorId":"p04","studentId":2022190039,"eMail":"prefrog2@naver.com","sns":"","imgUrl":"../image/38/portrait.jpg","projectUrl":"","category":"c4","projectNum":53,"team":1,"leader":1},{"num":39,"nameKor":"박혜성","nameEng":"Park Hyeseong","role":"Designer","department":0,"professorId":"p00","studentId":2021190020,"eMail":"hyesungpark1128@gmail.com","sns":"","imgUrl":"../image/39/portrait.jpg","projectUrl":"","category":"c5","projectNum":73,"team":0,"leader":""},{"num":40,"nameKor":"박효정","nameEng":"Park Hyojung","role":"Designer","department":0,"professorId":"p02","studentId":2021190021,"eMail":"lucymrx@naver.com","sns":"","imgUrl":"../image/40/portrait.jpg","projectUrl":"","category":"c4","projectNum":54,"team":0,"leader":""},{"num":41,"nameKor":"배아영","nameEng":"Bae Ayeong","role":"Designer","department":1,"professorId":"p01","studentId":2022194014,"eMail":"f3_ea@naver.com","sns":"","imgUrl":"../image/41/portrait.jpg","projectUrl":"","category":"c0","projectNum":6,"team":0,"leader":""},{"num":42,"nameKor":"배혜림","nameEng":"Bae Hyelim","role":"Designer","department":0,"professorId":"p05","studentId":2021192013,"eMail":"bhl00012@naver.com","sns":"","imgUrl":"../image/42/portrait.jpg","projectUrl":"","category":"c0","projectNum":7,"team":1,"leader":0},{"num":43,"nameKor":"백대한","nameEng":"Baek Daehan","role":"Designer","department":0,"professorId":"p05","studentId":2020192039,"eMail":"qoreogks789@naver.com","sns":"","imgUrl":"../image/43/portrait.jpg","projectUrl":"","category":"c0","projectNum":8,"team":0,"leader":""},{"num":44,"nameKor":"백미나","nameEng":"Baek Mina","role":"Designer","department":0,"professorId":"p06","studentId":2021190023,"eMail":"wbwyhr@gmail.com","sns":"","imgUrl":"../image/44/portrait.jpg","projectUrl":"","category":"c4","projectNum":55,"team":0,"leader":""},{"num":45,"nameKor":"서연주","nameEng":"Seo Yeonju","role":"Designer","department":1,"professorId":"p02","studentId":2022194015,"eMail":"syj0305290529@gmail.com","sns":"","imgUrl":"../image/45/portrait.jpg","projectUrl":"","category":"c2","projectNum":28,"team":1,"leader":1},{"num":46,"nameKor":"서원진","nameEng":"Seo Wonjin","role":"Designer","department":0,"professorId":"p05","studentId":2019152026,"eMail":"tjdnjswls4981@naver.com","sns":"","imgUrl":"../image/46/portrait.jpg","projectUrl":"","category":"c4","projectNum":56,"team":0,"leader":""},{"num":47,"nameKor":"석동현","nameEng":"Suk Donghyun","role":"Designer","department":0,"professorId":"p06","studentId":2020190015,"eMail":"andysuk0108@naver.com","sns":"","imgUrl":"../image/47/portrait.jpg","projectUrl":"","category":"c5","projectNum":66,"team":1,"leader":0},{"num":48,"nameKor":"성수민","nameEng":"Seong Sumin","role":"Designer","department":1,"professorId":"p02","studentId":2020194016,"eMail":"epwyqqu309@gmail.com","sns":"","imgUrl":"../image/48/portrait.jpg","projectUrl":"","category":"c3","projectNum":39,"team":1,"leader":1},{"num":49,"nameKor":"성유승","nameEng":"Sung Yuseung","role":"Designer","department":1,"professorId":"p02","studentId":2019122021,"eMail":"usngsung0830@naver.com","sns":"","imgUrl":"../image/49/portrait.jpg","projectUrl":"","category":"c1","projectNum":25,"team":1,"leader":0},{"num":50,"nameKor":"송지원","nameEng":"Song Jiwon","role":"Designer","department":0,"professorId":"p04","studentId":2021190024,"eMail":"wldnjs0762@naver.com","sns":"","imgUrl":"../image/50/portrait.jpg","projectUrl":"","category":"c0","projectNum":9,"team":1,"leader":1},{"num":51,"nameKor":"신산하","nameEng":"Shin Sanha","role":"Designer","department":1,"professorId":"p02","studentId":2021192014,"eMail":"sanha@tukorea.ac.kr","sns":"","imgUrl":"../image/51/portrait.jpg","projectUrl":"","category":"c3","projectNum":39,"team":1,"leader":0},{"num":52,"nameKor":"신주혜","nameEng":"Shin Juhye","role":"Designer","department":0,"professorId":"p05","studentId":2022190019,"eMail":"emily3652@naver.com","sns":"","imgUrl":"../image/52/portrait.jpg","projectUrl":"","category":"c0","projectNum":10,"team":1,"leader":0},{"num":53,"nameKor":"신주희","nameEng":"Shin Juhui","role":"Designer","department":1,"professorId":"p07","studentId":2022194016,"eMail":"lucytomato@naver.com","sns":"","imgUrl":"../image/53/portrait.jpg","projectUrl":"","category":"c3","projectNum":40,"team":0,"leader":""},{"num":54,"nameKor":"심태섭","nameEng":"Sim Taeseob","role":"Designer","department":1,"professorId":"p01","studentId":2020194017,"eMail":"1212sts@naver.com","sns":"","imgUrl":"../image/54/portrait.jpg","projectUrl":"","category":"c0","projectNum":11,"team":0,"leader":""},{"num":55,"nameKor":"안상은","nameEng":"An Sangeun","role":"Designer","department":1,"professorId":"p03","studentId":2022194018,"eMail":"itkddms@naver.com","sns":"","imgUrl":"../image/55/portrait.jpg","projectUrl":"","category":"c4","projectNum":57,"team":1,"leader":1},{"num":56,"nameKor":"염수민","nameEng":"Yeom Sumin","role":"Designer","department":1,"professorId":"p01","studentId":2022194021,"eMail":"yeomsumin030827@gmail.com","sns":"","imgUrl":"../image/56/portrait.jpg","projectUrl":"","category":"c4","projectNum":58,"team":0,"leader":""},{"num":57,"nameKor":"유수현","nameEng":"Ryu Soohyun","role":"Designer","department":0,"professorId":"p06","studentId":2022192019,"eMail":"suhyeon9145@naver.com","sns":"","imgUrl":"../image/57/portrait.jpg","projectUrl":"","category":"c2","projectNum":31,"team":1,"leader":1},{"num":58,"nameKor":"윤모란","nameEng":"Yoon Moran","role":"Designer","department":0,"professorId":"p06","studentId":2022190024,"eMail":"moran_a_486@naver.com","sns":"","imgUrl":"../image/58/portrait.jpg","projectUrl":"","category":"c2","projectNum":31,"team":1,"leader":0},{"num":59,"nameKor":"윤서희","nameEng":"Yoon Seohee","role":"Designer","department":0,"professorId":"p00","studentId":2020192021,"eMail":"dbstjgml000@naver.com","sns":"","imgUrl":"../image/59/portrait.jpg","projectUrl":"","category":"c0","projectNum":12,"team":0,"leader":""},{"num":60,"nameKor":"윤재익","nameEng":"Yun Jaeik","role":"Designer","department":1,"professorId":"p01","studentId":2020194018,"eMail":"jwodlr10014@naver.com","sns":"","imgUrl":"../image/60/portrait.jpg","projectUrl":"","category":"c0","projectNum":13,"team":0,"leader":""},{"num":61,"nameKor":"이교연","nameEng":"Lee Gyoyeon","role":"Designer","department":0,"professorId":"p01","studentId":2022192038,"eMail":"grace121516@naver.com","sns":"","imgUrl":"../image/61/portrait.jpg","projectUrl":"","category":"c2","projectNum":32,"team":0,"leader":""},{"num":62,"nameKor":"이도훈","nameEng":"Lee Dohun","role":"Designer","department":0,"professorId":"p02","studentId":2020190025,"eMail":"bestson0137@naver.com","sns":"","imgUrl":"../image/62/portrait.jpg","projectUrl":"","category":"c5","projectNum":74,"team":0,"leader":""},{"num":63,"nameKor":"이민욱","nameEng":"Lee Minuk","role":"Designer","department":1,"professorId":"p01","studentId":2020194021,"eMail":"lmu0306@naver.com","sns":"","imgUrl":"../image/63/portrait.jpg","projectUrl":"","category":"c4","projectNum":59,"team":0,"leader":""},{"num":64,"nameKor":"이상","nameEng":"Lee Sang","role":"Designer","department":0,"professorId":"p02","studentId":2020190027,"eMail":"23isgood@naver.com","sns":"","imgUrl":"../image/64/portrait.jpg","projectUrl":"","category":"c3","projectNum":35,"team":1,"leader":1},{"num":65,"nameKor":"이영","nameEng":"Lee Young","role":"Designer","department":1,"professorId":"p03","studentId":2022194025,"eMail":"young2003_@naver.com","sns":"","imgUrl":"../image/65/portrait.jpg","projectUrl":"","category":"c4","projectNum":57,"team":1,"leader":0},{"num":66,"nameKor":"이영재","nameEng":"Lee Youngjae","role":"Designer","department":1,"professorId":"p03","studentId":2020194023,"eMail":"buwong123@naver.com","sns":"","imgUrl":"../image/66/portrait.jpg","projectUrl":"","category":"c0","projectNum":14,"team":1,"leader":0},{"num":67,"nameKor":"이웅찬","nameEng":"Lee Woongchan","role":"Designer","department":0,"professorId":"p02","studentId":2020192028,"eMail":"dldndcks01@naver.com","sns":"","imgUrl":"../image/67/portrait.jpg","projectUrl":"","category":"c3","projectNum":41,"team":0,"leader":""},{"num":68,"nameKor":"이준오","nameEng":"Lee Juno","role":"Designer","department":0,"professorId":"p00","studentId":2020190030,"eMail":"ljuno421@naver.com","sns":"","imgUrl":"../image/68/portrait.jpg","projectUrl":"","category":"c0","projectNum":15,"team":1,"leader":1},{"num":69,"nameKor":"이지민","nameEng":"Lee Jimin","role":"Designer","department":1,"professorId":"p02","studentId":2020194026,"eMail":"ibs7533@naver.com","sns":"","imgUrl":"../image/69/portrait.jpg","projectUrl":"","category":"c1","projectNum":25,"team":1,"leader":1},{"num":70,"nameKor":"이지현","nameEng":"Lee Jihyeon","role":"Designer","department":0,"professorId":"p04","studentId":2022192023,"eMail":"dlwlgus1102@naver.com","sns":"","imgUrl":"../image/70/portrait.jpg","projectUrl":"","category":"c5","projectNum":67,"team":1,"leader":0},{"num":71,"nameKor":"이채연","nameEng":"Lee Chaeyeon","role":"Designer","department":1,"professorId":"p07","studentId":2021194022,"eMail":"cvgh6835@naver.com","sns":"","imgUrl":"../image/71/portrait.jpg","projectUrl":"","category":"c0","projectNum":16,"team":0,"leader":""},{"num":72,"nameKor":"이채원","nameEng":"Lee Chaewon","role":"Designer","department":0,"professorId":"p06","studentId":2022192024,"eMail":"chaerry3907@naver.com","sns":"","imgUrl":"../image/72/portrait.jpg","projectUrl":"","category":"c0","projectNum":7,"team":1,"leader":1},{"num":73,"nameKor":"이채원","nameEng":"Lee Chaewon","role":"Designer","department":1,"professorId":"p03","studentId":2021194023,"eMail":"coehfdl2222@naver.com","sns":"","imgUrl":"../image/73/portrait.jpg","projectUrl":"","category":"c0","projectNum":14,"team":1,"leader":1},{"num":74,"nameKor":"임세준","nameEng":"Im Sejun","role":"Designer","department":0,"professorId":"p04","studentId":2019190043,"eMail":"helicat123@naver.com","sns":"","imgUrl":"../image/74/portrait.jpg","projectUrl":"","category":"c5","projectNum":75,"team":1,"leader":1},{"num":75,"nameKor":"임소이","nameEng":"Yim Soie","role":"Designer","department":0,"professorId":"p05","studentId":2022190030,"eMail":"soie0410@naver.com","sns":"","imgUrl":"../image/75/portrait.jpg","projectUrl":"","category":"c0","projectNum":17,"team":1,"leader":1},{"num":76,"nameKor":"임종석","nameEng":"Lim Jongseok","role":"Designer","department":0,"professorId":"p06","studentId":2020192032,"eMail":"rimjs01@naver.com","sns":"","imgUrl":"../image/76/portrait.jpg","projectUrl":"","category":"c0","projectNum":18,"team":0,"leader":""},{"num":77,"nameKor":"전준범","nameEng":"Jeon Junbeom","role":"Designer","department":1,"professorId":"p01","studentId":2021194028,"eMail":"jbjeon0814@gmail.com","sns":"","imgUrl":"../image/77/portrait.jpg","projectUrl":"","category":"c4","projectNum":60,"team":0,"leader":""},{"num":78,"nameKor":"정문선","nameEng":"Jung Moonsun","role":"Designer","department":0,"professorId":"p02","studentId":2020190033,"eMail":"munseon9822@naver.com","sns":"","imgUrl":"../image/78/portrait.jpg","projectUrl":"","category":"c3","projectNum":42,"team":0,"leader":""},{"num":79,"nameKor":"정민호","nameEng":"Jung Minho","role":"Designer","department":0,"professorId":"p04","studentId":2020190034,"eMail":"jmh011014@naver.com","sns":"","imgUrl":"../image/79/portrait.jpg","projectUrl":"","category":"c5","projectNum":68,"team":1,"leader":1},{"num":80,"nameKor":"정유진","nameEng":"Jung Yuzin","role":"Designer","department":0,"professorId":"p05","studentId":2022190033,"eMail":"akf0301@naver.com","sns":"","imgUrl":"../image/80/portrait.jpg","projectUrl":"","category":"c5","projectNum":76,"team":0,"leader":""},{"num":81,"nameKor":"정지원","nameEng":"Jung Jiwon","role":"Designer","department":0,"professorId":"p06","studentId":2022192025,"eMail":"marcellar030328@naver.com","sns":"","imgUrl":"../image/81/portrait.jpg","projectUrl":"","category":"c0","projectNum":17,"team":1,"leader":0},{"num":82,"nameKor":"정혜원","nameEng":"Jeong Hyewon","role":"Designer","department":0,"professorId":"p06","studentId":2021190034,"eMail":"jeonghyewon020705@naver.com","sns":"","imgUrl":"../image/82/portrait.jpg","projectUrl":"","category":"c0","projectNum":10,"team":1,"leader":1},{"num":83,"nameKor":"정혜조","nameEng":"Jeong Hyejo","role":"Designer","department":0,"professorId":"p00","studentId":2022192028,"eMail":"hyejo5614@naver.com","sns":"","imgUrl":"../image/83/portrait.jpg","projectUrl":"","category":"c4","projectNum":61,"team":0,"leader":""},{"num":84,"nameKor":"정호균","nameEng":"Jeong Hokyun","role":"Designer","department":1,"professorId":"p01","studentId":2020194031,"eMail":"hohokyun@naver.com","sns":"","imgUrl":"../image/84/portrait.jpg","projectUrl":"","category":"c4","projectNum":62,"team":0,"leader":""},{"num":85,"nameKor":"조선화","nameEng":"Jo Sunhwa","role":"Designer","department":0,"professorId":"p04","studentId":2022192039,"eMail":"jo5629@naver.com","sns":"","imgUrl":"../image/85/portrait.jpg","projectUrl":"","category":"c4","projectNum":53,"team":1,"leader":0},{"num":86,"nameKor":"조채빈","nameEng":"Cho Chaebin","role":"Designer","department":0,"professorId":"p00","studentId":2021192029,"eMail":"cheabin0000@naver.com","sns":"","imgUrl":"../image/86/portrait.jpg","projectUrl":"","category":"c0","projectNum":19,"team":0,"leader":""},{"num":87,"nameKor":"주예지","nameEng":"Ju Yeji","role":"Designer","department":1,"professorId":"p03","studentId":2022194040,"eMail":"jooyeiji@naver.com","sns":"","imgUrl":"../image/87/portrait.jpg","projectUrl":"","category":"c0","projectNum":20,"team":0,"leader":""},{"num":88,"nameKor":"진세원","nameEng":"Jin Sewon","role":"Designer","department":0,"professorId":"p00","studentId":2022192030,"eMail":"sewoneee@naver.com","sns":"","imgUrl":"../image/88/portrait.jpg","projectUrl":"","category":"c0","projectNum":15,"team":1,"leader":0},{"num":89,"nameKor":"진효민","nameEng":"Jin Hyomin","role":"Designer","department":0,"professorId":"p07","studentId":2022190040,"eMail":"jhm8912@naver.com","sns":"","imgUrl":"../image/89/portrait.jpg","projectUrl":"","category":"c4","projectNum":63,"team":0,"leader":""},{"num":90,"nameKor":"차소이","nameEng":"Cha Soyi","role":"Designer","department":0,"professorId":"p06","studentId":2022192040,"eMail":"osjj2202@naver.com","sns":"","imgUrl":"../image/90/portrait.jpg","projectUrl":"","category":"c0","projectNum":21,"team":0,"leader":""},{"num":91,"nameKor":"차한비","nameEng":"Cha Hanbi","role":"Designer","department":0,"professorId":"p02","studentId":2022192031,"eMail":"cha4786@naver.com","sns":"","imgUrl":"../image/91/portrait.jpg","projectUrl":"","category":"c2","projectNum":33,"team":0,"leader":""},{"num":92,"nameKor":"최가현","nameEng":"Choi Gahyun","role":"Designer","department":1,"professorId":"p07","studentId":2022194034,"eMail":"poiulkjhmnb098@naver.com","sns":"","imgUrl":"../image/92/portrait.jpg","projectUrl":"","category":"c3","projectNum":43,"team":0,"leader":""},{"num":93,"nameKor":"한채원","nameEng":"Han Chaewon","role":"Designer","department":0,"professorId":"p04","studentId":2021190036,"eMail":"09clara@naver.com","sns":"","imgUrl":"../image/93/portrait.jpg","projectUrl":"","category":"c4","projectNum":64,"team":0,"leader":""},{"num":94,"nameKor":"함은서","nameEng":"Ham Eunseo","role":"Designer","department":1,"professorId":"p03","studentId":2021192034,"eMail":"hamunseo0894@naver.com","sns":"","imgUrl":"../image/94/portrait.jpg","projectUrl":"","category":"c0","projectNum":22,"team":0,"leader":""},{"num":95,"nameKor":"허도윤","nameEng":"Heo Doyun","role":"Designer","department":1,"professorId":"p03","studentId":2022194041,"eMail":"saver2075@icloud.com","sns":"","imgUrl":"../image/95/portrait.jpg","projectUrl":"","category":"c3","projectNum":44,"team":0,"leader":""},{"num":96,"nameKor":"허지유","nameEng":"Heo Jiyu","role":"Designer","department":0,"professorId":"p04","studentId":2021192035,"eMail":"jjoojjoo0314@naver.com","sns":"","imgUrl":"../image/96/portrait.jpg","projectUrl":"","category":"c0","projectNum":9,"team":1,"leader":0},{"num":97,"nameKor":"홍승재","nameEng":"Hong Seungjae","role":"Designer","department":0,"professorId":"p02","studentId":2020192036,"eMail":"h010505@naver.com","sns":"","imgUrl":"../image/97/portrait.jpg","projectUrl":"","category":"c4","projectNum":65,"team":0,"leader":""},{"num":98,"nameKor":"홍지우","nameEng":"Hong Jiwoo","role":"Designer","department":0,"professorId":"p04","studentId":2021192036,"eMail":"hongjiwoo222@naver.com","sns":"","imgUrl":"../image/98/portrait.jpg","projectUrl":"","category":"c5","projectNum":75,"team":1,"leader":0},{"num":99,"nameKor":"황수정","nameEng":"Hwang Sujeong","role":"Designer","department":0,"professorId":"p05","studentId":2022190036,"eMail":"zzxcvvb12@gmail.com","sns":"","imgUrl":"../image/99/portrait.jpg","projectUrl":"","category":"c0","projectNum":23,"team":0,"leader":""}]'),m4=[{id:"p00",nameKor:"장영주",nameEng:"Jang Youngjoo",rank:"학부장, 교수",email:"jyj@tukorea.ac.kr",education:["㈜LG 전자 디자인 연구소","㈜인터디자인 디자인 기획실장","한국디지털디자인학회 이사","경기도 시흥시 정책기획단 정책위원","제품디자인·브랜드 개발센터 [EH]책임교수","디자인비지니스혁신 센터장"],field:["제품디자인·브랜드 개발","디자인 조직과 협동적 Process","제품디자인과 산업기술의 통합적 시스템 구축"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524695988100.jpg"},{id:"p01",nameKor:"권오재",nameEng:"Kwon Ojae",rank:"교수",email:"kwsokw@tukorea.ac.kr",education:["임시 데이터","임시 데이터","임시 데이터","임시 데이터"],field:["임시 데이터","임시 데이터","임시 데이터","임시 데이터"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524642556100.jpg"},{id:"p02",nameKor:"김 억",nameEng:"Kim Eok",rank:"교수, 학생처장",email:"kimeok@tukorea.ac.kr",education:["㈜LG전자 디자인경영센터 선임연구원","KAIST 총동문회 이사","한국산업디자이너협회 이사 / 한국서비스디자인학회 이사","한국디자인기초조형학회 / 한국디자인학회 이사","디자인융합전문대학원 사업단장"],field:["디자인 전략 및 기획","서비스디자인 및 PSS(Product-Service System) 개발","도시 공공 디자인"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524658322100.jpg"},{id:"p03",nameKor:"김한종",nameEng:"Kim Hanjong",rank:"조교수, PD교수",email:"hanjongkim@tukorea.ac.kr",education:["AR 기반의 인터랙티브 제품 프로토타이핑 도구 개발","이동형음압병동의 디자인 요구사항 수립 연구","이동형음압병동 설계를 위한 디자인 도구 개발","한국기계연구원 산업용 SW UX/UI 가이드라인 개발"],field:["Web 기반 3D 그래픽스","SW 시스템 디자인 / 프론트엔드 개발","디자인 지원 도구 개발"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524669896100.jpg"},{id:"p04",nameKor:"조남주",nameEng:"Jo Namjoo",rank:"교수,특별보좌역",email:"njjoh@tukorea.ac.kr",education:["임시 데이터","임시 데이터","임시 데이터","임시 데이터"],field:["가구 디자인 엔지니어링","지속가능한 공공디자인","제품디자인 엔지니어링"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524711232100.jpg"},{id:"p05",nameKor:"한민섭",nameEng:"Han Minseop",rank:"부교수",email:"mshan@tukorea.ac.kr",education:["CISD정보저장기기 연구센터 전문연구원","㈜코닝 정밀소재 책임연구원","㈜삼성전자 생산기술연구소 책임연구원"],field:["나노/마이크로 초정밀 미세 가공 공정","Equipment H/W 설계 및 시뮬레이션","융복합 가공 시스템 설계"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524614469100.jpg"},{id:"p06",nameKor:"홍성수",nameEng:"Hong Seongsu",rank:"교수, 국제처장",email:"hss@tukorea.ac.kr",education:["3차원 의료영상시스템(MRI) 제품설계 및 디자인","다족형견마로봇 / 헬스케어로봇 / 재활보조로봇","식사보조로봇/ 수중로봇/ 청소로봇 / 웨어러블 로봇","협동로봇/ 자율주행로봇/ 순찰로봇/ 공항안내로봇 등 90여종 로봇 개발"],field:["로봇 시스템 개발/ 로봇디자인/ HRI 디자인","로봇 문화콘텐츠 기술개발","신기술 전시기획/ 전시시스템개발"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524724386100.jpg"},{id:"p07",nameKor:"김태균",nameEng:"Kim Taekyun",rank:"조교수, 진로취업지도교수",email:"tgkim1design@tukorea.ac.kr",education:["영국, 영국 국제디자인박람회전시 ‘London 100% Design‘ 초청 출품","중국, SUPER DESIGNERS: Exploration of Creative Forms, The Boundaries of Design Forms 초청 출품","INNOCHINA 대상","나는글로벌벤처다 동상","Spark Awards-Silver"],field:["AI 기반 제품·공공시설물 디자인 실무·방법론","UX 중심 디자인 전략·개발","지식 주도 디자인 아이디에이션 기반 실무 디자인 설계 및 교수법"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1724738930608100.jpg"}],Gl=JSON.parse('[{"members":[1],"category":"c0","projectNum":0,"titleKor":"한국어 타이틀 1","titleEng":"EngTitle 1","galleryCount":1,"description":"작품 설명 내용"},{"members":[16],"category":"c0","projectNum":1,"titleKor":"한국어 타이틀 2","titleEng":"EngTitle 2","galleryCount":1,"description":"작품 설명 내용"},{"members":[18],"category":"c0","projectNum":2,"titleKor":"한국어 타이틀 3","titleEng":"EngTitle 3","galleryCount":1,"description":"작품 설명 내용"},{"members":[24,28],"category":"c0","projectNum":3,"titleKor":"한국어 타이틀 4","titleEng":"EngTitle 4","galleryCount":1,"description":"작품 설명 내용"},{"members":[30],"category":"c0","projectNum":4,"titleKor":"한국어 타이틀 5","titleEng":"EngTitle 5","galleryCount":1,"description":"작품 설명 내용"},{"members":[36],"category":"c0","projectNum":5,"titleKor":"한국어 타이틀 6","titleEng":"EngTitle 6","galleryCount":1,"description":"작품 설명 내용"},{"members":[41],"category":"c0","projectNum":6,"titleKor":"한국어 타이틀 7","titleEng":"EngTitle 7","galleryCount":1,"description":"작품 설명 내용"},{"members":[72,42],"category":"c0","projectNum":7,"titleKor":"한국어 타이틀 8","titleEng":"EngTitle 8","galleryCount":1,"description":"작품 설명 내용"},{"members":[43],"category":"c0","projectNum":8,"titleKor":"한국어 타이틀 9","titleEng":"EngTitle 9","galleryCount":1,"description":"작품 설명 내용"},{"members":[50,96],"category":"c0","projectNum":9,"titleKor":"한국어 타이틀 10","titleEng":"EngTitle 10","galleryCount":1,"description":"작품 설명 내용"},{"members":[82,52],"category":"c0","projectNum":10,"titleKor":"한국어 타이틀 11","titleEng":"EngTitle 11","galleryCount":1,"description":"작품 설명 내용"},{"members":[54],"category":"c0","projectNum":11,"titleKor":"한국어 타이틀 12","titleEng":"EngTitle 12","galleryCount":1,"description":"작품 설명 내용"},{"members":[59],"category":"c0","projectNum":12,"titleKor":"한국어 타이틀 13","titleEng":"EngTitle 13","galleryCount":1,"description":"작품 설명 내용"},{"members":[60],"category":"c0","projectNum":13,"titleKor":"한국어 타이틀 14","titleEng":"EngTitle 14","galleryCount":1,"description":"작품 설명 내용"},{"members":[73,66],"category":"c0","projectNum":14,"titleKor":"한국어 타이틀 15","titleEng":"EngTitle 15","galleryCount":1,"description":"작품 설명 내용"},{"members":[68,88],"category":"c0","projectNum":15,"titleKor":"한국어 타이틀 16","titleEng":"EngTitle 16","galleryCount":1,"description":"작품 설명 내용"},{"members":[71],"category":"c0","projectNum":16,"titleKor":"한국어 타이틀 17","titleEng":"EngTitle 17","galleryCount":1,"description":"작품 설명 내용"},{"members":[75,81],"category":"c0","projectNum":17,"titleKor":"한국어 타이틀 18","titleEng":"EngTitle 18","galleryCount":1,"description":"작품 설명 내용"},{"members":[76],"category":"c0","projectNum":18,"titleKor":"한국어 타이틀 19","titleEng":"EngTitle 19","galleryCount":1,"description":"작품 설명 내용"},{"members":[86],"category":"c0","projectNum":19,"titleKor":"한국어 타이틀 20","titleEng":"EngTitle 20","galleryCount":1,"description":"작품 설명 내용"},{"members":[87],"category":"c0","projectNum":20,"titleKor":"한국어 타이틀 21","titleEng":"EngTitle 21","galleryCount":1,"description":"작품 설명 내용"},{"members":[90],"category":"c0","projectNum":21,"titleKor":"한국어 타이틀 22","titleEng":"EngTitle 22","galleryCount":1,"description":"작품 설명 내용"},{"members":[94],"category":"c0","projectNum":22,"titleKor":"한국어 타이틀 23","titleEng":"EngTitle 23","galleryCount":1,"description":"작품 설명 내용"},{"members":[99],"category":"c0","projectNum":23,"titleKor":"한국어 타이틀 24","titleEng":"EngTitle 24","galleryCount":1,"description":"작품 설명 내용"},{"members":[3],"category":"c1","projectNum":24,"titleKor":"한국어 타이틀 25","titleEng":"EngTitle 25","galleryCount":1,"description":"작품 설명 내용"},{"members":[69,49],"category":"c1","projectNum":25,"titleKor":"한국어 타이틀 26","titleEng":"EngTitle 26","galleryCount":1,"description":"작품 설명 내용"},{"members":[6,2],"category":"c2","projectNum":26,"titleKor":"한국어 타이틀 27","titleEng":"EngTitle 27","galleryCount":1,"description":"작품 설명 내용"},{"members":[4,34],"category":"c2","projectNum":27,"titleKor":"한국어 타이틀 28","titleEng":"EngTitle 28","galleryCount":1,"description":"작품 설명 내용"},{"members":[54,19],"category":"c2","projectNum":28,"titleKor":"한국어 타이틀 29","titleEng":"EngTitle 29","galleryCount":1,"description":"작품 설명 내용"},{"members":[29],"category":"c2","projectNum":29,"titleKor":"한국어 타이틀 30","titleEng":"EngTitle 30","galleryCount":1,"description":"작품 설명 내용"},{"members":[35],"category":"c2","projectNum":30,"titleKor":"한국어 타이틀 31","titleEng":"EngTitle 31","galleryCount":1,"description":"작품 설명 내용"},{"members":[57,58],"category":"c2","projectNum":31,"titleKor":"한국어 타이틀 32","titleEng":"EngTitle 32","galleryCount":1,"description":"작품 설명 내용"},{"members":[61],"category":"c2","projectNum":32,"titleKor":"한국어 타이틀 33","titleEng":"EngTitle 33","galleryCount":1,"description":"작품 설명 내용"},{"members":[91],"category":"c2","projectNum":33,"titleKor":"한국어 타이틀 34","titleEng":"EngTitle 34","galleryCount":1,"description":"작품 설명 내용"},{"members":[10],"category":"c3","projectNum":34,"titleKor":"한국어 타이틀 35","titleEng":"EngTitle 35","galleryCount":1,"description":"작품 설명 내용"},{"members":[64,20],"category":"c3","projectNum":35,"titleKor":"한국어 타이틀 36","titleEng":"EngTitle 36","galleryCount":1,"description":"작품 설명 내용"},{"members":[22],"category":"c3","projectNum":36,"titleKor":"한국어 타이틀 37","titleEng":"EngTitle 37","galleryCount":1,"description":"작품 설명 내용"},{"members":[25],"category":"c3","projectNum":37,"titleKor":"한국어 타이틀 38","titleEng":"EngTitle 38","galleryCount":1,"description":"작품 설명 내용"},{"members":[27],"category":"c3","projectNum":38,"titleKor":"한국어 타이틀 39","titleEng":"EngTitle 39","galleryCount":1,"description":"작품 설명 내용"},{"members":[48,51],"category":"c3","projectNum":39,"titleKor":"한국어 타이틀 40","titleEng":"EngTitle 40","galleryCount":1,"description":"작품 설명 내용"},{"members":[53],"category":"c3","projectNum":40,"titleKor":"한국어 타이틀 41","titleEng":"EngTitle 41","galleryCount":1,"description":"작품 설명 내용"},{"members":[67],"category":"c3","projectNum":41,"titleKor":"한국어 타이틀 42","titleEng":"EngTitle 42","galleryCount":1,"description":"작품 설명 내용"},{"members":[78],"category":"c3","projectNum":42,"titleKor":"한국어 타이틀 43","titleEng":"EngTitle 43","galleryCount":1,"description":"작품 설명 내용"},{"members":[92],"category":"c3","projectNum":43,"titleKor":"한국어 타이틀 44","titleEng":"EngTitle 44","galleryCount":1,"description":"작품 설명 내용"},{"members":[95],"category":"c3","projectNum":44,"titleKor":"한국어 타이틀 45","titleEng":"EngTitle 45","galleryCount":1,"description":"작품 설명 내용"},{"members":[32,0],"category":"c4","projectNum":45,"titleKor":"한국어 타이틀 46","titleEng":"EngTitle 46","galleryCount":1,"description":"작품 설명 내용"},{"members":[7],"category":"c4","projectNum":46,"titleKor":"한국어 타이틀 47","titleEng":"EngTitle 47","galleryCount":1,"description":"작품 설명 내용"},{"members":[11],"category":"c4","projectNum":47,"titleKor":"한국어 타이틀 48","titleEng":"EngTitle 48","galleryCount":1,"description":"작품 설명 내용"},{"members":[12],"category":"c4","projectNum":48,"titleKor":"한국어 타이틀 49","titleEng":"EngTitle 49","galleryCount":1,"description":"작품 설명 내용"},{"members":[13],"category":"c4","projectNum":49,"titleKor":"한국어 타이틀 50","titleEng":"EngTitle 50","galleryCount":1,"description":"작품 설명 내용"},{"members":[15],"category":"c4","projectNum":50,"titleKor":"한국어 타이틀 51","titleEng":"EngTitle 51","galleryCount":1,"description":"작품 설명 내용"},{"members":[17],"category":"c4","projectNum":51,"titleKor":"한국어 타이틀 52","titleEng":"EngTitle 52","galleryCount":1,"description":"작품 설명 내용"},{"members":[31],"category":"c4","projectNum":52,"titleKor":"한국어 타이틀 53","titleEng":"EngTitle 53","galleryCount":1,"description":"작품 설명 내용"},{"members":[38,85],"category":"c4","projectNum":53,"titleKor":"한국어 타이틀 54","titleEng":"EngTitle 54","galleryCount":1,"description":"작품 설명 내용"},{"members":[40],"category":"c4","projectNum":54,"titleKor":"한국어 타이틀 55","titleEng":"EngTitle 55","galleryCount":1,"description":"작품 설명 내용"},{"members":[44],"category":"c4","projectNum":55,"titleKor":"한국어 타이틀 56","titleEng":"EngTitle 56","galleryCount":1,"description":"작품 설명 내용"},{"members":[46],"category":"c4","projectNum":56,"titleKor":"한국어 타이틀 57","titleEng":"EngTitle 57","galleryCount":1,"description":"작품 설명 내용"},{"members":[55,65],"category":"c4","projectNum":57,"titleKor":"한국어 타이틀 58","titleEng":"EngTitle 58","galleryCount":1,"description":"작품 설명 내용"},{"members":[56],"category":"c4","projectNum":58,"titleKor":"한국어 타이틀 59","titleEng":"EngTitle 59","galleryCount":1,"description":"작품 설명 내용"},{"members":[63],"category":"c4","projectNum":59,"titleKor":"한국어 타이틀 60","titleEng":"EngTitle 60","galleryCount":1,"description":"작품 설명 내용"},{"members":[77],"category":"c4","projectNum":60,"titleKor":"한국어 타이틀 61","titleEng":"EngTitle 61","galleryCount":1,"description":"작품 설명 내용"},{"members":[83],"category":"c4","projectNum":61,"titleKor":"한국어 타이틀 62","titleEng":"EngTitle 62","galleryCount":1,"description":"작품 설명 내용"},{"members":[84],"category":"c4","projectNum":62,"titleKor":"한국어 타이틀 63","titleEng":"EngTitle 63","galleryCount":1,"description":"작품 설명 내용"},{"members":[89],"category":"c4","projectNum":63,"titleKor":"한국어 타이틀 64","titleEng":"EngTitle 64","galleryCount":1,"description":"작품 설명 내용"},{"members":[93],"category":"c4","projectNum":64,"titleKor":"한국어 타이틀 65","titleEng":"EngTitle 65","galleryCount":1,"description":"작품 설명 내용"},{"members":[97],"category":"c4","projectNum":65,"titleKor":"한국어 타이틀 66","titleEng":"EngTitle 66","galleryCount":1,"description":"작품 설명 내용"},{"members":[5,47],"category":"c5","projectNum":66,"titleKor":"한국어 타이틀 67","titleEng":"EngTitle 67","galleryCount":1,"description":"작품 설명 내용"},{"members":[8,70],"category":"c5","projectNum":67,"titleKor":"한국어 타이틀 68","titleEng":"EngTitle 68","galleryCount":1,"description":"작품 설명 내용"},{"members":[79,9],"category":"c5","projectNum":68,"titleKor":"한국어 타이틀 69","titleEng":"EngTitle 69","galleryCount":1,"description":"작품 설명 내용"},{"members":[14],"category":"c5","projectNum":69,"titleKor":"한국어 타이틀 70","titleEng":"EngTitle 70","galleryCount":1,"description":"작품 설명 내용"},{"members":[21,26],"category":"c5","projectNum":70,"titleKor":"한국어 타이틀 71","titleEng":"EngTitle 71","galleryCount":1,"description":"작품 설명 내용"},{"members":[23,33],"category":"c5","projectNum":71,"titleKor":"한국어 타이틀 72","titleEng":"EngTitle 72","galleryCount":1,"description":"작품 설명 내용"},{"members":[37],"category":"c5","projectNum":72,"titleKor":"한국어 타이틀 73","titleEng":"EngTitle 73","galleryCount":1,"description":"작품 설명 내용"},{"members":[39],"category":"c5","projectNum":73,"titleKor":"한국어 타이틀 74","titleEng":"EngTitle 74","galleryCount":1,"description":"작품 설명 내용"},{"members":[62],"category":"c5","projectNum":74,"titleKor":"한국어 타이틀 75","titleEng":"EngTitle 75","galleryCount":1,"description":"작품 설명 내용"},{"members":[74,98],"category":"c5","projectNum":75,"titleKor":"한국어 타이틀 76","titleEng":"EngTitle 76","galleryCount":1,"description":"작품 설명 내용"},{"members":[80],"category":"c5","projectNum":76,"titleKor":"한국어 타이틀 77","titleEng":"EngTitle 77","galleryCount":1,"description":"작품 설명 내용"}]'),vv=40;function F_(n){if(!n)return n;const t="/TU2025gradulate/";if(/^https?:\/\//i.test(n))return n;const r=n.replace(/^\.\.\//,"").replace(/^\//,"");return t+r}const g4={c0:"A",c1:"E",c2:"H",c3:"I",c4:"L",c5:"M"},xv=["전체","산업디자인공학","미디어디자인공학"],y4={산업디자인공학:0,미디어디자인공학:1},_v=n=>n==="IND"||n===0||n==="0"?0:n==="MED"||n===1||n==="1"?1:n,xp=Um,jl=m4,v4=A.div`
  position: relative; background: #fff;
`,x4=A.div`
  padding-left: ${vv}px; padding-right: ${vv}px; display: flex; flex-direction: column;
  @media (max-width: 640px) {
    padding-left: 16px;
    padding-right: 16px;  
 }
`;function _4({children:n}){return v.jsx(v4,{children:v.jsx(x4,{children:n})})}const E4=A.div`
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
`,b4=A.div`
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
`,T4=A.div`
  text-decoration: none; cursor: pointer;
`,w4=A.div`position: relative;`;function S4({people:n}){const t=Em();return v.jsx(E4,{children:n.map((r,a)=>{const o=r.id??r.studentId??`${r.nameKor}-${a}`,u=typeof r.projectNum=="number"&&r.category,f=u?r.projectNum+1:null,m=u?`${g4[r.category]||"A"}${String(f).padStart(3,"0")}`:null,p=v.jsx(Mm,{nameKor:r.nameKor,nameEng:r.nameEng,role:r.role,sns:r.sns||"-",eMail:r.eMail,imgSrc:F_(r.imgUrl),imgAlt:`${r.nameKor} profile`},o);return u?v.jsx(T4,{role:"link",tabIndex:0,onClick:()=>t(`/work/${m}`),onKeyDown:g=>{(g.key==="Enter"||g.key===" ")&&t(`/work/${m}`)},"aria-label":`${r.nameKor} 작품 보기 (${m})`,children:p},`link-${o}`):p})})}function A4(){const[n,t]=kt.useState(!1),[r,a]=kt.useState(xv[0]),o=kt.useMemo(()=>{const m=new Map;return(Gl||[]).forEach(p=>{(p.members||[]).forEach(g=>{m.has(g)||m.set(g,p)})}),m},[]);kt.useEffect(()=>{a(n?jl[0]?.id||"":xv[0])},[n]);const u=kt.useMemo(()=>{if(!n){if(r==="전체")return xp;let p=y4[r];return p===void 0&&(p=_v(r)),xp.filter(g=>_v(g.department)===p)}const m=jl.some(p=>p.id===r)?r:jl.find(p=>p.nameKor===r)?.id||"";return xp.filter(p=>p.professorId===m).map(p=>{let g=o.get(p.num);g||(g=(Gl||[]).find(b=>b.category===p.category&&b.projectNum===p.projectNum)||null);const _=g?`/projects/${g.projectNum}/thumb.jpg`:"/thumbnailExample.png";return{...p,imgUrl:_}})},[r,n,o]),f=kt.useMemo(()=>n&&(jl.find(p=>p.id===r)||jl.find(p=>p.nameKor===r))||null,[n,r]);return v.jsxs(w4,{children:[v.jsx(b4,{children:"Peoples"}),v.jsx($_,{type:"people",onCategoryChange:a,onToggleChange:t}),v.jsxs(_4,{children:[n&&f&&v.jsx(km,{nameKor:f.nameKor,rank:f.rank||"교수",eMail:f.email,education:f.education,field:f.field,imgSrc:F_(f.imgUrl),imgAlt:`${f.nameKor} profile`}),v.jsx(S4,{people:u})]})]})}const R4=()=>{};var Ev={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_=function(n){const t=[];let r=0;for(let a=0;a<n.length;a++){let o=n.charCodeAt(a);o<128?t[r++]=o:o<2048?(t[r++]=o>>6|192,t[r++]=o&63|128):(o&64512)===55296&&a+1<n.length&&(n.charCodeAt(a+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++a)&1023),t[r++]=o>>18|240,t[r++]=o>>12&63|128,t[r++]=o>>6&63|128,t[r++]=o&63|128):(t[r++]=o>>12|224,t[r++]=o>>6&63|128,t[r++]=o&63|128)}return t},C4=function(n){const t=[];let r=0,a=0;for(;r<n.length;){const o=n[r++];if(o<128)t[a++]=String.fromCharCode(o);else if(o>191&&o<224){const u=n[r++];t[a++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=n[r++],f=n[r++],m=n[r++],p=((o&7)<<18|(u&63)<<12|(f&63)<<6|m&63)-65536;t[a++]=String.fromCharCode(55296+(p>>10)),t[a++]=String.fromCharCode(56320+(p&1023))}else{const u=n[r++],f=n[r++];t[a++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return t.join("")},q_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let o=0;o<n.length;o+=3){const u=n[o],f=o+1<n.length,m=f?n[o+1]:0,p=o+2<n.length,g=p?n[o+2]:0,_=u>>2,b=(u&3)<<4|m>>4;let S=(m&15)<<2|g>>6,j=g&63;p||(j=64,f||(S=64)),a.push(r[_],r[b],r[S],r[j])}return a.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(K_(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):C4(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let o=0;o<n.length;){const u=r[n.charAt(o++)],m=o<n.length?r[n.charAt(o)]:0;++o;const g=o<n.length?r[n.charAt(o)]:64;++o;const b=o<n.length?r[n.charAt(o)]:64;if(++o,u==null||m==null||g==null||b==null)throw new j4;const S=u<<2|m>>4;if(a.push(S),g!==64){const j=m<<4&240|g>>2;if(a.push(j),b!==64){const U=g<<6&192|b;a.push(U)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class j4 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const I4=function(n){const t=K_(n);return q_.encodeByteArray(t,!0)},fh=function(n){return I4(n).replace(/\./g,"")},D4=function(n){try{return q_.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function N4(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const M4=()=>N4().__FIREBASE_DEFAULTS__,O4=()=>{if(typeof process>"u"||typeof Ev>"u")return;const n=Ev.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},V4=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&D4(n[1]);return t&&JSON.parse(t)},Pm=()=>{try{return R4()||M4()||O4()||V4()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},k4=n=>Pm()?.emulatorHosts?.[n],U4=n=>{const t=k4(n);if(!t)return;const r=t.lastIndexOf(":");if(r<=0||r+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const a=parseInt(t.substring(r+1),10);return t[0]==="["?[t.substring(1,r-1),a]:[t.substring(0,r),a]},H_=()=>Pm()?.config;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P4{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,r)=>{this.resolve=t,this.reject=r})}wrapCallback(t){return(r,a)=>{r?this.reject(r):this.resolve(a),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(r):t(r,a))}}}/**
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
 */function Lm(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function L4(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function z4(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const r={alg:"none",type:"JWT"},a=t||"demo-project",o=n.iat||0,u=n.sub||n.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${a}`,aud:a,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...n};return[fh(JSON.stringify(r)),fh(JSON.stringify(f)),""].join(".")}const Pl={};function B4(){const n={prod:[],emulator:[]};for(const t of Object.keys(Pl))Pl[t]?n.emulator.push(t):n.prod.push(t);return n}function $4(n){let t=document.getElementById(n),r=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),r=!0),{created:r,element:t}}let bv=!1;function F4(n,t){if(typeof window>"u"||typeof document>"u"||!Lm(window.location.host)||Pl[n]===t||Pl[n]||bv)return;Pl[n]=t;function r(S){return`__firebase__banner__${S}`}const a="__firebase__banner",u=B4().prod.length>0;function f(){const S=document.getElementById(a);S&&S.remove()}function m(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function p(S,j){S.setAttribute("width","24"),S.setAttribute("id",j),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function g(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{bv=!0,f()},S}function _(S,j){S.setAttribute("id",j),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function b(){const S=$4(a),j=r("text"),U=document.getElementById(j)||document.createElement("span"),$=r("learnmore"),P=document.getElementById($)||document.createElement("a"),X=r("preprendIcon"),Q=document.getElementById(X)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const Z=S.element;m(Z),_(P,$);const ot=g();p(Q,X),Z.append(Q,U,P,ot),document.body.appendChild(Z)}u?(U.innerText="Preview backend disconnected.",Q.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Q.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,U.innerText="Preview backend running in this workspace."),U.setAttribute("id",j)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",b):b()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K4(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function q4(){const n=Pm()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function H4(){return!q4()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function G4(){try{return typeof indexedDB=="object"}catch{return!1}}function Y4(){return new Promise((n,t)=>{try{let r=!0;const a="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(a);o.onsuccess=()=>{o.result.close(),r||self.indexedDB.deleteDatabase(a),n(!0)},o.onupgradeneeded=()=>{r=!1},o.onerror=()=>{t(o.error?.message||"")}}catch(r){t(r)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q4="FirebaseError";class yo extends Error{constructor(t,r,a){super(r),this.code=t,this.customData=a,this.name=Q4,Object.setPrototypeOf(this,yo.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,G_.prototype.create)}}class G_{constructor(t,r,a){this.service=t,this.serviceName=r,this.errors=a}create(t,...r){const a=r[0]||{},o=`${this.service}/${t}`,u=this.errors[t],f=u?X4(u,a):"Error",m=`${this.serviceName}: ${f} (${o}).`;return new yo(o,m,a)}}function X4(n,t){return n.replace(W4,(r,a)=>{const o=t[a];return o!=null?String(o):`<${a}?>`})}const W4=/\{\$([^}]+)}/g;function dh(n,t){if(n===t)return!0;const r=Object.keys(n),a=Object.keys(t);for(const o of r){if(!a.includes(o))return!1;const u=n[o],f=t[o];if(Tv(u)&&Tv(f)){if(!dh(u,f))return!1}else if(u!==f)return!1}for(const o of a)if(!r.includes(o))return!1;return!0}function Tv(n){return n!==null&&typeof n=="object"}/**
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
 */function Zr(n){return n&&n._delegate?n._delegate:n}class Yl{constructor(t,r,a){this.name=t,this.instanceFactory=r,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class Z4{constructor(t,r){this.name=t,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const r=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(r)){const a=new P4;if(this.instancesDeferred.set(r,a),this.isInitialized(r)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:r});o&&a.resolve(o)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(t){const r=this.normalizeInstanceIdentifier(t?.identifier),a=t?.optional??!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(a)return null;throw o}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(tR(t))try{this.getOrInitializeService({instanceIdentifier:Ka})}catch{}for(const[r,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(r);try{const u=this.getOrInitializeService({instanceIdentifier:o});a.resolve(u)}catch{}}}}clearInstance(t=Ka){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...t.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ka){return this.instances.has(t)}getOptions(t=Ka){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:r={}}=t,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:a,options:r});for(const[u,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);a===m&&f.resolve(o)}return o}onInit(t,r){const a=this.normalizeInstanceIdentifier(r),o=this.onInitCallbacks.get(a)??new Set;o.add(t),this.onInitCallbacks.set(a,o);const u=this.instances.get(a);return u&&t(u,a),()=>{o.delete(t)}}invokeOnInitCallbacks(t,r){const a=this.onInitCallbacks.get(r);if(a)for(const o of a)try{o(t,r)}catch{}}getOrInitializeService({instanceIdentifier:t,options:r={}}){let a=this.instances.get(t);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:J4(t),options:r}),this.instances.set(t,a),this.instancesOptions.set(t,r),this.invokeOnInitCallbacks(a,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,a)}catch{}return a||null}normalizeInstanceIdentifier(t=Ka){return this.component?this.component.multipleInstances?t:Ka:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function J4(n){return n===Ka?void 0:n}function tR(n){return n.instantiationMode==="EAGER"}/**
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
 */class eR{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const r=this.getProvider(t.name);if(r.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);r.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const r=new Z4(t,this);return this.providers.set(t,r),r}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $t;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})($t||($t={}));const nR={debug:$t.DEBUG,verbose:$t.VERBOSE,info:$t.INFO,warn:$t.WARN,error:$t.ERROR,silent:$t.SILENT},iR=$t.INFO,rR={[$t.DEBUG]:"log",[$t.VERBOSE]:"log",[$t.INFO]:"info",[$t.WARN]:"warn",[$t.ERROR]:"error"},aR=(n,t,...r)=>{if(t<n.logLevel)return;const a=new Date().toISOString(),o=rR[t];if(o)console[o](`[${a}]  ${n.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Y_{constructor(t){this.name=t,this._logLevel=iR,this._logHandler=aR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in $t))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?nR[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,$t.DEBUG,...t),this._logHandler(this,$t.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,$t.VERBOSE,...t),this._logHandler(this,$t.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,$t.INFO,...t),this._logHandler(this,$t.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,$t.WARN,...t),this._logHandler(this,$t.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,$t.ERROR,...t),this._logHandler(this,$t.ERROR,...t)}}const sR=(n,t)=>t.some(r=>n instanceof r);let wv,Sv;function oR(){return wv||(wv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lR(){return Sv||(Sv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Q_=new WeakMap,Hp=new WeakMap,X_=new WeakMap,_p=new WeakMap,zm=new WeakMap;function uR(n){const t=new Promise((r,a)=>{const o=()=>{n.removeEventListener("success",u),n.removeEventListener("error",f)},u=()=>{r(Yr(n.result)),o()},f=()=>{a(n.error),o()};n.addEventListener("success",u),n.addEventListener("error",f)});return t.then(r=>{r instanceof IDBCursor&&Q_.set(r,n)}).catch(()=>{}),zm.set(t,n),t}function cR(n){if(Hp.has(n))return;const t=new Promise((r,a)=>{const o=()=>{n.removeEventListener("complete",u),n.removeEventListener("error",f),n.removeEventListener("abort",f)},u=()=>{r(),o()},f=()=>{a(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",u),n.addEventListener("error",f),n.addEventListener("abort",f)});Hp.set(n,t)}let Gp={get(n,t,r){if(n instanceof IDBTransaction){if(t==="done")return Hp.get(n);if(t==="objectStoreNames")return n.objectStoreNames||X_.get(n);if(t==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return Yr(n[t])},set(n,t,r){return n[t]=r,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function hR(n){Gp=n(Gp)}function fR(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...r){const a=n.call(Ep(this),t,...r);return X_.set(a,t.sort?t.sort():[t]),Yr(a)}:lR().includes(n)?function(...t){return n.apply(Ep(this),t),Yr(Q_.get(this))}:function(...t){return Yr(n.apply(Ep(this),t))}}function dR(n){return typeof n=="function"?fR(n):(n instanceof IDBTransaction&&cR(n),sR(n,oR())?new Proxy(n,Gp):n)}function Yr(n){if(n instanceof IDBRequest)return uR(n);if(_p.has(n))return _p.get(n);const t=dR(n);return t!==n&&(_p.set(n,t),zm.set(t,n)),t}const Ep=n=>zm.get(n);function pR(n,t,{blocked:r,upgrade:a,blocking:o,terminated:u}={}){const f=indexedDB.open(n,t),m=Yr(f);return a&&f.addEventListener("upgradeneeded",p=>{a(Yr(f.result),p.oldVersion,p.newVersion,Yr(f.transaction),p)}),r&&f.addEventListener("blocked",p=>r(p.oldVersion,p.newVersion,p)),m.then(p=>{u&&p.addEventListener("close",()=>u()),o&&p.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),m}const mR=["get","getKey","getAll","getAllKeys","count"],gR=["put","add","delete","clear"],bp=new Map;function Av(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(bp.get(t))return bp.get(t);const r=t.replace(/FromIndex$/,""),a=t!==r,o=gR.includes(r);if(!(r in(a?IDBIndex:IDBObjectStore).prototype)||!(o||mR.includes(r)))return;const u=async function(f,...m){const p=this.transaction(f,o?"readwrite":"readonly");let g=p.store;return a&&(g=g.index(m.shift())),(await Promise.all([g[r](...m),o&&p.done]))[0]};return bp.set(t,u),u}hR(n=>({...n,get:(t,r,a)=>Av(t,r)||n.get(t,r,a),has:(t,r)=>!!Av(t,r)||n.has(t,r)}));/**
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
 */class yR{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(vR(r)){const a=r.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(r=>r).join(" ")}}function vR(n){return n.getComponent()?.type==="VERSION"}const Yp="@firebase/app",Rv="0.14.4";/**
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
 */const rr=new Y_("@firebase/app"),xR="@firebase/app-compat",_R="@firebase/analytics-compat",ER="@firebase/analytics",bR="@firebase/app-check-compat",TR="@firebase/app-check",wR="@firebase/auth",SR="@firebase/auth-compat",AR="@firebase/database",RR="@firebase/data-connect",CR="@firebase/database-compat",jR="@firebase/functions",IR="@firebase/functions-compat",DR="@firebase/installations",NR="@firebase/installations-compat",MR="@firebase/messaging",OR="@firebase/messaging-compat",VR="@firebase/performance",kR="@firebase/performance-compat",UR="@firebase/remote-config",PR="@firebase/remote-config-compat",LR="@firebase/storage",zR="@firebase/storage-compat",BR="@firebase/firestore",$R="@firebase/ai",FR="@firebase/firestore-compat",KR="firebase",qR="12.4.0";/**
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
 */const Qp="[DEFAULT]",HR={[Yp]:"fire-core",[xR]:"fire-core-compat",[ER]:"fire-analytics",[_R]:"fire-analytics-compat",[TR]:"fire-app-check",[bR]:"fire-app-check-compat",[wR]:"fire-auth",[SR]:"fire-auth-compat",[AR]:"fire-rtdb",[RR]:"fire-data-connect",[CR]:"fire-rtdb-compat",[jR]:"fire-fn",[IR]:"fire-fn-compat",[DR]:"fire-iid",[NR]:"fire-iid-compat",[MR]:"fire-fcm",[OR]:"fire-fcm-compat",[VR]:"fire-perf",[kR]:"fire-perf-compat",[UR]:"fire-rc",[PR]:"fire-rc-compat",[LR]:"fire-gcs",[zR]:"fire-gcs-compat",[BR]:"fire-fst",[FR]:"fire-fst-compat",[$R]:"fire-vertex","fire-js":"fire-js",[KR]:"fire-js-all"};/**
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
 */const Ql=new Map,GR=new Map,Xp=new Map;function Cv(n,t){try{n.container.addComponent(t)}catch(r){rr.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,r)}}function ph(n){const t=n.name;if(Xp.has(t))return rr.debug(`There were multiple attempts to register component ${t}.`),!1;Xp.set(t,n);for(const r of Ql.values())Cv(r,n);for(const r of GR.values())Cv(r,n);return!0}function YR(n,t){const r=n.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),n.container.getProvider(t)}function QR(n){return n==null?!1:n.settings!==void 0}/**
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
 */const XR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qr=new G_("app","Firebase",XR);/**
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
 */class WR{constructor(t,r,a){this._isDeleted=!1,this._options={...t},this._config={...r},this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new Yl("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Qr.create("app-deleted",{appName:this._name})}}/**
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
 */const ZR=qR;function W_(n,t={}){let r=n;typeof t!="object"&&(t={name:t});const a={name:Qp,automaticDataCollectionEnabled:!0,...t},o=a.name;if(typeof o!="string"||!o)throw Qr.create("bad-app-name",{appName:String(o)});if(r||(r=H_()),!r)throw Qr.create("no-options");const u=Ql.get(o);if(u){if(dh(r,u.options)&&dh(a,u.config))return u;throw Qr.create("duplicate-app",{appName:o})}const f=new eR(o);for(const p of Xp.values())f.addComponent(p);const m=new WR(r,a,f);return Ql.set(o,m),m}function JR(n=Qp){const t=Ql.get(n);if(!t&&n===Qp&&H_())return W_();if(!t)throw Qr.create("no-app",{appName:n});return t}function jv(){return Array.from(Ql.values())}function Qs(n,t,r){let a=HR[n]??n;r&&(a+=`-${r}`);const o=a.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const f=[`Unable to register library "${a}" with version "${t}":`];o&&f.push(`library name "${a}" contains illegal characters (whitespace or "/")`),o&&u&&f.push("and"),u&&f.push(`version name "${t}" contains illegal characters (whitespace or "/")`),rr.warn(f.join(" "));return}ph(new Yl(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}/**
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
 */const t6="firebase-heartbeat-database",e6=1,Xl="firebase-heartbeat-store";let Tp=null;function Z_(){return Tp||(Tp=pR(t6,e6,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Xl)}catch(r){console.warn(r)}}}}).catch(n=>{throw Qr.create("idb-open",{originalErrorMessage:n.message})})),Tp}async function n6(n){try{const r=(await Z_()).transaction(Xl),a=await r.objectStore(Xl).get(J_(n));return await r.done,a}catch(t){if(t instanceof yo)rr.warn(t.message);else{const r=Qr.create("idb-get",{originalErrorMessage:t?.message});rr.warn(r.message)}}}async function Iv(n,t){try{const a=(await Z_()).transaction(Xl,"readwrite");await a.objectStore(Xl).put(t,J_(n)),await a.done}catch(r){if(r instanceof yo)rr.warn(r.message);else{const a=Qr.create("idb-set",{originalErrorMessage:r?.message});rr.warn(a.message)}}}function J_(n){return`${n.name}!${n.options.appId}`}/**
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
 */const i6=1024,r6=30;class a6{constructor(t){this.container=t,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new o6(r),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Dv();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(o=>o.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:r}),this._heartbeatsCache.heartbeats.length>r6){const o=l6(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){rr.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Dv(),{heartbeatsToSend:r,unsentEntries:a}=s6(this._heartbeatsCache.heartbeats),o=fh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return rr.warn(t),""}}}function Dv(){return new Date().toISOString().substring(0,10)}function s6(n,t=i6){const r=[];let a=n.slice();for(const o of n){const u=r.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),Nv(r)>t){u.dates.pop();break}}else if(r.push({agent:o.agent,dates:[o.date]}),Nv(r)>t){r.pop();break}a=a.slice(1)}return{heartbeatsToSend:r,unsentEntries:a}}class o6{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return G4()?Y4().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await n6(this.app);return r?.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const a=await this.read();return Iv(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const a=await this.read();return Iv(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...t.heartbeats]})}else return}}function Nv(n){return fh(JSON.stringify({version:2,heartbeats:n})).length}function l6(n){if(n.length===0)return-1;let t=0,r=n[0].date;for(let a=1;a<n.length;a++)n[a].date<r&&(r=n[a].date,t=a);return t}/**
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
 */function u6(n){ph(new Yl("platform-logger",t=>new yR(t),"PRIVATE")),ph(new Yl("heartbeat",t=>new a6(t),"PRIVATE")),Qs(Yp,Rv,n),Qs(Yp,Rv,"esm2020"),Qs("fire-js","")}u6("");var c6="firebase",h6="12.4.0";/**
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
 */Qs(c6,h6,"app");var Mv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xr,tE;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,R){function C(){}C.prototype=R.prototype,I.F=R.prototype,I.prototype=new C,I.prototype.constructor=I,I.D=function(M,V,z){for(var N=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)N[ue-2]=arguments[ue];return R.prototype[V].apply(M,N)}}function r(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(a,r),a.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(I,R,C){C||(C=0);const M=Array(16);if(typeof R=="string")for(var V=0;V<16;++V)M[V]=R.charCodeAt(C++)|R.charCodeAt(C++)<<8|R.charCodeAt(C++)<<16|R.charCodeAt(C++)<<24;else for(V=0;V<16;++V)M[V]=R[C++]|R[C++]<<8|R[C++]<<16|R[C++]<<24;R=I.g[0],C=I.g[1],V=I.g[2];let z=I.g[3],N;N=R+(z^C&(V^z))+M[0]+3614090360&4294967295,R=C+(N<<7&4294967295|N>>>25),N=z+(V^R&(C^V))+M[1]+3905402710&4294967295,z=R+(N<<12&4294967295|N>>>20),N=V+(C^z&(R^C))+M[2]+606105819&4294967295,V=z+(N<<17&4294967295|N>>>15),N=C+(R^V&(z^R))+M[3]+3250441966&4294967295,C=V+(N<<22&4294967295|N>>>10),N=R+(z^C&(V^z))+M[4]+4118548399&4294967295,R=C+(N<<7&4294967295|N>>>25),N=z+(V^R&(C^V))+M[5]+1200080426&4294967295,z=R+(N<<12&4294967295|N>>>20),N=V+(C^z&(R^C))+M[6]+2821735955&4294967295,V=z+(N<<17&4294967295|N>>>15),N=C+(R^V&(z^R))+M[7]+4249261313&4294967295,C=V+(N<<22&4294967295|N>>>10),N=R+(z^C&(V^z))+M[8]+1770035416&4294967295,R=C+(N<<7&4294967295|N>>>25),N=z+(V^R&(C^V))+M[9]+2336552879&4294967295,z=R+(N<<12&4294967295|N>>>20),N=V+(C^z&(R^C))+M[10]+4294925233&4294967295,V=z+(N<<17&4294967295|N>>>15),N=C+(R^V&(z^R))+M[11]+2304563134&4294967295,C=V+(N<<22&4294967295|N>>>10),N=R+(z^C&(V^z))+M[12]+1804603682&4294967295,R=C+(N<<7&4294967295|N>>>25),N=z+(V^R&(C^V))+M[13]+4254626195&4294967295,z=R+(N<<12&4294967295|N>>>20),N=V+(C^z&(R^C))+M[14]+2792965006&4294967295,V=z+(N<<17&4294967295|N>>>15),N=C+(R^V&(z^R))+M[15]+1236535329&4294967295,C=V+(N<<22&4294967295|N>>>10),N=R+(V^z&(C^V))+M[1]+4129170786&4294967295,R=C+(N<<5&4294967295|N>>>27),N=z+(C^V&(R^C))+M[6]+3225465664&4294967295,z=R+(N<<9&4294967295|N>>>23),N=V+(R^C&(z^R))+M[11]+643717713&4294967295,V=z+(N<<14&4294967295|N>>>18),N=C+(z^R&(V^z))+M[0]+3921069994&4294967295,C=V+(N<<20&4294967295|N>>>12),N=R+(V^z&(C^V))+M[5]+3593408605&4294967295,R=C+(N<<5&4294967295|N>>>27),N=z+(C^V&(R^C))+M[10]+38016083&4294967295,z=R+(N<<9&4294967295|N>>>23),N=V+(R^C&(z^R))+M[15]+3634488961&4294967295,V=z+(N<<14&4294967295|N>>>18),N=C+(z^R&(V^z))+M[4]+3889429448&4294967295,C=V+(N<<20&4294967295|N>>>12),N=R+(V^z&(C^V))+M[9]+568446438&4294967295,R=C+(N<<5&4294967295|N>>>27),N=z+(C^V&(R^C))+M[14]+3275163606&4294967295,z=R+(N<<9&4294967295|N>>>23),N=V+(R^C&(z^R))+M[3]+4107603335&4294967295,V=z+(N<<14&4294967295|N>>>18),N=C+(z^R&(V^z))+M[8]+1163531501&4294967295,C=V+(N<<20&4294967295|N>>>12),N=R+(V^z&(C^V))+M[13]+2850285829&4294967295,R=C+(N<<5&4294967295|N>>>27),N=z+(C^V&(R^C))+M[2]+4243563512&4294967295,z=R+(N<<9&4294967295|N>>>23),N=V+(R^C&(z^R))+M[7]+1735328473&4294967295,V=z+(N<<14&4294967295|N>>>18),N=C+(z^R&(V^z))+M[12]+2368359562&4294967295,C=V+(N<<20&4294967295|N>>>12),N=R+(C^V^z)+M[5]+4294588738&4294967295,R=C+(N<<4&4294967295|N>>>28),N=z+(R^C^V)+M[8]+2272392833&4294967295,z=R+(N<<11&4294967295|N>>>21),N=V+(z^R^C)+M[11]+1839030562&4294967295,V=z+(N<<16&4294967295|N>>>16),N=C+(V^z^R)+M[14]+4259657740&4294967295,C=V+(N<<23&4294967295|N>>>9),N=R+(C^V^z)+M[1]+2763975236&4294967295,R=C+(N<<4&4294967295|N>>>28),N=z+(R^C^V)+M[4]+1272893353&4294967295,z=R+(N<<11&4294967295|N>>>21),N=V+(z^R^C)+M[7]+4139469664&4294967295,V=z+(N<<16&4294967295|N>>>16),N=C+(V^z^R)+M[10]+3200236656&4294967295,C=V+(N<<23&4294967295|N>>>9),N=R+(C^V^z)+M[13]+681279174&4294967295,R=C+(N<<4&4294967295|N>>>28),N=z+(R^C^V)+M[0]+3936430074&4294967295,z=R+(N<<11&4294967295|N>>>21),N=V+(z^R^C)+M[3]+3572445317&4294967295,V=z+(N<<16&4294967295|N>>>16),N=C+(V^z^R)+M[6]+76029189&4294967295,C=V+(N<<23&4294967295|N>>>9),N=R+(C^V^z)+M[9]+3654602809&4294967295,R=C+(N<<4&4294967295|N>>>28),N=z+(R^C^V)+M[12]+3873151461&4294967295,z=R+(N<<11&4294967295|N>>>21),N=V+(z^R^C)+M[15]+530742520&4294967295,V=z+(N<<16&4294967295|N>>>16),N=C+(V^z^R)+M[2]+3299628645&4294967295,C=V+(N<<23&4294967295|N>>>9),N=R+(V^(C|~z))+M[0]+4096336452&4294967295,R=C+(N<<6&4294967295|N>>>26),N=z+(C^(R|~V))+M[7]+1126891415&4294967295,z=R+(N<<10&4294967295|N>>>22),N=V+(R^(z|~C))+M[14]+2878612391&4294967295,V=z+(N<<15&4294967295|N>>>17),N=C+(z^(V|~R))+M[5]+4237533241&4294967295,C=V+(N<<21&4294967295|N>>>11),N=R+(V^(C|~z))+M[12]+1700485571&4294967295,R=C+(N<<6&4294967295|N>>>26),N=z+(C^(R|~V))+M[3]+2399980690&4294967295,z=R+(N<<10&4294967295|N>>>22),N=V+(R^(z|~C))+M[10]+4293915773&4294967295,V=z+(N<<15&4294967295|N>>>17),N=C+(z^(V|~R))+M[1]+2240044497&4294967295,C=V+(N<<21&4294967295|N>>>11),N=R+(V^(C|~z))+M[8]+1873313359&4294967295,R=C+(N<<6&4294967295|N>>>26),N=z+(C^(R|~V))+M[15]+4264355552&4294967295,z=R+(N<<10&4294967295|N>>>22),N=V+(R^(z|~C))+M[6]+2734768916&4294967295,V=z+(N<<15&4294967295|N>>>17),N=C+(z^(V|~R))+M[13]+1309151649&4294967295,C=V+(N<<21&4294967295|N>>>11),N=R+(V^(C|~z))+M[4]+4149444226&4294967295,R=C+(N<<6&4294967295|N>>>26),N=z+(C^(R|~V))+M[11]+3174756917&4294967295,z=R+(N<<10&4294967295|N>>>22),N=V+(R^(z|~C))+M[2]+718787259&4294967295,V=z+(N<<15&4294967295|N>>>17),N=C+(z^(V|~R))+M[9]+3951481745&4294967295,I.g[0]=I.g[0]+R&4294967295,I.g[1]=I.g[1]+(V+(N<<21&4294967295|N>>>11))&4294967295,I.g[2]=I.g[2]+V&4294967295,I.g[3]=I.g[3]+z&4294967295}a.prototype.v=function(I,R){R===void 0&&(R=I.length);const C=R-this.blockSize,M=this.C;let V=this.h,z=0;for(;z<R;){if(V==0)for(;z<=C;)o(this,I,z),z+=this.blockSize;if(typeof I=="string"){for(;z<R;)if(M[V++]=I.charCodeAt(z++),V==this.blockSize){o(this,M),V=0;break}}else for(;z<R;)if(M[V++]=I[z++],V==this.blockSize){o(this,M),V=0;break}}this.h=V,this.o+=R},a.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var R=1;R<I.length-8;++R)I[R]=0;R=this.o*8;for(var C=I.length-8;C<I.length;++C)I[C]=R&255,R/=256;for(this.v(I),I=Array(16),R=0,C=0;C<4;++C)for(let M=0;M<32;M+=8)I[R++]=this.g[C]>>>M&255;return I};function u(I,R){var C=m;return Object.prototype.hasOwnProperty.call(C,I)?C[I]:C[I]=R(I)}function f(I,R){this.h=R;const C=[];let M=!0;for(let V=I.length-1;V>=0;V--){const z=I[V]|0;M&&z==R||(C[V]=z,M=!1)}this.g=C}var m={};function p(I){return-128<=I&&I<128?u(I,function(R){return new f([R|0],R<0?-1:0)}):new f([I|0],I<0?-1:0)}function g(I){if(isNaN(I)||!isFinite(I))return b;if(I<0)return P(g(-I));const R=[];let C=1;for(let M=0;I>=C;M++)R[M]=I/C|0,C*=4294967296;return new f(R,0)}function _(I,R){if(I.length==0)throw Error("number format error: empty string");if(R=R||10,R<2||36<R)throw Error("radix out of range: "+R);if(I.charAt(0)=="-")return P(_(I.substring(1),R));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const C=g(Math.pow(R,8));let M=b;for(let z=0;z<I.length;z+=8){var V=Math.min(8,I.length-z);const N=parseInt(I.substring(z,z+V),R);V<8?(V=g(Math.pow(R,V)),M=M.j(V).add(g(N))):(M=M.j(C),M=M.add(g(N)))}return M}var b=p(0),S=p(1),j=p(16777216);n=f.prototype,n.m=function(){if($(this))return-P(this).m();let I=0,R=1;for(let C=0;C<this.g.length;C++){const M=this.i(C);I+=(M>=0?M:4294967296+M)*R,R*=4294967296}return I},n.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(U(this))return"0";if($(this))return"-"+P(this).toString(I);const R=g(Math.pow(I,6));var C=this;let M="";for(;;){const V=ot(C,R).g;C=X(C,V.j(R));let z=((C.g.length>0?C.g[0]:C.h)>>>0).toString(I);if(C=V,U(C))return z+M;for(;z.length<6;)z="0"+z;M=z+M}},n.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function U(I){if(I.h!=0)return!1;for(let R=0;R<I.g.length;R++)if(I.g[R]!=0)return!1;return!0}function $(I){return I.h==-1}n.l=function(I){return I=X(this,I),$(I)?-1:U(I)?0:1};function P(I){const R=I.g.length,C=[];for(let M=0;M<R;M++)C[M]=~I.g[M];return new f(C,~I.h).add(S)}n.abs=function(){return $(this)?P(this):this},n.add=function(I){const R=Math.max(this.g.length,I.g.length),C=[];let M=0;for(let V=0;V<=R;V++){let z=M+(this.i(V)&65535)+(I.i(V)&65535),N=(z>>>16)+(this.i(V)>>>16)+(I.i(V)>>>16);M=N>>>16,z&=65535,N&=65535,C[V]=N<<16|z}return new f(C,C[C.length-1]&-2147483648?-1:0)};function X(I,R){return I.add(P(R))}n.j=function(I){if(U(this)||U(I))return b;if($(this))return $(I)?P(this).j(P(I)):P(P(this).j(I));if($(I))return P(this.j(P(I)));if(this.l(j)<0&&I.l(j)<0)return g(this.m()*I.m());const R=this.g.length+I.g.length,C=[];for(var M=0;M<2*R;M++)C[M]=0;for(M=0;M<this.g.length;M++)for(let V=0;V<I.g.length;V++){const z=this.i(M)>>>16,N=this.i(M)&65535,ue=I.i(V)>>>16,ne=I.i(V)&65535;C[2*M+2*V]+=N*ne,Q(C,2*M+2*V),C[2*M+2*V+1]+=z*ne,Q(C,2*M+2*V+1),C[2*M+2*V+1]+=N*ue,Q(C,2*M+2*V+1),C[2*M+2*V+2]+=z*ue,Q(C,2*M+2*V+2)}for(I=0;I<R;I++)C[I]=C[2*I+1]<<16|C[2*I];for(I=R;I<2*R;I++)C[I]=0;return new f(C,0)};function Q(I,R){for(;(I[R]&65535)!=I[R];)I[R+1]+=I[R]>>>16,I[R]&=65535,R++}function Z(I,R){this.g=I,this.h=R}function ot(I,R){if(U(R))throw Error("division by zero");if(U(I))return new Z(b,b);if($(I))return R=ot(P(I),R),new Z(P(R.g),P(R.h));if($(R))return R=ot(I,P(R)),new Z(P(R.g),R.h);if(I.g.length>30){if($(I)||$(R))throw Error("slowDivide_ only works with positive integers.");for(var C=S,M=R;M.l(I)<=0;)C=tt(C),M=tt(M);var V=ft(C,1),z=ft(M,1);for(M=ft(M,2),C=ft(C,2);!U(M);){var N=z.add(M);N.l(I)<=0&&(V=V.add(C),z=N),M=ft(M,1),C=ft(C,1)}return R=X(I,V.j(R)),new Z(V,R)}for(V=b;I.l(R)>=0;){for(C=Math.max(1,Math.floor(I.m()/R.m())),M=Math.ceil(Math.log(C)/Math.LN2),M=M<=48?1:Math.pow(2,M-48),z=g(C),N=z.j(R);$(N)||N.l(I)>0;)C-=M,z=g(C),N=z.j(R);U(z)&&(z=S),V=V.add(z),I=X(I,N)}return new Z(V,I)}n.B=function(I){return ot(this,I).h},n.and=function(I){const R=Math.max(this.g.length,I.g.length),C=[];for(let M=0;M<R;M++)C[M]=this.i(M)&I.i(M);return new f(C,this.h&I.h)},n.or=function(I){const R=Math.max(this.g.length,I.g.length),C=[];for(let M=0;M<R;M++)C[M]=this.i(M)|I.i(M);return new f(C,this.h|I.h)},n.xor=function(I){const R=Math.max(this.g.length,I.g.length),C=[];for(let M=0;M<R;M++)C[M]=this.i(M)^I.i(M);return new f(C,this.h^I.h)};function tt(I){const R=I.g.length+1,C=[];for(let M=0;M<R;M++)C[M]=I.i(M)<<1|I.i(M-1)>>>31;return new f(C,I.h)}function ft(I,R){const C=R>>5;R%=32;const M=I.g.length-C,V=[];for(let z=0;z<M;z++)V[z]=R>0?I.i(z+C)>>>R|I.i(z+C+1)<<32-R:I.i(z+C);return new f(V,I.h)}a.prototype.digest=a.prototype.A,a.prototype.reset=a.prototype.u,a.prototype.update=a.prototype.v,tE=a,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.B,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=g,f.fromString=_,Xr=f}).apply(typeof Mv<"u"?Mv:typeof self<"u"?self:typeof window<"u"?window:{});var zc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var eE,Nl,nE,eh,Wp,iE,rE,aE;(function(){var n,t=Object.defineProperty;function r(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof zc=="object"&&zc];for(var y=0;y<c.length;++y){var x=c[y];if(x&&x.Math==Math)return x}throw Error("Cannot find global object")}var a=r(this);function o(c,y){if(y)t:{var x=a;c=c.split(".");for(var w=0;w<c.length-1;w++){var F=c[w];if(!(F in x))break t;x=x[F]}c=c[c.length-1],w=x[c],y=y(w),y!=w&&y!=null&&t(x,c,{configurable:!0,writable:!0,value:y})}}o("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(c){return c||function(y){var x=[],w;for(w in y)Object.prototype.hasOwnProperty.call(y,w)&&x.push([w,y[w]]);return x}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},f=this||self;function m(c){var y=typeof c;return y=="object"&&c!=null||y=="function"}function p(c,y,x){return c.call.apply(c.bind,arguments)}function g(c,y,x){return g=p,g.apply(null,arguments)}function _(c,y){var x=Array.prototype.slice.call(arguments,1);return function(){var w=x.slice();return w.push.apply(w,arguments),c.apply(this,w)}}function b(c,y){function x(){}x.prototype=y.prototype,c.Z=y.prototype,c.prototype=new x,c.prototype.constructor=c,c.Ob=function(w,F,Y){for(var lt=Array(arguments.length-2),At=2;At<arguments.length;At++)lt[At-2]=arguments[At];return y.prototype[F].apply(w,lt)}}var S=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function j(c){const y=c.length;if(y>0){const x=Array(y);for(let w=0;w<y;w++)x[w]=c[w];return x}return[]}function U(c,y){for(let w=1;w<arguments.length;w++){const F=arguments[w];var x=typeof F;if(x=x!="object"?x:F?Array.isArray(F)?"array":x:"null",x=="array"||x=="object"&&typeof F.length=="number"){x=c.length||0;const Y=F.length||0;c.length=x+Y;for(let lt=0;lt<Y;lt++)c[x+lt]=F[lt]}else c.push(F)}}class ${constructor(y,x){this.i=y,this.j=x,this.h=0,this.g=null}get(){let y;return this.h>0?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function P(c){f.setTimeout(()=>{throw c},0)}function X(){var c=I;let y=null;return c.g&&(y=c.g,c.g=c.g.next,c.g||(c.h=null),y.next=null),y}class Q{constructor(){this.h=this.g=null}add(y,x){const w=Z.get();w.set(y,x),this.h?this.h.next=w:this.g=w,this.h=w}}var Z=new $(()=>new ot,c=>c.reset());class ot{constructor(){this.next=this.g=this.h=null}set(y,x){this.h=y,this.g=x,this.next=null}reset(){this.next=this.g=this.h=null}}let tt,ft=!1,I=new Q,R=()=>{const c=Promise.resolve(void 0);tt=()=>{c.then(C)}};function C(){for(var c;c=X();){try{c.h.call(c.g)}catch(x){P(x)}var y=Z;y.j(c),y.h<100&&(y.h++,c.next=y.g,y.g=c)}ft=!1}function M(){this.u=this.u,this.C=this.C}M.prototype.u=!1,M.prototype.dispose=function(){this.u||(this.u=!0,this.N())},M.prototype[Symbol.dispose]=function(){this.dispose()},M.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function V(c,y){this.type=c,this.g=this.target=y,this.defaultPrevented=!1}V.prototype.h=function(){this.defaultPrevented=!0};var z=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var c=!1,y=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const x=()=>{};f.addEventListener("test",x,y),f.removeEventListener("test",x,y)}catch{}return c})();function N(c){return/^[\s\xa0]*$/.test(c)}function ue(c,y){V.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,y)}b(ue,V),ue.prototype.init=function(c,y){const x=this.type=c.type,w=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=y,y=c.relatedTarget,y||(x=="mouseover"?y=c.fromElement:x=="mouseout"&&(y=c.toElement)),this.relatedTarget=y,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&ue.Z.h.call(this)},ue.prototype.h=function(){ue.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var ne="closure_listenable_"+(Math.random()*1e6|0),J=0;function ht(c,y,x,w,F){this.listener=c,this.proxy=null,this.src=y,this.type=x,this.capture=!!w,this.ha=F,this.key=++J,this.da=this.fa=!1}function yt(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Ct(c,y,x){for(const w in c)y.call(x,c[w],w,c)}function O(c,y){for(const x in c)y.call(void 0,c[x],x,c)}function rt(c){const y={};for(const x in c)y[x]=c[x];return y}const ut="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ct(c,y){let x,w;for(let F=1;F<arguments.length;F++){w=arguments[F];for(x in w)c[x]=w[x];for(let Y=0;Y<ut.length;Y++)x=ut[Y],Object.prototype.hasOwnProperty.call(w,x)&&(c[x]=w[x])}}function gt(c){this.src=c,this.g={},this.h=0}gt.prototype.add=function(c,y,x,w,F){const Y=c.toString();c=this.g[Y],c||(c=this.g[Y]=[],this.h++);const lt=xt(c,y,w,F);return lt>-1?(y=c[lt],x||(y.fa=!1)):(y=new ht(y,this.src,Y,!!w,F),y.fa=x,c.push(y)),y};function jt(c,y){const x=y.type;if(x in c.g){var w=c.g[x],F=Array.prototype.indexOf.call(w,y,void 0),Y;(Y=F>=0)&&Array.prototype.splice.call(w,F,1),Y&&(yt(y),c.g[x].length==0&&(delete c.g[x],c.h--))}}function xt(c,y,x,w){for(let F=0;F<c.length;++F){const Y=c[F];if(!Y.da&&Y.listener==y&&Y.capture==!!x&&Y.ha==w)return F}return-1}var ge="closure_lm_"+(Math.random()*1e6|0),Lt={};function Ne(c,y,x,w,F){if(Array.isArray(y)){for(let Y=0;Y<y.length;Y++)Ne(c,y[Y],x,w,F);return null}return x=mu(x),c&&c[ne]?c.J(y,x,m(w)?!!w.capture:!1,F):Ii(c,y,x,!1,w,F)}function Ii(c,y,x,w,F,Y){if(!y)throw Error("Invalid event type");const lt=m(F)?!!F.capture:!!F;let At=bo(c);if(At||(c[ge]=At=new gt(c)),x=At.add(y,x,w,lt,Y),x.proxy)return x;if(w=qn(),x.proxy=w,w.src=c,w.listener=x,c.addEventListener)z||(F=lt),F===void 0&&(F=!1),c.addEventListener(y.toString(),w,F);else if(c.attachEvent)c.attachEvent(ts(y.toString()),w);else if(c.addListener&&c.removeListener)c.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return x}function qn(){function c(x){return y.call(c.src,c.listener,x)}const y=nf;return c}function on(c,y,x,w,F){if(Array.isArray(y))for(var Y=0;Y<y.length;Y++)on(c,y[Y],x,w,F);else w=m(w)?!!w.capture:!!w,x=mu(x),c&&c[ne]?(c=c.i,Y=String(y).toString(),Y in c.g&&(y=c.g[Y],x=xt(y,x,w,F),x>-1&&(yt(y[x]),Array.prototype.splice.call(y,x,1),y.length==0&&(delete c.g[Y],c.h--)))):c&&(c=bo(c))&&(y=c.g[y.toString()],c=-1,y&&(c=xt(y,x,w,F)),(x=c>-1?y[c]:null)&&oa(x))}function oa(c){if(typeof c!="number"&&c&&!c.da){var y=c.src;if(y&&y[ne])jt(y.i,c);else{var x=c.type,w=c.proxy;y.removeEventListener?y.removeEventListener(x,w,c.capture):y.detachEvent?y.detachEvent(ts(x),w):y.addListener&&y.removeListener&&y.removeListener(w),(x=bo(y))?(jt(x,c),x.h==0&&(x.src=null,y[ge]=null)):yt(c)}}}function ts(c){return c in Lt?Lt[c]:Lt[c]="on"+c}function nf(c,y){if(c.da)c=!0;else{y=new ue(y,this);const x=c.listener,w=c.ha||c.src;c.fa&&oa(c),c=x.call(w,y)}return c}function bo(c){return c=c[ge],c instanceof gt?c:null}var dn="__closure_events_fn_"+(Math.random()*1e9>>>0);function mu(c){return typeof c=="function"?c:(c[dn]||(c[dn]=function(y){return c.handleEvent(y)}),c[dn])}function Me(){M.call(this),this.i=new gt(this),this.M=this,this.G=null}b(Me,M),Me.prototype[ne]=!0,Me.prototype.removeEventListener=function(c,y,x,w){on(this,c,y,x,w)};function Le(c,y){var x,w=c.G;if(w)for(x=[];w;w=w.G)x.push(w);if(c=c.M,w=y.type||y,typeof y=="string")y=new V(y,c);else if(y instanceof V)y.target=y.target||c;else{var F=y;y=new V(w,c),ct(y,F)}F=!0;let Y,lt;if(x)for(lt=x.length-1;lt>=0;lt--)Y=y.g=x[lt],F=Di(Y,w,!0,y)&&F;if(Y=y.g=c,F=Di(Y,w,!0,y)&&F,F=Di(Y,w,!1,y)&&F,x)for(lt=0;lt<x.length;lt++)Y=y.g=x[lt],F=Di(Y,w,!1,y)&&F}Me.prototype.N=function(){if(Me.Z.N.call(this),this.i){var c=this.i;for(const y in c.g){const x=c.g[y];for(let w=0;w<x.length;w++)yt(x[w]);delete c.g[y],c.h--}}this.G=null},Me.prototype.J=function(c,y,x,w){return this.i.add(String(c),y,!1,x,w)},Me.prototype.K=function(c,y,x,w){return this.i.add(String(c),y,!0,x,w)};function Di(c,y,x,w){if(y=c.i.g[String(y)],!y)return!0;y=y.concat();let F=!0;for(let Y=0;Y<y.length;++Y){const lt=y[Y];if(lt&&!lt.da&&lt.capture==x){const At=lt.listener,ae=lt.ha||lt.src;lt.fa&&jt(c.i,lt),F=At.call(ae,w)!==!1&&F}}return F&&!w.defaultPrevented}function rf(c,y){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=g(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(y)>2147483647?-1:f.setTimeout(c,y||0)}function To(c){c.g=rf(()=>{c.g=null,c.i&&(c.i=!1,To(c))},c.l);const y=c.h;c.h=null,c.m.apply(null,y)}class af extends M{constructor(y,x){super(),this.m=y,this.l=x,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:To(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function la(c){M.call(this),this.h=c,this.g={}}b(la,M);var lr=[];function Je(c){Ct(c.g,function(y,x){this.g.hasOwnProperty(x)&&oa(y)},c),c.g={}}la.prototype.N=function(){la.Z.N.call(this),Je(this)},la.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var In=f.JSON.stringify,ln=f.JSON.parse,sf=class{stringify(c){return f.JSON.stringify(c,void 0)}parse(c){return f.JSON.parse(c,void 0)}};function gu(){}function yu(){}var ai={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ur(){V.call(this,"d")}b(ur,V);function Hn(){V.call(this,"c")}b(Hn,V);var Dn={},cr=null;function es(){return cr=cr||new Me}Dn.Ia="serverreachability";function wo(c){V.call(this,Dn.Ia,c)}b(wo,V);function hr(c){const y=es();Le(y,new wo(y))}Dn.STAT_EVENT="statevent";function ns(c,y){V.call(this,Dn.STAT_EVENT,c),this.stat=y}b(ns,V);function xe(c){const y=es();Le(y,new ns(y,c))}Dn.Ja="timingevent";function vu(c,y){V.call(this,Dn.Ja,c),this.size=y}b(vu,V);function fr(c,y){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){c()},y)}function dr(){this.g=!0}dr.prototype.ua=function(){this.g=!1};function So(c,y,x,w,F,Y){c.info(function(){if(c.g)if(Y){var lt="",At=Y.split("&");for(let Yt=0;Yt<At.length;Yt++){var ae=At[Yt].split("=");if(ae.length>1){const be=ae[0];ae=ae[1];const _n=be.split("_");lt=_n.length>=2&&_n[1]=="type"?lt+(be+"="+ae+"&"):lt+(be+"=redacted&")}}}else lt=null;else lt=Y;return"XMLHTTP REQ ("+w+") [attempt "+F+"]: "+y+`
`+x+`
`+lt})}function Ao(c,y,x,w,F,Y,lt){c.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+F+"]: "+y+`
`+x+`
`+Y+" "+lt})}function Ni(c,y,x,w){c.info(function(){return"XMLHTTP TEXT ("+y+"): "+si(c,x)+(w?" "+w:"")})}function of(c,y){c.info(function(){return"TIMEOUT: "+y})}dr.prototype.info=function(){};function si(c,y){if(!c.g)return y;if(!y)return null;try{const Y=JSON.parse(y);if(Y){for(c=0;c<Y.length;c++)if(Array.isArray(Y[c])){var x=Y[c];if(!(x.length<2)){var w=x[1];if(Array.isArray(w)&&!(w.length<1)){var F=w[0];if(F!="noop"&&F!="stop"&&F!="close")for(let lt=1;lt<w.length;lt++)w[lt]=""}}}}return In(Y)}catch{return y}}var _e={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},He={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Mi;function ua(){}b(ua,gu),ua.prototype.g=function(){return new XMLHttpRequest},Mi=new ua;function ca(c){return encodeURIComponent(String(c))}function lf(c){var y=1;c=c.split(":");const x=[];for(;y>0&&c.length;)x.push(c.shift()),y--;return c.length&&x.push(c.join(":")),x}function Gn(c,y,x,w){this.j=c,this.i=y,this.l=x,this.S=w||1,this.V=new la(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new pr}function pr(){this.i=null,this.g="",this.h=!1}var is={},oi={};function li(c,y,x){c.M=1,c.A=Vi(fe(y)),c.u=x,c.R=!0,mr(c,null)}function mr(c,y){c.F=Date.now(),ha(c),c.B=fe(c.A);var x=c.B,w=c.S;Array.isArray(w)||(w=[String(w)]),bu(x.i,"t",w),c.C=0,x=c.j.L,c.h=new pr,c.g=ds(c.j,x?y:null,!c.u),c.P>0&&(c.O=new af(g(c.Y,c,c.g),c.P)),y=c.V,x=c.g,w=c.ba;var F="readystatechange";Array.isArray(F)||(F&&(lr[0]=F.toString()),F=lr);for(let Y=0;Y<F.length;Y++){const lt=Ne(x,F[Y],w||y.handleEvent,!1,y.h||y);if(!lt)break;y.g[lt.key]=lt}y=c.J?rt(c.J):{},c.u?(c.v||(c.v="POST"),y["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,y)):(c.v="GET",c.g.ea(c.B,c.v,null,y)),hr(),So(c.i,c.v,c.B,c.l,c.S,c.u)}Gn.prototype.ba=function(c){c=c.target;const y=this.O;y&&tn(c)==3?y.j():this.Y(c)},Gn.prototype.Y=function(c){try{if(c==this.g)t:{const At=tn(this.g),ae=this.g.ya(),Yt=this.g.ca();if(!(At<3)&&(At!=3||this.g&&(this.h.h||this.g.la()||ba(this.g)))){this.K||At!=4||ae==7||(ae==8||Yt<=0?hr(3):hr(2)),ci(this);var y=this.g.ca();this.X=y;var x=gr(this);if(this.o=y==200,Ao(this.i,this.v,this.B,this.l,this.S,At,y),this.o){if(this.U&&!this.L){e:{if(this.g){var w,F=this.g;if((w=F.g?F.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(w)){var Y=w;break e}}Y=null}if(c=Y)Ni(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,rs(this,c);else{this.o=!1,this.m=3,xe(12),hi(this),fa(this);break t}}if(this.R){c=!0;let be;for(;!this.K&&this.C<x.length;)if(be=xu(this,x),be==oi){At==4&&(this.m=4,xe(14),c=!1),Ni(this.i,this.l,null,"[Incomplete Response]");break}else if(be==is){this.m=4,xe(15),Ni(this.i,this.l,x,"[Invalid Chunk]"),c=!1;break}else Ni(this.i,this.l,be,null),rs(this,be);if(Ee(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),At!=4||x.length!=0||this.h.h||(this.m=1,xe(16),c=!1),this.o=this.o&&c,!c)Ni(this.i,this.l,x,"[Invalid Chunked Response]"),hi(this),fa(this);else if(x.length>0&&!this.W){this.W=!0;var lt=this.j;lt.g==this&&lt.aa&&!lt.P&&(lt.j.info("Great, no buffering proxy detected. Bytes received: "+x.length),ko(lt),lt.P=!0,xe(11))}}else Ni(this.i,this.l,x,null),rs(this,x);At==4&&hi(this),this.o&&!this.K&&(At==4?Uo(this.j,this):(this.o=!1,ha(this)))}else Ta(this.g),y==400&&x.indexOf("Unknown SID")>0?(this.m=3,xe(12)):(this.m=0,xe(13)),hi(this),fa(this)}}}catch{}finally{}};function gr(c){if(!Ee(c))return c.g.la();const y=ba(c.g);if(y==="")return"";let x="";const w=y.length,F=tn(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return hi(c),fa(c),"";c.h.i=new f.TextDecoder}for(let Y=0;Y<w;Y++)c.h.h=!0,x+=c.h.i.decode(y[Y],{stream:!(F&&Y==w-1)});return y.length=0,c.h.g+=x,c.C=0,c.h.g}function Ee(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function xu(c,y){var x=c.C,w=y.indexOf(`
`,x);return w==-1?oi:(x=Number(y.substring(x,w)),isNaN(x)?is:(w+=1,w+x>y.length?oi:(y=y.slice(w,w+x),c.C=w+x,y)))}Gn.prototype.cancel=function(){this.K=!0,hi(this)};function ha(c){c.T=Date.now()+c.H,ui(c,c.H)}function ui(c,y){if(c.D!=null)throw Error("WatchDog timer not null");c.D=fr(g(c.aa,c),y)}function ci(c){c.D&&(f.clearTimeout(c.D),c.D=null)}Gn.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(of(this.i,this.B),this.M!=2&&(hr(),xe(17)),hi(this),this.m=2,fa(this)):ui(this,this.T-c)};function fa(c){c.j.I==0||c.K||Uo(c.j,c)}function hi(c){ci(c);var y=c.O;y&&typeof y.dispose=="function"&&y.dispose(),c.O=null,Je(c.V),c.g&&(y=c.g,c.g=null,y.abort(),y.dispose())}function rs(c,y){try{var x=c.j;if(x.I!=0&&(x.g==c||ma(x.h,c))){if(!c.L&&ma(x.h,c)&&x.I==3){try{var w=x.Ba.g.parse(y)}catch{w=null}if(Array.isArray(w)&&w.length==3){var F=w;if(F[0]==0){t:if(!x.v){if(x.g)if(x.g.F+3e3<c.F)fs(x),fi(x);else break t;Vo(x),xe(18)}}else x.xa=F[1],0<x.xa-x.K&&F[2]<37500&&x.F&&x.A==0&&!x.C&&(x.C=fr(g(x.Va,x),6e3));Nn(x.h)<=1&&x.ta&&(x.ta=void 0)}else Pi(x,11)}else if((c.L||x.g==c)&&fs(x),!N(y))for(F=x.Ba.g.parse(y),y=0;y<F.length;y++){let Yt=F[y];const be=Yt[0];if(!(be<=x.K))if(x.K=be,Yt=Yt[1],x.I==2)if(Yt[0]=="c"){x.M=Yt[1],x.ba=Yt[2];const _n=Yt[3];_n!=null&&(x.ka=_n,x.j.info("VER="+x.ka));const di=Yt[4];di!=null&&(x.za=di,x.j.info("SVER="+x.za));const Xn=Yt[5];Xn!=null&&typeof Xn=="number"&&Xn>0&&(w=1.5*Xn,x.O=w,x.j.info("backChannelRequestTimeoutMs_="+w)),w=x;const Wn=c.g;if(Wn){const Zn=Wn.g?Wn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Zn){var Y=w.h;Y.g||Zn.indexOf("spdy")==-1&&Zn.indexOf("quic")==-1&&Zn.indexOf("h2")==-1||(Y.j=Y.l,Y.g=new Set,Y.h&&(as(Y,Y.h),Y.h=null))}if(w.G){const Lo=Wn.g?Wn.g.getResponseHeader("X-HTTP-Session-Id"):null;Lo&&(w.wa=Lo,Wt(w.J,w.G,Lo))}}x.I=3,x.l&&x.l.ra(),x.aa&&(x.T=Date.now()-c.F,x.j.info("Handshake RTT: "+x.T+"ms")),w=x;var lt=c;if(w.na=Du(w,w.L?w.ba:null,w.W),lt.L){Oi(w.h,lt);var At=lt,ae=w.O;ae&&(At.H=ae),At.D&&(ci(At),ha(At)),w.g=lt}else Ru(w);x.i.length>0&&Ra(x)}else Yt[0]!="stop"&&Yt[0]!="close"||Pi(x,7);else x.I==3&&(Yt[0]=="stop"||Yt[0]=="close"?Yt[0]=="stop"?Pi(x,7):Sa(x):Yt[0]!="noop"&&x.l&&x.l.qa(Yt),x.A=0)}}hr(4)}catch{}}var uf=class{constructor(c,y){this.g=c,this.map=y}};function da(c){this.l=c||10,f.PerformanceNavigationTiming?(c=f.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function pa(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Nn(c){return c.h?1:c.g?c.g.size:0}function ma(c,y){return c.h?c.h==y:c.g?c.g.has(y):!1}function as(c,y){c.g?c.g.add(y):c.h=y}function Oi(c,y){c.h&&c.h==y?c.h=null:c.g&&c.g.has(y)&&c.g.delete(y)}da.prototype.cancel=function(){if(this.i=ss(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function ss(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let y=c.i;for(const x of c.g.values())y=y.concat(x.G);return y}return j(c.i)}var os=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cf(c,y){if(c){c=c.split("&");for(let x=0;x<c.length;x++){const w=c[x].indexOf("=");let F,Y=null;w>=0?(F=c[x].substring(0,w),Y=c[x].substring(w+1)):F=c[x],y(F,Y?decodeURIComponent(Y.replace(/\+/g," ")):"")}}}function Yn(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let y;c instanceof Yn?(this.l=c.l,yr(this,c.j),this.o=c.o,this.g=c.g,ga(this,c.u),this.h=c.h,vr(this,Tu(c.i)),this.m=c.m):c&&(y=String(c).match(os))?(this.l=!1,yr(this,y[1]||"",!0),this.o=ya(y[2]||""),this.g=ya(y[3]||"",!0),ga(this,y[4]),this.h=ya(y[5]||"",!0),vr(this,y[6]||"",!0),this.m=ya(y[7]||"")):(this.l=!1,this.i=new Mn(null,this.l))}Yn.prototype.toString=function(){const c=[];var y=this.j;y&&c.push(ze(y,Co,!0),":");var x=this.g;return(x||y=="file")&&(c.push("//"),(y=this.o)&&c.push(ze(y,Co,!0),"@"),c.push(ca(x).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),x=this.u,x!=null&&c.push(":",String(x))),(x=this.h)&&(this.g&&x.charAt(0)!="/"&&c.push("/"),c.push(ze(x,x.charAt(0)=="/"?xr:jo,!0))),(x=this.i.toString())&&c.push("?",x),(x=this.m)&&c.push("#",ze(x,Eu)),c.join("")},Yn.prototype.resolve=function(c){const y=fe(this);let x=!!c.j;x?yr(y,c.j):x=!!c.o,x?y.o=c.o:x=!!c.g,x?y.g=c.g:x=c.u!=null;var w=c.h;if(x)ga(y,c.u);else if(x=!!c.h){if(w.charAt(0)!="/")if(this.g&&!this.h)w="/"+w;else{var F=y.h.lastIndexOf("/");F!=-1&&(w=y.h.slice(0,F+1)+w)}if(F=w,F==".."||F==".")w="";else if(F.indexOf("./")!=-1||F.indexOf("/.")!=-1){w=F.lastIndexOf("/",0)==0,F=F.split("/");const Y=[];for(let lt=0;lt<F.length;){const At=F[lt++];At=="."?w&&lt==F.length&&Y.push(""):At==".."?((Y.length>1||Y.length==1&&Y[0]!="")&&Y.pop(),w&&lt==F.length&&Y.push("")):(Y.push(At),w=!0)}w=Y.join("/")}else w=F}return x?y.h=w:x=c.i.toString()!=="",x?vr(y,Tu(c.i)):x=!!c.m,x&&(y.m=c.m),y};function fe(c){return new Yn(c)}function yr(c,y,x){c.j=x?ya(y,!0):y,c.j&&(c.j=c.j.replace(/:$/,""))}function ga(c,y){if(y){if(y=Number(y),isNaN(y)||y<0)throw Error("Bad port number "+y);c.u=y}else c.u=null}function vr(c,y,x){y instanceof Mn?(c.i=y,No(c.i,c.l)):(x||(y=ze(y,_u)),c.i=new Mn(y,c.l))}function Wt(c,y,x){c.i.set(y,x)}function Vi(c){return Wt(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function ya(c,y){return c?y?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function ze(c,y,x){return typeof c=="string"?(c=encodeURI(c).replace(y,Ro),x&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Ro(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Co=/[#\/\?@]/g,jo=/[#\?:]/g,xr=/[#\?]/g,_u=/[#\?@]/g,Eu=/#/g;function Mn(c,y){this.h=this.g=null,this.i=c||null,this.j=!!y}function ki(c){c.g||(c.g=new Map,c.h=0,c.i&&cf(c.i,function(y,x){c.add(decodeURIComponent(y.replace(/\+/g," ")),x)}))}n=Mn.prototype,n.add=function(c,y){ki(this),this.i=null,c=Qn(this,c);let x=this.g.get(c);return x||this.g.set(c,x=[]),x.push(y),this.h+=1,this};function Io(c,y){ki(c),y=Qn(c,y),c.g.has(y)&&(c.i=null,c.h-=c.g.get(y).length,c.g.delete(y))}function Do(c,y){return ki(c),y=Qn(c,y),c.g.has(y)}n.forEach=function(c,y){ki(this),this.g.forEach(function(x,w){x.forEach(function(F){c.call(y,F,w,this)},this)},this)};function ls(c,y){ki(c);let x=[];if(typeof y=="string")Do(c,y)&&(x=x.concat(c.g.get(Qn(c,y))));else for(c=Array.from(c.g.values()),y=0;y<c.length;y++)x=x.concat(c[y]);return x}n.set=function(c,y){return ki(this),this.i=null,c=Qn(this,c),Do(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[y]),this.h+=1,this},n.get=function(c,y){return c?(c=ls(this,c),c.length>0?String(c[0]):y):y};function bu(c,y,x){Io(c,y),x.length>0&&(c.i=null,c.g.set(Qn(c,y),j(x)),c.h+=x.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],y=Array.from(this.g.keys());for(let w=0;w<y.length;w++){var x=y[w];const F=ca(x);x=ls(this,x);for(let Y=0;Y<x.length;Y++){let lt=F;x[Y]!==""&&(lt+="="+ca(x[Y])),c.push(lt)}}return this.i=c.join("&")};function Tu(c){const y=new Mn;return y.i=c.i,c.g&&(y.g=new Map(c.g),y.h=c.h),y}function Qn(c,y){return y=String(y),c.j&&(y=y.toLowerCase()),y}function No(c,y){y&&!c.j&&(ki(c),c.i=null,c.g.forEach(function(x,w){const F=w.toLowerCase();w!=F&&(Io(this,w),bu(this,F,x))},c)),c.j=y}function Mo(c,y){const x=new dr;if(f.Image){const w=new Image;w.onload=_(un,x,"TestLoadImage: loaded",!0,y,w),w.onerror=_(un,x,"TestLoadImage: error",!1,y,w),w.onabort=_(un,x,"TestLoadImage: abort",!1,y,w),w.ontimeout=_(un,x,"TestLoadImage: timeout",!1,y,w),f.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=c}else y(!1)}function _r(c,y){const x=new dr,w=new AbortController,F=setTimeout(()=>{w.abort(),un(x,"TestPingServer: timeout",!1,y)},1e4);fetch(c,{signal:w.signal}).then(Y=>{clearTimeout(F),Y.ok?un(x,"TestPingServer: ok",!0,y):un(x,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(F),un(x,"TestPingServer: error",!1,y)})}function un(c,y,x,w,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),w(x)}catch{}}function wu(){this.g=new sf}function va(c){this.i=c.Sb||null,this.h=c.ab||!1}b(va,gu),va.prototype.g=function(){return new xa(this.i,this.h)};function xa(c,y){Me.call(this),this.H=c,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}b(xa,Me),n=xa.prototype,n.open=function(c,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=y,this.readyState=1,Ui(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const y={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(y.body=c),(this.H||f).fetch(new Request(this.D,y)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,cn(this)),this.readyState=0},n.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Ui(this)),this.g&&(this.readyState=3,Ui(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Er(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function Er(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}n.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var y=c.value?c.value:new Uint8Array(0);(y=this.B.decode(y,{stream:!c.done}))&&(this.response=this.responseText+=y)}c.done?cn(this):Ui(this),this.readyState==3&&Er(this)}},n.Oa=function(c){this.g&&(this.response=this.responseText=c,cn(this))},n.Na=function(c){this.g&&(this.response=c,cn(this))},n.ga=function(){this.g&&cn(this)};function cn(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Ui(c)}n.setRequestHeader=function(c,y){this.A.append(c,y)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],y=this.h.entries();for(var x=y.next();!x.done;)x=x.value,c.push(x[0]+": "+x[1]),x=y.next();return c.join(`\r
`)};function Ui(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(xa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function br(c){let y="";return Ct(c,function(x,w){y+=w,y+=":",y+=x,y+=`\r
`}),y}function On(c,y,x){t:{for(w in x){var w=!1;break t}w=!0}w||(x=br(x),typeof c=="string"?x!=null&&ca(x):Wt(c,y,x))}function ie(c){Me.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}b(ie,Me);var us=/^https?$/i,Su=["POST","PUT"];n=ie.prototype,n.Fa=function(c){this.H=c},n.ea=function(c,y,x,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);y=y?y.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Mi.g(),this.g.onreadystatechange=S(g(this.Ca,this));try{this.B=!0,this.g.open(y,String(c),!0),this.B=!1}catch(Y){_a(this,Y);return}if(c=x||"",x=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var F in w)x.set(F,w[F]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const Y of w.keys())x.set(Y,w.get(Y));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(x.keys()).find(Y=>Y.toLowerCase()=="content-type"),F=f.FormData&&c instanceof f.FormData,!(Array.prototype.indexOf.call(Su,y,void 0)>=0)||w||F||x.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Y,lt]of x)this.g.setRequestHeader(Y,lt);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(Y){_a(this,Y)}};function _a(c,y){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=y,c.o=5,Ea(c),Oe(c)}function Ea(c){c.A||(c.A=!0,Le(c,"complete"),Le(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,Le(this,"complete"),Le(this,"abort"),Oe(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Oe(this,!0)),ie.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Oo(this):this.Xa())},n.Xa=function(){Oo(this)};function Oo(c){if(c.h&&typeof u<"u"){if(c.v&&tn(c)==4)setTimeout(c.Ca.bind(c),0);else if(Le(c,"readystatechange"),tn(c)==4){c.h=!1;try{const Y=c.ca();t:switch(Y){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break t;default:y=!1}var x;if(!(x=y)){var w;if(w=Y===0){let lt=String(c.D).match(os)[1]||null;!lt&&f.self&&f.self.location&&(lt=f.self.location.protocol.slice(0,-1)),w=!us.test(lt?lt.toLowerCase():"")}x=w}if(x)Le(c,"complete"),Le(c,"success");else{c.o=6;try{var F=tn(c)>2?c.g.statusText:""}catch{F=""}c.l=F+" ["+c.ca()+"]",Ea(c)}}finally{Oe(c)}}}}function Oe(c,y){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const x=c.g;c.g=null,y||Le(c,"ready");try{x.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function tn(c){return c.g?c.g.readyState:0}n.ca=function(){try{return tn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(c){if(this.g){var y=this.g.responseText;return c&&y.indexOf(c)==0&&(y=y.substring(c.length)),ln(y)}};function ba(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Ta(c){const y={};c=(c.g&&tn(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<c.length;w++){if(N(c[w]))continue;var x=lf(c[w]);const F=x[0];if(x=x[1],typeof x!="string")continue;x=x.trim();const Y=y[F]||[];y[F]=Y,Y.push(x)}O(y,function(w){return w.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function wa(c,y,x){return x&&x.internalChannelParams&&x.internalChannelParams[c]||y}function cs(c){this.za=0,this.i=[],this.j=new dr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=wa("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=wa("baseRetryDelayMs",5e3,c),this.Za=wa("retryDelaySeedMs",1e4,c),this.Ta=wa("forwardChannelMaxRetries",2,c),this.va=wa("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new da(c&&c.concurrentRequestLimit),this.Ba=new wu,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=cs.prototype,n.ka=8,n.I=1,n.connect=function(c,y,x,w){xe(0),this.W=c,this.H=y||{},x&&w!==void 0&&(this.H.OSID=x,this.H.OAID=w),this.F=this.X,this.J=Du(this,null,this.W),Ra(this)};function Sa(c){if(Aa(c),c.I==3){var y=c.V++,x=fe(c.J);if(Wt(x,"SID",c.M),Wt(x,"RID",y),Wt(x,"TYPE","terminate"),Ca(c,x),y=new Gn(c,c.j,y),y.M=2,y.A=Vi(fe(x)),x=!1,f.navigator&&f.navigator.sendBeacon)try{x=f.navigator.sendBeacon(y.A.toString(),"")}catch{}!x&&f.Image&&(new Image().src=y.A,x=!0),x||(y.g=ds(y.j,null),y.g.ea(y.A)),y.F=Date.now(),ha(y)}Iu(c)}function fi(c){c.g&&(ko(c),c.g.cancel(),c.g=null)}function Aa(c){fi(c),c.v&&(f.clearTimeout(c.v),c.v=null),fs(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&f.clearTimeout(c.m),c.m=null)}function Ra(c){if(!pa(c.h)&&!c.m){c.m=!0;var y=c.Ea;tt||R(),ft||(tt(),ft=!0),I.add(y,c),c.D=0}}function hf(c,y){return Nn(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=y.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=fr(g(c.Ea,c,y),ju(c,c.D)),c.D++,!0)}n.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const F=new Gn(this,this.j,c);let Y=this.o;if(this.U&&(Y?(Y=rt(Y),ct(Y,this.U)):Y=this.U),this.u!==null||this.R||(F.J=Y,Y=null),this.S)t:{for(var y=0,x=0;x<this.i.length;x++){e:{var w=this.i[x];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break e}w=void 0}if(w===void 0)break;if(y+=w,y>4096){y=x;break t}if(y===4096||x===this.i.length-1){y=x+1;break t}}y=1e3}else y=1e3;y=hs(this,F,y),x=fe(this.J),Wt(x,"RID",c),Wt(x,"CVER",22),this.G&&Wt(x,"X-HTTP-Session-Id",this.G),Ca(this,x),Y&&(this.R?y="headers="+ca(br(Y))+"&"+y:this.u&&On(x,this.u,Y)),as(this.h,F),this.Ra&&Wt(x,"TYPE","init"),this.S?(Wt(x,"$req",y),Wt(x,"SID","null"),F.U=!0,li(F,x,null)):li(F,x,y),this.I=2}}else this.I==3&&(c?Au(this,c):this.i.length==0||pa(this.h)||Au(this))};function Au(c,y){var x;y?x=y.l:x=c.V++;const w=fe(c.J);Wt(w,"SID",c.M),Wt(w,"RID",x),Wt(w,"AID",c.K),Ca(c,w),c.u&&c.o&&On(w,c.u,c.o),x=new Gn(c,c.j,x,c.D+1),c.u===null&&(x.J=c.o),y&&(c.i=y.G.concat(c.i)),y=hs(c,x,1e3),x.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),as(c.h,x),li(x,w,y)}function Ca(c,y){c.H&&Ct(c.H,function(x,w){Wt(y,w,x)}),c.l&&Ct({},function(x,w){Wt(y,w,x)})}function hs(c,y,x){x=Math.min(c.i.length,x);const w=c.l?g(c.l.Ka,c.l,c):null;t:{var F=c.i;let At=-1;for(;;){const ae=["count="+x];At==-1?x>0?(At=F[0].g,ae.push("ofs="+At)):At=0:ae.push("ofs="+At);let Yt=!0;for(let be=0;be<x;be++){var Y=F[be].g;const _n=F[be].map;if(Y-=At,Y<0)At=Math.max(0,F[be].g-100),Yt=!1;else try{Y="req"+Y+"_"||"";try{var lt=_n instanceof Map?_n:Object.entries(_n);for(const[di,Xn]of lt){let Wn=Xn;m(Xn)&&(Wn=In(Xn)),ae.push(Y+di+"="+encodeURIComponent(Wn))}}catch(di){throw ae.push(Y+"type="+encodeURIComponent("_badmap")),di}}catch{w&&w(_n)}}if(Yt){lt=ae.join("&");break t}}lt=void 0}return c=c.i.splice(0,x),y.G=c,lt}function Ru(c){if(!c.g&&!c.v){c.Y=1;var y=c.Da;tt||R(),ft||(tt(),ft=!0),I.add(y,c),c.A=0}}function Vo(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=fr(g(c.Da,c),ju(c,c.A)),c.A++,!0)}n.Da=function(){if(this.v=null,Cu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=fr(g(this.Wa,this),c)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,xe(10),fi(this),Cu(this))};function ko(c){c.B!=null&&(f.clearTimeout(c.B),c.B=null)}function Cu(c){c.g=new Gn(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var y=fe(c.na);Wt(y,"RID","rpc"),Wt(y,"SID",c.M),Wt(y,"AID",c.K),Wt(y,"CI",c.F?"0":"1"),!c.F&&c.ia&&Wt(y,"TO",c.ia),Wt(y,"TYPE","xmlhttp"),Ca(c,y),c.u&&c.o&&On(y,c.u,c.o),c.O&&(c.g.H=c.O);var x=c.g;c=c.ba,x.M=1,x.A=Vi(fe(y)),x.u=null,x.R=!0,mr(x,c)}n.Va=function(){this.C!=null&&(this.C=null,fi(this),Vo(this),xe(19))};function fs(c){c.C!=null&&(f.clearTimeout(c.C),c.C=null)}function Uo(c,y){var x=null;if(c.g==y){fs(c),ko(c),c.g=null;var w=2}else if(ma(c.h,y))x=y.G,Oi(c.h,y),w=1;else return;if(c.I!=0){if(y.o)if(w==1){x=y.u?y.u.length:0,y=Date.now()-y.F;var F=c.D;w=es(),Le(w,new vu(w,x)),Ra(c)}else Ru(c);else if(F=y.m,F==3||F==0&&y.X>0||!(w==1&&hf(c,y)||w==2&&Vo(c)))switch(x&&x.length>0&&(y=c.h,y.i=y.i.concat(x)),F){case 1:Pi(c,5);break;case 4:Pi(c,10);break;case 3:Pi(c,6);break;default:Pi(c,2)}}}function ju(c,y){let x=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(x*=2),x*y}function Pi(c,y){if(c.j.info("Error code "+y),y==2){var x=g(c.bb,c),w=c.Ua;const F=!w;w=new Yn(w||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||yr(w,"https"),Vi(w),F?Mo(w.toString(),x):_r(w.toString(),x)}else xe(2);c.I=0,c.l&&c.l.pa(y),Iu(c),Aa(c)}n.bb=function(c){c?(this.j.info("Successfully pinged google.com"),xe(2)):(this.j.info("Failed to ping google.com"),xe(1))};function Iu(c){if(c.I=0,c.ja=[],c.l){const y=ss(c.h);(y.length!=0||c.i.length!=0)&&(U(c.ja,y),U(c.ja,c.i),c.h.i.length=0,j(c.i),c.i.length=0),c.l.oa()}}function Du(c,y,x){var w=x instanceof Yn?fe(x):new Yn(x);if(w.g!="")y&&(w.g=y+"."+w.g),ga(w,w.u);else{var F=f.location;w=F.protocol,y=y?y+"."+F.hostname:F.hostname,F=+F.port;const Y=new Yn(null);w&&yr(Y,w),y&&(Y.g=y),F&&ga(Y,F),x&&(Y.h=x),w=Y}return x=c.G,y=c.wa,x&&y&&Wt(w,x,y),Wt(w,"VER",c.ka),Ca(c,w),w}function ds(c,y,x){if(y&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return y=c.Aa&&!c.ma?new ie(new va({ab:x})):new ie(c.ma),y.Fa(c.L),y}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Nu(){}n=Nu.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function ps(){}ps.prototype.g=function(c,y){return new hn(c,y)};function hn(c,y){Me.call(this),this.g=new cs(y),this.l=c,this.h=y&&y.messageUrlParams||null,c=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(c?c["X-WebChannel-Content-Type"]=y.messageContentType:c={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.sa&&(c?c["X-WebChannel-Client-Profile"]=y.sa:c={"X-WebChannel-Client-Profile":y.sa}),this.g.U=c,(c=y&&y.Qb)&&!N(c)&&(this.g.u=c),this.A=y&&y.supportsCrossDomainXhr||!1,this.v=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!N(y)&&(this.g.G=y,c=this.h,c!==null&&y in c&&(c=this.h,y in c&&delete c[y])),this.j=new Tr(this)}b(hn,Me),hn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},hn.prototype.close=function(){Sa(this.g)},hn.prototype.o=function(c){var y=this.g;if(typeof c=="string"){var x={};x.__data__=c,c=x}else this.v&&(x={},x.__data__=In(c),c=x);y.i.push(new uf(y.Ya++,c)),y.I==3&&Ra(y)},hn.prototype.N=function(){this.g.l=null,delete this.j,Sa(this.g),delete this.g,hn.Z.N.call(this)};function Po(c){ur.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var y=c.__sm__;if(y){t:{for(const x in y){c=x;break t}c=void 0}(this.i=c)&&(c=this.i,y=y!==null&&c in y?y[c]:void 0),this.data=y}else this.data=c}b(Po,ur);function Mu(){Hn.call(this),this.status=1}b(Mu,Hn);function Tr(c){this.g=c}b(Tr,Nu),Tr.prototype.ra=function(){Le(this.g,"a")},Tr.prototype.qa=function(c){Le(this.g,new Po(c))},Tr.prototype.pa=function(c){Le(this.g,new Mu)},Tr.prototype.oa=function(){Le(this.g,"b")},ps.prototype.createWebChannel=ps.prototype.g,hn.prototype.send=hn.prototype.o,hn.prototype.open=hn.prototype.m,hn.prototype.close=hn.prototype.close,aE=function(){return new ps},rE=function(){return es()},iE=Dn,Wp={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},_e.NO_ERROR=0,_e.TIMEOUT=8,_e.HTTP_ERROR=6,eh=_e,He.COMPLETE="complete",nE=He,yu.EventType=ai,ai.OPEN="a",ai.CLOSE="b",ai.ERROR="c",ai.MESSAGE="d",Me.prototype.listen=Me.prototype.J,Nl=yu,ie.prototype.listenOnce=ie.prototype.K,ie.prototype.getLastError=ie.prototype.Ha,ie.prototype.getLastErrorCode=ie.prototype.ya,ie.prototype.getStatus=ie.prototype.ca,ie.prototype.getResponseJson=ie.prototype.La,ie.prototype.getResponseText=ie.prototype.la,ie.prototype.send=ie.prototype.ea,ie.prototype.setWithCredentials=ie.prototype.Fa,eE=ie}).apply(typeof zc<"u"?zc:typeof self<"u"?self:typeof window<"u"?window:{});const Ov="@firebase/firestore",Vv="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let vo="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa=new Y_("@firebase/firestore");function Ks(){return Xa.logLevel}function dt(n,...t){if(Xa.logLevel<=$t.DEBUG){const r=t.map(Bm);Xa.debug(`Firestore (${vo}): ${n}`,...r)}}function ar(n,...t){if(Xa.logLevel<=$t.ERROR){const r=t.map(Bm);Xa.error(`Firestore (${vo}): ${n}`,...r)}}function ro(n,...t){if(Xa.logLevel<=$t.WARN){const r=t.map(Bm);Xa.warn(`Firestore (${vo}): ${n}`,...r)}}function Bm(n){if(typeof n=="string")return n;try{/**
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
 */function Tt(n,t,r){let a="Unexpected state";typeof t=="string"?a=t:r=t,sE(n,a,r)}function sE(n,t,r){let a=`FIRESTORE (${vo}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(r!==void 0)try{a+=" CONTEXT: "+JSON.stringify(r)}catch{a+=" CONTEXT: "+r}throw ar(a),new Error(a)}function Gt(n,t,r,a){let o="Unexpected state";typeof r=="string"?o=r:a=r,n||sE(t,o,a)}function Rt(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class mt extends yo{constructor(t,r){super(t,r),this.code=t,this.message=r,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class oE{constructor(t,r){this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class f6{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,r){t.enqueueRetryable((()=>r(an.UNAUTHENTICATED)))}shutdown(){}}class d6{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,r){this.changeListener=r,t.enqueueRetryable((()=>r(this.token.user)))}shutdown(){this.changeListener=null}}class p6{constructor(t){this.t=t,this.currentUser=an.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,r){Gt(this.o===void 0,42304);let a=this.i;const o=p=>this.i!==a?(a=this.i,r(p)):Promise.resolve();let u=new er;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new er,t.enqueueRetryable((()=>o(this.currentUser)))};const f=()=>{const p=u;t.enqueueRetryable((async()=>{await p.promise,await o(this.currentUser)}))},m=p=>{dt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit((p=>m(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?m(p):(dt("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new er)}}),0),f()}getToken(){const t=this.i,r=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(r).then((a=>this.i!==t?(dt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(Gt(typeof a.accessToken=="string",31837,{l:a}),new oE(a.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Gt(t===null||typeof t=="string",2055,{h:t}),new an(t)}}class m6{constructor(t,r,a){this.P=t,this.T=r,this.I=a,this.type="FirstParty",this.user=an.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class g6{constructor(t,r,a){this.P=t,this.T=r,this.I=a}getToken(){return Promise.resolve(new m6(this.P,this.T,this.I))}start(t,r){t.enqueueRetryable((()=>r(an.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class kv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class y6{constructor(t,r){this.V=r,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,QR(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,r){Gt(this.o===void 0,3512);const a=u=>{u.error!=null&&dt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.m;return this.m=u.token,dt("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?r(u.token):Promise.resolve()};this.o=u=>{t.enqueueRetryable((()=>a(u)))};const o=u=>{dt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):dt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new kv(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((r=>r?(Gt(typeof r.token=="string",44558,{tokenResult:r}),this.m=r.token,new kv(r.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function v6(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),r=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(r);else for(let a=0;a<n;a++)r[a]=Math.floor(256*Math.random());return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=62*Math.floor(4.129032258064516);let a="";for(;a.length<20;){const o=v6(40);for(let u=0;u<o.length;++u)a.length<20&&o[u]<r&&(a+=t.charAt(o[u]%62))}return a}}function Ut(n,t){return n<t?-1:n>t?1:0}function Zp(n,t){const r=Math.min(n.length,t.length);for(let a=0;a<r;a++){const o=n.charAt(a),u=t.charAt(a);if(o!==u)return wp(o)===wp(u)?Ut(o,u):wp(o)?1:-1}return Ut(n.length,t.length)}const x6=55296,_6=57343;function wp(n){const t=n.charCodeAt(0);return t>=x6&&t<=_6}function ao(n,t,r){return n.length===t.length&&n.every(((a,o)=>r(a,t[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv="__name__";class xi{constructor(t,r,a){r===void 0?r=0:r>t.length&&Tt(637,{offset:r,range:t.length}),a===void 0?a=t.length-r:a>t.length-r&&Tt(1746,{length:a,range:t.length-r}),this.segments=t,this.offset=r,this.len=a}get length(){return this.len}isEqual(t){return xi.comparator(this,t)===0}child(t){const r=this.segments.slice(this.offset,this.limit());return t instanceof xi?t.forEach((a=>{r.push(a)})):r.push(t),this.construct(r)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==t.get(r))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==t.get(r))return!1;return!0}forEach(t){for(let r=this.offset,a=this.limit();r<a;r++)t(this.segments[r])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,r){const a=Math.min(t.length,r.length);for(let o=0;o<a;o++){const u=xi.compareSegments(t.get(o),r.get(o));if(u!==0)return u}return Ut(t.length,r.length)}static compareSegments(t,r){const a=xi.isNumericId(t),o=xi.isNumericId(r);return a&&!o?-1:!a&&o?1:a&&o?xi.extractNumericId(t).compare(xi.extractNumericId(r)):Zp(t,r)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Xr.fromString(t.substring(4,t.length-2))}}class oe extends xi{construct(t,r,a){return new oe(t,r,a)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const r=[];for(const a of t){if(a.indexOf("//")>=0)throw new mt(st.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);r.push(...a.split("/").filter((o=>o.length>0)))}return new oe(r)}static emptyPath(){return new oe([])}}const E6=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends xi{construct(t,r,a){return new We(t,r,a)}static isValidIdentifier(t){return E6.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Uv}static keyField(){return new We([Uv])}static fromServerFormat(t){const r=[];let a="",o=0;const u=()=>{if(a.length===0)throw new mt(st.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);r.push(a),a=""};let f=!1;for(;o<t.length;){const m=t[o];if(m==="\\"){if(o+1===t.length)throw new mt(st.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const p=t[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new mt(st.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);a+=p,o+=2}else m==="`"?(f=!f,o++):m!=="."||f?(a+=m,o++):(u(),o++)}if(u(),f)throw new mt(st.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new We(r)}static emptyPath(){return new We([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t){this.path=t}static fromPath(t){return new _t(oe.fromString(t))}static fromName(t){return new _t(oe.fromString(t).popFirst(5))}static empty(){return new _t(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&oe.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,r){return oe.comparator(t.path,r.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new _t(new oe(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lE(n,t,r){if(!r)throw new mt(st.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function b6(n,t,r,a){if(t===!0&&a===!0)throw new mt(st.INVALID_ARGUMENT,`${n} and ${r} cannot be used together.`)}function Pv(n){if(!_t.isDocumentKey(n))throw new mt(st.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Lv(n){if(_t.isDocumentKey(n))throw new mt(st.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function uE(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Fm(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(a){return a.constructor?a.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":Tt(12329,{type:typeof n})}function sr(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new mt(st.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const r=Fm(n);throw new mt(st.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${r}`)}}return n}/**
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
 */function Ie(n,t){const r={typeString:n};return t&&(r.value=t),r}function su(n,t){if(!uE(n))throw new mt(st.INVALID_ARGUMENT,"JSON must be an object");let r;for(const a in t)if(t[a]){const o=t[a].typeString,u="value"in t[a]?{value:t[a].value}:void 0;if(!(a in n)){r=`JSON missing required field: '${a}'`;break}const f=n[a];if(o&&typeof f!==o){r=`JSON field '${a}' must be a ${o}.`;break}if(u!==void 0&&f!==u.value){r=`Expected '${a}' field to equal '${u.value}'`;break}}if(r)throw new mt(st.INVALID_ARGUMENT,r);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv=-62135596800,Bv=1e6;class le{static now(){return le.fromMillis(Date.now())}static fromDate(t){return le.fromMillis(t.getTime())}static fromMillis(t){const r=Math.floor(t/1e3),a=Math.floor((t-1e3*r)*Bv);return new le(r,a)}constructor(t,r){if(this.seconds=t,this.nanoseconds=r,r<0)throw new mt(st.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(r>=1e9)throw new mt(st.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(t<zv)throw new mt(st.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new mt(st.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Bv}_compareTo(t){return this.seconds===t.seconds?Ut(this.nanoseconds,t.nanoseconds):Ut(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:le._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(su(t,le._jsonSchema))return new le(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-zv;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}le._jsonSchemaVersion="firestore/timestamp/1.0",le._jsonSchema={type:Ie("string",le._jsonSchemaVersion),seconds:Ie("number"),nanoseconds:Ie("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Wl=-1;function T6(n,t){const r=n.toTimestamp().seconds,a=n.toTimestamp().nanoseconds+1,o=St.fromTimestamp(a===1e9?new le(r+1,0):new le(r,a));return new Jr(o,_t.empty(),t)}function w6(n){return new Jr(n.readTime,n.key,Wl)}class Jr{constructor(t,r,a){this.readTime=t,this.documentKey=r,this.largestBatchId=a}static min(){return new Jr(St.min(),_t.empty(),Wl)}static max(){return new Jr(St.max(),_t.empty(),Wl)}}function S6(n,t){let r=n.readTime.compareTo(t.readTime);return r!==0?r:(r=_t.comparator(n.documentKey,t.documentKey),r!==0?r:Ut(n.largestBatchId,t.largestBatchId))}/**
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
 */const A6="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class R6{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xo(n){if(n.code!==st.FAILED_PRECONDITION||n.message!==A6)throw n;dt("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((r=>{this.isDone=!0,this.result=r,this.nextCallback&&this.nextCallback(r)}),(r=>{this.isDone=!0,this.error=r,this.catchCallback&&this.catchCallback(r)}))}catch(t){return this.next(void 0,t)}next(t,r){return this.callbackAttached&&Tt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(r,this.error):this.wrapSuccess(t,this.result):new at(((a,o)=>{this.nextCallback=u=>{this.wrapSuccess(t,u).next(a,o)},this.catchCallback=u=>{this.wrapFailure(r,u).next(a,o)}}))}toPromise(){return new Promise(((t,r)=>{this.next(t,r)}))}wrapUserFunction(t){try{const r=t();return r instanceof at?r:at.resolve(r)}catch(r){return at.reject(r)}}wrapSuccess(t,r){return t?this.wrapUserFunction((()=>t(r))):at.resolve(r)}wrapFailure(t,r){return t?this.wrapUserFunction((()=>t(r))):at.reject(r)}static resolve(t){return new at(((r,a)=>{r(t)}))}static reject(t){return new at(((r,a)=>{a(t)}))}static waitFor(t){return new at(((r,a)=>{let o=0,u=0,f=!1;t.forEach((m=>{++o,m.next((()=>{++u,f&&u===o&&r()}),(p=>a(p)))})),f=!0,u===o&&r()}))}static or(t){let r=at.resolve(!1);for(const a of t)r=r.next((o=>o?at.resolve(o):a()));return r}static forEach(t,r){const a=[];return t.forEach(((o,u)=>{a.push(r.call(this,o,u))})),this.waitFor(a)}static mapArray(t,r){return new at(((a,o)=>{const u=t.length,f=new Array(u);let m=0;for(let p=0;p<u;p++){const g=p;r(t[g]).next((_=>{f[g]=_,++m,m===u&&a(f)}),(_=>o(_)))}}))}static doWhile(t,r){return new at(((a,o)=>{const u=()=>{t()===!0?r().next((()=>{u()}),o):a()};u()}))}}function C6(n){const t=n.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}function _o(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class kh{constructor(t,r){this.previousValue=t,r&&(r.sequenceNumberHandler=a=>this.ae(a),this.ue=a=>r.writeSequenceNumber(a))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}kh.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km=-1;function Uh(n){return n==null}function mh(n){return n===0&&1/n==-1/0}function j6(n){return typeof n=="number"&&Number.isInteger(n)&&!mh(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE="";function I6(n){let t="";for(let r=0;r<n.length;r++)t.length>0&&(t=$v(t)),t=D6(n.get(r),t);return $v(t)}function D6(n,t){let r=t;const a=n.length;for(let o=0;o<a;o++){const u=n.charAt(o);switch(u){case"\0":r+="";break;case cE:r+="";break;default:r+=u}}return r}function $v(n){return n+cE+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(n){let t=0;for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t++;return t}function aa(n,t){for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t(r,n[r])}function hE(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t,r){this.comparator=t,this.root=r||Xe.EMPTY}insert(t,r){return new me(this.comparator,this.root.insert(t,r,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(t){return new me(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(t){let r=this.root;for(;!r.isEmpty();){const a=this.comparator(t,r.key);if(a===0)return r.value;a<0?r=r.left:a>0&&(r=r.right)}return null}indexOf(t){let r=0,a=this.root;for(;!a.isEmpty();){const o=this.comparator(t,a.key);if(o===0)return r+a.left.size;o<0?a=a.left:(r+=a.left.size+1,a=a.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((r,a)=>(t(r,a),!1)))}toString(){const t=[];return this.inorderTraversal(((r,a)=>(t.push(`${r}:${a}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Bc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Bc(this.root,t,this.comparator,!1)}getReverseIterator(){return new Bc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Bc(this.root,t,this.comparator,!0)}}class Bc{constructor(t,r,a,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!t.isEmpty();)if(u=r?a(t.key,r):1,r&&o&&(u*=-1),u<0)t=this.isReverse?t.left:t.right;else{if(u===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const r={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return r}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Xe{constructor(t,r,a,o,u){this.key=t,this.value=r,this.color=a??Xe.RED,this.left=o??Xe.EMPTY,this.right=u??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,r,a,o,u){return new Xe(t??this.key,r??this.value,a??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,r,a){let o=this;const u=a(t,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(t,r,a),null):u===0?o.copy(null,r,null,null,null):o.copy(null,null,null,null,o.right.insert(t,r,a)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,r){let a,o=this;if(r(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,r),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),r(t,o.key)===0){if(o.right.isEmpty())return Xe.EMPTY;a=o.right.min(),o=o.copy(a.key,a.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,r))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),r=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,r)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Tt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Tt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw Tt(27949);return t+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw Tt(57766)}get value(){throw Tt(16141)}get color(){throw Tt(16727)}get left(){throw Tt(29726)}get right(){throw Tt(36894)}copy(t,r,a,o,u){return this}insert(t,r,a){return new Xe(t,r)}remove(t,r){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t){this.comparator=t,this.data=new me(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((r,a)=>(t(r),!1)))}forEachInRange(t,r){const a=this.data.getIteratorFrom(t[0]);for(;a.hasNext();){const o=a.getNext();if(this.comparator(o.key,t[1])>=0)return;r(o.key)}}forEachWhile(t,r){let a;for(a=r!==void 0?this.data.getIteratorFrom(r):this.data.getIterator();a.hasNext();)if(!t(a.getNext().key))return}firstAfterOrEqual(t){const r=this.data.getIteratorFrom(t);return r.hasNext()?r.getNext().key:null}getIterator(){return new Kv(this.data.getIterator())}getIteratorFrom(t){return new Kv(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let r=this;return r.size<t.size&&(r=t,t=this),t.forEach((a=>{r=r.add(a)})),r}isEqual(t){if(!(t instanceof Pe)||this.size!==t.size)return!1;const r=this.data.getIterator(),a=t.data.getIterator();for(;r.hasNext();){const o=r.getNext().key,u=a.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((r=>{t.push(r)})),t}toString(){const t=[];return this.forEach((r=>t.push(r))),"SortedSet("+t.toString()+")"}copy(t){const r=new Pe(this.comparator);return r.data=t,r}}class Kv{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class jn{constructor(t){this.fields=t,t.sort(We.comparator)}static empty(){return new jn([])}unionWith(t){let r=new Pe(We.comparator);for(const a of this.fields)r=r.add(a);for(const a of t)r=r.add(a);return new jn(r.toArray())}covers(t){for(const r of this.fields)if(r.isPrefixOf(t))return!0;return!1}isEqual(t){return ao(this.fields,t.fields,((r,a)=>r.isEqual(a)))}}/**
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
 */class fE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ze{constructor(t){this.binaryString=t}static fromBase64String(t){const r=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new fE("Invalid base64 string: "+u):u}})(t);return new Ze(r)}static fromUint8Array(t){const r=(function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u})(t);return new Ze(r)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(r){return btoa(r)})(this.binaryString)}toUint8Array(){return(function(r){const a=new Uint8Array(r.length);for(let o=0;o<r.length;o++)a[o]=r.charCodeAt(o);return a})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Ut(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const N6=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ta(n){if(Gt(!!n,39018),typeof n=="string"){let t=0;const r=N6.exec(n);if(Gt(!!r,46558,{timestamp:n}),r[1]){let o=r[1];o=(o+"000000000").substr(0,9),t=Number(o)}const a=new Date(n);return{seconds:Math.floor(a.getTime()/1e3),nanos:t}}return{seconds:Se(n.seconds),nanos:Se(n.nanos)}}function Se(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ea(n){return typeof n=="string"?Ze.fromBase64String(n):Ze.fromUint8Array(n)}/**
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
 */const dE="server_timestamp",pE="__type__",mE="__previous_value__",gE="__local_write_time__";function qm(n){return(n?.mapValue?.fields||{})[pE]?.stringValue===dE}function Ph(n){const t=n.mapValue.fields[mE];return qm(t)?Ph(t):t}function Zl(n){const t=ta(n.mapValue.fields[gE].timestampValue);return new le(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M6{constructor(t,r,a,o,u,f,m,p,g,_){this.databaseId=t,this.appId=r,this.persistenceKey=a,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=_}}const gh="(default)";class Jl{constructor(t,r){this.projectId=t,this.database=r||gh}static empty(){return new Jl("","")}get isDefaultDatabase(){return this.database===gh}isEqual(t){return t instanceof Jl&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const yE="__type__",O6="__max__",$c={mapValue:{}},vE="__vector__",yh="value";function na(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?qm(n)?4:k6(n)?9007199254740991:V6(n)?10:11:Tt(28295,{value:n})}function Ai(n,t){if(n===t)return!0;const r=na(n);if(r!==na(t))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Zl(n).isEqual(Zl(t));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=ta(o.timestampValue),m=ta(u.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(o,u){return ea(o.bytesValue).isEqual(ea(u.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(o,u){return Se(o.geoPointValue.latitude)===Se(u.geoPointValue.latitude)&&Se(o.geoPointValue.longitude)===Se(u.geoPointValue.longitude)})(n,t);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return Se(o.integerValue)===Se(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=Se(o.doubleValue),m=Se(u.doubleValue);return f===m?mh(f)===mh(m):isNaN(f)&&isNaN(m)}return!1})(n,t);case 9:return ao(n.arrayValue.values||[],t.arrayValue.values||[],Ai);case 10:case 11:return(function(o,u){const f=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Fv(f)!==Fv(m))return!1;for(const p in f)if(f.hasOwnProperty(p)&&(m[p]===void 0||!Ai(f[p],m[p])))return!1;return!0})(n,t);default:return Tt(52216,{left:n})}}function tu(n,t){return(n.values||[]).find((r=>Ai(r,t)))!==void 0}function so(n,t){if(n===t)return 0;const r=na(n),a=na(t);if(r!==a)return Ut(r,a);switch(r){case 0:case 9007199254740991:return 0;case 1:return Ut(n.booleanValue,t.booleanValue);case 2:return(function(u,f){const m=Se(u.integerValue||u.doubleValue),p=Se(f.integerValue||f.doubleValue);return m<p?-1:m>p?1:m===p?0:isNaN(m)?isNaN(p)?0:-1:1})(n,t);case 3:return qv(n.timestampValue,t.timestampValue);case 4:return qv(Zl(n),Zl(t));case 5:return Zp(n.stringValue,t.stringValue);case 6:return(function(u,f){const m=ea(u),p=ea(f);return m.compareTo(p)})(n.bytesValue,t.bytesValue);case 7:return(function(u,f){const m=u.split("/"),p=f.split("/");for(let g=0;g<m.length&&g<p.length;g++){const _=Ut(m[g],p[g]);if(_!==0)return _}return Ut(m.length,p.length)})(n.referenceValue,t.referenceValue);case 8:return(function(u,f){const m=Ut(Se(u.latitude),Se(f.latitude));return m!==0?m:Ut(Se(u.longitude),Se(f.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return Hv(n.arrayValue,t.arrayValue);case 10:return(function(u,f){const m=u.fields||{},p=f.fields||{},g=m[yh]?.arrayValue,_=p[yh]?.arrayValue,b=Ut(g?.values?.length||0,_?.values?.length||0);return b!==0?b:Hv(g,_)})(n.mapValue,t.mapValue);case 11:return(function(u,f){if(u===$c.mapValue&&f===$c.mapValue)return 0;if(u===$c.mapValue)return 1;if(f===$c.mapValue)return-1;const m=u.fields||{},p=Object.keys(m),g=f.fields||{},_=Object.keys(g);p.sort(),_.sort();for(let b=0;b<p.length&&b<_.length;++b){const S=Zp(p[b],_[b]);if(S!==0)return S;const j=so(m[p[b]],g[_[b]]);if(j!==0)return j}return Ut(p.length,_.length)})(n.mapValue,t.mapValue);default:throw Tt(23264,{he:r})}}function qv(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return Ut(n,t);const r=ta(n),a=ta(t),o=Ut(r.seconds,a.seconds);return o!==0?o:Ut(r.nanos,a.nanos)}function Hv(n,t){const r=n.values||[],a=t.values||[];for(let o=0;o<r.length&&o<a.length;++o){const u=so(r[o],a[o]);if(u)return u}return Ut(r.length,a.length)}function oo(n){return Jp(n)}function Jp(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(r){const a=ta(r);return`time(${a.seconds},${a.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(r){return ea(r).toBase64()})(n.bytesValue):"referenceValue"in n?(function(r){return _t.fromName(r).toString()})(n.referenceValue):"geoPointValue"in n?(function(r){return`geo(${r.latitude},${r.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(r){let a="[",o=!0;for(const u of r.values||[])o?o=!1:a+=",",a+=Jp(u);return a+"]"})(n.arrayValue):"mapValue"in n?(function(r){const a=Object.keys(r.fields||{}).sort();let o="{",u=!0;for(const f of a)u?u=!1:o+=",",o+=`${f}:${Jp(r.fields[f])}`;return o+"}"})(n.mapValue):Tt(61005,{value:n})}function nh(n){switch(na(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Ph(n);return t?16+nh(t):16;case 5:return 2*n.stringValue.length;case 6:return ea(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(a){return(a.values||[]).reduce(((o,u)=>o+nh(u)),0)})(n.arrayValue);case 10:case 11:return(function(a){let o=0;return aa(a.fields,((u,f)=>{o+=u.length+nh(f)})),o})(n.mapValue);default:throw Tt(13486,{value:n})}}function tm(n){return!!n&&"integerValue"in n}function Hm(n){return!!n&&"arrayValue"in n}function Gv(n){return!!n&&"nullValue"in n}function Yv(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ih(n){return!!n&&"mapValue"in n}function V6(n){return(n?.mapValue?.fields||{})[yE]?.stringValue===vE}function Ll(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return aa(n.mapValue.fields,((r,a)=>t.mapValue.fields[r]=Ll(a))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let r=0;r<(n.arrayValue.values||[]).length;++r)t.arrayValue.values[r]=Ll(n.arrayValue.values[r]);return t}return{...n}}function k6(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===O6}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(t){this.value=t}static empty(){return new vn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let r=this.value;for(let a=0;a<t.length-1;++a)if(r=(r.mapValue.fields||{})[t.get(a)],!ih(r))return null;return r=(r.mapValue.fields||{})[t.lastSegment()],r||null}}set(t,r){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ll(r)}setAll(t){let r=We.emptyPath(),a={},o=[];t.forEach(((f,m)=>{if(!r.isImmediateParentOf(m)){const p=this.getFieldsMap(r);this.applyChanges(p,a,o),a={},o=[],r=m.popLast()}f?a[m.lastSegment()]=Ll(f):o.push(m.lastSegment())}));const u=this.getFieldsMap(r);this.applyChanges(u,a,o)}delete(t){const r=this.field(t.popLast());ih(r)&&r.mapValue.fields&&delete r.mapValue.fields[t.lastSegment()]}isEqual(t){return Ai(this.value,t.value)}getFieldsMap(t){let r=this.value;r.mapValue.fields||(r.mapValue={fields:{}});for(let a=0;a<t.length;++a){let o=r.mapValue.fields[t.get(a)];ih(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},r.mapValue.fields[t.get(a)]=o),r=o}return r.mapValue.fields}applyChanges(t,r,a){aa(r,((o,u)=>t[o]=u));for(const o of a)delete t[o]}clone(){return new vn(Ll(this.value))}}function xE(n){const t=[];return aa(n.fields,((r,a)=>{const o=new We([r]);if(ih(a)){const u=xE(a.mapValue).fields;if(u.length===0)t.push(o);else for(const f of u)t.push(o.child(f))}else t.push(o)})),new jn(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(t,r,a,o,u,f,m){this.key=t,this.documentType=r,this.version=a,this.readTime=o,this.createTime=u,this.data=f,this.documentState=m}static newInvalidDocument(t){return new sn(t,0,St.min(),St.min(),St.min(),vn.empty(),0)}static newFoundDocument(t,r,a,o){return new sn(t,1,r,St.min(),a,o,0)}static newNoDocument(t,r){return new sn(t,2,r,St.min(),St.min(),vn.empty(),0)}static newUnknownDocument(t,r){return new sn(t,3,r,St.min(),St.min(),vn.empty(),2)}convertToFoundDocument(t,r){return!this.createTime.isEqual(St.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=r,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=vn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=vn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=St.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof sn&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new sn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class vh{constructor(t,r){this.position=t,this.inclusive=r}}function Qv(n,t,r){let a=0;for(let o=0;o<n.position.length;o++){const u=t[o],f=n.position[o];if(u.field.isKeyField()?a=_t.comparator(_t.fromName(f.referenceValue),r.key):a=so(f,r.data.field(u.field)),u.dir==="desc"&&(a*=-1),a!==0)break}return a}function Xv(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let r=0;r<n.position.length;r++)if(!Ai(n.position[r],t.position[r]))return!1;return!0}/**
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
 */class xh{constructor(t,r="asc"){this.field=t,this.dir=r}}function U6(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class _E{}class Ue extends _E{constructor(t,r,a){super(),this.field=t,this.op=r,this.value=a}static create(t,r,a){return t.isKeyField()?r==="in"||r==="not-in"?this.createKeyFieldInFilter(t,r,a):new L6(t,r,a):r==="array-contains"?new $6(t,a):r==="in"?new F6(t,a):r==="not-in"?new K6(t,a):r==="array-contains-any"?new q6(t,a):new Ue(t,r,a)}static createKeyFieldInFilter(t,r,a){return r==="in"?new z6(t,a):new B6(t,a)}matches(t){const r=t.data.field(this.field);return this.op==="!="?r!==null&&r.nullValue===void 0&&this.matchesComparison(so(r,this.value)):r!==null&&na(this.value)===na(r)&&this.matchesComparison(so(r,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Tt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ri extends _E{constructor(t,r){super(),this.filters=t,this.op=r,this.Pe=null}static create(t,r){return new Ri(t,r)}matches(t){return EE(this)?this.filters.find((r=>!r.matches(t)))===void 0:this.filters.find((r=>r.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,r)=>t.concat(r.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function EE(n){return n.op==="and"}function bE(n){return P6(n)&&EE(n)}function P6(n){for(const t of n.filters)if(t instanceof Ri)return!1;return!0}function em(n){if(n instanceof Ue)return n.field.canonicalString()+n.op.toString()+oo(n.value);if(bE(n))return n.filters.map((t=>em(t))).join(",");{const t=n.filters.map((r=>em(r))).join(",");return`${n.op}(${t})`}}function TE(n,t){return n instanceof Ue?(function(a,o){return o instanceof Ue&&a.op===o.op&&a.field.isEqual(o.field)&&Ai(a.value,o.value)})(n,t):n instanceof Ri?(function(a,o){return o instanceof Ri&&a.op===o.op&&a.filters.length===o.filters.length?a.filters.reduce(((u,f,m)=>u&&TE(f,o.filters[m])),!0):!1})(n,t):void Tt(19439)}function wE(n){return n instanceof Ue?(function(r){return`${r.field.canonicalString()} ${r.op} ${oo(r.value)}`})(n):n instanceof Ri?(function(r){return r.op.toString()+" {"+r.getFilters().map(wE).join(" ,")+"}"})(n):"Filter"}class L6 extends Ue{constructor(t,r,a){super(t,r,a),this.key=_t.fromName(a.referenceValue)}matches(t){const r=_t.comparator(t.key,this.key);return this.matchesComparison(r)}}class z6 extends Ue{constructor(t,r){super(t,"in",r),this.keys=SE("in",r)}matches(t){return this.keys.some((r=>r.isEqual(t.key)))}}class B6 extends Ue{constructor(t,r){super(t,"not-in",r),this.keys=SE("not-in",r)}matches(t){return!this.keys.some((r=>r.isEqual(t.key)))}}function SE(n,t){return(t.arrayValue?.values||[]).map((r=>_t.fromName(r.referenceValue)))}class $6 extends Ue{constructor(t,r){super(t,"array-contains",r)}matches(t){const r=t.data.field(this.field);return Hm(r)&&tu(r.arrayValue,this.value)}}class F6 extends Ue{constructor(t,r){super(t,"in",r)}matches(t){const r=t.data.field(this.field);return r!==null&&tu(this.value.arrayValue,r)}}class K6 extends Ue{constructor(t,r){super(t,"not-in",r)}matches(t){if(tu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const r=t.data.field(this.field);return r!==null&&r.nullValue===void 0&&!tu(this.value.arrayValue,r)}}class q6 extends Ue{constructor(t,r){super(t,"array-contains-any",r)}matches(t){const r=t.data.field(this.field);return!(!Hm(r)||!r.arrayValue.values)&&r.arrayValue.values.some((a=>tu(this.value.arrayValue,a)))}}/**
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
 */class H6{constructor(t,r=null,a=[],o=[],u=null,f=null,m=null){this.path=t,this.collectionGroup=r,this.orderBy=a,this.filters=o,this.limit=u,this.startAt=f,this.endAt=m,this.Te=null}}function Wv(n,t=null,r=[],a=[],o=null,u=null,f=null){return new H6(n,t,r,a,o,u,f)}function Gm(n){const t=Rt(n);if(t.Te===null){let r=t.path.canonicalString();t.collectionGroup!==null&&(r+="|cg:"+t.collectionGroup),r+="|f:",r+=t.filters.map((a=>em(a))).join(","),r+="|ob:",r+=t.orderBy.map((a=>(function(u){return u.field.canonicalString()+u.dir})(a))).join(","),Uh(t.limit)||(r+="|l:",r+=t.limit),t.startAt&&(r+="|lb:",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((a=>oo(a))).join(",")),t.endAt&&(r+="|ub:",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((a=>oo(a))).join(",")),t.Te=r}return t.Te}function Ym(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let r=0;r<n.orderBy.length;r++)if(!U6(n.orderBy[r],t.orderBy[r]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let r=0;r<n.filters.length;r++)if(!TE(n.filters[r],t.filters[r]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Xv(n.startAt,t.startAt)&&Xv(n.endAt,t.endAt)}function nm(n){return _t.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(t,r=null,a=[],o=[],u=null,f="F",m=null,p=null){this.path=t,this.collectionGroup=r,this.explicitOrderBy=a,this.filters=o,this.limit=u,this.limitType=f,this.startAt=m,this.endAt=p,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function G6(n,t,r,a,o,u,f,m){return new Lh(n,t,r,a,o,u,f,m)}function Qm(n){return new Lh(n)}function Zv(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Y6(n){return n.collectionGroup!==null}function zl(n){const t=Rt(n);if(t.Ie===null){t.Ie=[];const r=new Set;for(const u of t.explicitOrderBy)t.Ie.push(u),r.add(u.field.canonicalString());const a=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new Pe(We.comparator);return f.filters.forEach((p=>{p.getFlattenedFilters().forEach((g=>{g.isInequality()&&(m=m.add(g.field))}))})),m})(t).forEach((u=>{r.has(u.canonicalString())||u.isKeyField()||t.Ie.push(new xh(u,a))})),r.has(We.keyField().canonicalString())||t.Ie.push(new xh(We.keyField(),a))}return t.Ie}function Ei(n){const t=Rt(n);return t.Ee||(t.Ee=Q6(t,zl(n))),t.Ee}function Q6(n,t){if(n.limitType==="F")return Wv(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new xh(o.field,u)}));const r=n.endAt?new vh(n.endAt.position,n.endAt.inclusive):null,a=n.startAt?new vh(n.startAt.position,n.startAt.inclusive):null;return Wv(n.path,n.collectionGroup,t,n.filters,n.limit,r,a)}}function im(n,t,r){return new Lh(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,r,n.startAt,n.endAt)}function zh(n,t){return Ym(Ei(n),Ei(t))&&n.limitType===t.limitType}function AE(n){return`${Gm(Ei(n))}|lt:${n.limitType}`}function qs(n){return`Query(target=${(function(r){let a=r.path.canonicalString();return r.collectionGroup!==null&&(a+=" collectionGroup="+r.collectionGroup),r.filters.length>0&&(a+=`, filters: [${r.filters.map((o=>wE(o))).join(", ")}]`),Uh(r.limit)||(a+=", limit: "+r.limit),r.orderBy.length>0&&(a+=`, orderBy: [${r.orderBy.map((o=>(function(f){return`${f.field.canonicalString()} (${f.dir})`})(o))).join(", ")}]`),r.startAt&&(a+=", startAt: ",a+=r.startAt.inclusive?"b:":"a:",a+=r.startAt.position.map((o=>oo(o))).join(",")),r.endAt&&(a+=", endAt: ",a+=r.endAt.inclusive?"a:":"b:",a+=r.endAt.position.map((o=>oo(o))).join(",")),`Target(${a})`})(Ei(n))}; limitType=${n.limitType})`}function Bh(n,t){return t.isFoundDocument()&&(function(a,o){const u=o.key.path;return a.collectionGroup!==null?o.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(u):_t.isDocumentKey(a.path)?a.path.isEqual(u):a.path.isImmediateParentOf(u)})(n,t)&&(function(a,o){for(const u of zl(a))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(n,t)&&(function(a,o){for(const u of a.filters)if(!u.matches(o))return!1;return!0})(n,t)&&(function(a,o){return!(a.startAt&&!(function(f,m,p){const g=Qv(f,m,p);return f.inclusive?g<=0:g<0})(a.startAt,zl(a),o)||a.endAt&&!(function(f,m,p){const g=Qv(f,m,p);return f.inclusive?g>=0:g>0})(a.endAt,zl(a),o))})(n,t)}function X6(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function RE(n){return(t,r)=>{let a=!1;for(const o of zl(n)){const u=W6(o,t,r);if(u!==0)return u;a=a||o.field.isKeyField()}return 0}}function W6(n,t,r){const a=n.field.isKeyField()?_t.comparator(t.key,r.key):(function(u,f,m){const p=f.data.field(u),g=m.data.field(u);return p!==null&&g!==null?so(p,g):Tt(42886)})(n.field,t,r);switch(n.dir){case"asc":return a;case"desc":return-1*a;default:return Tt(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(t,r){this.mapKeyFn=t,this.equalsFn=r,this.inner={},this.innerSize=0}get(t){const r=this.mapKeyFn(t),a=this.inner[r];if(a!==void 0){for(const[o,u]of a)if(this.equalsFn(o,t))return u}}has(t){return this.get(t)!==void 0}set(t,r){const a=this.mapKeyFn(t),o=this.inner[a];if(o===void 0)return this.inner[a]=[[t,r]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],t))return void(o[u]=[t,r]);o.push([t,r]),this.innerSize++}delete(t){const r=this.mapKeyFn(t),a=this.inner[r];if(a===void 0)return!1;for(let o=0;o<a.length;o++)if(this.equalsFn(a[o][0],t))return a.length===1?delete this.inner[r]:a.splice(o,1),this.innerSize--,!0;return!1}forEach(t){aa(this.inner,((r,a)=>{for(const[o,u]of a)t(o,u)}))}isEmpty(){return hE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z6=new me(_t.comparator);function or(){return Z6}const CE=new me(_t.comparator);function Ml(...n){let t=CE;for(const r of n)t=t.insert(r.key,r);return t}function jE(n){let t=CE;return n.forEach(((r,a)=>t=t.insert(r,a.overlayedDocument))),t}function Ha(){return Bl()}function IE(){return Bl()}function Bl(){return new Za((n=>n.toString()),((n,t)=>n.isEqual(t)))}const J6=new me(_t.comparator),tC=new Pe(_t.comparator);function Pt(...n){let t=tC;for(const r of n)t=t.add(r);return t}const eC=new Pe(Ut);function nC(){return eC}/**
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
 */function Xm(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:mh(t)?"-0":t}}function DE(n){return{integerValue:""+n}}function NE(n,t){return j6(t)?DE(t):Xm(n,t)}/**
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
 */class $h{constructor(){this._=void 0}}function iC(n,t,r){return n instanceof _h?(function(o,u){const f={fields:{[pE]:{stringValue:dE},[gE]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&qm(u)&&(u=Ph(u)),u&&(f.fields[mE]=u),{mapValue:f}})(r,t):n instanceof eu?OE(n,t):n instanceof nu?VE(n,t):(function(o,u){const f=ME(o,u),m=Jv(f)+Jv(o.Ae);return tm(f)&&tm(o.Ae)?DE(m):Xm(o.serializer,m)})(n,t)}function rC(n,t,r){return n instanceof eu?OE(n,t):n instanceof nu?VE(n,t):r}function ME(n,t){return n instanceof iu?(function(a){return tm(a)||(function(u){return!!u&&"doubleValue"in u})(a)})(t)?t:{integerValue:0}:null}class _h extends $h{}class eu extends $h{constructor(t){super(),this.elements=t}}function OE(n,t){const r=kE(t);for(const a of n.elements)r.some((o=>Ai(o,a)))||r.push(a);return{arrayValue:{values:r}}}class nu extends $h{constructor(t){super(),this.elements=t}}function VE(n,t){let r=kE(t);for(const a of n.elements)r=r.filter((o=>!Ai(o,a)));return{arrayValue:{values:r}}}class iu extends $h{constructor(t,r){super(),this.serializer=t,this.Ae=r}}function Jv(n){return Se(n.integerValue||n.doubleValue)}function kE(n){return Hm(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(t,r){this.field=t,this.transform=r}}function sC(n,t){return n.field.isEqual(t.field)&&(function(a,o){return a instanceof eu&&o instanceof eu||a instanceof nu&&o instanceof nu?ao(a.elements,o.elements,Ai):a instanceof iu&&o instanceof iu?Ai(a.Ae,o.Ae):a instanceof _h&&o instanceof _h})(n.transform,t.transform)}class oC{constructor(t,r){this.version=t,this.transformResults=r}}class bi{constructor(t,r){this.updateTime=t,this.exists=r}static none(){return new bi}static exists(t){return new bi(void 0,t)}static updateTime(t){return new bi(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function rh(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Fh{}function UE(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new LE(n.key,bi.none()):new ou(n.key,n.data,bi.none());{const r=n.data,a=vn.empty();let o=new Pe(We.comparator);for(let u of t.fields)if(!o.has(u)){let f=r.field(u);f===null&&u.length>1&&(u=u.popLast(),f=r.field(u)),f===null?a.delete(u):a.set(u,f),o=o.add(u)}return new sa(n.key,a,new jn(o.toArray()),bi.none())}}function lC(n,t,r){n instanceof ou?(function(o,u,f){const m=o.value.clone(),p=ex(o.fieldTransforms,u,f.transformResults);m.setAll(p),u.convertToFoundDocument(f.version,m).setHasCommittedMutations()})(n,t,r):n instanceof sa?(function(o,u,f){if(!rh(o.precondition,u))return void u.convertToUnknownDocument(f.version);const m=ex(o.fieldTransforms,u,f.transformResults),p=u.data;p.setAll(PE(o)),p.setAll(m),u.convertToFoundDocument(f.version,p).setHasCommittedMutations()})(n,t,r):(function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()})(0,t,r)}function $l(n,t,r,a){return n instanceof ou?(function(u,f,m,p){if(!rh(u.precondition,f))return m;const g=u.value.clone(),_=nx(u.fieldTransforms,p,f);return g.setAll(_),f.convertToFoundDocument(f.version,g).setHasLocalMutations(),null})(n,t,r,a):n instanceof sa?(function(u,f,m,p){if(!rh(u.precondition,f))return m;const g=nx(u.fieldTransforms,p,f),_=f.data;return _.setAll(PE(u)),_.setAll(g),f.convertToFoundDocument(f.version,_).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((b=>b.field)))})(n,t,r,a):(function(u,f,m){return rh(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m})(n,t,r)}function uC(n,t){let r=null;for(const a of n.fieldTransforms){const o=t.data.field(a.field),u=ME(a.transform,o||null);u!=null&&(r===null&&(r=vn.empty()),r.set(a.field,u))}return r||null}function tx(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(a,o){return a===void 0&&o===void 0||!(!a||!o)&&ao(a,o,((u,f)=>sC(u,f)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class ou extends Fh{constructor(t,r,a,o=[]){super(),this.key=t,this.value=r,this.precondition=a,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class sa extends Fh{constructor(t,r,a,o,u=[]){super(),this.key=t,this.data=r,this.fieldMask=a,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function PE(n){const t=new Map;return n.fieldMask.fields.forEach((r=>{if(!r.isEmpty()){const a=n.data.field(r);t.set(r,a)}})),t}function ex(n,t,r){const a=new Map;Gt(n.length===r.length,32656,{Re:r.length,Ve:n.length});for(let o=0;o<r.length;o++){const u=n[o],f=u.transform,m=t.data.field(u.field);a.set(u.field,rC(f,m,r[o]))}return a}function nx(n,t,r){const a=new Map;for(const o of n){const u=o.transform,f=r.data.field(o.field);a.set(o.field,iC(u,f,t))}return a}class LE extends Fh{constructor(t,r){super(),this.key=t,this.precondition=r,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cC extends Fh{constructor(t,r){super(),this.key=t,this.precondition=r,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(t,r,a,o){this.batchId=t,this.localWriteTime=r,this.baseMutations=a,this.mutations=o}applyToRemoteDocument(t,r){const a=r.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(t.key)&&lC(u,t,a[o])}}applyToLocalView(t,r){for(const a of this.baseMutations)a.key.isEqual(t.key)&&(r=$l(a,t,r,this.localWriteTime));for(const a of this.mutations)a.key.isEqual(t.key)&&(r=$l(a,t,r,this.localWriteTime));return r}applyToLocalDocumentSet(t,r){const a=IE();return this.mutations.forEach((o=>{const u=t.get(o.key),f=u.overlayedDocument;let m=this.applyToLocalView(f,u.mutatedFields);m=r.has(o.key)?null:m;const p=UE(f,m);p!==null&&a.set(o.key,p),f.isValidDocument()||f.convertToNoDocument(St.min())})),a}keys(){return this.mutations.reduce(((t,r)=>t.add(r.key)),Pt())}isEqual(t){return this.batchId===t.batchId&&ao(this.mutations,t.mutations,((r,a)=>tx(r,a)))&&ao(this.baseMutations,t.baseMutations,((r,a)=>tx(r,a)))}}class Wm{constructor(t,r,a,o){this.batch=t,this.commitVersion=r,this.mutationResults=a,this.docVersions=o}static from(t,r,a){Gt(t.mutations.length===a.length,58842,{me:t.mutations.length,fe:a.length});let o=(function(){return J6})();const u=t.mutations;for(let f=0;f<u.length;f++)o=o.insert(u[f].key,a[f].version);return new Wm(t,r,a,o)}}/**
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
 */let fC=class{constructor(t,r){this.largestBatchId=t,this.mutation=r}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class dC{constructor(t,r){this.count=t,this.unchangedNames=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce,Bt;function pC(n){switch(n){case st.OK:return Tt(64938);case st.CANCELLED:case st.UNKNOWN:case st.DEADLINE_EXCEEDED:case st.RESOURCE_EXHAUSTED:case st.INTERNAL:case st.UNAVAILABLE:case st.UNAUTHENTICATED:return!1;case st.INVALID_ARGUMENT:case st.NOT_FOUND:case st.ALREADY_EXISTS:case st.PERMISSION_DENIED:case st.FAILED_PRECONDITION:case st.ABORTED:case st.OUT_OF_RANGE:case st.UNIMPLEMENTED:case st.DATA_LOSS:return!0;default:return Tt(15467,{code:n})}}function zE(n){if(n===void 0)return ar("GRPC error has no .code"),st.UNKNOWN;switch(n){case Ce.OK:return st.OK;case Ce.CANCELLED:return st.CANCELLED;case Ce.UNKNOWN:return st.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return st.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return st.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return st.INTERNAL;case Ce.UNAVAILABLE:return st.UNAVAILABLE;case Ce.UNAUTHENTICATED:return st.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return st.INVALID_ARGUMENT;case Ce.NOT_FOUND:return st.NOT_FOUND;case Ce.ALREADY_EXISTS:return st.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return st.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return st.FAILED_PRECONDITION;case Ce.ABORTED:return st.ABORTED;case Ce.OUT_OF_RANGE:return st.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return st.UNIMPLEMENTED;case Ce.DATA_LOSS:return st.DATA_LOSS;default:return Tt(39323,{code:n})}}(Bt=Ce||(Ce={}))[Bt.OK=0]="OK",Bt[Bt.CANCELLED=1]="CANCELLED",Bt[Bt.UNKNOWN=2]="UNKNOWN",Bt[Bt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Bt[Bt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Bt[Bt.NOT_FOUND=5]="NOT_FOUND",Bt[Bt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Bt[Bt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Bt[Bt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Bt[Bt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Bt[Bt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Bt[Bt.ABORTED=10]="ABORTED",Bt[Bt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Bt[Bt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Bt[Bt.INTERNAL=13]="INTERNAL",Bt[Bt.UNAVAILABLE=14]="UNAVAILABLE",Bt[Bt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function mC(){return new TextEncoder}/**
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
 */const gC=new Xr([4294967295,4294967295],0);function ix(n){const t=mC().encode(n),r=new tE;return r.update(t),new Uint8Array(r.digest())}function rx(n){const t=new DataView(n.buffer),r=t.getUint32(0,!0),a=t.getUint32(4,!0),o=t.getUint32(8,!0),u=t.getUint32(12,!0);return[new Xr([r,a],0),new Xr([o,u],0)]}class Zm{constructor(t,r,a){if(this.bitmap=t,this.padding=r,this.hashCount=a,r<0||r>=8)throw new Ol(`Invalid padding: ${r}`);if(a<0)throw new Ol(`Invalid hash count: ${a}`);if(t.length>0&&this.hashCount===0)throw new Ol(`Invalid hash count: ${a}`);if(t.length===0&&r!==0)throw new Ol(`Invalid padding when bitmap length is 0: ${r}`);this.ge=8*t.length-r,this.pe=Xr.fromNumber(this.ge)}ye(t,r,a){let o=t.add(r.multiply(Xr.fromNumber(a)));return o.compare(gC)===1&&(o=new Xr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const r=ix(t),[a,o]=rx(r);for(let u=0;u<this.hashCount;u++){const f=this.ye(a,o,u);if(!this.we(f))return!1}return!0}static create(t,r,a){const o=t%8==0?0:8-t%8,u=new Uint8Array(Math.ceil(t/8)),f=new Zm(u,o,r);return a.forEach((m=>f.insert(m))),f}insert(t){if(this.ge===0)return;const r=ix(t),[a,o]=rx(r);for(let u=0;u<this.hashCount;u++){const f=this.ye(a,o,u);this.Se(f)}}Se(t){const r=Math.floor(t/8),a=t%8;this.bitmap[r]|=1<<a}}class Ol extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(t,r,a,o,u){this.snapshotVersion=t,this.targetChanges=r,this.targetMismatches=a,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(t,r,a){const o=new Map;return o.set(t,lu.createSynthesizedTargetChangeForCurrentChange(t,r,a)),new Kh(St.min(),o,new me(Ut),or(),Pt())}}class lu{constructor(t,r,a,o,u){this.resumeToken=t,this.current=r,this.addedDocuments=a,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(t,r,a){return new lu(a,r,Pt(),Pt(),Pt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(t,r,a,o){this.be=t,this.removedTargetIds=r,this.key=a,this.De=o}}class BE{constructor(t,r){this.targetId=t,this.Ce=r}}class $E{constructor(t,r,a=Ze.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=r,this.resumeToken=a,this.cause=o}}class ax{constructor(){this.ve=0,this.Fe=sx(),this.Me=Ze.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=Pt(),r=Pt(),a=Pt();return this.Fe.forEach(((o,u)=>{switch(u){case 0:t=t.add(o);break;case 2:r=r.add(o);break;case 1:a=a.add(o);break;default:Tt(38017,{changeType:u})}})),new lu(this.Me,this.xe,t,r,a)}qe(){this.Oe=!1,this.Fe=sx()}Qe(t,r){this.Oe=!0,this.Fe=this.Fe.insert(t,r)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,Gt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class yC{constructor(t){this.Ge=t,this.ze=new Map,this.je=or(),this.Je=Fc(),this.He=Fc(),this.Ye=new me(Ut)}Ze(t){for(const r of t.be)t.De&&t.De.isFoundDocument()?this.Xe(r,t.De):this.et(r,t.key,t.De);for(const r of t.removedTargetIds)this.et(r,t.key,t.De)}tt(t){this.forEachTarget(t,(r=>{const a=this.nt(r);switch(t.state){case 0:this.rt(r)&&a.Le(t.resumeToken);break;case 1:a.Ke(),a.Ne||a.qe(),a.Le(t.resumeToken);break;case 2:a.Ke(),a.Ne||this.removeTarget(r);break;case 3:this.rt(r)&&(a.We(),a.Le(t.resumeToken));break;case 4:this.rt(r)&&(this.it(r),a.Le(t.resumeToken));break;default:Tt(56790,{state:t.state})}}))}forEachTarget(t,r){t.targetIds.length>0?t.targetIds.forEach(r):this.ze.forEach(((a,o)=>{this.rt(o)&&r(o)}))}st(t){const r=t.targetId,a=t.Ce.count,o=this.ot(r);if(o){const u=o.target;if(nm(u))if(a===0){const f=new _t(u.path);this.et(r,f,sn.newNoDocument(f,St.min()))}else Gt(a===1,20013,{expectedCount:a});else{const f=this._t(r);if(f!==a){const m=this.ut(t),p=m?this.ct(m,t,f):1;if(p!==0){this.it(r);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(r,g)}}}}}ut(t){const r=t.Ce.unchangedNames;if(!r||!r.bits)return null;const{bits:{bitmap:a="",padding:o=0},hashCount:u=0}=r;let f,m;try{f=ea(a).toUint8Array()}catch(p){if(p instanceof fE)return ro("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{m=new Zm(f,o,u)}catch(p){return ro(p instanceof Ol?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return m.ge===0?null:m}ct(t,r,a){return r.Ce.count===a-this.Pt(t,r.targetId)?0:2}Pt(t,r){const a=this.Ge.getRemoteKeysForTarget(r);let o=0;return a.forEach((u=>{const f=this.Ge.ht(),m=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;t.mightContain(m)||(this.et(r,u,null),o++)})),o}Tt(t){const r=new Map;this.ze.forEach(((u,f)=>{const m=this.ot(f);if(m){if(u.current&&nm(m.target)){const p=new _t(m.target.path);this.It(p).has(f)||this.Et(f,p)||this.et(f,p,sn.newNoDocument(p,t))}u.Be&&(r.set(f,u.ke()),u.qe())}}));let a=Pt();this.He.forEach(((u,f)=>{let m=!0;f.forEachWhile((p=>{const g=this.ot(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(a=a.add(u))})),this.je.forEach(((u,f)=>f.setReadTime(t)));const o=new Kh(t,r,this.Ye,this.je,a);return this.je=or(),this.Je=Fc(),this.He=Fc(),this.Ye=new me(Ut),o}Xe(t,r){if(!this.rt(t))return;const a=this.Et(t,r.key)?2:0;this.nt(t).Qe(r.key,a),this.je=this.je.insert(r.key,r),this.Je=this.Je.insert(r.key,this.It(r.key).add(t)),this.He=this.He.insert(r.key,this.dt(r.key).add(t))}et(t,r,a){if(!this.rt(t))return;const o=this.nt(t);this.Et(t,r)?o.Qe(r,1):o.$e(r),this.He=this.He.insert(r,this.dt(r).delete(t)),this.He=this.He.insert(r,this.dt(r).add(t)),a&&(this.je=this.je.insert(r,a))}removeTarget(t){this.ze.delete(t)}_t(t){const r=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+r.addedDocuments.size-r.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let r=this.ze.get(t);return r||(r=new ax,this.ze.set(t,r)),r}dt(t){let r=this.He.get(t);return r||(r=new Pe(Ut),this.He=this.He.insert(t,r)),r}It(t){let r=this.Je.get(t);return r||(r=new Pe(Ut),this.Je=this.Je.insert(t,r)),r}rt(t){const r=this.ot(t)!==null;return r||dt("WatchChangeAggregator","Detected inactive target",t),r}ot(t){const r=this.ze.get(t);return r&&r.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new ax),this.Ge.getRemoteKeysForTarget(t).forEach((r=>{this.et(t,r,null)}))}Et(t,r){return this.Ge.getRemoteKeysForTarget(t).has(r)}}function Fc(){return new me(_t.comparator)}function sx(){return new me(_t.comparator)}const vC={asc:"ASCENDING",desc:"DESCENDING"},xC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_C={and:"AND",or:"OR"};class EC{constructor(t,r){this.databaseId=t,this.useProto3Json=r}}function rm(n,t){return n.useProto3Json||Uh(t)?t:{value:t}}function Eh(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function FE(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function bC(n,t){return Eh(n,t.toTimestamp())}function Ti(n){return Gt(!!n,49232),St.fromTimestamp((function(r){const a=ta(r);return new le(a.seconds,a.nanos)})(n))}function Jm(n,t){return am(n,t).canonicalString()}function am(n,t){const r=(function(o){return new oe(["projects",o.projectId,"databases",o.database])})(n).child("documents");return t===void 0?r:r.child(t)}function KE(n){const t=oe.fromString(n);return Gt(QE(t),10190,{key:t.toString()}),t}function sm(n,t){return Jm(n.databaseId,t.path)}function Sp(n,t){const r=KE(t);if(r.get(1)!==n.databaseId.projectId)throw new mt(st.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+n.databaseId.projectId);if(r.get(3)!==n.databaseId.database)throw new mt(st.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+n.databaseId.database);return new _t(HE(r))}function qE(n,t){return Jm(n.databaseId,t)}function TC(n){const t=KE(n);return t.length===4?oe.emptyPath():HE(t)}function om(n){return new oe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function HE(n){return Gt(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function ox(n,t,r){return{name:sm(n,t),fields:r.value.mapValue.fields}}function wC(n,t){let r;if("targetChange"in t){t.targetChange;const a=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Tt(39313,{state:g})})(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],u=(function(g,_){return g.useProto3Json?(Gt(_===void 0||typeof _=="string",58123),Ze.fromBase64String(_||"")):(Gt(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array,16193),Ze.fromUint8Array(_||new Uint8Array))})(n,t.targetChange.resumeToken),f=t.targetChange.cause,m=f&&(function(g){const _=g.code===void 0?st.UNKNOWN:zE(g.code);return new mt(_,g.message||"")})(f);r=new $E(a,o,u,m||null)}else if("documentChange"in t){t.documentChange;const a=t.documentChange;a.document,a.document.name,a.document.updateTime;const o=Sp(n,a.document.name),u=Ti(a.document.updateTime),f=a.document.createTime?Ti(a.document.createTime):St.min(),m=new vn({mapValue:{fields:a.document.fields}}),p=sn.newFoundDocument(o,u,f,m),g=a.targetIds||[],_=a.removedTargetIds||[];r=new ah(g,_,p.key,p)}else if("documentDelete"in t){t.documentDelete;const a=t.documentDelete;a.document;const o=Sp(n,a.document),u=a.readTime?Ti(a.readTime):St.min(),f=sn.newNoDocument(o,u),m=a.removedTargetIds||[];r=new ah([],m,f.key,f)}else if("documentRemove"in t){t.documentRemove;const a=t.documentRemove;a.document;const o=Sp(n,a.document),u=a.removedTargetIds||[];r=new ah([],u,o,null)}else{if(!("filter"in t))return Tt(11601,{Rt:t});{t.filter;const a=t.filter;a.targetId;const{count:o=0,unchangedNames:u}=a,f=new dC(o,u),m=a.targetId;r=new BE(m,f)}}return r}function SC(n,t){let r;if(t instanceof ou)r={update:ox(n,t.key,t.value)};else if(t instanceof LE)r={delete:sm(n,t.key)};else if(t instanceof sa)r={update:ox(n,t.key,t.data),updateMask:OC(t.fieldMask)};else{if(!(t instanceof cC))return Tt(16599,{Vt:t.type});r={verify:sm(n,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map((a=>(function(u,f){const m=f.transform;if(m instanceof _h)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof eu)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof nu)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof iu)return{fieldPath:f.field.canonicalString(),increment:m.Ae};throw Tt(20930,{transform:f.transform})})(0,a)))),t.precondition.isNone||(r.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:bC(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:Tt(27497)})(n,t.precondition)),r}function AC(n,t){return n&&n.length>0?(Gt(t!==void 0,14353),n.map((r=>(function(o,u){let f=o.updateTime?Ti(o.updateTime):Ti(u);return f.isEqual(St.min())&&(f=Ti(u)),new oC(f,o.transformResults||[])})(r,t)))):[]}function RC(n,t){return{documents:[qE(n,t.path)]}}function CC(n,t){const r={structuredQuery:{}},a=t.path;let o;t.collectionGroup!==null?(o=a,r.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=a.popLast(),r.structuredQuery.from=[{collectionId:a.lastSegment()}]),r.parent=qE(n,o);const u=(function(g){if(g.length!==0)return YE(Ri.create(g,"and"))})(t.filters);u&&(r.structuredQuery.where=u);const f=(function(g){if(g.length!==0)return g.map((_=>(function(S){return{field:Hs(S.field),direction:DC(S.dir)}})(_)))})(t.orderBy);f&&(r.structuredQuery.orderBy=f);const m=rm(n,t.limit);return m!==null&&(r.structuredQuery.limit=m),t.startAt&&(r.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(t.startAt)),t.endAt&&(r.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(t.endAt)),{ft:r,parent:o}}function jC(n){let t=TC(n.parent);const r=n.structuredQuery,a=r.from?r.from.length:0;let o=null;if(a>0){Gt(a===1,65062);const _=r.from[0];_.allDescendants?o=_.collectionId:t=t.child(_.collectionId)}let u=[];r.where&&(u=(function(b){const S=GE(b);return S instanceof Ri&&bE(S)?S.getFilters():[S]})(r.where));let f=[];r.orderBy&&(f=(function(b){return b.map((S=>(function(U){return new xh(Gs(U.field),(function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(U.direction))})(S)))})(r.orderBy));let m=null;r.limit&&(m=(function(b){let S;return S=typeof b=="object"?b.value:b,Uh(S)?null:S})(r.limit));let p=null;r.startAt&&(p=(function(b){const S=!!b.before,j=b.values||[];return new vh(j,S)})(r.startAt));let g=null;return r.endAt&&(g=(function(b){const S=!b.before,j=b.values||[];return new vh(j,S)})(r.endAt)),G6(t,o,f,u,m,"F",p,g)}function IC(n,t){const r=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Tt(28987,{purpose:o})}})(t.purpose);return r==null?null:{"goog-listen-tags":r}}function GE(n){return n.unaryFilter!==void 0?(function(r){switch(r.unaryFilter.op){case"IS_NAN":const a=Gs(r.unaryFilter.field);return Ue.create(a,"==",{doubleValue:NaN});case"IS_NULL":const o=Gs(r.unaryFilter.field);return Ue.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Gs(r.unaryFilter.field);return Ue.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Gs(r.unaryFilter.field);return Ue.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Tt(61313);default:return Tt(60726)}})(n):n.fieldFilter!==void 0?(function(r){return Ue.create(Gs(r.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Tt(58110);default:return Tt(50506)}})(r.fieldFilter.op),r.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(r){return Ri.create(r.compositeFilter.filters.map((a=>GE(a))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Tt(1026)}})(r.compositeFilter.op))})(n):Tt(30097,{filter:n})}function DC(n){return vC[n]}function NC(n){return xC[n]}function MC(n){return _C[n]}function Hs(n){return{fieldPath:n.canonicalString()}}function Gs(n){return We.fromServerFormat(n.fieldPath)}function YE(n){return n instanceof Ue?(function(r){if(r.op==="=="){if(Yv(r.value))return{unaryFilter:{field:Hs(r.field),op:"IS_NAN"}};if(Gv(r.value))return{unaryFilter:{field:Hs(r.field),op:"IS_NULL"}}}else if(r.op==="!="){if(Yv(r.value))return{unaryFilter:{field:Hs(r.field),op:"IS_NOT_NAN"}};if(Gv(r.value))return{unaryFilter:{field:Hs(r.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hs(r.field),op:NC(r.op),value:r.value}}})(n):n instanceof Ri?(function(r){const a=r.getFilters().map((o=>YE(o)));return a.length===1?a[0]:{compositeFilter:{op:MC(r.op),filters:a}}})(n):Tt(54877,{filter:n})}function OC(n){const t=[];return n.fields.forEach((r=>t.push(r.canonicalString()))),{fieldPaths:t}}function QE(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(t,r,a,o,u=St.min(),f=St.min(),m=Ze.EMPTY_BYTE_STRING,p=null){this.target=t,this.targetId=r,this.purpose=a,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=m,this.expectedCount=p}withSequenceNumber(t){return new Gr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,r){return new Gr(this.target,this.targetId,this.purpose,this.sequenceNumber,r,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(t){this.yt=t}}function kC(n){const t=jC({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?im(t,t.limit,"L"):t}/**
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
 */class UC{constructor(){this.Cn=new PC}addToCollectionParentIndex(t,r){return this.Cn.add(r),at.resolve()}getCollectionParents(t,r){return at.resolve(this.Cn.getEntries(r))}addFieldIndex(t,r){return at.resolve()}deleteFieldIndex(t,r){return at.resolve()}deleteAllFieldIndexes(t){return at.resolve()}createTargetIndexes(t,r){return at.resolve()}getDocumentsMatchingTarget(t,r){return at.resolve(null)}getIndexType(t,r){return at.resolve(0)}getFieldIndexes(t,r){return at.resolve([])}getNextCollectionGroupToUpdate(t){return at.resolve(null)}getMinOffset(t,r){return at.resolve(Jr.min())}getMinOffsetFromCollectionGroup(t,r){return at.resolve(Jr.min())}updateCollectionGroup(t,r,a){return at.resolve()}updateIndexEntries(t,r){return at.resolve()}}class PC{constructor(){this.index={}}add(t){const r=t.lastSegment(),a=t.popLast(),o=this.index[r]||new Pe(oe.comparator),u=!o.has(a);return this.index[r]=o.add(a),u}has(t){const r=t.lastSegment(),a=t.popLast(),o=this.index[r];return o&&o.has(a)}getEntries(t){return(this.index[t]||new Pe(oe.comparator)).toArray()}}/**
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
 */const lx={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},XE=41943040;class yn{static withCacheSize(t){return new yn(t,yn.DEFAULT_COLLECTION_PERCENTILE,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,r,a){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=r,this.maximumSequenceNumbersToCollect=a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yn.DEFAULT_COLLECTION_PERCENTILE=10,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yn.DEFAULT=new yn(XE,yn.DEFAULT_COLLECTION_PERCENTILE,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yn.DISABLED=new yn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ux="LruGarbageCollector",LC=1048576;function cx([n,t],[r,a]){const o=Ut(n,r);return o===0?Ut(t,a):o}class zC{constructor(t){this.Ir=t,this.buffer=new Pe(cx),this.Er=0}dr(){return++this.Er}Ar(t){const r=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(r);else{const a=this.buffer.last();cx(r,a)<0&&(this.buffer=this.buffer.delete(a).add(r))}}get maxValue(){return this.buffer.last()[0]}}class BC{constructor(t,r,a){this.garbageCollector=t,this.asyncQueue=r,this.localStore=a,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){dt(ux,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(r){_o(r)?dt(ux,"Ignoring IndexedDB error during garbage collection: ",r):await xo(r)}await this.Vr(3e5)}))}}class $C{constructor(t,r){this.mr=t,this.params=r}calculateTargetCount(t,r){return this.mr.gr(t).next((a=>Math.floor(r/100*a)))}nthSequenceNumber(t,r){if(r===0)return at.resolve(kh.ce);const a=new zC(r);return this.mr.forEachTarget(t,(o=>a.Ar(o.sequenceNumber))).next((()=>this.mr.pr(t,(o=>a.Ar(o))))).next((()=>a.maxValue))}removeTargets(t,r,a){return this.mr.removeTargets(t,r,a)}removeOrphanedDocuments(t,r){return this.mr.removeOrphanedDocuments(t,r)}collect(t,r){return this.params.cacheSizeCollectionThreshold===-1?(dt("LruGarbageCollector","Garbage collection skipped; disabled"),at.resolve(lx)):this.getCacheSize(t).next((a=>a<this.params.cacheSizeCollectionThreshold?(dt("LruGarbageCollector",`Garbage collection skipped; Cache size ${a} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),lx):this.yr(t,r)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,r){let a,o,u,f,m,p,g;const _=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((b=>(b>this.params.maximumSequenceNumbersToCollect?(dt("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),o=this.params.maximumSequenceNumbersToCollect):o=b,f=Date.now(),this.nthSequenceNumber(t,o)))).next((b=>(a=b,m=Date.now(),this.removeTargets(t,a,r)))).next((b=>(u=b,p=Date.now(),this.removeOrphanedDocuments(t,a)))).next((b=>(g=Date.now(),Ks()<=$t.DEBUG&&dt("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-_}ms
	Determined least recently used ${o} in `+(m-f)+`ms
	Removed ${u} targets in `+(p-m)+`ms
	Removed ${b} documents in `+(g-p)+`ms
Total Duration: ${g-_}ms`),at.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:b}))))}}function FC(n,t){return new $C(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(){this.changes=new Za((t=>t.toString()),((t,r)=>t.isEqual(r))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,r){this.assertNotApplied(),this.changes.set(t,sn.newInvalidDocument(t).setReadTime(r))}getEntry(t,r){this.assertNotApplied();const a=this.changes.get(r);return a!==void 0?at.resolve(a):this.getFromCache(t,r)}getEntries(t,r){return this.getAllFromCache(t,r)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class qC{constructor(t,r){this.overlayedDocument=t,this.mutatedFields=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(t,r,a,o){this.remoteDocumentCache=t,this.mutationQueue=r,this.documentOverlayCache=a,this.indexManager=o}getDocument(t,r){let a=null;return this.documentOverlayCache.getOverlay(t,r).next((o=>(a=o,this.remoteDocumentCache.getEntry(t,r)))).next((o=>(a!==null&&$l(a.mutation,o,jn.empty(),le.now()),o)))}getDocuments(t,r){return this.remoteDocumentCache.getEntries(t,r).next((a=>this.getLocalViewOfDocuments(t,a,Pt()).next((()=>a))))}getLocalViewOfDocuments(t,r,a=Pt()){const o=Ha();return this.populateOverlays(t,o,r).next((()=>this.computeViews(t,r,o,a).next((u=>{let f=Ml();return u.forEach(((m,p)=>{f=f.insert(m,p.overlayedDocument)})),f}))))}getOverlayedDocuments(t,r){const a=Ha();return this.populateOverlays(t,a,r).next((()=>this.computeViews(t,r,a,Pt())))}populateOverlays(t,r,a){const o=[];return a.forEach((u=>{r.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(t,o).next((u=>{u.forEach(((f,m)=>{r.set(f,m)}))}))}computeViews(t,r,a,o){let u=or();const f=Bl(),m=(function(){return Bl()})();return r.forEach(((p,g)=>{const _=a.get(g.key);o.has(g.key)&&(_===void 0||_.mutation instanceof sa)?u=u.insert(g.key,g):_!==void 0?(f.set(g.key,_.mutation.getFieldMask()),$l(_.mutation,g,_.mutation.getFieldMask(),le.now())):f.set(g.key,jn.empty())})),this.recalculateAndSaveOverlays(t,u).next((p=>(p.forEach(((g,_)=>f.set(g,_))),r.forEach(((g,_)=>m.set(g,new qC(_,f.get(g)??null)))),m)))}recalculateAndSaveOverlays(t,r){const a=Bl();let o=new me(((f,m)=>f-m)),u=Pt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,r).next((f=>{for(const m of f)m.keys().forEach((p=>{const g=r.get(p);if(g===null)return;let _=a.get(p)||jn.empty();_=m.applyToLocalView(g,_),a.set(p,_);const b=(o.get(m.batchId)||Pt()).add(p);o=o.insert(m.batchId,b)}))})).next((()=>{const f=[],m=o.getReverseIterator();for(;m.hasNext();){const p=m.getNext(),g=p.key,_=p.value,b=IE();_.forEach((S=>{if(!u.has(S)){const j=UE(r.get(S),a.get(S));j!==null&&b.set(S,j),u=u.add(S)}})),f.push(this.documentOverlayCache.saveOverlays(t,g,b))}return at.waitFor(f)})).next((()=>a))}recalculateAndSaveOverlaysForDocumentKeys(t,r){return this.remoteDocumentCache.getEntries(t,r).next((a=>this.recalculateAndSaveOverlays(t,a)))}getDocumentsMatchingQuery(t,r,a,o){return(function(f){return _t.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0})(r)?this.getDocumentsMatchingDocumentQuery(t,r.path):Y6(r)?this.getDocumentsMatchingCollectionGroupQuery(t,r,a,o):this.getDocumentsMatchingCollectionQuery(t,r,a,o)}getNextDocuments(t,r,a,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,r,a,o).next((u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,r,a.largestBatchId,o-u.size):at.resolve(Ha());let m=Wl,p=u;return f.next((g=>at.forEach(g,((_,b)=>(m<b.largestBatchId&&(m=b.largestBatchId),u.get(_)?at.resolve():this.remoteDocumentCache.getEntry(t,_).next((S=>{p=p.insert(_,S)}))))).next((()=>this.populateOverlays(t,g,u))).next((()=>this.computeViews(t,p,g,Pt()))).next((_=>({batchId:m,changes:jE(_)})))))}))}getDocumentsMatchingDocumentQuery(t,r){return this.getDocument(t,new _t(r)).next((a=>{let o=Ml();return a.isFoundDocument()&&(o=o.insert(a.key,a)),o}))}getDocumentsMatchingCollectionGroupQuery(t,r,a,o){const u=r.collectionGroup;let f=Ml();return this.indexManager.getCollectionParents(t,u).next((m=>at.forEach(m,(p=>{const g=(function(b,S){return new Lh(S,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)})(r,p.child(u));return this.getDocumentsMatchingCollectionQuery(t,g,a,o).next((_=>{_.forEach(((b,S)=>{f=f.insert(b,S)}))}))})).next((()=>f))))}getDocumentsMatchingCollectionQuery(t,r,a,o){let u;return this.documentOverlayCache.getOverlaysForCollection(t,r.path,a.largestBatchId).next((f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(t,r,a,u,o)))).next((f=>{u.forEach(((p,g)=>{const _=g.getKey();f.get(_)===null&&(f=f.insert(_,sn.newInvalidDocument(_)))}));let m=Ml();return f.forEach(((p,g)=>{const _=u.get(p);_!==void 0&&$l(_.mutation,g,jn.empty(),le.now()),Bh(r,g)&&(m=m.insert(p,g))})),m}))}}/**
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
 */class GC{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,r){return at.resolve(this.Lr.get(r))}saveBundleMetadata(t,r){return this.Lr.set(r.id,(function(o){return{id:o.id,version:o.version,createTime:Ti(o.createTime)}})(r)),at.resolve()}getNamedQuery(t,r){return at.resolve(this.kr.get(r))}saveNamedQuery(t,r){return this.kr.set(r.name,(function(o){return{name:o.name,query:kC(o.bundledQuery),readTime:Ti(o.readTime)}})(r)),at.resolve()}}/**
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
 */class YC{constructor(){this.overlays=new me(_t.comparator),this.qr=new Map}getOverlay(t,r){return at.resolve(this.overlays.get(r))}getOverlays(t,r){const a=Ha();return at.forEach(r,(o=>this.getOverlay(t,o).next((u=>{u!==null&&a.set(o,u)})))).next((()=>a))}saveOverlays(t,r,a){return a.forEach(((o,u)=>{this.St(t,r,u)})),at.resolve()}removeOverlaysForBatchId(t,r,a){const o=this.qr.get(a);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.qr.delete(a)),at.resolve()}getOverlaysForCollection(t,r,a){const o=Ha(),u=r.length+1,f=new _t(r.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const p=m.getNext().value,g=p.getKey();if(!r.isPrefixOf(g.path))break;g.path.length===u&&p.largestBatchId>a&&o.set(p.getKey(),p)}return at.resolve(o)}getOverlaysForCollectionGroup(t,r,a,o){let u=new me(((g,_)=>g-_));const f=this.overlays.getIterator();for(;f.hasNext();){const g=f.getNext().value;if(g.getKey().getCollectionGroup()===r&&g.largestBatchId>a){let _=u.get(g.largestBatchId);_===null&&(_=Ha(),u=u.insert(g.largestBatchId,_)),_.set(g.getKey(),g)}}const m=Ha(),p=u.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((g,_)=>m.set(g,_))),!(m.size()>=o)););return at.resolve(m)}St(t,r,a){const o=this.overlays.get(a.key);if(o!==null){const f=this.qr.get(o.largestBatchId).delete(a.key);this.qr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(a.key,new fC(r,a));let u=this.qr.get(r);u===void 0&&(u=Pt(),this.qr.set(r,u)),this.qr.set(r,u.add(a.key))}}/**
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
 */class QC{constructor(){this.sessionToken=Ze.EMPTY_BYTE_STRING}getSessionToken(t){return at.resolve(this.sessionToken)}setSessionToken(t,r){return this.sessionToken=r,at.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(){this.Qr=new Pe(Ke.$r),this.Ur=new Pe(Ke.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,r){const a=new Ke(t,r);this.Qr=this.Qr.add(a),this.Ur=this.Ur.add(a)}Wr(t,r){t.forEach((a=>this.addReference(a,r)))}removeReference(t,r){this.Gr(new Ke(t,r))}zr(t,r){t.forEach((a=>this.removeReference(a,r)))}jr(t){const r=new _t(new oe([])),a=new Ke(r,t),o=new Ke(r,t+1),u=[];return this.Ur.forEachInRange([a,o],(f=>{this.Gr(f),u.push(f.key)})),u}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const r=new _t(new oe([])),a=new Ke(r,t),o=new Ke(r,t+1);let u=Pt();return this.Ur.forEachInRange([a,o],(f=>{u=u.add(f.key)})),u}containsKey(t){const r=new Ke(t,0),a=this.Qr.firstAfterOrEqual(r);return a!==null&&t.isEqual(a.key)}}class Ke{constructor(t,r){this.key=t,this.Yr=r}static $r(t,r){return _t.comparator(t.key,r.key)||Ut(t.Yr,r.Yr)}static Kr(t,r){return Ut(t.Yr,r.Yr)||_t.comparator(t.key,r.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(t,r){this.indexManager=t,this.referenceDelegate=r,this.mutationQueue=[],this.tr=1,this.Zr=new Pe(Ke.$r)}checkEmpty(t){return at.resolve(this.mutationQueue.length===0)}addMutationBatch(t,r,a,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new hC(u,r,a,o);this.mutationQueue.push(f);for(const m of o)this.Zr=this.Zr.add(new Ke(m.key,u)),this.indexManager.addToCollectionParentIndex(t,m.key.path.popLast());return at.resolve(f)}lookupMutationBatch(t,r){return at.resolve(this.Xr(r))}getNextMutationBatchAfterBatchId(t,r){const a=r+1,o=this.ei(a),u=o<0?0:o;return at.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return at.resolve(this.mutationQueue.length===0?Km:this.tr-1)}getAllMutationBatches(t){return at.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,r){const a=new Ke(r,0),o=new Ke(r,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([a,o],(f=>{const m=this.Xr(f.Yr);u.push(m)})),at.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(t,r){let a=new Pe(Ut);return r.forEach((o=>{const u=new Ke(o,0),f=new Ke(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,f],(m=>{a=a.add(m.Yr)}))})),at.resolve(this.ti(a))}getAllMutationBatchesAffectingQuery(t,r){const a=r.path,o=a.length+1;let u=a;_t.isDocumentKey(u)||(u=u.child(""));const f=new Ke(new _t(u),0);let m=new Pe(Ut);return this.Zr.forEachWhile((p=>{const g=p.key.path;return!!a.isPrefixOf(g)&&(g.length===o&&(m=m.add(p.Yr)),!0)}),f),at.resolve(this.ti(m))}ti(t){const r=[];return t.forEach((a=>{const o=this.Xr(a);o!==null&&r.push(o)})),r}removeMutationBatch(t,r){Gt(this.ni(r.batchId,"removed")===0,55003),this.mutationQueue.shift();let a=this.Zr;return at.forEach(r.mutations,(o=>{const u=new Ke(o.key,r.batchId);return a=a.delete(u),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)})).next((()=>{this.Zr=a}))}ir(t){}containsKey(t,r){const a=new Ke(r,0),o=this.Zr.firstAfterOrEqual(a);return at.resolve(r.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,at.resolve()}ni(t,r){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const r=this.ei(t);return r<0||r>=this.mutationQueue.length?null:this.mutationQueue[r]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(t){this.ri=t,this.docs=(function(){return new me(_t.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,r){const a=r.key,o=this.docs.get(a),u=o?o.size:0,f=this.ri(r);return this.docs=this.docs.insert(a,{document:r.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(t,a.path.popLast())}removeEntry(t){const r=this.docs.get(t);r&&(this.docs=this.docs.remove(t),this.size-=r.size)}getEntry(t,r){const a=this.docs.get(r);return at.resolve(a?a.document.mutableCopy():sn.newInvalidDocument(r))}getEntries(t,r){let a=or();return r.forEach((o=>{const u=this.docs.get(o);a=a.insert(o,u?u.document.mutableCopy():sn.newInvalidDocument(o))})),at.resolve(a)}getDocumentsMatchingQuery(t,r,a,o){let u=or();const f=r.path,m=new _t(f.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(m);for(;p.hasNext();){const{key:g,value:{document:_}}=p.getNext();if(!f.isPrefixOf(g.path))break;g.path.length>f.length+1||S6(w6(_),a)<=0||(o.has(_.key)||Bh(r,_))&&(u=u.insert(_.key,_.mutableCopy()))}return at.resolve(u)}getAllFromCollectionGroup(t,r,a,o){Tt(9500)}ii(t,r){return at.forEach(this.docs,(a=>r(a)))}newChangeBuffer(t){return new ZC(this)}getSize(t){return at.resolve(this.size)}}class ZC extends KC{constructor(t){super(),this.Nr=t}applyChanges(t){const r=[];return this.changes.forEach(((a,o)=>{o.isValidDocument()?r.push(this.Nr.addEntry(t,o)):this.Nr.removeEntry(a)})),at.waitFor(r)}getFromCache(t,r){return this.Nr.getEntry(t,r)}getAllFromCache(t,r){return this.Nr.getEntries(t,r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(t){this.persistence=t,this.si=new Za((r=>Gm(r)),Ym),this.lastRemoteSnapshotVersion=St.min(),this.highestTargetId=0,this.oi=0,this._i=new tg,this.targetCount=0,this.ai=lo.ur()}forEachTarget(t,r){return this.si.forEach(((a,o)=>r(o))),at.resolve()}getLastRemoteSnapshotVersion(t){return at.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return at.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),at.resolve(this.highestTargetId)}setTargetsMetadata(t,r,a){return a&&(this.lastRemoteSnapshotVersion=a),r>this.oi&&(this.oi=r),at.resolve()}Pr(t){this.si.set(t.target,t);const r=t.targetId;r>this.highestTargetId&&(this.ai=new lo(r),this.highestTargetId=r),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,r){return this.Pr(r),this.targetCount+=1,at.resolve()}updateTargetData(t,r){return this.Pr(r),at.resolve()}removeTargetData(t,r){return this.si.delete(r.target),this._i.jr(r.targetId),this.targetCount-=1,at.resolve()}removeTargets(t,r,a){let o=0;const u=[];return this.si.forEach(((f,m)=>{m.sequenceNumber<=r&&a.get(m.targetId)===null&&(this.si.delete(f),u.push(this.removeMatchingKeysForTargetId(t,m.targetId)),o++)})),at.waitFor(u).next((()=>o))}getTargetCount(t){return at.resolve(this.targetCount)}getTargetData(t,r){const a=this.si.get(r)||null;return at.resolve(a)}addMatchingKeys(t,r,a){return this._i.Wr(r,a),at.resolve()}removeMatchingKeys(t,r,a){this._i.zr(r,a);const o=this.persistence.referenceDelegate,u=[];return o&&r.forEach((f=>{u.push(o.markPotentiallyOrphaned(t,f))})),at.waitFor(u)}removeMatchingKeysForTargetId(t,r){return this._i.jr(r),at.resolve()}getMatchingKeysForTargetId(t,r){const a=this._i.Hr(r);return at.resolve(a)}containsKey(t,r){return at.resolve(this._i.containsKey(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(t,r){this.ui={},this.overlays={},this.ci=new kh(0),this.li=!1,this.li=!0,this.hi=new QC,this.referenceDelegate=t(this),this.Pi=new JC(this),this.indexManager=new UC,this.remoteDocumentCache=(function(o){return new WC(o)})((a=>this.referenceDelegate.Ti(a))),this.serializer=new VC(r),this.Ii=new GC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let r=this.overlays[t.toKey()];return r||(r=new YC,this.overlays[t.toKey()]=r),r}getMutationQueue(t,r){let a=this.ui[t.toKey()];return a||(a=new XC(r,this.referenceDelegate),this.ui[t.toKey()]=a),a}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,r,a){dt("MemoryPersistence","Starting transaction:",t);const o=new tj(this.ci.next());return this.referenceDelegate.Ei(),a(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ai(t,r){return at.or(Object.values(this.ui).map((a=>()=>a.containsKey(t,r))))}}class tj extends R6{constructor(t){super(),this.currentSequenceNumber=t}}class eg{constructor(t){this.persistence=t,this.Ri=new tg,this.Vi=null}static mi(t){return new eg(t)}get fi(){if(this.Vi)return this.Vi;throw Tt(60996)}addReference(t,r,a){return this.Ri.addReference(a,r),this.fi.delete(a.toString()),at.resolve()}removeReference(t,r,a){return this.Ri.removeReference(a,r),this.fi.add(a.toString()),at.resolve()}markPotentiallyOrphaned(t,r){return this.fi.add(r.toString()),at.resolve()}removeTarget(t,r){this.Ri.jr(r.targetId).forEach((o=>this.fi.add(o.toString())));const a=this.persistence.getTargetCache();return a.getMatchingKeysForTargetId(t,r.targetId).next((o=>{o.forEach((u=>this.fi.add(u.toString())))})).next((()=>a.removeTargetData(t,r)))}Ei(){this.Vi=new Set}di(t){const r=this.persistence.getRemoteDocumentCache().newChangeBuffer();return at.forEach(this.fi,(a=>{const o=_t.fromPath(a);return this.gi(t,o).next((u=>{u||r.removeEntry(o,St.min())}))})).next((()=>(this.Vi=null,r.apply(t))))}updateLimboDocument(t,r){return this.gi(t,r).next((a=>{a?this.fi.delete(r.toString()):this.fi.add(r.toString())}))}Ti(t){return 0}gi(t,r){return at.or([()=>at.resolve(this.Ri.containsKey(r)),()=>this.persistence.getTargetCache().containsKey(t,r),()=>this.persistence.Ai(t,r)])}}class bh{constructor(t,r){this.persistence=t,this.pi=new Za((a=>I6(a.path)),((a,o)=>a.isEqual(o))),this.garbageCollector=FC(this,r)}static mi(t,r){return new bh(t,r)}Ei(){}di(t){return at.resolve()}forEachTarget(t,r){return this.persistence.getTargetCache().forEachTarget(t,r)}gr(t){const r=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((a=>r.next((o=>a+o))))}wr(t){let r=0;return this.pr(t,(a=>{r++})).next((()=>r))}pr(t,r){return at.forEach(this.pi,((a,o)=>this.br(t,a,o).next((u=>u?at.resolve():r(o)))))}removeTargets(t,r,a){return this.persistence.getTargetCache().removeTargets(t,r,a)}removeOrphanedDocuments(t,r){let a=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(t,(f=>this.br(t,f,r).next((m=>{m||(a++,u.removeEntry(f,St.min()))})))).next((()=>u.apply(t))).next((()=>a))}markPotentiallyOrphaned(t,r){return this.pi.set(r,t.currentSequenceNumber),at.resolve()}removeTarget(t,r){const a=r.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,a)}addReference(t,r,a){return this.pi.set(a,t.currentSequenceNumber),at.resolve()}removeReference(t,r,a){return this.pi.set(a,t.currentSequenceNumber),at.resolve()}updateLimboDocument(t,r){return this.pi.set(r,t.currentSequenceNumber),at.resolve()}Ti(t){let r=t.key.toString().length;return t.isFoundDocument()&&(r+=nh(t.data.value)),r}br(t,r,a){return at.or([()=>this.persistence.Ai(t,r),()=>this.persistence.getTargetCache().containsKey(t,r),()=>{const o=this.pi.get(r);return at.resolve(o!==void 0&&o>a)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(t,r,a,o){this.targetId=t,this.fromCache=r,this.Es=a,this.ds=o}static As(t,r){let a=Pt(),o=Pt();for(const u of r.docChanges)switch(u.type){case 0:a=a.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new ng(t,r.fromCache,a,o)}}/**
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
 */class ej{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class nj{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return H4()?8:C6(K4())>0?6:4})()}initialize(t,r){this.ps=t,this.indexManager=r,this.Rs=!0}getDocumentsMatchingQuery(t,r,a,o){const u={result:null};return this.ys(t,r).next((f=>{u.result=f})).next((()=>{if(!u.result)return this.ws(t,r,o,a).next((f=>{u.result=f}))})).next((()=>{if(u.result)return;const f=new ej;return this.Ss(t,r,f).next((m=>{if(u.result=m,this.Vs)return this.bs(t,r,f,m.size)}))})).next((()=>u.result))}bs(t,r,a,o){return a.documentReadCount<this.fs?(Ks()<=$t.DEBUG&&dt("QueryEngine","SDK will not create cache indexes for query:",qs(r),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),at.resolve()):(Ks()<=$t.DEBUG&&dt("QueryEngine","Query:",qs(r),"scans",a.documentReadCount,"local documents and returns",o,"documents as results."),a.documentReadCount>this.gs*o?(Ks()<=$t.DEBUG&&dt("QueryEngine","The SDK decides to create cache indexes for query:",qs(r),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ei(r))):at.resolve())}ys(t,r){if(Zv(r))return at.resolve(null);let a=Ei(r);return this.indexManager.getIndexType(t,a).next((o=>o===0?null:(r.limit!==null&&o===1&&(r=im(r,null,"F"),a=Ei(r)),this.indexManager.getDocumentsMatchingTarget(t,a).next((u=>{const f=Pt(...u);return this.ps.getDocuments(t,f).next((m=>this.indexManager.getMinOffset(t,a).next((p=>{const g=this.Ds(r,m);return this.Cs(r,g,f,p.readTime)?this.ys(t,im(r,null,"F")):this.vs(t,g,r,p)}))))})))))}ws(t,r,a,o){return Zv(r)||o.isEqual(St.min())?at.resolve(null):this.ps.getDocuments(t,a).next((u=>{const f=this.Ds(r,u);return this.Cs(r,f,a,o)?at.resolve(null):(Ks()<=$t.DEBUG&&dt("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),qs(r)),this.vs(t,f,r,T6(o,Wl)).next((m=>m)))}))}Ds(t,r){let a=new Pe(RE(t));return r.forEach(((o,u)=>{Bh(t,u)&&(a=a.add(u))})),a}Cs(t,r,a,o){if(t.limit===null)return!1;if(a.size!==r.size)return!0;const u=t.limitType==="F"?r.last():r.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(t,r,a){return Ks()<=$t.DEBUG&&dt("QueryEngine","Using full collection scan to execute query:",qs(r)),this.ps.getDocumentsMatchingQuery(t,r,Jr.min(),a)}vs(t,r,a,o){return this.ps.getDocumentsMatchingQuery(t,a,o).next((u=>(r.forEach((f=>{u=u.insert(f.key,f)})),u)))}}/**
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
 */const ig="LocalStore",ij=3e8;class rj{constructor(t,r,a,o){this.persistence=t,this.Fs=r,this.serializer=o,this.Ms=new me(Ut),this.xs=new Za((u=>Gm(u)),Ym),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(a)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new HC(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(r=>t.collect(r,this.Ms)))}}function aj(n,t,r,a){return new rj(n,t,r,a)}async function ZE(n,t){const r=Rt(n);return await r.persistence.runTransaction("Handle user change","readonly",(a=>{let o;return r.mutationQueue.getAllMutationBatches(a).next((u=>(o=u,r.Bs(t),r.mutationQueue.getAllMutationBatches(a)))).next((u=>{const f=[],m=[];let p=Pt();for(const g of o){f.push(g.batchId);for(const _ of g.mutations)p=p.add(_.key)}for(const g of u){m.push(g.batchId);for(const _ of g.mutations)p=p.add(_.key)}return r.localDocuments.getDocuments(a,p).next((g=>({Ls:g,removedBatchIds:f,addedBatchIds:m})))}))}))}function sj(n,t){const r=Rt(n);return r.persistence.runTransaction("Acknowledge batch","readwrite-primary",(a=>{const o=t.batch.keys(),u=r.Ns.newChangeBuffer({trackRemovals:!0});return(function(m,p,g,_){const b=g.batch,S=b.keys();let j=at.resolve();return S.forEach((U=>{j=j.next((()=>_.getEntry(p,U))).next(($=>{const P=g.docVersions.get(U);Gt(P!==null,48541),$.version.compareTo(P)<0&&(b.applyToRemoteDocument($,g),$.isValidDocument()&&($.setReadTime(g.commitVersion),_.addEntry($)))}))})),j.next((()=>m.mutationQueue.removeMutationBatch(p,b)))})(r,a,t,u).next((()=>u.apply(a))).next((()=>r.mutationQueue.performConsistencyCheck(a))).next((()=>r.documentOverlayCache.removeOverlaysForBatchId(a,o,t.batch.batchId))).next((()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,(function(m){let p=Pt();for(let g=0;g<m.mutationResults.length;++g)m.mutationResults[g].transformResults.length>0&&(p=p.add(m.batch.mutations[g].key));return p})(t)))).next((()=>r.localDocuments.getDocuments(a,o)))}))}function JE(n){const t=Rt(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(r=>t.Pi.getLastRemoteSnapshotVersion(r)))}function oj(n,t){const r=Rt(n),a=t.snapshotVersion;let o=r.Ms;return r.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const f=r.Ns.newChangeBuffer({trackRemovals:!0});o=r.Ms;const m=[];t.targetChanges.forEach(((_,b)=>{const S=o.get(b);if(!S)return;m.push(r.Pi.removeMatchingKeys(u,_.removedDocuments,b).next((()=>r.Pi.addMatchingKeys(u,_.addedDocuments,b))));let j=S.withSequenceNumber(u.currentSequenceNumber);t.targetMismatches.get(b)!==null?j=j.withResumeToken(Ze.EMPTY_BYTE_STRING,St.min()).withLastLimboFreeSnapshotVersion(St.min()):_.resumeToken.approximateByteSize()>0&&(j=j.withResumeToken(_.resumeToken,a)),o=o.insert(b,j),(function($,P,X){return $.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=ij?!0:X.addedDocuments.size+X.modifiedDocuments.size+X.removedDocuments.size>0})(S,j,_)&&m.push(r.Pi.updateTargetData(u,j))}));let p=or(),g=Pt();if(t.documentUpdates.forEach((_=>{t.resolvedLimboDocuments.has(_)&&m.push(r.persistence.referenceDelegate.updateLimboDocument(u,_))})),m.push(lj(u,f,t.documentUpdates).next((_=>{p=_.ks,g=_.qs}))),!a.isEqual(St.min())){const _=r.Pi.getLastRemoteSnapshotVersion(u).next((b=>r.Pi.setTargetsMetadata(u,u.currentSequenceNumber,a)));m.push(_)}return at.waitFor(m).next((()=>f.apply(u))).next((()=>r.localDocuments.getLocalViewOfDocuments(u,p,g))).next((()=>p))})).then((u=>(r.Ms=o,u)))}function lj(n,t,r){let a=Pt(),o=Pt();return r.forEach((u=>a=a.add(u))),t.getEntries(n,a).next((u=>{let f=or();return r.forEach(((m,p)=>{const g=u.get(m);p.isFoundDocument()!==g.isFoundDocument()&&(o=o.add(m)),p.isNoDocument()&&p.version.isEqual(St.min())?(t.removeEntry(m,p.readTime),f=f.insert(m,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(t.addEntry(p),f=f.insert(m,p)):dt(ig,"Ignoring outdated watch update for ",m,". Current version:",g.version," Watch version:",p.version)})),{ks:f,qs:o}}))}function uj(n,t){const r=Rt(n);return r.persistence.runTransaction("Get next mutation batch","readonly",(a=>(t===void 0&&(t=Km),r.mutationQueue.getNextMutationBatchAfterBatchId(a,t))))}function cj(n,t){const r=Rt(n);return r.persistence.runTransaction("Allocate target","readwrite",(a=>{let o;return r.Pi.getTargetData(a,t).next((u=>u?(o=u,at.resolve(o)):r.Pi.allocateTargetId(a).next((f=>(o=new Gr(t,f,"TargetPurposeListen",a.currentSequenceNumber),r.Pi.addTargetData(a,o).next((()=>o)))))))})).then((a=>{const o=r.Ms.get(a.targetId);return(o===null||a.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(r.Ms=r.Ms.insert(a.targetId,a),r.xs.set(t,a.targetId)),a}))}async function lm(n,t,r){const a=Rt(n),o=a.Ms.get(t),u=r?"readwrite":"readwrite-primary";try{r||await a.persistence.runTransaction("Release target",u,(f=>a.persistence.referenceDelegate.removeTarget(f,o)))}catch(f){if(!_o(f))throw f;dt(ig,`Failed to update sequence numbers for target ${t}: ${f}`)}a.Ms=a.Ms.remove(t),a.xs.delete(o.target)}function hx(n,t,r){const a=Rt(n);let o=St.min(),u=Pt();return a.persistence.runTransaction("Execute query","readwrite",(f=>(function(p,g,_){const b=Rt(p),S=b.xs.get(_);return S!==void 0?at.resolve(b.Ms.get(S)):b.Pi.getTargetData(g,_)})(a,f,Ei(t)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,a.Pi.getMatchingKeysForTargetId(f,m.targetId).next((p=>{u=p}))})).next((()=>a.Fs.getDocumentsMatchingQuery(f,t,r?o:St.min(),r?u:Pt()))).next((m=>(hj(a,X6(t),m),{documents:m,Qs:u})))))}function hj(n,t,r){let a=n.Os.get(t)||St.min();r.forEach(((o,u)=>{u.readTime.compareTo(a)>0&&(a=u.readTime)})),n.Os.set(t,a)}class fx{constructor(){this.activeTargetIds=nC()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class fj{constructor(){this.Mo=new fx,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,r,a){}addLocalQueryTarget(t,r=!0){return r&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,r,a){this.xo[t]=r}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new fx,Promise.resolve()}handleUserChange(t,r,a){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class dj{Oo(t){}shutdown(){}}/**
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
 */const dx="ConnectivityMonitor";class px{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){dt(dx,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){dt(dx,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Kc=null;function um(){return Kc===null?Kc=(function(){return 268435456+Math.round(2147483648*Math.random())})():Kc++,"0x"+Kc.toString(16)}/**
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
 */const Ap="RestConnection",pj={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class mj{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=r+"://"+t.host,this.Ko=`projects/${a}/databases/${o}`,this.Wo=this.databaseId.database===gh?`project_id=${a}`:`project_id=${a}&database_id=${o}`}Go(t,r,a,o,u){const f=um(),m=this.zo(t,r.toUriEncodedString());dt(Ap,`Sending RPC '${t}' ${f}:`,m,a);const p={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(p,o,u);const{host:g}=new URL(m),_=Lm(g);return this.Jo(t,m,p,a,_).then((b=>(dt(Ap,`Received RPC '${t}' ${f}: `,b),b)),(b=>{throw ro(Ap,`RPC '${t}' ${f} failed with error: `,b,"url: ",m,"request:",a),b}))}Ho(t,r,a,o,u,f){return this.Go(t,r,a,o,u)}jo(t,r,a){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+vo})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach(((o,u)=>t[u]=o)),a&&a.headers.forEach(((o,u)=>t[u]=o))}zo(t,r){const a=pj[t];return`${this.Uo}/v1/${r}:${a}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gj{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn="WebChannelConnection";class yj extends mj{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,r,a,o,u){const f=um();return new Promise(((m,p)=>{const g=new eE;g.setWithCredentials(!0),g.listenOnce(nE.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case eh.NO_ERROR:const b=g.getResponseJson();dt(rn,`XHR for RPC '${t}' ${f} received:`,JSON.stringify(b)),m(b);break;case eh.TIMEOUT:dt(rn,`RPC '${t}' ${f} timed out`),p(new mt(st.DEADLINE_EXCEEDED,"Request time out"));break;case eh.HTTP_ERROR:const S=g.getStatus();if(dt(rn,`RPC '${t}' ${f} failed with status:`,S,"response text:",g.getResponseText()),S>0){let j=g.getResponseJson();Array.isArray(j)&&(j=j[0]);const U=j?.error;if(U&&U.status&&U.message){const $=(function(X){const Q=X.toLowerCase().replace(/_/g,"-");return Object.values(st).indexOf(Q)>=0?Q:st.UNKNOWN})(U.status);p(new mt($,U.message))}else p(new mt(st.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new mt(st.UNAVAILABLE,"Connection failed."));break;default:Tt(9055,{l_:t,streamId:f,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{dt(rn,`RPC '${t}' ${f} completed.`)}}));const _=JSON.stringify(o);dt(rn,`RPC '${t}' ${f} sending request:`,o),g.send(r,"POST",_,a,15)}))}T_(t,r,a){const o=um(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],f=aE(),m=rE(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.jo(p.initMessageHeaders,r,a),p.encodeInitMessageHeaders=!0;const _=u.join("");dt(rn,`Creating RPC '${t}' stream ${o}: ${_}`,p);const b=f.createWebChannel(_,p);this.I_(b);let S=!1,j=!1;const U=new gj({Yo:P=>{j?dt(rn,`Not sending because RPC '${t}' stream ${o} is closed:`,P):(S||(dt(rn,`Opening RPC '${t}' stream ${o} transport.`),b.open(),S=!0),dt(rn,`RPC '${t}' stream ${o} sending:`,P),b.send(P))},Zo:()=>b.close()}),$=(P,X,Q)=>{P.listen(X,(Z=>{try{Q(Z)}catch(ot){setTimeout((()=>{throw ot}),0)}}))};return $(b,Nl.EventType.OPEN,(()=>{j||(dt(rn,`RPC '${t}' stream ${o} transport opened.`),U.o_())})),$(b,Nl.EventType.CLOSE,(()=>{j||(j=!0,dt(rn,`RPC '${t}' stream ${o} transport closed`),U.a_(),this.E_(b))})),$(b,Nl.EventType.ERROR,(P=>{j||(j=!0,ro(rn,`RPC '${t}' stream ${o} transport errored. Name:`,P.name,"Message:",P.message),U.a_(new mt(st.UNAVAILABLE,"The operation could not be completed")))})),$(b,Nl.EventType.MESSAGE,(P=>{if(!j){const X=P.data[0];Gt(!!X,16349);const Q=X,Z=Q?.error||Q[0]?.error;if(Z){dt(rn,`RPC '${t}' stream ${o} received error:`,Z);const ot=Z.status;let tt=(function(R){const C=Ce[R];if(C!==void 0)return zE(C)})(ot),ft=Z.message;tt===void 0&&(tt=st.INTERNAL,ft="Unknown error status: "+ot+" with message "+Z.message),j=!0,U.a_(new mt(tt,ft)),b.close()}else dt(rn,`RPC '${t}' stream ${o} received:`,X),U.u_(X)}})),$(m,iE.STAT_EVENT,(P=>{P.stat===Wp.PROXY?dt(rn,`RPC '${t}' stream ${o} detected buffering proxy`):P.stat===Wp.NOPROXY&&dt(rn,`RPC '${t}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{U.__()}),0),U}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((r=>r===t))}}function Rp(){return typeof document<"u"?document:null}/**
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
 */function qh(n){return new EC(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(t,r,a=1e3,o=1.5,u=6e4){this.Mi=t,this.timerId=r,this.d_=a,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const r=Math.floor(this.V_+this.y_()),a=Math.max(0,Date.now()-this.f_),o=Math.max(0,r-a);o>0&&dt("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${r} ms, last attempt: ${a} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mx="PersistentStream";class e2{constructor(t,r,a,o,u,f,m,p){this.Mi=t,this.S_=a,this.b_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new t2(t,r)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,r){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():r&&r.code===st.RESOURCE_EXHAUSTED?(ar(r.toString()),ar("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):r&&r.code===st.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(r)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),r=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([a,o])=>{this.D_===r&&this.G_(a,o)}),(a=>{t((()=>{const o=new mt(st.UNKNOWN,"Fetching auth token failed: "+a.message);return this.z_(o)}))}))}G_(t,r){const a=this.W_(this.D_);this.stream=this.j_(t,r),this.stream.Xo((()=>{a((()=>this.listener.Xo()))})),this.stream.t_((()=>{a((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{a((()=>this.z_(o)))})),this.stream.onMessage((o=>{a((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return dt(mx,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return r=>{this.Mi.enqueueAndForget((()=>this.D_===t?r():(dt(mx,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class vj extends e2{constructor(t,r,a,o,u,f){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",r,a,o,f),this.serializer=u}j_(t,r){return this.connection.T_("Listen",t,r)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const r=wC(this.serializer,t),a=(function(u){if(!("targetChange"in u))return St.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?St.min():f.readTime?Ti(f.readTime):St.min()})(t);return this.listener.H_(r,a)}Y_(t){const r={};r.database=om(this.serializer),r.addTarget=(function(u,f){let m;const p=f.target;if(m=nm(p)?{documents:RC(u,p)}:{query:CC(u,p).ft},m.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){m.resumeToken=FE(u,f.resumeToken);const g=rm(u,f.expectedCount);g!==null&&(m.expectedCount=g)}else if(f.snapshotVersion.compareTo(St.min())>0){m.readTime=Eh(u,f.snapshotVersion.toTimestamp());const g=rm(u,f.expectedCount);g!==null&&(m.expectedCount=g)}return m})(this.serializer,t);const a=IC(this.serializer,t);a&&(r.labels=a),this.q_(r)}Z_(t){const r={};r.database=om(this.serializer),r.removeTarget=t,this.q_(r)}}class xj extends e2{constructor(t,r,a,o,u,f){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",r,a,o,f),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,r){return this.connection.T_("Write",t,r)}J_(t){return Gt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Gt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){Gt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const r=AC(t.writeResults,t.commitTime),a=Ti(t.commitTime);return this.listener.na(a,r)}ra(){const t={};t.database=om(this.serializer),this.q_(t)}ea(t){const r={streamToken:this.lastStreamToken,writes:t.map((a=>SC(this.serializer,a)))};this.q_(r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _j{}class Ej extends _j{constructor(t,r,a,o){super(),this.authCredentials=t,this.appCheckCredentials=r,this.connection=a,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new mt(st.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,r,a,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,f])=>this.connection.Go(t,am(r,a),o,u,f))).catch((u=>{throw u.name==="FirebaseError"?(u.code===st.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new mt(st.UNKNOWN,u.toString())}))}Ho(t,r,a,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([f,m])=>this.connection.Ho(t,am(r,a),o,f,m,u))).catch((f=>{throw f.name==="FirebaseError"?(f.code===st.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new mt(st.UNKNOWN,f.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class bj{constructor(t,r){this.asyncQueue=t,this.onlineStateHandler=r,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const r=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ar(r),this.aa=!1):dt("OnlineStateTracker",r)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa="RemoteStore";class Tj{constructor(t,r,a,o,u){this.localStore=t,this.datastore=r,this.asyncQueue=a,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo((f=>{a.enqueueAndForget((async()=>{Ja(this)&&(dt(Wa,"Restarting streams for network reachability change."),await(async function(p){const g=Rt(p);g.Ea.add(4),await uu(g),g.Ra.set("Unknown"),g.Ea.delete(4),await Hh(g)})(this))}))})),this.Ra=new bj(a,o)}}async function Hh(n){if(Ja(n))for(const t of n.da)await t(!0)}async function uu(n){for(const t of n.da)await t(!1)}function n2(n,t){const r=Rt(n);r.Ia.has(t.targetId)||(r.Ia.set(t.targetId,t),og(r)?sg(r):Eo(r).O_()&&ag(r,t))}function rg(n,t){const r=Rt(n),a=Eo(r);r.Ia.delete(t),a.O_()&&i2(r,t),r.Ia.size===0&&(a.O_()?a.L_():Ja(r)&&r.Ra.set("Unknown"))}function ag(n,t){if(n.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(St.min())>0){const r=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(r)}Eo(n).Y_(t)}function i2(n,t){n.Va.Ue(t),Eo(n).Z_(t)}function sg(n){n.Va=new yC({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),Eo(n).start(),n.Ra.ua()}function og(n){return Ja(n)&&!Eo(n).x_()&&n.Ia.size>0}function Ja(n){return Rt(n).Ea.size===0}function r2(n){n.Va=void 0}async function wj(n){n.Ra.set("Online")}async function Sj(n){n.Ia.forEach(((t,r)=>{ag(n,t)}))}async function Aj(n,t){r2(n),og(n)?(n.Ra.ha(t),sg(n)):n.Ra.set("Unknown")}async function Rj(n,t,r){if(n.Ra.set("Online"),t instanceof $E&&t.state===2&&t.cause)try{await(async function(o,u){const f=u.cause;for(const m of u.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,f),o.Ia.delete(m),o.Va.removeTarget(m))})(n,t)}catch(a){dt(Wa,"Failed to remove targets %s: %s ",t.targetIds.join(","),a),await Th(n,a)}else if(t instanceof ah?n.Va.Ze(t):t instanceof BE?n.Va.st(t):n.Va.tt(t),!r.isEqual(St.min()))try{const a=await JE(n.localStore);r.compareTo(a)>=0&&await(function(u,f){const m=u.Va.Tt(f);return m.targetChanges.forEach(((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const _=u.Ia.get(g);_&&u.Ia.set(g,_.withResumeToken(p.resumeToken,f))}})),m.targetMismatches.forEach(((p,g)=>{const _=u.Ia.get(p);if(!_)return;u.Ia.set(p,_.withResumeToken(Ze.EMPTY_BYTE_STRING,_.snapshotVersion)),i2(u,p);const b=new Gr(_.target,p,g,_.sequenceNumber);ag(u,b)})),u.remoteSyncer.applyRemoteEvent(m)})(n,r)}catch(a){dt(Wa,"Failed to raise snapshot:",a),await Th(n,a)}}async function Th(n,t,r){if(!_o(t))throw t;n.Ea.add(1),await uu(n),n.Ra.set("Offline"),r||(r=()=>JE(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{dt(Wa,"Retrying IndexedDB access"),await r(),n.Ea.delete(1),await Hh(n)}))}function a2(n,t){return t().catch((r=>Th(n,r,t)))}async function Gh(n){const t=Rt(n),r=ia(t);let a=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Km;for(;Cj(t);)try{const o=await uj(t.localStore,a);if(o===null){t.Ta.length===0&&r.L_();break}a=o.batchId,jj(t,o)}catch(o){await Th(t,o)}s2(t)&&o2(t)}function Cj(n){return Ja(n)&&n.Ta.length<10}function jj(n,t){n.Ta.push(t);const r=ia(n);r.O_()&&r.X_&&r.ea(t.mutations)}function s2(n){return Ja(n)&&!ia(n).x_()&&n.Ta.length>0}function o2(n){ia(n).start()}async function Ij(n){ia(n).ra()}async function Dj(n){const t=ia(n);for(const r of n.Ta)t.ea(r.mutations)}async function Nj(n,t,r){const a=n.Ta.shift(),o=Wm.from(a,t,r);await a2(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await Gh(n)}async function Mj(n,t){t&&ia(n).X_&&await(async function(a,o){if((function(f){return pC(f)&&f!==st.ABORTED})(o.code)){const u=a.Ta.shift();ia(a).B_(),await a2(a,(()=>a.remoteSyncer.rejectFailedWrite(u.batchId,o))),await Gh(a)}})(n,t),s2(n)&&o2(n)}async function gx(n,t){const r=Rt(n);r.asyncQueue.verifyOperationInProgress(),dt(Wa,"RemoteStore received new credentials");const a=Ja(r);r.Ea.add(3),await uu(r),a&&r.Ra.set("Unknown"),await r.remoteSyncer.handleCredentialChange(t),r.Ea.delete(3),await Hh(r)}async function Oj(n,t){const r=Rt(n);t?(r.Ea.delete(2),await Hh(r)):t||(r.Ea.add(2),await uu(r),r.Ra.set("Unknown"))}function Eo(n){return n.ma||(n.ma=(function(r,a,o){const u=Rt(r);return u.sa(),new vj(a,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(n.datastore,n.asyncQueue,{Xo:wj.bind(null,n),t_:Sj.bind(null,n),r_:Aj.bind(null,n),H_:Rj.bind(null,n)}),n.da.push((async t=>{t?(n.ma.B_(),og(n)?sg(n):n.Ra.set("Unknown")):(await n.ma.stop(),r2(n))}))),n.ma}function ia(n){return n.fa||(n.fa=(function(r,a,o){const u=Rt(r);return u.sa(),new xj(a,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:Ij.bind(null,n),r_:Mj.bind(null,n),ta:Dj.bind(null,n),na:Nj.bind(null,n)}),n.da.push((async t=>{t?(n.fa.B_(),await Gh(n)):(await n.fa.stop(),n.Ta.length>0&&(dt(Wa,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(t,r,a,o,u){this.asyncQueue=t,this.timerId=r,this.targetTimeMs=a,this.op=o,this.removalCallback=u,this.deferred=new er,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((f=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,r,a,o,u){const f=Date.now()+a,m=new lg(t,r,f,o,u);return m.start(a),m}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new mt(st.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ug(n,t){if(ar("AsyncQueue",`${t}: ${n}`),_o(n))return new mt(st.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{static emptySet(t){return new Xs(t.comparator)}constructor(t){this.comparator=t?(r,a)=>t(r,a)||_t.comparator(r.key,a.key):(r,a)=>_t.comparator(r.key,a.key),this.keyedMap=Ml(),this.sortedSet=new me(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const r=this.keyedMap.get(t);return r?this.sortedSet.indexOf(r):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((r,a)=>(t(r),!1)))}add(t){const r=this.delete(t.key);return r.copy(r.keyedMap.insert(t.key,t),r.sortedSet.insert(t,null))}delete(t){const r=this.get(t);return r?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(r)):this}isEqual(t){if(!(t instanceof Xs)||this.size!==t.size)return!1;const r=this.sortedSet.getIterator(),a=t.sortedSet.getIterator();for(;r.hasNext();){const o=r.getNext().key,u=a.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const t=[];return this.forEach((r=>{t.push(r.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,r){const a=new Xs;return a.comparator=this.comparator,a.keyedMap=t,a.sortedSet=r,a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(){this.ga=new me(_t.comparator)}track(t){const r=t.doc.key,a=this.ga.get(r);a?t.type!==0&&a.type===3?this.ga=this.ga.insert(r,t):t.type===3&&a.type!==1?this.ga=this.ga.insert(r,{type:a.type,doc:t.doc}):t.type===2&&a.type===2?this.ga=this.ga.insert(r,{type:2,doc:t.doc}):t.type===2&&a.type===0?this.ga=this.ga.insert(r,{type:0,doc:t.doc}):t.type===1&&a.type===0?this.ga=this.ga.remove(r):t.type===1&&a.type===2?this.ga=this.ga.insert(r,{type:1,doc:a.doc}):t.type===0&&a.type===1?this.ga=this.ga.insert(r,{type:2,doc:t.doc}):Tt(63341,{Rt:t,pa:a}):this.ga=this.ga.insert(r,t)}ya(){const t=[];return this.ga.inorderTraversal(((r,a)=>{t.push(a)})),t}}class uo{constructor(t,r,a,o,u,f,m,p,g){this.query=t,this.docs=r,this.oldDocs=a,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(t,r,a,o,u){const f=[];return r.forEach((m=>{f.push({type:0,doc:m})})),new uo(t,r,Xs.emptySet(r),f,a,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&zh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const r=this.docChanges,a=t.docChanges;if(r.length!==a.length)return!1;for(let o=0;o<r.length;o++)if(r[o].type!==a[o].type||!r[o].doc.isEqual(a[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vj{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class kj{constructor(){this.queries=vx(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(r,a){const o=Rt(r),u=o.queries;o.queries=vx(),u.forEach(((f,m)=>{for(const p of m.Sa)p.onError(a)}))})(this,new mt(st.ABORTED,"Firestore shutting down"))}}function vx(){return new Za((n=>AE(n)),zh)}async function l2(n,t){const r=Rt(n);let a=3;const o=t.query;let u=r.queries.get(o);u?!u.ba()&&t.Da()&&(a=2):(u=new Vj,a=t.Da()?0:1);try{switch(a){case 0:u.wa=await r.onListen(o,!0);break;case 1:u.wa=await r.onListen(o,!1);break;case 2:await r.onFirstRemoteStoreListen(o)}}catch(f){const m=ug(f,`Initialization of query '${qs(t.query)}' failed`);return void t.onError(m)}r.queries.set(o,u),u.Sa.push(t),t.va(r.onlineState),u.wa&&t.Fa(u.wa)&&cg(r)}async function u2(n,t){const r=Rt(n),a=t.query;let o=3;const u=r.queries.get(a);if(u){const f=u.Sa.indexOf(t);f>=0&&(u.Sa.splice(f,1),u.Sa.length===0?o=t.Da()?0:1:!u.ba()&&t.Da()&&(o=2))}switch(o){case 0:return r.queries.delete(a),r.onUnlisten(a,!0);case 1:return r.queries.delete(a),r.onUnlisten(a,!1);case 2:return r.onLastRemoteStoreUnlisten(a);default:return}}function Uj(n,t){const r=Rt(n);let a=!1;for(const o of t){const u=o.query,f=r.queries.get(u);if(f){for(const m of f.Sa)m.Fa(o)&&(a=!0);f.wa=o}}a&&cg(r)}function Pj(n,t,r){const a=Rt(n),o=a.queries.get(t);if(o)for(const u of o.Sa)u.onError(r);a.queries.delete(t)}function cg(n){n.Ca.forEach((t=>{t.next()}))}var cm,xx;(xx=cm||(cm={})).Ma="default",xx.Cache="cache";class c2{constructor(t,r,a){this.query=t,this.xa=r,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=a||{}}Fa(t){if(!this.options.includeMetadataChanges){const a=[];for(const o of t.docChanges)o.type!==3&&a.push(o);t=new uo(t.query,t.docs,t.oldDocs,a,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let r=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),r=!0):this.La(t,this.onlineState)&&(this.ka(t),r=!0),this.Na=t,r}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let r=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),r=!0),r}La(t,r){if(!t.fromCache||!this.Da())return!0;const a=r!=="Offline";return(!this.options.qa||!a)&&(!t.docs.isEmpty()||t.hasCachedResults||r==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const r=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!r)&&this.options.includeMetadataChanges===!0}ka(t){t=uo.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==cm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(t){this.key=t}}class f2{constructor(t){this.key=t}}class Lj{constructor(t,r){this.query=t,this.Ya=r,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Pt(),this.mutatedKeys=Pt(),this.eu=RE(t),this.tu=new Xs(this.eu)}get nu(){return this.Ya}ru(t,r){const a=r?r.iu:new yx,o=r?r.tu:this.tu;let u=r?r.mutatedKeys:this.mutatedKeys,f=o,m=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,g=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal(((_,b)=>{const S=o.get(_),j=Bh(this.query,b)?b:null,U=!!S&&this.mutatedKeys.has(S.key),$=!!j&&(j.hasLocalMutations||this.mutatedKeys.has(j.key)&&j.hasCommittedMutations);let P=!1;S&&j?S.data.isEqual(j.data)?U!==$&&(a.track({type:3,doc:j}),P=!0):this.su(S,j)||(a.track({type:2,doc:j}),P=!0,(p&&this.eu(j,p)>0||g&&this.eu(j,g)<0)&&(m=!0)):!S&&j?(a.track({type:0,doc:j}),P=!0):S&&!j&&(a.track({type:1,doc:S}),P=!0,(p||g)&&(m=!0)),P&&(j?(f=f.add(j),u=$?u.add(_):u.delete(_)):(f=f.delete(_),u=u.delete(_)))})),this.query.limit!==null)for(;f.size>this.query.limit;){const _=this.query.limitType==="F"?f.last():f.first();f=f.delete(_.key),u=u.delete(_.key),a.track({type:1,doc:_})}return{tu:f,iu:a,Cs:m,mutatedKeys:u}}su(t,r){return t.hasLocalMutations&&r.hasCommittedMutations&&!r.hasLocalMutations}applyChanges(t,r,a,o){const u=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const f=t.iu.ya();f.sort(((_,b)=>(function(j,U){const $=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Tt(20277,{Rt:P})}};return $(j)-$(U)})(_.type,b.type)||this.eu(_.doc,b.doc))),this.ou(a),o=o??!1;const m=r&&!o?this._u():[],p=this.Xa.size===0&&this.current&&!o?1:0,g=p!==this.Za;return this.Za=p,f.length!==0||g?{snapshot:new uo(this.query,t.tu,u,f,t.mutatedKeys,p===0,g,!1,!!a&&a.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new yx,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((r=>this.Ya=this.Ya.add(r))),t.modifiedDocuments.forEach((r=>{})),t.removedDocuments.forEach((r=>this.Ya=this.Ya.delete(r))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=Pt(),this.tu.forEach((a=>{this.uu(a.key)&&(this.Xa=this.Xa.add(a.key))}));const r=[];return t.forEach((a=>{this.Xa.has(a)||r.push(new f2(a))})),this.Xa.forEach((a=>{t.has(a)||r.push(new h2(a))})),r}cu(t){this.Ya=t.Qs,this.Xa=Pt();const r=this.ru(t.documents);return this.applyChanges(r,!0)}lu(){return uo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const hg="SyncEngine";class zj{constructor(t,r,a){this.query=t,this.targetId=r,this.view=a}}class Bj{constructor(t){this.key=t,this.hu=!1}}class $j{constructor(t,r,a,o,u,f){this.localStore=t,this.remoteStore=r,this.eventManager=a,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.Pu={},this.Tu=new Za((m=>AE(m)),zh),this.Iu=new Map,this.Eu=new Set,this.du=new me(_t.comparator),this.Au=new Map,this.Ru=new tg,this.Vu={},this.mu=new Map,this.fu=lo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Fj(n,t,r=!0){const a=v2(n);let o;const u=a.Tu.get(t);return u?(a.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await d2(a,t,r,!0),o}async function Kj(n,t){const r=v2(n);await d2(r,t,!0,!1)}async function d2(n,t,r,a){const o=await cj(n.localStore,Ei(t)),u=o.targetId,f=n.sharedClientState.addLocalQueryTarget(u,r);let m;return a&&(m=await qj(n,t,u,f==="current",o.resumeToken)),n.isPrimaryClient&&r&&n2(n.remoteStore,o),m}async function qj(n,t,r,a,o){n.pu=(b,S,j)=>(async function($,P,X,Q){let Z=P.view.ru(X);Z.Cs&&(Z=await hx($.localStore,P.query,!1).then((({documents:I})=>P.view.ru(I,Z))));const ot=Q&&Q.targetChanges.get(P.targetId),tt=Q&&Q.targetMismatches.get(P.targetId)!=null,ft=P.view.applyChanges(Z,$.isPrimaryClient,ot,tt);return Ex($,P.targetId,ft.au),ft.snapshot})(n,b,S,j);const u=await hx(n.localStore,t,!0),f=new Lj(t,u.Qs),m=f.ru(u.documents),p=lu.createSynthesizedTargetChangeForCurrentChange(r,a&&n.onlineState!=="Offline",o),g=f.applyChanges(m,n.isPrimaryClient,p);Ex(n,r,g.au);const _=new zj(t,r,f);return n.Tu.set(t,_),n.Iu.has(r)?n.Iu.get(r).push(t):n.Iu.set(r,[t]),g.snapshot}async function Hj(n,t,r){const a=Rt(n),o=a.Tu.get(t),u=a.Iu.get(o.targetId);if(u.length>1)return a.Iu.set(o.targetId,u.filter((f=>!zh(f,t)))),void a.Tu.delete(t);a.isPrimaryClient?(a.sharedClientState.removeLocalQueryTarget(o.targetId),a.sharedClientState.isActiveQueryTarget(o.targetId)||await lm(a.localStore,o.targetId,!1).then((()=>{a.sharedClientState.clearQueryState(o.targetId),r&&rg(a.remoteStore,o.targetId),hm(a,o.targetId)})).catch(xo)):(hm(a,o.targetId),await lm(a.localStore,o.targetId,!0))}async function Gj(n,t){const r=Rt(n),a=r.Tu.get(t),o=r.Iu.get(a.targetId);r.isPrimaryClient&&o.length===1&&(r.sharedClientState.removeLocalQueryTarget(a.targetId),rg(r.remoteStore,a.targetId))}async function Yj(n,t,r){const a=eI(n);try{const o=await(function(f,m){const p=Rt(f),g=le.now(),_=m.reduce(((j,U)=>j.add(U.key)),Pt());let b,S;return p.persistence.runTransaction("Locally write mutations","readwrite",(j=>{let U=or(),$=Pt();return p.Ns.getEntries(j,_).next((P=>{U=P,U.forEach(((X,Q)=>{Q.isValidDocument()||($=$.add(X))}))})).next((()=>p.localDocuments.getOverlayedDocuments(j,U))).next((P=>{b=P;const X=[];for(const Q of m){const Z=uC(Q,b.get(Q.key).overlayedDocument);Z!=null&&X.push(new sa(Q.key,Z,xE(Z.value.mapValue),bi.exists(!0)))}return p.mutationQueue.addMutationBatch(j,g,X,m)})).next((P=>{S=P;const X=P.applyToLocalDocumentSet(b,$);return p.documentOverlayCache.saveOverlays(j,P.batchId,X)}))})).then((()=>({batchId:S.batchId,changes:jE(b)})))})(a.localStore,t);a.sharedClientState.addPendingMutation(o.batchId),(function(f,m,p){let g=f.Vu[f.currentUser.toKey()];g||(g=new me(Ut)),g=g.insert(m,p),f.Vu[f.currentUser.toKey()]=g})(a,o.batchId,r),await cu(a,o.changes),await Gh(a.remoteStore)}catch(o){const u=ug(o,"Failed to persist write");r.reject(u)}}async function p2(n,t){const r=Rt(n);try{const a=await oj(r.localStore,t);t.targetChanges.forEach(((o,u)=>{const f=r.Au.get(u);f&&(Gt(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.hu=!0:o.modifiedDocuments.size>0?Gt(f.hu,14607):o.removedDocuments.size>0&&(Gt(f.hu,42227),f.hu=!1))})),await cu(r,a,t)}catch(a){await xo(a)}}function _x(n,t,r){const a=Rt(n);if(a.isPrimaryClient&&r===0||!a.isPrimaryClient&&r===1){const o=[];a.Tu.forEach(((u,f)=>{const m=f.view.va(t);m.snapshot&&o.push(m.snapshot)})),(function(f,m){const p=Rt(f);p.onlineState=m;let g=!1;p.queries.forEach(((_,b)=>{for(const S of b.Sa)S.va(m)&&(g=!0)})),g&&cg(p)})(a.eventManager,t),o.length&&a.Pu.H_(o),a.onlineState=t,a.isPrimaryClient&&a.sharedClientState.setOnlineState(t)}}async function Qj(n,t,r){const a=Rt(n);a.sharedClientState.updateQueryState(t,"rejected",r);const o=a.Au.get(t),u=o&&o.key;if(u){let f=new me(_t.comparator);f=f.insert(u,sn.newNoDocument(u,St.min()));const m=Pt().add(u),p=new Kh(St.min(),new Map,new me(Ut),f,m);await p2(a,p),a.du=a.du.remove(u),a.Au.delete(t),fg(a)}else await lm(a.localStore,t,!1).then((()=>hm(a,t,r))).catch(xo)}async function Xj(n,t){const r=Rt(n),a=t.batch.batchId;try{const o=await sj(r.localStore,t);g2(r,a,null),m2(r,a),r.sharedClientState.updateMutationState(a,"acknowledged"),await cu(r,o)}catch(o){await xo(o)}}async function Wj(n,t,r){const a=Rt(n);try{const o=await(function(f,m){const p=Rt(f);return p.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let _;return p.mutationQueue.lookupMutationBatch(g,m).next((b=>(Gt(b!==null,37113),_=b.keys(),p.mutationQueue.removeMutationBatch(g,b)))).next((()=>p.mutationQueue.performConsistencyCheck(g))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(g,_,m))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,_))).next((()=>p.localDocuments.getDocuments(g,_)))}))})(a.localStore,t);g2(a,t,r),m2(a,t),a.sharedClientState.updateMutationState(t,"rejected",r),await cu(a,o)}catch(o){await xo(o)}}function m2(n,t){(n.mu.get(t)||[]).forEach((r=>{r.resolve()})),n.mu.delete(t)}function g2(n,t,r){const a=Rt(n);let o=a.Vu[a.currentUser.toKey()];if(o){const u=o.get(t);u&&(r?u.reject(r):u.resolve(),o=o.remove(t)),a.Vu[a.currentUser.toKey()]=o}}function hm(n,t,r=null){n.sharedClientState.removeLocalQueryTarget(t);for(const a of n.Iu.get(t))n.Tu.delete(a),r&&n.Pu.yu(a,r);n.Iu.delete(t),n.isPrimaryClient&&n.Ru.jr(t).forEach((a=>{n.Ru.containsKey(a)||y2(n,a)}))}function y2(n,t){n.Eu.delete(t.path.canonicalString());const r=n.du.get(t);r!==null&&(rg(n.remoteStore,r),n.du=n.du.remove(t),n.Au.delete(r),fg(n))}function Ex(n,t,r){for(const a of r)a instanceof h2?(n.Ru.addReference(a.key,t),Zj(n,a)):a instanceof f2?(dt(hg,"Document no longer in limbo: "+a.key),n.Ru.removeReference(a.key,t),n.Ru.containsKey(a.key)||y2(n,a.key)):Tt(19791,{wu:a})}function Zj(n,t){const r=t.key,a=r.path.canonicalString();n.du.get(r)||n.Eu.has(a)||(dt(hg,"New document in limbo: "+r),n.Eu.add(a),fg(n))}function fg(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const r=new _t(oe.fromString(t)),a=n.fu.next();n.Au.set(a,new Bj(r)),n.du=n.du.insert(r,a),n2(n.remoteStore,new Gr(Ei(Qm(r.path)),a,"TargetPurposeLimboResolution",kh.ce))}}async function cu(n,t,r){const a=Rt(n),o=[],u=[],f=[];a.Tu.isEmpty()||(a.Tu.forEach(((m,p)=>{f.push(a.pu(p,t,r).then((g=>{if((g||r)&&a.isPrimaryClient){const _=g?!g.fromCache:r?.targetChanges.get(p.targetId)?.current;a.sharedClientState.updateQueryState(p.targetId,_?"current":"not-current")}if(g){o.push(g);const _=ng.As(p.targetId,g);u.push(_)}})))})),await Promise.all(f),a.Pu.H_(o),await(async function(p,g){const _=Rt(p);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",(b=>at.forEach(g,(S=>at.forEach(S.Es,(j=>_.persistence.referenceDelegate.addReference(b,S.targetId,j))).next((()=>at.forEach(S.ds,(j=>_.persistence.referenceDelegate.removeReference(b,S.targetId,j)))))))))}catch(b){if(!_o(b))throw b;dt(ig,"Failed to update sequence numbers: "+b)}for(const b of g){const S=b.targetId;if(!b.fromCache){const j=_.Ms.get(S),U=j.snapshotVersion,$=j.withLastLimboFreeSnapshotVersion(U);_.Ms=_.Ms.insert(S,$)}}})(a.localStore,u))}async function Jj(n,t){const r=Rt(n);if(!r.currentUser.isEqual(t)){dt(hg,"User change. New user:",t.toKey());const a=await ZE(r.localStore,t);r.currentUser=t,(function(u,f){u.mu.forEach((m=>{m.forEach((p=>{p.reject(new mt(st.CANCELLED,f))}))})),u.mu.clear()})(r,"'waitForPendingWrites' promise is rejected due to a user change."),r.sharedClientState.handleUserChange(t,a.removedBatchIds,a.addedBatchIds),await cu(r,a.Ls)}}function tI(n,t){const r=Rt(n),a=r.Au.get(t);if(a&&a.hu)return Pt().add(a.key);{let o=Pt();const u=r.Iu.get(t);if(!u)return o;for(const f of u){const m=r.Tu.get(f);o=o.unionWith(m.view.nu)}return o}}function v2(n){const t=Rt(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=p2.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=tI.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Qj.bind(null,t),t.Pu.H_=Uj.bind(null,t.eventManager),t.Pu.yu=Pj.bind(null,t.eventManager),t}function eI(n){const t=Rt(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Xj.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Wj.bind(null,t),t}class wh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=qh(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,r){return null}Mu(t,r){return null}vu(t){return aj(this.persistence,new nj,t.initialUser,this.serializer)}Cu(t){return new WE(eg.mi,this.serializer)}Du(t){return new fj}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}wh.provider={build:()=>new wh};class nI extends wh{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,r){Gt(this.persistence.referenceDelegate instanceof bh,46915);const a=this.persistence.referenceDelegate.garbageCollector;return new BC(a,t.asyncQueue,r)}Cu(t){const r=this.cacheSizeBytes!==void 0?yn.withCacheSize(this.cacheSizeBytes):yn.DEFAULT;return new WE((a=>bh.mi(a,r)),this.serializer)}}class fm{async initialize(t,r){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(r),this.remoteStore=this.createRemoteStore(r),this.eventManager=this.createEventManager(r),this.syncEngine=this.createSyncEngine(r,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>_x(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=Jj.bind(null,this.syncEngine),await Oj(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new kj})()}createDatastore(t){const r=qh(t.databaseInfo.databaseId),a=(function(u){return new yj(u)})(t.databaseInfo);return(function(u,f,m,p){return new Ej(u,f,m,p)})(t.authCredentials,t.appCheckCredentials,a,r)}createRemoteStore(t){return(function(a,o,u,f,m){return new Tj(a,o,u,f,m)})(this.localStore,this.datastore,t.asyncQueue,(r=>_x(this.syncEngine,r,0)),(function(){return px.v()?new px:new dj})())}createSyncEngine(t,r){return(function(o,u,f,m,p,g,_){const b=new $j(o,u,f,m,p,g);return _&&(b.gu=!0),b})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,r)}async terminate(){await(async function(r){const a=Rt(r);dt(Wa,"RemoteStore shutting down."),a.Ea.add(5),await uu(a),a.Aa.shutdown(),a.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}fm.provider={build:()=>new fm};/**
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
 */class x2{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):ar("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,r){setTimeout((()=>{this.muted||t(r)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra="FirestoreClient";class iI{constructor(t,r,a,o,u){this.authCredentials=t,this.appCheckCredentials=r,this.asyncQueue=a,this.databaseInfo=o,this.user=an.UNAUTHENTICATED,this.clientId=$m.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(a,(async f=>{dt(ra,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f})),this.appCheckCredentials.start(a,(f=>(dt(ra,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new er;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(r){const a=ug(r,"Failed to shutdown persistence");t.reject(a)}})),t.promise}}async function Cp(n,t){n.asyncQueue.verifyOperationInProgress(),dt(ra,"Initializing OfflineComponentProvider");const r=n.configuration;await t.initialize(r);let a=r.initialUser;n.setCredentialChangeListener((async o=>{a.isEqual(o)||(await ZE(t.localStore,o),a=o)})),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t}async function bx(n,t){n.asyncQueue.verifyOperationInProgress();const r=await rI(n);dt(ra,"Initializing OnlineComponentProvider"),await t.initialize(r,n.configuration),n.setCredentialChangeListener((a=>gx(t.remoteStore,a))),n.setAppCheckTokenChangeListener(((a,o)=>gx(t.remoteStore,o))),n._onlineComponents=t}async function rI(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){dt(ra,"Using user provided OfflineComponentProvider");try{await Cp(n,n._uninitializedComponentsProvider._offline)}catch(t){const r=t;if(!(function(o){return o.name==="FirebaseError"?o.code===st.FAILED_PRECONDITION||o.code===st.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(r))throw r;ro("Error using user provided cache. Falling back to memory cache: "+r),await Cp(n,new wh)}}else dt(ra,"Using default OfflineComponentProvider"),await Cp(n,new nI(void 0));return n._offlineComponents}async function _2(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(dt(ra,"Using user provided OnlineComponentProvider"),await bx(n,n._uninitializedComponentsProvider._online)):(dt(ra,"Using default OnlineComponentProvider"),await bx(n,new fm))),n._onlineComponents}function aI(n){return _2(n).then((t=>t.syncEngine))}async function E2(n){const t=await _2(n),r=t.eventManager;return r.onListen=Fj.bind(null,t.syncEngine),r.onUnlisten=Hj.bind(null,t.syncEngine),r.onFirstRemoteStoreListen=Kj.bind(null,t.syncEngine),r.onLastRemoteStoreUnlisten=Gj.bind(null,t.syncEngine),r}function sI(n,t,r={}){const a=new er;return n.asyncQueue.enqueueAndForget((async()=>(function(u,f,m,p,g){const _=new x2({next:S=>{_.Nu(),f.enqueueAndForget((()=>u2(u,b)));const j=S.docs.has(m);!j&&S.fromCache?g.reject(new mt(st.UNAVAILABLE,"Failed to get document because the client is offline.")):j&&S.fromCache&&p&&p.source==="server"?g.reject(new mt(st.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(S)},error:S=>g.reject(S)}),b=new c2(Qm(m.path),_,{includeMetadataChanges:!0,qa:!0});return l2(u,b)})(await E2(n),n.asyncQueue,t,r,a))),a.promise}function oI(n,t,r={}){const a=new er;return n.asyncQueue.enqueueAndForget((async()=>(function(u,f,m,p,g){const _=new x2({next:S=>{_.Nu(),f.enqueueAndForget((()=>u2(u,b))),S.fromCache&&p.source==="server"?g.reject(new mt(st.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(S)},error:S=>g.reject(S)}),b=new c2(m,_,{includeMetadataChanges:!0,qa:!0});return l2(u,b)})(await E2(n),n.asyncQueue,t,r,a))),a.promise}/**
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
 */function b2(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const Tx=new Map;/**
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
 */const T2="firestore.googleapis.com",wx=!0;class Sx{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new mt(st.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=T2,this.ssl=wx}else this.host=t.host,this.ssl=t.ssl??wx;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=XE;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<LC)throw new mt(st.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}b6("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=b2(t.experimentalLongPollingOptions??{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new mt(st.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new mt(st.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new mt(st.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(a,o){return a.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Yh{constructor(t,r,a,o){this._authCredentials=t,this._appCheckCredentials=r,this._databaseId=a,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sx({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new mt(st.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new mt(st.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sx(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(a){if(!a)return new f6;switch(a.type){case"firstParty":return new g6(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new mt(st.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(r){const a=Tx.get(r);a&&(dt("ComponentProvider","Removing Datastore"),Tx.delete(r),a.terminate())})(this),Promise.resolve()}}function lI(n,t,r,a={}){n=sr(n,Yh);const o=Lm(t),u=n._getSettings(),f={...u,emulatorOptions:n._getEmulatorOptions()},m=`${t}:${r}`;o&&(L4(`https://${m}`),F4("Firestore",!0)),u.host!==T2&&u.host!==m&&ro("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...u,host:m,ssl:o,emulatorOptions:a};if(!dh(p,f)&&(n._setSettings(p),a.mockUserToken)){let g,_;if(typeof a.mockUserToken=="string")g=a.mockUserToken,_=an.MOCK_USER;else{g=z4(a.mockUserToken,n._app?.options.projectId);const b=a.mockUserToken.sub||a.mockUserToken.user_id;if(!b)throw new mt(st.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new an(b)}n._authCredentials=new d6(new oE(g,_))}}/**
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
 */class Qh{constructor(t,r,a){this.converter=r,this._query=a,this.type="query",this.firestore=t}withConverter(t){return new Qh(this.firestore,t,this._query)}}class De{constructor(t,r,a){this.converter=r,this._key=a,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new De(this.firestore,t,this._key)}toJSON(){return{type:De._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,r,a){if(su(r,De._jsonSchema))return new De(t,a||null,new _t(oe.fromString(r.referencePath)))}}De._jsonSchemaVersion="firestore/documentReference/1.0",De._jsonSchema={type:Ie("string",De._jsonSchemaVersion),referencePath:Ie("string")};class Wr extends Qh{constructor(t,r,a){super(t,r,Qm(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new De(this.firestore,null,new _t(t))}withConverter(t){return new Wr(this.firestore,t,this._path)}}function uI(n,t,...r){if(n=Zr(n),lE("collection","path",t),n instanceof Yh){const a=oe.fromString(t,...r);return Lv(a),new Wr(n,null,a)}{if(!(n instanceof De||n instanceof Wr))throw new mt(st.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=n._path.child(oe.fromString(t,...r));return Lv(a),new Wr(n.firestore,null,a)}}function Fl(n,t,...r){if(n=Zr(n),arguments.length===1&&(t=$m.newId()),lE("doc","path",t),n instanceof Yh){const a=oe.fromString(t,...r);return Pv(a),new De(n,null,new _t(a))}{if(!(n instanceof De||n instanceof Wr))throw new mt(st.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=n._path.child(oe.fromString(t,...r));return Pv(a),new De(n.firestore,n instanceof Wr?n.converter:null,new _t(a))}}/**
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
 */const Ax="AsyncQueue";class Rx{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new t2(this,"async_queue_retry"),this._c=()=>{const a=Rp();a&&dt(Ax,"Visibility state changed to "+a.visibilityState),this.M_.w_()},this.ac=t;const r=Rp();r&&typeof r.addEventListener=="function"&&r.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const r=Rp();r&&typeof r.removeEventListener=="function"&&r.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const r=new er;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(r.resolve,r.reject),r.promise))).then((()=>r.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!_o(t))throw t;dt(Ax,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const r=this.ac.then((()=>(this.rc=!0,t().catch((a=>{throw this.nc=a,this.rc=!1,ar("INTERNAL UNHANDLED ERROR: ",Cx(a)),a})).then((a=>(this.rc=!1,a))))));return this.ac=r,r}enqueueAfterDelay(t,r,a){this.uc(),this.oc.indexOf(t)>-1&&(r=0);const o=lg.createAndSchedule(this,t,r,a,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&Tt(47125,{Pc:Cx(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const r of this.tc)if(r.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((r,a)=>r.targetTimeMs-a.targetTimeMs));for(const r of this.tc)if(r.skipDelay(),t!=="all"&&r.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const r=this.tc.indexOf(t);this.tc.splice(r,1)}}function Cx(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class hu extends Yh{constructor(t,r,a,o){super(t,r,a,o),this.type="firestore",this._queue=new Rx,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Rx(t),this._firestoreClient=void 0,await t}}}function cI(n,t){const r=typeof n=="object"?n:JR(),a=typeof n=="string"?n:gh,o=YR(r,"firestore").getImmediate({identifier:a});if(!o._initialized){const u=U4("firestore");u&&lI(o,...u)}return o}function dg(n){if(n._terminated)throw new mt(st.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||hI(n),n._firestoreClient}function hI(n){const t=n._freezeSettings(),r=(function(o,u,f,m){return new M6(o,u,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,b2(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,t);n._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new iI(n._authCredentials,n._appCheckCredentials,n._queue,r,n._componentsProvider&&(function(o){const u=o?._online.build();return{_offline:o?._offline.build(u),_online:u}})(n._componentsProvider))}/**
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
 */class $n{constructor(t){this._byteString=t}static fromBase64String(t){try{return new $n(Ze.fromBase64String(t))}catch(r){throw new mt(st.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+r)}}static fromUint8Array(t){return new $n(Ze.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:$n._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(su(t,$n._jsonSchema))return $n.fromBase64String(t.bytes)}}$n._jsonSchemaVersion="firestore/bytes/1.0",$n._jsonSchema={type:Ie("string",$n._jsonSchemaVersion),bytes:Ie("string")};/**
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
 */class Xh{constructor(...t){for(let r=0;r<t.length;++r)if(t[r].length===0)throw new mt(st.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Wh{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(t,r){if(!isFinite(t)||t<-90||t>90)throw new mt(st.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(r)||r<-180||r>180)throw new mt(st.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+r);this._lat=t,this._long=r}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Ut(this._lat,t._lat)||Ut(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:wi._jsonSchemaVersion}}static fromJSON(t){if(su(t,wi._jsonSchema))return new wi(t.latitude,t.longitude)}}wi._jsonSchemaVersion="firestore/geoPoint/1.0",wi._jsonSchema={type:Ie("string",wi._jsonSchemaVersion),latitude:Ie("number"),longitude:Ie("number")};/**
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
 */class Si{constructor(t){this._values=(t||[]).map((r=>r))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(a,o){if(a.length!==o.length)return!1;for(let u=0;u<a.length;++u)if(a[u]!==o[u])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Si._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(su(t,Si._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((r=>typeof r=="number")))return new Si(t.vectorValues);throw new mt(st.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Si._jsonSchemaVersion="firestore/vectorValue/1.0",Si._jsonSchema={type:Ie("string",Si._jsonSchemaVersion),vectorValues:Ie("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI=/^__.*__$/;class dI{constructor(t,r,a){this.data=t,this.fieldMask=r,this.fieldTransforms=a}toMutation(t,r){return this.fieldMask!==null?new sa(t,this.data,this.fieldMask,r,this.fieldTransforms):new ou(t,this.data,r,this.fieldTransforms)}}class w2{constructor(t,r,a){this.data=t,this.fieldMask=r,this.fieldTransforms=a}toMutation(t,r){return new sa(t,this.data,this.fieldMask,r,this.fieldTransforms)}}function S2(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Tt(40011,{Ac:n})}}class pg{constructor(t,r,a,o,u,f){this.settings=t,this.databaseId=r,this.serializer=a,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new pg({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const r=this.path?.child(t),a=this.Vc({path:r,fc:!1});return a.gc(t),a}yc(t){const r=this.path?.child(t),a=this.Vc({path:r,fc:!1});return a.Rc(),a}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return Sh(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((r=>t.isPrefixOf(r)))!==void 0||this.fieldTransforms.find((r=>t.isPrefixOf(r.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(S2(this.Ac)&&fI.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class pI{constructor(t,r,a){this.databaseId=t,this.ignoreUndefinedProperties=r,this.serializer=a||qh(t)}Cc(t,r,a,o=!1){return new pg({Ac:t,methodName:r,Dc:a,path:We.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function A2(n){const t=n._freezeSettings(),r=qh(n._databaseId);return new pI(n._databaseId,!!t.ignoreUndefinedProperties,r)}function mI(n,t,r,a,o,u={}){const f=n.Cc(u.merge||u.mergeFields?2:0,t,r,o);gg("Data must be an object, but it was:",f,a);const m=R2(a,f);let p,g;if(u.merge)p=new jn(f.fieldMask),g=f.fieldTransforms;else if(u.mergeFields){const _=[];for(const b of u.mergeFields){const S=dm(t,b,r);if(!f.contains(S))throw new mt(st.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);j2(_,S)||_.push(S)}p=new jn(_),g=f.fieldTransforms.filter((b=>p.covers(b.field)))}else p=null,g=f.fieldTransforms;return new dI(new vn(m),p,g)}class Zh extends Wh{_toFieldTransform(t){if(t.Ac!==2)throw t.Ac===1?t.Sc(`${this._methodName}() can only appear at the top level of your update data`):t.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Zh}}class mg extends Wh{constructor(t,r){super(t),this.Fc=r}_toFieldTransform(t){const r=new iu(t.serializer,NE(t.serializer,this.Fc));return new aC(t.path,r)}isEqual(t){return t instanceof mg&&this.Fc===t.Fc}}function gI(n,t,r,a){const o=n.Cc(1,t,r);gg("Data must be an object, but it was:",o,a);const u=[],f=vn.empty();aa(a,((p,g)=>{const _=yg(t,p,r);g=Zr(g);const b=o.yc(_);if(g instanceof Zh)u.push(_);else{const S=Jh(g,b);S!=null&&(u.push(_),f.set(_,S))}}));const m=new jn(u);return new w2(f,m,o.fieldTransforms)}function yI(n,t,r,a,o,u){const f=n.Cc(1,t,r),m=[dm(t,a,r)],p=[o];if(u.length%2!=0)throw new mt(st.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<u.length;S+=2)m.push(dm(t,u[S])),p.push(u[S+1]);const g=[],_=vn.empty();for(let S=m.length-1;S>=0;--S)if(!j2(g,m[S])){const j=m[S];let U=p[S];U=Zr(U);const $=f.yc(j);if(U instanceof Zh)g.push(j);else{const P=Jh(U,$);P!=null&&(g.push(j),_.set(j,P))}}const b=new jn(g);return new w2(_,b,f.fieldTransforms)}function Jh(n,t){if(C2(n=Zr(n)))return gg("Unsupported field value:",t,n),R2(n,t);if(n instanceof Wh)return(function(a,o){if(!S2(o.Ac))throw o.Sc(`${a._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${a._methodName}() is not currently supported inside arrays`);const u=a._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(a,o){const u=[];let f=0;for(const m of a){let p=Jh(m,o.wc(f));p==null&&(p={nullValue:"NULL_VALUE"}),u.push(p),f++}return{arrayValue:{values:u}}})(n,t)}return(function(a,o){if((a=Zr(a))===null)return{nullValue:"NULL_VALUE"};if(typeof a=="number")return NE(o.serializer,a);if(typeof a=="boolean")return{booleanValue:a};if(typeof a=="string")return{stringValue:a};if(a instanceof Date){const u=le.fromDate(a);return{timestampValue:Eh(o.serializer,u)}}if(a instanceof le){const u=new le(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:Eh(o.serializer,u)}}if(a instanceof wi)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof $n)return{bytesValue:FE(o.serializer,a._byteString)};if(a instanceof De){const u=o.databaseId,f=a.firestore._databaseId;if(!f.isEqual(u))throw o.Sc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Jm(a.firestore._databaseId||o.databaseId,a._key.path)}}if(a instanceof Si)return(function(f,m){return{mapValue:{fields:{[yE]:{stringValue:vE},[yh]:{arrayValue:{values:f.toArray().map((g=>{if(typeof g!="number")throw m.Sc("VectorValues must only contain numeric values.");return Xm(m.serializer,g)}))}}}}}})(a,o);throw o.Sc(`Unsupported field value: ${Fm(a)}`)})(n,t)}function R2(n,t){const r={};return hE(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):aa(n,((a,o)=>{const u=Jh(o,t.mc(a));u!=null&&(r[a]=u)})),{mapValue:{fields:r}}}function C2(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof le||n instanceof wi||n instanceof $n||n instanceof De||n instanceof Wh||n instanceof Si)}function gg(n,t,r){if(!C2(r)||!uE(r)){const a=Fm(r);throw a==="an object"?t.Sc(n+" a custom object"):t.Sc(n+" "+a)}}function dm(n,t,r){if((t=Zr(t))instanceof Xh)return t._internalPath;if(typeof t=="string")return yg(n,t);throw Sh("Field path arguments must be of type string or ",n,!1,void 0,r)}const vI=new RegExp("[~\\*/\\[\\]]");function yg(n,t,r){if(t.search(vI)>=0)throw Sh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,r);try{return new Xh(...t.split("."))._internalPath}catch{throw Sh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,r)}}function Sh(n,t,r,a,o){const u=a&&!a.isEmpty(),f=o!==void 0;let m=`Function ${t}() called with invalid data`;r&&(m+=" (via `toFirestore()`)"),m+=". ";let p="";return(u||f)&&(p+=" (found",u&&(p+=` in field ${a}`),f&&(p+=` in document ${o}`),p+=")"),new mt(st.INVALID_ARGUMENT,m+n+p)}function j2(n,t){return n.some((r=>r.isEqual(t)))}/**
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
 */class I2{constructor(t,r,a,o,u){this._firestore=t,this._userDataWriter=r,this._key=a,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new De(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new xI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const r=this._document.data.field(D2("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r)}}}class xI extends I2{data(){return super.data()}}function D2(n,t){return typeof t=="string"?yg(n,t):t instanceof Xh?t._internalPath:t._delegate._internalPath}/**
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
 */function _I(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new mt(st.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class EI{convertValue(t,r="none"){switch(na(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Se(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,r);case 5:return t.stringValue;case 6:return this.convertBytes(ea(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,r);case 11:return this.convertObject(t.mapValue,r);case 10:return this.convertVectorValue(t.mapValue);default:throw Tt(62114,{value:t})}}convertObject(t,r){return this.convertObjectMap(t.fields,r)}convertObjectMap(t,r="none"){const a={};return aa(t,((o,u)=>{a[o]=this.convertValue(u,r)})),a}convertVectorValue(t){const r=t.fields?.[yh].arrayValue?.values?.map((a=>Se(a.doubleValue)));return new Si(r)}convertGeoPoint(t){return new wi(Se(t.latitude),Se(t.longitude))}convertArray(t,r){return(t.values||[]).map((a=>this.convertValue(a,r)))}convertServerTimestamp(t,r){switch(r){case"previous":const a=Ph(t);return a==null?null:this.convertValue(a,r);case"estimate":return this.convertTimestamp(Zl(t));default:return null}}convertTimestamp(t){const r=ta(t);return new le(r.seconds,r.nanos)}convertDocumentKey(t,r){const a=oe.fromString(t);Gt(QE(a),9688,{name:t});const o=new Jl(a.get(1),a.get(3)),u=new _t(a.popFirst(5));return o.isEqual(r)||ar(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),u}}/**
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
 */function bI(n,t,r){let a;return a=n?r&&(r.merge||r.mergeFields)?n.toFirestore(t,r):n.toFirestore(t):t,a}class Vl{constructor(t,r){this.hasPendingWrites=t,this.fromCache=r}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Qa extends I2{constructor(t,r,a,o,u,f){super(t,r,a,o,f),this._firestore=t,this._firestoreImpl=t,this.metadata=u}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const r=new sh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(r,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,r={}){if(this._document){const a=this._document.data.field(D2("DocumentSnapshot.get",t));if(a!==null)return this._userDataWriter.convertValue(a,r.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new mt(st.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,r={};return r.type=Qa._jsonSchemaVersion,r.bundle="",r.bundleSource="DocumentSnapshot",r.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?r:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),r.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),r)}}Qa._jsonSchemaVersion="firestore/documentSnapshot/1.0",Qa._jsonSchema={type:Ie("string",Qa._jsonSchemaVersion),bundleSource:Ie("string","DocumentSnapshot"),bundleName:Ie("string"),bundle:Ie("string")};class sh extends Qa{data(t={}){return super.data(t)}}class Ws{constructor(t,r,a,o){this._firestore=t,this._userDataWriter=r,this._snapshot=o,this.metadata=new Vl(o.hasPendingWrites,o.fromCache),this.query=a}get docs(){const t=[];return this.forEach((r=>t.push(r))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,r){this._snapshot.docs.forEach((a=>{t.call(r,new sh(this._firestore,this._userDataWriter,a.key,a,new Vl(this._snapshot.mutatedKeys.has(a.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const r=!!t.includeMetadataChanges;if(r&&this._snapshot.excludesMetadataChanges)throw new mt(st.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===r||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map((m=>{const p=new sh(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Vl(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:p,oldIndex:-1,newIndex:f++}}))}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const p=new sh(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Vl(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let g=-1,_=-1;return m.type!==0&&(g=f.indexOf(m.doc.key),f=f.delete(m.doc.key)),m.type!==1&&(f=f.add(m.doc),_=f.indexOf(m.doc.key)),{type:TI(m.type),doc:p,oldIndex:g,newIndex:_}}))}})(this,r),this._cachedChangesIncludeMetadataChanges=r),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new mt(st.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Ws._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=$m.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const r=[],a=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(r.push(u._document),a.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function TI(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Tt(61501,{type:n})}}/**
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
 */function Kl(n){n=sr(n,De);const t=sr(n.firestore,hu);return sI(dg(t),n._key).then((r=>SI(t,n,r)))}Ws._jsonSchemaVersion="firestore/querySnapshot/1.0",Ws._jsonSchema={type:Ie("string",Ws._jsonSchemaVersion),bundleSource:Ie("string","QuerySnapshot"),bundleName:Ie("string"),bundle:Ie("string")};class N2 extends EI{constructor(t){super(),this.firestore=t}convertBytes(t){return new $n(t)}convertReference(t){const r=this.convertDocumentKey(t,this.firestore._databaseId);return new De(this.firestore,null,r)}}function wI(n){n=sr(n,Qh);const t=sr(n.firestore,hu),r=dg(t),a=new N2(t);return _I(n._query),oI(r,n._query).then((o=>new Ws(t,a,n,o)))}function M2(n,t,r){n=sr(n,De);const a=sr(n.firestore,hu),o=bI(n.converter,t,r);return O2(a,[mI(A2(a),"setDoc",n._key,o,n.converter!==null,r).toMutation(n._key,bi.none())])}function Ah(n,t,r,...a){n=sr(n,De);const o=sr(n.firestore,hu),u=A2(o);let f;return f=typeof(t=Zr(t))=="string"||t instanceof Xh?yI(u,"updateDoc",n._key,t,r,a):gI(u,"updateDoc",n._key,t),O2(o,[f.toMutation(n._key,bi.exists(!0))])}function O2(n,t){return(function(a,o){const u=new er;return a.asyncQueue.enqueueAndForget((async()=>Yj(await aI(a),o,u))),u.promise})(dg(n),t)}function SI(n,t,r){const a=r.docs.get(t._key),o=new N2(n);return new Qa(n,o,t._key,a,new Vl(r.hasPendingWrites,r.fromCache),t.converter)}function Rh(n){return new mg("increment",n)}(function(t,r=!0){(function(o){vo=o})(ZR),ph(new Yl("firestore",((a,{instanceIdentifier:o,options:u})=>{const f=a.getProvider("app").getImmediate(),m=new hu(new p6(a.getProvider("auth-internal")),new y6(f,a.getProvider("app-check-internal")),(function(g,_){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new mt(st.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Jl(g.options.projectId,_)})(f,o),f);return u={useFetchStreams:r,...u},m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),Qs(Ov,Vv,t),Qs(Ov,Vv,"esm2020")})();const AI={apiKey:"AIzaSyAEFzPwTADLzuxWuyk889Jz1cHPsEgLOkQ",authDomain:"tu2025grad.firebaseapp.com",projectId:"tu2025grad",storageBucket:"tu2025grad.firebasestorage.app",messagingSenderId:"553768466639",appId:"1:553768466639:web:7c16f5d6432da7ebc05fba"},RI=jv().length?jv()[0]:W_(AI),Zs=cI(RI),CI=A.div`
  position: relative;
  width: 445px;
  height: 353px;
  border-radius: 16px;
  cursor: pointer;
  @media (max-width: 640px) {
    width: 173px;
    height: 137px;  
 }
`,jx=A.div`
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
`,jI=A.div`
  display: flex;
  width: 445px;
  height: 353px;
  border-radius: 16px;
  @media (max-width: 640px) {
    width: 173px;
    height: 137px;
  }
`,II=A.img`
  display: flex;
  width: 445px;
  height: 353px;
  border-radius: 16px;
  object-fit: cover;
  @media (max-width: 640px) {
    width: 173px;
    height: 137px;  
 }
`,DI=A.div`
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
`,NI=A.div`
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
`,MI=A.p`
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
`,OI=A.p`
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
`,VI=A.div`
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
`,kI=A.div`
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
`,UI=A.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 14px;
  font-weight: 300;
  margin: 0;
  color: #121212;
  @media (max-width: 640px) {
    font-size: 10px;  
 }
`,PI=A.div`
  display: flex;
  position: relative;
  width: auto;
  height: 20px;
  gap: -12px;
  @media (max-width: 640px) {
    height: 12px;  
 }
`,LI=A.img`
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
`,zI=A.div`
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
`,Ix=A.div`
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
`,Dx=A.div`
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
`,Nx=A.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 12px;
  font-weight: 300;
  margin: 0;
  color: #121212;
  @media (max-width: 640px) {
    font-size: 8px;
 }
`;function vg({titleKor:n,titleEng:t,nameKor:r,view:a,like:o,href:u,src:f,profileImgs:m,docId:p,collection:g="works"}){const[_,b]=q.useState(typeof o=="number"?o:0),[S,j]=q.useState(typeof a=="number"?a:0);q.useEffect(()=>{let Z=!0;return(async()=>{if(p!=null)try{const ot=Fl(Zs,g,String(p)),tt=await Kl(ot);if(!Z)return;if(tt.exists()){const ft=tt.data();b(typeof ft.like=="number"?ft.like:0),j(typeof ft.view=="number"?ft.view:0)}}catch(ot){console.error("ProjectCard Firestore read error:",ot)}})(),()=>{Z=!1}},[p,g]);const U=Z=>{const ot=Z.currentTarget.querySelector(".card-hover");ot&&(ot.style.opacity=1)},$=Z=>{const ot=Z.currentTarget.querySelector(".card-hover");ot&&(ot.style.opacity=0)},P="/TU2025gradulate/",X=/^https?:\/\//i.test(u),Q=v.jsxs(v.Fragment,{children:[v.jsx(CI,{children:v.jsxs(jI,{onMouseEnter:U,onMouseLeave:$,children:[v.jsx(DI,{className:"card-hover",children:v.jsxs(NI,{children:[v.jsx(OI,{children:n}),v.jsx(MI,{children:t})]})}),v.jsx(II,{src:f,alt:"Project"})]})}),v.jsxs(VI,{children:[v.jsxs(kI,{children:[v.jsx(PI,{children:m.map((Z,ot)=>v.jsx(LI,{src:Z,alt:`Profile${ot+1}`,$z:3-ot,$ml:ot>0},ot))}),v.jsx(UI,{children:r})]}),v.jsxs(zI,{children:[v.jsxs(Ix,{children:[v.jsx(Dx,{src:`${P}icons/likeIcon.svg`}),v.jsx(Nx,{children:_})]}),v.jsxs(Ix,{children:[v.jsx(Dx,{src:`${P}icons/viewIcon.svg`}),v.jsx(Nx,{children:S})]})]})]})]});return X?v.jsx(jx,{as:"a",href:u,style:{textDecoration:"none"},children:Q}):v.jsx(jx,{as:mo,to:u.startsWith("/")?u:`/${u}`,style:{textDecoration:"none"},children:Q})}vg.propTypes={titleKor:W.string.isRequired,titleEng:W.string.isRequired,nameKor:W.string.isRequired,view:W.number,like:W.number,src:W.string.isRequired,href:W.string.isRequired,profileImgs:W.arrayOf(W.string).isRequired,docId:W.oneOfType([W.string,W.number]),collection:W.string};vg.defaultProps={titleKor:"프로젝트 제목",titleEng:"Project Title",nameKor:"Author Name",view:0,like:0,collection:"works"};const Mx=40;function V2(n){if(!n)return n;const t="/TU2025gradulate/";if(/^https?:\/\//i.test(n))return n;const r=n.replace(/^\.\.\//,"").replace(/^\//,"");return t+r}const BI=A.div`
  position: relative; background: #fff;
`,$I=A.div`
  padding-left: ${Mx}px; padding-right: ${Mx}px; display: flex; flex-direction: column;
  @media (max-width: 640px) {
    padding-left: 16px;
    padding-right: 16px;  
 }
`;function FI({children:n}){return v.jsx(BI,{children:v.jsx($I,{children:n})})}const KI=A.div`
  position: relative;
  min-height: calc(100vh - 200px);
`,qI=A.div`
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
`,HI=A.div`
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
`,Ox=Gl,k2=Um,GI={"All Projects":null,"AI & Robot":"c0","Edu & Kids":"c1","Health Care":"c2","IT & Tech":"c3",Living:"c4",Mobility:"c5"};function pm(n){return n.members.map(t=>{const r=k2.find(a=>a.num===t);return r?r.nameKor:""}).filter(Boolean).join(", ")}function YI(n){return n.members.map(t=>{const r=k2.find(a=>a.num===t);return r?V2(r.imgUrl):""}).filter(Boolean)}function QI({list:n}){const t={c0:"A",c1:"E",c2:"H",c3:"I",c4:"L",c5:"M"};return v.jsx(qI,{children:n.map((r,a)=>{const o=pm(r),u=YI(r),f=String(r.projectNum+1).padStart(3,"0"),p=`${t[r.category]||"A"}${f}`,g=r.projectNum??r.num;return v.jsx(vg,{titleKor:r.titleKor,titleEng:r.titleEng,src:V2(`/projects/${r.projectNum}/thumb.jpg`),nameKor:o,profileImgs:u,docId:g,href:`/work/${p}`},a)})})}function XI(){const[n,t]=kt.useState("All Projects"),[r,a]=kt.useState("이름순"),[o,u]=kt.useState({});kt.useEffect(()=>{let p=!0;return(async()=>{try{const g=await wI(uI(Zs,"works"));if(!p)return;const _={};g.forEach(b=>{const S=b.data()||{};_[String(b.id)]={like:typeof S.like=="number"?S.like:0,view:typeof S.view=="number"?S.view:0}}),u(_)}catch(g){console.error("Failed to load works stats:",g)}})(),()=>{p=!1}},[]);const f=kt.useMemo(()=>{const p=GI[n]||null;return p?Ox.filter(g=>g.category===p):Ox},[n]),m=kt.useMemo(()=>{const p=[...f];switch(r){case"이름순":p.sort((g,_)=>pm(g).localeCompare(pm(_),"ko"));break;case"좋아요순":p.sort((g,_)=>{const b=String(g.projectNum??g.num),S=String(_.projectNum??_.num),j=o[b]?.like??0;return(o[S]?.like??0)-j});break;case"조회수순":p.sort((g,_)=>{const b=String(g.projectNum??g.num),S=String(_.projectNum??_.num),j=o[b]?.view??0;return(o[S]?.view??0)-j});break;case"팀작우선":p.sort((g,_)=>(_.members.length>1)-(g.members.length>1));break;case"개인작우선":p.sort((g,_)=>(g.members.length>1)-(_.members.length>1));break}return p},[f,r,o]);return v.jsxs(KI,{children:[v.jsx(HI,{children:"Projects"}),v.jsx($_,{type:"project",onCategoryChange:t,onSortChange:a,sortLabel:r}),v.jsx(FI,{children:v.jsx(QI,{list:m})})]})}const WI=A.div(({height:n,from:t,to:r,position:a,z:o})=>({position:"absolute",left:0,right:0,[a]:-1,height:n,pointerEvents:"none",zIndex:o??0,background:`linear-gradient(180deg, ${t} 0%, ${r} 100%)`}));function xg({position:n="bottom",from:t,to:r,height:a=240,z:o=0,style:u}){return v.jsx(WI,{position:n,from:t,to:r,height:a,z:o,style:u})}const nr={heroToWhite:{from:"rgba(18,18,18,0)",to:"#FFFFFF",h:80},whiteToBlack:{from:"rgba(255,255,255,0)",to:"#121212",h:160},blackToBlackSoft:{from:"rgba(18,18,18,0)",to:"#121212",h:180}},ZI=A.section`
  position: relative; height: 974px; min-height: 620px; overflow: hidden; background: #121212; z-index: 1;
  @media (max-width: 640px) {
    height: 320px;
    min-height: 220px;
  }
`,JI=A.div`
  position: absolute; inset: 0;
  background: url("https://placehold.co/3169x1783") center/cover no-repeat;
  @media (max-width: 640px) {
    background-size: cover;
    background-position: center;
  }
`;A.div`
  content: ""; position: absolute; inset: 0;
  background: linear-gradient(180deg, #121212 0%, rgba(18,18,18,0) 55%);
`;const t3=A.div`
  position: absolute;
  inset: 0;
  background-color: rgba(18, 18, 18, 0.2);
`,e3=A.div`
  position: absolute; left: 40px; bottom: 80px; max-width: 1029px; display: flex; flex-direction: column; gap: 8px;
  @media (max-width: 640px) {
    left: 16px;
    bottom: 32px;
    max-width: 90vw;
    gap: 4px;
  }
`,Vx=A.p`
  margin: 0; color: #FFFFFF; font-family: Pretendard, system-ui; font-size: 16px; line-height: 19.2px;
  @media (max-width: 640px) {
    font-size: 13px;
    line-height: 1.4;
  }
`,n3=A.p`
  margin: 0; color: #FFFFFF; font-family: Pretendard, system-ui; font-weight: 600; font-size: 24px; line-height: 27.6px;
  @media (max-width: 640px) {
    font-size: 17px;
    line-height: 1.3;
  }
`,i3=A.button`
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
`;function r3(){return v.jsxs(ZI,{"aria-label":"Hero",children:[v.jsx(JI,{children:v.jsx(t3,{})}),v.jsxs(e3,{children:[v.jsxs(Vx,{children:["25. 10. 24. FRI~26. SUN",v.jsx("br",{}),"Hongdae Art Center B2"]}),v.jsx(Vx,{children:"Department of Design Engineering"}),v.jsxs(n3,{children:["Tech University of Korea",v.jsx("br",{}),"20th Grad Exhibition"]})]}),v.jsx(i3,{type:"button","aria-label":"View More",children:"View More"}),v.jsx(xg,{position:"bottom",from:nr.heroToWhite.from,to:nr.heroToWhite.to,height:nr.heroToWhite.h,z:0})]})}const kx="/TU2025gradulate/",a3=A.section`
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  padding-top: 120px;
  padding-bottom: 160px;
  @media (max-width: 640px) {
    padding-top: 32px;
    padding-bottom: 48px;
  }
`,s3=A.div`
  width: 100%;
  max-width: calc(100vw - 80px);
  margin: 0 auto;
  @media (max-width: 640px) {
    max-width: 100%;
    padding: 0 12px;
    box-sizing: border-box;
  }
`,o3=A.div`
  display: flex;
  gap: 94px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 640px) {
    gap: 32px;
  }
`,l3=A.div`
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
`,u3=A.h2`
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
`,c3=A.div`
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
`,h3=A.div`
  display: flex;
  width: 285px;
  height: 285px;
  position: relative;
  overflow: hidden;
  background: #FFFFFF;
  @media (max-width: 640px) {
    display: none;
  }
`,f3=A.div`
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
`;function d3(){return v.jsxs(a3,{"aria-labelledby":"brand-title",children:[v.jsxs(s3,{children:[v.jsxs(o3,{children:[v.jsx(u3,{id:"brand-title",children:"Brand Concept"}),v.jsxs(l3,{children:[v.jsxs(c3,{children:["우리는 살아가며 수많은 순간들을 스쳐 지나간다.",v.jsx("br",{}),"그 순간들은 이내 사라지는 듯하지만,",v.jsx("br",{}),"마음속 깊이 은은히 스며들어 기억이 되고,",v.jsx("br",{}),"결국엔 우리 존재의 한 조각이 된다.",v.jsx("br",{}),v.jsx("br",{}),"<잔향> 전시는 작품이 남긴 향이 관람객에게 스며들어",v.jsx("br",{}),"시간이 지나도 떠오를 수 있는 ‘기억의 향기’를 남기고자 한다.",v.jsx("br",{}),"단순한 결과물의 나열이 아닌, 창작의 과정과 고민이 축적된 흔적들이",v.jsx("br",{}),"이 공간에 머무는 이들의 감각과 감정 속에 잔잔히 머물기를 바란다.",v.jsx("br",{}),v.jsx("br",{}),"전시를 마주한 순간이 훗날, 불현듯 떠오르는 영감으로 다시 피어나기를.",v.jsx("br",{}),"그리하여 우리의 잔향이 누군가의 기억 속에서 오래도록 머물 수 있기를."]}),v.jsx(h3,{children:v.jsx("img",{src:`${kx}brand-logo.png`,alt:"2025 졸업전시 브랜드 로고",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",zIndex:1},draggable:!1})})]})]}),v.jsx(f3,{as:"div",style:{background:"none",height:"auto",justifyContent:"center",alignItems:"center",display:"flex",boxShadow:"none",margin:"32px auto 0",padding:0},children:v.jsx("img",{src:`${kx}brand-variation.png`,alt:"브랜드 컨셉 공식 그래픽",style:{width:"100%",maxWidth:480,height:"auto",display:"block",margin:"0 auto"},draggable:!1})})]}),v.jsx(xg,{position:"bottom",from:nr.whiteToBlack.from,to:nr.whiteToBlack.to,height:nr.whiteToBlack.h,z:0})]})}const p3='Pretendard, system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial, sans-serif',m3=A.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${n=>n.$size==="sm"?40:52}px;
  padding: 0 ${n=>n.$size==="sm"?16:24}px;
  border: 1px solid #FFFFFF;
  color: #FFFFFF;
  background: transparent;
  font-family: ${p3};
  font-weight: 700;
  font-size: ${n=>n.$size==="sm"?13:14}px;
  letter-spacing: 0.2px;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  width: ${n=>n.$full?"100%":"auto"};
  transition: background .15s ease, color .15s ease, border-color .15s ease;
`,g3=A.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-left: 8px;
  border-top: 1px solid #FFFFFF;
  border-right: 1px solid #FFFFFF;
  transform: rotate(45deg);
`;function tf({as:n="button",href:t,label:r="View More",size:a="md",fullWidth:o=!1,showArrow:u,defaultShowArrow:f=!0,onArrowChange:m,onClick:p,style:g}){const _=typeof u=="boolean",[b,S]=kt.useState(f),j=_?u:b;kt.useCallback(()=>{if(_){m&&m(!u);return}S($=>{const P=!$;return m&&m(P),P})},[_,m,u]);const U={onClick:p,style:g,"data-arrow-visible":j,"data-toggle-arrow-fn":void 0,$size:a,$full:o,as:n,href:t,type:n==="button"?"button":void 0};return v.jsxs(m3,{...U,target:"_blank",rel:"noopener noreferrer",children:[r,j?v.jsx(g3,{"aria-hidden":!0}):null]})}const y3=A.section`
  position: relative;
  padding-top: 120px;
  padding-bottom: 120px;
  background: #121212;
  z-index: 1;
`,v3=A.div`
  width: 100%;
  max-width: 1840px;
  margin: 0 auto;
`,x3=A.div`
  position: relative;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  background: #171717;
`,_3=A.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,E3=A.div`
  position: absolute;
  left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  width: 70px; height: 70px;
  border-radius: 35px;
  background: rgba(255,255,255,0.6);
  backdrop-filter: blur(5px);
`,b3=A.div`
  position: absolute; left: 27px; top: 23px;
  width: 0; height: 0;
  border-left: 16px solid #000;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
`,T3=A.div`
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
`;const w3=A.div`
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
`;function S3(){const n=[{src:"https://placehold.co/910x512",cap:""},{src:"https://placehold.co/727x445",cap:"뭐"},{src:"https://placehold.co/727x445",cap:"뭐"},{src:"https://placehold.co/727x445",cap:"뭐"},{src:"https://placehold.co/727x445",cap:"뭐"},{src:"https://placehold.co/910x517",cap:""},{src:"https://placehold.co/987x555",cap:""},{src:"https://placehold.co/727x445",cap:"뭐"},{src:"https://placehold.co/727x445",cap:"뭐"}];return v.jsxs(y3,{"aria-label":"Gallery",children:[v.jsx(xg,{position:"top",from:nr.blackToBlackSoft.from,to:nr.blackToBlackSoft.to,height:nr.blackToBlackSoft.h,z:0}),v.jsxs(v3,{children:[v.jsxs(x3,{children:[v.jsx(_3,{src:"https://placehold.co/1840x1000",alt:"featured"}),v.jsx(E3,{"aria-hidden":!0,children:v.jsx(b3,{})})]}),v.jsx(T3,{className:"gallery-desktop"}),v.jsx("div",{className:"gallery-mobile",style:{display:"none"},children:v.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginTop:12},children:n.map((t,r)=>v.jsxs("div",{style:{width:"46vw",height:"46vw",minWidth:140,minHeight:140,maxWidth:"100vw",maxHeight:"100vw",borderRadius:4,overflow:"hidden",background:"#151515",position:"relative",marginBottom:8},children:[v.jsx("img",{src:t.src,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),t.cap&&v.jsx(w3,{children:t.cap})]},r))})}),v.jsx("div",{style:{paddingTop:40,display:"flex",justifyContent:"center"},children:v.jsx(tf,{label:"View More"})})]})]})}const A3=A.section`
  padding: 0;
`,R3=A.div`
  position: relative; height: 1045px; overflow: hidden;
`,C3=A.div`
  position: absolute; left: 0; right: 0; top: 0; text-align: center;
  color: #FFFFFF; font-family: Pretendard, system-ui; font-weight: 700; font-size: 40px; line-height: 64px;
`,j3=A.div`
  position: absolute; left: 40px; right: 40px; top: 140px; height: 905px; border-radius: 4px; overflow: hidden;
`,I3=A.img`
  width: 100%; height: 100%; object-fit: cover;
`,D3=A.div`
  position: absolute; left: 732px; top: 327px; width: 787px; height: 492px; background: #FFFCFD;
`,N3=A.div`
  position: absolute; left: 610px; top: 496px; width: 700px; text-align: center;
  color: #000; font-family: Pretendard, system-ui; font-weight: 600; font-size: 48px; line-height: 76.8px;
`,M3=A.div`
  position: absolute; left: 860px; top: 935px;
`;function O3(){return v.jsx(A3,{"aria-labelledby":"online-title",children:v.jsxs(R3,{children:[v.jsx(C3,{id:"online-title",children:"Online Exhibition"}),v.jsx(j3,{children:v.jsx(I3,{src:"https://placehold.co/1840x905",alt:"Online Exhibition background"})}),v.jsx(D3,{"aria-hidden":!0}),v.jsx(N3,{children:"오브제 활용 인터렉티브 세션으로 교체중"}),v.jsx(M3,{children:v.jsx(tf,{label:"View More"})})]})})}const V3=[{id:"w1",artistKr:"홍길동",dept:"Media Design Engineering",titleSmall:"jakpum en name",titleStrong:"작품 한글이름이름이름이",rightMeta1:"gandanhan jakpum seolmyeong",rightMeta2:"Janhyeang - daechung ganji naneun mal",image:"https://placehold.co/1265x712"},{id:"w2",artistKr:"김아무개",dept:"Industrial Design",titleSmall:"another name",titleStrong:"또 다른 작품명",rightMeta1:"brief copy line",rightMeta2:"longer secondary copy",image:"https://placehold.co/1265x712?text=work+2"},{id:"w3",artistKr:"참깨빙수",dept:"Chamkkae Bingsu",titleSmall:"small jakpum",titleStrong:"세상에서 가장 맛있는 어쩌고",rightMeta1:"건던헌 적펌 설멍",rightMeta2:"long long nong jakpum seolmyeong",image:"https://placehold.co/1265x712?text=work+3"}],k3=A.div`
  position: relative;
  background: #121212;
  @media (max-width: 640px) {
    background: #121212;
    padding: 0 0 24px 0;
  }
`,U3=A.div`
  display: none;
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100vw;
    padding: 0 0 24px 0;
    box-sizing: border-box;
  }
`,P3=A.div`
  background: #222;
  border-radius: 10px;
  overflow: hidden;
  width: 92vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,L3=A.img`
  width: 100%;
  height: auto;
  display: block;
`,z3=A.div`
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
`;const fu=`
  -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 18%, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 100%);
          mask-image: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 18%, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 100%);
`;A.div`
  position: absolute; left: 195px; top: 240px;
  color: #FAFAFA;
  font-family: Pretendard, system-ui;
  font-size: 112px; font-weight: 600;
  transform: translate3d(0, ${n=>n.$y||0}px, 0);
  opacity: ${n=>n.$opacity??1};
  ${fu}
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
  ${fu}
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
  ${fu}
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
  ${fu}
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
  ${fu}
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
`;function B3(){return v.jsxs(v.Fragment,{children:[v.jsx(k3,{className:"expo-works-desktop"}),v.jsx(U3,{children:V3.map(n=>v.jsxs(P3,{children:[v.jsx(L3,{src:n.image,alt:n.titleStrong}),v.jsxs(z3,{children:[v.jsx("div",{style:{fontWeight:700,fontSize:16},children:n.titleStrong}),v.jsxs("div",{style:{fontSize:13,color:"#D9D9D9"},children:[n.artistKr," | ",n.dept]}),v.jsx("div",{style:{fontSize:12,color:"#A1A1A1",marginTop:2},children:n.rightMeta1}),v.jsx("div",{style:{fontSize:12,color:"#A1A1A1"},children:n.rightMeta2})]})]},n.id))})]})}const $3="/TU2025gradulate/",F3=A.div`
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
`,K3=A.div`
  position: relative; 
  height: auto;
`,q3=A.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0px;
  @media (max-width: 640px) {
    gap: 16px;
}
`,H3=A.div`
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
`,G3=A.div`
  display: flex; align-items: center; height: 49px; padding-bottom: 21px; color: #FFFFFF; font-family: Pretendard, system-ui; font-size: 40px; font-weight: 700; line-height: 38.4px;
  @media (max-width: 640px) {
    font-size: 24px; height: 29px; padding-bottom: 12px;
}
`,Y3=A.div`
  display: flex; flex-direction: column; align-items: center; gap: 60px; margin-top: 20px;
  @media (max-width: 640px) {
    margin-top: 60px;
    gap: 40px;
}
`,Q3=A.div`
  width: 272px; height: 272px; background: #121212; overflow: hidden; display: flex; align-items: center; justify-content: center;
  @media (max-width: 640px) {
    width: 160px; height: 160px;
}
`;function X3(){return v.jsx(F3,{"aria-labelledby":"insta-title",children:v.jsx(K3,{children:v.jsxs(q3,{children:[v.jsx(H3,{children:v.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#FFFFFF",children:[v.jsx("path",{d:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2A3.2 3.2 0 1 1 12 8a3.2 3.2 0 0 1 0 6.4z"}),v.jsx("circle",{cx:"17.5",cy:"6.5",r:"1.2"}),v.jsx("path",{d:"M17.8 2H6.2A4.2 4.2 0 0 0 2 6.2v11.6A4.2 4.2 0 0 0 6.2 22h11.6A4.2 4.2 0 0 0 22 17.8V6.2A4.2 4.2 0 0 0 17.8 2zm2.6 15.8a2.6 2.6 0 0 1-2.6 2.6H6.2a2.6 2.6 0 0 1-2.6-2.6V6.2A2.6 2.6 0 0 1 6.2 3.6h11.6a2.6 2.6 0 0 1 2.6 2.6v11.6z"})]})}),v.jsx(G3,{id:"insta-title",children:"@tukd_grad"}),v.jsxs(Y3,{children:[v.jsx(Q3,{children:v.jsx("img",{src:`${$3}insta-qr.png`,alt:"Instagram preview"})}),v.jsx(tf,{as:"a",href:"https://www.instagram.com/tukd_grad?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",label:"View Instagram",size:"sm"})]})]})})})}const du=`'Pretendard', system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial, sans-serif`,Ux=350,W3=A.section`
  padding: 120px 0 0 0; background: #121212;
`,Z3=A.div`
  position: relative; background: #121212;
`,J3=A.div`
  /* padding-left: ${Ux}px; padding-right: ${Ux}px; */
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
`,tD=({children:n})=>v.jsx(Z3,{children:v.jsx(J3,{children:n})}),eD=A.div`
  width: 289px; height: 45px; display: flex; align-items: flex-end;
`,nD=A.div`
  font-family: ${du}; font-size: 20px; font-weight: 700; line-height: 22.4px; color: #FFFFFF;

  @media (max-width: 640px) {
    font-size: 16px;
}
`;function iD({title:n}){return v.jsx(eD,{children:v.jsx(nD,{children:n})})}const rD=A.div`
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
  font-family: ${du}; font-size: 16px; font-weight: 700; line-height: 22.4px; color: #FFFFFF;
  @media (max-width: 640px) {
    font-size: 14px;
}
`,lD=A.div`
  width: 700px; display: flex; flex-direction: column; gap: 10px;
  @media (max-width: 640px) {
    width: 100%;
    gap: 6px;
  }
`;function qr({k:n,children:t,divider:r=!0}){return v.jsxs(aD,{$divider:r,children:[v.jsx(sD,{children:v.jsx(oD,{children:n})}),v.jsx(lD,{children:t})]})}const uD=A.div`
  width: 900px; display: flex; flex-direction: column;
  @media (max-width: 640px) {
    width: 100%;
    padding: 0;
    box-sizing: border-box;
  }
`;function Px({title:n,children:t,last:r=!1}){return v.jsxs(rD,{$last:r,children:[v.jsx(iD,{title:n}),v.jsx(uD,{children:t})]})}const cD=A.div`
  width: 900px; padding-top: 22px; padding-bottom: 40px; border-bottom: 1px rgba(255,255,255,0.12) solid;
  @media (max-width: 640px) {
    width: 100%;
    padding: 12px 0px 20px 0px;
    box-sizing: border-box;
  }
`,hD=A.div`
  font-family: ${du}; font-size: 16px; font-weight: 700; color: #FFFFFF;
  @media (max-width: 640px) {
    font-size: 14px;
}
`,Kt=A.div`
  font-family: ${du}; font-size: 16px; font-weight: 300; color: #CCCCCC; letter-spacing: 0px;
  @media (max-width: 640px) {
    font-size: 13px;
}
`,qc=A(Kt)`
  font-weight: 500;
`,fD=A(Kt)`
  font-size: 13px;
`,dD=A(Kt)`
  margin-top: 24px;
`,pD=A.a`
  font-family: ${du}; font-size: 16px; font-weight: 300; color: #CCCCCC; text-decoration: underline;
  @media (max-width: 640px) {
    font-size: 13px;
}
`;function mD(){return v.jsx(W3,{"aria-label":"Venue & Access",children:v.jsxs(tD,{children:[v.jsxs(Px,{title:"Venew Details",children:[v.jsx(cD,{children:v.jsx(hD,{children:"잔향 : 기억의 향기"})}),v.jsx(qr,{k:"Term",children:v.jsx(Kt,{children:"2025. 10. 24. FRI - 10. 26. SUN"})}),v.jsxs(qr,{k:"Hours",children:[v.jsx(Kt,{children:"10.24.FRI   13:00 ~ 17:30 (OPENING 16:00~)"}),v.jsx(Kt,{children:"10.25.SAT ~ 10.26.SUN    10:00 ~ 17:30"})]}),v.jsxs(qr,{k:"Schedule",children:[v.jsx(qc,{children:"10.24.FRI"}),v.jsx(Kt,{children:"13:00    자유관람"}),v.jsx(Kt,{children:"15:00    졸업생 홈커밍 행사"}),v.jsx(Kt,{children:"16:00    개회식"}),v.jsx(Kt,{children:"16:20    졸업작품 우수작 시상"}),v.jsx(Kt,{children:"16:30    자유관람"}),v.jsxs(qc,{children:[v.jsx("br",{}),"10.25.SAT"]}),v.jsx(Kt,{children:"10:00    자유관람"}),v.jsx(Kt,{children:"13:00    취·창업 커리어 캠프"}),v.jsxs(qc,{children:[v.jsx("br",{}),"10.26.SUN"]}),v.jsx(Kt,{children:"10:00    자유관람"})]}),v.jsxs(qr,{k:"Website",divider:!1,children:[v.jsx(Kt,{children:"Hongik Art Center"}),v.jsx(pD,{href:"https://artscenter.hongik.ac.kr/artcenter/index.do",target:"_blank",rel:"noreferrer",children:"https://artscenter.hongik.ac.kr/artcenter/index.do"})]})]}),v.jsxs(Px,{title:"Access",children:[v.jsxs(qr,{k:"Address",children:[v.jsx(Kt,{children:"Hongik Art Center B2 Gallery"}),v.jsx(Kt,{children:"57, Daehak-ro, Jongno-gu, Seoul"}),v.jsx(dD,{children:"Address in local language"}),v.jsxs(Kt,{children:["홍대 아트센터 지하 2층 전시관",v.jsx("br",{}),"서울시 종로구 대학로 57"]}),v.jsx("div",{style:{marginTop:24},children:v.jsx(tf,{as:"a",href:"https://maps.app.goo.gl/qc99M9bDqyBTcmx79",label:"Map",size:"sm",showArrow:!0})})]}),v.jsxs(qr,{k:"Parking",children:[v.jsx(Kt,{children:"B3F ~ B6F"}),v.jsxs(Kt,{children:[v.jsx("br",{}),"기본 30분 3,000원 / 이후 20분당 2,000원"]}),v.jsx(Kt,{children:"이용객 주차권 지참 시 50% 할인 및 1시간 무료이용권 제공"}),v.jsx(qc,{children:"(주차권으로만 정산 가능, 티켓정산 불가)"}),v.jsx(fD,{children:"주차권 배부 장소: B2 갤러리 3, 전시장 입구 인포데스크"})]}),v.jsxs(qr,{k:"By Subway",children:[v.jsx(Kt,{children:"[1호선 종로5가역]"}),v.jsx(Kt,{children:"2번 출구 방면으로 이동 → 이화사거리 방면으로 약 800m 직진 (도보7분)"}),v.jsxs(Kt,{children:[v.jsx("br",{}),"[4호선 혜화역]"]}),v.jsx(Kt,{children:"3번 출구 방면으로 이동 → 이화사거리 방면으로 약 800m 직진 (도보7분)"}),v.jsx(Kt,{children:"또는 08번 마을버스 탑승 후 이화사거리 앞 하차"})]}),v.jsxs(qr,{k:"By Bus",divider:!1,children:[v.jsx(Kt,{children:"[이화사거리(01-572) 하차]"}),v.jsx(Kt,{children:"마을버스 종로 08번"}),v.jsxs(Kt,{children:[v.jsx("br",{}),"[현대그룹빌딩(01-218) 하차]"]}),v.jsx(Kt,{children:"102, 107, 108, 109, 162, 301, 7025"}),v.jsxs(Kt,{children:[v.jsx("br",{}),"[이화장(01-223) 하차]"]}),v.jsx(Kt,{children:"109, 273, 601, 2112, 7025"})]})]})]})})}function gD(){const n=[v.jsx(r3,{},"hero"),v.jsx(d3,{},"brand"),v.jsx(S3,{},"gallery"),v.jsx(O3,{},"online"),v.jsx(B3,{},"works"),v.jsx(X3,{},"insta"),v.jsx(mD,{},"venue")];return v.jsx("div",{style:{background:"#121212",minHeight:"100vh"},children:n})}const _g="Pretendard, system-ui",yD=A.div`
  width: ${n=>n.$w}px;
  height: ${n=>n.$h}px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background: linear-gradient(225deg, #F2F0FF 0%, #FFFFFF 100%);
`,vD=A.div`
  width: 149px;
  height: 147px;
  position: absolute;
  left: 40px;
  top: 190px;
  background: #EDECF2;
  border-radius: 8px;
  transform: translateZ(0);
`,xD=A.div`
  width: 25px;
  height: 25px;
  position: absolute;
  left: 8px;
  top: 304px;
  background: #EDECF2;
  border-radius: 4px;
  transform: translateZ(0);
`,_D=A.div`
  position: absolute;
  left: 20px;
  top: 30px;
  font-family: ${_g};
  font-weight: 600;
  font-size: 20px;
  color: #555;
`,ED=A.div`
  position: absolute;
  left: 21px;
  top: 63px;
  width: 229px;
  font-family: ${_g};
  font-weight: 300;
  font-size: 18px;
  line-height: 27px;
  color: #333;
`,bD=A.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-family: ${_g};
  font-weight: 600;
  font-size: 14px;
  color: #555;
`;function TD({to:n,from:t,message:r}){return v.jsxs(yD,{$w:ef,$h:pu,children:[v.jsx(vD,{}),v.jsx(xD,{}),v.jsx(_D,{children:`To. ${n}`}),v.jsx(ED,{children:r}),v.jsx(bD,{children:`From. ${t}`})]})}const wD=A.div`
  width: ${n=>n.$w}px;
  height: ${n=>n.$h}px;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
`,SD=A.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;function AD({src:n}){return v.jsx(wD,{$w:ef,$h:pu,children:v.jsx(SD,{src:n,alt:"포토 카드"})})}const RD=A.button`
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
`,CD=A.div`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  background: rgba(0,0,0,.35);
  display: grid;
  place-items: center;
`,jD=A.div`
  width: 14px;
  height: 14px;
  position: relative;
`,ID=A.span`
  position: absolute;
  left: 6px;
  top: 0;
  width: 2px;
  height: 14px;
  background: #fff;
  border-radius: 1px;
`,DD=A.span`
  position: absolute;
  left: 0;
  top: 6px;
  width: 14px;
  height: 2px;
  background: #fff;
  border-radius: 1px;
`;function ND({onClick:n}){return v.jsx(RD,{onClick:n,"aria-label":"방명록 작성",$w:ef,$h:pu,children:v.jsx(CD,{children:v.jsxs(jD,{children:[v.jsx(ID,{}),v.jsx(DD,{})]})})})}const ef=270,pu=337,MD=30,U2=20,OD=210,VD=60,kD=A.div`
  padding: 0 0 12px 0;
`,UD=A.div`
  position: relative;
  width: 100%;
  height: 3px;
  background: #171717;
  border-radius: 2px;
  overflow: hidden;
`,PD=A.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 3px;
  width: ${n=>n.$w}px;
  min-width: 25px;
  background: #7a7a7a;
  border-radius: 2px;
  transition: width 350ms ease-in;
`,LD=A.div`
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-y;
  cursor: grab;
  padding: 0 ${VD}px 0 ${OD}px;
  scrollbar-width: none; 
  -ms-overflow-style: none;
  &::-webkit-scrollbar { display: none; }
`,zD=A.div`
  display: flex;
  gap: ${MD}px;
  align-items: flex-start;
  min-height: ${pu*2+U2}px;
`,BD=A.div`
  display: flex;
  flex-direction: column;
  gap: ${U2}px;
`,P2=A.div`
  width: ${ef}px;
  height: ${pu}px;
`,Lx=n=>{const t=[{type:"add",id:"add"},...n],r=[{min:6,max:10},{min:16,max:20},{min:26,max:30}];let a=0;return r.forEach((o,u)=>{if(t.length>o.min+a){const f=Math.min(Math.floor(Math.random()*(o.max-o.min+1))+o.min,t.length)+a;t.splice(f,0,{type:"photo",id:`ph-${Date.now()}-${u}`,src:"https://placehold.co/662x405"}),a++}}),t},$D=n=>{const t=[];for(let r=0;r<n.length;r+=2)t.push([n[r],n[r+1]||null]);return t};function FD({onOpenModal:n,items:t}){const r=q.useRef(null),[a,o]=q.useState({width:0,trackW:0}),[u,f]=q.useState(()=>Lx(t));q.useEffect(()=>{f(Lx(t))},[t]);const m=$D(u);q.useEffect(()=>{const b=r.current;if(!b)return;const S=j=>{Math.abs(j.deltaY)>Math.abs(j.deltaX)&&(b.scrollLeft+=j.deltaY,j.preventDefault())};return b.addEventListener("wheel",S,{passive:!1}),()=>b.removeEventListener("wheel",S)},[]);const p=q.useRef({on:!1,moved:!1,startX:0,startScroll:0}),g=b=>!!b?.closest?.('button, a, input, textarea, select, label, [role="button"], [data-nodrag]');q.useEffect(()=>{const b=r.current;if(!b)return;const S=$=>{$.button===0&&(g($.target)||(p.current.on=!0,p.current.moved=!1,p.current.startX=$.clientX,p.current.startScroll=b.scrollLeft,b.setPointerCapture?.($.pointerId),document.body.style.userSelect="none",b.style.cursor="grabbing"))},j=$=>{if(!p.current.on)return;const P=$.clientX-p.current.startX;Math.abs(P)>2&&(p.current.moved=!0),b.scrollLeft=p.current.startScroll-P},U=$=>{p.current.on&&(b.releasePointerCapture?.($.pointerId),document.body.style.userSelect="",b.style.cursor="grab",p.current.moved&&($.preventDefault(),$.stopPropagation()),p.current.on=!1)};return b.addEventListener("pointerdown",S),window.addEventListener("pointermove",j),window.addEventListener("pointerup",U),b.addEventListener("pointercancel",U),()=>{b.removeEventListener("pointerdown",S),window.removeEventListener("pointermove",j),window.removeEventListener("pointerup",U),b.removeEventListener("pointercancel",U)}},[]);const _=q.useCallback(()=>{const b=r.current;if(!b)return;const S=b.clientWidth,j=b.scrollWidth,U=b.scrollLeft,P=b.parentElement?.clientWidth||S,X=Math.max(1,j-S),Q=Math.min(1,Math.max(0,U/X)),Z=Math.round(P*Q);o({width:Z,trackW:P})},[]);return q.useEffect(()=>{_();const b=r.current;if(!b)return;const S=()=>requestAnimationFrame(_),j=()=>requestAnimationFrame(_);return b.addEventListener("scroll",S,{passive:!0}),window.addEventListener("resize",j),()=>{b.removeEventListener("scroll",S),window.removeEventListener("resize",j)}},[_]),v.jsxs(v.Fragment,{children:[v.jsx(kD,{children:v.jsx(UD,{children:v.jsx(PD,{$w:a.width})})}),v.jsx(LD,{ref:r,children:v.jsx(zD,{children:m.map((b,S)=>v.jsxs(BD,{children:[v.jsx(zx,{data:b[0],onOpenModal:n}),b[1]?v.jsx(zx,{data:b[1],onOpenModal:n}):v.jsx(P2,{})]},`col-${S}`))})})]})}function zx({data:n,onOpenModal:t}){return n?n.type==="add"?v.jsx(ND,{onClick:t,style:{pointerEvents:"auto"}}):n.type==="photo"?v.jsx(AD,{src:n.src}):v.jsx(TD,{to:n.to,from:n.from,message:n.message}):v.jsx(P2,{})}const KD=A.div`
  position: fixed; inset: 0; z-index: 1000;
  display: grid; place-items: center;
  background: rgba(0,0,0,.45);
`,qD=A.div`
  position: relative; display: inline-flex; align-items: flex-end; gap: 17px;
`,HD=A.div`
  padding: 40px; border-radius: 16px;
  background: rgba(160,160,160,.80);
  backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
  display: inline-flex; gap: 20px; align-items: center;
`,GD=A.div`
  width: 520px; display: inline-flex; gap: 20px; align-items: center;
`,YD=A.div`
  width: 450px; height: 560px; position: relative; overflow: hidden;
  border-radius: 16px;
  background: linear-gradient(225deg, #F2F0FF 0%, #FFFFFF 100%);
  box-shadow: 0 20px 60px rgba(0,0,0,.25);
`,QD=A.div`
  position: absolute; left: 66.53px; top: 314.67px; width: 248.47px; height: 245.33px; border-radius: 9999px; background: #EDECF2;
`,XD=A.div`
  position: absolute; left: 13.33px; top: 504.92px; width: 42.14px; height: 41.05px; border-radius: 9999px; background: #EDECF2;
`,WD=A.div`
  position: absolute; left: 32px; top: 50px; display: inline-flex; align-items: center; gap: 8px;
`,ZD=A.div`
  font-family: Pretendard, system-ui; font-weight: 600; font-size: 32px; color: #555;
`,JD=A.input`
  border: none; outline: none;
  border-bottom: 1px solid rgba(0,0,0,.18);
  background: transparent;
  font-family: Pretendard, system-ui;
  font-size: 28px; color: #303030;
  padding: 2px 4px 4px;
  min-width: 120px; max-width: 220px;
`,t5=A.div`
  position: absolute; left: 32px; top: 104px; width: 381px;
`,e5=A.textarea`
  width: 100%; min-height: 220px; resize: none;
  border: none; outline: none;
  border-radius: 12px; padding: 14px 16px;
  font-family: Pretendard, system-ui; font-size: 18px; line-height: 27px; color: #303030;
  background: rgba(255,255,255,.6);
  box-shadow: inset 0 0 0 1px rgba(255,255,255,.5);
`,n5=A.div`
  position: absolute; left: 181px; top: 472px; display: inline-flex; align-items: center; gap: 8px;
`,i5=A.div`
  font-family: Pretendard, system-ui; font-weight: 600; font-size: 32px; color: #555;
`,r5=A.input`
  border: none; outline: none;
  border-bottom: 1px solid rgba(0,0,0,.18);
  background: transparent;
  font-family: Pretendard, system-ui; font-size: 20px; color: #303030;
  padding: 2px 4px 4px;
  min-width: 120px; max-width: 180px;
`,a5=A.div`
  width: 50px; height: 560px; display: inline-flex; flex-direction: column; justify-content: flex-end;
`,s5=A.button`
  width: 50px; height: 50px; border-radius: 25px;
  background: #202020; cursor: pointer;
  display: grid; place-items: center; border: none;
`,o5=A.div`
  width: 20px; height: 17px; background: #fff; clip-path: polygon(0 0,100% 50%,0 100%);
`,l5=A.div`
  width: 60px; height: 640px; position: relative;
`,u5=A.button`
  width: 60px; height: 60px; position: absolute; left: 0; top: 0;
  display: grid; place-items: center; cursor: pointer;
  background: transparent; border: none;
`,c5=A.div`
  width: 32px; height: 32px; position: relative;
`,Bx=A.span`
  position: absolute; left: 15px; top: 4px; width: 2px; height: 24px;
  background: #FFFFFF; transform: rotate(${n=>n.$deg}deg);
`;function h5({open:n,onClose:t,onSubmit:r,defaultTo:a="",defaultFrom:o=""}){const[u,f]=q.useState(a),[m,p]=q.useState(o),[g,_]=q.useState(""),b=q.useRef(null);if(q.useEffect(()=>{const U=$=>{$.key==="Escape"&&t?.()};return n&&document.addEventListener("keydown",U),()=>document.removeEventListener("keydown",U)},[n,t]),!n)return null;const S=U=>{U.target===b.current&&t?.()},j=()=>{const U={to:(u||"").trim(),from:(m||"").trim(),message:(g||"").trim()};U.message&&r?.(U)};return v.jsx(KD,{ref:b,onMouseDown:S,children:v.jsxs(qD,{onMouseDown:U=>U.stopPropagation(),children:[v.jsx(HD,{children:v.jsxs(GD,{children:[v.jsxs(YD,{children:[v.jsx(QD,{}),v.jsx(XD,{}),v.jsxs(WD,{children:[v.jsx(ZD,{children:"To."}),v.jsx(JD,{value:u,onChange:U=>f(U.target.value),placeholder:"받는 사람"})]}),v.jsx(t5,{children:v.jsx(e5,{placeholder:"내용을 입력해 주세요.",value:g,onChange:U=>_(U.target.value)})}),v.jsxs(n5,{children:[v.jsx(i5,{children:"From."}),v.jsx(r5,{value:m,onChange:U=>p(U.target.value),placeholder:"보내는 사람"})]})]}),v.jsx(a5,{children:v.jsx(s5,{type:"button",onClick:j,"aria-label":"send",children:v.jsx(o5,{})})})]})}),v.jsx(l5,{children:v.jsx(u5,{type:"button",onClick:t,"aria-label":"close",children:v.jsxs(c5,{children:[v.jsx(Bx,{$deg:45}),v.jsx(Bx,{$deg:-45})]})})})]})})}const f5=[{id:"g1",to:"성수민",from:"김예준",message:"전시회에 우연히 들르게 되었는데, 작품 하나하나에서 깊은 고민과 세심함이 느껴졌습니다! 다들 고생많으셨습니다! 축하드려요",type:"text"},{id:"g2",to:"성수민",from:"김예준",message:"메시지 예시 2",type:"text"},{id:"g3",to:"성수민",from:"김예준",message:"메시지 예시 3",type:"text"},{id:"g4",to:"성수민",from:"김예준",message:"메시지 예시 4",type:"text"},{id:"g5",to:"성수민",from:"김예준",message:"메시지 예시 5",type:"text"},{id:"g6",to:"성수민",from:"김예준",message:"메시지 예시 6",type:"text"},{id:"g7",to:"성수민",from:"김예준",message:"메시지 예시 7",type:"text"},{id:"g8",to:"성수민",from:"김예준",message:"메시지 예시 8",type:"text"},{id:"g9",to:"성수민",from:"김예준",message:"메시지 예시 9",type:"text"},{id:"g10",to:"성수민",from:"김예준",message:"메시지 예시 10",type:"text"},{id:"g11",to:"성수민",from:"김예준",message:"메시지 예시 11",type:"text"},{id:"g12",to:"성수민",from:"김예준",message:"메시지 예시 12",type:"text"},{id:"g13",to:"성수민",from:"김예준",message:"메시지 예시 13",type:"text"},{id:"g14",to:"성수민",from:"김예준",message:"메시지 예시 14",type:"text"},{id:"g15",to:"성수민",from:"김예준",message:"메시지 예시 15",type:"text"},{id:"g16",to:"성수민",from:"김예준",message:"메시지 예시 16",type:"text"},{id:"g17",to:"성수민",from:"김예준",message:"메시지 예시 17",type:"text"},{id:"g18",to:"성수민",from:"김예준",message:"메시지 예시 18",type:"text"},{id:"g19",to:"성수민",from:"김예준",message:"메시지 예시 19",type:"text"},{id:"g20",to:"성수민",from:"김예준",message:"메시지 예시 20",type:"text"},{id:"g21",to:"성수민",from:"김예준",message:"메시지 예시 21",type:"text"},{id:"g22",to:"성수민",from:"김예준",message:"메시지 예시 22",type:"text"},{id:"g23",to:"성수민",from:"김예준",message:"메시지 예시 23",type:"text"},{id:"g24",to:"성수민",from:"김예준",message:"메시지 예시 24",type:"text"},{id:"g25",to:"성수민",from:"김예준",message:"메시지 예시 25",type:"text"}],d5='Pretendard, system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial, sans-serif',p5=A.div`
  background: #121212; min-height: 100vh;
`,m5=A.main`
  padding: 80px 40px 120px 40px;
`,g5=A.h1`
  font-family: ${d5}; font-weight: 700; font-size: 32px; color: #FFFFFF; text-align: center; margin: 20px 0 40px;
`,y5=A.section`
  display: flex; justify-content: center;
`,v5=A.div`
  width: 100%;
`;function x5(){const[n,t]=kt.useState(!1),[r,a]=kt.useState(f5),o=({to:f,from:m,message:p})=>{const g={id:`g-${Date.now()}`,to:f,from:m,message:p,type:"text"};a(_=>[g,..._]),t(!1)};return v.jsxs(p5,{children:[v.jsxs(m5,{children:[v.jsx(g5,{children:"Guest Book"}),v.jsx(y5,{children:v.jsxs(v5,{className:"gb-wrap",children:[v.jsx("style",{children:`
    .gb-wrap *::-webkit-scrollbar { display: none; }
    .gb-wrap * { scrollbar-width: none; -ms-overflow-style: none; }
    .gb-wrap article img { width: 100% !important; height: 100% !important; object-fit: cover !important; display: block !important; }
  `}),v.jsx(FD,{onOpenModal:()=>t(!0),items:r})]})})]}),v.jsx(h5,{open:n,onClose:()=>t(!1),onSubmit:o})]})}const mm="/TU2025gradulate/",_5=A.div`
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
`,E5=A.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: auto;
  @media (max-width: 640px) {
    gap: 40px;
}
`,b5=A.div`
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
`,T5=A.div`
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 640px) {
    display: none;
}
`,w5=A.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 640px) {
    width: auto;
}
`,S5=A.h1`
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
`,A5=A.p`
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
`,R5=A.div`
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
`,C5=A.div`
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
`,j5=A.div`
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
`,I5=A.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
`,D5=A.div`
  width: 24px;
  height: 24px;
  background-image: ${({$src:n})=>`url("${n}")`};
  background-size: contain;
  background-repeat: no-repeat;
  @media (max-width: 640px) {
    width: 16px;
    height: 16px;
}
`,N5=A.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #e0e0e0;
  margin: 0;
  padding: 0;
  @media (max-width: 640px) {
    font-size: 16px;
}
`,M5=A.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 12px;
  cursor: pointer;
`,O5=A.p`
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
`,V5=A.div`
  display: flex;
  width: 20px;
  height: 75px;
  align-items: center;
  justify-content: center;
  background-image: url('${mm}icons/pageDownIcon.svg');
  background-size: contain;
  background-repeat: no-repeat;
  @media (max-width: 640px) {
    width: 10px;
    height: 38px;
}
`;function gm({titleKor:n,titleEng:t,context:r,isOpen:a=!0,onClose:o,src:u,docId:f,collection:m="works"}){const[p,g]=q.useState(0),[_,b]=q.useState(!1);q.useEffect(()=>{let U=!0;return(async()=>{if(f!=null)try{const $=Fl(Zs,m,String(f)),P=await Kl($);if(!U)return;if(P.exists()){const X=P.data();g(typeof X.like=="number"?X.like:0)}else g(0)}catch($){console.error("Firestore getDoc error:",$),U&&g(0)}})(),()=>{U=!1}},[f,m]);const S=async()=>{try{const U=Fl(Zs,m,String(f)),$=await Kl(U);if($.exists()){const P=$.data();g(typeof P.like=="number"?P.like:0)}}catch(U){console.error("Firestore refresh error:",U)}},j=async()=>{if(_)return;if(f==null){console.warn("handleLike called without a valid docId");return}b(!0);const U=Fl(Zs,m,String(f));try{await Ah(U,{like:Rh(1)}),g($=>$+1),await S()}catch($){if($.code==="not-found"||/No document/i.test(String($)))try{(await Kl(U)).exists()?await Ah(U,{like:Rh(1)}):await M2(U,{like:1},{merge:!0}),await S()}catch(P){console.error("Firestore like fallback error:",P)}else console.error("Firestore like error:",$)}finally{b(!1)}};return v.jsx(_5,{$open:!!a,children:v.jsxs(E5,{children:[v.jsxs(b5,{children:[v.jsx(T5,{onClick:()=>{typeof o=="function"&&o()},children:v.jsx("img",{src:`${mm}icons/closeIcon.svg`,alt:"Close Icon"})}),v.jsxs(w5,{children:[v.jsx(S5,{children:n}),v.jsx(A5,{children:r})]}),v.jsx(R5,{$src:u})]}),v.jsxs(C5,{children:[v.jsx(j5,{onClick:j,"aria-disabled":_,title:_?"처리 중":"좋아요",children:v.jsxs(I5,{children:[v.jsx(D5,{$src:`${mm}icons/likeIcon(white).svg`,"aria-label":"Like icon"}),v.jsx(N5,{children:p})]})}),v.jsxs(M5,{onClick:()=>{const $=Math.max(document.documentElement?.scrollHeight||0,document.body?.scrollHeight||0)-window.innerHeight,X=Math.max(0,$-269);window.scrollTo({top:X,behavior:"smooth"})},children:[v.jsx(O5,{children:"Designer Info"}),v.jsx(V5,{})]})]})]})})}gm.propTypes={titleKor:W.string.isRequired,titleEng:W.string.isRequired,context:W.string.isRequired,isOpen:W.bool,onClose:W.func,docId:W.oneOfType([W.string,W.number]).isRequired,collection:W.string};const k5=A.div`
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
`,U5=A.div`
  display: flex;
  width: 290px;
  height: 387px;
  border-radius: 4px;
  @media (max-width: 640px) {
    width: 173px;
    height: 231px;
    border-radius: 4px;
}
`,P5=A.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  display: block;
`,L5=A.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 8px);
  width: auto;
  @media (max-width: 640px) {
    height: 100%;
}
`,z5=A.div`
  display: flex;
  height: auto;
  padding: 0;
  margin: 0;
  flex-direction: column;
  gap: 0px;
`,B5=A.h1`
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
`,$5=A.h2`
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
`,F5=A.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 84px;
  @media (max-width: 640px) {
    height: 38px;
}
`,K5=A.div`
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
`,jp=A.h3`
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
`,q5=A.div`
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
`,Ip=A.p`
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
`;function Eg({nameKor:n,nameEng:t,part:r,sns:a,eMail:o,imgUrl:u,imgAlt:f}){return v.jsxs(k5,{children:[v.jsx(U5,{children:v.jsx(P5,{src:u,alt:f})}),v.jsxs(L5,{children:[v.jsxs(z5,{children:[v.jsx(B5,{children:n}),v.jsx($5,{children:t})]}),v.jsxs(F5,{children:[v.jsxs(K5,{children:[v.jsx(jp,{children:"Part"}),v.jsx(jp,{children:"SNS"}),v.jsx(jp,{children:"E-mail"})]}),v.jsxs(q5,{children:[v.jsx(Ip,{children:r}),v.jsx(Ip,{children:a}),v.jsx(Ip,{children:o})]})]})]})]})}Eg.propTypes={nameKor:W.string.isRequired,nameEng:W.string.isRequired,part:W.string,sns:W.string,eMail:W.string,imgUrl:W.string.isRequired,imgAlt:W.string.isRequired};Eg.defaultProps={sns:"N/A",eMail:"N/A"};const H5=A.div`
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
`,G5=A.div`
  display: flex;
  flex-direction: column;
  width: 810px;
  height: auto;
  gap: 76px;
  @media (max-width: 640px) {
    width: 100%;
    gap: 21px;
}
`,Y5=A.h1`
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
`;function $x({designers:n}){return v.jsxs(H5,{children:[v.jsx(Y5,{children:"Designer"}),v.jsx(G5,{children:n.map((t,r)=>v.jsx(Eg,{nameKor:t.nameKor,nameEn:t.nameEn,part:t.role,sns:t.sns,eMail:t.eMail,imgUrl:t.imgUrl},r))})]})}const Q5=A.div`
    width: 100%; // 임시값
    margin-top: 50px;
@media (max-width: 640px) {
    margin-top: 20px;
}
`,X5=A.div`
    position: relative;
    width: 100%;
    max-width: 100vw;
    padding-top: 56.25%; // 16:9 비율
`,W5=A.iframe`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
`;function Z5({videoId:n}){return v.jsx(Q5,{children:v.jsx(X5,{children:v.jsx(W5,{src:"https://player.vimeo.com/video/1126266309?h=1f3e4f1f6e&title=0&byline=0&portrait=0",frameBorder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,title:"Embedded Vimeo"})})})}const J5="/TU2025gradulate/",tN=A.div`
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
`,eN=A.div`
    display: flex;
    width: 40px;
    height: 40px;
`;function nN({isOpen:n=!1,onClick:t}){const[r,a]=q.useState(!1);return q.useEffect(()=>{let o;return n?a(!1):(a(!1),o=setTimeout(()=>{a(!0)},500)),()=>clearTimeout(o)},[n]),v.jsx(tN,{$visible:!n,$active:r,onClick:()=>{typeof t=="function"&&t()},children:v.jsx(eN,{children:v.jsx("img",{src:`${J5}icons/infoOpenIcon.svg`,alt:"작품 정보 열기"})})})}const Fx=40;function Hc(n){if(!n)return n;const t="/TU2025gradulate/";if(/^https?:\/\//i.test(n))return n;const r=String(n).replace(/^\.\.\//,"").replace(/^\//,"");return t+r}const iN=A.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
  image-rendering: -webkit-optimize-contrast;
  @media (max-width: 640px) {
    min-width: 100vw;
}
`,Dp=n=>v.jsx(iN,{loading:"lazy",...n}),rN=A.div`
  display: flex;
  position: relative;
  background: #fff;
  width: 100%;
  @media (max-width: 640px) {
    flex-direction: column;
}
`,aN=A.div`
  padding-right: ${Fx}px;
  padding-left: ${n=>n.$isInfoOpen?0:Fx}px;
  flex: 1 1 auto;
  width: auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* transition: all 500ms ease; */
  @media (max-width: 640px) {
    padding: 0
}
`,sN=A.div`
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
`,Kx=A.div`
  display: flex;
  position: relative;
  width: 100%;
`,oN={A:"c0",E:"c1",H:"c2",I:"c3",L:"c4",M:"c5"};function lN(){const{pid:n}=GT(),t=(n||"").toUpperCase().match(/^([A-Z])(\d{3})$/),[r,a]=q.useState(!0),[o,u]=q.useState(!0),f=()=>{a(!1),setTimeout(()=>{u(!1)},500)},m=()=>{u(!0),setTimeout(()=>{a(!0)},0)};let p=null;if(t){const[,X,Q]=t,Z=oN[X]||null,ot=Math.max(0,parseInt(Q,10)-1);p=Gl.find(tt=>tt.projectNum===ot&&(!Z||tt.category===Z)),p||(p=Gl.find(tt=>tt.projectNum==ot))}if(!p)return v.jsx(Kx,{children:v.jsxs(PageContainer,{children:[v.jsx(gm,{titleKor:"작품 제목(한글)",titleEng:"Work Title (English)",context:"이곳은 작품 설명이 들어가는 영역입니다. 작품에 대한 상세한 설명이나 배경, 제작 과정 등을 기술할 수 있습니다. 이 텍스트는 예시로 작성된 내용이며, 실제 작품 설명으로 대체되어야 합니다.",isOpen:r,onClose:()=>a(!1),docId:0}),v.jsx(Dp,{src:"https://placehold.co/1530x4000",alt:"featured"}),v.jsx($x,{children:"  "})]})});const g=(p.members||[]).map(X=>{const Q=Um.find(Z=>Z.num===X);return Q?{nameKor:Q.nameKor,nameEng:Q.nameEng,role:Q.role||"Designer",sns:Q.sns||"-",eMail:Q.eMail||"",imgUrl:Hc(Q.imgUrl||"/김예준.jpg")}:null}).filter(Boolean),b={c0:"A",c1:"E",c2:"H",c3:"I",c4:"L",c5:"M"}[p.category]||"A",S=p.projectNum??p.num,j=String(S).padStart(3,"0"),U=`/projects/${S}`,$=Number(p.galleryCount||0),P=Array.from({length:$},(X,Q)=>Hc(`${U}/gallery/${Q}.jpg`));return q.useEffect(()=>{const X=p?.projectNum??p?.num;if(X==null)return;const Z=Fl(Zs,"works",String(X));(async()=>{try{await Ah(Z,{view:Rh(1)})}catch(ot){if(ot.code==="not-found"||/No document/i.test(String(ot)))try{(await Kl(Z)).exists()?await Ah(Z,{view:Rh(1)}):await M2(Z,{view:1},{merge:!0})}catch(tt){console.error("Firestore view fallback error:",tt)}else console.error("Firestore view error:",ot)}})()},[p?.projectNum,p?.num]),v.jsx(Kx,{children:v.jsxs(rN,{children:[v.jsx(nN,{isOpen:r,onClick:m}),v.jsx(sN,{$visible:o,children:v.jsx(gm,{titleKor:p.titleKor,titleEng:p.titleEng,context:p.description||"null",isOpen:r,onClose:f,src:Hc(`/projects/${S}/thumb.jpg`),docId:S})}),v.jsxs(aN,{$isInfoOpen:r,children:[P.length>0?P.map((X,Q)=>v.jsx(Dp,{src:X,alt:`project-${b}${j}-img-${Q+1}`},Q)):v.jsx(Dp,{src:Hc("/thumbnailExample.png"),alt:`project-${b}${j}-placeholder`}),v.jsx(Z5,{videoId:p.videoId}),v.jsx($x,{designers:g})]})]})})}var Np={exports:{}},Il={},Mp={exports:{}},Op={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qx;function uN(){return qx||(qx=1,(function(n){function t(J,ht){var yt=J.length;J.push(ht);t:for(;0<yt;){var Ct=yt-1>>>1,O=J[Ct];if(0<o(O,ht))J[Ct]=ht,J[yt]=O,yt=Ct;else break t}}function r(J){return J.length===0?null:J[0]}function a(J){if(J.length===0)return null;var ht=J[0],yt=J.pop();if(yt!==ht){J[0]=yt;t:for(var Ct=0,O=J.length,rt=O>>>1;Ct<rt;){var ut=2*(Ct+1)-1,ct=J[ut],gt=ut+1,jt=J[gt];if(0>o(ct,yt))gt<O&&0>o(jt,ct)?(J[Ct]=jt,J[gt]=yt,Ct=gt):(J[Ct]=ct,J[ut]=yt,Ct=ut);else if(gt<O&&0>o(jt,yt))J[Ct]=jt,J[gt]=yt,Ct=gt;else break t}}return ht}function o(J,ht){var yt=J.sortIndex-ht.sortIndex;return yt!==0?yt:J.id-ht.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;n.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();n.unstable_now=function(){return f.now()-m}}var p=[],g=[],_=1,b=null,S=3,j=!1,U=!1,$=!1,P=!1,X=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;function ot(J){for(var ht=r(g);ht!==null;){if(ht.callback===null)a(g);else if(ht.startTime<=J)a(g),ht.sortIndex=ht.expirationTime,t(p,ht);else break;ht=r(g)}}function tt(J){if($=!1,ot(J),!U)if(r(p)!==null)U=!0,ft||(ft=!0,z());else{var ht=r(g);ht!==null&&ne(tt,ht.startTime-J)}}var ft=!1,I=-1,R=5,C=-1;function M(){return P?!0:!(n.unstable_now()-C<R)}function V(){if(P=!1,ft){var J=n.unstable_now();C=J;var ht=!0;try{t:{U=!1,$&&($=!1,Q(I),I=-1),j=!0;var yt=S;try{e:{for(ot(J),b=r(p);b!==null&&!(b.expirationTime>J&&M());){var Ct=b.callback;if(typeof Ct=="function"){b.callback=null,S=b.priorityLevel;var O=Ct(b.expirationTime<=J);if(J=n.unstable_now(),typeof O=="function"){b.callback=O,ot(J),ht=!0;break e}b===r(p)&&a(p),ot(J)}else a(p);b=r(p)}if(b!==null)ht=!0;else{var rt=r(g);rt!==null&&ne(tt,rt.startTime-J),ht=!1}}break t}finally{b=null,S=yt,j=!1}ht=void 0}}finally{ht?z():ft=!1}}}var z;if(typeof Z=="function")z=function(){Z(V)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,ue=N.port2;N.port1.onmessage=V,z=function(){ue.postMessage(null)}}else z=function(){X(V,0)};function ne(J,ht){I=X(function(){J(n.unstable_now())},ht)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(J){J.callback=null},n.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<J?Math.floor(1e3/J):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_next=function(J){switch(S){case 1:case 2:case 3:var ht=3;break;default:ht=S}var yt=S;S=ht;try{return J()}finally{S=yt}},n.unstable_requestPaint=function(){P=!0},n.unstable_runWithPriority=function(J,ht){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var yt=S;S=J;try{return ht()}finally{S=yt}},n.unstable_scheduleCallback=function(J,ht,yt){var Ct=n.unstable_now();switch(typeof yt=="object"&&yt!==null?(yt=yt.delay,yt=typeof yt=="number"&&0<yt?Ct+yt:Ct):yt=Ct,J){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=yt+O,J={id:_++,callback:ht,priorityLevel:J,startTime:yt,expirationTime:O,sortIndex:-1},yt>Ct?(J.sortIndex=yt,t(g,J),r(p)===null&&J===r(g)&&($?(Q(I),I=-1):$=!0,ne(tt,yt-Ct))):(J.sortIndex=O,t(p,J),U||j||(U=!0,ft||(ft=!0,z()))),J},n.unstable_shouldYield=M,n.unstable_wrapCallback=function(J){var ht=S;return function(){var yt=S;S=ht;try{return J.apply(this,arguments)}finally{S=yt}}}})(Op)),Op}var Hx;function cN(){return Hx||(Hx=1,Mp.exports=uN()),Mp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gx;function hN(){if(Gx)return Il;Gx=1;var n=cN(),t=ym(),r=Kw();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(a(188))}function p(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,l=i;;){var h=s.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){s=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===s)return m(h),e;if(d===l)return m(h),i;d=d.sibling}throw Error(a(188))}if(s.return!==l.return)s=h,l=d;else{for(var E=!1,T=h.child;T;){if(T===s){E=!0,s=h,l=d;break}if(T===l){E=!0,l=h,s=d;break}T=T.sibling}if(!E){for(T=d.child;T;){if(T===s){E=!0,s=d,l=h;break}if(T===l){E=!0,l=d,s=h;break}T=T.sibling}if(!E)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function g(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=g(e),i!==null)return i;e=e.sibling}return null}var _=Object.assign,b=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),X=Symbol.for("react.provider"),Q=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),ot=Symbol.for("react.forward_ref"),tt=Symbol.for("react.suspense"),ft=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),M=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function z(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var N=Symbol.for("react.client.reference");function ue(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===N?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case U:return"Fragment";case P:return"Profiler";case $:return"StrictMode";case tt:return"Suspense";case ft:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case j:return"Portal";case Z:return(e.displayName||"Context")+".Provider";case Q:return(e._context.displayName||"Context")+".Consumer";case ot:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return i=e.displayName||null,i!==null?i:ue(e.type)||"Memo";case R:i=e._payload,e=e._init;try{return ue(e(i))}catch{}}return null}var ne=Array.isArray,J=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ht=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,yt={pending:!1,data:null,method:null,action:null},Ct=[],O=-1;function rt(e){return{current:e}}function ut(e){0>O||(e.current=Ct[O],Ct[O]=null,O--)}function ct(e,i){O++,Ct[O]=e.current,e.current=i}var gt=rt(null),jt=rt(null),xt=rt(null),ge=rt(null);function Lt(e,i){switch(ct(xt,i),ct(jt,e),ct(gt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?l1(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=l1(i),e=u1(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ut(gt),ct(gt,e)}function Ne(){ut(gt),ut(jt),ut(xt)}function Ii(e){e.memoizedState!==null&&ct(ge,e);var i=gt.current,s=u1(i,e.type);i!==s&&(ct(jt,e),ct(gt,s))}function qn(e){jt.current===e&&(ut(gt),ut(jt)),ge.current===e&&(ut(ge),bl._currentValue=yt)}var on=Object.prototype.hasOwnProperty,oa=n.unstable_scheduleCallback,ts=n.unstable_cancelCallback,nf=n.unstable_shouldYield,bo=n.unstable_requestPaint,dn=n.unstable_now,mu=n.unstable_getCurrentPriorityLevel,Me=n.unstable_ImmediatePriority,Le=n.unstable_UserBlockingPriority,Di=n.unstable_NormalPriority,rf=n.unstable_LowPriority,To=n.unstable_IdlePriority,af=n.log,la=n.unstable_setDisableYieldValue,lr=null,Je=null;function In(e){if(typeof af=="function"&&la(e),Je&&typeof Je.setStrictMode=="function")try{Je.setStrictMode(lr,e)}catch{}}var ln=Math.clz32?Math.clz32:yu,sf=Math.log,gu=Math.LN2;function yu(e){return e>>>=0,e===0?32:31-(sf(e)/gu|0)|0}var ai=256,ur=4194304;function Hn(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Dn(e,i,s){var l=e.pendingLanes;if(l===0)return 0;var h=0,d=e.suspendedLanes,E=e.pingedLanes;e=e.warmLanes;var T=l&134217727;return T!==0?(l=T&~d,l!==0?h=Hn(l):(E&=T,E!==0?h=Hn(E):s||(s=T&~e,s!==0&&(h=Hn(s))))):(T=l&~d,T!==0?h=Hn(T):E!==0?h=Hn(E):s||(s=l&~e,s!==0&&(h=Hn(s)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,s=i&-i,d>=s||d===32&&(s&4194048)!==0)?i:h}function cr(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function es(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wo(){var e=ai;return ai<<=1,(ai&4194048)===0&&(ai=256),e}function hr(){var e=ur;return ur<<=1,(ur&62914560)===0&&(ur=4194304),e}function ns(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function xe(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function vu(e,i,s,l,h,d){var E=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var T=e.entanglements,D=e.expirationTimes,K=e.hiddenUpdates;for(s=E&~s;0<s;){var et=31-ln(s),it=1<<et;T[et]=0,D[et]=-1;var H=K[et];if(H!==null)for(K[et]=null,et=0;et<H.length;et++){var G=H[et];G!==null&&(G.lane&=-536870913)}s&=~it}l!==0&&fr(e,l,0),d!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=d&~(E&~i))}function fr(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-ln(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|s&4194090}function dr(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var l=31-ln(s),h=1<<l;h&i|e[l]&i&&(e[l]|=i),s&=~h}}function So(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ao(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ni(){var e=ht.p;return e!==0?e:(e=window.event,e===void 0?32:C1(e.type))}function of(e,i){var s=ht.p;try{return ht.p=e,i()}finally{ht.p=s}}var si=Math.random().toString(36).slice(2),_e="__reactFiber$"+si,He="__reactProps$"+si,Mi="__reactContainer$"+si,ua="__reactEvents$"+si,ca="__reactListeners$"+si,lf="__reactHandles$"+si,Gn="__reactResources$"+si,pr="__reactMarker$"+si;function is(e){delete e[_e],delete e[He],delete e[ua],delete e[ca],delete e[lf]}function oi(e){var i=e[_e];if(i)return i;for(var s=e.parentNode;s;){if(i=s[Mi]||s[_e]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=d1(e);e!==null;){if(s=e[_e])return s;e=d1(e)}return i}e=s,s=e.parentNode}return null}function li(e){if(e=e[_e]||e[Mi]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function mr(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function gr(e){var i=e[Gn];return i||(i=e[Gn]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Ee(e){e[pr]=!0}var xu=new Set,ha={};function ui(e,i){ci(e,i),ci(e+"Capture",i)}function ci(e,i){for(ha[e]=i,e=0;e<i.length;e++)xu.add(i[e])}var fa=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),hi={},rs={};function uf(e){return on.call(rs,e)?!0:on.call(hi,e)?!1:fa.test(e)?rs[e]=!0:(hi[e]=!0,!1)}function da(e,i,s){if(uf(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function pa(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function Nn(e,i,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+l)}}var ma,as;function Oi(e){if(ma===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);ma=i&&i[1]||"",as=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ma+e+as}var ss=!1;function os(e,i){if(!e||ss)return"";ss=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var it=function(){throw Error()};if(Object.defineProperty(it.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(it,[])}catch(G){var H=G}Reflect.construct(e,[],it)}else{try{it.call()}catch(G){H=G}e.call(it.prototype)}}else{try{throw Error()}catch(G){H=G}(it=e())&&typeof it.catch=="function"&&it.catch(function(){})}}catch(G){if(G&&H&&typeof G.stack=="string")return[G.stack,H.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),E=d[0],T=d[1];if(E&&T){var D=E.split(`
`),K=T.split(`
`);for(h=l=0;l<D.length&&!D[l].includes("DetermineComponentFrameRoot");)l++;for(;h<K.length&&!K[h].includes("DetermineComponentFrameRoot");)h++;if(l===D.length||h===K.length)for(l=D.length-1,h=K.length-1;1<=l&&0<=h&&D[l]!==K[h];)h--;for(;1<=l&&0<=h;l--,h--)if(D[l]!==K[h]){if(l!==1||h!==1)do if(l--,h--,0>h||D[l]!==K[h]){var et=`
`+D[l].replace(" at new "," at ");return e.displayName&&et.includes("<anonymous>")&&(et=et.replace("<anonymous>",e.displayName)),et}while(1<=l&&0<=h);break}}}finally{ss=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?Oi(s):""}function cf(e){switch(e.tag){case 26:case 27:case 5:return Oi(e.type);case 16:return Oi("Lazy");case 13:return Oi("Suspense");case 19:return Oi("SuspenseList");case 0:case 15:return os(e.type,!1);case 11:return os(e.type.render,!1);case 1:return os(e.type,!0);case 31:return Oi("Activity");default:return""}}function Yn(e){try{var i="";do i+=cf(e),e=e.return;while(e);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function fe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yr(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ga(e){var i=yr(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),l=""+e[i];if(!e.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var h=s.get,d=s.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(E){l=""+E,d.call(this,E)}}),Object.defineProperty(e,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function vr(e){e._valueTracker||(e._valueTracker=ga(e))}function Wt(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return e&&(l=yr(e)?e.checked?"true":"false":e.value),e=l,e!==s?(i.setValue(e),!0):!1}function Vi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ya=/[\n"\\]/g;function ze(e){return e.replace(ya,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Ro(e,i,s,l,h,d,E,T){e.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.type=E:e.removeAttribute("type"),i!=null?E==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+fe(i)):e.value!==""+fe(i)&&(e.value=""+fe(i)):E!=="submit"&&E!=="reset"||e.removeAttribute("value"),i!=null?jo(e,E,fe(i)):s!=null?jo(e,E,fe(s)):l!=null&&e.removeAttribute("value"),h==null&&d!=null&&(e.defaultChecked=!!d),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+fe(T):e.removeAttribute("name")}function Co(e,i,s,l,h,d,E,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;s=s!=null?""+fe(s):"",i=i!=null?""+fe(i):s,T||i===e.value||(e.value=i),e.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=T?e.checked:!!l,e.defaultChecked=!!l,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(e.name=E)}function jo(e,i,s){i==="number"&&Vi(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function xr(e,i,s,l){if(e=e.options,i){i={};for(var h=0;h<s.length;h++)i["$"+s[h]]=!0;for(s=0;s<e.length;s++)h=i.hasOwnProperty("$"+e[s].value),e[s].selected!==h&&(e[s].selected=h),h&&l&&(e[s].defaultSelected=!0)}else{for(s=""+fe(s),i=null,h=0;h<e.length;h++){if(e[h].value===s){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function _u(e,i,s){if(i!=null&&(i=""+fe(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+fe(s):""}function Eu(e,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(ne(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=fe(i),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l)}function Mn(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var ki=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Io(e,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,s):typeof s!="number"||s===0||ki.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function Do(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&s[h]!==l&&Io(e,h,l)}else for(var d in i)i.hasOwnProperty(d)&&Io(e,d,i[d])}function ls(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bu=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Tu=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qn(e){return Tu.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var No=null;function Mo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _r=null,un=null;function wu(e){var i=li(e);if(i&&(e=i.stateNode)){var s=e[He]||null;t:switch(e=i.stateNode,i.type){case"input":if(Ro(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+ze(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==e&&l.form===e.form){var h=l[He]||null;if(!h)throw Error(a(90));Ro(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===e.form&&Wt(l)}break t;case"textarea":_u(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&xr(e,!!s.multiple,i,!1)}}}var va=!1;function xa(e,i,s){if(va)return e(i,s);va=!0;try{var l=e(i);return l}finally{if(va=!1,(_r!==null||un!==null)&&(dc(),_r&&(i=_r,e=un,un=_r=null,wu(i),e)))for(i=0;i<e.length;i++)wu(e[i])}}function Er(e,i){var s=e.stateNode;if(s===null)return null;var l=s[He]||null;if(l===null)return null;s=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ui=!1;if(cn)try{var br={};Object.defineProperty(br,"passive",{get:function(){Ui=!0}}),window.addEventListener("test",br,br),window.removeEventListener("test",br,br)}catch{Ui=!1}var On=null,ie=null,us=null;function Su(){if(us)return us;var e,i=ie,s=i.length,l,h="value"in On?On.value:On.textContent,d=h.length;for(e=0;e<s&&i[e]===h[e];e++);var E=s-e;for(l=1;l<=E&&i[s-l]===h[d-l];l++);return us=h.slice(e,1<l?1-l:void 0)}function _a(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Ea(){return!0}function Oo(){return!1}function Oe(e){function i(s,l,h,d,E){this._reactName=s,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=E,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(s=e[T],this[T]=s?s(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Ea:Oo,this.isPropagationStopped=Oo,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Ea)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Ea)},persist:function(){},isPersistent:Ea}),i}var tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ba=Oe(tn),Ta=_({},tn,{view:0,detail:0}),wa=Oe(Ta),cs,Sa,fi,Aa=_({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ds,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fi&&(fi&&e.type==="mousemove"?(cs=e.screenX-fi.screenX,Sa=e.screenY-fi.screenY):Sa=cs=0,fi=e),cs)},movementY:function(e){return"movementY"in e?e.movementY:Sa}}),Ra=Oe(Aa),hf=_({},Aa,{dataTransfer:0}),Au=Oe(hf),Ca=_({},Ta,{relatedTarget:0}),hs=Oe(Ca),Ru=_({},tn,{animationName:0,elapsedTime:0,pseudoElement:0}),Vo=Oe(Ru),ko=_({},tn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cu=Oe(ko),fs=_({},tn,{data:0}),Uo=Oe(fs),ju={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pi={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Iu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Du(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Iu[e])?!!i[e]:!1}function ds(){return Du}var Nu=_({},Ta,{key:function(e){if(e.key){var i=ju[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=_a(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Pi[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ds,charCode:function(e){return e.type==="keypress"?_a(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_a(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ps=Oe(Nu),hn=_({},Aa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Po=Oe(hn),Mu=_({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ds}),Tr=Oe(Mu),c=_({},tn,{propertyName:0,elapsedTime:0,pseudoElement:0}),y=Oe(c),x=_({},Aa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),w=Oe(x),F=_({},tn,{newState:0,oldState:0}),Y=Oe(F),lt=[9,13,27,32],At=cn&&"CompositionEvent"in window,ae=null;cn&&"documentMode"in document&&(ae=document.documentMode);var Yt=cn&&"TextEvent"in window&&!ae,be=cn&&(!At||ae&&8<ae&&11>=ae),_n=" ",di=!1;function Xn(e,i){switch(e){case"keyup":return lt.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wn(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zn=!1;function Lo(e,i){switch(e){case"compositionend":return Wn(i);case"keypress":return i.which!==32?null:(di=!0,_n);case"textInput":return e=i.data,e===_n&&di?null:e;default:return null}}function L2(e,i){if(Zn)return e==="compositionend"||!At&&Xn(e,i)?(e=Su(),us=ie=On=null,Zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return be&&i.locale!=="ko"?null:i.data;default:return null}}var z2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bg(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!z2[e.type]:i==="textarea"}function Tg(e,i,s,l){_r?un?un.push(l):un=[l]:_r=l,i=xc(i,"onChange"),0<i.length&&(s=new ba("onChange","change",null,s,l),e.push({event:s,listeners:i}))}var zo=null,Bo=null;function B2(e){i1(e,0)}function Ou(e){var i=mr(e);if(Wt(i))return e}function wg(e,i){if(e==="change")return i}var Sg=!1;if(cn){var ff;if(cn){var df="oninput"in document;if(!df){var Ag=document.createElement("div");Ag.setAttribute("oninput","return;"),df=typeof Ag.oninput=="function"}ff=df}else ff=!1;Sg=ff&&(!document.documentMode||9<document.documentMode)}function Rg(){zo&&(zo.detachEvent("onpropertychange",Cg),Bo=zo=null)}function Cg(e){if(e.propertyName==="value"&&Ou(Bo)){var i=[];Tg(i,Bo,e,Mo(e)),xa(B2,i)}}function $2(e,i,s){e==="focusin"?(Rg(),zo=i,Bo=s,zo.attachEvent("onpropertychange",Cg)):e==="focusout"&&Rg()}function F2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ou(Bo)}function K2(e,i){if(e==="click")return Ou(i)}function q2(e,i){if(e==="input"||e==="change")return Ou(i)}function H2(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var En=typeof Object.is=="function"?Object.is:H2;function $o(e,i){if(En(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var h=s[l];if(!on.call(i,h)||!En(e[h],i[h]))return!1}return!0}function jg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ig(e,i){var s=jg(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=i&&l>=i)return{node:s,offset:i-e};e=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=jg(s)}}function Dg(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Dg(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Ng(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Vi(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=Vi(e.document)}return i}function pf(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var G2=cn&&"documentMode"in document&&11>=document.documentMode,ms=null,mf=null,Fo=null,gf=!1;function Mg(e,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;gf||ms==null||ms!==Vi(l)||(l=ms,"selectionStart"in l&&pf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Fo&&$o(Fo,l)||(Fo=l,l=xc(mf,"onSelect"),0<l.length&&(i=new ba("onSelect","select",null,i,s),e.push({event:i,listeners:l}),i.target=ms)))}function ja(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var gs={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionrun:ja("Transition","TransitionRun"),transitionstart:ja("Transition","TransitionStart"),transitioncancel:ja("Transition","TransitionCancel"),transitionend:ja("Transition","TransitionEnd")},yf={},Og={};cn&&(Og=document.createElement("div").style,"AnimationEvent"in window||(delete gs.animationend.animation,delete gs.animationiteration.animation,delete gs.animationstart.animation),"TransitionEvent"in window||delete gs.transitionend.transition);function Ia(e){if(yf[e])return yf[e];if(!gs[e])return e;var i=gs[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in Og)return yf[e]=i[s];return e}var Vg=Ia("animationend"),kg=Ia("animationiteration"),Ug=Ia("animationstart"),Y2=Ia("transitionrun"),Q2=Ia("transitionstart"),X2=Ia("transitioncancel"),Pg=Ia("transitionend"),Lg=new Map,vf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vf.push("scrollEnd");function Jn(e,i){Lg.set(e,i),ui(i,[e])}var zg=new WeakMap;function Vn(e,i){if(typeof e=="object"&&e!==null){var s=zg.get(e);return s!==void 0?s:(i={value:e,source:i,stack:Yn(i)},zg.set(e,i),i)}return{value:e,source:i,stack:Yn(i)}}var kn=[],ys=0,xf=0;function Vu(){for(var e=ys,i=xf=ys=0;i<e;){var s=kn[i];kn[i++]=null;var l=kn[i];kn[i++]=null;var h=kn[i];kn[i++]=null;var d=kn[i];if(kn[i++]=null,l!==null&&h!==null){var E=l.pending;E===null?h.next=h:(h.next=E.next,E.next=h),l.pending=h}d!==0&&Bg(s,h,d)}}function ku(e,i,s,l){kn[ys++]=e,kn[ys++]=i,kn[ys++]=s,kn[ys++]=l,xf|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function _f(e,i,s,l){return ku(e,i,s,l),Uu(e)}function vs(e,i){return ku(e,null,null,i),Uu(e)}function Bg(e,i,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var h=!1,d=e.return;d!==null;)d.childLanes|=s,l=d.alternate,l!==null&&(l.childLanes|=s),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(h=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,h&&i!==null&&(h=31-ln(s),e=d.hiddenUpdates,l=e[h],l===null?e[h]=[i]:l.push(i),i.lane=s|536870912),d):null}function Uu(e){if(50<pl)throw pl=0,Ad=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var xs={};function W2(e,i,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(e,i,s,l){return new W2(e,i,s,l)}function Ef(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Li(e,i){var s=e.alternate;return s===null?(s=bn(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function $g(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Pu(e,i,s,l,h,d){var E=0;if(l=e,typeof e=="function")Ef(e)&&(E=1);else if(typeof e=="string")E=Jb(e,s,gt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=bn(31,s,i,h),e.elementType=C,e.lanes=d,e;case U:return Da(s.children,h,d,i);case $:E=8,h|=24;break;case P:return e=bn(12,s,i,h|2),e.elementType=P,e.lanes=d,e;case tt:return e=bn(13,s,i,h),e.elementType=tt,e.lanes=d,e;case ft:return e=bn(19,s,i,h),e.elementType=ft,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case X:case Z:E=10;break t;case Q:E=9;break t;case ot:E=11;break t;case I:E=14;break t;case R:E=16,l=null;break t}E=29,s=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=bn(E,s,i,h),i.elementType=e,i.type=l,i.lanes=d,i}function Da(e,i,s,l){return e=bn(7,e,l,i),e.lanes=s,e}function bf(e,i,s){return e=bn(6,e,null,i),e.lanes=s,e}function Tf(e,i,s){return i=bn(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var _s=[],Es=0,Lu=null,zu=0,Un=[],Pn=0,Na=null,zi=1,Bi="";function Ma(e,i){_s[Es++]=zu,_s[Es++]=Lu,Lu=e,zu=i}function Fg(e,i,s){Un[Pn++]=zi,Un[Pn++]=Bi,Un[Pn++]=Na,Na=e;var l=zi;e=Bi;var h=32-ln(l)-1;l&=~(1<<h),s+=1;var d=32-ln(i)+h;if(30<d){var E=h-h%5;d=(l&(1<<E)-1).toString(32),l>>=E,h-=E,zi=1<<32-ln(i)+h|s<<h|l,Bi=d+e}else zi=1<<d|s<<h|l,Bi=e}function wf(e){e.return!==null&&(Ma(e,1),Fg(e,1,0))}function Sf(e){for(;e===Lu;)Lu=_s[--Es],_s[Es]=null,zu=_s[--Es],_s[Es]=null;for(;e===Na;)Na=Un[--Pn],Un[Pn]=null,Bi=Un[--Pn],Un[Pn]=null,zi=Un[--Pn],Un[Pn]=null}var fn=null,ye=null,qt=!1,Oa=null,pi=!1,Af=Error(a(519));function Va(e){var i=Error(a(418,""));throw Ho(Vn(i,e)),Af}function Kg(e){var i=e.stateNode,s=e.type,l=e.memoizedProps;switch(i[_e]=e,i[He]=l,s){case"dialog":Vt("cancel",i),Vt("close",i);break;case"iframe":case"object":case"embed":Vt("load",i);break;case"video":case"audio":for(s=0;s<gl.length;s++)Vt(gl[s],i);break;case"source":Vt("error",i);break;case"img":case"image":case"link":Vt("error",i),Vt("load",i);break;case"details":Vt("toggle",i);break;case"input":Vt("invalid",i),Co(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),vr(i);break;case"select":Vt("invalid",i);break;case"textarea":Vt("invalid",i),Eu(i,l.value,l.defaultValue,l.children),vr(i)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||o1(i.textContent,s)?(l.popover!=null&&(Vt("beforetoggle",i),Vt("toggle",i)),l.onScroll!=null&&Vt("scroll",i),l.onScrollEnd!=null&&Vt("scrollend",i),l.onClick!=null&&(i.onclick=_c),i=!0):i=!1,i||Va(e)}function qg(e){for(fn=e.return;fn;)switch(fn.tag){case 5:case 13:pi=!1;return;case 27:case 3:pi=!0;return;default:fn=fn.return}}function Ko(e){if(e!==fn)return!1;if(!qt)return qg(e),qt=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||$d(e.type,e.memoizedProps)),s=!s),s&&ye&&Va(e),qg(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(i===0){ye=ei(e.nextSibling);break t}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;e=e.nextSibling}ye=null}}else i===27?(i=ye,Lr(e.type)?(e=Hd,Hd=null,ye=e):ye=i):ye=fn?ei(e.stateNode.nextSibling):null;return!0}function qo(){ye=fn=null,qt=!1}function Hg(){var e=Oa;return e!==null&&(gn===null?gn=e:gn.push.apply(gn,e),Oa=null),e}function Ho(e){Oa===null?Oa=[e]:Oa.push(e)}var Rf=rt(null),ka=null,$i=null;function wr(e,i,s){ct(Rf,i._currentValue),i._currentValue=s}function Fi(e){e._currentValue=Rf.current,ut(Rf)}function Cf(e,i,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===s)break;e=e.return}}function jf(e,i,s,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var d=h.dependencies;if(d!==null){var E=h.child;d=d.firstContext;t:for(;d!==null;){var T=d;d=h;for(var D=0;D<i.length;D++)if(T.context===i[D]){d.lanes|=s,T=d.alternate,T!==null&&(T.lanes|=s),Cf(d.return,s,e),l||(E=null);break t}d=T.next}}else if(h.tag===18){if(E=h.return,E===null)throw Error(a(341));E.lanes|=s,d=E.alternate,d!==null&&(d.lanes|=s),Cf(E,s,e),E=null}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===e){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}}function Go(e,i,s,l){e=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var E=h.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var T=h.type;En(h.pendingProps.value,E.value)||(e!==null?e.push(T):e=[T])}}else if(h===ge.current){if(E=h.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(bl):e=[bl])}h=h.return}e!==null&&jf(i,e,s,l),i.flags|=262144}function Bu(e){for(e=e.firstContext;e!==null;){if(!En(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ua(e){ka=e,$i=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function en(e){return Gg(ka,e)}function $u(e,i){return ka===null&&Ua(e),Gg(e,i)}function Gg(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},$i===null){if(e===null)throw Error(a(308));$i=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else $i=$i.next=i;return s}var Z2=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},J2=n.unstable_scheduleCallback,tb=n.unstable_NormalPriority,Ve={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function If(){return{controller:new Z2,data:new Map,refCount:0}}function Yo(e){e.refCount--,e.refCount===0&&J2(tb,function(){e.controller.abort()})}var Qo=null,Df=0,bs=0,Ts=null;function eb(e,i){if(Qo===null){var s=Qo=[];Df=0,bs=Md(),Ts={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Df++,i.then(Yg,Yg),i}function Yg(){if(--Df===0&&Qo!==null){Ts!==null&&(Ts.status="fulfilled");var e=Qo;Qo=null,bs=0,Ts=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function nb(e,i){var s=[],l={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<s.length;h++)(0,s[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),l}var Qg=J.S;J.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&eb(e,i),Qg!==null&&Qg(e,i)};var Pa=rt(null);function Nf(){var e=Pa.current;return e!==null?e:re.pooledCache}function Fu(e,i){i===null?ct(Pa,Pa.current):ct(Pa,i.pool)}function Xg(){var e=Nf();return e===null?null:{parent:Ve._currentValue,pool:e}}var Xo=Error(a(460)),Wg=Error(a(474)),Ku=Error(a(542)),Mf={then:function(){}};function Zg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function qu(){}function Jg(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(qu,qu),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,e0(e),e;default:if(typeof i.status=="string")i.then(qu,qu);else{if(e=re,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,e0(e),e}throw Wo=i,Xo}}var Wo=null;function t0(){if(Wo===null)throw Error(a(459));var e=Wo;return Wo=null,e}function e0(e){if(e===Xo||e===Ku)throw Error(a(483))}var Sr=!1;function Of(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ar(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Rr(e,i,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Qt&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Uu(e),Bg(e,null,s),i}return ku(e,l,i,s),Uu(e)}function Zo(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,dr(e,s)}}function kf(e,i){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var h=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var E={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?h=d=E:d=d.next=E,s=s.next}while(s!==null);d===null?h=d=i:d=d.next=i}else h=d=i;s={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var Uf=!1;function Jo(){if(Uf){var e=Ts;if(e!==null)throw e}}function tl(e,i,s,l){Uf=!1;var h=e.updateQueue;Sr=!1;var d=h.firstBaseUpdate,E=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var D=T,K=D.next;D.next=null,E===null?d=K:E.next=K,E=D;var et=e.alternate;et!==null&&(et=et.updateQueue,T=et.lastBaseUpdate,T!==E&&(T===null?et.firstBaseUpdate=K:T.next=K,et.lastBaseUpdate=D))}if(d!==null){var it=h.baseState;E=0,et=K=D=null,T=d;do{var H=T.lane&-536870913,G=H!==T.lane;if(G?(zt&H)===H:(l&H)===H){H!==0&&H===bs&&(Uf=!0),et!==null&&(et=et.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var wt=e,Et=T;H=i;var te=s;switch(Et.tag){case 1:if(wt=Et.payload,typeof wt=="function"){it=wt.call(te,it,H);break t}it=wt;break t;case 3:wt.flags=wt.flags&-65537|128;case 0:if(wt=Et.payload,H=typeof wt=="function"?wt.call(te,it,H):wt,H==null)break t;it=_({},it,H);break t;case 2:Sr=!0}}H=T.callback,H!==null&&(e.flags|=64,G&&(e.flags|=8192),G=h.callbacks,G===null?h.callbacks=[H]:G.push(H))}else G={lane:H,tag:T.tag,payload:T.payload,callback:T.callback,next:null},et===null?(K=et=G,D=it):et=et.next=G,E|=H;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;G=T,T=G.next,G.next=null,h.lastBaseUpdate=G,h.shared.pending=null}}while(!0);et===null&&(D=it),h.baseState=D,h.firstBaseUpdate=K,h.lastBaseUpdate=et,d===null&&(h.shared.lanes=0),Vr|=E,e.lanes=E,e.memoizedState=it}}function n0(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function i0(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)n0(s[e],i)}var ws=rt(null),Hu=rt(0);function r0(e,i){e=Xi,ct(Hu,e),ct(ws,i),Xi=e|i.baseLanes}function Pf(){ct(Hu,Xi),ct(ws,ws.current)}function Lf(){Xi=Hu.current,ut(ws),ut(Hu)}var Cr=0,Nt=null,Zt=null,Ae=null,Gu=!1,Ss=!1,La=!1,Yu=0,el=0,As=null,ib=0;function Te(){throw Error(a(321))}function zf(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!En(e[s],i[s]))return!1;return!0}function Bf(e,i,s,l,h,d){return Cr=d,Nt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,J.H=e===null||e.memoizedState===null?B0:$0,La=!1,d=s(l,h),La=!1,Ss&&(d=s0(i,s,l,h)),a0(e),d}function a0(e){J.H=tc;var i=Zt!==null&&Zt.next!==null;if(Cr=0,Ae=Zt=Nt=null,Gu=!1,el=0,As=null,i)throw Error(a(300));e===null||Be||(e=e.dependencies,e!==null&&Bu(e)&&(Be=!0))}function s0(e,i,s,l){Nt=e;var h=0;do{if(Ss&&(As=null),el=0,Ss=!1,25<=h)throw Error(a(301));if(h+=1,Ae=Zt=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}J.H=cb,d=i(s,l)}while(Ss);return d}function rb(){var e=J.H,i=e.useState()[0];return i=typeof i.then=="function"?nl(i):i,e=e.useState()[0],(Zt!==null?Zt.memoizedState:null)!==e&&(Nt.flags|=1024),i}function $f(){var e=Yu!==0;return Yu=0,e}function Ff(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function Kf(e){if(Gu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Gu=!1}Cr=0,Ae=Zt=Nt=null,Ss=!1,el=Yu=0,As=null}function pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?Nt.memoizedState=Ae=e:Ae=Ae.next=e,Ae}function Re(){if(Zt===null){var e=Nt.alternate;e=e!==null?e.memoizedState:null}else e=Zt.next;var i=Ae===null?Nt.memoizedState:Ae.next;if(i!==null)Ae=i,Zt=e;else{if(e===null)throw Nt.alternate===null?Error(a(467)):Error(a(310));Zt=e,e={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},Ae===null?Nt.memoizedState=Ae=e:Ae=Ae.next=e}return Ae}function qf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function nl(e){var i=el;return el+=1,As===null&&(As=[]),e=Jg(As,e,i),i=Nt,(Ae===null?i.memoizedState:Ae.next)===null&&(i=i.alternate,J.H=i===null||i.memoizedState===null?B0:$0),e}function Qu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return nl(e);if(e.$$typeof===Z)return en(e)}throw Error(a(438,String(e)))}function Hf(e){var i=null,s=Nt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=Nt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=qf(),Nt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),l=0;l<e;l++)s[l]=M;return i.index++,s}function Ki(e,i){return typeof i=="function"?i(e):i}function Xu(e){var i=Re();return Gf(i,Zt,e)}function Gf(e,i,s){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var h=e.baseQueue,d=l.pending;if(d!==null){if(h!==null){var E=h.next;h.next=d.next,d.next=E}i.baseQueue=h=d,l.pending=null}if(d=e.baseState,h===null)e.memoizedState=d;else{i=h.next;var T=E=null,D=null,K=i,et=!1;do{var it=K.lane&-536870913;if(it!==K.lane?(zt&it)===it:(Cr&it)===it){var H=K.revertLane;if(H===0)D!==null&&(D=D.next={lane:0,revertLane:0,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),it===bs&&(et=!0);else if((Cr&H)===H){K=K.next,H===bs&&(et=!0);continue}else it={lane:0,revertLane:K.revertLane,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},D===null?(T=D=it,E=d):D=D.next=it,Nt.lanes|=H,Vr|=H;it=K.action,La&&s(d,it),d=K.hasEagerState?K.eagerState:s(d,it)}else H={lane:it,revertLane:K.revertLane,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},D===null?(T=D=H,E=d):D=D.next=H,Nt.lanes|=it,Vr|=it;K=K.next}while(K!==null&&K!==i);if(D===null?E=d:D.next=T,!En(d,e.memoizedState)&&(Be=!0,et&&(s=Ts,s!==null)))throw s;e.memoizedState=d,e.baseState=E,e.baseQueue=D,l.lastRenderedState=d}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Yf(e){var i=Re(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var l=s.dispatch,h=s.pending,d=i.memoizedState;if(h!==null){s.pending=null;var E=h=h.next;do d=e(d,E.action),E=E.next;while(E!==h);En(d,i.memoizedState)||(Be=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),s.lastRenderedState=d}return[d,l]}function o0(e,i,s){var l=Nt,h=Re(),d=qt;if(d){if(s===void 0)throw Error(a(407));s=s()}else s=i();var E=!En((Zt||h).memoizedState,s);E&&(h.memoizedState=s,Be=!0),h=h.queue;var T=c0.bind(null,l,h,e);if(il(2048,8,T,[e]),h.getSnapshot!==i||E||Ae!==null&&Ae.memoizedState.tag&1){if(l.flags|=2048,Rs(9,Wu(),u0.bind(null,l,h,s,i),null),re===null)throw Error(a(349));d||(Cr&124)!==0||l0(l,i,s)}return s}function l0(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=Nt.updateQueue,i===null?(i=qf(),Nt.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function u0(e,i,s,l){i.value=s,i.getSnapshot=l,h0(i)&&f0(e)}function c0(e,i,s){return s(function(){h0(i)&&f0(e)})}function h0(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!En(e,s)}catch{return!0}}function f0(e){var i=vs(e,2);i!==null&&Rn(i,e,2)}function Qf(e){var i=pn();if(typeof e=="function"){var s=e;if(e=s(),La){In(!0);try{s()}finally{In(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:e},i}function d0(e,i,s,l){return e.baseState=s,Gf(e,Zt,typeof l=="function"?l:Ki)}function ab(e,i,s,l,h){if(Ju(e))throw Error(a(485));if(e=i.action,e!==null){var d={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){d.listeners.push(E)}};J.T!==null?s(!0):d.isTransition=!1,l(d),s=i.pending,s===null?(d.next=i.pending=d,p0(i,d)):(d.next=s.next,i.pending=s.next=d)}}function p0(e,i){var s=i.action,l=i.payload,h=e.state;if(i.isTransition){var d=J.T,E={};J.T=E;try{var T=s(h,l),D=J.S;D!==null&&D(E,T),m0(e,i,T)}catch(K){Xf(e,i,K)}finally{J.T=d}}else try{d=s(h,l),m0(e,i,d)}catch(K){Xf(e,i,K)}}function m0(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){g0(e,i,l)},function(l){return Xf(e,i,l)}):g0(e,i,s)}function g0(e,i,s){i.status="fulfilled",i.value=s,y0(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,p0(e,s)))}function Xf(e,i,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,y0(i),i=i.next;while(i!==l)}e.action=null}function y0(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function v0(e,i){return i}function x0(e,i){if(qt){var s=re.formState;if(s!==null){t:{var l=Nt;if(qt){if(ye){e:{for(var h=ye,d=pi;h.nodeType!==8;){if(!d){h=null;break e}if(h=ei(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){ye=ei(h.nextSibling),l=h.data==="F!";break t}}Va(l)}l=!1}l&&(i=s[0])}}return s=pn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:v0,lastRenderedState:i},s.queue=l,s=P0.bind(null,Nt,l),l.dispatch=s,l=Qf(!1),d=ed.bind(null,Nt,!1,l.queue),l=pn(),h={state:i,dispatch:null,action:e,pending:null},l.queue=h,s=ab.bind(null,Nt,h,d,s),h.dispatch=s,l.memoizedState=e,[i,s,!1]}function _0(e){var i=Re();return E0(i,Zt,e)}function E0(e,i,s){if(i=Gf(e,i,v0)[0],e=Xu(Ki)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=nl(i)}catch(E){throw E===Xo?Ku:E}else l=i;i=Re();var h=i.queue,d=h.dispatch;return s!==i.memoizedState&&(Nt.flags|=2048,Rs(9,Wu(),sb.bind(null,h,s),null)),[l,d,e]}function sb(e,i){e.action=i}function b0(e){var i=Re(),s=Zt;if(s!==null)return E0(i,s,e);Re(),i=i.memoizedState,s=Re();var l=s.queue.dispatch;return s.memoizedState=e,[i,l,!1]}function Rs(e,i,s,l){return e={tag:e,create:s,deps:l,inst:i,next:null},i=Nt.updateQueue,i===null&&(i=qf(),Nt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,i.lastEffect=e),e}function Wu(){return{destroy:void 0,resource:void 0}}function T0(){return Re().memoizedState}function Zu(e,i,s,l){var h=pn();l=l===void 0?null:l,Nt.flags|=e,h.memoizedState=Rs(1|i,Wu(),s,l)}function il(e,i,s,l){var h=Re();l=l===void 0?null:l;var d=h.memoizedState.inst;Zt!==null&&l!==null&&zf(l,Zt.memoizedState.deps)?h.memoizedState=Rs(i,d,s,l):(Nt.flags|=e,h.memoizedState=Rs(1|i,d,s,l))}function w0(e,i){Zu(8390656,8,e,i)}function S0(e,i){il(2048,8,e,i)}function A0(e,i){return il(4,2,e,i)}function R0(e,i){return il(4,4,e,i)}function C0(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function j0(e,i,s){s=s!=null?s.concat([e]):null,il(4,4,C0.bind(null,i,e),s)}function Wf(){}function I0(e,i){var s=Re();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&zf(i,l[1])?l[0]:(s.memoizedState=[e,i],e)}function D0(e,i){var s=Re();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&zf(i,l[1]))return l[0];if(l=e(),La){In(!0);try{e()}finally{In(!1)}}return s.memoizedState=[l,i],l}function Zf(e,i,s){return s===void 0||(Cr&1073741824)!==0?e.memoizedState=i:(e.memoizedState=s,e=Oy(),Nt.lanes|=e,Vr|=e,s)}function N0(e,i,s,l){return En(s,i)?s:ws.current!==null?(e=Zf(e,s,l),En(e,i)||(Be=!0),e):(Cr&42)===0?(Be=!0,e.memoizedState=s):(e=Oy(),Nt.lanes|=e,Vr|=e,i)}function M0(e,i,s,l,h){var d=ht.p;ht.p=d!==0&&8>d?d:8;var E=J.T,T={};J.T=T,ed(e,!1,i,s);try{var D=h(),K=J.S;if(K!==null&&K(T,D),D!==null&&typeof D=="object"&&typeof D.then=="function"){var et=nb(D,l);rl(e,i,et,An(e))}else rl(e,i,l,An(e))}catch(it){rl(e,i,{then:function(){},status:"rejected",reason:it},An())}finally{ht.p=d,J.T=E}}function ob(){}function Jf(e,i,s,l){if(e.tag!==5)throw Error(a(476));var h=O0(e).queue;M0(e,h,i,yt,s===null?ob:function(){return V0(e),s(l)})}function O0(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:yt,baseState:yt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:yt},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function V0(e){var i=O0(e).next.queue;rl(e,i,{},An())}function td(){return en(bl)}function k0(){return Re().memoizedState}function U0(){return Re().memoizedState}function lb(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=An();e=Ar(s);var l=Rr(i,e,s);l!==null&&(Rn(l,i,s),Zo(l,i,s)),i={cache:If()},e.payload=i;return}i=i.return}}function ub(e,i,s){var l=An();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},Ju(e)?L0(i,s):(s=_f(e,i,s,l),s!==null&&(Rn(s,e,l),z0(s,i,l)))}function P0(e,i,s){var l=An();rl(e,i,s,l)}function rl(e,i,s,l){var h={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(Ju(e))L0(i,h);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var E=i.lastRenderedState,T=d(E,s);if(h.hasEagerState=!0,h.eagerState=T,En(T,E))return ku(e,i,h,0),re===null&&Vu(),!1}catch{}finally{}if(s=_f(e,i,h,l),s!==null)return Rn(s,e,l),z0(s,i,l),!0}return!1}function ed(e,i,s,l){if(l={lane:2,revertLane:Md(),action:l,hasEagerState:!1,eagerState:null,next:null},Ju(e)){if(i)throw Error(a(479))}else i=_f(e,s,l,2),i!==null&&Rn(i,e,2)}function Ju(e){var i=e.alternate;return e===Nt||i!==null&&i===Nt}function L0(e,i){Ss=Gu=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function z0(e,i,s){if((s&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,dr(e,s)}}var tc={readContext:en,use:Qu,useCallback:Te,useContext:Te,useEffect:Te,useImperativeHandle:Te,useLayoutEffect:Te,useInsertionEffect:Te,useMemo:Te,useReducer:Te,useRef:Te,useState:Te,useDebugValue:Te,useDeferredValue:Te,useTransition:Te,useSyncExternalStore:Te,useId:Te,useHostTransitionStatus:Te,useFormState:Te,useActionState:Te,useOptimistic:Te,useMemoCache:Te,useCacheRefresh:Te},B0={readContext:en,use:Qu,useCallback:function(e,i){return pn().memoizedState=[e,i===void 0?null:i],e},useContext:en,useEffect:w0,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,Zu(4194308,4,C0.bind(null,i,e),s)},useLayoutEffect:function(e,i){return Zu(4194308,4,e,i)},useInsertionEffect:function(e,i){Zu(4,2,e,i)},useMemo:function(e,i){var s=pn();i=i===void 0?null:i;var l=e();if(La){In(!0);try{e()}finally{In(!1)}}return s.memoizedState=[l,i],l},useReducer:function(e,i,s){var l=pn();if(s!==void 0){var h=s(i);if(La){In(!0);try{s(i)}finally{In(!1)}}}else h=i;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=ub.bind(null,Nt,e),[l.memoizedState,e]},useRef:function(e){var i=pn();return e={current:e},i.memoizedState=e},useState:function(e){e=Qf(e);var i=e.queue,s=P0.bind(null,Nt,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:Wf,useDeferredValue:function(e,i){var s=pn();return Zf(s,e,i)},useTransition:function(){var e=Qf(!1);return e=M0.bind(null,Nt,e.queue,!0,!1),pn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var l=Nt,h=pn();if(qt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),re===null)throw Error(a(349));(zt&124)!==0||l0(l,i,s)}h.memoizedState=s;var d={value:s,getSnapshot:i};return h.queue=d,w0(c0.bind(null,l,d,e),[e]),l.flags|=2048,Rs(9,Wu(),u0.bind(null,l,d,s,i),null),s},useId:function(){var e=pn(),i=re.identifierPrefix;if(qt){var s=Bi,l=zi;s=(l&~(1<<32-ln(l)-1)).toString(32)+s,i="«"+i+"R"+s,s=Yu++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=ib++,i="«"+i+"r"+s.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:td,useFormState:x0,useActionState:x0,useOptimistic:function(e){var i=pn();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=ed.bind(null,Nt,!0,s),s.dispatch=i,[e,i]},useMemoCache:Hf,useCacheRefresh:function(){return pn().memoizedState=lb.bind(null,Nt)}},$0={readContext:en,use:Qu,useCallback:I0,useContext:en,useEffect:S0,useImperativeHandle:j0,useInsertionEffect:A0,useLayoutEffect:R0,useMemo:D0,useReducer:Xu,useRef:T0,useState:function(){return Xu(Ki)},useDebugValue:Wf,useDeferredValue:function(e,i){var s=Re();return N0(s,Zt.memoizedState,e,i)},useTransition:function(){var e=Xu(Ki)[0],i=Re().memoizedState;return[typeof e=="boolean"?e:nl(e),i]},useSyncExternalStore:o0,useId:k0,useHostTransitionStatus:td,useFormState:_0,useActionState:_0,useOptimistic:function(e,i){var s=Re();return d0(s,Zt,e,i)},useMemoCache:Hf,useCacheRefresh:U0},cb={readContext:en,use:Qu,useCallback:I0,useContext:en,useEffect:S0,useImperativeHandle:j0,useInsertionEffect:A0,useLayoutEffect:R0,useMemo:D0,useReducer:Yf,useRef:T0,useState:function(){return Yf(Ki)},useDebugValue:Wf,useDeferredValue:function(e,i){var s=Re();return Zt===null?Zf(s,e,i):N0(s,Zt.memoizedState,e,i)},useTransition:function(){var e=Yf(Ki)[0],i=Re().memoizedState;return[typeof e=="boolean"?e:nl(e),i]},useSyncExternalStore:o0,useId:k0,useHostTransitionStatus:td,useFormState:b0,useActionState:b0,useOptimistic:function(e,i){var s=Re();return Zt!==null?d0(s,Zt,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:Hf,useCacheRefresh:U0},Cs=null,al=0;function ec(e){var i=al;return al+=1,Cs===null&&(Cs=[]),Jg(Cs,e,i)}function sl(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function nc(e,i){throw i.$$typeof===b?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function F0(e){var i=e._init;return i(e._payload)}function K0(e){function i(L,k){if(e){var B=L.deletions;B===null?(L.deletions=[k],L.flags|=16):B.push(k)}}function s(L,k){if(!e)return null;for(;k!==null;)i(L,k),k=k.sibling;return null}function l(L){for(var k=new Map;L!==null;)L.key!==null?k.set(L.key,L):k.set(L.index,L),L=L.sibling;return k}function h(L,k){return L=Li(L,k),L.index=0,L.sibling=null,L}function d(L,k,B){return L.index=B,e?(B=L.alternate,B!==null?(B=B.index,B<k?(L.flags|=67108866,k):B):(L.flags|=67108866,k)):(L.flags|=1048576,k)}function E(L){return e&&L.alternate===null&&(L.flags|=67108866),L}function T(L,k,B,nt){return k===null||k.tag!==6?(k=bf(B,L.mode,nt),k.return=L,k):(k=h(k,B),k.return=L,k)}function D(L,k,B,nt){var pt=B.type;return pt===U?et(L,k,B.props.children,nt,B.key):k!==null&&(k.elementType===pt||typeof pt=="object"&&pt!==null&&pt.$$typeof===R&&F0(pt)===k.type)?(k=h(k,B.props),sl(k,B),k.return=L,k):(k=Pu(B.type,B.key,B.props,null,L.mode,nt),sl(k,B),k.return=L,k)}function K(L,k,B,nt){return k===null||k.tag!==4||k.stateNode.containerInfo!==B.containerInfo||k.stateNode.implementation!==B.implementation?(k=Tf(B,L.mode,nt),k.return=L,k):(k=h(k,B.children||[]),k.return=L,k)}function et(L,k,B,nt,pt){return k===null||k.tag!==7?(k=Da(B,L.mode,nt,pt),k.return=L,k):(k=h(k,B),k.return=L,k)}function it(L,k,B){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=bf(""+k,L.mode,B),k.return=L,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case S:return B=Pu(k.type,k.key,k.props,null,L.mode,B),sl(B,k),B.return=L,B;case j:return k=Tf(k,L.mode,B),k.return=L,k;case R:var nt=k._init;return k=nt(k._payload),it(L,k,B)}if(ne(k)||z(k))return k=Da(k,L.mode,B,null),k.return=L,k;if(typeof k.then=="function")return it(L,ec(k),B);if(k.$$typeof===Z)return it(L,$u(L,k),B);nc(L,k)}return null}function H(L,k,B,nt){var pt=k!==null?k.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return pt!==null?null:T(L,k,""+B,nt);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case S:return B.key===pt?D(L,k,B,nt):null;case j:return B.key===pt?K(L,k,B,nt):null;case R:return pt=B._init,B=pt(B._payload),H(L,k,B,nt)}if(ne(B)||z(B))return pt!==null?null:et(L,k,B,nt,null);if(typeof B.then=="function")return H(L,k,ec(B),nt);if(B.$$typeof===Z)return H(L,k,$u(L,B),nt);nc(L,B)}return null}function G(L,k,B,nt,pt){if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return L=L.get(B)||null,T(k,L,""+nt,pt);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case S:return L=L.get(nt.key===null?B:nt.key)||null,D(k,L,nt,pt);case j:return L=L.get(nt.key===null?B:nt.key)||null,K(k,L,nt,pt);case R:var Mt=nt._init;return nt=Mt(nt._payload),G(L,k,B,nt,pt)}if(ne(nt)||z(nt))return L=L.get(B)||null,et(k,L,nt,pt,null);if(typeof nt.then=="function")return G(L,k,B,ec(nt),pt);if(nt.$$typeof===Z)return G(L,k,B,$u(k,nt),pt);nc(k,nt)}return null}function wt(L,k,B,nt){for(var pt=null,Mt=null,vt=k,bt=k=0,Fe=null;vt!==null&&bt<B.length;bt++){vt.index>bt?(Fe=vt,vt=null):Fe=vt.sibling;var Ft=H(L,vt,B[bt],nt);if(Ft===null){vt===null&&(vt=Fe);break}e&&vt&&Ft.alternate===null&&i(L,vt),k=d(Ft,k,bt),Mt===null?pt=Ft:Mt.sibling=Ft,Mt=Ft,vt=Fe}if(bt===B.length)return s(L,vt),qt&&Ma(L,bt),pt;if(vt===null){for(;bt<B.length;bt++)vt=it(L,B[bt],nt),vt!==null&&(k=d(vt,k,bt),Mt===null?pt=vt:Mt.sibling=vt,Mt=vt);return qt&&Ma(L,bt),pt}for(vt=l(vt);bt<B.length;bt++)Fe=G(vt,L,bt,B[bt],nt),Fe!==null&&(e&&Fe.alternate!==null&&vt.delete(Fe.key===null?bt:Fe.key),k=d(Fe,k,bt),Mt===null?pt=Fe:Mt.sibling=Fe,Mt=Fe);return e&&vt.forEach(function(Kr){return i(L,Kr)}),qt&&Ma(L,bt),pt}function Et(L,k,B,nt){if(B==null)throw Error(a(151));for(var pt=null,Mt=null,vt=k,bt=k=0,Fe=null,Ft=B.next();vt!==null&&!Ft.done;bt++,Ft=B.next()){vt.index>bt?(Fe=vt,vt=null):Fe=vt.sibling;var Kr=H(L,vt,Ft.value,nt);if(Kr===null){vt===null&&(vt=Fe);break}e&&vt&&Kr.alternate===null&&i(L,vt),k=d(Kr,k,bt),Mt===null?pt=Kr:Mt.sibling=Kr,Mt=Kr,vt=Fe}if(Ft.done)return s(L,vt),qt&&Ma(L,bt),pt;if(vt===null){for(;!Ft.done;bt++,Ft=B.next())Ft=it(L,Ft.value,nt),Ft!==null&&(k=d(Ft,k,bt),Mt===null?pt=Ft:Mt.sibling=Ft,Mt=Ft);return qt&&Ma(L,bt),pt}for(vt=l(vt);!Ft.done;bt++,Ft=B.next())Ft=G(vt,L,bt,Ft.value,nt),Ft!==null&&(e&&Ft.alternate!==null&&vt.delete(Ft.key===null?bt:Ft.key),k=d(Ft,k,bt),Mt===null?pt=Ft:Mt.sibling=Ft,Mt=Ft);return e&&vt.forEach(function(hT){return i(L,hT)}),qt&&Ma(L,bt),pt}function te(L,k,B,nt){if(typeof B=="object"&&B!==null&&B.type===U&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case S:t:{for(var pt=B.key;k!==null;){if(k.key===pt){if(pt=B.type,pt===U){if(k.tag===7){s(L,k.sibling),nt=h(k,B.props.children),nt.return=L,L=nt;break t}}else if(k.elementType===pt||typeof pt=="object"&&pt!==null&&pt.$$typeof===R&&F0(pt)===k.type){s(L,k.sibling),nt=h(k,B.props),sl(nt,B),nt.return=L,L=nt;break t}s(L,k);break}else i(L,k);k=k.sibling}B.type===U?(nt=Da(B.props.children,L.mode,nt,B.key),nt.return=L,L=nt):(nt=Pu(B.type,B.key,B.props,null,L.mode,nt),sl(nt,B),nt.return=L,L=nt)}return E(L);case j:t:{for(pt=B.key;k!==null;){if(k.key===pt)if(k.tag===4&&k.stateNode.containerInfo===B.containerInfo&&k.stateNode.implementation===B.implementation){s(L,k.sibling),nt=h(k,B.children||[]),nt.return=L,L=nt;break t}else{s(L,k);break}else i(L,k);k=k.sibling}nt=Tf(B,L.mode,nt),nt.return=L,L=nt}return E(L);case R:return pt=B._init,B=pt(B._payload),te(L,k,B,nt)}if(ne(B))return wt(L,k,B,nt);if(z(B)){if(pt=z(B),typeof pt!="function")throw Error(a(150));return B=pt.call(B),Et(L,k,B,nt)}if(typeof B.then=="function")return te(L,k,ec(B),nt);if(B.$$typeof===Z)return te(L,k,$u(L,B),nt);nc(L,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,k!==null&&k.tag===6?(s(L,k.sibling),nt=h(k,B),nt.return=L,L=nt):(s(L,k),nt=bf(B,L.mode,nt),nt.return=L,L=nt),E(L)):s(L,k)}return function(L,k,B,nt){try{al=0;var pt=te(L,k,B,nt);return Cs=null,pt}catch(vt){if(vt===Xo||vt===Ku)throw vt;var Mt=bn(29,vt,null,L.mode);return Mt.lanes=nt,Mt.return=L,Mt}finally{}}}var js=K0(!0),q0=K0(!1),Ln=rt(null),mi=null;function jr(e){var i=e.alternate;ct(ke,ke.current&1),ct(Ln,e),mi===null&&(i===null||ws.current!==null||i.memoizedState!==null)&&(mi=e)}function H0(e){if(e.tag===22){if(ct(ke,ke.current),ct(Ln,e),mi===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(mi=e)}}else Ir()}function Ir(){ct(ke,ke.current),ct(Ln,Ln.current)}function qi(e){ut(Ln),mi===e&&(mi=null),ut(ke)}var ke=rt(0);function ic(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||qd(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function nd(e,i,s,l){i=e.memoizedState,s=s(l,i),s=s==null?i:_({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var id={enqueueSetState:function(e,i,s){e=e._reactInternals;var l=An(),h=Ar(l);h.payload=i,s!=null&&(h.callback=s),i=Rr(e,h,l),i!==null&&(Rn(i,e,l),Zo(i,e,l))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var l=An(),h=Ar(l);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=Rr(e,h,l),i!==null&&(Rn(i,e,l),Zo(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=An(),l=Ar(s);l.tag=2,i!=null&&(l.callback=i),i=Rr(e,l,s),i!==null&&(Rn(i,e,s),Zo(i,e,s))}};function G0(e,i,s,l,h,d,E){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,E):i.prototype&&i.prototype.isPureReactComponent?!$o(s,l)||!$o(h,d):!0}function Y0(e,i,s,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==e&&id.enqueueReplaceState(i,i.state,null)}function za(e,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(e=e.defaultProps){s===i&&(s=_({},s));for(var h in e)s[h]===void 0&&(s[h]=e[h])}return s}var rc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Q0(e){rc(e)}function X0(e){console.error(e)}function W0(e){rc(e)}function ac(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Z0(e,i,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function rd(e,i,s){return s=Ar(s),s.tag=3,s.payload={element:null},s.callback=function(){ac(e,i)},s}function J0(e){return e=Ar(e),e.tag=3,e}function ty(e,i,s,l){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;e.payload=function(){return h(d)},e.callback=function(){Z0(i,s,l)}}var E=s.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(e.callback=function(){Z0(i,s,l),typeof h!="function"&&(kr===null?kr=new Set([this]):kr.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function hb(e,i,s,l,h){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&Go(i,s,h,!0),s=Ln.current,s!==null){switch(s.tag){case 13:return mi===null?Cd():s.alternate===null&&ve===0&&(ve=3),s.flags&=-257,s.flags|=65536,s.lanes=h,l===Mf?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Id(e,l,h)),!1;case 22:return s.flags|=65536,l===Mf?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Id(e,l,h)),!1}throw Error(a(435,s.tag))}return Id(e,l,h),Cd(),!1}if(qt)return i=Ln.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==Af&&(e=Error(a(422),{cause:l}),Ho(Vn(e,s)))):(l!==Af&&(i=Error(a(423),{cause:l}),Ho(Vn(i,s))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=Vn(l,s),h=rd(e.stateNode,l,h),kf(e,h),ve!==4&&(ve=2)),!1;var d=Error(a(520),{cause:l});if(d=Vn(d,s),dl===null?dl=[d]:dl.push(d),ve!==4&&(ve=2),i===null)return!0;l=Vn(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=h&-h,s.lanes|=e,e=rd(s.stateNode,l,e),kf(s,e),!1;case 1:if(i=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(kr===null||!kr.has(d))))return s.flags|=65536,h&=-h,s.lanes|=h,h=J0(h),ty(h,e,s,l),kf(s,h),!1}s=s.return}while(s!==null);return!1}var ey=Error(a(461)),Be=!1;function Ge(e,i,s,l){i.child=e===null?q0(i,null,s,l):js(i,e.child,s,l)}function ny(e,i,s,l,h){s=s.render;var d=i.ref;if("ref"in l){var E={};for(var T in l)T!=="ref"&&(E[T]=l[T])}else E=l;return Ua(i),l=Bf(e,i,s,E,d,h),T=$f(),e!==null&&!Be?(Ff(e,i,h),Hi(e,i,h)):(qt&&T&&wf(i),i.flags|=1,Ge(e,i,l,h),i.child)}function iy(e,i,s,l,h){if(e===null){var d=s.type;return typeof d=="function"&&!Ef(d)&&d.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=d,ry(e,i,d,l,h)):(e=Pu(s.type,null,l,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!fd(e,h)){var E=d.memoizedProps;if(s=s.compare,s=s!==null?s:$o,s(E,l)&&e.ref===i.ref)return Hi(e,i,h)}return i.flags|=1,e=Li(d,l),e.ref=i.ref,e.return=i,i.child=e}function ry(e,i,s,l,h){if(e!==null){var d=e.memoizedProps;if($o(d,l)&&e.ref===i.ref)if(Be=!1,i.pendingProps=l=d,fd(e,h))(e.flags&131072)!==0&&(Be=!0);else return i.lanes=e.lanes,Hi(e,i,h)}return ad(e,i,s,l,h)}function ay(e,i,s){var l=i.pendingProps,h=l.children,d=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|s:s,e!==null){for(h=i.child=e.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return sy(e,i,l,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Fu(i,d!==null?d.cachePool:null),d!==null?r0(i,d):Pf(),H0(i);else return i.lanes=i.childLanes=536870912,sy(e,i,d!==null?d.baseLanes|s:s,s)}else d!==null?(Fu(i,d.cachePool),r0(i,d),Ir(),i.memoizedState=null):(e!==null&&Fu(i,null),Pf(),Ir());return Ge(e,i,h,s),i.child}function sy(e,i,s,l){var h=Nf();return h=h===null?null:{parent:Ve._currentValue,pool:h},i.memoizedState={baseLanes:s,cachePool:h},e!==null&&Fu(i,null),Pf(),H0(i),e!==null&&Go(e,i,l,!0),null}function sc(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function ad(e,i,s,l,h){return Ua(i),s=Bf(e,i,s,l,void 0,h),l=$f(),e!==null&&!Be?(Ff(e,i,h),Hi(e,i,h)):(qt&&l&&wf(i),i.flags|=1,Ge(e,i,s,h),i.child)}function oy(e,i,s,l,h,d){return Ua(i),i.updateQueue=null,s=s0(i,l,s,h),a0(e),l=$f(),e!==null&&!Be?(Ff(e,i,d),Hi(e,i,d)):(qt&&l&&wf(i),i.flags|=1,Ge(e,i,s,d),i.child)}function ly(e,i,s,l,h){if(Ua(i),i.stateNode===null){var d=xs,E=s.contextType;typeof E=="object"&&E!==null&&(d=en(E)),d=new s(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=id,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Of(i),E=s.contextType,d.context=typeof E=="object"&&E!==null?en(E):xs,d.state=i.memoizedState,E=s.getDerivedStateFromProps,typeof E=="function"&&(nd(i,s,E,l),d.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(E=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),E!==d.state&&id.enqueueReplaceState(d,d.state,null),tl(i,l,d,h),Jo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var T=i.memoizedProps,D=za(s,T);d.props=D;var K=d.context,et=s.contextType;E=xs,typeof et=="object"&&et!==null&&(E=en(et));var it=s.getDerivedStateFromProps;et=typeof it=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,et||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||K!==E)&&Y0(i,d,l,E),Sr=!1;var H=i.memoizedState;d.state=H,tl(i,l,d,h),Jo(),K=i.memoizedState,T||H!==K||Sr?(typeof it=="function"&&(nd(i,s,it,l),K=i.memoizedState),(D=Sr||G0(i,s,D,l,H,K,E))?(et||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=K),d.props=l,d.state=K,d.context=E,l=D):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Vf(e,i),E=i.memoizedProps,et=za(s,E),d.props=et,it=i.pendingProps,H=d.context,K=s.contextType,D=xs,typeof K=="object"&&K!==null&&(D=en(K)),T=s.getDerivedStateFromProps,(K=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E!==it||H!==D)&&Y0(i,d,l,D),Sr=!1,H=i.memoizedState,d.state=H,tl(i,l,d,h),Jo();var G=i.memoizedState;E!==it||H!==G||Sr||e!==null&&e.dependencies!==null&&Bu(e.dependencies)?(typeof T=="function"&&(nd(i,s,T,l),G=i.memoizedState),(et=Sr||G0(i,s,et,l,H,G,D)||e!==null&&e.dependencies!==null&&Bu(e.dependencies))?(K||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,G,D),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,G,D)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||E===e.memoizedProps&&H===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&H===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=G),d.props=l,d.state=G,d.context=D,l=et):(typeof d.componentDidUpdate!="function"||E===e.memoizedProps&&H===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&H===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,sc(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=js(i,e.child,null,h),i.child=js(i,null,s,h)):Ge(e,i,s,h),i.memoizedState=d.state,e=i.child):e=Hi(e,i,h),e}function uy(e,i,s,l){return qo(),i.flags|=256,Ge(e,i,s,l),i.child}var sd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function od(e){return{baseLanes:e,cachePool:Xg()}}function ld(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=zn),e}function cy(e,i,s){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,E;if((E=d)||(E=e!==null&&e.memoizedState===null?!1:(ke.current&2)!==0),E&&(h=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,e===null){if(qt){if(h?jr(i):Ir(),qt){var T=ye,D;if(D=T){t:{for(D=T,T=pi;D.nodeType!==8;){if(!T){T=null;break t}if(D=ei(D.nextSibling),D===null){T=null;break t}}T=D}T!==null?(i.memoizedState={dehydrated:T,treeContext:Na!==null?{id:zi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},D=bn(18,null,null,0),D.stateNode=T,D.return=i,i.child=D,fn=i,ye=null,D=!0):D=!1}D||Va(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return qd(T)?i.lanes=32:i.lanes=536870912,null;qi(i)}return T=l.children,l=l.fallback,h?(Ir(),h=i.mode,T=oc({mode:"hidden",children:T},h),l=Da(l,h,s,null),T.return=i,l.return=i,T.sibling=l,i.child=T,h=i.child,h.memoizedState=od(s),h.childLanes=ld(e,E,s),i.memoizedState=sd,l):(jr(i),ud(i,T))}if(D=e.memoizedState,D!==null&&(T=D.dehydrated,T!==null)){if(d)i.flags&256?(jr(i),i.flags&=-257,i=cd(e,i,s)):i.memoizedState!==null?(Ir(),i.child=e.child,i.flags|=128,i=null):(Ir(),h=l.fallback,T=i.mode,l=oc({mode:"visible",children:l.children},T),h=Da(h,T,s,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,js(i,e.child,null,s),l=i.child,l.memoizedState=od(s),l.childLanes=ld(e,E,s),i.memoizedState=sd,i=h);else if(jr(i),qd(T)){if(E=T.nextSibling&&T.nextSibling.dataset,E)var K=E.dgst;E=K,l=Error(a(419)),l.stack="",l.digest=E,Ho({value:l,source:null,stack:null}),i=cd(e,i,s)}else if(Be||Go(e,i,s,!1),E=(s&e.childLanes)!==0,Be||E){if(E=re,E!==null&&(l=s&-s,l=(l&42)!==0?1:So(l),l=(l&(E.suspendedLanes|s))!==0?0:l,l!==0&&l!==D.retryLane))throw D.retryLane=l,vs(e,l),Rn(E,e,l),ey;T.data==="$?"||Cd(),i=cd(e,i,s)}else T.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=D.treeContext,ye=ei(T.nextSibling),fn=i,qt=!0,Oa=null,pi=!1,e!==null&&(Un[Pn++]=zi,Un[Pn++]=Bi,Un[Pn++]=Na,zi=e.id,Bi=e.overflow,Na=i),i=ud(i,l.children),i.flags|=4096);return i}return h?(Ir(),h=l.fallback,T=i.mode,D=e.child,K=D.sibling,l=Li(D,{mode:"hidden",children:l.children}),l.subtreeFlags=D.subtreeFlags&65011712,K!==null?h=Li(K,h):(h=Da(h,T,s,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,T=e.child.memoizedState,T===null?T=od(s):(D=T.cachePool,D!==null?(K=Ve._currentValue,D=D.parent!==K?{parent:K,pool:K}:D):D=Xg(),T={baseLanes:T.baseLanes|s,cachePool:D}),h.memoizedState=T,h.childLanes=ld(e,E,s),i.memoizedState=sd,l):(jr(i),s=e.child,e=s.sibling,s=Li(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,e!==null&&(E=i.deletions,E===null?(i.deletions=[e],i.flags|=16):E.push(e)),i.child=s,i.memoizedState=null,s)}function ud(e,i){return i=oc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function oc(e,i){return e=bn(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function cd(e,i,s){return js(i,e.child,null,s),e=ud(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function hy(e,i,s){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),Cf(e.return,i,s)}function hd(e,i,s,l,h){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=s,d.tailMode=h)}function fy(e,i,s){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if(Ge(e,i,l.children,s),l=ke.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hy(e,s,i);else if(e.tag===19)hy(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(ct(ke,l),h){case"forwards":for(s=i.child,h=null;s!==null;)e=s.alternate,e!==null&&ic(e)===null&&(h=s),s=s.sibling;s=h,s===null?(h=i.child,i.child=null):(h=s.sibling,s.sibling=null),hd(i,!1,h,s,d);break;case"backwards":for(s=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&ic(e)===null){i.child=h;break}e=h.sibling,h.sibling=s,s=h,h=e}hd(i,!0,s,null,d);break;case"together":hd(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Hi(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),Vr|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(Go(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=Li(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=Li(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function fd(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Bu(e)))}function fb(e,i,s){switch(i.tag){case 3:Lt(i,i.stateNode.containerInfo),wr(i,Ve,e.memoizedState.cache),qo();break;case 27:case 5:Ii(i);break;case 4:Lt(i,i.stateNode.containerInfo);break;case 10:wr(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(jr(i),i.flags|=128,null):(s&i.child.childLanes)!==0?cy(e,i,s):(jr(i),e=Hi(e,i,s),e!==null?e.sibling:null);jr(i);break;case 19:var h=(e.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(Go(e,i,s,!1),l=(s&i.childLanes)!==0),h){if(l)return fy(e,i,s);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),ct(ke,ke.current),l)break;return null;case 22:case 23:return i.lanes=0,ay(e,i,s);case 24:wr(i,Ve,e.memoizedState.cache)}return Hi(e,i,s)}function dy(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)Be=!0;else{if(!fd(e,s)&&(i.flags&128)===0)return Be=!1,fb(e,i,s);Be=(e.flags&131072)!==0}else Be=!1,qt&&(i.flags&1048576)!==0&&Fg(i,zu,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")Ef(l)?(e=za(l,e),i.tag=1,i=ly(null,i,l,e,s)):(i.tag=0,i=ad(null,i,l,e,s));else{if(l!=null){if(h=l.$$typeof,h===ot){i.tag=11,i=ny(null,i,l,e,s);break t}else if(h===I){i.tag=14,i=iy(null,i,l,e,s);break t}}throw i=ue(l)||l,Error(a(306,i,""))}}return i;case 0:return ad(e,i,i.type,i.pendingProps,s);case 1:return l=i.type,h=za(l,i.pendingProps),ly(e,i,l,h,s);case 3:t:{if(Lt(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var d=i.memoizedState;h=d.element,Vf(e,i),tl(i,l,null,s);var E=i.memoizedState;if(l=E.cache,wr(i,Ve,l),l!==d.cache&&jf(i,[Ve],s,!0),Jo(),l=E.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=uy(e,i,l,s);break t}else if(l!==h){h=Vn(Error(a(424)),i),Ho(h),i=uy(e,i,l,s);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ye=ei(e.firstChild),fn=i,qt=!0,Oa=null,pi=!0,s=q0(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(qo(),l===h){i=Hi(e,i,s);break t}Ge(e,i,l,s)}i=i.child}return i;case 26:return sc(e,i),e===null?(s=y1(i.type,null,i.pendingProps,null))?i.memoizedState=s:qt||(s=i.type,e=i.pendingProps,l=Ec(xt.current).createElement(s),l[_e]=i,l[He]=e,Qe(l,s,e),Ee(l),i.stateNode=l):i.memoizedState=y1(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Ii(i),e===null&&qt&&(l=i.stateNode=p1(i.type,i.pendingProps,xt.current),fn=i,pi=!0,h=ye,Lr(i.type)?(Hd=h,ye=ei(l.firstChild)):ye=h),Ge(e,i,i.pendingProps.children,s),sc(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&qt&&((h=l=ye)&&(l=zb(l,i.type,i.pendingProps,pi),l!==null?(i.stateNode=l,fn=i,ye=ei(l.firstChild),pi=!1,h=!0):h=!1),h||Va(i)),Ii(i),h=i.type,d=i.pendingProps,E=e!==null?e.memoizedProps:null,l=d.children,$d(h,d)?l=null:E!==null&&$d(h,E)&&(i.flags|=32),i.memoizedState!==null&&(h=Bf(e,i,rb,null,null,s),bl._currentValue=h),sc(e,i),Ge(e,i,l,s),i.child;case 6:return e===null&&qt&&((e=s=ye)&&(s=Bb(s,i.pendingProps,pi),s!==null?(i.stateNode=s,fn=i,ye=null,e=!0):e=!1),e||Va(i)),null;case 13:return cy(e,i,s);case 4:return Lt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=js(i,null,l,s):Ge(e,i,l,s),i.child;case 11:return ny(e,i,i.type,i.pendingProps,s);case 7:return Ge(e,i,i.pendingProps,s),i.child;case 8:return Ge(e,i,i.pendingProps.children,s),i.child;case 12:return Ge(e,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,wr(i,i.type,l.value),Ge(e,i,l.children,s),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Ua(i),h=en(h),l=l(h),i.flags|=1,Ge(e,i,l,s),i.child;case 14:return iy(e,i,i.type,i.pendingProps,s);case 15:return ry(e,i,i.type,i.pendingProps,s);case 19:return fy(e,i,s);case 31:return l=i.pendingProps,s=i.mode,l={mode:l.mode,children:l.children},e===null?(s=oc(l,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=Li(e.child,l),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return ay(e,i,s);case 24:return Ua(i),l=en(Ve),e===null?(h=Nf(),h===null&&(h=re,d=If(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=s),h=d),i.memoizedState={parent:l,cache:h},Of(i),wr(i,Ve,h)):((e.lanes&s)!==0&&(Vf(e,i),tl(i,null,null,s),Jo()),h=e.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),wr(i,Ve,l)):(l=d.cache,wr(i,Ve,l),l!==h.cache&&jf(i,[Ve],s,!0))),Ge(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Gi(e){e.flags|=4}function py(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!b1(i)){if(i=Ln.current,i!==null&&((zt&4194048)===zt?mi!==null:(zt&62914560)!==zt&&(zt&536870912)===0||i!==mi))throw Wo=Mf,Wg;e.flags|=8192}}function lc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?hr():536870912,e.lanes|=i,Ms|=i)}function ol(e,i){if(!qt)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function de(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(i)for(var h=e.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=s,i}function db(e,i,s){var l=i.pendingProps;switch(Sf(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(i),null;case 1:return de(i),null;case 3:return s=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Fi(Ve),Ne(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Ko(i)?Gi(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Hg())),de(i),null;case 26:return s=i.memoizedState,e===null?(Gi(i),s!==null?(de(i),py(i,s)):(de(i),i.flags&=-16777217)):s?s!==e.memoizedState?(Gi(i),de(i),py(i,s)):(de(i),i.flags&=-16777217):(e.memoizedProps!==l&&Gi(i),de(i),i.flags&=-16777217),null;case 27:qn(i),s=xt.current;var h=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Gi(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return de(i),null}e=gt.current,Ko(i)?Kg(i):(e=p1(h,l,s),i.stateNode=e,Gi(i))}return de(i),null;case 5:if(qn(i),s=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Gi(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return de(i),null}if(e=gt.current,Ko(i))Kg(i);else{switch(h=Ec(xt.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?h.createElement(s,{is:l.is}):h.createElement(s)}}e[_e]=i,e[He]=l;t:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break t;for(;h.sibling===null;){if(h.return===null||h.return===i)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=e;t:switch(Qe(e,s,l),s){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Gi(i)}}return de(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&Gi(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=xt.current,Ko(i)){if(e=i.stateNode,s=i.memoizedProps,l=null,h=fn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[_e]=i,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||o1(e.nodeValue,s)),e||Va(i)}else e=Ec(e).createTextNode(l),e[_e]=i,i.stateNode=e}return de(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Ko(i),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[_e]=i}else qo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;de(i),h=!1}else h=Hg(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(qi(i),i):(qi(i),null)}if(qi(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=l!==null,e=e!==null&&e.memoizedState!==null,s){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return s!==e&&s&&(i.child.flags|=8192),lc(i,i.updateQueue),de(i),null;case 4:return Ne(),e===null&&Ud(i.stateNode.containerInfo),de(i),null;case 10:return Fi(i.type),de(i),null;case 19:if(ut(ke),h=i.memoizedState,h===null)return de(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)ol(h,!1);else{if(ve!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=ic(e),d!==null){for(i.flags|=128,ol(h,!1),e=d.updateQueue,i.updateQueue=e,lc(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)$g(s,e),s=s.sibling;return ct(ke,ke.current&1|2),i.child}e=e.sibling}h.tail!==null&&dn()>hc&&(i.flags|=128,l=!0,ol(h,!1),i.lanes=4194304)}else{if(!l)if(e=ic(d),e!==null){if(i.flags|=128,l=!0,e=e.updateQueue,i.updateQueue=e,lc(i,e),ol(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!qt)return de(i),null}else 2*dn()-h.renderingStartTime>hc&&s!==536870912&&(i.flags|=128,l=!0,ol(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(e=h.last,e!==null?e.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=dn(),i.sibling=null,e=ke.current,ct(ke,l?e&1|2:e&1),i):(de(i),null);case 22:case 23:return qi(i),Lf(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(de(i),i.subtreeFlags&6&&(i.flags|=8192)):de(i),s=i.updateQueue,s!==null&&lc(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),e!==null&&ut(Pa),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Fi(Ve),de(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function pb(e,i){switch(Sf(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Fi(Ve),Ne(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return qn(i),null;case 13:if(qi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));qo()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return ut(ke),null;case 4:return Ne(),null;case 10:return Fi(i.type),null;case 22:case 23:return qi(i),Lf(),e!==null&&ut(Pa),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Fi(Ve),null;case 25:return null;default:return null}}function my(e,i){switch(Sf(i),i.tag){case 3:Fi(Ve),Ne();break;case 26:case 27:case 5:qn(i);break;case 4:Ne();break;case 13:qi(i);break;case 19:ut(ke);break;case 10:Fi(i.type);break;case 22:case 23:qi(i),Lf(),e!==null&&ut(Pa);break;case 24:Fi(Ve)}}function ll(e,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var h=l.next;s=h;do{if((s.tag&e)===e){l=void 0;var d=s.create,E=s.inst;l=d(),E.destroy=l}s=s.next}while(s!==h)}}catch(T){ee(i,i.return,T)}}function Dr(e,i,s){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&e)===e){var E=l.inst,T=E.destroy;if(T!==void 0){E.destroy=void 0,h=i;var D=s,K=T;try{K()}catch(et){ee(h,D,et)}}}l=l.next}while(l!==d)}}catch(et){ee(i,i.return,et)}}function gy(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{i0(i,s)}catch(l){ee(e,e.return,l)}}}function yy(e,i,s){s.props=za(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){ee(e,i,l)}}function ul(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(h){ee(e,i,h)}}function gi(e,i){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(h){ee(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){ee(e,i,h)}else s.current=null}function vy(e){var i=e.type,s=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(h){ee(e,e.return,h)}}function dd(e,i,s){try{var l=e.stateNode;Vb(l,e.type,s,i),l[He]=i}catch(h){ee(e,e.return,h)}}function xy(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Lr(e.type)||e.tag===4}function pd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||xy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Lr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function md(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=_c));else if(l!==4&&(l===27&&Lr(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(md(e,i,s),e=e.sibling;e!==null;)md(e,i,s),e=e.sibling}function uc(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(l!==4&&(l===27&&Lr(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(uc(e,i,s),e=e.sibling;e!==null;)uc(e,i,s),e=e.sibling}function _y(e){var i=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Qe(i,l,s),i[_e]=e,i[He]=s}catch(d){ee(e,e.return,d)}}var Yi=!1,we=!1,gd=!1,Ey=typeof WeakSet=="function"?WeakSet:Set,$e=null;function mb(e,i){if(e=e.containerInfo,zd=Rc,e=Ng(e),pf(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break t}var E=0,T=-1,D=-1,K=0,et=0,it=e,H=null;e:for(;;){for(var G;it!==s||h!==0&&it.nodeType!==3||(T=E+h),it!==d||l!==0&&it.nodeType!==3||(D=E+l),it.nodeType===3&&(E+=it.nodeValue.length),(G=it.firstChild)!==null;)H=it,it=G;for(;;){if(it===e)break e;if(H===s&&++K===h&&(T=E),H===d&&++et===l&&(D=E),(G=it.nextSibling)!==null)break;it=H,H=it.parentNode}it=G}s=T===-1||D===-1?null:{start:T,end:D}}else s=null}s=s||{start:0,end:0}}else s=null;for(Bd={focusedElem:e,selectionRange:s},Rc=!1,$e=i;$e!==null;)if(i=$e,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,$e=e;else for(;$e!==null;){switch(i=$e,d=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,s=i,h=d.memoizedProps,d=d.memoizedState,l=s.stateNode;try{var wt=za(s.type,h,s.elementType===s.type);e=l.getSnapshotBeforeUpdate(wt,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(Et){ee(s,s.return,Et)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)Kd(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Kd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,$e=e;break}$e=i.return}}function by(e,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Nr(e,s),l&4&&ll(5,s);break;case 1:if(Nr(e,s),l&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(E){ee(s,s.return,E)}else{var h=za(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(E){ee(s,s.return,E)}}l&64&&gy(s),l&512&&ul(s,s.return);break;case 3:if(Nr(e,s),l&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{i0(e,i)}catch(E){ee(s,s.return,E)}}break;case 27:i===null&&l&4&&_y(s);case 26:case 5:Nr(e,s),i===null&&l&4&&vy(s),l&512&&ul(s,s.return);break;case 12:Nr(e,s);break;case 13:Nr(e,s),l&4&&Sy(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=wb.bind(null,s),$b(e,s))));break;case 22:if(l=s.memoizedState!==null||Yi,!l){i=i!==null&&i.memoizedState!==null||we,h=Yi;var d=we;Yi=l,(we=i)&&!d?Mr(e,s,(s.subtreeFlags&8772)!==0):Nr(e,s),Yi=h,we=d}break;case 30:break;default:Nr(e,s)}}function Ty(e){var i=e.alternate;i!==null&&(e.alternate=null,Ty(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&is(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ce=null,mn=!1;function Qi(e,i,s){for(s=s.child;s!==null;)wy(e,i,s),s=s.sibling}function wy(e,i,s){if(Je&&typeof Je.onCommitFiberUnmount=="function")try{Je.onCommitFiberUnmount(lr,s)}catch{}switch(s.tag){case 26:we||gi(s,i),Qi(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:we||gi(s,i);var l=ce,h=mn;Lr(s.type)&&(ce=s.stateNode,mn=!1),Qi(e,i,s),vl(s.stateNode),ce=l,mn=h;break;case 5:we||gi(s,i);case 6:if(l=ce,h=mn,ce=null,Qi(e,i,s),ce=l,mn=h,ce!==null)if(mn)try{(ce.nodeType===9?ce.body:ce.nodeName==="HTML"?ce.ownerDocument.body:ce).removeChild(s.stateNode)}catch(d){ee(s,i,d)}else try{ce.removeChild(s.stateNode)}catch(d){ee(s,i,d)}break;case 18:ce!==null&&(mn?(e=ce,f1(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Al(e)):f1(ce,s.stateNode));break;case 4:l=ce,h=mn,ce=s.stateNode.containerInfo,mn=!0,Qi(e,i,s),ce=l,mn=h;break;case 0:case 11:case 14:case 15:we||Dr(2,s,i),we||Dr(4,s,i),Qi(e,i,s);break;case 1:we||(gi(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&yy(s,i,l)),Qi(e,i,s);break;case 21:Qi(e,i,s);break;case 22:we=(l=we)||s.memoizedState!==null,Qi(e,i,s),we=l;break;default:Qi(e,i,s)}}function Sy(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Al(e)}catch(s){ee(i,i.return,s)}}function gb(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Ey),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Ey),i;default:throw Error(a(435,e.tag))}}function yd(e,i){var s=gb(e);i.forEach(function(l){var h=Sb.bind(null,e,l);s.has(l)||(s.add(l),l.then(h,h))})}function Tn(e,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var h=s[l],d=e,E=i,T=E;t:for(;T!==null;){switch(T.tag){case 27:if(Lr(T.type)){ce=T.stateNode,mn=!1;break t}break;case 5:ce=T.stateNode,mn=!1;break t;case 3:case 4:ce=T.stateNode.containerInfo,mn=!0;break t}T=T.return}if(ce===null)throw Error(a(160));wy(d,E,h),ce=null,mn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Ay(i,e),i=i.sibling}var ti=null;function Ay(e,i){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Tn(i,e),wn(e),l&4&&(Dr(3,e,e.return),ll(3,e),Dr(5,e,e.return));break;case 1:Tn(i,e),wn(e),l&512&&(we||s===null||gi(s,s.return)),l&64&&Yi&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var h=ti;if(Tn(i,e),wn(e),l&512&&(we||s===null||gi(s,s.return)),l&4){var d=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){t:{l=e.type,s=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[pr]||d[_e]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),Qe(d,l,s),d[_e]=e,Ee(d),l=d;break t;case"link":var E=_1("link","href",h).get(l+(s.href||""));if(E){for(var T=0;T<E.length;T++)if(d=E[T],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){E.splice(T,1);break e}}d=h.createElement(l),Qe(d,l,s),h.head.appendChild(d);break;case"meta":if(E=_1("meta","content",h).get(l+(s.content||""))){for(T=0;T<E.length;T++)if(d=E[T],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){E.splice(T,1);break e}}d=h.createElement(l),Qe(d,l,s),h.head.appendChild(d);break;default:throw Error(a(468,l))}d[_e]=e,Ee(d),l=d}e.stateNode=l}else E1(h,e.type,e.stateNode);else e.stateNode=x1(h,l,e.memoizedProps);else d!==l?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,l===null?E1(h,e.type,e.stateNode):x1(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&dd(e,e.memoizedProps,s.memoizedProps)}break;case 27:Tn(i,e),wn(e),l&512&&(we||s===null||gi(s,s.return)),s!==null&&l&4&&dd(e,e.memoizedProps,s.memoizedProps);break;case 5:if(Tn(i,e),wn(e),l&512&&(we||s===null||gi(s,s.return)),e.flags&32){h=e.stateNode;try{Mn(h,"")}catch(G){ee(e,e.return,G)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,dd(e,h,s!==null?s.memoizedProps:h)),l&1024&&(gd=!0);break;case 6:if(Tn(i,e),wn(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(G){ee(e,e.return,G)}}break;case 3:if(wc=null,h=ti,ti=bc(i.containerInfo),Tn(i,e),ti=h,wn(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Al(i.containerInfo)}catch(G){ee(e,e.return,G)}gd&&(gd=!1,Ry(e));break;case 4:l=ti,ti=bc(e.stateNode.containerInfo),Tn(i,e),wn(e),ti=l;break;case 12:Tn(i,e),wn(e);break;case 13:Tn(i,e),wn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Td=dn()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,yd(e,l)));break;case 22:h=e.memoizedState!==null;var D=s!==null&&s.memoizedState!==null,K=Yi,et=we;if(Yi=K||h,we=et||D,Tn(i,e),we=et,Yi=K,wn(e),l&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(s===null||D||Yi||we||Ba(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){D=s=i;try{if(d=D.stateNode,h)E=d.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{T=D.stateNode;var it=D.memoizedProps.style,H=it!=null&&it.hasOwnProperty("display")?it.display:null;T.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch(G){ee(D,D.return,G)}}}else if(i.tag===6){if(s===null){D=i;try{D.stateNode.nodeValue=h?"":D.memoizedProps}catch(G){ee(D,D.return,G)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,yd(e,s))));break;case 19:Tn(i,e),wn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,yd(e,l)));break;case 30:break;case 21:break;default:Tn(i,e),wn(e)}}function wn(e){var i=e.flags;if(i&2){try{for(var s,l=e.return;l!==null;){if(xy(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var h=s.stateNode,d=pd(e);uc(e,d,h);break;case 5:var E=s.stateNode;s.flags&32&&(Mn(E,""),s.flags&=-33);var T=pd(e);uc(e,T,E);break;case 3:case 4:var D=s.stateNode.containerInfo,K=pd(e);md(e,K,D);break;default:throw Error(a(161))}}catch(et){ee(e,e.return,et)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Ry(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Ry(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Nr(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)by(e,i.alternate,i),i=i.sibling}function Ba(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Dr(4,i,i.return),Ba(i);break;case 1:gi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&yy(i,i.return,s),Ba(i);break;case 27:vl(i.stateNode);case 26:case 5:gi(i,i.return),Ba(i);break;case 22:i.memoizedState===null&&Ba(i);break;case 30:Ba(i);break;default:Ba(i)}e=e.sibling}}function Mr(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=e,d=i,E=d.flags;switch(d.tag){case 0:case 11:case 15:Mr(h,d,s),ll(4,d);break;case 1:if(Mr(h,d,s),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(K){ee(l,l.return,K)}if(l=d,h=l.updateQueue,h!==null){var T=l.stateNode;try{var D=h.shared.hiddenCallbacks;if(D!==null)for(h.shared.hiddenCallbacks=null,h=0;h<D.length;h++)n0(D[h],T)}catch(K){ee(l,l.return,K)}}s&&E&64&&gy(d),ul(d,d.return);break;case 27:_y(d);case 26:case 5:Mr(h,d,s),s&&l===null&&E&4&&vy(d),ul(d,d.return);break;case 12:Mr(h,d,s);break;case 13:Mr(h,d,s),s&&E&4&&Sy(h,d);break;case 22:d.memoizedState===null&&Mr(h,d,s),ul(d,d.return);break;case 30:break;default:Mr(h,d,s)}i=i.sibling}}function vd(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&Yo(s))}function xd(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Yo(e))}function yi(e,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Cy(e,i,s,l),i=i.sibling}function Cy(e,i,s,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:yi(e,i,s,l),h&2048&&ll(9,i);break;case 1:yi(e,i,s,l);break;case 3:yi(e,i,s,l),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Yo(e)));break;case 12:if(h&2048){yi(e,i,s,l),e=i.stateNode;try{var d=i.memoizedProps,E=d.id,T=d.onPostCommit;typeof T=="function"&&T(E,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(D){ee(i,i.return,D)}}else yi(e,i,s,l);break;case 13:yi(e,i,s,l);break;case 23:break;case 22:d=i.stateNode,E=i.alternate,i.memoizedState!==null?d._visibility&2?yi(e,i,s,l):cl(e,i):d._visibility&2?yi(e,i,s,l):(d._visibility|=2,Is(e,i,s,l,(i.subtreeFlags&10256)!==0)),h&2048&&vd(E,i);break;case 24:yi(e,i,s,l),h&2048&&xd(i.alternate,i);break;default:yi(e,i,s,l)}}function Is(e,i,s,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=e,E=i,T=s,D=l,K=E.flags;switch(E.tag){case 0:case 11:case 15:Is(d,E,T,D,h),ll(8,E);break;case 23:break;case 22:var et=E.stateNode;E.memoizedState!==null?et._visibility&2?Is(d,E,T,D,h):cl(d,E):(et._visibility|=2,Is(d,E,T,D,h)),h&&K&2048&&vd(E.alternate,E);break;case 24:Is(d,E,T,D,h),h&&K&2048&&xd(E.alternate,E);break;default:Is(d,E,T,D,h)}i=i.sibling}}function cl(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,l=i,h=l.flags;switch(l.tag){case 22:cl(s,l),h&2048&&vd(l.alternate,l);break;case 24:cl(s,l),h&2048&&xd(l.alternate,l);break;default:cl(s,l)}i=i.sibling}}var hl=8192;function Ds(e){if(e.subtreeFlags&hl)for(e=e.child;e!==null;)jy(e),e=e.sibling}function jy(e){switch(e.tag){case 26:Ds(e),e.flags&hl&&e.memoizedState!==null&&eT(ti,e.memoizedState,e.memoizedProps);break;case 5:Ds(e);break;case 3:case 4:var i=ti;ti=bc(e.stateNode.containerInfo),Ds(e),ti=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=hl,hl=16777216,Ds(e),hl=i):Ds(e));break;default:Ds(e)}}function Iy(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function fl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];$e=l,Ny(l,e)}Iy(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Dy(e),e=e.sibling}function Dy(e){switch(e.tag){case 0:case 11:case 15:fl(e),e.flags&2048&&Dr(9,e,e.return);break;case 3:fl(e);break;case 12:fl(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,cc(e)):fl(e);break;default:fl(e)}}function cc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];$e=l,Ny(l,e)}Iy(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Dr(8,i,i.return),cc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,cc(i));break;default:cc(i)}e=e.sibling}}function Ny(e,i){for(;$e!==null;){var s=$e;switch(s.tag){case 0:case 11:case 15:Dr(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Yo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,$e=l;else t:for(s=e;$e!==null;){l=$e;var h=l.sibling,d=l.return;if(Ty(l),l===s){$e=null;break t}if(h!==null){h.return=d,$e=h;break t}$e=d}}}var yb={getCacheForType:function(e){var i=en(Ve),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s}},vb=typeof WeakMap=="function"?WeakMap:Map,Qt=0,re=null,Ot=null,zt=0,Xt=0,Sn=null,Or=!1,Ns=!1,_d=!1,Xi=0,ve=0,Vr=0,$a=0,Ed=0,zn=0,Ms=0,dl=null,gn=null,bd=!1,Td=0,hc=1/0,fc=null,kr=null,Ye=0,Ur=null,Os=null,Vs=0,wd=0,Sd=null,My=null,pl=0,Ad=null;function An(){if((Qt&2)!==0&&zt!==0)return zt&-zt;if(J.T!==null){var e=bs;return e!==0?e:Md()}return Ni()}function Oy(){zn===0&&(zn=(zt&536870912)===0||qt?wo():536870912);var e=Ln.current;return e!==null&&(e.flags|=32),zn}function Rn(e,i,s){(e===re&&(Xt===2||Xt===9)||e.cancelPendingCommit!==null)&&(ks(e,0),Pr(e,zt,zn,!1)),xe(e,s),((Qt&2)===0||e!==re)&&(e===re&&((Qt&2)===0&&($a|=s),ve===4&&Pr(e,zt,zn,!1)),vi(e))}function Vy(e,i,s){if((Qt&6)!==0)throw Error(a(327));var l=!s&&(i&124)===0&&(i&e.expiredLanes)===0||cr(e,i),h=l?Eb(e,i):jd(e,i,!0),d=l;do{if(h===0){Ns&&!l&&Pr(e,i,0,!1);break}else{if(s=e.current.alternate,d&&!xb(s)){h=jd(e,i,!1),d=!1;continue}if(h===2){if(d=i,e.errorRecoveryDisabledLanes&d)var E=0;else E=e.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;t:{var T=e;h=dl;var D=T.current.memoizedState.isDehydrated;if(D&&(ks(T,E).flags|=256),E=jd(T,E,!1),E!==2){if(_d&&!D){T.errorRecoveryDisabledLanes|=d,$a|=d,h=4;break t}d=gn,gn=h,d!==null&&(gn===null?gn=d:gn.push.apply(gn,d))}h=E}if(d=!1,h!==2)continue}}if(h===1){ks(e,0),Pr(e,i,0,!0);break}t:{switch(l=e,d=h,d){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Pr(l,i,zn,!Or);break t;case 2:gn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(h=Td+300-dn(),10<h)){if(Pr(l,i,zn,!Or),Dn(l,0,!0)!==0)break t;l.timeoutHandle=c1(ky.bind(null,l,s,gn,fc,bd,i,zn,$a,Ms,Or,d,2,-0,0),h);break t}ky(l,s,gn,fc,bd,i,zn,$a,Ms,Or,d,0,-0,0)}}break}while(!0);vi(e)}function ky(e,i,s,l,h,d,E,T,D,K,et,it,H,G){if(e.timeoutHandle=-1,it=i.subtreeFlags,(it&8192||(it&16785408)===16785408)&&(El={stylesheets:null,count:0,unsuspend:tT},jy(i),it=nT(),it!==null)){e.cancelPendingCommit=it(Fy.bind(null,e,i,d,s,l,h,E,T,D,et,1,H,G)),Pr(e,d,E,!K);return}Fy(e,i,d,s,l,h,E,T,D)}function xb(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var h=s[l],d=h.getSnapshot;h=h.value;try{if(!En(d(),h))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Pr(e,i,s,l){i&=~Ed,i&=~$a,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var h=i;0<h;){var d=31-ln(h),E=1<<d;l[d]=-1,h&=~E}s!==0&&fr(e,s,i)}function dc(){return(Qt&6)===0?(ml(0),!1):!0}function Rd(){if(Ot!==null){if(Xt===0)var e=Ot.return;else e=Ot,$i=ka=null,Kf(e),Cs=null,al=0,e=Ot;for(;e!==null;)my(e.alternate,e),e=e.return;Ot=null}}function ks(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,Ub(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Rd(),re=e,Ot=s=Li(e.current,null),zt=i,Xt=0,Sn=null,Or=!1,Ns=cr(e,i),_d=!1,Ms=zn=Ed=$a=Vr=ve=0,gn=dl=null,bd=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var h=31-ln(l),d=1<<h;i|=e[h],l&=~d}return Xi=i,Vu(),s}function Uy(e,i){Nt=null,J.H=tc,i===Xo||i===Ku?(i=t0(),Xt=3):i===Wg?(i=t0(),Xt=4):Xt=i===ey?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Sn=i,Ot===null&&(ve=1,ac(e,Vn(i,e.current)))}function Py(){var e=J.H;return J.H=tc,e===null?tc:e}function Ly(){var e=J.A;return J.A=yb,e}function Cd(){ve=4,Or||(zt&4194048)!==zt&&Ln.current!==null||(Ns=!0),(Vr&134217727)===0&&($a&134217727)===0||re===null||Pr(re,zt,zn,!1)}function jd(e,i,s){var l=Qt;Qt|=2;var h=Py(),d=Ly();(re!==e||zt!==i)&&(fc=null,ks(e,i)),i=!1;var E=ve;t:do try{if(Xt!==0&&Ot!==null){var T=Ot,D=Sn;switch(Xt){case 8:Rd(),E=6;break t;case 3:case 2:case 9:case 6:Ln.current===null&&(i=!0);var K=Xt;if(Xt=0,Sn=null,Us(e,T,D,K),s&&Ns){E=0;break t}break;default:K=Xt,Xt=0,Sn=null,Us(e,T,D,K)}}_b(),E=ve;break}catch(et){Uy(e,et)}while(!0);return i&&e.shellSuspendCounter++,$i=ka=null,Qt=l,J.H=h,J.A=d,Ot===null&&(re=null,zt=0,Vu()),E}function _b(){for(;Ot!==null;)zy(Ot)}function Eb(e,i){var s=Qt;Qt|=2;var l=Py(),h=Ly();re!==e||zt!==i?(fc=null,hc=dn()+500,ks(e,i)):Ns=cr(e,i);t:do try{if(Xt!==0&&Ot!==null){i=Ot;var d=Sn;e:switch(Xt){case 1:Xt=0,Sn=null,Us(e,i,d,1);break;case 2:case 9:if(Zg(d)){Xt=0,Sn=null,By(i);break}i=function(){Xt!==2&&Xt!==9||re!==e||(Xt=7),vi(e)},d.then(i,i);break t;case 3:Xt=7;break t;case 4:Xt=5;break t;case 7:Zg(d)?(Xt=0,Sn=null,By(i)):(Xt=0,Sn=null,Us(e,i,d,7));break;case 5:var E=null;switch(Ot.tag){case 26:E=Ot.memoizedState;case 5:case 27:var T=Ot;if(!E||b1(E)){Xt=0,Sn=null;var D=T.sibling;if(D!==null)Ot=D;else{var K=T.return;K!==null?(Ot=K,pc(K)):Ot=null}break e}}Xt=0,Sn=null,Us(e,i,d,5);break;case 6:Xt=0,Sn=null,Us(e,i,d,6);break;case 8:Rd(),ve=6;break t;default:throw Error(a(462))}}bb();break}catch(et){Uy(e,et)}while(!0);return $i=ka=null,J.H=l,J.A=h,Qt=s,Ot!==null?0:(re=null,zt=0,Vu(),ve)}function bb(){for(;Ot!==null&&!nf();)zy(Ot)}function zy(e){var i=dy(e.alternate,e,Xi);e.memoizedProps=e.pendingProps,i===null?pc(e):Ot=i}function By(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=oy(s,i,i.pendingProps,i.type,void 0,zt);break;case 11:i=oy(s,i,i.pendingProps,i.type.render,i.ref,zt);break;case 5:Kf(i);default:my(s,i),i=Ot=$g(i,Xi),i=dy(s,i,Xi)}e.memoizedProps=e.pendingProps,i===null?pc(e):Ot=i}function Us(e,i,s,l){$i=ka=null,Kf(i),Cs=null,al=0;var h=i.return;try{if(hb(e,h,i,s,zt)){ve=1,ac(e,Vn(s,e.current)),Ot=null;return}}catch(d){if(h!==null)throw Ot=h,d;ve=1,ac(e,Vn(s,e.current)),Ot=null;return}i.flags&32768?(qt||l===1?e=!0:Ns||(zt&536870912)!==0?e=!1:(Or=e=!0,(l===2||l===9||l===3||l===6)&&(l=Ln.current,l!==null&&l.tag===13&&(l.flags|=16384))),$y(i,e)):pc(i)}function pc(e){var i=e;do{if((i.flags&32768)!==0){$y(i,Or);return}e=i.return;var s=db(i.alternate,i,Xi);if(s!==null){Ot=s;return}if(i=i.sibling,i!==null){Ot=i;return}Ot=i=e}while(i!==null);ve===0&&(ve=5)}function $y(e,i){do{var s=pb(e.alternate,e);if(s!==null){s.flags&=32767,Ot=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){Ot=e;return}Ot=e=s}while(e!==null);ve=6,Ot=null}function Fy(e,i,s,l,h,d,E,T,D){e.cancelPendingCommit=null;do mc();while(Ye!==0);if((Qt&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(d=i.lanes|i.childLanes,d|=xf,vu(e,s,d,E,T,D),e===re&&(Ot=re=null,zt=0),Os=i,Ur=e,Vs=s,wd=d,Sd=h,My=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ab(Di,function(){return Yy(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=J.T,J.T=null,h=ht.p,ht.p=2,E=Qt,Qt|=4;try{mb(e,i,s)}finally{Qt=E,ht.p=h,J.T=l}}Ye=1,Ky(),qy(),Hy()}}function Ky(){if(Ye===1){Ye=0;var e=Ur,i=Os,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=J.T,J.T=null;var l=ht.p;ht.p=2;var h=Qt;Qt|=4;try{Ay(i,e);var d=Bd,E=Ng(e.containerInfo),T=d.focusedElem,D=d.selectionRange;if(E!==T&&T&&T.ownerDocument&&Dg(T.ownerDocument.documentElement,T)){if(D!==null&&pf(T)){var K=D.start,et=D.end;if(et===void 0&&(et=K),"selectionStart"in T)T.selectionStart=K,T.selectionEnd=Math.min(et,T.value.length);else{var it=T.ownerDocument||document,H=it&&it.defaultView||window;if(H.getSelection){var G=H.getSelection(),wt=T.textContent.length,Et=Math.min(D.start,wt),te=D.end===void 0?Et:Math.min(D.end,wt);!G.extend&&Et>te&&(E=te,te=Et,Et=E);var L=Ig(T,Et),k=Ig(T,te);if(L&&k&&(G.rangeCount!==1||G.anchorNode!==L.node||G.anchorOffset!==L.offset||G.focusNode!==k.node||G.focusOffset!==k.offset)){var B=it.createRange();B.setStart(L.node,L.offset),G.removeAllRanges(),Et>te?(G.addRange(B),G.extend(k.node,k.offset)):(B.setEnd(k.node,k.offset),G.addRange(B))}}}}for(it=[],G=T;G=G.parentNode;)G.nodeType===1&&it.push({element:G,left:G.scrollLeft,top:G.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<it.length;T++){var nt=it[T];nt.element.scrollLeft=nt.left,nt.element.scrollTop=nt.top}}Rc=!!zd,Bd=zd=null}finally{Qt=h,ht.p=l,J.T=s}}e.current=i,Ye=2}}function qy(){if(Ye===2){Ye=0;var e=Ur,i=Os,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=J.T,J.T=null;var l=ht.p;ht.p=2;var h=Qt;Qt|=4;try{by(e,i.alternate,i)}finally{Qt=h,ht.p=l,J.T=s}}Ye=3}}function Hy(){if(Ye===4||Ye===3){Ye=0,bo();var e=Ur,i=Os,s=Vs,l=My;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Ye=5:(Ye=0,Os=Ur=null,Gy(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(kr=null),Ao(s),i=i.stateNode,Je&&typeof Je.onCommitFiberRoot=="function")try{Je.onCommitFiberRoot(lr,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=J.T,h=ht.p,ht.p=2,J.T=null;try{for(var d=e.onRecoverableError,E=0;E<l.length;E++){var T=l[E];d(T.value,{componentStack:T.stack})}}finally{J.T=i,ht.p=h}}(Vs&3)!==0&&mc(),vi(e),h=e.pendingLanes,(s&4194090)!==0&&(h&42)!==0?e===Ad?pl++:(pl=0,Ad=e):pl=0,ml(0)}}function Gy(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Yo(i)))}function mc(e){return Ky(),qy(),Hy(),Yy()}function Yy(){if(Ye!==5)return!1;var e=Ur,i=wd;wd=0;var s=Ao(Vs),l=J.T,h=ht.p;try{ht.p=32>s?32:s,J.T=null,s=Sd,Sd=null;var d=Ur,E=Vs;if(Ye=0,Os=Ur=null,Vs=0,(Qt&6)!==0)throw Error(a(331));var T=Qt;if(Qt|=4,Dy(d.current),Cy(d,d.current,E,s),Qt=T,ml(0,!1),Je&&typeof Je.onPostCommitFiberRoot=="function")try{Je.onPostCommitFiberRoot(lr,d)}catch{}return!0}finally{ht.p=h,J.T=l,Gy(e,i)}}function Qy(e,i,s){i=Vn(s,i),i=rd(e.stateNode,i,2),e=Rr(e,i,2),e!==null&&(xe(e,2),vi(e))}function ee(e,i,s){if(e.tag===3)Qy(e,e,s);else for(;i!==null;){if(i.tag===3){Qy(i,e,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(kr===null||!kr.has(l))){e=Vn(s,e),s=J0(2),l=Rr(i,s,2),l!==null&&(ty(s,l,i,e),xe(l,2),vi(l));break}}i=i.return}}function Id(e,i,s){var l=e.pingCache;if(l===null){l=e.pingCache=new vb;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(s)||(_d=!0,h.add(s),e=Tb.bind(null,e,i,s),i.then(e,e))}function Tb(e,i,s){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,re===e&&(zt&s)===s&&(ve===4||ve===3&&(zt&62914560)===zt&&300>dn()-Td?(Qt&2)===0&&ks(e,0):Ed|=s,Ms===zt&&(Ms=0)),vi(e)}function Xy(e,i){i===0&&(i=hr()),e=vs(e,i),e!==null&&(xe(e,i),vi(e))}function wb(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),Xy(e,s)}function Sb(e,i){var s=0;switch(e.tag){case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(s=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),Xy(e,s)}function Ab(e,i){return oa(e,i)}var gc=null,Ps=null,Dd=!1,yc=!1,Nd=!1,Fa=0;function vi(e){e!==Ps&&e.next===null&&(Ps===null?gc=Ps=e:Ps=Ps.next=e),yc=!0,Dd||(Dd=!0,Cb())}function ml(e,i){if(!Nd&&yc){Nd=!0;do for(var s=!1,l=gc;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var E=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-ln(42|e)+1)-1,d&=h&~(E&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,t1(l,d))}else d=zt,d=Dn(l,l===re?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||cr(l,d)||(s=!0,t1(l,d));l=l.next}while(s);Nd=!1}}function Rb(){Wy()}function Wy(){yc=Dd=!1;var e=0;Fa!==0&&(kb()&&(e=Fa),Fa=0);for(var i=dn(),s=null,l=gc;l!==null;){var h=l.next,d=Zy(l,i);d===0?(l.next=null,s===null?gc=h:s.next=h,h===null&&(Ps=s)):(s=l,(e!==0||(d&3)!==0)&&(yc=!0)),l=h}ml(e)}function Zy(e,i){for(var s=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var E=31-ln(d),T=1<<E,D=h[E];D===-1?((T&s)===0||(T&l)!==0)&&(h[E]=es(T,i)):D<=i&&(e.expiredLanes|=T),d&=~T}if(i=re,s=zt,s=Dn(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===i&&(Xt===2||Xt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&ts(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||cr(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(l!==null&&ts(l),Ao(s)){case 2:case 8:s=Le;break;case 32:s=Di;break;case 268435456:s=To;break;default:s=Di}return l=Jy.bind(null,e),s=oa(s,l),e.callbackPriority=i,e.callbackNode=s,i}return l!==null&&l!==null&&ts(l),e.callbackPriority=2,e.callbackNode=null,2}function Jy(e,i){if(Ye!==0&&Ye!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(mc()&&e.callbackNode!==s)return null;var l=zt;return l=Dn(e,e===re?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Vy(e,l,i),Zy(e,dn()),e.callbackNode!=null&&e.callbackNode===s?Jy.bind(null,e):null)}function t1(e,i){if(mc())return null;Vy(e,i,!0)}function Cb(){Pb(function(){(Qt&6)!==0?oa(Me,Rb):Wy()})}function Md(){return Fa===0&&(Fa=wo()),Fa}function e1(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Qn(""+e)}function n1(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function jb(e,i,s,l,h){if(i==="submit"&&s&&s.stateNode===h){var d=e1((h[He]||null).action),E=l.submitter;E&&(i=(i=E[He]||null)?e1(i.formAction):E.getAttribute("formAction"),i!==null&&(d=i,E=null));var T=new ba("action","action",null,l,h);e.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Fa!==0){var D=E?n1(h,E):new FormData(h);Jf(s,{pending:!0,data:D,method:h.method,action:d},null,D)}}else typeof d=="function"&&(T.preventDefault(),D=E?n1(h,E):new FormData(h),Jf(s,{pending:!0,data:D,method:h.method,action:d},d,D))},currentTarget:h}]})}}for(var Od=0;Od<vf.length;Od++){var Vd=vf[Od],Ib=Vd.toLowerCase(),Db=Vd[0].toUpperCase()+Vd.slice(1);Jn(Ib,"on"+Db)}Jn(Vg,"onAnimationEnd"),Jn(kg,"onAnimationIteration"),Jn(Ug,"onAnimationStart"),Jn("dblclick","onDoubleClick"),Jn("focusin","onFocus"),Jn("focusout","onBlur"),Jn(Y2,"onTransitionRun"),Jn(Q2,"onTransitionStart"),Jn(X2,"onTransitionCancel"),Jn(Pg,"onTransitionEnd"),ci("onMouseEnter",["mouseout","mouseover"]),ci("onMouseLeave",["mouseout","mouseover"]),ci("onPointerEnter",["pointerout","pointerover"]),ci("onPointerLeave",["pointerout","pointerover"]),ui("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ui("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ui("onBeforeInput",["compositionend","keypress","textInput","paste"]),ui("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ui("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ui("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gl));function i1(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],h=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var E=l.length-1;0<=E;E--){var T=l[E],D=T.instance,K=T.currentTarget;if(T=T.listener,D!==d&&h.isPropagationStopped())break t;d=T,h.currentTarget=K;try{d(h)}catch(et){rc(et)}h.currentTarget=null,d=D}else for(E=0;E<l.length;E++){if(T=l[E],D=T.instance,K=T.currentTarget,T=T.listener,D!==d&&h.isPropagationStopped())break t;d=T,h.currentTarget=K;try{d(h)}catch(et){rc(et)}h.currentTarget=null,d=D}}}}function Vt(e,i){var s=i[ua];s===void 0&&(s=i[ua]=new Set);var l=e+"__bubble";s.has(l)||(r1(i,e,2,!1),s.add(l))}function kd(e,i,s){var l=0;i&&(l|=4),r1(s,e,l,i)}var vc="_reactListening"+Math.random().toString(36).slice(2);function Ud(e){if(!e[vc]){e[vc]=!0,xu.forEach(function(s){s!=="selectionchange"&&(Nb.has(s)||kd(s,!1,e),kd(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[vc]||(i[vc]=!0,kd("selectionchange",!1,i))}}function r1(e,i,s,l){switch(C1(i)){case 2:var h=aT;break;case 8:h=sT;break;default:h=Wd}s=h.bind(null,i,s,e),h=void 0,!Ui||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(i,s,{capture:!0,passive:h}):e.addEventListener(i,s,!0):h!==void 0?e.addEventListener(i,s,{passive:h}):e.addEventListener(i,s,!1)}function Pd(e,i,s,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var T=l.stateNode.containerInfo;if(T===h)break;if(E===4)for(E=l.return;E!==null;){var D=E.tag;if((D===3||D===4)&&E.stateNode.containerInfo===h)return;E=E.return}for(;T!==null;){if(E=oi(T),E===null)return;if(D=E.tag,D===5||D===6||D===26||D===27){l=d=E;continue t}T=T.parentNode}}l=l.return}xa(function(){var K=d,et=Mo(s),it=[];t:{var H=Lg.get(e);if(H!==void 0){var G=ba,wt=e;switch(e){case"keypress":if(_a(s)===0)break t;case"keydown":case"keyup":G=ps;break;case"focusin":wt="focus",G=hs;break;case"focusout":wt="blur",G=hs;break;case"beforeblur":case"afterblur":G=hs;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=Ra;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=Au;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=Tr;break;case Vg:case kg:case Ug:G=Vo;break;case Pg:G=y;break;case"scroll":case"scrollend":G=wa;break;case"wheel":G=w;break;case"copy":case"cut":case"paste":G=Cu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=Po;break;case"toggle":case"beforetoggle":G=Y}var Et=(i&4)!==0,te=!Et&&(e==="scroll"||e==="scrollend"),L=Et?H!==null?H+"Capture":null:H;Et=[];for(var k=K,B;k!==null;){var nt=k;if(B=nt.stateNode,nt=nt.tag,nt!==5&&nt!==26&&nt!==27||B===null||L===null||(nt=Er(k,L),nt!=null&&Et.push(yl(k,nt,B))),te)break;k=k.return}0<Et.length&&(H=new G(H,wt,null,s,et),it.push({event:H,listeners:Et}))}}if((i&7)===0){t:{if(H=e==="mouseover"||e==="pointerover",G=e==="mouseout"||e==="pointerout",H&&s!==No&&(wt=s.relatedTarget||s.fromElement)&&(oi(wt)||wt[Mi]))break t;if((G||H)&&(H=et.window===et?et:(H=et.ownerDocument)?H.defaultView||H.parentWindow:window,G?(wt=s.relatedTarget||s.toElement,G=K,wt=wt?oi(wt):null,wt!==null&&(te=u(wt),Et=wt.tag,wt!==te||Et!==5&&Et!==27&&Et!==6)&&(wt=null)):(G=null,wt=K),G!==wt)){if(Et=Ra,nt="onMouseLeave",L="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(Et=Po,nt="onPointerLeave",L="onPointerEnter",k="pointer"),te=G==null?H:mr(G),B=wt==null?H:mr(wt),H=new Et(nt,k+"leave",G,s,et),H.target=te,H.relatedTarget=B,nt=null,oi(et)===K&&(Et=new Et(L,k+"enter",wt,s,et),Et.target=B,Et.relatedTarget=te,nt=Et),te=nt,G&&wt)e:{for(Et=G,L=wt,k=0,B=Et;B;B=Ls(B))k++;for(B=0,nt=L;nt;nt=Ls(nt))B++;for(;0<k-B;)Et=Ls(Et),k--;for(;0<B-k;)L=Ls(L),B--;for(;k--;){if(Et===L||L!==null&&Et===L.alternate)break e;Et=Ls(Et),L=Ls(L)}Et=null}else Et=null;G!==null&&a1(it,H,G,Et,!1),wt!==null&&te!==null&&a1(it,te,wt,Et,!0)}}t:{if(H=K?mr(K):window,G=H.nodeName&&H.nodeName.toLowerCase(),G==="select"||G==="input"&&H.type==="file")var pt=wg;else if(bg(H))if(Sg)pt=q2;else{pt=F2;var Mt=$2}else G=H.nodeName,!G||G.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?K&&ls(K.elementType)&&(pt=wg):pt=K2;if(pt&&(pt=pt(e,K))){Tg(it,pt,s,et);break t}Mt&&Mt(e,H,K),e==="focusout"&&K&&H.type==="number"&&K.memoizedProps.value!=null&&jo(H,"number",H.value)}switch(Mt=K?mr(K):window,e){case"focusin":(bg(Mt)||Mt.contentEditable==="true")&&(ms=Mt,mf=K,Fo=null);break;case"focusout":Fo=mf=ms=null;break;case"mousedown":gf=!0;break;case"contextmenu":case"mouseup":case"dragend":gf=!1,Mg(it,s,et);break;case"selectionchange":if(G2)break;case"keydown":case"keyup":Mg(it,s,et)}var vt;if(At)t:{switch(e){case"compositionstart":var bt="onCompositionStart";break t;case"compositionend":bt="onCompositionEnd";break t;case"compositionupdate":bt="onCompositionUpdate";break t}bt=void 0}else Zn?Xn(e,s)&&(bt="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(bt="onCompositionStart");bt&&(be&&s.locale!=="ko"&&(Zn||bt!=="onCompositionStart"?bt==="onCompositionEnd"&&Zn&&(vt=Su()):(On=et,ie="value"in On?On.value:On.textContent,Zn=!0)),Mt=xc(K,bt),0<Mt.length&&(bt=new Uo(bt,e,null,s,et),it.push({event:bt,listeners:Mt}),vt?bt.data=vt:(vt=Wn(s),vt!==null&&(bt.data=vt)))),(vt=Yt?Lo(e,s):L2(e,s))&&(bt=xc(K,"onBeforeInput"),0<bt.length&&(Mt=new Uo("onBeforeInput","beforeinput",null,s,et),it.push({event:Mt,listeners:bt}),Mt.data=vt)),jb(it,e,K,s,et)}i1(it,i)})}function yl(e,i,s){return{instance:e,listener:i,currentTarget:s}}function xc(e,i){for(var s=i+"Capture",l=[];e!==null;){var h=e,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=Er(e,s),h!=null&&l.unshift(yl(e,h,d)),h=Er(e,i),h!=null&&l.push(yl(e,h,d))),e.tag===3)return l;e=e.return}return[]}function Ls(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function a1(e,i,s,l,h){for(var d=i._reactName,E=[];s!==null&&s!==l;){var T=s,D=T.alternate,K=T.stateNode;if(T=T.tag,D!==null&&D===l)break;T!==5&&T!==26&&T!==27||K===null||(D=K,h?(K=Er(s,d),K!=null&&E.unshift(yl(s,K,D))):h||(K=Er(s,d),K!=null&&E.push(yl(s,K,D)))),s=s.return}E.length!==0&&e.push({event:i,listeners:E})}var Mb=/\r\n?/g,Ob=/\u0000|\uFFFD/g;function s1(e){return(typeof e=="string"?e:""+e).replace(Mb,`
`).replace(Ob,"")}function o1(e,i){return i=s1(i),s1(e)===i}function _c(){}function Jt(e,i,s,l,h,d){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Mn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Mn(e,""+l);break;case"className":pa(e,"class",l);break;case"tabIndex":pa(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":pa(e,s,l);break;case"style":Do(e,l,d);break;case"data":if(i!=="object"){pa(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Qn(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(i!=="input"&&Jt(e,i,"name",h.name,h,null),Jt(e,i,"formEncType",h.formEncType,h,null),Jt(e,i,"formMethod",h.formMethod,h,null),Jt(e,i,"formTarget",h.formTarget,h,null)):(Jt(e,i,"encType",h.encType,h,null),Jt(e,i,"method",h.method,h,null),Jt(e,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Qn(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=_c);break;case"onScroll":l!=null&&Vt("scroll",e);break;case"onScrollEnd":l!=null&&Vt("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=Qn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":Vt("beforetoggle",e),Vt("toggle",e),da(e,"popover",l);break;case"xlinkActuate":Nn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Nn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Nn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Nn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Nn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Nn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Nn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Nn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Nn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":da(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=bu.get(s)||s,da(e,s,l))}}function Ld(e,i,s,l,h,d){switch(s){case"style":Do(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof l=="string"?Mn(e,l):(typeof l=="number"||typeof l=="bigint")&&Mn(e,""+l);break;case"onScroll":l!=null&&Vt("scroll",e);break;case"onScrollEnd":l!=null&&Vt("scrollend",e);break;case"onClick":l!=null&&(e.onclick=_c);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ha.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),i=s.slice(2,h?s.length-7:void 0),d=e[He]||null,d=d!=null?d[s]:null,typeof d=="function"&&e.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,l,h);break t}s in e?e[s]=l:l===!0?e.setAttribute(s,""):da(e,s,l)}}}function Qe(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Vt("error",e),Vt("load",e);var l=!1,h=!1,d;for(d in s)if(s.hasOwnProperty(d)){var E=s[d];if(E!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Jt(e,i,d,E,s,null)}}h&&Jt(e,i,"srcSet",s.srcSet,s,null),l&&Jt(e,i,"src",s.src,s,null);return;case"input":Vt("invalid",e);var T=d=E=h=null,D=null,K=null;for(l in s)if(s.hasOwnProperty(l)){var et=s[l];if(et!=null)switch(l){case"name":h=et;break;case"type":E=et;break;case"checked":D=et;break;case"defaultChecked":K=et;break;case"value":d=et;break;case"defaultValue":T=et;break;case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(a(137,i));break;default:Jt(e,i,l,et,s,null)}}Co(e,d,T,D,K,E,h,!1),vr(e);return;case"select":Vt("invalid",e),l=E=d=null;for(h in s)if(s.hasOwnProperty(h)&&(T=s[h],T!=null))switch(h){case"value":d=T;break;case"defaultValue":E=T;break;case"multiple":l=T;default:Jt(e,i,h,T,s,null)}i=d,s=E,e.multiple=!!l,i!=null?xr(e,!!l,i,!1):s!=null&&xr(e,!!l,s,!0);return;case"textarea":Vt("invalid",e),d=h=l=null;for(E in s)if(s.hasOwnProperty(E)&&(T=s[E],T!=null))switch(E){case"value":l=T;break;case"defaultValue":h=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(a(91));break;default:Jt(e,i,E,T,s,null)}Eu(e,l,h,d),vr(e);return;case"option":for(D in s)if(s.hasOwnProperty(D)&&(l=s[D],l!=null))switch(D){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Jt(e,i,D,l,s,null)}return;case"dialog":Vt("beforetoggle",e),Vt("toggle",e),Vt("cancel",e),Vt("close",e);break;case"iframe":case"object":Vt("load",e);break;case"video":case"audio":for(l=0;l<gl.length;l++)Vt(gl[l],e);break;case"image":Vt("error",e),Vt("load",e);break;case"details":Vt("toggle",e);break;case"embed":case"source":case"link":Vt("error",e),Vt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(K in s)if(s.hasOwnProperty(K)&&(l=s[K],l!=null))switch(K){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Jt(e,i,K,l,s,null)}return;default:if(ls(i)){for(et in s)s.hasOwnProperty(et)&&(l=s[et],l!==void 0&&Ld(e,i,et,l,s,void 0));return}}for(T in s)s.hasOwnProperty(T)&&(l=s[T],l!=null&&Jt(e,i,T,l,s,null))}function Vb(e,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,E=null,T=null,D=null,K=null,et=null;for(G in s){var it=s[G];if(s.hasOwnProperty(G)&&it!=null)switch(G){case"checked":break;case"value":break;case"defaultValue":D=it;default:l.hasOwnProperty(G)||Jt(e,i,G,null,l,it)}}for(var H in l){var G=l[H];if(it=s[H],l.hasOwnProperty(H)&&(G!=null||it!=null))switch(H){case"type":d=G;break;case"name":h=G;break;case"checked":K=G;break;case"defaultChecked":et=G;break;case"value":E=G;break;case"defaultValue":T=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(a(137,i));break;default:G!==it&&Jt(e,i,H,G,l,it)}}Ro(e,E,T,D,K,et,d,h);return;case"select":G=E=T=H=null;for(d in s)if(D=s[d],s.hasOwnProperty(d)&&D!=null)switch(d){case"value":break;case"multiple":G=D;default:l.hasOwnProperty(d)||Jt(e,i,d,null,l,D)}for(h in l)if(d=l[h],D=s[h],l.hasOwnProperty(h)&&(d!=null||D!=null))switch(h){case"value":H=d;break;case"defaultValue":T=d;break;case"multiple":E=d;default:d!==D&&Jt(e,i,h,d,l,D)}i=T,s=E,l=G,H!=null?xr(e,!!s,H,!1):!!l!=!!s&&(i!=null?xr(e,!!s,i,!0):xr(e,!!s,s?[]:"",!1));return;case"textarea":G=H=null;for(T in s)if(h=s[T],s.hasOwnProperty(T)&&h!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Jt(e,i,T,null,l,h)}for(E in l)if(h=l[E],d=s[E],l.hasOwnProperty(E)&&(h!=null||d!=null))switch(E){case"value":H=h;break;case"defaultValue":G=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==d&&Jt(e,i,E,h,l,d)}_u(e,H,G);return;case"option":for(var wt in s)if(H=s[wt],s.hasOwnProperty(wt)&&H!=null&&!l.hasOwnProperty(wt))switch(wt){case"selected":e.selected=!1;break;default:Jt(e,i,wt,null,l,H)}for(D in l)if(H=l[D],G=s[D],l.hasOwnProperty(D)&&H!==G&&(H!=null||G!=null))switch(D){case"selected":e.selected=H&&typeof H!="function"&&typeof H!="symbol";break;default:Jt(e,i,D,H,l,G)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Et in s)H=s[Et],s.hasOwnProperty(Et)&&H!=null&&!l.hasOwnProperty(Et)&&Jt(e,i,Et,null,l,H);for(K in l)if(H=l[K],G=s[K],l.hasOwnProperty(K)&&H!==G&&(H!=null||G!=null))switch(K){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(a(137,i));break;default:Jt(e,i,K,H,l,G)}return;default:if(ls(i)){for(var te in s)H=s[te],s.hasOwnProperty(te)&&H!==void 0&&!l.hasOwnProperty(te)&&Ld(e,i,te,void 0,l,H);for(et in l)H=l[et],G=s[et],!l.hasOwnProperty(et)||H===G||H===void 0&&G===void 0||Ld(e,i,et,H,l,G);return}}for(var L in s)H=s[L],s.hasOwnProperty(L)&&H!=null&&!l.hasOwnProperty(L)&&Jt(e,i,L,null,l,H);for(it in l)H=l[it],G=s[it],!l.hasOwnProperty(it)||H===G||H==null&&G==null||Jt(e,i,it,H,l,G)}var zd=null,Bd=null;function Ec(e){return e.nodeType===9?e:e.ownerDocument}function l1(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function u1(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function $d(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Fd=null;function kb(){var e=window.event;return e&&e.type==="popstate"?e===Fd?!1:(Fd=e,!0):(Fd=null,!1)}var c1=typeof setTimeout=="function"?setTimeout:void 0,Ub=typeof clearTimeout=="function"?clearTimeout:void 0,h1=typeof Promise=="function"?Promise:void 0,Pb=typeof queueMicrotask=="function"?queueMicrotask:typeof h1<"u"?function(e){return h1.resolve(null).then(e).catch(Lb)}:c1;function Lb(e){setTimeout(function(){throw e})}function Lr(e){return e==="head"}function f1(e,i){var s=i,l=0,h=0;do{var d=s.nextSibling;if(e.removeChild(s),d&&d.nodeType===8)if(s=d.data,s==="/$"){if(0<l&&8>l){s=l;var E=e.ownerDocument;if(s&1&&vl(E.documentElement),s&2&&vl(E.body),s&4)for(s=E.head,vl(s),E=s.firstChild;E;){var T=E.nextSibling,D=E.nodeName;E[pr]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&E.rel.toLowerCase()==="stylesheet"||s.removeChild(E),E=T}}if(h===0){e.removeChild(d),Al(i);return}h--}else s==="$"||s==="$?"||s==="$!"?h++:l=s.charCodeAt(0)-48;else l=0;s=d}while(s);Al(i)}function Kd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Kd(s),is(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function zb(e,i,s,l){for(;e.nodeType===1;){var h=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[pr])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=ei(e.nextSibling),e===null)break}return null}function Bb(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=ei(e.nextSibling),e===null))return null;return e}function qd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function $b(e,i){var s=e.ownerDocument;if(e.data!=="$?"||s.readyState==="complete")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function ei(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var Hd=null;function d1(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return e;i--}else s==="/$"&&i++}e=e.previousSibling}return null}function p1(e,i,s){switch(i=Ec(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function vl(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);is(e)}var Bn=new Map,m1=new Set;function bc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Wi=ht.d;ht.d={f:Fb,r:Kb,D:qb,C:Hb,L:Gb,m:Yb,X:Xb,S:Qb,M:Wb};function Fb(){var e=Wi.f(),i=dc();return e||i}function Kb(e){var i=li(e);i!==null&&i.tag===5&&i.type==="form"?V0(i):Wi.r(e)}var zs=typeof document>"u"?null:document;function g1(e,i,s){var l=zs;if(l&&typeof i=="string"&&i){var h=ze(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),m1.has(h)||(m1.add(h),e={rel:e,crossOrigin:s,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Qe(i,"link",e),Ee(i),l.head.appendChild(i)))}}function qb(e){Wi.D(e),g1("dns-prefetch",e,null)}function Hb(e,i){Wi.C(e,i),g1("preconnect",e,i)}function Gb(e,i,s){Wi.L(e,i,s);var l=zs;if(l&&e&&i){var h='link[rel="preload"][as="'+ze(i)+'"]';i==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+ze(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+ze(s.imageSizes)+'"]')):h+='[href="'+ze(e)+'"]';var d=h;switch(i){case"style":d=Bs(e);break;case"script":d=$s(e)}Bn.has(d)||(e=_({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),Bn.set(d,e),l.querySelector(h)!==null||i==="style"&&l.querySelector(xl(d))||i==="script"&&l.querySelector(_l(d))||(i=l.createElement("link"),Qe(i,"link",e),Ee(i),l.head.appendChild(i)))}}function Yb(e,i){Wi.m(e,i);var s=zs;if(s&&e){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+ze(l)+'"][href="'+ze(e)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=$s(e)}if(!Bn.has(d)&&(e=_({rel:"modulepreload",href:e},i),Bn.set(d,e),s.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(_l(d)))return}l=s.createElement("link"),Qe(l,"link",e),Ee(l),s.head.appendChild(l)}}}function Qb(e,i,s){Wi.S(e,i,s);var l=zs;if(l&&e){var h=gr(l).hoistableStyles,d=Bs(e);i=i||"default";var E=h.get(d);if(!E){var T={loading:0,preload:null};if(E=l.querySelector(xl(d)))T.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":i},s),(s=Bn.get(d))&&Gd(e,s);var D=E=l.createElement("link");Ee(D),Qe(D,"link",e),D._p=new Promise(function(K,et){D.onload=K,D.onerror=et}),D.addEventListener("load",function(){T.loading|=1}),D.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Tc(E,i,l)}E={type:"stylesheet",instance:E,count:1,state:T},h.set(d,E)}}}function Xb(e,i){Wi.X(e,i);var s=zs;if(s&&e){var l=gr(s).hoistableScripts,h=$s(e),d=l.get(h);d||(d=s.querySelector(_l(h)),d||(e=_({src:e,async:!0},i),(i=Bn.get(h))&&Yd(e,i),d=s.createElement("script"),Ee(d),Qe(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function Wb(e,i){Wi.M(e,i);var s=zs;if(s&&e){var l=gr(s).hoistableScripts,h=$s(e),d=l.get(h);d||(d=s.querySelector(_l(h)),d||(e=_({src:e,async:!0,type:"module"},i),(i=Bn.get(h))&&Yd(e,i),d=s.createElement("script"),Ee(d),Qe(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function y1(e,i,s,l){var h=(h=xt.current)?bc(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Bs(s.href),s=gr(h).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Bs(s.href);var d=gr(h).hoistableStyles,E=d.get(e);if(E||(h=h.ownerDocument||h,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,E),(d=h.querySelector(xl(e)))&&!d._p&&(E.instance=d,E.state.loading=5),Bn.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Bn.set(e,s),d||Zb(h,e,s,E.state))),i&&l===null)throw Error(a(528,""));return E}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=$s(s),s=gr(h).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Bs(e){return'href="'+ze(e)+'"'}function xl(e){return'link[rel="stylesheet"]['+e+"]"}function v1(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function Zb(e,i,s,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Qe(i,"link",s),Ee(i),e.head.appendChild(i))}function $s(e){return'[src="'+ze(e)+'"]'}function _l(e){return"script[async]"+e}function x1(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+ze(s.href)+'"]');if(l)return i.instance=l,Ee(l),l;var h=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ee(l),Qe(l,"style",h),Tc(l,s.precedence,e),i.instance=l;case"stylesheet":h=Bs(s.href);var d=e.querySelector(xl(h));if(d)return i.state.loading|=4,i.instance=d,Ee(d),d;l=v1(s),(h=Bn.get(h))&&Gd(l,h),d=(e.ownerDocument||e).createElement("link"),Ee(d);var E=d;return E._p=new Promise(function(T,D){E.onload=T,E.onerror=D}),Qe(d,"link",l),i.state.loading|=4,Tc(d,s.precedence,e),i.instance=d;case"script":return d=$s(s.src),(h=e.querySelector(_l(d)))?(i.instance=h,Ee(h),h):(l=s,(h=Bn.get(d))&&(l=_({},s),Yd(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),Ee(h),Qe(h,"link",l),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Tc(l,s.precedence,e));return i.instance}function Tc(e,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,E=0;E<l.length;E++){var T=l[E];if(T.dataset.precedence===i)d=T;else if(d!==h)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function Gd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Yd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var wc=null;function _1(e,i,s){if(wc===null){var l=new Map,h=wc=new Map;h.set(s,l)}else h=wc,l=h.get(s),l||(l=new Map,h.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),h=0;h<s.length;h++){var d=s[h];if(!(d[pr]||d[_e]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var E=d.getAttribute(i)||"";E=e+E;var T=l.get(E);T?T.push(d):l.set(E,[d])}}return l}function E1(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function Jb(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function b1(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var El=null;function tT(){}function eT(e,i,s){if(El===null)throw Error(a(475));var l=El;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=Bs(s.href),d=e.querySelector(xl(h));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Sc.bind(l),e.then(l,l)),i.state.loading|=4,i.instance=d,Ee(d);return}d=e.ownerDocument||e,s=v1(s),(h=Bn.get(h))&&Gd(s,h),d=d.createElement("link"),Ee(d);var E=d;E._p=new Promise(function(T,D){E.onload=T,E.onerror=D}),Qe(d,"link",s),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=Sc.bind(l),e.addEventListener("load",i),e.addEventListener("error",i))}}function nT(){if(El===null)throw Error(a(475));var e=El;return e.stylesheets&&e.count===0&&Qd(e,e.stylesheets),0<e.count?function(i){var s=setTimeout(function(){if(e.stylesheets&&Qd(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(s)}}:null}function Sc(){if(this.count--,this.count===0){if(this.stylesheets)Qd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ac=null;function Qd(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ac=new Map,i.forEach(iT,e),Ac=null,Sc.call(e))}function iT(e,i){if(!(i.state.loading&4)){var s=Ac.get(e);if(s)var l=s.get(null);else{s=new Map,Ac.set(e,s);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var E=h[d];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(s.set(E.dataset.precedence,E),l=E)}l&&s.set(null,l)}h=i.instance,E=h.getAttribute("data-precedence"),d=s.get(E)||l,d===l&&s.set(null,h),s.set(E,h),this.count++,l=Sc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var bl={$$typeof:Z,Provider:null,Consumer:null,_currentValue:yt,_currentValue2:yt,_threadCount:0};function rT(e,i,s,l,h,d,E,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ns(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ns(0),this.hiddenUpdates=ns(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function T1(e,i,s,l,h,d,E,T,D,K,et,it){return e=new rT(e,i,s,E,T,D,K,it),i=1,d===!0&&(i|=24),d=bn(3,null,null,i),e.current=d,d.stateNode=e,i=If(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:s,cache:i},Of(d),e}function w1(e){return e?(e=xs,e):xs}function S1(e,i,s,l,h,d){h=w1(h),l.context===null?l.context=h:l.pendingContext=h,l=Ar(i),l.payload={element:s},d=d===void 0?null:d,d!==null&&(l.callback=d),s=Rr(e,l,i),s!==null&&(Rn(s,e,i),Zo(s,e,i))}function A1(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function Xd(e,i){A1(e,i),(e=e.alternate)&&A1(e,i)}function R1(e){if(e.tag===13){var i=vs(e,67108864);i!==null&&Rn(i,e,67108864),Xd(e,67108864)}}var Rc=!0;function aT(e,i,s,l){var h=J.T;J.T=null;var d=ht.p;try{ht.p=2,Wd(e,i,s,l)}finally{ht.p=d,J.T=h}}function sT(e,i,s,l){var h=J.T;J.T=null;var d=ht.p;try{ht.p=8,Wd(e,i,s,l)}finally{ht.p=d,J.T=h}}function Wd(e,i,s,l){if(Rc){var h=Zd(l);if(h===null)Pd(e,i,l,Cc,s),j1(e,l);else if(lT(h,e,i,s,l))l.stopPropagation();else if(j1(e,l),i&4&&-1<oT.indexOf(e)){for(;h!==null;){var d=li(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var E=Hn(d.pendingLanes);if(E!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;E;){var D=1<<31-ln(E);T.entanglements[1]|=D,E&=~D}vi(d),(Qt&6)===0&&(hc=dn()+500,ml(0))}}break;case 13:T=vs(d,2),T!==null&&Rn(T,d,2),dc(),Xd(d,2)}if(d=Zd(l),d===null&&Pd(e,i,l,Cc,s),d===h)break;h=d}h!==null&&l.stopPropagation()}else Pd(e,i,l,null,s)}}function Zd(e){return e=Mo(e),Jd(e)}var Cc=null;function Jd(e){if(Cc=null,e=oi(e),e!==null){var i=u(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=f(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Cc=e,null}function C1(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(mu()){case Me:return 2;case Le:return 8;case Di:case rf:return 32;case To:return 268435456;default:return 32}default:return 32}}var tp=!1,zr=null,Br=null,$r=null,Tl=new Map,wl=new Map,Fr=[],oT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function j1(e,i){switch(e){case"focusin":case"focusout":zr=null;break;case"dragenter":case"dragleave":Br=null;break;case"mouseover":case"mouseout":$r=null;break;case"pointerover":case"pointerout":Tl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":wl.delete(i.pointerId)}}function Sl(e,i,s,l,h,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=li(i),i!==null&&R1(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function lT(e,i,s,l,h){switch(i){case"focusin":return zr=Sl(zr,e,i,s,l,h),!0;case"dragenter":return Br=Sl(Br,e,i,s,l,h),!0;case"mouseover":return $r=Sl($r,e,i,s,l,h),!0;case"pointerover":var d=h.pointerId;return Tl.set(d,Sl(Tl.get(d)||null,e,i,s,l,h)),!0;case"gotpointercapture":return d=h.pointerId,wl.set(d,Sl(wl.get(d)||null,e,i,s,l,h)),!0}return!1}function I1(e){var i=oi(e.target);if(i!==null){var s=u(i);if(s!==null){if(i=s.tag,i===13){if(i=f(s),i!==null){e.blockedOn=i,of(e.priority,function(){if(s.tag===13){var l=An();l=So(l);var h=vs(s,l);h!==null&&Rn(h,s,l),Xd(s,l)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=Zd(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);No=l,s.target.dispatchEvent(l),No=null}else return i=li(s),i!==null&&R1(i),e.blockedOn=s,!1;i.shift()}return!0}function D1(e,i,s){jc(e)&&s.delete(i)}function uT(){tp=!1,zr!==null&&jc(zr)&&(zr=null),Br!==null&&jc(Br)&&(Br=null),$r!==null&&jc($r)&&($r=null),Tl.forEach(D1),wl.forEach(D1)}function Ic(e,i){e.blockedOn===i&&(e.blockedOn=null,tp||(tp=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,uT)))}var Dc=null;function N1(e){Dc!==e&&(Dc=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Dc===e&&(Dc=null);for(var i=0;i<e.length;i+=3){var s=e[i],l=e[i+1],h=e[i+2];if(typeof l!="function"){if(Jd(l||s)===null)continue;break}var d=li(s);d!==null&&(e.splice(i,3),i-=3,Jf(d,{pending:!0,data:h,method:s.method,action:l},l,h))}}))}function Al(e){function i(D){return Ic(D,e)}zr!==null&&Ic(zr,e),Br!==null&&Ic(Br,e),$r!==null&&Ic($r,e),Tl.forEach(i),wl.forEach(i);for(var s=0;s<Fr.length;s++){var l=Fr[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Fr.length&&(s=Fr[0],s.blockedOn===null);)I1(s),s.blockedOn===null&&Fr.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var h=s[l],d=s[l+1],E=h[He]||null;if(typeof d=="function")E||N1(s);else if(E){var T=null;if(d&&d.hasAttribute("formAction")){if(h=d,E=d[He]||null)T=E.formAction;else if(Jd(h)!==null)continue}else T=E.action;typeof T=="function"?s[l+1]=T:(s.splice(l,3),l-=3),N1(s)}}}function ep(e){this._internalRoot=e}Nc.prototype.render=ep.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=An();S1(s,l,e,i,null,null)},Nc.prototype.unmount=ep.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;S1(e.current,2,null,e,null,null),dc(),i[Mi]=null}};function Nc(e){this._internalRoot=e}Nc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Ni();e={blockedOn:null,target:e,priority:i};for(var s=0;s<Fr.length&&i!==0&&i<Fr[s].priority;s++);Fr.splice(s,0,e),s===0&&I1(e)}};var M1=t.version;if(M1!=="19.1.1")throw Error(a(527,M1,"19.1.1"));ht.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=p(i),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var cT={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:J,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mc.isDisabled&&Mc.supportsFiber)try{lr=Mc.inject(cT),Je=Mc}catch{}}return Il.createRoot=function(e,i){if(!o(e))throw Error(a(299));var s=!1,l="",h=Q0,d=X0,E=W0,T=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=T1(e,1,!1,null,null,s,l,h,d,E,T,null),e[Mi]=i.current,Ud(e),new ep(i)},Il.hydrateRoot=function(e,i,s){if(!o(e))throw Error(a(299));var l=!1,h="",d=Q0,E=X0,T=W0,D=null,K=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(E=s.onCaughtError),s.onRecoverableError!==void 0&&(T=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(D=s.unstable_transitionCallbacks),s.formState!==void 0&&(K=s.formState)),i=T1(e,1,!0,i,s??null,l,h,d,E,T,D,K),i.context=w1(null),s=i.current,l=An(),l=So(l),h=Ar(l),h.callback=null,Rr(s,h,l),s=l,i.current.lanes=s,xe(i,s),vi(i),e[Mi]=i.current,Ud(e),new Nc(i)},Il.version="19.1.1",Il}var Yx;function fN(){if(Yx)return Np.exports;Yx=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}return n(),Np.exports=hN(),Np.exports}var dN=fN();function pN(){const n=Ci(),t=FT();return kt.useEffect(()=>{t!=="POP"&&window.scrollTo({top:0,behavior:"instant"});const r=document.getElementById("main");r&&r.focus({preventScroll:!0})},[n,t]),null}function mN({headerMode:n,setHeaderMode:t}){const r=q.useMemo(()=>[{key:"projects",label:"PROJECTS",href:"/TU2025gradulate/projects/"},{key:"peoples",label:"PEOPLES",href:"/TU2025gradulate/peoples/"},{key:"showroom",label:"SHOWROOM",href:"/TU2025gradulate/showroom/"},{key:"guestbook",label:"GUESTBOOK",href:"/TU2025gradulate/guestbook/"},{key:"credits",label:"CREDITS",href:"/TU2025gradulate/credits/"}],[]),a=Ci(),o=q.useMemo(()=>{const u=a.pathname.replace(/^\/+/,"");if(!u)return;const f=u.split("/")[0];return["projects","peoples","showroom","guestbook","credits"].includes(f)?f:void 0},[a.pathname]);return v.jsxs(v.Fragment,{children:[v.jsx(V_,{items:r,activeKey:o,mode:n,autoOnScroll:n===pe.GRADIENT_DARK||n===pe.DARK,scrollThreshold:8,sticky:!0,overlay:n===pe.GRADIENT_DARK||n===pe.DARK,maxWidth:1280,onModeChange:t}),v.jsx("main",{id:"main",tabIndex:-1,style:{outline:"none",width:"100vw",boxSizing:"border-box",padding:0},children:v.jsx(lw,{})}),v.jsx(k_,{title:"잔향 : 기억의 향기",nav:[{label:"PROJECTS",href:"/TU2025gradulate/projects/"},{label:"PEOPLES",href:"/TU2025gradulate/peoples/"},{label:"SHOWROOM",href:"/TU2025gradulate/showroom/"},{label:"GUESTBOOK",href:"/TU2025gradulate/guestbook/"},{label:"CREDITS",href:"/TU2025gradulate/credits/"}],copyright:["ⓒ 2025 TECH UNIV KOREA. ALL RIGHTS RESERVED.","TUKOREA DESIGN ENGINEERING 20TH GRADUATION EXHIBITION"],social:{youtube:{href:"https://youtube.com/",label:"YouTube"},instagram:{href:"https://instagram.com/",label:"Instagram"}},sidePadding:350,maxWidth:1220})]})}function gN({setHeaderMode:n}){return kt.useEffect(()=>{n(pe.GRADIENT)},[n]),v.jsx(KA,{})}function yN({setHeaderMode:n}){return kt.useEffect(()=>{n(pe.GRADIENT)},[n]),v.jsx(A4,{})}function vN({setHeaderMode:n}){return kt.useEffect(()=>{n(pe.GRADIENT)},[n]),v.jsx(XI,{})}function xN({setHeaderMode:n}){return kt.useEffect(()=>{n(pe.GRADIENT_DARK)},[n]),v.jsx(gD,{})}function _N({setHeaderMode:n}){return kt.useEffect(()=>{n(pe.DARK)},[n]),v.jsx(x5,{})}function EN({setHeaderMode:n}){return kt.useEffect(()=>{n(pe.LIGHT)},[n]),v.jsx(lN,{})}function bN(){const[n,t]=q.useState(pe.GRADIENT);return v.jsxs(Mw,{basename:"/TU2025gradulate/",children:[v.jsx(pN,{}),v.jsx(cw,{children:v.jsxs(Zi,{element:v.jsx(mN,{headerMode:n,setHeaderMode:t}),children:[v.jsx(Zi,{index:!0,element:v.jsx(xN,{setHeaderMode:t})}),v.jsx(Zi,{path:"projects/",element:v.jsx(vN,{setHeaderMode:t})}),v.jsx(Zi,{path:"peoples/",element:v.jsx(yN,{setHeaderMode:t})}),v.jsx(Zi,{path:"guestbook/",element:v.jsx(_N,{setHeaderMode:t})}),v.jsx(Zi,{path:"work/:pid",element:v.jsx(EN,{setHeaderMode:t})}),v.jsx(Zi,{path:"credits/",element:v.jsx(gN,{setHeaderMode:t})}),v.jsx(Zi,{path:"*",element:v.jsx(ow,{to:"/",replace:!0})})]})})]})}const Qx=typeof document<"u"?document.getElementById("root"):null;Qx&&dN.createRoot(Qx).render(v.jsx(bN,{}));
