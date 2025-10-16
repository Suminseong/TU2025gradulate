(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function r(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(o){if(o.ep)return;o.ep=!0;const u=r(o);fetch(o.href,u)}})();function Xx(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var np={exports:{}},Rl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O1;function fT(){if(O1)return Rl;O1=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(a,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:i,type:a,key:f,ref:o!==void 0?o:null,props:u}}return Rl.Fragment=t,Rl.jsx=r,Rl.jsxs=r,Rl}var V1;function dT(){return V1||(V1=1,np.exports=fT()),np.exports}var v=dT(),ip={exports:{}},It={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k1;function pT(){if(k1)return It;k1=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),b=Symbol.iterator;function S(M){return M===null||typeof M!="object"?null:(M=b&&M[b]||M["@@iterator"],typeof M=="function"?M:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,F={};function P(M,rt,ct){this.props=M,this.context=rt,this.refs=F,this.updater=ct||I}P.prototype.isReactComponent={},P.prototype.setState=function(M,rt){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,rt,"setState")},P.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function X(){}X.prototype=P.prototype;function Q(M,rt,ct){this.props=M,this.context=rt,this.refs=F,this.updater=ct||I}var Z=Q.prototype=new X;Z.constructor=Q,U(Z,P.prototype),Z.isPureReactComponent=!0;var lt=Array.isArray,J={H:null,A:null,T:null,S:null,V:null},ot=Object.prototype.hasOwnProperty;function j(M,rt,ct,ht,gt,jt){return ct=jt.ref,{$$typeof:i,type:M,key:rt,ref:ct!==void 0?ct:null,props:jt}}function R(M,rt){return j(M.type,rt,void 0,void 0,void 0,M.props)}function C(M){return typeof M=="object"&&M!==null&&M.$$typeof===i}function k(M){var rt={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(ct){return rt[ct]})}var O=/\/+/g;function z(M,rt){return typeof M=="object"&&M!==null&&M.key!=null?k(""+M.key):rt.toString(36)}function N(){}function ue(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status=="string"?M.then(N,N):(M.status="pending",M.then(function(rt){M.status==="pending"&&(M.status="fulfilled",M.value=rt)},function(rt){M.status==="pending"&&(M.status="rejected",M.reason=rt)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function ne(M,rt,ct,ht,gt){var jt=typeof M;(jt==="undefined"||jt==="boolean")&&(M=null);var xt=!1;if(M===null)xt=!0;else switch(jt){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(M.$$typeof){case i:case t:xt=!0;break;case _:return xt=M._init,ne(xt(M._payload),rt,ct,ht,gt)}}if(xt)return gt=gt(M),xt=ht===""?"."+z(M,0):ht,lt(gt)?(ct="",xt!=null&&(ct=xt.replace(O,"$&/")+"/"),ne(gt,rt,ct,"",function(De){return De})):gt!=null&&(C(gt)&&(gt=R(gt,ct+(gt.key==null||M&&M.key===gt.key?"":(""+gt.key).replace(O,"$&/")+"/")+xt)),rt.push(gt)),1;xt=0;var me=ht===""?".":ht+":";if(lt(M))for(var Lt=0;Lt<M.length;Lt++)ht=M[Lt],jt=me+z(ht,Lt),xt+=ne(ht,rt,ct,jt,gt);else if(Lt=S(M),typeof Lt=="function")for(M=Lt.call(M),Lt=0;!(ht=M.next()).done;)ht=ht.value,jt=me+z(ht,Lt++),xt+=ne(ht,rt,ct,jt,gt);else if(jt==="object"){if(typeof M.then=="function")return ne(ue(M),rt,ct,ht,gt);throw rt=String(M),Error("Objects are not valid as a React child (found: "+(rt==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":rt)+"). If you meant to render a collection of children, use an array instead.")}return xt}function tt(M,rt,ct){if(M==null)return M;var ht=[],gt=0;return ne(M,ht,"","",function(jt){return rt.call(ct,jt,gt++)}),ht}function ft(M){if(M._status===-1){var rt=M._result;rt=rt(),rt.then(function(ct){(M._status===0||M._status===-1)&&(M._status=1,M._result=ct)},function(ct){(M._status===0||M._status===-1)&&(M._status=2,M._result=ct)}),M._status===-1&&(M._status=0,M._result=rt)}if(M._status===1)return M._result.default;throw M._result}var yt=typeof reportError=="function"?reportError:function(M){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var rt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M=="object"&&M!==null&&typeof M.message=="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent(rt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",M);return}console.error(M)};function Ct(){}return It.Children={map:tt,forEach:function(M,rt,ct){tt(M,function(){rt.apply(this,arguments)},ct)},count:function(M){var rt=0;return tt(M,function(){rt++}),rt},toArray:function(M){return tt(M,function(rt){return rt})||[]},only:function(M){if(!C(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},It.Component=P,It.Fragment=r,It.Profiler=o,It.PureComponent=Q,It.StrictMode=a,It.Suspense=p,It.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,It.__COMPILER_RUNTIME={__proto__:null,c:function(M){return J.H.useMemoCache(M)}},It.cache=function(M){return function(){return M.apply(null,arguments)}},It.cloneElement=function(M,rt,ct){if(M==null)throw Error("The argument must be a React element, but you passed "+M+".");var ht=U({},M.props),gt=M.key,jt=void 0;if(rt!=null)for(xt in rt.ref!==void 0&&(jt=void 0),rt.key!==void 0&&(gt=""+rt.key),rt)!ot.call(rt,xt)||xt==="key"||xt==="__self"||xt==="__source"||xt==="ref"&&rt.ref===void 0||(ht[xt]=rt[xt]);var xt=arguments.length-2;if(xt===1)ht.children=ct;else if(1<xt){for(var me=Array(xt),Lt=0;Lt<xt;Lt++)me[Lt]=arguments[Lt+2];ht.children=me}return j(M.type,gt,void 0,void 0,jt,ht)},It.createContext=function(M){return M={$$typeof:f,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:u,_context:M},M},It.createElement=function(M,rt,ct){var ht,gt={},jt=null;if(rt!=null)for(ht in rt.key!==void 0&&(jt=""+rt.key),rt)ot.call(rt,ht)&&ht!=="key"&&ht!=="__self"&&ht!=="__source"&&(gt[ht]=rt[ht]);var xt=arguments.length-2;if(xt===1)gt.children=ct;else if(1<xt){for(var me=Array(xt),Lt=0;Lt<xt;Lt++)me[Lt]=arguments[Lt+2];gt.children=me}if(M&&M.defaultProps)for(ht in xt=M.defaultProps,xt)gt[ht]===void 0&&(gt[ht]=xt[ht]);return j(M,jt,void 0,void 0,null,gt)},It.createRef=function(){return{current:null}},It.forwardRef=function(M){return{$$typeof:m,render:M}},It.isValidElement=C,It.lazy=function(M){return{$$typeof:_,_payload:{_status:-1,_result:M},_init:ft}},It.memo=function(M,rt){return{$$typeof:g,type:M,compare:rt===void 0?null:rt}},It.startTransition=function(M){var rt=J.T,ct={};J.T=ct;try{var ht=M(),gt=J.S;gt!==null&&gt(ct,ht),typeof ht=="object"&&ht!==null&&typeof ht.then=="function"&&ht.then(Ct,yt)}catch(jt){yt(jt)}finally{J.T=rt}},It.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},It.use=function(M){return J.H.use(M)},It.useActionState=function(M,rt,ct){return J.H.useActionState(M,rt,ct)},It.useCallback=function(M,rt){return J.H.useCallback(M,rt)},It.useContext=function(M){return J.H.useContext(M)},It.useDebugValue=function(){},It.useDeferredValue=function(M,rt){return J.H.useDeferredValue(M,rt)},It.useEffect=function(M,rt,ct){var ht=J.H;if(typeof ct=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ht.useEffect(M,rt)},It.useId=function(){return J.H.useId()},It.useImperativeHandle=function(M,rt,ct){return J.H.useImperativeHandle(M,rt,ct)},It.useInsertionEffect=function(M,rt){return J.H.useInsertionEffect(M,rt)},It.useLayoutEffect=function(M,rt){return J.H.useLayoutEffect(M,rt)},It.useMemo=function(M,rt){return J.H.useMemo(M,rt)},It.useOptimistic=function(M,rt){return J.H.useOptimistic(M,rt)},It.useReducer=function(M,rt,ct){return J.H.useReducer(M,rt,ct)},It.useRef=function(M){return J.H.useRef(M)},It.useState=function(M){return J.H.useState(M)},It.useSyncExternalStore=function(M,rt,ct){return J.H.useSyncExternalStore(M,rt,ct)},It.useTransition=function(){return J.H.useTransition()},It.version="19.1.1",It}var U1;function ym(){return U1||(U1=1,ip.exports=pT()),ip.exports}var H=ym();const kt=Xx(H);/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var P1="popstate";function mT(i={}){function t(a,o){let{pathname:u,search:f,hash:m}=a.location;return Vp("",{pathname:u,search:f,hash:m},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(a,o){return typeof o=="string"?o:Hl(o)}return yT(t,r,null,i)}function he(i,t){if(i===!1||i===null||typeof i>"u")throw new Error(t)}function ii(i,t){if(!i){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function gT(){return Math.random().toString(36).substring(2,10)}function L1(i,t){return{usr:i.state,key:i.key,idx:t}}function Vp(i,t,r=null,a){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof t=="string"?co(t):t,state:r,key:t&&t.key||a||gT()}}function Hl({pathname:i="/",search:t="",hash:r=""}){return t&&t!=="?"&&(i+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(i+=r.charAt(0)==="#"?r:"#"+r),i}function co(i){let t={};if(i){let r=i.indexOf("#");r>=0&&(t.hash=i.substring(r),i=i.substring(0,r));let a=i.indexOf("?");a>=0&&(t.search=i.substring(a),i=i.substring(0,a)),i&&(t.pathname=i)}return t}function yT(i,t,r,a={}){let{window:o=document.defaultView,v5Compat:u=!1}=a,f=o.history,m="POP",p=null,g=_();g==null&&(g=0,f.replaceState({...f.state,idx:g},""));function _(){return(f.state||{idx:null}).idx}function b(){m="POP";let P=_(),X=P==null?null:P-g;g=P,p&&p({action:m,location:F.location,delta:X})}function S(P,X){m="PUSH";let Q=Vp(F.location,P,X);g=_()+1;let Z=L1(Q,g),lt=F.createHref(Q);try{f.pushState(Z,"",lt)}catch(J){if(J instanceof DOMException&&J.name==="DataCloneError")throw J;o.location.assign(lt)}u&&p&&p({action:m,location:F.location,delta:1})}function I(P,X){m="REPLACE";let Q=Vp(F.location,P,X);g=_();let Z=L1(Q,g),lt=F.createHref(Q);f.replaceState(Z,"",lt),u&&p&&p({action:m,location:F.location,delta:0})}function U(P){return vT(P)}let F={get action(){return m},get location(){return i(o,f)},listen(P){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(P1,b),p=P,()=>{o.removeEventListener(P1,b),p=null}},createHref(P){return t(o,P)},createURL:U,encodeLocation(P){let X=U(P);return{pathname:X.pathname,search:X.search,hash:X.hash}},push:S,replace:I,go(P){return f.go(P)}};return F}function vT(i,t=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),he(r,"No window.location.(origin|href) available to create URL");let a=typeof i=="string"?i:Hl(i);return a=a.replace(/ $/,"%20"),!t&&a.startsWith("//")&&(a=r+a),new URL(a,r)}function Wx(i,t,r="/"){return xT(i,t,r,!1)}function xT(i,t,r,a){let o=typeof t=="string"?co(t):t,u=ir(o.pathname||"/",r);if(u==null)return null;let f=Zx(i);_T(f);let m=null;for(let p=0;m==null&&p<f.length;++p){let g=DT(u);m=jT(f[p],g,a)}return m}function Zx(i,t=[],r=[],a="",o=!1){let u=(f,m,p=o,g)=>{let _={relativePath:g===void 0?f.path||"":g,caseSensitive:f.caseSensitive===!0,childrenIndex:m,route:f};if(_.relativePath.startsWith("/")){if(!_.relativePath.startsWith(a)&&p)return;he(_.relativePath.startsWith(a),`Absolute route path "${_.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),_.relativePath=_.relativePath.slice(a.length)}let b=tr([a,_.relativePath]),S=r.concat(_);f.children&&f.children.length>0&&(he(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${b}".`),Zx(f.children,t,S,b,p)),!(f.path==null&&!f.index)&&t.push({path:b,score:RT(b,f.index),routesMeta:S})};return i.forEach((f,m)=>{if(f.path===""||!f.path?.includes("?"))u(f,m);else for(let p of Jx(f.path))u(f,m,!0,p)}),t}function Jx(i){let t=i.split("/");if(t.length===0)return[];let[r,...a]=t,o=r.endsWith("?"),u=r.replace(/\?$/,"");if(a.length===0)return o?[u,""]:[u];let f=Jx(a.join("/")),m=[];return m.push(...f.map(p=>p===""?u:[u,p].join("/"))),o&&m.push(...f),m.map(p=>i.startsWith("/")&&p===""?"/":p)}function _T(i){i.sort((t,r)=>t.score!==r.score?r.score-t.score:CT(t.routesMeta.map(a=>a.childrenIndex),r.routesMeta.map(a=>a.childrenIndex)))}var ET=/^:[\w-]+$/,bT=3,TT=2,wT=1,ST=10,AT=-2,z1=i=>i==="*";function RT(i,t){let r=i.split("/"),a=r.length;return r.some(z1)&&(a+=AT),t&&(a+=TT),r.filter(o=>!z1(o)).reduce((o,u)=>o+(ET.test(u)?bT:u===""?wT:ST),a)}function CT(i,t){return i.length===t.length&&i.slice(0,-1).every((a,o)=>a===t[o])?i[i.length-1]-t[t.length-1]:0}function jT(i,t,r=!1){let{routesMeta:a}=i,o={},u="/",f=[];for(let m=0;m<a.length;++m){let p=a[m],g=m===a.length-1,_=u==="/"?t:t.slice(u.length)||"/",b=oh({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},_),S=p.route;if(!b&&g&&r&&!a[a.length-1].route.index&&(b=oh({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},_)),!b)return null;Object.assign(o,b.params),f.push({params:o,pathname:tr([u,b.pathname]),pathnameBase:VT(tr([u,b.pathnameBase])),route:S}),b.pathnameBase!=="/"&&(u=tr([u,b.pathnameBase]))}return f}function oh(i,t){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[r,a]=IT(i.path,i.caseSensitive,i.end),o=t.match(r);if(!o)return null;let u=o[0],f=u.replace(/(.)\/+$/,"$1"),m=o.slice(1);return{params:a.reduce((g,{paramName:_,isOptional:b},S)=>{if(_==="*"){let U=m[S]||"";f=u.slice(0,u.length-U.length).replace(/(.)\/+$/,"$1")}const I=m[S];return b&&!I?g[_]=void 0:g[_]=(I||"").replace(/%2F/g,"/"),g},{}),pathname:u,pathnameBase:f,pattern:i}}function IT(i,t=!1,r=!0){ii(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let a=[],o="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,m,p)=>(a.push({paramName:m,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(a.push({paramName:"*"}),o+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":i!==""&&i!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),a]}function DT(i){try{return i.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ii(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),i}}function ir(i,t){if(t==="/")return i;if(!i.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,a=i.charAt(r);return a&&a!=="/"?null:i.slice(r)||"/"}function NT(i,t="/"){let{pathname:r,search:a="",hash:o=""}=typeof i=="string"?co(i):i;return{pathname:r?r.startsWith("/")?r:MT(r,t):t,search:kT(a),hash:UT(o)}}function MT(i,t){let r=t.replace(/\/+$/,"").split("/");return i.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function rp(i,t,r,a){return`Cannot include a '${i}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function OT(i){return i.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function vm(i){let t=OT(i);return t.map((r,a)=>a===t.length-1?r.pathname:r.pathnameBase)}function xm(i,t,r,a=!1){let o;typeof i=="string"?o=co(i):(o={...i},he(!o.pathname||!o.pathname.includes("?"),rp("?","pathname","search",o)),he(!o.pathname||!o.pathname.includes("#"),rp("#","pathname","hash",o)),he(!o.search||!o.search.includes("#"),rp("#","search","hash",o)));let u=i===""||o.pathname==="",f=u?"/":o.pathname,m;if(f==null)m=r;else{let b=t.length-1;if(!a&&f.startsWith("..")){let S=f.split("/");for(;S[0]==="..";)S.shift(),b-=1;o.pathname=S.join("/")}m=b>=0?t[b]:"/"}let p=NT(o,m),g=f&&f!=="/"&&f.endsWith("/"),_=(u||f===".")&&r.endsWith("/");return!p.pathname.endsWith("/")&&(g||_)&&(p.pathname+="/"),p}var tr=i=>i.join("/").replace(/\/\/+/g,"/"),VT=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),kT=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,UT=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function PT(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var t_=["POST","PUT","PATCH","DELETE"];new Set(t_);var LT=["GET",...t_];new Set(LT);var ho=H.createContext(null);ho.displayName="DataRouter";var Ch=H.createContext(null);Ch.displayName="DataRouterState";H.createContext(!1);var e_=H.createContext({isTransitioning:!1});e_.displayName="ViewTransition";var zT=H.createContext(new Map);zT.displayName="Fetchers";var BT=H.createContext(null);BT.displayName="Await";var ri=H.createContext(null);ri.displayName="Navigation";var fo=H.createContext(null);fo.displayName="Location";var Kn=H.createContext({outlet:null,matches:[],isDataRoute:!1});Kn.displayName="Route";var _m=H.createContext(null);_m.displayName="RouteError";function $T(i,{relative:t}={}){he(po(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:a}=H.useContext(ri),{hash:o,pathname:u,search:f}=ru(i,{relative:t}),m=u;return r!=="/"&&(m=u==="/"?r:tr([r,u])),a.createHref({pathname:m,search:f,hash:o})}function po(){return H.useContext(fo)!=null}function Ci(){return he(po(),"useLocation() may be used only in the context of a <Router> component."),H.useContext(fo).location}function FT(){return H.useContext(fo).navigationType}var n_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function i_(i){H.useContext(ri).static||H.useLayoutEffect(i)}function Em(){let{isDataRoute:i}=H.useContext(Kn);return i?aw():KT()}function KT(){he(po(),"useNavigate() may be used only in the context of a <Router> component.");let i=H.useContext(ho),{basename:t,navigator:r}=H.useContext(ri),{matches:a}=H.useContext(Kn),{pathname:o}=Ci(),u=JSON.stringify(vm(a)),f=H.useRef(!1);return i_(()=>{f.current=!0}),H.useCallback((p,g={})=>{if(ii(f.current,n_),!f.current)return;if(typeof p=="number"){r.go(p);return}let _=xm(p,JSON.parse(u),o,g.relative==="path");i==null&&t!=="/"&&(_.pathname=_.pathname==="/"?t:tr([t,_.pathname])),(g.replace?r.replace:r.push)(_,g.state,g)},[t,r,u,o,i])}var HT=H.createContext(null);function qT(i){let t=H.useContext(Kn).outlet;return t&&H.createElement(HT.Provider,{value:i},t)}function GT(){let{matches:i}=H.useContext(Kn),t=i[i.length-1];return t?t.params:{}}function ru(i,{relative:t}={}){let{matches:r}=H.useContext(Kn),{pathname:a}=Ci(),o=JSON.stringify(vm(r));return H.useMemo(()=>xm(i,JSON.parse(o),a,t==="path"),[i,o,a,t])}function YT(i,t){return r_(i,t)}function r_(i,t,r,a,o){he(po(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=H.useContext(ri),{matches:f}=H.useContext(Kn),m=f[f.length-1],p=m?m.params:{},g=m?m.pathname:"/",_=m?m.pathnameBase:"/",b=m&&m.route;{let Q=b&&b.path||"";a_(g,!b||Q.endsWith("*")||Q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${Q==="/"?"*":`${Q}/*`}">.`)}let S=Ci(),I;if(t){let Q=typeof t=="string"?co(t):t;he(_==="/"||Q.pathname?.startsWith(_),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${Q.pathname}" was given in the \`location\` prop.`),I=Q}else I=S;let U=I.pathname||"/",F=U;if(_!=="/"){let Q=_.replace(/^\//,"").split("/");F="/"+U.replace(/^\//,"").split("/").slice(Q.length).join("/")}let P=Wx(i,{pathname:F});ii(b||P!=null,`No routes matched location "${I.pathname}${I.search}${I.hash}" `),ii(P==null||P[P.length-1].route.element!==void 0||P[P.length-1].route.Component!==void 0||P[P.length-1].route.lazy!==void 0,`Matched leaf route at location "${I.pathname}${I.search}${I.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let X=JT(P&&P.map(Q=>Object.assign({},Q,{params:Object.assign({},p,Q.params),pathname:tr([_,u.encodeLocation?u.encodeLocation(Q.pathname).pathname:Q.pathname]),pathnameBase:Q.pathnameBase==="/"?_:tr([_,u.encodeLocation?u.encodeLocation(Q.pathnameBase).pathname:Q.pathnameBase])})),f,r,a,o);return t&&X?H.createElement(fo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...I},navigationType:"POP"}},X):X}function QT(){let i=rw(),t=PT(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),r=i instanceof Error?i.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},u={padding:"2px 4px",backgroundColor:a},f=null;return console.error("Error handled by React Router default ErrorBoundary:",i),f=H.createElement(H.Fragment,null,H.createElement("p",null,"💿 Hey developer 👋"),H.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",H.createElement("code",{style:u},"ErrorBoundary")," or"," ",H.createElement("code",{style:u},"errorElement")," prop on your route.")),H.createElement(H.Fragment,null,H.createElement("h2",null,"Unexpected Application Error!"),H.createElement("h3",{style:{fontStyle:"italic"}},t),r?H.createElement("pre",{style:o},r):null,f)}var XT=H.createElement(QT,null),WT=class extends H.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,t){return t.location!==i.location||t.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:t.error,location:t.location,revalidation:i.revalidation||t.revalidation}}componentDidCatch(i,t){this.props.unstable_onError?this.props.unstable_onError(i,t):console.error("React Router caught the following error during render",i)}render(){return this.state.error!==void 0?H.createElement(Kn.Provider,{value:this.props.routeContext},H.createElement(_m.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ZT({routeContext:i,match:t,children:r}){let a=H.useContext(ho);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),H.createElement(Kn.Provider,{value:i},r)}function JT(i,t=[],r=null,a=null,o=null){if(i==null){if(!r)return null;if(r.errors)i=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)i=r.matches;else return null}let u=i,f=r?.errors;if(f!=null){let g=u.findIndex(_=>_.route.id&&f?.[_.route.id]!==void 0);he(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),u=u.slice(0,Math.min(u.length,g+1))}let m=!1,p=-1;if(r)for(let g=0;g<u.length;g++){let _=u[g];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(p=g),_.route.id){let{loaderData:b,errors:S}=r,I=_.route.loader&&!b.hasOwnProperty(_.route.id)&&(!S||S[_.route.id]===void 0);if(_.route.lazy||I){m=!0,p>=0?u=u.slice(0,p+1):u=[u[0]];break}}}return u.reduceRight((g,_,b)=>{let S,I=!1,U=null,F=null;r&&(S=f&&_.route.id?f[_.route.id]:void 0,U=_.route.errorElement||XT,m&&(p<0&&b===0?(a_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),I=!0,F=null):p===b&&(I=!0,F=_.route.hydrateFallbackElement||null)));let P=t.concat(u.slice(0,b+1)),X=()=>{let Q;return S?Q=U:I?Q=F:_.route.Component?Q=H.createElement(_.route.Component,null):_.route.element?Q=_.route.element:Q=g,H.createElement(ZT,{match:_,routeContext:{outlet:g,matches:P,isDataRoute:r!=null},children:Q})};return r&&(_.route.ErrorBoundary||_.route.errorElement||b===0)?H.createElement(WT,{location:r.location,revalidation:r.revalidation,component:U,error:S,children:X(),routeContext:{outlet:null,matches:P,isDataRoute:!0},unstable_onError:a}):X()},null)}function bm(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function tw(i){let t=H.useContext(ho);return he(t,bm(i)),t}function ew(i){let t=H.useContext(Ch);return he(t,bm(i)),t}function nw(i){let t=H.useContext(Kn);return he(t,bm(i)),t}function Tm(i){let t=nw(i),r=t.matches[t.matches.length-1];return he(r.route.id,`${i} can only be used on routes that contain a unique "id"`),r.route.id}function iw(){return Tm("useRouteId")}function rw(){let i=H.useContext(_m),t=ew("useRouteError"),r=Tm("useRouteError");return i!==void 0?i:t.errors?.[r]}function aw(){let{router:i}=tw("useNavigate"),t=Tm("useNavigate"),r=H.useRef(!1);return i_(()=>{r.current=!0}),H.useCallback(async(o,u={})=>{ii(r.current,n_),r.current&&(typeof o=="number"?i.navigate(o):await i.navigate(o,{fromRouteId:t,...u}))},[i,t])}var B1={};function a_(i,t,r){!t&&!B1[i]&&(B1[i]=!0,ii(!1,r))}H.memo(sw);function sw({routes:i,future:t,state:r,unstable_onError:a}){return r_(i,void 0,r,a,t)}function ow({to:i,replace:t,state:r,relative:a}){he(po(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=H.useContext(ri);ii(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=H.useContext(Kn),{pathname:f}=Ci(),m=Em(),p=xm(i,vm(u),f,a==="path"),g=JSON.stringify(p);return H.useEffect(()=>{m(JSON.parse(g),{replace:t,state:r,relative:a})},[m,g,a,t,r]),null}function lw(i){return qT(i.context)}function Zi(i){he(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function uw({basename:i="/",children:t=null,location:r,navigationType:a="POP",navigator:o,static:u=!1}){he(!po(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=i.replace(/^\/*/,"/"),m=H.useMemo(()=>({basename:f,navigator:o,static:u,future:{}}),[f,o,u]);typeof r=="string"&&(r=co(r));let{pathname:p="/",search:g="",hash:_="",state:b=null,key:S="default"}=r,I=H.useMemo(()=>{let U=ir(p,f);return U==null?null:{location:{pathname:U,search:g,hash:_,state:b,key:S},navigationType:a}},[f,p,g,_,b,S,a]);return ii(I!=null,`<Router basename="${f}"> is not able to match the URL "${p}${g}${_}" because it does not start with the basename, so the <Router> won't render anything.`),I==null?null:H.createElement(ri.Provider,{value:m},H.createElement(fo.Provider,{children:t,value:I}))}function cw({children:i,location:t}){return YT(kp(i),t)}function kp(i,t=[]){let r=[];return H.Children.forEach(i,(a,o)=>{if(!H.isValidElement(a))return;let u=[...t,o];if(a.type===H.Fragment){r.push.apply(r,kp(a.props.children,u));return}he(a.type===Zi,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),he(!a.props.index||!a.props.children,"An index route cannot have child routes.");let f={id:a.props.id||u.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(f.children=kp(a.props.children,u)),r.push(f)}),r}var Gc="get",Yc="application/x-www-form-urlencoded";function jh(i){return i!=null&&typeof i.tagName=="string"}function hw(i){return jh(i)&&i.tagName.toLowerCase()==="button"}function fw(i){return jh(i)&&i.tagName.toLowerCase()==="form"}function dw(i){return jh(i)&&i.tagName.toLowerCase()==="input"}function pw(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function mw(i,t){return i.button===0&&(!t||t==="_self")&&!pw(i)}var Oc=null;function gw(){if(Oc===null)try{new FormData(document.createElement("form"),0),Oc=!1}catch{Oc=!0}return Oc}var yw=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ap(i){return i!=null&&!yw.has(i)?(ii(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Yc}"`),null):i}function vw(i,t){let r,a,o,u,f;if(fw(i)){let m=i.getAttribute("action");a=m?ir(m,t):null,r=i.getAttribute("method")||Gc,o=ap(i.getAttribute("enctype"))||Yc,u=new FormData(i)}else if(hw(i)||dw(i)&&(i.type==="submit"||i.type==="image")){let m=i.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=i.getAttribute("formaction")||m.getAttribute("action");if(a=p?ir(p,t):null,r=i.getAttribute("formmethod")||m.getAttribute("method")||Gc,o=ap(i.getAttribute("formenctype"))||ap(m.getAttribute("enctype"))||Yc,u=new FormData(m,i),!gw()){let{name:g,type:_,value:b}=i;if(_==="image"){let S=g?`${g}.`:"";u.append(`${S}x`,"0"),u.append(`${S}y`,"0")}else g&&u.append(g,b)}}else{if(jh(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Gc,a=null,o=Yc,f=i}return u&&o==="text/plain"&&(f=u,u=void 0),{action:a,method:r.toLowerCase(),encType:o,formData:u,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function wm(i,t){if(i===!1||i===null||typeof i>"u")throw new Error(t)}function xw(i,t,r){let a=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return a.pathname==="/"?a.pathname=`_root.${r}`:t&&ir(a.pathname,t)==="/"?a.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${r}`,a}async function _w(i,t){if(i.id in t)return t[i.id];try{let r=await import(i.module);return t[i.id]=r,r}catch(r){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ew(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function bw(i,t,r){let a=await Promise.all(i.map(async o=>{let u=t.routes[o.route.id];if(u){let f=await _w(u,r);return f.links?f.links():[]}return[]}));return Aw(a.flat(1).filter(Ew).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function $1(i,t,r,a,o,u){let f=(p,g)=>r[g]?p.route.id!==r[g].route.id:!0,m=(p,g)=>r[g].pathname!==p.pathname||r[g].route.path?.endsWith("*")&&r[g].params["*"]!==p.params["*"];return u==="assets"?t.filter((p,g)=>f(p,g)||m(p,g)):u==="data"?t.filter((p,g)=>{let _=a.routes[p.route.id];if(!_||!_.hasLoader)return!1;if(f(p,g)||m(p,g))return!0;if(p.route.shouldRevalidate){let b=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:r[0]?.params||{},nextUrl:new URL(i,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof b=="boolean")return b}return!0}):[]}function Tw(i,t,{includeHydrateFallback:r}={}){return ww(i.map(a=>{let o=t.routes[a.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),r&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function ww(i){return[...new Set(i)]}function Sw(i){let t={},r=Object.keys(i).sort();for(let a of r)t[a]=i[a];return t}function Aw(i,t){let r=new Set;return new Set(t),i.reduce((a,o)=>{let u=JSON.stringify(Sw(o));return r.has(u)||(r.add(u),a.push({key:u,link:o})),a},[])}function s_(){let i=H.useContext(ho);return wm(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function Rw(){let i=H.useContext(Ch);return wm(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var Sm=H.createContext(void 0);Sm.displayName="FrameworkContext";function o_(){let i=H.useContext(Sm);return wm(i,"You must render this element inside a <HydratedRouter> element"),i}function Cw(i,t){let r=H.useContext(Sm),[a,o]=H.useState(!1),[u,f]=H.useState(!1),{onFocus:m,onBlur:p,onMouseEnter:g,onMouseLeave:_,onTouchStart:b}=t,S=H.useRef(null);H.useEffect(()=>{if(i==="render"&&f(!0),i==="viewport"){let F=X=>{X.forEach(Q=>{f(Q.isIntersecting)})},P=new IntersectionObserver(F,{threshold:.5});return S.current&&P.observe(S.current),()=>{P.disconnect()}}},[i]),H.useEffect(()=>{if(a){let F=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(F)}}},[a]);let I=()=>{o(!0)},U=()=>{o(!1),f(!1)};return r?i!=="intent"?[u,S,{}]:[u,S,{onFocus:Cl(m,I),onBlur:Cl(p,U),onMouseEnter:Cl(g,I),onMouseLeave:Cl(_,U),onTouchStart:Cl(b,I)}]:[!1,S,{}]}function Cl(i,t){return r=>{i&&i(r),r.defaultPrevented||t(r)}}function jw({page:i,...t}){let{router:r}=s_(),a=H.useMemo(()=>Wx(r.routes,i,r.basename),[r.routes,i,r.basename]);return a?H.createElement(Dw,{page:i,matches:a,...t}):null}function Iw(i){let{manifest:t,routeModules:r}=o_(),[a,o]=H.useState([]);return H.useEffect(()=>{let u=!1;return bw(i,t,r).then(f=>{u||o(f)}),()=>{u=!0}},[i,t,r]),a}function Dw({page:i,matches:t,...r}){let a=Ci(),{manifest:o,routeModules:u}=o_(),{basename:f}=s_(),{loaderData:m,matches:p}=Rw(),g=H.useMemo(()=>$1(i,t,p,o,a,"data"),[i,t,p,o,a]),_=H.useMemo(()=>$1(i,t,p,o,a,"assets"),[i,t,p,o,a]),b=H.useMemo(()=>{if(i===a.pathname+a.search+a.hash)return[];let U=new Set,F=!1;if(t.forEach(X=>{let Q=o.routes[X.route.id];!Q||!Q.hasLoader||(!g.some(Z=>Z.route.id===X.route.id)&&X.route.id in m&&u[X.route.id]?.shouldRevalidate||Q.hasClientLoader?F=!0:U.add(X.route.id))}),U.size===0)return[];let P=xw(i,f,"data");return F&&U.size>0&&P.searchParams.set("_routes",t.filter(X=>U.has(X.route.id)).map(X=>X.route.id).join(",")),[P.pathname+P.search]},[f,m,a,o,g,t,i,u]),S=H.useMemo(()=>Tw(_,o),[_,o]),I=Iw(_);return H.createElement(H.Fragment,null,b.map(U=>H.createElement("link",{key:U,rel:"prefetch",as:"fetch",href:U,...r})),S.map(U=>H.createElement("link",{key:U,rel:"modulepreload",href:U,...r})),I.map(({key:U,link:F})=>H.createElement("link",{key:U,nonce:r.nonce,...F})))}function Nw(...i){return t=>{i.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var l_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{l_&&(window.__reactRouterVersion="7.9.1")}catch{}function Mw({basename:i,children:t,window:r}){let a=H.useRef();a.current==null&&(a.current=mT({window:r,v5Compat:!0}));let o=a.current,[u,f]=H.useState({action:o.action,location:o.location}),m=H.useCallback(p=>{H.startTransition(()=>f(p))},[f]);return H.useLayoutEffect(()=>o.listen(m),[o,m]),H.createElement(uw,{basename:i,children:t,location:u.location,navigationType:u.action,navigator:o})}var u_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mo=H.forwardRef(function({onClick:t,discover:r="render",prefetch:a="none",relative:o,reloadDocument:u,replace:f,state:m,target:p,to:g,preventScrollReset:_,viewTransition:b,...S},I){let{basename:U}=H.useContext(ri),F=typeof g=="string"&&u_.test(g),P,X=!1;if(typeof g=="string"&&F&&(P=g,l_))try{let C=new URL(window.location.href),k=g.startsWith("//")?new URL(C.protocol+g):new URL(g),O=ir(k.pathname,U);k.origin===C.origin&&O!=null?g=O+k.search+k.hash:X=!0}catch{ii(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Q=$T(g,{relative:o}),[Z,lt,J]=Cw(a,S),ot=Uw(g,{replace:f,state:m,target:p,preventScrollReset:_,relative:o,viewTransition:b});function j(C){t&&t(C),C.defaultPrevented||ot(C)}let R=H.createElement("a",{...S,...J,href:P||Q,onClick:X||u?t:j,ref:Nw(I,lt),target:p,"data-discover":!F&&r==="render"?"true":void 0});return Z&&!F?H.createElement(H.Fragment,null,R,H.createElement(jw,{page:Q})):R});mo.displayName="Link";var Ow=H.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:a="",end:o=!1,style:u,to:f,viewTransition:m,children:p,...g},_){let b=ru(f,{relative:g.relative}),S=Ci(),I=H.useContext(Ch),{navigator:U,basename:F}=H.useContext(ri),P=I!=null&&$w(b)&&m===!0,X=U.encodeLocation?U.encodeLocation(b).pathname:b.pathname,Q=S.pathname,Z=I&&I.navigation&&I.navigation.location?I.navigation.location.pathname:null;r||(Q=Q.toLowerCase(),Z=Z?Z.toLowerCase():null,X=X.toLowerCase()),Z&&F&&(Z=ir(Z,F)||Z);const lt=X!=="/"&&X.endsWith("/")?X.length-1:X.length;let J=Q===X||!o&&Q.startsWith(X)&&Q.charAt(lt)==="/",ot=Z!=null&&(Z===X||!o&&Z.startsWith(X)&&Z.charAt(X.length)==="/"),j={isActive:J,isPending:ot,isTransitioning:P},R=J?t:void 0,C;typeof a=="function"?C=a(j):C=[a,J?"active":null,ot?"pending":null,P?"transitioning":null].filter(Boolean).join(" ");let k=typeof u=="function"?u(j):u;return H.createElement(mo,{...g,"aria-current":R,className:C,ref:_,style:k,to:f,viewTransition:m},typeof p=="function"?p(j):p)});Ow.displayName="NavLink";var Vw=H.forwardRef(({discover:i="render",fetcherKey:t,navigate:r,reloadDocument:a,replace:o,state:u,method:f=Gc,action:m,onSubmit:p,relative:g,preventScrollReset:_,viewTransition:b,...S},I)=>{let U=zw(),F=Bw(m,{relative:g}),P=f.toLowerCase()==="get"?"get":"post",X=typeof m=="string"&&u_.test(m),Q=Z=>{if(p&&p(Z),Z.defaultPrevented)return;Z.preventDefault();let lt=Z.nativeEvent.submitter,J=lt?.getAttribute("formmethod")||f;U(lt||Z.currentTarget,{fetcherKey:t,method:J,navigate:r,replace:o,state:u,relative:g,preventScrollReset:_,viewTransition:b})};return H.createElement("form",{ref:I,method:P,action:F,onSubmit:a?p:Q,...S,"data-discover":!X&&i==="render"?"true":void 0})});Vw.displayName="Form";function kw(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function c_(i){let t=H.useContext(ho);return he(t,kw(i)),t}function Uw(i,{target:t,replace:r,state:a,preventScrollReset:o,relative:u,viewTransition:f}={}){let m=Em(),p=Ci(),g=ru(i,{relative:u});return H.useCallback(_=>{if(mw(_,t)){_.preventDefault();let b=r!==void 0?r:Hl(p)===Hl(g);m(i,{replace:b,state:a,preventScrollReset:o,relative:u,viewTransition:f})}},[p,m,g,r,a,t,i,o,u,f])}var Pw=0,Lw=()=>`__${String(++Pw)}__`;function zw(){let{router:i}=c_("useSubmit"),{basename:t}=H.useContext(ri),r=iw();return H.useCallback(async(a,o={})=>{let{action:u,method:f,encType:m,formData:p,body:g}=vw(a,t);if(o.navigate===!1){let _=o.fetcherKey||Lw();await i.fetch(_,r,o.action||u,{preventScrollReset:o.preventScrollReset,formData:p,body:g,formMethod:o.method||f,formEncType:o.encType||m,flushSync:o.flushSync})}else await i.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:p,body:g,formMethod:o.method||f,formEncType:o.encType||m,replace:o.replace,state:o.state,fromRouteId:r,flushSync:o.flushSync,viewTransition:o.viewTransition})},[i,t,r])}function Bw(i,{relative:t}={}){let{basename:r}=H.useContext(ri),a=H.useContext(Kn);he(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),u={...ru(i||".",{relative:t})},f=Ci();if(i==null){u.search=f.search;let m=new URLSearchParams(u.search),p=m.getAll("index");if(p.some(_=>_==="")){m.delete("index"),p.filter(b=>b).forEach(b=>m.append("index",b));let _=m.toString();u.search=_?`?${_}`:""}}return(!i||i===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(u.pathname=u.pathname==="/"?r:tr([r,u.pathname])),Hl(u)}function $w(i,{relative:t}={}){let r=H.useContext(e_);he(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=c_("useViewTransitionState"),o=ru(i,{relative:t});if(!r.isTransitioning)return!1;let u=ir(r.currentLocation.pathname,a)||r.currentLocation.pathname,f=ir(r.nextLocation.pathname,a)||r.nextLocation.pathname;return oh(o.pathname,f)!=null||oh(o.pathname,u)!=null}var sp={exports:{}},nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F1;function Fw(){if(F1)return nn;F1=1;var i=ym();function t(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)g+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var a={d:{f:r,r:function(){throw Error(t(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,g,_){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:b==null?null:""+b,children:p,containerInfo:g,implementation:_}}var f=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,nn.createPortal=function(p,g){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return u(p,g,null,_)},nn.flushSync=function(p){var g=f.T,_=a.p;try{if(f.T=null,a.p=2,p)return p()}finally{f.T=g,a.p=_,a.d.f()}},nn.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,a.d.C(p,g))},nn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},nn.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var _=g.as,b=m(_,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,I=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;_==="style"?a.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:b,integrity:S,fetchPriority:I}):_==="script"&&a.d.X(p,{crossOrigin:b,integrity:S,fetchPriority:I,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},nn.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var _=m(g.as,g.crossOrigin);a.d.M(p,{crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&a.d.M(p)},nn.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var _=g.as,b=m(_,g.crossOrigin);a.d.L(p,_,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},nn.preloadModule=function(p,g){if(typeof p=="string")if(g){var _=m(g.as,g.crossOrigin);a.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else a.d.m(p)},nn.requestFormReset=function(p){a.d.r(p)},nn.unstable_batchedUpdates=function(p,g){return p(g)},nn.useFormState=function(p,g,_){return f.H.useFormState(p,g,_)},nn.useFormStatus=function(){return f.H.useHostTransitionStatus()},nn.version="19.1.1",nn}var K1;function Kw(){if(K1)return sp.exports;K1=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),sp.exports=Fw(),sp.exports}var op={exports:{}},lp,H1;function Hw(){if(H1)return lp;H1=1;var i="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return lp=i,lp}var up,q1;function qw(){if(q1)return up;q1=1;var i=Hw();function t(){}function r(){}return r.resetWarningCache=t,up=function(){function a(f,m,p,g,_,b){if(b!==i){var S=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw S.name="Invariant Violation",S}}a.isRequired=a;function o(){return a}var u={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:o,element:a,elementType:a,instanceOf:o,node:a,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:r,resetWarningCache:t};return u.PropTypes=u,u},up}var G1;function Gw(){return G1||(G1=1,op.exports=qw()()),op.exports}var Yw=Gw();const W=Xx(Yw);var xn=function(){return xn=Object.assign||function(t){for(var r,a=1,o=arguments.length;a<o;a++){r=arguments[a];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(t[u]=r[u])}return t},xn.apply(this,arguments)};function lh(i,t,r){if(r||arguments.length===2)for(var a=0,o=t.length,u;a<o;a++)(u||!(a in t))&&(u||(u=Array.prototype.slice.call(t,0,a)),u[a]=t[a]);return i.concat(u||Array.prototype.slice.call(t))}var se="-ms-",kl="-moz-",qt="-webkit-",h_="comm",Ih="rule",Am="decl",Qw="@import",f_="@keyframes",Xw="@layer",d_=Math.abs,Rm=String.fromCharCode,Up=Object.assign;function Ww(i,t){return Ke(i,0)^45?(((t<<2^Ke(i,0))<<2^Ke(i,1))<<2^Ke(i,2))<<2^Ke(i,3):0}function p_(i){return i.trim()}function Ji(i,t){return(i=t.exec(i))?i[0]:i}function Dt(i,t,r){return i.replace(t,r)}function Qc(i,t,r){return i.indexOf(t,r)}function Ke(i,t){return i.charCodeAt(t)|0}function Js(i,t,r){return i.slice(t,r)}function _i(i){return i.length}function m_(i){return i.length}function Dl(i,t){return t.push(i),i}function Zw(i,t){return i.map(t).join("")}function Y1(i,t){return i.filter(function(r){return!Ji(r,t)})}var Dh=1,to=1,g_=0,Fn=0,Ce=0,go="";function Nh(i,t,r,a,o,u,f,m){return{value:i,root:t,parent:r,type:a,props:o,children:u,line:Dh,column:to,length:f,return:"",siblings:m}}function qr(i,t){return Up(Nh("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},t)}function Fs(i){for(;i.root;)i=qr(i.root,{children:[i]});Dl(i,i.siblings)}function Jw(){return Ce}function tS(){return Ce=Fn>0?Ke(go,--Fn):0,to--,Ce===10&&(to=1,Dh--),Ce}function ni(){return Ce=Fn<g_?Ke(go,Fn++):0,to++,Ce===10&&(to=1,Dh++),Ce}function Ga(){return Ke(go,Fn)}function Xc(){return Fn}function Mh(i,t){return Js(go,i,t)}function Pp(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function eS(i){return Dh=to=1,g_=_i(go=i),Fn=0,[]}function nS(i){return go="",i}function cp(i){return p_(Mh(Fn-1,Lp(i===91?i+2:i===40?i+1:i)))}function iS(i){for(;(Ce=Ga())&&Ce<33;)ni();return Pp(i)>2||Pp(Ce)>3?"":" "}function rS(i,t){for(;--t&&ni()&&!(Ce<48||Ce>102||Ce>57&&Ce<65||Ce>70&&Ce<97););return Mh(i,Xc()+(t<6&&Ga()==32&&ni()==32))}function Lp(i){for(;ni();)switch(Ce){case i:return Fn;case 34:case 39:i!==34&&i!==39&&Lp(Ce);break;case 40:i===41&&Lp(i);break;case 92:ni();break}return Fn}function aS(i,t){for(;ni()&&i+Ce!==57;)if(i+Ce===84&&Ga()===47)break;return"/*"+Mh(t,Fn-1)+"*"+Rm(i===47?i:ni())}function sS(i){for(;!Pp(Ga());)ni();return Mh(i,Fn)}function oS(i){return nS(Wc("",null,null,null,[""],i=eS(i),0,[0],i))}function Wc(i,t,r,a,o,u,f,m,p){for(var g=0,_=0,b=f,S=0,I=0,U=0,F=1,P=1,X=1,Q=0,Z="",lt=o,J=u,ot=a,j=Z;P;)switch(U=Q,Q=ni()){case 40:if(U!=108&&Ke(j,b-1)==58){Qc(j+=Dt(cp(Q),"&","&\f"),"&\f",d_(g?m[g-1]:0))!=-1&&(X=-1);break}case 34:case 39:case 91:j+=cp(Q);break;case 9:case 10:case 13:case 32:j+=iS(U);break;case 92:j+=rS(Xc()-1,7);continue;case 47:switch(Ga()){case 42:case 47:Dl(lS(aS(ni(),Xc()),t,r,p),p);break;default:j+="/"}break;case 123*F:m[g++]=_i(j)*X;case 125*F:case 59:case 0:switch(Q){case 0:case 125:P=0;case 59+_:X==-1&&(j=Dt(j,/\f/g,"")),I>0&&_i(j)-b&&Dl(I>32?X1(j+";",a,r,b-1,p):X1(Dt(j," ","")+";",a,r,b-2,p),p);break;case 59:j+=";";default:if(Dl(ot=Q1(j,t,r,g,_,o,m,Z,lt=[],J=[],b,u),u),Q===123)if(_===0)Wc(j,t,ot,ot,lt,u,b,m,J);else switch(S===99&&Ke(j,3)===110?100:S){case 100:case 108:case 109:case 115:Wc(i,ot,ot,a&&Dl(Q1(i,ot,ot,0,0,o,m,Z,o,lt=[],b,J),J),o,J,b,m,a?lt:J);break;default:Wc(j,ot,ot,ot,[""],J,0,m,J)}}g=_=I=0,F=X=1,Z=j="",b=f;break;case 58:b=1+_i(j),I=U;default:if(F<1){if(Q==123)--F;else if(Q==125&&F++==0&&tS()==125)continue}switch(j+=Rm(Q),Q*F){case 38:X=_>0?1:(j+="\f",-1);break;case 44:m[g++]=(_i(j)-1)*X,X=1;break;case 64:Ga()===45&&(j+=cp(ni())),S=Ga(),_=b=_i(Z=j+=sS(Xc())),Q++;break;case 45:U===45&&_i(j)==2&&(F=0)}}return u}function Q1(i,t,r,a,o,u,f,m,p,g,_,b){for(var S=o-1,I=o===0?u:[""],U=m_(I),F=0,P=0,X=0;F<a;++F)for(var Q=0,Z=Js(i,S+1,S=d_(P=f[F])),lt=i;Q<U;++Q)(lt=p_(P>0?I[Q]+" "+Z:Dt(Z,/&\f/g,I[Q])))&&(p[X++]=lt);return Nh(i,t,r,o===0?Ih:m,p,g,_,b)}function lS(i,t,r,a){return Nh(i,t,r,h_,Rm(Jw()),Js(i,2,-2),0,a)}function X1(i,t,r,a,o){return Nh(i,t,r,Am,Js(i,0,a),Js(i,a+1,-1),a,o)}function y_(i,t,r){switch(Ww(i,t)){case 5103:return qt+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return qt+i+i;case 4789:return kl+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return qt+i+kl+i+se+i+i;case 5936:switch(Ke(i,t+11)){case 114:return qt+i+se+Dt(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return qt+i+se+Dt(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return qt+i+se+Dt(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return qt+i+se+i+i;case 6165:return qt+i+se+"flex-"+i+i;case 5187:return qt+i+Dt(i,/(\w+).+(:[^]+)/,qt+"box-$1$2"+se+"flex-$1$2")+i;case 5443:return qt+i+se+"flex-item-"+Dt(i,/flex-|-self/g,"")+(Ji(i,/flex-|baseline/)?"":se+"grid-row-"+Dt(i,/flex-|-self/g,""))+i;case 4675:return qt+i+se+"flex-line-pack"+Dt(i,/align-content|flex-|-self/g,"")+i;case 5548:return qt+i+se+Dt(i,"shrink","negative")+i;case 5292:return qt+i+se+Dt(i,"basis","preferred-size")+i;case 6060:return qt+"box-"+Dt(i,"-grow","")+qt+i+se+Dt(i,"grow","positive")+i;case 4554:return qt+Dt(i,/([^-])(transform)/g,"$1"+qt+"$2")+i;case 6187:return Dt(Dt(Dt(i,/(zoom-|grab)/,qt+"$1"),/(image-set)/,qt+"$1"),i,"")+i;case 5495:case 3959:return Dt(i,/(image-set\([^]*)/,qt+"$1$`$1");case 4968:return Dt(Dt(i,/(.+:)(flex-)?(.*)/,qt+"box-pack:$3"+se+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+qt+i+i;case 4200:if(!Ji(i,/flex-|baseline/))return se+"grid-column-align"+Js(i,t)+i;break;case 2592:case 3360:return se+Dt(i,"template-","")+i;case 4384:case 3616:return r&&r.some(function(a,o){return t=o,Ji(a.props,/grid-\w+-end/)})?~Qc(i+(r=r[t].value),"span",0)?i:se+Dt(i,"-start","")+i+se+"grid-row-span:"+(~Qc(r,"span",0)?Ji(r,/\d+/):+Ji(r,/\d+/)-+Ji(i,/\d+/))+";":se+Dt(i,"-start","")+i;case 4896:case 4128:return r&&r.some(function(a){return Ji(a.props,/grid-\w+-start/)})?i:se+Dt(Dt(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return Dt(i,/(.+)-inline(.+)/,qt+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_i(i)-1-t>6)switch(Ke(i,t+1)){case 109:if(Ke(i,t+4)!==45)break;case 102:return Dt(i,/(.+:)(.+)-([^]+)/,"$1"+qt+"$2-$3$1"+kl+(Ke(i,t+3)==108?"$3":"$2-$3"))+i;case 115:return~Qc(i,"stretch",0)?y_(Dt(i,"stretch","fill-available"),t,r)+i:i}break;case 5152:case 5920:return Dt(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,o,u,f,m,p,g){return se+o+":"+u+g+(f?se+o+"-span:"+(m?p:+p-+u)+g:"")+i});case 4949:if(Ke(i,t+6)===121)return Dt(i,":",":"+qt)+i;break;case 6444:switch(Ke(i,Ke(i,14)===45?18:11)){case 120:return Dt(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+qt+(Ke(i,14)===45?"inline-":"")+"box$3$1"+qt+"$2$3$1"+se+"$2box$3")+i;case 100:return Dt(i,":",":"+se)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Dt(i,"scroll-","scroll-snap-")+i}return i}function uh(i,t){for(var r="",a=0;a<i.length;a++)r+=t(i[a],a,i,t)||"";return r}function uS(i,t,r,a){switch(i.type){case Xw:if(i.children.length)break;case Qw:case Am:return i.return=i.return||i.value;case h_:return"";case f_:return i.return=i.value+"{"+uh(i.children,a)+"}";case Ih:if(!_i(i.value=i.props.join(",")))return""}return _i(r=uh(i.children,a))?i.return=i.value+"{"+r+"}":""}function cS(i){var t=m_(i);return function(r,a,o,u){for(var f="",m=0;m<t;m++)f+=i[m](r,a,o,u)||"";return f}}function hS(i){return function(t){t.root||(t=t.return)&&i(t)}}function fS(i,t,r,a){if(i.length>-1&&!i.return)switch(i.type){case Am:i.return=y_(i.value,i.length,r);return;case f_:return uh([qr(i,{value:Dt(i.value,"@","@"+qt)})],a);case Ih:if(i.length)return Zw(r=i.props,function(o){switch(Ji(o,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Fs(qr(i,{props:[Dt(o,/:(read-\w+)/,":"+kl+"$1")]})),Fs(qr(i,{props:[o]})),Up(i,{props:Y1(r,a)});break;case"::placeholder":Fs(qr(i,{props:[Dt(o,/:(plac\w+)/,":"+qt+"input-$1")]})),Fs(qr(i,{props:[Dt(o,/:(plac\w+)/,":"+kl+"$1")]})),Fs(qr(i,{props:[Dt(o,/:(plac\w+)/,se+"input-$1")]})),Fs(qr(i,{props:[o]})),Up(i,{props:Y1(r,a)});break}return""})}}var dS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Cn={},eo=typeof process<"u"&&Cn!==void 0&&(Cn.REACT_APP_SC_ATTR||Cn.SC_ATTR)||"data-styled",v_="active",x_="data-styled-version",Oh="6.1.19",Cm=`/*!sc*/
`,ch=typeof window<"u"&&typeof document<"u",pS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Cn!==void 0&&Cn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Cn.REACT_APP_SC_DISABLE_SPEEDY!==""?Cn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Cn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Cn!==void 0&&Cn.SC_DISABLE_SPEEDY!==void 0&&Cn.SC_DISABLE_SPEEDY!==""&&Cn.SC_DISABLE_SPEEDY!=="false"&&Cn.SC_DISABLE_SPEEDY),Vh=Object.freeze([]),no=Object.freeze({});function mS(i,t,r){return r===void 0&&(r=no),i.theme!==r.theme&&i.theme||t||r.theme}var __=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),gS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,yS=/(^-|-$)/g;function W1(i){return i.replace(gS,"-").replace(yS,"")}var vS=/(a)(d)/gi,Vc=52,Z1=function(i){return String.fromCharCode(i+(i>25?39:97))};function zp(i){var t,r="";for(t=Math.abs(i);t>Vc;t=t/Vc|0)r=Z1(t%Vc)+r;return(Z1(t%Vc)+r).replace(vS,"$1-$2")}var hp,E_=5381,Ys=function(i,t){for(var r=t.length;r;)i=33*i^t.charCodeAt(--r);return i},b_=function(i){return Ys(E_,i)};function xS(i){return zp(b_(i)>>>0)}function _S(i){return i.displayName||i.name||"Component"}function fp(i){return typeof i=="string"&&!0}var T_=typeof Symbol=="function"&&Symbol.for,w_=T_?Symbol.for("react.memo"):60115,ES=T_?Symbol.for("react.forward_ref"):60112,bS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},TS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},S_={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},wS=((hp={})[ES]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},hp[w_]=S_,hp);function J1(i){return("type"in(t=i)&&t.type.$$typeof)===w_?S_:"$$typeof"in i?wS[i.$$typeof]:bS;var t}var SS=Object.defineProperty,AS=Object.getOwnPropertyNames,tv=Object.getOwnPropertySymbols,RS=Object.getOwnPropertyDescriptor,CS=Object.getPrototypeOf,ev=Object.prototype;function A_(i,t,r){if(typeof t!="string"){if(ev){var a=CS(t);a&&a!==ev&&A_(i,a,r)}var o=AS(t);tv&&(o=o.concat(tv(t)));for(var u=J1(i),f=J1(t),m=0;m<o.length;++m){var p=o[m];if(!(p in TS||r&&r[p]||f&&p in f||u&&p in u)){var g=RS(t,p);try{SS(i,p,g)}catch{}}}}return i}function io(i){return typeof i=="function"}function jm(i){return typeof i=="object"&&"styledComponentId"in i}function Ha(i,t){return i&&t?"".concat(i," ").concat(t):i||t||""}function nv(i,t){if(i.length===0)return"";for(var r=i[0],a=1;a<i.length;a++)r+=i[a];return r}function ql(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function Bp(i,t,r){if(r===void 0&&(r=!1),!r&&!ql(i)&&!Array.isArray(i))return t;if(Array.isArray(t))for(var a=0;a<t.length;a++)i[a]=Bp(i[a],t[a]);else if(ql(t))for(var a in t)i[a]=Bp(i[a],t[a]);return i}function Im(i,t){Object.defineProperty(i,"toString",{value:t})}function au(i){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var jS=(function(){function i(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return i.prototype.indexOfGroup=function(t){for(var r=0,a=0;a<t;a++)r+=this.groupSizes[a];return r},i.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var a=this.groupSizes,o=a.length,u=o;t>=u;)if((u<<=1)<0)throw au(16,"".concat(t));this.groupSizes=new Uint32Array(u),this.groupSizes.set(a),this.length=u;for(var f=o;f<u;f++)this.groupSizes[f]=0}for(var m=this.indexOfGroup(t+1),p=(f=0,r.length);f<p;f++)this.tag.insertRule(m,r[f])&&(this.groupSizes[t]++,m++)},i.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],a=this.indexOfGroup(t),o=a+r;this.groupSizes[t]=0;for(var u=a;u<o;u++)this.tag.deleteRule(a)}},i.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var a=this.groupSizes[t],o=this.indexOfGroup(t),u=o+a,f=o;f<u;f++)r+="".concat(this.tag.getRule(f)).concat(Cm);return r},i})(),Zc=new Map,hh=new Map,Jc=1,kc=function(i){if(Zc.has(i))return Zc.get(i);for(;hh.has(Jc);)Jc++;var t=Jc++;return Zc.set(i,t),hh.set(t,i),t},IS=function(i,t){Jc=t+1,Zc.set(i,t),hh.set(t,i)},DS="style[".concat(eo,"][").concat(x_,'="').concat(Oh,'"]'),NS=new RegExp("^".concat(eo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),MS=function(i,t,r){for(var a,o=r.split(","),u=0,f=o.length;u<f;u++)(a=o[u])&&i.registerName(t,a)},OS=function(i,t){for(var r,a=((r=t.textContent)!==null&&r!==void 0?r:"").split(Cm),o=[],u=0,f=a.length;u<f;u++){var m=a[u].trim();if(m){var p=m.match(NS);if(p){var g=0|parseInt(p[1],10),_=p[2];g!==0&&(IS(_,g),MS(i,_,p[3]),i.getTag().insertRules(g,o)),o.length=0}else o.push(m)}}},iv=function(i){for(var t=document.querySelectorAll(DS),r=0,a=t.length;r<a;r++){var o=t[r];o&&o.getAttribute(eo)!==v_&&(OS(i,o),o.parentNode&&o.parentNode.removeChild(o))}};function VS(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var R_=function(i){var t=document.head,r=i||t,a=document.createElement("style"),o=(function(m){var p=Array.from(m.querySelectorAll("style[".concat(eo,"]")));return p[p.length-1]})(r),u=o!==void 0?o.nextSibling:null;a.setAttribute(eo,v_),a.setAttribute(x_,Oh);var f=VS();return f&&a.setAttribute("nonce",f),r.insertBefore(a,u),a},kS=(function(){function i(t){this.element=R_(t),this.element.appendChild(document.createTextNode("")),this.sheet=(function(r){if(r.sheet)return r.sheet;for(var a=document.styleSheets,o=0,u=a.length;o<u;o++){var f=a[o];if(f.ownerNode===r)return f}throw au(17)})(this.element),this.length=0}return i.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},i.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},i})(),US=(function(){function i(t){this.element=R_(t),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var a=document.createTextNode(r);return this.element.insertBefore(a,this.nodes[t]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},i.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},i})(),PS=(function(){function i(t){this.rules=[],this.length=0}return i.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},i.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},i.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},i})(),rv=ch,LS={isServer:!ch,useCSSOMInjection:!pS},C_=(function(){function i(t,r,a){t===void 0&&(t=no),r===void 0&&(r={});var o=this;this.options=xn(xn({},LS),t),this.gs=r,this.names=new Map(a),this.server=!!t.isServer,!this.server&&ch&&rv&&(rv=!1,iv(this)),Im(this,function(){return(function(u){for(var f=u.getTag(),m=f.length,p="",g=function(b){var S=(function(X){return hh.get(X)})(b);if(S===void 0)return"continue";var I=u.names.get(S),U=f.getGroup(b);if(I===void 0||!I.size||U.length===0)return"continue";var F="".concat(eo,".g").concat(b,'[id="').concat(S,'"]'),P="";I!==void 0&&I.forEach(function(X){X.length>0&&(P+="".concat(X,","))}),p+="".concat(U).concat(F,'{content:"').concat(P,'"}').concat(Cm)},_=0;_<m;_++)g(_);return p})(o)})}return i.registerId=function(t){return kc(t)},i.prototype.rehydrate=function(){!this.server&&ch&&iv(this)},i.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new i(xn(xn({},this.options),t),this.gs,r&&this.names||void 0)},i.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(t=(function(r){var a=r.useCSSOMInjection,o=r.target;return r.isServer?new PS(o):a?new kS(o):new US(o)})(this.options),new jS(t)));var t},i.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},i.prototype.registerName=function(t,r){if(kc(t),this.names.has(t))this.names.get(t).add(r);else{var a=new Set;a.add(r),this.names.set(t,a)}},i.prototype.insertRules=function(t,r,a){this.registerName(t,r),this.getTag().insertRules(kc(t),a)},i.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},i.prototype.clearRules=function(t){this.getTag().clearGroup(kc(t)),this.clearNames(t)},i.prototype.clearTag=function(){this.tag=void 0},i})(),zS=/&/g,BS=/^\s*\/\/.*$/gm;function j_(i,t){return i.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(a){return"".concat(t," ").concat(a)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=j_(r.children,t)),r})}function $S(i){var t,r,a,o=no,u=o.options,f=u===void 0?no:u,m=o.plugins,p=m===void 0?Vh:m,g=function(S,I,U){return U.startsWith(r)&&U.endsWith(r)&&U.replaceAll(r,"").length>0?".".concat(t):S},_=p.slice();_.push(function(S){S.type===Ih&&S.value.includes("&")&&(S.props[0]=S.props[0].replace(zS,r).replace(a,g))}),f.prefix&&_.push(fS),_.push(uS);var b=function(S,I,U,F){I===void 0&&(I=""),U===void 0&&(U=""),F===void 0&&(F="&"),t=F,r=I,a=new RegExp("\\".concat(r,"\\b"),"g");var P=S.replace(BS,""),X=oS(U||I?"".concat(U," ").concat(I," { ").concat(P," }"):P);f.namespace&&(X=j_(X,f.namespace));var Q=[];return uh(X,cS(_.concat(hS(function(Z){return Q.push(Z)})))),Q};return b.hash=p.length?p.reduce(function(S,I){return I.name||au(15),Ys(S,I.name)},E_).toString():"",b}var FS=new C_,$p=$S(),I_=kt.createContext({shouldForwardProp:void 0,styleSheet:FS,stylis:$p});I_.Consumer;kt.createContext(void 0);function av(){return H.useContext(I_)}var KS=(function(){function i(t,r){var a=this;this.inject=function(o,u){u===void 0&&(u=$p);var f=a.name+u.hash;o.hasNameForId(a.id,f)||o.insertRules(a.id,f,u(a.rules,f,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,Im(this,function(){throw au(12,String(a.name))})}return i.prototype.getName=function(t){return t===void 0&&(t=$p),this.name+t.hash},i})(),HS=function(i){return i>="A"&&i<="Z"};function sv(i){for(var t="",r=0;r<i.length;r++){var a=i[r];if(r===1&&a==="-"&&i[0]==="-")return i;HS(a)?t+="-"+a.toLowerCase():t+=a}return t.startsWith("ms-")?"-"+t:t}var D_=function(i){return i==null||i===!1||i===""},N_=function(i){var t,r,a=[];for(var o in i){var u=i[o];i.hasOwnProperty(o)&&!D_(u)&&(Array.isArray(u)&&u.isCss||io(u)?a.push("".concat(sv(o),":"),u,";"):ql(u)?a.push.apply(a,lh(lh(["".concat(o," {")],N_(u),!1),["}"],!1)):a.push("".concat(sv(o),": ").concat((t=o,(r=u)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in dS||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return a};function Ya(i,t,r,a){if(D_(i))return[];if(jm(i))return[".".concat(i.styledComponentId)];if(io(i)){if(!io(u=i)||u.prototype&&u.prototype.isReactComponent||!t)return[i];var o=i(t);return Ya(o,t,r,a)}var u;return i instanceof KS?r?(i.inject(r,a),[i.getName(a)]):[i]:ql(i)?N_(i):Array.isArray(i)?Array.prototype.concat.apply(Vh,i.map(function(f){return Ya(f,t,r,a)})):[i.toString()]}function qS(i){for(var t=0;t<i.length;t+=1){var r=i[t];if(io(r)&&!jm(r))return!1}return!0}var GS=b_(Oh),YS=(function(){function i(t,r,a){this.rules=t,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&qS(t),this.componentId=r,this.baseHash=Ys(GS,r),this.baseStyle=a,C_.registerId(r)}return i.prototype.generateAndInjectStyles=function(t,r,a){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=Ha(o,this.staticRulesId);else{var u=nv(Ya(this.rules,t,r,a)),f=zp(Ys(this.baseHash,u)>>>0);if(!r.hasNameForId(this.componentId,f)){var m=a(u,".".concat(f),void 0,this.componentId);r.insertRules(this.componentId,f,m)}o=Ha(o,f),this.staticRulesId=f}else{for(var p=Ys(this.baseHash,a.hash),g="",_=0;_<this.rules.length;_++){var b=this.rules[_];if(typeof b=="string")g+=b;else if(b){var S=nv(Ya(b,t,r,a));p=Ys(p,S+_),g+=S}}if(g){var I=zp(p>>>0);r.hasNameForId(this.componentId,I)||r.insertRules(this.componentId,I,a(g,".".concat(I),void 0,this.componentId)),o=Ha(o,I)}}return o},i})(),M_=kt.createContext(void 0);M_.Consumer;var dp={};function QS(i,t,r){var a=jm(i),o=i,u=!fp(i),f=t.attrs,m=f===void 0?Vh:f,p=t.componentId,g=p===void 0?(function(lt,J){var ot=typeof lt!="string"?"sc":W1(lt);dp[ot]=(dp[ot]||0)+1;var j="".concat(ot,"-").concat(xS(Oh+ot+dp[ot]));return J?"".concat(J,"-").concat(j):j})(t.displayName,t.parentComponentId):p,_=t.displayName,b=_===void 0?(function(lt){return fp(lt)?"styled.".concat(lt):"Styled(".concat(_S(lt),")")})(i):_,S=t.displayName&&t.componentId?"".concat(W1(t.displayName),"-").concat(t.componentId):t.componentId||g,I=a&&o.attrs?o.attrs.concat(m).filter(Boolean):m,U=t.shouldForwardProp;if(a&&o.shouldForwardProp){var F=o.shouldForwardProp;if(t.shouldForwardProp){var P=t.shouldForwardProp;U=function(lt,J){return F(lt,J)&&P(lt,J)}}else U=F}var X=new YS(r,S,a?o.componentStyle:void 0);function Q(lt,J){return(function(ot,j,R){var C=ot.attrs,k=ot.componentStyle,O=ot.defaultProps,z=ot.foldedComponentIds,N=ot.styledComponentId,ue=ot.target,ne=kt.useContext(M_),tt=av(),ft=ot.shouldForwardProp||tt.shouldForwardProp,yt=mS(j,ne,O)||no,Ct=(function(jt,xt,me){for(var Lt,De=xn(xn({},xt),{className:void 0,theme:me}),Ii=0;Ii<jt.length;Ii+=1){var Hn=io(Lt=jt[Ii])?Lt(De):Lt;for(var on in Hn)De[on]=on==="className"?Ha(De[on],Hn[on]):on==="style"?xn(xn({},De[on]),Hn[on]):Hn[on]}return xt.className&&(De.className=Ha(De.className,xt.className)),De})(C,j,yt),M=Ct.as||ue,rt={};for(var ct in Ct)Ct[ct]===void 0||ct[0]==="$"||ct==="as"||ct==="theme"&&Ct.theme===yt||(ct==="forwardedAs"?rt.as=Ct.forwardedAs:ft&&!ft(ct,M)||(rt[ct]=Ct[ct]));var ht=(function(jt,xt){var me=av(),Lt=jt.generateAndInjectStyles(xt,me.styleSheet,me.stylis);return Lt})(k,Ct),gt=Ha(z,N);return ht&&(gt+=" "+ht),Ct.className&&(gt+=" "+Ct.className),rt[fp(M)&&!__.has(M)?"class":"className"]=gt,R&&(rt.ref=R),H.createElement(M,rt)})(Z,lt,J)}Q.displayName=b;var Z=kt.forwardRef(Q);return Z.attrs=I,Z.componentStyle=X,Z.displayName=b,Z.shouldForwardProp=U,Z.foldedComponentIds=a?Ha(o.foldedComponentIds,o.styledComponentId):"",Z.styledComponentId=S,Z.target=a?o.target:i,Object.defineProperty(Z,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(lt){this._foldedDefaultProps=a?(function(J){for(var ot=[],j=1;j<arguments.length;j++)ot[j-1]=arguments[j];for(var R=0,C=ot;R<C.length;R++)Bp(J,C[R],!0);return J})({},o.defaultProps,lt):lt}}),Im(Z,function(){return".".concat(Z.styledComponentId)}),u&&A_(Z,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Z}function ov(i,t){for(var r=[i[0]],a=0,o=t.length;a<o;a+=1)r.push(t[a],i[a+1]);return r}var lv=function(i){return Object.assign(i,{isCss:!0})};function XS(i){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(io(i)||ql(i))return lv(Ya(ov(Vh,lh([i],t,!0))));var a=i;return t.length===0&&a.length===1&&typeof a[0]=="string"?Ya(a):lv(Ya(ov(a,t)))}function Fp(i,t,r){if(r===void 0&&(r=no),!t)throw au(1,t);var a=function(o){for(var u=[],f=1;f<arguments.length;f++)u[f-1]=arguments[f];return i(t,r,XS.apply(void 0,lh([o],u,!1)))};return a.attrs=function(o){return Fp(i,t,xn(xn({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},a.withConfig=function(o){return Fp(i,t,xn(xn({},r),o))},a}var O_=function(i){return Fp(QS,i)},A=O_;__.forEach(function(i){A[i]=O_(i)});const pp=A.a`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 16px;
  line-height: 19.2px;
  letter-spacing: 0.24px;
  font-weight: ${i=>i.$active?700:400};
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  padding: 0;
  cursor: pointer;
  outline: none;
  transition: opacity 120ms ease;
`;function Dm({label:i,href:t="#",active:r=!1,onClick:a,style:o,target:u,rel:f}){const m="/TU2025gradulate/",p=/^https?:\/\//i.test(t)||t?.startsWith("mailto:")||t?.startsWith("tel:");let g,_=!1;!p&&t&&(t.startsWith(m)?(g="/"+t.slice(m.length).replace(/^\/+/,""),_=!0):t.startsWith("/")&&(g=t,_=!0),t===m&&(g="/",_=!0));const S={"aria-current":r?"page":void 0,"data-active":r?"true":"false",onKeyDown:I=>{a&&(I.key==="Enter"||I.key===" ")&&(I.preventDefault(),a(I))},onClick:a,style:o,$active:r};return _?v.jsx(pp,{as:mo,to:g,...S,children:i}):t?v.jsx(pp,{href:t,target:u,rel:f,...S,children:i}):v.jsx(pp,{as:"button",type:"button",...S,style:{background:"none",border:0,...o},children:i})}Dm.propTypes={label:W.string.isRequired,href:W.string,active:W.bool,onClick:W.func,style:W.object,target:W.string,rel:W.string};const WS=({isOpen:i=!1,size:t=28,color:r="#fff",...a})=>{const o=Math.max(2,Math.round(t/14)),u=t/2,f=Math.round(t*.28);if(i)return v.jsxs("svg",{width:t,height:t,viewBox:`0 0 ${t} ${t}`,fill:"none",...a,children:[v.jsx("line",{x1:u-f,y1:u-f,x2:u+f,y2:u+f,stroke:r,strokeWidth:o,strokeLinecap:"round"}),v.jsx("line",{x1:u-f,y1:u+f,x2:u+f,y2:u-f,stroke:r,strokeWidth:o,strokeLinecap:"round"})]});const m=o,p=o/2;return v.jsxs("svg",{width:t,height:t,viewBox:`0 0 ${t} ${t}`,fill:"none",...a,children:[v.jsx("rect",{x:0,y:u-f-m/2,width:t,height:m,rx:p,fill:r}),v.jsx("rect",{x:0,y:u-m/2,width:t,height:m,rx:p,fill:r}),v.jsx("rect",{x:0,y:u+f-m/2,width:t,height:m,rx:p,fill:r})]})},He=Object.freeze({GRADIENT:"gradient",LIGHT:"light",DARK:"dark"}),ZS=A.header`
  position: ${i=>i.$sticky?"sticky":"relative"};
  top: 0;
  width: 100vw;
  z-index: 1000;
  transition: background 180ms ease, box-shadow 180ms ease, color 180ms ease;
  background: ${i=>i.$background};
  color: ${i=>i.$textColor};
  box-shadow: ${i=>i.$boxShadow||"none"};
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
  max-width: ${i=>i.$maxWidth?i.$maxWidth:"none"};
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
  justify-content: space-between;
  /* gap: 24px; */
  width: 510px;
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
    display: ${i=>i.$open?"flex":"none"};
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: 1200;
    background: linear-gradient(180deg, #121212 0%, rgba(18,18,18,0.7) 60%, rgba(18,18,18,0.2) 100%);
    backdrop-filter: blur(12px);
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 48px;
    animation: fadeIn 0.2s;
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
  @media (max-width: 640px) {
    width: 28px;
    height: 24px;  
 }
`;function V_({items:i=[],activeKey:t,mode:r,onModeChange:a,autoOnScroll:o=!1,scrollThreshold:u=8,sticky:f=!0,maxWidth:m}){const[p,g]=H.useState(!1),[_,b]=H.useState(He.GRADIENT),S=typeof r=="string",I=S?r:_,{background:U,textColor:F,boxShadow:P}=H.useMemo(()=>{switch(I){case He.LIGHT:return{background:"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 60%, rgba(255,255,255,0) 100%)",textColor:"#000000"};case He.DARK:return{background:"#121212",textColor:"#FFFFFF"};case He.GRADIENT:default:return{background:"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",textColor:"#000000",boxShadow:"none"}}},[I]);H.useEffect(()=>{if(!o)return;const ot=()=>{const R=(window.scrollY||document.documentElement.scrollTop||0)>u?He.LIGHT:He.GRADIENT;S||b(R),a&&a(R)};return ot(),window.addEventListener("scroll",ot,{passive:!0}),()=>window.removeEventListener("scroll",ot)},[o,S,a,u]);const Z=I===He.DARK||p,lt=Z?"/TU2025gradulate/icons/logoLight.svg":"/TU2025gradulate/icons/logoDark.svg",J=i.filter(ot=>ot.label!=="SHOWROOM");return H.useEffect(()=>(p?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[p]),v.jsxs(ZS,{role:"banner",$sticky:f,$background:U,$textColor:F,$boxShadow:P,children:[v.jsx(JS,{$maxWidth:m,children:v.jsxs(tA,{children:[v.jsxs(eA,{children:[v.jsx(mo,{to:"/","aria-label":"홈으로",style:{color:"inherit",textDecoration:"none"},children:v.jsx(oA,{"aria-hidden":!0,children:v.jsx(lA,{children:v.jsx("div",{style:{backgroundImage:`url(${lt})`,width:"100%",height:"100%",backgroundSize:"contain",backgroundRepeat:"no-repeat"}})})})}),v.jsx(nA,{"aria-label":"주 메뉴",children:i.map(ot=>v.jsx(Dm,{label:ot.label,href:ot.href,active:ot.key===t},ot.key))})]}),v.jsx(iA,{"aria-label":p?"메뉴 닫기":"메뉴 열기",onClick:()=>g(ot=>!ot),children:v.jsx(WS,{isOpen:p,size:24,color:Z?"#fff":"#000"})})]})}),v.jsx(rA,{$open:p,onClick:()=>g(!1),children:v.jsx(aA,{onClick:ot=>ot.stopPropagation(),children:J.map(ot=>v.jsx(sA,{label:ot.label,href:ot.href,active:ot.key===t,style:{fontSize:18,fontWeight:500,color:"#fff",textAlign:"center"},onClick:()=>g(!1)},ot.key))})})]})}V_.propTypes={items:W.arrayOf(W.shape({key:W.string.isRequired,label:W.string.isRequired,href:W.string})),activeKey:W.string,mode:W.oneOf([He.GRADIENT,He.LIGHT,He.DARK]),onModeChange:W.func,autoOnScroll:W.bool,scrollThreshold:W.number,sticky:W.bool,maxWidth:W.oneOfType([W.string,W.number])};const Nm="Pretendard, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR', Arial, sans-serif",uA=A.footer`
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
  padding-left: ${i=>i.$sidePadding}px;
  padding-right: ${i=>i.$sidePadding}px;
  padding-top: 52px;
  padding-bottom: 52px;
  max-width: ${i=>`calc(${i.$maxWidth}px + ${i.$sidePadding*2}px)`};
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
  right: ${i=>i.$sidePadding}px;
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
`;function k_({title:i="잔향 : 기억의 향기",nav:t=[{label:"PROJECTS",href:"/projects"},{label:"PEOPLES",href:"/peoples"},{label:"SHOWROOM",href:"/showroom"},{label:"GUESTBOOK",href:"/guestbook"},{label:"CREDITS",href:"/credits"}],copyright:r=["ⓒ 2025 TECH UNIV KOREA. ALL RIGHTS RESERVED.","TUKOREA DESIGN ENGINEERING 20TH GRADUATION EXHIBITION"],social:a={youtube:{href:"https://youtube.com",label:"YouTube"},instagram:{href:"https://instagram.com",label:"Instagram"}},maxWidth:o=1220,sidePadding:u=350}){return v.jsx(uA,{role:"contentinfo",children:v.jsxs(cA,{$sidePadding:u,$maxWidth:o,children:[v.jsx(hA,{children:i}),v.jsx(fA,{"aria-label":"푸터 메뉴",children:t.map(f=>{const m=f.href||"#",p=/^https?:\/\//i.test(m),g="/TU2025gradulate/";let _=m;return p||(m===g?_="/":m.startsWith(g)&&(_="/"+m.slice(g.length).replace(/^\/+/,""))),p?v.jsx(uv,{href:m,children:f.label},f.label):v.jsx(uv,{as:mo,to:_,children:f.label},f.label)})}),v.jsx(dA,{children:r.map((f,m)=>v.jsx("div",{children:f},m))}),v.jsxs(pA,{$sidePadding:u,children:[a?.youtube?.href&&v.jsx(cv,{href:a.youtube.href,"aria-label":a.youtube.label||"YouTube",target:"_blank",rel:"noreferrer noopener",children:v.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#FFFFFF","aria-hidden":!0,children:v.jsx("path",{d:"M23.5 7.2a4 4 0 0 0-2.8-2.8C18.8 4 12 4 12 4s-6.8 0-8.7.4A4 4 0 0 0 .5 7.2 41 41 0 0 0 0 12a41 41 0 0 0 .5 4.8 4 4 0 0 0 2.8 2.8C5.2 20 12 20 12 20s6.8 0 8.7-.4a4 4 0 0 0 2.8-2.8A41 41 0 0 0 24 12a41 41 0 0 0-.5-4.8zM9.6 15.2V8.8L15.8 12l-6.2 3.2z"})})}),a?.instagram?.href&&v.jsx(cv,{href:a.instagram.href,"aria-label":a.instagram.label||"Instagram",target:"_blank",rel:"noreferrer noopener",children:v.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#FFFFFF","aria-hidden":!0,children:[v.jsx("path",{d:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2A3.2 3.2 0 1 1 12 8a3.2 3.2 0 0 1 0 6.4z"}),v.jsx("circle",{cx:"17.5",cy:"6.5",r:"1.2"}),v.jsx("path",{d:"M17.8 2H6.2A4.2 4.2 0 0 0 2 6.2v11.6A4.2 4.2 0 0 0 6.2 22h11.6A4.2 4.2 0 0 0 22 17.8V6.2A4.2 4.2 0 0 0 17.8 2zm2.6 15.8a2.6 2.6 0 0 1-2.6 2.6H6.2a2.6 2.6 0 0 1-2.6-2.6V6.2A2.6 2.6 0 0 1 6.2 3.6h11.6a2.6 2.6 0 0 1 2.6 2.6v11.6z"})]})})]})]})})}k_.propTypes={title:W.string,nav:W.arrayOf(W.shape({label:W.string.isRequired,href:W.string.isRequired})),copyright:W.arrayOf(W.string),social:W.shape({youtube:W.shape({href:W.string,label:W.string}),instagram:W.shape({href:W.string,label:W.string})}),maxWidth:W.number,sidePadding:W.number};const ji="'Pretendard', system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif",U_=350,hv=`${U_/1920*100}vw`,mA=`${(U_+414)/1920*100}vw`,gA=A.div`
  position: relative; background: #fff;
`,yA=A.div`
  padding-left: ${hv}; padding-right: ${hv};
`;function fv({children:i}){return v.jsx(gA,{children:v.jsx(yA,{children:i})})}const vA=A.div`
  position: relative; height: 120px; display: flex; align-items: flex-end; justify-content: center;
  font-family: ${ji}; font-size: 40px; font-weight: 700; color: #101010; line-height: 64px; margin-top: 80px;
`,xA=A.div`
  font-family: ${ji}; font-size: 32px; font-weight: 600; line-height: 56px; color: #000; margin-top: 18px;
`;function _A(){return v.jsxs(v.Fragment,{children:[v.jsx(vA,{children:"CREDITS"}),v.jsx(xA,{children:"잔향 : 기억의 향기"})]})}const EA=A.div`
  max-width: 374px; font-family: ${ji}; font-size: 16px; font-weight: 300; line-height: 25.6px; color: #000; text-align: justify; margin-top: 5px;
`;function bA({text:i}){return v.jsx(EA,{children:i})}const TA=A.div`
  width: 806px; height: 375px; background: #FFF4ED; margin-top: 24px; margin-left: ${mA}; position: absolute;
`,wA=A.div`
  position: absolute; left: 136px; top: 140px; font-family: ${ji}; font-size: 82.64px; font-weight: 500; line-height: 92.55px; color: #000;
`;function SA({children:i}){return v.jsx(TA,{children:v.jsx(wA,{children:i})})}const AA=A.div`
  display: flex; gap: 40px; margin-top: 420px; width: 1220px;
`,RA=A.div`
  width: 374px; display: flex; flex-direction: column; gap: 20px;
`,CA=A.div`
  font-family: ${ji}; font-size: 28px; font-weight: 600; line-height: 49px; color: #000;
`,jA=A.div`
  font-family: ${ji}; font-size: 16px; font-weight: 400; line-height: 21.6px; color: #000; text-align: justify;
`;function IA({blocks:i}){return v.jsx(AA,{children:i.map(t=>v.jsxs(RA,{children:[v.jsx(CA,{children:t.title}),v.jsx(jA,{children:t.body})]},t.title))})}const DA=A.div`
  border-bottom: ${i=>i.$last?"none":"1px #E0E0E0 solid"}; display: flex; gap: 20px; padding-bottom: 10px; margin-top: 20px; align-items: flex-start;
`,NA=A.div`
  width: 289px; height: 45px; display: flex; align-items: flex-end;
`,MA=A.div`
  font-family: ${ji}; font-size: 20px; font-weight: 500; line-height: 22.4px; color: #202020;
`,OA=A.div`
  width: 900px; display: flex; flex-direction: column;
`;function VA({title:i,rows:t,last:r=!1}){return v.jsxs(DA,{$last:r,children:[v.jsx(NA,{children:v.jsx(MA,{children:i})}),v.jsx(OA,{children:t.map((a,o)=>v.jsx(BA,{ko:a.ko,en:a.en,divider:t.length>1&&o!==t.length-1},a.ko+a.en+o))})]})}const kA=A.div`
  padding-top: 22px; padding-bottom: 40px; border-bottom: ${i=>i.$divider?"1px #E0E0E0 solid":"none"}; display: flex; gap: 20px; align-items: flex-start;
`,UA=A.div`
  width: 135px;
`,PA=A.div`
  font-family: ${ji}; font-size: 16px; font-weight: 300; line-height: 22.4px; color: #202020;
`,LA=A.div`
  display: flex; align-items: center;
`,zA=A.div`
  font-family: ${ji}; font-size: 16px; font-weight: 300; line-height: 22.4px; color: #404040;
`;function BA({ko:i,en:t,divider:r=!1}){return v.jsxs(kA,{$divider:r,children:[v.jsx(UA,{children:v.jsx(PA,{children:i})}),v.jsx(LA,{children:v.jsx(zA,{children:t})})]})}const $A=A.div`
  margin-top: 60px;
`,FA=A.div`
  font-family: ${ji}; font-size: 28px; font-weight: 600; color: #101010; margin-bottom: 24px;
`;function KA(){const i="안녕하세요. 제 20대 졸업준비위원회입니다. 그리고 이후에는 적당히 졸준위의 생각과 고생에 대한 감상을 종합해…",t=[{title:"학부장의 말씀",body:"내용 작성"},{title:"졸전담당교수 말씀",body:"내용 작성"},{title:"웹사이트팀 제작 후기",body:"내용 작성"}],r=[{title:"위원장",rows:[{ko:"홍승재",en:"Hong Seungjae"}]},{title:"부위원장",rows:[{ko:"김예린",en:"Kim Yerin"}]},{title:"총무",rows:[{ko:"진효민",en:"Jin HYOMIN"},{ko:"정민호",en:"Jeong Minho"}]},{title:"기획",rows:[{ko:"차소이",en:"Cha Soi"},{ko:"문나라",en:"Mun Nara"},{ko:"한채원",en:"Han Chaewon"}]},{title:"홍보",rows:[{ko:"이채원",en:"Lee Chaewon"},{ko:"남가림",en:"Nam Garim"}]},{title:"디자인",rows:[{ko:"구인회",en:"Gu Inhoe"},{ko:"김기윤",en:"Kim Giyun"},{ko:"박혜성",en:"Bak Hyeseong"},{ko:"석동현",en:"Seok Donghyoen"}]},{title:"웹사이트",rows:[{ko:"성수민",en:"Seong Sumin"},{ko:"김예준",en:"Kim Yejun"}]},{title:"Special Thanks",rows:[{ko:"김한종 교수",en:"Prof. Kim Hanjong"}],last:!0}];return v.jsxs("div",{style:{position:"relative"},children:[v.jsxs(fv,{children:[v.jsx(_A,{}),v.jsx(bA,{text:i})]}),v.jsx(SA,{children:"단체사진 1장"}),v.jsxs(fv,{children:[v.jsx(IA,{blocks:t}),v.jsxs($A,{children:[v.jsxs(FA,{children:["2025 잔향",v.jsx("br",{}),"제 20대 졸업전시위원회"]}),r.map(a=>v.jsx(VA,{title:a.title,rows:a.rows,last:!!a.last},a.title))]})]})]})}const HA=A.div`
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
`,qA=A.div`
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
 }`;function Mm({nameKor:i,nameEng:t,role:r,sns:a,eMail:o,imgSrc:u,imgAlt:f}){return v.jsxs(HA,{children:[v.jsxs(qA,{children:[v.jsx(GA,{src:u,alt:f}),v.jsx(YA,{})]}),v.jsxs(QA,{children:[v.jsxs(dv,{style:{top:"50px"},children:[v.jsx(XA,{children:i}),v.jsx(Kp,{children:t})]}),v.jsxs(dv,{children:[v.jsx(Kp,{children:r}),Array.isArray(a)&&a.length>0?v.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",margin:"4px 0 0 0"},children:a.map((m,p)=>v.jsx("a",{href:m.url,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"inherit",wordBreak:"break-all"},"aria-label":`${i} ${m.platform}`,children:m.url},`${m.platform}-${p}`))}):null,v.jsx(WA,{children:o?v.jsx("a",{style:{textDecoration:"none",color:"inherit"},href:`mailto:${o}`,children:o}):null})]})]})]})}Mm.defaultProps={sns:[]};Mm.propTypes={nameKor:W.string.isRequired,nameEng:W.string,role:W.string,sns:W.arrayOf(W.shape({platform:W.string.isRequired,url:W.string.isRequired})),eMail:W.string,imgSrc:W.string.isRequired,imgAlt:W.string.isRequired};const ZA=A.div`
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
  left: ${i=>i.$active?"4px":"64px"};
  @media (max-width: 640px) {
    width: 28px;
    height: 18px;
    left: ${i=>i.$active?"1px":"31px"};  
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
  color: ${i=>i.$active?"#Fafafa":"#909090"};
  font-weight: ${i=>i.$active?"700":"400"};
  @media (max-width: 640px) {
    font-size: 8px;
    margin-left: 6px;
  }
`,t4=A(P_)`
  margin-left: 32px;
  color: ${i=>i.$active?"#909090":"#Fafafa"};
  font-weight: ${i=>i.$active?"400":"700"};
  @media (max-width: 640px) {
    font-size: 8px;
    margin-left: 16px;
  }
`;function Hp({path:i="student",isActive:t=!1,onClick:r}){return v.jsxs(ZA,{onClick:r,children:[v.jsx(P_,{$active:t,children:"교수"}),v.jsx(t4,{$active:t,children:"학생"}),v.jsx(JA,{$active:t})]})}Hp.propTypes={path:W.oneOf(["student","professor"]),isActive:W.bool,onClick:W.func};const pv=A.a`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 24px;
  line-height: 28.8px;
  letter-spacing: 0.24px;
  font-weight: ${i=>i.$active?700:400};
  color: ${i=>i.$active?"#000":"#bababa"};
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
`;function th({label:i,active:t=!1,onClick:r,style:a,target:o,rel:u}){const m={"aria-current":t?"page":void 0,"data-active":t?"true":"false",onKeyDown:p=>{r&&(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),r(p))},onClick:r,style:a,$active:t};return href?v.jsx(pv,{href,target:o,rel:u,...m,children:i}):v.jsx(pv,{as:"button",type:"button",...m,style:{background:"none",border:0,...a},children:i})}th.propTypes={label:W.string.isRequired,href:W.string,active:W.bool,onClick:W.func,style:W.object,target:W.string,rel:W.string};const mv=A.div`
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
`;function Om({label:i,style:t,mode:r}){const a="/TU2025gradulate/",u=window.matchMedia("(max-width: 640px)").matches?`${a}icons/dropDownMobileIcon.svg`:`${a}icons/arrowDropdownIcon.svg`;return r==="category"?v.jsxs(mv,{style:t,children:[v.jsx(e4,{children:i}),v.jsx(gv,{children:v.jsx("img",{src:`${a}icons/arrowDropdownIcon.svg`,alt:"dropdownIcon"})})]}):v.jsxs(mv,{style:t,children:[v.jsx(L_,{children:i}),v.jsx(gv,{children:v.jsx("img",{src:u,alt:"dropdownIcon"})})]})}Om.propTypes={label:W.string.isRequired,style:W.object};const n4=A.div`
  display: ${i=>i.$open?"flex":"none"};
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
  font-weight: ${i=>i.$selected?500:400};
  color: ${i=>i.$selected?"#191919":"#bababa"};
  margin: 0;
  padding: 0;
  @media (max-width: 640px) {
    font-size: 12px;  
 }
`;function z_({options:i,onSelect:t,style:r,isOpen:a,position:o,selected:u}){return v.jsx(n4,{style:r,$open:a,children:i.map((f,m)=>v.jsx(i4,{onClick:()=>t(f),children:v.jsx(r4,{$selected:f===u,children:f})},m))})}z_.propTypes={options:W.arrayOf(W.string).isRequired,onSelect:W.func.isRequired,style:W.object,isOpen:W.bool,position:W.any,selected:W.string};const a4=A.div`
  position: relative;
`;function Vm({label:i,options:t,onSelect:r,style:a,filter:o,mode:u}){const[f,m]=kt.useState(!1),[p,g]=kt.useState({top:0,left:0}),_=kt.useRef(null),b=()=>{if(_.current){const I=_.current.getBoundingClientRect();g({top:I.bottom+window.scrollY,left:I.left+window.scrollX})}m(I=>!I)},S=I=>{r&&r(I),m(!1)};return v.jsxs(a4,{ref:_,style:a,children:[v.jsx("div",{onClick:b,children:v.jsx(Om,{label:i,options:t,onSelect:r,style:{},filter:o,mode:u})}),f&&v.jsx(z_,{options:t,onSelect:S,style:{},isOpen:f,position:p,selected:i})]})}Vm.propTypes={label:W.string.isRequired,options:W.arrayOf(W.string).isRequired,onSelect:W.func.isRequired,style:W.object,filter:W.string};Vm.defaultProps={style:{},filter:""};const s4=A.div`
    display: ${i=>i.$open?"flex":"none"};
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
    color: ${i=>i.$selected?"#000":"#909090"};
    cursor: pointer;
`;function B_({options:i,isOpen:t,onSelect:r,selected:a}){return v.jsx(s4,{$open:t,children:v.jsx(o4,{children:i.map((o,u)=>v.jsx(l4,{$selected:a===o,onClick:()=>r(o),children:o},u))})})}B_.propTypes={options:W.arrayOf(W.string).isRequired,isOpen:W.bool.isRequired,onSelect:W.func.isRequired,selected:W.oneOfType([W.string,W.number])};const u4=A.div`
    position: relative;
`;function Ul({label:i,options:t,onSelect:r,style:a,mode:o}){const[u,f]=kt.useState(!1),m=kt.useRef(null),p=()=>{f(_=>!_)},g=_=>{r&&r(_),f(!1)};return v.jsxs(u4,{ref:m,style:a,children:[v.jsx("div",{onClick:p,children:v.jsx(Om,{label:i,mode:o})}),u&&v.jsx(B_,{options:t,onSelect:g,isOpen:u,selected:i})]})}Ul.propTypes={label:W.string.isRequired,options:W.arrayOf(W.string).isRequired,onSelect:W.func.isRequired,style:W.object,mode:W.string};Ul.defaultProps={style:{},mode:"category"};const mp=A.div`
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
`;function $_({onCategoryChange:i,onToggleChange:t,type:r,onSortChange:a,sortLabel:o}){const u={type:r},[f,m]=kt.useState(!1),p=()=>m(J=>{const ot=!J;return t&&t(ot),ot}),[g,_]=kt.useState("전체"),[b,S]=kt.useState("All Projects"),I=["전체","산업디자인공학","미디어디자인공학"],U=["장영주","권오재","김 억","김한종","조남주","한민섭","홍성수","김태균"],F=["All Projects","AI & Robot","Edu & Kids","Health Care","IT & Tech","Living","Mobility"],P=["이름순","좋아요순","조회수순","팀작우선","개인작우선"],[X,Q]=kt.useState("이름순"),Z=o||X,lt=J=>{Q(J),a&&a(J)};return H.useEffect(()=>{_(f?U[0]:I[0])},[f]),u.type==="project"?v.jsxs(mp,{children:[v.jsx(gp,{}),v.jsx(yp,{children:F.map(J=>v.jsx(th,{label:J,active:b===J,onClick:()=>{S(J),i&&i(J)}},J))}),v.jsx(vp,{children:v.jsx(Ul,{mode:"category",label:b,options:F,onSelect:J=>{S(J),i&&i(J)}})}),v.jsx(Vm,{label:Z,options:P,onSelect:lt})]}):f?v.jsxs(mp,{children:[v.jsx(gp,{}),v.jsx(yp,{children:U.map(J=>v.jsx(th,{label:J,active:g===J,onClick:()=>{_(J),i&&i(J)}},J))}),v.jsx(vp,{children:v.jsx(Ul,{mode:"category",label:g,options:U,onSelect:J=>{_(J),i&&i(J)}})}),v.jsx(Hp,{path:f?"professor":"student",isActive:f,onClick:p})]}):v.jsxs(mp,{children:[v.jsx(gp,{}),v.jsx(yp,{children:I.map(J=>v.jsx(th,{label:J,active:g===J,onClick:()=>{_(J),i&&i(J)}},J))}),v.jsx(vp,{children:v.jsx(Ul,{mode:"category",label:g,options:I,onSelect:J=>{_(J),i&&i(J)}})}),v.jsx(Hp,{path:f?"professor":"student",isActive:f,onClick:p})]})}const c4=A.div`
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
`;function km({nameKor:i,rank:t,eMail:r,education:a,field:o,imgSrc:u,imgAlt:f}){const m=p=>Array.isArray(p)?v.jsx(yv,{children:p.map((g,_)=>v.jsx(Lc,{children:g},_))}):typeof p=="string"&&p?v.jsx(yv,{children:v.jsx(Lc,{children:p})}):null;return v.jsx(c4,{children:v.jsxs(h4,{children:[v.jsx(f4,{src:u,alt:f}),v.jsxs(d4,{children:[v.jsx(p4,{children:i}),v.jsxs(Uc,{children:[v.jsx(Pc,{children:"직위(직급)"}),v.jsx(Lc,{children:t})]}),v.jsxs(Uc,{children:[v.jsx(Pc,{children:"이메일"}),v.jsx(Lc,{children:r})]}),v.jsxs(Uc,{children:[v.jsx(Pc,{children:"약력"}),m(a)]}),v.jsxs(Uc,{children:[v.jsx(Pc,{children:"전문 분야"}),m(o)]})]})]})})}km.propTypes={nameKor:W.string.isRequired,rank:W.string.isRequired,eMail:W.string.isRequired,education:W.oneOfType([W.string,W.arrayOf(W.string)]),field:W.oneOfType([W.string,W.arrayOf(W.string)]),imgSrc:W.string.isRequired,imgAlt:W.string.isRequired};km.defaultProps={nameKor:"홍길동",rank:"교수",eMail:"honggildong@example.com",education:[],field:[],imgSrc:"/TU2025gradulate/thumbnailExample.png",imgAlt:"홍길동 교수의 프로필 이미지"};const Um=JSON.parse('[{"num":0,"nameKor":"강유진","nameEng":"Kang Yujin","role":"Designer","department":1,"professorId":"p04","studentId":2021194003,"eMail":"rkddbwls0421@naver.com","sns":"","imgUrl":"../image/0/portrait.jpg","projectUrl":"","category":"c4","projectNum":45,"team":1,"leader":0},{"num":1,"nameKor":"고명현","nameEng":"Go Myeonghyeon","role":"Designer","department":1,"professorId":"p03","studentId":2019190002,"eMail":"aud4417@tukorea.ac.kr","sns":"","imgUrl":"../image/1/portrait.jpg","projectUrl":"","category":"c0","projectNum":0,"team":0,"leader":""},{"num":2,"nameKor":"고서영","nameEng":"Go Seoyeong","role":"Designer","department":0,"professorId":"p02","studentId":2022190001,"eMail":"rhtjdud2003@naver.com","sns":"","imgUrl":"../image/2/portrait.jpg","projectUrl":"","category":"c2","projectNum":26,"team":1,"leader":0},{"num":3,"nameKor":"고은솔","nameEng":"Ko Eunsol","role":"Designer","department":1,"professorId":"p01","studentId":2021194005,"eMail":"pinetree2021@tukorea.ac.kr","sns":"","imgUrl":"../image/3/portrait.jpg","projectUrl":"","category":"c1","projectNum":24,"team":0,"leader":""},{"num":4,"nameKor":"구예진","nameEng":"Koo Yejin","role":"Designer","department":1,"professorId":"p03","studentId":2022194002,"eMail":"ninejin63@gmail.com","sns":"","imgUrl":"../image/4/portrait.jpg","projectUrl":"","category":"c2","projectNum":27,"team":1,"leader":1},{"num":5,"nameKor":"구인회","nameEng":"Koo Inhoe","role":"Designer","department":0,"professorId":"p02","studentId":2020190001,"eMail":"eric2261@naver.com","sns":"","imgUrl":"../image/5/portrait.jpg","projectUrl":"","category":"c5","projectNum":66,"team":1,"leader":1},{"num":6,"nameKor":"권유빈","nameEng":"Kwon Yoobeen","role":"Designer","department":1,"professorId":"p02","studentId":2020194002,"eMail":"yoovebeen@naver.com","sns":"","imgUrl":"../image/6/portrait.jpg","projectUrl":"","category":"c2","projectNum":26,"team":1,"leader":1},{"num":7,"nameKor":"권지민","nameEng":"Kwon Jimin","role":"Designer","department":1,"professorId":"p03","studentId":2022194038,"eMail":"jmnee0115@naver.com","sns":"","imgUrl":"../image/7/portrait.jpg","projectUrl":"","category":"c4","projectNum":46,"team":0,"leader":""},{"num":8,"nameKor":"김강민","nameEng":"Kim Gangmin","role":"Designer","department":0,"professorId":"p04","studentId":2020192003,"eMail":"min7053@naver.com","sns":"","imgUrl":"../image/8/portrait.jpg","projectUrl":"","category":"c5","projectNum":67,"team":1,"leader":1},{"num":9,"nameKor":"김기윤","nameEng":"Kim Giyun","role":"Designer","department":0,"professorId":"p02","studentId":2020190002,"eMail":"tkenrnen112@naver.com","sns":"","imgUrl":"../image/9/portrait.jpg","projectUrl":"","category":"c5","projectNum":68,"team":1,"leader":0},{"num":10,"nameKor":"김동주","nameEng":"Kim Dongju","role":"Designer","department":0,"professorId":"p00","studentId":2020190005,"eMail":"dongju3144@daum.net","sns":"","imgUrl":"../image/10/portrait.jpg","projectUrl":"","category":"c3","projectNum":34,"team":0,"leader":""},{"num":11,"nameKor":"김민석","nameEng":"Kim Minseok","role":"Designer","department":0,"professorId":"p02","studentId":2020190006,"eMail":"minsuk2468@naver.com","sns":"","imgUrl":"../image/11/portrait.jpg","projectUrl":"","category":"c4","projectNum":47,"team":0,"leader":""},{"num":12,"nameKor":"김세린","nameEng":"Kim Serin","role":"Designer","department":0,"professorId":"p04","studentId":2021192006,"eMail":"kara7094@naver.com","sns":"","imgUrl":"../image/12/portrait.jpg","projectUrl":"","category":"c4","projectNum":48,"team":0,"leader":""},{"num":13,"nameKor":"김소리","nameEng":"Kim Sori","role":"Designer","department":1,"professorId":"p03","studentId":2021194037,"eMail":"mulsik11@gmail.com","sns":"","imgUrl":"../image/13/portrait.jpg","projectUrl":"","category":"c4","projectNum":49,"team":0,"leader":""},{"num":14,"nameKor":"김예린","nameEng":"Kim Yerin","role":"Designer","department":0,"professorId":"p02","studentId":2021190007,"eMail":"ask7240@naver.com","sns":"","imgUrl":"../image/14/portrait.jpg","projectUrl":"","category":"c5","projectNum":69,"team":0,"leader":""},{"num":15,"nameKor":"김예준","nameEng":"Kim Yejun","role":"Designer","department":1,"professorId":"p01","studentId":2020194006,"eMail":"optimusjun15@naver.com","sns":"","imgUrl":"../image/15/portrait.jpg","projectUrl":"","category":"c4","projectNum":50,"team":0,"leader":""},{"num":16,"nameKor":"김윤곤","nameEng":"Kim Yungon","role":"Designer","department":1,"professorId":"p03","studentId":2020194008,"eMail":"yunkon722@naver.com","sns":"","imgUrl":"../image/16/portrait.jpg","projectUrl":"","category":"c0","projectNum":1,"team":0,"leader":""},{"num":17,"nameKor":"김윤서","nameEng":"Kim Yunseo","role":"Designer","department":1,"professorId":"p02","studentId":2021192007,"eMail":"ekdma39@naver.com","sns":"","imgUrl":"../image/17/portrait.jpg","projectUrl":"","category":"c4","projectNum":51,"team":0,"leader":""},{"num":18,"nameKor":"김윤성","nameEng":"Kim Yunseong","role":"Designer","department":0,"professorId":"p00","studentId":2020192038,"eMail":"dbstjd9061@naver.com","sns":"","imgUrl":"../image/18/portrait.jpg","projectUrl":"","category":"c0","projectNum":2,"team":0,"leader":""},{"num":19,"nameKor":"김주은","nameEng":"Kim Jueun","role":"Designer","department":1,"professorId":"p02","studentId":2022194007,"eMail":"kimjueun6648@naver.com","sns":"","imgUrl":"../image/19/portrait.jpg","projectUrl":"","category":"c2","projectNum":28,"team":1,"leader":0},{"num":20,"nameKor":"김지민","nameEng":"Kim Jimin","role":"Designer","department":0,"professorId":"p02","studentId":2020190011,"eMail":"a01039029588@gmail.com","sns":"","imgUrl":"../image/20/portrait.jpg","projectUrl":"","category":"c3","projectNum":35,"team":1,"leader":0},{"num":21,"nameKor":"김지혜","nameEng":"Kim Jihye","role":"Designer","department":0,"professorId":"p05","studentId":2021190012,"eMail":"kjj0209077@naver.com","sns":"","imgUrl":"../image/21/portrait.jpg","projectUrl":"","category":"c5","projectNum":70,"team":1,"leader":1},{"num":22,"nameKor":"김한슬","nameEng":"Kim Hanseul","role":"Designer","department":0,"professorId":"p04","studentId":2021192008,"eMail":"pdl02081616@gmail.com","sns":"","imgUrl":"../image/22/portrait.jpg","projectUrl":"","category":"c3","projectNum":36,"team":0,"leader":""},{"num":23,"nameKor":"남가림","nameEng":"Nam Garim","role":"Designer","department":0,"professorId":"p00","studentId":2021190014,"eMail":"garim0402@naver.com","sns":"","imgUrl":"../image/23/portrait.jpg","projectUrl":"","category":"c5","projectNum":71,"team":1,"leader":1},{"num":24,"nameKor":"남궁두경","nameEng":"Namgoong Doogyung","role":"Designer","department":0,"professorId":"p05","studentId":2020192012,"eMail":"namgoongdg@gmail.com","sns":"","imgUrl":"../image/24/portrait.jpg","projectUrl":"","category":"c0","projectNum":3,"team":1,"leader":1},{"num":25,"nameKor":"노희재","nameEng":"Roe Heejae","role":"Designer","department":0,"professorId":"p02","studentId":2019192013,"eMail":"wjdrl1144@gmail.com","sns":"","imgUrl":"../image/25/portrait.jpg","projectUrl":"","category":"c3","projectNum":37,"team":0,"leader":""},{"num":26,"nameKor":"마은성","nameEng":"Ma Eunseong","role":"Designer","department":0,"professorId":"p05","studentId":2021190016,"eMail":"mes3788@naver.com","sns":"","imgUrl":"../image/26/portrait.jpg","projectUrl":"","category":"c5","projectNum":70,"team":1,"leader":0},{"num":27,"nameKor":"문나라","nameEng":"Moon Nara","role":"Designer","department":0,"professorId":"p02","studentId":2021192009,"eMail":"skfk020529@naver.com","sns":"","imgUrl":"../image/27/portrait.jpg","projectUrl":"","category":"c3","projectNum":38,"team":0,"leader":""},{"num":28,"nameKor":"문지형","nameEng":"Moon Jihyeong","role":"Designer","department":0,"professorId":"p05","studentId":2020192014,"eMail":"dogtable4099@naver.com","sns":"","imgUrl":"../image/28/portrait.jpg","projectUrl":"","category":"c0","projectNum":3,"team":1,"leader":0},{"num":29,"nameKor":"민혜연","nameEng":"Min Hyeyeon","role":"Designer","department":0,"professorId":"p00","studentId":2022192010,"eMail":"ajtlqkf_@naver.com","sns":"","imgUrl":"../image/29/portrait.jpg","projectUrl":"","category":"c2","projectNum":29,"team":0,"leader":""},{"num":30,"nameKor":"박민규","nameEng":"Park Mingyu","role":"Designer","department":1,"professorId":"p03","studentId":2019194041,"eMail":"mingyu6393@naver.com","sns":"","imgUrl":"../image/30/portrait.jpg","projectUrl":"","category":"c0","projectNum":4,"team":0,"leader":""},{"num":31,"nameKor":"박서영","nameEng":"Park Seoyoung","role":"Designer","department":1,"professorId":"p03","studentId":2021192011,"eMail":"pszer0@naver.com","sns":"","imgUrl":"../image/31/portrait.jpg","projectUrl":"","category":"c4","projectNum":52,"team":0,"leader":""},{"num":32,"nameKor":"박예인","nameEng":"Park Yein","role":"Designer","department":1,"professorId":"p01","studentId":2021194013,"eMail":"pyi0413@naver.com","sns":"","imgUrl":"../image/32/portrait.jpg","projectUrl":"","category":"c4","projectNum":45,"team":1,"leader":1},{"num":33,"nameKor":"박예진","nameEng":"Park Yejin","role":"Designer","department":0,"professorId":"p00","studentId":2021190018,"eMail":"yejin6607@naver.com","sns":"","imgUrl":"../image/33/portrait.jpg","projectUrl":"","category":"c5","projectNum":71,"team":1,"leader":0},{"num":34,"nameKor":"박재민","nameEng":"Park Jaemin","role":"Designer","department":1,"professorId":"p03","studentId":2020192016,"eMail":"shiibadog@naver.com","sns":"","imgUrl":"../image/34/portrait.jpg","projectUrl":"","category":"c2","projectNum":27,"team":1,"leader":0},{"num":35,"nameKor":"박정훈","nameEng":"Park Jeonghun","role":"Designer","department":0,"professorId":"p05","studentId":2022192012,"eMail":"hhh8353@naver.com","sns":"","imgUrl":"../image/35/portrait.jpg","projectUrl":"","category":"c2","projectNum":30,"team":0,"leader":""},{"num":36,"nameKor":"박지수","nameEng":"Park Jisoo","role":"Designer","department":1,"professorId":"p03","studentId":2021194014,"eMail":"popopo0128@naver.com","sns":"","imgUrl":"../image/36/portrait.jpg","projectUrl":"","category":"c0","projectNum":5,"team":0,"leader":""},{"num":37,"nameKor":"박해인","nameEng":"Park Haein","role":"Designer","department":0,"professorId":"p06","studentId":2022192014,"eMail":"haein061e@gmail.com","sns":"","imgUrl":"../image/37/portrait.jpg","projectUrl":"","category":"c5","projectNum":72,"team":0,"leader":""},{"num":38,"nameKor":"박현","nameEng":"Park Hyun","role":"Designer","department":0,"professorId":"p04","studentId":2022190039,"eMail":"prefrog2@naver.com","sns":"","imgUrl":"../image/38/portrait.jpg","projectUrl":"","category":"c4","projectNum":53,"team":1,"leader":1},{"num":39,"nameKor":"박혜성","nameEng":"Park Hyeseong","role":"Designer","department":0,"professorId":"p00","studentId":2021190020,"eMail":"hyesungpark1128@gmail.com","sns":"","imgUrl":"../image/39/portrait.jpg","projectUrl":"","category":"c5","projectNum":73,"team":0,"leader":""},{"num":40,"nameKor":"박효정","nameEng":"Park Hyojung","role":"Designer","department":0,"professorId":"p02","studentId":2021190021,"eMail":"lucymrx@naver.com","sns":"","imgUrl":"../image/40/portrait.jpg","projectUrl":"","category":"c4","projectNum":54,"team":0,"leader":""},{"num":41,"nameKor":"배아영","nameEng":"Bae Ayeong","role":"Designer","department":1,"professorId":"p01","studentId":2022194014,"eMail":"f3_ea@naver.com","sns":"","imgUrl":"../image/41/portrait.jpg","projectUrl":"","category":"c0","projectNum":6,"team":0,"leader":""},{"num":42,"nameKor":"배혜림","nameEng":"Bae Hyelim","role":"Designer","department":0,"professorId":"p05","studentId":2021192013,"eMail":"bhl00012@naver.com","sns":"","imgUrl":"../image/42/portrait.jpg","projectUrl":"","category":"c0","projectNum":7,"team":1,"leader":0},{"num":43,"nameKor":"백대한","nameEng":"Baek Daehan","role":"Designer","department":0,"professorId":"p05","studentId":2020192039,"eMail":"qoreogks789@naver.com","sns":"","imgUrl":"../image/43/portrait.jpg","projectUrl":"","category":"c0","projectNum":8,"team":0,"leader":""},{"num":44,"nameKor":"백미나","nameEng":"Baek Mina","role":"Designer","department":0,"professorId":"p06","studentId":2021190023,"eMail":"wbwyhr@gmail.com","sns":"","imgUrl":"../image/44/portrait.jpg","projectUrl":"","category":"c4","projectNum":55,"team":0,"leader":""},{"num":45,"nameKor":"서연주","nameEng":"Seo Yeonju","role":"Designer","department":1,"professorId":"p02","studentId":2022194015,"eMail":"syj0305290529@gmail.com","sns":"","imgUrl":"../image/45/portrait.jpg","projectUrl":"","category":"c2","projectNum":28,"team":1,"leader":1},{"num":46,"nameKor":"서원진","nameEng":"Seo Wonjin","role":"Designer","department":0,"professorId":"p05","studentId":2019152026,"eMail":"tjdnjswls4981@naver.com","sns":"","imgUrl":"../image/46/portrait.jpg","projectUrl":"","category":"c4","projectNum":56,"team":0,"leader":""},{"num":47,"nameKor":"석동현","nameEng":"Suk Donghyun","role":"Designer","department":0,"professorId":"p06","studentId":2020190015,"eMail":"andysuk0108@naver.com","sns":"","imgUrl":"../image/47/portrait.jpg","projectUrl":"","category":"c5","projectNum":66,"team":1,"leader":0},{"num":48,"nameKor":"성수민","nameEng":"Seong Sumin","role":"Designer","department":1,"professorId":"p02","studentId":2020194016,"eMail":"epwyqqu309@gmail.com","sns":"","imgUrl":"../image/48/portrait.jpg","projectUrl":"","category":"c3","projectNum":39,"team":1,"leader":1},{"num":49,"nameKor":"성유승","nameEng":"Sung Yuseung","role":"Designer","department":1,"professorId":"p02","studentId":2019122021,"eMail":"usngsung0830@naver.com","sns":"","imgUrl":"../image/49/portrait.jpg","projectUrl":"","category":"c1","projectNum":25,"team":1,"leader":0},{"num":50,"nameKor":"송지원","nameEng":"Song Jiwon","role":"Designer","department":0,"professorId":"p04","studentId":2021190024,"eMail":"wldnjs0762@naver.com","sns":"","imgUrl":"../image/50/portrait.jpg","projectUrl":"","category":"c0","projectNum":9,"team":1,"leader":1},{"num":51,"nameKor":"신산하","nameEng":"Shin Sanha","role":"Designer","department":1,"professorId":"p02","studentId":2021192014,"eMail":"sanha@tukorea.ac.kr","sns":"","imgUrl":"../image/51/portrait.jpg","projectUrl":"","category":"c3","projectNum":39,"team":1,"leader":0},{"num":52,"nameKor":"신주혜","nameEng":"Shin Juhye","role":"Designer","department":0,"professorId":"p05","studentId":2022190019,"eMail":"emily3652@naver.com","sns":"","imgUrl":"../image/52/portrait.jpg","projectUrl":"","category":"c0","projectNum":10,"team":1,"leader":0},{"num":53,"nameKor":"신주희","nameEng":"Shin Juhui","role":"Designer","department":1,"professorId":"p07","studentId":2022194016,"eMail":"lucytomato@naver.com","sns":"","imgUrl":"../image/53/portrait.jpg","projectUrl":"","category":"c3","projectNum":40,"team":0,"leader":""},{"num":54,"nameKor":"심태섭","nameEng":"Sim Taeseob","role":"Designer","department":1,"professorId":"p01","studentId":2020194017,"eMail":"1212sts@naver.com","sns":"","imgUrl":"../image/54/portrait.jpg","projectUrl":"","category":"c0","projectNum":11,"team":0,"leader":""},{"num":55,"nameKor":"안상은","nameEng":"An Sangeun","role":"Designer","department":1,"professorId":"p03","studentId":2022194018,"eMail":"itkddms@naver.com","sns":"","imgUrl":"../image/55/portrait.jpg","projectUrl":"","category":"c4","projectNum":57,"team":1,"leader":1},{"num":56,"nameKor":"염수민","nameEng":"Yeom Sumin","role":"Designer","department":1,"professorId":"p01","studentId":2022194021,"eMail":"yeomsumin030827@gmail.com","sns":"","imgUrl":"../image/56/portrait.jpg","projectUrl":"","category":"c4","projectNum":58,"team":0,"leader":""},{"num":57,"nameKor":"유수현","nameEng":"Ryu Soohyun","role":"Designer","department":0,"professorId":"p06","studentId":2022192019,"eMail":"suhyeon9145@naver.com","sns":"","imgUrl":"../image/57/portrait.jpg","projectUrl":"","category":"c2","projectNum":31,"team":1,"leader":1},{"num":58,"nameKor":"윤모란","nameEng":"Yoon Moran","role":"Designer","department":0,"professorId":"p06","studentId":2022190024,"eMail":"moran_a_486@naver.com","sns":"","imgUrl":"../image/58/portrait.jpg","projectUrl":"","category":"c2","projectNum":31,"team":1,"leader":0},{"num":59,"nameKor":"윤서희","nameEng":"Yoon Seohee","role":"Designer","department":0,"professorId":"p00","studentId":2020192021,"eMail":"dbstjgml000@naver.com","sns":"","imgUrl":"../image/59/portrait.jpg","projectUrl":"","category":"c0","projectNum":12,"team":0,"leader":""},{"num":60,"nameKor":"윤재익","nameEng":"Yun Jaeik","role":"Designer","department":1,"professorId":"p01","studentId":2020194018,"eMail":"jwodlr10014@naver.com","sns":"","imgUrl":"../image/60/portrait.jpg","projectUrl":"","category":"c0","projectNum":13,"team":0,"leader":""},{"num":61,"nameKor":"이교연","nameEng":"Lee Gyoyeon","role":"Designer","department":0,"professorId":"p01","studentId":2022192038,"eMail":"grace121516@naver.com","sns":"","imgUrl":"../image/61/portrait.jpg","projectUrl":"","category":"c2","projectNum":32,"team":0,"leader":""},{"num":62,"nameKor":"이도훈","nameEng":"Lee Dohun","role":"Designer","department":0,"professorId":"p02","studentId":2020190025,"eMail":"bestson0137@naver.com","sns":"","imgUrl":"../image/62/portrait.jpg","projectUrl":"","category":"c5","projectNum":74,"team":0,"leader":""},{"num":63,"nameKor":"이민욱","nameEng":"Lee Minuk","role":"Designer","department":1,"professorId":"p01","studentId":2020194021,"eMail":"lmu0306@naver.com","sns":"","imgUrl":"../image/63/portrait.jpg","projectUrl":"","category":"c4","projectNum":59,"team":0,"leader":""},{"num":64,"nameKor":"이상","nameEng":"Lee Sang","role":"Designer","department":0,"professorId":"p02","studentId":2020190027,"eMail":"23isgood@naver.com","sns":"","imgUrl":"../image/64/portrait.jpg","projectUrl":"","category":"c3","projectNum":35,"team":1,"leader":1},{"num":65,"nameKor":"이영","nameEng":"Lee Young","role":"Designer","department":1,"professorId":"p03","studentId":2022194025,"eMail":"young2003_@naver.com","sns":"","imgUrl":"../image/65/portrait.jpg","projectUrl":"","category":"c4","projectNum":57,"team":1,"leader":0},{"num":66,"nameKor":"이영재","nameEng":"Lee Youngjae","role":"Designer","department":1,"professorId":"p03","studentId":2020194023,"eMail":"buwong123@naver.com","sns":"","imgUrl":"../image/66/portrait.jpg","projectUrl":"","category":"c0","projectNum":14,"team":1,"leader":0},{"num":67,"nameKor":"이웅찬","nameEng":"Lee Woongchan","role":"Designer","department":0,"professorId":"p02","studentId":2020192028,"eMail":"dldndcks01@naver.com","sns":"","imgUrl":"../image/67/portrait.jpg","projectUrl":"","category":"c3","projectNum":41,"team":0,"leader":""},{"num":68,"nameKor":"이준오","nameEng":"Lee Juno","role":"Designer","department":0,"professorId":"p00","studentId":2020190030,"eMail":"ljuno421@naver.com","sns":"","imgUrl":"../image/68/portrait.jpg","projectUrl":"","category":"c0","projectNum":15,"team":1,"leader":1},{"num":69,"nameKor":"이지민","nameEng":"Lee Jimin","role":"Designer","department":1,"professorId":"p02","studentId":2020194026,"eMail":"ibs7533@naver.com","sns":"","imgUrl":"../image/69/portrait.jpg","projectUrl":"","category":"c1","projectNum":25,"team":1,"leader":1},{"num":70,"nameKor":"이지현","nameEng":"Lee Jihyeon","role":"Designer","department":0,"professorId":"p04","studentId":2022192023,"eMail":"dlwlgus1102@naver.com","sns":"","imgUrl":"../image/70/portrait.jpg","projectUrl":"","category":"c5","projectNum":67,"team":1,"leader":0},{"num":71,"nameKor":"이채연","nameEng":"Lee Chaeyeon","role":"Designer","department":1,"professorId":"p07","studentId":2021194022,"eMail":"cvgh6835@naver.com","sns":"","imgUrl":"../image/71/portrait.jpg","projectUrl":"","category":"c0","projectNum":16,"team":0,"leader":""},{"num":72,"nameKor":"이채원","nameEng":"Lee Chaewon","role":"Designer","department":0,"professorId":"p06","studentId":2022192024,"eMail":"chaerry3907@naver.com","sns":"","imgUrl":"../image/72/portrait.jpg","projectUrl":"","category":"c0","projectNum":7,"team":1,"leader":1},{"num":73,"nameKor":"이채원","nameEng":"Lee Chaewon","role":"Designer","department":1,"professorId":"p03","studentId":2021194023,"eMail":"coehfdl2222@naver.com","sns":"","imgUrl":"../image/73/portrait.jpg","projectUrl":"","category":"c0","projectNum":14,"team":1,"leader":1},{"num":74,"nameKor":"임세준","nameEng":"Im Sejun","role":"Designer","department":0,"professorId":"p04","studentId":2019190043,"eMail":"helicat123@naver.com","sns":"","imgUrl":"../image/74/portrait.jpg","projectUrl":"","category":"c5","projectNum":75,"team":1,"leader":1},{"num":75,"nameKor":"임소이","nameEng":"Yim Soie","role":"Designer","department":0,"professorId":"p05","studentId":2022190030,"eMail":"soie0410@naver.com","sns":"","imgUrl":"../image/75/portrait.jpg","projectUrl":"","category":"c0","projectNum":17,"team":1,"leader":1},{"num":76,"nameKor":"임종석","nameEng":"Lim Jongseok","role":"Designer","department":0,"professorId":"p06","studentId":2020192032,"eMail":"rimjs01@naver.com","sns":"","imgUrl":"../image/76/portrait.jpg","projectUrl":"","category":"c0","projectNum":18,"team":0,"leader":""},{"num":77,"nameKor":"전준범","nameEng":"Jeon Junbeom","role":"Designer","department":1,"professorId":"p01","studentId":2021194028,"eMail":"jbjeon0814@gmail.com","sns":"","imgUrl":"../image/77/portrait.jpg","projectUrl":"","category":"c4","projectNum":60,"team":0,"leader":""},{"num":78,"nameKor":"정문선","nameEng":"Jung Moonsun","role":"Designer","department":0,"professorId":"p02","studentId":2020190033,"eMail":"munseon9822@naver.com","sns":"","imgUrl":"../image/78/portrait.jpg","projectUrl":"","category":"c3","projectNum":42,"team":0,"leader":""},{"num":79,"nameKor":"정민호","nameEng":"Jung Minho","role":"Designer","department":0,"professorId":"p04","studentId":2020190034,"eMail":"jmh011014@naver.com","sns":"","imgUrl":"../image/79/portrait.jpg","projectUrl":"","category":"c5","projectNum":68,"team":1,"leader":1},{"num":80,"nameKor":"정유진","nameEng":"Jung Yuzin","role":"Designer","department":0,"professorId":"p05","studentId":2022190033,"eMail":"akf0301@naver.com","sns":"","imgUrl":"../image/80/portrait.jpg","projectUrl":"","category":"c5","projectNum":76,"team":0,"leader":""},{"num":81,"nameKor":"정지원","nameEng":"Jung Jiwon","role":"Designer","department":0,"professorId":"p06","studentId":2022192025,"eMail":"marcellar030328@naver.com","sns":"","imgUrl":"../image/81/portrait.jpg","projectUrl":"","category":"c0","projectNum":17,"team":1,"leader":0},{"num":82,"nameKor":"정혜원","nameEng":"Jeong Hyewon","role":"Designer","department":0,"professorId":"p06","studentId":2021190034,"eMail":"jeonghyewon020705@naver.com","sns":"","imgUrl":"../image/82/portrait.jpg","projectUrl":"","category":"c0","projectNum":10,"team":1,"leader":1},{"num":83,"nameKor":"정혜조","nameEng":"Jeong Hyejo","role":"Designer","department":0,"professorId":"p00","studentId":2022192028,"eMail":"hyejo5614@naver.com","sns":"","imgUrl":"../image/83/portrait.jpg","projectUrl":"","category":"c4","projectNum":61,"team":0,"leader":""},{"num":84,"nameKor":"정호균","nameEng":"Jeong Hokyun","role":"Designer","department":1,"professorId":"p01","studentId":2020194031,"eMail":"hohokyun@naver.com","sns":"","imgUrl":"../image/84/portrait.jpg","projectUrl":"","category":"c4","projectNum":62,"team":0,"leader":""},{"num":85,"nameKor":"조선화","nameEng":"Jo Sunhwa","role":"Designer","department":0,"professorId":"p04","studentId":2022192039,"eMail":"jo5629@naver.com","sns":"","imgUrl":"../image/85/portrait.jpg","projectUrl":"","category":"c4","projectNum":53,"team":1,"leader":0},{"num":86,"nameKor":"조채빈","nameEng":"Cho Chaebin","role":"Designer","department":0,"professorId":"p00","studentId":2021192029,"eMail":"cheabin0000@naver.com","sns":"","imgUrl":"../image/86/portrait.jpg","projectUrl":"","category":"c0","projectNum":19,"team":0,"leader":""},{"num":87,"nameKor":"주예지","nameEng":"Ju Yeji","role":"Designer","department":1,"professorId":"p03","studentId":2022194040,"eMail":"jooyeiji@naver.com","sns":"","imgUrl":"../image/87/portrait.jpg","projectUrl":"","category":"c0","projectNum":20,"team":0,"leader":""},{"num":88,"nameKor":"진세원","nameEng":"Jin Sewon","role":"Designer","department":0,"professorId":"p00","studentId":2022192030,"eMail":"sewoneee@naver.com","sns":"","imgUrl":"../image/88/portrait.jpg","projectUrl":"","category":"c0","projectNum":15,"team":1,"leader":0},{"num":89,"nameKor":"진효민","nameEng":"Jin Hyomin","role":"Designer","department":0,"professorId":"p07","studentId":2022190040,"eMail":"jhm8912@naver.com","sns":"","imgUrl":"../image/89/portrait.jpg","projectUrl":"","category":"c4","projectNum":63,"team":0,"leader":""},{"num":90,"nameKor":"차소이","nameEng":"Cha Soyi","role":"Designer","department":0,"professorId":"p06","studentId":2022192040,"eMail":"osjj2202@naver.com","sns":"","imgUrl":"../image/90/portrait.jpg","projectUrl":"","category":"c0","projectNum":21,"team":0,"leader":""},{"num":91,"nameKor":"차한비","nameEng":"Cha Hanbi","role":"Designer","department":0,"professorId":"p02","studentId":2022192031,"eMail":"cha4786@naver.com","sns":"","imgUrl":"../image/91/portrait.jpg","projectUrl":"","category":"c2","projectNum":33,"team":0,"leader":""},{"num":92,"nameKor":"최가현","nameEng":"Choi Gahyun","role":"Designer","department":1,"professorId":"p07","studentId":2022194034,"eMail":"poiulkjhmnb098@naver.com","sns":"","imgUrl":"../image/92/portrait.jpg","projectUrl":"","category":"c3","projectNum":43,"team":0,"leader":""},{"num":93,"nameKor":"한채원","nameEng":"Han Chaewon","role":"Designer","department":0,"professorId":"p04","studentId":2021190036,"eMail":"09clara@naver.com","sns":"","imgUrl":"../image/93/portrait.jpg","projectUrl":"","category":"c4","projectNum":64,"team":0,"leader":""},{"num":94,"nameKor":"함은서","nameEng":"Ham Eunseo","role":"Designer","department":1,"professorId":"p03","studentId":2021192034,"eMail":"hamunseo0894@naver.com","sns":"","imgUrl":"../image/94/portrait.jpg","projectUrl":"","category":"c0","projectNum":22,"team":0,"leader":""},{"num":95,"nameKor":"허도윤","nameEng":"Heo Doyun","role":"Designer","department":1,"professorId":"p03","studentId":2022194041,"eMail":"saver2075@icloud.com","sns":"","imgUrl":"../image/95/portrait.jpg","projectUrl":"","category":"c3","projectNum":44,"team":0,"leader":""},{"num":96,"nameKor":"허지유","nameEng":"Heo Jiyu","role":"Designer","department":0,"professorId":"p04","studentId":2021192035,"eMail":"jjoojjoo0314@naver.com","sns":"","imgUrl":"../image/96/portrait.jpg","projectUrl":"","category":"c0","projectNum":9,"team":1,"leader":0},{"num":97,"nameKor":"홍승재","nameEng":"Hong Seungjae","role":"Designer","department":0,"professorId":"p02","studentId":2020192036,"eMail":"h010505@naver.com","sns":"","imgUrl":"../image/97/portrait.jpg","projectUrl":"","category":"c4","projectNum":65,"team":0,"leader":""},{"num":98,"nameKor":"홍지우","nameEng":"Hong Jiwoo","role":"Designer","department":0,"professorId":"p04","studentId":2021192036,"eMail":"hongjiwoo222@naver.com","sns":"","imgUrl":"../image/98/portrait.jpg","projectUrl":"","category":"c5","projectNum":75,"team":1,"leader":0},{"num":99,"nameKor":"황수정","nameEng":"Hwang Sujeong","role":"Designer","department":0,"professorId":"p05","studentId":2022190036,"eMail":"zzxcvvb12@gmail.com","sns":"","imgUrl":"../image/99/portrait.jpg","projectUrl":"","category":"c0","projectNum":23,"team":0,"leader":""}]'),m4=[{id:"p00",nameKor:"장영주",nameEng:"Jang Youngjoo",rank:"학부장, 교수",email:"jyj@tukorea.ac.kr",education:["㈜LG 전자 디자인 연구소","㈜인터디자인 디자인 기획실장","한국디지털디자인학회 이사","경기도 시흥시 정책기획단 정책위원","제품디자인·브랜드 개발센터 [EH]책임교수","디자인비지니스혁신 센터장"],field:["제품디자인·브랜드 개발","디자인 조직과 협동적 Process","제품디자인과 산업기술의 통합적 시스템 구축"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524695988100.jpg"},{id:"p01",nameKor:"권오재",nameEng:"Kwon Ojae",rank:"교수",email:"kwsokw@tukorea.ac.kr",education:["임시 데이터","임시 데이터","임시 데이터","임시 데이터"],field:["임시 데이터","임시 데이터","임시 데이터","임시 데이터"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524642556100.jpg"},{id:"p02",nameKor:"김 억",nameEng:"Kim Eok",rank:"교수, 학생처장",email:"kimeok@tukorea.ac.kr",education:["㈜LG전자 디자인경영센터 선임연구원","KAIST 총동문회 이사","한국산업디자이너협회 이사 / 한국서비스디자인학회 이사","한국디자인기초조형학회 / 한국디자인학회 이사","디자인융합전문대학원 사업단장"],field:["디자인 전략 및 기획","서비스디자인 및 PSS(Product-Service System) 개발","도시 공공 디자인"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524658322100.jpg"},{id:"p03",nameKor:"김한종",nameEng:"Kim Hanjong",rank:"조교수, PD교수",email:"hanjongkim@tukorea.ac.kr",education:["AR 기반의 인터랙티브 제품 프로토타이핑 도구 개발","이동형음압병동의 디자인 요구사항 수립 연구","이동형음압병동 설계를 위한 디자인 도구 개발","한국기계연구원 산업용 SW UX/UI 가이드라인 개발"],field:["Web 기반 3D 그래픽스","SW 시스템 디자인 / 프론트엔드 개발","디자인 지원 도구 개발"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524669896100.jpg"},{id:"p04",nameKor:"조남주",nameEng:"Jo Namjoo",rank:"교수,특별보좌역",email:"njjoh@tukorea.ac.kr",education:["임시 데이터","임시 데이터","임시 데이터","임시 데이터"],field:["가구 디자인 엔지니어링","지속가능한 공공디자인","제품디자인 엔지니어링"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524711232100.jpg"},{id:"p05",nameKor:"한민섭",nameEng:"Han Minseop",rank:"부교수",email:"mshan@tukorea.ac.kr",education:["CISD정보저장기기 연구센터 전문연구원","㈜코닝 정밀소재 책임연구원","㈜삼성전자 생산기술연구소 책임연구원"],field:["나노/마이크로 초정밀 미세 가공 공정","Equipment H/W 설계 및 시뮬레이션","융복합 가공 시스템 설계"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524614469100.jpg"},{id:"p06",nameKor:"홍성수",nameEng:"Hong Seongsu",rank:"교수, 국제처장",email:"hss@tukorea.ac.kr",education:["3차원 의료영상시스템(MRI) 제품설계 및 디자인","다족형견마로봇 / 헬스케어로봇 / 재활보조로봇","식사보조로봇/ 수중로봇/ 청소로봇 / 웨어러블 로봇","협동로봇/ 자율주행로봇/ 순찰로봇/ 공항안내로봇 등 90여종 로봇 개발"],field:["로봇 시스템 개발/ 로봇디자인/ HRI 디자인","로봇 문화콘텐츠 기술개발","신기술 전시기획/ 전시시스템개발"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524724386100.jpg"},{id:"p07",nameKor:"김태균",nameEng:"Kim Taekyun",rank:"조교수, 진로취업지도교수",email:"tgkim1design@tukorea.ac.kr",education:["영국, 영국 국제디자인박람회전시 ‘London 100% Design‘ 초청 출품","중국, SUPER DESIGNERS: Exploration of Creative Forms, The Boundaries of Design Forms 초청 출품","INNOCHINA 대상","나는글로벌벤처다 동상","Spark Awards-Silver"],field:["AI 기반 제품·공공시설물 디자인 실무·방법론","UX 중심 디자인 전략·개발","지식 주도 디자인 아이디에이션 기반 실무 디자인 설계 및 교수법"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1724738930608100.jpg"}],Gl=JSON.parse('[{"members":[1],"category":"c0","projectNum":0,"titleKor":"한국어 타이틀 1","titleEng":"EngTitle 1","galleryCount":1,"description":"작품 설명 내용"},{"members":[16],"category":"c0","projectNum":1,"titleKor":"한국어 타이틀 2","titleEng":"EngTitle 2","galleryCount":1,"description":"작품 설명 내용"},{"members":[18],"category":"c0","projectNum":2,"titleKor":"한국어 타이틀 3","titleEng":"EngTitle 3","galleryCount":1,"description":"작품 설명 내용"},{"members":[24,28],"category":"c0","projectNum":3,"titleKor":"한국어 타이틀 4","titleEng":"EngTitle 4","galleryCount":1,"description":"작품 설명 내용"},{"members":[30],"category":"c0","projectNum":4,"titleKor":"한국어 타이틀 5","titleEng":"EngTitle 5","galleryCount":1,"description":"작품 설명 내용"},{"members":[36],"category":"c0","projectNum":5,"titleKor":"한국어 타이틀 6","titleEng":"EngTitle 6","galleryCount":1,"description":"작품 설명 내용"},{"members":[41],"category":"c0","projectNum":6,"titleKor":"한국어 타이틀 7","titleEng":"EngTitle 7","galleryCount":1,"description":"작품 설명 내용"},{"members":[72,42],"category":"c0","projectNum":7,"titleKor":"한국어 타이틀 8","titleEng":"EngTitle 8","galleryCount":1,"description":"작품 설명 내용"},{"members":[43],"category":"c0","projectNum":8,"titleKor":"한국어 타이틀 9","titleEng":"EngTitle 9","galleryCount":1,"description":"작품 설명 내용"},{"members":[50,96],"category":"c0","projectNum":9,"titleKor":"한국어 타이틀 10","titleEng":"EngTitle 10","galleryCount":1,"description":"작품 설명 내용"},{"members":[82,52],"category":"c0","projectNum":10,"titleKor":"한국어 타이틀 11","titleEng":"EngTitle 11","galleryCount":1,"description":"작품 설명 내용"},{"members":[54],"category":"c0","projectNum":11,"titleKor":"한국어 타이틀 12","titleEng":"EngTitle 12","galleryCount":1,"description":"작품 설명 내용"},{"members":[59],"category":"c0","projectNum":12,"titleKor":"한국어 타이틀 13","titleEng":"EngTitle 13","galleryCount":1,"description":"작품 설명 내용"},{"members":[60],"category":"c0","projectNum":13,"titleKor":"한국어 타이틀 14","titleEng":"EngTitle 14","galleryCount":1,"description":"작품 설명 내용"},{"members":[73,66],"category":"c0","projectNum":14,"titleKor":"한국어 타이틀 15","titleEng":"EngTitle 15","galleryCount":1,"description":"작품 설명 내용"},{"members":[68,88],"category":"c0","projectNum":15,"titleKor":"한국어 타이틀 16","titleEng":"EngTitle 16","galleryCount":1,"description":"작품 설명 내용"},{"members":[71],"category":"c0","projectNum":16,"titleKor":"한국어 타이틀 17","titleEng":"EngTitle 17","galleryCount":1,"description":"작품 설명 내용"},{"members":[75,81],"category":"c0","projectNum":17,"titleKor":"한국어 타이틀 18","titleEng":"EngTitle 18","galleryCount":1,"description":"작품 설명 내용"},{"members":[76],"category":"c0","projectNum":18,"titleKor":"한국어 타이틀 19","titleEng":"EngTitle 19","galleryCount":1,"description":"작품 설명 내용"},{"members":[86],"category":"c0","projectNum":19,"titleKor":"한국어 타이틀 20","titleEng":"EngTitle 20","galleryCount":1,"description":"작품 설명 내용"},{"members":[87],"category":"c0","projectNum":20,"titleKor":"한국어 타이틀 21","titleEng":"EngTitle 21","galleryCount":1,"description":"작품 설명 내용"},{"members":[90],"category":"c0","projectNum":21,"titleKor":"한국어 타이틀 22","titleEng":"EngTitle 22","galleryCount":1,"description":"작품 설명 내용"},{"members":[94],"category":"c0","projectNum":22,"titleKor":"한국어 타이틀 23","titleEng":"EngTitle 23","galleryCount":1,"description":"작품 설명 내용"},{"members":[99],"category":"c0","projectNum":23,"titleKor":"한국어 타이틀 24","titleEng":"EngTitle 24","galleryCount":1,"description":"작품 설명 내용"},{"members":[3],"category":"c1","projectNum":24,"titleKor":"한국어 타이틀 25","titleEng":"EngTitle 25","galleryCount":1,"description":"작품 설명 내용"},{"members":[69,49],"category":"c1","projectNum":25,"titleKor":"한국어 타이틀 26","titleEng":"EngTitle 26","galleryCount":1,"description":"작품 설명 내용"},{"members":[6,2],"category":"c2","projectNum":26,"titleKor":"한국어 타이틀 27","titleEng":"EngTitle 27","galleryCount":1,"description":"작품 설명 내용"},{"members":[4,34],"category":"c2","projectNum":27,"titleKor":"한국어 타이틀 28","titleEng":"EngTitle 28","galleryCount":1,"description":"작품 설명 내용"},{"members":[54,19],"category":"c2","projectNum":28,"titleKor":"한국어 타이틀 29","titleEng":"EngTitle 29","galleryCount":1,"description":"작품 설명 내용"},{"members":[29],"category":"c2","projectNum":29,"titleKor":"한국어 타이틀 30","titleEng":"EngTitle 30","galleryCount":1,"description":"작품 설명 내용"},{"members":[35],"category":"c2","projectNum":30,"titleKor":"한국어 타이틀 31","titleEng":"EngTitle 31","galleryCount":1,"description":"작품 설명 내용"},{"members":[57,58],"category":"c2","projectNum":31,"titleKor":"한국어 타이틀 32","titleEng":"EngTitle 32","galleryCount":1,"description":"작품 설명 내용"},{"members":[61],"category":"c2","projectNum":32,"titleKor":"한국어 타이틀 33","titleEng":"EngTitle 33","galleryCount":1,"description":"작품 설명 내용"},{"members":[91],"category":"c2","projectNum":33,"titleKor":"한국어 타이틀 34","titleEng":"EngTitle 34","galleryCount":1,"description":"작품 설명 내용"},{"members":[10],"category":"c3","projectNum":34,"titleKor":"한국어 타이틀 35","titleEng":"EngTitle 35","galleryCount":1,"description":"작품 설명 내용"},{"members":[64,20],"category":"c3","projectNum":35,"titleKor":"한국어 타이틀 36","titleEng":"EngTitle 36","galleryCount":1,"description":"작품 설명 내용"},{"members":[22],"category":"c3","projectNum":36,"titleKor":"한국어 타이틀 37","titleEng":"EngTitle 37","galleryCount":1,"description":"작품 설명 내용"},{"members":[25],"category":"c3","projectNum":37,"titleKor":"한국어 타이틀 38","titleEng":"EngTitle 38","galleryCount":1,"description":"작품 설명 내용"},{"members":[27],"category":"c3","projectNum":38,"titleKor":"한국어 타이틀 39","titleEng":"EngTitle 39","galleryCount":1,"description":"작품 설명 내용"},{"members":[48,51],"category":"c3","projectNum":39,"titleKor":"한국어 타이틀 40","titleEng":"EngTitle 40","galleryCount":1,"description":"작품 설명 내용"},{"members":[53],"category":"c3","projectNum":40,"titleKor":"한국어 타이틀 41","titleEng":"EngTitle 41","galleryCount":1,"description":"작품 설명 내용"},{"members":[67],"category":"c3","projectNum":41,"titleKor":"한국어 타이틀 42","titleEng":"EngTitle 42","galleryCount":1,"description":"작품 설명 내용"},{"members":[78],"category":"c3","projectNum":42,"titleKor":"한국어 타이틀 43","titleEng":"EngTitle 43","galleryCount":1,"description":"작품 설명 내용"},{"members":[92],"category":"c3","projectNum":43,"titleKor":"한국어 타이틀 44","titleEng":"EngTitle 44","galleryCount":1,"description":"작품 설명 내용"},{"members":[95],"category":"c3","projectNum":44,"titleKor":"한국어 타이틀 45","titleEng":"EngTitle 45","galleryCount":1,"description":"작품 설명 내용"},{"members":[32,0],"category":"c4","projectNum":45,"titleKor":"한국어 타이틀 46","titleEng":"EngTitle 46","galleryCount":1,"description":"작품 설명 내용"},{"members":[7],"category":"c4","projectNum":46,"titleKor":"한국어 타이틀 47","titleEng":"EngTitle 47","galleryCount":1,"description":"작품 설명 내용"},{"members":[11],"category":"c4","projectNum":47,"titleKor":"한국어 타이틀 48","titleEng":"EngTitle 48","galleryCount":1,"description":"작품 설명 내용"},{"members":[12],"category":"c4","projectNum":48,"titleKor":"한국어 타이틀 49","titleEng":"EngTitle 49","galleryCount":1,"description":"작품 설명 내용"},{"members":[13],"category":"c4","projectNum":49,"titleKor":"한국어 타이틀 50","titleEng":"EngTitle 50","galleryCount":1,"description":"작품 설명 내용"},{"members":[15],"category":"c4","projectNum":50,"titleKor":"한국어 타이틀 51","titleEng":"EngTitle 51","galleryCount":1,"description":"작품 설명 내용"},{"members":[17],"category":"c4","projectNum":51,"titleKor":"한국어 타이틀 52","titleEng":"EngTitle 52","galleryCount":1,"description":"작품 설명 내용"},{"members":[31],"category":"c4","projectNum":52,"titleKor":"한국어 타이틀 53","titleEng":"EngTitle 53","galleryCount":1,"description":"작품 설명 내용"},{"members":[38,85],"category":"c4","projectNum":53,"titleKor":"한국어 타이틀 54","titleEng":"EngTitle 54","galleryCount":1,"description":"작품 설명 내용"},{"members":[40],"category":"c4","projectNum":54,"titleKor":"한국어 타이틀 55","titleEng":"EngTitle 55","galleryCount":1,"description":"작품 설명 내용"},{"members":[44],"category":"c4","projectNum":55,"titleKor":"한국어 타이틀 56","titleEng":"EngTitle 56","galleryCount":1,"description":"작품 설명 내용"},{"members":[46],"category":"c4","projectNum":56,"titleKor":"한국어 타이틀 57","titleEng":"EngTitle 57","galleryCount":1,"description":"작품 설명 내용"},{"members":[55,65],"category":"c4","projectNum":57,"titleKor":"한국어 타이틀 58","titleEng":"EngTitle 58","galleryCount":1,"description":"작품 설명 내용"},{"members":[56],"category":"c4","projectNum":58,"titleKor":"한국어 타이틀 59","titleEng":"EngTitle 59","galleryCount":1,"description":"작품 설명 내용"},{"members":[63],"category":"c4","projectNum":59,"titleKor":"한국어 타이틀 60","titleEng":"EngTitle 60","galleryCount":1,"description":"작품 설명 내용"},{"members":[77],"category":"c4","projectNum":60,"titleKor":"한국어 타이틀 61","titleEng":"EngTitle 61","galleryCount":1,"description":"작품 설명 내용"},{"members":[83],"category":"c4","projectNum":61,"titleKor":"한국어 타이틀 62","titleEng":"EngTitle 62","galleryCount":1,"description":"작품 설명 내용"},{"members":[84],"category":"c4","projectNum":62,"titleKor":"한국어 타이틀 63","titleEng":"EngTitle 63","galleryCount":1,"description":"작품 설명 내용"},{"members":[89],"category":"c4","projectNum":63,"titleKor":"한국어 타이틀 64","titleEng":"EngTitle 64","galleryCount":1,"description":"작품 설명 내용"},{"members":[93],"category":"c4","projectNum":64,"titleKor":"한국어 타이틀 65","titleEng":"EngTitle 65","galleryCount":1,"description":"작품 설명 내용"},{"members":[97],"category":"c4","projectNum":65,"titleKor":"한국어 타이틀 66","titleEng":"EngTitle 66","galleryCount":1,"description":"작품 설명 내용"},{"members":[5,47],"category":"c5","projectNum":66,"titleKor":"한국어 타이틀 67","titleEng":"EngTitle 67","galleryCount":1,"description":"작품 설명 내용"},{"members":[8,70],"category":"c5","projectNum":67,"titleKor":"한국어 타이틀 68","titleEng":"EngTitle 68","galleryCount":1,"description":"작품 설명 내용"},{"members":[79,9],"category":"c5","projectNum":68,"titleKor":"한국어 타이틀 69","titleEng":"EngTitle 69","galleryCount":1,"description":"작품 설명 내용"},{"members":[14],"category":"c5","projectNum":69,"titleKor":"한국어 타이틀 70","titleEng":"EngTitle 70","galleryCount":1,"description":"작품 설명 내용"},{"members":[21,26],"category":"c5","projectNum":70,"titleKor":"한국어 타이틀 71","titleEng":"EngTitle 71","galleryCount":1,"description":"작품 설명 내용"},{"members":[23,33],"category":"c5","projectNum":71,"titleKor":"한국어 타이틀 72","titleEng":"EngTitle 72","galleryCount":1,"description":"작품 설명 내용"},{"members":[37],"category":"c5","projectNum":72,"titleKor":"한국어 타이틀 73","titleEng":"EngTitle 73","galleryCount":1,"description":"작품 설명 내용"},{"members":[39],"category":"c5","projectNum":73,"titleKor":"한국어 타이틀 74","titleEng":"EngTitle 74","galleryCount":1,"description":"작품 설명 내용"},{"members":[62],"category":"c5","projectNum":74,"titleKor":"한국어 타이틀 75","titleEng":"EngTitle 75","galleryCount":1,"description":"작품 설명 내용"},{"members":[74,98],"category":"c5","projectNum":75,"titleKor":"한국어 타이틀 76","titleEng":"EngTitle 76","galleryCount":1,"description":"작품 설명 내용"},{"members":[80],"category":"c5","projectNum":76,"titleKor":"한국어 타이틀 77","titleEng":"EngTitle 77","galleryCount":1,"description":"작품 설명 내용"}]'),vv=40;function F_(i){if(!i)return i;const t="/TU2025gradulate/";if(/^https?:\/\//i.test(i))return i;const r=i.replace(/^\.\.\//,"").replace(/^\//,"");return t+r}const g4={c0:"A",c1:"E",c2:"H",c3:"I",c4:"L",c5:"M"},xv=["전체","산업디자인공학","미디어디자인공학"],y4={산업디자인공학:0,미디어디자인공학:1},_v=i=>i==="IND"||i===0||i==="0"?0:i==="MED"||i===1||i==="1"?1:i,xp=Um,jl=m4,v4=A.div`
  position: relative; background: #fff;
`,x4=A.div`
  padding-left: ${vv}px; padding-right: ${vv}px; display: flex; flex-direction: column;
  @media (max-width: 640px) {
    padding-left: 16px;
    padding-right: 16px;  
 }
`;function _4({children:i}){return v.jsx(v4,{children:v.jsx(x4,{children:i})})}const E4=A.div`
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
`,w4=A.div`position: relative;`;function S4({people:i}){const t=Em();return v.jsx(E4,{children:i.map((r,a)=>{const o=r.id??r.studentId??`${r.nameKor}-${a}`,u=typeof r.projectNum=="number"&&r.category,f=u?r.projectNum+1:null,m=u?`${g4[r.category]||"A"}${String(f).padStart(3,"0")}`:null,p=v.jsx(Mm,{nameKor:r.nameKor,nameEng:r.nameEng,role:r.role,sns:r.sns||"-",eMail:r.eMail,imgSrc:F_(r.imgUrl),imgAlt:`${r.nameKor} profile`},o);return u?v.jsx(T4,{role:"link",tabIndex:0,onClick:()=>t(`/work/${m}`),onKeyDown:g=>{(g.key==="Enter"||g.key===" ")&&t(`/work/${m}`)},"aria-label":`${r.nameKor} 작품 보기 (${m})`,children:p},`link-${o}`):p})})}function A4(){const[i,t]=kt.useState(!1),[r,a]=kt.useState(xv[0]),o=kt.useMemo(()=>{const m=new Map;return(Gl||[]).forEach(p=>{(p.members||[]).forEach(g=>{m.has(g)||m.set(g,p)})}),m},[]);kt.useEffect(()=>{a(i?jl[0]?.id||"":xv[0])},[i]);const u=kt.useMemo(()=>{if(!i){if(r==="전체")return xp;let p=y4[r];return p===void 0&&(p=_v(r)),xp.filter(g=>_v(g.department)===p)}const m=jl.some(p=>p.id===r)?r:jl.find(p=>p.nameKor===r)?.id||"";return xp.filter(p=>p.professorId===m).map(p=>{let g=o.get(p.num);g||(g=(Gl||[]).find(b=>b.category===p.category&&b.projectNum===p.projectNum)||null);const _=g?`/projects/${g.projectNum}/thumb.jpg`:"/thumbnailExample.png";return{...p,imgUrl:_}})},[r,i,o]),f=kt.useMemo(()=>i&&(jl.find(p=>p.id===r)||jl.find(p=>p.nameKor===r))||null,[i,r]);return v.jsxs(w4,{children:[v.jsx(b4,{children:"Peoples"}),v.jsx($_,{type:"people",onCategoryChange:a,onToggleChange:t}),v.jsxs(_4,{children:[i&&f&&v.jsx(km,{nameKor:f.nameKor,rank:f.rank||"교수",eMail:f.email,education:f.education,field:f.field,imgSrc:F_(f.imgUrl),imgAlt:`${f.nameKor} profile`}),v.jsx(S4,{people:u})]})]})}const R4=()=>{};var Ev={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_=function(i){const t=[];let r=0;for(let a=0;a<i.length;a++){let o=i.charCodeAt(a);o<128?t[r++]=o:o<2048?(t[r++]=o>>6|192,t[r++]=o&63|128):(o&64512)===55296&&a+1<i.length&&(i.charCodeAt(a+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++a)&1023),t[r++]=o>>18|240,t[r++]=o>>12&63|128,t[r++]=o>>6&63|128,t[r++]=o&63|128):(t[r++]=o>>12|224,t[r++]=o>>6&63|128,t[r++]=o&63|128)}return t},C4=function(i){const t=[];let r=0,a=0;for(;r<i.length;){const o=i[r++];if(o<128)t[a++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[r++];t[a++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[r++],f=i[r++],m=i[r++],p=((o&7)<<18|(u&63)<<12|(f&63)<<6|m&63)-65536;t[a++]=String.fromCharCode(55296+(p>>10)),t[a++]=String.fromCharCode(56320+(p&1023))}else{const u=i[r++],f=i[r++];t[a++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return t.join("")},H_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,t){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let o=0;o<i.length;o+=3){const u=i[o],f=o+1<i.length,m=f?i[o+1]:0,p=o+2<i.length,g=p?i[o+2]:0,_=u>>2,b=(u&3)<<4|m>>4;let S=(m&15)<<2|g>>6,I=g&63;p||(I=64,f||(S=64)),a.push(r[_],r[b],r[S],r[I])}return a.join("")},encodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(i):this.encodeByteArray(K_(i),t)},decodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(i):C4(this.decodeStringToByteArray(i,t))},decodeStringToByteArray(i,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let o=0;o<i.length;){const u=r[i.charAt(o++)],m=o<i.length?r[i.charAt(o)]:0;++o;const g=o<i.length?r[i.charAt(o)]:64;++o;const b=o<i.length?r[i.charAt(o)]:64;if(++o,u==null||m==null||g==null||b==null)throw new j4;const S=u<<2|m>>4;if(a.push(S),g!==64){const I=m<<4&240|g>>2;if(a.push(I),b!==64){const U=g<<6&192|b;a.push(U)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class j4 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const I4=function(i){const t=K_(i);return H_.encodeByteArray(t,!0)},fh=function(i){return I4(i).replace(/\./g,"")},D4=function(i){try{return H_.decodeString(i,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */const M4=()=>N4().__FIREBASE_DEFAULTS__,O4=()=>{if(typeof process>"u"||typeof Ev>"u")return;const i=Ev.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},V4=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=i&&D4(i[1]);return t&&JSON.parse(t)},Pm=()=>{try{return R4()||M4()||O4()||V4()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},k4=i=>Pm()?.emulatorHosts?.[i],U4=i=>{const t=k4(i);if(!t)return;const r=t.lastIndexOf(":");if(r<=0||r+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const a=parseInt(t.substring(r+1),10);return t[0]==="["?[t.substring(1,r-1),a]:[t.substring(0,r),a]},q_=()=>Pm()?.config;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Lm(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function L4(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function z4(i,t){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const r={alg:"none",type:"JWT"},a=t||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${a}`,aud:a,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...i};return[fh(JSON.stringify(r)),fh(JSON.stringify(f)),""].join(".")}const Pl={};function B4(){const i={prod:[],emulator:[]};for(const t of Object.keys(Pl))Pl[t]?i.emulator.push(t):i.prod.push(t);return i}function $4(i){let t=document.getElementById(i),r=!1;return t||(t=document.createElement("div"),t.setAttribute("id",i),r=!0),{created:r,element:t}}let bv=!1;function F4(i,t){if(typeof window>"u"||typeof document>"u"||!Lm(window.location.host)||Pl[i]===t||Pl[i]||bv)return;Pl[i]=t;function r(S){return`__firebase__banner__${S}`}const a="__firebase__banner",u=B4().prod.length>0;function f(){const S=document.getElementById(a);S&&S.remove()}function m(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function p(S,I){S.setAttribute("width","24"),S.setAttribute("id",I),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function g(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{bv=!0,f()},S}function _(S,I){S.setAttribute("id",I),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function b(){const S=$4(a),I=r("text"),U=document.getElementById(I)||document.createElement("span"),F=r("learnmore"),P=document.getElementById(F)||document.createElement("a"),X=r("preprendIcon"),Q=document.getElementById(X)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const Z=S.element;m(Z),_(P,F);const lt=g();p(Q,X),Z.append(Q,U,P,lt),document.body.appendChild(Z)}u?(U.innerText="Preview backend disconnected.",Q.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,U.innerText="Preview backend running in this workspace."),U.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",b):b()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K4(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function H4(){const i=Pm()?.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function q4(){return!H4()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function G4(){try{return typeof indexedDB=="object"}catch{return!1}}function Y4(){return new Promise((i,t)=>{try{let r=!0;const a="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(a);o.onsuccess=()=>{o.result.close(),r||self.indexedDB.deleteDatabase(a),i(!0)},o.onupgradeneeded=()=>{r=!1},o.onerror=()=>{t(o.error?.message||"")}}catch(r){t(r)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q4="FirebaseError";class yo extends Error{constructor(t,r,a){super(r),this.code=t,this.customData=a,this.name=Q4,Object.setPrototypeOf(this,yo.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,G_.prototype.create)}}class G_{constructor(t,r,a){this.service=t,this.serviceName=r,this.errors=a}create(t,...r){const a=r[0]||{},o=`${this.service}/${t}`,u=this.errors[t],f=u?X4(u,a):"Error",m=`${this.serviceName}: ${f} (${o}).`;return new yo(o,m,a)}}function X4(i,t){return i.replace(W4,(r,a)=>{const o=t[a];return o!=null?String(o):`<${a}?>`})}const W4=/\{\$([^}]+)}/g;function dh(i,t){if(i===t)return!0;const r=Object.keys(i),a=Object.keys(t);for(const o of r){if(!a.includes(o))return!1;const u=i[o],f=t[o];if(Tv(u)&&Tv(f)){if(!dh(u,f))return!1}else if(u!==f)return!1}for(const o of a)if(!r.includes(o))return!1;return!0}function Tv(i){return i!==null&&typeof i=="object"}/**
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
 */function Zr(i){return i&&i._delegate?i._delegate:i}class Yl{constructor(t,r,a){this.name=t,this.instanceFactory=r,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class Z4{constructor(t,r){this.name=t,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const r=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(r)){const a=new P4;if(this.instancesDeferred.set(r,a),this.isInitialized(r)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:r});o&&a.resolve(o)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(t){const r=this.normalizeInstanceIdentifier(t?.identifier),a=t?.optional??!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(a)return null;throw o}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(tR(t))try{this.getOrInitializeService({instanceIdentifier:Ka})}catch{}for(const[r,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(r);try{const u=this.getOrInitializeService({instanceIdentifier:o});a.resolve(u)}catch{}}}}clearInstance(t=Ka){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...t.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ka){return this.instances.has(t)}getOptions(t=Ka){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:r={}}=t,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:a,options:r});for(const[u,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);a===m&&f.resolve(o)}return o}onInit(t,r){const a=this.normalizeInstanceIdentifier(r),o=this.onInitCallbacks.get(a)??new Set;o.add(t),this.onInitCallbacks.set(a,o);const u=this.instances.get(a);return u&&t(u,a),()=>{o.delete(t)}}invokeOnInitCallbacks(t,r){const a=this.onInitCallbacks.get(r);if(a)for(const o of a)try{o(t,r)}catch{}}getOrInitializeService({instanceIdentifier:t,options:r={}}){let a=this.instances.get(t);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:J4(t),options:r}),this.instances.set(t,a),this.instancesOptions.set(t,r),this.invokeOnInitCallbacks(a,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,a)}catch{}return a||null}normalizeInstanceIdentifier(t=Ka){return this.component?this.component.multipleInstances?t:Ka:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function J4(i){return i===Ka?void 0:i}function tR(i){return i.instantiationMode==="EAGER"}/**
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
 */var $t;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})($t||($t={}));const nR={debug:$t.DEBUG,verbose:$t.VERBOSE,info:$t.INFO,warn:$t.WARN,error:$t.ERROR,silent:$t.SILENT},iR=$t.INFO,rR={[$t.DEBUG]:"log",[$t.VERBOSE]:"log",[$t.INFO]:"info",[$t.WARN]:"warn",[$t.ERROR]:"error"},aR=(i,t,...r)=>{if(t<i.logLevel)return;const a=new Date().toISOString(),o=rR[t];if(o)console[o](`[${a}]  ${i.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Y_{constructor(t){this.name=t,this._logLevel=iR,this._logHandler=aR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in $t))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?nR[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,$t.DEBUG,...t),this._logHandler(this,$t.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,$t.VERBOSE,...t),this._logHandler(this,$t.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,$t.INFO,...t),this._logHandler(this,$t.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,$t.WARN,...t),this._logHandler(this,$t.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,$t.ERROR,...t),this._logHandler(this,$t.ERROR,...t)}}const sR=(i,t)=>t.some(r=>i instanceof r);let wv,Sv;function oR(){return wv||(wv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lR(){return Sv||(Sv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Q_=new WeakMap,qp=new WeakMap,X_=new WeakMap,_p=new WeakMap,zm=new WeakMap;function uR(i){const t=new Promise((r,a)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",f)},u=()=>{r(Yr(i.result)),o()},f=()=>{a(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",f)});return t.then(r=>{r instanceof IDBCursor&&Q_.set(r,i)}).catch(()=>{}),zm.set(t,i),t}function cR(i){if(qp.has(i))return;const t=new Promise((r,a)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",f),i.removeEventListener("abort",f)},u=()=>{r(),o()},f=()=>{a(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",f),i.addEventListener("abort",f)});qp.set(i,t)}let Gp={get(i,t,r){if(i instanceof IDBTransaction){if(t==="done")return qp.get(i);if(t==="objectStoreNames")return i.objectStoreNames||X_.get(i);if(t==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return Yr(i[t])},set(i,t,r){return i[t]=r,!0},has(i,t){return i instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in i}};function hR(i){Gp=i(Gp)}function fR(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...r){const a=i.call(Ep(this),t,...r);return X_.set(a,t.sort?t.sort():[t]),Yr(a)}:lR().includes(i)?function(...t){return i.apply(Ep(this),t),Yr(Q_.get(this))}:function(...t){return Yr(i.apply(Ep(this),t))}}function dR(i){return typeof i=="function"?fR(i):(i instanceof IDBTransaction&&cR(i),sR(i,oR())?new Proxy(i,Gp):i)}function Yr(i){if(i instanceof IDBRequest)return uR(i);if(_p.has(i))return _p.get(i);const t=dR(i);return t!==i&&(_p.set(i,t),zm.set(t,i)),t}const Ep=i=>zm.get(i);function pR(i,t,{blocked:r,upgrade:a,blocking:o,terminated:u}={}){const f=indexedDB.open(i,t),m=Yr(f);return a&&f.addEventListener("upgradeneeded",p=>{a(Yr(f.result),p.oldVersion,p.newVersion,Yr(f.transaction),p)}),r&&f.addEventListener("blocked",p=>r(p.oldVersion,p.newVersion,p)),m.then(p=>{u&&p.addEventListener("close",()=>u()),o&&p.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),m}const mR=["get","getKey","getAll","getAllKeys","count"],gR=["put","add","delete","clear"],bp=new Map;function Av(i,t){if(!(i instanceof IDBDatabase&&!(t in i)&&typeof t=="string"))return;if(bp.get(t))return bp.get(t);const r=t.replace(/FromIndex$/,""),a=t!==r,o=gR.includes(r);if(!(r in(a?IDBIndex:IDBObjectStore).prototype)||!(o||mR.includes(r)))return;const u=async function(f,...m){const p=this.transaction(f,o?"readwrite":"readonly");let g=p.store;return a&&(g=g.index(m.shift())),(await Promise.all([g[r](...m),o&&p.done]))[0]};return bp.set(t,u),u}hR(i=>({...i,get:(t,r,a)=>Av(t,r)||i.get(t,r,a),has:(t,r)=>!!Av(t,r)||i.has(t,r)}));/**
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
 */class yR{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(vR(r)){const a=r.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(r=>r).join(" ")}}function vR(i){return i.getComponent()?.type==="VERSION"}const Yp="@firebase/app",Rv="0.14.4";/**
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
 */const rr=new Y_("@firebase/app"),xR="@firebase/app-compat",_R="@firebase/analytics-compat",ER="@firebase/analytics",bR="@firebase/app-check-compat",TR="@firebase/app-check",wR="@firebase/auth",SR="@firebase/auth-compat",AR="@firebase/database",RR="@firebase/data-connect",CR="@firebase/database-compat",jR="@firebase/functions",IR="@firebase/functions-compat",DR="@firebase/installations",NR="@firebase/installations-compat",MR="@firebase/messaging",OR="@firebase/messaging-compat",VR="@firebase/performance",kR="@firebase/performance-compat",UR="@firebase/remote-config",PR="@firebase/remote-config-compat",LR="@firebase/storage",zR="@firebase/storage-compat",BR="@firebase/firestore",$R="@firebase/ai",FR="@firebase/firestore-compat",KR="firebase",HR="12.4.0";/**
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
 */const Qp="[DEFAULT]",qR={[Yp]:"fire-core",[xR]:"fire-core-compat",[ER]:"fire-analytics",[_R]:"fire-analytics-compat",[TR]:"fire-app-check",[bR]:"fire-app-check-compat",[wR]:"fire-auth",[SR]:"fire-auth-compat",[AR]:"fire-rtdb",[RR]:"fire-data-connect",[CR]:"fire-rtdb-compat",[jR]:"fire-fn",[IR]:"fire-fn-compat",[DR]:"fire-iid",[NR]:"fire-iid-compat",[MR]:"fire-fcm",[OR]:"fire-fcm-compat",[VR]:"fire-perf",[kR]:"fire-perf-compat",[UR]:"fire-rc",[PR]:"fire-rc-compat",[LR]:"fire-gcs",[zR]:"fire-gcs-compat",[BR]:"fire-fst",[FR]:"fire-fst-compat",[$R]:"fire-vertex","fire-js":"fire-js",[KR]:"fire-js-all"};/**
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
 */const Ql=new Map,GR=new Map,Xp=new Map;function Cv(i,t){try{i.container.addComponent(t)}catch(r){rr.debug(`Component ${t.name} failed to register with FirebaseApp ${i.name}`,r)}}function ph(i){const t=i.name;if(Xp.has(t))return rr.debug(`There were multiple attempts to register component ${t}.`),!1;Xp.set(t,i);for(const r of Ql.values())Cv(r,i);for(const r of GR.values())Cv(r,i);return!0}function YR(i,t){const r=i.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),i.container.getProvider(t)}function QR(i){return i==null?!1:i.settings!==void 0}/**
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
 */const ZR=HR;function W_(i,t={}){let r=i;typeof t!="object"&&(t={name:t});const a={name:Qp,automaticDataCollectionEnabled:!0,...t},o=a.name;if(typeof o!="string"||!o)throw Qr.create("bad-app-name",{appName:String(o)});if(r||(r=q_()),!r)throw Qr.create("no-options");const u=Ql.get(o);if(u){if(dh(r,u.options)&&dh(a,u.config))return u;throw Qr.create("duplicate-app",{appName:o})}const f=new eR(o);for(const p of Xp.values())f.addComponent(p);const m=new WR(r,a,f);return Ql.set(o,m),m}function JR(i=Qp){const t=Ql.get(i);if(!t&&i===Qp&&q_())return W_();if(!t)throw Qr.create("no-app",{appName:i});return t}function jv(){return Array.from(Ql.values())}function Qs(i,t,r){let a=qR[i]??i;r&&(a+=`-${r}`);const o=a.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const f=[`Unable to register library "${a}" with version "${t}":`];o&&f.push(`library name "${a}" contains illegal characters (whitespace or "/")`),o&&u&&f.push("and"),u&&f.push(`version name "${t}" contains illegal characters (whitespace or "/")`),rr.warn(f.join(" "));return}ph(new Yl(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}/**
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
 */const t6="firebase-heartbeat-database",e6=1,Xl="firebase-heartbeat-store";let Tp=null;function Z_(){return Tp||(Tp=pR(t6,e6,{upgrade:(i,t)=>{switch(t){case 0:try{i.createObjectStore(Xl)}catch(r){console.warn(r)}}}}).catch(i=>{throw Qr.create("idb-open",{originalErrorMessage:i.message})})),Tp}async function n6(i){try{const r=(await Z_()).transaction(Xl),a=await r.objectStore(Xl).get(J_(i));return await r.done,a}catch(t){if(t instanceof yo)rr.warn(t.message);else{const r=Qr.create("idb-get",{originalErrorMessage:t?.message});rr.warn(r.message)}}}async function Iv(i,t){try{const a=(await Z_()).transaction(Xl,"readwrite");await a.objectStore(Xl).put(t,J_(i)),await a.done}catch(r){if(r instanceof yo)rr.warn(r.message);else{const a=Qr.create("idb-set",{originalErrorMessage:r?.message});rr.warn(a.message)}}}function J_(i){return`${i.name}!${i.options.appId}`}/**
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
 */const i6=1024,r6=30;class a6{constructor(t){this.container=t,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new o6(r),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Dv();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(o=>o.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:r}),this._heartbeatsCache.heartbeats.length>r6){const o=l6(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){rr.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Dv(),{heartbeatsToSend:r,unsentEntries:a}=s6(this._heartbeatsCache.heartbeats),o=fh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return rr.warn(t),""}}}function Dv(){return new Date().toISOString().substring(0,10)}function s6(i,t=i6){const r=[];let a=i.slice();for(const o of i){const u=r.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),Nv(r)>t){u.dates.pop();break}}else if(r.push({agent:o.agent,dates:[o.date]}),Nv(r)>t){r.pop();break}a=a.slice(1)}return{heartbeatsToSend:r,unsentEntries:a}}class o6{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return G4()?Y4().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await n6(this.app);return r?.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const a=await this.read();return Iv(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const a=await this.read();return Iv(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...t.heartbeats]})}else return}}function Nv(i){return fh(JSON.stringify({version:2,heartbeats:i})).length}function l6(i){if(i.length===0)return-1;let t=0,r=i[0].date;for(let a=1;a<i.length;a++)i[a].date<r&&(r=i[a].date,t=a);return t}/**
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
 */function u6(i){ph(new Yl("platform-logger",t=>new yR(t),"PRIVATE")),ph(new Yl("heartbeat",t=>new a6(t),"PRIVATE")),Qs(Yp,Rv,i),Qs(Yp,Rv,"esm2020"),Qs("fire-js","")}u6("");var c6="firebase",h6="12.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
*/var Xr,tE;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(j,R){function C(){}C.prototype=R.prototype,j.F=R.prototype,j.prototype=new C,j.prototype.constructor=j,j.D=function(k,O,z){for(var N=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)N[ue-2]=arguments[ue];return R.prototype[O].apply(k,N)}}function r(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(a,r),a.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(j,R,C){C||(C=0);const k=Array(16);if(typeof R=="string")for(var O=0;O<16;++O)k[O]=R.charCodeAt(C++)|R.charCodeAt(C++)<<8|R.charCodeAt(C++)<<16|R.charCodeAt(C++)<<24;else for(O=0;O<16;++O)k[O]=R[C++]|R[C++]<<8|R[C++]<<16|R[C++]<<24;R=j.g[0],C=j.g[1],O=j.g[2];let z=j.g[3],N;N=R+(z^C&(O^z))+k[0]+3614090360&4294967295,R=C+(N<<7&4294967295|N>>>25),N=z+(O^R&(C^O))+k[1]+3905402710&4294967295,z=R+(N<<12&4294967295|N>>>20),N=O+(C^z&(R^C))+k[2]+606105819&4294967295,O=z+(N<<17&4294967295|N>>>15),N=C+(R^O&(z^R))+k[3]+3250441966&4294967295,C=O+(N<<22&4294967295|N>>>10),N=R+(z^C&(O^z))+k[4]+4118548399&4294967295,R=C+(N<<7&4294967295|N>>>25),N=z+(O^R&(C^O))+k[5]+1200080426&4294967295,z=R+(N<<12&4294967295|N>>>20),N=O+(C^z&(R^C))+k[6]+2821735955&4294967295,O=z+(N<<17&4294967295|N>>>15),N=C+(R^O&(z^R))+k[7]+4249261313&4294967295,C=O+(N<<22&4294967295|N>>>10),N=R+(z^C&(O^z))+k[8]+1770035416&4294967295,R=C+(N<<7&4294967295|N>>>25),N=z+(O^R&(C^O))+k[9]+2336552879&4294967295,z=R+(N<<12&4294967295|N>>>20),N=O+(C^z&(R^C))+k[10]+4294925233&4294967295,O=z+(N<<17&4294967295|N>>>15),N=C+(R^O&(z^R))+k[11]+2304563134&4294967295,C=O+(N<<22&4294967295|N>>>10),N=R+(z^C&(O^z))+k[12]+1804603682&4294967295,R=C+(N<<7&4294967295|N>>>25),N=z+(O^R&(C^O))+k[13]+4254626195&4294967295,z=R+(N<<12&4294967295|N>>>20),N=O+(C^z&(R^C))+k[14]+2792965006&4294967295,O=z+(N<<17&4294967295|N>>>15),N=C+(R^O&(z^R))+k[15]+1236535329&4294967295,C=O+(N<<22&4294967295|N>>>10),N=R+(O^z&(C^O))+k[1]+4129170786&4294967295,R=C+(N<<5&4294967295|N>>>27),N=z+(C^O&(R^C))+k[6]+3225465664&4294967295,z=R+(N<<9&4294967295|N>>>23),N=O+(R^C&(z^R))+k[11]+643717713&4294967295,O=z+(N<<14&4294967295|N>>>18),N=C+(z^R&(O^z))+k[0]+3921069994&4294967295,C=O+(N<<20&4294967295|N>>>12),N=R+(O^z&(C^O))+k[5]+3593408605&4294967295,R=C+(N<<5&4294967295|N>>>27),N=z+(C^O&(R^C))+k[10]+38016083&4294967295,z=R+(N<<9&4294967295|N>>>23),N=O+(R^C&(z^R))+k[15]+3634488961&4294967295,O=z+(N<<14&4294967295|N>>>18),N=C+(z^R&(O^z))+k[4]+3889429448&4294967295,C=O+(N<<20&4294967295|N>>>12),N=R+(O^z&(C^O))+k[9]+568446438&4294967295,R=C+(N<<5&4294967295|N>>>27),N=z+(C^O&(R^C))+k[14]+3275163606&4294967295,z=R+(N<<9&4294967295|N>>>23),N=O+(R^C&(z^R))+k[3]+4107603335&4294967295,O=z+(N<<14&4294967295|N>>>18),N=C+(z^R&(O^z))+k[8]+1163531501&4294967295,C=O+(N<<20&4294967295|N>>>12),N=R+(O^z&(C^O))+k[13]+2850285829&4294967295,R=C+(N<<5&4294967295|N>>>27),N=z+(C^O&(R^C))+k[2]+4243563512&4294967295,z=R+(N<<9&4294967295|N>>>23),N=O+(R^C&(z^R))+k[7]+1735328473&4294967295,O=z+(N<<14&4294967295|N>>>18),N=C+(z^R&(O^z))+k[12]+2368359562&4294967295,C=O+(N<<20&4294967295|N>>>12),N=R+(C^O^z)+k[5]+4294588738&4294967295,R=C+(N<<4&4294967295|N>>>28),N=z+(R^C^O)+k[8]+2272392833&4294967295,z=R+(N<<11&4294967295|N>>>21),N=O+(z^R^C)+k[11]+1839030562&4294967295,O=z+(N<<16&4294967295|N>>>16),N=C+(O^z^R)+k[14]+4259657740&4294967295,C=O+(N<<23&4294967295|N>>>9),N=R+(C^O^z)+k[1]+2763975236&4294967295,R=C+(N<<4&4294967295|N>>>28),N=z+(R^C^O)+k[4]+1272893353&4294967295,z=R+(N<<11&4294967295|N>>>21),N=O+(z^R^C)+k[7]+4139469664&4294967295,O=z+(N<<16&4294967295|N>>>16),N=C+(O^z^R)+k[10]+3200236656&4294967295,C=O+(N<<23&4294967295|N>>>9),N=R+(C^O^z)+k[13]+681279174&4294967295,R=C+(N<<4&4294967295|N>>>28),N=z+(R^C^O)+k[0]+3936430074&4294967295,z=R+(N<<11&4294967295|N>>>21),N=O+(z^R^C)+k[3]+3572445317&4294967295,O=z+(N<<16&4294967295|N>>>16),N=C+(O^z^R)+k[6]+76029189&4294967295,C=O+(N<<23&4294967295|N>>>9),N=R+(C^O^z)+k[9]+3654602809&4294967295,R=C+(N<<4&4294967295|N>>>28),N=z+(R^C^O)+k[12]+3873151461&4294967295,z=R+(N<<11&4294967295|N>>>21),N=O+(z^R^C)+k[15]+530742520&4294967295,O=z+(N<<16&4294967295|N>>>16),N=C+(O^z^R)+k[2]+3299628645&4294967295,C=O+(N<<23&4294967295|N>>>9),N=R+(O^(C|~z))+k[0]+4096336452&4294967295,R=C+(N<<6&4294967295|N>>>26),N=z+(C^(R|~O))+k[7]+1126891415&4294967295,z=R+(N<<10&4294967295|N>>>22),N=O+(R^(z|~C))+k[14]+2878612391&4294967295,O=z+(N<<15&4294967295|N>>>17),N=C+(z^(O|~R))+k[5]+4237533241&4294967295,C=O+(N<<21&4294967295|N>>>11),N=R+(O^(C|~z))+k[12]+1700485571&4294967295,R=C+(N<<6&4294967295|N>>>26),N=z+(C^(R|~O))+k[3]+2399980690&4294967295,z=R+(N<<10&4294967295|N>>>22),N=O+(R^(z|~C))+k[10]+4293915773&4294967295,O=z+(N<<15&4294967295|N>>>17),N=C+(z^(O|~R))+k[1]+2240044497&4294967295,C=O+(N<<21&4294967295|N>>>11),N=R+(O^(C|~z))+k[8]+1873313359&4294967295,R=C+(N<<6&4294967295|N>>>26),N=z+(C^(R|~O))+k[15]+4264355552&4294967295,z=R+(N<<10&4294967295|N>>>22),N=O+(R^(z|~C))+k[6]+2734768916&4294967295,O=z+(N<<15&4294967295|N>>>17),N=C+(z^(O|~R))+k[13]+1309151649&4294967295,C=O+(N<<21&4294967295|N>>>11),N=R+(O^(C|~z))+k[4]+4149444226&4294967295,R=C+(N<<6&4294967295|N>>>26),N=z+(C^(R|~O))+k[11]+3174756917&4294967295,z=R+(N<<10&4294967295|N>>>22),N=O+(R^(z|~C))+k[2]+718787259&4294967295,O=z+(N<<15&4294967295|N>>>17),N=C+(z^(O|~R))+k[9]+3951481745&4294967295,j.g[0]=j.g[0]+R&4294967295,j.g[1]=j.g[1]+(O+(N<<21&4294967295|N>>>11))&4294967295,j.g[2]=j.g[2]+O&4294967295,j.g[3]=j.g[3]+z&4294967295}a.prototype.v=function(j,R){R===void 0&&(R=j.length);const C=R-this.blockSize,k=this.C;let O=this.h,z=0;for(;z<R;){if(O==0)for(;z<=C;)o(this,j,z),z+=this.blockSize;if(typeof j=="string"){for(;z<R;)if(k[O++]=j.charCodeAt(z++),O==this.blockSize){o(this,k),O=0;break}}else for(;z<R;)if(k[O++]=j[z++],O==this.blockSize){o(this,k),O=0;break}}this.h=O,this.o+=R},a.prototype.A=function(){var j=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);j[0]=128;for(var R=1;R<j.length-8;++R)j[R]=0;R=this.o*8;for(var C=j.length-8;C<j.length;++C)j[C]=R&255,R/=256;for(this.v(j),j=Array(16),R=0,C=0;C<4;++C)for(let k=0;k<32;k+=8)j[R++]=this.g[C]>>>k&255;return j};function u(j,R){var C=m;return Object.prototype.hasOwnProperty.call(C,j)?C[j]:C[j]=R(j)}function f(j,R){this.h=R;const C=[];let k=!0;for(let O=j.length-1;O>=0;O--){const z=j[O]|0;k&&z==R||(C[O]=z,k=!1)}this.g=C}var m={};function p(j){return-128<=j&&j<128?u(j,function(R){return new f([R|0],R<0?-1:0)}):new f([j|0],j<0?-1:0)}function g(j){if(isNaN(j)||!isFinite(j))return b;if(j<0)return P(g(-j));const R=[];let C=1;for(let k=0;j>=C;k++)R[k]=j/C|0,C*=4294967296;return new f(R,0)}function _(j,R){if(j.length==0)throw Error("number format error: empty string");if(R=R||10,R<2||36<R)throw Error("radix out of range: "+R);if(j.charAt(0)=="-")return P(_(j.substring(1),R));if(j.indexOf("-")>=0)throw Error('number format error: interior "-" character');const C=g(Math.pow(R,8));let k=b;for(let z=0;z<j.length;z+=8){var O=Math.min(8,j.length-z);const N=parseInt(j.substring(z,z+O),R);O<8?(O=g(Math.pow(R,O)),k=k.j(O).add(g(N))):(k=k.j(C),k=k.add(g(N)))}return k}var b=p(0),S=p(1),I=p(16777216);i=f.prototype,i.m=function(){if(F(this))return-P(this).m();let j=0,R=1;for(let C=0;C<this.g.length;C++){const k=this.i(C);j+=(k>=0?k:4294967296+k)*R,R*=4294967296}return j},i.toString=function(j){if(j=j||10,j<2||36<j)throw Error("radix out of range: "+j);if(U(this))return"0";if(F(this))return"-"+P(this).toString(j);const R=g(Math.pow(j,6));var C=this;let k="";for(;;){const O=lt(C,R).g;C=X(C,O.j(R));let z=((C.g.length>0?C.g[0]:C.h)>>>0).toString(j);if(C=O,U(C))return z+k;for(;z.length<6;)z="0"+z;k=z+k}},i.i=function(j){return j<0?0:j<this.g.length?this.g[j]:this.h};function U(j){if(j.h!=0)return!1;for(let R=0;R<j.g.length;R++)if(j.g[R]!=0)return!1;return!0}function F(j){return j.h==-1}i.l=function(j){return j=X(this,j),F(j)?-1:U(j)?0:1};function P(j){const R=j.g.length,C=[];for(let k=0;k<R;k++)C[k]=~j.g[k];return new f(C,~j.h).add(S)}i.abs=function(){return F(this)?P(this):this},i.add=function(j){const R=Math.max(this.g.length,j.g.length),C=[];let k=0;for(let O=0;O<=R;O++){let z=k+(this.i(O)&65535)+(j.i(O)&65535),N=(z>>>16)+(this.i(O)>>>16)+(j.i(O)>>>16);k=N>>>16,z&=65535,N&=65535,C[O]=N<<16|z}return new f(C,C[C.length-1]&-2147483648?-1:0)};function X(j,R){return j.add(P(R))}i.j=function(j){if(U(this)||U(j))return b;if(F(this))return F(j)?P(this).j(P(j)):P(P(this).j(j));if(F(j))return P(this.j(P(j)));if(this.l(I)<0&&j.l(I)<0)return g(this.m()*j.m());const R=this.g.length+j.g.length,C=[];for(var k=0;k<2*R;k++)C[k]=0;for(k=0;k<this.g.length;k++)for(let O=0;O<j.g.length;O++){const z=this.i(k)>>>16,N=this.i(k)&65535,ue=j.i(O)>>>16,ne=j.i(O)&65535;C[2*k+2*O]+=N*ne,Q(C,2*k+2*O),C[2*k+2*O+1]+=z*ne,Q(C,2*k+2*O+1),C[2*k+2*O+1]+=N*ue,Q(C,2*k+2*O+1),C[2*k+2*O+2]+=z*ue,Q(C,2*k+2*O+2)}for(j=0;j<R;j++)C[j]=C[2*j+1]<<16|C[2*j];for(j=R;j<2*R;j++)C[j]=0;return new f(C,0)};function Q(j,R){for(;(j[R]&65535)!=j[R];)j[R+1]+=j[R]>>>16,j[R]&=65535,R++}function Z(j,R){this.g=j,this.h=R}function lt(j,R){if(U(R))throw Error("division by zero");if(U(j))return new Z(b,b);if(F(j))return R=lt(P(j),R),new Z(P(R.g),P(R.h));if(F(R))return R=lt(j,P(R)),new Z(P(R.g),R.h);if(j.g.length>30){if(F(j)||F(R))throw Error("slowDivide_ only works with positive integers.");for(var C=S,k=R;k.l(j)<=0;)C=J(C),k=J(k);var O=ot(C,1),z=ot(k,1);for(k=ot(k,2),C=ot(C,2);!U(k);){var N=z.add(k);N.l(j)<=0&&(O=O.add(C),z=N),k=ot(k,1),C=ot(C,1)}return R=X(j,O.j(R)),new Z(O,R)}for(O=b;j.l(R)>=0;){for(C=Math.max(1,Math.floor(j.m()/R.m())),k=Math.ceil(Math.log(C)/Math.LN2),k=k<=48?1:Math.pow(2,k-48),z=g(C),N=z.j(R);F(N)||N.l(j)>0;)C-=k,z=g(C),N=z.j(R);U(z)&&(z=S),O=O.add(z),j=X(j,N)}return new Z(O,j)}i.B=function(j){return lt(this,j).h},i.and=function(j){const R=Math.max(this.g.length,j.g.length),C=[];for(let k=0;k<R;k++)C[k]=this.i(k)&j.i(k);return new f(C,this.h&j.h)},i.or=function(j){const R=Math.max(this.g.length,j.g.length),C=[];for(let k=0;k<R;k++)C[k]=this.i(k)|j.i(k);return new f(C,this.h|j.h)},i.xor=function(j){const R=Math.max(this.g.length,j.g.length),C=[];for(let k=0;k<R;k++)C[k]=this.i(k)^j.i(k);return new f(C,this.h^j.h)};function J(j){const R=j.g.length+1,C=[];for(let k=0;k<R;k++)C[k]=j.i(k)<<1|j.i(k-1)>>>31;return new f(C,j.h)}function ot(j,R){const C=R>>5;R%=32;const k=j.g.length-C,O=[];for(let z=0;z<k;z++)O[z]=R>0?j.i(z+C)>>>R|j.i(z+C+1)<<32-R:j.i(z+C);return new f(O,j.h)}a.prototype.digest=a.prototype.A,a.prototype.reset=a.prototype.u,a.prototype.update=a.prototype.v,tE=a,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.B,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=g,f.fromString=_,Xr=f}).apply(typeof Mv<"u"?Mv:typeof self<"u"?self:typeof window<"u"?window:{});var zc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var eE,Nl,nE,eh,Wp,iE,rE,aE;(function(){var i,t=Object.defineProperty;function r(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof zc=="object"&&zc];for(var y=0;y<c.length;++y){var x=c[y];if(x&&x.Math==Math)return x}throw Error("Cannot find global object")}var a=r(this);function o(c,y){if(y)t:{var x=a;c=c.split(".");for(var w=0;w<c.length-1;w++){var $=c[w];if(!($ in x))break t;x=x[$]}c=c[c.length-1],w=x[c],y=y(w),y!=w&&y!=null&&t(x,c,{configurable:!0,writable:!0,value:y})}}o("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(c){return c||function(y){var x=[],w;for(w in y)Object.prototype.hasOwnProperty.call(y,w)&&x.push([w,y[w]]);return x}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},f=this||self;function m(c){var y=typeof c;return y=="object"&&c!=null||y=="function"}function p(c,y,x){return c.call.apply(c.bind,arguments)}function g(c,y,x){return g=p,g.apply(null,arguments)}function _(c,y){var x=Array.prototype.slice.call(arguments,1);return function(){var w=x.slice();return w.push.apply(w,arguments),c.apply(this,w)}}function b(c,y){function x(){}x.prototype=y.prototype,c.Z=y.prototype,c.prototype=new x,c.prototype.constructor=c,c.Ob=function(w,$,Y){for(var ut=Array(arguments.length-2),At=2;At<arguments.length;At++)ut[At-2]=arguments[At];return y.prototype[$].apply(w,ut)}}var S=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function I(c){const y=c.length;if(y>0){const x=Array(y);for(let w=0;w<y;w++)x[w]=c[w];return x}return[]}function U(c,y){for(let w=1;w<arguments.length;w++){const $=arguments[w];var x=typeof $;if(x=x!="object"?x:$?Array.isArray($)?"array":x:"null",x=="array"||x=="object"&&typeof $.length=="number"){x=c.length||0;const Y=$.length||0;c.length=x+Y;for(let ut=0;ut<Y;ut++)c[x+ut]=$[ut]}else c.push($)}}class F{constructor(y,x){this.i=y,this.j=x,this.h=0,this.g=null}get(){let y;return this.h>0?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function P(c){f.setTimeout(()=>{throw c},0)}function X(){var c=j;let y=null;return c.g&&(y=c.g,c.g=c.g.next,c.g||(c.h=null),y.next=null),y}class Q{constructor(){this.h=this.g=null}add(y,x){const w=Z.get();w.set(y,x),this.h?this.h.next=w:this.g=w,this.h=w}}var Z=new F(()=>new lt,c=>c.reset());class lt{constructor(){this.next=this.g=this.h=null}set(y,x){this.h=y,this.g=x,this.next=null}reset(){this.next=this.g=this.h=null}}let J,ot=!1,j=new Q,R=()=>{const c=Promise.resolve(void 0);J=()=>{c.then(C)}};function C(){for(var c;c=X();){try{c.h.call(c.g)}catch(x){P(x)}var y=Z;y.j(c),y.h<100&&(y.h++,c.next=y.g,y.g=c)}ot=!1}function k(){this.u=this.u,this.C=this.C}k.prototype.u=!1,k.prototype.dispose=function(){this.u||(this.u=!0,this.N())},k.prototype[Symbol.dispose]=function(){this.dispose()},k.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function O(c,y){this.type=c,this.g=this.target=y,this.defaultPrevented=!1}O.prototype.h=function(){this.defaultPrevented=!0};var z=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var c=!1,y=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const x=()=>{};f.addEventListener("test",x,y),f.removeEventListener("test",x,y)}catch{}return c})();function N(c){return/^[\s\xa0]*$/.test(c)}function ue(c,y){O.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,y)}b(ue,O),ue.prototype.init=function(c,y){const x=this.type=c.type,w=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=y,y=c.relatedTarget,y||(x=="mouseover"?y=c.fromElement:x=="mouseout"&&(y=c.toElement)),this.relatedTarget=y,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&ue.Z.h.call(this)},ue.prototype.h=function(){ue.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var ne="closure_listenable_"+(Math.random()*1e6|0),tt=0;function ft(c,y,x,w,$){this.listener=c,this.proxy=null,this.src=y,this.type=x,this.capture=!!w,this.ha=$,this.key=++tt,this.da=this.fa=!1}function yt(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Ct(c,y,x){for(const w in c)y.call(x,c[w],w,c)}function M(c,y){for(const x in c)y.call(void 0,c[x],x,c)}function rt(c){const y={};for(const x in c)y[x]=c[x];return y}const ct="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ht(c,y){let x,w;for(let $=1;$<arguments.length;$++){w=arguments[$];for(x in w)c[x]=w[x];for(let Y=0;Y<ct.length;Y++)x=ct[Y],Object.prototype.hasOwnProperty.call(w,x)&&(c[x]=w[x])}}function gt(c){this.src=c,this.g={},this.h=0}gt.prototype.add=function(c,y,x,w,$){const Y=c.toString();c=this.g[Y],c||(c=this.g[Y]=[],this.h++);const ut=xt(c,y,w,$);return ut>-1?(y=c[ut],x||(y.fa=!1)):(y=new ft(y,this.src,Y,!!w,$),y.fa=x,c.push(y)),y};function jt(c,y){const x=y.type;if(x in c.g){var w=c.g[x],$=Array.prototype.indexOf.call(w,y,void 0),Y;(Y=$>=0)&&Array.prototype.splice.call(w,$,1),Y&&(yt(y),c.g[x].length==0&&(delete c.g[x],c.h--))}}function xt(c,y,x,w){for(let $=0;$<c.length;++$){const Y=c[$];if(!Y.da&&Y.listener==y&&Y.capture==!!x&&Y.ha==w)return $}return-1}var me="closure_lm_"+(Math.random()*1e6|0),Lt={};function De(c,y,x,w,$){if(Array.isArray(y)){for(let Y=0;Y<y.length;Y++)De(c,y[Y],x,w,$);return null}return x=mu(x),c&&c[ne]?c.J(y,x,m(w)?!!w.capture:!1,$):Ii(c,y,x,!1,w,$)}function Ii(c,y,x,w,$,Y){if(!y)throw Error("Invalid event type");const ut=m($)?!!$.capture:!!$;let At=bo(c);if(At||(c[me]=At=new gt(c)),x=At.add(y,x,w,ut,Y),x.proxy)return x;if(w=Hn(),x.proxy=w,w.src=c,w.listener=x,c.addEventListener)z||($=ut),$===void 0&&($=!1),c.addEventListener(y.toString(),w,$);else if(c.attachEvent)c.attachEvent(ts(y.toString()),w);else if(c.addListener&&c.removeListener)c.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return x}function Hn(){function c(x){return y.call(c.src,c.listener,x)}const y=nf;return c}function on(c,y,x,w,$){if(Array.isArray(y))for(var Y=0;Y<y.length;Y++)on(c,y[Y],x,w,$);else w=m(w)?!!w.capture:!!w,x=mu(x),c&&c[ne]?(c=c.i,Y=String(y).toString(),Y in c.g&&(y=c.g[Y],x=xt(y,x,w,$),x>-1&&(yt(y[x]),Array.prototype.splice.call(y,x,1),y.length==0&&(delete c.g[Y],c.h--)))):c&&(c=bo(c))&&(y=c.g[y.toString()],c=-1,y&&(c=xt(y,x,w,$)),(x=c>-1?y[c]:null)&&oa(x))}function oa(c){if(typeof c!="number"&&c&&!c.da){var y=c.src;if(y&&y[ne])jt(y.i,c);else{var x=c.type,w=c.proxy;y.removeEventListener?y.removeEventListener(x,w,c.capture):y.detachEvent?y.detachEvent(ts(x),w):y.addListener&&y.removeListener&&y.removeListener(w),(x=bo(y))?(jt(x,c),x.h==0&&(x.src=null,y[me]=null)):yt(c)}}}function ts(c){return c in Lt?Lt[c]:Lt[c]="on"+c}function nf(c,y){if(c.da)c=!0;else{y=new ue(y,this);const x=c.listener,w=c.ha||c.src;c.fa&&oa(c),c=x.call(w,y)}return c}function bo(c){return c=c[me],c instanceof gt?c:null}var dn="__closure_events_fn_"+(Math.random()*1e9>>>0);function mu(c){return typeof c=="function"?c:(c[dn]||(c[dn]=function(y){return c.handleEvent(y)}),c[dn])}function Ne(){k.call(this),this.i=new gt(this),this.M=this,this.G=null}b(Ne,k),Ne.prototype[ne]=!0,Ne.prototype.removeEventListener=function(c,y,x,w){on(this,c,y,x,w)};function Pe(c,y){var x,w=c.G;if(w)for(x=[];w;w=w.G)x.push(w);if(c=c.M,w=y.type||y,typeof y=="string")y=new O(y,c);else if(y instanceof O)y.target=y.target||c;else{var $=y;y=new O(w,c),ht(y,$)}$=!0;let Y,ut;if(x)for(ut=x.length-1;ut>=0;ut--)Y=y.g=x[ut],$=Di(Y,w,!0,y)&&$;if(Y=y.g=c,$=Di(Y,w,!0,y)&&$,$=Di(Y,w,!1,y)&&$,x)for(ut=0;ut<x.length;ut++)Y=y.g=x[ut],$=Di(Y,w,!1,y)&&$}Ne.prototype.N=function(){if(Ne.Z.N.call(this),this.i){var c=this.i;for(const y in c.g){const x=c.g[y];for(let w=0;w<x.length;w++)yt(x[w]);delete c.g[y],c.h--}}this.G=null},Ne.prototype.J=function(c,y,x,w){return this.i.add(String(c),y,!1,x,w)},Ne.prototype.K=function(c,y,x,w){return this.i.add(String(c),y,!0,x,w)};function Di(c,y,x,w){if(y=c.i.g[String(y)],!y)return!0;y=y.concat();let $=!0;for(let Y=0;Y<y.length;++Y){const ut=y[Y];if(ut&&!ut.da&&ut.capture==x){const At=ut.listener,ae=ut.ha||ut.src;ut.fa&&jt(c.i,ut),$=At.call(ae,w)!==!1&&$}}return $&&!w.defaultPrevented}function rf(c,y){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=g(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(y)>2147483647?-1:f.setTimeout(c,y||0)}function To(c){c.g=rf(()=>{c.g=null,c.i&&(c.i=!1,To(c))},c.l);const y=c.h;c.h=null,c.m.apply(null,y)}class af extends k{constructor(y,x){super(),this.m=y,this.l=x,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:To(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function la(c){k.call(this),this.h=c,this.g={}}b(la,k);var lr=[];function Je(c){Ct(c.g,function(y,x){this.g.hasOwnProperty(x)&&oa(y)},c),c.g={}}la.prototype.N=function(){la.Z.N.call(this),Je(this)},la.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var In=f.JSON.stringify,ln=f.JSON.parse,sf=class{stringify(c){return f.JSON.stringify(c,void 0)}parse(c){return f.JSON.parse(c,void 0)}};function gu(){}function yu(){}var ai={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ur(){O.call(this,"d")}b(ur,O);function qn(){O.call(this,"c")}b(qn,O);var Dn={},cr=null;function es(){return cr=cr||new Ne}Dn.Ia="serverreachability";function wo(c){O.call(this,Dn.Ia,c)}b(wo,O);function hr(c){const y=es();Pe(y,new wo(y))}Dn.STAT_EVENT="statevent";function ns(c,y){O.call(this,Dn.STAT_EVENT,c),this.stat=y}b(ns,O);function ve(c){const y=es();Pe(y,new ns(y,c))}Dn.Ja="timingevent";function vu(c,y){O.call(this,Dn.Ja,c),this.size=y}b(vu,O);function fr(c,y){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){c()},y)}function dr(){this.g=!0}dr.prototype.ua=function(){this.g=!1};function So(c,y,x,w,$,Y){c.info(function(){if(c.g)if(Y){var ut="",At=Y.split("&");for(let Yt=0;Yt<At.length;Yt++){var ae=At[Yt].split("=");if(ae.length>1){const Ee=ae[0];ae=ae[1];const _n=Ee.split("_");ut=_n.length>=2&&_n[1]=="type"?ut+(Ee+"="+ae+"&"):ut+(Ee+"=redacted&")}}}else ut=null;else ut=Y;return"XMLHTTP REQ ("+w+") [attempt "+$+"]: "+y+`
`+x+`
`+ut})}function Ao(c,y,x,w,$,Y,ut){c.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+$+"]: "+y+`
`+x+`
`+Y+" "+ut})}function Ni(c,y,x,w){c.info(function(){return"XMLHTTP TEXT ("+y+"): "+si(c,x)+(w?" "+w:"")})}function of(c,y){c.info(function(){return"TIMEOUT: "+y})}dr.prototype.info=function(){};function si(c,y){if(!c.g)return y;if(!y)return null;try{const Y=JSON.parse(y);if(Y){for(c=0;c<Y.length;c++)if(Array.isArray(Y[c])){var x=Y[c];if(!(x.length<2)){var w=x[1];if(Array.isArray(w)&&!(w.length<1)){var $=w[0];if($!="noop"&&$!="stop"&&$!="close")for(let ut=1;ut<w.length;ut++)w[ut]=""}}}}return In(Y)}catch{return y}}var xe={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},qe={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Mi;function ua(){}b(ua,gu),ua.prototype.g=function(){return new XMLHttpRequest},Mi=new ua;function ca(c){return encodeURIComponent(String(c))}function lf(c){var y=1;c=c.split(":");const x=[];for(;y>0&&c.length;)x.push(c.shift()),y--;return c.length&&x.push(c.join(":")),x}function Gn(c,y,x,w){this.j=c,this.i=y,this.l=x,this.S=w||1,this.V=new la(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new pr}function pr(){this.i=null,this.g="",this.h=!1}var is={},oi={};function li(c,y,x){c.M=1,c.A=Vi(fe(y)),c.u=x,c.R=!0,mr(c,null)}function mr(c,y){c.F=Date.now(),ha(c),c.B=fe(c.A);var x=c.B,w=c.S;Array.isArray(w)||(w=[String(w)]),bu(x.i,"t",w),c.C=0,x=c.j.L,c.h=new pr,c.g=ds(c.j,x?y:null,!c.u),c.P>0&&(c.O=new af(g(c.Y,c,c.g),c.P)),y=c.V,x=c.g,w=c.ba;var $="readystatechange";Array.isArray($)||($&&(lr[0]=$.toString()),$=lr);for(let Y=0;Y<$.length;Y++){const ut=De(x,$[Y],w||y.handleEvent,!1,y.h||y);if(!ut)break;y.g[ut.key]=ut}y=c.J?rt(c.J):{},c.u?(c.v||(c.v="POST"),y["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,y)):(c.v="GET",c.g.ea(c.B,c.v,null,y)),hr(),So(c.i,c.v,c.B,c.l,c.S,c.u)}Gn.prototype.ba=function(c){c=c.target;const y=this.O;y&&tn(c)==3?y.j():this.Y(c)},Gn.prototype.Y=function(c){try{if(c==this.g)t:{const At=tn(this.g),ae=this.g.ya(),Yt=this.g.ca();if(!(At<3)&&(At!=3||this.g&&(this.h.h||this.g.la()||ba(this.g)))){this.K||At!=4||ae==7||(ae==8||Yt<=0?hr(3):hr(2)),ci(this);var y=this.g.ca();this.X=y;var x=gr(this);if(this.o=y==200,Ao(this.i,this.v,this.B,this.l,this.S,At,y),this.o){if(this.U&&!this.L){e:{if(this.g){var w,$=this.g;if((w=$.g?$.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(w)){var Y=w;break e}}Y=null}if(c=Y)Ni(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,rs(this,c);else{this.o=!1,this.m=3,ve(12),hi(this),fa(this);break t}}if(this.R){c=!0;let Ee;for(;!this.K&&this.C<x.length;)if(Ee=xu(this,x),Ee==oi){At==4&&(this.m=4,ve(14),c=!1),Ni(this.i,this.l,null,"[Incomplete Response]");break}else if(Ee==is){this.m=4,ve(15),Ni(this.i,this.l,x,"[Invalid Chunk]"),c=!1;break}else Ni(this.i,this.l,Ee,null),rs(this,Ee);if(_e(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),At!=4||x.length!=0||this.h.h||(this.m=1,ve(16),c=!1),this.o=this.o&&c,!c)Ni(this.i,this.l,x,"[Invalid Chunked Response]"),hi(this),fa(this);else if(x.length>0&&!this.W){this.W=!0;var ut=this.j;ut.g==this&&ut.aa&&!ut.P&&(ut.j.info("Great, no buffering proxy detected. Bytes received: "+x.length),ko(ut),ut.P=!0,ve(11))}}else Ni(this.i,this.l,x,null),rs(this,x);At==4&&hi(this),this.o&&!this.K&&(At==4?Uo(this.j,this):(this.o=!1,ha(this)))}else Ta(this.g),y==400&&x.indexOf("Unknown SID")>0?(this.m=3,ve(12)):(this.m=0,ve(13)),hi(this),fa(this)}}}catch{}finally{}};function gr(c){if(!_e(c))return c.g.la();const y=ba(c.g);if(y==="")return"";let x="";const w=y.length,$=tn(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return hi(c),fa(c),"";c.h.i=new f.TextDecoder}for(let Y=0;Y<w;Y++)c.h.h=!0,x+=c.h.i.decode(y[Y],{stream:!($&&Y==w-1)});return y.length=0,c.h.g+=x,c.C=0,c.h.g}function _e(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function xu(c,y){var x=c.C,w=y.indexOf(`
`,x);return w==-1?oi:(x=Number(y.substring(x,w)),isNaN(x)?is:(w+=1,w+x>y.length?oi:(y=y.slice(w,w+x),c.C=w+x,y)))}Gn.prototype.cancel=function(){this.K=!0,hi(this)};function ha(c){c.T=Date.now()+c.H,ui(c,c.H)}function ui(c,y){if(c.D!=null)throw Error("WatchDog timer not null");c.D=fr(g(c.aa,c),y)}function ci(c){c.D&&(f.clearTimeout(c.D),c.D=null)}Gn.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(of(this.i,this.B),this.M!=2&&(hr(),ve(17)),hi(this),this.m=2,fa(this)):ui(this,this.T-c)};function fa(c){c.j.I==0||c.K||Uo(c.j,c)}function hi(c){ci(c);var y=c.O;y&&typeof y.dispose=="function"&&y.dispose(),c.O=null,Je(c.V),c.g&&(y=c.g,c.g=null,y.abort(),y.dispose())}function rs(c,y){try{var x=c.j;if(x.I!=0&&(x.g==c||ma(x.h,c))){if(!c.L&&ma(x.h,c)&&x.I==3){try{var w=x.Ba.g.parse(y)}catch{w=null}if(Array.isArray(w)&&w.length==3){var $=w;if($[0]==0){t:if(!x.v){if(x.g)if(x.g.F+3e3<c.F)fs(x),fi(x);else break t;Vo(x),ve(18)}}else x.xa=$[1],0<x.xa-x.K&&$[2]<37500&&x.F&&x.A==0&&!x.C&&(x.C=fr(g(x.Va,x),6e3));Nn(x.h)<=1&&x.ta&&(x.ta=void 0)}else Pi(x,11)}else if((c.L||x.g==c)&&fs(x),!N(y))for($=x.Ba.g.parse(y),y=0;y<$.length;y++){let Yt=$[y];const Ee=Yt[0];if(!(Ee<=x.K))if(x.K=Ee,Yt=Yt[1],x.I==2)if(Yt[0]=="c"){x.M=Yt[1],x.ba=Yt[2];const _n=Yt[3];_n!=null&&(x.ka=_n,x.j.info("VER="+x.ka));const di=Yt[4];di!=null&&(x.za=di,x.j.info("SVER="+x.za));const Xn=Yt[5];Xn!=null&&typeof Xn=="number"&&Xn>0&&(w=1.5*Xn,x.O=w,x.j.info("backChannelRequestTimeoutMs_="+w)),w=x;const Wn=c.g;if(Wn){const Zn=Wn.g?Wn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Zn){var Y=w.h;Y.g||Zn.indexOf("spdy")==-1&&Zn.indexOf("quic")==-1&&Zn.indexOf("h2")==-1||(Y.j=Y.l,Y.g=new Set,Y.h&&(as(Y,Y.h),Y.h=null))}if(w.G){const Lo=Wn.g?Wn.g.getResponseHeader("X-HTTP-Session-Id"):null;Lo&&(w.wa=Lo,Wt(w.J,w.G,Lo))}}x.I=3,x.l&&x.l.ra(),x.aa&&(x.T=Date.now()-c.F,x.j.info("Handshake RTT: "+x.T+"ms")),w=x;var ut=c;if(w.na=Du(w,w.L?w.ba:null,w.W),ut.L){Oi(w.h,ut);var At=ut,ae=w.O;ae&&(At.H=ae),At.D&&(ci(At),ha(At)),w.g=ut}else Ru(w);x.i.length>0&&Ra(x)}else Yt[0]!="stop"&&Yt[0]!="close"||Pi(x,7);else x.I==3&&(Yt[0]=="stop"||Yt[0]=="close"?Yt[0]=="stop"?Pi(x,7):Sa(x):Yt[0]!="noop"&&x.l&&x.l.qa(Yt),x.A=0)}}hr(4)}catch{}}var uf=class{constructor(c,y){this.g=c,this.map=y}};function da(c){this.l=c||10,f.PerformanceNavigationTiming?(c=f.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function pa(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Nn(c){return c.h?1:c.g?c.g.size:0}function ma(c,y){return c.h?c.h==y:c.g?c.g.has(y):!1}function as(c,y){c.g?c.g.add(y):c.h=y}function Oi(c,y){c.h&&c.h==y?c.h=null:c.g&&c.g.has(y)&&c.g.delete(y)}da.prototype.cancel=function(){if(this.i=ss(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function ss(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let y=c.i;for(const x of c.g.values())y=y.concat(x.G);return y}return I(c.i)}var os=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cf(c,y){if(c){c=c.split("&");for(let x=0;x<c.length;x++){const w=c[x].indexOf("=");let $,Y=null;w>=0?($=c[x].substring(0,w),Y=c[x].substring(w+1)):$=c[x],y($,Y?decodeURIComponent(Y.replace(/\+/g," ")):"")}}}function Yn(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let y;c instanceof Yn?(this.l=c.l,yr(this,c.j),this.o=c.o,this.g=c.g,ga(this,c.u),this.h=c.h,vr(this,Tu(c.i)),this.m=c.m):c&&(y=String(c).match(os))?(this.l=!1,yr(this,y[1]||"",!0),this.o=ya(y[2]||""),this.g=ya(y[3]||"",!0),ga(this,y[4]),this.h=ya(y[5]||"",!0),vr(this,y[6]||"",!0),this.m=ya(y[7]||"")):(this.l=!1,this.i=new Mn(null,this.l))}Yn.prototype.toString=function(){const c=[];var y=this.j;y&&c.push(Le(y,Co,!0),":");var x=this.g;return(x||y=="file")&&(c.push("//"),(y=this.o)&&c.push(Le(y,Co,!0),"@"),c.push(ca(x).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),x=this.u,x!=null&&c.push(":",String(x))),(x=this.h)&&(this.g&&x.charAt(0)!="/"&&c.push("/"),c.push(Le(x,x.charAt(0)=="/"?xr:jo,!0))),(x=this.i.toString())&&c.push("?",x),(x=this.m)&&c.push("#",Le(x,Eu)),c.join("")},Yn.prototype.resolve=function(c){const y=fe(this);let x=!!c.j;x?yr(y,c.j):x=!!c.o,x?y.o=c.o:x=!!c.g,x?y.g=c.g:x=c.u!=null;var w=c.h;if(x)ga(y,c.u);else if(x=!!c.h){if(w.charAt(0)!="/")if(this.g&&!this.h)w="/"+w;else{var $=y.h.lastIndexOf("/");$!=-1&&(w=y.h.slice(0,$+1)+w)}if($=w,$==".."||$==".")w="";else if($.indexOf("./")!=-1||$.indexOf("/.")!=-1){w=$.lastIndexOf("/",0)==0,$=$.split("/");const Y=[];for(let ut=0;ut<$.length;){const At=$[ut++];At=="."?w&&ut==$.length&&Y.push(""):At==".."?((Y.length>1||Y.length==1&&Y[0]!="")&&Y.pop(),w&&ut==$.length&&Y.push("")):(Y.push(At),w=!0)}w=Y.join("/")}else w=$}return x?y.h=w:x=c.i.toString()!=="",x?vr(y,Tu(c.i)):x=!!c.m,x&&(y.m=c.m),y};function fe(c){return new Yn(c)}function yr(c,y,x){c.j=x?ya(y,!0):y,c.j&&(c.j=c.j.replace(/:$/,""))}function ga(c,y){if(y){if(y=Number(y),isNaN(y)||y<0)throw Error("Bad port number "+y);c.u=y}else c.u=null}function vr(c,y,x){y instanceof Mn?(c.i=y,No(c.i,c.l)):(x||(y=Le(y,_u)),c.i=new Mn(y,c.l))}function Wt(c,y,x){c.i.set(y,x)}function Vi(c){return Wt(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function ya(c,y){return c?y?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Le(c,y,x){return typeof c=="string"?(c=encodeURI(c).replace(y,Ro),x&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Ro(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Co=/[#\/\?@]/g,jo=/[#\?:]/g,xr=/[#\?]/g,_u=/[#\?@]/g,Eu=/#/g;function Mn(c,y){this.h=this.g=null,this.i=c||null,this.j=!!y}function ki(c){c.g||(c.g=new Map,c.h=0,c.i&&cf(c.i,function(y,x){c.add(decodeURIComponent(y.replace(/\+/g," ")),x)}))}i=Mn.prototype,i.add=function(c,y){ki(this),this.i=null,c=Qn(this,c);let x=this.g.get(c);return x||this.g.set(c,x=[]),x.push(y),this.h+=1,this};function Io(c,y){ki(c),y=Qn(c,y),c.g.has(y)&&(c.i=null,c.h-=c.g.get(y).length,c.g.delete(y))}function Do(c,y){return ki(c),y=Qn(c,y),c.g.has(y)}i.forEach=function(c,y){ki(this),this.g.forEach(function(x,w){x.forEach(function($){c.call(y,$,w,this)},this)},this)};function ls(c,y){ki(c);let x=[];if(typeof y=="string")Do(c,y)&&(x=x.concat(c.g.get(Qn(c,y))));else for(c=Array.from(c.g.values()),y=0;y<c.length;y++)x=x.concat(c[y]);return x}i.set=function(c,y){return ki(this),this.i=null,c=Qn(this,c),Do(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[y]),this.h+=1,this},i.get=function(c,y){return c?(c=ls(this,c),c.length>0?String(c[0]):y):y};function bu(c,y,x){Io(c,y),x.length>0&&(c.i=null,c.g.set(Qn(c,y),I(x)),c.h+=x.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],y=Array.from(this.g.keys());for(let w=0;w<y.length;w++){var x=y[w];const $=ca(x);x=ls(this,x);for(let Y=0;Y<x.length;Y++){let ut=$;x[Y]!==""&&(ut+="="+ca(x[Y])),c.push(ut)}}return this.i=c.join("&")};function Tu(c){const y=new Mn;return y.i=c.i,c.g&&(y.g=new Map(c.g),y.h=c.h),y}function Qn(c,y){return y=String(y),c.j&&(y=y.toLowerCase()),y}function No(c,y){y&&!c.j&&(ki(c),c.i=null,c.g.forEach(function(x,w){const $=w.toLowerCase();w!=$&&(Io(this,w),bu(this,$,x))},c)),c.j=y}function Mo(c,y){const x=new dr;if(f.Image){const w=new Image;w.onload=_(un,x,"TestLoadImage: loaded",!0,y,w),w.onerror=_(un,x,"TestLoadImage: error",!1,y,w),w.onabort=_(un,x,"TestLoadImage: abort",!1,y,w),w.ontimeout=_(un,x,"TestLoadImage: timeout",!1,y,w),f.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=c}else y(!1)}function _r(c,y){const x=new dr,w=new AbortController,$=setTimeout(()=>{w.abort(),un(x,"TestPingServer: timeout",!1,y)},1e4);fetch(c,{signal:w.signal}).then(Y=>{clearTimeout($),Y.ok?un(x,"TestPingServer: ok",!0,y):un(x,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout($),un(x,"TestPingServer: error",!1,y)})}function un(c,y,x,w,$){try{$&&($.onload=null,$.onerror=null,$.onabort=null,$.ontimeout=null),w(x)}catch{}}function wu(){this.g=new sf}function va(c){this.i=c.Sb||null,this.h=c.ab||!1}b(va,gu),va.prototype.g=function(){return new xa(this.i,this.h)};function xa(c,y){Ne.call(this),this.H=c,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}b(xa,Ne),i=xa.prototype,i.open=function(c,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=y,this.readyState=1,Ui(this)},i.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const y={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(y.body=c),(this.H||f).fetch(new Request(this.D,y)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,cn(this)),this.readyState=0},i.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Ui(this)),this.g&&(this.readyState=3,Ui(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Er(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function Er(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}i.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var y=c.value?c.value:new Uint8Array(0);(y=this.B.decode(y,{stream:!c.done}))&&(this.response=this.responseText+=y)}c.done?cn(this):Ui(this),this.readyState==3&&Er(this)}},i.Oa=function(c){this.g&&(this.response=this.responseText=c,cn(this))},i.Na=function(c){this.g&&(this.response=c,cn(this))},i.ga=function(){this.g&&cn(this)};function cn(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Ui(c)}i.setRequestHeader=function(c,y){this.A.append(c,y)},i.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],y=this.h.entries();for(var x=y.next();!x.done;)x=x.value,c.push(x[0]+": "+x[1]),x=y.next();return c.join(`\r
`)};function Ui(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(xa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function br(c){let y="";return Ct(c,function(x,w){y+=w,y+=":",y+=x,y+=`\r
`}),y}function On(c,y,x){t:{for(w in x){var w=!1;break t}w=!0}w||(x=br(x),typeof c=="string"?x!=null&&ca(x):Wt(c,y,x))}function ie(c){Ne.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}b(ie,Ne);var us=/^https?$/i,Su=["POST","PUT"];i=ie.prototype,i.Fa=function(c){this.H=c},i.ea=function(c,y,x,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);y=y?y.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Mi.g(),this.g.onreadystatechange=S(g(this.Ca,this));try{this.B=!0,this.g.open(y,String(c),!0),this.B=!1}catch(Y){_a(this,Y);return}if(c=x||"",x=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var $ in w)x.set($,w[$]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const Y of w.keys())x.set(Y,w.get(Y));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(x.keys()).find(Y=>Y.toLowerCase()=="content-type"),$=f.FormData&&c instanceof f.FormData,!(Array.prototype.indexOf.call(Su,y,void 0)>=0)||w||$||x.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Y,ut]of x)this.g.setRequestHeader(Y,ut);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(Y){_a(this,Y)}};function _a(c,y){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=y,c.o=5,Ea(c),Me(c)}function Ea(c){c.A||(c.A=!0,Pe(c,"complete"),Pe(c,"error"))}i.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,Pe(this,"complete"),Pe(this,"abort"),Me(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Me(this,!0)),ie.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?Oo(this):this.Xa())},i.Xa=function(){Oo(this)};function Oo(c){if(c.h&&typeof u<"u"){if(c.v&&tn(c)==4)setTimeout(c.Ca.bind(c),0);else if(Pe(c,"readystatechange"),tn(c)==4){c.h=!1;try{const Y=c.ca();t:switch(Y){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break t;default:y=!1}var x;if(!(x=y)){var w;if(w=Y===0){let ut=String(c.D).match(os)[1]||null;!ut&&f.self&&f.self.location&&(ut=f.self.location.protocol.slice(0,-1)),w=!us.test(ut?ut.toLowerCase():"")}x=w}if(x)Pe(c,"complete"),Pe(c,"success");else{c.o=6;try{var $=tn(c)>2?c.g.statusText:""}catch{$=""}c.l=$+" ["+c.ca()+"]",Ea(c)}}finally{Me(c)}}}}function Me(c,y){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const x=c.g;c.g=null,y||Pe(c,"ready");try{x.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function tn(c){return c.g?c.g.readyState:0}i.ca=function(){try{return tn(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(c){if(this.g){var y=this.g.responseText;return c&&y.indexOf(c)==0&&(y=y.substring(c.length)),ln(y)}};function ba(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Ta(c){const y={};c=(c.g&&tn(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<c.length;w++){if(N(c[w]))continue;var x=lf(c[w]);const $=x[0];if(x=x[1],typeof x!="string")continue;x=x.trim();const Y=y[$]||[];y[$]=Y,Y.push(x)}M(y,function(w){return w.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function wa(c,y,x){return x&&x.internalChannelParams&&x.internalChannelParams[c]||y}function cs(c){this.za=0,this.i=[],this.j=new dr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=wa("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=wa("baseRetryDelayMs",5e3,c),this.Za=wa("retryDelaySeedMs",1e4,c),this.Ta=wa("forwardChannelMaxRetries",2,c),this.va=wa("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new da(c&&c.concurrentRequestLimit),this.Ba=new wu,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=cs.prototype,i.ka=8,i.I=1,i.connect=function(c,y,x,w){ve(0),this.W=c,this.H=y||{},x&&w!==void 0&&(this.H.OSID=x,this.H.OAID=w),this.F=this.X,this.J=Du(this,null,this.W),Ra(this)};function Sa(c){if(Aa(c),c.I==3){var y=c.V++,x=fe(c.J);if(Wt(x,"SID",c.M),Wt(x,"RID",y),Wt(x,"TYPE","terminate"),Ca(c,x),y=new Gn(c,c.j,y),y.M=2,y.A=Vi(fe(x)),x=!1,f.navigator&&f.navigator.sendBeacon)try{x=f.navigator.sendBeacon(y.A.toString(),"")}catch{}!x&&f.Image&&(new Image().src=y.A,x=!0),x||(y.g=ds(y.j,null),y.g.ea(y.A)),y.F=Date.now(),ha(y)}Iu(c)}function fi(c){c.g&&(ko(c),c.g.cancel(),c.g=null)}function Aa(c){fi(c),c.v&&(f.clearTimeout(c.v),c.v=null),fs(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&f.clearTimeout(c.m),c.m=null)}function Ra(c){if(!pa(c.h)&&!c.m){c.m=!0;var y=c.Ea;J||R(),ot||(J(),ot=!0),j.add(y,c),c.D=0}}function hf(c,y){return Nn(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=y.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=fr(g(c.Ea,c,y),ju(c,c.D)),c.D++,!0)}i.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const $=new Gn(this,this.j,c);let Y=this.o;if(this.U&&(Y?(Y=rt(Y),ht(Y,this.U)):Y=this.U),this.u!==null||this.R||($.J=Y,Y=null),this.S)t:{for(var y=0,x=0;x<this.i.length;x++){e:{var w=this.i[x];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break e}w=void 0}if(w===void 0)break;if(y+=w,y>4096){y=x;break t}if(y===4096||x===this.i.length-1){y=x+1;break t}}y=1e3}else y=1e3;y=hs(this,$,y),x=fe(this.J),Wt(x,"RID",c),Wt(x,"CVER",22),this.G&&Wt(x,"X-HTTP-Session-Id",this.G),Ca(this,x),Y&&(this.R?y="headers="+ca(br(Y))+"&"+y:this.u&&On(x,this.u,Y)),as(this.h,$),this.Ra&&Wt(x,"TYPE","init"),this.S?(Wt(x,"$req",y),Wt(x,"SID","null"),$.U=!0,li($,x,null)):li($,x,y),this.I=2}}else this.I==3&&(c?Au(this,c):this.i.length==0||pa(this.h)||Au(this))};function Au(c,y){var x;y?x=y.l:x=c.V++;const w=fe(c.J);Wt(w,"SID",c.M),Wt(w,"RID",x),Wt(w,"AID",c.K),Ca(c,w),c.u&&c.o&&On(w,c.u,c.o),x=new Gn(c,c.j,x,c.D+1),c.u===null&&(x.J=c.o),y&&(c.i=y.G.concat(c.i)),y=hs(c,x,1e3),x.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),as(c.h,x),li(x,w,y)}function Ca(c,y){c.H&&Ct(c.H,function(x,w){Wt(y,w,x)}),c.l&&Ct({},function(x,w){Wt(y,w,x)})}function hs(c,y,x){x=Math.min(c.i.length,x);const w=c.l?g(c.l.Ka,c.l,c):null;t:{var $=c.i;let At=-1;for(;;){const ae=["count="+x];At==-1?x>0?(At=$[0].g,ae.push("ofs="+At)):At=0:ae.push("ofs="+At);let Yt=!0;for(let Ee=0;Ee<x;Ee++){var Y=$[Ee].g;const _n=$[Ee].map;if(Y-=At,Y<0)At=Math.max(0,$[Ee].g-100),Yt=!1;else try{Y="req"+Y+"_"||"";try{var ut=_n instanceof Map?_n:Object.entries(_n);for(const[di,Xn]of ut){let Wn=Xn;m(Xn)&&(Wn=In(Xn)),ae.push(Y+di+"="+encodeURIComponent(Wn))}}catch(di){throw ae.push(Y+"type="+encodeURIComponent("_badmap")),di}}catch{w&&w(_n)}}if(Yt){ut=ae.join("&");break t}}ut=void 0}return c=c.i.splice(0,x),y.G=c,ut}function Ru(c){if(!c.g&&!c.v){c.Y=1;var y=c.Da;J||R(),ot||(J(),ot=!0),j.add(y,c),c.A=0}}function Vo(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=fr(g(c.Da,c),ju(c,c.A)),c.A++,!0)}i.Da=function(){if(this.v=null,Cu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=fr(g(this.Wa,this),c)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ve(10),fi(this),Cu(this))};function ko(c){c.B!=null&&(f.clearTimeout(c.B),c.B=null)}function Cu(c){c.g=new Gn(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var y=fe(c.na);Wt(y,"RID","rpc"),Wt(y,"SID",c.M),Wt(y,"AID",c.K),Wt(y,"CI",c.F?"0":"1"),!c.F&&c.ia&&Wt(y,"TO",c.ia),Wt(y,"TYPE","xmlhttp"),Ca(c,y),c.u&&c.o&&On(y,c.u,c.o),c.O&&(c.g.H=c.O);var x=c.g;c=c.ba,x.M=1,x.A=Vi(fe(y)),x.u=null,x.R=!0,mr(x,c)}i.Va=function(){this.C!=null&&(this.C=null,fi(this),Vo(this),ve(19))};function fs(c){c.C!=null&&(f.clearTimeout(c.C),c.C=null)}function Uo(c,y){var x=null;if(c.g==y){fs(c),ko(c),c.g=null;var w=2}else if(ma(c.h,y))x=y.G,Oi(c.h,y),w=1;else return;if(c.I!=0){if(y.o)if(w==1){x=y.u?y.u.length:0,y=Date.now()-y.F;var $=c.D;w=es(),Pe(w,new vu(w,x)),Ra(c)}else Ru(c);else if($=y.m,$==3||$==0&&y.X>0||!(w==1&&hf(c,y)||w==2&&Vo(c)))switch(x&&x.length>0&&(y=c.h,y.i=y.i.concat(x)),$){case 1:Pi(c,5);break;case 4:Pi(c,10);break;case 3:Pi(c,6);break;default:Pi(c,2)}}}function ju(c,y){let x=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(x*=2),x*y}function Pi(c,y){if(c.j.info("Error code "+y),y==2){var x=g(c.bb,c),w=c.Ua;const $=!w;w=new Yn(w||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||yr(w,"https"),Vi(w),$?Mo(w.toString(),x):_r(w.toString(),x)}else ve(2);c.I=0,c.l&&c.l.pa(y),Iu(c),Aa(c)}i.bb=function(c){c?(this.j.info("Successfully pinged google.com"),ve(2)):(this.j.info("Failed to ping google.com"),ve(1))};function Iu(c){if(c.I=0,c.ja=[],c.l){const y=ss(c.h);(y.length!=0||c.i.length!=0)&&(U(c.ja,y),U(c.ja,c.i),c.h.i.length=0,I(c.i),c.i.length=0),c.l.oa()}}function Du(c,y,x){var w=x instanceof Yn?fe(x):new Yn(x);if(w.g!="")y&&(w.g=y+"."+w.g),ga(w,w.u);else{var $=f.location;w=$.protocol,y=y?y+"."+$.hostname:$.hostname,$=+$.port;const Y=new Yn(null);w&&yr(Y,w),y&&(Y.g=y),$&&ga(Y,$),x&&(Y.h=x),w=Y}return x=c.G,y=c.wa,x&&y&&Wt(w,x,y),Wt(w,"VER",c.ka),Ca(c,w),w}function ds(c,y,x){if(y&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return y=c.Aa&&!c.ma?new ie(new va({ab:x})):new ie(c.ma),y.Fa(c.L),y}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Nu(){}i=Nu.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function ps(){}ps.prototype.g=function(c,y){return new hn(c,y)};function hn(c,y){Ne.call(this),this.g=new cs(y),this.l=c,this.h=y&&y.messageUrlParams||null,c=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(c?c["X-WebChannel-Content-Type"]=y.messageContentType:c={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.sa&&(c?c["X-WebChannel-Client-Profile"]=y.sa:c={"X-WebChannel-Client-Profile":y.sa}),this.g.U=c,(c=y&&y.Qb)&&!N(c)&&(this.g.u=c),this.A=y&&y.supportsCrossDomainXhr||!1,this.v=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!N(y)&&(this.g.G=y,c=this.h,c!==null&&y in c&&(c=this.h,y in c&&delete c[y])),this.j=new Tr(this)}b(hn,Ne),hn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},hn.prototype.close=function(){Sa(this.g)},hn.prototype.o=function(c){var y=this.g;if(typeof c=="string"){var x={};x.__data__=c,c=x}else this.v&&(x={},x.__data__=In(c),c=x);y.i.push(new uf(y.Ya++,c)),y.I==3&&Ra(y)},hn.prototype.N=function(){this.g.l=null,delete this.j,Sa(this.g),delete this.g,hn.Z.N.call(this)};function Po(c){ur.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var y=c.__sm__;if(y){t:{for(const x in y){c=x;break t}c=void 0}(this.i=c)&&(c=this.i,y=y!==null&&c in y?y[c]:void 0),this.data=y}else this.data=c}b(Po,ur);function Mu(){qn.call(this),this.status=1}b(Mu,qn);function Tr(c){this.g=c}b(Tr,Nu),Tr.prototype.ra=function(){Pe(this.g,"a")},Tr.prototype.qa=function(c){Pe(this.g,new Po(c))},Tr.prototype.pa=function(c){Pe(this.g,new Mu)},Tr.prototype.oa=function(){Pe(this.g,"b")},ps.prototype.createWebChannel=ps.prototype.g,hn.prototype.send=hn.prototype.o,hn.prototype.open=hn.prototype.m,hn.prototype.close=hn.prototype.close,aE=function(){return new ps},rE=function(){return es()},iE=Dn,Wp={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},xe.NO_ERROR=0,xe.TIMEOUT=8,xe.HTTP_ERROR=6,eh=xe,qe.COMPLETE="complete",nE=qe,yu.EventType=ai,ai.OPEN="a",ai.CLOSE="b",ai.ERROR="c",ai.MESSAGE="d",Ne.prototype.listen=Ne.prototype.J,Nl=yu,ie.prototype.listenOnce=ie.prototype.K,ie.prototype.getLastError=ie.prototype.Ha,ie.prototype.getLastErrorCode=ie.prototype.ya,ie.prototype.getStatus=ie.prototype.ca,ie.prototype.getResponseJson=ie.prototype.La,ie.prototype.getResponseText=ie.prototype.la,ie.prototype.send=ie.prototype.ea,ie.prototype.setWithCredentials=ie.prototype.Fa,eE=ie}).apply(typeof zc<"u"?zc:typeof self<"u"?self:typeof window<"u"?window:{});const Ov="@firebase/firestore",Vv="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Xa=new Y_("@firebase/firestore");function Ks(){return Xa.logLevel}function dt(i,...t){if(Xa.logLevel<=$t.DEBUG){const r=t.map(Bm);Xa.debug(`Firestore (${vo}): ${i}`,...r)}}function ar(i,...t){if(Xa.logLevel<=$t.ERROR){const r=t.map(Bm);Xa.error(`Firestore (${vo}): ${i}`,...r)}}function ro(i,...t){if(Xa.logLevel<=$t.WARN){const r=t.map(Bm);Xa.warn(`Firestore (${vo}): ${i}`,...r)}}function Bm(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(r){return JSON.stringify(r)})(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(i,t,r){let a="Unexpected state";typeof t=="string"?a=t:r=t,sE(i,a,r)}function sE(i,t,r){let a=`FIRESTORE (${vo}) INTERNAL ASSERTION FAILED: ${t} (ID: ${i.toString(16)})`;if(r!==void 0)try{a+=" CONTEXT: "+JSON.stringify(r)}catch{a+=" CONTEXT: "+r}throw ar(a),new Error(a)}function Gt(i,t,r,a){let o="Unexpected state";typeof r=="string"?o=r:a=r,i||sE(t,o,a)}function Rt(i,t){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function v6(i){const t=typeof self<"u"&&(self.crypto||self.msCrypto),r=new Uint8Array(i);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(r);else for(let a=0;a<i;a++)r[a]=Math.floor(256*Math.random());return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=62*Math.floor(4.129032258064516);let a="";for(;a.length<20;){const o=v6(40);for(let u=0;u<o.length;++u)a.length<20&&o[u]<r&&(a+=t.charAt(o[u]%62))}return a}}function Ut(i,t){return i<t?-1:i>t?1:0}function Zp(i,t){const r=Math.min(i.length,t.length);for(let a=0;a<r;a++){const o=i.charAt(a),u=t.charAt(a);if(o!==u)return wp(o)===wp(u)?Ut(o,u):wp(o)?1:-1}return Ut(i.length,t.length)}const x6=55296,_6=57343;function wp(i){const t=i.charCodeAt(0);return t>=x6&&t<=_6}function ao(i,t,r){return i.length===t.length&&i.every(((a,o)=>r(a,t[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function lE(i,t,r){if(!r)throw new mt(st.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${t}.`)}function b6(i,t,r,a){if(t===!0&&a===!0)throw new mt(st.INVALID_ARGUMENT,`${i} and ${r} cannot be used together.`)}function Pv(i){if(!_t.isDocumentKey(i))throw new mt(st.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Lv(i){if(_t.isDocumentKey(i))throw new mt(st.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function uE(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function Fm(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const t=(function(a){return a.constructor?a.constructor.name:null})(i);return t?`a custom ${t} object`:"an object"}}return typeof i=="function"?"a function":Tt(12329,{type:typeof i})}function sr(i,t){if("_delegate"in i&&(i=i._delegate),!(i instanceof t)){if(t.name===i.constructor.name)throw new mt(st.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const r=Fm(i);throw new mt(st.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${r}`)}}return i}/**
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
 */function je(i,t){const r={typeString:i};return t&&(r.value=t),r}function su(i,t){if(!uE(i))throw new mt(st.INVALID_ARGUMENT,"JSON must be an object");let r;for(const a in t)if(t[a]){const o=t[a].typeString,u="value"in t[a]?{value:t[a].value}:void 0;if(!(a in i)){r=`JSON missing required field: '${a}'`;break}const f=i[a];if(o&&typeof f!==o){r=`JSON field '${a}' must be a ${o}.`;break}if(u!==void 0&&f!==u.value){r=`Expected '${a}' field to equal '${u.value}'`;break}}if(r)throw new mt(st.INVALID_ARGUMENT,r);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv=-62135596800,Bv=1e6;class le{static now(){return le.fromMillis(Date.now())}static fromDate(t){return le.fromMillis(t.getTime())}static fromMillis(t){const r=Math.floor(t/1e3),a=Math.floor((t-1e3*r)*Bv);return new le(r,a)}constructor(t,r){if(this.seconds=t,this.nanoseconds=r,r<0)throw new mt(st.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(r>=1e9)throw new mt(st.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(t<zv)throw new mt(st.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new mt(st.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Bv}_compareTo(t){return this.seconds===t.seconds?Ut(this.nanoseconds,t.nanoseconds):Ut(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:le._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(su(t,le._jsonSchema))return new le(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-zv;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}le._jsonSchemaVersion="firestore/timestamp/1.0",le._jsonSchema={type:je("string",le._jsonSchemaVersion),seconds:je("number"),nanoseconds:je("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Wl=-1;function T6(i,t){const r=i.toTimestamp().seconds,a=i.toTimestamp().nanoseconds+1,o=St.fromTimestamp(a===1e9?new le(r+1,0):new le(r,a));return new Jr(o,_t.empty(),t)}function w6(i){return new Jr(i.readTime,i.key,Wl)}class Jr{constructor(t,r,a){this.readTime=t,this.documentKey=r,this.largestBatchId=a}static min(){return new Jr(St.min(),_t.empty(),Wl)}static max(){return new Jr(St.max(),_t.empty(),Wl)}}function S6(i,t){let r=i.readTime.compareTo(t.readTime);return r!==0?r:(r=_t.comparator(i.documentKey,t.documentKey),r!==0?r:Ut(i.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function xo(i){if(i.code!==st.FAILED_PRECONDITION||i.message!==A6)throw i;dt("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((r=>{this.isDone=!0,this.result=r,this.nextCallback&&this.nextCallback(r)}),(r=>{this.isDone=!0,this.error=r,this.catchCallback&&this.catchCallback(r)}))}catch(t){return this.next(void 0,t)}next(t,r){return this.callbackAttached&&Tt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(r,this.error):this.wrapSuccess(t,this.result):new at(((a,o)=>{this.nextCallback=u=>{this.wrapSuccess(t,u).next(a,o)},this.catchCallback=u=>{this.wrapFailure(r,u).next(a,o)}}))}toPromise(){return new Promise(((t,r)=>{this.next(t,r)}))}wrapUserFunction(t){try{const r=t();return r instanceof at?r:at.resolve(r)}catch(r){return at.reject(r)}}wrapSuccess(t,r){return t?this.wrapUserFunction((()=>t(r))):at.resolve(r)}wrapFailure(t,r){return t?this.wrapUserFunction((()=>t(r))):at.reject(r)}static resolve(t){return new at(((r,a)=>{r(t)}))}static reject(t){return new at(((r,a)=>{a(t)}))}static waitFor(t){return new at(((r,a)=>{let o=0,u=0,f=!1;t.forEach((m=>{++o,m.next((()=>{++u,f&&u===o&&r()}),(p=>a(p)))})),f=!0,u===o&&r()}))}static or(t){let r=at.resolve(!1);for(const a of t)r=r.next((o=>o?at.resolve(o):a()));return r}static forEach(t,r){const a=[];return t.forEach(((o,u)=>{a.push(r.call(this,o,u))})),this.waitFor(a)}static mapArray(t,r){return new at(((a,o)=>{const u=t.length,f=new Array(u);let m=0;for(let p=0;p<u;p++){const g=p;r(t[g]).next((_=>{f[g]=_,++m,m===u&&a(f)}),(_=>o(_)))}}))}static doWhile(t,r){return new at(((a,o)=>{const u=()=>{t()===!0?r().next((()=>{u()}),o):a()};u()}))}}function C6(i){const t=i.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}function _o(i){return i.name==="IndexedDbTransactionError"}/**
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
 */const Km=-1;function Uh(i){return i==null}function mh(i){return i===0&&1/i==-1/0}function j6(i){return typeof i=="number"&&Number.isInteger(i)&&!mh(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE="";function I6(i){let t="";for(let r=0;r<i.length;r++)t.length>0&&(t=$v(t)),t=D6(i.get(r),t);return $v(t)}function D6(i,t){let r=t;const a=i.length;for(let o=0;o<a;o++){const u=i.charAt(o);switch(u){case"\0":r+="";break;case cE:r+="";break;default:r+=u}}return r}function $v(i){return i+cE+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(i){let t=0;for(const r in i)Object.prototype.hasOwnProperty.call(i,r)&&t++;return t}function aa(i,t){for(const r in i)Object.prototype.hasOwnProperty.call(i,r)&&t(r,i[r])}function hE(i){for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(t,r){this.comparator=t,this.root=r||Xe.EMPTY}insert(t,r){return new pe(this.comparator,this.root.insert(t,r,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(t){return new pe(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(t){let r=this.root;for(;!r.isEmpty();){const a=this.comparator(t,r.key);if(a===0)return r.value;a<0?r=r.left:a>0&&(r=r.right)}return null}indexOf(t){let r=0,a=this.root;for(;!a.isEmpty();){const o=this.comparator(t,a.key);if(o===0)return r+a.left.size;o<0?a=a.left:(r+=a.left.size+1,a=a.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((r,a)=>(t(r,a),!1)))}toString(){const t=[];return this.inorderTraversal(((r,a)=>(t.push(`${r}:${a}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Bc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Bc(this.root,t,this.comparator,!1)}getReverseIterator(){return new Bc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Bc(this.root,t,this.comparator,!0)}}class Bc{constructor(t,r,a,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!t.isEmpty();)if(u=r?a(t.key,r):1,r&&o&&(u*=-1),u<0)t=this.isReverse?t.left:t.right;else{if(u===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const r={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return r}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Xe{constructor(t,r,a,o,u){this.key=t,this.value=r,this.color=a??Xe.RED,this.left=o??Xe.EMPTY,this.right=u??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,r,a,o,u){return new Xe(t??this.key,r??this.value,a??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,r,a){let o=this;const u=a(t,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(t,r,a),null):u===0?o.copy(null,r,null,null,null):o.copy(null,null,null,null,o.right.insert(t,r,a)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,r){let a,o=this;if(r(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,r),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),r(t,o.key)===0){if(o.right.isEmpty())return Xe.EMPTY;a=o.right.min(),o=o.copy(a.key,a.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,r))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),r=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,r)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Tt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Tt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw Tt(27949);return t+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw Tt(57766)}get value(){throw Tt(16141)}get color(){throw Tt(16727)}get left(){throw Tt(29726)}get right(){throw Tt(36894)}copy(t,r,a,o,u){return this}insert(t,r,a){return new Xe(t,r)}remove(t,r){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(t){this.comparator=t,this.data=new pe(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((r,a)=>(t(r),!1)))}forEachInRange(t,r){const a=this.data.getIteratorFrom(t[0]);for(;a.hasNext();){const o=a.getNext();if(this.comparator(o.key,t[1])>=0)return;r(o.key)}}forEachWhile(t,r){let a;for(a=r!==void 0?this.data.getIteratorFrom(r):this.data.getIterator();a.hasNext();)if(!t(a.getNext().key))return}firstAfterOrEqual(t){const r=this.data.getIteratorFrom(t);return r.hasNext()?r.getNext().key:null}getIterator(){return new Kv(this.data.getIterator())}getIteratorFrom(t){return new Kv(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let r=this;return r.size<t.size&&(r=t,t=this),t.forEach((a=>{r=r.add(a)})),r}isEqual(t){if(!(t instanceof Ue)||this.size!==t.size)return!1;const r=this.data.getIterator(),a=t.data.getIterator();for(;r.hasNext();){const o=r.getNext().key,u=a.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((r=>{t.push(r)})),t}toString(){const t=[];return this.forEach((r=>t.push(r))),"SortedSet("+t.toString()+")"}copy(t){const r=new Ue(this.comparator);return r.data=t,r}}class Kv{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t){this.fields=t,t.sort(We.comparator)}static empty(){return new jn([])}unionWith(t){let r=new Ue(We.comparator);for(const a of this.fields)r=r.add(a);for(const a of t)r=r.add(a);return new jn(r.toArray())}covers(t){for(const r of this.fields)if(r.isPrefixOf(t))return!0;return!1}isEqual(t){return ao(this.fields,t.fields,((r,a)=>r.isEqual(a)))}}/**
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
 */class Ze{constructor(t){this.binaryString=t}static fromBase64String(t){const r=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new fE("Invalid base64 string: "+u):u}})(t);return new Ze(r)}static fromUint8Array(t){const r=(function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u})(t);return new Ze(r)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(r){return btoa(r)})(this.binaryString)}toUint8Array(){return(function(r){const a=new Uint8Array(r.length);for(let o=0;o<r.length;o++)a[o]=r.charCodeAt(o);return a})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Ut(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const N6=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ta(i){if(Gt(!!i,39018),typeof i=="string"){let t=0;const r=N6.exec(i);if(Gt(!!r,46558,{timestamp:i}),r[1]){let o=r[1];o=(o+"000000000").substr(0,9),t=Number(o)}const a=new Date(i);return{seconds:Math.floor(a.getTime()/1e3),nanos:t}}return{seconds:we(i.seconds),nanos:we(i.nanos)}}function we(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function ea(i){return typeof i=="string"?Ze.fromBase64String(i):Ze.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE="server_timestamp",pE="__type__",mE="__previous_value__",gE="__local_write_time__";function Hm(i){return(i?.mapValue?.fields||{})[pE]?.stringValue===dE}function Ph(i){const t=i.mapValue.fields[mE];return Hm(t)?Ph(t):t}function Zl(i){const t=ta(i.mapValue.fields[gE].timestampValue);return new le(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const yE="__type__",O6="__max__",$c={mapValue:{}},vE="__vector__",yh="value";function na(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Hm(i)?4:k6(i)?9007199254740991:V6(i)?10:11:Tt(28295,{value:i})}function Ai(i,t){if(i===t)return!0;const r=na(i);if(r!==na(t))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===t.booleanValue;case 4:return Zl(i).isEqual(Zl(t));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=ta(o.timestampValue),m=ta(u.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos})(i,t);case 5:return i.stringValue===t.stringValue;case 6:return(function(o,u){return ea(o.bytesValue).isEqual(ea(u.bytesValue))})(i,t);case 7:return i.referenceValue===t.referenceValue;case 8:return(function(o,u){return we(o.geoPointValue.latitude)===we(u.geoPointValue.latitude)&&we(o.geoPointValue.longitude)===we(u.geoPointValue.longitude)})(i,t);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return we(o.integerValue)===we(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=we(o.doubleValue),m=we(u.doubleValue);return f===m?mh(f)===mh(m):isNaN(f)&&isNaN(m)}return!1})(i,t);case 9:return ao(i.arrayValue.values||[],t.arrayValue.values||[],Ai);case 10:case 11:return(function(o,u){const f=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Fv(f)!==Fv(m))return!1;for(const p in f)if(f.hasOwnProperty(p)&&(m[p]===void 0||!Ai(f[p],m[p])))return!1;return!0})(i,t);default:return Tt(52216,{left:i})}}function tu(i,t){return(i.values||[]).find((r=>Ai(r,t)))!==void 0}function so(i,t){if(i===t)return 0;const r=na(i),a=na(t);if(r!==a)return Ut(r,a);switch(r){case 0:case 9007199254740991:return 0;case 1:return Ut(i.booleanValue,t.booleanValue);case 2:return(function(u,f){const m=we(u.integerValue||u.doubleValue),p=we(f.integerValue||f.doubleValue);return m<p?-1:m>p?1:m===p?0:isNaN(m)?isNaN(p)?0:-1:1})(i,t);case 3:return Hv(i.timestampValue,t.timestampValue);case 4:return Hv(Zl(i),Zl(t));case 5:return Zp(i.stringValue,t.stringValue);case 6:return(function(u,f){const m=ea(u),p=ea(f);return m.compareTo(p)})(i.bytesValue,t.bytesValue);case 7:return(function(u,f){const m=u.split("/"),p=f.split("/");for(let g=0;g<m.length&&g<p.length;g++){const _=Ut(m[g],p[g]);if(_!==0)return _}return Ut(m.length,p.length)})(i.referenceValue,t.referenceValue);case 8:return(function(u,f){const m=Ut(we(u.latitude),we(f.latitude));return m!==0?m:Ut(we(u.longitude),we(f.longitude))})(i.geoPointValue,t.geoPointValue);case 9:return qv(i.arrayValue,t.arrayValue);case 10:return(function(u,f){const m=u.fields||{},p=f.fields||{},g=m[yh]?.arrayValue,_=p[yh]?.arrayValue,b=Ut(g?.values?.length||0,_?.values?.length||0);return b!==0?b:qv(g,_)})(i.mapValue,t.mapValue);case 11:return(function(u,f){if(u===$c.mapValue&&f===$c.mapValue)return 0;if(u===$c.mapValue)return 1;if(f===$c.mapValue)return-1;const m=u.fields||{},p=Object.keys(m),g=f.fields||{},_=Object.keys(g);p.sort(),_.sort();for(let b=0;b<p.length&&b<_.length;++b){const S=Zp(p[b],_[b]);if(S!==0)return S;const I=so(m[p[b]],g[_[b]]);if(I!==0)return I}return Ut(p.length,_.length)})(i.mapValue,t.mapValue);default:throw Tt(23264,{he:r})}}function Hv(i,t){if(typeof i=="string"&&typeof t=="string"&&i.length===t.length)return Ut(i,t);const r=ta(i),a=ta(t),o=Ut(r.seconds,a.seconds);return o!==0?o:Ut(r.nanos,a.nanos)}function qv(i,t){const r=i.values||[],a=t.values||[];for(let o=0;o<r.length&&o<a.length;++o){const u=so(r[o],a[o]);if(u)return u}return Ut(r.length,a.length)}function oo(i){return Jp(i)}function Jp(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(r){const a=ta(r);return`time(${a.seconds},${a.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(r){return ea(r).toBase64()})(i.bytesValue):"referenceValue"in i?(function(r){return _t.fromName(r).toString()})(i.referenceValue):"geoPointValue"in i?(function(r){return`geo(${r.latitude},${r.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(r){let a="[",o=!0;for(const u of r.values||[])o?o=!1:a+=",",a+=Jp(u);return a+"]"})(i.arrayValue):"mapValue"in i?(function(r){const a=Object.keys(r.fields||{}).sort();let o="{",u=!0;for(const f of a)u?u=!1:o+=",",o+=`${f}:${Jp(r.fields[f])}`;return o+"}"})(i.mapValue):Tt(61005,{value:i})}function nh(i){switch(na(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Ph(i);return t?16+nh(t):16;case 5:return 2*i.stringValue.length;case 6:return ea(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(a){return(a.values||[]).reduce(((o,u)=>o+nh(u)),0)})(i.arrayValue);case 10:case 11:return(function(a){let o=0;return aa(a.fields,((u,f)=>{o+=u.length+nh(f)})),o})(i.mapValue);default:throw Tt(13486,{value:i})}}function tm(i){return!!i&&"integerValue"in i}function qm(i){return!!i&&"arrayValue"in i}function Gv(i){return!!i&&"nullValue"in i}function Yv(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function ih(i){return!!i&&"mapValue"in i}function V6(i){return(i?.mapValue?.fields||{})[yE]?.stringValue===vE}function Ll(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const t={mapValue:{fields:{}}};return aa(i.mapValue.fields,((r,a)=>t.mapValue.fields[r]=Ll(a))),t}if(i.arrayValue){const t={arrayValue:{values:[]}};for(let r=0;r<(i.arrayValue.values||[]).length;++r)t.arrayValue.values[r]=Ll(i.arrayValue.values[r]);return t}return{...i}}function k6(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===O6}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(t){this.value=t}static empty(){return new vn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let r=this.value;for(let a=0;a<t.length-1;++a)if(r=(r.mapValue.fields||{})[t.get(a)],!ih(r))return null;return r=(r.mapValue.fields||{})[t.lastSegment()],r||null}}set(t,r){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ll(r)}setAll(t){let r=We.emptyPath(),a={},o=[];t.forEach(((f,m)=>{if(!r.isImmediateParentOf(m)){const p=this.getFieldsMap(r);this.applyChanges(p,a,o),a={},o=[],r=m.popLast()}f?a[m.lastSegment()]=Ll(f):o.push(m.lastSegment())}));const u=this.getFieldsMap(r);this.applyChanges(u,a,o)}delete(t){const r=this.field(t.popLast());ih(r)&&r.mapValue.fields&&delete r.mapValue.fields[t.lastSegment()]}isEqual(t){return Ai(this.value,t.value)}getFieldsMap(t){let r=this.value;r.mapValue.fields||(r.mapValue={fields:{}});for(let a=0;a<t.length;++a){let o=r.mapValue.fields[t.get(a)];ih(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},r.mapValue.fields[t.get(a)]=o),r=o}return r.mapValue.fields}applyChanges(t,r,a){aa(r,((o,u)=>t[o]=u));for(const o of a)delete t[o]}clone(){return new vn(Ll(this.value))}}function xE(i){const t=[];return aa(i.fields,((r,a)=>{const o=new We([r]);if(ih(a)){const u=xE(a.mapValue).fields;if(u.length===0)t.push(o);else for(const f of u)t.push(o.child(f))}else t.push(o)})),new jn(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class vh{constructor(t,r){this.position=t,this.inclusive=r}}function Qv(i,t,r){let a=0;for(let o=0;o<i.position.length;o++){const u=t[o],f=i.position[o];if(u.field.isKeyField()?a=_t.comparator(_t.fromName(f.referenceValue),r.key):a=so(f,r.data.field(u.field)),u.dir==="desc"&&(a*=-1),a!==0)break}return a}function Xv(i,t){if(i===null)return t===null;if(t===null||i.inclusive!==t.inclusive||i.position.length!==t.position.length)return!1;for(let r=0;r<i.position.length;r++)if(!Ai(i.position[r],t.position[r]))return!1;return!0}/**
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
 */class xh{constructor(t,r="asc"){this.field=t,this.dir=r}}function U6(i,t){return i.dir===t.dir&&i.field.isEqual(t.field)}/**
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
 */class _E{}class ke extends _E{constructor(t,r,a){super(),this.field=t,this.op=r,this.value=a}static create(t,r,a){return t.isKeyField()?r==="in"||r==="not-in"?this.createKeyFieldInFilter(t,r,a):new L6(t,r,a):r==="array-contains"?new $6(t,a):r==="in"?new F6(t,a):r==="not-in"?new K6(t,a):r==="array-contains-any"?new H6(t,a):new ke(t,r,a)}static createKeyFieldInFilter(t,r,a){return r==="in"?new z6(t,a):new B6(t,a)}matches(t){const r=t.data.field(this.field);return this.op==="!="?r!==null&&r.nullValue===void 0&&this.matchesComparison(so(r,this.value)):r!==null&&na(this.value)===na(r)&&this.matchesComparison(so(r,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Tt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ri extends _E{constructor(t,r){super(),this.filters=t,this.op=r,this.Pe=null}static create(t,r){return new Ri(t,r)}matches(t){return EE(this)?this.filters.find((r=>!r.matches(t)))===void 0:this.filters.find((r=>r.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,r)=>t.concat(r.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function EE(i){return i.op==="and"}function bE(i){return P6(i)&&EE(i)}function P6(i){for(const t of i.filters)if(t instanceof Ri)return!1;return!0}function em(i){if(i instanceof ke)return i.field.canonicalString()+i.op.toString()+oo(i.value);if(bE(i))return i.filters.map((t=>em(t))).join(",");{const t=i.filters.map((r=>em(r))).join(",");return`${i.op}(${t})`}}function TE(i,t){return i instanceof ke?(function(a,o){return o instanceof ke&&a.op===o.op&&a.field.isEqual(o.field)&&Ai(a.value,o.value)})(i,t):i instanceof Ri?(function(a,o){return o instanceof Ri&&a.op===o.op&&a.filters.length===o.filters.length?a.filters.reduce(((u,f,m)=>u&&TE(f,o.filters[m])),!0):!1})(i,t):void Tt(19439)}function wE(i){return i instanceof ke?(function(r){return`${r.field.canonicalString()} ${r.op} ${oo(r.value)}`})(i):i instanceof Ri?(function(r){return r.op.toString()+" {"+r.getFilters().map(wE).join(" ,")+"}"})(i):"Filter"}class L6 extends ke{constructor(t,r,a){super(t,r,a),this.key=_t.fromName(a.referenceValue)}matches(t){const r=_t.comparator(t.key,this.key);return this.matchesComparison(r)}}class z6 extends ke{constructor(t,r){super(t,"in",r),this.keys=SE("in",r)}matches(t){return this.keys.some((r=>r.isEqual(t.key)))}}class B6 extends ke{constructor(t,r){super(t,"not-in",r),this.keys=SE("not-in",r)}matches(t){return!this.keys.some((r=>r.isEqual(t.key)))}}function SE(i,t){return(t.arrayValue?.values||[]).map((r=>_t.fromName(r.referenceValue)))}class $6 extends ke{constructor(t,r){super(t,"array-contains",r)}matches(t){const r=t.data.field(this.field);return qm(r)&&tu(r.arrayValue,this.value)}}class F6 extends ke{constructor(t,r){super(t,"in",r)}matches(t){const r=t.data.field(this.field);return r!==null&&tu(this.value.arrayValue,r)}}class K6 extends ke{constructor(t,r){super(t,"not-in",r)}matches(t){if(tu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const r=t.data.field(this.field);return r!==null&&r.nullValue===void 0&&!tu(this.value.arrayValue,r)}}class H6 extends ke{constructor(t,r){super(t,"array-contains-any",r)}matches(t){const r=t.data.field(this.field);return!(!qm(r)||!r.arrayValue.values)&&r.arrayValue.values.some((a=>tu(this.value.arrayValue,a)))}}/**
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
 */class q6{constructor(t,r=null,a=[],o=[],u=null,f=null,m=null){this.path=t,this.collectionGroup=r,this.orderBy=a,this.filters=o,this.limit=u,this.startAt=f,this.endAt=m,this.Te=null}}function Wv(i,t=null,r=[],a=[],o=null,u=null,f=null){return new q6(i,t,r,a,o,u,f)}function Gm(i){const t=Rt(i);if(t.Te===null){let r=t.path.canonicalString();t.collectionGroup!==null&&(r+="|cg:"+t.collectionGroup),r+="|f:",r+=t.filters.map((a=>em(a))).join(","),r+="|ob:",r+=t.orderBy.map((a=>(function(u){return u.field.canonicalString()+u.dir})(a))).join(","),Uh(t.limit)||(r+="|l:",r+=t.limit),t.startAt&&(r+="|lb:",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((a=>oo(a))).join(",")),t.endAt&&(r+="|ub:",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((a=>oo(a))).join(",")),t.Te=r}return t.Te}function Ym(i,t){if(i.limit!==t.limit||i.orderBy.length!==t.orderBy.length)return!1;for(let r=0;r<i.orderBy.length;r++)if(!U6(i.orderBy[r],t.orderBy[r]))return!1;if(i.filters.length!==t.filters.length)return!1;for(let r=0;r<i.filters.length;r++)if(!TE(i.filters[r],t.filters[r]))return!1;return i.collectionGroup===t.collectionGroup&&!!i.path.isEqual(t.path)&&!!Xv(i.startAt,t.startAt)&&Xv(i.endAt,t.endAt)}function nm(i){return _t.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(t,r=null,a=[],o=[],u=null,f="F",m=null,p=null){this.path=t,this.collectionGroup=r,this.explicitOrderBy=a,this.filters=o,this.limit=u,this.limitType=f,this.startAt=m,this.endAt=p,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function G6(i,t,r,a,o,u,f,m){return new Lh(i,t,r,a,o,u,f,m)}function Qm(i){return new Lh(i)}function Zv(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function Y6(i){return i.collectionGroup!==null}function zl(i){const t=Rt(i);if(t.Ie===null){t.Ie=[];const r=new Set;for(const u of t.explicitOrderBy)t.Ie.push(u),r.add(u.field.canonicalString());const a=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new Ue(We.comparator);return f.filters.forEach((p=>{p.getFlattenedFilters().forEach((g=>{g.isInequality()&&(m=m.add(g.field))}))})),m})(t).forEach((u=>{r.has(u.canonicalString())||u.isKeyField()||t.Ie.push(new xh(u,a))})),r.has(We.keyField().canonicalString())||t.Ie.push(new xh(We.keyField(),a))}return t.Ie}function Ei(i){const t=Rt(i);return t.Ee||(t.Ee=Q6(t,zl(i))),t.Ee}function Q6(i,t){if(i.limitType==="F")return Wv(i.path,i.collectionGroup,t,i.filters,i.limit,i.startAt,i.endAt);{t=t.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new xh(o.field,u)}));const r=i.endAt?new vh(i.endAt.position,i.endAt.inclusive):null,a=i.startAt?new vh(i.startAt.position,i.startAt.inclusive):null;return Wv(i.path,i.collectionGroup,t,i.filters,i.limit,r,a)}}function im(i,t,r){return new Lh(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),t,r,i.startAt,i.endAt)}function zh(i,t){return Ym(Ei(i),Ei(t))&&i.limitType===t.limitType}function AE(i){return`${Gm(Ei(i))}|lt:${i.limitType}`}function Hs(i){return`Query(target=${(function(r){let a=r.path.canonicalString();return r.collectionGroup!==null&&(a+=" collectionGroup="+r.collectionGroup),r.filters.length>0&&(a+=`, filters: [${r.filters.map((o=>wE(o))).join(", ")}]`),Uh(r.limit)||(a+=", limit: "+r.limit),r.orderBy.length>0&&(a+=`, orderBy: [${r.orderBy.map((o=>(function(f){return`${f.field.canonicalString()} (${f.dir})`})(o))).join(", ")}]`),r.startAt&&(a+=", startAt: ",a+=r.startAt.inclusive?"b:":"a:",a+=r.startAt.position.map((o=>oo(o))).join(",")),r.endAt&&(a+=", endAt: ",a+=r.endAt.inclusive?"a:":"b:",a+=r.endAt.position.map((o=>oo(o))).join(",")),`Target(${a})`})(Ei(i))}; limitType=${i.limitType})`}function Bh(i,t){return t.isFoundDocument()&&(function(a,o){const u=o.key.path;return a.collectionGroup!==null?o.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(u):_t.isDocumentKey(a.path)?a.path.isEqual(u):a.path.isImmediateParentOf(u)})(i,t)&&(function(a,o){for(const u of zl(a))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(i,t)&&(function(a,o){for(const u of a.filters)if(!u.matches(o))return!1;return!0})(i,t)&&(function(a,o){return!(a.startAt&&!(function(f,m,p){const g=Qv(f,m,p);return f.inclusive?g<=0:g<0})(a.startAt,zl(a),o)||a.endAt&&!(function(f,m,p){const g=Qv(f,m,p);return f.inclusive?g>=0:g>0})(a.endAt,zl(a),o))})(i,t)}function X6(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function RE(i){return(t,r)=>{let a=!1;for(const o of zl(i)){const u=W6(o,t,r);if(u!==0)return u;a=a||o.field.isKeyField()}return 0}}function W6(i,t,r){const a=i.field.isKeyField()?_t.comparator(t.key,r.key):(function(u,f,m){const p=f.data.field(u),g=m.data.field(u);return p!==null&&g!==null?so(p,g):Tt(42886)})(i.field,t,r);switch(i.dir){case"asc":return a;case"desc":return-1*a;default:return Tt(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Z6=new pe(_t.comparator);function or(){return Z6}const CE=new pe(_t.comparator);function Ml(...i){let t=CE;for(const r of i)t=t.insert(r.key,r);return t}function jE(i){let t=CE;return i.forEach(((r,a)=>t=t.insert(r,a.overlayedDocument))),t}function qa(){return Bl()}function IE(){return Bl()}function Bl(){return new Za((i=>i.toString()),((i,t)=>i.isEqual(t)))}const J6=new pe(_t.comparator),tC=new Ue(_t.comparator);function Pt(...i){let t=tC;for(const r of i)t=t.add(r);return t}const eC=new Ue(Ut);function nC(){return eC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(i,t){if(i.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:mh(t)?"-0":t}}function DE(i){return{integerValue:""+i}}function NE(i,t){return j6(t)?DE(t):Xm(i,t)}/**
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
 */class $h{constructor(){this._=void 0}}function iC(i,t,r){return i instanceof _h?(function(o,u){const f={fields:{[pE]:{stringValue:dE},[gE]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Hm(u)&&(u=Ph(u)),u&&(f.fields[mE]=u),{mapValue:f}})(r,t):i instanceof eu?OE(i,t):i instanceof nu?VE(i,t):(function(o,u){const f=ME(o,u),m=Jv(f)+Jv(o.Ae);return tm(f)&&tm(o.Ae)?DE(m):Xm(o.serializer,m)})(i,t)}function rC(i,t,r){return i instanceof eu?OE(i,t):i instanceof nu?VE(i,t):r}function ME(i,t){return i instanceof iu?(function(a){return tm(a)||(function(u){return!!u&&"doubleValue"in u})(a)})(t)?t:{integerValue:0}:null}class _h extends $h{}class eu extends $h{constructor(t){super(),this.elements=t}}function OE(i,t){const r=kE(t);for(const a of i.elements)r.some((o=>Ai(o,a)))||r.push(a);return{arrayValue:{values:r}}}class nu extends $h{constructor(t){super(),this.elements=t}}function VE(i,t){let r=kE(t);for(const a of i.elements)r=r.filter((o=>!Ai(o,a)));return{arrayValue:{values:r}}}class iu extends $h{constructor(t,r){super(),this.serializer=t,this.Ae=r}}function Jv(i){return we(i.integerValue||i.doubleValue)}function kE(i){return qm(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(t,r){this.field=t,this.transform=r}}function sC(i,t){return i.field.isEqual(t.field)&&(function(a,o){return a instanceof eu&&o instanceof eu||a instanceof nu&&o instanceof nu?ao(a.elements,o.elements,Ai):a instanceof iu&&o instanceof iu?Ai(a.Ae,o.Ae):a instanceof _h&&o instanceof _h})(i.transform,t.transform)}class oC{constructor(t,r){this.version=t,this.transformResults=r}}class bi{constructor(t,r){this.updateTime=t,this.exists=r}static none(){return new bi}static exists(t){return new bi(void 0,t)}static updateTime(t){return new bi(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function rh(i,t){return i.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(i.updateTime):i.exists===void 0||i.exists===t.isFoundDocument()}class Fh{}function UE(i,t){if(!i.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return i.isNoDocument()?new LE(i.key,bi.none()):new ou(i.key,i.data,bi.none());{const r=i.data,a=vn.empty();let o=new Ue(We.comparator);for(let u of t.fields)if(!o.has(u)){let f=r.field(u);f===null&&u.length>1&&(u=u.popLast(),f=r.field(u)),f===null?a.delete(u):a.set(u,f),o=o.add(u)}return new sa(i.key,a,new jn(o.toArray()),bi.none())}}function lC(i,t,r){i instanceof ou?(function(o,u,f){const m=o.value.clone(),p=ex(o.fieldTransforms,u,f.transformResults);m.setAll(p),u.convertToFoundDocument(f.version,m).setHasCommittedMutations()})(i,t,r):i instanceof sa?(function(o,u,f){if(!rh(o.precondition,u))return void u.convertToUnknownDocument(f.version);const m=ex(o.fieldTransforms,u,f.transformResults),p=u.data;p.setAll(PE(o)),p.setAll(m),u.convertToFoundDocument(f.version,p).setHasCommittedMutations()})(i,t,r):(function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()})(0,t,r)}function $l(i,t,r,a){return i instanceof ou?(function(u,f,m,p){if(!rh(u.precondition,f))return m;const g=u.value.clone(),_=nx(u.fieldTransforms,p,f);return g.setAll(_),f.convertToFoundDocument(f.version,g).setHasLocalMutations(),null})(i,t,r,a):i instanceof sa?(function(u,f,m,p){if(!rh(u.precondition,f))return m;const g=nx(u.fieldTransforms,p,f),_=f.data;return _.setAll(PE(u)),_.setAll(g),f.convertToFoundDocument(f.version,_).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((b=>b.field)))})(i,t,r,a):(function(u,f,m){return rh(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m})(i,t,r)}function uC(i,t){let r=null;for(const a of i.fieldTransforms){const o=t.data.field(a.field),u=ME(a.transform,o||null);u!=null&&(r===null&&(r=vn.empty()),r.set(a.field,u))}return r||null}function tx(i,t){return i.type===t.type&&!!i.key.isEqual(t.key)&&!!i.precondition.isEqual(t.precondition)&&!!(function(a,o){return a===void 0&&o===void 0||!(!a||!o)&&ao(a,o,((u,f)=>sC(u,f)))})(i.fieldTransforms,t.fieldTransforms)&&(i.type===0?i.value.isEqual(t.value):i.type!==1||i.data.isEqual(t.data)&&i.fieldMask.isEqual(t.fieldMask))}class ou extends Fh{constructor(t,r,a,o=[]){super(),this.key=t,this.value=r,this.precondition=a,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class sa extends Fh{constructor(t,r,a,o,u=[]){super(),this.key=t,this.data=r,this.fieldMask=a,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function PE(i){const t=new Map;return i.fieldMask.fields.forEach((r=>{if(!r.isEmpty()){const a=i.data.field(r);t.set(r,a)}})),t}function ex(i,t,r){const a=new Map;Gt(i.length===r.length,32656,{Re:r.length,Ve:i.length});for(let o=0;o<r.length;o++){const u=i[o],f=u.transform,m=t.data.field(u.field);a.set(u.field,rC(f,m,r[o]))}return a}function nx(i,t,r){const a=new Map;for(const o of i){const u=o.transform,f=r.data.field(o.field);a.set(o.field,iC(u,f,t))}return a}class LE extends Fh{constructor(t,r){super(),this.key=t,this.precondition=r,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cC extends Fh{constructor(t,r){super(),this.key=t,this.precondition=r,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */var Re,Bt;function pC(i){switch(i){case st.OK:return Tt(64938);case st.CANCELLED:case st.UNKNOWN:case st.DEADLINE_EXCEEDED:case st.RESOURCE_EXHAUSTED:case st.INTERNAL:case st.UNAVAILABLE:case st.UNAUTHENTICATED:return!1;case st.INVALID_ARGUMENT:case st.NOT_FOUND:case st.ALREADY_EXISTS:case st.PERMISSION_DENIED:case st.FAILED_PRECONDITION:case st.ABORTED:case st.OUT_OF_RANGE:case st.UNIMPLEMENTED:case st.DATA_LOSS:return!0;default:return Tt(15467,{code:i})}}function zE(i){if(i===void 0)return ar("GRPC error has no .code"),st.UNKNOWN;switch(i){case Re.OK:return st.OK;case Re.CANCELLED:return st.CANCELLED;case Re.UNKNOWN:return st.UNKNOWN;case Re.DEADLINE_EXCEEDED:return st.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return st.RESOURCE_EXHAUSTED;case Re.INTERNAL:return st.INTERNAL;case Re.UNAVAILABLE:return st.UNAVAILABLE;case Re.UNAUTHENTICATED:return st.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return st.INVALID_ARGUMENT;case Re.NOT_FOUND:return st.NOT_FOUND;case Re.ALREADY_EXISTS:return st.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return st.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return st.FAILED_PRECONDITION;case Re.ABORTED:return st.ABORTED;case Re.OUT_OF_RANGE:return st.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return st.UNIMPLEMENTED;case Re.DATA_LOSS:return st.DATA_LOSS;default:return Tt(39323,{code:i})}}(Bt=Re||(Re={}))[Bt.OK=0]="OK",Bt[Bt.CANCELLED=1]="CANCELLED",Bt[Bt.UNKNOWN=2]="UNKNOWN",Bt[Bt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Bt[Bt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Bt[Bt.NOT_FOUND=5]="NOT_FOUND",Bt[Bt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Bt[Bt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Bt[Bt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Bt[Bt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Bt[Bt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Bt[Bt.ABORTED=10]="ABORTED",Bt[Bt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Bt[Bt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Bt[Bt.INTERNAL=13]="INTERNAL",Bt[Bt.UNAVAILABLE=14]="UNAVAILABLE",Bt[Bt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const gC=new Xr([4294967295,4294967295],0);function ix(i){const t=mC().encode(i),r=new tE;return r.update(t),new Uint8Array(r.digest())}function rx(i){const t=new DataView(i.buffer),r=t.getUint32(0,!0),a=t.getUint32(4,!0),o=t.getUint32(8,!0),u=t.getUint32(12,!0);return[new Xr([r,a],0),new Xr([o,u],0)]}class Zm{constructor(t,r,a){if(this.bitmap=t,this.padding=r,this.hashCount=a,r<0||r>=8)throw new Ol(`Invalid padding: ${r}`);if(a<0)throw new Ol(`Invalid hash count: ${a}`);if(t.length>0&&this.hashCount===0)throw new Ol(`Invalid hash count: ${a}`);if(t.length===0&&r!==0)throw new Ol(`Invalid padding when bitmap length is 0: ${r}`);this.ge=8*t.length-r,this.pe=Xr.fromNumber(this.ge)}ye(t,r,a){let o=t.add(r.multiply(Xr.fromNumber(a)));return o.compare(gC)===1&&(o=new Xr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const r=ix(t),[a,o]=rx(r);for(let u=0;u<this.hashCount;u++){const f=this.ye(a,o,u);if(!this.we(f))return!1}return!0}static create(t,r,a){const o=t%8==0?0:8-t%8,u=new Uint8Array(Math.ceil(t/8)),f=new Zm(u,o,r);return a.forEach((m=>f.insert(m))),f}insert(t){if(this.ge===0)return;const r=ix(t),[a,o]=rx(r);for(let u=0;u<this.hashCount;u++){const f=this.ye(a,o,u);this.Se(f)}}Se(t){const r=Math.floor(t/8),a=t%8;this.bitmap[r]|=1<<a}}class Ol extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(t,r,a,o,u){this.snapshotVersion=t,this.targetChanges=r,this.targetMismatches=a,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(t,r,a){const o=new Map;return o.set(t,lu.createSynthesizedTargetChangeForCurrentChange(t,r,a)),new Kh(St.min(),o,new pe(Ut),or(),Pt())}}class lu{constructor(t,r,a,o,u){this.resumeToken=t,this.current=r,this.addedDocuments=a,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(t,r,a){return new lu(a,r,Pt(),Pt(),Pt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(t,r,a,o){this.be=t,this.removedTargetIds=r,this.key=a,this.De=o}}class BE{constructor(t,r){this.targetId=t,this.Ce=r}}class $E{constructor(t,r,a=Ze.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=r,this.resumeToken=a,this.cause=o}}class ax{constructor(){this.ve=0,this.Fe=sx(),this.Me=Ze.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=Pt(),r=Pt(),a=Pt();return this.Fe.forEach(((o,u)=>{switch(u){case 0:t=t.add(o);break;case 2:r=r.add(o);break;case 1:a=a.add(o);break;default:Tt(38017,{changeType:u})}})),new lu(this.Me,this.xe,t,r,a)}qe(){this.Oe=!1,this.Fe=sx()}Qe(t,r){this.Oe=!0,this.Fe=this.Fe.insert(t,r)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,Gt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class yC{constructor(t){this.Ge=t,this.ze=new Map,this.je=or(),this.Je=Fc(),this.He=Fc(),this.Ye=new pe(Ut)}Ze(t){for(const r of t.be)t.De&&t.De.isFoundDocument()?this.Xe(r,t.De):this.et(r,t.key,t.De);for(const r of t.removedTargetIds)this.et(r,t.key,t.De)}tt(t){this.forEachTarget(t,(r=>{const a=this.nt(r);switch(t.state){case 0:this.rt(r)&&a.Le(t.resumeToken);break;case 1:a.Ke(),a.Ne||a.qe(),a.Le(t.resumeToken);break;case 2:a.Ke(),a.Ne||this.removeTarget(r);break;case 3:this.rt(r)&&(a.We(),a.Le(t.resumeToken));break;case 4:this.rt(r)&&(this.it(r),a.Le(t.resumeToken));break;default:Tt(56790,{state:t.state})}}))}forEachTarget(t,r){t.targetIds.length>0?t.targetIds.forEach(r):this.ze.forEach(((a,o)=>{this.rt(o)&&r(o)}))}st(t){const r=t.targetId,a=t.Ce.count,o=this.ot(r);if(o){const u=o.target;if(nm(u))if(a===0){const f=new _t(u.path);this.et(r,f,sn.newNoDocument(f,St.min()))}else Gt(a===1,20013,{expectedCount:a});else{const f=this._t(r);if(f!==a){const m=this.ut(t),p=m?this.ct(m,t,f):1;if(p!==0){this.it(r);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(r,g)}}}}}ut(t){const r=t.Ce.unchangedNames;if(!r||!r.bits)return null;const{bits:{bitmap:a="",padding:o=0},hashCount:u=0}=r;let f,m;try{f=ea(a).toUint8Array()}catch(p){if(p instanceof fE)return ro("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{m=new Zm(f,o,u)}catch(p){return ro(p instanceof Ol?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return m.ge===0?null:m}ct(t,r,a){return r.Ce.count===a-this.Pt(t,r.targetId)?0:2}Pt(t,r){const a=this.Ge.getRemoteKeysForTarget(r);let o=0;return a.forEach((u=>{const f=this.Ge.ht(),m=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;t.mightContain(m)||(this.et(r,u,null),o++)})),o}Tt(t){const r=new Map;this.ze.forEach(((u,f)=>{const m=this.ot(f);if(m){if(u.current&&nm(m.target)){const p=new _t(m.target.path);this.It(p).has(f)||this.Et(f,p)||this.et(f,p,sn.newNoDocument(p,t))}u.Be&&(r.set(f,u.ke()),u.qe())}}));let a=Pt();this.He.forEach(((u,f)=>{let m=!0;f.forEachWhile((p=>{const g=this.ot(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(a=a.add(u))})),this.je.forEach(((u,f)=>f.setReadTime(t)));const o=new Kh(t,r,this.Ye,this.je,a);return this.je=or(),this.Je=Fc(),this.He=Fc(),this.Ye=new pe(Ut),o}Xe(t,r){if(!this.rt(t))return;const a=this.Et(t,r.key)?2:0;this.nt(t).Qe(r.key,a),this.je=this.je.insert(r.key,r),this.Je=this.Je.insert(r.key,this.It(r.key).add(t)),this.He=this.He.insert(r.key,this.dt(r.key).add(t))}et(t,r,a){if(!this.rt(t))return;const o=this.nt(t);this.Et(t,r)?o.Qe(r,1):o.$e(r),this.He=this.He.insert(r,this.dt(r).delete(t)),this.He=this.He.insert(r,this.dt(r).add(t)),a&&(this.je=this.je.insert(r,a))}removeTarget(t){this.ze.delete(t)}_t(t){const r=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+r.addedDocuments.size-r.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let r=this.ze.get(t);return r||(r=new ax,this.ze.set(t,r)),r}dt(t){let r=this.He.get(t);return r||(r=new Ue(Ut),this.He=this.He.insert(t,r)),r}It(t){let r=this.Je.get(t);return r||(r=new Ue(Ut),this.Je=this.Je.insert(t,r)),r}rt(t){const r=this.ot(t)!==null;return r||dt("WatchChangeAggregator","Detected inactive target",t),r}ot(t){const r=this.ze.get(t);return r&&r.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new ax),this.Ge.getRemoteKeysForTarget(t).forEach((r=>{this.et(t,r,null)}))}Et(t,r){return this.Ge.getRemoteKeysForTarget(t).has(r)}}function Fc(){return new pe(_t.comparator)}function sx(){return new pe(_t.comparator)}const vC={asc:"ASCENDING",desc:"DESCENDING"},xC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_C={and:"AND",or:"OR"};class EC{constructor(t,r){this.databaseId=t,this.useProto3Json=r}}function rm(i,t){return i.useProto3Json||Uh(t)?t:{value:t}}function Eh(i,t){return i.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function FE(i,t){return i.useProto3Json?t.toBase64():t.toUint8Array()}function bC(i,t){return Eh(i,t.toTimestamp())}function Ti(i){return Gt(!!i,49232),St.fromTimestamp((function(r){const a=ta(r);return new le(a.seconds,a.nanos)})(i))}function Jm(i,t){return am(i,t).canonicalString()}function am(i,t){const r=(function(o){return new oe(["projects",o.projectId,"databases",o.database])})(i).child("documents");return t===void 0?r:r.child(t)}function KE(i){const t=oe.fromString(i);return Gt(QE(t),10190,{key:t.toString()}),t}function sm(i,t){return Jm(i.databaseId,t.path)}function Sp(i,t){const r=KE(t);if(r.get(1)!==i.databaseId.projectId)throw new mt(st.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+i.databaseId.projectId);if(r.get(3)!==i.databaseId.database)throw new mt(st.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+i.databaseId.database);return new _t(qE(r))}function HE(i,t){return Jm(i.databaseId,t)}function TC(i){const t=KE(i);return t.length===4?oe.emptyPath():qE(t)}function om(i){return new oe(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function qE(i){return Gt(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function ox(i,t,r){return{name:sm(i,t),fields:r.value.mapValue.fields}}function wC(i,t){let r;if("targetChange"in t){t.targetChange;const a=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Tt(39313,{state:g})})(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],u=(function(g,_){return g.useProto3Json?(Gt(_===void 0||typeof _=="string",58123),Ze.fromBase64String(_||"")):(Gt(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array,16193),Ze.fromUint8Array(_||new Uint8Array))})(i,t.targetChange.resumeToken),f=t.targetChange.cause,m=f&&(function(g){const _=g.code===void 0?st.UNKNOWN:zE(g.code);return new mt(_,g.message||"")})(f);r=new $E(a,o,u,m||null)}else if("documentChange"in t){t.documentChange;const a=t.documentChange;a.document,a.document.name,a.document.updateTime;const o=Sp(i,a.document.name),u=Ti(a.document.updateTime),f=a.document.createTime?Ti(a.document.createTime):St.min(),m=new vn({mapValue:{fields:a.document.fields}}),p=sn.newFoundDocument(o,u,f,m),g=a.targetIds||[],_=a.removedTargetIds||[];r=new ah(g,_,p.key,p)}else if("documentDelete"in t){t.documentDelete;const a=t.documentDelete;a.document;const o=Sp(i,a.document),u=a.readTime?Ti(a.readTime):St.min(),f=sn.newNoDocument(o,u),m=a.removedTargetIds||[];r=new ah([],m,f.key,f)}else if("documentRemove"in t){t.documentRemove;const a=t.documentRemove;a.document;const o=Sp(i,a.document),u=a.removedTargetIds||[];r=new ah([],u,o,null)}else{if(!("filter"in t))return Tt(11601,{Rt:t});{t.filter;const a=t.filter;a.targetId;const{count:o=0,unchangedNames:u}=a,f=new dC(o,u),m=a.targetId;r=new BE(m,f)}}return r}function SC(i,t){let r;if(t instanceof ou)r={update:ox(i,t.key,t.value)};else if(t instanceof LE)r={delete:sm(i,t.key)};else if(t instanceof sa)r={update:ox(i,t.key,t.data),updateMask:OC(t.fieldMask)};else{if(!(t instanceof cC))return Tt(16599,{Vt:t.type});r={verify:sm(i,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map((a=>(function(u,f){const m=f.transform;if(m instanceof _h)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof eu)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof nu)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof iu)return{fieldPath:f.field.canonicalString(),increment:m.Ae};throw Tt(20930,{transform:f.transform})})(0,a)))),t.precondition.isNone||(r.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:bC(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:Tt(27497)})(i,t.precondition)),r}function AC(i,t){return i&&i.length>0?(Gt(t!==void 0,14353),i.map((r=>(function(o,u){let f=o.updateTime?Ti(o.updateTime):Ti(u);return f.isEqual(St.min())&&(f=Ti(u)),new oC(f,o.transformResults||[])})(r,t)))):[]}function RC(i,t){return{documents:[HE(i,t.path)]}}function CC(i,t){const r={structuredQuery:{}},a=t.path;let o;t.collectionGroup!==null?(o=a,r.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=a.popLast(),r.structuredQuery.from=[{collectionId:a.lastSegment()}]),r.parent=HE(i,o);const u=(function(g){if(g.length!==0)return YE(Ri.create(g,"and"))})(t.filters);u&&(r.structuredQuery.where=u);const f=(function(g){if(g.length!==0)return g.map((_=>(function(S){return{field:qs(S.field),direction:DC(S.dir)}})(_)))})(t.orderBy);f&&(r.structuredQuery.orderBy=f);const m=rm(i,t.limit);return m!==null&&(r.structuredQuery.limit=m),t.startAt&&(r.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(t.startAt)),t.endAt&&(r.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(t.endAt)),{ft:r,parent:o}}function jC(i){let t=TC(i.parent);const r=i.structuredQuery,a=r.from?r.from.length:0;let o=null;if(a>0){Gt(a===1,65062);const _=r.from[0];_.allDescendants?o=_.collectionId:t=t.child(_.collectionId)}let u=[];r.where&&(u=(function(b){const S=GE(b);return S instanceof Ri&&bE(S)?S.getFilters():[S]})(r.where));let f=[];r.orderBy&&(f=(function(b){return b.map((S=>(function(U){return new xh(Gs(U.field),(function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(U.direction))})(S)))})(r.orderBy));let m=null;r.limit&&(m=(function(b){let S;return S=typeof b=="object"?b.value:b,Uh(S)?null:S})(r.limit));let p=null;r.startAt&&(p=(function(b){const S=!!b.before,I=b.values||[];return new vh(I,S)})(r.startAt));let g=null;return r.endAt&&(g=(function(b){const S=!b.before,I=b.values||[];return new vh(I,S)})(r.endAt)),G6(t,o,f,u,m,"F",p,g)}function IC(i,t){const r=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Tt(28987,{purpose:o})}})(t.purpose);return r==null?null:{"goog-listen-tags":r}}function GE(i){return i.unaryFilter!==void 0?(function(r){switch(r.unaryFilter.op){case"IS_NAN":const a=Gs(r.unaryFilter.field);return ke.create(a,"==",{doubleValue:NaN});case"IS_NULL":const o=Gs(r.unaryFilter.field);return ke.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Gs(r.unaryFilter.field);return ke.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Gs(r.unaryFilter.field);return ke.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Tt(61313);default:return Tt(60726)}})(i):i.fieldFilter!==void 0?(function(r){return ke.create(Gs(r.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Tt(58110);default:return Tt(50506)}})(r.fieldFilter.op),r.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(r){return Ri.create(r.compositeFilter.filters.map((a=>GE(a))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Tt(1026)}})(r.compositeFilter.op))})(i):Tt(30097,{filter:i})}function DC(i){return vC[i]}function NC(i){return xC[i]}function MC(i){return _C[i]}function qs(i){return{fieldPath:i.canonicalString()}}function Gs(i){return We.fromServerFormat(i.fieldPath)}function YE(i){return i instanceof ke?(function(r){if(r.op==="=="){if(Yv(r.value))return{unaryFilter:{field:qs(r.field),op:"IS_NAN"}};if(Gv(r.value))return{unaryFilter:{field:qs(r.field),op:"IS_NULL"}}}else if(r.op==="!="){if(Yv(r.value))return{unaryFilter:{field:qs(r.field),op:"IS_NOT_NAN"}};if(Gv(r.value))return{unaryFilter:{field:qs(r.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qs(r.field),op:NC(r.op),value:r.value}}})(i):i instanceof Ri?(function(r){const a=r.getFilters().map((o=>YE(o)));return a.length===1?a[0]:{compositeFilter:{op:MC(r.op),filters:a}}})(i):Tt(54877,{filter:i})}function OC(i){const t=[];return i.fields.forEach((r=>t.push(r.canonicalString()))),{fieldPaths:t}}function QE(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class VC{constructor(t){this.yt=t}}function kC(i){const t=jC({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?im(t,t.limit,"L"):t}/**
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
 */class UC{constructor(){this.Cn=new PC}addToCollectionParentIndex(t,r){return this.Cn.add(r),at.resolve()}getCollectionParents(t,r){return at.resolve(this.Cn.getEntries(r))}addFieldIndex(t,r){return at.resolve()}deleteFieldIndex(t,r){return at.resolve()}deleteAllFieldIndexes(t){return at.resolve()}createTargetIndexes(t,r){return at.resolve()}getDocumentsMatchingTarget(t,r){return at.resolve(null)}getIndexType(t,r){return at.resolve(0)}getFieldIndexes(t,r){return at.resolve([])}getNextCollectionGroupToUpdate(t){return at.resolve(null)}getMinOffset(t,r){return at.resolve(Jr.min())}getMinOffsetFromCollectionGroup(t,r){return at.resolve(Jr.min())}updateCollectionGroup(t,r,a){return at.resolve()}updateIndexEntries(t,r){return at.resolve()}}class PC{constructor(){this.index={}}add(t){const r=t.lastSegment(),a=t.popLast(),o=this.index[r]||new Ue(oe.comparator),u=!o.has(a);return this.index[r]=o.add(a),u}has(t){const r=t.lastSegment(),a=t.popLast(),o=this.index[r];return o&&o.has(a)}getEntries(t){return(this.index[t]||new Ue(oe.comparator)).toArray()}}/**
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
 */const ux="LruGarbageCollector",LC=1048576;function cx([i,t],[r,a]){const o=Ut(i,r);return o===0?Ut(t,a):o}class zC{constructor(t){this.Ir=t,this.buffer=new Ue(cx),this.Er=0}dr(){return++this.Er}Ar(t){const r=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(r);else{const a=this.buffer.last();cx(r,a)<0&&(this.buffer=this.buffer.delete(a).add(r))}}get maxValue(){return this.buffer.last()[0]}}class BC{constructor(t,r,a){this.garbageCollector=t,this.asyncQueue=r,this.localStore=a,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){dt(ux,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(r){_o(r)?dt(ux,"Ignoring IndexedDB error during garbage collection: ",r):await xo(r)}await this.Vr(3e5)}))}}class $C{constructor(t,r){this.mr=t,this.params=r}calculateTargetCount(t,r){return this.mr.gr(t).next((a=>Math.floor(r/100*a)))}nthSequenceNumber(t,r){if(r===0)return at.resolve(kh.ce);const a=new zC(r);return this.mr.forEachTarget(t,(o=>a.Ar(o.sequenceNumber))).next((()=>this.mr.pr(t,(o=>a.Ar(o))))).next((()=>a.maxValue))}removeTargets(t,r,a){return this.mr.removeTargets(t,r,a)}removeOrphanedDocuments(t,r){return this.mr.removeOrphanedDocuments(t,r)}collect(t,r){return this.params.cacheSizeCollectionThreshold===-1?(dt("LruGarbageCollector","Garbage collection skipped; disabled"),at.resolve(lx)):this.getCacheSize(t).next((a=>a<this.params.cacheSizeCollectionThreshold?(dt("LruGarbageCollector",`Garbage collection skipped; Cache size ${a} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),lx):this.yr(t,r)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,r){let a,o,u,f,m,p,g;const _=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((b=>(b>this.params.maximumSequenceNumbersToCollect?(dt("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),o=this.params.maximumSequenceNumbersToCollect):o=b,f=Date.now(),this.nthSequenceNumber(t,o)))).next((b=>(a=b,m=Date.now(),this.removeTargets(t,a,r)))).next((b=>(u=b,p=Date.now(),this.removeOrphanedDocuments(t,a)))).next((b=>(g=Date.now(),Ks()<=$t.DEBUG&&dt("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-_}ms
	Determined least recently used ${o} in `+(m-f)+`ms
	Removed ${u} targets in `+(p-m)+`ms
	Removed ${b} documents in `+(g-p)+`ms
Total Duration: ${g-_}ms`),at.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:b}))))}}function FC(i,t){return new $C(i,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class HC{constructor(t,r){this.overlayedDocument=t,this.mutatedFields=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(t,r,a,o){this.remoteDocumentCache=t,this.mutationQueue=r,this.documentOverlayCache=a,this.indexManager=o}getDocument(t,r){let a=null;return this.documentOverlayCache.getOverlay(t,r).next((o=>(a=o,this.remoteDocumentCache.getEntry(t,r)))).next((o=>(a!==null&&$l(a.mutation,o,jn.empty(),le.now()),o)))}getDocuments(t,r){return this.remoteDocumentCache.getEntries(t,r).next((a=>this.getLocalViewOfDocuments(t,a,Pt()).next((()=>a))))}getLocalViewOfDocuments(t,r,a=Pt()){const o=qa();return this.populateOverlays(t,o,r).next((()=>this.computeViews(t,r,o,a).next((u=>{let f=Ml();return u.forEach(((m,p)=>{f=f.insert(m,p.overlayedDocument)})),f}))))}getOverlayedDocuments(t,r){const a=qa();return this.populateOverlays(t,a,r).next((()=>this.computeViews(t,r,a,Pt())))}populateOverlays(t,r,a){const o=[];return a.forEach((u=>{r.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(t,o).next((u=>{u.forEach(((f,m)=>{r.set(f,m)}))}))}computeViews(t,r,a,o){let u=or();const f=Bl(),m=(function(){return Bl()})();return r.forEach(((p,g)=>{const _=a.get(g.key);o.has(g.key)&&(_===void 0||_.mutation instanceof sa)?u=u.insert(g.key,g):_!==void 0?(f.set(g.key,_.mutation.getFieldMask()),$l(_.mutation,g,_.mutation.getFieldMask(),le.now())):f.set(g.key,jn.empty())})),this.recalculateAndSaveOverlays(t,u).next((p=>(p.forEach(((g,_)=>f.set(g,_))),r.forEach(((g,_)=>m.set(g,new HC(_,f.get(g)??null)))),m)))}recalculateAndSaveOverlays(t,r){const a=Bl();let o=new pe(((f,m)=>f-m)),u=Pt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,r).next((f=>{for(const m of f)m.keys().forEach((p=>{const g=r.get(p);if(g===null)return;let _=a.get(p)||jn.empty();_=m.applyToLocalView(g,_),a.set(p,_);const b=(o.get(m.batchId)||Pt()).add(p);o=o.insert(m.batchId,b)}))})).next((()=>{const f=[],m=o.getReverseIterator();for(;m.hasNext();){const p=m.getNext(),g=p.key,_=p.value,b=IE();_.forEach((S=>{if(!u.has(S)){const I=UE(r.get(S),a.get(S));I!==null&&b.set(S,I),u=u.add(S)}})),f.push(this.documentOverlayCache.saveOverlays(t,g,b))}return at.waitFor(f)})).next((()=>a))}recalculateAndSaveOverlaysForDocumentKeys(t,r){return this.remoteDocumentCache.getEntries(t,r).next((a=>this.recalculateAndSaveOverlays(t,a)))}getDocumentsMatchingQuery(t,r,a,o){return(function(f){return _t.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0})(r)?this.getDocumentsMatchingDocumentQuery(t,r.path):Y6(r)?this.getDocumentsMatchingCollectionGroupQuery(t,r,a,o):this.getDocumentsMatchingCollectionQuery(t,r,a,o)}getNextDocuments(t,r,a,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,r,a,o).next((u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,r,a.largestBatchId,o-u.size):at.resolve(qa());let m=Wl,p=u;return f.next((g=>at.forEach(g,((_,b)=>(m<b.largestBatchId&&(m=b.largestBatchId),u.get(_)?at.resolve():this.remoteDocumentCache.getEntry(t,_).next((S=>{p=p.insert(_,S)}))))).next((()=>this.populateOverlays(t,g,u))).next((()=>this.computeViews(t,p,g,Pt()))).next((_=>({batchId:m,changes:jE(_)})))))}))}getDocumentsMatchingDocumentQuery(t,r){return this.getDocument(t,new _t(r)).next((a=>{let o=Ml();return a.isFoundDocument()&&(o=o.insert(a.key,a)),o}))}getDocumentsMatchingCollectionGroupQuery(t,r,a,o){const u=r.collectionGroup;let f=Ml();return this.indexManager.getCollectionParents(t,u).next((m=>at.forEach(m,(p=>{const g=(function(b,S){return new Lh(S,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)})(r,p.child(u));return this.getDocumentsMatchingCollectionQuery(t,g,a,o).next((_=>{_.forEach(((b,S)=>{f=f.insert(b,S)}))}))})).next((()=>f))))}getDocumentsMatchingCollectionQuery(t,r,a,o){let u;return this.documentOverlayCache.getOverlaysForCollection(t,r.path,a.largestBatchId).next((f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(t,r,a,u,o)))).next((f=>{u.forEach(((p,g)=>{const _=g.getKey();f.get(_)===null&&(f=f.insert(_,sn.newInvalidDocument(_)))}));let m=Ml();return f.forEach(((p,g)=>{const _=u.get(p);_!==void 0&&$l(_.mutation,g,jn.empty(),le.now()),Bh(r,g)&&(m=m.insert(p,g))})),m}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class YC{constructor(){this.overlays=new pe(_t.comparator),this.qr=new Map}getOverlay(t,r){return at.resolve(this.overlays.get(r))}getOverlays(t,r){const a=qa();return at.forEach(r,(o=>this.getOverlay(t,o).next((u=>{u!==null&&a.set(o,u)})))).next((()=>a))}saveOverlays(t,r,a){return a.forEach(((o,u)=>{this.St(t,r,u)})),at.resolve()}removeOverlaysForBatchId(t,r,a){const o=this.qr.get(a);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.qr.delete(a)),at.resolve()}getOverlaysForCollection(t,r,a){const o=qa(),u=r.length+1,f=new _t(r.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const p=m.getNext().value,g=p.getKey();if(!r.isPrefixOf(g.path))break;g.path.length===u&&p.largestBatchId>a&&o.set(p.getKey(),p)}return at.resolve(o)}getOverlaysForCollectionGroup(t,r,a,o){let u=new pe(((g,_)=>g-_));const f=this.overlays.getIterator();for(;f.hasNext();){const g=f.getNext().value;if(g.getKey().getCollectionGroup()===r&&g.largestBatchId>a){let _=u.get(g.largestBatchId);_===null&&(_=qa(),u=u.insert(g.largestBatchId,_)),_.set(g.getKey(),g)}}const m=qa(),p=u.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((g,_)=>m.set(g,_))),!(m.size()>=o)););return at.resolve(m)}St(t,r,a){const o=this.overlays.get(a.key);if(o!==null){const f=this.qr.get(o.largestBatchId).delete(a.key);this.qr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(a.key,new fC(r,a));let u=this.qr.get(r);u===void 0&&(u=Pt(),this.qr.set(r,u)),this.qr.set(r,u.add(a.key))}}/**
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
 */class tg{constructor(){this.Qr=new Ue(Fe.$r),this.Ur=new Ue(Fe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,r){const a=new Fe(t,r);this.Qr=this.Qr.add(a),this.Ur=this.Ur.add(a)}Wr(t,r){t.forEach((a=>this.addReference(a,r)))}removeReference(t,r){this.Gr(new Fe(t,r))}zr(t,r){t.forEach((a=>this.removeReference(a,r)))}jr(t){const r=new _t(new oe([])),a=new Fe(r,t),o=new Fe(r,t+1),u=[];return this.Ur.forEachInRange([a,o],(f=>{this.Gr(f),u.push(f.key)})),u}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const r=new _t(new oe([])),a=new Fe(r,t),o=new Fe(r,t+1);let u=Pt();return this.Ur.forEachInRange([a,o],(f=>{u=u.add(f.key)})),u}containsKey(t){const r=new Fe(t,0),a=this.Qr.firstAfterOrEqual(r);return a!==null&&t.isEqual(a.key)}}class Fe{constructor(t,r){this.key=t,this.Yr=r}static $r(t,r){return _t.comparator(t.key,r.key)||Ut(t.Yr,r.Yr)}static Kr(t,r){return Ut(t.Yr,r.Yr)||_t.comparator(t.key,r.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(t,r){this.indexManager=t,this.referenceDelegate=r,this.mutationQueue=[],this.tr=1,this.Zr=new Ue(Fe.$r)}checkEmpty(t){return at.resolve(this.mutationQueue.length===0)}addMutationBatch(t,r,a,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new hC(u,r,a,o);this.mutationQueue.push(f);for(const m of o)this.Zr=this.Zr.add(new Fe(m.key,u)),this.indexManager.addToCollectionParentIndex(t,m.key.path.popLast());return at.resolve(f)}lookupMutationBatch(t,r){return at.resolve(this.Xr(r))}getNextMutationBatchAfterBatchId(t,r){const a=r+1,o=this.ei(a),u=o<0?0:o;return at.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return at.resolve(this.mutationQueue.length===0?Km:this.tr-1)}getAllMutationBatches(t){return at.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,r){const a=new Fe(r,0),o=new Fe(r,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([a,o],(f=>{const m=this.Xr(f.Yr);u.push(m)})),at.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(t,r){let a=new Ue(Ut);return r.forEach((o=>{const u=new Fe(o,0),f=new Fe(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,f],(m=>{a=a.add(m.Yr)}))})),at.resolve(this.ti(a))}getAllMutationBatchesAffectingQuery(t,r){const a=r.path,o=a.length+1;let u=a;_t.isDocumentKey(u)||(u=u.child(""));const f=new Fe(new _t(u),0);let m=new Ue(Ut);return this.Zr.forEachWhile((p=>{const g=p.key.path;return!!a.isPrefixOf(g)&&(g.length===o&&(m=m.add(p.Yr)),!0)}),f),at.resolve(this.ti(m))}ti(t){const r=[];return t.forEach((a=>{const o=this.Xr(a);o!==null&&r.push(o)})),r}removeMutationBatch(t,r){Gt(this.ni(r.batchId,"removed")===0,55003),this.mutationQueue.shift();let a=this.Zr;return at.forEach(r.mutations,(o=>{const u=new Fe(o.key,r.batchId);return a=a.delete(u),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)})).next((()=>{this.Zr=a}))}ir(t){}containsKey(t,r){const a=new Fe(r,0),o=this.Zr.firstAfterOrEqual(a);return at.resolve(r.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,at.resolve()}ni(t,r){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const r=this.ei(t);return r<0||r>=this.mutationQueue.length?null:this.mutationQueue[r]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(t){this.ri=t,this.docs=(function(){return new pe(_t.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,r){const a=r.key,o=this.docs.get(a),u=o?o.size:0,f=this.ri(r);return this.docs=this.docs.insert(a,{document:r.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(t,a.path.popLast())}removeEntry(t){const r=this.docs.get(t);r&&(this.docs=this.docs.remove(t),this.size-=r.size)}getEntry(t,r){const a=this.docs.get(r);return at.resolve(a?a.document.mutableCopy():sn.newInvalidDocument(r))}getEntries(t,r){let a=or();return r.forEach((o=>{const u=this.docs.get(o);a=a.insert(o,u?u.document.mutableCopy():sn.newInvalidDocument(o))})),at.resolve(a)}getDocumentsMatchingQuery(t,r,a,o){let u=or();const f=r.path,m=new _t(f.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(m);for(;p.hasNext();){const{key:g,value:{document:_}}=p.getNext();if(!f.isPrefixOf(g.path))break;g.path.length>f.length+1||S6(w6(_),a)<=0||(o.has(_.key)||Bh(r,_))&&(u=u.insert(_.key,_.mutableCopy()))}return at.resolve(u)}getAllFromCollectionGroup(t,r,a,o){Tt(9500)}ii(t,r){return at.forEach(this.docs,(a=>r(a)))}newChangeBuffer(t){return new ZC(this)}getSize(t){return at.resolve(this.size)}}class ZC extends KC{constructor(t){super(),this.Nr=t}applyChanges(t){const r=[];return this.changes.forEach(((a,o)=>{o.isValidDocument()?r.push(this.Nr.addEntry(t,o)):this.Nr.removeEntry(a)})),at.waitFor(r)}getFromCache(t,r){return this.Nr.getEntry(t,r)}getAllFromCache(t,r){return this.Nr.getEntries(t,r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class nj{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return q4()?8:C6(K4())>0?6:4})()}initialize(t,r){this.ps=t,this.indexManager=r,this.Rs=!0}getDocumentsMatchingQuery(t,r,a,o){const u={result:null};return this.ys(t,r).next((f=>{u.result=f})).next((()=>{if(!u.result)return this.ws(t,r,o,a).next((f=>{u.result=f}))})).next((()=>{if(u.result)return;const f=new ej;return this.Ss(t,r,f).next((m=>{if(u.result=m,this.Vs)return this.bs(t,r,f,m.size)}))})).next((()=>u.result))}bs(t,r,a,o){return a.documentReadCount<this.fs?(Ks()<=$t.DEBUG&&dt("QueryEngine","SDK will not create cache indexes for query:",Hs(r),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),at.resolve()):(Ks()<=$t.DEBUG&&dt("QueryEngine","Query:",Hs(r),"scans",a.documentReadCount,"local documents and returns",o,"documents as results."),a.documentReadCount>this.gs*o?(Ks()<=$t.DEBUG&&dt("QueryEngine","The SDK decides to create cache indexes for query:",Hs(r),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ei(r))):at.resolve())}ys(t,r){if(Zv(r))return at.resolve(null);let a=Ei(r);return this.indexManager.getIndexType(t,a).next((o=>o===0?null:(r.limit!==null&&o===1&&(r=im(r,null,"F"),a=Ei(r)),this.indexManager.getDocumentsMatchingTarget(t,a).next((u=>{const f=Pt(...u);return this.ps.getDocuments(t,f).next((m=>this.indexManager.getMinOffset(t,a).next((p=>{const g=this.Ds(r,m);return this.Cs(r,g,f,p.readTime)?this.ys(t,im(r,null,"F")):this.vs(t,g,r,p)}))))})))))}ws(t,r,a,o){return Zv(r)||o.isEqual(St.min())?at.resolve(null):this.ps.getDocuments(t,a).next((u=>{const f=this.Ds(r,u);return this.Cs(r,f,a,o)?at.resolve(null):(Ks()<=$t.DEBUG&&dt("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Hs(r)),this.vs(t,f,r,T6(o,Wl)).next((m=>m)))}))}Ds(t,r){let a=new Ue(RE(t));return r.forEach(((o,u)=>{Bh(t,u)&&(a=a.add(u))})),a}Cs(t,r,a,o){if(t.limit===null)return!1;if(a.size!==r.size)return!0;const u=t.limitType==="F"?r.last():r.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(t,r,a){return Ks()<=$t.DEBUG&&dt("QueryEngine","Using full collection scan to execute query:",Hs(r)),this.ps.getDocumentsMatchingQuery(t,r,Jr.min(),a)}vs(t,r,a,o){return this.ps.getDocumentsMatchingQuery(t,a,o).next((u=>(r.forEach((f=>{u=u.insert(f.key,f)})),u)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig="LocalStore",ij=3e8;class rj{constructor(t,r,a,o){this.persistence=t,this.Fs=r,this.serializer=o,this.Ms=new pe(Ut),this.xs=new Za((u=>Gm(u)),Ym),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(a)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new qC(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(r=>t.collect(r,this.Ms)))}}function aj(i,t,r,a){return new rj(i,t,r,a)}async function ZE(i,t){const r=Rt(i);return await r.persistence.runTransaction("Handle user change","readonly",(a=>{let o;return r.mutationQueue.getAllMutationBatches(a).next((u=>(o=u,r.Bs(t),r.mutationQueue.getAllMutationBatches(a)))).next((u=>{const f=[],m=[];let p=Pt();for(const g of o){f.push(g.batchId);for(const _ of g.mutations)p=p.add(_.key)}for(const g of u){m.push(g.batchId);for(const _ of g.mutations)p=p.add(_.key)}return r.localDocuments.getDocuments(a,p).next((g=>({Ls:g,removedBatchIds:f,addedBatchIds:m})))}))}))}function sj(i,t){const r=Rt(i);return r.persistence.runTransaction("Acknowledge batch","readwrite-primary",(a=>{const o=t.batch.keys(),u=r.Ns.newChangeBuffer({trackRemovals:!0});return(function(m,p,g,_){const b=g.batch,S=b.keys();let I=at.resolve();return S.forEach((U=>{I=I.next((()=>_.getEntry(p,U))).next((F=>{const P=g.docVersions.get(U);Gt(P!==null,48541),F.version.compareTo(P)<0&&(b.applyToRemoteDocument(F,g),F.isValidDocument()&&(F.setReadTime(g.commitVersion),_.addEntry(F)))}))})),I.next((()=>m.mutationQueue.removeMutationBatch(p,b)))})(r,a,t,u).next((()=>u.apply(a))).next((()=>r.mutationQueue.performConsistencyCheck(a))).next((()=>r.documentOverlayCache.removeOverlaysForBatchId(a,o,t.batch.batchId))).next((()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,(function(m){let p=Pt();for(let g=0;g<m.mutationResults.length;++g)m.mutationResults[g].transformResults.length>0&&(p=p.add(m.batch.mutations[g].key));return p})(t)))).next((()=>r.localDocuments.getDocuments(a,o)))}))}function JE(i){const t=Rt(i);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(r=>t.Pi.getLastRemoteSnapshotVersion(r)))}function oj(i,t){const r=Rt(i),a=t.snapshotVersion;let o=r.Ms;return r.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const f=r.Ns.newChangeBuffer({trackRemovals:!0});o=r.Ms;const m=[];t.targetChanges.forEach(((_,b)=>{const S=o.get(b);if(!S)return;m.push(r.Pi.removeMatchingKeys(u,_.removedDocuments,b).next((()=>r.Pi.addMatchingKeys(u,_.addedDocuments,b))));let I=S.withSequenceNumber(u.currentSequenceNumber);t.targetMismatches.get(b)!==null?I=I.withResumeToken(Ze.EMPTY_BYTE_STRING,St.min()).withLastLimboFreeSnapshotVersion(St.min()):_.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(_.resumeToken,a)),o=o.insert(b,I),(function(F,P,X){return F.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-F.snapshotVersion.toMicroseconds()>=ij?!0:X.addedDocuments.size+X.modifiedDocuments.size+X.removedDocuments.size>0})(S,I,_)&&m.push(r.Pi.updateTargetData(u,I))}));let p=or(),g=Pt();if(t.documentUpdates.forEach((_=>{t.resolvedLimboDocuments.has(_)&&m.push(r.persistence.referenceDelegate.updateLimboDocument(u,_))})),m.push(lj(u,f,t.documentUpdates).next((_=>{p=_.ks,g=_.qs}))),!a.isEqual(St.min())){const _=r.Pi.getLastRemoteSnapshotVersion(u).next((b=>r.Pi.setTargetsMetadata(u,u.currentSequenceNumber,a)));m.push(_)}return at.waitFor(m).next((()=>f.apply(u))).next((()=>r.localDocuments.getLocalViewOfDocuments(u,p,g))).next((()=>p))})).then((u=>(r.Ms=o,u)))}function lj(i,t,r){let a=Pt(),o=Pt();return r.forEach((u=>a=a.add(u))),t.getEntries(i,a).next((u=>{let f=or();return r.forEach(((m,p)=>{const g=u.get(m);p.isFoundDocument()!==g.isFoundDocument()&&(o=o.add(m)),p.isNoDocument()&&p.version.isEqual(St.min())?(t.removeEntry(m,p.readTime),f=f.insert(m,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(t.addEntry(p),f=f.insert(m,p)):dt(ig,"Ignoring outdated watch update for ",m,". Current version:",g.version," Watch version:",p.version)})),{ks:f,qs:o}}))}function uj(i,t){const r=Rt(i);return r.persistence.runTransaction("Get next mutation batch","readonly",(a=>(t===void 0&&(t=Km),r.mutationQueue.getNextMutationBatchAfterBatchId(a,t))))}function cj(i,t){const r=Rt(i);return r.persistence.runTransaction("Allocate target","readwrite",(a=>{let o;return r.Pi.getTargetData(a,t).next((u=>u?(o=u,at.resolve(o)):r.Pi.allocateTargetId(a).next((f=>(o=new Gr(t,f,"TargetPurposeListen",a.currentSequenceNumber),r.Pi.addTargetData(a,o).next((()=>o)))))))})).then((a=>{const o=r.Ms.get(a.targetId);return(o===null||a.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(r.Ms=r.Ms.insert(a.targetId,a),r.xs.set(t,a.targetId)),a}))}async function lm(i,t,r){const a=Rt(i),o=a.Ms.get(t),u=r?"readwrite":"readwrite-primary";try{r||await a.persistence.runTransaction("Release target",u,(f=>a.persistence.referenceDelegate.removeTarget(f,o)))}catch(f){if(!_o(f))throw f;dt(ig,`Failed to update sequence numbers for target ${t}: ${f}`)}a.Ms=a.Ms.remove(t),a.xs.delete(o.target)}function hx(i,t,r){const a=Rt(i);let o=St.min(),u=Pt();return a.persistence.runTransaction("Execute query","readwrite",(f=>(function(p,g,_){const b=Rt(p),S=b.xs.get(_);return S!==void 0?at.resolve(b.Ms.get(S)):b.Pi.getTargetData(g,_)})(a,f,Ei(t)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,a.Pi.getMatchingKeysForTargetId(f,m.targetId).next((p=>{u=p}))})).next((()=>a.Fs.getDocumentsMatchingQuery(f,t,r?o:St.min(),r?u:Pt()))).next((m=>(hj(a,X6(t),m),{documents:m,Qs:u})))))}function hj(i,t,r){let a=i.Os.get(t)||St.min();r.forEach(((o,u)=>{u.readTime.compareTo(a)>0&&(a=u.readTime)})),i.Os.set(t,a)}class fx{constructor(){this.activeTargetIds=nC()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class fj{constructor(){this.Mo=new fx,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,r,a){}addLocalQueryTarget(t,r=!0){return r&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,r,a){this.xo[t]=r}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new fx,Promise.resolve()}handleUserChange(t,r,a){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */const rn="WebChannelConnection";class yj extends mj{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,r,a,o,u){const f=um();return new Promise(((m,p)=>{const g=new eE;g.setWithCredentials(!0),g.listenOnce(nE.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case eh.NO_ERROR:const b=g.getResponseJson();dt(rn,`XHR for RPC '${t}' ${f} received:`,JSON.stringify(b)),m(b);break;case eh.TIMEOUT:dt(rn,`RPC '${t}' ${f} timed out`),p(new mt(st.DEADLINE_EXCEEDED,"Request time out"));break;case eh.HTTP_ERROR:const S=g.getStatus();if(dt(rn,`RPC '${t}' ${f} failed with status:`,S,"response text:",g.getResponseText()),S>0){let I=g.getResponseJson();Array.isArray(I)&&(I=I[0]);const U=I?.error;if(U&&U.status&&U.message){const F=(function(X){const Q=X.toLowerCase().replace(/_/g,"-");return Object.values(st).indexOf(Q)>=0?Q:st.UNKNOWN})(U.status);p(new mt(F,U.message))}else p(new mt(st.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new mt(st.UNAVAILABLE,"Connection failed."));break;default:Tt(9055,{l_:t,streamId:f,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{dt(rn,`RPC '${t}' ${f} completed.`)}}));const _=JSON.stringify(o);dt(rn,`RPC '${t}' ${f} sending request:`,o),g.send(r,"POST",_,a,15)}))}T_(t,r,a){const o=um(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],f=aE(),m=rE(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.jo(p.initMessageHeaders,r,a),p.encodeInitMessageHeaders=!0;const _=u.join("");dt(rn,`Creating RPC '${t}' stream ${o}: ${_}`,p);const b=f.createWebChannel(_,p);this.I_(b);let S=!1,I=!1;const U=new gj({Yo:P=>{I?dt(rn,`Not sending because RPC '${t}' stream ${o} is closed:`,P):(S||(dt(rn,`Opening RPC '${t}' stream ${o} transport.`),b.open(),S=!0),dt(rn,`RPC '${t}' stream ${o} sending:`,P),b.send(P))},Zo:()=>b.close()}),F=(P,X,Q)=>{P.listen(X,(Z=>{try{Q(Z)}catch(lt){setTimeout((()=>{throw lt}),0)}}))};return F(b,Nl.EventType.OPEN,(()=>{I||(dt(rn,`RPC '${t}' stream ${o} transport opened.`),U.o_())})),F(b,Nl.EventType.CLOSE,(()=>{I||(I=!0,dt(rn,`RPC '${t}' stream ${o} transport closed`),U.a_(),this.E_(b))})),F(b,Nl.EventType.ERROR,(P=>{I||(I=!0,ro(rn,`RPC '${t}' stream ${o} transport errored. Name:`,P.name,"Message:",P.message),U.a_(new mt(st.UNAVAILABLE,"The operation could not be completed")))})),F(b,Nl.EventType.MESSAGE,(P=>{if(!I){const X=P.data[0];Gt(!!X,16349);const Q=X,Z=Q?.error||Q[0]?.error;if(Z){dt(rn,`RPC '${t}' stream ${o} received error:`,Z);const lt=Z.status;let J=(function(R){const C=Re[R];if(C!==void 0)return zE(C)})(lt),ot=Z.message;J===void 0&&(J=st.INTERNAL,ot="Unknown error status: "+lt+" with message "+Z.message),I=!0,U.a_(new mt(J,ot)),b.close()}else dt(rn,`RPC '${t}' stream ${o} received:`,X),U.u_(X)}})),F(m,iE.STAT_EVENT,(P=>{P.stat===Wp.PROXY?dt(rn,`RPC '${t}' stream ${o} detected buffering proxy`):P.stat===Wp.NOPROXY&&dt(rn,`RPC '${t}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{U.__()}),0),U}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((r=>r===t))}}function Rp(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(i){return new EC(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Wa="RemoteStore";class Tj{constructor(t,r,a,o,u){this.localStore=t,this.datastore=r,this.asyncQueue=a,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo((f=>{a.enqueueAndForget((async()=>{Ja(this)&&(dt(Wa,"Restarting streams for network reachability change."),await(async function(p){const g=Rt(p);g.Ea.add(4),await uu(g),g.Ra.set("Unknown"),g.Ea.delete(4),await qh(g)})(this))}))})),this.Ra=new bj(a,o)}}async function qh(i){if(Ja(i))for(const t of i.da)await t(!0)}async function uu(i){for(const t of i.da)await t(!1)}function n2(i,t){const r=Rt(i);r.Ia.has(t.targetId)||(r.Ia.set(t.targetId,t),og(r)?sg(r):Eo(r).O_()&&ag(r,t))}function rg(i,t){const r=Rt(i),a=Eo(r);r.Ia.delete(t),a.O_()&&i2(r,t),r.Ia.size===0&&(a.O_()?a.L_():Ja(r)&&r.Ra.set("Unknown"))}function ag(i,t){if(i.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(St.min())>0){const r=i.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(r)}Eo(i).Y_(t)}function i2(i,t){i.Va.Ue(t),Eo(i).Z_(t)}function sg(i){i.Va=new yC({getRemoteKeysForTarget:t=>i.remoteSyncer.getRemoteKeysForTarget(t),At:t=>i.Ia.get(t)||null,ht:()=>i.datastore.serializer.databaseId}),Eo(i).start(),i.Ra.ua()}function og(i){return Ja(i)&&!Eo(i).x_()&&i.Ia.size>0}function Ja(i){return Rt(i).Ea.size===0}function r2(i){i.Va=void 0}async function wj(i){i.Ra.set("Online")}async function Sj(i){i.Ia.forEach(((t,r)=>{ag(i,t)}))}async function Aj(i,t){r2(i),og(i)?(i.Ra.ha(t),sg(i)):i.Ra.set("Unknown")}async function Rj(i,t,r){if(i.Ra.set("Online"),t instanceof $E&&t.state===2&&t.cause)try{await(async function(o,u){const f=u.cause;for(const m of u.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,f),o.Ia.delete(m),o.Va.removeTarget(m))})(i,t)}catch(a){dt(Wa,"Failed to remove targets %s: %s ",t.targetIds.join(","),a),await Th(i,a)}else if(t instanceof ah?i.Va.Ze(t):t instanceof BE?i.Va.st(t):i.Va.tt(t),!r.isEqual(St.min()))try{const a=await JE(i.localStore);r.compareTo(a)>=0&&await(function(u,f){const m=u.Va.Tt(f);return m.targetChanges.forEach(((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const _=u.Ia.get(g);_&&u.Ia.set(g,_.withResumeToken(p.resumeToken,f))}})),m.targetMismatches.forEach(((p,g)=>{const _=u.Ia.get(p);if(!_)return;u.Ia.set(p,_.withResumeToken(Ze.EMPTY_BYTE_STRING,_.snapshotVersion)),i2(u,p);const b=new Gr(_.target,p,g,_.sequenceNumber);ag(u,b)})),u.remoteSyncer.applyRemoteEvent(m)})(i,r)}catch(a){dt(Wa,"Failed to raise snapshot:",a),await Th(i,a)}}async function Th(i,t,r){if(!_o(t))throw t;i.Ea.add(1),await uu(i),i.Ra.set("Offline"),r||(r=()=>JE(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{dt(Wa,"Retrying IndexedDB access"),await r(),i.Ea.delete(1),await qh(i)}))}function a2(i,t){return t().catch((r=>Th(i,r,t)))}async function Gh(i){const t=Rt(i),r=ia(t);let a=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Km;for(;Cj(t);)try{const o=await uj(t.localStore,a);if(o===null){t.Ta.length===0&&r.L_();break}a=o.batchId,jj(t,o)}catch(o){await Th(t,o)}s2(t)&&o2(t)}function Cj(i){return Ja(i)&&i.Ta.length<10}function jj(i,t){i.Ta.push(t);const r=ia(i);r.O_()&&r.X_&&r.ea(t.mutations)}function s2(i){return Ja(i)&&!ia(i).x_()&&i.Ta.length>0}function o2(i){ia(i).start()}async function Ij(i){ia(i).ra()}async function Dj(i){const t=ia(i);for(const r of i.Ta)t.ea(r.mutations)}async function Nj(i,t,r){const a=i.Ta.shift(),o=Wm.from(a,t,r);await a2(i,(()=>i.remoteSyncer.applySuccessfulWrite(o))),await Gh(i)}async function Mj(i,t){t&&ia(i).X_&&await(async function(a,o){if((function(f){return pC(f)&&f!==st.ABORTED})(o.code)){const u=a.Ta.shift();ia(a).B_(),await a2(a,(()=>a.remoteSyncer.rejectFailedWrite(u.batchId,o))),await Gh(a)}})(i,t),s2(i)&&o2(i)}async function gx(i,t){const r=Rt(i);r.asyncQueue.verifyOperationInProgress(),dt(Wa,"RemoteStore received new credentials");const a=Ja(r);r.Ea.add(3),await uu(r),a&&r.Ra.set("Unknown"),await r.remoteSyncer.handleCredentialChange(t),r.Ea.delete(3),await qh(r)}async function Oj(i,t){const r=Rt(i);t?(r.Ea.delete(2),await qh(r)):t||(r.Ea.add(2),await uu(r),r.Ra.set("Unknown"))}function Eo(i){return i.ma||(i.ma=(function(r,a,o){const u=Rt(r);return u.sa(),new vj(a,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Xo:wj.bind(null,i),t_:Sj.bind(null,i),r_:Aj.bind(null,i),H_:Rj.bind(null,i)}),i.da.push((async t=>{t?(i.ma.B_(),og(i)?sg(i):i.Ra.set("Unknown")):(await i.ma.stop(),r2(i))}))),i.ma}function ia(i){return i.fa||(i.fa=(function(r,a,o){const u=Rt(r);return u.sa(),new xj(a,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Xo:()=>Promise.resolve(),t_:Ij.bind(null,i),r_:Mj.bind(null,i),ta:Dj.bind(null,i),na:Nj.bind(null,i)}),i.da.push((async t=>{t?(i.fa.B_(),await Gh(i)):(await i.fa.stop(),i.Ta.length>0&&(dt(Wa,`Stopping write stream with ${i.Ta.length} pending writes`),i.Ta=[]))}))),i.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(t,r,a,o,u){this.asyncQueue=t,this.timerId=r,this.targetTimeMs=a,this.op=o,this.removalCallback=u,this.deferred=new er,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((f=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,r,a,o,u){const f=Date.now()+a,m=new lg(t,r,f,o,u);return m.start(a),m}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new mt(st.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ug(i,t){if(ar("AsyncQueue",`${t}: ${i}`),_o(i))return new mt(st.UNAVAILABLE,`${t}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{static emptySet(t){return new Xs(t.comparator)}constructor(t){this.comparator=t?(r,a)=>t(r,a)||_t.comparator(r.key,a.key):(r,a)=>_t.comparator(r.key,a.key),this.keyedMap=Ml(),this.sortedSet=new pe(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const r=this.keyedMap.get(t);return r?this.sortedSet.indexOf(r):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((r,a)=>(t(r),!1)))}add(t){const r=this.delete(t.key);return r.copy(r.keyedMap.insert(t.key,t),r.sortedSet.insert(t,null))}delete(t){const r=this.get(t);return r?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(r)):this}isEqual(t){if(!(t instanceof Xs)||this.size!==t.size)return!1;const r=this.sortedSet.getIterator(),a=t.sortedSet.getIterator();for(;r.hasNext();){const o=r.getNext().key,u=a.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const t=[];return this.forEach((r=>{t.push(r.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
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
 */class yx{constructor(){this.ga=new pe(_t.comparator)}track(t){const r=t.doc.key,a=this.ga.get(r);a?t.type!==0&&a.type===3?this.ga=this.ga.insert(r,t):t.type===3&&a.type!==1?this.ga=this.ga.insert(r,{type:a.type,doc:t.doc}):t.type===2&&a.type===2?this.ga=this.ga.insert(r,{type:2,doc:t.doc}):t.type===2&&a.type===0?this.ga=this.ga.insert(r,{type:0,doc:t.doc}):t.type===1&&a.type===0?this.ga=this.ga.remove(r):t.type===1&&a.type===2?this.ga=this.ga.insert(r,{type:1,doc:a.doc}):t.type===0&&a.type===1?this.ga=this.ga.insert(r,{type:2,doc:t.doc}):Tt(63341,{Rt:t,pa:a}):this.ga=this.ga.insert(r,t)}ya(){const t=[];return this.ga.inorderTraversal(((r,a)=>{t.push(a)})),t}}class uo{constructor(t,r,a,o,u,f,m,p,g){this.query=t,this.docs=r,this.oldDocs=a,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(t,r,a,o,u){const f=[];return r.forEach((m=>{f.push({type:0,doc:m})})),new uo(t,r,Xs.emptySet(r),f,a,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&zh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const r=this.docChanges,a=t.docChanges;if(r.length!==a.length)return!1;for(let o=0;o<r.length;o++)if(r[o].type!==a[o].type||!r[o].doc.isEqual(a[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vj{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class kj{constructor(){this.queries=vx(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(r,a){const o=Rt(r),u=o.queries;o.queries=vx(),u.forEach(((f,m)=>{for(const p of m.Sa)p.onError(a)}))})(this,new mt(st.ABORTED,"Firestore shutting down"))}}function vx(){return new Za((i=>AE(i)),zh)}async function l2(i,t){const r=Rt(i);let a=3;const o=t.query;let u=r.queries.get(o);u?!u.ba()&&t.Da()&&(a=2):(u=new Vj,a=t.Da()?0:1);try{switch(a){case 0:u.wa=await r.onListen(o,!0);break;case 1:u.wa=await r.onListen(o,!1);break;case 2:await r.onFirstRemoteStoreListen(o)}}catch(f){const m=ug(f,`Initialization of query '${Hs(t.query)}' failed`);return void t.onError(m)}r.queries.set(o,u),u.Sa.push(t),t.va(r.onlineState),u.wa&&t.Fa(u.wa)&&cg(r)}async function u2(i,t){const r=Rt(i),a=t.query;let o=3;const u=r.queries.get(a);if(u){const f=u.Sa.indexOf(t);f>=0&&(u.Sa.splice(f,1),u.Sa.length===0?o=t.Da()?0:1:!u.ba()&&t.Da()&&(o=2))}switch(o){case 0:return r.queries.delete(a),r.onUnlisten(a,!0);case 1:return r.queries.delete(a),r.onUnlisten(a,!1);case 2:return r.onLastRemoteStoreUnlisten(a);default:return}}function Uj(i,t){const r=Rt(i);let a=!1;for(const o of t){const u=o.query,f=r.queries.get(u);if(f){for(const m of f.Sa)m.Fa(o)&&(a=!0);f.wa=o}}a&&cg(r)}function Pj(i,t,r){const a=Rt(i),o=a.queries.get(t);if(o)for(const u of o.Sa)u.onError(r);a.queries.delete(t)}function cg(i){i.Ca.forEach((t=>{t.next()}))}var cm,xx;(xx=cm||(cm={})).Ma="default",xx.Cache="cache";class c2{constructor(t,r,a){this.query=t,this.xa=r,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=a||{}}Fa(t){if(!this.options.includeMetadataChanges){const a=[];for(const o of t.docChanges)o.type!==3&&a.push(o);t=new uo(t.query,t.docs,t.oldDocs,a,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let r=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),r=!0):this.La(t,this.onlineState)&&(this.ka(t),r=!0),this.Na=t,r}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let r=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),r=!0),r}La(t,r){if(!t.fromCache||!this.Da())return!0;const a=r!=="Offline";return(!this.options.qa||!a)&&(!t.docs.isEmpty()||t.hasCachedResults||r==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const r=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!r)&&this.options.includeMetadataChanges===!0}ka(t){t=uo.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==cm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(t){this.key=t}}class f2{constructor(t){this.key=t}}class Lj{constructor(t,r){this.query=t,this.Ya=r,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Pt(),this.mutatedKeys=Pt(),this.eu=RE(t),this.tu=new Xs(this.eu)}get nu(){return this.Ya}ru(t,r){const a=r?r.iu:new yx,o=r?r.tu:this.tu;let u=r?r.mutatedKeys:this.mutatedKeys,f=o,m=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,g=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal(((_,b)=>{const S=o.get(_),I=Bh(this.query,b)?b:null,U=!!S&&this.mutatedKeys.has(S.key),F=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let P=!1;S&&I?S.data.isEqual(I.data)?U!==F&&(a.track({type:3,doc:I}),P=!0):this.su(S,I)||(a.track({type:2,doc:I}),P=!0,(p&&this.eu(I,p)>0||g&&this.eu(I,g)<0)&&(m=!0)):!S&&I?(a.track({type:0,doc:I}),P=!0):S&&!I&&(a.track({type:1,doc:S}),P=!0,(p||g)&&(m=!0)),P&&(I?(f=f.add(I),u=F?u.add(_):u.delete(_)):(f=f.delete(_),u=u.delete(_)))})),this.query.limit!==null)for(;f.size>this.query.limit;){const _=this.query.limitType==="F"?f.last():f.first();f=f.delete(_.key),u=u.delete(_.key),a.track({type:1,doc:_})}return{tu:f,iu:a,Cs:m,mutatedKeys:u}}su(t,r){return t.hasLocalMutations&&r.hasCommittedMutations&&!r.hasLocalMutations}applyChanges(t,r,a,o){const u=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const f=t.iu.ya();f.sort(((_,b)=>(function(I,U){const F=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Tt(20277,{Rt:P})}};return F(I)-F(U)})(_.type,b.type)||this.eu(_.doc,b.doc))),this.ou(a),o=o??!1;const m=r&&!o?this._u():[],p=this.Xa.size===0&&this.current&&!o?1:0,g=p!==this.Za;return this.Za=p,f.length!==0||g?{snapshot:new uo(this.query,t.tu,u,f,t.mutatedKeys,p===0,g,!1,!!a&&a.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new yx,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((r=>this.Ya=this.Ya.add(r))),t.modifiedDocuments.forEach((r=>{})),t.removedDocuments.forEach((r=>this.Ya=this.Ya.delete(r))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=Pt(),this.tu.forEach((a=>{this.uu(a.key)&&(this.Xa=this.Xa.add(a.key))}));const r=[];return t.forEach((a=>{this.Xa.has(a)||r.push(new f2(a))})),this.Xa.forEach((a=>{t.has(a)||r.push(new h2(a))})),r}cu(t){this.Ya=t.Qs,this.Xa=Pt();const r=this.ru(t.documents);return this.applyChanges(r,!0)}lu(){return uo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const hg="SyncEngine";class zj{constructor(t,r,a){this.query=t,this.targetId=r,this.view=a}}class Bj{constructor(t){this.key=t,this.hu=!1}}class $j{constructor(t,r,a,o,u,f){this.localStore=t,this.remoteStore=r,this.eventManager=a,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.Pu={},this.Tu=new Za((m=>AE(m)),zh),this.Iu=new Map,this.Eu=new Set,this.du=new pe(_t.comparator),this.Au=new Map,this.Ru=new tg,this.Vu={},this.mu=new Map,this.fu=lo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Fj(i,t,r=!0){const a=v2(i);let o;const u=a.Tu.get(t);return u?(a.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await d2(a,t,r,!0),o}async function Kj(i,t){const r=v2(i);await d2(r,t,!0,!1)}async function d2(i,t,r,a){const o=await cj(i.localStore,Ei(t)),u=o.targetId,f=i.sharedClientState.addLocalQueryTarget(u,r);let m;return a&&(m=await Hj(i,t,u,f==="current",o.resumeToken)),i.isPrimaryClient&&r&&n2(i.remoteStore,o),m}async function Hj(i,t,r,a,o){i.pu=(b,S,I)=>(async function(F,P,X,Q){let Z=P.view.ru(X);Z.Cs&&(Z=await hx(F.localStore,P.query,!1).then((({documents:j})=>P.view.ru(j,Z))));const lt=Q&&Q.targetChanges.get(P.targetId),J=Q&&Q.targetMismatches.get(P.targetId)!=null,ot=P.view.applyChanges(Z,F.isPrimaryClient,lt,J);return Ex(F,P.targetId,ot.au),ot.snapshot})(i,b,S,I);const u=await hx(i.localStore,t,!0),f=new Lj(t,u.Qs),m=f.ru(u.documents),p=lu.createSynthesizedTargetChangeForCurrentChange(r,a&&i.onlineState!=="Offline",o),g=f.applyChanges(m,i.isPrimaryClient,p);Ex(i,r,g.au);const _=new zj(t,r,f);return i.Tu.set(t,_),i.Iu.has(r)?i.Iu.get(r).push(t):i.Iu.set(r,[t]),g.snapshot}async function qj(i,t,r){const a=Rt(i),o=a.Tu.get(t),u=a.Iu.get(o.targetId);if(u.length>1)return a.Iu.set(o.targetId,u.filter((f=>!zh(f,t)))),void a.Tu.delete(t);a.isPrimaryClient?(a.sharedClientState.removeLocalQueryTarget(o.targetId),a.sharedClientState.isActiveQueryTarget(o.targetId)||await lm(a.localStore,o.targetId,!1).then((()=>{a.sharedClientState.clearQueryState(o.targetId),r&&rg(a.remoteStore,o.targetId),hm(a,o.targetId)})).catch(xo)):(hm(a,o.targetId),await lm(a.localStore,o.targetId,!0))}async function Gj(i,t){const r=Rt(i),a=r.Tu.get(t),o=r.Iu.get(a.targetId);r.isPrimaryClient&&o.length===1&&(r.sharedClientState.removeLocalQueryTarget(a.targetId),rg(r.remoteStore,a.targetId))}async function Yj(i,t,r){const a=eI(i);try{const o=await(function(f,m){const p=Rt(f),g=le.now(),_=m.reduce(((I,U)=>I.add(U.key)),Pt());let b,S;return p.persistence.runTransaction("Locally write mutations","readwrite",(I=>{let U=or(),F=Pt();return p.Ns.getEntries(I,_).next((P=>{U=P,U.forEach(((X,Q)=>{Q.isValidDocument()||(F=F.add(X))}))})).next((()=>p.localDocuments.getOverlayedDocuments(I,U))).next((P=>{b=P;const X=[];for(const Q of m){const Z=uC(Q,b.get(Q.key).overlayedDocument);Z!=null&&X.push(new sa(Q.key,Z,xE(Z.value.mapValue),bi.exists(!0)))}return p.mutationQueue.addMutationBatch(I,g,X,m)})).next((P=>{S=P;const X=P.applyToLocalDocumentSet(b,F);return p.documentOverlayCache.saveOverlays(I,P.batchId,X)}))})).then((()=>({batchId:S.batchId,changes:jE(b)})))})(a.localStore,t);a.sharedClientState.addPendingMutation(o.batchId),(function(f,m,p){let g=f.Vu[f.currentUser.toKey()];g||(g=new pe(Ut)),g=g.insert(m,p),f.Vu[f.currentUser.toKey()]=g})(a,o.batchId,r),await cu(a,o.changes),await Gh(a.remoteStore)}catch(o){const u=ug(o,"Failed to persist write");r.reject(u)}}async function p2(i,t){const r=Rt(i);try{const a=await oj(r.localStore,t);t.targetChanges.forEach(((o,u)=>{const f=r.Au.get(u);f&&(Gt(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.hu=!0:o.modifiedDocuments.size>0?Gt(f.hu,14607):o.removedDocuments.size>0&&(Gt(f.hu,42227),f.hu=!1))})),await cu(r,a,t)}catch(a){await xo(a)}}function _x(i,t,r){const a=Rt(i);if(a.isPrimaryClient&&r===0||!a.isPrimaryClient&&r===1){const o=[];a.Tu.forEach(((u,f)=>{const m=f.view.va(t);m.snapshot&&o.push(m.snapshot)})),(function(f,m){const p=Rt(f);p.onlineState=m;let g=!1;p.queries.forEach(((_,b)=>{for(const S of b.Sa)S.va(m)&&(g=!0)})),g&&cg(p)})(a.eventManager,t),o.length&&a.Pu.H_(o),a.onlineState=t,a.isPrimaryClient&&a.sharedClientState.setOnlineState(t)}}async function Qj(i,t,r){const a=Rt(i);a.sharedClientState.updateQueryState(t,"rejected",r);const o=a.Au.get(t),u=o&&o.key;if(u){let f=new pe(_t.comparator);f=f.insert(u,sn.newNoDocument(u,St.min()));const m=Pt().add(u),p=new Kh(St.min(),new Map,new pe(Ut),f,m);await p2(a,p),a.du=a.du.remove(u),a.Au.delete(t),fg(a)}else await lm(a.localStore,t,!1).then((()=>hm(a,t,r))).catch(xo)}async function Xj(i,t){const r=Rt(i),a=t.batch.batchId;try{const o=await sj(r.localStore,t);g2(r,a,null),m2(r,a),r.sharedClientState.updateMutationState(a,"acknowledged"),await cu(r,o)}catch(o){await xo(o)}}async function Wj(i,t,r){const a=Rt(i);try{const o=await(function(f,m){const p=Rt(f);return p.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let _;return p.mutationQueue.lookupMutationBatch(g,m).next((b=>(Gt(b!==null,37113),_=b.keys(),p.mutationQueue.removeMutationBatch(g,b)))).next((()=>p.mutationQueue.performConsistencyCheck(g))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(g,_,m))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,_))).next((()=>p.localDocuments.getDocuments(g,_)))}))})(a.localStore,t);g2(a,t,r),m2(a,t),a.sharedClientState.updateMutationState(t,"rejected",r),await cu(a,o)}catch(o){await xo(o)}}function m2(i,t){(i.mu.get(t)||[]).forEach((r=>{r.resolve()})),i.mu.delete(t)}function g2(i,t,r){const a=Rt(i);let o=a.Vu[a.currentUser.toKey()];if(o){const u=o.get(t);u&&(r?u.reject(r):u.resolve(),o=o.remove(t)),a.Vu[a.currentUser.toKey()]=o}}function hm(i,t,r=null){i.sharedClientState.removeLocalQueryTarget(t);for(const a of i.Iu.get(t))i.Tu.delete(a),r&&i.Pu.yu(a,r);i.Iu.delete(t),i.isPrimaryClient&&i.Ru.jr(t).forEach((a=>{i.Ru.containsKey(a)||y2(i,a)}))}function y2(i,t){i.Eu.delete(t.path.canonicalString());const r=i.du.get(t);r!==null&&(rg(i.remoteStore,r),i.du=i.du.remove(t),i.Au.delete(r),fg(i))}function Ex(i,t,r){for(const a of r)a instanceof h2?(i.Ru.addReference(a.key,t),Zj(i,a)):a instanceof f2?(dt(hg,"Document no longer in limbo: "+a.key),i.Ru.removeReference(a.key,t),i.Ru.containsKey(a.key)||y2(i,a.key)):Tt(19791,{wu:a})}function Zj(i,t){const r=t.key,a=r.path.canonicalString();i.du.get(r)||i.Eu.has(a)||(dt(hg,"New document in limbo: "+r),i.Eu.add(a),fg(i))}function fg(i){for(;i.Eu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const t=i.Eu.values().next().value;i.Eu.delete(t);const r=new _t(oe.fromString(t)),a=i.fu.next();i.Au.set(a,new Bj(r)),i.du=i.du.insert(r,a),n2(i.remoteStore,new Gr(Ei(Qm(r.path)),a,"TargetPurposeLimboResolution",kh.ce))}}async function cu(i,t,r){const a=Rt(i),o=[],u=[],f=[];a.Tu.isEmpty()||(a.Tu.forEach(((m,p)=>{f.push(a.pu(p,t,r).then((g=>{if((g||r)&&a.isPrimaryClient){const _=g?!g.fromCache:r?.targetChanges.get(p.targetId)?.current;a.sharedClientState.updateQueryState(p.targetId,_?"current":"not-current")}if(g){o.push(g);const _=ng.As(p.targetId,g);u.push(_)}})))})),await Promise.all(f),a.Pu.H_(o),await(async function(p,g){const _=Rt(p);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",(b=>at.forEach(g,(S=>at.forEach(S.Es,(I=>_.persistence.referenceDelegate.addReference(b,S.targetId,I))).next((()=>at.forEach(S.ds,(I=>_.persistence.referenceDelegate.removeReference(b,S.targetId,I)))))))))}catch(b){if(!_o(b))throw b;dt(ig,"Failed to update sequence numbers: "+b)}for(const b of g){const S=b.targetId;if(!b.fromCache){const I=_.Ms.get(S),U=I.snapshotVersion,F=I.withLastLimboFreeSnapshotVersion(U);_.Ms=_.Ms.insert(S,F)}}})(a.localStore,u))}async function Jj(i,t){const r=Rt(i);if(!r.currentUser.isEqual(t)){dt(hg,"User change. New user:",t.toKey());const a=await ZE(r.localStore,t);r.currentUser=t,(function(u,f){u.mu.forEach((m=>{m.forEach((p=>{p.reject(new mt(st.CANCELLED,f))}))})),u.mu.clear()})(r,"'waitForPendingWrites' promise is rejected due to a user change."),r.sharedClientState.handleUserChange(t,a.removedBatchIds,a.addedBatchIds),await cu(r,a.Ls)}}function tI(i,t){const r=Rt(i),a=r.Au.get(t);if(a&&a.hu)return Pt().add(a.key);{let o=Pt();const u=r.Iu.get(t);if(!u)return o;for(const f of u){const m=r.Tu.get(f);o=o.unionWith(m.view.nu)}return o}}function v2(i){const t=Rt(i);return t.remoteStore.remoteSyncer.applyRemoteEvent=p2.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=tI.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Qj.bind(null,t),t.Pu.H_=Uj.bind(null,t.eventManager),t.Pu.yu=Pj.bind(null,t.eventManager),t}function eI(i){const t=Rt(i);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Xj.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Wj.bind(null,t),t}class wh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Hh(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,r){return null}Mu(t,r){return null}vu(t){return aj(this.persistence,new nj,t.initialUser,this.serializer)}Cu(t){return new WE(eg.mi,this.serializer)}Du(t){return new fj}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}wh.provider={build:()=>new wh};class nI extends wh{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,r){Gt(this.persistence.referenceDelegate instanceof bh,46915);const a=this.persistence.referenceDelegate.garbageCollector;return new BC(a,t.asyncQueue,r)}Cu(t){const r=this.cacheSizeBytes!==void 0?yn.withCacheSize(this.cacheSizeBytes):yn.DEFAULT;return new WE((a=>bh.mi(a,r)),this.serializer)}}class fm{async initialize(t,r){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(r),this.remoteStore=this.createRemoteStore(r),this.eventManager=this.createEventManager(r),this.syncEngine=this.createSyncEngine(r,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>_x(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=Jj.bind(null,this.syncEngine),await Oj(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new kj})()}createDatastore(t){const r=Hh(t.databaseInfo.databaseId),a=(function(u){return new yj(u)})(t.databaseInfo);return(function(u,f,m,p){return new Ej(u,f,m,p)})(t.authCredentials,t.appCheckCredentials,a,r)}createRemoteStore(t){return(function(a,o,u,f,m){return new Tj(a,o,u,f,m)})(this.localStore,this.datastore,t.asyncQueue,(r=>_x(this.syncEngine,r,0)),(function(){return px.v()?new px:new dj})())}createSyncEngine(t,r){return(function(o,u,f,m,p,g,_){const b=new $j(o,u,f,m,p,g);return _&&(b.gu=!0),b})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,r)}async terminate(){await(async function(r){const a=Rt(r);dt(Wa,"RemoteStore shutting down."),a.Ea.add(5),await uu(a),a.Aa.shutdown(),a.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}fm.provider={build:()=>new fm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ra="FirestoreClient";class iI{constructor(t,r,a,o,u){this.authCredentials=t,this.appCheckCredentials=r,this.asyncQueue=a,this.databaseInfo=o,this.user=an.UNAUTHENTICATED,this.clientId=$m.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(a,(async f=>{dt(ra,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f})),this.appCheckCredentials.start(a,(f=>(dt(ra,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new er;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(r){const a=ug(r,"Failed to shutdown persistence");t.reject(a)}})),t.promise}}async function Cp(i,t){i.asyncQueue.verifyOperationInProgress(),dt(ra,"Initializing OfflineComponentProvider");const r=i.configuration;await t.initialize(r);let a=r.initialUser;i.setCredentialChangeListener((async o=>{a.isEqual(o)||(await ZE(t.localStore,o),a=o)})),t.persistence.setDatabaseDeletedListener((()=>i.terminate())),i._offlineComponents=t}async function bx(i,t){i.asyncQueue.verifyOperationInProgress();const r=await rI(i);dt(ra,"Initializing OnlineComponentProvider"),await t.initialize(r,i.configuration),i.setCredentialChangeListener((a=>gx(t.remoteStore,a))),i.setAppCheckTokenChangeListener(((a,o)=>gx(t.remoteStore,o))),i._onlineComponents=t}async function rI(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){dt(ra,"Using user provided OfflineComponentProvider");try{await Cp(i,i._uninitializedComponentsProvider._offline)}catch(t){const r=t;if(!(function(o){return o.name==="FirebaseError"?o.code===st.FAILED_PRECONDITION||o.code===st.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(r))throw r;ro("Error using user provided cache. Falling back to memory cache: "+r),await Cp(i,new wh)}}else dt(ra,"Using default OfflineComponentProvider"),await Cp(i,new nI(void 0));return i._offlineComponents}async function _2(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(dt(ra,"Using user provided OnlineComponentProvider"),await bx(i,i._uninitializedComponentsProvider._online)):(dt(ra,"Using default OnlineComponentProvider"),await bx(i,new fm))),i._onlineComponents}function aI(i){return _2(i).then((t=>t.syncEngine))}async function E2(i){const t=await _2(i),r=t.eventManager;return r.onListen=Fj.bind(null,t.syncEngine),r.onUnlisten=qj.bind(null,t.syncEngine),r.onFirstRemoteStoreListen=Kj.bind(null,t.syncEngine),r.onLastRemoteStoreUnlisten=Gj.bind(null,t.syncEngine),r}function sI(i,t,r={}){const a=new er;return i.asyncQueue.enqueueAndForget((async()=>(function(u,f,m,p,g){const _=new x2({next:S=>{_.Nu(),f.enqueueAndForget((()=>u2(u,b)));const I=S.docs.has(m);!I&&S.fromCache?g.reject(new mt(st.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&S.fromCache&&p&&p.source==="server"?g.reject(new mt(st.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(S)},error:S=>g.reject(S)}),b=new c2(Qm(m.path),_,{includeMetadataChanges:!0,qa:!0});return l2(u,b)})(await E2(i),i.asyncQueue,t,r,a))),a.promise}function oI(i,t,r={}){const a=new er;return i.asyncQueue.enqueueAndForget((async()=>(function(u,f,m,p,g){const _=new x2({next:S=>{_.Nu(),f.enqueueAndForget((()=>u2(u,b))),S.fromCache&&p.source==="server"?g.reject(new mt(st.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(S)},error:S=>g.reject(S)}),b=new c2(m,_,{includeMetadataChanges:!0,qa:!0});return l2(u,b)})(await E2(i),i.asyncQueue,t,r,a))),a.promise}/**
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
 */function b2(i){const t={};return i.timeoutSeconds!==void 0&&(t.timeoutSeconds=i.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const T2="firestore.googleapis.com",wx=!0;class Sx{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new mt(st.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=T2,this.ssl=wx}else this.host=t.host,this.ssl=t.ssl??wx;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=XE;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<LC)throw new mt(st.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}b6("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=b2(t.experimentalLongPollingOptions??{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new mt(st.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new mt(st.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new mt(st.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(a,o){return a.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Yh{constructor(t,r,a,o){this._authCredentials=t,this._appCheckCredentials=r,this._databaseId=a,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sx({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new mt(st.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new mt(st.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sx(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(a){if(!a)return new f6;switch(a.type){case"firstParty":return new g6(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new mt(st.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(r){const a=Tx.get(r);a&&(dt("ComponentProvider","Removing Datastore"),Tx.delete(r),a.terminate())})(this),Promise.resolve()}}function lI(i,t,r,a={}){i=sr(i,Yh);const o=Lm(t),u=i._getSettings(),f={...u,emulatorOptions:i._getEmulatorOptions()},m=`${t}:${r}`;o&&(L4(`https://${m}`),F4("Firestore",!0)),u.host!==T2&&u.host!==m&&ro("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...u,host:m,ssl:o,emulatorOptions:a};if(!dh(p,f)&&(i._setSettings(p),a.mockUserToken)){let g,_;if(typeof a.mockUserToken=="string")g=a.mockUserToken,_=an.MOCK_USER;else{g=z4(a.mockUserToken,i._app?.options.projectId);const b=a.mockUserToken.sub||a.mockUserToken.user_id;if(!b)throw new mt(st.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new an(b)}i._authCredentials=new d6(new oE(g,_))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(t,r,a){this.converter=r,this._query=a,this.type="query",this.firestore=t}withConverter(t){return new Qh(this.firestore,t,this._query)}}class Ie{constructor(t,r,a){this.converter=r,this._key=a,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ie(this.firestore,t,this._key)}toJSON(){return{type:Ie._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,r,a){if(su(r,Ie._jsonSchema))return new Ie(t,a||null,new _t(oe.fromString(r.referencePath)))}}Ie._jsonSchemaVersion="firestore/documentReference/1.0",Ie._jsonSchema={type:je("string",Ie._jsonSchemaVersion),referencePath:je("string")};class Wr extends Qh{constructor(t,r,a){super(t,r,Qm(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ie(this.firestore,null,new _t(t))}withConverter(t){return new Wr(this.firestore,t,this._path)}}function uI(i,t,...r){if(i=Zr(i),lE("collection","path",t),i instanceof Yh){const a=oe.fromString(t,...r);return Lv(a),new Wr(i,null,a)}{if(!(i instanceof Ie||i instanceof Wr))throw new mt(st.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=i._path.child(oe.fromString(t,...r));return Lv(a),new Wr(i.firestore,null,a)}}function Fl(i,t,...r){if(i=Zr(i),arguments.length===1&&(t=$m.newId()),lE("doc","path",t),i instanceof Yh){const a=oe.fromString(t,...r);return Pv(a),new Ie(i,null,new _t(a))}{if(!(i instanceof Ie||i instanceof Wr))throw new mt(st.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=i._path.child(oe.fromString(t,...r));return Pv(a),new Ie(i.firestore,i instanceof Wr?i.converter:null,new _t(a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ax="AsyncQueue";class Rx{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new t2(this,"async_queue_retry"),this._c=()=>{const a=Rp();a&&dt(Ax,"Visibility state changed to "+a.visibilityState),this.M_.w_()},this.ac=t;const r=Rp();r&&typeof r.addEventListener=="function"&&r.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const r=Rp();r&&typeof r.removeEventListener=="function"&&r.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const r=new er;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(r.resolve,r.reject),r.promise))).then((()=>r.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!_o(t))throw t;dt(Ax,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const r=this.ac.then((()=>(this.rc=!0,t().catch((a=>{throw this.nc=a,this.rc=!1,ar("INTERNAL UNHANDLED ERROR: ",Cx(a)),a})).then((a=>(this.rc=!1,a))))));return this.ac=r,r}enqueueAfterDelay(t,r,a){this.uc(),this.oc.indexOf(t)>-1&&(r=0);const o=lg.createAndSchedule(this,t,r,a,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&Tt(47125,{Pc:Cx(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const r of this.tc)if(r.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((r,a)=>r.targetTimeMs-a.targetTimeMs));for(const r of this.tc)if(r.skipDelay(),t!=="all"&&r.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const r=this.tc.indexOf(t);this.tc.splice(r,1)}}function Cx(i){let t=i.message||"";return i.stack&&(t=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),t}class hu extends Yh{constructor(t,r,a,o){super(t,r,a,o),this.type="firestore",this._queue=new Rx,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Rx(t),this._firestoreClient=void 0,await t}}}function cI(i,t){const r=typeof i=="object"?i:JR(),a=typeof i=="string"?i:gh,o=YR(r,"firestore").getImmediate({identifier:a});if(!o._initialized){const u=U4("firestore");u&&lI(o,...u)}return o}function dg(i){if(i._terminated)throw new mt(st.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||hI(i),i._firestoreClient}function hI(i){const t=i._freezeSettings(),r=(function(o,u,f,m){return new M6(o,u,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,b2(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)})(i._databaseId,i._app?.options.appId||"",i._persistenceKey,t);i._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(i._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),i._firestoreClient=new iI(i._authCredentials,i._appCheckCredentials,i._queue,r,i._componentsProvider&&(function(o){const u=o?._online.build();return{_offline:o?._offline.build(u),_online:u}})(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t){this._byteString=t}static fromBase64String(t){try{return new $n(Ze.fromBase64String(t))}catch(r){throw new mt(st.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+r)}}static fromUint8Array(t){return new $n(Ze.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:$n._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(su(t,$n._jsonSchema))return $n.fromBase64String(t.bytes)}}$n._jsonSchemaVersion="firestore/bytes/1.0",$n._jsonSchema={type:je("string",$n._jsonSchemaVersion),bytes:je("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class wi{constructor(t,r){if(!isFinite(t)||t<-90||t>90)throw new mt(st.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(r)||r<-180||r>180)throw new mt(st.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+r);this._lat=t,this._long=r}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Ut(this._lat,t._lat)||Ut(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:wi._jsonSchemaVersion}}static fromJSON(t){if(su(t,wi._jsonSchema))return new wi(t.latitude,t.longitude)}}wi._jsonSchemaVersion="firestore/geoPoint/1.0",wi._jsonSchema={type:je("string",wi._jsonSchemaVersion),latitude:je("number"),longitude:je("number")};/**
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
 */class Si{constructor(t){this._values=(t||[]).map((r=>r))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(a,o){if(a.length!==o.length)return!1;for(let u=0;u<a.length;++u)if(a[u]!==o[u])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Si._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(su(t,Si._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((r=>typeof r=="number")))return new Si(t.vectorValues);throw new mt(st.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Si._jsonSchemaVersion="firestore/vectorValue/1.0",Si._jsonSchema={type:je("string",Si._jsonSchemaVersion),vectorValues:je("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI=/^__.*__$/;class dI{constructor(t,r,a){this.data=t,this.fieldMask=r,this.fieldTransforms=a}toMutation(t,r){return this.fieldMask!==null?new sa(t,this.data,this.fieldMask,r,this.fieldTransforms):new ou(t,this.data,r,this.fieldTransforms)}}class w2{constructor(t,r,a){this.data=t,this.fieldMask=r,this.fieldTransforms=a}toMutation(t,r){return new sa(t,this.data,this.fieldMask,r,this.fieldTransforms)}}function S2(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Tt(40011,{Ac:i})}}class pg{constructor(t,r,a,o,u,f){this.settings=t,this.databaseId=r,this.serializer=a,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new pg({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const r=this.path?.child(t),a=this.Vc({path:r,fc:!1});return a.gc(t),a}yc(t){const r=this.path?.child(t),a=this.Vc({path:r,fc:!1});return a.Rc(),a}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return Sh(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((r=>t.isPrefixOf(r)))!==void 0||this.fieldTransforms.find((r=>t.isPrefixOf(r.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(S2(this.Ac)&&fI.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class pI{constructor(t,r,a){this.databaseId=t,this.ignoreUndefinedProperties=r,this.serializer=a||Hh(t)}Cc(t,r,a,o=!1){return new pg({Ac:t,methodName:r,Dc:a,path:We.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function A2(i){const t=i._freezeSettings(),r=Hh(i._databaseId);return new pI(i._databaseId,!!t.ignoreUndefinedProperties,r)}function mI(i,t,r,a,o,u={}){const f=i.Cc(u.merge||u.mergeFields?2:0,t,r,o);gg("Data must be an object, but it was:",f,a);const m=R2(a,f);let p,g;if(u.merge)p=new jn(f.fieldMask),g=f.fieldTransforms;else if(u.mergeFields){const _=[];for(const b of u.mergeFields){const S=dm(t,b,r);if(!f.contains(S))throw new mt(st.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);j2(_,S)||_.push(S)}p=new jn(_),g=f.fieldTransforms.filter((b=>p.covers(b.field)))}else p=null,g=f.fieldTransforms;return new dI(new vn(m),p,g)}class Zh extends Wh{_toFieldTransform(t){if(t.Ac!==2)throw t.Ac===1?t.Sc(`${this._methodName}() can only appear at the top level of your update data`):t.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Zh}}class mg extends Wh{constructor(t,r){super(t),this.Fc=r}_toFieldTransform(t){const r=new iu(t.serializer,NE(t.serializer,this.Fc));return new aC(t.path,r)}isEqual(t){return t instanceof mg&&this.Fc===t.Fc}}function gI(i,t,r,a){const o=i.Cc(1,t,r);gg("Data must be an object, but it was:",o,a);const u=[],f=vn.empty();aa(a,((p,g)=>{const _=yg(t,p,r);g=Zr(g);const b=o.yc(_);if(g instanceof Zh)u.push(_);else{const S=Jh(g,b);S!=null&&(u.push(_),f.set(_,S))}}));const m=new jn(u);return new w2(f,m,o.fieldTransforms)}function yI(i,t,r,a,o,u){const f=i.Cc(1,t,r),m=[dm(t,a,r)],p=[o];if(u.length%2!=0)throw new mt(st.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<u.length;S+=2)m.push(dm(t,u[S])),p.push(u[S+1]);const g=[],_=vn.empty();for(let S=m.length-1;S>=0;--S)if(!j2(g,m[S])){const I=m[S];let U=p[S];U=Zr(U);const F=f.yc(I);if(U instanceof Zh)g.push(I);else{const P=Jh(U,F);P!=null&&(g.push(I),_.set(I,P))}}const b=new jn(g);return new w2(_,b,f.fieldTransforms)}function Jh(i,t){if(C2(i=Zr(i)))return gg("Unsupported field value:",t,i),R2(i,t);if(i instanceof Wh)return(function(a,o){if(!S2(o.Ac))throw o.Sc(`${a._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${a._methodName}() is not currently supported inside arrays`);const u=a._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(i,t),null;if(i===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),i instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(a,o){const u=[];let f=0;for(const m of a){let p=Jh(m,o.wc(f));p==null&&(p={nullValue:"NULL_VALUE"}),u.push(p),f++}return{arrayValue:{values:u}}})(i,t)}return(function(a,o){if((a=Zr(a))===null)return{nullValue:"NULL_VALUE"};if(typeof a=="number")return NE(o.serializer,a);if(typeof a=="boolean")return{booleanValue:a};if(typeof a=="string")return{stringValue:a};if(a instanceof Date){const u=le.fromDate(a);return{timestampValue:Eh(o.serializer,u)}}if(a instanceof le){const u=new le(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:Eh(o.serializer,u)}}if(a instanceof wi)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof $n)return{bytesValue:FE(o.serializer,a._byteString)};if(a instanceof Ie){const u=o.databaseId,f=a.firestore._databaseId;if(!f.isEqual(u))throw o.Sc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Jm(a.firestore._databaseId||o.databaseId,a._key.path)}}if(a instanceof Si)return(function(f,m){return{mapValue:{fields:{[yE]:{stringValue:vE},[yh]:{arrayValue:{values:f.toArray().map((g=>{if(typeof g!="number")throw m.Sc("VectorValues must only contain numeric values.");return Xm(m.serializer,g)}))}}}}}})(a,o);throw o.Sc(`Unsupported field value: ${Fm(a)}`)})(i,t)}function R2(i,t){const r={};return hE(i)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):aa(i,((a,o)=>{const u=Jh(o,t.mc(a));u!=null&&(r[a]=u)})),{mapValue:{fields:r}}}function C2(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof le||i instanceof wi||i instanceof $n||i instanceof Ie||i instanceof Wh||i instanceof Si)}function gg(i,t,r){if(!C2(r)||!uE(r)){const a=Fm(r);throw a==="an object"?t.Sc(i+" a custom object"):t.Sc(i+" "+a)}}function dm(i,t,r){if((t=Zr(t))instanceof Xh)return t._internalPath;if(typeof t=="string")return yg(i,t);throw Sh("Field path arguments must be of type string or ",i,!1,void 0,r)}const vI=new RegExp("[~\\*/\\[\\]]");function yg(i,t,r){if(t.search(vI)>=0)throw Sh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,r);try{return new Xh(...t.split("."))._internalPath}catch{throw Sh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,r)}}function Sh(i,t,r,a,o){const u=a&&!a.isEmpty(),f=o!==void 0;let m=`Function ${t}() called with invalid data`;r&&(m+=" (via `toFirestore()`)"),m+=". ";let p="";return(u||f)&&(p+=" (found",u&&(p+=` in field ${a}`),f&&(p+=` in document ${o}`),p+=")"),new mt(st.INVALID_ARGUMENT,m+i+p)}function j2(i,t){return i.some((r=>r.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(t,r,a,o,u){this._firestore=t,this._userDataWriter=r,this._key=a,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new Ie(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new xI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const r=this._document.data.field(D2("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r)}}}class xI extends I2{data(){return super.data()}}function D2(i,t){return typeof t=="string"?yg(i,t):t instanceof Xh?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _I(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new mt(st.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class EI{convertValue(t,r="none"){switch(na(t)){case 0:return null;case 1:return t.booleanValue;case 2:return we(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,r);case 5:return t.stringValue;case 6:return this.convertBytes(ea(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,r);case 11:return this.convertObject(t.mapValue,r);case 10:return this.convertVectorValue(t.mapValue);default:throw Tt(62114,{value:t})}}convertObject(t,r){return this.convertObjectMap(t.fields,r)}convertObjectMap(t,r="none"){const a={};return aa(t,((o,u)=>{a[o]=this.convertValue(u,r)})),a}convertVectorValue(t){const r=t.fields?.[yh].arrayValue?.values?.map((a=>we(a.doubleValue)));return new Si(r)}convertGeoPoint(t){return new wi(we(t.latitude),we(t.longitude))}convertArray(t,r){return(t.values||[]).map((a=>this.convertValue(a,r)))}convertServerTimestamp(t,r){switch(r){case"previous":const a=Ph(t);return a==null?null:this.convertValue(a,r);case"estimate":return this.convertTimestamp(Zl(t));default:return null}}convertTimestamp(t){const r=ta(t);return new le(r.seconds,r.nanos)}convertDocumentKey(t,r){const a=oe.fromString(t);Gt(QE(a),9688,{name:t});const o=new Jl(a.get(1),a.get(3)),u=new _t(a.popFirst(5));return o.isEqual(r)||ar(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(i,t,r){let a;return a=i?r&&(r.merge||r.mergeFields)?i.toFirestore(t,r):i.toFirestore(t):t,a}class Vl{constructor(t,r){this.hasPendingWrites=t,this.fromCache=r}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Qa extends I2{constructor(t,r,a,o,u,f){super(t,r,a,o,f),this._firestore=t,this._firestoreImpl=t,this.metadata=u}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const r=new sh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(r,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,r={}){if(this._document){const a=this._document.data.field(D2("DocumentSnapshot.get",t));if(a!==null)return this._userDataWriter.convertValue(a,r.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new mt(st.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,r={};return r.type=Qa._jsonSchemaVersion,r.bundle="",r.bundleSource="DocumentSnapshot",r.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?r:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),r.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),r)}}Qa._jsonSchemaVersion="firestore/documentSnapshot/1.0",Qa._jsonSchema={type:je("string",Qa._jsonSchemaVersion),bundleSource:je("string","DocumentSnapshot"),bundleName:je("string"),bundle:je("string")};class sh extends Qa{data(t={}){return super.data(t)}}class Ws{constructor(t,r,a,o){this._firestore=t,this._userDataWriter=r,this._snapshot=o,this.metadata=new Vl(o.hasPendingWrites,o.fromCache),this.query=a}get docs(){const t=[];return this.forEach((r=>t.push(r))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,r){this._snapshot.docs.forEach((a=>{t.call(r,new sh(this._firestore,this._userDataWriter,a.key,a,new Vl(this._snapshot.mutatedKeys.has(a.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const r=!!t.includeMetadataChanges;if(r&&this._snapshot.excludesMetadataChanges)throw new mt(st.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===r||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map((m=>{const p=new sh(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Vl(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:p,oldIndex:-1,newIndex:f++}}))}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const p=new sh(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Vl(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let g=-1,_=-1;return m.type!==0&&(g=f.indexOf(m.doc.key),f=f.delete(m.doc.key)),m.type!==1&&(f=f.add(m.doc),_=f.indexOf(m.doc.key)),{type:TI(m.type),doc:p,oldIndex:g,newIndex:_}}))}})(this,r),this._cachedChangesIncludeMetadataChanges=r),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new mt(st.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Ws._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=$m.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const r=[],a=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(r.push(u._document),a.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function TI(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Tt(61501,{type:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(i){i=sr(i,Ie);const t=sr(i.firestore,hu);return sI(dg(t),i._key).then((r=>SI(t,i,r)))}Ws._jsonSchemaVersion="firestore/querySnapshot/1.0",Ws._jsonSchema={type:je("string",Ws._jsonSchemaVersion),bundleSource:je("string","QuerySnapshot"),bundleName:je("string"),bundle:je("string")};class N2 extends EI{constructor(t){super(),this.firestore=t}convertBytes(t){return new $n(t)}convertReference(t){const r=this.convertDocumentKey(t,this.firestore._databaseId);return new Ie(this.firestore,null,r)}}function wI(i){i=sr(i,Qh);const t=sr(i.firestore,hu),r=dg(t),a=new N2(t);return _I(i._query),oI(r,i._query).then((o=>new Ws(t,a,i,o)))}function M2(i,t,r){i=sr(i,Ie);const a=sr(i.firestore,hu),o=bI(i.converter,t,r);return O2(a,[mI(A2(a),"setDoc",i._key,o,i.converter!==null,r).toMutation(i._key,bi.none())])}function Ah(i,t,r,...a){i=sr(i,Ie);const o=sr(i.firestore,hu),u=A2(o);let f;return f=typeof(t=Zr(t))=="string"||t instanceof Xh?yI(u,"updateDoc",i._key,t,r,a):gI(u,"updateDoc",i._key,t),O2(o,[f.toMutation(i._key,bi.exists(!0))])}function O2(i,t){return(function(a,o){const u=new er;return a.asyncQueue.enqueueAndForget((async()=>Yj(await aI(a),o,u))),u.promise})(dg(i),t)}function SI(i,t,r){const a=r.docs.get(t._key),o=new N2(i);return new Qa(i,o,t._key,a,new Vl(r.hasPendingWrites,r.fromCache),t.converter)}function Rh(i){return new mg("increment",i)}(function(t,r=!0){(function(o){vo=o})(ZR),ph(new Yl("firestore",((a,{instanceIdentifier:o,options:u})=>{const f=a.getProvider("app").getImmediate(),m=new hu(new p6(a.getProvider("auth-internal")),new y6(f,a.getProvider("app-check-internal")),(function(g,_){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new mt(st.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Jl(g.options.projectId,_)})(f,o),f);return u={useFetchStreams:r,...u},m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),Qs(Ov,Vv,t),Qs(Ov,Vv,"esm2020")})();const AI={apiKey:"AIzaSyAEFzPwTADLzuxWuyk889Jz1cHPsEgLOkQ",authDomain:"tu2025grad.firebaseapp.com",projectId:"tu2025grad",storageBucket:"tu2025grad.firebasestorage.app",messagingSenderId:"553768466639",appId:"1:553768466639:web:7c16f5d6432da7ebc05fba"},RI=jv().length?jv()[0]:W_(AI),Zs=cI(RI),CI=A.div`
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
  z-index: ${i=>i.$z||3};
  margin-left: ${i=>i.$ml?"-12px":"0"};
  @media (max-width: 640px) {
    width: 12px;
    height: 12px;
    margin-left: ${i=>i.$ml?"-8px":"0"};  
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
  background-image: url(${i=>i.src});
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
`;function vg({titleKor:i,titleEng:t,nameKor:r,view:a,like:o,href:u,src:f,profileImgs:m,docId:p,collection:g="works"}){const[_,b]=H.useState(typeof o=="number"?o:0),[S,I]=H.useState(typeof a=="number"?a:0);H.useEffect(()=>{let Z=!0;return(async()=>{if(p!=null)try{const lt=Fl(Zs,g,String(p)),J=await Kl(lt);if(!Z)return;if(J.exists()){const ot=J.data();b(typeof ot.like=="number"?ot.like:0),I(typeof ot.view=="number"?ot.view:0)}}catch(lt){console.error("ProjectCard Firestore read error:",lt)}})(),()=>{Z=!1}},[p,g]);const U=Z=>{const lt=Z.currentTarget.querySelector(".card-hover");lt&&(lt.style.opacity=1)},F=Z=>{const lt=Z.currentTarget.querySelector(".card-hover");lt&&(lt.style.opacity=0)},P="/TU2025gradulate/",X=/^https?:\/\//i.test(u),Q=v.jsxs(v.Fragment,{children:[v.jsx(CI,{children:v.jsxs(jI,{onMouseEnter:U,onMouseLeave:F,children:[v.jsx(DI,{className:"card-hover",children:v.jsxs(NI,{children:[v.jsx(OI,{children:i}),v.jsx(MI,{children:t})]})}),v.jsx(II,{src:f,alt:"Project"})]})}),v.jsxs(VI,{children:[v.jsxs(kI,{children:[v.jsx(PI,{children:m.map((Z,lt)=>v.jsx(LI,{src:Z,alt:`Profile${lt+1}`,$z:3-lt,$ml:lt>0},lt))}),v.jsx(UI,{children:r})]}),v.jsxs(zI,{children:[v.jsxs(Ix,{children:[v.jsx(Dx,{src:`${P}icons/likeIcon.svg`}),v.jsx(Nx,{children:_})]}),v.jsxs(Ix,{children:[v.jsx(Dx,{src:`${P}icons/viewIcon.svg`}),v.jsx(Nx,{children:S})]})]})]})]});return X?v.jsx(jx,{as:"a",href:u,style:{textDecoration:"none"},children:Q}):v.jsx(jx,{as:mo,to:u.startsWith("/")?u:`/${u}`,style:{textDecoration:"none"},children:Q})}vg.propTypes={titleKor:W.string.isRequired,titleEng:W.string.isRequired,nameKor:W.string.isRequired,view:W.number,like:W.number,src:W.string.isRequired,href:W.string.isRequired,profileImgs:W.arrayOf(W.string).isRequired,docId:W.oneOfType([W.string,W.number]),collection:W.string};vg.defaultProps={titleKor:"프로젝트 제목",titleEng:"Project Title",nameKor:"Author Name",view:0,like:0,collection:"works"};const Mx=40;function V2(i){if(!i)return i;const t="/TU2025gradulate/";if(/^https?:\/\//i.test(i))return i;const r=i.replace(/^\.\.\//,"").replace(/^\//,"");return t+r}const BI=A.div`
  position: relative; background: #fff;
`,$I=A.div`
  padding-left: ${Mx}px; padding-right: ${Mx}px; display: flex; flex-direction: column;
  @media (max-width: 640px) {
    padding-left: 16px;
    padding-right: 16px;  
 }
`;function FI({children:i}){return v.jsx(BI,{children:v.jsx($I,{children:i})})}const KI=A.div`
  position: relative;
  min-height: calc(100vh - 200px);
`,HI=A.div`
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
`,qI=A.div`
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
`,Ox=Gl,k2=Um,GI={"All Projects":null,"AI & Robot":"c0","Edu & Kids":"c1","Health Care":"c2","IT & Tech":"c3",Living:"c4",Mobility:"c5"};function pm(i){return i.members.map(t=>{const r=k2.find(a=>a.num===t);return r?r.nameKor:""}).filter(Boolean).join(", ")}function YI(i){return i.members.map(t=>{const r=k2.find(a=>a.num===t);return r?V2(r.imgUrl):""}).filter(Boolean)}function QI({list:i}){const t={c0:"A",c1:"E",c2:"H",c3:"I",c4:"L",c5:"M"};return v.jsx(HI,{children:i.map((r,a)=>{const o=pm(r),u=YI(r),f=String(r.projectNum+1).padStart(3,"0"),p=`${t[r.category]||"A"}${f}`,g=r.projectNum??r.num;return v.jsx(vg,{titleKor:r.titleKor,titleEng:r.titleEng,src:V2(`/projects/${r.projectNum}/thumb.jpg`),nameKor:o,profileImgs:u,docId:g,href:`/work/${p}`},a)})})}function XI(){const[i,t]=kt.useState("All Projects"),[r,a]=kt.useState("이름순"),[o,u]=kt.useState({});kt.useEffect(()=>{let p=!0;return(async()=>{try{const g=await wI(uI(Zs,"works"));if(!p)return;const _={};g.forEach(b=>{const S=b.data()||{};_[String(b.id)]={like:typeof S.like=="number"?S.like:0,view:typeof S.view=="number"?S.view:0}}),u(_)}catch(g){console.error("Failed to load works stats:",g)}})(),()=>{p=!1}},[]);const f=kt.useMemo(()=>{const p=GI[i]||null;return p?Ox.filter(g=>g.category===p):Ox},[i]),m=kt.useMemo(()=>{const p=[...f];switch(r){case"이름순":p.sort((g,_)=>pm(g).localeCompare(pm(_),"ko"));break;case"좋아요순":p.sort((g,_)=>{const b=String(g.projectNum??g.num),S=String(_.projectNum??_.num),I=o[b]?.like??0;return(o[S]?.like??0)-I});break;case"조회수순":p.sort((g,_)=>{const b=String(g.projectNum??g.num),S=String(_.projectNum??_.num),I=o[b]?.view??0;return(o[S]?.view??0)-I});break;case"팀작우선":p.sort((g,_)=>(_.members.length>1)-(g.members.length>1));break;case"개인작우선":p.sort((g,_)=>(g.members.length>1)-(_.members.length>1));break}return p},[f,r,o]);return v.jsxs(KI,{children:[v.jsx(qI,{children:"Projects"}),v.jsx($_,{type:"project",onCategoryChange:t,onSortChange:a,sortLabel:r}),v.jsx(FI,{children:v.jsx(QI,{list:m})})]})}const WI=A.div(({height:i,from:t,to:r,position:a,z:o})=>({position:"absolute",left:0,right:0,[a]:-1,height:i,pointerEvents:"none",zIndex:o??0,background:`linear-gradient(180deg, ${t} 0%, ${r} 100%)`}));function xg({position:i="bottom",from:t,to:r,height:a=240,z:o=0,style:u}){return v.jsx(WI,{position:i,from:t,to:r,height:a,z:o,style:u})}const nr={heroToWhite:{from:"rgba(18,18,18,0)",to:"#FFFFFF",h:240},whiteToBlack:{from:"rgba(255,255,255,0)",to:"#121212",h:320},blackToBlackSoft:{from:"rgba(18,18,18,0)",to:"#121212",h:180}},ZI=A.section`
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
`,t3=A.div`
  content: ""; position: absolute; inset: 0;
  background: linear-gradient(180deg, #121212 0%, rgba(18,18,18,0) 55%);
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
  height: ${i=>i.$size==="sm"?40:52}px;
  padding: 0 ${i=>i.$size==="sm"?16:24}px;
  border: 1px solid #FFFFFF;
  color: #FFFFFF;
  background: transparent;
  font-family: ${p3};
  font-weight: 700;
  font-size: ${i=>i.$size==="sm"?13:14}px;
  letter-spacing: 0.2px;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  width: ${i=>i.$full?"100%":"auto"};
  transition: background .15s ease, color .15s ease, border-color .15s ease;
`,g3=A.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-left: 8px;
  border-top: 1px solid #FFFFFF;
  border-right: 1px solid #FFFFFF;
  transform: rotate(45deg);
`;function tf({as:i="button",href:t,label:r="View More",size:a="md",fullWidth:o=!1,showArrow:u,defaultShowArrow:f=!0,onArrowChange:m,onClick:p,style:g}){const _=typeof u=="boolean",[b,S]=kt.useState(f),I=_?u:b;kt.useCallback(()=>{if(_){m&&m(!u);return}S(F=>{const P=!F;return m&&m(P),P})},[_,m,u]);const U={onClick:p,style:g,"data-arrow-visible":I,"data-toggle-arrow-fn":void 0,$size:a,$full:o,as:i,href:t,type:i==="button"?"button":void 0};return v.jsxs(m3,{...U,target:"_blank",rel:"noopener noreferrer",children:[r,I?v.jsx(g3,{"aria-hidden":!0}):null]})}const y3=A.section`
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
  width: ${i=>i.$w}px;
  height: ${i=>i.$h}px;
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
`;function S3(){const i=[{src:"https://placehold.co/910x512",cap:""},{src:"https://placehold.co/727x445",cap:"뭐"},{src:"https://placehold.co/727x445",cap:"뭐"},{src:"https://placehold.co/727x445",cap:"뭐"},{src:"https://placehold.co/727x445",cap:"뭐"},{src:"https://placehold.co/910x517",cap:""},{src:"https://placehold.co/987x555",cap:""},{src:"https://placehold.co/727x445",cap:"뭐"},{src:"https://placehold.co/727x445",cap:"뭐"}];return v.jsxs(y3,{"aria-label":"Gallery",children:[v.jsx(xg,{position:"top",from:nr.blackToBlackSoft.from,to:nr.blackToBlackSoft.to,height:nr.blackToBlackSoft.h,z:0}),v.jsxs(v3,{children:[v.jsxs(x3,{children:[v.jsx(_3,{src:"https://placehold.co/1840x1000",alt:"featured"}),v.jsx(E3,{"aria-hidden":!0,children:v.jsx(b3,{})})]}),v.jsx(T3,{className:"gallery-desktop"}),v.jsx("div",{className:"gallery-mobile",style:{display:"none"},children:v.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginTop:12},children:i.map((t,r)=>v.jsxs("div",{style:{width:"46vw",height:"46vw",minWidth:140,minHeight:140,maxWidth:"100vw",maxHeight:"100vw",borderRadius:4,overflow:"hidden",background:"#151515",position:"relative",marginBottom:8},children:[v.jsx("img",{src:t.src,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),t.cap&&v.jsx(w3,{children:t.cap})]},r))})}),v.jsx("div",{style:{paddingTop:40,display:"flex",justifyContent:"center"},children:v.jsx(tf,{label:"View More"})})]})]})}const A3=A.section`
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
  transform: translate3d(0, ${i=>i.$y||0}px, 0);
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
  transform: translate3d(0, ${i=>i.$y||0}px, 0);
  opacity: ${i=>i.$opacity??1};
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
  transform: translate3d(0, ${i=>i.$y||0}px, 0);
  opacity: ${i=>i.$opacity??1};
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
  transform: translate3d(0, ${i=>i.$y||0}px, 0);
  opacity: ${i=>i.$opacity??1};
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
  transform: translate3d(0, ${i=>i.$y||0}px, 0);
  opacity: ${i=>i.$opacity??1};
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
  transform: translate3d(0, ${i=>i.$y||0}px, 0);
  opacity: ${i=>i.$opacity??1};
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
`;function B3(){return v.jsxs(v.Fragment,{children:[v.jsx(k3,{className:"expo-works-desktop"}),v.jsx(U3,{children:V3.map(i=>v.jsxs(P3,{children:[v.jsx(L3,{src:i.image,alt:i.titleStrong}),v.jsxs(z3,{children:[v.jsx("div",{style:{fontWeight:700,fontSize:16},children:i.titleStrong}),v.jsxs("div",{style:{fontSize:13,color:"#D9D9D9"},children:[i.artistKr," | ",i.dept]}),v.jsx("div",{style:{fontSize:12,color:"#A1A1A1",marginTop:2},children:i.rightMeta1}),v.jsx("div",{style:{fontSize:12,color:"#A1A1A1"},children:i.rightMeta2})]})]},i.id))})]})}const $3="/TU2025gradulate/",F3=A.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  padding-top: 320px;
  @media (max-width: 640px) {
    padding-top: 160px;
}
`,K3=A.div`
  position: relative; 
  height: auto;
`,H3=A.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  @media (max-width: 640px) {
    gap: 16px;
}
`,q3=A.div`
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
  display: flex; flex-direction: column; align-items: center; gap: 80px; margin-top: 154px;
  @media (max-width: 640px) {
    margin-top: 60px;
    gap: 40px;
}
`,Q3=A.div`
  width: 272px; height: 272px; background: #121212; overflow: hidden; display: flex; align-items: center; justify-content: center;
  @media (max-width: 640px) {
    width: 160px; height: 160px;
}
`;function X3(){return v.jsx(F3,{"aria-labelledby":"insta-title",children:v.jsx(K3,{children:v.jsxs(H3,{children:[v.jsx(q3,{children:v.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#FFFFFF",children:[v.jsx("path",{d:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2A3.2 3.2 0 1 1 12 8a3.2 3.2 0 0 1 0 6.4z"}),v.jsx("circle",{cx:"17.5",cy:"6.5",r:"1.2"}),v.jsx("path",{d:"M17.8 2H6.2A4.2 4.2 0 0 0 2 6.2v11.6A4.2 4.2 0 0 0 6.2 22h11.6A4.2 4.2 0 0 0 22 17.8V6.2A4.2 4.2 0 0 0 17.8 2zm2.6 15.8a2.6 2.6 0 0 1-2.6 2.6H6.2a2.6 2.6 0 0 1-2.6-2.6V6.2A2.6 2.6 0 0 1 6.2 3.6h11.6a2.6 2.6 0 0 1 2.6 2.6v11.6z"})]})}),v.jsx(G3,{id:"insta-title",children:"@tukd_grad"}),v.jsxs(Y3,{children:[v.jsx(Q3,{children:v.jsx("img",{src:`${$3}insta-qr.png`,alt:"Instagram preview"})}),v.jsx(tf,{as:"a",href:"https://www.instagram.com/tukd_grad?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",label:"View Instagram",size:"sm"})]})]})})})}const du=`'Pretendard', system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial, sans-serif`,Ux=350,W3=A.section`
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
`,tD=({children:i})=>v.jsx(Z3,{children:v.jsx(J3,{children:i})}),eD=A.div`
  width: 289px; height: 45px; display: flex; align-items: flex-end;
`,nD=A.div`
  font-family: ${du}; font-size: 20px; font-weight: 700; line-height: 22.4px; color: #FFFFFF;

  @media (max-width: 640px) {
    font-size: 16px;
}
`;function iD({title:i}){return v.jsx(eD,{children:v.jsx(nD,{children:i})})}const rD=A.div`
  border-bottom: ${i=>i.$last?"none":"1px rgba(255,255,255,0.12) solid"};
  display: flex; gap: 20px; align-items: flex-start;
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 20px;
    padding: 0;
    width: 100%;
  }
`,aD=A.div`
  padding-top: 22px; padding-bottom: 40px;
  border-bottom: ${i=>i.$divider?"1px rgba(255,255,255,0.12) solid":"none"};
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
`;function Hr({k:i,children:t,divider:r=!0}){return v.jsxs(aD,{$divider:r,children:[v.jsx(sD,{children:v.jsx(oD,{children:i})}),v.jsx(lD,{children:t})]})}const uD=A.div`
  width: 900px; display: flex; flex-direction: column;
  @media (max-width: 640px) {
    width: 100%;
    padding: 0;
    box-sizing: border-box;
  }
`;function Px({title:i,children:t,last:r=!1}){return v.jsxs(rD,{$last:r,children:[v.jsx(iD,{title:i}),v.jsx(uD,{children:t})]})}const cD=A.div`
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
`,Hc=A(Kt)`
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
`;function mD(){return v.jsx(W3,{"aria-label":"Venue & Access",children:v.jsxs(tD,{children:[v.jsxs(Px,{title:"Venew Details",children:[v.jsx(cD,{children:v.jsx(hD,{children:"잔향 : 기억의 향기"})}),v.jsx(Hr,{k:"Term",children:v.jsx(Kt,{children:"2025. 10. 24. FRI - 10. 26. SUN"})}),v.jsxs(Hr,{k:"Hours",children:[v.jsx(Kt,{children:"10.24.FRI   13:00 ~ 17:30 (OPENING 16:00~)"}),v.jsx(Kt,{children:"10.25.SAT ~ 10.26.SUN    10:00 ~ 17:30"})]}),v.jsxs(Hr,{k:"Schedule",children:[v.jsx(Hc,{children:"10.24.FRI"}),v.jsx(Kt,{children:"13:00    자유관람"}),v.jsx(Kt,{children:"15:00    졸업생 홈커밍 행사"}),v.jsx(Kt,{children:"16:00    개회식"}),v.jsx(Kt,{children:"16:20    졸업작품 우수작 시상"}),v.jsx(Kt,{children:"16:30    자유관람"}),v.jsxs(Hc,{children:[v.jsx("br",{}),"10.25.SAT"]}),v.jsx(Kt,{children:"10:00    자유관람"}),v.jsx(Kt,{children:"13:00    취·창업 커리어 캠프"}),v.jsxs(Hc,{children:[v.jsx("br",{}),"10.26.SUN"]}),v.jsx(Kt,{children:"10:00    자유관람"})]}),v.jsxs(Hr,{k:"Website",divider:!1,children:[v.jsx(Kt,{children:"Hongik Art Center"}),v.jsx(pD,{href:"https://artscenter.hongik.ac.kr/artcenter/index.do",target:"_blank",rel:"noreferrer",children:"https://artscenter.hongik.ac.kr/artcenter/index.do"})]})]}),v.jsxs(Px,{title:"Access",children:[v.jsxs(Hr,{k:"Address",children:[v.jsx(Kt,{children:"Hongik Art Center B2 Gallery"}),v.jsx(Kt,{children:"57, Daehak-ro, Jongno-gu, Seoul"}),v.jsx(dD,{children:"Address in local language"}),v.jsxs(Kt,{children:["홍대 아트센터 지하 2층 전시관",v.jsx("br",{}),"서울시 종로구 대학로 57"]}),v.jsx("div",{style:{marginTop:24},children:v.jsx(tf,{as:"a",href:"https://maps.app.goo.gl/qc99M9bDqyBTcmx79",label:"Map",size:"sm",showArrow:!0})})]}),v.jsxs(Hr,{k:"Parking",children:[v.jsx(Kt,{children:"B3F ~ B6F"}),v.jsxs(Kt,{children:[v.jsx("br",{}),"기본 30분 3,000원 / 이후 20분당 2,000원"]}),v.jsx(Kt,{children:"이용객 주차권 지참 시 50% 할인 및 1시간 무료이용권 제공"}),v.jsx(Hc,{children:"(주차권으로만 정산 가능, 티켓정산 불가)"}),v.jsx(fD,{children:"주차권 배부 장소: B2 갤러리 3, 전시장 입구 인포데스크"})]}),v.jsxs(Hr,{k:"By Subway",children:[v.jsx(Kt,{children:"[1호선 종로5가역]"}),v.jsx(Kt,{children:"2번 출구 방면으로 이동 → 이화사거리 방면으로 약 800m 직진 (도보7분)"}),v.jsxs(Kt,{children:[v.jsx("br",{}),"[4호선 혜화역]"]}),v.jsx(Kt,{children:"3번 출구 방면으로 이동 → 이화사거리 방면으로 약 800m 직진 (도보7분)"}),v.jsx(Kt,{children:"또는 08번 마을버스 탑승 후 이화사거리 앞 하차"})]}),v.jsxs(Hr,{k:"By Bus",divider:!1,children:[v.jsx(Kt,{children:"[이화사거리(01-572) 하차]"}),v.jsx(Kt,{children:"마을버스 종로 08번"}),v.jsxs(Kt,{children:[v.jsx("br",{}),"[현대그룹빌딩(01-218) 하차]"]}),v.jsx(Kt,{children:"102, 107, 108, 109, 162, 301, 7025"}),v.jsxs(Kt,{children:[v.jsx("br",{}),"[이화장(01-223) 하차]"]}),v.jsx(Kt,{children:"109, 273, 601, 2112, 7025"})]})]})]})})}function gD(){const i=[v.jsx(r3,{},"hero"),v.jsx(d3,{},"brand"),v.jsx(S3,{},"gallery"),v.jsx(O3,{},"online"),v.jsx(B3,{},"works"),v.jsx(X3,{},"insta"),v.jsx(mD,{},"venue")];return v.jsx("div",{style:{background:"#121212",minHeight:"100vh"},children:i})}const _g="Pretendard, system-ui",yD=A.div`
  width: ${i=>i.$w}px;
  height: ${i=>i.$h}px;
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
`;function TD({to:i,from:t,message:r}){return v.jsxs(yD,{$w:ef,$h:pu,children:[v.jsx(vD,{}),v.jsx(xD,{}),v.jsx(_D,{children:`To. ${i}`}),v.jsx(ED,{children:r}),v.jsx(bD,{children:`From. ${t}`})]})}const wD=A.div`
  width: ${i=>i.$w}px;
  height: ${i=>i.$h}px;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
`,SD=A.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;function AD({src:i}){return v.jsx(wD,{$w:ef,$h:pu,children:v.jsx(SD,{src:i,alt:"포토 카드"})})}const RD=A.button`
  width: ${i=>i.$w}px;
  height: ${i=>i.$h}px;
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
`;function ND({onClick:i}){return v.jsx(RD,{onClick:i,"aria-label":"방명록 작성",$w:ef,$h:pu,children:v.jsx(CD,{children:v.jsxs(jD,{children:[v.jsx(ID,{}),v.jsx(DD,{})]})})})}const ef=270,pu=337,MD=30,U2=20,OD=210,VD=60,kD=A.div`
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
  width: ${i=>i.$w}px;
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
`,Lx=i=>{const t=[{type:"add",id:"add"},...i],r=[{min:6,max:10},{min:16,max:20},{min:26,max:30}];let a=0;return r.forEach((o,u)=>{if(t.length>o.min+a){const f=Math.min(Math.floor(Math.random()*(o.max-o.min+1))+o.min,t.length)+a;t.splice(f,0,{type:"photo",id:`ph-${Date.now()}-${u}`,src:"https://placehold.co/662x405"}),a++}}),t},$D=i=>{const t=[];for(let r=0;r<i.length;r+=2)t.push([i[r],i[r+1]||null]);return t};function FD({onOpenModal:i,items:t}){const r=H.useRef(null),[a,o]=H.useState({width:0,trackW:0}),[u,f]=H.useState(()=>Lx(t));H.useEffect(()=>{f(Lx(t))},[t]);const m=$D(u);H.useEffect(()=>{const b=r.current;if(!b)return;const S=I=>{Math.abs(I.deltaY)>Math.abs(I.deltaX)&&(b.scrollLeft+=I.deltaY,I.preventDefault())};return b.addEventListener("wheel",S,{passive:!1}),()=>b.removeEventListener("wheel",S)},[]);const p=H.useRef({on:!1,moved:!1,startX:0,startScroll:0}),g=b=>!!b?.closest?.('button, a, input, textarea, select, label, [role="button"], [data-nodrag]');H.useEffect(()=>{const b=r.current;if(!b)return;const S=F=>{F.button===0&&(g(F.target)||(p.current.on=!0,p.current.moved=!1,p.current.startX=F.clientX,p.current.startScroll=b.scrollLeft,b.setPointerCapture?.(F.pointerId),document.body.style.userSelect="none",b.style.cursor="grabbing"))},I=F=>{if(!p.current.on)return;const P=F.clientX-p.current.startX;Math.abs(P)>2&&(p.current.moved=!0),b.scrollLeft=p.current.startScroll-P},U=F=>{p.current.on&&(b.releasePointerCapture?.(F.pointerId),document.body.style.userSelect="",b.style.cursor="grab",p.current.moved&&(F.preventDefault(),F.stopPropagation()),p.current.on=!1)};return b.addEventListener("pointerdown",S),window.addEventListener("pointermove",I),window.addEventListener("pointerup",U),b.addEventListener("pointercancel",U),()=>{b.removeEventListener("pointerdown",S),window.removeEventListener("pointermove",I),window.removeEventListener("pointerup",U),b.removeEventListener("pointercancel",U)}},[]);const _=H.useCallback(()=>{const b=r.current;if(!b)return;const S=b.clientWidth,I=b.scrollWidth,U=b.scrollLeft,P=b.parentElement?.clientWidth||S,X=Math.max(1,I-S),Q=Math.min(1,Math.max(0,U/X)),Z=Math.round(P*Q);o({width:Z,trackW:P})},[]);return H.useEffect(()=>{_();const b=r.current;if(!b)return;const S=()=>requestAnimationFrame(_),I=()=>requestAnimationFrame(_);return b.addEventListener("scroll",S,{passive:!0}),window.addEventListener("resize",I),()=>{b.removeEventListener("scroll",S),window.removeEventListener("resize",I)}},[_]),v.jsxs(v.Fragment,{children:[v.jsx(kD,{children:v.jsx(UD,{children:v.jsx(PD,{$w:a.width})})}),v.jsx(LD,{ref:r,children:v.jsx(zD,{children:m.map((b,S)=>v.jsxs(BD,{children:[v.jsx(zx,{data:b[0],onOpenModal:i}),b[1]?v.jsx(zx,{data:b[1],onOpenModal:i}):v.jsx(P2,{})]},`col-${S}`))})})]})}function zx({data:i,onOpenModal:t}){return i?i.type==="add"?v.jsx(ND,{onClick:t,style:{pointerEvents:"auto"}}):i.type==="photo"?v.jsx(AD,{src:i.src}):v.jsx(TD,{to:i.to,from:i.from,message:i.message}):v.jsx(P2,{})}const KD=A.div`
  position: fixed; inset: 0; z-index: 1000;
  display: grid; place-items: center;
  background: rgba(0,0,0,.45);
`,HD=A.div`
  position: relative; display: inline-flex; align-items: flex-end; gap: 17px;
`,qD=A.div`
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
  background: #FFFFFF; transform: rotate(${i=>i.$deg}deg);
`;function h5({open:i,onClose:t,onSubmit:r,defaultTo:a="",defaultFrom:o=""}){const[u,f]=H.useState(a),[m,p]=H.useState(o),[g,_]=H.useState(""),b=H.useRef(null);if(H.useEffect(()=>{const U=F=>{F.key==="Escape"&&t?.()};return i&&document.addEventListener("keydown",U),()=>document.removeEventListener("keydown",U)},[i,t]),!i)return null;const S=U=>{U.target===b.current&&t?.()},I=()=>{const U={to:(u||"").trim(),from:(m||"").trim(),message:(g||"").trim()};U.message&&r?.(U)};return v.jsx(KD,{ref:b,onMouseDown:S,children:v.jsxs(HD,{onMouseDown:U=>U.stopPropagation(),children:[v.jsx(qD,{children:v.jsxs(GD,{children:[v.jsxs(YD,{children:[v.jsx(QD,{}),v.jsx(XD,{}),v.jsxs(WD,{children:[v.jsx(ZD,{children:"To."}),v.jsx(JD,{value:u,onChange:U=>f(U.target.value),placeholder:"받는 사람"})]}),v.jsx(t5,{children:v.jsx(e5,{placeholder:"내용을 입력해 주세요.",value:g,onChange:U=>_(U.target.value)})}),v.jsxs(n5,{children:[v.jsx(i5,{children:"From."}),v.jsx(r5,{value:m,onChange:U=>p(U.target.value),placeholder:"보내는 사람"})]})]}),v.jsx(a5,{children:v.jsx(s5,{type:"button",onClick:I,"aria-label":"send",children:v.jsx(o5,{})})})]})}),v.jsx(l5,{children:v.jsx(u5,{type:"button",onClick:t,"aria-label":"close",children:v.jsxs(c5,{children:[v.jsx(Bx,{$deg:45}),v.jsx(Bx,{$deg:-45})]})})})]})})}const f5=[{id:"g1",to:"성수민",from:"김예준",message:"전시회에 우연히 들르게 되었는데, 작품 하나하나에서 깊은 고민과 세심함이 느껴졌습니다! 다들 고생많으셨습니다! 축하드려요",type:"text"},{id:"g2",to:"성수민",from:"김예준",message:"메시지 예시 2",type:"text"},{id:"g3",to:"성수민",from:"김예준",message:"메시지 예시 3",type:"text"},{id:"g4",to:"성수민",from:"김예준",message:"메시지 예시 4",type:"text"},{id:"g5",to:"성수민",from:"김예준",message:"메시지 예시 5",type:"text"},{id:"g6",to:"성수민",from:"김예준",message:"메시지 예시 6",type:"text"},{id:"g7",to:"성수민",from:"김예준",message:"메시지 예시 7",type:"text"},{id:"g8",to:"성수민",from:"김예준",message:"메시지 예시 8",type:"text"},{id:"g9",to:"성수민",from:"김예준",message:"메시지 예시 9",type:"text"},{id:"g10",to:"성수민",from:"김예준",message:"메시지 예시 10",type:"text"},{id:"g11",to:"성수민",from:"김예준",message:"메시지 예시 11",type:"text"},{id:"g12",to:"성수민",from:"김예준",message:"메시지 예시 12",type:"text"},{id:"g13",to:"성수민",from:"김예준",message:"메시지 예시 13",type:"text"},{id:"g14",to:"성수민",from:"김예준",message:"메시지 예시 14",type:"text"},{id:"g15",to:"성수민",from:"김예준",message:"메시지 예시 15",type:"text"},{id:"g16",to:"성수민",from:"김예준",message:"메시지 예시 16",type:"text"},{id:"g17",to:"성수민",from:"김예준",message:"메시지 예시 17",type:"text"},{id:"g18",to:"성수민",from:"김예준",message:"메시지 예시 18",type:"text"},{id:"g19",to:"성수민",from:"김예준",message:"메시지 예시 19",type:"text"},{id:"g20",to:"성수민",from:"김예준",message:"메시지 예시 20",type:"text"},{id:"g21",to:"성수민",from:"김예준",message:"메시지 예시 21",type:"text"},{id:"g22",to:"성수민",from:"김예준",message:"메시지 예시 22",type:"text"},{id:"g23",to:"성수민",from:"김예준",message:"메시지 예시 23",type:"text"},{id:"g24",to:"성수민",from:"김예준",message:"메시지 예시 24",type:"text"},{id:"g25",to:"성수민",from:"김예준",message:"메시지 예시 25",type:"text"}],d5='Pretendard, system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial, sans-serif',p5=A.div`
  background: #121212; min-height: 100vh;
`,m5=A.main`
  padding: 80px 40px 120px 40px;
`,g5=A.h1`
  font-family: ${d5}; font-weight: 700; font-size: 32px; color: #FFFFFF; text-align: center; margin: 20px 0 40px;
`,y5=A.section`
  display: flex; justify-content: center;
`,v5=A.div`
  width: 100%;
`;function x5(){const[i,t]=kt.useState(!1),[r,a]=kt.useState(f5),o=({to:f,from:m,message:p})=>{const g={id:`g-${Date.now()}`,to:f,from:m,message:p,type:"text"};a(_=>[g,..._]),t(!1)};return v.jsxs(p5,{children:[v.jsxs(m5,{children:[v.jsx(g5,{children:"Guest Book"}),v.jsx(y5,{children:v.jsxs(v5,{className:"gb-wrap",children:[v.jsx("style",{children:`
    .gb-wrap *::-webkit-scrollbar { display: none; }
    .gb-wrap * { scrollbar-width: none; -ms-overflow-style: none; }
    .gb-wrap article img { width: 100% !important; height: 100% !important; object-fit: cover !important; display: block !important; }
  `}),v.jsx(FD,{onOpenModal:()=>t(!0),items:r})]})})]}),v.jsx(h5,{open:i,onClose:()=>t(!1),onSubmit:o})]})}const mm="/TU2025gradulate/",_5=A.div`
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
  transform: translateX(${i=>i.$open?"0":"-350px"});
  transition: transform 500ms ease-out;
  pointer-events: ${i=>i.$open?"auto":"none"};
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
  background-image: ${({$src:i})=>`url("${i}")`};
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
  background-image: ${({$src:i})=>`url("${i}")`};
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
`;function gm({titleKor:i,titleEng:t,context:r,isOpen:a=!0,onClose:o,src:u,docId:f,collection:m="works"}){const[p,g]=H.useState(0),[_,b]=H.useState(!1);H.useEffect(()=>{let U=!0;return(async()=>{if(f!=null)try{const F=Fl(Zs,m,String(f)),P=await Kl(F);if(!U)return;if(P.exists()){const X=P.data();g(typeof X.like=="number"?X.like:0)}else g(0)}catch(F){console.error("Firestore getDoc error:",F),U&&g(0)}})(),()=>{U=!1}},[f,m]);const S=async()=>{try{const U=Fl(Zs,m,String(f)),F=await Kl(U);if(F.exists()){const P=F.data();g(typeof P.like=="number"?P.like:0)}}catch(U){console.error("Firestore refresh error:",U)}},I=async()=>{if(_)return;if(f==null){console.warn("handleLike called without a valid docId");return}b(!0);const U=Fl(Zs,m,String(f));try{await Ah(U,{like:Rh(1)}),g(F=>F+1),await S()}catch(F){if(F.code==="not-found"||/No document/i.test(String(F)))try{(await Kl(U)).exists()?await Ah(U,{like:Rh(1)}):await M2(U,{like:1},{merge:!0}),await S()}catch(P){console.error("Firestore like fallback error:",P)}else console.error("Firestore like error:",F)}finally{b(!1)}};return v.jsx(_5,{$open:!!a,children:v.jsxs(E5,{children:[v.jsxs(b5,{children:[v.jsx(T5,{onClick:()=>{typeof o=="function"&&o()},children:v.jsx("img",{src:`${mm}icons/closeIcon.svg`,alt:"Close Icon"})}),v.jsxs(w5,{children:[v.jsx(S5,{children:i}),v.jsx(A5,{children:r})]}),v.jsx(R5,{$src:u})]}),v.jsxs(C5,{children:[v.jsx(j5,{onClick:I,"aria-disabled":_,title:_?"처리 중":"좋아요",children:v.jsxs(I5,{children:[v.jsx(D5,{$src:`${mm}icons/likeIcon(white).svg`,"aria-label":"Like icon"}),v.jsx(N5,{children:p})]})}),v.jsxs(M5,{onClick:()=>{const F=Math.max(document.documentElement?.scrollHeight||0,document.body?.scrollHeight||0)-window.innerHeight,X=Math.max(0,F-269);window.scrollTo({top:X,behavior:"smooth"})},children:[v.jsx(O5,{children:"Designer Info"}),v.jsx(V5,{})]})]})]})})}gm.propTypes={titleKor:W.string.isRequired,titleEng:W.string.isRequired,context:W.string.isRequired,isOpen:W.bool,onClose:W.func,docId:W.oneOfType([W.string,W.number]).isRequired,collection:W.string};const k5=A.div`
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
`,H5=A.div`
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
`;function Eg({nameKor:i,nameEng:t,part:r,sns:a,eMail:o,imgUrl:u,imgAlt:f}){return v.jsxs(k5,{children:[v.jsx(U5,{children:v.jsx(P5,{src:u,alt:f})}),v.jsxs(L5,{children:[v.jsxs(z5,{children:[v.jsx(B5,{children:i}),v.jsx($5,{children:t})]}),v.jsxs(F5,{children:[v.jsxs(K5,{children:[v.jsx(jp,{children:"Part"}),v.jsx(jp,{children:"SNS"}),v.jsx(jp,{children:"E-mail"})]}),v.jsxs(H5,{children:[v.jsx(Ip,{children:r}),v.jsx(Ip,{children:a}),v.jsx(Ip,{children:o})]})]})]})]})}Eg.propTypes={nameKor:W.string.isRequired,nameEng:W.string.isRequired,part:W.string,sns:W.string,eMail:W.string,imgUrl:W.string.isRequired,imgAlt:W.string.isRequired};Eg.defaultProps={sns:"N/A",eMail:"N/A"};const q5=A.div`
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
`;function $x({designers:i}){return v.jsxs(q5,{children:[v.jsx(Y5,{children:"Designer"}),v.jsx(G5,{children:i.map((t,r)=>v.jsx(Eg,{nameKor:t.nameKor,nameEn:t.nameEn,part:t.role,sns:t.sns,eMail:t.eMail,imgUrl:t.imgUrl},r))})]})}const Q5=A.div`
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
`;function Z5({videoId:i}){return v.jsx(Q5,{children:v.jsx(X5,{children:v.jsx(W5,{src:"https://player.vimeo.com/video/1126266309?h=1f3e4f1f6e&title=0&byline=0&portrait=0",frameBorder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,title:"Embedded Vimeo"})})})}const J5=A.div`
    display: ${i=>i.$visible?"flex":"none"};
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
    transform: translateX(${i=>i.$active?"0":"-100px"});
    transition: transform 500ms ease;
    @media (max-width: 640px) {
        display: none;
}
`,tN=A.div`
    display: flex;
    width: 40px;
    height: 40px;
`;function eN({isOpen:i=!1,onClick:t}){const[r,a]=H.useState(!1);return H.useEffect(()=>{let o;return i?a(!1):(a(!1),o=setTimeout(()=>{a(!0)},500)),()=>clearTimeout(o)},[i]),v.jsx(J5,{$visible:!i,$active:r,onClick:()=>{typeof t=="function"&&t()},children:v.jsx(tN,{children:v.jsx("img",{src:"/icons/infoOpenIcon.svg",alt:"작품 정보 열기"})})})}const Fx=40;function qc(i){if(!i)return i;const t="/TU2025gradulate/";if(/^https?:\/\//i.test(i))return i;const r=String(i).replace(/^\.\.\//,"").replace(/^\//,"");return t+r}const nN=A.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
  image-rendering: -webkit-optimize-contrast;
  @media (max-width: 640px) {
    min-width: 100vw;
}
`,Dp=i=>v.jsx(nN,{loading:"lazy",...i}),iN=A.div`
  display: flex;
  position: relative;
  background: #fff;
  width: 100%;
  @media (max-width: 640px) {
    flex-direction: column;
}
`,rN=A.div`
  padding-right: ${Fx}px;
  padding-left: ${i=>i.$isInfoOpen?0:Fx}px;
  flex: 1 1 auto;
  width: auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* transition: all 500ms ease; */
  @media (max-width: 640px) {
    padding: 0
}
`,aN=A.div`
  display: ${i=>i.$visible?"flex":"none"};
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
`,sN={A:"c0",E:"c1",H:"c2",I:"c3",L:"c4",M:"c5"};function oN(){const{pid:i}=GT(),t=(i||"").toUpperCase().match(/^([A-Z])(\d{3})$/),[r,a]=H.useState(!0),[o,u]=H.useState(!0),f=()=>{a(!1),setTimeout(()=>{u(!1)},500)},m=()=>{u(!0),setTimeout(()=>{a(!0)},0)};let p=null;if(t){const[,X,Q]=t,Z=sN[X]||null,lt=Math.max(0,parseInt(Q,10)-1);p=Gl.find(J=>J.projectNum===lt&&(!Z||J.category===Z)),p||(p=Gl.find(J=>J.projectNum==lt))}if(!p)return v.jsx(Kx,{children:v.jsxs(PageContainer,{children:[v.jsx(gm,{titleKor:"작품 제목(한글)",titleEng:"Work Title (English)",context:"이곳은 작품 설명이 들어가는 영역입니다. 작품에 대한 상세한 설명이나 배경, 제작 과정 등을 기술할 수 있습니다. 이 텍스트는 예시로 작성된 내용이며, 실제 작품 설명으로 대체되어야 합니다.",isOpen:r,onClose:()=>a(!1),docId:0}),v.jsx(Dp,{src:"https://placehold.co/1530x4000",alt:"featured"}),v.jsx($x,{children:"  "})]})});const g=(p.members||[]).map(X=>{const Q=Um.find(Z=>Z.num===X);return Q?{nameKor:Q.nameKor,nameEng:Q.nameEng,role:Q.role||"Designer",sns:Q.sns||"-",eMail:Q.eMail||"",imgUrl:qc(Q.imgUrl||"/김예준.jpg")}:null}).filter(Boolean),b={c0:"A",c1:"E",c2:"H",c3:"I",c4:"L",c5:"M"}[p.category]||"A",S=p.projectNum??p.num,I=String(S).padStart(3,"0"),U=`/projects/${S}`,F=Number(p.galleryCount||0),P=Array.from({length:F},(X,Q)=>qc(`${U}/gallery/${Q}.jpg`));return H.useEffect(()=>{const X=p?.projectNum??p?.num;if(X==null)return;const Z=Fl(Zs,"works",String(X));(async()=>{try{await Ah(Z,{view:Rh(1)})}catch(lt){if(lt.code==="not-found"||/No document/i.test(String(lt)))try{(await Kl(Z)).exists()?await Ah(Z,{view:Rh(1)}):await M2(Z,{view:1},{merge:!0})}catch(J){console.error("Firestore view fallback error:",J)}else console.error("Firestore view error:",lt)}})()},[p?.projectNum,p?.num]),v.jsx(Kx,{children:v.jsxs(iN,{children:[v.jsx(eN,{isOpen:r,onClick:m}),v.jsx(aN,{$visible:o,children:v.jsx(gm,{titleKor:p.titleKor,titleEng:p.titleEng,context:p.description||"null",isOpen:r,onClose:f,src:qc(`/projects/${S}/thumb.jpg`),docId:S})}),v.jsxs(rN,{$isInfoOpen:r,children:[P.length>0?P.map((X,Q)=>v.jsx(Dp,{src:X,alt:`project-${b}${I}-img-${Q+1}`},Q)):v.jsx(Dp,{src:qc("/thumbnailExample.png"),alt:`project-${b}${I}-placeholder`}),v.jsx(Z5,{videoId:p.videoId}),v.jsx($x,{designers:g})]})]})})}var Np={exports:{}},Il={},Mp={exports:{}},Op={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hx;function lN(){return Hx||(Hx=1,(function(i){function t(tt,ft){var yt=tt.length;tt.push(ft);t:for(;0<yt;){var Ct=yt-1>>>1,M=tt[Ct];if(0<o(M,ft))tt[Ct]=ft,tt[yt]=M,yt=Ct;else break t}}function r(tt){return tt.length===0?null:tt[0]}function a(tt){if(tt.length===0)return null;var ft=tt[0],yt=tt.pop();if(yt!==ft){tt[0]=yt;t:for(var Ct=0,M=tt.length,rt=M>>>1;Ct<rt;){var ct=2*(Ct+1)-1,ht=tt[ct],gt=ct+1,jt=tt[gt];if(0>o(ht,yt))gt<M&&0>o(jt,ht)?(tt[Ct]=jt,tt[gt]=yt,Ct=gt):(tt[Ct]=ht,tt[ct]=yt,Ct=ct);else if(gt<M&&0>o(jt,yt))tt[Ct]=jt,tt[gt]=yt,Ct=gt;else break t}}return ft}function o(tt,ft){var yt=tt.sortIndex-ft.sortIndex;return yt!==0?yt:tt.id-ft.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();i.unstable_now=function(){return f.now()-m}}var p=[],g=[],_=1,b=null,S=3,I=!1,U=!1,F=!1,P=!1,X=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;function lt(tt){for(var ft=r(g);ft!==null;){if(ft.callback===null)a(g);else if(ft.startTime<=tt)a(g),ft.sortIndex=ft.expirationTime,t(p,ft);else break;ft=r(g)}}function J(tt){if(F=!1,lt(tt),!U)if(r(p)!==null)U=!0,ot||(ot=!0,z());else{var ft=r(g);ft!==null&&ne(J,ft.startTime-tt)}}var ot=!1,j=-1,R=5,C=-1;function k(){return P?!0:!(i.unstable_now()-C<R)}function O(){if(P=!1,ot){var tt=i.unstable_now();C=tt;var ft=!0;try{t:{U=!1,F&&(F=!1,Q(j),j=-1),I=!0;var yt=S;try{e:{for(lt(tt),b=r(p);b!==null&&!(b.expirationTime>tt&&k());){var Ct=b.callback;if(typeof Ct=="function"){b.callback=null,S=b.priorityLevel;var M=Ct(b.expirationTime<=tt);if(tt=i.unstable_now(),typeof M=="function"){b.callback=M,lt(tt),ft=!0;break e}b===r(p)&&a(p),lt(tt)}else a(p);b=r(p)}if(b!==null)ft=!0;else{var rt=r(g);rt!==null&&ne(J,rt.startTime-tt),ft=!1}}break t}finally{b=null,S=yt,I=!1}ft=void 0}}finally{ft?z():ot=!1}}}var z;if(typeof Z=="function")z=function(){Z(O)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,ue=N.port2;N.port1.onmessage=O,z=function(){ue.postMessage(null)}}else z=function(){X(O,0)};function ne(tt,ft){j=X(function(){tt(i.unstable_now())},ft)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(tt){tt.callback=null},i.unstable_forceFrameRate=function(tt){0>tt||125<tt?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<tt?Math.floor(1e3/tt):5},i.unstable_getCurrentPriorityLevel=function(){return S},i.unstable_next=function(tt){switch(S){case 1:case 2:case 3:var ft=3;break;default:ft=S}var yt=S;S=ft;try{return tt()}finally{S=yt}},i.unstable_requestPaint=function(){P=!0},i.unstable_runWithPriority=function(tt,ft){switch(tt){case 1:case 2:case 3:case 4:case 5:break;default:tt=3}var yt=S;S=tt;try{return ft()}finally{S=yt}},i.unstable_scheduleCallback=function(tt,ft,yt){var Ct=i.unstable_now();switch(typeof yt=="object"&&yt!==null?(yt=yt.delay,yt=typeof yt=="number"&&0<yt?Ct+yt:Ct):yt=Ct,tt){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=yt+M,tt={id:_++,callback:ft,priorityLevel:tt,startTime:yt,expirationTime:M,sortIndex:-1},yt>Ct?(tt.sortIndex=yt,t(g,tt),r(p)===null&&tt===r(g)&&(F?(Q(j),j=-1):F=!0,ne(J,yt-Ct))):(tt.sortIndex=M,t(p,tt),U||I||(U=!0,ot||(ot=!0,z()))),tt},i.unstable_shouldYield=k,i.unstable_wrapCallback=function(tt){var ft=S;return function(){var yt=S;S=ft;try{return tt.apply(this,arguments)}finally{S=yt}}}})(Op)),Op}var qx;function uN(){return qx||(qx=1,Mp.exports=lN()),Mp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gx;function cN(){if(Gx)return Il;Gx=1;var i=uN(),t=ym(),r=Kw();function a(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,s=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(s=n.return),e=n.return;while(e)}return n.tag===3?s:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(a(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(a(188));return n!==e?null:e}for(var s=e,l=n;;){var h=s.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){s=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===s)return m(h),e;if(d===l)return m(h),n;d=d.sibling}throw Error(a(188))}if(s.return!==l.return)s=h,l=d;else{for(var E=!1,T=h.child;T;){if(T===s){E=!0,s=h,l=d;break}if(T===l){E=!0,l=h,s=d;break}T=T.sibling}if(!E){for(T=d.child;T;){if(T===s){E=!0,s=d,l=h;break}if(T===l){E=!0,l=d,s=h;break}T=T.sibling}if(!E)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,b=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),I=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),X=Symbol.for("react.provider"),Q=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),lt=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),ot=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),O=Symbol.iterator;function z(e){return e===null||typeof e!="object"?null:(e=O&&e[O]||e["@@iterator"],typeof e=="function"?e:null)}var N=Symbol.for("react.client.reference");function ue(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===N?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case U:return"Fragment";case P:return"Profiler";case F:return"StrictMode";case J:return"Suspense";case ot:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case I:return"Portal";case Z:return(e.displayName||"Context")+".Provider";case Q:return(e._context.displayName||"Context")+".Consumer";case lt:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case j:return n=e.displayName||null,n!==null?n:ue(e.type)||"Memo";case R:n=e._payload,e=e._init;try{return ue(e(n))}catch{}}return null}var ne=Array.isArray,tt=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ft=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,yt={pending:!1,data:null,method:null,action:null},Ct=[],M=-1;function rt(e){return{current:e}}function ct(e){0>M||(e.current=Ct[M],Ct[M]=null,M--)}function ht(e,n){M++,Ct[M]=e.current,e.current=n}var gt=rt(null),jt=rt(null),xt=rt(null),me=rt(null);function Lt(e,n){switch(ht(xt,n),ht(jt,e),ht(gt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?l1(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=l1(n),e=u1(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ct(gt),ht(gt,e)}function De(){ct(gt),ct(jt),ct(xt)}function Ii(e){e.memoizedState!==null&&ht(me,e);var n=gt.current,s=u1(n,e.type);n!==s&&(ht(jt,e),ht(gt,s))}function Hn(e){jt.current===e&&(ct(gt),ct(jt)),me.current===e&&(ct(me),bl._currentValue=yt)}var on=Object.prototype.hasOwnProperty,oa=i.unstable_scheduleCallback,ts=i.unstable_cancelCallback,nf=i.unstable_shouldYield,bo=i.unstable_requestPaint,dn=i.unstable_now,mu=i.unstable_getCurrentPriorityLevel,Ne=i.unstable_ImmediatePriority,Pe=i.unstable_UserBlockingPriority,Di=i.unstable_NormalPriority,rf=i.unstable_LowPriority,To=i.unstable_IdlePriority,af=i.log,la=i.unstable_setDisableYieldValue,lr=null,Je=null;function In(e){if(typeof af=="function"&&la(e),Je&&typeof Je.setStrictMode=="function")try{Je.setStrictMode(lr,e)}catch{}}var ln=Math.clz32?Math.clz32:yu,sf=Math.log,gu=Math.LN2;function yu(e){return e>>>=0,e===0?32:31-(sf(e)/gu|0)|0}var ai=256,ur=4194304;function qn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Dn(e,n,s){var l=e.pendingLanes;if(l===0)return 0;var h=0,d=e.suspendedLanes,E=e.pingedLanes;e=e.warmLanes;var T=l&134217727;return T!==0?(l=T&~d,l!==0?h=qn(l):(E&=T,E!==0?h=qn(E):s||(s=T&~e,s!==0&&(h=qn(s))))):(T=l&~d,T!==0?h=qn(T):E!==0?h=qn(E):s||(s=l&~e,s!==0&&(h=qn(s)))),h===0?0:n!==0&&n!==h&&(n&d)===0&&(d=h&-h,s=n&-n,d>=s||d===32&&(s&4194048)!==0)?n:h}function cr(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function es(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wo(){var e=ai;return ai<<=1,(ai&4194048)===0&&(ai=256),e}function hr(){var e=ur;return ur<<=1,(ur&62914560)===0&&(ur=4194304),e}function ns(e){for(var n=[],s=0;31>s;s++)n.push(e);return n}function ve(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function vu(e,n,s,l,h,d){var E=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var T=e.entanglements,D=e.expirationTimes,K=e.hiddenUpdates;for(s=E&~s;0<s;){var et=31-ln(s),it=1<<et;T[et]=0,D[et]=-1;var q=K[et];if(q!==null)for(K[et]=null,et=0;et<q.length;et++){var G=q[et];G!==null&&(G.lane&=-536870913)}s&=~it}l!==0&&fr(e,l,0),d!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=d&~(E&~n))}function fr(e,n,s){e.pendingLanes|=n,e.suspendedLanes&=~n;var l=31-ln(n);e.entangledLanes|=n,e.entanglements[l]=e.entanglements[l]|1073741824|s&4194090}function dr(e,n){var s=e.entangledLanes|=n;for(e=e.entanglements;s;){var l=31-ln(s),h=1<<l;h&n|e[l]&n&&(e[l]|=n),s&=~h}}function So(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ao(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ni(){var e=ft.p;return e!==0?e:(e=window.event,e===void 0?32:C1(e.type))}function of(e,n){var s=ft.p;try{return ft.p=e,n()}finally{ft.p=s}}var si=Math.random().toString(36).slice(2),xe="__reactFiber$"+si,qe="__reactProps$"+si,Mi="__reactContainer$"+si,ua="__reactEvents$"+si,ca="__reactListeners$"+si,lf="__reactHandles$"+si,Gn="__reactResources$"+si,pr="__reactMarker$"+si;function is(e){delete e[xe],delete e[qe],delete e[ua],delete e[ca],delete e[lf]}function oi(e){var n=e[xe];if(n)return n;for(var s=e.parentNode;s;){if(n=s[Mi]||s[xe]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(e=d1(e);e!==null;){if(s=e[xe])return s;e=d1(e)}return n}e=s,s=e.parentNode}return null}function li(e){if(e=e[xe]||e[Mi]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function mr(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(a(33))}function gr(e){var n=e[Gn];return n||(n=e[Gn]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function _e(e){e[pr]=!0}var xu=new Set,ha={};function ui(e,n){ci(e,n),ci(e+"Capture",n)}function ci(e,n){for(ha[e]=n,e=0;e<n.length;e++)xu.add(n[e])}var fa=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),hi={},rs={};function uf(e){return on.call(rs,e)?!0:on.call(hi,e)?!1:fa.test(e)?rs[e]=!0:(hi[e]=!0,!1)}function da(e,n,s){if(uf(n))if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+s)}}function pa(e,n,s){if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+s)}}function Nn(e,n,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(n,s,""+l)}}var ma,as;function Oi(e){if(ma===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);ma=n&&n[1]||"",as=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ma+e+as}var ss=!1;function os(e,n){if(!e||ss)return"";ss=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var it=function(){throw Error()};if(Object.defineProperty(it.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(it,[])}catch(G){var q=G}Reflect.construct(e,[],it)}else{try{it.call()}catch(G){q=G}e.call(it.prototype)}}else{try{throw Error()}catch(G){q=G}(it=e())&&typeof it.catch=="function"&&it.catch(function(){})}}catch(G){if(G&&q&&typeof G.stack=="string")return[G.stack,q.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),E=d[0],T=d[1];if(E&&T){var D=E.split(`
`),K=T.split(`
`);for(h=l=0;l<D.length&&!D[l].includes("DetermineComponentFrameRoot");)l++;for(;h<K.length&&!K[h].includes("DetermineComponentFrameRoot");)h++;if(l===D.length||h===K.length)for(l=D.length-1,h=K.length-1;1<=l&&0<=h&&D[l]!==K[h];)h--;for(;1<=l&&0<=h;l--,h--)if(D[l]!==K[h]){if(l!==1||h!==1)do if(l--,h--,0>h||D[l]!==K[h]){var et=`
`+D[l].replace(" at new "," at ");return e.displayName&&et.includes("<anonymous>")&&(et=et.replace("<anonymous>",e.displayName)),et}while(1<=l&&0<=h);break}}}finally{ss=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?Oi(s):""}function cf(e){switch(e.tag){case 26:case 27:case 5:return Oi(e.type);case 16:return Oi("Lazy");case 13:return Oi("Suspense");case 19:return Oi("SuspenseList");case 0:case 15:return os(e.type,!1);case 11:return os(e.type.render,!1);case 1:return os(e.type,!0);case 31:return Oi("Activity");default:return""}}function Yn(e){try{var n="";do n+=cf(e),e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function fe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yr(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ga(e){var n=yr(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),l=""+e[n];if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var h=s.get,d=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return h.call(this)},set:function(E){l=""+E,d.call(this,E)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function vr(e){e._valueTracker||(e._valueTracker=ga(e))}function Wt(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var s=n.getValue(),l="";return e&&(l=yr(e)?e.checked?"true":"false":e.value),e=l,e!==s?(n.setValue(e),!0):!1}function Vi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ya=/[\n"\\]/g;function Le(e){return e.replace(ya,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ro(e,n,s,l,h,d,E,T){e.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.type=E:e.removeAttribute("type"),n!=null?E==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+fe(n)):e.value!==""+fe(n)&&(e.value=""+fe(n)):E!=="submit"&&E!=="reset"||e.removeAttribute("value"),n!=null?jo(e,E,fe(n)):s!=null?jo(e,E,fe(s)):l!=null&&e.removeAttribute("value"),h==null&&d!=null&&(e.defaultChecked=!!d),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+fe(T):e.removeAttribute("name")}function Co(e,n,s,l,h,d,E,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||n!=null))return;s=s!=null?""+fe(s):"",n=n!=null?""+fe(n):s,T||n===e.value||(e.value=n),e.defaultValue=n}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=T?e.checked:!!l,e.defaultChecked=!!l,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(e.name=E)}function jo(e,n,s){n==="number"&&Vi(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function xr(e,n,s,l){if(e=e.options,n){n={};for(var h=0;h<s.length;h++)n["$"+s[h]]=!0;for(s=0;s<e.length;s++)h=n.hasOwnProperty("$"+e[s].value),e[s].selected!==h&&(e[s].selected=h),h&&l&&(e[s].defaultSelected=!0)}else{for(s=""+fe(s),n=null,h=0;h<e.length;h++){if(e[h].value===s){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}n!==null||e[h].disabled||(n=e[h])}n!==null&&(n.selected=!0)}}function _u(e,n,s){if(n!=null&&(n=""+fe(n),n!==e.value&&(e.value=n),s==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=s!=null?""+fe(s):""}function Eu(e,n,s,l){if(n==null){if(l!=null){if(s!=null)throw Error(a(92));if(ne(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),n=s}s=fe(n),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l)}function Mn(e,n){if(n){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=n;return}}e.textContent=n}var ki=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Io(e,n,s){var l=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":l?e.setProperty(n,s):typeof s!="number"||s===0||ki.has(n)?n==="float"?e.cssFloat=s:e[n]=(""+s).trim():e[n]=s+"px"}function Do(e,n,s){if(n!=null&&typeof n!="object")throw Error(a(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in n)l=n[h],n.hasOwnProperty(h)&&s[h]!==l&&Io(e,h,l)}else for(var d in n)n.hasOwnProperty(d)&&Io(e,d,n[d])}function ls(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bu=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Tu=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qn(e){return Tu.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var No=null;function Mo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _r=null,un=null;function wu(e){var n=li(e);if(n&&(e=n.stateNode)){var s=e[qe]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ro(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Le(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var l=s[n];if(l!==e&&l.form===e.form){var h=l[qe]||null;if(!h)throw Error(a(90));Ro(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(n=0;n<s.length;n++)l=s[n],l.form===e.form&&Wt(l)}break t;case"textarea":_u(e,s.value,s.defaultValue);break t;case"select":n=s.value,n!=null&&xr(e,!!s.multiple,n,!1)}}}var va=!1;function xa(e,n,s){if(va)return e(n,s);va=!0;try{var l=e(n);return l}finally{if(va=!1,(_r!==null||un!==null)&&(dc(),_r&&(n=_r,e=un,un=_r=null,wu(n),e)))for(n=0;n<e.length;n++)wu(e[n])}}function Er(e,n){var s=e.stateNode;if(s===null)return null;var l=s[qe]||null;if(l===null)return null;s=l[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,n,typeof s));return s}var cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ui=!1;if(cn)try{var br={};Object.defineProperty(br,"passive",{get:function(){Ui=!0}}),window.addEventListener("test",br,br),window.removeEventListener("test",br,br)}catch{Ui=!1}var On=null,ie=null,us=null;function Su(){if(us)return us;var e,n=ie,s=n.length,l,h="value"in On?On.value:On.textContent,d=h.length;for(e=0;e<s&&n[e]===h[e];e++);var E=s-e;for(l=1;l<=E&&n[s-l]===h[d-l];l++);return us=h.slice(e,1<l?1-l:void 0)}function _a(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ea(){return!0}function Oo(){return!1}function Me(e){function n(s,l,h,d,E){this._reactName=s,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=E,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(s=e[T],this[T]=s?s(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Ea:Oo,this.isPropagationStopped=Oo,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Ea)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Ea)},persist:function(){},isPersistent:Ea}),n}var tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ba=Me(tn),Ta=_({},tn,{view:0,detail:0}),wa=Me(Ta),cs,Sa,fi,Aa=_({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ds,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fi&&(fi&&e.type==="mousemove"?(cs=e.screenX-fi.screenX,Sa=e.screenY-fi.screenY):Sa=cs=0,fi=e),cs)},movementY:function(e){return"movementY"in e?e.movementY:Sa}}),Ra=Me(Aa),hf=_({},Aa,{dataTransfer:0}),Au=Me(hf),Ca=_({},Ta,{relatedTarget:0}),hs=Me(Ca),Ru=_({},tn,{animationName:0,elapsedTime:0,pseudoElement:0}),Vo=Me(Ru),ko=_({},tn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cu=Me(ko),fs=_({},tn,{data:0}),Uo=Me(fs),ju={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pi={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Iu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Du(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Iu[e])?!!n[e]:!1}function ds(){return Du}var Nu=_({},Ta,{key:function(e){if(e.key){var n=ju[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=_a(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Pi[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ds,charCode:function(e){return e.type==="keypress"?_a(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_a(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ps=Me(Nu),hn=_({},Aa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Po=Me(hn),Mu=_({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ds}),Tr=Me(Mu),c=_({},tn,{propertyName:0,elapsedTime:0,pseudoElement:0}),y=Me(c),x=_({},Aa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),w=Me(x),$=_({},tn,{newState:0,oldState:0}),Y=Me($),ut=[9,13,27,32],At=cn&&"CompositionEvent"in window,ae=null;cn&&"documentMode"in document&&(ae=document.documentMode);var Yt=cn&&"TextEvent"in window&&!ae,Ee=cn&&(!At||ae&&8<ae&&11>=ae),_n=" ",di=!1;function Xn(e,n){switch(e){case"keyup":return ut.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wn(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zn=!1;function Lo(e,n){switch(e){case"compositionend":return Wn(n);case"keypress":return n.which!==32?null:(di=!0,_n);case"textInput":return e=n.data,e===_n&&di?null:e;default:return null}}function L2(e,n){if(Zn)return e==="compositionend"||!At&&Xn(e,n)?(e=Su(),us=ie=On=null,Zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ee&&n.locale!=="ko"?null:n.data;default:return null}}var z2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bg(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!z2[e.type]:n==="textarea"}function Tg(e,n,s,l){_r?un?un.push(l):un=[l]:_r=l,n=xc(n,"onChange"),0<n.length&&(s=new ba("onChange","change",null,s,l),e.push({event:s,listeners:n}))}var zo=null,Bo=null;function B2(e){i1(e,0)}function Ou(e){var n=mr(e);if(Wt(n))return e}function wg(e,n){if(e==="change")return n}var Sg=!1;if(cn){var ff;if(cn){var df="oninput"in document;if(!df){var Ag=document.createElement("div");Ag.setAttribute("oninput","return;"),df=typeof Ag.oninput=="function"}ff=df}else ff=!1;Sg=ff&&(!document.documentMode||9<document.documentMode)}function Rg(){zo&&(zo.detachEvent("onpropertychange",Cg),Bo=zo=null)}function Cg(e){if(e.propertyName==="value"&&Ou(Bo)){var n=[];Tg(n,Bo,e,Mo(e)),xa(B2,n)}}function $2(e,n,s){e==="focusin"?(Rg(),zo=n,Bo=s,zo.attachEvent("onpropertychange",Cg)):e==="focusout"&&Rg()}function F2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ou(Bo)}function K2(e,n){if(e==="click")return Ou(n)}function H2(e,n){if(e==="input"||e==="change")return Ou(n)}function q2(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var En=typeof Object.is=="function"?Object.is:q2;function $o(e,n){if(En(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var s=Object.keys(e),l=Object.keys(n);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var h=s[l];if(!on.call(n,h)||!En(e[h],n[h]))return!1}return!0}function jg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ig(e,n){var s=jg(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=n&&l>=n)return{node:s,offset:n-e};e=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=jg(s)}}function Dg(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Dg(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ng(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Vi(e.document);n instanceof e.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)e=n.contentWindow;else break;n=Vi(e.document)}return n}function pf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var G2=cn&&"documentMode"in document&&11>=document.documentMode,ms=null,mf=null,Fo=null,gf=!1;function Mg(e,n,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;gf||ms==null||ms!==Vi(l)||(l=ms,"selectionStart"in l&&pf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Fo&&$o(Fo,l)||(Fo=l,l=xc(mf,"onSelect"),0<l.length&&(n=new ba("onSelect","select",null,n,s),e.push({event:n,listeners:l}),n.target=ms)))}function ja(e,n){var s={};return s[e.toLowerCase()]=n.toLowerCase(),s["Webkit"+e]="webkit"+n,s["Moz"+e]="moz"+n,s}var gs={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionrun:ja("Transition","TransitionRun"),transitionstart:ja("Transition","TransitionStart"),transitioncancel:ja("Transition","TransitionCancel"),transitionend:ja("Transition","TransitionEnd")},yf={},Og={};cn&&(Og=document.createElement("div").style,"AnimationEvent"in window||(delete gs.animationend.animation,delete gs.animationiteration.animation,delete gs.animationstart.animation),"TransitionEvent"in window||delete gs.transitionend.transition);function Ia(e){if(yf[e])return yf[e];if(!gs[e])return e;var n=gs[e],s;for(s in n)if(n.hasOwnProperty(s)&&s in Og)return yf[e]=n[s];return e}var Vg=Ia("animationend"),kg=Ia("animationiteration"),Ug=Ia("animationstart"),Y2=Ia("transitionrun"),Q2=Ia("transitionstart"),X2=Ia("transitioncancel"),Pg=Ia("transitionend"),Lg=new Map,vf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vf.push("scrollEnd");function Jn(e,n){Lg.set(e,n),ui(n,[e])}var zg=new WeakMap;function Vn(e,n){if(typeof e=="object"&&e!==null){var s=zg.get(e);return s!==void 0?s:(n={value:e,source:n,stack:Yn(n)},zg.set(e,n),n)}return{value:e,source:n,stack:Yn(n)}}var kn=[],ys=0,xf=0;function Vu(){for(var e=ys,n=xf=ys=0;n<e;){var s=kn[n];kn[n++]=null;var l=kn[n];kn[n++]=null;var h=kn[n];kn[n++]=null;var d=kn[n];if(kn[n++]=null,l!==null&&h!==null){var E=l.pending;E===null?h.next=h:(h.next=E.next,E.next=h),l.pending=h}d!==0&&Bg(s,h,d)}}function ku(e,n,s,l){kn[ys++]=e,kn[ys++]=n,kn[ys++]=s,kn[ys++]=l,xf|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function _f(e,n,s,l){return ku(e,n,s,l),Uu(e)}function vs(e,n){return ku(e,null,null,n),Uu(e)}function Bg(e,n,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var h=!1,d=e.return;d!==null;)d.childLanes|=s,l=d.alternate,l!==null&&(l.childLanes|=s),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(h=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,h&&n!==null&&(h=31-ln(s),e=d.hiddenUpdates,l=e[h],l===null?e[h]=[n]:l.push(n),n.lane=s|536870912),d):null}function Uu(e){if(50<pl)throw pl=0,Ad=null,Error(a(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var xs={};function W2(e,n,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(e,n,s,l){return new W2(e,n,s,l)}function Ef(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Li(e,n){var s=e.alternate;return s===null?(s=bn(e.tag,n,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=n,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,n=e.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function $g(e,n){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,n=s.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Pu(e,n,s,l,h,d){var E=0;if(l=e,typeof e=="function")Ef(e)&&(E=1);else if(typeof e=="string")E=Jb(e,s,gt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=bn(31,s,n,h),e.elementType=C,e.lanes=d,e;case U:return Da(s.children,h,d,n);case F:E=8,h|=24;break;case P:return e=bn(12,s,n,h|2),e.elementType=P,e.lanes=d,e;case J:return e=bn(13,s,n,h),e.elementType=J,e.lanes=d,e;case ot:return e=bn(19,s,n,h),e.elementType=ot,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case X:case Z:E=10;break t;case Q:E=9;break t;case lt:E=11;break t;case j:E=14;break t;case R:E=16,l=null;break t}E=29,s=Error(a(130,e===null?"null":typeof e,"")),l=null}return n=bn(E,s,n,h),n.elementType=e,n.type=l,n.lanes=d,n}function Da(e,n,s,l){return e=bn(7,e,l,n),e.lanes=s,e}function bf(e,n,s){return e=bn(6,e,null,n),e.lanes=s,e}function Tf(e,n,s){return n=bn(4,e.children!==null?e.children:[],e.key,n),n.lanes=s,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var _s=[],Es=0,Lu=null,zu=0,Un=[],Pn=0,Na=null,zi=1,Bi="";function Ma(e,n){_s[Es++]=zu,_s[Es++]=Lu,Lu=e,zu=n}function Fg(e,n,s){Un[Pn++]=zi,Un[Pn++]=Bi,Un[Pn++]=Na,Na=e;var l=zi;e=Bi;var h=32-ln(l)-1;l&=~(1<<h),s+=1;var d=32-ln(n)+h;if(30<d){var E=h-h%5;d=(l&(1<<E)-1).toString(32),l>>=E,h-=E,zi=1<<32-ln(n)+h|s<<h|l,Bi=d+e}else zi=1<<d|s<<h|l,Bi=e}function wf(e){e.return!==null&&(Ma(e,1),Fg(e,1,0))}function Sf(e){for(;e===Lu;)Lu=_s[--Es],_s[Es]=null,zu=_s[--Es],_s[Es]=null;for(;e===Na;)Na=Un[--Pn],Un[Pn]=null,Bi=Un[--Pn],Un[Pn]=null,zi=Un[--Pn],Un[Pn]=null}var fn=null,ge=null,Ht=!1,Oa=null,pi=!1,Af=Error(a(519));function Va(e){var n=Error(a(418,""));throw qo(Vn(n,e)),Af}function Kg(e){var n=e.stateNode,s=e.type,l=e.memoizedProps;switch(n[xe]=e,n[qe]=l,s){case"dialog":Vt("cancel",n),Vt("close",n);break;case"iframe":case"object":case"embed":Vt("load",n);break;case"video":case"audio":for(s=0;s<gl.length;s++)Vt(gl[s],n);break;case"source":Vt("error",n);break;case"img":case"image":case"link":Vt("error",n),Vt("load",n);break;case"details":Vt("toggle",n);break;case"input":Vt("invalid",n),Co(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),vr(n);break;case"select":Vt("invalid",n);break;case"textarea":Vt("invalid",n),Eu(n,l.value,l.defaultValue,l.children),vr(n)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||l.suppressHydrationWarning===!0||o1(n.textContent,s)?(l.popover!=null&&(Vt("beforetoggle",n),Vt("toggle",n)),l.onScroll!=null&&Vt("scroll",n),l.onScrollEnd!=null&&Vt("scrollend",n),l.onClick!=null&&(n.onclick=_c),n=!0):n=!1,n||Va(e)}function Hg(e){for(fn=e.return;fn;)switch(fn.tag){case 5:case 13:pi=!1;return;case 27:case 3:pi=!0;return;default:fn=fn.return}}function Ko(e){if(e!==fn)return!1;if(!Ht)return Hg(e),Ht=!0,!1;var n=e.tag,s;if((s=n!==3&&n!==27)&&((s=n===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||$d(e.type,e.memoizedProps)),s=!s),s&&ge&&Va(e),Hg(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(n===0){ge=ei(e.nextSibling);break t}n--}else s!=="$"&&s!=="$!"&&s!=="$?"||n++;e=e.nextSibling}ge=null}}else n===27?(n=ge,Lr(e.type)?(e=qd,qd=null,ge=e):ge=n):ge=fn?ei(e.stateNode.nextSibling):null;return!0}function Ho(){ge=fn=null,Ht=!1}function qg(){var e=Oa;return e!==null&&(gn===null?gn=e:gn.push.apply(gn,e),Oa=null),e}function qo(e){Oa===null?Oa=[e]:Oa.push(e)}var Rf=rt(null),ka=null,$i=null;function wr(e,n,s){ht(Rf,n._currentValue),n._currentValue=s}function Fi(e){e._currentValue=Rf.current,ct(Rf)}function Cf(e,n,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===s)break;e=e.return}}function jf(e,n,s,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var d=h.dependencies;if(d!==null){var E=h.child;d=d.firstContext;t:for(;d!==null;){var T=d;d=h;for(var D=0;D<n.length;D++)if(T.context===n[D]){d.lanes|=s,T=d.alternate,T!==null&&(T.lanes|=s),Cf(d.return,s,e),l||(E=null);break t}d=T.next}}else if(h.tag===18){if(E=h.return,E===null)throw Error(a(341));E.lanes|=s,d=E.alternate,d!==null&&(d.lanes|=s),Cf(E,s,e),E=null}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===e){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}}function Go(e,n,s,l){e=null;for(var h=n,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var E=h.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var T=h.type;En(h.pendingProps.value,E.value)||(e!==null?e.push(T):e=[T])}}else if(h===me.current){if(E=h.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(bl):e=[bl])}h=h.return}e!==null&&jf(n,e,s,l),n.flags|=262144}function Bu(e){for(e=e.firstContext;e!==null;){if(!En(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ua(e){ka=e,$i=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function en(e){return Gg(ka,e)}function $u(e,n){return ka===null&&Ua(e),Gg(e,n)}function Gg(e,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},$i===null){if(e===null)throw Error(a(308));$i=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else $i=$i.next=n;return s}var Z2=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){n.aborted=!0,e.forEach(function(s){return s()})}},J2=i.unstable_scheduleCallback,tb=i.unstable_NormalPriority,Oe={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function If(){return{controller:new Z2,data:new Map,refCount:0}}function Yo(e){e.refCount--,e.refCount===0&&J2(tb,function(){e.controller.abort()})}var Qo=null,Df=0,bs=0,Ts=null;function eb(e,n){if(Qo===null){var s=Qo=[];Df=0,bs=Md(),Ts={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Df++,n.then(Yg,Yg),n}function Yg(){if(--Df===0&&Qo!==null){Ts!==null&&(Ts.status="fulfilled");var e=Qo;Qo=null,bs=0,Ts=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function nb(e,n){var s=[],l={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return e.then(function(){l.status="fulfilled",l.value=n;for(var h=0;h<s.length;h++)(0,s[h])(n)},function(h){for(l.status="rejected",l.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),l}var Qg=tt.S;tt.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&eb(e,n),Qg!==null&&Qg(e,n)};var Pa=rt(null);function Nf(){var e=Pa.current;return e!==null?e:re.pooledCache}function Fu(e,n){n===null?ht(Pa,Pa.current):ht(Pa,n.pool)}function Xg(){var e=Nf();return e===null?null:{parent:Oe._currentValue,pool:e}}var Xo=Error(a(460)),Wg=Error(a(474)),Ku=Error(a(542)),Mf={then:function(){}};function Zg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Hu(){}function Jg(e,n,s){switch(s=e[s],s===void 0?e.push(n):s!==n&&(n.then(Hu,Hu),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e0(e),e;default:if(typeof n.status=="string")n.then(Hu,Hu);else{if(e=re,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=n,e.status="pending",e.then(function(l){if(n.status==="pending"){var h=n;h.status="fulfilled",h.value=l}},function(l){if(n.status==="pending"){var h=n;h.status="rejected",h.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e0(e),e}throw Wo=n,Xo}}var Wo=null;function t0(){if(Wo===null)throw Error(a(459));var e=Wo;return Wo=null,e}function e0(e){if(e===Xo||e===Ku)throw Error(a(483))}var Sr=!1;function Of(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ar(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Rr(e,n,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Qt&2)!==0){var h=l.pending;return h===null?n.next=n:(n.next=h.next,h.next=n),l.pending=n,n=Uu(e),Bg(e,null,s),n}return ku(e,l,n,s),Uu(e)}function Zo(e,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194048)!==0)){var l=n.lanes;l&=e.pendingLanes,s|=l,n.lanes=s,dr(e,s)}}function kf(e,n){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var h=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var E={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?h=d=E:d=d.next=E,s=s.next}while(s!==null);d===null?h=d=n:d=d.next=n}else h=d=n;s={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=n:e.next=n,s.lastBaseUpdate=n}var Uf=!1;function Jo(){if(Uf){var e=Ts;if(e!==null)throw e}}function tl(e,n,s,l){Uf=!1;var h=e.updateQueue;Sr=!1;var d=h.firstBaseUpdate,E=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var D=T,K=D.next;D.next=null,E===null?d=K:E.next=K,E=D;var et=e.alternate;et!==null&&(et=et.updateQueue,T=et.lastBaseUpdate,T!==E&&(T===null?et.firstBaseUpdate=K:T.next=K,et.lastBaseUpdate=D))}if(d!==null){var it=h.baseState;E=0,et=K=D=null,T=d;do{var q=T.lane&-536870913,G=q!==T.lane;if(G?(zt&q)===q:(l&q)===q){q!==0&&q===bs&&(Uf=!0),et!==null&&(et=et.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var wt=e,Et=T;q=n;var te=s;switch(Et.tag){case 1:if(wt=Et.payload,typeof wt=="function"){it=wt.call(te,it,q);break t}it=wt;break t;case 3:wt.flags=wt.flags&-65537|128;case 0:if(wt=Et.payload,q=typeof wt=="function"?wt.call(te,it,q):wt,q==null)break t;it=_({},it,q);break t;case 2:Sr=!0}}q=T.callback,q!==null&&(e.flags|=64,G&&(e.flags|=8192),G=h.callbacks,G===null?h.callbacks=[q]:G.push(q))}else G={lane:q,tag:T.tag,payload:T.payload,callback:T.callback,next:null},et===null?(K=et=G,D=it):et=et.next=G,E|=q;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;G=T,T=G.next,G.next=null,h.lastBaseUpdate=G,h.shared.pending=null}}while(!0);et===null&&(D=it),h.baseState=D,h.firstBaseUpdate=K,h.lastBaseUpdate=et,d===null&&(h.shared.lanes=0),Vr|=E,e.lanes=E,e.memoizedState=it}}function n0(e,n){if(typeof e!="function")throw Error(a(191,e));e.call(n)}function i0(e,n){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)n0(s[e],n)}var ws=rt(null),qu=rt(0);function r0(e,n){e=Xi,ht(qu,e),ht(ws,n),Xi=e|n.baseLanes}function Pf(){ht(qu,Xi),ht(ws,ws.current)}function Lf(){Xi=qu.current,ct(ws),ct(qu)}var Cr=0,Nt=null,Zt=null,Se=null,Gu=!1,Ss=!1,La=!1,Yu=0,el=0,As=null,ib=0;function be(){throw Error(a(321))}function zf(e,n){if(n===null)return!1;for(var s=0;s<n.length&&s<e.length;s++)if(!En(e[s],n[s]))return!1;return!0}function Bf(e,n,s,l,h,d){return Cr=d,Nt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,tt.H=e===null||e.memoizedState===null?B0:$0,La=!1,d=s(l,h),La=!1,Ss&&(d=s0(n,s,l,h)),a0(e),d}function a0(e){tt.H=tc;var n=Zt!==null&&Zt.next!==null;if(Cr=0,Se=Zt=Nt=null,Gu=!1,el=0,As=null,n)throw Error(a(300));e===null||ze||(e=e.dependencies,e!==null&&Bu(e)&&(ze=!0))}function s0(e,n,s,l){Nt=e;var h=0;do{if(Ss&&(As=null),el=0,Ss=!1,25<=h)throw Error(a(301));if(h+=1,Se=Zt=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}tt.H=cb,d=n(s,l)}while(Ss);return d}function rb(){var e=tt.H,n=e.useState()[0];return n=typeof n.then=="function"?nl(n):n,e=e.useState()[0],(Zt!==null?Zt.memoizedState:null)!==e&&(Nt.flags|=1024),n}function $f(){var e=Yu!==0;return Yu=0,e}function Ff(e,n,s){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s}function Kf(e){if(Gu){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Gu=!1}Cr=0,Se=Zt=Nt=null,Ss=!1,el=Yu=0,As=null}function pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?Nt.memoizedState=Se=e:Se=Se.next=e,Se}function Ae(){if(Zt===null){var e=Nt.alternate;e=e!==null?e.memoizedState:null}else e=Zt.next;var n=Se===null?Nt.memoizedState:Se.next;if(n!==null)Se=n,Zt=e;else{if(e===null)throw Nt.alternate===null?Error(a(467)):Error(a(310));Zt=e,e={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},Se===null?Nt.memoizedState=Se=e:Se=Se.next=e}return Se}function Hf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function nl(e){var n=el;return el+=1,As===null&&(As=[]),e=Jg(As,e,n),n=Nt,(Se===null?n.memoizedState:Se.next)===null&&(n=n.alternate,tt.H=n===null||n.memoizedState===null?B0:$0),e}function Qu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return nl(e);if(e.$$typeof===Z)return en(e)}throw Error(a(438,String(e)))}function qf(e){var n=null,s=Nt.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var l=Nt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(h){return h.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=Hf(),Nt.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(e),l=0;l<e;l++)s[l]=k;return n.index++,s}function Ki(e,n){return typeof n=="function"?n(e):n}function Xu(e){var n=Ae();return Gf(n,Zt,e)}function Gf(e,n,s){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var h=e.baseQueue,d=l.pending;if(d!==null){if(h!==null){var E=h.next;h.next=d.next,d.next=E}n.baseQueue=h=d,l.pending=null}if(d=e.baseState,h===null)e.memoizedState=d;else{n=h.next;var T=E=null,D=null,K=n,et=!1;do{var it=K.lane&-536870913;if(it!==K.lane?(zt&it)===it:(Cr&it)===it){var q=K.revertLane;if(q===0)D!==null&&(D=D.next={lane:0,revertLane:0,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),it===bs&&(et=!0);else if((Cr&q)===q){K=K.next,q===bs&&(et=!0);continue}else it={lane:0,revertLane:K.revertLane,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},D===null?(T=D=it,E=d):D=D.next=it,Nt.lanes|=q,Vr|=q;it=K.action,La&&s(d,it),d=K.hasEagerState?K.eagerState:s(d,it)}else q={lane:it,revertLane:K.revertLane,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},D===null?(T=D=q,E=d):D=D.next=q,Nt.lanes|=it,Vr|=it;K=K.next}while(K!==null&&K!==n);if(D===null?E=d:D.next=T,!En(d,e.memoizedState)&&(ze=!0,et&&(s=Ts,s!==null)))throw s;e.memoizedState=d,e.baseState=E,e.baseQueue=D,l.lastRenderedState=d}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Yf(e){var n=Ae(),s=n.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var l=s.dispatch,h=s.pending,d=n.memoizedState;if(h!==null){s.pending=null;var E=h=h.next;do d=e(d,E.action),E=E.next;while(E!==h);En(d,n.memoizedState)||(ze=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),s.lastRenderedState=d}return[d,l]}function o0(e,n,s){var l=Nt,h=Ae(),d=Ht;if(d){if(s===void 0)throw Error(a(407));s=s()}else s=n();var E=!En((Zt||h).memoizedState,s);E&&(h.memoizedState=s,ze=!0),h=h.queue;var T=c0.bind(null,l,h,e);if(il(2048,8,T,[e]),h.getSnapshot!==n||E||Se!==null&&Se.memoizedState.tag&1){if(l.flags|=2048,Rs(9,Wu(),u0.bind(null,l,h,s,n),null),re===null)throw Error(a(349));d||(Cr&124)!==0||l0(l,n,s)}return s}function l0(e,n,s){e.flags|=16384,e={getSnapshot:n,value:s},n=Nt.updateQueue,n===null?(n=Hf(),Nt.updateQueue=n,n.stores=[e]):(s=n.stores,s===null?n.stores=[e]:s.push(e))}function u0(e,n,s,l){n.value=s,n.getSnapshot=l,h0(n)&&f0(e)}function c0(e,n,s){return s(function(){h0(n)&&f0(e)})}function h0(e){var n=e.getSnapshot;e=e.value;try{var s=n();return!En(e,s)}catch{return!0}}function f0(e){var n=vs(e,2);n!==null&&Rn(n,e,2)}function Qf(e){var n=pn();if(typeof e=="function"){var s=e;if(e=s(),La){In(!0);try{s()}finally{In(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:e},n}function d0(e,n,s,l){return e.baseState=s,Gf(e,Zt,typeof l=="function"?l:Ki)}function ab(e,n,s,l,h){if(Ju(e))throw Error(a(485));if(e=n.action,e!==null){var d={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){d.listeners.push(E)}};tt.T!==null?s(!0):d.isTransition=!1,l(d),s=n.pending,s===null?(d.next=n.pending=d,p0(n,d)):(d.next=s.next,n.pending=s.next=d)}}function p0(e,n){var s=n.action,l=n.payload,h=e.state;if(n.isTransition){var d=tt.T,E={};tt.T=E;try{var T=s(h,l),D=tt.S;D!==null&&D(E,T),m0(e,n,T)}catch(K){Xf(e,n,K)}finally{tt.T=d}}else try{d=s(h,l),m0(e,n,d)}catch(K){Xf(e,n,K)}}function m0(e,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){g0(e,n,l)},function(l){return Xf(e,n,l)}):g0(e,n,s)}function g0(e,n,s){n.status="fulfilled",n.value=s,y0(n),e.state=s,n=e.pending,n!==null&&(s=n.next,s===n?e.pending=null:(s=s.next,n.next=s,p0(e,s)))}function Xf(e,n,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=s,y0(n),n=n.next;while(n!==l)}e.action=null}function y0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function v0(e,n){return n}function x0(e,n){if(Ht){var s=re.formState;if(s!==null){t:{var l=Nt;if(Ht){if(ge){e:{for(var h=ge,d=pi;h.nodeType!==8;){if(!d){h=null;break e}if(h=ei(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){ge=ei(h.nextSibling),l=h.data==="F!";break t}}Va(l)}l=!1}l&&(n=s[0])}}return s=pn(),s.memoizedState=s.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:v0,lastRenderedState:n},s.queue=l,s=P0.bind(null,Nt,l),l.dispatch=s,l=Qf(!1),d=ed.bind(null,Nt,!1,l.queue),l=pn(),h={state:n,dispatch:null,action:e,pending:null},l.queue=h,s=ab.bind(null,Nt,h,d,s),h.dispatch=s,l.memoizedState=e,[n,s,!1]}function _0(e){var n=Ae();return E0(n,Zt,e)}function E0(e,n,s){if(n=Gf(e,n,v0)[0],e=Xu(Ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=nl(n)}catch(E){throw E===Xo?Ku:E}else l=n;n=Ae();var h=n.queue,d=h.dispatch;return s!==n.memoizedState&&(Nt.flags|=2048,Rs(9,Wu(),sb.bind(null,h,s),null)),[l,d,e]}function sb(e,n){e.action=n}function b0(e){var n=Ae(),s=Zt;if(s!==null)return E0(n,s,e);Ae(),n=n.memoizedState,s=Ae();var l=s.queue.dispatch;return s.memoizedState=e,[n,l,!1]}function Rs(e,n,s,l){return e={tag:e,create:s,deps:l,inst:n,next:null},n=Nt.updateQueue,n===null&&(n=Hf(),Nt.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,n.lastEffect=e),e}function Wu(){return{destroy:void 0,resource:void 0}}function T0(){return Ae().memoizedState}function Zu(e,n,s,l){var h=pn();l=l===void 0?null:l,Nt.flags|=e,h.memoizedState=Rs(1|n,Wu(),s,l)}function il(e,n,s,l){var h=Ae();l=l===void 0?null:l;var d=h.memoizedState.inst;Zt!==null&&l!==null&&zf(l,Zt.memoizedState.deps)?h.memoizedState=Rs(n,d,s,l):(Nt.flags|=e,h.memoizedState=Rs(1|n,d,s,l))}function w0(e,n){Zu(8390656,8,e,n)}function S0(e,n){il(2048,8,e,n)}function A0(e,n){return il(4,2,e,n)}function R0(e,n){return il(4,4,e,n)}function C0(e,n){if(typeof n=="function"){e=e();var s=n(e);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function j0(e,n,s){s=s!=null?s.concat([e]):null,il(4,4,C0.bind(null,n,e),s)}function Wf(){}function I0(e,n){var s=Ae();n=n===void 0?null:n;var l=s.memoizedState;return n!==null&&zf(n,l[1])?l[0]:(s.memoizedState=[e,n],e)}function D0(e,n){var s=Ae();n=n===void 0?null:n;var l=s.memoizedState;if(n!==null&&zf(n,l[1]))return l[0];if(l=e(),La){In(!0);try{e()}finally{In(!1)}}return s.memoizedState=[l,n],l}function Zf(e,n,s){return s===void 0||(Cr&1073741824)!==0?e.memoizedState=n:(e.memoizedState=s,e=Oy(),Nt.lanes|=e,Vr|=e,s)}function N0(e,n,s,l){return En(s,n)?s:ws.current!==null?(e=Zf(e,s,l),En(e,n)||(ze=!0),e):(Cr&42)===0?(ze=!0,e.memoizedState=s):(e=Oy(),Nt.lanes|=e,Vr|=e,n)}function M0(e,n,s,l,h){var d=ft.p;ft.p=d!==0&&8>d?d:8;var E=tt.T,T={};tt.T=T,ed(e,!1,n,s);try{var D=h(),K=tt.S;if(K!==null&&K(T,D),D!==null&&typeof D=="object"&&typeof D.then=="function"){var et=nb(D,l);rl(e,n,et,An(e))}else rl(e,n,l,An(e))}catch(it){rl(e,n,{then:function(){},status:"rejected",reason:it},An())}finally{ft.p=d,tt.T=E}}function ob(){}function Jf(e,n,s,l){if(e.tag!==5)throw Error(a(476));var h=O0(e).queue;M0(e,h,n,yt,s===null?ob:function(){return V0(e),s(l)})}function O0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:yt,baseState:yt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:yt},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:s},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function V0(e){var n=O0(e).next.queue;rl(e,n,{},An())}function td(){return en(bl)}function k0(){return Ae().memoizedState}function U0(){return Ae().memoizedState}function lb(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var s=An();e=Ar(s);var l=Rr(n,e,s);l!==null&&(Rn(l,n,s),Zo(l,n,s)),n={cache:If()},e.payload=n;return}n=n.return}}function ub(e,n,s){var l=An();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},Ju(e)?L0(n,s):(s=_f(e,n,s,l),s!==null&&(Rn(s,e,l),z0(s,n,l)))}function P0(e,n,s){var l=An();rl(e,n,s,l)}function rl(e,n,s,l){var h={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(Ju(e))L0(n,h);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var E=n.lastRenderedState,T=d(E,s);if(h.hasEagerState=!0,h.eagerState=T,En(T,E))return ku(e,n,h,0),re===null&&Vu(),!1}catch{}finally{}if(s=_f(e,n,h,l),s!==null)return Rn(s,e,l),z0(s,n,l),!0}return!1}function ed(e,n,s,l){if(l={lane:2,revertLane:Md(),action:l,hasEagerState:!1,eagerState:null,next:null},Ju(e)){if(n)throw Error(a(479))}else n=_f(e,s,l,2),n!==null&&Rn(n,e,2)}function Ju(e){var n=e.alternate;return e===Nt||n!==null&&n===Nt}function L0(e,n){Ss=Gu=!0;var s=e.pending;s===null?n.next=n:(n.next=s.next,s.next=n),e.pending=n}function z0(e,n,s){if((s&4194048)!==0){var l=n.lanes;l&=e.pendingLanes,s|=l,n.lanes=s,dr(e,s)}}var tc={readContext:en,use:Qu,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useLayoutEffect:be,useInsertionEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useSyncExternalStore:be,useId:be,useHostTransitionStatus:be,useFormState:be,useActionState:be,useOptimistic:be,useMemoCache:be,useCacheRefresh:be},B0={readContext:en,use:Qu,useCallback:function(e,n){return pn().memoizedState=[e,n===void 0?null:n],e},useContext:en,useEffect:w0,useImperativeHandle:function(e,n,s){s=s!=null?s.concat([e]):null,Zu(4194308,4,C0.bind(null,n,e),s)},useLayoutEffect:function(e,n){return Zu(4194308,4,e,n)},useInsertionEffect:function(e,n){Zu(4,2,e,n)},useMemo:function(e,n){var s=pn();n=n===void 0?null:n;var l=e();if(La){In(!0);try{e()}finally{In(!1)}}return s.memoizedState=[l,n],l},useReducer:function(e,n,s){var l=pn();if(s!==void 0){var h=s(n);if(La){In(!0);try{s(n)}finally{In(!1)}}}else h=n;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=ub.bind(null,Nt,e),[l.memoizedState,e]},useRef:function(e){var n=pn();return e={current:e},n.memoizedState=e},useState:function(e){e=Qf(e);var n=e.queue,s=P0.bind(null,Nt,n);return n.dispatch=s,[e.memoizedState,s]},useDebugValue:Wf,useDeferredValue:function(e,n){var s=pn();return Zf(s,e,n)},useTransition:function(){var e=Qf(!1);return e=M0.bind(null,Nt,e.queue,!0,!1),pn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,s){var l=Nt,h=pn();if(Ht){if(s===void 0)throw Error(a(407));s=s()}else{if(s=n(),re===null)throw Error(a(349));(zt&124)!==0||l0(l,n,s)}h.memoizedState=s;var d={value:s,getSnapshot:n};return h.queue=d,w0(c0.bind(null,l,d,e),[e]),l.flags|=2048,Rs(9,Wu(),u0.bind(null,l,d,s,n),null),s},useId:function(){var e=pn(),n=re.identifierPrefix;if(Ht){var s=Bi,l=zi;s=(l&~(1<<32-ln(l)-1)).toString(32)+s,n="«"+n+"R"+s,s=Yu++,0<s&&(n+="H"+s.toString(32)),n+="»"}else s=ib++,n="«"+n+"r"+s.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:td,useFormState:x0,useActionState:x0,useOptimistic:function(e){var n=pn();n.memoizedState=n.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=ed.bind(null,Nt,!0,s),s.dispatch=n,[e,n]},useMemoCache:qf,useCacheRefresh:function(){return pn().memoizedState=lb.bind(null,Nt)}},$0={readContext:en,use:Qu,useCallback:I0,useContext:en,useEffect:S0,useImperativeHandle:j0,useInsertionEffect:A0,useLayoutEffect:R0,useMemo:D0,useReducer:Xu,useRef:T0,useState:function(){return Xu(Ki)},useDebugValue:Wf,useDeferredValue:function(e,n){var s=Ae();return N0(s,Zt.memoizedState,e,n)},useTransition:function(){var e=Xu(Ki)[0],n=Ae().memoizedState;return[typeof e=="boolean"?e:nl(e),n]},useSyncExternalStore:o0,useId:k0,useHostTransitionStatus:td,useFormState:_0,useActionState:_0,useOptimistic:function(e,n){var s=Ae();return d0(s,Zt,e,n)},useMemoCache:qf,useCacheRefresh:U0},cb={readContext:en,use:Qu,useCallback:I0,useContext:en,useEffect:S0,useImperativeHandle:j0,useInsertionEffect:A0,useLayoutEffect:R0,useMemo:D0,useReducer:Yf,useRef:T0,useState:function(){return Yf(Ki)},useDebugValue:Wf,useDeferredValue:function(e,n){var s=Ae();return Zt===null?Zf(s,e,n):N0(s,Zt.memoizedState,e,n)},useTransition:function(){var e=Yf(Ki)[0],n=Ae().memoizedState;return[typeof e=="boolean"?e:nl(e),n]},useSyncExternalStore:o0,useId:k0,useHostTransitionStatus:td,useFormState:b0,useActionState:b0,useOptimistic:function(e,n){var s=Ae();return Zt!==null?d0(s,Zt,e,n):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:qf,useCacheRefresh:U0},Cs=null,al=0;function ec(e){var n=al;return al+=1,Cs===null&&(Cs=[]),Jg(Cs,e,n)}function sl(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function nc(e,n){throw n.$$typeof===b?Error(a(525)):(e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function F0(e){var n=e._init;return n(e._payload)}function K0(e){function n(L,V){if(e){var B=L.deletions;B===null?(L.deletions=[V],L.flags|=16):B.push(V)}}function s(L,V){if(!e)return null;for(;V!==null;)n(L,V),V=V.sibling;return null}function l(L){for(var V=new Map;L!==null;)L.key!==null?V.set(L.key,L):V.set(L.index,L),L=L.sibling;return V}function h(L,V){return L=Li(L,V),L.index=0,L.sibling=null,L}function d(L,V,B){return L.index=B,e?(B=L.alternate,B!==null?(B=B.index,B<V?(L.flags|=67108866,V):B):(L.flags|=67108866,V)):(L.flags|=1048576,V)}function E(L){return e&&L.alternate===null&&(L.flags|=67108866),L}function T(L,V,B,nt){return V===null||V.tag!==6?(V=bf(B,L.mode,nt),V.return=L,V):(V=h(V,B),V.return=L,V)}function D(L,V,B,nt){var pt=B.type;return pt===U?et(L,V,B.props.children,nt,B.key):V!==null&&(V.elementType===pt||typeof pt=="object"&&pt!==null&&pt.$$typeof===R&&F0(pt)===V.type)?(V=h(V,B.props),sl(V,B),V.return=L,V):(V=Pu(B.type,B.key,B.props,null,L.mode,nt),sl(V,B),V.return=L,V)}function K(L,V,B,nt){return V===null||V.tag!==4||V.stateNode.containerInfo!==B.containerInfo||V.stateNode.implementation!==B.implementation?(V=Tf(B,L.mode,nt),V.return=L,V):(V=h(V,B.children||[]),V.return=L,V)}function et(L,V,B,nt,pt){return V===null||V.tag!==7?(V=Da(B,L.mode,nt,pt),V.return=L,V):(V=h(V,B),V.return=L,V)}function it(L,V,B){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=bf(""+V,L.mode,B),V.return=L,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case S:return B=Pu(V.type,V.key,V.props,null,L.mode,B),sl(B,V),B.return=L,B;case I:return V=Tf(V,L.mode,B),V.return=L,V;case R:var nt=V._init;return V=nt(V._payload),it(L,V,B)}if(ne(V)||z(V))return V=Da(V,L.mode,B,null),V.return=L,V;if(typeof V.then=="function")return it(L,ec(V),B);if(V.$$typeof===Z)return it(L,$u(L,V),B);nc(L,V)}return null}function q(L,V,B,nt){var pt=V!==null?V.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return pt!==null?null:T(L,V,""+B,nt);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case S:return B.key===pt?D(L,V,B,nt):null;case I:return B.key===pt?K(L,V,B,nt):null;case R:return pt=B._init,B=pt(B._payload),q(L,V,B,nt)}if(ne(B)||z(B))return pt!==null?null:et(L,V,B,nt,null);if(typeof B.then=="function")return q(L,V,ec(B),nt);if(B.$$typeof===Z)return q(L,V,$u(L,B),nt);nc(L,B)}return null}function G(L,V,B,nt,pt){if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return L=L.get(B)||null,T(V,L,""+nt,pt);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case S:return L=L.get(nt.key===null?B:nt.key)||null,D(V,L,nt,pt);case I:return L=L.get(nt.key===null?B:nt.key)||null,K(V,L,nt,pt);case R:var Mt=nt._init;return nt=Mt(nt._payload),G(L,V,B,nt,pt)}if(ne(nt)||z(nt))return L=L.get(B)||null,et(V,L,nt,pt,null);if(typeof nt.then=="function")return G(L,V,B,ec(nt),pt);if(nt.$$typeof===Z)return G(L,V,B,$u(V,nt),pt);nc(V,nt)}return null}function wt(L,V,B,nt){for(var pt=null,Mt=null,vt=V,bt=V=0,$e=null;vt!==null&&bt<B.length;bt++){vt.index>bt?($e=vt,vt=null):$e=vt.sibling;var Ft=q(L,vt,B[bt],nt);if(Ft===null){vt===null&&(vt=$e);break}e&&vt&&Ft.alternate===null&&n(L,vt),V=d(Ft,V,bt),Mt===null?pt=Ft:Mt.sibling=Ft,Mt=Ft,vt=$e}if(bt===B.length)return s(L,vt),Ht&&Ma(L,bt),pt;if(vt===null){for(;bt<B.length;bt++)vt=it(L,B[bt],nt),vt!==null&&(V=d(vt,V,bt),Mt===null?pt=vt:Mt.sibling=vt,Mt=vt);return Ht&&Ma(L,bt),pt}for(vt=l(vt);bt<B.length;bt++)$e=G(vt,L,bt,B[bt],nt),$e!==null&&(e&&$e.alternate!==null&&vt.delete($e.key===null?bt:$e.key),V=d($e,V,bt),Mt===null?pt=$e:Mt.sibling=$e,Mt=$e);return e&&vt.forEach(function(Kr){return n(L,Kr)}),Ht&&Ma(L,bt),pt}function Et(L,V,B,nt){if(B==null)throw Error(a(151));for(var pt=null,Mt=null,vt=V,bt=V=0,$e=null,Ft=B.next();vt!==null&&!Ft.done;bt++,Ft=B.next()){vt.index>bt?($e=vt,vt=null):$e=vt.sibling;var Kr=q(L,vt,Ft.value,nt);if(Kr===null){vt===null&&(vt=$e);break}e&&vt&&Kr.alternate===null&&n(L,vt),V=d(Kr,V,bt),Mt===null?pt=Kr:Mt.sibling=Kr,Mt=Kr,vt=$e}if(Ft.done)return s(L,vt),Ht&&Ma(L,bt),pt;if(vt===null){for(;!Ft.done;bt++,Ft=B.next())Ft=it(L,Ft.value,nt),Ft!==null&&(V=d(Ft,V,bt),Mt===null?pt=Ft:Mt.sibling=Ft,Mt=Ft);return Ht&&Ma(L,bt),pt}for(vt=l(vt);!Ft.done;bt++,Ft=B.next())Ft=G(vt,L,bt,Ft.value,nt),Ft!==null&&(e&&Ft.alternate!==null&&vt.delete(Ft.key===null?bt:Ft.key),V=d(Ft,V,bt),Mt===null?pt=Ft:Mt.sibling=Ft,Mt=Ft);return e&&vt.forEach(function(hT){return n(L,hT)}),Ht&&Ma(L,bt),pt}function te(L,V,B,nt){if(typeof B=="object"&&B!==null&&B.type===U&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case S:t:{for(var pt=B.key;V!==null;){if(V.key===pt){if(pt=B.type,pt===U){if(V.tag===7){s(L,V.sibling),nt=h(V,B.props.children),nt.return=L,L=nt;break t}}else if(V.elementType===pt||typeof pt=="object"&&pt!==null&&pt.$$typeof===R&&F0(pt)===V.type){s(L,V.sibling),nt=h(V,B.props),sl(nt,B),nt.return=L,L=nt;break t}s(L,V);break}else n(L,V);V=V.sibling}B.type===U?(nt=Da(B.props.children,L.mode,nt,B.key),nt.return=L,L=nt):(nt=Pu(B.type,B.key,B.props,null,L.mode,nt),sl(nt,B),nt.return=L,L=nt)}return E(L);case I:t:{for(pt=B.key;V!==null;){if(V.key===pt)if(V.tag===4&&V.stateNode.containerInfo===B.containerInfo&&V.stateNode.implementation===B.implementation){s(L,V.sibling),nt=h(V,B.children||[]),nt.return=L,L=nt;break t}else{s(L,V);break}else n(L,V);V=V.sibling}nt=Tf(B,L.mode,nt),nt.return=L,L=nt}return E(L);case R:return pt=B._init,B=pt(B._payload),te(L,V,B,nt)}if(ne(B))return wt(L,V,B,nt);if(z(B)){if(pt=z(B),typeof pt!="function")throw Error(a(150));return B=pt.call(B),Et(L,V,B,nt)}if(typeof B.then=="function")return te(L,V,ec(B),nt);if(B.$$typeof===Z)return te(L,V,$u(L,B),nt);nc(L,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,V!==null&&V.tag===6?(s(L,V.sibling),nt=h(V,B),nt.return=L,L=nt):(s(L,V),nt=bf(B,L.mode,nt),nt.return=L,L=nt),E(L)):s(L,V)}return function(L,V,B,nt){try{al=0;var pt=te(L,V,B,nt);return Cs=null,pt}catch(vt){if(vt===Xo||vt===Ku)throw vt;var Mt=bn(29,vt,null,L.mode);return Mt.lanes=nt,Mt.return=L,Mt}finally{}}}var js=K0(!0),H0=K0(!1),Ln=rt(null),mi=null;function jr(e){var n=e.alternate;ht(Ve,Ve.current&1),ht(Ln,e),mi===null&&(n===null||ws.current!==null||n.memoizedState!==null)&&(mi=e)}function q0(e){if(e.tag===22){if(ht(Ve,Ve.current),ht(Ln,e),mi===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(mi=e)}}else Ir()}function Ir(){ht(Ve,Ve.current),ht(Ln,Ln.current)}function Hi(e){ct(Ln),mi===e&&(mi=null),ct(Ve)}var Ve=rt(0);function ic(e){for(var n=e;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||Hd(s)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function nd(e,n,s,l){n=e.memoizedState,s=s(l,n),s=s==null?n:_({},n,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var id={enqueueSetState:function(e,n,s){e=e._reactInternals;var l=An(),h=Ar(l);h.payload=n,s!=null&&(h.callback=s),n=Rr(e,h,l),n!==null&&(Rn(n,e,l),Zo(n,e,l))},enqueueReplaceState:function(e,n,s){e=e._reactInternals;var l=An(),h=Ar(l);h.tag=1,h.payload=n,s!=null&&(h.callback=s),n=Rr(e,h,l),n!==null&&(Rn(n,e,l),Zo(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var s=An(),l=Ar(s);l.tag=2,n!=null&&(l.callback=n),n=Rr(e,l,s),n!==null&&(Rn(n,e,s),Zo(n,e,s))}};function G0(e,n,s,l,h,d,E){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,E):n.prototype&&n.prototype.isPureReactComponent?!$o(s,l)||!$o(h,d):!0}function Y0(e,n,s,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,l),n.state!==e&&id.enqueueReplaceState(n,n.state,null)}function za(e,n){var s=n;if("ref"in n){s={};for(var l in n)l!=="ref"&&(s[l]=n[l])}if(e=e.defaultProps){s===n&&(s=_({},s));for(var h in e)s[h]===void 0&&(s[h]=e[h])}return s}var rc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Q0(e){rc(e)}function X0(e){console.error(e)}function W0(e){rc(e)}function ac(e,n){try{var s=e.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function Z0(e,n,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function rd(e,n,s){return s=Ar(s),s.tag=3,s.payload={element:null},s.callback=function(){ac(e,n)},s}function J0(e){return e=Ar(e),e.tag=3,e}function ty(e,n,s,l){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;e.payload=function(){return h(d)},e.callback=function(){Z0(n,s,l)}}var E=s.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(e.callback=function(){Z0(n,s,l),typeof h!="function"&&(kr===null?kr=new Set([this]):kr.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function hb(e,n,s,l,h){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=s.alternate,n!==null&&Go(n,s,h,!0),s=Ln.current,s!==null){switch(s.tag){case 13:return mi===null?Cd():s.alternate===null&&ye===0&&(ye=3),s.flags&=-257,s.flags|=65536,s.lanes=h,l===Mf?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([l]):n.add(l),Id(e,l,h)),!1;case 22:return s.flags|=65536,l===Mf?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([l]):s.add(l)),Id(e,l,h)),!1}throw Error(a(435,s.tag))}return Id(e,l,h),Cd(),!1}if(Ht)return n=Ln.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=h,l!==Af&&(e=Error(a(422),{cause:l}),qo(Vn(e,s)))):(l!==Af&&(n=Error(a(423),{cause:l}),qo(Vn(n,s))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=Vn(l,s),h=rd(e.stateNode,l,h),kf(e,h),ye!==4&&(ye=2)),!1;var d=Error(a(520),{cause:l});if(d=Vn(d,s),dl===null?dl=[d]:dl.push(d),ye!==4&&(ye=2),n===null)return!0;l=Vn(l,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,e=h&-h,s.lanes|=e,e=rd(s.stateNode,l,e),kf(s,e),!1;case 1:if(n=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(kr===null||!kr.has(d))))return s.flags|=65536,h&=-h,s.lanes|=h,h=J0(h),ty(h,e,s,l),kf(s,h),!1}s=s.return}while(s!==null);return!1}var ey=Error(a(461)),ze=!1;function Ge(e,n,s,l){n.child=e===null?H0(n,null,s,l):js(n,e.child,s,l)}function ny(e,n,s,l,h){s=s.render;var d=n.ref;if("ref"in l){var E={};for(var T in l)T!=="ref"&&(E[T]=l[T])}else E=l;return Ua(n),l=Bf(e,n,s,E,d,h),T=$f(),e!==null&&!ze?(Ff(e,n,h),qi(e,n,h)):(Ht&&T&&wf(n),n.flags|=1,Ge(e,n,l,h),n.child)}function iy(e,n,s,l,h){if(e===null){var d=s.type;return typeof d=="function"&&!Ef(d)&&d.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=d,ry(e,n,d,l,h)):(e=Pu(s.type,null,l,n,n.mode,h),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!fd(e,h)){var E=d.memoizedProps;if(s=s.compare,s=s!==null?s:$o,s(E,l)&&e.ref===n.ref)return qi(e,n,h)}return n.flags|=1,e=Li(d,l),e.ref=n.ref,e.return=n,n.child=e}function ry(e,n,s,l,h){if(e!==null){var d=e.memoizedProps;if($o(d,l)&&e.ref===n.ref)if(ze=!1,n.pendingProps=l=d,fd(e,h))(e.flags&131072)!==0&&(ze=!0);else return n.lanes=e.lanes,qi(e,n,h)}return ad(e,n,s,l,h)}function ay(e,n,s){var l=n.pendingProps,h=l.children,d=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((n.flags&128)!==0){if(l=d!==null?d.baseLanes|s:s,e!==null){for(h=n.child=e.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;n.childLanes=d&~l}else n.childLanes=0,n.child=null;return sy(e,n,l,s)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Fu(n,d!==null?d.cachePool:null),d!==null?r0(n,d):Pf(),q0(n);else return n.lanes=n.childLanes=536870912,sy(e,n,d!==null?d.baseLanes|s:s,s)}else d!==null?(Fu(n,d.cachePool),r0(n,d),Ir(),n.memoizedState=null):(e!==null&&Fu(n,null),Pf(),Ir());return Ge(e,n,h,s),n.child}function sy(e,n,s,l){var h=Nf();return h=h===null?null:{parent:Oe._currentValue,pool:h},n.memoizedState={baseLanes:s,cachePool:h},e!==null&&Fu(n,null),Pf(),q0(n),e!==null&&Go(e,n,l,!0),null}function sc(e,n){var s=n.ref;if(s===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(n.flags|=4194816)}}function ad(e,n,s,l,h){return Ua(n),s=Bf(e,n,s,l,void 0,h),l=$f(),e!==null&&!ze?(Ff(e,n,h),qi(e,n,h)):(Ht&&l&&wf(n),n.flags|=1,Ge(e,n,s,h),n.child)}function oy(e,n,s,l,h,d){return Ua(n),n.updateQueue=null,s=s0(n,l,s,h),a0(e),l=$f(),e!==null&&!ze?(Ff(e,n,d),qi(e,n,d)):(Ht&&l&&wf(n),n.flags|=1,Ge(e,n,s,d),n.child)}function ly(e,n,s,l,h){if(Ua(n),n.stateNode===null){var d=xs,E=s.contextType;typeof E=="object"&&E!==null&&(d=en(E)),d=new s(l,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=id,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=l,d.state=n.memoizedState,d.refs={},Of(n),E=s.contextType,d.context=typeof E=="object"&&E!==null?en(E):xs,d.state=n.memoizedState,E=s.getDerivedStateFromProps,typeof E=="function"&&(nd(n,s,E,l),d.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(E=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),E!==d.state&&id.enqueueReplaceState(d,d.state,null),tl(n,l,d,h),Jo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(e===null){d=n.stateNode;var T=n.memoizedProps,D=za(s,T);d.props=D;var K=d.context,et=s.contextType;E=xs,typeof et=="object"&&et!==null&&(E=en(et));var it=s.getDerivedStateFromProps;et=typeof it=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,et||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||K!==E)&&Y0(n,d,l,E),Sr=!1;var q=n.memoizedState;d.state=q,tl(n,l,d,h),Jo(),K=n.memoizedState,T||q!==K||Sr?(typeof it=="function"&&(nd(n,s,it,l),K=n.memoizedState),(D=Sr||G0(n,s,D,l,q,K,E))?(et||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=K),d.props=l,d.state=K,d.context=E,l=D):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{d=n.stateNode,Vf(e,n),E=n.memoizedProps,et=za(s,E),d.props=et,it=n.pendingProps,q=d.context,K=s.contextType,D=xs,typeof K=="object"&&K!==null&&(D=en(K)),T=s.getDerivedStateFromProps,(K=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E!==it||q!==D)&&Y0(n,d,l,D),Sr=!1,q=n.memoizedState,d.state=q,tl(n,l,d,h),Jo();var G=n.memoizedState;E!==it||q!==G||Sr||e!==null&&e.dependencies!==null&&Bu(e.dependencies)?(typeof T=="function"&&(nd(n,s,T,l),G=n.memoizedState),(et=Sr||G0(n,s,et,l,q,G,D)||e!==null&&e.dependencies!==null&&Bu(e.dependencies))?(K||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,G,D),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,G,D)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||E===e.memoizedProps&&q===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&q===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=G),d.props=l,d.state=G,d.context=D,l=et):(typeof d.componentDidUpdate!="function"||E===e.memoizedProps&&q===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&q===e.memoizedState||(n.flags|=1024),l=!1)}return d=l,sc(e,n),l=(n.flags&128)!==0,d||l?(d=n.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&l?(n.child=js(n,e.child,null,h),n.child=js(n,null,s,h)):Ge(e,n,s,h),n.memoizedState=d.state,e=n.child):e=qi(e,n,h),e}function uy(e,n,s,l){return Ho(),n.flags|=256,Ge(e,n,s,l),n.child}var sd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function od(e){return{baseLanes:e,cachePool:Xg()}}function ld(e,n,s){return e=e!==null?e.childLanes&~s:0,n&&(e|=zn),e}function cy(e,n,s){var l=n.pendingProps,h=!1,d=(n.flags&128)!==0,E;if((E=d)||(E=e!==null&&e.memoizedState===null?!1:(Ve.current&2)!==0),E&&(h=!0,n.flags&=-129),E=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ht){if(h?jr(n):Ir(),Ht){var T=ge,D;if(D=T){t:{for(D=T,T=pi;D.nodeType!==8;){if(!T){T=null;break t}if(D=ei(D.nextSibling),D===null){T=null;break t}}T=D}T!==null?(n.memoizedState={dehydrated:T,treeContext:Na!==null?{id:zi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},D=bn(18,null,null,0),D.stateNode=T,D.return=n,n.child=D,fn=n,ge=null,D=!0):D=!1}D||Va(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Hd(T)?n.lanes=32:n.lanes=536870912,null;Hi(n)}return T=l.children,l=l.fallback,h?(Ir(),h=n.mode,T=oc({mode:"hidden",children:T},h),l=Da(l,h,s,null),T.return=n,l.return=n,T.sibling=l,n.child=T,h=n.child,h.memoizedState=od(s),h.childLanes=ld(e,E,s),n.memoizedState=sd,l):(jr(n),ud(n,T))}if(D=e.memoizedState,D!==null&&(T=D.dehydrated,T!==null)){if(d)n.flags&256?(jr(n),n.flags&=-257,n=cd(e,n,s)):n.memoizedState!==null?(Ir(),n.child=e.child,n.flags|=128,n=null):(Ir(),h=l.fallback,T=n.mode,l=oc({mode:"visible",children:l.children},T),h=Da(h,T,s,null),h.flags|=2,l.return=n,h.return=n,l.sibling=h,n.child=l,js(n,e.child,null,s),l=n.child,l.memoizedState=od(s),l.childLanes=ld(e,E,s),n.memoizedState=sd,n=h);else if(jr(n),Hd(T)){if(E=T.nextSibling&&T.nextSibling.dataset,E)var K=E.dgst;E=K,l=Error(a(419)),l.stack="",l.digest=E,qo({value:l,source:null,stack:null}),n=cd(e,n,s)}else if(ze||Go(e,n,s,!1),E=(s&e.childLanes)!==0,ze||E){if(E=re,E!==null&&(l=s&-s,l=(l&42)!==0?1:So(l),l=(l&(E.suspendedLanes|s))!==0?0:l,l!==0&&l!==D.retryLane))throw D.retryLane=l,vs(e,l),Rn(E,e,l),ey;T.data==="$?"||Cd(),n=cd(e,n,s)}else T.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=D.treeContext,ge=ei(T.nextSibling),fn=n,Ht=!0,Oa=null,pi=!1,e!==null&&(Un[Pn++]=zi,Un[Pn++]=Bi,Un[Pn++]=Na,zi=e.id,Bi=e.overflow,Na=n),n=ud(n,l.children),n.flags|=4096);return n}return h?(Ir(),h=l.fallback,T=n.mode,D=e.child,K=D.sibling,l=Li(D,{mode:"hidden",children:l.children}),l.subtreeFlags=D.subtreeFlags&65011712,K!==null?h=Li(K,h):(h=Da(h,T,s,null),h.flags|=2),h.return=n,l.return=n,l.sibling=h,n.child=l,l=h,h=n.child,T=e.child.memoizedState,T===null?T=od(s):(D=T.cachePool,D!==null?(K=Oe._currentValue,D=D.parent!==K?{parent:K,pool:K}:D):D=Xg(),T={baseLanes:T.baseLanes|s,cachePool:D}),h.memoizedState=T,h.childLanes=ld(e,E,s),n.memoizedState=sd,l):(jr(n),s=e.child,e=s.sibling,s=Li(s,{mode:"visible",children:l.children}),s.return=n,s.sibling=null,e!==null&&(E=n.deletions,E===null?(n.deletions=[e],n.flags|=16):E.push(e)),n.child=s,n.memoizedState=null,s)}function ud(e,n){return n=oc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function oc(e,n){return e=bn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function cd(e,n,s){return js(n,e.child,null,s),e=ud(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function hy(e,n,s){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),Cf(e.return,n,s)}function hd(e,n,s,l,h){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:h}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=s,d.tailMode=h)}function fy(e,n,s){var l=n.pendingProps,h=l.revealOrder,d=l.tail;if(Ge(e,n,l.children,s),l=Ve.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hy(e,s,n);else if(e.tag===19)hy(e,s,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(ht(Ve,l),h){case"forwards":for(s=n.child,h=null;s!==null;)e=s.alternate,e!==null&&ic(e)===null&&(h=s),s=s.sibling;s=h,s===null?(h=n.child,n.child=null):(h=s.sibling,s.sibling=null),hd(n,!1,h,s,d);break;case"backwards":for(s=null,h=n.child,n.child=null;h!==null;){if(e=h.alternate,e!==null&&ic(e)===null){n.child=h;break}e=h.sibling,h.sibling=s,s=h,h=e}hd(n,!0,s,null,d);break;case"together":hd(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function qi(e,n,s){if(e!==null&&(n.dependencies=e.dependencies),Vr|=n.lanes,(s&n.childLanes)===0)if(e!==null){if(Go(e,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,s=Li(e,e.pendingProps),n.child=s,s.return=n;e.sibling!==null;)e=e.sibling,s=s.sibling=Li(e,e.pendingProps),s.return=n;s.sibling=null}return n.child}function fd(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Bu(e)))}function fb(e,n,s){switch(n.tag){case 3:Lt(n,n.stateNode.containerInfo),wr(n,Oe,e.memoizedState.cache),Ho();break;case 27:case 5:Ii(n);break;case 4:Lt(n,n.stateNode.containerInfo);break;case 10:wr(n,n.type,n.memoizedProps.value);break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(jr(n),n.flags|=128,null):(s&n.child.childLanes)!==0?cy(e,n,s):(jr(n),e=qi(e,n,s),e!==null?e.sibling:null);jr(n);break;case 19:var h=(e.flags&128)!==0;if(l=(s&n.childLanes)!==0,l||(Go(e,n,s,!1),l=(s&n.childLanes)!==0),h){if(l)return fy(e,n,s);n.flags|=128}if(h=n.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),ht(Ve,Ve.current),l)break;return null;case 22:case 23:return n.lanes=0,ay(e,n,s);case 24:wr(n,Oe,e.memoizedState.cache)}return qi(e,n,s)}function dy(e,n,s){if(e!==null)if(e.memoizedProps!==n.pendingProps)ze=!0;else{if(!fd(e,s)&&(n.flags&128)===0)return ze=!1,fb(e,n,s);ze=(e.flags&131072)!==0}else ze=!1,Ht&&(n.flags&1048576)!==0&&Fg(n,zu,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var l=n.elementType,h=l._init;if(l=h(l._payload),n.type=l,typeof l=="function")Ef(l)?(e=za(l,e),n.tag=1,n=ly(null,n,l,e,s)):(n.tag=0,n=ad(null,n,l,e,s));else{if(l!=null){if(h=l.$$typeof,h===lt){n.tag=11,n=ny(null,n,l,e,s);break t}else if(h===j){n.tag=14,n=iy(null,n,l,e,s);break t}}throw n=ue(l)||l,Error(a(306,n,""))}}return n;case 0:return ad(e,n,n.type,n.pendingProps,s);case 1:return l=n.type,h=za(l,n.pendingProps),ly(e,n,l,h,s);case 3:t:{if(Lt(n,n.stateNode.containerInfo),e===null)throw Error(a(387));l=n.pendingProps;var d=n.memoizedState;h=d.element,Vf(e,n),tl(n,l,null,s);var E=n.memoizedState;if(l=E.cache,wr(n,Oe,l),l!==d.cache&&jf(n,[Oe],s,!0),Jo(),l=E.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:E.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=uy(e,n,l,s);break t}else if(l!==h){h=Vn(Error(a(424)),n),qo(h),n=uy(e,n,l,s);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ge=ei(e.firstChild),fn=n,Ht=!0,Oa=null,pi=!0,s=H0(n,null,l,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Ho(),l===h){n=qi(e,n,s);break t}Ge(e,n,l,s)}n=n.child}return n;case 26:return sc(e,n),e===null?(s=y1(n.type,null,n.pendingProps,null))?n.memoizedState=s:Ht||(s=n.type,e=n.pendingProps,l=Ec(xt.current).createElement(s),l[xe]=n,l[qe]=e,Qe(l,s,e),_e(l),n.stateNode=l):n.memoizedState=y1(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ii(n),e===null&&Ht&&(l=n.stateNode=p1(n.type,n.pendingProps,xt.current),fn=n,pi=!0,h=ge,Lr(n.type)?(qd=h,ge=ei(l.firstChild)):ge=h),Ge(e,n,n.pendingProps.children,s),sc(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ht&&((h=l=ge)&&(l=zb(l,n.type,n.pendingProps,pi),l!==null?(n.stateNode=l,fn=n,ge=ei(l.firstChild),pi=!1,h=!0):h=!1),h||Va(n)),Ii(n),h=n.type,d=n.pendingProps,E=e!==null?e.memoizedProps:null,l=d.children,$d(h,d)?l=null:E!==null&&$d(h,E)&&(n.flags|=32),n.memoizedState!==null&&(h=Bf(e,n,rb,null,null,s),bl._currentValue=h),sc(e,n),Ge(e,n,l,s),n.child;case 6:return e===null&&Ht&&((e=s=ge)&&(s=Bb(s,n.pendingProps,pi),s!==null?(n.stateNode=s,fn=n,ge=null,e=!0):e=!1),e||Va(n)),null;case 13:return cy(e,n,s);case 4:return Lt(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=js(n,null,l,s):Ge(e,n,l,s),n.child;case 11:return ny(e,n,n.type,n.pendingProps,s);case 7:return Ge(e,n,n.pendingProps,s),n.child;case 8:return Ge(e,n,n.pendingProps.children,s),n.child;case 12:return Ge(e,n,n.pendingProps.children,s),n.child;case 10:return l=n.pendingProps,wr(n,n.type,l.value),Ge(e,n,l.children,s),n.child;case 9:return h=n.type._context,l=n.pendingProps.children,Ua(n),h=en(h),l=l(h),n.flags|=1,Ge(e,n,l,s),n.child;case 14:return iy(e,n,n.type,n.pendingProps,s);case 15:return ry(e,n,n.type,n.pendingProps,s);case 19:return fy(e,n,s);case 31:return l=n.pendingProps,s=n.mode,l={mode:l.mode,children:l.children},e===null?(s=oc(l,s),s.ref=n.ref,n.child=s,s.return=n,n=s):(s=Li(e.child,l),s.ref=n.ref,n.child=s,s.return=n,n=s),n;case 22:return ay(e,n,s);case 24:return Ua(n),l=en(Oe),e===null?(h=Nf(),h===null&&(h=re,d=If(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=s),h=d),n.memoizedState={parent:l,cache:h},Of(n),wr(n,Oe,h)):((e.lanes&s)!==0&&(Vf(e,n),tl(n,null,null,s),Jo()),h=e.memoizedState,d=n.memoizedState,h.parent!==l?(h={parent:l,cache:l},n.memoizedState=h,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=h),wr(n,Oe,l)):(l=d.cache,wr(n,Oe,l),l!==h.cache&&jf(n,[Oe],s,!0))),Ge(e,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function Gi(e){e.flags|=4}function py(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!b1(n)){if(n=Ln.current,n!==null&&((zt&4194048)===zt?mi!==null:(zt&62914560)!==zt&&(zt&536870912)===0||n!==mi))throw Wo=Mf,Wg;e.flags|=8192}}function lc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?hr():536870912,e.lanes|=n,Ms|=n)}function ol(e,n){if(!Ht)switch(e.tailMode){case"hidden":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function de(e){var n=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(n)for(var h=e.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=s,n}function db(e,n,s){var l=n.pendingProps;switch(Sf(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(n),null;case 1:return de(n),null;case 3:return s=n.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),Fi(Oe),De(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Ko(n)?Gi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,qg())),de(n),null;case 26:return s=n.memoizedState,e===null?(Gi(n),s!==null?(de(n),py(n,s)):(de(n),n.flags&=-16777217)):s?s!==e.memoizedState?(Gi(n),de(n),py(n,s)):(de(n),n.flags&=-16777217):(e.memoizedProps!==l&&Gi(n),de(n),n.flags&=-16777217),null;case 27:Hn(n),s=xt.current;var h=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==l&&Gi(n);else{if(!l){if(n.stateNode===null)throw Error(a(166));return de(n),null}e=gt.current,Ko(n)?Kg(n):(e=p1(h,l,s),n.stateNode=e,Gi(n))}return de(n),null;case 5:if(Hn(n),s=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&Gi(n);else{if(!l){if(n.stateNode===null)throw Error(a(166));return de(n),null}if(e=gt.current,Ko(n))Kg(n);else{switch(h=Ec(xt.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?h.createElement(s,{is:l.is}):h.createElement(s)}}e[xe]=n,e[qe]=l;t:for(h=n.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break t;for(;h.sibling===null;){if(h.return===null||h.return===n)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}n.stateNode=e;t:switch(Qe(e,s,l),s){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Gi(n)}}return de(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==l&&Gi(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(a(166));if(e=xt.current,Ko(n)){if(e=n.stateNode,s=n.memoizedProps,l=null,h=fn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[xe]=n,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||o1(e.nodeValue,s)),e||Va(n)}else e=Ec(e).createTextNode(l),e[xe]=n,n.stateNode=e}return de(n),null;case 13:if(l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Ko(n),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=n.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[xe]=n}else Ho(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;de(n),h=!1}else h=qg(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return n.flags&256?(Hi(n),n):(Hi(n),null)}if(Hi(n),(n.flags&128)!==0)return n.lanes=s,n;if(s=l!==null,e=e!==null&&e.memoizedState!==null,s){l=n.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return s!==e&&s&&(n.child.flags|=8192),lc(n,n.updateQueue),de(n),null;case 4:return De(),e===null&&Ud(n.stateNode.containerInfo),de(n),null;case 10:return Fi(n.type),de(n),null;case 19:if(ct(Ve),h=n.memoizedState,h===null)return de(n),null;if(l=(n.flags&128)!==0,d=h.rendering,d===null)if(l)ol(h,!1);else{if(ye!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=ic(e),d!==null){for(n.flags|=128,ol(h,!1),e=d.updateQueue,n.updateQueue=e,lc(n,e),n.subtreeFlags=0,e=s,s=n.child;s!==null;)$g(s,e),s=s.sibling;return ht(Ve,Ve.current&1|2),n.child}e=e.sibling}h.tail!==null&&dn()>hc&&(n.flags|=128,l=!0,ol(h,!1),n.lanes=4194304)}else{if(!l)if(e=ic(d),e!==null){if(n.flags|=128,l=!0,e=e.updateQueue,n.updateQueue=e,lc(n,e),ol(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!Ht)return de(n),null}else 2*dn()-h.renderingStartTime>hc&&s!==536870912&&(n.flags|=128,l=!0,ol(h,!1),n.lanes=4194304);h.isBackwards?(d.sibling=n.child,n.child=d):(e=h.last,e!==null?e.sibling=d:n.child=d,h.last=d)}return h.tail!==null?(n=h.tail,h.rendering=n,h.tail=n.sibling,h.renderingStartTime=dn(),n.sibling=null,e=Ve.current,ht(Ve,l?e&1|2:e&1),n):(de(n),null);case 22:case 23:return Hi(n),Lf(),l=n.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(s&536870912)!==0&&(n.flags&128)===0&&(de(n),n.subtreeFlags&6&&(n.flags|=8192)):de(n),s=n.updateQueue,s!==null&&lc(n,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==s&&(n.flags|=2048),e!==null&&ct(Pa),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Fi(Oe),de(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function pb(e,n){switch(Sf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Fi(Oe),De(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Hn(n),null;case 13:if(Hi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));Ho()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ct(Ve),null;case 4:return De(),null;case 10:return Fi(n.type),null;case 22:case 23:return Hi(n),Lf(),e!==null&&ct(Pa),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Fi(Oe),null;case 25:return null;default:return null}}function my(e,n){switch(Sf(n),n.tag){case 3:Fi(Oe),De();break;case 26:case 27:case 5:Hn(n);break;case 4:De();break;case 13:Hi(n);break;case 19:ct(Ve);break;case 10:Fi(n.type);break;case 22:case 23:Hi(n),Lf(),e!==null&&ct(Pa);break;case 24:Fi(Oe)}}function ll(e,n){try{var s=n.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var h=l.next;s=h;do{if((s.tag&e)===e){l=void 0;var d=s.create,E=s.inst;l=d(),E.destroy=l}s=s.next}while(s!==h)}}catch(T){ee(n,n.return,T)}}function Dr(e,n,s){try{var l=n.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&e)===e){var E=l.inst,T=E.destroy;if(T!==void 0){E.destroy=void 0,h=n;var D=s,K=T;try{K()}catch(et){ee(h,D,et)}}}l=l.next}while(l!==d)}}catch(et){ee(n,n.return,et)}}function gy(e){var n=e.updateQueue;if(n!==null){var s=e.stateNode;try{i0(n,s)}catch(l){ee(e,e.return,l)}}}function yy(e,n,s){s.props=za(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){ee(e,n,l)}}function ul(e,n){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(h){ee(e,n,h)}}function gi(e,n){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(h){ee(e,n,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){ee(e,n,h)}else s.current=null}function vy(e){var n=e.type,s=e.memoizedProps,l=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(h){ee(e,e.return,h)}}function dd(e,n,s){try{var l=e.stateNode;Vb(l,e.type,s,n),l[qe]=n}catch(h){ee(e,e.return,h)}}function xy(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Lr(e.type)||e.tag===4}function pd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||xy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Lr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function md(e,n,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,n):(n=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,n.appendChild(e),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=_c));else if(l!==4&&(l===27&&Lr(e.type)&&(s=e.stateNode,n=null),e=e.child,e!==null))for(md(e,n,s),e=e.sibling;e!==null;)md(e,n,s),e=e.sibling}function uc(e,n,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?s.insertBefore(e,n):s.appendChild(e);else if(l!==4&&(l===27&&Lr(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(uc(e,n,s),e=e.sibling;e!==null;)uc(e,n,s),e=e.sibling}function _y(e){var n=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,h=n.attributes;h.length;)n.removeAttributeNode(h[0]);Qe(n,l,s),n[xe]=e,n[qe]=s}catch(d){ee(e,e.return,d)}}var Yi=!1,Te=!1,gd=!1,Ey=typeof WeakSet=="function"?WeakSet:Set,Be=null;function mb(e,n){if(e=e.containerInfo,zd=Rc,e=Ng(e),pf(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break t}var E=0,T=-1,D=-1,K=0,et=0,it=e,q=null;e:for(;;){for(var G;it!==s||h!==0&&it.nodeType!==3||(T=E+h),it!==d||l!==0&&it.nodeType!==3||(D=E+l),it.nodeType===3&&(E+=it.nodeValue.length),(G=it.firstChild)!==null;)q=it,it=G;for(;;){if(it===e)break e;if(q===s&&++K===h&&(T=E),q===d&&++et===l&&(D=E),(G=it.nextSibling)!==null)break;it=q,q=it.parentNode}it=G}s=T===-1||D===-1?null:{start:T,end:D}}else s=null}s=s||{start:0,end:0}}else s=null;for(Bd={focusedElem:e,selectionRange:s},Rc=!1,Be=n;Be!==null;)if(n=Be,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,Be=e;else for(;Be!==null;){switch(n=Be,d=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,s=n,h=d.memoizedProps,d=d.memoizedState,l=s.stateNode;try{var wt=za(s.type,h,s.elementType===s.type);e=l.getSnapshotBeforeUpdate(wt,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(Et){ee(s,s.return,Et)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,s=e.nodeType,s===9)Kd(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Kd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=n.sibling,e!==null){e.return=n.return,Be=e;break}Be=n.return}}function by(e,n,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Nr(e,s),l&4&&ll(5,s);break;case 1:if(Nr(e,s),l&4)if(e=s.stateNode,n===null)try{e.componentDidMount()}catch(E){ee(s,s.return,E)}else{var h=za(s.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(h,n,e.__reactInternalSnapshotBeforeUpdate)}catch(E){ee(s,s.return,E)}}l&64&&gy(s),l&512&&ul(s,s.return);break;case 3:if(Nr(e,s),l&64&&(e=s.updateQueue,e!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{i0(e,n)}catch(E){ee(s,s.return,E)}}break;case 27:n===null&&l&4&&_y(s);case 26:case 5:Nr(e,s),n===null&&l&4&&vy(s),l&512&&ul(s,s.return);break;case 12:Nr(e,s);break;case 13:Nr(e,s),l&4&&Sy(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=wb.bind(null,s),$b(e,s))));break;case 22:if(l=s.memoizedState!==null||Yi,!l){n=n!==null&&n.memoizedState!==null||Te,h=Yi;var d=Te;Yi=l,(Te=n)&&!d?Mr(e,s,(s.subtreeFlags&8772)!==0):Nr(e,s),Yi=h,Te=d}break;case 30:break;default:Nr(e,s)}}function Ty(e){var n=e.alternate;n!==null&&(e.alternate=null,Ty(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&is(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ce=null,mn=!1;function Qi(e,n,s){for(s=s.child;s!==null;)wy(e,n,s),s=s.sibling}function wy(e,n,s){if(Je&&typeof Je.onCommitFiberUnmount=="function")try{Je.onCommitFiberUnmount(lr,s)}catch{}switch(s.tag){case 26:Te||gi(s,n),Qi(e,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Te||gi(s,n);var l=ce,h=mn;Lr(s.type)&&(ce=s.stateNode,mn=!1),Qi(e,n,s),vl(s.stateNode),ce=l,mn=h;break;case 5:Te||gi(s,n);case 6:if(l=ce,h=mn,ce=null,Qi(e,n,s),ce=l,mn=h,ce!==null)if(mn)try{(ce.nodeType===9?ce.body:ce.nodeName==="HTML"?ce.ownerDocument.body:ce).removeChild(s.stateNode)}catch(d){ee(s,n,d)}else try{ce.removeChild(s.stateNode)}catch(d){ee(s,n,d)}break;case 18:ce!==null&&(mn?(e=ce,f1(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Al(e)):f1(ce,s.stateNode));break;case 4:l=ce,h=mn,ce=s.stateNode.containerInfo,mn=!0,Qi(e,n,s),ce=l,mn=h;break;case 0:case 11:case 14:case 15:Te||Dr(2,s,n),Te||Dr(4,s,n),Qi(e,n,s);break;case 1:Te||(gi(s,n),l=s.stateNode,typeof l.componentWillUnmount=="function"&&yy(s,n,l)),Qi(e,n,s);break;case 21:Qi(e,n,s);break;case 22:Te=(l=Te)||s.memoizedState!==null,Qi(e,n,s),Te=l;break;default:Qi(e,n,s)}}function Sy(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Al(e)}catch(s){ee(n,n.return,s)}}function gb(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Ey),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Ey),n;default:throw Error(a(435,e.tag))}}function yd(e,n){var s=gb(e);n.forEach(function(l){var h=Sb.bind(null,e,l);s.has(l)||(s.add(l),l.then(h,h))})}function Tn(e,n){var s=n.deletions;if(s!==null)for(var l=0;l<s.length;l++){var h=s[l],d=e,E=n,T=E;t:for(;T!==null;){switch(T.tag){case 27:if(Lr(T.type)){ce=T.stateNode,mn=!1;break t}break;case 5:ce=T.stateNode,mn=!1;break t;case 3:case 4:ce=T.stateNode.containerInfo,mn=!0;break t}T=T.return}if(ce===null)throw Error(a(160));wy(d,E,h),ce=null,mn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Ay(n,e),n=n.sibling}var ti=null;function Ay(e,n){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Tn(n,e),wn(e),l&4&&(Dr(3,e,e.return),ll(3,e),Dr(5,e,e.return));break;case 1:Tn(n,e),wn(e),l&512&&(Te||s===null||gi(s,s.return)),l&64&&Yi&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var h=ti;if(Tn(n,e),wn(e),l&512&&(Te||s===null||gi(s,s.return)),l&4){var d=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){t:{l=e.type,s=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[pr]||d[xe]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),Qe(d,l,s),d[xe]=e,_e(d),l=d;break t;case"link":var E=_1("link","href",h).get(l+(s.href||""));if(E){for(var T=0;T<E.length;T++)if(d=E[T],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){E.splice(T,1);break e}}d=h.createElement(l),Qe(d,l,s),h.head.appendChild(d);break;case"meta":if(E=_1("meta","content",h).get(l+(s.content||""))){for(T=0;T<E.length;T++)if(d=E[T],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){E.splice(T,1);break e}}d=h.createElement(l),Qe(d,l,s),h.head.appendChild(d);break;default:throw Error(a(468,l))}d[xe]=e,_e(d),l=d}e.stateNode=l}else E1(h,e.type,e.stateNode);else e.stateNode=x1(h,l,e.memoizedProps);else d!==l?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,l===null?E1(h,e.type,e.stateNode):x1(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&dd(e,e.memoizedProps,s.memoizedProps)}break;case 27:Tn(n,e),wn(e),l&512&&(Te||s===null||gi(s,s.return)),s!==null&&l&4&&dd(e,e.memoizedProps,s.memoizedProps);break;case 5:if(Tn(n,e),wn(e),l&512&&(Te||s===null||gi(s,s.return)),e.flags&32){h=e.stateNode;try{Mn(h,"")}catch(G){ee(e,e.return,G)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,dd(e,h,s!==null?s.memoizedProps:h)),l&1024&&(gd=!0);break;case 6:if(Tn(n,e),wn(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(G){ee(e,e.return,G)}}break;case 3:if(wc=null,h=ti,ti=bc(n.containerInfo),Tn(n,e),ti=h,wn(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Al(n.containerInfo)}catch(G){ee(e,e.return,G)}gd&&(gd=!1,Ry(e));break;case 4:l=ti,ti=bc(e.stateNode.containerInfo),Tn(n,e),wn(e),ti=l;break;case 12:Tn(n,e),wn(e);break;case 13:Tn(n,e),wn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Td=dn()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,yd(e,l)));break;case 22:h=e.memoizedState!==null;var D=s!==null&&s.memoizedState!==null,K=Yi,et=Te;if(Yi=K||h,Te=et||D,Tn(n,e),Te=et,Yi=K,wn(e),l&8192)t:for(n=e.stateNode,n._visibility=h?n._visibility&-2:n._visibility|1,h&&(s===null||D||Yi||Te||Ba(e)),s=null,n=e;;){if(n.tag===5||n.tag===26){if(s===null){D=s=n;try{if(d=D.stateNode,h)E=d.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{T=D.stateNode;var it=D.memoizedProps.style,q=it!=null&&it.hasOwnProperty("display")?it.display:null;T.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(G){ee(D,D.return,G)}}}else if(n.tag===6){if(s===null){D=n;try{D.stateNode.nodeValue=h?"":D.memoizedProps}catch(G){ee(D,D.return,G)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,yd(e,s))));break;case 19:Tn(n,e),wn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,yd(e,l)));break;case 30:break;case 21:break;default:Tn(n,e),wn(e)}}function wn(e){var n=e.flags;if(n&2){try{for(var s,l=e.return;l!==null;){if(xy(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var h=s.stateNode,d=pd(e);uc(e,d,h);break;case 5:var E=s.stateNode;s.flags&32&&(Mn(E,""),s.flags&=-33);var T=pd(e);uc(e,T,E);break;case 3:case 4:var D=s.stateNode.containerInfo,K=pd(e);md(e,K,D);break;default:throw Error(a(161))}}catch(et){ee(e,e.return,et)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Ry(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Ry(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Nr(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)by(e,n.alternate,n),n=n.sibling}function Ba(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Dr(4,n,n.return),Ba(n);break;case 1:gi(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&yy(n,n.return,s),Ba(n);break;case 27:vl(n.stateNode);case 26:case 5:gi(n,n.return),Ba(n);break;case 22:n.memoizedState===null&&Ba(n);break;case 30:Ba(n);break;default:Ba(n)}e=e.sibling}}function Mr(e,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,h=e,d=n,E=d.flags;switch(d.tag){case 0:case 11:case 15:Mr(h,d,s),ll(4,d);break;case 1:if(Mr(h,d,s),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(K){ee(l,l.return,K)}if(l=d,h=l.updateQueue,h!==null){var T=l.stateNode;try{var D=h.shared.hiddenCallbacks;if(D!==null)for(h.shared.hiddenCallbacks=null,h=0;h<D.length;h++)n0(D[h],T)}catch(K){ee(l,l.return,K)}}s&&E&64&&gy(d),ul(d,d.return);break;case 27:_y(d);case 26:case 5:Mr(h,d,s),s&&l===null&&E&4&&vy(d),ul(d,d.return);break;case 12:Mr(h,d,s);break;case 13:Mr(h,d,s),s&&E&4&&Sy(h,d);break;case 22:d.memoizedState===null&&Mr(h,d,s),ul(d,d.return);break;case 30:break;default:Mr(h,d,s)}n=n.sibling}}function vd(e,n){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&Yo(s))}function xd(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Yo(e))}function yi(e,n,s,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Cy(e,n,s,l),n=n.sibling}function Cy(e,n,s,l){var h=n.flags;switch(n.tag){case 0:case 11:case 15:yi(e,n,s,l),h&2048&&ll(9,n);break;case 1:yi(e,n,s,l);break;case 3:yi(e,n,s,l),h&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Yo(e)));break;case 12:if(h&2048){yi(e,n,s,l),e=n.stateNode;try{var d=n.memoizedProps,E=d.id,T=d.onPostCommit;typeof T=="function"&&T(E,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(D){ee(n,n.return,D)}}else yi(e,n,s,l);break;case 13:yi(e,n,s,l);break;case 23:break;case 22:d=n.stateNode,E=n.alternate,n.memoizedState!==null?d._visibility&2?yi(e,n,s,l):cl(e,n):d._visibility&2?yi(e,n,s,l):(d._visibility|=2,Is(e,n,s,l,(n.subtreeFlags&10256)!==0)),h&2048&&vd(E,n);break;case 24:yi(e,n,s,l),h&2048&&xd(n.alternate,n);break;default:yi(e,n,s,l)}}function Is(e,n,s,l,h){for(h=h&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var d=e,E=n,T=s,D=l,K=E.flags;switch(E.tag){case 0:case 11:case 15:Is(d,E,T,D,h),ll(8,E);break;case 23:break;case 22:var et=E.stateNode;E.memoizedState!==null?et._visibility&2?Is(d,E,T,D,h):cl(d,E):(et._visibility|=2,Is(d,E,T,D,h)),h&&K&2048&&vd(E.alternate,E);break;case 24:Is(d,E,T,D,h),h&&K&2048&&xd(E.alternate,E);break;default:Is(d,E,T,D,h)}n=n.sibling}}function cl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=e,l=n,h=l.flags;switch(l.tag){case 22:cl(s,l),h&2048&&vd(l.alternate,l);break;case 24:cl(s,l),h&2048&&xd(l.alternate,l);break;default:cl(s,l)}n=n.sibling}}var hl=8192;function Ds(e){if(e.subtreeFlags&hl)for(e=e.child;e!==null;)jy(e),e=e.sibling}function jy(e){switch(e.tag){case 26:Ds(e),e.flags&hl&&e.memoizedState!==null&&eT(ti,e.memoizedState,e.memoizedProps);break;case 5:Ds(e);break;case 3:case 4:var n=ti;ti=bc(e.stateNode.containerInfo),Ds(e),ti=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=hl,hl=16777216,Ds(e),hl=n):Ds(e));break;default:Ds(e)}}function Iy(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function fl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];Be=l,Ny(l,e)}Iy(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Dy(e),e=e.sibling}function Dy(e){switch(e.tag){case 0:case 11:case 15:fl(e),e.flags&2048&&Dr(9,e,e.return);break;case 3:fl(e);break;case 12:fl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,cc(e)):fl(e);break;default:fl(e)}}function cc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];Be=l,Ny(l,e)}Iy(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Dr(8,n,n.return),cc(n);break;case 22:s=n.stateNode,s._visibility&2&&(s._visibility&=-3,cc(n));break;default:cc(n)}e=e.sibling}}function Ny(e,n){for(;Be!==null;){var s=Be;switch(s.tag){case 0:case 11:case 15:Dr(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Yo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Be=l;else t:for(s=e;Be!==null;){l=Be;var h=l.sibling,d=l.return;if(Ty(l),l===s){Be=null;break t}if(h!==null){h.return=d,Be=h;break t}Be=d}}}var yb={getCacheForType:function(e){var n=en(Oe),s=n.data.get(e);return s===void 0&&(s=e(),n.data.set(e,s)),s}},vb=typeof WeakMap=="function"?WeakMap:Map,Qt=0,re=null,Ot=null,zt=0,Xt=0,Sn=null,Or=!1,Ns=!1,_d=!1,Xi=0,ye=0,Vr=0,$a=0,Ed=0,zn=0,Ms=0,dl=null,gn=null,bd=!1,Td=0,hc=1/0,fc=null,kr=null,Ye=0,Ur=null,Os=null,Vs=0,wd=0,Sd=null,My=null,pl=0,Ad=null;function An(){if((Qt&2)!==0&&zt!==0)return zt&-zt;if(tt.T!==null){var e=bs;return e!==0?e:Md()}return Ni()}function Oy(){zn===0&&(zn=(zt&536870912)===0||Ht?wo():536870912);var e=Ln.current;return e!==null&&(e.flags|=32),zn}function Rn(e,n,s){(e===re&&(Xt===2||Xt===9)||e.cancelPendingCommit!==null)&&(ks(e,0),Pr(e,zt,zn,!1)),ve(e,s),((Qt&2)===0||e!==re)&&(e===re&&((Qt&2)===0&&($a|=s),ye===4&&Pr(e,zt,zn,!1)),vi(e))}function Vy(e,n,s){if((Qt&6)!==0)throw Error(a(327));var l=!s&&(n&124)===0&&(n&e.expiredLanes)===0||cr(e,n),h=l?Eb(e,n):jd(e,n,!0),d=l;do{if(h===0){Ns&&!l&&Pr(e,n,0,!1);break}else{if(s=e.current.alternate,d&&!xb(s)){h=jd(e,n,!1),d=!1;continue}if(h===2){if(d=n,e.errorRecoveryDisabledLanes&d)var E=0;else E=e.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){n=E;t:{var T=e;h=dl;var D=T.current.memoizedState.isDehydrated;if(D&&(ks(T,E).flags|=256),E=jd(T,E,!1),E!==2){if(_d&&!D){T.errorRecoveryDisabledLanes|=d,$a|=d,h=4;break t}d=gn,gn=h,d!==null&&(gn===null?gn=d:gn.push.apply(gn,d))}h=E}if(d=!1,h!==2)continue}}if(h===1){ks(e,0),Pr(e,n,0,!0);break}t:{switch(l=e,d=h,d){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:Pr(l,n,zn,!Or);break t;case 2:gn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(h=Td+300-dn(),10<h)){if(Pr(l,n,zn,!Or),Dn(l,0,!0)!==0)break t;l.timeoutHandle=c1(ky.bind(null,l,s,gn,fc,bd,n,zn,$a,Ms,Or,d,2,-0,0),h);break t}ky(l,s,gn,fc,bd,n,zn,$a,Ms,Or,d,0,-0,0)}}break}while(!0);vi(e)}function ky(e,n,s,l,h,d,E,T,D,K,et,it,q,G){if(e.timeoutHandle=-1,it=n.subtreeFlags,(it&8192||(it&16785408)===16785408)&&(El={stylesheets:null,count:0,unsuspend:tT},jy(n),it=nT(),it!==null)){e.cancelPendingCommit=it(Fy.bind(null,e,n,d,s,l,h,E,T,D,et,1,q,G)),Pr(e,d,E,!K);return}Fy(e,n,d,s,l,h,E,T,D)}function xb(e){for(var n=e;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var h=s[l],d=h.getSnapshot;h=h.value;try{if(!En(d(),h))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Pr(e,n,s,l){n&=~Ed,n&=~$a,e.suspendedLanes|=n,e.pingedLanes&=~n,l&&(e.warmLanes|=n),l=e.expirationTimes;for(var h=n;0<h;){var d=31-ln(h),E=1<<d;l[d]=-1,h&=~E}s!==0&&fr(e,s,n)}function dc(){return(Qt&6)===0?(ml(0),!1):!0}function Rd(){if(Ot!==null){if(Xt===0)var e=Ot.return;else e=Ot,$i=ka=null,Kf(e),Cs=null,al=0,e=Ot;for(;e!==null;)my(e.alternate,e),e=e.return;Ot=null}}function ks(e,n){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,Ub(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Rd(),re=e,Ot=s=Li(e.current,null),zt=n,Xt=0,Sn=null,Or=!1,Ns=cr(e,n),_d=!1,Ms=zn=Ed=$a=Vr=ye=0,gn=dl=null,bd=!1,(n&8)!==0&&(n|=n&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=n;0<l;){var h=31-ln(l),d=1<<h;n|=e[h],l&=~d}return Xi=n,Vu(),s}function Uy(e,n){Nt=null,tt.H=tc,n===Xo||n===Ku?(n=t0(),Xt=3):n===Wg?(n=t0(),Xt=4):Xt=n===ey?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Sn=n,Ot===null&&(ye=1,ac(e,Vn(n,e.current)))}function Py(){var e=tt.H;return tt.H=tc,e===null?tc:e}function Ly(){var e=tt.A;return tt.A=yb,e}function Cd(){ye=4,Or||(zt&4194048)!==zt&&Ln.current!==null||(Ns=!0),(Vr&134217727)===0&&($a&134217727)===0||re===null||Pr(re,zt,zn,!1)}function jd(e,n,s){var l=Qt;Qt|=2;var h=Py(),d=Ly();(re!==e||zt!==n)&&(fc=null,ks(e,n)),n=!1;var E=ye;t:do try{if(Xt!==0&&Ot!==null){var T=Ot,D=Sn;switch(Xt){case 8:Rd(),E=6;break t;case 3:case 2:case 9:case 6:Ln.current===null&&(n=!0);var K=Xt;if(Xt=0,Sn=null,Us(e,T,D,K),s&&Ns){E=0;break t}break;default:K=Xt,Xt=0,Sn=null,Us(e,T,D,K)}}_b(),E=ye;break}catch(et){Uy(e,et)}while(!0);return n&&e.shellSuspendCounter++,$i=ka=null,Qt=l,tt.H=h,tt.A=d,Ot===null&&(re=null,zt=0,Vu()),E}function _b(){for(;Ot!==null;)zy(Ot)}function Eb(e,n){var s=Qt;Qt|=2;var l=Py(),h=Ly();re!==e||zt!==n?(fc=null,hc=dn()+500,ks(e,n)):Ns=cr(e,n);t:do try{if(Xt!==0&&Ot!==null){n=Ot;var d=Sn;e:switch(Xt){case 1:Xt=0,Sn=null,Us(e,n,d,1);break;case 2:case 9:if(Zg(d)){Xt=0,Sn=null,By(n);break}n=function(){Xt!==2&&Xt!==9||re!==e||(Xt=7),vi(e)},d.then(n,n);break t;case 3:Xt=7;break t;case 4:Xt=5;break t;case 7:Zg(d)?(Xt=0,Sn=null,By(n)):(Xt=0,Sn=null,Us(e,n,d,7));break;case 5:var E=null;switch(Ot.tag){case 26:E=Ot.memoizedState;case 5:case 27:var T=Ot;if(!E||b1(E)){Xt=0,Sn=null;var D=T.sibling;if(D!==null)Ot=D;else{var K=T.return;K!==null?(Ot=K,pc(K)):Ot=null}break e}}Xt=0,Sn=null,Us(e,n,d,5);break;case 6:Xt=0,Sn=null,Us(e,n,d,6);break;case 8:Rd(),ye=6;break t;default:throw Error(a(462))}}bb();break}catch(et){Uy(e,et)}while(!0);return $i=ka=null,tt.H=l,tt.A=h,Qt=s,Ot!==null?0:(re=null,zt=0,Vu(),ye)}function bb(){for(;Ot!==null&&!nf();)zy(Ot)}function zy(e){var n=dy(e.alternate,e,Xi);e.memoizedProps=e.pendingProps,n===null?pc(e):Ot=n}function By(e){var n=e,s=n.alternate;switch(n.tag){case 15:case 0:n=oy(s,n,n.pendingProps,n.type,void 0,zt);break;case 11:n=oy(s,n,n.pendingProps,n.type.render,n.ref,zt);break;case 5:Kf(n);default:my(s,n),n=Ot=$g(n,Xi),n=dy(s,n,Xi)}e.memoizedProps=e.pendingProps,n===null?pc(e):Ot=n}function Us(e,n,s,l){$i=ka=null,Kf(n),Cs=null,al=0;var h=n.return;try{if(hb(e,h,n,s,zt)){ye=1,ac(e,Vn(s,e.current)),Ot=null;return}}catch(d){if(h!==null)throw Ot=h,d;ye=1,ac(e,Vn(s,e.current)),Ot=null;return}n.flags&32768?(Ht||l===1?e=!0:Ns||(zt&536870912)!==0?e=!1:(Or=e=!0,(l===2||l===9||l===3||l===6)&&(l=Ln.current,l!==null&&l.tag===13&&(l.flags|=16384))),$y(n,e)):pc(n)}function pc(e){var n=e;do{if((n.flags&32768)!==0){$y(n,Or);return}e=n.return;var s=db(n.alternate,n,Xi);if(s!==null){Ot=s;return}if(n=n.sibling,n!==null){Ot=n;return}Ot=n=e}while(n!==null);ye===0&&(ye=5)}function $y(e,n){do{var s=pb(e.alternate,e);if(s!==null){s.flags&=32767,Ot=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(e=e.sibling,e!==null)){Ot=e;return}Ot=e=s}while(e!==null);ye=6,Ot=null}function Fy(e,n,s,l,h,d,E,T,D){e.cancelPendingCommit=null;do mc();while(Ye!==0);if((Qt&6)!==0)throw Error(a(327));if(n!==null){if(n===e.current)throw Error(a(177));if(d=n.lanes|n.childLanes,d|=xf,vu(e,s,d,E,T,D),e===re&&(Ot=re=null,zt=0),Os=n,Ur=e,Vs=s,wd=d,Sd=h,My=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ab(Di,function(){return Yy(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=tt.T,tt.T=null,h=ft.p,ft.p=2,E=Qt,Qt|=4;try{mb(e,n,s)}finally{Qt=E,ft.p=h,tt.T=l}}Ye=1,Ky(),Hy(),qy()}}function Ky(){if(Ye===1){Ye=0;var e=Ur,n=Os,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=tt.T,tt.T=null;var l=ft.p;ft.p=2;var h=Qt;Qt|=4;try{Ay(n,e);var d=Bd,E=Ng(e.containerInfo),T=d.focusedElem,D=d.selectionRange;if(E!==T&&T&&T.ownerDocument&&Dg(T.ownerDocument.documentElement,T)){if(D!==null&&pf(T)){var K=D.start,et=D.end;if(et===void 0&&(et=K),"selectionStart"in T)T.selectionStart=K,T.selectionEnd=Math.min(et,T.value.length);else{var it=T.ownerDocument||document,q=it&&it.defaultView||window;if(q.getSelection){var G=q.getSelection(),wt=T.textContent.length,Et=Math.min(D.start,wt),te=D.end===void 0?Et:Math.min(D.end,wt);!G.extend&&Et>te&&(E=te,te=Et,Et=E);var L=Ig(T,Et),V=Ig(T,te);if(L&&V&&(G.rangeCount!==1||G.anchorNode!==L.node||G.anchorOffset!==L.offset||G.focusNode!==V.node||G.focusOffset!==V.offset)){var B=it.createRange();B.setStart(L.node,L.offset),G.removeAllRanges(),Et>te?(G.addRange(B),G.extend(V.node,V.offset)):(B.setEnd(V.node,V.offset),G.addRange(B))}}}}for(it=[],G=T;G=G.parentNode;)G.nodeType===1&&it.push({element:G,left:G.scrollLeft,top:G.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<it.length;T++){var nt=it[T];nt.element.scrollLeft=nt.left,nt.element.scrollTop=nt.top}}Rc=!!zd,Bd=zd=null}finally{Qt=h,ft.p=l,tt.T=s}}e.current=n,Ye=2}}function Hy(){if(Ye===2){Ye=0;var e=Ur,n=Os,s=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||s){s=tt.T,tt.T=null;var l=ft.p;ft.p=2;var h=Qt;Qt|=4;try{by(e,n.alternate,n)}finally{Qt=h,ft.p=l,tt.T=s}}Ye=3}}function qy(){if(Ye===4||Ye===3){Ye=0,bo();var e=Ur,n=Os,s=Vs,l=My;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Ye=5:(Ye=0,Os=Ur=null,Gy(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(kr=null),Ao(s),n=n.stateNode,Je&&typeof Je.onCommitFiberRoot=="function")try{Je.onCommitFiberRoot(lr,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=tt.T,h=ft.p,ft.p=2,tt.T=null;try{for(var d=e.onRecoverableError,E=0;E<l.length;E++){var T=l[E];d(T.value,{componentStack:T.stack})}}finally{tt.T=n,ft.p=h}}(Vs&3)!==0&&mc(),vi(e),h=e.pendingLanes,(s&4194090)!==0&&(h&42)!==0?e===Ad?pl++:(pl=0,Ad=e):pl=0,ml(0)}}function Gy(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Yo(n)))}function mc(e){return Ky(),Hy(),qy(),Yy()}function Yy(){if(Ye!==5)return!1;var e=Ur,n=wd;wd=0;var s=Ao(Vs),l=tt.T,h=ft.p;try{ft.p=32>s?32:s,tt.T=null,s=Sd,Sd=null;var d=Ur,E=Vs;if(Ye=0,Os=Ur=null,Vs=0,(Qt&6)!==0)throw Error(a(331));var T=Qt;if(Qt|=4,Dy(d.current),Cy(d,d.current,E,s),Qt=T,ml(0,!1),Je&&typeof Je.onPostCommitFiberRoot=="function")try{Je.onPostCommitFiberRoot(lr,d)}catch{}return!0}finally{ft.p=h,tt.T=l,Gy(e,n)}}function Qy(e,n,s){n=Vn(s,n),n=rd(e.stateNode,n,2),e=Rr(e,n,2),e!==null&&(ve(e,2),vi(e))}function ee(e,n,s){if(e.tag===3)Qy(e,e,s);else for(;n!==null;){if(n.tag===3){Qy(n,e,s);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(kr===null||!kr.has(l))){e=Vn(s,e),s=J0(2),l=Rr(n,s,2),l!==null&&(ty(s,l,n,e),ve(l,2),vi(l));break}}n=n.return}}function Id(e,n,s){var l=e.pingCache;if(l===null){l=e.pingCache=new vb;var h=new Set;l.set(n,h)}else h=l.get(n),h===void 0&&(h=new Set,l.set(n,h));h.has(s)||(_d=!0,h.add(s),e=Tb.bind(null,e,n,s),n.then(e,e))}function Tb(e,n,s){var l=e.pingCache;l!==null&&l.delete(n),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,re===e&&(zt&s)===s&&(ye===4||ye===3&&(zt&62914560)===zt&&300>dn()-Td?(Qt&2)===0&&ks(e,0):Ed|=s,Ms===zt&&(Ms=0)),vi(e)}function Xy(e,n){n===0&&(n=hr()),e=vs(e,n),e!==null&&(ve(e,n),vi(e))}function wb(e){var n=e.memoizedState,s=0;n!==null&&(s=n.retryLane),Xy(e,s)}function Sb(e,n){var s=0;switch(e.tag){case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(s=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(n),Xy(e,s)}function Ab(e,n){return oa(e,n)}var gc=null,Ps=null,Dd=!1,yc=!1,Nd=!1,Fa=0;function vi(e){e!==Ps&&e.next===null&&(Ps===null?gc=Ps=e:Ps=Ps.next=e),yc=!0,Dd||(Dd=!0,Cb())}function ml(e,n){if(!Nd&&yc){Nd=!0;do for(var s=!1,l=gc;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var E=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-ln(42|e)+1)-1,d&=h&~(E&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,t1(l,d))}else d=zt,d=Dn(l,l===re?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||cr(l,d)||(s=!0,t1(l,d));l=l.next}while(s);Nd=!1}}function Rb(){Wy()}function Wy(){yc=Dd=!1;var e=0;Fa!==0&&(kb()&&(e=Fa),Fa=0);for(var n=dn(),s=null,l=gc;l!==null;){var h=l.next,d=Zy(l,n);d===0?(l.next=null,s===null?gc=h:s.next=h,h===null&&(Ps=s)):(s=l,(e!==0||(d&3)!==0)&&(yc=!0)),l=h}ml(e)}function Zy(e,n){for(var s=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var E=31-ln(d),T=1<<E,D=h[E];D===-1?((T&s)===0||(T&l)!==0)&&(h[E]=es(T,n)):D<=n&&(e.expiredLanes|=T),d&=~T}if(n=re,s=zt,s=Dn(e,e===n?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===n&&(Xt===2||Xt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&ts(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||cr(e,s)){if(n=s&-s,n===e.callbackPriority)return n;switch(l!==null&&ts(l),Ao(s)){case 2:case 8:s=Pe;break;case 32:s=Di;break;case 268435456:s=To;break;default:s=Di}return l=Jy.bind(null,e),s=oa(s,l),e.callbackPriority=n,e.callbackNode=s,n}return l!==null&&l!==null&&ts(l),e.callbackPriority=2,e.callbackNode=null,2}function Jy(e,n){if(Ye!==0&&Ye!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(mc()&&e.callbackNode!==s)return null;var l=zt;return l=Dn(e,e===re?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Vy(e,l,n),Zy(e,dn()),e.callbackNode!=null&&e.callbackNode===s?Jy.bind(null,e):null)}function t1(e,n){if(mc())return null;Vy(e,n,!0)}function Cb(){Pb(function(){(Qt&6)!==0?oa(Ne,Rb):Wy()})}function Md(){return Fa===0&&(Fa=wo()),Fa}function e1(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Qn(""+e)}function n1(e,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,e.id&&s.setAttribute("form",e.id),n.parentNode.insertBefore(s,n),e=new FormData(e),s.parentNode.removeChild(s),e}function jb(e,n,s,l,h){if(n==="submit"&&s&&s.stateNode===h){var d=e1((h[qe]||null).action),E=l.submitter;E&&(n=(n=E[qe]||null)?e1(n.formAction):E.getAttribute("formAction"),n!==null&&(d=n,E=null));var T=new ba("action","action",null,l,h);e.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Fa!==0){var D=E?n1(h,E):new FormData(h);Jf(s,{pending:!0,data:D,method:h.method,action:d},null,D)}}else typeof d=="function"&&(T.preventDefault(),D=E?n1(h,E):new FormData(h),Jf(s,{pending:!0,data:D,method:h.method,action:d},d,D))},currentTarget:h}]})}}for(var Od=0;Od<vf.length;Od++){var Vd=vf[Od],Ib=Vd.toLowerCase(),Db=Vd[0].toUpperCase()+Vd.slice(1);Jn(Ib,"on"+Db)}Jn(Vg,"onAnimationEnd"),Jn(kg,"onAnimationIteration"),Jn(Ug,"onAnimationStart"),Jn("dblclick","onDoubleClick"),Jn("focusin","onFocus"),Jn("focusout","onBlur"),Jn(Y2,"onTransitionRun"),Jn(Q2,"onTransitionStart"),Jn(X2,"onTransitionCancel"),Jn(Pg,"onTransitionEnd"),ci("onMouseEnter",["mouseout","mouseover"]),ci("onMouseLeave",["mouseout","mouseover"]),ci("onPointerEnter",["pointerout","pointerover"]),ci("onPointerLeave",["pointerout","pointerover"]),ui("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ui("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ui("onBeforeInput",["compositionend","keypress","textInput","paste"]),ui("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ui("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ui("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gl));function i1(e,n){n=(n&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],h=l.event;l=l.listeners;t:{var d=void 0;if(n)for(var E=l.length-1;0<=E;E--){var T=l[E],D=T.instance,K=T.currentTarget;if(T=T.listener,D!==d&&h.isPropagationStopped())break t;d=T,h.currentTarget=K;try{d(h)}catch(et){rc(et)}h.currentTarget=null,d=D}else for(E=0;E<l.length;E++){if(T=l[E],D=T.instance,K=T.currentTarget,T=T.listener,D!==d&&h.isPropagationStopped())break t;d=T,h.currentTarget=K;try{d(h)}catch(et){rc(et)}h.currentTarget=null,d=D}}}}function Vt(e,n){var s=n[ua];s===void 0&&(s=n[ua]=new Set);var l=e+"__bubble";s.has(l)||(r1(n,e,2,!1),s.add(l))}function kd(e,n,s){var l=0;n&&(l|=4),r1(s,e,l,n)}var vc="_reactListening"+Math.random().toString(36).slice(2);function Ud(e){if(!e[vc]){e[vc]=!0,xu.forEach(function(s){s!=="selectionchange"&&(Nb.has(s)||kd(s,!1,e),kd(s,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[vc]||(n[vc]=!0,kd("selectionchange",!1,n))}}function r1(e,n,s,l){switch(C1(n)){case 2:var h=aT;break;case 8:h=sT;break;default:h=Wd}s=h.bind(null,n,s,e),h=void 0,!Ui||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(n,s,{capture:!0,passive:h}):e.addEventListener(n,s,!0):h!==void 0?e.addEventListener(n,s,{passive:h}):e.addEventListener(n,s,!1)}function Pd(e,n,s,l,h){var d=l;if((n&1)===0&&(n&2)===0&&l!==null)t:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var T=l.stateNode.containerInfo;if(T===h)break;if(E===4)for(E=l.return;E!==null;){var D=E.tag;if((D===3||D===4)&&E.stateNode.containerInfo===h)return;E=E.return}for(;T!==null;){if(E=oi(T),E===null)return;if(D=E.tag,D===5||D===6||D===26||D===27){l=d=E;continue t}T=T.parentNode}}l=l.return}xa(function(){var K=d,et=Mo(s),it=[];t:{var q=Lg.get(e);if(q!==void 0){var G=ba,wt=e;switch(e){case"keypress":if(_a(s)===0)break t;case"keydown":case"keyup":G=ps;break;case"focusin":wt="focus",G=hs;break;case"focusout":wt="blur",G=hs;break;case"beforeblur":case"afterblur":G=hs;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=Ra;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=Au;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=Tr;break;case Vg:case kg:case Ug:G=Vo;break;case Pg:G=y;break;case"scroll":case"scrollend":G=wa;break;case"wheel":G=w;break;case"copy":case"cut":case"paste":G=Cu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=Po;break;case"toggle":case"beforetoggle":G=Y}var Et=(n&4)!==0,te=!Et&&(e==="scroll"||e==="scrollend"),L=Et?q!==null?q+"Capture":null:q;Et=[];for(var V=K,B;V!==null;){var nt=V;if(B=nt.stateNode,nt=nt.tag,nt!==5&&nt!==26&&nt!==27||B===null||L===null||(nt=Er(V,L),nt!=null&&Et.push(yl(V,nt,B))),te)break;V=V.return}0<Et.length&&(q=new G(q,wt,null,s,et),it.push({event:q,listeners:Et}))}}if((n&7)===0){t:{if(q=e==="mouseover"||e==="pointerover",G=e==="mouseout"||e==="pointerout",q&&s!==No&&(wt=s.relatedTarget||s.fromElement)&&(oi(wt)||wt[Mi]))break t;if((G||q)&&(q=et.window===et?et:(q=et.ownerDocument)?q.defaultView||q.parentWindow:window,G?(wt=s.relatedTarget||s.toElement,G=K,wt=wt?oi(wt):null,wt!==null&&(te=u(wt),Et=wt.tag,wt!==te||Et!==5&&Et!==27&&Et!==6)&&(wt=null)):(G=null,wt=K),G!==wt)){if(Et=Ra,nt="onMouseLeave",L="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(Et=Po,nt="onPointerLeave",L="onPointerEnter",V="pointer"),te=G==null?q:mr(G),B=wt==null?q:mr(wt),q=new Et(nt,V+"leave",G,s,et),q.target=te,q.relatedTarget=B,nt=null,oi(et)===K&&(Et=new Et(L,V+"enter",wt,s,et),Et.target=B,Et.relatedTarget=te,nt=Et),te=nt,G&&wt)e:{for(Et=G,L=wt,V=0,B=Et;B;B=Ls(B))V++;for(B=0,nt=L;nt;nt=Ls(nt))B++;for(;0<V-B;)Et=Ls(Et),V--;for(;0<B-V;)L=Ls(L),B--;for(;V--;){if(Et===L||L!==null&&Et===L.alternate)break e;Et=Ls(Et),L=Ls(L)}Et=null}else Et=null;G!==null&&a1(it,q,G,Et,!1),wt!==null&&te!==null&&a1(it,te,wt,Et,!0)}}t:{if(q=K?mr(K):window,G=q.nodeName&&q.nodeName.toLowerCase(),G==="select"||G==="input"&&q.type==="file")var pt=wg;else if(bg(q))if(Sg)pt=H2;else{pt=F2;var Mt=$2}else G=q.nodeName,!G||G.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?K&&ls(K.elementType)&&(pt=wg):pt=K2;if(pt&&(pt=pt(e,K))){Tg(it,pt,s,et);break t}Mt&&Mt(e,q,K),e==="focusout"&&K&&q.type==="number"&&K.memoizedProps.value!=null&&jo(q,"number",q.value)}switch(Mt=K?mr(K):window,e){case"focusin":(bg(Mt)||Mt.contentEditable==="true")&&(ms=Mt,mf=K,Fo=null);break;case"focusout":Fo=mf=ms=null;break;case"mousedown":gf=!0;break;case"contextmenu":case"mouseup":case"dragend":gf=!1,Mg(it,s,et);break;case"selectionchange":if(G2)break;case"keydown":case"keyup":Mg(it,s,et)}var vt;if(At)t:{switch(e){case"compositionstart":var bt="onCompositionStart";break t;case"compositionend":bt="onCompositionEnd";break t;case"compositionupdate":bt="onCompositionUpdate";break t}bt=void 0}else Zn?Xn(e,s)&&(bt="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(bt="onCompositionStart");bt&&(Ee&&s.locale!=="ko"&&(Zn||bt!=="onCompositionStart"?bt==="onCompositionEnd"&&Zn&&(vt=Su()):(On=et,ie="value"in On?On.value:On.textContent,Zn=!0)),Mt=xc(K,bt),0<Mt.length&&(bt=new Uo(bt,e,null,s,et),it.push({event:bt,listeners:Mt}),vt?bt.data=vt:(vt=Wn(s),vt!==null&&(bt.data=vt)))),(vt=Yt?Lo(e,s):L2(e,s))&&(bt=xc(K,"onBeforeInput"),0<bt.length&&(Mt=new Uo("onBeforeInput","beforeinput",null,s,et),it.push({event:Mt,listeners:bt}),Mt.data=vt)),jb(it,e,K,s,et)}i1(it,n)})}function yl(e,n,s){return{instance:e,listener:n,currentTarget:s}}function xc(e,n){for(var s=n+"Capture",l=[];e!==null;){var h=e,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=Er(e,s),h!=null&&l.unshift(yl(e,h,d)),h=Er(e,n),h!=null&&l.push(yl(e,h,d))),e.tag===3)return l;e=e.return}return[]}function Ls(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function a1(e,n,s,l,h){for(var d=n._reactName,E=[];s!==null&&s!==l;){var T=s,D=T.alternate,K=T.stateNode;if(T=T.tag,D!==null&&D===l)break;T!==5&&T!==26&&T!==27||K===null||(D=K,h?(K=Er(s,d),K!=null&&E.unshift(yl(s,K,D))):h||(K=Er(s,d),K!=null&&E.push(yl(s,K,D)))),s=s.return}E.length!==0&&e.push({event:n,listeners:E})}var Mb=/\r\n?/g,Ob=/\u0000|\uFFFD/g;function s1(e){return(typeof e=="string"?e:""+e).replace(Mb,`
`).replace(Ob,"")}function o1(e,n){return n=s1(n),s1(e)===n}function _c(){}function Jt(e,n,s,l,h,d){switch(s){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||Mn(e,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&Mn(e,""+l);break;case"className":pa(e,"class",l);break;case"tabIndex":pa(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":pa(e,s,l);break;case"style":Do(e,l,d);break;case"data":if(n!=="object"){pa(e,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Qn(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(n!=="input"&&Jt(e,n,"name",h.name,h,null),Jt(e,n,"formEncType",h.formEncType,h,null),Jt(e,n,"formMethod",h.formMethod,h,null),Jt(e,n,"formTarget",h.formTarget,h,null)):(Jt(e,n,"encType",h.encType,h,null),Jt(e,n,"method",h.method,h,null),Jt(e,n,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Qn(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=_c);break;case"onScroll":l!=null&&Vt("scroll",e);break;case"onScrollEnd":l!=null&&Vt("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=Qn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":Vt("beforetoggle",e),Vt("toggle",e),da(e,"popover",l);break;case"xlinkActuate":Nn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Nn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Nn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Nn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Nn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Nn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Nn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Nn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Nn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":da(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=bu.get(s)||s,da(e,s,l))}}function Ld(e,n,s,l,h,d){switch(s){case"style":Do(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof l=="string"?Mn(e,l):(typeof l=="number"||typeof l=="bigint")&&Mn(e,""+l);break;case"onScroll":l!=null&&Vt("scroll",e);break;case"onScrollEnd":l!=null&&Vt("scrollend",e);break;case"onClick":l!=null&&(e.onclick=_c);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ha.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),n=s.slice(2,h?s.length-7:void 0),d=e[qe]||null,d=d!=null?d[s]:null,typeof d=="function"&&e.removeEventListener(n,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(n,l,h);break t}s in e?e[s]=l:l===!0?e.setAttribute(s,""):da(e,s,l)}}}function Qe(e,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Vt("error",e),Vt("load",e);var l=!1,h=!1,d;for(d in s)if(s.hasOwnProperty(d)){var E=s[d];if(E!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Jt(e,n,d,E,s,null)}}h&&Jt(e,n,"srcSet",s.srcSet,s,null),l&&Jt(e,n,"src",s.src,s,null);return;case"input":Vt("invalid",e);var T=d=E=h=null,D=null,K=null;for(l in s)if(s.hasOwnProperty(l)){var et=s[l];if(et!=null)switch(l){case"name":h=et;break;case"type":E=et;break;case"checked":D=et;break;case"defaultChecked":K=et;break;case"value":d=et;break;case"defaultValue":T=et;break;case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(a(137,n));break;default:Jt(e,n,l,et,s,null)}}Co(e,d,T,D,K,E,h,!1),vr(e);return;case"select":Vt("invalid",e),l=E=d=null;for(h in s)if(s.hasOwnProperty(h)&&(T=s[h],T!=null))switch(h){case"value":d=T;break;case"defaultValue":E=T;break;case"multiple":l=T;default:Jt(e,n,h,T,s,null)}n=d,s=E,e.multiple=!!l,n!=null?xr(e,!!l,n,!1):s!=null&&xr(e,!!l,s,!0);return;case"textarea":Vt("invalid",e),d=h=l=null;for(E in s)if(s.hasOwnProperty(E)&&(T=s[E],T!=null))switch(E){case"value":l=T;break;case"defaultValue":h=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(a(91));break;default:Jt(e,n,E,T,s,null)}Eu(e,l,h,d),vr(e);return;case"option":for(D in s)if(s.hasOwnProperty(D)&&(l=s[D],l!=null))switch(D){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Jt(e,n,D,l,s,null)}return;case"dialog":Vt("beforetoggle",e),Vt("toggle",e),Vt("cancel",e),Vt("close",e);break;case"iframe":case"object":Vt("load",e);break;case"video":case"audio":for(l=0;l<gl.length;l++)Vt(gl[l],e);break;case"image":Vt("error",e),Vt("load",e);break;case"details":Vt("toggle",e);break;case"embed":case"source":case"link":Vt("error",e),Vt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(K in s)if(s.hasOwnProperty(K)&&(l=s[K],l!=null))switch(K){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Jt(e,n,K,l,s,null)}return;default:if(ls(n)){for(et in s)s.hasOwnProperty(et)&&(l=s[et],l!==void 0&&Ld(e,n,et,l,s,void 0));return}}for(T in s)s.hasOwnProperty(T)&&(l=s[T],l!=null&&Jt(e,n,T,l,s,null))}function Vb(e,n,s,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,E=null,T=null,D=null,K=null,et=null;for(G in s){var it=s[G];if(s.hasOwnProperty(G)&&it!=null)switch(G){case"checked":break;case"value":break;case"defaultValue":D=it;default:l.hasOwnProperty(G)||Jt(e,n,G,null,l,it)}}for(var q in l){var G=l[q];if(it=s[q],l.hasOwnProperty(q)&&(G!=null||it!=null))switch(q){case"type":d=G;break;case"name":h=G;break;case"checked":K=G;break;case"defaultChecked":et=G;break;case"value":E=G;break;case"defaultValue":T=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(a(137,n));break;default:G!==it&&Jt(e,n,q,G,l,it)}}Ro(e,E,T,D,K,et,d,h);return;case"select":G=E=T=q=null;for(d in s)if(D=s[d],s.hasOwnProperty(d)&&D!=null)switch(d){case"value":break;case"multiple":G=D;default:l.hasOwnProperty(d)||Jt(e,n,d,null,l,D)}for(h in l)if(d=l[h],D=s[h],l.hasOwnProperty(h)&&(d!=null||D!=null))switch(h){case"value":q=d;break;case"defaultValue":T=d;break;case"multiple":E=d;default:d!==D&&Jt(e,n,h,d,l,D)}n=T,s=E,l=G,q!=null?xr(e,!!s,q,!1):!!l!=!!s&&(n!=null?xr(e,!!s,n,!0):xr(e,!!s,s?[]:"",!1));return;case"textarea":G=q=null;for(T in s)if(h=s[T],s.hasOwnProperty(T)&&h!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Jt(e,n,T,null,l,h)}for(E in l)if(h=l[E],d=s[E],l.hasOwnProperty(E)&&(h!=null||d!=null))switch(E){case"value":q=h;break;case"defaultValue":G=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==d&&Jt(e,n,E,h,l,d)}_u(e,q,G);return;case"option":for(var wt in s)if(q=s[wt],s.hasOwnProperty(wt)&&q!=null&&!l.hasOwnProperty(wt))switch(wt){case"selected":e.selected=!1;break;default:Jt(e,n,wt,null,l,q)}for(D in l)if(q=l[D],G=s[D],l.hasOwnProperty(D)&&q!==G&&(q!=null||G!=null))switch(D){case"selected":e.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:Jt(e,n,D,q,l,G)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Et in s)q=s[Et],s.hasOwnProperty(Et)&&q!=null&&!l.hasOwnProperty(Et)&&Jt(e,n,Et,null,l,q);for(K in l)if(q=l[K],G=s[K],l.hasOwnProperty(K)&&q!==G&&(q!=null||G!=null))switch(K){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(a(137,n));break;default:Jt(e,n,K,q,l,G)}return;default:if(ls(n)){for(var te in s)q=s[te],s.hasOwnProperty(te)&&q!==void 0&&!l.hasOwnProperty(te)&&Ld(e,n,te,void 0,l,q);for(et in l)q=l[et],G=s[et],!l.hasOwnProperty(et)||q===G||q===void 0&&G===void 0||Ld(e,n,et,q,l,G);return}}for(var L in s)q=s[L],s.hasOwnProperty(L)&&q!=null&&!l.hasOwnProperty(L)&&Jt(e,n,L,null,l,q);for(it in l)q=l[it],G=s[it],!l.hasOwnProperty(it)||q===G||q==null&&G==null||Jt(e,n,it,q,l,G)}var zd=null,Bd=null;function Ec(e){return e.nodeType===9?e:e.ownerDocument}function l1(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function u1(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function $d(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Fd=null;function kb(){var e=window.event;return e&&e.type==="popstate"?e===Fd?!1:(Fd=e,!0):(Fd=null,!1)}var c1=typeof setTimeout=="function"?setTimeout:void 0,Ub=typeof clearTimeout=="function"?clearTimeout:void 0,h1=typeof Promise=="function"?Promise:void 0,Pb=typeof queueMicrotask=="function"?queueMicrotask:typeof h1<"u"?function(e){return h1.resolve(null).then(e).catch(Lb)}:c1;function Lb(e){setTimeout(function(){throw e})}function Lr(e){return e==="head"}function f1(e,n){var s=n,l=0,h=0;do{var d=s.nextSibling;if(e.removeChild(s),d&&d.nodeType===8)if(s=d.data,s==="/$"){if(0<l&&8>l){s=l;var E=e.ownerDocument;if(s&1&&vl(E.documentElement),s&2&&vl(E.body),s&4)for(s=E.head,vl(s),E=s.firstChild;E;){var T=E.nextSibling,D=E.nodeName;E[pr]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&E.rel.toLowerCase()==="stylesheet"||s.removeChild(E),E=T}}if(h===0){e.removeChild(d),Al(n);return}h--}else s==="$"||s==="$?"||s==="$!"?h++:l=s.charCodeAt(0)-48;else l=0;s=d}while(s);Al(n)}function Kd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Kd(s),is(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function zb(e,n,s,l){for(;e.nodeType===1;){var h=s;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[pr])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=ei(e.nextSibling),e===null)break}return null}function Bb(e,n,s){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=ei(e.nextSibling),e===null))return null;return e}function Hd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function $b(e,n){var s=e.ownerDocument;if(e.data!=="$?"||s.readyState==="complete")n();else{var l=function(){n(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function ei(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var qd=null;function d1(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(n===0)return e;n--}else s==="/$"&&n++}e=e.previousSibling}return null}function p1(e,n,s){switch(n=Ec(s),e){case"html":if(e=n.documentElement,!e)throw Error(a(452));return e;case"head":if(e=n.head,!e)throw Error(a(453));return e;case"body":if(e=n.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function vl(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);is(e)}var Bn=new Map,m1=new Set;function bc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Wi=ft.d;ft.d={f:Fb,r:Kb,D:Hb,C:qb,L:Gb,m:Yb,X:Xb,S:Qb,M:Wb};function Fb(){var e=Wi.f(),n=dc();return e||n}function Kb(e){var n=li(e);n!==null&&n.tag===5&&n.type==="form"?V0(n):Wi.r(e)}var zs=typeof document>"u"?null:document;function g1(e,n,s){var l=zs;if(l&&typeof n=="string"&&n){var h=Le(n);h='link[rel="'+e+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),m1.has(h)||(m1.add(h),e={rel:e,crossOrigin:s,href:n},l.querySelector(h)===null&&(n=l.createElement("link"),Qe(n,"link",e),_e(n),l.head.appendChild(n)))}}function Hb(e){Wi.D(e),g1("dns-prefetch",e,null)}function qb(e,n){Wi.C(e,n),g1("preconnect",e,n)}function Gb(e,n,s){Wi.L(e,n,s);var l=zs;if(l&&e&&n){var h='link[rel="preload"][as="'+Le(n)+'"]';n==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+Le(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+Le(s.imageSizes)+'"]')):h+='[href="'+Le(e)+'"]';var d=h;switch(n){case"style":d=Bs(e);break;case"script":d=$s(e)}Bn.has(d)||(e=_({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:e,as:n},s),Bn.set(d,e),l.querySelector(h)!==null||n==="style"&&l.querySelector(xl(d))||n==="script"&&l.querySelector(_l(d))||(n=l.createElement("link"),Qe(n,"link",e),_e(n),l.head.appendChild(n)))}}function Yb(e,n){Wi.m(e,n);var s=zs;if(s&&e){var l=n&&typeof n.as=="string"?n.as:"script",h='link[rel="modulepreload"][as="'+Le(l)+'"][href="'+Le(e)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=$s(e)}if(!Bn.has(d)&&(e=_({rel:"modulepreload",href:e},n),Bn.set(d,e),s.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(_l(d)))return}l=s.createElement("link"),Qe(l,"link",e),_e(l),s.head.appendChild(l)}}}function Qb(e,n,s){Wi.S(e,n,s);var l=zs;if(l&&e){var h=gr(l).hoistableStyles,d=Bs(e);n=n||"default";var E=h.get(d);if(!E){var T={loading:0,preload:null};if(E=l.querySelector(xl(d)))T.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},s),(s=Bn.get(d))&&Gd(e,s);var D=E=l.createElement("link");_e(D),Qe(D,"link",e),D._p=new Promise(function(K,et){D.onload=K,D.onerror=et}),D.addEventListener("load",function(){T.loading|=1}),D.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Tc(E,n,l)}E={type:"stylesheet",instance:E,count:1,state:T},h.set(d,E)}}}function Xb(e,n){Wi.X(e,n);var s=zs;if(s&&e){var l=gr(s).hoistableScripts,h=$s(e),d=l.get(h);d||(d=s.querySelector(_l(h)),d||(e=_({src:e,async:!0},n),(n=Bn.get(h))&&Yd(e,n),d=s.createElement("script"),_e(d),Qe(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function Wb(e,n){Wi.M(e,n);var s=zs;if(s&&e){var l=gr(s).hoistableScripts,h=$s(e),d=l.get(h);d||(d=s.querySelector(_l(h)),d||(e=_({src:e,async:!0,type:"module"},n),(n=Bn.get(h))&&Yd(e,n),d=s.createElement("script"),_e(d),Qe(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function y1(e,n,s,l){var h=(h=xt.current)?bc(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=Bs(s.href),s=gr(h).hoistableStyles,l=s.get(n),l||(l={type:"style",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Bs(s.href);var d=gr(h).hoistableStyles,E=d.get(e);if(E||(h=h.ownerDocument||h,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,E),(d=h.querySelector(xl(e)))&&!d._p&&(E.instance=d,E.state.loading=5),Bn.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Bn.set(e,s),d||Zb(h,e,s,E.state))),n&&l===null)throw Error(a(528,""));return E}if(n&&l!==null)throw Error(a(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=$s(s),s=gr(h).hoistableScripts,l=s.get(n),l||(l={type:"script",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Bs(e){return'href="'+Le(e)+'"'}function xl(e){return'link[rel="stylesheet"]['+e+"]"}function v1(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function Zb(e,n,s,l){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=e.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),Qe(n,"link",s),_e(n),e.head.appendChild(n))}function $s(e){return'[src="'+Le(e)+'"]'}function _l(e){return"script[async]"+e}function x1(e,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var l=e.querySelector('style[data-href~="'+Le(s.href)+'"]');if(l)return n.instance=l,_e(l),l;var h=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),_e(l),Qe(l,"style",h),Tc(l,s.precedence,e),n.instance=l;case"stylesheet":h=Bs(s.href);var d=e.querySelector(xl(h));if(d)return n.state.loading|=4,n.instance=d,_e(d),d;l=v1(s),(h=Bn.get(h))&&Gd(l,h),d=(e.ownerDocument||e).createElement("link"),_e(d);var E=d;return E._p=new Promise(function(T,D){E.onload=T,E.onerror=D}),Qe(d,"link",l),n.state.loading|=4,Tc(d,s.precedence,e),n.instance=d;case"script":return d=$s(s.src),(h=e.querySelector(_l(d)))?(n.instance=h,_e(h),h):(l=s,(h=Bn.get(d))&&(l=_({},s),Yd(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),_e(h),Qe(h,"link",l),e.head.appendChild(h),n.instance=h);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,Tc(l,s.precedence,e));return n.instance}function Tc(e,n,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,E=0;E<l.length;E++){var T=l[E];if(T.dataset.precedence===n)d=T;else if(d!==h)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(e,n.firstChild))}function Gd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Yd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var wc=null;function _1(e,n,s){if(wc===null){var l=new Map,h=wc=new Map;h.set(s,l)}else h=wc,l=h.get(s),l||(l=new Map,h.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),h=0;h<s.length;h++){var d=s[h];if(!(d[pr]||d[xe]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var E=d.getAttribute(n)||"";E=e+E;var T=l.get(E);T?T.push(d):l.set(E,[d])}}return l}function E1(e,n,s){e=e.ownerDocument||e,e.head.insertBefore(s,n==="title"?e.querySelector("head > title"):null)}function Jb(e,n,s){if(s===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function b1(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var El=null;function tT(){}function eT(e,n,s){if(El===null)throw Error(a(475));var l=El;if(n.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var h=Bs(s.href),d=e.querySelector(xl(h));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Sc.bind(l),e.then(l,l)),n.state.loading|=4,n.instance=d,_e(d);return}d=e.ownerDocument||e,s=v1(s),(h=Bn.get(h))&&Gd(s,h),d=d.createElement("link"),_e(d);var E=d;E._p=new Promise(function(T,D){E.onload=T,E.onerror=D}),Qe(d,"link",s),n.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(l.count++,n=Sc.bind(l),e.addEventListener("load",n),e.addEventListener("error",n))}}function nT(){if(El===null)throw Error(a(475));var e=El;return e.stylesheets&&e.count===0&&Qd(e,e.stylesheets),0<e.count?function(n){var s=setTimeout(function(){if(e.stylesheets&&Qd(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(s)}}:null}function Sc(){if(this.count--,this.count===0){if(this.stylesheets)Qd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ac=null;function Qd(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ac=new Map,n.forEach(iT,e),Ac=null,Sc.call(e))}function iT(e,n){if(!(n.state.loading&4)){var s=Ac.get(e);if(s)var l=s.get(null);else{s=new Map,Ac.set(e,s);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var E=h[d];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(s.set(E.dataset.precedence,E),l=E)}l&&s.set(null,l)}h=n.instance,E=h.getAttribute("data-precedence"),d=s.get(E)||l,d===l&&s.set(null,h),s.set(E,h),this.count++,l=Sc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),n.state.loading|=4}}var bl={$$typeof:Z,Provider:null,Consumer:null,_currentValue:yt,_currentValue2:yt,_threadCount:0};function rT(e,n,s,l,h,d,E,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ns(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ns(0),this.hiddenUpdates=ns(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function T1(e,n,s,l,h,d,E,T,D,K,et,it){return e=new rT(e,n,s,E,T,D,K,it),n=1,d===!0&&(n|=24),d=bn(3,null,null,n),e.current=d,d.stateNode=e,n=If(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:l,isDehydrated:s,cache:n},Of(d),e}function w1(e){return e?(e=xs,e):xs}function S1(e,n,s,l,h,d){h=w1(h),l.context===null?l.context=h:l.pendingContext=h,l=Ar(n),l.payload={element:s},d=d===void 0?null:d,d!==null&&(l.callback=d),s=Rr(e,l,n),s!==null&&(Rn(s,e,n),Zo(s,e,n))}function A1(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<n?s:n}}function Xd(e,n){A1(e,n),(e=e.alternate)&&A1(e,n)}function R1(e){if(e.tag===13){var n=vs(e,67108864);n!==null&&Rn(n,e,67108864),Xd(e,67108864)}}var Rc=!0;function aT(e,n,s,l){var h=tt.T;tt.T=null;var d=ft.p;try{ft.p=2,Wd(e,n,s,l)}finally{ft.p=d,tt.T=h}}function sT(e,n,s,l){var h=tt.T;tt.T=null;var d=ft.p;try{ft.p=8,Wd(e,n,s,l)}finally{ft.p=d,tt.T=h}}function Wd(e,n,s,l){if(Rc){var h=Zd(l);if(h===null)Pd(e,n,l,Cc,s),j1(e,l);else if(lT(h,e,n,s,l))l.stopPropagation();else if(j1(e,l),n&4&&-1<oT.indexOf(e)){for(;h!==null;){var d=li(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var E=qn(d.pendingLanes);if(E!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;E;){var D=1<<31-ln(E);T.entanglements[1]|=D,E&=~D}vi(d),(Qt&6)===0&&(hc=dn()+500,ml(0))}}break;case 13:T=vs(d,2),T!==null&&Rn(T,d,2),dc(),Xd(d,2)}if(d=Zd(l),d===null&&Pd(e,n,l,Cc,s),d===h)break;h=d}h!==null&&l.stopPropagation()}else Pd(e,n,l,null,s)}}function Zd(e){return e=Mo(e),Jd(e)}var Cc=null;function Jd(e){if(Cc=null,e=oi(e),e!==null){var n=u(e);if(n===null)e=null;else{var s=n.tag;if(s===13){if(e=f(n),e!==null)return e;e=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Cc=e,null}function C1(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(mu()){case Ne:return 2;case Pe:return 8;case Di:case rf:return 32;case To:return 268435456;default:return 32}default:return 32}}var tp=!1,zr=null,Br=null,$r=null,Tl=new Map,wl=new Map,Fr=[],oT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function j1(e,n){switch(e){case"focusin":case"focusout":zr=null;break;case"dragenter":case"dragleave":Br=null;break;case"mouseover":case"mouseout":$r=null;break;case"pointerover":case"pointerout":Tl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":wl.delete(n.pointerId)}}function Sl(e,n,s,l,h,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:s,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},n!==null&&(n=li(n),n!==null&&R1(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,h!==null&&n.indexOf(h)===-1&&n.push(h),e)}function lT(e,n,s,l,h){switch(n){case"focusin":return zr=Sl(zr,e,n,s,l,h),!0;case"dragenter":return Br=Sl(Br,e,n,s,l,h),!0;case"mouseover":return $r=Sl($r,e,n,s,l,h),!0;case"pointerover":var d=h.pointerId;return Tl.set(d,Sl(Tl.get(d)||null,e,n,s,l,h)),!0;case"gotpointercapture":return d=h.pointerId,wl.set(d,Sl(wl.get(d)||null,e,n,s,l,h)),!0}return!1}function I1(e){var n=oi(e.target);if(n!==null){var s=u(n);if(s!==null){if(n=s.tag,n===13){if(n=f(s),n!==null){e.blockedOn=n,of(e.priority,function(){if(s.tag===13){var l=An();l=So(l);var h=vs(s,l);h!==null&&Rn(h,s,l),Xd(s,l)}});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var s=Zd(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);No=l,s.target.dispatchEvent(l),No=null}else return n=li(s),n!==null&&R1(n),e.blockedOn=s,!1;n.shift()}return!0}function D1(e,n,s){jc(e)&&s.delete(n)}function uT(){tp=!1,zr!==null&&jc(zr)&&(zr=null),Br!==null&&jc(Br)&&(Br=null),$r!==null&&jc($r)&&($r=null),Tl.forEach(D1),wl.forEach(D1)}function Ic(e,n){e.blockedOn===n&&(e.blockedOn=null,tp||(tp=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,uT)))}var Dc=null;function N1(e){Dc!==e&&(Dc=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Dc===e&&(Dc=null);for(var n=0;n<e.length;n+=3){var s=e[n],l=e[n+1],h=e[n+2];if(typeof l!="function"){if(Jd(l||s)===null)continue;break}var d=li(s);d!==null&&(e.splice(n,3),n-=3,Jf(d,{pending:!0,data:h,method:s.method,action:l},l,h))}}))}function Al(e){function n(D){return Ic(D,e)}zr!==null&&Ic(zr,e),Br!==null&&Ic(Br,e),$r!==null&&Ic($r,e),Tl.forEach(n),wl.forEach(n);for(var s=0;s<Fr.length;s++){var l=Fr[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Fr.length&&(s=Fr[0],s.blockedOn===null);)I1(s),s.blockedOn===null&&Fr.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var h=s[l],d=s[l+1],E=h[qe]||null;if(typeof d=="function")E||N1(s);else if(E){var T=null;if(d&&d.hasAttribute("formAction")){if(h=d,E=d[qe]||null)T=E.formAction;else if(Jd(h)!==null)continue}else T=E.action;typeof T=="function"?s[l+1]=T:(s.splice(l,3),l-=3),N1(s)}}}function ep(e){this._internalRoot=e}Nc.prototype.render=ep.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));var s=n.current,l=An();S1(s,l,e,n,null,null)},Nc.prototype.unmount=ep.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;S1(e.current,2,null,e,null,null),dc(),n[Mi]=null}};function Nc(e){this._internalRoot=e}Nc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ni();e={blockedOn:null,target:e,priority:n};for(var s=0;s<Fr.length&&n!==0&&n<Fr[s].priority;s++);Fr.splice(s,0,e),s===0&&I1(e)}};var M1=t.version;if(M1!=="19.1.1")throw Error(a(527,M1,"19.1.1"));ft.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var cT={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:tt,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mc.isDisabled&&Mc.supportsFiber)try{lr=Mc.inject(cT),Je=Mc}catch{}}return Il.createRoot=function(e,n){if(!o(e))throw Error(a(299));var s=!1,l="",h=Q0,d=X0,E=W0,T=null;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(h=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(E=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=T1(e,1,!1,null,null,s,l,h,d,E,T,null),e[Mi]=n.current,Ud(e),new ep(n)},Il.hydrateRoot=function(e,n,s){if(!o(e))throw Error(a(299));var l=!1,h="",d=Q0,E=X0,T=W0,D=null,K=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(E=s.onCaughtError),s.onRecoverableError!==void 0&&(T=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(D=s.unstable_transitionCallbacks),s.formState!==void 0&&(K=s.formState)),n=T1(e,1,!0,n,s??null,l,h,d,E,T,D,K),n.context=w1(null),s=n.current,l=An(),l=So(l),h=Ar(l),h.callback=null,Rr(s,h,l),s=l,n.current.lanes=s,ve(n,s),vi(n),e[Mi]=n.current,Ud(e),new Nc(n)},Il.version="19.1.1",Il}var Yx;function hN(){if(Yx)return Np.exports;Yx=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),Np.exports=cN(),Np.exports}var fN=hN();function dN(){const i=Ci(),t=FT();return kt.useEffect(()=>{t!=="POP"&&window.scrollTo({top:0,behavior:"instant"});const r=document.getElementById("main");r&&r.focus({preventScroll:!0})},[i,t]),null}function pN({headerMode:i,setHeaderMode:t}){const r=H.useMemo(()=>[{key:"projects",label:"PROJECTS",href:"/TU2025gradulate/projects/"},{key:"peoples",label:"PEOPLES",href:"/TU2025gradulate/peoples/"},{key:"showroom",label:"SHOWROOM",href:"/TU2025gradulate/showroom/"},{key:"guestbook",label:"GUESTBOOK",href:"/TU2025gradulate/guestbook/"},{key:"credits",label:"CREDITS",href:"/TU2025gradulate/credits/"}],[]),a=Ci(),o=H.useMemo(()=>{const u=a.pathname.replace(/^\/+/,"");if(!u)return;const f=u.split("/")[0];return["projects","peoples","showroom","guestbook","credits"].includes(f)?f:void 0},[a.pathname]);return v.jsxs(v.Fragment,{children:[v.jsx(V_,{items:r,activeKey:o,mode:i,autoOnScroll:i===He.GRADIENT,scrollThreshold:8,sticky:!0,maxWidth:1280,onModeChange:t}),v.jsx("main",{id:"main",tabIndex:-1,style:{outline:"none",width:"100vw",boxSizing:"border-box",padding:0},children:v.jsx(lw,{})}),v.jsx(k_,{title:"잔향 : 기억의 향기",nav:[{label:"PROJECTS",href:"/TU2025gradulate/projects/"},{label:"PEOPLES",href:"/TU2025gradulate/peoples/"},{label:"SHOWROOM",href:"/TU2025gradulate/showroom/"},{label:"GUESTBOOK",href:"/TU2025gradulate/guestbook/"},{label:"CREDITS",href:"/TU2025gradulate/credits/"}],copyright:["ⓒ 2025 TECH UNIV KOREA. ALL RIGHTS RESERVED.","TUKOREA DESIGN ENGINEERING 20TH GRADUATION EXHIBITION"],social:{youtube:{href:"https://youtube.com/",label:"YouTube"},instagram:{href:"https://instagram.com/",label:"Instagram"}},sidePadding:350,maxWidth:1220})]})}function mN({setHeaderMode:i}){return kt.useEffect(()=>{i(He.GRADIENT)},[i]),v.jsx(KA,{})}function gN({setHeaderMode:i}){return kt.useEffect(()=>{i(He.GRADIENT)},[i]),v.jsx(A4,{})}function yN({setHeaderMode:i}){return kt.useEffect(()=>{i(He.GRADIENT)},[i]),v.jsx(XI,{})}function vN({setHeaderMode:i}){return kt.useEffect(()=>{i(He.DARK)},[i]),v.jsx(gD,{})}function xN({setHeaderMode:i}){return kt.useEffect(()=>{i(He.DARK)},[i]),v.jsx(x5,{})}function _N({setHeaderMode:i}){return kt.useEffect(()=>{i(He.LIGHT)},[i]),v.jsx(oN,{})}function EN(){const[i,t]=H.useState(He.GRADIENT);return v.jsxs(Mw,{basename:"/TU2025gradulate/",children:[v.jsx(dN,{}),v.jsx(cw,{children:v.jsxs(Zi,{element:v.jsx(pN,{headerMode:i,setHeaderMode:t}),children:[v.jsx(Zi,{index:!0,element:v.jsx(vN,{setHeaderMode:t})}),v.jsx(Zi,{path:"projects/",element:v.jsx(yN,{setHeaderMode:t})}),v.jsx(Zi,{path:"peoples/",element:v.jsx(gN,{setHeaderMode:t})}),v.jsx(Zi,{path:"guestbook/",element:v.jsx(xN,{setHeaderMode:t})}),v.jsx(Zi,{path:"work/:pid",element:v.jsx(_N,{setHeaderMode:t})}),v.jsx(Zi,{path:"credits/",element:v.jsx(mN,{setHeaderMode:t})}),v.jsx(Zi,{path:"*",element:v.jsx(ow,{to:"/",replace:!0})})]})})]})}const Qx=typeof document<"u"?document.getElementById("root"):null;Qx&&fN.createRoot(Qx).render(v.jsx(EN,{}));
